import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { fetchPagesCollectionOnSnapshot, fetchUserDocOnSnapshot } from "./Firestore/fetchFirestoreDocs.svelte";

class FirebaseState {
    private _user: User | null = $state(null)
    private _unsubscribeAuth: () => void;
    private _unsubscribeUserDoc: () => void = () => { };
    private _unsubscribePagesCollection: () => void = () => { };

    userDoc = $state<any>({});
    pageDocs = $state<Record<string, any>>({});
    isPublishing = $state(false);
    isLoading = $state(true)
    get user() { return this._user }

    constructor() {
        this._unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
            this._user = currentUser
            this.isLoading = false
            this.onAuthChange()
        })
    }

    private onAuthChange() {
        if (this.user) {
            console.warn("Subscribing to user");
            this._unsubscribeUserDoc = fetchUserDocOnSnapshot()
            this._unsubscribePagesCollection = fetchPagesCollectionOnSnapshot()
        } else {
            console.warn("Unsubscribing from user");
            this._unsubscribeUserDoc();
            this._unsubscribePagesCollection();
        }
    }

    destroy() {
        this._unsubscribeAuth();
        this._unsubscribeUserDoc();
        this._unsubscribePagesCollection();
    }
}

export const firebaseState = new FirebaseState();