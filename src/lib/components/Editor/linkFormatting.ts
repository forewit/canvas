import type Quill from "quill/core";

export const detectAndformatLinks = function (quill: Quill) {
    quill.formatText(0, quill.getLength(), "link", false, "api");
    const text = quill.getText();

    const urlRegex = /https?:\/\/\S+/gi;
    const urlMatches = text.matchAll(urlRegex);
    for (const match of urlMatches) {
        quill.formatText(
            match.index,
            match[0].length,
            "link",
            match[0],
            "api"
        );
    }

    const emailRegex = /.+\@.+\..+/gi;
    const emailMatches = text.matchAll(emailRegex);
    for (const match of emailMatches) {
        quill.formatText(
            match.index,
            match[0].length,
            "link",
            "mailto:" + match[0],
            "api"
        );
    }
}

export const makeAllLinksClickable = function (quill: Quill) {
    quill.root.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", handleClick);
    });
}

const handleClick = function (e: MouseEvent) {
    window.open((e.target as HTMLAnchorElement).href, "_blank");
};
