import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import { observePagesCollection, observeUserDoc } from "./Firestore/observeFirestoreDocs.svelte";
import { syncUserStateAndFirestore, syncPagesStateAndFirestore } from "./Firestore/syncStatesWithFirestore.svelte";
import { observable, type Observable } from "$lib/Utils/observable";

function createFirebaseState() {
    let user: User | null = $state(null)
    let isLoading = $state(true)
    let isPublishing = $state(false)

    let userDoc: Observable<any> = observable({})
    let pageDocs: Observable<Record<string, any>> = observable({})

    // unsubscribers
    let unsubscribeUserDoc = () => { }
    let unsubscribePagesCollection = () => { }
    let unsubscribeSyncUserState = () => { }
    let unsubscribeSyncPagesState = () => { }


    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
        user = currentUser
        isLoading = false
        if (user) {
            console.warn("Subscribing to user.");
            unsubscribeUserDoc = observeUserDoc()
            unsubscribePagesCollection = observePagesCollection()
            unsubscribeSyncUserState = syncUserStateAndFirestore()
            unsubscribeSyncPagesState = syncPagesStateAndFirestore()
        } else {
            console.warn("Unsubscribing from user.");
            unsubscribeUserDoc();
            unsubscribePagesCollection();
            unsubscribeSyncUserState();
            unsubscribeSyncPagesState();
        }
    })

    const destroy = function () {
        console.warn("Destroying FirebaseState.");
        unsubscribeAuth();
        unsubscribeUserDoc();
        unsubscribePagesCollection();
        unsubscribeSyncUserState();
        unsubscribeSyncPagesState();
    }

    return {
        get isPublishing() { return isPublishing },
        set isPublishing(value) { isPublishing = value },
        get userDoc() { return userDoc },
        set userDoc(value) { userDoc = observable(value) },

        get pageDocs() { return pageDocs},
        get user() { return user },
        get isLoading() { return isLoading },
        get destroy() { return destroy },
    }
}

export const firebaseState = createFirebaseState();