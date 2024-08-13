export class UserState {
  private _lastUpdated: number = $state(0);
  private _themeName: string = $state("Canvas");
  private _spellcheck: boolean = $state(true);
  private _observers: Function[] = [];

  constructor() {

  }

  get themeName() { return this._themeName }
  set themeName(value) { this._themeName = value }
  get spellcheck() { return this._spellcheck }
  set spellcheck(value) { this._spellcheck = value }
  get lastUpdated() { return this._lastUpdated }


  triggerUpdate() {
    this._lastUpdated = Date.now();
    this._observers.forEach(fn => fn());
  }

  subscribe(fn: Function) {
    this._observers.push(fn);
    return () => this.unsubscribe(fn);
  }

  unsubscribe(fn: Function) {
    this._observers = this._observers.filter(observer => observer !== fn);
  }
}

export const userState = new UserState();