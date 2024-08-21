import { observable } from "$lib/Utils/observable";

export type Directory = {
  name: string
  subDirectories: Record<string, Directory>
  pageIDs: string[]
}

export type UserState ={
  lastUpdated: number
  themeName: string
  spellcheck: boolean
  root: Directory
}

function createUserState() {
  let lastUpdated = $state(0);
  let themeName = $state("Canvas");
  let spellcheck = $state(true);
  let root: Directory = $state({ name: "Home", subDirectories: {}, pageIDs: [] });

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