import{r as v,m as c}from"./runtime.BFk_GPJU.js";import{a as s}from"./misc.wPaaTbcQ.js";function l(e,a,n,r=n){e.addEventListener(a,n);const _=e.__on_r;_?e.__on_r=()=>{_(),r()}:e.__on_r=r,s()}function u(e,a,n){l(e,"input",()=>{n(f(e)?o(e.value):e.value)}),v(()=>{var r=a();if(c&&e.defaultValue!==e.value){n(e.value);return}f(e)&&r===o(e.value)||e.type==="date"&&!r&&!e.value||(e.value=r??"")})}function i(e,a,n){l(e,"change",()=>{var r=e.checked;n(r)}),a()==null&&n(!1),v(()=>{var r=a();e.checked=!!r})}function f(e){var a=e.type;return a==="number"||a==="range"}function o(e){return e===""?null:+e}export{i as a,u as b,l};
