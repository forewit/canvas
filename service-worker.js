const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/app/immutable/entry/app.DEyYjaI0.js",s+"/app/immutable/nodes/0.DUz7HGS6.js",s+"/app/immutable/assets/0.BHbsLKE0.css",s+"/app/immutable/nodes/1.CBTLUGlg.js",s+"/app/immutable/nodes/2.6JVeepFx.js",s+"/app/immutable/nodes/3.DVUPcJfH.js",s+"/app/immutable/assets/3.BtGCAwVi.css",s+"/app/immutable/nodes/4.DoMyF0AN.js",s+"/app/immutable/assets/4.BpwHfDRr.css",s+"/app/immutable/nodes/5.0n1wwk2T.js",s+"/app/immutable/nodes/6.DVjSWHk_.js",s+"/app/immutable/assets/6.BbB9kVr0.css",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.DLXwqb9-.js",s+"/app/immutable/chunks/attributes.Cp1N4Eub.js",s+"/app/immutable/chunks/authUtils.Bop8eAqs.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/disclose-version.O2WF0nc7.js",s+"/app/immutable/chunks/entry.DO3heoAu.js",s+"/app/immutable/chunks/events.Cy9EMw4Q.js",s+"/app/immutable/chunks/firebase.client.CFiaGCcJ.js",s+"/app/immutable/chunks/firebaseState.svelte.DWNtUMFY.js",s+"/app/immutable/chunks/if.BHyIsDAw.js",s+"/app/immutable/chunks/index-client.DQ6Q9UrK.js",s+"/app/immutable/chunks/input.CW4h5qfD.js",s+"/app/immutable/chunks/pagesState.svelte.B-8ndYN9.js",s+"/app/immutable/chunks/preload-helper.BZn4qxDt.js",s+"/app/immutable/chunks/proxy.DQSHHu_B.js",s+"/app/immutable/chunks/render.ralCcPow.js",s+"/app/immutable/chunks/runtime.Dbv-XAo5.js",s+"/app/immutable/chunks/snippet.BrPQSgKN.js",s+"/app/immutable/chunks/svelte-head.DoRAQpoO.js",s+"/app/immutable/entry/start.gDhQEUE5.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],u=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/double-checkmark.svg",s+"/manifest.json"],o="1723736360366",p=`cache-${o}`,l=[...m,...u];self.addEventListener("install",e=>{async function n(){await(await caches.open(p)).addAll(l)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==p&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(p);if(l.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const c=await i.match(e.request);if(c)return c;throw a}}e.respondWith(n())});
