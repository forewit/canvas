var h=s=>{throw TypeError(s)};var v=(s,e,t)=>e.has(s)||h("Cannot "+t);var r=(s,e,t)=>(v(s,e,"read from private field"),t?t.call(s):e.get(s)),o=(s,e,t)=>e.has(s)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);import{F as b,G as p,s as f,u as g,n as l,A as E}from"./runtime.Y5gDxlrQ.js";import{p as a,o as S}from"./index-client.1MaynjRT.js";import{d as w,c as _,o as F,e as P,a as R}from"./firebase.client.BtQtVYjB.js";import{m as x,c as U,t as y,r as C}from"./disclose-version.CmAGsPUf.js";const L=function(){const s=B();if(!s.user)return console.warn("No user to fetch to user doc for."),()=>{};const e=w(_,"users",s.user.uid);let t={lastUpdated:Date.now()};return F(e,d=>{if(!d.exists())console.log("Creating firestore user doc..."),P(e,t,{merge:!0});else{console.log("Updating firestore user doc...");const A=d.data();s.userDocData=A}},d=>{console.error("Error while updating firestore user doc",d)})};var n,u,i;class T{constructor(){o(this,n,f(null));o(this,u,f(a({})));o(this,i,f(!0));const e=R.onAuthStateChanged(t=>{this._user=t,this.isLoading=!1});E(()=>{if(this.user){console.warn("Subscribing to user");const t=L();return()=>{console.warn("Unsubscribing from user"),t()}}}),S(()=>{console.warn("Unsubscribing from auth"),e()})}get _user(){return g(r(this,n))}set _user(e){l(r(this,n),a(e))}get userDocData(){return g(r(this,u))}set userDocData(e){l(r(this,u),a(e))}get isLoading(){return g(r(this,i))}set isLoading(e){l(r(this,i),a(e))}get user(){return this._user}}n=new WeakMap,u=new WeakMap,i=new WeakMap;const m=Symbol("FIREBASE");function j(){return b(m,new T)}function B(){return p(m)}var c;class k{constructor(){o(this,c,f(""));S(()=>{})}get authRedirect(){return g(r(this,c))}set authRedirect(e){l(r(this,c),a(e))}}c=new WeakMap;const D=Symbol("APPSTATE");function q(){return b(D,new k)}function z(){return p(D)}var I=y('<div class="progress-bar svelte-1u2nbnk"><div class="progress-bar-value svelte-1u2nbnk"></div></div>');function H(s){var e=I();x(e),C(e),U(s,e)}export{H as P,z as a,q as b,B as g,j as s};