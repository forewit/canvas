import{c as P,a as i,t as m}from"../chunks/disclose-version.D8fhPq9M.js";import{Y as g,au as C,u as b,a2 as l,Z as u,k as D,f as o,j as E,ac as S,ad as k,af as _,ae as j}from"../chunks/runtime.D_LhCXyF.js";import{i as B}from"../chunks/if.f1rSyLTD.js";import{s as A}from"../chunks/snippet.E31qi66Q.js";import{a as O}from"../chunks/index-client.D7XHtNFG.js";import{b as p,g as R}from"../chunks/entry.DzZATzI1.js";import{h as $}from"../chunks/svelte-head.DHuTAYRK.js";import{a as F,g as N,s as T,b as z}from"../chunks/app.svelte.DnnDf6HZ.js";import{P as M}from"../chunks/ProgressBar.3-M6aTvF.js";import{s as W}from"../chunks/attributes.CdCRXyt-.js";import{s as Y}from"../chunks/pages.svelte.C5XGaOTi.js";import{s as Z}from"../chunks/directories.svelte.xjE4BcSv.js";function h(e,r,s){if(s){if(e.classList.contains(r))return;e.classList.add(r)}else{if(!e.classList.contains(r))return;e.classList.remove(r)}}const q=!0,G="always",de=Object.freeze(Object.defineProperty({__proto__:null,prerender:q,trailingSlash:G},Symbol.toStringTag,{value:"Module"})),H=[{name:"Canvas",bg:"#f0f0f0",bgAlt:"#e6e6e6",main:"#c2c3cc",card:"#ffffff",error:"#ff5c5c",sub:"#bbbcc7",text:"#1a1a1a"},{name:"Paper",bg:"#eeeeee",bgAlt:"#dddddd",main:"#444444",card:"#444444",error:"#d70000",sub:"#b2b2b2",text:"#444444"},{name:"Rose Pine Dawn",bg:"#fffaf3",bgAlt:"#f0e9df",main:"#56949f",card:"#ea9d34",error:"#b4637a",sub:"#c4a7e7",text:"#286983"},{name:"Blueberry Light",bg:"#dae0f5",bgAlt:"#c1c7df",main:"#506477",card:"#df4576",error:"#df4576",sub:"#92a4be",text:"#678198"},{name:"Repose Dark",bg:"#2f3338",bgAlt:"#3a3c3d",main:"#d6d2bc",card:"#d6d2bc",error:"#ff4a59",sub:"#8f8e84",text:"#d6d2bc"},{name:"Carbon",bg:"#313131",bgAlt:"#2b2b2b",main:"#f66e0d",card:"#f66e0d",error:"#e72d2d",sub:"#616161",text:"#f5e6c8"},{name:"Blueberry Dark",bg:"#212b42",bgAlt:"#1b2334",main:"#add7ff",card:"#962f7e",error:"#df4576",sub:"#5c7da5",text:"#91b4d5"},{name:"One Dark",bg:"#2f343f",bgAlt:"#262b34",main:"#61afef",card:"#61afef",error:"#e06c75",sub:"#eceff4",text:"#98c379"},{name:"Dark Note",bg:"#1f1f1f",bgAlt:"#141414",main:"#f2c17b",card:"#e3dce0",error:"#ff0000",sub:"#768f95",text:"#d2dff4"},{name:"Dark",bg:"#111111",bgAlt:"#191919",main:"#eeeeee",card:"#eeeeee",error:"#da3333",sub:"#444444",text:"#eeeeee"}],x=function(){if(!screen)throw new Error("Cannot update safe areas: screen is not defined");const e=document.documentElement;switch(screen.orientation.type){case"portrait-primary":e.style.setProperty("--safe-area-top","env(safe-area-inset-top)"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-primary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","env(safe-area-inset-left)"),e.style.setProperty("--safe-area-right","0px");break;case"landscape-secondary":e.style.setProperty("--safe-area-top","0px"),e.style.setProperty("--safe-area-left","0px"),e.style.setProperty("--safe-area-right","env(safe-area-inset-right)");break}};var I=m('<meta name="theme-color" content="var(--bg)">');function J(e,r){g(r,!0);const s=F();let t=E(()=>H.find(a=>a.name===s.themeName));C(()=>{const a=D(()=>document.documentElement);o(t)&&(a.style.setProperty("--bg",o(t).bg),a.style.setProperty("--bg-alt",o(t).bgAlt),a.style.setProperty("--main",o(t).main),a.style.setProperty("--card",o(t).card),a.style.setProperty("--error",o(t).error),a.style.setProperty("--sub",o(t).sub),a.style.setProperty("--text",o(t).text))}),b(()=>(screen.orientation.addEventListener("change",x),()=>screen.orientation.removeEventListener("change",x)));var n=P();$(a=>{var f=I();i(a,f)});var y=l(n);A(y,()=>r.children),i(e,n),u()}var K=m('<div class="status svelte-1wdncpb"><span class="status-icon svelte-1wdncpb"></span></div>');function Q(e,r){g(r,!0);const s=N();var t=K(),n=k(t);W(n,"style",`-webkit-mask: url(${p??""}/images/icons/double-checkmark.svg) no-repeat center / contain;
        mask: url(${p??""}/images/icons/double-checkmark.svg) no-repeat center / contain;`),_(t),S(()=>{h(t,"saving",s.isPublishing),h(t,"saved",!s.isPublishing&&!s.isLoading)}),i(e,t),u()}var U=m('<div class="publishing-status svelte-1xkiws5"><!></div> <!>',1);function be(e,r){g(r,!0);const s=T();Y(),Z();const t=z();b(()=>{t.authRedirect=window.location.pathname}),b(()=>{!s.user&&!s.isLoading&&R(p+"/login/")}),O(()=>{s.destroy()}),J(e,{children:(n,y)=>{var a=P(),f=l(a);B(f,()=>s.isLoading,c=>{M(c)},c=>{var v=U(),d=l(v),w=k(d);Q(w,{}),_(d);var L=j(d,2);A(L,()=>r.children),i(c,v)}),i(n,a)},$$slots:{default:!0}}),u()}export{be as component,de as universal};