import{e as D,H,d as y,s as _,a as T,f as I,b as f,g as L,i as O,j as S,k as V,h as m,l as b}from"./disclose-version.CmAGsPUf.js";import{h as Y,a as j,e as k,c as C,p as M,f as $,g as P,j as W}from"./runtime.Y5gDxlrQ.js";import{a as q,r as R,h}from"./events.0Pp6qAY_.js";import{r as z}from"./svelte-head.BqFmhxlh.js";const B=["wheel","touchstart","touchmove","touchend","touchcancel"];function F(t){return B.includes(t)}function X(t,e){(t.__t??(t.__t=t.nodeValue))!==e&&(t.nodeValue=t.__t=e)}function G(t,e){const s=e.anchor??e.target.appendChild(D());return A(t,{...e,anchor:s})}function Z(t,e){e.intro=e.intro??!1;const s=e.target,u=m,c=f;try{for(var r=s.firstChild;r&&(r.nodeType!==8||r.data!==H);)r=r.nextSibling;if(!r)throw y;_(!0),T(r),I();const i=A(t,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==L)throw O(),y;return _(!1),i}catch(i){if(i===y)return e.recover===!1&&Y(),S(),V(s),_(!1),G(t,e);throw i}finally{_(u),T(c),z()}}const d=new Map;function A(t,{target:e,anchor:s,props:u={},events:c,context:r,intro:i=!0}){S();var g=new Set,v=a=>{for(var o=0;o<a.length;o++){var n=a[o];if(!g.has(n)){g.add(n);var w=F(n);e.addEventListener(n,h,{passive:w});var E=d.get(n);E===void 0?(document.addEventListener(n,h,{passive:w}),d.set(n,1)):d.set(n,E+1)}}};v(j(q)),R.add(v);var l=void 0,N=k(()=>(C(()=>{if(r){M({});var a=W;a.c=r}c&&(u.$$events=c),m&&b(s,null),l=t(s,u)||{},m&&($.nodes.end=f),r&&P()}),()=>{for(var a of g){e.removeEventListener(a,h);var o=d.get(a);--o===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,o)}R.delete(v),p.delete(l)}));return p.set(l,N),l}let p=new WeakMap;function x(t){const e=p.get(t);e==null||e()}export{Z as h,G as m,X as s,x as u};