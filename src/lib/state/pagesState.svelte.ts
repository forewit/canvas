import { getContext, setContext } from "svelte";

export type Page = {
  readonly id: string,
  readonly lastUpdated: number,
  title: string,
  content: string
}

export class PagesState {
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

const PAGESSTATE_KEY = Symbol("PAGESSTATE");

export function setPagesState() {
  return setContext(PAGESSTATE_KEY, new PagesState())
}

export function getPagesState() {
  return getContext<ReturnType<typeof setPagesState>>(PAGESSTATE_KEY)
}