import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { getContext, onDestroy, setContext } from "svelte";
import { fetchUserDocOnSnapshot } from "./Firestore/fetchFirestoreDocs.svelte";
import { syncUserSettingsFromFirestore } from "./Firestore/syncUserSettingsFromFirestore.svelte";

class FirebaseState {
    private _user: User | null = $state(null)

    userDocData = $state<any>({});
    isPublishing = $state(false);
    isLoading = $state(true)
    get user() { return this._user }

    constructor() {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            this._user = currentUser
            this.isLoading = false
        })

        $effect(() => {
            if (this.user) {
                console.warn("Subscribing to user");
                const unsubscribe = fetchUserDocOnSnapshot()
                return ()=>{
                    console.warn("Unsubscribing from user");
                    unsubscribe()
                }
            }
        })

        onDestroy(() => {
            console.warn("Unsubscribing from auth");
            unsubscribe()
        })
    }
}

const FIREBASE_KEY = Symbol("FIREBASE");

export function setFirebaseState() {
    return setContext(FIREBASE_KEY, new FirebaseState())
}

export function getFirebaseState() {
    return getContext<ReturnType<typeof setFirebaseState>>(FIREBASE_KEY)
}