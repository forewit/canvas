import{c as u,a as l,t as h}from"../chunks/disclose-version.BRFWJlgu.js";import{K as f,M as x,O as b,P as c,Q as k,R as P}from"../chunks/runtime.De9YyAkO.js";import{g as $}from"../chunks/pages.svelte.BplmUK_0.js";import{g as y}from"../chunks/directories.svelte.Cil8smhP.js";import{b as _}from"../chunks/paths.DBDZQgiF.js";import{B as m,T as B}from"../chunks/TextInput.BSjsX2Rn.js";var C=h('<header class="svelte-1agh3q5"><!> <!> <!></header>');function L(p,r){f(r,!0);const o=$(),d=y(),t=r.data.id,s=o[t];var e=C(),n=b(e);m(n,{variant:"alt",onclick:()=>history.back(),children:(a,D)=>{k();var v=u("🔙");l(a,v)},$$slots:{default:!0}});var i=c(n,2);B(i,{get value(){return s.title},set value(a){s.title=a},placeholder:"Untitled"});var g=c(i,2);m(g,{variant:"error",iconURL:`${_??""}/images/icons/xmark-small.svg`,onclick:()=>{d.removePageID(t),delete o[t]}}),P(e),l(p,e),x()}export{L as component};
