import{p as d}from"./proxy.CCWlokwR.js";import{s as F,g as j,a as u,b as t,c as a,u as k,d as h,e as P}from"./runtime.BmmPnVCB.js";import{g as R}from"./firebase.svelte.DTXirxET.js";import{g as v}from"./pages.svelte.CUlYedrB.js";function I(){let l=u(0),c=u(!0),g=d({name:"Home",type:"folder",children:[]}),o=u(d({root:g})),m=h(()=>{let e=Object.keys(t(o)).filter(n=>n!=="root"),r=["root"];for(;r.length>0;){let n=r.pop();if(!n||t(o)[n].type!=="folder")continue;let i=t(o)[n];for(let s of i.children)e=e.filter(O=>O!==s),r.push(s)}return e});const b=v();let w=h(()=>{let e=Object.keys(b),r=["root"];for(;r.length>0;){let n=r.pop();if(!n)continue;let i=t(o)[n];if(i.type==="folder")for(let s of i.children)r.push(s);else i.type==="page"&&(e=e.filter(s=>s!==i.pageID))}return e});const p=R();function D(e){let r={lastUpdated:Date.now(),tree:{root:{name:"Home",type:"folder",children:[]}}};const n=Object.hasOwn(e,"lastUpdated")&&typeof e.lastUpdated=="number"&&Object.hasOwn(e,"tree")&&typeof e.tree=="object";return n&&(r.lastUpdated=e.lastUpdated,r.tree=e.tree),{wasValid:n,sanitizedDirectory:r}}function f(){p.publishDoc(["directories","root"],{lastUpdated:t(l),tree:t(o)})}function U(e,r="New Folder"){if(!t(o)[e]||t(o)[e].type!=="folder")return;const n=crypto.randomUUID().slice(0,8);t(o)[n]={name:r,type:"folder",children:[]},t(o)[e].children.push(n)}function C(e,r){!t(o)[e]||t(o)[e].type!=="folder"||(t(o)[r]={type:"page",pageID:r},t(o)[e].children.push(r))}function x(e,r){!t(o)[e]||t(o)[e].type!=="folder"||(t(o)[e].children=t(o)[e].children.filter(n=>n!==r),delete t(o)[r])}return p.subscribeToCollection(["directories"],(e,r)=>{if(e!=="root"){console.warn("Only root directory is currently supported");return}if(r===null){console.warn("Root directory does not exist! publishing new root"),f();return}let{wasValid:n,sanitizedDirectory:i}=D(r);if(!n){console.warn("Ignoring invalid root directory",r);return}i.lastUpdated<t(l)?f():i.lastUpdated>t(l)?(console.log("root directory updated"),a(c,!0),a(l,d(i.lastUpdated)),a(o,d(i.tree))):i.lastUpdated===t(l)&&console.log("directory synced with firebase",e)}),k(()=>{JSON.stringify(t(o)),P(()=>{if(t(c)){a(c,!1);return}a(l,d(Date.now())),f()})}),{get tree(){return t(o)},get addSubfolder(){return U},get addPageID(){return C},get removeChild(){return x},get orphanedFolders(){return t(m)},get orphanedPages(){return t(w)}}}const y=Symbol("directories"),H=()=>{const l=I();return F(y,l)},T=()=>j(y);export{T as g,H as s};
