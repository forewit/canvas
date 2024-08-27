import { getContext, setContext } from 'svelte';
import { getFirebaseContext } from '$lib/firebase.svelte';
import { toStore } from 'svelte/store';

function createApp() {
    let authRedirect = $state("")
    let themeName = $state("Canvas")
    let spellcheck = $state(true)
    let lastUpdated = 0;

    const firebase = getFirebaseContext()

    function publishToFirebase() {
        firebase.publishDataToUserDoc({
            lastUpdated,
            themeName,
            spellcheck,
        })
    }

    function importFromFirebase(data: any) {
        if (data.themeName !== undefined) themeName = data.themeName
        if (data.spellcheck !== undefined) spellcheck = data.spellcheck
    }

    let userDocStore = toStore(() => firebase.userDoc)
    userDocStore.subscribe((userDoc) => {
        if (firebase.isLoading) return
        if (userDoc.lastUpdated === undefined || userDoc.lastUpdated < lastUpdated) {
            publishToFirebase()
        } else if (userDoc.lastUpdated > lastUpdated) {
            importFromFirebase(userDoc)
        } else if (userDoc.lastUpdated === lastUpdated) {
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
            publishToFirebase()
        },
        get spellcheck() { return spellcheck },
        set spellcheck(value) {
            spellcheck = value
            lastUpdated = Date.now()
            publishToFirebase()
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