import{h as T,f as le,m as se,r as V,a as z,s as H,b as y,g as ie,E as C,n as P,o as M,k as oe,p as ue,q as fe,u as ce,v as G,w as x,c as J,t as j,x as K}from"../chunks/disclose-version.BH-PvlUQ.js";import{b as ve,e as _e,x as ee,p as ae,y as de,I as pe,q as he,j as Q,f as X,B as ge,s as Z,C as Ee,D as be,F as Se,i as Ae,S as me,a as xe,r as Te,v as ke,G as ye,J as D}from"../chunks/runtime.CoKbEUpK.js";import{s as Ce}from"../chunks/render.ByZdg1Lb.js";import{d as Ie}from"../chunks/events.BqAoXrdc.js";import{l as De}from"../chunks/authUtils.CGjUVwWr.js";import{p as N,u as O}from"../chunks/firebaseState.svelte.DNmX3eMy.js";let L=null;function Ne(l,e,a,o){for(var f=[],_=e.length,s=0;s<_;s++)Ee(e[s].e,f,!0);var g=_>0&&f.length===0&&a!==null;if(g){var c=a.parentNode;oe(c),c.append(a),o.clear(),m(l,e[0].prev,e[_-1].next)}be(f,()=>{for(var d=0;d<_;d++){var h=e[d];g||(o.delete(h.k),m(l,h.prev,h.next)),Se(h.e,!g)}})}function Re(l,e,a,o,f,_=null){var s=l,g={flags:e,items:new Map,first:null};T&&le();var c=null;ve(()=>{var d=a(),h=_e(d)?d:d==null?[]:Array.from(d),r=h.length,n=g.flags;n&M&&!Ae(h)&&!(me in h)&&!(xe in h)&&(n^=M,n&fe&&!(n&C)&&(n^=C));let i=!1;if(T){var v=s.data===se;v!==(r===0)&&(s=V(),z(s),H(!1),i=!0)}if(T){for(var E=null,p,b=0;b<r;b++){if(y.nodeType===8&&y.data===ie){s=y,i=!0,H(!1);break}var S=h[b],t=o(S,b);p=re(y,g,E,null,S,t,b,f,n),g.items.set(t,p),E=p}r>0&&z(V())}T||we(h,g,s,f,n,o),_!==null&&(r===0?c?ee(c):c=ae(()=>_(s)):c!==null&&de(c,()=>{c=null})),i&&H(!0)}),T&&(s=y)}function we(l,e,a,o,f,_){var $,q,B,F;var s=(f&ue)!==0,g=(f&(C|P))!==0,c=l.length,d=e.items,h=e.first,r=h,n=new Set,i=null,v=new Set,E=[],p=[],b,S,t,u;if(s)for(u=0;u<c;u+=1)b=l[u],S=_(b,u),t=d.get(S),t!==void 0&&(($=t.a)==null||$.measure(),v.add(t));for(u=0;u<c;u+=1){if(b=l[u],S=_(b,u),t=d.get(S),t===void 0){var te=r?r.e.nodes.start:a;i=re(te,e,i,i===null?e.first:i.next,b,S,u,o,f),d.set(S,i),E=[],p=[],r=i.next;continue}if(g&&He(t,b,u,f),t.e.f&pe&&(ee(t.e),s&&((q=t.a)==null||q.unfix(),v.delete(t))),t!==r){if(n.has(t)){if(E.length<p.length){var I=p[0],A;i=I.prev;var Y=E[0],R=E[E.length-1];for(A=0;A<E.length;A+=1)W(E[A],I,a);for(A=0;A<p.length;A+=1)n.delete(p[A]);m(e,Y.prev,R.next),m(e,i,Y),m(e,R,I),r=I,i=R,u-=1,E=[],p=[]}else n.delete(t),W(t,r,a),m(e,t.prev,t.next),m(e,t,i===null?e.first:i.next),m(e,i,t),i=t;continue}for(E=[],p=[];r!==null&&r.k!==S;)n.add(r),p.push(r),r=r.next;if(r===null)continue;t=r}E.push(t),i=t,r=t.next}const k=Array.from(n);for(;r!==null;)k.push(r),r=r.next;var w=k.length;if(w>0){var ne=f&ce&&c===0?a:null;if(s){for(u=0;u<w;u+=1)(B=k[u].a)==null||B.measure();for(u=0;u<w;u+=1)(F=k[u].a)==null||F.fix()}Ne(e,k,ne,d)}s&&he(()=>{var U;for(t of v)(U=t.a)==null||U.apply()}),Q.first=e.first&&e.first.e,Q.last=i&&i.e}function He(l,e,a,o){o&C&&X(l.v,e),o&P?X(l.i,a):l.i=a}function re(l,e,a,o,f,_,s,g,c){var d=L;try{var h=(c&C)!==0,r=(c&M)===0,n=h?r?ge(f):Z(f):f,i=c&P?Z(s):s,v={i,v:n,k:_,a:null,e:null,prev:a,next:o};return L=v,v.e=ae(()=>g(l,n,i),T),v.e.prev=a&&a.e,v.e.next=o&&o.e,a===null?e.first=v:(a.next=v,a.e.next=v.e),o!==null&&(o.prev=v,o.e.prev=v.e),v}finally{L=d}}function W(l,e,a){for(var o=l.next?l.next.e.nodes.start:a,f=e?e.e.nodes.start:a,_=l.e.nodes.start;_!==o;){var s=_.nextSibling;f.before(_),_=s}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var Oe=(l,e,a)=>e(l,a()),Le=(l,e,a)=>e(a()),Me=j('<button class="ui-card"> </button>'),Pe=j('<div class="container svelte-jrplly"><button class="ui-card">Add Page</button> <button class="ui-card">Change Settings</button> <button class="ui-card">Logout</button> <!></div>');function Ve(l,e){Te(e,!0);function a(){N.createPage()}function o(){O.spellcheck=!O.spellcheck,O.triggerUpdate()}function f(r){N.pages[r].title="Title"+Math.random().toString().slice(2,4)}function _(r,n){r.preventDefault(),delete N.pages[n]}var s=Pe(),g=G(s);g.__click=a;var c=x(x(g,!0));c.__click=o;var d=x(x(c,!0));d.__click=function(...r){var n;(n=De)==null||n.apply(this,r)};var h=x(x(d,!0));Re(h,69,()=>Object.entries(N.pages),([r,n],i)=>n,(r,n,i)=>{let v=()=>D(D(n))[0],E=()=>D(D(n))[1];var p=Me();p.__contextmenu=[Oe,_,v],p.__click=[Le,f,v];var b=G(p);ye(()=>Ce(b,`📄${v().slice(0,4)??""}: ${E().title??""}`)),K(p),J(r,p)}),K(s),J(l,s),ke()}Ie(["click","contextmenu"]);export{Ve as component};
