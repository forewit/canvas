import { page } from "$app/stores";

export type Page = {
    //readonly id: string,
    lastUpdated: number,
    title: string,
    content: string
}

class PagesState {
    private _pagesObservers: ((id: string) => void)[] = [];
    private _pages: Record<string, Page> = $state({});

    constructor() {
        const notifier = this.notifyPagesObservers.bind(this);

        this._pages = new Proxy(this._pages, {
            deleteProperty(target: any, prop: any) {
                if (prop in target) {
                    delete target[prop];
                    notifier(prop);
                    return true;
                }
                return false
            }
        })
    }

    private notifyPagesObservers(id: string) {
        console.log(id)
        this._pagesObservers.forEach(fn => fn(id));
    }

    get pages() { return this._pages }

    createPage(data?: { id: string, page: Page }, notifyObservers = true) {
        let id: string = crypto.randomUUID();
        let title = $state("Untitled");
        let content = $state("");
        let lastUpdated = $state(Date.now());

        if (data) {
            id = data.id || id;
            title = data.page.title || title;
            content = data.page.content || content;
            lastUpdated = data.page.lastUpdated || lastUpdated;
        }

        const pagesState = this;

        pagesState._pages[id] = {
            get lastUpdated() { return lastUpdated },
            set lastUpdated(value) { lastUpdated = value },
            get title() { return title },
            set title(value) {
                if (value === title) return
                title = value;
                lastUpdated = Date.now();
                pagesState.notifyPagesObservers(id)
            },
            get content() { return content },
            set content(value) {
                if (value === content) return
                content = value;
                lastUpdated = Date.now();
                pagesState.notifyPagesObservers(id)
            },
        }

        if (notifyObservers) {
            this.notifyPagesObservers(id);
        }
        return id;
    }

    subscribe(fn: (id: string) => void) {
        this._pagesObservers.push(fn);
        return () => {
            this._pagesObservers = this._pagesObservers.filter(observer => observer !== fn);
        }
    }
}

export const pagesState = new PagesState();