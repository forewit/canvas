import{a as v,t as H,b as w}from"../chunks/disclose-version.C3rfybqw.js";import{x as I,y as U,z as j,A as t,B as h,C as e,D as a,o as l,w as q}from"../chunks/runtime.s8g5pai7.js";import{s as y}from"../chunks/render.DGs8JWJ0.js";import{B as u,T as G,e as J,a as K,i as M,t as O}from"../chunks/Toggle.usjeGCjM.js";import{g as Q,a as V,t as W}from"../chunks/app.svelte.BOHTfwmN.js";import{b as _}from"../chunks/paths.CviGfTIR.js";var X=H('<main class="svelte-1wwi0r7"><div class="home-button svelte-1wwi0r7"><!></div> <section class="svelte-1wwi0r7"><h1>Settings</h1> <div class="settings-block svelte-1wwi0r7"><label class="settings-option svelte-1wwi0r7" for="spellcheck" style="cursor: pointer"><!> <p class="svelte-1wwi0r7">Spellcheck</p></label></div></section> <section class="svelte-1wwi0r7"><h1>Theme</h1> <div class="theme-grid svelte-1wwi0r7"></div></section> <section class="svelte-1wwi0r7"><h1>Profile</h1> <div class="settings-block svelte-1wwi0r7"><div class="settings-option svelte-1wwi0r7"><p>Username:</p> <!></div> <div class="settings-option svelte-1wwi0r7"><p>Email:</p> <p> </p></div> <div class="logout svelte-1wwi0r7"><!></div></div></section></main>');function re(A,N){I(N,!0);const f=Q(),i=V();var c=X(),n=t(c),R=t(n);u(R,{href:`${_??""}/`,iconURL:`${_??""}/images/icons/home.svg`,children:(s,r)=>{h();var o=w("Home");v(s,o)},$$slots:{default:!0}}),e(n);var d=a(n,2),$=a(t(d),2),b=t($),x=t(b);G(x,{get checked(){return i.spellcheck},set checked(s){i.spellcheck=s},id:"spellcheck"});var S=a(x,2);e(b),e($),e(d);var p=a(d,2),k=a(t(p),2);J(k,21,()=>W,M,(s,r)=>{var o=q(()=>i.themeName===l(r).name);u(s,{get theme(){return l(r)},onclick:()=>i.themeName=l(r).name,get selected(){return l(o)},children:(F,Y)=>{h();var L=w();U(()=>y(L,l(r).name)),v(F,L)},$$slots:{default:!0}})}),e(k),e(p);var P=a(p,2),T=a(t(P),2),m=t(T),z=a(t(m),2);K(z,{get value(){return i.username},set value(s){i.username=s}}),e(m);var g=a(m,2),B=a(t(g),2),D=t(B);e(B),e(g);var C=a(g,2),E=t(C);u(E,{iconURL:`${_??""}/images/icons/logout.svg`,variant:"error",onclick:()=>{f.logout()},children:(s,r)=>{h();var o=w("Logout");v(s,o)},$$slots:{default:!0}}),e(C),e(T),e(P),e(c),U(()=>{var s;O(S,"disabled",!i.spellcheck),y(D,(s=f.user)==null?void 0:s.email)}),v(A,c),j()}export{re as component};
