import { auth } from "$lib/Firebase/firebase.client";
import type { User } from "firebase/auth";
import type { UserData, Doc } from "$lib/State/userState.svelte";

function SetupFirebaseState() {
    let user: User | null = $state(null)
    let userData: UserData | null = $state(null)
    let docs: Record<string, Doc> = $state({})
    let fetchStatus: undefined | "loading" | "loaded" | "error" = $state()
    let publishStatus: undefined | "saving" | "saved" | "error" = $state()

    auth.onAuthStateChanged((currentUser) => {
        user = currentUser;
    });

    return {
        get user() { return user },
        get fetchStatus() { return fetchStatus },
        set fetchStatus(value) { fetchStatus = value },
        get publishStatus() { return publishStatus },
        set publishStatus(value) { publishStatus = value },
        get userData() { return userData },
        set userData(value) { userData = value },
        get docs() { return docs },
        set docs(value) { docs = value }
    }
}

export const firebaseState = SetupFirebaseState()