import{d as A,a as f,t as v}from"../chunks/disclose-version.CtV2T_1y.js";import{K as L,u as C,ag as F,M as x,k as i,m as d,O as z,P as b,Q as B,R as P,l as m}from"../chunks/runtime.CAgxYfLh.js";import{g as E}from"../chunks/app.svelte.D0HLX7g1.js";import{b as w}from"../chunks/paths.DQse6YOA.js";import{g as K}from"../chunks/entry.CXFPDPSw.js";import{e as M}from"../chunks/events.BTJ_GI0K.js";import{a as h}from"../chunks/if.V5ZpdPWX.js";import{r as _}from"../chunks/attributes.BKFXZ1zH.js";import{b as y}from"../chunks/input.CkEbDjpb.js";import{g as O}from"../chunks/firebase.svelte.DJT-FR9v.js";import{P as Q}from"../chunks/ProgressBar.Bsf0Vsjx.js";var W=v('<b class="error svelte-lz3ywn">Wrong password!</b>'),j=v('<form class="form svelte-lz3ywn"><input class="email svelte-lz3ywn" type="email" placeholder="Email" required> <input class="password svelte-lz3ywn" type="password" placeholder="Password" required> <!> <input type="submit" value="Login" class="btn svelte-lz3ywn"></form>');function D(u,r){L(r,!0);const e=O();let t=d(""),a=d(""),s=d(!1);async function R(){try{m(s,!1),await e.login(i(t),i(a)),r.onSuccessfulLogin()}catch{console.log("Login failed!"),m(s,!0)}}C(()=>{e.user&&r.onSuccessfulLogin()});var g=A(),S=F(g);h(S,()=>e.user,n=>{Q(n)},n=>{var l=j(),c=z(l);_(c);var p=b(c,2);_(p);var k=b(p,2);h(k,()=>i(s),o=>{var q=W();f(o,q)}),B(2),P(l),M("submit",l,R),y(c,()=>i(t),o=>m(t,o)),y(p,()=>i(a),o=>m(a,o)),f(n,l)}),f(u,g),x()}var G=v('<div class="form-container svelte-swxtik"><!></div>');function ee(u,r){L(r,!0);const e=E();function t(){e.authRedirect===w+"/login/"&&(e.authRedirect=w+"/"),K(e.authRedirect)}var a=G(),s=z(a);D(s,{onSuccessfulLogin:t}),P(a),f(u,a),x()}export{ee as component};
