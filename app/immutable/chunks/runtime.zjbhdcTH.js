var cn=Array.isArray,vn=Array.from,pn=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,hn=Object.prototype,dn=Array.prototype,En=Object.getPrototypeOf;const wn=()=>{};function ot(t){for(var n=0;n<t.length;n++)t[n]()}const A=2,it=4,C=8,ft=16,E=32,z=64,I=128,Y=256,h=512,m=1024,N=2048,O=4096,q=8192,Ut=16384,_t=32768,mn=65536,Bt=1<<18,Tn=Symbol("$state"),yn=Symbol("");function ct(t){return t===this.v}function jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function vt(t){return!jt(t,this.v)}function Vt(t){throw new Error("effect_in_teardown")}function Gt(){throw new Error("effect_in_unowned_derived")}function Kt(t){throw new Error("effect_orphan")}function $t(){throw new Error("effect_update_depth_exceeded")}function An(){throw new Error("hydration_failed")}function xn(t){throw new Error("props_invalid_value")}function In(){throw new Error("state_descriptors_fixed")}function Rn(){throw new Error("state_prototype_fixed")}function Zt(){throw new Error("state_unsafe_mutation")}function pt(t){return{f:0,v:t,reactions:null,equals:ct,version:0}}function kn(t){var r;const n=pt(t);return n.equals=vt,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(n),n}function gn(t,n){return f!==null&&X()&&f.f&A&&Zt(),t.equals(n)||(t.v=n,t.version=Pt(),ht(t,m),X()&&_!==null&&_.f&h&&!(_.f&E)&&(c!==null&&c.includes(t)?(p(_,m),G(_)):w===null?un([t]):w.push(t))),n}function ht(t,n){var r=t.reactions;if(r!==null)for(var e=X(),s=r.length,u=0;u<s;u++){var l=r[u],a=l.f;a&m||!e&&l===_||(p(l,n),a&(h|I)&&(a&A?ht(l,N):G(l)))}}const Sn=1,On=2,Cn=16,Nn=1,qn=2,Dn=4,Pn=8,Fn=16,Mn=1,Ln=2,Wt="[",Xt="[!",zt="]",dt={},bn=Symbol();function Et(t){console.warn("hydration_mismatch")}let x=!1;function Yn(t){x=t}let d;function H(t){if(t===null)throw Et(),dt;return d=t}function Hn(){return H(R(d))}function Un(t){if(x){if(R(d)!==null)throw Et(),dt;d=t}}function Bn(t=1){if(x){for(var n=t,r=d;n--;)r=R(r);d=r}}function jn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===zt){if(t===0)return n;t-=1}else(r===Wt||r===Xt)&&(t+=1)}var e=R(n);n.remove(),n=e}}var rt,wt,mt;function Vn(){if(rt===void 0){rt=window;var t=Element.prototype,n=Node.prototype;wt=nt(n,"firstChild").get,mt=nt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Tt(t=""){return document.createTextNode(t)}function $(t){return wt.call(t)}function R(t){return mt.call(t)}function Gn(t){if(!x)return $(t);var n=$(d);return n===null&&(n=d.appendChild(Tt())),H(n),n}function Kn(t,n){if(!x){var r=$(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function $n(t,n=1,r=!1){let e=x?d:t;for(;n--;)e=R(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var u=Tt();return e==null||e.before(u),H(u),u}return H(e),e}function Zn(t){t.textContent=""}function yt(t){_===null&&f===null&&Kt(),f!==null&&f.f&I&&Gt(),J&&Vt()}function et(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function D(t,n,r,e=!0){var s=(t&z)!==0,u=_,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|m,first:null,fn:n,last:null,next:null,parent:s?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var a=g;try{st(!0),V(l),l.f|=Ut}catch(T){throw j(l),T}finally{st(a)}}else n!==null&&G(l);var o=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null;return!o&&!s&&e&&(u!==null&&et(l,u),f!==null&&f.f&A&&et(l,f)),l}function Wn(t){const n=D(C,null,!1);return p(n,h),n.teardown=t,n}function Xn(t){yt();var n=_!==null&&(_.f&C)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push(t)}else{var e=At(t);return e}}function zn(t){return yt(),xt(t)}function Jn(t){const n=D(z,t,!0);return()=>{j(n)}}function At(t){return D(it,t,!1)}function xt(t){return D(C,t,!0)}function Qn(t){return xt(t)}function tr(t,n=0){return D(C|ft|n,t,!0)}function nr(t,n=!0){return D(C|E,t,!0,n)}function It(t){var n=t.teardown;if(n!==null){const r=J,e=f;ut(!0),lt(null);try{n.call(null)}finally{ut(r),lt(e)}}}function j(t,n=!0){var r=!1;if((n||t.f&Bt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var u=e===s?null:R(e);e.remove(),e=u}r=!0}Q(t,n&&!r),M(t,0),p(t,q);var l=t.transitions;if(l!==null)for(const o of l)o.stop();It(t);var a=t.parent;a!==null&&t.f&E&&a.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function rr(t,n){var r=[];kt(t,r,!0),Jt(r,()=>{j(t),n&&n()})}function Jt(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function kt(t,n,r){if(!(t.f&O)){if(t.f^=O,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,u=(e.f&_t)!==0||(e.f&E)!==0;kt(e,n,u?r:!1),e=s}}}function er(t){gt(t,!0)}function gt(t,n){if(t.f&O){t.f^=O,L(t)&&V(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&_t)!==0||(r.f&E)!==0;gt(r,s?n:!1),r=e}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&u.in()}}const Qt=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let U=!1,B=!1,Z=[],W=[];function St(){U=!1;const t=Z.slice();Z=[],ot(t)}function Ot(){B=!1;const t=W.slice();W=[],ot(t)}function sr(t){U||(U=!0,queueMicrotask(St)),Z.push(t)}function ur(t){B||(B=!0,Qt(Ot)),W.push(t)}function tn(){U&&St(),B&&Ot()}function nn(t){let n=A|m;_===null&&(n|=I);const r={deps:null,deriveds:null,equals:ct,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&A){var e=f;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function lr(t){const n=nn(t);return n.equals=vt,n}function Ct(t){Q(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rn(n[r])}}function Nt(t){var n;Ct(t),n=Ft(t);var r=(k||t.f&I)&&t.deps!==null?N:h;p(t,r),t.equals(n)||(t.v=n,t.version=Pt())}function rn(t){Ct(t),M(t,0),p(t,q),t.first=t.last=t.deps=t.reactions=t.fn=null}function en(t){throw new Error("lifecycle_outside_component")}const qt=0,sn=1;let b=qt,F=!1,g=!1,J=!1;function st(t){g=t}function ut(t){J=t}let y=[],S=0,f=null;function lt(t){f=t}let _=null,c=null,v=0,w=null;function un(t){w=t}let Dt=0,k=!1,i=null;function Pt(){return Dt++}function X(){return i!==null&&i.l===null}function L(t){var l,a;var n=t.f;if(n&m)return!0;if(n&N){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&Y){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=Y}for(s=0;s<r.length;s++){var u=r[s];if(L(u)&&Nt(u),u.version>t.version)return!0;e&&!k&&!((a=u==null?void 0:u.reactions)!=null&&a.includes(t))&&(u.reactions??(u.reactions=[])).push(t)}}e||p(t,h)}return!1}function ln(t,n,r){throw t}function Ft(t){var T;var n=c,r=v,e=w,s=f,u=k;c=null,v=0,w=null,f=t.f&(E|z)?null:t,k=!g&&(t.f&I)!==0;try{var l=(0,t.fn)(),a=t.deps;if(c!==null){var o;if(M(t,v),a!==null&&v>0)for(a.length=v+c.length,o=0;o<c.length;o++)a[v+o]=c[o];else t.deps=a=c;if(!k)for(o=v;o<a.length;o++)((T=a[o]).reactions??(T.reactions=[])).push(t)}else a!==null&&v<a.length&&(M(t,v),a.length=v);return l}finally{c=n,v=r,w=e,f=s,k=u}}function an(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&A&&(p(n,N),n.f&(I|Y)||(n.f^=Y),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)an(t,r[e])}function Q(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;j(r,n),r=e}}function V(t){var n=t.f;if(!(n&q)){p(t,h);var r=t.ctx,e=_,s=i;_=t,i=r;try{n&ft||Q(t),It(t);var u=Ft(t);t.teardown=typeof u=="function"?u:null,t.version=Dt}catch(l){ln(l)}finally{_=e,i=s}}}function Mt(){S>1e3&&(S=0,$t()),S++}function Lt(t){var n=t.length;if(n!==0){Mt();var r=g;g=!0;try{for(var e=0;e<n;e++){var s=t[e];if(s.first===null&&!(s.f&E))at([s]);else{var u=[];bt(s,u),at(u)}}}finally{g=r}}}function at(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(q|O))&&L(e)&&(V(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}}function on(){if(F=!1,S>1001)return;const t=y;y=[],Lt(t),F||(S=0)}function G(t){b===qt&&(F||(F=!0,queueMicrotask(on)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&E){if(!(r&h))return;p(n,N)}}y.push(n)}function bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,u=(s&(q|O))===0,l=(s&E)!==0,a=(s&h)!==0,o=r.first;if(u&&(!l||!a)){if(l&&p(r,h),s&C){if(!l&&L(r)&&(V(r),o=r.first),o!==null){r=o;continue}}else if(s&it)if(l||a){if(o!==null){r=o;continue}}else e.push(r)}var T=r.next;if(T===null){let P=r.parent;for(;P!==null;){if(t===P)break t;var tt=P.next;if(tt!==null){r=tt;continue t}P=P.parent}}r=T}for(var K=0;K<e.length;K++)o=e[K],n.push(o),bt(o,n)}function Yt(t){var n=b,r=y;try{Mt();const s=[];b=sn,y=s,F=!1,Lt(r);var e=t==null?void 0:t();return tn(),(y.length>0||s.length>0)&&Yt(),S=0,e}finally{b=n,y=r}}async function ar(){await Promise.resolve(),Yt()}function or(t){var n=t.f;if(n&q)return t.v;if(f!==null){var r=f.deps;c===null&&r!==null&&r[v]===t?v++:c===null?c=[t]:c.push(t),w!==null&&_!==null&&_.f&h&&!(_.f&E)&&w.includes(t)&&(p(_,m),G(_))}if(n&A){var e=t;L(e)&&Nt(e)}return t.v}function ir(t){const n=f;try{return f=null,t()}finally{f=n}}const fn=~(m|N|h);function p(t,n){t.f=t.f&fn|n}function fr(t){return Ht().get(t)}function _r(t,n){return Ht().set(t,n),n}function Ht(t){return i===null&&en(),i.c??(i.c=new Map(_n(i)||void 0))}function _n(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function cr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:pt(!1)})}function vr(t){const n=i;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)At(e[r])}i=n.p,n.m=!0}return{}}export{At as $,nt as A,_ as B,Rn as C,En as D,_t as E,Vn as F,dt as G,Bt as H,zt as I,Et as J,An as K,Zn as L,vn as M,Jn as N,cr as O,vr as P,i as Q,_r as R,Tn as S,fr as T,bn as U,Xn as V,ir as W,xt as X,yn as Y,ur as Z,Kn as _,nr as a,en as a0,wn as a1,kn as a2,Qn as a3,Gn as a4,Un as a5,$n as a6,Bn as a7,Mn as a8,Ln as a9,O as aa,Sn as ab,Cn as ac,On as ad,kt as ae,Jt as af,nn as ag,xn as ah,mn as ai,Dn as aj,vt as ak,Nn as al,qn as am,Pn as an,lr as ao,Fn as ap,Yt as aq,zn as ar,ar as as,jt as at,tr as b,d as c,j as d,Tt as e,Wt as f,R as g,x as h,H as i,$ as j,Hn as k,Xt as l,er as m,pt as n,or as o,rr as p,gn as q,jn as r,Yn as s,Wn as t,sr as u,pn as v,cn as w,hn as x,dn as y,In as z};