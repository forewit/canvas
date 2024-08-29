import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from '$lib/firebase.svelte';
import type { DocumentData } from 'firebase/firestore';

function createApp() {
    const firebase = getFirebaseContext()

    let lastUpdated = 0;
    let authRedirect = $state("")
    let themeName = $state("Canvas")
    let spellcheck = $state(true)

    function publishSettings() {
        firebase.publishDoc([], {lastUpdated, themeName, spellcheck})
    }

    function ImportSettings(data: DocumentData) {
        if (Object.hasOwn(data, "themeName") && typeof data.themeName === "string") themeName = data.themeName
        if (Object.hasOwn(data, "spellcheck") && typeof data.spellcheck === "boolean") spellcheck = data.spellcheck
    }

    firebase.subscribeToDoc([], (id, doc) => {
        if (firebase.isLoading || doc === null) return
        if (doc.lastUpdated === undefined || doc.lastUpdated < lastUpdated) {
            publishSettings()
        } else if (doc.lastUpdated > lastUpdated) {
            ImportSettings(doc)
        } else if (doc.lastUpdated === lastUpdated) {
            console.log("app in sync with user doc")
        }
    })

    return {
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get themeName() { return themeName },
        set themeName(value) {
            themeName = value
            lastUpdated = Date.now()
            publishSettings()
        },
        get spellcheck() { return spellcheck },
        set spellcheck(value) {
            spellcheck = value
            lastUpdated = Date.now()
            publishSettings()
        },
    }
}

const APP_KEY = Symbol('app')

export const setAppContext = () => {
    const nApp = createApp();
    return setContext(APP_KEY, nApp)
}

export const getAppContext = (): ReturnType<typeof setAppContext> => {
    return getContext(APP_KEY)
}