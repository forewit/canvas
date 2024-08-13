import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { observePagesCollection, observeUserDoc } from "./Firestore/observeFirestoreDocs.svelte";
import { syncUserStateWithFirestore } from "./Firestore/syncStateWithFirestore.svelte";


class FirebaseState {
    private _user: User | null = $state(null)
    private _unsubscribeAuth: Function;
    private _unsubscribeUserDoc: Function = () => { };
    private _unsubscribeUserDocSync: Function = () => { };
    private _unsubscribePagesCollection: Function = () => { };
    private _userDocObservers: Function[] = [];

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
            this._unsubscribeUserDocSync = syncUserStateWithFirestore()
        } else {
            console.warn("Unsubscribing from user.");
            this._unsubscribeUserDoc();
            this._unsubscribePagesCollection();
            this._unsubscribeUserDocSync();
        }
    }

    subscribeToUserDoc(fn: Function) {
        this._userDocObservers.push(fn);
        return () => this.unsubscribeFromUserDoc(fn);
    }

    unsubscribeFromUserDoc(fn: Function) {
        this._userDocObservers = this._userDocObservers.filter(observer => observer !== fn);
    }

    triggerUserDocUpdate() {
        this._userDocObservers.forEach(callback => callback());
    }

    destroy() {
        console.warn("Unsubscribing from user, userDoc, and pagesCollection.");
        this._unsubscribeAuth();
        this._unsubscribeUserDoc();
        this._unsubscribePagesCollection();
        this._unsubscribeUserDocSync();
    }
}

export const firebaseState = new FirebaseState();