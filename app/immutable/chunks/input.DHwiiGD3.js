import{$ as f,h as v}from"./runtime.D_LhCXyF.js";import{a as u}from"./attributes.CdCRXyt-.js";function l(e,r,_,a=_){e.addEventListener(r,_);const n=e.__on_r;n?e.__on_r=()=>{n(),a()}:e.__on_r=a,u()}function i(e,r,_){l(e,"input",()=>{_(t(e)?o(e.value):e.value)}),f(()=>{var a=r();if(v&&e.defaultValue!==e.value){_(e.value);return}t(e)&&a===o(e.value)||e.type==="date"&&!a&&!e.value||(e.value=a??"")})}function t(e){var r=e.type;return r==="number"||r==="range"}function o(e){return e===""?null:+e}export{i as b};
