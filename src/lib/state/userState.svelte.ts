type UserState = {
  lastUpdated: number,
  themeName: string,
  spellcheck: boolean
  readonly subscribe: (fn: Function) => () => void
  readonly untrack: (fn: Function) => any
}

function createUserState(): UserState {
  let lastUpdated = $state(0);
  let themeName = $state("Canvas");
  let spellcheck = $state(true);
  let untracked = false;
  let observers: Function[] = [];

  const notifyObservers = function () {
    observers.forEach(fn => fn());
  }

  const subscribe = function (fn: Function) {
    observers.push(fn);
    return () => {
      observers = observers.filter(observer => observer !== fn);
    }
  }

  const untrack = function (fn: Function) {
    untracked = true;
    const result = fn();
    untracked = false;
    return result;
  }

  return new Proxy({
    get lastUpdated() { return lastUpdated },
    set lastUpdated(value) { lastUpdated = value },
    get themeName() { return themeName },
    set themeName(value) { themeName = value },
    get spellcheck() { return spellcheck },
    set spellcheck(value) { spellcheck = value },
    get subscribe() { return subscribe },
    get untrack() { return untrack }
  }, {
    set(target: any, prop: any, value: any) {
      if (value === target[prop]) return true
      target[prop] = value;
      if (!untracked) {
        target.lastUpdated = Date.now();
        notifyObservers();
      };
      return true;
    },
    get(target: any, prop: any) {
      return target[prop];
    }
  })
}

export const userState = createUserState();

