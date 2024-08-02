import { type User } from "firebase/auth";
import { readable } from "svelte/store";
import { auth } from "$lib/firebase/firebase.client";

export const firebaseUser = readable(null as User | null, (set) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        set(user)
    })
    return unsubscribe;
})