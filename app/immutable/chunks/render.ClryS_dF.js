import{D as N,a8 as p,J as S,G as L,I as O,a9 as y,p as l,o as R,m as V,l as f,aa as b,ab as H,ac as Y,ad as k,ae as M,af as $,i as z,w as C,k as v,T as G,z as J,a6 as P}from"./runtime.BZ2yvmcy.js";import{a as W,r as A,h}from"./events.BXoHu6kc.js";import{r as j}from"./svelte-head.BEbJQAXd.js";import{c as q}from"./disclose-version.BlsN6X0a.js";const B=["wheel","mousewheel","touchstart","touchmove"];function F(t){return B.includes(t)}function x(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function K(t,e){const n=e.anchor??e.target.appendChild(N());return D(t,{...e,anchor:n})}function ee(t,e){p(),e.intro=e.intro??!1;const n=e.target,u=v,_=f;try{for(var a=S(n);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw y;l(!0),R(a),V();const i=D(t,{...e,anchor:a});if(f===null||f.nodeType!==8||f.data!==b)throw H(),y;return l(!1),i}catch(i){if(i===y)return e.recover===!1&&Y(),p(),k(n),l(!1),K(t,e);throw i}finally{l(u),R(_),j()}}const d=new Map;function D(t,{target:e,anchor:n,props:u={},events:_,context:a,intro:i=!0}){p();var g=new Set,m=r=>{for(var o=0;o<r.length;o++){var s=r[o];if(!g.has(s)){g.add(s);var E=F(s);e.addEventListener(s,h,{passive:E});var T=d.get(s);T===void 0?(document.addEventListener(s,h,{passive:E}),d.set(s,1)):d.set(s,T+1)}}};m(M(W)),A.add(m);var c=void 0,I=$(()=>(z(()=>{if(a){C({});var r=P;r.c=a}_&&(u.$$events=_),v&&q(n,null),c=t(n,u)||{},v&&(G.nodes_end=f),a&&J()}),()=>{for(var r of g){e.removeEventListener(r,h);var o=d.get(r);--o===0?(document.removeEventListener(r,h),d.delete(r)):d.set(r,o)}A.delete(m),w.delete(c)}));return w.set(c,I),c}let w=new WeakMap;function te(t){const e=w.get(t);e&&e()}export{ee as h,K as m,x as s,te as u};
