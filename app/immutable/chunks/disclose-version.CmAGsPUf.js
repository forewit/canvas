import{f as _}from"./runtime.Y5gDxlrQ.js";function p(e){console.warn("hydration_mismatch")}const w=1,g=2,O=4,b=8,h=1,T=2,S="[",I="[!",y="]",E={},x=Symbol();let a=!1;function C(e){a=e}let r;function d(e){return r=e}function R(){if(r===null)throw p(),E;return r=r.nextSibling}function D(e){a&&(r=e)}function L(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===y){if(e===0)return n;e-=1}else(t===S||t===I)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var c;function M(){if(c===void 0){c=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function f(){return document.createTextNode("")}function U(e){if(!a)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(f())),d(n),n}function H(e,n){if(!a){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function Y(e,n=!1){if(!a)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var i=f();return t==null||t.before(i),d(i),i}return d(t),t}function k(e){e.textContent=""}function N(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function o(e,n){var t;(t=_).nodes??(t.nodes={start:e,end:n})}function B(e,n){var t=(n&h)!==0,s=(n&T)!==0,i,l=!e.startsWith("<!>");return()=>{if(a)return o(r,null),r;i||(i=N(l?e:"<!>"+e),t||(i=i.firstChild));var u=s?document.importNode(i,!0):i.cloneNode(!0);if(t){var m=u.firstChild,v=u.lastChild;o(m,v)}else o(u,u);return u}}function F(){if(!a){var e=f();return o(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=f()),d(n)),o(n,n),n}function Z(){if(a)return o(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=f();return e.append(n,t),o(n,t),e}function j(e,n){if(a){_.nodes.end=r,R();return}e!==null&&e.before(n)}const A="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(A);export{S as H,O as P,x as U,d as a,r as b,j as c,E as d,f as e,R as f,y as g,a as h,p as i,M as j,k,o as l,U as m,Y as n,I as o,L as p,H as q,D as r,C as s,B as t,Z as u,w as v,g as w,b as x,F as y};