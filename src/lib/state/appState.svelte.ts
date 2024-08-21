import { userState, type Directory } from "./userState.svelte"


const createAppState = function () {
    let authRedirect = $state("/")
    
    return {
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
    }
}

export const appState = createAppState()