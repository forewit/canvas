import{s as o,g as r,c as a,e as c}from"./runtime.DQzYxgOy.js";import{p as s}from"./proxy.BSfg9Vi9.js";import{u as h}from"./pagesState.svelte.l_q5DSsV.js";const d=function(){let p=o("/"),e=o(s(Object.assign({},h.get().root))),i=c(()=>{let t=[];for(;r(e).parent;)t.push(r(e)),a(e,s(r(e).parent));return t.push(r(e)),t.reverse()});return new Proxy({get authRedirect(){return r(p)},set authRedirect(t){a(p,s(t))},get path(){return r(e)},set path(t){a(e,s(t))},get directory(){return r(i)}},{set(t,u,n){return(u="path")?(Object.assign(t,n),!0):(t[u]=n,!0)}})},l=d();export{l as a};