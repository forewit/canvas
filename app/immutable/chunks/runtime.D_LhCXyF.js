var ht=Array.isArray,Et=Array.from,wt=Object.defineProperty,en=Object.getOwnPropertyDescriptor,mt=Object.prototype,Tt=Array.prototype,yt=Object.getPrototypeOf;const At=()=>{};function _n(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,cn=4,N=8,vn=16,m=32,Q=64,R=128,U=256,h=512,A=1024,D=2048,O=4096,q=8192,jn=16384,pn=32768,xt=65536,Vn=1<<18,It=Symbol("$state"),Rt=Symbol("");function dn(n){return n===this.v}function Gn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function hn(n){return!Gn(n,this.v)}function Kn(n){throw new Error("effect_in_teardown")}function $n(){throw new Error("effect_in_unowned_derived")}function Zn(n){throw new Error("effect_orphan")}function Wn(){throw new Error("effect_update_depth_exceeded")}function kt(){throw new Error("hydration_failed")}function St(n){throw new Error("props_invalid_value")}function gt(){throw new Error("state_descriptors_fixed")}function Ct(){throw new Error("state_prototype_fixed")}function Xn(){throw new Error("state_unsafe_local_read")}function zn(){throw new Error("state_unsafe_mutation")}function nn(n){return{f:0,v:n,reactions:null,equals:dn,version:0}}function Ot(n){return Jn(nn(n))}function Nt(n){var r;const t=nn(n);return t.equals=hn,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(t),t}function Jn(n){return a!==null&&a.f&y&&(w===null?it([n]):w.push(n)),n}function Dt(n,t){return a!==null&&J()&&a.f&y&&(w===null||!w.includes(n))&&zn(),n.equals(t)||(n.v=t,n.version=Ln(),En(n,A),J()&&f!==null&&f.f&h&&!(f.f&m)&&(v!==null&&v.includes(n)?(d(f,A),$(f)):T===null?ft([n]):T.push(n))),t}function En(n,t){var r=n.reactions;if(r!==null)for(var e=J(),s=r.length,u=0;u<s;u++){var l=r[u],_=l.f;_&A||!e&&l===f||(d(l,t),_&(h|R)&&(_&y?En(l,D):$(l)))}}const qt=1,Pt=2,Ft=4,Lt=8,Mt=16,bt=1,Ht=2,Yt=4,Ut=8,Bt=16,jt=1,Vt=2,Qn="[",nt="[!",tt="]",wn={},Gt=Symbol();function mn(n){console.warn("hydration_mismatch")}let I=!1;function Kt(n){I=n}let E;function B(n){if(n===null)throw mn(),wn;return E=n}function $t(){return B(k(E))}function Zt(n){if(I){if(k(E)!==null)throw mn(),wn;E=n}}function Wt(n=1){if(I){for(var t=n,r=E;t--;)r=k(r);E=r}}function Xt(){for(var n=0,t=E;;){if(t.nodeType===8){var r=t.data;if(r===tt){if(n===0)return t;n-=1}else(r===Qn||r===nt)&&(n+=1)}var e=k(t);t.remove(),t=e}}var sn,Tn,yn;function zt(){if(sn===void 0){sn=window;var n=Element.prototype,t=Node.prototype;Tn=en(t,"firstChild").get,yn=en(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function An(n=""){return document.createTextNode(n)}function W(n){return Tn.call(n)}function k(n){return yn.call(n)}function Jt(n){if(!I)return W(n);var t=W(E);return t===null&&(t=E.appendChild(An())),B(t),t}function Qt(n,t){if(!I){var r=W(n);return r instanceof Comment&&r.data===""?k(r):r}return E}function nr(n,t=1,r=!1){let e=I?E:n;for(;t--;)e=k(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var u=An();return e==null||e.before(u),B(u),u}return B(e),e}function tr(n){n.textContent=""}function xn(n){f===null&&a===null&&Zn(),a!==null&&a.f&R&&$n(),tn&&Kn()}function un(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&Q)!==0,u=f,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:n|A,first:null,fn:t,last:null,next:null,parent:s?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var _=g;try{ln(!0),K(l),l.f|=jn}catch(c){throw G(l),c}finally{ln(_)}}else t!==null&&$(l);var o=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null;return!o&&!s&&e&&(u!==null&&un(l,u),a!==null&&a.f&y&&un(l,a)),l}function rr(n){const t=P(N,null,!1);return d(t,h),t.teardown=n,t}function er(n){xn();var t=f!==null&&(f.f&N)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??(r.e=[])).push(n)}else{var e=In(n);return e}}function sr(n){return xn(),Rn(n)}function ur(n){const t=P(Q,n,!0);return()=>{G(t)}}function In(n){return P(cn,n,!1)}function Rn(n){return P(N,n,!0)}function lr(n){return Rn(n)}function ar(n,t=0){return P(N|vn|t,n,!0)}function or(n,t=!0){return P(N|m,n,!0,t)}function kn(n){var t=n.teardown;if(t!==null){const r=tn,e=a;an(!0),on(null);try{t.call(null)}finally{an(r),on(e)}}}function G(n,t=!0){var r=!1;if((t||n.f&Vn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var u=e===s?null:k(e);e.remove(),e=u}r=!0}rn(n,t&&!r),b(n,0),d(n,q);var l=n.transitions;if(l!==null)for(const o of l)o.stop();kn(n);var _=n.parent;_!==null&&n.f&m&&_.first!==null&&Sn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Sn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function ir(n,t){var r=[];gn(n,r,!0),rt(r,()=>{G(n),t&&t()})}function rt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function gn(n,t,r){if(!(n.f&O)){if(n.f^=O,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,u=(e.f&pn)!==0||(e.f&m)!==0;gn(e,t,u?r:!1),e=s}}}function fr(n){Cn(n,!0)}function Cn(n,t){if(n.f&O){n.f^=O,H(n)&&K(n);for(var r=n.first;r!==null;){var e=r.next,s=(r.f&pn)!==0||(r.f&m)!==0;Cn(r,s?t:!1),r=e}if(n.transitions!==null)for(const u of n.transitions)(u.is_global||t)&&u.in()}}const et=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let j=!1,V=!1,X=[],z=[];function On(){j=!1;const n=X.slice();X=[],_n(n)}function Nn(){V=!1;const n=z.slice();z=[],_n(n)}function _r(n){j||(j=!0,queueMicrotask(On)),X.push(n)}function cr(n){V||(V=!0,et(Nn)),z.push(n)}function st(){j&&On(),V&&Nn()}function ut(n){let t=y|A;f===null&&(t|=R);const r={deps:null,deriveds:null,equals:dn,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(a!==null&&a.f&y){var e=a;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function vr(n){const t=ut(n);return t.equals=hn,t}function Dn(n){rn(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)lt(t[r])}}function qn(n){var t;Dn(n),t=Mn(n);var r=(S||n.f&R)&&n.deps!==null?D:h;d(n,r),n.equals(t)||(n.v=t,n.version=Ln())}function lt(n){Dn(n),b(n,0),d(n,q),n.first=n.last=n.deps=n.reactions=n.fn=null}function at(n){throw new Error("lifecycle_outside_component")}const Pn=0,ot=1;let Y=Pn,M=!1,g=!1,tn=!1;function ln(n){g=n}function an(n){tn=n}let x=[],C=0,a=null;function on(n){a=n}let f=null,w=null;function it(n){w=n}let v=null,p=0,T=null;function ft(n){T=n}let Fn=0,S=!1,i=null;function Ln(){return Fn++}function J(){return i!==null&&i.l===null}function H(n){var l,_;var t=n.f;if(t&A)return!0;if(t&D){var r=n.deps,e=(t&R)!==0;if(r!==null){var s;if(t&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=U}for(s=0;s<r.length;s++){var u=r[s];if(H(u)&&qn(u),u.version>n.version)return!0;e&&!S&&!((_=u==null?void 0:u.reactions)!=null&&_.includes(n))&&(u.reactions??(u.reactions=[])).push(n)}}e||d(n,h)}return!1}function _t(n,t,r){throw n}function Mn(n){var F;var t=v,r=p,e=T,s=a,u=S,l=w;v=null,p=0,T=null,a=n.f&(m|Q)?null:n,S=!g&&(n.f&R)!==0,w=null;try{var _=(0,n.fn)(),o=n.deps;if(v!==null){var c;if(b(n,p),o!==null&&p>0)for(o.length=p+v.length,c=0;c<v.length;c++)o[p+c]=v[c];else n.deps=o=v;if(!S)for(c=p;c<o.length;c++)((F=o[c]).reactions??(F.reactions=[])).push(n)}else o!==null&&p<o.length&&(b(n,p),o.length=p);return _}finally{v=t,p=r,T=e,a=s,S=u,w=l}}function ct(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(d(t,D),t.f&(R|U)||(t.f^=U),b(t,0))}function b(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)ct(n,r[e])}function rn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;G(r,t),r=e}}function K(n){var t=n.f;if(!(t&q)){d(n,h);var r=n.ctx,e=f,s=i;f=n,i=r;try{t&vn||rn(n),kn(n);var u=Mn(n);n.teardown=typeof u=="function"?u:null,n.version=Fn}catch(l){_t(l)}finally{f=e,i=s}}}function bn(){C>1e3&&(C=0,Wn()),C++}function Hn(n){var t=n.length;if(t!==0){bn();var r=g;g=!0;try{for(var e=0;e<t;e++){var s=n[e];if(s.first===null&&!(s.f&m))fn([s]);else{var u=[];Yn(s,u),fn(u)}}}finally{g=r}}}function fn(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(q|O))&&H(e)&&(K(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Sn(e):e.fn=null))}}function vt(){if(M=!1,C>1001)return;const n=x;x=[],Hn(n),M||(C=0)}function $(n){Y===Pn&&(M||(M=!0,queueMicrotask(vt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&m){if(!(r&h))return;d(t,D)}}x.push(t)}function Yn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,u=(s&(q|O))===0,l=(s&m)!==0,_=(s&h)!==0,o=r.first;if(u&&(!l||!_)){if(l&&d(r,h),s&N){if(!l&&H(r)&&(K(r),o=r.first),o!==null){r=o;continue}}else if(s&cn)if(l||_){if(o!==null){r=o;continue}}else e.push(r)}var c=r.next;if(c===null){let L=r.parent;for(;L!==null;){if(n===L)break n;var F=L.next;if(F!==null){r=F;continue n}L=L.parent}}r=c}for(var Z=0;Z<e.length;Z++)o=e[Z],t.push(o),Yn(o,t)}function Un(n){var t=Y,r=x;try{bn();const s=[];Y=ot,x=s,M=!1,Hn(r);var e=n==null?void 0:n();return st(),(x.length>0||s.length>0)&&Un(),C=0,e}finally{Y=t,x=r}}async function pr(){await Promise.resolve(),Un()}function dr(n){var t=n.f;if(t&q)return n.v;if(a!==null){w!==null&&w.includes(n)&&Xn();var r=a.deps;v===null&&r!==null&&r[p]===n?p++:v===null?v=[n]:v.push(n),T!==null&&f!==null&&f.f&h&&!(f.f&m)&&T.includes(n)&&(d(f,A),$(f))}if(t&y){var e=n;H(e)&&qn(e)}return n.v}function hr(n){const t=a;try{return a=null,n()}finally{a=t}}const pt=~(A|D|h);function d(n,t){n.f=n.f&pt|t}function Er(n){return Bn().get(n)}function wr(n,t){return Bn().set(n,t),t}function Bn(n){return i===null&&at(),i.c??(i.c=new Map(dt(i)||void 0))}function dt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function mr(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},t||(i.l={s:null,u:null,r1:[],r2:nn(!1)})}function Tr(n){const t=i;if(t!==null){const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)In(e[r])}i=t.p,t.m=!0}return{}}export{Rn as $,rr as A,_r as B,wt as C,ht as D,pn as E,mt as F,Tt as G,Vn as H,nn as I,gt as J,en as K,f as L,Ct as M,yt as N,zt as O,wn as P,tt as Q,mn as R,It as S,kt as T,Gt as U,tr as V,Et as W,ur as X,mr as Y,Tr as Z,In as _,or as a,cr as a0,Rt as a1,Qt as a2,Ft as a3,O as a4,qt as a5,Pt as a6,Mt as a7,Nt as a8,gn as a9,rt as aa,Lt as ab,lr as ac,Jt as ad,nr as ae,Zt as af,At as ag,Wt as ah,jt as ai,Vt as aj,St as ak,xt as al,Yt as am,hn as an,bt as ao,Ht as ap,Ut as aq,vr as ar,Bt as as,Un as at,sr as au,pr as av,Gn as aw,ar as b,E as c,G as d,Ot as e,dr as f,Er as g,I as h,Dt as i,ut as j,hr as k,An as l,Qn as m,k as n,Kt as o,B as p,W as q,$t as r,wr as s,nt as t,er as u,Xt as v,fr as w,ir as x,i as y,at as z};
