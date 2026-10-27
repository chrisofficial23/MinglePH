(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Zd=()=>{};var Xa={};/**
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
 */const bl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ef=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,v=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,P=d&63;h||(P=64,a||(w=64)),r.push(t[p],t[v],t[w],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ef(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||v==null)throw new tf;const w=o<<2|l>>4;if(r.push(w),d!==64){const P=l<<4&240|d>>2;if(r.push(P),v!==64){const V=d<<6&192|v;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nf=function(n){const e=bl(n);return Cl.encodeByteArray(e,!0)},ii=function(n){return nf(n).replace(/\./g,"")},Pl=function(n){try{return Cl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sf=()=>rf().__FIREBASE_DEFAULTS__,of=()=>{if(typeof process>"u"||typeof Xa>"u")return;const n=Xa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},af=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pl(n[1]);return e&&JSON.parse(e)},Ri=()=>{try{return Zd()||sf()||of()||af()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kl=n=>{var e,t;return(t=(e=Ri())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cf=n=>{const e=kl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vl=()=>{var n;return(n=Ri())===null||n===void 0?void 0:n.config},Dl=n=>{var e;return(e=Ri())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class lf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function uf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ii(JSON.stringify(t)),ii(JSON.stringify(a)),""].join(".")}const Kn={};function hf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Kn))Kn[e]?n.emulator.push(e):n.prod.push(e);return n}function df(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ya=!1;function Ol(n,e){if(typeof window>"u"||typeof document>"u"||!vn(window.location.host)||Kn[n]===e||Kn[n]||Ya)return;Kn[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=hf().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Ya=!0,a()},w}function p(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function v(){const w=df(r),P=t("text"),V=document.getElementById(P)||document.createElement("span"),L=t("learnmore"),N=document.getElementById(L)||document.createElement("a"),z=t("preprendIcon"),q=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const H=w.element;l(H),p(N,L);const te=d();h(q,z),H.append(q,V,N,te),document.body.appendChild(H)}o?(V.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function pf(){var n;const e=(n=Ri())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _f(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yf(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vf(){return!pf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ef(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const If="FirebaseError";class st extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=If,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?wf(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new st(i,l,r)}}function wf(n,e){return n.replace(Af,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Af=/\{\$([^}]+)}/g;function Sf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Za(o)&&Za(a)){if(!jt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Za(n){return n!==null&&typeof n=="object"}/**
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
 */function fr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rf(n,e){const t=new bf(n,e);return t.subscribe.bind(t)}class bf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_s),i.error===void 0&&(i.error=_s),i.complete===void 0&&(i.complete=_s);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _s(){}/**
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
 */function Ce(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class Pf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new lf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vf(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kf(n){return n===Lt?void 0:n}function Vf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Df{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Nf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Of=W.INFO,Mf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Lf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Mf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eo{constructor(e){this.name=e,this._logLevel=Of,this._logHandler=Lf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const xf=(n,e)=>e.some(t=>n instanceof t);let ec,tc;function Ff(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uf(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ml=new WeakMap,Cs=new WeakMap,Ll=new WeakMap,ys=new WeakMap,to=new WeakMap;function Bf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(gt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ml.set(t,n)}).catch(()=>{}),to.set(e,n),e}function jf(n){if(Cs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Cs.set(n,e)}let Ps={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ll.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qf(n){Ps=n(Ps)}function $f(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vs(this),e,...t);return Ll.set(r,e.sort?e.sort():[e]),gt(r)}:Uf().includes(n)?function(...e){return n.apply(vs(this),e),gt(Ml.get(this))}:function(...e){return gt(n.apply(vs(this),e))}}function zf(n){return typeof n=="function"?$f(n):(n instanceof IDBTransaction&&jf(n),xf(n,Ff())?new Proxy(n,Ps):n)}function gt(n){if(n instanceof IDBRequest)return Bf(n);if(ys.has(n))return ys.get(n);const e=zf(n);return e!==n&&(ys.set(n,e),to.set(e,n)),e}const vs=n=>to.get(n);function Hf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=gt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(gt(a.result),h.oldVersion,h.newVersion,gt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Wf=["get","getKey","getAll","getAllKeys","count"],Gf=["put","add","delete","clear"],Ts=new Map;function nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ts.get(e))return Ts.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Gf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wf.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&h.done]))[0]};return Ts.set(e,o),o}qf(n=>({...n,get:(e,t,r)=>nc(e,t)||n.get(e,t,r),has:(e,t)=>!!nc(e,t)||n.has(e,t)}));/**
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
 */class Kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ks="@firebase/app",rc="0.13.2";/**
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
 */const et=new eo("@firebase/app"),Jf="@firebase/app-compat",Xf="@firebase/analytics-compat",Yf="@firebase/analytics",Zf="@firebase/app-check-compat",ep="@firebase/app-check",tp="@firebase/auth",np="@firebase/auth-compat",rp="@firebase/database",ip="@firebase/data-connect",sp="@firebase/database-compat",op="@firebase/functions",ap="@firebase/functions-compat",cp="@firebase/installations",lp="@firebase/installations-compat",up="@firebase/messaging",hp="@firebase/messaging-compat",dp="@firebase/performance",fp="@firebase/performance-compat",pp="@firebase/remote-config",mp="@firebase/remote-config-compat",gp="@firebase/storage",_p="@firebase/storage-compat",yp="@firebase/firestore",vp="@firebase/ai",Tp="@firebase/firestore-compat",Ep="firebase",Ip="11.10.0";/**
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
 */const Vs="[DEFAULT]",wp={[ks]:"fire-core",[Jf]:"fire-core-compat",[Yf]:"fire-analytics",[Xf]:"fire-analytics-compat",[ep]:"fire-app-check",[Zf]:"fire-app-check-compat",[tp]:"fire-auth",[np]:"fire-auth-compat",[rp]:"fire-rtdb",[ip]:"fire-data-connect",[sp]:"fire-rtdb-compat",[op]:"fire-fn",[ap]:"fire-fn-compat",[cp]:"fire-iid",[lp]:"fire-iid-compat",[up]:"fire-fcm",[hp]:"fire-fcm-compat",[dp]:"fire-perf",[fp]:"fire-perf-compat",[pp]:"fire-rc",[mp]:"fire-rc-compat",[gp]:"fire-gcs",[_p]:"fire-gcs-compat",[yp]:"fire-fst",[Tp]:"fire-fst-compat",[vp]:"fire-vertex","fire-js":"fire-js",[Ep]:"fire-js-all"};/**
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
 */const si=new Map,Ap=new Map,Ds=new Map;function ic(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dn(n){const e=n.name;if(Ds.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;Ds.set(e,n);for(const t of si.values())ic(t,n);for(const t of Ap.values())ic(t,n);return!0}function no(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Sp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_t=new dr("app","Firebase",Sp);/**
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
 */class Rp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=Ip;function xl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vs,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw _t.create("bad-app-name",{appName:String(i)});if(t||(t=Vl()),!t)throw _t.create("no-options");const o=si.get(i);if(o){if(jt(t,o.options)&&jt(r,o.config))return o;throw _t.create("duplicate-app",{appName:i})}const a=new Df(i);for(const h of Ds.values())a.addComponent(h);const l=new Rp(t,r,a);return si.set(i,l),l}function Fl(n=Vs){const e=si.get(n);if(!e&&n===Vs&&Vl())return xl();if(!e)throw _t.create("no-app",{appName:n});return e}function yt(n,e,t){var r;let i=(r=wp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(l.join(" "));return}dn(new qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",Cp=1,nr="firebase-heartbeat-store";let Es=null;function Ul(){return Es||(Es=Hf(bp,Cp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nr)}catch(t){console.warn(t)}}}}).catch(n=>{throw _t.create("idb-open",{originalErrorMessage:n.message})})),Es}async function Pp(n){try{const t=(await Ul()).transaction(nr),r=await t.objectStore(nr).get(Bl(n));return await t.done,r}catch(e){if(e instanceof st)et.warn(e.message);else{const t=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function sc(n,e){try{const r=(await Ul()).transaction(nr,"readwrite");await r.objectStore(nr).put(e,Bl(n)),await r.done}catch(t){if(t instanceof st)et.warn(t.message);else{const r=_t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(r.message)}}}function Bl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kp=1024,Vp=30;class Dp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Op(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=oc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Vp){const a=Mp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oc(),{heartbeatsToSend:r,unsentEntries:i}=Np(this._heartbeatsCache.heartbeats),o=ii(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return et.warn(t),""}}}function oc(){return new Date().toISOString().substring(0,10)}function Np(n,e=kp){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ac(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ac(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tf()?Ef().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ac(n){return ii(JSON.stringify({version:2,heartbeats:n})).length}function Mp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Lp(n){dn(new qt("platform-logger",e=>new Kf(e),"PRIVATE")),dn(new qt("heartbeat",e=>new Dp(e),"PRIVATE")),yt(ks,rc,n),yt(ks,rc,"esm2017"),yt("fire-js","")}Lp("");var xp="firebase",Fp="11.10.0";/**
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
 */yt(xp,Fp,"app");function ro(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function jl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Up=jl,ql=new dr("auth","Firebase",jl());/**
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
 */const oi=new eo("@firebase/auth");function Bp(n,...e){oi.logLevel<=W.WARN&&oi.warn(`Auth (${Tn}): ${n}`,...e)}function Kr(n,...e){oi.logLevel<=W.ERROR&&oi.error(`Auth (${Tn}): ${n}`,...e)}/**
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
 */function tt(n,...e){throw io(n,...e)}function Be(n,...e){return io(n,...e)}function $l(n,e,t){const r=Object.assign(Object.assign({},Up()),{[e]:t});return new dr("auth","Firebase",r).create(e,{appName:n.name})}function vt(n){return $l(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function io(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ql.create(n,...e)}function U(n,e,...t){if(!n)throw io(e,...t)}function Ye(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kr(e),new Error(e)}function nt(n,e){n||Ye(e)}/**
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
 */function Ns(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jp(){return cc()==="http:"||cc()==="https:"}function cc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||gf()||"connection"in navigator)?navigator.onLine:!0}function $p(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=ff()||_f()}get(){return qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function so(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wp=new pr(3e4,6e4);function bi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function En(n,e,t,r,i={}){return Hl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=fr(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return mf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&vn(n.emulatorConfig.host)&&(d.credentials="include"),zl.fetch()(await Gl(n,n.config.apiHost,t,l),d)})}async function Hl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},zp),e);try{const i=new Gp(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw qr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw qr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw qr(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $l(n,p,d);tt(n,p)}}catch(i){if(i instanceof st)throw i;tt(n,"network-request-failed",{message:String(i)})}}async function Wl(n,e,t,r,i={}){const o=await En(n,e,t,r,i);return"mfaPendingCredential"in o&&tt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Gl(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?so(n.config,i):`${n.config.apiScheme}://${i}`;return Hp.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Gp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),Wp.get())})}}function qr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Be(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Kp(n,e){return En(n,"POST","/v1/accounts:delete",e)}async function ai(n,e){return En(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qp(n,e=!1){const t=Ce(n),r=await t.getIdToken(e),i=oo(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Qn(Is(i.auth_time)),issuedAtTime:Qn(Is(i.iat)),expirationTime:Qn(Is(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Is(n){return Number(n)*1e3}function oo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pl(t);return i?JSON.parse(i):(Kr("Failed to decode base64 JWT payload"),null)}catch(i){return Kr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lc(n){const e=oo(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof st&&Jp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Jp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Xp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Os{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ci(n){var e;const t=n.auth,r=await n.getIdToken(),i=await rr(n,ai(t,{idToken:r}));U(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Kl(o.providerUserInfo):[],l=Zp(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),p=h?d:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Os(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,v)}async function Yp(n){const e=Ce(n);await ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kl(n){return n.map(e=>{var{providerId:t}=e,r=ro(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function em(n,e){const t=await Hl(n,{},async()=>{const r=fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await Gl(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&vn(n.emulatorConfig.host)&&(h.credentials="include"),zl.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tm(n,e){return En(n,"POST","/v2/accounts:revokeToken",bi(n,e))}/**
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
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=lc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await em(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new an;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(U(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
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
 */function ut(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Me{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Os(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qp(this,e)}reload(){return Yp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ci(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await rr(this,Kp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,l,h,d,p;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(i=t.email)!==null&&i!==void 0?i:void 0,P=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:te,isAnonymous:ke,providerData:se,stsTokenManager:E}=t;U(H&&E,e,"internal-error");const m=an.fromJSON(this.name,E);U(typeof H=="string",e,"internal-error"),ut(v,e.name),ut(w,e.name),U(typeof te=="boolean",e,"internal-error"),U(typeof ke=="boolean",e,"internal-error"),ut(P,e.name),ut(V,e.name),ut(L,e.name),ut(N,e.name),ut(z,e.name),ut(q,e.name);const _=new Me({uid:H,auth:e,email:w,emailVerified:te,displayName:v,isAnonymous:ke,photoURL:V,phoneNumber:P,tenantId:L,stsTokenManager:m,createdAt:z,lastLoginAt:q});return se&&Array.isArray(se)&&(_.providerData=se.map(T=>Object.assign({},T))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new an;i.updateFromServerResponse(t);const o=new Me({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ci(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];U(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Kl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new an;l.updateFromIdToken(r);const h=new Me({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Os(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const uc=new Map;function Ze(n){nt(n instanceof Function,"Expected a class definition");let e=uc.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,uc.set(n,e),e)}/**
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
 */class Ql{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ql.type="NONE";const hc=Ql;/**
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
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class cn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ai(this.auth,{idToken:e}).catch(()=>{});return t?Me._fromGetAccountInfoResponse(this.auth,t,e):null}return Me._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cn(Ze(hc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Ze(hc);const a=Qr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let v;if(typeof p=="string"){const w=await ai(e,{idToken:p}).catch(()=>{});if(!w)break;v=await Me._fromGetAccountInfoResponse(e,w,p)}else v=Me._fromJSON(e,p);d!==o&&(l=v),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new cn(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new cn(o,e,r))}}/**
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
 */function dc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tu(e))return"Blackberry";if(nu(e))return"Webos";if(Xl(e))return"Safari";if((e.includes("chrome/")||Yl(e))&&!e.includes("edge/"))return"Chrome";if(eu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jl(n=Ae()){return/firefox\//i.test(n)}function Xl(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yl(n=Ae()){return/crios\//i.test(n)}function Zl(n=Ae()){return/iemobile/i.test(n)}function eu(n=Ae()){return/android/i.test(n)}function tu(n=Ae()){return/blackberry/i.test(n)}function nu(n=Ae()){return/webos/i.test(n)}function ao(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nm(n=Ae()){var e;return ao(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rm(){return yf()&&document.documentMode===10}function ru(n=Ae()){return ao(n)||eu(n)||nu(n)||tu(n)||/windows phone/i.test(n)||Zl(n)}/**
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
 */function iu(n,e=[]){let t;switch(n){case"Browser":t=dc(Ae());break;case"Worker":t=`${dc(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${r}`}/**
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
 */class im{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sm(n,e={}){return En(n,"GET","/v2/passwordPolicy",bi(n,e))}/**
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
 */const om=6;class am{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:om,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class cm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new im(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ql,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ze(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ai(this,{idToken:e}),r=await Me._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ci(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$p()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(vt(this));const t=e?Ce(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sm(this),t=new am(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await tm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ze(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[Ze(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Bp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ci(n){return Ce(n)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let co={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lm(n){co=n}function um(n){return co.loadJS(n)}function hm(){return co.gapiScript}function dm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function fm(n,e){const t=no(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(jt(o,e??{}))return i;tt(i,"already-initialized")}return t.initialize({options:e})}function pm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ze);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mm(n,e,t){const r=Ci(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=su(e),{host:a,port:l}=gm(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(jt(d,r.config.emulator)&&jt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,vn(a)?(Nl(`${o}//${a}${h}`),Ol("Auth",!0)):_m()}function su(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gm(n){const e=su(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:pc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:pc(a)}}}function pc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _m(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ou{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,t){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}/**
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
 */async function ln(n,e){return Wl(n,"POST","/v1/accounts:signInWithIdp",bi(n,e))}/**
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
 */const ym="http://localhost";class $t extends ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=ro(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new $t(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ln(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ln(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ln(e,t)}buildRequest(){const e={requestUri:ym,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fr(t)}return e}}/**
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
 */class au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends mr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class dt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
 */class ft extends mr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
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
 */class pt extends mr{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
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
 */async function vm(n,e){return Wl(n,"POST","/v1/accounts:signUp",bi(n,e))}/**
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
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Me._fromIdTokenResponse(e,r,i),a=mc(r);return new It({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=mc(r);return new It({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function mc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Tm(n){var e;if(Oe(n.app))return Promise.reject(vt(n));const t=Ci(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new It({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await vm(t,{returnSecureToken:!0}),i=await It._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class li extends st{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,li.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new li(e,t,r,i)}}function cu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?li._fromErrorAndOperation(n,o,e,r):o})}async function Em(n,e,t=!1){const r=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return It._forOperation(n,"link",r)}/**
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
 */async function Im(n,e,t=!1){const{auth:r}=n;if(Oe(r.app))return Promise.reject(vt(r));const i="reauthenticate";try{const o=await rr(n,cu(r,i,e,n),t);U(o.idToken,r,"internal-error");const a=oo(o.idToken);U(a,r,"internal-error");const{sub:l}=a;return U(n.uid===l,r,"user-mismatch"),It._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),o}}/**
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
 */async function wm(n,e,t=!1){if(Oe(n.app))return Promise.reject(vt(n));const r="signIn",i=await cu(n,r,e),o=await It._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Am(n,e,t,r){return Ce(n).onIdTokenChanged(e,t,r)}function Sm(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function Rm(n,e,t,r){return Ce(n).onAuthStateChanged(e,t,r)}const ui="__sak";/**
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
 */class lu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ui,"1"),this.storage.removeItem(ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bm=1e3,Cm=10;class uu extends lu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ru(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);rm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uu.type="LOCAL";const Pm=uu;/**
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
 */class hu extends lu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hu.type="SESSION";const du=hu;/**
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
 */function km(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Pi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await km(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pi.receivers=[];/**
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
 */function lo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=lo("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const w=v;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(w.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function je(){return window}function Dm(n){je().location.href=n}/**
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
 */function fu(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Nm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Om(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mm(){return fu()?self:null}/**
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
 */const pu="firebaseLocalStorageDb",Lm=1,hi="firebaseLocalStorage",mu="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ki(n,e){return n.transaction([hi],e?"readwrite":"readonly").objectStore(hi)}function xm(){const n=indexedDB.deleteDatabase(pu);return new gr(n).toPromise()}function Ms(){const n=indexedDB.open(pu,Lm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(hi,{keyPath:mu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(hi)?e(r):(r.close(),await xm(),e(await Ms()))})})}async function gc(n,e,t){const r=ki(n,!0).put({[mu]:e,value:t});return new gr(r).toPromise()}async function Fm(n,e){const t=ki(n,!1).get(e),r=await new gr(t).toPromise();return r===void 0?null:r.value}function _c(n,e){const t=ki(n,!0).delete(e);return new gr(t).toPromise()}const Um=800,Bm=3;class gu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ms(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Bm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pi._getInstance(Mm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Nm(),!this.activeServiceWorker)return;this.sender=new Vm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Om()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ms();return await gc(e,ui,"1"),await _c(e,ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_c(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ki(i,!1).getAll();return new gr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Um)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gu.type="LOCAL";const jm=gu;new pr(3e4,6e4);/**
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
 */function qm(n,e){return e?Ze(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class uo extends ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $m(n){return wm(n.auth,new uo(n),n.bypassAuthState)}function zm(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Im(t,new uo(n),n.bypassAuthState)}async function Hm(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Em(t,new uo(n),n.bypassAuthState)}/**
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
 */class _u{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $m;case"linkViaPopup":case"linkViaRedirect":return Hm;case"reauthViaPopup":case"reauthViaRedirect":return zm;default:tt(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wm=new pr(2e3,1e4);class on extends _u{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wm.get())};e()}}on.currentPopupAction=null;/**
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
 */const Gm="pendingRedirect",Jr=new Map;class Km extends _u{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await Qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qm(n,e){const t=Ym(e),r=Xm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Jm(n,e){Jr.set(n._key(),e)}function Xm(n){return Ze(n._redirectPersistence)}function Ym(n){return Qr(Gm,n.config.apiKey,n.name)}async function Zm(n,e,t=!1){if(Oe(n.app))return Promise.reject(vt(n));const r=Ci(n),i=qm(r,e),a=await new Km(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const eg=600*1e3;class tg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ng(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eg&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ng(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yu(n);default:return!1}}/**
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
 */async function rg(n,e={}){return En(n,"GET","/v1/projects",e)}/**
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
 */const ig=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sg=/^https?/;async function og(n){if(n.config.emulator)return;const{authorizedDomains:e}=await rg(n);for(const t of e)try{if(ag(t))return}catch{}tt(n,"unauthorized-domain")}function ag(n){const e=Ns(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!sg.test(t))return!1;if(ig.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cg=new pr(3e4,6e4);function vc(){const n=je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lg(n){return new Promise((e,t)=>{var r,i,o;function a(){vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vc(),t(Be(n,"network-request-failed"))},timeout:cg.get()})}if(!((i=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=je().gapi)===null||o===void 0)&&o.load)a();else{const l=dm("iframefcb");return je()[l]=()=>{gapi.load?a():t(Be(n,"network-request-failed"))},um(`${hm()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Xr=null,e})}let Xr=null;function ug(n){return Xr=Xr||lg(n),Xr}/**
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
 */const hg=new pr(5e3,15e3),dg="__/auth/iframe",fg="emulator/auth/iframe",pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?so(e,fg):`https://${n.config.authDomain}/${dg}`,r={apiKey:e.apiKey,appName:n.name,v:Tn},i=mg.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${fr(r).slice(1)}`}async function _g(n){const e=await ug(n),t=je().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:gg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pg,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),l=je().setTimeout(()=>{o(a)},hg.get());function h(){je().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vg=500,Tg=600,Eg="_blank",Ig="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wg(n,e,t,r=vg,i=Tg){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Object.assign(Object.assign({},yg),{width:r.toString(),height:i.toString(),top:o,left:a}),d=Ae().toLowerCase();t&&(l=Yl(d)?Eg:t),Jl(d)&&(e=e||Ig,h.scrollbars="yes");const p=Object.entries(h).reduce((w,[P,V])=>`${w}${P}=${V},`,"");if(nm(d)&&l!=="_self")return Ag(e||"",l),new Tc(null);const v=window.open(e||"",l,p);U(v,n,"popup-blocked");try{v.focus()}catch{}return new Tc(v)}function Ag(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Sg="__/auth/handler",Rg="emulator/auth/handler",bg=encodeURIComponent("fac");async function Ec(n,e,t,r,i,o){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tn,eventId:i};if(e instanceof au){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Sf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,v]of Object.entries({}))a[p]=v}if(e instanceof mr){const p=e.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await n._getAppCheckToken(),d=h?`#${bg}=${encodeURIComponent(h)}`:"";return`${Cg(n)}?${fr(l).slice(1)}${d}`}function Cg({config:n}){return n.emulator?so(n,Rg):`https://${n.authDomain}/${Sg}`}/**
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
 */const ws="webStorageSupport";class Pg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=du,this._completeRedirectFn=Zm,this._overrideRedirectResult=Jm}async _openPopup(e,t,r,i){var o;nt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ec(e,t,r,Ns(),i);return wg(e,a,lo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Ec(e,t,r,Ns(),i);return Dm(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(nt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await _g(e),r=new tg(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ws,{type:ws},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ws];a!==void 0&&t(!!a),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=og(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ru()||Xl()||ao()}}const kg=Pg;var Ic="@firebase/auth",wc="1.10.8";/**
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
 */class Vg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ng(n){dn(new qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iu(n)},d=new cm(r,i,o,h);return pm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dn(new qt("auth-internal",e=>{const t=Ci(e.getProvider("auth").getImmediate());return(r=>new Vg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(Ic,wc,Dg(n)),yt(Ic,wc,"esm2017")}/**
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
 */const Og=300,Mg=Dl("authIdTokenMaxAge")||Og;let Ac=null;const Lg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Mg)return;const i=t==null?void 0:t.token;Ac!==i&&(Ac=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xg(n=Fl()){const e=no(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fm(n,{popupRedirectResolver:kg,persistence:[jm,Pm,du]}),r=Dl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Lg(o.toString());Sm(t,a,()=>a(t.currentUser)),Am(t,l=>a(l))}}const i=kl("auth");return i&&mm(t,`http://${i}`),t}function Fg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}lm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Be("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Fg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ng("Browser");var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tt,vu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(T,I,S){for(var g=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)g[Qe-2]=arguments[Qe];return m.prototype[I].apply(T,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)T[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)T[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],I=E.g[2];var S=E.g[3],g=m+(S^_&(I^S))+T[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=S+(I^m&(_^I))+T[1]+3905402710&4294967295,S=m+(g<<12&4294967295|g>>>20),g=I+(_^S&(m^_))+T[2]+606105819&4294967295,I=S+(g<<17&4294967295|g>>>15),g=_+(m^I&(S^m))+T[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(S^_&(I^S))+T[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=S+(I^m&(_^I))+T[5]+1200080426&4294967295,S=m+(g<<12&4294967295|g>>>20),g=I+(_^S&(m^_))+T[6]+2821735955&4294967295,I=S+(g<<17&4294967295|g>>>15),g=_+(m^I&(S^m))+T[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(S^_&(I^S))+T[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=S+(I^m&(_^I))+T[9]+2336552879&4294967295,S=m+(g<<12&4294967295|g>>>20),g=I+(_^S&(m^_))+T[10]+4294925233&4294967295,I=S+(g<<17&4294967295|g>>>15),g=_+(m^I&(S^m))+T[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(S^_&(I^S))+T[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=S+(I^m&(_^I))+T[13]+4254626195&4294967295,S=m+(g<<12&4294967295|g>>>20),g=I+(_^S&(m^_))+T[14]+2792965006&4294967295,I=S+(g<<17&4294967295|g>>>15),g=_+(m^I&(S^m))+T[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^S&(_^I))+T[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=S+(_^I&(m^_))+T[6]+3225465664&4294967295,S=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(S^m))+T[11]+643717713&4294967295,I=S+(g<<14&4294967295|g>>>18),g=_+(S^m&(I^S))+T[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^S&(_^I))+T[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=S+(_^I&(m^_))+T[10]+38016083&4294967295,S=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(S^m))+T[15]+3634488961&4294967295,I=S+(g<<14&4294967295|g>>>18),g=_+(S^m&(I^S))+T[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^S&(_^I))+T[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=S+(_^I&(m^_))+T[14]+3275163606&4294967295,S=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(S^m))+T[3]+4107603335&4294967295,I=S+(g<<14&4294967295|g>>>18),g=_+(S^m&(I^S))+T[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^S&(_^I))+T[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=S+(_^I&(m^_))+T[2]+4243563512&4294967295,S=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(S^m))+T[7]+1735328473&4294967295,I=S+(g<<14&4294967295|g>>>18),g=_+(S^m&(I^S))+T[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^S)+T[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=S+(m^_^I)+T[8]+2272392833&4294967295,S=m+(g<<11&4294967295|g>>>21),g=I+(S^m^_)+T[11]+1839030562&4294967295,I=S+(g<<16&4294967295|g>>>16),g=_+(I^S^m)+T[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^S)+T[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=S+(m^_^I)+T[4]+1272893353&4294967295,S=m+(g<<11&4294967295|g>>>21),g=I+(S^m^_)+T[7]+4139469664&4294967295,I=S+(g<<16&4294967295|g>>>16),g=_+(I^S^m)+T[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^S)+T[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=S+(m^_^I)+T[0]+3936430074&4294967295,S=m+(g<<11&4294967295|g>>>21),g=I+(S^m^_)+T[3]+3572445317&4294967295,I=S+(g<<16&4294967295|g>>>16),g=_+(I^S^m)+T[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^S)+T[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=S+(m^_^I)+T[12]+3873151461&4294967295,S=m+(g<<11&4294967295|g>>>21),g=I+(S^m^_)+T[15]+530742520&4294967295,I=S+(g<<16&4294967295|g>>>16),g=_+(I^S^m)+T[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~S))+T[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=S+(_^(m|~I))+T[7]+1126891415&4294967295,S=m+(g<<10&4294967295|g>>>22),g=I+(m^(S|~_))+T[14]+2878612391&4294967295,I=S+(g<<15&4294967295|g>>>17),g=_+(S^(I|~m))+T[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~S))+T[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=S+(_^(m|~I))+T[3]+2399980690&4294967295,S=m+(g<<10&4294967295|g>>>22),g=I+(m^(S|~_))+T[10]+4293915773&4294967295,I=S+(g<<15&4294967295|g>>>17),g=_+(S^(I|~m))+T[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~S))+T[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=S+(_^(m|~I))+T[15]+4264355552&4294967295,S=m+(g<<10&4294967295|g>>>22),g=I+(m^(S|~_))+T[6]+2734768916&4294967295,I=S+(g<<15&4294967295|g>>>17),g=_+(S^(I|~m))+T[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~S))+T[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=S+(_^(m|~I))+T[11]+3174756917&4294967295,S=m+(g<<10&4294967295|g>>>22),g=I+(m^(S|~_))+T[2]+718787259&4294967295,I=S+(g<<15&4294967295|g>>>17),g=_+(S^(I|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+S&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,T=this.B,I=this.h,S=0;S<m;){if(I==0)for(;S<=_;)i(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<m;)if(T[I++]=E.charCodeAt(S++),I==this.blockSize){i(this,T),I=0;break}}else for(;S<m;)if(T[I++]=E[S++],I==this.blockSize){i(this,T),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)E[_++]=this.g[m]>>>T&255;return E};function o(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],T=!0,I=E.length-1;0<=I;I--){var S=E[I]|0;T&&S==m||(_[I]=S,T=!1)}this.g=_}var l={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return N(d(-E));for(var m=[],_=1,T=0;E>=_;T++)m[T]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return N(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),T=v,I=0;I<E.length;I+=8){var S=Math.min(8,E.length-I),g=parseInt(E.substring(I,I+S),m);8>S?(S=d(Math.pow(m,S)),T=T.j(S).add(d(g))):(T=T.j(_),T=T.add(d(g)))}return T}var v=h(0),w=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(L(this))return-N(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);E+=(0<=T?T:4294967296+T)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(L(this))return"-"+N(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,T="";;){var I=te(_,m).g;_=z(_,I.j(m));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=I,V(_))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function L(E){return E.h==-1}n.l=function(E){return E=z(this,E),L(E)?-1:V(E)?0:1};function N(E){for(var m=E.g.length,_=[],T=0;T<m;T++)_[T]=~E.g[T];return new a(_,~E.h).add(w)}n.abs=function(){return L(this)?N(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0,I=0;I<=m;I++){var S=T+(this.i(I)&65535)+(E.i(I)&65535),g=(S>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);T=g>>>16,S&=65535,g&=65535,_[I]=g<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(E,m){return E.add(N(m))}n.j=function(E){if(V(this)||V(E))return v;if(L(this))return L(E)?N(this).j(N(E)):N(N(this).j(E));if(L(E))return N(this.j(N(E)));if(0>this.l(P)&&0>E.l(P))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<E.g.length;I++){var S=this.i(T)>>>16,g=this.i(T)&65535,Qe=E.i(I)>>>16,Rn=E.i(I)&65535;_[2*T+2*I]+=g*Rn,q(_,2*T+2*I),_[2*T+2*I+1]+=S*Rn,q(_,2*T+2*I+1),_[2*T+2*I+1]+=g*Qe,q(_,2*T+2*I+1),_[2*T+2*I+2]+=S*Qe,q(_,2*T+2*I+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function q(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function H(E,m){this.g=E,this.h=m}function te(E,m){if(V(m))throw Error("division by zero");if(V(E))return new H(v,v);if(L(E))return m=te(N(E),m),new H(N(m.g),N(m.h));if(L(m))return m=te(E,N(m)),new H(N(m.g),m.h);if(30<E.g.length){if(L(E)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=w,T=m;0>=T.l(E);)_=ke(_),T=ke(T);var I=se(_,1),S=se(T,1);for(T=se(T,2),_=se(_,2);!V(T);){var g=S.add(T);0>=g.l(E)&&(I=I.add(_),S=g),T=se(T,1),_=se(_,1)}return m=z(E,I.j(m)),new H(I,m)}for(I=v;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=d(_),g=S.j(m);L(g)||0<g.l(E);)_-=T,S=d(_),g=S.j(m);V(S)&&(S=w),I=I.add(S),E=z(E,g)}return new H(I,E)}n.A=function(E){return te(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function ke(E){for(var m=E.g.length+1,_=[],T=0;T<m;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function se(E,m){var _=m>>5;m%=32;for(var T=E.g.length-_,I=[],S=0;S<T;S++)I[S]=0<m?E.i(S+_)>>>m|E.i(S+_+1)<<32-m:E.i(S+_);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Tt=a}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tu,zn,Eu,Yr,Ls,Iu,wu,Au;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof $r=="object"&&$r];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in u))break e;u=u[A]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,f=!1,A={next:function(){if(!f&&u<s.length){var R=u++;return{value:c(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,u){return s.call.apply(s.bind,arguments)}function v(s,c,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(c,A)}}return function(){return s.apply(c,arguments)}}function w(s,c,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,w.apply(null,arguments)}function P(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function V(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,A,R){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return c.prototype[A].apply(f,D)}}function L(s){const c=s.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function N(s,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=s.length||0,R=f.length||0;s.length=A+R;for(let D=0;D<R;D++)s[A+D]=f[D]}else s.push(f)}}class z{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function q(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function te(s){return te[" "](s),s}te[" "]=function(){};var ke=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function se(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function E(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function m(s){const c={};for(const u in s)c[u]=s[u];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,c){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)s[u]=f[u];for(let R=0;R<_.length;R++)u=_[R],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function I(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function S(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Gi;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Qe{constructor(){this.h=this.g=null}add(c,u){const f=Rn.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Rn=new z(()=>new yd,s=>s.reset());class yd{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let bn,Cn=!1,Gi=new Qe,Xo=()=>{const s=l.Promise.resolve(void 0);bn=()=>{s.then(vd)}};var vd=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(u){S(u)}var c=Rn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Cn=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Td=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s})();function Pn(s,c){if(_e.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(ke){e:{try{te(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ed[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Pn.aa.h.call(this)}}V(Pn,_e);var Ed={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),Id=0;function wd(s,c,u,f,A){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=A,this.key=++Id,this.da=this.fa=!1}function Ar(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Sr(s){this.src=s,this.g={},this.h=0}Sr.prototype.add=function(s,c,u,f,A){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var D=Qi(s,c,f,A);return-1<D?(c=s[D],u||(c.fa=!1)):(c=new wd(c,this.src,R,!!f,A),c.fa=u,s.push(c)),c};function Ki(s,c){var u=c.type;if(u in s.g){var f=s.g[u],A=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(Ar(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Qi(s,c,u,f){for(var A=0;A<s.length;++A){var R=s[A];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return A}return-1}var Ji="closure_lm_"+(1e6*Math.random()|0),Xi={};function Yo(s,c,u,f,A){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Yo(s,c[R],u,f,A);return null}return u=ta(u),s&&s[wr]?s.K(c,u,d(f)?!!f.capture:!1,A):Ad(s,c,u,!1,f,A)}function Ad(s,c,u,f,A,R){if(!c)throw Error("Invalid event type");var D=d(A)?!!A.capture:!!A,X=Zi(s);if(X||(s[Ji]=X=new Sr(s)),u=X.add(c,u,f,D,R),u.proxy)return u;if(f=Sd(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)Td||(A=D),A===void 0&&(A=!1),s.addEventListener(c.toString(),f,A);else if(s.attachEvent)s.attachEvent(ea(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Sd(){function s(u){return c.call(s.src,s.listener,u)}const c=Rd;return s}function Zo(s,c,u,f,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)Zo(s,c[R],u,f,A);else f=d(f)?!!f.capture:!!f,u=ta(u),s&&s[wr]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],u=Qi(R,u,f,A),-1<u&&(Ar(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=Zi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Qi(c,u,f,A)),(u=-1<s?c[s]:null)&&Yi(u))}function Yi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[wr])Ki(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(ea(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Zi(c))?(Ki(u,s),u.h==0&&(u.src=null,c[Ji]=null)):Ar(s)}}}function ea(s){return s in Xi?Xi[s]:Xi[s]="on"+s}function Rd(s,c){if(s.da)s=!0;else{c=new Pn(c,this);var u=s.listener,f=s.ha||s.src;s.fa&&Yi(s),s=u.call(f,c)}return s}function Zi(s){return s=s[Ji],s instanceof Sr?s:null}var es="__closure_events_fn_"+(1e9*Math.random()>>>0);function ta(s){return typeof s=="function"?s:(s[es]||(s[es]=function(c){return s.handleEvent(c)}),s[es])}function ye(){ot.call(this),this.i=new Sr(this),this.M=this,this.F=null}V(ye,ot),ye.prototype[wr]=!0,ye.prototype.removeEventListener=function(s,c,u,f){Zo(this,s,c,u,f)};function Se(s,c){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new _e(c,s);else if(c instanceof _e)c.target=c.target||s;else{var A=c;c=new _e(f,s),T(c,A)}if(A=!0,u)for(var R=u.length-1;0<=R;R--){var D=c.g=u[R];A=Rr(D,f,!0,c)&&A}if(D=c.g=s,A=Rr(D,f,!0,c)&&A,A=Rr(D,f,!1,c)&&A,u)for(R=0;R<u.length;R++)D=c.g=u[R],A=Rr(D,f,!1,c)&&A}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],f=0;f<u.length;f++)Ar(u[f]);delete s.g[c],s.h--}}this.F=null},ye.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},ye.prototype.L=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function Rr(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,R=0;R<c.length;++R){var D=c[R];if(D&&!D.da&&D.capture==u){var X=D.listener,fe=D.ha||D.src;D.fa&&Ki(s.i,D),A=X.call(fe,f)!==!1&&A}}return A&&!f.defaultPrevented}function na(s,c,u){if(typeof s=="function")u&&(s=w(s,u));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function ra(s){s.g=na(()=>{s.g=null,s.i&&(s.i=!1,ra(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class bd extends ot{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ra(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kn(s){ot.call(this),this.h=s,this.g={}}V(kn,ot);var ia=[];function sa(s){se(s.g,function(c,u){this.g.hasOwnProperty(u)&&Yi(c)},s),s.g={}}kn.prototype.N=function(){kn.aa.N.call(this),sa(this)},kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ts=l.JSON.stringify,Cd=l.JSON.parse,Pd=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ns(){}ns.prototype.h=null;function oa(s){return s.h||(s.h=s.i())}function aa(){}var Vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rs(){_e.call(this,"d")}V(rs,_e);function is(){_e.call(this,"c")}V(is,_e);var Dt={},ca=null;function br(){return ca=ca||new ye}Dt.La="serverreachability";function la(s){_e.call(this,Dt.La,s)}V(la,_e);function Dn(s){const c=br();Se(c,new la(c))}Dt.STAT_EVENT="statevent";function ua(s,c){_e.call(this,Dt.STAT_EVENT,s),this.stat=c}V(ua,_e);function Re(s){const c=br();Se(c,new ua(c,s))}Dt.Ma="timingevent";function ha(s,c){_e.call(this,Dt.Ma,s),this.size=c}V(ha,_e);function Nn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function On(){this.g=!0}On.prototype.xa=function(){this.g=!1};function kd(s,c,u,f,A,R){s.info(function(){if(s.g)if(R)for(var D="",X=R.split("&"),fe=0;fe<X.length;fe++){var Q=X[fe].split("=");if(1<Q.length){var ve=Q[0];Q=Q[1];var Te=ve.split("_");D=2<=Te.length&&Te[1]=="type"?D+(ve+"="+Q+"&"):D+(ve+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+u+`
`+D})}function Vd(s,c,u,f,A,R,D){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+u+`
`+R+" "+D})}function Xt(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Nd(s,u)+(f?" "+f:"")})}function Dd(s,c){s.info(function(){return"TIMEOUT: "+c})}On.prototype.info=function(){};function Nd(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<A.length;D++)A[D]=""}}}}return ts(u)}catch{return c}}var Cr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},da={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ss;function Pr(){}V(Pr,ns),Pr.prototype.g=function(){return new XMLHttpRequest},Pr.prototype.i=function(){return{}},ss=new Pr;function at(s,c,u,f){this.j=s,this.i=c,this.l=u,this.R=f||1,this.U=new kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fa}function fa(){this.i=null,this.g="",this.h=!1}var pa={},os={};function as(s,c,u){s.L=1,s.v=Nr(Je(c)),s.m=u,s.P=!0,ma(s,null)}function ma(s,c){s.F=Date.now(),kr(s),s.A=Je(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Pa(u.i,"t",f),s.C=0,u=s.j.J,s.h=new fa,s.g=Ga(s.j,u?c:null,!s.m),0<s.O&&(s.M=new bd(w(s.Y,s,s.g),s.O)),c=s.U,u=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(ia[0]=A.toString()),A=ia);for(var R=0;R<A.length;R++){var D=Yo(u,A[R],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),Dn(),kd(s.i,s.u,s.A,s.l,s.R,s.m)}at.prototype.ca=function(s){s=s.target;const c=this.M;c&&Xe(s)==3?c.j():this.Y(s)},at.prototype.Y=function(s){try{if(s==this.g)e:{const Te=Xe(this.g);var c=this.g.Ba();const en=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||La(this.g)))){this.J||Te!=4||c==7||(c==8||0>=en?Dn(3):Dn(2)),cs(this);var u=this.g.Z();this.X=u;t:if(ga(this)){var f=La(this.g);s="";var A=f.length,R=Xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Mn(this);var D="";break t}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(R&&c==A-1)});f.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,Vd(this.i,this.u,this.A,this.l,this.R,Te,u),this.o){if(this.T&&!this.K){t:{if(this.g){var X,fe=this.g;if((X=fe.g?fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(X)){var Q=X;break t}}Q=null}if(u=Q)Xt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ls(this,u);else{this.o=!1,this.s=3,Re(12),Nt(this),Mn(this);break e}}if(this.P){u=!0;let Ne;for(;!this.J&&this.C<D.length;)if(Ne=Od(this,D),Ne==os){Te==4&&(this.s=4,Re(14),u=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==pa){this.s=4,Re(15),Xt(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else Xt(this.i,this.l,Ne,null),ls(this,Ne);if(ga(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||D.length!=0||this.h.h||(this.s=1,Re(16),u=!1),this.o=this.o&&u,!u)Xt(this.i,this.l,D,"[Invalid Chunked Response]"),Nt(this),Mn(this);else if(0<D.length&&!this.W){this.W=!0;var ve=this.j;ve.g==this&&ve.ba&&!ve.M&&(ve.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ms(ve),ve.M=!0,Re(11))}}else Xt(this.i,this.l,D,null),ls(this,D);Te==4&&Nt(this),this.o&&!this.J&&(Te==4?$a(this.j,this):(this.o=!1,kr(this)))}else Xd(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),Nt(this),Mn(this)}}}catch{}finally{}};function ga(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Od(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?os:(u=Number(c.substring(u,f)),isNaN(u)?pa:(f+=1,f+u>c.length?os:(c=c.slice(f,f+u),s.C=f+u,c)))}at.prototype.cancel=function(){this.J=!0,Nt(this)};function kr(s){s.S=Date.now()+s.I,_a(s,s.I)}function _a(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Nn(w(s.ba,s),c)}function cs(s){s.B&&(l.clearTimeout(s.B),s.B=null)}at.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Dd(this.i,this.A),this.L!=2&&(Dn(),Re(17)),Nt(this),this.s=2,Mn(this)):_a(this,this.S-s)};function Mn(s){s.j.G==0||s.J||$a(s.j,s)}function Nt(s){cs(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,sa(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function ls(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||us(u.h,s))){if(!s.K&&us(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Ur(u),xr(u);else break e;ps(u),Re(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Nn(w(u.Za,u),6e3));if(1>=Ta(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Mt(u,11)}else if((s.K||u.g==s)&&Ur(u),!q(c))for(A=u.Da.g.parse(c),c=0;c<A.length;c++){let Q=A[c];if(u.T=Q[0],Q=Q[1],u.G==2)if(Q[0]=="c"){u.K=Q[1],u.ia=Q[2];const ve=Q[3];ve!=null&&(u.la=ve,u.j.info("VER="+u.la));const Te=Q[4];Te!=null&&(u.Aa=Te,u.j.info("SVER="+u.Aa));const en=Q[5];en!=null&&typeof en=="number"&&0<en&&(f=1.5*en,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Ne=s.g;if(Ne){const jr=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jr){var R=f.h;R.g||jr.indexOf("spdy")==-1&&jr.indexOf("quic")==-1&&jr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(hs(R,R.h),R.h=null))}if(f.D){const gs=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;gs&&(f.ya=gs,Z(f.I,f.D,gs))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var D=s;if(f.qa=Wa(f,f.J?f.ia:null,f.W),D.K){Ea(f.h,D);var X=D,fe=f.L;fe&&(X.I=fe),X.B&&(cs(X),kr(X)),f.g=D}else ja(f);0<u.i.length&&Fr(u)}else Q[0]!="stop"&&Q[0]!="close"||Mt(u,7);else u.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Mt(u,7):fs(u):Q[0]!="noop"&&u.l&&u.l.ta(Q),u.v=0)}}Dn(4)}catch{}}var Md=class{constructor(s,c){this.g=s,this.map=c}};function ya(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function va(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ta(s){return s.h?1:s.g?s.g.size:0}function us(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function hs(s,c){s.g?s.g.add(c):s.h=c}function Ea(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}ya.prototype.cancel=function(){if(this.i=Ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ia(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return L(s.i)}function Ld(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],u=s.length,f=0;f<u;f++)c.push(s[f]);return c}c=[],u=0;for(f in s)c[u++]=s[f];return c}function xd(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const f in s)c[u++]=f;return c}}}function wa(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=xd(s),f=Ld(s),A=f.length,R=0;R<A;R++)c.call(void 0,f[R],u&&u[R],s)}var Aa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fd(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),A=null;if(0<=f){var R=s[u].substring(0,f);A=s[u].substring(f+1)}else R=s[u];c(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ot(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ot){this.h=s.h,Vr(this,s.j),this.o=s.o,this.g=s.g,Dr(this,s.s),this.l=s.l;var c=s.i,u=new Fn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Sa(this,u),this.m=s.m}else s&&(c=String(s).match(Aa))?(this.h=!1,Vr(this,c[1]||"",!0),this.o=Ln(c[2]||""),this.g=Ln(c[3]||"",!0),Dr(this,c[4]),this.l=Ln(c[5]||"",!0),Sa(this,c[6]||"",!0),this.m=Ln(c[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}Ot.prototype.toString=function(){var s=[],c=this.j;c&&s.push(xn(c,Ra,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(xn(c,Ra,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(xn(u,u.charAt(0)=="/"?jd:Bd,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",xn(u,$d)),s.join("")};function Je(s){return new Ot(s)}function Vr(s,c,u){s.j=u?Ln(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Dr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Sa(s,c,u){c instanceof Fn?(s.i=c,zd(s.i,s.h)):(u||(c=xn(c,qd)),s.i=new Fn(c,s.h))}function Z(s,c,u){s.i.set(c,u)}function Nr(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ln(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function xn(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,Ud),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ud(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ra=/[#\/\?@]/g,Bd=/[#\?:]/g,jd=/[#\?]/g,qd=/[#\?@]/g,$d=/#/g;function Fn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function ct(s){s.g||(s.g=new Map,s.h=0,s.i&&Fd(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Fn.prototype,n.add=function(s,c){ct(this),this.i=null,s=Yt(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function ba(s,c){ct(s),c=Yt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Ca(s,c){return ct(s),c=Yt(s,c),s.g.has(c)}n.forEach=function(s,c){ct(this),this.g.forEach(function(u,f){u.forEach(function(A){s.call(c,A,f,this)},this)},this)},n.na=function(){ct(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const A=s[f];for(let R=0;R<A.length;R++)u.push(c[f])}return u},n.V=function(s){ct(this);let c=[];if(typeof s=="string")Ca(this,s)&&(c=c.concat(this.g.get(Yt(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},n.set=function(s,c){return ct(this),this.i=null,s=Yt(this,s),Ca(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Pa(s,c,u){ba(s,c),0<u.length&&(s.i=null,s.g.set(Yt(s,c),L(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var A=R;D[f]!==""&&(A+="="+encodeURIComponent(String(D[f]))),s.push(A)}}return this.i=s.join("&")};function Yt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function zd(s,c){c&&!s.j&&(ct(s),s.i=null,s.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(ba(this,f),Pa(this,A,u))},s)),s.j=c}function Hd(s,c){const u=new On;if(l.Image){const f=new Image;f.onload=P(lt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=P(lt,u,"TestLoadImage: error",!1,c,f),f.onabort=P(lt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(lt,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Wd(s,c){const u=new On,f=new AbortController,A=setTimeout(()=>{f.abort(),lt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?lt(u,"TestPingServer: ok",!0,c):lt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),lt(u,"TestPingServer: error",!1,c)})}function lt(s,c,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function Gd(){this.g=new Pd}function Kd(s,c,u){const f=u||"";try{wa(s,function(A,R){let D=A;d(A)&&(D=ts(A)),c.push(f+R+"="+encodeURIComponent(D))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function Or(s){this.l=s.Ub||null,this.j=s.eb||!1}V(Or,ns),Or.prototype.g=function(){return new Mr(this.l,this.j)},Or.prototype.i=(function(s){return function(){return s}})({});function Mr(s,c){ye.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Mr,ye),n=Mr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Bn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ka(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ka(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Un(this):Bn(this),this.readyState==3&&ka(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Un(this))},n.Qa=function(s){this.g&&(this.response=s,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Bn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function Bn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Va(s){let c="";return se(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function ds(s,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Va(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):Z(s,c,u))}function ie(s){ye.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ie,ye);var Qd=/^https?$/i,Jd=["POST","PUT"];n=ie.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ss.g(),this.v=this.o?oa(this.o):oa(ss),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){Da(this,R);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),A=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jd,c,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of u)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ma(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Da(this,R)}};function Da(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Na(s),Lr(s)}function Na(s){s.A||(s.A=!0,Se(s,"complete"),Se(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Se(this,"complete"),Se(this,"abort"),Lr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lr(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Oa(this):this.bb())},n.bb=function(){Oa(this)};function Oa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Xe(s)!=4||s.Z()!=2)){if(s.u&&Xe(s)==4)na(s.Ea,0,s);else if(Se(s,"readystatechange"),Xe(s)==4){s.h=!1;try{const D=s.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=D===0){var A=String(s.D).match(Aa)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),f=!Qd.test(A?A.toLowerCase():"")}u=f}if(u)Se(s,"complete"),Se(s,"success");else{s.m=6;try{var R=2<Xe(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Na(s)}}finally{Lr(s)}}}}function Lr(s,c){if(s.g){Ma(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Se(s,"ready");try{u.onreadystatechange=f}catch{}}}function Ma(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Xe(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Xe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Cd(c)}};function La(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Xd(s){const c={};s=(s.g&&2<=Xe(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(q(s[f]))continue;var u=I(s[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[A]||[];c[A]=R,R.push(u)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function xa(s){this.Aa=0,this.i=[],this.j=new On,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,s),this.cb=jn("retryDelaySeedMs",1e4,s),this.Wa=jn("forwardChannelMaxRetries",2,s),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ya(s&&s.concurrentRequestLimit),this.Da=new Gd,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xa.prototype,n.la=8,n.G=1,n.connect=function(s,c,u,f){Re(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Wa(this,null,this.W),Fr(this)};function fs(s){if(Fa(s),s.G==3){var c=s.U++,u=Je(s.I);if(Z(u,"SID",s.K),Z(u,"RID",c),Z(u,"TYPE","terminate"),qn(s,u),c=new at(s,s.j,c),c.L=2,c.v=Nr(Je(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Ga(c.j,null),c.g.ea(c.v)),c.F=Date.now(),kr(c)}Ha(s)}function xr(s){s.g&&(ms(s),s.g.cancel(),s.g=null)}function Fa(s){xr(s),s.u&&(l.clearTimeout(s.u),s.u=null),Ur(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function Fr(s){if(!va(s.h)&&!s.s){s.s=!0;var c=s.Ga;bn||Xo(),Cn||(bn(),Cn=!0),Gi.add(c,s),s.B=0}}function Yd(s,c){return Ta(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Nn(w(s.Ga,s,c),za(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new at(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ba(this,A,c),u=Je(this.I),Z(u,"RID",s),Z(u,"CVER",22),this.D&&Z(u,"X-HTTP-Session-Id",this.D),qn(this,u),R&&(this.O?c="headers="+encodeURIComponent(String(Va(R)))+"&"+c:this.m&&ds(u,this.m,R)),hs(this.h,A),this.Ua&&Z(u,"TYPE","init"),this.P?(Z(u,"$req",c),Z(u,"SID","null"),A.T=!0,as(A,u,null)):as(A,u,c),this.G=2}}else this.G==3&&(s?Ua(this,s):this.i.length==0||va(this.h)||Ua(this))};function Ua(s,c){var u;c?u=c.l:u=s.U++;const f=Je(s.I);Z(f,"SID",s.K),Z(f,"RID",u),Z(f,"AID",s.T),qn(s,f),s.m&&s.o&&ds(f,s.m,s.o),u=new at(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ba(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),hs(s.h,u),as(u,f,c)}function qn(s,c){s.H&&se(s.H,function(u,f){Z(c,f,u)}),s.l&&wa({},function(u,f){Z(c,f,u)})}function Ba(s,c,u){u=Math.min(s.i.length,u);var f=s.l?w(s.l.Na,s.l,s):null;e:{var A=s.i;let R=-1;for(;;){const D=["count="+u];R==-1?0<u?(R=A[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let X=!0;for(let fe=0;fe<u;fe++){let Q=A[fe].g;const ve=A[fe].map;if(Q-=R,0>Q)R=Math.max(0,A[fe].g-100),X=!1;else try{Kd(ve,D,"req"+Q+"_")}catch{f&&f(ve)}}if(X){f=D.join("&");break e}}}return s=s.i.splice(0,u),c.D=s,f}function ja(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;bn||Xo(),Cn||(bn(),Cn=!0),Gi.add(c,s),s.v=0}}function ps(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Nn(w(s.Fa,s),za(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,qa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Nn(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),xr(this),qa(this))};function ms(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function qa(s){s.g=new at(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Je(s.qa);Z(c,"RID","rpc"),Z(c,"SID",s.K),Z(c,"AID",s.T),Z(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(c,"TO",s.ja),Z(c,"TYPE","xmlhttp"),qn(s,c),s.m&&s.o&&ds(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=Nr(Je(c)),u.m=null,u.P=!0,ma(u,s)}n.Za=function(){this.C!=null&&(this.C=null,xr(this),ps(this),Re(19))};function Ur(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function $a(s,c){var u=null;if(s.g==c){Ur(s),ms(s),s.g=null;var f=2}else if(us(s.h,c))u=c.D,Ea(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var A=s.B;f=br(),Se(f,new ha(f,u)),Fr(s)}else ja(s);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Yd(s,c)||f==2&&ps(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),A){case 1:Mt(s,5);break;case 4:Mt(s,10);break;case 3:Mt(s,6);break;default:Mt(s,2)}}}function za(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function Mt(s,c){if(s.j.info("Error code "+c),c==2){var u=w(s.fb,s),f=s.Xa;const A=!f;f=new Ot(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vr(f,"https"),Nr(f),A?Hd(f.toString(),u):Wd(f.toString(),u)}else Re(2);s.G=0,s.l&&s.l.sa(c),Ha(s),Fa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Ha(s){if(s.G=0,s.ka=[],s.l){const c=Ia(s.h);(c.length!=0||s.i.length!=0)&&(N(s.ka,c),N(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function Wa(s,c,u){var f=u instanceof Ot?Je(u):new Ot(u);if(f.g!="")c&&(f.g=c+"."+f.g),Dr(f,f.s);else{var A=l.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var R=new Ot(null);f&&Vr(R,f),c&&(R.g=c),A&&Dr(R,A),u&&(R.l=u),f=R}return u=s.D,c=s.ya,u&&c&&Z(f,u,c),Z(f,"VER",s.la),qn(s,f),f}function Ga(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ie(new Or({eb:u})):new ie(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ka(){}n=Ka.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Br(){}Br.prototype.g=function(s,c){return new Pe(s,c)};function Pe(s,c){ye.call(this),this.g=new xa(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!q(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!q(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Zt(this)}V(Pe,ye),Pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){fs(this.g)},Pe.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=ts(s),s=u);c.i.push(new Md(c.Ya++,s)),c.G==3&&Fr(c)},Pe.prototype.N=function(){this.g.l=null,delete this.j,fs(this.g),delete this.g,Pe.aa.N.call(this)};function Qa(s){rs.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}V(Qa,rs);function Ja(){is.call(this),this.status=1}V(Ja,is);function Zt(s){this.g=s}V(Zt,Ka),Zt.prototype.ua=function(){Se(this.g,"a")},Zt.prototype.ta=function(s){Se(this.g,new Qa(s))},Zt.prototype.sa=function(s){Se(this.g,new Ja)},Zt.prototype.ra=function(){Se(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,Au=function(){return new Br},wu=function(){return br()},Iu=Dt,Ls={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cr.NO_ERROR=0,Cr.TIMEOUT=8,Cr.HTTP_ERROR=6,Yr=Cr,da.COMPLETE="complete",Eu=da,aa.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",ye.prototype.listen=ye.prototype.K,zn=aa,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,Tu=ie}).apply(typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{});const Rc="@firebase/firestore",bc="4.8.0";/**
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
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let In="11.10.0";/**
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
 */const zt=new eo("@firebase/firestore");function tn(){return zt.logLevel}function O(n,...e){if(zt.logLevel<=W.DEBUG){const t=e.map(ho);zt.debug(`Firestore (${In}): ${n}`,...t)}}function rt(n,...e){if(zt.logLevel<=W.ERROR){const t=e.map(ho);zt.error(`Firestore (${In}): ${n}`,...t)}}function wt(n,...e){if(zt.logLevel<=W.WARN){const t=e.map(ho);zt.warn(`Firestore (${In}): ${n}`,...t)}}function ho(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Su(n,r,t)}function Su(n,e,t){let r=`FIRESTORE (${In}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw rt(r),new Error(r)}function J(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Su(e,i,r)}function j(n,e){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ru{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ug{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class Bg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jg{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ft,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ft)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Ru(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class qg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $g{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new qg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Cc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Cc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Hg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function bu(){return new TextEncoder}/**
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
 */class fo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Hg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function $(n,e){return n<e?-1:n>e?1:0}function xs(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return $(r,i);{const o=bu(),a=Wg(o.encode(Pc(n,t)),o.encode(Pc(e,t)));return a!==0?a:$(r,i)}}t+=r>65535?2:1}return $(n.length,e.length)}function Pc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Wg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return $(n[t],e[t]);return $(n.length,e.length)}function fn(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const kc="__name__";class Ue{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ue.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return $(e.length,t.length)}static compareSegments(e,t){const r=Ue.isNumericId(e),i=Ue.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):xs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tt.fromString(e.substring(4,e.length-2))}}class Y extends Ue{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Y(t)}static emptyPath(){return new Y([])}}const Gg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Ue{construct(e,t,r){return new me(e,t,r)}static isValidIdentifier(e){return Gg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kc}static keyField(){return new me([kc])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new M(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new M(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(Y.fromString(e))}static fromName(e){return new x(Y.fromString(e).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new Y(e.slice()))}}/**
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
 */function Cu(n,e,t){if(!t)throw new M(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Kg(n,e,t,r){if(e===!0&&r===!0)throw new M(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Vc(n){if(!x.isDocumentKey(n))throw new M(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dc(n){if(x.isDocumentKey(n))throw new M(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Vi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Ut(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vi(n);throw new M(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function _r(n,e){if(!Pu(n))throw new M(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new M(b.INVALID_ARGUMENT,t);return!0}/**
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
 */const Nc=-62135596800,Oc=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Oc);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nc)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Oc}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_r(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:le("string",ee._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ee(0,0))}static max(){return new B(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ir=-1;function Qg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new At(i,x.empty(),e)}function Jg(n){return new At(n.readTime,n.key,ir)}class At{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new At(B.min(),x.empty(),ir)}static max(){return new At(B.max(),x.empty(),ir)}}function Xg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
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
 */const Yg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function wn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Yg)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,r)=>{t(e)}))}static reject(e){return new C(((t,r)=>{r(e)}))}static waitFor(e){return new C(((t,r)=>{let i=0,o=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&t()}),(h=>r(h)))})),a=!0,o===i&&t()}))}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next((i=>i?C.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,o)=>{r.push(t.call(this,i,o))})),this.waitFor(r)}static mapArray(e,t){return new C(((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next((p=>{a[d]=p,++l,l===o&&r(a)}),(p=>i(p)))}}))}static doWhile(e,t){return new C(((r,i)=>{const o=()=>{e()===!0?t().next((()=>{o()}),i):r()};o()}))}}function e_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function An(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Di{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Di.ue=-1;/**
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
 */const po=-1;function Ni(n){return n==null}function di(n){return n===0&&1/n==-1/0}function t_(n){return typeof n=="number"&&Number.isInteger(n)&&!di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ku="";function n_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Mc(e)),e=r_(n.get(t),e);return Mc(e)}function r_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case ku:t+="";break;default:t+=o}}return t}function Mc(n){return n+ku+""}/**
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
 */function Lc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||pe.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}}class zr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pe{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??pe.RED,this.left=i??pe.EMPTY,this.right=o??pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new pe(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return pe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xc(this.data.getIterator())}getIteratorFrom(e){return new xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new Le([])}unionWith(e){let t=new he(me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Du extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Du("Invalid base64 string: "+o):o}})(e);return new ge(t)}static fromUint8Array(e){const t=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const i_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=i_.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rt(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
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
 */const Nu="server_timestamp",Ou="__type__",Mu="__previous_value__",Lu="__local_write_time__";function mo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ou])===null||t===void 0?void 0:t.stringValue)===Nu}function Oi(n){const e=n.mapValue.fields[Mu];return mo(e)?Oi(e):e}function sr(n){const e=St(n.mapValue.fields[Lu].timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class s_{constructor(e,t,r,i,o,a,l,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const fi="(default)";class or{constructor(e,t){this.projectId=e,this.database=t||fi}static empty(){return new or("","")}get isDefaultDatabase(){return this.database===fi}isEqual(e){return e instanceof or&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xu="__type__",o_="__max__",Hr={mapValue:{}},Fu="__vector__",pi="value";function bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mo(n)?4:c_(n)?9007199254740991:a_(n)?10:11:F(28295,{value:n})}function Ke(n,e){if(n===e)return!0;const t=bt(n);if(t!==bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sr(n).isEqual(sr(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=St(i.timestampValue),l=St(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return Rt(i.bytesValue).isEqual(Rt(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return oe(i.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return oe(i.integerValue)===oe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=oe(i.doubleValue),l=oe(o.doubleValue);return a===l?di(a)===di(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return fn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Lc(a)!==Lc(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ke(a[h],l[h])))return!1;return!0})(n,e);default:return F(52216,{left:n})}}function ar(n,e){return(n.values||[]).find((t=>Ke(t,e)))!==void 0}function pn(n,e){if(n===e)return 0;const t=bt(n),r=bt(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const l=oe(o.integerValue||o.doubleValue),h=oe(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return Fc(n.timestampValue,e.timestampValue);case 4:return Fc(sr(n),sr(e));case 5:return xs(n.stringValue,e.stringValue);case 6:return(function(o,a){const l=Rt(o),h=Rt(a);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=$(l[d],h[d]);if(p!==0)return p}return $(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const l=$(oe(o.latitude),oe(a.latitude));return l!==0?l:$(oe(o.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Uc(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var l,h,d,p;const v=o.fields||{},w=a.fields||{},P=(l=v[pi])===null||l===void 0?void 0:l.arrayValue,V=(h=w[pi])===null||h===void 0?void 0:h.arrayValue,L=$(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=V==null?void 0:V.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:Uc(P,V)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===Hr.mapValue&&a===Hr.mapValue)return 0;if(o===Hr.mapValue)return 1;if(a===Hr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const w=xs(h[v],p[v]);if(w!==0)return w;const P=pn(l[h[v]],d[p[v]]);if(P!==0)return P}return $(h.length,p.length)})(n.mapValue,e.mapValue);default:throw F(23264,{le:t})}}function Fc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=St(n),r=St(e),i=$(t.seconds,r.seconds);return i!==0?i:$(t.nanos,r.nanos)}function Uc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=pn(t[i],r[i]);if(o)return o}return $(t.length,r.length)}function mn(n){return Fs(n)}function Fs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=St(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Rt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return x.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Fs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Fs(t.fields[a])}`;return i+"}"})(n.mapValue):F(61005,{value:n})}function Zr(n){switch(bt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oi(n);return e?16+Zr(e):16;case 5:return 2*n.stringValue.length;case 6:return Rt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Zr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Wt(r.fields,((o,a)=>{i+=o.length+Zr(a)})),i})(n.mapValue);default:throw F(13486,{value:n})}}function Bc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Us(n){return!!n&&"integerValue"in n}function go(n){return!!n&&"arrayValue"in n}function jc(n){return!!n&&"nullValue"in n}function qc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ei(n){return!!n&&"mapValue"in n}function a_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[xu])===null||t===void 0?void 0:t.stringValue)===Fu}function Jn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Jn(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function c_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===o_}/**
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
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(t)}setAll(e){let t=me.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Jn(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ei(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Wt(t,((i,o)=>e[i]=o));for(const i of r)delete e[i]}clone(){return new Ve(Jn(this.value))}}function Uu(n){const e=[];return Wt(n.fields,((t,r)=>{const i=new me([t]);if(ei(r)){const o=Uu(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)})),new Le(e)}/**
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
 */class we{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new we(e,0,B.min(),B.min(),B.min(),Ve.empty(),0)}static newFoundDocument(e,t,r,i){return new we(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new we(e,2,t,B.min(),B.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new we(e,3,t,B.min(),B.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mi{constructor(e,t){this.position=e,this.inclusive=t}}function $c(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=pn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function zc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class gi{constructor(e,t="asc"){this.field=e,this.dir=t}}function l_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Bu{}class ce extends Bu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new h_(e,t,r):t==="array-contains"?new p_(e,r):t==="in"?new m_(e,r):t==="not-in"?new g_(e,r):t==="array-contains-any"?new __(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new d_(e,r):new f_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pn(t,this.value)):t!==null&&bt(this.value)===bt(t)&&this.matchesComparison(pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends Bu{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Fe(e,t)}matches(e){return ju(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ju(n){return n.op==="and"}function qu(n){return u_(n)&&ju(n)}function u_(n){for(const e of n.filters)if(e instanceof Fe)return!1;return!0}function Bs(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+mn(n.value);if(qu(n))return n.filters.map((e=>Bs(e))).join(",");{const e=n.filters.map((t=>Bs(t))).join(",");return`${n.op}(${e})`}}function $u(n,e){return n instanceof ce?(function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&Ke(r.value,i.value)})(n,e):n instanceof Fe?(function(r,i){return i instanceof Fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,l)=>o&&$u(a,i.filters[l])),!0):!1})(n,e):void F(19439)}function zu(n){return n instanceof ce?(function(t){return`${t.field.canonicalString()} ${t.op} ${mn(t.value)}`})(n):n instanceof Fe?(function(t){return t.op.toString()+" {"+t.getFilters().map(zu).join(" ,")+"}"})(n):"Filter"}class h_ extends ce{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class d_ extends ce{constructor(e,t){super(e,"in",t),this.keys=Hu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class f_ extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Hu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>x.fromName(r.referenceValue)))}class p_ extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return go(t)&&ar(t.arrayValue,this.value)}}class m_ extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ar(this.value.arrayValue,t)}}class g_ extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ar(this.value.arrayValue,t)}}class __ extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!go(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ar(this.value.arrayValue,r)))}}/**
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
 */class y_{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Pe=null}}function Hc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new y_(n,e,t,r,i,o,a)}function _o(n){const e=j(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Bs(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>mn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>mn(r))).join(",")),e.Pe=t}return e.Pe}function yo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!l_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$u(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zc(n.startAt,e.startAt)&&zc(n.endAt,e.endAt)}function js(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class yr{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function v_(n,e,t,r,i,o,a,l){return new yr(n,e,t,r,i,o,a,l)}function vo(n){return new yr(n)}function Wc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wu(n){return n.collectionGroup!==null}function Xn(n){const e=j(n);if(e.Te===null){e.Te=[];const t=new Set;for(const o of e.explicitOrderBy)e.Te.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new he(me.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Te.push(new gi(o,r))})),t.has(me.keyField().canonicalString())||e.Te.push(new gi(me.keyField(),r))}return e.Te}function qe(n){const e=j(n);return e.Ie||(e.Ie=T_(e,Xn(n))),e.Ie}function T_(n,e){if(n.limitType==="F")return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new gi(i.field,o)}));const t=n.endAt?new mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mi(n.startAt.position,n.startAt.inclusive):null;return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qs(n,e){const t=n.filters.concat([e]);return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function _i(n,e,t){return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mi(n,e){return yo(qe(n),qe(e))&&n.limitType===e.limitType}function Gu(n){return`${_o(qe(n))}|lt:${n.limitType}`}function nn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>zu(i))).join(", ")}]`),Ni(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>mn(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>mn(i))).join(",")),`Target(${r})`})(qe(n))}; limitType=${n.limitType})`}function Li(n,e){return e.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,i){for(const o of Xn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,h){const d=$c(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,Xn(r),i)||r.endAt&&!(function(a,l,h){const d=$c(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,Xn(r),i))})(n,e)}function E_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ku(n){return(e,t)=>{let r=!1;for(const i of Xn(n)){const o=I_(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function I_(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?pn(h,d):F(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class Gt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wt(this.inner,((t,r)=>{for(const[i,o]of r)e(i,o)}))}isEmpty(){return Vu(this.inner)}size(){return this.innerSize}}/**
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
 */const w_=new re(x.comparator);function it(){return w_}const Qu=new re(x.comparator);function Hn(...n){let e=Qu;for(const t of n)e=e.insert(t.key,t);return e}function Ju(n){let e=Qu;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function xt(){return Yn()}function Xu(){return Yn()}function Yn(){return new Gt((n=>n.toString()),((n,e)=>n.isEqual(e)))}const A_=new re(x.comparator),S_=new he(x.comparator);function G(...n){let e=S_;for(const t of n)e=e.add(t);return e}const R_=new he($);function b_(){return R_}/**
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
 */function To(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(e)?"-0":e}}function Yu(n){return{integerValue:""+n}}function C_(n,e){return t_(e)?Yu(e):To(n,e)}/**
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
 */class xi{constructor(){this._=void 0}}function P_(n,e,t){return n instanceof cr?(function(i,o){const a={fields:{[Ou]:{stringValue:Nu},[Lu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&mo(o)&&(o=Oi(o)),o&&(a.fields[Mu]=o),{mapValue:a}})(t,e):n instanceof lr?eh(n,e):n instanceof ur?th(n,e):(function(i,o){const a=Zu(i,o),l=Gc(a)+Gc(i.Ee);return Us(a)&&Us(i.Ee)?Yu(l):To(i.serializer,l)})(n,e)}function k_(n,e,t){return n instanceof lr?eh(n,e):n instanceof ur?th(n,e):t}function Zu(n,e){return n instanceof yi?(function(r){return Us(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class cr extends xi{}class lr extends xi{constructor(e){super(),this.elements=e}}function eh(n,e){const t=nh(e);for(const r of n.elements)t.some((i=>Ke(i,r)))||t.push(r);return{arrayValue:{values:t}}}class ur extends xi{constructor(e){super(),this.elements=e}}function th(n,e){let t=nh(e);for(const r of n.elements)t=t.filter((i=>!Ke(i,r)));return{arrayValue:{values:t}}}class yi extends xi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Gc(n){return oe(n.integerValue||n.doubleValue)}function nh(n){return go(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class V_{constructor(e,t){this.field=e,this.transform=t}}function D_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof lr&&i instanceof lr||r instanceof ur&&i instanceof ur?fn(r.elements,i.elements,Ke):r instanceof yi&&i instanceof yi?Ke(r.Ee,i.Ee):r instanceof cr&&i instanceof cr})(n.transform,e.transform)}class N_{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fi{}function rh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sh(n.key,$e.none()):new vr(n.key,n.data,$e.none());{const t=n.data,r=Ve.empty();let i=new he(me.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Kt(n.key,r,new Le(i.toArray()),$e.none())}}function O_(n,e,t){n instanceof vr?(function(i,o,a){const l=i.value.clone(),h=Qc(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Kt?(function(i,o,a){if(!ti(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Qc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ih(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Zn(n,e,t,r){return n instanceof vr?(function(o,a,l,h){if(!ti(o.precondition,a))return l;const d=o.value.clone(),p=Jc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Kt?(function(o,a,l,h){if(!ti(o.precondition,a))return l;const d=Jc(o.fieldTransforms,h,a),p=a.data;return p.setAll(ih(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((v=>v.field)))})(n,e,t,r):(function(o,a,l){return ti(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function M_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Zu(r.transform,i||null);o!=null&&(t===null&&(t=Ve.empty()),t.set(r.field,o))}return t||null}function Kc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fn(r,i,((o,a)=>D_(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vr extends Fi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends Fi{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ih(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Qc(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,k_(a,l,t[i]))}return r}function Jc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,P_(o,a,e))}return r}class sh extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class L_ extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class x_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&O_(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xu();return this.mutations.forEach((i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=rh(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(B.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),G())}isEqual(e){return this.batchId===e.batchId&&fn(this.mutations,e.mutations,((t,r)=>Kc(t,r)))&&fn(this.baseMutations,e.baseMutations,((t,r)=>Kc(t,r)))}}class Eo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=(function(){return A_})();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Eo(e,t,r,i)}}/**
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
 */class F_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class U_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ae,K;function B_(n){switch(n){case b.OK:return F(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function oh(n){if(n===void 0)return rt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ae.OK:return b.OK;case ae.CANCELLED:return b.CANCELLED;case ae.UNKNOWN:return b.UNKNOWN;case ae.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ae.INTERNAL:return b.INTERNAL;case ae.UNAVAILABLE:return b.UNAVAILABLE;case ae.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ae.NOT_FOUND:return b.NOT_FOUND;case ae.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ae.ABORTED:return b.ABORTED;case ae.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ae.DATA_LOSS:return b.DATA_LOSS;default:return F(39323,{code:n})}}(K=ae||(ae={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const j_=new Tt([4294967295,4294967295],0);function Xc(n){const e=bu().encode(n),t=new vu;return t.update(e),new Uint8Array(t.digest())}function Yc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Tt([t,r],0),new Tt([i,o],0)]}class Io{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wn(`Invalid padding: ${t}`);if(r<0)throw new Wn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Tt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Tt.fromNumber(r)));return i.compare(j_)===1&&(i=new Tt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Xc(e),[r,i]=Yc(t);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,i,o);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Io(o,i,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=Xc(e),[r,i]=Yc(t);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,i,o);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ui{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Tr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ui(B.min(),i,new re($),it(),G())}}class Tr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Tr(r,t,G(),G(),G())}}/**
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
 */class ni{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class ah{constructor(e,t){this.targetId=e,this.De=t}}class ch{constructor(e,t,r=ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Zc{constructor(){this.ve=0,this.Ce=el(),this.Fe=ge.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=G(),t=G(),r=G();return this.Ce.forEach(((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:F(38017,{changeType:o})}})),new Tr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=el()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class q_{constructor(e){this.We=e,this.Ge=new Map,this.ze=it(),this.je=Wr(),this.Je=Wr(),this.He=new re($)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:F(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const o=i.target;if(js(o))if(r===0){const a=new x(o.path);this.Xe(t,a,we.newNoDocument(a,B.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),h=l?this.ut(l,e,a):1;if(h!==0){this.rt(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,l;try{a=Rt(r).toUint8Array()}catch(h){if(h instanceof Du)return wt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Io(a,i,o)}catch(h){return wt(h instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((o=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,o,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((o,a)=>{const l=this.st(a);if(l){if(o.current&&js(l.target)){const h=new x(l.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,we.newNoDocument(h,e))}o.Ne&&(t.set(a,o.Le()),o.ke())}}));let r=G();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(e)));const i=new Ui(e,t,this.He,this.ze,r);return this.ze=it(),this.je=Wr(),this.Je=Wr(),this.He=new re($),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Zc,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new he($),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new he($),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Zc),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Wr(){return new re(x.comparator)}function el(){return new re(x.comparator)}const $_={asc:"ASCENDING",desc:"DESCENDING"},z_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H_={and:"AND",or:"OR"};class W_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $s(n,e){return n.useProto3Json||Ni(e)?e:{value:e}}function vi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function G_(n,e){return vi(n,e.toTimestamp())}function ze(n){return J(!!n,49232),B.fromTimestamp((function(t){const r=St(t);return new ee(r.seconds,r.nanos)})(n))}function wo(n,e){return zs(n,e).canonicalString()}function zs(n,e){const t=(function(i){return new Y(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function uh(n){const e=Y.fromString(n);return J(mh(e),10190,{key:e.toString()}),e}function Hs(n,e){return wo(n.databaseId,e.path)}function As(n,e){const t=uh(e);if(t.get(1)!==n.databaseId.projectId)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(dh(t))}function hh(n,e){return wo(n.databaseId,e)}function K_(n){const e=uh(n);return e.length===4?Y.emptyPath():dh(e)}function Ws(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dh(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tl(n,e,t){return{name:Hs(n,e),fields:t.value.mapValue.fields}}function Q_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(J(p===void 0||typeof p=="string",58123),ge.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ge.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const p=d.code===void 0?b.UNKNOWN:oh(d.code);return new M(p,d.message||"")})(a);t=new ch(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=As(n,r.document.name),o=ze(r.document.updateTime),a=r.document.createTime?ze(r.document.createTime):B.min(),l=new Ve({mapValue:{fields:r.document.fields}}),h=we.newFoundDocument(i,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ni(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=As(n,r.document),o=r.readTime?ze(r.readTime):B.min(),a=we.newNoDocument(i,o),l=r.removedTargetIds||[];t=new ni([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=As(n,r.document),o=r.removedTargetIds||[];t=new ni([],o,i,null)}else{if(!("filter"in e))return F(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new U_(i,o),l=r.targetId;t=new ah(l,a)}}return t}function J_(n,e){let t;if(e instanceof vr)t={update:tl(n,e.key,e.value)};else if(e instanceof sh)t={delete:Hs(n,e.key)};else if(e instanceof Kt)t={update:tl(n,e.key,e.data),updateMask:sy(e.fieldMask)};else{if(!(e instanceof L_))return F(16599,{Rt:e.type});t={verify:Hs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof cr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof yi)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw F(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:G_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(n,e.precondition)),t}function X_(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map((t=>(function(i,o){let a=i.updateTime?ze(i.updateTime):ze(o);return a.isEqual(B.min())&&(a=ze(o)),new N_(a,i.transformResults||[])})(t,e)))):[]}function Y_(n,e){return{documents:[hh(n,e.path)]}}function Z_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=hh(n,i);const o=(function(d){if(d.length!==0)return ph(Fe.create(d,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(w){return{field:rn(w.field),direction:ny(w.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=$s(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:i}}function ey(n){let e=K_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){J(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=(function(v){const w=fh(v);return w instanceof Fe&&qu(w)?w.getFilters():[w]})(t.where));let a=[];t.orderBy&&(a=(function(v){return v.map((w=>(function(V){return new gi(sn(V.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(w)))})(t.orderBy));let l=null;t.limit&&(l=(function(v){let w;return w=typeof v=="object"?v.value:v,Ni(w)?null:w})(t.limit));let h=null;t.startAt&&(h=(function(v){const w=!!v.before,P=v.values||[];return new mi(P,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(v){const w=!v.before,P=v.values||[];return new mi(P,w)})(t.endAt)),v_(e,i,a,o,l,"F",h,d)}function ty(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=sn(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=sn(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=sn(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=sn(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ce.create(sn(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Fe.create(t.compositeFilter.filters.map((r=>fh(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(n):F(30097,{filter:n})}function ny(n){return $_[n]}function ry(n){return z_[n]}function iy(n){return H_[n]}function rn(n){return{fieldPath:n.canonicalString()}}function sn(n){return me.fromServerFormat(n.fieldPath)}function ph(n){return n instanceof ce?(function(t){if(t.op==="=="){if(qc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(jc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(jc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:ry(t.op),value:t.value}}})(n):n instanceof Fe?(function(t){const r=t.getFilters().map((i=>ph(i)));return r.length===1?r[0]:{compositeFilter:{op:iy(t.op),filters:r}}})(n):F(54877,{filter:n})}function sy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class mt{constructor(e,t,r,i,o=B.min(),a=B.min(),l=ge.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oy{constructor(e){this.gt=e}}function ay(n){const e=ey({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_i(e,e.limit,"L"):e}/**
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
 */class cy{constructor(){this.Dn=new ly}addToCollectionParentIndex(e,t){return this.Dn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(At.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(At.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class ly{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new he(Y.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new he(Y.comparator)).toArray()}}/**
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
 */const nl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gh=41943040;class be{static withCacheSize(e){return new be(e,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(gh,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);/**
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
 */class gn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new gn(0)}static ur(){return new gn(-1)}}/**
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
 */const rl="LruGarbageCollector",uy=1048576;function il([n,e],[t,r]){const i=$(n,t);return i===0?$(e,r):i}class hy{constructor(e){this.Tr=e,this.buffer=new he(il),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();il(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(rl,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){An(t)?O(rl,"Ignoring IndexedDB error during garbage collection: ",t):await wn(t)}await this.Rr(3e5)}))}}class fy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Di.ue);const r=new hy(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(nl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nl):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,a=Date.now(),this.nthSequenceNumber(e,i)))).next((v=>(r=v,l=Date.now(),this.removeTargets(e,r,t)))).next((v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(e,r)))).next((v=>(d=Date.now(),tn()<=W.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v}))))}}function py(n,e){return new fy(n,e)}/**
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
 */class my{constructor(){this.changes=new Gt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _y{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Zn(r.mutation,i,Le.empty(),ee.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,G()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=G()){const i=xt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((o=>{let a=Hn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=xt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,G())))}populateOverlays(e,t,r){const i=[];return r.forEach((o=>{t.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(e,i).next((o=>{o.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let o=it();const a=Yn(),l=(function(){return Yn()})();return t.forEach(((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Kt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Zn(p.mutation,d,p.mutation.getFieldMask(),ee.now())):a.set(d.key,Le.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>{var v;return l.set(d,new gy(p,(v=a.get(d))!==null&&v!==void 0?v:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Yn();let i=new re(((a,l)=>a-l)),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||Le.empty();p=l.applyToLocalView(d,p),r.set(h,p);const v=(i.get(l.batchId)||G()).add(h);i=i.insert(l.batchId,v)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,v=Xu();p.forEach((w=>{if(!o.has(w)){const P=rh(t.get(w),r.get(w));P!==null&&v.set(w,P),o=o.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):C.resolve(xt());let l=ir,h=o;return a.next((d=>C.forEach(d,((p,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next((w=>{h=h.insert(p,w)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,h,d,G()))).next((p=>({batchId:l,changes:Ju(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((r=>{let i=Hn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Hn();return this.indexManager.getCollectionParents(e,o).next((l=>C.forEach(l,(h=>{const d=(function(v,w){return new yr(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next((p=>{p.forEach(((v,w)=>{a=a.insert(v,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i)))).next((a=>{o.forEach(((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,we.newInvalidDocument(p)))}));let l=Hn();return a.forEach(((h,d)=>{const p=o.get(h);p!==void 0&&Zn(p.mutation,d,Le.empty(),ee.now()),Li(t,d)&&(l=l.insert(h,d))})),l}))}}/**
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
 */class yy{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return C.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:ay(i.bundledQuery),readTime:ze(i.readTime)}})(t)),C.resolve()}}/**
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
 */class vy{constructor(){this.overlays=new re(x.comparator),this.kr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=xt();return C.forEach(t,(i=>this.getOverlay(e,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,o)=>{this.wt(e,t,o)})),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=xt(),o=t.length+1,a=new x(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new re(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=xt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=xt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,p)=>l.set(d,p))),!(l.size()>=i)););return C.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new F_(t,r));let o=this.kr.get(t);o===void 0&&(o=G(),this.kr.set(t,o)),this.kr.set(t,o.add(r.key))}}/**
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
 */class Ty{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class Ao{constructor(){this.qr=new he(de.Qr),this.$r=new he(de.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new de(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new de(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new x(new Y([])),r=new de(t,e),i=new de(t,e+1),o=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new x(new Y([])),r=new de(t,e),i=new de(t,e+1);let o=G();return this.$r.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new de(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return x.comparator(e.key,t.key)||$(e.Hr,t.Hr)}static Ur(e,t){return $(e.Hr,t.Hr)||x.comparator(e.key,t.key)}}/**
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
 */class Ey{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new he(de.Qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new x_(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new de(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?po:this.er-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,i],(a=>{const l=this.Zr(a.Hr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he($);return t.forEach((i=>{const o=new de(i,0),a=new de(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new de(new x(o),0);let l=new he($);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Hr)),!0)}),a),C.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){J(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(t.mutations,(i=>{const o=new de(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new de(t,0),i=this.Yr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Iy{constructor(e){this.ni=e,this.docs=(function(){return new re(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():we.newInvalidDocument(t))}getEntries(e,t){let r=it();return t.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():we.newInvalidDocument(i))})),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=it();const a=t.path,l=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Xg(Jg(p),r)<=0||(i.has(p.key)||Li(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,r,i){F(9500)}ri(e,t){return C.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new wy(this)}getSize(e){return C.resolve(this.size)}}class wy extends my{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),C.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Ay{constructor(e){this.persistence=e,this.ii=new Gt((t=>_o(t)),yo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new Ao,this.targetCount=0,this._i=gn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),C.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new gn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.hr(t),C.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),C.waitFor(o).next((()=>i))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach((a=>{o.push(i.markPotentiallyOrphaned(e,a))})),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.oi.containsKey(t))}}/**
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
 */class _h{constructor(e,t){this.ai={},this.overlays={},this.ui=new Di(0),this.ci=!1,this.ci=!0,this.li=new Ty,this.referenceDelegate=e(this),this.hi=new Ay(this),this.indexManager=new cy,this.remoteDocumentCache=(function(i){return new Iy(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new oy(t),this.Ti=new yy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Ey(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const i=new Sy(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(e,t){return C.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Sy extends Zg{constructor(e){super(),this.currentSequenceNumber=e}}class So{constructor(e){this.persistence=e,this.Ai=new Ao,this.Ri=null}static Vi(e){return new So(e)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,(r=>{const i=x.fromPath(r);return this.fi(e,i).next((o=>{o||t.removeEntry(i,B.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return C.or([()=>C.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ti{constructor(e,t){this.persistence=e,this.gi=new Gt((r=>n_(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=py(this,t)}static Vi(e,t){return new Ti(e,t)}Ii(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return C.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((o=>o?C.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,o.removeEntry(a,B.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zr(e.data.value)),t}Sr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ro{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=G(),i=G();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ro(e,t.fromCache,r,i)}}/**
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
 */class Ry{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class by{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return vf()?8:e_(Ae())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ps(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(e,t,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Ry;return this.ws(e,t,a).next((l=>{if(o.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>o.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(tn()<=W.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(tn()<=W.DEBUG&&O("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(tn()<=W.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qe(t))):C.resolve())}ps(e,t){if(Wc(t))return C.resolve(null);let r=qe(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=_i(t,null,"F"),r=qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=G(...o);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((h=>{const d=this.bs(t,l);return this.Ds(t,d,a,h.readTime)?this.ps(e,_i(t,null,"F")):this.vs(e,d,t,h)}))))})))))}ys(e,t,r,i){return Wc(t)||i.isEqual(B.min())?C.resolve(null):this.gs.getDocuments(e,r).next((o=>{const a=this.bs(t,o);return this.Ds(t,a,r,i)?C.resolve(null):(tn()<=W.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nn(t)),this.vs(e,a,t,Qg(i,ir)).next((l=>l)))}))}bs(e,t){let r=new he(Ku(e));return t.forEach(((i,o)=>{Li(e,o)&&(r=r.add(o))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(e,t,r){return tn()<=W.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",nn(t)),this.gs.getDocumentsMatchingQuery(e,t,At.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const bo="LocalStore",Cy=3e8;class Py{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new re($),this.Ms=new Gt((o=>_o(o)),yo),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _y(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function ky(n,e,t,r){return new Py(n,e,t,r)}async function yh(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=G();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Vy(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),o=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,p){const v=d.batch,w=v.keys();let P=C.resolve();return w.forEach((V=>{P=P.next((()=>p.getEntry(h,V))).next((L=>{const N=d.docVersions.get(V);J(N!==null,48541),L.version.compareTo(N)<0&&(v.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),p.addEntry(L)))}))})),P.next((()=>l.mutationQueue.removeMutationBatch(h,v)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function vh(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Dy(n,e){const t=j(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((p,v)=>{const w=i.get(v);if(!w)return;l.push(t.hi.removeMatchingKeys(o,p.removedDocuments,v).next((()=>t.hi.addMatchingKeys(o,p.addedDocuments,v))));let P=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?P=P.withResumeToken(ge.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(v,P),(function(L,N,z){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Cy?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(w,P,p)&&l.push(t.hi.updateTargetData(o,P))}));let h=it(),d=G();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))})),l.push(Ny(o,a,e.documentUpdates).next((p=>{h=p.Ls,d=p.ks}))),!r.isEqual(B.min())){const p=t.hi.getLastRemoteSnapshotVersion(o).next((v=>t.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(p)}return C.waitFor(l).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(t.Fs=i,o)))}function Ny(n,e,t){let r=G(),i=G();return t.forEach((o=>r=r.add(o))),e.getEntries(n,r).next((o=>{let a=it();return t.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(B.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):O(bo,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:i}}))}function Oy(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=po),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function My(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((o=>o?(i=o,C.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new mt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Gs(n,e,t){const r=j(n),i=r.Fs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!An(a))throw a;O(bo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function sl(n,e,t){const r=j(n);let i=B.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,p){const v=j(h),w=v.Ms.get(p);return w!==void 0?C.resolve(v.Fs.get(w)):v.hi.getTargetData(d,p)})(r,a,qe(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?o:G()))).next((l=>(Ly(r,E_(e),l),{documents:l,qs:o})))))}function Ly(n,e,t){let r=n.xs.get(e)||B.min();t.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(e,r)}class ol{constructor(){this.activeTargetIds=b_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xy{constructor(){this.Fo=new ol,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ol,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Fy{xo(e){}shutdown(){}}/**
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
 */const al="ConnectivityMonitor";class cl{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(al,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(al,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gr=null;function Ks(){return Gr===null?Gr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gr++,"0x"+Gr.toString(16)}/**
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
 */const Ss="RestConnection",Uy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class By{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===fi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,o){const a=Ks(),l=this.Go(e,t.toUriEncodedString());O(Ss,`Sending RPC '${e}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,i,o);const{host:d}=new URL(l),p=vn(d);return this.jo(e,l,h,r,p).then((v=>(O(Ss,`Received RPC '${e}' ${a}: `,v),v)),(v=>{throw wt(Ss,`RPC '${e}' ${a} failed with error: `,v,"url: ",l,"request:",r),v}))}Jo(e,t,r,i,o,a){return this.Wo(e,t,r,i,o)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+In})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,o)=>e[o]=i)),r&&r.headers.forEach(((i,o)=>e[o]=i))}Go(e,t){const r=Uy[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class jy{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ee="WebChannelConnection";class qy extends By{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,o){const a=Ks();return new Promise(((l,h)=>{const d=new Tu;d.setWithCredentials(!0),d.listenOnce(Eu.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Yr.NO_ERROR:const v=d.getResponseJson();O(Ee,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),l(v);break;case Yr.TIMEOUT:O(Ee,`RPC '${e}' ${a} timed out`),h(new M(b.DEADLINE_EXCEEDED,"Request time out"));break;case Yr.HTTP_ERROR:const w=d.getStatus();if(O(Ee,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const V=P==null?void 0:P.error;if(V&&V.status&&V.message){const L=(function(z){const q=z.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(q)>=0?q:b.UNKNOWN})(V.status);h(new M(L,V.message))}else h(new M(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new M(b.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(Ee,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(i);O(Ee,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)}))}P_(e,t,r){const i=Ks(),o=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Au(),l=wu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");O(Ee,`Creating RPC '${e}' stream ${i}: ${p}`,h);const v=a.createWebChannel(p,h);this.T_(v);let w=!1,P=!1;const V=new jy({Ho:N=>{P?O(Ee,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(w||(O(Ee,`Opening RPC '${e}' stream ${i} transport.`),v.open(),w=!0),O(Ee,`RPC '${e}' stream ${i} sending:`,N),v.send(N))},Yo:()=>v.close()}),L=(N,z,q)=>{N.listen(z,(H=>{try{q(H)}catch(te){setTimeout((()=>{throw te}),0)}}))};return L(v,zn.EventType.OPEN,(()=>{P||(O(Ee,`RPC '${e}' stream ${i} transport opened.`),V.s_())})),L(v,zn.EventType.CLOSE,(()=>{P||(P=!0,O(Ee,`RPC '${e}' stream ${i} transport closed`),V.__(),this.I_(v))})),L(v,zn.EventType.ERROR,(N=>{P||(P=!0,wt(Ee,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),V.__(new M(b.UNAVAILABLE,"The operation could not be completed")))})),L(v,zn.EventType.MESSAGE,(N=>{var z;if(!P){const q=N.data[0];J(!!q,16349);const H=q,te=(H==null?void 0:H.error)||((z=H[0])===null||z===void 0?void 0:z.error);if(te){O(Ee,`RPC '${e}' stream ${i} received error:`,te);const ke=te.status;let se=(function(_){const T=ae[_];if(T!==void 0)return oh(T)})(ke),E=te.message;se===void 0&&(se=b.INTERNAL,E="Unknown error status: "+ke+" with message "+te.message),P=!0,V.__(new M(se,E)),v.close()}else O(Ee,`RPC '${e}' stream ${i} received:`,q),V.a_(q)}})),L(l,Iu.STAT_EVENT,(N=>{N.stat===Ls.PROXY?O(Ee,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ls.NOPROXY&&O(Ee,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Rs(){return typeof document<"u"?document:null}/**
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
 */function Bi(n){return new W_(n,!0)}/**
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
 */class Th{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const ll="PersistentStream";class Eh{constructor(e,t,r,i,o,a,l,h){this.Fi=e,this.w_=r,this.S_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Th(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(rt(t.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new M(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return O(ll,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(O(ll,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $y extends Eh{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Q_(this.serializer,e),r=(function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?ze(a.readTime):B.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Ws(this.serializer),t.addTarget=(function(o,a){let l;const h=a.target;if(l=js(h)?{documents:Y_(o,h)}:{query:Z_(o,h).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=lh(o,a.resumeToken);const d=$s(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){l.readTime=vi(o,a.snapshotVersion.toTimestamp());const d=$s(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const r=ty(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Ws(this.serializer),t.removeTarget=e,this.k_(t)}}class zy extends Eh{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=X_(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Ws(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>J_(this.serializer,r)))};this.k_(t)}}/**
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
 */class Hy{}class Wy extends Hy{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,zs(t,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(b.UNKNOWN,o.toString())}))}Jo(e,t,r,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,zs(t,r),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(b.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Gy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rt(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ht="RemoteStore";class Ky{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Qt(this)&&(O(Ht,"Restarting streams for network reachability change."),await(async function(h){const d=j(h);d.Ia.add(4),await Er(d),d.Aa.set("Unknown"),d.Ia.delete(4),await ji(d)})(this))}))})),this.Aa=new Gy(r,i)}}async function ji(n){if(Qt(n))for(const e of n.da)await e(!0)}async function Er(n){for(const e of n.da)await e(!1)}function Ih(n,e){const t=j(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Vo(t)?ko(t):Sn(t).x_()&&Po(t,e))}function Co(n,e){const t=j(n),r=Sn(t);t.Ta.delete(e),r.x_()&&wh(t,e),t.Ta.size===0&&(r.x_()?r.B_():Qt(t)&&t.Aa.set("Unknown"))}function Po(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sn(n).H_(e)}function wh(n,e){n.Ra.$e(e),Sn(n).Y_(e)}function ko(n){n.Ra=new q_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Sn(n).start(),n.Aa.aa()}function Vo(n){return Qt(n)&&!Sn(n).M_()&&n.Ta.size>0}function Qt(n){return j(n).Ia.size===0}function Ah(n){n.Ra=void 0}async function Qy(n){n.Aa.set("Online")}async function Jy(n){n.Ta.forEach(((e,t)=>{Po(n,e)}))}async function Xy(n,e){Ah(n),Vo(n)?(n.Aa.la(e),ko(n)):n.Aa.set("Unknown")}async function Yy(n,e,t){if(n.Aa.set("Online"),e instanceof ch&&e.state===2&&e.cause)try{await(async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(n,e)}catch(r){O(Ht,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ei(n,r)}else if(e instanceof ni?n.Ra.Ye(e):e instanceof ah?n.Ra.it(e):n.Ra.et(e),!t.isEqual(B.min()))try{const r=await vh(n.localStore);t.compareTo(r)>=0&&await(function(o,a){const l=o.Ra.Pt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ta.get(d);p&&o.Ta.set(d,p.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const p=o.Ta.get(h);if(!p)return;o.Ta.set(h,p.withResumeToken(ge.EMPTY_BYTE_STRING,p.snapshotVersion)),wh(o,h);const v=new mt(p.target,h,d,p.sequenceNumber);Po(o,v)})),o.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){O(Ht,"Failed to raise snapshot:",r),await Ei(n,r)}}async function Ei(n,e,t){if(!An(e))throw e;n.Ia.add(1),await Er(n),n.Aa.set("Offline"),t||(t=()=>vh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(Ht,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ji(n)}))}function Sh(n,e){return e().catch((t=>Ei(n,t,e)))}async function qi(n){const e=j(n),t=Ct(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:po;for(;Zy(e);)try{const i=await Oy(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,ev(e,i)}catch(i){await Ei(e,i)}Rh(e)&&bh(e)}function Zy(n){return Qt(n)&&n.Pa.length<10}function ev(n,e){n.Pa.push(e);const t=Ct(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Rh(n){return Qt(n)&&!Ct(n).M_()&&n.Pa.length>0}function bh(n){Ct(n).start()}async function tv(n){Ct(n).na()}async function nv(n){const e=Ct(n);for(const t of n.Pa)e.X_(t.mutations)}async function rv(n,e,t){const r=n.Pa.shift(),i=Eo.from(r,e,t);await Sh(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await qi(n)}async function iv(n,e){e&&Ct(n).Z_&&await(async function(r,i){if((function(a){return B_(a)&&a!==b.ABORTED})(i.code)){const o=r.Pa.shift();Ct(r).N_(),await Sh(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await qi(r)}})(n,e),Rh(n)&&bh(n)}async function ul(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),O(Ht,"RemoteStore received new credentials");const r=Qt(t);t.Ia.add(3),await Er(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ji(t)}async function sv(n,e){const t=j(n);e?(t.Ia.delete(2),await ji(t)):e||(t.Ia.add(2),await Er(t),t.Aa.set("Unknown"))}function Sn(n){return n.Va||(n.Va=(function(t,r,i){const o=j(t);return o.ia(),new $y(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Zo:Qy.bind(null,n),e_:Jy.bind(null,n),n_:Xy.bind(null,n),J_:Yy.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Vo(n)?ko(n):n.Aa.set("Unknown")):(await n.Va.stop(),Ah(n))}))),n.Va}function Ct(n){return n.ma||(n.ma=(function(t,r,i){const o=j(t);return o.ia(),new zy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:tv.bind(null,n),n_:iv.bind(null,n),ea:nv.bind(null,n),ta:rv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await qi(n)):(await n.ma.stop(),n.Pa.length>0&&(O(Ht,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Do{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new Do(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function No(n,e){if(rt("AsyncQueue",`${e}: ${n}`),An(n))return new M(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class un{static emptySet(e){return new un(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=Hn(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new un;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class hl{constructor(){this.fa=new re(x.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):F(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class _n{constructor(e,t,r,i,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new _n(e,t,un.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class ov{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class av{constructor(){this.queries=dl(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=j(t),o=i.queries;i.queries=dl(),o.forEach(((a,l)=>{for(const h of l.wa)h.onError(r)}))})(this,new M(b.ABORTED,"Firestore shutting down"))}}function dl(){return new Gt((n=>Gu(n)),Mi)}async function cv(n,e){const t=j(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Sa()&&e.ba()&&(r=2):(o=new ov,r=e.ba()?0:1);try{switch(r){case 0:o.ya=await t.onListen(i,!0);break;case 1:o.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=No(a,`Initialization of query '${nn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,o),o.wa.push(e),e.va(t.onlineState),o.ya&&e.Ca(o.ya)&&Oo(t)}async function lv(n,e){const t=j(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.wa.indexOf(e);a>=0&&(o.wa.splice(a,1),o.wa.length===0?i=e.ba()?0:1:!o.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uv(n,e){const t=j(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&Oo(t)}function hv(n,e,t){const r=j(n),i=r.queries.get(e);if(i)for(const o of i.wa)o.onError(t);r.queries.delete(e)}function Oo(n){n.Da.forEach((e=>{e.next()}))}var Qs,fl;(fl=Qs||(Qs={})).Fa="default",fl.Cache="cache";class dv{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=_n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Qs.Cache}}/**
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
 */class Ch{constructor(e){this.key=e}}class Ph{constructor(e){this.key=e}}class fv{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=G(),this.mutatedKeys=G(),this.Xa=Ku(e),this.eu=new un(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new hl,i=t?t.eu:this.eu;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((p,v)=>{const w=i.get(p),P=Li(this.query,v)?v:null,V=!!w&&this.mutatedKeys.has(w.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let N=!1;w&&P?w.data.isEqual(P.data)?V!==L&&(r.track({type:3,doc:P}),N=!0):this.iu(w,P)||(r.track({type:2,doc:P}),N=!0,(h&&this.Xa(P,h)>0||d&&this.Xa(P,d)<0)&&(l=!0)):!w&&P?(r.track({type:0,doc:P}),N=!0):w&&!P&&(r.track({type:1,doc:w}),N=!0,(h||d)&&(l=!0)),N&&(P?(a=a.add(P),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:l,mutatedKeys:o}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,v)=>(function(P,V){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:N})}};return L(P)-L(V)})(p.type,v.type)||this.Xa(p.doc,v.doc))),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],h=this.Za.size===0&&this.current&&!i?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new _n(this.query,e.eu,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new hl,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=G(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Ph(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Ch(r))})),t}uu(e){this.Ha=e.qs,this.Za=G();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return _n.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Mo="SyncEngine";class pv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class mv{constructor(e){this.key=e,this.lu=!1}}class gv{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Gt((l=>Gu(l)),Mi),this.Tu=new Map,this.Iu=new Set,this.du=new re(x.comparator),this.Eu=new Map,this.Au=new Ao,this.Ru={},this.Vu=new Map,this.mu=gn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function _v(n,e,t=!0){const r=Mh(n);let i;const o=r.Pu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await kh(r,e,t,!0),i}async function yv(n,e){const t=Mh(n);await kh(t,e,!0,!1)}async function kh(n,e,t,r){const i=await My(n.localStore,qe(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await vv(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ih(n.remoteStore,i),l}async function vv(n,e,t,r,i){n.gu=(v,w,P)=>(async function(L,N,z,q){let H=N.view.nu(z);H.Ds&&(H=await sl(L.localStore,N.query,!1).then((({documents:E})=>N.view.nu(E,H))));const te=q&&q.targetChanges.get(N.targetId),ke=q&&q.targetMismatches.get(N.targetId)!=null,se=N.view.applyChanges(H,L.isPrimaryClient,te,ke);return ml(L,N.targetId,se._u),se.snapshot})(n,v,w,P);const o=await sl(n.localStore,e,!0),a=new fv(e,o.qs),l=a.nu(o.documents),h=Tr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);ml(n,t,d._u);const p=new pv(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function Tv(n,e,t){const r=j(n),i=r.Pu.get(e),o=r.Tu.get(i.targetId);if(o.length>1)return r.Tu.set(i.targetId,o.filter((a=>!Mi(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Co(r.remoteStore,i.targetId),Js(r,i.targetId)})).catch(wn)):(Js(r,i.targetId),await Gs(r.localStore,i.targetId,!0))}async function Ev(n,e){const t=j(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Co(t.remoteStore,r.targetId))}async function Iv(n,e,t){const r=Pv(n);try{const i=await(function(a,l){const h=j(a),d=ee.now(),p=l.reduce(((P,V)=>P.add(V.key)),G());let v,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let V=it(),L=G();return h.Os.getEntries(P,p).next((N=>{V=N,V.forEach(((z,q)=>{q.isValidDocument()||(L=L.add(z))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,V))).next((N=>{v=N;const z=[];for(const q of l){const H=M_(q,v.get(q.key).overlayedDocument);H!=null&&z.push(new Kt(q.key,H,Uu(H.value.mapValue),$e.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,z,l)})).next((N=>{w=N;const z=N.applyToLocalDocumentSet(v,L);return h.documentOverlayCache.saveOverlays(P,N.batchId,z)}))})).then((()=>({batchId:w.batchId,changes:Ju(v)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(a,l,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new re($)),d=d.insert(l,h),a.Ru[a.currentUser.toKey()]=d})(r,i.batchId,t),await Ir(r,i.changes),await qi(r.remoteStore)}catch(i){const o=No(i,"Failed to persist write");t.reject(o)}}async function Vh(n,e){const t=j(n);try{const r=await Dy(t.localStore,e);e.targetChanges.forEach(((i,o)=>{const a=t.Eu.get(o);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?J(a.lu,14607):i.removedDocuments.size>0&&(J(a.lu,42227),a.lu=!1))})),await Ir(t,r,e)}catch(r){await wn(r)}}function pl(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((o,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const h=j(a);h.onlineState=l;let d=!1;h.queries.forEach(((p,v)=>{for(const w of v.wa)w.va(l)&&(d=!0)})),d&&Oo(h)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wv(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),o=i&&i.key;if(o){let a=new re(x.comparator);a=a.insert(o,we.newNoDocument(o,B.min()));const l=G().add(o),h=new Ui(B.min(),new Map,new re($),a,l);await Vh(r,h),r.du=r.du.remove(o),r.Eu.delete(e),Lo(r)}else await Gs(r.localStore,e,!1).then((()=>Js(r,e,t))).catch(wn)}async function Av(n,e){const t=j(n),r=e.batch.batchId;try{const i=await Vy(t.localStore,e);Nh(t,r,null),Dh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ir(t,i)}catch(i){await wn(i)}}async function Sv(n,e,t){const r=j(n);try{const i=await(function(a,l){const h=j(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next((v=>(J(v!==null,37113),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>h.localDocuments.getDocuments(d,p)))}))})(r.localStore,e);Nh(r,e,t),Dh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ir(r,i)}catch(i){await wn(i)}}function Dh(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Nh(n,e,t){const r=j(n);let i=r.Ru[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Js(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Oh(n,r)}))}function Oh(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Co(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Lo(n))}function ml(n,e,t){for(const r of t)r instanceof Ch?(n.Au.addReference(r.key,e),Rv(n,r)):r instanceof Ph?(O(Mo,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Oh(n,r.key)):F(19791,{yu:r})}function Rv(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(O(Mo,"New document in limbo: "+t),n.Iu.add(r),Lo(n))}function Lo(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new x(Y.fromString(e)),r=n.mu.next();n.Eu.set(r,new mv(t)),n.du=n.du.insert(t,r),Ih(n.remoteStore,new mt(qe(vo(t.path)),r,"TargetPurposeLimboResolution",Di.ue))}}async function Ir(n,e,t){const r=j(n),i=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,h)=>{a.push(r.gu(h,e,t).then((d=>{var p;if((d||t)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){i.push(d);const v=Ro.Es(h.targetId,d);o.push(v)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(h,d){const p=j(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>C.forEach(d,(w=>C.forEach(w.Is,(P=>p.persistence.referenceDelegate.addReference(v,w.targetId,P))).next((()=>C.forEach(w.ds,(P=>p.persistence.referenceDelegate.removeReference(v,w.targetId,P)))))))))}catch(v){if(!An(v))throw v;O(bo,"Failed to update sequence numbers: "+v)}for(const v of d){const w=v.targetId;if(!v.fromCache){const P=p.Fs.get(w),V=P.snapshotVersion,L=P.withLastLimboFreeSnapshotVersion(V);p.Fs=p.Fs.insert(w,L)}}})(r.localStore,o))}async function bv(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){O(Mo,"User change. New user:",e.toKey());const r=await yh(t.localStore,e);t.currentUser=e,(function(o,a){o.Vu.forEach((l=>{l.forEach((h=>{h.reject(new M(b.CANCELLED,a))}))})),o.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ir(t,r.Bs)}}function Cv(n,e){const t=j(n),r=t.Eu.get(e);if(r&&r.lu)return G().add(r.key);{let i=G();const o=t.Tu.get(e);if(!o)return i;for(const a of o){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function Mh(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wv.bind(null,e),e.hu.J_=uv.bind(null,e.eventManager),e.hu.pu=hv.bind(null,e.eventManager),e}function Pv(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Av.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sv.bind(null,e),e}class Ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return ky(this.persistence,new by,e.initialUser,this.serializer)}Du(e){return new _h(So.Vi,this.serializer)}bu(e){return new xy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ii.provider={build:()=>new Ii};class kv extends Ii{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){J(this.persistence.referenceDelegate instanceof Ti,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dy(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new _h((r=>Ti.Vi(r,t)),this.serializer)}}class Xs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bv.bind(null,this.syncEngine),await sv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new av})()}createDatastore(e){const t=Bi(e.databaseInfo.databaseId),r=(function(o){return new qy(o)})(e.databaseInfo);return(function(o,a,l,h){return new Wy(o,a,l,h)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,o,a,l){return new Ky(r,i,o,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>pl(this.syncEngine,t,0)),(function(){return cl.C()?new cl:new Fy})())}createSyncEngine(e,t){return(function(i,o,a,l,h,d,p){const v=new gv(i,o,a,l,h,d);return p&&(v.fu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const o=j(i);O(Ht,"RemoteStore shutting down."),o.Ia.add(5),await Er(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xs.provider={build:()=>new Xs};/**
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
 */class Vv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Pt="FirestoreClient";class Dv{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=fo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{O(Pt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O(Pt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=No(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function bs(n,e){n.asyncQueue.verifyOperationInProgress(),O(Pt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await yh(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{wt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{wt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function gl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Nv(n);O(Pt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ul(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>ul(e.remoteStore,i))),n._onlineComponents=e}async function Nv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Pt,"Using user provided OfflineComponentProvider");try{await bs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;wt("Error using user provided cache. Falling back to memory cache: "+t),await bs(n,new Ii)}}else O(Pt,"Using default OfflineComponentProvider"),await bs(n,new kv(void 0));return n._offlineComponents}async function Lh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Pt,"Using user provided OnlineComponentProvider"),await gl(n,n._uninitializedComponentsProvider._online)):(O(Pt,"Using default OnlineComponentProvider"),await gl(n,new Xs))),n._onlineComponents}function Ov(n){return Lh(n).then((e=>e.syncEngine))}async function _l(n){const e=await Lh(n),t=e.eventManager;return t.onListen=_v.bind(null,e.syncEngine),t.onUnlisten=Tv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ev.bind(null,e.syncEngine),t}/**
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
 */function xh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const yl=new Map;/**
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
 */const Fh="firestore.googleapis.com",vl=!0;class Tl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fh,this.ssl=vl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:vl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uy)throw new M(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $i{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ug;switch(r.type){case"firstParty":return new $g(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=yl.get(t);r&&(O("ComponentProvider","Removing Datastore"),yl.delete(t),r.terminate())})(this),Promise.resolve()}}function Mv(n,e,t,r={}){var i;n=Ut(n,$i);const o=vn(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&(Nl(`https://${h}`),Ol("Firestore",!0)),a.host!==Fh&&a.host!==h&&wt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!jt(d,l)&&(n._setSettings(d),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=Ie.MOCK_USER;else{p=uf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new M(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Ie(w)}n._authCredentials=new Bg(new Ru(p,v))}}/**
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
 */class Jt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jt(this.firestore,e,this._query)}}class ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(_r(t,ue._jsonSchema))return new ue(e,r||null,new x(Y.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:le("string",ue._jsonSchemaVersion),referencePath:le("string")};class Et extends Jt{constructor(e,t,r){super(e,t,vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new x(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function Uh(n,e,...t){if(n=Ce(n),Cu("collection","path",e),n instanceof $i){const r=Y.fromString(e,...t);return Dc(r),new Et(n,null,r)}{if(!(n instanceof ue||n instanceof Et))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return Dc(r),new Et(n.firestore,null,r)}}function Bh(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=fo.newId()),Cu("doc","path",e),n instanceof $i){const r=Y.fromString(e,...t);return Vc(r),new ue(n,null,new x(r))}{if(!(n instanceof ue||n instanceof Et))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(e,...t));return Vc(r),new ue(n.firestore,n instanceof Et?n.converter:null,new x(r))}}/**
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
 */const El="AsyncQueue";class Il{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Th(this,"async_queue_retry"),this.oc=()=>{const r=Rs();r&&O(El,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Rs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Rs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ft;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!An(e))throw e;O(El,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,rt("INTERNAL UNHANDLED ERROR: ",wl(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Do.createAndSchedule(this,e,t,r,(o=>this.lc(o)));return this.ec.push(i),i}ac(){this.tc&&F(47125,{hc:wl(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function wl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function Al(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1})(n,["next","error","complete"])}class hr extends $i{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Il,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Il(e),this._firestoreClient=void 0,await e}}}function Lv(n,e){const t=typeof n=="object"?n:Fl(),r=typeof n=="string"?n:fi,i=no(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=cf("firestore");o&&Mv(i,...o)}return i}function jh(n){if(n._terminated)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xv(n),n._firestoreClient}function xv(n){var e,t,r;const i=n._freezeSettings(),o=(function(l,h,d,p){return new s_(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xh(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Dv(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(ge.fromBase64String(e))}catch(t){throw new M(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_r(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:le("string",De._jsonSchemaVersion),bytes:le("string")};/**
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
 */class xo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fo{constructor(e){this._methodName=e}}/**
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
 */class He{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:He._jsonSchemaVersion}}static fromJSON(e){if(_r(e,He._jsonSchema))return new He(e.latitude,e.longitude)}}He._jsonSchemaVersion="firestore/geoPoint/1.0",He._jsonSchema={type:le("string",He._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
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
 */class We{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_r(e,We._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new We(e.vectorValues);throw new M(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:le("string",We._jsonSchemaVersion),vectorValues:le("object")};/**
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
 */const Fv=/^__.*__$/;class Uv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new vr(e,this.data,t,this.fieldTransforms)}}function qh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:n})}}class Uo{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Uo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return wi(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(qh(this.Ec)&&Fv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Bv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Bi(e)}Dc(e,t,r,i=!1){return new Uo({Ec:e,methodName:t,bc:r,path:me.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bo(n){const e=n._freezeSettings(),t=Bi(n._databaseId);return new Bv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $h(n,e,t,r,i,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,e,t,i);Wh("Data must be an object, but it was:",a,r);const l=zh(r,a);let h,d;if(o.merge)h=new Le(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const w=qv(e,v,t);if(!a.contains(w))throw new M(b.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);zv(p,w)||p.push(w)}h=new Le(p),d=a.fieldTransforms.filter((v=>h.covers(v.field)))}else h=null,d=a.fieldTransforms;return new Uv(new Ve(l),h,d)}class jo extends Fo{_toFieldTransform(e){return new V_(e.path,new cr)}isEqual(e){return e instanceof jo}}function jv(n,e,t,r=!1){return qo(t,n.Dc(r?4:3,e))}function qo(n,e){if(Hh(n=Ce(n)))return Wh("Unsupported field value:",e,n),zh(n,e);if(n instanceof Fo)return(function(r,i){if(!qh(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let h=qo(l,i.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return C_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ee.fromDate(r);return{timestampValue:vi(i.serializer,o)}}if(r instanceof ee){const o=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vi(i.serializer,o)}}if(r instanceof He)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:lh(i.serializer,r._byteString)};if(r instanceof ue){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof We)return(function(a,l){return{mapValue:{fields:{[xu]:{stringValue:Fu},[pi]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return To(l.serializer,d)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${Vi(r)}`)})(n,e)}function zh(n,e){const t={};return Vu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wt(n,((r,i)=>{const o=qo(i,e.Vc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function Hh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof He||n instanceof De||n instanceof ue||n instanceof Fo||n instanceof We)}function Wh(n,e,t){if(!Hh(t)||!Pu(t)){const r=Vi(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function qv(n,e,t){if((e=Ce(e))instanceof xo)return e._internalPath;if(typeof e=="string")return Gh(n,e);throw wi("Field path arguments must be of type string or ",n,!1,void 0,t)}const $v=new RegExp("[~\\*/\\[\\]]");function Gh(n,e,t){if(e.search($v)>=0)throw wi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xo(...e.split("."))._internalPath}catch{throw wi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new M(b.INVALID_ARGUMENT,l+n+h)}function zv(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Kh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Hv extends Kh{data(){return super.data()}}function Qh(n,e){return typeof e=="string"?Gh(n,e):e instanceof xo?e._internalPath:e._delegate._internalPath}/**
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
 */function Wv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $o{}class Jh extends $o{}function Gv(n,e,...t){let r=[];e instanceof $o&&r.push(e),r=r.concat(t),(function(o){const a=o.filter((h=>h instanceof Ho)).length,l=o.filter((h=>h instanceof zo)).length;if(a>1||a>0&&l>0)throw new M(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class zo extends Jh{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new zo(e,t,r)}_apply(e){const t=this._parse(e);return Xh(e._query,t),new Jt(e.firestore,e.converter,qs(e._query,t))}_parse(e){const t=Bo(e.firestore);return(function(o,a,l,h,d,p,v){let w;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new M(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Rl(v,p);const V=[];for(const L of v)V.push(Sl(h,o,L));w={arrayValue:{values:V}}}else w=Sl(h,o,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Rl(v,p),w=jv(l,a,v,p==="in"||p==="not-in");return ce.create(d,p,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ho extends $o{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ho(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,o){let a=i;const l=o.getFlattenedFilters();for(const h of l)Xh(a,h),a=qs(a,h)})(e._query,t),new Jt(e.firestore,e.converter,qs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wo extends Jh{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Wo(e,t,r)}_apply(e){return new Jt(e.firestore,e.converter,_i(e._query,this._limit,this._limitType))}}function Kv(n){return Wo._create("limit",n,"F")}function Sl(n,e,t){if(typeof(t=Ce(t))=="string"){if(t==="")throw new M(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wu(e)&&t.indexOf("/")!==-1)throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Y.fromString(t));if(!x.isDocumentKey(r))throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bc(n,new x(r))}if(t instanceof ue)return Bc(n,t._key);throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vi(t)}.`)}function Rl(n,e){if(!Array.isArray(n)||n.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xh(n,e){const t=(function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Qv{convertValue(e,t="none"){switch(bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wt(e,((i,o)=>{r[i]=this.convertValue(o,t)})),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[pi].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>oe(a.doubleValue)));return new We(o)}convertGeoPoint(e){return new He(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Oi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(sr(e));default:return null}}convertTimestamp(e){const t=St(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Y.fromString(e);J(mh(r),9688,{name:e});const i=new or(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(t)||rt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function Yh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Gn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bt extends Kh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Bt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Bt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Bt._jsonSchema={type:le("string",Bt._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class ri extends Bt{data(e={}){return super.data(e)}}class hn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Gn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ri(this._firestore,this._userDataWriter,r.key,r,new Gn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const h=new ri(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new ri(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Jv(l.type),doc:h,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Jv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:le("string",hn._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class Zh extends Qv{constructor(e){super(),this.firestore=e}convertBytes(e){return new De(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function Xv(n,e,t){n=Ut(n,ue);const r=Ut(n.firestore,hr),i=Yh(n.converter,e,t);return td(r,[$h(Bo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,$e.none())])}function ed(n,e){const t=Ut(n.firestore,hr),r=Bh(n),i=Yh(n.converter,e);return td(t,[$h(Bo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,$e.exists(!1))]).then((()=>r))}function Yv(n,...e){var t,r,i;n=Ce(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Al(e[a])||(o=e[a++]);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Al(e[a])){const v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let h,d,p;if(n instanceof ue)d=Ut(n.firestore,hr),p=vo(n._key.path),h={next:v=>{e[a]&&e[a](Zv(d,n,v))},error:e[a+1],complete:e[a+2]};else{const v=Ut(n,Jt);d=Ut(v.firestore,hr),p=v._query;const w=new Zh(d);h={next:P=>{e[a]&&e[a](new hn(d,w,v,P))},error:e[a+1],complete:e[a+2]},Wv(n._query)}return(function(w,P,V,L){const N=new Vv(L),z=new dv(P,N,V);return w.asyncQueue.enqueueAndForget((async()=>cv(await _l(w),z))),()=>{N.Ou(),w.asyncQueue.enqueueAndForget((async()=>lv(await _l(w),z)))}})(jh(d),p,l,h)}function td(n,e){return(function(r,i){const o=new Ft;return r.asyncQueue.enqueueAndForget((async()=>Iv(await Ov(r),i,o))),o.promise})(jh(n),e)}function Zv(n,e,t){const r=t.docs.get(e._key),i=new Zh(n);return new Bt(n,i,e._key,r,new Gn(t.hasPendingWrites,t.fromCache),e.converter)}function Go(){return new jo("serverTimestamp")}(function(e,t=!0){(function(i){In=i})(Tn),dn(new qt("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new hr(new jg(r.getProvider("auth-internal")),new zg(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new or(d.options.projectId,p)})(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),yt(Rc,bc,e),yt(Rc,bc,"esm2017")})();const Ys={apiKey:"AIzaSyBvbaMFA4djEQ-797Hzmc4GWhFGY5zSScw",authDomain:"mingleph-6be1d.firebaseapp.com",databaseURL:"https://mingleph-6be1d-default-rtdb.firebaseio.com",projectId:"mingleph-6be1d",storageBucket:"mingleph-6be1d.firebasestorage.app",messagingSenderId:"145139207835",appId:"1:145139207835:web:211512babc83aee415803e",measurementId:"G-G5K3VD08KT"},eT="wss://mingleph-matchmaker.crisepifanio23.workers.dev/ws",nd=!Ys.apiKey.startsWith("PASTE_")&&!Ys.projectId.startsWith("PASTE_"),k=n=>document.querySelector(n),y={mode:"one",topics:[],user:null,roomId:null,queueId:null,nickname:"",listeners:[],pc:null,localStream:null,remoteStream:null,callUnsub:null,candidateUnsub:null,callId:null,callRole:null,handlingOffer:!1,cameraEnabled:!1,micEnabled:!1,socket:null,partner:null,connected:!1,intentionalClose:!1,pendingCandidates:[],remoteDescriptionSet:!1,starting:!1,leaving:!1,typingTimer:null,partnerTypingTimer:null,lastTypingSent:0,partnerTyping:!1};let yn=null,er=null;if(nd){const n=xl(Ys);yn=Lv(n),er=xg(n),Rm(er,e=>{e&&(y.user=e)})}const tT="Angeles City,Antipolo,Bacolod,Bacoor,Baguio,Batangas City,Biñan,Butuan,Cabanatuan,Cabuyao,Cadiz,Cagayan de Oro,Calamba,Calapan,Caloocan,Cavite City,Cebu City,Cotabato City,Dagupan,Danao,Dasmariñas,Davao City,Digos,Dipolog,Dumaguete,General Santos,Gingoog,Ilagan,Iligan,Iloilo City,Imus,Iriga,Isabela,Kabankalan,Kidapawan,Koronadal,La Carlota,Lamitan,Laoag,Lapu-Lapu,Las Piñas,Legazpi,Ligao,Lipa,Lucena,Makati,Malabon,Malaybalay,Malolos,Mandaluyong,Mandaue,Manila,Marawi,Marikina,Mati,Meycauayan,Muntinlupa,Naga (Camarines Sur),Naga (Cebu),Navotas,Olongapo,Ormoc,Oroquieta,Ozamiz,Pagadian,Palayan,Panabo,Parañaque,Pasay,Pasig,Passi,Puerto Princesa,Quezon City,Roxas City,Sagay,Samal,San Carlos (Negros Occidental),San Carlos (Pangasinan),San Fernando (La Union),San Fernando (Pampanga),San Jose,San Jose del Monte,San Juan,San Pablo,San Pedro,Santa Rosa,Santiago,Silay,Sipalay,Sorsogon City,Surigao City,Tabaco,Tabuk,Tacloban,Tacurong,Tagaytay,Tagbilaran,Taguig,Tagum,Talisay (Cebu),Talisay (Negros Occidental),Tanauan,Tandag,Tangub,Tanjay,Tarlac City,Tayabas,Toledo,Trece Martires,Tuguegarao,Urdaneta,Valencia,Valenzuela,Victorias,Vigan,Zamboanga City".split(",");for(const n of tT){const e=document.createElement("option");e.value=n,e.textContent=n,k("#location").append(e)}new URL(window.location.href);let zi=!1;function rd(){var e;zi=!1;const n=new URL(window.location.href);n.searchParams.delete("page"),n.searchParams.delete("profile"),window.history.replaceState({minglePage:"home"},"",n.pathname+n.search+n.hash),k("#chat-panel").classList.add("hidden"),(e=k("#home-page"))==null||e.classList.remove("hidden"),ud(),xe("")}function xe(n,e=""){const t=k("#setup-status");t.textContent=n,t.className=`status-line ${e}`}function ne(n,e=!0){k("#call-status").textContent=n,k("#call-status").classList.toggle("hidden",!e)}let $n=null;function nT(){try{const n=window.AudioContext||window.webkitAudioContext;if(!n)return;$n||($n=new n),$n.state==="suspended"&&$n.resume().catch(()=>{});const e=$n,t=e.createOscillator(),r=e.createGain();t.type="sine",t.frequency.setValueAtTime(880,e.currentTime),r.gain.setValueAtTime(.001,e.currentTime),r.gain.exponentialRampToValueAtTime(.15,e.currentTime+.02),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.2),t.connect(r),r.connect(e.destination),t.start(),t.stop(e.currentTime+.21),t.onended=()=>{t.disconnect(),r.disconnect()}}catch(n){console.warn("Match sound unavailable:",n)}}function id(){k("#chat-panel").classList.remove("hidden"),k("#chat-panel").scrollIntoView({behavior:"smooth",block:"start"})}function sd(){return k("#nickname").value.trim().replace(/[<>]/g,"").slice(0,24)||`Mingle${Math.floor(1e3+Math.random()*9e3)}`}function rT(){return(y.topics.length?y.topics:["general"]).map(n=>n.toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,24)).filter(Boolean).sort().join("-").slice(0,90)||"general"}function od(){const n=k("#topic-input").value.trim().replace(/^#+/,"").replace(/[<>]/g,"").slice(0,30);if(n){if(y.topics.length>=5)return xe("You can add up to 5 topics.","error");if(y.topics.some(e=>e.toLowerCase()===n.toLowerCase()))return xe("That topic is already added.","error");y.topics.push(n),k("#topic-input").value="",ad(),xe("")}}function ad(){k("#topic-count").textContent=`${y.topics.length}/5 ADDED`;const n=k("#topic-list");if(n.replaceChildren(),!y.topics.length){const e=document.createElement("span");e.className="topic-hint",e.textContent="Add up to 5 topics to help find your vibe.",n.append(e);return}y.topics.forEach((e,t)=>{const r=document.createElement("button");r.type="button",r.className="topic-chip",r.textContent=`#${e} ×`,r.title="Remove topic",r.addEventListener("click",()=>{y.topics.splice(t,1),ad()}),n.append(r)})}k("#add-topic").addEventListener("click",od);k("#topic-input").addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),od())});document.querySelectorAll(".mode-button").forEach(n=>{n.addEventListener("click",()=>{y.mode=n.dataset.mode,document.querySelectorAll(".mode-button").forEach(e=>{e.classList.toggle("active",e===n)}),xe("")})});async function cd(){if(!nd)throw new Error("Firebase is not configured. Check your Firebase web config.");if(er.currentUser)return y.user=er.currentUser,y.user;const n=await Tm(er);return y.user=n.user,n.user}function Ko(){y.listeners.forEach(n=>{try{n()}catch{}}),y.listeners=[]}function iT(n){y.listeners.push(n)}function ld(){let n=k("#typing-indicator");if(!n){n=document.createElement("div"),n.id="typing-indicator",n.className="typing-indicator",n.setAttribute("aria-live","polite"),n.style.cssText=`
      display: none;
      min-height: 20px;
      padding: 3px 14px 6px;
      font-size: 12px;
      color: #999;
    `;const e=k("#message-form");e&&e.before(n)}return n}function Ai(n){var r;const e=ld();if(y.partnerTypingTimer&&(clearTimeout(y.partnerTypingTimer),y.partnerTypingTimer=null),y.partnerTyping=!!n,!y.partnerTyping||!y.connected||y.mode!=="one"){e.textContent="",e.style.display="none";return}const t=((r=y.partner)==null?void 0:r.nickname)||"Your partner";e.textContent=`${t} is typing...`,e.style.display="block",y.partnerTypingTimer=setTimeout(()=>{y.partnerTyping=!1,e.textContent="",e.style.display="none",y.partnerTypingTimer=null},2500)}function Zs(n){y.mode!=="one"||!y.connected||kt({type:"typing",typing:!!n})}function Ge(){y.typingTimer&&(clearTimeout(y.typingTimer),y.typingTimer=null),y.partnerTypingTimer&&(clearTimeout(y.partnerTypingTimer),y.partnerTypingTimer=null),y.partnerTyping=!1,y.lastTypingSent=0;const n=k("#typing-indicator");n&&(n.textContent="",n.style.display="none")}function Hi(){y.typingTimer&&(clearTimeout(y.typingTimer),y.typingTimer=null),Zs(!1),y.lastTypingSent=0}ld();k("#message-input").addEventListener("input",()=>{if(y.mode!=="one"||!y.connected)return;if(!k("#message-input").value.trim()){Hi();return}const e=Date.now();e-y.lastTypingSent>=800&&(Zs(!0),y.lastTypingSent=e),y.typingTimer&&clearTimeout(y.typingTimer),y.typingTimer=setTimeout(()=>{Zs(!1),y.typingTimer=null,y.lastTypingSent=0},1500)});function ud(){Ge(),k("#chat-messages").innerHTML='<div class="empty-chat"><div class="loading-heart">♡</div><b>Ready when you are</b><span>Start a chat to meet someone new.</span></div>';const n=k("#partner-profile");n&&n.remove(),k("#message-input").disabled=!0,k("#send-message").disabled=!0,k("#chat-title").textContent="Chat",k("#chat-subtitle").textContent="Your conversation will appear here.",k("#chat-status").innerHTML="<i></i> Not connected"}function sT(){let n=k("#partner-profile");if(!n){n=document.createElement("div"),n.id="partner-profile",n.className="partner-profile";const a=k("#chat-title");a&&a.insertAdjacentElement("afterend",n)}const e=y.partner||{},t=[],r=typeof e.nickname=="string"?e.nickname.trim():"",i=typeof e.gender=="string"?e.gender.trim():"",o=typeof e.location=="string"?e.location.trim():"";r&&!/^Mingle\d{4}$/i.test(r)&&t.push(r),i&&t.push(i),o&&o.toLowerCase()!=="any city / philippines"&&t.push(o),n.textContent=t.join(" · "),n.classList.toggle("hidden",t.length===0)}function Qo(n,e){const t=document.createElement("div");t.className=`message${e?" mine":""}`;const r=document.createElement("small");r.textContent=n.nickname||"Mingle";const i=document.createElement("div");i.textContent=n.text||"",t.append(r,i),k("#chat-messages").append(t),k("#chat-messages").scrollTop=k("#chat-messages").scrollHeight}function oT(){k("#chat-messages").innerHTML='<div class="empty-chat"><div class="loading-heart">♡</div><b>You’re connected!</b><span>Walang hiya-hiya, ikaw na mauna! 😉</span></div>'}function hd(){return Uh(yn,"groupRooms",y.roomId,"messages")}function aT(){const n=Gv(hd(),Kv(100));iT(Yv(n,e=>{const t=e.docs.map(i=>({id:i.id,...i.data()})).sort((i,o)=>{var a,l,h,d;return(((l=(a=i.createdAt)==null?void 0:a.toMillis)==null?void 0:l.call(a))||0)-(((d=(h=o.createdAt)==null?void 0:h.toMillis)==null?void 0:d.call(h))||0)}),r=k("#chat-messages");if(r.replaceChildren(),!t.length){const i=document.createElement("div");i.className="empty-chat",i.innerHTML='<div class="loading-heart">♡</div><b>You’re connected!</b><span>Say kumusta to start the conversation.</span>',r.append(i)}t.forEach(i=>{var o;Qo(i,i.uid===((o=y.user)==null?void 0:o.uid))})},e=>{ne(`Message listener error: ${e.message}`)}))}function dd(n,e,t){y.mode=t,id(),k("#chat-title").textContent=n,k("#chat-subtitle").textContent=e,k("#chat-status").innerHTML="<i></i> Connected",k("#message-input").disabled=!1,k("#send-message").disabled=!1;const r=t==="one";["#voice-call","#video-call"].forEach(i=>{k(i).disabled=!r}),Wi(r&&y.connected),r?(oT(),ne("",!1)):(Ai(!1),aT(),ne("Voice and video calls are available in 1-on-1 chats.",!0))}async function cT(){await cd();const n=rT(),e=Bh(yn,"groupRooms",n);await Xv(e,{type:"group",topicKey:n,topics:y.topics,active:!0,updatedAt:Go()},{merge:!0}),y.roomId=n,dd(`Group: ${y.topics[0]||"General chika"}`,"Group room · Anyone with matching topics can join","group")}function kt(n){if(!y.socket||y.socket.readyState!==WebSocket.OPEN)return!1;try{return y.socket.send(JSON.stringify(n)),!0}catch(e){return console.warn("Could not send WebSocket message:",e),!1}}function Si(n=!0){const e=y.socket;if(y.intentionalClose=!0,y.connected=!1,Hi(),Ge(),y.partner=null,e){if(n&&e.readyState===WebSocket.OPEN)try{e.send(JSON.stringify({type:"end"}))}catch{}try{e.close()}catch{}}y.socket=null}function tr(n){k("#chat-status").innerHTML="";const e=document.createElement("i"),t=document.createElement("span");t.textContent=n,k("#chat-status").append(e,t)}function lT(n){var e;switch(n.type){case"connected":if(!y.user){xe("Preparing your account...","");return}kt({type:"join",profile:{uid:y.user.uid,nickname:y.nickname,gender:k("#gender").value,location:k("#location").value||"Any City / Philippines",topics:y.topics}});break;case"waiting":Ge(),tr("Searching for a partner"),k("#chat-title").textContent="Finding someone...",k("#chat-subtitle").textContent="Keep this page open while we match you.",k("#chat-messages").innerHTML='<div class="empty-chat"><div class="loading-heart">♡</div><b>Looking for your chat partner...</b><span>Matching may take a moment when few people are online.</span></div>',k("#message-input").disabled=!0,k("#send-message").disabled=!0;break;case"matched":{Ge(),y.connected=!0,y.roomId=n.roomId||null,y.partner=n.partner||{},nT();const t=y.partner.nickname||"Mingle";dd(`Chat with ${t}`,"You’re connected · Say kumusta!","one"),sT(),tr("Connected");break}case"chat":Ai(!1),Qo({nickname:n.sender||((e=y.partner)==null?void 0:e.nickname)||"Mingle",text:n.text},!1);break;case"typing":Ai(n.typing===!0);break;case"offer":dT(n);break;case"answer":fT(n);break;case"ice-candidate":hT(n);break;case"call-ended":Vt(!1),ne("The other person ended the call.");break;case"partner-left":y.connected=!1,Ge(),Vt(!1),tr("Partner disconnected"),k("#chat-title").textContent="Partner disconnected",k("#chat-subtitle").textContent="Select Next to look for someone else.",k("#message-input").disabled=!0,k("#send-message").disabled=!0,ne("Your chat partner left the conversation.");break;case"error":xe(n.message||"The matching service returned an error.","error");break;default:console.log("Worker message:",n)}}async function uT(){await cd(),y.mode="one",y.roomId=null,y.connected=!1,y.partner=null,y.intentionalClose=!1,Ge(),id(),k("#chat-title").textContent="Connecting...",k("#chat-subtitle").textContent="Connecting to MinglePH matching.",tr("Connecting"),k("#message-input").disabled=!0,k("#send-message").disabled=!0,await new Promise((n,e)=>{const t=new WebSocket(eT);y.socket=t;const r=setTimeout(()=>{t.readyState!==WebSocket.OPEN&&(t.close(),e(new Error("Connection timed out. Check your Worker URL and internet.")))},12e3);t.onopen=()=>{clearTimeout(r),n()},t.onerror=()=>{clearTimeout(r),e(new Error("Could not connect to the matching server. Check the Worker URL."))},t.onmessage=i=>{try{const o=JSON.parse(i.data);lT(o)}catch(o){console.warn("Invalid Worker message:",o)}},t.onclose=()=>{clearTimeout(r),y.socket===t&&(y.socket=null,y.connected=!1,Ge(),y.intentionalClose||(tr("Disconnected"),k("#message-input").disabled=!0,k("#send-message").disabled=!0,ne("Connection to the matching server was lost.")))}})}k("#message-form").addEventListener("submit",async n=>{n.preventDefault();const e=k("#message-input").value.trim();if(!(!e||e.length>1e3||!y.user)){if(y.mode==="one"){if(!y.connected)return ne("Wait until you are connected to a partner.");if(!kt({type:"chat",text:e}))return ne("Message failed. Your connection may have been lost.");Hi(),Ai(!1),Qo({nickname:y.nickname,text:e},!0),k("#message-input").value="";return}if(!(!y.roomId||!yn)){k("#message-input").value="";try{await ed(hd(),{uid:y.user.uid,nickname:y.nickname,text:e,createdAt:Go()})}catch(t){ne(`Message failed: ${t.message}`,!0)}}}});function Wi(n){k("#voice-call").disabled=!n||y.mode!=="one",k("#video-call").disabled=!n||y.mode!=="one",k("#toggle-mic").disabled=!y.localStream,k("#toggle-camera").disabled=!y.localStream,k("#end-call").disabled=!y.pc}async function fd(n){var e;if(!((e=navigator.mediaDevices)!=null&&e.getUserMedia))throw new Error("Camera/microphone needs HTTPS or localhost and a supported browser.");return navigator.mediaDevices.getUserMedia({audio:!0,video:n?{facingMode:"user"}:!1})}function pd(){const n=[{urls:"stun:stun.relay.metered.ca:80"},{urls:"turn:global.relay.metered.ca:80",username:"4ffe739f4a870a16875f6e08",credential:"AzXAWIhEJX18VFj0"},{urls:"turn:global.relay.metered.ca:80?transport=tcp",username:"4ffe739f4a870a16875f6e08",credential:"AzXAWIhEJX18VFj0"},{urls:"turn:global.relay.metered.ca:443",username:"4ffe739f4a870a16875f6e08",credential:"AzXAWIhEJX18VFj0"},{urls:"turns:global.relay.metered.ca:443?transport=tcp",username:"4ffe739f4a870a16875f6e08",credential:"AzXAWIhEJX18VFj0"}],e=new RTCPeerConnection({iceServers:n,iceCandidatePoolSize:10});return y.pc=e,y.remoteStream=new MediaStream,y.remoteDescriptionSet=!1,k("#remote-video").srcObject=y.remoteStream,e.ontrack=t=>{var i,o;(((o=(i=t.streams)==null?void 0:i[0])==null?void 0:o.getTracks())||[t.track]).forEach(a=>{y.remoteStream.getTracks().some(l=>l.id===a.id)||y.remoteStream.addTrack(a)}),k("#video-stage").classList.remove("hidden")},e.onicecandidate=t=>{t.candidate&&kt({type:"ice-candidate",candidate:t.candidate.toJSON()})},e.oniceconnectionstatechange=()=>{console.log("MinglePH ICE connection state:",e.iceConnectionState)},e.onconnectionstatechange=()=>{e.connectionState==="connected"?ne("Call connected. Keep being respectful."):e.connectionState==="connecting"?ne("Connecting call..."):["failed","disconnected"].includes(e.connectionState)&&ne("Call connection interrupted. Try ending and starting the call again.")},y.localStream&&y.localStream.getTracks().forEach(t=>{e.addTrack(t,y.localStream)}),e}async function md(){if(!y.pc||!y.remoteDescriptionSet)return;const n=y.pendingCandidates.splice(0);for(const e of n)try{await y.pc.addIceCandidate(new RTCIceCandidate(e))}catch(t){console.warn("Could not add queued ICE candidate:",t)}}async function hT(n){if(n.candidate){if(!y.pc||!y.remoteDescriptionSet){y.pendingCandidates.push(n.candidate);return}try{await y.pc.addIceCandidate(new RTCIceCandidate(n.candidate))}catch(e){console.warn("Could not add ICE candidate:",e)}}}async function gd(n){if(y.mode!=="one"||!y.connected)return ne("Connect to a 1-on-1 partner before calling.");y.pc&&await Vt(!0);try{y.localStream=await fd(n),y.cameraEnabled=n,y.micEnabled=!0,k("#local-video").srcObject=y.localStream,k("#video-stage").classList.remove("hidden"),k("#toggle-mic").textContent="Mute mic",k("#toggle-camera").textContent=n?"Camera off":"Camera on";const e=pd();y.callRole="caller";const t=await e.createOffer();if(await e.setLocalDescription(t),!kt({type:"offer",mode:n?"video":"voice",description:{type:t.type,sdp:t.sdp}}))throw new Error("The matching server is disconnected.");Wi(!0),ne(n?"Video call invitation sent.":"Voice call invitation sent.")}catch(e){await Vt(!1),ne(e.message||"Could not start the call. Check microphone/camera permissions.")}}async function dT(n){if(y.handlingOffer||y.pc||!n.description)return;if(!window.confirm(`${n.mode==="video"?"Video":"Voice"} call incoming. Accept?`)){kt({type:"call-ended"});return}y.handlingOffer=!0;try{const t=n.mode==="video";y.localStream=await fd(t),y.cameraEnabled=t,y.micEnabled=!0,k("#local-video").srcObject=y.localStream,k("#video-stage").classList.remove("hidden");const r=pd();y.callRole="callee",await r.setRemoteDescription(new RTCSessionDescription(n.description)),y.remoteDescriptionSet=!0,await md();const i=await r.createAnswer();if(await r.setLocalDescription(i),!kt({type:"answer",description:{type:i.type,sdp:i.sdp}}))throw new Error("The matching server is disconnected.");k("#toggle-mic").textContent="Mute mic",k("#toggle-camera").textContent=t?"Camera off":"Camera on",Wi(!0),ne("Call accepted. Connecting...")}catch(t){await Vt(!1),ne(`Could not accept the call: ${t.message}`)}finally{y.handlingOffer=!1}}async function fT(n){if(!(!y.pc||y.callRole!=="caller"||!n.description))try{await y.pc.setRemoteDescription(new RTCSessionDescription(n.description)),y.remoteDescriptionSet=!0,await md(),ne("Answer received. Connecting...")}catch(e){console.warn("Could not set remote answer:",e),ne("Could not connect the call. Try again.")}}async function Vt(n=!1){n&&y.pc&&kt({type:"call-ended"}),y.callUnsub&&y.callUnsub(),y.callUnsub=null,y.candidateUnsub&&y.candidateUnsub(),y.candidateUnsub=null,y.pc&&(y.pc.ontrack=null,y.pc.onicecandidate=null,y.pc.close()),y.pc=null,y.localStream&&y.localStream.getTracks().forEach(e=>{e.stop()}),y.localStream=null,y.remoteStream&&y.remoteStream.getTracks().forEach(e=>{e.stop()}),y.remoteStream=null,y.callId=null,y.callRole=null,y.cameraEnabled=!1,y.micEnabled=!1,y.pendingCandidates=[],y.remoteDescriptionSet=!1,k("#local-video").srcObject=null,k("#remote-video").srcObject=null,k("#video-stage").classList.add("hidden"),k("#toggle-mic").textContent="Mic on",k("#toggle-camera").textContent="Camera off",Wi(!!(y.connected&&y.mode==="one"))}k("#voice-call").addEventListener("click",()=>gd(!1));k("#video-call").addEventListener("click",()=>gd(!0));k("#toggle-mic").addEventListener("click",()=>{y.localStream&&(y.micEnabled=!y.micEnabled,y.localStream.getAudioTracks().forEach(n=>{n.enabled=y.micEnabled}),k("#toggle-mic").textContent=y.micEnabled?"Mute mic":"Unmute mic")});k("#toggle-camera").addEventListener("click",()=>{y.localStream&&(y.cameraEnabled=!y.cameraEnabled,y.localStream.getVideoTracks().forEach(n=>{n.enabled=y.cameraEnabled}),k("#toggle-camera").textContent=y.cameraEnabled?"Camera off":"Camera on")});k("#end-call").addEventListener("click",()=>Vt(!0));async function Jo(n=!1){if(y.leaving)return;y.leaving=!0;const e=y.mode;try{Hi(),Ge(),await Vt(!0),Ko(),e==="one"&&Si(!0),y.roomId=null,y.queueId=null,y.connected=!1,y.partner=null,ud(),ne("",!1),n&&await _d()}finally{y.leaving=!1}}async function _d(){Ko(),await Vt(!1),Ge(),y.roomId=null,y.queueId=null,y.mode==="group"?(y.socket&&Si(!0),await cT()):(y.socket&&Si(!0),await uT())}k("#leave-chat").addEventListener("click",async()=>{await Jo(!1),zi&&rd()});k("#next-chat").addEventListener("click",async()=>{await Jo(!0)});window.addEventListener("popstate",async()=>{zi&&(await Jo(!1),rd())});k("#start-chat").addEventListener("click",async()=>{var e;if(!k("#respect").checked)return xe("Please agree to follow the community rules before starting.","error");if(y.starting)return;y.nickname=sd(),zi=!0;const n=new URL(window.location.href);n.searchParams.delete("page"),n.searchParams.delete("profile"),window.history.pushState({minglePage:"chat"},"",n.pathname+n.search+n.hash),(e=k("#home-page"))==null||e.classList.add("hidden"),k("#chat-panel").classList.remove("hidden"),await pT()});async function pT(){if(y.starting)return;y.starting=!0;const n=k("#start-chat");n&&(n.disabled=!0,n.style.opacity=".65"),y.nickname=sd(),xe("Connecting...");try{await _d(),xe("")}catch(e){Si(!1),xe(e.message||"Could not connect. Check your Firebase and Worker setup.","error")}finally{y.starting=!1,n&&(n.disabled=!1,n.style.opacity="")}}k("#report-chat").addEventListener("click",async()=>{if(!y.roomId||!y.user||!yn)return ne("Join a chat first to report it.");const n=window.prompt("What are you reporting? (harassment, spam, inappropriate content, other)");if(n!=null&&n.trim())try{await ed(Uh(yn,"reports"),{reporterUid:y.user.uid,roomId:y.roomId,mode:y.mode,reason:n.trim().slice(0,300),createdAt:Go()}),ne("Report submitted. Thank you for helping keep MinglePH safer.")}catch(e){ne(`Could not submit report: ${e.message}`)}});window.addEventListener("beforeunload",()=>{if(Ge(),Ko(),y.socket)try{y.socket.close()}catch{}y.localStream&&y.localStream.getTracks().forEach(n=>{n.stop()}),y.remoteStream&&y.remoteStream.getTracks().forEach(n=>{n.stop()}),y.pc&&y.pc.close()});
