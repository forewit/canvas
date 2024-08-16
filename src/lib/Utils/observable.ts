export const observable = <T extends object>(source: T, options?: { beforeUpdate?: (target: T, prop: keyof T, value?: any) => void, intercept?: (prop: keyof T, value: any) => any }) => {
    const { beforeUpdate, intercept } = {beforeUpdate: () => {}, intercept: (prop: keyof T, value:any) => value, ...options }; 

    let observers: Function[] = [];
    let untracked = false;
    const notify = (prop: any, value?: any) => {
        if (untracked) return;
        observers.forEach(fn => fn(prop, value));
    }
    const subscribe = (fn: (prop: any, value: any) => void) => {
        observers.push(fn);
        return () => {
            observers = observers.filter(observer => observer !== fn);
        }
    }
    const untrack = (fn: Function) => {
        untracked = true;
        const result = fn();
        untracked = false;
        return result;
    }

    const proxyHandlers = {
        set(target: any, prop: any, value: any) {
            beforeUpdate(target, prop, value);
            target[prop] = intercept(prop, value);
            notify(prop, value);
            return true
        },
        deleteProperty(target: any, prop: any) {
            if (prop in target) {
                beforeUpdate(target, prop);
                delete target[prop];
                notify(prop);
                return true;
            }
            return false
        }
    }

    const proxy: T = new Proxy(source, proxyHandlers);
    return {
        get() { return proxy },
        get subscribe() { return subscribe.bind(source) },
        get untrack() { return untrack.bind(source) },
        get notify() { return notify.bind(source) }
    };
}