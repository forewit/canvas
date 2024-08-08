import { auth } from "$lib/firebase/firebase.client";
import type { User } from "firebase/auth";


function SetupFirebaseState() {
    let user: User | null = $state(null)

    auth.onAuthStateChanged((currentUser) => {
        user = currentUser;
    })

    return {
        get user() {
            return user
        }
    }
}

export const firebaseState = SetupFirebaseState()