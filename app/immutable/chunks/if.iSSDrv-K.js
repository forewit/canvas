import{S as T,al as j,am as k,u as c,an as q,m as o,V as x,ao as u,L as w,k as F,ap as H,aq as K,i as M,b as U,h as P,a as Y,H as B,r as C,s as V,e as I,g as O,j as S,p as D,f as Z,U as z}from"./runtime.A5g2blTK.js";function g(i,b=null,E){if(typeof i!="object"||i===null||T in i)return i;const y=K(i);if(y!==j&&y!==k)return i;var f=new Map,d=M(i),v=c(0);d&&f.set("length",c(i.length));var l;return new Proxy(i,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&q();var r=f.get(e);return r===void 0?(r=c(t.value),f.set(e,r)):o(r,g(t.value,l)),!0},deleteProperty(n,e){var t=f.get(e);return t===void 0?e in n&&f.set(e,c(u)):(o(t,u),L(v)),!0},get(n,e,t){var _;if(e===T)return i;var r=f.get(e),a=e in n;if(r===void 0&&(!a||(_=x(n,e))!=null&&_.writable)&&(r=c(g(a?n[e]:u,l)),f.set(e,r)),r!==void 0){var s=w(r);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var r=f.get(e);r&&(t.value=w(r))}else if(t===void 0){var a=f.get(e),s=a==null?void 0:a.v;if(a!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===T)return!0;var t=f.get(e),r=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||F!==null&&(!r||(s=x(n,e))!=null&&s.writable)){t===void 0&&(t=c(r?g(n[e],l):u),f.set(e,t));var a=w(t);if(a===u)return!1}return r},set(n,e,t,r){var A;var a=f.get(e),s=e in n;if(d&&e==="length")for(var _=t;_<a.v;_+=1){var h=f.get(_+"");h!==void 0?o(h,u):_ in n&&(h=c(u),f.set(_+"",h))}a===void 0?(!s||(A=x(n,e))!=null&&A.writable)&&(a=c(void 0),o(a,g(t,l)),f.set(e,a)):(s=a.v!==u,o(a,g(t,l)));var m=Reflect.getOwnPropertyDescriptor(n,e);if(m!=null&&m.set&&m.set.call(r,t),!s){if(d&&typeof e=="string"){var N=f.get("length"),R=Number(e);Number.isInteger(R)&&R>=N.v&&o(N,R+1)}L(v)}return!0},ownKeys(n){w(v);var e=Reflect.ownKeys(n).filter(a=>{var s=f.get(a);return s===void 0||s.v!==u});for(var[t,r]of f)r.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){H()}})}function L(i,b=1){o(i,i.v+b)}function J(i,b,E,y=null,f=!1){P&&Y();var d=i,v=null,l=null,n=null,e=f?z:0;U(()=>{if(n===(n=!!b()))return;let t=!1;if(P){const r=d.data===B;n===r&&(d=C(),V(d),I(!1),t=!0)}n?(v?O(v):v=S(()=>E(d)),l&&D(l,()=>{l=null})):(l?O(l):y&&(l=S(()=>y(d))),v&&D(v,()=>{v=null})),t&&I(!0)},e),P&&(d=Z)}export{J as i,g as p};
