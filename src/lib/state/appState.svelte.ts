import { userState, type Path } from "./userState.svelte"

type AppState = {
    authRedirect: string,
    path: Path
    readonly directory: Path[]
}

const createAppState = function (): AppState {
    let authRedirect = $state("/")
    let path: Path = $state(Object.assign({}, userState.get().root))

    let directory = $derived.by(() => {
        let paths: Path[] = []
        while (path.parent) {
            paths.push(path)
            path = path.parent
        }
        paths.push(path)
        return paths.reverse()
    })

    return new Proxy({
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get path() { return path },
        set path(value) { path = value },
        get directory() { return directory }
    },{
        set(target: any, prop: any, value: any) {
            if (prop = "path") {
                Object.assign(target, value)
                return true;
            } else {
                target[prop] = value
                return true;
            }
        }
    })
}

export const appState = createAppState()