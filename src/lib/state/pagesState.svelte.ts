import { observable } from "$lib/Utils/observable";

export type Page = {
    lastUpdated: number,
    title: string,
    content: string
}

function createPagesState() {
    let pages: Record<string, Page> = $state({});


    // const setupPage = function (id: string, page: Page) {
    //     let lastUpdated = $state(page.lastUpdated);
    //     let title = $state(page.title);
    //     let content = $state(page.content);

    //     return {
    //         get lastUpdated() { return lastUpdated },
    //         get title() { return title },
    //         set title(value) {
    //             if (value === title) return;
    //             title = value;
    //             lastUpdated = Date.now();
    //             observer.notify(id);
    //         },
    //         get content() { return content },
    //         set content(value) {
    //             if (value === content) return
    //             content = value
    //             lastUpdated = Date.now()
    //             observer.notify(id)
    //         }
    //     }
    // }

    const setupPage = function (id: string, page: Page) {
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
                observer.notify(id);
            },
            get content() { return content },
            set content(value) {
                if (value === content) return
                content = value
                lastUpdated = Date.now()
                observer.notify(id)
            }
        }
    }

    const observer = observable(pages, ()=>{}, (prop, value)=>{
        return setupPage(prop, value);
    });
    return observer
}


export const pagesState = createPagesState();