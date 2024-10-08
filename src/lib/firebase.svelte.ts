import { auth, db } from "$lib/firebase.client";
import { type User, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, deleteDoc, collection, onSnapshot, setDoc, type DocumentData } from "firebase/firestore";
import { debounce } from "$lib/utils/debouncing";
import { getContext, setContext } from 'svelte';

function createFirebase() {
    const DEBOUNCE_DELAY = 1000;

    let publishQueue: Record<string, { publish: () => void, data: DocumentData | null }> = $state({});
    let isLoading = $state(true)
    let isPublishing = $derived(Object.keys(publishQueue).length > 0)
    let user: User | null = $state(null)
    let userDocPath = $derived.by(() => { return "users/" + user?.uid })
    let pendingSubscriptions: (() => void)[] = []
    let cleanupFunctions: (() => void)[] = []

    function subscribeToDoc(path: string[], fn: (id: string, doc: DocumentData | null) => void) {
        if (!user) {
            pendingSubscriptions.push(() => subscribeToDoc(path, fn));
            return;
        }

        const docRef = doc(db, userDocPath, ...path);
        const unsub = onSnapshot(docRef,
            (snap) => { fn(snap.id, snap.exists() ? snap.data() : null) },
            (error) => { console.error("Error while syncing firestore doc", path, error) }
        )
        cleanupFunctions.push(unsub)
    }

    function subscribeToCollection(path: string[], fn: (id: string, doc: DocumentData | null) => void) {
        if (!user) {
            pendingSubscriptions.push(() => subscribeToCollection(path, fn));
            return;
        }

        const colRef = collection(db, userDocPath, ...path);
        const unsub = onSnapshot(colRef,
            (snap) => {
                snap.docChanges().forEach(change => {
                    console.log("fetched doc", change.doc.id, (snap.metadata.fromCache || snap.metadata.hasPendingWrites) ? "(local)" : "(server)");
                    fn(change.doc.id, change.type === "removed" ? null : change.doc.data())
                });
            },
            (error) => { console.error("Error while syncing firestore collection", path, error) }
        )
        cleanupFunctions.push(unsub)
    }

    function publishDoc(path: string[], data: DocumentData | null) {
        const pathStr = path.join("/");
        if (publishQueue[pathStr] !== undefined) {
            publishQueue[pathStr].data = data;
            publishQueue[pathStr].publish(); // call it so that the debounce is triggered
            return;
        }

        publishQueue[pathStr] = {
            publish: debounce(async () => {
                try {
                    const docRef = doc(db, userDocPath, ...path);
                    if (!data) {
                        console.log("Deleting doc from firestore", pathStr);
                        await deleteDoc(docRef);
                    } else {
                        console.log("Publishing doc to firestore", pathStr);
                        await setDoc(docRef, publishQueue[pathStr].data);
                    }
                } catch (error) {
                    console.error("Error while publishing doc to firestore", pathStr, error);
                } finally {
                    delete publishQueue[pathStr];
                }
            }, DEBOUNCE_DELAY),
            data: data
        }
        publishQueue[pathStr].publish();
    }


    async function login(email: string, password: string) {
        await signInWithEmailAndPassword(auth, email, password)
    }

    async function logout() {
        await signOut(auth)
    }

    const unsubAuth = auth.onAuthStateChanged((currentUser) => {
        user = currentUser
        isLoading = false

        if (currentUser === null) {
            console.warn("Logged out, unsubscribing from docs");
            cleanupFunctions.forEach((unsub) => unsub())
            cleanupFunctions = []
        } else {
            console.warn("Logged in, subscribing to docs");
            pendingSubscriptions.forEach(fn => fn())
            pendingSubscriptions = []
        }
    })

    function destroy() {
        console.warn("Closing Firebase");
        cleanupFunctions.forEach((unsub) => unsub())
        cleanupFunctions = []
        unsubAuth()
    }

    return {
        get user() { return user },
        get isLoading() { return isLoading },
        get isPublishing() { return isPublishing },
        get login() { return login },
        get logout() { return logout },
        get destroy() { return destroy },
        get subscribeToCollection() { return subscribeToCollection },
        get subscribeToDoc() { return subscribeToDoc },
        get publishDoc() { return publishDoc },
    }
}

const FIREBASE_KEY = Symbol('firebase')

export const setFirebaseContext = () => {
    const nFirebase = createFirebase()
    return setContext(FIREBASE_KEY, nFirebase)
}

export const getFirebaseContext = (): ReturnType<typeof setFirebaseContext> => {
    return getContext(FIREBASE_KEY)
}