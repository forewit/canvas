import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
import { userState } from "$lib/State/userState.svelte";
import { pagesState } from "$lib/State/pagesState.svelte";
import { publishPageToFirestore, publishUserSettingsToFirestore } from "./publishToFirestoreDocs.svelte";


export const syncUserStateAndFirestore = function () {
    const unsubscribeUserState = userState.subscribe(() => {
        if (userState.get().lastUpdated > firebaseState.userDoc.get().lastUpdated) {
            firebaseState.isPublishing = true;
            publishUserSettingsToFirestore();
        }
    })

    const unsubscribeUserDoc = firebaseState.userDoc.subscribe(() => {
        if (firebaseState.userDoc.get().lastUpdated === userState.get().lastUpdated) {
            console.log("User is synced.")
            return
        } else if (firebaseState.userDoc.get().lastUpdated > userState.get().lastUpdated) {
            console.log("userState updated.")
            userState.untrack(() => {
                Object.assign(userState, firebaseState.userDoc);
            })
        } else {
            firebaseState.isPublishing = true;
            publishUserSettingsToFirestore();
        }
    })

    return () => {
        unsubscribeUserState();
        unsubscribeUserDoc();
    }
}


export const syncPagesStateAndFirestore = function () {
    const unsubscribeFromPagesState = pagesState.subscribe((id: string) => {
        if (!pagesState.get()[id] || !firebaseState.pageDocs.get()[id] || pagesState.get()[id].lastUpdated > firebaseState.pageDocs.get()[id].lastUpdated) {
            firebaseState.isPublishing = true;
            publishPageToFirestore(id);
        }
    })

    const unsubscribeFromFirebaseState = firebaseState.pageDocs.subscribe((id: string) => {
        if (!firebaseState.pageDocs.get()[id]) {
            if (pagesState.get()[id]) {
                console.log(`page ${id.slice(0, 4)} removed.`);
                delete pagesState.get()[id];
            }
        }
        else if (firebaseState.pageDocs.get()[id].lastUpdated === undefined) {
            console.log(`ignoring undefined page: ${id.slice(0, 4)}...`)
        }
        else if (!pagesState.get()[id]) {
            console.log(`page ${id.slice(0, 4)} added from firestore.`)
            pagesState.get()[id] = firebaseState.pageDocs.get()[id];
        }
        else if (firebaseState.pageDocs.get()[id].lastUpdated === pagesState.get()[id].lastUpdated) {
            console.log(`page ${id.slice(0, 4)} is synced.`)
        }
        else if (firebaseState.pageDocs.get()[id].lastUpdated > pagesState.get()[id].lastUpdated) {
            console.log(`page ${id.slice(0, 4)} updated from firestore.`)
            pagesState.get()[id], firebaseState.pageDocs.get()[id];
        }
        else {
            firebaseState.isPublishing = true;
            publishPageToFirestore(id);
        }
    })

    return () => {
        unsubscribeFromPagesState();
        unsubscribeFromFirebaseState();
    }
}
