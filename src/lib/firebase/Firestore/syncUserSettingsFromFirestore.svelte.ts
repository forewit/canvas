import { getFirebaseState } from "$lib/Firebase/firebaseState.svelte";
import { untrack } from "svelte";
import { getUserState } from "../../State/userState.svelte";


export const syncUserSettingsFromFirestore = function () {
    const firebaseState = getFirebaseState();
    const userState = getUserState();

    $effect(() => {
        if (!firebaseState.userDocData ||
            !firebaseState.userDocData.lastUpdated ||
            !firebaseState.userDocData.settings ||
            typeof firebaseState.userDocData.lastUpdated !== 'number') return;

        untrack(() => {
            if (userState.lastUpdated < firebaseState.userDocData.lastUpdated) {
                console.warn("Overwriting user state with more recent data from firestore");
                userState.settings = { ...userState.settings, ...firebaseState.userDocData.settings };
            } else {
                //TODO publish user state to firestore
            }
        })

    })
}
