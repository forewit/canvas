import type { StackItem } from "quill/modules/history";
import type Quill from "quill/core";

export type HistoryStack = {
    undo: StackItem[],
    redo: StackItem[]
}

export const loadQuillHistory = async function (quill: Quill, stack: HistoryStack) {
    const { Delta: Delta, Range: Range } = await import("quill/core");

    for (var i = 0; i < stack.undo.length; i++) {
        const index = stack.undo[i].range?.index;
        const length = stack.undo[i].range?.length;

        const item: StackItem = {
            delta: new Delta(stack.undo[i].delta.ops),
            range:
                index !== undefined && length !== undefined
                    ? new Range(index, length)
                    : null,
        };
        quill.history.stack.undo.push(item);
    }

    for (var i = 0; i < stack.redo.length; i++) {
        const index = stack.redo[i].range?.index;
        const length = stack.redo[i].range?.length;

        const item: StackItem = {
            delta: new Delta(stack.redo[i].delta.ops),
            range:
                index !== undefined && length !== undefined
                    ? new Range(index, length)
                    : null,
        };
        quill.history.stack.redo.push(item);
    }
}

export const getQuillHistory = function (quill: Quill) {
    return structuredClone(quill.history.stack);
}