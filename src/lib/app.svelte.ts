import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from '$lib/firebase.svelte';
import type { DocumentData } from 'firebase/firestore';

function createApp() {
    const firebase = getFirebaseContext()

    let lastUpdated = 0;
    let username = $state("")
    let authRedirect = $state("")
    let theme = $state("Canvas")
    let spellcheck = $state(true)
    let showFolderPreview = $state(true)
    let showFolderName = $state(true)

    function publishSettings() {
        firebase.publishDoc([], {lastUpdated, theme: theme, spellcheck, username})
    }

    function ImportSettings(data: DocumentData) {
        if (Object.hasOwn(data, "username") && typeof data.username === "string") username = data.username
        if (Object.hasOwn(data, "theme") && typeof data.theme === "string") theme = data.theme
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
        get authRedirect() { return authRedirect },
        set authRedirect(value) { authRedirect = value },
        get username() { return username },
        set username(value) {
            username = value
            lastUpdated = Date.now()
            publishSettings()
        },
        get theme() { return theme },
        set theme(value) {
            theme = value
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