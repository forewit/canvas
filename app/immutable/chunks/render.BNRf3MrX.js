import{c as L,z as v,f as S,a as O,g as V,A as y,s as c,d as R,B as b,e as f,C as H,D as M,F as Y,G as C,I as $,J as k,t as z,K as B,h as p,L as F,M as G,N as J}from"./runtime.CAgxYfLh.js";import{a as K,r as A,h}from"./events.BTJ_GI0K.js";import{r as P}from"./svelte-head.CyxsQq-s.js";import{b as W}from"./disclose-version.CtV2T_1y.js";const j=["wheel","mousewheel","touchstart","touchmove"];function q(t){return j.includes(t)}let N=!0;function ee(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function Q(t,e){const n=e.anchor??e.target.appendChild(L());return D(t,{...e,anchor:n})}function te(t,e){v(),e.intro=e.intro??!1;const n=e.target,u=p,_=f;try{for(var r=S(n);r&&(r.nodeType!==8||r.data!==O);)r=V(r);if(!r)throw y;c(!0),R(r),b();const o=D(t,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==H)throw M(),y;return c(!1),o}catch(o){if(o===y)return e.recover===!1&&Y(),v(),C(n),c(!1),Q(t,e);throw o}finally{c(u),R(_),P()}}const i=new Map;function D(t,{target:e,anchor:n,props:u={},events:_,context:r,intro:o=!0}){v();var g=new Set,m=a=>{for(var d=0;d<a.length;d++){var s=a[d];if(!g.has(s)){g.add(s);var E=q(s);e.addEventListener(s,h,{passive:E});var T=i.get(s);T===void 0?(document.addEventListener(s,h,{passive:E}),i.set(s,1)):i.set(s,T+1)}}};m($(K)),A.add(m);var l=void 0,I=k(()=>(z(()=>{if(r){B({});var a=J;a.c=r}_&&(u.$$events=_),p&&W(n,null),N=o,l=t(n,u)||{},N=!0,p&&(F.nodes_end=f),r&&G()}),()=>{for(var a of g){e.removeEventListener(a,h);var d=i.get(a);--d===0?(document.removeEventListener(a,h),i.delete(a)):i.set(a,d)}A.delete(m),w.delete(l)}));return w.set(l,I),l}let w=new WeakMap;function re(t){const e=w.get(t);e&&e()}export{N as a,te as h,Q as m,ee as s,re as u};
