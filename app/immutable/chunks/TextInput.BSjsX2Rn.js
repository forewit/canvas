import{a as f,t as b,d as g}from"./disclose-version.BRFWJlgu.js";import{K as k,ap as h,M as L,O as y,P as x,R as I,ag as R}from"./runtime.De9YyAkO.js";import{d as _}from"./events.-h2mbIF3.js";import{i as u}from"./if.DxqyGXBG.js";import{s as T}from"./snippet.GcCkzcbJ.js";import{b as B}from"./this.DZmpvC0T.js";import{p as s,o as M}from"./index-client.C7fSNI2Y.js";import{a as U,I as z}from"./Icon.DvWr8QJw.js";import{r as K,s as v}from"./attributes.N1z6uQRr.js";import{b as O}from"./input.BrJUw80A.js";function d(l,t,n){if(n){if(l.classList.contains(t))return;l.classList.add(t)}else{if(!l.classList.contains(t))return;l.classList.remove(t)}}var P=b('<button class="svelte-1ykp8nt"><!> <!></button>');function N(l,t){k(t,!0);let n=s(t,"selected",3,!1),m=s(t,"disabled",3,!1),r;M(()=>{t.theme&&U(r,t.theme)});var e=P();B(e,i=>r=i,()=>r),e.__click=function(...i){var c;(c=t.onclick)==null||c.apply(this,i)};var a=y(e);u(a,()=>t.iconURL,i=>{z(i,{get url(){return t.iconURL},size:"1.2em",color:"var(--icon-color)"})});var o=x(a,2);u(o,()=>t.children,i=>{var c=g(),p=R(c);T(p,()=>t.children),f(i,c)}),I(e),h(()=>{e.disabled=m(),d(e,"error",t.variant==="error"),d(e,"alt",t.variant==="alt"),d(e,"selected",n())}),f(l,e),L()}_(["click"]);var j=b('<input type="text" spellcheck="false" class="svelte-15msho5">');function Q(l,t){let n=s(t,"value",15),m=s(t,"oninput",3,()=>{}),r=s(t,"disabled",3,!1),e=s(t,"name",3,"");var a=j();K(a),a.__input=function(...o){var i;(i=m())==null||i.apply(this,o)},h(()=>{v(a,"placeholder",t.placeholder),a.disabled=r(),v(a,"name",e()),d(a,"alt",t.variant==="alt")}),O(a,n,o=>n(o)),f(l,a)}_(["input"]);export{N as B,Q as T,d as t};
