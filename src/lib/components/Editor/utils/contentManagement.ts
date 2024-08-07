import type Quill from "quill/core";
import type { Op } from "quill/core";
import { getQuillHistory, loadQuillHistory, type HistoryStack } from "./quillHistory";

export type EditorData = {
    ops: Op[];
    history: HistoryStack;
}

export const loadContent = async function (quill: Quill, data: EditorData) {
    quill.setContents(data.ops, "api");
    await loadQuillHistory(quill, data.history);
}

// TODO: debounce saving
export const saveContent = function (quill: Quill): EditorData {
    const ops = quill.getContents().ops;
    const history = getQuillHistory(quill);
    return { ops, history };
}