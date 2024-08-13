import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { observePagesCollection, observeUserDoc } from "./Firestore/observeFirestoreDocs.svelte";
import { syncUserAndFirebaseState, syncPagesAndFirebaseState } from "./Firestore/syncStateWithFirestore.svelte";


class FirebaseState {
    private _user: User | null = $state(null)
    private _userDocObservers: (()=>void)[] = [];
    private _pageDocsObservers: ((id: string)=>void)[] = [];
    private _pageDocs = $state<Record<string, any>>({});

    // unsubscribers
    private _unsubscribeAuth: Function;
    private _unsubscribeUserDoc: Function = () => { };
    private _unsubscribePagesCollection: Function = () => { };
    private _unsubscribeSyncUserState: Function = () => { };
    private _unsubscribeSyncPagesState: Function = () => { };

    userDoc = $state<any>({});
    isPublishing = $state(false);
    isLoading = $state(true)
    get user() { return this._user }
    get pageDocs() { return this._pageDocs }

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
            this._unsubscribeSyncUserState = syncUserAndFirebaseState()
            this._unsubscribeSyncPagesState = syncPagesAndFirebaseState()
        } else {
            console.warn("Unsubscribing from user.");
            this._unsubscribeUserDoc();
            this._unsubscribePagesCollection();
            this._unsubscribeSyncUserState();
            this._unsubscribeSyncPagesState();
        }
    }

    updatePageDoc(id: string, data: any) {
        this._pageDocs[id] = { ...this._pageDocs[id], ...data };
    }

    notifyUserDocObservers() {
        this._userDocObservers.forEach(callback => callback());
    }

    subscribeToUserDoc(fn: () => void) {
        this._userDocObservers.push(fn);
        return () => {
            this._userDocObservers = this._userDocObservers.filter(observer => observer !== fn);
        }
    }

    notifyPageDocObservers(id: string) {
        this._pageDocsObservers.forEach(fn => fn(id));
    }

    subscribeToPageDocs(fn: (id: string) => void) {
        this._pageDocsObservers.push(fn);
        return () => {
            this._pageDocsObservers = this._pageDocsObservers.filter(observer => observer !== fn);
        }

    }



    destroy() {
        console.warn("Destroying FirebaseState.");
        this._unsubscribeAuth();
        this._unsubscribeUserDoc();
        this._unsubscribePagesCollection();
        this._unsubscribeSyncUserState();
        this._unsubscribeSyncPagesState();
    }
}

export const firebaseState = new FirebaseState();