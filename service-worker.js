const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.CnW5LxNS.js",s+"/app/immutable/nodes/0.DhvmMszU.js",s+"/app/immutable/assets/0.DjSbXEpb.css",s+"/app/immutable/nodes/1.DCfD95wF.js",s+"/app/immutable/nodes/2.DM66Pt7g.js",s+"/app/immutable/nodes/3.zbL7qAnl.js",s+"/app/immutable/assets/3.CblPB-Ix.css",s+"/app/immutable/nodes/4.CNI4BVNM.js",s+"/app/immutable/assets/4.BpwHfDRr.css",s+"/app/immutable/nodes/5.Lyc_qt-6.js",s+"/app/immutable/assets/5.CDcb2BMP.css",s+"/app/immutable/nodes/6.B5CSfg3-.js",s+"/app/immutable/assets/6.B46YmKAW.css",s+"/app/immutable/assets/Folder.JcPmikxt.css",s+"/app/immutable/chunks/Folder.FICuKn8Z.js",s+"/app/immutable/assets/Icon.5_9I9Kmg.css",s+"/app/immutable/chunks/Icon.CLTmIN0p.js",s+"/app/immutable/assets/ProgressBar.CvJdmZFX.css",s+"/app/immutable/chunks/ProgressBar.tYS23xhY.js",s+"/app/immutable/assets/TextInput.Dk94skq7.css",s+"/app/immutable/chunks/TextInput.Bx2iR895.js",s+"/app/immutable/chunks/app.svelte.DpIlZ-Nj.js",s+"/app/immutable/chunks/attributes.CqG-anDB.js",s+"/app/immutable/chunks/directories.svelte.hY9Zyg8V.js",s+"/app/immutable/chunks/disclose-version.DutoxqwM.js",s+"/app/immutable/chunks/entry.Ce1uxCCD.js",s+"/app/immutable/chunks/events.B9ZM7sXb.js",s+"/app/immutable/chunks/if.BUEQ1AeY.js",s+"/app/immutable/chunks/index-client.CwUjWDsD.js",s+"/app/immutable/chunks/input.CEqqCcYk.js",s+"/app/immutable/chunks/pages.svelte.CDocv9n6.js",s+"/app/immutable/chunks/paths.DG-qT7N-.js",s+"/app/immutable/chunks/render.BxPt0eHo.js",s+"/app/immutable/chunks/runtime.DPf4mIKn.js",s+"/app/immutable/chunks/snippet.DMC_N1r1.js",s+"/app/immutable/chunks/svelte-head.BftU2uuT.js",s+"/app/immutable/chunks/this.DDanyKph.js",s+"/app/immutable/entry/start.CpoMhe8l.js"],u=[s+"/fonts/cascadia-code/Cascadia.ttf",s+"/fonts/cascadia-code/SIL Open Font License.txt",s+"/fonts/selawik/selawk.ttf",s+"/fonts/selawik/selawkb.ttf",s+"/fonts/selawik/selawkl.ttf",s+"/fonts/selawik/selawksb.ttf",s+"/fonts/selawik/selawksl.ttf",s+"/fonts/selawik/SIL Open Font License.txt",s+"/images/favicon.svg",s+"/images/favicon_512.png",s+"/images/icons/back.svg",s+"/images/icons/double-checkmark.svg",s+"/images/icons/gear.svg",s+"/images/icons/home.svg",s+"/images/icons/logout.svg",s+"/images/icons/plus.svg",s+"/images/icons/triangle-left.svg",s+"/images/icons/triangle-right.svg",s+"/images/icons/xmark-small.svg",s+"/manifest.json"],o="1725476546678",c=`cache-${o}`,m=[...l,...u];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(m)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(m.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
