import{q as d,n as c,u as b,f as v,t as m,o as p}from"../chunks/disclose-version.D25B7Gj1.js";import{G as o,t as $,I as h,g as x,c as _,y as q,J as w,z as y}from"../chunks/runtime.DQzYxgOy.js";import{s as f}from"../chunks/render.DY8h8vBE.js";import{s as z}from"../chunks/entry.CicxHbBM.js";function E(s,r,t){if(s==null)return r(void 0),o;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function G(s,r,t){const e=t[r]??(t[r]={store:null,source:h(void 0),unsubscribe:o});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=o;else{var n=!0;e.unsubscribe=E(s,u=>{n?e.source.v=u:_(e.source,u)}),n=!1}return x(e.source)}function I(){const s={};return $(()=>{for(var r in s)s[r].unsubscribe()}),s}const J=()=>{const s=z;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},S={subscribe(s){return J().page.subscribe(s)}};var j=m("<h1> </h1> <p> </p>",1);function F(s,r){q(r,!0);const t=I(),e=()=>G(S,"$page",t);var n=j(),u=d(n),g=c(u);p(u);var a=b(b(u,!0)),l=c(a);p(a),w(()=>{var i;f(g,e().status),f(l,(i=e().error)==null?void 0:i.message)}),v(s,n),y()}export{F as component};