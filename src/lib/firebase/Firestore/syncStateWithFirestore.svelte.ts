import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
import { userState } from "../../State/userState.svelte";
import { pagesState } from "$lib/State/pagesState.svelte";
import { publishUserStateSettingsToFirestore, publishPagesStateToFirestore } from "./publishToFirestoreDocs.svelte";

export const syncPagesStatePagesWithFirestore = function () {

    // $effect(() => {
    //     Object.entries(firebaseState.pageDocs).forEach(([id, page]) => {
    //         if (!page.lastUpdated ||
    //             typeof page.lastUpdated !== 'number') {
    //             untrack(() => {
    //                 console.warn("No page data to sync from firestore. Publishing local page state");
    //                 publishPagesStateToFirestore(id);
    //             })
    //             return;
    //         }

    //         untrack(() => {
    //             if (page.lastUpdated > pagesState.pages[id].lastUpdated) {
    //                 console.warn("Overwriting local page state with more recent firestore data");
    //                 pagesState.pages[id] = { ...pagesState.pages[id], ...page };
    //             } else {
    //                 console.warn("Overwriting firestore data with more recent localpage state");
    //                 publishPagesStateToFirestore(id);
    //             }
    //         })

    //     })

    // })
}

export const syncUserStateWithFirestore = function () {

    userState.onUpdate(() => {
        //console.log("userState Updated... more recent? ", userState.lastUpdated > firebaseState.userDoc.lastUpdated)
        if (userState.lastUpdated > firebaseState.userDoc.lastUpdated) {
            publishUserStateSettingsToFirestore();
        }
    })

    firebaseState.onUserDocUpdate(() => {
        //console.log("firebaseState userDoc updated... more recent? ", firebaseState.userDoc.lastUpdated > userState.lastUpdated)
        
        if (firebaseState.userDoc.lastUpdated === userState.lastUpdated) {
            console.log("firebaseState and userState are synced.")
            return
        } else if (firebaseState.userDoc.lastUpdated > userState.lastUpdated) {
            console.log("userState updated.")

            // update each userState property
            if (firebaseState.userDoc.themeName !== undefined) userState.themeName = firebaseState.userDoc.themeName;
            if (firebaseState.userDoc.spellcheck !== undefined) userState.spellcheck = firebaseState.userDoc.spellcheck;
        } else {
            publishUserStateSettingsToFirestore();
        }
    })
}
