import { observable } from "$lib/Utils/observable";

export type Directory = {
  name: string
  parent: Directory | null
  subDirectories: Directory[]
  pageIDs: string[]
}

function createUserState() {
  let lastUpdated = $state(0);
  let themeName = $state("Canvas");
  let spellcheck = $state(true);
  let root: Directory = $state({name: "Home", parent: null, subDirectories: [], pageIDs: [] });

  return observable({
    get lastUpdated() { return lastUpdated },
    set lastUpdated(value) { lastUpdated = value },
    get themeName() { return themeName },
    set themeName(value) { themeName = value },
    get spellcheck() { return spellcheck },
    set spellcheck(value) { spellcheck = value },
    get root() { return root },
    set root(value) { root = value },
  }, {
    beforeUpdate: () => { lastUpdated = Date.now() }
  }
  )
}
export const userState = createUserState();

