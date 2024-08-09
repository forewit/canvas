import { getContext, onDestroy, setContext } from "svelte";

class AppState {
    authRedirect = $state("");

    constructor() {
        onDestroy(() => {
          
        })
    }
}

const APPSTATE_KEY = Symbol("APPSTATE");

export function setAppState() {
    return setContext(APPSTATE_KEY, new AppState())
}

export function getAppState() {
    return getContext<ReturnType<typeof setAppState>>(APPSTATE_KEY)
}
  