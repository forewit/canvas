import{c as f,a as i,t as v}from"../chunks/disclose-version.CmgWPxu-.js";import{a1 as g,au as k,a2 as m,a4 as h,ak as C,u as y,a6 as E,a7 as L,a5 as S}from"../chunks/runtime.BFk_GPJU.js";import{i as u}from"../chunks/if.CxhkD6Oc.js";import{s as b}from"../chunks/snippet.BpHPZD5i.js";import{o as _}from"../chunks/index-client.CWUJWqUT.js";import{g as A}from"../chunks/entry.BPyTzGS8.js";import{h as T}from"../chunks/svelte-head.WfchpAXc.js";import{g as $,a as j,s as z}from"../chunks/app.svelte.DLMQr0qk.js";import{P as D}from"../chunks/ProgressBar.D04g-AXI.js";import{b as P}from"../chunks/paths.DxOgjd6w.js";import{g as F,s as I}from"../chunks/firebase.svelte.DfgjAqLw.js";import{I as M}from"../chunks/Icon.SrGevWyh.js";import{s as O}from"../chunks/pages.svelte.2XoXNLLy.js";import{s as q}from"../chunks/directories.svelte.6kITWJA3.js";const B=!0,R="always",ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:B,trailingSlash:R},Symbol.toStringTag,{value:"Module"}));var W=v('<meta name="viewport" content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"> <meta name="theme-color" content="var(--bg)">',1);function G(p,r){g(r,!0);const t=$();function s(){if(!screen)throw new Error("Cannot update safe areas: screen is not defined");const e=document.documentElement;switch(screen.orientation.type){case"portrait-primary":e.style.setProperty("--safe-area-top","env(safe-area-inset-top)"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-primary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","env(safe-area-inset-left)"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-secondary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","env(safe-area-inset-right)");break}}k(()=>{var e;if(t.theme){const o=document.documentElement;j(o,t.theme),(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",t.theme.bg)}}),_(()=>(screen.orientation.addEventListener("change",s),()=>{screen.orientation.removeEventListener("change",s)}));var a=f();T(e=>{var o=W();C(2),i(e,o)});var c=m(a);b(c,()=>r.children),i(p,a),h()}var H=v('<div class="spinner svelte-5vsa63"><span class="svelte-5vsa63"></span></div>');function J(p,r){g(r,!0);const t=F();var s=f(),a=m(s);u(a,()=>!t.isLoading,c=>{var e=f(),o=m(e);u(o,()=>t.isPublishing,n=>{var l=H();i(n,l)},n=>{M(n,{url:`${P??""}/images/icons/double-checkmark.svg`,size:"1.2em"})}),i(c,e)}),i(p,s),h()}var K=v('<div class="publishing-status svelte-1xkiws5"><!></div> <!>',1);function pe(p,r){g(r,!0);const t=I();O();const s=z();q(),y(()=>{s.authRedirect=window.location.pathname}),y(()=>{!t.user&&!t.isLoading&&A(P+"/login/")}),_(()=>(window.addEventListener("beforeunload",a=>{t.isPublishing&&a.preventDefault()}),()=>{t.destroy()})),G(p,{children:(a,c)=>{var e=f(),o=m(e);u(o,()=>t.isLoading,n=>{D(n)},n=>{var l=K(),d=m(l),x=E(d);J(x,{}),L(d);var w=S(d,2);b(w,()=>r.children),i(n,l)}),i(a,e)},$$slots:{default:!0}}),h()}export{pe as component,ie as universal};