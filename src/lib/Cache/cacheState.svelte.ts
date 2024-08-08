import type { UserData, Doc } from "$lib/State/userState.svelte";

function setupCacheState() {
    let userData: UserData | null = $state(null)
    let docs: Record<string, Doc> = $state({})
    let fetchStatus: undefined | "loading" | "loaded" | "error" = $state()
    let publishStatus: undefined | "saving" | "saved" | "error" = $state()

    return {
        get fetchStatus() { return fetchStatus },
        set fetchStatus(value) { fetchStatus = value },
        get publishStatus() { return publishStatus },
        set publishStatus(value) { publishStatus = value },
        get userData() { return userData },
        set userData(value) { userData = value },
        get docs() { return docs },
        set docs(value) { docs = value }
    }
}

export const cacheState = setupCacheState()