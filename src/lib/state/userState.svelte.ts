import { getContext, setContext } from "svelte";


export class UserState {
  private _lastUpdated: number = $state(0);
  private _themeName: string = $state("Canvas");
  private _spellcheck: boolean = $state(true);
  private _updateCallbacks: Array<() => void> = [];

  constructor() {

  }

  get themeName() { return this._themeName }
  set themeName(value) { this._themeName = value }
  get spellcheck() { return this._spellcheck }
  set spellcheck(value) { this._spellcheck = value }
  get lastUpdated() { return this._lastUpdated }

  triggerUpdate() {
    this._lastUpdated = Date.now();
    this._updateCallbacks.forEach(callback => callback());
  }

  onUpdate(callback: () => void) {
    this._updateCallbacks.push(callback);
  }
}

export const userState = new UserState();