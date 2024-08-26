import { getFirebaseState } from "$lib/Firebase/firebaseState.svelte";
import { getUserState } from "$lib/State/userState.svelte";
import { type Page } from "$lib/State/pageState.svelte";

export const syncPageStateWithFirestore = function (page: Page) {
    const firebaseState = getFirebaseState();
    const userState = getUserState();

    page.onUpdate(() => {
    })

    page.onDestroy(() => {

    })
}