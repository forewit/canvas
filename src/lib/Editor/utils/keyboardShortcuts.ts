import type Quill from "quill/core";

export const bindKeyboardShortcuts = function (quill: Quill) {
    quill.keyboard.addBinding({ key: "/", altKey: true }, altSlash);
    quill.keyboard.addBinding({ key: "-", altKey: true }, altMinus);
}

// alt + slash: toggles code
const altSlash = function (quill: Quill) {
    quill.format("code", !quill.getFormat().code);
}

// alt + minus: toggles strikethrough
const altMinus = function (quill: Quill) {
    quill.format("strike", !quill.getFormat().strike);
}