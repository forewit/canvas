import{U as g,V as q,W as N,X as U,Y as x,l as s,m as y,Z as B,_ as M,$ as T,o as A,n as E,a0 as Y,a1 as $,a2 as V,N as P,a3 as Z,u as w}from"./runtime.DPf4mIKn.js";import{p as z}from"./if.BUEQ1AeY.js";function X(a,r,t,c){var R;var p=(t&B)!==0,_=(t&M)!==0,O=(t&T)!==0,h=(t&$)!==0,l=a[r],i=(R=g(a,r))==null?void 0:R.set,v=c,o=!0,I=()=>(h&&o&&(o=!1,v=A(c)),v);l===void 0&&c!==void 0&&(i&&_&&q(),l=I(),i&&i(l));var n;if(_)n=()=>{var e=a[r];return e===void 0?I():(o=!0,e)};else{var S=(p?E:Y)(()=>a[r]);S.f|=N,n=()=>{var e=s(S);return e!==void 0&&(v=void 0),e===void 0?v:e}}if(!(t&U))return n;if(i){var D=a.$$legacy;return function(e,u){return arguments.length>0?((!_||!u||D)&&i(u?n():e),e):n()}}var d=!1,m=V(l),f=E(()=>{var e=n(),u=s(m);return d?(d=!1,u):m.v=e});return p||(f.equals=x),function(e,u){var L=s(f);if(arguments.length>0){const b=u?s(f):_&&O?z(e):e;return f.equals(b)||(d=!0,y(m,b),s(f)),e}return L}}function j(a){P===null&&Z(),P.l!==null?C(P).m.push(a):w(()=>{const r=A(a);if(typeof r=="function")return r})}function C(a){var r=a.l;return r.u??(r.u={a:[],b:[],m:[]})}export{j as o,X as p};
