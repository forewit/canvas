const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/quill.Bk4jDS0q.js","../chunks/core.CG__ofcG.js"])))=>i.map(i=>d[i]);
import{n as g,f as y,t as _,o as p,u as m}from"../chunks/disclose-version.D25B7Gj1.js";import{y as k,D as v,z as x,c as b,g as d,s as w}from"../chunks/runtime.DQzYxgOy.js";import{d as A}from"../chunks/events.DMcSJaRG.js";import{r as C}from"../chunks/attributes.BIGlJQtS.js";import{b as R}from"../chunks/input.WhFY7VDn.js";import{p as h}from"../chunks/proxy.BSfg9Vi9.js";import{u as S,p as T}from"../chunks/pagesState.svelte.l_q5DSsV.js";import{_ as D,b as L}from"../chunks/preload-helper.BSMzPJI5.js";import{o as M,a as Q}from"../chunks/index-client.y0jMOApN.js";const B=async function(t,e){var s,a,r,f;const{Delta:o,Range:i}=await D(async()=>{const{Delta:l,Range:u}=await import("../chunks/core.CG__ofcG.js").then(c=>c.G);return{Delta:l,Range:u}},[],import.meta.url);for(var n=0;n<e.undo.length;n++){const l=(s=e.undo[n].range)==null?void 0:s.index,u=(a=e.undo[n].range)==null?void 0:a.length,c={delta:new o(e.undo[n].delta.ops),range:l!==void 0&&u!==void 0?new i(l,u):null};t.history.stack.undo.push(c)}for(var n=0;n<e.redo.length;n++){const u=(r=e.redo[n].range)==null?void 0:r.index,c=(f=e.redo[n].range)==null?void 0:f.length,E={delta:new o(e.redo[n].delta.ops),range:u!==void 0&&c!==void 0?new i(u,c):null};t.history.stack.redo.push(E)}},I=function(t){return structuredClone(t.history.stack)},K=async function(t,e){t.setContents(e.ops,"api"),await B(t,e.history)},P=function(t){const e=t.getContents().ops,o=I(t);return{ops:e,history:o}},z=function(t){t.formatText(0,t.getLength(),"link",!1,"api");const e=t.getText(),o=/https?:\/\/\S+/gi,i=e.matchAll(o);for(const a of i)t.formatText(a.index,a[0].length,"link",a[0],"api");const n=/.+\@.+\..+/gi,s=e.matchAll(n);for(const a of s)t.formatText(a.index,a[0].length,"link","mailto:"+a[0],"api")},F=function(t){t.keyboard.addBinding({key:"/",altKey:!0},H),t.keyboard.addBinding({key:"-",altKey:!0},O)},H=function(t){t.format("code",!t.getFormat().code)},O=function(t){t.format("strike",!t.getFormat().strike)};var V=_('<div class="quill-editor-container svelte-7w4qtk"><div class="quill-editor"></div></div>');function G(t,e){k(e,!0);let o=w(void 0),i;function n(r,f,l){l==="user"&&d(o)&&(z(d(o)),P(d(o)))}v(()=>{d(o)&&e.data&&K(d(o),e.data)}),v(()=>{d(o)&&d(o).root.setAttribute("spellcheck",S.get().spellcheck.toString())}),M(async()=>{const{default:r}=await D(async()=>{const{default:f}=await import("../chunks/quill.Bk4jDS0q.js");return{default:f}},__vite__mapDeps([0,1]),import.meta.url);b(o,h(new r(i,{formats:["size","align","indent","list","bold","italic","underline","strike","code","link"],placeholder:"Enter text here"}))),F(d(o)),d(o).on("text-change",n)}),Q(()=>{var r;(r=d(o))==null||r.off("text-change",n)});var s=V(),a=g(s);L(a,r=>i=r,()=>i),p(s),y(t,s),x()}var j=()=>history.back(),J=_('<div class="page-container svelte-skeare"><header class="svelte-skeare"><button class="back-button svelte-skeare">Back</button> <input></header> <section><!></section></div>');function et(t,e){k(e,!0);const o=e.data.id,i=T.get()[o];let n=w(h({ops:[],history:{undo:[],redo:[]}}));var s=J(),a=g(s),r=g(a);r.__click=[j];var f=m(m(r,!0));C(f),p(a);var l=m(m(a,!0)),u=g(l);G(u,{get data(){return d(n)},set data(c){b(n,h(c))}}),p(l),p(s),R(f,()=>i.title,c=>i.title=c),y(t,s),x()}A(["click"]);export{et as component};