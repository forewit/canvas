const s=location.pathname.split("/").slice(0,-1).join("/"),o=[s+"/app/immutable/entry/app.Cp-xRxj3.js",s+"/app/immutable/nodes/0.DkacSKPw.js",s+"/app/immutable/assets/0.DTl7djwE.css",s+"/app/immutable/nodes/1.Dq_rw8it.js",s+"/app/immutable/nodes/2.Dqi2-4HR.js",s+"/app/immutable/assets/2.DmAVHwpy.css",s+"/app/immutable/nodes/3.CXRIRhlv.js",s+"/app/immutable/assets/3.BpwHfDRr.css",s+"/app/immutable/nodes/4.CrC4RcYB.js",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.COL9vUkR.js",s+"/app/immutable/chunks/authUtils.Ds6js9lb.js",s+"/app/immutable/chunks/disclose-version.CmAGsPUf.js",s+"/app/immutable/chunks/entry.i0eeY4ru.js",s+"/app/immutable/chunks/events.0Pp6qAY_.js",s+"/app/immutable/chunks/firebase.client.BtQtVYjB.js",s+"/app/immutable/chunks/index-client.1MaynjRT.js",s+"/app/immutable/chunks/render.BXQ6chYU.js",s+"/app/immutable/chunks/runtime.Y5gDxlrQ.js",s+"/app/immutable/chunks/svelte-head.BqFmhxlh.js",s+"/app/immutable/entry/start.DnzNfQuF.js"],m=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon_512.png",s+"/manifest.json"],r="1723235277082",c=`cache-${r}`,p=[...o,...m];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(p)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(p.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const l=await i.match(e.request);if(l)return l;throw a}}e.respondWith(n())});