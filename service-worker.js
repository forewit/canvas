const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/app/immutable/entry/app.1PJSM7qT.js",s+"/app/immutable/nodes/0.CUb9Hkh7.js",s+"/app/immutable/assets/0.BHbsLKE0.css",s+"/app/immutable/nodes/1.B52ladeR.js",s+"/app/immutable/nodes/2.C-lHoNus.js",s+"/app/immutable/nodes/3.DW359jWi.js",s+"/app/immutable/assets/3.CK1qn0Gz.css",s+"/app/immutable/nodes/4.DHJKyOha.js",s+"/app/immutable/assets/4.BpwHfDRr.css",s+"/app/immutable/nodes/5.B63HiZP0.js",s+"/app/immutable/nodes/6.sTvN9f0X.js",s+"/app/immutable/assets/6.BbB9kVr0.css",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.CIyjmtlw.js",s+"/app/immutable/chunks/app.svelte.BGOzEepb.js",s+"/app/immutable/chunks/attributes.COUECyro.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/disclose-version.3pxfTOD3.js",s+"/app/immutable/chunks/entry.C9kI70Q6.js",s+"/app/immutable/chunks/events.BuOQ88t5.js",s+"/app/immutable/chunks/if.DlgO0pup.js",s+"/app/immutable/chunks/index-client.BwrCyRQJ.js",s+"/app/immutable/chunks/index.ee7Iubjw.js",s+"/app/immutable/chunks/input.6evpc8xV.js",s+"/app/immutable/chunks/pages.svelte.Dr4VL9_W.js",s+"/app/immutable/chunks/preload-helper.ZkSlsT8k.js",s+"/app/immutable/chunks/proxy.DVTm-heb.js",s+"/app/immutable/chunks/render.CwwCmRx8.js",s+"/app/immutable/chunks/runtime.CmlS14Bi.js",s+"/app/immutable/chunks/snippet.DNr697Bi.js",s+"/app/immutable/chunks/svelte-head.DYaIT3QS.js",s+"/app/immutable/entry/start.CA32lzrc.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],u=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/double-checkmark.svg",s+"/manifest.json"],o="1724767401417",p=`cache-${o}`,l=[...m,...u];self.addEventListener("install",e=>{async function n(){await(await caches.open(p)).addAll(l)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==p&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(p);if(l.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const c=await i.match(e.request);if(c)return c;throw a}}e.respondWith(n())});
