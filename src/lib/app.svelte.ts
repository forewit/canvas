import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from '$lib/firebase.svelte';
import type { DocumentData } from 'firebase/firestore';
import { themes } from '$lib/Components/ThemeWrapper/themes.svelte';

function createApp() {
    const firebase = getFirebaseContext()

    let lastUpdated = 0;
    let username = $state("")
    let authRedirect = $state("")
    let themeName = $state("Canvas")
    let theme =  $derived(themes.find((t) => t.name === themeName) || themes[0]);
    let spellcheck = $state(true)
    let showFolderPreview = $state(true)
    let showFolderName = $state(true)
    let currentZoom = $state(1)

    function publishSettings() {
        firebase.publishDoc([], {lastUpdated, theme: themeName, spellcheck, username, showFolderName, showFolderPreview})
    }

    function ImportSettings(data: DocumentData) {
        if (Object.hasOwn(data, "username") && typeof data.username === "string") username = data.username
        if (Object.hasOwn(data, "theme") && typeof data.theme === "string") themeName = data.theme
        if (Object.hasOwn(data, "spellcheck") && typeof data.spellcheck === "boolean") spellcheck = data.spellcheck
        if (Object.hasOwn(data, "showFolderPreview") && typeof data.showFolderPreview === "boolean") showFolderPreview = data.showFolderPreview
        if (Object.hasOwn(data, "showFolderName") && typeof data.showFolderName === "boolean") showFolderName = data.showFolderName
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
        // ephemeral state
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get currentZoom() { return currentZoom },
        set currentZoom(value) { currentZoom = value },
        get theme() { return theme },

        // persistent state
        get username() { return username },
        set username(value) {
            username = value
            lastUpdated = Date.now()
            publishSettings()
        },
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
        get showFolderPreview() { return showFolderPreview },
        set showFolderPreview(value) {
            showFolderPreview = value
            lastUpdated = Date.now()
            publishSettings()
        },
        get showFolderName() { return showFolderName },
        set showFolderName(value) {
            showFolderName = value
            lastUpdated = Date.now()
            publishSettings()
        }
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