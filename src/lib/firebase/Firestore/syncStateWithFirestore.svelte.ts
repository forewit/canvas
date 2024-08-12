import { firebaseState } from "$lib/Firebase/firebaseState.svelte";
import { getUserState } from "../../State/userState.svelte";
import { getPagesState } from "$lib/State/pagesState.svelte";
import { publishUserStateSettingsToFirestore, publishPagesStateToFirestore } from "./publishToFirestoreDocs.svelte";
import { untrack } from "svelte";

export const syncPagesStatePagesWithFirestore = function () {
    const pagesState = getPagesState();

    $effect(() => {
        Object.entries(firebaseState.pageDocs).forEach(([id, page]) => {
            if (!page.lastUpdated ||
                typeof page.lastUpdated !== 'number') {
                untrack(() => {
                    console.warn("No page data to sync from firestore. Publishing local page state");
                    publishPagesStateToFirestore(id);
                })
                return;
            }

            untrack(() => {
                if (page.lastUpdated > pagesState.pages[id].lastUpdated) {
                    console.warn("Overwriting local page state with more recent firestore data");
                    pagesState.pages[id] = { ...pagesState.pages[id], ...page };
                } else {
                    console.warn("Overwriting firestore data with more recent localpage state");
                    publishPagesStateToFirestore(id);
                }
            })

        })

    })
}

export const syncUserStateWithFirestore = function () {
    const userState = getUserState();

    userState.onUpdate(() => {
        if (userState.lastUpdated > firebaseState.userDoc.lastUpdated) {
            console.log("User doc: 📃→🔥")
            publishUserStateSettingsToFirestore();
        }
    })

    $effect(() => {
        if (!firebaseState.userDoc ||
            !firebaseState.userDoc.lastUpdated ||
            typeof firebaseState.userDoc.lastUpdated !== 'number') {
            untrack(() => {
                console.warn("No 🔥 user doc: 📄→🔥")
                publishUserStateSettingsToFirestore();
            })
            return;
        }

        untrack(() => {
            if (userState.lastUpdated < firebaseState.userDoc.lastUpdated) {
                console.log("User doc: 🔥→📄")
                if (firebaseState.userDoc.themeName !== undefined) userState.themeName = firebaseState.userDoc.themeName;
                if (firebaseState.userDoc.spellcheck !== undefined) userState.spellcheck = firebaseState.userDoc.spellcheck;
                console.log("last user update: " + userState.lastUpdated);
                console.log("last firestore update: " + firebaseState.userDoc.lastUpdated);
            } else {
                console.log("User doc: 📄→🔥")
                publishUserStateSettingsToFirestore();
            }
        })
    })
}
