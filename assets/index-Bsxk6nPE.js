(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function iu(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var jc={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function Xy(){if(hh)return vi;hh=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(u,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var h in d)h!=="key"&&(f[h]=d[h])}else f=d;return d=f.ref,{$$typeof:c,type:u,key:g,ref:d!==void 0?d:null,props:f}}return vi.Fragment=o,vi.jsx=s,vi.jsxs=s,vi}var mh;function Qy(){return mh||(mh=1,jc.exports=Xy()),jc.exports}var i=Qy(),kc={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function Wy(){if(gh)return ke;gh=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),_=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,S={};function w(C,L,le){this.props=C,this.context=L,this.refs=S,this.updater=le||A}w.prototype.isReactComponent={},w.prototype.setState=function(C,L){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,L,"setState")},w.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function O(){}O.prototype=w.prototype;function z(C,L,le){this.props=C,this.context=L,this.refs=S,this.updater=le||A}var B=z.prototype=new O;B.constructor=z,m(B,w.prototype),B.isPureReactComponent=!0;var j=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function V(C,L,le){var ne=le.ref;return{$$typeof:c,type:C,key:L,ref:ne!==void 0?ne:null,props:le}}function oe(C,L){return V(C.type,L,C.props)}function ce(C){return typeof C=="object"&&C!==null&&C.$$typeof===c}function D(C){var L={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(le){return L[le]})}var Y=/\/+/g;function E(C,L){return typeof C=="object"&&C!==null&&C.key!=null?D(""+C.key):L.toString(36)}function W(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(H,H):(C.status="pending",C.then(function(L){C.status==="pending"&&(C.status="fulfilled",C.value=L)},function(L){C.status==="pending"&&(C.status="rejected",C.reason=L)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function I(C,L,le,ne,se){var Ee=typeof C;(Ee==="undefined"||Ee==="boolean")&&(C=null);var Ce=!1;if(C===null)Ce=!0;else switch(Ee){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(C.$$typeof){case c:case o:Ce=!0;break;case T:return Ce=C._init,I(Ce(C._payload),L,le,ne,se)}}if(Ce)return se=se(C),Ce=ne===""?"."+E(C,0):ne,j(se)?(le="",Ce!=null&&(le=Ce.replace(Y,"$&/")+"/"),I(se,L,le,"",function(je){return je})):se!=null&&(ce(se)&&(se=oe(se,le+(se.key==null||C&&C.key===se.key?"":(""+se.key).replace(Y,"$&/")+"/")+Ce)),L.push(se)),1;Ce=0;var Te=ne===""?".":ne+":";if(j(C))for(var we=0;we<C.length;we++)ne=C[we],Ee=Te+E(ne,we),Ce+=I(ne,L,le,Ee,se);else if(we=v(C),typeof we=="function")for(C=we.call(C),we=0;!(ne=C.next()).done;)ne=ne.value,Ee=Te+E(ne,we++),Ce+=I(ne,L,le,Ee,se);else if(Ee==="object"){if(typeof C.then=="function")return I(W(C),L,le,ne,se);throw L=String(C),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function k(C,L,le){if(C==null)return C;var ne=[],se=0;return I(C,ne,"","",function(Ee){return L.call(le,Ee,se++)}),ne}function J(C){if(C._status===-1){var L=C._result;L=L(),L.then(function(le){(C._status===0||C._status===-1)&&(C._status=1,C._result=le)},function(le){(C._status===0||C._status===-1)&&(C._status=2,C._result=le)}),C._status===-1&&(C._status=0,C._result=L)}if(C._status===1)return C._result.default;throw C._result}var q=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},me={map:k,forEach:function(C,L,le){k(C,function(){L.apply(this,arguments)},le)},count:function(C){var L=0;return k(C,function(){L++}),L},toArray:function(C){return k(C,function(L){return L})||[]},only:function(C){if(!ce(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ke.Activity=R,ke.Children=me,ke.Component=w,ke.Fragment=s,ke.Profiler=d,ke.PureComponent=z,ke.StrictMode=u,ke.Suspense=x,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ke.__COMPILER_RUNTIME={__proto__:null,c:function(C){return P.H.useMemoCache(C)}},ke.cache=function(C){return function(){return C.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(C,L,le){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ne=m({},C.props),se=C.key;if(L!=null)for(Ee in L.key!==void 0&&(se=""+L.key),L)!G.call(L,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&L.ref===void 0||(ne[Ee]=L[Ee]);var Ee=arguments.length-2;if(Ee===1)ne.children=le;else if(1<Ee){for(var Ce=Array(Ee),Te=0;Te<Ee;Te++)Ce[Te]=arguments[Te+2];ne.children=Ce}return V(C.type,se,ne)},ke.createContext=function(C){return C={$$typeof:g,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},ke.createElement=function(C,L,le){var ne,se={},Ee=null;if(L!=null)for(ne in L.key!==void 0&&(Ee=""+L.key),L)G.call(L,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(se[ne]=L[ne]);var Ce=arguments.length-2;if(Ce===1)se.children=le;else if(1<Ce){for(var Te=Array(Ce),we=0;we<Ce;we++)Te[we]=arguments[we+2];se.children=Te}if(C&&C.defaultProps)for(ne in Ce=C.defaultProps,Ce)se[ne]===void 0&&(se[ne]=Ce[ne]);return V(C,Ee,se)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(C){return{$$typeof:h,render:C}},ke.isValidElement=ce,ke.lazy=function(C){return{$$typeof:T,_payload:{_status:-1,_result:C},_init:J}},ke.memo=function(C,L){return{$$typeof:p,type:C,compare:L===void 0?null:L}},ke.startTransition=function(C){var L=P.T,le={};P.T=le;try{var ne=C(),se=P.S;se!==null&&se(le,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(H,q)}catch(Ee){q(Ee)}finally{L!==null&&le.types!==null&&(L.types=le.types),P.T=L}},ke.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ke.use=function(C){return P.H.use(C)},ke.useActionState=function(C,L,le){return P.H.useActionState(C,L,le)},ke.useCallback=function(C,L){return P.H.useCallback(C,L)},ke.useContext=function(C){return P.H.useContext(C)},ke.useDebugValue=function(){},ke.useDeferredValue=function(C,L){return P.H.useDeferredValue(C,L)},ke.useEffect=function(C,L){return P.H.useEffect(C,L)},ke.useEffectEvent=function(C){return P.H.useEffectEvent(C)},ke.useId=function(){return P.H.useId()},ke.useImperativeHandle=function(C,L,le){return P.H.useImperativeHandle(C,L,le)},ke.useInsertionEffect=function(C,L){return P.H.useInsertionEffect(C,L)},ke.useLayoutEffect=function(C,L){return P.H.useLayoutEffect(C,L)},ke.useMemo=function(C,L){return P.H.useMemo(C,L)},ke.useOptimistic=function(C,L){return P.H.useOptimistic(C,L)},ke.useReducer=function(C,L,le){return P.H.useReducer(C,L,le)},ke.useRef=function(C){return P.H.useRef(C)},ke.useState=function(C){return P.H.useState(C)},ke.useSyncExternalStore=function(C,L,le){return P.H.useSyncExternalStore(C,L,le)},ke.useTransition=function(){return P.H.useTransition()},ke.version="19.2.1",ke}var yh;function su(){return yh||(yh=1,kc.exports=Wy()),kc.exports}var fe=su();const Zy=iu(fe);var Lc={exports:{}},bi={},Mc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function Ky(){return vh||(vh=1,(function(c){function o(I,k){var J=I.length;I.push(k);e:for(;0<J;){var q=J-1>>>1,me=I[q];if(0<d(me,k))I[q]=k,I[J]=me,J=q;else break e}}function s(I){return I.length===0?null:I[0]}function u(I){if(I.length===0)return null;var k=I[0],J=I.pop();if(J!==k){I[0]=J;e:for(var q=0,me=I.length,C=me>>>1;q<C;){var L=2*(q+1)-1,le=I[L],ne=L+1,se=I[ne];if(0>d(le,J))ne<me&&0>d(se,le)?(I[q]=se,I[ne]=J,q=ne):(I[q]=le,I[L]=J,q=L);else if(ne<me&&0>d(se,J))I[q]=se,I[ne]=J,q=ne;else break e}}return k}function d(I,k){var J=I.sortIndex-k.sortIndex;return J!==0?J:I.id-k.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;c.unstable_now=function(){return f.now()}}else{var g=Date,h=g.now();c.unstable_now=function(){return g.now()-h}}var x=[],p=[],T=1,R=null,_=3,v=!1,A=!1,m=!1,S=!1,w=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function B(I){for(var k=s(p);k!==null;){if(k.callback===null)u(p);else if(k.startTime<=I)u(p),k.sortIndex=k.expirationTime,o(x,k);else break;k=s(p)}}function j(I){if(m=!1,B(I),!A)if(s(x)!==null)A=!0,H||(H=!0,D());else{var k=s(p);k!==null&&W(j,k.startTime-I)}}var H=!1,P=-1,G=5,V=-1;function oe(){return S?!0:!(c.unstable_now()-V<G)}function ce(){if(S=!1,H){var I=c.unstable_now();V=I;var k=!0;try{e:{A=!1,m&&(m=!1,O(P),P=-1),v=!0;var J=_;try{t:{for(B(I),R=s(x);R!==null&&!(R.expirationTime>I&&oe());){var q=R.callback;if(typeof q=="function"){R.callback=null,_=R.priorityLevel;var me=q(R.expirationTime<=I);if(I=c.unstable_now(),typeof me=="function"){R.callback=me,B(I),k=!0;break t}R===s(x)&&u(x),B(I)}else u(x);R=s(x)}if(R!==null)k=!0;else{var C=s(p);C!==null&&W(j,C.startTime-I),k=!1}}break e}finally{R=null,_=J,v=!1}k=void 0}}finally{k?D():H=!1}}}var D;if(typeof z=="function")D=function(){z(ce)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,E=Y.port2;Y.port1.onmessage=ce,D=function(){E.postMessage(null)}}else D=function(){w(ce,0)};function W(I,k){P=w(function(){I(c.unstable_now())},k)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(I){I.callback=null},c.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<I?Math.floor(1e3/I):5},c.unstable_getCurrentPriorityLevel=function(){return _},c.unstable_next=function(I){switch(_){case 1:case 2:case 3:var k=3;break;default:k=_}var J=_;_=k;try{return I()}finally{_=J}},c.unstable_requestPaint=function(){S=!0},c.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=_;_=I;try{return k()}finally{_=J}},c.unstable_scheduleCallback=function(I,k,J){var q=c.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?q+J:q):J=q,I){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=J+me,I={id:T++,callback:k,priorityLevel:I,startTime:J,expirationTime:me,sortIndex:-1},J>q?(I.sortIndex=J,o(p,I),s(x)===null&&I===s(p)&&(m?(O(P),P=-1):m=!0,W(j,J-q))):(I.sortIndex=me,o(x,I),A||v||(A=!0,H||(H=!0,D()))),I},c.unstable_shouldYield=oe,c.unstable_wrapCallback=function(I){var k=_;return function(){var J=_;_=k;try{return I.apply(this,arguments)}finally{_=J}}}})(zc)),zc}var bh;function Jy(){return bh||(bh=1,Mc.exports=Ky()),Mc.exports}var Uc={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function e0(){if(xh)return _t;xh=1;var c=su();function o(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var u={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(x,p,T){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:x,containerInfo:p,implementation:T}}var g=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,_t.createPortal=function(x,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return f(x,p,null,T)},_t.flushSync=function(x){var p=g.T,T=u.p;try{if(g.T=null,u.p=2,x)return x()}finally{g.T=p,u.p=T,u.d.f()}},_t.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(x,p))},_t.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},_t.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var T=p.as,R=h(T,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?u.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:R,integrity:_,fetchPriority:v}):T==="script"&&u.d.X(x,{crossOrigin:R,integrity:_,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},_t.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=h(p.as,p.crossOrigin);u.d.M(x,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(x)},_t.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,R=h(T,p.crossOrigin);u.d.L(x,T,{crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},_t.preloadModule=function(x,p){if(typeof x=="string")if(p){var T=h(p.as,p.crossOrigin);u.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(x)},_t.requestFormReset=function(x){u.d.r(x)},_t.unstable_batchedUpdates=function(x,p){return x(p)},_t.useFormState=function(x,p,T){return g.H.useFormState(x,p,T)},_t.useFormStatus=function(){return g.H.useHostTransitionStatus()},_t.version="19.2.1",_t}var Sh;function t0(){if(Sh)return Uc.exports;Sh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),Uc.exports=e0(),Uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function n0(){if(Eh)return bi;Eh=1;var c=Jy(),o=su(),s=t0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(u(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var l=r.alternate;if(l===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===n)return x(r),e;if(l===a)return x(r),t;l=l.sibling}throw Error(u(188))}if(n.return!==a.return)n=r,a=l;else{for(var y=!1,N=r.child;N;){if(N===n){y=!0,n=r,a=l;break}if(N===a){y=!0,a=r,n=l;break}N=N.sibling}if(!y){for(N=l.child;N;){if(N===n){y=!0,n=l,a=r;break}if(N===a){y=!0,a=l,n=r;break}N=N.sibling}if(!y)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),z=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function E(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case w:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case H:return"SuspenseList";case V:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case z:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:E(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return E(e(t))}catch{}}return null}var W=Array.isArray,I=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},q=[],me=-1;function C(e){return{current:e}}function L(e){0>me||(e.current=q[me],q[me]=null,me--)}function le(e,t){me++,q[me]=e.current,e.current=t}var ne=C(null),se=C(null),Ee=C(null),Ce=C(null);function Te(e,t){switch(le(Ee,t),le(se,e),le(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?zp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=zp(t),e=Up(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(ne),le(ne,e)}function we(){L(ne),L(se),L(Ee)}function je(e){e.memoizedState!==null&&le(Ce,e);var t=ne.current,n=Up(t,e.type);t!==n&&(le(se,e),le(ne,n))}function ze(e){se.current===e&&(L(ne),L(se)),Ce.current===e&&(L(Ce),hi._currentValue=J)}var bt,he;function b(e){if(bt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bt=t&&t[1]||"",he=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+e+he}var re=!1;function ae(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(ie){var te=ie}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(ie){te=ie}e.call(pe.prototype)}}else{try{throw Error()}catch(ie){te=ie}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(ie){if(ie&&te&&typeof ie.stack=="string")return[ie.stack,te.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),y=l[0],N=l[1];if(y&&N){var F=y.split(`
`),K=N.split(`
`);for(r=a=0;a<F.length&&!F[a].includes("DetermineComponentFrameRoot");)a++;for(;r<K.length&&!K[r].includes("DetermineComponentFrameRoot");)r++;if(a===F.length||r===K.length)for(a=F.length-1,r=K.length-1;1<=a&&0<=r&&F[a]!==K[r];)r--;for(;1<=a&&0<=r;a--,r--)if(F[a]!==K[r]){if(a!==1||r!==1)do if(a--,r--,0>r||F[a]!==K[r]){var ue=`
`+F[a].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=a&&0<=r);break}}}finally{re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?b(n):""}function U(e,t){switch(e.tag){case 26:case 27:case 5:return b(e.type);case 16:return b("Lazy");case 13:return e.child!==t&&t!==null?b("Suspense Fallback"):b("Suspense");case 19:return b("SuspenseList");case 0:case 15:return ae(e.type,!1);case 11:return ae(e.type.render,!1);case 1:return ae(e.type,!0);case 31:return b("Activity");default:return""}}function M(e){try{var t="",n=null;do t+=U(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var X=Object.prototype.hasOwnProperty,ge=c.unstable_scheduleCallback,ye=c.unstable_cancelCallback,ee=c.unstable_shouldYield,be=c.unstable_requestPaint,Se=c.unstable_now,xe=c.unstable_getCurrentPriorityLevel,Ne=c.unstable_ImmediatePriority,Xe=c.unstable_UserBlockingPriority,Ue=c.unstable_NormalPriority,Nt=c.unstable_LowPriority,Ln=c.unstable_IdlePriority,Gt=c.log,fa=c.unstable_setDisableYieldValue,et=null,gt=null;function Yt(e){if(typeof Gt=="function"&&fa(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(et,e)}catch{}}var it=Math.clz32?Math.clz32:bl,Mi=Math.log,vl=Math.LN2;function bl(e){return e>>>=0,e===0?32:31-(Mi(e)/vl|0)|0}var La=256,pa=262144,dn=4194304;function qt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function zi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,l=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var N=a&134217727;return N!==0?(a=N&~l,a!==0?r=qt(a):(y&=N,y!==0?r=qt(y):n||(n=N&~e,n!==0&&(r=qt(n))))):(N=a&~l,N!==0?r=qt(N):y!==0?r=qt(y):n||(n=a&~e,n!==0&&(r=qt(n)))),r===0?0:t!==0&&t!==r&&(t&l)===0&&(l=r&-r,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:r}function _r(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yu(){var e=dn;return dn<<=1,(dn&62914560)===0&&(dn=4194304),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mm(e,t,n,a,r,l){var y=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var N=e.entanglements,F=e.expirationTimes,K=e.hiddenUpdates;for(n=y&~n;0<n;){var ue=31-it(n),pe=1<<ue;N[ue]=0,F[ue]=-1;var te=K[ue];if(te!==null)for(K[ue]=null,ue=0;ue<te.length;ue++){var ie=te[ue];ie!==null&&(ie.lane&=-536870913)}n&=~pe}a!==0&&vu(e,a,0),l!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=l&~(y&~t))}function vu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-it(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function xu(e,t){var n=t&-t;return n=(n&42)!==0?1:Sl(n),(n&(e.suspendedLanes|t))!==0?0:n}function Sl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function El(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Su(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:lh(e.type))}function Eu(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var Mn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Mn,It="__reactProps$"+Mn,Ma="__reactContainer$"+Mn,wl="__reactEvents$"+Mn,zm="__reactListeners$"+Mn,Um="__reactHandles$"+Mn,wu="__reactResources$"+Mn,Nr="__reactMarker$"+Mn;function Al(e){delete e[xt],delete e[It],delete e[wl],delete e[zm],delete e[Um]}function za(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ma]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gp(e);e!==null;){if(n=e[xt])return n;e=Gp(e)}return t}e=n,n=e.parentNode}return null}function Ua(e){if(e=e[xt]||e[Ma]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ir(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Fa(e){var t=e[wu];return t||(t=e[wu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yt(e){e[Nr]=!0}var Au=new Set,Tu={};function ha(e,t){Ba(e,t),Ba(e+"Capture",t)}function Ba(e,t){for(Tu[e]=t,e=0;e<t.length;e++)Au.add(t[e])}var Fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ru={},_u={};function Bm(e){return X.call(_u,e)?!0:X.call(Ru,e)?!1:Fm.test(e)?_u[e]=!0:(Ru[e]=!0,!1)}function Ui(e,t,n){if(Bm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Fi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(y){n=""+y,l.call(this,y)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(y){n=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tl(e){if(!e._valueTracker){var t=Cu(e)?"checked":"value";e._valueTracker=Pm(e,t,""+e[t])}}function Nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Cu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vm=/[\n"\\]/g;function Qt(e){return e.replace(Vm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rl(e,t,n,a,r,l,y,N){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?_l(e,y,Xt(t)):n!=null?_l(e,y,Xt(n)):a!=null&&e.removeAttribute("value"),r==null&&l!=null&&(e.defaultChecked=!!l),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+Xt(N):e.removeAttribute("name")}function Iu(e,t,n,a,r,l,y,N){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Tl(e);return}n=n!=null?""+Xt(n):"",t=t!=null?""+Xt(t):n,N||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=N?e.checked:!!a,e.defaultChecked=!!a,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Tl(e)}function _l(e,t,n){t==="number"&&Bi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Pa(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Du(e,t,n){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xt(n):""}function Ou(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(W(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Xt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Tl(e)}function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ju(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||$m.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ku(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&ju(e,r,a)}else for(var l in t)t.hasOwnProperty(l)&&ju(e,l,t[l])}function Cl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pi(e){return Gm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var Nl=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Ha=null;function Lu(e){var t=Ua(e);if(t&&(e=t.stateNode)){var n=e[It]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[It]||null;if(!r)throw Error(u(90));Rl(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Nu(a)}break e;case"textarea":Du(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Pa(e,!!n.multiple,t,!1)}}}var Dl=!1;function Mu(e,t,n){if(Dl)return e(t,n);Dl=!0;try{var a=e(t);return a}finally{if(Dl=!1,($a!==null||Ha!==null)&&(Cs(),$a&&(t=$a,e=Ha,Ha=$a=null,Lu(t),e)))for(t=0;t<e.length;t++)Lu(e[t])}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[It]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=!1;if(vn)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ol=!1}var zn=null,jl=null,Vi=null;function zu(){if(Vi)return Vi;var e,t=jl,n=t.length,a,r="value"in zn?zn.value:zn.textContent,l=r.length;for(e=0;e<n&&t[e]===r[e];e++);var y=n-e;for(a=1;a<=y&&t[n-a]===r[l-a];a++);return Vi=r.slice(e,1<a?1-a:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Uu(){return!1}function Dt(e){function t(n,a,r,l,y){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=l,this.target=y,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(n=e[N],this[N]=n?n(l):l[N]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Hi:Uu,this.isPropagationStopped=Uu,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=Dt(ma),jr=R({},ma,{view:0,detail:0}),Ym=Dt(jr),kl,Ll,kr,Yi=R({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(kl=e.screenX-kr.screenX,Ll=e.screenY-kr.screenY):Ll=kl=0,kr=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Fu=Dt(Yi),qm=R({},Yi,{dataTransfer:0}),Xm=Dt(qm),Qm=R({},jr,{relatedTarget:0}),Ml=Dt(Qm),Wm=R({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Dt(Wm),Km=R({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jm=Dt(Km),eg=R({},ma,{data:0}),Bu=Dt(eg),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ag[e])?!!t[e]:!1}function zl(){return rg}var ig=R({},jr,{key:function(e){if(e.key){var t=tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sg=Dt(ig),lg=R({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=Dt(lg),og=R({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),cg=Dt(og),ug=R({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),dg=Dt(ug),fg=R({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=Dt(fg),hg=R({},ma,{newState:0,oldState:0}),mg=Dt(hg),gg=[9,13,27,32],Ul=vn&&"CompositionEvent"in window,Lr=null;vn&&"documentMode"in document&&(Lr=document.documentMode);var yg=vn&&"TextEvent"in window&&!Lr,Vu=vn&&(!Ul||Lr&&8<Lr&&11>=Lr),$u=" ",Hu=!1;function Gu(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ga=!1;function vg(e,t){switch(e){case"compositionend":return Yu(t);case"keypress":return t.which!==32?null:(Hu=!0,$u);case"textInput":return e=t.data,e===$u&&Hu?null:e;default:return null}}function bg(e,t){if(Ga)return e==="compositionend"||!Ul&&Gu(e,t)?(e=zu(),Vi=jl=zn=null,Ga=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vu&&t.locale!=="ko"?null:t.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xg[e.type]:t==="textarea"}function Xu(e,t,n,a){$a?Ha?Ha.push(a):Ha=[a]:$a=a,t=Ls(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Mr=null,zr=null;function Sg(e){Dp(e,0)}function qi(e){var t=Ir(e);if(Nu(t))return e}function Qu(e,t){if(e==="change")return t}var Wu=!1;if(vn){var Fl;if(vn){var Bl="oninput"in document;if(!Bl){var Zu=document.createElement("div");Zu.setAttribute("oninput","return;"),Bl=typeof Zu.oninput=="function"}Fl=Bl}else Fl=!1;Wu=Fl&&(!document.documentMode||9<document.documentMode)}function Ku(){Mr&&(Mr.detachEvent("onpropertychange",Ju),zr=Mr=null)}function Ju(e){if(e.propertyName==="value"&&qi(zr)){var t=[];Xu(t,zr,e,Il(e)),Mu(Sg,t)}}function Eg(e,t,n){e==="focusin"?(Ku(),Mr=t,zr=n,Mr.attachEvent("onpropertychange",Ju)):e==="focusout"&&Ku()}function wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(zr)}function Ag(e,t){if(e==="click")return qi(t)}function Tg(e,t){if(e==="input"||e==="change")return qi(t)}function Rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Rg;function Ur(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!X.call(t,r)||!Ut(e[r],t[r]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _g=vn&&"documentMode"in document&&11>=document.documentMode,Ya=null,Vl=null,Fr=null,$l=!1;function rd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$l||Ya==null||Ya!==Bi(a)||(a=Ya,"selectionStart"in a&&Pl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fr&&Ur(Fr,a)||(Fr=a,a=Ls(Vl,"onSelect"),0<a.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ya)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qa={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},Hl={},id={};vn&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function ya(e){if(Hl[e])return Hl[e];if(!qa[e])return e;var t=qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return Hl[e]=t[n];return e}var sd=ya("animationend"),ld=ya("animationiteration"),od=ya("animationstart"),Cg=ya("transitionrun"),Ng=ya("transitionstart"),Ig=ya("transitioncancel"),cd=ya("transitionend"),ud=new Map,Gl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gl.push("scrollEnd");function sn(e,t){ud.set(e,t),ha(t,[e])}var Xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],Xa=0,Yl=0;function Qi(){for(var e=Xa,t=Yl=Xa=0;t<e;){var n=Wt[t];Wt[t++]=null;var a=Wt[t];Wt[t++]=null;var r=Wt[t];Wt[t++]=null;var l=Wt[t];if(Wt[t++]=null,a!==null&&r!==null){var y=a.pending;y===null?r.next=r:(r.next=y.next,y.next=r),a.pending=r}l!==0&&dd(n,r,l)}}function Wi(e,t,n,a){Wt[Xa++]=e,Wt[Xa++]=t,Wt[Xa++]=n,Wt[Xa++]=a,Yl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ql(e,t,n,a){return Wi(e,t,n,a),Zi(e)}function va(e,t){return Wi(e,null,null,t),Zi(e)}function dd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,l=e.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(r=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,r&&t!==null&&(r=31-it(n),e=l.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),l):null}function Zi(e){if(50<li)throw li=0,ac=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qa={};function Dg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,a){return new Dg(e,t,n,a)}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ki(e,t,n,a,r,l){var y=0;if(a=e,typeof e=="function")Xl(e)&&(y=1);else if(typeof e=="string")y=My(e,n,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case V:return e=Ft(31,n,t,r),e.elementType=V,e.lanes=l,e;case m:return ba(n.children,r,l,t);case S:y=8,r|=24;break;case w:return e=Ft(12,n,t,r|2),e.elementType=w,e.lanes=l,e;case j:return e=Ft(13,n,t,r),e.elementType=j,e.lanes=l,e;case H:return e=Ft(19,n,t,r),e.elementType=H,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:y=10;break e;case O:y=9;break e;case B:y=11;break e;case P:y=14;break e;case G:y=16,a=null;break e}y=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ft(y,n,t,r),t.elementType=e,t.type=a,t.lanes=l,t}function ba(e,t,n,a){return e=Ft(7,e,a,t),e.lanes=n,e}function Ql(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function pd(e){var t=Ft(18,null,null,0);return t.stateNode=e,t}function Wl(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hd=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=hd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:M(t)},hd.set(e,t),t)}return{value:e,source:t,stack:M(t)}}var Wa=[],Za=0,Ji=null,Br=0,Kt=[],Jt=0,Un=null,fn=1,pn="";function xn(e,t){Wa[Za++]=Br,Wa[Za++]=Ji,Ji=e,Br=t}function md(e,t,n){Kt[Jt++]=fn,Kt[Jt++]=pn,Kt[Jt++]=Un,Un=e;var a=fn;e=pn;var r=32-it(a)-1;a&=~(1<<r),n+=1;var l=32-it(t)+r;if(30<l){var y=r-r%5;l=(a&(1<<y)-1).toString(32),a>>=y,r-=y,fn=1<<32-it(t)+r|n<<r|a,pn=l+e}else fn=1<<l|n<<r|a,pn=e}function Zl(e){e.return!==null&&(xn(e,1),md(e,1,0))}function Kl(e){for(;e===Ji;)Ji=Wa[--Za],Wa[Za]=null,Br=Wa[--Za],Wa[Za]=null;for(;e===Un;)Un=Kt[--Jt],Kt[Jt]=null,pn=Kt[--Jt],Kt[Jt]=null,fn=Kt[--Jt],Kt[Jt]=null}function gd(e,t){Kt[Jt++]=fn,Kt[Jt++]=pn,Kt[Jt++]=Un,fn=t.id,pn=t.overflow,Un=e}var St=null,nt=null,He=!1,Fn=null,en=!1,Jl=Error(u(519));function Bn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pr(Zt(t,e)),Jl}function yd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[xt]=e,t[It]=a,n){case"dialog":Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":case"embed":Pe("load",t);break;case"video":case"audio":for(n=0;n<ci.length;n++)Pe(ci[n],t);break;case"source":Pe("error",t);break;case"img":case"image":case"link":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"input":Pe("invalid",t),Iu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Pe("invalid",t);break;case"textarea":Pe("invalid",t),Ou(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Lp(t.textContent,n)?(a.popover!=null&&(Pe("beforetoggle",t),Pe("toggle",t)),a.onScroll!=null&&Pe("scroll",t),a.onScrollEnd!=null&&Pe("scrollend",t),a.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||Bn(e,!0)}function vd(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:St=St.return}}function Ka(e){if(e!==St)return!1;if(!He)return vd(e),He=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vc(e.type,e.memoizedProps)),n=!n),n&&nt&&Bn(e),vd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Hp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Hp(e)}else t===27?(t=nt,ea(e.type)?(e=wc,wc=null,nt=e):nt=t):nt=St?nn(e.stateNode.nextSibling):null;return!0}function xa(){nt=St=null,He=!1}function eo(){var e=Fn;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Fn=null),e}function Pr(e){Fn===null?Fn=[e]:Fn.push(e)}var to=C(null),Sa=null,Sn=null;function Pn(e,t,n){le(to,t._currentValue),t._currentValue=n}function En(e){e._currentValue=to.current,L(to)}function no(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ao(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var l=r.dependencies;if(l!==null){var y=r.child;l=l.firstContext;e:for(;l!==null;){var N=l;l=r;for(var F=0;F<t.length;F++)if(N.context===t[F]){l.lanes|=n,N=l.alternate,N!==null&&(N.lanes|=n),no(l.return,n,e),a||(y=null);break e}l=N.next}}else if(r.tag===18){if(y=r.return,y===null)throw Error(u(341));y.lanes|=n,l=y.alternate,l!==null&&(l.lanes|=n),no(y,n,e),y=null}else y=r.child;if(y!==null)y.return=r;else for(y=r;y!==null;){if(y===e){y=null;break}if(r=y.sibling,r!==null){r.return=y.return,y=r;break}y=y.return}r=y}}function Ja(e,t,n,a){e=null;for(var r=t,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var y=r.alternate;if(y===null)throw Error(u(387));if(y=y.memoizedProps,y!==null){var N=r.type;Ut(r.pendingProps.value,y.value)||(e!==null?e.push(N):e=[N])}}else if(r===Ce.current){if(y=r.alternate,y===null)throw Error(u(387));y.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}r=r.return}e!==null&&ao(t,e,n,a),t.flags|=262144}function es(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ea(e){Sa=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Et(e){return bd(Sa,e)}function ts(e,t){return Sa===null&&Ea(e),bd(e,t)}function bd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(u(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Og=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},jg=c.unstable_scheduleCallback,kg=c.unstable_NormalPriority,ut={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ro(){return{controller:new Og,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&jg(kg,function(){e.controller.abort()})}var $r=null,io=0,er=0,tr=null;function Lg(e,t){if($r===null){var n=$r=[];io=0,er=cc(),tr={status:"pending",value:void 0,then:function(a){n.push(a)}}}return io++,t.then(xd,xd),t}function xd(){if(--io===0&&$r!==null){tr!==null&&(tr.status="fulfilled");var e=$r;$r=null,er=0,tr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Mg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Sd=I.S;I.S=function(e,t){ip=Se(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lg(e,t),Sd!==null&&Sd(e,t)};var wa=C(null);function so(){var e=wa.current;return e!==null?e:tt.pooledCache}function ns(e,t){t===null?le(wa,wa.current):le(wa,t.pool)}function Ed(){var e=so();return e===null?null:{parent:ut._currentValue,pool:e}}var nr=Error(u(460)),lo=Error(u(474)),as=Error(u(542)),rs={then:function(){}};function wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ad(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e;default:if(typeof t.status=="string")t.then(yn,yn);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e}throw Ta=t,nr}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ta=n,nr):n}}var Ta=null;function Td(){if(Ta===null)throw Error(u(459));var e=Ta;return Ta=null,e}function Rd(e){if(e===nr||e===as)throw Error(u(483))}var ar=null,Hr=0;function is(e){var t=Hr;return Hr+=1,ar===null&&(ar=[]),Ad(ar,e,t)}function Gr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ss(e,t){throw t.$$typeof===_?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _d(e){function t(Q,$){if(e){var Z=Q.deletions;Z===null?(Q.deletions=[$],Q.flags|=16):Z.push($)}}function n(Q,$){if(!e)return null;for(;$!==null;)t(Q,$),$=$.sibling;return null}function a(Q){for(var $=new Map;Q!==null;)Q.key!==null?$.set(Q.key,Q):$.set(Q.index,Q),Q=Q.sibling;return $}function r(Q,$){return Q=bn(Q,$),Q.index=0,Q.sibling=null,Q}function l(Q,$,Z){return Q.index=Z,e?(Z=Q.alternate,Z!==null?(Z=Z.index,Z<$?(Q.flags|=67108866,$):Z):(Q.flags|=67108866,$)):(Q.flags|=1048576,$)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function N(Q,$,Z,de){return $===null||$.tag!==6?($=Ql(Z,Q.mode,de),$.return=Q,$):($=r($,Z),$.return=Q,$)}function F(Q,$,Z,de){var Ie=Z.type;return Ie===m?ue(Q,$,Z.props.children,de,Z.key):$!==null&&($.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===G&&Aa(Ie)===$.type)?($=r($,Z.props),Gr($,Z),$.return=Q,$):($=Ki(Z.type,Z.key,Z.props,null,Q.mode,de),Gr($,Z),$.return=Q,$)}function K(Q,$,Z,de){return $===null||$.tag!==4||$.stateNode.containerInfo!==Z.containerInfo||$.stateNode.implementation!==Z.implementation?($=Wl(Z,Q.mode,de),$.return=Q,$):($=r($,Z.children||[]),$.return=Q,$)}function ue(Q,$,Z,de,Ie){return $===null||$.tag!==7?($=ba(Z,Q.mode,de,Ie),$.return=Q,$):($=r($,Z),$.return=Q,$)}function pe(Q,$,Z){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Ql(""+$,Q.mode,Z),$.return=Q,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return Z=Ki($.type,$.key,$.props,null,Q.mode,Z),Gr(Z,$),Z.return=Q,Z;case A:return $=Wl($,Q.mode,Z),$.return=Q,$;case G:return $=Aa($),pe(Q,$,Z)}if(W($)||D($))return $=ba($,Q.mode,Z,null),$.return=Q,$;if(typeof $.then=="function")return pe(Q,is($),Z);if($.$$typeof===z)return pe(Q,ts(Q,$),Z);ss(Q,$)}return null}function te(Q,$,Z,de){var Ie=$!==null?$.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ie!==null?null:N(Q,$,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:return Z.key===Ie?F(Q,$,Z,de):null;case A:return Z.key===Ie?K(Q,$,Z,de):null;case G:return Z=Aa(Z),te(Q,$,Z,de)}if(W(Z)||D(Z))return Ie!==null?null:ue(Q,$,Z,de,null);if(typeof Z.then=="function")return te(Q,$,is(Z),de);if(Z.$$typeof===z)return te(Q,$,ts(Q,Z),de);ss(Q,Z)}return null}function ie(Q,$,Z,de,Ie){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return Q=Q.get(Z)||null,N($,Q,""+de,Ie);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case v:return Q=Q.get(de.key===null?Z:de.key)||null,F($,Q,de,Ie);case A:return Q=Q.get(de.key===null?Z:de.key)||null,K($,Q,de,Ie);case G:return de=Aa(de),ie(Q,$,Z,de,Ie)}if(W(de)||D(de))return Q=Q.get(Z)||null,ue($,Q,de,Ie,null);if(typeof de.then=="function")return ie(Q,$,Z,is(de),Ie);if(de.$$typeof===z)return ie(Q,$,Z,ts($,de),Ie);ss($,de)}return null}function Ae(Q,$,Z,de){for(var Ie=null,Ge=null,Re=$,Me=$=0,$e=null;Re!==null&&Me<Z.length;Me++){Re.index>Me?($e=Re,Re=null):$e=Re.sibling;var Ye=te(Q,Re,Z[Me],de);if(Ye===null){Re===null&&(Re=$e);break}e&&Re&&Ye.alternate===null&&t(Q,Re),$=l(Ye,$,Me),Ge===null?Ie=Ye:Ge.sibling=Ye,Ge=Ye,Re=$e}if(Me===Z.length)return n(Q,Re),He&&xn(Q,Me),Ie;if(Re===null){for(;Me<Z.length;Me++)Re=pe(Q,Z[Me],de),Re!==null&&($=l(Re,$,Me),Ge===null?Ie=Re:Ge.sibling=Re,Ge=Re);return He&&xn(Q,Me),Ie}for(Re=a(Re);Me<Z.length;Me++)$e=ie(Re,Q,Me,Z[Me],de),$e!==null&&(e&&$e.alternate!==null&&Re.delete($e.key===null?Me:$e.key),$=l($e,$,Me),Ge===null?Ie=$e:Ge.sibling=$e,Ge=$e);return e&&Re.forEach(function(ia){return t(Q,ia)}),He&&xn(Q,Me),Ie}function De(Q,$,Z,de){if(Z==null)throw Error(u(151));for(var Ie=null,Ge=null,Re=$,Me=$=0,$e=null,Ye=Z.next();Re!==null&&!Ye.done;Me++,Ye=Z.next()){Re.index>Me?($e=Re,Re=null):$e=Re.sibling;var ia=te(Q,Re,Ye.value,de);if(ia===null){Re===null&&(Re=$e);break}e&&Re&&ia.alternate===null&&t(Q,Re),$=l(ia,$,Me),Ge===null?Ie=ia:Ge.sibling=ia,Ge=ia,Re=$e}if(Ye.done)return n(Q,Re),He&&xn(Q,Me),Ie;if(Re===null){for(;!Ye.done;Me++,Ye=Z.next())Ye=pe(Q,Ye.value,de),Ye!==null&&($=l(Ye,$,Me),Ge===null?Ie=Ye:Ge.sibling=Ye,Ge=Ye);return He&&xn(Q,Me),Ie}for(Re=a(Re);!Ye.done;Me++,Ye=Z.next())Ye=ie(Re,Q,Me,Ye.value,de),Ye!==null&&(e&&Ye.alternate!==null&&Re.delete(Ye.key===null?Me:Ye.key),$=l(Ye,$,Me),Ge===null?Ie=Ye:Ge.sibling=Ye,Ge=Ye);return e&&Re.forEach(function(qy){return t(Q,qy)}),He&&xn(Q,Me),Ie}function Je(Q,$,Z,de){if(typeof Z=="object"&&Z!==null&&Z.type===m&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:e:{for(var Ie=Z.key;$!==null;){if($.key===Ie){if(Ie=Z.type,Ie===m){if($.tag===7){n(Q,$.sibling),de=r($,Z.props.children),de.return=Q,Q=de;break e}}else if($.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===G&&Aa(Ie)===$.type){n(Q,$.sibling),de=r($,Z.props),Gr(de,Z),de.return=Q,Q=de;break e}n(Q,$);break}else t(Q,$);$=$.sibling}Z.type===m?(de=ba(Z.props.children,Q.mode,de,Z.key),de.return=Q,Q=de):(de=Ki(Z.type,Z.key,Z.props,null,Q.mode,de),Gr(de,Z),de.return=Q,Q=de)}return y(Q);case A:e:{for(Ie=Z.key;$!==null;){if($.key===Ie)if($.tag===4&&$.stateNode.containerInfo===Z.containerInfo&&$.stateNode.implementation===Z.implementation){n(Q,$.sibling),de=r($,Z.children||[]),de.return=Q,Q=de;break e}else{n(Q,$);break}else t(Q,$);$=$.sibling}de=Wl(Z,Q.mode,de),de.return=Q,Q=de}return y(Q);case G:return Z=Aa(Z),Je(Q,$,Z,de)}if(W(Z))return Ae(Q,$,Z,de);if(D(Z)){if(Ie=D(Z),typeof Ie!="function")throw Error(u(150));return Z=Ie.call(Z),De(Q,$,Z,de)}if(typeof Z.then=="function")return Je(Q,$,is(Z),de);if(Z.$$typeof===z)return Je(Q,$,ts(Q,Z),de);ss(Q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,$!==null&&$.tag===6?(n(Q,$.sibling),de=r($,Z),de.return=Q,Q=de):(n(Q,$),de=Ql(Z,Q.mode,de),de.return=Q,Q=de),y(Q)):n(Q,$)}return function(Q,$,Z,de){try{Hr=0;var Ie=Je(Q,$,Z,de);return ar=null,Ie}catch(Re){if(Re===nr||Re===as)throw Re;var Ge=Ft(29,Re,null,Q.mode);return Ge.lanes=de,Ge.return=Q,Ge}finally{}}}var Ra=_d(!0),Cd=_d(!1),Vn=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(qe&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Zi(e),dd(e,null,n),t}return Wi(e,a,t,n),Zi(e)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bu(e,n)}}function uo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var y={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?r=l=y:l=l.next=y,n=n.next}while(n!==null);l===null?r=l=t:l=l.next=t}else r=l=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fo=!1;function qr(){if(fo){var e=tr;if(e!==null)throw e}}function Xr(e,t,n,a){fo=!1;var r=e.updateQueue;Vn=!1;var l=r.firstBaseUpdate,y=r.lastBaseUpdate,N=r.shared.pending;if(N!==null){r.shared.pending=null;var F=N,K=F.next;F.next=null,y===null?l=K:y.next=K,y=F;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,N=ue.lastBaseUpdate,N!==y&&(N===null?ue.firstBaseUpdate=K:N.next=K,ue.lastBaseUpdate=F))}if(l!==null){var pe=r.baseState;y=0,ue=K=F=null,N=l;do{var te=N.lane&-536870913,ie=te!==N.lane;if(ie?(Ve&te)===te:(a&te)===te){te!==0&&te===er&&(fo=!0),ue!==null&&(ue=ue.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ae=e,De=N;te=t;var Je=n;switch(De.tag){case 1:if(Ae=De.payload,typeof Ae=="function"){pe=Ae.call(Je,pe,te);break e}pe=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=De.payload,te=typeof Ae=="function"?Ae.call(Je,pe,te):Ae,te==null)break e;pe=R({},pe,te);break e;case 2:Vn=!0}}te=N.callback,te!==null&&(e.flags|=64,ie&&(e.flags|=8192),ie=r.callbacks,ie===null?r.callbacks=[te]:ie.push(te))}else ie={lane:te,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ue===null?(K=ue=ie,F=pe):ue=ue.next=ie,y|=te;if(N=N.next,N===null){if(N=r.shared.pending,N===null)break;ie=N,N=ie.next,ie.next=null,r.lastBaseUpdate=ie,r.shared.pending=null}}while(!0);ue===null&&(F=pe),r.baseState=F,r.firstBaseUpdate=K,r.lastBaseUpdate=ue,l===null&&(r.shared.lanes=0),Qn|=y,e.lanes=y,e.memoizedState=pe}}function Nd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Id(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Nd(n[e],t)}var rr=C(null),ls=C(0);function Dd(e,t){e=Dn,le(ls,e),le(rr,t),Dn=e|t.baseLanes}function po(){le(ls,Dn),le(rr,rr.current)}function ho(){Dn=ls.current,L(rr),L(ls)}var Bt=C(null),tn=null;function Gn(e){var t=e.alternate;le(ot,ot.current&1),le(Bt,e),tn===null&&(t===null||rr.current!==null||t.memoizedState!==null)&&(tn=e)}function mo(e){le(ot,ot.current),le(Bt,e),tn===null&&(tn=e)}function Od(e){e.tag===22?(le(ot,ot.current),le(Bt,e),tn===null&&(tn=e)):Yn()}function Yn(){le(ot,ot.current),le(Bt,Bt.current)}function Pt(e){L(Bt),tn===e&&(tn=null),L(ot)}var ot=C(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Sc(n)||Ec(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wn=0,Le=null,Ze=null,dt=null,cs=!1,ir=!1,_a=!1,us=0,Qr=0,sr=null,zg=0;function st(){throw Error(u(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function yo(e,t,n,a,r,l){return wn=l,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?gf:Oo,_a=!1,l=n(a,r),_a=!1,ir&&(l=kd(t,n,a,r)),jd(e),l}function jd(e){I.H=Kr;var t=Ze!==null&&Ze.next!==null;if(wn=0,dt=Ze=Le=null,cs=!1,Qr=0,sr=null,t)throw Error(u(300));e===null||ft||(e=e.dependencies,e!==null&&es(e)&&(ft=!0))}function kd(e,t,n,a){Le=e;var r=0;do{if(ir&&(sr=null),Qr=0,ir=!1,25<=r)throw Error(u(301));if(r+=1,dt=Ze=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}I.H=yf,l=t(n,a)}while(ir);return l}function Ug(){var e=I.H,t=e.useState()[0];return t=typeof t.then=="function"?Wr(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Le.flags|=1024),t}function vo(){var e=us!==0;return us=0,e}function bo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(cs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cs=!1}wn=0,dt=Ze=Le=null,ir=!1,Qr=us=0,sr=null}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Le.memoizedState=dt=e:dt=dt.next=e,dt}function ct(){if(Ze===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=dt===null?Le.memoizedState:dt.next;if(t!==null)dt=t,Ze=e;else{if(e===null)throw Le.alternate===null?Error(u(467)):Error(u(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},dt===null?Le.memoizedState=dt=e:dt=dt.next=e}return dt}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wr(e){var t=Qr;return Qr+=1,sr===null&&(sr=[]),e=Ad(sr,e,t),t=Le,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?gf:Oo),e}function fs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wr(e);if(e.$$typeof===z)return Et(e)}throw Error(u(438,String(e)))}function So(e){var t=null,n=Le.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Le.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ds(),Le.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=oe;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=ct();return Eo(t,Ze,e)}function Eo(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var r=e.baseQueue,l=a.pending;if(l!==null){if(r!==null){var y=r.next;r.next=l.next,l.next=y}t.baseQueue=r=l,a.pending=null}if(l=e.baseState,r===null)e.memoizedState=l;else{t=r.next;var N=y=null,F=null,K=t,ue=!1;do{var pe=K.lane&-536870913;if(pe!==K.lane?(Ve&pe)===pe:(wn&pe)===pe){var te=K.revertLane;if(te===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),pe===er&&(ue=!0);else if((wn&te)===te){K=K.next,te===er&&(ue=!0);continue}else pe={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(N=F=pe,y=l):F=F.next=pe,Le.lanes|=te,Qn|=te;pe=K.action,_a&&n(l,pe),l=K.hasEagerState?K.eagerState:n(l,pe)}else te={lane:pe,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},F===null?(N=F=te,y=l):F=F.next=te,Le.lanes|=pe,Qn|=pe;K=K.next}while(K!==null&&K!==t);if(F===null?y=l:F.next=N,!Ut(l,e.memoizedState)&&(ft=!0,ue&&(n=tr,n!==null)))throw n;e.memoizedState=l,e.baseState=y,e.baseQueue=F,a.lastRenderedState=l}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function wo(e){var t=ct(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,l=t.memoizedState;if(r!==null){n.pending=null;var y=r=r.next;do l=e(l,y.action),y=y.next;while(y!==r);Ut(l,t.memoizedState)||(ft=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function Ld(e,t,n){var a=Le,r=ct(),l=He;if(l){if(n===void 0)throw Error(u(407));n=n()}else n=t();var y=!Ut((Ze||r).memoizedState,n);if(y&&(r.memoizedState=n,ft=!0),r=r.queue,Ro(Ud.bind(null,a,r,e),[e]),r.getSnapshot!==t||y||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,lr(9,{destroy:void 0},zd.bind(null,a,r,n,t),null),tt===null)throw Error(u(349));l||(wn&127)!==0||Md(a,t,n)}return n}function Md(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t=ds(),Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,a){t.value=n,t.getSnapshot=a,Fd(t)&&Bd(e)}function Ud(e,t,n){return n(function(){Fd(t)&&Bd(e)})}function Fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Bd(e){var t=va(e,2);t!==null&&Mt(t,e,2)}function Ao(e){var t=Ct();if(typeof e=="function"){var n=e;if(e=n(),_a){Yt(!0);try{n()}finally{Yt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function Pd(e,t,n,a){return e.baseState=n,Eo(e,Ze,typeof a=="function"?a:An)}function Fg(e,t,n,a,r){if(gs(e))throw Error(u(485));if(e=t.action,e!==null){var l={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){l.listeners.push(y)}};I.T!==null?n(!0):l.isTransition=!1,a(l),n=t.pending,n===null?(l.next=t.pending=l,Vd(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Vd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var l=I.T,y={};I.T=y;try{var N=n(r,a),F=I.S;F!==null&&F(y,N),$d(e,t,N)}catch(K){To(e,t,K)}finally{l!==null&&y.types!==null&&(l.types=y.types),I.T=l}}else try{l=n(r,a),$d(e,t,l)}catch(K){To(e,t,K)}}function $d(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Hd(e,t,a)},function(a){return To(e,t,a)}):Hd(e,t,n)}function Hd(e,t,n){t.status="fulfilled",t.value=n,Gd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vd(e,n)))}function To(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Gd(t),t=t.next;while(t!==a)}e.action=null}function Gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yd(e,t){return t}function qd(e,t){if(He){var n=tt.formState;if(n!==null){e:{var a=Le;if(He){if(nt){t:{for(var r=nt,l=en;r.nodeType!==8;){if(!l){r=null;break t}if(r=nn(r.nextSibling),r===null){r=null;break t}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){nt=nn(r.nextSibling),a=r.data==="F!";break e}}Bn(a)}a=!1}a&&(t=n[0])}}return n=Ct(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:t},n.queue=a,n=pf.bind(null,Le,a),a.dispatch=n,a=Ao(!1),l=Do.bind(null,Le,!1,a.queue),a=Ct(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Fg.bind(null,Le,r,l,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Xd(e){var t=ct();return Qd(t,Ze,e)}function Qd(e,t,n){if(t=Eo(e,t,Yd)[0],e=ps(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Wr(t)}catch(y){throw y===nr?as:y}else a=t;t=ct();var r=t.queue,l=r.dispatch;return n!==t.memoizedState&&(Le.flags|=2048,lr(9,{destroy:void 0},Bg.bind(null,r,n),null)),[a,l,e]}function Bg(e,t){e.action=t}function Wd(e){var t=ct(),n=Ze;if(n!==null)return Qd(t,n,e);ct(),t=t.memoizedState,n=ct();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function lr(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Le.updateQueue,t===null&&(t=ds(),Le.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Zd(){return ct().memoizedState}function hs(e,t,n,a){var r=Ct();Le.flags|=e,r.memoizedState=lr(1|t,{destroy:void 0},n,a===void 0?null:a)}function ms(e,t,n,a){var r=ct();a=a===void 0?null:a;var l=r.memoizedState.inst;Ze!==null&&a!==null&&go(a,Ze.memoizedState.deps)?r.memoizedState=lr(t,l,n,a):(Le.flags|=e,r.memoizedState=lr(1|t,l,n,a))}function Kd(e,t){hs(8390656,8,e,t)}function Ro(e,t){ms(2048,8,e,t)}function Pg(e){Le.flags|=4;var t=Le.updateQueue;if(t===null)t=ds(),Le.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Jd(e){var t=ct().memoizedState;return Pg({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function ef(e,t){return ms(4,2,e,t)}function tf(e,t){return ms(4,4,e,t)}function nf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){n=n!=null?n.concat([e]):null,ms(4,4,nf.bind(null,t,e),n)}function _o(){}function rf(e,t){var n=ct();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&go(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function sf(e,t){var n=ct();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&go(t,a[1]))return a[0];if(a=e(),_a){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a}function Co(e,t,n){return n===void 0||(wn&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=lp(),Le.lanes|=e,Qn|=e,n)}function lf(e,t,n,a){return Ut(n,t)?n:rr.current!==null?(e=Co(e,n,a),Ut(e,t)||(ft=!0),e):(wn&42)===0||(wn&1073741824)!==0&&(Ve&261930)===0?(ft=!0,e.memoizedState=n):(e=lp(),Le.lanes|=e,Qn|=e,t)}function of(e,t,n,a,r){var l=k.p;k.p=l!==0&&8>l?l:8;var y=I.T,N={};I.T=N,Do(e,!1,t,n);try{var F=r(),K=I.S;if(K!==null&&K(N,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ue=Mg(F,a);Zr(e,t,ue,Ht(e))}else Zr(e,t,a,Ht(e))}catch(pe){Zr(e,t,{then:function(){},status:"rejected",reason:pe},Ht())}finally{k.p=l,y!==null&&N.types!==null&&(y.types=N.types),I.T=y}}function Vg(){}function No(e,t,n,a){if(e.tag!==5)throw Error(u(476));var r=cf(e).queue;of(e,r,t,J,n===null?Vg:function(){return uf(e),n(a)})}function cf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:J},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uf(e){var t=cf(e);t.next===null&&(t=e.alternate.memoizedState),Zr(e,t.next.queue,{},Ht())}function Io(){return Et(hi)}function df(){return ct().memoizedState}function ff(){return ct().memoizedState}function $g(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=$n(n);var a=Hn(t,e,n);a!==null&&(Mt(a,t,n),Yr(a,t,n)),t={cache:ro()},e.payload=t;return}t=t.return}}function Hg(e,t,n){var a=Ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gs(e)?hf(t,n):(n=ql(e,t,n,a),n!==null&&(Mt(n,e,a),mf(n,t,a)))}function pf(e,t,n){var a=Ht();Zr(e,t,n,a)}function Zr(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gs(e))hf(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var y=t.lastRenderedState,N=l(y,n);if(r.hasEagerState=!0,r.eagerState=N,Ut(N,y))return Wi(e,t,r,0),tt===null&&Qi(),!1}catch{}finally{}if(n=ql(e,t,r,a),n!==null)return Mt(n,e,a),mf(n,t,a),!0}return!1}function Do(e,t,n,a){if(a={lane:2,revertLane:cc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gs(e)){if(t)throw Error(u(479))}else t=ql(e,n,a,2),t!==null&&Mt(t,e,2)}function gs(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function hf(e,t){ir=cs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bu(e,n)}}var Kr={readContext:Et,use:fs,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Kr.useEffectEvent=st;var gf={readContext:Et,use:fs,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Kd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hs(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){hs(4,2,e,t)},useMemo:function(e,t){var n=Ct();t=t===void 0?null:t;var a=e();if(_a){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ct();if(n!==void 0){var r=n(t);if(_a){Yt(!0);try{n(t)}finally{Yt(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Hg.bind(null,Le,e),[a.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Ao(e);var t=e.queue,n=pf.bind(null,Le,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_o,useDeferredValue:function(e,t){var n=Ct();return Co(n,e,t)},useTransition:function(){var e=Ao(!1);return e=of.bind(null,Le,e.queue,!0,!1),Ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Le,r=Ct();if(He){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),tt===null)throw Error(u(349));(Ve&127)!==0||Md(a,t,n)}r.memoizedState=n;var l={value:n,getSnapshot:t};return r.queue=l,Kd(Ud.bind(null,a,l,e),[e]),a.flags|=2048,lr(9,{destroy:void 0},zd.bind(null,a,l,n,t),null),n},useId:function(){var e=Ct(),t=tt.identifierPrefix;if(He){var n=pn,a=fn;n=(a&~(1<<32-it(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Io,useFormState:qd,useActionState:qd,useOptimistic:function(e){var t=Ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Do.bind(null,Le,!0,n),n.dispatch=t,[e,t]},useMemoCache:So,useCacheRefresh:function(){return Ct().memoizedState=$g.bind(null,Le)},useEffectEvent:function(e){var t=Ct(),n={impl:e};return t.memoizedState=n,function(){if((qe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Oo={readContext:Et,use:fs,useCallback:rf,useContext:Et,useEffect:Ro,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:ps,useRef:Zd,useState:function(){return ps(An)},useDebugValue:_o,useDeferredValue:function(e,t){var n=ct();return lf(n,Ze.memoizedState,e,t)},useTransition:function(){var e=ps(An)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Wr(e),t]},useSyncExternalStore:Ld,useId:df,useHostTransitionStatus:Io,useFormState:Xd,useActionState:Xd,useOptimistic:function(e,t){var n=ct();return Pd(n,Ze,e,t)},useMemoCache:So,useCacheRefresh:ff};Oo.useEffectEvent=Jd;var yf={readContext:Et,use:fs,useCallback:rf,useContext:Et,useEffect:Ro,useImperativeHandle:af,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:wo,useRef:Zd,useState:function(){return wo(An)},useDebugValue:_o,useDeferredValue:function(e,t){var n=ct();return Ze===null?Co(n,e,t):lf(n,Ze.memoizedState,e,t)},useTransition:function(){var e=wo(An)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Wr(e),t]},useSyncExternalStore:Ld,useId:df,useHostTransitionStatus:Io,useFormState:Wd,useActionState:Wd,useOptimistic:function(e,t){var n=ct();return Ze!==null?Pd(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:So,useCacheRefresh:ff};yf.useEffectEvent=Jd;function jo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=$n(a);r.payload=t,n!=null&&(r.callback=n),t=Hn(e,r,a),t!==null&&(Mt(t,e,a),Yr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=$n(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Hn(e,r,a),t!==null&&(Mt(t,e,a),Yr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=$n(n);a.tag=2,t!=null&&(a.callback=t),t=Hn(e,a,n),t!==null&&(Mt(t,e,n),Yr(t,e,n))}};function vf(e,t,n,a,r,l,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,y):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,a)||!Ur(r,l):!0}function bf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Ca(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function xf(e){Xi(e)}function Sf(e){console.error(e)}function Ef(e){Xi(e)}function ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function wf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Lo(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){ys(e,t)},n}function Af(e){return e=$n(e),e.tag=3,e}function Tf(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var l=a.value;e.payload=function(){return r(l)},e.callback=function(){wf(t,n,a)}}var y=n.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){wf(t,n,a),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var N=a.stack;this.componentDidCatch(a.value,{componentStack:N!==null?N:""})})}function Gg(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,r,!0),n=Bt.current,n!==null){switch(n.tag){case 31:case 13:return tn===null?Ns():n.alternate===null&&lt===0&&(lt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===rs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),sc(e,a,r)),!1;case 22:return n.flags|=65536,a===rs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),sc(e,a,r)),!1}throw Error(u(435,n.tag))}return sc(e,a,r),Ns(),!1}if(He)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Jl&&(e=Error(u(422),{cause:a}),Pr(Zt(e,n)))):(a!==Jl&&(t=Error(u(423),{cause:a}),Pr(Zt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Zt(a,n),r=Lo(e.stateNode,a,r),uo(e,r),lt!==4&&(lt=2)),!1;var l=Error(u(520),{cause:a});if(l=Zt(l,n),si===null?si=[l]:si.push(l),lt!==4&&(lt=2),t===null)return!0;a=Zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Lo(n.stateNode,a,e),uo(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Wn===null||!Wn.has(l))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Af(r),Tf(r,e,n,a),uo(n,r),!1}n=n.return}while(n!==null);return!1}var Mo=Error(u(461)),ft=!1;function wt(e,t,n,a){t.child=e===null?Cd(t,null,n,a):Ra(t,e.child,n,a)}function Rf(e,t,n,a,r){n=n.render;var l=t.ref;if("ref"in a){var y={};for(var N in a)N!=="ref"&&(y[N]=a[N])}else y=a;return Ea(t),a=yo(e,t,n,y,l,r),N=vo(),e!==null&&!ft?(bo(e,t,r),Tn(e,t,r)):(He&&N&&Zl(t),t.flags|=1,wt(e,t,a,r),t.child)}function _f(e,t,n,a,r){if(e===null){var l=n.type;return typeof l=="function"&&!Xl(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Cf(e,t,l,a,r)):(e=Ki(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Ho(e,r)){var y=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(y,a)&&e.ref===t.ref)return Tn(e,t,r)}return t.flags|=1,e=bn(l,a),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,n,a,r){if(e!==null){var l=e.memoizedProps;if(Ur(l,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=l,Ho(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Tn(e,t,r)}return zo(e,t,n,a,r)}function Nf(e,t,n,a){var r=a.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~l}else a=0,t.child=null;return If(e,t,l,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ns(t,l!==null?l.cachePool:null),l!==null?Dd(t,l):po(),Od(t);else return a=t.lanes=536870912,If(e,t,l!==null?l.baseLanes|n:n,n,a)}else l!==null?(ns(t,l.cachePool),Dd(t,l),Yn(),t.memoizedState=null):(e!==null&&ns(t,null),po(),Yn());return wt(e,t,r,n),t.child}function Jr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function If(e,t,n,a,r){var l=so();return l=l===null?null:{parent:ut._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&ns(t,null),po(),Od(t),e!==null&&Ja(e,t,a,!0),t.childLanes=r,null}function vs(e,t){return t=xs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Df(e,t,n){return Ra(t,e.child,null,n),e=vs(t,t.pendingProps),e.flags|=2,Pt(t),t.memoizedState=null,e}function Yg(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(a.mode==="hidden")return e=vs(t,a),t.lanes=536870912,Jr(null,e);if(mo(t),(e=nt)?(e=$p(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Un!==null?{id:fn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=pd(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw Bn(t);return t.lanes=536870912,null}return vs(t,a)}var l=e.memoizedState;if(l!==null){var y=l.dehydrated;if(mo(t),r)if(t.flags&256)t.flags&=-257,t=Df(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(ft||Ja(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(a=tt,a!==null&&(y=xu(a,n),y!==0&&y!==l.retryLane))throw l.retryLane=y,va(e,y),Mt(a,e,y),Mo;Ns(),t=Df(e,t,n)}else e=l.treeContext,nt=nn(y.nextSibling),St=t,He=!0,Fn=null,en=!1,e!==null&&gd(t,e),t=vs(t,a),t.flags|=4096;return t}return e=bn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function bs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zo(e,t,n,a,r){return Ea(t),n=yo(e,t,n,a,void 0,r),a=vo(),e!==null&&!ft?(bo(e,t,r),Tn(e,t,r)):(He&&a&&Zl(t),t.flags|=1,wt(e,t,n,r),t.child)}function Of(e,t,n,a,r,l){return Ea(t),t.updateQueue=null,n=kd(t,a,n,r),jd(e),a=vo(),e!==null&&!ft?(bo(e,t,l),Tn(e,t,l)):(He&&a&&Zl(t),t.flags|=1,wt(e,t,n,l),t.child)}function jf(e,t,n,a,r){if(Ea(t),t.stateNode===null){var l=Qa,y=n.contextType;typeof y=="object"&&y!==null&&(l=Et(y)),l=new n(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ko,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},oo(t),y=n.contextType,l.context=typeof y=="object"&&y!==null?Et(y):Qa,l.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(jo(t,n,y,a),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(y=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),y!==l.state&&ko.enqueueReplaceState(l,l.state,null),Xr(t,a,l,r),qr(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var N=t.memoizedProps,F=Ca(n,N);l.props=F;var K=l.context,ue=n.contextType;y=Qa,typeof ue=="object"&&ue!==null&&(y=Et(ue));var pe=n.getDerivedStateFromProps;ue=typeof pe=="function"||typeof l.getSnapshotBeforeUpdate=="function",N=t.pendingProps!==N,ue||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(N||K!==y)&&bf(t,l,a,y),Vn=!1;var te=t.memoizedState;l.state=te,Xr(t,a,l,r),qr(),K=t.memoizedState,N||te!==K||Vn?(typeof pe=="function"&&(jo(t,n,pe,a),K=t.memoizedState),(F=Vn||vf(t,n,F,a,te,K,y))?(ue||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=K),l.props=a,l.state=K,l.context=y,a=F):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,co(e,t),y=t.memoizedProps,ue=Ca(n,y),l.props=ue,pe=t.pendingProps,te=l.context,K=n.contextType,F=Qa,typeof K=="object"&&K!==null&&(F=Et(K)),N=n.getDerivedStateFromProps,(K=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(y!==pe||te!==F)&&bf(t,l,a,F),Vn=!1,te=t.memoizedState,l.state=te,Xr(t,a,l,r),qr();var ie=t.memoizedState;y!==pe||te!==ie||Vn||e!==null&&e.dependencies!==null&&es(e.dependencies)?(typeof N=="function"&&(jo(t,n,N,a),ie=t.memoizedState),(ue=Vn||vf(t,n,ue,a,te,ie,F)||e!==null&&e.dependencies!==null&&es(e.dependencies))?(K||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,ie,F),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,ie,F)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ie),l.props=a,l.state=ie,l.context=F,a=ue):(typeof l.componentDidUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,bs(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=Ra(t,e.child,null,r),t.child=Ra(t,null,n,r)):wt(e,t,n,r),t.memoizedState=l.state,e=t.child):e=Tn(e,t,r),e}function kf(e,t,n,a){return xa(),t.flags|=256,wt(e,t,n,a),t.child}var Uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fo(e){return{baseLanes:e,cachePool:Ed()}}function Bo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=$t),e}function Lf(e,t,n){var a=t.pendingProps,r=!1,l=(t.flags&128)!==0,y;if((y=l)||(y=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),y&&(r=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(r?Gn(t):Yn(),(e=nt)?(e=$p(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Un!==null?{id:fn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},n=pd(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw Bn(t);return Ec(e)?t.lanes=32:t.lanes=536870912,null}var N=a.children;return a=a.fallback,r?(Yn(),r=t.mode,N=xs({mode:"hidden",children:N},r),a=ba(a,r,n,null),N.return=t,a.return=t,N.sibling=a,t.child=N,a=t.child,a.memoizedState=Fo(n),a.childLanes=Bo(e,y,n),t.memoizedState=Uo,Jr(null,a)):(Gn(t),Po(t,N))}var F=e.memoizedState;if(F!==null&&(N=F.dehydrated,N!==null)){if(l)t.flags&256?(Gn(t),t.flags&=-257,t=Vo(e,t,n)):t.memoizedState!==null?(Yn(),t.child=e.child,t.flags|=128,t=null):(Yn(),N=a.fallback,r=t.mode,a=xs({mode:"visible",children:a.children},r),N=ba(N,r,n,null),N.flags|=2,a.return=t,N.return=t,a.sibling=N,t.child=a,Ra(t,e.child,null,n),a=t.child,a.memoizedState=Fo(n),a.childLanes=Bo(e,y,n),t.memoizedState=Uo,t=Jr(null,a));else if(Gn(t),Ec(N)){if(y=N.nextSibling&&N.nextSibling.dataset,y)var K=y.dgst;y=K,a=Error(u(419)),a.stack="",a.digest=y,Pr({value:a,source:null,stack:null}),t=Vo(e,t,n)}else if(ft||Ja(e,t,n,!1),y=(n&e.childLanes)!==0,ft||y){if(y=tt,y!==null&&(a=xu(y,n),a!==0&&a!==F.retryLane))throw F.retryLane=a,va(e,a),Mt(y,e,a),Mo;Sc(N)||Ns(),t=Vo(e,t,n)}else Sc(N)?(t.flags|=192,t.child=e.child,t=null):(e=F.treeContext,nt=nn(N.nextSibling),St=t,He=!0,Fn=null,en=!1,e!==null&&gd(t,e),t=Po(t,a.children),t.flags|=4096);return t}return r?(Yn(),N=a.fallback,r=t.mode,F=e.child,K=F.sibling,a=bn(F,{mode:"hidden",children:a.children}),a.subtreeFlags=F.subtreeFlags&65011712,K!==null?N=bn(K,N):(N=ba(N,r,n,null),N.flags|=2),N.return=t,a.return=t,a.sibling=N,t.child=a,Jr(null,a),a=t.child,N=e.child.memoizedState,N===null?N=Fo(n):(r=N.cachePool,r!==null?(F=ut._currentValue,r=r.parent!==F?{parent:F,pool:F}:r):r=Ed(),N={baseLanes:N.baseLanes|n,cachePool:r}),a.memoizedState=N,a.childLanes=Bo(e,y,n),t.memoizedState=Uo,Jr(e.child,a)):(Gn(t),n=e.child,e=n.sibling,n=bn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=n,t.memoizedState=null,n)}function Po(e,t){return t=xs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xs(e,t){return e=Ft(22,e,null,t),e.lanes=0,e}function Vo(e,t,n){return Ra(t,e.child,null,n),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),no(e.return,t,n)}function $o(e,t,n,a,r,l){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:l}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=n,y.tailMode=r,y.treeForkCount=l)}function zf(e,t,n){var a=t.pendingProps,r=a.revealOrder,l=a.tail;a=a.children;var y=ot.current,N=(y&2)!==0;if(N?(y=y&1|2,t.flags|=128):y&=1,le(ot,y),wt(e,t,a,n),a=He?Br:0,!N&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mf(e,n,t);else if(e.tag===19)Mf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),$o(t,!1,r,n,l,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&os(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}$o(t,!0,n,null,l,a);break;case"together":$o(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ho(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&es(e)))}function qg(e,t,n){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),Pn(t,ut,e.memoizedState.cache),xa();break;case 27:case 5:je(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:Pn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lf(e,t,n):(Gn(t),e=Tn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ja(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return zf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),le(ot,ot.current),a)break;return null;case 22:return t.lanes=0,Nf(e,t,n,t.pendingProps);case 24:Pn(t,ut,e.memoizedState.cache)}return Tn(e,t,n)}function Uf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!Ho(e,n)&&(t.flags&128)===0)return ft=!1,qg(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,He&&(t.flags&1048576)!==0&&md(t,Br,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e=="function")Xl(e)?(a=Ca(e,a),t.tag=1,t=jf(null,t,e,a,n)):(t.tag=0,t=zo(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===B){t.tag=11,t=Rf(null,t,e,a,n);break e}else if(r===P){t.tag=14,t=_f(null,t,e,a,n);break e}}throw t=E(e)||e,Error(u(306,t,""))}}return t;case 0:return zo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Ca(a,t.pendingProps),jf(e,t,a,r,n);case 3:e:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var l=t.memoizedState;r=l.element,co(e,t),Xr(t,a,null,n);var y=t.memoizedState;if(a=y.cache,Pn(t,ut,a),a!==l.cache&&ao(t,[ut],n,!0),qr(),a=y.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=kf(e,t,a,n);break e}else if(a!==r){r=Zt(Error(u(424)),t),Pr(r),t=kf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=nn(e.firstChild),St=t,He=!0,Fn=null,en=!0,n=Cd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xa(),a===r){t=Tn(e,t,n);break e}wt(e,t,a,n)}t=t.child}return t;case 26:return bs(e,t),e===null?(n=Qp(t.type,null,t.pendingProps,null))?t.memoizedState=n:He||(n=t.type,e=t.pendingProps,a=Ms(Ee.current).createElement(n),a[xt]=t,a[It]=e,At(a,n,e),yt(a),t.stateNode=a):t.memoizedState=Qp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return je(t),e===null&&He&&(a=t.stateNode=Yp(t.type,t.pendingProps,Ee.current),St=t,en=!0,r=nt,ea(t.type)?(wc=r,nt=nn(a.firstChild)):nt=r),wt(e,t,t.pendingProps.children,n),bs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((r=a=nt)&&(a=wy(a,t.type,t.pendingProps,en),a!==null?(t.stateNode=a,St=t,nt=nn(a.firstChild),en=!1,r=!0):r=!1),r||Bn(t)),je(t),r=t.type,l=t.pendingProps,y=e!==null?e.memoizedProps:null,a=l.children,vc(r,l)?a=null:y!==null&&vc(r,y)&&(t.flags|=32),t.memoizedState!==null&&(r=yo(e,t,Ug,null,null,n),hi._currentValue=r),bs(e,t),wt(e,t,a,n),t.child;case 6:return e===null&&He&&((e=n=nt)&&(n=Ay(n,t.pendingProps,en),n!==null?(t.stateNode=n,St=t,nt=null,e=!0):e=!1),e||Bn(t)),null;case 13:return Lf(e,t,n);case 4:return Te(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ra(t,null,a,n):wt(e,t,a,n),t.child;case 11:return Rf(e,t,t.type,t.pendingProps,n);case 7:return wt(e,t,t.pendingProps,n),t.child;case 8:return wt(e,t,t.pendingProps.children,n),t.child;case 12:return wt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Pn(t,t.type,a.value),wt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Ea(t),r=Et(r),a=a(r),t.flags|=1,wt(e,t,a,n),t.child;case 14:return _f(e,t,t.type,t.pendingProps,n);case 15:return Cf(e,t,t.type,t.pendingProps,n);case 19:return zf(e,t,n);case 31:return Yg(e,t,n);case 22:return Nf(e,t,n,t.pendingProps);case 24:return Ea(t),a=Et(ut),e===null?(r=so(),r===null&&(r=tt,l=ro(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=n),r=l),t.memoizedState={parent:a,cache:r},oo(t),Pn(t,ut,r)):((e.lanes&n)!==0&&(co(e,t),Xr(t,null,null,n),qr()),r=e.memoizedState,l=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Pn(t,ut,a)):(a=l.cache,Pn(t,ut,a),a!==r.cache&&ao(t,[ut],n,!0))),wt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Rn(e){e.flags|=4}function Go(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(dp())e.flags|=8192;else throw Ta=rs,lo}else e.flags&=-16777217}function Ff(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!eh(t))if(dp())e.flags|=8192;else throw Ta=rs,lo}function Ss(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yu():536870912,e.lanes|=t,dr|=t)}function ei(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Xg(e,t,n){var a=t.pendingProps;switch(Kl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),En(ut),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?Rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,eo())),at(t),null;case 26:var r=t.type,l=t.memoizedState;return e===null?(Rn(t),l!==null?(at(t),Ff(t,l)):(at(t),Go(t,r,null,a,n))):l?l!==e.memoizedState?(Rn(t),at(t),Ff(t,l)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Rn(t),at(t),Go(t,r,e,a,n)),null;case 27:if(ze(t),n=Ee.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return at(t),null}e=ne.current,Ka(t)?yd(t):(e=Yp(r,a,n),t.stateNode=e,Rn(t))}return at(t),null;case 5:if(ze(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return at(t),null}if(l=ne.current,Ka(t))yd(t);else{var y=Ms(Ee.current);switch(l){case 1:l=y.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=y.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=y.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=y.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=y.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?y.createElement("select",{is:a.is}):y.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?y.createElement(r,{is:a.is}):y.createElement(r)}}l[xt]=t,l[It]=a;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)l.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=l;e:switch(At(l,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Rn(t)}}return at(t),Go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=Ee.current,Ka(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=St,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Lp(e.nodeValue,n)),e||Bn(t,!0)}else e=Ms(e).createTextNode(a),e[xt]=t,t.stateNode=e}return at(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ka(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[xt]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else n=eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pt(t),t):(Pt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return at(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[xt]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),r=!1}else r=eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Pt(t),t):(Pt(t),null)}return Pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ss(t,t.updateQueue),at(t),null);case 4:return we(),e===null&&pc(t.stateNode.containerInfo),at(t),null;case 10:return En(t.type),at(t),null;case 19:if(L(ot),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)ei(a,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=os(e),l!==null){for(t.flags|=128,ei(a,!1),e=l.updateQueue,t.updateQueue=e,Ss(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fd(n,e),n=n.sibling;return le(ot,ot.current&1|2),He&&xn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Se()>Rs&&(t.flags|=128,r=!0,ei(a,!1),t.lanes=4194304)}else{if(!r)if(e=os(l),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ss(t,e),ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!He)return at(t),null}else 2*Se()-a.renderingStartTime>Rs&&n!==536870912&&(t.flags|=128,r=!0,ei(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(e=a.last,e!==null?e.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Se(),e.sibling=null,n=ot.current,le(ot,r?n&1|2:n&1),He&&xn(t,a.treeForkCount),e):(at(t),null);case 22:case 23:return Pt(t),ho(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&Ss(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),En(ut),at(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Qg(e,t){switch(Kl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(ut),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ze(t),null;case 31:if(t.memoizedState!==null){if(Pt(t),t.alternate===null)throw Error(u(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(ot),null;case 4:return we(),null;case 10:return En(t.type),null;case 22:case 23:return Pt(t),ho(),e!==null&&L(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(ut),null;case 25:return null;default:return null}}function Bf(e,t){switch(Kl(t),t.tag){case 3:En(ut),we();break;case 26:case 27:case 5:ze(t);break;case 4:we();break;case 31:t.memoizedState!==null&&Pt(t);break;case 13:Pt(t);break;case 19:L(ot);break;case 10:En(t.type);break;case 22:case 23:Pt(t),ho(),e!==null&&L(wa);break;case 24:En(ut)}}function ti(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var l=n.create,y=n.inst;a=l(),y.destroy=a}n=n.next}while(n!==r)}}catch(N){We(t,t.return,N)}}function qn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){var y=a.inst,N=y.destroy;if(N!==void 0){y.destroy=void 0,r=t;var F=n,K=N;try{K()}catch(ue){We(r,F,ue)}}}a=a.next}while(a!==l)}}catch(ue){We(t,t.return,ue)}}function Pf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Id(t,n)}catch(a){We(e,e.return,a)}}}function Vf(e,t,n){n.props=Ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){We(e,t,a)}}function ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){We(e,t,r)}}function hn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){We(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function $f(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){We(e,e.return,r)}}function Yo(e,t,n){try{var a=e.stateNode;yy(a,e.type,n,t),a[It]=t}catch(r){We(e,e.return,r)}}function Hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn));else if(a!==4&&(a===27&&ea(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}function Es(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ea(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function Gf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);At(t,a,n),t[xt]=e,t[It]=n}catch(l){We(e,e.return,l)}}var _n=!1,pt=!1,Qo=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,vt=null;function Wg(e,t){if(e=e.containerInfo,gc=$s,e=ad(e),Pl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var y=0,N=-1,F=-1,K=0,ue=0,pe=e,te=null;t:for(;;){for(var ie;pe!==n||r!==0&&pe.nodeType!==3||(N=y+r),pe!==l||a!==0&&pe.nodeType!==3||(F=y+a),pe.nodeType===3&&(y+=pe.nodeValue.length),(ie=pe.firstChild)!==null;)te=pe,pe=ie;for(;;){if(pe===e)break t;if(te===n&&++K===r&&(N=y),te===l&&++ue===a&&(F=y),(ie=pe.nextSibling)!==null)break;pe=te,te=pe.parentNode}pe=ie}n=N===-1||F===-1?null:{start:N,end:F}}else n=null}n=n||{start:0,end:0}}else n=null;for(yc={focusedElem:e,selectionRange:n},$s=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,r=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var Ae=Ca(n.type,r);e=a.getSnapshotBeforeUpdate(Ae,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(De){We(n,n.return,De)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)xc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function qf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),a&4&&ti(5,n);break;case 1:if(Nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(y){We(n,n.return,y)}else{var r=Ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){We(n,n.return,y)}}a&64&&Pf(n),a&512&&ni(n,n.return);break;case 3:if(Nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Id(e,t)}catch(y){We(n,n.return,y)}}break;case 27:t===null&&a&4&&Gf(n);case 26:case 5:Nn(e,n),t===null&&a&4&&$f(n),a&512&&ni(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),a&4&&Wf(e,n);break;case 13:Nn(e,n),a&4&&Zf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=iy.bind(null,n),Ty(e,n))));break;case 22:if(a=n.memoizedState!==null||_n,!a){t=t!==null&&t.memoizedState!==null||pt,r=_n;var l=pt;_n=a,(pt=t)&&!l?In(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),_n=r,pt=l}break;case 30:break;default:Nn(e,n)}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Al(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Ot=!1;function Cn(e,t,n){for(n=n.child;n!==null;)Qf(e,t,n),n=n.sibling}function Qf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(et,n)}catch{}switch(n.tag){case 26:pt||hn(n,t),Cn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:pt||hn(n,t);var a=rt,r=Ot;ea(n.type)&&(rt=n.stateNode,Ot=!1),Cn(e,t,n),di(n.stateNode),rt=a,Ot=r;break;case 5:pt||hn(n,t);case 6:if(a=rt,r=Ot,rt=null,Cn(e,t,n),rt=a,Ot=r,rt!==null)if(Ot)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(n.stateNode)}catch(l){We(n,t,l)}else try{rt.removeChild(n.stateNode)}catch(l){We(n,t,l)}break;case 18:rt!==null&&(Ot?(e=rt,Pp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),br(e)):Pp(rt,n.stateNode));break;case 4:a=rt,r=Ot,rt=n.stateNode.containerInfo,Ot=!0,Cn(e,t,n),rt=a,Ot=r;break;case 0:case 11:case 14:case 15:qn(2,n,t),pt||qn(4,n,t),Cn(e,t,n);break;case 1:pt||(hn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Vf(n,t,a)),Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:pt=(a=pt)||n.memoizedState!==null,Cn(e,t,n),pt=a;break;default:Cn(e,t,n)}}function Wf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(n){We(t,t.return,n)}}}function Zf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(n){We(t,t.return,n)}}function Zg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yf),t;default:throw Error(u(435,e.tag))}}function ws(e,t){var n=Zg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=sy.bind(null,e,a);a.then(r,r)}})}function jt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],l=e,y=t,N=y;e:for(;N!==null;){switch(N.tag){case 27:if(ea(N.type)){rt=N.stateNode,Ot=!1;break e}break;case 5:rt=N.stateNode,Ot=!1;break e;case 3:case 4:rt=N.stateNode.containerInfo,Ot=!0;break e}N=N.return}if(rt===null)throw Error(u(160));Qf(l,y,r),rt=null,Ot=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}var ln=null;function Kf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),kt(e),a&4&&(qn(3,e,e.return),ti(3,e),qn(5,e,e.return));break;case 1:jt(t,e),kt(e),a&512&&(pt||n===null||hn(n,n.return)),a&64&&_n&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=ln;if(jt(t,e),kt(e),a&512&&(pt||n===null||hn(n,n.return)),a&4){var l=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Nr]||l[xt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(a),r.head.insertBefore(l,r.querySelector("head > title"))),At(l,a,n),l[xt]=e,yt(l),a=l;break e;case"link":var y=Kp("link","href",r).get(a+(n.href||""));if(y){for(var N=0;N<y.length;N++)if(l=y[N],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){y.splice(N,1);break t}}l=r.createElement(a),At(l,a,n),r.head.appendChild(l);break;case"meta":if(y=Kp("meta","content",r).get(a+(n.content||""))){for(N=0;N<y.length;N++)if(l=y[N],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){y.splice(N,1);break t}}l=r.createElement(a),At(l,a,n),r.head.appendChild(l);break;default:throw Error(u(468,a))}l[xt]=e,yt(l),a=l}e.stateNode=a}else Jp(r,e.type,e.stateNode);else e.stateNode=Zp(r,a,e.memoizedProps);else l!==a?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,a===null?Jp(r,e.type,e.stateNode):Zp(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,n.memoizedProps)}break;case 27:jt(t,e),kt(e),a&512&&(pt||n===null||hn(n,n.return)),n!==null&&a&4&&Yo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(jt(t,e),kt(e),a&512&&(pt||n===null||hn(n,n.return)),e.flags&32){r=e.stateNode;try{Va(r,"")}catch(Ae){We(e,e.return,Ae)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,Yo(e,r,n!==null?n.memoizedProps:r)),a&1024&&(Qo=!0);break;case 6:if(jt(t,e),kt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Ae){We(e,e.return,Ae)}}break;case 3:if(Fs=null,r=ln,ln=zs(t.containerInfo),jt(t,e),ln=r,kt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{br(t.containerInfo)}catch(Ae){We(e,e.return,Ae)}Qo&&(Qo=!1,Jf(e));break;case 4:a=ln,ln=zs(e.stateNode.containerInfo),jt(t,e),kt(e),ln=a;break;case 12:jt(t,e),kt(e);break;case 31:jt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ws(e,a)));break;case 13:jt(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ts=Se()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ws(e,a)));break;case 22:r=e.memoizedState!==null;var F=n!==null&&n.memoizedState!==null,K=_n,ue=pt;if(_n=K||r,pt=ue||F,jt(t,e),pt=ue,_n=K,kt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||F||_n||pt||Na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){F=n=t;try{if(l=F.stateNode,r)y=l.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{N=F.stateNode;var pe=F.memoizedProps.style,te=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;N.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(Ae){We(F,F.return,Ae)}}}else if(t.tag===6){if(n===null){F=t;try{F.stateNode.nodeValue=r?"":F.memoizedProps}catch(Ae){We(F,F.return,Ae)}}}else if(t.tag===18){if(n===null){F=t;try{var ie=F.stateNode;r?Vp(ie,!0):Vp(F.stateNode,!1)}catch(Ae){We(F,F.return,Ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ws(e,n))));break;case 19:jt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ws(e,a)));break;case 30:break;case 21:break;default:jt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Hf(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,l=qo(e);Es(e,l,r);break;case 5:var y=n.stateNode;n.flags&32&&(Va(y,""),n.flags&=-33);var N=qo(e);Es(e,N,y);break;case 3:case 4:var F=n.stateNode.containerInfo,K=qo(e);Xo(e,K,F);break;default:throw Error(u(161))}}catch(ue){We(e,e.return,ue)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qf(e,t.alternate,t),t=t.sibling}function Na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qn(4,t,t.return),Na(t);break;case 1:hn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Vf(t,t.return,n),Na(t);break;case 27:di(t.stateNode);case 26:case 5:hn(t,t.return),Na(t);break;case 22:t.memoizedState===null&&Na(t);break;case 30:Na(t);break;default:Na(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,l=t,y=l.flags;switch(l.tag){case 0:case 11:case 15:In(r,l,n),ti(4,l);break;case 1:if(In(r,l,n),a=l,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(K){We(a,a.return,K)}if(a=l,r=a.updateQueue,r!==null){var N=a.stateNode;try{var F=r.shared.hiddenCallbacks;if(F!==null)for(r.shared.hiddenCallbacks=null,r=0;r<F.length;r++)Nd(F[r],N)}catch(K){We(a,a.return,K)}}n&&y&64&&Pf(l),ni(l,l.return);break;case 27:Gf(l);case 26:case 5:In(r,l,n),n&&a===null&&y&4&&$f(l),ni(l,l.return);break;case 12:In(r,l,n);break;case 31:In(r,l,n),n&&y&4&&Wf(r,l);break;case 13:In(r,l,n),n&&y&4&&Zf(r,l);break;case 22:l.memoizedState===null&&In(r,l,n),ni(l,l.return);break;case 30:break;default:In(r,l,n)}t=t.sibling}}function Wo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vr(n))}function Zo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e))}function on(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ep(e,t,n,a),t=t.sibling}function ep(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,a),r&2048&&ti(9,t);break;case 1:on(e,t,n,a);break;case 3:on(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e)));break;case 12:if(r&2048){on(e,t,n,a),e=t.stateNode;try{var l=t.memoizedProps,y=l.id,N=l.onPostCommit;typeof N=="function"&&N(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){We(t,t.return,F)}}else on(e,t,n,a);break;case 31:on(e,t,n,a);break;case 13:on(e,t,n,a);break;case 23:break;case 22:l=t.stateNode,y=t.alternate,t.memoizedState!==null?l._visibility&2?on(e,t,n,a):ai(e,t):l._visibility&2?on(e,t,n,a):(l._visibility|=2,or(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Wo(y,t);break;case 24:on(e,t,n,a),r&2048&&Zo(t.alternate,t);break;default:on(e,t,n,a)}}function or(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,y=t,N=n,F=a,K=y.flags;switch(y.tag){case 0:case 11:case 15:or(l,y,N,F,r),ti(8,y);break;case 23:break;case 22:var ue=y.stateNode;y.memoizedState!==null?ue._visibility&2?or(l,y,N,F,r):ai(l,y):(ue._visibility|=2,or(l,y,N,F,r)),r&&K&2048&&Wo(y.alternate,y);break;case 24:or(l,y,N,F,r),r&&K&2048&&Zo(y.alternate,y);break;default:or(l,y,N,F,r)}t=t.sibling}}function ai(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:ai(n,a),r&2048&&Wo(a.alternate,a);break;case 24:ai(n,a),r&2048&&Zo(a.alternate,a);break;default:ai(n,a)}t=t.sibling}}var ri=8192;function cr(e,t,n){if(e.subtreeFlags&ri)for(e=e.child;e!==null;)tp(e,t,n),e=e.sibling}function tp(e,t,n){switch(e.tag){case 26:cr(e,t,n),e.flags&ri&&e.memoizedState!==null&&zy(n,ln,e.memoizedState,e.memoizedProps);break;case 5:cr(e,t,n);break;case 3:case 4:var a=ln;ln=zs(e.stateNode.containerInfo),cr(e,t,n),ln=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ri,ri=16777216,cr(e,t,n),ri=a):cr(e,t,n));break;default:cr(e,t,n)}}function np(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,rp(a,e)}np(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ap(e),e=e.sibling}function ap(e){switch(e.tag){case 0:case 11:case 15:ii(e),e.flags&2048&&qn(9,e,e.return);break;case 3:ii(e);break;case 12:ii(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,As(e)):ii(e);break;default:ii(e)}}function As(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,rp(a,e)}np(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),As(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,As(t));break;default:As(t)}e=e.sibling}}function rp(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Vr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var r=a.sibling,l=a.return;if(Xf(a),a===n){vt=null;break e}if(r!==null){r.return=l,vt=r;break e}vt=l}}}var Kg={getCacheForType:function(e){var t=Et(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Et(ut).controller.signal}},Jg=typeof WeakMap=="function"?WeakMap:Map,qe=0,tt=null,Be=null,Ve=0,Qe=0,Vt=null,Xn=!1,ur=!1,Ko=!1,Dn=0,lt=0,Qn=0,Ia=0,Jo=0,$t=0,dr=0,si=null,Lt=null,ec=!1,Ts=0,ip=0,Rs=1/0,_s=null,Wn=null,ht=0,Zn=null,fr=null,On=0,tc=0,nc=null,sp=null,li=0,ac=null;function Ht(){return(qe&2)!==0&&Ve!==0?Ve&-Ve:I.T!==null?cc():Su()}function lp(){if($t===0)if((Ve&536870912)===0||He){var e=pa;pa<<=1,(pa&3932160)===0&&(pa=262144),$t=e}else $t=536870912;return e=Bt.current,e!==null&&(e.flags|=32),$t}function Mt(e,t,n){(e===tt&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(pr(e,0),Kn(e,Ve,$t,!1)),Cr(e,n),((qe&2)===0||e!==tt)&&(e===tt&&((qe&2)===0&&(Ia|=n),lt===4&&Kn(e,Ve,$t,!1)),mn(e))}function op(e,t,n){if((qe&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||_r(e,t),r=a?ny(e,t):ic(e,t,!0),l=a;do{if(r===0){ur&&!a&&Kn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!ey(n)){r=ic(e,t,!1),l=!1;continue}if(r===2){if(l=t,e.errorRecoveryDisabledLanes&l)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var N=e;r=si;var F=N.current.memoizedState.isDehydrated;if(F&&(pr(N,y).flags|=256),y=ic(N,y,!1),y!==2){if(Ko&&!F){N.errorRecoveryDisabledLanes|=l,Ia|=l,r=4;break e}l=Lt,Lt=r,l!==null&&(Lt===null?Lt=l:Lt.push.apply(Lt,l))}r=y}if(l=!1,r!==2)continue}}if(r===1){pr(e,0),Kn(e,t,0,!0);break}e:{switch(a=e,l=r,l){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Kn(a,t,$t,!Xn);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=Ts+300-Se(),10<r)){if(Kn(a,t,$t,!Xn),zi(a,0,!0)!==0)break e;On=t,a.timeoutHandle=Fp(cp.bind(null,a,n,Lt,_s,ec,t,$t,Ia,dr,Xn,l,"Throttled",-0,0),r);break e}cp(a,n,Lt,_s,ec,t,$t,Ia,dr,Xn,l,null,-0,0)}}break}while(!0);mn(e)}function cp(e,t,n,a,r,l,y,N,F,K,ue,pe,te,ie){if(e.timeoutHandle=-1,pe=t.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},tp(t,l,pe);var Ae=(l&62914560)===l?Ts-Se():(l&4194048)===l?ip-Se():0;if(Ae=Uy(pe,Ae),Ae!==null){On=l,e.cancelPendingCommit=Ae(yp.bind(null,e,t,l,n,a,r,y,N,F,ue,pe,null,te,ie)),Kn(e,l,y,!K);return}}yp(e,t,l,n,a,r,y,N,F)}function ey(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],l=r.getSnapshot;r=r.value;try{if(!Ut(l(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kn(e,t,n,a){t&=~Jo,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var l=31-it(r),y=1<<l;a[l]=-1,r&=~y}n!==0&&vu(e,n,t)}function Cs(){return(qe&6)===0?(oi(0),!1):!0}function rc(){if(Be!==null){if(Qe===0)var e=Be.return;else e=Be,Sn=Sa=null,xo(e),ar=null,Hr=0,e=Be;for(;e!==null;)Bf(e.alternate,e),e=e.return;Be=null}}function pr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,rc(),tt=e,Be=n=bn(e.current,null),Ve=t,Qe=0,Vt=null,Xn=!1,ur=_r(e,t),Ko=!1,dr=$t=Jo=Ia=Qn=lt=0,Lt=si=null,ec=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-it(a),l=1<<r;t|=e[r],a&=~l}return Dn=t,Qi(),n}function up(e,t){Le=null,I.H=Kr,t===nr||t===as?(t=Td(),Qe=3):t===lo?(t=Td(),Qe=4):Qe=t===Mo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vt=t,Be===null&&(lt=1,ys(e,Zt(t,e.current)))}function dp(){var e=Bt.current;return e===null?!0:(Ve&4194048)===Ve?tn===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===tn:!1}function fp(){var e=I.H;return I.H=Kr,e===null?Kr:e}function pp(){var e=I.A;return I.A=Kg,e}function Ns(){lt=4,Xn||(Ve&4194048)!==Ve&&Bt.current!==null||(ur=!0),(Qn&134217727)===0&&(Ia&134217727)===0||tt===null||Kn(tt,Ve,$t,!1)}function ic(e,t,n){var a=qe;qe|=2;var r=fp(),l=pp();(tt!==e||Ve!==t)&&(_s=null,pr(e,t)),t=!1;var y=lt;e:do try{if(Qe!==0&&Be!==null){var N=Be,F=Vt;switch(Qe){case 8:rc(),y=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var K=Qe;if(Qe=0,Vt=null,hr(e,N,F,K),n&&ur){y=0;break e}break;default:K=Qe,Qe=0,Vt=null,hr(e,N,F,K)}}ty(),y=lt;break}catch(ue){up(e,ue)}while(!0);return t&&e.shellSuspendCounter++,Sn=Sa=null,qe=a,I.H=r,I.A=l,Be===null&&(tt=null,Ve=0,Qi()),y}function ty(){for(;Be!==null;)hp(Be)}function ny(e,t){var n=qe;qe|=2;var a=fp(),r=pp();tt!==e||Ve!==t?(_s=null,Rs=Se()+500,pr(e,t)):ur=_r(e,t);e:do try{if(Qe!==0&&Be!==null){t=Be;var l=Vt;t:switch(Qe){case 1:Qe=0,Vt=null,hr(e,t,l,1);break;case 2:case 9:if(wd(l)){Qe=0,Vt=null,mp(t);break}t=function(){Qe!==2&&Qe!==9||tt!==e||(Qe=7),mn(e)},l.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:wd(l)?(Qe=0,Vt=null,mp(t)):(Qe=0,Vt=null,hr(e,t,l,7));break;case 5:var y=null;switch(Be.tag){case 26:y=Be.memoizedState;case 5:case 27:var N=Be;if(y?eh(y):N.stateNode.complete){Qe=0,Vt=null;var F=N.sibling;if(F!==null)Be=F;else{var K=N.return;K!==null?(Be=K,Is(K)):Be=null}break t}}Qe=0,Vt=null,hr(e,t,l,5);break;case 6:Qe=0,Vt=null,hr(e,t,l,6);break;case 8:rc(),lt=6;break e;default:throw Error(u(462))}}ay();break}catch(ue){up(e,ue)}while(!0);return Sn=Sa=null,I.H=a,I.A=r,qe=n,Be!==null?0:(tt=null,Ve=0,Qi(),lt)}function ay(){for(;Be!==null&&!ee();)hp(Be)}function hp(e){var t=Uf(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?Is(e):Be=t}function mp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Of(n,t,t.pendingProps,t.type,void 0,Ve);break;case 11:t=Of(n,t,t.pendingProps,t.type.render,t.ref,Ve);break;case 5:xo(t);default:Bf(n,t),t=Be=fd(t,Dn),t=Uf(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?Is(e):Be=t}function hr(e,t,n,a){Sn=Sa=null,xo(t),ar=null,Hr=0;var r=t.return;try{if(Gg(e,r,t,n,Ve)){lt=1,ys(e,Zt(n,e.current)),Be=null;return}}catch(l){if(r!==null)throw Be=r,l;lt=1,ys(e,Zt(n,e.current)),Be=null;return}t.flags&32768?(He||a===1?e=!0:ur||(Ve&536870912)!==0?e=!1:(Xn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),gp(t,e)):Is(t)}function Is(e){var t=e;do{if((t.flags&32768)!==0){gp(t,Xn);return}e=t.return;var n=Xg(t.alternate,t,Dn);if(n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);lt===0&&(lt=5)}function gp(e,t){do{var n=Qg(e.alternate,e);if(n!==null){n.flags&=32767,Be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Be=e;return}Be=e=n}while(e!==null);lt=6,Be=null}function yp(e,t,n,a,r,l,y,N,F){e.cancelPendingCommit=null;do Ds();while(ht!==0);if((qe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(l=t.lanes|t.childLanes,l|=Yl,Mm(e,n,l,y,N,F),e===tt&&(Be=tt=null,Ve=0),fr=t,Zn=e,On=n,tc=l,nc=r,sp=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ly(Ue,function(){return Ep(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=I.T,I.T=null,r=k.p,k.p=2,y=qe,qe|=4;try{Wg(e,t,n)}finally{qe=y,k.p=r,I.T=a}}ht=1,vp(),bp(),xp()}}function vp(){if(ht===1){ht=0;var e=Zn,t=fr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=I.T,I.T=null;var a=k.p;k.p=2;var r=qe;qe|=4;try{Kf(t,e);var l=yc,y=ad(e.containerInfo),N=l.focusedElem,F=l.selectionRange;if(y!==N&&N&&N.ownerDocument&&nd(N.ownerDocument.documentElement,N)){if(F!==null&&Pl(N)){var K=F.start,ue=F.end;if(ue===void 0&&(ue=K),"selectionStart"in N)N.selectionStart=K,N.selectionEnd=Math.min(ue,N.value.length);else{var pe=N.ownerDocument||document,te=pe&&pe.defaultView||window;if(te.getSelection){var ie=te.getSelection(),Ae=N.textContent.length,De=Math.min(F.start,Ae),Je=F.end===void 0?De:Math.min(F.end,Ae);!ie.extend&&De>Je&&(y=Je,Je=De,De=y);var Q=td(N,De),$=td(N,Je);if(Q&&$&&(ie.rangeCount!==1||ie.anchorNode!==Q.node||ie.anchorOffset!==Q.offset||ie.focusNode!==$.node||ie.focusOffset!==$.offset)){var Z=pe.createRange();Z.setStart(Q.node,Q.offset),ie.removeAllRanges(),De>Je?(ie.addRange(Z),ie.extend($.node,$.offset)):(Z.setEnd($.node,$.offset),ie.addRange(Z))}}}}for(pe=[],ie=N;ie=ie.parentNode;)ie.nodeType===1&&pe.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<pe.length;N++){var de=pe[N];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}$s=!!gc,yc=gc=null}finally{qe=r,k.p=a,I.T=n}}e.current=t,ht=2}}function bp(){if(ht===2){ht=0;var e=Zn,t=fr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=I.T,I.T=null;var a=k.p;k.p=2;var r=qe;qe|=4;try{qf(e,t.alternate,t)}finally{qe=r,k.p=a,I.T=n}}ht=3}}function xp(){if(ht===4||ht===3){ht=0,be();var e=Zn,t=fr,n=On,a=sp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,fr=Zn=null,Sp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Wn=null),El(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(et,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=I.T,r=k.p,k.p=2,I.T=null;try{for(var l=e.onRecoverableError,y=0;y<a.length;y++){var N=a[y];l(N.value,{componentStack:N.stack})}}finally{I.T=t,k.p=r}}(On&3)!==0&&Ds(),mn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===ac?li++:(li=0,ac=e):li=0,oi(0)}}function Sp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vr(t)))}function Ds(){return vp(),bp(),xp(),Ep()}function Ep(){if(ht!==5)return!1;var e=Zn,t=tc;tc=0;var n=El(On),a=I.T,r=k.p;try{k.p=32>n?32:n,I.T=null,n=nc,nc=null;var l=Zn,y=On;if(ht=0,fr=Zn=null,On=0,(qe&6)!==0)throw Error(u(331));var N=qe;if(qe|=4,ap(l.current),ep(l,l.current,y,n),qe=N,oi(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(et,l)}catch{}return!0}finally{k.p=r,I.T=a,Sp(e,t)}}function wp(e,t,n){t=Zt(n,t),t=Lo(e.stateNode,t,2),e=Hn(e,t,2),e!==null&&(Cr(e,2),mn(e))}function We(e,t,n){if(e.tag===3)wp(e,e,n);else for(;t!==null;){if(t.tag===3){wp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Wn===null||!Wn.has(a))){e=Zt(n,e),n=Af(2),a=Hn(t,n,2),a!==null&&(Tf(n,a,t,e),Cr(a,2),mn(a));break}}t=t.return}}function sc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Jg;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Ko=!0,r.add(n),e=ry.bind(null,e,t,n),t.then(e,e))}function ry(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&(Ve&n)===n&&(lt===4||lt===3&&(Ve&62914560)===Ve&&300>Se()-Ts?(qe&2)===0&&pr(e,0):Jo|=n,dr===Ve&&(dr=0)),mn(e)}function Ap(e,t){t===0&&(t=yu()),e=va(e,t),e!==null&&(Cr(e,t),mn(e))}function iy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ap(e,n)}function sy(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Ap(e,n)}function ly(e,t){return ge(e,t)}var Os=null,mr=null,lc=!1,js=!1,oc=!1,Jn=0;function mn(e){e!==mr&&e.next===null&&(mr===null?Os=mr=e:mr=mr.next=e),js=!0,lc||(lc=!0,cy())}function oi(e,t){if(!oc&&js){oc=!0;do for(var n=!1,a=Os;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var l=0;else{var y=a.suspendedLanes,N=a.pingedLanes;l=(1<<31-it(42|e)+1)-1,l&=r&~(y&~N),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Cp(a,l))}else l=Ve,l=zi(a,a===tt?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||_r(a,l)||(n=!0,Cp(a,l));a=a.next}while(n);oc=!1}}function oy(){Tp()}function Tp(){js=lc=!1;var e=0;Jn!==0&&by()&&(e=Jn);for(var t=Se(),n=null,a=Os;a!==null;){var r=a.next,l=Rp(a,t);l===0?(a.next=null,n===null?Os=r:n.next=r,r===null&&(mr=n)):(n=a,(e!==0||(l&3)!==0)&&(js=!0)),a=r}ht!==0&&ht!==5||oi(e),Jn!==0&&(Jn=0)}function Rp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var y=31-it(l),N=1<<y,F=r[y];F===-1?((N&n)===0||(N&a)!==0)&&(r[y]=Lm(N,t)):F<=t&&(e.expiredLanes|=N),l&=~N}if(t=tt,n=Ve,n=zi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ye(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_r(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ye(a),El(n)){case 2:case 8:n=Xe;break;case 32:n=Ue;break;case 268435456:n=Ln;break;default:n=Ue}return a=_p.bind(null,e),n=ge(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ye(a),e.callbackPriority=2,e.callbackNode=null,2}function _p(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ds()&&e.callbackNode!==n)return null;var a=Ve;return a=zi(e,e===tt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(op(e,a,t),Rp(e,Se()),e.callbackNode!=null&&e.callbackNode===n?_p.bind(null,e):null)}function Cp(e,t){if(Ds())return null;op(e,t,!0)}function cy(){Sy(function(){(qe&6)!==0?ge(Ne,oy):Tp()})}function cc(){if(Jn===0){var e=er;e===0&&(e=La,La<<=1,(La&261888)===0&&(La=256)),Jn=e}return Jn}function Np(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pi(""+e)}function Ip(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function uy(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var l=Np((r[It]||null).action),y=a.submitter;y&&(t=(t=y[It]||null)?Np(t.formAction):y.getAttribute("formAction"),t!==null&&(l=t,y=null));var N=new Gi("action","action",null,a,r);e.push({event:N,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Jn!==0){var F=y?Ip(r,y):new FormData(r);No(n,{pending:!0,data:F,method:r.method,action:l},null,F)}}else typeof l=="function"&&(N.preventDefault(),F=y?Ip(r,y):new FormData(r),No(n,{pending:!0,data:F,method:r.method,action:l},l,F))},currentTarget:r}]})}}for(var uc=0;uc<Gl.length;uc++){var dc=Gl[uc],dy=dc.toLowerCase(),fy=dc[0].toUpperCase()+dc.slice(1);sn(dy,"on"+fy)}sn(sd,"onAnimationEnd"),sn(ld,"onAnimationIteration"),sn(od,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(Cg,"onTransitionRun"),sn(Ng,"onTransitionStart"),sn(Ig,"onTransitionCancel"),sn(cd,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ci));function Dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var y=a.length-1;0<=y;y--){var N=a[y],F=N.instance,K=N.currentTarget;if(N=N.listener,F!==l&&r.isPropagationStopped())break e;l=N,r.currentTarget=K;try{l(r)}catch(ue){Xi(ue)}r.currentTarget=null,l=F}else for(y=0;y<a.length;y++){if(N=a[y],F=N.instance,K=N.currentTarget,N=N.listener,F!==l&&r.isPropagationStopped())break e;l=N,r.currentTarget=K;try{l(r)}catch(ue){Xi(ue)}r.currentTarget=null,l=F}}}}function Pe(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var a=e+"__bubble";n.has(a)||(Op(t,e,2,!1),n.add(a))}function fc(e,t,n){var a=0;t&&(a|=4),Op(n,e,a,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function pc(e){if(!e[ks]){e[ks]=!0,Au.forEach(function(n){n!=="selectionchange"&&(py.has(n)||fc(n,!1,e),fc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,fc("selectionchange",!1,t))}}function Op(e,t,n,a){switch(lh(t)){case 2:var r=Py;break;case 8:r=Vy;break;default:r=Cc}n=r.bind(null,t,n,e),r=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function hc(e,t,n,a,r){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var N=a.stateNode.containerInfo;if(N===r)break;if(y===4)for(y=a.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===r)return;y=y.return}for(;N!==null;){if(y=za(N),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){a=l=y;continue e}N=N.parentNode}}a=a.return}Mu(function(){var K=l,ue=Il(n),pe=[];e:{var te=ud.get(e);if(te!==void 0){var ie=Gi,Ae=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":ie=sg;break;case"focusin":Ae="focus",ie=Ml;break;case"focusout":Ae="blur",ie=Ml;break;case"beforeblur":case"afterblur":ie=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=cg;break;case sd:case ld:case od:ie=Zm;break;case cd:ie=dg;break;case"scroll":case"scrollend":ie=Ym;break;case"wheel":ie=pg;break;case"copy":case"cut":case"paste":ie=Jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Pu;break;case"toggle":case"beforetoggle":ie=mg}var De=(t&4)!==0,Je=!De&&(e==="scroll"||e==="scrollend"),Q=De?te!==null?te+"Capture":null:te;De=[];for(var $=K,Z;$!==null;){var de=$;if(Z=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Z===null||Q===null||(de=Dr($,Q),de!=null&&De.push(ui($,de,Z))),Je)break;$=$.return}0<De.length&&(te=new ie(te,Ae,null,n,ue),pe.push({event:te,listeners:De}))}}if((t&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",ie=e==="mouseout"||e==="pointerout",te&&n!==Nl&&(Ae=n.relatedTarget||n.fromElement)&&(za(Ae)||Ae[Ma]))break e;if((ie||te)&&(te=ue.window===ue?ue:(te=ue.ownerDocument)?te.defaultView||te.parentWindow:window,ie?(Ae=n.relatedTarget||n.toElement,ie=K,Ae=Ae?za(Ae):null,Ae!==null&&(Je=f(Ae),De=Ae.tag,Ae!==Je||De!==5&&De!==27&&De!==6)&&(Ae=null)):(ie=null,Ae=K),ie!==Ae)){if(De=Fu,de="onMouseLeave",Q="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(De=Pu,de="onPointerLeave",Q="onPointerEnter",$="pointer"),Je=ie==null?te:Ir(ie),Z=Ae==null?te:Ir(Ae),te=new De(de,$+"leave",ie,n,ue),te.target=Je,te.relatedTarget=Z,de=null,za(ue)===K&&(De=new De(Q,$+"enter",Ae,n,ue),De.target=Z,De.relatedTarget=Je,de=De),Je=de,ie&&Ae)t:{for(De=hy,Q=ie,$=Ae,Z=0,de=Q;de;de=De(de))Z++;de=0;for(var Ie=$;Ie;Ie=De(Ie))de++;for(;0<Z-de;)Q=De(Q),Z--;for(;0<de-Z;)$=De($),de--;for(;Z--;){if(Q===$||$!==null&&Q===$.alternate){De=Q;break t}Q=De(Q),$=De($)}De=null}else De=null;ie!==null&&jp(pe,te,ie,De,!1),Ae!==null&&Je!==null&&jp(pe,Je,Ae,De,!0)}}e:{if(te=K?Ir(K):window,ie=te.nodeName&&te.nodeName.toLowerCase(),ie==="select"||ie==="input"&&te.type==="file")var Ge=Qu;else if(qu(te))if(Wu)Ge=Tg;else{Ge=wg;var Re=Eg}else ie=te.nodeName,!ie||ie.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?K&&Cl(K.elementType)&&(Ge=Qu):Ge=Ag;if(Ge&&(Ge=Ge(e,K))){Xu(pe,Ge,n,ue);break e}Re&&Re(e,te,K),e==="focusout"&&K&&te.type==="number"&&K.memoizedProps.value!=null&&_l(te,"number",te.value)}switch(Re=K?Ir(K):window,e){case"focusin":(qu(Re)||Re.contentEditable==="true")&&(Ya=Re,Vl=K,Fr=null);break;case"focusout":Fr=Vl=Ya=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,rd(pe,n,ue);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":rd(pe,n,ue)}var Me;if(Ul)e:{switch(e){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Ga?Gu(e,n)&&($e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($e="onCompositionStart");$e&&(Vu&&n.locale!=="ko"&&(Ga||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Ga&&(Me=zu()):(zn=ue,jl="value"in zn?zn.value:zn.textContent,Ga=!0)),Re=Ls(K,$e),0<Re.length&&($e=new Bu($e,e,null,n,ue),pe.push({event:$e,listeners:Re}),Me?$e.data=Me:(Me=Yu(n),Me!==null&&($e.data=Me)))),(Me=yg?vg(e,n):bg(e,n))&&($e=Ls(K,"onBeforeInput"),0<$e.length&&(Re=new Bu("onBeforeInput","beforeinput",null,n,ue),pe.push({event:Re,listeners:$e}),Re.data=Me)),uy(pe,e,K,n,ue)}Dp(pe,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ls(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=Dr(e,n),r!=null&&a.unshift(ui(e,r,l)),r=Dr(e,t),r!=null&&a.push(ui(e,r,l))),e.tag===3)return a;e=e.return}return[]}function hy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jp(e,t,n,a,r){for(var l=t._reactName,y=[];n!==null&&n!==a;){var N=n,F=N.alternate,K=N.stateNode;if(N=N.tag,F!==null&&F===a)break;N!==5&&N!==26&&N!==27||K===null||(F=K,r?(K=Dr(n,l),K!=null&&y.unshift(ui(n,K,F))):r||(K=Dr(n,l),K!=null&&y.push(ui(n,K,F)))),n=n.return}y.length!==0&&e.push({event:t,listeners:y})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function kp(e){return(typeof e=="string"?e:""+e).replace(my,`
`).replace(gy,"")}function Lp(e,t){return t=kp(t),kp(e)===t}function Ke(e,t,n,a,r,l){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Va(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Va(e,""+a);break;case"className":Fi(e,"class",a);break;case"tabIndex":Fi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(e,n,a);break;case"style":ku(e,a,l);break;case"data":if(t!=="object"){Fi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Ke(e,t,"name",r.name,r,null),Ke(e,t,"formEncType",r.formEncType,r,null),Ke(e,t,"formMethod",r.formMethod,r,null),Ke(e,t,"formTarget",r.formTarget,r,null)):(Ke(e,t,"encType",r.encType,r,null),Ke(e,t,"method",r.method,r,null),Ke(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Pi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=yn);break;case"onScroll":a!=null&&Pe("scroll",e);break;case"onScrollEnd":a!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Pi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),Ui(e,"popover",a);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ui(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Hm.get(n)||n,Ui(e,n,a))}}function mc(e,t,n,a,r,l){switch(n){case"style":ku(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Va(e,a):(typeof a=="number"||typeof a=="bigint")&&Va(e,""+a);break;case"onScroll":a!=null&&Pe("scroll",e);break;case"onScrollEnd":a!=null&&Pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),l=e[It]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,r),typeof a=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ui(e,n,a)}}}function At(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var a=!1,r=!1,l;for(l in n)if(n.hasOwnProperty(l)){var y=n[l];if(y!=null)switch(l){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,l,y,n,null)}}r&&Ke(e,t,"srcSet",n.srcSet,n,null),a&&Ke(e,t,"src",n.src,n,null);return;case"input":Pe("invalid",e);var N=l=y=r=null,F=null,K=null;for(a in n)if(n.hasOwnProperty(a)){var ue=n[a];if(ue!=null)switch(a){case"name":r=ue;break;case"type":y=ue;break;case"checked":F=ue;break;case"defaultChecked":K=ue;break;case"value":l=ue;break;case"defaultValue":N=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(u(137,t));break;default:Ke(e,t,a,ue,n,null)}}Iu(e,l,N,F,K,y,r,!1);return;case"select":Pe("invalid",e),a=y=l=null;for(r in n)if(n.hasOwnProperty(r)&&(N=n[r],N!=null))switch(r){case"value":l=N;break;case"defaultValue":y=N;break;case"multiple":a=N;default:Ke(e,t,r,N,n,null)}t=l,n=y,e.multiple=!!a,t!=null?Pa(e,!!a,t,!1):n!=null&&Pa(e,!!a,n,!0);return;case"textarea":Pe("invalid",e),l=r=a=null;for(y in n)if(n.hasOwnProperty(y)&&(N=n[y],N!=null))switch(y){case"value":a=N;break;case"defaultValue":r=N;break;case"children":l=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(91));break;default:Ke(e,t,y,N,n,null)}Ou(e,a,r,l);return;case"option":for(F in n)if(n.hasOwnProperty(F)&&(a=n[F],a!=null))switch(F){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ke(e,t,F,a,n,null)}return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(a=0;a<ci.length;a++)Pe(ci[a],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in n)if(n.hasOwnProperty(K)&&(a=n[K],a!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,K,a,n,null)}return;default:if(Cl(t)){for(ue in n)n.hasOwnProperty(ue)&&(a=n[ue],a!==void 0&&mc(e,t,ue,a,n,void 0));return}}for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!=null&&Ke(e,t,N,a,n,null))}function yy(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,y=null,N=null,F=null,K=null,ue=null;for(ie in n){var pe=n[ie];if(n.hasOwnProperty(ie)&&pe!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":F=pe;default:a.hasOwnProperty(ie)||Ke(e,t,ie,null,a,pe)}}for(var te in a){var ie=a[te];if(pe=n[te],a.hasOwnProperty(te)&&(ie!=null||pe!=null))switch(te){case"type":l=ie;break;case"name":r=ie;break;case"checked":K=ie;break;case"defaultChecked":ue=ie;break;case"value":y=ie;break;case"defaultValue":N=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(u(137,t));break;default:ie!==pe&&Ke(e,t,te,ie,a,pe)}}Rl(e,y,N,F,K,ue,l,r);return;case"select":ie=y=N=te=null;for(l in n)if(F=n[l],n.hasOwnProperty(l)&&F!=null)switch(l){case"value":break;case"multiple":ie=F;default:a.hasOwnProperty(l)||Ke(e,t,l,null,a,F)}for(r in a)if(l=a[r],F=n[r],a.hasOwnProperty(r)&&(l!=null||F!=null))switch(r){case"value":te=l;break;case"defaultValue":N=l;break;case"multiple":y=l;default:l!==F&&Ke(e,t,r,l,a,F)}t=N,n=y,a=ie,te!=null?Pa(e,!!n,te,!1):!!a!=!!n&&(t!=null?Pa(e,!!n,t,!0):Pa(e,!!n,n?[]:"",!1));return;case"textarea":ie=te=null;for(N in n)if(r=n[N],n.hasOwnProperty(N)&&r!=null&&!a.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ke(e,t,N,null,a,r)}for(y in a)if(r=a[y],l=n[y],a.hasOwnProperty(y)&&(r!=null||l!=null))switch(y){case"value":te=r;break;case"defaultValue":ie=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==l&&Ke(e,t,y,r,a,l)}Du(e,te,ie);return;case"option":for(var Ae in n)if(te=n[Ae],n.hasOwnProperty(Ae)&&te!=null&&!a.hasOwnProperty(Ae))switch(Ae){case"selected":e.selected=!1;break;default:Ke(e,t,Ae,null,a,te)}for(F in a)if(te=a[F],ie=n[F],a.hasOwnProperty(F)&&te!==ie&&(te!=null||ie!=null))switch(F){case"selected":e.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Ke(e,t,F,te,a,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in n)te=n[De],n.hasOwnProperty(De)&&te!=null&&!a.hasOwnProperty(De)&&Ke(e,t,De,null,a,te);for(K in a)if(te=a[K],ie=n[K],a.hasOwnProperty(K)&&te!==ie&&(te!=null||ie!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(u(137,t));break;default:Ke(e,t,K,te,a,ie)}return;default:if(Cl(t)){for(var Je in n)te=n[Je],n.hasOwnProperty(Je)&&te!==void 0&&!a.hasOwnProperty(Je)&&mc(e,t,Je,void 0,a,te);for(ue in a)te=a[ue],ie=n[ue],!a.hasOwnProperty(ue)||te===ie||te===void 0&&ie===void 0||mc(e,t,ue,te,a,ie);return}}for(var Q in n)te=n[Q],n.hasOwnProperty(Q)&&te!=null&&!a.hasOwnProperty(Q)&&Ke(e,t,Q,null,a,te);for(pe in a)te=a[pe],ie=n[pe],!a.hasOwnProperty(pe)||te===ie||te==null&&ie==null||Ke(e,t,pe,te,a,ie)}function Mp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],l=r.transferSize,y=r.initiatorType,N=r.duration;if(l&&N&&Mp(y)){for(y=0,N=r.responseEnd,a+=1;a<n.length;a++){var F=n[a],K=F.startTime;if(K>N)break;var ue=F.transferSize,pe=F.initiatorType;ue&&Mp(pe)&&(F=F.responseEnd,y+=ue*(F<N?1:(N-K)/(F-K)))}if(--a,t+=8*(l+y)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gc=null,yc=null;function Ms(e){return e.nodeType===9?e:e.ownerDocument}function zp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Up(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=null;function by(){var e=window.event;return e&&e.type==="popstate"?e===bc?!1:(bc=e,!0):(bc=null,!1)}var Fp=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(e){return Bp.resolve(null).then(e).catch(Ey)}:Fp;function Ey(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function Pp(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),br(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")di(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,di(n);for(var l=n.firstChild;l;){var y=l.nextSibling,N=l.nodeName;l[Nr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=y}}else n==="body"&&di(e.ownerDocument.body);n=r}while(n);br(t)}function Vp(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function xc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":xc(n),Al(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function wy(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Nr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function Ay(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function $p(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=nn(e.nextSibling),e===null))return null;return e}function Sc(e){return e.data==="$?"||e.data==="$~"}function Ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ty(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var wc=null;function Hp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return nn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Gp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Yp(e,t,n){switch(t=Ms(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function di(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Al(e)}var an=new Map,qp=new Set;function zs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jn=k.d;k.d={f:Ry,r:_y,D:Cy,C:Ny,L:Iy,m:Dy,X:jy,S:Oy,M:ky};function Ry(){var e=jn.f(),t=Cs();return e||t}function _y(e){var t=Ua(e);t!==null&&t.tag===5&&t.type==="form"?uf(t):jn.r(e)}var gr=typeof document>"u"?null:document;function Xp(e,t,n){var a=gr;if(a&&typeof t=="string"&&t){var r=Qt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),qp.has(r)||(qp.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),At(t,"link",e),yt(t),a.head.appendChild(t)))}}function Cy(e){jn.D(e),Xp("dns-prefetch",e,null)}function Ny(e,t){jn.C(e,t),Xp("preconnect",e,t)}function Iy(e,t,n){jn.L(e,t,n);var a=gr;if(a&&e&&t){var r='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Qt(n.imageSizes)+'"]')):r+='[href="'+Qt(e)+'"]';var l=r;switch(t){case"style":l=yr(e);break;case"script":l=vr(e)}an.has(l)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),an.set(l,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(fi(l))||t==="script"&&a.querySelector(pi(l))||(t=a.createElement("link"),At(t,"link",e),yt(t),a.head.appendChild(t)))}}function Dy(e,t){jn.m(e,t);var n=gr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Qt(a)+'"][href="'+Qt(e)+'"]',l=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=vr(e)}if(!an.has(l)&&(e=R({rel:"modulepreload",href:e},t),an.set(l,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(pi(l)))return}a=n.createElement("link"),At(a,"link",e),yt(a),n.head.appendChild(a)}}}function Oy(e,t,n){jn.S(e,t,n);var a=gr;if(a&&e){var r=Fa(a).hoistableStyles,l=yr(e);t=t||"default";var y=r.get(l);if(!y){var N={loading:0,preload:null};if(y=a.querySelector(fi(l)))N.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=an.get(l))&&Ac(e,n);var F=y=a.createElement("link");yt(F),At(F,"link",e),F._p=new Promise(function(K,ue){F.onload=K,F.onerror=ue}),F.addEventListener("load",function(){N.loading|=1}),F.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Us(y,t,a)}y={type:"stylesheet",instance:y,count:1,state:N},r.set(l,y)}}}function jy(e,t){jn.X(e,t);var n=gr;if(n&&e){var a=Fa(n).hoistableScripts,r=vr(e),l=a.get(r);l||(l=n.querySelector(pi(r)),l||(e=R({src:e,async:!0},t),(t=an.get(r))&&Tc(e,t),l=n.createElement("script"),yt(l),At(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function ky(e,t){jn.M(e,t);var n=gr;if(n&&e){var a=Fa(n).hoistableScripts,r=vr(e),l=a.get(r);l||(l=n.querySelector(pi(r)),l||(e=R({src:e,async:!0,type:"module"},t),(t=an.get(r))&&Tc(e,t),l=n.createElement("script"),yt(l),At(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function Qp(e,t,n,a){var r=(r=Ee.current)?zs(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=yr(n.href),n=Fa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=yr(n.href);var l=Fa(r).hoistableStyles,y=l.get(e);if(y||(r=r.ownerDocument||r,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,y),(l=r.querySelector(fi(e)))&&!l._p&&(y.instance=l,y.state.loading=5),an.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},an.set(e,n),l||Ly(r,e,n,y.state))),t&&a===null)throw Error(u(528,""));return y}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vr(n),n=Fa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function yr(e){return'href="'+Qt(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function Wp(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Ly(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),At(t,"link",n),yt(t),e.head.appendChild(t))}function vr(e){return'[src="'+Qt(e)+'"]'}function pi(e){return"script[async]"+e}function Zp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Qt(n.href)+'"]');if(a)return t.instance=a,yt(a),a;var r=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),yt(a),At(a,"style",r),Us(a,n.precedence,e),t.instance=a;case"stylesheet":r=yr(n.href);var l=e.querySelector(fi(r));if(l)return t.state.loading|=4,t.instance=l,yt(l),l;a=Wp(n),(r=an.get(r))&&Ac(a,r),l=(e.ownerDocument||e).createElement("link"),yt(l);var y=l;return y._p=new Promise(function(N,F){y.onload=N,y.onerror=F}),At(l,"link",a),t.state.loading|=4,Us(l,n.precedence,e),t.instance=l;case"script":return l=vr(n.src),(r=e.querySelector(pi(l)))?(t.instance=r,yt(r),r):(a=n,(r=an.get(l))&&(a=R({},n),Tc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),yt(r),At(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Us(a,n.precedence,e));return t.instance}function Us(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,l=r,y=0;y<a.length;y++){var N=a[y];if(N.dataset.precedence===t)l=N;else if(l!==r)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fs=null;function Kp(e,t,n){if(Fs===null){var a=new Map,r=Fs=new Map;r.set(n,a)}else r=Fs,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var l=n[r];if(!(l[Nr]||l[xt]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var y=l.getAttribute(t)||"";y=e+y;var N=a.get(y);N?N.push(l):a.set(y,[l])}}return a}function Jp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function My(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function eh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zy(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=yr(a.href),l=t.querySelector(fi(r));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Bs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,yt(l);return}l=t.ownerDocument||t,a=Wp(a),(r=an.get(r))&&Ac(a,r),l=l.createElement("link"),yt(l);var y=l;y._p=new Promise(function(N,F){y.onload=N,y.onerror=F}),At(l,"link",a),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Bs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Rc=0;function Uy(e,t){return e.stylesheets&&e.count===0&&Vs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Rc===0&&(Rc=62500*vy());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vs(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Rc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Bs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ps=null;function Vs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ps=new Map,t.forEach(Fy,e),Ps=null,Bs.call(e))}function Fy(e,t){if(!(t.state.loading&4)){var n=Ps.get(e);if(n)var a=n.get(null);else{n=new Map,Ps.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var y=r[l];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(n.set(y.dataset.precedence,y),a=y)}a&&n.set(null,a)}r=t.instance,y=r.getAttribute("data-precedence"),l=n.get(y)||a,l===a&&n.set(null,r),n.set(y,r),this.count++,a=Bs.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),l?l.parentNode.insertBefore(r,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:z,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function By(e,t,n,a,r,l,y,N,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.hiddenUpdates=xl(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function th(e,t,n,a,r,l,y,N,F,K,ue,pe){return e=new By(e,t,n,y,F,K,ue,pe,N),t=1,l===!0&&(t|=24),l=Ft(3,null,null,t),e.current=l,l.stateNode=e,t=ro(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:t},oo(l),e}function nh(e){return e?(e=Qa,e):Qa}function ah(e,t,n,a,r,l){r=nh(r),a.context===null?a.context=r:a.pendingContext=r,a=$n(t),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=Hn(e,a,t),n!==null&&(Mt(n,e,t),Yr(n,e,t))}function rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _c(e,t){rh(e,t),(e=e.alternate)&&rh(e,t)}function ih(e){if(e.tag===13||e.tag===31){var t=va(e,67108864);t!==null&&Mt(t,e,67108864),_c(e,67108864)}}function sh(e){if(e.tag===13||e.tag===31){var t=Ht();t=Sl(t);var n=va(e,t);n!==null&&Mt(n,e,t),_c(e,t)}}var $s=!0;function Py(e,t,n,a){var r=I.T;I.T=null;var l=k.p;try{k.p=2,Cc(e,t,n,a)}finally{k.p=l,I.T=r}}function Vy(e,t,n,a){var r=I.T;I.T=null;var l=k.p;try{k.p=8,Cc(e,t,n,a)}finally{k.p=l,I.T=r}}function Cc(e,t,n,a){if($s){var r=Nc(a);if(r===null)hc(e,t,a,Hs,n),oh(e,a);else if(Hy(r,e,t,n,a))a.stopPropagation();else if(oh(e,a),t&4&&-1<$y.indexOf(e)){for(;r!==null;){var l=Ua(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var y=qt(l.pendingLanes);if(y!==0){var N=l;for(N.pendingLanes|=2,N.entangledLanes|=2;y;){var F=1<<31-it(y);N.entanglements[1]|=F,y&=~F}mn(l),(qe&6)===0&&(Rs=Se()+500,oi(0))}}break;case 31:case 13:N=va(l,2),N!==null&&Mt(N,l,2),Cs(),_c(l,2)}if(l=Nc(a),l===null&&hc(e,t,a,Hs,n),l===r)break;r=l}r!==null&&a.stopPropagation()}else hc(e,t,a,null,n)}}function Nc(e){return e=Il(e),Ic(e)}var Hs=null;function Ic(e){if(Hs=null,e=za(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hs=e,null}function lh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case Ne:return 2;case Xe:return 8;case Ue:case Nt:return 32;case Ln:return 268435456;default:return 32}default:return 32}}var Dc=!1,ta=null,na=null,aa=null,mi=new Map,gi=new Map,ra=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oh(e,t){switch(e){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":aa=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function yi(e,t,n,a,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[r]},t!==null&&(t=Ua(t),t!==null&&ih(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Hy(e,t,n,a,r){switch(t){case"focusin":return ta=yi(ta,e,t,n,a,r),!0;case"dragenter":return na=yi(na,e,t,n,a,r),!0;case"mouseover":return aa=yi(aa,e,t,n,a,r),!0;case"pointerover":var l=r.pointerId;return mi.set(l,yi(mi.get(l)||null,e,t,n,a,r)),!0;case"gotpointercapture":return l=r.pointerId,gi.set(l,yi(gi.get(l)||null,e,t,n,a,r)),!0}return!1}function ch(e){var t=za(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){sh(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){sh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Nl=a,n.target.dispatchEvent(a),Nl=null}else return t=Ua(n),t!==null&&ih(t),e.blockedOn=n,!1;t.shift()}return!0}function uh(e,t,n){Gs(e)&&n.delete(t)}function Gy(){Dc=!1,ta!==null&&Gs(ta)&&(ta=null),na!==null&&Gs(na)&&(na=null),aa!==null&&Gs(aa)&&(aa=null),mi.forEach(uh),gi.forEach(uh)}function Ys(e,t){e.blockedOn===t&&(e.blockedOn=null,Dc||(Dc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Gy)))}var qs=null;function dh(e){qs!==e&&(qs=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){qs===e&&(qs=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Ic(a||n)===null)continue;break}var l=Ua(n);l!==null&&(e.splice(t,3),t-=3,No(l,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function br(e){function t(F){return Ys(F,e)}ta!==null&&Ys(ta,e),na!==null&&Ys(na,e),aa!==null&&Ys(aa,e),mi.forEach(t),gi.forEach(t);for(var n=0;n<ra.length;n++){var a=ra[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)ch(n),n.blockedOn===null&&ra.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],l=n[a+1],y=r[It]||null;if(typeof l=="function")y||dh(n);else if(y){var N=null;if(l&&l.hasAttribute("formAction")){if(r=l,y=l[It]||null)N=y.formAction;else if(Ic(r)!==null)continue}else N=y.action;typeof N=="function"?n[a+1]=N:(n.splice(a,3),a-=3),dh(n)}}}function fh(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(y){return r=y})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Oc(e){this._internalRoot=e}Xs.prototype.render=Oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Ht();ah(n,a,e,t,null,null)},Xs.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ah(e.current,2,null,e,null,null),Cs(),t[Ma]=null}};function Xs(e){this._internalRoot=e}Xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Su();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ra.length&&t!==0&&t<ra[n].priority;n++);ra.splice(n,0,e),n===0&&ch(e)}};var ph=o.version;if(ph!=="19.2.1")throw Error(u(527,ph,"19.2.1"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=p(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Yy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{et=Qs.inject(Yy),gt=Qs}catch{}}return bi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",r=xf,l=Sf,y=Ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=th(e,1,!1,null,null,n,a,null,r,l,y,fh),e[Ma]=t.current,pc(e),new Oc(t)},bi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,r="",l=xf,y=Sf,N=Ef,F=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(y=n.onCaughtError),n.onRecoverableError!==void 0&&(N=n.onRecoverableError),n.formState!==void 0&&(F=n.formState)),t=th(e,1,!0,t,n??null,a,r,F,l,y,N,fh),t.context=nh(null),n=t.current,a=Ht(),a=Sl(a),r=$n(a),r.callback=null,Hn(n,r,a),n=a,t.current.lanes=n,Cr(t,n),mn(t),e[Ma]=t.current,pc(e),new Xs(t)},bi.version="19.2.1",bi}var wh;function a0(){if(wh)return Lc.exports;wh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),Lc.exports=n0(),Lc.exports}var r0=a0();const i0=iu(r0);var ve=(c=>(c.SETUP="ICISsetup",c.BUILDER="ICISbuilder",c.REVIEWER="ICISreviewer",c.SUPERVISOR="ICISsupervisor",c.REVISER="ICISreviser",c.FINALIZE="ICISfinalize",c))(ve||{}),Oe=(c=>(c.PENDING="pending",c.ACTIVE="active",c.COMPLETED="completed",c.ERROR="error",c.SKIPPED="skipped",c))(Oe||{}),xr=(c=>(c.SIMULATION="Simulation & Computational Modeling",c.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",c.SECONDARY_DATA="Secondary data analysis",c.EXPERIMENTAL="Laboratory & field experiments",c.SURVEY="Survey research",c))(xr||{}),Fe=(c=>(c.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",c.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",c.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",c.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",c.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",c.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",c.STEP5_EXECUTION="Step 5: Experiment Execution",c.STEP6_VISUALIZATION="Step 6: Results Visualization",c.STEP7_ANALYSIS="Step 7: Results Analysis",c.STEP8_PAPER_WRITING="Step 8: Paper Writing",c.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",c))(Fe||{});function s0(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const Ah={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:s0(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]};var l0=(c=>(c.VERIFIED="VERIFIED",c.PARTIAL="PARTIAL",c.UNVERIFIED="UNVERIFIED",c.REJECTED="REJECTED",c.DISCOVERED="DISCOVERED",c))(l0||{});const o0="/icis",c0={[ve.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText",promptFile:"ICISsetup.txt"},[ve.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer",promptFile:"ICISbuilder.txt"},[ve.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search",promptFile:"ICISreview.txt"},[ve.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck",promptFile:"ICISsupervisor.txt"},[ve.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3",promptFile:"ICISreviser.txt"},[ve.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send",promptFile:"ICISfinalize.txt"}},$h={[Fe.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[Fe.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[Fe.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[Fe.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[Fe.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[Fe.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[Fe.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[Fe.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[Fe.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[Fe.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[Fe.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};xr.SIMULATION+"",xr.ANALYTICAL+"",xr.SECONDARY_DATA+"",xr.EXPERIMENTAL+"",xr.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d0=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,s,u)=>u?u.toUpperCase():s.toLowerCase()),Th=c=>{const o=d0(c);return o.charAt(0).toUpperCase()+o.slice(1)},Hh=(...c)=>c.filter((o,s,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===s).join(" ").trim(),f0=c=>{for(const o in c)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=fe.forwardRef(({color:c="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:d="",children:f,iconNode:g,...h},x)=>fe.createElement("svg",{ref:x,...p0,width:o,height:o,stroke:c,strokeWidth:u?Number(s)*24/Number(o):s,className:Hh("lucide",d),...!f&&!f0(h)&&{"aria-hidden":"true"},...h},[...g.map(([p,T])=>fe.createElement(p,T)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(c,o)=>{const s=fe.forwardRef(({className:u,...d},f)=>fe.createElement(h0,{ref:f,iconNode:o,className:Hh(`lucide-${u0(Th(c))}`,`lucide-${c}`,u),...d}));return s.displayName=Th(c),s};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],g0=_e("activity",m0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],v0=_e("archive",y0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],x0=_e("arrow-left",b0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],E0=_e("atom",S0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],A0=_e("book-marked",w0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Gh=_e("book-open",T0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],_0=_e("briefcase",R0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],qc=_e("chart-column",C0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zt=_e("check",N0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ol=_e("chevron-down",I0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Yh=_e("chevron-right",D0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Da=_e("circle-alert",O0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Rh=_e("circle-check-big",j0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xc=_e("circle-check",k0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],_h=_e("circle-play",L0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],qh=_e("circle-stop",M0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ch=_e("circle",z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],F0=_e("clock",U0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],P0=_e("copy",B0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],$0=_e("cpu",V0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],cl=_e("download",H0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Xh=_e("ellipsis-vertical",G0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],wi=_e("external-link",Y0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Qc=_e("eye",q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],Q0=_e("fast-forward",X0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ii=_e("file-text",W0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],K0=_e("flask-conical",Z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ev=_e("folder-plus",J0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],nv=_e("funnel",tv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],rv=_e("globe",av);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],sv=_e("hammer",iv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ov=_e("heart",lv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],uv=_e("leaf",cv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],fv=_e("link",dv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Nh=_e("loader-circle",pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],mv=_e("loader",hv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],yv=_e("lock",gv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],bv=_e("mic",vv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M5 12h14",key:"1ays0h"}]],Sv=_e("minus",xv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],wv=_e("newspaper",Ev);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Qh=_e("pen-line",Av);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Wc=_e("play",Tv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],cn=_e("refresh-cw",Rv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],nl=_e("rotate-ccw",_v);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Nv=_e("save",Cv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ul=_e("search",Iv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],lu=_e("send",Dv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Ih=_e("skip-forward",Ov);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Dh=_e("star",jv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Lv=_e("target",kv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],zv=_e("trash-2",Mv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Fv=_e("trending-down",Uv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Wh=_e("trending-up",Bv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Zc=_e("triangle-alert",Pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ou=_e("upload",Vv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Hv=_e("user-check",$v);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Yv=_e("user",Gv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],dl=_e("users",qv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zh=_e("x",Xv),Qv=({currentStage:c,currentBuilderStep:o,stagesState:s,isPartialPaper:u=!1,currentRound:d=1,isProcessing:f=!1,onStageClick:g,onStageAction:h,onNewCase:x,onNewInterview:p,onPaperToInterview:T,onResearchAdmin:R,paperMode:_="draft",onPaperModeChange:v,sourceType:A="transcript-upload",selectedVenueId:m="icis"})=>{const[S,w]=fe.useState(null),[O,z]=fe.useState(null),B=fe.useRef(null),j=()=>{switch(A){case"voice-interview":return"Build paper from research interview";case"transcript-upload":return"Build paper from interview transcript";case"paper":return"Build paper based on previous paper";default:return"Build paper from research interview"}};fe.useEffect(()=>{const I=k=>{B.current&&!B.current.contains(k.target)&&w(null)};return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]);const H=(I,k)=>{const J=[];switch(k){case Oe.ACTIVE:J.push({action:"abort",label:"Abort",icon:i.jsx(qh,{size:14})});break;case Oe.COMPLETED:J.push({action:"restart",label:"Restart",icon:i.jsx(nl,{size:14})});break;case Oe.ERROR:J.push({action:"restart",label:"Retry",icon:i.jsx(nl,{size:14})});break;case Oe.PENDING:const q=[ve.SETUP,ve.BUILDER,ve.REVIEWER,ve.SUPERVISOR,ve.REVISER,ve.FINALIZE],me=q.indexOf(I),C=me>0?q[me-1]:null,L=!C||s[C]===Oe.COMPLETED;J.push({action:"start",label:"Start",icon:i.jsx(Wc,{size:14}),disabled:!L||f}),I!==ve.SETUP&&I!==ve.FINALIZE&&J.push({action:"skip",label:"Skip",icon:i.jsx(Q0,{size:14}),disabled:f});break;case Oe.SKIPPED:J.push({action:"restart",label:"Unskip & Run",icon:i.jsx(nl,{size:14})});break}return J},P=[ve.SETUP,ve.BUILDER,ve.REVIEWER,ve.SUPERVISOR,ve.REVISER,ve.FINALIZE],G={[ve.SETUP]:i.jsx(Ii,{size:16}),[ve.BUILDER]:i.jsx(sv,{size:16}),[ve.REVIEWER]:i.jsx(ul,{size:16}),[ve.SUPERVISOR]:i.jsx(Hv,{size:16}),[ve.REVISER]:i.jsx(Qh,{size:16}),[ve.FINALIZE]:i.jsx(lu,{size:16})},V=I=>{switch(I){case Oe.COMPLETED:return i.jsx(Xc,{size:16,className:"text-emerald-500"});case Oe.ACTIVE:return i.jsx(_h,{size:16,className:"text-red-500 animate-pulse"});case Oe.ERROR:return i.jsx(Da,{size:16,className:"text-red-500"});case Oe.SKIPPED:return i.jsx(Ih,{size:16,className:"text-slate-400"});default:return i.jsx(Ch,{size:16,className:"text-slate-500"})}},oe=[Fe.STEP1_INTERVIEW_ANALYSIS,Fe.STEP1_5_DATA_ASSESSMENT,Fe.STEP2_RESEARCH_PLANNING,Fe.STEP2_FINAL_METADATA,Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS,Fe.STEP8_PAPER_WRITING,Fe.STEP9_FINAL_SUBMISSION],ce=I=>u?[Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS].includes(I):!1,D=I=>{if(ce(I))return"skipped";const k=oe.indexOf(I),J=o?oe.indexOf(o):-1;return I===o?"active":J>k?"completed":"pending"},Y=c===ve.BUILDER||s[ve.BUILDER]===Oe.ACTIVE,E=O!==null?O:Y,W=I=>{I.stopPropagation(),z(k=>k===null?!Y:!k)};return i.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[i.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[i.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"Automated Scientific Discovery"]}),i.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"AI-Powered Research Paper Authoring"})]}),d>1&&i.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),i.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",d]})]})}),u&&i.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:i.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[i.jsx(Da,{size:12}),i.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),i.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[i.jsx("button",{onClick:()=>v==null?void 0:v("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${_==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),i.jsx("button",{onClick:()=>v==null?void 0:v("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${_==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),x&&i.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&x()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),R&&i.jsxs("button",{onClick:R,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[i.jsx(dl,{size:16}),"Research Admin"]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:P.map(I=>{const k=s[I],J=k===Oe.ACTIVE,q=k===Oe.COMPLETED,me=k===Oe.SKIPPED,C=c===I,L=c0[I],le=H(I,k);return i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${J?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":q?"border-emerald-500/50 bg-slate-900/50":me?"border-slate-700 bg-slate-900/30 opacity-60":C?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>g(I),children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:`${J?"text-red-400":q?"text-emerald-400":"text-slate-400"}`,children:G[I]}),i.jsx("span",{className:`font-medium text-sm ${J||C?"text-white":""}`,children:L.label})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[I===ve.BUILDER&&i.jsx("button",{onClick:W,className:"p-0.5 hover:bg-slate-700 rounded",children:E?i.jsx(ol,{size:14}):i.jsx(Yh,{size:14})}),V(k),h&&le.length>0&&i.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:ne=>{ne.stopPropagation(),w(S===I?null:I)},children:i.jsx(Xh,{size:14,className:"text-slate-400"})})]})]}),i.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:I===ve.BUILDER?j():L.description}),L.promptFile&&i.jsx("div",{className:"mt-2 pl-6",children:i.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:L.promptFile})})]}),S===I&&h&&i.jsx("div",{ref:B,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:le.map(({action:ne,label:se,icon:Ee,disabled:Ce})=>i.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${Ce?"text-slate-600 cursor-not-allowed":ne==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:Te=>{Te.stopPropagation(),Ce||(h(I,ne),w(null))},disabled:Ce,children:[Ee,se]},ne))}),I===ve.BUILDER&&E&&i.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:oe.map(ne=>{const se=$h[ne],Ee=D(ne);return i.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${Ee==="active"?"bg-red-900/30 text-red-300":Ee==="completed"?"text-emerald-400":Ee==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[Ee==="active"&&i.jsx(_h,{size:12,className:"animate-pulse"}),Ee==="completed"&&i.jsx(Xc,{size:12}),Ee==="skipped"&&i.jsx(Ih,{size:12}),Ee==="pending"&&i.jsx(Ch,{size:12}),i.jsxs("span",{children:[se.label,": ",se.description]})]},ne)})})]},I)})}),i.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:i.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[i.jsxs("p",{className:"flex justify-between",children:[i.jsx("span",{children:"Directory:"}),i.jsxs("span",{className:"text-slate-400",children:["/",m]})]}),i.jsxs("p",{className:"flex justify-between",children:[i.jsx("span",{children:"Paper Version:"}),i.jsxs("span",{className:"text-slate-400",children:["v",d]})]})]})})]})},Ri="icis_files_";class al extends Error{constructor(o,s,u){super(s),this.type=o,this.userMessage=s,this.technicalDetails=u,this.name="StorageError"}}function Kh(){try{const c="__storage_test__";return localStorage.setItem(c,c),localStorage.removeItem(c),!0}catch{return!1}}function wr(c,o){var u;if(!Kh())throw new al("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const s=Ri+c.replace(/\\/g,"/");try{localStorage.setItem(s,o),console.log(`File written: ${c}`)}catch(d){const f=d;throw f.name==="QuotaExceededError"||(u=f.message)!=null&&u.includes("quota")?new al("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",f.message):new al("WRITE_ERROR",`Failed to save file: ${c}`,f.message)}}function fl(c){if(!Kh())return console.warn("localStorage unavailable, returning null for read"),null;const o=Ri+c.replace(/\\/g,"/");try{return localStorage.getItem(o)}catch(s){const u=s;throw console.error(`Error reading file ${c}:`,u),new al("READ_ERROR",`Failed to read file: ${c}`,u.message)}}function Wv(c){const o=[],s=new RegExp(c.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let u=0;u<localStorage.length;u++){const d=localStorage.key(u);if(d&&d.startsWith(Ri)){const f=d.substring(Ri.length);s.test(f)&&o.push(f)}}return o.sort()}function Jh(c){const o=`icis/Data/oversight_v${c.version}.txt`,s=Zv(c);return wr(o,s),wr(o+".json",JSON.stringify(c,null,2)),o}function Zv(c){const o=[];o.push(`ID=${c.paperId}`),o.push(`Version: ${c.version}`),o.push(`Timestamp: ${c.timestamp}`),o.push(""),o.push("================================================================================"),o.push("                     OVERSIGHT DASHBOARD"),o.push("================================================================================"),o.push(""),o.push("TABLE 1 - Review Scores Progression:"),o.push("------------------------------------------------------------------------"),o.push("| Criteria              | Score | Comment                              |"),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| Novelty               | ${c.reviewScores.novelty}     | ${c.reviewComments.novelty.substring(0,36).padEnd(36)} |`),o.push(`| Significance          | ${c.reviewScores.significance}     | ${c.reviewComments.significance.substring(0,36).padEnd(36)} |`),o.push(`| Methodological Rigor  | ${c.reviewScores.methodologicalRigor}     | ${c.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),o.push(`| Clarity               | ${c.reviewScores.clarity}     | ${c.reviewComments.clarity.substring(0,36).padEnd(36)} |`),o.push(`| Relevance             | ${c.reviewScores.relevance}     | ${c.reviewComments.relevance.substring(0,36).padEnd(36)} |`),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| AVERAGE               | ${c.averageScore.toFixed(1)}   |                                      |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 2 - Error Counts:"),o.push("------------------------------------------------------------------------"),o.push("| Category        | Count | Details                                  |"),o.push("|-----------------|-------|------------------------------------------|");const s=c.errorDetails.majorErrors.length>0?c.errorDetails.majorErrors[0].substring(0,40):"None",u=c.errorDetails.minorErrors.length>0?c.errorDetails.minorErrors[0].substring(0,40):"None";if(o.push(`| Major Errors    | ${String(c.errorCounts.majorErrors).padStart(5)} | ${s.padEnd(40)} |`),o.push(`| Minor Errors    | ${String(c.errorCounts.minorErrors).padStart(5)} | ${u.padEnd(40)} |`),o.push("|-----------------|-------|------------------------------------------|"),o.push(`| TOTAL           | ${String(c.errorCounts.majorErrors+c.errorCounts.minorErrors).padStart(5)} |                                          |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),o.push("------------------------------------------------------------------------"),o.push("| Dimension       | Score | Rationale                               |"),o.push("|-----------------|-------|-----------------------------------------|"),o.push(`| Reliability     | ${c.trustworthiness.reliability}     | ${c.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),o.push(`| Benevolence     | ${c.trustworthiness.benevolence}     | ${c.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),o.push(`| Goal Alignment  | ${c.trustworthiness.goalAlignment}     | ${c.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("CRITICAL ALERTS:"),o.push("------------------------------------------------------------------------"),c.criticalAlerts.length===0)o.push("None - paper is progressing well");else for(const d of c.criticalAlerts)o.push(`CRITICAL ALERT ${d.number}: ${d.title} (BLOCKING ISSUE)`),o.push(`  Status: ${d.status}`),o.push(`  Impact: ${d.impact}`),o.push(`  Details: ${d.details}`),o.push(`  Action Required: ${d.actionRequired}`),o.push(`  Consequence if Unfixed: ${d.consequence}`),o.push("");return o.push("------------------------------------------------------------------------"),o.push(""),o.push("================================================================================"),o.join(`
`)}function cu(c){const o=`icis/Data/feedback_v${c.version}.txt`,s=[];if(s.push(`ID=${c.paperId}`),s.push(`Version: ${c.version}`),s.push(`Timestamp: ${c.timestamp}`),s.push(""),s.push("================================================================================"),s.push("                     CONSTRUCTIVE FEEDBACK"),s.push("================================================================================"),s.push(""),s.push("## Research Question and Contribution"),s.push(c.researchQuestion),s.push(""),s.push("## Method"),s.push(c.method),s.push(""),s.push("## Potential Impact"),s.push(c.potentialImpact),s.push(""),s.push("## Writing Quality"),s.push(c.writing),s.push(""),s.push("## Major Concerns"),c.majorConcerns.forEach((d,f)=>{s.push(`${f+1}. ${d}`)}),s.push(""),s.push("## Minor Corrections"),c.minorCorrections.forEach((d,f)=>{s.push(`${f+1}. ${d}`)}),s.push(""),s.push("## Overall Assessment"),s.push(c.overallAssessment),s.push(""),c.supervisorDirectives&&c.supervisorDirectives.length>0){s.push("================================================================================"),s.push("                     SUPERVISOR DIRECTIVES"),s.push("================================================================================");for(const d of c.supervisorDirectives)s.push(""),s.push(`Cycle ${d.cycle} - ${d.timestamp}`),s.push("------------------------------------------------------------------------"),s.push(d.directives)}s.push(""),s.push("================================================================================");const u=s.join(`
`);return wr(o,u),wr(o+".json",JSON.stringify(c,null,2)),o}function rl(c){const o=`icis/Data/oversight_v${c}.txt.json`,s=fl(o);if(s)try{return JSON.parse(s)}catch(u){console.error("Failed to parse oversight JSON:",u)}return null}function Ti(c){const o=`icis/Data/feedback_v${c}.txt.json`,s=fl(o);if(s)try{return JSON.parse(s)}catch(u){console.error("Failed to parse feedback JSON:",u)}return null}function uu(){const c=Wv("icis/Data/oversight_v.*\\.txt\\.json"),o=[];for(const s of c){const u=fl(s);if(u)try{o.push(JSON.parse(u))}catch(d){console.error("Failed to parse oversight file:",s,d)}}return o.sort((s,u)=>s.version-u.version)}function Fc(c,o,s){const u=Ti(c);u&&(u.supervisorDirectives||(u.supervisorDirectives=[]),u.supervisorDirectives.push({cycle:o,directives:s,timestamp:new Date().toISOString()}),cu(u))}function Bc(c,o,s){const u="icis/Data/supervisor_decision.txt",d=[];return d.push(`Decision: ${c}`),d.push(`Cycle: ${o}`),d.push(`Timestamp: ${new Date().toISOString()}`),wr(u,d.join(`
`)),u}function Kv(){const c=[];for(let o=0;o<localStorage.length;o++){const s=localStorage.key(o);s&&s.startsWith(Ri)&&c.push(s)}c.forEach(o=>localStorage.removeItem(o)),console.log(`Cleared ${c.length} files`)}function Oh(c,o,s="icis_paper"){const u=`icis/Paper/${s}_v${c}.tex`;return wr(u,o),console.log(`Paper saved: ${u}`),u}function ua(c,o="icis_paper"){const s=`icis/Paper/${o}_v${c}.tex`;return fl(s)}function Jv(c,o="icis_paper"){const s=ua(c,o);if(!s){console.error(`Paper version ${c} not found`);return}const u=`${o}_v${c}.tex`,d=new Blob([s],{type:"text/plain;charset=utf-8"}),f=URL.createObjectURL(d),g=document.createElement("a");g.href=f,g.download=u,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(f),console.log(`Downloaded: ${u}`)}const Di=({logs:c,height:o="h-64"})=>{const s=fe.useRef(null);return fe.useEffect(()=>{var u;(u=s.current)==null||u.scrollIntoView({behavior:"smooth"})},[c]),i.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${o} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[c.length===0?i.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):c.map((u,d)=>i.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:u},d)),i.jsx("div",{ref:s})]})},eb=({currentStep:c})=>{if(!c)return null;const o=$h[c];return i.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:i.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[i.jsx(cn,{size:16,className:"animate-spin"}),i.jsx("span",{className:"font-medium",children:o.label}),i.jsxs("span",{className:"text-indigo-500",children:["- ",o.description]})]})})},du=({stageName:c,isProcessing:o,canAbort:s,canRestart:u,onAbort:d,onRestart:f})=>{const[g,h]=fe.useState(null),x=()=>{o&&h("abort")},p=()=>{h("restart")},T=()=>{g==="abort"?d():g==="restart"&&f(),h(null)};return i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"flex gap-2",children:[s&&o&&i.jsxs("button",{onClick:x,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[i.jsx(qh,{size:14}),"Abort"]}),u&&!o&&i.jsxs("button",{onClick:p,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[i.jsx(nl,{size:14}),"Restart"]})]}),g&&i.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:i.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:i.jsx(Zc,{className:"text-amber-600",size:24})}),i.jsx("h3",{className:"text-lg font-bold text-slate-800",children:g==="abort"?"Abort Stage?":"Restart Stage?"})]}),i.jsx("p",{className:"text-slate-600 mb-6",children:g==="abort"?i.jsxs(i.Fragment,{children:["Are you sure you want to abort the ",i.jsx("strong",{children:c})," stage? Any progress will be lost and you may need to restart the stage."]}):i.jsxs(i.Fragment,{children:["Are you sure you want to restart the ",i.jsx("strong",{children:c})," stage? This will reset the stage and you'll need to run it again."]})}),i.jsxs("div",{className:"flex gap-3 justify-end",children:[i.jsx("button",{onClick:()=>h(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),i.jsx("button",{onClick:T,className:`px-4 py-2 text-white rounded-lg transition-colors ${g==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:g==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},jh=({label:c,accept:o=".txt",multiple:s=!1,required:u=!1,file:d,onFileSelect:f})=>{const g=fe.useRef(null),h=()=>{var T;(T=g.current)==null||T.click()},x=T=>{var _;const R=((_=T.target.files)==null?void 0:_[0])||null;f(R)},p=T=>{T.stopPropagation(),f(null),g.current&&(g.current.value="")};return i.jsxs("div",{onClick:h,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${d?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(ou,{size:16,className:d?"text-emerald-600":"text-slate-400"}),i.jsxs("span",{className:"text-sm",children:[d?d.name:c,u&&!d&&i.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),d?i.jsx("button",{onClick:p,className:"p-1 hover:bg-emerald-200 rounded",children:i.jsx(Zh,{size:16,className:"text-emerald-600"})}):i.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),i.jsx("input",{ref:g,type:"file",accept:o,multiple:s,onChange:x,className:"hidden"})]})};let Pc={},fu="icis",Zs=null;const em="venue_preferences";function Oi(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"/asd":""}async function pu(){if(Zs)return Zs;try{const c=Oi(),o=await fetch(`${c}/venues/registry.json`);if(!o.ok)throw new Error(`Failed to load venues registry: ${o.status}`);return Zs=await o.json(),Zs}catch(c){throw console.error("[VenueService] Failed to load registry:",c),c}}async function tb(){try{const c=Oi(),o=await fetch(`${c}/venues/categories.json`);if(!o.ok)throw new Error(`Failed to load categories: ${o.status}`);const s=await o.json();return Object.values(s.categories).map(d=>({id:d.id,name:d.name,description:d.description,icon:d.icon,color:d.color,subcategoryCount:d.subcategories.length,venueCount:0}))}catch(c){throw console.error("[VenueService] Failed to load categories:",c),c}}async function nb(c){try{const o=Oi(),s=await fetch(`${o}/venues/categories.json`);if(!s.ok)throw new Error(`Failed to load categories: ${s.status}`);const d=(await s.json()).categories[c];if(!d)return[];const f=await pu(),g={};for(const[h,x]of Object.entries(f.venues))x.category===c&&(g[x.subcategory]=(g[x.subcategory]||0)+1);return d.subcategories.map(h=>({id:h.id,name:h.name,category:c,venueCount:g[h.id]||0}))}catch(o){throw console.error("[VenueService] Failed to load subcategories:",o),o}}async function ji(){const c=await pu();return Object.entries(c.venues).map(([o,s])=>({id:o,name:s.name,acronym:s.acronym,category:s.category,subcategory:s.subcategory,venueType:s.type,description:"",verified:s.verified,h5Index:s.h5Index}))}async function ab(c){return(await ji()).filter(s=>s.category===c)}async function rb(c,o){return(await ji()).filter(u=>u.category===c&&u.subcategory===o)}async function ib(c){const o=await ji(),s=c.toLowerCase(),u=[];for(const d of o){let f=0,g="name";d.acronym.toLowerCase()===s?(f=100,g="acronym"):d.acronym.toLowerCase().startsWith(s)?(f=80,g="acronym"):d.acronym.toLowerCase().includes(s)?(f=60,g="acronym"):d.name.toLowerCase().includes(s)?(f=40,g="name"):d.subcategory.toLowerCase().includes(s)&&(f=20,g="category"),f>0&&u.push({venue:d,matchType:g,score:f})}return u.sort((d,f)=>f.score-d.score)}async function tm(c){if(Pc[c])return Pc[c];const s=(await pu()).venues[c];if(!s)throw new Error(`Venue not found: ${c}`);try{const u=Oi(),d=s.type==="journal"?"journals":"conferences",f=await fetch(`${u}/venues/${d}/${c}/config.json`);if(!f.ok)throw new Error(`Failed to load venue config: ${f.status}`);const g=await f.json();return Pc[c]=g,g}catch(u){throw console.error(`[VenueService] Failed to load config for ${c}:`,u),u}}async function sb(){return tm(fu)}function nm(c){fu=c,ub(c),console.log(`[VenueService] Switched to venue: ${c}`)}function lb(){return fu}function Tr(){const c={favorites:[],recent:[],showJournals:!0,showConferences:!0};if(typeof window>"u")return c;try{const o=localStorage.getItem(em);if(o)return{...c,...JSON.parse(o)}}catch(o){console.error("[VenueService] Failed to load preferences:",o)}return c}function hu(c){if(!(typeof window>"u"))try{const s={...Tr(),...c};localStorage.setItem(em,JSON.stringify(s))}catch(o){console.error("[VenueService] Failed to save preferences:",o)}}function ob(c){const o=Tr();o.favorites.includes(c)||(o.favorites.unshift(c),o.favorites.length>10&&(o.favorites=o.favorites.slice(0,10)),hu(o))}function cb(c){const o=Tr();o.favorites=o.favorites.filter(s=>s!==c),hu(o)}function ub(c){const o=Tr();o.recent=o.recent.filter(s=>s!==c),o.recent.unshift(c),o.recent.length>5&&(o.recent=o.recent.slice(0,5)),hu(o)}async function kh(){const c=Tr(),o=await ji();return c.favorites.map(s=>o.find(u=>u.id===s)).filter(s=>s!==void 0)}async function Lh(){const c=Tr(),o=await ji();return c.recent.map(s=>o.find(u=>u.id===s)).filter(s=>s!==void 0)}async function db(c){const o=await sb(),s=o.prompts[c];if(!s)throw new Error(`Prompt type '${c}' not configured for ${o.acronym}`);try{const u=Oi(),d=o.venueType==="journal"?"journals":"conferences";let f=await fetch(`${u}/venues/${d}/${o.id}/${s}`);if(f.ok||(f=await fetch(`${u}/venues/shared/${s}`)),!f.ok)throw new Error(`Prompt file not found: ${s}`);return await f.text()}catch(u){throw console.error(`[VenueService] Failed to load prompt ${c}:`,u),u}}const fb={"business-economics-management":_0,"chemical-material-sciences":K0,"engineering-computer-science":$0,"health-medical-sciences":ov,"humanities-literature-arts":Gh,"life-sciences-earth-sciences":uv,"physics-mathematics":E0,"social-sciences":dl},Ai={"business-economics-management":{bg:"bg-blue-600",text:"text-blue-600",border:"border-blue-600",light:"bg-blue-50"},"chemical-material-sciences":{bg:"bg-orange-600",text:"text-orange-600",border:"border-orange-600",light:"bg-orange-50"},"engineering-computer-science":{bg:"bg-purple-600",text:"text-purple-600",border:"border-purple-600",light:"bg-purple-50"},"health-medical-sciences":{bg:"bg-red-600",text:"text-red-600",border:"border-red-600",light:"bg-red-50"},"humanities-literature-arts":{bg:"bg-amber-600",text:"text-amber-600",border:"border-amber-600",light:"bg-amber-50"},"life-sciences-earth-sciences":{bg:"bg-green-600",text:"text-green-600",border:"border-green-600",light:"bg-green-50"},"physics-mathematics":{bg:"bg-cyan-600",text:"text-cyan-600",border:"border-cyan-600",light:"bg-cyan-50"},"social-sciences":{bg:"bg-indigo-600",text:"text-indigo-600",border:"border-indigo-600",light:"bg-indigo-50"}},pb={"business-economics-management":"Business","chemical-material-sciences":"Chemistry","engineering-computer-science":"CS & Eng","health-medical-sciences":"Medical","humanities-literature-arts":"Humanities","life-sciences-earth-sciences":"Life Sci","physics-mathematics":"Physics","social-sciences":"Social"},hb={journal:A0,conference:wv},mb={journal:{bg:"bg-emerald-100",text:"text-emerald-700"},conference:{bg:"bg-violet-100",text:"text-violet-700"}},gb=({category:c,size:o=20,className:s=""})=>{const u=fb[c],d=Ai[c];return u?i.jsx(u,{size:o,className:`${d.text} ${s}`}):null},Ks=({type:c,className:o=""})=>{const s=mb[c],u=hb[c];return i.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${s.bg} ${s.text} ${o}`,children:[i.jsx(u,{size:12}),c==="journal"?"Journal":"Conference"]})},Vc=({h5Index:c,className:o=""})=>{if(!c)return null;let s="bg-gray-100 text-gray-700";return c>=100?s="bg-yellow-100 text-yellow-800":c>=50&&(s="bg-blue-100 text-blue-700"),i.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${s} ${o}`,children:["h5: ",c]})},yb=({onVenueChange:c,disabled:o=!1,compact:s=!1})=>{var je,ze,bt;const[u,d]=fe.useState([]),[f,g]=fe.useState(null),[h,x]=fe.useState([]),[p,T]=fe.useState(null),[R,_]=fe.useState([]),[v,A]=fe.useState("icis"),[m,S]=fe.useState(null),[w,O]=fe.useState(""),[z,B]=fe.useState([]),[j,H]=fe.useState(!1),[P,G]=fe.useState(!0),[V,oe]=fe.useState(!0),[ce,D]=fe.useState([]),[Y,E]=fe.useState([]),[W,I]=fe.useState(!0),[k,J]=fe.useState(!1),q=fe.useRef(null),me=fe.useRef(null);fe.useEffect(()=>{C()},[]),fe.useEffect(()=>{!W&&v&&c&&c(v)},[W]),fe.useEffect(()=>{f&&L(f)},[f]),fe.useEffect(()=>{f&&p?ne(f,p):f&&le(f)},[f,p]),fe.useEffect(()=>{v&&tm(v).then(S).catch(()=>{S(null)})},[v]),fe.useEffect(()=>{w.length>=2?(H(!0),ib(w).then(he=>{let b=he.map(re=>re.venue);P||(b=b.filter(re=>re.venueType!=="journal")),V||(b=b.filter(re=>re.venueType!=="conference")),B(b),H(!1)})):(B([]),H(!1))},[w,P,V]),fe.useEffect(()=>{const he=b=>{q.current&&!q.current.contains(b.target)&&J(!1)};return document.addEventListener("mousedown",he),()=>document.removeEventListener("mousedown",he)},[]);const C=async()=>{try{const[he,b,re]=await Promise.all([tb(),kh(),Lh()]);d(he),D(b),E(re),A(lb()),he.length>0&&g(he[0].id)}catch(he){console.error("Failed to load initial data:",he)}finally{I(!1)}},L=async he=>{try{const b=await nb(he);x(b.filter(re=>re.venueCount>0)),T(null)}catch(b){console.error("Failed to load subcategories:",b)}},le=async he=>{try{let b=await ab(he);P||(b=b.filter(re=>re.venueType!=="journal")),V||(b=b.filter(re=>re.venueType!=="conference")),_(b.sort((re,ae)=>(ae.h5Index||0)-(re.h5Index||0)))}catch(b){console.error("Failed to load venues:",b)}},ne=async(he,b)=>{try{let re=await rb(he,b);P||(re=re.filter(ae=>ae.venueType!=="journal")),V||(re=re.filter(ae=>ae.venueType!=="conference")),_(re.sort((ae,U)=>(U.h5Index||0)-(ae.h5Index||0)))}catch(re){console.error("Failed to load venues:",re)}},se=he=>{A(he),nm(he),J(!1),O(""),c==null||c(he),Lh().then(E)},Ee=async(he,b)=>{b.stopPropagation(),ce.some(U=>U.id===he)?cb(he):ob(he);const ae=await kh();D(ae)},Ce=()=>R.find(he=>he.id===v)||ce.find(he=>he.id===v)||Y.find(he=>he.id===v),Te=w.length>=2?z:R,we=Ce();return W?i.jsx("div",{className:"animate-pulse bg-gray-200 rounded-lg h-12 w-full"}):s?i.jsxs("div",{className:"relative",ref:q,children:[i.jsxs("button",{type:"button",onClick:()=>!o&&J(!k),disabled:o,className:`
            flex items-center gap-2 px-3 py-2 rounded-lg border
            ${o?"bg-gray-100 cursor-not-allowed":"bg-white hover:bg-gray-50 cursor-pointer"}
            ${k?"ring-2 ring-blue-500 border-blue-500":"border-gray-300"}
          `,children:[i.jsx("span",{className:"font-medium",children:(we==null?void 0:we.acronym)||"Select Venue"}),i.jsx(ol,{className:`w-4 h-4 transition-transform ${k?"rotate-180":""}`})]}),k&&i.jsxs("div",{className:"absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden",children:[i.jsx("div",{className:"p-2 border-b border-gray-100",children:i.jsxs("div",{className:"relative",children:[i.jsx(ul,{className:"absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),i.jsx("input",{ref:me,type:"text",placeholder:"Search venues...",value:w,onChange:he=>O(he.target.value),className:"w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})}),i.jsx("div",{className:"max-h-72 overflow-y-auto",children:Te.map(he=>i.jsxs("button",{type:"button",onClick:()=>se(he.id),className:`
                    w-full px-3 py-2.5 text-left flex items-center gap-2 hover:bg-blue-50 transition-colors
                    ${he.id===v?"bg-blue-50 border-l-2 border-blue-500":""}
                  `,children:[he.id===v?i.jsx(zt,{className:"w-4 h-4 text-blue-600 flex-shrink-0"}):i.jsx("div",{className:"w-4 h-4 flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:`font-medium ${he.id===v?"text-blue-700":"text-gray-900"}`,children:he.acronym}),i.jsx(Ks,{type:he.venueType})]}),i.jsx("span",{className:"block text-xs text-gray-500 truncate",children:he.name})]}),!he.verified&&i.jsx(Da,{className:"w-3.5 h-3.5 text-yellow-500 flex-shrink-0"})]},he.id))})]})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"relative",children:[i.jsx(ul,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Search journals and conferences...",value:w,onChange:he=>O(he.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),w&&i.jsx("button",{type:"button",onClick:()=>O(""),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:i.jsx(Zh,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(nv,{className:"w-4 h-4 text-gray-500"}),i.jsx("span",{className:"text-sm text-gray-600",children:"Show:"})]}),i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:V,onChange:he=>oe(he.target.checked),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Conferences"})]}),i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:P,onChange:he=>G(he.target.checked),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Journals"})]})]}),we&&i.jsxs("div",{className:`p-4 rounded-lg border ${((je=Ai[we.category])==null?void 0:je.light)||"bg-blue-50"} border-${((ze=Ai[we.category])==null?void 0:ze.border)||"blue-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`flex-shrink-0 w-12 h-12 ${((bt=Ai[we.category])==null?void 0:bt.bg)||"bg-blue-600"} rounded-lg flex items-center justify-center`,children:i.jsx("span",{className:"text-white font-bold text-lg",children:we.acronym.slice(0,2)})}),i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h4",{className:"font-semibold text-gray-900",children:we.acronym}),i.jsx(Ks,{type:we.venueType}),i.jsx(Vc,{h5Index:we.h5Index})]}),i.jsx("p",{className:"text-sm text-gray-600",children:we.name})]}),i.jsx("button",{type:"button",onClick:he=>Ee(we.id,he),className:`p-2 rounded-full hover:bg-white/50 transition-colors ${ce.some(he=>he.id===we.id)?"text-yellow-500":"text-gray-400"}`,children:i.jsx(Dh,{className:"w-5 h-5",fill:ce.some(he=>he.id===we.id)?"currentColor":"none"})})]}),m&&m.officialLinks&&i.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-200/50",children:[i.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Official Guidelines"}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[m.officialLinks.callForPapers&&i.jsxs("a",{href:m.officialLinks.callForPapers,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors",children:[i.jsx(Ii,{className:"w-3.5 h-3.5"}),"Call for Papers",i.jsx(wi,{className:"w-3 h-3"})]}),m.officialLinks.submissionInstructions&&i.jsxs("a",{href:m.officialLinks.submissionInstructions,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 rounded-full hover:bg-green-200 transition-colors",children:[i.jsx(Qh,{className:"w-3.5 h-3.5"}),"Submission Instructions",i.jsx(wi,{className:"w-3 h-3"})]}),m.officialLinks.reviewerGuidelines&&i.jsxs("a",{href:m.officialLinks.reviewerGuidelines,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors",children:[i.jsx(dl,{className:"w-3.5 h-3.5"}),"Reviewer Guidelines",i.jsx(wi,{className:"w-3 h-3"})]}),m.website&&i.jsxs("a",{href:m.website,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",children:[i.jsx(rv,{className:"w-3.5 h-3.5"}),"Website",i.jsx(wi,{className:"w-3 h-3"})]})]})]}),!m&&!we.verified&&i.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200/50",children:i.jsxs("p",{className:"text-sm text-gray-500 flex items-center gap-2",children:[i.jsx(Da,{className:"w-4 h-4 text-yellow-500"}),"Full configuration not yet available for this venue. Using default settings."]})})]}),(Y.length>0||ce.length>0)&&!w&&i.jsxs("div",{className:"space-y-3",children:[ce.length>0&&i.jsxs("div",{children:[i.jsxs("h4",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[i.jsx(Dh,{className:"w-4 h-4 text-yellow-500"}),"Favorites"]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:ce.map(he=>i.jsx("button",{type:"button",onClick:()=>se(he.id),className:`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${he.id===v?"bg-blue-100 border-blue-300 text-blue-700":"bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:he.acronym},he.id))})]}),Y.length>0&&i.jsxs("div",{children:[i.jsxs("h4",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[i.jsx(F0,{className:"w-4 h-4 text-gray-500"}),"Recent"]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:Y.map(he=>i.jsx("button",{type:"button",onClick:()=>se(he.id),className:`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${he.id===v?"bg-blue-100 border-blue-300 text-blue-700":"bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:he.acronym},he.id))})]})]}),!w&&i.jsx("div",{className:"border-b border-gray-200",children:i.jsx("nav",{className:"flex space-x-1 overflow-x-auto pb-1",children:u.map(he=>{const b=Ai[he.id],re=f===he.id;return i.jsxs("button",{type:"button",onClick:()=>g(he.id),className:`
                    flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors
                    ${re?`${b.light} ${b.text} border-b-2 ${b.border}`:"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}
                  `,children:[i.jsx(gb,{category:he.id,size:16}),pb[he.id]]},he.id)})})}),!w&&f&&i.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[h.length>0&&i.jsxs("div",{className:"col-span-4 space-y-1 max-h-80 overflow-y-auto",children:[i.jsxs("button",{type:"button",onClick:()=>T(null),className:`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${p===null?"bg-gray-100 font-medium text-gray-900":"text-gray-600 hover:bg-gray-50"}`,children:["All (",R.length,")"]}),h.map(he=>i.jsxs("button",{type:"button",onClick:()=>T(he.id),className:`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${p===he.id?"bg-gray-100 font-medium text-gray-900":"text-gray-600 hover:bg-gray-50"}`,children:[he.name," (",he.venueCount,")"]},he.id))]}),i.jsxs("div",{className:`${h.length>0?"col-span-8":"col-span-12"} grid grid-cols-2 gap-2 max-h-80 overflow-y-auto`,children:[Te.map(he=>i.jsxs("button",{type:"button",onClick:()=>se(he.id),disabled:o,className:`
                  p-3 rounded-lg border text-left transition-all
                  ${he.id===v?"border-blue-500 bg-blue-50 ring-2 ring-blue-200":"border-gray-200 hover:border-blue-300 hover:bg-blue-50"}
                  ${o?"opacity-50 cursor-not-allowed":"cursor-pointer"}
                `,children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("span",{className:"font-semibold text-gray-900",children:he.acronym}),i.jsxs("div",{className:"flex items-center gap-1",children:[he.id===v&&i.jsx(zt,{className:"w-4 h-4 text-blue-600"}),!he.verified&&i.jsx(Da,{className:"w-3 h-3 text-yellow-500"})]})]}),i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx(Ks,{type:he.venueType}),i.jsx(Vc,{h5Index:he.h5Index})]}),i.jsx("p",{className:"text-xs text-gray-500 line-clamp-2",children:he.name})]},he.id)),Te.length===0&&i.jsx("div",{className:"col-span-2 text-center py-8 text-gray-500",children:"No venues found"})]})]}),w&&i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 max-h-80 overflow-y-auto",children:j?i.jsx("div",{className:"col-span-full text-center py-8 text-gray-500",children:"Searching..."}):z.length>0?z.map(he=>i.jsxs("button",{type:"button",onClick:()=>se(he.id),disabled:o,className:`
                  p-3 rounded-lg border text-left transition-all
                  ${he.id===v?"border-blue-500 bg-blue-50 ring-2 ring-blue-200":"border-gray-200 hover:border-blue-300 hover:bg-blue-50"}
                `,children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("span",{className:"font-semibold text-gray-900",children:he.acronym}),he.id===v&&i.jsx(zt,{className:"w-4 h-4 text-blue-600"})]}),i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx(Ks,{type:he.venueType}),i.jsx(Vc,{h5Index:he.h5Index})]}),i.jsx("p",{className:"text-xs text-gray-500 line-clamp-2",children:he.name})]},he.id)):i.jsxs("div",{className:"col-span-full text-center py-8 text-gray-500",children:['No venues found for "',w,'"']})})]})},vb=({logs:c,stageStatus:o,isProcessing:s,uploadedFiles:u,onFileChange:d,onAction:f,detectionStatus:g,onRefreshDetection:h,hasExistingCase:x=!1,onVenueChange:p,onNewInterview:T,onPaperToInterview:R,onSourceTypeChange:_})=>{var Y;const[v,A]=fe.useState(!1),[m,S]=fe.useState("transcript-upload"),[w,O]=fe.useState(null),[z,B]=fe.useState(!1),[j,H]=fe.useState(!1),[P,G]=fe.useState(null);fe.useEffect(()=>{w&&(H(!0),G(null),nm(w),db("template").then(async E=>{const W=new Blob([E],{type:"text/plain"}),I=new File([W],`${w}_template.txt`,{type:"text/plain"});d("template",I),B(!0),H(!1)}).catch(E=>{console.error("Failed to load template:",E),G("Template not available for this venue"),H(!1)}))},[w,d]);const V=E=>{O(E),B(!1),p==null||p(E)};fe.useEffect(()=>{_==null||_(m)},[m,_]);const oe=E=>{S(E),E==="voice-interview"&&T?T():E==="paper"&&R&&R()},ce=u.template&&u.interview,D=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(A(!0),f("NEW_CASE"),setTimeout(()=>A(!1),2e3))};return i.jsxs("div",{className:"w-full px-6 mt-6",children:[x&&i.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 max-w-4xl mx-auto",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(v0,{className:"text-blue-600",size:24}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),i.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),i.jsx("button",{onClick:D,disabled:v,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:v?i.jsxs(i.Fragment,{children:[i.jsx(cn,{className:"animate-spin",size:18}),"Backing up..."]}):i.jsxs(i.Fragment,{children:[i.jsx(ev,{size:18}),"New Project"]})})]})}),i.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[i.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("h2",{className:"text-lg font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(ou,{className:"text-emerald-600",size:20}),"Source"]}),i.jsxs("div",{className:"flex gap-2 flex-1",children:[i.jsxs("button",{onClick:()=>oe("voice-interview"),className:`flex-1 px-4 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${m==="voice-interview"?"border-emerald-500 bg-emerald-50 text-emerald-700":"border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-slate-700"}`,children:[i.jsx(bv,{size:18}),i.jsx("span",{className:"font-medium text-sm",children:"Voice Interview"})]}),i.jsxs("button",{onClick:()=>S("transcript-upload"),className:`flex-1 px-4 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${m==="transcript-upload"?"border-purple-500 bg-purple-50 text-purple-700":"border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 text-slate-700"}`,children:[i.jsx(Ii,{size:18}),i.jsx("span",{className:"font-medium text-sm",children:"Transcript"})]}),i.jsxs("button",{onClick:()=>oe("paper"),className:`flex-1 px-4 py-2 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${m==="paper"?"border-blue-500 bg-blue-50 text-blue-700":"border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-700"}`,children:[i.jsx(Gh,{size:18}),i.jsx("span",{className:"font-medium text-sm",children:"Paper"})]})]})]}),m==="transcript-upload"&&i.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4",children:[i.jsx(jh,{label:"Transcript",accept:".txt",required:!0,file:u.interview??null,onFileSelect:E=>d("interview",E)}),i.jsx(jh,{label:"Data (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:u.dataFile??null,onFileSelect:E=>d("dataFile",E)})]}),g&&g.detected.interview&&i.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-green-50 border border-green-200 inline-flex items-center gap-2",children:[i.jsx(Rh,{className:"text-green-600",size:16}),i.jsx("span",{className:"text-green-800 font-medium text-sm",children:"Files auto-detected"})]})]}),i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("h2",{className:"text-lg font-bold text-slate-800 flex items-center gap-2 mb-4",children:[i.jsx(Lv,{className:"text-indigo-600",size:20}),"Target"]}),i.jsx(yb,{onVenueChange:V,disabled:s||o===Oe.COMPLETED}),w&&i.jsxs("div",{className:"mt-6 p-4 rounded-lg border border-slate-200 bg-slate-50",children:[i.jsx("h4",{className:"font-medium text-slate-700 mb-2",children:"Template Status"}),j?i.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[i.jsx(mv,{className:"animate-spin",size:18}),i.jsx("span",{children:"Loading template..."})]}):z?i.jsxs("div",{className:"flex items-center gap-2 text-green-600",children:[i.jsx(Rh,{size:18}),i.jsxs("span",{children:["Template loaded: ",(Y=u.template)==null?void 0:Y.name]})]}):P?i.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[i.jsx(Da,{size:18}),i.jsx("span",{children:P})]}):null]})]})]}),i.jsxs("div",{className:"max-w-4xl mx-auto mt-6",children:[u.participantId&&i.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg mb-4",children:i.jsxs("p",{className:"text-sm text-indigo-800",children:[i.jsx("strong",{children:"ID:"})," ",u.participantId]})}),i.jsx(Di,{logs:c,height:"h-32"}),i.jsx("div",{className:"mt-4 flex justify-end gap-3",children:i.jsxs("button",{onClick:()=>f("START_SETUP"),disabled:s||!ce,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[s?i.jsx(cn,{className:"animate-spin",size:18}):i.jsx(Wc,{size:18}),"Verify Files"]})}),!ce&&i.jsx("p",{className:"text-xs text-amber-600 text-center mt-4",children:"Please select a source and target venue to proceed."}),o===Oe.COMPLETED&&i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 mt-6",children:[i.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),i.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),i.jsxs("button",{onClick:()=>f("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[i.jsx(Wc,{size:18}),"Start Building Paper"]})]}),i.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3 mt-6",children:[i.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),i.jsxs("div",{className:"flex gap-3",children:[i.jsx("button",{onClick:()=>f("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),i.jsx("button",{onClick:()=>f("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})]})},bb=({logs:c,isProcessing:o,isPartialPaper:s,currentBuilderStep:u,paperContent:d,onAbort:f,onRestart:g})=>i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Building Research Paper",s&&i.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),i.jsx(du,{stageName:"Builder",isProcessing:o,canAbort:!0,canRestart:!o&&!!d,onAbort:f||(()=>{}),onRestart:g||(()=>{})})]}),i.jsx(eb,{currentStep:u}),i.jsx(Di,{logs:c,height:"h-48"}),i.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),i.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:d?i.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:d}):i.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),xb=({allOversight:c,compact:o=!1})=>{if(c.length===0)return null;const s=(R,_)=>_>R?"up":_<R?"down":"same",u=({trend:R,size:_=14})=>R==="up"?i.jsx(Wh,{size:_,className:"text-emerald-500"}):R==="down"?i.jsx(Fv,{size:_,className:"text-red-500"}):i.jsx(Sv,{size:_,className:"text-slate-400"}),d=(R,_=4)=>R>=_?"text-emerald-600":R>=_-1?"text-amber-600":"text-red-600",f=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],g=c[0],h=c[c.length-1],x=c.length>1,p=x?((h.averageScore-g.averageScore)/g.averageScore*100).toFixed(1):"0",T=x?Math.round((1-(h.errorCounts.majorErrors+h.errorCounts.minorErrors)/Math.max(1,g.errorCounts.majorErrors+g.errorCounts.minorErrors))*100):0;return o?i.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(qc,{size:18,className:"text-indigo-600"}),i.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),x&&i.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(p)>0?"bg-emerald-100 text-emerald-700":parseFloat(p)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(p)>0?"+":"",p,"% overall"]})]}),i.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:f.map(({key:R,label:_})=>{const v=g.reviewScores[R]||0,A=h.reviewScores[R]||0,m=s(v,A);return i.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[i.jsx("div",{className:"text-slate-500 truncate mb-1",children:_}),i.jsxs("div",{className:"flex items-center justify-center gap-1",children:[i.jsx("span",{className:`font-bold ${d(A)}`,children:A}),x&&i.jsx(u,{trend:m,size:12})]}),x&&v!==A&&i.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",v]})]},R)})}),i.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-slate-500",children:"Average:"}),i.jsx("span",{className:`font-bold ${d(h.averageScore)}`,children:h.averageScore.toFixed(1)}),x&&i.jsxs(i.Fragment,{children:[i.jsx(u,{trend:s(g.averageScore,h.averageScore)}),i.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",g.averageScore.toFixed(1),")"]})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-slate-500",children:"Errors:"}),i.jsx("span",{className:`font-bold ${h.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:h.errorCounts.majorErrors+h.errorCounts.minorErrors}),x&&T!==0&&i.jsxs("span",{className:`text-xs ${T>0?"text-emerald-600":"text-red-600"}`,children:["(",T>0?"-":"+",Math.abs(T),"%)"]})]})]}),x&&i.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[i.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",c.length," rounds):"]}),i.jsx("div",{className:"flex gap-1",children:c.map((R,_)=>i.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${_===c.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",R.version,": ",R.averageScore.toFixed(1)]},_))})]})]}):i.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(qc,{size:20,className:"text-indigo-600"}),i.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),x&&i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(p)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(p)>0?"+":"",p,"% score change"]}),i.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${T>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[T>0?"-":"+",Math.abs(T),"% errors"]})]})]}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-200",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),c.map((R,_)=>i.jsxs("th",{className:`text-center p-2 ${_===c.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",R.version]},_)),x&&i.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),i.jsxs("tbody",{children:[f.map(({key:R,label:_})=>{const v=c.map(m=>m.reviewScores[R]||0),A=x?s(v[0],v[v.length-1]):"same";return i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"p-2 font-medium",children:_}),v.map((m,S)=>i.jsx("td",{className:`text-center p-2 ${S===v.length-1?"bg-indigo-50/50":""} ${d(m)}`,children:m},S)),x&&i.jsx("td",{className:"text-center p-2",children:i.jsxs("div",{className:"flex items-center justify-center gap-1",children:[i.jsx(u,{trend:A}),A==="up"&&i.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",v[v.length-1]-v[0]]}),A==="down"&&i.jsx("span",{className:"text-red-600 text-xs",children:v[v.length-1]-v[0]})]})})]},R)}),i.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"Average"}),c.map((R,_)=>i.jsx("td",{className:`text-center p-2 ${_===c.length-1?"bg-indigo-100":""} ${d(R.averageScore)}`,children:R.averageScore.toFixed(1)},_)),x&&i.jsx("td",{className:"text-center p-2",children:i.jsx("div",{className:"flex items-center justify-center gap-1",children:i.jsx(u,{trend:s(g.averageScore,h.averageScore)})})})]})]})]})}),i.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[i.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),i.jsx("div",{className:"flex items-center gap-2",children:c.map((R,_)=>i.jsxs("span",{className:`px-2 py-1 rounded text-sm ${_===c.length-1?R.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",R.version,": ",R.errorCounts.majorErrors]},_))})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),i.jsx("div",{className:"flex items-center gap-2",children:c.map((R,_)=>i.jsxs("span",{className:`px-2 py-1 rounded text-sm ${_===c.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",R.version,": ",R.errorCounts.minorErrors]},_))})]})]})]})]})},un="http://localhost:3001/api";function Rr(){return{"Content-Type":"application/json"}}let mt=null;async function kn(){try{const c=new AbortController,o=setTimeout(()=>c.abort(),1e3),s=await fetch(`${un}/health`,{signal:c.signal});return clearTimeout(o),mt=(await s.json()).status==="ok",mt}catch{return mt=!1,!1}}async function am(){var c,o;try{const s=await fetch(`${un}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!s.ok)return{success:!1,error:`Server error: ${s.status}`};const u=await s.json();return u.success&&console.log("[FileApi] Manifest refreshed:",(o=(c=u.manifest)==null?void 0:c.files)==null?void 0:o.map(d=>d.filename)),u}catch(s){return console.error("[FileApi] Failed to refresh manifest:",s),{success:!1,error:s.message}}}function mu(c,o,s="text/plain"){const u=new Blob([o],{type:s}),d=URL.createObjectURL(u),f=document.createElement("a");f.href=d,f.download=c,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d)}async function Kc(c,o){if(mt===null&&await kn(),mt)try{const u=await(await fetch(`${un}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:o})})).json();if(u.success)return u}catch{console.warn("Backend save failed, falling back to download")}try{return mu(c,o,"application/x-tex"),{success:!0,path:`Downloads/${c}`}}catch(s){return{success:!1,error:s.message}}}async function Jc(c,o){const s=typeof o=="string"?o:JSON.stringify(o,null,2);if(mt===null&&await kn(),mt)try{const d=await(await fetch(`${un}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:s})})).json();if(d.success)return d}catch{console.warn("Backend save failed, falling back to download")}try{return mu(c,s,"application/json"),{success:!0,path:`Downloads/${c}`}}catch(u){return{success:!1,error:u.message}}}async function rm(c){if(mt===null&&await kn(),mt)try{const s=await(await fetch(`${un}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:c})})).json();if(s.success)return s}catch{console.warn("Backend save failed, falling back to downloads")}try{const o=[];for(const s of c){const u=typeof s.content=="string"?s.content:JSON.stringify(s.content,null,2),d=s.directory==="paper"?"application/x-tex":"application/json";await new Promise(f=>setTimeout(f,200)),mu(s.filename,u,d),o.push(s.filename)}return{success:!0,files:o}}catch(o){return{success:!1,error:o.message}}}async function im(c,o,s,u,d,f){const g=d?`${d}_`:"",h=await rm([{directory:"data",filename:`${g}oversight_v${c}.json`,content:o},{directory:"data",filename:`${g}feedback_v${c}.json`,content:s},{directory:"paper",filename:`${g}icis_paper_v${c}.tex`,content:u}]);if(f)try{const x="https://icis-deploy-12-10-2025.vercel.app";x&&(await fetch(`${x}/api/participants`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,oversight:o,feedback:s,round:c})}),console.log(`[FileApi] Saved oversight/feedback v${c} to blob for ${f}`))}catch(x){console.warn("[FileApi] Failed to save to blob:",x)}return h}const da="https://icis-deploy-12-10-2025.vercel.app";let Oa=null;async function sm(c,o,s){const u=(o.match(/\\begin\{tikzpicture\}/g)||[]).length,d=(s==null?void 0:s.length)||0,f=Math.round(o.length/1024),g=xm(),h=!!g;try{console.log(`[LaTeX] Compiling via Vercel cloud... (${f} KB, ${u} TikZ, ${d} PNG figures${h?", with .bib":""})`);const x=new AbortController,p=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),x.abort()},3e5),T={filename:c,content:o,figures:s};g&&(T.bibliography=g);let R;try{R=await fetch(`${da}/api/compile-latex`,{method:"POST",headers:Rr(),signal:x.signal,body:JSON.stringify(T)}),clearTimeout(p)}catch(v){if(clearTimeout(p),v.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${u} TikZ figures may be too complex.`};throw v}const _=await R.json();return _.success&&_.pdfBase64?(Oa={filename:_.pdfFilename,base64:_.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${_.pdfFilename}`)):_.success||console.warn(`[LaTeX] Cloud compilation failed: ${_.error}`),_}catch(x){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",x)}if(mt===null&&await kn(),!mt)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${un}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:o})})).json()}catch(x){return{success:!1,error:`Compilation request failed: ${x.message}`}}}function gu(){if(!Oa)return null;const c=atob(Oa.base64),o=new Uint8Array(c.length);for(let u=0;u<c.length;u++)o[u]=c.charCodeAt(u);const s=new Blob([o],{type:"application/pdf"});return{filename:Oa.filename,blob:s}}function lm(c){return`${un}/get-pdf/${encodeURIComponent(c)}`}async function om(c){const o=gu();if(o&&o.filename===c){const d=URL.createObjectURL(o.blob),f=document.createElement("a");f.href=d,f.download=c,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d);return}const s=lm(c),u=document.createElement("a");u.href=s,u.download=c,document.body.appendChild(u),u.click(),document.body.removeChild(u)}async function cm(c){if(!Oa)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const s=await(await fetch(`${da}/api/create-viewer-link`,{method:"POST",headers:Rr(),body:JSON.stringify({filename:Oa.filename,pdfBase64:Oa.base64})})).json();if(s.success)return console.log(`[Viewer] Link created: ${s.fullUrl}`),s;console.warn("[Viewer] Cloud API returned error:",s.error)}catch(o){console.warn("[Viewer] Cloud API failed:",o)}if(mt===null&&await kn(),!mt)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${un}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:c})})).json()}catch(o){return{success:!1,error:`Failed to create viewer link: ${o.message}`}}}function um(c){window.open(c,"_blank","noopener,noreferrer")}async function pl(c,o="full"){var s;try{console.log(`[Cloud Python] Analyzing data (${c.length} chars, type: ${o})...`);const d=await(await fetch(`${da}/api/analyze-data`,{method:"POST",headers:Rr(),body:JSON.stringify({csvContent:c,analysisType:o})})).json();return d.success?console.log(`[Cloud Python] Analysis complete: ${((s=d.figures)==null?void 0:s.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${d.error}`),d}catch(u){return console.error("[Cloud Python] Error:",u),{success:!1,error:u.message}}}async function hl(c,o,s){const u=ja();if(u!=null&&u.content&&da){console.log("[executePythonScript] Trying cloud Python analysis...");const d=await pl(u.content,"full");if(d.success){const f=[];return d.chart_data&&d.chart_data.forEach((g,h)=>{f.push({filename:`${g.type}_${g.column||g.x_column||h}.json`,path:`cloud://chart_data/${h}`,size:JSON.stringify(g).length,base64:btoa(JSON.stringify(g))})}),{success:!0,stdout:d.text_summary||"",dataFileFound:!0,generatedFigures:f}}}if(mt===null&&await kn(),!mt)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${c}, dataFile=${s||"UNDEFINED"}`);const d={filename:c,code:o,dataFile:s};console.log("[executePythonScript] Request body dataFile:",d.dataFile);const g=await(await fetch(`${un}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${g.dataFileFound}, dataFilePath=${g.dataFilePath||"NONE"}`),g}catch(d){return{success:!1,error:`Python execution request failed: ${d.message}`}}}async function dm(){if(mt===null&&await kn(),!mt)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${un}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(c){return{success:!1,error:`Backup request failed: ${c.message}`}}}let Tt=null;async function fm(c){try{const o=await c.arrayBuffer(),s=btoa(new Uint8Array(o).reduce((f,g)=>f+String.fromCharCode(g),""));console.log(`[Cloud Upload] Uploading ${c.name} (${c.size} bytes)...`);const d=await(await fetch(`${da}/api/upload-data`,{method:"POST",headers:Rr(),body:JSON.stringify({filename:c.name,content:s,contentType:c.type})})).json();return d.success&&(Tt={filename:c.name,blobUrl:d.blobUrl},console.log(`[Cloud Upload] Success: ${d.blobUrl}`)),d}catch(o){return console.error("[Cloud Upload] Error:",o),{success:!1,error:o.message}}}function ja(){return Tt}async function pm(){if(!Tt||!Tt.blobUrl)return console.log("[Cloud Delete] No data file to delete"),{success:!0};try{console.log(`[Cloud Delete] Deleting: ${Tt.blobUrl}`);const o=await(await fetch(`${da}/api/delete-data`,{method:"POST",headers:Rr(),body:JSON.stringify({blobUrl:Tt.blobUrl})})).json();return o.success&&(console.log("[Cloud Delete] Data file deleted successfully"),Tt=null),o}catch(c){return console.error("[Cloud Delete] Error:",c),{success:!1,error:c.message}}}function hm(){Tt=null}async function eu(c){try{console.log(`[Cloud Read] Reading from: ${c}`);const s=await(await fetch(`${da}/api/read-data?url=${encodeURIComponent(c)}`)).json();return s.success&&Tt&&(Tt.content=s.content),s}catch(o){return console.error("[Cloud Read] Error:",o),{success:!1,error:o.message}}}async function mm(c){if(Tt&&Tt.filename===c&&Tt.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),eu(Tt.blobUrl);if(mt===null&&await kn(),!mt)return Tt&&Tt.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),eu(Tt.blobUrl)):{success:!1,error:"Backend server not available"};try{const s=await(await fetch(`${un}/read-file/data/${encodeURIComponent(c)}`)).json();if(!s.success)return{success:!1,error:s.error||"Failed to read file"};const u=s.content,d=u.split(/\r?\n/),f=d[0]||"",g=d.filter(h=>h.trim()).length;return{success:!0,filename:c,firstLine:f,totalLines:g,content:u}}catch(o){return{success:!1,error:o.message}}}async function Sb(c){if(!c||c.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${c.length} figures via QuickChart.io...`);const s=await(await fetch(`${da}/api/quickchart`,{method:"POST",headers:Rr(),body:JSON.stringify({chartData:c})})).json();return s.success?console.log(`[QuickChart] Generated ${s.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${s.error}`),s}catch(o){return console.error("[QuickChart] Error:",o),{success:!1,error:o.message}}}let sa=[];function gm(){if(sa.length>0)return sa;try{const c=localStorage.getItem("icis_png_figures");if(c){const o=JSON.parse(c);if(o&&o.length>0)return console.log(`[PNG Storage] Recovered ${o.length} session figures from localStorage`),sa=o.map(s=>({filename:s.filename,blobUrl:`data:image/png;base64,${s.base64}`,description:""})),sa}}catch(c){console.warn("[PNG Storage] Could not read session figures from localStorage:",c)}return sa}async function ym(){const c=[];for(const o of sa)try{const s=await fetch(o.blobUrl);if(s.ok){const u=await s.blob();c.push({filename:o.filename,blob:u})}else console.warn(`[PNG Figures] Failed to download ${o.filename}: ${s.status}`)}catch(s){console.warn(`[PNG Figures] Error downloading ${o.filename}:`,s)}return console.log(`[PNG Figures] Downloaded ${c.length}/${sa.length} figures`),c}let la=[];function Eb(c){la=c.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:o.base64})),sa=c.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${o.base64}`,description:o.description||""})),console.log(`[PNG Storage] Stored ${la.length} PNG figures for LaTeX compilation and download`);try{localStorage.setItem("icis_png_figures",JSON.stringify(la))}catch(o){console.warn("[PNG Storage] Could not persist to localStorage:",o)}}function vm(){if(la.length>0)return la;try{const c=localStorage.getItem("icis_png_figures");if(c){const o=JSON.parse(c);if(o&&o.length>0)return console.log(`[PNG Storage] Recovered ${o.length} figures from localStorage`),la=o,la}}catch(c){console.warn("[PNG Storage] Could not read from localStorage:",c)}return la}let rn=null;function bm(c,o){rn={filename:c,content:o},console.log(`[Bibliography] Stored ${c} (${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries)`);try{localStorage.setItem("icis_bibliography",JSON.stringify(rn))}catch(s){console.warn("[Bibliography] Could not persist to localStorage:",s)}}function xm(){if(rn)return rn;try{const c=localStorage.getItem("icis_bibliography");if(c){const o=JSON.parse(c);if(o&&o.content)return console.log(`[Bibliography] Recovered from localStorage: ${o.filename}`),rn=o,rn}}catch(c){console.warn("[Bibliography] Could not read from localStorage:",c)}return rn}function Sm(){if(rn)return rn;try{const c=localStorage.getItem("icis_bibliography");if(c){const o=JSON.parse(c);if(o&&o.content)return console.log(`[Bibliography] Recovered from localStorage for download: ${o.filename}`),rn=o,rn}}catch(c){console.warn("[Bibliography] Could not read from localStorage:",c)}return rn}let Sr=null;function wb(c,o){if(!c||c.length===0)return"# No chart data available";const s=['"""',"ICIScopilot - Visualization Code",`Generated: ${new Date().toISOString()}`,o?"Data Source: AI-synthesized illustrative data":"Data Source: User-provided data file","","This script reproduces the figures generated for your research paper.","Requirements: pip install matplotlib numpy",'"""',"","import matplotlib.pyplot as plt","import numpy as np","","# Set publication-quality defaults","plt.rcParams.update({",'    "font.size": 12,','    "axes.titlesize": 14,','    "axes.labelsize": 12,','    "figure.figsize": (10, 6),','    "figure.dpi": 150',"})",""];return c.forEach((u,d)=>{var f,g,h,x,p,T,R,_;if(s.push("# ============================================================================"),s.push(`# Figure ${d+1}: ${u.title||"Untitled"}`),s.push("# ============================================================================"),s.push(""),s.push(`fig${d+1}, ax${d+1} = plt.subplots()`),s.push(""),u.type==="bar")s.push("# Bar chart data"),s.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets.length>0&&(u.datasets.forEach((v,A)=>{s.push(`data_${d+1}_${A} = ${JSON.stringify(v.data||[])}`)}),u.datasets.length===1?s.push(`ax${d+1}.bar(labels_${d+1}, data_${d+1}_0, color='steelblue')`):(s.push(`x = np.arange(len(labels_${d+1}))`),s.push(`width = ${(.8/u.datasets.length).toFixed(2)}`),u.datasets.forEach((v,A)=>{const m=A-(u.datasets.length-1)/2;s.push(`ax${d+1}.bar(x + ${m.toFixed(2)}*width, data_${d+1}_${A}, width, label='${v.label||`Series ${A+1}`}')`)}),s.push(`ax${d+1}.set_xticks(x)`),s.push(`ax${d+1}.set_xticklabels(labels_${d+1})`),s.push(`ax${d+1}.legend()`)));else if(u.type==="line")s.push("# Line chart data"),s.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets.length>0&&(u.datasets.forEach((v,A)=>{s.push(`data_${d+1}_${A} = ${JSON.stringify(v.data||[])}`),s.push(`ax${d+1}.plot(labels_${d+1}, data_${d+1}_${A}, marker='o', label='${v.label||`Series ${A+1}`}')`)}),u.datasets.length>1&&s.push(`ax${d+1}.legend()`));else if(u.type==="pie"||u.type==="doughnut")s.push("# Pie chart data"),s.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets[0]&&(s.push(`data_${d+1} = ${JSON.stringify(u.datasets[0].data||[])}`),s.push(`ax${d+1}.pie(data_${d+1}, labels=labels_${d+1}, autopct='%1.1f%%')`));else if(u.type==="scatter"){if(s.push("# Scatter plot data"),u.datasets&&u.datasets[0]&&u.datasets[0].data){const v=u.datasets[0].data;s.push(`x_${d+1} = ${JSON.stringify(v.map(A=>A.x||A))}`),s.push(`y_${d+1} = ${JSON.stringify(v.map(A=>A.y||A))}`),s.push(`ax${d+1}.scatter(x_${d+1}, y_${d+1}, alpha=0.6)`)}}else s.push(`# ${u.type} chart - data structure:`),s.push(`chart_config_${d+1} = ${JSON.stringify(u,null,2).split(`
`).map((v,A)=>A===0?v:"# "+v).join(`
`)}`);s.push(""),s.push(`ax${d+1}.set_title('${(u.title||"").replace(/'/g,"\\'")}')`),(x=(h=(g=(f=u.options)==null?void 0:f.scales)==null?void 0:g.x)==null?void 0:h.title)!=null&&x.text&&s.push(`ax${d+1}.set_xlabel('${u.options.scales.x.title.text}')`),(_=(R=(T=(p=u.options)==null?void 0:p.scales)==null?void 0:T.y)==null?void 0:R.title)!=null&&_.text&&s.push(`ax${d+1}.set_ylabel('${u.options.scales.y.title.text}')`),s.push("plt.tight_layout()"),s.push(`fig${d+1}.savefig('figure_${d+1}.png', dpi=300, bbox_inches='tight')`),s.push(`print(f"Saved figure_${d+1}.png")`),s.push("")}),s.push("# Show all figures"),s.push("plt.show()"),s.push(""),s.push(`print("\\nGenerated ${c.length} figures successfully!")`),s.join(`
`)}function Ab(c,o){const s=wb(c,o);Sr={chartData:c,pythonCode:s,isSynthetic:o,generatedAt:new Date().toISOString()},console.log(`[Chart Data] Stored ${(c==null?void 0:c.length)??0} chart configs and Python code (${s.length} chars)`)}function Em(){return Sr?{chartDataJson:JSON.stringify(Sr.chartData,null,2),pythonCode:Sr.pythonCode,isSynthetic:Sr.isSynthetic}:null}function wm(){Sr=null}let il=null;function Tb(c){il=c,console.log("[FileApi] Stored data table CSV");try{localStorage.setItem("icis_datatable_csv",c)}catch{console.warn("[FileApi] Could not persist data table CSV to localStorage")}}function Am(){if(il)return il;try{const c=localStorage.getItem("icis_datatable_csv");if(c)return il=c,c}catch{console.warn("[FileApi] Could not read data table CSV from localStorage")}return null}function Rb(c){console.log(`[FileApi] Stored validation report: ${c.verified} verified, ${c.discovered} discovered`);try{localStorage.setItem("icis_validation_report",JSON.stringify(c))}catch{console.warn("[FileApi] Could not persist validation report to localStorage")}}const Er=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:pl,backupAndClearFiles:dm,checkBackendHealth:kn,clearChartData:wm,clearCloudDataFile:hm,compileLaTeX:sm,createViewerLink:cm,deleteCloudDataFile:pm,downloadAllFigures:ym,downloadCompiledPdf:om,executePythonScript:hl,generateQuickChartFigures:Sb,getBibliographyContent:Sm,getBibliographyForCompilation:xm,getChartDataContent:Em,getCloudDataFile:ja,getCurrentSessionFigures:gm,getDataFilePreview:mm,getDataTableCsv:Am,getLastCompiledPdfBlob:gu,getPdfDownloadUrl:lm,getPngFiguresForCompilation:vm,openPaperViewer:um,readCloudDataFile:eu,refreshManifest:am,saveDataFile:Jc,saveFiles:rm,savePaperFile:Kc,saveReviewOutputs:im,storeBibliography:bm,storeChartData:Ab,storeDataTableCsv:Tb,storePngFiguresForCompilation:Eb,storeValidationReport:Rb,uploadDataFileToCloud:fm},Symbol.toStringTag,{value:"Module"})),_b=({logs:c,isProcessing:o,currentRound:s,isComplete:u=!1,onProceedToSupervisor:d,onAbort:f,onRestart:g,filePrefix:h,participantEmail:x})=>{const[p,T]=fe.useState([]),[R,_]=fe.useState(null),[v,A]=fe.useState(!1),[m,S]=fe.useState({}),w=async()=>{A(!0),_(null);const j=rl(s),H=Ti(s),P=ua(s,"icis_paper");if(!j||!H||!P){_("Missing files to save"),A(!1);return}const G=await im(s,j,H,P,h,x);G.success?T(G.files||[]):_(G.error||"Failed to save files"),A(!1)},O=async(j,H)=>{var V;const P=(V=j.target.files)==null?void 0:V[0];if(!P)return;const G=await P.text();try{const oe=JSON.parse(G);S(ce=>({...ce,[H]:oe}))}catch(oe){console.error(`Failed to parse ${H} file:`,oe)}},z=()=>{const j=m.oversight||rl(s),H=m.feedback||Ti(s),P=ua(s,"icis_paper");j&&H&&P&&d&&d({oversight:j,feedback:H,paperContent:P,paperVersion:s})},B=u&&(m.oversight&&m.feedback||rl(s)&&Ti(s));return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Reviewing Paper (Round ",s,")"]}),i.jsx(du,{stageName:"Reviewer",isProcessing:o,canAbort:!0,canRestart:!o&&u,onAbort:f||(()=>{}),onRestart:g||(()=>{})})]}),i.jsx(Di,{logs:c,height:"h-48"}),i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${o?"bg-indigo-100 text-indigo-600":u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:o?i.jsx(cn,{size:14,className:"animate-spin"}):u?i.jsx(zt,{size:14}):"1"}),i.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),i.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?i.jsx(zt,{size:14}):"2"}),i.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),i.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?i.jsx(zt,{size:14}):"3"}),i.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),u&&i.jsx("div",{className:"mt-6",children:i.jsx(xb,{allOversight:uu(),compact:!0})}),u&&i.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[i.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[i.jsx(cl,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),i.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),i.jsxs("button",{onClick:w,disabled:v,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[i.jsx(cl,{size:16,className:v?"animate-pulse":""}),v?"Downloading...":"Download Review Outputs"]}),i.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",s,".json, feedback_v",s,".json, icis_paper_v",s,".tex"]}),p.length>0&&i.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",p.join(", ")]}),R&&i.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",R]}),i.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[i.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[i.jsx(ou,{size:16}),"Upload Modified Files (Optional)"]}),i.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",m.oversight&&i.jsx(zt,{size:12,className:"inline text-emerald-500"})]}),i.jsx("input",{type:"file",accept:".json",onChange:j=>O(j,"oversight"),className:"text-xs w-full"})]}),i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",m.feedback&&i.jsx(zt,{size:12,className:"inline text-emerald-500"})]}),i.jsx("input",{type:"file",accept:".json",onChange:j=>O(j,"feedback"),className:"text-xs w-full"})]})]})]}),i.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:i.jsxs("button",{onClick:z,disabled:!B,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",i.jsx(Yh,{size:18})]})})]})]})},Cb=({currentRound:c,currentPaperVersion:o,lastFeedback:s,isProcessing:u,oversightData:d,allOversight:f,onAction:g,reviewOutputFiles:h})=>{const[x,p]=fe.useState(""),[T,R]=fe.useState(!1),[_,v]=fe.useState(!1),[A,m]=fe.useState(!1),S=(h==null?void 0:h.oversight)||d,w=h==null?void 0:h.feedback,O=()=>{Jv(o,"icis_paper")},z=(h==null?void 0:h.paperContent)||ua(o,"icis_paper"),B=h?"Uploaded/Downloaded files":"Internal storage",j=(S==null?void 0:S.averageScore)||0,H=(S==null?void 0:S.errorCounts.majorErrors)||0,P=S?S.reviewScores.novelty<4||S.reviewScores.significance<4||S.reviewScores.methodologicalRigor<4||S.reviewScores.clarity<4||S.reviewScores.relevance<4:!1,G=S?S.trustworthiness.reliability<5||S.trustworthiness.benevolence<5||S.trustworthiness.goalAlignment<5:!1,V=((S==null?void 0:S.criticalAlerts.length)||0)>0,oe=P||G||H>0||V,ce=!oe&&j>=4;return i.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[i.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),i.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),i.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",c]}),i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),i.jsx("div",{className:`p-4 font-mono text-sm ${oe?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:i.jsxs("div",{className:"font-bold",children:["STATUS: ",oe?"⚠️ ATTENTION NEEDED":ce?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),(S==null?void 0:S.improvementPotential)&&i.jsxs("div",{className:`p-4 font-mono text-sm border-x border-b ${S.improvementPotential==="exhausted"?"bg-blue-100 border-blue-300":S.improvementPotential==="low"?"bg-yellow-100 border-yellow-300":"bg-slate-100 border-slate-300"}`,children:[i.jsxs("div",{className:"font-bold mb-1",children:["IMPROVEMENT POTENTIAL: ",S.improvementPotential==="exhausted"?"🏁 EXHAUSTED - Paper has reached its potential":S.improvementPotential==="low"?"📉 LOW - Minor improvements only":S.improvementPotential==="medium"?"📊 MEDIUM - Moderate improvements possible":"📈 HIGH - Significant improvements possible"]}),S.convergenceReason&&i.jsxs("div",{className:"text-xs mt-2 text-slate-700",children:[i.jsx("span",{className:"font-semibold",children:"Reason: "}),S.convergenceReason]}),(S.improvementPotential==="exhausted"||S.canImprove===!1)&&i.jsx("div",{className:"text-xs mt-2 text-blue-700 font-medium",children:"ℹ️ The paper has reached its maximum quality given the available interview and data. You may finalize or provide additional source materials for further improvement."})]}),i.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[i.jsx(Ii,{size:16,className:"text-slate-600"}),i.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),i.jsx("span",{className:"text-slate-600",children:B})]}),i.jsx("button",{onClick:()=>m(!A),className:"text-xs text-indigo-600 hover:underline",children:A?"Hide Details":"Show Details"})]}),A&&i.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),i.jsxs("p",{className:"text-slate-600",children:["oversight_v",(S==null?void 0:S.version)||c,".json",(h==null?void 0:h.oversight)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),i.jsxs("p",{className:"text-slate-600",children:["feedback_v",(w==null?void 0:w.version)||c,".json",(h==null?void 0:h.feedback)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),i.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(h==null?void 0:h.paperVersion)||o,".tex",(h==null?void 0:h.paperContent)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),i.jsx("p",{className:h?"text-emerald-600":"text-slate-600",children:h?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),f.map((D,Y)=>i.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",D.version]},Y)),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),i.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(D=>{var E;const Y=D==="Methodological Rigor"?"methodologicalRigor":D.toLowerCase();return i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:D}),f.map((W,I)=>{const k=W.reviewScores[Y]||0;return i.jsx("td",{className:`text-center p-2 ${k<4?"text-red-600 font-bold":""}`,children:k},I)}),i.jsx("td",{className:"p-2 text-slate-600 text-xs",children:S!=null&&S.reviewComments?((E=S.reviewComments[Y])==null?void 0:E.substring(0,30))+"...":"-"})]},D)}),i.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"AVERAGE"}),f.map((D,Y)=>i.jsx("td",{className:"text-center p-2",children:D.averageScore.toFixed(1)},Y)),i.jsx("td",{className:"p-2 text-xs",children:f.length>1?f[f.length-1].averageScore>f[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),f.map((D,Y)=>i.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",D.version]},Y)),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Count"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),f.map((D,Y)=>i.jsx("td",{className:`text-center p-2 ${D.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:D.errorCounts.majorErrors},Y)),i.jsx("td",{className:"p-2 text-center font-bold text-red-600",children:(S==null?void 0:S.errorCounts.majorErrors)||0})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),f.map((D,Y)=>i.jsx("td",{className:"text-center p-2",children:D.errorCounts.minorErrors},Y)),i.jsx("td",{className:"p-2 text-center",children:(S==null?void 0:S.errorCounts.minorErrors)||0})]}),i.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"TOTAL"}),f.map((D,Y)=>i.jsx("td",{className:"text-center p-2",children:D.errorCounts.majorErrors+D.errorCounts.minorErrors},Y)),i.jsx("td",{className:"p-2 text-center",children:((S==null?void 0:S.errorCounts.majorErrors)||0)+((S==null?void 0:S.errorCounts.minorErrors)||0)})]})]})]})}),S&&(S.errorDetails.majorErrors.length>0||S.errorDetails.minorErrors.length>0)&&i.jsxs("div",{className:"mt-4 border-t border-slate-200 pt-4",children:[i.jsx("h4",{className:"font-bold text-slate-700 mb-2 font-mono text-sm",children:"DETAILED ERROR LIST:"}),S.errorDetails.majorErrors.length>0&&i.jsxs("div",{className:"mb-3",children:[i.jsxs("h5",{className:"font-semibold text-red-700 text-sm mb-1",children:["Major Errors (",S.errorDetails.majorErrors.length,"):"]}),i.jsx("ul",{className:"list-disc list-inside space-y-1",children:S.errorDetails.majorErrors.map((D,Y)=>i.jsx("li",{className:"text-sm text-red-600 ml-2",children:D},Y))})]}),S.errorDetails.minorErrors.length>0&&i.jsxs("div",{children:[i.jsxs("h5",{className:"font-semibold text-amber-700 text-sm mb-1",children:["Minor Errors (",S.errorDetails.minorErrors.length,"):"]}),i.jsx("ul",{className:"list-disc list-inside space-y-1",children:S.errorDetails.minorErrors.map((D,Y)=>i.jsx("li",{className:"text-sm text-amber-600 ml-2",children:D},Y))})]})]})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),i.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),i.jsx("td",{className:`text-center p-2 ${((S==null?void 0:S.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(S==null?void 0:S.trustworthiness.reliability)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(S==null?void 0:S.trustworthiness.reliabilityRationale)||"-"})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),i.jsx("td",{className:`text-center p-2 ${((S==null?void 0:S.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(S==null?void 0:S.trustworthiness.benevolence)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(S==null?void 0:S.trustworthiness.benevolenceRationale)||"-"})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),i.jsx("td",{className:`text-center p-2 ${((S==null?void 0:S.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(S==null?void 0:S.trustworthiness.goalAlignment)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(S==null?void 0:S.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),i.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${V?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),V?i.jsx("div",{className:"space-y-3",children:S==null?void 0:S.criticalAlerts.map((D,Y)=>i.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[i.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",D.number,": ",D.title," (BLOCKING ISSUE)"]}),i.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Status:"})," ",D.status]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Impact:"})," ",D.impact]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Details:"})," ",D.details]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Action Required:"})," ",D.actionRequired]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Consequence:"})," ",D.consequence]})]})]},Y))}):i.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),i.jsxs("button",{onClick:()=>R(!T),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[i.jsx(Qc,{size:12}),T?"Hide Full":"Show Full"]})]}),T?i.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:w?i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Overall Assessment:"}),i.jsx("p",{children:w.overallAssessment||"No assessment available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Research Question & Contribution:"}),i.jsx("p",{children:w.researchQuestion||"No feedback available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Method:"}),i.jsx("p",{children:w.method||"No feedback available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Potential Impact:"}),i.jsx("p",{children:w.potentialImpact||"No feedback available."})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Writing Quality:"}),i.jsx("p",{children:w.writing||"No feedback available."})]}),w.majorConcerns&&w.majorConcerns.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-red-600",children:"Major Concerns:"}),i.jsx("ul",{className:"list-disc list-inside",children:w.majorConcerns.map((D,Y)=>i.jsx("li",{children:D},Y))})]}),w.minorCorrections&&w.minorCorrections.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Minor Corrections:"}),i.jsx("ul",{className:"list-disc list-inside",children:w.minorCorrections.map((D,Y)=>i.jsx("li",{children:D},Y))})]})]}):i.jsx("p",{children:s||"No feedback generated."})}):i.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(w==null?void 0:w.overallAssessment)||s||"No feedback generated."})]}),i.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${oe?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),oe?i.jsxs("div",{children:[i.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",c+1]}),i.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",P?"Review scores below threshold (< 4)":H>0?`${H} major error(s) remaining`:G?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),i.jsxs("div",{className:"mt-2 text-sm",children:[i.jsx("p",{className:"font-medium",children:"Priority actions:"}),i.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:S==null?void 0:S.errorDetails.majorErrors.slice(0,3).map((D,Y)=>i.jsx("li",{children:D},Y))})]})]}):i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),i.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),i.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[i.jsxs("li",{children:["Average review score: ",j.toFixed(1),"/5"]}),i.jsx("li",{children:"All trustworthiness scores ≥ 5"}),i.jsx("li",{children:"No major errors remaining"}),i.jsx("li",{children:"No critical alerts"})]})]})]}),i.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),i.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[i.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[i.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),i.jsx("li",{children:"• Current feedback will guide improvements"}),i.jsx("li",{children:"• Add your directives below"})]})]}),i.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[i.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Sends paper to ICISfinalize"}),i.jsx("li",{children:"• Paper will be prepared for submission"}),i.jsx("li",{children:"• No further revisions will be made"})]})]})]}),i.jsxs("div",{className:"bg-slate-800 p-3 rounded mb-4",children:[i.jsx("p",{className:"font-bold text-orange-400",children:"OPTION C: GENERATE SYNTHETIC DATA"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Generates synthetic data based on paper's research model"}),i.jsx("li",{children:"• Updates Results section with statistical analysis"}),i.jsx("li",{children:"• Use when data collection is planned but paper needs empirical demonstration"})]})]})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),i.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:x,onChange:D=>p(D.target.value)})]}),i.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("button",{onClick:()=>g("revise",x),disabled:u,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),i.jsx("button",{onClick:()=>g("finalize"),disabled:u,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]}),i.jsx("div",{className:"flex justify-center mt-3",children:i.jsx("button",{onClick:()=>g("generateSyntheticData",x),disabled:u,className:"w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] GENERATE SYNTHETIC DATA"})})]}),i.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[i.jsxs("button",{onClick:()=>v(!_),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[i.jsx(Qc,{size:14})," ",_?"Hide":"View"," Paper Draft"]}),i.jsxs("button",{onClick:O,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[i.jsx(cl,{size:14})," Download (.tex)"]})]}),_&&z&&i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",o,"):"]}),i.jsx("div",{className:"max-h-96 overflow-y-auto",children:i.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:z})})]})]})},Nb=({logs:c,isProcessing:o,currentPaperVersion:s,paperContent:u,onAbort:d,onRestart:f})=>i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Revising Paper (v",s," → v",(s||0)+1,")"]}),i.jsx(du,{stageName:"Reviser",isProcessing:o,canAbort:!0,canRestart:!o,onAbort:d||(()=>{}),onRestart:f||(()=>{})})]}),i.jsx(Di,{logs:c,height:"h-48"}),i.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),i.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),i.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:u?i.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:u}):i.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function Js(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var $c={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Mh;function Ib(){return Mh||(Mh=1,(function(c,o){(function(s){c.exports=s()})(function(){return(function s(u,d,f){function g(p,T){if(!d[p]){if(!u[p]){var R=typeof Js=="function"&&Js;if(!T&&R)return R(p,!0);if(h)return h(p,!0);var _=new Error("Cannot find module '"+p+"'");throw _.code="MODULE_NOT_FOUND",_}var v=d[p]={exports:{}};u[p][0].call(v.exports,function(A){var m=u[p][1][A];return g(m||A)},v,v.exports,s,u,d,f)}return d[p].exports}for(var h=typeof Js=="function"&&Js,x=0;x<f.length;x++)g(f[x]);return g})({1:[function(s,u,d){var f=s("./utils"),g=s("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";d.encode=function(x){for(var p,T,R,_,v,A,m,S=[],w=0,O=x.length,z=O,B=f.getTypeOf(x)!=="string";w<x.length;)z=O-w,R=B?(p=x[w++],T=w<O?x[w++]:0,w<O?x[w++]:0):(p=x.charCodeAt(w++),T=w<O?x.charCodeAt(w++):0,w<O?x.charCodeAt(w++):0),_=p>>2,v=(3&p)<<4|T>>4,A=1<z?(15&T)<<2|R>>6:64,m=2<z?63&R:64,S.push(h.charAt(_)+h.charAt(v)+h.charAt(A)+h.charAt(m));return S.join("")},d.decode=function(x){var p,T,R,_,v,A,m=0,S=0,w="data:";if(x.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var O,z=3*(x=x.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(x.charAt(x.length-1)===h.charAt(64)&&z--,x.charAt(x.length-2)===h.charAt(64)&&z--,z%1!=0)throw new Error("Invalid base64 input, bad content length.");for(O=g.uint8array?new Uint8Array(0|z):new Array(0|z);m<x.length;)p=h.indexOf(x.charAt(m++))<<2|(_=h.indexOf(x.charAt(m++)))>>4,T=(15&_)<<4|(v=h.indexOf(x.charAt(m++)))>>2,R=(3&v)<<6|(A=h.indexOf(x.charAt(m++))),O[S++]=p,v!==64&&(O[S++]=T),A!==64&&(O[S++]=R);return O}},{"./support":30,"./utils":32}],2:[function(s,u,d){var f=s("./external"),g=s("./stream/DataWorker"),h=s("./stream/Crc32Probe"),x=s("./stream/DataLengthProbe");function p(T,R,_,v,A){this.compressedSize=T,this.uncompressedSize=R,this.crc32=_,this.compression=v,this.compressedContent=A}p.prototype={getContentWorker:function(){var T=new g(f.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new x("data_length")),R=this;return T.on("end",function(){if(this.streamInfo.data_length!==R.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),T},getCompressedWorker:function(){return new g(f.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},p.createWorkerFrom=function(T,R,_){return T.pipe(new h).pipe(new x("uncompressedSize")).pipe(R.compressWorker(_)).pipe(new x("compressedSize")).withStreamInfo("compression",R)},u.exports=p},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(s,u,d){var f=s("./stream/GenericWorker");d.STORE={magic:"\0\0",compressWorker:function(){return new f("STORE compression")},uncompressWorker:function(){return new f("STORE decompression")}},d.DEFLATE=s("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(s,u,d){var f=s("./utils"),g=(function(){for(var h,x=[],p=0;p<256;p++){h=p;for(var T=0;T<8;T++)h=1&h?3988292384^h>>>1:h>>>1;x[p]=h}return x})();u.exports=function(h,x){return h!==void 0&&h.length?f.getTypeOf(h)!=="string"?(function(p,T,R,_){var v=g,A=_+R;p^=-1;for(var m=_;m<A;m++)p=p>>>8^v[255&(p^T[m])];return-1^p})(0|x,h,h.length,0):(function(p,T,R,_){var v=g,A=_+R;p^=-1;for(var m=_;m<A;m++)p=p>>>8^v[255&(p^T.charCodeAt(m))];return-1^p})(0|x,h,h.length,0):0}},{"./utils":32}],5:[function(s,u,d){d.base64=!1,d.binary=!1,d.dir=!1,d.createFolders=!0,d.date=null,d.compression=null,d.compressionOptions=null,d.comment=null,d.unixPermissions=null,d.dosPermissions=null},{}],6:[function(s,u,d){var f=null;f=typeof Promise<"u"?Promise:s("lie"),u.exports={Promise:f}},{lie:37}],7:[function(s,u,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",g=s("pako"),h=s("./utils"),x=s("./stream/GenericWorker"),p=f?"uint8array":"array";function T(R,_){x.call(this,"FlateWorker/"+R),this._pako=null,this._pakoAction=R,this._pakoOptions=_,this.meta={}}d.magic="\b\0",h.inherits(T,x),T.prototype.processChunk=function(R){this.meta=R.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(p,R.data),!1)},T.prototype.flush=function(){x.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},T.prototype.cleanUp=function(){x.prototype.cleanUp.call(this),this._pako=null},T.prototype._createPako=function(){this._pako=new g[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var R=this;this._pako.onData=function(_){R.push({data:_,meta:R.meta})}},d.compressWorker=function(R){return new T("Deflate",R)},d.uncompressWorker=function(){return new T("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(s,u,d){function f(v,A){var m,S="";for(m=0;m<A;m++)S+=String.fromCharCode(255&v),v>>>=8;return S}function g(v,A,m,S,w,O){var z,B,j=v.file,H=v.compression,P=O!==p.utf8encode,G=h.transformTo("string",O(j.name)),V=h.transformTo("string",p.utf8encode(j.name)),oe=j.comment,ce=h.transformTo("string",O(oe)),D=h.transformTo("string",p.utf8encode(oe)),Y=V.length!==j.name.length,E=D.length!==oe.length,W="",I="",k="",J=j.dir,q=j.date,me={crc32:0,compressedSize:0,uncompressedSize:0};A&&!m||(me.crc32=v.crc32,me.compressedSize=v.compressedSize,me.uncompressedSize=v.uncompressedSize);var C=0;A&&(C|=8),P||!Y&&!E||(C|=2048);var L=0,le=0;J&&(L|=16),w==="UNIX"?(le=798,L|=(function(se,Ee){var Ce=se;return se||(Ce=Ee?16893:33204),(65535&Ce)<<16})(j.unixPermissions,J)):(le=20,L|=(function(se){return 63&(se||0)})(j.dosPermissions)),z=q.getUTCHours(),z<<=6,z|=q.getUTCMinutes(),z<<=5,z|=q.getUTCSeconds()/2,B=q.getUTCFullYear()-1980,B<<=4,B|=q.getUTCMonth()+1,B<<=5,B|=q.getUTCDate(),Y&&(I=f(1,1)+f(T(G),4)+V,W+="up"+f(I.length,2)+I),E&&(k=f(1,1)+f(T(ce),4)+D,W+="uc"+f(k.length,2)+k);var ne="";return ne+=`
\0`,ne+=f(C,2),ne+=H.magic,ne+=f(z,2),ne+=f(B,2),ne+=f(me.crc32,4),ne+=f(me.compressedSize,4),ne+=f(me.uncompressedSize,4),ne+=f(G.length,2),ne+=f(W.length,2),{fileRecord:R.LOCAL_FILE_HEADER+ne+G+W,dirRecord:R.CENTRAL_FILE_HEADER+f(le,2)+ne+f(ce.length,2)+"\0\0\0\0"+f(L,4)+f(S,4)+G+W+ce}}var h=s("../utils"),x=s("../stream/GenericWorker"),p=s("../utf8"),T=s("../crc32"),R=s("../signature");function _(v,A,m,S){x.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=A,this.zipPlatform=m,this.encodeFileName=S,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}h.inherits(_,x),_.prototype.push=function(v){var A=v.meta.percent||0,m=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,x.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:m?(A+100*(m-S-1))/m:100}}))},_.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var A=this.streamFiles&&!v.file.dir;if(A){var m=g(v,A,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},_.prototype.closedSource=function(v){this.accumulate=!1;var A=this.streamFiles&&!v.file.dir,m=g(v,A,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),A)this.push({data:(function(S){return R.DATA_DESCRIPTOR+f(S.crc32,4)+f(S.compressedSize,4)+f(S.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},_.prototype.flush=function(){for(var v=this.bytesWritten,A=0;A<this.dirRecords.length;A++)this.push({data:this.dirRecords[A],meta:{percent:100}});var m=this.bytesWritten-v,S=(function(w,O,z,B,j){var H=h.transformTo("string",j(B));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(w,2)+f(w,2)+f(O,4)+f(z,4)+f(H.length,2)+H})(this.dirRecords.length,m,v,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},_.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},_.prototype.registerPrevious=function(v){this._sources.push(v);var A=this;return v.on("data",function(m){A.processChunk(m)}),v.on("end",function(){A.closedSource(A.previous.streamInfo),A._sources.length?A.prepareNextSource():A.end()}),v.on("error",function(m){A.error(m)}),this},_.prototype.resume=function(){return!!x.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},_.prototype.error=function(v){var A=this._sources;if(!x.prototype.error.call(this,v))return!1;for(var m=0;m<A.length;m++)try{A[m].error(v)}catch{}return!0},_.prototype.lock=function(){x.prototype.lock.call(this);for(var v=this._sources,A=0;A<v.length;A++)v[A].lock()},u.exports=_},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(s,u,d){var f=s("../compressions"),g=s("./ZipFileWorker");d.generateWorker=function(h,x,p){var T=new g(x.streamFiles,p,x.platform,x.encodeFileName),R=0;try{h.forEach(function(_,v){R++;var A=(function(O,z){var B=O||z,j=f[B];if(!j)throw new Error(B+" is not a valid compression method !");return j})(v.options.compression,x.compression),m=v.options.compressionOptions||x.compressionOptions||{},S=v.dir,w=v.date;v._compressWorker(A,m).withStreamInfo("file",{name:_,dir:S,date:w,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(T)}),T.entriesCount=R}catch(_){T.error(_)}return T}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(s,u,d){function f(){if(!(this instanceof f))return new f;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var g=new f;for(var h in this)typeof this[h]!="function"&&(g[h]=this[h]);return g}}(f.prototype=s("./object")).loadAsync=s("./load"),f.support=s("./support"),f.defaults=s("./defaults"),f.version="3.10.1",f.loadAsync=function(g,h){return new f().loadAsync(g,h)},f.external=s("./external"),u.exports=f},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(s,u,d){var f=s("./utils"),g=s("./external"),h=s("./utf8"),x=s("./zipEntries"),p=s("./stream/Crc32Probe"),T=s("./nodejsUtils");function R(_){return new g.Promise(function(v,A){var m=_.decompressed.getContentWorker().pipe(new p);m.on("error",function(S){A(S)}).on("end",function(){m.streamInfo.crc32!==_.decompressed.crc32?A(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}u.exports=function(_,v){var A=this;return v=f.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),T.isNode&&T.isStream(_)?g.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):f.prepareContent("the loaded zip file",_,!0,v.optimizedBinaryString,v.base64).then(function(m){var S=new x(v);return S.load(m),S}).then(function(m){var S=[g.Promise.resolve(m)],w=m.files;if(v.checkCRC32)for(var O=0;O<w.length;O++)S.push(R(w[O]));return g.Promise.all(S)}).then(function(m){for(var S=m.shift(),w=S.files,O=0;O<w.length;O++){var z=w[O],B=z.fileNameStr,j=f.resolve(z.fileNameStr);A.file(j,z.decompressed,{binary:!0,optimizedBinaryString:!0,date:z.date,dir:z.dir,comment:z.fileCommentStr.length?z.fileCommentStr:null,unixPermissions:z.unixPermissions,dosPermissions:z.dosPermissions,createFolders:v.createFolders}),z.dir||(A.file(j).unsafeOriginalName=B)}return S.zipComment.length&&(A.comment=S.zipComment),A})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(s,u,d){var f=s("../utils"),g=s("../stream/GenericWorker");function h(x,p){g.call(this,"Nodejs stream input adapter for "+x),this._upstreamEnded=!1,this._bindStream(p)}f.inherits(h,g),h.prototype._bindStream=function(x){var p=this;(this._stream=x).pause(),x.on("data",function(T){p.push({data:T,meta:{percent:0}})}).on("error",function(T){p.isPaused?this.generatedError=T:p.error(T)}).on("end",function(){p.isPaused?p._upstreamEnded=!0:p.end()})},h.prototype.pause=function(){return!!g.prototype.pause.call(this)&&(this._stream.pause(),!0)},h.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},u.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(s,u,d){var f=s("readable-stream").Readable;function g(h,x,p){f.call(this,x),this._helper=h;var T=this;h.on("data",function(R,_){T.push(R)||T._helper.pause(),p&&p(_)}).on("error",function(R){T.emit("error",R)}).on("end",function(){T.push(null)})}s("../utils").inherits(g,f),g.prototype._read=function(){this._helper.resume()},u.exports=g},{"../utils":32,"readable-stream":16}],14:[function(s,u,d){u.exports={isNode:typeof Buffer<"u",newBufferFrom:function(f,g){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(f,g);if(typeof f=="number")throw new Error('The "data" argument must not be a number');return new Buffer(f,g)},allocBuffer:function(f){if(Buffer.alloc)return Buffer.alloc(f);var g=new Buffer(f);return g.fill(0),g},isBuffer:function(f){return Buffer.isBuffer(f)},isStream:function(f){return f&&typeof f.on=="function"&&typeof f.pause=="function"&&typeof f.resume=="function"}}},{}],15:[function(s,u,d){function f(j,H,P){var G,V=h.getTypeOf(H),oe=h.extend(P||{},T);oe.date=oe.date||new Date,oe.compression!==null&&(oe.compression=oe.compression.toUpperCase()),typeof oe.unixPermissions=="string"&&(oe.unixPermissions=parseInt(oe.unixPermissions,8)),oe.unixPermissions&&16384&oe.unixPermissions&&(oe.dir=!0),oe.dosPermissions&&16&oe.dosPermissions&&(oe.dir=!0),oe.dir&&(j=w(j)),oe.createFolders&&(G=S(j))&&O.call(this,G,!0);var ce=V==="string"&&oe.binary===!1&&oe.base64===!1;P&&P.binary!==void 0||(oe.binary=!ce),(H instanceof R&&H.uncompressedSize===0||oe.dir||!H||H.length===0)&&(oe.base64=!1,oe.binary=!0,H="",oe.compression="STORE",V="string");var D=null;D=H instanceof R||H instanceof x?H:A.isNode&&A.isStream(H)?new m(j,H):h.prepareContent(j,H,oe.binary,oe.optimizedBinaryString,oe.base64);var Y=new _(j,D,oe);this.files[j]=Y}var g=s("./utf8"),h=s("./utils"),x=s("./stream/GenericWorker"),p=s("./stream/StreamHelper"),T=s("./defaults"),R=s("./compressedObject"),_=s("./zipObject"),v=s("./generate"),A=s("./nodejsUtils"),m=s("./nodejs/NodejsStreamInputAdapter"),S=function(j){j.slice(-1)==="/"&&(j=j.substring(0,j.length-1));var H=j.lastIndexOf("/");return 0<H?j.substring(0,H):""},w=function(j){return j.slice(-1)!=="/"&&(j+="/"),j},O=function(j,H){return H=H!==void 0?H:T.createFolders,j=w(j),this.files[j]||f.call(this,j,null,{dir:!0,createFolders:H}),this.files[j]};function z(j){return Object.prototype.toString.call(j)==="[object RegExp]"}var B={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(j){var H,P,G;for(H in this.files)G=this.files[H],(P=H.slice(this.root.length,H.length))&&H.slice(0,this.root.length)===this.root&&j(P,G)},filter:function(j){var H=[];return this.forEach(function(P,G){j(P,G)&&H.push(G)}),H},file:function(j,H,P){if(arguments.length!==1)return j=this.root+j,f.call(this,j,H,P),this;if(z(j)){var G=j;return this.filter(function(oe,ce){return!ce.dir&&G.test(oe)})}var V=this.files[this.root+j];return V&&!V.dir?V:null},folder:function(j){if(!j)return this;if(z(j))return this.filter(function(V,oe){return oe.dir&&j.test(V)});var H=this.root+j,P=O.call(this,H),G=this.clone();return G.root=P.name,G},remove:function(j){j=this.root+j;var H=this.files[j];if(H||(j.slice(-1)!=="/"&&(j+="/"),H=this.files[j]),H&&!H.dir)delete this.files[j];else for(var P=this.filter(function(V,oe){return oe.name.slice(0,j.length)===j}),G=0;G<P.length;G++)delete this.files[P[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(j){var H,P={};try{if((P=h.extend(j||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:g.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");h.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var G=P.comment||this.comment||"";H=v.generateWorker(this,P,G)}catch(V){(H=new x("error")).error(V)}return new p(H,P.type||"string",P.mimeType)},generateAsync:function(j,H){return this.generateInternalStream(j).accumulate(H)},generateNodeStream:function(j,H){return(j=j||{}).type||(j.type="nodebuffer"),this.generateInternalStream(j).toNodejsStream(H)}};u.exports=B},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(s,u,d){u.exports=s("stream")},{stream:void 0}],17:[function(s,u,d){var f=s("./DataReader");function g(h){f.call(this,h);for(var x=0;x<this.data.length;x++)h[x]=255&h[x]}s("../utils").inherits(g,f),g.prototype.byteAt=function(h){return this.data[this.zero+h]},g.prototype.lastIndexOfSignature=function(h){for(var x=h.charCodeAt(0),p=h.charCodeAt(1),T=h.charCodeAt(2),R=h.charCodeAt(3),_=this.length-4;0<=_;--_)if(this.data[_]===x&&this.data[_+1]===p&&this.data[_+2]===T&&this.data[_+3]===R)return _-this.zero;return-1},g.prototype.readAndCheckSignature=function(h){var x=h.charCodeAt(0),p=h.charCodeAt(1),T=h.charCodeAt(2),R=h.charCodeAt(3),_=this.readData(4);return x===_[0]&&p===_[1]&&T===_[2]&&R===_[3]},g.prototype.readData=function(h){if(this.checkOffset(h),h===0)return[];var x=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,x},u.exports=g},{"../utils":32,"./DataReader":18}],18:[function(s,u,d){var f=s("../utils");function g(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}g.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(){},readInt:function(h){var x,p=0;for(this.checkOffset(h),x=this.index+h-1;x>=this.index;x--)p=(p<<8)+this.byteAt(x);return this.index+=h,p},readString:function(h){return f.transformTo("string",this.readData(h))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC(1980+(h>>25&127),(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(31&h)<<1))}},u.exports=g},{"../utils":32}],19:[function(s,u,d){var f=s("./Uint8ArrayReader");function g(h){f.call(this,h)}s("../utils").inherits(g,f),g.prototype.readData=function(h){this.checkOffset(h);var x=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,x},u.exports=g},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(s,u,d){var f=s("./DataReader");function g(h){f.call(this,h)}s("../utils").inherits(g,f),g.prototype.byteAt=function(h){return this.data.charCodeAt(this.zero+h)},g.prototype.lastIndexOfSignature=function(h){return this.data.lastIndexOf(h)-this.zero},g.prototype.readAndCheckSignature=function(h){return h===this.readData(4)},g.prototype.readData=function(h){this.checkOffset(h);var x=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,x},u.exports=g},{"../utils":32,"./DataReader":18}],21:[function(s,u,d){var f=s("./ArrayReader");function g(h){f.call(this,h)}s("../utils").inherits(g,f),g.prototype.readData=function(h){if(this.checkOffset(h),h===0)return new Uint8Array(0);var x=this.data.subarray(this.zero+this.index,this.zero+this.index+h);return this.index+=h,x},u.exports=g},{"../utils":32,"./ArrayReader":17}],22:[function(s,u,d){var f=s("../utils"),g=s("../support"),h=s("./ArrayReader"),x=s("./StringReader"),p=s("./NodeBufferReader"),T=s("./Uint8ArrayReader");u.exports=function(R){var _=f.getTypeOf(R);return f.checkSupport(_),_!=="string"||g.uint8array?_==="nodebuffer"?new p(R):g.uint8array?new T(f.transformTo("uint8array",R)):new h(f.transformTo("array",R)):new x(R)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(s,u,d){d.LOCAL_FILE_HEADER="PK",d.CENTRAL_FILE_HEADER="PK",d.CENTRAL_DIRECTORY_END="PK",d.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",d.ZIP64_CENTRAL_DIRECTORY_END="PK",d.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(s,u,d){var f=s("./GenericWorker"),g=s("../utils");function h(x){f.call(this,"ConvertWorker to "+x),this.destType=x}g.inherits(h,f),h.prototype.processChunk=function(x){this.push({data:g.transformTo(this.destType,x.data),meta:x.meta})},u.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(s,u,d){var f=s("./GenericWorker"),g=s("../crc32");function h(){f.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s("../utils").inherits(h,f),h.prototype.processChunk=function(x){this.streamInfo.crc32=g(x.data,this.streamInfo.crc32||0),this.push(x)},u.exports=h},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(s,u,d){var f=s("../utils"),g=s("./GenericWorker");function h(x){g.call(this,"DataLengthProbe for "+x),this.propName=x,this.withStreamInfo(x,0)}f.inherits(h,g),h.prototype.processChunk=function(x){if(x){var p=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=p+x.data.length}g.prototype.processChunk.call(this,x)},u.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(s,u,d){var f=s("../utils"),g=s("./GenericWorker");function h(x){g.call(this,"DataWorker");var p=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,x.then(function(T){p.dataIsReady=!0,p.data=T,p.max=T&&T.length||0,p.type=f.getTypeOf(T),p.isPaused||p._tickAndRepeat()},function(T){p.error(T)})}f.inherits(h,g),h.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this.data=null},h.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,f.delay(this._tickAndRepeat,[],this)),!0)},h.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(f.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},h.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var x=null,p=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":x=this.data.substring(this.index,p);break;case"uint8array":x=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":x=this.data.slice(this.index,p)}return this.index=p,this.push({data:x,meta:{percent:this.max?this.index/this.max*100:0}})},u.exports=h},{"../utils":32,"./GenericWorker":28}],28:[function(s,u,d){function f(g){this.name=g||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}f.prototype={push:function(g){this.emit("data",g)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(g){this.emit("error",g)}return!0},error:function(g){return!this.isFinished&&(this.isPaused?this.generatedError=g:(this.isFinished=!0,this.emit("error",g),this.previous&&this.previous.error(g),this.cleanUp()),!0)},on:function(g,h){return this._listeners[g].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(g,h){if(this._listeners[g])for(var x=0;x<this._listeners[g].length;x++)this._listeners[g][x].call(this,h)},pipe:function(g){return g.registerPrevious(this)},registerPrevious:function(g){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=g.streamInfo,this.mergeStreamInfo(),this.previous=g;var h=this;return g.on("data",function(x){h.processChunk(x)}),g.on("end",function(){h.end()}),g.on("error",function(x){h.error(x)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var g=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),g=!0),this.previous&&this.previous.resume(),!g},flush:function(){},processChunk:function(g){this.push(g)},withStreamInfo:function(g,h){return this.extraStreamInfo[g]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var g in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,g)&&(this.streamInfo[g]=this.extraStreamInfo[g])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var g="Worker "+this.name;return this.previous?this.previous+" -> "+g:g}},u.exports=f},{}],29:[function(s,u,d){var f=s("../utils"),g=s("./ConvertWorker"),h=s("./GenericWorker"),x=s("../base64"),p=s("../support"),T=s("../external"),R=null;if(p.nodestream)try{R=s("../nodejs/NodejsStreamOutputAdapter")}catch{}function _(A,m){return new T.Promise(function(S,w){var O=[],z=A._internalType,B=A._outputType,j=A._mimeType;A.on("data",function(H,P){O.push(H),m&&m(P)}).on("error",function(H){O=[],w(H)}).on("end",function(){try{var H=(function(P,G,V){switch(P){case"blob":return f.newBlob(f.transformTo("arraybuffer",G),V);case"base64":return x.encode(G);default:return f.transformTo(P,G)}})(B,(function(P,G){var V,oe=0,ce=null,D=0;for(V=0;V<G.length;V++)D+=G[V].length;switch(P){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(ce=new Uint8Array(D),V=0;V<G.length;V++)ce.set(G[V],oe),oe+=G[V].length;return ce;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+P+"'")}})(z,O),j);S(H)}catch(P){w(P)}O=[]}).resume()})}function v(A,m,S){var w=m;switch(m){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=m,this._mimeType=S,f.checkSupport(w),this._worker=A.pipe(new g(w)),A.lock()}catch(O){this._worker=new h("error"),this._worker.error(O)}}v.prototype={accumulate:function(A){return _(this,A)},on:function(A,m){var S=this;return A==="data"?this._worker.on(A,function(w){m.call(S,w.data,w.meta)}):this._worker.on(A,function(){f.delay(m,arguments,S)}),this},resume:function(){return f.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(A){if(f.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new R(this,{objectMode:this._outputType!=="nodebuffer"},A)}},u.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(s,u,d){if(d.base64=!0,d.array=!0,d.string=!0,d.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",d.nodebuffer=typeof Buffer<"u",d.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")d.blob=!1;else{var f=new ArrayBuffer(0);try{d.blob=new Blob([f],{type:"application/zip"}).size===0}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);g.append(f),d.blob=g.getBlob("application/zip").size===0}catch{d.blob=!1}}}try{d.nodestream=!!s("readable-stream").Readable}catch{d.nodestream=!1}},{"readable-stream":16}],31:[function(s,u,d){for(var f=s("./utils"),g=s("./support"),h=s("./nodejsUtils"),x=s("./stream/GenericWorker"),p=new Array(256),T=0;T<256;T++)p[T]=252<=T?6:248<=T?5:240<=T?4:224<=T?3:192<=T?2:1;p[254]=p[254]=1;function R(){x.call(this,"utf-8 decode"),this.leftOver=null}function _(){x.call(this,"utf-8 encode")}d.utf8encode=function(v){return g.nodebuffer?h.newBufferFrom(v,"utf-8"):(function(A){var m,S,w,O,z,B=A.length,j=0;for(O=0;O<B;O++)(64512&(S=A.charCodeAt(O)))==55296&&O+1<B&&(64512&(w=A.charCodeAt(O+1)))==56320&&(S=65536+(S-55296<<10)+(w-56320),O++),j+=S<128?1:S<2048?2:S<65536?3:4;for(m=g.uint8array?new Uint8Array(j):new Array(j),O=z=0;z<j;O++)(64512&(S=A.charCodeAt(O)))==55296&&O+1<B&&(64512&(w=A.charCodeAt(O+1)))==56320&&(S=65536+(S-55296<<10)+(w-56320),O++),S<128?m[z++]=S:(S<2048?m[z++]=192|S>>>6:(S<65536?m[z++]=224|S>>>12:(m[z++]=240|S>>>18,m[z++]=128|S>>>12&63),m[z++]=128|S>>>6&63),m[z++]=128|63&S);return m})(v)},d.utf8decode=function(v){return g.nodebuffer?f.transformTo("nodebuffer",v).toString("utf-8"):(function(A){var m,S,w,O,z=A.length,B=new Array(2*z);for(m=S=0;m<z;)if((w=A[m++])<128)B[S++]=w;else if(4<(O=p[w]))B[S++]=65533,m+=O-1;else{for(w&=O===2?31:O===3?15:7;1<O&&m<z;)w=w<<6|63&A[m++],O--;1<O?B[S++]=65533:w<65536?B[S++]=w:(w-=65536,B[S++]=55296|w>>10&1023,B[S++]=56320|1023&w)}return B.length!==S&&(B.subarray?B=B.subarray(0,S):B.length=S),f.applyFromCharCode(B)})(v=f.transformTo(g.uint8array?"uint8array":"array",v))},f.inherits(R,x),R.prototype.processChunk=function(v){var A=f.transformTo(g.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(g.uint8array){var m=A;(A=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),A.set(m,this.leftOver.length)}else A=this.leftOver.concat(A);this.leftOver=null}var S=(function(O,z){var B;for((z=z||O.length)>O.length&&(z=O.length),B=z-1;0<=B&&(192&O[B])==128;)B--;return B<0||B===0?z:B+p[O[B]]>z?B:z})(A),w=A;S!==A.length&&(g.uint8array?(w=A.subarray(0,S),this.leftOver=A.subarray(S,A.length)):(w=A.slice(0,S),this.leftOver=A.slice(S,A.length))),this.push({data:d.utf8decode(w),meta:v.meta})},R.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:d.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},d.Utf8DecodeWorker=R,f.inherits(_,x),_.prototype.processChunk=function(v){this.push({data:d.utf8encode(v.data),meta:v.meta})},d.Utf8EncodeWorker=_},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(s,u,d){var f=s("./support"),g=s("./base64"),h=s("./nodejsUtils"),x=s("./external");function p(m){return m}function T(m,S){for(var w=0;w<m.length;++w)S[w]=255&m.charCodeAt(w);return S}s("setimmediate"),d.newBlob=function(m,S){d.checkSupport("blob");try{return new Blob([m],{type:S})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(m),w.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var R={stringifyByChunk:function(m,S,w){var O=[],z=0,B=m.length;if(B<=w)return String.fromCharCode.apply(null,m);for(;z<B;)S==="array"||S==="nodebuffer"?O.push(String.fromCharCode.apply(null,m.slice(z,Math.min(z+w,B)))):O.push(String.fromCharCode.apply(null,m.subarray(z,Math.min(z+w,B)))),z+=w;return O.join("")},stringifyByChar:function(m){for(var S="",w=0;w<m.length;w++)S+=String.fromCharCode(m[w]);return S},applyCanBeUsed:{uint8array:(function(){try{return f.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return f.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function _(m){var S=65536,w=d.getTypeOf(m),O=!0;if(w==="uint8array"?O=R.applyCanBeUsed.uint8array:w==="nodebuffer"&&(O=R.applyCanBeUsed.nodebuffer),O)for(;1<S;)try{return R.stringifyByChunk(m,w,S)}catch{S=Math.floor(S/2)}return R.stringifyByChar(m)}function v(m,S){for(var w=0;w<m.length;w++)S[w]=m[w];return S}d.applyFromCharCode=_;var A={};A.string={string:p,array:function(m){return T(m,new Array(m.length))},arraybuffer:function(m){return A.string.uint8array(m).buffer},uint8array:function(m){return T(m,new Uint8Array(m.length))},nodebuffer:function(m){return T(m,h.allocBuffer(m.length))}},A.array={string:_,array:p,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return h.newBufferFrom(m)}},A.arraybuffer={string:function(m){return _(new Uint8Array(m))},array:function(m){return v(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:p,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return h.newBufferFrom(new Uint8Array(m))}},A.uint8array={string:_,array:function(m){return v(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:p,nodebuffer:function(m){return h.newBufferFrom(m)}},A.nodebuffer={string:_,array:function(m){return v(m,new Array(m.length))},arraybuffer:function(m){return A.nodebuffer.uint8array(m).buffer},uint8array:function(m){return v(m,new Uint8Array(m.length))},nodebuffer:p},d.transformTo=function(m,S){if(S=S||"",!m)return S;d.checkSupport(m);var w=d.getTypeOf(S);return A[w][m](S)},d.resolve=function(m){for(var S=m.split("/"),w=[],O=0;O<S.length;O++){var z=S[O];z==="."||z===""&&O!==0&&O!==S.length-1||(z===".."?w.pop():w.push(z))}return w.join("/")},d.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":f.nodebuffer&&h.isBuffer(m)?"nodebuffer":f.uint8array&&m instanceof Uint8Array?"uint8array":f.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},d.checkSupport=function(m){if(!f[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},d.MAX_VALUE_16BITS=65535,d.MAX_VALUE_32BITS=-1,d.pretty=function(m){var S,w,O="";for(w=0;w<(m||"").length;w++)O+="\\x"+((S=m.charCodeAt(w))<16?"0":"")+S.toString(16).toUpperCase();return O},d.delay=function(m,S,w){setImmediate(function(){m.apply(w||null,S||[])})},d.inherits=function(m,S){function w(){}w.prototype=S.prototype,m.prototype=new w},d.extend=function(){var m,S,w={};for(m=0;m<arguments.length;m++)for(S in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],S)&&w[S]===void 0&&(w[S]=arguments[m][S]);return w},d.prepareContent=function(m,S,w,O,z){return x.Promise.resolve(S).then(function(B){return f.blob&&(B instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(B))!==-1)&&typeof FileReader<"u"?new x.Promise(function(j,H){var P=new FileReader;P.onload=function(G){j(G.target.result)},P.onerror=function(G){H(G.target.error)},P.readAsArrayBuffer(B)}):B}).then(function(B){var j=d.getTypeOf(B);return j?(j==="arraybuffer"?B=d.transformTo("uint8array",B):j==="string"&&(z?B=g.decode(B):w&&O!==!0&&(B=(function(H){return T(H,f.uint8array?new Uint8Array(H.length):new Array(H.length))})(B))),B):x.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(s,u,d){var f=s("./reader/readerFor"),g=s("./utils"),h=s("./signature"),x=s("./zipEntry"),p=s("./support");function T(R){this.files=[],this.loadOptions=R}T.prototype={checkSignature:function(R){if(!this.reader.readAndCheckSignature(R)){this.reader.index-=4;var _=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+g.pretty(_)+", expected "+g.pretty(R)+")")}},isSignature:function(R,_){var v=this.reader.index;this.reader.setIndex(R);var A=this.reader.readString(4)===_;return this.reader.setIndex(v),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var R=this.reader.readData(this.zipCommentLength),_=p.uint8array?"uint8array":"array",v=g.transformTo(_,R);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var R,_,v,A=this.zip64EndOfCentralSize-44;0<A;)R=this.reader.readInt(2),_=this.reader.readInt(4),v=this.reader.readData(_),this.zip64ExtensibleData[R]={id:R,length:_,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var R,_;for(R=0;R<this.files.length;R++)_=this.files[R],this.reader.setIndex(_.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),_.readLocalPart(this.reader),_.handleUTF8(),_.processAttributes()},readCentralDir:function(){var R;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)(R=new x({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(R);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var R=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(R<0)throw this.isSignature(0,h.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(R);var _=R;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,(R=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(R),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var A=_-v;if(0<A)this.isSignature(_,h.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(R){this.reader=f(R)},load:function(R){this.prepareReader(R),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},u.exports=T},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(s,u,d){var f=s("./reader/readerFor"),g=s("./utils"),h=s("./compressedObject"),x=s("./crc32"),p=s("./utf8"),T=s("./compressions"),R=s("./support");function _(v,A){this.options=v,this.loadOptions=A}_.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var A,m;if(v.skip(22),this.fileNameLength=v.readInt(2),m=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((A=(function(S){for(var w in T)if(Object.prototype.hasOwnProperty.call(T,w)&&T[w].magic===S)return T[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+g.pretty(this.compressionMethod)+" unknown (inner file : "+g.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,A,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var A=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(A),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=f(this.extraFields[1].value);this.uncompressedSize===g.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===g.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===g.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===g.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var A,m,S,w=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<w;)A=v.readInt(2),m=v.readInt(2),S=v.readData(m),this.extraFields[A]={id:A,length:m,value:S};v.setIndex(w)},handleUTF8:function(){var v=R.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=p.utf8decode(this.fileName),this.fileCommentStr=p.utf8decode(this.fileComment);else{var A=this.findExtraFieldUnicodePath();if(A!==null)this.fileNameStr=A;else{var m=g.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var w=g.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var A=f(v.value);return A.readInt(1)!==1||x(this.fileName)!==A.readInt(4)?null:p.utf8decode(A.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var A=f(v.value);return A.readInt(1)!==1||x(this.fileComment)!==A.readInt(4)?null:p.utf8decode(A.readData(v.length-5))}return null}},u.exports=_},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(s,u,d){function f(A,m,S){this.name=A,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=m,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var g=s("./stream/StreamHelper"),h=s("./stream/DataWorker"),x=s("./utf8"),p=s("./compressedObject"),T=s("./stream/GenericWorker");f.prototype={internalStream:function(A){var m=null,S="string";try{if(!A)throw new Error("No output type specified.");var w=(S=A.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),m=this._decompressWorker();var O=!this._dataBinary;O&&!w&&(m=m.pipe(new x.Utf8EncodeWorker)),!O&&w&&(m=m.pipe(new x.Utf8DecodeWorker))}catch(z){(m=new T("error")).error(z)}return new g(m,S,"")},async:function(A,m){return this.internalStream(A).accumulate(m)},nodeStream:function(A,m){return this.internalStream(A||"nodebuffer").toNodejsStream(m)},_compressWorker:function(A,m){if(this._data instanceof p&&this._data.compression.magic===A.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new x.Utf8EncodeWorker)),p.createWorkerFrom(S,A,m)},_decompressWorker:function(){return this._data instanceof p?this._data.getContentWorker():this._data instanceof T?this._data:new h(this._data)}};for(var R=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],_=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<R.length;v++)f.prototype[R[v]]=_;u.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(s,u,d){(function(f){var g,h,x=f.MutationObserver||f.WebKitMutationObserver;if(x){var p=0,T=new x(A),R=f.document.createTextNode("");T.observe(R,{characterData:!0}),g=function(){R.data=p=++p%2}}else if(f.setImmediate||f.MessageChannel===void 0)g="document"in f&&"onreadystatechange"in f.document.createElement("script")?function(){var m=f.document.createElement("script");m.onreadystatechange=function(){A(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},f.document.documentElement.appendChild(m)}:function(){setTimeout(A,0)};else{var _=new f.MessageChannel;_.port1.onmessage=A,g=function(){_.port2.postMessage(0)}}var v=[];function A(){var m,S;h=!0;for(var w=v.length;w;){for(S=v,v=[],m=-1;++m<w;)S[m]();w=v.length}h=!1}u.exports=function(m){v.push(m)!==1||h||g()}}).call(this,typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(s,u,d){var f=s("immediate");function g(){}var h={},x=["REJECTED"],p=["FULFILLED"],T=["PENDING"];function R(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=T,this.queue=[],this.outcome=void 0,w!==g&&m(this,w)}function _(w,O,z){this.promise=w,typeof O=="function"&&(this.onFulfilled=O,this.callFulfilled=this.otherCallFulfilled),typeof z=="function"&&(this.onRejected=z,this.callRejected=this.otherCallRejected)}function v(w,O,z){f(function(){var B;try{B=O(z)}catch(j){return h.reject(w,j)}B===w?h.reject(w,new TypeError("Cannot resolve promise with itself")):h.resolve(w,B)})}function A(w){var O=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof O=="function")return function(){O.apply(w,arguments)}}function m(w,O){var z=!1;function B(P){z||(z=!0,h.reject(w,P))}function j(P){z||(z=!0,h.resolve(w,P))}var H=S(function(){O(j,B)});H.status==="error"&&B(H.value)}function S(w,O){var z={};try{z.value=w(O),z.status="success"}catch(B){z.status="error",z.value=B}return z}(u.exports=R).prototype.finally=function(w){if(typeof w!="function")return this;var O=this.constructor;return this.then(function(z){return O.resolve(w()).then(function(){return z})},function(z){return O.resolve(w()).then(function(){throw z})})},R.prototype.catch=function(w){return this.then(null,w)},R.prototype.then=function(w,O){if(typeof w!="function"&&this.state===p||typeof O!="function"&&this.state===x)return this;var z=new this.constructor(g);return this.state!==T?v(z,this.state===p?w:O,this.outcome):this.queue.push(new _(z,w,O)),z},_.prototype.callFulfilled=function(w){h.resolve(this.promise,w)},_.prototype.otherCallFulfilled=function(w){v(this.promise,this.onFulfilled,w)},_.prototype.callRejected=function(w){h.reject(this.promise,w)},_.prototype.otherCallRejected=function(w){v(this.promise,this.onRejected,w)},h.resolve=function(w,O){var z=S(A,O);if(z.status==="error")return h.reject(w,z.value);var B=z.value;if(B)m(w,B);else{w.state=p,w.outcome=O;for(var j=-1,H=w.queue.length;++j<H;)w.queue[j].callFulfilled(O)}return w},h.reject=function(w,O){w.state=x,w.outcome=O;for(var z=-1,B=w.queue.length;++z<B;)w.queue[z].callRejected(O);return w},R.resolve=function(w){return w instanceof this?w:h.resolve(new this(g),w)},R.reject=function(w){var O=new this(g);return h.reject(O,w)},R.all=function(w){var O=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var z=w.length,B=!1;if(!z)return this.resolve([]);for(var j=new Array(z),H=0,P=-1,G=new this(g);++P<z;)V(w[P],P);return G;function V(oe,ce){O.resolve(oe).then(function(D){j[ce]=D,++H!==z||B||(B=!0,h.resolve(G,j))},function(D){B||(B=!0,h.reject(G,D))})}},R.race=function(w){var O=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var z=w.length,B=!1;if(!z)return this.resolve([]);for(var j=-1,H=new this(g);++j<z;)P=w[j],O.resolve(P).then(function(G){B||(B=!0,h.resolve(H,G))},function(G){B||(B=!0,h.reject(H,G))});var P;return H}},{immediate:36}],38:[function(s,u,d){var f={};(0,s("./lib/utils/common").assign)(f,s("./lib/deflate"),s("./lib/inflate"),s("./lib/zlib/constants")),u.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(s,u,d){var f=s("./zlib/deflate"),g=s("./utils/common"),h=s("./utils/strings"),x=s("./zlib/messages"),p=s("./zlib/zstream"),T=Object.prototype.toString,R=0,_=-1,v=0,A=8;function m(w){if(!(this instanceof m))return new m(w);this.options=g.assign({level:_,method:A,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},w||{});var O=this.options;O.raw&&0<O.windowBits?O.windowBits=-O.windowBits:O.gzip&&0<O.windowBits&&O.windowBits<16&&(O.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var z=f.deflateInit2(this.strm,O.level,O.method,O.windowBits,O.memLevel,O.strategy);if(z!==R)throw new Error(x[z]);if(O.header&&f.deflateSetHeader(this.strm,O.header),O.dictionary){var B;if(B=typeof O.dictionary=="string"?h.string2buf(O.dictionary):T.call(O.dictionary)==="[object ArrayBuffer]"?new Uint8Array(O.dictionary):O.dictionary,(z=f.deflateSetDictionary(this.strm,B))!==R)throw new Error(x[z]);this._dict_set=!0}}function S(w,O){var z=new m(O);if(z.push(w,!0),z.err)throw z.msg||x[z.err];return z.result}m.prototype.push=function(w,O){var z,B,j=this.strm,H=this.options.chunkSize;if(this.ended)return!1;B=O===~~O?O:O===!0?4:0,typeof w=="string"?j.input=h.string2buf(w):T.call(w)==="[object ArrayBuffer]"?j.input=new Uint8Array(w):j.input=w,j.next_in=0,j.avail_in=j.input.length;do{if(j.avail_out===0&&(j.output=new g.Buf8(H),j.next_out=0,j.avail_out=H),(z=f.deflate(j,B))!==1&&z!==R)return this.onEnd(z),!(this.ended=!0);j.avail_out!==0&&(j.avail_in!==0||B!==4&&B!==2)||(this.options.to==="string"?this.onData(h.buf2binstring(g.shrinkBuf(j.output,j.next_out))):this.onData(g.shrinkBuf(j.output,j.next_out)))}while((0<j.avail_in||j.avail_out===0)&&z!==1);return B===4?(z=f.deflateEnd(this.strm),this.onEnd(z),this.ended=!0,z===R):B!==2||(this.onEnd(R),!(j.avail_out=0))},m.prototype.onData=function(w){this.chunks.push(w)},m.prototype.onEnd=function(w){w===R&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},d.Deflate=m,d.deflate=S,d.deflateRaw=function(w,O){return(O=O||{}).raw=!0,S(w,O)},d.gzip=function(w,O){return(O=O||{}).gzip=!0,S(w,O)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(s,u,d){var f=s("./zlib/inflate"),g=s("./utils/common"),h=s("./utils/strings"),x=s("./zlib/constants"),p=s("./zlib/messages"),T=s("./zlib/zstream"),R=s("./zlib/gzheader"),_=Object.prototype.toString;function v(m){if(!(this instanceof v))return new v(m);this.options=g.assign({chunkSize:16384,windowBits:0,to:""},m||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||m&&m.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&(15&S.windowBits)==0&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new T,this.strm.avail_out=0;var w=f.inflateInit2(this.strm,S.windowBits);if(w!==x.Z_OK)throw new Error(p[w]);this.header=new R,f.inflateGetHeader(this.strm,this.header)}function A(m,S){var w=new v(S);if(w.push(m,!0),w.err)throw w.msg||p[w.err];return w.result}v.prototype.push=function(m,S){var w,O,z,B,j,H,P=this.strm,G=this.options.chunkSize,V=this.options.dictionary,oe=!1;if(this.ended)return!1;O=S===~~S?S:S===!0?x.Z_FINISH:x.Z_NO_FLUSH,typeof m=="string"?P.input=h.binstring2buf(m):_.call(m)==="[object ArrayBuffer]"?P.input=new Uint8Array(m):P.input=m,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new g.Buf8(G),P.next_out=0,P.avail_out=G),(w=f.inflate(P,x.Z_NO_FLUSH))===x.Z_NEED_DICT&&V&&(H=typeof V=="string"?h.string2buf(V):_.call(V)==="[object ArrayBuffer]"?new Uint8Array(V):V,w=f.inflateSetDictionary(this.strm,H)),w===x.Z_BUF_ERROR&&oe===!0&&(w=x.Z_OK,oe=!1),w!==x.Z_STREAM_END&&w!==x.Z_OK)return this.onEnd(w),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&w!==x.Z_STREAM_END&&(P.avail_in!==0||O!==x.Z_FINISH&&O!==x.Z_SYNC_FLUSH)||(this.options.to==="string"?(z=h.utf8border(P.output,P.next_out),B=P.next_out-z,j=h.buf2string(P.output,z),P.next_out=B,P.avail_out=G-B,B&&g.arraySet(P.output,P.output,z,B,0),this.onData(j)):this.onData(g.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(oe=!0)}while((0<P.avail_in||P.avail_out===0)&&w!==x.Z_STREAM_END);return w===x.Z_STREAM_END&&(O=x.Z_FINISH),O===x.Z_FINISH?(w=f.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===x.Z_OK):O!==x.Z_SYNC_FLUSH||(this.onEnd(x.Z_OK),!(P.avail_out=0))},v.prototype.onData=function(m){this.chunks.push(m)},v.prototype.onEnd=function(m){m===x.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},d.Inflate=v,d.inflate=A,d.inflateRaw=function(m,S){return(S=S||{}).raw=!0,A(m,S)},d.ungzip=A},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(s,u,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";d.assign=function(x){for(var p=Array.prototype.slice.call(arguments,1);p.length;){var T=p.shift();if(T){if(typeof T!="object")throw new TypeError(T+"must be non-object");for(var R in T)T.hasOwnProperty(R)&&(x[R]=T[R])}}return x},d.shrinkBuf=function(x,p){return x.length===p?x:x.subarray?x.subarray(0,p):(x.length=p,x)};var g={arraySet:function(x,p,T,R,_){if(p.subarray&&x.subarray)x.set(p.subarray(T,T+R),_);else for(var v=0;v<R;v++)x[_+v]=p[T+v]},flattenChunks:function(x){var p,T,R,_,v,A;for(p=R=0,T=x.length;p<T;p++)R+=x[p].length;for(A=new Uint8Array(R),p=_=0,T=x.length;p<T;p++)v=x[p],A.set(v,_),_+=v.length;return A}},h={arraySet:function(x,p,T,R,_){for(var v=0;v<R;v++)x[_+v]=p[T+v]},flattenChunks:function(x){return[].concat.apply([],x)}};d.setTyped=function(x){x?(d.Buf8=Uint8Array,d.Buf16=Uint16Array,d.Buf32=Int32Array,d.assign(d,g)):(d.Buf8=Array,d.Buf16=Array,d.Buf32=Array,d.assign(d,h))},d.setTyped(f)},{}],42:[function(s,u,d){var f=s("./common"),g=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{g=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var x=new f.Buf8(256),p=0;p<256;p++)x[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;function T(R,_){if(_<65537&&(R.subarray&&h||!R.subarray&&g))return String.fromCharCode.apply(null,f.shrinkBuf(R,_));for(var v="",A=0;A<_;A++)v+=String.fromCharCode(R[A]);return v}x[254]=x[254]=1,d.string2buf=function(R){var _,v,A,m,S,w=R.length,O=0;for(m=0;m<w;m++)(64512&(v=R.charCodeAt(m)))==55296&&m+1<w&&(64512&(A=R.charCodeAt(m+1)))==56320&&(v=65536+(v-55296<<10)+(A-56320),m++),O+=v<128?1:v<2048?2:v<65536?3:4;for(_=new f.Buf8(O),m=S=0;S<O;m++)(64512&(v=R.charCodeAt(m)))==55296&&m+1<w&&(64512&(A=R.charCodeAt(m+1)))==56320&&(v=65536+(v-55296<<10)+(A-56320),m++),v<128?_[S++]=v:(v<2048?_[S++]=192|v>>>6:(v<65536?_[S++]=224|v>>>12:(_[S++]=240|v>>>18,_[S++]=128|v>>>12&63),_[S++]=128|v>>>6&63),_[S++]=128|63&v);return _},d.buf2binstring=function(R){return T(R,R.length)},d.binstring2buf=function(R){for(var _=new f.Buf8(R.length),v=0,A=_.length;v<A;v++)_[v]=R.charCodeAt(v);return _},d.buf2string=function(R,_){var v,A,m,S,w=_||R.length,O=new Array(2*w);for(v=A=0;v<w;)if((m=R[v++])<128)O[A++]=m;else if(4<(S=x[m]))O[A++]=65533,v+=S-1;else{for(m&=S===2?31:S===3?15:7;1<S&&v<w;)m=m<<6|63&R[v++],S--;1<S?O[A++]=65533:m<65536?O[A++]=m:(m-=65536,O[A++]=55296|m>>10&1023,O[A++]=56320|1023&m)}return T(O,A)},d.utf8border=function(R,_){var v;for((_=_||R.length)>R.length&&(_=R.length),v=_-1;0<=v&&(192&R[v])==128;)v--;return v<0||v===0?_:v+x[R[v]]>_?v:_}},{"./common":41}],43:[function(s,u,d){u.exports=function(f,g,h,x){for(var p=65535&f|0,T=f>>>16&65535|0,R=0;h!==0;){for(h-=R=2e3<h?2e3:h;T=T+(p=p+g[x++]|0)|0,--R;);p%=65521,T%=65521}return p|T<<16|0}},{}],44:[function(s,u,d){u.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(s,u,d){var f=(function(){for(var g,h=[],x=0;x<256;x++){g=x;for(var p=0;p<8;p++)g=1&g?3988292384^g>>>1:g>>>1;h[x]=g}return h})();u.exports=function(g,h,x,p){var T=f,R=p+x;g^=-1;for(var _=p;_<R;_++)g=g>>>8^T[255&(g^h[_])];return-1^g}},{}],46:[function(s,u,d){var f,g=s("../utils/common"),h=s("./trees"),x=s("./adler32"),p=s("./crc32"),T=s("./messages"),R=0,_=4,v=0,A=-2,m=-1,S=4,w=2,O=8,z=9,B=286,j=30,H=19,P=2*B+1,G=15,V=3,oe=258,ce=oe+V+1,D=42,Y=113,E=1,W=2,I=3,k=4;function J(b,re){return b.msg=T[re],re}function q(b){return(b<<1)-(4<b?9:0)}function me(b){for(var re=b.length;0<=--re;)b[re]=0}function C(b){var re=b.state,ae=re.pending;ae>b.avail_out&&(ae=b.avail_out),ae!==0&&(g.arraySet(b.output,re.pending_buf,re.pending_out,ae,b.next_out),b.next_out+=ae,re.pending_out+=ae,b.total_out+=ae,b.avail_out-=ae,re.pending-=ae,re.pending===0&&(re.pending_out=0))}function L(b,re){h._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,re),b.block_start=b.strstart,C(b.strm)}function le(b,re){b.pending_buf[b.pending++]=re}function ne(b,re){b.pending_buf[b.pending++]=re>>>8&255,b.pending_buf[b.pending++]=255&re}function se(b,re){var ae,U,M=b.max_chain_length,X=b.strstart,ge=b.prev_length,ye=b.nice_match,ee=b.strstart>b.w_size-ce?b.strstart-(b.w_size-ce):0,be=b.window,Se=b.w_mask,xe=b.prev,Ne=b.strstart+oe,Xe=be[X+ge-1],Ue=be[X+ge];b.prev_length>=b.good_match&&(M>>=2),ye>b.lookahead&&(ye=b.lookahead);do if(be[(ae=re)+ge]===Ue&&be[ae+ge-1]===Xe&&be[ae]===be[X]&&be[++ae]===be[X+1]){X+=2,ae++;do;while(be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&be[++X]===be[++ae]&&X<Ne);if(U=oe-(Ne-X),X=Ne-oe,ge<U){if(b.match_start=re,ye<=(ge=U))break;Xe=be[X+ge-1],Ue=be[X+ge]}}while((re=xe[re&Se])>ee&&--M!=0);return ge<=b.lookahead?ge:b.lookahead}function Ee(b){var re,ae,U,M,X,ge,ye,ee,be,Se,xe=b.w_size;do{if(M=b.window_size-b.lookahead-b.strstart,b.strstart>=xe+(xe-ce)){for(g.arraySet(b.window,b.window,xe,xe,0),b.match_start-=xe,b.strstart-=xe,b.block_start-=xe,re=ae=b.hash_size;U=b.head[--re],b.head[re]=xe<=U?U-xe:0,--ae;);for(re=ae=xe;U=b.prev[--re],b.prev[re]=xe<=U?U-xe:0,--ae;);M+=xe}if(b.strm.avail_in===0)break;if(ge=b.strm,ye=b.window,ee=b.strstart+b.lookahead,be=M,Se=void 0,Se=ge.avail_in,be<Se&&(Se=be),ae=Se===0?0:(ge.avail_in-=Se,g.arraySet(ye,ge.input,ge.next_in,Se,ee),ge.state.wrap===1?ge.adler=x(ge.adler,ye,Se,ee):ge.state.wrap===2&&(ge.adler=p(ge.adler,ye,Se,ee)),ge.next_in+=Se,ge.total_in+=Se,Se),b.lookahead+=ae,b.lookahead+b.insert>=V)for(X=b.strstart-b.insert,b.ins_h=b.window[X],b.ins_h=(b.ins_h<<b.hash_shift^b.window[X+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[X+V-1])&b.hash_mask,b.prev[X&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=X,X++,b.insert--,!(b.lookahead+b.insert<V)););}while(b.lookahead<ce&&b.strm.avail_in!==0)}function Ce(b,re){for(var ae,U;;){if(b.lookahead<ce){if(Ee(b),b.lookahead<ce&&re===R)return E;if(b.lookahead===0)break}if(ae=0,b.lookahead>=V&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+V-1])&b.hash_mask,ae=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),ae!==0&&b.strstart-ae<=b.w_size-ce&&(b.match_length=se(b,ae)),b.match_length>=V)if(U=h._tr_tally(b,b.strstart-b.match_start,b.match_length-V),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=V){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+V-1])&b.hash_mask,ae=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else U=h._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(U&&(L(b,!1),b.strm.avail_out===0))return E}return b.insert=b.strstart<V-1?b.strstart:V-1,re===_?(L(b,!0),b.strm.avail_out===0?I:k):b.last_lit&&(L(b,!1),b.strm.avail_out===0)?E:W}function Te(b,re){for(var ae,U,M;;){if(b.lookahead<ce){if(Ee(b),b.lookahead<ce&&re===R)return E;if(b.lookahead===0)break}if(ae=0,b.lookahead>=V&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+V-1])&b.hash_mask,ae=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=V-1,ae!==0&&b.prev_length<b.max_lazy_match&&b.strstart-ae<=b.w_size-ce&&(b.match_length=se(b,ae),b.match_length<=5&&(b.strategy===1||b.match_length===V&&4096<b.strstart-b.match_start)&&(b.match_length=V-1)),b.prev_length>=V&&b.match_length<=b.prev_length){for(M=b.strstart+b.lookahead-V,U=h._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-V),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=M&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+V-1])&b.hash_mask,ae=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=V-1,b.strstart++,U&&(L(b,!1),b.strm.avail_out===0))return E}else if(b.match_available){if((U=h._tr_tally(b,0,b.window[b.strstart-1]))&&L(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return E}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(U=h._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<V-1?b.strstart:V-1,re===_?(L(b,!0),b.strm.avail_out===0?I:k):b.last_lit&&(L(b,!1),b.strm.avail_out===0)?E:W}function we(b,re,ae,U,M){this.good_length=b,this.max_lazy=re,this.nice_length=ae,this.max_chain=U,this.func=M}function je(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=O,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new g.Buf16(2*P),this.dyn_dtree=new g.Buf16(2*(2*j+1)),this.bl_tree=new g.Buf16(2*(2*H+1)),me(this.dyn_ltree),me(this.dyn_dtree),me(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new g.Buf16(G+1),this.heap=new g.Buf16(2*B+1),me(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new g.Buf16(2*B+1),me(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ze(b){var re;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=w,(re=b.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?D:Y,b.adler=re.wrap===2?0:1,re.last_flush=R,h._tr_init(re),v):J(b,A)}function bt(b){var re=ze(b);return re===v&&(function(ae){ae.window_size=2*ae.w_size,me(ae.head),ae.max_lazy_match=f[ae.level].max_lazy,ae.good_match=f[ae.level].good_length,ae.nice_match=f[ae.level].nice_length,ae.max_chain_length=f[ae.level].max_chain,ae.strstart=0,ae.block_start=0,ae.lookahead=0,ae.insert=0,ae.match_length=ae.prev_length=V-1,ae.match_available=0,ae.ins_h=0})(b.state),re}function he(b,re,ae,U,M,X){if(!b)return A;var ge=1;if(re===m&&(re=6),U<0?(ge=0,U=-U):15<U&&(ge=2,U-=16),M<1||z<M||ae!==O||U<8||15<U||re<0||9<re||X<0||S<X)return J(b,A);U===8&&(U=9);var ye=new je;return(b.state=ye).strm=b,ye.wrap=ge,ye.gzhead=null,ye.w_bits=U,ye.w_size=1<<ye.w_bits,ye.w_mask=ye.w_size-1,ye.hash_bits=M+7,ye.hash_size=1<<ye.hash_bits,ye.hash_mask=ye.hash_size-1,ye.hash_shift=~~((ye.hash_bits+V-1)/V),ye.window=new g.Buf8(2*ye.w_size),ye.head=new g.Buf16(ye.hash_size),ye.prev=new g.Buf16(ye.w_size),ye.lit_bufsize=1<<M+6,ye.pending_buf_size=4*ye.lit_bufsize,ye.pending_buf=new g.Buf8(ye.pending_buf_size),ye.d_buf=1*ye.lit_bufsize,ye.l_buf=3*ye.lit_bufsize,ye.level=re,ye.strategy=X,ye.method=ae,bt(b)}f=[new we(0,0,0,0,function(b,re){var ae=65535;for(ae>b.pending_buf_size-5&&(ae=b.pending_buf_size-5);;){if(b.lookahead<=1){if(Ee(b),b.lookahead===0&&re===R)return E;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var U=b.block_start+ae;if((b.strstart===0||b.strstart>=U)&&(b.lookahead=b.strstart-U,b.strstart=U,L(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-ce&&(L(b,!1),b.strm.avail_out===0))return E}return b.insert=0,re===_?(L(b,!0),b.strm.avail_out===0?I:k):(b.strstart>b.block_start&&(L(b,!1),b.strm.avail_out),E)}),new we(4,4,8,4,Ce),new we(4,5,16,8,Ce),new we(4,6,32,32,Ce),new we(4,4,16,16,Te),new we(8,16,32,32,Te),new we(8,16,128,128,Te),new we(8,32,128,256,Te),new we(32,128,258,1024,Te),new we(32,258,258,4096,Te)],d.deflateInit=function(b,re){return he(b,re,O,15,8,0)},d.deflateInit2=he,d.deflateReset=bt,d.deflateResetKeep=ze,d.deflateSetHeader=function(b,re){return b&&b.state?b.state.wrap!==2?A:(b.state.gzhead=re,v):A},d.deflate=function(b,re){var ae,U,M,X;if(!b||!b.state||5<re||re<0)return b?J(b,A):A;if(U=b.state,!b.output||!b.input&&b.avail_in!==0||U.status===666&&re!==_)return J(b,b.avail_out===0?-5:A);if(U.strm=b,ae=U.last_flush,U.last_flush=re,U.status===D)if(U.wrap===2)b.adler=0,le(U,31),le(U,139),le(U,8),U.gzhead?(le(U,(U.gzhead.text?1:0)+(U.gzhead.hcrc?2:0)+(U.gzhead.extra?4:0)+(U.gzhead.name?8:0)+(U.gzhead.comment?16:0)),le(U,255&U.gzhead.time),le(U,U.gzhead.time>>8&255),le(U,U.gzhead.time>>16&255),le(U,U.gzhead.time>>24&255),le(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),le(U,255&U.gzhead.os),U.gzhead.extra&&U.gzhead.extra.length&&(le(U,255&U.gzhead.extra.length),le(U,U.gzhead.extra.length>>8&255)),U.gzhead.hcrc&&(b.adler=p(b.adler,U.pending_buf,U.pending,0)),U.gzindex=0,U.status=69):(le(U,0),le(U,0),le(U,0),le(U,0),le(U,0),le(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),le(U,3),U.status=Y);else{var ge=O+(U.w_bits-8<<4)<<8;ge|=(2<=U.strategy||U.level<2?0:U.level<6?1:U.level===6?2:3)<<6,U.strstart!==0&&(ge|=32),ge+=31-ge%31,U.status=Y,ne(U,ge),U.strstart!==0&&(ne(U,b.adler>>>16),ne(U,65535&b.adler)),b.adler=1}if(U.status===69)if(U.gzhead.extra){for(M=U.pending;U.gzindex<(65535&U.gzhead.extra.length)&&(U.pending!==U.pending_buf_size||(U.gzhead.hcrc&&U.pending>M&&(b.adler=p(b.adler,U.pending_buf,U.pending-M,M)),C(b),M=U.pending,U.pending!==U.pending_buf_size));)le(U,255&U.gzhead.extra[U.gzindex]),U.gzindex++;U.gzhead.hcrc&&U.pending>M&&(b.adler=p(b.adler,U.pending_buf,U.pending-M,M)),U.gzindex===U.gzhead.extra.length&&(U.gzindex=0,U.status=73)}else U.status=73;if(U.status===73)if(U.gzhead.name){M=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>M&&(b.adler=p(b.adler,U.pending_buf,U.pending-M,M)),C(b),M=U.pending,U.pending===U.pending_buf_size)){X=1;break}X=U.gzindex<U.gzhead.name.length?255&U.gzhead.name.charCodeAt(U.gzindex++):0,le(U,X)}while(X!==0);U.gzhead.hcrc&&U.pending>M&&(b.adler=p(b.adler,U.pending_buf,U.pending-M,M)),X===0&&(U.gzindex=0,U.status=91)}else U.status=91;if(U.status===91)if(U.gzhead.comment){M=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>M&&(b.adler=p(b.adler,U.pending_buf,U.pending-M,M)),C(b),M=U.pending,U.pending===U.pending_buf_size)){X=1;break}X=U.gzindex<U.gzhead.comment.length?255&U.gzhead.comment.charCodeAt(U.gzindex++):0,le(U,X)}while(X!==0);U.gzhead.hcrc&&U.pending>M&&(b.adler=p(b.adler,U.pending_buf,U.pending-M,M)),X===0&&(U.status=103)}else U.status=103;if(U.status===103&&(U.gzhead.hcrc?(U.pending+2>U.pending_buf_size&&C(b),U.pending+2<=U.pending_buf_size&&(le(U,255&b.adler),le(U,b.adler>>8&255),b.adler=0,U.status=Y)):U.status=Y),U.pending!==0){if(C(b),b.avail_out===0)return U.last_flush=-1,v}else if(b.avail_in===0&&q(re)<=q(ae)&&re!==_)return J(b,-5);if(U.status===666&&b.avail_in!==0)return J(b,-5);if(b.avail_in!==0||U.lookahead!==0||re!==R&&U.status!==666){var ye=U.strategy===2?(function(ee,be){for(var Se;;){if(ee.lookahead===0&&(Ee(ee),ee.lookahead===0)){if(be===R)return E;break}if(ee.match_length=0,Se=h._tr_tally(ee,0,ee.window[ee.strstart]),ee.lookahead--,ee.strstart++,Se&&(L(ee,!1),ee.strm.avail_out===0))return E}return ee.insert=0,be===_?(L(ee,!0),ee.strm.avail_out===0?I:k):ee.last_lit&&(L(ee,!1),ee.strm.avail_out===0)?E:W})(U,re):U.strategy===3?(function(ee,be){for(var Se,xe,Ne,Xe,Ue=ee.window;;){if(ee.lookahead<=oe){if(Ee(ee),ee.lookahead<=oe&&be===R)return E;if(ee.lookahead===0)break}if(ee.match_length=0,ee.lookahead>=V&&0<ee.strstart&&(xe=Ue[Ne=ee.strstart-1])===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]){Xe=ee.strstart+oe;do;while(xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&Ne<Xe);ee.match_length=oe-(Xe-Ne),ee.match_length>ee.lookahead&&(ee.match_length=ee.lookahead)}if(ee.match_length>=V?(Se=h._tr_tally(ee,1,ee.match_length-V),ee.lookahead-=ee.match_length,ee.strstart+=ee.match_length,ee.match_length=0):(Se=h._tr_tally(ee,0,ee.window[ee.strstart]),ee.lookahead--,ee.strstart++),Se&&(L(ee,!1),ee.strm.avail_out===0))return E}return ee.insert=0,be===_?(L(ee,!0),ee.strm.avail_out===0?I:k):ee.last_lit&&(L(ee,!1),ee.strm.avail_out===0)?E:W})(U,re):f[U.level].func(U,re);if(ye!==I&&ye!==k||(U.status=666),ye===E||ye===I)return b.avail_out===0&&(U.last_flush=-1),v;if(ye===W&&(re===1?h._tr_align(U):re!==5&&(h._tr_stored_block(U,0,0,!1),re===3&&(me(U.head),U.lookahead===0&&(U.strstart=0,U.block_start=0,U.insert=0))),C(b),b.avail_out===0))return U.last_flush=-1,v}return re!==_?v:U.wrap<=0?1:(U.wrap===2?(le(U,255&b.adler),le(U,b.adler>>8&255),le(U,b.adler>>16&255),le(U,b.adler>>24&255),le(U,255&b.total_in),le(U,b.total_in>>8&255),le(U,b.total_in>>16&255),le(U,b.total_in>>24&255)):(ne(U,b.adler>>>16),ne(U,65535&b.adler)),C(b),0<U.wrap&&(U.wrap=-U.wrap),U.pending!==0?v:1)},d.deflateEnd=function(b){var re;return b&&b.state?(re=b.state.status)!==D&&re!==69&&re!==73&&re!==91&&re!==103&&re!==Y&&re!==666?J(b,A):(b.state=null,re===Y?J(b,-3):v):A},d.deflateSetDictionary=function(b,re){var ae,U,M,X,ge,ye,ee,be,Se=re.length;if(!b||!b.state||(X=(ae=b.state).wrap)===2||X===1&&ae.status!==D||ae.lookahead)return A;for(X===1&&(b.adler=x(b.adler,re,Se,0)),ae.wrap=0,Se>=ae.w_size&&(X===0&&(me(ae.head),ae.strstart=0,ae.block_start=0,ae.insert=0),be=new g.Buf8(ae.w_size),g.arraySet(be,re,Se-ae.w_size,ae.w_size,0),re=be,Se=ae.w_size),ge=b.avail_in,ye=b.next_in,ee=b.input,b.avail_in=Se,b.next_in=0,b.input=re,Ee(ae);ae.lookahead>=V;){for(U=ae.strstart,M=ae.lookahead-(V-1);ae.ins_h=(ae.ins_h<<ae.hash_shift^ae.window[U+V-1])&ae.hash_mask,ae.prev[U&ae.w_mask]=ae.head[ae.ins_h],ae.head[ae.ins_h]=U,U++,--M;);ae.strstart=U,ae.lookahead=V-1,Ee(ae)}return ae.strstart+=ae.lookahead,ae.block_start=ae.strstart,ae.insert=ae.lookahead,ae.lookahead=0,ae.match_length=ae.prev_length=V-1,ae.match_available=0,b.next_in=ye,b.input=ee,b.avail_in=ge,ae.wrap=X,v},d.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(s,u,d){u.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(s,u,d){u.exports=function(f,g){var h,x,p,T,R,_,v,A,m,S,w,O,z,B,j,H,P,G,V,oe,ce,D,Y,E,W;h=f.state,x=f.next_in,E=f.input,p=x+(f.avail_in-5),T=f.next_out,W=f.output,R=T-(g-f.avail_out),_=T+(f.avail_out-257),v=h.dmax,A=h.wsize,m=h.whave,S=h.wnext,w=h.window,O=h.hold,z=h.bits,B=h.lencode,j=h.distcode,H=(1<<h.lenbits)-1,P=(1<<h.distbits)-1;e:do{z<15&&(O+=E[x++]<<z,z+=8,O+=E[x++]<<z,z+=8),G=B[O&H];t:for(;;){if(O>>>=V=G>>>24,z-=V,(V=G>>>16&255)===0)W[T++]=65535&G;else{if(!(16&V)){if((64&V)==0){G=B[(65535&G)+(O&(1<<V)-1)];continue t}if(32&V){h.mode=12;break e}f.msg="invalid literal/length code",h.mode=30;break e}oe=65535&G,(V&=15)&&(z<V&&(O+=E[x++]<<z,z+=8),oe+=O&(1<<V)-1,O>>>=V,z-=V),z<15&&(O+=E[x++]<<z,z+=8,O+=E[x++]<<z,z+=8),G=j[O&P];n:for(;;){if(O>>>=V=G>>>24,z-=V,!(16&(V=G>>>16&255))){if((64&V)==0){G=j[(65535&G)+(O&(1<<V)-1)];continue n}f.msg="invalid distance code",h.mode=30;break e}if(ce=65535&G,z<(V&=15)&&(O+=E[x++]<<z,(z+=8)<V&&(O+=E[x++]<<z,z+=8)),v<(ce+=O&(1<<V)-1)){f.msg="invalid distance too far back",h.mode=30;break e}if(O>>>=V,z-=V,(V=T-R)<ce){if(m<(V=ce-V)&&h.sane){f.msg="invalid distance too far back",h.mode=30;break e}if(Y=w,(D=0)===S){if(D+=A-V,V<oe){for(oe-=V;W[T++]=w[D++],--V;);D=T-ce,Y=W}}else if(S<V){if(D+=A+S-V,(V-=S)<oe){for(oe-=V;W[T++]=w[D++],--V;);if(D=0,S<oe){for(oe-=V=S;W[T++]=w[D++],--V;);D=T-ce,Y=W}}}else if(D+=S-V,V<oe){for(oe-=V;W[T++]=w[D++],--V;);D=T-ce,Y=W}for(;2<oe;)W[T++]=Y[D++],W[T++]=Y[D++],W[T++]=Y[D++],oe-=3;oe&&(W[T++]=Y[D++],1<oe&&(W[T++]=Y[D++]))}else{for(D=T-ce;W[T++]=W[D++],W[T++]=W[D++],W[T++]=W[D++],2<(oe-=3););oe&&(W[T++]=W[D++],1<oe&&(W[T++]=W[D++]))}break}}break}}while(x<p&&T<_);x-=oe=z>>3,O&=(1<<(z-=oe<<3))-1,f.next_in=x,f.next_out=T,f.avail_in=x<p?p-x+5:5-(x-p),f.avail_out=T<_?_-T+257:257-(T-_),h.hold=O,h.bits=z}},{}],49:[function(s,u,d){var f=s("../utils/common"),g=s("./adler32"),h=s("./crc32"),x=s("./inffast"),p=s("./inftrees"),T=1,R=2,_=0,v=-2,A=1,m=852,S=592;function w(D){return(D>>>24&255)+(D>>>8&65280)+((65280&D)<<8)+((255&D)<<24)}function O(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function z(D){var Y;return D&&D.state?(Y=D.state,D.total_in=D.total_out=Y.total=0,D.msg="",Y.wrap&&(D.adler=1&Y.wrap),Y.mode=A,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new f.Buf32(m),Y.distcode=Y.distdyn=new f.Buf32(S),Y.sane=1,Y.back=-1,_):v}function B(D){var Y;return D&&D.state?((Y=D.state).wsize=0,Y.whave=0,Y.wnext=0,z(D)):v}function j(D,Y){var E,W;return D&&D.state?(W=D.state,Y<0?(E=0,Y=-Y):(E=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?v:(W.window!==null&&W.wbits!==Y&&(W.window=null),W.wrap=E,W.wbits=Y,B(D))):v}function H(D,Y){var E,W;return D?(W=new O,(D.state=W).window=null,(E=j(D,Y))!==_&&(D.state=null),E):v}var P,G,V=!0;function oe(D){if(V){var Y;for(P=new f.Buf32(512),G=new f.Buf32(32),Y=0;Y<144;)D.lens[Y++]=8;for(;Y<256;)D.lens[Y++]=9;for(;Y<280;)D.lens[Y++]=7;for(;Y<288;)D.lens[Y++]=8;for(p(T,D.lens,0,288,P,0,D.work,{bits:9}),Y=0;Y<32;)D.lens[Y++]=5;p(R,D.lens,0,32,G,0,D.work,{bits:5}),V=!1}D.lencode=P,D.lenbits=9,D.distcode=G,D.distbits=5}function ce(D,Y,E,W){var I,k=D.state;return k.window===null&&(k.wsize=1<<k.wbits,k.wnext=0,k.whave=0,k.window=new f.Buf8(k.wsize)),W>=k.wsize?(f.arraySet(k.window,Y,E-k.wsize,k.wsize,0),k.wnext=0,k.whave=k.wsize):(W<(I=k.wsize-k.wnext)&&(I=W),f.arraySet(k.window,Y,E-W,I,k.wnext),(W-=I)?(f.arraySet(k.window,Y,E-W,W,0),k.wnext=W,k.whave=k.wsize):(k.wnext+=I,k.wnext===k.wsize&&(k.wnext=0),k.whave<k.wsize&&(k.whave+=I))),0}d.inflateReset=B,d.inflateReset2=j,d.inflateResetKeep=z,d.inflateInit=function(D){return H(D,15)},d.inflateInit2=H,d.inflate=function(D,Y){var E,W,I,k,J,q,me,C,L,le,ne,se,Ee,Ce,Te,we,je,ze,bt,he,b,re,ae,U,M=0,X=new f.Buf8(4),ge=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!D||!D.state||!D.output||!D.input&&D.avail_in!==0)return v;(E=D.state).mode===12&&(E.mode=13),J=D.next_out,I=D.output,me=D.avail_out,k=D.next_in,W=D.input,q=D.avail_in,C=E.hold,L=E.bits,le=q,ne=me,re=_;e:for(;;)switch(E.mode){case A:if(E.wrap===0){E.mode=13;break}for(;L<16;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(2&E.wrap&&C===35615){X[E.check=0]=255&C,X[1]=C>>>8&255,E.check=h(E.check,X,2,0),L=C=0,E.mode=2;break}if(E.flags=0,E.head&&(E.head.done=!1),!(1&E.wrap)||(((255&C)<<8)+(C>>8))%31){D.msg="incorrect header check",E.mode=30;break}if((15&C)!=8){D.msg="unknown compression method",E.mode=30;break}if(L-=4,b=8+(15&(C>>>=4)),E.wbits===0)E.wbits=b;else if(b>E.wbits){D.msg="invalid window size",E.mode=30;break}E.dmax=1<<b,D.adler=E.check=1,E.mode=512&C?10:12,L=C=0;break;case 2:for(;L<16;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(E.flags=C,(255&E.flags)!=8){D.msg="unknown compression method",E.mode=30;break}if(57344&E.flags){D.msg="unknown header flags set",E.mode=30;break}E.head&&(E.head.text=C>>8&1),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,E.check=h(E.check,X,2,0)),L=C=0,E.mode=3;case 3:for(;L<32;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}E.head&&(E.head.time=C),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,X[2]=C>>>16&255,X[3]=C>>>24&255,E.check=h(E.check,X,4,0)),L=C=0,E.mode=4;case 4:for(;L<16;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}E.head&&(E.head.xflags=255&C,E.head.os=C>>8),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,E.check=h(E.check,X,2,0)),L=C=0,E.mode=5;case 5:if(1024&E.flags){for(;L<16;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}E.length=C,E.head&&(E.head.extra_len=C),512&E.flags&&(X[0]=255&C,X[1]=C>>>8&255,E.check=h(E.check,X,2,0)),L=C=0}else E.head&&(E.head.extra=null);E.mode=6;case 6:if(1024&E.flags&&(q<(se=E.length)&&(se=q),se&&(E.head&&(b=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),f.arraySet(E.head.extra,W,k,se,b)),512&E.flags&&(E.check=h(E.check,W,se,k)),q-=se,k+=se,E.length-=se),E.length))break e;E.length=0,E.mode=7;case 7:if(2048&E.flags){if(q===0)break e;for(se=0;b=W[k+se++],E.head&&b&&E.length<65536&&(E.head.name+=String.fromCharCode(b)),b&&se<q;);if(512&E.flags&&(E.check=h(E.check,W,se,k)),q-=se,k+=se,b)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=8;case 8:if(4096&E.flags){if(q===0)break e;for(se=0;b=W[k+se++],E.head&&b&&E.length<65536&&(E.head.comment+=String.fromCharCode(b)),b&&se<q;);if(512&E.flags&&(E.check=h(E.check,W,se,k)),q-=se,k+=se,b)break e}else E.head&&(E.head.comment=null);E.mode=9;case 9:if(512&E.flags){for(;L<16;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(C!==(65535&E.check)){D.msg="header crc mismatch",E.mode=30;break}L=C=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),D.adler=E.check=0,E.mode=12;break;case 10:for(;L<32;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}D.adler=E.check=w(C),L=C=0,E.mode=11;case 11:if(E.havedict===0)return D.next_out=J,D.avail_out=me,D.next_in=k,D.avail_in=q,E.hold=C,E.bits=L,2;D.adler=E.check=1,E.mode=12;case 12:if(Y===5||Y===6)break e;case 13:if(E.last){C>>>=7&L,L-=7&L,E.mode=27;break}for(;L<3;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}switch(E.last=1&C,L-=1,3&(C>>>=1)){case 0:E.mode=14;break;case 1:if(oe(E),E.mode=20,Y!==6)break;C>>>=2,L-=2;break e;case 2:E.mode=17;break;case 3:D.msg="invalid block type",E.mode=30}C>>>=2,L-=2;break;case 14:for(C>>>=7&L,L-=7&L;L<32;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if((65535&C)!=(C>>>16^65535)){D.msg="invalid stored block lengths",E.mode=30;break}if(E.length=65535&C,L=C=0,E.mode=15,Y===6)break e;case 15:E.mode=16;case 16:if(se=E.length){if(q<se&&(se=q),me<se&&(se=me),se===0)break e;f.arraySet(I,W,k,se,J),q-=se,k+=se,me-=se,J+=se,E.length-=se;break}E.mode=12;break;case 17:for(;L<14;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(E.nlen=257+(31&C),C>>>=5,L-=5,E.ndist=1+(31&C),C>>>=5,L-=5,E.ncode=4+(15&C),C>>>=4,L-=4,286<E.nlen||30<E.ndist){D.msg="too many length or distance symbols",E.mode=30;break}E.have=0,E.mode=18;case 18:for(;E.have<E.ncode;){for(;L<3;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}E.lens[ge[E.have++]]=7&C,C>>>=3,L-=3}for(;E.have<19;)E.lens[ge[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,ae={bits:E.lenbits},re=p(0,E.lens,0,19,E.lencode,0,E.work,ae),E.lenbits=ae.bits,re){D.msg="invalid code lengths set",E.mode=30;break}E.have=0,E.mode=19;case 19:for(;E.have<E.nlen+E.ndist;){for(;we=(M=E.lencode[C&(1<<E.lenbits)-1])>>>16&255,je=65535&M,!((Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(je<16)C>>>=Te,L-=Te,E.lens[E.have++]=je;else{if(je===16){for(U=Te+2;L<U;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(C>>>=Te,L-=Te,E.have===0){D.msg="invalid bit length repeat",E.mode=30;break}b=E.lens[E.have-1],se=3+(3&C),C>>>=2,L-=2}else if(je===17){for(U=Te+3;L<U;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}L-=Te,b=0,se=3+(7&(C>>>=Te)),C>>>=3,L-=3}else{for(U=Te+7;L<U;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}L-=Te,b=0,se=11+(127&(C>>>=Te)),C>>>=7,L-=7}if(E.have+se>E.nlen+E.ndist){D.msg="invalid bit length repeat",E.mode=30;break}for(;se--;)E.lens[E.have++]=b}}if(E.mode===30)break;if(E.lens[256]===0){D.msg="invalid code -- missing end-of-block",E.mode=30;break}if(E.lenbits=9,ae={bits:E.lenbits},re=p(T,E.lens,0,E.nlen,E.lencode,0,E.work,ae),E.lenbits=ae.bits,re){D.msg="invalid literal/lengths set",E.mode=30;break}if(E.distbits=6,E.distcode=E.distdyn,ae={bits:E.distbits},re=p(R,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,ae),E.distbits=ae.bits,re){D.msg="invalid distances set",E.mode=30;break}if(E.mode=20,Y===6)break e;case 20:E.mode=21;case 21:if(6<=q&&258<=me){D.next_out=J,D.avail_out=me,D.next_in=k,D.avail_in=q,E.hold=C,E.bits=L,x(D,ne),J=D.next_out,I=D.output,me=D.avail_out,k=D.next_in,W=D.input,q=D.avail_in,C=E.hold,L=E.bits,E.mode===12&&(E.back=-1);break}for(E.back=0;we=(M=E.lencode[C&(1<<E.lenbits)-1])>>>16&255,je=65535&M,!((Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(we&&(240&we)==0){for(ze=Te,bt=we,he=je;we=(M=E.lencode[he+((C&(1<<ze+bt)-1)>>ze)])>>>16&255,je=65535&M,!(ze+(Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}C>>>=ze,L-=ze,E.back+=ze}if(C>>>=Te,L-=Te,E.back+=Te,E.length=je,we===0){E.mode=26;break}if(32&we){E.back=-1,E.mode=12;break}if(64&we){D.msg="invalid literal/length code",E.mode=30;break}E.extra=15&we,E.mode=22;case 22:if(E.extra){for(U=E.extra;L<U;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}E.length+=C&(1<<E.extra)-1,C>>>=E.extra,L-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=23;case 23:for(;we=(M=E.distcode[C&(1<<E.distbits)-1])>>>16&255,je=65535&M,!((Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if((240&we)==0){for(ze=Te,bt=we,he=je;we=(M=E.distcode[he+((C&(1<<ze+bt)-1)>>ze)])>>>16&255,je=65535&M,!(ze+(Te=M>>>24)<=L);){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}C>>>=ze,L-=ze,E.back+=ze}if(C>>>=Te,L-=Te,E.back+=Te,64&we){D.msg="invalid distance code",E.mode=30;break}E.offset=je,E.extra=15&we,E.mode=24;case 24:if(E.extra){for(U=E.extra;L<U;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}E.offset+=C&(1<<E.extra)-1,C>>>=E.extra,L-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){D.msg="invalid distance too far back",E.mode=30;break}E.mode=25;case 25:if(me===0)break e;if(se=ne-me,E.offset>se){if((se=E.offset-se)>E.whave&&E.sane){D.msg="invalid distance too far back",E.mode=30;break}Ee=se>E.wnext?(se-=E.wnext,E.wsize-se):E.wnext-se,se>E.length&&(se=E.length),Ce=E.window}else Ce=I,Ee=J-E.offset,se=E.length;for(me<se&&(se=me),me-=se,E.length-=se;I[J++]=Ce[Ee++],--se;);E.length===0&&(E.mode=21);break;case 26:if(me===0)break e;I[J++]=E.length,me--,E.mode=21;break;case 27:if(E.wrap){for(;L<32;){if(q===0)break e;q--,C|=W[k++]<<L,L+=8}if(ne-=me,D.total_out+=ne,E.total+=ne,ne&&(D.adler=E.check=E.flags?h(E.check,I,ne,J-ne):g(E.check,I,ne,J-ne)),ne=me,(E.flags?C:w(C))!==E.check){D.msg="incorrect data check",E.mode=30;break}L=C=0}E.mode=28;case 28:if(E.wrap&&E.flags){for(;L<32;){if(q===0)break e;q--,C+=W[k++]<<L,L+=8}if(C!==(4294967295&E.total)){D.msg="incorrect length check",E.mode=30;break}L=C=0}E.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;case 32:default:return v}return D.next_out=J,D.avail_out=me,D.next_in=k,D.avail_in=q,E.hold=C,E.bits=L,(E.wsize||ne!==D.avail_out&&E.mode<30&&(E.mode<27||Y!==4))&&ce(D,D.output,D.next_out,ne-D.avail_out)?(E.mode=31,-4):(le-=D.avail_in,ne-=D.avail_out,D.total_in+=le,D.total_out+=ne,E.total+=ne,E.wrap&&ne&&(D.adler=E.check=E.flags?h(E.check,I,ne,D.next_out-ne):g(E.check,I,ne,D.next_out-ne)),D.data_type=E.bits+(E.last?64:0)+(E.mode===12?128:0)+(E.mode===20||E.mode===15?256:0),(le==0&&ne===0||Y===4)&&re===_&&(re=-5),re)},d.inflateEnd=function(D){if(!D||!D.state)return v;var Y=D.state;return Y.window&&(Y.window=null),D.state=null,_},d.inflateGetHeader=function(D,Y){var E;return D&&D.state?(2&(E=D.state).wrap)==0?v:((E.head=Y).done=!1,_):v},d.inflateSetDictionary=function(D,Y){var E,W=Y.length;return D&&D.state?(E=D.state).wrap!==0&&E.mode!==11?v:E.mode===11&&g(1,Y,W,0)!==E.check?-3:ce(D,Y,W,W)?(E.mode=31,-4):(E.havedict=1,_):v},d.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(s,u,d){var f=s("../utils/common"),g=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],x=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];u.exports=function(T,R,_,v,A,m,S,w){var O,z,B,j,H,P,G,V,oe,ce=w.bits,D=0,Y=0,E=0,W=0,I=0,k=0,J=0,q=0,me=0,C=0,L=null,le=0,ne=new f.Buf16(16),se=new f.Buf16(16),Ee=null,Ce=0;for(D=0;D<=15;D++)ne[D]=0;for(Y=0;Y<v;Y++)ne[R[_+Y]]++;for(I=ce,W=15;1<=W&&ne[W]===0;W--);if(W<I&&(I=W),W===0)return A[m++]=20971520,A[m++]=20971520,w.bits=1,0;for(E=1;E<W&&ne[E]===0;E++);for(I<E&&(I=E),D=q=1;D<=15;D++)if(q<<=1,(q-=ne[D])<0)return-1;if(0<q&&(T===0||W!==1))return-1;for(se[1]=0,D=1;D<15;D++)se[D+1]=se[D]+ne[D];for(Y=0;Y<v;Y++)R[_+Y]!==0&&(S[se[R[_+Y]]++]=Y);if(P=T===0?(L=Ee=S,19):T===1?(L=g,le-=257,Ee=h,Ce-=257,256):(L=x,Ee=p,-1),D=E,H=m,J=Y=C=0,B=-1,j=(me=1<<(k=I))-1,T===1&&852<me||T===2&&592<me)return 1;for(;;){for(G=D-J,oe=S[Y]<P?(V=0,S[Y]):S[Y]>P?(V=Ee[Ce+S[Y]],L[le+S[Y]]):(V=96,0),O=1<<D-J,E=z=1<<k;A[H+(C>>J)+(z-=O)]=G<<24|V<<16|oe|0,z!==0;);for(O=1<<D-1;C&O;)O>>=1;if(O!==0?(C&=O-1,C+=O):C=0,Y++,--ne[D]==0){if(D===W)break;D=R[_+S[Y]]}if(I<D&&(C&j)!==B){for(J===0&&(J=I),H+=E,q=1<<(k=D-J);k+J<W&&!((q-=ne[k+J])<=0);)k++,q<<=1;if(me+=1<<k,T===1&&852<me||T===2&&592<me)return 1;A[B=C&j]=I<<24|k<<16|H-m|0}}return C!==0&&(A[H+C]=D-J<<24|64<<16|0),w.bits=I,0}},{"../utils/common":41}],51:[function(s,u,d){u.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(s,u,d){var f=s("../utils/common"),g=0,h=1;function x(M){for(var X=M.length;0<=--X;)M[X]=0}var p=0,T=29,R=256,_=R+1+T,v=30,A=19,m=2*_+1,S=15,w=16,O=7,z=256,B=16,j=17,H=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],V=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],oe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ce=new Array(2*(_+2));x(ce);var D=new Array(2*v);x(D);var Y=new Array(512);x(Y);var E=new Array(256);x(E);var W=new Array(T);x(W);var I,k,J,q=new Array(v);function me(M,X,ge,ye,ee){this.static_tree=M,this.extra_bits=X,this.extra_base=ge,this.elems=ye,this.max_length=ee,this.has_stree=M&&M.length}function C(M,X){this.dyn_tree=M,this.max_code=0,this.stat_desc=X}function L(M){return M<256?Y[M]:Y[256+(M>>>7)]}function le(M,X){M.pending_buf[M.pending++]=255&X,M.pending_buf[M.pending++]=X>>>8&255}function ne(M,X,ge){M.bi_valid>w-ge?(M.bi_buf|=X<<M.bi_valid&65535,le(M,M.bi_buf),M.bi_buf=X>>w-M.bi_valid,M.bi_valid+=ge-w):(M.bi_buf|=X<<M.bi_valid&65535,M.bi_valid+=ge)}function se(M,X,ge){ne(M,ge[2*X],ge[2*X+1])}function Ee(M,X){for(var ge=0;ge|=1&M,M>>>=1,ge<<=1,0<--X;);return ge>>>1}function Ce(M,X,ge){var ye,ee,be=new Array(S+1),Se=0;for(ye=1;ye<=S;ye++)be[ye]=Se=Se+ge[ye-1]<<1;for(ee=0;ee<=X;ee++){var xe=M[2*ee+1];xe!==0&&(M[2*ee]=Ee(be[xe]++,xe))}}function Te(M){var X;for(X=0;X<_;X++)M.dyn_ltree[2*X]=0;for(X=0;X<v;X++)M.dyn_dtree[2*X]=0;for(X=0;X<A;X++)M.bl_tree[2*X]=0;M.dyn_ltree[2*z]=1,M.opt_len=M.static_len=0,M.last_lit=M.matches=0}function we(M){8<M.bi_valid?le(M,M.bi_buf):0<M.bi_valid&&(M.pending_buf[M.pending++]=M.bi_buf),M.bi_buf=0,M.bi_valid=0}function je(M,X,ge,ye){var ee=2*X,be=2*ge;return M[ee]<M[be]||M[ee]===M[be]&&ye[X]<=ye[ge]}function ze(M,X,ge){for(var ye=M.heap[ge],ee=ge<<1;ee<=M.heap_len&&(ee<M.heap_len&&je(X,M.heap[ee+1],M.heap[ee],M.depth)&&ee++,!je(X,ye,M.heap[ee],M.depth));)M.heap[ge]=M.heap[ee],ge=ee,ee<<=1;M.heap[ge]=ye}function bt(M,X,ge){var ye,ee,be,Se,xe=0;if(M.last_lit!==0)for(;ye=M.pending_buf[M.d_buf+2*xe]<<8|M.pending_buf[M.d_buf+2*xe+1],ee=M.pending_buf[M.l_buf+xe],xe++,ye===0?se(M,ee,X):(se(M,(be=E[ee])+R+1,X),(Se=P[be])!==0&&ne(M,ee-=W[be],Se),se(M,be=L(--ye),ge),(Se=G[be])!==0&&ne(M,ye-=q[be],Se)),xe<M.last_lit;);se(M,z,X)}function he(M,X){var ge,ye,ee,be=X.dyn_tree,Se=X.stat_desc.static_tree,xe=X.stat_desc.has_stree,Ne=X.stat_desc.elems,Xe=-1;for(M.heap_len=0,M.heap_max=m,ge=0;ge<Ne;ge++)be[2*ge]!==0?(M.heap[++M.heap_len]=Xe=ge,M.depth[ge]=0):be[2*ge+1]=0;for(;M.heap_len<2;)be[2*(ee=M.heap[++M.heap_len]=Xe<2?++Xe:0)]=1,M.depth[ee]=0,M.opt_len--,xe&&(M.static_len-=Se[2*ee+1]);for(X.max_code=Xe,ge=M.heap_len>>1;1<=ge;ge--)ze(M,be,ge);for(ee=Ne;ge=M.heap[1],M.heap[1]=M.heap[M.heap_len--],ze(M,be,1),ye=M.heap[1],M.heap[--M.heap_max]=ge,M.heap[--M.heap_max]=ye,be[2*ee]=be[2*ge]+be[2*ye],M.depth[ee]=(M.depth[ge]>=M.depth[ye]?M.depth[ge]:M.depth[ye])+1,be[2*ge+1]=be[2*ye+1]=ee,M.heap[1]=ee++,ze(M,be,1),2<=M.heap_len;);M.heap[--M.heap_max]=M.heap[1],(function(Ue,Nt){var Ln,Gt,fa,et,gt,Yt,it=Nt.dyn_tree,Mi=Nt.max_code,vl=Nt.stat_desc.static_tree,bl=Nt.stat_desc.has_stree,La=Nt.stat_desc.extra_bits,pa=Nt.stat_desc.extra_base,dn=Nt.stat_desc.max_length,qt=0;for(et=0;et<=S;et++)Ue.bl_count[et]=0;for(it[2*Ue.heap[Ue.heap_max]+1]=0,Ln=Ue.heap_max+1;Ln<m;Ln++)dn<(et=it[2*it[2*(Gt=Ue.heap[Ln])+1]+1]+1)&&(et=dn,qt++),it[2*Gt+1]=et,Mi<Gt||(Ue.bl_count[et]++,gt=0,pa<=Gt&&(gt=La[Gt-pa]),Yt=it[2*Gt],Ue.opt_len+=Yt*(et+gt),bl&&(Ue.static_len+=Yt*(vl[2*Gt+1]+gt)));if(qt!==0){do{for(et=dn-1;Ue.bl_count[et]===0;)et--;Ue.bl_count[et]--,Ue.bl_count[et+1]+=2,Ue.bl_count[dn]--,qt-=2}while(0<qt);for(et=dn;et!==0;et--)for(Gt=Ue.bl_count[et];Gt!==0;)Mi<(fa=Ue.heap[--Ln])||(it[2*fa+1]!==et&&(Ue.opt_len+=(et-it[2*fa+1])*it[2*fa],it[2*fa+1]=et),Gt--)}})(M,X),Ce(be,Xe,M.bl_count)}function b(M,X,ge){var ye,ee,be=-1,Se=X[1],xe=0,Ne=7,Xe=4;for(Se===0&&(Ne=138,Xe=3),X[2*(ge+1)+1]=65535,ye=0;ye<=ge;ye++)ee=Se,Se=X[2*(ye+1)+1],++xe<Ne&&ee===Se||(xe<Xe?M.bl_tree[2*ee]+=xe:ee!==0?(ee!==be&&M.bl_tree[2*ee]++,M.bl_tree[2*B]++):xe<=10?M.bl_tree[2*j]++:M.bl_tree[2*H]++,be=ee,Xe=(xe=0)===Se?(Ne=138,3):ee===Se?(Ne=6,3):(Ne=7,4))}function re(M,X,ge){var ye,ee,be=-1,Se=X[1],xe=0,Ne=7,Xe=4;for(Se===0&&(Ne=138,Xe=3),ye=0;ye<=ge;ye++)if(ee=Se,Se=X[2*(ye+1)+1],!(++xe<Ne&&ee===Se)){if(xe<Xe)for(;se(M,ee,M.bl_tree),--xe!=0;);else ee!==0?(ee!==be&&(se(M,ee,M.bl_tree),xe--),se(M,B,M.bl_tree),ne(M,xe-3,2)):xe<=10?(se(M,j,M.bl_tree),ne(M,xe-3,3)):(se(M,H,M.bl_tree),ne(M,xe-11,7));be=ee,Xe=(xe=0)===Se?(Ne=138,3):ee===Se?(Ne=6,3):(Ne=7,4)}}x(q);var ae=!1;function U(M,X,ge,ye){ne(M,(p<<1)+(ye?1:0),3),(function(ee,be,Se,xe){we(ee),le(ee,Se),le(ee,~Se),f.arraySet(ee.pending_buf,ee.window,be,Se,ee.pending),ee.pending+=Se})(M,X,ge)}d._tr_init=function(M){ae||((function(){var X,ge,ye,ee,be,Se=new Array(S+1);for(ee=ye=0;ee<T-1;ee++)for(W[ee]=ye,X=0;X<1<<P[ee];X++)E[ye++]=ee;for(E[ye-1]=ee,ee=be=0;ee<16;ee++)for(q[ee]=be,X=0;X<1<<G[ee];X++)Y[be++]=ee;for(be>>=7;ee<v;ee++)for(q[ee]=be<<7,X=0;X<1<<G[ee]-7;X++)Y[256+be++]=ee;for(ge=0;ge<=S;ge++)Se[ge]=0;for(X=0;X<=143;)ce[2*X+1]=8,X++,Se[8]++;for(;X<=255;)ce[2*X+1]=9,X++,Se[9]++;for(;X<=279;)ce[2*X+1]=7,X++,Se[7]++;for(;X<=287;)ce[2*X+1]=8,X++,Se[8]++;for(Ce(ce,_+1,Se),X=0;X<v;X++)D[2*X+1]=5,D[2*X]=Ee(X,5);I=new me(ce,P,R+1,_,S),k=new me(D,G,0,v,S),J=new me(new Array(0),V,0,A,O)})(),ae=!0),M.l_desc=new C(M.dyn_ltree,I),M.d_desc=new C(M.dyn_dtree,k),M.bl_desc=new C(M.bl_tree,J),M.bi_buf=0,M.bi_valid=0,Te(M)},d._tr_stored_block=U,d._tr_flush_block=function(M,X,ge,ye){var ee,be,Se=0;0<M.level?(M.strm.data_type===2&&(M.strm.data_type=(function(xe){var Ne,Xe=4093624447;for(Ne=0;Ne<=31;Ne++,Xe>>>=1)if(1&Xe&&xe.dyn_ltree[2*Ne]!==0)return g;if(xe.dyn_ltree[18]!==0||xe.dyn_ltree[20]!==0||xe.dyn_ltree[26]!==0)return h;for(Ne=32;Ne<R;Ne++)if(xe.dyn_ltree[2*Ne]!==0)return h;return g})(M)),he(M,M.l_desc),he(M,M.d_desc),Se=(function(xe){var Ne;for(b(xe,xe.dyn_ltree,xe.l_desc.max_code),b(xe,xe.dyn_dtree,xe.d_desc.max_code),he(xe,xe.bl_desc),Ne=A-1;3<=Ne&&xe.bl_tree[2*oe[Ne]+1]===0;Ne--);return xe.opt_len+=3*(Ne+1)+5+5+4,Ne})(M),ee=M.opt_len+3+7>>>3,(be=M.static_len+3+7>>>3)<=ee&&(ee=be)):ee=be=ge+5,ge+4<=ee&&X!==-1?U(M,X,ge,ye):M.strategy===4||be===ee?(ne(M,2+(ye?1:0),3),bt(M,ce,D)):(ne(M,4+(ye?1:0),3),(function(xe,Ne,Xe,Ue){var Nt;for(ne(xe,Ne-257,5),ne(xe,Xe-1,5),ne(xe,Ue-4,4),Nt=0;Nt<Ue;Nt++)ne(xe,xe.bl_tree[2*oe[Nt]+1],3);re(xe,xe.dyn_ltree,Ne-1),re(xe,xe.dyn_dtree,Xe-1)})(M,M.l_desc.max_code+1,M.d_desc.max_code+1,Se+1),bt(M,M.dyn_ltree,M.dyn_dtree)),Te(M),ye&&we(M)},d._tr_tally=function(M,X,ge){return M.pending_buf[M.d_buf+2*M.last_lit]=X>>>8&255,M.pending_buf[M.d_buf+2*M.last_lit+1]=255&X,M.pending_buf[M.l_buf+M.last_lit]=255&ge,M.last_lit++,X===0?M.dyn_ltree[2*ge]++:(M.matches++,X--,M.dyn_ltree[2*(E[ge]+R+1)]++,M.dyn_dtree[2*L(X)]++),M.last_lit===M.lit_bufsize-1},d._tr_align=function(M){ne(M,2,3),se(M,z,ce),(function(X){X.bi_valid===16?(le(X,X.bi_buf),X.bi_buf=0,X.bi_valid=0):8<=X.bi_valid&&(X.pending_buf[X.pending++]=255&X.bi_buf,X.bi_buf>>=8,X.bi_valid-=8)})(M)}},{"../utils/common":41}],53:[function(s,u,d){u.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(s,u,d){(function(f){(function(g,h){if(!g.setImmediate){var x,p,T,R,_=1,v={},A=!1,m=g.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(g);S=S&&S.setTimeout?S:g,x={}.toString.call(g.process)==="[object process]"?function(B){process.nextTick(function(){O(B)})}:(function(){if(g.postMessage&&!g.importScripts){var B=!0,j=g.onmessage;return g.onmessage=function(){B=!1},g.postMessage("","*"),g.onmessage=j,B}})()?(R="setImmediate$"+Math.random()+"$",g.addEventListener?g.addEventListener("message",z,!1):g.attachEvent("onmessage",z),function(B){g.postMessage(R+B,"*")}):g.MessageChannel?((T=new MessageChannel).port1.onmessage=function(B){O(B.data)},function(B){T.port2.postMessage(B)}):m&&"onreadystatechange"in m.createElement("script")?(p=m.documentElement,function(B){var j=m.createElement("script");j.onreadystatechange=function(){O(B),j.onreadystatechange=null,p.removeChild(j),j=null},p.appendChild(j)}):function(B){setTimeout(O,0,B)},S.setImmediate=function(B){typeof B!="function"&&(B=new Function(""+B));for(var j=new Array(arguments.length-1),H=0;H<j.length;H++)j[H]=arguments[H+1];var P={callback:B,args:j};return v[_]=P,x(_),_++},S.clearImmediate=w}function w(B){delete v[B]}function O(B){if(A)setTimeout(O,0,B);else{var j=v[B];if(j){A=!0;try{(function(H){var P=H.callback,G=H.args;switch(G.length){case 0:P();break;case 1:P(G[0]);break;case 2:P(G[0],G[1]);break;case 3:P(G[0],G[1],G[2]);break;default:P.apply(h,G)}})(j)}finally{w(B),A=!1}}}}function z(B){B.source===g&&typeof B.data=="string"&&B.data.indexOf(R)===0&&O(+B.data.slice(R.length))}})(typeof self>"u"?f===void 0?this:f:self)}).call(this,typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})($c)),$c.exports}var Db=Ib();const Ob=iu(Db),jb=({logs:c,currentRound:o,currentPaperVersion:s,filePrefix:u,dataAlert:d,dataFileName:f,dataFileContent:g})=>{const[h,x]=fe.useState([]),[p,T]=fe.useState(null),[R,_]=fe.useState(!1),[v,A]=fe.useState(!1),[m,S]=fe.useState(null),[w,O]=fe.useState(null),[z,B]=fe.useState(!1),[j,H]=fe.useState(!1),P=async()=>{_(!0),T(null);const Y=ua(s,"icis_paper"),E=Ti(o),W=uu();if(!Y){T("Missing paper file to save"),_(!1);return}try{const I=u?`${u}_`:"",k=new Ob,J=[],q=gu();q&&(k.file(q.filename,q.blob),J.push(q.filename),console.log(`[SaveAll] Added PDF: ${q.filename}`));const me=`${I}icis_paper_v${s}_FINAL.tex`;k.file(me,Y),J.push(me),console.log(`[SaveAll] Added TeX: ${me}`);const C=Sm();if(C){const je=`${I}${C.filename}`;k.file(je,C.content),J.push(je),console.log(`[SaveAll] Added BibTeX: ${je}`)}const L=gm();if(L.length>0){console.log(`[SaveAll] Adding ${L.length} PNG figures...`);const je=await ym();for(const ze of je)k.file(ze.filename,ze.blob),J.push(ze.filename);console.log(`[SaveAll] Added ${je.length} PNG figures`)}if(f&&g&&(k.file(f,g),J.push(f),console.log(`[SaveAll] Added data file: ${f}`)),E){const je=`${I}feedback_v${o}.json`;k.file(je,JSON.stringify(E,null,2)),J.push(je)}if(W&&W.length>0)for(const je of W){const ze=`${I}oversight_v${je.version||1}.json`;k.file(ze,JSON.stringify(je,null,2)),J.push(ze)}const le=Em();if(le){const je=`${I}chart_data${le.isSynthetic?"_synthetic":""}.json`;k.file(je,le.chartDataJson),J.push(je),console.log(`[SaveAll] Added chart data: ${je}`);const ze=`${I}visualization_code.py`;k.file(ze,le.pythonCode),J.push(ze),console.log(`[SaveAll] Added Python code: ${ze}`)}const ne=Am();if(ne){const je=`${I}datatable.csv`;k.file(je,ne),J.push(je),console.log(`[SaveAll] Added data table CSV: ${je}`)}const se=await k.generateAsync({type:"blob"}),Ee=`${I}icis_submission_v${s}.zip`,Ce=URL.createObjectURL(se),Te=document.createElement("a");Te.href=Ce,Te.download=Ee,document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),URL.revokeObjectURL(Ce),console.log(`[SaveAll] Downloaded ${Ee} with ${J.length} files`),x([Ee,...J]);const we=await pm();we.success?console.log("[SaveAll] Data file cleaned up from cloud storage"):console.warn("[SaveAll] Failed to clean up data file:",we.error)}catch(I){console.error("[SaveAll] Error:",I),T(I instanceof Error?I.message:"Failed to create zip file")}_(!1)},G=async()=>{A(!0),S(null),T(null);const Y=ua(s,"icis_paper");if(!Y){T("No paper content available to compile"),A(!1);return}const W=`${u?`${u}_`:""}icis_paper_v${s}_FINAL.tex`,I=vm();console.log(`[Compile] Compiling with ${I.length} PNG figures`);const k=await sm(W,Y,I.length>0?I:void 0);S(k),k.success||T(k.error||"PDF compilation failed"),A(!1)},V=()=>{m!=null&&m.pdfFilename&&om(m.pdfFilename)},oe=async()=>{B(!0),H(!1);const E=`${u?`${u}_`:""}icis_paper_v${s}_FINAL.tex`,W=await cm(E);O(W),B(!1)},ce=()=>{w!=null&&w.fullUrl&&(navigator.clipboard.writeText(w.fullUrl),H(!0),setTimeout(()=>H(!1),3e3))},D=()=>{w!=null&&w.fullUrl&&um(w.fullUrl)};return i.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[i.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:i.jsx(lu,{size:40})}),i.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),i.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",o," revision cycle(s)."]}),i.jsx(Di,{logs:c,height:"h-32"}),i.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Paper compiled (v",s,")"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," All sections verified"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Submission package generated"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),i.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[i.jsx("button",{onClick:G,disabled:v||R,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:v?i.jsxs(i.Fragment,{children:[i.jsx(Nh,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Ii,{size:18}),"Compile LaTeX to PDF"]})}),(m==null?void 0:m.success)&&i.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"text-left",children:[i.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),i.jsxs("p",{className:"text-xs text-emerald-600",children:[m.pdfFilename," (",Math.round((m.fileSize||0)/1024)," KB)",m.pageCount&&` • ${m.pageCount} pages`]})]}),i.jsxs("button",{onClick:V,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[i.jsx(cl,{size:16}),"Download"]})]})}),(m==null?void 0:m.success)&&(m==null?void 0:m.exceedsLimit)&&i.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[i.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),i.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",m.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),d&&i.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[i.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),i.jsx("p",{className:"text-xs text-orange-700 mt-1",children:d})]}),(m==null?void 0:m.success)&&i.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(Qc,{size:18,className:"text-blue-600"}),i.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),i.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),w!=null&&w.success?i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:w.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),i.jsxs("button",{onClick:ce,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[i.jsx(P0,{size:14}),j?"Copied!":"Copy"]})]}),i.jsx("div",{className:"flex gap-2",children:i.jsxs("button",{onClick:D,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[i.jsx(wi,{size:14}),"Open Preview"]})}),i.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",w.expiresIn]})]}):i.jsx("button",{onClick:oe,disabled:z,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:z?i.jsxs(i.Fragment,{children:[i.jsx(Nh,{size:16,className:"animate-spin"}),"Creating Link..."]}):i.jsxs(i.Fragment,{children:[i.jsx(fv,{size:16}),"Create Shareable Link"]})})]}),i.jsxs("button",{onClick:P,disabled:R||v,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[i.jsx(Nv,{size:18,className:R?"animate-pulse":""}),R?"Creating ZIP...":"Download All Files (.zip)"]}),i.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads ZIP with PDF, .tex, .bib, PNG figures, chart data JSON, Python code, and data files"}),h.length>0&&i.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[i.jsxs("p",{className:"font-medium mb-1",children:["Downloaded: ",h[0]]}),i.jsxs("p",{className:"text-xs",children:["Contains ",h.length-1," files: ",h.slice(1).map(Y=>Y.split(/[/\\]/).pop()).join(", ")]})]}),p&&i.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[i.jsx("p",{className:"font-medium",children:"Error:"}),i.jsx("p",{className:"text-xs",children:p}),(m==null?void 0:m.log)&&i.jsxs("details",{className:"mt-2 text-left",children:[i.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),i.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:m.log})]})]}),i.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},kb=({state:c,isProcessing:o,onAction:s,uploadedFiles:u,onFileChange:d,detectionStatus:f,onRefreshDetection:g,onStageAbort:h,onStageRestart:x,filePrefix:p,dataFileName:T,dataFileContent:R,participantEmail:_,onNewInterview:v,onPaperToInterview:A,onVenueChange:m,onSourceTypeChange:S})=>{const[w,O]=fe.useState(),z=j=>{O(j),s("PROCEED_TO_SUPERVISOR")},B=()=>{switch(c.currentStage){case ve.SETUP:const j=c.rounds.length>0||c.currentPaperVersion>0||c.paperContent!=="";return i.jsx(vb,{logs:c.logs,stageStatus:c.stages[ve.SETUP],isProcessing:o,uploadedFiles:u,onFileChange:d,onAction:s,detectionStatus:f,onRefreshDetection:g,hasExistingCase:j,onNewInterview:v,onPaperToInterview:A,onVenueChange:m,onSourceTypeChange:S});case ve.BUILDER:return i.jsx(bb,{logs:c.logs,isProcessing:o,isPartialPaper:c.isPartialPaper,currentBuilderStep:c.currentBuilderStep,paperContent:c.paperContent,onAbort:()=>h==null?void 0:h(ve.BUILDER),onRestart:()=>x==null?void 0:x(ve.BUILDER)});case ve.REVIEWER:const H=c.stages[ve.REVIEWER]===Oe.COMPLETED;return i.jsx(_b,{logs:c.logs,isProcessing:o,currentRound:c.currentRound,isComplete:H,onProceedToSupervisor:z,onAbort:()=>h==null?void 0:h(ve.REVIEWER),onRestart:()=>x==null?void 0:x(ve.REVIEWER),filePrefix:p,participantEmail:_});case ve.SUPERVISOR:const P=rl(c.currentRound),G=uu();return i.jsx(Cb,{currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,lastFeedback:c.lastFeedback,isProcessing:o,oversightData:P,allOversight:G,onAction:s,reviewOutputFiles:w});case ve.REVISER:return i.jsx(Nb,{logs:c.logs,isProcessing:o,currentPaperVersion:c.currentPaperVersion,paperContent:c.paperContent,onAbort:()=>h==null?void 0:h(ve.REVISER),onRestart:()=>x==null?void 0:x(ve.REVISER)});case ve.FINALIZE:return i.jsx(jb,{logs:c.logs,currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,filePrefix:p,dataAlert:c.dataAlert,dataFileName:T,dataFileContent:R});default:return i.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:i.jsxs("p",{children:["Unknown stage: ",c.currentStage]})})}};return i.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:B()})};function ml(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://asd-iddo-droris-projects.vercel.app":""}function gl(){return{"Content-Type":"application/json"}}async function Lb(c){const o=ml(),s=new URLSearchParams,u=`${o}/api/participants${s.toString()?`?${s}`:""}`,f=await(await fetch(u,{headers:gl()})).json();if(!f.success)throw new Error(f.error||"Failed to fetch participants");return f.participants}async function zh(c){const o=ml(),u=await(await fetch(`${o}/api/participants`,{method:"PATCH",headers:gl(),body:JSON.stringify(c)})).json();if(!u.success)throw new Error(u.error||"Failed to update participant");return u.participant}async function Mb(c){const o=ml(),u=await(await fetch(`${o}/api/participants`,{method:"DELETE",headers:gl(),body:JSON.stringify({email:c})})).json();if(!u.success)throw new Error(u.error||"Failed to delete participant")}async function zb(){const c=ml(),s=await(await fetch(`${c}/api/research-stats`,{headers:gl()})).json();if(!s.success)throw new Error(s.error||"Failed to fetch research stats");return s.stats}const el=({label:c,value:o,icon:s,color:u,subtext:d})=>i.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm text-slate-500",children:c}),i.jsx("p",{className:`text-2xl font-bold ${u}`,children:o}),d&&i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:d})]}),i.jsx("div",{className:`p-2 rounded-lg ${u.replace("text-","bg-").replace("-600","-100")}`,children:s})]})}),Ub=({label:c,count:o,total:s,color:u})=>{const d=s>0?o/s*100:0;return i.jsxs("div",{className:"mb-3",children:[i.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[i.jsx("span",{className:"text-slate-600",children:c}),i.jsx("span",{className:"text-slate-800 font-medium",children:o})]}),i.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:i.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${u}`,style:{width:`${Math.max(d,2)}%`}})})]})},Fb=({onViewParticipants:c})=>{const[o,s]=fe.useState(null),[u,d]=fe.useState(!0),[f,g]=fe.useState(null),h=async()=>{d(!0),g(null);try{const p=await zb();s(p)}catch(p){g(p instanceof Error?p.message:"Failed to load stats")}finally{d(!1)}};if(fe.useEffect(()=>{h()},[]),u)return i.jsx("div",{className:"flex items-center justify-center h-64",children:i.jsx(cn,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(f)return i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[i.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[i.jsx(Zc,{size:20}),i.jsxs("span",{children:["Error: ",f]})]}),i.jsx("button",{onClick:h,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!o)return null;const x=[{label:"1. Registered",count:o.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:o.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:o.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:o.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:o.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:o.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:o.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:o.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:o.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:o.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:o.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:o.funnel.dropped_out||0,color:"bg-red-500"}];return i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),i.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),i.jsxs("button",{onClick:h,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[i.jsx(cn,{size:16}),"Refresh"]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[i.jsx(el,{label:"Total Participants",value:o.total,icon:i.jsx(dl,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${o.active} active`}),i.jsx(el,{label:"Surveys Sent",value:o.surveysSent,icon:i.jsx(lu,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),i.jsx(el,{label:"Surveys Completed",value:o.surveysCompleted,icon:i.jsx(Xc,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),i.jsx(el,{label:"Completion Rate",value:`${o.completionRate}%`,icon:i.jsx(Wh,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),o.alerts&&o.alerts.length>0&&i.jsx("div",{className:"space-y-2",children:o.alerts.map((p,T)=>i.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${p.type==="stuck"?"bg-amber-50 border-amber-200":p.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[i.jsx(Zc,{size:18,className:p.type==="stuck"?"text-amber-500":p.type==="pending_survey"?"text-blue-500":"text-slate-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-sm text-slate-800",children:p.message}),i.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[p.participantIds.slice(0,3).join(", "),p.participantIds.length>3&&` +${p.participantIds.length-3} more`]})]})]},T))}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx(qc,{size:20,className:"text-slate-500"}),i.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),i.jsx("div",{className:"space-y-1",children:x.map(p=>i.jsx(Ub,{label:p.label,count:p.count,total:o.total,color:p.color},p.label))})]}),i.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx(g0,{size:20,className:"text-slate-500"}),i.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),i.jsx("span",{className:"text-lg font-bold text-emerald-600",children:o.groups.group1.total})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Interview"}),i.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.interviewRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Completion"}),i.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.completionRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),i.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group1.dropRate,"%"]})]})]})]}),i.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),i.jsx("span",{className:"text-lg font-bold text-blue-600",children:o.groups.group2.total})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Interview"}),i.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.interviewRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Completion"}),i.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.completionRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),i.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group2.dropRate,"%"]})]})]})]}),o.groups.unassigned>0&&i.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:i.jsxs("span",{className:"text-sm text-slate-600",children:[o.groups.unassigned," unassigned participant(s)"]})})]})]})]}),i.jsx("div",{className:"text-center",children:i.jsx("button",{onClick:c,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},tu={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Tm={1:"With Oversight",2:"Control (No Oversight)"},Bb=({status:c})=>{const o={registered:"bg-gray-100 text-gray-700",interview_completed:"bg-blue-100 text-blue-700",setup_completed:"bg-sky-100 text-sky-700",builder_completed:"bg-amber-100 text-amber-700",reviewer_completed:"bg-orange-100 text-orange-700",supervisor_completed:"bg-purple-100 text-purple-700",reviser_completed:"bg-indigo-100 text-indigo-700",finalize_completed:"bg-teal-100 text-teal-700",paper_sent:"bg-cyan-100 text-cyan-700",survey_sent:"bg-violet-100 text-violet-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o[c]}`,children:tu[c]})},Pb=({groupId:c})=>{if(c===null)return i.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const o=c===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o}`,children:Tm[c]})},Vb=({onBack:c})=>{const[o,s]=fe.useState([]),[u,d]=fe.useState(!0),[f,g]=fe.useState(null),[h,x]=fe.useState(""),[p,T]=fe.useState(""),[R,_]=fe.useState("all"),[v,A]=fe.useState(null),[m,S]=fe.useState(null),w=async()=>{d(!0),g(null);try{const G=await Lb();s(G)}catch(G){g(G instanceof Error?G.message:"Failed to load participants")}finally{d(!1)}};fe.useEffect(()=>{w()},[]);const O=o.filter(G=>{var D;const V=!h||G.email.toLowerCase().includes(h.toLowerCase())||((D=G.name)==null?void 0:D.toLowerCase().includes(h.toLowerCase())),oe=!p||G.status===p,ce=R==="all"||G.group_id===R;return V&&oe&&ce}),z=async(G,V)=>{try{await zh({email:G,status:V}),await w(),A(null)}catch(oe){alert(oe instanceof Error?oe.message:"Failed to update status")}},B=async(G,V)=>{try{await zh({email:G,group_id:V}),await w(),A(null)}catch(oe){alert(oe instanceof Error?oe.message:"Failed to update group")}},j=async G=>{if(confirm(`Are you sure you want to delete participant ${G}?`))try{await Mb(G),await w(),A(null)}catch(V){alert(V instanceof Error?V.message:"Failed to delete participant")}},H=G=>new Date(G).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),P=["registered","interview_completed","setup_completed","builder_completed","reviewer_completed","supervisor_completed","reviser_completed","finalize_completed","paper_sent","survey_sent","survey_completed","dropped_out"];return i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("button",{onClick:c,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:i.jsx(x0,{size:20,className:"text-slate-600"})}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),i.jsxs("p",{className:"text-slate-500 text-sm",children:[O.length," of ",o.length," participants"]})]})]}),i.jsxs("button",{onClick:w,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[i.jsx(cn,{size:16,className:u?"animate-spin":""}),"Refresh"]})]}),i.jsxs("div",{className:"flex flex-wrap gap-3",children:[i.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[i.jsx(ul,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),i.jsx("input",{type:"text",placeholder:"Search by name or email...",value:h,onChange:G=>x(G.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("select",{value:p,onChange:G=>T(G.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[i.jsx("option",{value:"",children:"All Statuses"}),P.map(G=>i.jsx("option",{value:G,children:tu[G]},G))]}),i.jsx(ol,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("select",{value:R===null?"null":R==="all"?"all":R,onChange:G=>{const V=G.target.value;_(V==="all"?"all":V==="null"?null:parseInt(V))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[i.jsx("option",{value:"all",children:"All Groups"}),i.jsx("option",{value:"1",children:"Group 1: With Oversight"}),i.jsx("option",{value:"2",children:"Group 2: Control"}),i.jsx("option",{value:"null",children:"Unassigned"})]}),i.jsx(ol,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),f&&i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:f}),i.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm",children:[i.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:i.jsxs("tr",{children:[i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),i.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),i.jsx("tbody",{children:u?i.jsx("tr",{children:i.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[i.jsx(cn,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):O.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):O.map(G=>i.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[i.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:G.name||i.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),i.jsx("td",{className:"px-4 py-3 text-slate-600",children:G.email}),i.jsx("td",{className:"px-4 py-3",children:i.jsx(Bb,{status:G.status})}),i.jsx("td",{className:"px-4 py-3",children:i.jsx(Pb,{groupId:G.group_id})}),i.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:H(G.registered_at)}),i.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:H(G.updated_at)}),i.jsxs("td",{className:"px-4 py-3 text-right relative",children:[i.jsx("button",{onClick:()=>A(v===G.id?null:G.id),className:"p-1 rounded hover:bg-slate-100",children:i.jsx(Xh,{size:16,className:"text-slate-400"})}),v===G.id&&i.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[i.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),P.map(V=>i.jsxs("button",{onClick:()=>z(G.email,V),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.status===V?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.status===V&&i.jsx(zt,{size:12}),i.jsx("span",{className:G.status===V?"":"ml-4",children:tu[V]})]},V)),i.jsx("div",{className:"border-t border-slate-100 my-1"}),i.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map(V=>i.jsxs("button",{onClick:()=>B(G.email,V),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.group_id===V?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.group_id===V&&i.jsx(zt,{size:12}),i.jsx("span",{className:G.group_id===V?"":"ml-4",children:Tm[V]})]},V)),i.jsx("div",{className:"border-t border-slate-100 my-1"}),i.jsxs("button",{onClick:()=>j(G.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[i.jsx(zv,{size:14}),"Delete Participant"]})]})]})]},G.id))})]})})})]})},$b=({onClose:c})=>{const[o,s]=fe.useState("dashboard");return i.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:o==="dashboard"?i.jsx(Fb,{onViewParticipants:()=>s("participants")}):i.jsx(Vb,{onBack:()=>s("dashboard")})})},Hb="modulepreload",Gb=function(c){return"/"+c},Uh={},oa=function(o,s,u){let d=Promise.resolve();if(s&&s.length>0){let g=function(p){return Promise.all(p.map(T=>Promise.resolve(T).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),x=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));d=g(s.map(p=>{if(p=Gb(p),p in Uh)return;Uh[p]=!0;const T=p.endsWith(".css"),R=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${R}`))return;const _=document.createElement("link");if(_.rel=T?"stylesheet":Hb,T||(_.as="script"),_.crossOrigin="",_.href=p,x&&_.setAttribute("nonce",x),document.head.appendChild(_),T)return new Promise((v,A)=>{_.addEventListener("load",v),_.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${p}`)))})}))}function f(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return d.then(g=>{for(const h of g||[])h.status==="rejected"&&f(h.reason);return o().catch(f)})};let Yb="icis";function qb(){return Yb}const Xb=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
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
`,Qb=`================================================================================\r
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
`,Wb=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
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
`,Zb=`================================================================================
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
`,Kb=`================================================================================
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
`,Jb=`================================================================================
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
`,ex=`ICIS Paper Title\r
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
`,tx=`# MISQ IS Journal Review Criteria
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
`,nx=`### The Prompt

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

**Goal:** Transform this academic paper into a standalone visual asset suitable for an executive summary of the paper.`,ax=`You are a structured-data extraction engine.

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

`,rx=`================================================================================
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
`,ix={SETUP:"setup.txt",BUILDER:"builder.txt",REVIEWER:"reviewer.txt",SUPERVISOR:"supervisor.txt",REVISER:"reviser.txt",FINALIZE:"finalize.txt",TEMPLATE:"template.txt",MISQ_CRITERIA:"review_criteria.txt",INFOGRAPHIC:"infographic.txt",TABLE:"datatable.txt",SYNTHETIC_DATA:"synthetic_data.txt"},sx={SETUP:Zb,BUILDER:Xb,REVIEWER:Qb,SUPERVISOR:Kb,REVISER:Wb,FINALIZE:Jb,TEMPLATE:ex,MISQ_CRITERIA:tx,INFOGRAPHIC:nx,TABLE:ax,SYNTHETIC_DATA:rx},xi={};function Hc(c,o){let s=c;s=s.replace(/\{ICIS_PATH\}/g,o0);const u=`/${o}`;return s=s.replace(/\{CONF_PATH\}/g,u),s}function lx(c,o){return`${c}:${o}`}async function ox(c,o){const s=lx(c,o);if(xi[s])return xi[s];const u=ix[o];try{const f=await fetch(`/venues/conferences/${c}/${u}`);if(f.ok){const g=await f.text(),h=Hc(g,c);return xi[s]=h,h}}catch{console.warn(`[PromptService] Could not load conference prompt: ${c}/${u}`)}try{const f=await fetch(`/venues/shared/${u}`);if(f.ok){const g=await f.text(),h=Hc(g,c);return xi[s]=h,h}}catch{console.warn(`[PromptService] Could not load shared prompt: ${u}`)}console.log(`[PromptService] Falling back to legacy prompt for ${o}`);const d=sx[o];if(d){const f=Hc(d,c);return xi[s]=f,f}return`[Prompt not found: ${o}]`}async function _i(c){const o=qb();return ox(o,c)}const Ar="https://icis-deploy-12-10-2025.vercel.app",Ci="http://localhost:3001";function ka(){return{"Content-Type":"application/json"}}const Rm="";let ki="research";const _m={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function Ni(){return _m[ki].gemini}function nu(){return _m[ki].openai}function cx(c){ki=c,console.log(`[GeminiService] Paper mode set to: ${c}`),console.log(`[GeminiService] Using Gemini model: ${Ni()}`),console.log(`[GeminiService] Using OpenAI model: ${nu()}`)}function ux(){return`https://generativelanguage.googleapis.com/v1beta/models/${Ni()}:generateContent?key=${Rm}`}console.log("[API] Using Vercel proxy:",Ar);let Si=null,Ei=null;async function dx(c=10){return Si&&Si.length>=c?(console.log(`[ExamplePapers] Using cached papers (${Si.length} available)`),Si.slice(0,c)):Ei?(console.log("[ExamplePapers] Load already in progress, waiting..."),(await Ei).slice(0,c)):(console.log(`[ExamplePapers] Loading ${c} example papers...`),Ei=(async()=>{try{const o=Ar?`${Ar}/api/example-papers?count=${c}`:`${Ci}/api/example-papers?count=${c}`;console.log(`[ExamplePapers] Fetching from: ${o}`);const s=await fetch(o,{method:"GET",headers:ka()});if(!s.ok)throw new Error(`Failed to load example papers: ${s.status} ${s.statusText}`);const u=await s.json();if(!u.success||!u.papers)throw new Error(u.error||"Invalid response from example papers API");return Si=u.papers,console.log(`[ExamplePapers] Loaded ${u.papers.length} papers (${Math.round(u.totalSize/1024/1024)}MB total)`),u.papers}catch(o){throw console.error("[ExamplePapers] Failed to load:",o),Ei=null,o}})(),Ei)}function Cm(c){var u,d,f;const o=(f=(d=(u=c.candidates)==null?void 0:u[0])==null?void 0:d.content)==null?void 0:f.parts;if(!o||!Array.isArray(o))return null;const s=o.filter(g=>g.text).map(g=>g.text);return s.length===0?null:(s.length>1&&console.log(`[Gemini] Concatenating ${s.length} text parts`),s.join(""))}async function fx(c,o,s){var p,T,R,_;const u=[];for(const v of s)u.push({inlineData:{mimeType:v.mimeType,data:v.base64}});const d=`
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

`;u.push({text:d+c});const f={contents:[{parts:u}],systemInstruction:{parts:[{text:o}]},generationConfig:{maxOutputTokens:16384,temperature:.7}};console.log(`[Gemini] Calling with ${s.length} example papers...`),console.log(`[Gemini] Using model: ${Ni()}`),console.log(`[Gemini] Total parts: ${u.length} (${s.length} PDFs + 1 text)`);const g=await Li(),h=new AbortController,x=setTimeout(()=>{console.log("[Gemini] Request timeout - aborting after 5 minutes"),h.abort()},3e5);try{let v;if(g.type==="vercel"||g.type==="local"){const w=g.type==="local"?`${g.baseUrl}/api/gemini`:`${g.baseUrl}/api/gemini`;console.log(`[Gemini] Using ${g.type} proxy for multimodal request: ${w}`),v=await fetch(w,{method:"POST",headers:ka(),body:JSON.stringify({...f,model:Ni()}),signal:h.signal})}else{if(!Rm)throw new Rt("API_KEY_INVALID","Gemini API key is not configured and no proxy available","Missing VITE_GEMINI_API_KEY",!1);console.log("[Gemini] Using direct API for multimodal request"),v=await fetch(ux(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f),signal:h.signal})}if(clearTimeout(x),!v.ok){const w=await v.text();throw px(v.status,w)}const A=await v.json(),m=Cm(A),S=(T=(p=A.candidates)==null?void 0:p[0])==null?void 0:T.finishReason;if(S&&S!=="STOP"&&console.warn(`[Gemini] Response finished with reason: ${S} (content length: ${(m==null?void 0:m.length)||0})`),!m){if(S==="SAFETY")throw new Rt("CONTENT_FILTERED","Response was filtered due to safety settings.",`Finish reason: ${S}`,!1);if(S==="RECITATION"){const w=(R=A.candidates)==null?void 0:R[0],O=w==null?void 0:w.citationMetadata,z=w==null?void 0:w.safetyRatings;throw console.warn("[Gemini] RECITATION detected - output blocked due to similarity to training data"),console.warn("[Gemini] RECITATION details:",JSON.stringify({citationMetadata:O,safetyRatings:z,contentBlockReason:w==null?void 0:w.contentBlockReason,candidateCount:(_=A.candidates)==null?void 0:_.length},null,2)),new Rt("CONTENT_FILTERED","Response blocked due to similarity to training data (RECITATION). Retrying without example papers.",`Finish reason: ${S}`,!0)}throw new Rt("INVALID_RESPONSE","Empty response from AI with examples.",JSON.stringify(A).substring(0,200),!0)}return console.log(`[Gemini] Response received with examples (${m.length} chars)`),m}catch(v){if(clearTimeout(x),v instanceof Rt)throw v;const A=v;throw A.name==="AbortError"?new Rt("NETWORK_ERROR","Request timed out (5 min). The request with example papers may be too large.","AbortError: Request timeout",!1):new Rt("UNKNOWN",`Error with example papers: ${A.message}`,A.stack||A.message,!1)}}class Rt extends Error{constructor(o,s,u,d=!1,f){super(s),this.type=o,this.userMessage=s,this.technicalDetails=u,this.retryable=d,this.statusCode=f,this.name="GeminiError"}}function px(c,o){var f,g;let s={};try{s=JSON.parse(o)}catch{}const u=((f=s.error)==null?void 0:f.message)||o,d=((g=s.error)==null?void 0:g.status)||"";switch(c){case 401:case 403:return new Rt("API_KEY_INVALID","API key is invalid or missing. Please check your configuration.",u,!1,c);case 429:return new Rt("RATE_LIMITED","Rate limit exceeded. Please wait a moment before trying again.",u,!0,c);case 503:return d==="UNAVAILABLE"||u.includes("overloaded")?new Rt("MODEL_OVERLOADED","The AI model is temporarily overloaded. Retrying automatically...",u,!0,c):new Rt("UNKNOWN","Service temporarily unavailable. Retrying...",u,!0,c);case 500:case 502:case 504:return new Rt("UNKNOWN","Server error. Retrying automatically...",u,!0,c);default:return new Rt("UNKNOWN",`API error (${c}): ${u.substring(0,100)}`,u,!1,c)}}const sl=c=>new Promise(o=>setTimeout(o,c));async function hx(c,o){var T,R;const s=o===Ci?`${o}/api/gemini/chat`:`${o}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${s}`);const u={...c,model:Ni()},d=new AbortController,f=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),d.abort()},18e4),g=await fetch(s,{method:"POST",headers:ka(),body:JSON.stringify(u),signal:d.signal});if(clearTimeout(f),!g.ok){const _=await g.json().catch(()=>({error:"Unknown error"}));throw new Rt("UNKNOWN",`Gemini proxy error: ${_.error||_.details||"Unknown error"}`,JSON.stringify(_),g.status>=500)}const h=await g.json(),x=Cm(h),p=(R=(T=h.candidates)==null?void 0:T[0])==null?void 0:R.finishReason;if(p&&p!=="STOP"&&console.warn(`[Gemini Proxy] Response finished with reason: ${p} (content length: ${(x==null?void 0:x.length)||0})`),!x)throw new Rt("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(h).substring(0,200),!0);return x}async function ca(c,o){const s={contents:[{parts:[{text:c}]}],generationConfig:{maxOutputTokens:16384,temperature:.7}};o&&(s.systemInstruction={parts:[{text:o}]});const u=await Li();if(u.type==="vercel"||u.type==="local")return console.log(`[Gemini] Using ${u.type} proxy...`),hx(s,u.baseUrl);throw new Rt("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function ll(c){let o=c;const s=o.match(/```latex\s*([\s\S]*?)\s*```/);s&&(o=s[1]);const u=o.indexOf("\\end{document}");return u!==-1&&(o=o.substring(0,u+14)),o=o.replace(/```javascript[\s\S]*?```/g,""),o=o.replace(/```js[\s\S]*?```/g,""),o=o.replace(/```python[\s\S]*?```/g,""),o=o.replace(/```[\s\S]*?```/g,""),o=o.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/Verification Report:[\s\S]*$/gi,""),o=o.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/console\.log\([\s\S]*?\);/g,""),o=o.replace(/const \w+ = \{[\s\S]*?\};/g,""),o=o.trim(),o=o.replace(/\\includegraphics(\[[^\]]*\])?\{\.\.\/Results\//g,"\\includegraphics$1{"),o=o.replace(/\\includegraphics(\[[^\]]*\])?\{Results\//g,"\\includegraphics$1{"),console.log(`[cleanLatexOutput] Cleaned content from ${c.length} to ${o.length} characters`),o}function mx(c){const o=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
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
Be specific and detailed enough for replication.`,minWords:1e3}];return c?o.push({name:"Conclusion",key:"conclusion",prompt:`Write a brief Conclusion section (400-500 words) for a research-in-progress paper that:
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
5. Prioritize recent papers (2020-2025) while including necessary foundational works`,minWords:300}):o.push({name:"Results",key:"results",prompt:`Write a COMPLETE Results section (1200-1500 words) that:
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
6. Prioritize recent papers (2020-2025) while including necessary foundational works`,minWords:500}),o}async function tl(c,o){var p;const s=Object.entries(o.previousSections).map(([T,R])=>`[${T}]
${R.substring(0,500)}...`).join(`

`);let u="";if(c.key==="references"){const T=Object.values(o.previousSections).join(`
`),R=/\\cite\{([^}]+)\}/g,_=new Set;let v;for(;(v=R.exec(T))!==null;)v[1].split(",").map(m=>m.trim()).forEach(m=>_.add(m));if(_.size>0){const A=[..._].sort().join(`
- `);if(console.log(`[generateSection] Found ${_.size} \\cite{} keys in paper`),o.accumulatedBibTeX&&o.accumulatedBibTeX.trim().length>0){const m=(o.accumulatedBibTeX.match(/@(article|inproceedings|book|incollection|misc)\{/gi)||[]).length;console.log(`[generateSection] Using ${m} pre-validated BibTeX entries`),u=`
⚠️ IMPORTANT - INCREMENTAL CITATION VALIDATION ACTIVE:
Most citations in this paper have ALREADY been validated against Semantic Scholar during section generation.

ALREADY VALIDATED (${m} entries):
The following BibTeX entries have been validated and will be included automatically:

${o.accumulatedBibTeX.substring(0,3e3)}${o.accumulatedBibTeX.length>3e3?`
... (truncated)`:""}

YOUR TASK:
1. Review the citation keys used in the paper: ${A.substring(0,500)}
2. Add 3-5 ADDITIONAL foundational/seminal references that are NOT already in the validated entries above
3. These should be highly-cited, well-known papers in the field (e.g., Davis 1989 TAM, Venkatesh 2003 UTAUT, DeLone & McLean IS Success)
4. Output ONLY the NEW BibTeX entries you are adding (the validated ones are already included)
5. Do NOT duplicate any entries that already exist in the validated references above

OUTPUT: Only new BibTeX entries for foundational references not already validated.
`}else u=`
⚠️ CRITICAL - CITATION KEYS USED IN PAPER (${_.size} total):
The paper body uses these \\cite{key} commands. You MUST generate a BibTeX entry for EACH key:

- ${A}

INSTRUCTIONS:
1. Generate ONE @article or @inproceedings BibTeX entry for EACH citation key listed above
2. The BibTeX entry key MUST EXACTLY match the \\cite{} key used in the paper
3. Example: \\cite{davis1989perceived} requires @article{davis1989perceived, ...}
4. You may add 3-5 additional foundational references beyond the ${_.size} required keys
5. Total references should be ${_.size} + 3-5 additional = ${_.size+3} to ${_.size+5} entries

DO NOT skip any of the ${_.size} citation keys listed above. Each one MUST have a matching BibTeX entry.
`}}let d="";const f=["abstract","introduction","methodology","results","discussion","conclusion"];o.dataSummary&&f.includes(c.key)?(console.log(`[generateSection] Adding data summary to ${c.key} section (${o.dataSummary.length} chars)`),c.key==="methodology"||c.key==="results"?d=`
ACTUAL DATA FILE ANALYSIS:
The following is a summary of the actual data file that will be used in this research.
You MUST incorporate these specific details into your writing:

${o.dataSummary}

IMPORTANT: Use the ACTUAL column names, sample sizes, and statistics from the data summary above.
Do NOT use generic placeholders or made-up values - use the real data characteristics.
`:d=`
EMPIRICAL STUDY CONTEXT:
This research includes EMPIRICAL DATA analysis. A real dataset has been provided with the following characteristics:
${o.dataSummary.substring(0,1e3)}

IMPORTANT FOR ${c.key.toUpperCase()}:
- This is an EMPIRICAL study with real data, NOT a purely theoretical paper
- Mention the empirical nature of the research appropriately for this section
- Reference the data-driven approach where relevant
`):o.dataSummary&&console.log(`[generateSection] Data summary available but not used for ${c.key} section`);const g=`You are writing an academic research paper for ICIS (International Conference on Information Systems).

RESEARCH CONTEXT (from interview):
${o.interviewTranscript.substring(0,3e3)}
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
- Generate complete, realistic content based on the research context provided${o.dataSummary?`
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
- Each \\cite{key} you use MUST have a matching BibTeX entry in the references
- Aim for 15-25 unique citations across the paper
- NEVER include a "References:" section or bibliography in your content
- Your output should contain ONLY the section content with \\cite{} commands
- References are generated separately as BibTeX entries`}`,h="You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.";let x;if(o.examplePapers&&o.examplePapers.length>0&&ki==="research"){console.log(`[generateSection] Using ${o.examplePapers.length} example papers for ${c.name} (research mode)`);try{x=await fx(g,h,o.examplePapers)}catch(T){if(T instanceof Rt&&((p=T.technicalDetails)!=null&&p.includes("RECITATION")))console.warn(`[generateSection] RECITATION error for ${c.name} - retrying without example papers`),x=await ca(g,h);else throw T}}else x=await ca(g,h);return x=x.replace(/^\s*\*\*([^*\n]+)\*\*\s*$/gm,"\\subsection{$1}").replace(/^\s*#{1,3}\s+.+\n/gm,"").trim(),x}const gx=async(c="Mock transcript content...",o=!1,s,u,d)=>{var ce,D,Y,E,W;console.log(`[runBuilder] ENTRY - dataFileName="${u}" (type: ${typeof u})`);const f=mx(o),g={};console.log(`[Builder] Starting section-by-section generation (${f.length} sections, ${o?"partial":"full"} paper)`);let h,x,p,T;if(u){console.log(`[Builder] User-provided data file: ${u} - starting 3-step data pipeline`);try{s==null||s("Preliminary Analysis","starting"),console.log("[Builder] Step 1: Preliminary analysis of raw data...");const I=await Rx(u,k=>console.log(`[Builder] ${k}`));I.success?(T=I.analysis,console.log("[Builder] Preliminary analysis complete"),console.log("[Builder] Raw data profile:",(ce=I.analysis)==null?void 0:ce.substring(0,300)),s==null||s("Preliminary Analysis","completed")):(console.warn("[Builder] Preliminary analysis had issues:",I.error),s==null||s("Preliminary Analysis","completed"))}catch(I){console.warn("[Builder] Preliminary analysis error (non-fatal):",I),s==null||s("Preliminary Analysis","completed")}try{s==null||s("Data Cleaning","starting"),console.log("[Builder] Step 2: Cleaning data based on preliminary analysis...");const I=await Tx(u,k=>console.log(`[Builder] ${k}`));I.success?(p=I.summary,console.log("[Builder] Data cleaning complete:",p),s==null||s("Data Cleaning","completed")):(console.warn("[Builder] Data cleaning had issues:",I.error),s==null||s("Data Cleaning","completed"))}catch(I){console.warn("[Builder] Data cleaning error (non-fatal):",I),s==null||s("Data Cleaning","completed")}s==null||s("Data Analysis","starting"),console.log("[Builder] Step 3: Full analysis of cleaned data for paper generation...");try{const I=await Dm(u,k=>console.log(`[Builder] ${k}`),d);if(console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((D=I.dataSummary)==null?void 0:D.length)||0,error:I.error}),I.success&&I.dataSummary){let k="";T&&(k+=`RAW DATA PROFILE:
${T}

`),p&&(k+=`DATA CLEANING PERFORMED:
${p}

`),k+=`CLEANED DATA ANALYSIS:
${I.dataSummary}`,h=k,console.log("[Builder] Full data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",h.substring(0,500)),s==null||s("Data Analysis","completed")}else x=`*** DATA ALERT: Could not analyze data file "${u}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${x}`),s==null||s("Data Analysis","error")}catch(I){x=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${x}`),s==null||s("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data pipeline");let R=[];if(ki==="research")try{s==null||s("Loading Examples","starting"),console.log("[Builder] Research mode - loading ICIS 2024 example papers..."),R=await dx(5),console.log(`[Builder] Loaded ${R.length} example papers for quality calibration`),s==null||s("Loading Examples","completed")}catch(I){console.warn("[Builder] Could not load example papers:",I.message),console.warn("[Builder] Proceeding without example papers - quality may be lower"),s==null||s("Loading Examples","error")}else console.log("[Builder] Draft mode - skipping example papers for faster generation");let _=[],v=!1,A=[];const m=new Set;let S={total:0,verified:0,partial:0,unverified:0};const{validateCitationBatch:w,extractCitationKeys:O}=await oa(async()=>{const{validateCitationBatch:I,extractCitationKeys:k}=await import("./referenceValidationService-COq9N86n.js");return{validateCitationBatch:I,extractCitationKeys:k}},[]);async function z(I,k){const J=O(I);if(J.length===0){console.log(`[Builder] No citations found in ${k}`);return}const q=J.filter(me=>!m.has(me));if(q.length===0){console.log(`[Builder] All ${J.length} citations in ${k} already validated`);return}console.log(`[Builder] Validating ${q.length} new citations from ${k}...`),s==null||s("Citation Validation","starting");try{const me=await w(q,m);for(const C of me)C.status!=="ALREADY_EXISTS"&&(C.bibtexEntry&&(C.status==="VERIFIED"||C.status==="PARTIAL")&&A.push(C.bibtexEntry),m.add(C.citationKey),S.total++,C.status==="VERIFIED"?S.verified++:C.status==="PARTIAL"?S.partial++:S.unverified++);console.log(`[Builder] Citation validation for ${k}: ${q.length} new, ${m.size} total accumulated`),console.log(`[Builder] Validation stats: ${S.verified} verified, ${S.partial} partial, ${S.unverified} unverified`),s==null||s("Citation Validation","completed")}catch(me){console.error(`[Builder] Citation validation error in ${k}:`,me),s==null||s("Citation Validation","error")}}const B=["title","abstract","introduction","literature_review","theory"],j=["methodology","results"],H=o?["methodology","conclusion","references"]:["discussion","conclusion","references"];console.log("[Builder] Phase 1: Generating sections up to Theory...");for(const I of f.filter(k=>B.includes(k.key)))try{s==null||s(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const k=await tl(I,{interviewTranscript:c,previousSections:g,dataSummary:h,examplePapers:R,accumulatedBibTeX:A.join(`

`)});g[I.key]=k,s==null||s(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${k.split(/\s+/).length} words)`),I.key!=="title"&&I.key!=="references"&&await z(k,I.name),await sl(500)}catch(k){throw s==null||s(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,k),new Error(`Failed to generate ${I.name}: ${k.message}`)}console.log("[Builder] Phase 2: Generating conceptual figures with paper context...");try{s==null||s("Conceptual Figures","starting");const I=Object.entries(g).map(([q,me])=>`[${q.toUpperCase()}]
${me}`).join(`

`),k=`${I.substring(0,4e3)}

Research Interview: ${c.substring(0,1500)}`,J=await Om(c,k,q=>console.log(`[Builder] ${q}`));if(J.success&&J.figures.length>0){console.log("[Builder] Analyzing figures with Gemini to generate captions and descriptions...");for(const q of J.figures)if(q.base64){const me=q.filename==="research_model.png"?"research_model":"theoretical_framework",C=await _x(q.base64,me,I);q.description=C.caption,q.paragraphDescription=C.paragraphDescription,console.log(`[Builder] Generated caption and description for ${q.filename}`)}_=J.figures}s==null||s("Conceptual Figures","completed"),console.log(`[Builder] Generated ${_.length} conceptual figures with descriptions`)}catch(I){console.error("[Builder] Conceptual figure generation failed:",I),s==null||s("Conceptual Figures","error")}if(!o){console.log("[Builder] Phase 3: Generating Methodology and Results...");for(const I of f.filter(k=>j.includes(k.key)))try{s==null||s(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const k=await tl(I,{interviewTranscript:c,previousSections:g,dataSummary:h,examplePapers:R,accumulatedBibTeX:A.join(`

`)});g[I.key]=k,s==null||s(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${k.split(/\s+/).length} words)`),I.key!=="references"&&await z(k,I.name),await sl(500)}catch(k){throw s==null||s(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,k),new Error(`Failed to generate ${I.name}: ${k.message}`)}if(h)try{s==null||s("Empirical Figures","starting"),console.log("[Builder] Phase 4: Generating empirical figures after Results...");const I=`Research Interview: ${c.substring(0,2e3)}`,k=await au(c,I,u,q=>console.log(`[Builder] ${q}`),h,!1),J=k.figures.filter(q=>q.filename!=="research_model.png"&&q.filename!=="theoretical_framework.png");_=[..._,...J],v=k.usedSyntheticData,k.dataAlert&&(x=x?`${x}
${k.dataAlert}`:k.dataAlert),s==null||s("Empirical Figures","completed"),console.log(`[Builder] Generated ${J.length} empirical figures`)}catch(I){console.error("[Builder] Empirical figure generation failed:",I),s==null||s("Empirical Figures","error");const k=`*** VISUALIZATION ERROR: ${I.message}`;x=x?`${x}
${k}`:k}}console.log("[Builder] Phase 5: Generating remaining sections...");for(const I of f.filter(k=>H.includes(k.key)))try{if(s==null||s(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`),I.key==="references"){console.log(`[Builder] Using ${A.length} incrementally validated BibTeX entries`),console.log(`[Builder] Citation stats: ${S.verified} verified, ${S.partial} partial, ${S.unverified} unverified`);const k=await tl(I,{interviewTranscript:c,previousSections:g,dataSummary:h,examplePapers:R,accumulatedBibTeX:A.join(`

`)});g[I.key]=k}else{const k=await tl(I,{interviewTranscript:c,previousSections:g,dataSummary:h,examplePapers:R,accumulatedBibTeX:A.join(`

`)});g[I.key]=k,await z(k,I.name)}s==null||s(I.name,"completed"),console.log(`[Builder] Completed: ${I.name}`),await sl(500)}catch(k){throw s==null||s(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,k),new Error(`Failed to generate ${I.name}: ${k.message}`)}if(g.references)try{s==null||s("Reference Finalization","starting"),console.log("[Builder] Finalizing references - merging accumulated BibTeX with LLM additions...");const I=A.length>0?`% === INCREMENTALLY VALIDATED REFERENCES (${A.length} entries) ===
% Validated during paper generation against Semantic Scholar
% Stats: ${S.verified} verified, ${S.partial} partial, ${S.unverified} unverified

`+A.join(`

`)+`

% === ADDITIONAL REFERENCES FROM LLM ===
`+g.references:g.references,{validateAndEnrichReferences:k}=await oa(async()=>{const{validateAndEnrichReferences:C}=await import("./referenceValidationService-COq9N86n.js");return{validateAndEnrichReferences:C}},[]),J=await k(I,c,{targetMin:o?15:25,targetMax:o?25:40,skipDiscovery:A.length>=15});g.references=J.bibtex;const q=J.report;console.log(`[Builder] Reference validation complete:
  - Total: ${q.totalReferences}
  - Verified: ${q.verified} (${(q.verificationRate*100).toFixed(0)}%)
  - Discovered: ${q.discovered}
  - Recency (2020-2025): ${(q.recencyScore*100).toFixed(0)}%`);const{storeValidationReport:me}=await oa(async()=>{const{storeValidationReport:C}=await Promise.resolve().then(()=>Er);return{storeValidationReport:C}},void 0);me(q),s==null||s("Reference Validation","completed")}catch(I){console.error("[Builder] Reference validation failed:",I),s==null||s("Reference Validation","error")}if(_.length===0)try{s==null||s("Visualizations","starting"),console.log(`[Builder] Generating visualizations (post-sections fallback, ${o?"conceptual only":"full"})...`);const I=`
Abstract: ${((Y=g.abstract)==null?void 0:Y.substring(0,500))||""}
Research Focus: ${((E=g.introduction)==null?void 0:E.substring(0,500))||""}
Methodology: ${((W=g.methodology)==null?void 0:W.substring(0,500))||""}
`,k=await au(c,I,u,J=>console.log(`[Builder] ${J}`),h,!1);_=k.figures,v=k.usedSyntheticData,k.dataAlert&&(x=x?`${x}
${k.dataAlert}`:k.dataAlert),!h&&k.dataSummary&&(h=k.dataSummary),s==null||s("Visualizations","completed"),console.log(`[Builder] Generated ${_.length} figures (fallback, ${o?"conceptual":"full"})`)}catch(I){console.error("[Builder] Visualization generation failed:",I),s==null||s("Visualizations","error"),v=!0}let P,G;if(!o)try{s==null||s("DataTable","starting"),console.log("[Builder] Generating structured data table with GPT-5.2...");const I=await kx(g,k=>console.log(`[Builder] ${k}`));if(I.success&&I.latexTable){if(G=I.latexTable,P=I.csvContent,P){const{storeDataTableCsv:k}=await oa(async()=>{const{storeDataTableCsv:J}=await Promise.resolve().then(()=>Er);return{storeDataTableCsv:J}},void 0);k(P)}console.log("[Builder] Data table generated successfully"),s==null||s("DataTable","completed")}else console.warn("[Builder] Data table generation failed:",I.error),s==null||s("DataTable","error")}catch(I){console.error("[Builder] Data table generation error:",I),s==null||s("DataTable","error")}const V=Ax(g,o,_,v,G),oe=V.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${oe} words, ${_.length} figures`),{paperContent:V,dataAlert:x,usedSyntheticData:v,dataSummary:h,dataTableCsv:P}};function yx(c){let o=c;o=o.replace(/^```(?:bibtex|bib|latex|tex)?\s*\n?/i,""),o=o.replace(/\n?```\s*$/i,"");const s=o.search(/@\w+\s*\{/);s>0&&(o=o.substring(s));let u=0,d=o.length;for(let g=0;g<o.length;g++)o[g]==="{"&&u++,o[g]==="}"&&(u--,u===0&&(d=g+1));d<o.length&&(o=o.substring(0,d)),o=o.trim();const f=`% Bibliography generated by ICIScopilot
% ${new Date().toISOString()}

`;return console.log(`[BibTeX] Cleaned content: ${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries`),f+o}function vx(c){let o=c;return o=o.replace(/\*\*([^*]+)\*\*/g,"\\textbf{$1}"),o=o.replace(new RegExp("(?<!\\*)\\*([^*\\n]+)\\*(?!\\*)","g"),"\\textit{$1}"),o=o.replace(/\$\\ast\$([^$]+)\$\\ast\$/g,"\\textit{$1}"),o=o.replace(/`([^`]+)`/g,"\\texttt{$1}"),o=o.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),o=o.replace(/([^\\])%/g,"$1\\%"),o=o.replace(/([^\\])& /g,"$1\\& "),o=o.replace(/([^\\])#/g,"$1\\#"),o=o.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),o=o.replace(/__/g,"\\_\\_"),o=o.replace(/"/g,"''"),o=o.replace(/"/g,"``"),o=o.replace(/'/g,"'"),o=o.replace(/'/g,"`"),o=o.replace(/—/g,"---"),o=o.replace(/–/g,"--"),o=o.replace(/…/g,"\\ldots{}"),o=o.replace(/\\includegraphics(\[[^\]]*\])?\{\.\.\/Results\//g,"\\includegraphics$1{"),o=o.replace(/\\includegraphics(\[[^\]]*\])?\{Results\//g,"\\includegraphics$1{"),o}function bx(c){let o=c.replace(/\n*References:\s*\n([\s\S]*?)(?=\\section|$)/gi,"");return o=o.replace(/\\section\*?\{References\}[\s\S]*?(?=\\section|$)/gi,""),o=o.replace(/\n\nReferences\n\n((?:[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+)/gi,""),o=o.replace(/\n*BIBLIOGRAPHY\s*\n([\s\S]*?)(?=\\section|$)/gi,""),o=o.replace(/\\begin\{thebibliography\}[\s\S]*?\\end\{thebibliography\}/gi,""),o=o.replace(/\\bibitem\{[^}]*\}[^\n]*\n?/gi,""),o=o.replace(/\n\nBibliography\n\n([\s\S]*?)(?=\\section|$)/gi,""),o=o.replace(/\\subsection\*?\{(?:Bibliography|References)\}[\s\S]*?(?=\\section|\\subsection(?!\*?\{(?:Bibliography|References)\})|$)/gi,""),o=o.replace(/\\begin\{itemize\}\s*(?:\\item\s+[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+\\end\{itemize\}/gi,""),o=o.trim(),o}function xx(c){let o=c.replace(/^\s*\\section\*?\{[^}]*\}\s*/i,"");return o=o.replace(/\\section\*?\{[^}]*\}\s*\n\s*\\section\*?\{/gi,"\\section{"),o}const Sx=`\\documentclass[12pt]{article}
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

`,Ex=`
\\end{document}
`;function wx(c,o){return c==="research_model.png"?`Figure~\\ref{${o}} illustrates the research model, depicting the key constructs and their hypothesized relationships. The model shows how the independent variables influence the dependent variables through the proposed mechanisms. Each arrow represents a hypothesized relationship that will be tested in the analysis.`:`Figure~\\ref{${o}} presents the theoretical framework that underpins this study. This framework synthesizes the core theoretical perspectives and shows how they inform the research design and analysis. The framework provides a structured lens through which the research questions are examined.`}function Ax(c,o,s=[],u=!1,d){const f=o?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],g={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let h=Sx;h+=`% ============================================================================
% IMPORTANT NOTICE - AI-GENERATED PAPER
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Paper}\\\\[0.5em]
This paper was generated by an AI-assisted scientific discovery system. All content requires human review and verification before use or submission. The authors and claims have not been independently verified.${u&&!o?"\\\\[0.5em]\\textbf{Data Notice:} The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings.":""}
}}
\\end{center}
\\vspace{1em}

`;for(const x of f)if(c[x]){let p=vx(c[x]);if(x!=="references"&&(p=bx(p)),x!=="title"&&x!=="abstract"&&x!=="references"&&(p=xx(p)),x==="title")h+=`\\title{${p}}
\\maketitle

`;else if(x==="abstract")h+=`\\begin{abstract}
${p}
\\end{abstract}

`;else if(x==="references"){const T=yx(c[x]);bm("references.bib",T),h+=`\\bibliographystyle{apalike}
\\bibliography{references}
`}else if(x==="theory"){const T=s.filter(R=>R.filename==="research_model.png"||R.filename==="theoretical_framework.png");h+=`\\section{${g[x]}}

${p}

`,T.length>0&&(h+=`\\subsection{Framework Visualization}

`,h+=`This subsection presents visual representations of the theoretical foundations guiding this research.

`,T.forEach(R=>{const _=R.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),v=R.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%"),A=R.filename==="research_model.png"?"fig:research_model":"fig:theoretical_framework",m=R.paragraphDescription||wx(R.filename,A);h+=`${m}

`,h+=`\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.9\\textwidth]{${_}}
\\caption{${v}}
\\label{${A}}
\\end{figure}

`}))}else if(x==="results"){const T=s.filter(R=>R.filename!=="research_infographic.png"&&R.filename!=="research_model.png"&&R.filename!=="theoretical_framework.png");h+=`\\section{${g[x]}}

`,h+=`${p}

`,d&&(h+=`\\subsection{Summary Data Table}

`,h+=`The following table presents key structured data extracted from this research. The complete dataset is available in the accompanying CSV file (datatable.csv). See Table~\\ref{tab:datatable} for details.

`,h+=d,h+=`

`),T.length>0&&(h+=`\\subsection{Data Visualizations}

`,u&&(h+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),h+=ru(T))}else if(x==="discussion"){const T=s.find(R=>R.filename==="research_infographic.png");h+=`\\section{${g[x]}}

${p}

`,T&&(h+=`\\subsection*{Visual Summary}

`,h+=`The following infographic provides a visual summary of the key findings, frameworks, and practical implications presented in this research.

`,h+=ru([T]))}else h+=`\\section{${g[x]}}

${p}

`}return h+=Ex,h}async function Tx(c,o){console.log(`[DataCleaning] Starting data cleaning for: ${c}`),o==null||o("Starting data cleaning...");const s=`
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
`;try{const u=await ja(c);if(!u)return{success:!1,summary:"Could not locate data file",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:"Data file not found in cloud storage"};o==null||o("Running data cleaning operations...");const d=await hl(s,[u.url]);if(d.success&&d.stdout)try{const f=JSON.parse(d.stdout.trim());if(f.error)return{success:!1,summary:`Cleaning error: ${f.error}`,rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:f.error};const g=f.operations||[],h=g.length>0?g.join("\\n- "):"No cleaning operations needed - data was already clean";return o==null||o(`Data cleaning complete: ${g.length} operations performed`),{success:!0,summary:`- ${h}`,rowsRemoved:f.rows_removed||0,columnsProcessed:f.columns_processed||0,imputationsPerformed:f.imputations_performed||0}}catch(f){return console.warn("[DataCleaning] Could not parse cleaning results:",f),{success:!0,summary:"Data cleaning completed (details unavailable)",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0}}return{success:!1,summary:"Cleaning script execution failed",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:d.stderr||"Unknown error"}}catch(u){return console.error("[DataCleaning] Error:",u),{success:!1,summary:"Data cleaning failed",rowsRemoved:0,columnsProcessed:0,imputationsPerformed:0,error:u.message}}}async function Rx(c,o){var u,d,f,g;console.log(`[PreliminaryAnalysis] Starting preliminary analysis for: ${c}`),o==null||o("Analyzing raw data structure...");const s=`
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
`;try{const h=await ja(c);if(!h)return{success:!1,error:"Data file not found in cloud storage"};o==null||o("Profiling raw data...");const x=await hl(s,[h.url]);if(x.success&&x.stdout)try{const p=JSON.parse(x.stdout.trim());if(p.error)return{success:!1,error:p.error};let T=`Dataset: ${p.rows} rows × ${p.columns} columns

`;T+=`COLUMN TYPES:
`;for(const[R,_]of Object.entries(p.column_types))T+=`  - ${R}: ${_}
`;if(Object.keys(p.numeric_stats).length>0){T+=`
NUMERIC COLUMNS:
`;for(const[R,_]of Object.entries(p.numeric_stats)){const v=_;T+=`  - ${R}: mean=${(u=v.mean)==null?void 0:u.toFixed(2)}, std=${(d=v.std)==null?void 0:d.toFixed(2)}, range=[${(f=v.min)==null?void 0:f.toFixed(2)}, ${(g=v.max)==null?void 0:g.toFixed(2)}]
`}}if(Object.keys(p.categorical_stats).length>0){T+=`
CATEGORICAL COLUMNS:
`;for(const[R,_]of Object.entries(p.categorical_stats)){const v=_;T+=`  - ${R}: ${v.unique_values} unique values, most common: "${v.top_value}"
`}}if(p.data_quality_issues.length>0){T+=`
DATA QUALITY ISSUES IDENTIFIED:
`;for(const R of p.data_quality_issues)T+=`  ⚠ ${R}
`}else T+=`
DATA QUALITY: No major issues identified
`;return o==null||o("Preliminary analysis complete"),{success:!0,analysis:T}}catch(p){return console.warn("[PreliminaryAnalysis] Could not parse results:",p),{success:!1,error:"Could not parse analysis results"}}return{success:!1,error:x.stderr||"Analysis script failed"}}catch(h){return console.error("[PreliminaryAnalysis] Error:",h),{success:!1,error:h.message}}}async function _x(c,o,s){var f,g,h,x,p;const u=o==="research_model"?"fig:research_model":"fig:theoretical_framework",d=o==="research_model"?`You are analyzing a research model diagram for an academic paper.

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
DESCRIPTION: [Your paragraph description here]`;try{const T={contents:[{parts:[{inline_data:{mime_type:"image/png",data:c}},{text:d}]}],systemInstruction:{parts:[{text:"You are an expert academic writer specializing in Information Systems research. Analyze figures and write formal, precise captions and descriptions."}]},generationConfig:{temperature:.7,maxOutputTokens:800}},R=await fetch(`${Ar}/api/gemini`,{method:"POST",headers:ka(),body:JSON.stringify(T)});if(!R.ok)return console.warn(`[analyzeFigureWithGemini] API error: ${R.status}`),Gc(o,u);const _=await R.json(),v=(p=(x=(h=(g=(f=_==null?void 0:_.candidates)==null?void 0:f[0])==null?void 0:g.content)==null?void 0:h.parts)==null?void 0:x[0])==null?void 0:p.text;if(v&&v.trim().length>50){const A=v.match(/CAPTION:\s*(.+?)(?=DESCRIPTION:|$)/s),m=v.match(/DESCRIPTION:\s*(.+)/s),S=A?A[1].trim():Nm(o),w=m?m[1].trim():Im(o,u);return console.log(`[analyzeFigureWithGemini] Generated for ${o}:`),console.log(`  Caption: ${S.substring(0,80)}...`),console.log(`  Description: ${w.substring(0,80)}...`),{caption:S,paragraphDescription:w}}return Gc(o,u)}catch(T){return console.error("[analyzeFigureWithGemini] Error:",T),Gc(o,u)}}function Gc(c,o){return{caption:Nm(c),paragraphDescription:Im(c,o)}}function Nm(c){return c==="research_model"?"Research model showing the theoretical framework, key constructs, and hypothesized relationships":"Theoretical framework overview illustrating the key concepts and their interrelationships"}function Im(c,o){return c==="research_model"?`Figure~\\ref{${o}} illustrates the research model, depicting the key constructs and their hypothesized relationships. The model shows how the independent variables influence the dependent variables through the proposed mechanisms. Each arrow represents a hypothesized relationship that will be tested in the analysis.`:`Figure~\\ref{${o}} presents the theoretical framework that underpins this study. This framework synthesizes the core theoretical perspectives and shows how they inform the research design and analysis. The framework provides a structured lens through which the research questions are examined.`}async function Cx(c,o,s){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),s==null||s("Analyzing data with AI...");const u=c.split(`
`),d=u.slice(0,101).join(`
`),f=`You are a data analyst. Analyze this CSV data and provide a structured summary.

CSV FILE: ${o}
TOTAL ROWS (estimate): ${u.length-1}

DATA SAMPLE (first 100 rows):
\`\`\`
${d}
\`\`\`

Provide a comprehensive analysis in the following format:

File: ${o}
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
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const g=await ca(f,"Analyze CSV data");if(g)return console.log("[DataAnalysis] Gemini analysis complete"),s==null||s("AI data analysis complete"),{success:!0,dataSummary:g,dataFileFound:!0}}catch(g){console.error("[DataAnalysis] Gemini analysis failed:",g)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function Dm(c,o,s){var f,g,h,x,p,T,R,_,v,A;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${c}" (type: ${typeof c})`),s){o==null||o("Loading data file preview for verification...");const m=await mm(c);if(!m.success)return console.error(`[DataAnalysis] Failed to get file preview: ${m.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${m.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${m.filename}, First line: ${(f=m.firstLine)==null?void 0:f.substring(0,100)}...`),o==null||o(`Data file found: ${c} (${m.totalLines} lines). Awaiting confirmation...`),!await s({filename:m.filename,firstLine:m.firstLine,totalLines:m.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),o==null||o("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),o==null||o("Data file confirmed. Starting analysis...")}o==null||o("Analyzing data file...");const u=ja();if(u!=null&&u.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const m=await Cx(u.content,c,o);if(m.success)return m}if(u!=null&&u.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),o==null||o("Using cloud data analysis...");try{const m=await pl(u.content,"full");if(m.success&&m.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let S=`File: ${c}
`;if(S+=`Dataset shape: ${(g=m.summary)==null?void 0:g.shape.rows} rows x ${(h=m.summary)==null?void 0:h.shape.columns} columns

`,S+=`COLUMN NAMES AND TYPES:
`,(x=m.summary)==null||x.columns.forEach(w=>{var z;const O=(z=m.summary)==null?void 0:z.numeric_columns.includes(w);S+=`  - ${w}: ${O?"numeric":"categorical"}
`}),S+=`
`,(p=m.summary)!=null&&p.numeric_columns.length){S+=`NUMERIC COLUMNS STATISTICS:
`;for(const w of m.summary.numeric_columns.slice(0,10)){const O=(T=m.summary.descriptive_stats)==null?void 0:T[w];O&&(S+=`  ${w}:
`,S+=`    min=${O.min}, max=${O.max}, mean=${O.mean}, std=${O.std}
`)}S+=`
`}if((R=m.summary)!=null&&R.categorical_columns.length){S+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const w of m.summary.categorical_columns.slice(0,5)){const O=(_=m.summary.categorical_summary)==null?void 0:_[w];if(O){const z=Object.keys(O).length;S+=`  ${w}: ${z} unique values
`,z<=10&&(S+=`    Values: ${JSON.stringify(O)}
`)}}}return o==null||o("Cloud data analysis complete"),{success:!0,dataSummary:S,dataFileFound:!0}}}catch(m){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",m)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),o==null||o("Using local Python for analysis...");const d=`import os
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
`;try{const m=await hl("analyze_data.py",d,c);if(console.log("[DataAnalysis] Python execution result:",{success:m.success,dataFileFound:m.dataFileFound,stdoutLength:((v=m.stdout)==null?void 0:v.length)||0,stderrLength:((A=m.stderr)==null?void 0:A.length)||0}),m.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",m.stdout.substring(0,1e3)),m.stderr&&console.log("[DataAnalysis] Python stderr:",m.stderr),!m.success)return console.error("[DataAnalysis] Python execution failed:",m.error),{success:!1,dataFileFound:!1,error:m.error};let S;const w=m.dataFileFound??!1;if(m.stdout){const O=m.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(O)S=O[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",S.substring(0,500));else{if(m.stdout.includes("DATA FILE NOT FOUND")||m.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',m.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',m.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return o==null||o("Data analysis complete"),{success:!0,dataSummary:S,dataFileFound:w}}catch(m){return console.error("[DataAnalysis] Error:",m),{success:!1,dataFileFound:!1,error:m.message}}}async function au(c,o,s,u,d,f=!1){const g=ja();let h=[],x=!1,p=!1,T,R=d;if(g!=null&&g.content){console.log("[Visualizations] Using QuickChart.io for data figure generation..."),u==null||u("Analyzing data for visualization...");try{const A=await pl(g.content,"full");if(A.success&&A.chart_data&&A.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${A.chart_data.length} chart configs`),u==null||u(`Generating ${A.chart_data.length} data figures via QuickChart.io...`);const{generateQuickChartFigures:m}=await oa(async()=>{const{generateQuickChartFigures:w}=await Promise.resolve().then(()=>Er);return{generateQuickChartFigures:w}},void 0),S=await m(A.chart_data);if(S.success&&S.figures&&S.figures.length>0){h=S.figures.map(O=>({filename:O.filename,description:O.description,latexRef:O.filename,base64:O.base64}));const{storeChartData:w}=await oa(async()=>{const{storeChartData:O}=await Promise.resolve().then(()=>Er);return{storeChartData:O}},void 0);w(A.chart_data,!1),p=!0,R=A.text_summary||d,u==null||u(`Generated ${h.length} data figures from uploaded data`),console.log(`[Visualizations] QuickChart.io generated ${h.length} data figures`)}else console.warn("[Visualizations] QuickChart.io generation failed:",S.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(A){console.warn("[Visualizations] QuickChart.io failed:",A)}}if(h.length===0&&f){console.log("[Visualizations] No data figures yet, generating AI-based data figures (revision round)..."),u==null||u("Generating AI-based data visualizations...");try{const A=await Nx(c,o,d);if(A&&A.length>0){console.log(`[Visualizations] AI generated ${A.length} chart configurations`),u==null||u(`Rendering ${A.length} AI data figures via QuickChart.io...`);const{generateQuickChartFigures:m,storeChartData:S}=await oa(async()=>{const{generateQuickChartFigures:O,storeChartData:z}=await Promise.resolve().then(()=>Er);return{generateQuickChartFigures:O,storeChartData:z}},void 0),w=await m(A);w.success&&w.figures&&w.figures.length>0&&(h=w.figures.map(O=>({filename:O.filename,description:O.description,latexRef:O.filename,base64:O.base64})),S(A,!0),x=!0,T="*** NOTE: Data visualizations generated using AI-synthesized illustrative data. No data file was provided.",u==null||u(`Generated ${h.length} AI-based data figures`),console.log(`[Visualizations] QuickChart.io rendered ${h.length} AI data figures`))}}catch(A){console.warn("[Visualizations] AI QuickChart generation failed:",A)}}else h.length===0&&!f&&(console.log("[Visualizations] No data file - skipping synthetic data figures (first round, theoretical paper)"),u==null||u("Theoretical paper: generating conceptual figures only..."));console.log("[Visualizations] Generating conceptual figures (research model, framework)..."),u==null||u("Generating conceptual research figures...");let _=[];try{const A=await Om(c,o,m=>{console.log(`[Visualizations] ${m}`),u==null||u(m)});A.success&&A.figures.length>0?(_=A.figures,console.log(`[Visualizations] Generated ${_.length} conceptual figures`),u==null||u(`Generated ${_.length} conceptual figures`)):console.warn("[Visualizations] Conceptual figure generation failed:",A.error)}catch(A){console.warn("[Visualizations] Conceptual figure generation error:",A)}const v=[..._,...h];if(v.length>0){const{storePngFiguresForCompilation:A}=await oa(async()=>{const{storePngFiguresForCompilation:m}=await Promise.resolve().then(()=>Er);return{storePngFiguresForCompilation:m}},void 0);return A(v.map(m=>({filename:m.filename,base64:m.base64||""}))),console.log(`[Visualizations] Total figures: ${v.length} (${_.length} conceptual + ${h.length} data)`),u==null||u(`Generated ${v.length} total figures`),{figures:v,usedSyntheticData:x,dataFileFound:p,dataSummary:R,dataAlert:T}}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function Nx(c,o,s){const u=`You are generating DATA-DRIVEN chart configurations for academic paper visualizations.

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
${o.substring(0,2e3)}

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

Return ONLY the JSON array with 1-2 data-driven figures.`;try{let f=(await ca(u,"Generate chart data")).trim();f.startsWith("```json")?f=f.slice(7):f.startsWith("```")&&(f=f.slice(3)),f.endsWith("```")&&(f=f.slice(0,-3)),f=f.trim();const g=JSON.parse(f);if(Array.isArray(g)&&g.length>0)return console.log(`[AI ChartData] Generated ${g.length} chart configurations`),g}catch(d){console.error("[AI ChartData] Failed to generate chart data:",d)}return[]}function ru(c){if(c.length===0)return"";let o=`
% Generated Figures (PNG via QuickChart.io)
`;return c.forEach((s,u)=>{const d=s.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),f=s.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");o+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.9\\textwidth]{${d}}
\\caption{${f}}
\\label{fig:fig${u+1}}
\\end{figure}
`}),o}async function Om(c,o,s){console.log("[ConceptualFigures] Starting conceptual figure generation..."),s==null||s("Generating conceptual research figures...");const u=[];try{const d=Ix(c,o);console.log("[ConceptualFigures] Generating research model diagram..."),s==null||s("Creating research model visualization...");const f=await Fh(d,s);f.success&&f.base64?(u.push({filename:"research_model.png",description:"Research model showing the theoretical framework, constructs, and hypothesized relationships",latexRef:"research_model.png",base64:f.base64}),console.log("[ConceptualFigures] Research model figure generated successfully")):console.warn("[ConceptualFigures] Research model generation failed:",f.error);const g=Dx(c,o);console.log("[ConceptualFigures] Generating framework overview..."),s==null||s("Creating framework overview visualization...");const h=await Fh(g,s);return h.success&&h.base64?(u.push({filename:"theoretical_framework.png",description:"Theoretical framework overview illustrating the key concepts and their relationships",latexRef:"theoretical_framework.png",base64:h.base64}),console.log("[ConceptualFigures] Framework overview figure generated successfully")):console.warn("[ConceptualFigures] Framework overview generation failed:",h.error),u.length>0?(console.log(`[ConceptualFigures] Successfully generated ${u.length} conceptual figures`),s==null||s(`Generated ${u.length} conceptual figures`),{success:!0,figures:u}):{success:!1,figures:[],error:"Failed to generate any conceptual figures"}}catch(d){const f=d.message;return console.error("[ConceptualFigures] Generation failed:",f),s==null||s(`Conceptual figure generation failed: ${f}`),{success:!1,figures:[],error:f}}}function Ix(c,o){return`**Role:** You are an expert academic visual designer specializing in research model diagrams for top-tier IS journals (MISQ, ISR, JMIS).

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
${o.substring(0,4e3)}

**INTERVIEW EXCERPT:**
${c.substring(0,1e3)}

Generate a professional research model diagram that accurately represents the constructs and relationships described in this specific research paper.`}function Dx(c,o){return`**Role:** You are an expert academic visual designer for Information Systems research publications.

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
${o.substring(0,4e3)}

**INTERVIEW EXCERPT:**
${c.substring(0,1e3)}

Generate a professional theoretical framework diagram that accurately represents the theories and concepts described in this specific research paper. This figure should be distinct from the research model diagram.`}async function Fh(c,o){const s=["gemini-3-pro-image-preview","gemini-2.5-flash-image"];for(const u of s){console.log(`[Infographic] Trying image generation with model: ${u}`),o==null||o(`Generating image with ${u}...`);try{const d=await Ox(c,u);if(d.success&&d.base64)return console.log(`[Infographic] Successfully generated image with ${u}`),d;console.warn(`[Infographic] ${u} failed: ${d.error}`)}catch(d){console.warn(`[Infographic] ${u} threw error:`,d.message)}}return{success:!1,error:"All image generation models failed"}}async function Ox(c,o){{const s=await Li();if(s.type==="vercel"||s.type==="local")return jx(c,o,s.baseUrl);throw new Error("No API key and no proxy available for image generation")}}async function jx(c,o,s){try{const u=await fetch(`${s}/api/gemini-image`,{method:"POST",headers:ka(),body:JSON.stringify({prompt:c,model:o,aspectRatio:"16:9"})});if(!u.ok){const f=await u.text();return{success:!1,error:`Proxy error ${u.status}: ${f.substring(0,200)}`}}const d=await u.json();return d.success&&d.image?{success:!0,base64:d.image,mimeType:d.mimeType||"image/png"}:{success:!1,error:d.error||"Unknown proxy error"}}catch(u){return{success:!1,error:u.message}}}async function kx(c,o){console.log("[DataTable] Starting data table generation with GPT-5.2..."),o==null||o("Generating structured data table...");try{const s=await _i("TABLE");if(!s||s.includes("[Prompt not found"))throw new Error("Failed to load TABLE prompt from prompts directory");const u=Lx(c),d=`${s}

---

**RESEARCH PAPER:**

${u}`;console.log(`[DataTable] Prompt constructed (${d.length} chars)`),o==null||o("Extracting structured data with GPT-5.2...");const f=await Mx(d);if(!f||f.trim().length===0)return{success:!1,error:"GPT-5.2 returned empty response"};console.log(`[DataTable] CSV generated (${f.length} chars)`);const{latexTable:g,tableCaption:h}=Ux(f,c);return console.log("[DataTable] Successfully generated data table"),o==null||o("Data table generated successfully"),{success:!0,csvContent:f,latexTable:g,tableCaption:h}}catch(s){const u=s.message;return console.error("[DataTable] Generation failed:",u),o==null||o(`Data table generation failed: ${u}`),{success:!1,error:u}}}function Lx(c){const o=[];return c.title&&o.push(`# Title
${c.title.trim()}`),c.abstract&&o.push(`# Abstract
${c.abstract}`),c.introduction&&o.push(`# Introduction
${c.introduction}`),c.literature_review&&o.push(`# Literature Review
${c.literature_review}`),c.theory&&o.push(`# Theoretical Framework
${c.theory}`),c.methodology&&o.push(`# Methodology
${c.methodology}`),c.results&&o.push(`# Results
${c.results}`),c.discussion&&o.push(`# Discussion
${c.discussion}`),c.conclusion&&o.push(`# Conclusion
${c.conclusion}`),o.join(`

`)}async function Mx(c){const o=await Li();if(o.type==="vercel"||o.type==="local")return console.log(`[DataTable] Using ${o.type} proxy for GPT-5.2...`),zx(c,o.baseUrl);throw new Error("[DataTable] No API endpoint available for GPT-5.2")}async function zx(c,o){var g,h,x;const s=await fetch(`${o}/api/openai`,{method:"POST",headers:ka(),body:JSON.stringify({model:"gpt-5.2",messages:[{role:"system",content:"You are a structured-data extraction engine. Output ONLY valid CSV format with no markdown, no explanations, no backticks. Follow the exact schema rules provided."},{role:"user",content:c}],temperature:.3,max_tokens:8e3,rawResponse:!0})});if(!s.ok){const p=await s.text();throw new Error(`Proxy error: ${s.status} - ${p.substring(0,200)}`)}const u=await s.json();let d=((x=(h=(g=u.choices)==null?void 0:g[0])==null?void 0:h.message)==null?void 0:x.content)||u.content||u;typeof d!="string"&&(d=JSON.stringify(d));let f=d.trim();return f.startsWith("```")&&(f=f.replace(/^```(?:csv)?\s*\n?/,""),f=f.replace(/\n?```\s*$/,"")),f.trim()}function Ux(c,o){const s=c.split(`
`).filter(p=>p.trim().length>0);if(s.length<2)return{latexTable:"% Error: CSV has insufficient data for table generation",tableCaption:"Data extraction table"};const u=Bh(s[0]),d=u.length,f=Fx(u,o);let g=`\\begin{table}[htbp]
\\centering
\\caption{${Yc(f)}}
\\label{tab:datatable}
\\small
\\begin{tabular}{${"l".repeat(d)}}
\\toprule
`;const h=u.map(p=>`\\textbf{${Yc(p)}}`);g+=h.join(" & ")+` \\\\
\\midrule
`;const x=s.slice(1,16);for(const p of x){const T=Bh(p);for(;T.length<d;)T.push("");const R=T.slice(0,d).map(_=>Yc(_));g+=R.join(" & ")+` \\\\
`}return s.length>16&&(g+=`\\midrule
\\multicolumn{${d}}{l}{\\textit{... ${s.length-16} additional rows in full CSV}} \\\\
`),g+=`\\bottomrule
\\end{tabular}
\\end{table}`,{latexTable:g,tableCaption:f}}function Bh(c){const o=[];let s="",u=!1;for(let d=0;d<c.length;d++){const f=c[d];f==='"'?u&&c[d+1]==='"'?(s+='"',d++):u=!u:f===","&&!u?(o.push(s.trim()),s=""):s+=f}return o.push(s.trim()),o}function Fx(c,o){var d;const s=c.join(" ").toLowerCase();return s.includes("construct")||s.includes("measurement")||s.includes("hypothesis")?"Summary of Constructs, Measurement Items, and Hypothesis Results":s.includes("parameter")||s.includes("simulation")?"Model Parameters and Configuration":s.includes("challenge")||s.includes("strategic")?"Challenges and Strategic Actions":s.includes("study")||s.includes("comparison")?"Comparison of Related Work and Approaches":`Key Structured Data from ${((d=o.title)==null?void 0:d.substring(0,50))||"Research"}`}function Yc(c){return c?c.replace(/\\/g,"\\textbackslash{}").replace(/&/g,"\\&").replace(/%/g,"\\%").replace(/\$/g,"\\$").replace(/#/g,"\\#").replace(/_/g,"\\_").replace(/\{/g,"\\{").replace(/\}/g,"\\}").replace(/~/g,"\\textasciitilde{}").replace(/\^/g,"\\textasciicircum{}").replace(/</g,"\\textless{}").replace(/>/g,"\\textgreater{}"):""}async function Ph(c){try{return(await fetch(`${c}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function Li(){return await Ph(Ar)?{type:"vercel",baseUrl:Ar}:await Ph(Ci)?{type:"local",baseUrl:Ci}:{type:"direct",baseUrl:""}}async function Bx(c,o){var g,h,x;const s=o===Ci?`${o}/api/openai/chat`:`${o}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${s}`),console.log(`[OpenAI] Using model: ${nu()}`);const u=await fetch(s,{method:"POST",headers:ka(),body:JSON.stringify({model:nu(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:c}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!u.ok){const p=await u.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",u.status,p),new Error(`OpenAI API error: ${u.status} - ${p.error||p.details||"Unknown error"}`)}const f=(x=(h=(g=(await u.json()).choices)==null?void 0:g[0])==null?void 0:h.message)==null?void 0:x.content;if(!f)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let p=f.trim();return p.startsWith("```")&&(p=p.replace(/^```(?:json)?\s*\n?/,""),p=p.replace(/\n?```\s*$/,"")),p=p.trim(),JSON.parse(p)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",f.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function yl(c){const o=await Li();if(o.type==="vercel"||o.type==="local")return console.log(`[OpenAI] Using ${o.type} proxy...`),Bx(c,o.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const Px=async(c,o=1,s="icis_paper",u)=>{var v,A,m,S,w,O,z,B;const d=await _i("REVIEWER");let f="";try{console.log("[Reviewer] Loading MISQ review criteria..."),f=await _i("MISQ_CRITERIA"),console.log("[Reviewer] MISQ criteria loaded successfully")}catch(j){console.warn("[Reviewer] Could not load MISQ review criteria:",j)}const g=c.match(/\\title\{([^}]+)\}/),h=g?g[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const x=Vx(c);console.log(`[Reviewer] Found ${x.length} sections: ${x.map(j=>j.name).join(", ")}`);let p;if(x.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const j=`${d}

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
- Honest acknowledgment of limits is valued over forcing unnecessary changes`;p=await yl(j)}else{console.log("[Reviewer] Starting section-by-section review...");const j=[];for(const H of x){console.log(`[Reviewer] Reviewing section: ${H.name}...`);const P=await $x(H,h);j.push(P),console.log(`[Reviewer] ${H.name} score: ${P.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),p=await Hx(j,c,f),console.log("[Reviewer] Section-by-section review complete")}if(p.novelty===void 0||p.significance===void 0||p.methodologicalRigor===void 0||p.clarity===void 0||p.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const T={novelty:p.novelty,significance:p.significance,methodologicalRigor:p.methodologicalRigor,clarity:p.clarity,relevance:p.relevance,reviewScore:p.novelty,reliabilityScore:p.significance,alignmentScore:p.methodologicalRigor,errorsDetected:(((v=p.majorConcerns)==null?void 0:v.length)||0)+(((A=p.minorCorrections)==null?void 0:A.length)||0),feedback:p.overallAssessment,majorConcerns:p.majorConcerns||[],minorCorrections:p.minorCorrections||[],researchQuestionFeedback:p.researchQuestionFeedback,methodFeedback:p.methodFeedback,impactFeedback:p.impactFeedback,writingFeedback:p.writingFeedback,overallAssessment:p.overallAssessment,noveltyComment:p.noveltyComment,significanceComment:p.significanceComment,methodologicalRigorComment:p.methodologicalRigorComment,clarityComment:p.clarityComment,relevanceComment:p.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:p.criticalAlerts??[],canImprove:p.canImprove??!0,improvementPotential:p.improvementPotential??"medium",convergenceReason:p.convergenceReason};if(console.log(`[Reviewer] Convergence assessment: canImprove=${T.canImprove}, potential=${T.improvementPotential}`),T.convergenceReason&&console.log(`[Reviewer] Convergence reason: ${T.convergenceReason}`),u&&u.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const j=await Gx(c,u);T.trustworthiness={reliability:j.reliability,reliabilityRationale:j.rationales.reliability,benevolence:j.benevolence,benevolenceRationale:j.rationales.benevolence,goalAlignment:j.goalAlignment,goalAlignmentRationale:j.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(j){console.warn("[Reviewer] Trustworthiness assessment failed:",j.message),T.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${j.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${j.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${j.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),T.trustworthiness={reliability:((m=p.trustworthiness)==null?void 0:m.reliability)??5,reliabilityRationale:((S=p.trustworthiness)==null?void 0:S.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((w=p.trustworthiness)==null?void 0:w.benevolence)??5,benevolenceRationale:((O=p.trustworthiness)==null?void 0:O.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((z=p.trustworthiness)==null?void 0:z.goalAlignment)??5,goalAlignmentRationale:((B=p.trustworthiness)==null?void 0:B.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const R={version:o,paperId:s,timestamp:new Date().toISOString(),reviewScores:{novelty:T.novelty,significance:T.significance,methodologicalRigor:T.methodologicalRigor,clarity:T.clarity,relevance:T.relevance},reviewComments:{novelty:T.noveltyComment,significance:T.significanceComment,methodologicalRigor:T.methodologicalRigorComment,clarity:T.clarityComment,relevance:T.relevanceComment},averageScore:(T.novelty+T.significance+T.methodologicalRigor+T.clarity+T.relevance)/5,errorCounts:{majorErrors:T.majorConcerns.length,minorErrors:T.minorCorrections.length},errorDetails:{majorErrors:T.majorConcerns,minorErrors:T.minorCorrections},trustworthiness:T.trustworthiness,criticalAlerts:T.criticalAlerts.map((j,H)=>({number:H+1,title:j.title,status:"Open",impact:j.impact,details:j.details,actionRequired:j.actionRequired,consequence:j.consequence})),canImprove:T.canImprove,improvementPotential:T.improvementPotential,convergenceReason:T.convergenceReason},_={version:o,paperId:s,timestamp:new Date().toISOString(),researchQuestion:T.researchQuestionFeedback,method:T.methodFeedback,potentialImpact:T.impactFeedback,writing:T.writingFeedback,majorConcerns:T.majorConcerns,minorCorrections:T.minorCorrections,overallAssessment:T.overallAssessment};T.oversightFilePath=Jh(R),T.feedbackFilePath=cu(_);try{await Jc(`oversight_v${o}.json`,R),await Jc(`feedback_v${o}.json`,_),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(j){console.warn("[Reviewer] Could not save files to disk:",j)}return T};function Vx(c){const o=[],s=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],u=c.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let d="";u&&(d=u[1].trim());for(const{pattern:f,name:g,focus:h}of s){const x=new RegExp(f.source,f.flags);let p,T="";for(;(p=x.exec(c))!==null;)T+=p[2]||p[0];T.trim()&&(g==="Introduction"&&d&&(T=`ABSTRACT:
${d}

INTRODUCTION:
${T}`),o.push({name:g,content:T.trim(),reviewFocus:h}))}if(o.length===0){const f=c.split(/\\section\*?\{/);for(let g=1;g<f.length;g++){const h=f[g].indexOf("}");if(h>0){const x=f[g].substring(0,h),p=f[g].substring(h+1);o.push({name:x,content:p.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return o.map(f=>({...f,content:f.content.substring(0,15e3)}))}async function $x(c,o){const s=`You are reviewing the "${c.name}" section of an academic IS (Information Systems) paper titled: "${o}"

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
}`,u=await yl(s);if(u.score===void 0)throw new Error(`[Reviewer] Section "${c.name}" response missing required score field`);return{sectionName:c.name,score:u.score,strengths:u.strengths||[],weaknesses:u.weaknesses||[],suggestions:u.suggestions||[],majorConcerns:u.majorConcerns||[],minorCorrections:u.minorCorrections||[]}}async function Hx(c,o,s){const u=c.map(p=>`## ${p.sectionName} (Score: ${p.score}/5)
Strengths: ${p.strengths.join("; ")||"None identified"}
Weaknesses: ${p.weaknesses.join("; ")||"None identified"}
Major Concerns: ${p.majorConcerns.join("; ")||"None"}
Minor Corrections: ${p.minorCorrections.join("; ")||"None"}`).join(`

`),d=c.filter(p=>p.score>0).map(p=>p.score),f=d.length>0?d.reduce((p,T)=>p+T,0)/d.length:3,g=c.flatMap(p=>p.majorConcerns),h=c.flatMap(p=>p.minorCorrections);c.flatMap(p=>p.suggestions);const x=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${u}

AVERAGE SECTION SCORE: ${f.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${g.map((p,T)=>`${T+1}. ${p}`).join(`
`)||"None"}

ALL MINOR CORRECTIONS:
${h.map((p,T)=>`${T+1}. ${p}`).join(`
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

HONEST ASSESSMENT IS VALUED: It is better to acknowledge limits than to force unnecessary changes.`;return await yl(x)}const Gx=async(c,o)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const s=o.substring(0,15e3),u=c.substring(0,15e3),d=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

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
}`,f=await yl(d);if(f.reliability===void 0||f.benevolence===void 0||f.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment}),{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment,rationales:{reliability:f.reliabilityRationale,benevolence:f.benevolenceRationale,goalAlignment:f.goalAlignmentRationale}}};function Yx(c){const o=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let s=-1,u="";for(const d of o){const f=c.match(d);if(f&&f.index!==void 0){s=f.index,u=f[0];break}}if(s===-1){const d=Math.floor(c.length*.5),f=c.substring(d).match(/\\section\*?\{[^}]+\}/);f&&f.index!==void 0&&(s=d+f.index,u=f[0])}return s===-1?{part1:c,part2:"",splitPoint:""}:{part1:c.substring(0,s),part2:c.substring(s),splitPoint:u}}const jm=async(c,o,s,u,d,f=!1)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${c.length} characters`),console.log(`[Reviser] Feedback length: ${o.length} characters`),console.log("[Reviser] Loading reviser prompt...");const g=await _i("REVISER");console.log(`[Reviser] Prompt loaded (${g.length} chars)`);const x=c.length>2e4;let p;if(x){console.log("[Reviser] Large paper detected - using two-part revision strategy"),d==null||d("Large paper - revising in two parts...");const{part1:S,part2:w,splitPoint:O}=Yx(c);console.log(`[Reviser] Split at "${O}" - Part 1: ${S.length} chars, Part 2: ${w.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),d==null||d("Revising Part 1: Abstract through Results...");const z=`${g}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${S}

Reviewer Feedback:
${o}

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

Produce the revised PART 1:`;let B=await ca(z,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");B=ll(B),B=B.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${B.length} chars`),await sl(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),d==null||d("Revising Part 2: Discussion, Conclusion, References...");const j=`${g}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

You are revising PART 2 of a two-part paper (back matter: Discussion, Conclusions, References).
The front matter has already been revised separately.

Original Paper PART 2:
${w}

Reviewer Feedback:
${o}

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

Produce the revised PART 2:`;let H=await ca(j,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");H=ll(H),console.log(`[Reviser] Part 2 complete: ${H.length} chars`),p=B+`

`+H,console.log(`[Reviser] Combined revised paper: ${p.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),d==null||d("Revising paper content...");const S=`${g}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information. Honest recognition of limits is valued over forced improvements.

Original Paper:
${c}

Reviewer Feedback:
${o}

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

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${S.length} characters`),console.log("[Reviser] Calling Gemini API..."),p=await ca(S,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),p=ll(p)}console.log(`[Reviser] Text revision complete! Output length: ${p.length} characters`);let T,R=!1;const _=(o+" "+s).toLowerCase();if(_.includes("figure")||_.includes("graph")||_.includes("chart")||_.includes("visual")||_.includes("plot")||_.includes("diagram")||_.includes("simulation")||_.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),d==null||d("Updating visualizations based on feedback...");try{let S;if(u){console.log("[Reviser] Analyzing data file for visualization...");try{S=(await Dm(u,d)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(j){console.warn("[Reviser] Could not analyze data file:",j)}}const w=p.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),O=p.match(/\\section{Methodology}([\s\S]*?)\\section{/),z=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${o.substring(0,500)}
Supervisor: ${s.substring(0,300)}
Abstract: ${w?w[1].substring(0,400):""}
`,B=await au(z,o,u,d,S,f);if(R=B.usedSyntheticData,B.dataAlert&&(T=B.dataAlert,console.warn(`[Reviser] ${T}`)),B.figures.length>0){console.log(`[Reviser] Generated ${B.figures.length} updated figures`);const j=ru(B.figures);let H=j;R&&(H=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${j}`),p.match(/(\\section{Results})/)&&(p=p.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${H}
`))}}catch(S){console.error("[Reviser] Visualization update failed:",S),d==null||d("Visualization update failed - continuing with text revisions"),T=`*** VISUALIZATION ERROR during revision: ${S.message}`,R=!0}}console.log(`[Reviser] Revision complete! Final output length: ${p.length} characters`);const A=Math.abs(p.length-c.length)/c.length,m=A<.02;return m&&console.log(`[Reviser] Minimal changes detected (${(A*100).toFixed(1)}% change) - paper may have reached its potential`),{paperContent:p,dataAlert:T,usedSyntheticData:R,limitedBySource:m,limitationExplanation:m?"The revision resulted in minimal changes, suggesting the paper has reached its improvement potential given the available source materials (interview and data).":void 0}},qx=async(c,o,s,u)=>{console.log("[Reviser-Synthetic] Starting synthetic data generation mode..."),console.log(`[Reviser-Synthetic] Paper length: ${c.length} characters`),console.log("[Reviser-Synthetic] Phase 1: Loading SYNTHETIC_DATA prompt...");const d=await _i("SYNTHETIC_DATA");console.log(`[Reviser-Synthetic] Prompt loaded (${d.length} chars)`),u==null||u("Phase 1: Generating synthetic data and adding Results section...");const f=`${d}

================================================================================
CURRENT CONTEXT
================================================================================

CURRENT PAPER (PARTIAL - needs Results section):
${c}

REVIEWER FEEDBACK (calibrate data to address these concerns):
${o}

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
End with \\end{document}.`;let g;try{g=await ca(f,"You are an expert academic writer executing synthetic data generation for an IS research paper. Follow the ICISsyntheticData prompt guidelines precisely. Output ONLY the revised LaTeX content."),g=ll(g),console.log(`[Reviser-Synthetic] Phase 1 complete: Paper now has ${g.length} characters`)}catch(T){return console.error("[Reviser-Synthetic] Phase 1 failed - synthetic data generation error:",T),{paperContent:c,dataAlert:"Failed to generate synthetic data - see console for details",usedSyntheticData:!1,limitedBySource:!1}}g.includes("\\section{Results}")||g.includes("\\section*{Results}")||console.warn("[Reviser-Synthetic] Results section may not have been added properly"),g.includes("synthetic data")||g.includes("Synthetic data")||console.warn("[Reviser-Synthetic] Transparency statement may not have been added"),u==null||u("Phase 1 complete: Results section added"),console.log("[Reviser-Synthetic] Phase 2: Running normal revision to address feedback..."),u==null||u("Phase 2: Addressing reviewer feedback and supervisor comments...");const p=`${s}

[SYSTEM NOTE: Synthetic data has already been generated and a Results section has been added.
Now focus on addressing all reviewer feedback throughout the paper, improving writing quality,
and ensuring all sections are coherent with the new Results section.]`;try{const T=await jm(g,o,p,void 0,R=>u==null?void 0:u(`Phase 2: ${R}`),!0);return console.log(`[Reviser-Synthetic] Phase 2 complete: Final paper has ${T.paperContent.length} characters`),u==null||u("Synthetic data generation and revision complete"),{paperContent:T.paperContent,dataAlert:"Synthetic data was generated to demonstrate the research model. Reviewer feedback has been addressed throughout the paper.",usedSyntheticData:!0,limitedBySource:T.limitedBySource}}catch(T){return console.error("[Reviser-Synthetic] Phase 2 failed - revision error:",T),console.log("[Reviser-Synthetic] Returning Phase 1 result (Results section added, but feedback not addressed)"),{paperContent:g,dataAlert:"Synthetic data was generated, but revision failed. Reviewer feedback may not be fully addressed.",usedSyntheticData:!0,limitedBySource:!1}}},Vh="http://localhost:3001/Data";function Xx(){const[c,o]=fe.useState(Ah),s=fe.useCallback((v,A)=>{o(m=>({...m,stages:{...m.stages,[v]:A}}))},[]),u=fe.useCallback(v=>{o(A=>({...A,currentBuilderStep:v}))},[]),d=fe.useCallback(v=>{const A=new Date().toLocaleTimeString();o(m=>({...m,logs:[...m.logs,`[${A}] ${v}`]}))},[]),f=fe.useCallback(v=>{o(A=>({...A,currentStage:v,stages:{...A.stages,[v]:Oe.ACTIVE}}))},[]),g=fe.useCallback(v=>{o(A=>({...A,...v}))},[]),h=fe.useCallback(v=>{o(A=>({...A,rounds:[...A.rounds,v],currentRound:v.roundId}))},[]),x=fe.useCallback(v=>{o(A=>{if(A.rounds.length===0)return A;const m=[...A.rounds];return m[m.length-1]={...m[m.length-1],...v},{...A,rounds:m}})},[]),p=fe.useCallback(v=>{o(A=>({...A,stages:{...A.stages,[v]:Oe.PENDING}}))},[]),T=fe.useCallback(v=>{o(A=>({...A,participantId:v}))},[]),R=fe.useCallback(()=>`${c.participantId}_${c.sessionTimestamp}`,[c.participantId,c.sessionTimestamp]),_=fe.useCallback(async()=>{var A;try{const m=await dm();m.success?console.log(`Backed up ${((A=m.backedUpFiles)==null?void 0:A.length)||0} files to ${m.backupDir}`):console.warn("Backup failed:",m.error)}catch(m){console.warn("Backup not available:",m)}Kv(),wm(),hm();const v=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);o({...Ah,sessionTimestamp:v,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:c,setStageStatus:s,setBuilderStep:u,addLog:d,moveToStage:f,updateState:g,addRound:h,updateLastRound:x,resetStageData:p,setParticipantId:T,getFilePrefix:R,resetAllState:_}}function Qx(){const[c,o]=fe.useState({}),[s,u]=fe.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}});fe.useEffect(()=>{d()},[]);const d=async()=>{u(_=>({..._,loading:!0,error:null}));try{const _=`?t=${Date.now()}`,v=await fetch(`${Vh}/manifest.json${_}`,{cache:"no-store"});if(!v.ok)throw new Error("No manifest.json found in Data folder");const A=await v.json(),m={interview:null,template:null,dataFile:null,participantId:null,participantEmail:null};for(const S of A.files||[]){const w=`${Vh}/${S.filename}`;S.type==="interview"?(m.interview={filename:S.filename,path:w},m.participantId=S.participantId||null):S.type==="template"?m.template={filename:S.filename,path:w}:S.type==="dataFile"&&(m.dataFile={filename:S.filename,path:w})}u({loading:!1,error:null,detected:m}),m.interview&&await f("interview",m.interview.path,m.interview.filename,m.participantId),m.template&&await f("template",m.template.path,m.template.filename),m.dataFile&&await f("dataFile",m.dataFile.path,m.dataFile.filename)}catch(_){console.log("Auto-detection not available, manual upload required:",_),u({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}})}},f=async(_,v,A,m)=>{try{const S=`?t=${Date.now()}`,w=await fetch(v+S,{cache:"no-store"});if(!w.ok){console.warn(`Failed to load ${A}`);return}const O=await w.text(),z=new Blob([O],{type:"text/plain"}),B=new File([z],A,{type:"text/plain"});o(_==="interview"?j=>({...j,interview:B,interviewContent:O,participantId:m||j.participantId}):_==="template"?j=>({...j,template:B,templateContent:O}):j=>({...j,dataFile:B,dataFileContent:O})),console.log(`Auto-loaded: ${A}`)}catch(S){console.warn(`Error loading ${A}:`,S)}},g=fe.useCallback(async(_,v)=>{if(!v){o(A=>{const m={...A};return delete m[_],_==="interview"&&delete m.interviewContent,m});return}if(_==="interview"){const A=await v.text();let m=v.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,""),S=null;const w=A.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i)||A.match(/Email[:\s]+([^\s\n]+@[^\s\n]+)/i);w&&(S=w[1].trim(),m=S.replace(/@/g,"_").replace(/\./g,"_")),o(O=>({...O,interview:v,interviewContent:A,participantId:m,participantEmail:S}))}else if(_==="template"){const A=await v.text();o(m=>({...m,template:v,templateContent:A}))}else{const A=await v.text();o(S=>({...S,dataFile:v,dataFileContent:A})),console.log("[handleFileChange] Uploading data file to cloud storage...");const m=await fm(v);m.success?console.log("[handleFileChange] Cloud upload success:",m.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",m.error)}},[]),h=fe.useCallback(()=>c.interviewContent||"",[c.interviewContent]),x=fe.useCallback(()=>c.dataFileContent||"",[c.dataFileContent]),p=fe.useCallback(()=>{var _;return((_=c.dataFile)==null?void 0:_.name)||""},[c.dataFile]),T=fe.useCallback(async()=>{await d()},[]),R=fe.useCallback(()=>c.participantEmail||null,[c.participantEmail]);return{uploadedFiles:c,handleFileChange:g,getInterviewContent:h,getDataFileContent:x,getDataFileName:p,getParticipantEmail:R,detectionStatus:s,refreshDetection:T}}function Wx(c){const{simulationState:o,setStageStatus:s,setBuilderStep:u,addLog:d,moveToStage:f,updateState:g,addRound:h,updateLastRound:x,resetStageData:p,resetAllState:T,uploadedFiles:R,getInterviewContent:_,refreshDetection:v,onDataFileConfirm:A}=c,[m,S]=fe.useState(!1);Fe.STEP1_INTERVIEW_ANALYSIS,Fe.STEP1_5_DATA_ASSESSMENT,Fe.STEP2_RESEARCH_PLANNING,Fe.STEP2_FINAL_METADATA,Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS,Fe.STEP8_PAPER_WRITING,Fe.STEP9_FINAL_SUBMISSION;const w=fe.useCallback(async j=>{const H=j??o.currentRound;d(`Reviewer: Starting review process with Gemini (Round ${H})...`),s(ve.REVIEWER,Oe.ACTIVE);try{let P=o.paperContent;if(!P){const E=o.currentPaperVersion||1;d(`Reviewer: Paper not in state, reading from localStorage (v${E})...`),P=ua(E)||"",P&&(g({paperContent:P}),d("Reviewer: Paper loaded from localStorage"))}if(!P){d("Reviewer: ERROR - No paper content available in state or localStorage"),s(ve.REVIEWER,Oe.ERROR);return}const G=o.participantId||"icis_paper",V=H;d("Reviewer: Analyzing paper with Gemini...");const oe=_();oe&&d("Reviewer: Interview content available for trustworthiness assessment");const ce=await Px(P,V,G,oe);d(`Reviewer: Analysis complete - Average score: ${((ce.novelty+ce.significance+ce.methodologicalRigor+ce.clarity+ce.relevance)/5).toFixed(1)}/5`);const D={version:V,paperId:G,timestamp:new Date().toISOString(),reviewScores:{novelty:ce.novelty,significance:ce.significance,methodologicalRigor:ce.methodologicalRigor,clarity:ce.clarity,relevance:ce.relevance},reviewComments:{novelty:ce.noveltyComment,significance:ce.significanceComment,methodologicalRigor:ce.methodologicalRigorComment,clarity:ce.clarityComment,relevance:ce.relevanceComment},averageScore:(ce.novelty+ce.significance+ce.methodologicalRigor+ce.clarity+ce.relevance)/5,errorCounts:{majorErrors:ce.majorConcerns.length,minorErrors:ce.minorCorrections.length},errorDetails:{majorErrors:ce.majorConcerns,minorErrors:ce.minorCorrections},trustworthiness:ce.trustworthiness,criticalAlerts:ce.criticalAlerts.map((E,W)=>({number:W+1,title:E.title,status:"Open",impact:E.impact,details:E.details,actionRequired:E.actionRequired,consequence:E.consequence}))},Y={version:V,paperId:G,timestamp:new Date().toISOString(),researchQuestion:ce.researchQuestionFeedback,method:ce.methodFeedback,potentialImpact:ce.impactFeedback,writing:ce.writingFeedback,majorConcerns:ce.majorConcerns,minorCorrections:ce.minorCorrections,overallAssessment:ce.overallAssessment};Jh(D),cu(Y),d("Reviewer: Saved oversight and feedback files"),h({roundId:V,reviewScore:D.averageScore,reliabilityScore:ce.trustworthiness.reliability,alignmentScore:ce.trustworthiness.goalAlignment,errorsDetected:ce.majorConcerns.length+ce.minorCorrections.length,reviewScores:D.reviewScores,trustworthinessScores:ce.trustworthiness,errorCounts:D.errorCounts,constructiveFeedback:ce.overallAssessment,feedback:ce.overallAssessment,criticalAlerts:ce.criticalAlerts.map(E=>E.title)}),d("Reviewer: Review complete! Proceed to Supervisor for decision."),s(ve.REVIEWER,Oe.COMPLETED)}catch(P){d(`Reviewer: ERROR - ${P.message}`),s(ve.REVIEWER,Oe.ERROR)}},[s,d,h,g,o.currentRound,o.participantId,o.paperContent]),O=fe.useCallback(async(j,H)=>{var P,G,V,oe;switch(j){case ve.SETUP:await new Promise(E=>setTimeout(E,500));const ce={interview:!!R.interview,template:!0,examples:!0,dataFile:!!R.dataFile,paperPdf:!1};g({files:ce}),d("Setup: Files verified successfully");break;case ve.BUILDER:d("Builder: Starting paper generation with Gemini...");try{const E=_();if(!E){d("Builder: ERROR - No interview content available"),s(ve.BUILDER,Oe.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${H}", uploadedFiles.dataFile?.name="${(P=R.dataFile)==null?void 0:P.name}"`);const W=H||((G=R.dataFile)==null?void 0:G.name),I=!W;d(`Builder: Mode - ${I?"Theoretical paper (conceptual figures only)":"Full paper with data"}`),d(W?`Builder: Data file - ${W}`:"Builder: No data file - generating theoretical paper with conceptual figures");const J=await gx(E,I,(C,L)=>{L==="starting"?d(`Builder: Generating ${C}...`):L==="completed"?d(`Builder: ${C} complete`):L==="error"&&d(`Builder: ${C} - error (continuing)`)},W,A);J.dataSummary&&(d("Builder: Data Analysis Summary:"),d(J.dataSummary.substring(0,500)+(J.dataSummary.length>500?"...":""))),J.dataAlert&&d(J.dataAlert),J.usedSyntheticData&&d("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),g({paperContent:J.paperContent,currentPaperVersion:1,currentRound:1,dataAlert:J.dataAlert,dataSummary:J.dataSummary}),Oh(1,J.paperContent);const q=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",me=q?`${q}_icis_paper_v1.tex`:"icis_paper_v1.tex";await Kc(me,J.paperContent),d("Builder: Paper generation complete - saved to localStorage and filesystem"),s(ve.BUILDER,Oe.COMPLETED),f(ve.REVIEWER),setTimeout(()=>w(),500)}catch(E){d(`Builder: ERROR - ${E.message}`),s(ve.BUILDER,Oe.ERROR)}break;case ve.REVIEWER:await w();break;case ve.SUPERVISOR:d("Supervisor: Awaiting human review and decision..."),s(ve.SUPERVISOR,Oe.ACTIVE);return;case ve.FINALIZE:d("Finalize: Preparing final submission..."),s(ve.FINALIZE,Oe.ACTIVE);return;case ve.REVISER:const D=(H==null?void 0:H.startsWith("[SYNTHETIC_MODE]"))??!1,Y=D&&H?H.replace("[SYNTHETIC_MODE]",""):H;d(D?"Reviser: Starting SYNTHETIC DATA GENERATION mode (Step 0.5)...":"Reviser: Starting revision with Gemini..."),console.log(`[Workflow] REVISER stage starting (synthetic mode: ${D})`),s(ve.REVISER,Oe.ACTIVE);try{let E=o.paperContent;if(console.log(`[Workflow] Paper in state: ${E?E.length+" chars":"none"}`),!E){const se=o.currentPaperVersion||1;d(`Reviser: Paper not in state, reading from localStorage (v${se})...`),E=ua(se)||"",E&&(g({paperContent:E}),d("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${E.length} chars`))}if(!E){d("Reviser: ERROR - No paper content available in state or localStorage"),s(ve.REVISER,Oe.ERROR);return}const W=o.rounds[o.rounds.length-1],I=(W==null?void 0:W.feedback)||"Improve clarity and strengthen methodology.",k=Y||(W==null?void 0:W.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${I.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${Y?"from override":"from state"}): ${k.substring(0,100)}...`),d(D?"Reviser: Extracting research model and generating synthetic data...":"Reviser: Analyzing feedback and generating revisions..."),d(`Reviser: Paper size: ${E.length} chars, calling Gemini...`);const J=(V=R.dataFile)==null?void 0:V.name,q=se=>{d(`Reviser: ${se}`)};console.log(`[Workflow] Calling ${D?"runReviserWithSyntheticData":"runReviser"}...`);const me=D?await qx(E,I,k,q):await jm(E,I,k,J,q);console.log(`[Workflow] runReviser completed, result: ${((oe=me.paperContent)==null?void 0:oe.length)||0} chars`),me.dataAlert&&d(me.dataAlert),me.usedSyntheticData&&d("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const C=o.currentPaperVersion+1;g({paperContent:me.paperContent,currentPaperVersion:C,dataAlert:me.dataAlert||o.dataAlert}),Oh(C,me.paperContent);const L=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",le=L?`${L}_icis_paper_v${C}.tex`:`icis_paper_v${C}.tex`;await Kc(le,me.paperContent),d(`Reviser: Revision complete - Version ${C} saved`);const ne=o.currentRound+1;s(ve.REVISER,Oe.COMPLETED),f(ve.REVIEWER),g({currentRound:ne}),setTimeout(()=>w(ne),500)}catch(E){d(`Reviser: ERROR - ${E.message}`),s(ve.REVISER,Oe.ERROR)}break}},[R.interview,R.dataFile,g,d,u,s,f,w,o.currentPaperVersion,o.currentRound,o.dataAlert,A]),z=fe.useCallback(async(j,H,P)=>{switch(d(`Stage ${j}: ${H}`),console.log(`[handleStageAction] Stage ${j} action=${H} overrideParam="${P}" (type: ${typeof P})`),H){case"start":s(j,Oe.ACTIVE),S(!0);try{await O(j,P),j!==ve.BUILDER&&j!==ve.REVIEWER&&j!==ve.REVISER&&s(j,Oe.COMPLETED),d(`Stage ${j} completed`)}catch(G){s(j,Oe.ERROR),d(`Stage ${j} error: ${G}`)}finally{S(!1)}break;case"abort":s(j,Oe.ERROR),S(!1),d(`Stage ${j} aborted`);break;case"restart":p(j),s(j,Oe.ACTIVE),S(!0),d(`Stage ${j} restarting...`);try{await O(j,P),j!==ve.BUILDER&&j!==ve.REVIEWER&&j!==ve.REVISER&&s(j,Oe.COMPLETED),d(`Stage ${j} restart completed`)}catch(G){s(j,Oe.ERROR),d(`Stage ${j} restart error: ${G}`)}finally{S(!1)}break;case"skip":s(j,Oe.SKIPPED),d(`Stage ${j} skipped`);break}},[d,s,p,O]),B=fe.useCallback(async(j,H)=>{var P;switch(d(`Action: ${j}`),j){case"START_SETUP":(o.rounds.length>0||o.currentPaperVersion>0||o.paperContent!=="")&&T&&T().then(()=>{d("Setup: Backed up and cleared previous case data")}),z(ve.SETUP,"start");break;case"START_BUILDER":d("Setup: Checking for data files...");let V;const oe=ja();if(oe)V=oe.filename,console.log(`[START_BUILDER] Using cloud data file: ${oe.filename}`),d(`Setup: Data file ready (cloud) - ${oe.filename}`);else if(R.dataFile)V=R.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${V}`),d(`Setup: Data file ready (uploaded) - ${V}`);else try{d("Setup: Refreshing file manifest...");const D=await am();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(D,null,2)),D.success&&D.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(D.manifest.files,null,2));const Y=(P=D.manifest.files)==null?void 0:P.find(E=>E.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",Y),Y&&(V=Y.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${Y.filename}"`),d(`Setup: Data file detected - ${Y.filename}`),v&&(d("Setup: Loading data file into memory..."),await v(),d("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}V||d("Setup: No data file - will generate partial paper"),s(ve.SETUP,Oe.COMPLETED),f(ve.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${V}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${V}"`),z(ve.BUILDER,"start",V)},500);break;case"PROCEED_TO_SUPERVISOR":s(ve.REVIEWER,Oe.COMPLETED),f(ve.SUPERVISOR);break;case"SKIP_TO_REVIEWER":s(ve.SETUP,Oe.COMPLETED),s(ve.BUILDER,Oe.COMPLETED),g({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ve.REVIEWER),setTimeout(()=>z(ve.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":s(ve.SETUP,Oe.COMPLETED),s(ve.BUILDER,Oe.COMPLETED),s(ve.REVIEWER,Oe.COMPLETED),g({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ve.SUPERVISOR);break;case"revise":if(H){x({supervisorComment:H});const D=o.currentRound;Fc(D,D,H),Bc("CONTINUE",D),d(`Supervisor: Saved directive to feedback file (round ${D})`)}s(ve.SUPERVISOR,Oe.COMPLETED),f(ve.REVISER),d(`Supervisor: Passing directive to Reviser: "${(H==null?void 0:H.substring(0,50))||"none"}..."`),setTimeout(()=>z(ve.REVISER,"start",H),100);break;case"finalize":if(H){x({supervisorComment:H});const D=o.currentRound;Fc(D,D,H),Bc("FINALIZE",D),d(`Supervisor: Saved finalize decision to feedback file (round ${D})`)}s(ve.SUPERVISOR,Oe.COMPLETED),f(ve.FINALIZE);break;case"generateSyntheticData":if(d("Supervisor: Initiating synthetic data generation..."),H){x({supervisorComment:H});const D=o.currentRound;Fc(D,D,`[SYNTHETIC DATA REQUEST]
${H}`),Bc("GENERATE_SYNTHETIC_DATA",D),d(`Supervisor: Saved synthetic data request to feedback file (round ${D})`)}d("Supervisor: Routing to Reviser for synthetic data generation (Step 0.5)"),s(ve.SUPERVISOR,Oe.COMPLETED),f(ve.REVISER);const ce=`[SYNTHETIC_MODE]${H||""}`;setTimeout(()=>z(ve.REVISER,"start",ce),100);break;case"NEW_CASE":T?T().then(()=>{d("New case started - files backed up and cleared"),v==null||v(),f(ve.SETUP)}):f(ve.SETUP);break;default:d(`Unknown action: ${j}`)}},[d,f,s,x,z,T,o.rounds.length,o.currentPaperVersion,o.paperContent,g,v]);return{isProcessing:m,handleStageAction:z,handleWorkflowAction:B}}const Zx=()=>{const[c,o]=fe.useState("main"),[s,u]=fe.useState("research"),[d,f]=fe.useState("transcript-upload"),[g,h]=fe.useState("icis"),x=fe.useCallback(q=>{u(q),cx(q),console.log(`[App] Paper mode changed to: ${q}`)},[]),{simulationState:p,setStageStatus:T,setBuilderStep:R,addLog:_,moveToStage:v,updateState:A,addRound:m,updateLastRound:S,resetStageData:w,setParticipantId:O,getFilePrefix:z,resetAllState:B}=Xx(),{uploadedFiles:j,handleFileChange:H,getInterviewContent:P,getDataFileContent:G,getDataFileName:V,getParticipantEmail:oe,detectionStatus:ce,refreshDetection:D}=Qx(),Y=fe.useCallback(async q=>{const me=`Data File Verification

File: ${q.filename}
Total lines: ${q.totalLines}

First line (column headers):
${q.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(me)},[]),{isProcessing:E,handleStageAction:W,handleWorkflowAction:I}=Wx({simulationState:p,setStageStatus:T,setBuilderStep:R,addLog:_,moveToStage:v,updateState:A,addRound:m,updateLastRound:S,resetStageData:w,resetAllState:B,uploadedFiles:j,getInterviewContent:P,refreshDetection:D,onDataFileConfirm:Y});fe.useEffect(()=>{j.participantId&&j.participantId!==p.participantId&&(O(j.participantId),_(`Participant ID set: ${j.participantId}`))},[j.participantId,p.participantId,O,_]);const k=q=>{_(`Aborting ${q}...`),W(q,"abort")},J=q=>{_(`Restarting ${q}...`),W(q,"restart"),setTimeout(()=>W(q,"start"),100)};return i.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[i.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:i.jsx(Qv,{currentStage:p.currentStage,currentBuilderStep:p.currentBuilderStep,stagesState:p.stages,isPartialPaper:p.isPartialPaper,currentRound:p.currentRound,isProcessing:E,onStageClick:v,onStageAction:W,onNewCase:()=>I("NEW_CASE"),onNewInterview:()=>{window.open(`/interview.html?mode=${s}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/research-followup-paper.html","_blank","noopener,noreferrer")},onResearchAdmin:s==="research"?()=>o(c==="admin"?"main":"admin"):void 0,paperMode:s,onPaperModeChange:x,sourceType:d,selectedVenueId:g})}),i.jsx("div",{className:"flex-1 h-full",children:c==="admin"?i.jsx($b,{onClose:()=>o("main")}):i.jsx(kb,{state:p,isProcessing:E,onAction:I,uploadedFiles:j,onFileChange:H,detectionStatus:ce,onRefreshDetection:D,onStageAbort:k,onStageRestart:J,filePrefix:z(),dataFileName:V(),dataFileContent:G(),participantEmail:oe()||void 0,onNewInterview:()=>{window.open(`/interview.html?mode=${s}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/research-followup-paper.html","_blank","noopener,noreferrer")},onSourceTypeChange:f,onVenueChange:h})})]})};function Kx(){const c=Date.now(),o=new Uint8Array(16);crypto.getRandomValues(o);const s=Array.from(o).map(u=>u.toString(16).padStart(2,"0")).join("");return`${c}_${s}`}function Jx(){const c=sessionStorage.getItem("icis_session_token");if(!c)return!1;const o=c.split("_");if(o.length!==2)return!1;const s=parseInt(o[0],10);if(isNaN(s))return!1;const u=Date.now()-s,d=1440*60*1e3;return u<d}const eS=({onLogin:c})=>{const[o,s]=fe.useState(""),[u,d]=fe.useState(""),[f,g]=fe.useState(""),[h,x]=fe.useState(!1),p=T=>{T.preventDefault(),g(""),x(!0);const R="asd",_="tennessee2025";setTimeout(()=>{if(o===R&&u===_){const v=Kx();sessionStorage.setItem("icis_session_token",v),sessionStorage.setItem("icis_authenticated","true"),c()}else g("Invalid username or password"),x(!1)},500)};return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:i.jsxs("div",{className:"w-full max-w-md",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:i.jsx("span",{className:"text-2xl font-bold text-white",children:"ASD"})}),i.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Automated Scientific Discovery"}),i.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),i.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:i.jsxs("form",{onSubmit:p,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(Yv,{className:"h-5 w-5 text-slate-400"})}),i.jsx("input",{type:"text",id:"username",value:o,onChange:T=>s(T.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(yv,{className:"h-5 w-5 text-slate-400"})}),i.jsx("input",{type:"password",id:"password",value:u,onChange:T=>d(T.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),f&&i.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[i.jsx(Da,{className:"h-5 w-5 flex-shrink-0"}),i.jsx("span",{className:"text-sm",children:f})]}),i.jsx("button",{type:"submit",disabled:h,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:h?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),i.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"Conference Paper Authoring System"})]})})},tS=()=>{const[c,o]=fe.useState(null);fe.useEffect(()=>{const u=Jx(),d=sessionStorage.getItem("icis_authenticated");o(d==="true"&&u)},[]);const s=()=>{o(!0)};return c===null?i.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:i.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):c?i.jsx(Zx,{}):i.jsx(eS,{onLogin:s})},km=document.getElementById("root");if(!km)throw new Error("Could not find root element to mount to");const nS=i0.createRoot(km);nS.render(i.jsx(Zy.StrictMode,{children:i.jsx(tS,{})}));export{l0 as R};
