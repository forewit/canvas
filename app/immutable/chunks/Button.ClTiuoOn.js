import{a as n,t as v,c as h}from"./disclose-version.CBUhcYe9.js";import{p as _,v as g,l as p,m as k,o as y,n as B,D as I}from"./runtime.4vCN5gQe.js";import{d as L}from"./events.CYiFnV6R.js";import{i as s}from"./if.D3RmbbZj.js";import{I as R,s as U}from"./Icon.B1jUH2ZD.js";import{t as r}from"./class.CxUNBNxR.js";import{b as x}from"./this.D9eYfFuq.js";import{p as m,o as z}from"./index-client.CJwHoa7I.js";import{b as D}from"./app.svelte.C_YXpmtr.js";var M=v('<button class="svelte-1ykp8nt"><!> <!></button>');function H(c,e){_(e,!0);let d=m(e,"selected",3,!1),f=m(e,"disabled",3,!1),i;z(()=>{e.theme&&D(i,e.theme)});var t=M();x(t,a=>i=a,()=>i),t.__click=function(...a){var o;(o=e.onclick)==null||o.apply(this,a)};var l=k(t);s(l,()=>e.iconURL,a=>{R(a,{get url(){return e.iconURL},size:"1.2em",color:"var(--icon-color)"})});var b=y(l,2);s(b,()=>e.children,a=>{var o=h(),u=I(o);U(u,()=>e.children),n(a,o)}),B(t),g(()=>{t.disabled=f(),r(t,"error",e.variant==="error"),r(t,"alt",e.variant==="alt"),r(t,"selected",d())}),n(c,t),p()}L(["click"]);export{H as B};