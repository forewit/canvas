import{m as d,aa as c,ab as e}from"./runtime.BFk_GPJU.js";import{a as i}from"./misc.wPaaTbcQ.js";function v(r){if(d){var s=!1,a=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var _=r.value;o(r,"value",null),r.value=_}if(r.hasAttribute("checked")){var f=r.checked;o(r,"checked",null),r.checked=f}}};r.__on_r=a,c(a),i()}}function o(r,s,a,_){a=a==null?null:a+"";var f=r.__attributes??(r.__attributes={});d&&(f[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||f[s]!==(f[s]=a)&&(s==="loading"&&(r[e]=a),a===null?r.removeAttribute(s):r.setAttribute(s,a))}export{v as r,o as s};