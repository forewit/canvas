import{p as a}from"./if.DxqyGXBG.js";import{i as j,j as k,m as c,k as e,l as f,u as v,n as h,o as S}from"./runtime.De9YyAkO.js";import{g as R}from"./firebase.svelte.DK2MtVdp.js";import{g as z}from"./pages.svelte.BplmUK_0.js";function E(){let d=c(0),p=c(!0),D=a({name:"Home",color:"red"}),n=c(a({root:D})),u=c(a(["root"])),o=h(()=>e(n)[e(u)[e(u).length-1]]),w=h(()=>{let t=Object.keys(e(n)).filter(s=>s!=="root"),r=["root"];for(;r.length>0;){let s=r.pop();if(!s)continue;let l=e(n)[s];if(l.subfolders)for(let i of l.subfolders)t=t.filter(b=>b!==i),r.push(i)}return t});const U=z();let P=h(()=>{let t=Object.keys(U),r=["root"];for(;r.length>0;){let s=r.pop();if(!s)continue;let l=e(n)[s];if(l.subfolders)for(let i of l.subfolders)r.push(i);if(l.pages)for(let i of l.pages)t=t.filter(b=>b!==i)}return t});const y=R();function x(t){let r={lastUpdated:Date.now(),folders:{root:{name:"Home",color:"red"}}};const s=Object.hasOwn(t,"lastUpdated")&&typeof t.lastUpdated=="number"&&Object.hasOwn(t,"folders")&&typeof t.folders=="object";return s&&(r.lastUpdated=t.lastUpdated,r.folders=t.folders),{wasValid:s,sanitizedDirectory:r}}function g(){y.publishDoc(["directories","root"],{lastUpdated:e(d),folders:e(n)})}function O(t="New Folder",r="red"){const s=crypto.randomUUID().slice(0,8);e(o).subfolders||(e(o).subfolders=[]),e(n)[s]={name:t,color:r},e(o).subfolders.push(s)}function C(t){e(o).subfolders&&(e(o).subfolders=e(o).subfolders.filter(r=>r!==t),delete e(n)[t],e(o).subfolders.length===0&&delete e(o).subfolders)}function F(t){e(o).pages||(e(o).pages=[]),e(o).pages.push(t)}function I(t){e(o).pages&&(e(o).pages=e(o).pages.filter(r=>r!==t),e(o).pages.length===0&&delete e(o).pages)}return y.subscribeToCollection(["directories"],(t,r)=>{if(t!=="root"){console.warn("Only root directory is currently supported");return}if(r===null){console.warn("Root directory does not exist! publishing new root"),g();return}let{wasValid:s,sanitizedDirectory:l}=x(r);if(!s){console.warn("Ignoring invalid root directory",r);return}l.lastUpdated<e(d)?g():l.lastUpdated>e(d)?(console.log("root directory updated"),f(p,!0),f(d,a(l.lastUpdated)),f(n,a(l.folders))):l.lastUpdated===e(d)&&console.log("directory synced with firebase",t)}),v(()=>{JSON.stringify(e(n)),S(()=>{if(e(p)){f(p,!1);return}f(d,a(Date.now())),g()})}),{get folders(){return e(n)},get currentPath(){return e(u)},set currentPath(t){f(u,a(t))},get currentFolder(){return e(o)},get addSubfolder(){return O},get removeSubfolder(){return C},get addPageID(){return F},get removePageID(){return I},get orphanedFolders(){return e(w)},get orphanedPages(){return e(P)}}}const m=Symbol("directories"),Y=()=>{const d=E();return j(m,d)},_=()=>k(m);export{_ as g,Y as s};
