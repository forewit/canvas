import{S as P,ak as L,al as M,X as c,am as j,A as o,a2 as T,an as u,w as m,R as q,ao as F,ap as K,k as Y,b as B,h as x,J as C,L as H,M as J,d as U,s as O,N as I,O as S,P as D,f as X,aq as Z}from"./runtime.4vCN5gQe.js";function g(i,b=null,N){if(typeof i!="object"||i===null||P in i)return i;const y=K(i);if(y!==L&&y!==M)return i;var a=new Map,d=Y(i),v=c(0);d&&a.set("length",c(i.length));var l;return new Proxy(i,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&j();var r=a.get(e);return r===void 0?(r=c(t.value),a.set(e,r)):o(r,g(t.value,l)),!0},deleteProperty(n,e){var t=a.get(e);return t===void 0?e in n&&a.set(e,c(u)):(o(t,u),k(v)),!0},get(n,e,t){var _;if(e===P)return i;var r=a.get(e),f=e in n;if(r===void 0&&(!f||(_=T(n,e))!=null&&_.writable)&&(r=c(g(f?n[e]:u,l)),a.set(e,r)),r!==void 0){var s=m(r);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var r=a.get(e);r&&(t.value=m(r))}else if(t===void 0){var f=a.get(e),s=f==null?void 0:f.v;if(f!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===P)return!0;var t=a.get(e),r=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||q!==null&&(!r||(s=T(n,e))!=null&&s.writable)){t===void 0&&(t=c(r?g(n[e],l):u),a.set(e,t));var f=m(t);if(f===u)return!1}return r},set(n,e,t,r){var E;var f=a.get(e),s=e in n;if(d&&e==="length")for(var _=t;_<f.v;_+=1){var h=a.get(_+"");h!==void 0?o(h,u):_ in n&&(h=c(u),a.set(_+"",h))}f===void 0?(!s||(E=T(n,e))!=null&&E.writable)&&(f=c(void 0),o(f,g(t,l)),a.set(e,f)):(s=f.v!==u,o(f,g(t,l)));var w=Reflect.getOwnPropertyDescriptor(n,e);if(w!=null&&w.set&&w.set.call(r,t),!s){if(d&&typeof e=="string"){var A=a.get("length"),R=Number(e);Number.isInteger(R)&&R>=A.v&&o(A,R+1)}k(v)}return!0},ownKeys(n){m(v);var e=Reflect.ownKeys(n).filter(f=>{var s=a.get(f);return s===void 0||s.v!==u});for(var[t,r]of a)r.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){F()}})}function k(i,b=1){o(i,i.v+b)}function G(i,b,N,y=null,a=!1){x&&C();var d=i,v=null,l=null,n=null,e=a?Z:0;B(()=>{if(n===(n=!!b()))return;let t=!1;if(x){const r=d.data===H;n===r&&(d=J(),U(d),O(!1),t=!0)}n?(v?I(v):v=S(()=>N(d)),l&&D(l,()=>{l=null})):(l?I(l):y&&(l=S(()=>y(d))),v&&D(v,()=>{v=null})),t&&O(!0)},e),x&&(d=X)}export{G as i,g as p};
