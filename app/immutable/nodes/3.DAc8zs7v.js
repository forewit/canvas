import{e as se,h as m,s as D,b as ne,H as le,r as J,c as O,a as k,i as ie,E as y,p as q,q as Y,l as fe,u as oe,v as ue,w as ve,o as ce,x as I,d as Q,t as W,y as w,z as L}from"../chunks/disclose-version.Y_F0_rko.js";import{b as _e,i as de,r as $,a as ee,p as pe,I as he,q as ge,v as U,s as X,F as Ee,c as Z,G as be,J as Ae,d as Te,j as Se,S as me,k as xe,C as ke,D as ye,K as Ce,L as N}from"../chunks/runtime.atawwWdS.js";import{s as Ie}from"../chunks/render.CpWSVxfm.js";import{d as we}from"../chunks/events.CH0IXMTi.js";import{p as z}from"../chunks/pagesState.svelte.BbUgTMB7.js";import{g as Ne}from"../chunks/entry.B52UK3IH.js";let M=null;function He(n,e){return e}function Re(n,e,a,f){for(var o=[],v=e.length,l=0;l<v;l++)be(e[l].e,o,!0);var h=v>0&&o.length===0&&a!==null;if(h){var d=a.parentNode;fe(d),d.append(a),f.clear(),S(n,e[0].prev,e[v-1].next)}Ae(o,()=>{for(var c=0;c<v;c++){var _=e[c];h||(f.delete(_.k),S(n,_.prev,_.next)),Te(_.e,!h)}})}function De(n,e,a,f,o,v=null){var l=n,h={flags:e,items:new Map,first:null};{var d=n;l=m?D(d.firstChild):d.appendChild(se())}m&&ne();var c=null;_e(()=>{var _=a(),r=de(_)?_:_==null?[]:Array.from(_),p=r.length,t=h.flags;t&Y&&!Se(r)&&!(me in r)&&!(xe in r)&&(t^=Y,t&ue&&!(t&y)&&(t^=y));let u=!1;if(m){var E=l.data===le;E!==(p===0)&&(l=J(),D(l),O(!1),u=!0)}if(m){for(var b=null,A,g=0;g<p;g++){if(k.nodeType===8&&k.data===ie){l=k,u=!0,O(!1);break}var s=r[g],i=f(s,g);A=ae(k,h,b,null,s,i,g,o,t),h.items.set(i,A),b=A}p>0&&D(J())}m||Oe(r,h,l,o,t,f),v!==null&&(p===0?c?$(c):c=ee(()=>v(l)):c!==null&&pe(c,()=>{c=null})),u&&O(!0)}),m&&(l=k)}function Oe(n,e,a,f,o,v){var F,K,P,V;var l=(o&oe)!==0,h=(o&(y|q))!==0,d=n.length,c=e.items,_=e.first,r=_,p=new Set,t=null,u=new Set,E=[],b=[],A,g,s,i;if(l)for(i=0;i<d;i+=1)A=n[i],g=v(A,i),s=c.get(g),s!==void 0&&((F=s.a)==null||F.measure(),u.add(s));for(i=0;i<d;i+=1){if(A=n[i],g=v(A,i),s=c.get(g),s===void 0){var re=r?r.e.nodes.start:a;t=ae(re,e,t,t===null?e.first:t.next,A,g,i,f,o),c.set(g,t),E=[],b=[],r=t.next;continue}if(h&&Le(s,A,i,o),s.e.f&he&&($(s.e),l&&((K=s.a)==null||K.unfix(),u.delete(s))),s!==r){if(p.has(s)){if(E.length<b.length){var C=b[0],T;t=C.prev;var B=E[0],H=E[E.length-1];for(T=0;T<E.length;T+=1)j(E[T],C,a);for(T=0;T<b.length;T+=1)p.delete(b[T]);S(e,B.prev,H.next),S(e,t,B),S(e,H,C),r=C,t=H,i-=1,E=[],b=[]}else p.delete(s),j(s,r,a),S(e,s.prev,s.next),S(e,s,t===null?e.first:t.next),S(e,t,s),t=s;continue}for(E=[],b=[];r!==null&&r.k!==g;)p.add(r),b.push(r),r=r.next;if(r===null)continue;s=r}E.push(s),t=s,r=s.next}const x=Array.from(p);for(;r!==null;)x.push(r),r=r.next;var R=x.length;if(R>0){var te=o&ve&&d===0?a:null;if(l){for(i=0;i<R;i+=1)(P=x[i].a)==null||P.measure();for(i=0;i<R;i+=1)(V=x[i].a)==null||V.fix()}Re(e,x,te,c)}l&&ge(()=>{var G;for(s of u)(G=s.a)==null||G.apply()}),U.first=e.first&&e.first.e,U.last=t&&t.e}function Le(n,e,a,f){f&y&&X(n.v,e),f&q?X(n.i,a):n.i=a}function ae(n,e,a,f,o,v,l,h,d){var c=M;try{var _=(d&y)!==0,r=(d&Y)===0,p=_?r?Ee(o):Z(o):o,t=d&q?Z(l):l,u={i:t,v:p,k:v,a:null,e:null,prev:a,next:f};return M=u,u.e=ee(()=>h(n,p,t),m),u.e.prev=a&&a.e,u.e.next=f&&f.e,a===null?e.first=u:(a.next=u,a.e.next=u.e),f!==null&&(f.prev=u,f.e.prev=u.e),u}finally{M=c}}function j(n,e,a){for(var f=n.next?n.next.e.nodes.start:a,o=e?e.e.nodes.start:a,v=n.e.nodes.start;v!==f;){var l=v.nextSibling;o.before(v),v=l}}function S(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var Me=()=>{z.newPage()},Ye=(n,e)=>Ne("/"+e()),qe=(n,e)=>delete z.pages[e()],ze=W('<div class="page svelte-sju6c7"><button class="goto-page-button svelte-sju6c7"><p> </p></button> <button class="close-page-button svelte-sju6c7">❌</button></div>'),Be=W('<button class="new-page-button svelte-sju6c7">New Page</button> <div class="pages svelte-sju6c7"></div>',1);function Qe(n,e){ke(e,!0);var a=Be(),f=ce(a);f.__click=[Me];var o=I(I(f,!0));De(o,73,()=>Object.entries(z.pages),He,(v,l,h)=>{let d=()=>N(N(l))[0],c=()=>N(N(l))[1];var _=ze(),r=L(_);r.__click=[Ye,d];var p=L(r),t=L(p);w(p),w(r);var u=I(I(r,!0));u.__click=[qe,d],w(_),Ce(()=>Ie(t,c().title)),Q(v,_)}),w(o),Q(n,a),ye()}we(["click"]);export{Qe as component};
