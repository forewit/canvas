import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from './firebase.svelte';

type Page = {
    title: string
    content: string
    lastUpdated: number
}

function createPages() {
    let pages: Record<string, Page> = $state({})

    const firebase = getFirebaseContext()

    firebase.subscribeToPages(syncPage)

    function syncPage(id: string) {
        let localPage = pages[id]
        let firebasePage = firebase.pagesCollection[id]

        if (!firebasePage) {
            if (localPage) delete pages[id]
            console.log("deleted page", id.slice(0, 4))
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
            pages[id] = setupPage(id,sanitizedPage)
        } else if (sanitizedPage.lastUpdated === localPage.lastUpdated) {
            console.log("page synced with firebase", id.slice(0, 4))
        }
    }

    function sanitizePage(page: any): { wasValid: boolean, sanitizedPage: Page } {
        return {
            wasValid: (page.lastUpdated !== undefined && page.title !== undefined && page.content !== undefined),
            sanitizedPage: {
                title: (page.title === undefined) ? "New Page" : page.title,
                content: (page.content === undefined) ? "" : page.content,
                lastUpdated: (page.lastUpdated === undefined) ? Date.now() : page.lastUpdated
            }
        }
    }

    const setupPage = function (id: string, page: Page) {
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
                syncPage(id);
            },
            get content() { return content },
            set content(value) {
                if (value === content) return
                content = value
                lastUpdated = Date.now()
                syncPage(id)
            }
        }
    }

    const pagesProxy = new Proxy(pages, {
        set: (target, prop: string, value) => {
            target[prop] = setupPage(prop, value)
            target[prop].lastUpdated = Date.now()
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