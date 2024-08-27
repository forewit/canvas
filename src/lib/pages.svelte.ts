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

    firebase.subscribeToPagesCollection(syncPage)

    function syncPage(id: string, type: "added" | "modified" | "removed") {
        let localPage = pages[id]
        let firebasePage = firebase.pagesCollection[id]

        // page was removed from firebase
        if (type === "removed") {
            if (localPage) delete pages[id]
            console.log("deleted page", id.slice(0, 4))
            return;
        }

        // the page is still being published to firebase
        if (!firebasePage) {
            firebase.publishDataToPageDoc(id, localPage)
            return;
        }

        let { wasValid, sanitizedPage } = sanitizePage(firebasePage)

        if (!wasValid) {
            console.warn("Sanitized invalid page", firebasePage, sanitizedPage)
            firebase.publishDataToPageDoc(id, sanitizedPage)
            return;
        }

        if (!localPage) {
            pages[id] = setupPage(id, sanitizedPage)
            console.log("added page", id.slice(0, 4))
            return;
        }

        if (sanitizedPage.lastUpdated < localPage.lastUpdated) {
            firebase.publishDataToPageDoc(id, localPage)
        } else if (sanitizedPage.lastUpdated > localPage.lastUpdated) {
            pages[id] = setupPage(id, sanitizedPage)
        } else if (sanitizedPage.lastUpdated === localPage.lastUpdated) {
            console.log("page synced with firebase", id.slice(0, 4))
        }
    }

    function sanitizePage(page: DocumentData): { wasValid: boolean, sanitizedPage: Page } {
        let wasValid = true;
        let sanitizedPage = {
            title: "New Page",
            content: "",
            lastUpdated: Date.now()
        }

        if (Object.hasOwn(page, "lastUpdated") && typeof page.lastUpdated === "number") {
            sanitizedPage.lastUpdated = page.lastUpdated
        } else {
            wasValid = false
        }

        if (Object.hasOwn(page, "title") && typeof page.title === "string") {
            sanitizedPage.title = page.title
        } else {
            wasValid = false
        }

        if (Object.hasOwn(page, "content") && typeof page.content === "string") {
            sanitizedPage.content = page.content
        } else {
            wasValid = false
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
                syncPage(id, "modified");
            },
            get content() { return content },
            set content(value) {
                if (value === content) return
                content = value
                lastUpdated = Date.now()
                syncPage(id, "modified")
            }
        }
    }

    const pagesProxy = new Proxy(pages, {
        set: (target, prop: string, value) => {
            target[prop] = setupPage(prop, value)
            firebase.publishDataToPageDoc(prop, value)
            return true
        },
        deleteProperty: (target, prop: string) => {
            delete target[prop]
            firebase.publishDataToPageDoc(prop)
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