import { writable } from "svelte/store";




export const userDataStore = writable({
    theme: "Canvas",
    spellcheck: true,
})