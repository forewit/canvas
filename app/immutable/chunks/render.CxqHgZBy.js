import{o as S,am as v,O as D,a9 as I,R as L,an as y,z as c,t as T,v as V,n as f,P as H,ao as M,ap as Y,M as b,x as C,aq as P,j as $,a1 as j,m as p,C as k,a4 as q,f as z}from"./runtime.BFk_GPJU.js";import{a as W,r as A,h}from"./events.CW_gDdDe.js";import{r as B}from"./svelte-head.WfchpAXc.js";import{d as F}from"./disclose-version.CmgWPxu-.js";const G=["wheel","mousewheel","touchstart","touchmove"];function J(t){return G.includes(t)}function x(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function K(t,e){const n=e.anchor??e.target.appendChild(S());return N(t,{...e,anchor:n})}function ee(t,e){v(),e.intro=e.intro??!1;const n=e.target,u=p,_=f;try{for(var r=D(n);r&&(r.nodeType!==8||r.data!==I);)r=L(r);if(!r)throw y;c(!0),T(r),V();const i=N(t,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==H)throw M(),y;return c(!1),i}catch(i){if(i===y)return e.recover===!1&&Y(),v(),b(n),c(!1),K(t,e);throw i}finally{c(u),T(_),B()}}const d=new Map;function N(t,{target:e,anchor:n,props:u={},events:_,context:r,intro:i=!0}){v();var m=new Set,g=a=>{for(var o=0;o<a.length;o++){var s=a[o];if(!m.has(s)){m.add(s);var E=J(s);e.addEventListener(s,h,{passive:E});var R=d.get(s);R===void 0?(document.addEventListener(s,h,{passive:E}),d.set(s,1)):d.set(s,R+1)}}};g(C(W)),A.add(g);var l=void 0,O=P(()=>($(()=>{if(r){j({});var a=z;a.c=r}_&&(u.$$events=_),p&&F(n,null),l=t(n,u)||{},p&&(k.nodes_end=f),r&&q()}),()=>{for(var a of m){e.removeEventListener(a,h);var o=d.get(a);--o===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,o)}A.delete(g),w.delete(l)}));return w.set(l,O),l}let w=new WeakMap;function te(t){const e=w.get(t);e&&e()}export{ee as h,K as m,x as s,te as u};
