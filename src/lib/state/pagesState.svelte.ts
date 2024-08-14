export type Page = {
    lastUpdated: number,
    title: string,
    content: string
}



type PagesState = {
    readonly pages: Record<string, Page>,
    readonly subscribe: (fn: Function) => () => void,
    readonly newPage: (data?: Page) => string,
}

function createPagesState(): PagesState {
    let observers: Function[] = [];
    let pages: Record<string, Page> = $state({});

    pages = new Proxy(pages, {
        set(target: Record<string, Page>, prop: string, value: Page) {
            if (value === target[prop]) return true
            target[prop] = setupPage(prop, value);
            notifyObservers(prop);
            return true
        },
        deleteProperty(target: any, prop: any) {
            if (prop in target) {
                delete target[prop];
                notifyObservers(prop);
                return true;
            }
            return false
        }
    })

    const setupPage = function (id: string, page: Page): Page {
        let lastUpdated = $state(page.lastUpdated);
        let title = $state(page.title);
        let content = $state(page.content);

        return {
            get lastUpdated() { return lastUpdated },
            get title() { return title },
            set title(value) {
                if (value === title) return;
                title = value;
                lastUpdated = Date.now();
                notifyObservers(id);
            },
            get content() { return content },
            set content(value) {
                if (value === content) return
                content = value
                lastUpdated = Date.now()
                notifyObservers(id)
            }
        }
    }

    const newPage = function (data?: Page): string {
        const id = crypto.randomUUID();
        const page = data || {
            lastUpdated: Date.now(),
            title: "Untitled",
            content: ""
        }
        pages[id] = page
        return id;
    }

    const subscribe = function (fn: Function) {
        observers.push(fn);
        return () => {
            observers = observers.filter(observer => observer !== fn);
        }
    }

    const notifyObservers = function (id: string) {
        observers.forEach(fn => fn(id));
    }

    return {
        get pages() { return pages },
        get subscribe() { return subscribe },
        get newPage() { return newPage },
    }
}

export const pagesState = createPagesState();