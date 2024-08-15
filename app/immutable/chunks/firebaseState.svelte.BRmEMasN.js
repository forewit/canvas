import{s as io,g as Ti,c as so}from"./runtime.atawwWdS.js";import{p as Yc}from"./proxy.Clc3I-nX.js";import{u as Ye}from"./userState.svelte.DT03alZW.js";import{p as Le}from"./pagesState.svelte.BbUgTMB7.js";var Xc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_p=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,u=i+2<r.length,d=u?r[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let I=(c&15)<<2|d>>6,R=d&63;u||(R=64,o||(I=64)),n.push(t[f],t[m],t[I],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Fl(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_p(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const d=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||d==null||m==null)throw new yp;const I=s<<2|c>>4;if(n.push(I),d!==64){const R=c<<4&240|d>>2;if(n.push(R),m!==64){const V=d<<6&192|m;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class yp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ip=function(r){const e=Fl(r);return Ul.encodeByteArray(e,!0)},Bl=function(r){return Ip(r).replace(/\./g,"")},ql=function(r){try{return Ul.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=()=>Ep().__FIREBASE_DEFAULTS__,Tp=()=>{if(typeof process>"u"||typeof Xc>"u")return;const r=Xc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},wp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ql(r[1]);return e&&JSON.parse(e)},us=()=>{try{return vp()||Tp()||wp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ap=r=>{var e,t;return(t=(e=us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},zl=()=>{var r;return(r=us())===null||r===void 0?void 0:r.config},jl=r=>{var e;return(e=us())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Rp(){var r;const e=(r=us())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dp(){const r=pe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function $l(){return!Rp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kl(){try{return typeof indexedDB=="object"}catch{return!1}}function Vp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="FirebaseError";class st extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=kp,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xp(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new st(i,c,n)}}function xp(r,e){return r.replace(Np,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Np=/\{\$([^}]+)}/g;function Op(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(Zc(s)&&Zc(o)){if(!Nr(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Zc(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Er(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vr(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Mp(r,e){const t=new Lp(r,e);return t.subscribe.bind(t)}class Lp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Fp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=oo),i.error===void 0&&(i.error=oo),i.complete===void 0&&(i.complete=oo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function oo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(r){return r&&r._delegate?r._delegate:r}class Qt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new bp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qp(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bp(r){return r===qt?void 0:r}function qp(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Up(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));const jp={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},$p=W.INFO,Kp={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Gp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Kp[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zo{constructor(e){this.name=e,this._logLevel=$p,this._logHandler=Gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Wp=(r,e)=>e.some(t=>r instanceof t);let eu,tu;function Hp(){return eu||(eu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qp(){return tu||(tu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gl=new WeakMap,Eo=new WeakMap,Wl=new WeakMap,ao=new WeakMap,ea=new WeakMap;function Jp(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Et(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Gl.set(t,r)}).catch(()=>{}),ea.set(e,r),e}function Yp(r){if(Eo.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});Eo.set(r,e)}let vo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Eo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Wl.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Et(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Xp(r){vo=r(vo)}function Zp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(co(this),e,...t);return Wl.set(n,e.sort?e.sort():[e]),Et(n)}:Qp().includes(r)?function(...e){return r.apply(co(this),e),Et(Gl.get(this))}:function(...e){return Et(r.apply(co(this),e))}}function em(r){return typeof r=="function"?Zp(r):(r instanceof IDBTransaction&&Yp(r),Wp(r,Hp())?new Proxy(r,vo):r)}function Et(r){if(r instanceof IDBRequest)return Jp(r);if(ao.has(r))return ao.get(r);const e=em(r);return e!==r&&(ao.set(r,e),ea.set(e,r)),e}const co=r=>ea.get(r);function tm(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=Et(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Et(o.result),u.oldVersion,u.newVersion,Et(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const nm=["get","getKey","getAll","getAllKeys","count"],rm=["put","add","delete","clear"],uo=new Map;function nu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=rm.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||nm.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return uo.set(e,s),s}Xp(r=>({...r,get:(e,t,n)=>nu(e,t)||r.get(e,t,n),has:(e,t)=>!!nu(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sm(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function sm(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const To="@firebase/app",ru="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Zo("@firebase/app"),om="@firebase/app-compat",am="@firebase/analytics-compat",cm="@firebase/analytics",um="@firebase/app-check-compat",lm="@firebase/app-check",hm="@firebase/auth",dm="@firebase/auth-compat",fm="@firebase/database",pm="@firebase/database-compat",mm="@firebase/functions",gm="@firebase/functions-compat",_m="@firebase/installations",ym="@firebase/installations-compat",Im="@firebase/messaging",Em="@firebase/messaging-compat",vm="@firebase/performance",Tm="@firebase/performance-compat",wm="@firebase/remote-config",Am="@firebase/remote-config-compat",bm="@firebase/storage",Sm="@firebase/storage-compat",Rm="@firebase/firestore",Pm="@firebase/vertexai-preview",Cm="@firebase/firestore-compat",Dm="firebase",Vm="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="[DEFAULT]",km={[To]:"fire-core",[om]:"fire-core-compat",[cm]:"fire-analytics",[am]:"fire-analytics-compat",[lm]:"fire-app-check",[um]:"fire-app-check-compat",[hm]:"fire-auth",[dm]:"fire-auth-compat",[fm]:"fire-rtdb",[pm]:"fire-rtdb-compat",[mm]:"fire-fn",[gm]:"fire-fn-compat",[_m]:"fire-iid",[ym]:"fire-iid-compat",[Im]:"fire-fcm",[Em]:"fire-fcm-compat",[vm]:"fire-perf",[Tm]:"fire-perf-compat",[wm]:"fire-rc",[Am]:"fire-rc-compat",[bm]:"fire-gcs",[Sm]:"fire-gcs-compat",[Rm]:"fire-fst",[Cm]:"fire-fst-compat",[Pm]:"fire-vertex","fire-js":"fire-js",[Dm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Map,Ao=new Map,bo=new Map;function iu(r,e){try{r.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Cn(r){const e=r.name;if(bo.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,r);for(const t of Yt.values())iu(t,r);for(const t of Ao.values())iu(t,r);return!0}function ta(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Xe(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Hr("app","Firebase",xm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=Vm;function So(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:wo,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(t||(t=zl()),!t)throw vt.create("no-options");const s=Yt.get(i);if(s){if(Nr(t,s.options)&&Nr(n,s.config))return s;throw vt.create("duplicate-app",{appName:i})}const o=new zp(i);for(const u of bo.values())o.addComponent(u);const c=new Nm(t,n,o);return Yt.set(i,c),c}function Hl(r=wo){const e=Yt.get(r);if(!e&&r===wo&&zl())return So();if(!e)throw vt.create("no-app",{appName:r});return e}function Om(){return Array.from(Yt.values())}async function Mm(r){let e=!1;const t=r.name;Yt.has(t)?(e=!0,Yt.delete(t)):Ao.has(t)&&r.decRefCount()<=0&&(Ao.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function Tt(r,e,t){var n;let i=(n=km[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(c.join(" "));return}Cn(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="firebase-heartbeat-database",Fm=1,Or="firebase-heartbeat-store";let lo=null;function Ql(){return lo||(lo=tm(Lm,Fm,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Or)}catch(t){console.warn(t)}}}}).catch(r=>{throw vt.create("idb-open",{originalErrorMessage:r.message})})),lo}async function Um(r){try{const t=(await Ql()).transaction(Or),n=await t.objectStore(Or).get(Jl(r));return await t.done,n}catch(e){if(e instanceof st)Jt.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(t.message)}}}async function su(r,e){try{const n=(await Ql()).transaction(Or,"readwrite");await n.objectStore(Or).put(e,Jl(r)),await n.done}catch(t){if(t instanceof st)Jt.warn(t.message);else{const n=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(n.message)}}}function Jl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=1024,qm=30*24*60*60*1e3;class zm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $m(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ou();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=qm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ou(),{heartbeatsToSend:n,unsentEntries:i}=jm(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ou(){return new Date().toISOString().substring(0,10)}function jm(r,e=Bm){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),au(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),au(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class $m{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kl()?Vp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Um(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function au(r){return Bl(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(r){Cn(new Qt("platform-logger",e=>new im(e),"PRIVATE")),Cn(new Qt("heartbeat",e=>new zm(e),"PRIVATE")),Tt(To,ru,r),Tt(To,ru,"esm2017"),Tt("fire-js","")}Km("");var Gm="firebase",Wm="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(Gm,Wm,"app");function na(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hm=Yl,Xl=new Hr("auth","Firebase",Yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Zo("@firebase/auth");function Qm(r,...e){ji.logLevel<=W.WARN&&ji.warn(`Auth (${$n}): ${r}`,...e)}function Di(r,...e){ji.logLevel<=W.ERROR&&ji.error(`Auth (${$n}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(r,...e){throw ra(r,...e)}function Ke(r,...e){return ra(r,...e)}function Zl(r,e,t){const n=Object.assign(Object.assign({},Hm()),{[e]:t});return new Hr("auth","Firebase",n).create(e,{appName:r.name})}function wt(r){return Zl(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ra(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Xl.create(r,...e)}function j(r,e,...t){if(!r)throw ra(e,...t)}function Ze(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Di(e),new Error(e)}function rt(r,e){r||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Jm(){return cu()==="http:"||cu()==="https:"}function cu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jm()||Pp()||"connection"in navigator)?navigator.onLine:!0}function Xm(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.shortDelay=e,this.longDelay=t,rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Sp()||Cp()}get(){return Ym()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(r,e){rt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Jr(3e4,6e4);function an(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Vt(r,e,t,n,i={}){return th(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=Qr(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode),eh.fetch()(nh(r,r.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function th(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Zm),e);try{const i=new ng(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wi(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wi(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw wi(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Zl(r,f,d);ze(r,f)}}catch(i){if(i instanceof st)throw i;ze(r,"network-request-failed",{message:String(i)})}}async function ls(r,e,t,n,i={}){const s=await Vt(r,e,t,n,i);return"mfaPendingCredential"in s&&ze(r,"multi-factor-auth-required",{_serverResponse:s}),s}function nh(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?ia(r.config,i):`${r.config.apiScheme}://${i}`}function tg(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ng{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ke(this.auth,"network-request-failed")),eg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ke(r,e,n);return i.customData._tokenResponse=t,i}function uu(r){return r!==void 0&&r.enterprise!==void 0}class rg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ig(r,e){return Vt(r,"GET","/v2/recaptchaConfig",an(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(r,e){return Vt(r,"POST","/v1/accounts:delete",e)}async function rh(r,e){return Vt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function og(r,e=!1){const t=Se(r),n=await t.getIdToken(e),i=sa(n);j(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Rr(ho(i.auth_time)),issuedAtTime:Rr(ho(i.iat)),expirationTime:Rr(ho(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ho(r){return Number(r)*1e3}function sa(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const i=ql(t);return i?JSON.parse(i):(Di("Failed to decode base64 JWT payload"),null)}catch(i){return Di("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lu(r){const e=sa(r);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof st&&ag(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function ag({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Mr(r,rh(t,{idToken:n}));j(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ih(s.providerUserInfo):[],c=lg(r.providerData,o),u=r.isAnonymous,d=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Po(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function ug(r){const e=Se(r);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lg(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function ih(r){return r.map(e=>{var{providerId:t}=e,n=na(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(r,e){const t=await th(r,{},async()=>{const n=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=nh(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",eh.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dg(r,e){return Vt(r,"POST","/v2/accounts:revokeToken",an(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=lu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await hg(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new bn;return n&&(j(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(r,e){j(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class et{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=na(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Po(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return og(this,e)}reload(){return ug(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $i(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(wt(this.auth));const e=await this.getIdToken();return await Mr(this,sg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,u,d,f;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,V=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,M=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:Q,isAnonymous:X,providerData:G,stsTokenManager:E}=t;j(B&&E,e,"internal-error");const g=bn.fromJSON(this.name,E);j(typeof B=="string",e,"internal-error"),ht(m,e.name),ht(I,e.name),j(typeof Q=="boolean",e,"internal-error"),j(typeof X=="boolean",e,"internal-error"),ht(R,e.name),ht(V,e.name),ht(x,e.name),ht(D,e.name),ht(M,e.name),ht(F,e.name);const y=new et({uid:B,auth:e,email:I,emailVerified:Q,displayName:m,isAnonymous:X,photoURL:V,phoneNumber:R,tenantId:x,stsTokenManager:g,createdAt:M,lastLoginAt:F});return G&&Array.isArray(G)&&(y.providerData=G.map(v=>Object.assign({},v))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new bn;i.updateFromServerResponse(t);const s=new et({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await $i(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ih(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new bn;c.updateFromIdToken(n);const u=new et({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Po(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new Map;function tt(r){rt(r instanceof Function,"Expected a class definition");let e=hu.get(r);return e?(rt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,hu.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sh.type="NONE";const du=sh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(r,e,t){return`firebase:${r}:${e}:${t}`}class Sn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Vi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Sn(tt(du),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||tt(du);const o=Vi(n,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(o);if(f){const m=et._fromJSON(e,f);d!==s&&(c=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Sn(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Sn(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ch(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lh(e))return"Blackberry";if(hh(e))return"Webos";if(oa(e))return"Safari";if((e.includes("chrome/")||ah(e))&&!e.includes("edge/"))return"Chrome";if(uh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function oh(r=pe()){return/firefox\//i.test(r)}function oa(r=pe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ah(r=pe()){return/crios\//i.test(r)}function ch(r=pe()){return/iemobile/i.test(r)}function uh(r=pe()){return/android/i.test(r)}function lh(r=pe()){return/blackberry/i.test(r)}function hh(r=pe()){return/webos/i.test(r)}function hs(r=pe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function fg(r=pe()){var e;return hs(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pg(){return Dp()&&document.documentMode===10}function dh(r=pe()){return hs(r)||uh(r)||hh(r)||lh(r)||/windows phone/i.test(r)||ch(r)}function mg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(r,e=[]){let t;switch(r){case"Browser":t=fu(pe());break;case"Worker":t=`${fu(pe())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$n}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(r,e={}){return Vt(r,"GET","/v2/passwordPolicy",an(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=6;class Ig{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:yg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pu(this),this.idTokenSubscription=new pu(this),this.beforeStateQueue=new gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await rh(this,{idToken:e}),n=await et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(wt(this));const t=e?Se(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _g(this),t=new Ig(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await dg(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Qm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Kn(r){return Se(r)}class pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mp(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vg(r){ds=r}function ph(r){return ds.loadJS(r)}function Tg(){return ds.recaptchaEnterpriseScript}function wg(){return ds.gapiScript}function Ag(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const bg="recaptcha-enterprise",Sg="NO_RECAPTCHA";class Rg{constructor(e){this.type=bg,this.auth=Kn(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{ig(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new rg(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;uu(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Sg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&uu(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Tg();u.length!==0&&(u+=c),ph(u).then(()=>{i(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function mu(r,e,t,n=!1){const i=new Rg(r);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gu(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mu(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mu(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(r,e){const t=ta(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Nr(s,e??{}))return i;ze(i,"already-initialized")}return t.initialize({options:e})}function Cg(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(tt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Dg(r,e,t){const n=Kn(r);j(n._canInitEmulator,n,"emulator-config-failed"),j(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=mh(e),{host:o,port:c}=Vg(e),u=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${o}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),kg()}function mh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Vg(r){const e=mh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:_u(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:_u(o)}}}function _u(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function kg(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function xg(r,e){return Vt(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(r,e){return ls(r,"POST","/v1/accounts:signInWithPassword",an(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(r,e){return ls(r,"POST","/v1/accounts:signInWithEmailLink",an(r,e))}async function Mg(r,e){return ls(r,"POST","/v1/accounts:signInWithEmailLink",an(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends aa{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Lr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Lr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,t,"signInWithPassword",Ng);case"emailLink":return Og(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,n,"signUpPassword",xg);case"emailLink":return Mg(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(r,e){return ls(r,"POST","/v1/accounts:signInWithIdp",an(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="http://localhost";class Xt extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=na(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Xt(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:Lg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ug(r){const e=Er(vr(r)).link,t=e?Er(vr(e)).deep_link_id:null,n=Er(vr(r)).deep_link_id;return(n?Er(vr(n)).link:null)||n||t||e||r}class ca{constructor(e){var t,n,i,s,o,c;const u=Er(vr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(n=u.oobCode)!==null&&n!==void 0?n:null,m=Fg((i=u.mode)!==null&&i!==void 0?i:null);j(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ug(e);try{return new ca(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,t){return Lr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ca.parseLink(t);return j(n,"argument-error"),Lr._fromEmailAndCode(e,n.code,n.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends gh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Yr{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Yr{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Yr{constructor(){super("twitter.com")}static credential(e,t){return Xt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await et._fromIdTokenResponse(e,n,i),o=yu(n);return new Dn({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=yu(n);return new Dn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function yu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends st{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ki.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ki(e,t,n,i)}}function _h(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ki._fromErrorAndOperation(r,s,e,n):s})}async function Bg(r,e,t=!1){const n=await Mr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Dn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(r,e,t=!1){const{auth:n}=r;if(Xe(n.app))return Promise.reject(wt(n));const i="reauthenticate";try{const s=await Mr(r,_h(n,i,e,r),t);j(s.idToken,n,"internal-error");const o=sa(s.idToken);j(o,n,"internal-error");const{sub:c}=o;return j(r.uid===c,n,"user-mismatch"),Dn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ze(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(r,e,t=!1){if(Xe(r.app))return Promise.reject(wt(r));const n="signIn",i=await _h(r,n,e),s=await Dn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function zg(r,e){return yh(Kn(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(r){const e=Kn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function jv(r,e,t){return Xe(r.app)?Promise.reject(wt(r)):zg(Se(r),Gn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&jg(r),n})}function $g(r,e,t,n){return Se(r).onIdTokenChanged(e,t,n)}function Kg(r,e,t){return Se(r).beforeAuthStateChanged(e,t)}const Gi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gi,"1"),this.storage.removeItem(Gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){const r=pe();return oa(r)||hs(r)}const Wg=1e3,Hg=10;class Eh extends Ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gg()&&mg(),this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);pg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hg):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Wg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eh.type="LOCAL";const Qg=Eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends Ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vh.type="SESSION";const Th=vh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new fs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,s)),u=await Jg(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const d=ua("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const I=m;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(I.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function Xg(r){Ge().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Zg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e_(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function t_(){return wh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebaseLocalStorageDb",n_=1,Wi="firebaseLocalStorage",bh="fbase_key";class Xr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ps(r,e){return r.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function r_(){const r=indexedDB.deleteDatabase(Ah);return new Xr(r).toPromise()}function Co(){const r=indexedDB.open(Ah,n_);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Wi,{keyPath:bh})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Wi)?e(n):(n.close(),await r_(),e(await Co()))})})}async function Iu(r,e,t){const n=ps(r,!0).put({[bh]:e,value:t});return new Xr(n).toPromise()}async function i_(r,e){const t=ps(r,!1).get(e),n=await new Xr(t).toPromise();return n===void 0?null:n.value}function Eu(r,e){const t=ps(r,!0).delete(e);return new Xr(t).toPromise()}const s_=800,o_=3;class Sh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Co(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>o_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(t_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Zg(),!this.activeServiceWorker)return;this.sender=new Yg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||e_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Co();return await Iu(e,Gi,"1"),await Eu(e,Gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>i_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Eu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ps(i,!1).getAll();return new Xr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sh.type="LOCAL";const a_=Sh;new Jr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(r,e){return e?tt(e):(j(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function u_(r){return yh(r.auth,new la(r),r.bypassAuthState)}function l_(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),qg(t,new la(r),r.bypassAuthState)}async function h_(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),Bg(t,new la(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return u_;case"linkViaPopup":case"linkViaRedirect":return h_;case"reauthViaPopup":case"reauthViaRedirect":return l_;default:ze(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Jr(2e3,1e4);class wn extends Rh{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d_.get())};e()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="pendingRedirect",ki=new Map;class p_ extends Rh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ki.get(this.auth._key());if(!e){try{const n=await m_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ki.set(this.auth._key(),e)}return this.bypassAuthState||ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m_(r,e){const t=y_(e),n=__(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function g_(r,e){ki.set(r._key(),e)}function __(r){return tt(r._redirectPersistence)}function y_(r){return Vi(f_,r.config.apiKey,r.name)}async function I_(r,e,t=!1){if(Xe(r.app))return Promise.reject(wt(r));const n=Kn(r),i=c_(n,e),o=await new p_(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=10*60*1e3;class v_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ph(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ke(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E_&&this.cachedEventUids.clear(),this.cachedEventUids.has(vu(e))}saveEventToCache(e){this.cachedEventUids.add(vu(e)),this.lastProcessedEventTime=Date.now()}}function vu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Ph({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T_(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ph(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(r,e={}){return Vt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b_=/^https?/;async function S_(r){if(r.config.emulator)return;const{authorizedDomains:e}=await w_(r);for(const t of e)try{if(R_(t))return}catch{}ze(r,"unauthorized-domain")}function R_(r){const e=Ro(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!b_.test(t))return!1;if(A_.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Jr(3e4,6e4);function Tu(){const r=Ge().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function C_(r){return new Promise((e,t)=>{var n,i,s;function o(){Tu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tu(),t(Ke(r,"network-request-failed"))},timeout:P_.get()})}if(!((i=(n=Ge().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)o();else{const c=Ag("iframefcb");return Ge()[c]=()=>{gapi.load?o():t(Ke(r,"network-request-failed"))},ph(`${wg()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw xi=null,e})}let xi=null;function D_(r){return xi=xi||C_(r),xi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Jr(5e3,15e3),k_="__/auth/iframe",x_="emulator/auth/iframe",N_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M_(r){const e=r.config;j(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ia(e,x_):`https://${r.config.authDomain}/${k_}`,n={apiKey:e.apiKey,appName:r.name,v:$n},i=O_.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Qr(n).slice(1)}`}async function L_(r){const e=await D_(r),t=Ge().gapi;return j(t,r,"internal-error"),e.open({where:document.body,url:M_(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N_,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Ke(r,"network-request-failed"),c=Ge().setTimeout(()=>{s(o)},V_.get());function u(){Ge().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U_=500,B_=600,q_="_blank",z_="http://localhost";class wu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j_(r,e,t,n=U_,i=B_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},F_),{width:n.toString(),height:i.toString(),top:s,left:o}),d=pe().toLowerCase();t&&(c=ah(d)?q_:t),oh(d)&&(e=e||z_,u.scrollbars="yes");const f=Object.entries(u).reduce((I,[R,V])=>`${I}${R}=${V},`,"");if(fg(d)&&c!=="_self")return $_(e||"",c),new wu(null);const m=window.open(e||"",c,f);j(m,r,"popup-blocked");try{m.focus()}catch{}return new wu(m)}function $_(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="__/auth/handler",G_="emulator/auth/handler",W_=encodeURIComponent("fac");async function Au(r,e,t,n,i,s){j(r.config.authDomain,r,"auth-domain-config-required"),j(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:$n,eventId:i};if(e instanceof gh){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Op(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Yr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),d=u?`#${W_}=${encodeURIComponent(u)}`:"";return`${H_(r)}?${Qr(c).slice(1)}${d}`}function H_({config:r}){return r.emulator?ia(r,G_):`https://${r.authDomain}/${K_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="webStorageSupport";class Q_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Th,this._completeRedirectFn=I_,this._overrideRedirectResult=g_}async _openPopup(e,t,n,i){var s;rt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Au(e,t,n,Ro(),i);return j_(e,o,ua())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Au(e,t,n,Ro(),i);return Xg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(rt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await L_(e),n=new v_(e);return t.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fo,{type:fo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fo];o!==void 0&&t(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=S_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dh()||oa()||hs()}}const J_=Q_;var bu="@firebase/auth",Su="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Z_(r){Cn(new Qt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fh(r)},d=new Eg(n,i,s,u);return Cg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Cn(new Qt("auth-internal",e=>{const t=Kn(e.getProvider("auth").getImmediate());return(n=>new Y_(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(bu,Su,X_(r)),Tt(bu,Su,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=5*60,ty=jl("authIdTokenMaxAge")||ey;let Ru=null;const ny=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ty)return;const i=t==null?void 0:t.token;Ru!==i&&(Ru=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ry(r=Hl()){const e=ta(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Pg(r,{popupRedirectResolver:J_,persistence:[a_,Qg,Th]}),n=jl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=ny(s.toString());Kg(t,o,()=>o(t.currentUser)),$g(t,c=>o(c))}}const i=Ap("auth");return i&&Dg(t,`http://${i}`),t}function iy(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}vg({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Ke("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",iy().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Z_("Browser");var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,Ch;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(v,T,b){for(var _=Array(arguments.length-2),He=2;He<arguments.length;He++)_[He-2]=arguments[He];return g.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)v[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;16>T;++T)v[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],T=E.g[2];var b=E.g[3],_=g+(b^y&(T^b))+v[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=b+(T^g&(y^T))+v[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=T+(y^b&(g^y))+v[2]+606105819&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(g^T&(b^g))+v[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(b^y&(T^b))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(T^g&(y^T))+v[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=T+(y^b&(g^y))+v[6]+2821735955&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(g^T&(b^g))+v[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(b^y&(T^b))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(T^g&(y^T))+v[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=T+(y^b&(g^y))+v[10]+4294925233&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(g^T&(b^g))+v[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(b^y&(T^b))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(T^g&(y^T))+v[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=T+(y^b&(g^y))+v[14]+2792965006&4294967295,T=b+(_<<17&4294967295|_>>>15),_=y+(g^T&(b^g))+v[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^b&(y^T))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(g^y))+v[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(b^g))+v[11]+643717713&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(T^b))+v[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^b&(y^T))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(g^y))+v[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(b^g))+v[15]+3634488961&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(T^b))+v[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^b&(y^T))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(g^y))+v[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(b^g))+v[3]+4107603335&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(T^b))+v[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^b&(y^T))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^T&(g^y))+v[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(b^g))+v[7]+1735328473&4294967295,T=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(T^b))+v[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^b)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^T)+v[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=T+(b^g^y)+v[11]+1839030562&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^g)+v[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^b)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^T)+v[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=T+(b^g^y)+v[7]+4139469664&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^g)+v[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^b)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^T)+v[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=T+(b^g^y)+v[3]+3572445317&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^g)+v[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^b)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^T)+v[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=T+(b^g^y)+v[15]+530742520&4294967295,T=b+(_<<16&4294967295|_>>>16),_=y+(T^b^g)+v[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~b))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~T))+v[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=T+(g^(b|~y))+v[14]+2878612391&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~g))+v[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~b))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~T))+v[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=T+(g^(b|~y))+v[10]+4293915773&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~g))+v[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~b))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~T))+v[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=T+(g^(b|~y))+v[6]+2734768916&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~g))+v[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~b))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~T))+v[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=T+(g^(b|~y))+v[2]+718787259&4294967295,T=b+(_<<15&4294967295|_>>>17),_=y+(b^(T|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+b&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,v=this.B,T=this.h,b=0;b<g;){if(T==0)for(;b<=y;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(v[T++]=E.charCodeAt(b++),T==this.blockSize){i(this,v),T=0;break}}else for(;b<g;)if(v[T++]=E[b++],T==this.blockSize){i(this,v),T=0;break}}this.h=T,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)E[y++]=this.g[g]>>>v&255;return E};function s(E,g){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function o(E,g){this.h=g;for(var y=[],v=!0,T=E.length-1;0<=T;T--){var b=E[T]|0;v&&b==g||(y[T]=b,v=!1)}this.g=y}var c={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return D(d(-E));for(var g=[],y=1,v=0;E>=y;v++)g[v]=E/y|0,y*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return D(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),v=m,T=0;T<E.length;T+=8){var b=Math.min(8,E.length-T),_=parseInt(E.substring(T,T+b),g);8>b?(b=d(Math.pow(g,b)),v=v.j(b).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var m=u(0),I=u(1),R=u(16777216);r=o.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var g=d(Math.pow(E,6)),y=this,v="";;){var T=Q(y,g).g;y=M(y,T.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=T,V(y))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=M(this,E),x(E)?-1:V(E)?0:1};function D(E){for(var g=E.g.length,y=[],v=0;v<g;v++)y[v]=~E.g[v];return new o(y,~E.h).add(I)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0,T=0;T<=g;T++){var b=v+(this.i(T)&65535)+(E.i(T)&65535),_=(b>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);v=_>>>16,b&=65535,_&=65535,y[T]=_<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function M(E,g){return E.add(D(g))}r.j=function(E){if(V(this)||V(E))return m;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<E.g.length;T++){var b=this.i(v)>>>16,_=this.i(v)&65535,He=E.i(T)>>>16,Yn=E.i(T)&65535;y[2*v+2*T]+=_*Yn,F(y,2*v+2*T),y[2*v+2*T+1]+=b*Yn,F(y,2*v+2*T+1),y[2*v+2*T+1]+=_*He,F(y,2*v+2*T+1),y[2*v+2*T+2]+=b*He,F(y,2*v+2*T+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new o(y,0)};function F(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function B(E,g){this.g=E,this.h=g}function Q(E,g){if(V(g))throw Error("division by zero");if(V(E))return new B(m,m);if(x(E))return g=Q(D(E),g),new B(D(g.g),D(g.h));if(x(g))return g=Q(E,D(g)),new B(D(g.g),g.h);if(30<E.g.length){if(x(E)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=I,v=g;0>=v.l(E);)y=X(y),v=X(v);var T=G(y,1),b=G(v,1);for(v=G(v,2),y=G(y,2);!V(v);){var _=b.add(v);0>=_.l(E)&&(T=T.add(y),b=_),v=G(v,1),y=G(y,1)}return g=M(E,T.j(g)),new B(T,g)}for(T=m;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=d(y),_=b.j(g);x(_)||0<_.l(E);)y-=v,b=d(y),_=b.j(g);V(b)&&(b=I),T=T.add(b),E=M(E,_)}return new B(T,E)}r.A=function(E){return Q(this,E).h},r.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&E.i(v);return new o(y,this.h&E.h)},r.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|E.i(v);return new o(y,this.h|E.h)},r.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^E.i(v);return new o(y,this.h^E.h)};function X(E){for(var g=E.g.length+1,y=[],v=0;v<g;v++)y[v]=E.i(v)<<1|E.i(v-1)>>>31;return new o(y,E.h)}function G(E,g){var y=g>>5;g%=32;for(var v=E.g.length-y,T=[],b=0;b<v;b++)T[b]=0<g?E.i(b+y)>>>g|E.i(b+y+1)<<32-g:E.i(b+y);return new o(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ch=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Wt=o}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dh,Vh,Tr,kh,Ni,Do,xh,Nh,Oh;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,h){return a==Array.prototype||a==Object.prototype||(a[l]=h.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ai=="object"&&Ai];for(var l=0;l<a.length;++l){var h=a[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function i(a,l){if(l)e:{var h=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var w=a[p];if(!(w in h))break e;h=h[w]}a=a[a.length-1],p=h[a],l=l(p),l!=p&&l!=null&&e(h,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var h=0,p=!1,w={next:function(){if(!p&&h<a.length){var S=h++;return{value:l(S,a[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function d(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,h){return a.call.apply(a.bind,arguments)}function m(a,l,h){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),a.apply(l,w)}}return function(){return a.apply(l,arguments)}}function I(a,l,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,I.apply(null,arguments)}function R(a,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function V(a,l){function h(){}h.prototype=l.prototype,a.aa=l.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(p,w,S){for(var k=Array(arguments.length-2),re=2;re<arguments.length;re++)k[re-2]=arguments[re];return l.prototype[w].apply(p,k)}}function x(a){const l=a.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=a[p];return h}return[]}function D(a,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const w=a.length||0,S=p.length||0;a.length=w+S;for(let k=0;k<S;k++)a[w+k]=p[k]}else a.push(p)}}class M{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var X=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function G(a,l,h){for(const p in a)l.call(h,a[p],p,a)}function E(a,l){for(const h in a)l.call(void 0,a[h],h,a)}function g(a){const l={};for(const h in a)l[h]=a[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,l){let h,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(h in p)a[h]=p[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(p,h)&&(a[h]=p[h])}}function T(a){var l=1;a=a.split(":");const h=[];for(;0<l&&a.length;)h.push(a.shift()),l--;return a.length&&h.push(a.join(":")),h}function b(a){c.setTimeout(()=>{throw a},0)}function _(){var a=Ns;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class He{constructor(){this.h=this.g=null}add(l,h){const p=Yn.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Yn=new M(()=>new Mf,a=>a.reset());class Mf{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Xn,Zn=!1,Ns=new He,Ya=()=>{const a=c.Promise.resolve(void 0);Xn=()=>{a.then(Lf)}};var Lf=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(h){b(h)}var l=Yn;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}Zn=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Ff=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return a}();function er(a,l){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(X){e:{try{Q(l.nodeName);var w=!0;break e}catch{}w=!1}w||(l=null)}}else h=="mouseover"?l=a.fromElement:h=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Uf[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&er.aa.h.call(this)}}V(er,Ie);var Uf={2:"touch",3:"pen",4:"mouse"};er.prototype.h=function(){er.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ii="closure_listenable_"+(1e6*Math.random()|0),Bf=0;function qf(a,l,h,p,w){this.listener=a,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=w,this.key=++Bf,this.da=this.fa=!1}function si(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function oi(a){this.src=a,this.g={},this.h=0}oi.prototype.add=function(a,l,h,p,w){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var k=Ms(a,l,p,w);return-1<k?(l=a[k],h||(l.fa=!1)):(l=new qf(l,this.src,S,!!p,w),l.fa=h,a.push(l)),l};function Os(a,l){var h=l.type;if(h in a.g){var p=a.g[h],w=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=w)&&Array.prototype.splice.call(p,w,1),S&&(si(l),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Ms(a,l,h,p){for(var w=0;w<a.length;++w){var S=a[w];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return w}return-1}var Ls="closure_lm_"+(1e6*Math.random()|0),Fs={};function Xa(a,l,h,p,w){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Xa(a,l[S],h,p,w);return null}return h=tc(h),a&&a[ii]?a.K(l,h,d(p)?!!p.capture:!!p,w):zf(a,l,h,!1,p,w)}function zf(a,l,h,p,w,S){if(!l)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,re=Bs(a);if(re||(a[Ls]=re=new oi(a)),h=re.add(l,h,p,k,S),h.proxy)return h;if(p=jf(),h.proxy=p,p.src=a,p.listener=h,a.addEventListener)Ff||(w=k),w===void 0&&(w=!1),a.addEventListener(l.toString(),p,w);else if(a.attachEvent)a.attachEvent(ec(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function jf(){function a(h){return l.call(a.src,a.listener,h)}const l=$f;return a}function Za(a,l,h,p,w){if(Array.isArray(l))for(var S=0;S<l.length;S++)Za(a,l[S],h,p,w);else p=d(p)?!!p.capture:!!p,h=tc(h),a&&a[ii]?(a=a.i,l=String(l).toString(),l in a.g&&(S=a.g[l],h=Ms(S,h,p,w),-1<h&&(si(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete a.g[l],a.h--)))):a&&(a=Bs(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Ms(l,h,p,w)),(h=-1<a?l[a]:null)&&Us(h))}function Us(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[ii])Os(l.i,a);else{var h=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(h,p,a.capture):l.detachEvent?l.detachEvent(ec(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Bs(l))?(Os(h,a),h.h==0&&(h.src=null,l[Ls]=null)):si(a)}}}function ec(a){return a in Fs?Fs[a]:Fs[a]="on"+a}function $f(a,l){if(a.da)a=!0;else{l=new er(l,this);var h=a.listener,p=a.ha||a.src;a.fa&&Us(a),a=h.call(p,l)}return a}function Bs(a){return a=a[Ls],a instanceof oi?a:null}var qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function tc(a){return typeof a=="function"?a:(a[qs]||(a[qs]=function(l){return a.handleEvent(l)}),a[qs])}function Ee(){at.call(this),this.i=new oi(this),this.M=this,this.F=null}V(Ee,at),Ee.prototype[ii]=!0,Ee.prototype.removeEventListener=function(a,l,h,p){Za(this,a,l,h,p)};function Re(a,l){var h,p=a.F;if(p)for(h=[];p;p=p.F)h.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new Ie(l,a);else if(l instanceof Ie)l.target=l.target||a;else{var w=l;l=new Ie(p,a),v(l,w)}if(w=!0,h)for(var S=h.length-1;0<=S;S--){var k=l.g=h[S];w=ai(k,p,!0,l)&&w}if(k=l.g=a,w=ai(k,p,!0,l)&&w,w=ai(k,p,!1,l)&&w,h)for(S=0;S<h.length;S++)k=l.g=h[S],w=ai(k,p,!1,l)&&w}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var h=a.g[l],p=0;p<h.length;p++)si(h[p]);delete a.g[l],a.h--}}this.F=null},Ee.prototype.K=function(a,l,h,p){return this.i.add(String(a),l,!1,h,p)},Ee.prototype.L=function(a,l,h,p){return this.i.add(String(a),l,!0,h,p)};function ai(a,l,h,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,S=0;S<l.length;++S){var k=l[S];if(k&&!k.da&&k.capture==h){var re=k.listener,_e=k.ha||k.src;k.fa&&Os(a.i,k),w=re.call(_e,p)!==!1&&w}}return w&&!p.defaultPrevented}function nc(a,l,h){if(typeof a=="function")h&&(a=I(a,h));else if(a&&typeof a.handleEvent=="function")a=I(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function rc(a){a.g=nc(()=>{a.g=null,a.i&&(a.i=!1,rc(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Kf extends at{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:rc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tr(a){at.call(this),this.h=a,this.g={}}V(tr,at);var ic=[];function sc(a){G(a.g,function(l,h){this.g.hasOwnProperty(h)&&Us(l)},a),a.g={}}tr.prototype.N=function(){tr.aa.N.call(this),sc(this)},tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zs=c.JSON.stringify,Gf=c.JSON.parse,Wf=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function js(){}js.prototype.h=null;function oc(a){return a.h||(a.h=a.i())}function ac(){}var nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $s(){Ie.call(this,"d")}V($s,Ie);function Ks(){Ie.call(this,"c")}V(Ks,Ie);var Mt={},cc=null;function ci(){return cc=cc||new Ee}Mt.La="serverreachability";function uc(a){Ie.call(this,Mt.La,a)}V(uc,Ie);function rr(a){const l=ci();Re(l,new uc(l))}Mt.STAT_EVENT="statevent";function lc(a,l){Ie.call(this,Mt.STAT_EVENT,a),this.stat=l}V(lc,Ie);function Pe(a){const l=ci();Re(l,new lc(l,a))}Mt.Ma="timingevent";function hc(a,l){Ie.call(this,Mt.Ma,a),this.size=l}V(hc,Ie);function ir(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function sr(){this.g=!0}sr.prototype.xa=function(){this.g=!1};function Hf(a,l,h,p,w,S){a.info(function(){if(a.g)if(S)for(var k="",re=S.split("&"),_e=0;_e<re.length;_e++){var Y=re[_e].split("=");if(1<Y.length){var ve=Y[0];Y=Y[1];var Te=ve.split("_");k=2<=Te.length&&Te[1]=="type"?k+(ve+"="+Y+"&"):k+(ve+"=redacted&")}}else k=null;else k=S;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+l+`
`+h+`
`+k})}function Qf(a,l,h,p,w,S,k){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+l+`
`+h+`
`+S+" "+k})}function ln(a,l,h,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Yf(a,h)+(p?" "+p:"")})}function Jf(a,l){a.info(function(){return"TIMEOUT: "+l})}sr.prototype.info=function(){};function Yf(a,l){if(!a.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var p=h[a];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var S=w[0];if(S!="noop"&&S!="stop"&&S!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return zs(h)}catch{return l}}var ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gs;function li(){}V(li,js),li.prototype.g=function(){return new XMLHttpRequest},li.prototype.i=function(){return{}},Gs=new li;function ct(a,l,h,p){this.j=a,this.i=l,this.l=h,this.R=p||1,this.U=new tr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fc}function fc(){this.i=null,this.g="",this.h=!1}var pc={},Ws={};function Hs(a,l,h){a.L=1,a.v=pi(Qe(l)),a.m=h,a.P=!0,mc(a,null)}function mc(a,l){a.F=Date.now(),hi(a),a.A=Qe(a.v);var h=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Cc(h.i,"t",p),a.C=0,h=a.j.J,a.h=new fc,a.g=Wc(a.j,h?l:null,!a.m),0<a.O&&(a.M=new Kf(I(a.Y,a,a.g),a.O)),l=a.U,h=a.g,p=a.ca;var w="readystatechange";Array.isArray(w)||(w&&(ic[0]=w.toString()),w=ic);for(var S=0;S<w.length;S++){var k=Xa(h,w[S],p||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),rr(),Hf(a.i,a.u,a.A,a.l,a.R,a.m)}ct.prototype.ca=function(a){a=a.target;const l=this.M;l&&Je(a)==3?l.j():this.Y(a)},ct.prototype.Y=function(a){try{if(a==this.g)e:{const Te=Je(this.g);var l=this.g.Ba();const fn=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Mc(this.g)))){this.J||Te!=4||l==7||(l==8||0>=fn?rr(3):rr(2)),Qs(this);var h=this.g.Z();this.X=h;t:if(gc(this)){var p=Mc(this.g);a="";var w=p.length,S=Je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),or(this);var k="";break t}this.h.i=new c.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(S&&l==w-1)});p.length=0,this.h.g+=a,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Qf(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var re,_e=this.g;if((re=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(re)){var Y=re;break t}}Y=null}if(h=Y)ln(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Js(this,h);else{this.o=!1,this.s=3,Pe(12),Lt(this),or(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<k.length;)if(qe=Xf(this,k),qe==Ws){Te==4&&(this.s=4,Pe(14),h=!1),ln(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==pc){this.s=4,Pe(15),ln(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else ln(this.i,this.l,qe,null),Js(this,qe);if(gc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||k.length!=0||this.h.h||(this.s=1,Pe(16),h=!1),this.o=this.o&&h,!h)ln(this.i,this.l,k,"[Invalid Chunked Response]"),Lt(this),or(this);else if(0<k.length&&!this.W){this.W=!0;var ve=this.j;ve.g==this&&ve.ba&&!ve.M&&(ve.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),no(ve),ve.M=!0,Pe(11))}}else ln(this.i,this.l,k,null),Js(this,k);Te==4&&Lt(this),this.o&&!this.J&&(Te==4?jc(this.j,this):(this.o=!1,hi(this)))}else mp(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Lt(this),or(this)}}}catch{}finally{}};function gc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Xf(a,l){var h=a.C,p=l.indexOf(`
`,h);return p==-1?Ws:(h=Number(l.substring(h,p)),isNaN(h)?pc:(p+=1,p+h>l.length?Ws:(l=l.slice(p,p+h),a.C=p+h,l)))}ct.prototype.cancel=function(){this.J=!0,Lt(this)};function hi(a){a.S=Date.now()+a.I,_c(a,a.I)}function _c(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ir(I(a.ba,a),l)}function Qs(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ct.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Jf(this.i,this.A),this.L!=2&&(rr(),Pe(17)),Lt(this),this.s=2,or(this)):_c(this,this.S-a)};function or(a){a.j.G==0||a.J||jc(a.j,a)}function Lt(a){Qs(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,sc(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function Js(a,l){try{var h=a.j;if(h.G!=0&&(h.g==a||Ys(h.h,a))){if(!a.K&&Ys(h.h,a)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Ii(h),_i(h);else break e;to(h),Pe(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=ir(I(h.Za,h),6e3));if(1>=Ec(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ut(h,11)}else if((a.K||h.g==a)&&Ii(h),!F(l))for(w=h.Da.g.parse(l),l=0;l<w.length;l++){let Y=w[l];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const ve=Y[3];ve!=null&&(h.la=ve,h.j.info("VER="+h.la));const Te=Y[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const fn=Y[5];fn!=null&&typeof fn=="number"&&0<fn&&(p=1.5*fn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const qe=a.g;if(qe){const vi=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vi){var S=p.h;S.g||vi.indexOf("spdy")==-1&&vi.indexOf("quic")==-1&&vi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Xs(S,S.h),S.h=null))}if(p.D){const ro=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(p.ya=ro,se(p.I,p.D,ro))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var k=a;if(p.qa=Gc(p,p.J?p.ia:null,p.W),k.K){vc(p.h,k);var re=k,_e=p.L;_e&&(re.I=_e),re.B&&(Qs(re),hi(re)),p.g=k}else qc(p);0<h.i.length&&yi(h)}else Y[0]!="stop"&&Y[0]!="close"||Ut(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Ut(h,7):eo(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}rr(4)}catch{}}var Zf=class{constructor(a,l){this.g=a,this.map=l}};function yc(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ic(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ec(a){return a.h?1:a.g?a.g.size:0}function Ys(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Xs(a,l){a.g?a.g.add(l):a.h=l}function vc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}yc.prototype.cancel=function(){if(this.i=Tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const h of a.g.values())l=l.concat(h.D);return l}return x(a.i)}function ep(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],h=a.length,p=0;p<h;p++)l.push(a[p]);return l}l=[],h=0;for(p in a)l[h++]=a[p];return l}function tp(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var h=0;h<a;h++)l.push(h);return l}l=[],h=0;for(const p in a)l[h++]=p;return l}}}function wc(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var h=tp(a),p=ep(a),w=p.length,S=0;S<w;S++)l.call(void 0,p[S],h&&h[S],a)}var Ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function np(a,l){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var p=a[h].indexOf("="),w=null;if(0<=p){var S=a[h].substring(0,p);w=a[h].substring(p+1)}else S=a[h];l(S,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ft(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ft){this.h=a.h,di(this,a.j),this.o=a.o,this.g=a.g,fi(this,a.s),this.l=a.l;var l=a.i,h=new ur;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),bc(this,h),this.m=a.m}else a&&(l=String(a).match(Ac))?(this.h=!1,di(this,l[1]||"",!0),this.o=ar(l[2]||""),this.g=ar(l[3]||"",!0),fi(this,l[4]),this.l=ar(l[5]||"",!0),bc(this,l[6]||"",!0),this.m=ar(l[7]||"")):(this.h=!1,this.i=new ur(null,this.h))}Ft.prototype.toString=function(){var a=[],l=this.j;l&&a.push(cr(l,Sc,!0),":");var h=this.g;return(h||l=="file")&&(a.push("//"),(l=this.o)&&a.push(cr(l,Sc,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(cr(h,h.charAt(0)=="/"?sp:ip,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",cr(h,ap)),a.join("")};function Qe(a){return new Ft(a)}function di(a,l,h){a.j=h?ar(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function fi(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function bc(a,l,h){l instanceof ur?(a.i=l,cp(a.i,a.h)):(h||(l=cr(l,op)),a.i=new ur(l,a.h))}function se(a,l,h){a.i.set(l,h)}function pi(a){return se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ar(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function cr(a,l,h){return typeof a=="string"?(a=encodeURI(a).replace(l,rp),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sc=/[#\/\?@]/g,ip=/[#\?:]/g,sp=/[#\?]/g,op=/[#\?@]/g,ap=/#/g;function ur(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function ut(a){a.g||(a.g=new Map,a.h=0,a.i&&np(a.i,function(l,h){a.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=ur.prototype,r.add=function(a,l){ut(this),this.i=null,a=hn(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(l),this.h+=1,this};function Rc(a,l){ut(a),l=hn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Pc(a,l){return ut(a),l=hn(a,l),a.g.has(l)}r.forEach=function(a,l){ut(this),this.g.forEach(function(h,p){h.forEach(function(w){a.call(l,w,p,this)},this)},this)},r.na=function(){ut(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const w=a[p];for(let S=0;S<w.length;S++)h.push(l[p])}return h},r.V=function(a){ut(this);let l=[];if(typeof a=="string")Pc(this,a)&&(l=l.concat(this.g.get(hn(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)l=l.concat(a[h])}return l},r.set=function(a,l){return ut(this),this.i=null,a=hn(this,a),Pc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function Cc(a,l,h){Rc(a,l),0<h.length&&(a.i=null,a.g.set(hn(a,l),x(h)),a.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),k=this.V(p);for(p=0;p<k.length;p++){var w=S;k[p]!==""&&(w+="="+encodeURIComponent(String(k[p]))),a.push(w)}}return this.i=a.join("&")};function hn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function cp(a,l){l&&!a.j&&(ut(a),a.i=null,a.g.forEach(function(h,p){var w=p.toLowerCase();p!=w&&(Rc(this,p),Cc(this,w,h))},a)),a.j=l}function up(a,l){const h=new sr;if(c.Image){const p=new Image;p.onload=R(lt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=R(lt,h,"TestLoadImage: error",!1,l,p),p.onabort=R(lt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=R(lt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function lp(a,l){const h=new sr,p=new AbortController,w=setTimeout(()=>{p.abort(),lt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(S=>{clearTimeout(w),S.ok?lt(h,"TestPingServer: ok",!0,l):lt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),lt(h,"TestPingServer: error",!1,l)})}function lt(a,l,h,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(h)}catch{}}function hp(){this.g=new Wf}function dp(a,l,h){const p=h||"";try{wc(a,function(w,S){let k=w;d(w)&&(k=zs(w)),l.push(p+S+"="+encodeURIComponent(k))})}catch(w){throw l.push(p+"type="+encodeURIComponent("_badmap")),w}}function lr(a){this.l=a.Ub||null,this.j=a.eb||!1}V(lr,js),lr.prototype.g=function(){return new mi(this.l,this.j)},lr.prototype.i=function(a){return function(){return a}}({});function mi(a,l){Ee.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(mi,Ee),r=mi.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,dr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?hr(this):dr(this),this.readyState==3&&Dc(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,hr(this))},r.Qa=function(a){this.g&&(this.response=a,hr(this))},r.ga=function(){this.g&&hr(this)};function hr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,dr(a)}r.setRequestHeader=function(a,l){this.u.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=l.next();return a.join(`\r
`)};function dr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vc(a){let l="";return G(a,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Zs(a,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Vc(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):se(a,l,h))}function ce(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ce,Ee);var fp=/^https?$/i,pp=["POST","PUT"];r=ce.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gs.g(),this.v=this.o?oc(this.o):oc(Gs),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){kc(this,S);return}if(a=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)h.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),w=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pp,l,void 0))||p||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oc(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){kc(this,S)}};function kc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,xc(a),gi(a)}function xc(a){a.A||(a.A=!0,Re(a,"complete"),Re(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Re(this,"complete"),Re(this,"abort"),gi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gi(this,!0)),ce.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Nc(this):this.bb())},r.bb=function(){Nc(this)};function Nc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Je(a)!=4||a.Z()!=2)){if(a.u&&Je(a)==4)nc(a.Ea,0,a);else if(Re(a,"readystatechange"),Je(a)==4){a.h=!1;try{const k=a.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=k===0){var w=String(a.D).match(Ac)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),p=!fp.test(w?w.toLowerCase():"")}h=p}if(h)Re(a,"complete"),Re(a,"success");else{a.m=6;try{var S=2<Je(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",xc(a)}}finally{gi(a)}}}}function gi(a,l){if(a.g){Oc(a);const h=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||Re(a,"ready");try{h.onreadystatechange=p}catch{}}}function Oc(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Je(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Je(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Gf(l)}};function Mc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mp(a){const l={};a=(a.g&&2<=Je(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(F(a[p]))continue;var h=T(a[p]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[w]||[];l[w]=S,S.push(h)}E(l,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fr(a,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||l}function Lc(a){this.Aa=0,this.i=[],this.j=new sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fr("baseRetryDelayMs",5e3,a),this.cb=fr("retryDelaySeedMs",1e4,a),this.Wa=fr("forwardChannelMaxRetries",2,a),this.wa=fr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yc(a&&a.concurrentRequestLimit),this.Da=new hp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Lc.prototype,r.la=8,r.G=1,r.connect=function(a,l,h,p){Pe(0),this.W=a,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Gc(this,null,this.W),yi(this)};function eo(a){if(Fc(a),a.G==3){var l=a.U++,h=Qe(a.I);if(se(h,"SID",a.K),se(h,"RID",l),se(h,"TYPE","terminate"),pr(a,h),l=new ct(a,a.j,l),l.L=2,l.v=pi(Qe(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Wc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),hi(l)}Kc(a)}function _i(a){a.g&&(no(a),a.g.cancel(),a.g=null)}function Fc(a){_i(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ii(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function yi(a){if(!Ic(a.h)&&!a.s){a.s=!0;var l=a.Ga;Xn||Ya(),Zn||(Xn(),Zn=!0),Ns.add(l,a),a.B=0}}function gp(a,l){return Ec(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ir(I(a.Ga,a,l),$c(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const w=new ct(this,this.j,a);let S=this.o;if(this.S&&(S?(S=g(S),v(S,this.S)):S=this.S),this.m!==null||this.O||(w.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Bc(this,w,l),h=Qe(this.I),se(h,"RID",a),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),pr(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(Vc(S)))+"&"+l:this.m&&Zs(h,this.m,S)),Xs(this.h,w),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",l),se(h,"SID","null"),w.T=!0,Hs(w,h,null)):Hs(w,h,l),this.G=2}}else this.G==3&&(a?Uc(this,a):this.i.length==0||Ic(this.h)||Uc(this))};function Uc(a,l){var h;l?h=l.l:h=a.U++;const p=Qe(a.I);se(p,"SID",a.K),se(p,"RID",h),se(p,"AID",a.T),pr(a,p),a.m&&a.o&&Zs(p,a.m,a.o),h=new ct(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),l&&(a.i=l.D.concat(a.i)),l=Bc(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Xs(a.h,h),Hs(h,p,l)}function pr(a,l){a.H&&G(a.H,function(h,p){se(l,p,h)}),a.l&&wc({},function(h,p){se(l,p,h)})}function Bc(a,l,h){h=Math.min(a.i.length,h);var p=a.l?I(a.l.Na,a.l,a):null;e:{var w=a.i;let S=-1;for(;;){const k=["count="+h];S==-1?0<h?(S=w[0].g,k.push("ofs="+S)):S=0:k.push("ofs="+S);let re=!0;for(let _e=0;_e<h;_e++){let Y=w[_e].g;const ve=w[_e].map;if(Y-=S,0>Y)S=Math.max(0,w[_e].g-100),re=!1;else try{dp(ve,k,"req"+Y+"_")}catch{p&&p(ve)}}if(re){p=k.join("&");break e}}}return a=a.i.splice(0,h),l.D=a,p}function qc(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;Xn||Ya(),Zn||(Xn(),Zn=!0),Ns.add(l,a),a.v=0}}function to(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ir(I(a.Fa,a),$c(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,zc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ir(I(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),_i(this),zc(this))};function no(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function zc(a){a.g=new ct(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=Qe(a.qa);se(l,"RID","rpc"),se(l,"SID",a.K),se(l,"AID",a.T),se(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&se(l,"TO",a.ja),se(l,"TYPE","xmlhttp"),pr(a,l),a.m&&a.o&&Zs(l,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=pi(Qe(l)),h.m=null,h.P=!0,mc(h,a)}r.Za=function(){this.C!=null&&(this.C=null,_i(this),to(this),Pe(19))};function Ii(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function jc(a,l){var h=null;if(a.g==l){Ii(a),no(a),a.g=null;var p=2}else if(Ys(a.h,l))h=l.D,vc(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var w=a.B;p=ci(),Re(p,new hc(p,h)),yi(a)}else qc(a);else if(w=l.s,w==3||w==0&&0<l.X||!(p==1&&gp(a,l)||p==2&&to(a)))switch(h&&0<h.length&&(l=a.h,l.i=l.i.concat(h)),w){case 1:Ut(a,5);break;case 4:Ut(a,10);break;case 3:Ut(a,6);break;default:Ut(a,2)}}}function $c(a,l){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*l}function Ut(a,l){if(a.j.info("Error code "+l),l==2){var h=I(a.fb,a),p=a.Xa;const w=!p;p=new Ft(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||di(p,"https"),pi(p),w?up(p.toString(),h):lp(p.toString(),h)}else Pe(2);a.G=0,a.l&&a.l.sa(l),Kc(a),Fc(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function Kc(a){if(a.G=0,a.ka=[],a.l){const l=Tc(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ka,l),D(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Gc(a,l,h){var p=h instanceof Ft?Qe(h):new Ft(h);if(p.g!="")l&&(p.g=l+"."+p.g),fi(p,p.s);else{var w=c.location;p=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var S=new Ft(null);p&&di(S,p),l&&(S.g=l),w&&fi(S,w),h&&(S.l=h),p=S}return h=a.D,l=a.ya,h&&l&&se(p,h,l),se(p,"VER",a.la),pr(a,p),p}function Wc(a,l,h){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new ce(new lr({eb:h})):new ce(a.pa),l.Ha(a.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hc(){}r=Hc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ei(){}Ei.prototype.g=function(a,l){return new Me(a,l)};function Me(a,l){Ee.call(this),this.g=new Lc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!F(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new dn(this)}V(Me,Ee),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){eo(this.g)},Me.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=zs(a),a=h);l.i.push(new Zf(l.Ya++,a)),l.G==3&&yi(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,eo(this.g),delete this.g,Me.aa.N.call(this)};function Qc(a){$s.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const h in l){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}V(Qc,$s);function Jc(){Ks.call(this),this.status=1}V(Jc,Ks);function dn(a){this.g=a}V(dn,Hc),dn.prototype.ua=function(){Re(this.g,"a")},dn.prototype.ta=function(a){Re(this.g,new Qc(a))},dn.prototype.sa=function(a){Re(this.g,new Jc)},dn.prototype.ra=function(){Re(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Oh=function(){return new Ei},Nh=function(){return ci()},xh=Mt,Do={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ui.NO_ERROR=0,ui.TIMEOUT=8,ui.HTTP_ERROR=6,Ni=ui,dc.COMPLETE="complete",kh=dc,ac.EventType=nr,nr.OPEN="a",nr.CLOSE="b",nr.ERROR="c",nr.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Tr=ac,Vh=lr,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,Dh=ce}).apply(typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{});const Cu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Zo("@firebase/firestore");function yn(){return Zt.logLevel}function C(r,...e){if(Zt.logLevel<=W.DEBUG){const t=e.map(ha);Zt.debug(`Firestore (${Wn}): ${r}`,...t)}}function he(r,...e){if(Zt.logLevel<=W.ERROR){const t=e.map(ha);Zt.error(`Firestore (${Wn}): ${r}`,...t)}}function Fr(r,...e){if(Zt.logLevel<=W.WARN){const t=e.map(ha);Zt.warn(`Firestore (${Wn}): ${r}`,...t)}}function ha(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r="Unexpected state"){const e=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: `+r;throw he(e),new Error(e)}function q(r,e){r||L()}function U(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class ay{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new At;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new At,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new At)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string"),new sy(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new Ae(e)}}class cy{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uy{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new cy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(q(typeof t.token=="string"),this.R=t.token,new ly(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=dy(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function $(r,e){return r<e?-1:r>e?1:0}function Vn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Lh(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ae(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new ae(0,0))}static max(){return new z(new ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,n){t===void 0?t=0:t>e.length&&L(),n===void 0?n=e.length-t:n>e.length-t&&L(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ur.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ur?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ee extends Ur{construct(e,t,n){return new ee(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const fy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Ur{construct(e,t,n){return new oe(e,t,n)}static isValidIdentifier(e){return fy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(t)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ee.fromString(e))}static fromName(e){return new N(ee.fromString(e).popFirst(5))}static empty(){return new N(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ee(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Vo(r){return r.fields.find(e=>e.kind===2)}function zt(r){return r.fields.filter(e=>e.kind!==2)}Hi.UNKNOWN_ID=-1;class Oi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Br{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Br(0,Be.min())}}function Fh(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=z.fromTimestamp(n===1e9?new ae(t+1,0):new ae(t,n));return new Be(i,N.empty(),e)}function Uh(r){return new Be(r.readTime,r.key,-1)}class Be{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Be(z.min(),N.empty(),-1)}static max(){return new Be(z.max(),N.empty(),-1)}}function da(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(r.documentKey,e.documentKey),t!==0?t:$(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Bh)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>n(u))}),o=!0,s===i&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(i=>i?A.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new A((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{o[d]=f,++c,c===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new A((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new At,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Pr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=fa(n.target.error);this.V.reject(new Pr(e,i))}}static open(e,t,n,i){try{return new ms(t,e.transaction(i,n))}catch(s){throw new Pr(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new my(t)}}class bt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,bt.S(pe())===12.2&&he("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),jt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Kl())return!1;if(bt.C())return!0;const e=pe(),t=bt.S(e),n=0<t&&t<10,i=zh(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new Pr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new O(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new O(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Pr(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=ms.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),A.reject(d))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){const u=c,d=u.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",d),this.close(),!d)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function zh(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class py{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return jt(this.B.delete())}}class Pr extends O{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xt(r){return r.name==="IndexedDbTransactionError"}class my{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),jt(n)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),jt(this.store.add(e))}get(e){return jt(this.store.get(e)).next(t=>(t===void 0&&(t=null),C("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),jt(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),jt(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new A((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(c,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new A((n,i)=>{t.onerror=s=>{const o=fa(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new py(c),d=t(c.primaryKey,c.value,u);if(d instanceof A){const f=d.catch(m=>(u.done(),A.reject(m)));n.push(f)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>A.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function jt(r){return new A((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=fa(n.target.error);t(i)}})}let Du=!1;function fa(r){const e=bt.S(pe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Du||(Du=!0,setTimeout(()=>{throw n},0)),n}}return r}class gy{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){C("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){xt(t)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await kt(t)}await this.X(6e4)})}}class _y{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return C("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(C("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=Uh(s);da(o,n)>0&&(n=o)}),new Be(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xe.oe=-1;function gs(r){return r==null}function qr(r){return r===0&&1/r==-1/0}function jh(r){return typeof r=="number"&&Number.isInteger(r)&&!qr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Vu(e)),e=yy(r.get(t),e);return Vu(e)}function yy(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Vu(r){return r+""}function je(r){const e=r.length;if(q(e>=2),e===2)return q(r.charAt(0)===""&&r.charAt(1)===""),ee.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&L(),r.charAt(o+1)){case"":const c=r.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:L()}s=o+2}return new ee(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(r,e){return[r,De(e)]}function $h(r,e,t){return[r,De(e),t]}const Iy={},Ey=["prefixPath","collectionGroup","readTime","documentId"],vy=["prefixPath","collectionGroup","documentId"],Ty=["collectionGroup","readTime","prefixPath","documentId"],wy=["canonicalId","targetId"],Ay=["targetId","path"],by=["path","targetId"],Sy=["collectionId","parent"],Ry=["indexId","uid"],Py=["uid","sequenceNumber"],Cy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Dy=["indexId","uid","orderedDocumentKey"],Vy=["userId","collectionPath","documentId"],ky=["userId","collectionPath","largestBatchId"],xy=["userId","collectionGroup","largestBatchId"],Kh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ny=[...Kh,"documentOverlays"],Gh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wh=Gh,pa=[...Wh,"indexConfiguration","indexState","indexEntries"],Oy=pa,My=[...pa,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends qh{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function me(r,e){const t=U(r);return bt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function cn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Hh(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bi(this.root,e,this.comparator,!0)}}class bi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??ye.RED,this.left=i??ye.EMPTY,this.right=s??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new ye(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ye.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,n,i,s){return this}insert(e,t,n){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nu(this.data.getIterator())}getIteratorFrom(e){return new Nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ne(this.comparator);return t.data=e,t}}class Nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function pn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new ne(oe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qh("Invalid base64 string: "+s):s}}(e);return new de(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function it(r){if(q(!!r),typeof r=="string"){let e=0;const t=Ly.exec(r);if(q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ue(r.seconds),nanos:ue(r.nanos)}}function ue(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Pt(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ga(r){const e=r.mapValue.fields.__previous_value__;return ma(e)?ga(e):e}function zr(r){const e=it(r.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,n,i,s,o,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class en{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new en("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof en&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Li={nullValue:"NULL_VALUE"};function tn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ma(r)?4:Jh(r)?9007199254740991:10:L()}function We(r,e){if(r===e)return!0;const t=tn(r);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return zr(r).isEqual(zr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=it(i.timestampValue),c=it(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Pt(i.bytesValue).isEqual(Pt(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ue(i.doubleValue),c=ue(s.doubleValue);return o===c?qr(o)===qr(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Vn(r.arrayValue.values||[],e.arrayValue.values||[],We);case 10:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(xu(o)!==xu(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!We(o[u],c[u])))return!1;return!0}(r,e);default:return L()}}function jr(r,e){return(r.values||[]).find(t=>We(t,e))!==void 0}function Ct(r,e){if(r===e)return 0;const t=tn(r),n=tn(e);if(t!==n)return $(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return function(s,o){const c=ue(s.integerValue||s.doubleValue),u=ue(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return Ou(r.timestampValue,e.timestampValue);case 4:return Ou(zr(r),zr(e));case 5:return $(r.stringValue,e.stringValue);case 6:return function(s,o){const c=Pt(s),u=Pt(o);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=$(c[d],u[d]);if(f!==0)return f}return $(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const c=$(ue(s.latitude),ue(o.latitude));return c!==0?c:$(ue(s.longitude),ue(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return function(s,o){const c=s.values||[],u=o.values||[];for(let d=0;d<c.length&&d<u.length;++d){const f=Ct(c[d],u[d]);if(f)return f}return $(c.length,u.length)}(r.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===It.mapValue&&o===It.mapValue)return 0;if(s===It.mapValue)return 1;if(o===It.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const I=$(u[m],f[m]);if(I!==0)return I;const R=Ct(c[u[m]],d[f[m]]);if(R!==0)return R}return $(u.length,f.length)}(r.mapValue,e.mapValue);default:throw L()}}function Ou(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);const t=it(r),n=it(e),i=$(t.seconds,n.seconds);return i!==0?i:$(t.nanos,n.nanos)}function kn(r){return xo(r)}function xo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=it(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Pt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return N.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=xo(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${xo(t.fields[o])}`;return i+"}"}(r.mapValue):L()}function _a(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function No(r){return!!r&&"integerValue"in r}function $r(r){return!!r&&"arrayValue"in r}function Mu(r){return!!r&&"nullValue"in r}function Lu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fi(r){return!!r&&"mapValue"in r}function Cr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return cn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Cr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Jh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Uy(r){return"nullValue"in r?Li:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?_a(en.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:L()}function By(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?_a(en.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?It:L()}function Fu(r,e){const t=Ct(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Uu(r,e){const t=Ct(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cr(t)}setAll(e){let t=oe.emptyPath(),n={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Cr(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Fi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){cn(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new be(Cr(this.value))}}function Yh(r){const e=[];return cn(r.fields,(t,n)=>{const i=new oe([t]);if(Fi(n)){const s=Yh(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new le(e,0,z.min(),z.min(),z.min(),be.empty(),0)}static newFoundDocument(e,t,n,i){return new le(e,1,t,z.min(),n,i,0)}static newNoDocument(e,t){return new le(e,2,t,z.min(),z.min(),be.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,z.min(),z.min(),be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this.position=e,this.inclusive=t}}function Bu(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=N.comparator(N.fromName(o.referenceValue),t.key):n=Ct(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function qu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!We(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t="asc"){this.field=e,this.dir=t}}function qy(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{}class H extends Xh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new zy(e,t,n):t==="array-contains"?new Ky(e,n):t==="in"?new id(e,n):t==="not-in"?new Gy(e,n):t==="array-contains-any"?new Wy(e,n):new H(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new jy(e,n):new $y(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ct(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(Ct(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends Xh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new te(e,t)}matches(e){return Nn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Nn(r){return r.op==="and"}function Oo(r){return r.op==="or"}function ya(r){return Zh(r)&&Nn(r)}function Zh(r){for(const e of r.filters)if(e instanceof te)return!1;return!0}function Mo(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+kn(r.value);if(ya(r))return r.filters.map(e=>Mo(e)).join(",");{const e=r.filters.map(t=>Mo(t)).join(",");return`${r.op}(${e})`}}function ed(r,e){return r instanceof H?function(n,i){return i instanceof H&&n.op===i.op&&n.field.isEqual(i.field)&&We(n.value,i.value)}(r,e):r instanceof te?function(n,i){return i instanceof te&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,c)=>s&&ed(o,i.filters[c]),!0):!1}(r,e):void L()}function td(r,e){const t=r.filters.concat(e);return te.create(t,r.op)}function nd(r){return r instanceof H?function(t){return`${t.field.canonicalString()} ${t.op} ${kn(t.value)}`}(r):r instanceof te?function(t){return t.op.toString()+" {"+t.getFilters().map(nd).join(" ,")+"}"}(r):"Filter"}class zy extends H{constructor(e,t,n){super(e,t,n),this.key=N.fromName(n.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class jy extends H{constructor(e,t){super(e,"in",t),this.keys=rd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $y extends H{constructor(e,t){super(e,"not-in",t),this.keys=rd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>N.fromName(n.referenceValue))}class Ky extends H{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $r(t)&&jr(t.arrayValue,this.value)}}class id extends H{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jr(this.value.arrayValue,t)}}class Gy extends H{constructor(e,t){super(e,"not-in",t)}matches(e){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!jr(this.value.arrayValue,t)}}class Wy extends H{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$r(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>jr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function Lo(r,e=null,t=[],n=[],i=null,s=null,o=null){return new Hy(r,e,t,n,i,s,o)}function nn(r){const e=U(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Mo(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),gs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>kn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>kn(n)).join(",")),e.ue=t}return e.ue}function Zr(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!qy(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ed(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!qu(r.startAt,e.startAt)&&qu(r.endAt,e.endAt)}function Ji(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Yi(r,e){return r.filters.filter(t=>t instanceof H&&t.field.isEqual(e))}function zu(r,e,t){let n=Li,i=!0;for(const s of Yi(r,e)){let o=Li,c=!0;switch(s.op){case"<":case"<=":o=Uy(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Li}Fu({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Fu({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function ju(r,e,t){let n=It,i=!0;for(const s of Yi(r,e)){let o=It,c=!0;switch(s.op){case">=":case">":o=By(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=It}Uu({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Uu({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sd(r,e,t,n,i,s,o,c){return new _s(r,e,t,n,i,s,o,c)}function ys(r){return new _s(r)}function $u(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Qy(r){return r.collectionGroup!==null}function Dr(r){const e=U(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ne(oe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Qi(s,n))}),t.has(oe.keyField().canonicalString())||e.ce.push(new Qi(oe.keyField(),n))}return e.ce}function Ue(r){const e=U(r);return e.le||(e.le=Jy(e,Dr(r))),e.le}function Jy(r,e){if(r.limitType==="F")return Lo(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qi(i.field,s)});const t=r.endAt?new xn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new xn(r.startAt.position,r.startAt.inclusive):null;return Lo(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Fo(r,e,t){return new _s(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Is(r,e){return Zr(Ue(r),Ue(e))&&r.limitType===e.limitType}function od(r){return`${nn(Ue(r))}|lt:${r.limitType}`}function In(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>nd(i)).join(", ")}]`),gs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>kn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>kn(i)).join(",")),`Target(${n})`}(Ue(r))}; limitType=${r.limitType})`}function ei(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):N.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Dr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,c,u){const d=Bu(o,c,u);return o.inclusive?d<=0:d<0}(n.startAt,Dr(n),i)||n.endAt&&!function(o,c,u){const d=Bu(o,c,u);return o.inclusive?d>=0:d>0}(n.endAt,Dr(n),i))}(r,e)}function ad(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cd(r){return(e,t)=>{let n=!1;for(const i of Dr(r)){const s=Yy(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Yy(r,e,t){const n=r.field.isKeyField()?N.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),d=c.data.field(s);return u!==null&&d!==null?Ct(u,d):L()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Hh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=new ie(N.comparator);function Fe(){return Xy}const ud=new ie(N.comparator);function wr(...r){let e=ud;for(const t of r)e=e.insert(t.key,t);return e}function ld(r){let e=ud;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function $e(){return Vr()}function hd(){return Vr()}function Vr(){return new Nt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Zy=new ie(N.comparator),eI=new ne(N.comparator);function K(...r){let e=eI;for(const t of r)e=e.add(t);return e}const tI=new ne($);function Ia(){return tI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qr(e)?"-0":e}}function fd(r){return{integerValue:""+r}}function nI(r,e){return jh(e)?fd(e):dd(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this._=void 0}}function rI(r,e,t){return r instanceof Kr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ma(s)&&(s=ga(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof On?md(r,e):r instanceof Mn?gd(r,e):function(i,s){const o=pd(i,s),c=Ku(o)+Ku(i.Pe);return No(o)&&No(i.Pe)?fd(c):dd(i.serializer,c)}(r,e)}function iI(r,e,t){return r instanceof On?md(r,e):r instanceof Mn?gd(r,e):t}function pd(r,e){return r instanceof Gr?function(n){return No(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Kr extends Es{}class On extends Es{constructor(e){super(),this.elements=e}}function md(r,e){const t=_d(e);for(const n of r.elements)t.some(i=>We(i,n))||t.push(n);return{arrayValue:{values:t}}}class Mn extends Es{constructor(e){super(),this.elements=e}}function gd(r,e){let t=_d(e);for(const n of r.elements)t=t.filter(i=>!We(i,n));return{arrayValue:{values:t}}}class Gr extends Es{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ku(r){return ue(r.integerValue||r.doubleValue)}function _d(r){return $r(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.field=e,this.transform=t}}function oI(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof On&&i instanceof On||n instanceof Mn&&i instanceof Mn?Vn(n.elements,i.elements,We):n instanceof Gr&&i instanceof Gr?We(n.Pe,i.Pe):n instanceof Kr&&i instanceof Kr}(r.transform,e.transform)}class aI{constructor(e,t){this.version=e,this.transformResults=t}}class Ce{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ce}static exists(e){return new Ce(void 0,e)}static updateTime(e){return new Ce(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class vs{}function yd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ts(r.key,Ce.none()):new Hn(r.key,r.data,Ce.none());{const t=r.data,n=be.empty();let i=new ne(oe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new ot(r.key,n,new Ne(i.toArray()),Ce.none())}}function cI(r,e,t){r instanceof Hn?function(i,s,o){const c=i.value.clone(),u=Wu(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof ot?function(i,s,o){if(!Ui(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Wu(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Id(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function kr(r,e,t,n){return r instanceof Hn?function(s,o,c,u){if(!Ui(s.precondition,o))return c;const d=s.value.clone(),f=Hu(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof ot?function(s,o,c,u){if(!Ui(s.precondition,o))return c;const d=Hu(s.fieldTransforms,u,o),f=o.data;return f.setAll(Id(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,o,c){return Ui(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function uI(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=pd(n.transform,i||null);s!=null&&(t===null&&(t=be.empty()),t.set(n.field,s))}return t||null}function Gu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Vn(n,i,(s,o)=>oI(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Hn extends vs{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ot extends vs{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Id(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Wu(r,e,t){const n=new Map;q(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,iI(o,c,t[i]))}return n}function Hu(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,rI(s,o,e))}return n}class Ts extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ed extends vs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cI(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=kr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=kr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=hd();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=yd(o,c);u!==null&&n.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(z.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(t,n)=>Gu(t,n))&&Vn(this.baseMutations,e.baseMutations,(t,n)=>Gu(t,n))}}class va{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){q(e.mutations.length===n.length);let i=function(){return Zy}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new va(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,J;function hI(r){switch(r){default:return L();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function vd(r){if(r===void 0)return he("GRPC error has no .code"),P.UNKNOWN;switch(r){case fe.OK:return P.OK;case fe.CANCELLED:return P.CANCELLED;case fe.UNKNOWN:return P.UNKNOWN;case fe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case fe.INTERNAL:return P.INTERNAL;case fe.UNAVAILABLE:return P.UNAVAILABLE;case fe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case fe.NOT_FOUND:return P.NOT_FOUND;case fe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case fe.ABORTED:return P.ABORTED;case fe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case fe.DATA_LOSS:return P.DATA_LOSS;default:return L()}}(J=fe||(fe={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=new Wt([4294967295,4294967295],0);function Qu(r){const e=dI().encode(r),t=new Ch;return t.update(e),new Uint8Array(t.digest())}function Ju(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wt([t,n],0),new Wt([i,s],0)]}class wa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ar(`Invalid padding: ${t}`);if(n<0)throw new Ar(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Wt.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Wt.fromNumber(n)));return i.compare(fI)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Qu(e),[n,i]=Ju(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wa(s,i,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Qu(e),[n,i]=Ju(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ti(z.min(),i,new ie($),Fe(),K())}}class ni{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ni(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Td{constructor(e,t){this.targetId=e,this.me=t}}class wd{constructor(e,t,n=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Yu{constructor(){this.fe=0,this.ge=Zu(),this.pe=de.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=K(),t=K(),n=K();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:L()}}),new ni(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=Zu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fe(),this.qe=Xu(),this.Qe=new ie($)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:L()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Ji(s))if(n===0){const o=new N(s.path);this.Ue(t,o,le.newNoDocument(o,z.min()))}else q(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=Pt(n).toUint8Array()}catch(u){if(u instanceof Qh)return Fr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new wa(o,i,s)}catch(u){return Fr(u instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&Ji(c.target)){const u=new N(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,le.newNoDocument(u,e))}s.be&&(t.set(o,s.Ce()),s.ve())}});let n=K();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ti(e,t,this.Qe,this.ke,n);return this.ke=Fe(),this.qe=Xu(),this.Qe=new ie($),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Yu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ne($),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Yu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Xu(){return new ie(N.comparator)}function Zu(){return new ie(N.comparator)}const mI={asc:"ASCENDING",desc:"DESCENDING"},gI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_I={and:"AND",or:"OR"};class yI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uo(r,e){return r.useProto3Json||gs(e)?e:{value:e}}function Ln(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ad(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function II(r,e){return Ln(r,e.toTimestamp())}function Ve(r){return q(!!r),z.fromTimestamp(function(t){const n=it(t);return new ae(n.seconds,n.nanos)}(r))}function Aa(r,e){return Bo(r,e).canonicalString()}function Bo(r,e){const t=function(i){return new ee(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function bd(r){const e=ee.fromString(r);return q(Nd(e)),e}function Xi(r,e){return Aa(r.databaseId,e.path)}function Ht(r,e){const t=bd(e);if(t.get(1)!==r.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new N(Pd(t))}function Sd(r,e){return Aa(r.databaseId,e)}function Rd(r){const e=bd(r);return e.length===4?ee.emptyPath():Pd(e)}function qo(r){return new ee(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pd(r){return q(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function el(r,e,t){return{name:Xi(r,e),fields:t.value.mapValue.fields}}function EI(r,e,t){const n=Ht(r,e.name),i=Ve(e.updateTime),s=e.createTime?Ve(e.createTime):z.min(),o=new be({mapValue:{fields:e.fields}}),c=le.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function vI(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(q(f===void 0||typeof f=="string"),de.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array),de.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const f=d.code===void 0?P.UNKNOWN:vd(d.code);return new O(f,d.message||"")}(o);t=new wd(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Ht(r,n.document.name),s=Ve(n.document.updateTime),o=n.document.createTime?Ve(n.document.createTime):z.min(),c=new be({mapValue:{fields:n.document.fields}}),u=le.newFoundDocument(i,s,o,c),d=n.targetIds||[],f=n.removedTargetIds||[];t=new Bi(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Ht(r,n.document),s=n.readTime?Ve(n.readTime):z.min(),o=le.newNoDocument(i,s),c=n.removedTargetIds||[];t=new Bi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Ht(r,n.document),s=n.removedTargetIds||[];t=new Bi([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new lI(i,s),c=n.targetId;t=new Td(c,o)}}return t}function Zi(r,e){let t;if(e instanceof Hn)t={update:el(r,e.key,e.value)};else if(e instanceof Ts)t={delete:Xi(r,e.key)};else if(e instanceof ot)t={update:el(r,e.key,e.data),updateMask:RI(e.fieldMask)};else{if(!(e instanceof Ed))return L();t={verify:Xi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const c=o.transform;if(c instanceof Kr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof On)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Mn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Gr)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw L()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:II(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(r,e.precondition)),t}function zo(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ce.updateTime(Ve(s.updateTime)):s.exists!==void 0?Ce.exists(s.exists):Ce.none()}(e.currentDocument):Ce.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME"),u=new Kr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new On(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new Mn(f)}else"increment"in c?u=new Gr(o,c.increment):L();const d=oe.fromServerFormat(c.fieldPath);return new sI(d,u)}(r,i)):[];if(e.update){e.update.name;const i=Ht(r,e.update.name),s=new be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const d=u.fieldPaths||[];return new Ne(d.map(f=>oe.fromServerFormat(f)))}(e.updateMask);return new ot(i,s,o,t,n)}return new Hn(i,s,t,n)}if(e.delete){const i=Ht(r,e.delete);return new Ts(i,t)}if(e.verify){const i=Ht(r,e.verify);return new Ed(i,t)}return L()}function TI(r,e){return r&&r.length>0?(q(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?Ve(i.updateTime):Ve(s);return o.isEqual(z.min())&&(o=Ve(s)),new aI(o,i.transformResults||[])}(t,e))):[]}function Cd(r,e){return{documents:[Sd(r,e.path)]}}function Dd(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Sd(r,i);const s=function(d){if(d.length!==0)return xd(te.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:En(I.field),direction:AI(I.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Uo(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Vd(r){let e=Rd(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){q(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const I=kd(m);return I instanceof te&&ya(I)?I.getFilters():[I]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(I=>function(V){return new Qi(vn(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(m){let I;return I=typeof m=="object"?m.value:m,gs(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(m){const I=!!m.before,R=m.values||[];return new xn(R,I)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const I=!m.before,R=m.values||[];return new xn(R,I)}(t.endAt)),sd(e,i,o,s,c,"F",u,d)}function wI(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kd(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=vn(t.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=vn(t.unaryFilter.field);return H.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vn(t.unaryFilter.field);return H.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vn(t.unaryFilter.field);return H.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(t){return H.create(vn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return te.create(t.compositeFilter.filters.map(n=>kd(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(t.compositeFilter.op))}(r):L()}function AI(r){return mI[r]}function bI(r){return gI[r]}function SI(r){return _I[r]}function En(r){return{fieldPath:r.canonicalString()}}function vn(r){return oe.fromServerFormat(r.fieldPath)}function xd(r){return r instanceof H?function(t){if(t.op==="=="){if(Lu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(Mu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(Mu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:bI(t.op),value:t.value}}}(r):r instanceof te?function(t){const n=t.getFilters().map(i=>xd(i));return n.length===1?n[0]:{compositeFilter:{op:SI(t.op),filters:n}}}(r):L()}function RI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,n,i,s=z.min(),o=z.min(),c=de.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.ct=e}}function PI(r,e){let t;if(e.document)t=EI(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=N.fromSegments(e.noDocument.path),i=sn(e.noDocument.readTime);t=le.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{const n=N.fromSegments(e.unknownDocument.path),i=sn(e.unknownDocument.version);t=le.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ae(i[0],i[1]);return z.fromTimestamp(s)}(e.readTime)),t}function tl(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:es(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:Xi(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ln(s,o.version.toTimestamp()),createTime:Ln(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:rn(e.version)};else{if(!e.isUnknownDocument())return L();n.unknownDocument={path:t.path.toArray(),version:rn(e.version)}}return n}function es(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function rn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function sn(r){const e=new ae(r.seconds,r.nanoseconds);return z.fromTimestamp(e)}function $t(r,e){const t=(e.baseMutations||[]).map(s=>zo(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>zo(r.ct,s)),i=ae.fromMillis(e.localWriteTimeMs);return new Ea(e.batchId,i,t,n)}function br(r){const e=sn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?sn(r.lastLimboFreeSnapshotVersion):z.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return q(s.documents.length===1),Ue(ys(Rd(s.documents[0])))}(r.query):function(s){return Ue(Vd(s))}(r.query),new nt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function Md(r,e){const t=rn(e.snapshotVersion),n=rn(e.lastLimboFreeSnapshotVersion);let i;i=Ji(e.target)?Cd(r.ct,e.target):Dd(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:nn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Ld(r){const e=Vd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fo(e,e.limit,"L"):e}function po(r,e){return new Ta(e.largestBatchId,zo(r.ct,e.overlayMutation))}function nl(r,e){const t=e.path.lastSegment();return[r,De(e.path.popLast()),t]}function rl(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:rn(n.readTime),documentKey:De(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{getBundleMetadata(e,t){return il(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:sn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return il(e).put(function(i){return{bundleId:i.id,createTime:rn(Ve(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return sl(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:Ld(s.bundledQuery),readTime:sn(s.readTime)}}(n)})}saveNamedQuery(e,t){return sl(e).put(function(i){return{name:i.name,readTime:rn(Ve(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function il(r){return me(r,"bundles")}function sl(r){return me(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new ws(e,n)}getOverlay(e,t){return mr(e).get(nl(this.userId,t)).next(n=>n?po(this.serializer,n):null)}getOverlays(e,t){const n=$e();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const c=new Ta(t,o);i.push(this.ht(e,c))}),A.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(De(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(mr(e).j("collectionPathOverlayIndex",c))}),A.waitFor(s)}getOverlaysForCollection(e,t,n){const i=$e(),s=De(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return mr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const u of c){const d=po(this.serializer,u);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=$e();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return mr(e).J({index:"collectionGroupOverlayIndex",range:c},(u,d,f)=>{const m=po(this.serializer,d);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return mr(e).put(function(i,s,o){const[c,u,d]=nl(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Zi(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function mr(r){return me(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{Pt(e){return me(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ue(e.integerValue));else if("doubleValue"in e){const n=ue(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),qr(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=it(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Pt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Jh(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):L()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}St(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),N.fromName(e).path.forEach(n=>{this.dt(t,60),this.bt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Kt.Dt=new Kt;function VI(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function ol(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=VI(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class kI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.vt(n.value),n=t.next();this.Ft()}Mt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xt(n.value),n=t.next();this.Ot()}Nt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.vt(n);else if(n<2048)this.vt(960|n>>>6),this.vt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.vt(480|n>>>12),this.vt(128|63&n>>>6),this.vt(128|63&n);else{const i=t.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ft()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.xt(n);else if(n<2048)this.xt(960|n>>>6),this.xt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|n>>>12),this.xt(128|63&n>>>6),this.xt(128|63&n);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}Bt(e){const t=this.kt(e),n=ol(t);this.qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Qt(e){const t=this.kt(e),n=ol(t);this.qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Kt(){this.$t(255),this.$t(255)}Ut(){this.Wt(255),this.Wt(255)}reset(){this.position=0}seed(e){this.qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Gt(){return this.buffer.slice(0,this.position)}kt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}vt(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(t)}xt(e){const t=255&e;t===0?(this.Wt(0),this.Wt(255)):t===255?(this.Wt(255),this.Wt(0)):this.Wt(e)}Ft(){this.$t(0),this.$t(1)}Ot(){this.Wt(0),this.Wt(1)}$t(e){this.qt(1),this.buffer[this.position++]=e}Wt(e){this.qt(1),this.buffer[this.position++]=~e}qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class xI{constructor(e){this.zt=e}gt(e){this.zt.Ct(e)}Rt(e){this.zt.Nt(e)}At(e){this.zt.Bt(e)}Et(){this.zt.Kt()}}class NI{constructor(e){this.zt=e}gt(e){this.zt.Mt(e)}Rt(e){this.zt.Lt(e)}At(e){this.zt.Qt(e)}Et(){this.zt.Ut()}}class gr{constructor(){this.zt=new kI,this.jt=new xI(this.zt),this.Ht=new NI(this.zt)}seed(e){this.zt.seed(e)}Jt(e){return e===0?this.jt:this.Ht}Gt(){return this.zt.Gt()}reset(){this.zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Yt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Gt(this.indexId,this.documentKey,this.arrayValue,n)}}function dt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=al(r.arrayValue,e.arrayValue),t!==0?t:(t=al(r.directionalValue,e.directionalValue),t!==0?t:N.comparator(r.documentKey,e.documentKey)))}function al(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.Zt=new ne((t,n)=>oe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const t of e.filters){const n=t;n.isInequality()?this.Zt=this.Zt.add(n):this.en.push(n)}}get tn(){return this.Zt.size>1}nn(e){if(q(e.collectionGroup===this.collectionId),this.tn)return!1;const t=Vo(e);if(t!==void 0&&!this.rn(t))return!1;const n=zt(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.rn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Zt.size>0){const c=this.Zt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.sn(c,u)||!this.on(this.Xt[o++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.Xt.length||!this.on(this.Xt[o++],c))return!1}return!0}_n(){if(this.tn)return null;let e=new ne(oe.comparator);const t=[];for(const n of this.en)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Oi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Oi(n.field,0))}for(const n of this.Xt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Oi(n.field,n.dir==="asc"?0:1)));return new Hi(Hi.UNKNOWN_ID,this.collectionId,t,Br.empty())}rn(e){for(const t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(r){var e,t;if(q(r instanceof H||r instanceof te),r instanceof H){if(r instanceof id){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>H.create(r.field,"==",s)))||[];return te.create(i,"or")}return r}const n=r.filters.map(i=>Fd(i));return te.create(n,r.op)}function OI(r){if(r.getFilters().length===0)return[];const e=Ko(Fd(r));return q(Ud(e)),jo(e)||$o(e)?[e]:e.getFilters()}function jo(r){return r instanceof H}function $o(r){return r instanceof te&&ya(r)}function Ud(r){return jo(r)||$o(r)||function(t){if(t instanceof te&&Oo(t)){for(const n of t.getFilters())if(!jo(n)&&!$o(n))return!1;return!0}return!1}(r)}function Ko(r){if(q(r instanceof H||r instanceof te),r instanceof H)return r;if(r.filters.length===1)return Ko(r.filters[0]);const e=r.filters.map(n=>Ko(n));let t=te.create(e,r.op);return t=ts(t),Ud(t)?t:(q(t instanceof te),q(Nn(t)),q(t.filters.length>1),t.filters.reduce((n,i)=>ba(n,i)))}function ba(r,e){let t;return q(r instanceof H||r instanceof te),q(e instanceof H||e instanceof te),t=r instanceof H?e instanceof H?function(i,s){return te.create([i,s],"and")}(r,e):ul(r,e):e instanceof H?ul(e,r):function(i,s){if(q(i.filters.length>0&&s.filters.length>0),Nn(i)&&Nn(s))return td(i,s.getFilters());const o=Oo(i)?i:s,c=Oo(i)?s:i,u=o.filters.map(d=>ba(d,c));return te.create(u,"or")}(r,e),ts(t)}function ul(r,e){if(Nn(e))return td(e,r.getFilters());{const t=e.filters.map(n=>ba(r,n));return te.create(t,"or")}}function ts(r){if(q(r instanceof H||r instanceof te),r instanceof H)return r;const e=r.getFilters();if(e.length===1)return ts(e[0]);if(Zh(r))return r;const t=e.map(i=>ts(i)),n=[];return t.forEach(i=>{i instanceof H?n.push(i):i instanceof te&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:te.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.an=new Sa}addToCollectionParentIndex(e,t){return this.an.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Be.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Be.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class Sa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ne(ee.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ne(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Uint8Array(0);class LI{constructor(e,t){this.databaseId=t,this.un=new Sa,this.cn=new Nt(n=>nn(n),(n,i)=>Zr(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.un.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.un.add(t)});const s={collectionId:n,parent:De(i)};return ll(e).put(s)}return A.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Lh(t),""],!1,!0);return ll(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(je(o.parent))}return n})}addFieldIndex(e,t){const n=_r(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=gn(e);return s.next(c=>{o.put(rl(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=_r(e),i=gn(e),s=mn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=_r(e),n=mn(e),i=gn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return A.forEach(this.ln(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new cl(n)._n();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=mn(e);let i=!0;const s=new Map;return A.forEach(this.ln(t),o=>this.hn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=K();const c=[];return A.forEach(s,(u,d)=>{C("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(u)} to execute ${nn(t)}`);const f=function(B,Q){const X=Vo(Q);if(X===void 0)return null;for(const G of Yi(B,X.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(d,u),m=function(B,Q){const X=new Map;for(const G of zt(Q))for(const E of Yi(B,G.fieldPath))switch(E.op){case"==":case"in":X.set(G.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return X.set(G.fieldPath.canonicalString(),E.value),Array.from(X.values())}return null}(d,u),I=function(B,Q){const X=[];let G=!0;for(const E of zt(Q)){const g=E.kind===0?zu(B,E.fieldPath,B.startAt):ju(B,E.fieldPath,B.startAt);X.push(g.value),G&&(G=g.inclusive)}return new xn(X,G)}(d,u),R=function(B,Q){const X=[];let G=!0;for(const E of zt(Q)){const g=E.kind===0?ju(B,E.fieldPath,B.endAt):zu(B,E.fieldPath,B.endAt);X.push(g.value),G&&(G=g.inclusive)}return new xn(X,G)}(d,u),V=this.Pn(u,d,I),x=this.Pn(u,d,R),D=this.In(u,d,m),M=this.Tn(u.indexId,f,V,I.inclusive,x,R.inclusive,D);return A.forEach(M,F=>n.G(F,t.limit).next(B=>{B.forEach(Q=>{const X=N.fromSegments(Q.documentKey);o.has(X)||(o=o.add(X),c.push(X))})}))}).next(()=>c)}return A.resolve(null)})}ln(e){let t=this.cn.get(e);return t||(e.filters.length===0?t=[e]:t=OI(te.create(e.filters,"and")).map(n=>Lo(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,t),t)}Tn(e,t,n,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),d=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const I=t?this.En(t[m/d]):Si,R=this.dn(e,I,n[m%d],i),V=this.An(e,I,s[m%d],o),x=c.map(D=>this.dn(e,I,D,!0));f.push(...this.createRange(R,V,x))}return f}dn(e,t,n,i){const s=new Gt(e,N.empty(),t,n);return i?s:s.Yt()}An(e,t,n,i){const s=new Gt(e,N.empty(),t,n);return i?s.Yt():s}hn(e,t){const n=new cl(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)n.nn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const i=this.ln(t);return A.forEach(i,s=>this.hn(e,s).next(o=>{o?n!==0&&o.fields.length<function(u){let d=new ne(oe.comparator),f=!1;for(const m of u.filters)for(const I of m.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:d=d.add(I.field));for(const m of u.orderBy)m.field.isKeyField()||(d=d.add(m.field));return d.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}Rn(e,t){const n=new gr;for(const i of zt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Jt(i.kind);Kt.Dt.It(s,o)}return n.Gt()}En(e){const t=new gr;return Kt.Dt.It(e,t.Jt(0)),t.Gt()}Vn(e,t){const n=new gr;return Kt.Dt.It(_a(this.databaseId,t),n.Jt(function(s){const o=zt(s);return o.length===0?0:o[o.length-1].kind}(e))),n.Gt()}In(e,t,n){if(n===null)return[];let i=[];i.push(new gr);let s=0;for(const o of zt(e)){const c=n[s++];for(const u of i)if(this.mn(t,o.fieldPath)&&$r(c))i=this.fn(i,o,c);else{const d=u.Jt(o.kind);Kt.Dt.It(c,d)}}return this.gn(i)}Pn(e,t,n){return this.In(e,t,n.position)}gn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Gt();return t}fn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const u=new gr;u.seed(c.Gt()),Kt.Dt.It(o,u.Jt(t.kind)),s.push(u)}return s}mn(e,t){return!!e.filters.find(n=>n instanceof H&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=_r(e),i=gn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return A.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){const I=m?new Br(m.sequenceNumber,new Be(sn(m.readTime),new N(je(m.documentKey)),m.largestBatchId)):Br.empty(),R=f.fields.map(([V,x])=>new Oi(oe.fromServerFormat(V),x));return new Hi(f.indexId,f.collectionGroup,R,I)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:$(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=_r(e),s=gn(e);return this.pn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>A.forEach(c,u=>s.put(rl(u.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),A.forEach(c,u=>this.yn(e,i,u).next(d=>{const f=this.wn(s,u);return d.isEqual(f)?A.resolve():this.Sn(e,s,u,d,f)}))))})}bn(e,t,n,i){return mn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Vn(n,t.key),documentKey:t.key.path.toArray()})}Dn(e,t,n,i){return mn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Vn(n,t.key),t.key.path.toArray()])}yn(e,t,n){const i=mn(e);let s=new ne(dt);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Vn(n,t)])},(o,c)=>{s=s.add(new Gt(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}wn(e,t){let n=new ne(dt);const i=this.Rn(t,e);if(i==null)return n;const s=Vo(t);if(s!=null){const o=e.data.field(s.fieldPath);if($r(o))for(const c of o.arrayValue.values||[])n=n.add(new Gt(t.indexId,e.key,this.En(c),i))}else n=n.add(new Gt(t.indexId,e.key,Si,i));return n}Sn(e,t,n,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,d,f,m,I){const R=u.getIterator(),V=d.getIterator();let x=pn(R),D=pn(V);for(;x||D;){let M=!1,F=!1;if(x&&D){const B=f(x,D);B<0?F=!0:B>0&&(M=!0)}else x!=null?F=!0:M=!0;M?(m(D),D=pn(V)):F?(I(x),x=pn(R)):(x=pn(R),D=pn(V))}}(i,s,dt,c=>{o.push(this.bn(e,t,n,c))},c=>{o.push(this.Dn(e,t,n,c))}),A.waitFor(o)}pn(e){let t=1;return gn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>dt(o,c)).filter((o,c,u)=>!c||dt(o,u[c-1])!==0);const i=[];i.push(e);for(const o of n){const c=dt(o,e),u=dt(o,t);if(c===0)i[0]=e.Yt();else if(c>0&&u<0)i.push(o),i.push(o.Yt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Si,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Si,[]];s.push(IDBKeyRange.bound(c,u))}return s}Cn(e,t){return dt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(hl)}getMinOffset(e,t){return A.mapArray(this.ln(t),n=>this.hn(e,n).next(i=>i||L())).next(hl)}}function ll(r){return me(r,"collectionParents")}function mn(r){return me(r,"indexEntries")}function _r(r){return me(r,"indexConfiguration")}function gn(r){return me(r,"indexState")}function hl(r){q(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;da(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Be(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ke{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=n.J({range:o},(f,m,I)=>(c++,I.delete()));s.push(u.next(()=>{q(c===1)}));const d=[];for(const f of t.mutations){const m=$h(e,f.key.path,t.batchId);s.push(i.delete(m)),d.push(f.key)}return A.waitFor(s).next(()=>d)}function ns(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw L();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(41943040,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);class As{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.vn={}}static lt(e,t,n,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new As(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ft(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=Tn(e),o=ft(e);return o.add({}).next(c=>{q(typeof c=="number");const u=new Ea(c,t,n,i),d=function(R,V,x){const D=x.baseMutations.map(F=>Zi(R.ct,F)),M=x.mutations.map(F=>Zi(R.ct,F));return{userId:V,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:D,mutations:M}}(this.serializer,this.userId,u),f=[];let m=new ne((I,R)=>$(I.canonicalString(),R.canonicalString()));for(const I of i){const R=$h(this.userId,I.key.path,c);m=m.add(I.key.path.popLast()),f.push(o.put(d)),f.push(s.put(R,Iy))}return m.forEach(I=>{f.push(this.indexManager.addToCollectionParentIndex(e,I))}),e.addOnCommittedListener(()=>{this.vn[c]=u.keys()}),A.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return ft(e).get(t).next(n=>n?(q(n.userId===this.userId),$t(this.serializer,n)):null)}Fn(e,t){return this.vn[t]?A.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return ft(e).J({index:"userMutationsIndex",range:i},(o,c,u)=>{c.userId===this.userId&&(q(c.batchId>=n),s=$t(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ft(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ft(e).U("userMutationsIndex",t).next(n=>n.map(i=>$t(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Mi(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return Tn(e).J({range:i},(o,c,u)=>{const[d,f,m]=o,I=je(f);if(d===this.userId&&t.path.isEqual(I))return ft(e).get(m).next(R=>{if(!R)throw L();q(R.userId===this.userId),s.push($t(this.serializer,R))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne($);const i=[];return t.forEach(s=>{const o=Mi(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=Tn(e).J({range:c},(d,f,m)=>{const[I,R,V]=d,x=je(R);I===this.userId&&s.path.isEqual(x)?n=n.add(V):m.done()});i.push(u)}),A.waitFor(i).next(()=>this.Mn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Mi(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new ne($);return Tn(e).J({range:o},(u,d,f)=>{const[m,I,R]=u,V=je(I);m===this.userId&&n.isPrefixOf(V)?V.length===i&&(c=c.add(R)):f.done()}).next(()=>this.Mn(e,c))}Mn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(ft(e).get(s).next(o=>{if(o===null)throw L();q(o.userId===this.userId),n.push($t(this.serializer,o))}))}),A.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Bd(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.xn(t.batchId)}),A.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Tn(e).J({range:n},(s,o,c)=>{if(s[0]===this.userId){const u=je(s[1]);i.push(u)}else c.done()}).next(()=>{q(i.length===0)})})}containsKey(e,t){return qd(e,this.userId,t)}On(e){return zd(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function qd(r,e,t){const n=Mi(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return Tn(r).J({range:s,H:!0},(c,u,d)=>{const[f,m,I]=c;f===e&&m===i&&(o=!0),d.done()}).next(()=>o)}function ft(r){return me(r,"mutations")}function Tn(r){return me(r,"documentMutations")}function zd(r){return me(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new on(0)}static Bn(){return new on(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.kn(e).next(t=>{const n=new on(t.highestTargetId);return t.highestTargetId=n.next(),this.qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(t=>z.fromTimestamp(new ae(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.kn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.qn(e,i)))}addTargetData(e,t){return this.Qn(e,t).next(()=>this.kn(e).next(n=>(n.targetCount+=1,this.Kn(t,n),this.qn(e,n))))}updateTargetData(e,t){return this.Qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>_n(e).delete(t.targetId)).next(()=>this.kn(e)).next(n=>(q(n.targetCount>0),n.targetCount-=1,this.qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return _n(e).J((o,c)=>{const u=br(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,t){return _n(e).J((n,i)=>{const s=br(i);t(s)})}kn(e){return fl(e).get("targetGlobalKey").next(t=>(q(t!==null),t))}qn(e,t){return fl(e).put("targetGlobalKey",t)}Qn(e,t){return _n(e).put(Md(this.serializer,t))}Kn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.kn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=nn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return _n(e).J({range:i,index:"queryTargetsIndex"},(o,c,u)=>{const d=br(c);Zr(t,d.target)&&(s=d,u.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=yt(e);return t.forEach(o=>{const c=De(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))}),A.waitFor(i)}removeMatchingKeys(e,t,n){const i=yt(e);return A.forEach(t,s=>{const o=De(s.path);return A.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=yt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=yt(e);let s=K();return i.J({range:n,H:!0},(o,c,u)=>{const d=je(o[1]),f=new N(d);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=De(t.path),i=IDBKeyRange.bound([n],[Lh(n)],!1,!0);let s=0;return yt(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],u,d)=>{o!==0&&(s++,d.done())}).next(()=>s>0)}ot(e,t){return _n(e).get(t).next(n=>n?br(n):null)}}function _n(r){return me(r,"targets")}function fl(r){return me(r,"targetGlobal")}function yt(r){return me(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl([r,e],[t,n]){const i=$(r,t);return i===0?$(e,n):i}class UI{constructor(e){this.$n=e,this.buffer=new ne(pl),this.Un=0}Wn(){return++this.Un}Gn(e){const t=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();pl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.zn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return this.zn!==null}jn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xt(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await kt(t)}await this.jn(3e5)})}}class qI{constructor(e,t){this.Hn=e,this.params=t}calculateTargetCount(e,t){return this.Hn.Jn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return A.resolve(xe.oe);const n=new UI(t);return this.Hn.forEachTarget(e,i=>n.Gn(i.sequenceNumber)).next(()=>this.Hn.Yn(e,i=>n.Gn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Hn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Hn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(dl)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dl):this.Zn(e,t))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,t){let n,i,s,o,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,c=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(d=Date.now(),yn()<=W.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function zI(r,e){return new qI(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t){this.db=e,this.garbageCollector=zI(this,t)}Jn(e){const t=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}Xn(e){let t=0;return this.Yn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Yn(e,t){return this.er(e,(n,i)=>t(i))}addReference(e,t,n){return Ri(e,n)}removeReference(e,t,n){return Ri(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ri(e,t)}tr(e,t){return function(i,s){let o=!1;return zd(i).Y(c=>qd(i,c,s).next(u=>(u&&(o=!0),A.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.er(e,(o,c)=>{if(c<=t){const u=this.tr(e,o).next(d=>{if(!d)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,z.min()),yt(e).delete(function(m){return[0,De(m.path)]}(o))))});i.push(u)}}).next(()=>A.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ri(e,t)}er(e,t){const n=yt(e);let i,s=xe.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:u,sequenceNumber:d})=>{o===0?(s!==xe.oe&&t(new N(je(i)),s),s=d,i=u):s=xe.oe}).next(()=>{s!==xe.oe&&t(new N(je(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ri(r,e){return yt(r).put(function(n,i){return{targetId:0,path:De(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.changes=new Nt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Bt(e).put(n)}removeEntry(e,t,n){return Bt(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],es(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.nr(e,n)))}getEntry(e,t){let n=le.newInvalidDocument(t);return Bt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(yr(t))},(i,s)=>{n=this.rr(t,s)}).next(()=>n)}ir(e,t){let n={size:0,document:le.newInvalidDocument(t)};return Bt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(yr(t))},(i,s)=>{n={document:this.rr(t,s),size:ns(s)}}).next(()=>n)}getEntries(e,t){let n=Fe();return this.sr(e,t,(i,s)=>{const o=this.rr(i,s);n=n.insert(i,o)}).next(()=>n)}_r(e,t){let n=Fe(),i=new ie(N.comparator);return this.sr(e,t,(s,o)=>{const c=this.rr(s,o);n=n.insert(s,c),i=i.insert(s,ns(o))}).next(()=>({documents:n,ar:i}))}sr(e,t,n){if(t.isEmpty())return A.resolve();let i=new ne(_l);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(yr(i.first()),yr(i.last())),o=i.getIterator();let c=o.getNext();return Bt(e).J({index:"documentKeyIndex",range:s},(u,d,f)=>{const m=N.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&_l(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,d),c=o.hasNext()?o.getNext():null),c?f.$(yr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),es(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Bt(e).U(IDBKeyRange.bound(c,u,!0)).next(d=>{s==null||s.incrementDocumentReadCount(d.length);let f=Fe();for(const m of d){const I=this.rr(N.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);I.isFoundDocument()&&(ei(t,I)||i.has(I.key))&&(f=f.insert(I.key,I))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Fe();const o=gl(t,n),c=gl(t,Be.max());return Bt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(u,d,f)=>{const m=this.rr(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new KI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ml(e).get("remoteDocumentGlobalKey").next(t=>(q(!!t),t))}nr(e,t){return ml(e).put("remoteDocumentGlobalKey",t)}rr(e,t){if(t){const n=PI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(z.min())))return n}return le.newInvalidDocument(e)}}function $d(r){return new $I(r)}class KI extends jd{constructor(e,t){super(),this.ur=e,this.trackRemovals=t,this.cr=new Nt(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ne((s,o)=>$(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.cr.get(s);if(t.push(this.ur.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=tl(this.ur.serializer,o);i=i.add(s.path.popLast());const d=ns(u);n+=d-c.size,t.push(this.ur.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=tl(this.ur.serializer,o.convertToNoDocument(z.min()));t.push(this.ur.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.ur.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ur.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.ur.ir(e,t).next(n=>(this.cr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.ur._r(e,t).next(({documents:n,ar:i})=>(i.forEach((s,o)=>{this.cr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function ml(r){return me(r,"remoteDocumentGlobal")}function Bt(r){return me(r,"remoteDocumentsV14")}function yr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function gl(r,e){const t=e.documentKey.path.toArray();return[r,es(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function _l(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=$(t[s],n[s]),i)return i;return i=$(t.length,n.length),i||(i=$(t[t.length-2],n[n.length-2]),i||$(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&kr(n.mutation,i,Ne.empty(),ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,K()).next(()=>n))}getLocalViewOfDocuments(e,t,n=K()){const i=$e();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=wr();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=$e();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,K()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,i){let s=Fe();const o=Vr(),c=function(){return Vr()}();return t.forEach((u,d)=>{const f=n.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ot)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),kr(f.mutation,d,f.mutation.getFieldMask(),ae.now())):o.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),t.forEach((d,f)=>{var m;return c.set(d,new GI(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Vr();let i=new ie((o,c)=>o-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=n.get(u)||Ne.empty();f=c.applyToLocalView(d,f),n.set(u,f);const m=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,m=hd();f.forEach(I=>{if(!s.has(I)){const R=yd(t.get(I),n.get(I));R!==null&&m.set(I,R),s=s.add(I)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return A.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):A.resolve($e());let c=-1,u=s;return o.next(d=>A.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{u=u.insert(f,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,K())).next(f=>({batchId:c,changes:ld(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next(n=>{let i=wr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=wr();return this.indexManager.getCollectionParents(e,s).next(c=>A.forEach(c,u=>{const d=function(m,I){return new _s(I,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next(f=>{f.forEach((m,I)=>{o=o.insert(m,I)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,le.newInvalidDocument(f)))});let c=wr();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&kr(f.mutation,d,Ne.empty(),ae.now()),ei(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return A.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ve(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:Ld(i.bundledQuery),readTime:Ve(i.readTime)}}(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.overlays=new ie(N.comparator),this.Pr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$e();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Pr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const i=$e(),s=t.length+1,o=new N(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ie((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let f=s.get(d.largestBatchId);f===null&&(f=$e(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=$e(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return A.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(n.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ta(t,n));let s=this.Pr.get(t);s===void 0&&(s=K(),this.Pr.set(t,s)),this.Pr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.Ir=new ne(ge.Tr),this.Er=new ne(ge.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const n=new ge(e,t);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Rr(new ge(e,t))}Vr(e,t){e.forEach(n=>this.removeReference(n,t))}mr(e){const t=new N(new ee([])),n=new ge(t,e),i=new ge(t,e+1),s=[];return this.Er.forEachInRange([n,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new N(new ee([])),n=new ge(t,e),i=new ge(t,e+1);let s=K();return this.Er.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ge(e,0),n=this.Ir.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ge{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return N.comparator(e.key,t.key)||$(e.yr,t.yr)}static dr(e,t){return $(e.yr,t.yr)||N.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new ne(ge.Tr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ea(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.Sr=this.Sr.add(new ge(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Dr(n),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ge(t,0),i=new ge(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,i],o=>{const c=this.br(o.yr);s.push(c)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne($);return t.forEach(i=>{const s=new ge(i,0),o=new ge(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],c=>{n=n.add(c.yr)})}),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;N.isDocumentKey(s)||(s=s.child(""));const o=new ge(new N(s),0);let c=new ne($);return this.Sr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.yr)),!0)},o),A.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const i=this.br(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){q(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Sr;return A.forEach(t.mutations,i=>{const s=new ge(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=n})}xn(e){}containsKey(e,t){const n=new ge(t,0),i=this.Sr.firstAfterOrEqual(n);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.Fr=e,this.docs=function(){return new ie(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let n=Fe();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():le.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Fe();const o=t.path,c=new N(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||da(Uh(f),n)<=0||(i.has(f.key)||ei(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,n,i){L()}Mr(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new XI(this)}getSize(e){return A.resolve(this.size)}}class XI extends jd{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.persistence=e,this.Or=new Nt(t=>nn(t),Zr),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Ra,this.targetCount=0,this.Br=on.Ln()}forEachTarget(e,t){return this.Or.forEach((n,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),A.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new on(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Qn(t),A.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Or.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.Or.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.Lr.Ar(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.Lr.Vr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Lr.pr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){this.kr={},this.overlays={},this.qr=new xe(0),this.Qr=!1,this.Qr=!0,this.Kr=new QI,this.referenceDelegate=e(this),this.$r=new ZI(this),this.indexManager=new MI,this.remoteDocumentCache=function(i){return new YI(i)}(n=>this.referenceDelegate.Ur(n)),this.serializer=new Od(t),this.Wr=new WI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new HI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new JI(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);const i=new eE(this.qr.next());return this.referenceDelegate.Gr(),n(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return A.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}class eE extends qh{constructor(e){super(),this.currentSequenceNumber=e}}class bs{constructor(e){this.persistence=e,this.Hr=new Ra,this.Jr=null}static Yr(e){return new bs(e)}get Zr(){if(this.Jr)return this.Jr;throw L()}addReference(e,t,n){return this.Hr.addReference(n,t),this.Zr.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Hr.removeReference(n,t),this.Zr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),A.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Zr,n=>{const i=N.fromPath(n);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,z.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(n=>{n?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return A.or([()=>A.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.serializer=e}O(e,t,n,i){const s=new ms("createOrUpgrade",t);n<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ku,{unique:!0}),u.createObjectStore("documentMutations")}(e),yl(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return n<3&&i>=3&&(n!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),yl(e)),o=o.next(()=>function(u){const d=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(u,d){return d.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ku,{unique:!0});const m=d.store("mutations"),I=f.map(R=>m.put(R));return A.waitFor(I)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.ti(s))),n<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ni(s)))),n<7&&i>=7&&(o=o.next(()=>this.ri(s))),n<8&&i>=8&&(o=o.next(()=>this.ii(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.si(s))),n<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(u){const d=u.createObjectStore("documentOverlays",{keyPath:Vy});d.createIndex("collectionPathOverlayIndex",ky,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",xy,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(u){const d=u.createObjectStore("remoteDocumentsV14",{keyPath:Ey});d.createIndex("documentKeyIndex",vy),d.createIndex("collectionGroupIndex",Ty)}(e)).next(()=>this.oi(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this._i(e,s))),n<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Ry}).createIndex("sequenceNumberIndex",Py,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:Cy}).createIndex("documentKeyIndex",Dy,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ni(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=ns(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ti(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>A.forEach(c,u=>{q(u.userId===s.userId);const d=$t(this.serializer,u);return Bd(e,s.userId,d).next(()=>{})}))}))}ri(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,c)=>{const u=new ee(o),d=function(m){return[0,De(m)]}(u);s.push(t.get(d).next(f=>f?A.resolve():(m=>t.put({targetId:0,path:De(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>A.waitFor(s))})}ii(e,t){e.createObjectStore("collectionParents",{keyPath:Sy});const n=t.store("collectionParents"),i=new Sa,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:De(u)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const u=new ee(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,u],d)=>{const f=je(c);return s(f.popLast())}))}si(e){const t=e.store("targets");return t.J((n,i)=>{const s=br(i),o=Md(this.serializer,s);return t.put(o)})}oi(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const c=t.store("remoteDocumentsV14"),u=function(m){return m.document?new N(ee.fromString(m.document.name).popFirst(5)):m.noDocument?N.fromSegments(m.noDocument.path):m.unknownDocument?N.fromSegments(m.unknownDocument.path):L()}(o).path.toArray(),d={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(d))}).next(()=>A.waitFor(i))}_i(e,t){const n=t.store("mutations"),i=$d(this.serializer),s=new Gd(bs.Yr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(u=>{var d;let f=(d=c.get(u.userId))!==null&&d!==void 0?d:K();$t(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),A.forEach(c,(u,d)=>{const f=new Ae(d),m=ws.lt(this.serializer,f),I=s.getIndexManager(f),R=As.lt(f,this.serializer,I,s.referenceDelegate);return new Kd(i,R,m,I).recalculateAndSaveOverlaysForDocumentKeys(new ko(t,xe.oe),u).next()})})}}function yl(r){r.createObjectStore("targetDocuments",{keyPath:Ay}).createIndex("documentTargetsIndex",by,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",wy,{unique:!0}),r.createObjectStore("targetGlobal")}const mo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pa{constructor(e,t,n,i,s,o,c,u,d,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ai=s,this.window=o,this.document=c,this.ui=d,this.ci=f,this.li=m,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.hi=null,this.inForeground=!1,this.Pi=null,this.Ii=null,this.Ti=Number.NEGATIVE_INFINITY,this.Ei=I=>Promise.resolve(),!Pa.D())throw new O(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new jI(this,i),this.di=t+"main",this.serializer=new Od(u),this.Ai=new bt(this.di,this.li,new tE(this.serializer)),this.Kr=new DI,this.$r=new FI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=$d(this.serializer),this.Wr=new CI,this.window&&this.window.localStorage?this.Ri=this.window.localStorage:(this.Ri=null,f===!1&&he("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Vi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,mo);return this.mi(),this.fi(),this.gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.$r.getHighestSequenceNumber(e))}).then(e=>{this.qr=new xe(e,this.ui)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ai&&this.Ai.close(),Promise.reject(e)))}pi(e){return this.Ei=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ai.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ai.enqueueAndForget(async()=>{this.started&&await this.Vi()}))}Vi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Pi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.yi(e).next(t=>{t||(this.isPrimary=!1,this.ai.enqueueRetryable(()=>this.Ei(!1)))})}).next(()=>this.wi(e)).next(t=>this.isPrimary&&!t?this.Si(e).next(()=>!1):!!t&&this.bi(e).next(()=>!0))).catch(e=>{if(xt(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ai.enqueueRetryable(()=>this.Ei(e)),this.isPrimary=e})}yi(e){return Ir(e).get("owner").next(t=>A.resolve(this.Di(t)))}Ci(e){return Pi(e).delete(this.clientId)}async vi(){if(this.isPrimary&&!this.Fi(this.Ti,18e5)){this.Ti=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=me(t,"clientMetadata");return n.U().next(i=>{const s=this.Mi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return A.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ri)for(const t of e)this.Ri.removeItem(this.xi(t.clientId))}}gi(){this.Ii=this.ai.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Vi().then(()=>this.vi()).then(()=>this.gi()))}Di(e){return!!e&&e.ownerId===this.clientId}wi(e){return this.ci?A.resolve(!0):Ir(e).get("owner").next(t=>{if(t!==null&&this.Fi(t.leaseTimestampMs,5e3)&&!this.Oi(t.ownerId)){if(this.Di(t)&&this.networkEnabled)return!0;if(!this.Di(t)){if(!t.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,mo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Pi(e).U().next(n=>this.Mi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Qr=!1,this.Ni(),this.Ii&&(this.Ii.cancel(),this.Ii=null),this.Li(),this.Bi(),await this.Ai.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ko(e,xe.oe);return this.Si(t).next(()=>this.Ci(t))}),this.Ai.close(),this.ki()}Mi(e,t){return e.filter(n=>this.Fi(n.updateTimeMs,t)&&!this.Oi(n.clientId))}qi(){return this.runTransaction("getActiveClients","readonly",e=>Pi(e).U().next(t=>this.Mi(t,18e5).map(n=>n.clientId)))}get started(){return this.Qr}getGlobalsCache(){return this.Kr}getMutationQueue(e,t){return As.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new LI(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ws.lt(this.serializer,e)}getBundleCache(){return this.Wr}runTransaction(e,t,n){C("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?My:u===16?Oy:u===15?pa:u===14?Wh:u===13?Gh:u===12?Ny:u===11?Kh:void L()}(this.li);let o;return this.Ai.runTransaction(e,i,s,c=>(o=new ko(c,this.qr?this.qr.next():xe.oe),t==="readwrite-primary"?this.yi(o).next(u=>!!u||this.wi(o)).next(u=>{if(!u)throw he(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ai.enqueueRetryable(()=>this.Ei(!1)),new O(P.FAILED_PRECONDITION,Bh);return n(o)}).next(u=>this.bi(o).next(()=>u)):this.Qi(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Qi(e){return Ir(e).get("owner").next(t=>{if(t!==null&&this.Fi(t.leaseTimestampMs,5e3)&&!this.Oi(t.ownerId)&&!this.Di(t)&&!(this.ci||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(P.FAILED_PRECONDITION,mo)})}bi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ir(e).put("owner",t)}static D(){return bt.D()}Si(e){const t=Ir(e);return t.get("owner").next(n=>this.Di(n)?(C("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):A.resolve())}Fi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(he(`Detected an update time that is in the future: ${e} > ${n}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Pi=()=>{this.ai.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Vi()))},this.document.addEventListener("visibilitychange",this.Pi),this.inForeground=this.document.visibilityState==="visible")}Li(){this.Pi&&(this.document.removeEventListener("visibilitychange",this.Pi),this.Pi=null)}fi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.hi=()=>{this.Ni();const t=/(?:Version|Mobile)\/1[456]/;$l()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ai.enterRestrictedMode(!0),this.ai.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.hi))}Bi(){this.hi&&(this.window.removeEventListener("pagehide",this.hi),this.hi=null)}Oi(e){var t;try{const n=((t=this.Ri)===null||t===void 0?void 0:t.getItem(this.xi(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return he("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Ni(){if(this.Ri)try{this.Ri.setItem(this.xi(this.clientId),String(Date.now()))}catch(e){he("Failed to set zombie client id.",e)}}ki(){if(this.Ri)try{this.Ri.removeItem(this.xi(this.clientId))}catch{}}xi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ir(r){return me(r,"owner")}function Pi(r){return me(r,"clientMetadata")}function Wd(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Ki=n,this.$i=i}static Ui(e,t){let n=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ca(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return $l()?8:zh(pe())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nE;return this.Zi(e,t,o).next(c=>{if(s.result=c,this.Gi)return this.Xi(e,t,o,c.size)})}).next(()=>s.result)}Xi(e,t,n,i){return n.documentReadCount<this.zi?(yn()<=W.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",In(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),A.resolve()):(yn()<=W.DEBUG&&C("QueryEngine","Query:",In(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ji*i?(yn()<=W.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",In(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ue(t))):A.resolve())}Ji(e,t){if($u(t))return A.resolve(null);let n=Ue(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Fo(t,null,"F"),n=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=K(...s);return this.Hi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.es(t,c);return this.ts(t,d,o,u.readTime)?this.Ji(e,Fo(t,null,"F")):this.ns(e,d,t,u)}))})))}Yi(e,t,n,i){return $u(t)||i.isEqual(z.min())?A.resolve(null):this.Hi.getDocuments(e,n).next(s=>{const o=this.es(t,s);return this.ts(t,o,n,i)?A.resolve(null):(yn()<=W.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),In(t)),this.ns(e,o,t,Fh(i,-1)).next(c=>c))})}es(e,t){let n=new ne(cd(e));return t.forEach((i,s)=>{ei(e,s)&&(n=n.add(s))}),n}ts(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,n){return yn()<=W.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",In(t)),this.Hi.getDocumentsMatchingQuery(e,t,Be.min(),n)}ns(e,t,n,i){return this.Hi.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,n,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new ie($),this.os=new Nt(s=>nn(s),Zr),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(n)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kd(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function Qd(r,e,t,n){return new rE(r,e,t,n)}async function Jd(r,e){const t=U(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],c=[];let u=K();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next(d=>({ls:d,removedBatchIds:o,addedBatchIds:c}))})})}function iE(r,e){const t=U(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.us.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const m=d.batch,I=m.keys();let R=A.resolve();return I.forEach(V=>{R=R.next(()=>f.getEntry(u,V)).next(x=>{const D=d.docVersions.get(V);q(D!==null),x.version.compareTo(D)<0&&(m.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=K();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Yd(r){const e=U(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function sE(r,e){const t=U(r),n=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const c=[];e.targetChanges.forEach((f,m)=>{const I=i.get(m);if(!I)return;c.push(t.$r.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.$r.addMatchingKeys(s,f.addedDocuments,m)));let R=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(de.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),i=i.insert(m,R),function(x,D,M){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(I,R,f)&&c.push(t.$r.updateTargetData(s,R))});let u=Fe(),d=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(oE(s,o,e.documentUpdates).next(f=>{u=f.hs,d=f.Ps})),!n.isEqual(z.min())){const f=t.$r.getLastRemoteSnapshotVersion(s).next(m=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return A.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.ss=i,s))}function oE(r,e,t){let n=K(),i=K();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Fe();return t.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(z.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):C("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function aE(r,e){const t=U(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function rs(r,e){const t=U(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.$r.getTargetData(n,e).next(s=>s?(i=s,A.resolve(i)):t.$r.allocateTargetId(n).next(o=>(i=new nt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.$r.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.ss.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(n.targetId,n),t.os.set(e,n.targetId)),n})}async function Fn(r,e,t){const n=U(r),i=n.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xt(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.ss=n.ss.remove(e),n.os.delete(i.target)}function Go(r,e,t){const n=U(r);let i=z.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=U(u),I=m.os.get(f);return I!==void 0?A.resolve(m.ss.get(I)):m.$r.getTargetData(d,f)}(n,o,Ue(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.$r.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>n.rs.getDocumentsMatchingQuery(o,e,t?i:z.min(),t?s:K())).next(c=>(ef(n,ad(e),c),{documents:c,Is:s})))}function Xd(r,e){const t=U(r),n=U(t.$r),i=t.ss.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function Zd(r,e){const t=U(r),n=t._s.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.us.getAllFromCollectionGroup(i,e,Fh(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(ef(t,e,i),i))}function ef(r,e,t){let n=r._s.get(e)||z.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r._s.set(e,n)}function Il(r,e){return`firestore_clients_${r}_${e}`}function El(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function go(r,e){return`firestore_targets_${r}_${e}`}class is{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static As(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new O(i.error.code,i.error.message))),o?new is(e,t,i.state,s):(he("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Rs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static As(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new O(n.error.code,n.error.message))),s?new xr(e,n.state,i):(he("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Rs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ss{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static As(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Ia();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=jh(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new ss(e,s):(he("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Da{constructor(e,t){this.clientId=e,this.onlineState=t}static As(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Da(t.clientId,t.onlineState):(he("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Wo{constructor(){this.activeTargetIds=Ia()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _o{constructor(e,t,n,i,s){this.window=e,this.ai=t,this.persistenceKey=n,this.gs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ps=this.ys.bind(this),this.ws=new ie($),this.started=!1,this.Ss=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.bs=Il(this.persistenceKey,this.gs),this.Ds=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ws=this.ws.insert(this.gs,new Wo),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.vs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Fs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ms=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.xs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ps)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.qi();for(const n of e){if(n===this.gs)continue;const i=this.getItem(Il(this.persistenceKey,n));if(i){const s=ss.As(n,i);s&&(this.ws=this.ws.insert(s.clientId,s))}}this.Os();const t=this.storage.getItem(this.Ms);if(t){const n=this.Ns(t);n&&this.Ls(n)}for(const n of this.Ss)this.ys(n);this.Ss=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ds,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ws)}isActiveQueryTarget(e){let t=!1;return this.ws.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ks(e,"pending")}updateMutationState(e,t,n){this.ks(e,t,n),this.qs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(go(this.persistenceKey,e));if(n){const i=xr.As(e,n);i&&(t=i.state)}}return this.Qs.Vs(e),this.Os(),t}removeLocalQueryTarget(e){this.Qs.fs(e),this.Os()}isLocalQueryTarget(e){return this.Qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(go(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ks(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.$s(e)}notifyBundleLoaded(e){this.Us(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ps),this.removeItem(this.bs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return C("SharedClientState","READ",e,t),t}setItem(e,t){C("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ys(e){const t=e;if(t.storageArea===this.storage){if(C("SharedClientState","EVENT",t.key,t.newValue),t.key===this.bs)return void he("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ai.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Ws(t.key);return this.Gs(n,null)}{const n=this.zs(t.key,t.newValue);if(n)return this.Gs(n.clientId,n)}}else if(this.vs.test(t.key)){if(t.newValue!==null){const n=this.js(t.key,t.newValue);if(n)return this.Hs(n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Js(t.key,t.newValue);if(n)return this.Ys(n)}}else if(t.key===this.Ms){if(t.newValue!==null){const n=this.Ns(t.newValue);if(n)return this.Ls(n)}}else if(t.key===this.Ds){const n=function(s){let o=xe.oe;if(s!=null)try{const c=JSON.parse(s);q(typeof c=="number"),o=c}catch(c){he("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==xe.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.xs){const n=this.Zs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.Xs(i)))}}}else this.Ss.push(t)})}}get Qs(){return this.ws.get(this.gs)}Os(){this.setItem(this.bs,this.Qs.Rs())}ks(e,t,n){const i=new is(this.currentUser,e,t,n),s=El(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Rs())}qs(e){const t=El(this.persistenceKey,this.currentUser,e);this.removeItem(t)}$s(e){const t={clientId:this.gs,onlineState:e};this.storage.setItem(this.Ms,JSON.stringify(t))}Ks(e,t,n){const i=go(this.persistenceKey,e),s=new xr(e,t,n);this.setItem(i,s.Rs())}Us(e){const t=JSON.stringify(Array.from(e));this.setItem(this.xs,t)}Ws(e){const t=this.Cs.exec(e);return t?t[1]:null}zs(e,t){const n=this.Ws(e);return ss.As(n,t)}js(e,t){const n=this.vs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return is.As(new Ae(s),i,t)}Js(e,t){const n=this.Fs.exec(e),i=Number(n[1]);return xr.As(i,t)}Ns(e){return Da.As(e)}Zs(e){return JSON.parse(e)}async Hs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.eo(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ys(e){return this.syncEngine.no(e.targetId,e.state,e.error)}Gs(e,t){const n=t?this.ws.insert(e,t):this.ws.remove(e),i=this.Bs(this.ws),s=this.Bs(n),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.ro(o,c).then(()=>{this.ws=n})}Ls(e){this.ws.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let t=Ia();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class tf{constructor(){this.io=new Wo,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,n){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Wo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci=null;function yo(){return Ci===null?Ci=function(){return 268435456+Math.round(2147483648*Math.random())}():Ci++,"0x"+Ci.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="WebChannelConnection";class hE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=n+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,n,i,s,o){const c=yo(),u=this.Mo(t,n.toUriEncodedString());C("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const d={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(d,s,o),this.Oo(t,u,d,i).then(f=>(C("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Fr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}No(t,n,i,s,o,c){return this.Fo(t,n,i,s,o)}xo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Mo(t,n){const i=uE[t];return`${this.bo}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,n,i){const s=yo();return new Promise((o,c)=>{const u=new Dh;u.setWithCredentials(!0),u.listenOnce(kh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ni.NO_ERROR:const f=u.getResponseJson();C(we,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ni.TIMEOUT:C(we,`RPC '${e}' ${s} timed out`),c(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const m=u.getStatus();if(C(we,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const V=function(D){const M=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(M)>=0?M:P.UNKNOWN}(R.status);c(new O(V,R.message))}else c(new O(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new O(P.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{C(we,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);C(we,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,n,15)})}Lo(e,t,n){const i=yo(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Oh(),c=Nh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Vh({})),this.xo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");C(we,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let I=!1,R=!1;const V=new lE({Po:D=>{R?C(we,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(I||(C(we,`Opening RPC '${e}' stream ${i} transport.`),m.open(),I=!0),C(we,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Io:()=>m.close()}),x=(D,M,F)=>{D.listen(M,B=>{try{F(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return x(m,Tr.EventType.OPEN,()=>{R||(C(we,`RPC '${e}' stream ${i} transport opened.`),V.po())}),x(m,Tr.EventType.CLOSE,()=>{R||(R=!0,C(we,`RPC '${e}' stream ${i} transport closed`),V.wo())}),x(m,Tr.EventType.ERROR,D=>{R||(R=!0,Fr(we,`RPC '${e}' stream ${i} transport errored:`,D),V.wo(new O(P.UNAVAILABLE,"The operation could not be completed")))}),x(m,Tr.EventType.MESSAGE,D=>{var M;if(!R){const F=D.data[0];q(!!F);const B=F,Q=B.error||((M=B[0])===null||M===void 0?void 0:M.error);if(Q){C(we,`RPC '${e}' stream ${i} received error:`,Q);const X=Q.status;let G=function(y){const v=fe[y];if(v!==void 0)return vd(v)}(X),E=Q.message;G===void 0&&(G=P.INTERNAL,E="Unknown error status: "+X+" with message "+Q.message),R=!0,V.wo(new O(G,E)),m.close()}else C(we,`RPC '${e}' stream ${i} received:`,F),V.So(F)}}),x(c,xh.STAT_EVENT,D=>{D.stat===Do.PROXY?C(we,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Do.NOPROXY&&C(we,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.yo()},0),V}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){return typeof window<"u"?window:null}function qi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(r){return new yI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=n,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-n);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,n,i,s,o,c,u){this.ai=e,this.jo=n,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new rf(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(he(t.toString()),he("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Jo===t&&this.h_(n,i)},n=>{e(()=>{const i=new O(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.P_(i)})})}h_(e,t){const n=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{n(()=>this.listener.To())}),this.stream.Ao(()=>{n(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{n(()=>this.P_(i))}),this.stream.onMessage(i=>{n(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dE extends sf{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=vI(this.serializer,e),n=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Ve(o.readTime):z.min()}(e);return this.listener.E_(t,n)}d_(e){const t={};t.database=qo(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=Ji(u)?{documents:Cd(s,u)}:{query:Dd(s,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Ad(s,o.resumeToken);const d=Uo(s,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(z.min())>0){c.readTime=Ln(s,o.snapshotVersion.toTimestamp());const d=Uo(s,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const n=wI(this.serializer,e);n&&(t.labels=n),this.__(t)}A_(e){const t={};t.database=qo(this.serializer),t.removeTarget=e,this.__(t)}}class fE extends sf{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return q(!!e.streamToken),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const t=TI(e.writeResults,e.commitTime),n=Ve(e.commitTime);return this.listener.f_(n,t)}g_(){const e={};e.database=qo(this.serializer),this.__(e)}V_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Zi(this.serializer,n))};this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,n,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Bo(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(P.UNKNOWN,s.toString())})}No(e,t,n,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.No(e,Bo(t,n),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class mE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(he(t),this.b_=!1):C("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{n.enqueueAndForget(async()=>{un(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=U(u);d.N_.add(4),await ri(d),d.k_.set("Unknown"),d.N_.delete(4),await Rs(d)}(this))})}),this.k_=new mE(n,i)}}async function Rs(r){if(un(r))for(const e of r.L_)await e(!0)}async function ri(r){for(const e of r.L_)await e(!1)}function Ps(r,e){const t=U(r);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),xa(t)?ka(t):Jn(t).n_()&&Va(t,e))}function Un(r,e){const t=U(r),n=Jn(t);t.O_.delete(e),n.n_()&&of(t,e),t.O_.size===0&&(n.n_()?n.s_():un(t)&&t.k_.set("Unknown"))}function Va(r,e){if(r.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jn(r).d_(e)}function of(r,e){r.q_.xe(e),Jn(r).A_(e)}function ka(r){r.q_=new pI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.O_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Jn(r).start(),r.k_.D_()}function xa(r){return un(r)&&!Jn(r).t_()&&r.O_.size>0}function un(r){return U(r).N_.size===0}function af(r){r.q_=void 0}async function _E(r){r.k_.set("Online")}async function yE(r){r.O_.forEach((e,t)=>{Va(r,e)})}async function IE(r,e){af(r),xa(r)?(r.k_.F_(e),ka(r)):r.k_.set("Unknown")}async function EE(r,e,t){if(r.k_.set("Online"),e instanceof wd&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.O_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.O_.delete(c),i.q_.removeTarget(c))}(r,e)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await os(r,n)}else if(e instanceof Bi?r.q_.Ke(e):e instanceof Td?r.q_.He(e):r.q_.We(e),!t.isEqual(z.min()))try{const n=await Yd(r.localStore);t.compareTo(n)>=0&&await function(s,o){const c=s.q_.rt(o);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.O_.get(d);f&&s.O_.set(d,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,d)=>{const f=s.O_.get(u);if(!f)return;s.O_.set(u,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),of(s,u);const m=new nt(f.target,u,d,f.sequenceNumber);Va(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await os(r,n)}}async function os(r,e,t){if(!xt(e))throw e;r.N_.add(1),await ri(r),r.k_.set("Offline"),t||(t=()=>Yd(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),r.N_.delete(1),await Rs(r)})}function cf(r,e){return e().catch(t=>os(r,t,e))}async function Qn(r){const e=U(r),t=Dt(e);let n=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;vE(e);)try{const i=await aE(e.localStore,n);if(i===null){e.x_.length===0&&t.s_();break}n=i.batchId,TE(e,i)}catch(i){await os(e,i)}uf(e)&&lf(e)}function vE(r){return un(r)&&r.x_.length<10}function TE(r,e){r.x_.push(e);const t=Dt(r);t.n_()&&t.R_&&t.V_(e.mutations)}function uf(r){return un(r)&&!Dt(r).t_()&&r.x_.length>0}function lf(r){Dt(r).start()}async function wE(r){Dt(r).g_()}async function AE(r){const e=Dt(r);for(const t of r.x_)e.V_(t.mutations)}async function bE(r,e,t){const n=r.x_.shift(),i=va.from(n,e,t);await cf(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Qn(r)}async function SE(r,e){e&&Dt(r).R_&&await async function(n,i){if(function(o){return hI(o)&&o!==P.ABORTED}(i.code)){const s=n.x_.shift();Dt(n).i_(),await cf(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Qn(n)}}(r,e),uf(r)&&lf(r)}async function Tl(r,e){const t=U(r);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=un(t);t.N_.add(3),await ri(t),n&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await Rs(t)}async function Ho(r,e){const t=U(r);e?(t.N_.delete(2),await Rs(t)):e||(t.N_.add(2),await ri(t),t.k_.set("Unknown"))}function Jn(r){return r.Q_||(r.Q_=function(t,n,i){const s=U(t);return s.y_(),new dE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{To:_E.bind(null,r),Ao:yE.bind(null,r),Vo:IE.bind(null,r),E_:EE.bind(null,r)}),r.L_.push(async e=>{e?(r.Q_.i_(),xa(r)?ka(r):r.k_.set("Unknown")):(await r.Q_.stop(),af(r))})),r.Q_}function Dt(r){return r.K_||(r.K_=function(t,n,i){const s=U(t);return s.y_(),new fE(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{To:()=>Promise.resolve(),Ao:wE.bind(null,r),Vo:SE.bind(null,r),m_:AE.bind(null,r),f_:bE.bind(null,r)}),r.L_.push(async e=>{e?(r.K_.i_(),await Qn(r)):(await r.K_.stop(),r.x_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.x_.length} pending writes`),r.x_=[]))})),r.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new Na(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oa(r,e){if(he("AsyncQueue",`${e}: ${r}`),xt(r))return new O(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||N.comparator(t.key,n.key):(t,n)=>N.comparator(t.key,n.key),this.keyedMap=wr(),this.sortedSet=new ie(this.comparator)}static emptySet(e){return new Pn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Pn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.U_=new ie(N.comparator)}track(e){const t=e.doc.key,n=this.U_.get(t);n?e.type!==0&&n.type===3?this.U_=this.U_.insert(t,e):e.type===3&&n.type!==1?this.U_=this.U_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.U_=this.U_.remove(t):e.type===1&&n.type===2?this.U_=this.U_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):L():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Bn{constructor(e,t,n,i,s,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Bn(e,t,Pn.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Is(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class PE{constructor(){this.queries=Al(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,n){const i=U(t),s=i.queries;i.queries=Al(),s.forEach((o,c)=>{for(const u of c.z_)u.onError(n)})})(this,new O(P.ABORTED,"Firestore shutting down"))}}function Al(){return new Nt(r=>od(r),Is)}async function CE(r,e){const t=U(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(n=2):(s=new RE,n=e.H_()?0:1);try{switch(n){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Oa(o,`Initialization of query '${In(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&Ma(t)}async function DE(r,e){const t=U(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function VE(r,e){const t=U(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.z_)c.Z_(i)&&(n=!0);o.G_=i}}n&&Ma(t)}function kE(r,e,t){const n=U(r),i=n.queries.get(e);if(i)for(const s of i.z_)s.onError(t);n.queries.delete(e)}function Ma(r){r.J_.forEach(e=>{e.next()})}var Qo,bl;(bl=Qo||(Qo={})).X_="default",bl.Cache="cache";class xE{constructor(e,t,n){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=n||{}}Z_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Bn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const n=t!=="Offline";return(!this.options.oa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Qo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.key=e}}class df{constructor(e){this.key=e}}class NE{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=K(),this.mutatedKeys=K(),this.da=cd(e),this.Aa=new Pn(this.da)}get Ra(){return this.Ia}Va(e,t){const n=t?t.ma:new wl,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const I=i.get(f),R=ei(this.query,m)?m:null,V=!!I&&this.mutatedKeys.has(I.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;I&&R?I.data.isEqual(R.data)?V!==x&&(n.track({type:3,doc:R}),D=!0):this.fa(I,R)||(n.track({type:2,doc:R}),D=!0,(u&&this.da(R,u)>0||d&&this.da(R,d)<0)&&(c=!0)):!I&&R?(n.track({type:0,doc:R}),D=!0):I&&!R&&(n.track({type:1,doc:I}),D=!0,(u||d)&&(c=!0)),D&&(R?(o=o.add(R),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Aa:o,ma:n,ts:c,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((f,m)=>function(R,V){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(R)-x(V)}(f.type,m.type)||this.da(f.doc,m.doc)),this.ga(n),i=i!=null&&i;const c=t&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,d=u!==this.Ta;return this.Ta=u,o.length!==0||d?{snapshot:new Bn(this.query,e.Aa,s,o,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ya:c}:{ya:c}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new wl,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=K(),this.Aa.forEach(n=>{this.wa(n.key)&&(this.Ea=this.Ea.add(n.key))});const t=[];return e.forEach(n=>{this.Ea.has(n)||t.push(new df(n))}),this.Ea.forEach(n=>{e.has(n)||t.push(new hf(n))}),t}Sa(e){this.Ia=e.Is,this.Ea=K();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return Bn.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class OE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ME{constructor(e){this.key=e,this.Da=!1}}class LE{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Nt(c=>od(c),Is),this.Fa=new Map,this.Ma=new Set,this.xa=new ie(N.comparator),this.Oa=new Map,this.Na=new Ra,this.La={},this.Ba=new Map,this.ka=on.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function FE(r,e,t=!0){const n=Cs(r);let i;const s=n.va.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await ff(n,e,t,!0),i}async function UE(r,e){const t=Cs(r);await ff(t,e,!0,!1)}async function ff(r,e,t,n){const i=await rs(r.localStore,Ue(e)),s=i.targetId,o=t?r.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return n&&(c=await La(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&Ps(r.remoteStore,i),c}async function La(r,e,t,n,i){r.Qa=(m,I,R)=>async function(x,D,M,F){let B=D.view.Va(M);B.ts&&(B=await Go(x.localStore,D.query,!1).then(({documents:E})=>D.view.Va(E,B)));const Q=F&&F.targetChanges.get(D.targetId),X=F&&F.targetMismatches.get(D.targetId)!=null,G=D.view.applyChanges(B,x.isPrimaryClient,Q,X);return Jo(x,D.targetId,G.ya),G.snapshot}(r,m,I,R);const s=await Go(r.localStore,e,!0),o=new NE(e,s.Is),c=o.Va(s.documents),u=ni.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),d=o.applyChanges(c,r.isPrimaryClient,u);Jo(r,t,d.ya);const f=new OE(e,t,o);return r.va.set(e,f),r.Fa.has(t)?r.Fa.get(t).push(e):r.Fa.set(t,[e]),d.snapshot}async function BE(r,e,t){const n=U(r),i=n.va.get(e),s=n.Fa.get(i.targetId);if(s.length>1)return n.Fa.set(i.targetId,s.filter(o=>!Is(o,e))),void n.va.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Fn(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Un(n.remoteStore,i.targetId),qn(n,i.targetId)}).catch(kt)):(qn(n,i.targetId),await Fn(n.localStore,i.targetId,!0))}async function qE(r,e){const t=U(r),n=t.va.get(e),i=t.Fa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Un(t.remoteStore,n.targetId))}async function zE(r,e,t){const n=qa(r);try{const i=await function(o,c){const u=U(o),d=ae.now(),f=c.reduce((R,V)=>R.add(V.key),K());let m,I;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let V=Fe(),x=K();return u.us.getEntries(R,f).next(D=>{V=D,V.forEach((M,F)=>{F.isValidDocument()||(x=x.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,V)).next(D=>{m=D;const M=[];for(const F of c){const B=uI(F,m.get(F.key).overlayedDocument);B!=null&&M.push(new ot(F.key,B,Yh(B.value.mapValue),Ce.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,M,c)}).next(D=>{I=D;const M=D.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(R,D.batchId,M)})}).then(()=>({batchId:I.batchId,changes:ld(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let d=o.La[o.currentUser.toKey()];d||(d=new ie($)),d=d.insert(c,u),o.La[o.currentUser.toKey()]=d}(n,i.batchId,t),await Ot(n,i.changes),await Qn(n.remoteStore)}catch(i){const s=Oa(i,"Failed to persist write");t.reject(s)}}async function pf(r,e){const t=U(r);try{const n=await sE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Oa.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?q(o.Da):i.removedDocuments.size>0&&(q(o.Da),o.Da=!1))}),await Ot(t,n,e)}catch(n){await kt(n)}}function Sl(r,e,t){const n=U(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.va.forEach((s,o)=>{const c=o.view.Y_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=U(o);u.onlineState=c;let d=!1;u.queries.forEach((f,m)=>{for(const I of m.z_)I.Y_(c)&&(d=!0)}),d&&Ma(u)}(n.eventManager,e),i.length&&n.Ca.E_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function jE(r,e,t){const n=U(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Oa.get(e),s=i&&i.key;if(s){let o=new ie(N.comparator);o=o.insert(s,le.newNoDocument(s,z.min()));const c=K().add(s),u=new ti(z.min(),new Map,new ie($),o,c);await pf(n,u),n.xa=n.xa.remove(s),n.Oa.delete(e),Ba(n)}else await Fn(n.localStore,e,!1).then(()=>qn(n,e,t)).catch(kt)}async function $E(r,e){const t=U(r),n=e.batch.batchId;try{const i=await iE(t.localStore,e);Ua(t,n,null),Fa(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ot(t,i)}catch(i){await kt(i)}}async function KE(r,e,t){const n=U(r);try{const i=await function(o,c){const u=U(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(m=>(q(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(n.localStore,e);Ua(n,e,t),Fa(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ot(n,i)}catch(i){await kt(i)}}function Fa(r,e){(r.Ba.get(e)||[]).forEach(t=>{t.resolve()}),r.Ba.delete(e)}function Ua(r,e,t){const n=U(r);let i=n.La[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.La[n.currentUser.toKey()]=i}}function qn(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Fa.get(e))r.va.delete(n),t&&r.Ca.Ka(n,t);r.Fa.delete(e),r.isPrimaryClient&&r.Na.mr(e).forEach(n=>{r.Na.containsKey(n)||mf(r,n)})}function mf(r,e){r.Ma.delete(e.path.canonicalString());const t=r.xa.get(e);t!==null&&(Un(r.remoteStore,t),r.xa=r.xa.remove(e),r.Oa.delete(t),Ba(r))}function Jo(r,e,t){for(const n of t)n instanceof hf?(r.Na.addReference(n.key,e),GE(r,n)):n instanceof df?(C("SyncEngine","Document no longer in limbo: "+n.key),r.Na.removeReference(n.key,e),r.Na.containsKey(n.key)||mf(r,n.key)):L()}function GE(r,e){const t=e.key,n=t.path.canonicalString();r.xa.get(t)||r.Ma.has(n)||(C("SyncEngine","New document in limbo: "+t),r.Ma.add(n),Ba(r))}function Ba(r){for(;r.Ma.size>0&&r.xa.size<r.maxConcurrentLimboResolutions;){const e=r.Ma.values().next().value;r.Ma.delete(e);const t=new N(ee.fromString(e)),n=r.ka.next();r.Oa.set(n,new ME(t)),r.xa=r.xa.insert(t,n),Ps(r.remoteStore,new nt(Ue(ys(t.path)),n,"TargetPurposeLimboResolution",xe.oe))}}async function Ot(r,e,t){const n=U(r),i=[],s=[],o=[];n.va.isEmpty()||(n.va.forEach((c,u)=>{o.push(n.Qa(u,e,t).then(d=>{var f;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Ca.Ui(u.targetId,d);s.push(m)}}))}),await Promise.all(o),n.Ca.E_(i),await async function(u,d){const f=U(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>A.forEach(d,I=>A.forEach(I.Ki,R=>f.persistence.referenceDelegate.addReference(m,I.targetId,R)).next(()=>A.forEach(I.$i,R=>f.persistence.referenceDelegate.removeReference(m,I.targetId,R)))))}catch(m){if(!xt(m))throw m;C("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const I=m.targetId;if(!m.fromCache){const R=f.ss.get(I),V=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(V);f.ss=f.ss.insert(I,x)}}}(n.localStore,s))}async function WE(r,e){const t=U(r);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const n=await Jd(t.localStore,e);t.currentUser=e,function(s,o){s.Ba.forEach(c=>{c.forEach(u=>{u.reject(new O(P.CANCELLED,o))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ot(t,n.ls)}}function HE(r,e){const t=U(r),n=t.Oa.get(e);if(n&&n.Da)return K().add(n.key);{let i=K();const s=t.Fa.get(e);if(!s)return i;for(const o of s){const c=t.va.get(o);i=i.unionWith(c.view.Ra)}return i}}async function QE(r,e){const t=U(r),n=await Go(t.localStore,e.query,!0),i=e.view.Sa(n);return t.isPrimaryClient&&Jo(t,e.targetId,i.ya),i}async function JE(r,e){const t=U(r);return Zd(t.localStore,e).then(n=>Ot(t,n))}async function YE(r,e,t,n){const i=U(r),s=await function(c,u){const d=U(c),f=U(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Fn(m,u).next(I=>I?d.localDocuments.getDocuments(m,I):A.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Qn(i.remoteStore):t==="acknowledged"||t==="rejected"?(Ua(i,e,n||null),Fa(i,e),function(c,u){U(U(c).mutationQueue).xn(u)}(i.localStore,e)):L(),await Ot(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function XE(r,e){const t=U(r);if(Cs(t),qa(t),e===!0&&t.qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await Rl(t,n.toArray());t.qa=!0,await Ho(t.remoteStore,!0);for(const s of i)Ps(t.remoteStore,s)}else if(e===!1&&t.qa!==!1){const n=[];let i=Promise.resolve();t.Fa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(qn(t,o),Fn(t.localStore,o,!0))),Un(t.remoteStore,o)}),await i,await Rl(t,n),function(o){const c=U(o);c.Oa.forEach((u,d)=>{Un(c.remoteStore,d)}),c.Na.gr(),c.Oa=new Map,c.xa=new ie(N.comparator)}(t),t.qa=!1,await Ho(t.remoteStore,!1)}}async function Rl(r,e,t){const n=U(r),i=[],s=[];for(const o of e){let c;const u=n.Fa.get(o);if(u&&u.length!==0){c=await rs(n.localStore,Ue(u[0]));for(const d of u){const f=n.va.get(d),m=await QE(n,f);m.snapshot&&s.push(m.snapshot)}}else{const d=await Xd(n.localStore,o);c=await rs(n.localStore,d),await La(n,gf(d),o,!1,c.resumeToken)}i.push(c)}return n.Ca.E_(s),i}function gf(r){return sd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function ZE(r){return function(t){return U(U(t).persistence).qi()}(U(r).localStore)}async function ev(r,e,t,n){const i=U(r);if(i.qa)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i.Fa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Zd(i.localStore,ad(s[0])),c=ti.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await Ot(i,o,c);break}case"rejected":await Fn(i.localStore,e,!0),qn(i,e,n);break;default:L()}}async function tv(r,e,t){const n=Cs(r);if(n.qa){for(const i of e){if(n.Fa.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await Xd(n.localStore,i),o=await rs(n.localStore,s);await La(n,gf(s),o.targetId,!1,o.resumeToken),Ps(n.remoteStore,o)}for(const i of t)n.Fa.has(i)&&await Fn(n.localStore,i,!1).then(()=>{Un(n.remoteStore,i),qn(n,i)}).catch(kt)}}function Cs(r){const e=U(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=pf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jE.bind(null,e),e.Ca.E_=VE.bind(null,e.eventManager),e.Ca.Ka=kE.bind(null,e.eventManager),e}function qa(r){const e=U(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$E.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KE.bind(null,e),e}class Yo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ss(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Qd(this.persistence,new Hd,e.initialUser,this.serializer)}createPersistence(e){return new Gd(bs.Yr,this.serializer)}createSharedClientState(e){return new tf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _f extends Yo{constructor(e,t,n){super(),this.Ua=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ua.initialize(this,e),await qa(this.Ua.syncEngine),await Qn(this.Ua.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Qd(this.persistence,new Hd,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new BI(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new _y(t,this.persistence);return new gy(e.asyncQueue,n)}createPersistence(e){const t=Wd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new Pa(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,nf(),qi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new tf}}class nv extends _f{constructor(e,t){super(e,t,!1),this.Ua=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ua.syncEngine;this.sharedClientState instanceof _o&&(this.sharedClientState.syncEngine={eo:YE.bind(null,t),no:ev.bind(null,t),ro:tv.bind(null,t),qi:ZE.bind(null,t),Xs:JE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi(async n=>{await XE(this.Ua.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=nf();if(!_o.D(t))throw new O(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Wd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new _o(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class za{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Sl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=WE.bind(null,this.syncEngine),await Ho(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PE}()}createDatastore(e){const t=Ss(e.databaseInfo.databaseId),n=function(s){return new hE(s)}(e.databaseInfo);return function(s,o,c,u){return new pE(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,c){return new gE(n,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Sl(this.syncEngine,t,0),function(){return vl.D()?new vl:new cE}())}createSyncEngine(e,t){return function(i,s,o,c,u,d,f){const m=new LE(i,s,o,c,u,d);return f&&(m.qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=U(i);C("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await ri(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):he("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=Mh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Oa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Io(r,e){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Jd(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Pl(r,e){r.asyncQueue.verifyOperationInProgress();const t=await ov(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Tl(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Tl(e.remoteStore,i)),r._onlineComponents=e}function sv(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function ov(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Io(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!sv(t))throw t;Fr("Error using user provided cache. Falling back to memory cache: "+t),await Io(r,new Yo)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Io(r,new Yo);return r._offlineComponents}async function yf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Pl(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Pl(r,new za))),r._onlineComponents}function av(r){return yf(r).then(e=>e.syncEngine)}async function Cl(r){const e=await yf(r),t=e.eventManager;return t.onListen=FE.bind(null,e.syncEngine),t.onUnlisten=BE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=UE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qE.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(r,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function cv(r,e,t,n){if(e===!0&&n===!0)throw new O(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Vl(r){if(!N.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function kl(r){if(N.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ja(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":L()}function St(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ja(r);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=If((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $a{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oy;switch(n.type){case"firstParty":return new uy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Dl.get(t);n&&(C("ComponentProvider","Removing Datastore"),Dl.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class Oe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class Rt extends Ds{constructor(e,t,n){super(e,t,ys(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new N(e))}withConverter(e){return new Rt(this.firestore,e,this._path)}}function uv(r,e,...t){if(r=Se(r),Ef("collection","path",e),r instanceof $a){const n=ee.fromString(e,...t);return kl(n),new Rt(r,null,n)}{if(!(r instanceof Oe||r instanceof Rt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ee.fromString(e,...t));return kl(n),new Rt(r.firestore,null,n)}}function as(r,e,...t){if(r=Se(r),arguments.length===1&&(e=Mh.newId()),Ef("doc","path",e),r instanceof $a){const n=ee.fromString(e,...t);return Vl(n),new Oe(r,null,new N(n))}{if(!(r instanceof Oe||r instanceof Rt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ee.fromString(e,...t));return Vl(n),new Oe(r.firestore,r instanceof Rt?r.converter:null,new N(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new rf(this,"async_queue_retry"),this.Tu=()=>{const t=qi();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=qi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=qi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new At;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!xt(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(n=>{this.lu=n,this.hu=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw he("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.hu=!1,n))));return this._u=t,t}enqueueAfterDelay(e,t,n){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=Na.createAndSchedule(this,e,t,n,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&L()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}function Nl(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class zn extends $a{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new lv}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Tf(this),this._firestoreClient.terminate()}}function hv(r,e,t){t||(t="(default)");const n=ta(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(Nr(s,e))return i;throw new O(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function vf(r){return r._firestoreClient||Tf(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function Tf(r){var e,t,n;const i=r._freezeSettings(),s=function(c,u,d,f){return new Fy(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,If(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._firestoreClient=new iv(r._authCredentials,r._appCheckCredentials,r._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(de.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jn(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=/^__.*__$/;class fv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hn(e,this.data,t,this.fieldTransforms)}}class wf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ot(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Af(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Wa{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Wa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:n,bu:!1});return i.Du(e),i}Cu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:n,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return cs(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(Af(this.yu)&&dv.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class pv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ss(e)}Ou(e,t,n,i=!1){return new Wa({yu:e,methodName:t,xu:n,path:oe.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bf(r){const e=r._freezeSettings(),t=Ss(r._databaseId);return new pv(r._databaseId,!!e.ignoreUndefinedProperties,t)}function mv(r,e,t,n,i,s={}){const o=r.Ou(s.merge||s.mergeFields?2:0,e,t,i);Ha("Data must be an object, but it was:",o,n);const c=Sf(n,o);let u,d;if(s.merge)u=new Ne(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const I=Xo(e,m,t);if(!o.contains(I))throw new O(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Pf(f,I)||f.push(I)}u=new Ne(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new fv(new be(c),u,d)}class ks extends Ka{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ks}}function gv(r,e,t,n){const i=r.Ou(1,e,t);Ha("Data must be an object, but it was:",i,n);const s=[],o=be.empty();cn(n,(u,d)=>{const f=Qa(e,u,t);d=Se(d);const m=i.Cu(f);if(d instanceof ks)s.push(f);else{const I=xs(d,m);I!=null&&(s.push(f),o.set(f,I))}});const c=new Ne(s);return new wf(o,c,i.fieldTransforms)}function _v(r,e,t,n,i,s){const o=r.Ou(1,e,t),c=[Xo(e,n,t)],u=[i];if(s.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<s.length;I+=2)c.push(Xo(e,s[I])),u.push(s[I+1]);const d=[],f=be.empty();for(let I=c.length-1;I>=0;--I)if(!Pf(d,c[I])){const R=c[I];let V=u[I];V=Se(V);const x=o.Cu(R);if(V instanceof ks)d.push(R);else{const D=xs(V,x);D!=null&&(d.push(R),f.set(R,D))}}const m=new Ne(d);return new wf(f,m,o.fieldTransforms)}function xs(r,e){if(Rf(r=Se(r)))return Ha("Unsupported field value:",e,r),Sf(r,e);if(r instanceof Ka)return function(n,i){if(!Af(i.yu))throw i.Fu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const c of n){let u=xs(c,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nI(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ae.fromDate(n);return{timestampValue:Ln(i.serializer,s)}}if(n instanceof ae){const s=new ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ln(i.serializer,s)}}if(n instanceof Ga)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jn)return{bytesValue:Ad(i.serializer,n._byteString)};if(n instanceof Oe){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Aa(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Fu(`Unsupported field value: ${ja(n)}`)}(r,e)}function Sf(r,e){const t={};return Hh(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(r,(n,i)=>{const s=xs(i,e.Su(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Rf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ae||r instanceof Ga||r instanceof jn||r instanceof Oe||r instanceof Ka)}function Ha(r,e,t){if(!Rf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=ja(t);throw n==="an object"?e.Fu(r+" a custom object"):e.Fu(r+" "+n)}}function Xo(r,e,t){if((e=Se(e))instanceof Vs)return e._internalPath;if(typeof e=="string")return Qa(r,e);throw cs("Field path arguments must be of type string or ",r,!1,void 0,t)}const yv=new RegExp("[~\\*/\\[\\]]");function Qa(r,e,t){if(e.search(yv)>=0)throw cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vs(...e.split("."))._internalPath}catch{throw cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function cs(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${n}`),o&&(u+=` in document ${i}`),u+=")"),new O(P.INVALID_ARGUMENT,c+r+u)}function Pf(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Df("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Iv extends Cf{data(){return super.data()}}function Df(r,e){return typeof e=="string"?Qa(r,e):e instanceof Vs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vv{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw L()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return cn(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertGeoPoint(e){return new Ga(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ga(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(zr(e));default:return null}}convertTimestamp(e){const t=it(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ee.fromString(e);q(Nd(n));const i=new en(n.get(1),n.get(3)),s=new N(n.popFirst(5));return i.isEqual(t)||he(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vf extends Cf{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Df("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class zi extends Vf{data(e={}){return super.data(e)}}class wv{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Sr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new zi(this._firestore,this._userDataWriter,n.key,n,new Sr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new zi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Sr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new zi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Sr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Av(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Av(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class kf extends vv{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function xf(r,e,t){r=St(r,Oe);const n=St(r.firestore,zn),i=Tv(r.converter,e,t);return Ja(n,[mv(bf(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,Ce.none())])}function Nf(r,e,t,...n){r=St(r,Oe);const i=St(r.firestore,zn),s=bf(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof Vs?_v(s,"updateDoc",r._key,e,t,n):gv(s,"updateDoc",r._key,e),Ja(i,[o.toMutation(r._key,Ce.exists(!0))])}function bv(r){return Ja(St(r.firestore,zn),[new Ts(r._key,Ce.none())])}function Of(r,...e){var t,n,i;r=Se(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Nl(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Nl(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,f;if(r instanceof Oe)d=St(r.firestore,zn),f=ys(r._key.path),u={next:m=>{e[o]&&e[o](Sv(d,r,m))},error:e[o+1],complete:e[o+2]};else{const m=St(r,Ds);d=St(m.firestore,zn),f=m._query;const I=new kf(d);u={next:R=>{e[o]&&e[o](new wv(d,I,m,R))},error:e[o+1],complete:e[o+2]},Ev(r._query)}return function(I,R,V,x){const D=new rv(x),M=new xE(R,D,V);return I.asyncQueue.enqueueAndForget(async()=>CE(await Cl(I),M)),()=>{D.Ga(),I.asyncQueue.enqueueAndForget(async()=>DE(await Cl(I),M))}}(vf(d),f,c,u)}function Ja(r,e){return function(n,i){const s=new At;return n.asyncQueue.enqueueAndForget(async()=>zE(await av(n),i,s)),s.promise}(vf(r),e)}function Sv(r,e,t){const n=t.docs.get(e._key),i=new kf(r);return new Vf(r,i,e._key,n,new Sr(t.hasPendingWrites,t.fromCache),e.converter)}class Rv{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Vv(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Pv(r){return new Rv(r)}class Cv{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new za,this._offlineComponentProvider=new _f(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class Dv{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new za,this._offlineComponentProvider=new nv(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function Vv(r){return new Cv(void 0)}function kv(){return new Dv}(function(e,t=!0){(function(i){Wn=i})($n),Cn(new Qt("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new zn(new ay(n.getProvider("auth-internal")),new hy(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new en(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Tt(Cu,"4.6.5",e),Tt(Cu,"4.6.5","esm2017")})();const Ol={apiKey:"AIzaSyDfgeX9z3E7jIBZzxK31Y2Q8LlYO-8MfkE",authDomain:"forewit-github-io.firebaseapp.com",projectId:"forewit-github-io",storageBucket:"forewit-github-io.appspot.com",messagingSenderId:"423340282902",appId:"1:423340282902:web:f873fc5d5fc5c3e0ebd137"};let An;Om().length&&(An=Hl(),Mm(An)),An=So(Ol);const xv=ry(An),Wr=hv(An,{localCache:Pv({tabManager:kv()})}),Nv=function(){if(!Z.user)return console.warn("No user to fetch to user doc for."),()=>{};const r=as(Wr,"users",Z.user.uid);return Of(r,e=>{var t;if(!e.exists())console.log("Creating firestore user doc..."),xf(r,{},{merge:!0});else{console.log("Fetched firestore userDoc"+(e.metadata.hasPendingWrites||e.metadata.fromCache?" (local):":":"),(t=Z.user)==null?void 0:t.email);const n=e.data();Z.userDoc=n}},e=>{console.error("Error while fetching firestore user doc",e)})},Ov=function(){if(!Z.user)return console.warn("No user to fetch to page doc for."),()=>{};const r=uv(Wr,"users",Z.user.uid,"pages");return Of(r,e=>{e.docChanges().forEach(t=>{const n=t.doc.data(),i=t.doc.id;t.type==="added"||t.type==="modified"?(console.log("Fetched firestore pageDoc"+(t.doc.metadata.hasPendingWrites||t.doc.metadata.fromCache?" (local):":":"),i.slice(0,4)),Z.pageDocs[i]=n):t.type==="removed"&&(console.log("Firestore pageDoc removed"+(t.doc.metadata.hasPendingWrites||t.doc.metadata.fromCache?" (local):":":"),i.slice(0,4)),delete Z.pageDocs[i])})})};async function Ml(r){const e=Z.user;if(!e){console.warn("No user to publish to firestore.");return}if(!Le.pages[r]){console.warn("deleting page from firestore: ",r.slice(0,4)),await bv(as(Wr,"users",e.uid,"pages",r));return}Z.isPublishing=!0;const t=as(Wr,"users",e.uid,"pages",r);try{console.log(`Publishing page to firestore: ${r.slice(0,4)}...`),Z.pageDocs[r]?await Nf(t,Le.pages[r]):await xf(t,Le.pages[r])}catch(n){console.error("Error while publishing page to firestore",n)}finally{Z.isPublishing=!1}}async function Ll(){const r=Z.user;if(!r){console.warn("No user to publish to firestore.");return}Z.isPublishing=!0;const e=as(Wr,"users",r.uid);try{console.log("Publishing user State to firestore user doc..."),await Nf(e,{lastUpdated:Ye.lastUpdated,themeName:Ye.themeName,spellcheck:Ye.spellcheck})}catch(t){console.error("Error while publishing settings to firestore user doc",t)}finally{Z.isPublishing=!1}}const Mv=function(){const r=Le.subscribe(t=>{(!Le.pages[t]||!Z.pageDocs[t]||Le.pages[t].lastUpdated>Z.pageDocs[t].lastUpdated)&&Ml(t)}),e=Z.subscribeToPageDocs(t=>{Z.pageDocs[t]?Z.pageDocs[t].lastUpdated===void 0?console.log(`ignoring undefined page: ${t.slice(0,4)}...`):Le.pages[t]?Z.pageDocs[t].lastUpdated===Le.pages[t].lastUpdated?console.log(`page ${t.slice(0,4)} is synced.`):Z.pageDocs[t].lastUpdated>Le.pages[t].lastUpdated?(console.log(`page ${t.slice(0,4)} updated from firestore.`),Le.pages[t]=Z.pageDocs[t]):Ml(t):(console.log(`page ${t.slice(0,4)} added from firestore.`),Le.pages[t]=Z.pageDocs[t]):Le.pages[t]&&(console.log(`page ${t.slice(0,4)} removed.`),delete Le.pages[t])});return()=>{r(),e()}},Lv=function(){const r=Ye.subscribe(()=>{Ye.lastUpdated>Z.userDoc.lastUpdated&&Ll()}),e=Z.subscribeToUserDoc(()=>{if(Z.userDoc.lastUpdated===Ye.lastUpdated){console.log("User is synced.");return}else Z.userDoc.lastUpdated>Ye.lastUpdated?(console.log("userState updated."),Ye.untrack(()=>{Object.assign(Ye,Z.userDoc)})):Ll()});return()=>{r(),e()}};function Fv(){let r=so(null),e=so(!0),t=so(!1),n={},i=new Proxy({},{set(M,F,B){return B===M[F]||(M[F]=B,x(F)),!0},deleteProperty(M,F){return F in M?(delete M[F],x(F),!0):!1}}),s=[],o=[],c=()=>{},u=()=>{},d=()=>{},f=()=>{},m=xv.onAuthStateChanged(M=>{io(r,Yc(M));const F=I(()=>{io(e,!1),F()});Ti(r)?(console.warn("Subscribing to user."),c=Nv(),u=Ov(),d=Lv(),f=Mv()):(console.warn("Unsubscribing from user."),c(),u(),d(),f())});const I=function(M){return s.push(M),()=>{s=s.filter(F=>F!==M)}},R=function(){s.forEach(M=>M())},V=function(M){return o.push(M),()=>{o=o.filter(F=>F!==M)}},x=function(M){o.forEach(F=>F(M))},D=function(){console.warn("Destroying FirebaseState."),m(),c(),u(),d(),f()};return{get user(){return Ti(r)},get isLoading(){return Ti(e)},get isPublishing(){return Ti(t)},set isPublishing(M){io(t,Yc(M))},get destroy(){return D},get userDoc(){return n},set userDoc(M){n=M,R()},get pageDocs(){return i},get subscribeToUserDoc(){return I},get subscribeToPageDocs(){return V}}}const Z=Fv();export{xv as a,Z as f,jv as s};
