import{a as l,b as d}from"../chunks/disclose-version.CUhFZy4l.js";import{ai as a,B as v,a5 as m,b as $,c as h,O as x,P as _,X as w,Q as B,R as c,W as b,T as E}from"../chunks/runtime.Cnk7LXRW.js";import{s as p}from"../chunks/render.Bm-kpM2v.js";import{s as O}from"../chunks/entry.BLBqkRNH.js";function P(s,r,t){if(s==null)return r(void 0),a;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function Q(s,r,t){const e=t[r]??(t[r]={store:null,source:m(void 0),unsubscribe:a});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=a;else{var n=!0;e.unsubscribe=P(s,u=>{n?e.source.v=u:h(e.source,u)}),n=!1}return $(e.source)}function R(){const s={};return v(()=>{for(var r in s)s[r].unsubscribe()}),s}const S=()=>{const s=O;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},T={subscribe(s){return S().page.subscribe(s)}};var W=d("<h1> </h1> <p> </p>",1);function z(s,r){x(r,!0);const t=R(),e=()=>Q(T,"$page",t);var n=W(),u=_(n),f=c(u);b(u);var i=E(u,2),g=c(i);b(i),w(()=>{var o;p(f,e().status),p(g,(o=e().error)==null?void 0:o.message)}),l(s,n),B()}export{z as component};
