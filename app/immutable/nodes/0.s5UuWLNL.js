import{c as f,a as i,t as v}from"../chunks/disclose-version.CBUhcYe9.js";import{p as g,av as k,D as c,l as h,ar as C,B as y,m as E,n as L,o as S}from"../chunks/runtime.4vCN5gQe.js";import{i as u}from"../chunks/if.D3RmbbZj.js";import{s as b,I as A}from"../chunks/Icon.B1jUH2ZD.js";import{o as _}from"../chunks/index-client.CJwHoa7I.js";import{g as D}from"../chunks/entry.C6WDqkzQ.js";import{h as T}from"../chunks/svelte-head.Bz3Ys--g.js";import{g as $,b as j,a as z,s as B,c as F}from"../chunks/app.svelte.C_YXpmtr.js";import{P as I}from"../chunks/ProgressBar.DBth56lp.js";import{b as P}from"../chunks/paths.RRWo1RKe.js";import{s as M,b as O}from"../chunks/directories.svelte.DBU4fb_y.js";const q=!0,R="always",se=Object.freeze(Object.defineProperty({__proto__:null,prerender:q,trailingSlash:R},Symbol.toStringTag,{value:"Module"}));var W=v('<meta name="viewport" content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"> <meta name="theme-color" content="var(--bg)">',1);function G(p,r){g(r,!0);const t=$();function s(){if(!screen)throw new Error("Cannot update safe areas: screen is not defined");const e=document.documentElement;switch(screen.orientation.type){case"portrait-primary":e.style.setProperty("--safe-area-top","env(safe-area-inset-top)"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-primary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","env(safe-area-inset-left)"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-secondary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","env(safe-area-inset-right)");break}}k(()=>{var e;if(t.theme){const o=document.documentElement;j(o,t.theme),(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",t.theme.bg)}}),_(()=>(screen.orientation.addEventListener("change",s),()=>{screen.orientation.removeEventListener("change",s)}));var a=f();T(e=>{var o=W();C(2),i(e,o)});var l=c(a);b(l,()=>r.children),i(p,a),h()}var H=v('<div class="spinner svelte-5vsa63"><span class="svelte-5vsa63"></span></div>');function J(p,r){g(r,!0);const t=z();var s=f(),a=c(s);u(a,()=>!t.isLoading,l=>{var e=f(),o=c(e);u(o,()=>t.isPublishing,n=>{var m=H();i(n,m)},n=>{A(n,{url:`${P??""}/images/icons/double-checkmark.svg`,size:"1.2em"})}),i(l,e)}),i(p,s),h()}var K=v('<div class="publishing-status svelte-1xkiws5"><!></div> <!>',1);function oe(p,r){g(r,!0);const t=B();M();const s=F();O(),y(()=>{s.authRedirect=window.location.pathname}),y(()=>{!t.user&&!t.isLoading&&D(P+"/login/")}),_(()=>(window.addEventListener("beforeunload",a=>{t.isPublishing&&a.preventDefault()}),()=>{t.destroy()})),G(p,{children:(a,l)=>{var e=f(),o=c(e);u(o,()=>t.isLoading,n=>{I(n)},n=>{var m=K(),d=c(m),x=E(d);J(x,{}),L(d);var w=S(d,2);b(w,()=>r.children),i(n,m)}),i(a,e)},$$slots:{default:!0}}),h()}export{oe as component,se as universal};