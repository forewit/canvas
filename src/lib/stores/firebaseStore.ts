import { type User } from "firebase/auth";
import { writable } from "svelte/store";

export const firebaseStore = writable({
    isLoading: true,
    savingStatus: undefined as "saving" | "saved" | "error" | undefined,
    currentUser: <User | null>null
})