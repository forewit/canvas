import { writable } from "svelte/store";

export const userSettingsStore = writable({
    theme: "Canvas",
    spellcheck: true,
})