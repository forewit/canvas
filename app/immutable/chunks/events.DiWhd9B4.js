import{T as b,t as y,U as k,k as v}from"./runtime.DmHE6BeA.js";const E=new Set,L=new Set;function T(r,a,e,o){function i(t){if(o.capture||q.call(a,t),!t.cancelBubble)return e.call(this,t)}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?y(()=>{a.addEventListener(r,i,o)}):a.addEventListener(r,i,o),i}function O(r,a,e,o,i){var t={capture:o,passive:i},n=T(r,a,e,t);(a===document.body||a===window||a===document)&&b(()=>{a.removeEventListener(r,n,t)})}function S(r){for(var a=0;a<r.length;a++)E.add(r[a]);for(var e of L)e(r)}function q(r){var _;var a=this,e=a.ownerDocument,o=r.type,i=((_=r.composedPath)==null?void 0:_.call(r))||[],t=i[0]||r.target,n=0,d=r.__root;if(d){var f=i.indexOf(d);if(f!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;f<=h&&(n=f)}if(t=i[n]||r.target,t!==a){k(r,"currentTarget",{configurable:!0,get(){return t||e}});try{for(var u,p=[];t!==null;){var s=t.parentNode||t.host||null;try{var l=t["__"+o];if(l!==void 0&&!t.disabled)if(v(l)){var[g,...w]=l;g.apply(t,[r,...w])}else l.call(t,r)}catch(c){u?p.push(c):u=c}if(r.cancelBubble||s===a||s===null)break;t=s}if(u){for(let c of p)queueMicrotask(()=>{throw c});throw u}}finally{r.__root=a,delete r.currentTarget}}}export{E as a,S as d,O as e,q as h,L as r};