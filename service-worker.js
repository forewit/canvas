const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/app/immutable/entry/app.DLtPtYZU.js",s+"/app/immutable/nodes/0.D5vlDMKJ.js",s+"/app/immutable/assets/0.BHbsLKE0.css",s+"/app/immutable/nodes/1.BCGAkftA.js",s+"/app/immutable/nodes/2.BGIGnoqV.js",s+"/app/immutable/nodes/3.QqN9U_Pk.js",s+"/app/immutable/assets/3.CK1qn0Gz.css",s+"/app/immutable/nodes/4.BnSpkghI.js",s+"/app/immutable/assets/4.BpwHfDRr.css",s+"/app/immutable/nodes/5.CvJx-J2p.js",s+"/app/immutable/nodes/6.DoGyOKjM.js",s+"/app/immutable/assets/6.BbB9kVr0.css",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.DOR7MKfX.js",s+"/app/immutable/chunks/app.svelte.Cr2D7b-O.js",s+"/app/immutable/chunks/attributes.CsJI-bTs.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/disclose-version.0qGh4nLg.js",s+"/app/immutable/chunks/entry.BsAixYsS.js",s+"/app/immutable/chunks/events.DV8WUsJY.js",s+"/app/immutable/chunks/if.uZIarnEU.js",s+"/app/immutable/chunks/index-client.DTV-u9-_.js",s+"/app/immutable/chunks/index.CQLpMSHT.js",s+"/app/immutable/chunks/input.BM1djxNn.js",s+"/app/immutable/chunks/pages.svelte.JDWIzsl7.js",s+"/app/immutable/chunks/preload-helper.DXKRl2HP.js",s+"/app/immutable/chunks/proxy.BJqUqZur.js",s+"/app/immutable/chunks/render.BURUE7cP.js",s+"/app/immutable/chunks/runtime.BpWpbmr6.js",s+"/app/immutable/chunks/snippet.DVQpGy93.js",s+"/app/immutable/chunks/svelte-head.ImyiV1a0.js",s+"/app/immutable/entry/start.XfikjwIt.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],u=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/double-checkmark.svg",s+"/manifest.json"],o="1724785819785",p=`cache-${o}`,l=[...m,...u];self.addEventListener("install",e=>{async function n(){await(await caches.open(p)).addAll(l)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==p&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(p);if(l.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const c=await i.match(e.request);if(c)return c;throw a}}e.respondWith(n())});
