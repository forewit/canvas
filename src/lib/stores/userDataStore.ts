import { writable } from "svelte/store";
import { type EditorData } from "$lib/components/Editor/contentManagement";





export const userDataStore = writable({
    theme: "Canvas",
    spellcheck: true,
})