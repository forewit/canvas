export type Page = {
  readonly id: string,
  readonly lastUpdated: number,
  title: string,
  content: string
}

class PagesState {
  pages: Record<string, Page> = $state({});

  constructor() {
  }

  createPage() {
    const id = crypto.randomUUID();
    let title = $state("Untitled");
    let content = $state("");
    let lastUpdated = $state(0);

    this.pages[id] = {
      get id() { return id },
      get lastUpdated() { return lastUpdated },
      get title() { return title },
      set title(value) { title = value; lastUpdated = Date.now() },
      get content() { return content },
      set content(value) { content = value; lastUpdated = Date.now() },
    }
  }
}

export const pagesState = new PagesState();