import{a as v,t as h,c as me,d as B}from"../chunks/disclose-version.CBUhcYe9.js";import{v as k,p as $,l as ee,m as s,o as l,n as a,w as x,C as te,D as I,ar as E}from"../chunks/runtime.4vCN5gQe.js";import{s as j}from"../chunks/render.ZJTH9JWY.js";import{t as T,e as z,i as G}from"../chunks/class.CxUNBNxR.js";import{r as ae,s as S}from"../chunks/attributes.s4vI7vNd.js";import{g as se,a as he,t as ue}from"../chunks/app.svelte.C_YXpmtr.js";import{b as R}from"../chunks/paths.RRWo1RKe.js";import{B as D}from"../chunks/Button.ClTiuoOn.js";import{d as le}from"../chunks/events.CYiFnV6R.js";import{b as fe,a as pe}from"../chunks/input.D7nYat3R.js";import{p as N}from"../chunks/index-client.CJwHoa7I.js";import"../chunks/Icon.B1jUH2ZD.js";import{i as L}from"../chunks/if.D3RmbbZj.js";var _e=h('<input type="text" spellcheck="false" class="svelte-15msho5">');function ge(p,e){let n=N(e,"value",15),t=N(e,"oninput",3,()=>{}),i=N(e,"disabled",3,!1),u=N(e,"name",3,"");var d=_e();ae(d),d.__input=function(...c){var o;(o=t())==null||o.apply(this,c)},k(()=>{S(d,"placeholder",e.placeholder),d.disabled=i(),S(d,"name",u()),T(d,"alt",e.variant==="alt")}),fe(d,n,c=>n(c)),v(p,d)}le(["input"]);var be=h('<input type="checkbox" class="svelte-h917dr">');function H(p,e){let n=N(e,"checked",15,!0);var t=be();ae(t),k(()=>S(t,"id",e.id)),pe(t,n,i=>n(i)),v(p,t)}var xe=h('<p class="svelte-iyk1ci"> </p>'),ke=h('<div class="square svelte-iyk1ci"></div>'),we=h('<div class="squares svelte-iyk1ci"></div>'),Fe=h('<div class="line svelte-iyk1ci"></div>'),ye=h("<!> <!>",1),Pe=h('<button class="folder-button svelte-iyk1ci"><!> <!></button>');function Ne(p,e){$(e,!0);const n=se();let t=te(()=>e.folder.name!==""&&(!e.folder.subfolders&&!e.folder.pages||!n.showFolderPreview));var i=Pe();i.__click=function(...c){var o;(o=e.onclick)==null||o.apply(this,c)};var u=s(i);L(u,()=>e.folder.name!==""&&n.showFolderName,c=>{var o=xe(),f=s(o);a(o),k(()=>j(f,e.folder.name)),v(c,o)});var d=l(u,2);L(d,()=>n.showFolderPreview,c=>{var o=ye(),f=I(o);L(f,()=>e.folder.subfolders,_=>{var m=we();z(m,21,()=>e.folder.subfolders,G,(w,F)=>{var g=ke();v(w,g)}),a(m),v(_,m)});var C=l(f,2);L(C,()=>e.folder.pages,_=>{var m=me(),w=I(m);z(w,17,()=>e.folder.pages,G,(F,g)=>{var y=Fe();v(F,y)}),v(_,m)}),v(c,o)}),a(i),k(()=>{i.disabled=!e.onclick,S(i,"style",`--folder-color: ${e.folder.color??""};`),T(i,"centerTitle",x(t))}),v(p,i),ee()}le(["click"]);var Te=h('<header class="svelte-35tdx8"><a class="home svelte-35tdx8"><!></a></header> <main class="svelte-35tdx8"><section class="svelte-35tdx8"><h1>Settings</h1> <div class="settings-block svelte-35tdx8"><label class="settings-option svelte-35tdx8" for="spellcheck" style="cursor: pointer"><!> <p class="svelte-35tdx8">Spellcheck</p></label> <h3>Appearance</h3> <div class="settings-option svelte-35tdx8"><div class="settings-block svelte-35tdx8"><label class="settings-option svelte-35tdx8" for="showFolderName" style="cursor: pointer"><!> <p class="svelte-35tdx8">Show folder names</p></label> <label class="settings-option svelte-35tdx8" for="showFolderPreview" style="cursor: pointer"><!> <p class="svelte-35tdx8">Show folder previews</p></label></div> <div style="margin-left: var(--l)"><!></div></div></div></section> <section class="svelte-35tdx8"><h1>Theme</h1> <div class="theme-grid svelte-35tdx8"></div></section> <section class="svelte-35tdx8"><h1>Profile</h1> <div class="settings-block svelte-35tdx8"><div class="settings-option svelte-35tdx8"><h3>Username:</h3> <!></div> <div class="settings-option svelte-35tdx8"><h3>Email:</h3> <p> </p></div> <br> <div class="logout svelte-35tdx8"><!></div></div></section></main>',1);function Ge(p,e){$(e,!0);const n=he(),t=se();var i=Te(),u=I(i),d=s(u);S(d,"href",`${R??""}/`);var c=s(d);D(c,{variant:"alt",iconURL:`${R??""}/images/icons/home.svg`,children:(r,b)=>{E();var P=B("Home");v(r,P)},$$slots:{default:!0}}),a(d),a(u);var o=l(u,2),f=s(o),C=l(s(f),2),_=s(C),m=s(_);H(m,{get checked(){return t.spellcheck},set checked(r){t.spellcheck=r},id:"spellcheck"});var w=l(m,2);a(_);var F=l(_,4),g=s(F),y=s(g),J=s(y);H(J,{get checked(){return t.showFolderName},set checked(r){t.showFolderName=r},id:"showFolderName"});var re=l(J,2);a(y);var K=l(y,2),M=s(K);H(M,{get checked(){return t.showFolderPreview},set checked(r){t.showFolderPreview=r},id:"showFolderPreview"});var oe=l(M,2);a(K),a(g);var O=l(g,2),ie=s(O);Ne(ie,{folder:{name:"Example",pages:[""],subfolders:["",""],color:"var(--main)"}}),a(O),a(F),a(C),a(f);var U=l(f,2),Q=l(s(U),2);z(Q,21,()=>ue,G,(r,b)=>{var P=te(()=>t.themeName===x(b).name);D(r,{get theme(){return x(b)},onclick:()=>t.themeName=x(b).name,get selected(){return x(P)},children:(ce,Se)=>{E();var Z=B();k(()=>j(Z,x(b).name)),v(ce,Z)},$$slots:{default:!0}})}),a(Q),a(U);var V=l(U,2),W=l(s(V),2),q=s(W),de=l(s(q),2);ge(de,{get value(){return t.username},set value(r){t.username=r}}),a(q);var A=l(q,2),X=l(s(A),2),ve=s(X);a(X),a(A);var Y=l(A,4),ne=s(Y);D(ne,{iconURL:`${R??""}/images/icons/logout.svg`,variant:"error",onclick:()=>{n.logout()},children:(r,b)=>{E();var P=B("Logout");v(r,P)},$$slots:{default:!0}}),a(Y),a(W),a(V),a(o),k(()=>{var r;T(w,"disabled",!t.spellcheck),T(re,"disabled",!t.showFolderName),T(oe,"disabled",!t.showFolderPreview),j(ve,(r=n.user)==null?void 0:r.email)}),v(p,i),ee()}export{Ge as component};