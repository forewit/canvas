import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from './firebase.svelte';
import type { DocumentData } from 'firebase/firestore';

export type Page = {
    title: string
    content: string
    lastUpdated: number
}

function createPages() {
    let pages: Record<string, Page> = $state({})

    const firebase = getFirebaseContext()

    firebase.subscribeToCollection(["pages"], syncPage)

    function syncPage(id: string, doc: DocumentData | null) {
        let localPage = pages[id]
        // page was removed from firebase
        if (!doc) {
            if (localPage) delete pages[id]
            console.log("deleted page", id.slice(0, 4))
            return;
        }

        let { wasValid, sanitizedPage } = sanitizePage(doc)

        if (!wasValid) {
            console.warn("Ignoring invalid page", doc)
            return;
        }

        if (!localPage) {
            pages[id] = setupPage(id, sanitizedPage)
            console.log("added page", id)
            return;
        }

        if (sanitizedPage.lastUpdated < localPage.lastUpdated) {
            firebase.publishDoc(["pages", id], localPage)
        } else if (sanitizedPage.lastUpdated > localPage.lastUpdated) {
            pages[id] = setupPage(id, sanitizedPage)
        } else if (sanitizedPage.lastUpdated === localPage.lastUpdated) {
            console.log("page synced with firebase", id)
        }
    }

    function sanitizePage(page: DocumentData): { wasValid: boolean, sanitizedPage: Page } {
        let sanitizedPage = {
            title: "New Page",
            content: "",
            lastUpdated: Date.now()
        }

        const wasValid = (Object.hasOwn(page, "lastUpdated") && typeof page.lastUpdated === "number") &&
            (Object.hasOwn(page, "title") && typeof page.title === "string") &&
            (Object.hasOwn(page, "content") && typeof page.content === "string");

        if (wasValid) {
            sanitizedPage.lastUpdated = page.lastUpdated
            sanitizedPage.title = page.title
            sanitizedPage.content = page.content
        }

        return { wasValid, sanitizedPage }
    }

    const setupPage = function (id: string, page: Page): Page {
        let lastUpdated = $state(page.lastUpdated);
        let title = $state(page.title);
        let content = $state(page.content);

        return {
            get lastUpdated() { return lastUpdated },
            set lastUpdated(value) { lastUpdated = value },
            get title() { return title },
            set title(value) {
                if (value === title) return;
                title = value;
                lastUpdated = Date.now();
                firebase.publishDoc(["pages", id], pages[id])
            },
            get content() { return content },
            set content(value) {
                if (value === content) return
                content = value
                lastUpdated = Date.now()
                firebase.publishDoc(["pages", id], pages[id])
            }
        }
    }

    const pagesProxy = new Proxy(pages, {
        set: (target, prop: string, value) => {
            target[prop] = setupPage(prop, value)
            firebase.publishDoc(["pages", prop], value)
            return true
        },
        deleteProperty: (target, prop: string) => {
            delete target[prop]
            firebase.publishDoc(["pages", prop], null)
            return true;
        },
    })

    return pagesProxy
}

const PAGES_KEY = Symbol('pages')

export const setPagesContext = () => {
    const nPages = createPages();
    return setContext(PAGES_KEY, nPages)
}

export const getPagesContext = (): ReturnType<typeof setPagesContext> => {
    return getContext(PAGES_KEY)
}