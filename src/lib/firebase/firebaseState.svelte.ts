import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { observePagesCollection, observeUserDoc } from "./Firestore/observeFirestoreDocs.svelte";
import { syncUserAndFirebaseState, syncPagesAndFirebaseState } from "./Firestore/syncStatesWithFirestore.svelte";

type FirebaseState = {
    userDoc: any,
    readonly pageDocs: Record<string, any>,
    readonly user: User | null,
    readonly isLoading: boolean,
    isPublishing: boolean,
    readonly destroy: () => void
    readonly subscribeToPageDocs: (fn: Function) => () => void
    readonly subscribeToUserDoc: (fn: Function) => () => void
}

function createFirebaseState(): FirebaseState {
    let user: User | null = $state(null)
    let isLoading = $state(true)
    let isPublishing = $state(false)
    let userDoc: any = {}
    let pageDocs: Record<string, any> = new Proxy({}, {
        set(target: any, prop: any, value: any) {
            if (value === target[prop]) return true
            target[prop] = value
            notifyPageDocObservers(prop)
            return true
        },
        deleteProperty(target: any, prop: any) {
            if (prop in target) {
                delete target[prop]
                notifyPageDocObservers(prop)
                return true
            }
            return false
        }
    })
    let userDocObservers: Function[] = []
    let pageDocObservers: Function[] = []

    let unsubscribeUserDoc = () => { }
    let unsubscribePagesCollection = () => { }
    let unsubscribeSyncUserState = () => { }
    let unsubscribeSyncPagesState = () => { }
    let unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
        user = currentUser
        isLoading = false

        if (user) {
            console.warn("Subscribing to user.");
            unsubscribeUserDoc = observeUserDoc()
            unsubscribePagesCollection = observePagesCollection()
            unsubscribeSyncUserState = syncUserAndFirebaseState()
            unsubscribeSyncPagesState = syncPagesAndFirebaseState()
        } else {
            console.warn("Unsubscribing from user.");
            unsubscribeUserDoc();
            unsubscribePagesCollection();
            unsubscribeSyncUserState();
            unsubscribeSyncPagesState();
        }
    })

    const subscribeToUserDoc = function (fn: Function) {
        userDocObservers.push(fn)
        return () => {
            userDocObservers = userDocObservers.filter(observer => observer !== fn)
        }
    }

    const notifyUserDocObservers = function () {
        userDocObservers.forEach(callback => callback())
    }

    const subscribeToPageDocs = function (fn: Function) {
        pageDocObservers.push(fn)
        return () => {
            pageDocObservers = pageDocObservers.filter(observer => observer !== fn)
        }
    }

    const notifyPageDocObservers = function (id: string) {
        pageDocObservers.forEach(callback => callback(id))
    }

    const destroy = function () {
        console.warn("Destroying FirebaseState.");
        unsubscribeAuth();
        unsubscribeUserDoc();
        unsubscribePagesCollection();
        unsubscribeSyncUserState();
        unsubscribeSyncPagesState();
    }

    return {
        get user() { return user },
        get isLoading() { return isLoading },
        get isPublishing() { return isPublishing },
        set isPublishing(value) { isPublishing = value },
        get destroy() { return destroy },
        get userDoc() { return userDoc },
        set userDoc(value) { userDoc = value; notifyUserDocObservers() },
        get pageDocs() { return pageDocs },
        get subscribeToUserDoc() { return subscribeToUserDoc },
        get subscribeToPageDocs() { return subscribeToPageDocs }
    }

}

export const firebaseState = createFirebaseState();