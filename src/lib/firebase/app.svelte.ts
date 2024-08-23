import { getContext, setContext, untrack } from 'svelte';

class App {
    // user updatable states
    themeName = $state("Canvas")
    spellcheck = $state(true)

    private _themeName = $state("Canvas")
    private _spellcheck = $state(true)

    constructor(){
        $effect(()=>{
            this._spellcheck = this.spellcheck
            this._themeName = this.themeName
        })
    }

    getUserUpdatableStates() {
        return {
            themeName: this.themeName,
            spellcheck: this.spellcheck
        }
    }

    update(data: any) {
        if (data.themeName !== undefined) this._themeName = data.themeName
        if (data.spellcheck !== undefined) this._spellcheck = data.spellcheck
    }
    export(){
        return {
            themeName: this._themeName,
            spellcheck: this._spellcheck,
        }
    }
}

const APP_KEY = Symbol('app')

export const setAppContext = (): App => {
    const nApp = new App()
    return setContext(APP_KEY, nApp)
}

export const getAppContext = (): ReturnType<typeof setAppContext> => {
    return getContext(APP_KEY)
}