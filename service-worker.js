const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.MzqMJ7pz.js",s+"/app/immutable/nodes/0.s5UuWLNL.js",s+"/app/immutable/assets/0.DjSbXEpb.css",s+"/app/immutable/nodes/1.D_yC0R1a.js",s+"/app/immutable/nodes/2.BQLqo4pC.js",s+"/app/immutable/assets/2.bWhRQjf2.css",s+"/app/immutable/nodes/3.4iZFNRmn.js",s+"/app/immutable/assets/3.BpwHfDRr.css",s+"/app/immutable/nodes/4.C1XmdRmJ.js",s+"/app/immutable/assets/4.8PmMA_GI.css",s+"/app/immutable/nodes/5.DRSxkRqt.js",s+"/app/immutable/assets/Button.CZuWT0h-.css",s+"/app/immutable/chunks/Button.ClTiuoOn.js",s+"/app/immutable/assets/Icon.5_9I9Kmg.css",s+"/app/immutable/chunks/Icon.B1jUH2ZD.js",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.DBth56lp.js",s+"/app/immutable/assets/Tree.MtONMW1_.css",s+"/app/immutable/chunks/Tree.CIpXqq7f.js",s+"/app/immutable/chunks/app.svelte.C_YXpmtr.js",s+"/app/immutable/chunks/attributes.s4vI7vNd.js",s+"/app/immutable/chunks/class.CxUNBNxR.js",s+"/app/immutable/chunks/directories.svelte.DBU4fb_y.js",s+"/app/immutable/chunks/disclose-version.CBUhcYe9.js",s+"/app/immutable/chunks/entry.C6WDqkzQ.js",s+"/app/immutable/chunks/events.CYiFnV6R.js",s+"/app/immutable/chunks/if.D3RmbbZj.js",s+"/app/immutable/chunks/index-client.CJwHoa7I.js",s+"/app/immutable/chunks/input.D7nYat3R.js",s+"/app/immutable/chunks/paths.RRWo1RKe.js",s+"/app/immutable/chunks/render.ZJTH9JWY.js",s+"/app/immutable/chunks/runtime.4vCN5gQe.js",s+"/app/immutable/chunks/svelte-head.Bz3Ys--g.js",s+"/app/immutable/chunks/this.D9eYfFuq.js",s+"/app/immutable/entry/start.BQPYAzyx.js"],o=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/back.svg",s+"/images/icons/double-checkmark.svg",s+"/images/icons/gear.svg",s+"/images/icons/home.svg",s+"/images/icons/logout.svg",s+"/images/icons/plus.svg",s+"/images/icons/triangle-left.svg",s+"/images/icons/triangle-right.svg",s+"/images/icons/xmark-small.svg",s+"/manifest.json"],u="1726514574639",c=`cache-${u}`,p=[...l,...o];self.addEventListener("install",e=>{async function i(){await(await caches.open(c)).addAll(p)}e.waitUntil(i())});self.addEventListener("activate",e=>{async function i(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(i())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function i(){const t=new URL(e.request.url),n=await caches.open(c);if(p.includes(t.pathname)){const a=await n.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&n.put(e.request,a.clone()),a}catch(a){const m=await n.match(e.request);if(m)return m;throw a}}e.respondWith(i())});
