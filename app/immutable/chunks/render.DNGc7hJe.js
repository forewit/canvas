import{c as I,z as v,f as L,a as S,g as O,A as y,s as l,d as R,B as V,e as f,C as b,D as H,F as M,G as Y,I as C,J as $,t as k,K as z,h as p,L as B,M as F,N as G}from"./runtime.De9YyAkO.js";import{a as J,r as A,h}from"./events.-h2mbIF3.js";import{r as K}from"./svelte-head.Cdnu2LVH.js";import{b as P}from"./disclose-version.BRFWJlgu.js";const W=["wheel","mousewheel","touchstart","touchmove"];function j(t){return W.includes(t)}function x(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function q(t,e){const n=e.anchor??e.target.appendChild(I());return N(t,{...e,anchor:n})}function ee(t,e){v(),e.intro=e.intro??!1;const n=e.target,u=p,_=f;try{for(var r=L(n);r&&(r.nodeType!==8||r.data!==S);)r=O(r);if(!r)throw y;l(!0),R(r),V();const i=N(t,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==b)throw H(),y;return l(!1),i}catch(i){if(i===y)return e.recover===!1&&M(),v(),Y(n),l(!1),q(t,e);throw i}finally{l(u),R(_),K()}}const d=new Map;function N(t,{target:e,anchor:n,props:u={},events:_,context:r,intro:i=!0}){v();var g=new Set,m=a=>{for(var o=0;o<a.length;o++){var s=a[o];if(!g.has(s)){g.add(s);var E=j(s);e.addEventListener(s,h,{passive:E});var T=d.get(s);T===void 0?(document.addEventListener(s,h,{passive:E}),d.set(s,1)):d.set(s,T+1)}}};m(C(J)),A.add(m);var c=void 0,D=$(()=>(k(()=>{if(r){z({});var a=G;a.c=r}_&&(u.$$events=_),p&&P(n,null),c=t(n,u)||{},p&&(B.nodes_end=f),r&&F()}),()=>{for(var a of g){e.removeEventListener(a,h);var o=d.get(a);--o===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,o)}A.delete(m),w.delete(c)}));return w.set(c,D),c}let w=new WeakMap;function te(t){const e=w.get(t);e&&e()}export{ee as h,q as m,x as s,te as u};
