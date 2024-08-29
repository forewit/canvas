import type Quill from "quill/core";
import type { Op } from "quill/core";
import { getQuillHistory, loadQuillHistory, type HistoryStack } from "./quillHistory";
import { debounce } from "$lib/utils/debouncing";
import { getFirebaseContext } from "$lib/firebase.svelte";

const DEBOUNCE_DELAY = 1000;
export type EditorContent = {
    ops: Op[];
    history: HistoryStack;
}

export const loadContent = async function (quill: Quill, data: EditorContent) {
    quill.setContents(data.ops, "api");
    await loadQuillHistory(quill, data.history);
}


const firebase = getFirebaseContext();
export const saveContent = debounce( (quill: Quill) => {
    const ops = quill.getContents().ops;
    const history = getQuillHistory(quill);
  
    firebase.publishDoc
    console.log("TODO: SAVE CONTENT")
    
}, DEBOUNCE_DELAY)