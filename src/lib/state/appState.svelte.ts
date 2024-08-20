import { userState, type Directory } from "./userState.svelte"

const createAppState = function () {
    let authRedirect = $state("/")
    let directory: Directory = $state(userState.get().root)
    let path: Directory[] = $derived.by(()=>{
        let path = [directory]
        while (directory.parent) {
            path.unshift(directory)
        }
        return path
    })

    return {
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get path() { return path },
        get directory() { return directory },
        set directory(value) { directory = value },
    }
}

export const appState = createAppState()