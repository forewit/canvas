import{c as m,b as j,I as Q,h as C,d as M,J as ee,k as ae,K as W,L as re,M as X,s as S,f as N,N as Z,O as $,P as ne,Q as le,q as fe,R as B,T as D,A as J,U as b,V as ie,W as se,X as K,Y as ue,Z as te,_ as ve,$ as ce,i as de,a0 as _e,a1 as oe,g as he}from"./runtime.4vCN5gQe.js";let k=null;function Ie(n,e){return e}function Ee(n,e,a,u){for(var v=[],c=e.length,s=0;s<c;s++)ue(e[s].e,v,!0);var A=c>0&&v.length===0&&a!==null;if(A){var E=a.parentNode;te(E),E.append(a),u.clear(),g(n,e[0].prev,e[c-1].next)}ve(v,()=>{for(var o=0;o<c;o++){var d=e[o];A||(u.delete(d.k),g(n,d.prev,d.next)),ce(d.e,!A)}})}function xe(n,e,a,u,v,c=null){var s=n,A={flags:e,items:new Map,first:null},E=(e&Q)!==0;if(E){var o=n;s=C?M(de(o)):o.appendChild(m())}C&&ee();var d=null;j(()=>{var l=a(),_=ae(l)?l:l==null?[]:W(l),f=_.length;let t=!1;if(C){var p=s.data===re;p!==(f===0)&&(s=X(),M(s),S(!1),t=!0)}if(C){for(var T=null,I,h=0;h<f;h++){if(N.nodeType===8&&N.data===_e){s=N,t=!0,S(!1);break}var r=_[h],i=u(r,h);I=z(N,A,T,null,r,i,h,v,e),A.items.set(i,I),T=I}f>0&&M(X())}C||pe(_,A,s,v,e,u),c!==null&&(f===0?d?Z(d):d=$(()=>c(s)):d!==null&&ne(d,()=>{d=null})),t&&S(!0)}),C&&(s=N)}function pe(n,e,a,u,v,c){var V,Y,q,y;var s=(v&oe)!==0,A=(v&(D|b))!==0,E=n.length,o=e.items,d=e.first,l=d,_,f=null,t,p=[],T=[],I,h,r,i;if(s)for(i=0;i<E;i+=1)I=n[i],h=c(I,i),r=o.get(h),r!==void 0&&((V=r.a)==null||V.measure(),(t??(t=new Set)).add(r));for(i=0;i<E;i+=1){if(I=n[i],h=c(I,i),r=o.get(h),r===void 0){var F=l?l.e.nodes_start:a;f=z(F,e,f,f===null?e.first:f.next,I,h,i,u,v),o.set(h,f),p=[],T=[],l=f.next;continue}if(A&&Ae(r,I,i,v),r.e.f&le&&(Z(r.e),s&&((Y=r.a)==null||Y.unfix(),(t??(t=new Set)).delete(r))),r!==l){if(_!==void 0&&_.has(r)){if(p.length<T.length){var R=T[0],x;f=R.prev;var O=p[0],w=p[p.length-1];for(x=0;x<p.length;x+=1)P(p[x],R,a);for(x=0;x<T.length;x+=1)_.delete(T[x]);g(e,O.prev,w.next),g(e,f,O),g(e,w,R),l=R,f=w,i-=1,p=[],T=[]}else _.delete(r),P(r,l,a),g(e,r.prev,r.next),g(e,r,f===null?e.first:f.next),g(e,f,r),f=r;continue}for(p=[],T=[];l!==null&&l.k!==h;)(_??(_=new Set)).add(l),T.push(l),l=l.next;if(l===null)continue;r=l}p.push(r),f=r,l=r.next}if(l!==null||_!==void 0){for(var L=_===void 0?[]:W(_);l!==null;)L.push(l),l=l.next;var H=L.length;if(H>0){var G=v&Q&&E===0?a:null;if(s){for(i=0;i<H;i+=1)(q=L[i].a)==null||q.measure();for(i=0;i<H;i+=1)(y=L[i].a)==null||y.fix()}Ee(e,L,G,o)}}s&&fe(()=>{var U;if(t!==void 0)for(r of t)(U=r.a)==null||U.apply()}),B.first=e.first&&e.first.e,B.last=f&&f.e}function Ae(n,e,a,u){u&D&&J(n.v,e),u&b?J(n.i,a):n.i=a}function z(n,e,a,u,v,c,s,A,E){var o=k;try{var d=(E&D)!==0,l=(E&ie)===0,_=d?l?se(v):K(v):v,f=E&b?K(s):s,t={i:f,v:_,k:c,a:null,e:null,prev:a,next:u};return k=t,t.e=$(()=>A(n,_,f),C),t.e.prev=a&&a.e,t.e.next=u&&u.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),u!==null&&(u.prev=t,u.e.prev=t.e),t}finally{k=o}}function P(n,e,a){for(var u=n.next?n.next.e.nodes_start:a,v=e?e.e.nodes_start:a,c=n.e.nodes_start;c!==u;){var s=he(c);v.before(c),c=s}}function g(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ge(n,e,a){if(a){if(n.classList.contains(e))return;n.classList.add(e)}else{if(!n.classList.contains(e))return;n.classList.remove(e)}}export{xe as e,Ie as i,ge as t};