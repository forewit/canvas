var Oc={};/**
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
 */const yl=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qf=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,c=a?r[i+1]:0,u=i+2<r.length,d=u?r[i+2]:0,p=s>>2,m=(s&3)<<4|c>>4;let T=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(T=64)),n.push(t[p],t[m],t[T],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(yl(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Qf(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const d=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||d==null||m==null)throw new Jf;const T=s<<2|c>>4;if(n.push(T),d!==64){const b=c<<4&240|d>>2;if(n.push(b),m!==64){const D=d<<6&192|m;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Jf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yf=function(r){const e=yl(r);return Il.encodeByteArray(e,!0)},El=function(r){return Yf(r).replace(/\./g,"")},vl=function(r){try{return Il.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zf=()=>Xf().__FIREBASE_DEFAULTS__,ep=()=>{if(typeof process>"u"||typeof Oc>"u")return;const r=Oc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},tp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&vl(r[1]);return e&&JSON.parse(e)},rs=()=>{try{return Zf()||ep()||tp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},np=r=>{var e,t;return(t=(e=rs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Tl=()=>{var r;return(r=rs())===null||r===void 0?void 0:r.config},wl=r=>{var e;return(e=rs())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class rp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function sp(){var r;const e=(r=rs())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function op(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cp(){const r=fe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Al(){return!sp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sl(){try{return typeof indexedDB=="object"}catch{return!1}}function up(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const lp="FirebaseError";class nt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=lp,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?hp(s,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new nt(i,c,n)}}function hp(r,e){return r.replace(dp,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const dp=/\{\$([^}]+)}/g;function fp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Cr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(Mc(s)&&Mc(a)){if(!Cr(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Mc(r){return r!==null&&typeof r=="object"}/**
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
 */function $r(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function pr(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mr(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function pp(r,e){const t=new mp(r,e);return t.subscribe.bind(t)}class mp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");gp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ws),i.error===void 0&&(i.error=Ws),i.complete===void 0&&(i.complete=Ws);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ws(){}/**
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
 */function Oe(r){return r&&r._delegate?r._delegate:r}class $t{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class _p{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new rp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ip(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:yp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yp(r){return r===Mt?void 0:r}function Ip(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ep{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _p(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const vp={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Tp=H.INFO,wp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Ap=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=wp[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bo{constructor(e){this.name=e,this._logLevel=Tp,this._logHandler=Ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Sp=(r,e)=>e.some(t=>r instanceof t);let Lc,Fc;function Rp(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bp(){return Fc||(Fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rl=new WeakMap,ao=new WeakMap,bl=new WeakMap,Qs=new WeakMap,qo=new WeakMap;function Pp(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(gt(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Rl.set(t,r)}).catch(()=>{}),qo.set(e,r),e}function Cp(r){if(ao.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});ao.set(r,e)}let co={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ao.get(r);if(e==="objectStoreNames")return r.objectStoreNames||bl.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Vp(r){co=r(co)}function Dp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Js(this),e,...t);return bl.set(n,e.sort?e.sort():[e]),gt(n)}:bp().includes(r)?function(...e){return r.apply(Js(this),e),gt(Rl.get(this))}:function(...e){return gt(r.apply(Js(this),e))}}function kp(r){return typeof r=="function"?Dp(r):(r instanceof IDBTransaction&&Cp(r),Sp(r,Rp())?new Proxy(r,co):r)}function gt(r){if(r instanceof IDBRequest)return Pp(r);if(Qs.has(r))return Qs.get(r);const e=kp(r);return e!==r&&(Qs.set(r,e),qo.set(e,r)),e}const Js=r=>qo.get(r);function xp(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),c=gt(a);return n&&a.addEventListener("upgradeneeded",u=>{n(gt(a.result),u.oldVersion,u.newVersion,gt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Np=["get","getKey","getAll","getAllKeys","count"],Op=["put","add","delete","clear"],Ys=new Map;function Uc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ys.get(e))return Ys.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Op.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Np.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return Ys.set(e,s),s}Vp(r=>({...r,get:(e,t,n)=>Uc(e,t)||r.get(e,t,n),has:(e,t)=>!!Uc(e,t)||r.has(e,t)}));/**
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
 */class Mp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Lp(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uo="@firebase/app",Bc="0.10.8";/**
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
 */const Kt=new Bo("@firebase/app"),Fp="@firebase/app-compat",Up="@firebase/analytics-compat",Bp="@firebase/analytics",qp="@firebase/app-check-compat",zp="@firebase/app-check",jp="@firebase/auth",$p="@firebase/auth-compat",Kp="@firebase/database",Gp="@firebase/database-compat",Hp="@firebase/functions",Wp="@firebase/functions-compat",Qp="@firebase/installations",Jp="@firebase/installations-compat",Yp="@firebase/messaging",Xp="@firebase/messaging-compat",Zp="@firebase/performance",em="@firebase/performance-compat",tm="@firebase/remote-config",nm="@firebase/remote-config-compat",rm="@firebase/storage",im="@firebase/storage-compat",sm="@firebase/firestore",om="@firebase/vertexai-preview",am="@firebase/firestore-compat",cm="firebase",um="10.12.5";/**
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
 */const lo="[DEFAULT]",lm={[uo]:"fire-core",[Fp]:"fire-core-compat",[Bp]:"fire-analytics",[Up]:"fire-analytics-compat",[zp]:"fire-app-check",[qp]:"fire-app-check-compat",[jp]:"fire-auth",[$p]:"fire-auth-compat",[Kp]:"fire-rtdb",[Gp]:"fire-rtdb-compat",[Hp]:"fire-fn",[Wp]:"fire-fn-compat",[Qp]:"fire-iid",[Jp]:"fire-iid-compat",[Yp]:"fire-fcm",[Xp]:"fire-fcm-compat",[Zp]:"fire-perf",[em]:"fire-perf-compat",[tm]:"fire-rc",[nm]:"fire-rc-compat",[rm]:"fire-gcs",[im]:"fire-gcs-compat",[sm]:"fire-fst",[am]:"fire-fst-compat",[om]:"fire-vertex","fire-js":"fire-js",[cm]:"fire-js-all"};/**
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
 */const Gt=new Map,ho=new Map,fo=new Map;function qc(r,e){try{r.container.addComponent(e)}catch(t){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function wn(r){const e=r.name;if(fo.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;fo.set(e,r);for(const t of Gt.values())qc(t,r);for(const t of ho.values())qc(t,r);return!0}function zo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Qe(r){return r.settings!==void 0}/**
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
 */const hm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_t=new jr("app","Firebase",hm);/**
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
 */class dm{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const Ln=um;function po(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:lo,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw _t.create("bad-app-name",{appName:String(i)});if(t||(t=Tl()),!t)throw _t.create("no-options");const s=Gt.get(i);if(s){if(Cr(t,s.options)&&Cr(n,s.config))return s;throw _t.create("duplicate-app",{appName:i})}const a=new Ep(i);for(const u of fo.values())a.addComponent(u);const c=new dm(t,n,a);return Gt.set(i,c),c}function Pl(r=lo){const e=Gt.get(r);if(!e&&r===lo&&Tl())return po();if(!e)throw _t.create("no-app",{appName:r});return e}function fm(){return Array.from(Gt.values())}async function pm(r){let e=!1;const t=r.name;Gt.has(t)?(e=!0,Gt.delete(t)):ho.has(t)&&r.decRefCount()<=0&&(ho.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function yt(r,e,t){var n;let i=(n=lm[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(c.join(" "));return}wn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mm="firebase-heartbeat-database",gm=1,Vr="firebase-heartbeat-store";let Xs=null;function Cl(){return Xs||(Xs=xp(mm,gm,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Vr)}catch(t){console.warn(t)}}}}).catch(r=>{throw _t.create("idb-open",{originalErrorMessage:r.message})})),Xs}async function _m(r){try{const t=(await Cl()).transaction(Vr),n=await t.objectStore(Vr).get(Vl(r));return await t.done,n}catch(e){if(e instanceof nt)Kt.warn(e.message);else{const t=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(t.message)}}}async function zc(r,e){try{const n=(await Cl()).transaction(Vr,"readwrite");await n.objectStore(Vr).put(e,Vl(r)),await n.done}catch(t){if(t instanceof nt)Kt.warn(t.message);else{const n=_t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Kt.warn(n.message)}}}function Vl(r){return`${r.name}!${r.options.appId}`}/**
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
 */const ym=1024,Im=30*24*60*60*1e3;class Em{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tm(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Im}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jc(),{heartbeatsToSend:n,unsentEntries:i}=vm(this._heartbeatsCache.heartbeats),s=El(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jc(){return new Date().toISOString().substring(0,10)}function vm(r,e=ym){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),$c(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$c(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sl()?up().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _m(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $c(r){return El(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function wm(r){wn(new $t("platform-logger",e=>new Mp(e),"PRIVATE")),wn(new $t("heartbeat",e=>new Em(e),"PRIVATE")),yt(uo,Bc,r),yt(uo,Bc,"esm2017"),yt("fire-js","")}wm("");var Am="firebase",Sm="10.12.5";/**
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
 */yt(Am,Sm,"app");function jo(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Dl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rm=Dl,kl=new jr("auth","Firebase",Dl());/**
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
 */const Li=new Bo("@firebase/auth");function bm(r,...e){Li.logLevel<=H.WARN&&Li.warn(`Auth (${Ln}): ${r}`,...e)}function Ai(r,...e){Li.logLevel<=H.ERROR&&Li.error(`Auth (${Ln}): ${r}`,...e)}/**
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
 */function Be(r,...e){throw $o(r,...e)}function je(r,...e){return $o(r,...e)}function xl(r,e,t){const n=Object.assign(Object.assign({},Rm()),{[e]:t});return new jr("auth","Firebase",n).create(e,{appName:r.name})}function It(r){return xl(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $o(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return kl.create(r,...e)}function q(r,e,...t){if(!r)throw $o(e,...t)}function Je(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ai(e),new Error(e)}function et(r,e){r||Je(e)}/**
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
 */function mo(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Pm(){return Kc()==="http:"||Kc()==="https:"}function Kc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Cm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pm()||op()||"connection"in navigator)?navigator.onLine:!0}function Vm(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Kr{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=ip()||ap()}get(){return Cm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ko(r,e){et(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Nl{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const km=new Kr(3e4,6e4);function tn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function St(r,e,t,n,i={}){return Ol(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const c=$r(Object.assign({key:r.config.apiKey},a)).slice(1),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode),Nl.fetch()(Ml(r,r.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Ol(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Dm),e);try{const i=new Nm(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw _i(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw _i(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw _i(r,"user-disabled",a);const p=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xl(r,p,d);Be(r,p)}}catch(i){if(i instanceof nt)throw i;Be(r,"network-request-failed",{message:String(i)})}}async function is(r,e,t,n,i={}){const s=await St(r,e,t,n,i);return"mfaPendingCredential"in s&&Be(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Ml(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Ko(r.config,i):`${r.config.apiScheme}://${i}`}function xm(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(je(this.auth,"network-request-failed")),km.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _i(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=je(r,e,n);return i.customData._tokenResponse=t,i}function Gc(r){return r!==void 0&&r.enterprise!==void 0}class Om{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mm(r,e){return St(r,"GET","/v2/recaptchaConfig",tn(r,e))}/**
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
 */async function Lm(r,e){return St(r,"POST","/v1/accounts:delete",e)}async function Ll(r,e){return St(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function vr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fm(r,e=!1){const t=Oe(r),n=await t.getIdToken(e),i=Go(n);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:vr(Zs(i.auth_time)),issuedAtTime:vr(Zs(i.iat)),expirationTime:vr(Zs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zs(r){return Number(r)*1e3}function Go(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const i=vl(t);return i?JSON.parse(i):(Ai("Failed to decode base64 JWT payload"),null)}catch(i){return Ai("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hc(r){const e=Go(r);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof nt&&Um(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Um({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Bm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fi(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Dr(r,Ll(t,{idToken:n}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Fl(s.providerUserInfo):[],c=zm(r.providerData,a),u=r.isAnonymous,d=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new go(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(r,m)}async function qm(r){const e=Oe(r);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zm(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Fl(r){return r.map(e=>{var{providerId:t}=e,n=jo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function jm(r,e){const t=await Ol(r,{},async()=>{const n=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=Ml(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Nl.fetch()(a,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $m(r,e){return St(r,"POST","/v2/accounts:revokeToken",tn(r,e))}/**
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
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Hc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await jm(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new In;return n&&(q(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
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
 */function at(r,e){q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=jo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new go(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fm(this,e)}reload(){return qm(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Fi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Dr(this,Lm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,c,u,d,p;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,V=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:B,emailVerified:Q,isAnonymous:X,providerData:G,stsTokenManager:I}=t;q(B&&I,e,"internal-error");const g=In.fromJSON(this.name,I);q(typeof B=="string",e,"internal-error"),at(m,e.name),at(T,e.name),q(typeof Q=="boolean",e,"internal-error"),q(typeof X=="boolean",e,"internal-error"),at(b,e.name),at(D,e.name),at(x,e.name),at(V,e.name),at($,e.name),at(z,e.name);const y=new Ye({uid:B,auth:e,email:T,emailVerified:Q,displayName:m,isAnonymous:X,photoURL:D,phoneNumber:b,tenantId:x,stsTokenManager:g,createdAt:$,lastLoginAt:z});return G&&Array.isArray(G)&&(y.providerData=G.map(E=>Object.assign({},E))),V&&(y._redirectEventId=V),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new In;i.updateFromServerResponse(t);const s=new Ye({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Fi(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new In;c.updateFromIdToken(n);const u=new Ye({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new go(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const Wc=new Map;function Xe(r){et(r instanceof Function,"Expected a class definition");let e=Wc.get(r);return e?(et(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wc.set(r,e),e)}/**
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
 */class Ul{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ul.type="NONE";const Qc=Ul;/**
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
 */function Si(r,e,t){return`firebase:${r}:${e}:${t}`}class En{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,s),this.fullPersistenceKey=Si("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new En(Xe(Qc),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Xe(Qc);const a=Si(n,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){const m=Ye._fromJSON(e,p);d!==s&&(c=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new En(s,e,n):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new En(s,e,n))}}/**
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
 */function Jc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($l(e))return"Blackberry";if(Kl(e))return"Webos";if(Ho(e))return"Safari";if((e.includes("chrome/")||ql(e))&&!e.includes("edge/"))return"Chrome";if(jl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Bl(r=fe()){return/firefox\//i.test(r)}function Ho(r=fe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ql(r=fe()){return/crios\//i.test(r)}function zl(r=fe()){return/iemobile/i.test(r)}function jl(r=fe()){return/android/i.test(r)}function $l(r=fe()){return/blackberry/i.test(r)}function Kl(r=fe()){return/webos/i.test(r)}function ss(r=fe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Km(r=fe()){var e;return ss(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gm(){return cp()&&document.documentMode===10}function Gl(r=fe()){return ss(r)||jl(r)||Kl(r)||$l(r)||/windows phone/i.test(r)||zl(r)}function Hm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Hl(r,e=[]){let t;switch(r){case"Browser":t=Jc(fe());break;case"Worker":t=`${Jc(fe())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ln}/${n}`}/**
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
 */class Wm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Qm(r,e={}){return St(r,"GET","/v2/passwordPolicy",tn(r,e))}/**
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
 */const Jm=6;class Ym{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Jm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Xm{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yc(this),this.idTokenSubscription=new Yc(this),this.beforeStateQueue=new Wm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xe(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ll(this,{idToken:e}),n=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(It(this));const t=e?Oe(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qm(this),t=new Ym(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await $m(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xe(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[Xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Fn(r){return Oe(r)}class Yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=pp(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let os={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zm(r){os=r}function Wl(r){return os.loadJS(r)}function eg(){return os.recaptchaEnterpriseScript}function tg(){return os.gapiScript}function ng(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const rg="recaptcha-enterprise",ig="NO_RECAPTCHA";class sg{constructor(e){this.type=rg,this.auth=Fn(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{Mm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Om(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){const u=window.grecaptcha;Gc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ig)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{n(this.auth).then(c=>{if(!t&&Gc(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=eg();u.length!==0&&(u+=c),Wl(u).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Xc(r,e,t,n=!1){const i=new sg(r);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zc(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xc(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Xc(r,e,t,t==="getOobCode");return n(r,a)}else return Promise.reject(s)})}/**
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
 */function og(r,e){const t=zo(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Cr(s,e??{}))return i;Be(i,"already-initialized")}return t.initialize({options:e})}function ag(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Xe);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function cg(r,e,t){const n=Fn(r);q(n._canInitEmulator,n,"emulator-config-failed"),q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=Ql(e),{host:a,port:c}=ug(e),u=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${a}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),lg()}function Ql(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ug(r){const e=Ql(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:eu(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:eu(a)}}}function eu(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function lg(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Wo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function hg(r,e){return St(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dg(r,e){return is(r,"POST","/v1/accounts:signInWithPassword",tn(r,e))}/**
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
 */async function fg(r,e){return is(r,"POST","/v1/accounts:signInWithEmailLink",tn(r,e))}async function pg(r,e){return is(r,"POST","/v1/accounts:signInWithEmailLink",tn(r,e))}/**
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
 */class kr extends Wo{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new kr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new kr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,t,"signInWithPassword",dg);case"emailLink":return fg(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zc(e,n,"signUpPassword",hg);case"emailLink":return pg(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vn(r,e){return is(r,"POST","/v1/accounts:signInWithIdp",tn(r,e))}/**
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
 */const mg="http://localhost";class Ht extends Wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=jo(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Ht(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,vn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}buildRequest(){const e={requestUri:mg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
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
 */function gg(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _g(r){const e=pr(mr(r)).link,t=e?pr(mr(e)).deep_link_id:null,n=pr(mr(r)).deep_link_id;return(n?pr(mr(n)).link:null)||n||t||e||r}class Qo{constructor(e){var t,n,i,s,a,c;const u=pr(mr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(n=u.oobCode)!==null&&n!==void 0?n:null,m=gg((i=u.mode)!==null&&i!==void 0?i:null);q(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=_g(e);try{return new Qo(t)}catch{return null}}}/**
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
 */class Un{constructor(){this.providerId=Un.PROVIDER_ID}static credential(e,t){return kr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qo.parseLink(t);return q(n,"argument-error"),kr._fromEmailAndCode(e,n.code,n.tenantId)}}Un.PROVIDER_ID="password";Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gr extends Jl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lt extends Gr{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
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
 */class ht extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ht._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ht.credential(t,n)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class dt extends Gr{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
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
 */class ft extends Gr{constructor(){super("twitter.com")}static credential(e,t){return Ht._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ft.credential(t,n)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Ye._fromIdTokenResponse(e,n,i),a=tu(n);return new An({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=tu(n);return new An({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function tu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ui extends nt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ui.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ui(e,t,n,i)}}function Yl(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ui._fromErrorAndOperation(r,s,e,n):s})}async function yg(r,e,t=!1){const n=await Dr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return An._forOperation(r,"link",n)}/**
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
 */async function Ig(r,e,t=!1){const{auth:n}=r;if(Qe(n.app))return Promise.reject(It(n));const i="reauthenticate";try{const s=await Dr(r,Yl(n,i,e,r),t);q(s.idToken,n,"internal-error");const a=Go(s.idToken);q(a,n,"internal-error");const{sub:c}=a;return q(r.uid===c,n,"user-mismatch"),An._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Be(n,"user-mismatch"),s}}/**
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
 */async function Xl(r,e,t=!1){if(Qe(r.app))return Promise.reject(It(r));const n="signIn",i=await Yl(r,n,e),s=await An._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function Eg(r,e){return Xl(Fn(r),e)}/**
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
 */async function vg(r){const e=Fn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dv(r,e,t){return Qe(r.app)?Promise.reject(It(r)):Eg(Oe(r),Un.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&vg(r),n})}function Tg(r,e,t,n){return Oe(r).onIdTokenChanged(e,t,n)}function wg(r,e,t){return Oe(r).beforeAuthStateChanged(e,t)}function fv(r){return Oe(r).signOut()}const Bi="__sak";/**
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
 */class Zl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bi,"1"),this.storage.removeItem(Bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ag(){const r=fe();return Ho(r)||ss(r)}const Sg=1e3,Rg=10;class eh extends Zl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ag()&&Hm(),this.fallbackToPolling=Gl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Gm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Rg):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eh.type="LOCAL";const bg=eh;/**
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
 */class th extends Zl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}th.type="SESSION";const nh=th;/**
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
 */function Pg(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class as{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new as(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),u=await Pg(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
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
 */function Jo(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Cg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const d=Jo("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(m){const T=m;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(T.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function $e(){return window}function Vg(r){$e().location.href=r}/**
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
 */function rh(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Dg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kg(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function xg(){return rh()?self:null}/**
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
 */const ih="firebaseLocalStorageDb",Ng=1,qi="firebaseLocalStorage",sh="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cs(r,e){return r.transaction([qi],e?"readwrite":"readonly").objectStore(qi)}function Og(){const r=indexedDB.deleteDatabase(ih);return new Hr(r).toPromise()}function _o(){const r=indexedDB.open(ih,Ng);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(qi,{keyPath:sh})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(qi)?e(n):(n.close(),await Og(),e(await _o()))})})}async function nu(r,e,t){const n=cs(r,!0).put({[sh]:e,value:t});return new Hr(n).toPromise()}async function Mg(r,e){const t=cs(r,!1).get(e),n=await new Hr(t).toPromise();return n===void 0?null:n.value}function ru(r,e){const t=cs(r,!0).delete(e);return new Hr(t).toPromise()}const Lg=800,Fg=3;class oh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _o(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Fg)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(xg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dg(),!this.activeServiceWorker)return;this.sender=new Cg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _o();return await nu(e,Bi,"1"),await ru(e,Bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>nu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Mg(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ru(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cs(i,!1).getAll();return new Hr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oh.type="LOCAL";const Ug=oh;new Kr(3e4,6e4);/**
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
 */function Bg(r,e){return e?Xe(e):(q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Yo extends Wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qg(r){return Xl(r.auth,new Yo(r),r.bypassAuthState)}function zg(r){const{auth:e,user:t}=r;return q(t,e,"internal-error"),Ig(t,new Yo(r),r.bypassAuthState)}async function jg(r){const{auth:e,user:t}=r;return q(t,e,"internal-error"),yg(t,new Yo(r),r.bypassAuthState)}/**
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
 */class ah{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qg;case"linkViaPopup":case"linkViaRedirect":return jg;case"reauthViaPopup":case"reauthViaRedirect":return zg;default:Be(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $g=new Kr(2e3,1e4);class _n extends ah{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$g.get())};e()}}_n.currentPopupAction=null;/**
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
 */const Kg="pendingRedirect",Ri=new Map;class Gg extends ah{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ri.get(this.auth._key());if(!e){try{const n=await Hg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ri.set(this.auth._key(),e)}return this.bypassAuthState||Ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hg(r,e){const t=Jg(e),n=Qg(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Wg(r,e){Ri.set(r._key(),e)}function Qg(r){return Xe(r._redirectPersistence)}function Jg(r){return Si(Kg,r.config.apiKey,r.name)}async function Yg(r,e,t=!1){if(Qe(r.app))return Promise.reject(It(r));const n=Fn(r),i=Bg(n,e),a=await new Gg(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Xg=10*60*1e3;class Zg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ch(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xg&&this.cachedEventUids.clear(),this.cachedEventUids.has(iu(e))}saveEventToCache(e){this.cachedEventUids.add(iu(e)),this.lastProcessedEventTime=Date.now()}}function iu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ch({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e_(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ch(r);default:return!1}}/**
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
 */async function t_(r,e={}){return St(r,"GET","/v1/projects",e)}/**
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
 */const n_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r_=/^https?/;async function i_(r){if(r.config.emulator)return;const{authorizedDomains:e}=await t_(r);for(const t of e)try{if(s_(t))return}catch{}Be(r,"unauthorized-domain")}function s_(r){const e=mo(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!r_.test(t))return!1;if(n_.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const o_=new Kr(3e4,6e4);function su(){const r=$e().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function a_(r){return new Promise((e,t)=>{var n,i,s;function a(){su(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{su(),t(je(r,"network-request-failed"))},timeout:o_.get()})}if(!((i=(n=$e().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$e().gapi)===null||s===void 0)&&s.load)a();else{const c=ng("iframefcb");return $e()[c]=()=>{gapi.load?a():t(je(r,"network-request-failed"))},Wl(`${tg()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw bi=null,e})}let bi=null;function c_(r){return bi=bi||a_(r),bi}/**
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
 */const u_=new Kr(5e3,15e3),l_="__/auth/iframe",h_="emulator/auth/iframe",d_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function p_(r){const e=r.config;q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ko(e,h_):`https://${r.config.authDomain}/${l_}`,n={apiKey:e.apiKey,appName:r.name,v:Ln},i=f_.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${$r(n).slice(1)}`}async function m_(r){const e=await c_(r),t=$e().gapi;return q(t,r,"internal-error"),e.open({where:document.body,url:p_(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d_,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=je(r,"network-request-failed"),c=$e().setTimeout(()=>{s(a)},u_.get());function u(){$e().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const g_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},__=500,y_=600,I_="_blank",E_="http://localhost";class ou{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v_(r,e,t,n=__,i=y_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},g_),{width:n.toString(),height:i.toString(),top:s,left:a}),d=fe().toLowerCase();t&&(c=ql(d)?I_:t),Bl(d)&&(e=e||E_,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[b,D])=>`${T}${b}=${D},`,"");if(Km(d)&&c!=="_self")return T_(e||"",c),new ou(null);const m=window.open(e||"",c,p);q(m,r,"popup-blocked");try{m.focus()}catch{}return new ou(m)}function T_(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const w_="__/auth/handler",A_="emulator/auth/handler",S_=encodeURIComponent("fac");async function au(r,e,t,n,i,s){q(r.config.authDomain,r,"auth-domain-config-required"),q(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Ln,eventId:i};if(e instanceof Jl){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",fp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Gr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}r.tenantId&&(a.tid=r.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await r._getAppCheckToken(),d=u?`#${S_}=${encodeURIComponent(u)}`:"";return`${R_(r)}?${$r(c).slice(1)}${d}`}function R_({config:r}){return r.emulator?Ko(r,A_):`https://${r.authDomain}/${w_}`}/**
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
 */const eo="webStorageSupport";class b_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nh,this._completeRedirectFn=Yg,this._overrideRedirectResult=Wg}async _openPopup(e,t,n,i){var s;et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await au(e,t,n,mo(),i);return v_(e,a,Jo())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await au(e,t,n,mo(),i);return Vg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(et(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await m_(e),n=new Zg(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(eo,{type:eo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[eo];a!==void 0&&t(!!a),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=i_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gl()||Ho()||ss()}}const P_=b_;var cu="@firebase/auth",uu="1.7.6";/**
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
 */class C_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V_(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function D_(r){wn(new $t("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hl(r)},d=new Xm(n,i,s,u);return ag(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),wn(new $t("auth-internal",e=>{const t=Fn(e.getProvider("auth").getImmediate());return(n=>new C_(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(cu,uu,V_(r)),yt(cu,uu,"esm2017")}/**
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
 */const k_=5*60,x_=wl("authIdTokenMaxAge")||k_;let lu=null;const N_=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>x_)return;const i=t==null?void 0:t.token;lu!==i&&(lu=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function O_(r=Pl()){const e=zo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=og(r,{popupRedirectResolver:P_,persistence:[Ug,bg,nh]}),n=wl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=N_(s.toString());wg(t,a,()=>a(t.currentUser)),Tg(t,c=>a(c))}}const i=np("auth");return i&&cg(t,`http://${i}`),t}function M_(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Zm({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=je("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",M_().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});D_("Browser");var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zt,uh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(E,v,S){for(var _=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)_[Ge-2]=arguments[Ge];return g.prototype[v].apply(E,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)E[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;16>v;++v)E[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],v=I.g[2];var S=I.g[3],_=g+(S^y&(v^S))+E[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=S+(v^g&(y^v))+E[1]+3905402710&4294967295,S=g+(_<<12&4294967295|_>>>20),_=v+(y^S&(g^y))+E[2]+606105819&4294967295,v=S+(_<<17&4294967295|_>>>15),_=y+(g^v&(S^g))+E[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(S^y&(v^S))+E[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=S+(v^g&(y^v))+E[5]+1200080426&4294967295,S=g+(_<<12&4294967295|_>>>20),_=v+(y^S&(g^y))+E[6]+2821735955&4294967295,v=S+(_<<17&4294967295|_>>>15),_=y+(g^v&(S^g))+E[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(S^y&(v^S))+E[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=S+(v^g&(y^v))+E[9]+2336552879&4294967295,S=g+(_<<12&4294967295|_>>>20),_=v+(y^S&(g^y))+E[10]+4294925233&4294967295,v=S+(_<<17&4294967295|_>>>15),_=y+(g^v&(S^g))+E[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(S^y&(v^S))+E[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=S+(v^g&(y^v))+E[13]+4254626195&4294967295,S=g+(_<<12&4294967295|_>>>20),_=v+(y^S&(g^y))+E[14]+2792965006&4294967295,v=S+(_<<17&4294967295|_>>>15),_=y+(g^v&(S^g))+E[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(v^S&(y^v))+E[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=S+(y^v&(g^y))+E[6]+3225465664&4294967295,S=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(S^g))+E[11]+643717713&4294967295,v=S+(_<<14&4294967295|_>>>18),_=y+(S^g&(v^S))+E[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^S&(y^v))+E[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=S+(y^v&(g^y))+E[10]+38016083&4294967295,S=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(S^g))+E[15]+3634488961&4294967295,v=S+(_<<14&4294967295|_>>>18),_=y+(S^g&(v^S))+E[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^S&(y^v))+E[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=S+(y^v&(g^y))+E[14]+3275163606&4294967295,S=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(S^g))+E[3]+4107603335&4294967295,v=S+(_<<14&4294967295|_>>>18),_=y+(S^g&(v^S))+E[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^S&(y^v))+E[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=S+(y^v&(g^y))+E[2]+4243563512&4294967295,S=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(S^g))+E[7]+1735328473&4294967295,v=S+(_<<14&4294967295|_>>>18),_=y+(S^g&(v^S))+E[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(y^v^S)+E[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=S+(g^y^v)+E[8]+2272392833&4294967295,S=g+(_<<11&4294967295|_>>>21),_=v+(S^g^y)+E[11]+1839030562&4294967295,v=S+(_<<16&4294967295|_>>>16),_=y+(v^S^g)+E[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^S)+E[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=S+(g^y^v)+E[4]+1272893353&4294967295,S=g+(_<<11&4294967295|_>>>21),_=v+(S^g^y)+E[7]+4139469664&4294967295,v=S+(_<<16&4294967295|_>>>16),_=y+(v^S^g)+E[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^S)+E[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=S+(g^y^v)+E[0]+3936430074&4294967295,S=g+(_<<11&4294967295|_>>>21),_=v+(S^g^y)+E[3]+3572445317&4294967295,v=S+(_<<16&4294967295|_>>>16),_=y+(v^S^g)+E[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^S)+E[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=S+(g^y^v)+E[12]+3873151461&4294967295,S=g+(_<<11&4294967295|_>>>21),_=v+(S^g^y)+E[15]+530742520&4294967295,v=S+(_<<16&4294967295|_>>>16),_=y+(v^S^g)+E[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(v^(y|~S))+E[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=S+(y^(g|~v))+E[7]+1126891415&4294967295,S=g+(_<<10&4294967295|_>>>22),_=v+(g^(S|~y))+E[14]+2878612391&4294967295,v=S+(_<<15&4294967295|_>>>17),_=y+(S^(v|~g))+E[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~S))+E[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=S+(y^(g|~v))+E[3]+2399980690&4294967295,S=g+(_<<10&4294967295|_>>>22),_=v+(g^(S|~y))+E[10]+4293915773&4294967295,v=S+(_<<15&4294967295|_>>>17),_=y+(S^(v|~g))+E[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~S))+E[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=S+(y^(g|~v))+E[15]+4264355552&4294967295,S=g+(_<<10&4294967295|_>>>22),_=v+(g^(S|~y))+E[6]+2734768916&4294967295,v=S+(_<<15&4294967295|_>>>17),_=y+(S^(v|~g))+E[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~S))+E[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=S+(y^(g|~v))+E[11]+3174756917&4294967295,S=g+(_<<10&4294967295|_>>>22),_=v+(g^(S|~y))+E[2]+718787259&4294967295,v=S+(_<<15&4294967295|_>>>17),_=y+(S^(v|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+S&4294967295}n.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,E=this.B,v=this.h,S=0;S<g;){if(v==0)for(;S<=y;)i(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<g;)if(E[v++]=I.charCodeAt(S++),v==this.blockSize){i(this,E),v=0;break}}else for(;S<g;)if(E[v++]=I[S++],v==this.blockSize){i(this,E),v=0;break}}this.h=v,this.o+=g},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)I[y++]=this.g[g]>>>E&255;return I};function s(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;for(var y=[],E=!0,v=I.length-1;0<=v;v--){var S=I[v]|0;E&&S==g||(y[v]=S,E=!1)}this.g=y}var c={};function u(I){return-128<=I&&128>I?s(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return V(d(-I));for(var g=[],y=1,E=0;I>=y;E++)g[E]=I/y|0,y*=4294967296;return new a(g,0)}function p(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return V(p(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),E=m,v=0;v<I.length;v+=8){var S=Math.min(8,I.length-v),_=parseInt(I.substring(v,v+S),g);8>S?(S=d(Math.pow(g,S)),E=E.j(S).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var m=u(0),T=u(1),b=u(16777216);r=a.prototype,r.m=function(){if(x(this))return-V(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(x(this))return"-"+V(this).toString(I);for(var g=d(Math.pow(I,6)),y=this,E="";;){var v=Q(y,g).g;y=$(y,v.j(g));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=v,D(y))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function x(I){return I.h==-1}r.l=function(I){return I=$(this,I),x(I)?-1:D(I)?0:1};function V(I){for(var g=I.g.length,y=[],E=0;E<g;E++)y[E]=~I.g[E];return new a(y,~I.h).add(T)}r.abs=function(){return x(this)?V(this):this},r.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0,v=0;v<=g;v++){var S=E+(this.i(v)&65535)+(I.i(v)&65535),_=(S>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);E=_>>>16,S&=65535,_&=65535,y[v]=_<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(I,g){return I.add(V(g))}r.j=function(I){if(D(this)||D(I))return m;if(x(this))return x(I)?V(this).j(V(I)):V(V(this).j(I));if(x(I))return V(this.j(V(I)));if(0>this.l(b)&&0>I.l(b))return d(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<I.g.length;v++){var S=this.i(E)>>>16,_=this.i(E)&65535,Ge=I.i(v)>>>16,Kn=I.i(v)&65535;y[2*E+2*v]+=_*Kn,z(y,2*E+2*v),y[2*E+2*v+1]+=S*Kn,z(y,2*E+2*v+1),y[2*E+2*v+1]+=_*Ge,z(y,2*E+2*v+1),y[2*E+2*v+2]+=S*Ge,z(y,2*E+2*v+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function z(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function B(I,g){this.g=I,this.h=g}function Q(I,g){if(D(g))throw Error("division by zero");if(D(I))return new B(m,m);if(x(I))return g=Q(V(I),g),new B(V(g.g),V(g.h));if(x(g))return g=Q(I,V(g)),new B(V(g.g),g.h);if(30<I.g.length){if(x(I)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=T,E=g;0>=E.l(I);)y=X(y),E=X(E);var v=G(y,1),S=G(E,1);for(E=G(E,2),y=G(y,2);!D(E);){var _=S.add(E);0>=_.l(I)&&(v=v.add(y),S=_),E=G(E,1),y=G(y,1)}return g=$(I,v.j(g)),new B(v,g)}for(v=m;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=d(y),_=S.j(g);x(_)||0<_.l(I);)y-=E,S=d(y),_=S.j(g);D(S)&&(S=T),v=v.add(S),I=$(I,_)}return new B(v,I)}r.A=function(I){return Q(this,I).h},r.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&I.i(E);return new a(y,this.h&I.h)},r.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|I.i(E);return new a(y,this.h|I.h)},r.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^I.i(E);return new a(y,this.h^I.h)};function X(I){for(var g=I.g.length+1,y=[],E=0;E<g;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(y,I.h)}function G(I,g){var y=g>>5;g%=32;for(var E=I.g.length-y,v=[],S=0;S<E;S++)v[S]=0<g?I.i(S+y)>>>g|I.i(S+y+1)<<32-g:I.i(S+y);return new a(v,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,uh=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,zt=a}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lh,hh,gr,dh,Pi,yo,fh,ph,mh;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function i(o,l){if(l)e:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,f=!1,w={next:function(){if(!f&&h<o.length){var R=h++;return{value:l(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function m(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),o.apply(l,w)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,T.apply(null,arguments)}function b(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function D(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,w,R){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return l.prototype[w].apply(f,k)}}function x(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function V(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const w=o.length||0,R=f.length||0;o.length=w+R;for(let k=0;k<R;k++)o[w+k]=f[k]}else o.push(f)}}class ${constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var X=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function G(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function v(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function S(o){c.setTimeout(()=>{throw o},0)}function _(){var o=As;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ge{constructor(){this.h=this.g=null}add(l,h){const f=Kn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Kn=new $(()=>new pf,o=>o.reset());class pf{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,Hn=!1,As=new Ge,Oa=()=>{const o=c.Promise.resolve(void 0);Gn=()=>{o.then(mf)}};var mf=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){S(h)}var l=Kn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Hn=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var gf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function Wn(o,l){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(X){e:{try{Q(l.nodeName);var w=!0;break e}catch{}w=!1}w||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_f[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wn.aa.h.call(this)}}D(Wn,ye);var _f={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zr="closure_listenable_"+(1e6*Math.random()|0),yf=0;function If(o,l,h,f,w){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=w,this.key=++yf,this.da=this.fa=!1}function ei(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ti(o){this.src=o,this.g={},this.h=0}ti.prototype.add=function(o,l,h,f,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var k=Rs(o,l,f,w);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new If(l,this.src,R,!!f,w),l.fa=h,o.push(l)),l};function Ss(o,l){var h=l.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,l,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(ei(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Rs(o,l,h,f){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==l&&R.capture==!!h&&R.ha==f)return w}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Ps={};function Ma(o,l,h,f,w){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Ma(o,l[R],h,f,w);return null}return h=Ua(h),o&&o[Zr]?o.K(l,h,d(f)?!!f.capture:!!f,w):Ef(o,l,h,!1,f,w)}function Ef(o,l,h,f,w,R){if(!l)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,te=Vs(o);if(te||(o[bs]=te=new ti(o)),h=te.add(l,h,f,k,R),h.proxy)return h;if(f=vf(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)gf||(w=k),w===void 0&&(w=!1),o.addEventListener(l.toString(),f,w);else if(o.attachEvent)o.attachEvent(Fa(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function vf(){function o(h){return l.call(o.src,o.listener,h)}const l=Tf;return o}function La(o,l,h,f,w){if(Array.isArray(l))for(var R=0;R<l.length;R++)La(o,l[R],h,f,w);else f=d(f)?!!f.capture:!!f,h=Ua(h),o&&o[Zr]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],h=Rs(R,h,f,w),-1<h&&(ei(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=Vs(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Rs(l,h,f,w)),(h=-1<o?l[o]:null)&&Cs(h))}function Cs(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Zr])Ss(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Fa(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=Vs(l))?(Ss(h,o),h.h==0&&(h.src=null,l[bs]=null)):ei(o)}}}function Fa(o){return o in Ps?Ps[o]:Ps[o]="on"+o}function Tf(o,l){if(o.da)o=!0;else{l=new Wn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Cs(o),o=h.call(f,l)}return o}function Vs(o){return o=o[bs],o instanceof ti?o:null}var Ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ua(o){return typeof o=="function"?o:(o[Ds]||(o[Ds]=function(l){return o.handleEvent(l)}),o[Ds])}function Ie(){rt.call(this),this.i=new ti(this),this.M=this,this.F=null}D(Ie,rt),Ie.prototype[Zr]=!0,Ie.prototype.removeEventListener=function(o,l,h,f){La(this,o,l,h,f)};function Ae(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ye(l,o);else if(l instanceof ye)l.target=l.target||o;else{var w=l;l=new ye(f,o),E(l,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var k=l.g=h[R];w=ni(k,f,!0,l)&&w}if(k=l.g=o,w=ni(k,f,!0,l)&&w,w=ni(k,f,!1,l)&&w,h)for(R=0;R<h.length;R++)k=l.g=h[R],w=ni(k,f,!1,l)&&w}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)ei(h[f]);delete o.g[l],o.h--}}this.F=null},Ie.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},Ie.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function ni(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,R=0;R<l.length;++R){var k=l[R];if(k&&!k.da&&k.capture==h){var te=k.listener,ge=k.ha||k.src;k.fa&&Ss(o.i,k),w=te.call(ge,f)!==!1&&w}}return w&&!f.defaultPrevented}function Ba(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function qa(o){o.g=Ba(()=>{o.g=null,o.i&&(o.i=!1,qa(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class wf extends rt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:qa(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(o){rt.call(this),this.h=o,this.g={}}D(Qn,rt);var za=[];function ja(o){G(o.g,function(l,h){this.g.hasOwnProperty(h)&&Cs(l)},o),o.g={}}Qn.prototype.N=function(){Qn.aa.N.call(this),ja(this)},Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ks=c.JSON.stringify,Af=c.JSON.parse,Sf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function xs(){}xs.prototype.h=null;function $a(o){return o.h||(o.h=o.i())}function Ka(){}var Jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ns(){ye.call(this,"d")}D(Ns,ye);function Os(){ye.call(this,"c")}D(Os,ye);var Dt={},Ga=null;function ri(){return Ga=Ga||new Ie}Dt.La="serverreachability";function Ha(o){ye.call(this,Dt.La,o)}D(Ha,ye);function Yn(o){const l=ri();Ae(l,new Ha(l))}Dt.STAT_EVENT="statevent";function Wa(o,l){ye.call(this,Dt.STAT_EVENT,o),this.stat=l}D(Wa,ye);function Se(o){const l=ri();Ae(l,new Wa(l,o))}Dt.Ma="timingevent";function Qa(o,l){ye.call(this,Dt.Ma,o),this.size=l}D(Qa,ye);function Xn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Zn(){this.g=!0}Zn.prototype.xa=function(){this.g=!1};function Rf(o,l,h,f,w,R){o.info(function(){if(o.g)if(R)for(var k="",te=R.split("&"),ge=0;ge<te.length;ge++){var Y=te[ge].split("=");if(1<Y.length){var Ee=Y[0];Y=Y[1];var ve=Ee.split("_");k=2<=ve.length&&ve[1]=="type"?k+(Ee+"="+Y+"&"):k+(Ee+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+l+`
`+h+`
`+k})}function bf(o,l,h,f,w,R,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+l+`
`+h+`
`+R+" "+k})}function rn(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Cf(o,h)+(f?" "+f:"")})}function Pf(o,l){o.info(function(){return"TIMEOUT: "+l})}Zn.prototype.info=function(){};function Cf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return ks(h)}catch{return l}}var ii={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ms;function si(){}D(si,xs),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},Ms=new si;function it(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Qn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ya}function Ya(){this.i=null,this.g="",this.h=!1}var Xa={},Ls={};function Fs(o,l,h){o.L=1,o.v=ui(He(l)),o.m=h,o.P=!0,Za(o,null)}function Za(o,l){o.F=Date.now(),oi(o),o.A=He(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),fc(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ya,o.g=Dc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new wf(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(za[0]=w.toString()),w=za);for(var R=0;R<w.length;R++){var k=Ma(h,w[R],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Yn(),Rf(o.i,o.u,o.A,o.l,o.R,o.m)}it.prototype.ca=function(o){o=o.target;const l=this.M;l&&We(o)==3?l.j():this.Y(o)},it.prototype.Y=function(o){try{if(o==this.g)e:{const ve=We(this.g);var l=this.g.Ba();const an=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||Ec(this.g)))){this.J||ve!=4||l==7||(l==8||0>=an?Yn(3):Yn(2)),Us(this);var h=this.g.Z();this.X=h;t:if(ec(this)){var f=Ec(this.g);o="";var w=f.length,R=We(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),er(this);var k="";break t}this.h.i=new c.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(R&&l==w-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,bf(this.i,this.u,this.A,this.l,this.R,ve,h),this.o){if(this.T&&!this.K){t:{if(this.g){var te,ge=this.g;if((te=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(te)){var Y=te;break t}}Y=null}if(h=Y)rn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bs(this,h);else{this.o=!1,this.s=3,Se(12),kt(this),er(this);break e}}if(this.P){h=!0;let Ue;for(;!this.J&&this.C<k.length;)if(Ue=Vf(this,k),Ue==Ls){ve==4&&(this.s=4,Se(14),h=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Xa){this.s=4,Se(15),rn(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else rn(this.i,this.l,Ue,null),Bs(this,Ue);if(ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||k.length!=0||this.h.h||(this.s=1,Se(16),h=!1),this.o=this.o&&h,!h)rn(this.i,this.l,k,"[Invalid Chunked Response]"),kt(this),er(this);else if(0<k.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Gs(Ee),Ee.M=!0,Se(11))}}else rn(this.i,this.l,k,null),Bs(this,k);ve==4&&kt(this),this.o&&!this.J&&(ve==4?bc(this.j,this):(this.o=!1,oi(this)))}else Hf(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),kt(this),er(this)}}}catch{}finally{}};function ec(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vf(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?Ls:(h=Number(l.substring(h,f)),isNaN(h)?Xa:(f+=1,f+h>l.length?Ls:(l=l.slice(f,f+h),o.C=f+h,l)))}it.prototype.cancel=function(){this.J=!0,kt(this)};function oi(o){o.S=Date.now()+o.I,tc(o,o.I)}function tc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Xn(T(o.ba,o),l)}function Us(o){o.B&&(c.clearTimeout(o.B),o.B=null)}it.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Pf(this.i,this.A),this.L!=2&&(Yn(),Se(17)),kt(this),this.s=2,er(this)):tc(this,this.S-o)};function er(o){o.j.G==0||o.J||bc(o.j,o)}function kt(o){Us(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ja(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Bs(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||qs(h.h,o))){if(!o.K&&qs(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)pi(h),di(h);else break e;Ks(h),Se(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Xn(T(h.Za,h),6e3));if(1>=ic(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Nt(h,11)}else if((o.K||h.g==o)&&pi(h),!z(l))for(w=h.Da.g.parse(l),l=0;l<w.length;l++){let Y=w[l];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const Ee=Y[3];Ee!=null&&(h.la=Ee,h.j.info("VER="+h.la));const ve=Y[4];ve!=null&&(h.Aa=ve,h.j.info("SVER="+h.Aa));const an=Y[5];an!=null&&typeof an=="number"&&0<an&&(f=1.5*an,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ue=o.g;if(Ue){const gi=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gi){var R=f.h;R.g||gi.indexOf("spdy")==-1&&gi.indexOf("quic")==-1&&gi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(zs(R,R.h),R.h=null))}if(f.D){const Hs=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Hs&&(f.ya=Hs,ie(f.I,f.D,Hs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=Vc(f,f.J?f.ia:null,f.W),k.K){sc(f.h,k);var te=k,ge=f.L;ge&&(te.I=ge),te.B&&(Us(te),oi(te)),f.g=k}else Sc(f);0<h.i.length&&fi(h)}else Y[0]!="stop"&&Y[0]!="close"||Nt(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Nt(h,7):$s(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}Yn(4)}catch{}}var Df=class{constructor(o,l){this.g=o,this.map=l}};function nc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ic(o){return o.h?1:o.g?o.g.size:0}function qs(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function zs(o,l){o.g?o.g.add(l):o.h=l}function sc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}nc.prototype.cancel=function(){if(this.i=oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function oc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return x(o.i)}function kf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function xf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function ac(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=xf(o),f=kf(o),w=f.length,R=0;R<w;R++)l.call(void 0,f[R],h&&h[R],o)}var cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nf(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),w=null;if(0<=f){var R=o[h].substring(0,f);w=o[h].substring(f+1)}else R=o[h];l(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function xt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof xt){this.h=o.h,ai(this,o.j),this.o=o.o,this.g=o.g,ci(this,o.s),this.l=o.l;var l=o.i,h=new rr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),uc(this,h),this.m=o.m}else o&&(l=String(o).match(cc))?(this.h=!1,ai(this,l[1]||"",!0),this.o=tr(l[2]||""),this.g=tr(l[3]||"",!0),ci(this,l[4]),this.l=tr(l[5]||"",!0),uc(this,l[6]||"",!0),this.m=tr(l[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}xt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(nr(l,lc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(nr(l,lc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(nr(h,h.charAt(0)=="/"?Lf:Mf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",nr(h,Uf)),o.join("")};function He(o){return new xt(o)}function ai(o,l,h){o.j=h?tr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ci(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function uc(o,l,h){l instanceof rr?(o.i=l,Bf(o.i,o.h)):(h||(l=nr(l,Ff)),o.i=new rr(l,o.h))}function ie(o,l,h){o.i.set(l,h)}function ui(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function tr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function nr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Of),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Of(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var lc=/[#\/\?@]/g,Mf=/[#\?:]/g,Lf=/[#\?]/g,Ff=/[#\?@]/g,Uf=/#/g;function rr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function st(o){o.g||(o.g=new Map,o.h=0,o.i&&Nf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=rr.prototype,r.add=function(o,l){st(this),this.i=null,o=sn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function hc(o,l){st(o),l=sn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function dc(o,l){return st(o),l=sn(o,l),o.g.has(l)}r.forEach=function(o,l){st(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(l,w,f,this)},this)},this)},r.na=function(){st(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const w=o[f];for(let R=0;R<w.length;R++)h.push(l[f])}return h},r.V=function(o){st(this);let l=[];if(typeof o=="string")dc(this,o)&&(l=l.concat(this.g.get(sn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return st(this),this.i=null,o=sn(this,o),dc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function fc(o,l,h){hc(o,l),0<h.length&&(o.i=null,o.g.set(sn(o,l),x(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const R=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var w=R;k[f]!==""&&(w+="="+encodeURIComponent(String(k[f]))),o.push(w)}}return this.i=o.join("&")};function sn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Bf(o,l){l&&!o.j&&(st(o),o.i=null,o.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(hc(this,f),fc(this,w,h))},o)),o.j=l}function qf(o,l){const h=new Zn;if(c.Image){const f=new Image;f.onload=b(ot,h,"TestLoadImage: loaded",!0,l,f),f.onerror=b(ot,h,"TestLoadImage: error",!1,l,f),f.onabort=b(ot,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=b(ot,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function zf(o,l){const h=new Zn,f=new AbortController,w=setTimeout(()=>{f.abort(),ot(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ot(h,"TestPingServer: ok",!0,l):ot(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),ot(h,"TestPingServer: error",!1,l)})}function ot(o,l,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function jf(){this.g=new Sf}function $f(o,l,h){const f=h||"";try{ac(o,function(w,R){let k=w;d(w)&&(k=ks(w)),l.push(f+R+"="+encodeURIComponent(k))})}catch(w){throw l.push(f+"type="+encodeURIComponent("_badmap")),w}}function ir(o){this.l=o.Ub||null,this.j=o.eb||!1}D(ir,xs),ir.prototype.g=function(){return new li(this.l,this.j)},ir.prototype.i=function(o){return function(){return o}}({});function li(o,l){Ie.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(li,Ie),r=li.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,or(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function pc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?sr(this):or(this),this.readyState==3&&pc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,sr(this))},r.Qa=function(o){this.g&&(this.response=o,sr(this))},r.ga=function(){this.g&&sr(this)};function sr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,or(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function or(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function mc(o){let l="";return G(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function js(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=mc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ie(o,l,h))}function ae(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ae,Ie);var Kf=/^https?$/i,Gf=["POST","PUT"];r=ae.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ms.g(),this.v=this.o?$a(this.o):$a(Ms),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){gc(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Gf,l,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of h)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ic(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){gc(this,R)}};function gc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,_c(o),hi(o)}function _c(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),hi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),ae.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?yc(this):this.bb())},r.bb=function(){yc(this)};function yc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||We(o)!=4||o.Z()!=2)){if(o.u&&We(o)==4)Ba(o.Ea,0,o);else if(Ae(o,"readystatechange"),We(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=k===0){var w=String(o.D).match(cc)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!Kf.test(w?w.toLowerCase():"")}h=f}if(h)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var R=2<We(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",_c(o)}}finally{hi(o)}}}}function hi(o,l){if(o.g){Ic(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ae(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ic(o){o.I&&(c.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function We(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<We(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Af(l)}};function Ec(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Hf(o){const l={};o=(o.g&&2<=We(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(z(o[f]))continue;var h=v(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=l[w]||[];l[w]=R,R.push(h)}I(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function vc(o){this.Aa=0,this.i=[],this.j=new Zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ar("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ar("baseRetryDelayMs",5e3,o),this.cb=ar("retryDelaySeedMs",1e4,o),this.Wa=ar("forwardChannelMaxRetries",2,o),this.wa=ar("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new nc(o&&o.concurrentRequestLimit),this.Da=new jf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=vc.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,f){Se(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Vc(this,null,this.W),fi(this)};function $s(o){if(Tc(o),o.G==3){var l=o.U++,h=He(o.I);if(ie(h,"SID",o.K),ie(h,"RID",l),ie(h,"TYPE","terminate"),cr(o,h),l=new it(o,o.j,l),l.L=2,l.v=ui(He(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Dc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),oi(l)}Cc(o)}function di(o){o.g&&(Gs(o),o.g.cancel(),o.g=null)}function Tc(o){di(o),o.u&&(c.clearTimeout(o.u),o.u=null),pi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function fi(o){if(!rc(o.h)&&!o.s){o.s=!0;var l=o.Ga;Gn||Oa(),Hn||(Gn(),Hn=!0),As.add(l,o),o.B=0}}function Wf(o,l){return ic(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Xn(T(o.Ga,o,l),Pc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new it(this,this.j,o);let R=this.o;if(this.S&&(R?(R=g(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Ac(this,w,l),h=He(this.I),ie(h,"RID",o),ie(h,"CVER",22),this.D&&ie(h,"X-HTTP-Session-Id",this.D),cr(this,h),R&&(this.O?l="headers="+encodeURIComponent(String(mc(R)))+"&"+l:this.m&&js(h,this.m,R)),zs(this.h,w),this.Ua&&ie(h,"TYPE","init"),this.P?(ie(h,"$req",l),ie(h,"SID","null"),w.T=!0,Fs(w,h,null)):Fs(w,h,l),this.G=2}}else this.G==3&&(o?wc(this,o):this.i.length==0||rc(this.h)||wc(this))};function wc(o,l){var h;l?h=l.l:h=o.U++;const f=He(o.I);ie(f,"SID",o.K),ie(f,"RID",h),ie(f,"AID",o.T),cr(o,f),o.m&&o.o&&js(f,o.m,o.o),h=new it(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Ac(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),zs(o.h,h),Fs(h,f,l)}function cr(o,l){o.H&&G(o.H,function(h,f){ie(l,f,h)}),o.l&&ac({},function(h,f){ie(l,f,h)})}function Ac(o,l,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;e:{var w=o.i;let R=-1;for(;;){const k=["count="+h];R==-1?0<h?(R=w[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let te=!0;for(let ge=0;ge<h;ge++){let Y=w[ge].g;const Ee=w[ge].map;if(Y-=R,0>Y)R=Math.max(0,w[ge].g-100),te=!1;else try{$f(Ee,k,"req"+Y+"_")}catch{f&&f(Ee)}}if(te){f=k.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function Sc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Gn||Oa(),Hn||(Gn(),Hn=!0),As.add(l,o),o.v=0}}function Ks(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Xn(T(o.Fa,o),Pc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Xn(T(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),di(this),Rc(this))};function Gs(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Rc(o){o.g=new it(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=He(o.qa);ie(l,"RID","rpc"),ie(l,"SID",o.K),ie(l,"AID",o.T),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(l,"TO",o.ja),ie(l,"TYPE","xmlhttp"),cr(o,l),o.m&&o.o&&js(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ui(He(l)),h.m=null,h.P=!0,Za(h,o)}r.Za=function(){this.C!=null&&(this.C=null,di(this),Ks(this),Se(19))};function pi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function bc(o,l){var h=null;if(o.g==l){pi(o),Gs(o),o.g=null;var f=2}else if(qs(o.h,l))h=l.D,sc(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var w=o.B;f=ri(),Ae(f,new Qa(f,h)),fi(o)}else Sc(o);else if(w=l.s,w==3||w==0&&0<l.X||!(f==1&&Wf(o,l)||f==2&&Ks(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),w){case 1:Nt(o,5);break;case 4:Nt(o,10);break;case 3:Nt(o,6);break;default:Nt(o,2)}}}function Pc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Nt(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),f=o.Xa;const w=!f;f=new xt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ai(f,"https"),ui(f),w?qf(f.toString(),h):zf(f.toString(),h)}else Se(2);o.G=0,o.l&&o.l.sa(l),Cc(o),Tc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function Cc(o){if(o.G=0,o.ka=[],o.l){const l=oc(o.h);(l.length!=0||o.i.length!=0)&&(V(o.ka,l),V(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Vc(o,l,h){var f=h instanceof xt?He(h):new xt(h);if(f.g!="")l&&(f.g=l+"."+f.g),ci(f,f.s);else{var w=c.location;f=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var R=new xt(null);f&&ai(R,f),l&&(R.g=l),w&&ci(R,w),h&&(R.l=h),f=R}return h=o.D,l=o.ya,h&&l&&ie(f,h,l),ie(f,"VER",o.la),cr(o,f),f}function Dc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ae(new ir({eb:h})):new ae(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function kc(){}r=kc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function mi(){}mi.prototype.g=function(o,l){return new De(o,l)};function De(o,l){Ie.call(this),this.g=new vc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!z(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new on(this)}D(De,Ie),De.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){$s(this.g)},De.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ks(o),o=h);l.i.push(new Df(l.Ya++,o)),l.G==3&&fi(l)},De.prototype.N=function(){this.g.l=null,delete this.j,$s(this.g),delete this.g,De.aa.N.call(this)};function xc(o){Ns.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(xc,Ns);function Nc(){Os.call(this),this.status=1}D(Nc,Os);function on(o){this.g=o}D(on,kc),on.prototype.ua=function(){Ae(this.g,"a")},on.prototype.ta=function(o){Ae(this.g,new xc(o))},on.prototype.sa=function(o){Ae(this.g,new Nc)},on.prototype.ra=function(){Ae(this.g,"b")},mi.prototype.createWebChannel=mi.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,mh=function(){return new mi},ph=function(){return ri()},fh=Dt,yo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ii.NO_ERROR=0,ii.TIMEOUT=8,ii.HTTP_ERROR=6,Pi=ii,Ja.COMPLETE="complete",dh=Ja,Ka.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,gr=Ka,hh=ir,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,lh=ae}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});const du="@firebase/firestore";/**
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
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
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
 */let Bn="10.12.5";/**
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
 */const Wt=new Bo("@firebase/firestore");function dn(){return Wt.logLevel}function C(r,...e){if(Wt.logLevel<=H.DEBUG){const t=e.map(Xo);Wt.debug(`Firestore (${Bn}): ${r}`,...t)}}function le(r,...e){if(Wt.logLevel<=H.ERROR){const t=e.map(Xo);Wt.error(`Firestore (${Bn}): ${r}`,...t)}}function xr(r,...e){if(Wt.logLevel<=H.WARN){const t=e.map(Xo);Wt.warn(`Firestore (${Bn}): ${r}`,...t)}}function Xo(r){if(typeof r=="string")return r;try{/**
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
 */function M(r="Unexpected state"){const e=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: `+r;throw le(e),new Error(e)}function F(r,e){r||M()}function L(r,e){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class L_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class U_{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Et,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Et)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(F(typeof n.accessToken=="string"),new L_(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new we(e)}}class B_{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=we.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class q_{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new B_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.R=t.token,new z_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class gh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=$_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function j(r,e){return r<e?-1:r>e?1:0}function Sn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function _h(r){return r+"\0"}/**
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
 */class oe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new oe(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new oe(0,0))}static max(){return new U(new oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Nr{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(),n===void 0?n=e.length-t:n>e.length-t&&M(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends Nr{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const K_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends Nr{construct(e,t,n){return new se(e,t,n)}static isValidIdentifier(e){return K_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new se(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(s(),i++)}if(s(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new se(t)}static emptyPath(){return new se([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ne.fromString(e))}static fromName(e){return new N(ne.fromString(e).popFirst(5))}static empty(){return new N(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ne(e.slice()))}}/**
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
 */class zi{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Io(r){return r.fields.find(e=>e.kind===2)}function Lt(r){return r.fields.filter(e=>e.kind!==2)}zi.UNKNOWN_ID=-1;class Ci{constructor(e,t){this.fieldPath=e,this.kind=t}}class Or{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Or(0,Me.min())}}function yh(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new oe(t+1,0):new oe(t,n));return new Me(i,N.empty(),e)}function Ih(r){return new Me(r.readTime,r.key,-1)}class Me{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Me(U.min(),N.empty(),-1)}static max(){return new Me(U.max(),N.empty(),-1)}}function Zo(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(r.documentKey,e.documentKey),t!==0?t:j(r.largestBatchId,e.largestBatchId))}/**
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
 */const Eh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rt(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Eh)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>n(u))}),a=!0,s===i&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(i=>i?A.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new A((n,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===s&&n(a)},p=>i(p))}})}static doWhile(e,t){return new A((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */class us{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Et,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Tr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=ea(n.target.error);this.V.reject(new Tr(e,i))}}static open(e,t,n,i){try{return new us(t,e.transaction(i,n))}catch(s){throw new Tr(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new H_(t)}}class vt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,vt.S(fe())===12.2&&le("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Ft(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Sl())return!1;if(vt.C())return!0;const e=fe(),t=vt.S(e),n=0<t&&t<10,i=Th(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;t(a)},i.onblocked=()=>{n(new Tr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new O(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new O(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Tr(e,a))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.p.O(a,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(e);const c=us.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),A.reject(d))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){const u=c,d=u.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",d),this.close(),!d)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Th(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class G_{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ft(this.B.delete())}}class Tr extends O{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function bt(r){return r.name==="IndexedDbTransactionError"}class H_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ft(n)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Ft(this.store.add(e))}get(e){return Ft(this.store.get(e)).next(t=>(t===void 0&&(t=null),C("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Ft(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Ft(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new A((a,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{a(u.target.result)}})}{const s=this.cursor(n),a=[];return this.W(s,(c,u)=>{a.push(u)}).next(()=>a)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}j(e,t){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,a,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new A((n,i)=>{t.onerror=s=>{const a=ea(s.target.error);i(a)},t.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(c=>{c?a.continue():n()}):n()}})}W(e,t){const n=[];return new A((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const c=a.target.result;if(!c)return void i();const u=new G_(c),d=t(c.primaryKey,c.value,u);if(d instanceof A){const p=d.catch(m=>(u.done(),A.reject(m)));n.push(p)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>A.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ft(r){return new A((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=ea(n.target.error);t(i)}})}let fu=!1;function ea(r){const e=vt.S(fe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fu||(fu=!0,setTimeout(()=>{throw n},0)),n}}return r}class W_{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){C("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){bt(t)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Rt(t)}await this.X(6e4)})}}class Q_{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(c=>{i-=c,n.add(a)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,s)).next(c=>(C("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>a.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const a=Ih(s);Zo(a,n)>0&&(n=a)}),new Me(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ve{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ve.oe=-1;function ls(r){return r==null}function Mr(r){return r===0&&1/r==-1/0}function wh(r){return typeof r=="number"&&Number.isInteger(r)&&!Mr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Re(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=pu(e)),e=J_(r.get(t),e);return pu(e)}function J_(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function pu(r){return r+""}function qe(r){const e=r.length;if(F(e>=2),e===2)return F(r.charAt(0)===""&&r.charAt(1)===""),ne.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const a=r.indexOf("",s);switch((a<0||a>t)&&M(),r.charAt(a+1)){case"":const c=r.substring(s,a);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:M()}s=a+2}return new ne(n)}/**
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
 */const mu=["userId","batchId"];/**
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
 */function Vi(r,e){return[r,Re(e)]}function Ah(r,e,t){return[r,Re(e),t]}const Y_={},X_=["prefixPath","collectionGroup","readTime","documentId"],Z_=["prefixPath","collectionGroup","documentId"],ey=["collectionGroup","readTime","prefixPath","documentId"],ty=["canonicalId","targetId"],ny=["targetId","path"],ry=["path","targetId"],iy=["collectionId","parent"],sy=["indexId","uid"],oy=["uid","sequenceNumber"],ay=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],cy=["indexId","uid","orderedDocumentKey"],uy=["userId","collectionPath","documentId"],ly=["userId","collectionPath","largestBatchId"],hy=["userId","collectionGroup","largestBatchId"],Sh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],dy=[...Sh,"documentOverlays"],Rh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bh=Rh,ta=[...bh,"indexConfiguration","indexState","indexEntries"],fy=ta,py=[...ta,"globals"];/**
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
 */class Eo extends vh{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function pe(r,e){const t=L(r);return vt.F(t._e,e)}/**
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
 */function gu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function qn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Ph(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ii(this.root,e,this.comparator,!0)}}class Ii{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??_e.RED,this.left=i??_e.EMPTY,this.right=s??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new _e(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,n,i,s){return this}insert(e,t,n){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _u(this.data.getIterator())}getIteratorFrom(e){return new _u(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ee(this.comparator);return t.data=e,t}}class _u{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function cn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(se.comparator)}static empty(){return new Le([])}unionWith(e){let t=new ee(se.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ch("Invalid base64 string: "+s):s}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const my=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tt(r){if(F(!!r),typeof r=="string"){let e=0;const t=my.exec(r);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ce(r.seconds),nanos:ce(r.nanos)}}function ce(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Tt(r){return typeof r=="string"?he.fromBase64String(r):he.fromUint8Array(r)}/**
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
 */function na(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ra(r){const e=r.mapValue.fields.__previous_value__;return na(e)?ra(e):e}function Lr(r){const e=tt(r.mapValue.fields.__local_write_time__.timestampValue);return new oe(e.seconds,e.nanos)}/**
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
 */class gy{constructor(e,t,n,i,s,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class Qt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Di={nullValue:"NULL_VALUE"};function Jt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?na(r)?4:Vh(r)?9007199254740991:10:M()}function Ke(r,e){if(r===e)return!0;const t=Jt(r);if(t!==Jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Lr(r).isEqual(Lr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=tt(i.timestampValue),c=tt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Tt(i.bytesValue).isEqual(Tt(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ce(i.doubleValue),c=ce(s.doubleValue);return a===c?Mr(a)===Mr(c):isNaN(a)&&isNaN(c)}return!1}(r,e);case 9:return Sn(r.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(gu(a)!==gu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ke(a[u],c[u])))return!1;return!0}(r,e);default:return M()}}function Fr(r,e){return(r.values||[]).find(t=>Ke(t,e))!==void 0}function wt(r,e){if(r===e)return 0;const t=Jt(r),n=Jt(e);if(t!==n)return j(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ce(s.integerValue||s.doubleValue),u=ce(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return yu(r.timestampValue,e.timestampValue);case 4:return yu(Lr(r),Lr(e));case 5:return j(r.stringValue,e.stringValue);case 6:return function(s,a){const c=Tt(s),u=Tt(a);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=j(c[d],u[d]);if(p!==0)return p}return j(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const c=j(ce(s.latitude),ce(a.latitude));return c!==0?c:j(ce(s.longitude),ce(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return function(s,a){const c=s.values||[],u=a.values||[];for(let d=0;d<c.length&&d<u.length;++d){const p=wt(c[d],u[d]);if(p)return p}return j(c.length,u.length)}(r.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===mt.mapValue&&a===mt.mapValue)return 0;if(s===mt.mapValue)return 1;if(a===mt.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const T=j(u[m],p[m]);if(T!==0)return T;const b=wt(c[u[m]],d[p[m]]);if(b!==0)return b}return j(u.length,p.length)}(r.mapValue,e.mapValue);default:throw M()}}function yu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return j(r,e);const t=tt(r),n=tt(e),i=j(t.seconds,n.seconds);return i!==0?i:j(t.nanos,n.nanos)}function Rn(r){return vo(r)}function vo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=tt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Tt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return N.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=vo(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${vo(t.fields[a])}`;return i+"}"}(r.mapValue):M()}function ia(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function To(r){return!!r&&"integerValue"in r}function Ur(r){return!!r&&"arrayValue"in r}function Iu(r){return!!r&&"nullValue"in r}function Eu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ki(r){return!!r&&"mapValue"in r}function wr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return qn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=wr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Vh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function _y(r){return"nullValue"in r?Di:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ia(Qt.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:M()}function yy(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ia(Qt.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?mt:M()}function vu(r,e){const t=wt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Tu(r,e){const t=wt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wr(t)}setAll(e){let t=se.emptyPath(),n={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}a?n[c.lastSegment()]=wr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ki(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){qn(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Ce(wr(this.value))}}function Dh(r){const e=[];return qn(r.fields,(t,n)=>{const i=new se([t]);if(ki(n)){const s=Dh(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Le(e)}/**
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
 */class ue{constructor(e,t,n,i,s,a,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ue(e,0,U.min(),U.min(),U.min(),Ce.empty(),0)}static newFoundDocument(e,t,n,i){return new ue(e,1,t,U.min(),n,i,0)}static newNoDocument(e,t){return new ue(e,2,t,U.min(),U.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new ue(e,3,t,U.min(),U.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bn{constructor(e,t){this.position=e,this.inclusive=t}}function wu(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),t.key):n=wt(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Au(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ke(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function Iy(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class kh{}class W extends kh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Ey(e,t,n):t==="array-contains"?new wy(e,n):t==="in"?new Fh(e,n):t==="not-in"?new Ay(e,n):t==="array-contains-any"?new Sy(e,n):new W(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new vy(e,n):new Ty(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(wt(t,this.value)):t!==null&&Jt(this.value)===Jt(t)&&this.matchesComparison(wt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends kh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Z(e,t)}matches(e){return Pn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pn(r){return r.op==="and"}function wo(r){return r.op==="or"}function sa(r){return xh(r)&&Pn(r)}function xh(r){for(const e of r.filters)if(e instanceof Z)return!1;return!0}function Ao(r){if(r instanceof W)return r.field.canonicalString()+r.op.toString()+Rn(r.value);if(sa(r))return r.filters.map(e=>Ao(e)).join(",");{const e=r.filters.map(t=>Ao(t)).join(",");return`${r.op}(${e})`}}function Nh(r,e){return r instanceof W?function(n,i){return i instanceof W&&n.op===i.op&&n.field.isEqual(i.field)&&Ke(n.value,i.value)}(r,e):r instanceof Z?function(n,i){return i instanceof Z&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,c)=>s&&Nh(a,i.filters[c]),!0):!1}(r,e):void M()}function Oh(r,e){const t=r.filters.concat(e);return Z.create(t,r.op)}function Mh(r){return r instanceof W?function(t){return`${t.field.canonicalString()} ${t.op} ${Rn(t.value)}`}(r):r instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(Mh).join(" ,")+"}"}(r):"Filter"}class Ey extends W{constructor(e,t,n){super(e,t,n),this.key=N.fromName(n.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class vy extends W{constructor(e,t){super(e,"in",t),this.keys=Lh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ty extends W{constructor(e,t){super(e,"not-in",t),this.keys=Lh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lh(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>N.fromName(n.referenceValue))}class wy extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ur(t)&&Fr(t.arrayValue,this.value)}}class Fh extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fr(this.value.arrayValue,t)}}class Ay extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fr(this.value.arrayValue,t)}}class Sy extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ur(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Fr(this.value.arrayValue,n))}}/**
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
 */class Ry{constructor(e,t=null,n=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function So(r,e=null,t=[],n=[],i=null,s=null,a=null){return new Ry(r,e,t,n,i,s,a)}function Yt(r){const e=L(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ao(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),ls(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Rn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Rn(n)).join(",")),e.ue=t}return e.ue}function Wr(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Iy(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Nh(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Au(r.startAt,e.startAt)&&Au(r.endAt,e.endAt)}function $i(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ki(r,e){return r.filters.filter(t=>t instanceof W&&t.field.isEqual(e))}function Su(r,e,t){let n=Di,i=!0;for(const s of Ki(r,e)){let a=Di,c=!0;switch(s.op){case"<":case"<=":a=_y(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,c=!1;break;case"!=":case"not-in":a=Di}vu({value:n,inclusive:i},{value:a,inclusive:c})<0&&(n=a,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];vu({value:n,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}function Ru(r,e,t){let n=mt,i=!0;for(const s of Ki(r,e)){let a=mt,c=!0;switch(s.op){case">=":case">":a=yy(s.value),c=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,c=!1;break;case"!=":case"not-in":a=mt}Tu({value:n,inclusive:i},{value:a,inclusive:c})>0&&(n=a,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Tu({value:n,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class hs{constructor(e,t=null,n=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Uh(r,e,t,n,i,s,a,c){return new hs(r,e,t,n,i,s,a,c)}function ds(r){return new hs(r)}function bu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function by(r){return r.collectionGroup!==null}function Ar(r){const e=L(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ee(se.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ji(s,n))}),t.has(se.keyField().canonicalString())||e.ce.push(new ji(se.keyField(),n))}return e.ce}function Ne(r){const e=L(r);return e.le||(e.le=Py(e,Ar(r))),e.le}function Py(r,e){if(r.limitType==="F")return So(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ji(i.field,s)});const t=r.endAt?new bn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new bn(r.startAt.position,r.startAt.inclusive):null;return So(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Ro(r,e,t){return new hs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function fs(r,e){return Wr(Ne(r),Ne(e))&&r.limitType===e.limitType}function Bh(r){return`${Yt(Ne(r))}|lt:${r.limitType}`}function fn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Mh(i)).join(", ")}]`),ls(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Rn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Rn(i)).join(",")),`Target(${n})`}(Ne(r))}; limitType=${r.limitType})`}function Qr(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):N.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Ar(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,c,u){const d=wu(a,c,u);return a.inclusive?d<=0:d<0}(n.startAt,Ar(n),i)||n.endAt&&!function(a,c,u){const d=wu(a,c,u);return a.inclusive?d>=0:d>0}(n.endAt,Ar(n),i))}(r,e)}function qh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function zh(r){return(e,t)=>{let n=!1;for(const i of Ar(r)){const s=Cy(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Cy(r,e,t){const n=r.field.isKeyField()?N.comparator(e.key,t.key):function(s,a,c){const u=a.data.field(s),d=c.data.field(s);return u!==null&&d!==null?wt(u,d):M()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
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
 */class Pt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Ph(this.inner)}size(){return this.innerSize}}/**
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
 */const Vy=new re(N.comparator);function ke(){return Vy}const jh=new re(N.comparator);function _r(...r){let e=jh;for(const t of r)e=e.insert(t.key,t);return e}function $h(r){let e=jh;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ze(){return Sr()}function Kh(){return Sr()}function Sr(){return new Pt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Dy=new re(N.comparator),ky=new ee(N.comparator);function K(...r){let e=ky;for(const t of r)e=e.add(t);return e}const xy=new ee(j);function oa(){return xy}/**
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
 */function Gh(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(e)?"-0":e}}function Hh(r){return{integerValue:""+r}}function Ny(r,e){return wh(e)?Hh(e):Gh(r,e)}/**
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
 */class ps{constructor(){this._=void 0}}function Oy(r,e,t){return r instanceof Br?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&na(s)&&(s=ra(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):r instanceof Cn?Qh(r,e):r instanceof Vn?Jh(r,e):function(i,s){const a=Wh(i,s),c=Pu(a)+Pu(i.Pe);return To(a)&&To(i.Pe)?Hh(c):Gh(i.serializer,c)}(r,e)}function My(r,e,t){return r instanceof Cn?Qh(r,e):r instanceof Vn?Jh(r,e):t}function Wh(r,e){return r instanceof qr?function(n){return To(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Br extends ps{}class Cn extends ps{constructor(e){super(),this.elements=e}}function Qh(r,e){const t=Yh(e);for(const n of r.elements)t.some(i=>Ke(i,n))||t.push(n);return{arrayValue:{values:t}}}class Vn extends ps{constructor(e){super(),this.elements=e}}function Jh(r,e){let t=Yh(e);for(const n of r.elements)t=t.filter(i=>!Ke(i,n));return{arrayValue:{values:t}}}class qr extends ps{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Pu(r){return ce(r.integerValue||r.doubleValue)}function Yh(r){return Ur(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Ly{constructor(e,t){this.field=e,this.transform=t}}function Fy(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof Cn&&i instanceof Cn||n instanceof Vn&&i instanceof Vn?Sn(n.elements,i.elements,Ke):n instanceof qr&&i instanceof qr?Ke(n.Pe,i.Pe):n instanceof Br&&i instanceof Br}(r.transform,e.transform)}class Uy{constructor(e,t){this.version=e,this.transformResults=t}}class xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ms{}function Xh(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new aa(r.key,xe.none()):new zn(r.key,r.data,xe.none());{const t=r.data,n=Ce.empty();let i=new ee(se.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new Ct(r.key,n,new Le(i.toArray()),xe.none())}}function By(r,e,t){r instanceof zn?function(i,s,a){const c=i.value.clone(),u=Vu(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Ct?function(i,s,a){if(!xi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Vu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Zh(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Rr(r,e,t,n){return r instanceof zn?function(s,a,c,u){if(!xi(s.precondition,a))return c;const d=s.value.clone(),p=Du(s.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ct?function(s,a,c,u){if(!xi(s.precondition,a))return c;const d=Du(s.fieldTransforms,u,a),p=a.data;return p.setAll(Zh(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,a,c){return xi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,e,t)}function qy(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Wh(n.transform,i||null);s!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,s))}return t||null}function Cu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Sn(n,i,(s,a)=>Fy(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class zn extends ms{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ct extends ms{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zh(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Vu(r,e,t){const n=new Map;F(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,c=e.data.field(s.field);n.set(s.field,My(a,c,t[i]))}return n}function Du(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,Oy(s,a,e))}return n}class aa extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ed extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ca{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&By(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Rr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Rr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Kh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=Xh(a,c);u!==null&&n.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(t,n)=>Cu(t,n))&&Sn(this.baseMutations,e.baseMutations,(t,n)=>Cu(t,n))}}class ua{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){F(e.mutations.length===n.length);let i=function(){return Dy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new ua(e,t,n,i)}}/**
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
 */class la{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,J;function jy(r){switch(r){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function td(r){if(r===void 0)return le("GRPC error has no .code"),P.UNKNOWN;switch(r){case de.OK:return P.OK;case de.CANCELLED:return P.CANCELLED;case de.UNKNOWN:return P.UNKNOWN;case de.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case de.INTERNAL:return P.INTERNAL;case de.UNAVAILABLE:return P.UNAVAILABLE;case de.UNAUTHENTICATED:return P.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case de.NOT_FOUND:return P.NOT_FOUND;case de.ALREADY_EXISTS:return P.ALREADY_EXISTS;case de.PERMISSION_DENIED:return P.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case de.ABORTED:return P.ABORTED;case de.OUT_OF_RANGE:return P.OUT_OF_RANGE;case de.UNIMPLEMENTED:return P.UNIMPLEMENTED;case de.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(J=de||(de={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $y(){return new TextEncoder}/**
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
 */const Ky=new zt([4294967295,4294967295],0);function ku(r){const e=$y().encode(r),t=new uh;return t.update(e),new Uint8Array(t.digest())}function xu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zt([t,n],0),new zt([i,s],0)]}class ha{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new yr(`Invalid padding: ${t}`);if(n<0)throw new yr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new yr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new yr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=zt.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(zt.fromNumber(n)));return i.compare(Ky)===1&&(i=new zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ku(e),[n,i]=xu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ha(s,i,t);return n.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=ku(e),[n,i]=xu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jr{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Yr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Jr(U.min(),i,new re(j),ke(),K())}}class Yr{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Yr(n,t,K(),K(),K())}}/**
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
 */class Ni{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class nd{constructor(e,t){this.targetId=e,this.me=t}}class rd{constructor(e,t,n=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Nu{constructor(){this.fe=0,this.ge=Mu(),this.pe=he.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=K(),t=K(),n=K();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M()}}),new Yr(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=Mu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,F(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gy{constructor(e){this.Le=e,this.Be=new Map,this.ke=ke(),this.qe=Ou(),this.Qe=new re(j)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if($i(s))if(n===0){const a=new N(s.path);this.Ue(t,a,ue.newNoDocument(a,U.min()))}else F(n===1);else{const a=this.Ye(t);if(a!==n){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Tt(n).toUint8Array()}catch(u){if(u instanceof Ch)return xr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ha(a,i,s)}catch(u){return xr(u instanceof yr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&$i(c.target)){const u=new N(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,ue.newNoDocument(u,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let n=K();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Jr(e,t,this.Qe,this.ke,n);return this.ke=ke(),this.qe=Ou(),this.Qe=new re(j),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Nu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ee(j),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new re(N.comparator)}function Mu(){return new re(N.comparator)}const Hy={asc:"ASCENDING",desc:"DESCENDING"},Wy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qy={and:"AND",or:"OR"};class Jy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bo(r,e){return r.useProto3Json||ls(e)?e:{value:e}}function Dn(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function id(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Yy(r,e){return Dn(r,e.toTimestamp())}function be(r){return F(!!r),U.fromTimestamp(function(t){const n=tt(t);return new oe(n.seconds,n.nanos)}(r))}function da(r,e){return Po(r,e).canonicalString()}function Po(r,e){const t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function sd(r){const e=ne.fromString(r);return F(pd(e)),e}function Gi(r,e){return da(r.databaseId,e.path)}function jt(r,e){const t=sd(e);if(t.get(1)!==r.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new N(cd(t))}function od(r,e){return da(r.databaseId,e)}function ad(r){const e=sd(r);return e.length===4?ne.emptyPath():cd(e)}function Co(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cd(r){return F(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Lu(r,e,t){return{name:Gi(r,e),fields:t.value.mapValue.fields}}function Xy(r,e,t){const n=jt(r,e.name),i=be(e.updateTime),s=e.createTime?be(e.createTime):U.min(),a=new Ce({mapValue:{fields:e.fields}}),c=ue.newFoundDocument(n,i,s,a);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Zy(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(F(p===void 0||typeof p=="string"),he.fromBase64String(p||"")):(F(p===void 0||p instanceof Buffer||p instanceof Uint8Array),he.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?P.UNKNOWN:td(d.code);return new O(p,d.message||"")}(a);t=new rd(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=jt(r,n.document.name),s=be(n.document.updateTime),a=n.document.createTime?be(n.document.createTime):U.min(),c=new Ce({mapValue:{fields:n.document.fields}}),u=ue.newFoundDocument(i,s,a,c),d=n.targetIds||[],p=n.removedTargetIds||[];t=new Ni(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=jt(r,n.document),s=n.readTime?be(n.readTime):U.min(),a=ue.newNoDocument(i,s),c=n.removedTargetIds||[];t=new Ni([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=jt(r,n.document),s=n.removedTargetIds||[];t=new Ni([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new zy(i,s),c=n.targetId;t=new nd(c,a)}}return t}function Hi(r,e){let t;if(e instanceof zn)t={update:Lu(r,e.key,e.value)};else if(e instanceof aa)t={delete:Gi(r,e.key)};else if(e instanceof Ct)t={update:Lu(r,e.key,e.data),updateMask:sI(e.fieldMask)};else{if(!(e instanceof ed))return M();t={verify:Gi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const c=a.transform;if(c instanceof Br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Cn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw M()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Yy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(r,e.precondition)),t}function Vo(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(be(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(a,c){let u=null;if("setToServerValue"in c)F(c.setToServerValue==="REQUEST_TIME"),u=new Br;else if("appendMissingElements"in c){const p=c.appendMissingElements.values||[];u=new Cn(p)}else if("removeAllFromArray"in c){const p=c.removeAllFromArray.values||[];u=new Vn(p)}else"increment"in c?u=new qr(a,c.increment):M();const d=se.fromServerFormat(c.fieldPath);return new Ly(d,u)}(r,i)):[];if(e.update){e.update.name;const i=jt(r,e.update.name),s=new Ce({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(u){const d=u.fieldPaths||[];return new Le(d.map(p=>se.fromServerFormat(p)))}(e.updateMask);return new Ct(i,s,a,t,n)}return new zn(i,s,t,n)}if(e.delete){const i=jt(r,e.delete);return new aa(i,t)}if(e.verify){const i=jt(r,e.verify);return new ed(i,t)}return M()}function eI(r,e){return r&&r.length>0?(F(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?be(i.updateTime):be(s);return a.isEqual(U.min())&&(a=be(s)),new Uy(a,i.transformResults||[])}(t,e))):[]}function ud(r,e){return{documents:[od(r,e.path)]}}function ld(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=od(r,i);const s=function(d){if(d.length!==0)return fd(Z.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:pn(T.field),direction:nI(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=bo(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function hd(r){let e=ad(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){F(n===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(m){const T=dd(m);return T instanceof Z&&sa(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(T=>function(D){return new ji(mn(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(m){let T;return T=typeof m=="object"?m.value:m,ls(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(m){const T=!!m.before,b=m.values||[];return new bn(b,T)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const T=!m.before,b=m.values||[];return new bn(b,T)}(t.endAt)),Uh(e,i,a,s,c,"F",u,d)}function tI(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dd(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=mn(t.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=mn(t.unaryFilter.field);return W.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mn(t.unaryFilter.field);return W.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mn(t.unaryFilter.field);return W.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(t){return W.create(mn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(n=>dd(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(r):M()}function nI(r){return Hy[r]}function rI(r){return Wy[r]}function iI(r){return Qy[r]}function pn(r){return{fieldPath:r.canonicalString()}}function mn(r){return se.fromServerFormat(r.fieldPath)}function fd(r){return r instanceof W?function(t){if(t.op==="=="){if(Eu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NAN"}};if(Iu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Eu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NOT_NAN"}};if(Iu(t.value))return{unaryFilter:{field:pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(t.field),op:rI(t.op),value:t.value}}}(r):r instanceof Z?function(t){const n=t.getFilters().map(i=>fd(i));return n.length===1?n[0]:{compositeFilter:{op:iI(t.op),filters:n}}}(r):M()}function sI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Ze{constructor(e,t,n,i,s=U.min(),a=U.min(),c=he.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ze(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ze(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ze(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ze(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class md{constructor(e){this.ct=e}}function oI(r,e){let t;if(e.document)t=Xy(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=N.fromSegments(e.noDocument.path),i=Zt(e.noDocument.readTime);t=ue.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const n=N.fromSegments(e.unknownDocument.path),i=Zt(e.unknownDocument.version);t=ue.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new oe(i[0],i[1]);return U.fromTimestamp(s)}(e.readTime)),t}function Fu(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Wi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,a){return{name:Gi(s,a.key),fields:a.data.value.mapValue.fields,updateTime:Dn(s,a.version.toTimestamp()),createTime:Dn(s,a.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Xt(e.version)};else{if(!e.isUnknownDocument())return M();n.unknownDocument={path:t.path.toArray(),version:Xt(e.version)}}return n}function Wi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Xt(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Zt(r){const e=new oe(r.seconds,r.nanoseconds);return U.fromTimestamp(e)}function Ut(r,e){const t=(e.baseMutations||[]).map(s=>Vo(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];a.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Vo(r.ct,s)),i=oe.fromMillis(e.localWriteTimeMs);return new ca(e.batchId,i,t,n)}function Ir(r){const e=Zt(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Zt(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return F(s.documents.length===1),Ne(ds(ad(s.documents[0])))}(r.query):function(s){return Ne(hd(s))}(r.query),new Ze(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,he.fromBase64String(r.resumeToken))}function gd(r,e){const t=Xt(e.snapshotVersion),n=Xt(e.lastLimboFreeSnapshotVersion);let i;i=$i(e.target)?ud(r.ct,e.target):ld(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Yt(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function _d(r){const e=hd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ro(e,e.limit,"L"):e}function to(r,e){return new la(e.largestBatchId,Vo(r.ct,e.overlayMutation))}function Uu(r,e){const t=e.path.lastSegment();return[r,Re(e.path.popLast()),t]}function Bu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Xt(n.readTime),documentKey:Re(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class aI{getBundleMetadata(e,t){return qu(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:Zt(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return qu(e).put(function(i){return{bundleId:i.id,createTime:Xt(be(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return zu(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:_d(s.bundledQuery),readTime:Zt(s.readTime)}}(n)})}saveNamedQuery(e,t){return zu(e).put(function(i){return{name:i.name,readTime:Xt(be(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function qu(r){return pe(r,"bundles")}function zu(r){return pe(r,"namedQueries")}/**
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
 */class gs{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new gs(e,n)}getOverlay(e,t){return ur(e).get(Uu(this.userId,t)).next(n=>n?to(this.serializer,n):null)}getOverlays(e,t){const n=ze();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,a)=>{const c=new la(t,a);i.push(this.ht(e,c))}),A.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(a=>i.add(Re(a.getCollectionPath())));const s=[];return i.forEach(a=>{const c=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(ur(e).j("collectionPathOverlayIndex",c))}),A.waitFor(s)}getOverlaysForCollection(e,t,n){const i=ze(),s=Re(t),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ur(e).U("collectionPathOverlayIndex",a).next(c=>{for(const u of c){const d=to(this.serializer,u);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=ze();let a;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ur(e).J({index:"collectionGroupOverlayIndex",range:c},(u,d,p)=>{const m=to(this.serializer,d);s.size()<i||m.largestBatchId===a?(s.set(m.getKey(),m),a=m.largestBatchId):p.done()}).next(()=>s)}ht(e,t){return ur(e).put(function(i,s,a){const[c,u,d]=Uu(s,a.mutation.key);return{userId:s,collectionPath:u,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Hi(i.ct,a.mutation)}}(this.serializer,this.userId,t))}}function ur(r){return pe(r,"documentOverlays")}/**
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
 */class cI{Pt(e){return pe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?he.fromUint8Array(n):he.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Bt{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ce(e.integerValue));else if("doubleValue"in e){const n=ce(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),Mr(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=tt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Tt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Vh(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):M()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}St(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),N.fromName(e).path.forEach(n=>{this.dt(t,60),this.bt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Bt.Dt=new Bt;function uI(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function ju(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const a=uI(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(e/8)}class lI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.vt(n.value),n=t.next();this.Ft()}Mt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xt(n.value),n=t.next();this.Ot()}Nt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.vt(n);else if(n<2048)this.vt(960|n>>>6),this.vt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.vt(480|n>>>12),this.vt(128|63&n>>>6),this.vt(128|63&n);else{const i=t.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ft()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.xt(n);else if(n<2048)this.xt(960|n>>>6),this.xt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|n>>>12),this.xt(128|63&n>>>6),this.xt(128|63&n);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}Bt(e){const t=this.kt(e),n=ju(t);this.qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Qt(e){const t=this.kt(e),n=ju(t);this.qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Kt(){this.$t(255),this.$t(255)}Ut(){this.Wt(255),this.Wt(255)}reset(){this.position=0}seed(e){this.qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Gt(){return this.buffer.slice(0,this.position)}kt(e){const t=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}vt(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(t)}xt(e){const t=255&e;t===0?(this.Wt(0),this.Wt(255)):t===255?(this.Wt(255),this.Wt(0)):this.Wt(e)}Ft(){this.$t(0),this.$t(1)}Ot(){this.Wt(0),this.Wt(1)}$t(e){this.qt(1),this.buffer[this.position++]=e}Wt(e){this.qt(1),this.buffer[this.position++]=~e}qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class hI{constructor(e){this.zt=e}gt(e){this.zt.Ct(e)}Rt(e){this.zt.Nt(e)}At(e){this.zt.Bt(e)}Et(){this.zt.Kt()}}class dI{constructor(e){this.zt=e}gt(e){this.zt.Mt(e)}Rt(e){this.zt.Lt(e)}At(e){this.zt.Qt(e)}Et(){this.zt.Ut()}}class lr{constructor(){this.zt=new lI,this.jt=new hI(this.zt),this.Ht=new dI(this.zt)}seed(e){this.zt.seed(e)}Jt(e){return e===0?this.jt:this.Ht}Gt(){return this.zt.Gt()}reset(){this.zt.reset()}}/**
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
 */class qt{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Yt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new qt(this.indexId,this.documentKey,this.arrayValue,n)}}function ct(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=$u(r.arrayValue,e.arrayValue),t!==0?t:(t=$u(r.directionalValue,e.directionalValue),t!==0?t:N.comparator(r.documentKey,e.documentKey)))}function $u(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Ku{constructor(e){this.Zt=new ee((t,n)=>se.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const t of e.filters){const n=t;n.isInequality()?this.Zt=this.Zt.add(n):this.en.push(n)}}get tn(){return this.Zt.size>1}nn(e){if(F(e.collectionGroup===this.collectionId),this.tn)return!1;const t=Io(e);if(t!==void 0&&!this.rn(t))return!1;const n=Lt(e);let i=new Set,s=0,a=0;for(;s<n.length&&this.rn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Zt.size>0){const c=this.Zt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.sn(c,u)||!this.on(this.Xt[a++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(a>=this.Xt.length||!this.on(this.Xt[a++],c))return!1}return!0}_n(){if(this.tn)return null;let e=new ee(se.comparator);const t=[];for(const n of this.en)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Ci(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Ci(n.field,0))}for(const n of this.Xt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Ci(n.field,n.dir==="asc"?0:1)));return new zi(zi.UNKNOWN_ID,this.collectionId,t,Or.empty())}rn(e){for(const t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function yd(r){var e,t;if(F(r instanceof W||r instanceof Z),r instanceof W){if(r instanceof Fh){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>W.create(r.field,"==",s)))||[];return Z.create(i,"or")}return r}const n=r.filters.map(i=>yd(i));return Z.create(n,r.op)}function fI(r){if(r.getFilters().length===0)return[];const e=xo(yd(r));return F(Id(e)),Do(e)||ko(e)?[e]:e.getFilters()}function Do(r){return r instanceof W}function ko(r){return r instanceof Z&&sa(r)}function Id(r){return Do(r)||ko(r)||function(t){if(t instanceof Z&&wo(t)){for(const n of t.getFilters())if(!Do(n)&&!ko(n))return!1;return!0}return!1}(r)}function xo(r){if(F(r instanceof W||r instanceof Z),r instanceof W)return r;if(r.filters.length===1)return xo(r.filters[0]);const e=r.filters.map(n=>xo(n));let t=Z.create(e,r.op);return t=Qi(t),Id(t)?t:(F(t instanceof Z),F(Pn(t)),F(t.filters.length>1),t.filters.reduce((n,i)=>fa(n,i)))}function fa(r,e){let t;return F(r instanceof W||r instanceof Z),F(e instanceof W||e instanceof Z),t=r instanceof W?e instanceof W?function(i,s){return Z.create([i,s],"and")}(r,e):Gu(r,e):e instanceof W?Gu(e,r):function(i,s){if(F(i.filters.length>0&&s.filters.length>0),Pn(i)&&Pn(s))return Oh(i,s.getFilters());const a=wo(i)?i:s,c=wo(i)?s:i,u=a.filters.map(d=>fa(d,c));return Z.create(u,"or")}(r,e),Qi(t)}function Gu(r,e){if(Pn(e))return Oh(e,r.getFilters());{const t=e.filters.map(n=>fa(r,n));return Z.create(t,"or")}}function Qi(r){if(F(r instanceof W||r instanceof Z),r instanceof W)return r;const e=r.getFilters();if(e.length===1)return Qi(e[0]);if(xh(r))return r;const t=e.map(i=>Qi(i)),n=[];return t.forEach(i=>{i instanceof W?n.push(i):i instanceof Z&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:Z.create(n,r.op)}/**
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
 */class pI{constructor(){this.an=new pa}addToCollectionParentIndex(e,t){return this.an.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Me.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Me.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class pa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ee(ne.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ee(ne.comparator)).toArray()}}/**
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
 */const Ei=new Uint8Array(0);class mI{constructor(e,t){this.databaseId=t,this.un=new pa,this.cn=new Pt(n=>Yt(n),(n,i)=>Wr(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.un.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.un.add(t)});const s={collectionId:n,parent:Re(i)};return Hu(e).put(s)}return A.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[_h(t),""],!1,!0);return Hu(e).U(i).next(s=>{for(const a of s){if(a.collectionId!==t)break;n.push(qe(a.parent))}return n})}addFieldIndex(e,t){const n=hr(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const a=ln(e);return s.next(c=>{a.put(Bu(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=hr(e),i=ln(e),s=un(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=hr(e),n=un(e),i=ln(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return A.forEach(this.ln(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new Ku(n)._n();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=un(e);let i=!0;const s=new Map;return A.forEach(this.ln(t),a=>this.hn(e,a).next(c=>{i&&(i=!!c),s.set(a,c)})).next(()=>{if(i){let a=K();const c=[];return A.forEach(s,(u,d)=>{C("IndexedDbIndexManager",`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(u)} to execute ${Yt(t)}`);const p=function(B,Q){const X=Io(Q);if(X===void 0)return null;for(const G of Ki(B,X.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(d,u),m=function(B,Q){const X=new Map;for(const G of Lt(Q))for(const I of Ki(B,G.fieldPath))switch(I.op){case"==":case"in":X.set(G.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return X.set(G.fieldPath.canonicalString(),I.value),Array.from(X.values())}return null}(d,u),T=function(B,Q){const X=[];let G=!0;for(const I of Lt(Q)){const g=I.kind===0?Su(B,I.fieldPath,B.startAt):Ru(B,I.fieldPath,B.startAt);X.push(g.value),G&&(G=g.inclusive)}return new bn(X,G)}(d,u),b=function(B,Q){const X=[];let G=!0;for(const I of Lt(Q)){const g=I.kind===0?Ru(B,I.fieldPath,B.endAt):Su(B,I.fieldPath,B.endAt);X.push(g.value),G&&(G=g.inclusive)}return new bn(X,G)}(d,u),D=this.Pn(u,d,T),x=this.Pn(u,d,b),V=this.In(u,d,m),$=this.Tn(u.indexId,p,D,T.inclusive,x,b.inclusive,V);return A.forEach($,z=>n.G(z,t.limit).next(B=>{B.forEach(Q=>{const X=N.fromSegments(Q.documentKey);a.has(X)||(a=a.add(X),c.push(X))})}))}).next(()=>c)}return A.resolve(null)})}ln(e){let t=this.cn.get(e);return t||(e.filters.length===0?t=[e]:t=fI(Z.create(e.filters,"and")).map(n=>So(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,t),t)}Tn(e,t,n,i,s,a,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),d=u/(t!=null?t.length:1),p=[];for(let m=0;m<u;++m){const T=t?this.En(t[m/d]):Ei,b=this.dn(e,T,n[m%d],i),D=this.An(e,T,s[m%d],a),x=c.map(V=>this.dn(e,T,V,!0));p.push(...this.createRange(b,D,x))}return p}dn(e,t,n,i){const s=new qt(e,N.empty(),t,n);return i?s:s.Yt()}An(e,t,n,i){const s=new qt(e,N.empty(),t,n);return i?s.Yt():s}hn(e,t){const n=new Ku(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const c of s)n.nn(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(e,t){let n=2;const i=this.ln(t);return A.forEach(i,s=>this.hn(e,s).next(a=>{a?n!==0&&a.fields.length<function(u){let d=new ee(se.comparator),p=!1;for(const m of u.filters)for(const T of m.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?p=!0:d=d.add(T.field));for(const m of u.orderBy)m.field.isKeyField()||(d=d.add(m.field));return d.size+(p?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&n===2?1:n)}Rn(e,t){const n=new lr;for(const i of Lt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const a=n.Jt(i.kind);Bt.Dt.It(s,a)}return n.Gt()}En(e){const t=new lr;return Bt.Dt.It(e,t.Jt(0)),t.Gt()}Vn(e,t){const n=new lr;return Bt.Dt.It(ia(this.databaseId,t),n.Jt(function(s){const a=Lt(s);return a.length===0?0:a[a.length-1].kind}(e))),n.Gt()}In(e,t,n){if(n===null)return[];let i=[];i.push(new lr);let s=0;for(const a of Lt(e)){const c=n[s++];for(const u of i)if(this.mn(t,a.fieldPath)&&Ur(c))i=this.fn(i,a,c);else{const d=u.Jt(a.kind);Bt.Dt.It(c,d)}}return this.gn(i)}Pn(e,t,n){return this.In(e,t,n.position)}gn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Gt();return t}fn(e,t,n){const i=[...e],s=[];for(const a of n.arrayValue.values||[])for(const c of i){const u=new lr;u.seed(c.Gt()),Bt.Dt.It(a,u.Jt(t.kind)),s.push(u)}return s}mn(e,t){return!!e.filters.find(n=>n instanceof W&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=hr(e),i=ln(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const a=[];return A.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{a.push(function(p,m){const T=m?new Or(m.sequenceNumber,new Me(Zt(m.readTime),new N(qe(m.documentKey)),m.largestBatchId)):Or.empty(),b=p.fields.map(([D,x])=>new Ci(se.fromServerFormat(D),x));return new zi(p.indexId,p.collectionGroup,b,T)}(c,u))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:j(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=hr(e),s=ln(e);return this.pn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>A.forEach(c,u=>s.put(Bu(u.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,(i,s)=>{const a=n.get(i.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),A.forEach(c,u=>this.yn(e,i,u).next(d=>{const p=this.wn(s,u);return d.isEqual(p)?A.resolve():this.Sn(e,s,u,d,p)}))))})}bn(e,t,n,i){return un(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Vn(n,t.key),documentKey:t.key.path.toArray()})}Dn(e,t,n,i){return un(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Vn(n,t.key),t.key.path.toArray()])}yn(e,t,n){const i=un(e);let s=new ee(ct);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Vn(n,t)])},(a,c)=>{s=s.add(new qt(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}wn(e,t){let n=new ee(ct);const i=this.Rn(t,e);if(i==null)return n;const s=Io(t);if(s!=null){const a=e.data.field(s.fieldPath);if(Ur(a))for(const c of a.arrayValue.values||[])n=n.add(new qt(t.indexId,e.key,this.En(c),i))}else n=n.add(new qt(t.indexId,e.key,Ei,i));return n}Sn(e,t,n,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const a=[];return function(u,d,p,m,T){const b=u.getIterator(),D=d.getIterator();let x=cn(b),V=cn(D);for(;x||V;){let $=!1,z=!1;if(x&&V){const B=p(x,V);B<0?z=!0:B>0&&($=!0)}else x!=null?z=!0:$=!0;$?(m(V),V=cn(D)):z?(T(x),x=cn(b)):(x=cn(b),V=cn(D))}}(i,s,ct,c=>{a.push(this.bn(e,t,n,c))},c=>{a.push(this.Dn(e,t,n,c))}),A.waitFor(a)}pn(e){let t=1;return ln(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,c)=>ct(a,c)).filter((a,c,u)=>!c||ct(a,u[c-1])!==0);const i=[];i.push(e);for(const a of n){const c=ct(a,e),u=ct(a,t);if(c===0)i[0]=e.Yt();else if(c>0&&u<0)i.push(a),i.push(a.Yt());else if(u>0)break}i.push(t);const s=[];for(let a=0;a<i.length;a+=2){if(this.Cn(i[a],i[a+1]))return[];const c=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,Ei,[]],u=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,Ei,[]];s.push(IDBKeyRange.bound(c,u))}return s}Cn(e,t){return ct(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Wu)}getMinOffset(e,t){return A.mapArray(this.ln(t),n=>this.hn(e,n).next(i=>i||M())).next(Wu)}}function Hu(r){return pe(r,"collectionParents")}function un(r){return pe(r,"indexEntries")}function hr(r){return pe(r,"indexConfiguration")}function ln(r){return pe(r,"indexState")}function Wu(r){F(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Zo(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Me(e.readTime,e.documentKey,t)}/**
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
 */const Qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Ed(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],a=IDBKeyRange.only(t.batchId);let c=0;const u=n.J({range:a},(p,m,T)=>(c++,T.delete()));s.push(u.next(()=>{F(c===1)}));const d=[];for(const p of t.mutations){const m=Ah(e,p.key.path,t.batchId);s.push(i.delete(m)),d.push(p.key)}return A.waitFor(s).next(()=>d)}function Ji(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);class _s{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.vn={}}static lt(e,t,n,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new _s(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ut(e).J({index:"userMutationsIndex",range:n},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=gn(e),a=ut(e);return a.add({}).next(c=>{F(typeof c=="number");const u=new ca(c,t,n,i),d=function(b,D,x){const V=x.baseMutations.map(z=>Hi(b.ct,z)),$=x.mutations.map(z=>Hi(b.ct,z));return{userId:D,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:V,mutations:$}}(this.serializer,this.userId,u),p=[];let m=new ee((T,b)=>j(T.canonicalString(),b.canonicalString()));for(const T of i){const b=Ah(this.userId,T.key.path,c);m=m.add(T.key.path.popLast()),p.push(a.put(d)),p.push(s.put(b,Y_))}return m.forEach(T=>{p.push(this.indexManager.addToCollectionParentIndex(e,T))}),e.addOnCommittedListener(()=>{this.vn[c]=u.keys()}),A.waitFor(p).next(()=>u)})}lookupMutationBatch(e,t){return ut(e).get(t).next(n=>n?(F(n.userId===this.userId),Ut(this.serializer,n)):null)}Fn(e,t){return this.vn[t]?A.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return ut(e).J({index:"userMutationsIndex",range:i},(a,c,u)=>{c.userId===this.userId&&(F(c.batchId>=n),s=Ut(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ut(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ut(e).U("userMutationsIndex",t).next(n=>n.map(i=>Ut(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Vi(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return gn(e).J({range:i},(a,c,u)=>{const[d,p,m]=a,T=qe(p);if(d===this.userId&&t.path.isEqual(T))return ut(e).get(m).next(b=>{if(!b)throw M();F(b.userId===this.userId),s.push(Ut(this.serializer,b))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee(j);const i=[];return t.forEach(s=>{const a=Vi(this.userId,s.path),c=IDBKeyRange.lowerBound(a),u=gn(e).J({range:c},(d,p,m)=>{const[T,b,D]=d,x=qe(b);T===this.userId&&s.path.isEqual(x)?n=n.add(D):m.done()});i.push(u)}),A.waitFor(i).next(()=>this.Mn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Vi(this.userId,n),a=IDBKeyRange.lowerBound(s);let c=new ee(j);return gn(e).J({range:a},(u,d,p)=>{const[m,T,b]=u,D=qe(T);m===this.userId&&n.isPrefixOf(D)?D.length===i&&(c=c.add(b)):p.done()}).next(()=>this.Mn(e,c))}Mn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(ut(e).get(s).next(a=>{if(a===null)throw M();F(a.userId===this.userId),n.push(Ut(this.serializer,a))}))}),A.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Ed(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.xn(t.batchId)}),A.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return gn(e).J({range:n},(s,a,c)=>{if(s[0]===this.userId){const u=qe(s[1]);i.push(u)}else c.done()}).next(()=>{F(i.length===0)})})}containsKey(e,t){return vd(e,this.userId,t)}On(e){return Td(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function vd(r,e,t){const n=Vi(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return gn(r).J({range:s,H:!0},(c,u,d)=>{const[p,m,T]=c;p===e&&m===i&&(a=!0),d.done()}).next(()=>a)}function ut(r){return pe(r,"mutations")}function gn(r){return pe(r,"documentMutations")}function Td(r){return pe(r,"mutationQueues")}/**
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
 */class en{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new en(0)}static Bn(){return new en(-1)}}/**
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
 */class gI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.kn(e).next(t=>{const n=new en(t.highestTargetId);return t.highestTargetId=n.next(),this.qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(t=>U.fromTimestamp(new oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.kn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.qn(e,i)))}addTargetData(e,t){return this.Qn(e,t).next(()=>this.kn(e).next(n=>(n.targetCount+=1,this.Kn(t,n),this.qn(e,n))))}updateTargetData(e,t){return this.Qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>hn(e).delete(t.targetId)).next(()=>this.kn(e)).next(n=>(F(n.targetCount>0),n.targetCount-=1,this.qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return hn(e).J((a,c)=>{const u=Ir(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,t){return hn(e).J((n,i)=>{const s=Ir(i);t(s)})}kn(e){return Ju(e).get("targetGlobalKey").next(t=>(F(t!==null),t))}qn(e,t){return Ju(e).put("targetGlobalKey",t)}Qn(e,t){return hn(e).put(gd(this.serializer,t))}Kn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.kn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Yt(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return hn(e).J({range:i,index:"queryTargetsIndex"},(a,c,u)=>{const d=Ir(c);Wr(t,d.target)&&(s=d,u.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=pt(e);return t.forEach(a=>{const c=Re(a.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,a))}),A.waitFor(i)}removeMatchingKeys(e,t,n){const i=pt(e);return A.forEach(t,s=>{const a=Re(s.path);return A.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=pt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=pt(e);let s=K();return i.J({range:n,H:!0},(a,c,u)=>{const d=qe(a[1]),p=new N(d);s=s.add(p)}).next(()=>s)}containsKey(e,t){const n=Re(t.path),i=IDBKeyRange.bound([n],[_h(n)],!1,!0);let s=0;return pt(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,c],u,d)=>{a!==0&&(s++,d.done())}).next(()=>s>0)}ot(e,t){return hn(e).get(t).next(n=>n?Ir(n):null)}}function hn(r){return pe(r,"targets")}function Ju(r){return pe(r,"targetGlobal")}function pt(r){return pe(r,"targetDocuments")}/**
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
 */function Yu([r,e],[t,n]){const i=j(r,t);return i===0?j(e,n):i}class _I{constructor(e){this.$n=e,this.buffer=new ee(Yu),this.Un=0}Wn(){return++this.Un}Gn(e){const t=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Yu(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.zn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return this.zn!==null}jn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bt(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Rt(t)}await this.jn(3e5)})}}class II{constructor(e,t){this.Hn=e,this.params=t}calculateTargetCount(e,t){return this.Hn.Jn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Ve.oe);const n=new _I(t);return this.Hn.forEachTarget(e,i=>n.Gn(i.sequenceNumber)).next(()=>this.Hn.Yn(e,i=>n.Gn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Hn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Hn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Qu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qu):this.Zn(e,t))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,t){let n,i,s,a,c,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,c=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(d=Date.now(),dn()<=H.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function EI(r,e){return new II(r,e)}/**
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
 */class vI{constructor(e,t){this.db=e,this.garbageCollector=EI(this,t)}Jn(e){const t=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}Xn(e){let t=0;return this.Yn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Yn(e,t){return this.er(e,(n,i)=>t(i))}addReference(e,t,n){return vi(e,n)}removeReference(e,t,n){return vi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return vi(e,t)}tr(e,t){return function(i,s){let a=!1;return Td(i).Y(c=>vd(i,c,s).next(u=>(u&&(a=!0),A.resolve(!u)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.er(e,(a,c)=>{if(c<=t){const u=this.tr(e,a).next(d=>{if(!d)return s++,n.getEntry(e,a).next(()=>(n.removeEntry(a,U.min()),pt(e).delete(function(m){return[0,Re(m.path)]}(a))))});i.push(u)}}).next(()=>A.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return vi(e,t)}er(e,t){const n=pt(e);let i,s=Ve.oe;return n.J({index:"documentTargetsIndex"},([a,c],{path:u,sequenceNumber:d})=>{a===0?(s!==Ve.oe&&t(new N(qe(i)),s),s=d,i=u):s=Ve.oe}).next(()=>{s!==Ve.oe&&t(new N(qe(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function vi(r,e){return pt(r).put(function(n,i){return{targetId:0,path:Re(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class wd{constructor(){this.changes=new Pt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ot(e).put(n)}removeEntry(e,t,n){return Ot(e).delete(function(s,a){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Wi(a),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.nr(e,n)))}getEntry(e,t){let n=ue.newInvalidDocument(t);return Ot(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dr(t))},(i,s)=>{n=this.rr(t,s)}).next(()=>n)}ir(e,t){let n={size:0,document:ue.newInvalidDocument(t)};return Ot(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(dr(t))},(i,s)=>{n={document:this.rr(t,s),size:Ji(s)}}).next(()=>n)}getEntries(e,t){let n=ke();return this.sr(e,t,(i,s)=>{const a=this.rr(i,s);n=n.insert(i,a)}).next(()=>n)}_r(e,t){let n=ke(),i=new re(N.comparator);return this.sr(e,t,(s,a)=>{const c=this.rr(s,a);n=n.insert(s,c),i=i.insert(s,Ji(a))}).next(()=>({documents:n,ar:i}))}sr(e,t,n){if(t.isEmpty())return A.resolve();let i=new ee(el);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(dr(i.first()),dr(i.last())),a=i.getIterator();let c=a.getNext();return Ot(e).J({index:"documentKeyIndex",range:s},(u,d,p)=>{const m=N.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&el(c,m)<0;)n(c,null),c=a.getNext();c&&c.isEqual(m)&&(n(c,d),c=a.hasNext()?a.getNext():null),c?p.$(dr(c)):p.done()}).next(()=>{for(;c;)n(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const a=t.path,c=[a.popLast().toArray(),a.lastSegment(),Wi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ot(e).U(IDBKeyRange.bound(c,u,!0)).next(d=>{s==null||s.incrementDocumentReadCount(d.length);let p=ke();for(const m of d){const T=this.rr(N.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);T.isFoundDocument()&&(Qr(t,T)||i.has(T.key))&&(p=p.insert(T.key,T))}return p})}getAllFromCollectionGroup(e,t,n,i){let s=ke();const a=Zu(t,n),c=Zu(t,Me.max());return Ot(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,c,!0)},(u,d,p)=>{const m=this.rr(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(m.key,m),s.size===i&&p.done()}).next(()=>s)}newChangeBuffer(e){return new wI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Xu(e).get("remoteDocumentGlobalKey").next(t=>(F(!!t),t))}nr(e,t){return Xu(e).put("remoteDocumentGlobalKey",t)}rr(e,t){if(t){const n=oI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ue.newInvalidDocument(e)}}function Ad(r){return new TI(r)}class wI extends wd{constructor(e,t){super(),this.ur=e,this.trackRemovals=t,this.cr=new Pt(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ee((s,a)=>j(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const c=this.cr.get(s);if(t.push(this.ur.removeEntry(e,s,c.readTime)),a.isValidDocument()){const u=Fu(this.ur.serializer,a);i=i.add(s.path.popLast());const d=Ji(u);n+=d-c.size,t.push(this.ur.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=Fu(this.ur.serializer,a.convertToNoDocument(U.min()));t.push(this.ur.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.ur.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ur.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.ur.ir(e,t).next(n=>(this.cr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.ur._r(e,t).next(({documents:n,ar:i})=>(i.forEach((s,a)=>{this.cr.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function Xu(r){return pe(r,"remoteDocumentGlobal")}function Ot(r){return pe(r,"remoteDocumentsV14")}function dr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Zu(r,e){const t=e.documentKey.path.toArray();return[r,Wi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function el(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=j(t[s],n[s]),i)return i;return i=j(t.length,n.length),i||(i=j(t[t.length-2],n[n.length-2]),i||j(t[t.length-1],n[n.length-1]))}/**
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
 */class AI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Sd{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Rr(n.mutation,i,Le.empty(),oe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,K()).next(()=>n))}getLocalViewOfDocuments(e,t,n=K()){const i=ze();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=_r();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=ze();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,K()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,n,i){let s=ke();const a=Sr(),c=function(){return Sr()}();return t.forEach((u,d)=>{const p=n.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ct)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Rr(p.mutation,d,p.mutation.getFieldMask(),oe.now())):a.set(d.key,Le.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var m;return c.set(d,new AI(p,(m=a.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Sr();let i=new re((a,c)=>a-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=n.get(u)||Le.empty();p=c.applyToLocalView(d,p),n.set(u,p);const m=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,m=Kh();p.forEach(T=>{if(!s.has(T)){const b=Xh(t.get(T),n.get(T));b!==null&&m.set(T,b),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return A.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):by(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):A.resolve(ze());let c=-1,u=s;return a.next(d=>A.forEach(d,(p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(p)?A.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,K())).next(p=>({batchId:c,changes:$h(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next(n=>{let i=_r();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=_r();return this.indexManager.getCollectionParents(e,s).next(c=>A.forEach(c,u=>{const d=function(m,T){return new hs(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next(p=>{p.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ue.newInvalidDocument(p)))});let c=_r();return a.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Rr(p.mutation,d,Le.empty(),oe.now()),Qr(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class SI{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return A.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:be(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:_d(i.bundledQuery),readTime:be(i.readTime)}}(t)),A.resolve()}}/**
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
 */class RI{constructor(){this.overlays=new re(N.comparator),this.Pr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ze();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Pr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const i=ze(),s=t.length+1,a=new N(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new re((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=s.get(d.largestBatchId);p===null&&(p=ze(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=ze(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return A.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Pr.get(i.largestBatchId).delete(n.key);this.Pr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new la(t,n));let s=this.Pr.get(t);s===void 0&&(s=K(),this.Pr.set(t,s)),this.Pr.set(t,s.add(n.key))}}/**
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
 */class bI{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class ma{constructor(){this.Ir=new ee(me.Tr),this.Er=new ee(me.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const n=new me(e,t);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Rr(new me(e,t))}Vr(e,t){e.forEach(n=>this.removeReference(n,t))}mr(e){const t=new N(new ne([])),n=new me(t,e),i=new me(t,e+1),s=[];return this.Er.forEachInRange([n,i],a=>{this.Rr(a),s.push(a.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new N(new ne([])),n=new me(t,e),i=new me(t,e+1);let s=K();return this.Er.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new me(e,0),n=this.Ir.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class me{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return N.comparator(e.key,t.key)||j(e.yr,t.yr)}static dr(e,t){return j(e.yr,t.yr)||N.comparator(e.key,t.key)}}/**
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
 */class PI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new ee(me.Tr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ca(s,t,n,i);this.mutationQueue.push(a);for(const c of i)this.Sr=this.Sr.add(new me(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(a)}lookupMutationBatch(e,t){return A.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Dr(n),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,i],a=>{const c=this.br(a.yr);s.push(c)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee(j);return t.forEach(i=>{const s=new me(i,0),a=new me(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,a],c=>{n=n.add(c.yr)})}),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;N.isDocumentKey(s)||(s=s.child(""));const a=new me(new N(s),0);let c=new ee(j);return this.Sr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.yr)),!0)},a),A.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const i=this.br(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Sr;return A.forEach(t.mutations,i=>{const s=new me(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=n})}xn(e){}containsKey(e,t){const n=new me(t,0),i=this.Sr.firstAfterOrEqual(n);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class CI{constructor(e){this.Fr=e,this.docs=function(){return new re(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(t))}getEntries(e,t){let n=ke();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():ue.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=ke();const a=t.path,c=new N(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Zo(Ih(p),n)<=0||(i.has(p.key)||Qr(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M()}Mr(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new VI(this)}getSize(e){return A.resolve(this.size)}}class VI extends wd{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
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
 */class DI{constructor(e){this.persistence=e,this.Or=new Pt(t=>Yt(t),Wr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new ma,this.targetCount=0,this.Br=en.Ln()}forEachTarget(e,t){return this.Or.forEach((n,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),A.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new en(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Qn(t),A.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Or.forEach((a,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Or.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.Or.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.Lr.Ar(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.Lr.Vr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Lr.pr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.Lr.containsKey(t))}}/**
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
 */class Rd{constructor(e,t){this.kr={},this.overlays={},this.qr=new Ve(0),this.Qr=!1,this.Qr=!0,this.Kr=new bI,this.referenceDelegate=e(this),this.$r=new DI(this),this.indexManager=new pI,this.remoteDocumentCache=function(i){return new CI(i)}(n=>this.referenceDelegate.Ur(n)),this.serializer=new md(t),this.Wr=new SI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new RI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new PI(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);const i=new kI(this.qr.next());return this.referenceDelegate.Gr(),n(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return A.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}class kI extends vh{constructor(e){super(),this.currentSequenceNumber=e}}class ys{constructor(e){this.persistence=e,this.Hr=new ma,this.Jr=null}static Yr(e){return new ys(e)}get Zr(){if(this.Jr)return this.Jr;throw M()}addReference(e,t,n){return this.Hr.addReference(n,t),this.Zr.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Hr.removeReference(n,t),this.Zr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),A.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Zr,n=>{const i=N.fromPath(n);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,U.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(n=>{n?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return A.or([()=>A.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
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
 */class xI{constructor(e){this.serializer=e}O(e,t,n,i){const s=new us("createOrUpgrade",t);n<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",mu,{unique:!0}),u.createObjectStore("documentMutations")}(e),tl(e),function(u){u.createObjectStore("remoteDocuments")}(e));let a=A.resolve();return n<3&&i>=3&&(n!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),tl(e)),a=a.next(()=>function(u){const d=u.store("targetGlobal"),p={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",p)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(u,d){return d.store("mutations").U().next(p=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",mu,{unique:!0});const m=d.store("mutations"),T=p.map(b=>m.put(b));return A.waitFor(T)})}(e,s))),a=a.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(a=a.next(()=>this.ti(s))),n<6&&i>=6&&(a=a.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ni(s)))),n<7&&i>=7&&(a=a.next(()=>this.ri(s))),n<8&&i>=8&&(a=a.next(()=>this.ii(e,s))),n<9&&i>=9&&(a=a.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(a=a.next(()=>this.si(s))),n<11&&i>=11&&(a=a.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(a=a.next(()=>{(function(u){const d=u.createObjectStore("documentOverlays",{keyPath:uy});d.createIndex("collectionPathOverlayIndex",ly,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",hy,{unique:!1})})(e)})),n<13&&i>=13&&(a=a.next(()=>function(u){const d=u.createObjectStore("remoteDocumentsV14",{keyPath:X_});d.createIndex("documentKeyIndex",Z_),d.createIndex("collectionGroupIndex",ey)}(e)).next(()=>this.oi(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(a=a.next(()=>this._i(e,s))),n<15&&i>=15&&(a=a.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:sy}).createIndex("sequenceNumberIndex",oy,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:ay}).createIndex("documentKeyIndex",cy,{unique:!1})}(e))),n<16&&i>=16&&(a=a.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),a}ni(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Ji(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ti(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>A.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(c=>A.forEach(c,u=>{F(u.userId===s.userId);const d=Ut(this.serializer,u);return Ed(e,s.userId,d).next(()=>{})}))}))}ri(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((a,c)=>{const u=new ne(a),d=function(m){return[0,Re(m)]}(u);s.push(t.get(d).next(p=>p?A.resolve():(m=>t.put({targetId:0,path:Re(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>A.waitFor(s))})}ii(e,t){e.createObjectStore("collectionParents",{keyPath:iy});const n=t.store("collectionParents"),i=new pa,s=a=>{if(i.add(a)){const c=a.lastSegment(),u=a.popLast();return n.put({collectionId:c,parent:Re(u)})}};return t.store("remoteDocuments").J({H:!0},(a,c)=>{const u=new ne(a);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([a,c,u],d)=>{const p=qe(c);return s(p.popLast())}))}si(e){const t=e.store("targets");return t.J((n,i)=>{const s=Ir(i),a=gd(this.serializer,s);return t.put(a)})}oi(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,a)=>{const c=t.store("remoteDocumentsV14"),u=function(m){return m.document?new N(ne.fromString(m.document.name).popFirst(5)):m.noDocument?N.fromSegments(m.noDocument.path):m.unknownDocument?N.fromSegments(m.unknownDocument.path):M()}(a).path.toArray(),d={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(c.put(d))}).next(()=>A.waitFor(i))}_i(e,t){const n=t.store("mutations"),i=Ad(this.serializer),s=new Rd(ys.Yr,this.serializer.ct);return n.U().next(a=>{const c=new Map;return a.forEach(u=>{var d;let p=(d=c.get(u.userId))!==null&&d!==void 0?d:K();Ut(this.serializer,u).keys().forEach(m=>p=p.add(m)),c.set(u.userId,p)}),A.forEach(c,(u,d)=>{const p=new we(d),m=gs.lt(this.serializer,p),T=s.getIndexManager(p),b=_s.lt(p,this.serializer,T,s.referenceDelegate);return new Sd(i,b,m,T).recalculateAndSaveOverlaysForDocumentKeys(new Eo(t,Ve.oe),u).next()})})}}function tl(r){r.createObjectStore("targetDocuments",{keyPath:ny}).createIndex("documentTargetsIndex",ry,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ty,{unique:!0}),r.createObjectStore("targetGlobal")}const no="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ga{constructor(e,t,n,i,s,a,c,u,d,p,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ai=s,this.window=a,this.document=c,this.ui=d,this.ci=p,this.li=m,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.hi=null,this.inForeground=!1,this.Pi=null,this.Ii=null,this.Ti=Number.NEGATIVE_INFINITY,this.Ei=T=>Promise.resolve(),!ga.D())throw new O(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new vI(this,i),this.di=t+"main",this.serializer=new md(u),this.Ai=new vt(this.di,this.li,new xI(this.serializer)),this.Kr=new cI,this.$r=new gI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ad(this.serializer),this.Wr=new aI,this.window&&this.window.localStorage?this.Ri=this.window.localStorage:(this.Ri=null,p===!1&&le("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Vi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,no);return this.mi(),this.fi(),this.gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.$r.getHighestSequenceNumber(e))}).then(e=>{this.qr=new Ve(e,this.ui)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ai&&this.Ai.close(),Promise.reject(e)))}pi(e){return this.Ei=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ai.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ai.enqueueAndForget(async()=>{this.started&&await this.Vi()}))}Vi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ti(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.yi(e).next(t=>{t||(this.isPrimary=!1,this.ai.enqueueRetryable(()=>this.Ei(!1)))})}).next(()=>this.wi(e)).next(t=>this.isPrimary&&!t?this.Si(e).next(()=>!1):!!t&&this.bi(e).next(()=>!0))).catch(e=>{if(bt(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ai.enqueueRetryable(()=>this.Ei(e)),this.isPrimary=e})}yi(e){return fr(e).get("owner").next(t=>A.resolve(this.Di(t)))}Ci(e){return Ti(e).delete(this.clientId)}async vi(){if(this.isPrimary&&!this.Fi(this.Ti,18e5)){this.Ti=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=pe(t,"clientMetadata");return n.U().next(i=>{const s=this.Mi(i,18e5),a=i.filter(c=>s.indexOf(c)===-1);return A.forEach(a,c=>n.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ri)for(const t of e)this.Ri.removeItem(this.xi(t.clientId))}}gi(){this.Ii=this.ai.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Vi().then(()=>this.vi()).then(()=>this.gi()))}Di(e){return!!e&&e.ownerId===this.clientId}wi(e){return this.ci?A.resolve(!0):fr(e).get("owner").next(t=>{if(t!==null&&this.Fi(t.leaseTimestampMs,5e3)&&!this.Oi(t.ownerId)){if(this.Di(t)&&this.networkEnabled)return!0;if(!this.Di(t)){if(!t.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,no);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ti(e).U().next(n=>this.Mi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||a&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Qr=!1,this.Ni(),this.Ii&&(this.Ii.cancel(),this.Ii=null),this.Li(),this.Bi(),await this.Ai.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Eo(e,Ve.oe);return this.Si(t).next(()=>this.Ci(t))}),this.Ai.close(),this.ki()}Mi(e,t){return e.filter(n=>this.Fi(n.updateTimeMs,t)&&!this.Oi(n.clientId))}qi(){return this.runTransaction("getActiveClients","readonly",e=>Ti(e).U().next(t=>this.Mi(t,18e5).map(n=>n.clientId)))}get started(){return this.Qr}getGlobalsCache(){return this.Kr}getMutationQueue(e,t){return _s.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new mI(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return gs.lt(this.serializer,e)}getBundleCache(){return this.Wr}runTransaction(e,t,n){C("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?py:u===16?fy:u===15?ta:u===14?bh:u===13?Rh:u===12?dy:u===11?Sh:void M()}(this.li);let a;return this.Ai.runTransaction(e,i,s,c=>(a=new Eo(c,this.qr?this.qr.next():Ve.oe),t==="readwrite-primary"?this.yi(a).next(u=>!!u||this.wi(a)).next(u=>{if(!u)throw le(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ai.enqueueRetryable(()=>this.Ei(!1)),new O(P.FAILED_PRECONDITION,Eh);return n(a)}).next(u=>this.bi(a).next(()=>u)):this.Qi(a).next(()=>n(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Qi(e){return fr(e).get("owner").next(t=>{if(t!==null&&this.Fi(t.leaseTimestampMs,5e3)&&!this.Oi(t.ownerId)&&!this.Di(t)&&!(this.ci||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(P.FAILED_PRECONDITION,no)})}bi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fr(e).put("owner",t)}static D(){return vt.D()}Si(e){const t=fr(e);return t.get("owner").next(n=>this.Di(n)?(C("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):A.resolve())}Fi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(le(`Detected an update time that is in the future: ${e} > ${n}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Pi=()=>{this.ai.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Vi()))},this.document.addEventListener("visibilitychange",this.Pi),this.inForeground=this.document.visibilityState==="visible")}Li(){this.Pi&&(this.document.removeEventListener("visibilitychange",this.Pi),this.Pi=null)}fi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.hi=()=>{this.Ni();const t=/(?:Version|Mobile)\/1[456]/;Al()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ai.enterRestrictedMode(!0),this.ai.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.hi))}Bi(){this.hi&&(this.window.removeEventListener("pagehide",this.hi),this.hi=null)}Oi(e){var t;try{const n=((t=this.Ri)===null||t===void 0?void 0:t.getItem(this.xi(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return le("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Ni(){if(this.Ri)try{this.Ri.setItem(this.xi(this.clientId),String(Date.now()))}catch(e){le("Failed to set zombie client id.",e)}}ki(){if(this.Ri)try{this.Ri.removeItem(this.xi(this.clientId))}catch{}}xi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function fr(r){return pe(r,"owner")}function Ti(r){return pe(r,"clientMetadata")}function bd(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class _a{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Ki=n,this.$i=i}static Ui(e,t){let n=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _a(e,t.fromCache,n,i)}}/**
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
 */class NI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Pd{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Al()?8:Th(fe())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Yi(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new NI;return this.Zi(e,t,a).next(c=>{if(s.result=c,this.Gi)return this.Xi(e,t,a,c.size)})}).next(()=>s.result)}Xi(e,t,n,i){return n.documentReadCount<this.zi?(dn()<=H.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),A.resolve()):(dn()<=H.DEBUG&&C("QueryEngine","Query:",fn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ji*i?(dn()<=H.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ne(t))):A.resolve())}Ji(e,t){if(bu(t))return A.resolve(null);let n=Ne(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ro(t,null,"F"),n=Ne(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=K(...s);return this.Hi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.es(t,c);return this.ts(t,d,a,u.readTime)?this.Ji(e,Ro(t,null,"F")):this.ns(e,d,t,u)}))})))}Yi(e,t,n,i){return bu(t)||i.isEqual(U.min())?A.resolve(null):this.Hi.getDocuments(e,n).next(s=>{const a=this.es(t,s);return this.ts(t,a,n,i)?A.resolve(null):(dn()<=H.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fn(t)),this.ns(e,a,t,yh(i,-1)).next(c=>c))})}es(e,t){let n=new ee(zh(e));return t.forEach((i,s)=>{Qr(e,s)&&(n=n.add(s))}),n}ts(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,n){return dn()<=H.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",fn(t)),this.Hi.getDocumentsMatchingQuery(e,t,Me.min(),n)}ns(e,t,n,i){return this.Hi.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class OI{constructor(e,t,n,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new re(j),this.os=new Pt(s=>Yt(s),Wr),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(n)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sd(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function Cd(r,e,t,n){return new OI(r,e,t,n)}async function Vd(r,e){const t=L(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],c=[];let u=K();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(n,u).next(d=>({ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function MI(r,e){const t=L(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.us.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const m=d.batch,T=m.keys();let b=A.resolve();return T.forEach(D=>{b=b.next(()=>p.getEntry(u,D)).next(x=>{const V=d.docVersions.get(D);F(V!==null),x.version.compareTo(V)<0&&(m.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),p.addEntry(x)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=K();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Dd(r){const e=L(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function LI(r,e){const t=L(r),n=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const c=[];e.targetChanges.forEach((p,m)=>{const T=i.get(m);if(!T)return;c.push(t.$r.removeMatchingKeys(s,p.removedDocuments,m).next(()=>t.$r.addMatchingKeys(s,p.addedDocuments,m)));let b=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(he.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,n)),i=i.insert(m,b),function(x,V,$){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(T,b,p)&&c.push(t.$r.updateTargetData(s,b))});let u=ke(),d=K();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(FI(s,a,e.documentUpdates).next(p=>{u=p.hs,d=p.Ps})),!n.isEqual(U.min())){const p=t.$r.getLastRemoteSnapshotVersion(s).next(m=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(p)}return A.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.ss=i,s))}function FI(r,e,t){let n=K(),i=K();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=ke();return t.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):C("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{hs:a,Ps:i}})}function UI(r,e){const t=L(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Yi(r,e){const t=L(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.$r.getTargetData(n,e).next(s=>s?(i=s,A.resolve(i)):t.$r.allocateTargetId(n).next(a=>(i=new Ze(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.$r.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.ss.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(n.targetId,n),t.os.set(e,n.targetId)),n})}async function kn(r,e,t){const n=L(r),i=n.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!bt(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.ss=n.ss.remove(e),n.os.delete(i.target)}function No(r,e,t){const n=L(r);let i=U.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const m=L(u),T=m.os.get(p);return T!==void 0?A.resolve(m.ss.get(T)):m.$r.getTargetData(d,p)}(n,a,Ne(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.$r.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>n.rs.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?s:K())).next(c=>(Nd(n,qh(e),c),{documents:c,Is:s})))}function kd(r,e){const t=L(r),n=L(t.$r),i=t.ss.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(a=>a?a.target:null))}function xd(r,e){const t=L(r),n=t._s.get(e)||U.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.us.getAllFromCollectionGroup(i,e,yh(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Nd(t,e,i),i))}function Nd(r,e,t){let n=r._s.get(e)||U.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r._s.set(e,n)}function nl(r,e){return`firestore_clients_${r}_${e}`}function rl(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function ro(r,e){return`firestore_targets_${r}_${e}`}class Xi{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static As(e,t,n){const i=JSON.parse(n);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new O(i.error.code,i.error.message))),a?new Xi(e,t,i.state,s):(le("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Rs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class br{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static As(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new O(n.error.code,n.error.message))),s?new br(e,n.state,i):(le("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Rs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static As(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=oa();for(let a=0;i&&a<n.activeTargetIds.length;++a)i=wh(n.activeTargetIds[a]),s=s.add(n.activeTargetIds[a]);return i?new Zi(e,s):(le("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ya{constructor(e,t){this.clientId=e,this.onlineState=t}static As(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ya(t.clientId,t.onlineState):(le("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Oo{constructor(){this.activeTargetIds=oa()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class io{constructor(e,t,n,i,s){this.window=e,this.ai=t,this.persistenceKey=n,this.gs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ps=this.ys.bind(this),this.ws=new re(j),this.started=!1,this.Ss=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.bs=nl(this.persistenceKey,this.gs),this.Ds=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ws=this.ws.insert(this.gs,new Oo),this.Cs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.vs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Fs=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.Ms=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.xs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ps)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.qi();for(const n of e){if(n===this.gs)continue;const i=this.getItem(nl(this.persistenceKey,n));if(i){const s=Zi.As(n,i);s&&(this.ws=this.ws.insert(s.clientId,s))}}this.Os();const t=this.storage.getItem(this.Ms);if(t){const n=this.Ns(t);n&&this.Ls(n)}for(const n of this.Ss)this.ys(n);this.Ss=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ds,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ws)}isActiveQueryTarget(e){let t=!1;return this.ws.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ks(e,"pending")}updateMutationState(e,t,n){this.ks(e,t,n),this.qs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ro(this.persistenceKey,e));if(n){const i=br.As(e,n);i&&(t=i.state)}}return this.Qs.Vs(e),this.Os(),t}removeLocalQueryTarget(e){this.Qs.fs(e),this.Os()}isLocalQueryTarget(e){return this.Qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ro(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ks(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.$s(e)}notifyBundleLoaded(e){this.Us(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ps),this.removeItem(this.bs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return C("SharedClientState","READ",e,t),t}setItem(e,t){C("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ys(e){const t=e;if(t.storageArea===this.storage){if(C("SharedClientState","EVENT",t.key,t.newValue),t.key===this.bs)return void le("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ai.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Ws(t.key);return this.Gs(n,null)}{const n=this.zs(t.key,t.newValue);if(n)return this.Gs(n.clientId,n)}}else if(this.vs.test(t.key)){if(t.newValue!==null){const n=this.js(t.key,t.newValue);if(n)return this.Hs(n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Js(t.key,t.newValue);if(n)return this.Ys(n)}}else if(t.key===this.Ms){if(t.newValue!==null){const n=this.Ns(t.newValue);if(n)return this.Ls(n)}}else if(t.key===this.Ds){const n=function(s){let a=Ve.oe;if(s!=null)try{const c=JSON.parse(s);F(typeof c=="number"),a=c}catch(c){le("SharedClientState","Failed to read sequence number from WebStorage",c)}return a}(t.newValue);n!==Ve.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.xs){const n=this.Zs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.Xs(i)))}}}else this.Ss.push(t)})}}get Qs(){return this.ws.get(this.gs)}Os(){this.setItem(this.bs,this.Qs.Rs())}ks(e,t,n){const i=new Xi(this.currentUser,e,t,n),s=rl(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Rs())}qs(e){const t=rl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}$s(e){const t={clientId:this.gs,onlineState:e};this.storage.setItem(this.Ms,JSON.stringify(t))}Ks(e,t,n){const i=ro(this.persistenceKey,e),s=new br(e,t,n);this.setItem(i,s.Rs())}Us(e){const t=JSON.stringify(Array.from(e));this.setItem(this.xs,t)}Ws(e){const t=this.Cs.exec(e);return t?t[1]:null}zs(e,t){const n=this.Ws(e);return Zi.As(n,t)}js(e,t){const n=this.vs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Xi.As(new we(s),i,t)}Js(e,t){const n=this.Fs.exec(e),i=Number(n[1]);return br.As(i,t)}Ns(e){return ya.As(e)}Zs(e){return JSON.parse(e)}async Hs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.eo(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ys(e){return this.syncEngine.no(e.targetId,e.state,e.error)}Gs(e,t){const n=t?this.ws.insert(e,t):this.ws.remove(e),i=this.Bs(this.ws),s=this.Bs(n),a=[],c=[];return s.forEach(u=>{i.has(u)||a.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.ro(a,c).then(()=>{this.ws=n})}Ls(e){this.ws.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let t=oa();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Od{constructor(){this.io=new Oo,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,n){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Oo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BI{oo(e){}shutdown(){}}/**
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
 */class il{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wi=null;function so(){return wi===null?wi=function(){return 268435456+Math.round(2147483648*Math.random())}():wi++,"0x"+wi.toString(16)}/**
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
 */const qI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zI{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */const Te="WebChannelConnection";class jI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=n+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,n,i,s,a){const c=so(),u=this.Mo(t,n.toUriEncodedString());C("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const d={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(d,s,a),this.Oo(t,u,d,i).then(p=>(C("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw xr("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",u,"request:",i),p})}No(t,n,i,s,a,c){return this.Fo(t,n,i,s,a)}xo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}Mo(t,n){const i=qI[t];return`${this.bo}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,n,i){const s=so();return new Promise((a,c)=>{const u=new lh;u.setWithCredentials(!0),u.listenOnce(dh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Pi.NO_ERROR:const p=u.getResponseJson();C(Te,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case Pi.TIMEOUT:C(Te,`RPC '${e}' ${s} timed out`),c(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Pi.HTTP_ERROR:const m=u.getStatus();if(C(Te,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const b=T==null?void 0:T.error;if(b&&b.status&&b.message){const D=function(V){const $=V.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(b.status);c(new O(D,b.message))}else c(new O(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new O(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C(Te,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);C(Te,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,n,15)})}Lo(e,t,n){const i=so(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=mh(),c=ph(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new hh({})),this.xo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const p=s.join("");C(Te,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=a.createWebChannel(p,u);let T=!1,b=!1;const D=new zI({Po:V=>{b?C(Te,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(T||(C(Te,`Opening RPC '${e}' stream ${i} transport.`),m.open(),T=!0),C(Te,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},Io:()=>m.close()}),x=(V,$,z)=>{V.listen($,B=>{try{z(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return x(m,gr.EventType.OPEN,()=>{b||(C(Te,`RPC '${e}' stream ${i} transport opened.`),D.po())}),x(m,gr.EventType.CLOSE,()=>{b||(b=!0,C(Te,`RPC '${e}' stream ${i} transport closed`),D.wo())}),x(m,gr.EventType.ERROR,V=>{b||(b=!0,xr(Te,`RPC '${e}' stream ${i} transport errored:`,V),D.wo(new O(P.UNAVAILABLE,"The operation could not be completed")))}),x(m,gr.EventType.MESSAGE,V=>{var $;if(!b){const z=V.data[0];F(!!z);const B=z,Q=B.error||(($=B[0])===null||$===void 0?void 0:$.error);if(Q){C(Te,`RPC '${e}' stream ${i} received error:`,Q);const X=Q.status;let G=function(y){const E=de[y];if(E!==void 0)return td(E)}(X),I=Q.message;G===void 0&&(G=P.INTERNAL,I="Unknown error status: "+X+" with message "+Q.message),b=!0,D.wo(new O(G,I)),m.close()}else C(Te,`RPC '${e}' stream ${i} received:`,z),D.So(z)}}),x(c,fh.STAT_EVENT,V=>{V.stat===yo.PROXY?C(Te,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===yo.NOPROXY&&C(Te,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.yo()},0),D}}/**
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
 */function Md(){return typeof window<"u"?window:null}function Oi(){return typeof document<"u"?document:null}/**
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
 */function Is(r){return new Jy(r,!0)}/**
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
 */class Ld{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=n,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-n);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class Fd{constructor(e,t,n,i,s,a,c,u){this.ai=e,this.jo=n,this.Ho=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Ld(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(le(t.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Jo===t&&this.h_(n,i)},n=>{e(()=>{const i=new O(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.P_(i)})})}h_(e,t){const n=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{n(()=>this.listener.To())}),this.stream.Ao(()=>{n(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{n(()=>this.P_(i))}),this.stream.onMessage(i=>{n(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $I extends Fd{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=Zy(this.serializer,e),n=function(s){if(!("targetChange"in s))return U.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?be(a.readTime):U.min()}(e);return this.listener.E_(t,n)}d_(e){const t={};t.database=Co(this.serializer),t.addTarget=function(s,a){let c;const u=a.target;if(c=$i(u)?{documents:ud(s,u)}:{query:ld(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=id(s,a.resumeToken);const d=bo(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=Dn(s,a.snapshotVersion.toTimestamp());const d=bo(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const n=tI(this.serializer,e);n&&(t.labels=n),this.__(t)}A_(e){const t={};t.database=Co(this.serializer),t.removeTarget=e,this.__(t)}}class KI extends Fd{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return F(!!e.streamToken),this.lastStreamToken=e.streamToken,F(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const t=eI(e.writeResults,e.commitTime),n=be(e.commitTime);return this.listener.f_(n,t)}g_(){const e={};e.database=Co(this.serializer),this.__(e)}V_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Hi(this.serializer,n))};this.__(t)}}/**
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
 */class GI extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,n,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Fo(e,Po(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(P.UNKNOWN,s.toString())})}No(e,t,n,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.No(e,Po(t,n),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class HI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(le(t),this.b_=!1):C("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class WI{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(a=>{n.enqueueAndForget(async()=>{nn(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=L(u);d.N_.add(4),await Xr(d),d.k_.set("Unknown"),d.N_.delete(4),await Es(d)}(this))})}),this.k_=new HI(n,i)}}async function Es(r){if(nn(r))for(const e of r.L_)await e(!0)}async function Xr(r){for(const e of r.L_)await e(!1)}function vs(r,e){const t=L(r);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),va(t)?Ea(t):$n(t).n_()&&Ia(t,e))}function xn(r,e){const t=L(r),n=$n(t);t.O_.delete(e),n.n_()&&Ud(t,e),t.O_.size===0&&(n.n_()?n.s_():nn(t)&&t.k_.set("Unknown"))}function Ia(r,e){if(r.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$n(r).d_(e)}function Ud(r,e){r.q_.xe(e),$n(r).A_(e)}function Ea(r){r.q_=new Gy({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.O_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),$n(r).start(),r.k_.D_()}function va(r){return nn(r)&&!$n(r).t_()&&r.O_.size>0}function nn(r){return L(r).N_.size===0}function Bd(r){r.q_=void 0}async function QI(r){r.k_.set("Online")}async function JI(r){r.O_.forEach((e,t)=>{Ia(r,e)})}async function YI(r,e){Bd(r),va(r)?(r.k_.F_(e),Ea(r)):r.k_.set("Unknown")}async function XI(r,e,t){if(r.k_.set("Online"),e instanceof rd&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.O_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.O_.delete(c),i.q_.removeTarget(c))}(r,e)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await es(r,n)}else if(e instanceof Ni?r.q_.Ke(e):e instanceof nd?r.q_.He(e):r.q_.We(e),!t.isEqual(U.min()))try{const n=await Dd(r.localStore);t.compareTo(n)>=0&&await function(s,a){const c=s.q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.O_.get(d);p&&s.O_.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=s.O_.get(u);if(!p)return;s.O_.set(u,p.withResumeToken(he.EMPTY_BYTE_STRING,p.snapshotVersion)),Ud(s,u);const m=new Ze(p.target,u,d,p.sequenceNumber);Ia(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await es(r,n)}}async function es(r,e,t){if(!bt(e))throw e;r.N_.add(1),await Xr(r),r.k_.set("Offline"),t||(t=()=>Dd(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),r.N_.delete(1),await Es(r)})}function qd(r,e){return e().catch(t=>es(r,t,e))}async function jn(r){const e=L(r),t=At(e);let n=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;ZI(e);)try{const i=await UI(e.localStore,n);if(i===null){e.x_.length===0&&t.s_();break}n=i.batchId,eE(e,i)}catch(i){await es(e,i)}zd(e)&&jd(e)}function ZI(r){return nn(r)&&r.x_.length<10}function eE(r,e){r.x_.push(e);const t=At(r);t.n_()&&t.R_&&t.V_(e.mutations)}function zd(r){return nn(r)&&!At(r).t_()&&r.x_.length>0}function jd(r){At(r).start()}async function tE(r){At(r).g_()}async function nE(r){const e=At(r);for(const t of r.x_)e.V_(t.mutations)}async function rE(r,e,t){const n=r.x_.shift(),i=ua.from(n,e,t);await qd(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await jn(r)}async function iE(r,e){e&&At(r).R_&&await async function(n,i){if(function(a){return jy(a)&&a!==P.ABORTED}(i.code)){const s=n.x_.shift();At(n).i_(),await qd(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jn(n)}}(r,e),zd(r)&&jd(r)}async function sl(r,e){const t=L(r);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=nn(t);t.N_.add(3),await Xr(t),n&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await Es(t)}async function Mo(r,e){const t=L(r);e?(t.N_.delete(2),await Es(t)):e||(t.N_.add(2),await Xr(t),t.k_.set("Unknown"))}function $n(r){return r.Q_||(r.Q_=function(t,n,i){const s=L(t);return s.y_(),new $I(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{To:QI.bind(null,r),Ao:JI.bind(null,r),Vo:YI.bind(null,r),E_:XI.bind(null,r)}),r.L_.push(async e=>{e?(r.Q_.i_(),va(r)?Ea(r):r.k_.set("Unknown")):(await r.Q_.stop(),Bd(r))})),r.Q_}function At(r){return r.K_||(r.K_=function(t,n,i){const s=L(t);return s.y_(),new KI(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{To:()=>Promise.resolve(),Ao:tE.bind(null,r),Vo:iE.bind(null,r),m_:nE.bind(null,r),f_:rE.bind(null,r)}),r.L_.push(async e=>{e?(r.K_.i_(),await jn(r)):(await r.K_.stop(),r.x_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.x_.length} pending writes`),r.x_=[]))})),r.K_}/**
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
 */class Ta{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,c=new Ta(e,t,a,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(r,e){if(le("AsyncQueue",`${e}: ${r}`),bt(r))return new O(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Tn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||N.comparator(t.key,n.key):(t,n)=>N.comparator(t.key,n.key),this.keyedMap=_r(),this.sortedSet=new re(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Tn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ol{constructor(){this.U_=new re(N.comparator)}track(e){const t=e.doc.key,n=this.U_.get(t);n?e.type!==0&&n.type===3?this.U_=this.U_.insert(t,e):e.type===3&&n.type!==1?this.U_=this.U_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.U_=this.U_.remove(t):e.type===1&&n.type===2?this.U_=this.U_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):M():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Nn{constructor(e,t,n,i,s,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Nn(e,t,Tn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class sE{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class oE{constructor(){this.queries=al(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,n){const i=L(t),s=i.queries;i.queries=al(),s.forEach((a,c)=>{for(const u of c.z_)u.onError(n)})})(this,new O(P.ABORTED,"Firestore shutting down"))}}function al(){return new Pt(r=>Bh(r),fs)}async function aE(r,e){const t=L(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(n=2):(s=new sE,n=e.H_()?0:1);try{switch(n){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=wa(a,`Initialization of query '${fn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&Aa(t)}async function cE(r,e){const t=L(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.z_.indexOf(e);a>=0&&(s.z_.splice(a,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function uE(r,e){const t=L(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.z_)c.Z_(i)&&(n=!0);a.G_=i}}n&&Aa(t)}function lE(r,e,t){const n=L(r),i=n.queries.get(e);if(i)for(const s of i.z_)s.onError(t);n.queries.delete(e)}function Aa(r){r.J_.forEach(e=>{e.next()})}var Lo,cl;(cl=Lo||(Lo={})).X_="default",cl.Cache="cache";class hE{constructor(e,t,n){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=n||{}}Z_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Nn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const n=t!=="Offline";return(!this.options.oa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=Nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Lo.Cache}}/**
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
 */class $d{constructor(e){this.key=e}}class Kd{constructor(e){this.key=e}}class dE{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=K(),this.mutatedKeys=K(),this.da=zh(e),this.Aa=new Tn(this.da)}get Ra(){return this.Ia}Va(e,t){const n=t?t.ma:new ol,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const T=i.get(p),b=Qr(this.query,m)?m:null,D=!!T&&this.mutatedKeys.has(T.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;T&&b?T.data.isEqual(b.data)?D!==x&&(n.track({type:3,doc:b}),V=!0):this.fa(T,b)||(n.track({type:2,doc:b}),V=!0,(u&&this.da(b,u)>0||d&&this.da(b,d)<0)&&(c=!0)):!T&&b?(n.track({type:0,doc:b}),V=!0):T&&!b&&(n.track({type:1,doc:T}),V=!0,(u||d)&&(c=!0)),V&&(b?(a=a.add(b),s=x?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),n.track({type:1,doc:p})}return{Aa:a,ma:n,ts:c,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const a=e.ma.W_();a.sort((p,m)=>function(b,D){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(b)-x(D)}(p.type,m.type)||this.da(p.doc,m.doc)),this.ga(n),i=i!=null&&i;const c=t&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,d=u!==this.Ta;return this.Ta=u,a.length!==0||d?{snapshot:new Nn(this.query,e.Aa,s,a,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ya:c}:{ya:c}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new ol,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=K(),this.Aa.forEach(n=>{this.wa(n.key)&&(this.Ea=this.Ea.add(n.key))});const t=[];return e.forEach(n=>{this.Ea.has(n)||t.push(new Kd(n))}),this.Ea.forEach(n=>{e.has(n)||t.push(new $d(n))}),t}Sa(e){this.Ia=e.Is,this.Ea=K();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return Nn.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class fE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class pE{constructor(e){this.key=e,this.Da=!1}}class mE{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.va=new Pt(c=>Bh(c),fs),this.Fa=new Map,this.Ma=new Set,this.xa=new re(N.comparator),this.Oa=new Map,this.Na=new ma,this.La={},this.Ba=new Map,this.ka=en.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function gE(r,e,t=!0){const n=Ts(r);let i;const s=n.va.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await Gd(n,e,t,!0),i}async function _E(r,e){const t=Ts(r);await Gd(t,e,!0,!1)}async function Gd(r,e,t,n){const i=await Yi(r.localStore,Ne(e)),s=i.targetId,a=t?r.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return n&&(c=await Sa(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&vs(r.remoteStore,i),c}async function Sa(r,e,t,n,i){r.Qa=(m,T,b)=>async function(x,V,$,z){let B=V.view.Va($);B.ts&&(B=await No(x.localStore,V.query,!1).then(({documents:I})=>V.view.Va(I,B)));const Q=z&&z.targetChanges.get(V.targetId),X=z&&z.targetMismatches.get(V.targetId)!=null,G=V.view.applyChanges(B,x.isPrimaryClient,Q,X);return Fo(x,V.targetId,G.ya),G.snapshot}(r,m,T,b);const s=await No(r.localStore,e,!0),a=new dE(e,s.Is),c=a.Va(s.documents),u=Yr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,u);Fo(r,t,d.ya);const p=new fE(e,t,a);return r.va.set(e,p),r.Fa.has(t)?r.Fa.get(t).push(e):r.Fa.set(t,[e]),d.snapshot}async function yE(r,e,t){const n=L(r),i=n.va.get(e),s=n.Fa.get(i.targetId);if(s.length>1)return n.Fa.set(i.targetId,s.filter(a=>!fs(a,e))),void n.va.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await kn(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&xn(n.remoteStore,i.targetId),On(n,i.targetId)}).catch(Rt)):(On(n,i.targetId),await kn(n.localStore,i.targetId,!0))}async function IE(r,e){const t=L(r),n=t.va.get(e),i=t.Fa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),xn(t.remoteStore,n.targetId))}async function EE(r,e,t){const n=Ca(r);try{const i=await function(a,c){const u=L(a),d=oe.now(),p=c.reduce((b,D)=>b.add(D.key),K());let m,T;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=ke(),x=K();return u.us.getEntries(b,p).next(V=>{D=V,D.forEach(($,z)=>{z.isValidDocument()||(x=x.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,D)).next(V=>{m=V;const $=[];for(const z of c){const B=qy(z,m.get(z.key).overlayedDocument);B!=null&&$.push(new Ct(z.key,B,Dh(B.value.mapValue),xe.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,$,c)}).next(V=>{T=V;const $=V.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(b,V.batchId,$)})}).then(()=>({batchId:T.batchId,changes:$h(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.La[a.currentUser.toKey()];d||(d=new re(j)),d=d.insert(c,u),a.La[a.currentUser.toKey()]=d}(n,i.batchId,t),await Vt(n,i.changes),await jn(n.remoteStore)}catch(i){const s=wa(i,"Failed to persist write");t.reject(s)}}async function Hd(r,e){const t=L(r);try{const n=await LI(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Oa.get(s);a&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Da=!0:i.modifiedDocuments.size>0?F(a.Da):i.removedDocuments.size>0&&(F(a.Da),a.Da=!1))}),await Vt(t,n,e)}catch(n){await Rt(n)}}function ul(r,e,t){const n=L(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.va.forEach((s,a)=>{const c=a.view.Y_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=L(a);u.onlineState=c;let d=!1;u.queries.forEach((p,m)=>{for(const T of m.z_)T.Y_(c)&&(d=!0)}),d&&Aa(u)}(n.eventManager,e),i.length&&n.Ca.E_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function vE(r,e,t){const n=L(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Oa.get(e),s=i&&i.key;if(s){let a=new re(N.comparator);a=a.insert(s,ue.newNoDocument(s,U.min()));const c=K().add(s),u=new Jr(U.min(),new Map,new re(j),a,c);await Hd(n,u),n.xa=n.xa.remove(s),n.Oa.delete(e),Pa(n)}else await kn(n.localStore,e,!1).then(()=>On(n,e,t)).catch(Rt)}async function TE(r,e){const t=L(r),n=e.batch.batchId;try{const i=await MI(t.localStore,e);ba(t,n,null),Ra(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Vt(t,i)}catch(i){await Rt(i)}}async function wE(r,e,t){const n=L(r);try{const i=await function(a,c){const u=L(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(m=>(F(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(n.localStore,e);ba(n,e,t),Ra(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Vt(n,i)}catch(i){await Rt(i)}}function Ra(r,e){(r.Ba.get(e)||[]).forEach(t=>{t.resolve()}),r.Ba.delete(e)}function ba(r,e,t){const n=L(r);let i=n.La[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.La[n.currentUser.toKey()]=i}}function On(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Fa.get(e))r.va.delete(n),t&&r.Ca.Ka(n,t);r.Fa.delete(e),r.isPrimaryClient&&r.Na.mr(e).forEach(n=>{r.Na.containsKey(n)||Wd(r,n)})}function Wd(r,e){r.Ma.delete(e.path.canonicalString());const t=r.xa.get(e);t!==null&&(xn(r.remoteStore,t),r.xa=r.xa.remove(e),r.Oa.delete(t),Pa(r))}function Fo(r,e,t){for(const n of t)n instanceof $d?(r.Na.addReference(n.key,e),AE(r,n)):n instanceof Kd?(C("SyncEngine","Document no longer in limbo: "+n.key),r.Na.removeReference(n.key,e),r.Na.containsKey(n.key)||Wd(r,n.key)):M()}function AE(r,e){const t=e.key,n=t.path.canonicalString();r.xa.get(t)||r.Ma.has(n)||(C("SyncEngine","New document in limbo: "+t),r.Ma.add(n),Pa(r))}function Pa(r){for(;r.Ma.size>0&&r.xa.size<r.maxConcurrentLimboResolutions;){const e=r.Ma.values().next().value;r.Ma.delete(e);const t=new N(ne.fromString(e)),n=r.ka.next();r.Oa.set(n,new pE(t)),r.xa=r.xa.insert(t,n),vs(r.remoteStore,new Ze(Ne(ds(t.path)),n,"TargetPurposeLimboResolution",Ve.oe))}}async function Vt(r,e,t){const n=L(r),i=[],s=[],a=[];n.va.isEmpty()||(n.va.forEach((c,u)=>{a.push(n.Qa(u,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=_a.Ui(u.targetId,d);s.push(m)}}))}),await Promise.all(a),n.Ca.E_(i),await async function(u,d){const p=L(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>A.forEach(d,T=>A.forEach(T.Ki,b=>p.persistence.referenceDelegate.addReference(m,T.targetId,b)).next(()=>A.forEach(T.$i,b=>p.persistence.referenceDelegate.removeReference(m,T.targetId,b)))))}catch(m){if(!bt(m))throw m;C("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const T=m.targetId;if(!m.fromCache){const b=p.ss.get(T),D=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(D);p.ss=p.ss.insert(T,x)}}}(n.localStore,s))}async function SE(r,e){const t=L(r);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const n=await Vd(t.localStore,e);t.currentUser=e,function(s,a){s.Ba.forEach(c=>{c.forEach(u=>{u.reject(new O(P.CANCELLED,a))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Vt(t,n.ls)}}function RE(r,e){const t=L(r),n=t.Oa.get(e);if(n&&n.Da)return K().add(n.key);{let i=K();const s=t.Fa.get(e);if(!s)return i;for(const a of s){const c=t.va.get(a);i=i.unionWith(c.view.Ra)}return i}}async function bE(r,e){const t=L(r),n=await No(t.localStore,e.query,!0),i=e.view.Sa(n);return t.isPrimaryClient&&Fo(t,e.targetId,i.ya),i}async function PE(r,e){const t=L(r);return xd(t.localStore,e).then(n=>Vt(t,n))}async function CE(r,e,t,n){const i=L(r),s=await function(c,u){const d=L(c),p=L(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",m=>p.Fn(m,u).next(T=>T?d.localDocuments.getDocuments(m,T):A.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await jn(i.remoteStore):t==="acknowledged"||t==="rejected"?(ba(i,e,n||null),Ra(i,e),function(c,u){L(L(c).mutationQueue).xn(u)}(i.localStore,e)):M(),await Vt(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function VE(r,e){const t=L(r);if(Ts(t),Ca(t),e===!0&&t.qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await ll(t,n.toArray());t.qa=!0,await Mo(t.remoteStore,!0);for(const s of i)vs(t.remoteStore,s)}else if(e===!1&&t.qa!==!1){const n=[];let i=Promise.resolve();t.Fa.forEach((s,a)=>{t.sharedClientState.isLocalQueryTarget(a)?n.push(a):i=i.then(()=>(On(t,a),kn(t.localStore,a,!0))),xn(t.remoteStore,a)}),await i,await ll(t,n),function(a){const c=L(a);c.Oa.forEach((u,d)=>{xn(c.remoteStore,d)}),c.Na.gr(),c.Oa=new Map,c.xa=new re(N.comparator)}(t),t.qa=!1,await Mo(t.remoteStore,!1)}}async function ll(r,e,t){const n=L(r),i=[],s=[];for(const a of e){let c;const u=n.Fa.get(a);if(u&&u.length!==0){c=await Yi(n.localStore,Ne(u[0]));for(const d of u){const p=n.va.get(d),m=await bE(n,p);m.snapshot&&s.push(m.snapshot)}}else{const d=await kd(n.localStore,a);c=await Yi(n.localStore,d),await Sa(n,Qd(d),a,!1,c.resumeToken)}i.push(c)}return n.Ca.E_(s),i}function Qd(r){return Uh(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function DE(r){return function(t){return L(L(t).persistence).qi()}(L(r).localStore)}async function kE(r,e,t,n){const i=L(r);if(i.qa)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i.Fa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const a=await xd(i.localStore,qh(s[0])),c=Jr.createSynthesizedRemoteEventForCurrentChange(e,t==="current",he.EMPTY_BYTE_STRING);await Vt(i,a,c);break}case"rejected":await kn(i.localStore,e,!0),On(i,e,n);break;default:M()}}async function xE(r,e,t){const n=Ts(r);if(n.qa){for(const i of e){if(n.Fa.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await kd(n.localStore,i),a=await Yi(n.localStore,s);await Sa(n,Qd(s),a.targetId,!1,a.resumeToken),vs(n.remoteStore,a)}for(const i of t)n.Fa.has(i)&&await kn(n.localStore,i,!1).then(()=>{xn(n.remoteStore,i),On(n,i)}).catch(Rt)}}function Ts(r){const e=L(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vE.bind(null,e),e.Ca.E_=uE.bind(null,e.eventManager),e.Ca.Ka=lE.bind(null,e.eventManager),e}function Ca(r){const e=L(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wE.bind(null,e),e}class Uo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Is(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Cd(this.persistence,new Pd,e.initialUser,this.serializer)}createPersistence(e){return new Rd(ys.Yr,this.serializer)}createSharedClientState(e){return new Od}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jd extends Uo{constructor(e,t,n){super(),this.Ua=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ua.initialize(this,e),await Ca(this.Ua.syncEngine),await jn(this.Ua.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Cd(this.persistence,new Pd,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new yI(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new Q_(t,this.persistence);return new W_(e.asyncQueue,n)}createPersistence(e){const t=bd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new ga(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Md(),Oi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Od}}class NE extends Jd{constructor(e,t){super(e,t,!1),this.Ua=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ua.syncEngine;this.sharedClientState instanceof io&&(this.sharedClientState.syncEngine={eo:CE.bind(null,t),no:kE.bind(null,t),ro:xE.bind(null,t),qi:DE.bind(null,t),Xs:PE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi(async n=>{await VE(this.Ua.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Md();if(!io.D(t))throw new O(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=bd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new io(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Va{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ul(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=SE.bind(null,this.syncEngine),await Mo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oE}()}createDatastore(e){const t=Is(e.databaseInfo.databaseId),n=function(s){return new jI(s)}(e.databaseInfo);return function(s,a,c,u){return new GI(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,c){return new WI(n,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ul(this.syncEngine,t,0),function(){return il.D()?new il:new BI}())}createSyncEngine(e,t){return function(i,s,a,c,u,d,p){const m=new mE(i,s,a,c,u,d);return p&&(m.qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=L(i);C("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Xr(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
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
 */class OE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):le("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class ME{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=we.UNAUTHENTICATED,this.clientId=gh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=wa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function oo(r,e){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Vd(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function hl(r,e){r.asyncQueue.verifyOperationInProgress();const t=await FE(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>sl(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>sl(e.remoteStore,i)),r._onlineComponents=e}function LE(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function FE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await oo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!LE(t))throw t;xr("Error using user provided cache. Falling back to memory cache: "+t),await oo(r,new Uo)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await oo(r,new Uo);return r._offlineComponents}async function Yd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await hl(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await hl(r,new Va))),r._onlineComponents}function UE(r){return Yd(r).then(e=>e.syncEngine)}async function dl(r){const e=await Yd(r),t=e.eventManager;return t.onListen=gE.bind(null,e.syncEngine),t.onUnlisten=yE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_E.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IE.bind(null,e.syncEngine),t}/**
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
 */function Xd(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const fl=new Map;/**
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
 */function BE(r,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function qE(r,e,t,n){if(e===!0&&n===!0)throw new O(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function pl(r){if(!N.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Da(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M()}function Pr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Da(r);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class ml{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xd((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ml({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ml(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new F_;switch(n.type){case"firstParty":return new q_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=fl.get(t);n&&(C("ComponentProvider","Removing Datastore"),fl.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ws{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class Fe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class zr extends ws{constructor(e,t,n){super(e,t,ds(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new N(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function _v(r,e,...t){if(r=Oe(r),arguments.length===1&&(e=gh.newId()),BE("doc","path",e),r instanceof Zd){const n=ne.fromString(e,...t);return pl(n),new Fe(r,null,new N(n))}{if(!(r instanceof Fe||r instanceof zr))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return pl(n),new Fe(r.firestore,r instanceof zr?r.converter:null,new N(n))}}/**
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
 */class zE{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Ld(this,"async_queue_retry"),this.Tu=()=>{const t=Oi();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=Oi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=Oi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new Et;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!bt(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(n=>{this.lu=n,this.hu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw le("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.hu=!1,n))));return this._u=t,t}enqueueAfterDelay(e,t,n){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=Ta.createAndSchedule(this,e,t,n,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&M()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}function gl(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class ts extends Zd{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new zE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tf(this),this._firestoreClient.terminate()}}function jE(r,e,t){t||(t="(default)");const n=zo(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(Cr(s,e))return i;throw new O(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function ef(r){return r._firestoreClient||tf(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function tf(r){var e,t,n;const i=r._freezeSettings(),s=function(c,u,d,p){return new gy(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Xd(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._firestoreClient=new ME(r._authCredentials,r._appCheckCredentials,r._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(he.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mn(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ka{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nf{constructor(e){this._methodName=e}}/**
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
 */class xa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
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
 */const $E=/^__.*__$/;class KE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new zn(e,this.data,t,this.fieldTransforms)}}function rf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Na{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:n,bu:!1});return i.Du(e),i}Cu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:n,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return ns(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(rf(this.yu)&&$E.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class GE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Is(e)}Ou(e,t,n,i=!1){return new Na({yu:e,methodName:t,xu:n,path:se.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function HE(r){const e=r._freezeSettings(),t=Is(r._databaseId);return new GE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function WE(r,e,t,n,i,s={}){const a=r.Ou(s.merge||s.mergeFields?2:0,e,t,i);cf("Data must be an object, but it was:",a,n);const c=of(n,a);let u,d;if(s.merge)u=new Le(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const T=QE(e,m,t);if(!a.contains(T))throw new O(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);YE(p,T)||p.push(T)}u=new Le(p),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new KE(new Ce(c),u,d)}function sf(r,e){if(af(r=Oe(r)))return cf("Unsupported field value:",e,r),of(r,e);if(r instanceof nf)return function(n,i){if(!rf(i.yu))throw i.Fu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const c of n){let u=sf(c,i.vu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ny(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=oe.fromDate(n);return{timestampValue:Dn(i.serializer,s)}}if(n instanceof oe){const s=new oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Dn(i.serializer,s)}}if(n instanceof xa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mn)return{bytesValue:id(i.serializer,n._byteString)};if(n instanceof Fe){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.Fu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:da(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Fu(`Unsupported field value: ${Da(n)}`)}(r,e)}function of(r,e){const t={};return Ph(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(r,(n,i)=>{const s=sf(i,e.Su(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function af(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof oe||r instanceof xa||r instanceof Mn||r instanceof Fe||r instanceof nf)}function cf(r,e,t){if(!af(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=Da(t);throw n==="an object"?e.Fu(r+" a custom object"):e.Fu(r+" "+n)}}function QE(r,e,t){if((e=Oe(e))instanceof ka)return e._internalPath;if(typeof e=="string")return uf(r,e);throw ns("Field path arguments must be of type string or ",r,!1,void 0,t)}const JE=new RegExp("[~\\*/\\[\\]]");function uf(r,e,t){if(e.search(JE)>=0)throw ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ka(...e.split("."))._internalPath}catch{throw ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ns(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${n}`),a&&(u+=` in document ${i}`),u+=")"),new O(P.INVALID_ARGUMENT,c+r+u)}function YE(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class lf{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XE extends lf{data(){return super.data()}}function hf(r,e){return typeof e=="string"?uf(r,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
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
 */function ZE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ev{convertValue(e,t="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return qn(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertGeoPoint(e){return new xa(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ra(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=tt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);F(pd(n));const i=new Qt(n.get(1),n.get(3)),s=new N(n.popFirst(5));return i.isEqual(t)||le(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function tv(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
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
 */class Er{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class df extends lf{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(hf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Mi extends df{data(e={}){return super.data(e)}}class nv{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Er(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Mi(this._firestore,this._userDataWriter,n.key,n,new Er(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new Mi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Mi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:rv(c.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rv(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class ff extends ev{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}function yv(r,e,t){r=Pr(r,Fe);const n=Pr(r.firestore,ts),i=tv(r.converter,e,t);return iv(n,[WE(HE(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,xe.none())])}function Iv(r,...e){var t,n,i;r=Oe(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||gl(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(gl(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,p;if(r instanceof Fe)d=Pr(r.firestore,ts),p=ds(r._key.path),u={next:m=>{e[a]&&e[a](sv(d,r,m))},error:e[a+1],complete:e[a+2]};else{const m=Pr(r,ws);d=Pr(m.firestore,ts),p=m._query;const T=new ff(d);u={next:b=>{e[a]&&e[a](new nv(d,T,m,b))},error:e[a+1],complete:e[a+2]},ZE(r._query)}return function(T,b,D,x){const V=new OE(x),$=new hE(b,V,D);return T.asyncQueue.enqueueAndForget(async()=>aE(await dl(T),$)),()=>{V.Ga(),T.asyncQueue.enqueueAndForget(async()=>cE(await dl(T),$))}}(ef(d),p,c,u)}function iv(r,e){return function(n,i){const s=new Et;return n.asyncQueue.enqueueAndForget(async()=>EE(await UE(n),i,s)),s.promise}(ef(r),e)}function sv(r,e,t){const n=t.docs.get(e._key),i=new ff(r);return new df(r,i,e._key,n,new Er(t.hasPendingWrites,t.fromCache),e.converter)}class ov{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=lv(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function av(r){return new ov(r)}class cv{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new Va,this._offlineComponentProvider=new Jd(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class uv{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new Va,this._offlineComponentProvider=new NE(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function lv(r){return new cv(void 0)}function hv(){return new uv}(function(e,t=!0){(function(i){Bn=i})(Ln),wn(new $t("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),c=new ts(new U_(n.getProvider("auth-internal")),new j_(n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qt(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),yt(du,"4.6.5",e),yt(du,"4.6.5","esm2017")})();const _l={apiKey:"AIzaSyDfgeX9z3E7jIBZzxK31Y2Q8LlYO-8MfkE",authDomain:"forewit-github-io.firebaseapp.com",projectId:"forewit-github-io",storageBucket:"forewit-github-io.appspot.com",messagingSenderId:"423340282902",appId:"1:423340282902:web:f873fc5d5fc5c3e0ebd137"};let yn;fm().length&&(yn=Pl(),pm(yn)),yn=po(_l);const Ev=O_(yn),vv=jE(yn,{localCache:av({tabManager:hv()})});export{Ev as a,dv as b,vv as c,_v as d,yv as e,Iv as o,fv as s};
