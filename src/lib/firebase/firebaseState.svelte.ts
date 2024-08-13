import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { observePagesCollection, observeUserDoc } from "./Firestore/observeFirestoreDocs.svelte";
import { syncPagesStatePagesWithFirestore, syncUserStateWithFirestore } from "./Firestore/syncStateWithFirestore.svelte";


class FirebaseState {
    private _user: User | null = $state(null)
    private _unsubscribeAuth: () => void;
    private _unsubscribeUserDoc: () => void = () => { };
    private _unsubscribePagesCollection: () => void = () => { };
    private _userDocUpdateCallbacks: Array<() => void> = [];

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
            console.warn("Subscribing to user.");
            this._unsubscribeUserDoc = observeUserDoc()
            this._unsubscribePagesCollection = observePagesCollection()

            syncUserStateWithFirestore()
            syncPagesStatePagesWithFirestore()
        } else {
            console.warn("Unsubscribing from user.");
            this._unsubscribeUserDoc();
            this._unsubscribePagesCollection();
        }
    }

    onUserDocUpdate(callback: () => void) {
        this._userDocUpdateCallbacks.push(callback);
    }

    triggerUserDocUpdate() {
        this._userDocUpdateCallbacks.forEach(callback => callback());
    }

    destroy() {
        console.warn("Unsubscribing from user, userDoc, and pagesCollection.");
        this._unsubscribeAuth();
        this._unsubscribeUserDoc();
        this._unsubscribePagesCollection();
    }
}

export const firebaseState = new FirebaseState();