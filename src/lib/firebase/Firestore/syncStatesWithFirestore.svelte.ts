import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
import { userState } from "../../State/userState.svelte";
import { pagesState } from "$lib/State/pagesState.svelte";
import { publishUserSettingsToFirestore, publishPageToFirestore } from "./publishToFirestoreDocs.svelte";

export const syncPagesAndFirebaseState = function () {
    const unsubscribeFromPagesState = pagesState.subscribe((id: string) => {
        if (!pagesState.pages[id] || !firebaseState.pageDocs[id] || pagesState.pages[id].lastUpdated > firebaseState.pageDocs[id].lastUpdated) {
            publishPageToFirestore(id);
        }
    })

    const unsubscribeFromFirebaseState = firebaseState.subscribeToPageDocs((id: string) => {
        if (!firebaseState.pageDocs[id]) {
            if (pagesState.pages[id]) {
                console.log(`page ${id.slice(0, 4)} removed.`);
                delete pagesState.pages[id];
            }
        }
        else if (firebaseState.pageDocs[id].lastUpdated === undefined) {
            console.log(`ignoring undefined page: ${id.slice(0, 4)}...`)
        }
        else if (!pagesState.pages[id]) {
            console.log(`page ${id.slice(0, 4)} added from firestore.`)
            pagesState.pages[id] = firebaseState.pageDocs[id];
            //pagesState.createPage({ id: id, page: firebaseState.pageDocs[id] }, false);
        }
        else if (firebaseState.pageDocs[id].lastUpdated === pagesState.pages[id].lastUpdated) {
            console.log(`page ${id.slice(0, 4)} is synced.`)
        }
        else if (firebaseState.pageDocs[id].lastUpdated > pagesState.pages[id].lastUpdated) {
            console.log(`page ${id.slice(0, 4)} updated from firestore.`)
            pagesState.pages[id] = firebaseState.pageDocs[id];
            //pagesState.createPage({ id: id, page: firebaseState.pageDocs[id] }, false);
        }
        else {
            publishPageToFirestore(id);
        }
    })

    return () => {
        unsubscribeFromPagesState();
        unsubscribeFromFirebaseState();
    }
}

export const syncUserAndFirebaseState = function () {
    const unsubscribeUserState = userState.subscribe(() => {
        if (userState.lastUpdated > firebaseState.userDoc.lastUpdated) {
            publishUserSettingsToFirestore();
        }
    })

    const unsubscribeUserDoc = firebaseState.subscribeToUserDoc(() => {
        if (firebaseState.userDoc.lastUpdated === userState.lastUpdated) {
            console.log("User is synced.")
            return
        } else if (firebaseState.userDoc.lastUpdated > userState.lastUpdated) {
            console.log("userState updated.")
            userState.untrack(()=>{
                Object.assign(userState, firebaseState.userDoc);
            })
        } else {
            publishUserSettingsToFirestore();
        }
    })

    return () => {
        unsubscribeUserState();
        unsubscribeUserDoc();
    }
}
