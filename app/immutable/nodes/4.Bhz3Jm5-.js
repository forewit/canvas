import{c as A,a as c,b as v}from"../chunks/disclose-version.6vPDxpwZ.js";import{V as L,N as C,a0 as F,W as x,a as i,c as d,X as z,Y as b,_ as W,Z as S,b as m}from"../chunks/runtime.DmHE6BeA.js";import{g as B}from"../chunks/app.svelte.DsTYy1J2.js";import{b as w}from"../chunks/paths.D6MHkWk4.js";import{g as E}from"../chunks/entry.DpKMW6rJ.js";import{e as N}from"../chunks/events.DiWhd9B4.js";import{i as _}from"../chunks/if.iF3oE4Wo.js";import{r as h}from"../chunks/attributes.C-22cz5S.js";import{b as y}from"../chunks/input.CoTtX601.js";import{g as V}from"../chunks/themes.svelte.e9knPHAw.js";import{P as X}from"../chunks/ProgressBar.DA00XEqA.js";var Y=v('<b class="error svelte-lz3ywn">Wrong password!</b>'),Z=v('<form class="form svelte-lz3ywn"><input class="email svelte-lz3ywn" type="email" placeholder="Email" required> <input class="password svelte-lz3ywn" type="password" placeholder="Password" required> <!> <input type="submit" value="Login" class="btn svelte-lz3ywn"></form>');function j(f,r){L(r,!0);const e=V();let t=d(""),a=d(""),s=d(!1);async function P(){try{m(s,!1),await e.login(i(t),i(a)),r.onSuccessfulLogin()}catch{console.log("Login failed!"),m(s,!0)}}C(()=>{e.user&&r.onSuccessfulLogin()});var g=A(),R=F(g);_(R,()=>e.user,n=>{X(n)},n=>{var l=Z(),p=z(l);h(p);var u=b(p,2);h(u);var k=b(u,2);_(k,()=>i(s),o=>{var q=Y();c(o,q)}),W(2),S(l),N("submit",l,P),y(p,()=>i(t),o=>m(t,o)),y(u,()=>i(a),o=>m(a,o)),c(n,l)}),c(f,g),x()}var D=v('<div class="form-container svelte-swxtik"><!></div>');function ee(f,r){L(r,!0);const e=B();function t(){e.authRedirect===w+"/login/"&&(e.authRedirect=w+"/"),E(e.authRedirect)}var a=D(),s=z(a);j(s,{onSuccessfulLogin:t}),S(a),c(f,a),x()}export{ee as component};