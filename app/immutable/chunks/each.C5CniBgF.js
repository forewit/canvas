import{e as $,f as j,E as K,h as w,i as S,j as ee,k as ae,l as U,H as re,r as m,m as k,n as N,o as X,p as P,q as ne,I as le,t as fe,u as z,v as b,b as F,w as L,x as ie,y as ue,z as G,A as se,B as te,C as ve,D as de,F as _e,G as oe,J as ce,K as he}from"./runtime.DmHE6BeA.js";let M=null;function Te(i,e){return e}function Ee(i,e,a,s){for(var v=[],d=e.length,u=0;u<d;u++)se(e[u].e,v,!0);var A=d>0&&v.length===0&&a!==null;if(A){var E=a.parentNode;te(E),E.append(a),s.clear(),C(i,e[0].prev,e[d-1].next)}ve(v,()=>{for(var c=0;c<d;c++){var _=e[c];A||(s.delete(_.k),C(i,_.prev,_.next)),de(_.e,!A)}})}function xe(i,e,a,s,v,d=null){var u=i,A={flags:e,items:new Map,first:null},E=(e&K)!==0;if(E){var c=i;u=w?S(_e(c)):c.appendChild($())}w&&ee();var _=null;j(()=>{var n=a(),o=ae(n)?n:n==null?[]:U(n),l=o.length;let t=!1;if(w){var p=u.data===re;p!==(l===0)&&(u=m(),S(u),k(!1),t=!0)}if(w){for(var I=null,T,h=0;h<l;h++){if(N.nodeType===8&&N.data===oe){u=N,t=!0,k(!1);break}var r=o[h],f=s(r,h);T=Q(N,A,I,null,r,f,h,v,e),A.items.set(f,T),I=T}l>0&&S(m())}w||pe(o,A,u,v,e,s),d!==null&&(l===0?_?X(_):_=P(()=>d(u)):_!==null&&ne(_,()=>{_=null})),t&&k(!0)}),w&&(u=N)}function pe(i,e,a,s,v,d){var y,q,B,V;var u=(v&ce)!==0,A=(v&(b|L))!==0,E=i.length,c=e.items,_=e.first,n=_,o,l=null,t,p=[],I=[],T,h,r,f;if(u)for(f=0;f<E;f+=1)T=i[f],h=d(T,f),r=c.get(h),r!==void 0&&((y=r.a)==null||y.measure(),(t??(t=new Set)).add(r));for(f=0;f<E;f+=1){if(T=i[f],h=d(T,f),r=c.get(h),r===void 0){var W=n?n.e.nodes_start:a;l=Q(W,e,l,l===null?e.first:l.next,T,h,f,s,v),c.set(h,l),p=[],I=[],n=l.next;continue}if(A&&Ae(r,T,f,v),r.e.f&le&&(X(r.e),u&&((q=r.a)==null||q.unfix(),(t??(t=new Set)).delete(r))),r!==n){if(o!==void 0&&o.has(r)){if(p.length<I.length){var g=I[0],x;l=g.prev;var O=p[0],D=p[p.length-1];for(x=0;x<p.length;x+=1)J(p[x],g,a);for(x=0;x<I.length;x+=1)o.delete(I[x]);C(e,O.prev,D.next),C(e,l,O),C(e,D,g),n=g,l=D,f-=1,p=[],I=[]}else o.delete(r),J(r,n,a),C(e,r.prev,r.next),C(e,r,l===null?e.first:l.next),C(e,l,r),l=r;continue}for(p=[],I=[];n!==null&&n.k!==h;)(o??(o=new Set)).add(n),I.push(n),n=n.next;if(n===null)continue;r=n}p.push(r),l=r,n=r.next}if(n!==null||o!==void 0){for(var H=o===void 0?[]:U(o);n!==null;)H.push(n),n=n.next;var R=H.length;if(R>0){var Z=v&K&&E===0?a:null;if(u){for(f=0;f<R;f+=1)(B=H[f].a)==null||B.measure();for(f=0;f<R;f+=1)(V=H[f].a)==null||V.fix()}Ee(e,H,Z,c)}}u&&fe(()=>{var Y;if(t!==void 0)for(r of t)(Y=r.a)==null||Y.apply()}),z.first=e.first&&e.first.e,z.last=l&&l.e}function Ae(i,e,a,s){s&b&&F(i.v,e),s&L?F(i.i,a):i.i=a}function Q(i,e,a,s,v,d,u,A,E){var c=M;try{var _=(E&b)!==0,n=(E&ie)===0,o=_?n?ue(v):G(v):v,l=E&L?G(u):u,t={i:l,v:o,k:d,a:null,e:null,prev:a,next:s};return M=t,t.e=P(()=>A(i,o,l),w),t.e.prev=a&&a.e,t.e.next=s&&s.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),s!==null&&(s.prev=t,s.e.prev=t.e),t}finally{M=c}}function J(i,e,a){for(var s=i.next?i.next.e.nodes_start:a,v=e?e.e.nodes_start:a,d=i.e.nodes_start;d!==s;){var u=he(d);v.before(d),d=u}}function C(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{xe as e,Te as i};
