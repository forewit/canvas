import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { getContext, setContext, untrack } from 'svelte';
import { db } from "$lib/Firebase/firebase.client";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { getAppContext } from "$lib/Firebase/app.svelte";
import { debounce } from "$lib/Utils/debouncing";

const DEBOUNCE_DELAY = 1000;

class Firebase {
    app: ReturnType<typeof getAppContext> = getAppContext()
    user: User | null = $state(null)
    isLoading = $state(true)
    isPublishing = $state(false)
    userDoc: any = $state({})

    private lastLocalUpdate = $state(0)
    private unsubscribers: (() => void)[] = []

    constructor() {
        // listens for local updates
        $effect(() => {
            this.app.getUserUpdatableStates();
            untrack(()=>{
                if (this.isLoading) return
                this.lastLocalUpdate = Date.now()
            })
        })

        // syncs app updates and Firestore
        $effect(() => {
            if (this.isLoading) return

            if (this.userDoc.lastUpdated === undefined || this.lastLocalUpdate > this.userDoc.lastUpdated) {
                untrack(() => { 
                    const data = this.app.export()
                    this.publish({ ...data, lastUpdated: this.lastLocalUpdate }) 
                })
            }
            else if (this.userDoc.lastUpdated > this.lastLocalUpdate) {
                console.log("Updated app data")
                untrack(() => { this.app.update(this.userDoc) })
            }
            else if (this.userDoc.lastUpdated === this.lastLocalUpdate) {
                console.log("firestore user doc and app are in sync");
            }
        })

        // syncs auth state
        $effect(() => {
            const unsub = auth.onAuthStateChanged(this.authChange)
            return () => {
                console.warn("Closing Firebase");
                this.unsubscribers.forEach((unsub) => unsub())
                this.unsubscribers = []
                unsub()
            }
        })
    }

    private authChange = (currentUser: User | null) => {
        this.user = currentUser

        if (currentUser) {
            console.warn("Logged in, subscribing to docs");
            this.unsubscribers.push(this.syncUserDoc())
        } else {
            console.warn("Logged out, unsubscribing from docs");
            this.unsubscribers.forEach((unsub) => unsub())
            this.unsubscribers = []
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

    private publish(data: any) {
        this.isPublishing = true;
        this.debounced_publish(data);
    }

    private debounced_publish = debounce(async (data: any) => {
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
}

const FIREBASE_KEY = Symbol('firebase')

export const setFirebaseContext = (): Firebase => {
    const nFirebase = new Firebase()
    return setContext(FIREBASE_KEY, nFirebase)
}

export const getFirebaseContext = (): ReturnType<typeof setFirebaseContext> => {
    return getContext(FIREBASE_KEY)
}