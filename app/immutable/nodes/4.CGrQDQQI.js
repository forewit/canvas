import{a as w,t as k}from"../chunks/disclose-version.CmgWPxu-.js";import{a1 as B,a as v,a3 as A,a4 as D,c as _,a6 as j,b as f,a5 as h,a7 as R}from"../chunks/runtime.BFk_GPJU.js";import{s as F}from"../chunks/render.CxqHgZBy.js";import{e as z,i as C}from"../chunks/each.D9nUeR89.js";import{s as y}from"../chunks/attributes.Se4rkWCq.js";import{d as H}from"../chunks/events.CW_gDdDe.js";import{p as m}from"../chunks/proxy.WDhza9t3.js";import{p as J}from"../chunks/props.BVLa8d07.js";import{o as K}from"../chunks/index-client.CWUJWqUT.js";var P=(d,u,n)=>u(f(n)),Q=(d,u,n)=>u(f(n)),U=(d,u,n)=>u(f(n)),V=(d,u,n)=>u(f(n),!0),X=(d,u,n)=>u(f(n),!0),Y=k('<div class="grid-item svelte-1lw8v4h"><textarea name="" id=""></textarea> <button class="delete svelte-1lw8v4h"> </button> <button class="top zone svelte-1lw8v4h"></button> <button class="bottom zone svelte-1lw8v4h"></button> <button class="left zone svelte-1lw8v4h"></button> <button class="right zone svelte-1lw8v4h"></button></div>'),Z=k('<button class="row-zone svelte-1lw8v4h"></button>'),tt=k('<button class="col-zone svelte-1lw8v4h"></button>'),et=k('<div class="grid svelte-1lw8v4h"><!> <!> <!></div>');function lt(d,u){B(u,!0);let n=J(u,"gridTemplate",15),O=v(0),M=v(0),T=v(m([])),G=v(""),p=v(m([]));function x(){let l=n().map(e=>e.map(s=>`a${s}`));l.forEach(e=>e.unshift("c0"));let c=1;for(let e=0;e<l.length;(e+=1)-1){let s=l[e];for(let a=1;a<s.length-1;(a+=1)-1)s[a]!==s[a+1]?e>0&&l[e-1][a+1].startsWith("c")?s.splice(a+1,0,l[e-1][a+1]):(s.splice(a+1,0,"c"+c),c+=1):s.splice(a+1,0,s[a]),a+=1}l.forEach(e=>e.push("c"+c));const r=l[0].length;l.unshift(Array(r).fill("r0"));let o=1;for(let e=1;e<l.length-1;(e+=1)-1){let s=[],a=l[e],t=l[e+1];for(let i=0;i<a.length;(i+=1)-1)a[i]===t[i]?s.push(a[i]):i>0&&s[i-1].startsWith("r")?s[i]=s[i-1]:(s.push("r"+o),o+=1);l.splice(e+1,0,s),e+=1}l.push(Array(r).fill("r"+o)),_(O,o+1),_(M,c+1),_(T,m(n().flat().filter((e,s,a)=>a.indexOf(e)===s))),_(p,m(l)),_(G,m(l.map(e=>`"${e.join(" ")}"`).join(`
`)))}function $(){return n().flat().reduce((l,c)=>Math.max(l,c),0)+1}function E(l){}function g(l,c=!1){const r=n().findIndex(t=>t.includes(l)),o=n()[r].indexOf(l);let e=n()[r].lastIndexOf(l)+1-o,s=n().findLastIndex(t=>t.includes(l))+1-r;const a=$();if(c){if(e%2===1){const t=o+(e-1)/2;console.log({splitIndex:t});for(let i=0;i<n().length;(i+=1)-1){const I=n()[i][t];n()[i].splice(t,0,I)}e+=1}for(let t=o+e/2;t<e+o;(t+=1)-1)for(let i=r;i<r+s;(i+=1)-1)n(n()[i][t]=a,!0)}else{if(s%2===1){const t=r+(s-1)/2;console.log({splitIndex:t});const i=n()[t].map(I=>I);n().splice(t,0,i),s+=1}for(let t=r+s/2;t<s+r;(t+=1)-1)for(let i=o;i<o+e;(i+=1)-1)n(n()[t][i]=a,!0)}x()}function W(l){console.log("insert row zone",l);const c=f(p).findIndex(t=>t.includes(`r${l}`)),o=(f(p)[c].indexOf(`r${l}`)-1)/2,e=c/2,s=Math.min((f(p)[c].lastIndexOf(`r${l}`)+1)/2-o,n()[0].length);let a=Array(s).fill($());if(e===0)n().unshift(a);else{let t=n()[e-1];for(let i=0;i<t.length;(i+=1)-1)(i<o||i>=o+s)&&a.splice(i,0,t[i]);n().splice(e,0,a)}x()}function S(l){const c=f(p).findIndex(t=>t.includes(`c${l}`)),r=f(p).findLastIndex(t=>t.includes(`c${l}`)),o=f(p)[c].indexOf(`c${l}`)/2,e=Math.max((c-1)/2,0),s=Math.min((r-c)/2+1,n().length),a=$();for(let t=0;t<n().length;(t+=1)-1)t<e||t>=e+s?n()[t].splice(o,0,n()[t][o]):n()[t].splice(o,0,a);x()}K(()=>{x()});var b=et(),L=j(b);z(L,17,()=>f(T),C,(l,c)=>{var r=Y(),o=h(j(r),2);o.__click=[P,E,c];var e=j(o);R(o);var s=h(o,2);s.__click=[Q,g,c];var a=h(s,2);a.__click=[U,g,c];var t=h(a,2);t.__click=[V,g,c];var i=h(t,2);i.__click=[X,g,c],R(r),A(()=>{y(r,"style",`grid-area: a${f(c)??""};`),F(e,f(c))}),w(l,r)});var N=h(L,2);z(N,17,()=>Array(f(O)),C,(l,c,r)=>{var o=Z();y(o,"style",`grid-area: r${r??""}`),o.__click=()=>W(r),o.textContent=`r${r??""}`,w(l,o)});var q=h(N,2);z(q,17,()=>Array(f(M)),C,(l,c,r)=>{var o=tt();y(o,"style",`grid-area: c${r??""}`),o.__click=()=>S(r),o.textContent=`c${r??""}`,w(l,o)}),R(b),A(()=>y(b,"style",`grid-template-areas: ${f(G)??""}; 
    grid-template-columns: repeat(${n()[0].length??""}, min-content auto) min-content;`)),w(d,b),D()}H(["click"]);function dt(d){lt(d,{gridTemplate:[[1,2],[4,2]]})}export{dt as component};