const s=location.pathname.split("/").slice(0,-1).join("/"),o=[s+"/app/immutable/entry/app.B5SBMMQy.js",s+"/app/immutable/nodes/0.Cze_mPm2.js",s+"/app/immutable/assets/0.DTl7djwE.css",s+"/app/immutable/nodes/1.B_2LrsCV.js",s+"/app/immutable/nodes/2.ekuhi9Ea.js",s+"/app/immutable/assets/2.Cp12jeBW.css",s+"/app/immutable/nodes/3.CpQhEcqx.js",s+"/app/immutable/assets/3.BpwHfDRr.css",s+"/app/immutable/nodes/4.s1CeMlFw.js",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.k83v1ne2.js",s+"/app/immutable/chunks/authUtils.CGjUVwWr.js",s+"/app/immutable/chunks/disclose-version.BH-PvlUQ.js",s+"/app/immutable/chunks/entry.DAf8ya87.js",s+"/app/immutable/chunks/events.BqAoXrdc.js",s+"/app/immutable/chunks/firebaseState.svelte.DNmX3eMy.js",s+"/app/immutable/chunks/index-client.haWAh2QJ.js",s+"/app/immutable/chunks/proxy.DsU3WIy_.js",s+"/app/immutable/chunks/render.ByZdg1Lb.js",s+"/app/immutable/chunks/runtime.CoKbEUpK.js",s+"/app/immutable/chunks/svelte-head.D1CUQZIE.js",s+"/app/immutable/entry/start.B4fPdHan.js"],m=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon_512.png",s+"/manifest.json"],r="1723580944154",c=`cache-${r}`,l=[...o,...m];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(l)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(l.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
