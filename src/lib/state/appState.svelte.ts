type AppState = {
    authRedirect: string,
    currentPath: string
}

const createAppState = function (): AppState {
    let authRedirect = $state("/")
    let currentPath = $state("/")

    return {
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get currentPath() { return currentPath },
        set currentPath(value) { currentPath = value }
    }
}

export const appState = createAppState()