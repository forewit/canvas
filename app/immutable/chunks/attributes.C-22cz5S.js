import{h as d,ak as t,al as i}from"./runtime.DmHE6BeA.js";let _=!1;function c(){_||(_=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var e;if(!r.defaultPrevented)for(const s of r.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function l(r){if(d){var e=!1,s=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var a=r.value;o(r,"value",null),r.value=a}if(r.hasAttribute("checked")){var f=r.checked;o(r,"checked",null),r.checked=f}}};r.__on_r=s,t(s),c()}}function o(r,e,s,a){s=s==null?null:s+"";var f=r.__attributes??(r.__attributes={});d&&(f[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||f[e]!==(f[e]=s)&&(e==="loading"&&(r[i]=s),s===null?r.removeAttribute(e):r.setAttribute(e,s))}export{c as a,l as r,o as s};