import{c as f,a as i,b as v}from"../chunks/disclose-version.6vPDxpwZ.js";import{V as g,av as k,a0 as m,W as h,_ as C,N as y,X as E,Z as L,Y as S}from"../chunks/runtime.DmHE6BeA.js";import{i as u}from"../chunks/if.iF3oE4Wo.js";import{s as b}from"../chunks/snippet.DfjGNe4g.js";import{o as _}from"../chunks/index-client.BkplqDcG.js";import{g as A}from"../chunks/entry.DpKMW6rJ.js";import{h as T}from"../chunks/svelte-head.kZHqo2Nt.js";import{g as $,s as j}from"../chunks/app.svelte.DsTYy1J2.js";import{a as z,g as D,s as F}from"../chunks/themes.svelte.e9knPHAw.js";import{P as I}from"../chunks/ProgressBar.DA00XEqA.js";import{b as P}from"../chunks/paths.D6MHkWk4.js";import{I as M}from"../chunks/Icon.DnVIo-WY.js";import{s as O}from"../chunks/pages.svelte.D6iAmqDa.js";import{s as W}from"../chunks/directories.svelte.ZKeNEwKh.js";const q=!0,B="always",ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:q,trailingSlash:B},Symbol.toStringTag,{value:"Module"}));var N=v('<meta name="viewport" content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"> <meta name="theme-color" content="var(--bg)">',1);function R(p,r){g(r,!0);const t=$();function s(){if(!screen)throw new Error("Cannot update safe areas: screen is not defined");const e=document.documentElement;switch(screen.orientation.type){case"portrait-primary":e.style.setProperty("--safe-area-top","env(safe-area-inset-top)"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-primary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","env(safe-area-inset-left)"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-secondary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","env(safe-area-inset-right)");break}}k(()=>{var e;if(t.theme){const o=document.documentElement;z(o,t.theme),(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",t.theme.bg)}}),_(()=>(screen.orientation.addEventListener("change",s),()=>{screen.orientation.removeEventListener("change",s)}));var a=f();T(e=>{var o=N();C(2),i(e,o)});var c=m(a);b(c,()=>r.children),i(p,a),h()}var V=v('<div class="spinner svelte-5vsa63"><span class="svelte-5vsa63"></span></div>');function X(p,r){g(r,!0);const t=D();var s=f(),a=m(s);u(a,()=>!t.isLoading,c=>{var e=f(),o=m(e);u(o,()=>t.isPublishing,n=>{var l=V();i(n,l)},n=>{M(n,{url:`${P??""}/images/icons/double-checkmark.svg`,size:"1.2em"})}),i(c,e)}),i(p,s),h()}var Y=v('<div class="publishing-status svelte-1xkiws5"><!></div> <!>',1);function pe(p,r){g(r,!0);const t=F();O();const s=j();W(),y(()=>{s.authRedirect=window.location.pathname}),y(()=>{!t.user&&!t.isLoading&&A(P+"/login/")}),_(()=>(window.addEventListener("beforeunload",a=>{t.isPublishing&&a.preventDefault()}),()=>{t.destroy()})),R(p,{children:(a,c)=>{var e=f(),o=m(e);u(o,()=>t.isLoading,n=>{I(n)},n=>{var l=Y(),d=m(l),x=E(d);X(x,{}),L(d);var w=S(d,2);b(w,()=>r.children),i(n,l)}),i(a,e)},$$slots:{default:!0}}),h()}export{pe as component,ie as universal};
