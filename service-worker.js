const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.w4agHnm0.js",s+"/app/immutable/nodes/0.CpMbuocr.js",s+"/app/immutable/assets/0.BHbsLKE0.css",s+"/app/immutable/nodes/1.D8AnAY6j.js",s+"/app/immutable/nodes/2.CeD9leWx.js",s+"/app/immutable/nodes/3.BdiPqmsd.js",s+"/app/immutable/assets/3.Bx9nj25e.css",s+"/app/immutable/nodes/4.jO-n-xcn.js",s+"/app/immutable/assets/4.BpwHfDRr.css",s+"/app/immutable/nodes/5.CiLOm-3v.js",s+"/app/immutable/nodes/6.CdjYX_nG.js",s+"/app/immutable/assets/6.BbB9kVr0.css",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.CMPuuelg.js",s+"/app/immutable/chunks/authUtils.Bop8eAqs.js",s+"/app/immutable/chunks/core.CG__ofcG.js",s+"/app/immutable/chunks/disclose-version.CkmYqOKb.js",s+"/app/immutable/chunks/entry.DqKXhbBX.js",s+"/app/immutable/chunks/events.mLRO6gWv.js",s+"/app/immutable/chunks/firebase.client.CFiaGCcJ.js",s+"/app/immutable/chunks/firebaseState.svelte.CNzMBGto.js",s+"/app/immutable/chunks/if.BnNuHGQ4.js",s+"/app/immutable/chunks/index-client.DdHczOKe.js",s+"/app/immutable/chunks/input.D60udIMM.js",s+"/app/immutable/chunks/pagesState.svelte.Meg3LB8x.js",s+"/app/immutable/chunks/preload-helper.BIJMH-Uh.js",s+"/app/immutable/chunks/proxy.DawioJ69.js",s+"/app/immutable/chunks/render.DaN8gkqi.js",s+"/app/immutable/chunks/runtime.DKEa1FBX.js",s+"/app/immutable/chunks/snippet.CPt55IuC.js",s+"/app/immutable/chunks/svelte-head.DG1ChYs3.js",s+"/app/immutable/chunks/userState.svelte.BdjeXdIx.js",s+"/app/immutable/entry/start.DO0hmxd_.js",s+"/app/immutable/chunks/quill.Bk4jDS0q.js"],u=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/double-checkmark.svg",s+"/manifest.json"],o="1723729840304",c=`cache-${o}`,m=[...l,...u];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(m)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(m.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
