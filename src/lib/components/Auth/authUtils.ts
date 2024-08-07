import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "$lib/firebase/firebase.client";

export const login = async function (email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async function () {
    await signOut(auth)
}