import { auth } from "$lib/scripts/firebase.client";
import { type User, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getContext, setContext } from 'svelte';
import { db } from "$lib/scripts/firebase.client";
import { doc, deleteDoc, collection, onSnapshot, setDoc, updateDoc, type DocumentData } from "firebase/firestore";
import { debounce } from "$lib/scripts/utils/debouncing";

const DEBOUNCE_DELAY = 1000;

function createFirebase() {
    let pageSubscribers: ((id: string, type: "added" | "modified" | "removed") => void)[] = []
    let publishingQueue: Record<string, { publish: () => void, data: any }> = $state({});
    let cleanupFunctions: (() => void)[] = []
    let user: User | null = $state(null)
    let isLoading = $state(true)
    let isPublishing = $derived(Object.keys(publishingQueue).length > 0)
    let userDoc: DocumentData = $state({})
    let pagesCollection: Record<string, DocumentData> = $state({})


    async function login(email: string, password: string) {
        await signInWithEmailAndPassword(auth, email, password)
    }

    async function logout() {
        await signOut(auth)
    }

    function authChange(currentUser: User | null) {
        user = currentUser

        if (currentUser) {
            console.warn("Logged in, subscribing to docs");
            cleanupFunctions.push(syncUserDoc())
            cleanupFunctions.push(syncPagesCollection())
        } else {
            console.warn("Logged out, unsubscribing from docs");
            cleanupFunctions.forEach((unsub) => unsub())
            cleanupFunctions = []
        }
    }

    function destroy() {
        console.warn("Closing Firebase");
        cleanupFunctions.forEach((unsub) => unsub())
        cleanupFunctions = []
    }

    function subscribeToPages(fn: (id: string, type: "added" | "modified" | "removed") => void) {
        pageSubscribers.push(fn)
        return () => {
            pageSubscribers = pageSubscribers.filter(subscriber => subscriber !== fn)
        }
    }

    function notifyPageSubscribers(id: string, type: "added" | "modified" | "removed") {
        pageSubscribers.forEach(fn => fn(id, type))
    }

    function syncUserDoc() {
        if (!user) {
            throw new Error("Cannot sync firestore user doc, user is null")
        }
        const userDocRef = doc(db, "users", user.uid);
        return onSnapshot(
            userDocRef,
            (userDocSnap) => {
                isLoading = false;
                if (!userDocSnap.exists()) {
                    console.log("Creating firestore user doc");
                    setDoc(userDocRef, {}, { merge: true });
                } else {
                    console.log("Fetched firestore user doc" + (userDocSnap.metadata.hasPendingWrites || userDocSnap.metadata.fromCache ? " (local)" : ""));
                    userDoc = userDocSnap.data()
                }
            },
            (error) => {
                console.error("Error while fetching firestore user doc", error)
            }
        );
    }

    function syncPagesCollection() {
        if (!user) {
            throw new Error("Cannot sync firestore pages collection, user is null")
        }
        const pagesCollectionRef = collection(db, "users", user.uid, "pages");
        return onSnapshot(pagesCollectionRef,
            (pagesCollectionSnap) => {
                pagesCollectionSnap.docChanges().forEach((change) => {
                    const id = change.doc.id;
                    if (change.type === "added" || change.type === "modified") {
                        console.log("Fetched firestore page doc " + id.slice(0, 4) + (change.doc.metadata.hasPendingWrites || change.doc.metadata.fromCache ? " (local)" : ""));
                        pagesCollection[id] = change.doc.data()
                    }
                    if (change.type === "removed") {
                        console.log("Page doc deleted from firestore" + id.slice(0, 4));
                        delete pagesCollection[id]
                    }
                    notifyPageSubscribers(id, change.type);
                })
            },
            (error) => {
                console.error("Error while fetching firestore pages collection", error)
            }
        );
    }

    async function publishUserDoc(data: any) {
        if (!user) {
            console.warn("Not logged in, cannot publish user doc to firestore");
            return
        }
        const userRef = doc(db, "users", user.uid);
        try {
            console.log("Publishing app data to firestore");
            await updateDoc(userRef, data);
        } catch (err) {
            console.error("Error while publishing user doc to firestore", err);
        }
    }

    async function publishPageDoc(id: string, data?: any) {
        if (!user) {
            console.warn("Not logged in, cannot publish pages collection to firestore");
            return
        }
        if (!data) {
            console.warn("deleting page doc from firestore: ", id.slice(0, 4));
            await deleteDoc(doc(db, "users", user.uid, "pages", id));
            return
        }

        const pageRef = doc(db, "users", user.uid, "pages", id);
        try {
            console.log("Publishing page doc to firestore:" + id.slice(0, 4));
            if (pagesCollection[id]) {
                await updateDoc(pageRef, data);
            } else {
                await setDoc(pageRef, data);
            }
        } catch (err) {
            console.error("Error while publishing page doc to firestore", err);
        }
    }


    function publishDataToUserDoc(data: any) {
        if (publishingQueue["user"] !== undefined) {
            publishingQueue["user"].data = data;
            publishingQueue["user"].publish(); // call it so that the debounce is triggered
            return;
        }

        publishingQueue["user"] = {
            publish: debounce(async () => {
                await publishUserDoc(publishingQueue["user"].data);
                delete publishingQueue["user"];
            }, DEBOUNCE_DELAY),
            data: data
        }
        publishingQueue["user"].publish();
    }

    function publishDataToPageDoc(id: string, data?: any) {
        if (publishingQueue[id] !== undefined) {
            publishingQueue[id].data = data;
            publishingQueue[id].publish(); // call it so that the debounce is triggered
            return;
        }

        publishingQueue[id] = {
            publish: debounce(async () => {
                await publishPageDoc(id, publishingQueue[id].data || undefined);
                delete publishingQueue[id];
            }, DEBOUNCE_DELAY),
            data: data || undefined
        }
        publishingQueue[id].publish();
    }

    cleanupFunctions.push(auth.onAuthStateChanged(authChange))

    return {
        get user() { return user },
        get isLoading() { return isLoading },
        get isPublishing() { return isPublishing },
        get userDoc() { return userDoc },
        get pagesCollection() { return pagesCollection },
        get login() { return login },
        get logout() { return logout },
        get destroy() { return destroy },
        get publishDataToUserDoc() { return publishDataToUserDoc },
        get publishDataToPageDoc() { return publishDataToPageDoc },
        get subscribeToPages() { return subscribeToPages },
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