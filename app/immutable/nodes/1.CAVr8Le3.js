import{o as l,z as c,x as b,d as v,t as m,y as p}from"../chunks/disclose-version.Y_F0_rko.js";import{O as o,t as $,F as h,g as x,s as _,C as w,K as y,D as z}from"../chunks/runtime.atawwWdS.js";import{s as f}from"../chunks/render.CpWSVxfm.js";import{s as C}from"../chunks/entry.B52UK3IH.js";function D(s,r,t){if(s==null)return r(void 0),o;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function E(s,r,t){const e=t[r]??(t[r]={store:null,source:h(void 0),unsubscribe:o});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=o;else{var n=!0;e.unsubscribe=D(s,u=>{n?e.source.v=u:_(e.source,u)}),n=!1}return x(e.source)}function F(){const s={};return $(()=>{for(var r in s)s[r].unsubscribe()}),s}const K=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},O={subscribe(s){return K().page.subscribe(s)}};var S=m("<h1> </h1> <p> </p>",1);function G(s,r){w(r,!0);const t=F(),e=()=>E(O,"$page",t);var n=S(),u=l(n),g=c(u);p(u);var a=b(b(u,!0)),d=c(a);p(a),y(()=>{var i;f(g,e().status),f(d,(i=e().error)==null?void 0:i.message)}),v(s,n),z()}export{G as component};