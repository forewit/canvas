const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/app/immutable/entry/app.Djuair2J.js",s+"/app/immutable/nodes/0.MTme2DUo.js",s+"/app/immutable/assets/0.BHbsLKE0.css",s+"/app/immutable/nodes/1.C3Yz5FvP.js",s+"/app/immutable/nodes/2.DMlbnCIi.js",s+"/app/immutable/nodes/3.fe2UonE7.js",s+"/app/immutable/assets/3.CDOzaFWr.css",s+"/app/immutable/nodes/4.BFYAY6Ww.js",s+"/app/immutable/assets/4.BpwHfDRr.css",s+"/app/immutable/nodes/5.CZjDb2ys.js",s+"/app/immutable/nodes/6.DNdayP56.js",s+"/app/immutable/assets/6.BbB9kVr0.css",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.3-M6aTvF.js",s+"/app/immutable/chunks/app.svelte.DnnDf6HZ.js",s+"/app/immutable/chunks/attributes.CdCRXyt-.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/directories.svelte.xjE4BcSv.js",s+"/app/immutable/chunks/disclose-version.D8fhPq9M.js",s+"/app/immutable/chunks/entry.DzZATzI1.js",s+"/app/immutable/chunks/events.BJH2iLDa.js",s+"/app/immutable/chunks/if.f1rSyLTD.js",s+"/app/immutable/chunks/index-client.D7XHtNFG.js",s+"/app/immutable/chunks/input.DHwiiGD3.js",s+"/app/immutable/chunks/pages.svelte.C5XGaOTi.js",s+"/app/immutable/chunks/preload-helper.CV0XaMWQ.js",s+"/app/immutable/chunks/proxy.DiDwt1nQ.js",s+"/app/immutable/chunks/render.5xUcu9hh.js",s+"/app/immutable/chunks/runtime.D_LhCXyF.js",s+"/app/immutable/chunks/snippet.E31qi66Q.js",s+"/app/immutable/chunks/svelte-head.DHuTAYRK.js",s+"/app/immutable/entry/start.CqtyKyHZ.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],u=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/double-checkmark.svg",s+"/manifest.json"],o="1724957791077",c=`cache-${o}`,l=[...m,...u];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(l)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(l.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
