import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "$lib/firebase/firebase.client";

export const authHandlers = {
    login: async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    logout: async () => { await signOut(auth) }
}