
import type { EditorContent } from "$lib/Editor/utils/editorContent";

export type Doc = {
  id: string;
  timestamp: number;
  title: string;
  content: EditorContent;
}

export type UserData = {
  timestamp: number;
  themeName: string;
  spellcheck: boolean;
  docOrder: string[],
}

export const getDefaultUserData = (): UserData => {
  return {
    timestamp: Date.now(),
    themeName: "Canvas",
    spellcheck: true,
    docOrder: [],
  }
}
export const userState = setupUserState()


function setupUserState() {
  let themeName = $state("Canvas")
  let spellcheck = $state(true);
  let docs: Record<string, Doc> = $state({})

  return {
    get themeName() {
      return themeName;
    },
    set themeName(value) {
      themeName = value;
    },
    get spellcheck() {
      return spellcheck;
    },
    set spellcheck(value) {
      spellcheck = value;
    },
    get docs() {
      return docs
    },
    set docs(value) {
      docs = value
    }
  };
}