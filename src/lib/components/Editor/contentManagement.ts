import type Quill from "quill/core";
import type { Op } from "quill/core";
import { getQuillHistory, loadQuillHistory, type HistoryStack } from "./historyUtils";

export type EditorData = {
    ops: Op[];
    history: HistoryStack;
}

export const loadContent = function (quill: Quill, data: EditorData) {
    loadQuillHistory(quill, data.history);
    quill.setContents(data.ops);
}

export const saveContent = function (quill: Quill): EditorData {
    const ops = quill.getContents().ops;
    const history = getQuillHistory(quill);
    return { ops, history };
}