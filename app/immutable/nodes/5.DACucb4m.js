import{a as l,t as h,d as n}from"../chunks/disclose-version.Bss9YEfS.js";import{Y as v,Z as $,_,a0 as g,$ as p,a4 as x,ae as P,af as f}from"../chunks/runtime.DmOoDO8L.js";import{s as j}from"../chunks/render.CoRXDfMe.js";import{s as C}from"../chunks/attributes.DpmCKYLT.js";import{g as y}from"../chunks/app.svelte.BWuOJ9-F.js";import{g as z}from"../chunks/firebase.svelte.DiKDFXPg.js";import{b as A}from"../chunks/paths.BcAyrczY.js";import{d as B}from"../chunks/events.Du4FB5lO.js";import{s as F}from"../chunks/snippet.C-4xuLl4.js";var H=h('<button class="svelte-1jjsz5u"><!></button>');function m(i,a){v(a,!0);var e=H();e.__click=function(...c){var t;(t=a.onclick)==null||t.apply(this,c)};var s=_(e);F(s,()=>a.children),g(e),l(i,e),$()}B(["click"]);var L=h("<h1>Profile</h1> <a><!></a> <!> <!>",1);function J(i,a){v(a,!0);const e=z(),s=y();var c=L(),t=p(x(c),2);C(t,"href",`${A??""}/`);var b=_(t);m(b,{children:(r,d)=>{f();var o=n("🏠Home");l(r,o)},$$slots:{default:!0}}),g(t);var u=p(t,2);m(u,{onclick:()=>{e.logout()},children:(r,d)=>{f();var o=n("Logout");l(r,o)},$$slots:{default:!0}});var k=p(u,2);m(k,{onclick:()=>{s.spellcheck=!s.spellcheck},children:(r,d)=>{f();var o=n();P(()=>j(o,`Spellcheck: ${s.spellcheck??""}`)),l(r,o)},$$slots:{default:!0}}),l(i,c),$()}export{J as component};
