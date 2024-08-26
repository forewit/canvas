import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { getContext, setContext } from 'svelte';
import { db } from "$lib/Firebase/firebase.client";
import { doc, deleteDoc, collection, onSnapshot, setDoc, updateDoc, type DocumentData } from "firebase/firestore";
import { debounce } from "$lib/Utils/debouncing";

const DEBOUNCE_DELAY = 1000;

class Firebase {
    user: User | null = $state(null)
    isLoading = $state(true)
    isPublishing = $state(false)
    userDoc: DocumentData = $state({})
    pagesCollection: Record<string, DocumentData> = $state({})

    private pageSubscribers: ((id: string) => void)[] = []
    private pendingPublishes: Record<string, () => void> = {};
    private cleanupFunctions: (() => void)[] = []

    constructor() {
        this.cleanupFunctions.push(auth.onAuthStateChanged(this.authChange))
    }

    destroy() {
        console.warn("Closing Firebase");
        this.cleanupFunctions.forEach((unsub) => unsub())
        this.cleanupFunctions = []
    }

    publishDataToUserDoc(data: any) {
        this.isPublishing = true;
        this.debounced_publishDataToUserDoc(data);
    }

    publishDataToPageDoc(id: string, data?: any) {
        if (this.pendingPublishes[id]) {
            this.pendingPublishes[id](); // call it so that the debounce is triggered
            return
        }

        this.pendingPublishes[id] = debounce(() => {
            delete this.pendingPublishes[id];
            this.publishPageDoc(id, data);
            console.log(id, data)
        }, DEBOUNCE_DELAY);

        this.pendingPublishes[id]();
    }

    subscribeToPages(fn: (id: string) => void) {
        this.pageSubscribers.push(fn)
        return () => {
            this.pageSubscribers = this.pageSubscribers.filter(subscriber => subscriber !== fn)
        }
    }

    notifyPageSubscribers(id: string) {
        this.pageSubscribers.forEach(fn => fn(id))
    }

    private authChange = (currentUser: User | null) => {
        this.user = currentUser

        if (currentUser) {
            console.warn("Logged in, subscribing to docs");
            this.cleanupFunctions.push(this.syncUserDoc())
            this.cleanupFunctions.push(this.syncPagesCollection())
        } else {
            console.warn("Logged out, unsubscribing from docs");
            this.cleanupFunctions.forEach((unsub) => unsub())
            this.cleanupFunctions = []
        }
    }

    private syncUserDoc() {
        if (!this.user) {
            throw new Error("Cannot sync firestore user doc, user is null")
        }
        const userDocRef = doc(db, "users", this.user.uid);
        return onSnapshot(
            userDocRef,
            (userDocSnap) => {
                this.isLoading = false;
                if (!userDocSnap.exists()) {
                    console.log("Creating firestore user doc");
                    setDoc(userDocRef, {}, { merge: true });
                } else {
                    console.log("Fetched firestore user doc" + (userDocSnap.metadata.hasPendingWrites || userDocSnap.metadata.fromCache ? " (local)" : ""));
                    this.userDoc = userDocSnap.data()
                }
            },
            (error) => {
                console.error("Error while fetching firestore user doc", error)
            }
        );
    }

    private syncPagesCollection() {
        if (!this.user) {
            throw new Error("Cannot sync firestore pages collection, user is null")
        }
        const pagesCollectionRef = collection(db, "users", this.user.uid, "pages");
        return onSnapshot(pagesCollectionRef,
            (pagesCollectionSnap) => {
                pagesCollectionSnap.docChanges().forEach((change) => {
                    const id = change.doc.id;
                    if (change.type === "added" || change.type === "modified") {
                        console.log("Fetched firestore page doc " + id.slice(0, 4) + (change.doc.metadata.hasPendingWrites || change.doc.metadata.fromCache ? " (local)" : ""));
                        this.pagesCollection[id] = change.doc.data()
                    }
                    if (change.type === "removed") {
                        console.log("Page doc deleted from firestore" + id.slice(0, 4));
                        delete this.pagesCollection[id]
                    }
                    this.notifyPageSubscribers(id);
                })
            },
            (error) => {
                console.error("Error while fetching firestore pages collection", error)
            }
        );
    }

    private debounced_publishDataToUserDoc = debounce(async (data: any) => {
        if (!this.user) {
            console.warn("Not logged in, cannot publish user doc to firestore");
            return
        }
        this.isPublishing = true;
        const userRef = doc(db, "users", this.user.uid);

        try {
            console.log("Publishing app data to firestore");
            await updateDoc(userRef, data);

        } catch (err) {
            console.error("Error while publishing user doc to firestore", err);
        } finally {
            this.isPublishing = false;
        }
    }, DEBOUNCE_DELAY)

    private async publishPageDoc(id: string, data?: any) {
        if (!this.user) {
            console.warn("Not logged in, cannot publish pages collection to firestore");
            return
        }
        if (!data) {
            console.warn("deleting page doc from firestore: ", id.slice(0, 4));
            await deleteDoc(doc(db, "users", this.user.uid, "pages", id));
            this.isPublishing = false;
            return
        }

        this.isPublishing = true;
        const pageRef = doc(db, "users", this.user.uid, "pages", id);
        try {
            console.log("Publishing page doc to firestore:" + id.slice(0, 4));
            if (this.pagesCollection[id]) {
                await updateDoc(pageRef, data);
            } else {
                await setDoc(pageRef, data);
            }
        } catch (err) {
            console.error("Error while publishing page doc to firestore", err);
        } finally {
            this.isPublishing = false;
        }
    }
}

const FIREBASE_KEY = Symbol('firebase')

export const setFirebaseContext = (): Firebase => {
    const nFirebase = new Firebase()
    return setContext(FIREBASE_KEY, nFirebase)
}

export const getFirebaseContext = (): ReturnType<typeof setFirebaseContext> => {
    return getContext(FIREBASE_KEY)
}