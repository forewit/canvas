

import { getContext, onDestroy, setContext } from "svelte";

export type Settings ={
  themeName: string,
  spellcheck: boolean
}

class UserState {
  lastUpdated: number = $state(Date.now());
  settings: Settings = $state({
    themeName: "Canvas",
    spellcheck: true
  })

  constructor() {
    onDestroy(() => {

    })
  }
}

const USERSTATE_KEY = Symbol("USERSTATE");

export function setUserState() {
  return setContext(USERSTATE_KEY, new UserState())
}

export function getUserState() {
  return getContext<ReturnType<typeof setUserState>>(USERSTATE_KEY)
}