import{B as E,C as k,u as m,q as w,j as S}from"./runtime.DQzYxgOy.js";function d(t,r){var c;var n=t&&((c=t[S])==null?void 0:c.t);return t===r||n===r}function P(t={},r,n,c){return E(()=>{var a,e;return k(()=>{a=e,e=[],m(()=>{t!==n(...e)&&(r(t,...e),a&&d(n(...a),t)&&r(null,...a))})}),()=>{w(()=>{e&&d(n(...e),t)&&r(null,...e)})}}),t}const g="modulepreload",b=function(t,r){return new URL(t,r).href},v={},R=function(r,n,c){let a=Promise.resolve();if(n&&n.length>0){const e=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),h=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.all(n.map(i=>{if(i=b(i,c),i in v)return;v[i]=!0;const l=i.endsWith(".css"),y=l?'[rel="stylesheet"]':"";if(!!c)for(let f=e.length-1;f>=0;f--){const u=e[f];if(u.href===i&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${y}`))return;const o=document.createElement("link");if(o.rel=l?"stylesheet":g,l||(o.as="script",o.crossOrigin=""),o.href=i,h&&o.setAttribute("nonce",h),document.head.appendChild(o),l)return new Promise((f,u)=>{o.addEventListener("load",f),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}return a.then(()=>r()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})};export{R as _,P as b};