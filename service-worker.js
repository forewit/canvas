const s=location.pathname.split("/").slice(0,-1).join("/"),p=[s+"/app/immutable/entry/app.BTsvG6ls.js",s+"/app/immutable/nodes/0.CfLs0n-r.js",s+"/app/immutable/assets/0.Brryqaoq.css",s+"/app/immutable/nodes/1.BNV9_GoI.js",s+"/app/immutable/nodes/2.DUIeCNqs.js",s+"/app/immutable/nodes/3.viNCiza8.js",s+"/app/immutable/assets/3.GB7uZ_MD.css",s+"/app/immutable/nodes/4.BgN3jRB0.js",s+"/app/immutable/assets/4.BpwHfDRr.css",s+"/app/immutable/nodes/5.Da9-JXea.js",s+"/app/immutable/assets/5.DVWae9kq.css",s+"/app/immutable/nodes/6.yDeu8Lan.js",s+"/app/immutable/assets/Icon.BYGLx8Vs.css",s+"/app/immutable/chunks/Icon.r047pPmM.js",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.2iFd3TpE.js",s+"/app/immutable/assets/Toggle.4ciKkiaW.css",s+"/app/immutable/chunks/Toggle.Crkk3CyT.js",s+"/app/immutable/chunks/app.svelte.ilcwoaLt.js",s+"/app/immutable/chunks/attributes.BgxIPSn9.js",s+"/app/immutable/chunks/directories.svelte.Bt4sipNX.js",s+"/app/immutable/chunks/disclose-version.zPFKPM9w.js",s+"/app/immutable/chunks/entry.BLzWxDwx.js",s+"/app/immutable/chunks/events.x25hTVR3.js",s+"/app/immutable/chunks/firebase.svelte.DTXirxET.js",s+"/app/immutable/chunks/if.CcYKB5Iu.js",s+"/app/immutable/chunks/index-client.CGrVTOoc.js",s+"/app/immutable/chunks/input.DJTMIQlt.js",s+"/app/immutable/chunks/pages.svelte.CUlYedrB.js",s+"/app/immutable/chunks/paths.Dxuu5E8A.js",s+"/app/immutable/chunks/props.D67dsuGD.js",s+"/app/immutable/chunks/proxy.CCWlokwR.js",s+"/app/immutable/chunks/render.Dtaz_-A8.js",s+"/app/immutable/chunks/runtime.BmmPnVCB.js",s+"/app/immutable/chunks/snippet.CJz9W3K2.js",s+"/app/immutable/chunks/svelte-head.BURKnKrz.js",s+"/app/immutable/chunks/this.Qw69KJUU.js",s+"/app/immutable/entry/start.CrwVzp6z.js"],l=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/back.svg",s+"/images/icons/delete.svg",s+"/images/icons/doc-new.svg",s+"/images/icons/doc.svg",s+"/images/icons/double-checkmark.svg",s+"/images/icons/folder-closed.svg",s+"/images/icons/folder-new.svg",s+"/images/icons/folder-open.svg",s+"/images/icons/font-awesome/arrows-double-right.svg",s+"/images/icons/font-awesome/feather.svg",s+"/images/icons/font-awesome/folder-closed.svg",s+"/images/icons/font-awesome/folder-new.svg",s+"/images/icons/font-awesome/folder-open.svg",s+"/images/icons/font-awesome/home.svg",s+"/images/icons/font-awesome/plus.svg",s+"/images/icons/font-awesome/trash.svg",s+"/images/icons/font-awesome/zoom-in.svg",s+"/images/icons/font-awesome/zoom-out.svg",s+"/images/icons/gear.svg",s+"/images/icons/home.svg",s+"/images/icons/logout.svg",s+"/images/icons/plus.svg",s+"/images/icons/triangle-left.svg",s+"/images/icons/triangle-right.svg",s+"/images/icons/xmark-small.svg",s+"/images/icons/zoom-in.svg",s+"/images/icons/zoom-out.svg",s+"/manifest.json"],u="1726691097175",o=`cache-${u}`,c=[...p,...l];self.addEventListener("install",e=>{async function i(){await(await caches.open(o)).addAll(c)}e.waitUntil(i())});self.addEventListener("activate",e=>{async function i(){for(const t of await caches.keys())t!==o&&await caches.delete(t)}e.waitUntil(i())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function i(){const t=new URL(e.request.url),n=await caches.open(o);if(c.includes(t.pathname)){const a=await n.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&n.put(e.request,a.clone()),a}catch(a){const m=await n.match(e.request);if(m)return m;throw a}}e.respondWith(i())});
