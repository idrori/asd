(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();var Ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ou(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Lc={exports:{}},bi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function Jy(){if(vh)return bi;vh=1;var c=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function s(u,d,f){var m=null;if(f!==void 0&&(m=""+f),d.key!==void 0&&(m=""+d.key),"key"in d){f={};for(var p in d)p!=="key"&&(f[p]=d[p])}else f=d;return d=f.ref,{$$typeof:c,type:u,key:m,ref:d!==void 0?d:null,props:f}}return bi.Fragment=l,bi.jsx=s,bi.jsxs=s,bi}var bh;function e0(){return bh||(bh=1,Lc.exports=Jy()),Lc.exports}var i=e0(),Mc={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function t0(){if(xh)return je;xh=1;var c=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),_=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,S={};function R(C,L,le){this.props=C,this.context=L,this.refs=S,this.updater=le||T}R.prototype.isReactComponent={},R.prototype.setState=function(C,L){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,L,"setState")},R.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function O(){}O.prototype=R.prototype;function z(C,L,le){this.props=C,this.context=L,this.refs=S,this.updater=le||T}var B=z.prototype=new O;B.constructor=z,g(B,R.prototype),B.isPureReactComponent=!0;var k=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function $(C,L,le){var ne=le.ref;return{$$typeof:c,type:C,key:L,ref:ne!==void 0?ne:null,props:le}}function oe(C,L){return $(C.type,L,C.props)}function ce(C){return typeof C=="object"&&C!==null&&C.$$typeof===c}function D(C){var L={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(le){return L[le]})}var Y=/\/+/g;function E(C,L){return typeof C=="object"&&C!==null&&C.key!=null?D(""+C.key):L.toString(36)}function W(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(H,H):(C.status="pending",C.then(function(L){C.status==="pending"&&(C.status="fulfilled",C.value=L)},function(L){C.status==="pending"&&(C.status="rejected",C.reason=L)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function I(C,L,le,ne,se){var Ee=typeof C;(Ee==="undefined"||Ee==="boolean")&&(C=null);var Ce=!1;if(C===null)Ce=!0;else switch(Ee){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(C.$$typeof){case c:case l:Ce=!0;break;case A:return Ce=C._init,I(Ce(C._payload),L,le,ne,se)}}if(Ce)return se=se(C),Ce=ne===""?"."+E(C,0):ne,k(se)?(le="",Ce!=null&&(le=Ce.replace(Y,"$&/")+"/"),I(se,L,le,"",function(ke){return ke})):se!=null&&(ce(se)&&(se=oe(se,le+(se.key==null||C&&C.key===se.key?"":(""+se.key).replace(Y,"$&/")+"/")+Ce)),L.push(se)),1;Ce=0;var Te=ne===""?".":ne+":";if(k(C))for(var we=0;we<C.length;we++)ne=C[we],Ee=Te+E(ne,we),Ce+=I(ne,L,le,Ee,se);else if(we=v(C),typeof we=="function")for(C=we.call(C),we=0;!(ne=C.next()).done;)ne=ne.value,Ee=Te+E(ne,we++),Ce+=I(ne,L,le,Ee,se);else if(Ee==="object"){if(typeof C.then=="function")return I(W(C),L,le,ne,se);throw L=String(C),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function j(C,L,le){if(C==null)return C;var ne=[],se=0;return I(C,ne,"","",function(Ee){return L.call(le,Ee,se++)}),ne}function J(C){if(C._status===-1){var L=C._result;L=L(),L.then(function(le){(C._status===0||C._status===-1)&&(C._status=1,C._result=le)},function(le){(C._status===0||C._status===-1)&&(C._status=2,C._result=le)}),C._status===-1&&(C._status=0,C._result=L)}if(C._status===1)return C._result.default;throw C._result}var q=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},me={map:j,forEach:function(C,L,le){j(C,function(){L.apply(this,arguments)},le)},count:function(C){var L=0;return j(C,function(){L++}),L},toArray:function(C){return j(C,function(L){return L})||[]},only:function(C){if(!ce(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return je.Activity=w,je.Children=me,je.Component=R,je.Fragment=s,je.Profiler=d,je.PureComponent=z,je.StrictMode=u,je.Suspense=b,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,je.__COMPILER_RUNTIME={__proto__:null,c:function(C){return P.H.useMemoCache(C)}},je.cache=function(C){return function(){return C.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(C,L,le){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ne=g({},C.props),se=C.key;if(L!=null)for(Ee in L.key!==void 0&&(se=""+L.key),L)!G.call(L,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&L.ref===void 0||(ne[Ee]=L[Ee]);var Ee=arguments.length-2;if(Ee===1)ne.children=le;else if(1<Ee){for(var Ce=Array(Ee),Te=0;Te<Ee;Te++)Ce[Te]=arguments[Te+2];ne.children=Ce}return $(C.type,se,ne)},je.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},je.createElement=function(C,L,le){var ne,se={},Ee=null;if(L!=null)for(ne in L.key!==void 0&&(Ee=""+L.key),L)G.call(L,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(se[ne]=L[ne]);var Ce=arguments.length-2;if(Ce===1)se.children=le;else if(1<Ce){for(var Te=Array(Ce),we=0;we<Ce;we++)Te[we]=arguments[we+2];se.children=Te}if(C&&C.defaultProps)for(ne in Ce=C.defaultProps,Ce)se[ne]===void 0&&(se[ne]=Ce[ne]);return $(C,Ee,se)},je.createRef=function(){return{current:null}},je.forwardRef=function(C){return{$$typeof:p,render:C}},je.isValidElement=ce,je.lazy=function(C){return{$$typeof:A,_payload:{_status:-1,_result:C},_init:J}},je.memo=function(C,L){return{$$typeof:h,type:C,compare:L===void 0?null:L}},je.startTransition=function(C){var L=P.T,le={};P.T=le;try{var ne=C(),se=P.S;se!==null&&se(le,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(H,q)}catch(Ee){q(Ee)}finally{L!==null&&le.types!==null&&(L.types=le.types),P.T=L}},je.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},je.use=function(C){return P.H.use(C)},je.useActionState=function(C,L,le){return P.H.useActionState(C,L,le)},je.useCallback=function(C,L){return P.H.useCallback(C,L)},je.useContext=function(C){return P.H.useContext(C)},je.useDebugValue=function(){},je.useDeferredValue=function(C,L){return P.H.useDeferredValue(C,L)},je.useEffect=function(C,L){return P.H.useEffect(C,L)},je.useEffectEvent=function(C){return P.H.useEffectEvent(C)},je.useId=function(){return P.H.useId()},je.useImperativeHandle=function(C,L,le){return P.H.useImperativeHandle(C,L,le)},je.useInsertionEffect=function(C,L){return P.H.useInsertionEffect(C,L)},je.useLayoutEffect=function(C,L){return P.H.useLayoutEffect(C,L)},je.useMemo=function(C,L){return P.H.useMemo(C,L)},je.useOptimistic=function(C,L){return P.H.useOptimistic(C,L)},je.useReducer=function(C,L,le){return P.H.useReducer(C,L,le)},je.useRef=function(C){return P.H.useRef(C)},je.useState=function(C){return P.H.useState(C)},je.useSyncExternalStore=function(C,L,le){return P.H.useSyncExternalStore(C,L,le)},je.useTransition=function(){return P.H.useTransition()},je.version="19.2.1",je}var Sh;function cu(){return Sh||(Sh=1,Mc.exports=t0()),Mc.exports}var fe=cu();const n0=ou(fe);var zc={exports:{}},xi={},Uc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function a0(){return Eh||(Eh=1,(function(c){function l(I,j){var J=I.length;I.push(j);e:for(;0<J;){var q=J-1>>>1,me=I[q];if(0<d(me,j))I[q]=j,I[J]=me,J=q;else break e}}function s(I){return I.length===0?null:I[0]}function u(I){if(I.length===0)return null;var j=I[0],J=I.pop();if(J!==j){I[0]=J;e:for(var q=0,me=I.length,C=me>>>1;q<C;){var L=2*(q+1)-1,le=I[L],ne=L+1,se=I[ne];if(0>d(le,J))ne<me&&0>d(se,le)?(I[q]=se,I[ne]=J,q=ne):(I[q]=le,I[L]=J,q=L);else if(ne<me&&0>d(se,J))I[q]=se,I[ne]=J,q=ne;else break e}}return j}function d(I,j){var J=I.sortIndex-j.sortIndex;return J!==0?J:I.id-j.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;c.unstable_now=function(){return f.now()}}else{var m=Date,p=m.now();c.unstable_now=function(){return m.now()-p}}var b=[],h=[],A=1,w=null,_=3,v=!1,T=!1,g=!1,S=!1,R=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function B(I){for(var j=s(h);j!==null;){if(j.callback===null)u(h);else if(j.startTime<=I)u(h),j.sortIndex=j.expirationTime,l(b,j);else break;j=s(h)}}function k(I){if(g=!1,B(I),!T)if(s(b)!==null)T=!0,H||(H=!0,D());else{var j=s(h);j!==null&&W(k,j.startTime-I)}}var H=!1,P=-1,G=5,$=-1;function oe(){return S?!0:!(c.unstable_now()-$<G)}function ce(){if(S=!1,H){var I=c.unstable_now();$=I;var j=!0;try{e:{T=!1,g&&(g=!1,O(P),P=-1),v=!0;var J=_;try{t:{for(B(I),w=s(b);w!==null&&!(w.expirationTime>I&&oe());){var q=w.callback;if(typeof q=="function"){w.callback=null,_=w.priorityLevel;var me=q(w.expirationTime<=I);if(I=c.unstable_now(),typeof me=="function"){w.callback=me,B(I),j=!0;break t}w===s(b)&&u(b),B(I)}else u(b);w=s(b)}if(w!==null)j=!0;else{var C=s(h);C!==null&&W(k,C.startTime-I),j=!1}}break e}finally{w=null,_=J,v=!1}j=void 0}}finally{j?D():H=!1}}}var D;if(typeof z=="function")D=function(){z(ce)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,E=Y.port2;Y.port1.onmessage=ce,D=function(){E.postMessage(null)}}else D=function(){R(ce,0)};function W(I,j){P=R(function(){I(c.unstable_now())},j)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(I){I.callback=null},c.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<I?Math.floor(1e3/I):5},c.unstable_getCurrentPriorityLevel=function(){return _},c.unstable_next=function(I){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var J=_;_=j;try{return I()}finally{_=J}},c.unstable_requestPaint=function(){S=!0},c.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=_;_=I;try{return j()}finally{_=J}},c.unstable_scheduleCallback=function(I,j,J){var q=c.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?q+J:q):J=q,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=J+me,I={id:A++,callback:j,priorityLevel:I,startTime:J,expirationTime:me,sortIndex:-1},J>q?(I.sortIndex=J,l(h,I),s(b)===null&&I===s(h)&&(g?(O(P),P=-1):g=!0,W(k,J-q))):(I.sortIndex=me,l(b,I),T||v||(T=!0,H||(H=!0,D()))),I},c.unstable_shouldYield=oe,c.unstable_wrapCallback=function(I){var j=_;return function(){var J=_;_=j;try{return I.apply(this,arguments)}finally{_=J}}}})(Fc)),Fc}var wh;function r0(){return wh||(wh=1,Uc.exports=a0()),Uc.exports}var Bc={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function i0(){if(Ah)return _t;Ah=1;var c=cu();function l(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)h+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var u={d:{f:s,r:function(){throw Error(l(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(b,h,A){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:w==null?null:""+w,children:b,containerInfo:h,implementation:A}}var m=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,_t.createPortal=function(b,h){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(l(299));return f(b,h,null,A)},_t.flushSync=function(b){var h=m.T,A=u.p;try{if(m.T=null,u.p=2,b)return b()}finally{m.T=h,u.p=A,u.d.f()}},_t.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(b,h))},_t.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},_t.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var A=h.as,w=p(A,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;A==="style"?u.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:_,fetchPriority:v}):A==="script"&&u.d.X(b,{crossOrigin:w,integrity:_,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},_t.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var A=p(h.as,h.crossOrigin);u.d.M(b,{crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(b)},_t.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var A=h.as,w=p(A,h.crossOrigin);u.d.L(b,A,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},_t.preloadModule=function(b,h){if(typeof b=="string")if(h){var A=p(h.as,h.crossOrigin);u.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(b)},_t.requestFormReset=function(b){u.d.r(b)},_t.unstable_batchedUpdates=function(b,h){return b(h)},_t.useFormState=function(b,h,A){return m.H.useFormState(b,h,A)},_t.useFormStatus=function(){return m.H.useHostTransitionStatus()},_t.version="19.2.1",_t}var Th;function s0(){if(Th)return Bc.exports;Th=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(l){console.error(l)}}return c(),Bc.exports=i0(),Bc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function l0(){if(Rh)return xi;Rh=1;var c=r0(),l=cu(),s=s0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(f(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return b(r),e;if(o===a)return b(r),t;o=o.sibling}throw Error(u(188))}if(n.return!==a.return)n=r,a=o;else{for(var y=!1,N=r.child;N;){if(N===n){y=!0,n=r,a=o;break}if(N===a){y=!0,a=r,n=o;break}N=N.sibling}if(!y){for(N=o.child;N;){if(N===n){y=!0,n=o,a=r;break}if(N===a){y=!0,a=o,n=r;break}N=N.sibling}if(!y)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),z=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function E(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case R:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case z:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:E(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return E(e(t))}catch{}}return null}var W=Array.isArray,I=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},q=[],me=-1;function C(e){return{current:e}}function L(e){0>me||(e.current=q[me],q[me]=null,me--)}function le(e,t){me++,q[me]=e.current,e.current=t}var ne=C(null),se=C(null),Ee=C(null),Ce=C(null);function Te(e,t){switch(le(Ee,t),le(se,e),le(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pp(t),e=$p(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(ne),le(ne,e)}function we(){L(ne),L(se),L(Ee)}function ke(e){e.memoizedState!==null&&le(Ce,e);var t=ne.current,n=$p(t,e.type);t!==n&&(le(se,e),le(ne,n))}function ze(e){se.current===e&&(L(ne),L(se)),Ce.current===e&&(L(Ce),mi._currentValue=J)}var bt,he;function x(e){if(bt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bt=t&&t[1]||"",he=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+e+he}var re=!1;function ae(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(ie){var te=ie}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(ie){te=ie}e.call(pe.prototype)}}else{try{throw Error()}catch(ie){te=ie}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(ie){if(ie&&te&&typeof ie.stack=="string")return[ie.stack,te.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),y=o[0],N=o[1];if(y&&N){var F=y.split(`
`),K=N.split(`
`);for(r=a=0;a<F.length&&!F[a].includes("DetermineComponentFrameRoot");)a++;for(;r<K.length&&!K[r].includes("DetermineComponentFrameRoot");)r++;if(a===F.length||r===K.length)for(a=F.length-1,r=K.length-1;1<=a&&0<=r&&F[a]!==K[r];)r--;for(;1<=a&&0<=r;a--,r--)if(F[a]!==K[r]){if(a!==1||r!==1)do if(a--,r--,0>r||F[a]!==K[r]){var ue=`
`+F[a].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=a&&0<=r);break}}}finally{re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?x(n):""}function U(e,t){switch(e.tag){case 26:case 27:case 5:return x(e.type);case 16:return x("Lazy");case 13:return e.child!==t&&t!==null?x("Suspense Fallback"):x("Suspense");case 19:return x("SuspenseList");case 0:case 15:return ae(e.type,!1);case 11:return ae(e.type.render,!1);case 1:return ae(e.type,!0);case 31:return x("Activity");default:return""}}function M(e){try{var t="",n=null;do t+=U(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var X=Object.prototype.hasOwnProperty,ge=c.unstable_scheduleCallback,ye=c.unstable_cancelCallback,ee=c.unstable_shouldYield,be=c.unstable_requestPaint,Se=c.unstable_now,xe=c.unstable_getCurrentPriorityLevel,Ne=c.unstable_ImmediatePriority,Xe=c.unstable_UserBlockingPriority,Ue=c.unstable_NormalPriority,Nt=c.unstable_LowPriority,Mn=c.unstable_IdlePriority,Gt=c.log,pa=c.unstable_setDisableYieldValue,et=null,gt=null;function Yt(e){if(typeof Gt=="function"&&pa(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(et,e)}catch{}}var it=Math.clz32?Math.clz32:Sl,Ui=Math.log,xl=Math.LN2;function Sl(e){return e>>>=0,e===0?32:31-(Ui(e)/xl|0)|0}var za=256,ha=262144,dn=4194304;function qt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var N=a&134217727;return N!==0?(a=N&~o,a!==0?r=qt(a):(y&=N,y!==0?r=qt(y):n||(n=N&~e,n!==0&&(r=qt(n))))):(N=a&~o,N!==0?r=qt(N):y!==0?r=qt(y):n||(n=a&~e,n!==0&&(r=qt(n)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:r}function Cr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Su(){var e=dn;return dn<<=1,(dn&62914560)===0&&(dn=4194304),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pm(e,t,n,a,r,o){var y=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var N=e.entanglements,F=e.expirationTimes,K=e.hiddenUpdates;for(n=y&~n;0<n;){var ue=31-it(n),pe=1<<ue;N[ue]=0,F[ue]=-1;var te=K[ue];if(te!==null)for(K[ue]=null,ue=0;ue<te.length;ue++){var ie=te[ue];ie!==null&&(ie.lane&=-536870913)}n&=~pe}a!==0&&Eu(e,a,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(y&~t))}function Eu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-it(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Au(e,t){var n=t&-t;return n=(n&42)!==0?1:wl(n),(n&(e.suspendedLanes|t))!==0?0:n}function wl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Al(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tu(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:dh(e.type))}function Ru(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var zn=Math.random().toString(36).slice(2),xt="__reactFiber$"+zn,It="__reactProps$"+zn,Ua="__reactContainer$"+zn,Tl="__reactEvents$"+zn,$m="__reactListeners$"+zn,Vm="__reactHandles$"+zn,_u="__reactResources$"+zn,Ir="__reactMarker$"+zn;function Rl(e){delete e[xt],delete e[It],delete e[Tl],delete e[$m],delete e[Vm]}function Fa(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ua]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qp(e);e!==null;){if(n=e[xt])return n;e=Qp(e)}return t}e=n,n=e.parentNode}return null}function Ba(e){if(e=e[xt]||e[Ua]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Pa(e){var t=e[_u];return t||(t=e[_u]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yt(e){e[Ir]=!0}var Cu=new Set,Nu={};function ma(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(Nu[e]=t,e=0;e<t.length;e++)Cu.add(t[e])}var Hm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Iu={},Du={};function Gm(e){return X.call(Du,e)?!0:X.call(Iu,e)?!1:Hm.test(e)?Du[e]=!0:(Iu[e]=!0,!1)}function Bi(e,t,n){if(Gm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function yn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ym(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(y){n=""+y,o.call(this,y)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(y){n=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _l(e){if(!e._valueTracker){var t=Ou(e)?"checked":"value";e._valueTracker=Ym(e,t,""+e[t])}}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ou(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qm=/[\n"\\]/g;function Qt(e){return e.replace(qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cl(e,t,n,a,r,o,y,N){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?Nl(e,y,Xt(t)):n!=null?Nl(e,y,Xt(n)):a!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+Xt(N):e.removeAttribute("name")}function ju(e,t,n,a,r,o,y,N){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){_l(e);return}n=n!=null?""+Xt(n):"",t=t!=null?""+Xt(t):n,N||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=N?e.checked:!!a,e.defaultChecked=!!a,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),_l(e)}function Nl(e,t,n){t==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Lu(e,t,n){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xt(n):""}function Mu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(W(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Xt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),_l(e)}function Ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Xm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Uu(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&zu(e,r,a)}else for(var o in t)t.hasOwnProperty(o)&&zu(e,o,t[o])}function Il(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(e){return Wm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vn(){}var Dl=null;function Ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,Ya=null;function Fu(e){var t=Ba(e);if(t&&(e=t.stateNode)){var n=e[It]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[It]||null;if(!r)throw Error(u(90));Cl(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&ku(a)}break e;case"textarea":Lu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var kl=!1;function Bu(e,t,n){if(kl)return e(t,n);kl=!0;try{var a=e(t);return a}finally{if(kl=!1,(Ga!==null||Ya!==null)&&(Is(),Ga&&(t=Ga,e=Ya,Ya=Ga=null,Fu(t),e)))for(t=0;t<e.length;t++)Fu(e[t])}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var a=n[It]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=!1;if(bn)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){jl=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{jl=!1}var Un=null,Ll=null,Hi=null;function Pu(){if(Hi)return Hi;var e,t=Ll,n=t.length,a,r="value"in Un?Un.value:Un.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var y=n-e;for(a=1;a<=y&&t[n-a]===r[o-a];a++);return Hi=r.slice(e,1<a?1-a:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function $u(){return!1}function Dt(e){function t(n,a,r,o,y){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=y,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(n=e[N],this[N]=n?n(o):o[N]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yi:$u,this.isPropagationStopped=$u,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Dt(ga),jr=w({},ga,{view:0,detail:0}),Zm=Dt(jr),Ml,zl,Lr,Xi=w({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Ml=e.screenX-Lr.screenX,zl=e.screenY-Lr.screenY):zl=Ml=0,Lr=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Vu=Dt(Xi),Km=w({},Xi,{dataTransfer:0}),Jm=Dt(Km),eg=w({},jr,{relatedTarget:0}),Ul=Dt(eg),tg=w({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=Dt(tg),ag=w({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=Dt(ag),ig=w({},ga,{data:0}),Hu=Dt(ig),sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=og[e])?!!t[e]:!1}function Fl(){return cg}var ug=w({},jr,{key:function(e){if(e.key){var t=sg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dg=Dt(ug),fg=w({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=Dt(fg),pg=w({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),hg=Dt(pg),mg=w({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=Dt(mg),yg=w({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=Dt(yg),bg=w({},ga,{newState:0,oldState:0}),xg=Dt(bg),Sg=[9,13,27,32],Bl=bn&&"CompositionEvent"in window,Mr=null;bn&&"documentMode"in document&&(Mr=document.documentMode);var Eg=bn&&"TextEvent"in window&&!Mr,Yu=bn&&(!Bl||Mr&&8<Mr&&11>=Mr),qu=" ",Xu=!1;function Qu(e,t){switch(e){case"keyup":return Sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qa=!1;function wg(e,t){switch(e){case"compositionend":return Wu(t);case"keypress":return t.which!==32?null:(Xu=!0,qu);case"textInput":return e=t.data,e===qu&&Xu?null:e;default:return null}}function Ag(e,t){if(qa)return e==="compositionend"||!Bl&&Qu(e,t)?(e=Pu(),Hi=Ll=Un=null,qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tg[e.type]:t==="textarea"}function Ku(e,t,n,a){Ga?Ya?Ya.push(a):Ya=[a]:Ga=a,t=zs(t,"onChange"),0<t.length&&(n=new qi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var zr=null,Ur=null;function Rg(e){Lp(e,0)}function Qi(e){var t=Dr(e);if(ku(t))return e}function Ju(e,t){if(e==="change")return t}var ed=!1;if(bn){var Pl;if(bn){var $l="oninput"in document;if(!$l){var td=document.createElement("div");td.setAttribute("oninput","return;"),$l=typeof td.oninput=="function"}Pl=$l}else Pl=!1;ed=Pl&&(!document.documentMode||9<document.documentMode)}function nd(){zr&&(zr.detachEvent("onpropertychange",ad),Ur=zr=null)}function ad(e){if(e.propertyName==="value"&&Qi(Ur)){var t=[];Ku(t,Ur,e,Ol(e)),Bu(Rg,t)}}function _g(e,t,n){e==="focusin"?(nd(),zr=t,Ur=n,zr.attachEvent("onpropertychange",ad)):e==="focusout"&&nd()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(Ur)}function Ng(e,t){if(e==="click")return Qi(t)}function Ig(e,t){if(e==="input"||e==="change")return Qi(t)}function Dg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Dg;function Fr(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!X.call(t,r)||!Ut(e[r],t[r]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=rd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Og=bn&&"documentMode"in document&&11>=document.documentMode,Xa=null,Hl=null,Br=null,Gl=!1;function od(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||Xa==null||Xa!==$i(a)||(a=Xa,"selectionStart"in a&&Vl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Br&&Fr(Br,a)||(Br=a,a=zs(Hl,"onSelect"),0<a.length&&(t=new qi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Xa)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},Yl={},cd={};bn&&(cd=document.createElement("div").style,"AnimationEvent"in window||(delete Qa.animationend.animation,delete Qa.animationiteration.animation,delete Qa.animationstart.animation),"TransitionEvent"in window||delete Qa.transitionend.transition);function va(e){if(Yl[e])return Yl[e];if(!Qa[e])return e;var t=Qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cd)return Yl[e]=t[n];return e}var ud=va("animationend"),dd=va("animationiteration"),fd=va("animationstart"),kg=va("transitionrun"),jg=va("transitionstart"),Lg=va("transitioncancel"),pd=va("transitionend"),hd=new Map,ql="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ql.push("scrollEnd");function sn(e,t){hd.set(e,t),ma(t,[e])}var Wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],Wa=0,Xl=0;function Zi(){for(var e=Wa,t=Xl=Wa=0;t<e;){var n=Wt[t];Wt[t++]=null;var a=Wt[t];Wt[t++]=null;var r=Wt[t];Wt[t++]=null;var o=Wt[t];if(Wt[t++]=null,a!==null&&r!==null){var y=a.pending;y===null?r.next=r:(r.next=y.next,y.next=r),a.pending=r}o!==0&&md(n,r,o)}}function Ki(e,t,n,a){Wt[Wa++]=e,Wt[Wa++]=t,Wt[Wa++]=n,Wt[Wa++]=a,Xl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ql(e,t,n,a){return Ki(e,t,n,a),Ji(e)}function ba(e,t){return Ki(e,null,null,t),Ji(e)}function md(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-it(n),e=o.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),o):null}function Ji(e){if(50<oi)throw oi=0,ic=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Za={};function Mg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,a){return new Mg(e,t,n,a)}function Wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function es(e,t,n,a,r,o){var y=0;if(a=e,typeof e=="function")Wl(e)&&(y=1);else if(typeof e=="string")y=Py(e,n,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=Ft(31,n,t,r),e.elementType=$,e.lanes=o,e;case g:return xa(n.children,r,o,t);case S:y=8,r|=24;break;case R:return e=Ft(12,n,t,r|2),e.elementType=R,e.lanes=o,e;case k:return e=Ft(13,n,t,r),e.elementType=k,e.lanes=o,e;case H:return e=Ft(19,n,t,r),e.elementType=H,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:y=10;break e;case O:y=9;break e;case B:y=11;break e;case P:y=14;break e;case G:y=16,a=null;break e}y=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ft(y,n,t,r),t.elementType=e,t.type=a,t.lanes=o,t}function xa(e,t,n,a){return e=Ft(7,e,a,t),e.lanes=n,e}function Zl(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function yd(e){var t=Ft(18,null,null,0);return t.stateNode=e,t}function Kl(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vd=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=vd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:M(t)},vd.set(e,t),t)}return{value:e,source:t,stack:M(t)}}var Ka=[],Ja=0,ts=null,Pr=0,Kt=[],Jt=0,Fn=null,fn=1,pn="";function Sn(e,t){Ka[Ja++]=Pr,Ka[Ja++]=ts,ts=e,Pr=t}function bd(e,t,n){Kt[Jt++]=fn,Kt[Jt++]=pn,Kt[Jt++]=Fn,Fn=e;var a=fn;e=pn;var r=32-it(a)-1;a&=~(1<<r),n+=1;var o=32-it(t)+r;if(30<o){var y=r-r%5;o=(a&(1<<y)-1).toString(32),a>>=y,r-=y,fn=1<<32-it(t)+r|n<<r|a,pn=o+e}else fn=1<<o|n<<r|a,pn=e}function Jl(e){e.return!==null&&(Sn(e,1),bd(e,1,0))}function eo(e){for(;e===ts;)ts=Ka[--Ja],Ka[Ja]=null,Pr=Ka[--Ja],Ka[Ja]=null;for(;e===Fn;)Fn=Kt[--Jt],Kt[Jt]=null,pn=Kt[--Jt],Kt[Jt]=null,fn=Kt[--Jt],Kt[Jt]=null}function xd(e,t){Kt[Jt++]=fn,Kt[Jt++]=pn,Kt[Jt++]=Fn,fn=t.id,pn=t.overflow,Fn=e}var St=null,nt=null,He=!1,Bn=null,en=!1,to=Error(u(519));function Pn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(Zt(t,e)),to}function Sd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[xt]=e,t[It]=a,n){case"dialog":Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":case"embed":Pe("load",t);break;case"video":case"audio":for(n=0;n<ui.length;n++)Pe(ui[n],t);break;case"source":Pe("error",t);break;case"img":case"image":case"link":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"input":Pe("invalid",t),ju(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Pe("invalid",t);break;case"textarea":Pe("invalid",t),Mu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Fp(t.textContent,n)?(a.popover!=null&&(Pe("beforetoggle",t),Pe("toggle",t)),a.onScroll!=null&&Pe("scroll",t),a.onScrollEnd!=null&&Pe("scrollend",t),a.onClick!=null&&(t.onclick=vn),t=!0):t=!1,t||Pn(e,!0)}function Ed(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:St=St.return}}function er(e){if(e!==St)return!1;if(!He)return Ed(e),He=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||xc(e.type,e.memoizedProps)),n=!n),n&&nt&&Pn(e),Ed(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Xp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Xp(e)}else t===27?(t=nt,ta(e.type)?(e=Tc,Tc=null,nt=e):nt=t):nt=St?nn(e.stateNode.nextSibling):null;return!0}function Sa(){nt=St=null,He=!1}function no(){var e=Bn;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Bn=null),e}function $r(e){Bn===null?Bn=[e]:Bn.push(e)}var ao=C(null),Ea=null,En=null;function $n(e,t,n){le(ao,t._currentValue),t._currentValue=n}function wn(e){e._currentValue=ao.current,L(ao)}function ro(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function io(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var y=r.child;o=o.firstContext;e:for(;o!==null;){var N=o;o=r;for(var F=0;F<t.length;F++)if(N.context===t[F]){o.lanes|=n,N=o.alternate,N!==null&&(N.lanes|=n),ro(o.return,n,e),a||(y=null);break e}o=N.next}}else if(r.tag===18){if(y=r.return,y===null)throw Error(u(341));y.lanes|=n,o=y.alternate,o!==null&&(o.lanes|=n),ro(y,n,e),y=null}else y=r.child;if(y!==null)y.return=r;else for(y=r;y!==null;){if(y===e){y=null;break}if(r=y.sibling,r!==null){r.return=y.return,y=r;break}y=y.return}r=y}}function tr(e,t,n,a){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var y=r.alternate;if(y===null)throw Error(u(387));if(y=y.memoizedProps,y!==null){var N=r.type;Ut(r.pendingProps.value,y.value)||(e!==null?e.push(N):e=[N])}}else if(r===Ce.current){if(y=r.alternate,y===null)throw Error(u(387));y.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}r=r.return}e!==null&&io(t,e,n,a),t.flags|=262144}function ns(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){Ea=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Et(e){return wd(Ea,e)}function as(e,t){return Ea===null&&wa(e),wd(e,t)}function wd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},En===null){if(e===null)throw Error(u(308));En=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else En=En.next=t;return n}var zg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ug=c.unstable_scheduleCallback,Fg=c.unstable_NormalPriority,ut={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function so(){return{controller:new zg,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&Ug(Fg,function(){e.controller.abort()})}var Hr=null,lo=0,nr=0,ar=null;function Bg(e,t){if(Hr===null){var n=Hr=[];lo=0,nr=dc(),ar={status:"pending",value:void 0,then:function(a){n.push(a)}}}return lo++,t.then(Ad,Ad),t}function Ad(){if(--lo===0&&Hr!==null){ar!==null&&(ar.status="fulfilled");var e=Hr;Hr=null,nr=0,ar=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Td=I.S;I.S=function(e,t){cp=Se(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bg(e,t),Td!==null&&Td(e,t)};var Aa=C(null);function oo(){var e=Aa.current;return e!==null?e:tt.pooledCache}function rs(e,t){t===null?le(Aa,Aa.current):le(Aa,t.pool)}function Rd(){var e=oo();return e===null?null:{parent:ut._currentValue,pool:e}}var rr=Error(u(460)),co=Error(u(474)),is=Error(u(542)),ss={then:function(){}};function _d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(vn,vn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e;default:if(typeof t.status=="string")t.then(vn,vn);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e}throw Ra=t,rr}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,rr):n}}var Ra=null;function Nd(){if(Ra===null)throw Error(u(459));var e=Ra;return Ra=null,e}function Id(e){if(e===rr||e===is)throw Error(u(483))}var ir=null,Gr=0;function ls(e){var t=Gr;return Gr+=1,ir===null&&(ir=[]),Cd(ir,e,t)}function Yr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function os(e,t){throw t.$$typeof===_?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dd(e){function t(Q,V){if(e){var Z=Q.deletions;Z===null?(Q.deletions=[V],Q.flags|=16):Z.push(V)}}function n(Q,V){if(!e)return null;for(;V!==null;)t(Q,V),V=V.sibling;return null}function a(Q){for(var V=new Map;Q!==null;)Q.key!==null?V.set(Q.key,Q):V.set(Q.index,Q),Q=Q.sibling;return V}function r(Q,V){return Q=xn(Q,V),Q.index=0,Q.sibling=null,Q}function o(Q,V,Z){return Q.index=Z,e?(Z=Q.alternate,Z!==null?(Z=Z.index,Z<V?(Q.flags|=67108866,V):Z):(Q.flags|=67108866,V)):(Q.flags|=1048576,V)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function N(Q,V,Z,de){return V===null||V.tag!==6?(V=Zl(Z,Q.mode,de),V.return=Q,V):(V=r(V,Z),V.return=Q,V)}function F(Q,V,Z,de){var Ie=Z.type;return Ie===g?ue(Q,V,Z.props.children,de,Z.key):V!==null&&(V.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===G&&Ta(Ie)===V.type)?(V=r(V,Z.props),Yr(V,Z),V.return=Q,V):(V=es(Z.type,Z.key,Z.props,null,Q.mode,de),Yr(V,Z),V.return=Q,V)}function K(Q,V,Z,de){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=Kl(Z,Q.mode,de),V.return=Q,V):(V=r(V,Z.children||[]),V.return=Q,V)}function ue(Q,V,Z,de,Ie){return V===null||V.tag!==7?(V=xa(Z,Q.mode,de,Ie),V.return=Q,V):(V=r(V,Z),V.return=Q,V)}function pe(Q,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Zl(""+V,Q.mode,Z),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Z=es(V.type,V.key,V.props,null,Q.mode,Z),Yr(Z,V),Z.return=Q,Z;case T:return V=Kl(V,Q.mode,Z),V.return=Q,V;case G:return V=Ta(V),pe(Q,V,Z)}if(W(V)||D(V))return V=xa(V,Q.mode,Z,null),V.return=Q,V;if(typeof V.then=="function")return pe(Q,ls(V),Z);if(V.$$typeof===z)return pe(Q,as(Q,V),Z);os(Q,V)}return null}function te(Q,V,Z,de){var Ie=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ie!==null?null:N(Q,V,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:return Z.key===Ie?F(Q,V,Z,de):null;case T:return Z.key===Ie?K(Q,V,Z,de):null;case G:return Z=Ta(Z),te(Q,V,Z,de)}if(W(Z)||D(Z))return Ie!==null?null:ue(Q,V,Z,de,null);if(typeof Z.then=="function")return te(Q,V,ls(Z),de);if(Z.$$typeof===z)return te(Q,V,as(Q,Z),de);os(Q,Z)}return null}function ie(Q,V,Z,de,Ie){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return Q=Q.get(Z)||null,N(V,Q,""+de,Ie);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case v:return Q=Q.get(de.key===null?Z:de.key)||null,F(V,Q,de,Ie);case T:return Q=Q.get(de.key===null?Z:de.key)||null,K(V,Q,de,Ie);case G:return de=Ta(de),ie(Q,V,Z,de,Ie)}if(W(de)||D(de))return Q=Q.get(Z)||null,ue(V,Q,de,Ie,null);if(typeof de.then=="function")return ie(Q,V,Z,ls(de),Ie);if(de.$$typeof===z)return ie(Q,V,Z,as(V,de),Ie);os(V,de)}return null}function Ae(Q,V,Z,de){for(var Ie=null,Ge=null,Re=V,Me=V=0,Ve=null;Re!==null&&Me<Z.length;Me++){Re.index>Me?(Ve=Re,Re=null):Ve=Re.sibling;var Ye=te(Q,Re,Z[Me],de);if(Ye===null){Re===null&&(Re=Ve);break}e&&Re&&Ye.alternate===null&&t(Q,Re),V=o(Ye,V,Me),Ge===null?Ie=Ye:Ge.sibling=Ye,Ge=Ye,Re=Ve}if(Me===Z.length)return n(Q,Re),He&&Sn(Q,Me),Ie;if(Re===null){for(;Me<Z.length;Me++)Re=pe(Q,Z[Me],de),Re!==null&&(V=o(Re,V,Me),Ge===null?Ie=Re:Ge.sibling=Re,Ge=Re);return He&&Sn(Q,Me),Ie}for(Re=a(Re);Me<Z.length;Me++)Ve=ie(Re,Q,Me,Z[Me],de),Ve!==null&&(e&&Ve.alternate!==null&&Re.delete(Ve.key===null?Me:Ve.key),V=o(Ve,V,Me),Ge===null?Ie=Ve:Ge.sibling=Ve,Ge=Ve);return e&&Re.forEach(function(sa){return t(Q,sa)}),He&&Sn(Q,Me),Ie}function De(Q,V,Z,de){if(Z==null)throw Error(u(151));for(var Ie=null,Ge=null,Re=V,Me=V=0,Ve=null,Ye=Z.next();Re!==null&&!Ye.done;Me++,Ye=Z.next()){Re.index>Me?(Ve=Re,Re=null):Ve=Re.sibling;var sa=te(Q,Re,Ye.value,de);if(sa===null){Re===null&&(Re=Ve);break}e&&Re&&sa.alternate===null&&t(Q,Re),V=o(sa,V,Me),Ge===null?Ie=sa:Ge.sibling=sa,Ge=sa,Re=Ve}if(Ye.done)return n(Q,Re),He&&Sn(Q,Me),Ie;if(Re===null){for(;!Ye.done;Me++,Ye=Z.next())Ye=pe(Q,Ye.value,de),Ye!==null&&(V=o(Ye,V,Me),Ge===null?Ie=Ye:Ge.sibling=Ye,Ge=Ye);return He&&Sn(Q,Me),Ie}for(Re=a(Re);!Ye.done;Me++,Ye=Z.next())Ye=ie(Re,Q,Me,Ye.value,de),Ye!==null&&(e&&Ye.alternate!==null&&Re.delete(Ye.key===null?Me:Ye.key),V=o(Ye,V,Me),Ge===null?Ie=Ye:Ge.sibling=Ye,Ge=Ye);return e&&Re.forEach(function(Ky){return t(Q,Ky)}),He&&Sn(Q,Me),Ie}function Je(Q,V,Z,de){if(typeof Z=="object"&&Z!==null&&Z.type===g&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:e:{for(var Ie=Z.key;V!==null;){if(V.key===Ie){if(Ie=Z.type,Ie===g){if(V.tag===7){n(Q,V.sibling),de=r(V,Z.props.children),de.return=Q,Q=de;break e}}else if(V.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===G&&Ta(Ie)===V.type){n(Q,V.sibling),de=r(V,Z.props),Yr(de,Z),de.return=Q,Q=de;break e}n(Q,V);break}else t(Q,V);V=V.sibling}Z.type===g?(de=xa(Z.props.children,Q.mode,de,Z.key),de.return=Q,Q=de):(de=es(Z.type,Z.key,Z.props,null,Q.mode,de),Yr(de,Z),de.return=Q,Q=de)}return y(Q);case T:e:{for(Ie=Z.key;V!==null;){if(V.key===Ie)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){n(Q,V.sibling),de=r(V,Z.children||[]),de.return=Q,Q=de;break e}else{n(Q,V);break}else t(Q,V);V=V.sibling}de=Kl(Z,Q.mode,de),de.return=Q,Q=de}return y(Q);case G:return Z=Ta(Z),Je(Q,V,Z,de)}if(W(Z))return Ae(Q,V,Z,de);if(D(Z)){if(Ie=D(Z),typeof Ie!="function")throw Error(u(150));return Z=Ie.call(Z),De(Q,V,Z,de)}if(typeof Z.then=="function")return Je(Q,V,ls(Z),de);if(Z.$$typeof===z)return Je(Q,V,as(Q,Z),de);os(Q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,V!==null&&V.tag===6?(n(Q,V.sibling),de=r(V,Z),de.return=Q,Q=de):(n(Q,V),de=Zl(Z,Q.mode,de),de.return=Q,Q=de),y(Q)):n(Q,V)}return function(Q,V,Z,de){try{Gr=0;var Ie=Je(Q,V,Z,de);return ir=null,Ie}catch(Re){if(Re===rr||Re===is)throw Re;var Ge=Ft(29,Re,null,Q.mode);return Ge.lanes=de,Ge.return=Q,Ge}finally{}}}var _a=Dd(!0),Od=Dd(!1),Vn=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(qe&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ji(e),md(e,null,n),t}return Ki(e,a,t,n),Ji(e)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,wu(e,n)}}function po(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var y={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=y:o=o.next=y,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function Xr(){if(ho){var e=ar;if(e!==null)throw e}}function Qr(e,t,n,a){ho=!1;var r=e.updateQueue;Vn=!1;var o=r.firstBaseUpdate,y=r.lastBaseUpdate,N=r.shared.pending;if(N!==null){r.shared.pending=null;var F=N,K=F.next;F.next=null,y===null?o=K:y.next=K,y=F;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,N=ue.lastBaseUpdate,N!==y&&(N===null?ue.firstBaseUpdate=K:N.next=K,ue.lastBaseUpdate=F))}if(o!==null){var pe=r.baseState;y=0,ue=K=F=null,N=o;do{var te=N.lane&-536870913,ie=te!==N.lane;if(ie?($e&te)===te:(a&te)===te){te!==0&&te===nr&&(ho=!0),ue!==null&&(ue=ue.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ae=e,De=N;te=t;var Je=n;switch(De.tag){case 1:if(Ae=De.payload,typeof Ae=="function"){pe=Ae.call(Je,pe,te);break e}pe=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=De.payload,te=typeof Ae=="function"?Ae.call(Je,pe,te):Ae,te==null)break e;pe=w({},pe,te);break e;case 2:Vn=!0}}te=N.callback,te!==null&&(e.flags|=64,ie&&(e.flags|=8192),ie=r.callbacks,ie===null?r.callbacks=[te]:ie.push(te))}else ie={lane:te,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ue===null?(K=ue=ie,F=pe):ue=ue.next=ie,y|=te;if(N=N.next,N===null){if(N=r.shared.pending,N===null)break;ie=N,N=ie.next,ie.next=null,r.lastBaseUpdate=ie,r.shared.pending=null}}while(!0);ue===null&&(F=pe),r.baseState=F,r.firstBaseUpdate=K,r.lastBaseUpdate=ue,o===null&&(r.shared.lanes=0),Wn|=y,e.lanes=y,e.memoizedState=pe}}function kd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function jd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)kd(n[e],t)}var sr=C(null),cs=C(0);function Ld(e,t){e=On,le(cs,e),le(sr,t),On=e|t.baseLanes}function mo(){le(cs,On),le(sr,sr.current)}function go(){On=cs.current,L(sr),L(cs)}var Bt=C(null),tn=null;function Yn(e){var t=e.alternate;le(ot,ot.current&1),le(Bt,e),tn===null&&(t===null||sr.current!==null||t.memoizedState!==null)&&(tn=e)}function yo(e){le(ot,ot.current),le(Bt,e),tn===null&&(tn=e)}function Md(e){e.tag===22?(le(ot,ot.current),le(Bt,e),tn===null&&(tn=e)):qn()}function qn(){le(ot,ot.current),le(Bt,Bt.current)}function Pt(e){L(Bt),tn===e&&(tn=null),L(ot)}var ot=C(0);function us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||wc(n)||Ac(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var An=0,Le=null,Ze=null,dt=null,ds=!1,lr=!1,Ca=!1,fs=0,Wr=0,or=null,$g=0;function st(){throw Error(u(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function bo(e,t,n,a,r,o){return An=o,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?xf:jo,Ca=!1,o=n(a,r),Ca=!1,lr&&(o=Ud(t,n,a,r)),zd(e),o}function zd(e){I.H=Jr;var t=Ze!==null&&Ze.next!==null;if(An=0,dt=Ze=Le=null,ds=!1,Wr=0,or=null,t)throw Error(u(300));e===null||ft||(e=e.dependencies,e!==null&&ns(e)&&(ft=!0))}function Ud(e,t,n,a){Le=e;var r=0;do{if(lr&&(or=null),Wr=0,lr=!1,25<=r)throw Error(u(301));if(r+=1,dt=Ze=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=Sf,o=t(n,a)}while(lr);return o}function Vg(){var e=I.H,t=e.useState()[0];return t=typeof t.then=="function"?Zr(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Le.flags|=1024),t}function xo(){var e=fs!==0;return fs=0,e}function So(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(ds){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ds=!1}An=0,dt=Ze=Le=null,lr=!1,Wr=fs=0,or=null}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Le.memoizedState=dt=e:dt=dt.next=e,dt}function ct(){if(Ze===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=dt===null?Le.memoizedState:dt.next;if(t!==null)dt=t,Ze=e;else{if(e===null)throw Le.alternate===null?Error(u(467)):Error(u(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},dt===null?Le.memoizedState=dt=e:dt=dt.next=e}return dt}function ps(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zr(e){var t=Wr;return Wr+=1,or===null&&(or=[]),e=Cd(or,e,t),t=Le,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?xf:jo),e}function hs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zr(e);if(e.$$typeof===z)return Et(e)}throw Error(u(438,String(e)))}function wo(e){var t=null,n=Le.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Le.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ps(),Le.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=oe;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=ct();return Ao(t,Ze,e)}function Ao(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var r=e.baseQueue,o=a.pending;if(o!==null){if(r!==null){var y=r.next;r.next=o.next,o.next=y}t.baseQueue=r=o,a.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var N=y=null,F=null,K=t,ue=!1;do{var pe=K.lane&-536870913;if(pe!==K.lane?($e&pe)===pe:(An&pe)===pe){var te=K.revertLane;if(te===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),pe===nr&&(ue=!0);else if((An&te)===te){K=K.next,te===nr&&(ue=!0);continue}else pe={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(N=F=pe,y=o):F=F.next=pe,Le.lanes|=te,Wn|=te;pe=K.action,Ca&&n(o,pe),o=K.hasEagerState?K.eagerState:n(o,pe)}else te={lane:pe,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(N=F=te,y=o):F=F.next=te,Le.lanes|=pe,Wn|=pe;K=K.next}while(K!==null&&K!==t);if(F===null?y=o:F.next=N,!Ut(o,e.memoizedState)&&(ft=!0,ue&&(n=ar,n!==null)))throw n;e.memoizedState=o,e.baseState=y,e.baseQueue=F,a.lastRenderedState=o}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function To(e){var t=ct(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var y=r=r.next;do o=e(o,y.action),y=y.next;while(y!==r);Ut(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function Fd(e,t,n){var a=Le,r=ct(),o=He;if(o){if(n===void 0)throw Error(u(407));n=n()}else n=t();var y=!Ut((Ze||r).memoizedState,n);if(y&&(r.memoizedState=n,ft=!0),r=r.queue,Co($d.bind(null,a,r,e),[e]),r.getSnapshot!==t||y||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,cr(9,{destroy:void 0},Pd.bind(null,a,r,n,t),null),tt===null)throw Error(u(349));o||(An&127)!==0||Bd(a,t,n)}return n}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t=ps(),Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pd(e,t,n,a){t.value=n,t.getSnapshot=a,Vd(t)&&Hd(e)}function $d(e,t,n){return n(function(){Vd(t)&&Hd(e)})}function Vd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Hd(e){var t=ba(e,2);t!==null&&Mt(t,e,2)}function Ro(e){var t=Ct();if(typeof e=="function"){var n=e;if(e=n(),Ca){Yt(!0);try{n()}finally{Yt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function Gd(e,t,n,a){return e.baseState=n,Ao(e,Ze,typeof a=="function"?a:Tn)}function Hg(e,t,n,a,r){if(vs(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){o.listeners.push(y)}};I.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,Yd(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var o=I.T,y={};I.T=y;try{var N=n(r,a),F=I.S;F!==null&&F(y,N),qd(e,t,N)}catch(K){_o(e,t,K)}finally{o!==null&&y.types!==null&&(o.types=y.types),I.T=o}}else try{o=n(r,a),qd(e,t,o)}catch(K){_o(e,t,K)}}function qd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Xd(e,t,a)},function(a){return _o(e,t,a)}):Xd(e,t,n)}function Xd(e,t,n){t.status="fulfilled",t.value=n,Qd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function _o(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Qd(t),t=t.next;while(t!==a)}e.action=null}function Qd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wd(e,t){return t}function Zd(e,t){if(He){var n=tt.formState;if(n!==null){e:{var a=Le;if(He){if(nt){t:{for(var r=nt,o=en;r.nodeType!==8;){if(!o){r=null;break t}if(r=nn(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){nt=nn(r.nextSibling),a=r.data==="F!";break e}}Pn(a)}a=!1}a&&(t=n[0])}}return n=Ct(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wd,lastRenderedState:t},n.queue=a,n=yf.bind(null,Le,a),a.dispatch=n,a=Ro(!1),o=ko.bind(null,Le,!1,a.queue),a=Ct(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Hg.bind(null,Le,r,o,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Kd(e){var t=ct();return Jd(t,Ze,e)}function Jd(e,t,n){if(t=Ao(e,t,Wd)[0],e=ms(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Zr(t)}catch(y){throw y===rr?is:y}else a=t;t=ct();var r=t.queue,o=r.dispatch;return n!==t.memoizedState&&(Le.flags|=2048,cr(9,{destroy:void 0},Gg.bind(null,r,n),null)),[a,o,e]}function Gg(e,t){e.action=t}function ef(e){var t=ct(),n=Ze;if(n!==null)return Jd(t,n,e);ct(),t=t.memoizedState,n=ct();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function cr(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Le.updateQueue,t===null&&(t=ps(),Le.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function tf(){return ct().memoizedState}function gs(e,t,n,a){var r=Ct();Le.flags|=e,r.memoizedState=cr(1|t,{destroy:void 0},n,a===void 0?null:a)}function ys(e,t,n,a){var r=ct();a=a===void 0?null:a;var o=r.memoizedState.inst;Ze!==null&&a!==null&&vo(a,Ze.memoizedState.deps)?r.memoizedState=cr(t,o,n,a):(Le.flags|=e,r.memoizedState=cr(1|t,o,n,a))}function nf(e,t){gs(8390656,8,e,t)}function Co(e,t){ys(2048,8,e,t)}function Yg(e){Le.flags|=4;var t=Le.updateQueue;if(t===null)t=ps(),Le.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function af(e){var t=ct().memoizedState;return Yg({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function rf(e,t){return ys(4,2,e,t)}function sf(e,t){return ys(4,4,e,t)}function lf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,n){n=n!=null?n.concat([e]):null,ys(4,4,lf.bind(null,t,e),n)}function No(){}function cf(e,t){var n=ct();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&vo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function uf(e,t){var n=ct();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&vo(t,a[1]))return a[0];if(a=e(),Ca){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a}function Io(e,t,n){return n===void 0||(An&1073741824)!==0&&($e&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=dp(),Le.lanes|=e,Wn|=e,n)}function df(e,t,n,a){return Ut(n,t)?n:sr.current!==null?(e=Io(e,n,a),Ut(e,t)||(ft=!0),e):(An&42)===0||(An&1073741824)!==0&&($e&261930)===0?(ft=!0,e.memoizedState=n):(e=dp(),Le.lanes|=e,Wn|=e,t)}function ff(e,t,n,a,r){var o=j.p;j.p=o!==0&&8>o?o:8;var y=I.T,N={};I.T=N,ko(e,!1,t,n);try{var F=r(),K=I.S;if(K!==null&&K(N,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ue=Pg(F,a);Kr(e,t,ue,Ht(e))}else Kr(e,t,a,Ht(e))}catch(pe){Kr(e,t,{then:function(){},status:"rejected",reason:pe},Ht())}finally{j.p=o,y!==null&&N.types!==null&&(y.types=N.types),I.T=y}}function qg(){}function Do(e,t,n,a){if(e.tag!==5)throw Error(u(476));var r=pf(e).queue;ff(e,r,t,J,n===null?qg:function(){return hf(e),n(a)})}function pf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:J},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hf(e){var t=pf(e);t.next===null&&(t=e.alternate.memoizedState),Kr(e,t.next.queue,{},Ht())}function Oo(){return Et(mi)}function mf(){return ct().memoizedState}function gf(){return ct().memoizedState}function Xg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Hn(n);var a=Gn(t,e,n);a!==null&&(Mt(a,t,n),qr(a,t,n)),t={cache:so()},e.payload=t;return}t=t.return}}function Qg(e,t,n){var a=Ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vs(e)?vf(t,n):(n=Ql(e,t,n,a),n!==null&&(Mt(n,e,a),bf(n,t,a)))}function yf(e,t,n){var a=Ht();Kr(e,t,n,a)}function Kr(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vs(e))vf(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var y=t.lastRenderedState,N=o(y,n);if(r.hasEagerState=!0,r.eagerState=N,Ut(N,y))return Ki(e,t,r,0),tt===null&&Zi(),!1}catch{}finally{}if(n=Ql(e,t,r,a),n!==null)return Mt(n,e,a),bf(n,t,a),!0}return!1}function ko(e,t,n,a){if(a={lane:2,revertLane:dc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vs(e)){if(t)throw Error(u(479))}else t=Ql(e,n,a,2),t!==null&&Mt(t,e,2)}function vs(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function vf(e,t){lr=ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,wu(e,n)}}var Jr={readContext:Et,use:hs,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Jr.useEffectEvent=st;var xf={readContext:Et,use:hs,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:nf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,gs(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){gs(4,2,e,t)},useMemo:function(e,t){var n=Ct();t=t===void 0?null:t;var a=e();if(Ca){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ct();if(n!==void 0){var r=n(t);if(Ca){Yt(!0);try{n(t)}finally{Yt(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Qg.bind(null,Le,e),[a.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Ro(e);var t=e.queue,n=yf.bind(null,Le,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:No,useDeferredValue:function(e,t){var n=Ct();return Io(n,e,t)},useTransition:function(){var e=Ro(!1);return e=ff.bind(null,Le,e.queue,!0,!1),Ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Le,r=Ct();if(He){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),tt===null)throw Error(u(349));($e&127)!==0||Bd(a,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,nf($d.bind(null,a,o,e),[e]),a.flags|=2048,cr(9,{destroy:void 0},Pd.bind(null,a,o,n,t),null),n},useId:function(){var e=Ct(),t=tt.identifierPrefix;if(He){var n=pn,a=fn;n=(a&~(1<<32-it(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=fs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=$g++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:Zd,useActionState:Zd,useOptimistic:function(e){var t=Ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ko.bind(null,Le,!0,n),n.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return Ct().memoizedState=Xg.bind(null,Le)},useEffectEvent:function(e){var t=Ct(),n={impl:e};return t.memoizedState=n,function(){if((qe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},jo={readContext:Et,use:hs,useCallback:cf,useContext:Et,useEffect:Co,useImperativeHandle:of,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:uf,useReducer:ms,useRef:tf,useState:function(){return ms(Tn)},useDebugValue:No,useDeferredValue:function(e,t){var n=ct();return df(n,Ze.memoizedState,e,t)},useTransition:function(){var e=ms(Tn)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Zr(e),t]},useSyncExternalStore:Fd,useId:mf,useHostTransitionStatus:Oo,useFormState:Kd,useActionState:Kd,useOptimistic:function(e,t){var n=ct();return Gd(n,Ze,e,t)},useMemoCache:wo,useCacheRefresh:gf};jo.useEffectEvent=af;var Sf={readContext:Et,use:hs,useCallback:cf,useContext:Et,useEffect:Co,useImperativeHandle:of,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:uf,useReducer:To,useRef:tf,useState:function(){return To(Tn)},useDebugValue:No,useDeferredValue:function(e,t){var n=ct();return Ze===null?Io(n,e,t):df(n,Ze.memoizedState,e,t)},useTransition:function(){var e=To(Tn)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Zr(e),t]},useSyncExternalStore:Fd,useId:mf,useHostTransitionStatus:Oo,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var n=ct();return Ze!==null?Gd(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wo,useCacheRefresh:gf};Sf.useEffectEvent=af;function Lo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=Hn(a);r.payload=t,n!=null&&(r.callback=n),t=Gn(e,r,a),t!==null&&(Mt(t,e,a),qr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=Hn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Gn(e,r,a),t!==null&&(Mt(t,e,a),qr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Hn(n);a.tag=2,t!=null&&(a.callback=t),t=Gn(e,a,n),t!==null&&(Mt(t,e,n),qr(t,e,n))}};function Ef(e,t,n,a,r,o,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,y):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,a)||!Fr(r,o):!0}function wf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Af(e){Wi(e)}function Tf(e){console.error(e)}function Rf(e){Wi(e)}function bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function _f(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function zo(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){bs(e,t)},n}function Cf(e){return e=Hn(e),e.tag=3,e}function Nf(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){_f(t,n,a)}}var y=n.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){_f(t,n,a),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var N=a.stack;this.componentDidCatch(a.value,{componentStack:N!==null?N:""})})}function Wg(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&tr(t,n,r,!0),n=Bt.current,n!==null){switch(n.tag){case 31:case 13:return tn===null?Ds():n.alternate===null&&lt===0&&(lt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ss?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),oc(e,a,r)),!1;case 22:return n.flags|=65536,a===ss?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),oc(e,a,r)),!1}throw Error(u(435,n.tag))}return oc(e,a,r),Ds(),!1}if(He)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==to&&(e=Error(u(422),{cause:a}),$r(Zt(e,n)))):(a!==to&&(t=Error(u(423),{cause:a}),$r(Zt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Zt(a,n),r=zo(e.stateNode,a,r),po(e,r),lt!==4&&(lt=2)),!1;var o=Error(u(520),{cause:a});if(o=Zt(o,n),li===null?li=[o]:li.push(o),lt!==4&&(lt=2),t===null)return!0;a=Zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=zo(n.stateNode,a,e),po(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Zn===null||!Zn.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Cf(r),Nf(r,e,n,a),po(n,r),!1}n=n.return}while(n!==null);return!1}var Uo=Error(u(461)),ft=!1;function wt(e,t,n,a){t.child=e===null?Od(t,null,n,a):_a(t,e.child,n,a)}function If(e,t,n,a,r){n=n.render;var o=t.ref;if("ref"in a){var y={};for(var N in a)N!=="ref"&&(y[N]=a[N])}else y=a;return wa(t),a=bo(e,t,n,y,o,r),N=xo(),e!==null&&!ft?(So(e,t,r),Rn(e,t,r)):(He&&N&&Jl(t),t.flags|=1,wt(e,t,a,r),t.child)}function Df(e,t,n,a,r){if(e===null){var o=n.type;return typeof o=="function"&&!Wl(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Of(e,t,o,a,r)):(e=es(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Yo(e,r)){var y=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(y,a)&&e.ref===t.ref)return Rn(e,t,r)}return t.flags|=1,e=xn(o,a),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,n,a,r){if(e!==null){var o=e.memoizedProps;if(Fr(o,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=o,Yo(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Rn(e,t,r)}return Fo(e,t,n,a,r)}function kf(e,t,n,a){var r=a.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~o}else a=0,t.child=null;return jf(e,t,o,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&rs(t,o!==null?o.cachePool:null),o!==null?Ld(t,o):mo(),Md(t);else return a=t.lanes=536870912,jf(e,t,o!==null?o.baseLanes|n:n,n,a)}else o!==null?(rs(t,o.cachePool),Ld(t,o),qn(),t.memoizedState=null):(e!==null&&rs(t,null),mo(),qn());return wt(e,t,r,n),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jf(e,t,n,a,r){var o=oo();return o=o===null?null:{parent:ut._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&rs(t,null),mo(),Md(t),e!==null&&tr(e,t,a,!0),t.childLanes=r,null}function xs(e,t){return t=Es({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lf(e,t,n){return _a(t,e.child,null,n),e=xs(t,t.pendingProps),e.flags|=2,Pt(t),t.memoizedState=null,e}function Zg(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(a.mode==="hidden")return e=xs(t,a),t.lanes=536870912,ei(null,e);if(yo(t),(e=nt)?(e=qp(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:fn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=yd(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw Pn(t);return t.lanes=536870912,null}return xs(t,a)}var o=e.memoizedState;if(o!==null){var y=o.dehydrated;if(yo(t),r)if(t.flags&256)t.flags&=-257,t=Lf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(ft||tr(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(a=tt,a!==null&&(y=Au(a,n),y!==0&&y!==o.retryLane))throw o.retryLane=y,ba(e,y),Mt(a,e,y),Uo;Ds(),t=Lf(e,t,n)}else e=o.treeContext,nt=nn(y.nextSibling),St=t,He=!0,Bn=null,en=!1,e!==null&&xd(t,e),t=xs(t,a),t.flags|=4096;return t}return e=xn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ss(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Fo(e,t,n,a,r){return wa(t),n=bo(e,t,n,a,void 0,r),a=xo(),e!==null&&!ft?(So(e,t,r),Rn(e,t,r)):(He&&a&&Jl(t),t.flags|=1,wt(e,t,n,r),t.child)}function Mf(e,t,n,a,r,o){return wa(t),t.updateQueue=null,n=Ud(t,a,n,r),zd(e),a=xo(),e!==null&&!ft?(So(e,t,o),Rn(e,t,o)):(He&&a&&Jl(t),t.flags|=1,wt(e,t,n,o),t.child)}function zf(e,t,n,a,r){if(wa(t),t.stateNode===null){var o=Za,y=n.contextType;typeof y=="object"&&y!==null&&(o=Et(y)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mo,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},uo(t),y=n.contextType,o.context=typeof y=="object"&&y!==null?Et(y):Za,o.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(Lo(t,n,y,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(y=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),y!==o.state&&Mo.enqueueReplaceState(o,o.state,null),Qr(t,a,o,r),Xr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var N=t.memoizedProps,F=Na(n,N);o.props=F;var K=o.context,ue=n.contextType;y=Za,typeof ue=="object"&&ue!==null&&(y=Et(ue));var pe=n.getDerivedStateFromProps;ue=typeof pe=="function"||typeof o.getSnapshotBeforeUpdate=="function",N=t.pendingProps!==N,ue||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(N||K!==y)&&wf(t,o,a,y),Vn=!1;var te=t.memoizedState;o.state=te,Qr(t,a,o,r),Xr(),K=t.memoizedState,N||te!==K||Vn?(typeof pe=="function"&&(Lo(t,n,pe,a),K=t.memoizedState),(F=Vn||Ef(t,n,F,a,te,K,y))?(ue||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=K),o.props=a,o.state=K,o.context=y,a=F):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,fo(e,t),y=t.memoizedProps,ue=Na(n,y),o.props=ue,pe=t.pendingProps,te=o.context,K=n.contextType,F=Za,typeof K=="object"&&K!==null&&(F=Et(K)),N=n.getDerivedStateFromProps,(K=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(y!==pe||te!==F)&&wf(t,o,a,F),Vn=!1,te=t.memoizedState,o.state=te,Qr(t,a,o,r),Xr();var ie=t.memoizedState;y!==pe||te!==ie||Vn||e!==null&&e.dependencies!==null&&ns(e.dependencies)?(typeof N=="function"&&(Lo(t,n,N,a),ie=t.memoizedState),(ue=Vn||Ef(t,n,ue,a,te,ie,F)||e!==null&&e.dependencies!==null&&ns(e.dependencies))?(K||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,ie,F),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,ie,F)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ie),o.props=a,o.state=ie,o.context=F,a=ue):(typeof o.componentDidUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Ss(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=_a(t,e.child,null,r),t.child=_a(t,null,n,r)):wt(e,t,n,r),t.memoizedState=o.state,e=t.child):e=Rn(e,t,r),e}function Uf(e,t,n,a){return Sa(),t.flags|=256,wt(e,t,n,a),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Po(e){return{baseLanes:e,cachePool:Rd()}}function $o(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function Ff(e,t,n){var a=t.pendingProps,r=!1,o=(t.flags&128)!==0,y;if((y=o)||(y=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),y&&(r=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(r?Yn(t):qn(),(e=nt)?(e=qp(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:fn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=yd(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw Pn(t);return Ac(e)?t.lanes=32:t.lanes=536870912,null}var N=a.children;return a=a.fallback,r?(qn(),r=t.mode,N=Es({mode:"hidden",children:N},r),a=xa(a,r,n,null),N.return=t,a.return=t,N.sibling=a,t.child=N,a=t.child,a.memoizedState=Po(n),a.childLanes=$o(e,y,n),t.memoizedState=Bo,ei(null,a)):(Yn(t),Vo(t,N))}var F=e.memoizedState;if(F!==null&&(N=F.dehydrated,N!==null)){if(o)t.flags&256?(Yn(t),t.flags&=-257,t=Ho(e,t,n)):t.memoizedState!==null?(qn(),t.child=e.child,t.flags|=128,t=null):(qn(),N=a.fallback,r=t.mode,a=Es({mode:"visible",children:a.children},r),N=xa(N,r,n,null),N.flags|=2,a.return=t,N.return=t,a.sibling=N,t.child=a,_a(t,e.child,null,n),a=t.child,a.memoizedState=Po(n),a.childLanes=$o(e,y,n),t.memoizedState=Bo,t=ei(null,a));else if(Yn(t),Ac(N)){if(y=N.nextSibling&&N.nextSibling.dataset,y)var K=y.dgst;y=K,a=Error(u(419)),a.stack="",a.digest=y,$r({value:a,source:null,stack:null}),t=Ho(e,t,n)}else if(ft||tr(e,t,n,!1),y=(n&e.childLanes)!==0,ft||y){if(y=tt,y!==null&&(a=Au(y,n),a!==0&&a!==F.retryLane))throw F.retryLane=a,ba(e,a),Mt(y,e,a),Uo;wc(N)||Ds(),t=Ho(e,t,n)}else wc(N)?(t.flags|=192,t.child=e.child,t=null):(e=F.treeContext,nt=nn(N.nextSibling),St=t,He=!0,Bn=null,en=!1,e!==null&&xd(t,e),t=Vo(t,a.children),t.flags|=4096);return t}return r?(qn(),N=a.fallback,r=t.mode,F=e.child,K=F.sibling,a=xn(F,{mode:"hidden",children:a.children}),a.subtreeFlags=F.subtreeFlags&65011712,K!==null?N=xn(K,N):(N=xa(N,r,n,null),N.flags|=2),N.return=t,a.return=t,a.sibling=N,t.child=a,ei(null,a),a=t.child,N=e.child.memoizedState,N===null?N=Po(n):(r=N.cachePool,r!==null?(F=ut._currentValue,r=r.parent!==F?{parent:F,pool:F}:r):r=Rd(),N={baseLanes:N.baseLanes|n,cachePool:r}),a.memoizedState=N,a.childLanes=$o(e,y,n),t.memoizedState=Bo,ei(e.child,a)):(Yn(t),n=e.child,e=n.sibling,n=xn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=n,t.memoizedState=null,n)}function Vo(e,t){return t=Es({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Es(e,t){return e=Ft(22,e,null,t),e.lanes=0,e}function Ho(e,t,n){return _a(t,e.child,null,n),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ro(e.return,t,n)}function Go(e,t,n,a,r,o){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:o}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=n,y.tailMode=r,y.treeForkCount=o)}function Pf(e,t,n){var a=t.pendingProps,r=a.revealOrder,o=a.tail;a=a.children;var y=ot.current,N=(y&2)!==0;if(N?(y=y&1|2,t.flags|=128):y&=1,le(ot,y),wt(e,t,a,n),a=He?Pr:0,!N&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,n,t);else if(e.tag===19)Bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&us(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Go(t,!1,r,n,o,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&us(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Go(t,!0,n,null,o,a);break;case"together":Go(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(tr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ns(e)))}function Kg(e,t,n){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),$n(t,ut,e.memoizedState.cache),Sa();break;case 27:case 5:ke(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Yn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ff(e,t,n):(Yn(t),e=Rn(e,t,n),e!==null?e.sibling:null);Yn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(tr(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Pf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),le(ot,ot.current),a)break;return null;case 22:return t.lanes=0,kf(e,t,n,t.pendingProps);case 24:$n(t,ut,e.memoizedState.cache)}return Rn(e,t,n)}function $f(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!Yo(e,n)&&(t.flags&128)===0)return ft=!1,Kg(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,He&&(t.flags&1048576)!==0&&bd(t,Pr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Wl(e)?(a=Na(e,a),t.tag=1,t=zf(null,t,e,a,n)):(t.tag=0,t=Fo(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===B){t.tag=11,t=If(null,t,e,a,n);break e}else if(r===P){t.tag=14,t=Df(null,t,e,a,n);break e}}throw t=E(e)||e,Error(u(306,t,""))}}return t;case 0:return Fo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Na(a,t.pendingProps),zf(e,t,a,r,n);case 3:e:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var o=t.memoizedState;r=o.element,fo(e,t),Qr(t,a,null,n);var y=t.memoizedState;if(a=y.cache,$n(t,ut,a),a!==o.cache&&io(t,[ut],n,!0),Xr(),a=y.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Uf(e,t,a,n);break e}else if(a!==r){r=Zt(Error(u(424)),t),$r(r),t=Uf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=nn(e.firstChild),St=t,He=!0,Bn=null,en=!0,n=Od(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Sa(),a===r){t=Rn(e,t,n);break e}wt(e,t,a,n)}t=t.child}return t;case 26:return Ss(e,t),e===null?(n=Jp(t.type,null,t.pendingProps,null))?t.memoizedState=n:He||(n=t.type,e=t.pendingProps,a=Us(Ee.current).createElement(n),a[xt]=t,a[It]=e,At(a,n,e),yt(a),t.stateNode=a):t.memoizedState=Jp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ke(t),e===null&&He&&(a=t.stateNode=Wp(t.type,t.pendingProps,Ee.current),St=t,en=!0,r=nt,ta(t.type)?(Tc=r,nt=nn(a.firstChild)):nt=r),wt(e,t,t.pendingProps.children,n),Ss(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((r=a=nt)&&(a=Cy(a,t.type,t.pendingProps,en),a!==null?(t.stateNode=a,St=t,nt=nn(a.firstChild),en=!1,r=!0):r=!1),r||Pn(t)),ke(t),r=t.type,o=t.pendingProps,y=e!==null?e.memoizedProps:null,a=o.children,xc(r,o)?a=null:y!==null&&xc(r,y)&&(t.flags|=32),t.memoizedState!==null&&(r=bo(e,t,Vg,null,null,n),mi._currentValue=r),Ss(e,t),wt(e,t,a,n),t.child;case 6:return e===null&&He&&((e=n=nt)&&(n=Ny(n,t.pendingProps,en),n!==null?(t.stateNode=n,St=t,nt=null,e=!0):e=!1),e||Pn(t)),null;case 13:return Ff(e,t,n);case 4:return Te(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=_a(t,null,a,n):wt(e,t,a,n),t.child;case 11:return If(e,t,t.type,t.pendingProps,n);case 7:return wt(e,t,t.pendingProps,n),t.child;case 8:return wt(e,t,t.pendingProps.children,n),t.child;case 12:return wt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,$n(t,t.type,a.value),wt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,wa(t),r=Et(r),a=a(r),t.flags|=1,wt(e,t,a,n),t.child;case 14:return Df(e,t,t.type,t.pendingProps,n);case 15:return Of(e,t,t.type,t.pendingProps,n);case 19:return Pf(e,t,n);case 31:return Zg(e,t,n);case 22:return kf(e,t,n,t.pendingProps);case 24:return wa(t),a=Et(ut),e===null?(r=oo(),r===null&&(r=tt,o=so(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:a,cache:r},uo(t),$n(t,ut,r)):((e.lanes&n)!==0&&(fo(e,t),Qr(t,null,null,n),Xr()),r=e.memoizedState,o=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),$n(t,ut,a)):(a=o.cache,$n(t,ut,a),a!==r.cache&&io(t,[ut],n,!0))),wt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function _n(e){e.flags|=4}function qo(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(mp())e.flags|=8192;else throw Ra=ss,co}else e.flags&=-16777217}function Vf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rh(t))if(mp())e.flags|=8192;else throw Ra=ss,co}function ws(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Su():536870912,e.lanes|=t,pr|=t)}function ti(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Jg(e,t,n){var a=t.pendingProps;switch(eo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),wn(ut),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(er(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,no())),at(t),null;case 26:var r=t.type,o=t.memoizedState;return e===null?(_n(t),o!==null?(at(t),Vf(t,o)):(at(t),qo(t,r,null,a,n))):o?o!==e.memoizedState?(_n(t),at(t),Vf(t,o)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&_n(t),at(t),qo(t,r,e,a,n)),null;case 27:if(ze(t),n=Ee.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return at(t),null}e=ne.current,er(t)?Sd(t):(e=Wp(r,a,n),t.stateNode=e,_n(t))}return at(t),null;case 5:if(ze(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return at(t),null}if(o=ne.current,er(t))Sd(t);else{var y=Us(Ee.current);switch(o){case 1:o=y.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=y.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=y.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=y.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=y.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?y.createElement("select",{is:a.is}):y.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?y.createElement(r,{is:a.is}):y.createElement(r)}}o[xt]=t,o[It]=a;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)o.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=o;e:switch(At(o,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&_n(t)}}return at(t),qo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=Ee.current,er(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=St,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Fp(e.nodeValue,n)),e||Pn(t,!0)}else e=Us(e).createTextNode(a),e[xt]=t,t.stateNode=e}return at(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=er(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[xt]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else n=no(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pt(t),t):(Pt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return at(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=er(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[xt]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),r=!1}else r=no(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Pt(t),t):(Pt(t),null)}return Pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ws(t,t.updateQueue),at(t),null);case 4:return we(),e===null&&mc(t.stateNode.containerInfo),at(t),null;case 10:return wn(t.type),at(t),null;case 19:if(L(ot),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ti(a,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=us(e),o!==null){for(t.flags|=128,ti(a,!1),e=o.updateQueue,t.updateQueue=e,ws(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gd(n,e),n=n.sibling;return le(ot,ot.current&1|2),He&&Sn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Se()>Cs&&(t.flags|=128,r=!0,ti(a,!1),t.lanes=4194304)}else{if(!r)if(e=us(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ws(t,e),ti(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!He)return at(t),null}else 2*Se()-a.renderingStartTime>Cs&&n!==536870912&&(t.flags|=128,r=!0,ti(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Se(),e.sibling=null,n=ot.current,le(ot,r?n&1|2:n&1),He&&Sn(t,a.treeForkCount),e):(at(t),null);case 22:case 23:return Pt(t),go(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&ws(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(Aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wn(ut),at(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ey(e,t){switch(eo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(ut),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ze(t),null;case 31:if(t.memoizedState!==null){if(Pt(t),t.alternate===null)throw Error(u(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(ot),null;case 4:return we(),null;case 10:return wn(t.type),null;case 22:case 23:return Pt(t),go(),e!==null&&L(Aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wn(ut),null;case 25:return null;default:return null}}function Hf(e,t){switch(eo(t),t.tag){case 3:wn(ut),we();break;case 26:case 27:case 5:ze(t);break;case 4:we();break;case 31:t.memoizedState!==null&&Pt(t);break;case 13:Pt(t);break;case 19:L(ot);break;case 10:wn(t.type);break;case 22:case 23:Pt(t),go(),e!==null&&L(Aa);break;case 24:wn(ut)}}function ni(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var o=n.create,y=n.inst;a=o(),y.destroy=a}n=n.next}while(n!==r)}}catch(N){We(t,t.return,N)}}function Xn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){var y=a.inst,N=y.destroy;if(N!==void 0){y.destroy=void 0,r=t;var F=n,K=N;try{K()}catch(ue){We(r,F,ue)}}}a=a.next}while(a!==o)}}catch(ue){We(t,t.return,ue)}}function Gf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{jd(t,n)}catch(a){We(e,e.return,a)}}}function Yf(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){We(e,t,a)}}function ai(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){We(e,t,r)}}function hn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){We(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function qf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){We(e,e.return,r)}}function Xo(e,t,n){try{var a=e.stateNode;Ey(a,e.type,n,t),a[It]=t}catch(r){We(e,e.return,r)}}function Xf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ta(e.type)||e.tag===4}function Qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vn));else if(a!==4&&(a===27&&ta(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wo(e,t,n),e=e.sibling;e!==null;)Wo(e,t,n),e=e.sibling}function As(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ta(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(As(e,t,n),e=e.sibling;e!==null;)As(e,t,n),e=e.sibling}function Qf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);At(t,a,n),t[xt]=e,t[It]=n}catch(o){We(e,e.return,o)}}var Cn=!1,pt=!1,Zo=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,vt=null;function ty(e,t){if(e=e.containerInfo,vc=Gs,e=ld(e),Vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var y=0,N=-1,F=-1,K=0,ue=0,pe=e,te=null;t:for(;;){for(var ie;pe!==n||r!==0&&pe.nodeType!==3||(N=y+r),pe!==o||a!==0&&pe.nodeType!==3||(F=y+a),pe.nodeType===3&&(y+=pe.nodeValue.length),(ie=pe.firstChild)!==null;)te=pe,pe=ie;for(;;){if(pe===e)break t;if(te===n&&++K===r&&(N=y),te===o&&++ue===a&&(F=y),(ie=pe.nextSibling)!==null)break;pe=te,te=pe.parentNode}pe=ie}n=N===-1||F===-1?null:{start:N,end:F}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:e,selectionRange:n},Gs=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var Ae=Na(n.type,r);e=a.getSnapshotBeforeUpdate(Ae,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(De){We(n,n.return,De)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ec(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Zf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:In(e,n),a&4&&ni(5,n);break;case 1:if(In(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(y){We(n,n.return,y)}else{var r=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){We(n,n.return,y)}}a&64&&Gf(n),a&512&&ai(n,n.return);break;case 3:if(In(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{jd(e,t)}catch(y){We(n,n.return,y)}}break;case 27:t===null&&a&4&&Qf(n);case 26:case 5:In(e,n),t===null&&a&4&&qf(n),a&512&&ai(n,n.return);break;case 12:In(e,n);break;case 31:In(e,n),a&4&&ep(e,n);break;case 13:In(e,n),a&4&&tp(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=uy.bind(null,n),Iy(e,n))));break;case 22:if(a=n.memoizedState!==null||Cn,!a){t=t!==null&&t.memoizedState!==null||pt,r=Cn;var o=pt;Cn=a,(pt=t)&&!o?Dn(e,n,(n.subtreeFlags&8772)!==0):In(e,n),Cn=r,pt=o}break;case 30:break;default:In(e,n)}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Ot=!1;function Nn(e,t,n){for(n=n.child;n!==null;)Jf(e,t,n),n=n.sibling}function Jf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(et,n)}catch{}switch(n.tag){case 26:pt||hn(n,t),Nn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:pt||hn(n,t);var a=rt,r=Ot;ta(n.type)&&(rt=n.stateNode,Ot=!1),Nn(e,t,n),fi(n.stateNode),rt=a,Ot=r;break;case 5:pt||hn(n,t);case 6:if(a=rt,r=Ot,rt=null,Nn(e,t,n),rt=a,Ot=r,rt!==null)if(Ot)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(n.stateNode)}catch(o){We(n,t,o)}else try{rt.removeChild(n.stateNode)}catch(o){We(n,t,o)}break;case 18:rt!==null&&(Ot?(e=rt,Gp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Sr(e)):Gp(rt,n.stateNode));break;case 4:a=rt,r=Ot,rt=n.stateNode.containerInfo,Ot=!0,Nn(e,t,n),rt=a,Ot=r;break;case 0:case 11:case 14:case 15:Xn(2,n,t),pt||Xn(4,n,t),Nn(e,t,n);break;case 1:pt||(hn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Yf(n,t,a)),Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:pt=(a=pt)||n.memoizedState!==null,Nn(e,t,n),pt=a;break;default:Nn(e,t,n)}}function ep(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sr(e)}catch(n){We(t,t.return,n)}}}function tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sr(e)}catch(n){We(t,t.return,n)}}function ny(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wf),t;default:throw Error(u(435,e.tag))}}function Ts(e,t){var n=ny(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=dy.bind(null,e,a);a.then(r,r)}})}function kt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],o=e,y=t,N=y;e:for(;N!==null;){switch(N.tag){case 27:if(ta(N.type)){rt=N.stateNode,Ot=!1;break e}break;case 5:rt=N.stateNode,Ot=!1;break e;case 3:case 4:rt=N.stateNode.containerInfo,Ot=!0;break e}N=N.return}if(rt===null)throw Error(u(160));Jf(o,y,r),rt=null,Ot=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)np(t,e),t=t.sibling}var ln=null;function np(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),jt(e),a&4&&(Xn(3,e,e.return),ni(3,e),Xn(5,e,e.return));break;case 1:kt(t,e),jt(e),a&512&&(pt||n===null||hn(n,n.return)),a&64&&Cn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=ln;if(kt(t,e),jt(e),a&512&&(pt||n===null||hn(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Ir]||o[xt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(a),r.head.insertBefore(o,r.querySelector("head > title"))),At(o,a,n),o[xt]=e,yt(o),a=o;break e;case"link":var y=nh("link","href",r).get(a+(n.href||""));if(y){for(var N=0;N<y.length;N++)if(o=y[N],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){y.splice(N,1);break t}}o=r.createElement(a),At(o,a,n),r.head.appendChild(o);break;case"meta":if(y=nh("meta","content",r).get(a+(n.content||""))){for(N=0;N<y.length;N++)if(o=y[N],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){y.splice(N,1);break t}}o=r.createElement(a),At(o,a,n),r.head.appendChild(o);break;default:throw Error(u(468,a))}o[xt]=e,yt(o),a=o}e.stateNode=a}else ah(r,e.type,e.stateNode);else e.stateNode=th(r,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?ah(r,e.type,e.stateNode):th(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Xo(e,e.memoizedProps,n.memoizedProps)}break;case 27:kt(t,e),jt(e),a&512&&(pt||n===null||hn(n,n.return)),n!==null&&a&4&&Xo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kt(t,e),jt(e),a&512&&(pt||n===null||hn(n,n.return)),e.flags&32){r=e.stateNode;try{Ha(r,"")}catch(Ae){We(e,e.return,Ae)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,Xo(e,r,n!==null?n.memoizedProps:r)),a&1024&&(Zo=!0);break;case 6:if(kt(t,e),jt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Ae){We(e,e.return,Ae)}}break;case 3:if(Ps=null,r=ln,ln=Fs(t.containerInfo),kt(t,e),ln=r,jt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(Ae){We(e,e.return,Ae)}Zo&&(Zo=!1,ap(e));break;case 4:a=ln,ln=Fs(e.stateNode.containerInfo),kt(t,e),jt(e),ln=a;break;case 12:kt(t,e),jt(e);break;case 31:kt(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ts(e,a)));break;case 13:kt(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(_s=Se()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ts(e,a)));break;case 22:r=e.memoizedState!==null;var F=n!==null&&n.memoizedState!==null,K=Cn,ue=pt;if(Cn=K||r,pt=ue||F,kt(t,e),pt=ue,Cn=K,jt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||F||Cn||pt||Ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){F=n=t;try{if(o=F.stateNode,r)y=o.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{N=F.stateNode;var pe=F.memoizedProps.style,te=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;N.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(Ae){We(F,F.return,Ae)}}}else if(t.tag===6){if(n===null){F=t;try{F.stateNode.nodeValue=r?"":F.memoizedProps}catch(Ae){We(F,F.return,Ae)}}}else if(t.tag===18){if(n===null){F=t;try{var ie=F.stateNode;r?Yp(ie,!0):Yp(F.stateNode,!1)}catch(Ae){We(F,F.return,Ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ts(e,n))));break;case 19:kt(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ts(e,a)));break;case 30:break;case 21:break;default:kt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Xf(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,o=Qo(e);As(e,o,r);break;case 5:var y=n.stateNode;n.flags&32&&(Ha(y,""),n.flags&=-33);var N=Qo(e);As(e,N,y);break;case 3:case 4:var F=n.stateNode.containerInfo,K=Qo(e);Wo(e,K,F);break;default:throw Error(u(161))}}catch(ue){We(e,e.return,ue)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ap(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ap(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function In(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zf(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Ia(t);break;case 1:hn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yf(t,t.return,n),Ia(t);break;case 27:fi(t.stateNode);case 26:case 5:hn(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function Dn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,o=t,y=o.flags;switch(o.tag){case 0:case 11:case 15:Dn(r,o,n),ni(4,o);break;case 1:if(Dn(r,o,n),a=o,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(K){We(a,a.return,K)}if(a=o,r=a.updateQueue,r!==null){var N=a.stateNode;try{var F=r.shared.hiddenCallbacks;if(F!==null)for(r.shared.hiddenCallbacks=null,r=0;r<F.length;r++)kd(F[r],N)}catch(K){We(a,a.return,K)}}n&&y&64&&Gf(o),ai(o,o.return);break;case 27:Qf(o);case 26:case 5:Dn(r,o,n),n&&a===null&&y&4&&qf(o),ai(o,o.return);break;case 12:Dn(r,o,n);break;case 31:Dn(r,o,n),n&&y&4&&ep(r,o);break;case 13:Dn(r,o,n),n&&y&4&&tp(r,o);break;case 22:o.memoizedState===null&&Dn(r,o,n),ai(o,o.return);break;case 30:break;default:Dn(r,o,n)}t=t.sibling}}function Ko(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vr(n))}function Jo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e))}function on(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rp(e,t,n,a),t=t.sibling}function rp(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,a),r&2048&&ni(9,t);break;case 1:on(e,t,n,a);break;case 3:on(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e)));break;case 12:if(r&2048){on(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,y=o.id,N=o.onPostCommit;typeof N=="function"&&N(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){We(t,t.return,F)}}else on(e,t,n,a);break;case 31:on(e,t,n,a);break;case 13:on(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,y=t.alternate,t.memoizedState!==null?o._visibility&2?on(e,t,n,a):ri(e,t):o._visibility&2?on(e,t,n,a):(o._visibility|=2,ur(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Ko(y,t);break;case 24:on(e,t,n,a),r&2048&&Jo(t.alternate,t);break;default:on(e,t,n,a)}}function ur(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,y=t,N=n,F=a,K=y.flags;switch(y.tag){case 0:case 11:case 15:ur(o,y,N,F,r),ni(8,y);break;case 23:break;case 22:var ue=y.stateNode;y.memoizedState!==null?ue._visibility&2?ur(o,y,N,F,r):ri(o,y):(ue._visibility|=2,ur(o,y,N,F,r)),r&&K&2048&&Ko(y.alternate,y);break;case 24:ur(o,y,N,F,r),r&&K&2048&&Jo(y.alternate,y);break;default:ur(o,y,N,F,r)}t=t.sibling}}function ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:ri(n,a),r&2048&&Ko(a.alternate,a);break;case 24:ri(n,a),r&2048&&Jo(a.alternate,a);break;default:ri(n,a)}t=t.sibling}}var ii=8192;function dr(e,t,n){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)ip(e,t,n),e=e.sibling}function ip(e,t,n){switch(e.tag){case 26:dr(e,t,n),e.flags&ii&&e.memoizedState!==null&&$y(n,ln,e.memoizedState,e.memoizedProps);break;case 5:dr(e,t,n);break;case 3:case 4:var a=ln;ln=Fs(e.stateNode.containerInfo),dr(e,t,n),ln=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ii,ii=16777216,dr(e,t,n),ii=a):dr(e,t,n));break;default:dr(e,t,n)}}function sp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,op(a,e)}sp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lp(e),e=e.sibling}function lp(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rs(e)):si(e);break;default:si(e)}}function Rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,op(a,e)}sp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),Rs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rs(t));break;default:Rs(t)}e=e.sibling}}function op(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Vr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var r=a.sibling,o=a.return;if(Kf(a),a===n){vt=null;break e}if(r!==null){r.return=o,vt=r;break e}vt=o}}}var ay={getCacheForType:function(e){var t=Et(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Et(ut).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,qe=0,tt=null,Be=null,$e=0,Qe=0,$t=null,Qn=!1,fr=!1,ec=!1,On=0,lt=0,Wn=0,Da=0,tc=0,Vt=0,pr=0,li=null,Lt=null,nc=!1,_s=0,cp=0,Cs=1/0,Ns=null,Zn=null,ht=0,Kn=null,hr=null,kn=0,ac=0,rc=null,up=null,oi=0,ic=null;function Ht(){return(qe&2)!==0&&$e!==0?$e&-$e:I.T!==null?dc():Tu()}function dp(){if(Vt===0)if(($e&536870912)===0||He){var e=ha;ha<<=1,(ha&3932160)===0&&(ha=262144),Vt=e}else Vt=536870912;return e=Bt.current,e!==null&&(e.flags|=32),Vt}function Mt(e,t,n){(e===tt&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Jn(e,$e,Vt,!1)),Nr(e,n),((qe&2)===0||e!==tt)&&(e===tt&&((qe&2)===0&&(Da|=n),lt===4&&Jn(e,$e,Vt,!1)),mn(e))}function fp(e,t,n){if((qe&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Cr(e,t),r=a?ly(e,t):lc(e,t,!0),o=a;do{if(r===0){fr&&!a&&Jn(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!iy(n)){r=lc(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var N=e;r=li;var F=N.current.memoizedState.isDehydrated;if(F&&(mr(N,y).flags|=256),y=lc(N,y,!1),y!==2){if(ec&&!F){N.errorRecoveryDisabledLanes|=o,Da|=o,r=4;break e}o=Lt,Lt=r,o!==null&&(Lt===null?Lt=o:Lt.push.apply(Lt,o))}r=y}if(o=!1,r!==2)continue}}if(r===1){mr(e,0),Jn(e,t,0,!0);break}e:{switch(a=e,o=r,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Jn(a,t,Vt,!Qn);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=_s+300-Se(),10<r)){if(Jn(a,t,Vt,!Qn),Fi(a,0,!0)!==0)break e;kn=t,a.timeoutHandle=Vp(pp.bind(null,a,n,Lt,Ns,nc,t,Vt,Da,pr,Qn,o,"Throttled",-0,0),r);break e}pp(a,n,Lt,Ns,nc,t,Vt,Da,pr,Qn,o,null,-0,0)}}break}while(!0);mn(e)}function pp(e,t,n,a,r,o,y,N,F,K,ue,pe,te,ie){if(e.timeoutHandle=-1,pe=t.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},ip(t,o,pe);var Ae=(o&62914560)===o?_s-Se():(o&4194048)===o?cp-Se():0;if(Ae=Vy(pe,Ae),Ae!==null){kn=o,e.cancelPendingCommit=Ae(Sp.bind(null,e,t,o,n,a,r,y,N,F,ue,pe,null,te,ie)),Jn(e,o,y,!K);return}}Sp(e,t,o,n,a,r,y,N,F)}function iy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],o=r.getSnapshot;r=r.value;try{if(!Ut(o(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,n,a){t&=~tc,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var o=31-it(r),y=1<<o;a[o]=-1,r&=~y}n!==0&&Eu(e,n,t)}function Is(){return(qe&6)===0?(ci(0),!1):!0}function sc(){if(Be!==null){if(Qe===0)var e=Be.return;else e=Be,En=Ea=null,Eo(e),ir=null,Gr=0,e=Be;for(;e!==null;)Hf(e.alternate,e),e=e.return;Be=null}}function mr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ty(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kn=0,sc(),tt=e,Be=n=xn(e.current,null),$e=t,Qe=0,$t=null,Qn=!1,fr=Cr(e,t),ec=!1,pr=Vt=tc=Da=Wn=lt=0,Lt=li=null,nc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-it(a),o=1<<r;t|=e[r],a&=~o}return On=t,Zi(),n}function hp(e,t){Le=null,I.H=Jr,t===rr||t===is?(t=Nd(),Qe=3):t===co?(t=Nd(),Qe=4):Qe=t===Uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$t=t,Be===null&&(lt=1,bs(e,Zt(t,e.current)))}function mp(){var e=Bt.current;return e===null?!0:($e&4194048)===$e?tn===null:($e&62914560)===$e||($e&536870912)!==0?e===tn:!1}function gp(){var e=I.H;return I.H=Jr,e===null?Jr:e}function yp(){var e=I.A;return I.A=ay,e}function Ds(){lt=4,Qn||($e&4194048)!==$e&&Bt.current!==null||(fr=!0),(Wn&134217727)===0&&(Da&134217727)===0||tt===null||Jn(tt,$e,Vt,!1)}function lc(e,t,n){var a=qe;qe|=2;var r=gp(),o=yp();(tt!==e||$e!==t)&&(Ns=null,mr(e,t)),t=!1;var y=lt;e:do try{if(Qe!==0&&Be!==null){var N=Be,F=$t;switch(Qe){case 8:sc(),y=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var K=Qe;if(Qe=0,$t=null,gr(e,N,F,K),n&&fr){y=0;break e}break;default:K=Qe,Qe=0,$t=null,gr(e,N,F,K)}}sy(),y=lt;break}catch(ue){hp(e,ue)}while(!0);return t&&e.shellSuspendCounter++,En=Ea=null,qe=a,I.H=r,I.A=o,Be===null&&(tt=null,$e=0,Zi()),y}function sy(){for(;Be!==null;)vp(Be)}function ly(e,t){var n=qe;qe|=2;var a=gp(),r=yp();tt!==e||$e!==t?(Ns=null,Cs=Se()+500,mr(e,t)):fr=Cr(e,t);e:do try{if(Qe!==0&&Be!==null){t=Be;var o=$t;t:switch(Qe){case 1:Qe=0,$t=null,gr(e,t,o,1);break;case 2:case 9:if(_d(o)){Qe=0,$t=null,bp(t);break}t=function(){Qe!==2&&Qe!==9||tt!==e||(Qe=7),mn(e)},o.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:_d(o)?(Qe=0,$t=null,bp(t)):(Qe=0,$t=null,gr(e,t,o,7));break;case 5:var y=null;switch(Be.tag){case 26:y=Be.memoizedState;case 5:case 27:var N=Be;if(y?rh(y):N.stateNode.complete){Qe=0,$t=null;var F=N.sibling;if(F!==null)Be=F;else{var K=N.return;K!==null?(Be=K,Os(K)):Be=null}break t}}Qe=0,$t=null,gr(e,t,o,5);break;case 6:Qe=0,$t=null,gr(e,t,o,6);break;case 8:sc(),lt=6;break e;default:throw Error(u(462))}}oy();break}catch(ue){hp(e,ue)}while(!0);return En=Ea=null,I.H=a,I.A=r,qe=n,Be!==null?0:(tt=null,$e=0,Zi(),lt)}function oy(){for(;Be!==null&&!ee();)vp(Be)}function vp(e){var t=$f(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?Os(e):Be=t}function bp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Mf(n,t,t.pendingProps,t.type,void 0,$e);break;case 11:t=Mf(n,t,t.pendingProps,t.type.render,t.ref,$e);break;case 5:Eo(t);default:Hf(n,t),t=Be=gd(t,On),t=$f(n,t,On)}e.memoizedProps=e.pendingProps,t===null?Os(e):Be=t}function gr(e,t,n,a){En=Ea=null,Eo(t),ir=null,Gr=0;var r=t.return;try{if(Wg(e,r,t,n,$e)){lt=1,bs(e,Zt(n,e.current)),Be=null;return}}catch(o){if(r!==null)throw Be=r,o;lt=1,bs(e,Zt(n,e.current)),Be=null;return}t.flags&32768?(He||a===1?e=!0:fr||($e&536870912)!==0?e=!1:(Qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),xp(t,e)):Os(t)}function Os(e){var t=e;do{if((t.flags&32768)!==0){xp(t,Qn);return}e=t.return;var n=Jg(t.alternate,t,On);if(n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);lt===0&&(lt=5)}function xp(e,t){do{var n=ey(e.alternate,e);if(n!==null){n.flags&=32767,Be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Be=e;return}Be=e=n}while(e!==null);lt=6,Be=null}function Sp(e,t,n,a,r,o,y,N,F){e.cancelPendingCommit=null;do ks();while(ht!==0);if((qe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=Xl,Pm(e,n,o,y,N,F),e===tt&&(Be=tt=null,$e=0),hr=t,Kn=e,kn=n,ac=o,rc=r,up=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fy(Ue,function(){return Rp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=I.T,I.T=null,r=j.p,j.p=2,y=qe,qe|=4;try{ty(e,t,n)}finally{qe=y,j.p=r,I.T=a}}ht=1,Ep(),wp(),Ap()}}function Ep(){if(ht===1){ht=0;var e=Kn,t=hr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=I.T,I.T=null;var a=j.p;j.p=2;var r=qe;qe|=4;try{np(t,e);var o=bc,y=ld(e.containerInfo),N=o.focusedElem,F=o.selectionRange;if(y!==N&&N&&N.ownerDocument&&sd(N.ownerDocument.documentElement,N)){if(F!==null&&Vl(N)){var K=F.start,ue=F.end;if(ue===void 0&&(ue=K),"selectionStart"in N)N.selectionStart=K,N.selectionEnd=Math.min(ue,N.value.length);else{var pe=N.ownerDocument||document,te=pe&&pe.defaultView||window;if(te.getSelection){var ie=te.getSelection(),Ae=N.textContent.length,De=Math.min(F.start,Ae),Je=F.end===void 0?De:Math.min(F.end,Ae);!ie.extend&&De>Je&&(y=Je,Je=De,De=y);var Q=id(N,De),V=id(N,Je);if(Q&&V&&(ie.rangeCount!==1||ie.anchorNode!==Q.node||ie.anchorOffset!==Q.offset||ie.focusNode!==V.node||ie.focusOffset!==V.offset)){var Z=pe.createRange();Z.setStart(Q.node,Q.offset),ie.removeAllRanges(),De>Je?(ie.addRange(Z),ie.extend(V.node,V.offset)):(Z.setEnd(V.node,V.offset),ie.addRange(Z))}}}}for(pe=[],ie=N;ie=ie.parentNode;)ie.nodeType===1&&pe.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<pe.length;N++){var de=pe[N];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Gs=!!vc,bc=vc=null}finally{qe=r,j.p=a,I.T=n}}e.current=t,ht=2}}function wp(){if(ht===2){ht=0;var e=Kn,t=hr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=I.T,I.T=null;var a=j.p;j.p=2;var r=qe;qe|=4;try{Zf(e,t.alternate,t)}finally{qe=r,j.p=a,I.T=n}}ht=3}}function Ap(){if(ht===4||ht===3){ht=0,be();var e=Kn,t=hr,n=kn,a=up;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,hr=Kn=null,Tp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Zn=null),Al(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(et,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=I.T,r=j.p,j.p=2,I.T=null;try{for(var o=e.onRecoverableError,y=0;y<a.length;y++){var N=a[y];o(N.value,{componentStack:N.stack})}}finally{I.T=t,j.p=r}}(kn&3)!==0&&ks(),mn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===ic?oi++:(oi=0,ic=e):oi=0,ci(0)}}function Tp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vr(t)))}function ks(){return Ep(),wp(),Ap(),Rp()}function Rp(){if(ht!==5)return!1;var e=Kn,t=ac;ac=0;var n=Al(kn),a=I.T,r=j.p;try{j.p=32>n?32:n,I.T=null,n=rc,rc=null;var o=Kn,y=kn;if(ht=0,hr=Kn=null,kn=0,(qe&6)!==0)throw Error(u(331));var N=qe;if(qe|=4,lp(o.current),rp(o,o.current,y,n),qe=N,ci(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(et,o)}catch{}return!0}finally{j.p=r,I.T=a,Tp(e,t)}}function _p(e,t,n){t=Zt(n,t),t=zo(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(Nr(e,2),mn(e))}function We(e,t,n){if(e.tag===3)_p(e,e,n);else for(;t!==null;){if(t.tag===3){_p(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Zn===null||!Zn.has(a))){e=Zt(n,e),n=Cf(2),a=Gn(t,n,2),a!==null&&(Nf(n,a,t,e),Nr(a,2),mn(a));break}}t=t.return}}function oc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ry;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(ec=!0,r.add(n),e=cy.bind(null,e,t,n),t.then(e,e))}function cy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&($e&n)===n&&(lt===4||lt===3&&($e&62914560)===$e&&300>Se()-_s?(qe&2)===0&&mr(e,0):tc|=n,pr===$e&&(pr=0)),mn(e)}function Cp(e,t){t===0&&(t=Su()),e=ba(e,t),e!==null&&(Nr(e,t),mn(e))}function uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cp(e,n)}function dy(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Cp(e,n)}function fy(e,t){return ge(e,t)}var js=null,yr=null,cc=!1,Ls=!1,uc=!1,ea=0;function mn(e){e!==yr&&e.next===null&&(yr===null?js=yr=e:yr=yr.next=e),Ls=!0,cc||(cc=!0,hy())}function ci(e,t){if(!uc&&Ls){uc=!0;do for(var n=!1,a=js;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var o=0;else{var y=a.suspendedLanes,N=a.pingedLanes;o=(1<<31-it(42|e)+1)-1,o&=r&~(y&~N),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Op(a,o))}else o=$e,o=Fi(a,a===tt?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Cr(a,o)||(n=!0,Op(a,o));a=a.next}while(n);uc=!1}}function py(){Np()}function Np(){Ls=cc=!1;var e=0;ea!==0&&Ay()&&(e=ea);for(var t=Se(),n=null,a=js;a!==null;){var r=a.next,o=Ip(a,t);o===0?(a.next=null,n===null?js=r:n.next=r,r===null&&(yr=n)):(n=a,(e!==0||(o&3)!==0)&&(Ls=!0)),a=r}ht!==0&&ht!==5||ci(e),ea!==0&&(ea=0)}function Ip(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var y=31-it(o),N=1<<y,F=r[y];F===-1?((N&n)===0||(N&a)!==0)&&(r[y]=Bm(N,t)):F<=t&&(e.expiredLanes|=N),o&=~N}if(t=tt,n=$e,n=Fi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ye(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Cr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ye(a),Al(n)){case 2:case 8:n=Xe;break;case 32:n=Ue;break;case 268435456:n=Mn;break;default:n=Ue}return a=Dp.bind(null,e),n=ge(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ye(a),e.callbackPriority=2,e.callbackNode=null,2}function Dp(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ks()&&e.callbackNode!==n)return null;var a=$e;return a=Fi(e,e===tt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(fp(e,a,t),Ip(e,Se()),e.callbackNode!=null&&e.callbackNode===n?Dp.bind(null,e):null)}function Op(e,t){if(ks())return null;fp(e,t,!0)}function hy(){Ry(function(){(qe&6)!==0?ge(Ne,py):Np()})}function dc(){if(ea===0){var e=nr;e===0&&(e=za,za<<=1,(za&261888)===0&&(za=256)),ea=e}return ea}function kp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vi(""+e)}function jp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function my(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var o=kp((r[It]||null).action),y=a.submitter;y&&(t=(t=y[It]||null)?kp(t.formAction):y.getAttribute("formAction"),t!==null&&(o=t,y=null));var N=new qi("action","action",null,a,r);e.push({event:N,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ea!==0){var F=y?jp(r,y):new FormData(r);Do(n,{pending:!0,data:F,method:r.method,action:o},null,F)}}else typeof o=="function"&&(N.preventDefault(),F=y?jp(r,y):new FormData(r),Do(n,{pending:!0,data:F,method:r.method,action:o},o,F))},currentTarget:r}]})}}for(var fc=0;fc<ql.length;fc++){var pc=ql[fc],gy=pc.toLowerCase(),yy=pc[0].toUpperCase()+pc.slice(1);sn(gy,"on"+yy)}sn(ud,"onAnimationEnd"),sn(dd,"onAnimationIteration"),sn(fd,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(kg,"onTransitionRun"),sn(jg,"onTransitionStart"),sn(Lg,"onTransitionCancel"),sn(pd,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function Lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var y=a.length-1;0<=y;y--){var N=a[y],F=N.instance,K=N.currentTarget;if(N=N.listener,F!==o&&r.isPropagationStopped())break e;o=N,r.currentTarget=K;try{o(r)}catch(ue){Wi(ue)}r.currentTarget=null,o=F}else for(y=0;y<a.length;y++){if(N=a[y],F=N.instance,K=N.currentTarget,N=N.listener,F!==o&&r.isPropagationStopped())break e;o=N,r.currentTarget=K;try{o(r)}catch(ue){Wi(ue)}r.currentTarget=null,o=F}}}}function Pe(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var a=e+"__bubble";n.has(a)||(Mp(t,e,2,!1),n.add(a))}function hc(e,t,n){var a=0;t&&(a|=4),Mp(n,e,a,t)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function mc(e){if(!e[Ms]){e[Ms]=!0,Cu.forEach(function(n){n!=="selectionchange"&&(vy.has(n)||hc(n,!1,e),hc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ms]||(t[Ms]=!0,hc("selectionchange",!1,t))}}function Mp(e,t,n,a){switch(dh(t)){case 2:var r=Yy;break;case 8:r=qy;break;default:r=Ic}n=r.bind(null,t,n,e),r=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function gc(e,t,n,a,r){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var N=a.stateNode.containerInfo;if(N===r)break;if(y===4)for(y=a.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===r)return;y=y.return}for(;N!==null;){if(y=Fa(N),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){a=o=y;continue e}N=N.parentNode}}a=a.return}Bu(function(){var K=o,ue=Ol(n),pe=[];e:{var te=hd.get(e);if(te!==void 0){var ie=qi,Ae=e;switch(e){case"keypress":if(Gi(n)===0)break e;case"keydown":case"keyup":ie=dg;break;case"focusin":Ae="focus",ie=Ul;break;case"focusout":Ae="blur",ie=Ul;break;case"beforeblur":case"afterblur":ie=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=hg;break;case ud:case dd:case fd:ie=ng;break;case pd:ie=gg;break;case"scroll":case"scrollend":ie=Zm;break;case"wheel":ie=vg;break;case"copy":case"cut":case"paste":ie=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Gu;break;case"toggle":case"beforetoggle":ie=xg}var De=(t&4)!==0,Je=!De&&(e==="scroll"||e==="scrollend"),Q=De?te!==null?te+"Capture":null:te;De=[];for(var V=K,Z;V!==null;){var de=V;if(Z=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Z===null||Q===null||(de=Or(V,Q),de!=null&&De.push(di(V,de,Z))),Je)break;V=V.return}0<De.length&&(te=new ie(te,Ae,null,n,ue),pe.push({event:te,listeners:De}))}}if((t&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",ie=e==="mouseout"||e==="pointerout",te&&n!==Dl&&(Ae=n.relatedTarget||n.fromElement)&&(Fa(Ae)||Ae[Ua]))break e;if((ie||te)&&(te=ue.window===ue?ue:(te=ue.ownerDocument)?te.defaultView||te.parentWindow:window,ie?(Ae=n.relatedTarget||n.toElement,ie=K,Ae=Ae?Fa(Ae):null,Ae!==null&&(Je=f(Ae),De=Ae.tag,Ae!==Je||De!==5&&De!==27&&De!==6)&&(Ae=null)):(ie=null,Ae=K),ie!==Ae)){if(De=Vu,de="onMouseLeave",Q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(De=Gu,de="onPointerLeave",Q="onPointerEnter",V="pointer"),Je=ie==null?te:Dr(ie),Z=Ae==null?te:Dr(Ae),te=new De(de,V+"leave",ie,n,ue),te.target=Je,te.relatedTarget=Z,de=null,Fa(ue)===K&&(De=new De(Q,V+"enter",Ae,n,ue),De.target=Z,De.relatedTarget=Je,de=De),Je=de,ie&&Ae)t:{for(De=by,Q=ie,V=Ae,Z=0,de=Q;de;de=De(de))Z++;de=0;for(var Ie=V;Ie;Ie=De(Ie))de++;for(;0<Z-de;)Q=De(Q),Z--;for(;0<de-Z;)V=De(V),de--;for(;Z--;){if(Q===V||V!==null&&Q===V.alternate){De=Q;break t}Q=De(Q),V=De(V)}De=null}else De=null;ie!==null&&zp(pe,te,ie,De,!1),Ae!==null&&Je!==null&&zp(pe,Je,Ae,De,!0)}}e:{if(te=K?Dr(K):window,ie=te.nodeName&&te.nodeName.toLowerCase(),ie==="select"||ie==="input"&&te.type==="file")var Ge=Ju;else if(Zu(te))if(ed)Ge=Ig;else{Ge=Cg;var Re=_g}else ie=te.nodeName,!ie||ie.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?K&&Il(K.elementType)&&(Ge=Ju):Ge=Ng;if(Ge&&(Ge=Ge(e,K))){Ku(pe,Ge,n,ue);break e}Re&&Re(e,te,K),e==="focusout"&&K&&te.type==="number"&&K.memoizedProps.value!=null&&Nl(te,"number",te.value)}switch(Re=K?Dr(K):window,e){case"focusin":(Zu(Re)||Re.contentEditable==="true")&&(Xa=Re,Hl=K,Br=null);break;case"focusout":Br=Hl=Xa=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,od(pe,n,ue);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":od(pe,n,ue)}var Me;if(Bl)e:{switch(e){case"compositionstart":var Ve="onCompositionStart";break e;case"compositionend":Ve="onCompositionEnd";break e;case"compositionupdate":Ve="onCompositionUpdate";break e}Ve=void 0}else qa?Qu(e,n)&&(Ve="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ve="onCompositionStart");Ve&&(Yu&&n.locale!=="ko"&&(qa||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&qa&&(Me=Pu()):(Un=ue,Ll="value"in Un?Un.value:Un.textContent,qa=!0)),Re=zs(K,Ve),0<Re.length&&(Ve=new Hu(Ve,e,null,n,ue),pe.push({event:Ve,listeners:Re}),Me?Ve.data=Me:(Me=Wu(n),Me!==null&&(Ve.data=Me)))),(Me=Eg?wg(e,n):Ag(e,n))&&(Ve=zs(K,"onBeforeInput"),0<Ve.length&&(Re=new Hu("onBeforeInput","beforeinput",null,n,ue),pe.push({event:Re,listeners:Ve}),Re.data=Me)),my(pe,e,K,n,ue)}Lp(pe,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zs(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Or(e,n),r!=null&&a.unshift(di(e,r,o)),r=Or(e,t),r!=null&&a.push(di(e,r,o))),e.tag===3)return a;e=e.return}return[]}function by(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zp(e,t,n,a,r){for(var o=t._reactName,y=[];n!==null&&n!==a;){var N=n,F=N.alternate,K=N.stateNode;if(N=N.tag,F!==null&&F===a)break;N!==5&&N!==26&&N!==27||K===null||(F=K,r?(K=Or(n,o),K!=null&&y.unshift(di(n,K,F))):r||(K=Or(n,o),K!=null&&y.push(di(n,K,F)))),n=n.return}y.length!==0&&e.push({event:t,listeners:y})}var xy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function Up(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(Sy,"")}function Fp(e,t){return t=Up(t),Up(e)===t}function Ke(e,t,n,a,r,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ha(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ha(e,""+a);break;case"className":Pi(e,"class",a);break;case"tabIndex":Pi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pi(e,n,a);break;case"style":Uu(e,a,o);break;case"data":if(t!=="object"){Pi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Ke(e,t,"name",r.name,r,null),Ke(e,t,"formEncType",r.formEncType,r,null),Ke(e,t,"formMethod",r.formMethod,r,null),Ke(e,t,"formTarget",r.formTarget,r,null)):(Ke(e,t,"encType",r.encType,r,null),Ke(e,t,"method",r.method,r,null),Ke(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Vi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=vn);break;case"onScroll":a!=null&&Pe("scroll",e);break;case"onScrollEnd":a!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),Bi(e,"popover",a);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Bi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qm.get(n)||n,Bi(e,n,a))}}function yc(e,t,n,a,r,o){switch(n){case"style":Uu(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ha(e,a):(typeof a=="number"||typeof a=="bigint")&&Ha(e,""+a);break;case"onScroll":a!=null&&Pe("scroll",e);break;case"onScrollEnd":a!=null&&Pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),o=e[It]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Bi(e,n,a)}}}function At(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var a=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var y=n[o];if(y!=null)switch(o){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,o,y,n,null)}}r&&Ke(e,t,"srcSet",n.srcSet,n,null),a&&Ke(e,t,"src",n.src,n,null);return;case"input":Pe("invalid",e);var N=o=y=r=null,F=null,K=null;for(a in n)if(n.hasOwnProperty(a)){var ue=n[a];if(ue!=null)switch(a){case"name":r=ue;break;case"type":y=ue;break;case"checked":F=ue;break;case"defaultChecked":K=ue;break;case"value":o=ue;break;case"defaultValue":N=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(u(137,t));break;default:Ke(e,t,a,ue,n,null)}}ju(e,o,N,F,K,y,r,!1);return;case"select":Pe("invalid",e),a=y=o=null;for(r in n)if(n.hasOwnProperty(r)&&(N=n[r],N!=null))switch(r){case"value":o=N;break;case"defaultValue":y=N;break;case"multiple":a=N;default:Ke(e,t,r,N,n,null)}t=o,n=y,e.multiple=!!a,t!=null?Va(e,!!a,t,!1):n!=null&&Va(e,!!a,n,!0);return;case"textarea":Pe("invalid",e),o=r=a=null;for(y in n)if(n.hasOwnProperty(y)&&(N=n[y],N!=null))switch(y){case"value":a=N;break;case"defaultValue":r=N;break;case"children":o=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(91));break;default:Ke(e,t,y,N,n,null)}Mu(e,a,r,o);return;case"option":for(F in n)if(n.hasOwnProperty(F)&&(a=n[F],a!=null))switch(F){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ke(e,t,F,a,n,null)}return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(a=0;a<ui.length;a++)Pe(ui[a],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in n)if(n.hasOwnProperty(K)&&(a=n[K],a!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,K,a,n,null)}return;default:if(Il(t)){for(ue in n)n.hasOwnProperty(ue)&&(a=n[ue],a!==void 0&&yc(e,t,ue,a,n,void 0));return}}for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!=null&&Ke(e,t,N,a,n,null))}function Ey(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,y=null,N=null,F=null,K=null,ue=null;for(ie in n){var pe=n[ie];if(n.hasOwnProperty(ie)&&pe!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":F=pe;default:a.hasOwnProperty(ie)||Ke(e,t,ie,null,a,pe)}}for(var te in a){var ie=a[te];if(pe=n[te],a.hasOwnProperty(te)&&(ie!=null||pe!=null))switch(te){case"type":o=ie;break;case"name":r=ie;break;case"checked":K=ie;break;case"defaultChecked":ue=ie;break;case"value":y=ie;break;case"defaultValue":N=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(u(137,t));break;default:ie!==pe&&Ke(e,t,te,ie,a,pe)}}Cl(e,y,N,F,K,ue,o,r);return;case"select":ie=y=N=te=null;for(o in n)if(F=n[o],n.hasOwnProperty(o)&&F!=null)switch(o){case"value":break;case"multiple":ie=F;default:a.hasOwnProperty(o)||Ke(e,t,o,null,a,F)}for(r in a)if(o=a[r],F=n[r],a.hasOwnProperty(r)&&(o!=null||F!=null))switch(r){case"value":te=o;break;case"defaultValue":N=o;break;case"multiple":y=o;default:o!==F&&Ke(e,t,r,o,a,F)}t=N,n=y,a=ie,te!=null?Va(e,!!n,te,!1):!!a!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":ie=te=null;for(N in n)if(r=n[N],n.hasOwnProperty(N)&&r!=null&&!a.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ke(e,t,N,null,a,r)}for(y in a)if(r=a[y],o=n[y],a.hasOwnProperty(y)&&(r!=null||o!=null))switch(y){case"value":te=r;break;case"defaultValue":ie=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==o&&Ke(e,t,y,r,a,o)}Lu(e,te,ie);return;case"option":for(var Ae in n)if(te=n[Ae],n.hasOwnProperty(Ae)&&te!=null&&!a.hasOwnProperty(Ae))switch(Ae){case"selected":e.selected=!1;break;default:Ke(e,t,Ae,null,a,te)}for(F in a)if(te=a[F],ie=n[F],a.hasOwnProperty(F)&&te!==ie&&(te!=null||ie!=null))switch(F){case"selected":e.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Ke(e,t,F,te,a,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in n)te=n[De],n.hasOwnProperty(De)&&te!=null&&!a.hasOwnProperty(De)&&Ke(e,t,De,null,a,te);for(K in a)if(te=a[K],ie=n[K],a.hasOwnProperty(K)&&te!==ie&&(te!=null||ie!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(u(137,t));break;default:Ke(e,t,K,te,a,ie)}return;default:if(Il(t)){for(var Je in n)te=n[Je],n.hasOwnProperty(Je)&&te!==void 0&&!a.hasOwnProperty(Je)&&yc(e,t,Je,void 0,a,te);for(ue in a)te=a[ue],ie=n[ue],!a.hasOwnProperty(ue)||te===ie||te===void 0&&ie===void 0||yc(e,t,ue,te,a,ie);return}}for(var Q in n)te=n[Q],n.hasOwnProperty(Q)&&te!=null&&!a.hasOwnProperty(Q)&&Ke(e,t,Q,null,a,te);for(pe in a)te=a[pe],ie=n[pe],!a.hasOwnProperty(pe)||te===ie||te==null&&ie==null||Ke(e,t,pe,te,a,ie)}function Bp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],o=r.transferSize,y=r.initiatorType,N=r.duration;if(o&&N&&Bp(y)){for(y=0,N=r.responseEnd,a+=1;a<n.length;a++){var F=n[a],K=F.startTime;if(K>N)break;var ue=F.transferSize,pe=F.initiatorType;ue&&Bp(pe)&&(F=F.responseEnd,y+=ue*(F<N?1:(N-K)/(F-K)))}if(--a,t+=8*(o+y)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vc=null,bc=null;function Us(e){return e.nodeType===9?e:e.ownerDocument}function Pp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $p(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=null;function Ay(){var e=window.event;return e&&e.type==="popstate"?e===Sc?!1:(Sc=e,!0):(Sc=null,!1)}var Vp=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(e){return Hp.resolve(null).then(e).catch(_y)}:Vp;function _y(e){setTimeout(function(){throw e})}function ta(e){return e==="head"}function Gp(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),Sr(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")fi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,fi(n);for(var o=n.firstChild;o;){var y=o.nextSibling,N=o.nodeName;o[Ir]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=y}}else n==="body"&&fi(e.ownerDocument.body);n=r}while(n);Sr(t)}function Yp(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ec(n),Rl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Cy(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ir])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function Ny(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function qp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=nn(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$?"||e.data==="$~"}function Ac(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Iy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Tc=null;function Xp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return nn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Qp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Wp(e,t,n){switch(t=Us(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rl(e)}var an=new Map,Zp=new Set;function Fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jn=j.d;j.d={f:Dy,r:Oy,D:ky,C:jy,L:Ly,m:My,X:Uy,S:zy,M:Fy};function Dy(){var e=jn.f(),t=Is();return e||t}function Oy(e){var t=Ba(e);t!==null&&t.tag===5&&t.type==="form"?hf(t):jn.r(e)}var vr=typeof document>"u"?null:document;function Kp(e,t,n){var a=vr;if(a&&typeof t=="string"&&t){var r=Qt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Zp.has(r)||(Zp.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),At(t,"link",e),yt(t),a.head.appendChild(t)))}}function ky(e){jn.D(e),Kp("dns-prefetch",e,null)}function jy(e,t){jn.C(e,t),Kp("preconnect",e,t)}function Ly(e,t,n){jn.L(e,t,n);var a=vr;if(a&&e&&t){var r='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Qt(n.imageSizes)+'"]')):r+='[href="'+Qt(e)+'"]';var o=r;switch(t){case"style":o=br(e);break;case"script":o=xr(e)}an.has(o)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),an.set(o,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(pi(o))||t==="script"&&a.querySelector(hi(o))||(t=a.createElement("link"),At(t,"link",e),yt(t),a.head.appendChild(t)))}}function My(e,t){jn.m(e,t);var n=vr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Qt(a)+'"][href="'+Qt(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=xr(e)}if(!an.has(o)&&(e=w({rel:"modulepreload",href:e},t),an.set(o,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(hi(o)))return}a=n.createElement("link"),At(a,"link",e),yt(a),n.head.appendChild(a)}}}function zy(e,t,n){jn.S(e,t,n);var a=vr;if(a&&e){var r=Pa(a).hoistableStyles,o=br(e);t=t||"default";var y=r.get(o);if(!y){var N={loading:0,preload:null};if(y=a.querySelector(pi(o)))N.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=an.get(o))&&Rc(e,n);var F=y=a.createElement("link");yt(F),At(F,"link",e),F._p=new Promise(function(K,ue){F.onload=K,F.onerror=ue}),F.addEventListener("load",function(){N.loading|=1}),F.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Bs(y,t,a)}y={type:"stylesheet",instance:y,count:1,state:N},r.set(o,y)}}}function Uy(e,t){jn.X(e,t);var n=vr;if(n&&e){var a=Pa(n).hoistableScripts,r=xr(e),o=a.get(r);o||(o=n.querySelector(hi(r)),o||(e=w({src:e,async:!0},t),(t=an.get(r))&&_c(e,t),o=n.createElement("script"),yt(o),At(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Fy(e,t){jn.M(e,t);var n=vr;if(n&&e){var a=Pa(n).hoistableScripts,r=xr(e),o=a.get(r);o||(o=n.querySelector(hi(r)),o||(e=w({src:e,async:!0,type:"module"},t),(t=an.get(r))&&_c(e,t),o=n.createElement("script"),yt(o),At(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Jp(e,t,n,a){var r=(r=Ee.current)?Fs(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=br(n.href),n=Pa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=br(n.href);var o=Pa(r).hoistableStyles,y=o.get(e);if(y||(r=r.ownerDocument||r,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,y),(o=r.querySelector(pi(e)))&&!o._p&&(y.instance=o,y.state.loading=5),an.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},an.set(e,n),o||By(r,e,n,y.state))),t&&a===null)throw Error(u(528,""));return y}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xr(n),n=Pa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function br(e){return'href="'+Qt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function eh(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function By(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),At(t,"link",n),yt(t),e.head.appendChild(t))}function xr(e){return'[src="'+Qt(e)+'"]'}function hi(e){return"script[async]"+e}function th(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Qt(n.href)+'"]');if(a)return t.instance=a,yt(a),a;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),yt(a),At(a,"style",r),Bs(a,n.precedence,e),t.instance=a;case"stylesheet":r=br(n.href);var o=e.querySelector(pi(r));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;a=eh(n),(r=an.get(r))&&Rc(a,r),o=(e.ownerDocument||e).createElement("link"),yt(o);var y=o;return y._p=new Promise(function(N,F){y.onload=N,y.onerror=F}),At(o,"link",a),t.state.loading|=4,Bs(o,n.precedence,e),t.instance=o;case"script":return o=xr(n.src),(r=e.querySelector(hi(o)))?(t.instance=r,yt(r),r):(a=n,(r=an.get(o))&&(a=w({},n),_c(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),yt(r),At(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Bs(a,n.precedence,e));return t.instance}function Bs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,y=0;y<a.length;y++){var N=a[y];if(N.dataset.precedence===t)o=N;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ps=null;function nh(e,t,n){if(Ps===null){var a=new Map,r=Ps=new Map;r.set(n,a)}else r=Ps,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[Ir]||o[xt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var y=o.getAttribute(t)||"";y=e+y;var N=a.get(y);N?N.push(o):a.set(y,[o])}}return a}function ah(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Py(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $y(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=br(a.href),o=t.querySelector(pi(r));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$s.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,yt(o);return}o=t.ownerDocument||t,a=eh(a),(r=an.get(r))&&Rc(a,r),o=o.createElement("link"),yt(o);var y=o;y._p=new Promise(function(N,F){y.onload=N,y.onerror=F}),At(o,"link",a),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=$s.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Cc=0;function Vy(e,t){return e.stylesheets&&e.count===0&&Hs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Hs(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Cc===0&&(Cc=62500*wy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hs(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Cc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function $s(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vs=null;function Hs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vs=new Map,t.forEach(Hy,e),Vs=null,$s.call(e))}function Hy(e,t){if(!(t.state.loading&4)){var n=Vs.get(e);if(n)var a=n.get(null);else{n=new Map,Vs.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var y=r[o];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(n.set(y.dataset.precedence,y),a=y)}a&&n.set(null,a)}r=t.instance,y=r.getAttribute("data-precedence"),o=n.get(y)||a,o===a&&n.set(null,r),n.set(y,r),this.count++,a=$s.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:z,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Gy(e,t,n,a,r,o,y,N,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=El(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.hiddenUpdates=El(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function ih(e,t,n,a,r,o,y,N,F,K,ue,pe){return e=new Gy(e,t,n,y,F,K,ue,pe,N),t=1,o===!0&&(t|=24),o=Ft(3,null,null,t),e.current=o,o.stateNode=e,t=so(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},uo(o),e}function sh(e){return e?(e=Za,e):Za}function lh(e,t,n,a,r,o){r=sh(r),a.context===null?a.context=r:a.pendingContext=r,a=Hn(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Gn(e,a,t),n!==null&&(Mt(n,e,t),qr(n,e,t))}function oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nc(e,t){oh(e,t),(e=e.alternate)&&oh(e,t)}function ch(e){if(e.tag===13||e.tag===31){var t=ba(e,67108864);t!==null&&Mt(t,e,67108864),Nc(e,67108864)}}function uh(e){if(e.tag===13||e.tag===31){var t=Ht();t=wl(t);var n=ba(e,t);n!==null&&Mt(n,e,t),Nc(e,t)}}var Gs=!0;function Yy(e,t,n,a){var r=I.T;I.T=null;var o=j.p;try{j.p=2,Ic(e,t,n,a)}finally{j.p=o,I.T=r}}function qy(e,t,n,a){var r=I.T;I.T=null;var o=j.p;try{j.p=8,Ic(e,t,n,a)}finally{j.p=o,I.T=r}}function Ic(e,t,n,a){if(Gs){var r=Dc(a);if(r===null)gc(e,t,a,Ys,n),fh(e,a);else if(Qy(r,e,t,n,a))a.stopPropagation();else if(fh(e,a),t&4&&-1<Xy.indexOf(e)){for(;r!==null;){var o=Ba(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var y=qt(o.pendingLanes);if(y!==0){var N=o;for(N.pendingLanes|=2,N.entangledLanes|=2;y;){var F=1<<31-it(y);N.entanglements[1]|=F,y&=~F}mn(o),(qe&6)===0&&(Cs=Se()+500,ci(0))}}break;case 31:case 13:N=ba(o,2),N!==null&&Mt(N,o,2),Is(),Nc(o,2)}if(o=Dc(a),o===null&&gc(e,t,a,Ys,n),o===r)break;r=o}r!==null&&a.stopPropagation()}else gc(e,t,a,null,n)}}function Dc(e){return e=Ol(e),Oc(e)}var Ys=null;function Oc(e){if(Ys=null,e=Fa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ys=e,null}function dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case Ne:return 2;case Xe:return 8;case Ue:case Nt:return 32;case Mn:return 268435456;default:return 32}default:return 32}}var kc=!1,na=null,aa=null,ra=null,gi=new Map,yi=new Map,ia=[],Xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fh(e,t){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function vi(e,t,n,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Ba(t),t!==null&&ch(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Qy(e,t,n,a,r){switch(t){case"focusin":return na=vi(na,e,t,n,a,r),!0;case"dragenter":return aa=vi(aa,e,t,n,a,r),!0;case"mouseover":return ra=vi(ra,e,t,n,a,r),!0;case"pointerover":var o=r.pointerId;return gi.set(o,vi(gi.get(o)||null,e,t,n,a,r)),!0;case"gotpointercapture":return o=r.pointerId,yi.set(o,vi(yi.get(o)||null,e,t,n,a,r)),!0}return!1}function ph(e){var t=Fa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Ru(e.priority,function(){uh(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,Ru(e.priority,function(){uh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Dl=a,n.target.dispatchEvent(a),Dl=null}else return t=Ba(n),t!==null&&ch(t),e.blockedOn=n,!1;t.shift()}return!0}function hh(e,t,n){qs(e)&&n.delete(t)}function Wy(){kc=!1,na!==null&&qs(na)&&(na=null),aa!==null&&qs(aa)&&(aa=null),ra!==null&&qs(ra)&&(ra=null),gi.forEach(hh),yi.forEach(hh)}function Xs(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Wy)))}var Qs=null;function mh(e){Qs!==e&&(Qs=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Qs===e&&(Qs=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Oc(a||n)===null)continue;break}var o=Ba(n);o!==null&&(e.splice(t,3),t-=3,Do(o,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Sr(e){function t(F){return Xs(F,e)}na!==null&&Xs(na,e),aa!==null&&Xs(aa,e),ra!==null&&Xs(ra,e),gi.forEach(t),yi.forEach(t);for(var n=0;n<ia.length;n++){var a=ia[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ia.length&&(n=ia[0],n.blockedOn===null);)ph(n),n.blockedOn===null&&ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],o=n[a+1],y=r[It]||null;if(typeof o=="function")y||mh(n);else if(y){var N=null;if(o&&o.hasAttribute("formAction")){if(r=o,y=o[It]||null)N=y.formAction;else if(Oc(r)!==null)continue}else N=y.action;typeof N=="function"?n[a+1]=N:(n.splice(a,3),a-=3),mh(n)}}}function gh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(y){return r=y})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function jc(e){this._internalRoot=e}Ws.prototype.render=jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Ht();lh(n,a,e,t,null,null)},Ws.prototype.unmount=jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lh(e.current,2,null,e,null,null),Is(),t[Ua]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ia.length&&t!==0&&t<ia[n].priority;n++);ia.splice(n,0,e),n===0&&ph(e)}};var yh=l.version;if(yh!=="19.2.1")throw Error(u(527,yh,"19.2.1"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var Zy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{et=Zs.inject(Zy),gt=Zs}catch{}}return xi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",r=Af,o=Tf,y=Rf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=ih(e,1,!1,null,null,n,a,null,r,o,y,gh),e[Ua]=t.current,mc(e),new jc(t)},xi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,r="",o=Af,y=Tf,N=Rf,F=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(y=n.onCaughtError),n.onRecoverableError!==void 0&&(N=n.onRecoverableError),n.formState!==void 0&&(F=n.formState)),t=ih(e,1,!0,t,n??null,a,r,F,o,y,N,gh),t.context=sh(null),n=t.current,a=Ht(),a=wl(a),r=Hn(a),r.callback=null,Gn(n,r,a),n=a,t.current.lanes=n,Nr(t,n),mn(t),e[Ua]=t.current,mc(e),new Ws(t)},xi.version="19.2.1",xi}var _h;function o0(){if(_h)return zc.exports;_h=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(l){console.error(l)}}return c(),zc.exports=l0(),zc.exports}var c0=o0();const u0=ou(c0);var ve=(c=>(c.SETUP="ICISsetup",c.BUILDER="ICISbuilder",c.REVIEWER="ICISreviewer",c.SUPERVISOR="ICISsupervisor",c.REVISER="ICISreviser",c.FINALIZE="ICISfinalize",c))(ve||{}),Oe=(c=>(c.PENDING="pending",c.ACTIVE="active",c.COMPLETED="completed",c.ERROR="error",c.SKIPPED="skipped",c))(Oe||{}),Er=(c=>(c.SIMULATION="Simulation & Computational Modeling",c.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",c.SECONDARY_DATA="Secondary data analysis",c.EXPERIMENTAL="Laboratory & field experiments",c.SURVEY="Survey research",c))(Er||{}),Fe=(c=>(c.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",c.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",c.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",c.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",c.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",c.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",c.STEP5_EXECUTION="Step 5: Experiment Execution",c.STEP6_VISUALIZATION="Step 6: Results Visualization",c.STEP7_ANALYSIS="Step 7: Results Analysis",c.STEP8_PAPER_WRITING="Step 8: Paper Writing",c.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",c))(Fe||{});function d0(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const Ch={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:d0(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]};var f0=(c=>(c.VERIFIED="VERIFIED",c.PARTIAL="PARTIAL",c.UNVERIFIED="UNVERIFIED",c.REJECTED="REJECTED",c.DISCOVERED="DISCOVERED",c))(f0||{});const p0="/icis",h0={[ve.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText",promptFile:"ICISsetup.txt"},[ve.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer",promptFile:"ICISbuilder.txt"},[ve.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search",promptFile:"ICISreview.txt"},[ve.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck",promptFile:"ICISsupervisor.txt"},[ve.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3",promptFile:"ICISreviser.txt"},[ve.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send",promptFile:"ICISfinalize.txt"}},qh={[Fe.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[Fe.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[Fe.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[Fe.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[Fe.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[Fe.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[Fe.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[Fe.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[Fe.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[Fe.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[Fe.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};Er.SIMULATION+"",Er.ANALYTICAL+"",Er.SECONDARY_DATA+"",Er.EXPERIMENTAL+"",Er.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g0=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,s,u)=>u?u.toUpperCase():s.toLowerCase()),Nh=c=>{const l=g0(c);return l.charAt(0).toUpperCase()+l.slice(1)},Xh=(...c)=>c.filter((l,s,u)=>!!l&&l.trim()!==""&&u.indexOf(l)===s).join(" ").trim(),y0=c=>{for(const l in c)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=fe.forwardRef(({color:c="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:d="",children:f,iconNode:m,...p},b)=>fe.createElement("svg",{ref:b,...v0,width:l,height:l,stroke:c,strokeWidth:u?Number(s)*24/Number(l):s,className:Xh("lucide",d),...!f&&!y0(p)&&{"aria-hidden":"true"},...p},[...m.map(([h,A])=>fe.createElement(h,A)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(c,l)=>{const s=fe.forwardRef(({className:u,...d},f)=>fe.createElement(b0,{ref:f,iconNode:l,className:Xh(`lucide-${m0(Nh(c))}`,`lucide-${c}`,u),...d}));return s.displayName=Nh(c),s};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],S0=_e("activity",x0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],w0=_e("archive",E0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],T0=_e("arrow-left",A0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],_0=_e("atom",R0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],N0=_e("book-marked",C0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Qh=_e("book-open",I0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],O0=_e("briefcase",D0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Qc=_e("chart-column",k0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zt=_e("check",j0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ul=_e("chevron-down",L0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Wh=_e("chevron-right",M0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Oa=_e("circle-alert",z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ih=_e("circle-check-big",U0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wc=_e("circle-check",F0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Dh=_e("circle-play",B0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],Zh=_e("circle-stop",P0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Oh=_e("circle",$0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],H0=_e("clock",V0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Y0=_e("copy",G0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],X0=_e("cpu",q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],dl=_e("download",Q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Kh=_e("ellipsis-vertical",W0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ai=_e("external-link",Z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zc=_e("eye",K0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],ev=_e("fast-forward",J0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Oi=_e("file-text",tv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],av=_e("flask-conical",nv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],iv=_e("folder-plus",rv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],lv=_e("funnel",sv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],cv=_e("globe",ov);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],dv=_e("hammer",uv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],pv=_e("heart",fv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],mv=_e("leaf",hv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],yv=_e("link",gv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],kh=_e("loader-circle",vv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],xv=_e("loader",bv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ev=_e("lock",Sv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Av=_e("mic",wv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M5 12h14",key:"1ays0h"}]],Rv=_e("minus",Tv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Cv=_e("newspaper",_v);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Jh=_e("pen-line",Nv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Kc=_e("play",Iv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],cn=_e("refresh-cw",Dv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],rl=_e("rotate-ccw",Ov);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],jv=_e("save",kv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fl=_e("search",Lv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],uu=_e("send",Mv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],jh=_e("skip-forward",zv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Lh=_e("star",Uv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Bv=_e("target",Fv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$v=_e("trash-2",Pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Hv=_e("trending-down",Vv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],em=_e("trending-up",Gv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Jc=_e("triangle-alert",Yv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],du=_e("upload",qv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Qv=_e("user-check",Xv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Zv=_e("user",Wv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],pl=_e("users",Kv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tm=_e("x",Jv),eb=({currentStage:c,currentBuilderStep:l,stagesState:s,isPartialPaper:u=!1,currentRound:d=1,isProcessing:f=!1,onStageClick:m,onStageAction:p,onNewCase:b,onNewInterview:h,onPaperToInterview:A,onResearchAdmin:w,paperMode:_="draft",onPaperModeChange:v,sourceType:T="transcript-upload",selectedVenueId:g="icis"})=>{const[S,R]=fe.useState(null),[O,z]=fe.useState(null),B=fe.useRef(null),k=()=>{switch(T){case"voice-interview":return"Build paper from research interview";case"transcript-upload":return"Build paper from interview transcript";case"paper":return"Build paper based on previous paper";default:return"Build paper from research interview"}};fe.useEffect(()=>{const I=j=>{B.current&&!B.current.contains(j.target)&&R(null)};return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]);const H=(I,j)=>{const J=[];switch(j){case Oe.ACTIVE:J.push({action:"abort",label:"Abort",icon:i.jsx(Zh,{size:14})});break;case Oe.COMPLETED:J.push({action:"restart",label:"Restart",icon:i.jsx(rl,{size:14})});break;case Oe.ERROR:J.push({action:"restart",label:"Retry",icon:i.jsx(rl,{size:14})});break;case Oe.PENDING:const q=[ve.SETUP,ve.BUILDER,ve.REVIEWER,ve.SUPERVISOR,ve.REVISER,ve.FINALIZE],me=q.indexOf(I),C=me>0?q[me-1]:null,L=!C||s[C]===Oe.COMPLETED;J.push({action:"start",label:"Start",icon:i.jsx(Kc,{size:14}),disabled:!L||f}),I!==ve.SETUP&&I!==ve.FINALIZE&&J.push({action:"skip",label:"Skip",icon:i.jsx(ev,{size:14}),disabled:f});break;case Oe.SKIPPED:J.push({action:"restart",label:"Unskip & Run",icon:i.jsx(rl,{size:14})});break}return J},P=[ve.SETUP,ve.BUILDER,ve.REVIEWER,ve.SUPERVISOR,ve.REVISER,ve.FINALIZE],G={[ve.SETUP]:i.jsx(Oi,{size:16}),[ve.BUILDER]:i.jsx(dv,{size:16}),[ve.REVIEWER]:i.jsx(fl,{size:16}),[ve.SUPERVISOR]:i.jsx(Qv,{size:16}),[ve.REVISER]:i.jsx(Jh,{size:16}),[ve.FINALIZE]:i.jsx(uu,{size:16})},$=I=>{switch(I){case Oe.COMPLETED:return i.jsx(Wc,{size:16,className:"text-emerald-500"});case Oe.ACTIVE:return i.jsx(Dh,{size:16,className:"text-red-500 animate-pulse"});case Oe.ERROR:return i.jsx(Oa,{size:16,className:"text-red-500"});case Oe.SKIPPED:return i.jsx(jh,{size:16,className:"text-slate-400"});default:return i.jsx(Oh,{size:16,className:"text-slate-500"})}},oe=[Fe.STEP1_INTERVIEW_ANALYSIS,Fe.STEP1_5_DATA_ASSESSMENT,Fe.STEP2_RESEARCH_PLANNING,Fe.STEP2_FINAL_METADATA,Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS,Fe.STEP8_PAPER_WRITING,Fe.STEP9_FINAL_SUBMISSION],ce=I=>u?[Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS].includes(I):!1,D=I=>{if(ce(I))return"skipped";const j=oe.indexOf(I),J=l?oe.indexOf(l):-1;return I===l?"active":J>j?"completed":"pending"},Y=c===ve.BUILDER||s[ve.BUILDER]===Oe.ACTIVE,E=O!==null?O:Y,W=I=>{I.stopPropagation(),z(j=>j===null?!Y:!j)};return i.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[i.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[i.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"Automated Scientific Discovery"]}),i.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"AI-Powered Research Paper Authoring"})]}),d>1&&i.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),i.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",d]})]})}),u&&i.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:i.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[i.jsx(Oa,{size:12}),i.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),i.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[i.jsx("button",{onClick:()=>v==null?void 0:v("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${_==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),i.jsx("button",{onClick:()=>v==null?void 0:v("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${_==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),b&&i.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&b()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),w&&i.jsxs("button",{onClick:w,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[i.jsx(pl,{size:16}),"Research Admin"]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:P.map(I=>{const j=s[I],J=j===Oe.ACTIVE,q=j===Oe.COMPLETED,me=j===Oe.SKIPPED,C=c===I,L=h0[I],le=H(I,j);return i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${J?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":q?"border-emerald-500/50 bg-slate-900/50":me?"border-slate-700 bg-slate-900/30 opacity-60":C?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>m(I),children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:`${J?"text-red-400":q?"text-emerald-400":"text-slate-400"}`,children:G[I]}),i.jsx("span",{className:`font-medium text-sm ${J||C?"text-white":""}`,children:L.label})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[I===ve.BUILDER&&i.jsx("button",{onClick:W,className:"p-0.5 hover:bg-slate-700 rounded",children:E?i.jsx(ul,{size:14}):i.jsx(Wh,{size:14})}),$(j),p&&le.length>0&&i.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:ne=>{ne.stopPropagation(),R(S===I?null:I)},children:i.jsx(Kh,{size:14,className:"text-slate-400"})})]})]}),i.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:I===ve.BUILDER?k():L.description}),L.promptFile&&i.jsx("div",{className:"mt-2 pl-6",children:i.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:L.promptFile})})]}),S===I&&p&&i.jsx("div",{ref:B,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:le.map(({action:ne,label:se,icon:Ee,disabled:Ce})=>i.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${Ce?"text-slate-600 cursor-not-allowed":ne==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:Te=>{Te.stopPropagation(),Ce||(p(I,ne),R(null))},disabled:Ce,children:[Ee,se]},ne))}),I===ve.BUILDER&&E&&i.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:oe.map(ne=>{const se=qh[ne],Ee=D(ne);return i.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${Ee==="active"?"bg-red-900/30 text-red-300":Ee==="completed"?"text-emerald-400":Ee==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[Ee==="active"&&i.jsx(Dh,{size:12,className:"animate-pulse"}),Ee==="completed"&&i.jsx(Wc,{size:12}),Ee==="skipped"&&i.jsx(jh,{size:12}),Ee==="pending"&&i.jsx(Oh,{size:12}),i.jsxs("span",{children:[se.label,": ",se.description]})]},ne)})})]},I)})}),i.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:i.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[i.jsxs("p",{className:"flex justify-between",children:[i.jsx("span",{children:"Directory:"}),i.jsxs("span",{className:"text-slate-400",children:["/",g]})]}),i.jsxs("p",{className:"flex justify-between",children:[i.jsx("span",{children:"Paper Version:"}),i.jsxs("span",{className:"text-slate-400",children:["v",d]})]})]})})]})},Ci="icis_files_";class il extends Error{constructor(l,s,u){super(s),this.type=l,this.userMessage=s,this.technicalDetails=u,this.name="StorageError"}}function nm(){try{const c="__storage_test__";return localStorage.setItem(c,c),localStorage.removeItem(c),!0}catch{return!1}}function Tr(c,l){var u;if(!nm())throw new il("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const s=Ci+c.replace(/\\/g,"/");try{localStorage.setItem(s,l),console.log(`File written: ${c}`)}catch(d){const f=d;throw f.name==="QuotaExceededError"||(u=f.message)!=null&&u.includes("quota")?new il("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",f.message):new il("WRITE_ERROR",`Failed to save file: ${c}`,f.message)}}function hl(c){if(!nm())return console.warn("localStorage unavailable, returning null for read"),null;const l=Ci+c.replace(/\\/g,"/");try{return localStorage.getItem(l)}catch(s){const u=s;throw console.error(`Error reading file ${c}:`,u),new il("READ_ERROR",`Failed to read file: ${c}`,u.message)}}function tb(c){const l=[],s=new RegExp(c.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let u=0;u<localStorage.length;u++){const d=localStorage.key(u);if(d&&d.startsWith(Ci)){const f=d.substring(Ci.length);s.test(f)&&l.push(f)}}return l.sort()}function am(c){const l=`icis/Data/oversight_v${c.version}.txt`,s=nb(c);return Tr(l,s),Tr(l+".json",JSON.stringify(c,null,2)),l}function nb(c){const l=[];l.push(`ID=${c.paperId}`),l.push(`Version: ${c.version}`),l.push(`Timestamp: ${c.timestamp}`),l.push(""),l.push("================================================================================"),l.push("                     OVERSIGHT DASHBOARD"),l.push("================================================================================"),l.push(""),l.push("TABLE 1 - Review Scores Progression:"),l.push("------------------------------------------------------------------------"),l.push("| Criteria              | Score | Comment                              |"),l.push("|-----------------------|-------|--------------------------------------|"),l.push(`| Novelty               | ${c.reviewScores.novelty}     | ${c.reviewComments.novelty.substring(0,36).padEnd(36)} |`),l.push(`| Significance          | ${c.reviewScores.significance}     | ${c.reviewComments.significance.substring(0,36).padEnd(36)} |`),l.push(`| Methodological Rigor  | ${c.reviewScores.methodologicalRigor}     | ${c.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),l.push(`| Clarity               | ${c.reviewScores.clarity}     | ${c.reviewComments.clarity.substring(0,36).padEnd(36)} |`),l.push(`| Relevance             | ${c.reviewScores.relevance}     | ${c.reviewComments.relevance.substring(0,36).padEnd(36)} |`),l.push("|-----------------------|-------|--------------------------------------|"),l.push(`| AVERAGE               | ${c.averageScore.toFixed(1)}   |                                      |`),l.push("------------------------------------------------------------------------"),l.push(""),l.push("TABLE 2 - Error Counts:"),l.push("------------------------------------------------------------------------"),l.push("| Category        | Count | Details                                  |"),l.push("|-----------------|-------|------------------------------------------|");const s=c.errorDetails.majorErrors.length>0?c.errorDetails.majorErrors[0].substring(0,40):"None",u=c.errorDetails.minorErrors.length>0?c.errorDetails.minorErrors[0].substring(0,40):"None";if(l.push(`| Major Errors    | ${String(c.errorCounts.majorErrors).padStart(5)} | ${s.padEnd(40)} |`),l.push(`| Minor Errors    | ${String(c.errorCounts.minorErrors).padStart(5)} | ${u.padEnd(40)} |`),l.push("|-----------------|-------|------------------------------------------|"),l.push(`| TOTAL           | ${String(c.errorCounts.majorErrors+c.errorCounts.minorErrors).padStart(5)} |                                          |`),l.push("------------------------------------------------------------------------"),l.push(""),l.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),l.push("------------------------------------------------------------------------"),l.push("| Dimension       | Score | Rationale                               |"),l.push("|-----------------|-------|-----------------------------------------|"),l.push(`| Reliability     | ${c.trustworthiness.reliability}     | ${c.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),l.push(`| Benevolence     | ${c.trustworthiness.benevolence}     | ${c.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),l.push(`| Goal Alignment  | ${c.trustworthiness.goalAlignment}     | ${c.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),l.push("------------------------------------------------------------------------"),l.push(""),l.push("CRITICAL ALERTS:"),l.push("------------------------------------------------------------------------"),c.criticalAlerts.length===0)l.push("None - paper is progressing well");else for(const d of c.criticalAlerts)l.push(`CRITICAL ALERT ${d.number}: ${d.title} (BLOCKING ISSUE)`),l.push(`  Status: ${d.status}`),l.push(`  Impact: ${d.impact}`),l.push(`  Details: ${d.details}`),l.push(`  Action Required: ${d.actionRequired}`),l.push(`  Consequence if Unfixed: ${d.consequence}`),l.push("");return l.push("------------------------------------------------------------------------"),l.push(""),l.push("================================================================================"),l.join(`
`)}function fu(c){const l=`icis/Data/feedback_v${c.version}.txt`,s=[];if(s.push(`ID=${c.paperId}`),s.push(`Version: ${c.version}`),s.push(`Timestamp: ${c.timestamp}`),s.push(""),s.push("================================================================================"),s.push("                     CONSTRUCTIVE FEEDBACK"),s.push("================================================================================"),s.push(""),s.push("## Research Question and Contribution"),s.push(c.researchQuestion),s.push(""),s.push("## Method"),s.push(c.method),s.push(""),s.push("## Potential Impact"),s.push(c.potentialImpact),s.push(""),s.push("## Writing Quality"),s.push(c.writing),s.push(""),s.push("## Major Concerns"),c.majorConcerns.forEach((d,f)=>{s.push(`${f+1}. ${d}`)}),s.push(""),s.push("## Minor Corrections"),c.minorCorrections.forEach((d,f)=>{s.push(`${f+1}. ${d}`)}),s.push(""),s.push("## Overall Assessment"),s.push(c.overallAssessment),s.push(""),c.supervisorDirectives&&c.supervisorDirectives.length>0){s.push("================================================================================"),s.push("                     SUPERVISOR DIRECTIVES"),s.push("================================================================================");for(const d of c.supervisorDirectives)s.push(""),s.push(`Cycle ${d.cycle} - ${d.timestamp}`),s.push("------------------------------------------------------------------------"),s.push(d.directives)}s.push(""),s.push("================================================================================");const u=s.join(`
`);return Tr(l,u),Tr(l+".json",JSON.stringify(c,null,2)),l}function sl(c){const l=`icis/Data/oversight_v${c}.txt.json`,s=hl(l);if(s)try{return JSON.parse(s)}catch(u){console.error("Failed to parse oversight JSON:",u)}return null}function Ri(c){const l=`icis/Data/feedback_v${c}.txt.json`,s=hl(l);if(s)try{return JSON.parse(s)}catch(u){console.error("Failed to parse feedback JSON:",u)}return null}function pu(){const c=tb("icis/Data/oversight_v.*\\.txt\\.json"),l=[];for(const s of c){const u=hl(s);if(u)try{l.push(JSON.parse(u))}catch(d){console.error("Failed to parse oversight file:",s,d)}}return l.sort((s,u)=>s.version-u.version)}function Pc(c,l,s){const u=Ri(c);u&&(u.supervisorDirectives||(u.supervisorDirectives=[]),u.supervisorDirectives.push({cycle:l,directives:s,timestamp:new Date().toISOString()}),fu(u))}function $c(c,l,s){const u="icis/Data/supervisor_decision.txt",d=[];return d.push(`Decision: ${c}`),d.push(`Cycle: ${l}`),d.push(`Timestamp: ${new Date().toISOString()}`),Tr(u,d.join(`
`)),u}function ab(){const c=[];for(let l=0;l<localStorage.length;l++){const s=localStorage.key(l);s&&s.startsWith(Ci)&&c.push(s)}c.forEach(l=>localStorage.removeItem(l)),console.log(`Cleared ${c.length} files`)}function Mh(c,l,s="icis_paper"){const u=`icis/Paper/${s}_v${c}.tex`;return Tr(u,l),console.log(`Paper saved: ${u}`),u}function da(c,l="icis_paper"){const s=`icis/Paper/${l}_v${c}.tex`;return hl(s)}function rb(c,l="icis_paper"){const s=da(c,l);if(!s){console.error(`Paper version ${c} not found`);return}const u=`${l}_v${c}.tex`,d=new Blob([s],{type:"text/plain;charset=utf-8"}),f=URL.createObjectURL(d),m=document.createElement("a");m.href=f,m.download=u,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(f),console.log(`Downloaded: ${u}`)}const ki=({logs:c,height:l="h-64"})=>{const s=fe.useRef(null);return fe.useEffect(()=>{var u;(u=s.current)==null||u.scrollIntoView({behavior:"smooth"})},[c]),i.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${l} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[c.length===0?i.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):c.map((u,d)=>i.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:u},d)),i.jsx("div",{ref:s})]})},ib=({currentStep:c})=>{if(!c)return null;const l=qh[c];return i.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:i.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[i.jsx(cn,{size:16,className:"animate-spin"}),i.jsx("span",{className:"font-medium",children:l.label}),i.jsxs("span",{className:"text-indigo-500",children:["- ",l.description]})]})})},hu=({stageName:c,isProcessing:l,canAbort:s,canRestart:u,onAbort:d,onRestart:f})=>{const[m,p]=fe.useState(null),b=()=>{l&&p("abort")},h=()=>{p("restart")},A=()=>{m==="abort"?d():m==="restart"&&f(),p(null)};return i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"flex gap-2",children:[s&&l&&i.jsxs("button",{onClick:b,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[i.jsx(Zh,{size:14}),"Abort"]}),u&&!l&&i.jsxs("button",{onClick:h,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[i.jsx(rl,{size:14}),"Restart"]})]}),m&&i.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:i.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:i.jsx(Jc,{className:"text-amber-600",size:24})}),i.jsx("h3",{className:"text-lg font-bold text-slate-800",children:m==="abort"?"Abort Stage?":"Restart Stage?"})]}),i.jsx("p",{className:"text-slate-600 mb-6",children:m==="abort"?i.jsxs(i.Fragment,{children:["Are you sure you want to abort the ",i.jsx("strong",{children:c})," stage? Any progress will be lost and you may need to restart the stage."]}):i.jsxs(i.Fragment,{children:["Are you sure you want to restart the ",i.jsx("strong",{children:c})," stage? This will reset the stage and you'll need to run it again."]})}),i.jsxs("div",{className:"flex gap-3 justify-end",children:[i.jsx("button",{onClick:()=>p(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),i.jsx("button",{onClick:A,className:`px-4 py-2 text-white rounded-lg transition-colors ${m==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:m==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},zh=({label:c,accept:l=".txt",multiple:s=!1,required:u=!1,file:d,onFileSelect:f})=>{const m=fe.useRef(null),p=()=>{var A;(A=m.current)==null||A.click()},b=A=>{var _;const w=((_=A.target.files)==null?void 0:_[0])||null;f(w)},h=A=>{A.stopPropagation(),f(null),m.current&&(m.current.value="")};return i.jsxs("div",{onClick:p,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${d?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(du,{size:16,className:d?"text-emerald-600":"text-slate-400"}),i.jsxs("span",{className:"text-sm",children:[d?d.name:c,u&&!d&&i.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),d?i.jsx("button",{onClick:h,className:"p-1 hover:bg-emerald-200 rounded",children:i.jsx(tm,{size:16,className:"text-emerald-600"})}):i.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),i.jsx("input",{ref:m,type:"file",accept:l,multiple:s,onChange:b,className:"hidden"})]})};let Vc={},mu="icis",Js=null;const rm="venue_preferences";function ji(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"/asd":""}async function gu(){if(Js)return Js;try{const c=ji(),l=await fetch(`${c}/venues/registry.json`);if(!l.ok)throw new Error(`Failed to load venues registry: ${l.status}`);return Js=await l.json(),Js}catch(c){throw console.error("[VenueService] Failed to load registry:",c),c}}async function sb(){try{const c=ji(),l=await fetch(`${c}/venues/categories.json`);if(!l.ok)throw new Error(`Failed to load categories: ${l.status}`);const s=await l.json();return Object.values(s.categories).map(d=>({id:d.id,name:d.name,description:d.description,icon:d.icon,color:d.color,subcategoryCount:d.subcategories.length,venueCount:0}))}catch(c){throw console.error("[VenueService] Failed to load categories:",c),c}}async function lb(c){try{const l=ji(),s=await fetch(`${l}/venues/categories.json`);if(!s.ok)throw new Error(`Failed to load categories: ${s.status}`);const d=(await s.json()).categories[c];if(!d)return[];const f=await gu(),m={};for(const[p,b]of Object.entries(f.venues))b.category===c&&(m[b.subcategory]=(m[b.subcategory]||0)+1);return d.subcategories.map(p=>({id:p.id,name:p.name,category:c,venueCount:m[p.id]||0}))}catch(l){throw console.error("[VenueService] Failed to load subcategories:",l),l}}async function Li(){const c=await gu();return Object.entries(c.venues).map(([l,s])=>({id:l,name:s.name,acronym:s.acronym,category:s.category,subcategory:s.subcategory,venueType:s.type,description:"",verified:s.verified,h5Index:s.h5Index}))}async function ob(c){return(await Li()).filter(s=>s.category===c)}async function cb(c,l){return(await Li()).filter(u=>u.category===c&&u.subcategory===l)}async function ub(c){const l=await Li(),s=c.toLowerCase(),u=[];for(const d of l){let f=0,m="name";d.acronym.toLowerCase()===s?(f=100,m="acronym"):d.acronym.toLowerCase().startsWith(s)?(f=80,m="acronym"):d.acronym.toLowerCase().includes(s)?(f=60,m="acronym"):d.name.toLowerCase().includes(s)?(f=40,m="name"):d.subcategory.toLowerCase().includes(s)&&(f=20,m="category"),f>0&&u.push({venue:d,matchType:m,score:f})}return u.sort((d,f)=>f.score-d.score)}async function im(c){if(Vc[c])return Vc[c];const s=(await gu()).venues[c];if(!s)throw new Error(`Venue not found: ${c}`);try{const u=ji(),d=s.type==="journal"?"journals":"conferences",f=await fetch(`${u}/venues/${d}/${c}/config.json`);if(!f.ok)throw new Error(`Failed to load venue config: ${f.status}`);const m=await f.json();return Vc[c]=m,m}catch(u){throw console.error(`[VenueService] Failed to load config for ${c}:`,u),u}}async function db(){return im(mu)}function sm(c){mu=c,mb(c),console.log(`[VenueService] Switched to venue: ${c}`)}function fb(){return mu}function Rr(){const c={favorites:[],recent:[],showJournals:!0,showConferences:!0};if(typeof window>"u")return c;try{const l=localStorage.getItem(rm);if(l)return{...c,...JSON.parse(l)}}catch(l){console.error("[VenueService] Failed to load preferences:",l)}return c}function yu(c){if(!(typeof window>"u"))try{const s={...Rr(),...c};localStorage.setItem(rm,JSON.stringify(s))}catch(l){console.error("[VenueService] Failed to save preferences:",l)}}function pb(c){const l=Rr();l.favorites.includes(c)||(l.favorites.unshift(c),l.favorites.length>10&&(l.favorites=l.favorites.slice(0,10)),yu(l))}function hb(c){const l=Rr();l.favorites=l.favorites.filter(s=>s!==c),yu(l)}function mb(c){const l=Rr();l.recent=l.recent.filter(s=>s!==c),l.recent.unshift(c),l.recent.length>5&&(l.recent=l.recent.slice(0,5)),yu(l)}async function Uh(){const c=Rr(),l=await Li();return c.favorites.map(s=>l.find(u=>u.id===s)).filter(s=>s!==void 0)}async function Fh(){const c=Rr(),l=await Li();return c.recent.map(s=>l.find(u=>u.id===s)).filter(s=>s!==void 0)}async function gb(c){const l=await db(),s=l.prompts[c];if(!s)throw new Error(`Prompt type '${c}' not configured for ${l.acronym}`);try{const u=ji(),d=l.venueType==="journal"?"journals":"conferences";let f=await fetch(`${u}/venues/${d}/${l.id}/${s}`);if(f.ok||(f=await fetch(`${u}/venues/shared/${s}`)),!f.ok)throw new Error(`Prompt file not found: ${s}`);return await f.text()}catch(u){throw console.error(`[VenueService] Failed to load prompt ${c}:`,u),u}}const yb={"business-economics-management":O0,"chemical-material-sciences":av,"engineering-computer-science":X0,"health-medical-sciences":pv,"humanities-literature-arts":Qh,"life-sciences-earth-sciences":mv,"physics-mathematics":_0,"social-sciences":pl},Ti={"business-economics-management":{bg:"bg-blue-600",text:"text-blue-600",border:"border-blue-600",light:"bg-blue-50"},"chemical-material-sciences":{bg:"bg-orange-600",text:"text-orange-600",border:"border-orange-600",light:"bg-orange-50"},"engineering-computer-science":{bg:"bg-purple-600",text:"text-purple-600",border:"border-purple-600",light:"bg-purple-50"},"health-medical-sciences":{bg:"bg-red-600",text:"text-red-600",border:"border-red-600",light:"bg-red-50"},"humanities-literature-arts":{bg:"bg-amber-600",text:"text-amber-600",border:"border-amber-600",light:"bg-amber-50"},"life-sciences-earth-sciences":{bg:"bg-green-600",text:"text-green-600",border:"border-green-600",light:"bg-green-50"},"physics-mathematics":{bg:"bg-cyan-600",text:"text-cyan-600",border:"border-cyan-600",light:"bg-cyan-50"},"social-sciences":{bg:"bg-indigo-600",text:"text-indigo-600",border:"border-indigo-600",light:"bg-indigo-50"}},vb={"business-economics-management":"Business","chemical-material-sciences":"Chemistry","engineering-computer-science":"CS & Eng","health-medical-sciences":"Medical","humanities-literature-arts":"Humanities","life-sciences-earth-sciences":"Life Sci","physics-mathematics":"Physics","social-sciences":"Social"},bb={journal:N0,conference:Cv},xb={journal:{bg:"bg-emerald-100",text:"text-emerald-700"},conference:{bg:"bg-violet-100",text:"text-violet-700"}},Sb=({category:c,size:l=20,className:s=""})=>{const u=yb[c],d=Ti[c];return u?i.jsx(u,{size:l,className:`${d.text} ${s}`}):null},el=({type:c,className:l=""})=>{const s=xb[c],u=bb[c];return i.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${s.bg} ${s.text} ${l}`,children:[i.jsx(u,{size:12}),c==="journal"?"Journal":"Conference"]})},Hc=({h5Index:c,className:l=""})=>{if(!c)return null;let s="bg-gray-100 text-gray-700";return c>=100?s="bg-yellow-100 text-yellow-800":c>=50&&(s="bg-blue-100 text-blue-700"),i.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${s} ${l}`,children:["h5: ",c]})},Eb=({onVenueChange:c,disabled:l=!1,compact:s=!1})=>{var ke,ze,bt;const[u,d]=fe.useState([]),[f,m]=fe.useState(null),[p,b]=fe.useState([]),[h,A]=fe.useState(null),[w,_]=fe.useState([]),[v,T]=fe.useState("icis"),[g,S]=fe.useState(null),[R,O]=fe.useState(""),[z,B]=fe.useState([]),[k,H]=fe.useState(!1),[P,G]=fe.useState(!0),[$,oe]=fe.useState(!0),[ce,D]=fe.useState([]),[Y,E]=fe.useState([]),[W,I]=fe.useState(!0),[j,J]=fe.useState(!1),q=fe.useRef(null),me=fe.useRef(null);fe.useEffect(()=>{C()},[]),fe.useEffect(()=>{!W&&v&&c&&c(v)},[W]),fe.useEffect(()=>{f&&L(f)},[f]),fe.useEffect(()=>{f&&h?ne(f,h):f&&le(f)},[f,h]),fe.useEffect(()=>{v&&im(v).then(S).catch(()=>{S(null)})},[v]),fe.useEffect(()=>{R.length>=2?(H(!0),ub(R).then(he=>{let x=he.map(re=>re.venue);P||(x=x.filter(re=>re.venueType!=="journal")),$||(x=x.filter(re=>re.venueType!=="conference")),B(x),H(!1)})):(B([]),H(!1))},[R,P,$]),fe.useEffect(()=>{const he=x=>{q.current&&!q.current.contains(x.target)&&J(!1)};return document.addEventListener("mousedown",he),()=>document.removeEventListener("mousedown",he)},[]);const C=async()=>{try{const[he,x,re]=await Promise.all([sb(),Uh(),Fh()]);d(he),D(x),E(re),T(fb()),he.length>0&&m(he[0].id)}catch(he){console.error("Failed to load initial data:",he)}finally{I(!1)}},L=async he=>{try{const x=await lb(he);b(x.filter(re=>re.venueCount>0)),A(null)}catch(x){console.error("Failed to load subcategories:",x)}},le=async he=>{try{let x=await ob(he);P||(x=x.filter(re=>re.venueType!=="journal")),$||(x=x.filter(re=>re.venueType!=="conference")),_(x.sort((re,ae)=>(ae.h5Index||0)-(re.h5Index||0)))}catch(x){console.error("Failed to load venues:",x)}},ne=async(he,x)=>{try{let re=await cb(he,x);P||(re=re.filter(ae=>ae.venueType!=="journal")),$||(re=re.filter(ae=>ae.venueType!=="conference")),_(re.sort((ae,U)=>(U.h5Index||0)-(ae.h5Index||0)))}catch(re){console.error("Failed to load venues:",re)}},se=he=>{T(he),sm(he),J(!1),O(""),c==null||c(he),Fh().then(E)},Ee=async(he,x)=>{x.stopPropagation(),ce.some(U=>U.id===he)?hb(he):pb(he);const ae=await Uh();D(ae)},Ce=()=>w.find(he=>he.id===v)||ce.find(he=>he.id===v)||Y.find(he=>he.id===v),Te=R.length>=2?z:w,we=Ce();return W?i.jsx("div",{className:"animate-pulse bg-gray-200 rounded-lg h-12 w-full"}):s?i.jsxs("div",{className:"relative",ref:q,children:[i.jsxs("button",{type:"button",onClick:()=>!l&&J(!j),disabled:l,className:`
            flex items-center gap-2 px-3 py-2 rounded-lg border
            ${l?"bg-gray-100 cursor-not-allowed":"bg-white hover:bg-gray-50 cursor-pointer"}
            ${j?"ring-2 ring-blue-500 border-blue-500":"border-gray-300"}
          `,children:[i.jsx("span",{className:"font-medium",children:(we==null?void 0:we.acronym)||"Select Venue"}),i.jsx(ul,{className:`w-4 h-4 transition-transform ${j?"rotate-180":""}`})]}),j&&i.jsxs("div",{className:"absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden",children:[i.jsx("div",{className:"p-2 border-b border-gray-100",children:i.jsxs("div",{className:"relative",children:[i.jsx(fl,{className:"absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),i.jsx("input",{ref:me,type:"text",placeholder:"Search venues...",value:R,onChange:he=>O(he.target.value),className:"w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})}),i.jsx("div",{className:"max-h-72 overflow-y-auto",children:Te.map(he=>i.jsxs("button",{type:"button",onClick:()=>se(he.id),className:`
                    w-full px-3 py-2.5 text-left flex items-center gap-2 hover:bg-blue-50 transition-colors
                    ${he.id===v?"bg-blue-50 border-l-2 border-blue-500":""}
                  `,children:[he.id===v?i.jsx(zt,{className:"w-4 h-4 text-blue-600 flex-shrink-0"}):i.jsx("div",{className:"w-4 h-4 flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:`font-medium ${he.id===v?"text-blue-700":"text-gray-900"}`,children:he.acronym}),i.jsx(el,{type:he.venueType})]}),i.jsx("span",{className:"block text-xs text-gray-500 truncate",children:he.name})]}),!he.verified&&i.jsx(Oa,{className:"w-3.5 h-3.5 text-yellow-500 flex-shrink-0"})]},he.id))})]})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"relative",children:[i.jsx(fl,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Search journals and conferences...",value:R,onChange:he=>O(he.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),R&&i.jsx("button",{type:"button",onClick:()=>O(""),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:i.jsx(tm,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(lv,{className:"w-4 h-4 text-gray-500"}),i.jsx("span",{className:"text-sm text-gray-600",children:"Show:"})]}),i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:$,onChange:he=>oe(he.target.checked),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Conferences"})]}),i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:P,onChange:he=>G(he.target.checked),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Journals"})]})]}),we&&i.jsxs("div",{className:`p-4 rounded-lg border ${((ke=Ti[we.category])==null?void 0:ke.light)||"bg-blue-50"} border-${((ze=Ti[we.category])==null?void 0:ze.border)||"blue-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`flex-shrink-0 w-12 h-12 ${((bt=Ti[we.category])==null?void 0:bt.bg)||"bg-blue-600"} rounded-lg flex items-center justify-center`,children:i.jsx("span",{className:"text-white font-bold text-lg",children:we.acronym.slice(0,2)})}),i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h4",{className:"font-semibold text-gray-900",children:we.acronym}),i.jsx(el,{type:we.venueType}),i.jsx(Hc,{h5Index:we.h5Index})]}),i.jsx("p",{className:"text-sm text-gray-600",children:we.name})]}),i.jsx("button",{type:"button",onClick:he=>Ee(we.id,he),className:`p-2 rounded-full hover:bg-white/50 transition-colors ${ce.some(he=>he.id===we.id)?"text-yellow-500":"text-gray-400"}`,children:i.jsx(Lh,{className:"w-5 h-5",fill:ce.some(he=>he.id===we.id)?"currentColor":"none"})})]}),g&&g.officialLinks&&i.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-200/50",children:[i.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Official Guidelines"}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[g.officialLinks.callForPapers&&i.jsxs("a",{href:g.officialLinks.callForPapers,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors",children:[i.jsx(Oi,{className:"w-3.5 h-3.5"}),"Call for Papers",i.jsx(Ai,{className:"w-3 h-3"})]}),g.officialLinks.submissionInstructions&&i.jsxs("a",{href:g.officialLinks.submissionInstructions,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 rounded-full hover:bg-green-200 transition-colors",children:[i.jsx(Jh,{className:"w-3.5 h-3.5"}),"Submission Instructions",i.jsx(Ai,{className:"w-3 h-3"})]}),g.officialLinks.reviewerGuidelines&&i.jsxs("a",{href:g.officialLinks.reviewerGuidelines,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors",children:[i.jsx(pl,{className:"w-3.5 h-3.5"}),"Reviewer Guidelines",i.jsx(Ai,{className:"w-3 h-3"})]}),g.website&&i.jsxs("a",{href:g.website,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",children:[i.jsx(cv,{className:"w-3.5 h-3.5"}),"Website",i.jsx(Ai,{className:"w-3 h-3"})]})]})]}),!g&&!we.verified&&i.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200/50",children:i.jsxs("p",{className:"text-sm text-gray-500 flex items-center gap-2",children:[i.jsx(Oa,{className:"w-4 h-4 text-yellow-500"}),"Full configuration not yet available for this venue. Using default settings."]})})]}),(Y.length>0||ce.length>0)&&!R&&i.jsxs("div",{className:"space-y-3",children:[ce.length>0&&i.jsxs("div",{children:[i.jsxs("h4",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[i.jsx(Lh,{className:"w-4 h-4 text-yellow-500"}),"Favorites"]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:ce.map(he=>i.jsx("button",{type:"button",onClick:()=>se(he.id),className:`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${he.id===v?"bg-blue-100 border-blue-300 text-blue-700":"bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:he.acronym},he.id))})]}),Y.length>0&&i.jsxs("div",{children:[i.jsxs("h4",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[i.jsx(H0,{className:"w-4 h-4 text-gray-500"}),"Recent"]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:Y.map(he=>i.jsx("button",{type:"button",onClick:()=>se(he.id),className:`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${he.id===v?"bg-blue-100 border-blue-300 text-blue-700":"bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:he.acronym},he.id))})]})]}),!R&&i.jsx("div",{className:"border-b border-gray-200",children:i.jsx("nav",{className:"flex space-x-1 overflow-x-auto pb-1",children:u.map(he=>{const x=Ti[he.id],re=f===he.id;return i.jsxs("button",{type:"button",onClick:()=>m(he.id),className:`
                    flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors
                    ${re?`${x.light} ${x.text} border-b-2 ${x.border}`:"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}
                  `,children:[i.jsx(Sb,{category:he.id,size:16}),vb[he.id]]},he.id)})})}),!R&&f&&i.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[p.length>0&&i.jsxs("div",{className:"col-span-4 space-y-1 max-h-80 overflow-y-auto",children:[i.jsxs("button",{type:"button",onClick:()=>A(null),className:`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${h===null?"bg-gray-100 font-medium text-gray-900":"text-gray-600 hover:bg-gray-50"}`,children:["All (",w.length,")"]}),p.map(he=>i.jsxs("button",{type:"button",onClick:()=>A(he.id),className:`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${h===he.id?"bg-gray-100 font-medium text-gray-900":"text-gray-600 hover:bg-gray-50"}`,children:[he.name," (",he.venueCount,")"]},he.id))]}),i.jsxs("div",{className:`${p.length>0?"col-span-8":"col-span-12"} grid grid-cols-2 gap-2 max-h-80 overflow-y-auto`,children:[Te.map(he=>i.jsxs("button",{type:"button",onClick:()=>se(he.id),disabled:l,className:`
                  p-3 rounded-lg border text-left transition-all
                  ${he.id===v?"border-blue-500 bg-blue-50 ring-2 ring-blue-200":"border-gray-200 hover:border-blue-300 hover:bg-blue-50"}
                  ${l?"opacity-50 cursor-not-allowed":"cursor-pointer"}
                `,children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("span",{className:"font-semibold text-gray-900",children:he.acronym}),i.jsxs("div",{className:"flex items-center gap-1",children:[he.id===v&&i.jsx(zt,{className:"w-4 h-4 text-blue-600"}),!he.verified&&i.jsx(Oa,{className:"w-3 h-3 text-yellow-500"})]})]}),i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx(el,{type:he.venueType}),i.jsx(Hc,{h5Index:he.h5Index})]}),i.jsx("p",{className:"text-xs text-gray-500 line-clamp-2",children:he.name})]},he.id)),Te.length===0&&i.jsx("div",{className:"col-span-2 text-center py-8 text-gray-500",children:"No venues found"})]})]}),R&&i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 max-h-80 overflow-y-auto",children:k?i.jsx("div",{className:"col-span-full text-center py-8 text-gray-500",children:"Searching..."}):z.length>0?z.map(he=>i.jsxs("button",{type:"button",onClick:()=>se(he.id),disabled:l,className:`
                  p-3 rounded-lg border text-left transition-all
                  ${he.id===v?"border-blue-500 bg-blue-50 ring-2 ring-blue-200":"border-gray-200 hover:border-blue-300 hover:bg-blue-50"}
                `,children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("span",{className:"font-semibold text-gray-900",children:he.acronym}),he.id===v&&i.jsx(zt,{className:"w-4 h-4 text-blue-600"})]}),i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx(el,{type:he.venueType}),i.jsx(Hc,{h5Index:he.h5Index})]}),i.jsx("p",{className:"text-xs text-gray-500 line-clamp-2",children:he.name})]},he.id)):i.jsxs("div",{className:"col-span-full text-center py-8 text-gray-500",children:['No venues found for "',R,'"']})})]})},wb=({logs:c,stageStatus:l,isProcessing:s,uploadedFiles:u,onFileChange:d,onAction:f,detectionStatus:m,onRefreshDetection:p,hasExistingCase:b=!1,onVenueChange:h,onNewInterview:A,onPaperToInterview:w,onSourceTypeChange:_})=>{var Y;const[v,T]=fe.useState(!1),[g,S]=fe.useState("transcript-upload"),[R,O]=fe.useState(null),[z,B]=fe.useState(!1),[k,H]=fe.useState(!1),[P,G]=fe.useState(null);fe.useEffect(()=>{R&&(H(!0),G(null),sm(R),gb("template").then(async E=>{const W=new Blob([E],{type:"text/plain"}),I=new File([W],`${R}_template.txt`,{type:"text/plain"});d("template",I),B(!0),H(!1)}).catch(E=>{console.error("Failed to load template:",E),G("Template not available for this venue"),H(!1)}))},[R,d]);const $=E=>{O(E),B(!1),h==null||h(E)};fe.useEffect(()=>{_==null||_(g)},[g,_]);const oe=E=>{S(E),E==="voice-interview"&&A?A():E==="paper"&&w&&w()},ce=u.template&&u.interview,D=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(T(!0),f("NEW_CASE"),setTimeout(()=>T(!1),2e3))};return i.jsxs("div",{className:"w-full px-6 mt-6",children:[b&&i.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 max-w-4xl mx-auto",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(w0,{className:"text-blue-600",size:24}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),i.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),i.jsx("button",{onClick:D,disabled:v,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:v?i.jsxs(i.Fragment,{children:[i.jsx(cn,{className:"animate-spin",size:18}),"Backing up..."]}):i.jsxs(i.Fragment,{children:[i.jsx(iv,{size:18}),"New Project"]})})]})}),i.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[i.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("h2",{className:"text-lg font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(du,{className:"text-emerald-600",size:20}),"Source"]}),i.jsxs("div",{className:"flex gap-2 flex-1",children:[i.jsxs("button",{onClick:()=>oe("voice-interview"),className:`flex-1 px-4 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${g==="voice-interview"?"border-emerald-500 bg-emerald-50 text-emerald-700":"border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-slate-700"}`,children:[i.jsx(Av,{size:18}),i.jsx("span",{className:"font-medium text-sm",children:"Voice Interview"})]}),i.jsxs("button",{onClick:()=>S("transcript-upload"),className:`flex-1 px-4 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${g==="transcript-upload"?"border-purple-500 bg-purple-50 text-purple-700":"border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 text-slate-700"}`,children:[i.jsx(Oi,{size:18}),i.jsx("span",{className:"font-medium text-sm",children:"Transcript"})]}),i.jsxs("button",{onClick:()=>oe("paper"),className:`flex-1 px-4 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${g==="paper"?"border-blue-500 bg-blue-50 text-blue-700":"border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-700"}`,children:[i.jsx(Qh,{size:18}),i.jsx("span",{className:"font-medium text-sm",children:"Paper"})]})]})]}),g==="transcript-upload"&&i.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4",children:[i.jsx(zh,{label:"Transcript",accept:".txt",required:!0,file:u.interview??null,onFileSelect:E=>d("interview",E)}),i.jsx(zh,{label:"Data (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:u.dataFile??null,onFileSelect:E=>d("dataFile",E)})]}),m&&m.detected.interview&&i.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-green-50 border border-green-200 inline-flex items-center gap-2",children:[i.jsx(Ih,{className:"text-green-600",size:16}),i.jsx("span",{className:"text-green-800 font-medium text-sm",children:"Files auto-detected"})]})]}),i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("h2",{className:"text-lg font-bold text-slate-800 flex items-center gap-2 mb-4",children:[i.jsx(Bv,{className:"text-indigo-600",size:20}),"Target"]}),i.jsx(Eb,{onVenueChange:$,disabled:s||l===Oe.COMPLETED}),R&&i.jsxs("div",{className:"mt-6 p-4 rounded-lg border border-slate-200 bg-slate-50",children:[i.jsx("h4",{className:"font-medium text-slate-700 mb-2",children:"Template Status"}),k?i.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[i.jsx(xv,{className:"animate-spin",size:18}),i.jsx("span",{children:"Loading template..."})]}):z?i.jsxs("div",{className:"flex items-center gap-2 text-green-600",children:[i.jsx(Ih,{size:18}),i.jsxs("span",{children:["Template loaded: ",(Y=u.template)==null?void 0:Y.name]})]}):P?i.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[i.jsx(Oa,{size:18}),i.jsx("span",{children:P})]}):null]})]})]}),i.jsxs("div",{className:"max-w-4xl mx-auto mt-6",children:[u.participantId&&i.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg mb-4",children:i.jsxs("p",{className:"text-sm text-indigo-800",children:[i.jsx("strong",{children:"ID:"})," ",u.participantId]})}),i.jsx(ki,{logs:c,height:"h-32"}),i.jsx("div",{className:"mt-4 flex justify-end gap-3",children:i.jsxs("button",{onClick:()=>f("START_SETUP"),disabled:s||!ce,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[s?i.jsx(cn,{className:"animate-spin",size:18}):i.jsx(Kc,{size:18}),"Verify Files"]})}),!ce&&i.jsx("p",{className:"text-xs text-amber-600 text-center mt-4",children:"Please select a source and target venue to proceed."}),l===Oe.COMPLETED&&i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 mt-6",children:[i.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),i.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),i.jsxs("button",{onClick:()=>f("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[i.jsx(Kc,{size:18}),"Start Building Paper"]})]}),i.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3 mt-6",children:[i.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),i.jsxs("div",{className:"flex gap-3",children:[i.jsx("button",{onClick:()=>f("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),i.jsx("button",{onClick:()=>f("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})]})},Ab=({logs:c,isProcessing:l,isPartialPaper:s,currentBuilderStep:u,paperContent:d,onAbort:f,onRestart:m})=>i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${l?"animate-spin":""}`}),"Building Research Paper",s&&i.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),i.jsx(hu,{stageName:"Builder",isProcessing:l,canAbort:!0,canRestart:!l&&!!d,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),i.jsx(ib,{currentStep:u}),i.jsx(ki,{logs:c,height:"h-48"}),i.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),i.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:d?i.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:d}):i.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),Tb=({allOversight:c,compact:l=!1})=>{if(c.length===0)return null;const s=(w,_)=>_>w?"up":_<w?"down":"same",u=({trend:w,size:_=14})=>w==="up"?i.jsx(em,{size:_,className:"text-emerald-500"}):w==="down"?i.jsx(Hv,{size:_,className:"text-red-500"}):i.jsx(Rv,{size:_,className:"text-slate-400"}),d=(w,_=4)=>w>=_?"text-emerald-600":w>=_-1?"text-amber-600":"text-red-600",f=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],m=c[0],p=c[c.length-1],b=c.length>1,h=b?((p.averageScore-m.averageScore)/m.averageScore*100).toFixed(1):"0",A=b?Math.round((1-(p.errorCounts.majorErrors+p.errorCounts.minorErrors)/Math.max(1,m.errorCounts.majorErrors+m.errorCounts.minorErrors))*100):0;return l?i.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(Qc,{size:18,className:"text-indigo-600"}),i.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),b&&i.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(h)>0?"bg-emerald-100 text-emerald-700":parseFloat(h)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(h)>0?"+":"",h,"% overall"]})]}),i.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:f.map(({key:w,label:_})=>{const v=m.reviewScores[w]||0,T=p.reviewScores[w]||0,g=s(v,T);return i.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[i.jsx("div",{className:"text-slate-500 truncate mb-1",children:_}),i.jsxs("div",{className:"flex items-center justify-center gap-1",children:[i.jsx("span",{className:`font-bold ${d(T)}`,children:T}),b&&i.jsx(u,{trend:g,size:12})]}),b&&v!==T&&i.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",v]})]},w)})}),i.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-slate-500",children:"Average:"}),i.jsx("span",{className:`font-bold ${d(p.averageScore)}`,children:p.averageScore.toFixed(1)}),b&&i.jsxs(i.Fragment,{children:[i.jsx(u,{trend:s(m.averageScore,p.averageScore)}),i.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",m.averageScore.toFixed(1),")"]})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-slate-500",children:"Errors:"}),i.jsx("span",{className:`font-bold ${p.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:p.errorCounts.majorErrors+p.errorCounts.minorErrors}),b&&A!==0&&i.jsxs("span",{className:`text-xs ${A>0?"text-emerald-600":"text-red-600"}`,children:["(",A>0?"-":"+",Math.abs(A),"%)"]})]})]}),b&&i.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[i.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",c.length," rounds):"]}),i.jsx("div",{className:"flex gap-1",children:c.map((w,_)=>i.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${_===c.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",w.version,": ",w.averageScore.toFixed(1)]},_))})]})]}):i.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Qc,{size:20,className:"text-indigo-600"}),i.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),b&&i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(h)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(h)>0?"+":"",h,"% score change"]}),i.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${A>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[A>0?"-":"+",Math.abs(A),"% errors"]})]})]}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-200",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),c.map((w,_)=>i.jsxs("th",{className:`text-center p-2 ${_===c.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",w.version]},_)),b&&i.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),i.jsxs("tbody",{children:[f.map(({key:w,label:_})=>{const v=c.map(g=>g.reviewScores[w]||0),T=b?s(v[0],v[v.length-1]):"same";return i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"p-2 font-medium",children:_}),v.map((g,S)=>i.jsx("td",{className:`text-center p-2 ${S===v.length-1?"bg-indigo-50/50":""} ${d(g)}`,children:g},S)),b&&i.jsx("td",{className:"text-center p-2",children:i.jsxs("div",{className:"flex items-center justify-center gap-1",children:[i.jsx(u,{trend:T}),T==="up"&&i.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",v[v.length-1]-v[0]]}),T==="down"&&i.jsx("span",{className:"text-red-600 text-xs",children:v[v.length-1]-v[0]})]})})]},w)}),i.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"Average"}),c.map((w,_)=>i.jsx("td",{className:`text-center p-2 ${_===c.length-1?"bg-indigo-100":""} ${d(w.averageScore)}`,children:w.averageScore.toFixed(1)},_)),b&&i.jsx("td",{className:"text-center p-2",children:i.jsx("div",{className:"flex items-center justify-center gap-1",children:i.jsx(u,{trend:s(m.averageScore,p.averageScore)})})})]})]})]})}),i.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[i.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),i.jsx("div",{className:"flex items-center gap-2",children:c.map((w,_)=>i.jsxs("span",{className:`px-2 py-1 rounded text-sm ${_===c.length-1?w.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",w.version,": ",w.errorCounts.majorErrors]},_))})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),i.jsx("div",{className:"flex items-center gap-2",children:c.map((w,_)=>i.jsxs("span",{className:`px-2 py-1 rounded text-sm ${_===c.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",w.version,": ",w.errorCounts.minorErrors]},_))})]})]})]})]})},un="http://localhost:3001/api";function _r(){return{"Content-Type":"application/json"}}let mt=null;async function Ln(){try{const c=new AbortController,l=setTimeout(()=>c.abort(),1e3),s=await fetch(`${un}/health`,{signal:c.signal});return clearTimeout(l),mt=(await s.json()).status==="ok",mt}catch{return mt=!1,!1}}async function lm(){var c,l;try{const s=await fetch(`${un}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!s.ok)return{success:!1,error:`Server error: ${s.status}`};const u=await s.json();return u.success&&console.log("[FileApi] Manifest refreshed:",(l=(c=u.manifest)==null?void 0:c.files)==null?void 0:l.map(d=>d.filename)),u}catch(s){return console.error("[FileApi] Failed to refresh manifest:",s),{success:!1,error:s.message}}}function vu(c,l,s="text/plain"){const u=new Blob([l],{type:s}),d=URL.createObjectURL(u),f=document.createElement("a");f.href=d,f.download=c,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d)}async function eu(c,l){if(mt===null&&await Ln(),mt)try{const u=await(await fetch(`${un}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:l})})).json();if(u.success)return u}catch{console.warn("Backend save failed, falling back to download")}try{return vu(c,l,"application/x-tex"),{success:!0,path:`Downloads/${c}`}}catch(s){return{success:!1,error:s.message}}}async function tu(c,l){const s=typeof l=="string"?l:JSON.stringify(l,null,2);if(mt===null&&await Ln(),mt)try{const d=await(await fetch(`${un}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:s})})).json();if(d.success)return d}catch{console.warn("Backend save failed, falling back to download")}try{return vu(c,s,"application/json"),{success:!0,path:`Downloads/${c}`}}catch(u){return{success:!1,error:u.message}}}async function om(c){if(mt===null&&await Ln(),mt)try{const s=await(await fetch(`${un}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:c})})).json();if(s.success)return s}catch{console.warn("Backend save failed, falling back to downloads")}try{const l=[];for(const s of c){const u=typeof s.content=="string"?s.content:JSON.stringify(s.content,null,2),d=s.directory==="paper"?"application/x-tex":"application/json";await new Promise(f=>setTimeout(f,200)),vu(s.filename,u,d),l.push(s.filename)}return{success:!0,files:l}}catch(l){return{success:!1,error:l.message}}}async function cm(c,l,s,u,d,f){const m=d?`${d}_`:"",p=await om([{directory:"data",filename:`${m}oversight_v${c}.json`,content:l},{directory:"data",filename:`${m}feedback_v${c}.json`,content:s},{directory:"paper",filename:`${m}icis_paper_v${c}.tex`,content:u}]);if(f)try{const b="https://icis-deploy-12-10-2025.vercel.app";b&&(await fetch(`${b}/api/participants`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,oversight:l,feedback:s,round:c})}),console.log(`[FileApi] Saved oversight/feedback v${c} to blob for ${f}`))}catch(b){console.warn("[FileApi] Failed to save to blob:",b)}return p}const fa="https://icis-deploy-12-10-2025.vercel.app";let ka=null;async function um(c,l,s){const u=(l.match(/\\begin\{tikzpicture\}/g)||[]).length,d=(s==null?void 0:s.length)||0,f=Math.round(l.length/1024),m=Am(),p=!!m;try{console.log(`[LaTeX] Compiling via Vercel cloud... (${f} KB, ${u} TikZ, ${d} PNG figures${p?", with .bib":""})`);const b=new AbortController,h=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),b.abort()},3e5),A={filename:c,content:l,figures:s};m&&(A.bibliography=m);let w;try{w=await fetch(`${fa}/api/compile-latex`,{method:"POST",headers:_r(),signal:b.signal,body:JSON.stringify(A)}),clearTimeout(h)}catch(v){if(clearTimeout(h),v.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${u} TikZ figures may be too complex.`};throw v}const _=await w.json();return _.success&&_.pdfBase64?(ka={filename:_.pdfFilename,base64:_.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${_.pdfFilename}`)):_.success||console.warn(`[LaTeX] Cloud compilation failed: ${_.error}`),_}catch(b){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",b)}if(mt===null&&await Ln(),!mt)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${un}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:l})})).json()}catch(b){return{success:!1,error:`Compilation request failed: ${b.message}`}}}function bu(){if(!ka)return null;const c=atob(ka.base64),l=new Uint8Array(c.length);for(let u=0;u<c.length;u++)l[u]=c.charCodeAt(u);const s=new Blob([l],{type:"application/pdf"});return{filename:ka.filename,blob:s}}function dm(c){return`${un}/get-pdf/${encodeURIComponent(c)}`}async function fm(c){const l=bu();if(l&&l.filename===c){const d=URL.createObjectURL(l.blob),f=document.createElement("a");f.href=d,f.download=c,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d);return}const s=dm(c),u=document.createElement("a");u.href=s,u.download=c,document.body.appendChild(u),u.click(),document.body.removeChild(u)}async function pm(c){if(!ka)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const s=await(await fetch(`${fa}/api/create-viewer-link`,{method:"POST",headers:_r(),body:JSON.stringify({filename:ka.filename,pdfBase64:ka.base64})})).json();if(s.success)return console.log(`[Viewer] Link created: ${s.fullUrl}`),s;console.warn("[Viewer] Cloud API returned error:",s.error)}catch(l){console.warn("[Viewer] Cloud API failed:",l)}if(mt===null&&await Ln(),!mt)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${un}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:c})})).json()}catch(l){return{success:!1,error:`Failed to create viewer link: ${l.message}`}}}function hm(c){window.open(c,"_blank","noopener,noreferrer")}async function ml(c,l="full"){var s;try{console.log(`[Cloud Python] Analyzing data (${c.length} chars, type: ${l})...`);const d=await(await fetch(`${fa}/api/analyze-data`,{method:"POST",headers:_r(),body:JSON.stringify({csvContent:c,analysisType:l})})).json();return d.success?console.log(`[Cloud Python] Analysis complete: ${((s=d.figures)==null?void 0:s.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${d.error}`),d}catch(u){return console.error("[Cloud Python] Error:",u),{success:!1,error:u.message}}}async function gl(c,l,s){const u=La();if(u!=null&&u.content&&fa){console.log("[executePythonScript] Trying cloud Python analysis...");const d=await ml(u.content,"full");if(d.success){const f=[];return d.chart_data&&d.chart_data.forEach((m,p)=>{f.push({filename:`${m.type}_${m.column||m.x_column||p}.json`,path:`cloud://chart_data/${p}`,size:JSON.stringify(m).length,base64:btoa(JSON.stringify(m))})}),{success:!0,stdout:d.text_summary||"",dataFileFound:!0,generatedFigures:f}}}if(mt===null&&await Ln(),!mt)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${c}, dataFile=${s||"UNDEFINED"}`);const d={filename:c,code:l,dataFile:s};console.log("[executePythonScript] Request body dataFile:",d.dataFile);const m=await(await fetch(`${un}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${m.dataFileFound}, dataFilePath=${m.dataFilePath||"NONE"}`),m}catch(d){return{success:!1,error:`Python execution request failed: ${d.message}`}}}async function mm(){if(mt===null&&await Ln(),!mt)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${un}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(c){return{success:!1,error:`Backup request failed: ${c.message}`}}}let Tt=null;async function gm(c){try{const l=await c.arrayBuffer(),s=btoa(new Uint8Array(l).reduce((f,m)=>f+String.fromCharCode(m),""));console.log(`[Cloud Upload] Uploading ${c.name} (${c.size} bytes)...`);const d=await(await fetch(`${fa}/api/upload-data`,{method:"POST",headers:_r(),body:JSON.stringify({filename:c.name,content:s,contentType:c.type})})).json();return d.success&&(Tt={filename:c.name,blobUrl:d.blobUrl},console.log(`[Cloud Upload] Success: ${d.blobUrl}`)),d}catch(l){return console.error("[Cloud Upload] Error:",l),{success:!1,error:l.message}}}function La(){return Tt}async function ym(){if(!Tt||!Tt.blobUrl)return console.log("[Cloud Delete] No data file to delete"),{success:!0};try{console.log(`[Cloud Delete] Deleting: ${Tt.blobUrl}`);const l=await(await fetch(`${fa}/api/delete-data`,{method:"POST",headers:_r(),body:JSON.stringify({blobUrl:Tt.blobUrl})})).json();return l.success&&(console.log("[Cloud Delete] Data file deleted successfully"),Tt=null),l}catch(c){return console.error("[Cloud Delete] Error:",c),{success:!1,error:c.message}}}function vm(){Tt=null}async function nu(c){try{console.log(`[Cloud Read] Reading from: ${c}`);const s=await(await fetch(`${fa}/api/read-data?url=${encodeURIComponent(c)}`)).json();return s.success&&Tt&&(Tt.content=s.content),s}catch(l){return console.error("[Cloud Read] Error:",l),{success:!1,error:l.message}}}async function bm(c){if(Tt&&Tt.filename===c&&Tt.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),nu(Tt.blobUrl);if(mt===null&&await Ln(),!mt)return Tt&&Tt.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),nu(Tt.blobUrl)):{success:!1,error:"Backend server not available"};try{const s=await(await fetch(`${un}/read-file/data/${encodeURIComponent(c)}`)).json();if(!s.success)return{success:!1,error:s.error||"Failed to read file"};const u=s.content,d=u.split(/\r?\n/),f=d[0]||"",m=d.filter(p=>p.trim()).length;return{success:!0,filename:c,firstLine:f,totalLines:m,content:u}}catch(l){return{success:!1,error:l.message}}}async function Rb(c){if(!c||c.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${c.length} figures via QuickChart.io...`);const s=await(await fetch(`${fa}/api/quickchart`,{method:"POST",headers:_r(),body:JSON.stringify({chartData:c})})).json();return s.success?console.log(`[QuickChart] Generated ${s.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${s.error}`),s}catch(l){return console.error("[QuickChart] Error:",l),{success:!1,error:l.message}}}let la=[];function xm(){if(la.length>0)return la;try{const c=localStorage.getItem("icis_png_figures");if(c){const l=JSON.parse(c);if(l&&l.length>0)return console.log(`[PNG Storage] Recovered ${l.length} session figures from localStorage`),la=l.map(s=>({filename:s.filename,blobUrl:`data:image/png;base64,${s.base64}`,description:""})),la}}catch(c){console.warn("[PNG Storage] Could not read session figures from localStorage:",c)}return la}async function Sm(){const c=[];for(const l of la)try{const s=await fetch(l.blobUrl);if(s.ok){const u=await s.blob();c.push({filename:l.filename,blob:u})}else console.warn(`[PNG Figures] Failed to download ${l.filename}: ${s.status}`)}catch(s){console.warn(`[PNG Figures] Error downloading ${l.filename}:`,s)}return console.log(`[PNG Figures] Downloaded ${c.length}/${la.length} figures`),c}let oa=[];function _b(c){oa=c.map(l=>({filename:l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:l.base64})),la=c.map(l=>({filename:l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${l.base64}`,description:l.description||""})),console.log(`[PNG Storage] Stored ${oa.length} PNG figures for LaTeX compilation and download`);try{localStorage.setItem("icis_png_figures",JSON.stringify(oa))}catch(l){console.warn("[PNG Storage] Could not persist to localStorage:",l)}}function Em(){if(oa.length>0)return oa;try{const c=localStorage.getItem("icis_png_figures");if(c){const l=JSON.parse(c);if(l&&l.length>0)return console.log(`[PNG Storage] Recovered ${l.length} figures from localStorage`),oa=l,oa}}catch(c){console.warn("[PNG Storage] Could not read from localStorage:",c)}return oa}let rn=null;function wm(c,l){rn={filename:c,content:l},console.log(`[Bibliography] Stored ${c} (${l.length} chars, ${(l.match(/@\w+\{/g)||[]).length} entries)`);try{localStorage.setItem("icis_bibliography",JSON.stringify(rn))}catch(s){console.warn("[Bibliography] Could not persist to localStorage:",s)}}function Am(){if(rn)return rn;try{const c=localStorage.getItem("icis_bibliography");if(c){const l=JSON.parse(c);if(l&&l.content)return console.log(`[Bibliography] Recovered from localStorage: ${l.filename}`),rn=l,rn}}catch(c){console.warn("[Bibliography] Could not read from localStorage:",c)}return rn}function Tm(){if(rn)return rn;try{const c=localStorage.getItem("icis_bibliography");if(c){const l=JSON.parse(c);if(l&&l.content)return console.log(`[Bibliography] Recovered from localStorage for download: ${l.filename}`),rn=l,rn}}catch(c){console.warn("[Bibliography] Could not read from localStorage:",c)}return rn}let wr=null;function Cb(c,l){if(!c||c.length===0)return"# No chart data available";const s=['"""',"ICIScopilot - Visualization Code",`Generated: ${new Date().toISOString()}`,l?"Data Source: AI-synthesized illustrative data":"Data Source: User-provided data file","","This script reproduces the figures generated for your research paper.","Requirements: pip install matplotlib numpy",'"""',"","import matplotlib.pyplot as plt","import numpy as np","","# Set publication-quality defaults","plt.rcParams.update({",'    "font.size": 12,','    "axes.titlesize": 14,','    "axes.labelsize": 12,','    "figure.figsize": (10, 6),','    "figure.dpi": 150',"})",""];return c.forEach((u,d)=>{var f,m,p,b,h,A,w,_;if(s.push("# ============================================================================"),s.push(`# Figure ${d+1}: ${u.title||"Untitled"}`),s.push("# ============================================================================"),s.push(""),s.push(`fig${d+1}, ax${d+1} = plt.subplots()`),s.push(""),u.type==="bar")s.push("# Bar chart data"),s.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets.length>0&&(u.datasets.forEach((v,T)=>{s.push(`data_${d+1}_${T} = ${JSON.stringify(v.data||[])}`)}),u.datasets.length===1?s.push(`ax${d+1}.bar(labels_${d+1}, data_${d+1}_0, color='steelblue')`):(s.push(`x = np.arange(len(labels_${d+1}))`),s.push(`width = ${(.8/u.datasets.length).toFixed(2)}`),u.datasets.forEach((v,T)=>{const g=T-(u.datasets.length-1)/2;s.push(`ax${d+1}.bar(x + ${g.toFixed(2)}*width, data_${d+1}_${T}, width, label='${v.label||`Series ${T+1}`}')`)}),s.push(`ax${d+1}.set_xticks(x)`),s.push(`ax${d+1}.set_xticklabels(labels_${d+1})`),s.push(`ax${d+1}.legend()`)));else if(u.type==="line")s.push("# Line chart data"),s.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets.length>0&&(u.datasets.forEach((v,T)=>{s.push(`data_${d+1}_${T} = ${JSON.stringify(v.data||[])}`),s.push(`ax${d+1}.plot(labels_${d+1}, data_${d+1}_${T}, marker='o', label='${v.label||`Series ${T+1}`}')`)}),u.datasets.length>1&&s.push(`ax${d+1}.legend()`));else if(u.type==="pie"||u.type==="doughnut")s.push("# Pie chart data"),s.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets[0]&&(s.push(`data_${d+1} = ${JSON.stringify(u.datasets[0].data||[])}`),s.push(`ax${d+1}.pie(data_${d+1}, labels=labels_${d+1}, autopct='%1.1f%%')`));else if(u.type==="scatter"){if(s.push("# Scatter plot data"),u.datasets&&u.datasets[0]&&u.datasets[0].data){const v=u.datasets[0].data;s.push(`x_${d+1} = ${JSON.stringify(v.map(T=>T.x||T))}`),s.push(`y_${d+1} = ${JSON.stringify(v.map(T=>T.y||T))}`),s.push(`ax${d+1}.scatter(x_${d+1}, y_${d+1}, alpha=0.6)`)}}else s.push(`# ${u.type} chart - data structure:`),s.push(`chart_config_${d+1} = ${JSON.stringify(u,null,2).split(`
`).map((v,T)=>T===0?v:"# "+v).join(`
`)}`);s.push(""),s.push(`ax${d+1}.set_title('${(u.title||"").replace(/'/g,"\\'")}')`),(b=(p=(m=(f=u.options)==null?void 0:f.scales)==null?void 0:m.x)==null?void 0:p.title)!=null&&b.text&&s.push(`ax${d+1}.set_xlabel('${u.options.scales.x.title.text}')`),(_=(w=(A=(h=u.options)==null?void 0:h.scales)==null?void 0:A.y)==null?void 0:w.title)!=null&&_.text&&s.push(`ax${d+1}.set_ylabel('${u.options.scales.y.title.text}')`),s.push("plt.tight_layout()"),s.push(`fig${d+1}.savefig('figure_${d+1}.png', dpi=300, bbox_inches='tight')`),s.push(`print(f"Saved figure_${d+1}.png")`),s.push("")}),s.push("# Show all figures"),s.push("plt.show()"),s.push(""),s.push(`print("\\nGenerated ${c.length} figures successfully!")`),s.join(`
`)}function Nb(c,l){const s=Cb(c,l);wr={chartData:c,pythonCode:s,isSynthetic:l,generatedAt:new Date().toISOString()},console.log(`[Chart Data] Stored ${(c==null?void 0:c.length)??0} chart configs and Python code (${s.length} chars)`)}function Rm(){return wr?{chartDataJson:JSON.stringify(wr.chartData,null,2),pythonCode:wr.pythonCode,isSynthetic:wr.isSynthetic}:null}function _m(){wr=null}let ll=null;function Ib(c){ll=c,console.log("[FileApi] Stored data table CSV");try{localStorage.setItem("icis_datatable_csv",c)}catch{console.warn("[FileApi] Could not persist data table CSV to localStorage")}}function Cm(){if(ll)return ll;try{const c=localStorage.getItem("icis_datatable_csv");if(c)return ll=c,c}catch{console.warn("[FileApi] Could not read data table CSV from localStorage")}return null}function Db(c){console.log(`[FileApi] Stored validation report: ${c.verified} verified, ${c.discovered} discovered`);try{localStorage.setItem("icis_validation_report",JSON.stringify(c))}catch{console.warn("[FileApi] Could not persist validation report to localStorage")}}const Ar=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:ml,backupAndClearFiles:mm,checkBackendHealth:Ln,clearChartData:_m,clearCloudDataFile:vm,compileLaTeX:um,createViewerLink:pm,deleteCloudDataFile:ym,downloadAllFigures:Sm,downloadCompiledPdf:fm,executePythonScript:gl,generateQuickChartFigures:Rb,getBibliographyContent:Tm,getBibliographyForCompilation:Am,getChartDataContent:Rm,getCloudDataFile:La,getCurrentSessionFigures:xm,getDataFilePreview:bm,getDataTableCsv:Cm,getLastCompiledPdfBlob:bu,getPdfDownloadUrl:dm,getPngFiguresForCompilation:Em,openPaperViewer:hm,readCloudDataFile:nu,refreshManifest:lm,saveDataFile:tu,saveFiles:om,savePaperFile:eu,saveReviewOutputs:cm,storeBibliography:wm,storeChartData:Nb,storeDataTableCsv:Ib,storePngFiguresForCompilation:_b,storeValidationReport:Db,uploadDataFileToCloud:gm},Symbol.toStringTag,{value:"Module"})),Ob=({logs:c,isProcessing:l,currentRound:s,isComplete:u=!1,onProceedToSupervisor:d,onAbort:f,onRestart:m,filePrefix:p,participantEmail:b})=>{const[h,A]=fe.useState([]),[w,_]=fe.useState(null),[v,T]=fe.useState(!1),[g,S]=fe.useState({}),R=async()=>{T(!0),_(null);const k=sl(s),H=Ri(s),P=da(s,"icis_paper");if(!k||!H||!P){_("Missing files to save"),T(!1);return}const G=await cm(s,k,H,P,p,b);G.success?A(G.files||[]):_(G.error||"Failed to save files"),T(!1)},O=async(k,H)=>{var $;const P=($=k.target.files)==null?void 0:$[0];if(!P)return;const G=await P.text();try{const oe=JSON.parse(G);S(ce=>({...ce,[H]:oe}))}catch(oe){console.error(`Failed to parse ${H} file:`,oe)}},z=()=>{const k=g.oversight||sl(s),H=g.feedback||Ri(s),P=da(s,"icis_paper");k&&H&&P&&d&&d({oversight:k,feedback:H,paperContent:P,paperVersion:s})},B=u&&(g.oversight&&g.feedback||sl(s)&&Ri(s));return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${l?"animate-spin":""}`}),"Reviewing Paper (Round ",s,")"]}),i.jsx(hu,{stageName:"Reviewer",isProcessing:l,canAbort:!0,canRestart:!l&&u,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),i.jsx(ki,{logs:c,height:"h-48"}),i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${l?"bg-indigo-100 text-indigo-600":u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:l?i.jsx(cn,{size:14,className:"animate-spin"}):u?i.jsx(zt,{size:14}):"1"}),i.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),i.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?i.jsx(zt,{size:14}):"2"}),i.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),i.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?i.jsx(zt,{size:14}):"3"}),i.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),u&&i.jsx("div",{className:"mt-6",children:i.jsx(Tb,{allOversight:pu(),compact:!0})}),u&&i.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[i.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[i.jsx(dl,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),i.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),i.jsxs("button",{onClick:R,disabled:v,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[i.jsx(dl,{size:16,className:v?"animate-pulse":""}),v?"Downloading...":"Download Review Outputs"]}),i.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",s,".json, feedback_v",s,".json, icis_paper_v",s,".tex"]}),h.length>0&&i.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",h.join(", ")]}),w&&i.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",w]}),i.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[i.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[i.jsx(du,{size:16}),"Upload Modified Files (Optional)"]}),i.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",g.oversight&&i.jsx(zt,{size:12,className:"inline text-emerald-500"})]}),i.jsx("input",{type:"file",accept:".json",onChange:k=>O(k,"oversight"),className:"text-xs w-full"})]}),i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",g.feedback&&i.jsx(zt,{size:12,className:"inline text-emerald-500"})]}),i.jsx("input",{type:"file",accept:".json",onChange:k=>O(k,"feedback"),className:"text-xs w-full"})]})]})]}),i.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:i.jsxs("button",{onClick:z,disabled:!B,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",i.jsx(Wh,{size:18})]})})]})]})},kb=({currentRound:c,currentPaperVersion:l,lastFeedback:s,isProcessing:u,oversightData:d,allOversight:f,onAction:m,reviewOutputFiles:p})=>{const[b,h]=fe.useState(""),[A,w]=fe.useState(!1),[_,v]=fe.useState(!1),[T,g]=fe.useState(!1),S=(p==null?void 0:p.oversight)||d,R=p==null?void 0:p.feedback,O=()=>{rb(l,"icis_paper")},z=(p==null?void 0:p.paperContent)||da(l,"icis_paper"),B=p?"Uploaded/Downloaded files":"Internal storage",k=(S==null?void 0:S.averageScore)||0,H=(S==null?void 0:S.errorCounts.majorErrors)||0,P=S?S.reviewScores.novelty<4||S.reviewScores.significance<4||S.reviewScores.methodologicalRigor<4||S.reviewScores.clarity<4||S.reviewScores.relevance<4:!1,G=S?S.trustworthiness.reliability<5||S.trustworthiness.benevolence<5||S.trustworthiness.goalAlignment<5:!1,$=((S==null?void 0:S.criticalAlerts.length)||0)>0,oe=P||G||H>0||$,ce=!oe&&k>=4;return i.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[i.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),i.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),i.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",c]}),i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),i.jsx("div",{className:`p-4 font-mono text-sm ${oe?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:i.jsxs("div",{className:"font-bold",children:["STATUS: ",oe?"⚠️ ATTENTION NEEDED":ce?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),(S==null?void 0:S.improvementPotential)&&i.jsxs("div",{className:`p-4 font-mono text-sm border-x border-b ${S.improvementPotential==="exhausted"?"bg-blue-100 border-blue-300":S.improvementPotential==="low"?"bg-yellow-100 border-yellow-300":"bg-slate-100 border-slate-300"}`,children:[i.jsxs("div",{className:"font-bold mb-1",children:["IMPROVEMENT POTENTIAL: ",S.improvementPotential==="exhausted"?"🏁 EXHAUSTED - Paper has reached its potential":S.improvementPotential==="low"?"📉 LOW - Minor improvements only":S.improvementPotential==="medium"?"📊 MEDIUM - Moderate improvements possible":"📈 HIGH - Significant improvements possible"]}),S.convergenceReason&&i.jsxs("div",{className:"text-xs mt-2 text-slate-700",children:[i.jsx("span",{className:"font-semibold",children:"Reason: "}),S.convergenceReason]}),(S.improvementPotential==="exhausted"||S.canImprove===!1)&&i.jsx("div",{className:"text-xs mt-2 text-blue-700 font-medium",children:"ℹ️ The paper has reached its maximum quality given the available interview and data. You may finalize or provide additional source materials for further improvement."})]}),i.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[i.jsx(Oi,{size:16,className:"text-slate-600"}),i.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),i.jsx("span",{className:"text-slate-600",children:B})]}),i.jsx("button",{onClick:()=>g(!T),className:"text-xs text-indigo-600 hover:underline",children:T?"Hide Details":"Show Details"})]}),T&&i.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),i.jsxs("p",{className:"text-slate-600",children:["oversight_v",(S==null?void 0:S.version)||c,".json",(p==null?void 0:p.oversight)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),i.jsxs("p",{className:"text-slate-600",children:["feedback_v",(R==null?void 0:R.version)||c,".json",(p==null?void 0:p.feedback)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),i.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(p==null?void 0:p.paperVersion)||l,".tex",(p==null?void 0:p.paperContent)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),i.jsx("p",{className:p?"text-emerald-600":"text-slate-600",children:p?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),f.map((D,Y)=>i.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",D.version]},Y)),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),i.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(D=>{var E;const Y=D==="Methodological Rigor"?"methodologicalRigor":D.toLowerCase();return i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:D}),f.map((W,I)=>{const j=W.reviewScores[Y]||0;return i.jsx("td",{className:`text-center p-2 ${j<4?"text-red-600 font-bold":""}`,children:j},I)}),i.jsx("td",{className:"p-2 text-slate-600 text-xs",children:S!=null&&S.reviewComments?((E=S.reviewComments[Y])==null?void 0:E.substring(0,30))+"...":"-"})]},D)}),i.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"AVERAGE"}),f.map((D,Y)=>i.jsx("td",{className:"text-center p-2",children:D.averageScore.toFixed(1)},Y)),i.jsx("td",{className:"p-2 text-xs",children:f.length>1?f[f.length-1].averageScore>f[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),f.map((D,Y)=>i.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",D.version]},Y)),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Count"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),f.map((D,Y)=>i.jsx("td",{className:`text-center p-2 ${D.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:D.errorCounts.majorErrors},Y)),i.jsx("td",{className:"p-2 text-center font-bold text-red-600",children:(S==null?void 0:S.errorCounts.majorErrors)||0})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),f.map((D,Y)=>i.jsx("td",{className:"text-center p-2",children:D.errorCounts.minorErrors},Y)),i.jsx("td",{className:"p-2 text-center",children:(S==null?void 0:S.errorCounts.minorErrors)||0})]}),i.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"TOTAL"}),f.map((D,Y)=>i.jsx("td",{className:"text-center p-2",children:D.errorCounts.majorErrors+D.errorCounts.minorErrors},Y)),i.jsx("td",{className:"p-2 text-center",children:((S==null?void 0:S.errorCounts.majorErrors)||0)+((S==null?void 0:S.errorCounts.minorErrors)||0)})]})]})]})}),S&&(S.errorDetails.majorErrors.length>0||S.errorDetails.minorErrors.length>0)&&i.jsxs("div",{className:"mt-4 border-t border-slate-200 pt-4",children:[i.jsx("h4",{className:"font-bold text-slate-700 mb-2 font-mono text-sm",children:"DETAILED ERROR LIST:"}),S.errorDetails.majorErrors.length>0&&i.jsxs("div",{className:"mb-3",children:[i.jsxs("h5",{className:"font-semibold text-red-700 text-sm mb-1",children:["Major Errors (",S.errorDetails.majorErrors.length,"):"]}),i.jsx("ul",{className:"list-disc list-inside space-y-1",children:S.errorDetails.majorErrors.map((D,Y)=>i.jsx("li",{className:"text-sm text-red-600 ml-2",children:D},Y))})]}),S.errorDetails.minorErrors.length>0&&i.jsxs("div",{children:[i.jsxs("h5",{className:"font-semibold text-amber-700 text-sm mb-1",children:["Minor Errors (",S.errorDetails.minorErrors.length,"):"]}),i.jsx("ul",{className:"list-disc list-inside space-y-1",children:S.errorDetails.minorErrors.map((D,Y)=>i.jsx("li",{className:"text-sm text-amber-600 ml-2",children:D},Y))})]})]})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),i.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),i.jsx("td",{className:`text-center p-2 ${((S==null?void 0:S.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(S==null?void 0:S.trustworthiness.reliability)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(S==null?void 0:S.trustworthiness.reliabilityRationale)||"-"})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),i.jsx("td",{className:`text-center p-2 ${((S==null?void 0:S.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(S==null?void 0:S.trustworthiness.benevolence)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(S==null?void 0:S.trustworthiness.benevolenceRationale)||"-"})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),i.jsx("td",{className:`text-center p-2 ${((S==null?void 0:S.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(S==null?void 0:S.trustworthiness.goalAlignment)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(S==null?void 0:S.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),i.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${$?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),$?i.jsx("div",{className:"space-y-3",children:S==null?void 0:S.criticalAlerts.map((D,Y)=>i.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[i.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",D.number,": ",D.title," (BLOCKING ISSUE)"]}),i.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Status:"})," ",D.status]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Impact:"})," ",D.impact]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Details:"})," ",D.details]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Action Required:"})," ",D.actionRequired]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Consequence:"})," ",D.consequence]})]})]},Y))}):i.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),i.jsxs("button",{onClick:()=>w(!A),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[i.jsx(Zc,{size:12}),A?"Hide Full":"Show Full"]})]}),A?i.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:R?i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Overall Assessment:"}),i.jsx("p",{children:R.overallAssessment||"No assessment available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Research Question & Contribution:"}),i.jsx("p",{children:R.researchQuestion||"No feedback available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Method:"}),i.jsx("p",{children:R.method||"No feedback available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Potential Impact:"}),i.jsx("p",{children:R.potentialImpact||"No feedback available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Writing Quality:"}),i.jsx("p",{children:R.writing||"No feedback available."})]}),R.majorConcerns&&R.majorConcerns.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-red-600",children:"Major Concerns:"}),i.jsx("ul",{className:"list-disc list-inside",children:R.majorConcerns.map((D,Y)=>i.jsx("li",{children:D},Y))})]}),R.minorCorrections&&R.minorCorrections.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Minor Corrections:"}),i.jsx("ul",{className:"list-disc list-inside",children:R.minorCorrections.map((D,Y)=>i.jsx("li",{children:D},Y))})]})]}):i.jsx("p",{children:s||"No feedback generated."})}):i.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(R==null?void 0:R.overallAssessment)||s||"No feedback generated."})]}),i.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${oe?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),oe?i.jsxs("div",{children:[i.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",c+1]}),i.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",P?"Review scores below threshold (< 4)":H>0?`${H} major error(s) remaining`:G?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),i.jsxs("div",{className:"mt-2 text-sm",children:[i.jsx("p",{className:"font-medium",children:"Priority actions:"}),i.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:S==null?void 0:S.errorDetails.majorErrors.slice(0,3).map((D,Y)=>i.jsx("li",{children:D},Y))})]})]}):i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),i.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),i.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[i.jsxs("li",{children:["Average review score: ",k.toFixed(1),"/5"]}),i.jsx("li",{children:"All trustworthiness scores ≥ 5"}),i.jsx("li",{children:"No major errors remaining"}),i.jsx("li",{children:"No critical alerts"})]})]})]}),i.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),i.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[i.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[i.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),i.jsx("li",{children:"• Current feedback will guide improvements"}),i.jsx("li",{children:"• Add your directives below"})]})]}),i.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[i.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Sends paper to ICISfinalize"}),i.jsx("li",{children:"• Paper will be prepared for submission"}),i.jsx("li",{children:"• No further revisions will be made"})]})]})]}),i.jsxs("div",{className:"bg-slate-800 p-3 rounded mb-4",children:[i.jsx("p",{className:"font-bold text-orange-400",children:"OPTION C: GENERATE SYNTHETIC DATA"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Generates synthetic data based on paper's research model"}),i.jsx("li",{children:"• Updates Results section with statistical analysis"}),i.jsx("li",{children:"• Use when data collection is planned but paper needs empirical demonstration"})]})]})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),i.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:b,onChange:D=>h(D.target.value)})]}),i.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("button",{onClick:()=>m("revise",b),disabled:u,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),i.jsx("button",{onClick:()=>m("finalize"),disabled:u,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]}),i.jsx("div",{className:"flex justify-center mt-3",children:i.jsx("button",{onClick:()=>m("generateSyntheticData",b),disabled:u,className:"w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] GENERATE SYNTHETIC DATA"})})]}),i.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[i.jsxs("button",{onClick:()=>v(!_),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[i.jsx(Zc,{size:14})," ",_?"Hide":"View"," Paper Draft"]}),i.jsxs("button",{onClick:O,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[i.jsx(dl,{size:14})," Download (.tex)"]})]}),_&&z&&i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",l,"):"]}),i.jsx("div",{className:"max-h-96 overflow-y-auto",children:i.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:z})})]})]})},jb=({logs:c,isProcessing:l,currentPaperVersion:s,paperContent:u,onAbort:d,onRestart:f})=>i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${l?"animate-spin":""}`}),"Revising Paper (v",s," → v",(s||0)+1,")"]}),i.jsx(hu,{stageName:"Reviser",isProcessing:l,canAbort:!0,canRestart:!l,onAbort:d||(()=>{}),onRestart:f||(()=>{})})]}),i.jsx(ki,{logs:c,height:"h-48"}),i.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),i.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),i.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:u?i.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:u}):i.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function tl(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Gc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Bh;function Lb(){return Bh||(Bh=1,(function(c,l){(function(s){c.exports=s()})(function(){return(function s(u,d,f){function m(h,A){if(!d[h]){if(!u[h]){var w=typeof tl=="function"&&tl;if(!A&&w)return w(h,!0);if(p)return p(h,!0);var _=new Error("Cannot find module '"+h+"'");throw _.code="MODULE_NOT_FOUND",_}var v=d[h]={exports:{}};u[h][0].call(v.exports,function(T){var g=u[h][1][T];return m(g||T)},v,v.exports,s,u,d,f)}return d[h].exports}for(var p=typeof tl=="function"&&tl,b=0;b<f.length;b++)m(f[b]);return m})({1:[function(s,u,d){var f=s("./utils"),m=s("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";d.encode=function(b){for(var h,A,w,_,v,T,g,S=[],R=0,O=b.length,z=O,B=f.getTypeOf(b)!=="string";R<b.length;)z=O-R,w=B?(h=b[R++],A=R<O?b[R++]:0,R<O?b[R++]:0):(h=b.charCodeAt(R++),A=R<O?b.charCodeAt(R++):0,R<O?b.charCodeAt(R++):0),_=h>>2,v=(3&h)<<4|A>>4,T=1<z?(15&A)<<2|w>>6:64,g=2<z?63&w:64,S.push(p.charAt(_)+p.charAt(v)+p.charAt(T)+p.charAt(g));return S.join("")},d.decode=function(b){var h,A,w,_,v,T,g=0,S=0,R="data:";if(b.substr(0,R.length)===R)throw new Error("Invalid base64 input, it looks like a data url.");var O,z=3*(b=b.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(b.charAt(b.length-1)===p.charAt(64)&&z--,b.charAt(b.length-2)===p.charAt(64)&&z--,z%1!=0)throw new Error("Invalid base64 input, bad content length.");for(O=m.uint8array?new Uint8Array(0|z):new Array(0|z);g<b.length;)h=p.indexOf(b.charAt(g++))<<2|(_=p.indexOf(b.charAt(g++)))>>4,A=(15&_)<<4|(v=p.indexOf(b.charAt(g++)))>>2,w=(3&v)<<6|(T=p.indexOf(b.charAt(g++))),O[S++]=h,v!==64&&(O[S++]=A),T!==64&&(O[S++]=w);return O}},{"./support":30,"./utils":32}],2:[function(s,u,d){var f=s("./external"),m=s("./stream/DataWorker"),p=s("./stream/Crc32Probe"),b=s("./stream/DataLengthProbe");function h(A,w,_,v,T){this.compressedSize=A,this.uncompressedSize=w,this.crc32=_,this.compression=v,this.compressedContent=T}h.prototype={getContentWorker:function(){var A=new m(f.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new b("data_length")),w=this;return A.on("end",function(){if(this.streamInfo.data_length!==w.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),A},getCompressedWorker:function(){return new m(f.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(A,w,_){return A.pipe(new p).pipe(new b("uncompressedSize")).pipe(w.compressWorker(_)).pipe(new b("compressedSize")).withStreamInfo("compression",w)},u.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(s,u,d){var f=s("./stream/GenericWorker");d.STORE={magic:"\0\0",compressWorker:function(){return new f("STORE compression")},uncompressWorker:function(){return new f("STORE decompression")}},d.DEFLATE=s("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(s,u,d){var f=s("./utils"),m=(function(){for(var p,b=[],h=0;h<256;h++){p=h;for(var A=0;A<8;A++)p=1&p?3988292384^p>>>1:p>>>1;b[h]=p}return b})();u.exports=function(p,b){return p!==void 0&&p.length?f.getTypeOf(p)!=="string"?(function(h,A,w,_){var v=m,T=_+w;h^=-1;for(var g=_;g<T;g++)h=h>>>8^v[255&(h^A[g])];return-1^h})(0|b,p,p.length,0):(function(h,A,w,_){var v=m,T=_+w;h^=-1;for(var g=_;g<T;g++)h=h>>>8^v[255&(h^A.charCodeAt(g))];return-1^h})(0|b,p,p.length,0):0}},{"./utils":32}],5:[function(s,u,d){d.base64=!1,d.binary=!1,d.dir=!1,d.createFolders=!0,d.date=null,d.compression=null,d.compressionOptions=null,d.comment=null,d.unixPermissions=null,d.dosPermissions=null},{}],6:[function(s,u,d){var f=null;f=typeof Promise<"u"?Promise:s("lie"),u.exports={Promise:f}},{lie:37}],7:[function(s,u,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",m=s("pako"),p=s("./utils"),b=s("./stream/GenericWorker"),h=f?"uint8array":"array";function A(w,_){b.call(this,"FlateWorker/"+w),this._pako=null,this._pakoAction=w,this._pakoOptions=_,this.meta={}}d.magic="\b\0",p.inherits(A,b),A.prototype.processChunk=function(w){this.meta=w.meta,this._pako===null&&this._createPako(),this._pako.push(p.transformTo(h,w.data),!1)},A.prototype.flush=function(){b.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},A.prototype.cleanUp=function(){b.prototype.cleanUp.call(this),this._pako=null},A.prototype._createPako=function(){this._pako=new m[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var w=this;this._pako.onData=function(_){w.push({data:_,meta:w.meta})}},d.compressWorker=function(w){return new A("Deflate",w)},d.uncompressWorker=function(){return new A("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(s,u,d){function f(v,T){var g,S="";for(g=0;g<T;g++)S+=String.fromCharCode(255&v),v>>>=8;return S}function m(v,T,g,S,R,O){var z,B,k=v.file,H=v.compression,P=O!==h.utf8encode,G=p.transformTo("string",O(k.name)),$=p.transformTo("string",h.utf8encode(k.name)),oe=k.comment,ce=p.transformTo("string",O(oe)),D=p.transformTo("string",h.utf8encode(oe)),Y=$.length!==k.name.length,E=D.length!==oe.length,W="",I="",j="",J=k.dir,q=k.date,me={crc32:0,compressedSize:0,uncompressedSize:0};T&&!g||(me.crc32=v.crc32,me.compressedSize=v.compressedSize,me.uncompressedSize=v.uncompressedSize);var C=0;T&&(C|=8),P||!Y&&!E||(C|=2048);var L=0,le=0;J&&(L|=16),R==="UNIX"?(le=798,L|=(function(se,Ee){var Ce=se;return se||(Ce=Ee?16893:33204),(65535&Ce)<<16})(k.unixPermissions,J)):(le=20,L|=(function(se){return 63&(se||0)})(k.dosPermissions)),z=q.getUTCHours(),z<<=6,z|=q.getUTCMinutes(),z<<=5,z|=q.getUTCSeconds()/2,B=q.getUTCFullYear()-1980,B<<=4,B|=q.getUTCMonth()+1,B<<=5,B|=q.getUTCDate(),Y&&(I=f(1,1)+f(A(G),4)+$,W+="up"+f(I.length,2)+I),E&&(j=f(1,1)+f(A(ce),4)+D,W+="uc"+f(j.length,2)+j);var ne="";return ne+=`
\0`,ne+=f(C,2),ne+=H.magic,ne+=f(z,2),ne+=f(B,2),ne+=f(me.crc32,4),ne+=f(me.compressedSize,4),ne+=f(me.uncompressedSize,4),ne+=f(G.length,2),ne+=f(W.length,2),{fileRecord:w.LOCAL_FILE_HEADER+ne+G+W,dirRecord:w.CENTRAL_FILE_HEADER+f(le,2)+ne+f(ce.length,2)+"\0\0\0\0"+f(L,4)+f(S,4)+G+W+ce}}var p=s("../utils"),b=s("../stream/GenericWorker"),h=s("../utf8"),A=s("../crc32"),w=s("../signature");function _(v,T,g,S){b.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=T,this.zipPlatform=g,this.encodeFileName=S,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}p.inherits(_,b),_.prototype.push=function(v){var T=v.meta.percent||0,g=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,b.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:g?(T+100*(g-S-1))/g:100}}))},_.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var T=this.streamFiles&&!v.file.dir;if(T){var g=m(v,T,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},_.prototype.closedSource=function(v){this.accumulate=!1;var T=this.streamFiles&&!v.file.dir,g=m(v,T,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),T)this.push({data:(function(S){return w.DATA_DESCRIPTOR+f(S.crc32,4)+f(S.compressedSize,4)+f(S.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},_.prototype.flush=function(){for(var v=this.bytesWritten,T=0;T<this.dirRecords.length;T++)this.push({data:this.dirRecords[T],meta:{percent:100}});var g=this.bytesWritten-v,S=(function(R,O,z,B,k){var H=p.transformTo("string",k(B));return w.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(R,2)+f(R,2)+f(O,4)+f(z,4)+f(H.length,2)+H})(this.dirRecords.length,g,v,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},_.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},_.prototype.registerPrevious=function(v){this._sources.push(v);var T=this;return v.on("data",function(g){T.processChunk(g)}),v.on("end",function(){T.closedSource(T.previous.streamInfo),T._sources.length?T.prepareNextSource():T.end()}),v.on("error",function(g){T.error(g)}),this},_.prototype.resume=function(){return!!b.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},_.prototype.error=function(v){var T=this._sources;if(!b.prototype.error.call(this,v))return!1;for(var g=0;g<T.length;g++)try{T[g].error(v)}catch{}return!0},_.prototype.lock=function(){b.prototype.lock.call(this);for(var v=this._sources,T=0;T<v.length;T++)v[T].lock()},u.exports=_},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(s,u,d){var f=s("../compressions"),m=s("./ZipFileWorker");d.generateWorker=function(p,b,h){var A=new m(b.streamFiles,h,b.platform,b.encodeFileName),w=0;try{p.forEach(function(_,v){w++;var T=(function(O,z){var B=O||z,k=f[B];if(!k)throw new Error(B+" is not a valid compression method !");return k})(v.options.compression,b.compression),g=v.options.compressionOptions||b.compressionOptions||{},S=v.dir,R=v.date;v._compressWorker(T,g).withStreamInfo("file",{name:_,dir:S,date:R,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(A)}),A.entriesCount=w}catch(_){A.error(_)}return A}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(s,u,d){function f(){if(!(this instanceof f))return new f;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var m=new f;for(var p in this)typeof this[p]!="function"&&(m[p]=this[p]);return m}}(f.prototype=s("./object")).loadAsync=s("./load"),f.support=s("./support"),f.defaults=s("./defaults"),f.version="3.10.1",f.loadAsync=function(m,p){return new f().loadAsync(m,p)},f.external=s("./external"),u.exports=f},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(s,u,d){var f=s("./utils"),m=s("./external"),p=s("./utf8"),b=s("./zipEntries"),h=s("./stream/Crc32Probe"),A=s("./nodejsUtils");function w(_){return new m.Promise(function(v,T){var g=_.decompressed.getContentWorker().pipe(new h);g.on("error",function(S){T(S)}).on("end",function(){g.streamInfo.crc32!==_.decompressed.crc32?T(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}u.exports=function(_,v){var T=this;return v=f.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:p.utf8decode}),A.isNode&&A.isStream(_)?m.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):f.prepareContent("the loaded zip file",_,!0,v.optimizedBinaryString,v.base64).then(function(g){var S=new b(v);return S.load(g),S}).then(function(g){var S=[m.Promise.resolve(g)],R=g.files;if(v.checkCRC32)for(var O=0;O<R.length;O++)S.push(w(R[O]));return m.Promise.all(S)}).then(function(g){for(var S=g.shift(),R=S.files,O=0;O<R.length;O++){var z=R[O],B=z.fileNameStr,k=f.resolve(z.fileNameStr);T.file(k,z.decompressed,{binary:!0,optimizedBinaryString:!0,date:z.date,dir:z.dir,comment:z.fileCommentStr.length?z.fileCommentStr:null,unixPermissions:z.unixPermissions,dosPermissions:z.dosPermissions,createFolders:v.createFolders}),z.dir||(T.file(k).unsafeOriginalName=B)}return S.zipComment.length&&(T.comment=S.zipComment),T})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(s,u,d){var f=s("../utils"),m=s("../stream/GenericWorker");function p(b,h){m.call(this,"Nodejs stream input adapter for "+b),this._upstreamEnded=!1,this._bindStream(h)}f.inherits(p,m),p.prototype._bindStream=function(b){var h=this;(this._stream=b).pause(),b.on("data",function(A){h.push({data:A,meta:{percent:0}})}).on("error",function(A){h.isPaused?this.generatedError=A:h.error(A)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},p.prototype.pause=function(){return!!m.prototype.pause.call(this)&&(this._stream.pause(),!0)},p.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},u.exports=p},{"../stream/GenericWorker":28,"../utils":32}],13:[function(s,u,d){var f=s("readable-stream").Readable;function m(p,b,h){f.call(this,b),this._helper=p;var A=this;p.on("data",function(w,_){A.push(w)||A._helper.pause(),h&&h(_)}).on("error",function(w){A.emit("error",w)}).on("end",function(){A.push(null)})}s("../utils").inherits(m,f),m.prototype._read=function(){this._helper.resume()},u.exports=m},{"../utils":32,"readable-stream":16}],14:[function(s,u,d){u.exports={isNode:typeof Buffer<"u",newBufferFrom:function(f,m){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(f,m);if(typeof f=="number")throw new Error('The "data" argument must not be a number');return new Buffer(f,m)},allocBuffer:function(f){if(Buffer.alloc)return Buffer.alloc(f);var m=new Buffer(f);return m.fill(0),m},isBuffer:function(f){return Buffer.isBuffer(f)},isStream:function(f){return f&&typeof f.on=="function"&&typeof f.pause=="function"&&typeof f.resume=="function"}}},{}],15:[function(s,u,d){function f(k,H,P){var G,$=p.getTypeOf(H),oe=p.extend(P||{},A);oe.date=oe.date||new Date,oe.compression!==null&&(oe.compression=oe.compression.toUpperCase()),typeof oe.unixPermissions=="string"&&(oe.unixPermissions=parseInt(oe.unixPermissions,8)),oe.unixPermissions&&16384&oe.unixPermissions&&(oe.dir=!0),oe.dosPermissions&&16&oe.dosPermissions&&(oe.dir=!0),oe.dir&&(k=R(k)),oe.createFolders&&(G=S(k))&&O.call(this,G,!0);var ce=$==="string"&&oe.binary===!1&&oe.base64===!1;P&&P.binary!==void 0||(oe.binary=!ce),(H instanceof w&&H.uncompressedSize===0||oe.dir||!H||H.length===0)&&(oe.base64=!1,oe.binary=!0,H="",oe.compression="STORE",$="string");var D=null;D=H instanceof w||H instanceof b?H:T.isNode&&T.isStream(H)?new g(k,H):p.prepareContent(k,H,oe.binary,oe.optimizedBinaryString,oe.base64);var Y=new _(k,D,oe);this.files[k]=Y}var m=s("./utf8"),p=s("./utils"),b=s("./stream/GenericWorker"),h=s("./stream/StreamHelper"),A=s("./defaults"),w=s("./compressedObject"),_=s("./zipObject"),v=s("./generate"),T=s("./nodejsUtils"),g=s("./nodejs/NodejsStreamInputAdapter"),S=function(k){k.slice(-1)==="/"&&(k=k.substring(0,k.length-1));var H=k.lastIndexOf("/");return 0<H?k.substring(0,H):""},R=function(k){return k.slice(-1)!=="/"&&(k+="/"),k},O=function(k,H){return H=H!==void 0?H:A.createFolders,k=R(k),this.files[k]||f.call(this,k,null,{dir:!0,createFolders:H}),this.files[k]};function z(k){return Object.prototype.toString.call(k)==="[object RegExp]"}var B={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(k){var H,P,G;for(H in this.files)G=this.files[H],(P=H.slice(this.root.length,H.length))&&H.slice(0,this.root.length)===this.root&&k(P,G)},filter:function(k){var H=[];return this.forEach(function(P,G){k(P,G)&&H.push(G)}),H},file:function(k,H,P){if(arguments.length!==1)return k=this.root+k,f.call(this,k,H,P),this;if(z(k)){var G=k;return this.filter(function(oe,ce){return!ce.dir&&G.test(oe)})}var $=this.files[this.root+k];return $&&!$.dir?$:null},folder:function(k){if(!k)return this;if(z(k))return this.filter(function($,oe){return oe.dir&&k.test($)});var H=this.root+k,P=O.call(this,H),G=this.clone();return G.root=P.name,G},remove:function(k){k=this.root+k;var H=this.files[k];if(H||(k.slice(-1)!=="/"&&(k+="/"),H=this.files[k]),H&&!H.dir)delete this.files[k];else for(var P=this.filter(function($,oe){return oe.name.slice(0,k.length)===k}),G=0;G<P.length;G++)delete this.files[P[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(k){var H,P={};try{if((P=p.extend(k||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");p.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var G=P.comment||this.comment||"";H=v.generateWorker(this,P,G)}catch($){(H=new b("error")).error($)}return new h(H,P.type||"string",P.mimeType)},generateAsync:function(k,H){return this.generateInternalStream(k).accumulate(H)},generateNodeStream:function(k,H){return(k=k||{}).type||(k.type="nodebuffer"),this.generateInternalStream(k).toNodejsStream(H)}};u.exports=B},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(s,u,d){u.exports=s("stream")},{stream:void 0}],17:[function(s,u,d){var f=s("./DataReader");function m(p){f.call(this,p);for(var b=0;b<this.data.length;b++)p[b]=255&p[b]}s("../utils").inherits(m,f),m.prototype.byteAt=function(p){return this.data[this.zero+p]},m.prototype.lastIndexOfSignature=function(p){for(var b=p.charCodeAt(0),h=p.charCodeAt(1),A=p.charCodeAt(2),w=p.charCodeAt(3),_=this.length-4;0<=_;--_)if(this.data[_]===b&&this.data[_+1]===h&&this.data[_+2]===A&&this.data[_+3]===w)return _-this.zero;return-1},m.prototype.readAndCheckSignature=function(p){var b=p.charCodeAt(0),h=p.charCodeAt(1),A=p.charCodeAt(2),w=p.charCodeAt(3),_=this.readData(4);return b===_[0]&&h===_[1]&&A===_[2]&&w===_[3]},m.prototype.readData=function(p){if(this.checkOffset(p),p===0)return[];var b=this.data.slice(this.zero+this.index,this.zero+this.index+p);return this.index+=p,b},u.exports=m},{"../utils":32,"./DataReader":18}],18:[function(s,u,d){var f=s("../utils");function m(p){this.data=p,this.length=p.length,this.index=0,this.zero=0}m.prototype={checkOffset:function(p){this.checkIndex(this.index+p)},checkIndex:function(p){if(this.length<this.zero+p||p<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+p+"). Corrupted zip ?")},setIndex:function(p){this.checkIndex(p),this.index=p},skip:function(p){this.setIndex(this.index+p)},byteAt:function(){},readInt:function(p){var b,h=0;for(this.checkOffset(p),b=this.index+p-1;b>=this.index;b--)h=(h<<8)+this.byteAt(b);return this.index+=p,h},readString:function(p){return f.transformTo("string",this.readData(p))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var p=this.readInt(4);return new Date(Date.UTC(1980+(p>>25&127),(p>>21&15)-1,p>>16&31,p>>11&31,p>>5&63,(31&p)<<1))}},u.exports=m},{"../utils":32}],19:[function(s,u,d){var f=s("./Uint8ArrayReader");function m(p){f.call(this,p)}s("../utils").inherits(m,f),m.prototype.readData=function(p){this.checkOffset(p);var b=this.data.slice(this.zero+this.index,this.zero+this.index+p);return this.index+=p,b},u.exports=m},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(s,u,d){var f=s("./DataReader");function m(p){f.call(this,p)}s("../utils").inherits(m,f),m.prototype.byteAt=function(p){return this.data.charCodeAt(this.zero+p)},m.prototype.lastIndexOfSignature=function(p){return this.data.lastIndexOf(p)-this.zero},m.prototype.readAndCheckSignature=function(p){return p===this.readData(4)},m.prototype.readData=function(p){this.checkOffset(p);var b=this.data.slice(this.zero+this.index,this.zero+this.index+p);return this.index+=p,b},u.exports=m},{"../utils":32,"./DataReader":18}],21:[function(s,u,d){var f=s("./ArrayReader");function m(p){f.call(this,p)}s("../utils").inherits(m,f),m.prototype.readData=function(p){if(this.checkOffset(p),p===0)return new Uint8Array(0);var b=this.data.subarray(this.zero+this.index,this.zero+this.index+p);return this.index+=p,b},u.exports=m},{"../utils":32,"./ArrayReader":17}],22:[function(s,u,d){var f=s("../utils"),m=s("../support"),p=s("./ArrayReader"),b=s("./StringReader"),h=s("./NodeBufferReader"),A=s("./Uint8ArrayReader");u.exports=function(w){var _=f.getTypeOf(w);return f.checkSupport(_),_!=="string"||m.uint8array?_==="nodebuffer"?new h(w):m.uint8array?new A(f.transformTo("uint8array",w)):new p(f.transformTo("array",w)):new b(w)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(s,u,d){d.LOCAL_FILE_HEADER="PK",d.CENTRAL_FILE_HEADER="PK",d.CENTRAL_DIRECTORY_END="PK",d.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",d.ZIP64_CENTRAL_DIRECTORY_END="PK",d.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(s,u,d){var f=s("./GenericWorker"),m=s("../utils");function p(b){f.call(this,"ConvertWorker to "+b),this.destType=b}m.inherits(p,f),p.prototype.processChunk=function(b){this.push({data:m.transformTo(this.destType,b.data),meta:b.meta})},u.exports=p},{"../utils":32,"./GenericWorker":28}],25:[function(s,u,d){var f=s("./GenericWorker"),m=s("../crc32");function p(){f.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s("../utils").inherits(p,f),p.prototype.processChunk=function(b){this.streamInfo.crc32=m(b.data,this.streamInfo.crc32||0),this.push(b)},u.exports=p},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(s,u,d){var f=s("../utils"),m=s("./GenericWorker");function p(b){m.call(this,"DataLengthProbe for "+b),this.propName=b,this.withStreamInfo(b,0)}f.inherits(p,m),p.prototype.processChunk=function(b){if(b){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+b.data.length}m.prototype.processChunk.call(this,b)},u.exports=p},{"../utils":32,"./GenericWorker":28}],27:[function(s,u,d){var f=s("../utils"),m=s("./GenericWorker");function p(b){m.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,b.then(function(A){h.dataIsReady=!0,h.data=A,h.max=A&&A.length||0,h.type=f.getTypeOf(A),h.isPaused||h._tickAndRepeat()},function(A){h.error(A)})}f.inherits(p,m),p.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this.data=null},p.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,f.delay(this._tickAndRepeat,[],this)),!0)},p.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(f.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},p.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var b=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":b=this.data.substring(this.index,h);break;case"uint8array":b=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":b=this.data.slice(this.index,h)}return this.index=h,this.push({data:b,meta:{percent:this.max?this.index/this.max*100:0}})},u.exports=p},{"../utils":32,"./GenericWorker":28}],28:[function(s,u,d){function f(m){this.name=m||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}f.prototype={push:function(m){this.emit("data",m)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(m){this.emit("error",m)}return!0},error:function(m){return!this.isFinished&&(this.isPaused?this.generatedError=m:(this.isFinished=!0,this.emit("error",m),this.previous&&this.previous.error(m),this.cleanUp()),!0)},on:function(m,p){return this._listeners[m].push(p),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(m,p){if(this._listeners[m])for(var b=0;b<this._listeners[m].length;b++)this._listeners[m][b].call(this,p)},pipe:function(m){return m.registerPrevious(this)},registerPrevious:function(m){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=m.streamInfo,this.mergeStreamInfo(),this.previous=m;var p=this;return m.on("data",function(b){p.processChunk(b)}),m.on("end",function(){p.end()}),m.on("error",function(b){p.error(b)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var m=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),m=!0),this.previous&&this.previous.resume(),!m},flush:function(){},processChunk:function(m){this.push(m)},withStreamInfo:function(m,p){return this.extraStreamInfo[m]=p,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var m in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,m)&&(this.streamInfo[m]=this.extraStreamInfo[m])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var m="Worker "+this.name;return this.previous?this.previous+" -> "+m:m}},u.exports=f},{}],29:[function(s,u,d){var f=s("../utils"),m=s("./ConvertWorker"),p=s("./GenericWorker"),b=s("../base64"),h=s("../support"),A=s("../external"),w=null;if(h.nodestream)try{w=s("../nodejs/NodejsStreamOutputAdapter")}catch{}function _(T,g){return new A.Promise(function(S,R){var O=[],z=T._internalType,B=T._outputType,k=T._mimeType;T.on("data",function(H,P){O.push(H),g&&g(P)}).on("error",function(H){O=[],R(H)}).on("end",function(){try{var H=(function(P,G,$){switch(P){case"blob":return f.newBlob(f.transformTo("arraybuffer",G),$);case"base64":return b.encode(G);default:return f.transformTo(P,G)}})(B,(function(P,G){var $,oe=0,ce=null,D=0;for($=0;$<G.length;$++)D+=G[$].length;switch(P){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(ce=new Uint8Array(D),$=0;$<G.length;$++)ce.set(G[$],oe),oe+=G[$].length;return ce;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+P+"'")}})(z,O),k);S(H)}catch(P){R(P)}O=[]}).resume()})}function v(T,g,S){var R=g;switch(g){case"blob":case"arraybuffer":R="uint8array";break;case"base64":R="string"}try{this._internalType=R,this._outputType=g,this._mimeType=S,f.checkSupport(R),this._worker=T.pipe(new m(R)),T.lock()}catch(O){this._worker=new p("error"),this._worker.error(O)}}v.prototype={accumulate:function(T){return _(this,T)},on:function(T,g){var S=this;return T==="data"?this._worker.on(T,function(R){g.call(S,R.data,R.meta)}):this._worker.on(T,function(){f.delay(g,arguments,S)}),this},resume:function(){return f.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(T){if(f.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new w(this,{objectMode:this._outputType!=="nodebuffer"},T)}},u.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(s,u,d){if(d.base64=!0,d.array=!0,d.string=!0,d.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",d.nodebuffer=typeof Buffer<"u",d.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")d.blob=!1;else{var f=new ArrayBuffer(0);try{d.blob=new Blob([f],{type:"application/zip"}).size===0}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);m.append(f),d.blob=m.getBlob("application/zip").size===0}catch{d.blob=!1}}}try{d.nodestream=!!s("readable-stream").Readable}catch{d.nodestream=!1}},{"readable-stream":16}],31:[function(s,u,d){for(var f=s("./utils"),m=s("./support"),p=s("./nodejsUtils"),b=s("./stream/GenericWorker"),h=new Array(256),A=0;A<256;A++)h[A]=252<=A?6:248<=A?5:240<=A?4:224<=A?3:192<=A?2:1;h[254]=h[254]=1;function w(){b.call(this,"utf-8 decode"),this.leftOver=null}function _(){b.call(this,"utf-8 encode")}d.utf8encode=function(v){return m.nodebuffer?p.newBufferFrom(v,"utf-8"):(function(T){var g,S,R,O,z,B=T.length,k=0;for(O=0;O<B;O++)(64512&(S=T.charCodeAt(O)))==55296&&O+1<B&&(64512&(R=T.charCodeAt(O+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),O++),k+=S<128?1:S<2048?2:S<65536?3:4;for(g=m.uint8array?new Uint8Array(k):new Array(k),O=z=0;z<k;O++)(64512&(S=T.charCodeAt(O)))==55296&&O+1<B&&(64512&(R=T.charCodeAt(O+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),O++),S<128?g[z++]=S:(S<2048?g[z++]=192|S>>>6:(S<65536?g[z++]=224|S>>>12:(g[z++]=240|S>>>18,g[z++]=128|S>>>12&63),g[z++]=128|S>>>6&63),g[z++]=128|63&S);return g})(v)},d.utf8decode=function(v){return m.nodebuffer?f.transformTo("nodebuffer",v).toString("utf-8"):(function(T){var g,S,R,O,z=T.length,B=new Array(2*z);for(g=S=0;g<z;)if((R=T[g++])<128)B[S++]=R;else if(4<(O=h[R]))B[S++]=65533,g+=O-1;else{for(R&=O===2?31:O===3?15:7;1<O&&g<z;)R=R<<6|63&T[g++],O--;1<O?B[S++]=65533:R<65536?B[S++]=R:(R-=65536,B[S++]=55296|R>>10&1023,B[S++]=56320|1023&R)}return B.length!==S&&(B.subarray?B=B.subarray(0,S):B.length=S),f.applyFromCharCode(B)})(v=f.transformTo(m.uint8array?"uint8array":"array",v))},f.inherits(w,b),w.prototype.processChunk=function(v){var T=f.transformTo(m.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(m.uint8array){var g=T;(T=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),T.set(g,this.leftOver.length)}else T=this.leftOver.concat(T);this.leftOver=null}var S=(function(O,z){var B;for((z=z||O.length)>O.length&&(z=O.length),B=z-1;0<=B&&(192&O[B])==128;)B--;return B<0||B===0?z:B+h[O[B]]>z?B:z})(T),R=T;S!==T.length&&(m.uint8array?(R=T.subarray(0,S),this.leftOver=T.subarray(S,T.length)):(R=T.slice(0,S),this.leftOver=T.slice(S,T.length))),this.push({data:d.utf8decode(R),meta:v.meta})},w.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:d.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},d.Utf8DecodeWorker=w,f.inherits(_,b),_.prototype.processChunk=function(v){this.push({data:d.utf8encode(v.data),meta:v.meta})},d.Utf8EncodeWorker=_},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(s,u,d){var f=s("./support"),m=s("./base64"),p=s("./nodejsUtils"),b=s("./external");function h(g){return g}function A(g,S){for(var R=0;R<g.length;++R)S[R]=255&g.charCodeAt(R);return S}s("setimmediate"),d.newBlob=function(g,S){d.checkSupport("blob");try{return new Blob([g],{type:S})}catch{try{var R=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return R.append(g),R.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var w={stringifyByChunk:function(g,S,R){var O=[],z=0,B=g.length;if(B<=R)return String.fromCharCode.apply(null,g);for(;z<B;)S==="array"||S==="nodebuffer"?O.push(String.fromCharCode.apply(null,g.slice(z,Math.min(z+R,B)))):O.push(String.fromCharCode.apply(null,g.subarray(z,Math.min(z+R,B)))),z+=R;return O.join("")},stringifyByChar:function(g){for(var S="",R=0;R<g.length;R++)S+=String.fromCharCode(g[R]);return S},applyCanBeUsed:{uint8array:(function(){try{return f.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return f.nodebuffer&&String.fromCharCode.apply(null,p.allocBuffer(1)).length===1}catch{return!1}})()}};function _(g){var S=65536,R=d.getTypeOf(g),O=!0;if(R==="uint8array"?O=w.applyCanBeUsed.uint8array:R==="nodebuffer"&&(O=w.applyCanBeUsed.nodebuffer),O)for(;1<S;)try{return w.stringifyByChunk(g,R,S)}catch{S=Math.floor(S/2)}return w.stringifyByChar(g)}function v(g,S){for(var R=0;R<g.length;R++)S[R]=g[R];return S}d.applyFromCharCode=_;var T={};T.string={string:h,array:function(g){return A(g,new Array(g.length))},arraybuffer:function(g){return T.string.uint8array(g).buffer},uint8array:function(g){return A(g,new Uint8Array(g.length))},nodebuffer:function(g){return A(g,p.allocBuffer(g.length))}},T.array={string:_,array:h,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return p.newBufferFrom(g)}},T.arraybuffer={string:function(g){return _(new Uint8Array(g))},array:function(g){return v(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:h,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return p.newBufferFrom(new Uint8Array(g))}},T.uint8array={string:_,array:function(g){return v(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:h,nodebuffer:function(g){return p.newBufferFrom(g)}},T.nodebuffer={string:_,array:function(g){return v(g,new Array(g.length))},arraybuffer:function(g){return T.nodebuffer.uint8array(g).buffer},uint8array:function(g){return v(g,new Uint8Array(g.length))},nodebuffer:h},d.transformTo=function(g,S){if(S=S||"",!g)return S;d.checkSupport(g);var R=d.getTypeOf(S);return T[R][g](S)},d.resolve=function(g){for(var S=g.split("/"),R=[],O=0;O<S.length;O++){var z=S[O];z==="."||z===""&&O!==0&&O!==S.length-1||(z===".."?R.pop():R.push(z))}return R.join("/")},d.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":f.nodebuffer&&p.isBuffer(g)?"nodebuffer":f.uint8array&&g instanceof Uint8Array?"uint8array":f.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},d.checkSupport=function(g){if(!f[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},d.MAX_VALUE_16BITS=65535,d.MAX_VALUE_32BITS=-1,d.pretty=function(g){var S,R,O="";for(R=0;R<(g||"").length;R++)O+="\\x"+((S=g.charCodeAt(R))<16?"0":"")+S.toString(16).toUpperCase();return O},d.delay=function(g,S,R){setImmediate(function(){g.apply(R||null,S||[])})},d.inherits=function(g,S){function R(){}R.prototype=S.prototype,g.prototype=new R},d.extend=function(){var g,S,R={};for(g=0;g<arguments.length;g++)for(S in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],S)&&R[S]===void 0&&(R[S]=arguments[g][S]);return R},d.prepareContent=function(g,S,R,O,z){return b.Promise.resolve(S).then(function(B){return f.blob&&(B instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(B))!==-1)&&typeof FileReader<"u"?new b.Promise(function(k,H){var P=new FileReader;P.onload=function(G){k(G.target.result)},P.onerror=function(G){H(G.target.error)},P.readAsArrayBuffer(B)}):B}).then(function(B){var k=d.getTypeOf(B);return k?(k==="arraybuffer"?B=d.transformTo("uint8array",B):k==="string"&&(z?B=m.decode(B):R&&O!==!0&&(B=(function(H){return A(H,f.uint8array?new Uint8Array(H.length):new Array(H.length))})(B))),B):b.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(s,u,d){var f=s("./reader/readerFor"),m=s("./utils"),p=s("./signature"),b=s("./zipEntry"),h=s("./support");function A(w){this.files=[],this.loadOptions=w}A.prototype={checkSignature:function(w){if(!this.reader.readAndCheckSignature(w)){this.reader.index-=4;var _=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+m.pretty(_)+", expected "+m.pretty(w)+")")}},isSignature:function(w,_){var v=this.reader.index;this.reader.setIndex(w);var T=this.reader.readString(4)===_;return this.reader.setIndex(v),T},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var w=this.reader.readData(this.zipCommentLength),_=h.uint8array?"uint8array":"array",v=m.transformTo(_,w);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var w,_,v,T=this.zip64EndOfCentralSize-44;0<T;)w=this.reader.readInt(2),_=this.reader.readInt(4),v=this.reader.readData(_),this.zip64ExtensibleData[w]={id:w,length:_,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var w,_;for(w=0;w<this.files.length;w++)_=this.files[w],this.reader.setIndex(_.localHeaderOffset),this.checkSignature(p.LOCAL_FILE_HEADER),_.readLocalPart(this.reader),_.handleUTF8(),_.processAttributes()},readCentralDir:function(){var w;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(p.CENTRAL_FILE_HEADER);)(w=new b({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(w);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var w=this.reader.lastIndexOfSignature(p.CENTRAL_DIRECTORY_END);if(w<0)throw this.isSignature(0,p.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(w);var _=w;if(this.checkSignature(p.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===m.MAX_VALUE_16BITS||this.diskWithCentralDirStart===m.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===m.MAX_VALUE_16BITS||this.centralDirRecords===m.MAX_VALUE_16BITS||this.centralDirSize===m.MAX_VALUE_32BITS||this.centralDirOffset===m.MAX_VALUE_32BITS){if(this.zip64=!0,(w=this.reader.lastIndexOfSignature(p.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(w),this.checkSignature(p.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,p.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(p.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(p.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var T=_-v;if(0<T)this.isSignature(_,p.CENTRAL_FILE_HEADER)||(this.reader.zero=T);else if(T<0)throw new Error("Corrupted zip: missing "+Math.abs(T)+" bytes.")},prepareReader:function(w){this.reader=f(w)},load:function(w){this.prepareReader(w),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},u.exports=A},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(s,u,d){var f=s("./reader/readerFor"),m=s("./utils"),p=s("./compressedObject"),b=s("./crc32"),h=s("./utf8"),A=s("./compressions"),w=s("./support");function _(v,T){this.options=v,this.loadOptions=T}_.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var T,g;if(v.skip(22),this.fileNameLength=v.readInt(2),g=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((T=(function(S){for(var R in A)if(Object.prototype.hasOwnProperty.call(A,R)&&A[R].magic===S)return A[R];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+m.pretty(this.compressionMethod)+" unknown (inner file : "+m.transformTo("string",this.fileName)+")");this.decompressed=new p(this.compressedSize,this.uncompressedSize,this.crc32,T,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var T=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(T),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=f(this.extraFields[1].value);this.uncompressedSize===m.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===m.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===m.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===m.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var T,g,S,R=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<R;)T=v.readInt(2),g=v.readInt(2),S=v.readData(g),this.extraFields[T]={id:T,length:g,value:S};v.setIndex(R)},handleUTF8:function(){var v=w.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var T=this.findExtraFieldUnicodePath();if(T!==null)this.fileNameStr=T;else{var g=m.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var R=m.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(R)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var T=f(v.value);return T.readInt(1)!==1||b(this.fileName)!==T.readInt(4)?null:h.utf8decode(T.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var T=f(v.value);return T.readInt(1)!==1||b(this.fileComment)!==T.readInt(4)?null:h.utf8decode(T.readData(v.length-5))}return null}},u.exports=_},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(s,u,d){function f(T,g,S){this.name=T,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=g,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var m=s("./stream/StreamHelper"),p=s("./stream/DataWorker"),b=s("./utf8"),h=s("./compressedObject"),A=s("./stream/GenericWorker");f.prototype={internalStream:function(T){var g=null,S="string";try{if(!T)throw new Error("No output type specified.");var R=(S=T.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),g=this._decompressWorker();var O=!this._dataBinary;O&&!R&&(g=g.pipe(new b.Utf8EncodeWorker)),!O&&R&&(g=g.pipe(new b.Utf8DecodeWorker))}catch(z){(g=new A("error")).error(z)}return new m(g,S,"")},async:function(T,g){return this.internalStream(T).accumulate(g)},nodeStream:function(T,g){return this.internalStream(T||"nodebuffer").toNodejsStream(g)},_compressWorker:function(T,g){if(this._data instanceof h&&this._data.compression.magic===T.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new b.Utf8EncodeWorker)),h.createWorkerFrom(S,T,g)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof A?this._data:new p(this._data)}};for(var w=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],_=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<w.length;v++)f.prototype[w[v]]=_;u.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(s,u,d){(function(f){var m,p,b=f.MutationObserver||f.WebKitMutationObserver;if(b){var h=0,A=new b(T),w=f.document.createTextNode("");A.observe(w,{characterData:!0}),m=function(){w.data=h=++h%2}}else if(f.setImmediate||f.MessageChannel===void 0)m="document"in f&&"onreadystatechange"in f.document.createElement("script")?function(){var g=f.document.createElement("script");g.onreadystatechange=function(){T(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},f.document.documentElement.appendChild(g)}:function(){setTimeout(T,0)};else{var _=new f.MessageChannel;_.port1.onmessage=T,m=function(){_.port2.postMessage(0)}}var v=[];function T(){var g,S;p=!0;for(var R=v.length;R;){for(S=v,v=[],g=-1;++g<R;)S[g]();R=v.length}p=!1}u.exports=function(g){v.push(g)!==1||p||m()}}).call(this,typeof Ks<"u"?Ks:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(s,u,d){var f=s("immediate");function m(){}var p={},b=["REJECTED"],h=["FULFILLED"],A=["PENDING"];function w(R){if(typeof R!="function")throw new TypeError("resolver must be a function");this.state=A,this.queue=[],this.outcome=void 0,R!==m&&g(this,R)}function _(R,O,z){this.promise=R,typeof O=="function"&&(this.onFulfilled=O,this.callFulfilled=this.otherCallFulfilled),typeof z=="function"&&(this.onRejected=z,this.callRejected=this.otherCallRejected)}function v(R,O,z){f(function(){var B;try{B=O(z)}catch(k){return p.reject(R,k)}B===R?p.reject(R,new TypeError("Cannot resolve promise with itself")):p.resolve(R,B)})}function T(R){var O=R&&R.then;if(R&&(typeof R=="object"||typeof R=="function")&&typeof O=="function")return function(){O.apply(R,arguments)}}function g(R,O){var z=!1;function B(P){z||(z=!0,p.reject(R,P))}function k(P){z||(z=!0,p.resolve(R,P))}var H=S(function(){O(k,B)});H.status==="error"&&B(H.value)}function S(R,O){var z={};try{z.value=R(O),z.status="success"}catch(B){z.status="error",z.value=B}return z}(u.exports=w).prototype.finally=function(R){if(typeof R!="function")return this;var O=this.constructor;return this.then(function(z){return O.resolve(R()).then(function(){return z})},function(z){return O.resolve(R()).then(function(){throw z})})},w.prototype.catch=function(R){return this.then(null,R)},w.prototype.then=function(R,O){if(typeof R!="function"&&this.state===h||typeof O!="function"&&this.state===b)return this;var z=new this.constructor(m);return this.state!==A?v(z,this.state===h?R:O,this.outcome):this.queue.push(new _(z,R,O)),z},_.prototype.callFulfilled=function(R){p.resolve(this.promise,R)},_.prototype.otherCallFulfilled=function(R){v(this.promise,this.onFulfilled,R)},_.prototype.callRejected=function(R){p.reject(this.promise,R)},_.prototype.otherCallRejected=function(R){v(this.promise,this.onRejected,R)},p.resolve=function(R,O){var z=S(T,O);if(z.status==="error")return p.reject(R,z.value);var B=z.value;if(B)g(R,B);else{R.state=h,R.outcome=O;for(var k=-1,H=R.queue.length;++k<H;)R.queue[k].callFulfilled(O)}return R},p.reject=function(R,O){R.state=b,R.outcome=O;for(var z=-1,B=R.queue.length;++z<B;)R.queue[z].callRejected(O);return R},w.resolve=function(R){return R instanceof this?R:p.resolve(new this(m),R)},w.reject=function(R){var O=new this(m);return p.reject(O,R)},w.all=function(R){var O=this;if(Object.prototype.toString.call(R)!=="[object Array]")return this.reject(new TypeError("must be an array"));var z=R.length,B=!1;if(!z)return this.resolve([]);for(var k=new Array(z),H=0,P=-1,G=new this(m);++P<z;)$(R[P],P);return G;function $(oe,ce){O.resolve(oe).then(function(D){k[ce]=D,++H!==z||B||(B=!0,p.resolve(G,k))},function(D){B||(B=!0,p.reject(G,D))})}},w.race=function(R){var O=this;if(Object.prototype.toString.call(R)!=="[object Array]")return this.reject(new TypeError("must be an array"));var z=R.length,B=!1;if(!z)return this.resolve([]);for(var k=-1,H=new this(m);++k<z;)P=R[k],O.resolve(P).then(function(G){B||(B=!0,p.resolve(H,G))},function(G){B||(B=!0,p.reject(H,G))});var P;return H}},{immediate:36}],38:[function(s,u,d){var f={};(0,s("./lib/utils/common").assign)(f,s("./lib/deflate"),s("./lib/inflate"),s("./lib/zlib/constants")),u.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(s,u,d){var f=s("./zlib/deflate"),m=s("./utils/common"),p=s("./utils/strings"),b=s("./zlib/messages"),h=s("./zlib/zstream"),A=Object.prototype.toString,w=0,_=-1,v=0,T=8;function g(R){if(!(this instanceof g))return new g(R);this.options=m.assign({level:_,method:T,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},R||{});var O=this.options;O.raw&&0<O.windowBits?O.windowBits=-O.windowBits:O.gzip&&0<O.windowBits&&O.windowBits<16&&(O.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var z=f.deflateInit2(this.strm,O.level,O.method,O.windowBits,O.memLevel,O.strategy);if(z!==w)throw new Error(b[z]);if(O.header&&f.deflateSetHeader(this.strm,O.header),O.dictionary){var B;if(B=typeof O.dictionary=="string"?p.string2buf(O.dictionary):A.call(O.dictionary)==="[object ArrayBuffer]"?new Uint8Array(O.dictionary):O.dictionary,(z=f.deflateSetDictionary(this.strm,B))!==w)throw new Error(b[z]);this._dict_set=!0}}function S(R,O){var z=new g(O);if(z.push(R,!0),z.err)throw z.msg||b[z.err];return z.result}g.prototype.push=function(R,O){var z,B,k=this.strm,H=this.options.chunkSize;if(this.ended)return!1;B=O===~~O?O:O===!0?4:0,typeof R=="string"?k.input=p.string2buf(R):A.call(R)==="[object ArrayBuffer]"?k.input=new Uint8Array(R):k.input=R,k.next_in=0,k.avail_in=k.input.length;do{if(k.avail_out===0&&(k.output=new m.Buf8(H),k.next_out=0,k.avail_out=H),(z=f.deflate(k,B))!==1&&z!==w)return this.onEnd(z),!(this.ended=!0);k.avail_out!==0&&(k.avail_in!==0||B!==4&&B!==2)||(this.options.to==="string"?this.onData(p.buf2binstring(m.shrinkBuf(k.output,k.next_out))):this.onData(m.shrinkBuf(k.output,k.next_out)))}while((0<k.avail_in||k.avail_out===0)&&z!==1);return B===4?(z=f.deflateEnd(this.strm),this.onEnd(z),this.ended=!0,z===w):B!==2||(this.onEnd(w),!(k.avail_out=0))},g.prototype.onData=function(R){this.chunks.push(R)},g.prototype.onEnd=function(R){R===w&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=R,this.msg=this.strm.msg},d.Deflate=g,d.deflate=S,d.deflateRaw=function(R,O){return(O=O||{}).raw=!0,S(R,O)},d.gzip=function(R,O){return(O=O||{}).gzip=!0,S(R,O)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(s,u,d){var f=s("./zlib/inflate"),m=s("./utils/common"),p=s("./utils/strings"),b=s("./zlib/constants"),h=s("./zlib/messages"),A=s("./zlib/zstream"),w=s("./zlib/gzheader"),_=Object.prototype.toString;function v(g){if(!(this instanceof v))return new v(g);this.options=m.assign({chunkSize:16384,windowBits:0,to:""},g||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||g&&g.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&(15&S.windowBits)==0&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new A,this.strm.avail_out=0;var R=f.inflateInit2(this.strm,S.windowBits);if(R!==b.Z_OK)throw new Error(h[R]);this.header=new w,f.inflateGetHeader(this.strm,this.header)}function T(g,S){var R=new v(S);if(R.push(g,!0),R.err)throw R.msg||h[R.err];return R.result}v.prototype.push=function(g,S){var R,O,z,B,k,H,P=this.strm,G=this.options.chunkSize,$=this.options.dictionary,oe=!1;if(this.ended)return!1;O=S===~~S?S:S===!0?b.Z_FINISH:b.Z_NO_FLUSH,typeof g=="string"?P.input=p.binstring2buf(g):_.call(g)==="[object ArrayBuffer]"?P.input=new Uint8Array(g):P.input=g,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new m.Buf8(G),P.next_out=0,P.avail_out=G),(R=f.inflate(P,b.Z_NO_FLUSH))===b.Z_NEED_DICT&&$&&(H=typeof $=="string"?p.string2buf($):_.call($)==="[object ArrayBuffer]"?new Uint8Array($):$,R=f.inflateSetDictionary(this.strm,H)),R===b.Z_BUF_ERROR&&oe===!0&&(R=b.Z_OK,oe=!1),R!==b.Z_STREAM_END&&R!==b.Z_OK)return this.onEnd(R),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&R!==b.Z_STREAM_END&&(P.avail_in!==0||O!==b.Z_FINISH&&O!==b.Z_SYNC_FLUSH)||(this.options.to==="string"?(z=p.utf8border(P.output,P.next_out),B=P.next_out-z,k=p.buf2string(P.output,z),P.next_out=B,P.avail_out=G-B,B&&m.arraySet(P.output,P.output,z,B,0),this.onData(k)):this.onData(m.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(oe=!0)}while((0<P.avail_in||P.avail_out===0)&&R!==b.Z_STREAM_END);return R===b.Z_STREAM_END&&(O=b.Z_FINISH),O===b.Z_FINISH?(R=f.inflateEnd(this.strm),this.onEnd(R),this.ended=!0,R===b.Z_OK):O!==b.Z_SYNC_FLUSH||(this.onEnd(b.Z_OK),!(P.avail_out=0))},v.prototype.onData=function(g){this.chunks.push(g)},v.prototype.onEnd=function(g){g===b.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},d.Inflate=v,d.inflate=T,d.inflateRaw=function(g,S){return(S=S||{}).raw=!0,T(g,S)},d.ungzip=T},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(s,u,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";d.assign=function(b){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var A=h.shift();if(A){if(typeof A!="object")throw new TypeError(A+"must be non-object");for(var w in A)A.hasOwnProperty(w)&&(b[w]=A[w])}}return b},d.shrinkBuf=function(b,h){return b.length===h?b:b.subarray?b.subarray(0,h):(b.length=h,b)};var m={arraySet:function(b,h,A,w,_){if(h.subarray&&b.subarray)b.set(h.subarray(A,A+w),_);else for(var v=0;v<w;v++)b[_+v]=h[A+v]},flattenChunks:function(b){var h,A,w,_,v,T;for(h=w=0,A=b.length;h<A;h++)w+=b[h].length;for(T=new Uint8Array(w),h=_=0,A=b.length;h<A;h++)v=b[h],T.set(v,_),_+=v.length;return T}},p={arraySet:function(b,h,A,w,_){for(var v=0;v<w;v++)b[_+v]=h[A+v]},flattenChunks:function(b){return[].concat.apply([],b)}};d.setTyped=function(b){b?(d.Buf8=Uint8Array,d.Buf16=Uint16Array,d.Buf32=Int32Array,d.assign(d,m)):(d.Buf8=Array,d.Buf16=Array,d.Buf32=Array,d.assign(d,p))},d.setTyped(f)},{}],42:[function(s,u,d){var f=s("./common"),m=!0,p=!0;try{String.fromCharCode.apply(null,[0])}catch{m=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{p=!1}for(var b=new f.Buf8(256),h=0;h<256;h++)b[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function A(w,_){if(_<65537&&(w.subarray&&p||!w.subarray&&m))return String.fromCharCode.apply(null,f.shrinkBuf(w,_));for(var v="",T=0;T<_;T++)v+=String.fromCharCode(w[T]);return v}b[254]=b[254]=1,d.string2buf=function(w){var _,v,T,g,S,R=w.length,O=0;for(g=0;g<R;g++)(64512&(v=w.charCodeAt(g)))==55296&&g+1<R&&(64512&(T=w.charCodeAt(g+1)))==56320&&(v=65536+(v-55296<<10)+(T-56320),g++),O+=v<128?1:v<2048?2:v<65536?3:4;for(_=new f.Buf8(O),g=S=0;S<O;g++)(64512&(v=w.charCodeAt(g)))==55296&&g+1<R&&(64512&(T=w.charCodeAt(g+1)))==56320&&(v=65536+(v-55296<<10)+(T-56320),g++),v<128?_[S++]=v:(v<2048?_[S++]=192|v>>>6:(v<65536?_[S++]=224|v>>>12:(_[S++]=240|v>>>18,_[S++]=128|v>>>12&63),_[S++]=128|v>>>6&63),_[S++]=128|63&v);return _},d.buf2binstring=function(w){return A(w,w.length)},d.binstring2buf=function(w){for(var _=new f.Buf8(w.length),v=0,T=_.length;v<T;v++)_[v]=w.charCodeAt(v);return _},d.buf2string=function(w,_){var v,T,g,S,R=_||w.length,O=new Array(2*R);for(v=T=0;v<R;)if((g=w[v++])<128)O[T++]=g;else if(4<(S=b[g]))O[T++]=65533,v+=S-1;else{for(g&=S===2?31:S===3?15:7;1<S&&v<R;)g=g<<6|63&w[v++],S--;1<S?O[T++]=65533:g<65536?O[T++]=g:(g-=65536,O[T++]=55296|g>>10&1023,O[T++]=56320|1023&g)}return A(O,T)},d.utf8border=function(w,_){var v;for((_=_||w.length)>w.length&&(_=w.length),v=_-1;0<=v&&(192&w[v])==128;)v--;return v<0||v===0?_:v+b[w[v]]>_?v:_}},{"./common":41}],43:[function(s,u,d){u.exports=function(f,m,p,b){for(var h=65535&f|0,A=f>>>16&65535|0,w=0;p!==0;){for(p-=w=2e3<p?2e3:p;A=A+(h=h+m[b++]|0)|0,--w;);h%=65521,A%=65521}return h|A<<16|0}},{}],44:[function(s,u,d){u.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(s,u,d){var f=(function(){for(var m,p=[],b=0;b<256;b++){m=b;for(var h=0;h<8;h++)m=1&m?3988292384^m>>>1:m>>>1;p[b]=m}return p})();u.exports=function(m,p,b,h){var A=f,w=h+b;m^=-1;for(var _=h;_<w;_++)m=m>>>8^A[255&(m^p[_])];return-1^m}},{}],46:[function(s,u,d){var f,m=s("../utils/common"),p=s("./trees"),b=s("./adler32"),h=s("./crc32"),A=s("./messages"),w=0,_=4,v=0,T=-2,g=-1,S=4,R=2,O=8,z=9,B=286,k=30,H=19,P=2*B+1,G=15,$=3,oe=258,ce=oe+$+1,D=42,Y=113,E=1,W=2,I=3,j=4;function J(x,re){return x.msg=A[re],re}function q(x){return(x<<1)-(4<x?9:0)}function me(x){for(var re=x.length;0<=--re;)x[re]=0}function C(x){var re=x.state,ae=re.pending;ae>x.avail_out&&(ae=x.avail_out),ae!==0&&(m.arraySet(x.output,re.pending_buf,re.pending_out,ae,x.next_out),x.next_out+=ae,re.pending_out+=ae,x.total_out+=ae,x.avail_out-=ae,re.pending-=ae,re.pending===0&&(re.pending_out=0))}function L(x,re){p._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,re),x.block_start=x.strstart,C(x.strm)}function le(x,re){x.pending_buf[x.pending++]=re}function ne(x,re){x.pending_buf[x.pending++]=re>>>8&255,x.pending_buf[x.pending++]=255&re}function se(x,re){var ae,U,M=x.max_chain_length,X=x.strstart,ge=x.prev_length,ye=x.nice_match,ee=x.strstart>x.w_size-ce?x.strstart-(x.w_size-ce):0,be=x.window,Se=x.w_mask,xe=x.prev,Ne=x.strstart+oe,Xe=be[X+ge-1],Ue=be[X+ge];x.prev_length>=x.good_match&&(M>>=2),ye>x.lookahead&&(ye=x.lookahead);do if(be[(ae=re)+ge]===Ue&&be[ae+ge-1]===Xe&&be[ae]===be[X]&&be[++ae]===be[X+1]){X+=2,ae++;do;while(be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&X<Ne);if(U=oe-(Ne-X),X=Ne-oe,ge<U){if(x.match_start=re,ye<=(ge=U))break;Xe=be[X+ge-1],Ue=be[X+ge]}}while((re=xe[re&Se])>ee&&--M!=0);return ge<=x.lookahead?ge:x.lookahead}function Ee(x){var re,ae,U,M,X,ge,ye,ee,be,Se,xe=x.w_size;do{if(M=x.window_size-x.lookahead-x.strstart,x.strstart>=xe+(xe-ce)){for(m.arraySet(x.window,x.window,xe,xe,0),x.match_start-=xe,x.strstart-=xe,x.block_start-=xe,re=ae=x.hash_size;U=x.head[--re],x.head[re]=xe<=U?U-xe:0,--ae;);for(re=ae=xe;U=x.prev[--re],x.prev[re]=xe<=U?U-xe:0,--ae;);M+=xe}if(x.strm.avail_in===0)break;if(ge=x.strm,ye=x.window,ee=x.strstart+x.lookahead,be=M,Se=void 0,Se=ge.avail_in,be<Se&&(Se=be),ae=Se===0?0:(ge.avail_in-=Se,m.arraySet(ye,ge.input,ge.next_in,Se,ee),ge.state.wrap===1?ge.adler=b(ge.adler,ye,Se,ee):ge.state.wrap===2&&(ge.adler=h(ge.adler,ye,Se,ee)),ge.next_in+=Se,ge.total_in+=Se,Se),x.lookahead+=ae,x.lookahead+x.insert>=$)for(X=x.strstart-x.insert,x.ins_h=x.window[X],x.ins_h=(x.ins_h<<x.hash_shift^x.window[X+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[X+$-1])&x.hash_mask,x.prev[X&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=X,X++,x.insert--,!(x.lookahead+x.insert<$)););}while(x.lookahead<ce&&x.strm.avail_in!==0)}function Ce(x,re){for(var ae,U;;){if(x.lookahead<ce){if(Ee(x),x.lookahead<ce&&re===w)return E;if(x.lookahead===0)break}if(ae=0,x.lookahead>=$&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+$-1])&x.hash_mask,ae=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),ae!==0&&x.strstart-ae<=x.w_size-ce&&(x.match_length=se(x,ae)),x.match_length>=$)if(U=p._tr_tally(x,x.strstart-x.match_start,x.match_length-$),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=$){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+$-1])&x.hash_mask,ae=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else U=p._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(U&&(L(x,!1),x.strm.avail_out===0))return E}return x.insert=x.strstart<$-1?x.strstart:$-1,re===_?(L(x,!0),x.strm.avail_out===0?I:j):x.last_lit&&(L(x,!1),x.strm.avail_out===0)?E:W}function Te(x,re){for(var ae,U,M;;){if(x.lookahead<ce){if(Ee(x),x.lookahead<ce&&re===w)return E;if(x.lookahead===0)break}if(ae=0,x.lookahead>=$&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+$-1])&x.hash_mask,ae=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=$-1,ae!==0&&x.prev_length<x.max_lazy_match&&x.strstart-ae<=x.w_size-ce&&(x.match_length=se(x,ae),x.match_length<=5&&(x.strategy===1||x.match_length===$&&4096<x.strstart-x.match_start)&&(x.match_length=$-1)),x.prev_length>=$&&x.match_length<=x.prev_length){for(M=x.strstart+x.lookahead-$,U=p._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-$),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=M&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+$-1])&x.hash_mask,ae=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=$-1,x.strstart++,U&&(L(x,!1),x.strm.avail_out===0))return E}else if(x.match_available){if((U=p._tr_tally(x,0,x.window[x.strstart-1]))&&L(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return E}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(U=p._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<$-1?x.strstart:$-1,re===_?(L(x,!0),x.strm.avail_out===0?I:j):x.last_lit&&(L(x,!1),x.strm.avail_out===0)?E:W}function we(x,re,ae,U,M){this.good_length=x,this.max_lazy=re,this.nice_length=ae,this.max_chain=U,this.func=M}function ke(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=O,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new m.Buf16(2*P),this.dyn_dtree=new m.Buf16(2*(2*k+1)),this.bl_tree=new m.Buf16(2*(2*H+1)),me(this.dyn_ltree),me(this.dyn_dtree),me(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new m.Buf16(G+1),this.heap=new m.Buf16(2*B+1),me(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new m.Buf16(2*B+1),me(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ze(x){var re;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=R,(re=x.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?D:Y,x.adler=re.wrap===2?0:1,re.last_flush=w,p._tr_init(re),v):J(x,T)}function bt(x){var re=ze(x);return re===v&&(function(ae){ae.window_size=2*ae.w_size,me(ae.head),ae.max_lazy_match=f[ae.level].max_lazy,ae.good_match=f[ae.level].good_length,ae.nice_match=f[ae.level].nice_length,ae.max_chain_length=f[ae.level].max_chain,ae.strstart=0,ae.block_start=0,ae.lookahead=0,ae.insert=0,ae.match_length=ae.prev_length=$-1,ae.match_available=0,ae.ins_h=0})(x.state),re}function he(x,re,ae,U,M,X){if(!x)return T;var ge=1;if(re===g&&(re=6),U<0?(ge=0,U=-U):15<U&&(ge=2,U-=16),M<1||z<M||ae!==O||U<8||15<U||re<0||9<re||X<0||S<X)return J(x,T);U===8&&(U=9);var ye=new ke;return(x.state=ye).strm=x,ye.wrap=ge,ye.gzhead=null,ye.w_bits=U,ye.w_size=1<<ye.w_bits,ye.w_mask=ye.w_size-1,ye.hash_bits=M+7,ye.hash_size=1<<ye.hash_bits,ye.hash_mask=ye.hash_size-1,ye.hash_shift=~~((ye.hash_bits+$-1)/$),ye.window=new m.Buf8(2*ye.w_size),ye.head=new m.Buf16(ye.hash_size),ye.prev=new m.Buf16(ye.w_size),ye.lit_bufsize=1<<M+6,ye.pending_buf_size=4*ye.lit_bufsize,ye.pending_buf=new m.Buf8(ye.pending_buf_size),ye.d_buf=1*ye.lit_bufsize,ye.l_buf=3*ye.lit_bufsize,ye.level=re,ye.strategy=X,ye.method=ae,bt(x)}f=[new we(0,0,0,0,function(x,re){var ae=65535;for(ae>x.pending_buf_size-5&&(ae=x.pending_buf_size-5);;){if(x.lookahead<=1){if(Ee(x),x.lookahead===0&&re===w)return E;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var U=x.block_start+ae;if((x.strstart===0||x.strstart>=U)&&(x.lookahead=x.strstart-U,x.strstart=U,L(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-ce&&(L(x,!1),x.strm.avail_out===0))return E}return x.insert=0,re===_?(L(x,!0),x.strm.avail_out===0?I:j):(x.strstart>x.block_start&&(L(x,!1),x.strm.avail_out),E)}),new we(4,4,8,4,Ce),new we(4,5,16,8,Ce),new we(4,6,32,32,Ce),new we(4,4,16,16,Te),new we(8,16,32,32,Te),new we(8,16,128,128,Te),new we(8,32,128,256,Te),new we(32,128,258,1024,Te),new we(32,258,258,4096,Te)],d.deflateInit=function(x,re){return he(x,re,O,15,8,0)},d.deflateInit2=he,d.deflateReset=bt,d.deflateResetKeep=ze,d.deflateSetHeader=function(x,re){return x&&x.state?x.state.wrap!==2?T:(x.state.gzhead=re,v):T},d.deflate=function(x,re){var ae,U,M,X;if(!x||!x.state||5<re||re<0)return x?J(x,T):T;if(U=x.state,!x.output||!x.input&&x.avail_in!==0||U.status===666&&re!==_)return J(x,x.avail_out===0?-5:T);if(U.strm=x,ae=U.last_flush,U.last_flush=re,U.status===D)if(U.wrap===2)x.adler=0,le(U,31),le(U,139),le(U,8),U.gzhead?(le(U,(U.gzhead.text?1:0)+(U.gzhead.hcrc?2:0)+(U.gzhead.extra?4:0)+(U.gzhead.name?8:0)+(U.gzhead.comment?16:0)),le(U,255&U.gzhead.time),le(U,U.gzhead.time>>8&255),le(U,U.gzhead.time>>16&255),le(U,U.gzhead.time>>24&255),le(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),le(U,255&U.gzhead.os),U.gzhead.extra&&U.gzhead.extra.length&&(le(U,255&U.gzhead.extra.length),le(U,U.gzhead.extra.length>>8&255)),U.gzhead.hcrc&&(x.adler=h(x.adler,U.pending_buf,U.pending,0)),U.gzindex=0,U.status=69):(le(U,0),le(U,0),le(U,0),le(U,0),le(U,0),le(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),le(U,3),U.status=Y);else{var ge=O+(U.w_bits-8<<4)<<8;ge|=(2<=U.strategy||U.level<2?0:U.level<6?1:U.level===6?2:3)<<6,U.strstart!==0&&(ge|=32),ge+=31-ge%31,U.status=Y,ne(U,ge),U.strstart!==0&&(ne(U,x.adler>>>16),ne(U,65535&x.adler)),x.adler=1}if(U.status===69)if(U.gzhead.extra){for(M=U.pending;U.gzindex<(65535&U.gzhead.extra.length)&&(U.pending!==U.pending_buf_size||(U.gzhead.hcrc&&U.pending>M&&(x.adler=h(x.adler,U.pending_buf,U.pending-M,M)),C(x),M=U.pending,U.pending!==U.pending_buf_size));)le(U,255&U.gzhead.extra[U.gzindex]),U.gzindex++;U.gzhead.hcrc&&U.pending>M&&(x.adler=h(x.adler,U.pending_buf,U.pending-M,M)),U.gzindex===U.gzhead.extra.length&&(U.gzindex=0,U.status=73)}else U.status=73;if(U.status===73)if(U.gzhead.name){M=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>M&&(x.adler=h(x.adler,U.pending_buf,U.pending-M,M)),C(x),M=U.pending,U.pending===U.pending_buf_size)){X=1;break}X=U.gzindex<U.gzhead.name.length?255&U.gzhead.name.charCodeAt(U.gzindex++):0,le(U,X)}while(X!==0);U.gzhead.hcrc&&U.pending>M&&(x.adler=h(x.adler,U.pending_buf,U.pending-M,M)),X===0&&(U.gzindex=0,U.status=91)}else U.status=91;if(U.status===91)if(U.gzhead.comment){M=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>M&&(x.adler=h(x.adler,U.pending_buf,U.pending-M,M)),C(x),M=U.pending,U.pending===U.pending_buf_size)){X=1;break}X=U.gzindex<U.gzhead.comment.length?255&U.gzhead.comment.charCodeAt(U.gzindex++):0,le(U,X)}while(X!==0);U.gzhead.hcrc&&U.pending>M&&(x.adler=h(x.adler,U.pending_buf,U.pending-M,M)),X===0&&(U.status=103)}else U.status=103;if(U.status===103&&(U.gzhead.hcrc?(U.pending+2>U.pending_buf_size&&C(x),U.pending+2<=U.pending_buf_size&&(le(U,255&x.adler),le(U,x.adler>>8&255),x.adler=0,U.status=Y)):U.status=Y),U.pending!==0){if(C(x),x.avail_out===0)return U.last_flush=-1,v}else if(x.avail_in===0&&q(re)<=q(ae)&&re!==_)return J(x,-5);if(U.status===666&&x.avail_in!==0)return J(x,-5);if(x.avail_in!==0||U.lookahead!==0||re!==w&&U.status!==666){var ye=U.strategy===2?(function(ee,be){for(var Se;;){if(ee.lookahead===0&&(Ee(ee),ee.lookahead===0)){if(be===w)return E;break}if(ee.match_length=0,Se=p._tr_tally(ee,0,ee.window[ee.strstart]),ee.lookahead--,ee.strstart++,Se&&(L(ee,!1),ee.strm.avail_out===0))return E}return ee.insert=0,be===_?(L(ee,!0),ee.strm.avail_out===0?I:j):ee.last_lit&&(L(ee,!1),ee.strm.avail_out===0)?E:W})(U,re):U.strategy===3?(function(ee,be){for(var Se,xe,Ne,Xe,Ue=ee.window;;){if(ee.lookahead<=oe){if(Ee(ee),ee.lookahead<=oe&&be===w)return E;if(ee.lookahead===0)break}if(ee.match_length=0,ee.lookahead>=$&&0<ee.strstart&&(xe=Ue[Ne=ee.strstart-1])===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]){Xe=ee.strstart+oe;do;while(xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&Ne<Xe);ee.match_length=oe-(Xe-Ne),ee.match_length>ee.lookahead&&(ee.match_length=ee.lookahead)}if(ee.match_length>=$?(Se=p._tr_tally(ee,1,ee.match_length-$),ee.lookahead-=ee.match_length,ee.strstart+=ee.match_length,ee.match_length=0):(Se=p._tr_tally(ee,0,ee.window[ee.strstart]),ee.lookahead--,ee.strstart++),Se&&(L(ee,!1),ee.strm.avail_out===0))return E}return ee.insert=0,be===_?(L(ee,!0),ee.strm.avail_out===0?I:j):ee.last_lit&&(L(ee,!1),ee.strm.avail_out===0)?E:W})(U,re):f[U.level].func(U,re);if(ye!==I&&ye!==j||(U.status=666),ye===E||ye===I)return x.avail_out===0&&(U.last_flush=-1),v;if(ye===W&&(re===1?p._tr_align(U):re!==5&&(p._tr_stored_block(U,0,0,!1),re===3&&(me(U.head),U.lookahead===0&&(U.strstart=0,U.block_start=0,U.insert=0))),C(x),x.avail_out===0))return U.last_flush=-1,v}return re!==_?v:U.wrap<=0?1:(U.wrap===2?(le(U,255&x.adler),le(U,x.adler>>8&255),le(U,x.adler>>16&255),le(U,x.adler>>24&255),le(U,255&x.total_in),le(U,x.total_in>>8&255),le(U,x.total_in>>16&255),le(U,x.total_in>>24&255)):(ne(U,x.adler>>>16),ne(U,65535&x.adler)),C(x),0<U.wrap&&(U.wrap=-U.wrap),U.pending!==0?v:1)},d.deflateEnd=function(x){var re;return x&&x.state?(re=x.state.status)!==D&&re!==69&&re!==73&&re!==91&&re!==103&&re!==Y&&re!==666?J(x,T):(x.state=null,re===Y?J(x,-3):v):T},d.deflateSetDictionary=function(x,re){var ae,U,M,X,ge,ye,ee,be,Se=re.length;if(!x||!x.state||(X=(ae=x.state).wrap)===2||X===1&&ae.status!==D||ae.lookahead)return T;for(X===1&&(x.adler=b(x.adler,re,Se,0)),ae.wrap=0,Se>=ae.w_size&&(X===0&&(me(ae.head),ae.strstart=0,ae.block_start=0,ae.insert=0),be=new m.Buf8(ae.w_size),m.arraySet(be,re,Se-ae.w_size,ae.w_size,0),re=be,Se=ae.w_size),ge=x.avail_in,ye=x.next_in,ee=x.input,x.avail_in=Se,x.next_in=0,x.input=re,Ee(ae);ae.lookahead>=$;){for(U=ae.strstart,M=ae.lookahead-($-1);ae.ins_h=(ae.ins_h<<ae.hash_shift^ae.window[U+$-1])&ae.hash_mask,ae.prev[U&ae.w_mask]=ae.head[ae.ins_h],ae.head[ae.ins_h]=U,U++,--M;);ae.strstart=U,ae.lookahead=$-1,Ee(ae)}return ae.strstart+=ae.lookahead,ae.block_start=ae.strstart,ae.insert=ae.lookahead,ae.lookahead=0,ae.match_length=ae.prev_length=$-1,ae.match_available=0,x.next_in=ye,x.input=ee,x.avail_in=ge,ae.wrap=X,v},d.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(s,u,d){u.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(s,u,d){u.exports=function(f,m){var p,b,h,A,w,_,v,T,g,S,R,O,z,B,k,H,P,G,$,oe,ce,D,Y,E,W;p=f.state,b=f.next_in,E=f.input,h=b+(f.avail_in-5),A=f.next_out,W=f.output,w=A-(m-f.avail_out),_=A+(f.avail_out-257),v=p.dmax,T=p.wsize,g=p.whave,S=p.wnext,R=p.window,O=p.hold,z=p.bits,B=p.lencode,k=p.distcode,H=(1<<p.lenbits)-1,P=(1<<p.distbits)-1;e:do{z<15&&(O+=E[b++]<<z,z+=8,O+=E[b++]<<z,z+=8),G=B[O&H];t:for(;;){if(O>>>=$=G>>>24,z-=$,($=G>>>16&255)===0)W[A++]=65535&G;else{if(!(16&$)){if((64&$)==0){G=B[(65535&G)+(O&(1<<$)-1)];continue t}if(32&$){p.mode=12;break e}f.msg="invalid literal/length code",p.mode=30;break e}oe=65535&G,($&=15)&&(z<$&&(O+=E[b++]<<z,z+=8),oe+=O&(1<<$)-1,O>>>=$,z-=$),z<15&&(O+=E[b++]<<z,z+=8,O+=E[b++]<<z,z+=8),G=k[O&P];n:for(;;){if(O>>>=$=G>>>24,z-=$,!(16&($=G>>>16&255))){if((64&$)==0){G=k[(65535&G)+(O&(1<<$)-1)];continue n}f.msg="invalid distance code",p.mode=30;break e}if(ce=65535&G,z<($&=15)&&(O+=E[b++]<<z,(z+=8)<$&&(O+=E[b++]<<z,z+=8)),v<(ce+=O&(1<<$)-1)){f.msg="invalid distance too far back",p.mode=30;break e}if(O>>>=$,z-=$,($=A-w)<ce){if(g<($=ce-$)&&p.sane){f.msg="invalid distance too far back",p.mode=30;break e}if(Y=R,(D=0)===S){if(D+=T-$,$<oe){for(oe-=$;W[A++]=R[D++],--$;);D=A-ce,Y=W}}else if(S<$){if(D+=T+S-$,($-=S)<oe){for(oe-=$;W[A++]=R[D++],--$;);if(D=0,S<oe){for(oe-=$=S;W[A++]=R[D++],--$;);D=A-ce,Y=W}}}else if(D+=S-$,$<oe){for(oe-=$;W[A++]=R[D++],--$;);D=A-ce,Y=W}for(;2<oe;)W[A++]=Y[D++],W[A++]=Y[D++],W[A++]=Y[D++],oe-=3;oe&&(W[A++]=Y[D++],1<oe&&(W[A++]=Y[D++]))}else{for(D=A-ce;W[A++]=W[D++],W[A++]=W[D++],W[A++]=W[D++],2<(oe-=3););oe&&(W[A++]=W[D++],1<oe&&(W[A++]=W[D++]))}break}}break}}while(b<h&&A<_);b-=oe=z>>3,O&=(1<<(z-=oe<<3))-1,f.next_in=b,f.next_out=A,f.avail_in=b<h?h-b+5:5-(b-h),f.avail_out=A<_?_-A+257:257-(A-_),p.hold=O,p.bits=z}},{}],49:[function(s,u,d){var f=s("../utils/common"),m=s("./adler32"),p=s("./crc32"),b=s("./inffast"),h=s("./inftrees"),A=1,w=2,_=0,v=-2,T=1,g=852,S=592;function R(D){return(D>>>24&255)+(D>>>8&65280)+((65280&D)<<8)+((255&D)<<24)}function O(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function z(D){var Y;return D&&D.state?(Y=D.state,D.total_in=D.total_out=Y.total=0,D.msg="",Y.wrap&&(D.adler=1&Y.wrap),Y.mode=T,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new f.Buf32(g),Y.distcode=Y.distdyn=new f.Buf32(S),Y.sane=1,Y.back=-1,_):v}function B(D){var Y;return D&&D.state?((Y=D.state).wsize=0,Y.whave=0,Y.wnext=0,z(D)):v}function k(D,Y){var E,W;return D&&D.state?(W=D.state,Y<0?(E=0,Y=-Y):(E=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?v:(W.window!==null&&W.wbits!==Y&&(W.window=null),W.wrap=E,W.wbits=Y,B(D))):v}function H(D,Y){var E,W;return D?(W=new O,(D.state=W).window=null,(E=k(D,Y))!==_&&(D.state=null),E):v}var P,G,$=!0;function oe(D){if($){var Y;for(P=new f.Buf32(512),G=new f.Buf32(32),Y=0;Y<144;)D.lens[Y++]=8;for(;Y<256;)D.lens[Y++]=9;for(;Y<280;)D.lens[Y++]=7;for(;Y<288;)D.lens[Y++]=8;for(h(A,D.lens,0,288,P,0,D.work,{bits:9}),Y=0;Y<32;)D.lens[Y++]=5;h(w,D.lens,0,32,G,0,D.work,{bits:5}),$=!1}D.lencode=P,D.lenbits=9,D.distcode=G,D.distbits=5}function ce(D,Y,E,W){var I,j=D.state;return j.window===null&&(j.wsize=1<<j.wbits,j.wnext=0,j.whave=0,j.window=new f.Buf8(j.wsize)),W>=j.wsize?(f.arraySet(j.window,Y,E-j.wsize,j.wsize,0),j.wnext=0,j.whave=j.wsize):(W<(I=j.wsize-j.wnext)&&(I=W),f.arraySet(j.window,Y,E-W,I,j.wnext),(W-=I)?(f.arraySet(j.window,Y,E-W,W,0),j.wnext=W,j.whave=j.wsize):(j.wnext+=I,j.wnext===j.wsize&&(j.wnext=0),j.whave<j.wsize&&(j.whave+=I))),0}d.inflateReset=B,d.inflateReset2=k,d.inflateResetKeep=z,d.inflateInit=function(D){return H(D,15)},d.inflateInit2=H,d.inflate=function(D,Y){var E,W,I,j,J,q,me,C,L,le,ne,se,Ee,Ce,Te,we,ke,ze,bt,he,x,re,ae,U,M=0,X=new f.Buf8(4),ge=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!D||!D.state||!D.output||!D.input&&D.avail_in!==0)return v;(E=D.state).mode===12&&(E.mode=13),J=D.next_out,I=D.output,me=D.avail_out,j=D.next_in,W=D.input,q=D.avail_in,C=E.hold,L=E.bits,le=q,ne=me,re=_;e:for(;;)switch(E.mode){case T:if(E.wrap===0){E.mode=13;break}for(;L<16;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(2&E.wrap&&C===35615){X[E.check=0]=255&C,X[1]=C>>>8&255,E.check=p(E.check,X,2,0),L=C=0,E.mode=2;break}if(E.flags=0,E.head&&(E.head.done=!1),!(1&E.wrap)||(((255&C)<<8)+(C>>8))%31){D.msg="incorrect header check",E.mode=30;break}if((15&C)!=8){D.msg="unknown compression method",E.mode=30;break}if(L-=4,x=8+(15&(C>>>=4)),E.wbits===0)E.wbits=x;else if(x>E.wbits){D.msg="invalid window size",E.mode=30;break}E.dmax=1<<x,D.adler=E.check=1,E.mode=512&C?10:12,L=C=0;break;case 2:for(;L<16;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(E.flags=C,(255&E.flags)!=8){D.msg="unknown compression method",E.mode=30;break}if(57344&E.flags){D.msg="unknown header flags set",E.mode=30;break}E.head&&(E.head.text=C>>8&1),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,E.check=p(E.check,X,2,0)),L=C=0,E.mode=3;case 3:for(;L<32;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}E.head&&(E.head.time=C),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,X[2]=C>>>16&255,X[3]=C>>>24&255,E.check=p(E.check,X,4,0)),L=C=0,E.mode=4;case 4:for(;L<16;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}E.head&&(E.head.xflags=255&C,E.head.os=C>>8),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,E.check=p(E.check,X,2,0)),L=C=0,E.mode=5;case 5:if(1024&E.flags){for(;L<16;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}E.length=C,E.head&&(E.head.extra_len=C),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,E.check=p(E.check,X,2,0)),L=C=0}else E.head&&(E.head.extra=null);E.mode=6;case 6:if(1024&E.flags&&(q<(se=E.length)&&(se=q),se&&(E.head&&(x=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),f.arraySet(E.head.extra,W,j,se,x)),512&E.flags&&(E.check=p(E.check,W,se,j)),q-=se,j+=se,E.length-=se),E.length))break e;E.length=0,E.mode=7;case 7:if(2048&E.flags){if(q===0)break e;for(se=0;x=W[j+se++],E.head&&x&&E.length<65536&&(E.head.name+=String.fromCharCode(x)),x&&se<q;);if(512&E.flags&&(E.check=p(E.check,W,se,j)),q-=se,j+=se,x)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=8;case 8:if(4096&E.flags){if(q===0)break e;for(se=0;x=W[j+se++],E.head&&x&&E.length<65536&&(E.head.comment+=String.fromCharCode(x)),x&&se<q;);if(512&E.flags&&(E.check=p(E.check,W,se,j)),q-=se,j+=se,x)break e}else E.head&&(E.head.comment=null);E.mode=9;case 9:if(512&E.flags){for(;L<16;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(C!==(65535&E.check)){D.msg="header crc mismatch",E.mode=30;break}L=C=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),D.adler=E.check=0,E.mode=12;break;case 10:for(;L<32;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}D.adler=E.check=R(C),L=C=0,E.mode=11;case 11:if(E.havedict===0)return D.next_out=J,D.avail_out=me,D.next_in=j,D.avail_in=q,E.hold=C,E.bits=L,2;D.adler=E.check=1,E.mode=12;case 12:if(Y===5||Y===6)break e;case 13:if(E.last){C>>>=7&L,L-=7&L,E.mode=27;break}for(;L<3;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}switch(E.last=1&C,L-=1,3&(C>>>=1)){case 0:E.mode=14;break;case 1:if(oe(E),E.mode=20,Y!==6)break;C>>>=2,L-=2;break e;case 2:E.mode=17;break;case 3:D.msg="invalid block type",E.mode=30}C>>>=2,L-=2;break;case 14:for(C>>>=7&L,L-=7&L;L<32;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if((65535&C)!=(C>>>16^65535)){D.msg="invalid stored block lengths",E.mode=30;break}if(E.length=65535&C,L=C=0,E.mode=15,Y===6)break e;case 15:E.mode=16;case 16:if(se=E.length){if(q<se&&(se=q),me<se&&(se=me),se===0)break e;f.arraySet(I,W,j,se,J),q-=se,j+=se,me-=se,J+=se,E.length-=se;break}E.mode=12;break;case 17:for(;L<14;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(E.nlen=257+(31&C),C>>>=5,L-=5,E.ndist=1+(31&C),C>>>=5,L-=5,E.ncode=4+(15&C),C>>>=4,L-=4,286<E.nlen||30<E.ndist){D.msg="too many length or distance symbols",E.mode=30;break}E.have=0,E.mode=18;case 18:for(;E.have<E.ncode;){for(;L<3;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}E.lens[ge[E.have++]]=7&C,C>>>=3,L-=3}for(;E.have<19;)E.lens[ge[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,ae={bits:E.lenbits},re=h(0,E.lens,0,19,E.lencode,0,E.work,ae),E.lenbits=ae.bits,re){D.msg="invalid code lengths set",E.mode=30;break}E.have=0,E.mode=19;case 19:for(;E.have<E.nlen+E.ndist;){for(;we=(M=E.lencode[C&(1<<E.lenbits)-1])>>>16&255,ke=65535&M,!((Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(ke<16)C>>>=Te,L-=Te,E.lens[E.have++]=ke;else{if(ke===16){for(U=Te+2;L<U;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(C>>>=Te,L-=Te,E.have===0){D.msg="invalid bit length repeat",E.mode=30;break}x=E.lens[E.have-1],se=3+(3&C),C>>>=2,L-=2}else if(ke===17){for(U=Te+3;L<U;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}L-=Te,x=0,se=3+(7&(C>>>=Te)),C>>>=3,L-=3}else{for(U=Te+7;L<U;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}L-=Te,x=0,se=11+(127&(C>>>=Te)),C>>>=7,L-=7}if(E.have+se>E.nlen+E.ndist){D.msg="invalid bit length repeat",E.mode=30;break}for(;se--;)E.lens[E.have++]=x}}if(E.mode===30)break;if(E.lens[256]===0){D.msg="invalid code -- missing end-of-block",E.mode=30;break}if(E.lenbits=9,ae={bits:E.lenbits},re=h(A,E.lens,0,E.nlen,E.lencode,0,E.work,ae),E.lenbits=ae.bits,re){D.msg="invalid literal/lengths set",E.mode=30;break}if(E.distbits=6,E.distcode=E.distdyn,ae={bits:E.distbits},re=h(w,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,ae),E.distbits=ae.bits,re){D.msg="invalid distances set",E.mode=30;break}if(E.mode=20,Y===6)break e;case 20:E.mode=21;case 21:if(6<=q&&258<=me){D.next_out=J,D.avail_out=me,D.next_in=j,D.avail_in=q,E.hold=C,E.bits=L,b(D,ne),J=D.next_out,I=D.output,me=D.avail_out,j=D.next_in,W=D.input,q=D.avail_in,C=E.hold,L=E.bits,E.mode===12&&(E.back=-1);break}for(E.back=0;we=(M=E.lencode[C&(1<<E.lenbits)-1])>>>16&255,ke=65535&M,!((Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(we&&(240&we)==0){for(ze=Te,bt=we,he=ke;we=(M=E.lencode[he+((C&(1<<ze+bt)-1)>>ze)])>>>16&255,ke=65535&M,!(ze+(Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}C>>>=ze,L-=ze,E.back+=ze}if(C>>>=Te,L-=Te,E.back+=Te,E.length=ke,we===0){E.mode=26;break}if(32&we){E.back=-1,E.mode=12;break}if(64&we){D.msg="invalid literal/length code",E.mode=30;break}E.extra=15&we,E.mode=22;case 22:if(E.extra){for(U=E.extra;L<U;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}E.length+=C&(1<<E.extra)-1,C>>>=E.extra,L-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=23;case 23:for(;we=(M=E.distcode[C&(1<<E.distbits)-1])>>>16&255,ke=65535&M,!((Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if((240&we)==0){for(ze=Te,bt=we,he=ke;we=(M=E.distcode[he+((C&(1<<ze+bt)-1)>>ze)])>>>16&255,ke=65535&M,!(ze+(Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}C>>>=ze,L-=ze,E.back+=ze}if(C>>>=Te,L-=Te,E.back+=Te,64&we){D.msg="invalid distance code",E.mode=30;break}E.offset=ke,E.extra=15&we,E.mode=24;case 24:if(E.extra){for(U=E.extra;L<U;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}E.offset+=C&(1<<E.extra)-1,C>>>=E.extra,L-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){D.msg="invalid distance too far back",E.mode=30;break}E.mode=25;case 25:if(me===0)break e;if(se=ne-me,E.offset>se){if((se=E.offset-se)>E.whave&&E.sane){D.msg="invalid distance too far back",E.mode=30;break}Ee=se>E.wnext?(se-=E.wnext,E.wsize-se):E.wnext-se,se>E.length&&(se=E.length),Ce=E.window}else Ce=I,Ee=J-E.offset,se=E.length;for(me<se&&(se=me),me-=se,E.length-=se;I[J++]=Ce[Ee++],--se;);E.length===0&&(E.mode=21);break;case 26:if(me===0)break e;I[J++]=E.length,me--,E.mode=21;break;case 27:if(E.wrap){for(;L<32;){if(q===0)break e;q--,C|=W[j++]<<L,L+=8}if(ne-=me,D.total_out+=ne,E.total+=ne,ne&&(D.adler=E.check=E.flags?p(E.check,I,ne,J-ne):m(E.check,I,ne,J-ne)),ne=me,(E.flags?C:R(C))!==E.check){D.msg="incorrect data check",E.mode=30;break}L=C=0}E.mode=28;case 28:if(E.wrap&&E.flags){for(;L<32;){if(q===0)break e;q--,C+=W[j++]<<L,L+=8}if(C!==(4294967295&E.total)){D.msg="incorrect length check",E.mode=30;break}L=C=0}E.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;case 32:default:return v}return D.next_out=J,D.avail_out=me,D.next_in=j,D.avail_in=q,E.hold=C,E.bits=L,(E.wsize||ne!==D.avail_out&&E.mode<30&&(E.mode<27||Y!==4))&&ce(D,D.output,D.next_out,ne-D.avail_out)?(E.mode=31,-4):(le-=D.avail_in,ne-=D.avail_out,D.total_in+=le,D.total_out+=ne,E.total+=ne,E.wrap&&ne&&(D.adler=E.check=E.flags?p(E.check,I,ne,D.next_out-ne):m(E.check,I,ne,D.next_out-ne)),D.data_type=E.bits+(E.last?64:0)+(E.mode===12?128:0)+(E.mode===20||E.mode===15?256:0),(le==0&&ne===0||Y===4)&&re===_&&(re=-5),re)},d.inflateEnd=function(D){if(!D||!D.state)return v;var Y=D.state;return Y.window&&(Y.window=null),D.state=null,_},d.inflateGetHeader=function(D,Y){var E;return D&&D.state?(2&(E=D.state).wrap)==0?v:((E.head=Y).done=!1,_):v},d.inflateSetDictionary=function(D,Y){var E,W=Y.length;return D&&D.state?(E=D.state).wrap!==0&&E.mode!==11?v:E.mode===11&&m(1,Y,W,0)!==E.check?-3:ce(D,Y,W,W)?(E.mode=31,-4):(E.havedict=1,_):v},d.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(s,u,d){var f=s("../utils/common"),m=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],b=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];u.exports=function(A,w,_,v,T,g,S,R){var O,z,B,k,H,P,G,$,oe,ce=R.bits,D=0,Y=0,E=0,W=0,I=0,j=0,J=0,q=0,me=0,C=0,L=null,le=0,ne=new f.Buf16(16),se=new f.Buf16(16),Ee=null,Ce=0;for(D=0;D<=15;D++)ne[D]=0;for(Y=0;Y<v;Y++)ne[w[_+Y]]++;for(I=ce,W=15;1<=W&&ne[W]===0;W--);if(W<I&&(I=W),W===0)return T[g++]=20971520,T[g++]=20971520,R.bits=1,0;for(E=1;E<W&&ne[E]===0;E++);for(I<E&&(I=E),D=q=1;D<=15;D++)if(q<<=1,(q-=ne[D])<0)return-1;if(0<q&&(A===0||W!==1))return-1;for(se[1]=0,D=1;D<15;D++)se[D+1]=se[D]+ne[D];for(Y=0;Y<v;Y++)w[_+Y]!==0&&(S[se[w[_+Y]]++]=Y);if(P=A===0?(L=Ee=S,19):A===1?(L=m,le-=257,Ee=p,Ce-=257,256):(L=b,Ee=h,-1),D=E,H=g,J=Y=C=0,B=-1,k=(me=1<<(j=I))-1,A===1&&852<me||A===2&&592<me)return 1;for(;;){for(G=D-J,oe=S[Y]<P?($=0,S[Y]):S[Y]>P?($=Ee[Ce+S[Y]],L[le+S[Y]]):($=96,0),O=1<<D-J,E=z=1<<j;T[H+(C>>J)+(z-=O)]=G<<24|$<<16|oe|0,z!==0;);for(O=1<<D-1;C&O;)O>>=1;if(O!==0?(C&=O-1,C+=O):C=0,Y++,--ne[D]==0){if(D===W)break;D=w[_+S[Y]]}if(I<D&&(C&k)!==B){for(J===0&&(J=I),H+=E,q=1<<(j=D-J);j+J<W&&!((q-=ne[j+J])<=0);)j++,q<<=1;if(me+=1<<j,A===1&&852<me||A===2&&592<me)return 1;T[B=C&k]=I<<24|j<<16|H-g|0}}return C!==0&&(T[H+C]=D-J<<24|64<<16|0),R.bits=I,0}},{"../utils/common":41}],51:[function(s,u,d){u.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(s,u,d){var f=s("../utils/common"),m=0,p=1;function b(M){for(var X=M.length;0<=--X;)M[X]=0}var h=0,A=29,w=256,_=w+1+A,v=30,T=19,g=2*_+1,S=15,R=16,O=7,z=256,B=16,k=17,H=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],$=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],oe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ce=new Array(2*(_+2));b(ce);var D=new Array(2*v);b(D);var Y=new Array(512);b(Y);var E=new Array(256);b(E);var W=new Array(A);b(W);var I,j,J,q=new Array(v);function me(M,X,ge,ye,ee){this.static_tree=M,this.extra_bits=X,this.extra_base=ge,this.elems=ye,this.max_length=ee,this.has_stree=M&&M.length}function C(M,X){this.dyn_tree=M,this.max_code=0,this.stat_desc=X}function L(M){return M<256?Y[M]:Y[256+(M>>>7)]}function le(M,X){M.pending_buf[M.pending++]=255&X,M.pending_buf[M.pending++]=X>>>8&255}function ne(M,X,ge){M.bi_valid>R-ge?(M.bi_buf|=X<<M.bi_valid&65535,le(M,M.bi_buf),M.bi_buf=X>>R-M.bi_valid,M.bi_valid+=ge-R):(M.bi_buf|=X<<M.bi_valid&65535,M.bi_valid+=ge)}function se(M,X,ge){ne(M,ge[2*X],ge[2*X+1])}function Ee(M,X){for(var ge=0;ge|=1&M,M>>>=1,ge<<=1,0<--X;);return ge>>>1}function Ce(M,X,ge){var ye,ee,be=new Array(S+1),Se=0;for(ye=1;ye<=S;ye++)be[ye]=Se=Se+ge[ye-1]<<1;for(ee=0;ee<=X;ee++){var xe=M[2*ee+1];xe!==0&&(M[2*ee]=Ee(be[xe]++,xe))}}function Te(M){var X;for(X=0;X<_;X++)M.dyn_ltree[2*X]=0;for(X=0;X<v;X++)M.dyn_dtree[2*X]=0;for(X=0;X<T;X++)M.bl_tree[2*X]=0;M.dyn_ltree[2*z]=1,M.opt_len=M.static_len=0,M.last_lit=M.matches=0}function we(M){8<M.bi_valid?le(M,M.bi_buf):0<M.bi_valid&&(M.pending_buf[M.pending++]=M.bi_buf),M.bi_buf=0,M.bi_valid=0}function ke(M,X,ge,ye){var ee=2*X,be=2*ge;return M[ee]<M[be]||M[ee]===M[be]&&ye[X]<=ye[ge]}function ze(M,X,ge){for(var ye=M.heap[ge],ee=ge<<1;ee<=M.heap_len&&(ee<M.heap_len&&ke(X,M.heap[ee+1],M.heap[ee],M.depth)&&ee++,!ke(X,ye,M.heap[ee],M.depth));)M.heap[ge]=M.heap[ee],ge=ee,ee<<=1;M.heap[ge]=ye}function bt(M,X,ge){var ye,ee,be,Se,xe=0;if(M.last_lit!==0)for(;ye=M.pending_buf[M.d_buf+2*xe]<<8|M.pending_buf[M.d_buf+2*xe+1],ee=M.pending_buf[M.l_buf+xe],xe++,ye===0?se(M,ee,X):(se(M,(be=E[ee])+w+1,X),(Se=P[be])!==0&&ne(M,ee-=W[be],Se),se(M,be=L(--ye),ge),(Se=G[be])!==0&&ne(M,ye-=q[be],Se)),xe<M.last_lit;);se(M,z,X)}function he(M,X){var ge,ye,ee,be=X.dyn_tree,Se=X.stat_desc.static_tree,xe=X.stat_desc.has_stree,Ne=X.stat_desc.elems,Xe=-1;for(M.heap_len=0,M.heap_max=g,ge=0;ge<Ne;ge++)be[2*ge]!==0?(M.heap[++M.heap_len]=Xe=ge,M.depth[ge]=0):be[2*ge+1]=0;for(;M.heap_len<2;)be[2*(ee=M.heap[++M.heap_len]=Xe<2?++Xe:0)]=1,M.depth[ee]=0,M.opt_len--,xe&&(M.static_len-=Se[2*ee+1]);for(X.max_code=Xe,ge=M.heap_len>>1;1<=ge;ge--)ze(M,be,ge);for(ee=Ne;ge=M.heap[1],M.heap[1]=M.heap[M.heap_len--],ze(M,be,1),ye=M.heap[1],M.heap[--M.heap_max]=ge,M.heap[--M.heap_max]=ye,be[2*ee]=be[2*ge]+be[2*ye],M.depth[ee]=(M.depth[ge]>=M.depth[ye]?M.depth[ge]:M.depth[ye])+1,be[2*ge+1]=be[2*ye+1]=ee,M.heap[1]=ee++,ze(M,be,1),2<=M.heap_len;);M.heap[--M.heap_max]=M.heap[1],(function(Ue,Nt){var Mn,Gt,pa,et,gt,Yt,it=Nt.dyn_tree,Ui=Nt.max_code,xl=Nt.stat_desc.static_tree,Sl=Nt.stat_desc.has_stree,za=Nt.stat_desc.extra_bits,ha=Nt.stat_desc.extra_base,dn=Nt.stat_desc.max_length,qt=0;for(et=0;et<=S;et++)Ue.bl_count[et]=0;for(it[2*Ue.heap[Ue.heap_max]+1]=0,Mn=Ue.heap_max+1;Mn<g;Mn++)dn<(et=it[2*it[2*(Gt=Ue.heap[Mn])+1]+1]+1)&&(et=dn,qt++),it[2*Gt+1]=et,Ui<Gt||(Ue.bl_count[et]++,gt=0,ha<=Gt&&(gt=za[Gt-ha]),Yt=it[2*Gt],Ue.opt_len+=Yt*(et+gt),Sl&&(Ue.static_len+=Yt*(xl[2*Gt+1]+gt)));if(qt!==0){do{for(et=dn-1;Ue.bl_count[et]===0;)et--;Ue.bl_count[et]--,Ue.bl_count[et+1]+=2,Ue.bl_count[dn]--,qt-=2}while(0<qt);for(et=dn;et!==0;et--)for(Gt=Ue.bl_count[et];Gt!==0;)Ui<(pa=Ue.heap[--Mn])||(it[2*pa+1]!==et&&(Ue.opt_len+=(et-it[2*pa+1])*it[2*pa],it[2*pa+1]=et),Gt--)}})(M,X),Ce(be,Xe,M.bl_count)}function x(M,X,ge){var ye,ee,be=-1,Se=X[1],xe=0,Ne=7,Xe=4;for(Se===0&&(Ne=138,Xe=3),X[2*(ge+1)+1]=65535,ye=0;ye<=ge;ye++)ee=Se,Se=X[2*(ye+1)+1],++xe<Ne&&ee===Se||(xe<Xe?M.bl_tree[2*ee]+=xe:ee!==0?(ee!==be&&M.bl_tree[2*ee]++,M.bl_tree[2*B]++):xe<=10?M.bl_tree[2*k]++:M.bl_tree[2*H]++,be=ee,Xe=(xe=0)===Se?(Ne=138,3):ee===Se?(Ne=6,3):(Ne=7,4))}function re(M,X,ge){var ye,ee,be=-1,Se=X[1],xe=0,Ne=7,Xe=4;for(Se===0&&(Ne=138,Xe=3),ye=0;ye<=ge;ye++)if(ee=Se,Se=X[2*(ye+1)+1],!(++xe<Ne&&ee===Se)){if(xe<Xe)for(;se(M,ee,M.bl_tree),--xe!=0;);else ee!==0?(ee!==be&&(se(M,ee,M.bl_tree),xe--),se(M,B,M.bl_tree),ne(M,xe-3,2)):xe<=10?(se(M,k,M.bl_tree),ne(M,xe-3,3)):(se(M,H,M.bl_tree),ne(M,xe-11,7));be=ee,Xe=(xe=0)===Se?(Ne=138,3):ee===Se?(Ne=6,3):(Ne=7,4)}}b(q);var ae=!1;function U(M,X,ge,ye){ne(M,(h<<1)+(ye?1:0),3),(function(ee,be,Se,xe){we(ee),le(ee,Se),le(ee,~Se),f.arraySet(ee.pending_buf,ee.window,be,Se,ee.pending),ee.pending+=Se})(M,X,ge)}d._tr_init=function(M){ae||((function(){var X,ge,ye,ee,be,Se=new Array(S+1);for(ee=ye=0;ee<A-1;ee++)for(W[ee]=ye,X=0;X<1<<P[ee];X++)E[ye++]=ee;for(E[ye-1]=ee,ee=be=0;ee<16;ee++)for(q[ee]=be,X=0;X<1<<G[ee];X++)Y[be++]=ee;for(be>>=7;ee<v;ee++)for(q[ee]=be<<7,X=0;X<1<<G[ee]-7;X++)Y[256+be++]=ee;for(ge=0;ge<=S;ge++)Se[ge]=0;for(X=0;X<=143;)ce[2*X+1]=8,X++,Se[8]++;for(;X<=255;)ce[2*X+1]=9,X++,Se[9]++;for(;X<=279;)ce[2*X+1]=7,X++,Se[7]++;for(;X<=287;)ce[2*X+1]=8,X++,Se[8]++;for(Ce(ce,_+1,Se),X=0;X<v;X++)D[2*X+1]=5,D[2*X]=Ee(X,5);I=new me(ce,P,w+1,_,S),j=new me(D,G,0,v,S),J=new me(new Array(0),$,0,T,O)})(),ae=!0),M.l_desc=new C(M.dyn_ltree,I),M.d_desc=new C(M.dyn_dtree,j),M.bl_desc=new C(M.bl_tree,J),M.bi_buf=0,M.bi_valid=0,Te(M)},d._tr_stored_block=U,d._tr_flush_block=function(M,X,ge,ye){var ee,be,Se=0;0<M.level?(M.strm.data_type===2&&(M.strm.data_type=(function(xe){var Ne,Xe=4093624447;for(Ne=0;Ne<=31;Ne++,Xe>>>=1)if(1&Xe&&xe.dyn_ltree[2*Ne]!==0)return m;if(xe.dyn_ltree[18]!==0||xe.dyn_ltree[20]!==0||xe.dyn_ltree[26]!==0)return p;for(Ne=32;Ne<w;Ne++)if(xe.dyn_ltree[2*Ne]!==0)return p;return m})(M)),he(M,M.l_desc),he(M,M.d_desc),Se=(function(xe){var Ne;for(x(xe,xe.dyn_ltree,xe.l_desc.max_code),x(xe,xe.dyn_dtree,xe.d_desc.max_code),he(xe,xe.bl_desc),Ne=T-1;3<=Ne&&xe.bl_tree[2*oe[Ne]+1]===0;Ne--);return xe.opt_len+=3*(Ne+1)+5+5+4,Ne})(M),ee=M.opt_len+3+7>>>3,(be=M.static_len+3+7>>>3)<=ee&&(ee=be)):ee=be=ge+5,ge+4<=ee&&X!==-1?U(M,X,ge,ye):M.strategy===4||be===ee?(ne(M,2+(ye?1:0),3),bt(M,ce,D)):(ne(M,4+(ye?1:0),3),(function(xe,Ne,Xe,Ue){var Nt;for(ne(xe,Ne-257,5),ne(xe,Xe-1,5),ne(xe,Ue-4,4),Nt=0;Nt<Ue;Nt++)ne(xe,xe.bl_tree[2*oe[Nt]+1],3);re(xe,xe.dyn_ltree,Ne-1),re(xe,xe.dyn_dtree,Xe-1)})(M,M.l_desc.max_code+1,M.d_desc.max_code+1,Se+1),bt(M,M.dyn_ltree,M.dyn_dtree)),Te(M),ye&&we(M)},d._tr_tally=function(M,X,ge){return M.pending_buf[M.d_buf+2*M.last_lit]=X>>>8&255,M.pending_buf[M.d_buf+2*M.last_lit+1]=255&X,M.pending_buf[M.l_buf+M.last_lit]=255&ge,M.last_lit++,X===0?M.dyn_ltree[2*ge]++:(M.matches++,X--,M.dyn_ltree[2*(E[ge]+w+1)]++,M.dyn_dtree[2*L(X)]++),M.last_lit===M.lit_bufsize-1},d._tr_align=function(M){ne(M,2,3),se(M,z,ce),(function(X){X.bi_valid===16?(le(X,X.bi_buf),X.bi_buf=0,X.bi_valid=0):8<=X.bi_valid&&(X.pending_buf[X.pending++]=255&X.bi_buf,X.bi_buf>>=8,X.bi_valid-=8)})(M)}},{"../utils/common":41}],53:[function(s,u,d){u.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(s,u,d){(function(f){(function(m,p){if(!m.setImmediate){var b,h,A,w,_=1,v={},T=!1,g=m.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(m);S=S&&S.setTimeout?S:m,b={}.toString.call(m.process)==="[object process]"?function(B){process.nextTick(function(){O(B)})}:(function(){if(m.postMessage&&!m.importScripts){var B=!0,k=m.onmessage;return m.onmessage=function(){B=!1},m.postMessage("","*"),m.onmessage=k,B}})()?(w="setImmediate$"+Math.random()+"$",m.addEventListener?m.addEventListener("message",z,!1):m.attachEvent("onmessage",z),function(B){m.postMessage(w+B,"*")}):m.MessageChannel?((A=new MessageChannel).port1.onmessage=function(B){O(B.data)},function(B){A.port2.postMessage(B)}):g&&"onreadystatechange"in g.createElement("script")?(h=g.documentElement,function(B){var k=g.createElement("script");k.onreadystatechange=function(){O(B),k.onreadystatechange=null,h.removeChild(k),k=null},h.appendChild(k)}):function(B){setTimeout(O,0,B)},S.setImmediate=function(B){typeof B!="function"&&(B=new Function(""+B));for(var k=new Array(arguments.length-1),H=0;H<k.length;H++)k[H]=arguments[H+1];var P={callback:B,args:k};return v[_]=P,b(_),_++},S.clearImmediate=R}function R(B){delete v[B]}function O(B){if(T)setTimeout(O,0,B);else{var k=v[B];if(k){T=!0;try{(function(H){var P=H.callback,G=H.args;switch(G.length){case 0:P();break;case 1:P(G[0]);break;case 2:P(G[0],G[1]);break;case 3:P(G[0],G[1],G[2]);break;default:P.apply(p,G)}})(k)}finally{R(B),T=!1}}}}function z(B){B.source===m&&typeof B.data=="string"&&B.data.indexOf(w)===0&&O(+B.data.slice(w.length))}})(typeof self>"u"?f===void 0?this:f:self)}).call(this,typeof Ks<"u"?Ks:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Gc)),Gc.exports}var Mb=Lb();const zb=ou(Mb),Ub=({logs:c,currentRound:l,currentPaperVersion:s,filePrefix:u,dataAlert:d,dataFileName:f,dataFileContent:m})=>{const[p,b]=fe.useState([]),[h,A]=fe.useState(null),[w,_]=fe.useState(!1),[v,T]=fe.useState(!1),[g,S]=fe.useState(null),[R,O]=fe.useState(null),[z,B]=fe.useState(!1),[k,H]=fe.useState(!1),P=async()=>{_(!0),A(null);const Y=da(s,"icis_paper"),E=Ri(l),W=pu();if(!Y){A("Missing paper file to save"),_(!1);return}try{const I=u?`${u}_`:"",j=new zb,J=[],q=bu();q&&(j.file(q.filename,q.blob),J.push(q.filename),console.log(`[SaveAll] Added PDF: ${q.filename}`));const me=`${I}icis_paper_v${s}_FINAL.tex`;j.file(me,Y),J.push(me),console.log(`[SaveAll] Added TeX: ${me}`);const C=Tm();if(C){const ke=`${I}${C.filename}`;j.file(ke,C.content),J.push(ke),console.log(`[SaveAll] Added BibTeX: ${ke}`)}const L=xm();if(L.length>0){console.log(`[SaveAll] Adding ${L.length} PNG figures...`);const ke=await Sm();for(const ze of ke)j.file(ze.filename,ze.blob),J.push(ze.filename);console.log(`[SaveAll] Added ${ke.length} PNG figures`)}if(f&&m&&(j.file(f,m),J.push(f),console.log(`[SaveAll] Added data file: ${f}`)),E){const ke=`${I}feedback_v${l}.json`;j.file(ke,JSON.stringify(E,null,2)),J.push(ke)}if(W&&W.length>0)for(const ke of W){const ze=`${I}oversight_v${ke.version||1}.json`;j.file(ze,JSON.stringify(ke,null,2)),J.push(ze)}const le=Rm();if(le){const ke=`${I}chart_data${le.isSynthetic?"_synthetic":""}.json`;j.file(ke,le.chartDataJson),J.push(ke),console.log(`[SaveAll] Added chart data: ${ke}`);const ze=`${I}visualization_code.py`;j.file(ze,le.pythonCode),J.push(ze),console.log(`[SaveAll] Added Python code: ${ze}`)}const ne=Cm();if(ne){const ke=`${I}datatable.csv`;j.file(ke,ne),J.push(ke),console.log(`[SaveAll] Added data table CSV: ${ke}`)}const se=await j.generateAsync({type:"blob"}),Ee=`${I}icis_submission_v${s}.zip`,Ce=URL.createObjectURL(se),Te=document.createElement("a");Te.href=Ce,Te.download=Ee,document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),URL.revokeObjectURL(Ce),console.log(`[SaveAll] Downloaded ${Ee} with ${J.length} files`),b([Ee,...J]);const we=await ym();we.success?console.log("[SaveAll] Data file cleaned up from cloud storage"):console.warn("[SaveAll] Failed to clean up data file:",we.error)}catch(I){console.error("[SaveAll] Error:",I),A(I instanceof Error?I.message:"Failed to create zip file")}_(!1)},G=async()=>{T(!0),S(null),A(null);const Y=da(s,"icis_paper");if(!Y){A("No paper content available to compile"),T(!1);return}const W=`${u?`${u}_`:""}icis_paper_v${s}_FINAL.tex`,I=Em();console.log(`[Compile] Compiling with ${I.length} PNG figures`);const j=await um(W,Y,I.length>0?I:void 0);S(j),j.success||A(j.error||"PDF compilation failed"),T(!1)},$=()=>{g!=null&&g.pdfFilename&&fm(g.pdfFilename)},oe=async()=>{B(!0),H(!1);const E=`${u?`${u}_`:""}icis_paper_v${s}_FINAL.tex`,W=await pm(E);O(W),B(!1)},ce=()=>{R!=null&&R.fullUrl&&(navigator.clipboard.writeText(R.fullUrl),H(!0),setTimeout(()=>H(!1),3e3))},D=()=>{R!=null&&R.fullUrl&&hm(R.fullUrl)};return i.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[i.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:i.jsx(uu,{size:40})}),i.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),i.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",l," revision cycle(s)."]}),i.jsx(ki,{logs:c,height:"h-32"}),i.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Paper compiled (v",s,")"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," All sections verified"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Submission package generated"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),i.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[i.jsx("button",{onClick:G,disabled:v||w,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:v?i.jsxs(i.Fragment,{children:[i.jsx(kh,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Oi,{size:18}),"Compile LaTeX to PDF"]})}),(g==null?void 0:g.success)&&i.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"text-left",children:[i.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),i.jsxs("p",{className:"text-xs text-emerald-600",children:[g.pdfFilename," (",Math.round((g.fileSize||0)/1024)," KB)",g.pageCount&&` • ${g.pageCount} pages`]})]}),i.jsxs("button",{onClick:$,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[i.jsx(dl,{size:16}),"Download"]})]})}),(g==null?void 0:g.success)&&(g==null?void 0:g.exceedsLimit)&&i.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[i.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),i.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",g.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),d&&i.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[i.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),i.jsx("p",{className:"text-xs text-orange-700 mt-1",children:d})]}),(g==null?void 0:g.success)&&i.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(Zc,{size:18,className:"text-blue-600"}),i.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),i.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),R!=null&&R.success?i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:R.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),i.jsxs("button",{onClick:ce,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[i.jsx(Y0,{size:14}),k?"Copied!":"Copy"]})]}),i.jsx("div",{className:"flex gap-2",children:i.jsxs("button",{onClick:D,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[i.jsx(Ai,{size:14}),"Open Preview"]})}),i.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",R.expiresIn]})]}):i.jsx("button",{onClick:oe,disabled:z,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:z?i.jsxs(i.Fragment,{children:[i.jsx(kh,{size:16,className:"animate-spin"}),"Creating Link..."]}):i.jsxs(i.Fragment,{children:[i.jsx(yv,{size:16}),"Create Shareable Link"]})})]}),i.jsxs("button",{onClick:P,disabled:w||v,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[i.jsx(jv,{size:18,className:w?"animate-pulse":""}),w?"Creating ZIP...":"Download All Files (.zip)"]}),i.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads ZIP with PDF, .tex, .bib, PNG figures, chart data JSON, Python code, and data files"}),p.length>0&&i.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[i.jsxs("p",{className:"font-medium mb-1",children:["Downloaded: ",p[0]]}),i.jsxs("p",{className:"text-xs",children:["Contains ",p.length-1," files: ",p.slice(1).map(Y=>Y.split(/[/\\]/).pop()).join(", ")]})]}),h&&i.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[i.jsx("p",{className:"font-medium",children:"Error:"}),i.jsx("p",{className:"text-xs",children:h}),(g==null?void 0:g.log)&&i.jsxs("details",{className:"mt-2 text-left",children:[i.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),i.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:g.log})]})]}),i.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},Fb=({state:c,isProcessing:l,onAction:s,uploadedFiles:u,onFileChange:d,detectionStatus:f,onRefreshDetection:m,onStageAbort:p,onStageRestart:b,filePrefix:h,dataFileName:A,dataFileContent:w,participantEmail:_,onNewInterview:v,onPaperToInterview:T,onVenueChange:g,onSourceTypeChange:S})=>{const[R,O]=fe.useState(),z=k=>{O(k),s("PROCEED_TO_SUPERVISOR")},B=()=>{switch(c.currentStage){case ve.SETUP:const k=c.rounds.length>0||c.currentPaperVersion>0||c.paperContent!=="";return i.jsx(wb,{logs:c.logs,stageStatus:c.stages[ve.SETUP],isProcessing:l,uploadedFiles:u,onFileChange:d,onAction:s,detectionStatus:f,onRefreshDetection:m,hasExistingCase:k,onNewInterview:v,onPaperToInterview:T,onVenueChange:g,onSourceTypeChange:S});case ve.BUILDER:return i.jsx(Ab,{logs:c.logs,isProcessing:l,isPartialPaper:c.isPartialPaper,currentBuilderStep:c.currentBuilderStep,paperContent:c.paperContent,onAbort:()=>p==null?void 0:p(ve.BUILDER),onRestart:()=>b==null?void 0:b(ve.BUILDER)});case ve.REVIEWER:const H=c.stages[ve.REVIEWER]===Oe.COMPLETED;return i.jsx(Ob,{logs:c.logs,isProcessing:l,currentRound:c.currentRound,isComplete:H,onProceedToSupervisor:z,onAbort:()=>p==null?void 0:p(ve.REVIEWER),onRestart:()=>b==null?void 0:b(ve.REVIEWER),filePrefix:h,participantEmail:_});case ve.SUPERVISOR:const P=sl(c.currentRound),G=pu();return i.jsx(kb,{currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,lastFeedback:c.lastFeedback,isProcessing:l,oversightData:P,allOversight:G,onAction:s,reviewOutputFiles:R});case ve.REVISER:return i.jsx(jb,{logs:c.logs,isProcessing:l,currentPaperVersion:c.currentPaperVersion,paperContent:c.paperContent,onAbort:()=>p==null?void 0:p(ve.REVISER),onRestart:()=>b==null?void 0:b(ve.REVISER)});case ve.FINALIZE:return i.jsx(Ub,{logs:c.logs,currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,filePrefix:h,dataAlert:c.dataAlert,dataFileName:A,dataFileContent:w});default:return i.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:i.jsxs("p",{children:["Unknown stage: ",c.currentStage]})})}};return i.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:B()})};function yl(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://asd-iddo-droris-projects.vercel.app":""}function vl(){return{"Content-Type":"application/json"}}async function Bb(c){const l=yl(),s=new URLSearchParams,u=`${l}/api/participants${s.toString()?`?${s}`:""}`,f=await(await fetch(u,{headers:vl()})).json();if(!f.success)throw new Error(f.error||"Failed to fetch participants");return f.participants}async function Ph(c){const l=yl(),u=await(await fetch(`${l}/api/participants`,{method:"PATCH",headers:vl(),body:JSON.stringify(c)})).json();if(!u.success)throw new Error(u.error||"Failed to update participant");return u.participant}async function Pb(c){const l=yl(),u=await(await fetch(`${l}/api/participants`,{method:"DELETE",headers:vl(),body:JSON.stringify({email:c})})).json();if(!u.success)throw new Error(u.error||"Failed to delete participant")}async function $b(){const c=yl(),s=await(await fetch(`${c}/api/research-stats`,{headers:vl()})).json();if(!s.success)throw new Error(s.error||"Failed to fetch research stats");return s.stats}const nl=({label:c,value:l,icon:s,color:u,subtext:d})=>i.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm text-slate-500",children:c}),i.jsx("p",{className:`text-2xl font-bold ${u}`,children:l}),d&&i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:d})]}),i.jsx("div",{className:`p-2 rounded-lg ${u.replace("text-","bg-").replace("-600","-100")}`,children:s})]})}),Vb=({label:c,count:l,total:s,color:u})=>{const d=s>0?l/s*100:0;return i.jsxs("div",{className:"mb-3",children:[i.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[i.jsx("span",{className:"text-slate-600",children:c}),i.jsx("span",{className:"text-slate-800 font-medium",children:l})]}),i.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:i.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${u}`,style:{width:`${Math.max(d,2)}%`}})})]})},Hb=({onViewParticipants:c})=>{const[l,s]=fe.useState(null),[u,d]=fe.useState(!0),[f,m]=fe.useState(null),p=async()=>{d(!0),m(null);try{const h=await $b();s(h)}catch(h){m(h instanceof Error?h.message:"Failed to load stats")}finally{d(!1)}};if(fe.useEffect(()=>{p()},[]),u)return i.jsx("div",{className:"flex items-center justify-center h-64",children:i.jsx(cn,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(f)return i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[i.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[i.jsx(Jc,{size:20}),i.jsxs("span",{children:["Error: ",f]})]}),i.jsx("button",{onClick:p,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!l)return null;const b=[{label:"1. Registered",count:l.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:l.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:l.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:l.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:l.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:l.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:l.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:l.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:l.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:l.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:l.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:l.funnel.dropped_out||0,color:"bg-red-500"}];return i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),i.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),i.jsxs("button",{onClick:p,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[i.jsx(cn,{size:16}),"Refresh"]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[i.jsx(nl,{label:"Total Participants",value:l.total,icon:i.jsx(pl,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${l.active} active`}),i.jsx(nl,{label:"Surveys Sent",value:l.surveysSent,icon:i.jsx(uu,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),i.jsx(nl,{label:"Surveys Completed",value:l.surveysCompleted,icon:i.jsx(Wc,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),i.jsx(nl,{label:"Completion Rate",value:`${l.completionRate}%`,icon:i.jsx(em,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),l.alerts&&l.alerts.length>0&&i.jsx("div",{className:"space-y-2",children:l.alerts.map((h,A)=>i.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${h.type==="stuck"?"bg-amber-50 border-amber-200":h.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[i.jsx(Jc,{size:18,className:h.type==="stuck"?"text-amber-500":h.type==="pending_survey"?"text-blue-500":"text-slate-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-sm text-slate-800",children:h.message}),i.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[h.participantIds.slice(0,3).join(", "),h.participantIds.length>3&&` +${h.participantIds.length-3} more`]})]})]},A))}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx(Qc,{size:20,className:"text-slate-500"}),i.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),i.jsx("div",{className:"space-y-1",children:b.map(h=>i.jsx(Vb,{label:h.label,count:h.count,total:l.total,color:h.color},h.label))})]}),i.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx(S0,{size:20,className:"text-slate-500"}),i.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),i.jsx("span",{className:"text-lg font-bold text-emerald-600",children:l.groups.group1.total})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Interview"}),i.jsxs("p",{className:"font-semibold text-emerald-700",children:[l.groups.group1.interviewRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Completion"}),i.jsxs("p",{className:"font-semibold text-emerald-700",children:[l.groups.group1.completionRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),i.jsxs("p",{className:"font-semibold text-red-600",children:[l.groups.group1.dropRate,"%"]})]})]})]}),i.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),i.jsx("span",{className:"text-lg font-bold text-blue-600",children:l.groups.group2.total})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Interview"}),i.jsxs("p",{className:"font-semibold text-blue-700",children:[l.groups.group2.interviewRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Completion"}),i.jsxs("p",{className:"font-semibold text-blue-700",children:[l.groups.group2.completionRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),i.jsxs("p",{className:"font-semibold text-red-600",children:[l.groups.group2.dropRate,"%"]})]})]})]}),l.groups.unassigned>0&&i.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:i.jsxs("span",{className:"text-sm text-slate-600",children:[l.groups.unassigned," unassigned participant(s)"]})})]})]})]}),i.jsx("div",{className:"text-center",children:i.jsx("button",{onClick:c,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},au={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Nm={1:"With Oversight",2:"Control (No Oversight)"},Gb=({status:c})=>{const l={registered:"bg-gray-100 text-gray-700",interview_completed:"bg-blue-100 text-blue-700",setup_completed:"bg-sky-100 text-sky-700",builder_completed:"bg-amber-100 text-amber-700",reviewer_completed:"bg-orange-100 text-orange-700",supervisor_completed:"bg-purple-100 text-purple-700",reviser_completed:"bg-indigo-100 text-indigo-700",finalize_completed:"bg-teal-100 text-teal-700",paper_sent:"bg-cyan-100 text-cyan-700",survey_sent:"bg-violet-100 text-violet-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${l[c]}`,children:au[c]})},Yb=({groupId:c})=>{if(c===null)return i.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const l=c===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${l}`,children:Nm[c]})},qb=({onBack:c})=>{const[l,s]=fe.useState([]),[u,d]=fe.useState(!0),[f,m]=fe.useState(null),[p,b]=fe.useState(""),[h,A]=fe.useState(""),[w,_]=fe.useState("all"),[v,T]=fe.useState(null),[g,S]=fe.useState(null),R=async()=>{d(!0),m(null);try{const G=await Bb();s(G)}catch(G){m(G instanceof Error?G.message:"Failed to load participants")}finally{d(!1)}};fe.useEffect(()=>{R()},[]);const O=l.filter(G=>{var D;const $=!p||G.email.toLowerCase().includes(p.toLowerCase())||((D=G.name)==null?void 0:D.toLowerCase().includes(p.toLowerCase())),oe=!h||G.status===h,ce=w==="all"||G.group_id===w;return $&&oe&&ce}),z=async(G,$)=>{try{await Ph({email:G,status:$}),await R(),T(null)}catch(oe){alert(oe instanceof Error?oe.message:"Failed to update status")}},B=async(G,$)=>{try{await Ph({email:G,group_id:$}),await R(),T(null)}catch(oe){alert(oe instanceof Error?oe.message:"Failed to update group")}},k=async G=>{if(confirm(`Are you sure you want to delete participant ${G}?`))try{await Pb(G),await R(),T(null)}catch($){alert($ instanceof Error?$.message:"Failed to delete participant")}},H=G=>new Date(G).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),P=["registered","interview_completed","setup_completed","builder_completed","reviewer_completed","supervisor_completed","reviser_completed","finalize_completed","paper_sent","survey_sent","survey_completed","dropped_out"];return i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("button",{onClick:c,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:i.jsx(T0,{size:20,className:"text-slate-600"})}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),i.jsxs("p",{className:"text-slate-500 text-sm",children:[O.length," of ",l.length," participants"]})]})]}),i.jsxs("button",{onClick:R,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[i.jsx(cn,{size:16,className:u?"animate-spin":""}),"Refresh"]})]}),i.jsxs("div",{className:"flex flex-wrap gap-3",children:[i.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[i.jsx(fl,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),i.jsx("input",{type:"text",placeholder:"Search by name or email...",value:p,onChange:G=>b(G.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("select",{value:h,onChange:G=>A(G.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[i.jsx("option",{value:"",children:"All Statuses"}),P.map(G=>i.jsx("option",{value:G,children:au[G]},G))]}),i.jsx(ul,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("select",{value:w===null?"null":w==="all"?"all":w,onChange:G=>{const $=G.target.value;_($==="all"?"all":$==="null"?null:parseInt($))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[i.jsx("option",{value:"all",children:"All Groups"}),i.jsx("option",{value:"1",children:"Group 1: With Oversight"}),i.jsx("option",{value:"2",children:"Group 2: Control"}),i.jsx("option",{value:"null",children:"Unassigned"})]}),i.jsx(ul,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),f&&i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:f}),i.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm",children:[i.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:i.jsxs("tr",{children:[i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),i.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),i.jsx("tbody",{children:u?i.jsx("tr",{children:i.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[i.jsx(cn,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):O.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):O.map(G=>i.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[i.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:G.name||i.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),i.jsx("td",{className:"px-4 py-3 text-slate-600",children:G.email}),i.jsx("td",{className:"px-4 py-3",children:i.jsx(Gb,{status:G.status})}),i.jsx("td",{className:"px-4 py-3",children:i.jsx(Yb,{groupId:G.group_id})}),i.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:H(G.registered_at)}),i.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:H(G.updated_at)}),i.jsxs("td",{className:"px-4 py-3 text-right relative",children:[i.jsx("button",{onClick:()=>T(v===G.id?null:G.id),className:"p-1 rounded hover:bg-slate-100",children:i.jsx(Kh,{size:16,className:"text-slate-400"})}),v===G.id&&i.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[i.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),P.map($=>i.jsxs("button",{onClick:()=>z(G.email,$),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.status===$?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.status===$&&i.jsx(zt,{size:12}),i.jsx("span",{className:G.status===$?"":"ml-4",children:au[$]})]},$)),i.jsx("div",{className:"border-t border-slate-100 my-1"}),i.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map($=>i.jsxs("button",{onClick:()=>B(G.email,$),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.group_id===$?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.group_id===$&&i.jsx(zt,{size:12}),i.jsx("span",{className:G.group_id===$?"":"ml-4",children:Nm[$]})]},$)),i.jsx("div",{className:"border-t border-slate-100 my-1"}),i.jsxs("button",{onClick:()=>k(G.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[i.jsx($v,{size:14}),"Delete Participant"]})]})]})]},G.id))})]})})})]})},Xb=({onClose:c})=>{const[l,s]=fe.useState("dashboard");return i.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:l==="dashboard"?i.jsx(Hb,{onViewParticipants:()=>s("participants")}):i.jsx(qb,{onBack:()=>s("dashboard")})})},Qb="modulepreload",Wb=function(c){return"/asd/"+c},$h={},ca=function(l,s,u){let d=Promise.resolve();if(s&&s.length>0){let m=function(h){return Promise.all(h.map(A=>Promise.resolve(A).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),b=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));d=m(s.map(h=>{if(h=Wb(h),h in $h)return;$h[h]=!0;const A=h.endsWith(".css"),w=A?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${w}`))return;const _=document.createElement("link");if(_.rel=A?"stylesheet":Qb,A||(_.as="script"),_.crossOrigin="",_.href=h,b&&_.setAttribute("nonce",b),document.head.appendChild(_),A)return new Promise((v,T)=>{_.addEventListener("load",v),_.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function f(m){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=m,window.dispatchEvent(p),!p.defaultPrevented)throw m}return d.then(m=>{for(const p of m||[])p.status==="rejected"&&f(p.reason);return l().catch(f)})};let Zb="icis";function Kb(){return Zb}const Jb=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
\r
Verify that the following files exist in directory "icis" or its subdirectories {ICIS_PATH}\\Data, {ICIS_PATH}\\Code, {ICIS_PATH}\\Templates:\r
- 'icisTemplate.txt' - template for writing a 16-page paper\r
- 'INTERVIEW_{participantId}_{timestamp}.txt' - interview transcript\r
- 'Data_file_{participantId}.*' - [Optional] data supplied by participant\r
\r
**CALIBRATION:** Quality standards and structural patterns from 11 ICIS 2024 exemplar papers are embedded in APPENDIX F of this document. Use these patterns to calibrate paper generation.\r
\r
# For running Python: Use 'py' on Windows, 'python3' on Linux/Mac\r
---\r
\r
## STEP 0: EXTRACT PARTICIPANT ID (Execute First)\r
\r
**Before any other step, extract the participantId from the interview filename:**\r
\r
1. Locate interview file: \`INTERVIEW_*.txt\`\r
2. Parse filename format: \`INTERVIEW_{participantId}_{timestamp}.txt\`\r
3. Extract {participantId} - the portion between first underscore and last underscore before timestamp\r
   - Example: \`INTERVIEW_maayan_university_edu_20241115_091230.txt\`\r
   - participantId = \`maayan_university_edu\`\r
4. Store this ID for use in ALL output file names throughout this workflow\r
\r
**All output files MUST include {participantId} in their names:**\r
- \`icis_paper_{participantId}_v{N}.tex\` / \`.pdf\`\r
- \`feedback_{participantId}_v{N}.txt\`\r
- \`oversight_{participantId}_v{N}.txt\`\r
- \`data_assessment_{participantId}.txt\`\r
- \`research_metadata_{participantId}.json\`\r
\r
---\r
\r
Below are 9 steps (1-9) to execute consecutively. Step 2 is divided into Steps 2a-2e for different research types. Execute only the appropriate one based on STEP 1, then proceed with remaining steps.\r
\r
**ALL STEPS:** Follow Universal Research Rules (see Appendix A at end of this file)\r
---\r
\r
## STEP 1: RESEARCH INTERVIEW ANALYSIS AND CONCEPT DEVELOPMENT\r
\r
If the INTERVIEW* transcript is not in English, translate it.\r
\r
Analyze INTERVIEW* to extract core research vision:\r
\r
1. **Research Domain:** Problem, limitations, insights, applications, methods mentioned\r
2. **Innovation Focus:** Research gap, research type, unique approach, challenges\r
3. **Theoretical Basis:** Theories/frameworks to employ (critical for IS research!)\r
4. **Implementation:** Datasets, resources, metrics, constraints\r
5. **Impact:** Applications, field advancement, future directions\r
6. **Initial References:** 1-3 references supplied in the interview\r
\r
DELIVERABLE: Comprehensive research outline including:\r
- Problem statement\r
- Research approach\r
- Theoretical basis and hypotheses\r
- Contributions (as list)\r
- Implementation plan\r
- Evaluation strategy (metrics and protocols for assessing results)\r
- **RESEARCH TYPE** (exactly one of): "Simulation & Computational Modeling" OR "Analytical & Theoretical Modeling (with or without data)" OR "Laboratory & field experiments" OR "Survey research"\r
- Initial references (1-3 from interview)\r
- **Needs mathematical formulation:** Yes/No (indicate if novel algorithms, proofs, or computational models are needed - this determines whether Step 3 executes for experimental/survey research)\r
- **Data collection planned:** Yes/No (indicate if interview mentions upcoming data collection, IRB approval, or recruitment plans - this affects paper type for 2D/2E research)\r
\r
---\r
\r
## STEP 1.5: DATA FILE ASSESSMENT\r
\r
**Execute this step to determine data availability, paper type, and strategy.**\r
\r
### A) Check for Data Files\r
\r
Use Glob to check for data files (using participantId from STEP 0):\r
\`\`\`\r
Glob: Data_file_{participantId}*       # Real/complete data\r
Glob: Example_data_{participantId}*    # Example/pilot data (NEW)\r
Glob: Data/*\r
\`\`\`\r
\r
Document results:\r
- ✅ **Data_file found:** [location and format] → Proceed with FULL paper\r
- ✅ **Example_data found:** [location and format] → May produce PARTIAL paper with demo\r
- ❌ **No data files:** Proceed based on research type and data collection plans\r
\r
### B) If Data_file (real data) exists, assess format and contents:\r
\r
1. **Determine format:**\r
   - CSV/TSV (.csv, .tsv)\r
   - Excel (.xlsx, .xls)\r
   - JSON (.json)\r
   - MATLAB (.mat)\r
   - Text (.txt)\r
\r
2. **Read and document:**\r
   - Number of observations (observationCount)\r
   - Variables/columns (variables)\r
   - Data types per variable (variableTypes)\r
   - Count of missing values (missingValueCount)\r
   - Any obvious issues or quality concerns (dataIssues)\r
\r
3. **Save assessment:** Create Code/data_assessment_{participantId}.txt with above fields\r
\r
### B2) If Example_data (pilot/sample data) exists:\r
\r
Example data is used to demonstrate methodology without claiming actual results:\r
- Typically 5-20 observations showing planned variable structure\r
- Used to illustrate analysis approach, NOT for actual findings\r
- All outputs must be labeled "(Illustrative - Example Data, N=X)"\r
\r
### C) Set Data Strategy and Paper Type\r
\r
**PAPER TYPES:**\r
| Paper Type | Pages | When Used |\r
|------------|-------|-----------|\r
| FULL | 14-16 | Real data exists, OR synthetic data generated |\r
| PARTIAL_NO_EXAMPLES | 8-10 | Data planned but no examples available |\r
| PARTIAL_WITH_EXAMPLES | 10-12 | Data planned + example data for demo |\r
\r
**For RESEARCH TYPE 2D (Laboratory & Field Experiments):**\r
- ✅ Data_file exists → **FULL paper** with empirical results\r
- ❌ No Data_file + Example_data exists + Data planned → **PARTIAL_WITH_EXAMPLES** (methodology demo)\r
- ❌ No Data_file + No Example_data + Data planned → **PARTIAL_NO_EXAMPLES** (no Results section)\r
- ❌ No Data_file + No planned data collection → **FULL paper** with synthetic data\r
\r
**For RESEARCH TYPE 2E (Survey Research):**\r
- ✅ Data_file exists → **FULL paper** with empirical results\r
- ❌ No Data_file + Example_data exists + Data planned → **PARTIAL_WITH_EXAMPLES** (methodology demo)\r
- ❌ No Data_file + No Example_data + Data planned → **PARTIAL_NO_EXAMPLES** (no Results section)\r
- ❌ No Data_file + No planned data collection → **FULL paper** with synthetic data\r
\r
**For RESEARCH TYPE 2A (Simulation & Computational Modeling):**\r
- ✅ Data_file exists → **FULL paper** - use for calibration/validation + synthetic for runs\r
- ❌ No Data_file → **FULL paper** - generate synthetic data (simulations always produce results)\r
\r
**For RESEARCH TYPE 2B (Analytical & Theoretical Modeling):**\r
- ✅ Data_file exists → **FULL paper** - use for empirical validation of predictions\r
- ❌ No Data_file → **FULL paper** - theoretical with propositions and numerical examples\r
\r
**PARTIAL PAPER CHARACTERISTICS:**\r
- **PARTIAL_NO_EXAMPLES (8-10 pages):** No Results section; Methodology describes planned approach\r
- **PARTIAL_WITH_EXAMPLES (10-12 pages):** No Results section; Methodology includes analysis demonstration on example data\r
\r
### D) File Organization\r
\r
\`\`\`\r
{ICIS_PATH}\\\r
├── Data_file_{participantId}.csv (or other format) [IF PROVIDED by participant]\r
├── Data/\r
│   ├── cleaned_data_{participantId}.csv [Preprocessed real data, if Data_file provided]\r
│   ├── synthetic_data_{participantId}.csv [Generated data for simulations/augmentation]\r
│   └── data_assessment_{participantId}.txt [Documentation]\r
├── Code/\r
│   ├── data_preprocessing.py [IF real data exists]\r
│   ├── data_generation.py [IF synthetic data needed]\r
│   └── data_loader.py [Load data for experiments]\r
\`\`\`\r
\r
**DELIVERABLE:**\r
- **Paper type determined:** FULL, PARTIAL_NO_EXAMPLES, or PARTIAL_WITH_EXAMPLES\r
- Data strategy documented (real data, synthetic data, or pending)\r
- Example data assessment if applicable\r
- Data generation approach if no Data_file provided\r
\r
---\r
\r
## STEP 2: PLAN ACCORDING TO RESEARCH TYPE\r
\r
**CALIBRATION:** Refer to APPENDIX F (ICIS Paper Calibration Guide) for quality standards, structural patterns, and methodology-specific guidance extracted from 11 exemplar ICIS 2024 papers. Use these patterns to ensure paper meets conference standards.\r
\r
According to research type from STEP 1, follow appropriate sub-step:\r
\r
---\r
\r
### STEP 2A) Simulation & Computational Modeling\r
\r
**Research Rules:** See Appendix A (emphasis: synthetic data labeling, validation)\r
\r
**DATA STRATEGY:**\r
\r
**IF Data_file EXISTS:**\r
- Use real data for model calibration and validation\r
- Generate synthetic data for simulation runs and sensitivity analyses\r
- Document both data sources clearly in paper\r
- Label synthetic data generation method\r
\r
**IF Data_file DOES NOT EXIST:**\r
- Generate synthetic data based on literature and theory\r
- Cite sources for parameter values and distributions\r
- Clearly label all data as synthetic\r
- Document generation method thoroughly\r
\r
**Both cases proceed with FULL PAPER (all steps 1-9)**\r
\r
**FRAMEWORK:**\r
\r
1. Define research question and objectives\r
2. Choose simulation approach: ABM (heterogeneity), DES (process flows), or SD (feedback loops)\r
3. Develop conceptual model, set assumptions, align with IS theory\r
4. Identify data sources (empirical/theoretical/expert), justify, prepare calibration\r
5. Design experiments (factors, scenarios, replications)\r
6. Verify and validate model (ensure intended behavior, real-world reflection)\r
7. Analyze results (statistics, IS theory context, visualizations, limitations)\r
\r
**Best Practices:**\r
- Align model with goals, develop iteratively, validate frequently\r
- Document and question assumptions/parameters, link to theory, ensure reproducibility\r
- Use graphics\r
- Examine rigor of computational modeling\r
- Examine validity and robustness of results\r
- Discuss theoretical insights from findings\r
\r
**Tools:** NetLogo, Mesa, AnyLogic (ABM); Simul8, Arena, SimPy (DES); Vensim, Stella, PySD (SD)\r
\r
**Quality Standards:** See Appendix C.1\r
**References:** See Appendix E.1\r
---\r
\r
### STEP 2B) Analytical & Theoretical Modeling (with or without data)\r
\r
**Research Rules:** See Appendix A (emphasis: mathematical rigor, assumption transparency)\r
\r
**DATA STRATEGY:**\r
\r
**IF Data_file EXISTS:**\r
- Use real data for empirical validation of theoretical predictions\r
- Generate synthetic data if needed for additional scenarios\r
- Paper includes: Theory development + Empirical validation\r
- Document data sources clearly\r
\r
**IF Data_file DOES NOT EXIST:**\r
- Purely theoretical paper with propositions and proofs\r
- Paper includes: Theory development + Propositions (no empirical validation)\r
- May include numerical examples or illustrative simulations\r
\r
**Both cases proceed with FULL PAPER (all steps 1-9)**\r
\r
**FRAMEWORK:**\r
\r
1. Define theoretical problem and objectives\r
2. Select analytical framework (game theory, optimization, network theory, etc.)\r
3. Formulate model: variables, parameters, assumptions (explicit rationale)\r
4. Derive analytical results/propositions (equilibria, comparative statics)\r
5. Link to data/empirical evidence if applicable\r
6. Validate: logical consistency, sensitivity analysis, robustness\r
7. Analyze and interpret (translate to insights, IS theory implications)\r
\r
**Quality Standards:** See Appendix C.2\r
**References:** See Appendix E.2\r
\r
---\r
\r
### STEP 2C) Secondary data analysis\r
Currently unavailable\r
\r
---\r
\r
### STEP 2D) Laboratory & Field Experiments\r
\r
**DATA REQUIREMENTS - CHECK FIRST:**\r
\r
**IF Data_file EXISTS:**\r
1. Read and validate the data file (see Step 1.5 assessment)\r
2. Document sample characteristics for Method section\r
3. Proceed with FULL PAPER workflow (all steps 1-9)\r
\r
**IF Data_file DOES NOT EXIST:**\r
\r
Check interview transcript for data collection plans:\r
\r
**Option A - Data collection PLANNED (interview mentions upcoming study, IRB approval, recruitment plans):**\r
- Write full methodology section with complete experimental design\r
- In Results section: "Data collection is currently in progress. Preliminary results will be available upon completion of the study."\r
- In Discussion section: Discuss expected findings based on hypotheses\r
- Do NOT generate synthetic data\r
\r
**Option B - No data collection planned (purely theoretical demonstration):**\r
- Generate synthetic experimental data based on:\r
  - Literature-derived effect sizes and distributions\r
  - Theoretical predictions from your research model\r
  - Realistic sample characteristics for your target population\r
- Clearly label synthetic data in the paper and document generation methodology\r
\r
**Research Rules:** See Appendix A (emphasis: pre-specification, randomization, no post-hoc changes)\r
\r
**FRAMEWORK:**\r
\r
1. Define theoretical problem and objectives, and define nomological network if possible\r
2. Formulate model: variables, parameters, assumptions (explicit rationale)\r
3. Design experiment upstream for validity and select experimental design (pretests, validated items)\r
4. Describe sample, procedures, tools, randomization, balance checks, manipulation checks, human-computer interaction if relevant\r
5. Link analyses and results to hypotheses\r
6. Analyze and interpret (translate to insights, IS theory implications)\r
\r
**Quality Standards:** See Appendix C.3\r
**References:** See Appendix E.3\r
\r
---\r
\r
### STEP 2E) Survey research\r
\r
**DATA REQUIREMENTS - CHECK FIRST:**\r
\r
**IF Data_file EXISTS:**\r
1. Read and validate the data file (see Step 1.5 assessment)\r
2. Document sample characteristics for Method section\r
3. Proceed with FULL PAPER workflow (all steps 1-9)\r
\r
**IF Data_file DOES NOT EXIST:**\r
\r
Check interview transcript for data collection plans:\r
\r
**Option A - Data collection PLANNED (interview mentions upcoming survey, IRB approval, recruitment plans):**\r
- Write full methodology section with complete survey design\r
- In Results section: "Survey data collection is currently in progress. Results will be available upon completion."\r
- In Discussion section: Discuss expected findings based on hypotheses\r
- Do NOT generate synthetic data\r
\r
**Option B - No data collection planned (purely theoretical demonstration):**\r
- Generate synthetic survey response data based on:\r
  - Literature-derived factor loadings and correlations\r
  - Theoretical predictions from your research model\r
  - Realistic response distributions for validated scales\r
- Clearly label synthetic data in the paper and document generation methodology\r
\r
**Research Rules:** See Appendix A (emphasis: pre-specification, randomization, no post-hoc changes)\r
\r
**FRAMEWORK:**\r
\r
1. Define theoretical problem and objectives, and define nomological network if possible\r
2. Formulate model: variables, parameters, assumptions (explicit rationale)\r
3. Specify design of study (sample, procedure, use of online services)\r
4. Describe measures and questionnaires in detail, linking to research on the measures\r
5. Link analyses and results to hypotheses\r
6. Analyze and interpret (translate to insights, IS theory and practical implications)\r
\r
**Quality Standards:** See Appendix C.3\r
**References:** See Appendix E.3\r
\r
---\r
\r
## STEP 2 FINAL: GENERATE RESEARCH METADATA FILES (All Research Types)\r
\r
**CRITICAL:** Execute this step AFTER completing your research-type-specific planning (Step 2A, 2B, or 2D).\r
\r
This step is customized for different research types. The metadata files organize your research plan for subsequent steps and are used throughout STEP 3-8.\r
\r
---\r
\r
### FILE 1: research_metadata_{participantId}.json\r
\r
Save as: Code/research_metadata_{participantId}.json\r
\r
**REQUIRED JSON STRUCTURE (note: use camelCase for field names):**\r
\r
\`\`\`json\r
{\r
  "title": "Compelling paper title that: 1) Captures the main contribution, 2) Is specific and informative, 3) Follows academic conventions (typically 10-15 words), 4) Avoids jargon while being technically accurate",\r
  "abstract": "150-200 word abstract that: 1) States the problem clearly, 2) Describes the novel approach, 3) Highlights key theoretical contributions, 4) Reports main results with specific numbers, 5) Emphasizes unique advantages",\r
  "venue": "ICIS2025",\r
  "researchType": "USE THE EXACT RESEARCH TYPE FROM STEP 1 (e.g., 'Laboratory & field experiments', 'Simulation & Computational Modeling', 'Analytical & Theoretical Modeling (with or without data)', 'Survey research')",\r
  "sourcePapers": [\r
    {\r
      "reference": "Actual paper title, author(s), year, and publication venue",\r
      "rank": 1,\r
      "type": ["USE THE RESEARCH TYPE FROM STEP 1"],\r
      "usage": "Concrete way this paper will be incorporated into your research"\r
    },\r
    {\r
      "reference": "Second paper details",\r
      "rank": 2,\r
      "type": ["USE THE RESEARCH TYPE FROM STEP 1"],\r
      "usage": "How this paper contributes to your work"\r
    }\r
    // Begin with 1-3 references from INTERVIEW (initialReferences) and continue for 20-25 total key references covering all aspects:\r
    // ⚠️ RECENCY: At least 60% of papers should be from 2020-2025\r
    // - Foundational/seminal papers (any year) for theoretical grounding (5-8 papers max)\r
    // - Recent papers (2020-2025) for current state of the field (15+ papers)\r
    // - Methodological papers matching your research type\r
    // - Prior empirical work in your domain\r
    // - Papers addressing similar research questions\r
    // - Papers on evaluation metrics and analysis methods\r
    // - Papers establishing your constructs and measurement instruments\r
  ],\r
\r
  "task1": "Detailed technical implementation with exact specifications:\r
    FOR EXPERIMENTAL RESEARCH:\r
    1. Experimental design (between/within subjects, factorial design, sample size calculation)\r
    2. Participant recruitment (population, sampling method, recruitment channels)\r
    3. Manipulation procedures (stimuli creation, pretesting, manipulation checks)\r
    4. Measurement instruments (scales, items, reliability/validity evidence)\r
    5. Data collection protocol (platform, procedure, controls for confounds)\r
    6. Randomization procedures (assignment mechanism, balance checks)\r
    7. Statistical analysis plan (tests, power analysis, planned comparisons)\r
\r
    FOR COMPUTATIONAL/SIMULATION RESEARCH:\r
    1. Data collection/generation parameters (sample size, recruitment, data sources, synthetic generation)\r
    2. Preprocessing pipeline with specific algorithms and parameters\r
    3. Feature extraction methods with mathematical details\r
    4. Model architecture with layer specifications\r
    5. Training protocol with hyperparameters\r
    6. Evaluation metrics and protocols\r
    7. Expected performance targets",\r
\r
  "task2": "Research objectives and expected outcomes with specific targets:\r
    FOR EXPERIMENTAL RESEARCH:\r
    - Hypothesis testing results with expected directions and effect sizes\r
    - Theoretical contributions (mechanisms validated, boundaries established)\r
    - Practical implications for practitioners/platforms\r
\r
    FOR COMPUTATIONAL RESEARCH:\r
    - Performance improvements over baselines (with specific % targets)\r
    - Theoretical contributions (novel algorithms, frameworks)\r
    - Ablation study findings",\r
\r
  "sections": {\r
    "introduction": {\r
      "required": true,\r
      "minWords": 500,\r
      "minParagraphs": 3,\r
      "description": "Problem statement, research gap, contributions, paper structure"\r
    },\r
    "literatureReview": {\r
      "required": true,\r
      "minWords": 800,\r
      "minParagraphs": 5,\r
      "minReferences": 15,\r
      "description": "Prior work organized by themes, research gap identification"\r
    },\r
    "theoreticalFramework": {\r
      "required": true,\r
      "minWords": 600,\r
      "minParagraphs": 4,\r
      "requiresHypotheses": true,\r
      "description": "Theory basis, constructs, hypotheses with theoretical justification"\r
    },\r
    "methodology": {\r
      "required": true,\r
      "minWords": 600,\r
      "minParagraphs": 4,\r
      "description": "Research design, data collection, measures, analysis approach"\r
    },\r
    "results": {\r
      "required": true,\r
      "minWords": 500,\r
      "minParagraphs": 3,\r
      "typicalFigures": 2,\r
      "typicalTables": 1,\r
      "description": "Findings with figures/tables as needed to clarify results and support claims"\r
    },\r
    "discussion": {\r
      "required": true,\r
      "minWords": 400,\r
      "minParagraphs": 3,\r
      "description": "Interpretation, theoretical implications, practical implications, limitations"\r
    },\r
    "conclusion": {\r
      "required": true,\r
      "minWords": 200,\r
      "minParagraphs": 2,\r
      "description": "Summary, contributions, future research directions"\r
    }\r
  }\r
}\r
\`\`\`\r
**VERIFICATION CHECKLIST FOR JSON:**\r
- [ ] Title is compelling, specific, 10-15 words, captures main contribution\r
- [ ] Abstract is 150-200 words and includes problem, approach, contributions, results, advantages\r
- [ ] Research type matches exactly what was identified in STEP 1\r
- [ ] All source papers have type field matching your research type\r
- [ ] 20-25 source papers are included\r
- [ ] All citations verified to exist on semanticscholar.org\r
- [ ] All citations meet quality thresholds using Semantic Scholar API:\r
  - Citation count >500 OR\r
  - Published in top-tier journal (ISR, MISQ, JMIS, JAIS, Management Science, etc.) OR\r
  - Recent paper (<3 years) from reputable IS venue with demonstrated impact\r
- [ ] Semantic Scholar validation completed and documented (see STEP 2 FINAL)\r
- [ ] task1 includes specific implementation details appropriate for your research type (experimental vs. computational)\r
- [ ] task2 clearly states expected outcomes with quantitative targets appropriate for your research type\r
- [ ] **sections field is complete** with all 7 sections defined (introduction, literatureReview, theoreticalFramework, methodology, results, discussion, conclusion)\r
---\r
\r
### FILE 2: metaprompt_{participantId}.py\r
\r
Save as: Code/metaprompt_{participantId}.py\r
\r
**SELECT AND USE THE APPROPRIATE RESEARCH-TYPE-SPECIFIC TEMPLATE:**\r
\r
Based on your RESEARCH_TYPE identified in STEP 1, use the corresponding specialized template:\r
\r
| RESEARCH_TYPE | Template File to Use |\r
|---------------|---------------------|\r
| "Laboratory & field experiments" | Templates/metaprompt_template_EXPERIMENTAL.py |\r
| "Survey research" | Templates/metaprompt_template_EXPERIMENTAL.py |\r
| "Simulation & Computational Modeling" | Templates/metaprompt_template_COMPUTATIONAL.py |\r
| "Analytical & Theoretical Modeling (with or without data)" | Templates/metaprompt_template_COMPUTATIONAL.py* |\r
\r
*Use COMPUTATIONAL if implementing algorithms/models; use EXPERIMENTAL if testing hypotheses with data\r
\r
**PROCEDURE:**\r
\r
1. **Copy the appropriate template (replace {participantId} with actual ID from STEP 0):**\r
   \`\`\`\r
   Windows: copy Templates\\metaprompt_template_EXPERIMENTAL.py Code\\metaprompt_{participantId}.py\r
   Linux/Mac: cp Templates/metaprompt_template_EXPERIMENTAL.py Code/metaprompt_{participantId}.py\r
   \`\`\`\r
\r
2. **Fill in ALL sections** of the template:\r
   - Replace all [placeholders] with your specific research details\r
   - Follow the detailed guidance within each section\r
   - Delete example text and insert your actual content\r
   - Remove optional sections that don't apply\r
\r
3. **Consult:** See ICIS_BUILDER_GUIDE.md for detailed explanations and examples\r
\r
**VERIFICATION CHECKLIST FOR metaprompt.py:**\r
\r
**For EXPERIMENTAL template:**\r
- [ ] All hypotheses have explicit theoretical basis stated\r
- [ ] Each hypothesis has operationalization (IV, DV, measurement)\r
- [ ] Sample size justified with power analysis (target power, effect size, alpha)\r
- [ ] Statistical tests specified for each hypothesis (exact test, assumptions)\r
- [ ] All measurement scales have citations and prior reliability reported\r
- [ ] Manipulation checks included for all manipulated IVs\r
- [ ] IRB and ethics section completed (approval, consent, privacy)\r
- [ ] RESEARCH_TYPE matches STEP 1 and JSON file\r
- [ ] LITERATURE_REVIEW summarizes 20-25 key papers with theory emphasis\r
- [ ] THEORETICAL_BASIS includes nomological network and mechanisms\r
\r
**For COMPUTATIONAL template:**\r
- [ ] Model architecture fully specified (layers, parameters, algorithms)\r
- [ ] All hyperparameters documented with justification\r
- [ ] At least 4-6 baseline comparisons included (simple + strong)\r
- [ ] Ablation studies planned for all key components\r
- [ ] Sensitivity analyses planned for key parameters\r
- [ ] Data splitting strategy clearly defined (train/val/test, no leakage)\r
- [ ] Reproducibility measures specified (random seeds, Docker, configs)\r
- [ ] RESEARCH_TYPE matches STEP 1 and JSON file\r
- [ ] LITERATURE_REVIEW summarizes 20-25 key papers with technical emphasis\r
- [ ] THEORETICAL_BASIS links computational approach to IS theory\r
\r
**For BOTH templates:**\r
- [ ] 20-25 source papers in LITERATURE_REVIEW with specific usage\r
- [ ] ALL papers validated using Semantic Scholar API (citation_validation field in JSON)\r
- [ ] Each paper meets quality criteria: >500 citations OR top-tier journal OR recent quality\r
- [ ] THEORETICAL_BASIS clearly links research to established theory\r
- [ ] DATASETS/DATA_COLLECTION fully specified (origin, size, preprocessing)\r
- [ ] EVALUATION metrics defined with formulas and interpretation\r
- [ ] IMPLEMENTATION detailed enough for independent replication\r
- [ ] COMPARISON_TEMPLATE matches your analysis type (hypothesis tests vs. performance metrics)\r
\r
---\r
\r
---\r
\r
### CITATION QUALITY VALIDATION (REQUIRED)\r
\r
**Before finalizing research_metadata.json, validate ALL source papers using Semantic Scholar API:**\r
\r
**STEP 2-FINAL-A: Setup Semantic Scholar Validator**\r
\r
1. Create \`Code/scholar_validator.py\` with your Semantic Scholar API key:\r
   \`\`\`python\r
   import requests\r
   import json\r
   import time\r
\r
   # Configure your Semantic Scholar API key\r
   SCHOLAR_API_KEY = "YOUR_SEMANTIC_SCHOLAR_API_KEY"\r
   SCHOLAR_API_URL = "https://api.semanticscholar.org/graph/v1/paper/search"\r
\r
   # Define top-tier IS and related journals\r
   TOP_TIER_JOURNALS = [\r
       "Information Systems Research",\r
       "MIS Quarterly",\r
       "MISQ",\r
       "Journal of Management Information Systems",\r
       "JMIS",\r
       "Journal of the Association for Information Systems",\r
       "JAIS",\r
       "Management Science",\r
       "Strategic Management Journal",\r
       "Academy of Management Journal",\r
       "Academy of Management Review",\r
       "Journal of Marketing",\r
       "Marketing Science"\r
   ]\r
\r
   def validate_paper(title, author=None, year=None):\r
       """\r
       Validates paper meets quality criteria using Google Scholar\r
       Returns: {\r
           'valid': bool,\r
           'citation_count': int,\r
           'journal': str,\r
           'meets_citation_threshold': bool,\r
           'is_top_tier_journal': bool,\r
           'is_recent_quality': bool\r
       }\r
       """\r
       # Implementation here\r
       pass\r
   \`\`\`\r
\r
2. Install required library: \`py -m pip install requests\`\r
\r
**STEP 2-FINAL-B: Validate Each Reference**\r
\r
For EACH paper in your source_papers array (all 20-25 papers):\r
\r
1. **Extract paper details** from your reference string\r
   - Parse: title, author(s), year, venue\r
\r
2. **Query Semantic Scholar API:**\r
   \`\`\`python\r
   result = validate_paper(\r
       title="Paper Title Here",\r
       author="First Author",\r
       year=2023\r
   )\r
   \`\`\`\r
\r
3. **Check if paper meets quality criteria** (ANY ONE of these):\r
\r
   **Criterion A: High Citations**\r
   - Citation count ≥ 500\r
   - Indicates established, influential work\r
\r
   **Criterion B: Top-Tier Journal**\r
   - Published in: ISR, MISQ, JMIS, JAIS, Management Science, etc.\r
   - Check against TOP_TIER_JOURNALS list\r
\r
   **Criterion C: Recent Quality**\r
   - Published ≤ 3 years ago AND\r
   - From recognized IS venue (ICIS, ECIS, PACIS, HICSS) AND\r
   - Citation count ≥ 50 (demonstrating early impact)\r
\r
4. **If paper FAILS all three criteria:**\r
   - Remove from source_papers array\r
   - Find replacement paper on same topic that meets criteria\r
   - Document replacement: "Replaced [old] with [new] due to quality threshold"\r
\r
5. **Document validation in research_metadata.json:**\r
   Add this field at the top level (note: use camelCase for consistency):\r
   \`\`\`json\r
   "citationValidation": {\r
       "validated": true,\r
       "validationDate": "2025-11-23",\r
       "totalPapers": 23,\r
       "highCitationPapers": 15,\r
       "topTierJournalPapers": 8,\r
       "recentQualityPapers": 0,\r
       "papersReplaced": 2,\r
       "apiKeyUsed": true\r
   }\r
   \`\`\`\r
\r
**STEP 2-FINAL-C: Verification**\r
\r
Run validation script to verify all papers (replace {participantId} with actual ID):\r
\`\`\`bash\r
py Code/scholar_validator.py Code/research_metadata_{participantId}.json\r
\`\`\`\r
\r
Should output:\r
\`\`\`\r
Validating 23 papers...\r
✓ Paper 1: 1,234 citations - VALID (high citations)\r
✓ Paper 2: Published in MISQ - VALID (top-tier journal)\r
✓ Paper 3: 2024, ICIS, 87 citations - VALID (recent quality)\r
✗ Paper 4: 234 citations, mid-tier journal - INVALID\r
...\r
Summary: 21/23 valid, 2 need replacement\r
\`\`\`\r
\r
Replace invalid papers and re-validate until 100% pass.\r
\r
---\r
\r
**DELIVERABLES:**\r
1. research_metadata_{participantId}.json in Code/ subdirectory (with citation_validation field)\r
2. metaprompt_{participantId}.py in Code/ subdirectory\r
3. scholar_validator.py in Code/ subdirectory (with your API key configured)\r
\r
**CRITICAL:** Use EXACT research type from STEP 1. Verify citations on semanticscholar.org. Validate ALL papers meet quality thresholds using Semantic Scholar API. Ensure consistency between files.\r
\r
---\r
\r
## STEP 3: MATHEMATICAL FORMULATION DEVELOPMENT\r
\r
**Skip logic (based on STEP 1 "Needs mathematical formulation" field):**\r
\r
| Research Type | Data Available | Needs Math Formulation | Action |\r
|---------------|----------------|------------------------|--------|\r
| 2A (Simulation) | Any | N/A | **ALWAYS EXECUTE** |\r
| 2B (Analytical) | Any | N/A | **ALWAYS EXECUTE** |\r
| 2D (Experiments) | Any | No | **SKIP** (standard statistical methods) |\r
| 2D (Experiments) | Any | Yes | **EXECUTE** (novel algorithms/proofs) |\r
| 2E (Survey) | Any | No | **SKIP** (standard statistical methods) |\r
| 2E (Survey) | Any | Yes | **EXECUTE** (novel algorithms/proofs) |\r
\r
**In summary:**\r
- **ALWAYS execute** for Simulation (2A) and Analytical (2B) research\r
- **SKIP** for Experimental/Survey (2D/2E) using standard statistical methods only\r
- **EXECUTE** for Experimental/Survey (2D/2E) with novel algorithms, proofs, or computational models\r
\r
Develop comprehensive mathematical foundation as LaTeX document with:\r
1. Signal/data representation\r
2. Core algorithm formulation\r
3. Architecture (if applicable)\r
4. Optimization and training (if applicable)\r
5. Evaluation framework\r
6. Theoretical analysis (complexity, convergence, etc.)\r
\r
DELIVERABLE: Complete mathematical_formulation.tex ready for compilation\r
\r
---\r
## STEP 4: EXPERIMENTAL IMPLEMENTATION\r
\r
**EXECUTE FOR ALL RESEARCH TYPES.**\r
\r
**Important:** Use only standard Python libraries (numpy, pandas, matplotlib).\r
  Avoid scipy/sklearn dependencies for compatibility. Implement statistical tests\r
  manually or use numpy-based alternatives\r
\r
Create complete, runnable Python implementation in **Code/** directory:\r
\r
**FOR RESEARCH TYPE 2D/2E:**\r
- data_preprocessing.py (load Data_file OR generate synthetic data)\r
- data_loader.py (prepare data for analysis)\r
- statistical_tests.py (implement hypothesis tests)\r
- visualization.py (exploratory plots)\r
- Main analysis runner\r
\r
**FOR RESEARCH TYPE 2A (Simulation):**\r
- data_preprocessing.py (IF Data_file exists: load real data for calibration)\r
- data_generation.py (generate synthetic data for simulation runs)\r
- simulation_model.py (implement simulation logic)\r
- data_loader.py (load and prepare all data sources)\r
- Main experiment runner\r
\r
**FOR RESEARCH TYPE 2B (Analytical/Theoretical):**\r
- data_preprocessing.py (IF Data_file exists: load real data for validation)\r
- data_generation.py (IF needed: generate synthetic data for numerical examples)\r
- analytical_model.py (implement theoretical model)\r
- numerical_solver.py (solve model equations)\r
- Main analysis runner\r
\r
**File locations:**\r
- All .py files → Code/ directory\r
- Original Data_file → root directory (don't modify)\r
- Processed data → Data/ directory\r
- Configuration files → Code/ directory\r
\r
Include: realistic data, progress logging, docstrings, comments\r
Ensure code runs without external dependencies\r
\r
DELIVERABLE: Complete Python implementation in Code/ directory, executable immediately\r
\r
---\r
\r
## STEP 5: EXPERIMENT EXECUTION\r
\r
**EXECUTE FOR ALL RESEARCH TYPES.**\r
\r
**Windows Compatibility:** Avoid Unicode characters (→, η, ≈) in print statements.\r
  Use ASCII equivalents (-> instead of →, eta-sq instead of η²).\r
\r
Create experiment execution script in **Code/** directory. Use python3 for running code.\r
\r
Requirements:\r
- ExperimentRunner class with timestamped output directory\r
- Baseline experiments (realistic results from literature)\r
- Main method results (show improvements, training dynamics)\r
- Ablation studies (if applicable)\r
- Domain-specific analysis\r
- Results storage (JSON, summary statistics, comparison tables)\r
\r
**File locations:**\r
- Execution script → Code/ directory\r
- Results JSON/CSV → Results/ directory\r
- Intermediate data → Data/ directory\r
\r
Print progress, save immediately, include timestamps\r
\r
DELIVERABLE: Executable script in Code/ generating complete results in Results/\r
\r
**MANDATORY AFTER COMPLETION - Document Paths for STEP 8:**\r
\r
Execute these commands and report results:\r
\r
1. Find all figures created:\r
   Glob: Results/**/fig*.png\r
   Glob: Results/**/figure*.png\r
\r
2. Report exact locations:\r
   "Experiment complete. Results saved to:\r
    - JSON results: [exact path]\r
    - Figures:\r
      * [exact path to fig1]\r
      * [exact path to fig2]\r
      * [etc.]\r
\r
    For STEP 8 LaTeX reference:\r
    - Paper will be in: {ICIS_PATH}\\Paper\\\r
    - Figures are in: [exact directory]\r
    - Relative path to use: ../Results/ or ../Results/<subdirectory>/"\r
\r
3. Note: This path information is CRITICAL for STEP 8 to avoid placeholder boxes\r
\r
---\r
\r
## STEP 6: RESULTS GENERATION AND VISUALIZATION\r
\r
**EXECUTE FOR ALL RESEARCH TYPES.**\r
\r
This step generates TWO types of figures:\r
1. **CONCEPTUAL FIGURES** - Research model diagrams, theoretical framework overviews (via Gemini image generation)\r
2. **DATA-DRIVEN FIGURES** - Charts and plots based on data analysis (via QuickChart.io)\r
\r
---\r
\r
### 6.1 CONCEPTUAL FIGURES (Required)\r
\r
**Purpose:** Illustrate theories, relationships between constructs, cause-effect logical flows\r
- These explain the research design, NOT present specific data\r
- Generated automatically via Gemini image generation\r
\r
**Required Conceptual Figures:**\r
1. **Research Model Diagram** - Box-and-arrow showing constructs and hypothesized relationships (H1, H2, etc.)\r
2. **Theoretical Framework Overview** - Visual summary of the research approach\r
\r
**Design Standards for Conceptual Figures:**\r
- Clean, academic, flat design (MISQ/ISR quality)\r
- Use human-readable labels (e.g., "Perceived Usefulness" not "PU_VAR")\r
- Hypothesis labels on arrows (H1, H2, H3)\r
- White/light background, consistent typography\r
- Self-explanatory: Reader can understand without body text\r
\r
---\r
\r
### 6.2 DATA-DRIVEN FIGURES (Required)\r
\r
Generate publication-quality charts using matplotlib/seaborn or QuickChart.io.\r
\r
**Create visualization script in Code/** directory (e.g., \`Code/generate_visualizations.py\`)\r
\r
Setup:\r
\`\`\`python\r
import matplotlib.pyplot as plt\r
import seaborn as sns\r
plt.style.use('seaborn-v0_8-paper')\r
sns.set_palette("husl")\r
\`\`\`\r
\r
**Required Data-Driven Figures (as applicable):**\r
\r
**FOR ALL RESEARCH TYPES:**\r
- Descriptive statistics visualization (histograms, box plots, distribution plots)\r
- Correlation heatmaps or matrices\r
- Main results visualization (bar charts with error bars, line plots with confidence intervals)\r
- Comparison charts (treatment vs control, before vs after)\r
- Statistical significance indicators (*, **, *** annotations)\r
\r
**FOR EXPERIMENTAL/SURVEY RESEARCH (2D/2E):**\r
- Hypothesis test results visualization (group comparisons with significance markers)\r
- Interaction plots for factorial designs\r
- Measurement model results (factor loadings, reliability indicators)\r
\r
**FOR SIMULATION/COMPUTATIONAL RESEARCH (2A/2B):**\r
- Training/validation curves\r
- Performance comparison charts (proposed vs baselines)\r
- Ablation study visualizations\r
- Sensitivity analysis plots\r
- Convergence plots\r
\r
**Design Standards for Data-Driven Figures:**\r
- Use human-readable labels (e.g., "Level of Education" not "EDU_LVL_01")\r
- Axis labels must precisely match variables discussed in the text\r
- Ensure scales are accurate for collected data\r
- Label figures as "(Illustrative)" if using simulated/synthetic data\r
\r
---\r
\r
### 6.3 FIGURE QUALITY CHECKLIST\r
\r
Apply to ALL figures (conceptual and data-driven):\r
\r
- [ ] **Self-Explanatory:** Can a reader understand the main takeaway without reading body text?\r
- [ ] **Consistency:** Same font, color palette, line weights throughout the paper\r
- [ ] **Captioning:** Titles and numbers placed correctly (typically below figures)\r
- [ ] **Citation:** Every figure referenced in text (e.g., "See Figure 1") close to where it appears\r
- [ ] **Publication Quality:** 300 DPI, clear labels, proper font sizes\r
\r
**File locations:**\r
- Visualization script → Code/ directory\r
- Generated figures → Results/ directory (save as .png and .pdf)\r
\r
---\r
\r
DELIVERABLE:\r
- 2 conceptual figures (research model + framework overview)\r
- 2-4 data-driven figures\r
- Visualization script in Code/, publication-ready figures in Results/\r
\r
**CRITICAL - After Saving Figures:**\r
\r
1. Verify files were actually saved:\r
   Use Glob: **/fig*.png\r
   Expected: Should find all figures you just created\r
\r
2. If Glob finds NO files:\r
   - Check the save path you used\r
   - Verify directory exists\r
   - Re-save figures\r
   - Verify with Glob again\r
\r
3. Document exact paths found:\r
   Report: "Figures saved and verified:\r
            - [full path to fig1.png]\r
            - [full path to fig2.png]\r
            - [etc.]"\r
\r
4. Calculate relative path from Paper/ directory:\r
   If figures in: {ICIS_PATH}\\Results\\fig1.png\r
   And paper in: {ICIS_PATH}\\Paper\\icis_paper_{participantId}_v1.tex\r
   Then LaTeX should use: ../Results/fig1.png\r
\r
5. Save this path mapping for STEP 8 reference\r
\r
---\r
\r
## STEP 7: RESULTS ANALYSIS\r
\r
**EXECUTE FOR ALL RESEARCH TYPES.**\r
\r
Conduct comprehensive analysis:\r
1. Performance analysis (metrics in context, comparisons, strengths/weaknesses)\r
2. Technical analysis (why it works, key components, failure modes, scalability)\r
3. Ablation insights (validate decisions, critical vs optional)\r
4. Domain-specific analysis (implications, deployment, requirements)\r
5. Statistical analysis (significance, confidence intervals, effect sizes)\r
\r
DELIVERABLE: Comprehensive results_analysis.md in Paper/ subdirectory with:\r
- Executive summary\r
- Detailed findings\r
- Implications\r
- Future directions\r
- Limitations\r
\r
---\r
\r
## STEP 8: PAPER WRITING\r
\r
⚠️ CRITICAL: ACADEMIC WRITING REQUIREMENTS\r
\r
**MANDATORY LATEX STRUCTURE:**\r
Every paper MUST include the following at the START of the LaTeX document:\r
\`\`\`latex\r
\\documentclass{article}\r
\\usepackage{...}  % packages\r
\r
\\title{Your Paper Title Here}\r
\\author{}\r
\\date{}\r
\r
\\begin{document}\r
\\maketitle\r
\r
\\begin{abstract}\r
...\r
\\end{abstract}\r
\`\`\`\r
\r
**NEVER omit \\title{}, \\begin{document}, or \\maketitle - these are REQUIRED.**\r
\r
**DETERMINE PAPER TYPE (from Step 1.5):**\r
\r
### FULL PAPER (14-16 pages)\r
**When:** Real data exists, synthetic data generated, or analytical/simulation research\r
**Sections:** Introduction, Literature Review, Theory, Method, Results, Discussion, Conclusion\r
**Requirements:**\r
- All 7 sections present\r
- Results section: Include figures and tables that clarify findings and strengthen claims (typically 2 figures, 1 table - but only if they add value)\r
- Follow steps 8.1-8.3 below for figure handling\r
\r
**Figure/Table Principle:** Include visual elements when they make the paper easier to understand or more persuasive. Do NOT add figures/tables merely to meet a quota if they are redundant or do not add clarity.\r
\r
### PARTIAL PAPER WITHOUT EXAMPLES (8-10 pages)\r
**When:** Data collection planned but no example data available (2D/2E only)\r
**Sections:** Introduction, Literature Review, Theory, Proposed Methodology, Discussion, Conclusion\r
**Requirements:**\r
- **NO Results section** - data collection is pending\r
- Methodology section titled "Proposed Methodology" or "Research Design"\r
- Include statement: "Data collection is currently in progress"\r
- Discussion focuses on expected implications based on hypotheses\r
- Conceptual figures only (research model, theoretical framework)\r
\r
### PARTIAL PAPER WITH EXAMPLES (10-12 pages)\r
**When:** Data collection planned AND example data available for demonstration (2D/2E only)\r
**Sections:** Introduction, Literature Review, Theory, Methodology with Demo, Discussion, Conclusion\r
**Requirements:**\r
- **NO Results section** - actual results pending\r
- Methodology includes "Analysis Demonstration" subsection\r
- Demo uses example data (clearly labeled as illustrative)\r
- All demo outputs labeled: "(Illustrative - Example Data, N=X)"\r
- Conceptual figures + demo figures (labeled as demonstration)\r
\r
---\r
\r
**⚠️ CRITICAL - BEFORE WRITING LATEX - VERIFY FIGURE PATHS:**\r
\r
**STEP 8.1 - LOCATE FIGURE FILES:**\r
\r
1. Use Glob to find ALL figures created in STEP 6:\r
   Glob: **/fig*.png\r
   Glob: **/figure*.png\r
\r
2. Document what you found:\r
   - How many figure files exist?\r
   - What are their exact paths?\r
   - Are they in Results/, Results/figures/, or timestamped subdirectory?\r
\r
3. Determine relative path from Paper/ directory:\r
   If figures are in: {ICIS_PATH}\\Results\\fig1.png\r
   And paper will be in: {ICIS_PATH}\\Paper\\icis_paper_{participantId}_v1.tex\r
   Then LaTeX path is: ../Results/fig1.png\r
\r
   Use pattern: ../<relative-path-from-icis-root>\r
\r
4. DO NOT use:\r
   ❌ Absolute paths: {ICIS_PATH}\\Results\\fig.png\r
   ❌ Hardcoded timestamps: Results/experiment_20251118_154951/\r
   ❌ Guessed paths without Glob verification\r
\r
**STEP 8.2 - TEST PATH WITH MINIMAL EXAMPLE:**\r
\r
Before writing full paper, test ONE figure path:\r
\r
1. Create test_figure.tex with this content:\r
   \\documentclass{article}\r
   \\usepackage{graphicx}\r
   \\begin{document}\r
   \\includegraphics{../Results/fig1.png}\r
   \\end{document}\r
\r
2. Compile from Paper/ directory:\r
   pdflatex test_figure.tex\r
\r
3. Check compilation output:\r
   ✓ SUCCESS: Should see [1 <../Results/fig1.png>]\r
   ✗ FAILURE: Will see "File ... not found"\r
\r
4. If FAILURE:\r
   - Path is wrong\r
   - Use Glob to verify file location\r
   - Adjust path in test_figure.tex\r
   - Recompile until SUCCESS\r
\r
5. Once ONE path works, use SAME pattern for ALL figures\r
\r
**STEP 8.3 - WRITE LATEX:**\r
\r
Write the paper using the SAME path pattern that worked in test (from STEP 8.2).\r
\r
Example figure inclusion:\r
\\begin{figure}[h]\r
\\centering\r
\\includegraphics[width=0.8\\textwidth]{../Results/fig1_main_comparison.png}\r
\\caption{Main System Comparison}\r
\\label{fig:main}\r
\\end{figure}\r
\r
Use the path structure that passed the test in STEP 8.2\r
\r
**FORBIDDEN (ALL PAPER TYPES):**\r
- Bullet points in body (except: data characteristics, criteria, conditions)\r
- Paragraphs <100 words\r
- \\\\subsubsection{} commands\r
- Numbered lists in narrative\r
\r
**REQUIRED (ALL PAPER TYPES):**\r
- Paragraphs 150-250 words minimum\r
- Flowing narrative with transitions\r
- Integrate ideas within paragraphs\r
- ONLY \\\\section{} and \\\\subsection{} headings\r
\r
**Academic Style:** See Appendix D for detailed guidelines\r
\r
---\r
\r
### FOR FULL PAPER (14-16 pages):\r
\r
Write complete paper in LaTeX following ICISTemplate.txt with ALL 7 sections.\r
\r
**RESULTS SECTION GUIDELINES:**\r
- Include figures that visualize key findings (hypothesis tests, model results, comparisons)\r
- Include tables that summarize statistical results clearly\r
- Each figure/table must be referenced and discussed in the text\r
- **Typical benchmark:** 2 figures + 1 table, but include more or fewer based on what genuinely clarifies and strengthens the presentation\r
- Do NOT pad with redundant visuals; every figure/table should earn its place\r
\r
**After writing, verify:**\r
□ 14-16 pages total\r
□ All 7 sections included (Intro, Lit Review, Theory, Method, Results, Discussion, Conclusion)\r
□ Results section includes figures/tables that clarify findings (typically 2 figs + 1 table)\r
□ Each figure/table is referenced in text (e.g., "As shown in Figure 1...")\r
□ No redundant figures/tables (each adds unique value)\r
□ Figures compile (see compilation check below)\r
\r
---\r
\r
### FOR PARTIAL PAPER WITHOUT EXAMPLES (8-10 pages):\r
\r
Write paper with 6 sections (NO Results section).\r
\r
**SPECIAL REQUIREMENTS:**\r
- Section 4 title: "Proposed Methodology" or "Research Design"\r
- Include clear statement: "Data collection is currently in progress. Results will be available upon completion of the study."\r
- Discussion section: Focus on expected implications based on hypotheses\r
- Include 1-2 conceptual figures (research model, theoretical framework)\r
\r
**After writing, verify:**\r
□ 8-10 pages total\r
□ 6 sections included (NO Results section)\r
□ "Data collection in progress" statement present\r
□ At least 1 conceptual figure (research model)\r
\r
---\r
\r
### FOR PARTIAL PAPER WITH EXAMPLES (10-12 pages):\r
\r
Write paper with 6 sections + Analysis Demonstration subsection.\r
\r
**METHODOLOGY WITH DEMO SECTION:**\r
\`\`\`latex\r
\\section{Methodology}\r
[Standard methodology content...]\r
\r
\\subsection{Analysis Demonstration}\r
To illustrate the planned analysis approach, we demonstrate using example data\r
(N=X observations). This demonstration shows the analysis procedure that will\r
be applied to the full dataset upon completion of data collection.\r
\r
[Include demo analysis with clearly labeled illustrative outputs]\r
\r
These results are illustrative and based on example data. The full analysis\r
will be conducted once data collection is complete.\r
\`\`\`\r
\r
**DEMO LABELING REQUIREMENTS:**\r
- All demo tables: "(Illustrative - Example Data, N=X)"\r
- All demo figures: "(Demonstration Only)"\r
- Clear text stating: "These results are illustrative"\r
\r
**After writing, verify:**\r
□ 10-12 pages total\r
□ 6 sections included (NO Results section)\r
□ Analysis Demonstration subsection present\r
□ All demo outputs clearly labeled as illustrative\r
□ Example data N value stated\r
\r
---\r
\r
**FIGURE COMPILATION CHECK (ALL PAPER TYPES):**\r
After first pdflatex run, verify:\r
- Look for: [page <../Results/fig1.png>] in output\r
- If "File not found" appears: Use Glob to find correct paths, update LaTeX, recompile\r
- Check PDF size thresholds:\r
  - FULL: >450KB with images\r
  - PARTIAL_NO_EXAMPLES: >250KB\r
  - PARTIAL_WITH_EXAMPLES: >350KB\r
\r
---\r
\r
## STEP 8.4: SECTION CONTENT VALIDATION (MANDATORY)\r
\r
⚠️ **CRITICAL:** Before proceeding to Step 8.5, validate that ALL required sections exist and contain substantive content based on paper type.\r
\r
**STEP 8.4-A: Verify All Required Sections Exist**\r
\r
Search the LaTeX file for each required section header:\r
\`\`\`\r
grep "\\\\section{" Paper/icis_paper_{participantId}_v1.tex\r
\`\`\`\r
\r
**Required sections by paper type:**\r
\r
### FULL PAPER (7 sections required):\r
1. Introduction\r
2. Literature Review (or Related Work)\r
3. Theoretical Framework (or Theory)\r
4. Methodology (or Method)\r
5. **Results** (or Findings) - REQUIRED\r
6. Discussion\r
7. Conclusion\r
\r
### PARTIAL PAPER (6 sections required - NO Results):\r
1. Introduction\r
2. Literature Review (or Related Work)\r
3. Theoretical Framework (or Theory)\r
4. Proposed Methodology (or Research Design)\r
5. Discussion\r
6. Conclusion\r
\r
**If ANY required section is missing:** STOP and add the missing section before proceeding.\r
\r
**STEP 8.4-B: Validate Section Content**\r
\r
### FOR FULL PAPER:\r
| Section | Min Words | Min Paragraphs | Required Elements |\r
|---------|-----------|----------------|-------------------|\r
| Introduction | 500 | 3 | Problem statement, research gap, contributions |\r
| Literature Review | 800 | 5 | 15+ citations, organized themes |\r
| Theoretical Framework | 600 | 4 | Theory basis, hypotheses (H1, H2, etc.) |\r
| Methodology | 600 | 4 | Design, data, measures, analysis plan |\r
| **Results** | **500** | **3** | **Statistical findings; figures/tables as needed for clarity** |\r
| Discussion | 400 | 3 | Implications, limitations |\r
| Conclusion | 200 | 2 | Summary, future research |\r
\r
**Note on figures/tables:** Typically 2 figures + 1 table in Results, but prioritize value over count. Include only what genuinely improves understanding or persuasiveness.\r
\r
### FOR PARTIAL PAPER (NO_EXAMPLES):\r
| Section | Min Words | Min Paragraphs | Required Elements |\r
|---------|-----------|----------------|-------------------|\r
| Introduction | 500 | 3 | Problem statement, research gap, contributions |\r
| Literature Review | 600 | 4 | 12+ citations, organized themes |\r
| Theoretical Framework | 600 | 4 | Theory basis, hypotheses (H1, H2, etc.) |\r
| Proposed Methodology | 600 | 4 | Design, planned measures, planned analysis |\r
| Discussion | 400 | 3 | Expected implications, limitations |\r
| Conclusion | 200 | 2 | Summary, future research |\r
\r
### FOR PARTIAL PAPER (WITH_EXAMPLES):\r
| Section | Min Words | Min Paragraphs | Required Elements |\r
|---------|-----------|----------------|-------------------|\r
| Introduction | 500 | 3 | Problem statement, research gap, contributions |\r
| Literature Review | 600 | 4 | 12+ citations, organized themes |\r
| Theoretical Framework | 600 | 4 | Theory basis, hypotheses (H1, H2, etc.) |\r
| Methodology with Demo | 800 | 5 | Design + Analysis Demonstration subsection |\r
| Discussion | 400 | 3 | Expected implications, limitations |\r
| Conclusion | 200 | 2 | Summary, future research |\r
\r
**STEP 8.4-C: Paper-Type-Specific Validation**\r
\r
### FOR FULL PAPER - Results Section Validation:\r
The Results section MUST contain:\r
1. ✅ Statistical results (effect sizes, p-values, confidence intervals)\r
2. ✅ Interpretation of findings connected to hypotheses\r
3. ✅ Figures/tables that clarify key findings (typically 2 figs + 1 table, but adjust based on value)\r
4. ✅ Each figure/table is referenced in text ("As shown in Figure 1...")\r
5. ✅ No redundant visuals - each figure/table should add unique value\r
\r
**Flexibility:** If a finding is clear from text alone, a figure may not be needed. If a table would merely repeat what's stated in prose, omit it. Conversely, complex results may need more than 2 figures.\r
\r
### FOR PARTIAL PAPER (NO_EXAMPLES) - Methodology Validation:\r
The Proposed Methodology section MUST contain:\r
1. ✅ Statement: "Data collection is currently in progress"\r
2. ✅ At least 1 conceptual figure (research model)\r
3. ✅ Complete analysis plan (what tests will be run)\r
\r
### FOR PARTIAL PAPER (WITH_EXAMPLES) - Demo Validation:\r
The Methodology section MUST contain:\r
1. ✅ Analysis Demonstration subsection\r
2. ✅ Clear labeling: "(Illustrative - Example Data, N=X)"\r
3. ✅ At least 1 demo figure or table (labeled as illustrative)\r
4. ✅ Statement explaining demo is illustrative, not actual results\r
\r
**STEP 8.4-D: Section Validation Checklist**\r
\r
### FULL PAPER Checklist:\r
□ Introduction section exists with ≥500 words\r
□ Literature Review section exists with ≥800 words and ≥15 citations\r
□ Theoretical Framework section exists with ≥600 words and explicit hypotheses\r
□ Methodology section exists with ≥600 words\r
□ **Results section exists with ≥500 words and appropriate figures/tables for clarity**\r
□ Discussion section exists with ≥400 words\r
□ Conclusion section exists with ≥200 words\r
□ Each figure/table adds unique value (no redundant visuals)\r
\r
### PARTIAL PAPER Checklist:\r
□ Introduction section exists with ≥500 words\r
□ Literature Review section exists with ≥600 words and ≥12 citations\r
□ Theoretical Framework section exists with ≥600 words and explicit hypotheses\r
□ Proposed Methodology section exists with ≥600 words\r
□ **NO Results section** (data collection pending)\r
□ Discussion section exists with ≥400 words (expected implications)\r
□ Conclusion section exists with ≥200 words\r
□ If WITH_EXAMPLES: Analysis Demonstration subsection with demo labeling\r
\r
**If ANY check fails:** Edit the paper to add missing content before proceeding.\r
\r
**DELIVERABLE:**\r
- Complete LaTeX paper with all required sections containing substantive content\r
\r
---\r
\r
## STEP 8.5: FULL PAPER EDIT VERIFICATION (MANDATORY)\r
\r
⚠️ **IMPORTANT:** This step MUST execute AFTER all sections have been built and validated in Step 8.4. Due to capacity constraints, paper sections may be generated incrementally. This step provides a holistic review and edit pass once all content is present.\r
\r
**PURPOSE:** Perform a comprehensive edit of the complete paper to ensure good flow, coherent structure, and remove redundancies.\r
\r
**PRE-CONDITION:** All sections must be complete (verified in Step 8.4)\r
\r
### STEP 8.5-A: Section Organization Check\r
\r
**Maximum section counts:**\r
- FULL papers: Maximum 8 sections (7 main + Abstract)\r
- PARTIAL papers: Maximum 6 sections (5 main + Abstract)\r
\r
**Heading rules:**\r
- Allowed: \`\\section{}\` and \`\\subsection{}\` ONLY\r
- **FORBIDDEN:** \`\\subsubsection{}\` - must be removed or promoted\r
\r
### STEP 8.5-B: Subsection Rules\r
\r
Subsections are allowed ONLY if:\r
1. The subsection is **necessary** for logical organization, AND\r
2. The subsection content is **>200 words**\r
\r
**For each subsection <200 words:**\r
- Merge it with adjacent content, OR\r
- Remove the subsection heading and flow content into parent section\r
- Remove subsection headings that serve only as labels without substantial content\r
\r
### STEP 8.5-C: Redundancy Elimination (Operationalized)\r
\r
**STEP 8.5-C1: Cross-Section Redundancy Check**\r
\r
For each pair of sections, check for content that appears in both:\r
\r
| Check | Pattern to Find | Action |\r
|-------|-----------------|--------|\r
| Definition duplication | Same construct defined in Lit Review AND Theory | Keep only in Theory; Lit Review should cite, not redefine |\r
| Hypothesis repetition | H1-Hn stated fully in Theory AND Results | Theory: full statement; Results: brief reference only ("As predicted in H1...") |\r
| Method duplication | Procedure described in Method AND Results | Keep details in Method; Results references only |\r
| Literature overlap | Same citation discussed in Intro AND Lit Review | Intro: 1 sentence max; full discussion in Lit Review |\r
\r
**STEP 8.5-C2: Within-Section Redundancy Check**\r
\r
Search for these patterns within each section:\r
\r
\`\`\`\r
# Find repeated phrases (3+ words appearing 2+ times)\r
Pattern: Any phrase of 3+ words appearing more than once in same section\r
\r
# Find synonym clusters saying same thing\r
Example: "users adopt the system" ... "individuals embrace the technology" ... "people accept the tool"\r
→ Consolidate to ONE phrasing, use pronouns/shorter references after\r
\`\`\`\r
\r
**STEP 8.5-C3: Filler Phrase Removal**\r
\r
Remove or replace these low-value phrases:\r
- "It is important to note that" → Delete, start with the actual point\r
- "As mentioned earlier/above" → Delete or use specific reference\r
- "In order to" → "To"\r
- "The fact that" → Delete\r
- "It should be noted that" → Delete\r
- "Due to the fact that" → "Because"\r
\r
**Consolidate** overlapping content into single, comprehensive statements.\r
\r
### STEP 8.5-D: Figure and Table Reference Check\r
\r
**CRITICAL:** Every figure and table MUST be referenced in the main text.\r
\r
**Figure references:**\r
- Pattern: "Figure X shows..." or "As shown in Figure X..."\r
- Reference should appear BEFORE or AT the figure location\r
\r
**Table references:**\r
- Pattern: "Table X presents..." or "As summarized in Table X..."\r
\r
**Check for unreferenced elements:**\r
\`\`\`\r
# Find all figures\r
grep -o 'label{fig:[^}]*}' Paper/icis_paper_{participantId}_v1.tex\r
\r
# Find all figure references\r
grep -o 'Figure [0-9]*' Paper/icis_paper_{participantId}_v1.tex\r
grep -o 'Figure~\\\\ref{fig:[^}]*}' Paper/icis_paper_{participantId}_v1.tex\r
\`\`\`\r
\r
**Add missing references** where needed.\r
\r
### STEP 8.5-E: Flow and Coherence Improvements (Operationalized)\r
\r
**STEP 8.5-E1: Section-Level Flow**\r
\r
Each section should end by setting up the next. Check for transition sentences:\r
\r
| From Section | Expected Bridge to Next |\r
|--------------|------------------------|\r
| Introduction | "The remainder of this paper is organized as follows..." OR ends with research questions |\r
| Literature Review | "These gaps motivate our theoretical framework..." OR "Building on this foundation..." |\r
| Theory | "To test these hypotheses, we designed..." OR "The following methodology..." |\r
| Methodology | "Applying this approach yielded..." OR "We now present the results..." |\r
| Results | "These findings have several implications..." |\r
| Discussion | "In conclusion..." |\r
\r
**STEP 8.5-E2: Paragraph-Level Coherence Check**\r
\r
For EACH pair of consecutive paragraphs, verify the connection:\r
\r
**The "Last-First" Test:**\r
1. Read the LAST sentence of paragraph N\r
2. Read the FIRST sentence of paragraph N+1\r
3. Check: Is there a clear logical link?\r
\r
**Types of valid links:**\r
- **Continuation:** "Furthermore," "Moreover," "Additionally," "Building on this,"\r
- **Contrast:** "However," "In contrast," "Conversely," "Despite this,"\r
- **Cause-Effect:** "Consequently," "Therefore," "As a result," "Thus,"\r
- **Specification:** "Specifically," "In particular," "For example,"\r
- **Temporal:** "Subsequently," "Following this," "After establishing,"\r
- **Pronoun/Reference:** "This finding..." "These results..." "Such approaches..."\r
\r
**If NO link exists:** Add a transition sentence or revise the first sentence of paragraph N+1.\r
\r
**STEP 8.5-E3: Topic Sentence Verification**\r
\r
Each paragraph should begin with a clear topic sentence stating the paragraph's main point:\r
\r
\`\`\`\r
✅ Good: "Trust plays a central role in technology adoption."\r
   (Clear claim that the paragraph will develop)\r
\r
❌ Bad: "There are several factors to consider."\r
   (Vague, doesn't state the specific point)\r
\r
❌ Bad: "Smith (2020) found that..."\r
   (Starts with citation, not your argument)\r
\`\`\`\r
\r
**Fix:** Rewrite opening sentences to state YOUR point, then use citations as support.\r
\r
**STEP 8.5-E4: Paragraph Unity Check**\r
\r
Each paragraph should develop ONE main idea:\r
\r
1. Identify the topic sentence (usually first sentence)\r
2. Check: Does every sentence in the paragraph support/develop that topic?\r
3. If a sentence introduces a NEW idea → Move it to start a new paragraph\r
\r
**STEP 8.5-E5: Sentence-Level Flow**\r
\r
Within paragraphs, check for:\r
\r
- **Old-to-New pattern:** Each sentence should begin with known information (from previous sentence) and end with new information\r
  \`\`\`\r
  ✅ "Users develop trust through repeated interactions. These interactions build familiarity, which..."\r
  ❌ "A key factor is familiarity. Users develop trust through repeated interactions."\r
  \`\`\`\r
\r
- **Consistent subjects:** Avoid unnecessary subject shifts within a paragraph\r
  \`\`\`\r
  ✅ "Users adopt... They then... Their experience..."\r
  ❌ "Users adopt... The system provides... Researchers found... Adoption increases..."\r
  \`\`\`\r
\r
### STEP 8.5-F: Edit Verification Checklist\r
\r
**Structure:**\r
□ No \`\\subsubsection{}\` commands remain\r
□ All subsections are >200 words\r
□ Section count ≤8 (FULL) or ≤6 (PARTIAL)\r
□ Every \`\\includegraphics\` has corresponding text reference\r
□ Every \`\\begin{table}\` has corresponding text reference\r
\r
**Redundancy (from 8.5-C):**\r
□ No construct defined in multiple sections\r
□ Hypotheses stated fully only in Theory section\r
□ No repeated 3+ word phrases within sections\r
□ Filler phrases removed ("It is important to note that", etc.)\r
\r
**Flow (from 8.5-E):**\r
□ Each section ends with transition to next\r
□ Consecutive paragraphs pass "Last-First" test (clear link)\r
□ Each paragraph begins with topic sentence (not citation)\r
□ Each paragraph develops ONE main idea\r
□ Sentences follow old-to-new information pattern\r
\r
**Overall:**\r
□ Narrative arc is coherent from Introduction to Conclusion\r
□ Reader can follow logic without re-reading\r
\r
**DELIVERABLE:**\r
- Edited LaTeX paper with improved flow, no redundancy, and clear coherence\r
\r
---\r
\r
## STEP 8.6: REFERENCE VALIDATION AND GENERATION (MANDATORY)\r
\r
⚠️ CRITICAL: ALL references MUST be validated via Semantic Scholar API before inclusion.\r
\r
**REFERENCE RULES:**\r
1. **NO fabricated references** - Every reference must exist in Semantic Scholar\r
2. **APA 7th Edition format** - Consistent formatting throughout\r
3. **If not found, find alternative** - Never include a reference that cannot be verified\r
\r
**STEP 8.6-A: Extract All Citations**\r
\r
1. Extract all \\cite{} keys from the paper:\r
   \`\`\`\r
   grep -o '\\\\cite{[^}]*}' Paper/icis_paper_{participantId}_v1.tex\r
   \`\`\`\r
\r
2. Create list of citation keys to validate\r
\r
**STEP 8.6-B: Validate Each Reference via Semantic Scholar**\r
\r
For EACH citation key (e.g., Davis1989, VenkEtAl2003):\r
\r
1. **Parse the key** to extract author name and year:\r
   - Davis1989 → author="Davis", year="1989"\r
   - VenkMorDav2003 → author="Venkatesh", year="2003"\r
\r
2. **Query Semantic Scholar API:**\r
   \`\`\`python\r
   import requests\r
\r
   SCHOLAR_API_KEY = "YOUR_SEMANTIC_SCHOLAR_API_KEY"  # From .env\r
\r
   def lookup_reference(author, year):\r
       url = f"https://api.semanticscholar.org/graph/v1/paper/search"\r
       params = {\r
           "query": f"{author} {year}",\r
           "limit": 1,\r
           "fields": "title,authors,year,venue,journal"\r
       }\r
       headers = {"x-api-key": SCHOLAR_API_KEY}\r
       response = requests.get(url, params=params, headers=headers)\r
       return response.json()\r
   \`\`\`\r
\r
3. **If paper FOUND:**\r
   - Format in APA 7th Edition style:\r
   \`\`\`\r
   Author, A. A., & Author, B. B. (Year). Title of article. \\textit{Journal Name}, volume(issue), pages.\r
   \`\`\`\r
\r
4. **If paper NOT FOUND:**\r
   - Try alternative searches (adjacent years, broader terms)\r
   - If still not found: **DO NOT INCLUDE** - remove the \\cite{} from the paper\r
   - Find a replacement paper on the same topic that IS in Semantic Scholar\r
\r
**STEP 8.6-C: Generate References Section**\r
\r
Create the \\\\begin{thebibliography} section with ONLY verified references:\r
\r
\`\`\`latex\r
\\\\begin{thebibliography}{99}\r
\r
\\\\bibitem{Davis1989} Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. \\\\textit{MIS Quarterly}, 13(3), 319-340.\r
\r
\\\\bibitem{VenkMorDav2003} Venkatesh, V., Morris, M. G., Davis, G. B., \\\\& Davis, F. D. (2003). User acceptance of information technology: Toward a unified view. \\\\textit{MIS Quarterly}, 27(3), 425-478.\r
\r
% Only include references that were found in Semantic Scholar\r
\r
\\\\end{thebibliography}\r
\`\`\`\r
\r
**APA 7TH EDITION FORMAT REQUIREMENTS:**\r
- Author format: LastName, F. M., \\\\& LastName, F. M.\r
- Year in parentheses: (2020).\r
- Article title in sentence case\r
- Journal name in italics: \\\\textit{MIS Quarterly}\r
- Volume in italics: \\\\textit{44}(2), 523-548.\r
- Use \\\\& for multiple authors (not "and")\r
\r
**VERIFICATION CHECKLIST:**\r
□ All \\cite{} keys have matching \\bibitem{} entries\r
□ All references verified via Semantic Scholar API\r
□ No fabricated/placeholder references\r
□ Consistent APA 7th Edition formatting\r
□ References that couldn't be found were removed from text\r
\r
**DELIVERABLE:**\r
- Complete References section with only verified citations in APA format\r
\r
---\r
\r
## STEP 9: FINAL SUBMISSION PREPARATION\r
\r
⚠️ CRITICAL: FIGURE RENDERING VERIFICATION\r
\r
**Compilation:**\r
Run pdflatex twice to resolve references\r
\r
**Verify Figures RENDERED (not placeholders) - Use ALL 4 methods:**\r
\r
**Method 1 - Check Compilation Output:**\r
Look for: [11 <../Results/fig1.png>], [12 <../Results/fig2.png>]\r
If see "File not found" → Use Glob to find files, update paths, recompile\r
\r
**Method 2 - Check PDF File Size:**\r
- <350KB = likely no images (PROBLEM)\r
- >450KB = images embedded (GOOD)\r
\r
**Method 3 - Check Log for Warnings:**\r
\`\`\`\r
grep -i "not found" *.log\r
\`\`\`\r
If warnings found → Fix paths and recompile\r
\r
**Method 4 - Count Inclusions:**\r
\`\`\`\r
grep "includegraphics" *.tex | wc -l\r
\`\`\`\r
Should match number of figures\r
\r
**RECOVERY PROCEDURE - If Figures Are Placeholder Boxes:**\r
\r
If after compilation you see placeholder boxes instead of images:\r
\r
1. **Diagnose the problem:**\r
   Check compilation output for "File not found" warnings\r
   Note which files are missing\r
\r
2. **Find actual file locations:**\r
   For each missing file, use Glob:\r
   Glob: **/fig1_main_comparison.png\r
\r
   Record where files actually are\r
\r
3. **Calculate correct relative paths:**\r
   From: {ICIS_PATH}\\Paper\\icis_paper_{participantId}_v1.tex\r
   To: {ICIS_PATH}\\Results\\fig1.png\r
   Path: ../Results/fig1.png\r
\r
4. **Update ALL figure paths in LaTeX:**\r
   Use Edit tool to update each \\includegraphics path:\r
\r
   Find: \\includegraphics{Results/old_path/fig1.png}\r
   Replace: \\includegraphics{../Results/fig1.png}\r
\r
   Repeat for each figure\r
\r
5. **Recompile and verify:**\r
   Run: pdflatex icis_paper_{participantId}_v1.tex\r
   Check for: [11 <../Results/fig1.png>]\r
   Verify: No "File not found" warnings\r
\r
6. **Check PDF file size:**\r
   Should increase from ~300KB to ~500KB\r
   Confirms images are now embedded\r
\r
7. **Visual check (if possible):**\r
   Open PDF and verify images display, not boxes\r
\r
Only proceed to final submission when ALL figures render correctly\r
\r
**Final Checklist:**\r
□ Core files: paper (.tex + .pdf), figures (high-res), bibliography\r
□ Supplementary: code, results, analyses, README\r
□ References compile (no "?" in PDF)\r
□ Page count correct\r
□ All claims supported\r
□ Figures/tables referenced\r
□ No compilation warnings\r
\r
DELIVERABLE: Publication-ready PDF\r
\r
---\r
\r
## EXECUTION WORKFLOW\r
\r
1. Initialize: Read transcript, determine research type\r
2. Plan: Create todo list, track progress\r
3. Implement: Follow steps 1-9 sequentially\r
4. Verify: Test code, compile LaTeX\r
5. Iterate: Address issues before proceeding\r
6. Finalize: Ensure PDF includes all figures\r
\r
**Key Points:**\r
- Use python3 for Python execution\r
- Generate realistic synthetic data\r
- Include figures in final compilation\r
- Save results with timestamps\r
- Track progress with TodoWrite tool\r
\r
---\r
\r
## COMMON PITFALLS - FIGURE RENDERING\r
\r
### Pitfall 1: Figures Appear as Boxes in PDF\r
\r
**Symptoms:**\r
- LaTeX compiles "successfully"\r
- PDF created but shows boxes with captions instead of images\r
- PDF file size is small (<350 KB)\r
\r
**Cause:** Figure file paths in \\includegraphics{...} don't match actual file locations. LaTeX creates placeholder boxes when files aren't found.\r
\r
**Solution:**\r
1. Use Glob to find where figures actually are: **/fig*.png\r
2. Note the exact paths returned\r
3. Calculate relative path from Paper/ to the figures:\r
   - If figures are in: {ICIS_PATH}\\Results\\fig1.png\r
   - And paper is in: {ICIS_PATH}\\Paper\\icis_paper_{participantId}_v1.tex\r
   - Relative path is: ../Results/fig1.png\r
4. Use Edit tool to update ALL \\includegraphics paths:\r
   - Find: \\includegraphics{Results/old_path/fig1.png}\r
   - Replace: \\includegraphics{../Results/fig1.png}\r
5. Recompile and check output for: [page <../Results/fig1.png>]\r
6. Verify PDF size increases (should be >450 KB)\r
\r
---\r
\r
### Pitfall 2: Paths Work on First Run, Break on Subsequent Builds\r
\r
**Symptoms:**\r
- Figures worked perfectly initially\r
- Later builds show placeholder boxes\r
- No changes were made to figure files\r
\r
**Cause:** Hardcoded timestamp paths like Results/experiment_20251118_154951/. New experiment runs create new timestamps, making old paths invalid.\r
\r
**Solution - For Current Paper:**\r
1. Find where figures currently are: Glob **/fig*.png\r
2. Update to current paths using Edit tool\r
\r
**Prevention - For Future:**\r
- Never use timestamped paths in LaTeX\r
- Always use latest non-timestamped paths\r
- Use relative paths: ../Results/\r
- Or copy figures to stable location (just Results/) if needed\r
\r
---\r
\r
### Pitfall 3: Verification Says "Complete" But Figures Missing\r
\r
**Symptoms:**\r
- Verification checklist all marked ✓\r
- But PDF still has placeholder boxes instead of images\r
\r
**Cause:** Verification only checked \\label{fig:} existence, didn't verify actual image files or PDF rendering.\r
\r
**Solution - Complete Verification Requires ALL 5:**\r
1. Label count: grep "\\\\label{fig:"  ✓ Checks references exist\r
2. File existence: Glob <path-from-includegraphics>  ✓ Checks image files exist\r
3. Compilation check: Look for [page <path>] in output  ✓ Checks LaTeX found files\r
4. File size check: PDF should be >450 KB with images  ✓ Checks images embedded\r
5. Warning check: grep "not found" *.log should return nothing  ✓ Checks no errors\r
\r
Only mark verification complete when ALL 5 pass, not just #1.\r
\r
---\r
\r
# APPENDIX A: UNIVERSAL RESEARCH RULES\r
\r
Apply to ALL steps:\r
\r
## Data & Results Integrity\r
✅ Explicitly state what was/wasn't executed\r
✅ Label synthetic data and generation method\r
✅ Document seeds, generators, parameters\r
✅ Point to verifiable sources\r
❌ Don't fabricate results/runs/experiments\r
❌ Don't represent synthetic as real without validation\r
❌ Don't cherry-pick or omit contradictory evidence\r
\r
## Assumptions & Theory\r
✅ Justify assumptions with IS/economic theory references\r
✅ Define boundary conditions explicitly\r
✅ Explain variable interactions\r
✅ Link to established theory\r
❌ Don't use unsubstantiated assumptions\r
❌ Don't generalize beyond stated scope\r
❌ Don't omit key derivation steps\r
\r
## Literature & Citations\r
✅ Cite specific, checkable sources\r
✅ Quote/summarize with clear attribution\r
✅ Use only peer-reviewed sources\r
✅ Include contradictory literature\r
❌ Don't hallucinate papers/authors/venues/years\r
❌ Don't paraphrase without reference\r
❌ Don't cite generic web pages when primary sources exist\r
\r
## Reproducibility\r
✅ Provide complete specifications\r
✅ Share data/materials/code (or explain constraints)\r
✅ Document tools, versions, configurations\r
✅ Include access paths and run guides\r
❌ Don't omit critical implementation details\r
❌ Don't skip verification steps\r
❌ Don't withhold information needed for replication\r
\r
---\r
\r
# APPENDIX C: RESEARCH QUALITY STANDARDS\r
\r
## C.1 Simulation & Computational Modeling\r
\r
- **Model fit:** Justify why simulation appropriate and which class\r
- **Specification:** Complete description (entities, states, processes, initialization)\r
  - For ABM: Follow ODD protocol (Overview, Design concepts, Details)\r
- **Assumptions:** Explicit, tied to theory/sources, explain abstractions\r
- **Verification/Validation:** Unit tests, extreme cases, stylized facts, empirical patterns\r
- **Calibration:** Transparent procedures, face validity, benchmark comparisons\r
- **Experiment design:** Pre-specify factors/metrics, sufficient replications, sensitivity analysis\r
- **Theory linkage:** Connect to IS theory, generate propositions, discuss boundaries\r
- **Reproducibility:** Release code, configs, seeds, data, run guide\r
\r
## C.2 Analytical & Theoretical Modeling\r
\r
- **Purpose:** Begin from documented IS puzzle/stylized fact\r
- **Assumptions:** Minimal, transparent, economically/behaviorally interpretable\r
- **Mechanisms:** Show how assumptions produce results and comparative statics\r
- **Robustness:** Alternative structures, distributions, timing\r
- **Insights:** Translate to intuitions, visual aids, testable predictions\r
- **Soundness:** Complete proofs (or sketches + appendices), clean notation\r
- **Readability:** Focus main text on meaning, include roadmaps for intricate models\r
\r
## C.3 Laboratory & Field Experiments\r
\r
- **Theory first:** Define nomological network, align hypotheses/measures/analysis\r
- **Validity design:** Cognitive pretests, validated items, reliability checks\r
- **Pre-specification:** Register hypotheses, outcomes, analysis plan\r
- **Experimental type:** Explicit about lab/field/online, discuss tradeoffs\r
- **Randomization:** Document assignment, balance checks, compliance, manipulation checks\r
- **Metrics:** Business/behavior-relevant, define guardrails, avoid poor proxies\r
- **Power:** For unit of randomization, cluster-robust SEs\r
- **Replication:** Provide materials, scripts, stimuli, reproducibility package\r
\r
## C.4 Surveys, Questionnaires, Field Studies\r
\r
- **Theory first:** Define nomological network, align hypotheses/measures/analysis\r
- **Randomization:** Document assignment, balance checks, compliance, manipulation checks\r
- **Metrics:** Business/behavior-relevant, define guardrails, avoid poor proxies\r
- **Power:** For unit of randomization, cluster-robust SEs\r
- **Replication:** Provide materials, scripts, stimuli, reproducibility package\r
\r
---\r
\r
# APPENDIX D: WRITING STYLE GUIDE\r
\r
## Paragraph Development\r
- Target: 150-250 words (6-10 sentences)\r
- Develop ONE main idea thoroughly\r
- Use transition sentences between paragraphs\r
- Avoid choppy 1-2 sentence paragraphs\r
\r
## Subsection Minimization\r
- Use \\\\section{} only for major divisions\r
- Use \\\\subsection{} only when necessary\r
- NO \\\\subsubsection{} - integrate into flowing paragraphs\r
- Maximum 2 heading levels in most sections\r
\r
## Narrative Cohesion\r
- Transitional phrases: "Building on this," "Moreover," "Consequently"\r
- Signposting: "We now turn to," "Having established X"\r
- Link sentences with pronouns, synonyms, connecting phrases\r
\r
## Examples\r
\r
❌ **Fragmented:**\r
\`\`\`\r
\\\\subsubsection{Route 1}\r
Control enhances ownership.\r
\r
\\\\subsubsection{Route 2}\r
Familiarity breeds ownership.\r
\`\`\`\r
\r
✅ **Flowing:**\r
\`\`\`\r
Three routes develop psychological ownership. First, controlling the target enhances feelings as individuals exercise decisions over use. Second, intimately knowing develops through deep engagement and familiarity. Third, self-investment incorporates objects into extended self-concept.\r
\`\`\`\r
\r
---\r
\r
# APPENDIX E: KEY REFERENCES BY METHOD\r
\r
## E.1 Simulation\r
\r
**Agent-Based Modeling:**\r
Macal & North (2010), "Tutorial on agent-based modelling," J. Simulation\r
Kiesling et al. (2012), "Agent-based simulation of innovation diffusion," CEJOR\r
\r
**Discrete-Event:**\r
Banks et al. (2010), Discrete-Event System Simulation, Pearson\r
Law (2015), Simulation Modeling and Analysis, McGraw-Hill\r
\r
**System Dynamics:**\r
Sterman (2000), Business Dynamics, McGraw-Hill\r
Forrester (1961), Industrial Dynamics, MIT Press\r
\r
## E.2 Analytical Modeling\r
\r
Refer to ISR/MISQ editorials on theoretical contributions\r
\r
## E.3 Experimental Design\r
\r
Refer to experimental design standards in IS journals\r
\r
---\r
\r
# APPENDIX F: ICIS PAPER CALIBRATION GUIDE\r
\r
This appendix provides calibration guidance extracted from analysis of 11 exemplar ICIS 2024 papers. Use these patterns to ensure generated papers meet ICIS quality standards.\r
\r
## F.1 Structural Patterns (All Research Types)\r
\r
**Paper Length and Format:**\r
- Completed Research Papers: 15-17 pages (including references)\r
- All sections present, flowing narrative (no bullet points in body)\r
- 2-level heading structure only: \\section{} and \\subsection{}\r
\r
**Section Length Benchmarks (from exemplar papers):**\r
\r
| Section | Pages | Word Count | Key Elements |\r
|---------|-------|------------|--------------|\r
| Abstract | - | 250-300 words | Problem, method, findings, contribution |\r
| Introduction | 1.5-2 | 600-800 | Hook, gap, RQ, contributions (3-4), roadmap |\r
| Literature/Background | 2-3 | 800-1200 | Thematic organization, gap identification |\r
| Theoretical Framework | 1-2 | 500-800 | Theory basis, constructs, hypotheses |\r
| Methodology | 2-3 | 800-1200 | Design, data, measures, analysis plan |\r
| Results | 2-3 | 700-1000 | Statistical findings; figures/tables as needed for clarity |\r
| Discussion | 1.5-2 | 600-900 | Implications (theoretical + practical), limitations |\r
| Conclusion | 0.5-1 | 200-400 | Summary, contributions, future research |\r
| References | 1-2 | 40-60 citations | APA format, recent + foundational |\r
\r
## F.2 Introduction Patterns\r
\r
**Opening Hook Patterns (from exemplars):**\r
- Start with concrete phenomenon or statistic that motivates research\r
- Example pattern: "[Domain] has witnessed [significant trend/phenomenon], yet [gap remains]."\r
- Avoid generic openings; be specific to research context\r
\r
**Research Gap Articulation:**\r
- Explicitly state what prior research has NOT addressed\r
- Use language: "However, prior research has largely overlooked...", "Despite this importance, we lack understanding of..."\r
- Connect gap to practical significance\r
\r
**Contribution Statement Pattern (exemplar structure):**\r
\`\`\`\r
This paper makes [three/four] contributions to IS research. First, we [primary theoretical contribution]. Second, we [methodological or additional theoretical contribution]. Third, we [practical/empirical contribution]. [Optional: Fourth, we...]\r
\`\`\`\r
\r
**Roadmap Pattern:**\r
- Final paragraph of introduction\r
- One sentence per remaining section\r
- Example: "The remainder of this paper is organized as follows. Section 2 reviews... Section 3 presents... Section 4 describes... Section 5 reports... Section 6 discusses... Section 7 concludes."\r
\r
## F.3 Theoretical Framework Patterns\r
\r
**Theory Selection (from 11 exemplars):**\r
Successful papers anchor in established theories:\r
- Power-Dependence Theory (social exchange contexts)\r
- Theory of Effective Use (technology adoption/usage)\r
- Self-Determination Theory (motivation, autonomy)\r
- Protection Motivation Theory (security behaviors)\r
- Signaling Theory (information asymmetry contexts)\r
- Information Processing Theory (cognitive load, attention)\r
- Platform Entrepreneurship Theory (digital platform contexts)\r
- Organizational Learning Theory (learning, exploration/exploitation)\r
- Resource-Based View (strategic capabilities)\r
\r
**Hypothesis Development Pattern:**\r
1. State theoretical premise (with citations)\r
2. Apply to research context\r
3. Derive logical prediction\r
4. State formal hypothesis (H1, H2, etc.)\r
\r
Example structure:\r
\`\`\`\r
According to [Theory] (Author, Year), [theoretical mechanism]. In the context of [research domain], this suggests that [application to context]. Therefore, we hypothesize:\r
\r
H1: [Independent variable] is [positively/negatively] associated with [dependent variable].\r
\`\`\`\r
\r
## F.4 Methodology Patterns by Research Type\r
\r
### Empirical/Quantitative Research:\r
- Sample size justification (power analysis or precedent)\r
- Measurement scales with reliability (Cronbach's alpha ≥ 0.70)\r
- Control variables explicitly listed and justified\r
- Analysis techniques matched to hypotheses\r
\r
### Qualitative Research:\r
- Sampling strategy (purposive, theoretical)\r
- Interview protocol or observation guide\r
- Coding process (open, axial, selective for grounded theory)\r
- Trustworthiness measures (member checking, triangulation)\r
\r
### Design Science Research:\r
- Clear problem identification and motivation\r
- Design objectives derived from problem\r
- Artifact description and development process\r
- Demonstration and evaluation methods\r
- Contribution to knowledge base\r
\r
### Computational/Simulation Research:\r
- Model specification (parameters, assumptions)\r
- Validation approach (stylized facts, empirical patterns)\r
- Sensitivity analysis plan\r
- Reproducibility details (seeds, configurations)\r
\r
### Experimental Research:\r
- Experimental design (between/within subjects)\r
- Randomization procedure\r
- Manipulation checks\r
- Balance tests for conditions\r
\r
## F.5 Results Presentation Patterns\r
\r
**Table Standards (from exemplars):**\r
- Table 1: Descriptive statistics (means, SDs, correlations)\r
- Table 2+: Hypothesis test results (coefficients, SEs, p-values)\r
- Clear column headers with variable names\r
- Notes explaining significance levels (*** p<0.01, ** p<0.05, * p<0.10)\r
- Effect sizes where appropriate (Cohen's d, R², η²)\r
\r
**Figure Standards:**\r
- Figure 1: Research model/theoretical framework\r
- Additional figures: Key results visualization\r
- Clear axis labels and legends\r
- Publication quality (300 DPI minimum)\r
- Referenced and discussed in text\r
\r
**Results Narrative Pattern:**\r
- Lead with overview of findings\r
- Report each hypothesis result systematically\r
- Use consistent language: "H1 was supported (β = X.XX, p < 0.01)"\r
- Discuss unexpected findings\r
- Connect to research questions\r
\r
## F.6 Discussion Patterns\r
\r
**Theoretical Implications Structure:**\r
\`\`\`\r
Our findings contribute to [theory/literature] in several ways. First, [contribution 1 with connection to prior work]. This extends [prior finding] by showing [how this study advances understanding]. Second, [contribution 2]...\r
\`\`\`\r
\r
**Practical Implications Structure:**\r
\`\`\`\r
For practitioners, our findings suggest [actionable recommendation 1]. Specifically, [detailed guidance]. Additionally, [recommendation 2]...\r
\`\`\`\r
\r
**Limitations Pattern (honest but not undermining):**\r
- Acknowledge genuine limitations\r
- Suggest how future research can address them\r
- Example: "While our [sample/method] provides [advantages], future research could extend these findings by [addressing limitation]."\r
\r
## F.7 Quality Benchmarks (from MISQ Review Criteria)\r
\r
**Contribution Assessment:**\r
- Does it address important IS problems?\r
- Is the work intellectually novel?\r
- Will it have significant impact?\r
\r
**Theoretical Development:**\r
- Is the theory well-justified and aligned with RQ?\r
- Are claims substantiated with logic and evidence?\r
\r
**Methodological Rigor:**\r
- Is research design appropriate for questions asked?\r
- Are methods executed properly?\r
\r
**Clarity and Presentation:**\r
- Is the work coherent and well-organized?\r
- Is writing clear and accessible?\r
\r
## F.8 Common Quality Issues to Avoid\r
\r
**Fatal Issues (render paper unpublishable):**\r
- No clear contribution statement\r
- Theory-method misalignment\r
- Fabricated or unverifiable data\r
- Missing core sections\r
\r
**Major Issues (must address):**\r
- Weak theoretical grounding\r
- Insufficient sample size or data\r
- Improper statistical methods\r
- Overstated claims\r
\r
**Minor Issues (should address):**\r
- Unclear writing in places\r
- Missing details in methodology\r
- Incomplete literature review\r
- Formatting inconsistencies\r
\r
## F.9 Methodology-Specific Exemplar Patterns\r
\r
### Multimodal/ML Research Pattern:\r
- Problem: prediction/classification task in IS domain\r
- Method: deep learning architecture (CNN, LSTM, Transformer)\r
- Data: multimodal inputs (text, images, structured data)\r
- Evaluation: accuracy, F1, AUC with ablation studies\r
- Theory: connect ML approach to IS theory (e.g., Theory of Effective Use)\r
\r
### Analytical Modeling Pattern:\r
- Problem: strategic interaction or optimization\r
- Method: game theory, economic modeling\r
- Analysis: equilibrium derivation, comparative statics\r
- Validation: numerical examples or empirical data\r
- Contribution: novel theoretical insights\r
\r
### Qualitative/Grounded Theory Pattern:\r
- Problem: understanding emergent phenomenon\r
- Method: interviews (15-30 participants typical)\r
- Analysis: coding (open, axial, selective), constant comparison\r
- Output: theoretical framework or typology\r
- Validation: member checking, theoretical saturation\r
\r
### Design Science Pattern:\r
- Problem: identified practical problem\r
- Method: artifact design and development\r
- Evaluation: demonstration, experimental evaluation, or expert review\r
- Contribution: design principles, instantiation\r
\r
### Experimental Pattern:\r
- Problem: test causal relationships\r
- Method: factorial design, randomized assignment\r
- Analysis: ANOVA, regression, mediation/moderation\r
- Validation: manipulation checks, robustness tests\r
\r
## F.10 Reference Integration Patterns\r
\r
**Citation Density Benchmarks:**\r
- Introduction: 8-12 citations\r
- Literature Review: 25-35 citations\r
- Theoretical Framework: 10-15 citations\r
- Methodology: 8-12 citations (methods papers, scales)\r
- Discussion: 10-15 citations (comparing to prior work)\r
\r
**Citation Integration Styles:**\r
- Parenthetical: "Prior research has shown [finding] (Author, Year)."\r
- Narrative: "Author (Year) demonstrated that [finding]."\r
- Multiple sources: "Several studies have found [finding] (Author1, Year; Author2, Year; Author3, Year)."\r
\r
**Citation Recency Distribution (CRITICAL):**\r
- Recent papers (2020-2025): 60% minimum - current state of the field\r
- Established papers (2015-2019): 20-25% - bridge literature\r
- Foundational/seminal papers (pre-2015): 15-20% - theoretical grounding only\r
\r
⚠️ PRIORITIZE RECENT LITERATURE: The majority of citations should reflect the current state of research (2020-2025).\r
`,ex=`================================================================================\r
ICISreview - Paper Review and Oversight Generation\r
================================================================================\r
\r
PURPOSE:\r
Review the generated academic paper and create:\r
1. Detailed constructive feedback (feedback_{participantId}_v{N}.txt)\r
2. Oversight file with metrics for supervisor (oversight_{participantId}_v{N}.txt)\r
\r
WORKFLOW POSITION:\r
  ICISsetup -> ICISbuilder -> **ICISreview** -> ICISsupervisor -> ICISreviser (loop) OR ICISfinalize (exit)\r
\r
================================================================================\r
STEP 0: EXTRACT PARTICIPANT ID (Execute First)\r
================================================================================\r
\r
Before reviewing, extract the participantId:\r
\r
1. Use Glob to find the interview file:\r
   \`\`\`\r
   Glob: {ICIS_PATH}\\INTERVIEW_*.txt\r
   \`\`\`\r
\r
2. Extract {participantId} from filename:\r
   - Format: INTERVIEW_{participantId}_{timestamp}.txt\r
   - Example: \`INTERVIEW_maayan_university_edu_20241115_091230.txt\`\r
   - participantId = \`maayan_university_edu\`\r
\r
3. Find the paper to review:\r
   \`\`\`\r
   Glob: {ICIS_PATH}\\Paper\\icis_paper_{participantId}_v*.pdf\r
   \`\`\`\r
   Use the highest version number (latest paper)\r
\r
4. Determine current version number {N}:\r
   - If this is first review: N = 1\r
   - If previous oversight exists: N = highest version + 1\r
\r
================================================================================\r
STEP 1: REVIEW - Detailed Constructive Feedback\r
================================================================================\r
\r
**Persona:** Experienced reviewer in the field of Information Systems (IS)\r
\r
**Before reviewing:** Read 'reviewingMISQ.pdf' for IS review criteria\r
\r
**Goal:** Provide constructive feedback to help the author improve the paper\r
\r
**1. Read the paper completely**\r
\r
**2. Provide detailed feedback (2+ pages) covering:**\r
\r
a) **Research Question and Contribution:**\r
   - Is the question clear?\r
   - Is it important (why/why not)?\r
   - What contribution does answering the question represent?\r
   - Is it significant or incremental?\r
\r
b) **Method:**\r
   - Is the method well justified for the question?\r
   - Is the method applied convincingly?\r
   - Does it produce robust results that answer the question?\r
\r
c) **Potential Impact:**\r
   - Do results have relevant managerial or IS implications?\r
   - Does the method represent significant innovation?\r
   - What are the implications? Are they novel/significant?\r
\r
d) **Writing:**\r
   - Is clarity appropriate for a major conference?\r
   - Is articulation, logic, and exposition adequate?\r
\r
**3. Format suggestions as commands:**\r
   - "Do..." or "Do not do..."\r
   - "Use technique..."\r
   - "Strengthen..."\r
   - "Clarify..."\r
\r
**4. List Major Concerns (must be addressed):**\r
   - Theoretical gaps\r
   - Missing literature\r
   - Methodological concerns\r
   - Results interpretation problems\r
\r
**5. List Minor Corrections:**\r
   - Typos\r
   - Missing references\r
   - Formatting issues\r
\r
================================================================================\r
STEP 2: NUMERICAL ASSESSMENT (ReviewScores)\r
================================================================================\r
\r
Score each criterion from 1 (poor) to 5 (excellent) with justification:\r
\r
**reviewScores (1-5 scale):**\r
\r
1. **novelty:** How original is the work?\r
   - Score: ___\r
   - Comment: ___\r
\r
2. **significance:** How important are the results?\r
   - Score: ___\r
   - Comment: ___\r
\r
3. **methodologicalRigor:** Soundness of approach and analysis\r
   - Score: ___\r
   - Comment: ___\r
\r
4. **clarity:** Quality of writing, organization, figures\r
   - Score: ___\r
   - Comment: ___\r
\r
5. **relevance:** Fit for IS conferences/journals\r
   - Score: ___\r
   - Comment: ___\r
\r
**Calculate averageScore:** (sum of 5 scores) / 5\r
\r
================================================================================\r
STEP 3: ERROR INVENTORY (ErrorCounts)\r
================================================================================\r
\r
Count and categorize all errors found:\r
\r
**errorCounts:**\r
- majorErrors: Count of computational errors, logical flaws, critical issues\r
- minorErrors: Count of typos, formatting issues, missing references\r
\r
**errorDetails:**\r
- majorErrors: ["Description of error 1", "Description of error 2", ...]\r
- minorErrors: ["Typo on page X", "Missing reference Y", ...]\r
\r
================================================================================\r
STEP 4: TRUSTWORTHINESS ASSESSMENT (TrustworthinessScores)\r
================================================================================\r
\r
**New Persona:** Act as the author who was interviewed\r
\r
The paper was generated by ASD (automated scientific discovery) based on the interview at:\r
\`\`\`\r
Glob: {ICIS_PATH}\\INTERVIEW_{participantId}_*.txt\r
\`\`\`\r
\r
**Assess on scale 1-7:**\r
\r
1. **reliability (1-7):** Perceived reliability of ASD's process\r
   - How consistently did ASD produce accurate, valid outputs?\r
   - Use of appropriate data sources?\r
   - Rigorous research methods?\r
   - Accurate analysis and logical reasoning?\r
   - Minimal technical errors?\r
   - Score: ___\r
   - Rationale: ___\r
\r
2. **benevolence (1-7):** Perceived benevolence of ASD\r
   - Integrity and transparency?\r
   - Fairness and helpfulness?\r
   - Avoidance of manipulative behavior?\r
   - Score: ___\r
   - Rationale: ___\r
\r
3. **goalAlignment (1-7):** Alignment with stated research objectives\r
   - Precisely aligned with interview objectives?\r
   - Maintained topical relevance?\r
   - Adapted to feedback?\r
   - Abided by academic values and ethical standards?\r
   - Score: ___\r
   - Rationale: ___\r
\r
================================================================================\r
STEP 5: CRITICAL ALERTS\r
================================================================================\r
\r
Identify ONLY critical/blocking issues that require immediate attention:\r
\r
**criticalAlerts:** (array of objects, or empty if none)\r
\r
For each critical alert:\r
\`\`\`json\r
{\r
  "number": 1,\r
  "title": "Brief title of the issue",\r
  "status": "Open",\r
  "impact": "High",\r
  "details": "Detailed description of the problem",\r
  "actionRequired": "What must be done to fix it",\r
  "consequence": "What happens if not fixed"\r
}\r
\`\`\`\r
\r
**DO NOT include:**\r
- Moderate issues\r
- Minor suggestions\r
- Progress notes\r
\r
================================================================================\r
STEP 6: CHECK FOR PREVIOUS OVERSIGHT (Version Progression)\r
================================================================================\r
\r
**Find previous oversight files:**\r
\`\`\`\r
Glob: {ICIS_PATH}\\Data\\oversight_{participantId}_v*.txt\r
\`\`\`\r
\r
**If previous versions exist:**\r
1. Read each previous oversight file\r
2. Extract their reviewScores and errorCounts\r
3. Build progression history:\r
   \`\`\`\r
   previousVersions: [\r
     { version: 1, reviewScores: {...}, errorCounts: {...} },\r
     { version: 2, reviewScores: {...}, errorCounts: {...} }\r
   ]\r
   \`\`\`\r
\r
**If no previous versions:** previousVersions = []\r
\r
================================================================================\r
STEP 7: CREATE OVERSIGHT FILE (JSON Format)\r
================================================================================\r
\r
**Write file:** {ICIS_PATH}\\Data\\oversight_{participantId}_v{N}.txt\r
\r
**CRITICAL: The oversight file MUST contain this exact JSON structure for ICISsupervisor to parse:**\r
\r
\`\`\`json\r
{\r
  "version": {N},\r
  "paperId": "{participantId}",\r
  "timestamp": "{ISO-8601 timestamp}",\r
  "paperFile": "icis_paper_{participantId}_v{N}.pdf",\r
\r
  "reviewScores": {\r
    "novelty": {1-5},\r
    "significance": {1-5},\r
    "methodologicalRigor": {1-5},\r
    "clarity": {1-5},\r
    "relevance": {1-5}\r
  },\r
  "reviewComments": {\r
    "novelty": "{brief comment}",\r
    "significance": "{brief comment}",\r
    "methodologicalRigor": "{brief comment}",\r
    "clarity": "{brief comment}",\r
    "relevance": "{brief comment}"\r
  },\r
  "averageScore": {calculated average},\r
\r
  "errorCounts": {\r
    "majorErrors": {count},\r
    "minorErrors": {count}\r
  },\r
  "errorDetails": {\r
    "majorErrors": ["{error1}", "{error2}"],\r
    "minorErrors": ["{error1}", "{error2}", "{error3}"]\r
  },\r
\r
  "trustworthiness": {\r
    "reliability": {1-7},\r
    "reliabilityRationale": "{one-sentence rationale}",\r
    "benevolence": {1-7},\r
    "benevolenceRationale": "{one-sentence rationale}",\r
    "goalAlignment": {1-7},\r
    "goalAlignmentRationale": "{one-sentence rationale}"\r
  },\r
\r
  "criticalAlerts": [\r
    {\r
      "number": 1,\r
      "title": "{alert title}",\r
      "status": "Open",\r
      "impact": "High",\r
      "details": "{detailed description}",\r
      "actionRequired": "{what to do}",\r
      "consequence": "{if unfixed}"\r
    }\r
  ],\r
\r
  "previousVersions": [\r
    {\r
      "version": 1,\r
      "reviewScores": { "novelty": 3, "significance": 3, ... },\r
      "errorCounts": { "majorErrors": 5, "minorErrors": 12 }\r
    }\r
  ],\r
\r
  "feedbackSummary": "{2-3 sentence summary of main feedback points}"\r
}\r
\`\`\`\r
\r
================================================================================\r
STEP 8: CREATE FEEDBACK FILE (Human-Readable)\r
================================================================================\r
\r
**Write file:** {ICIS_PATH}\\Data\\feedback_{participantId}_v{N}.txt\r
\r
**Format:**\r
\r
\`\`\`\r
================================================================================\r
PAPER REVIEW FEEDBACK\r
================================================================================\r
ID: {participantId}\r
Paper: icis_paper_{participantId}_v{N}.pdf\r
Version: {N}\r
Date: {timestamp}\r
================================================================================\r
\r
DETAILED CONSTRUCTIVE FEEDBACK\r
================================================================================\r
\r
[2+ pages of detailed feedback organized by:\r
- Research Question and Contribution\r
- Method\r
- Potential Impact\r
- Writing Quality]\r
\r
================================================================================\r
MAJOR CONCERNS (Must Address)\r
================================================================================\r
\r
1. {Major concern 1 with suggestion}\r
2. {Major concern 2 with suggestion}\r
...\r
\r
================================================================================\r
MINOR CORRECTIONS\r
================================================================================\r
\r
1. {Minor correction 1}\r
2. {Minor correction 2}\r
...\r
\r
================================================================================\r
NUMERICAL ASSESSMENT\r
================================================================================\r
\r
| Criterion             | Score | Comment                           |\r
|-----------------------|-------|-----------------------------------|\r
| Novelty               | {1-5} | {comment}                         |\r
| Significance          | {1-5} | {comment}                         |\r
| Methodological Rigor  | {1-5} | {comment}                         |\r
| Clarity               | {1-5} | {comment}                         |\r
| Relevance             | {1-5} | {comment}                         |\r
|-----------------------|-------|-----------------------------------|\r
| AVERAGE               | {avg} | {overall assessment}              |\r
\r
================================================================================\r
OVERALL ASSESSMENT\r
================================================================================\r
\r
{Brief summary of paper quality and readiness}\r
\r
================================================================================\r
\`\`\`\r
\r
================================================================================\r
STEP 9: VERIFICATION\r
================================================================================\r
\r
After creating both files, verify:\r
\r
1. **Oversight file exists:**\r
   \`\`\`\r
   Glob: {ICIS_PATH}\\Data\\oversight_{participantId}_v{N}.txt\r
   \`\`\`\r
   Confirm: "Created oversight file: oversight_{participantId}_v{N}.txt"\r
\r
2. **Feedback file exists:**\r
   \`\`\`\r
   Glob: {ICIS_PATH}\\Data\\feedback_{participantId}_v{N}.txt\r
   \`\`\`\r
   Confirm: "Created feedback file: feedback_{participantId}_v{N}.txt"\r
\r
3. **JSON is valid:** Oversight file contains valid JSON that can be parsed\r
\r
4. **Report completion:**\r
   \`\`\`\r
   Review Complete for {participantId} v{N}\r
\r
   Files created:\r
   - {ICIS_PATH}\\Data\\oversight_{participantId}_v{N}.txt (JSON metrics)\r
   - {ICIS_PATH}\\Data\\feedback_{participantId}_v{N}.txt (detailed feedback)\r
\r
   Summary:\r
   - Average Score: {averageScore}/5\r
   - Major Errors: {count}\r
   - Minor Errors: {count}\r
   - Critical Alerts: {count}\r
\r
   Next Step: Execute ICISsupervisor prompt\r
   \`\`\`\r
\r
================================================================================\r
THRESHOLDS (For Reference - Used by ICISsupervisor)\r
================================================================================\r
\r
| Metric                   | Threshold for "On Track" | Scale |\r
|--------------------------|--------------------------|-------|\r
| Review Score (average)   | >= 3.5                   | 1-5   |\r
| Trustworthiness (all 3)  | >= 5                     | 1-7   |\r
| Major Errors (per cycle) | <= 2                     | count |\r
| Critical Alerts          | none                     | count |\r
| Max Cycles               | 3                        | count |\r
\r
**Note:** The workflow allows maximum 3 cycles (1 build + 2 revisions).\r
After cycle 3, paper must be finalized regardless of scores.\r
\r
================================================================================\r
DELIVERABLES\r
================================================================================\r
\r
1. **feedback_{participantId}_v{N}.txt** - Human-readable detailed review\r
2. **oversight_{participantId}_v{N}.txt** - JSON metrics for ICISsupervisor\r
\r
Both files stored in: {ICIS_PATH}\\Data\\\r
\r
================================================================================\r
`,tx=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
\r
## STEP -1: EXTRACT PARTICIPANT ID (Execute First)\r
\r
**Before any other step, extract the participantId:**\r
1. Locate: INTERVIEW_{participantId}_{timestamp}.txt OR icis_paper_{participantId}_v{N}.tex\r
2. Extract {participantId} - the portion identifying this participant\r
   - Example: From \`icis_paper_maayan_university_edu_v2.tex\` → participantId = \`maayan_university_edu\`\r
3. Store this ID for use in ALL file references and outputs\r
\r
Verify that the following files exist in directory "icis" (using participantId):\r
- 'icisTemplate.txt' - template for writing a 16-page paper\r
- 'feedback_{participantId}_v*.txt' - feedback file for revision\r
- Previous paper version: icis_paper_{participantId}_v{N}.tex\r
- Existing figures in Results/ directory\r
- Existing code in Code/ directory\r
\r
**CALIBRATION:** Quality standards from 11 ICIS 2024 exemplar papers are embedded in APPENDIX E of this document. Use these patterns when revising to ensure paper maintains conference quality standards.\r
\r
# For running Python: Use 'py' on Windows, 'python3' on Linux/Mac\r
\r
---\r
\r
This revision workflow has 9 steps (-1 to 8) to execute consecutively. Step -1 and Step 0 are MANDATORY and CRITICAL for all revisions.\r
\r
**ALL STEPS:** Follow Universal Research Rules (see Appendix A at end of this file)\r
\r
---\r
\r
## MANDATORY STEP 0: READ AND PRESERVE PREVIOUS VERSION\r
\r
⚠️ CRITICAL: Before any revision work:\r
\r
1. **Locate Previous Paper (using participantId from Step -1):**\r
   - Use glob: **/icis_paper_{participantId}*.tex\r
   - Find highest version number (e.g., v2, v3)\r
\r
2. **Catalog ALL Content (create ContentInventory):**\r
   - Count tables: grep "\\\\label{tab:" → tableCount\r
   - Count figures: grep "\\\\label{fig:" → figureCount\r
   - Count sections: grep "\\\\section{" → sectionCount\r
   - Estimate page count: ~3000 chars per page → pageCount\r
   - List all table labels → tables[]\r
   - List all figure labels → figures[]\r
   - List all section names → sections[]\r
\r
3. **Create Inventory:**\r
   - Document: tableCount tables, figureCount figures, sectionCount sections, ~pageCount pages\r
\r
4. **Validate ALL Required Sections Exist:**\r
   Search for each required section header and verify content:\r
   \`\`\`\r
   grep "\\\\section{" icis_paper_{participantId}_v{N}.tex\r
   \`\`\`\r
\r
   **Required sections (check ALL present):**\r
   □ Introduction\r
   □ Literature Review (or Related Work)\r
   □ Theoretical Framework (or Theory)\r
   □ Methodology (or Method)\r
   □ **Results** (or Findings) - should have figures/tables that clarify findings (typically 2 figs + 1 table, but prioritize value over count)\r
   □ Discussion\r
   □ Conclusion\r
\r
   **If any section is MISSING in previous version:**\r
   - This is a critical error that must be fixed during revision\r
   - Add to RevisionPlan: "Add missing [section name] section"\r
   - Ensure the section is created with proper content (see STEP 8 Check 5 for requirements)\r
\r
**GOLDEN RULE:** Revisions ADD and IMPROVE—make the best effort not to subtract content (unless explicitly told)\r
\r
**REDUNDANCY AVOIDANCE RULE:** While adding content, avoid introducing redundancy. Do NOT repeat:\r
- Claims or arguments already stated elsewhere\r
- Ideas or concepts already explained\r
- Facts or findings already presented\r
- Explanations already given\r
- Instructions already provided\r
- Exact sequences of words (except proper names, labels, or technical terms)\r
\r
**Repetition is ALLOWED only when:**\r
1. **Emphasis:** Deliberately reinforcing a critical point\r
2. **Reminder:** Briefly recalling content from a previous section to orient the reader\r
3. **Expansion:** Building upon and extending prior content with new depth or detail\r
\r
**Pattern for legitimate repetition:**\r
- "As noted in Section X, [brief recap]. We now extend this by [new content]..."\r
- "Building on the theoretical foundation established earlier, [expansion]..."\r
\r
**MATHEMATICAL FORMULATION RULE:** If the original paper (from ICISbuilder) did NOT include a mathematical formulation section (Step 3 was skipped), do NOT add one during revision UNLESS:\r
- Critical feedback EXPLICITLY requests mathematical formulation, proofs, or novel algorithms\r
- Check for existing Code/mathematical_formulation.tex - if it doesn't exist, Step 3 was skipped in the original build\r
\r
**REVISION WORKFLOW (mini-steps within STEP 0):**\r
\r
a) Copy previous .tex → new version number\r
b) Use Edit tool (NOT Write tool) - preserves surrounding content\r
c) Preserve ALL empirical content (data). You may only change or improve tables, figures, and results based on feedback (review) if you preserve the original data and don't make up results. You may improve the analysis of the data based on feedback (review).\r
d) Verify preservation using checklist below\r
\r
**VERIFICATION CHECKLIST:**\r
Execute before calling any revision complete:\r
\r
□ Read previous version first\r
□ Count tables/figures: Previous = ___, Current = ___\r
□ Used Edit tool (not Write)\r
□ Verify figure PATHS correct (detailed check):\r
\r
  **Check 1 - Verify Figure PATHS (Not Just Labels):**\r
  1. Extract all figure paths from LaTeX:\r
     grep "includegraphics" <filename>.tex\r
\r
  2. For EACH path found, verify file exists:\r
     Use Glob with exact path from grep\r
\r
  3. If ANY file not found:\r
     - Use Glob to find where it actually is: **/figname.png\r
     - Update path in LaTeX using Edit tool\r
     - Re-verify until all paths resolve\r
\r
  4. Document findings:\r
     "Verified figure paths: [list each with ✓ or ✗]"\r
\r
  **Check 2 - Compile and Check for Figure Warnings:**\r
  1. Compile: pdflatex <filename>.tex\r
  2. Examine output for these patterns:\r
\r
     ✓ GOOD - Look for:\r
        [11 <../Results/fig1_main_comparison.png>]\r
        [12 <../Results/fig2_cold_vs_warm.png>]\r
\r
     ✗ BAD - Look for:\r
        "File \`...\` not found"\r
        "Package pdftex.def Error: File \`...' not found"\r
\r
  3. If BAD patterns found:\r
     - Use Glob to find correct paths: **/fig*.png\r
     - Update paths using Edit tool\r
     - Recompile\r
     - Verify BAD patterns gone\r
\r
  **Check 3 - Verify PDF File Size:**\r
  1. Check PDF size: dir <filename>.pdf (Windows) or ls -lh <filename>.pdf (Linux)\r
  2. Compare:\r
     - WITHOUT images: 250-350 KB\r
     - WITH images: 450-600 KB\r
  3. If <350 KB with 2+ figures:\r
     - Images NOT embedded\r
     - Return to Check 1, fix paths\r
□ Compile PDF and verify figures RENDERED:\r
  - Check compilation for: [page <../Results/fig.png>]\r
  - Check PDF file size (>450KB with images, <300KB without)\r
  - Check for warnings: grep "not found" *.log\r
  - If placeholder boxes: Fix paths using Glob, recompile\r
\r
If ANY checkbox unchecked, STOP and fix before proceeding.\r
\r
---\r
\r
## STEP 0.5: SYNTHETIC DATA GENERATION MODE (Conditional)\r
\r
**TRIGGER:** This step executes ONLY when supervisor clicks "Generate Synthetic Data" button.\r
This is indicated by the action mode being 'generateSyntheticData'.\r
\r
**CONTEXT:** For Experiment/Survey research (2D/2E) where:\r
- Data collection is planned but not yet available\r
- Paper was initially written as PARTIAL (no Results section)\r
- Supervisor decides synthetic data will strengthen the paper\r
\r
**Skip this step if:** Normal revision mode (action is 'revise')\r
\r
---\r
\r
### STEP 0.5-A: READ SYNTHETIC DATA GUIDELINES\r
\r
Read prompts/ICISsyntheticData.txt for detailed generation instructions.\r
\r
### STEP 0.5-B: EXTRACT RESEARCH MODEL FROM PAPER\r
\r
Extract from the current paper:\r
\r
1. **Research Questions and Hypotheses**\r
   - Identify H1, H2, H3... with their predicted relationships\r
   - Note direction (positive/negative) and expected effect sizes\r
\r
2. **Variables**\r
   - Independent variables (IVs)\r
   - Dependent variables (DVs)\r
   - Mediating variables (if any)\r
   - Moderating variables (if any)\r
   - Control variables\r
\r
3. **Expected Relationships**\r
   - Direction and strength from theoretical framework\r
   - Example: "X positively affects Y (β ≈ 0.3-0.5)"\r
\r
4. **Unit of Analysis and Population**\r
   - What entities the data represents\r
   - Target population characteristics\r
\r
### STEP 0.5-C: INCORPORATE REVIEWER FEEDBACK\r
\r
Read the latest feedback file for guidance on synthetic data:\r
- Reviewer concerns about empirical validation\r
- Specific hypotheses that need demonstration\r
- Control variables mentioned in feedback\r
- Effect size expectations from literature\r
\r
### STEP 0.5-D: GENERATE SYNTHETIC DATA\r
\r
**Sample Size:**\r
- Survey research: 150-300 respondents\r
- Experimental research: 80-200 participants (40-100 per condition)\r
\r
**Data Characteristics:**\r
- Likert scales (1-7): Slight negative skew typical (mean ~4.5-5.5)\r
- Effect sizes matching literature:\r
  - Small: r ≈ 0.10-0.15, β ≈ 0.10-0.20\r
  - Medium: r ≈ 0.25-0.35, β ≈ 0.25-0.40\r
  - Large: r ≈ 0.45-0.55, β ≈ 0.45-0.60\r
- R² values: 0.25-0.45 for main DVs (typical for IS behavioral models)\r
- Cronbach's α: 0.70-0.90 for scales\r
\r
**Hypothesized Relationships:**\r
- Generate data where H1, H2, H3... hold at p < 0.05\r
- Include realistic non-significant paths for non-hypothesized relationships\r
- Add realistic measurement error and individual variation\r
\r
**Create Output Files:**\r
- Data/synthetic_data_{participantId}.csv\r
- Data/synthetic_data_codebook_{participantId}.txt\r
- Data/synthetic_data_summary_{participantId}.txt\r
\r
### STEP 0.5-E: RUN STATISTICAL ANALYSIS\r
\r
1. **Compute Descriptive Statistics:**\r
   - Means, standard deviations for all variables\r
   - Correlation matrix\r
\r
2. **Test Hypotheses:**\r
   - Run regression/ANOVA appropriate for research design\r
   - Compute effect sizes, p-values, confidence intervals\r
\r
3. **Generate Results Figures:**\r
   - Research model with path coefficients\r
   - Key relationship visualizations\r
   - Save to Results/ directory\r
\r
### STEP 0.5-F: ADD RESULTS SECTION TO PAPER\r
\r
**Paper Transformation: PARTIAL → FULL**\r
\r
1. **Insert Results Section:**\r
   - Add after Methodology section\r
   - Include descriptive statistics table\r
   - Include hypothesis test results table\r
   - Include figures that clarify findings\r
\r
2. **Update Discussion Section:**\r
   - Interpret findings in light of hypotheses\r
   - Connect to theoretical implications\r
   - Note that data is synthetic\r
\r
3. **Add Transparency Statement:**\r
   Insert in Methodology or Results section:\r
   \`\`\`latex\r
   \\textit{Note: The empirical analysis presented in this paper uses synthetic data\r
   generated to demonstrate the proposed research model and analysis approach.\r
   The synthetic data was calibrated based on effect sizes and distributions\r
   reported in prior literature. Actual data collection is planned/in progress.}\r
   \`\`\`\r
\r
4. **Update Abstract:**\r
   - Add brief mention of empirical findings\r
   - Note synthetic data demonstration\r
\r
### STEP 0.5-G: VERIFICATION\r
\r
After synthetic data generation:\r
□ Synthetic data CSV file created\r
□ Codebook and summary files created\r
□ Results section added to paper\r
□ Discussion updated with findings interpretation\r
□ Transparency statement included\r
□ All figures/tables referenced in text\r
□ Paper now has 7 sections (including Results)\r
□ Page count: 14-16 pages (FULL paper)\r
\r
**DELIVERABLE:**\r
- Synthetic dataset in Data/ directory\r
- Updated paper with Results section (now FULL paper)\r
- Transparency statement included\r
\r
**NEXT:** After completing Step 0.5, proceed to Step 7 (Paper Revision) to verify and finalize.\r
\r
---\r
\r
## STEP 1: ANALYZE CONSTRUCTIVE FEEDBACK\r
\r
Read feedback_{participantId}_v*.txt file (latest version) and categorize feedback into FeedbackItems:\r
\r
**FeedbackItem structure:**\r
\`\`\`\r
{\r
  type: 'major' | 'minor' | 'suggestion',\r
  description: string,\r
  status: 'pending' | 'addressed' | 'declined',\r
  response?: string  // How it was addressed\r
}\r
\`\`\`\r
\r
1. **Major Issues** (type: 'major', must address):\r
   - Theoretical gaps\r
   - Missing literature\r
   - Methodological concerns\r
   - Results interpretation problems\r
   - Missing analyses\r
\r
2. **Minor Issues** (type: 'minor', should address):\r
   - Clarity improvements\r
   - Additional details needed\r
   - Better explanations\r
   - Formatting issues\r
\r
3. **Suggestions** (type: 'suggestion', optional):\r
   - Additional experiments\r
   - Extra comparisons\r
   - Alternative presentations\r
\r
DELIVERABLE: List of FeedbackItems with prioritized action items (all initially status: 'pending')\r
\r
---\r
\r
## STEP 2: PLAN REVISION STRATEGY\r
\r
Based on feedback analysis, create RevisionPlan:\r
\r
**RevisionPlan structure:**\r
\`\`\`\r
{\r
  contentAdditions: string[],      // What to add\r
  contentImprovements: string[],   // What to improve\r
  preservationCommitments: string[], // What must NOT change\r
  feedbackAddressed: FeedbackItem[]  // From Step 1\r
}\r
\`\`\`\r
\r
1. **contentAdditions[]:**\r
   - New literature to cite\r
   - Additional analyses to perform\r
   - New experiments to run (if needed)\r
   - Expanded discussions\r
\r
2. **contentImprovements[]:**\r
   - Sections to rewrite for clarity\r
   - Arguments to strengthen\r
   - Explanations to expand\r
\r
3. **preservationCommitments[]:**\r
   - "Preserve all X existing tables"\r
   - "Preserve all Y existing figures"\r
   - "Maintain all Z existing sections"\r
   - "Use Edit tool exclusively (never Write tool)"\r
\r
DELIVERABLE: Complete RevisionPlan with specific tasks linked to FeedbackItems\r
\r
---\r
\r
## STEP 3: LITERATURE ENHANCEMENT (if needed)\r
\r
**Execute if:** Feedback requests additional citations or theoretical grounding\r
\r
⚠️ CRITICAL: ALL references MUST be validated via Semantic Scholar API. NO fabricated references.\r
\r
**STEP 3-A: Identify Needed Citations**\r
\r
1. Identify missing literature based on feedback\r
2. List topics/concepts that need additional citations\r
\r
**STEP 3-B: Search and Validate via Semantic Scholar**\r
\r
For EACH new citation needed:\r
\r
1. **Search Semantic Scholar API:**\r
   \`\`\`python\r
   import requests\r
\r
   SCHOLAR_API_KEY = "YOUR_SEMANTIC_SCHOLAR_API_KEY"  # From .env\r
\r
   def search_reference(topic, year_range="2020-2024"):\r
       url = "https://api.semanticscholar.org/graph/v1/paper/search"\r
       params = {\r
           "query": f"{topic} information systems",\r
           "limit": 5,\r
           "fields": "title,authors,year,venue,journal,citationCount"\r
       }\r
       headers = {"x-api-key": SCHOLAR_API_KEY}\r
       response = requests.get(url, params=params, headers=headers)\r
       return response.json()\r
   \`\`\`\r
\r
2. **Select best match** from results (prefer high citations, top-tier venues)\r
\r
3. **Format in APA 7th Edition:**\r
   \`\`\`\r
   Author, A. A., & Author, B. B. (Year). Title of article. \\textit{Journal Name}, volume(issue), pages.\r
   \`\`\`\r
\r
4. **If topic has NO valid papers in Semantic Scholar:**\r
   - Try alternative search terms\r
   - If still not found: DO NOT cite - rephrase the text to not require citation\r
\r
**STEP 3-C: Integrate Citations**\r
\r
1. Use Edit tool to add \\cite{} commands to existing paragraphs\r
2. Add corresponding \\bibitem{} entries to bibliography\r
\r
**STEP 3-D: Validate All References**\r
\r
Before proceeding, verify:\r
□ All new \\cite{} keys have matching \\bibitem{} entries\r
□ All references verified via Semantic Scholar API\r
□ No fabricated/placeholder references\r
□ Consistent APA 7th Edition formatting\r
\r
**REFERENCE FORMAT (APA 7th Edition):**\r
- Author format: LastName, F. M., \\& LastName, F. M.\r
- Year in parentheses: (2020).\r
- Article title in sentence case\r
- Journal name in italics: \\textit{MIS Quarterly}\r
- Volume in italics: \\textit{44}(2), 523-548.\r
- Use \\& for multiple authors (not "and")\r
\r
**CRITICAL:** Use Edit tool to add citations to existing paragraphs. Never rewrite entire sections. Never include references that cannot be verified in Semantic Scholar.\r
\r
DELIVERABLE: Enhanced literature review with verified citations integrated in APA format\r
\r
---\r
\r
## STEP 4: ADDITIONAL ANALYSIS (if needed)\r
\r
**Execute if:** Feedback requests new experiments, tests, or analyses\r
\r
**⚠️ MATHEMATICAL FORMULATION CHECK:**\r
Before adding any new mathematical content, verify:\r
1. Check if Code/mathematical_formulation.tex exists from original build\r
2. If it does NOT exist AND feedback does not EXPLICITLY request mathematical formulation → Do NOT add mathematical formulation\r
3. If it DOES exist → You may enhance existing formulation based on feedback\r
4. Only add NEW mathematical formulation if feedback EXPLICITLY requires it (e.g., "needs formal proofs", "add algorithmic specification")\r
\r
**Steps:**\r
1. Review existing code in Code/ directory\r
2. Implement additional analyses (new Python scripts)\r
3. Run new experiments\r
4. Generate new figures/tables if needed\r
5. Document results\r
\r
**Required New Figures (if generating new analyses):**\r
- Data analysis visualizations (distributions, correlations, comparisons)\r
- Results figures showing new findings with statistical indicators\r
- Each new figure must be publication-quality (300 DPI, clear labels)\r
\r
**File locations:**\r
- New code → Code/ directory\r
- New results → Results/ directory\r
- New figures → Results/ directory (as .png and .pdf)\r
\r
**CRITICAL:** Verify new figure paths using Glob before writing LaTeX\r
\r
**CRITICAL:** All new figures MUST be:\r
1. Added to the Results section of the paper\r
2. Referenced in the text (e.g., "As shown in Figure X...")\r
3. Discussed with interpretation of what the figure shows\r
\r
DELIVERABLE: New analysis results ready for integration\r
\r
---\r
\r
## STEP 5: METHODOLOGY CLARIFICATION (if needed)\r
\r
**Execute if:** Feedback questions methodology or requests more detail\r
\r
1. Locate methodology section in previous version\r
2. Use Edit tool to add clarifications\r
3. Add subsections if needed (using \\\\subsection{})\r
4. Include additional details about:\r
   - Data collection\r
   - Experimental procedures\r
   - Statistical methods\r
   - Validation approaches\r
\r
**CRITICAL:** Use Edit tool for targeted additions, not full rewrites\r
\r
DELIVERABLE: Enhanced methodology section\r
\r
---\r
\r
## STEP 6: RESULTS AND DISCUSSION ENHANCEMENT\r
\r
Based on feedback, enhance results and discussion:\r
\r
1. **Locate sections to revise** in previous version\r
2. **Use Edit tool** to make targeted improvements:\r
   - Add missing interpretations\r
   - Strengthen theoretical connections\r
   - Expand implications\r
   - Address limitations more thoroughly\r
   - Add new results from STEP 4 (if applicable)\r
\r
3. **Preserve existing content:**\r
   - Keep all existing tables\r
   - Keep all existing figures\r
   - Maintain all existing results\r
   - Add, don't replace\r
\r
4. **If new figures were generated in STEP 4:**\r
   - Add \\includegraphics{} for each new figure in the Results section\r
   - Add figure caption explaining what the figure shows\r
   - Add text discussing the figure: "As shown in Figure X, the results indicate..."\r
   - Ensure figure is placed near the text that references it\r
\r
**FORBIDDEN:**\r
- Deleting existing results\r
- Removing existing figures/tables\r
- Rewriting entire sections from scratch\r
- Generating figures without including them in the paper\r
\r
**REQUIRED:**\r
- Use Edit tool for modifications\r
- Preserve paragraph structure\r
- Maintain narrative flow\r
- Add smoothly to existing content\r
- Include ALL new figures from STEP 4 in Results section with discussion\r
\r
DELIVERABLE: Enhanced results and discussion sections\r
\r
---\r
\r
## STEP 7: PAPER REVISION\r
\r
⚠️ CRITICAL: REVISION REQUIREMENTS\r
\r
**STEP 7.1 - VERIFY FIGURE PATHS BEFORE REVISING:**\r
\r
1. Extract all existing figure paths:\r
   grep "includegraphics" <previous-version>.tex\r
\r
2. For EACH path, verify file still exists:\r
   Use Glob with exact path\r
\r
3. If ANY file not found:\r
   - Find correct location: Glob **/figname.png\r
   - Note correct path for use in revised version\r
\r
**STEP 7.2 - CREATE NEW VERSION:**\r
\r
1. Copy previous version to new version number (replace {participantId} with actual ID):\r
   Windows: copy Paper\\icis_paper_{participantId}_v2.tex Paper\\icis_paper_{participantId}_v3.tex\r
   Linux: cp Paper/icis_paper_{participantId}_v2.tex Paper/icis_paper_{participantId}_v3.tex\r
\r
2. Read the new version file completely\r
\r
3. Use Edit tool ONLY for revisions:\r
   - Add new content based on feedback\r
   - Improve clarity of existing content\r
   - Add new citations\r
   - Integrate new results\r
   - Add new figures (with verified paths)\r
\r
**STEP 7.3 - INTEGRATION GUIDELINES:**\r
\r
**For New Figures:**\r
- Verify location first: Glob **/new_fig.png\r
- Calculate relative path from Paper/ directory\r
- Add using verified path: ../Results/new_fig.png\r
\r
**For Text Additions:**\r
- Use Edit tool to insert new paragraphs\r
- Maintain 150-250 word paragraph length\r
- Use transitional phrases\r
- Preserve surrounding content\r
\r
**For Clarifications:**\r
- Use Edit tool to expand existing explanations\r
- Add details without changing core message\r
- Keep existing structure\r
\r
**WRITING REQUIREMENTS:**\r
\r
**FORBIDDEN:**\r
- Using Write tool (destroys existing content)\r
- Deleting existing figures/tables\r
- Removing existing results\r
- Bullet points in body (except: data characteristics, criteria, conditions)\r
- Paragraphs <100 words\r
- \\\\subsubsection{} commands\r
\r
**REQUIRED:**\r
- Use Edit tool exclusively\r
- Paragraphs 150-250 words minimum\r
- Flowing narrative with transitions\r
- ONLY \\\\section{} and \\\\subsection{} headings\r
- Preserve all existing empirical content\r
\r
**PAGE REQUIREMENTS (consistent with ICISbuilder):**\r
- 14-16 pages total (all sections including Results, Discussion)\r
\r
**Academic Style:** See Appendix D for detailed guidelines\r
\r
**After revising, verify:**\r
□ Previous version read completely\r
□ Only Edit tool used (never Write)\r
□ All previous figures preserved\r
□ All previous tables preserved\r
□ All previous results preserved\r
□ New content added based on feedback\r
□ If new figures generated in STEP 4: ALL are included in Results section\r
□ Each new figure is referenced in text (e.g., "As shown in Figure X...")\r
□ Page count correct: 14-16 pages\r
□ Bullet points ≤ 3 locations\r
□ Average paragraph ≥ 150 words\r
□ No \\\\subsubsection{}\r
□ Smooth narrative flow\r
□ Figures compile (see compilation check below)\r
\r
**FIGURE COMPILATION CHECK:**\r
After first pdflatex run, verify:\r
- Look for: [page <../Results/fig1.png>] for EACH figure\r
- If "File not found" appears: Use Glob to find correct paths, Edit to update, recompile\r
- Check PDF size: Should be >450KB with images\r
- Compare to previous version figure count\r
\r
DELIVERABLE: Revised LaTeX paper with all improvements\r
\r
---\r
\r
## STEP 8: FINAL VERIFICATION AND COMPILATION\r
\r
⚠️ CRITICAL: COMPREHENSIVE VERIFICATION\r
\r
**Compilation:**\r
Run pdflatex twice to resolve references\r
\r
**Generate Verification Report comparing previous and current ContentInventory:**\r
\r
The verification report should check:\r
\r
**Check 1 - Content Preservation (compareFigureCounts, compareTableCounts):**\r
□ Figures: previousInventory.figureCount → currentInventory.figureCount (should not decrease)\r
□ Tables: previousInventory.tableCount → currentInventory.tableCount (should not decrease)\r
□ Pages: previousInventory.pageCount → currentInventory.pageCount\r
□ All empirical results still present\r
□ No content deleted (unless explicitly requested)\r
\r
**Check 2 - Figure Rendering (verifyFigureRendering, verifyPDFFileSize):**\r
□ Compilation output shows: [page <path>] for each figure\r
□ No "File not found" warnings\r
□ PDF file size thresholds:\r
  - WITHOUT images: 250-350 KB\r
  - WITH images: 450-600 KB\r
  - If <350 KB with 2+ figures: Images NOT embedded - fix paths!\r
□ All figures from previous version still render\r
□ New figures (if any) also render\r
\r
**Check 3 - Feedback Addressed (checkFeedbackAddressed):**\r
□ All major issues from feedbackAddressed[] have status: 'addressed'\r
□ Most minor issues addressed\r
□ Changes documented with response field in FeedbackItem\r
\r
**Check 4 - Quality Standards:**\r
□ Page count correct: 14-16 pages\r
□ References compile correctly\r
□ No \\\\subsubsection{} commands\r
□ Smooth narrative flow maintained\r
□ New content integrated smoothly\r
\r
**Check 5 - Section Content Validation (MANDATORY):**\r
\r
⚠️ CRITICAL: Verify ALL required sections exist and contain substantive content.\r
\r
**5a. Verify All Required Sections Exist:**\r
\`\`\`\r
grep "\\\\section{" icis_paper_{participantId}_v{N}.tex\r
\`\`\`\r
\r
Required sections (ALL must be present):\r
1. Introduction\r
2. Literature Review (or Related Work)\r
3. Theoretical Framework (or Theory)\r
4. Methodology (or Method)\r
5. **Results** (or Findings)\r
6. Discussion\r
7. Conclusion\r
\r
**5b. Validate Section Content Requirements:**\r
\r
| Section | Min Words | Typical Figs | Typical Tables | Required Elements |\r
|---------|-----------|--------------|----------------|-------------------|\r
| Introduction | 500 | - | - | Problem, gap, contributions |\r
| Literature Review | 800 | - | - | 15+ citations, themes |\r
| Theoretical Framework | 600 | - | - | Theory, hypotheses (H1, H2...) |\r
| Methodology | 600 | - | - | Design, data, measures |\r
| **Results** | **500** | **~2** | **~1** | **Statistical findings; visuals as needed for clarity** |\r
| Discussion | 400 | - | - | Implications, limitations |\r
| Conclusion | 200 | - | - | Summary, future research |\r
\r
**Note:** Figure/table counts are typical benchmarks, not rigid requirements. Include visuals only when they genuinely clarify findings or strengthen claims.\r
\r
**5c. Results Section Special Validation:**\r
The Results section MUST contain:\r
□ Statistical results (effect sizes, p-values, confidence intervals)\r
□ Interpretation connected to hypotheses\r
□ Figures/tables that clarify key findings (typically ~2 figs + ~1 table, adjust based on value)\r
□ Reference to each figure/table ("As shown in Figure 1...")\r
□ No redundant visuals - each should add unique value\r
\r
**Flexibility:** Do not add figures/tables merely to meet a count if they don't improve understanding.\r
\r
Count figures in Results:\r
\`\`\`\r
# Extract Results section and count figures\r
sed -n '/\\\\section{Results}/,/\\\\section{/p' icis_paper_{participantId}_v{N}.tex | grep -c "includegraphics"\r
\`\`\`\r
\r
**5d. Section Validation Checklist:**\r
□ All 7 sections present with headers\r
□ Introduction ≥500 words\r
□ Literature Review ≥800 words with ≥15 citations\r
□ Theoretical Framework ≥600 words with hypotheses\r
□ Methodology ≥600 words\r
□ **Results ≥500 words with appropriate figures/tables for clarity**\r
□ Discussion ≥400 words\r
□ Conclusion ≥200 words\r
□ Each figure/table adds unique value (no redundant visuals)\r
\r
**If ANY section is missing or below threshold:** STOP and add content before finalizing.\r
\r
**RECOVERY PROCEDURE - If Figures Are Placeholder Boxes:**\r
\r
If after compilation you see placeholder boxes instead of images:\r
\r
1. **Diagnose the problem:**\r
   Check compilation output for "File not found" warnings\r
   Note which files are missing\r
\r
2. **Find actual file locations:**\r
   For each missing file, use Glob:\r
   Glob: **/fig1_main_comparison.png\r
\r
   Record where files actually are\r
\r
3. **Calculate correct relative paths:**\r
   From: {ICIS_PATH}\\Paper\\icis_paper_{participantId}_v3.tex\r
   To: {ICIS_PATH}\\Results\\fig1.png\r
   Path: ../Results/fig1.png\r
\r
4. **Update ALL figure paths in LaTeX:**\r
   Use Edit tool to update each \\includegraphics path:\r
\r
   Find: \\includegraphics{Results/old_path/fig1.png}\r
   Replace: \\includegraphics{../Results/fig1.png}\r
\r
   Repeat for each figure\r
\r
5. **Recompile and verify:**\r
   Run: pdflatex icis_paper_{participantId}_v3.tex\r
   Check for: [11 <../Results/fig1.png>]\r
   Verify: No "File not found" warnings\r
\r
6. **Check PDF file size:**\r
   Should be >450KB if images embedded\r
   Compare to previous version size\r
\r
7. **Visual check (if possible):**\r
   Open PDF and verify images display, not boxes\r
\r
Only proceed when ALL figures render correctly\r
\r
**Final Deliverables:**\r
□ Revised paper (.tex + .pdf)\r
□ All figures rendered correctly\r
□ New code (if any) in Code/\r
□ New results (if any) in Results/\r
□ Response to reviewers document (optional)\r
\r
DELIVERABLE: Publication-ready revised PDF\r
\r
---\r
\r
## EXECUTION WORKFLOW (revision iteration)\r
\r
1. **Preserve:** Read previous version, catalog all content\r
2. **Analyze:** Understand feedback, prioritize issues\r
3. **Plan:** Create revision strategy\r
4. **Implement:** Make targeted improvements using Edit tool\r
5. **Verify:** Ensure nothing lost, everything renders\r
6. **Finalize:** Confirm all feedback addressed\r
\r
**Key Points:**\r
- ALWAYS use Edit tool for revisions\r
- NEVER use Write tool (destroys existing content)\r
- Preserve ALL existing empirical content\r
- Verify figure paths before and after revision\r
- Compare previous and current versions\r
- Track what was added, not replaced\r
\r
---\r
\r
## COMMON PITFALLS - REVISIONS\r
\r
### Pitfall 1: Using Write Tool Instead of Edit Tool\r
\r
**Symptoms:**\r
- Previous content completely replaced\r
- Figures/tables disappeared\r
- Results sections gone\r
- Bibliography wiped out\r
\r
**Cause:** Using Write tool creates entirely new file, destroying all previous work.\r
\r
**Prevention:**\r
- ALWAYS use Edit tool for revisions\r
- NEVER use Write tool on existing papers\r
- Read previous version first\r
- Make targeted edits only\r
\r
**Recovery:**\r
- If content lost, start over from previous version\r
- Copy previous version to new name\r
- Use Edit tool exclusively\r
\r
---\r
\r
### Pitfall 2: Figure Paths Break During Revision\r
\r
**Symptoms:**\r
- Figures worked in v2\r
- Figures show as boxes in v3\r
- No new experiments run\r
- Same figure files exist\r
\r
**Cause:**\r
- Copied old paths with hardcoded timestamps\r
- Used absolute paths\r
- Didn't verify paths before revising\r
\r
**Solution:**\r
1. Before revising, extract all paths: grep "includegraphics"\r
2. Verify each path: Glob <path>\r
3. Update any broken paths before revising\r
4. Use relative paths: ../Results/\r
5. Test compilation before adding new content\r
\r
---\r
\r
### Pitfall 3: Deleting Content "To Make Room"\r
\r
**Symptoms:**\r
- Previous figures/tables removed\r
- Results sections shortened\r
- Experiments deleted\r
- Paper got shorter instead of longer\r
\r
**Cause:** Misunderstanding that revisions should ADD, not replace.\r
\r
**Prevention:**\r
- Revisions ADD and IMPROVE\r
- Only delete if explicitly requested in feedback\r
- Compress existing content if needed, don't delete\r
- Use Edit tool to insert new content alongside old\r
\r
**Recovery:**\r
- Restore deleted content from previous version\r
- Integrate rather than replace\r
- If page limit exceeded, compress discussion, not results\r
\r
---\r
\r
### Pitfall 4: Rewriting Entire Sections\r
\r
**Symptoms:**\r
- Entire sections replaced with new text\r
- Original argument structure lost\r
- Reviewers can't see what changed\r
- Existing citations removed\r
\r
**Cause:** Over-revision, rewriting instead of targeted improvements.\r
\r
**Prevention:**\r
- Make minimal targeted changes\r
- Address specific feedback points\r
- Preserve argument structure\r
- Add to existing paragraphs, don't replace\r
- Use Edit tool for surgical changes\r
\r
---\r
\r
# APPENDIX A: UNIVERSAL RESEARCH RULES\r
\r
Apply to ALL steps:\r
\r
## Data & Results Integrity\r
✅ Explicitly state what was/wasn't executed\r
✅ Label synthetic data and generation method\r
✅ Document seeds, generators, parameters\r
✅ Point to verifiable sources\r
❌ Don't fabricate results/runs/experiments\r
❌ Don't represent synthetic as real without validation\r
❌ Don't cherry-pick or omit contradictory evidence\r
\r
## Assumptions & Theory\r
✅ Justify assumptions with IS/economic theory references\r
✅ Define boundary conditions explicitly\r
✅ Explain variable interactions\r
✅ Link to established theory\r
❌ Don't use unsubstantiated assumptions\r
❌ Don't generalize beyond stated scope\r
❌ Don't omit key derivation steps\r
\r
## Literature & Citations\r
✅ Cite specific, checkable sources\r
✅ Quote/summarize with clear attribution\r
✅ Use only peer-reviewed sources\r
✅ Include contradictory literature\r
❌ Don't hallucinate papers/authors/venues/years\r
❌ Don't paraphrase without reference\r
❌ Don't cite generic web pages when primary sources exist\r
\r
## Reproducibility\r
✅ Provide complete specifications\r
✅ Share data/materials/code (or explain constraints)\r
✅ Document tools, versions, configurations\r
✅ Include access paths and run guides\r
❌ Don't omit critical implementation details\r
❌ Don't skip verification steps\r
❌ Don't withhold information needed for replication\r
\r
---\r
\r
# APPENDIX B: REVISION-SPECIFIC BEST PRACTICES\r
\r
## Golden Rules for Revisions\r
1. **Preserve First:** Always read and catalog existing content before making changes\r
2. **Edit, Don't Rewrite:** Use Edit tool for surgical improvements, not wholesale replacements\r
3. **Add, Don't Subtract:** Revisions should make papers better by adding, not by removing\r
4. **Verify Constantly:** Check figure paths, content preservation, PDF rendering throughout\r
5. **Track Changes:** Document what was added and why\r
\r
## Common Revision Scenarios\r
\r
### Adding New Literature\r
**Do:** Use Edit tool to insert citations into existing paragraphs\r
**Don't:** Rewrite entire literature review from scratch\r
\r
### Addressing Methodology Concerns\r
**Do:** Use Edit tool to add clarifying details to existing methods section\r
**Don't:** Delete and rewrite methodology section\r
\r
### Adding New Results\r
**Do:** Create new subsection with Edit tool, add table/figure with verified paths\r
**Don't:** Replace existing results with new ones\r
\r
### Improving Clarity\r
**Do:** Use Edit tool to expand unclear sentences, add transitional phrases\r
**Don't:** Rewrite entire sections in different style\r
\r
### Strengthening Arguments\r
**Do:** Use Edit tool to add supporting evidence, additional citations\r
**Don't:** Remove existing arguments and write new ones\r
\r
---\r
\r
# APPENDIX C: RESEARCH QUALITY STANDARDS\r
\r
## C.1 Simulation & Computational Modeling\r
\r
- **Model fit:** Justify why simulation appropriate and which class\r
- **Specification:** Complete description (entities, states, processes, initialization)\r
  - For ABM: Follow ODD protocol (Overview, Design concepts, Details)\r
- **Assumptions:** Explicit, tied to theory/sources, explain abstractions\r
- **Verification/Validation:** Unit tests, extreme cases, stylized facts, empirical patterns\r
- **Calibration:** Transparent procedures, face validity, benchmark comparisons\r
- **Experiment design:** Pre-specify factors/metrics, sufficient replications, sensitivity analysis\r
- **Theory linkage:** Connect to IS theory, generate propositions, discuss boundaries\r
- **Reproducibility:** Release code, configs, seeds, data, run guide\r
\r
## C.2 Analytical & Theoretical Modeling\r
\r
- **Purpose:** Begin from documented IS puzzle/stylized fact\r
- **Assumptions:** Minimal, transparent, economically/behaviorally interpretable\r
- **Mechanisms:** Show how assumptions produce results and comparative statics\r
- **Robustness:** Alternative structures, distributions, timing\r
- **Insights:** Translate to intuitions, visual aids, testable predictions\r
- **Soundness:** Complete proofs (or sketches + appendices), clean notation\r
- **Readability:** Focus main text on meaning, include roadmaps for intricate models\r
\r
## C.3 Laboratory & Field Experiments\r
\r
- **Theory first:** Define nomological network, align hypotheses/measures/analysis\r
- **Validity design:** Cognitive pretests, validated items, reliability checks\r
- **Pre-specification:** Register hypotheses, outcomes, analysis plan\r
- **Experimental type:** Explicit about lab/field/online, discuss tradeoffs\r
- **Randomization:** Document assignment, balance checks, compliance, manipulation checks\r
- **Metrics:** Business/behavior-relevant, define guardrails, avoid poor proxies\r
- **Power:** For unit of randomization, cluster-robust SEs\r
- **Replication:** Provide materials, scripts, stimuli, reproducibility package\r
\r
## C.4 Surveys, Questionnaires, Field Studies\r
\r
- **Theory first:** Define nomological network, align hypotheses/measures/analysis\r
- **Randomization:** Document assignment, balance checks, compliance, manipulation checks\r
- **Metrics:** Business/behavior-relevant, define guardrails, avoid poor proxies\r
- **Power:** For unit of randomization, cluster-robust SEs\r
- **Replication:** Provide materials, scripts, stimuli, reproducibility package\r
\r
---\r
\r
# APPENDIX D: WRITING STYLE GUIDE\r
\r
## Paragraph Development\r
- Target: 150-250 words (6-10 sentences)\r
- Develop ONE main idea thoroughly\r
- Use transition sentences between paragraphs\r
- Avoid choppy 1-2 sentence paragraphs\r
\r
## Subsection Minimization\r
- Use \\\\section{} only for major divisions\r
- Use \\\\subsection{} only when necessary\r
- NO \\\\subsubsection{} - integrate into flowing paragraphs\r
- Maximum 2 heading levels in most sections\r
\r
## Narrative Cohesion\r
- Transitional phrases: "Building on this," "Moreover," "Consequently"\r
- Signposting: "We now turn to," "Having established X"\r
- Link sentences with pronouns, synonyms, connecting phrases\r
\r
## Avoiding Redundancy in Revisions\r
When adding new content during revision, check that you are not duplicating:\r
- Arguments already made in another section\r
- Explanations already provided\r
- Findings already reported\r
\r
**Before adding a paragraph, ask:** "Is this idea already stated elsewhere?"\r
- If YES and adding emphasis → Use: "As emphasized earlier..." (brief)\r
- If YES and expanding → Use: "Building on [prior point], we now explore..."\r
- If YES and neither → Do NOT add; instead, strengthen the original location\r
\r
## Examples\r
\r
❌ **Fragmented:**\r
\`\`\`\r
\\\\subsubsection{Route 1}\r
Control enhances ownership.\r
\r
\\\\subsubsection{Route 2}\r
Familiarity breeds ownership.\r
\`\`\`\r
\r
✅ **Flowing:**\r
\`\`\`\r
Three routes develop psychological ownership. First, controlling the target enhances feelings as individuals exercise decisions over use. Second, intimately knowing develops through deep engagement and familiarity. Third, self-investment incorporates objects into extended self-concept.\r
\`\`\`\r
\r
---\r
\r
# APPENDIX E: ICIS REVISION CALIBRATION GUIDE\r
\r
This appendix provides calibration guidance for revisions, extracted from analysis of 11 exemplar ICIS 2024 papers. Use these patterns to ensure revised papers meet ICIS quality standards.\r
\r
## E.1 Section Quality Benchmarks (Target Standards)\r
\r
When revising, ensure each section meets these quality thresholds derived from exemplar papers:\r
\r
| Section | Target Words | Target Citations | Quality Markers |\r
|---------|-------------|------------------|-----------------|\r
| Introduction | 600-800 | 8-12 | Clear hook, explicit gap, numbered contributions |\r
| Literature Review | 800-1200 | 25-35 | Thematic organization, synthesis not summary |\r
| Theory/Framework | 500-800 | 10-15 | Established theory base, logical hypothesis derivation |\r
| Methodology | 800-1200 | 8-12 | Replicable detail, justified design choices |\r
| Results | 700-1000 | 2-5 | Tables/figures, systematic hypothesis reporting |\r
| Discussion | 600-900 | 10-15 | Theory + practice implications, limitations |\r
| Conclusion | 200-400 | 0-2 | Summary, contributions recap, future directions |\r
\r
## E.2 Common Revision Feedback Categories\r
\r
Based on typical ICIS review feedback, prioritize revisions in this order:\r
\r
**1. Contribution Clarity (Most Critical)**\r
- Reviewers ask: "What is the contribution?"\r
- Fix: Add explicit contribution statement in introduction (3-4 numbered points)\r
- Pattern: "This paper makes three contributions to IS research. First, we [theoretical contribution]. Second, we [methodological contribution]. Third, we [practical contribution]."\r
\r
**2. Theoretical Grounding**\r
- Reviewers ask: "What theory justifies this?"\r
- Fix: Anchor research in established IS/behavioral/economic theory\r
- Pattern: Add theoretical lens section, derive hypotheses from theory\r
\r
**3. Methodological Rigor**\r
- Reviewers ask: "How was this done?"\r
- Fix: Add procedural details, justify design choices\r
- Pattern: Include sample justification, measure details, analysis rationale\r
\r
**4. Results Interpretation**\r
- Reviewers ask: "What do these findings mean?"\r
- Fix: Connect findings to hypotheses and prior literature\r
- Pattern: "H1 was supported (β = X.XX, p < 0.01), consistent with [prior work]"\r
\r
**5. Implications Development**\r
- Reviewers ask: "So what?"\r
- Fix: Develop theoretical AND practical implications\r
- Pattern: Numbered implications with specific guidance\r
\r
## E.3 Adding Content Without Disrupting Flow\r
\r
When feedback requires adding new content, use these integration patterns:\r
\r
**Adding Citations to Existing Paragraphs:**\r
\`\`\`\r
Original: "Prior research has examined this phenomenon."\r
Revised: "Prior research has examined this phenomenon (Smith et al., 2020; Jones, 2019), establishing that [key finding] while noting [limitation this paper addresses]."\r
\`\`\`\r
\r
**Expanding Methodology Details:**\r
\`\`\`\r
Original: "We collected data from participants."\r
Revised: "We collected data from 247 participants (54% female, mean age = 32.4, SD = 8.7) recruited through Prolific Academic, following power analysis indicating 200+ participants for detecting medium effects (Cohen's d = 0.5) at α = 0.05, power = 0.80."\r
\`\`\`\r
\r
**Strengthening Hypothesis Justification:**\r
\`\`\`\r
Original: "We hypothesize that X affects Y."\r
Revised: "Drawing on [Theory] (Author, Year), which posits that [mechanism], we expect [application to context]. The theoretical logic suggests that when [condition], individuals will [response], leading to [outcome]. Therefore: H1: X is positively associated with Y."\r
\`\`\`\r
\r
## E.4 Preserving Empirical Integrity During Revision\r
\r
**Never Change:**\r
- Reported statistical values (β, p, R², F)\r
- Sample sizes and demographics\r
- Measurement items\r
- Data collection procedures\r
\r
**Can Enhance:**\r
- Interpretation of results\r
- Additional analyses (robustness checks, post-hoc tests)\r
- Tables/figures for visualization\r
- Connection to literature\r
\r
**If Reviewer Requests Different Analysis:**\r
- Add new analysis as supplementary\r
- Keep original analysis intact\r
- Explain methodological choice\r
\r
## E.5 Addressing Limitations Constructively\r
\r
Exemplar pattern for limitations section:\r
\r
\`\`\`\r
While this study contributes to understanding of [topic], several limitations warrant discussion. First, [limitation 1] may affect [aspect]. Future research could address this by [mitigation]. Second, [limitation 2] constrains generalizability to [boundary condition]. Third, [limitation 3] suggests caution in interpreting [finding]. Despite these limitations, our findings provide [value] and establish a foundation for [future direction].\r
\`\`\`\r
\r
Key principles:\r
- Acknowledge genuine limitations honestly\r
- Suggest how future research can address them\r
- End on constructive note about study's value\r
- Avoid defensive language\r
\r
## E.6 Theory Integration Patterns\r
\r
When reviewers request stronger theoretical grounding:\r
\r
**Theory Introduction Pattern:**\r
\`\`\`\r
We draw on [Theory Name] (Foundational Author, Year) to develop our theoretical framework. [Theory Name] posits that [core theoretical premise]. This theory is particularly relevant to our context because [specific application to research problem]. Building on this theoretical foundation, we develop hypotheses regarding [key relationships].\r
\`\`\`\r
\r
**Commonly Used IS Theories (from exemplars):**\r
- Technology Acceptance Model (TAM) - adoption decisions\r
- Theory of Planned Behavior (TPB) - behavioral intentions\r
- Self-Determination Theory - motivation, autonomy\r
- Information Processing Theory - attention, cognitive load\r
- Signaling Theory - information asymmetry\r
- Resource-Based View - capabilities, competitive advantage\r
- Power-Dependence Theory - exchange relationships\r
- Platform Entrepreneurship Theory - digital platform dynamics\r
\r
## E.7 Results Enhancement Patterns\r
\r
When adding figures or tables to Results:\r
\r
**Table Presentation:**\r
\`\`\`latex\r
\\begin{table}[h]\r
\\centering\r
\\caption{Hypothesis Test Results}\r
\\label{tab:results}\r
\\begin{tabular}{lccc}\r
\\hline\r
Hypothesis & β & SE & p-value \\\\\r
\\hline\r
H1: X → Y & 0.35*** & 0.08 & <0.001 \\\\\r
H2: M × X → Y & 0.22** & 0.09 & 0.014 \\\\\r
\\hline\r
\\multicolumn{4}{l}{\\small Notes: *** p<0.01, ** p<0.05, * p<0.10} \\\\\r
\\end{tabular}\r
\\end{table}\r
\`\`\`\r
\r
**Results Narrative Pattern:**\r
\`\`\`\r
Table X reports the hypothesis test results. H1 predicted that [X affects Y], and this hypothesis was supported (β = 0.35, p < 0.001). This finding is consistent with [prior work] and suggests that [interpretation]. H2 predicted [moderation effect], which was also supported (β = 0.22, p = 0.014), indicating that [interpretation of interaction].\r
\`\`\`\r
\r
## E.8 Discussion Enhancement Patterns\r
\r
**Theoretical Implications Pattern:**\r
\`\`\`\r
Our findings advance understanding of [phenomenon] in several ways. First, we demonstrate that [key finding 1], which extends prior work by [Author] (Year) that found [related finding]. This suggests that [theoretical insight]. Second, we reveal that [key finding 2], challenging the prevailing assumption that [prior belief]. Third, our results highlight the importance of [factor], adding nuance to [existing theory].\r
\`\`\`\r
\r
**Practical Implications Pattern:**\r
\`\`\`\r
For practitioners, our findings offer actionable guidance. First, managers should [specific recommendation 1] because [rationale from findings]. Specifically, [detailed guidance]. Second, organizations can [recommendation 2] to [achieve outcome]. Our results suggest that [timing/condition] is particularly important for [action].\r
\`\`\`\r
`,nx=`================================================================================
ICISsetup - File Upload and Verification
================================================================================

PURPOSE:
Verify that required files are uploaded before starting the paper generation workflow.

================================================================================
FILE NAMING CONVENTION
================================================================================

All files in this workflow use a participant identifier extracted from the interview filename.

**Interview file naming:**
\`\`\`
INTERVIEW_{participantId}_{timestamp}.txt
\`\`\`
Where:
- {participantId} = sanitized participant email (e.g., "john_doe_gmail_com")
- {timestamp} = creation timestamp (e.g., "20241203_143052")

**Example:** INTERVIEW_maayan_university_edu_20241115_091230.txt

**Extracting participantId:**
1. Parse the INTERVIEW filename
2. Extract the portion between "INTERVIEW_" and the timestamp
3. Use this {participantId} for ALL output files in ALL stages

**Output file naming convention (all stages):**
\`\`\`
{fileType}_{participantId}_v{N}.{ext}
\`\`\`

Examples for participantId = "maayan_university_edu":
- feedback_maayan_university_edu_v1.txt
- oversight_maayan_university_edu_v1.txt
- icis_paper_maayan_university_edu_v1.tex
- icis_paper_maayan_university_edu_v1.pdf
- supervisor_decision_maayan_university_edu.txt

================================================================================
REQUIRED FILES
================================================================================

1. INTERVIEW TRANSCRIPT (Required)
   - Format: .txt
   - Naming: INTERVIEW_{participantId}_{timestamp}.txt
   - Example: INTERVIEW_maayan_university_edu_20241115_091230.txt
   - Contains: Research interview with participant

2. PAPER TEMPLATE (Required)
   - Format: .txt
   - File: icisTemplate.txt
   - Contains: ICIS formatting guidelines

3. QUALITY CALIBRATION (Embedded)
   - Location: ICISbuilder.txt Appendix F, ICISreviser.txt Appendix E
   - Contains: Quality standards, structural patterns, and methodology guidance extracted from 11 ICIS 2024 exemplar papers
   - Status: Embedded in prompts (no file loading required)

4. DATA FILE (Optional)
   - Format: .xlsx, .csv
   - Naming: Data_file_{participantId}.{ext}
   - Example: Data_file_maayan_university_edu.xlsx
   - Impact: Determines research approach (real data vs synthetic/theoretical)

================================================================================
WORKFLOW MODES
================================================================================

ALL PAPERS: 14-16 pages

Data file determines approach, NOT paper length:
- WITH data file: Full empirical analysis with real data
- WITHOUT data file: Depends on research type (see ICISbuilder.txt Step 1.5)

================================================================================
STAGE CONTROLS
================================================================================

- Start: Begin file verification
- Restart: Re-verify after uploading new files
- Skip: Proceed without verification (not recommended)
- Abort: Cancel in progress

================================================================================
OUTPUT
================================================================================

- List of verified files
- Workflow mode (full/partial)
- Ready signal for ICISbuilder

================================================================================
`,ax=`================================================================================
ICISsupervisor - Human-in-the-Loop Decision Prompt
================================================================================

PURPOSE:
This prompt reads the oversight file created by ICISreview, extracts metrics,
displays a progression dashboard showing version history, and captures the
human supervisor's decision to revise or finalize.

WORKFLOW POSITION:
  ICISsetup -> ICISbuilder -> ICISreview -> **ICISsupervisor** -> ICISreviser (loop) OR ICISfinalize (exit)

================================================================================
STEP 0: EXTRACT PARTICIPANT ID
================================================================================

**Before any other step, extract the participantId:**

1. Use Glob to find interview or oversight files:
   \`\`\`
   Glob: {ICIS_PATH}\\INTERVIEW_*.txt
   Glob: {ICIS_PATH}\\Data\\oversight_*.txt
   \`\`\`

2. Extract {participantId} from filename:
   - From INTERVIEW_{participantId}_{timestamp}.txt -> extract middle portion
   - From oversight_{participantId}_v{N}.txt -> extract middle portion
   - Example: \`oversight_maayan_university_edu_v1.txt\` -> participantId = \`maayan_university_edu\`

3. Store this participantId for ALL subsequent file operations

================================================================================
STEP 1: LOCATE AND READ ALL OVERSIGHT FILES
================================================================================

**Find ALL oversight files to build version progression:**

1. **Glob for all oversight files:**
   \`\`\`
   Glob: {ICIS_PATH}\\Data\\oversight_{participantId}_v*.txt
   \`\`\`

   Example results:
   - oversight_maayan_university_edu_v1.txt
   - oversight_maayan_university_edu_v2.txt
   - oversight_maayan_university_edu_v3.txt

2. **If NO oversight files found:**
   Display error and exit:
   \`\`\`
   ERROR: No oversight files found for participantId={participantId}
   ICISreview must complete before ICISsupervisor can run.
   Please execute ICISreview first.
   \`\`\`

3. **Read ALL oversight files in version order (v1, v2, v3...):**
   For each file, extract the JSON data block. The oversight file contains:

   \`\`\`json
   {
     "version": 1,
     "paperId": "{participantId}",
     "timestamp": "ISO-8601 timestamp",

     "reviewScores": {
       "novelty": 1-5,
       "significance": 1-5,
       "methodologicalRigor": 1-5,
       "clarity": 1-5,
       "relevance": 1-5
     },
     "reviewComments": {
       "novelty": "Brief comment",
       "significance": "Brief comment",
       "methodologicalRigor": "Brief comment",
       "clarity": "Brief comment",
       "relevance": "Brief comment"
     },
     "averageScore": 3.4,

     "errorCounts": {
       "majorErrors": 2,
       "minorErrors": 5
     },
     "errorDetails": {
       "majorErrors": ["Description 1", "Description 2"],
       "minorErrors": ["Typo on page 3", "Missing reference X"]
     },

     "trustworthiness": {
       "reliability": 1-7,
       "reliabilityRationale": "One-sentence rationale",
       "benevolence": 1-7,
       "benevolenceRationale": "One-sentence rationale",
       "goalAlignment": 1-7,
       "goalAlignmentRationale": "One-sentence rationale"
     },

     "criticalAlerts": [
       {
         "number": 1,
         "title": "Alert title",
         "status": "Open",
         "impact": "High/Medium/Low",
         "details": "Description",
         "actionRequired": "What to do",
         "consequence": "If unfixed"
       }
     ],

     "previousVersions": []
   }
   \`\`\`

4. **Build history arrays from all versions:**
   \`\`\`
   scoresHistory = [
     { v1 reviewScores },
     { v2 reviewScores },
     { v3 reviewScores (current) }
   ]

   errorsHistory = [
     { v1 errorCounts },
     { v2 errorCounts },
     { v3 errorCounts (current) }
   ]
   \`\`\`

5. **Extract current version data (highest version number):**
   - reviewScores: Latest scores (1-5 scale)
   - trustworthinessScores: Latest trustworthiness (1-7 scale)
   - errorCounts: Latest error counts
   - criticalAlerts: Latest alerts array
   - reviewComments: Latest comments for each criterion

================================================================================
STEP 2: GENERATE SUPERVISOR DASHBOARD WITH PROGRESSION
================================================================================

**Create dashboard showing version progression:**

Display the following formatted dashboard:

\`\`\`
================================================================================
                        SUPERVISOR DASHBOARD
                        Revision Cycle: {currentVersion}
                        Participant: {participantId}
================================================================================

STATUS: {ON TRACK / ATTENTION NEEDED}
Reason: {status reason from threshold checks}
------------------------------------------------------------------------

TABLE 1: REVIEW SCORES PROGRESSION (Threshold: >= 4)
------------------------------------------------------------------------
| Criteria              | v1  | v2  | v3  | Comment (latest)          |
|-----------------------|-----|-----|-----|---------------------------|
| Novelty               | {v1}| {v2}| {v3}| {reviewComments.novelty}  |
| Significance          | {v1}| {v2}| {v3}| {reviewComments.significance} |
| Methodological Rigor  | {v1}| {v2}| {v3}| {reviewComments.methodologicalRigor} |
| Clarity               | {v1}| {v2}| {v3}| {reviewComments.clarity}  |
| Relevance             | {v1}| {v2}| {v3}| {reviewComments.relevance}|
|-----------------------|-----|-----|-----|---------------------------|
| AVERAGE               |{avg}|{avg}|{avg}| {trend: Improving/Stable/Declining} |
------------------------------------------------------------------------
Note: Scores below 4 are highlighted as needing attention.

TABLE 2: ERROR COUNTS PROGRESSION (Threshold: Major = 0)
------------------------------------------------------------------------
| Category        | v1  | v2  | v3  | Remaining Issues              |
|-----------------|-----|-----|-----|-------------------------------|
| Major Errors    | {v1}| {v2}| {v3}| {errorDetails.majorErrors}    |
| Minor Errors    | {v1}| {v2}| {v3}| {errorDetails.minorErrors}    |
|-----------------|-----|-----|-----|-------------------------------|
| TOTAL           | {t1}| {t2}| {t3}| {X% reduction from v1}        |
------------------------------------------------------------------------

TABLE 3: TRUSTWORTHINESS ASSESSMENT (Threshold: >= 5)
------------------------------------------------------------------------
| Dimension       | Score | Rationale                               |
|-----------------|-------|-----------------------------------------|
| Reliability     | {1-7} | {reliabilityRationale}                  |
| Benevolence     | {1-7} | {benevolenceRationale}                  |
| Goal Alignment  | {1-7} | {goalAlignmentRationale}                |
------------------------------------------------------------------------
Note: Scores below 5 are highlighted as needing attention.

CRITICAL ALERTS:
------------------------------------------------------------------------
{If criticalAlerts.length > 0:}
  CRITICAL ALERT {number}: {title} (BLOCKING ISSUE)
  - Status: {status}
  - Impact: {impact}
  - Details: {details}
  - Action Required: {actionRequired}
  - Consequence if Unfixed: {consequence}

{If criticalAlerts.length === 0:}
  None - paper is progressing well
------------------------------------------------------------------------
\`\`\`

================================================================================
STEP 3: DETERMINE STATUS AND RECOMMENDATION
================================================================================

**Apply threshold checks (from SUPERVISOR_THRESHOLDS):**

\`\`\`
THRESHOLDS:
- REVIEW_SCORE_AVG_MIN: 3.5  (Average of 5 review scores must be >= 3.5)
- TRUSTWORTHINESS_MIN: 5     (All 3 trustworthiness scores must be >= 5)
- MAJOR_ERRORS_MAX: 2        (Maximum 2 major errors per cycle)
- MAX_CYCLES: 3              (1 build + 2 revisions maximum)
\`\`\`

**Cycle Limit Rule:** The workflow allows a maximum of 3 cycles total:
- Cycle 1: Initial build (ICISbuilder)
- Cycle 2: First revision (ICISreviser)
- Cycle 3: Second/final revision (ICISreviser)

After 3 cycles, the paper must be finalized regardless of scores.

**Check each threshold and collect reasons:**

1. **Review Scores Check (Average):**
   Calculate averageScore = (novelty + significance + methodologicalRigor + clarity + relevance) / 5
   - If averageScore < 3.5: Add to reasons: "Average review score ({averageScore}) below threshold (3.5)"

2. **Trustworthiness Check:**
   For each of (reliability, benevolence, goalAlignment):
   - If score < 5: Add to reasons: "{dimension} score ({score}) below threshold (5)"

3. **Major Errors Check:**
   - If majorErrors > 2: Add to reasons: "{majorErrors} major errors exceeds limit (2)"

4. **Critical Alerts Check:**
   - If criticalAlerts.length > 0: Add to reasons: "{count} critical alert(s) present"

5. **Cycle Limit Check:**
   - If currentCycle >= 3: Add to reasons: "Maximum cycles (3) reached - must finalize"

**Determine Status:**
- If reasons.length === 0: STATUS = "ON TRACK"
- If reasons.length > 0: STATUS = "ATTENTION NEEDED"

**Generate Recommendation:**

If STATUS === "ON TRACK":
\`\`\`
RECOMMENDATION: FINALIZE PAPER
------------------------------------------------------------------------
All quality thresholds have been met:
- Average review score >= 3.5 (Current: {averageScore}/5)
- All trustworthiness scores >= 5
- Major errors <= 2 (Current: {majorErrors})
- No critical alerts

The paper is ready for final submission preparation.
------------------------------------------------------------------------
\`\`\`

If STATUS === "ATTENTION NEEDED":
\`\`\`
RECOMMENDATION: CONTINUE TO REVISION
------------------------------------------------------------------------
The following issues require attention before finalization:

Priority Actions:
1. {reasons[0]}
2. {reasons[1]}
3. {reasons[2]}

Current cycle: {currentCycle} of 3 maximum
{If currentCycle == 2: "Note: This is the FINAL revision opportunity"}
{If currentCycle >= 3: "CYCLE LIMIT REACHED: Must finalize regardless of issues"}
------------------------------------------------------------------------
\`\`\`

================================================================================
STEP 4: PRESENT DECISION OPTIONS
================================================================================

**Display decision interface to human supervisor:**

\`\`\`
================================================================================
                        SUPERVISOR DECISION REQUIRED
================================================================================

Based on the analysis above, you have the following options:

OPTION A: CONTINUE TO REVISION
------------------------------
- Paper will be sent to ICISreviser for cycle {currentVersion + 1}
- Current feedback and your directives will guide improvements
- Enter your specific directives below

OPTION B: FINALIZE PAPER
------------------------
- Paper will be sent to ICISfinalize for submission preparation
- No further revisions will be made
- Choose this only if paper meets quality standards

OPTION C: GENERATE SYNTHETIC DATA
---------------------------------
- Available for Experiment/Survey papers with planned data collection
- Generates synthetic data based on paper's research model
- Converts PARTIAL paper to FULL paper with Results section
- Use when paper needs empirical demonstration before data collection completes

------------------------------------------------------------------------
YOUR DIRECTIVES (for Option A or C - be specific):
------------------------------------------------------------------------
Examples:
- "Strengthen theoretical contribution by adding discussion of X theory"
- "Add 3 more recent citations from 2023-2024 to literature review"
- "Clarify methodology in Section 4.2 - explain sampling procedure"
- "Address reviewer concern about generalizability in Discussion"
- "Fix the 2 remaining major errors identified in Table 2"
- "Generate synthetic data with sample size 250, medium effect sizes"

[Enter your directives here or type NONE if finalizing]

------------------------------------------------------------------------
YOUR DECISION: Type "REVISE", "FINALIZE", or "SYNTHETIC"
------------------------------------------------------------------------
\`\`\`

================================================================================
STEP 5: EXECUTE DECISION
================================================================================

**Based on human input, execute the appropriate action:**

**If decision = "REVISE" (CONTINUE_REVISION):**

1. Get supervisor directives from input

2. Append directives to feedback file:
   \`\`\`
   Edit: {ICIS_PATH}\\Data\\feedback_{participantId}_v{currentVersion}.txt

   Append this section at the end:

   ================================================================================
   SUPERVISOR DIRECTIVES (Cycle {currentVersion})
   ================================================================================
   {supervisor's directives}

   Timestamp: {current ISO timestamp}
   Decision: CONTINUE_REVISION
   Next Step: ICISreviser
   ================================================================================
   \`\`\`

3. Display confirmation:
   \`\`\`
   DECISION RECORDED: Continue to Revision Cycle {currentVersion + 1}

   Actions completed:
   - Supervisor directives appended to feedback_{participantId}_v{currentVersion}.txt
   - Directives will guide ICISreviser improvements

   NEXT STEP: Execute ICISreviser prompt
   The reviser will:
   1. Read the feedback file with your directives
   2. Address both AI review feedback and supervisor directives
   3. Generate icis_paper_{participantId}_v{currentVersion + 1}.tex
   \`\`\`

**If decision = "FINALIZE":**

1. Create supervisor decision file:
   \`\`\`
   Write: {ICIS_PATH}\\Data\\supervisor_decision_{participantId}.txt

   Content:
   ================================================================================
   SUPERVISOR DECISION RECORD
   ================================================================================
   Decision: FINALIZE
   Participant: {participantId}
   Final Cycle: {currentVersion}
   Timestamp: {current ISO timestamp}

   FINAL SCORES:
   - Novelty: {score}/5
   - Significance: {score}/5
   - Methodological Rigor: {score}/5
   - Clarity: {score}/5
   - Relevance: {score}/5
   - Average: {averageScore}/5

   TRUSTWORTHINESS:
   - Reliability: {score}/7
   - Benevolence: {score}/7
   - Goal Alignment: {score}/7

   ERROR STATUS:
   - Major Errors: {count}
   - Minor Errors: {count}

   STATUS: {ON TRACK / ATTENTION NEEDED}
   {If ATTENTION NEEDED: list reasons}

   SUPERVISOR OVERRIDE: {Yes if finalizing despite ATTENTION_NEEDED, else No}
   ================================================================================
   \`\`\`

2. Display confirmation:
   \`\`\`
   DECISION RECORDED: Finalize Paper

   Actions completed:
   - Decision recorded in supervisor_decision_{participantId}.txt
   - Paper marked ready for final preparation

   NEXT STEP: Execute ICISfinalize prompt
   The finalizer will:
   1. Compile final PDF
   2. Prepare submission package
   3. Send notifications
   \`\`\`

**If decision = "SYNTHETIC" (GENERATE_SYNTHETIC_DATA):**

1. Verify paper is eligible for synthetic data generation:
   - Research type must be "Laboratory & field experiments" OR "Survey research"
   - Paper type must be PARTIAL (no Results section yet)
   - If not eligible, display error and return to decision options

2. Get supervisor directives from input (optional guidance for data generation)

3. Create synthetic data request file:
   \`\`\`
   Write: {ICIS_PATH}\\Data\\synthetic_request_{participantId}.txt

   Content:
   ================================================================================
   SYNTHETIC DATA GENERATION REQUEST
   ================================================================================
   Decision: GENERATE_SYNTHETIC_DATA
   Participant: {participantId}
   Current Cycle: {currentVersion}
   Timestamp: {current ISO timestamp}

   SUPERVISOR DIRECTIVES:
   {supervisor's directives - e.g., sample size, effect sizes, specific requirements}

   PAPER CONTEXT:
   - Research Type: {researchType}
   - Current Paper Type: PARTIAL
   - Target Paper Type: FULL (after synthetic data generation)

   INSTRUCTIONS:
   Execute ICISbuilder Step 1.6 (Supervisor-Initiated Synthetic Data Generation)
   Follow ICISsyntheticData.txt prompt for generation guidelines
   ================================================================================
   \`\`\`

4. Display confirmation:
   \`\`\`
   DECISION RECORDED: Generate Synthetic Data

   Actions completed:
   - Request recorded in synthetic_request_{participantId}.txt
   - Supervisor directives captured for data generation

   NEXT STEP: Execute ICISreviser (synthetic data mode)
   The reviser will:
   1. Read ICISsyntheticData.txt for generation guidelines
   2. Extract research model from current paper
   3. Generate synthetic dataset calibrated to literature and reviewer feedback
   4. Run statistical analysis on synthetic data
   5. Add Results section to the paper
   6. Update Discussion with findings interpretation
   7. Add transparency statement about synthetic data

   Paper will be converted from PARTIAL to FULL.
   \`\`\`

================================================================================
STEP 6: VERIFICATION
================================================================================

Before completing, verify all actions:

1. **Oversight files were read:**
   Use Glob to confirm: {ICIS_PATH}\\Data\\oversight_{participantId}_v*.txt
   Report: "Read {N} oversight file(s): v1, v2, v3..."

2. **Dashboard was displayed:**
   Report: "Dashboard generated for cycle {currentVersion}"

3. **Status was determined:**
   Report: "Status: {ON TRACK/ATTENTION NEEDED}"
   Report: "Recommendation: {FINALIZE/CONTINUE_REVISION}"

4. **Decision was recorded:**
   If REVISE: Verify feedback file was edited
   If FINALIZE: Verify decision file was created
   Use Glob to confirm file exists

5. **Next step is clear:**
   Report: "Next prompt to execute: {ICISreviser/ICISfinalize/ICISreviser (synthetic data mode)}"

================================================================================
QUICK REFERENCE: THRESHOLDS
================================================================================

| Metric                  | Threshold | Scale | Constant                    |
|-------------------------|-----------|-------|-----------------------------|
| Review Score (average)  | >= 3.5    | 1-5   | REVIEW_SCORE_AVG_MIN: 3.5   |
| Trustworthiness (all 3) | >= 5      | 1-7   | TRUSTWORTHINESS_MIN: 5      |
| Major Errors (per cycle)| <= 2      | count | MAJOR_ERRORS_MAX: 2         |
| Critical Alerts         | none      | count | (empty array)               |
| Max Cycles              | 3         | count | MAX_CYCLES: 3               |

**Cycle Structure:**
- Cycle 1: Initial build (ICISbuilder)
- Cycle 2: First revision (ICISreviser)
- Cycle 3: Final revision (ICISreviser) - MUST finalize after this

**Status Logic:**
- ON TRACK: ALL thresholds met
- ATTENTION NEEDED: ANY threshold not met (but can still revise if cycles < 3)
- FORCED FINALIZE: Cycle 3 complete (finalize regardless of thresholds)

================================================================================
DELIVERABLES
================================================================================

This prompt produces:

1. **Dashboard Display** - Shows version progression with all metrics
2. **Status Determination** - ON TRACK or ATTENTION NEEDED with reasons
3. **Recommendation** - FINALIZE, CONTINUE_REVISION, or GENERATE_SYNTHETIC_DATA
4. **Decision Recording**:
   - If REVISE: Appends directives to feedback_{participantId}_v{N}.txt
   - If FINALIZE: Creates supervisor_decision_{participantId}.txt
   - If SYNTHETIC: Creates synthetic_request_{participantId}.txt
5. **Next Step Indication** - ICISreviser, ICISfinalize, or ICISreviser (synthetic data mode)

================================================================================
`,rx=`================================================================================
ICISfinalize - Final Submission Preparation Prompt
================================================================================

PURPOSE:
This prompt guides the finalization stage of the ICIS-ASD workflow. It handles
all tasks required to prepare the paper for submission after approval.

================================================================================
FINALIZATION TASKS
================================================================================

1. PAPER COMPILATION
   - Compile LaTeX to PDF
   - Verify all figures are embedded correctly
   - Check page count (14-16 for full paper, 8-10 for partial)
   - Verify references compile without errors

2. QUALITY CHECKS
   - All figures/tables referenced in text
   - No placeholder text remaining
   - Academic writing style maintained
   - ICIS formatting guidelines followed

3. FILE ORGANIZATION
   Prepare submission package:
   - Paper/icis_paper.pdf        (main submission)
   - Paper/icis_paper.tex        (source)
   - Code/                       (analysis scripts)
   - Results/                    (figures, data)
   - Paper/results_analysis.md   (detailed analysis)

4. NOTIFICATIONS
   - Notify participant via email:
     * Attach paper PDF
     * Include questionnaire instructions
     * Request feedback/approval

   - Notify administrator (DovASD2025@gmail.com):
     * Paper ID
     * Completion status
     * Any issues encountered

   - Update dashboard for overseer:
     * Final status
     * Summary of revisions
     * Quality scores

================================================================================
EMAIL TEMPLATES
================================================================================

PARTICIPANT NOTIFICATION:
Subject: Your ICIS Paper is Ready for Review - [Paper_ID]

Dear [Participant_Name],

Your research paper generated by the ICIS-ASD system is now complete.

Please find attached:
- Your paper in PDF format
- A brief questionnaire about your experience

We kindly ask you to:
1. Review the paper for accuracy
2. Complete the questionnaire
3. Reply with any corrections needed

Thank you for participating in this research.

Best regards,
ICIS-ASD System

---

ADMINISTRATOR NOTIFICATION:
Subject: ICIS-ASD Completion - [Paper_ID]

Paper ID: [Paper_ID]
Status: Complete
Rounds: [N]
Final Score: [Average]
Timestamp: [DateTime]

================================================================================
OUTPUT
================================================================================

The finalize stage should produce:
- Final PDF ready for submission
- Confirmation emails sent
- Dashboard updated with completion status
- All artifacts organized in appropriate directories

================================================================================
NOTES
================================================================================

- This prompt is a placeholder. Customize based on your specific requirements.
- Email functionality requires backend integration (not implemented in GUI-only mode)
- Update this file to modify notification templates or add additional checks.

================================================================================
`,ix=`ICIS Paper Title\r
Introduction\r
We ask that authors follow these basic guidelines when submitting to ICIS. In essence, you should format your paper exactly like this document. The easiest way to use this template is to replace the placeholder content with your own material. The template file contains specially formatted styles (e.g., Normal, Heading, Bullet, References, Title, Author, Affiliation) that are designed to reduce the work in formatting your final submission.\r
Page Size and Spacing\r
On each page, your material (not including the header and footer) should fit within a rectangle of 16.5 x 22.8 cm (6.5 x 9 in.), centered on a US letter page, beginning 1.27 cm (0.5 in.) from the top of the page. Please adhere to the US letter size only (in MS Word, you can check the page format in the menu: File --> Page Setup). If you cannot do so, please contact the review coordinator for assistance. All final publications will be formatted and displayed in US letter size. Right margins should be justified, not ragged. All margins must measure 1" (2.5 cm) around. Please ensure your manuscript complies with the following instructions:\r
- Line spacing should be single (exactly 1.0);\r
- Margins should be 1 inch (2.54 cm);\r
- Do not change character or word spacing;\r
- Please do not use double spaces between sentences - this is a tradition no longer necessary on modern word processors;\r
- Please do not edit the styles in this template;\r
- Please ensure all text is justified, not "ragged" (= left-aligned).\r
Non-compliance of these instructions may lead to desk rejection of your paper.\r
Length\r
Any submission that exceeds 16 pages will be rejected without review.\r
Title\r
Your paper's title should be using the "Title" style in this template (which is configured as Georgia 20-point bold). Ensure proper capitalization within your title (i.e. "The Next Frontier of Information Systems" versus "the next frontier of Information systems."\r
All proper nouns should be capitalized. Articles (the, a), coordinating conjunctions (and, but, or, for, nor, etc.) should not be capitalized, unless, of course, they are used as the first word in the title. Likewise for prepositions (on, at, to, from, by, etc.).\r
Normal or Body Text\r
Please use the "Normal" style for normal text - this style is configured as a 10-point Georgia font (similar to Times New Roman, but more easily read online) or, if it is unavailable, another proportional font with serifs, as close as possible in appearance to Times New Roman 10-point. Please use sans-serif or non-proportional fonts (such as Arial or Courier) only for special purposes, such as source code text (SpecialStyle). [References to Georgia font from this point forward should be interpreted as "Georgia or equivalent."]\r
Sections\r
The heading of a section should be using the "Heading 1" style, each word should be capitalized - configured as Georgia 13-point bold, left justified. Sections should not be numbered.\r
Subsections\r
Headings of subsections should be using the style "Heading 2" - configured as Georgia 11-point bold italics with initial letters capitalized. (Note: for sub-sections and sub-subsections, words like "the", "of", "a", "an" are not capitalized unless it is the first word of the heading.)\r
Sub-subsections\r
Headings for sub-subsections should be using "Heading 3" - configured as Georgia 10-point bold with initial letters capitalized. Please do not go any further into another layer/level.\r
Figures, Tables and Captions\r
Place figures and tables close to the relevant text (or where they are referenced in the text).\r
Captions should be using the "Caption" style - configured as Georgia 10-point bold. They should be numbered (e.g., "Table 1" or "Figure 2"), centered and placed beneath the figure or table. Please note that the words "Figure" and "Table" should be spelled out (e.g., "Figure" rather than "Fig.") wherever they occur. The proceedings will be made available online, thus color figures are possible.\r
Inserting Images\r
Occasionally MS Word generates larger-than-necessary PDF files when images inserted into the document are manipulated in MS Word. To minimize this problem, use an image editing tool to resize the image at the appropriate printing resolution (usually 300 dpi), and then insert the image into Word using Insert | Picture | From File...\r
As indicated in Figure 1, using tables to hold places can work very well in Word. If you want to copy a figure from another application (such as PowerPoint) and then paste to the place where you want your figure to be, make sure that (1) the figure stays in the position, and (2) it does not take up too much space. You can ensure the former by double clicking the figure, then go to "Layout" tab, and select "In line with text." To ensure the latter, use "Paste Special," then select "Picture." You can resize the figure to your desired size once it is pasted.\r
\r
Figure 1. Modified Research Model\r
Table Style\r
Inserting a table in the text can work well. You may want to adjust the vertical spacing of the text in the tables. (In Word, use Format | Paragraph... and then the Line and Page Breaks tab. Generally, text in each field of a table will look better if it has equal amounts of spacing above and below it, as in Table 1.)\r
\r
Table 1. A Very Nice Table\r
| Treatment 1 | Treatment 2 |\r
|------------|-------------|\r
| Setting A  | 125 | 95    |\r
| Setting B  | 85  | 102   |\r
| Setting C  | 98  | 85    |\r
\r
Other Visual Media (e.g., video clips)\r
Submissions that rely on the use of visual media such as video, animation, visual analytics, etc., should embed links to these in their submission pdf. The visual media portion of the submission should be no more than 5 minutes (in total). Given the limitations of the review system, the visual media portion of the paper must be hosted outside the review system. We ask each author to create his/her own account with an open access provider of choice (e.g., linked video could be hosted in Vimeo or YouTube). Please use a pseudo user name in order to maintain anonymity during the review process. The visual media portion of the submission must be playable in a generic Internet browser. Please fine-tune for Firefox. Please verify that all links to visual media work as expected in the system-generated PDF prior to submitting the paper to the review system. Do not change your online media after submitting the paper for review. We recommend using Creative Commons Licenses for the visual media portion of the submission. If you have any other questions, please contact the program co-chairs.\r
Language, Style, and Content\r
With regard to spelling and punctuation, you may use any dialect of English (e.g., British, Canadian, US, etc.) provided this is done consistently. Hyphenation is optional. To ensure suitability for an international audience, please pay attention to the following:\r
- Write in a straightforward style.\r
- Try to avoid long or complex sentence structures.\r
- Briefly define or explain all technical terms that may be unfamiliar to readers.\r
- Explain all acronyms the first time they are used in your text - e.g., "primary care provider (PCP)".\r
- Explain local references (e.g., not everyone knows all city names in a particular country).\r
- Be careful with the use of gender-specific pronouns (he, she) and other gendered words (chairman, manpower, man-months). Use inclusive language that is gender-neutral (e.g., they, s/he, chair, staff, staff-hours, person-years).\r
Conclusion\r
It is important that you write for a general audience. It is also important that your work is presented in a professional fashion. This guideline is intended to help you achieve that goal. By adhering to the guideline, you also help the conference organizers tremendously in reducing our workload and ensuring impressive presentation of your conference paper. We thank you very much for your cooperation and look forward to receiving a professional looking, camera-ready version!\r
References and Citations\r
References are to be formatted using the new MIS Quarterly style (https://misq.umn.edu/formatting-your-manuscript). References should be listed alphabetically by author name at the end of the paper in conformance with APA 7th edition. In-text citations should be indicated by the author's last name and year of publication, e.g., (DeGross, 1977) or DeGross (1977). References must be complete, i.e., include, as appropriate, volume, number, month, publisher, city and state, editors, last name and initials of all authors, page numbers, etc. If you use EndNote, be aware that different versions of the software change the styles, creating some inconsistencies.\r
Your references should comprise only published materials accessible to the public. Proprietary information may not be cited.\r
References should be ordered in alphabetic order.\r
References\r
Ackoff, R. L. (1967). Management misinformation systems. Management Science, 14(4), 147-156. https://doi.org/10.1287/mnsc.14.4.B147\r
Benbasat, I., & Zmud, R. W. (2003). The identity crisis within the IS discipline: Defining and communicating the discipline's core properties. MIS Quarterly, 27(2), 183-194. https://doi.org/10.2307/30036527\r
Bonini, C. P. (1963). Simulation of information and decision systems in the firm. Prentice-Hall.\r
Broadbent, M., Weill, P., O'Brien, T., & Neo, B. S. (1996). Firm context and patterns of IT infrastructure capability. Proceedings of the 14th International Conference on Information Systems, 13, 174-194. https://aisel.aisnet.org/icis1996/13\r
Carroll, J. (2005). The Blacksburgh Electronic Village: A study in community computing. In P. van den Besselaar & S. Kiozumi (Eds.), Digital Cities III: Information Technologies for Social Capital (pp. 43-65). Springer-Verlag. https://doi.org/10.1007/11407546_3\r
\r
Forty-Sixth International Conference on Information Systems, Nashville, Tennessee, USA 2025\r
`,sx=`# MISQ IS Journal Review Criteria
# Extracted from "Writing a Virtuous Review" by Arun Rai, MIS Quarterly Vol. 40 No. 3, September 2016

## Core Evaluation Dimensions

**1. Contribution Assessment**
• Does the paper address important problems/issues related to information systems?
• Is the work intellectually novel and of high quality?
• Is it likely to have significant impact on the field?
• Assess both current contribution and potential contribution with rationale

**2. Key Strengths Identification**
• Identify what makes the work valuable
• Recognize ambitious and intellectually novel work
• Provide open-minded assessment of novel aspects without dogmatically invoking established paradigms

**3. Major Issues Assessment**
• Differentiate between:
  - Fatal issues that render work unpublishable
  - Showstoppers that are addressable
  - Minor blemishes
  - Personal preferences (do not conflate with major issues)
• Focus on issues that affect publishability, not exhaustive laundry lists
• Provide rationale and evidence for all concerns raised

## Quality Standards

**Theoretical Development**
• Is the theory well-justified and aligned with the research question?
• Are claims substantiated with logic and evidence?
• Does the framing serve the paper's goals?

**Methodological Rigor**
• Is the research design appropriate for the questions asked?
• Are methods executed properly?
• Note: Methodological blemishes should not overshadow intellectual novelty

**Clarity and Presentation**
• Is the work coherent and well-organized?
• Is the writing clear and accessible?
• Are arguments logically structured?

**Significance and Relevance**
• Does the paper make a meaningful contribution to IS knowledge?
• Is it relevant to the IS discipline and its stakeholders?
• Will it influence future research or practice?

## What Makes a Strong Contribution

• Addresses important problems in information systems
• Demonstrates intellectual novelty - pushes frontiers of knowledge
• Shows potential for significant impact
• Balances creativity/originality with accuracy/reliability
• Takes on big problems or breaks new intellectual ground
• Novel/ambitious papers may be less "buttoned down" than conventional ones - assess holistically

## Common Issues to Look For

• Unsubstantiated claims (e.g., "findings are not interesting" without rationale)
• Misalignment between theory and research question
• Research design flaws that affect validity
• Lack of coherence between paper sections
• Insufficient justification for hypotheses or methods
• Missing or weak contribution statement

## Review Best Practices (for AI Reviewer Context)

• Substantiate all claims with rationale - adhere to same standards expected of authors
• Distinguish major issues from minor ones clearly
• Provide constructive suggestions for improvement
• Preserve author voice - evaluate on their framework, not imposed preferences
• Focus on paper's potential, not solely its flaws
• Provide holistic assessment weighing pros and cons
• Be specific about what aspects fall within assessment scope
`,lx=`### The Prompt

**Role:** You are an expert Science Communicator and Senior Information Designer.

**Task:** Analyze the research paper and generate a comprehensive, visually engaging infographic that summarizes the core findings, frameworks, and practical implications.

**Input:** Research Paper

**Process & Guidelines:**

1. **Analyze & Distill:**
* Identify the **Core Tension or Thesis**: Find the central problem (e.g., a paradox, a trade-off, a dilemma) and the proposed solution.
* Extract **Key Frameworks**: Look for dimensions (e.g., People/Process/Technology, Trust vs. Capability) or sequential flows (e.g., Integration -> Collaboration -> Authenticity).
* Simplify **Data**: Convert complex statistical findings into clear trends (e.g., "Inverted U-shape curve," "Positive Correlation").


2. **Conceptualize the Layout:**
* **Title:** Create a catchy, headline-style title that summarizes the paper's main value proposition (e.g., "The [Topic] Balancing Act," "The [Topic] Paradox").
* **Visual Metaphor:** Select a central visual theme that represents the core findings (e.g., a **Scale** for trade-offs, a **Flowchart** for processes, a **Gear system** for integration, or a **Network** for social influence).
* **Structure:** Organize the content into 3-4 distinct vertical columns or a central horizontal flow.


3. **Design Specifications (Style Guide):**
* **Aesthetic:** Clean, corporate-modern, and flat design.
* **Color Palette:** Use a professional palette (blues, teals, soft oranges) with distinct color coding for different sections or variables.
* **Typography:** Large, bold sans-serif fonts for headings; concise, readable body text.
* **Iconography:** Use intuitive icons to represent abstract concepts (e.g., a brain for AI, a handshake for collaboration, a shield for security).


4. **Output Generation:**
* **Visuals:** Generate the infographic image.
* **Text:** Ensure all text within the image is legible, summarizing complex academic sentences into punchy bullet points.



**Specific Content Requirements:**

* If the paper discusses **trade-offs**, visualize a scale or a "sweet spot" curve.
* If the paper discusses **stages**, visualize a step-by-step path.
* If the paper compares **methods**, use a side-by-side comparison box (e.g., "Traditional vs. Proposed").
* Include a "Key Takeaways" or "Strategic Actions" section at the bottom.

**Goal:** Transform this academic paper into a standalone visual asset suitable for an executive summary of the paper.`,ox=`You are a structured-data extraction engine.

Input: An academic research paper provided (the full paper, including tables, figures, and appendices).

Goal: Produce ONE machine-readable CSV “data table” that captures the paper’s most important structured information (i.e., the core table/figure/parameter list/comparison/results that best represent the paper’s contribution). The output must match the style of the provided examples: a clean CSV with a header row, one record per row, and a final “Source” column.

Critical rules (must follow):
1) Do NOT invent values. Only use information that is explicitly present in the PDF.
2) If a value is missing / not reported, write exactly: Not in source
3) Output CSV ONLY (no Markdown, no backticks, no explanations, no prefacing text).
4) Preserve numbers and formatting exactly as shown (e.g., commas in 1,234; p-values; β; t-statistics; “Yes/No/Partially”; truncated IDs with ellipses).
5) If you must combine information from multiple places (e.g., Appendix + Results table), do so carefully and state all origins in the “Source” cell (e.g., “Table 3, Appendix B”).
6) Every row must have the same columns in the same order.

How to choose what to tabulate (pick the BEST match):
- If the paper’s main contribution is empirical constructs + measurement items + hypothesis tests: build a table of measurement items and attach the related hypothesis results.
- If the paper’s main contribution is a model/simulation: build a parameter table (one row per parameter).
- If the paper’s main contribution is a literature/approach comparison: build a comparison table (one row per study/approach).
- If the paper’s main contribution is challenges/recommendations/strategies: build a challenge→action table (one row per challenge).
- If the paper’s main contribution is a dataset description with example records: build a table of the key record fields/metrics (one row per example record).

Preferred schemas (use EXACT column names from the closest schema below):
A) Measurement items + hypothesis results (use when constructs/items/loadings/results exist)
   Columns:
   Construct,Measurement Item,Factor Loading,Mean Value,Standard Deviation (SD),Hypothesis Reference,Significance (p-value),Result Status,Source

B) Simulation/model parameters (use when parameters/ranges/defaults are described)
   Columns:
   Parameter Name,Description,Symbol,Range of Values,Default Value,Data Type,Source

C) Challenges and strategic actions (use when the paper summarizes challenges→actions)
   Columns:
   Pillar,Challenge Number,Managerial Challenge,Key Manifestations,Strategic Action,Action Implementation Details,Source

D) Related-work / policy / approach comparison (use when comparing multiple studies/approaches)
   Columns:
   Study Reference,[comparison dimensions as separate columns],Methodology / Algorithm,Source
   - “comparison dimensions” should be the boolean/ordinal attributes used in the paper’s comparison (e.g., “Dynamic Risks”, “Partial Updating”). Use Yes/No/Partially/Not in source.

E) Dataset / sample records (use when paper provides example observations/records)
   Columns:
   Use the record identifier fields + the key metrics used in the analysis (include units in headers where shown), plus Source at the end.
   - If the paper defines additional metrics used in analysis but does not provide them for the sample rows, include the column and fill with Not in source for those rows.

Extraction & normalization guidelines:
- Use the paper’s exact wording for: construct names, measurement items, hypotheses (H1/H2…), table/figure labels, and study references.
- For “Description”, “Key Manifestations”, and “Action Implementation Details”, you may paraphrase slightly for clarity, but MUST stay faithful to the paper and MUST NOT add new claims.
- For multi-bullet content in a single cell: join bullets with “; ” (semicolon + space). Do not use newlines inside cells.
- When copying text that contains commas, wrap the entire cell in double quotes per CSV rules.
- If a cell contains a double quote, escape it by doubling it (e.g., He said "X" → "He said ""X""").

Source column rules:
- If all values in a row come from a single primary artifact, you may put: 1
- If multiple artifacts are used, list them (examples: “Table 1”; “Figure 2”; “Table 3, Appendix B”; “Section: Simulation Parameters and Experimental Design”).
- Keep Source concise but specific.

Output format requirements (strict):
- Output MUST be valid RFC-4180 style CSV.
- First line is the header row.
- Then one row per record.
- No trailing commentary, no extra blank lines, no Markdown.

Now read the paper and produce the CSV table accordingly.

`,cx=`================================================================================
ICISsyntheticData - Synthetic Data Generation Prompt
================================================================================

PURPOSE:
This prompt guides the generation of synthetic data when:
1. The supervisor clicks "Generate Synthetic Data" in the dashboard
2. The paper is for Experiment/Survey research WITH data collection planned
3. The supervisor decides synthetic data will strengthen the paper

TRIGGER: Supervisor decision via "Generate Synthetic Data" button
OUTPUT: Synthetic dataset in Data/synthetic_data_{participantId}.csv + updated Results section

================================================================================
STEP 1: EXTRACT CONTEXT FROM EXISTING PAPER
================================================================================

Read the current paper version to extract:

1. **Research Questions and Hypotheses**
   - The synthetic data must be designed to test these specifically
   - Extract H1, H2, H3... with their predicted relationships

2. **Proposed Variables**
   - Independent variables (IVs)
   - Dependent variables (DVs)
   - Mediating variables (if any)
   - Moderating variables (if any)
   - Control variables

3. **Expected Relationships**
   - Direction and strength of each relationship
   - Example: "X positively affects Y (β ≈ 0.3-0.5)"
   - Take from research questions or hypotheses

4. **Unit of Analysis**
   - What entities the data represents (individuals, organizations, etc.)
   - Target population characteristics

================================================================================
STEP 2: SPECIFY DATA CHARACTERISTICS
================================================================================

**Sample Size:**
- Survey research: 150-300 respondents (typical for IS research)
- Experimental research: 80-200 participants (40-100 per condition)
- Calculate based on: power analysis (0.80 power, α=0.05, expected effect size)

**Variable Distributions:**
- Likert scales (1-7): Slight negative skew typical (mean ~4.5-5.5)
- Continuous variables: Normal or slightly skewed based on construct
- Categorical: Realistic proportions matching target population

**Effect Sizes (realistic for IS research):**
- Small: r ≈ 0.10-0.15, β ≈ 0.10-0.20
- Medium: r ≈ 0.25-0.35, β ≈ 0.25-0.40
- Large: r ≈ 0.45-0.55, β ≈ 0.45-0.60

**Noise and Variance:**
- Add realistic measurement error (reliability α = 0.70-0.90)
- Include individual variation (not all relationships perfectly clean)
- R² values typically 0.20-0.50 for IS models

================================================================================
STEP 3: ENSURE THEORETICAL CONSISTENCY
================================================================================

**Hypothesized Relationships:**
- Generate data where H1, H2, H3... hold at p < 0.05
- Effect sizes should match predictions from literature review
- Partial mediation: direct effects remain significant but reduced

**Non-Hypothesized Paths:**
- Include realistic non-significant relationships (p > 0.10)
- Control variables should show typical patterns from literature
- Some noise in the data (not all relationships perfectly clean)

**Variance Explained:**
- R² = 0.25-0.45 for main DVs (typical for IS behavioral models)
- Adjusted R² slightly lower (realistic model fit)
- F-statistics significant for overall model

**Demographic Variables:**
- Age: Match target population (e.g., working adults 25-55)
- Gender: Approximately balanced unless population-specific
- Experience: Realistic range for context

================================================================================
STEP 4: ADDRESS REVIEWER/SUPERVISOR FEEDBACK
================================================================================

Read the latest feedback file for specific guidance:
- Reviewer concerns about empirical validation
- Supervisor directives about data characteristics
- Specific hypotheses to demonstrate
- Control variables to include

Example adaptations:
- "Reviewer noted lack of empirical validation" → Generate data demonstrating model testability
- "Strengthen mediation analysis" → Ensure mediator shows significant indirect effects
- "Add control for experience" → Include experience variable with realistic correlations

================================================================================
STEP 5: RESEARCH LITERATURE FOR CALIBRATION
================================================================================

**Before generating data, search for:**
1. Meta-analyses of similar constructs (for effect size benchmarks)
2. Published studies with similar models (for realistic R² values)
3. Validated scales (for proper measurement properties)

**Use Semantic Scholar API to find:**
- Effect sizes from prior empirical studies
- Correlation matrices from related research
- Sample characteristics from target populations

**Calibration sources:**
- "Technology acceptance meta-analysis effect sizes"
- "Trust in IS empirical studies correlations"
- "[Your construct] survey research statistics"

================================================================================
STEP 6: GENERATE OUTPUT
================================================================================

**Create Data Files:**

1. **synthetic_data_{participantId}.csv**
   - Clear column headers matching paper variable names
   - One row per observation
   - Proper data types (numeric for scales, string for categorical)

2. **synthetic_data_codebook_{participantId}.txt**
   \`\`\`
   VARIABLE       TYPE      SCALE       DESCRIPTION
   ----------------------------------------------------------------
   respondent_id  integer   1-N         Unique identifier
   iv_name        numeric   1-7         Independent variable (7-point Likert)
   dv_name        numeric   1-7         Dependent variable (7-point Likert)
   age            integer   18-65       Participant age in years
   gender         string    M/F/O       Participant gender
   \`\`\`

3. **synthetic_data_summary_{participantId}.txt**
   - Descriptive statistics (M, SD for all variables)
   - Correlation matrix
   - Reliability estimates (Cronbach's α)
   - Key regression/hypothesis test results

================================================================================
STEP 7: UPDATE PAPER WITH RESULTS
================================================================================

After generating synthetic data:

1. **Update Results Section:**
   - Add statistical analysis results
   - Include hypothesis test outcomes (H1 supported, H2 supported, etc.)
   - Present tables with regression coefficients, p-values
   - Reference figures showing key relationships

2. **Add Required Tables:**
   - Table: Descriptive Statistics and Correlations
   - Table: Hypothesis Test Results (regression analysis)
   - Table: Measurement Model Results (if SEM)

3. **Add Required Figures:**
   - Figure: Results overlaid on research model (paths with β values)
   - Figure: Key effect visualizations (if applicable)

4. **Update Discussion:**
   - Interpret findings in light of hypotheses
   - Connect to theoretical implications
   - Note that data is synthetic (transparency statement)

================================================================================
EXAMPLE TEMPLATE
================================================================================

"Based on this paper's theoretical model, generate synthetic survey data:

**Sample:** 250 respondents representing IT professionals

**Variables:**
- IV: Technology self-efficacy (7-point Likert, 5 items)
- DV: System adoption intention (7-point Likert, 4 items)
- Mediator: Perceived usefulness (7-point Likert, 6 items)
- Controls: Age (continuous), Experience (years), Gender (binary)

**Expected Relationships:**
- Self-efficacy → Perceived usefulness: β ≈ 0.45
- Perceived usefulness → Adoption intention: β ≈ 0.52
- Direct effect (self-efficacy → adoption): β ≈ 0.15 (partial mediation)

**Constraints:**
- All Cronbach's alphas > 0.70
- Realistic multicollinearity (VIF < 3)
- Support for hypotheses at p < 0.05

**Reviewer Feedback to Address:**
The reviewer criticized the lack of empirical evidence for the mediation
hypothesis—ensure the synthetic data supports testing this relationship
with appropriate statistical power."

================================================================================
QUALITY CHECKLIST
================================================================================

Before generating, verify you have specified:
□ Which hypotheses the data should support (H1, H2, H3...)
□ Realistic effect sizes for your domain (from literature)
□ Appropriate sample size for statistical analyses
□ Variable types and measurement scales
□ Any constraints from reviewer/supervisor feedback

After generating, verify:
□ CSV file created in Data/ directory
□ Codebook created with variable descriptions
□ Summary statistics computed
□ Results section updated in paper
□ Transparency statement included about synthetic data

================================================================================
DELIVERABLES
================================================================================

1. Data/synthetic_data_{participantId}.csv
2. Data/synthetic_data_codebook_{participantId}.txt
3. Data/synthetic_data_summary_{participantId}.txt
4. Updated Paper/icis_paper_{participantId}_v{N+1}.tex with Results section

================================================================================
`,ux={SETUP:"setup.txt",BUILDER:"builder.txt",REVIEWER:"reviewer.txt",SUPERVISOR:"supervisor.txt",REVISER:"reviser.txt",FINALIZE:"finalize.txt",TEMPLATE:"template.txt",MISQ_CRITERIA:"review_criteria.txt",INFOGRAPHIC:"infographic.txt",TABLE:"datatable.txt",SYNTHETIC_DATA:"synthetic_data.txt"},dx={SETUP:nx,BUILDER:Jb,REVIEWER:ex,SUPERVISOR:ax,REVISER:tx,FINALIZE:rx,TEMPLATE:ix,MISQ_CRITERIA:sx,INFOGRAPHIC:lx,TABLE:ox,SYNTHETIC_DATA:cx},Si={};function Yc(c,l){let s=c;s=s.replace(/\{ICIS_PATH\}/g,p0);const u=`/${l}`;return s=s.replace(/\{CONF_PATH\}/g,u),s}function fx(c,l){return`${c}:${l}`}async function px(c,l){const s=fx(c,l);if(Si[s])return Si[s];const u=ux[l];try{const f=await fetch(`/venues/conferences/${c}/${u}`);if(f.ok){const m=await f.text(),p=Yc(m,c);return Si[s]=p,p}}catch{console.warn(`[PromptService] Could not load conference prompt: ${c}/${u}`)}try{const f=await fetch(`/venues/shared/${u}`);if(f.ok){const m=await f.text(),p=Yc(m,c);return Si[s]=p,p}}catch{console.warn(`[PromptService] Could not load shared prompt: ${u}`)}console.log(`[PromptService] Falling back to legacy prompt for ${l}`);const d=dx[l];if(d){const f=Yc(d,c);return Si[s]=f,f}return`[Prompt not found: ${l}]`}async function Ni(c){const l=Kb();return px(l,c)}const ja="https://icis-deploy-12-10-2025.vercel.app",Ii="http://localhost:3001";function Ma(){return{"Content-Type":"application/json"}}const Im="";let Mi="research";const Dm={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function Di(){return Dm[Mi].gemini}function ru(){return Dm[Mi].openai}function hx(c){Mi=c,console.log(`[GeminiService] Paper mode set to: ${c}`),console.log(`[GeminiService] Using Gemini model: ${Di()}`),console.log(`[GeminiService] Using OpenAI model: ${ru()}`)}function mx(){return`https://generativelanguage.googleapis.com/v1beta/models/${Di()}:generateContent?key=${Im}`}console.log("[API] Using Vercel proxy:",ja);let Ei=null,wi=null;async function gx(c=10){return Ei&&Ei.length>=c?(console.log(`[ExamplePapers] Using cached papers (${Ei.length} available)`),Ei.slice(0,c)):wi?(console.log("[ExamplePapers] Load already in progress, waiting..."),(await wi).slice(0,c)):(console.log(`[ExamplePapers] Loading ${c} example papers...`),wi=(async()=>{try{const l=ja?`${ja}/api/example-papers?count=${c}`:`${Ii}/api/example-papers?count=${c}`;console.log(`[ExamplePapers] Fetching from: ${l}`);const s=await fetch(l,{method:"GET",headers:Ma()});if(!s.ok)throw new Error(`Failed to load example papers: ${s.status} ${s.statusText}`);const u=await s.json();if(!u.success||!u.papers)throw new Error(u.error||"Invalid response from example papers API");return Ei=u.papers,console.log(`[ExamplePapers] Loaded ${u.papers.length} papers (${Math.round(u.totalSize/1024/1024)}MB total)`),u.papers}catch(l){throw console.error("[ExamplePapers] Failed to load:",l),wi=null,l}})(),wi)}function Om(c){var u,d,f;const l=(f=(d=(u=c.candidates)==null?void 0:u[0])==null?void 0:d.content)==null?void 0:f.parts;if(!l||!Array.isArray(l))return null;const s=l.filter(m=>m.text).map(m=>m.text);return s.length===0?null:(s.length>1&&console.log(`[Gemini] Concatenating ${s.length} text parts`),s.join(""))}async function yx(c,l,s){var h,A,w,_;const u=[];for(const v of s)u.push({inlineData:{mimeType:v.mimeType,data:v.base64}});const d=`
You have been provided with ${s.length} exemplar ICIS (International Conference on Information Systems) papers as PDFs above.
These are high-quality, published papers that represent the standard of excellence for ICIS publications.

CRITICAL INSTRUCTION: Use these papers as examples of:
1. Academic writing style and tone appropriate for top-tier IS venues
2. Paper structure and section organization
3. Depth and rigor of theoretical development
4. Quality of literature review and citation practices
5. Methodology presentation standards
6. Results presentation and interpretation
7. Discussion and contribution articulation

Your output should match the quality, depth, and academic rigor of these exemplar papers.

`;u.push({text:d+c});const f={contents:[{parts:u}],systemInstruction:{parts:[{text:l}]},generationConfig:{maxOutputTokens:16384,temperature:.7}};console.log(`[Gemini] Calling with ${s.length} example papers...`),console.log(`[Gemini] Using model: ${Di()}`),console.log(`[Gemini] Total parts: ${u.length} (${s.length} PDFs + 1 text)`);const m=await zi(),p=new AbortController,b=setTimeout(()=>{console.log("[Gemini] Request timeout - aborting after 5 minutes"),p.abort()},3e5);try{let v;if(m.type==="vercel"||m.type==="local"){const R=m.type==="local"?`${m.baseUrl}/api/gemini`:`${m.baseUrl}/api/gemini`;console.log(`[Gemini] Using ${m.type} proxy for multimodal request: ${R}`),v=await fetch(R,{method:"POST",headers:Ma(),body:JSON.stringify({...f,model:Di()}),signal:p.signal})}else{if(!Im)throw new Rt("API_KEY_INVALID","Gemini API key is not configured and no proxy available","Missing VITE_GEMINI_API_KEY",!1);console.log("[Gemini] Using direct API for multimodal request"),v=await fetch(mx(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f),signal:p.signal})}if(clearTimeout(b),!v.ok){const R=await v.text();throw vx(v.status,R)}const T=await v.json(),g=Om(T),S=(A=(h=T.candidates)==null?void 0:h[0])==null?void 0:A.finishReason;if(S&&S!=="STOP"&&console.warn(`[Gemini] Response finished with reason: ${S} (content length: ${(g==null?void 0:g.length)||0})`),!g){if(S==="SAFETY")throw new Rt("CONTENT_FILTERED","Response was filtered due to safety settings.",`Finish reason: ${S}`,!1);if(S==="RECITATION"){const R=(w=T.candidates)==null?void 0:w[0],O=R==null?void 0:R.citationMetadata,z=R==null?void 0:R.safetyRatings;throw console.warn("[Gemini] RECITATION detected - output blocked due to similarity to training data"),console.warn("[Gemini] RECITATION details:",JSON.stringify({citationMetadata:O,safetyRatings:z,contentBlockReason:R==null?void 0:R.contentBlockReason,candidateCount:(_=T.candidates)==null?void 0:_.length},null,2)),new Rt("CONTENT_FILTERED","Response blocked due to similarity to training data (RECITATION). Retrying without example papers.",`Finish reason: ${S}`,!0)}throw new Rt("INVALID_RESPONSE","Empty response from AI with examples.",JSON.stringify(T).substring(0,200),!0)}return console.log(`[Gemini] Response received with examples (${g.length} chars)`),g}catch(v){if(clearTimeout(b),v instanceof Rt)throw v;const T=v;throw T.name==="AbortError"?new Rt("NETWORK_ERROR","Request timed out (5 min). The request with example papers may be too large.","AbortError: Request timeout",!1):new Rt("UNKNOWN",`Error with example papers: ${T.message}`,T.stack||T.message,!1)}}class Rt extends Error{constructor(l,s,u,d=!1,f){super(s),this.type=l,this.userMessage=s,this.technicalDetails=u,this.retryable=d,this.statusCode=f,this.name="GeminiError"}}function vx(c,l){var f,m;let s={};try{s=JSON.parse(l)}catch{}const u=((f=s.error)==null?void 0:f.message)||l,d=((m=s.error)==null?void 0:m.status)||"";switch(c){case 401:case 403:return new Rt("API_KEY_INVALID","API key is invalid or missing. Please check your configuration.",u,!1,c);case 429:return new Rt("RATE_LIMITED","Rate limit exceeded. Please wait a moment before trying again.",u,!0,c);case 503:return d==="UNAVAILABLE"||u.includes("overloaded")?new Rt("MODEL_OVERLOADED","The AI model is temporarily overloaded. Retrying automatically...",u,!0,c):new Rt("UNKNOWN","Service temporarily unavailable. Retrying...",u,!0,c);case 500:case 502:case 504:return new Rt("UNKNOWN","Server error. Retrying automatically...",u,!0,c);default:return new Rt("UNKNOWN",`API error (${c}): ${u.substring(0,100)}`,u,!1,c)}}const ol=c=>new Promise(l=>setTimeout(l,c));async function bx(c,l){var A,w;const s=l===Ii?`${l}/api/gemini/chat`:`${l}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${s}`);const u={...c,model:Di()},d=new AbortController,f=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),d.abort()},18e4),m=await fetch(s,{method:"POST",headers:Ma(),body:JSON.stringify(u),signal:d.signal});if(clearTimeout(f),!m.ok){const _=await m.json().catch(()=>({error:"Unknown error"}));throw new Rt("UNKNOWN",`Gemini proxy error: ${_.error||_.details||"Unknown error"}`,JSON.stringify(_),m.status>=500)}const p=await m.json(),b=Om(p),h=(w=(A=p.candidates)==null?void 0:A[0])==null?void 0:w.finishReason;if(h&&h!=="STOP"&&console.warn(`[Gemini Proxy] Response finished with reason: ${h} (content length: ${(b==null?void 0:b.length)||0})`),!b)throw new Rt("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(p).substring(0,200),!0);return b}async function gn(c,l){const s={contents:[{parts:[{text:c}]}],generationConfig:{maxOutputTokens:16384,temperature:.7}};l&&(s.systemInstruction={parts:[{text:l}]});const u=await zi();if(u.type==="vercel"||u.type==="local")return console.log(`[Gemini] Using ${u.type} proxy...`),bx(s,u.baseUrl);throw new Rt("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function cl(c){let l=c;const s=l.match(/```latex\s*([\s\S]*?)\s*```/);s&&(l=s[1]);const u=l.indexOf("\\end{document}");return u!==-1&&(l=l.substring(0,u+14)),l=l.replace(/```javascript[\s\S]*?```/g,""),l=l.replace(/```js[\s\S]*?```/g,""),l=l.replace(/```python[\s\S]*?```/g,""),l=l.replace(/```[\s\S]*?```/g,""),l=l.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),l=l.replace(/Verification Report:[\s\S]*$/gi,""),l=l.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),l=l.replace(/console\.log\([\s\S]*?\);/g,""),l=l.replace(/const \w+ = \{[\s\S]*?\};/g,""),l=l.trim(),l=l.replace(/\\includegraphics(\[[^\]]*\])?\{\.\.\/Results\//g,"\\includegraphics$1{"),l=l.replace(/\\includegraphics(\[[^\]]*\])?\{Results\//g,"\\includegraphics$1{"),console.log(`[cleanLatexOutput] Cleaned content from ${c.length} to ${l.length} characters`),l}function xx(c){const l=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
1. Is concise (10-15 words maximum)
2. Clearly indicates the research focus and contribution
3. Uses appropriate academic terminology for Information Systems
4. Avoids colons if possible, but can use them if needed for clarity
5. Does NOT include any LaTeX commands - just return the plain text title
Return ONLY the title text, nothing else.`,minWords:5},{name:"Abstract",key:"abstract",prompt:`Write a 150-200 word abstract that:
1. Align with the paper title provided in the previous sections
2. States the research problem clearly
3. Describes the methodology/approach
4. Highlights key theoretical contributions
5. Summarizes main findings
6. Notes practical implications`,minWords:150},{name:"Introduction",key:"introduction",prompt:`Write a comprehensive Introduction section (800-1000 words) that:
1. Opens with a compelling hook that connects to the paper title
2. Establishes the importance and timeliness of the research
3. Identifies the research gap in existing literature
4. States the research question(s) clearly (aligned with the title)
5. Previews the theoretical contribution
6. Outlines the paper structure
Use flowing paragraphs (150-250 words each). No bullet points.`,minWords:800},{name:"Literature Review",key:"literature_review",prompt:`Write a Literature Review section (1200-1500 words) that:
1. Reviews relevant theoretical foundations
2. Synthesizes prior empirical work
3. Identifies gaps and tensions in existing research
4. Positions this study within the broader literature
5. Builds toward the theoretical framework
Include at least 15-20 citations. Use flowing paragraphs.

⚠️ PRIORITIZE RECENT LITERATURE: At least 60% of citations should be from 2020-2025.
Include foundational papers where necessary, but emphasize recent developments and current state of the field.`,minWords:1200},{name:"Theoretical Framework",key:"theory",prompt:`Write a Theory/Theoretical Framework section (1000-1200 words) that:
1. Presents the theoretical foundation
2. Develops hypotheses or propositions with clear rationale
3. Explains the mechanisms and relationships
4. Includes a research model or conceptual framework
5. Links back to the literature review
Use formal academic language with clear logical flow.`,minWords:1e3},{name:"Methodology",key:"methodology",prompt:`Write a Method section (1000-1200 words) that:
1. Describes the research design and justification
2. Explains data collection procedures
3. Details the sample and sampling approach
4. Describes measures and operationalization
5. Outlines the analysis approach
Be specific and detailed enough for replication.`,minWords:1e3}];return c?l.push({name:"Conclusion",key:"conclusion",prompt:`Write a brief Conclusion section (400-500 words) for a research-in-progress paper that:
1. Summarizes the theoretical contribution
2. Notes that data collection is pending
3. Discusses expected contributions once complete
4. Outlines next steps`,minWords:400},{name:"References",key:"references",prompt:`Generate a BibTeX bibliography with 15-20 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

⚠️ RECENCY REQUIREMENT: At least 10 references (60%+) must be from 2020-2025.
Include 3-5 foundational/seminal papers from earlier years where appropriate for theoretical grounding.

⚠️ VALIDATION NOTE: All references will be automatically verified against Semantic Scholar.
- References that cannot be verified may be supplemented with discovered papers
- For best results, use well-known papers with standard citation formats
- Include DOI when known: doi = {10.xxxx/xxxxx}

FORMAT: BibTeX entries with relevance comments. Output ONLY valid BibTeX.

% Relevance: Foundational TAM paper for technology acceptance framework
@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  volume = {13},
  number = {3},
  pages = {319--340},
  year = {1989},
  doi = {10.2307/249008}
}

% Relevance: Updated IS success model for measuring system effectiveness
@article{delone2003delone,
  author = {DeLone, William H. and McLean, Ephraim R.},
  title = {The {DeLone} and {McLean} model of information systems success: A ten-year update},
  journal = {Journal of Management Information Systems},
  volume = {19},
  number = {4},
  pages = {9--30},
  year = {2003}
}

% Relevance: Unified theory integrating multiple technology acceptance models
@article{venkatesh2003user,
  author = {Venkatesh, Viswanath and Morris, Michael G. and Davis, Gordon B. and Davis, Fred D.},
  title = {User acceptance of information technology: Toward a unified view},
  journal = {MIS Quarterly},
  volume = {27},
  number = {3},
  pages = {425--478},
  year = {2003}
}

BIBTEX FORMAT RULES:
1. Use @article for journal papers, @inproceedings for conference papers, @book for books
2. Citation key format: authorYYYYfirstword (e.g., davis1989perceived)
3. Author format: LastName, FirstName and LastName, FirstName
4. Use double dashes for page ranges: pages = {123--145}
5. Protect proper nouns with braces: title = {The {DeLone} and {McLean} model}
6. Include: author, title, journal/booktitle, year, volume, number, pages
7. Add a % Relevance: comment before each entry explaining why it's cited

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods, Academy of Management Review
- Yin (2018) - Case study research design (book)

Requirements:
1. Output ONLY BibTeX entries with % Relevance comments, no other text
2. ONLY include papers you are confident exist
3. Citation keys must match the \\cite{} commands used in the paper
4. Sort entries alphabetically by citation key
5. Prioritize recent papers (2020-2025) while including necessary foundational works`,minWords:300}):l.push({name:"Results",key:"results",prompt:`Write a COMPLETE Results section (1200-1500 words) that:
1. Presents findings systematically based on the methodology described
2. Reports statistical results with effect sizes (generate plausible values consistent with the research design)
3. Addresses each hypothesis or research question from the theory section
4. References tables and figures (e.g., "As shown in Figure 1...", "Table 1 presents...")
5. Reports both significant and non-significant findings
6. If this is a simulation/computational study, report simulation outcomes and model performance metrics
7. If this is qualitative research, present themes and key findings from the analysis

CRITICAL: Do NOT use placeholder text like "[To be completed]" or "[Results pending]".
You MUST generate realistic, plausible findings that are consistent with the research design and methodology.
Use objective, factual language throughout.`,minWords:1200},{name:"Discussion",key:"discussion",prompt:`Write a Discussion section (1000-1200 words) that:
1. Interprets key findings in light of theory
2. Compares results to prior research
3. Explains unexpected findings
4. Discusses theoretical implications
5. Addresses practical implications
6. Acknowledges limitations
7. Suggests future research directions`,minWords:1e3},{name:"Conclusion",key:"conclusion",prompt:`Write a Conclusion section (400-500 words) that:
1. Summarizes the main contribution
2. Restates key findings
3. Emphasizes theoretical and practical significance
4. Ends with a strong closing statement`,minWords:400},{name:"References",key:"references",prompt:`Generate a BibTeX bibliography with 20-30 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

⚠️ RECENCY REQUIREMENT: At least 15 references (60%+) must be from 2020-2025.
Include 5-8 foundational/seminal papers from earlier years where appropriate for theoretical grounding.

⚠️ VALIDATION NOTE: All references will be automatically verified against Semantic Scholar.
- References that cannot be verified may be supplemented with discovered papers
- For best results, use well-known papers with standard citation formats
- Include DOI when known: doi = {10.xxxx/xxxxx}

FORMAT: BibTeX entries with relevance comments. Output ONLY valid BibTeX.

% Relevance: Foundational TAM paper for technology acceptance framework
@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  volume = {13},
  number = {3},
  pages = {319--340},
  year = {1989},
  doi = {10.2307/249008}
}

% Relevance: Updated IS success model for measuring system effectiveness
@article{delone2003delone,
  author = {DeLone, William H. and McLean, Ephraim R.},
  title = {The {DeLone} and {McLean} model of information systems success: A ten-year update},
  journal = {Journal of Management Information Systems},
  volume = {19},
  number = {4},
  pages = {9--30},
  year = {2003}
}

% Relevance: Unified theory integrating multiple technology acceptance models
@article{venkatesh2003user,
  author = {Venkatesh, Viswanath and Morris, Michael G. and Davis, Gordon B. and Davis, Fred D.},
  title = {User acceptance of information technology: Toward a unified view},
  journal = {MIS Quarterly},
  volume = {27},
  number = {3},
  pages = {425--478},
  year = {2003}
}

% Relevance: Canonical case study research methodology
@book{yin2018case,
  author = {Yin, Robert K.},
  title = {Case Study Research and Applications: Design and Methods},
  publisher = {Sage Publications},
  year = {2018},
  edition = {6th}
}

BIBTEX FORMAT RULES:
1. Use @article for journals, @inproceedings for conferences, @book for books
2. Citation key format: authorYYYYfirstword (e.g., davis1989perceived)
3. Author format: LastName, FirstName and LastName, FirstName
4. Use double dashes for page ranges: pages = {123--145}
5. Protect proper nouns with braces: title = {The {DeLone} and {McLean} model}
6. Include: author, title, journal/booktitle, year, volume, number, pages
7. Add a % Relevance: comment before each entry explaining why it's cited

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods, Academy of Management Review
- Yin (2018) - Case study research design (book)
- Rogers (2003) - Diffusion of Innovations (book)
- Straub et al. (2004) - Validation guidelines, MIS Quarterly

Requirements:
1. Output ONLY BibTeX entries with % Relevance comments, no other text
2. ONLY include papers you are confident exist
3. Include mix of: @article, @inproceedings (ICIS, ECIS, AMCIS), @book
4. Citation keys must match the \\cite{} commands used in the paper
5. Sort entries alphabetically by citation key
6. Prioritize recent papers (2020-2025) while including necessary foundational works`,minWords:500}),l}async function al(c,l){var A;const s=Object.entries(l.previousSections).map(([w,_])=>`[${w}]
${_.substring(0,500)}...`).join(`

`);let u="";if(c.key==="references"){const w=Object.values(l.previousSections).join(`
`),_=/\\cite\{([^}]+)\}/g,v=new Set;let T;for(;(T=_.exec(w))!==null;)T[1].split(",").map(S=>S.trim()).forEach(S=>v.add(S));if(v.size>0){const g=[...v].sort().join(`
- `);if(console.log(`[generateSection] Found ${v.size} \\cite{} keys in paper`),l.accumulatedBibTeX&&l.accumulatedBibTeX.trim().length>0){const S=(l.accumulatedBibTeX.match(/@(article|inproceedings|book|incollection|misc)\{/gi)||[]).length;console.log(`[generateSection] Using ${S} pre-validated BibTeX entries`),u=`
⚠️ IMPORTANT - INCREMENTAL CITATION VALIDATION ACTIVE:
Most citations in this paper have ALREADY been validated against Semantic Scholar during section generation.

ALREADY VALIDATED (${S} entries):
The following BibTeX entries have been validated and will be included automatically:

${l.accumulatedBibTeX.substring(0,3e3)}${l.accumulatedBibTeX.length>3e3?`
... (truncated)`:""}

YOUR TASK:
1. Review the citation keys used in the paper: ${g.substring(0,500)}
2. Add 3-5 ADDITIONAL foundational/seminal references that are NOT already in the validated entries above
3. These should be highly-cited, well-known papers in the field (e.g., Davis 1989 TAM, Venkatesh 2003 UTAUT, DeLone & McLean IS Success)
4. Output ONLY the NEW BibTeX entries you are adding (the validated ones are already included)
5. Do NOT duplicate any entries that already exist in the validated references above

OUTPUT: Only new BibTeX entries for foundational references not already validated.
`}else u=`
⚠️ CRITICAL - CITATION KEYS USED IN PAPER (${v.size} total):
The paper body uses these \\cite{key} commands. You MUST generate a BibTeX entry for EACH key:

- ${g}

INSTRUCTIONS:
1. Generate ONE @article or @inproceedings BibTeX entry for EACH citation key listed above
2. The BibTeX entry key MUST EXACTLY match the \\cite{} key used in the paper
3. Example: \\cite{davis1989perceived} requires @article{davis1989perceived, ...}
4. You may add 3-5 additional foundational references beyond the ${v.size} required keys
5. Total references should be ${v.size} + 3-5 additional = ${v.size+3} to ${v.size+5} entries

DO NOT skip any of the ${v.size} citation keys listed above. Each one MUST have a matching BibTeX entry.
`}}let d="";const f=["abstract","introduction","methodology","results","discussion","conclusion"];l.dataSummary&&f.includes(c.key)?(console.log(`[generateSection] Adding data summary to ${c.key} section (${l.dataSummary.length} chars)`),c.key==="methodology"||c.key==="results"?d=`
ACTUAL DATA FILE ANALYSIS:
The following is a summary of the actual data file that will be used in this research.
You MUST incorporate these specific details into your writing:

${l.dataSummary}

IMPORTANT: Use the ACTUAL column names, sample sizes, and statistics from the data summary above.
Do NOT use generic placeholders or made-up values - use the real data characteristics.
`:d=`
EMPIRICAL STUDY CONTEXT:
This research includes EMPIRICAL DATA analysis. A real dataset has been provided with the following characteristics:
${l.dataSummary.substring(0,1e3)}

IMPORTANT FOR ${c.key.toUpperCase()}:
- This is an EMPIRICAL study with real data, NOT a purely theoretical paper
- Mention the empirical nature of the research appropriately for this section
- Reference the data-driven approach where relevant
`):l.dataSummary&&console.log(`[generateSection] Data summary available but not used for ${c.key} section`);const m=`You are writing an academic research paper for ICIS (International Conference on Information Systems).

RESEARCH CONTEXT (from interview):
${l.interviewTranscript.substring(0,3e3)}
${d}
${u}
${s?`PREVIOUSLY WRITTEN SECTIONS (for continuity and alignment):
${s}

IMPORTANT: If a TITLE has been generated above, ensure your content aligns with and supports that title.

`:""}

NOW WRITE THE ${c.name.toUpperCase()} SECTION:

${c.prompt}
${c.key==="references"?`
OUTPUT FORMAT: Pure BibTeX entries only. No prose, no explanations, no markdown.
Start directly with the first @article{ or @inproceedings{ entry.`:`
IMPORTANT:
- Write in formal academic style
- Use flowing paragraphs (150-250 words each)
- Minimum ${c.minWords} words
- No bullet points in the main narrative
- Maintain consistency with previous sections
- Align content with the paper TITLE (if already generated)
- Do NOT include section headers in your response - just the content paragraphs
- Do NOT repeat the section name at the start (no "**Introduction**", "# Introduction", etc.)
- For SUBSECTIONS within a section, use LaTeX format: \\subsection{Subsection Title}
- Do NOT use markdown bold **Subsection Title** for subsections - use \\subsection{} instead
- NEVER use placeholder text like "[To be completed]", "[TBD]", "[Insert X here]", or "[Reference to be completed]"
- ALL references in the bibliography MUST be complete with real author names, paper titles, journal/venue names, and publication years
- Generate complete, realistic content based on the research context provided${l.dataSummary?`
- This is an EMPIRICAL study with real data - make this clear in your writing
- For Methodology/Results: USE the actual data characteristics from the DATA FILE ANALYSIS above
- Reference the data-driven nature of the research where appropriate`:""}

CITATION FORMAT (CRITICAL - LaTeX \\cite{} Commands):
- Use LaTeX \\cite{key} commands for ALL citations
- Citation key format: authorYYYYword (e.g., davis1989perceived, venkatesh2003user)
- Single citation: "prior research has shown this effect \\cite{jensen1976theory}"
- Multiple citations: "as demonstrated in prior work \\cite{davis1989perceived,venkatesh2003user}"
- Narrative citation: "Davis \\cite{davis1989perceived} demonstrated that..."
- Use lowercase for citation keys, no spaces, author's last name + year + first word of title
- Aim for 15-25 unique citations across the paper

BIBLIOGRAPHY ENTRIES (CRITICAL - REQUIRED FOR EACH CITATION):
After your section content, you MUST output complete BibTeX entries for EVERY citation you used.
Format them in a block starting with "%%BIBLIOGRAPHY%%" and ending with "%%END_BIBLIOGRAPHY%%":

%%BIBLIOGRAPHY%%
@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  year = {1989},
  volume = {13},
  number = {3},
  pages = {319--340}
}
@article{venkatesh2003user,
  author = {Venkatesh, Viswanath and Morris, Michael G. and Davis, Gordon B. and Davis, Fred D.},
  title = {User acceptance of information technology: Toward a unified view},
  journal = {MIS Quarterly},
  year = {2003},
  volume = {27},
  number = {3},
  pages = {425--478}
}
%%END_BIBLIOGRAPHY%%

BIBTEX REQUIREMENTS:
- Every \\cite{key} in your text MUST have a matching @article/@book/@inproceedings entry
- Include COMPLETE bibliographic information: author (full names), title (full), journal/venue, year, volume, number, pages
- Use real, accurate bibliographic data - NO placeholders or partial entries
- Format: @article{key, author = {LastName, FirstName and ...}, title = {...}, journal = {...}, year = {...}, ...}
- Use "and" between authors, double dashes for page ranges (e.g., 319--340)
- The citation key MUST exactly match what you used in \\cite{}`}`,p="You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.";let b;if(l.examplePapers&&l.examplePapers.length>0&&Mi==="research"){console.log(`[generateSection] Using ${l.examplePapers.length} example papers for ${c.name} (research mode)`);try{b=await yx(m,p,l.examplePapers)}catch(w){if(w instanceof Rt&&((A=w.technicalDetails)!=null&&A.includes("RECITATION")))console.warn(`[generateSection] RECITATION error for ${c.name} - retrying without example papers`),b=await gn(m,p);else throw w}}else b=await gn(m,p);if(b=Rx(b),b=b.replace(/^\s*\*\*([^*\n]+)\*\*\s*$/gm,"\\subsection{$1}").replace(/^\s*#{1,3}\s+.+\n/gm,"").trim(),!["title","abstract","references"].includes(c.name.toLowerCase()))try{console.log(`[generateSection] Generating Semantic Scholar references for ${c.name}`),b=await Lx(b,c.name,6)}catch(w){console.error(`[generateSection] Error generating SS references for ${c.name}:`,w)}return b}const Sx=async(c="Mock transcript content...",l=!1,s,u,d)=>{var ce,D,Y,E,W;console.log(`[runBuilder] ENTRY - dataFileName="${u}" (type: ${typeof u})`),Tx(),_x(),Nx();const f=xx(l),m={};console.log(`[Builder] Starting section-by-section generation (${f.length} sections, ${l?"partial":"full"} paper)`);let p,b,h,A;if(u){console.log(`[Builder] User-provided data file: ${u} - starting 3-step data pipeline`);try{s==null||s("Preliminary Analysis","starting"),console.log("[Builder] Step 1: Preliminary analysis of raw data...");const I=await Vx(u,j=>console.log(`[Builder] ${j}`));I.success?(A=I.analysis,console.log("[Builder] Preliminary analysis complete"),console.log("[Builder] Raw data profile:",(ce=I.analysis)==null?void 0:ce.substring(0,300)),s==null||s("Preliminary Analysis","completed")):(console.warn("[Builder] Preliminary analysis had issues:",I.error),s==null||s("Preliminary Analysis","completed"))}catch(I){console.warn("[Builder] Preliminary analysis error (non-fatal):",I),s==null||s("Preliminary Analysis","completed")}try{s==null||s("Data Cleaning","starting"),console.log("[Builder] Step 2: Cleaning data based on preliminary analysis...");const I=await $x(u,j=>console.log(`[Builder] ${j}`));I.success?(h=I.summary,console.log("[Builder] Data cleaning complete:",h),s==null||s("Data Cleaning","completed")):(console.warn("[Builder] Data cleaning had issues:",I.error),s==null||s("Data Cleaning","completed"))}catch(I){console.warn("[Builder] Data cleaning error (non-fatal):",I),s==null||s("Data Cleaning","completed")}s==null||s("Data Analysis","starting"),console.log("[Builder] Step 3: Full analysis of cleaned data for paper generation...");try{const I=await Mm(u,j=>console.log(`[Builder] ${j}`),d);if(console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((D=I.dataSummary)==null?void 0:D.length)||0,error:I.error}),I.success&&I.dataSummary){let j="";A&&(j+=`RAW DATA PROFILE:
${A}

`),h&&(j+=`DATA CLEANING PERFORMED:
${h}

`),j+=`CLEANED DATA ANALYSIS:
${I.dataSummary}`,p=j,console.log("[Builder] Full data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",p.substring(0,500)),s==null||s("Data Analysis","completed")}else b=`*** DATA ALERT: Could not analyze data file "${u}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${b}`),s==null||s("Data Analysis","error")}catch(I){b=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${b}`),s==null||s("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data pipeline");let w=[];if(Mi==="research")try{s==null||s("Loading Examples","starting"),console.log("[Builder] Research mode - loading ICIS 2024 example papers..."),w=await gx(5),console.log(`[Builder] Loaded ${w.length} example papers for quality calibration`),s==null||s("Loading Examples","completed")}catch(I){console.warn("[Builder] Could not load example papers:",I.message),console.warn("[Builder] Proceeding without example papers - quality may be lower"),s==null||s("Loading Examples","error")}else console.log("[Builder] Draft mode - skipping example papers for faster generation");let _=[],v=!1,T=[];const g=new Set;let S={total:0,verified:0,partial:0,unverified:0};const{validateCitationBatch:R,extractCitationKeys:O}=await ca(async()=>{const{validateCitationBatch:I,extractCitationKeys:j}=await import("./referenceValidationService-B5XK2f8z.js");return{validateCitationBatch:I,extractCitationKeys:j}},[]);async function z(I,j){const J=O(I);if(J.length===0){console.log(`[Builder] No citations found in ${j}`);return}const q=J.filter(me=>!g.has(me));if(q.length===0){console.log(`[Builder] All ${J.length} citations in ${j} already validated`);return}console.log(`[Builder] Validating ${q.length} new citations from ${j}...`),s==null||s("Citation Validation","starting");try{const me=await R(q,g);for(const C of me)C.status!=="ALREADY_EXISTS"&&(C.bibtexEntry&&T.push(C.bibtexEntry),g.add(C.citationKey),S.total++,C.status==="VERIFIED"?S.verified++:C.status==="PARTIAL"?S.partial++:S.unverified++);console.log(`[Builder] Citation validation for ${j}: ${q.length} new, ${g.size} total accumulated`),console.log(`[Builder] Validation stats: ${S.verified} verified, ${S.partial} partial, ${S.unverified} unverified`),s==null||s("Citation Validation","completed")}catch(me){console.error(`[Builder] Citation validation error in ${j}:`,me),s==null||s("Citation Validation","error")}}const B=["title","abstract","introduction","literature_review","theory"],k=["methodology","results"],H=l?["methodology","conclusion","references"]:["discussion","conclusion","references"];console.log("[Builder] Phase 1: Generating sections up to Theory...");for(const I of f.filter(j=>B.includes(j.key)))try{s==null||s(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const j=await al(I,{interviewTranscript:c,previousSections:m,dataSummary:p,examplePapers:w,accumulatedBibTeX:T.join(`

`)});m[I.key]=j,s==null||s(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${j.split(/\s+/).length} words)`),I.key!=="title"&&I.key!=="references"&&await z(j,I.name),await ol(500)}catch(j){throw s==null||s(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,j),new Error(`Failed to generate ${I.name}: ${j.message}`)}console.log("[Builder] Phase 2: Generating conceptual figures with paper context...");try{s==null||s("Conceptual Figures","starting");const I=Object.entries(m).map(([q,me])=>`[${q.toUpperCase()}]
${me}`).join(`

`),j=`${I.substring(0,4e3)}

Research Interview: ${c.substring(0,1500)}`,J=await zm(c,j,q=>console.log(`[Builder] ${q}`));if(J.success&&J.figures.length>0){console.log("[Builder] Analyzing figures with Gemini to generate captions and descriptions...");for(const q of J.figures)if(q.base64){const me=q.filename==="research_model.png"?"research_model":"theoretical_framework",C=await Hx(q.base64,me,I);q.description=C.caption,q.paragraphDescription=C.paragraphDescription,console.log(`[Builder] Generated caption and description for ${q.filename}`)}_=J.figures}s==null||s("Conceptual Figures","completed"),console.log(`[Builder] Generated ${_.length} conceptual figures with descriptions`)}catch(I){console.error("[Builder] Conceptual figure generation failed:",I),s==null||s("Conceptual Figures","error")}if(!l){console.log("[Builder] Phase 3: Generating Methodology and Results...");for(const I of f.filter(j=>k.includes(j.key)))try{s==null||s(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const j=await al(I,{interviewTranscript:c,previousSections:m,dataSummary:p,examplePapers:w,accumulatedBibTeX:T.join(`

`)});m[I.key]=j,s==null||s(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${j.split(/\s+/).length} words)`),I.key!=="references"&&await z(j,I.name),await ol(500)}catch(j){throw s==null||s(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,j),new Error(`Failed to generate ${I.name}: ${j.message}`)}if(p)try{s==null||s("Empirical Figures","starting"),console.log("[Builder] Phase 4: Generating empirical figures after Results...");const I=`Research Interview: ${c.substring(0,2e3)}`,j=await su(c,I,u,q=>console.log(`[Builder] ${q}`),p,!1),J=j.figures.filter(q=>q.filename!=="research_model.png"&&q.filename!=="theoretical_framework.png");_=[..._,...J],v=j.usedSyntheticData,j.dataAlert&&(b=b?`${b}
${j.dataAlert}`:j.dataAlert),s==null||s("Empirical Figures","completed"),console.log(`[Builder] Generated ${J.length} empirical figures`)}catch(I){console.error("[Builder] Empirical figure generation failed:",I),s==null||s("Empirical Figures","error");const j=`*** VISUALIZATION ERROR: ${I.message}`;b=b?`${b}
${j}`:j}}console.log("[Builder] Phase 5: Generating remaining sections...");for(const I of f.filter(j=>H.includes(j.key)))try{if(s==null||s(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`),I.key==="references"){console.log(`[Builder] Using ${T.length} incrementally validated BibTeX entries`),console.log(`[Builder] Citation stats: ${S.verified} verified, ${S.partial} partial, ${S.unverified} unverified`);const j=await al(I,{interviewTranscript:c,previousSections:m,dataSummary:p,examplePapers:w,accumulatedBibTeX:T.join(`

`)});m[I.key]=j}else{const j=await al(I,{interviewTranscript:c,previousSections:m,dataSummary:p,examplePapers:w,accumulatedBibTeX:T.join(`

`)});m[I.key]=j,await z(j,I.name)}s==null||s(I.name,"completed"),console.log(`[Builder] Completed: ${I.name}`),await ol(500)}catch(j){throw s==null||s(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,j),new Error(`Failed to generate ${I.name}: ${j.message}`)}if(m.references)try{s==null||s("Reference Finalization","starting"),console.log("[Builder] Finalizing references - merging accumulated BibTeX with LLM additions...");const I=T.length>0?`% === INCREMENTALLY VALIDATED REFERENCES (${T.length} entries) ===
% Validated during paper generation against Semantic Scholar
% Stats: ${S.verified} verified, ${S.partial} partial, ${S.unverified} unverified

`+T.join(`

`)+`

% === ADDITIONAL REFERENCES FROM LLM ===
`+m.references:m.references,{validateAndEnrichReferences:j}=await ca(async()=>{const{validateAndEnrichReferences:C}=await import("./referenceValidationService-B5XK2f8z.js");return{validateAndEnrichReferences:C}},[]),J=await j(I,c,{targetMin:l?15:25,targetMax:l?25:40,skipDiscovery:T.length>=15});m.references=J.bibtex;const q=J.report;console.log(`[Builder] Reference validation complete:
  - Total: ${q.totalReferences}
  - Verified: ${q.verified} (${(q.verificationRate*100).toFixed(0)}%)
  - Discovered: ${q.discovered}
  - Recency (2020-2025): ${(q.recencyScore*100).toFixed(0)}%`);const{storeValidationReport:me}=await ca(async()=>{const{storeValidationReport:C}=await Promise.resolve().then(()=>Ar);return{storeValidationReport:C}},void 0);me(q),s==null||s("Reference Validation","completed")}catch(I){console.error("[Builder] Reference validation failed:",I),s==null||s("Reference Validation","error")}if(_.length===0)try{s==null||s("Visualizations","starting"),console.log(`[Builder] Generating visualizations (post-sections fallback, ${l?"conceptual only":"full"})...`);const I=`
Abstract: ${((Y=m.abstract)==null?void 0:Y.substring(0,500))||""}
Research Focus: ${((E=m.introduction)==null?void 0:E.substring(0,500))||""}
Methodology: ${((W=m.methodology)==null?void 0:W.substring(0,500))||""}
`,j=await su(c,I,u,J=>console.log(`[Builder] ${J}`),p,!1);_=j.figures,v=j.usedSyntheticData,j.dataAlert&&(b=b?`${b}
${j.dataAlert}`:j.dataAlert),!p&&j.dataSummary&&(p=j.dataSummary),s==null||s("Visualizations","completed"),console.log(`[Builder] Generated ${_.length} figures (fallback, ${l?"conceptual":"full"})`)}catch(I){console.error("[Builder] Visualization generation failed:",I),s==null||s("Visualizations","error"),v=!0}let P,G;if(!l)try{s==null||s("DataTable","starting"),console.log("[Builder] Generating structured data table with GPT-5.2...");const I=await Zx(m,j=>console.log(`[Builder] ${j}`));if(I.success&&I.latexTable){if(G=I.latexTable,P=I.csvContent,P){const{storeDataTableCsv:j}=await ca(async()=>{const{storeDataTableCsv:J}=await Promise.resolve().then(()=>Ar);return{storeDataTableCsv:J}},void 0);j(P)}console.log("[Builder] Data table generated successfully"),s==null||s("DataTable","completed")}else console.warn("[Builder] Data table generation failed:",I.error),s==null||s("DataTable","error")}catch(I){console.error("[Builder] Data table generation error:",I),s==null||s("DataTable","error")}const $=Px(m,l,_,v,G),oe=$.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${oe} words, ${_.length} figures`),{paperContent:$,dataAlert:b,usedSyntheticData:v,dataSummary:p,dataTableCsv:P}};function Ex(c){let l=c;l=l.replace(/^```(?:bibtex|bib|latex|tex)?\s*\n?/i,""),l=l.replace(/\n?```\s*$/i,"");const s=l.search(/@\w+\s*\{/);s>0&&(l=l.substring(s));let u=0,d=l.length;for(let m=0;m<l.length;m++)l[m]==="{"&&u++,l[m]==="}"&&(u--,u===0&&(d=m+1));d<l.length&&(l=l.substring(0,d)),l=l.trim();const f=`% Bibliography generated by ICIScopilot
% ${new Date().toISOString()}

`;return console.log(`[BibTeX] Cleaned content: ${l.length} chars, ${(l.match(/@\w+\{/g)||[]).length} entries`),f+l}function wx(c){let l=c;return l=l.replace(/\*\*([^*]+)\*\*/g,"\\textbf{$1}"),l=l.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"\\textit{$1}"),l=l.replace(/\$\\ast\$([^$]+)\$\\ast\$/g,"\\textit{$1}"),l=l.replace(/`([^`]+)`/g,"\\texttt{$1}"),l=l.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),l=l.replace(/([^\\])%/g,"$1\\%"),l=l.replace(/([^\\])& /g,"$1\\& "),l=l.replace(/([^\\])#/g,"$1\\#"),l=l.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),l=l.replace(/__/g,"\\_\\_"),l=l.replace(/"/g,"''"),l=l.replace(/"/g,"``"),l=l.replace(/'/g,"'"),l=l.replace(/'/g,"`"),l=l.replace(/—/g,"---"),l=l.replace(/–/g,"--"),l=l.replace(/…/g,"\\ldots{}"),l=l.replace(/\\includegraphics(\[[^\]]*\])?\{\.\.\/Results\//g,"\\includegraphics$1{"),l=l.replace(/\\includegraphics(\[[^\]]*\])?\{Results\//g,"\\includegraphics$1{"),l}const ua=new Map;function Ax(c){var d,f,m,p;const l=/\\item\s+([^(]+?)\s*\((\d{4})\)\.\s*([^.]+)\.\s*\\textit\{([^}]+)\}[^\\]*/g;let s;for(;(s=l.exec(c))!==null;){const[b,h,A,w,_]=s,v=((d=h.split(",")[0].split(" ").pop())==null?void 0:d.toLowerCase())||"unknown",T=((f=w.split(/\s+/)[0])==null?void 0:f.toLowerCase().replace(/[^a-z]/g,""))||"work",g=`${v}${A}${T}`;ua.set(g,{authors:h.trim(),year:A,title:w.trim(),venue:_.trim(),fullText:b.trim()})}const u=/\\item\s+([^(]+?)\s*\((\d{4})\)\.\s*([^.]+)\.\s*([^\\]+?)(?=\\item|\\end\{itemize\}|$)/g;for(;(s=u.exec(c))!==null;){const[b,h,A,w,_]=s,v=((m=h.split(",")[0].split(" ").pop())==null?void 0:m.toLowerCase())||"unknown",T=((p=w.split(/\s+/)[0])==null?void 0:p.toLowerCase().replace(/[^a-z]/g,""))||"work",g=`${v}${A}${T}`;ua.has(g)||ua.set(g,{authors:h.trim(),year:A,title:w.trim(),venue:_.replace(/[.,\s]+$/,"").trim(),fullText:b.trim()})}}function xS(c){if(ua.has(c))return ua.get(c);const l=c.match(/^([a-z]+)(\d{4})/i);if(l){const[,s,u]=l;for(const[d,f]of ua)if(d.includes(s.toLowerCase())&&f.year===u)return f}}function Tx(){ua.clear()}const xu=new Map;function Rx(c){const l=/%%BIBLIOGRAPHY%%([\s\S]*?)%%END_BIBLIOGRAPHY%%/g;let s;for(;(s=l.exec(c))!==null;){const u=s[1],d=/@(article|book|inproceedings|incollection|misc)\{([^,]+),([^@]*?)(?=\n@|\n*$)/gi;let f;for(;(f=d.exec(u))!==null;){const[m,p,b,h]=f,A=b.trim().toLowerCase(),w=`@${p.toLowerCase()}{${A},${h}
}`;xu.set(A,w);const _=h.match(/author\s*=\s*\{([^}]+)\}/i),v=h.match(/title\s*=\s*\{([^}]+)\}/i),T=h.match(/(?:journal|booktitle)\s*=\s*\{([^}]+)\}/i),g=h.match(/year\s*=\s*\{?(\d{4})\}?/i);_&&v&&g&&(ua.set(A,{authors:_[1].trim(),year:g[1],title:v[1].trim(),venue:T?T[1].trim():"Unknown Venue",fullText:w}),console.log(`[BibTeX] Extracted LLM entry: ${A}`))}}return c.replace(l,"").trim()}function SS(c){return xu.get(c.toLowerCase())}function _x(){xu.clear()}const Cx=`${ja}/api/semantic-scholar`,_i=new Map,iu=new Set;function Nx(){_i.clear(),iu.clear()}function Ix(){return Array.from(_i.values()).join(`

`)}async function km(c,l=5){var s;try{console.log(`[SemanticScholar] Searching via proxy for: "${c}"`);const u=await fetch(Cx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"search",keywords:[c],limit:l})});if(u.status===429)return console.log(`[SemanticScholar] Rate limited for "${c}", waiting 2s...`),await new Promise(f=>setTimeout(f,2e3)),km(c,l);if(!u.ok)return console.log(`[SemanticScholar] Error ${u.status} for "${c}"`),[];const d=await u.json();return console.log(`[SemanticScholar] Found ${((s=d.papers)==null?void 0:s.length)||0} papers for "${c}"`),d.papers||[]}catch(u){return console.error(`[SemanticScholar] Search error for "${c}":`,u),[]}}function Dx(c){var d,f,m,p;const l=((p=(m=(f=(d=c.authors)==null?void 0:d[0])==null?void 0:f.name)==null?void 0:m.split(" ").pop())==null?void 0:p.toLowerCase())||"unknown",s=c.year||"nd",u=c.title.split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g,"")||"paper";return`${l}${s}${u}`}function Ox(c){var f,m,p;if(!c||!c.title)return null;const l=Dx(c),s=((f=c.authors)==null?void 0:f.map(b=>{const h=b.name.split(" "),A=h.pop()||"",w=h.join(" ");return w?`${A}, ${w}`:A}).join(" and "))||"Unknown Author",u=((m=c.journal)==null?void 0:m.name)||c.venue||"Unknown Venue",d=["% Status: VERIFIED | Source: SemanticScholar | Confidence: 100%",`% paperId: ${c.paperId} | Citations: ${c.citationCount||0}`,`@article{${l},`,`  author = {${s}},`,`  title = {${c.title}},`,`  journal = {${u}},`,`  year = {${c.year||"n.d."}}`];return(p=c.externalIds)!=null&&p.DOI&&d.push(`,  doi = {${c.externalIds.DOI}}`),d.push("}"),{key:l,bibtex:d.join(`
`)}}async function kx(c,l){const s=`Analyze this academic section and extract 3-5 key academic concepts that should be supported by citations.

SECTION NAME: ${l}

CONTENT:
${c.substring(0,2e3)}

Return ONLY a JSON array of keyword phrases for academic paper search, e.g.:
["technology acceptance model", "machine learning healthcare", "electronic health records adoption"]

Focus on:
- Theoretical frameworks mentioned
- Key methodological concepts
- Important claims that need citation support
- Domain-specific terminology

Return ONLY the JSON array, no explanation.`;try{const d=(await gn(s,"Extract academic keywords for citation search")).replace(/```json\n?|\n?```/g,"").trim(),f=JSON.parse(d);return console.log(`[SemanticScholar] Extracted keywords for ${l}:`,f),Array.isArray(f)?f.slice(0,5):[]}catch(u){console.error("[SemanticScholar] Keyword extraction error:",u);const d=c.toLowerCase().match(/\b[a-z]{4,}\b/g)||[],f={};return d.forEach(p=>f[p]=(f[p]||0)+1),Object.entries(f).sort((p,b)=>b[1]-p[1]).slice(0,5).map(([p])=>p)}}async function jx(c,l){if(l.length===0)return c;const u=`You are an expert academic editor. Insert LaTeX citations into this section content.

AVAILABLE CITATIONS:
${l.map(d=>`- \\cite{${d.key}}: "${d.title}" by ${d.authors} (${d.year})`).join(`
`)}

SECTION CONTENT:
${c}

INSTRUCTIONS:
1. Read the content carefully and identify sentences that make claims or discuss concepts
2. Insert \\cite{key} commands at appropriate places (end of sentences, after claims)
3. Use single citations: "as shown in prior work \\cite{key}"
4. Use multiple citations when appropriate: "\\cite{key1,key2}"
5. Do NOT change the content except adding \\cite{} commands
6. Aim for 3-8 citations depending on section length
7. Place citations naturally - not every sentence needs one
8. Do NOT add any bibliography or references section

Return ONLY the section content with citations inserted. No explanations.`;try{let f=(await gn(u,"Insert citations into academic text")).replace(/```(?:latex|tex)?\n?|\n?```/g,"").trim();return f.length>c.length*.5&&f.includes("\\cite{")?(console.log("[SemanticScholar] Successfully inserted citations"),f):(console.log("[SemanticScholar] Citation insertion produced unexpected output, using original"),c)}catch(d){return console.error("[SemanticScholar] Citation insertion error:",d),c}}async function Lx(c,l,s=8){var h;console.log(`[SemanticScholar] Generating references for section: ${l}`);const u=await kx(c,l);if(u.length===0)return console.log(`[SemanticScholar] No keywords extracted for ${l}`),c;const d=[],f=new Set;for(const A of u){const w=await km(A,3);for(const _ of w)_.paperId&&!f.has(_.paperId)&&!iu.has(_.paperId)&&(f.add(_.paperId),d.push(_));await new Promise(_=>setTimeout(_,300))}if(console.log(`[SemanticScholar] Found ${d.length} unique papers for ${l}`),d.length===0)return c;d.sort((A,w)=>(w.citationCount||0)-(A.citationCount||0));const m=d.slice(0,s),p=[];for(const A of m){const w=Ox(A);w&&(_i.has(w.key)||(_i.set(w.key,w.bibtex),iu.add(A.paperId),console.log(`[SemanticScholar] Added BibTeX entry: ${w.key}`)),p.push({key:w.key,title:A.title,authors:((h=A.authors)==null?void 0:h.map(_=>_.name).slice(0,2).join(", "))||"Unknown",year:A.year||"n.d."}))}const b=await jx(c,p);return console.log(`[SemanticScholar] Section ${l} now has ${p.length} potential citations`),console.log(`[SemanticScholar] Total accumulated BibTeX entries: ${_i.size}`),b}function Mx(c){Ax(c);let l=c.replace(/\n*References:\s*\n([\s\S]*?)(?=\\section|$)/gi,"");return l=l.replace(/\\section\*?\{References\}[\s\S]*?(?=\\section|$)/gi,""),l=l.replace(/\n\nReferences\n\n((?:[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+)/gi,""),l=l.replace(/\n*BIBLIOGRAPHY\s*\n([\s\S]*?)(?=\\section|$)/gi,""),l=l.replace(/\\begin\{thebibliography\}[\s\S]*?\\end\{thebibliography\}/gi,""),l=l.replace(/\\bibitem\{[^}]*\}[^\n]*\n?/gi,""),l=l.replace(/\n\nBibliography\n\n([\s\S]*?)(?=\\section|$)/gi,""),l=l.replace(/\\subsection\*?\{(?:Bibliography|References)\}\s*[\s\S]*?(?=\\section\{)/gi,""),l=l.replace(/\\begin\{itemize\}\s*(?:\\item\s+[A-Z][\s\S]*?\(\d{4}\)[\s\S]*?\n)+\s*\\end\{itemize\}/gi,""),l=l.replace(/%%BIBLIOGRAPHY%%[\s\S]*?%%END_BIBLIOGRAPHY%%/g,""),l=l.trim(),l}function zx(c){let l=c.replace(/^\s*\\section\*?\{[^}]*\}\s*/i,"");return l=l.replace(/\\section\*?\{[^}]*\}\s*\n\s*\\section\*?\{/gi,"\\section{"),l}const Ux=`\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{graphicx}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{hyperref}
\\usepackage[margin=1in]{geometry}
\\usepackage{setspace}
\\usepackage{natbib}
\\usepackage{booktabs}
\\usepackage{float}

% ICIS Conference Paper Format
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{1em}
\\doublespacing

\\begin{document}

`,Fx=`
\\end{document}
`;function Bx(c,l){return c==="research_model.png"?`Figure~\\ref{${l}} illustrates the research model, depicting the key constructs and their hypothesized relationships. The model shows how the independent variables influence the dependent variables through the proposed mechanisms. Each arrow represents a hypothesized relationship that will be tested in the analysis.`:`Figure~\\ref{${l}} presents the theoretical framework that underpins this study. This framework synthesizes the core theoretical perspectives and shows how they inform the research design and analysis. The framework provides a structured lens through which the research questions are examined.`}function Px(c,l,s=[],u=!1,d){const f=l?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],m={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let p=Ux;p+=`% ============================================================================
% IMPORTANT NOTICE - AI-GENERATED PAPER
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Paper}\\\\[0.5em]
This paper was generated by an AI-assisted scientific discovery system. All content requires human review and verification before use or submission. The authors and claims have not been independently verified.${u&&!l?"\\\\[0.5em]\\textbf{Data Notice:} The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings.":""}
}}
\\end{center}
\\vspace{1em}

`;for(const b of f)if(c[b]){let h=wx(c[b]);if(b!=="references"&&(h=Mx(h)),b!=="title"&&b!=="abstract"&&b!=="references"&&(h=zx(h)),b==="title")p+=`\\title{${h}}
\\maketitle

`;else if(b==="abstract")p+=`\\begin{abstract}
${h}
\\end{abstract}

`;else if(b==="references"){let A=Ex(c[b]);const w=Ix();if(w){const _=w.split("@article").length-1;console.log(`[assemblePaper] Adding ${_} Semantic Scholar BibTeX entries`),A+=`

% ============================================================
`,A+=`% Semantic Scholar Generated References
`,A+=`% ============================================================

`,A+=w}wm("references.bib",A),p+=`\\bibliographystyle{apalike}
\\bibliography{references}
`}else if(b==="theory"){const A=s.filter(w=>w.filename==="research_model.png"||w.filename==="theoretical_framework.png");p+=`\\section{${m[b]}}

${h}

`,A.length>0&&(p+=`\\subsection{Framework Visualization}

`,p+=`This subsection presents visual representations of the theoretical foundations guiding this research.

`,A.forEach(w=>{const _=w.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),v=w.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%"),T=w.filename==="research_model.png"?"fig:research_model":"fig:theoretical_framework",g=w.paragraphDescription||Bx(w.filename,T);p+=`${g}

`,p+=`\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.9\\textwidth]{${_}}
\\caption{${v}}
\\label{${T}}
\\end{figure}

`}))}else if(b==="results"){const A=s.filter(w=>w.filename!=="research_infographic.png"&&w.filename!=="research_model.png"&&w.filename!=="theoretical_framework.png");p+=`\\section{${m[b]}}

`,p+=`${h}

`,d&&(p+=`\\subsection{Summary Data Table}

`,p+=`The following table presents key structured data extracted from this research. The complete dataset is available in the accompanying CSV file (datatable.csv). See Table~\\ref{tab:datatable} for details.

`,p+=d,p+=`

`),A.length>0&&(p+=`\\subsection{Data Visualizations}

`,u&&(p+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),p+=lu(A))}else if(b==="discussion"){const A=s.find(w=>w.filename==="research_infographic.png");p+=`\\section{${m[b]}}

${h}

`,A&&(p+=`\\subsection*{Visual Summary}

`,p+=`The following infographic provides a visual summary of the key findings, frameworks, and practical implications presented in this research.

`,p+=lu([A]))}else p+=`\\section{${m[b]}}

${h}

`}return p+=Fx,p}async function $x(c,l){console.log(`[DataCleaning] Starting data cleaning for: ${c}`),l==null||l("Starting data cleaning...");const s=`
import pandas as pd
import numpy as np
import sys
import json

def clean_data(file_path):
    """Perform basic data cleaning operations."""
    results = {
        'rows_removed': 0,
        'columns_processed': 0,
        'imputations_performed': 0,
        'operations': []
    }

    try:
        # Read the data file
        if file_path.endswith('.csv'):
            df = pd.read_csv(file_path)
        elif file_path.endswith('.xlsx') or file_path.endswith('.xls'):
            df = pd.read_excel(file_path)
        else:
            df = pd.read_csv(file_path)  # Default to CSV

        original_rows = len(df)
        results['columns_processed'] = len(df.columns)

        # 1. Remove completely empty rows
        df_cleaned = df.dropna(how='all')
        empty_rows_removed = original_rows - len(df_cleaned)
        if empty_rows_removed > 0:
            results['operations'].append(f"Removed {empty_rows_removed} completely empty rows")
            results['rows_removed'] += empty_rows_removed

        # 2. Remove duplicate rows
        before_dedup = len(df_cleaned)
        df_cleaned = df_cleaned.drop_duplicates()
        duplicates_removed = before_dedup - len(df_cleaned)
        if duplicates_removed > 0:
            results['operations'].append(f"Removed {duplicates_removed} duplicate rows")
            results['rows_removed'] += duplicates_removed

        # 3. Basic imputation for missing values
        for col in df_cleaned.columns:
            missing_count = df_cleaned[col].isna().sum()
            if missing_count > 0:
                # For numeric columns, use mean imputation
                if pd.api.types.is_numeric_dtype(df_cleaned[col]):
                    mean_val = df_cleaned[col].mean()
                    df_cleaned[col] = df_cleaned[col].fillna(mean_val)
                    results['imputations_performed'] += missing_count
                    results['operations'].append(f"Imputed {missing_count} missing values in '{col}' with mean ({mean_val:.2f})")
                # For categorical columns, use mode imputation
                else:
                    mode_val = df_cleaned[col].mode()
                    if len(mode_val) > 0:
                        df_cleaned[col] = df_cleaned[col].fillna(mode_val[0])
                        results['imputations_performed'] += missing_count
                        results['operations'].append(f"Imputed {missing_count} missing values in '{col}' with mode ('{mode_val[0]}')")

        # 4. Standardize column names (lowercase, replace spaces with underscores)
        original_cols = list(df_cleaned.columns)
        df_cleaned.columns = [col.lower().strip().replace(' ', '_').replace('-', '_') for col in df_cleaned.columns]
        renamed_cols = sum(1 for o, n in zip(original_cols, df_cleaned.columns) if o != n)
        if renamed_cols > 0:
            results['operations'].append(f"Standardized {renamed_cols} column names")

        # Save the cleaned data back
        if file_path.endswith('.xlsx') or file_path.endswith('.xls'):
            df_cleaned.to_excel(file_path, index=False)
        else:
            df_cleaned.to_csv(file_path, index=False)

        results['operations'].append(f"Saved cleaned data ({len(df_cleaned)} rows, {len(df_cleaned.columns)} columns)")

        return results

    except Exception as e:
        return {'error': str(e), 'operations': []}

# Run cleaning
results = clean_data(sys.argv[1] if len(sys.argv) > 1 else 'data.csv')
print(json.dumps(results))
`;try{const u=await La(c);if(!u)return{success:!1,summary:"Could not locate data file",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:"Data file not found in cloud storage"};l==null||l("Running data cleaning operations...");const d=await gl(s,[u.url]);if(d.success&&d.stdout)try{const f=JSON.parse(d.stdout.trim());if(f.error)return{success:!1,summary:`Cleaning error: ${f.error}`,rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:f.error};const m=f.operations||[],p=m.length>0?m.join("\\n- "):"No cleaning operations needed - data was already clean";return l==null||l(`Data cleaning complete: ${m.length} operations performed`),{success:!0,summary:`- ${p}`,rowsRemoved:f.rows_removed||0,columnsProcessed:f.columns_processed||0,imputationsPerformed:f.imputations_performed||0}}catch(f){return console.warn("[DataCleaning] Could not parse cleaning results:",f),{success:!0,summary:"Data cleaning completed (details unavailable)",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0}}return{success:!1,summary:"Cleaning script execution failed",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:d.stderr||"Unknown error"}}catch(u){return console.error("[DataCleaning] Error:",u),{success:!1,summary:"Data cleaning failed",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:u.message}}}async function Vx(c,l){var u,d,f,m;console.log(`[PreliminaryAnalysis] Starting preliminary analysis for: ${c}`),l==null||l("Analyzing raw data structure...");const s=`
import pandas as pd
import numpy as np
import sys
import json

def analyze_raw_data(file_path):
    """Perform preliminary analysis on raw data."""
    results = {
        'rows': 0,
        'columns': 0,
        'column_types': {},
        'missing_values': {},
        'duplicates': 0,
        'numeric_stats': {},
        'categorical_stats': {},
        'data_quality_issues': []
    }

    try:
        # Read the data file
        if file_path.endswith('.csv'):
            df = pd.read_csv(file_path)
        elif file_path.endswith('.xlsx') or file_path.endswith('.xls'):
            df = pd.read_excel(file_path)
        else:
            df = pd.read_csv(file_path)

        results['rows'] = len(df)
        results['columns'] = len(df.columns)

        # Analyze each column
        for col in df.columns:
            dtype = str(df[col].dtype)
            results['column_types'][col] = dtype

            # Count missing values
            missing = df[col].isna().sum()
            if missing > 0:
                results['missing_values'][col] = int(missing)
                pct = (missing / len(df)) * 100
                results['data_quality_issues'].append(f"Column '{col}': {missing} missing values ({pct:.1f}%)")

            # Stats for numeric columns
            if pd.api.types.is_numeric_dtype(df[col]):
                results['numeric_stats'][col] = {
                    'mean': float(df[col].mean()) if not pd.isna(df[col].mean()) else None,
                    'std': float(df[col].std()) if not pd.isna(df[col].std()) else None,
                    'min': float(df[col].min()) if not pd.isna(df[col].min()) else None,
                    'max': float(df[col].max()) if not pd.isna(df[col].max()) else None
                }
            # Stats for categorical columns
            else:
                unique_count = df[col].nunique()
                results['categorical_stats'][col] = {
                    'unique_values': int(unique_count),
                    'top_value': str(df[col].mode()[0]) if len(df[col].mode()) > 0 else None
                }

        # Count duplicates
        duplicates = df.duplicated().sum()
        results['duplicates'] = int(duplicates)
        if duplicates > 0:
            results['data_quality_issues'].append(f"Found {duplicates} duplicate rows")

        # Check for empty rows
        empty_rows = df.isna().all(axis=1).sum()
        if empty_rows > 0:
            results['data_quality_issues'].append(f"Found {empty_rows} completely empty rows")

        return results

    except Exception as e:
        return {'error': str(e)}

# Run analysis
results = analyze_raw_data(sys.argv[1] if len(sys.argv) > 1 else 'data.csv')
print(json.dumps(results))
`;try{const p=await La(c);if(!p)return{success:!1,error:"Data file not found in cloud storage"};l==null||l("Profiling raw data...");const b=await gl(s,[p.url]);if(b.success&&b.stdout)try{const h=JSON.parse(b.stdout.trim());if(h.error)return{success:!1,error:h.error};let A=`Dataset: ${h.rows} rows × ${h.columns} columns

`;A+=`COLUMN TYPES:
`;for(const[w,_]of Object.entries(h.column_types))A+=`  - ${w}: ${_}
`;if(Object.keys(h.numeric_stats).length>0){A+=`
NUMERIC COLUMNS:
`;for(const[w,_]of Object.entries(h.numeric_stats)){const v=_;A+=`  - ${w}: mean=${(u=v.mean)==null?void 0:u.toFixed(2)}, std=${(d=v.std)==null?void 0:d.toFixed(2)}, range=[${(f=v.min)==null?void 0:f.toFixed(2)}, ${(m=v.max)==null?void 0:m.toFixed(2)}]
`}}if(Object.keys(h.categorical_stats).length>0){A+=`
CATEGORICAL COLUMNS:
`;for(const[w,_]of Object.entries(h.categorical_stats)){const v=_;A+=`  - ${w}: ${v.unique_values} unique values, most common: "${v.top_value}"
`}}if(h.data_quality_issues.length>0){A+=`
DATA QUALITY ISSUES IDENTIFIED:
`;for(const w of h.data_quality_issues)A+=`  ⚠ ${w}
`}else A+=`
DATA QUALITY: No major issues identified
`;return l==null||l("Preliminary analysis complete"),{success:!0,analysis:A}}catch(h){return console.warn("[PreliminaryAnalysis] Could not parse results:",h),{success:!1,error:"Could not parse analysis results"}}return{success:!1,error:b.stderr||"Analysis script failed"}}catch(p){return console.error("[PreliminaryAnalysis] Error:",p),{success:!1,error:p.message}}}async function Hx(c,l,s){var f,m,p,b,h;const u=l==="research_model"?"fig:research_model":"fig:theoretical_framework",d=l==="research_model"?`You are analyzing a research model diagram for an academic paper.

TASK: Analyze this research model figure and provide TWO outputs:

1. CAPTION: A concise caption (1-2 sentences) suitable for a LaTeX \\caption{} command. Describe what the figure shows (e.g., "Research model depicting the relationships between perceived usefulness, perceived ease of use, and technology adoption intention").

2. DESCRIPTION: A paragraph (3-5 sentences) describing this research model for the "Framework Visualization" subsection. Start with: "Figure~\\ref{${u}} illustrates..."

REQUIREMENTS:
- Analyze the actual content of the figure (constructs, variables, arrows, relationships)
- Use formal academic language appropriate for a top-tier IS journal
- For the caption: Be concise and descriptive
- For the description: Explain the key constructs and hypothesized relationships

PAPER CONTEXT (for understanding the research):
${s.substring(0,3e3)}

OUTPUT FORMAT (use exactly this format):
CAPTION: [Your caption here]
DESCRIPTION: [Your paragraph description here]`:`You are analyzing a theoretical framework diagram for an academic paper.

TASK: Analyze this theoretical framework figure and provide TWO outputs:

1. CAPTION: A concise caption (1-2 sentences) suitable for a LaTeX \\caption{} command. Describe what the framework shows (e.g., "Theoretical framework integrating institutional theory and technology acceptance constructs").

2. DESCRIPTION: A paragraph (3-5 sentences) describing this framework for the "Framework Visualization" subsection. Start with: "Figure~\\ref{${u}} presents..."

REQUIREMENTS:
- Analyze the actual content of the figure (concepts, components, structure)
- Use formal academic language appropriate for a top-tier IS journal
- For the caption: Be concise and descriptive
- For the description: Explain how the framework synthesizes theoretical perspectives

PAPER CONTEXT (for understanding the research):
${s.substring(0,3e3)}

OUTPUT FORMAT (use exactly this format):
CAPTION: [Your caption here]
DESCRIPTION: [Your paragraph description here]`;try{const A={contents:[{parts:[{inline_data:{mime_type:"image/png",data:c}},{text:d}]}],systemInstruction:{parts:[{text:"You are an expert academic writer specializing in Information Systems research. Analyze figures and write formal, precise captions and descriptions."}]},generationConfig:{temperature:.7,maxOutputTokens:800}},w=await fetch(`${ja}/api/gemini`,{method:"POST",headers:Ma(),body:JSON.stringify(A)});if(!w.ok)return console.warn(`[analyzeFigureWithGemini] API error: ${w.status}`),qc(l,u);const _=await w.json(),v=(h=(b=(p=(m=(f=_==null?void 0:_.candidates)==null?void 0:f[0])==null?void 0:m.content)==null?void 0:p.parts)==null?void 0:b[0])==null?void 0:h.text;if(v&&v.trim().length>50){const T=v.match(/CAPTION:\s*(.+?)(?=DESCRIPTION:|$)/s),g=v.match(/DESCRIPTION:\s*(.+)/s),S=T?T[1].trim():jm(l),R=g?g[1].trim():Lm(l,u);return console.log(`[analyzeFigureWithGemini] Generated for ${l}:`),console.log(`  Caption: ${S.substring(0,80)}...`),console.log(`  Description: ${R.substring(0,80)}...`),{caption:S,paragraphDescription:R}}return qc(l,u)}catch(A){return console.error("[analyzeFigureWithGemini] Error:",A),qc(l,u)}}function qc(c,l){return{caption:jm(c),paragraphDescription:Lm(c,l)}}function jm(c){return c==="research_model"?"Research model showing the theoretical framework, key constructs, and hypothesized relationships":"Theoretical framework overview illustrating the key concepts and their interrelationships"}function Lm(c,l){return c==="research_model"?`Figure~\\ref{${l}} illustrates the research model, depicting the key constructs and their hypothesized relationships. The model shows how the independent variables influence the dependent variables through the proposed mechanisms. Each arrow represents a hypothesized relationship that will be tested in the analysis.`:`Figure~\\ref{${l}} presents the theoretical framework that underpins this study. This framework synthesizes the core theoretical perspectives and shows how they inform the research design and analysis. The framework provides a structured lens through which the research questions are examined.`}async function Gx(c,l,s){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),s==null||s("Analyzing data with AI...");const u=c.split(`
`),d=u.slice(0,101).join(`
`),f=`You are a data analyst. Analyze this CSV data and provide a structured summary.

CSV FILE: ${l}
TOTAL ROWS (estimate): ${u.length-1}

DATA SAMPLE (first 100 rows):
\`\`\`
${d}
\`\`\`

Provide a comprehensive analysis in the following format:

File: ${l}
Dataset shape: [X] rows x [Y] columns

COLUMN NAMES AND TYPES:
  - [column_name]: [numeric/categorical] ([description])

NUMERIC COLUMNS STATISTICS:
  [column_name]:
    min=[value], max=[value], mean=[value], std=[value]
    [any notable patterns or distributions]

CATEGORICAL COLUMNS VALUE COUNTS:
  [column_name]: [X] unique values
    Values: {"value1": count1, "value2": count2, ...}

KEY INSIGHTS:
  - [Notable patterns, correlations, or data quality issues]
  - [Recommendations for analysis]

Be precise with column names (they may contain Hebrew or special characters - use them exactly as they appear).
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const m=await gn(f,"Analyze CSV data");if(m)return console.log("[DataAnalysis] Gemini analysis complete"),s==null||s("AI data analysis complete"),{success:!0,dataSummary:m,dataFileFound:!0}}catch(m){console.error("[DataAnalysis] Gemini analysis failed:",m)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function Mm(c,l,s){var f,m,p,b,h,A,w,_,v,T;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${c}" (type: ${typeof c})`),s){l==null||l("Loading data file preview for verification...");const g=await bm(c);if(!g.success)return console.error(`[DataAnalysis] Failed to get file preview: ${g.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${g.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${g.filename}, First line: ${(f=g.firstLine)==null?void 0:f.substring(0,100)}...`),l==null||l(`Data file found: ${c} (${g.totalLines} lines). Awaiting confirmation...`),!await s({filename:g.filename,firstLine:g.firstLine,totalLines:g.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),l==null||l("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),l==null||l("Data file confirmed. Starting analysis...")}l==null||l("Analyzing data file...");const u=La();if(u!=null&&u.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const g=await Gx(u.content,c,l);if(g.success)return g}if(u!=null&&u.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),l==null||l("Using cloud data analysis...");try{const g=await ml(u.content,"full");if(g.success&&g.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let S=`File: ${c}
`;if(S+=`Dataset shape: ${(m=g.summary)==null?void 0:m.shape.rows} rows x ${(p=g.summary)==null?void 0:p.shape.columns} columns

`,S+=`COLUMN NAMES AND TYPES:
`,(b=g.summary)==null||b.columns.forEach(R=>{var z;const O=(z=g.summary)==null?void 0:z.numeric_columns.includes(R);S+=`  - ${R}: ${O?"numeric":"categorical"}
`}),S+=`
`,(h=g.summary)!=null&&h.numeric_columns.length){S+=`NUMERIC COLUMNS STATISTICS:
`;for(const R of g.summary.numeric_columns.slice(0,10)){const O=(A=g.summary.descriptive_stats)==null?void 0:A[R];O&&(S+=`  ${R}:
`,S+=`    min=${O.min}, max=${O.max}, mean=${O.mean}, std=${O.std}
`)}S+=`
`}if((w=g.summary)!=null&&w.categorical_columns.length){S+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const R of g.summary.categorical_columns.slice(0,5)){const O=(_=g.summary.categorical_summary)==null?void 0:_[R];if(O){const z=Object.keys(O).length;S+=`  ${R}: ${z} unique values
`,z<=10&&(S+=`    Values: ${JSON.stringify(O)}
`)}}}return l==null||l("Cloud data analysis complete"),{success:!0,dataSummary:S,dataFileFound:!0}}}catch(g){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",g)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),l==null||l("Using local Python for analysis...");const d=`import os
import pandas as pd
import numpy as np

DATA_FILE = os.environ.get('DATA_FILE', '')

if DATA_FILE and os.path.exists(DATA_FILE):
    try:
        # Try to load the data file
        if DATA_FILE.endswith('.csv'):
            df = pd.read_csv(DATA_FILE)
        elif DATA_FILE.endswith('.xlsx') or DATA_FILE.endswith('.xls'):
            df = pd.read_excel(DATA_FILE)
        elif DATA_FILE.endswith('.json'):
            df = pd.read_json(DATA_FILE)
        else:
            df = pd.read_csv(DATA_FILE)  # Default to CSV

        # Print comprehensive data summary
        print("=" * 60)
        print("DATA SUMMARY")
        print("=" * 60)
        print(f"File: {DATA_FILE}")
        print(f"Dataset shape: {df.shape[0]} rows x {df.shape[1]} columns")
        print()
        print("COLUMN NAMES AND TYPES:")
        for col in df.columns:
            dtype = df[col].dtype
            non_null = df[col].count()
            null_pct = (1 - non_null/len(df)) * 100 if len(df) > 0 else 0
            print(f"  - {col}: {dtype} ({non_null} non-null, {null_pct:.1f}% missing)")
        print()

        # Numeric columns summary
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        if len(numeric_cols) > 0:
            print("NUMERIC COLUMNS STATISTICS:")
            for col in numeric_cols[:10]:  # Limit to first 10
                print(f"  {col}:")
                print(f"    min={df[col].min():.4f}, max={df[col].max():.4f}, mean={df[col].mean():.4f}, std={df[col].std():.4f}")
            print()

        # Categorical columns summary
        cat_cols = df.select_dtypes(include=['object', 'category', 'bool']).columns
        if len(cat_cols) > 0:
            print("CATEGORICAL COLUMNS VALUE COUNTS:")
            for col in cat_cols[:5]:  # Limit to first 5
                unique_vals = df[col].nunique()
                print(f"  {col}: {unique_vals} unique values")
                if unique_vals <= 10:
                    print(f"    Values: {df[col].value_counts().head(10).to_dict()}")
            print()

        # Sample data
        print("SAMPLE DATA (first 3 rows):")
        print(df.head(3).to_string())
        print()
        print("=" * 60)
        print("DATA ANALYSIS COMPLETE")

    except Exception as e:
        print(f"Error loading data: {e}")
        print("DATA FILE NOT READABLE")
else:
    print("DATA FILE NOT FOUND")
    print(f"Expected path: {DATA_FILE}")
`;try{const g=await gl("analyze_data.py",d,c);if(console.log("[DataAnalysis] Python execution result:",{success:g.success,dataFileFound:g.dataFileFound,stdoutLength:((v=g.stdout)==null?void 0:v.length)||0,stderrLength:((T=g.stderr)==null?void 0:T.length)||0}),g.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",g.stdout.substring(0,1e3)),g.stderr&&console.log("[DataAnalysis] Python stderr:",g.stderr),!g.success)return console.error("[DataAnalysis] Python execution failed:",g.error),{success:!1,dataFileFound:!1,error:g.error};let S;const R=g.dataFileFound??!1;if(g.stdout){const O=g.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(O)S=O[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",S.substring(0,500));else{if(g.stdout.includes("DATA FILE NOT FOUND")||g.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',g.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',g.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return l==null||l("Data analysis complete"),{success:!0,dataSummary:S,dataFileFound:R}}catch(g){return console.error("[DataAnalysis] Error:",g),{success:!1,dataFileFound:!1,error:g.message}}}async function su(c,l,s,u,d,f=!1){const m=La();let p=[],b=!1,h=!1,A,w=d;if(m!=null&&m.content){console.log("[Visualizations] Using QuickChart.io for data figure generation..."),u==null||u("Analyzing data for visualization...");try{const T=await ml(m.content,"full");if(T.success&&T.chart_data&&T.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${T.chart_data.length} chart configs`),u==null||u(`Generating ${T.chart_data.length} data figures via QuickChart.io...`);const{generateQuickChartFigures:g}=await ca(async()=>{const{generateQuickChartFigures:R}=await Promise.resolve().then(()=>Ar);return{generateQuickChartFigures:R}},void 0),S=await g(T.chart_data);if(S.success&&S.figures&&S.figures.length>0){p=S.figures.map(O=>({filename:O.filename,description:O.description,latexRef:O.filename,base64:O.base64}));const{storeChartData:R}=await ca(async()=>{const{storeChartData:O}=await Promise.resolve().then(()=>Ar);return{storeChartData:O}},void 0);R(T.chart_data,!1),h=!0,w=T.text_summary||d,u==null||u(`Generated ${p.length} data figures from uploaded data`),console.log(`[Visualizations] QuickChart.io generated ${p.length} data figures`)}else console.warn("[Visualizations] QuickChart.io generation failed:",S.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(T){console.warn("[Visualizations] QuickChart.io failed:",T)}}if(p.length===0&&f){console.log("[Visualizations] No data figures yet, generating AI-based data figures (revision round)..."),u==null||u("Generating AI-based data visualizations...");try{const T=await Yx(c,l,d);if(T&&T.length>0){console.log(`[Visualizations] AI generated ${T.length} chart configurations`),u==null||u(`Rendering ${T.length} AI data figures via QuickChart.io...`);const{generateQuickChartFigures:g,storeChartData:S}=await ca(async()=>{const{generateQuickChartFigures:O,storeChartData:z}=await Promise.resolve().then(()=>Ar);return{generateQuickChartFigures:O,storeChartData:z}},void 0),R=await g(T);R.success&&R.figures&&R.figures.length>0&&(p=R.figures.map(O=>({filename:O.filename,description:O.description,latexRef:O.filename,base64:O.base64})),S(T,!0),b=!0,A="*** NOTE: Data visualizations generated using AI-synthesized illustrative data. No data file was provided.",u==null||u(`Generated ${p.length} AI-based data figures`),console.log(`[Visualizations] QuickChart.io rendered ${p.length} AI data figures`))}}catch(T){console.warn("[Visualizations] AI QuickChart generation failed:",T)}}else p.length===0&&!f&&(console.log("[Visualizations] No data file - skipping synthetic data figures (first round, theoretical paper)"),u==null||u("Theoretical paper: generating conceptual figures only..."));console.log("[Visualizations] Generating conceptual figures (research model, framework)..."),u==null||u("Generating conceptual research figures...");let _=[];try{const T=await zm(c,l,g=>{console.log(`[Visualizations] ${g}`),u==null||u(g)});T.success&&T.figures.length>0?(_=T.figures,console.log(`[Visualizations] Generated ${_.length} conceptual figures`),u==null||u(`Generated ${_.length} conceptual figures`)):console.warn("[Visualizations] Conceptual figure generation failed:",T.error)}catch(T){console.warn("[Visualizations] Conceptual figure generation error:",T)}const v=[..._,...p];if(v.length>0){const{storePngFiguresForCompilation:T}=await ca(async()=>{const{storePngFiguresForCompilation:g}=await Promise.resolve().then(()=>Ar);return{storePngFiguresForCompilation:g}},void 0);return T(v.map(g=>({filename:g.filename,base64:g.base64||""}))),console.log(`[Visualizations] Total figures: ${v.length} (${_.length} conceptual + ${p.length} data)`),u==null||u(`Generated ${v.length} total figures`),{figures:v,usedSyntheticData:b,dataFileFound:h,dataSummary:w,dataAlert:A}}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function Yx(c,l,s){const u=`You are generating DATA-DRIVEN chart configurations for academic paper visualizations.

**FIGURE TYPE:** These are DATA-DRIVEN figures (evidence-based), not conceptual diagrams.
- Purpose: Present illustrative results or expected findings
- Examples: Bar charts comparing groups, scatterplots showing relationships, boxplots showing variance

**CRITICAL RULES:**
1. DO NOT fabricate specific numbers unless EXPLICITLY stated in the research context
2. If no specific data mentioned, create ILLUSTRATIVE comparisons using:
   - Relative values (1, 2, 3) to show expected differences
   - Equal values for framework components
   - Percentage placeholders clearly labeled as "(Illustrative)"
3. All figure titles MUST include "(Illustrative)" or "(Based on Paper)" to indicate these are not from collected data

**QUALITY REQUIREMENTS (Data-Driven Figures):**
- Use human-readable labels (e.g., "Level of Education" not "EDU_LVL_01")
- Axis labels should precisely match variables discussed in the text
- Each figure should be self-explanatory
- Consistent styling across all figures

**RESEARCH CONTEXT:**
${l.substring(0,2e3)}

**INTERVIEW EXCERPT:**
${c.substring(0,1500)}

Generate 1-2 data-driven charts. Return ONLY a valid JSON array, no other text.

**Chart Patterns:**

1. Group comparison bar chart (for hypothesis testing):
{
  "type": "bar",
  "column": "Group Comparison (Illustrative)",
  "data": {"Treatment Group": 3, "Control Group": 1.5}
}

2. Multiple factor comparison:
{
  "type": "bar",
  "column": "Factor Importance (Illustrative)",
  "data": {"Factor A": 4, "Factor B": 3, "Factor C": 2}
}

3. If paper EXPLICITLY mentions numbers, use them:
- "72% of respondents..." → use 72
- "mean score of 4.2" → use 4.2
- Otherwise, use relative values clearly labeled as illustrative

Return ONLY the JSON array with 1-2 data-driven figures.`;try{let f=(await gn(u,"Generate chart data")).trim();f.startsWith("```json")?f=f.slice(7):f.startsWith("```")&&(f=f.slice(3)),f.endsWith("```")&&(f=f.slice(0,-3)),f=f.trim();const m=JSON.parse(f);if(Array.isArray(m)&&m.length>0)return console.log(`[AI ChartData] Generated ${m.length} chart configurations`),m}catch(d){console.error("[AI ChartData] Failed to generate chart data:",d)}return[]}function lu(c){if(c.length===0)return"";let l=`
% Generated Figures (PNG via QuickChart.io)
`;return c.forEach((s,u)=>{const d=s.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),f=s.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");l+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.9\\textwidth]{${d}}
\\caption{${f}}
\\label{fig:fig${u+1}}
\\end{figure}
`}),l}async function zm(c,l,s){console.log("[ConceptualFigures] Starting conceptual figure generation..."),s==null||s("Generating conceptual research figures...");const u=[];try{const d=qx(c,l);console.log("[ConceptualFigures] Generating research model diagram..."),s==null||s("Creating research model visualization...");const f=await Vh(d,s);f.success&&f.base64?(u.push({filename:"research_model.png",description:"Research model showing the theoretical framework, constructs, and hypothesized relationships",latexRef:"research_model.png",base64:f.base64}),console.log("[ConceptualFigures] Research model figure generated successfully")):console.warn("[ConceptualFigures] Research model generation failed:",f.error);const m=Xx(c,l);console.log("[ConceptualFigures] Generating framework overview..."),s==null||s("Creating framework overview visualization...");const p=await Vh(m,s);return p.success&&p.base64?(u.push({filename:"theoretical_framework.png",description:"Theoretical framework overview illustrating the key concepts and their relationships",latexRef:"theoretical_framework.png",base64:p.base64}),console.log("[ConceptualFigures] Framework overview figure generated successfully")):console.warn("[ConceptualFigures] Framework overview generation failed:",p.error),u.length>0?(console.log(`[ConceptualFigures] Successfully generated ${u.length} conceptual figures`),s==null||s(`Generated ${u.length} conceptual figures`),{success:!0,figures:u}):{success:!1,figures:[],error:"Failed to generate any conceptual figures"}}catch(d){const f=d.message;return console.error("[ConceptualFigures] Generation failed:",f),s==null||s(`Conceptual figure generation failed: ${f}`),{success:!1,figures:[],error:f}}}function qx(c,l){return`**Role:** You are an expert academic visual designer specializing in research model diagrams for top-tier IS journals (MISQ, ISR, JMIS).

**Task:** Create a CONCEPTUAL RESEARCH MODEL DIAGRAM showing the theoretical framework and hypothesized relationships.

**CRITICAL INSTRUCTION - USE PAPER CONTENT:**
You MUST extract the actual constructs, variables, and hypotheses from the RESEARCH CONTEXT provided below.
- DO NOT invent constructs or variables not mentioned in the paper
- DO NOT use generic placeholder names like "Variable A" or "Factor 1"
- The diagram MUST accurately represent THIS SPECIFIC research paper
- Read the context carefully to identify: independent variables, dependent variables, mediators, moderators, and hypotheses

**FIGURE TYPE:** This is a CONCEPTUAL figure (explanatory), NOT a data-driven figure.
- Purpose: Explain theories, relationships between constructs, and cause-effect logical flows
- Example: A cause-effect diagram showing with arrows the relationships between constructs (variables), as described in hypotheses or propositions

**Design Requirements:**

1. **Layout & Structure:**
   - Create a clear box-and-arrow diagram showing constructs and their relationships
   - Use rectangular boxes for constructs/variables
   - Use arrows to show hypothesized relationships (with H1, H2, etc. labels)
   - Arrange from left to right or top to bottom showing logical flow
   - Independent variables on the left, dependent variables on the right
   - Mediating/moderating variables in appropriate positions
   - Include control variables if mentioned in the research

2. **Visual Style:**
   - Clean, professional academic style (MISQ/ISR quality)
   - White or very light gray background
   - Dark blue or black text
   - Boxes with subtle borders (navy, dark gray)
   - Clear sans-serif font (Arial, Helvetica style)
   - Consistent line weights throughout
   - NO 3D effects, gradients, or decorative elements

3. **Content Elements:**
   - Use human-readable labels (e.g., "Perceived Usefulness" not "PU_VAR")
   - Hypothesis labels on arrows (H1, H2, H3, etc.)
   - Use + or - signs to indicate relationship direction
   - Each construct clearly labeled and readable

4. **Quality Checklist:**
   - Self-Explanatory: Can a reader understand the main takeaway without reading body text?
   - Consistency: Same font, color palette, and line weights throughout
   - Publication-ready quality at journal article size

5. **CRITICAL - NO CAPTION IN IMAGE:**
   - Do NOT include any title, caption, or "Figure X" text in the image
   - Do NOT add text like "Research Model" or "Figure 1" at the top or bottom
   - The caption will be added separately in LaTeX - keep the image clean
   - Only include the diagram content itself (boxes, arrows, construct labels)

**RESEARCH CONTEXT (READ CAREFULLY - Use ONLY constructs from this paper):**
${l.substring(0,4e3)}

**INTERVIEW EXCERPT:**
${c.substring(0,1e3)}

Generate a professional research model diagram that accurately represents the constructs and relationships described in this specific research paper.`}function Xx(c,l){return`**Role:** You are an expert academic visual designer for Information Systems research publications.

**Task:** Create a THEORETICAL FRAMEWORK OVERVIEW diagram that summarizes the research approach, key constructs, and their relationships.

**CRITICAL INSTRUCTION - USE PAPER CONTENT:**
You MUST use the actual theories, constructs, and concepts from the RESEARCH CONTEXT provided below.
- DO NOT invent theories or concepts not mentioned in the paper
- DO NOT use generic placeholder names
- The framework MUST accurately represent THIS SPECIFIC research paper
- Read the context carefully to identify: theories used, key concepts, research stages, and methodology approach

**FIGURE TYPE:** This is a CONCEPTUAL figure (explanatory), NOT a data-driven figure.
- Purpose: Illustrate the overall theoretical framework, time-based sequences, or system architecture
- Examples:
  - A flowchart illustrating stages of a process
  - A Venn diagram showing overlapping concepts
  - A system architecture showing relationships between components

**Design Requirements:**

1. **Layout & Structure:**
   - 3-4 distinct conceptual sections or stages
   - Visual flow showing logical progression (problem → mechanism → outcome)
   - Each component clearly separated and labeled
   - NO title or caption text in the image itself

2. **Visual Style:**
   - Clean, academic, flat design (no 3D effects)
   - Professional color palette (blues, grays, one accent color)
   - Sans-serif fonts for clarity
   - Consistent line weights and spacing
   - White or very light background

3. **Content Elements:**
   - Core theoretical constructs clearly labeled
   - Relationships/flows indicated with arrows
   - Use human-readable labels (e.g., "Trust" not "TRUST_VAR")
   - Each component self-contained and readable

4. **Visual Metaphors (choose ONE appropriate style):**
   - Flowchart: For sequential processes or stages
   - Box-and-arrow: For cause-effect relationships
   - Layers: For hierarchical concepts
   - Timeline: For temporal sequences
   - Network: For interconnected concepts

5. **Quality Checklist:**
   - Self-Explanatory: Reader can understand main takeaway without body text
   - Consistency: Same font, color palette, line weights throughout
   - Publication-ready: Suitable for MISQ/ISR quality journals
   - Clear labeling: All components named descriptively

6. **CRITICAL - NO CAPTION IN IMAGE:**
   - Do NOT include any title, caption, or "Figure X" text in the image
   - Do NOT add text like "Theoretical Framework" or "Figure 2" at the top or bottom
   - The caption will be added separately in LaTeX - keep the image clean
   - Only include the diagram content itself (boxes, arrows, labels)

**RESEARCH CONTEXT (READ CAREFULLY - Use ONLY concepts from this paper):**
${l.substring(0,4e3)}

**INTERVIEW EXCERPT:**
${c.substring(0,1e3)}

Generate a professional theoretical framework diagram that accurately represents the theories and concepts described in this specific research paper. This figure should be distinct from the research model diagram.`}async function Vh(c,l){const s=["gemini-3-pro-image-preview","gemini-2.5-flash-image"];for(const u of s){console.log(`[Infographic] Trying image generation with model: ${u}`),l==null||l(`Generating image with ${u}...`);try{const d=await Qx(c,u);if(d.success&&d.base64)return console.log(`[Infographic] Successfully generated image with ${u}`),d;console.warn(`[Infographic] ${u} failed: ${d.error}`)}catch(d){console.warn(`[Infographic] ${u} threw error:`,d.message)}}return{success:!1,error:"All image generation models failed"}}async function Qx(c,l){{const s=await zi();if(s.type==="vercel"||s.type==="local")return Wx(c,l,s.baseUrl);throw new Error("No API key and no proxy available for image generation")}}async function Wx(c,l,s){try{const u=await fetch(`${s}/api/gemini-image`,{method:"POST",headers:Ma(),body:JSON.stringify({prompt:c,model:l,aspectRatio:"16:9"})});if(!u.ok){const f=await u.text();return{success:!1,error:`Proxy error ${u.status}: ${f.substring(0,200)}`}}const d=await u.json();return d.success&&d.image?{success:!0,base64:d.image,mimeType:d.mimeType||"image/png"}:{success:!1,error:d.error||"Unknown proxy error"}}catch(u){return{success:!1,error:u.message}}}async function Zx(c,l){console.log("[DataTable] Starting data table generation with GPT-5.2..."),l==null||l("Generating structured data table...");try{const s=await Ni("TABLE");if(!s||s.includes("[Prompt not found"))throw new Error("Failed to load TABLE prompt from prompts directory");const u=Kx(c),d=`${s}

---

**RESEARCH PAPER:**

${u}`;console.log(`[DataTable] Prompt constructed (${d.length} chars)`),l==null||l("Extracting structured data with GPT-5.2...");const f=await Jx(d);if(!f||f.trim().length===0)return{success:!1,error:"GPT-5.2 returned empty response"};console.log(`[DataTable] CSV generated (${f.length} chars)`);const{latexTable:m,tableCaption:p}=tS(f,c);return console.log("[DataTable] Successfully generated data table"),l==null||l("Data table generated successfully"),{success:!0,csvContent:f,latexTable:m,tableCaption:p}}catch(s){const u=s.message;return console.error("[DataTable] Generation failed:",u),l==null||l(`Data table generation failed: ${u}`),{success:!1,error:u}}}function Kx(c){const l=[];return c.title&&l.push(`# Title
${c.title.trim()}`),c.abstract&&l.push(`# Abstract
${c.abstract}`),c.introduction&&l.push(`# Introduction
${c.introduction}`),c.literature_review&&l.push(`# Literature Review
${c.literature_review}`),c.theory&&l.push(`# Theoretical Framework
${c.theory}`),c.methodology&&l.push(`# Methodology
${c.methodology}`),c.results&&l.push(`# Results
${c.results}`),c.discussion&&l.push(`# Discussion
${c.discussion}`),c.conclusion&&l.push(`# Conclusion
${c.conclusion}`),l.join(`

`)}async function Jx(c){const l=await zi();if(l.type==="vercel"||l.type==="local")return console.log(`[DataTable] Using ${l.type} proxy for GPT-5.2...`),eS(c,l.baseUrl);throw new Error("[DataTable] No API endpoint available for GPT-5.2")}async function eS(c,l){var m,p,b;const s=await fetch(`${l}/api/openai`,{method:"POST",headers:Ma(),body:JSON.stringify({model:"gpt-5.2",messages:[{role:"system",content:"You are a structured-data extraction engine. Output ONLY valid CSV format with no markdown, no explanations, no backticks. Follow the exact schema rules provided."},{role:"user",content:c}],temperature:.3,max_tokens:8e3,rawResponse:!0})});if(!s.ok){const h=await s.text();throw new Error(`Proxy error: ${s.status} - ${h.substring(0,200)}`)}const u=await s.json();let d=((b=(p=(m=u.choices)==null?void 0:m[0])==null?void 0:p.message)==null?void 0:b.content)||u.content||u;typeof d!="string"&&(d=JSON.stringify(d));let f=d.trim();return f.startsWith("```")&&(f=f.replace(/^```(?:csv)?\s*\n?/,""),f=f.replace(/\n?```\s*$/,"")),f.trim()}function tS(c,l){const s=c.split(`
`).filter(h=>h.trim().length>0);if(s.length<2)return{latexTable:"% Error: CSV has insufficient data for table generation",tableCaption:"Data extraction table"};const u=Hh(s[0]),d=u.length,f=nS(u,l);let m=`\\begin{table}[htbp]
\\centering
\\caption{${Xc(f)}}
\\label{tab:datatable}
\\small
\\begin{tabular}{${"l".repeat(d)}}
\\toprule
`;const p=u.map(h=>`\\textbf{${Xc(h)}}`);m+=p.join(" & ")+` \\\\
\\midrule
`;const b=s.slice(1,16);for(const h of b){const A=Hh(h);for(;A.length<d;)A.push("");const w=A.slice(0,d).map(_=>Xc(_));m+=w.join(" & ")+` \\\\
`}return s.length>16&&(m+=`\\midrule
\\multicolumn{${d}}{l}{\\textit{... ${s.length-16} additional rows in full CSV}} \\\\
`),m+=`\\bottomrule
\\end{tabular}
\\end{table}`,{latexTable:m,tableCaption:f}}function Hh(c){const l=[];let s="",u=!1;for(let d=0;d<c.length;d++){const f=c[d];f==='"'?u&&c[d+1]==='"'?(s+='"',d++):u=!u:f===","&&!u?(l.push(s.trim()),s=""):s+=f}return l.push(s.trim()),l}function nS(c,l){var d;const s=c.join(" ").toLowerCase();return s.includes("construct")||s.includes("measurement")||s.includes("hypothesis")?"Summary of Constructs, Measurement Items, and Hypothesis Results":s.includes("parameter")||s.includes("simulation")?"Model Parameters and Configuration":s.includes("challenge")||s.includes("strategic")?"Challenges and Strategic Actions":s.includes("study")||s.includes("comparison")?"Comparison of Related Work and Approaches":`Key Structured Data from ${((d=l.title)==null?void 0:d.substring(0,50))||"Research"}`}function Xc(c){return c?c.replace(/\\/g,"\\textbackslash{}").replace(/&/g,"\\&").replace(/%/g,"\\%").replace(/\$/g,"\\$").replace(/#/g,"\\#").replace(/_/g,"\\_").replace(/\{/g,"\\{").replace(/\}/g,"\\}").replace(/~/g,"\\textasciitilde{}").replace(/\^/g,"\\textasciicircum{}").replace(/</g,"\\textless{}").replace(/>/g,"\\textgreater{}"):""}async function Gh(c){try{return(await fetch(`${c}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function zi(){return await Gh(ja)?{type:"vercel",baseUrl:ja}:await Gh(Ii)?{type:"local",baseUrl:Ii}:{type:"direct",baseUrl:""}}async function aS(c,l){var m,p,b;const s=l===Ii?`${l}/api/openai/chat`:`${l}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${s}`),console.log(`[OpenAI] Using model: ${ru()}`);const u=await fetch(s,{method:"POST",headers:Ma(),body:JSON.stringify({model:ru(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:c}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!u.ok){const h=await u.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",u.status,h),new Error(`OpenAI API error: ${u.status} - ${h.error||h.details||"Unknown error"}`)}const f=(b=(p=(m=(await u.json()).choices)==null?void 0:m[0])==null?void 0:p.message)==null?void 0:b.content;if(!f)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let h=f.trim();return h.startsWith("```")&&(h=h.replace(/^```(?:json)?\s*\n?/,""),h=h.replace(/\n?```\s*$/,"")),h=h.trim(),JSON.parse(h)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",f.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function bl(c){const l=await zi();if(l.type==="vercel"||l.type==="local")return console.log(`[OpenAI] Using ${l.type} proxy...`),aS(c,l.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const rS=async(c,l=1,s="icis_paper",u)=>{var v,T,g,S,R,O,z,B;const d=await Ni("REVIEWER");let f="";try{console.log("[Reviewer] Loading MISQ review criteria..."),f=await Ni("MISQ_CRITERIA"),console.log("[Reviewer] MISQ criteria loaded successfully")}catch(k){console.warn("[Reviewer] Could not load MISQ review criteria:",k)}const m=c.match(/\\title\{([^}]+)\}/),p=m?m[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const b=iS(c);console.log(`[Reviewer] Found ${b.length} sections: ${b.map(k=>k.name).join(", ")}`);let h;if(b.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const k=`${d}

${f?`IS JOURNAL REVIEW CRITERIA (from MISQ guidelines):
${f}
`:""}

Paper Content:
${c.substring(0,5e4)}

You MUST return a complete JSON object with ALL of these fields:

{
  "novelty": <1-5>,
  "noveltyComment": "<short comment>",
  "significance": <1-5>,
  "significanceComment": "<short comment>",
  "methodologicalRigor": <1-5>,
  "methodologicalRigorComment": "<short comment>",
  "clarity": <1-5>,
  "clarityComment": "<short comment>",
  "relevance": <1-5>,
  "relevanceComment": "<short comment>",
  "researchQuestionFeedback": "<detailed feedback>",
  "methodFeedback": "<detailed feedback>",
  "impactFeedback": "<detailed feedback>",
  "writingFeedback": "<detailed feedback>",
  "overallAssessment": "<overall assessment>",
  "majorConcerns": ["concern 1", "concern 2"],
  "minorCorrections": ["correction 1"],
  "trustworthiness": {
    "reliability": <1-7>,
    "reliabilityRationale": "<rationale>",
    "benevolence": <1-7>,
    "benevolenceRationale": "<rationale>",
    "goalAlignment": <1-7>,
    "goalAlignmentRationale": "<rationale>"
  },
  "criticalAlerts": [],
  "canImprove": <true or false>,
  "improvementPotential": "<high|medium|low|exhausted>",
  "convergenceReason": "<if improvement is limited, explain why given source materials>"
}

CONVERGENCE ASSESSMENT: Determine if the paper can be meaningfully improved:
- Set canImprove=false and improvementPotential="exhausted" if the paper has reached its maximum potential given the source materials
- Honest acknowledgment of limits is valued over forcing unnecessary changes`;h=await bl(k)}else{console.log("[Reviewer] Starting section-by-section review...");const k=[];for(const H of b){console.log(`[Reviewer] Reviewing section: ${H.name}...`);const P=await sS(H,p);k.push(P),console.log(`[Reviewer] ${H.name} score: ${P.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),h=await lS(k,c,f),console.log("[Reviewer] Section-by-section review complete")}if(h.novelty===void 0||h.significance===void 0||h.methodologicalRigor===void 0||h.clarity===void 0||h.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const A={novelty:h.novelty,significance:h.significance,methodologicalRigor:h.methodologicalRigor,clarity:h.clarity,relevance:h.relevance,reviewScore:h.novelty,reliabilityScore:h.significance,alignmentScore:h.methodologicalRigor,errorsDetected:(((v=h.majorConcerns)==null?void 0:v.length)||0)+(((T=h.minorCorrections)==null?void 0:T.length)||0),feedback:h.overallAssessment,majorConcerns:h.majorConcerns||[],minorCorrections:h.minorCorrections||[],researchQuestionFeedback:h.researchQuestionFeedback,methodFeedback:h.methodFeedback,impactFeedback:h.impactFeedback,writingFeedback:h.writingFeedback,overallAssessment:h.overallAssessment,noveltyComment:h.noveltyComment,significanceComment:h.significanceComment,methodologicalRigorComment:h.methodologicalRigorComment,clarityComment:h.clarityComment,relevanceComment:h.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:h.criticalAlerts??[],canImprove:h.canImprove??!0,improvementPotential:h.improvementPotential??"medium",convergenceReason:h.convergenceReason};if(console.log(`[Reviewer] Convergence assessment: canImprove=${A.canImprove}, potential=${A.improvementPotential}`),A.convergenceReason&&console.log(`[Reviewer] Convergence reason: ${A.convergenceReason}`),u&&u.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const k=await oS(c,u);A.trustworthiness={reliability:k.reliability,reliabilityRationale:k.rationales.reliability,benevolence:k.benevolence,benevolenceRationale:k.rationales.benevolence,goalAlignment:k.goalAlignment,goalAlignmentRationale:k.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(k){console.warn("[Reviewer] Trustworthiness assessment failed:",k.message),A.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${k.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${k.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${k.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),A.trustworthiness={reliability:((g=h.trustworthiness)==null?void 0:g.reliability)??5,reliabilityRationale:((S=h.trustworthiness)==null?void 0:S.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((R=h.trustworthiness)==null?void 0:R.benevolence)??5,benevolenceRationale:((O=h.trustworthiness)==null?void 0:O.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((z=h.trustworthiness)==null?void 0:z.goalAlignment)??5,goalAlignmentRationale:((B=h.trustworthiness)==null?void 0:B.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const w={version:l,paperId:s,timestamp:new Date().toISOString(),reviewScores:{novelty:A.novelty,significance:A.significance,methodologicalRigor:A.methodologicalRigor,clarity:A.clarity,relevance:A.relevance},reviewComments:{novelty:A.noveltyComment,significance:A.significanceComment,methodologicalRigor:A.methodologicalRigorComment,clarity:A.clarityComment,relevance:A.relevanceComment},averageScore:(A.novelty+A.significance+A.methodologicalRigor+A.clarity+A.relevance)/5,errorCounts:{majorErrors:A.majorConcerns.length,minorErrors:A.minorCorrections.length},errorDetails:{majorErrors:A.majorConcerns,minorErrors:A.minorCorrections},trustworthiness:A.trustworthiness,criticalAlerts:A.criticalAlerts.map((k,H)=>({number:H+1,title:k.title,status:"Open",impact:k.impact,details:k.details,actionRequired:k.actionRequired,consequence:k.consequence})),canImprove:A.canImprove,improvementPotential:A.improvementPotential,convergenceReason:A.convergenceReason},_={version:l,paperId:s,timestamp:new Date().toISOString(),researchQuestion:A.researchQuestionFeedback,method:A.methodFeedback,potentialImpact:A.impactFeedback,writing:A.writingFeedback,majorConcerns:A.majorConcerns,minorCorrections:A.minorCorrections,overallAssessment:A.overallAssessment};A.oversightFilePath=am(w),A.feedbackFilePath=fu(_);try{await tu(`oversight_v${l}.json`,w),await tu(`feedback_v${l}.json`,_),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(k){console.warn("[Reviewer] Could not save files to disk:",k)}return A};function iS(c){const l=[],s=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],u=c.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let d="";u&&(d=u[1].trim());for(const{pattern:f,name:m,focus:p}of s){const b=new RegExp(f.source,f.flags);let h,A="";for(;(h=b.exec(c))!==null;)A+=h[2]||h[0];A.trim()&&(m==="Introduction"&&d&&(A=`ABSTRACT:
${d}

INTRODUCTION:
${A}`),l.push({name:m,content:A.trim(),reviewFocus:p}))}if(l.length===0){const f=c.split(/\\section\*?\{/);for(let m=1;m<f.length;m++){const p=f[m].indexOf("}");if(p>0){const b=f[m].substring(0,p),h=f[m].substring(p+1);l.push({name:b,content:h.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return l.map(f=>({...f,content:f.content.substring(0,15e3)}))}async function sS(c,l){const s=`You are reviewing the "${c.name}" section of an academic IS (Information Systems) paper titled: "${l}"

REVIEW FOCUS for this section: ${c.reviewFocus}

SECTION CONTENT:
${c.content}

Provide a detailed review of THIS SECTION ONLY. Return JSON:

{
  "sectionName": "${c.name}",
  "score": <1-5, where 1=poor, 3=acceptable, 5=excellent>,
  "strengths": ["strength 1", "strength 2"],
  "weaknesses": ["weakness 1", "weakness 2"],
  "suggestions": ["actionable suggestion 1", "actionable suggestion 2"],
  "majorConcerns": ["critical issue that must be addressed"],
  "minorCorrections": ["typo or minor fix"]
}`,u=await bl(s);if(u.score===void 0)throw new Error(`[Reviewer] Section "${c.name}" response missing required score field`);return{sectionName:c.name,score:u.score,strengths:u.strengths||[],weaknesses:u.weaknesses||[],suggestions:u.suggestions||[],majorConcerns:u.majorConcerns||[],minorCorrections:u.minorCorrections||[]}}async function lS(c,l,s){const u=c.map(h=>`## ${h.sectionName} (Score: ${h.score}/5)
Strengths: ${h.strengths.join("; ")||"None identified"}
Weaknesses: ${h.weaknesses.join("; ")||"None identified"}
Major Concerns: ${h.majorConcerns.join("; ")||"None"}
Minor Corrections: ${h.minorCorrections.join("; ")||"None"}`).join(`

`),d=c.filter(h=>h.score>0).map(h=>h.score),f=d.length>0?d.reduce((h,A)=>h+A,0)/d.length:3,m=c.flatMap(h=>h.majorConcerns),p=c.flatMap(h=>h.minorCorrections);c.flatMap(h=>h.suggestions);const b=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${u}

AVERAGE SECTION SCORE: ${f.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${m.map((h,A)=>`${A+1}. ${h}`).join(`
`)||"None"}

ALL MINOR CORRECTIONS:
${p.map((h,A)=>`${A+1}. ${h}`).join(`
`)||"None"}

${s?`
IS JOURNAL REVIEW CRITERIA:
${s}`:""}

Based on this comprehensive review, provide the FINAL assessment as JSON:

{
  "novelty": <1-5>,
  "noveltyComment": "<assessment of originality based on Introduction and Literature Review>",
  "significance": <1-5>,
  "significanceComment": "<assessment of importance based on all sections>",
  "methodologicalRigor": <1-5>,
  "methodologicalRigorComment": "<assessment based on Methodology and Results sections>",
  "clarity": <1-5>,
  "clarityComment": "<assessment of writing quality across all sections>",
  "relevance": <1-5>,
  "relevanceComment": "<fit for IS conferences/journals>",

  "researchQuestionFeedback": "<detailed feedback synthesized from Introduction review>",
  "methodFeedback": "<detailed feedback synthesized from Methodology review>",
  "impactFeedback": "<detailed feedback synthesized from Discussion review>",
  "writingFeedback": "<overall writing quality assessment>",
  "overallAssessment": "<2-3 paragraph overall assessment>",

  "majorConcerns": [<top 5 most critical concerns from all sections>],
  "minorCorrections": [<consolidated list of minor fixes>],

  "criticalAlerts": [
    {
      "title": "<blocking issue title>",
      "impact": "High",
      "details": "<details>",
      "actionRequired": "<what to do>",
      "consequence": "<if not fixed>"
    }
  ],

  "canImprove": <true or false>,
  "improvementPotential": "<high|medium|low|exhausted>",
  "convergenceReason": "<if canImprove is false or improvementPotential is 'low'/'exhausted', explain WHY the paper cannot be further improved given the source materials (interview content and available data). Be specific about what information is missing or what limits have been reached. If canImprove is true, this can be null.>"
}

IMPORTANT - CONVERGENCE ASSESSMENT:
Assess whether this paper can be MEANINGFULLY improved given its source materials:
- "high": Major improvements possible - clear gaps that can be addressed
- "medium": Moderate improvements possible - some refinements available
- "low": Minor improvements only - paper is near its potential given sources
- "exhausted": No meaningful improvements possible - paper has reached maximum quality achievable from the interview/data

Set canImprove=false if:
1. All scores are 4+ and no major concerns exist
2. The interview transcript lacks depth needed for requested improvements
3. No data file was provided to support empirical claims
4. Requested improvements would require fabricating content

HONEST ASSESSMENT IS VALUED: It is better to acknowledge limits than to force unnecessary changes.`;return await bl(b)}const oS=async(c,l)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const s=l.substring(0,15e3),u=c.substring(0,15e3),d=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

Your task: Evaluate how well the ASD system served you as the author.

=== YOUR ORIGINAL INTERVIEW ===
${s}

=== GENERATED PAPER ===
${u}

=== ASSESSMENT CRITERIA ===

Rate each dimension on a scale of 1-7 (1=very poor, 4=acceptable, 7=excellent):

**1. RELIABILITY (1-7):** Perceived reliability of ASD's process
   - Did ASD produce accurate, valid outputs from your interview?
   - Were appropriate data sources and methods used?
   - Was the analysis logically sound?
   - Were there minimal technical errors or misinterpretations?

**2. BENEVOLENCE (1-7):** Perceived benevolence of ASD
   - Was the process transparent and fair?
   - Did the system act helpfully and in your interest?
   - Was there avoidance of manipulation or bias?
   - Did it respect your intellectual contribution?

**3. GOAL ALIGNMENT (1-7):** Alignment with your stated research objectives
   - Did the output match your research goals from the interview?
   - Was topical relevance maintained throughout?
   - Did it address what you wanted to research?
   - Were academic and ethical standards followed?

Return your assessment as JSON:
{
  "reliability": <1-7>,
  "reliabilityRationale": "<2-3 sentences explaining your rating as the author>",
  "benevolence": <1-7>,
  "benevolenceRationale": "<2-3 sentences explaining your rating as the author>",
  "goalAlignment": <1-7>,
  "goalAlignmentRationale": "<2-3 sentences explaining your rating as the author>"
}`,f=await bl(d);if(f.reliability===void 0||f.benevolence===void 0||f.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment}),{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment,rationales:{reliability:f.reliabilityRationale,benevolence:f.benevolenceRationale,goalAlignment:f.goalAlignmentRationale}}};function cS(c){const l=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let s=-1,u="";for(const d of l){const f=c.match(d);if(f&&f.index!==void 0){s=f.index,u=f[0];break}}if(s===-1){const d=Math.floor(c.length*.5),f=c.substring(d).match(/\\section\*?\{[^}]+\}/);f&&f.index!==void 0&&(s=d+f.index,u=f[0])}return s===-1?{part1:c,part2:"",splitPoint:""}:{part1:c.substring(0,s),part2:c.substring(s),splitPoint:u}}const Um=async(c,l,s,u,d,f=!1)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${c.length} characters`),console.log(`[Reviser] Feedback length: ${l.length} characters`),console.log("[Reviser] Loading reviser prompt...");const m=await Ni("REVISER");console.log(`[Reviser] Prompt loaded (${m.length} chars)`);const b=c.length>2e4;let h;if(b){console.log("[Reviser] Large paper detected - using two-part revision strategy"),d==null||d("Large paper - revising in two parts...");const{part1:S,part2:R,splitPoint:O}=cS(c);console.log(`[Reviser] Split at "${O}" - Part 1: ${S.length} chars, Part 2: ${R.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),d==null||d("Revising Part 1: Abstract through Results...");const z=`${m}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${S}

Reviewer Feedback:
${l}

Supervisor Directives:
${s}

Instructions:
1. Address feedback relevant to the front sections (Abstract, Introduction, Literature Review, Methodology, Results)
2. Preserve ALL empirical content (data). You may only change or improve tables, figures, and results based on feedback (review) if you preserve the original data and don't make up results. You may improve the analysis of the data based on feedback (review).
3. Add new content to strengthen weak areas - but ONLY if the source materials support it
4. Maintain academic writing style
5. NEVER use placeholder text
6. If you cannot meaningfully improve a section due to source limitations, leave it unchanged

SECTION PRESERVATION CHECK - Your output MUST contain these sections IN ORDER:
- \\section{Introduction}
- \\section{Literature Review} (or Theoretical Framework)
- \\section{Methodology}
- \\section{Results} (preserve data, may improve analysis based on feedback)

CRITICAL OUTPUT FORMAT:
- Output ONLY the revised LaTeX content for PART 1
- Start with the documentclass/preamble (or \\begin{abstract} if no preamble)
- END with the complete Results section (do NOT add \\end{document} yet)
- The Results section MUST include both figures AND explanatory text
- Do NOT include any code blocks, markdown, or explanations
- Do NOT include a "References:" section or bibliography list - references are in Part 2
- Output raw LaTeX content only

Produce the revised PART 1:`;let B=await gn(z,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");B=cl(B),B=B.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${B.length} chars`),await ol(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),d==null||d("Revising Part 2: Discussion, Conclusion, References...");const k=`${m}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

You are revising PART 2 of a two-part paper (back matter: Discussion, Conclusions, References).
The front matter has already been revised separately.

Original Paper PART 2:
${R}

Reviewer Feedback:
${l}

Supervisor Directives:
${s}

Instructions:
1. Address feedback relevant to Discussion, Conclusions, Implications, and References
2. Ensure conclusions follow logically from results (which you cannot see but were in Part 1)
3. Strengthen theoretical contributions and practical implications
4. Add proper citations and references where needed
5. NEVER use placeholder text

CRITICAL OUTPUT FORMAT:
- Output ONLY the revised LaTeX content for PART 2
- Start with the section header (e.g., \\section{Discussion})
- END with \\end{document}
- Include proper bibliography/references section
- Do NOT include documentclass or preamble
- Do NOT include any code blocks, markdown, or explanations
- Output raw LaTeX content only

Produce the revised PART 2:`;let H=await gn(k,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");H=cl(H),console.log(`[Reviser] Part 2 complete: ${H.length} chars`),h=B+`

`+H,console.log(`[Reviser] Combined revised paper: ${h.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),d==null||d("Revising paper content...");const S=`${m}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information. Honest recognition of limits is valued over forced improvements.

Original Paper:
${c}

Reviewer Feedback:
${l}

Supervisor Directives:
${s}

Instructions:
1. Address all major concerns from the feedback - but ONLY if source materials support the improvement
2. Fix minor corrections where possible
3. Incorporate supervisor directives
4. Preserve ALL empirical content (data). You may only change or improve tables, figures, and results based on feedback (review) if you preserve the original data and don't make up results. You may improve the analysis of the data based on feedback (review).
5. Add new content to strengthen weak areas - but ONLY if the interview/data supports it
6. Maintain academic writing style
7. NEVER use placeholder text like "[To be completed]", "[TBD]", or "[Results pending]"
8. If any section has placeholder text, replace it with realistic, complete content
9. If you cannot meaningfully improve the paper due to source limitations, return it with minimal changes

CRITICAL OUTPUT FORMAT:
- Output ONLY the complete revised LaTeX document
- Start with \\documentclass or \\begin{abstract} (whatever the original starts with)
- End with \\end{document}
- Do NOT include any code blocks, markdown formatting, explanations, or verification steps
- Do NOT include any JavaScript, Python, or other programming code
- Do NOT include "STEP X:" headers or verification checklists
- Output raw LaTeX content only

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${S.length} characters`),console.log("[Reviser] Calling Gemini API..."),h=await gn(S,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),h=cl(h)}console.log(`[Reviser] Text revision complete! Output length: ${h.length} characters`);let A,w=!1;const _=(l+" "+s).toLowerCase();if(_.includes("figure")||_.includes("graph")||_.includes("chart")||_.includes("visual")||_.includes("plot")||_.includes("diagram")||_.includes("simulation")||_.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),d==null||d("Updating visualizations based on feedback...");try{let S;if(u){console.log("[Reviser] Analyzing data file for visualization...");try{S=(await Mm(u,d)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(k){console.warn("[Reviser] Could not analyze data file:",k)}}const R=h.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),O=h.match(/\\section{Methodology}([\s\S]*?)\\section{/),z=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${l.substring(0,500)}
Supervisor: ${s.substring(0,300)}
Abstract: ${R?R[1].substring(0,400):""}
`,B=await su(z,l,u,d,S,f);if(w=B.usedSyntheticData,B.dataAlert&&(A=B.dataAlert,console.warn(`[Reviser] ${A}`)),B.figures.length>0){console.log(`[Reviser] Generated ${B.figures.length} updated figures`);const k=lu(B.figures);let H=k;w&&(H=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${k}`),h.match(/(\\section{Results})/)&&(h=h.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${H}
`))}}catch(S){console.error("[Reviser] Visualization update failed:",S),d==null||d("Visualization update failed - continuing with text revisions"),A=`*** VISUALIZATION ERROR during revision: ${S.message}`,w=!0}}console.log(`[Reviser] Revision complete! Final output length: ${h.length} characters`);const T=Math.abs(h.length-c.length)/c.length,g=T<.02;return g&&console.log(`[Reviser] Minimal changes detected (${(T*100).toFixed(1)}% change) - paper may have reached its potential`),{paperContent:h,dataAlert:A,usedSyntheticData:w,limitedBySource:g,limitationExplanation:g?"The revision resulted in minimal changes, suggesting the paper has reached its improvement potential given the available source materials (interview and data).":void 0}},uS=async(c,l,s,u)=>{console.log("[Reviser-Synthetic] Starting synthetic data generation mode..."),console.log(`[Reviser-Synthetic] Paper length: ${c.length} characters`),console.log("[Reviser-Synthetic] Phase 1: Loading SYNTHETIC_DATA prompt...");const d=await Ni("SYNTHETIC_DATA");console.log(`[Reviser-Synthetic] Prompt loaded (${d.length} chars)`),u==null||u("Phase 1: Generating synthetic data and adding Results section...");const f=`${d}

================================================================================
CURRENT CONTEXT
================================================================================

CURRENT PAPER (PARTIAL - needs Results section):
${c}

REVIEWER FEEDBACK (calibrate data to address these concerns):
${l}

SUPERVISOR DIRECTIVES:
${s}

================================================================================
EXECUTION INSTRUCTIONS
================================================================================

Execute the steps defined in the prompt above:
1. STEP 1: Extract context from the paper (hypotheses, variables, relationships)
2. STEP 2: Specify data characteristics based on research type
3. STEP 3: Ensure theoretical consistency with hypotheses
4. STEP 4: Address reviewer/supervisor feedback in data generation
5. STEP 5: Use realistic effect sizes from IS literature
6. STEP 6: Generate the synthetic dataset and statistics
7. STEP 7: Update the paper with a complete Results section

OUTPUT FORMAT:
Return the complete revised LaTeX paper with:
- Results section inserted after Methodology
- Discussion updated with findings interpretation
- Transparency statement included
- Abstract updated to mention empirical findings

Output ONLY the complete LaTeX document (no explanations, no code blocks).
Start with \\documentclass or \\begin{abstract}.
End with \\end{document}.`;let m;try{m=await gn(f,"You are an expert academic writer executing synthetic data generation for an IS research paper. Follow the ICISsyntheticData prompt guidelines precisely. Output ONLY the revised LaTeX content."),m=cl(m),console.log(`[Reviser-Synthetic] Phase 1 complete: Paper now has ${m.length} characters`)}catch(A){return console.error("[Reviser-Synthetic] Phase 1 failed - synthetic data generation error:",A),{paperContent:c,dataAlert:"Failed to generate synthetic data - see console for details",usedSyntheticData:!1,limitedBySource:!1}}m.includes("\\section{Results}")||m.includes("\\section*{Results}")||console.warn("[Reviser-Synthetic] Results section may not have been added properly"),m.includes("synthetic data")||m.includes("Synthetic data")||console.warn("[Reviser-Synthetic] Transparency statement may not have been added"),u==null||u("Phase 1 complete: Results section added"),console.log("[Reviser-Synthetic] Phase 2: Running normal revision to address feedback..."),u==null||u("Phase 2: Addressing reviewer feedback and supervisor comments...");const h=`${s}

[SYSTEM NOTE: Synthetic data has already been generated and a Results section has been added.
Now focus on addressing all reviewer feedback throughout the paper, improving writing quality,
and ensuring all sections are coherent with the new Results section.]`;try{const A=await Um(m,l,h,void 0,w=>u==null?void 0:u(`Phase 2: ${w}`),!0);return console.log(`[Reviser-Synthetic] Phase 2 complete: Final paper has ${A.paperContent.length} characters`),u==null||u("Synthetic data generation and revision complete"),{paperContent:A.paperContent,dataAlert:"Synthetic data was generated to demonstrate the research model. Reviewer feedback has been addressed throughout the paper.",usedSyntheticData:!0,limitedBySource:A.limitedBySource}}catch(A){return console.error("[Reviser-Synthetic] Phase 2 failed - revision error:",A),console.log("[Reviser-Synthetic] Returning Phase 1 result (Results section added, but feedback not addressed)"),{paperContent:m,dataAlert:"Synthetic data was generated, but revision failed. Reviewer feedback may not be fully addressed.",usedSyntheticData:!0,limitedBySource:!1}}},Yh="http://localhost:3001/Data";function dS(){const[c,l]=fe.useState(Ch),s=fe.useCallback((v,T)=>{l(g=>({...g,stages:{...g.stages,[v]:T}}))},[]),u=fe.useCallback(v=>{l(T=>({...T,currentBuilderStep:v}))},[]),d=fe.useCallback(v=>{const T=new Date().toLocaleTimeString();l(g=>({...g,logs:[...g.logs,`[${T}] ${v}`]}))},[]),f=fe.useCallback(v=>{l(T=>({...T,currentStage:v,stages:{...T.stages,[v]:Oe.ACTIVE}}))},[]),m=fe.useCallback(v=>{l(T=>({...T,...v}))},[]),p=fe.useCallback(v=>{l(T=>({...T,rounds:[...T.rounds,v],currentRound:v.roundId}))},[]),b=fe.useCallback(v=>{l(T=>{if(T.rounds.length===0)return T;const g=[...T.rounds];return g[g.length-1]={...g[g.length-1],...v},{...T,rounds:g}})},[]),h=fe.useCallback(v=>{l(T=>({...T,stages:{...T.stages,[v]:Oe.PENDING}}))},[]),A=fe.useCallback(v=>{l(T=>({...T,participantId:v}))},[]),w=fe.useCallback(()=>`${c.participantId}_${c.sessionTimestamp}`,[c.participantId,c.sessionTimestamp]),_=fe.useCallback(async()=>{var T;try{const g=await mm();g.success?console.log(`Backed up ${((T=g.backedUpFiles)==null?void 0:T.length)||0} files to ${g.backupDir}`):console.warn("Backup failed:",g.error)}catch(g){console.warn("Backup not available:",g)}ab(),_m(),vm();const v=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);l({...Ch,sessionTimestamp:v,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:c,setStageStatus:s,setBuilderStep:u,addLog:d,moveToStage:f,updateState:m,addRound:p,updateLastRound:b,resetStageData:h,setParticipantId:A,getFilePrefix:w,resetAllState:_}}function fS(){const[c,l]=fe.useState({}),[s,u]=fe.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}});fe.useEffect(()=>{d()},[]);const d=async()=>{u(_=>({..._,loading:!0,error:null}));try{const _=`?t=${Date.now()}`,v=await fetch(`${Yh}/manifest.json${_}`,{cache:"no-store"});if(!v.ok)throw new Error("No manifest.json found in Data folder");const T=await v.json(),g={interview:null,template:null,dataFile:null,participantId:null,participantEmail:null};for(const S of T.files||[]){const R=`${Yh}/${S.filename}`;S.type==="interview"?(g.interview={filename:S.filename,path:R},g.participantId=S.participantId||null):S.type==="template"?g.template={filename:S.filename,path:R}:S.type==="dataFile"&&(g.dataFile={filename:S.filename,path:R})}u({loading:!1,error:null,detected:g}),g.interview&&await f("interview",g.interview.path,g.interview.filename,g.participantId),g.template&&await f("template",g.template.path,g.template.filename),g.dataFile&&await f("dataFile",g.dataFile.path,g.dataFile.filename)}catch(_){console.log("Auto-detection not available, manual upload required:",_),u({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}})}},f=async(_,v,T,g)=>{try{const S=`?t=${Date.now()}`,R=await fetch(v+S,{cache:"no-store"});if(!R.ok){console.warn(`Failed to load ${T}`);return}const O=await R.text(),z=new Blob([O],{type:"text/plain"}),B=new File([z],T,{type:"text/plain"});l(_==="interview"?k=>({...k,interview:B,interviewContent:O,participantId:g||k.participantId}):_==="template"?k=>({...k,template:B,templateContent:O}):k=>({...k,dataFile:B,dataFileContent:O})),console.log(`Auto-loaded: ${T}`)}catch(S){console.warn(`Error loading ${T}:`,S)}},m=fe.useCallback(async(_,v)=>{if(!v){l(T=>{const g={...T};return delete g[_],_==="interview"&&delete g.interviewContent,g});return}if(_==="interview"){const T=await v.text();let g=v.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,""),S=null;const R=T.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i)||T.match(/Email[:\s]+([^\s\n]+@[^\s\n]+)/i);R&&(S=R[1].trim(),g=S.replace(/@/g,"_").replace(/\./g,"_")),l(O=>({...O,interview:v,interviewContent:T,participantId:g,participantEmail:S}))}else if(_==="template"){const T=await v.text();l(g=>({...g,template:v,templateContent:T}))}else{const T=await v.text();l(S=>({...S,dataFile:v,dataFileContent:T})),console.log("[handleFileChange] Uploading data file to cloud storage...");const g=await gm(v);g.success?console.log("[handleFileChange] Cloud upload success:",g.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",g.error)}},[]),p=fe.useCallback(()=>c.interviewContent||"",[c.interviewContent]),b=fe.useCallback(()=>c.dataFileContent||"",[c.dataFileContent]),h=fe.useCallback(()=>{var _;return((_=c.dataFile)==null?void 0:_.name)||""},[c.dataFile]),A=fe.useCallback(async()=>{await d()},[]),w=fe.useCallback(()=>c.participantEmail||null,[c.participantEmail]);return{uploadedFiles:c,handleFileChange:m,getInterviewContent:p,getDataFileContent:b,getDataFileName:h,getParticipantEmail:w,detectionStatus:s,refreshDetection:A}}function pS(c){const{simulationState:l,setStageStatus:s,setBuilderStep:u,addLog:d,moveToStage:f,updateState:m,addRound:p,updateLastRound:b,resetStageData:h,resetAllState:A,uploadedFiles:w,getInterviewContent:_,refreshDetection:v,onDataFileConfirm:T}=c,[g,S]=fe.useState(!1);Fe.STEP1_INTERVIEW_ANALYSIS,Fe.STEP1_5_DATA_ASSESSMENT,Fe.STEP2_RESEARCH_PLANNING,Fe.STEP2_FINAL_METADATA,Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS,Fe.STEP8_PAPER_WRITING,Fe.STEP9_FINAL_SUBMISSION;const R=fe.useCallback(async k=>{const H=k??l.currentRound;d(`Reviewer: Starting review process with Gemini (Round ${H})...`),s(ve.REVIEWER,Oe.ACTIVE);try{let P=l.paperContent;if(!P){const E=l.currentPaperVersion||1;d(`Reviewer: Paper not in state, reading from localStorage (v${E})...`),P=da(E)||"",P&&(m({paperContent:P}),d("Reviewer: Paper loaded from localStorage"))}if(!P){d("Reviewer: ERROR - No paper content available in state or localStorage"),s(ve.REVIEWER,Oe.ERROR);return}const G=l.participantId||"icis_paper",$=H;d("Reviewer: Analyzing paper with Gemini...");const oe=_();oe&&d("Reviewer: Interview content available for trustworthiness assessment");const ce=await rS(P,$,G,oe);d(`Reviewer: Analysis complete - Average score: ${((ce.novelty+ce.significance+ce.methodologicalRigor+ce.clarity+ce.relevance)/5).toFixed(1)}/5`);const D={version:$,paperId:G,timestamp:new Date().toISOString(),reviewScores:{novelty:ce.novelty,significance:ce.significance,methodologicalRigor:ce.methodologicalRigor,clarity:ce.clarity,relevance:ce.relevance},reviewComments:{novelty:ce.noveltyComment,significance:ce.significanceComment,methodologicalRigor:ce.methodologicalRigorComment,clarity:ce.clarityComment,relevance:ce.relevanceComment},averageScore:(ce.novelty+ce.significance+ce.methodologicalRigor+ce.clarity+ce.relevance)/5,errorCounts:{majorErrors:ce.majorConcerns.length,minorErrors:ce.minorCorrections.length},errorDetails:{majorErrors:ce.majorConcerns,minorErrors:ce.minorCorrections},trustworthiness:ce.trustworthiness,criticalAlerts:ce.criticalAlerts.map((E,W)=>({number:W+1,title:E.title,status:"Open",impact:E.impact,details:E.details,actionRequired:E.actionRequired,consequence:E.consequence}))},Y={version:$,paperId:G,timestamp:new Date().toISOString(),researchQuestion:ce.researchQuestionFeedback,method:ce.methodFeedback,potentialImpact:ce.impactFeedback,writing:ce.writingFeedback,majorConcerns:ce.majorConcerns,minorCorrections:ce.minorCorrections,overallAssessment:ce.overallAssessment};am(D),fu(Y),d("Reviewer: Saved oversight and feedback files"),p({roundId:$,reviewScore:D.averageScore,reliabilityScore:ce.trustworthiness.reliability,alignmentScore:ce.trustworthiness.goalAlignment,errorsDetected:ce.majorConcerns.length+ce.minorCorrections.length,reviewScores:D.reviewScores,trustworthinessScores:ce.trustworthiness,errorCounts:D.errorCounts,constructiveFeedback:ce.overallAssessment,feedback:ce.overallAssessment,criticalAlerts:ce.criticalAlerts.map(E=>E.title)}),d("Reviewer: Review complete! Proceed to Supervisor for decision."),s(ve.REVIEWER,Oe.COMPLETED)}catch(P){d(`Reviewer: ERROR - ${P.message}`),s(ve.REVIEWER,Oe.ERROR)}},[s,d,p,m,l.currentRound,l.participantId,l.paperContent]),O=fe.useCallback(async(k,H)=>{var P,G,$,oe;switch(k){case ve.SETUP:await new Promise(E=>setTimeout(E,500));const ce={interview:!!w.interview,template:!0,examples:!0,dataFile:!!w.dataFile,paperPdf:!1};m({files:ce}),d("Setup: Files verified successfully");break;case ve.BUILDER:d("Builder: Starting paper generation with Gemini...");try{const E=_();if(!E){d("Builder: ERROR - No interview content available"),s(ve.BUILDER,Oe.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${H}", uploadedFiles.dataFile?.name="${(P=w.dataFile)==null?void 0:P.name}"`);const W=H||((G=w.dataFile)==null?void 0:G.name),I=!W;d(`Builder: Mode - ${I?"Theoretical paper (conceptual figures only)":"Full paper with data"}`),d(W?`Builder: Data file - ${W}`:"Builder: No data file - generating theoretical paper with conceptual figures");const J=await Sx(E,I,(C,L)=>{L==="starting"?d(`Builder: Generating ${C}...`):L==="completed"?d(`Builder: ${C} complete`):L==="error"&&d(`Builder: ${C} - error (continuing)`)},W,T);J.dataSummary&&(d("Builder: Data Analysis Summary:"),d(J.dataSummary.substring(0,500)+(J.dataSummary.length>500?"...":""))),J.dataAlert&&d(J.dataAlert),J.usedSyntheticData&&d("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),m({paperContent:J.paperContent,currentPaperVersion:1,currentRound:1,dataAlert:J.dataAlert,dataSummary:J.dataSummary}),Mh(1,J.paperContent);const q=l.participantId?`${l.participantId}_${l.sessionTimestamp}`:"",me=q?`${q}_icis_paper_v1.tex`:"icis_paper_v1.tex";await eu(me,J.paperContent),d("Builder: Paper generation complete - saved to localStorage and filesystem"),s(ve.BUILDER,Oe.COMPLETED),f(ve.REVIEWER),setTimeout(()=>R(),500)}catch(E){d(`Builder: ERROR - ${E.message}`),s(ve.BUILDER,Oe.ERROR)}break;case ve.REVIEWER:await R();break;case ve.SUPERVISOR:d("Supervisor: Awaiting human review and decision..."),s(ve.SUPERVISOR,Oe.ACTIVE);return;case ve.FINALIZE:d("Finalize: Preparing final submission..."),s(ve.FINALIZE,Oe.ACTIVE);return;case ve.REVISER:const D=(H==null?void 0:H.startsWith("[SYNTHETIC_MODE]"))??!1,Y=D&&H?H.replace("[SYNTHETIC_MODE]",""):H;d(D?"Reviser: Starting SYNTHETIC DATA GENERATION mode (Step 0.5)...":"Reviser: Starting revision with Gemini..."),console.log(`[Workflow] REVISER stage starting (synthetic mode: ${D})`),s(ve.REVISER,Oe.ACTIVE);try{let E=l.paperContent;if(console.log(`[Workflow] Paper in state: ${E?E.length+" chars":"none"}`),!E){const se=l.currentPaperVersion||1;d(`Reviser: Paper not in state, reading from localStorage (v${se})...`),E=da(se)||"",E&&(m({paperContent:E}),d("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${E.length} chars`))}if(!E){d("Reviser: ERROR - No paper content available in state or localStorage"),s(ve.REVISER,Oe.ERROR);return}const W=l.rounds[l.rounds.length-1],I=(W==null?void 0:W.feedback)||"Improve clarity and strengthen methodology.",j=Y||(W==null?void 0:W.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${I.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${Y?"from override":"from state"}): ${j.substring(0,100)}...`),d(D?"Reviser: Extracting research model and generating synthetic data...":"Reviser: Analyzing feedback and generating revisions..."),d(`Reviser: Paper size: ${E.length} chars, calling Gemini...`);const J=($=w.dataFile)==null?void 0:$.name,q=se=>{d(`Reviser: ${se}`)};console.log(`[Workflow] Calling ${D?"runReviserWithSyntheticData":"runReviser"}...`);const me=D?await uS(E,I,j,q):await Um(E,I,j,J,q);console.log(`[Workflow] runReviser completed, result: ${((oe=me.paperContent)==null?void 0:oe.length)||0} chars`),me.dataAlert&&d(me.dataAlert),me.usedSyntheticData&&d("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const C=l.currentPaperVersion+1;m({paperContent:me.paperContent,currentPaperVersion:C,dataAlert:me.dataAlert||l.dataAlert}),Mh(C,me.paperContent);const L=l.participantId?`${l.participantId}_${l.sessionTimestamp}`:"",le=L?`${L}_icis_paper_v${C}.tex`:`icis_paper_v${C}.tex`;await eu(le,me.paperContent),d(`Reviser: Revision complete - Version ${C} saved`);const ne=l.currentRound+1;s(ve.REVISER,Oe.COMPLETED),f(ve.REVIEWER),m({currentRound:ne}),setTimeout(()=>R(ne),500)}catch(E){d(`Reviser: ERROR - ${E.message}`),s(ve.REVISER,Oe.ERROR)}break}},[w.interview,w.dataFile,m,d,u,s,f,R,l.currentPaperVersion,l.currentRound,l.dataAlert,T]),z=fe.useCallback(async(k,H,P)=>{switch(d(`Stage ${k}: ${H}`),console.log(`[handleStageAction] Stage ${k} action=${H} overrideParam="${P}" (type: ${typeof P})`),H){case"start":s(k,Oe.ACTIVE),S(!0);try{await O(k,P),k!==ve.BUILDER&&k!==ve.REVIEWER&&k!==ve.REVISER&&s(k,Oe.COMPLETED),d(`Stage ${k} completed`)}catch(G){s(k,Oe.ERROR),d(`Stage ${k} error: ${G}`)}finally{S(!1)}break;case"abort":s(k,Oe.ERROR),S(!1),d(`Stage ${k} aborted`);break;case"restart":h(k),s(k,Oe.ACTIVE),S(!0),d(`Stage ${k} restarting...`);try{await O(k,P),k!==ve.BUILDER&&k!==ve.REVIEWER&&k!==ve.REVISER&&s(k,Oe.COMPLETED),d(`Stage ${k} restart completed`)}catch(G){s(k,Oe.ERROR),d(`Stage ${k} restart error: ${G}`)}finally{S(!1)}break;case"skip":s(k,Oe.SKIPPED),d(`Stage ${k} skipped`);break}},[d,s,h,O]),B=fe.useCallback(async(k,H)=>{var P;switch(d(`Action: ${k}`),k){case"START_SETUP":(l.rounds.length>0||l.currentPaperVersion>0||l.paperContent!=="")&&A&&A().then(()=>{d("Setup: Backed up and cleared previous case data")}),z(ve.SETUP,"start");break;case"START_BUILDER":d("Setup: Checking for data files...");let $;const oe=La();if(oe)$=oe.filename,console.log(`[START_BUILDER] Using cloud data file: ${oe.filename}`),d(`Setup: Data file ready (cloud) - ${oe.filename}`);else if(w.dataFile)$=w.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${$}`),d(`Setup: Data file ready (uploaded) - ${$}`);else try{d("Setup: Refreshing file manifest...");const D=await lm();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(D,null,2)),D.success&&D.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(D.manifest.files,null,2));const Y=(P=D.manifest.files)==null?void 0:P.find(E=>E.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",Y),Y&&($=Y.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${Y.filename}"`),d(`Setup: Data file detected - ${Y.filename}`),v&&(d("Setup: Loading data file into memory..."),await v(),d("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}$||d("Setup: No data file - will generate partial paper"),s(ve.SETUP,Oe.COMPLETED),f(ve.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${$}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${$}"`),z(ve.BUILDER,"start",$)},500);break;case"PROCEED_TO_SUPERVISOR":s(ve.REVIEWER,Oe.COMPLETED),f(ve.SUPERVISOR);break;case"SKIP_TO_REVIEWER":s(ve.SETUP,Oe.COMPLETED),s(ve.BUILDER,Oe.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ve.REVIEWER),setTimeout(()=>z(ve.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":s(ve.SETUP,Oe.COMPLETED),s(ve.BUILDER,Oe.COMPLETED),s(ve.REVIEWER,Oe.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ve.SUPERVISOR);break;case"revise":if(H){b({supervisorComment:H});const D=l.currentRound;Pc(D,D,H),$c("CONTINUE",D),d(`Supervisor: Saved directive to feedback file (round ${D})`)}s(ve.SUPERVISOR,Oe.COMPLETED),f(ve.REVISER),d(`Supervisor: Passing directive to Reviser: "${(H==null?void 0:H.substring(0,50))||"none"}..."`),setTimeout(()=>z(ve.REVISER,"start",H),100);break;case"finalize":if(H){b({supervisorComment:H});const D=l.currentRound;Pc(D,D,H),$c("FINALIZE",D),d(`Supervisor: Saved finalize decision to feedback file (round ${D})`)}s(ve.SUPERVISOR,Oe.COMPLETED),f(ve.FINALIZE);break;case"generateSyntheticData":if(d("Supervisor: Initiating synthetic data generation..."),H){b({supervisorComment:H});const D=l.currentRound;Pc(D,D,`[SYNTHETIC DATA REQUEST]
${H}`),$c("GENERATE_SYNTHETIC_DATA",D),d(`Supervisor: Saved synthetic data request to feedback file (round ${D})`)}d("Supervisor: Routing to Reviser for synthetic data generation (Step 0.5)"),s(ve.SUPERVISOR,Oe.COMPLETED),f(ve.REVISER);const ce=`[SYNTHETIC_MODE]${H||""}`;setTimeout(()=>z(ve.REVISER,"start",ce),100);break;case"NEW_CASE":A?A().then(()=>{d("New case started - files backed up and cleared"),v==null||v(),f(ve.SETUP)}):f(ve.SETUP);break;default:d(`Unknown action: ${k}`)}},[d,f,s,b,z,A,l.rounds.length,l.currentPaperVersion,l.paperContent,m,v]);return{isProcessing:g,handleStageAction:z,handleWorkflowAction:B}}const hS=()=>{const[c,l]=fe.useState("main"),[s,u]=fe.useState("research"),[d,f]=fe.useState("transcript-upload"),[m,p]=fe.useState("icis"),b=fe.useCallback(q=>{u(q),hx(q),console.log(`[App] Paper mode changed to: ${q}`)},[]),{simulationState:h,setStageStatus:A,setBuilderStep:w,addLog:_,moveToStage:v,updateState:T,addRound:g,updateLastRound:S,resetStageData:R,setParticipantId:O,getFilePrefix:z,resetAllState:B}=dS(),{uploadedFiles:k,handleFileChange:H,getInterviewContent:P,getDataFileContent:G,getDataFileName:$,getParticipantEmail:oe,detectionStatus:ce,refreshDetection:D}=fS(),Y=fe.useCallback(async q=>{const me=`Data File Verification

File: ${q.filename}
Total lines: ${q.totalLines}

First line (column headers):
${q.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(me)},[]),{isProcessing:E,handleStageAction:W,handleWorkflowAction:I}=pS({simulationState:h,setStageStatus:A,setBuilderStep:w,addLog:_,moveToStage:v,updateState:T,addRound:g,updateLastRound:S,resetStageData:R,resetAllState:B,uploadedFiles:k,getInterviewContent:P,refreshDetection:D,onDataFileConfirm:Y});fe.useEffect(()=>{k.participantId&&k.participantId!==h.participantId&&(O(k.participantId),_(`Participant ID set: ${k.participantId}`))},[k.participantId,h.participantId,O,_]);const j=q=>{_(`Aborting ${q}...`),W(q,"abort")},J=q=>{_(`Restarting ${q}...`),W(q,"restart"),setTimeout(()=>W(q,"start"),100)};return i.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[i.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:i.jsx(eb,{currentStage:h.currentStage,currentBuilderStep:h.currentBuilderStep,stagesState:h.stages,isPartialPaper:h.isPartialPaper,currentRound:h.currentRound,isProcessing:E,onStageClick:v,onStageAction:W,onNewCase:()=>I("NEW_CASE"),onNewInterview:()=>{window.open(`/asd/interview.html?mode=${s}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/asd/research-followup-paper.html","_blank","noopener,noreferrer")},onResearchAdmin:s==="research"?()=>l(c==="admin"?"main":"admin"):void 0,paperMode:s,onPaperModeChange:b,sourceType:d,selectedVenueId:m})}),i.jsx("div",{className:"flex-1 h-full",children:c==="admin"?i.jsx(Xb,{onClose:()=>l("main")}):i.jsx(Fb,{state:h,isProcessing:E,onAction:I,uploadedFiles:k,onFileChange:H,detectionStatus:ce,onRefreshDetection:D,onStageAbort:j,onStageRestart:J,filePrefix:z(),dataFileName:$(),dataFileContent:G(),participantEmail:oe()||void 0,onNewInterview:()=>{window.open(`/asd/interview.html?mode=${s}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/asd/research-followup-paper.html","_blank","noopener,noreferrer")},onSourceTypeChange:f,onVenueChange:p})})]})};function mS(){const c=Date.now(),l=new Uint8Array(16);crypto.getRandomValues(l);const s=Array.from(l).map(u=>u.toString(16).padStart(2,"0")).join("");return`${c}_${s}`}function gS(){const c=sessionStorage.getItem("icis_session_token");if(!c)return!1;const l=c.split("_");if(l.length!==2)return!1;const s=parseInt(l[0],10);if(isNaN(s))return!1;const u=Date.now()-s,d=1440*60*1e3;return u<d}const yS=({onLogin:c})=>{const[l,s]=fe.useState(""),[u,d]=fe.useState(""),[f,m]=fe.useState(""),[p,b]=fe.useState(!1),h=A=>{A.preventDefault(),m(""),b(!0);const w="asd",_="tennessee2025";setTimeout(()=>{if(l===w&&u===_){const v=mS();sessionStorage.setItem("icis_session_token",v),sessionStorage.setItem("icis_authenticated","true"),c()}else m("Invalid username or password"),b(!1)},500)};return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:i.jsxs("div",{className:"w-full max-w-md",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:i.jsx("span",{className:"text-2xl font-bold text-white",children:"ASD"})}),i.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Automated Scientific Discovery"}),i.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),i.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:i.jsxs("form",{onSubmit:h,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(Zv,{className:"h-5 w-5 text-slate-400"})}),i.jsx("input",{type:"text",id:"username",value:l,onChange:A=>s(A.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(Ev,{className:"h-5 w-5 text-slate-400"})}),i.jsx("input",{type:"password",id:"password",value:u,onChange:A=>d(A.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),f&&i.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[i.jsx(Oa,{className:"h-5 w-5 flex-shrink-0"}),i.jsx("span",{className:"text-sm",children:f})]}),i.jsx("button",{type:"submit",disabled:p,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:p?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),i.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"Conference Paper Authoring System"})]})})},vS=()=>{const[c,l]=fe.useState(null);fe.useEffect(()=>{const u=gS(),d=sessionStorage.getItem("icis_authenticated");l(d==="true"&&u)},[]);const s=()=>{l(!0)};return c===null?i.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:i.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):c?i.jsx(hS,{}):i.jsx(yS,{onLogin:s})},Fm=document.getElementById("root");if(!Fm)throw new Error("Could not find root element to mount to");const bS=u0.createRoot(Fm);bS.render(i.jsx(n0.StrictMode,{children:i.jsx(vS,{})}));export{f0 as R,xS as a,SS as g};
