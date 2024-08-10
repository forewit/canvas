import { getFirebaseState } from "$lib/Firebase/firebaseState.svelte";
import { untrack } from "svelte";
import { getUserState } from "../../State/userState.svelte";
import { publishUserSettingsToFirestore } from "./publishToFirestoreDocs.svelte";


export const syncUserSettingsFromFirestore = function () {
    const firebaseState = getFirebaseState();
    const userState = getUserState();

    $effect(() => {
        if (!firebaseState.userDocData ||
            !firebaseState.userDocData.lastUpdated ||
            !firebaseState.userDocData.settings ||
            typeof firebaseState.userDocData.lastUpdated !== 'number') {
                untrack(() => {
                    console.warn("No user data to sync from firestore. Publishing local user state");
                    publishUserSettingsToFirestore();
                })
                return;
            }

        untrack(() => {
            if (userState.lastUpdated < firebaseState.userDocData.lastUpdated) {
                console.warn("Overwriting local user state with more recent firestore data");
                userState.settings = { ...userState.settings, ...firebaseState.userDocData.settings };
            } else {
                console.warn("Overwriting firestore data with more recent localuser state");
                publishUserSettingsToFirestore();
            }
        })
    })
}
