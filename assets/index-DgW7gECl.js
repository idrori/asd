(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=l(d);fetch(d.href,f)}})();var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zc(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var dc={exports:{}},oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function h0(){if(Hh)return oi;Hh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(c,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var y in d)y!=="key"&&(f[y]=d[y])}else f=d;return d=f.ref,{$$typeof:u,type:c,key:g,ref:d!==void 0?d:null,props:f}}return oi.Fragment=o,oi.jsx=l,oi.jsxs=l,oi}var $h;function p0(){return $h||($h=1,dc.exports=h0()),dc.exports}var s=p0(),fc={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function m0(){if(Gh)return De;Gh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),R=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=R&&C[R]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,E={};function w(C,L,ie){this.props=C,this.context=L,this.refs=E,this.updater=ie||T}w.prototype.isReactComponent={},w.prototype.setState=function(C,L){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,L,"setState")},w.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function D(){}D.prototype=w.prototype;function I(C,L,ie){this.props=C,this.context=L,this.refs=E,this.updater=ie||T}var U=I.prototype=new D;U.constructor=I,m(U,w.prototype),U.isPureReactComponent=!0;var O=Array.isArray;function X(){}var H={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function F(C,L,ie){var se=ie.ref;return{$$typeof:u,type:C,key:L,ref:se!==void 0?se:null,props:ie}}function ae(C,L){return F(C.type,L,C.props)}function ee(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function k(C){var L={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return L[ie]})}var Q=/\/+/g;function x(C,L){return typeof C=="object"&&C!==null&&C.key!=null?k(""+C.key):L.toString(36)}function G(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(X,X):(C.status="pending",C.then(function(L){C.status==="pending"&&(C.status="fulfilled",C.value=L)},function(L){C.status==="pending"&&(C.status="rejected",C.reason=L)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function B(C,L,ie,se,oe){var Ae=typeof C;(Ae==="undefined"||Ae==="boolean")&&(C=null);var Te=!1;if(C===null)Te=!0;else switch(Ae){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(C.$$typeof){case u:case o:Te=!0;break;case _:return Te=C._init,B(Te(C._payload),L,ie,se,oe)}}if(Te)return oe=oe(C),Te=se===""?"."+x(C,0):se,O(oe)?(ie="",Te!=null&&(ie=Te.replace(Q,"$&/")+"/"),B(oe,L,ie,"",function(Pe){return Pe})):oe!=null&&(ee(oe)&&(oe=ae(oe,ie+(oe.key==null||C&&C.key===oe.key?"":(""+oe.key).replace(Q,"$&/")+"/")+Te)),L.push(oe)),1;Te=0;var Ne=se===""?".":se+":";if(O(C))for(var Se=0;Se<C.length;Se++)se=C[Se],Ae=Ne+x(se,Se),Te+=B(se,L,ie,Ae,oe);else if(Se=S(C),typeof Se=="function")for(C=Se.call(C),Se=0;!(se=C.next()).done;)se=se.value,Ae=Ne+x(se,Se++),Te+=B(se,L,ie,Ae,oe);else if(Ae==="object"){if(typeof C.then=="function")return B(G(C),L,ie,se,oe);throw L=String(C),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Te}function V(C,L,ie){if(C==null)return C;var se=[],oe=0;return B(C,se,"","",function(Ae){return L.call(ie,Ae,oe++)}),se}function ue(C){if(C._status===-1){var L=C._result;L=L(),L.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=L)}if(C._status===1)return C._result.default;throw C._result}var te=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ge={map:V,forEach:function(C,L,ie){V(C,function(){L.apply(this,arguments)},ie)},count:function(C){var L=0;return V(C,function(){L++}),L},toArray:function(C){return V(C,function(L){return L})||[]},only:function(C){if(!ee(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return De.Activity=A,De.Children=ge,De.Component=w,De.Fragment=l,De.Profiler=d,De.PureComponent=I,De.StrictMode=c,De.Suspense=v,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return H.H.useMemoCache(C)}},De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(C,L,ie){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var se=m({},C.props),oe=C.key;if(L!=null)for(Ae in L.key!==void 0&&(oe=""+L.key),L)!$.call(L,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&L.ref===void 0||(se[Ae]=L[Ae]);var Ae=arguments.length-2;if(Ae===1)se.children=ie;else if(1<Ae){for(var Te=Array(Ae),Ne=0;Ne<Ae;Ne++)Te[Ne]=arguments[Ne+2];se.children=Te}return F(C.type,oe,se)},De.createContext=function(C){return C={$$typeof:g,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},De.createElement=function(C,L,ie){var se,oe={},Ae=null;if(L!=null)for(se in L.key!==void 0&&(Ae=""+L.key),L)$.call(L,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(oe[se]=L[se]);var Te=arguments.length-2;if(Te===1)oe.children=ie;else if(1<Te){for(var Ne=Array(Te),Se=0;Se<Te;Se++)Ne[Se]=arguments[Se+2];oe.children=Ne}if(C&&C.defaultProps)for(se in Te=C.defaultProps,Te)oe[se]===void 0&&(oe[se]=Te[se]);return F(C,Ae,oe)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:y,render:C}},De.isValidElement=ee,De.lazy=function(C){return{$$typeof:_,_payload:{_status:-1,_result:C},_init:ue}},De.memo=function(C,L){return{$$typeof:p,type:C,compare:L===void 0?null:L}},De.startTransition=function(C){var L=H.T,ie={};H.T=ie;try{var se=C(),oe=H.S;oe!==null&&oe(ie,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(X,te)}catch(Ae){te(Ae)}finally{L!==null&&ie.types!==null&&(L.types=ie.types),H.T=L}},De.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},De.use=function(C){return H.H.use(C)},De.useActionState=function(C,L,ie){return H.H.useActionState(C,L,ie)},De.useCallback=function(C,L){return H.H.useCallback(C,L)},De.useContext=function(C){return H.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,L){return H.H.useDeferredValue(C,L)},De.useEffect=function(C,L){return H.H.useEffect(C,L)},De.useEffectEvent=function(C){return H.H.useEffectEvent(C)},De.useId=function(){return H.H.useId()},De.useImperativeHandle=function(C,L,ie){return H.H.useImperativeHandle(C,L,ie)},De.useInsertionEffect=function(C,L){return H.H.useInsertionEffect(C,L)},De.useLayoutEffect=function(C,L){return H.H.useLayoutEffect(C,L)},De.useMemo=function(C,L){return H.H.useMemo(C,L)},De.useOptimistic=function(C,L){return H.H.useOptimistic(C,L)},De.useReducer=function(C,L,ie){return H.H.useReducer(C,L,ie)},De.useRef=function(C){return H.H.useRef(C)},De.useState=function(C){return H.H.useState(C)},De.useSyncExternalStore=function(C,L,ie){return H.H.useSyncExternalStore(C,L,ie)},De.useTransition=function(){return H.H.useTransition()},De.version="19.2.1",De}var qh;function Mc(){return qh||(qh=1,fc.exports=m0()),fc.exports}var be=Mc();const g0=zc(be);var hc={exports:{}},ci={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function y0(){return Yh||(Yh=1,(function(u){function o(B,V){var ue=B.length;B.push(V);e:for(;0<ue;){var te=ue-1>>>1,ge=B[te];if(0<d(ge,V))B[te]=V,B[ue]=ge,ue=te;else break e}}function l(B){return B.length===0?null:B[0]}function c(B){if(B.length===0)return null;var V=B[0],ue=B.pop();if(ue!==V){B[0]=ue;e:for(var te=0,ge=B.length,C=ge>>>1;te<C;){var L=2*(te+1)-1,ie=B[L],se=L+1,oe=B[se];if(0>d(ie,ue))se<ge&&0>d(oe,ie)?(B[te]=oe,B[se]=ue,te=se):(B[te]=ie,B[L]=ue,te=L);else if(se<ge&&0>d(oe,ue))B[te]=oe,B[se]=ue,te=se;else break e}}return V}function d(B,V){var ue=B.sortIndex-V.sortIndex;return ue!==0?ue:B.id-V.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;u.unstable_now=function(){return f.now()}}else{var g=Date,y=g.now();u.unstable_now=function(){return g.now()-y}}var v=[],p=[],_=1,A=null,R=3,S=!1,T=!1,m=!1,E=!1,w=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var V=l(p);V!==null;){if(V.callback===null)c(p);else if(V.startTime<=B)c(p),V.sortIndex=V.expirationTime,o(v,V);else break;V=l(p)}}function O(B){if(m=!1,U(B),!T)if(l(v)!==null)T=!0,X||(X=!0,k());else{var V=l(p);V!==null&&G(O,V.startTime-B)}}var X=!1,H=-1,$=5,F=-1;function ae(){return E?!0:!(u.unstable_now()-F<$)}function ee(){if(E=!1,X){var B=u.unstable_now();F=B;var V=!0;try{e:{T=!1,m&&(m=!1,D(H),H=-1),S=!0;var ue=R;try{t:{for(U(B),A=l(v);A!==null&&!(A.expirationTime>B&&ae());){var te=A.callback;if(typeof te=="function"){A.callback=null,R=A.priorityLevel;var ge=te(A.expirationTime<=B);if(B=u.unstable_now(),typeof ge=="function"){A.callback=ge,U(B),V=!0;break t}A===l(v)&&c(v),U(B)}else c(v);A=l(v)}if(A!==null)V=!0;else{var C=l(p);C!==null&&G(O,C.startTime-B),V=!1}}break e}finally{A=null,R=ue,S=!1}V=void 0}}finally{V?k():X=!1}}}var k;if(typeof I=="function")k=function(){I(ee)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,x=Q.port2;Q.port1.onmessage=ee,k=function(){x.postMessage(null)}}else k=function(){w(ee,0)};function G(B,V){H=w(function(){B(u.unstable_now())},V)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(B){B.callback=null},u.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<B?Math.floor(1e3/B):5},u.unstable_getCurrentPriorityLevel=function(){return R},u.unstable_next=function(B){switch(R){case 1:case 2:case 3:var V=3;break;default:V=R}var ue=R;R=V;try{return B()}finally{R=ue}},u.unstable_requestPaint=function(){E=!0},u.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ue=R;R=B;try{return V()}finally{R=ue}},u.unstable_scheduleCallback=function(B,V,ue){var te=u.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?te+ue:te):ue=te,B){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ue+ge,B={id:_++,callback:V,priorityLevel:B,startTime:ue,expirationTime:ge,sortIndex:-1},ue>te?(B.sortIndex=ue,o(p,B),l(v)===null&&B===l(p)&&(m?(D(H),H=-1):m=!0,G(O,ue-te))):(B.sortIndex=ge,o(v,B),T||S||(T=!0,X||(X=!0,k()))),B},u.unstable_shouldYield=ae,u.unstable_wrapCallback=function(B){var V=R;return function(){var ue=R;R=V;try{return B.apply(this,arguments)}finally{R=ue}}}})(mc)),mc}var Xh;function v0(){return Xh||(Xh=1,pc.exports=y0()),pc.exports}var gc={exports:{}},wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function b0(){if(Qh)return wt;Qh=1;var u=Mc();function o(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var c={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(v,p,_){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:A==null?null:""+A,children:v,containerInfo:p,implementation:_}}var g=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,wt.createPortal=function(v,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return f(v,p,null,_)},wt.flushSync=function(v){var p=g.T,_=c.p;try{if(g.T=null,c.p=2,v)return v()}finally{g.T=p,c.p=_,c.d.f()}},wt.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(v,p))},wt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},wt.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var _=p.as,A=y(_,p.crossOrigin),R=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?c.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:A,integrity:R,fetchPriority:S}):_==="script"&&c.d.X(v,{crossOrigin:A,integrity:R,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wt.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=y(p.as,p.crossOrigin);c.d.M(v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(v)},wt.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,A=y(_,p.crossOrigin);c.d.L(v,_,{crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wt.preloadModule=function(v,p){if(typeof v=="string")if(p){var _=y(p.as,p.crossOrigin);c.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(v)},wt.requestFormReset=function(v){c.d.r(v)},wt.unstable_batchedUpdates=function(v,p){return v(p)},wt.useFormState=function(v,p,_){return g.H.useFormState(v,p,_)},wt.useFormStatus=function(){return g.H.useHostTransitionStatus()},wt.version="19.2.1",wt}var Zh;function x0(){if(Zh)return gc.exports;Zh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),gc.exports=b0(),gc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function S0(){if(Wh)return ci;Wh=1;var u=v0(),o=Mc(),l=x0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return v(r),e;if(i===a)return v(r),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=i;else{for(var h=!1,N=r.child;N;){if(N===n){h=!0,n=r,a=i;break}if(N===a){h=!0,a=r,n=i;break}N=N.sibling}if(!h){for(N=i.child;N;){if(N===n){h=!0,n=i,a=r;break}if(N===a){h=!0,a=i,n=r;break}N=N.sibling}if(!h)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,R=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),I=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function x(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case w:return"Profiler";case E:return"StrictMode";case O:return"Suspense";case X:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case I:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:x(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return x(e(t))}catch{}}return null}var G=Array.isArray,B=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},te=[],ge=-1;function C(e){return{current:e}}function L(e){0>ge||(e.current=te[ge],te[ge]=null,ge--)}function ie(e,t){ge++,te[ge]=e.current,e.current=t}var se=C(null),oe=C(null),Ae=C(null),Te=C(null);function Ne(e,t){switch(ie(Ae,t),ie(oe,e),ie(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fh(t),e=hh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(se),ie(se,e)}function Se(){L(se),L(oe),L(Ae)}function Pe(e){e.memoizedState!==null&&ie(Te,e);var t=se.current,n=hh(t,e.type);t!==n&&(ie(oe,e),ie(se,n))}function et(e){oe.current===e&&(L(se),L(oe)),Te.current===e&&(L(Te),ri._currentValue=ue)}var Tt,Nt;function b(e){if(Tt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tt=t&&t[1]||"",Nt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+e+Nt}var de=!1;function re(e,t){if(!e||de)return"";de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(ne){var J=ne}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(ne){J=ne}e.call(fe.prototype)}}else{try{throw Error()}catch(ne){J=ne}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(ne){if(ne&&J&&typeof ne.stack=="string")return[ne.stack,J.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),h=i[0],N=i[1];if(h&&N){var M=h.split(`
`),W=N.split(`
`);for(r=a=0;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;for(;r<W.length&&!W[r].includes("DetermineComponentFrameRoot");)r++;if(a===M.length||r===W.length)for(a=M.length-1,r=W.length-1;1<=a&&0<=r&&M[a]!==W[r];)r--;for(;1<=a&&0<=r;a--,r--)if(M[a]!==W[r]){if(a!==1||r!==1)do if(a--,r--,0>r||M[a]!==W[r]){var le=`
`+M[a].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=a&&0<=r);break}}}finally{de=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?b(n):""}function z(e,t){switch(e.tag){case 26:case 27:case 5:return b(e.type);case 16:return b("Lazy");case 13:return e.child!==t&&t!==null?b("Suspense Fallback"):b("Suspense");case 19:return b("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return b("Activity");default:return""}}function j(e){try{var t="",n=null;do t+=z(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var q=Object.prototype.hasOwnProperty,he=u.unstable_scheduleCallback,pe=u.unstable_cancelCallback,K=u.unstable_shouldYield,ye=u.unstable_requestPaint,xe=u.unstable_now,ve=u.unstable_getCurrentPriorityLevel,_e=u.unstable_ImmediatePriority,qe=u.unstable_UserBlockingPriority,Le=u.unstable_NormalPriority,Ct=u.unstable_LowPriority,kn=u.unstable_IdlePriority,$t=u.log,la=u.unstable_setDisableYieldValue,Ke=null,mt=null;function Gt(e){if(typeof $t=="function"&&la(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Ke,e)}catch{}}var rt=Math.clz32?Math.clz32:Ws,xi=Math.log,Zs=Math.LN2;function Ws(e){return e>>>=0,e===0?32:31-(xi(e)/Zs|0)|0}var Ta=256,oa=262144,un=4194304;function qt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Si(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var N=a&134217727;return N!==0?(a=N&~i,a!==0?r=qt(a):(h&=N,h!==0?r=qt(h):n||(n=N&~e,n!==0&&(r=qt(n))))):(N=a&~i,N!==0?r=qt(N):h!==0?r=qt(h):n||(n=a&~e,n!==0&&(r=qt(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function yr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function em(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qc(){var e=un;return un<<=1,(un&62914560)===0&&(un=4194304),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tm(e,t,n,a,r,i){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var N=e.entanglements,M=e.expirationTimes,W=e.hiddenUpdates;for(n=h&~n;0<n;){var le=31-rt(n),fe=1<<le;N[le]=0,M[le]=-1;var J=W[le];if(J!==null)for(W[le]=null,le=0;le<J.length;le++){var ne=J[le];ne!==null&&(ne.lane&=-536870913)}n&=~fe}a!==0&&Yc(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(h&~t))}function Yc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-rt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-rt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Qc(e,t){var n=t&-t;return n=(n&42)!==0?1:Js(n),(n&(e.suspendedLanes|t))!==0?0:n}function Js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function el(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zc(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:zh(e.type))}function Wc(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var Ln=Math.random().toString(36).slice(2),vt="__reactFiber$"+Ln,It="__reactProps$"+Ln,Na="__reactContainer$"+Ln,tl="__reactEvents$"+Ln,nm="__reactListeners$"+Ln,am="__reactHandles$"+Ln,Kc="__reactResources$"+Ln,br="__reactMarker$"+Ln;function nl(e){delete e[vt],delete e[It],delete e[tl],delete e[nm],delete e[am]}function Ca(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Na]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xh(e);e!==null;){if(n=e[vt])return n;e=xh(e)}return t}e=n,n=e.parentNode}return null}function Ia(e){if(e=e[vt]||e[Na]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Da(e){var t=e[Kc];return t||(t=e[Kc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gt(e){e[br]=!0}var Jc=new Set,eu={};function ca(e,t){Oa(e,t),Oa(e+"Capture",t)}function Oa(e,t){for(eu[e]=t,e=0;e<t.length;e++)Jc.add(t[e])}var rm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tu={},nu={};function im(e){return q.call(nu,e)?!0:q.call(tu,e)?!1:rm.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function Ei(e,t,n){if(im(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ai(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function au(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){n=""+h,i.call(this,h)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function al(e){if(!e._valueTracker){var t=au(e)?"checked":"value";e._valueTracker=sm(e,t,""+e[t])}}function ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=au(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lm=/[\n"\\]/g;function Xt(e){return e.replace(lm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rl(e,t,n,a,r,i,h,N){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?il(e,h,Yt(t)):n!=null?il(e,h,Yt(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+Yt(N):e.removeAttribute("name")}function iu(e,t,n,a,r,i,h,N){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){al(e);return}n=n!=null?""+Yt(n):"",t=t!=null?""+Yt(t):n,N||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=N?e.checked:!!a,e.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),al(e)}function il(e,t,n){t==="number"&&wi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ja(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function su(e,t,n){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yt(n):""}function lu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(G(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Yt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),al(e)}function ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ou(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||om.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&ou(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&ou(e,i,t[i])}function sl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(e){return um.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var ll=null;function ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var La=null,za=null;function uu(e){var t=Ia(e);if(t&&(e=t.stateNode)){var n=e[It]||null;e:switch(e=t.stateNode,t.type){case"input":if(rl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[It]||null;if(!r)throw Error(c(90));rl(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&ru(a)}break e;case"textarea":su(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ja(e,!!n.multiple,t,!1)}}}var cl=!1;function du(e,t,n){if(cl)return e(t,n);cl=!0;try{var a=e(t);return a}finally{if(cl=!1,(La!==null||za!==null)&&(fs(),La&&(t=La,e=za,za=La=null,uu(t),e)))for(t=0;t<e.length;t++)uu(e[t])}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[It]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=!1;if(yn)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){ul=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{ul=!1}var zn=null,dl=null,Ri=null;function fu(){if(Ri)return Ri;var e,t=dl,n=t.length,a,r="value"in zn?zn.value:zn.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(a=1;a<=h&&t[n-a]===r[i-a];a++);return Ri=r.slice(e,1<a?1-a:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function hu(){return!1}function Dt(e){function t(n,a,r,i,h){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=h,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(n=e[N],this[N]=n?n(i):i[N]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ni:hu,this.isPropagationStopped=hu,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ci=Dt(ua),Ar=A({},ua,{view:0,detail:0}),dm=Dt(Ar),fl,hl,wr,Ii=A({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(fl=e.screenX-wr.screenX,hl=e.screenY-wr.screenY):hl=fl=0,wr=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),pu=Dt(Ii),fm=A({},Ii,{dataTransfer:0}),hm=Dt(fm),pm=A({},Ar,{relatedTarget:0}),pl=Dt(pm),mm=A({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),gm=Dt(mm),ym=A({},ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vm=Dt(ym),bm=A({},ua,{data:0}),mu=Dt(bm),xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function ml(){return Am}var wm=A({},Ar,{key:function(e){if(e.key){var t=xm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=Dt(wm),Rm=A({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Dt(Rm),Tm=A({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Nm=Dt(Tm),Cm=A({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=Dt(Cm),Dm=A({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Dt(Dm),jm=A({},ua,{newState:0,oldState:0}),km=Dt(jm),Lm=[9,13,27,32],gl=yn&&"CompositionEvent"in window,_r=null;yn&&"documentMode"in document&&(_r=document.documentMode);var zm=yn&&"TextEvent"in window&&!_r,yu=yn&&(!gl||_r&&8<_r&&11>=_r),vu=" ",bu=!1;function xu(e,t){switch(e){case"keyup":return Lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ma=!1;function Mm(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(bu=!0,vu);case"textInput":return e=t.data,e===vu&&bu?null:e;default:return null}}function Um(e,t){if(Ma)return e==="compositionend"||!gl&&xu(e,t)?(e=fu(),Ri=dl=zn=null,Ma=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fm[e.type]:t==="textarea"}function Au(e,t,n,a){La?za?za.push(a):za=[a]:La=a,t=bs(t,"onChange"),0<t.length&&(n=new Ci("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Rr=null,Tr=null;function Bm(e){sh(e,0)}function Di(e){var t=xr(e);if(ru(t))return e}function wu(e,t){if(e==="change")return t}var _u=!1;if(yn){var yl;if(yn){var vl="oninput"in document;if(!vl){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),vl=typeof Ru.oninput=="function"}yl=vl}else yl=!1;_u=yl&&(!document.documentMode||9<document.documentMode)}function Tu(){Rr&&(Rr.detachEvent("onpropertychange",Nu),Tr=Rr=null)}function Nu(e){if(e.propertyName==="value"&&Di(Tr)){var t=[];Au(t,Tr,e,ol(e)),du(Bm,t)}}function Pm(e,t,n){e==="focusin"?(Tu(),Rr=t,Tr=n,Rr.attachEvent("onpropertychange",Nu)):e==="focusout"&&Tu()}function Vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(Tr)}function Hm(e,t){if(e==="click")return Di(t)}function $m(e,t){if(e==="input"||e==="change")return Di(t)}function Gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Gm;function Nr(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!q.call(t,r)||!Mt(e[r],t[r]))return!1}return!0}function Cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var n=Cu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cu(n)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wi(e.document)}return t}function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qm=yn&&"documentMode"in document&&11>=document.documentMode,Ua=null,xl=null,Cr=null,Sl=!1;function ju(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||Ua==null||Ua!==wi(a)||(a=Ua,"selectionStart"in a&&bl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Cr&&Nr(Cr,a)||(Cr=a,a=bs(xl,"onSelect"),0<a.length&&(t=new Ci("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ua)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fa={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},El={},ku={};yn&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function fa(e){if(El[e])return El[e];if(!Fa[e])return e;var t=Fa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ku)return El[e]=t[n];return e}var Lu=fa("animationend"),zu=fa("animationiteration"),Mu=fa("animationstart"),Ym=fa("transitionrun"),Xm=fa("transitionstart"),Qm=fa("transitioncancel"),Uu=fa("transitionend"),Fu=new Map,Al="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Al.push("scrollEnd");function rn(e,t){Fu.set(e,t),ca(t,[e])}var Oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qt=[],Ba=0,wl=0;function ji(){for(var e=Ba,t=wl=Ba=0;t<e;){var n=Qt[t];Qt[t++]=null;var a=Qt[t];Qt[t++]=null;var r=Qt[t];Qt[t++]=null;var i=Qt[t];if(Qt[t++]=null,a!==null&&r!==null){var h=a.pending;h===null?r.next=r:(r.next=h.next,h.next=r),a.pending=r}i!==0&&Bu(n,r,i)}}function ki(e,t,n,a){Qt[Ba++]=e,Qt[Ba++]=t,Qt[Ba++]=n,Qt[Ba++]=a,wl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function _l(e,t,n,a){return ki(e,t,n,a),Li(e)}function ha(e,t){return ki(e,null,null,t),Li(e)}function Bu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-rt(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function Li(e){if(50<Wr)throw Wr=0,Lo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pa={};function Zm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,a){return new Zm(e,t,n,a)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Pu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zi(e,t,n,a,r,i){var h=0;if(a=e,typeof e=="function")Rl(e)&&(h=1);else if(typeof e=="string")h=t0(e,n,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=Ut(31,n,t,r),e.elementType=F,e.lanes=i,e;case m:return pa(n.children,r,i,t);case E:h=8,r|=24;break;case w:return e=Ut(12,n,t,r|2),e.elementType=w,e.lanes=i,e;case O:return e=Ut(13,n,t,r),e.elementType=O,e.lanes=i,e;case X:return e=Ut(19,n,t,r),e.elementType=X,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:h=10;break e;case D:h=9;break e;case U:h=11;break e;case H:h=14;break e;case $:h=16,a=null;break e}h=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Ut(h,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function pa(e,t,n,a){return e=Ut(7,e,a,t),e.lanes=n,e}function Tl(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Vu(e){var t=Ut(18,null,null,0);return t.stateNode=e,t}function Nl(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hu=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=Hu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:j(t)},Hu.set(e,t),t)}return{value:e,source:t,stack:j(t)}}var Va=[],Ha=0,Mi=null,Ir=0,Wt=[],Kt=0,Mn=null,dn=1,fn="";function bn(e,t){Va[Ha++]=Ir,Va[Ha++]=Mi,Mi=e,Ir=t}function $u(e,t,n){Wt[Kt++]=dn,Wt[Kt++]=fn,Wt[Kt++]=Mn,Mn=e;var a=dn;e=fn;var r=32-rt(a)-1;a&=~(1<<r),n+=1;var i=32-rt(t)+r;if(30<i){var h=r-r%5;i=(a&(1<<h)-1).toString(32),a>>=h,r-=h,dn=1<<32-rt(t)+r|n<<r|a,fn=i+e}else dn=1<<i|n<<r|a,fn=e}function Cl(e){e.return!==null&&(bn(e,1),$u(e,1,0))}function Il(e){for(;e===Mi;)Mi=Va[--Ha],Va[Ha]=null,Ir=Va[--Ha],Va[Ha]=null;for(;e===Mn;)Mn=Wt[--Kt],Wt[Kt]=null,fn=Wt[--Kt],Wt[Kt]=null,dn=Wt[--Kt],Wt[Kt]=null}function Gu(e,t){Wt[Kt++]=dn,Wt[Kt++]=fn,Wt[Kt++]=Mn,dn=t.id,fn=t.overflow,Mn=e}var bt=null,tt=null,Ve=!1,Un=null,Jt=!1,Dl=Error(c(519));function Fn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Dr(Zt(t,e)),Dl}function qu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[vt]=e,t[It]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Jr.length;n++)Ue(Jr[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),iu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),lu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||uh(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Fn(e,!0)}function Yu(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:bt=bt.return}}function $a(e){if(e!==bt)return!1;if(!Ve)return Yu(e),Ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Zo(e.type,e.memoizedProps)),n=!n),n&&tt&&Fn(e),Yu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));tt=bh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));tt=bh(e)}else t===27?(t=tt,Jn(e.type)?(e=tc,tc=null,tt=e):tt=t):tt=bt?tn(e.stateNode.nextSibling):null;return!0}function ma(){tt=bt=null,Ve=!1}function Ol(){var e=Un;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Un=null),e}function Dr(e){Un===null?Un=[e]:Un.push(e)}var jl=C(null),ga=null,xn=null;function Bn(e,t,n){ie(jl,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=jl.current,L(jl)}function kl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ll(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var h=r.child;i=i.firstContext;e:for(;i!==null;){var N=i;i=r;for(var M=0;M<t.length;M++)if(N.context===t[M]){i.lanes|=n,N=i.alternate,N!==null&&(N.lanes|=n),kl(i.return,n,e),a||(h=null);break e}i=N.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(c(341));h.lanes|=n,i=h.alternate,i!==null&&(i.lanes|=n),kl(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function Ga(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(c(387));if(h=h.memoizedProps,h!==null){var N=r.type;Mt(r.pendingProps.value,h.value)||(e!==null?e.push(N):e=[N])}}else if(r===Te.current){if(h=r.alternate,h===null)throw Error(c(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ri):e=[ri])}r=r.return}e!==null&&Ll(t,e,n,a),t.flags|=262144}function Ui(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){ga=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return Xu(ga,e)}function Fi(e,t){return ga===null&&ya(e),Xu(e,t)}function Xu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(c(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Wm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Km=u.unstable_scheduleCallback,Jm=u.unstable_NormalPriority,ct={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zl(){return{controller:new Wm,data:new Map,refCount:0}}function Or(e){e.refCount--,e.refCount===0&&Km(Jm,function(){e.controller.abort()})}var jr=null,Ml=0,qa=0,Ya=null;function eg(e,t){if(jr===null){var n=jr=[];Ml=0,qa=Po(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ml++,t.then(Qu,Qu),t}function Qu(){if(--Ml===0&&jr!==null){Ya!==null&&(Ya.status="fulfilled");var e=jr;jr=null,qa=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Zu=B.S;B.S=function(e,t){kf=xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&eg(e,t),Zu!==null&&Zu(e,t)};var va=C(null);function Ul(){var e=va.current;return e!==null?e:Je.pooledCache}function Bi(e,t){t===null?ie(va,va.current):ie(va,t.pool)}function Wu(){var e=Ul();return e===null?null:{parent:ct._currentValue,pool:e}}var Xa=Error(c(460)),Fl=Error(c(474)),Pi=Error(c(542)),Vi={then:function(){}};function Ku(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ju(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,td(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,td(e),e}throw xa=t,Xa}}function ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xa=n,Xa):n}}var xa=null;function ed(){if(xa===null)throw Error(c(459));var e=xa;return xa=null,e}function td(e){if(e===Xa||e===Pi)throw Error(c(483))}var Qa=null,kr=0;function Hi(e){var t=kr;return kr+=1,Qa===null&&(Qa=[]),Ju(Qa,e,t)}function Lr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $i(e,t){throw t.$$typeof===R?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nd(e){function t(Y,P){if(e){var Z=Y.deletions;Z===null?(Y.deletions=[P],Y.flags|=16):Z.push(P)}}function n(Y,P){if(!e)return null;for(;P!==null;)t(Y,P),P=P.sibling;return null}function a(Y){for(var P=new Map;Y!==null;)Y.key!==null?P.set(Y.key,Y):P.set(Y.index,Y),Y=Y.sibling;return P}function r(Y,P){return Y=vn(Y,P),Y.index=0,Y.sibling=null,Y}function i(Y,P,Z){return Y.index=Z,e?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<P?(Y.flags|=67108866,P):Z):(Y.flags|=67108866,P)):(Y.flags|=1048576,P)}function h(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function N(Y,P,Z,ce){return P===null||P.tag!==6?(P=Tl(Z,Y.mode,ce),P.return=Y,P):(P=r(P,Z),P.return=Y,P)}function M(Y,P,Z,ce){var Re=Z.type;return Re===m?le(Y,P,Z.props.children,ce,Z.key):P!==null&&(P.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===$&&ba(Re)===P.type)?(P=r(P,Z.props),Lr(P,Z),P.return=Y,P):(P=zi(Z.type,Z.key,Z.props,null,Y.mode,ce),Lr(P,Z),P.return=Y,P)}function W(Y,P,Z,ce){return P===null||P.tag!==4||P.stateNode.containerInfo!==Z.containerInfo||P.stateNode.implementation!==Z.implementation?(P=Nl(Z,Y.mode,ce),P.return=Y,P):(P=r(P,Z.children||[]),P.return=Y,P)}function le(Y,P,Z,ce,Re){return P===null||P.tag!==7?(P=pa(Z,Y.mode,ce,Re),P.return=Y,P):(P=r(P,Z),P.return=Y,P)}function fe(Y,P,Z){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Tl(""+P,Y.mode,Z),P.return=Y,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return Z=zi(P.type,P.key,P.props,null,Y.mode,Z),Lr(Z,P),Z.return=Y,Z;case T:return P=Nl(P,Y.mode,Z),P.return=Y,P;case $:return P=ba(P),fe(Y,P,Z)}if(G(P)||k(P))return P=pa(P,Y.mode,Z,null),P.return=Y,P;if(typeof P.then=="function")return fe(Y,Hi(P),Z);if(P.$$typeof===I)return fe(Y,Fi(Y,P),Z);$i(Y,P)}return null}function J(Y,P,Z,ce){var Re=P!==null?P.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Re!==null?null:N(Y,P,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return Z.key===Re?M(Y,P,Z,ce):null;case T:return Z.key===Re?W(Y,P,Z,ce):null;case $:return Z=ba(Z),J(Y,P,Z,ce)}if(G(Z)||k(Z))return Re!==null?null:le(Y,P,Z,ce,null);if(typeof Z.then=="function")return J(Y,P,Hi(Z),ce);if(Z.$$typeof===I)return J(Y,P,Fi(Y,Z),ce);$i(Y,Z)}return null}function ne(Y,P,Z,ce,Re){if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return Y=Y.get(Z)||null,N(P,Y,""+ce,Re);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case S:return Y=Y.get(ce.key===null?Z:ce.key)||null,M(P,Y,ce,Re);case T:return Y=Y.get(ce.key===null?Z:ce.key)||null,W(P,Y,ce,Re);case $:return ce=ba(ce),ne(Y,P,Z,ce,Re)}if(G(ce)||k(ce))return Y=Y.get(Z)||null,le(P,Y,ce,Re,null);if(typeof ce.then=="function")return ne(Y,P,Z,Hi(ce),Re);if(ce.$$typeof===I)return ne(Y,P,Z,Fi(P,ce),Re);$i(P,ce)}return null}function Ee(Y,P,Z,ce){for(var Re=null,He=null,we=P,ke=P=0,Be=null;we!==null&&ke<Z.length;ke++){we.index>ke?(Be=we,we=null):Be=we.sibling;var $e=J(Y,we,Z[ke],ce);if($e===null){we===null&&(we=Be);break}e&&we&&$e.alternate===null&&t(Y,we),P=i($e,P,ke),He===null?Re=$e:He.sibling=$e,He=$e,we=Be}if(ke===Z.length)return n(Y,we),Ve&&bn(Y,ke),Re;if(we===null){for(;ke<Z.length;ke++)we=fe(Y,Z[ke],ce),we!==null&&(P=i(we,P,ke),He===null?Re=we:He.sibling=we,He=we);return Ve&&bn(Y,ke),Re}for(we=a(we);ke<Z.length;ke++)Be=ne(we,Y,ke,Z[ke],ce),Be!==null&&(e&&Be.alternate!==null&&we.delete(Be.key===null?ke:Be.key),P=i(Be,P,ke),He===null?Re=Be:He.sibling=Be,He=Be);return e&&we.forEach(function(ra){return t(Y,ra)}),Ve&&bn(Y,ke),Re}function Ce(Y,P,Z,ce){if(Z==null)throw Error(c(151));for(var Re=null,He=null,we=P,ke=P=0,Be=null,$e=Z.next();we!==null&&!$e.done;ke++,$e=Z.next()){we.index>ke?(Be=we,we=null):Be=we.sibling;var ra=J(Y,we,$e.value,ce);if(ra===null){we===null&&(we=Be);break}e&&we&&ra.alternate===null&&t(Y,we),P=i(ra,P,ke),He===null?Re=ra:He.sibling=ra,He=ra,we=Be}if($e.done)return n(Y,we),Ve&&bn(Y,ke),Re;if(we===null){for(;!$e.done;ke++,$e=Z.next())$e=fe(Y,$e.value,ce),$e!==null&&(P=i($e,P,ke),He===null?Re=$e:He.sibling=$e,He=$e);return Ve&&bn(Y,ke),Re}for(we=a(we);!$e.done;ke++,$e=Z.next())$e=ne(we,Y,ke,$e.value,ce),$e!==null&&(e&&$e.alternate!==null&&we.delete($e.key===null?ke:$e.key),P=i($e,P,ke),He===null?Re=$e:He.sibling=$e,He=$e);return e&&we.forEach(function(f0){return t(Y,f0)}),Ve&&bn(Y,ke),Re}function We(Y,P,Z,ce){if(typeof Z=="object"&&Z!==null&&Z.type===m&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:e:{for(var Re=Z.key;P!==null;){if(P.key===Re){if(Re=Z.type,Re===m){if(P.tag===7){n(Y,P.sibling),ce=r(P,Z.props.children),ce.return=Y,Y=ce;break e}}else if(P.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===$&&ba(Re)===P.type){n(Y,P.sibling),ce=r(P,Z.props),Lr(ce,Z),ce.return=Y,Y=ce;break e}n(Y,P);break}else t(Y,P);P=P.sibling}Z.type===m?(ce=pa(Z.props.children,Y.mode,ce,Z.key),ce.return=Y,Y=ce):(ce=zi(Z.type,Z.key,Z.props,null,Y.mode,ce),Lr(ce,Z),ce.return=Y,Y=ce)}return h(Y);case T:e:{for(Re=Z.key;P!==null;){if(P.key===Re)if(P.tag===4&&P.stateNode.containerInfo===Z.containerInfo&&P.stateNode.implementation===Z.implementation){n(Y,P.sibling),ce=r(P,Z.children||[]),ce.return=Y,Y=ce;break e}else{n(Y,P);break}else t(Y,P);P=P.sibling}ce=Nl(Z,Y.mode,ce),ce.return=Y,Y=ce}return h(Y);case $:return Z=ba(Z),We(Y,P,Z,ce)}if(G(Z))return Ee(Y,P,Z,ce);if(k(Z)){if(Re=k(Z),typeof Re!="function")throw Error(c(150));return Z=Re.call(Z),Ce(Y,P,Z,ce)}if(typeof Z.then=="function")return We(Y,P,Hi(Z),ce);if(Z.$$typeof===I)return We(Y,P,Fi(Y,Z),ce);$i(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,P!==null&&P.tag===6?(n(Y,P.sibling),ce=r(P,Z),ce.return=Y,Y=ce):(n(Y,P),ce=Tl(Z,Y.mode,ce),ce.return=Y,Y=ce),h(Y)):n(Y,P)}return function(Y,P,Z,ce){try{kr=0;var Re=We(Y,P,Z,ce);return Qa=null,Re}catch(we){if(we===Xa||we===Pi)throw we;var He=Ut(29,we,null,Y.mode);return He.lanes=ce,He.return=Y,He}finally{}}}var Sa=nd(!0),ad=nd(!1),Pn=!1;function Bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ge&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Li(e),Bu(e,null,n),t}return ki(e,a,t,n),Li(e)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Xc(e,n)}}function Vl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=h:i=i.next=h,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Hl=!1;function Mr(){if(Hl){var e=Ya;if(e!==null)throw e}}function Ur(e,t,n,a){Hl=!1;var r=e.updateQueue;Pn=!1;var i=r.firstBaseUpdate,h=r.lastBaseUpdate,N=r.shared.pending;if(N!==null){r.shared.pending=null;var M=N,W=M.next;M.next=null,h===null?i=W:h.next=W,h=M;var le=e.alternate;le!==null&&(le=le.updateQueue,N=le.lastBaseUpdate,N!==h&&(N===null?le.firstBaseUpdate=W:N.next=W,le.lastBaseUpdate=M))}if(i!==null){var fe=r.baseState;h=0,le=W=M=null,N=i;do{var J=N.lane&-536870913,ne=J!==N.lane;if(ne?(Fe&J)===J:(a&J)===J){J!==0&&J===qa&&(Hl=!0),le!==null&&(le=le.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ee=e,Ce=N;J=t;var We=n;switch(Ce.tag){case 1:if(Ee=Ce.payload,typeof Ee=="function"){fe=Ee.call(We,fe,J);break e}fe=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Ce.payload,J=typeof Ee=="function"?Ee.call(We,fe,J):Ee,J==null)break e;fe=A({},fe,J);break e;case 2:Pn=!0}}J=N.callback,J!==null&&(e.flags|=64,ne&&(e.flags|=8192),ne=r.callbacks,ne===null?r.callbacks=[J]:ne.push(J))}else ne={lane:J,tag:N.tag,payload:N.payload,callback:N.callback,next:null},le===null?(W=le=ne,M=fe):le=le.next=ne,h|=J;if(N=N.next,N===null){if(N=r.shared.pending,N===null)break;ne=N,N=ne.next,ne.next=null,r.lastBaseUpdate=ne,r.shared.pending=null}}while(!0);le===null&&(M=fe),r.baseState=M,r.firstBaseUpdate=W,r.lastBaseUpdate=le,i===null&&(r.shared.lanes=0),Xn|=h,e.lanes=h,e.memoizedState=fe}}function rd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function id(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rd(n[e],t)}var Za=C(null),Gi=C(0);function sd(e,t){e=In,ie(Gi,e),ie(Za,t),In=e|t.baseLanes}function $l(){ie(Gi,In),ie(Za,Za.current)}function Gl(){In=Gi.current,L(Za),L(Gi)}var Ft=C(null),en=null;function $n(e){var t=e.alternate;ie(lt,lt.current&1),ie(Ft,e),en===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(en=e)}function ql(e){ie(lt,lt.current),ie(Ft,e),en===null&&(en=e)}function ld(e){e.tag===22?(ie(lt,lt.current),ie(Ft,e),en===null&&(en=e)):Gn()}function Gn(){ie(lt,lt.current),ie(Ft,Ft.current)}function Bt(e){L(Ft),en===e&&(en=null),L(lt)}var lt=C(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Jo(n)||ec(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,je=null,Qe=null,ut=null,Yi=!1,Wa=!1,Ea=!1,Xi=0,Fr=0,Ka=null,ng=0;function it(){throw Error(c(321))}function Yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function Xl(e,t,n,a,r,i){return En=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?$d:co,Ea=!1,i=n(a,r),Ea=!1,Wa&&(i=cd(t,n,a,r)),od(e),i}function od(e){B.H=Vr;var t=Qe!==null&&Qe.next!==null;if(En=0,ut=Qe=je=null,Yi=!1,Fr=0,Ka=null,t)throw Error(c(300));e===null||dt||(e=e.dependencies,e!==null&&Ui(e)&&(dt=!0))}function cd(e,t,n,a){je=e;var r=0;do{if(Wa&&(Ka=null),Fr=0,Wa=!1,25<=r)throw Error(c(301));if(r+=1,ut=Qe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}B.H=Gd,i=t(n,a)}while(Wa);return i}function ag(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Br(t):t,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(je.flags|=1024),t}function Ql(){var e=Xi!==0;return Xi=0,e}function Zl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Wl(e){if(Yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yi=!1}En=0,ut=Qe=je=null,Wa=!1,Fr=Xi=0,Ka=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?je.memoizedState=ut=e:ut=ut.next=e,ut}function ot(){if(Qe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=ut===null?je.memoizedState:ut.next;if(t!==null)ut=t,Qe=e;else{if(e===null)throw je.alternate===null?Error(c(467)):Error(c(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},ut===null?je.memoizedState=ut=e:ut=ut.next=e}return ut}function Qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Br(e){var t=Fr;return Fr+=1,Ka===null&&(Ka=[]),e=Ju(Ka,e,t),t=je,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?$d:co),e}function Zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Br(e);if(e.$$typeof===I)return xt(e)}throw Error(c(438,String(e)))}function Kl(e){var t=null,n=je.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=je.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qi(),je.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ae;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=ot();return Jl(t,Qe,e)}function Jl(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var h=r.next;r.next=i.next,i.next=h}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var N=h=null,M=null,W=t,le=!1;do{var fe=W.lane&-536870913;if(fe!==W.lane?(Fe&fe)===fe:(En&fe)===fe){var J=W.revertLane;if(J===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),fe===qa&&(le=!0);else if((En&J)===J){W=W.next,J===qa&&(le=!0);continue}else fe={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},M===null?(N=M=fe,h=i):M=M.next=fe,je.lanes|=J,Xn|=J;fe=W.action,Ea&&n(i,fe),i=W.hasEagerState?W.eagerState:n(i,fe)}else J={lane:fe,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},M===null?(N=M=J,h=i):M=M.next=J,je.lanes|=fe,Xn|=fe;W=W.next}while(W!==null&&W!==t);if(M===null?h=i:M.next=N,!Mt(i,e.memoizedState)&&(dt=!0,le&&(n=Ya,n!==null)))throw n;e.memoizedState=i,e.baseState=h,e.baseQueue=M,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function eo(e){var t=ot(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do i=e(i,h.action),h=h.next;while(h!==r);Mt(i,t.memoizedState)||(dt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function ud(e,t,n){var a=je,r=ot(),i=Ve;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var h=!Mt((Qe||r).memoizedState,n);if(h&&(r.memoizedState=n,dt=!0),r=r.queue,ao(hd.bind(null,a,r,e),[e]),r.getSnapshot!==t||h||ut!==null&&ut.memoizedState.tag&1){if(a.flags|=2048,Ja(9,{destroy:void 0},fd.bind(null,a,r,n,t),null),Je===null)throw Error(c(349));i||(En&127)!==0||dd(a,t,n)}return n}function dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t=Qi(),je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fd(e,t,n,a){t.value=n,t.getSnapshot=a,pd(t)&&md(e)}function hd(e,t,n){return n(function(){pd(t)&&md(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function md(e){var t=ha(e,2);t!==null&&zt(t,e,2)}function to(e){var t=_t();if(typeof e=="function"){var n=e;if(e=n(),Ea){Gt(!0);try{n()}finally{Gt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function gd(e,t,n,a){return e.baseState=n,Jl(e,Qe,typeof a=="function"?a:An)}function rg(e,t,n,a,r){if(es(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){i.listeners.push(h)}};B.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,yd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function yd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=B.T,h={};B.T=h;try{var N=n(r,a),M=B.S;M!==null&&M(h,N),vd(e,t,N)}catch(W){no(e,t,W)}finally{i!==null&&h.types!==null&&(i.types=h.types),B.T=i}}else try{i=n(r,a),vd(e,t,i)}catch(W){no(e,t,W)}}function vd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){bd(e,t,a)},function(a){return no(e,t,a)}):bd(e,t,n)}function bd(e,t,n){t.status="fulfilled",t.value=n,xd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,yd(e,n)))}function no(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,xd(t),t=t.next;while(t!==a)}e.action=null}function xd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sd(e,t){return t}function Ed(e,t){if(Ve){var n=Je.formState;if(n!==null){e:{var a=je;if(Ve){if(tt){t:{for(var r=tt,i=Jt;r.nodeType!==8;){if(!i){r=null;break t}if(r=tn(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){tt=tn(r.nextSibling),a=r.data==="F!";break e}}Fn(a)}a=!1}a&&(t=n[0])}}return n=_t(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sd,lastRenderedState:t},n.queue=a,n=Pd.bind(null,je,a),a.dispatch=n,a=to(!1),i=oo.bind(null,je,!1,a.queue),a=_t(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=rg.bind(null,je,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ad(e){var t=ot();return wd(t,Qe,e)}function wd(e,t,n){if(t=Jl(e,t,Sd)[0],e=Wi(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Br(t)}catch(h){throw h===Xa?Pi:h}else a=t;t=ot();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(je.flags|=2048,Ja(9,{destroy:void 0},ig.bind(null,r,n),null)),[a,i,e]}function ig(e,t){e.action=t}function _d(e){var t=ot(),n=Qe;if(n!==null)return wd(t,n,e);ot(),t=t.memoizedState,n=ot();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ja(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=je.updateQueue,t===null&&(t=Qi(),je.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Rd(){return ot().memoizedState}function Ki(e,t,n,a){var r=_t();je.flags|=e,r.memoizedState=Ja(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ji(e,t,n,a){var r=ot();a=a===void 0?null:a;var i=r.memoizedState.inst;Qe!==null&&a!==null&&Yl(a,Qe.memoizedState.deps)?r.memoizedState=Ja(t,i,n,a):(je.flags|=e,r.memoizedState=Ja(1|t,i,n,a))}function Td(e,t){Ki(8390656,8,e,t)}function ao(e,t){Ji(2048,8,e,t)}function sg(e){je.flags|=4;var t=je.updateQueue;if(t===null)t=Qi(),je.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Nd(e){var t=ot().memoizedState;return sg({ref:t,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Cd(e,t){return Ji(4,2,e,t)}function Id(e,t){return Ji(4,4,e,t)}function Dd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){n=n!=null?n.concat([e]):null,Ji(4,4,Dd.bind(null,t,e),n)}function ro(){}function jd(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Yl(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Yl(t,a[1]))return a[0];if(a=e(),Ea){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a}function io(e,t,n){return n===void 0||(En&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=zf(),je.lanes|=e,Xn|=e,n)}function Ld(e,t,n,a){return Mt(n,t)?n:Za.current!==null?(e=io(e,n,a),Mt(e,t)||(dt=!0),e):(En&42)===0||(En&1073741824)!==0&&(Fe&261930)===0?(dt=!0,e.memoizedState=n):(e=zf(),je.lanes|=e,Xn|=e,t)}function zd(e,t,n,a,r){var i=V.p;V.p=i!==0&&8>i?i:8;var h=B.T,N={};B.T=N,oo(e,!1,t,n);try{var M=r(),W=B.S;if(W!==null&&W(N,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var le=tg(M,a);Pr(e,t,le,Ht(e))}else Pr(e,t,a,Ht(e))}catch(fe){Pr(e,t,{then:function(){},status:"rejected",reason:fe},Ht())}finally{V.p=i,h!==null&&N.types!==null&&(h.types=N.types),B.T=h}}function lg(){}function so(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=Md(e).queue;zd(e,r,t,ue,n===null?lg:function(){return Ud(e),n(a)})}function Md(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ud(e){var t=Md(e);t.next===null&&(t=e.alternate.memoizedState),Pr(e,t.next.queue,{},Ht())}function lo(){return xt(ri)}function Fd(){return ot().memoizedState}function Bd(){return ot().memoizedState}function og(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Vn(n);var a=Hn(t,e,n);a!==null&&(zt(a,t,n),zr(a,t,n)),t={cache:zl()},e.payload=t;return}t=t.return}}function cg(e,t,n){var a=Ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},es(e)?Vd(t,n):(n=_l(e,t,n,a),n!==null&&(zt(n,e,a),Hd(n,t,a)))}function Pd(e,t,n){var a=Ht();Pr(e,t,n,a)}function Pr(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(es(e))Vd(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var h=t.lastRenderedState,N=i(h,n);if(r.hasEagerState=!0,r.eagerState=N,Mt(N,h))return ki(e,t,r,0),Je===null&&ji(),!1}catch{}finally{}if(n=_l(e,t,r,a),n!==null)return zt(n,e,a),Hd(n,t,a),!0}return!1}function oo(e,t,n,a){if(a={lane:2,revertLane:Po(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},es(e)){if(t)throw Error(c(479))}else t=_l(e,n,a,2),t!==null&&zt(t,e,2)}function es(e){var t=e.alternate;return e===je||t!==null&&t===je}function Vd(e,t){Wa=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Xc(e,n)}}var Vr={readContext:xt,use:Zi,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useInsertionEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useSyncExternalStore:it,useId:it,useHostTransitionStatus:it,useFormState:it,useActionState:it,useOptimistic:it,useMemoCache:it,useCacheRefresh:it};Vr.useEffectEvent=it;var $d={readContext:xt,use:Zi,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Td,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ki(4194308,4,Dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){Ki(4,2,e,t)},useMemo:function(e,t){var n=_t();t=t===void 0?null:t;var a=e();if(Ea){Gt(!0);try{e()}finally{Gt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=_t();if(n!==void 0){var r=n(t);if(Ea){Gt(!0);try{n(t)}finally{Gt(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=cg.bind(null,je,e),[a.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:function(e){e=to(e);var t=e.queue,n=Pd.bind(null,je,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ro,useDeferredValue:function(e,t){var n=_t();return io(n,e,t)},useTransition:function(){var e=to(!1);return e=zd.bind(null,je,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=je,r=_t();if(Ve){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Je===null)throw Error(c(349));(Fe&127)!==0||dd(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,Td(hd.bind(null,a,i,e),[e]),a.flags|=2048,Ja(9,{destroy:void 0},fd.bind(null,a,i,n,t),null),n},useId:function(){var e=_t(),t=Je.identifierPrefix;if(Ve){var n=fn,a=dn;n=(a&~(1<<32-rt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Xi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ng++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lo,useFormState:Ed,useActionState:Ed,useOptimistic:function(e){var t=_t();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=oo.bind(null,je,!0,n),n.dispatch=t,[e,t]},useMemoCache:Kl,useCacheRefresh:function(){return _t().memoizedState=og.bind(null,je)},useEffectEvent:function(e){var t=_t(),n={impl:e};return t.memoizedState=n,function(){if((Ge&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},co={readContext:xt,use:Zi,useCallback:jd,useContext:xt,useEffect:ao,useImperativeHandle:Od,useInsertionEffect:Cd,useLayoutEffect:Id,useMemo:kd,useReducer:Wi,useRef:Rd,useState:function(){return Wi(An)},useDebugValue:ro,useDeferredValue:function(e,t){var n=ot();return Ld(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Wi(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:ud,useId:Fd,useHostTransitionStatus:lo,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var n=ot();return gd(n,Qe,e,t)},useMemoCache:Kl,useCacheRefresh:Bd};co.useEffectEvent=Nd;var Gd={readContext:xt,use:Zi,useCallback:jd,useContext:xt,useEffect:ao,useImperativeHandle:Od,useInsertionEffect:Cd,useLayoutEffect:Id,useMemo:kd,useReducer:eo,useRef:Rd,useState:function(){return eo(An)},useDebugValue:ro,useDeferredValue:function(e,t){var n=ot();return Qe===null?io(n,e,t):Ld(n,Qe.memoizedState,e,t)},useTransition:function(){var e=eo(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Br(e),t]},useSyncExternalStore:ud,useId:Fd,useHostTransitionStatus:lo,useFormState:_d,useActionState:_d,useOptimistic:function(e,t){var n=ot();return Qe!==null?gd(n,Qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Kl,useCacheRefresh:Bd};Gd.useEffectEvent=Nd;function uo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=Vn(a);r.payload=t,n!=null&&(r.callback=n),t=Hn(e,r,a),t!==null&&(zt(t,e,a),zr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=Vn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Hn(e,r,a),t!==null&&(zt(t,e,a),zr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Vn(n);a.tag=2,t!=null&&(a.callback=t),t=Hn(e,a,n),t!==null&&(zt(t,e,n),zr(t,e,n))}};function qd(e,t,n,a,r,i,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,h):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,a)||!Nr(r,i):!0}function Yd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=A({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Xd(e){Oi(e)}function Qd(e){console.error(e)}function Zd(e){Oi(e)}function ts(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Wd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ho(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){ts(e,t)},n}function Kd(e){return e=Vn(e),e.tag=3,e}function Jd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){Wd(t,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Wd(t,n,a),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var N=a.stack;this.componentDidCatch(a.value,{componentStack:N!==null?N:""})})}function ug(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,r,!0),n=Ft.current,n!==null){switch(n.tag){case 31:case 13:return en===null?hs():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Vi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Uo(e,a,r)),!1;case 22:return n.flags|=65536,a===Vi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Uo(e,a,r)),!1}throw Error(c(435,n.tag))}return Uo(e,a,r),hs(),!1}if(Ve)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Dl&&(e=Error(c(422),{cause:a}),Dr(Zt(e,n)))):(a!==Dl&&(t=Error(c(423),{cause:a}),Dr(Zt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Zt(a,n),r=ho(e.stateNode,a,r),Vl(e,r),st!==4&&(st=2)),!1;var i=Error(c(520),{cause:a});if(i=Zt(i,n),Zr===null?Zr=[i]:Zr.push(i),st!==4&&(st=2),t===null)return!0;a=Zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ho(n.stateNode,a,e),Vl(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Qn===null||!Qn.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Kd(r),Jd(r,e,n,a),Vl(n,r),!1}n=n.return}while(n!==null);return!1}var po=Error(c(461)),dt=!1;function St(e,t,n,a){t.child=e===null?ad(t,null,n,a):Sa(t,e.child,n,a)}function ef(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var h={};for(var N in a)N!=="ref"&&(h[N]=a[N])}else h=a;return ya(t),a=Xl(e,t,n,h,i,r),N=Ql(),e!==null&&!dt?(Zl(e,t,r),wn(e,t,r)):(Ve&&N&&Cl(t),t.flags|=1,St(e,t,a,r),t.child)}function tf(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!Rl(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,nf(e,t,i,a,r)):(e=zi(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Eo(e,r)){var h=i.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(h,a)&&e.ref===t.ref)return wn(e,t,r)}return t.flags|=1,e=vn(i,a),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(Nr(i,a)&&e.ref===t.ref)if(dt=!1,t.pendingProps=a=i,Eo(e,r))(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,wn(e,t,r)}return mo(e,t,n,a,r)}function af(e,t,n,a){var r=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return rf(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bi(t,i!==null?i.cachePool:null),i!==null?sd(t,i):$l(),ld(t);else return a=t.lanes=536870912,rf(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Bi(t,i.cachePool),sd(t,i),Gn(),t.memoizedState=null):(e!==null&&Bi(t,null),$l(),Gn());return St(e,t,r,n),t.child}function Hr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function rf(e,t,n,a,r){var i=Ul();return i=i===null?null:{parent:ct._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Bi(t,null),$l(),ld(t),e!==null&&Ga(e,t,a,!0),t.childLanes=r,null}function ns(e,t){return t=rs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sf(e,t,n){return Sa(t,e.child,null,n),e=ns(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function dg(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ve){if(a.mode==="hidden")return e=ns(t,a),t.lanes=536870912,Hr(null,e);if(ql(t),(e=tt)?(e=vh(e,Jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mn!==null?{id:dn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},n=Vu(e),n.return=t,t.child=n,bt=t,tt=null)):e=null,e===null)throw Fn(t);return t.lanes=536870912,null}return ns(t,a)}var i=e.memoizedState;if(i!==null){var h=i.dehydrated;if(ql(t),r)if(t.flags&256)t.flags&=-257,t=sf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(dt||Ga(e,t,n,!1),r=(n&e.childLanes)!==0,dt||r){if(a=Je,a!==null&&(h=Qc(a,n),h!==0&&h!==i.retryLane))throw i.retryLane=h,ha(e,h),zt(a,e,h),po;hs(),t=sf(e,t,n)}else e=i.treeContext,tt=tn(h.nextSibling),bt=t,Ve=!0,Un=null,Jt=!1,e!==null&&Gu(t,e),t=ns(t,a),t.flags|=4096;return t}return e=vn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function as(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mo(e,t,n,a,r){return ya(t),n=Xl(e,t,n,a,void 0,r),a=Ql(),e!==null&&!dt?(Zl(e,t,r),wn(e,t,r)):(Ve&&a&&Cl(t),t.flags|=1,St(e,t,n,r),t.child)}function lf(e,t,n,a,r,i){return ya(t),t.updateQueue=null,n=cd(t,a,n,r),od(e),a=Ql(),e!==null&&!dt?(Zl(e,t,i),wn(e,t,i)):(Ve&&a&&Cl(t),t.flags|=1,St(e,t,n,i),t.child)}function of(e,t,n,a,r){if(ya(t),t.stateNode===null){var i=Pa,h=n.contextType;typeof h=="object"&&h!==null&&(i=xt(h)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Bl(t),h=n.contextType,i.context=typeof h=="object"&&h!==null?xt(h):Pa,i.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(uo(t,n,h,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(h=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),h!==i.state&&fo.enqueueReplaceState(i,i.state,null),Ur(t,a,i,r),Mr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var N=t.memoizedProps,M=Aa(n,N);i.props=M;var W=i.context,le=n.contextType;h=Pa,typeof le=="object"&&le!==null&&(h=xt(le));var fe=n.getDerivedStateFromProps;le=typeof fe=="function"||typeof i.getSnapshotBeforeUpdate=="function",N=t.pendingProps!==N,le||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(N||W!==h)&&Yd(t,i,a,h),Pn=!1;var J=t.memoizedState;i.state=J,Ur(t,a,i,r),Mr(),W=t.memoizedState,N||J!==W||Pn?(typeof fe=="function"&&(uo(t,n,fe,a),W=t.memoizedState),(M=Pn||qd(t,n,M,a,J,W,h))?(le||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=W),i.props=a,i.state=W,i.context=h,a=M):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Pl(e,t),h=t.memoizedProps,le=Aa(n,h),i.props=le,fe=t.pendingProps,J=i.context,W=n.contextType,M=Pa,typeof W=="object"&&W!==null&&(M=xt(W)),N=n.getDerivedStateFromProps,(W=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h!==fe||J!==M)&&Yd(t,i,a,M),Pn=!1,J=t.memoizedState,i.state=J,Ur(t,a,i,r),Mr();var ne=t.memoizedState;h!==fe||J!==ne||Pn||e!==null&&e.dependencies!==null&&Ui(e.dependencies)?(typeof N=="function"&&(uo(t,n,N,a),ne=t.memoizedState),(le=Pn||qd(t,n,le,a,J,ne,M)||e!==null&&e.dependencies!==null&&Ui(e.dependencies))?(W||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,ne,M),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,ne,M)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ne),i.props=a,i.state=ne,i.context=M,a=le):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,as(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Sa(t,e.child,null,r),t.child=Sa(t,null,n,r)):St(e,t,n,r),t.memoizedState=i.state,e=t.child):e=wn(e,t,r),e}function cf(e,t,n,a){return ma(),t.flags|=256,St(e,t,n,a),t.child}var go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yo(e){return{baseLanes:e,cachePool:Wu()}}function vo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function uf(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,h;if((h=i)||(h=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ve){if(r?$n(t):Gn(),(e=tt)?(e=vh(e,Jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mn!==null?{id:dn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},n=Vu(e),n.return=t,t.child=n,bt=t,tt=null)):e=null,e===null)throw Fn(t);return ec(e)?t.lanes=32:t.lanes=536870912,null}var N=a.children;return a=a.fallback,r?(Gn(),r=t.mode,N=rs({mode:"hidden",children:N},r),a=pa(a,r,n,null),N.return=t,a.return=t,N.sibling=a,t.child=N,a=t.child,a.memoizedState=yo(n),a.childLanes=vo(e,h,n),t.memoizedState=go,Hr(null,a)):($n(t),bo(t,N))}var M=e.memoizedState;if(M!==null&&(N=M.dehydrated,N!==null)){if(i)t.flags&256?($n(t),t.flags&=-257,t=xo(e,t,n)):t.memoizedState!==null?(Gn(),t.child=e.child,t.flags|=128,t=null):(Gn(),N=a.fallback,r=t.mode,a=rs({mode:"visible",children:a.children},r),N=pa(N,r,n,null),N.flags|=2,a.return=t,N.return=t,a.sibling=N,t.child=a,Sa(t,e.child,null,n),a=t.child,a.memoizedState=yo(n),a.childLanes=vo(e,h,n),t.memoizedState=go,t=Hr(null,a));else if($n(t),ec(N)){if(h=N.nextSibling&&N.nextSibling.dataset,h)var W=h.dgst;h=W,a=Error(c(419)),a.stack="",a.digest=h,Dr({value:a,source:null,stack:null}),t=xo(e,t,n)}else if(dt||Ga(e,t,n,!1),h=(n&e.childLanes)!==0,dt||h){if(h=Je,h!==null&&(a=Qc(h,n),a!==0&&a!==M.retryLane))throw M.retryLane=a,ha(e,a),zt(h,e,a),po;Jo(N)||hs(),t=xo(e,t,n)}else Jo(N)?(t.flags|=192,t.child=e.child,t=null):(e=M.treeContext,tt=tn(N.nextSibling),bt=t,Ve=!0,Un=null,Jt=!1,e!==null&&Gu(t,e),t=bo(t,a.children),t.flags|=4096);return t}return r?(Gn(),N=a.fallback,r=t.mode,M=e.child,W=M.sibling,a=vn(M,{mode:"hidden",children:a.children}),a.subtreeFlags=M.subtreeFlags&65011712,W!==null?N=vn(W,N):(N=pa(N,r,n,null),N.flags|=2),N.return=t,a.return=t,a.sibling=N,t.child=a,Hr(null,a),a=t.child,N=e.child.memoizedState,N===null?N=yo(n):(r=N.cachePool,r!==null?(M=ct._currentValue,r=r.parent!==M?{parent:M,pool:M}:r):r=Wu(),N={baseLanes:N.baseLanes|n,cachePool:r}),a.memoizedState=N,a.childLanes=vo(e,h,n),t.memoizedState=go,Hr(e.child,a)):($n(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function bo(e,t){return t=rs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rs(e,t){return e=Ut(22,e,null,t),e.lanes=0,e}function xo(e,t,n){return Sa(t,e.child,null,n),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),kl(e.return,t,n)}function So(e,t,n,a,r,i){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=n,h.tailMode=r,h.treeForkCount=i)}function ff(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var h=lt.current,N=(h&2)!==0;if(N?(h=h&1|2,t.flags|=128):h&=1,ie(lt,h),St(e,t,a,n),a=Ve?Ir:0,!N&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,n,t);else if(e.tag===19)df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),So(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&qi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}So(t,!0,n,null,i,a);break;case"together":So(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ui(e)))}function fg(e,t,n){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),Bn(t,ct,e.memoizedState.cache),ma();break;case 27:case 5:Pe(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:Bn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ql(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?($n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?uf(e,t,n):($n(t),e=wn(e,t,n),e!==null?e.sibling:null);$n(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ga(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return ff(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(lt,lt.current),a)break;return null;case 22:return t.lanes=0,af(e,t,n,t.pendingProps);case 24:Bn(t,ct,e.memoizedState.cache)}return wn(e,t,n)}function hf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)dt=!0;else{if(!Eo(e,n)&&(t.flags&128)===0)return dt=!1,fg(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,Ve&&(t.flags&1048576)!==0&&$u(t,Ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e=="function")Rl(e)?(a=Aa(e,a),t.tag=1,t=of(null,t,e,a,n)):(t.tag=0,t=mo(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===U){t.tag=11,t=ef(null,t,e,a,n);break e}else if(r===H){t.tag=14,t=tf(null,t,e,a,n);break e}}throw t=x(e)||e,Error(c(306,t,""))}}return t;case 0:return mo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Aa(a,t.pendingProps),of(e,t,a,r,n);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,Pl(e,t),Ur(t,a,null,n);var h=t.memoizedState;if(a=h.cache,Bn(t,ct,a),a!==i.cache&&Ll(t,[ct],n,!0),Mr(),a=h.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=cf(e,t,a,n);break e}else if(a!==r){r=Zt(Error(c(424)),t),Dr(r),t=cf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tt=tn(e.firstChild),bt=t,Ve=!0,Un=null,Jt=!0,n=ad(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ma(),a===r){t=wn(e,t,n);break e}St(e,t,a,n)}t=t.child}return t;case 26:return as(e,t),e===null?(n=wh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ve||(n=t.type,e=t.pendingProps,a=xs(Ae.current).createElement(n),a[vt]=t,a[It]=e,Et(a,n,e),gt(a),t.stateNode=a):t.memoizedState=wh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pe(t),e===null&&Ve&&(a=t.stateNode=Sh(t.type,t.pendingProps,Ae.current),bt=t,Jt=!0,r=tt,Jn(t.type)?(tc=r,tt=tn(a.firstChild)):tt=r),St(e,t,t.pendingProps.children,n),as(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ve&&((r=a=tt)&&(a=Vg(a,t.type,t.pendingProps,Jt),a!==null?(t.stateNode=a,bt=t,tt=tn(a.firstChild),Jt=!1,r=!0):r=!1),r||Fn(t)),Pe(t),r=t.type,i=t.pendingProps,h=e!==null?e.memoizedProps:null,a=i.children,Zo(r,i)?a=null:h!==null&&Zo(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=Xl(e,t,ag,null,null,n),ri._currentValue=r),as(e,t),St(e,t,a,n),t.child;case 6:return e===null&&Ve&&((e=n=tt)&&(n=Hg(n,t.pendingProps,Jt),n!==null?(t.stateNode=n,bt=t,tt=null,e=!0):e=!1),e||Fn(t)),null;case 13:return uf(e,t,n);case 4:return Ne(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Sa(t,null,a,n):St(e,t,a,n),t.child;case 11:return ef(e,t,t.type,t.pendingProps,n);case 7:return St(e,t,t.pendingProps,n),t.child;case 8:return St(e,t,t.pendingProps.children,n),t.child;case 12:return St(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Bn(t,t.type,a.value),St(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ya(t),r=xt(r),a=a(r),t.flags|=1,St(e,t,a,n),t.child;case 14:return tf(e,t,t.type,t.pendingProps,n);case 15:return nf(e,t,t.type,t.pendingProps,n);case 19:return ff(e,t,n);case 31:return dg(e,t,n);case 22:return af(e,t,n,t.pendingProps);case 24:return ya(t),a=xt(ct),e===null?(r=Ul(),r===null&&(r=Je,i=zl(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},Bl(t),Bn(t,ct,r)):((e.lanes&n)!==0&&(Pl(e,t),Ur(t,null,null,n),Mr()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Bn(t,ct,a)):(a=i.cache,Bn(t,ct,a),a!==r.cache&&Ll(t,[ct],n,!0))),St(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function _n(e){e.flags|=4}function Ao(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Bf())e.flags|=8192;else throw xa=Vi,Fl}else e.flags&=-16777217}function pf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ch(t))if(Bf())e.flags|=8192;else throw xa=Vi,Fl}function is(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qc():536870912,e.lanes|=t,ar|=t)}function $r(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function hg(e,t,n){var a=t.pendingProps;switch(Il(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(ct),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($a(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ol())),nt(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(_n(t),i!==null?(nt(t),pf(t,i)):(nt(t),Ao(t,r,null,a,n))):i?i!==e.memoizedState?(_n(t),nt(t),pf(t,i)):(nt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&_n(t),nt(t),Ao(t,r,e,a,n)),null;case 27:if(et(t),n=Ae.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return nt(t),null}e=se.current,$a(t)?qu(t):(e=Sh(r,a,n),t.stateNode=e,_n(t))}return nt(t),null;case 5:if(et(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return nt(t),null}if(i=se.current,$a(t))qu(t);else{var h=xs(Ae.current);switch(i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?h.createElement("select",{is:a.is}):h.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?h.createElement(r,{is:a.is}):h.createElement(r)}}i[vt]=t,i[It]=a;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=i;e:switch(Et(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&_n(t)}}return nt(t),Ao(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=Ae.current,$a(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=bt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||uh(e.nodeValue,n)),e||Fn(t,!0)}else e=xs(e).createTextNode(a),e[vt]=t,t.stateNode=e}return nt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=$a(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[vt]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),e=!1}else n=Ol(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return nt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=$a(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[vt]=t}else ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),r=!1}else r=Ol(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),is(t,t.updateQueue),nt(t),null);case 4:return Se(),e===null&&Go(t.stateNode.containerInfo),nt(t),null;case 10:return Sn(t.type),nt(t),null;case 19:if(L(lt),a=t.memoizedState,a===null)return nt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)$r(a,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=qi(e),i!==null){for(t.flags|=128,$r(a,!1),e=i.updateQueue,t.updateQueue=e,is(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Pu(n,e),n=n.sibling;return ie(lt,lt.current&1|2),Ve&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xe()>us&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304)}else{if(!r)if(e=qi(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,is(t,e),$r(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ve)return nt(t),null}else 2*xe()-a.renderingStartTime>us&&n!==536870912&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xe(),e.sibling=null,n=lt.current,ie(lt,r?n&1|2:n&1),Ve&&bn(t,a.treeForkCount),e):(nt(t),null);case 22:case 23:return Bt(t),Gl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&is(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(ct),nt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function pg(e,t){switch(Il(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(ct),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return et(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(c(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(lt),null;case 4:return Se(),null;case 10:return Sn(t.type),null;case 22:case 23:return Bt(t),Gl(),e!==null&&L(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(ct),null;case 25:return null;default:return null}}function mf(e,t){switch(Il(t),t.tag){case 3:Sn(ct),Se();break;case 26:case 27:case 5:et(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:L(lt);break;case 10:Sn(t.type);break;case 22:case 23:Bt(t),Gl(),e!==null&&L(va);break;case 24:Sn(ct)}}function Gr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,h=n.inst;a=i(),h.destroy=a}n=n.next}while(n!==r)}}catch(N){Xe(t,t.return,N)}}function qn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var h=a.inst,N=h.destroy;if(N!==void 0){h.destroy=void 0,r=t;var M=n,W=N;try{W()}catch(le){Xe(r,M,le)}}}a=a.next}while(a!==i)}}catch(le){Xe(t,t.return,le)}}function gf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{id(t,n)}catch(a){Xe(e,e.return,a)}}}function yf(e,t,n){n.props=Aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Xe(e,t,a)}}function qr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Xe(e,t,r)}}function hn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Xe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Xe(e,t,r)}else n.current=null}function vf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Xe(e,e.return,r)}}function wo(e,t,n){try{var a=e.stateNode;zg(a,e.type,n,t),a[It]=t}catch(r){Xe(e,e.return,r)}}function bf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function _o(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function ss(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}function xf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Et(t,a,n),t[vt]=e,t[It]=n}catch(i){Xe(e,e.return,i)}}var Rn=!1,ft=!1,To=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,yt=null;function mg(e,t){if(e=e.containerInfo,Xo=Ts,e=Ou(e),bl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var h=0,N=-1,M=-1,W=0,le=0,fe=e,J=null;t:for(;;){for(var ne;fe!==n||r!==0&&fe.nodeType!==3||(N=h+r),fe!==i||a!==0&&fe.nodeType!==3||(M=h+a),fe.nodeType===3&&(h+=fe.nodeValue.length),(ne=fe.firstChild)!==null;)J=fe,fe=ne;for(;;){if(fe===e)break t;if(J===n&&++W===r&&(N=h),J===i&&++le===a&&(M=h),(ne=fe.nextSibling)!==null)break;fe=J,J=fe.parentNode}fe=ne}n=N===-1||M===-1?null:{start:N,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},Ts=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var Ee=Aa(n.type,r);e=a.getSnapshotBeforeUpdate(Ee,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){Xe(n,n.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ko(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ko(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function Ef(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),a&4&&Gr(5,n);break;case 1:if(Nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Xe(n,n.return,h)}else{var r=Aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Xe(n,n.return,h)}}a&64&&gf(n),a&512&&qr(n,n.return);break;case 3:if(Nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{id(e,t)}catch(h){Xe(n,n.return,h)}}break;case 27:t===null&&a&4&&xf(n);case 26:case 5:Nn(e,n),t===null&&a&4&&vf(n),a&512&&qr(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),a&4&&_f(e,n);break;case 13:Nn(e,n),a&4&&Rf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=wg.bind(null,n),$g(e,n))));break;case 22:if(a=n.memoizedState!==null||Rn,!a){t=t!==null&&t.memoizedState!==null||ft,r=Rn;var i=ft;Rn=a,(ft=t)&&!i?Cn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Rn=r,ft=i}break;case 30:break;default:Nn(e,n)}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,Ot=!1;function Tn(e,t,n){for(n=n.child;n!==null;)wf(e,t,n),n=n.sibling}function wf(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:ft||hn(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ft||hn(n,t);var a=at,r=Ot;Jn(n.type)&&(at=n.stateNode,Ot=!1),Tn(e,t,n),ti(n.stateNode),at=a,Ot=r;break;case 5:ft||hn(n,t);case 6:if(a=at,r=Ot,at=null,Tn(e,t,n),at=a,Ot=r,at!==null)if(Ot)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(i){Xe(n,t,i)}else try{at.removeChild(n.stateNode)}catch(i){Xe(n,t,i)}break;case 18:at!==null&&(Ot?(e=at,gh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),dr(e)):gh(at,n.stateNode));break;case 4:a=at,r=Ot,at=n.stateNode.containerInfo,Ot=!0,Tn(e,t,n),at=a,Ot=r;break;case 0:case 11:case 14:case 15:qn(2,n,t),ft||qn(4,n,t),Tn(e,t,n);break;case 1:ft||(hn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&yf(n,t,a)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:ft=(a=ft)||n.memoizedState!==null,Tn(e,t,n),ft=a;break;default:Tn(e,t,n)}}function _f(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dr(e)}catch(n){Xe(t,t.return,n)}}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dr(e)}catch(n){Xe(t,t.return,n)}}function gg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sf),t;default:throw Error(c(435,e.tag))}}function ls(e,t){var n=gg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=_g.bind(null,e,a);a.then(r,r)}})}function jt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,h=t,N=h;e:for(;N!==null;){switch(N.tag){case 27:if(Jn(N.type)){at=N.stateNode,Ot=!1;break e}break;case 5:at=N.stateNode,Ot=!1;break e;case 3:case 4:at=N.stateNode.containerInfo,Ot=!0;break e}N=N.return}if(at===null)throw Error(c(160));wf(i,h,r),at=null,Ot=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tf(t,e),t=t.sibling}var sn=null;function Tf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jt(t,e),kt(e),a&4&&(qn(3,e,e.return),Gr(3,e),qn(5,e,e.return));break;case 1:jt(t,e),kt(e),a&512&&(ft||n===null||hn(n,n.return)),a&64&&Rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=sn;if(jt(t,e),kt(e),a&512&&(ft||n===null||hn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[br]||i[vt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),Et(i,a,n),i[vt]=e,gt(i),a=i;break e;case"link":var h=Th("link","href",r).get(a+(n.href||""));if(h){for(var N=0;N<h.length;N++)if(i=h[N],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(N,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;case"meta":if(h=Th("meta","content",r).get(a+(n.content||""))){for(N=0;N<h.length;N++)if(i=h[N],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(N,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;default:throw Error(c(468,a))}i[vt]=e,gt(i),a=i}e.stateNode=a}else Nh(r,e.type,e.stateNode);else e.stateNode=Rh(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Nh(r,e.type,e.stateNode):Rh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&wo(e,e.memoizedProps,n.memoizedProps)}break;case 27:jt(t,e),kt(e),a&512&&(ft||n===null||hn(n,n.return)),n!==null&&a&4&&wo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(jt(t,e),kt(e),a&512&&(ft||n===null||hn(n,n.return)),e.flags&32){r=e.stateNode;try{ka(r,"")}catch(Ee){Xe(e,e.return,Ee)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,wo(e,r,n!==null?n.memoizedProps:r)),a&1024&&(To=!0);break;case 6:if(jt(t,e),kt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Ee){Xe(e,e.return,Ee)}}break;case 3:if(As=null,r=sn,sn=Ss(t.containerInfo),jt(t,e),sn=r,kt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(Ee){Xe(e,e.return,Ee)}To&&(To=!1,Nf(e));break;case 4:a=sn,sn=Ss(e.stateNode.containerInfo),jt(t,e),kt(e),sn=a;break;case 12:jt(t,e),kt(e);break;case 31:jt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ls(e,a)));break;case 13:jt(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(cs=xe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ls(e,a)));break;case 22:r=e.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,W=Rn,le=ft;if(Rn=W||r,ft=le||M,jt(t,e),ft=le,Rn=W,kt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||M||Rn||ft||wa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){M=n=t;try{if(i=M.stateNode,r)h=i.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{N=M.stateNode;var fe=M.memoizedProps.style,J=fe!=null&&fe.hasOwnProperty("display")?fe.display:null;N.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ee){Xe(M,M.return,Ee)}}}else if(t.tag===6){if(n===null){M=t;try{M.stateNode.nodeValue=r?"":M.memoizedProps}catch(Ee){Xe(M,M.return,Ee)}}}else if(t.tag===18){if(n===null){M=t;try{var ne=M.stateNode;r?yh(ne,!0):yh(M.stateNode,!1)}catch(Ee){Xe(M,M.return,Ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ls(e,n))));break;case 19:jt(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ls(e,a)));break;case 30:break;case 21:break;default:jt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(bf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,i=_o(e);ss(e,i,r);break;case 5:var h=n.stateNode;n.flags&32&&(ka(h,""),n.flags&=-33);var N=_o(e);ss(e,N,h);break;case 3:case 4:var M=n.stateNode.containerInfo,W=_o(e);Ro(e,W,M);break;default:throw Error(c(161))}}catch(le){Xe(e,e.return,le)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ef(e,t.alternate,t),t=t.sibling}function wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qn(4,t,t.return),wa(t);break;case 1:hn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&yf(t,t.return,n),wa(t);break;case 27:ti(t.stateNode);case 26:case 5:hn(t,t.return),wa(t);break;case 22:t.memoizedState===null&&wa(t);break;case 30:wa(t);break;default:wa(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,h=i.flags;switch(i.tag){case 0:case 11:case 15:Cn(r,i,n),Gr(4,i);break;case 1:if(Cn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(W){Xe(a,a.return,W)}if(a=i,r=a.updateQueue,r!==null){var N=a.stateNode;try{var M=r.shared.hiddenCallbacks;if(M!==null)for(r.shared.hiddenCallbacks=null,r=0;r<M.length;r++)rd(M[r],N)}catch(W){Xe(a,a.return,W)}}n&&h&64&&gf(i),qr(i,i.return);break;case 27:xf(i);case 26:case 5:Cn(r,i,n),n&&a===null&&h&4&&vf(i),qr(i,i.return);break;case 12:Cn(r,i,n);break;case 31:Cn(r,i,n),n&&h&4&&_f(r,i);break;case 13:Cn(r,i,n),n&&h&4&&Rf(r,i);break;case 22:i.memoizedState===null&&Cn(r,i,n),qr(i,i.return);break;case 30:break;default:Cn(r,i,n)}t=t.sibling}}function No(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Or(n))}function Co(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Or(e))}function ln(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cf(e,t,n,a),t=t.sibling}function Cf(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,a),r&2048&&Gr(9,t);break;case 1:ln(e,t,n,a);break;case 3:ln(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Or(e)));break;case 12:if(r&2048){ln(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,h=i.id,N=i.onPostCommit;typeof N=="function"&&N(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){Xe(t,t.return,M)}}else ln(e,t,n,a);break;case 31:ln(e,t,n,a);break;case 13:ln(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,h=t.alternate,t.memoizedState!==null?i._visibility&2?ln(e,t,n,a):Yr(e,t):i._visibility&2?ln(e,t,n,a):(i._visibility|=2,er(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&No(h,t);break;case 24:ln(e,t,n,a),r&2048&&Co(t.alternate,t);break;default:ln(e,t,n,a)}}function er(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,h=t,N=n,M=a,W=h.flags;switch(h.tag){case 0:case 11:case 15:er(i,h,N,M,r),Gr(8,h);break;case 23:break;case 22:var le=h.stateNode;h.memoizedState!==null?le._visibility&2?er(i,h,N,M,r):Yr(i,h):(le._visibility|=2,er(i,h,N,M,r)),r&&W&2048&&No(h.alternate,h);break;case 24:er(i,h,N,M,r),r&&W&2048&&Co(h.alternate,h);break;default:er(i,h,N,M,r)}t=t.sibling}}function Yr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Yr(n,a),r&2048&&No(a.alternate,a);break;case 24:Yr(n,a),r&2048&&Co(a.alternate,a);break;default:Yr(n,a)}t=t.sibling}}var Xr=8192;function tr(e,t,n){if(e.subtreeFlags&Xr)for(e=e.child;e!==null;)If(e,t,n),e=e.sibling}function If(e,t,n){switch(e.tag){case 26:tr(e,t,n),e.flags&Xr&&e.memoizedState!==null&&n0(n,sn,e.memoizedState,e.memoizedProps);break;case 5:tr(e,t,n);break;case 3:case 4:var a=sn;sn=Ss(e.stateNode.containerInfo),tr(e,t,n),sn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Xr,Xr=16777216,tr(e,t,n),Xr=a):tr(e,t,n));break;default:tr(e,t,n)}}function Df(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,jf(a,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Of(e),e=e.sibling}function Of(e){switch(e.tag){case 0:case 11:case 15:Qr(e),e.flags&2048&&qn(9,e,e.return);break;case 3:Qr(e);break;case 12:Qr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,os(e)):Qr(e);break;default:Qr(e)}}function os(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,jf(a,e)}Df(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),os(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,os(t));break;default:os(t)}e=e.sibling}}function jf(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Or(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,yt=a;else e:for(n=e;yt!==null;){a=yt;var r=a.sibling,i=a.return;if(Af(a),a===n){yt=null;break e}if(r!==null){r.return=i,yt=r;break e}yt=i}}}var yg={getCacheForType:function(e){var t=xt(ct),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xt(ct).controller.signal}},vg=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Je=null,Me=null,Fe=0,Ye=0,Pt=null,Yn=!1,nr=!1,Io=!1,In=0,st=0,Xn=0,_a=0,Do=0,Vt=0,ar=0,Zr=null,Lt=null,Oo=!1,cs=0,kf=0,us=1/0,ds=null,Qn=null,ht=0,Zn=null,rr=null,Dn=0,jo=0,ko=null,Lf=null,Wr=0,Lo=null;function Ht(){return(Ge&2)!==0&&Fe!==0?Fe&-Fe:B.T!==null?Po():Zc()}function zf(){if(Vt===0)if((Fe&536870912)===0||Ve){var e=oa;oa<<=1,(oa&3932160)===0&&(oa=262144),Vt=e}else Vt=536870912;return e=Ft.current,e!==null&&(e.flags|=32),Vt}function zt(e,t,n){(e===Je&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(ir(e,0),Wn(e,Fe,Vt,!1)),vr(e,n),((Ge&2)===0||e!==Je)&&(e===Je&&((Ge&2)===0&&(_a|=n),st===4&&Wn(e,Fe,Vt,!1)),pn(e))}function Mf(e,t,n){if((Ge&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||yr(e,t),r=a?Sg(e,t):Mo(e,t,!0),i=a;do{if(r===0){nr&&!a&&Wn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!bg(n)){r=Mo(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var N=e;r=Zr;var M=N.current.memoizedState.isDehydrated;if(M&&(ir(N,h).flags|=256),h=Mo(N,h,!1),h!==2){if(Io&&!M){N.errorRecoveryDisabledLanes|=i,_a|=i,r=4;break e}i=Lt,Lt=r,i!==null&&(Lt===null?Lt=i:Lt.push.apply(Lt,i))}r=h}if(i=!1,r!==2)continue}}if(r===1){ir(e,0),Wn(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Wn(a,t,Vt,!Yn);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=cs+300-xe(),10<r)){if(Wn(a,t,Vt,!Yn),Si(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=ph(Uf.bind(null,a,n,Lt,ds,Oo,t,Vt,_a,ar,Yn,i,"Throttled",-0,0),r);break e}Uf(a,n,Lt,ds,Oo,t,Vt,_a,ar,Yn,i,null,-0,0)}}break}while(!0);pn(e)}function Uf(e,t,n,a,r,i,h,N,M,W,le,fe,J,ne){if(e.timeoutHandle=-1,fe=t.subtreeFlags,fe&8192||(fe&16785408)===16785408){fe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},If(t,i,fe);var Ee=(i&62914560)===i?cs-xe():(i&4194048)===i?kf-xe():0;if(Ee=a0(fe,Ee),Ee!==null){Dn=i,e.cancelPendingCommit=Ee(qf.bind(null,e,t,i,n,a,r,h,N,M,le,fe,null,J,ne)),Wn(e,i,h,!W);return}}qf(e,t,i,n,a,r,h,N,M)}function bg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!Mt(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t,n,a){t&=~Do,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-rt(r),h=1<<i;a[i]=-1,r&=~h}n!==0&&Yc(e,n,t)}function fs(){return(Ge&6)===0?(Kr(0),!1):!0}function zo(){if(Me!==null){if(Ye===0)var e=Me.return;else e=Me,xn=ga=null,Wl(e),Qa=null,kr=0,e=Me;for(;e!==null;)mf(e.alternate,e),e=e.return;Me=null}}function ir(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Fg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,zo(),Je=e,Me=n=vn(e.current,null),Fe=t,Ye=0,Pt=null,Yn=!1,nr=yr(e,t),Io=!1,ar=Vt=Do=_a=Xn=st=0,Lt=Zr=null,Oo=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-rt(a),i=1<<r;t|=e[r],a&=~i}return In=t,ji(),n}function Ff(e,t){je=null,B.H=Vr,t===Xa||t===Pi?(t=ed(),Ye=3):t===Fl?(t=ed(),Ye=4):Ye=t===po?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pt=t,Me===null&&(st=1,ts(e,Zt(t,e.current)))}function Bf(){var e=Ft.current;return e===null?!0:(Fe&4194048)===Fe?en===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===en:!1}function Pf(){var e=B.H;return B.H=Vr,e===null?Vr:e}function Vf(){var e=B.A;return B.A=yg,e}function hs(){st=4,Yn||(Fe&4194048)!==Fe&&Ft.current!==null||(nr=!0),(Xn&134217727)===0&&(_a&134217727)===0||Je===null||Wn(Je,Fe,Vt,!1)}function Mo(e,t,n){var a=Ge;Ge|=2;var r=Pf(),i=Vf();(Je!==e||Fe!==t)&&(ds=null,ir(e,t)),t=!1;var h=st;e:do try{if(Ye!==0&&Me!==null){var N=Me,M=Pt;switch(Ye){case 8:zo(),h=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var W=Ye;if(Ye=0,Pt=null,sr(e,N,M,W),n&&nr){h=0;break e}break;default:W=Ye,Ye=0,Pt=null,sr(e,N,M,W)}}xg(),h=st;break}catch(le){Ff(e,le)}while(!0);return t&&e.shellSuspendCounter++,xn=ga=null,Ge=a,B.H=r,B.A=i,Me===null&&(Je=null,Fe=0,ji()),h}function xg(){for(;Me!==null;)Hf(Me)}function Sg(e,t){var n=Ge;Ge|=2;var a=Pf(),r=Vf();Je!==e||Fe!==t?(ds=null,us=xe()+500,ir(e,t)):nr=yr(e,t);e:do try{if(Ye!==0&&Me!==null){t=Me;var i=Pt;t:switch(Ye){case 1:Ye=0,Pt=null,sr(e,t,i,1);break;case 2:case 9:if(Ku(i)){Ye=0,Pt=null,$f(t);break}t=function(){Ye!==2&&Ye!==9||Je!==e||(Ye=7),pn(e)},i.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Ku(i)?(Ye=0,Pt=null,$f(t)):(Ye=0,Pt=null,sr(e,t,i,7));break;case 5:var h=null;switch(Me.tag){case 26:h=Me.memoizedState;case 5:case 27:var N=Me;if(h?Ch(h):N.stateNode.complete){Ye=0,Pt=null;var M=N.sibling;if(M!==null)Me=M;else{var W=N.return;W!==null?(Me=W,ps(W)):Me=null}break t}}Ye=0,Pt=null,sr(e,t,i,5);break;case 6:Ye=0,Pt=null,sr(e,t,i,6);break;case 8:zo(),st=6;break e;default:throw Error(c(462))}}Eg();break}catch(le){Ff(e,le)}while(!0);return xn=ga=null,B.H=a,B.A=r,Ge=n,Me!==null?0:(Je=null,Fe=0,ji(),st)}function Eg(){for(;Me!==null&&!K();)Hf(Me)}function Hf(e){var t=hf(e.alternate,e,In);e.memoizedProps=e.pendingProps,t===null?ps(e):Me=t}function $f(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=lf(n,t,t.pendingProps,t.type,void 0,Fe);break;case 11:t=lf(n,t,t.pendingProps,t.type.render,t.ref,Fe);break;case 5:Wl(t);default:mf(n,t),t=Me=Pu(t,In),t=hf(n,t,In)}e.memoizedProps=e.pendingProps,t===null?ps(e):Me=t}function sr(e,t,n,a){xn=ga=null,Wl(t),Qa=null,kr=0;var r=t.return;try{if(ug(e,r,t,n,Fe)){st=1,ts(e,Zt(n,e.current)),Me=null;return}}catch(i){if(r!==null)throw Me=r,i;st=1,ts(e,Zt(n,e.current)),Me=null;return}t.flags&32768?(Ve||a===1?e=!0:nr||(Fe&536870912)!==0?e=!1:(Yn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),Gf(t,e)):ps(t)}function ps(e){var t=e;do{if((t.flags&32768)!==0){Gf(t,Yn);return}e=t.return;var n=hg(t.alternate,t,In);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);st===0&&(st=5)}function Gf(e,t){do{var n=pg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);st=6,Me=null}function qf(e,t,n,a,r,i,h,N,M){e.cancelPendingCommit=null;do ms();while(ht!==0);if((Ge&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=wl,tm(e,n,i,h,N,M),e===Je&&(Me=Je=null,Fe=0),rr=t,Zn=e,Dn=n,jo=i,ko=r,Lf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rg(Le,function(){return Wf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,r=V.p,V.p=2,h=Ge,Ge|=4;try{mg(e,t,n)}finally{Ge=h,V.p=r,B.T=a}}ht=1,Yf(),Xf(),Qf()}}function Yf(){if(ht===1){ht=0;var e=Zn,t=rr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var r=Ge;Ge|=4;try{Tf(t,e);var i=Qo,h=Ou(e.containerInfo),N=i.focusedElem,M=i.selectionRange;if(h!==N&&N&&N.ownerDocument&&Du(N.ownerDocument.documentElement,N)){if(M!==null&&bl(N)){var W=M.start,le=M.end;if(le===void 0&&(le=W),"selectionStart"in N)N.selectionStart=W,N.selectionEnd=Math.min(le,N.value.length);else{var fe=N.ownerDocument||document,J=fe&&fe.defaultView||window;if(J.getSelection){var ne=J.getSelection(),Ee=N.textContent.length,Ce=Math.min(M.start,Ee),We=M.end===void 0?Ce:Math.min(M.end,Ee);!ne.extend&&Ce>We&&(h=We,We=Ce,Ce=h);var Y=Iu(N,Ce),P=Iu(N,We);if(Y&&P&&(ne.rangeCount!==1||ne.anchorNode!==Y.node||ne.anchorOffset!==Y.offset||ne.focusNode!==P.node||ne.focusOffset!==P.offset)){var Z=fe.createRange();Z.setStart(Y.node,Y.offset),ne.removeAllRanges(),Ce>We?(ne.addRange(Z),ne.extend(P.node,P.offset)):(Z.setEnd(P.node,P.offset),ne.addRange(Z))}}}}for(fe=[],ne=N;ne=ne.parentNode;)ne.nodeType===1&&fe.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<fe.length;N++){var ce=fe[N];ce.element.scrollLeft=ce.left,ce.element.scrollTop=ce.top}}Ts=!!Xo,Qo=Xo=null}finally{Ge=r,V.p=a,B.T=n}}e.current=t,ht=2}}function Xf(){if(ht===2){ht=0;var e=Zn,t=rr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var r=Ge;Ge|=4;try{Ef(e,t.alternate,t)}finally{Ge=r,V.p=a,B.T=n}}ht=3}}function Qf(){if(ht===4||ht===3){ht=0,ye();var e=Zn,t=rr,n=Dn,a=Lf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,rr=Zn=null,Zf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Qn=null),el(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,r=V.p,V.p=2,B.T=null;try{for(var i=e.onRecoverableError,h=0;h<a.length;h++){var N=a[h];i(N.value,{componentStack:N.stack})}}finally{B.T=t,V.p=r}}(Dn&3)!==0&&ms(),pn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Lo?Wr++:(Wr=0,Lo=e):Wr=0,Kr(0)}}function Zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Or(t)))}function ms(){return Yf(),Xf(),Qf(),Wf()}function Wf(){if(ht!==5)return!1;var e=Zn,t=jo;jo=0;var n=el(Dn),a=B.T,r=V.p;try{V.p=32>n?32:n,B.T=null,n=ko,ko=null;var i=Zn,h=Dn;if(ht=0,rr=Zn=null,Dn=0,(Ge&6)!==0)throw Error(c(331));var N=Ge;if(Ge|=4,Of(i.current),Cf(i,i.current,h,n),Ge=N,Kr(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ke,i)}catch{}return!0}finally{V.p=r,B.T=a,Zf(e,t)}}function Kf(e,t,n){t=Zt(n,t),t=ho(e.stateNode,t,2),e=Hn(e,t,2),e!==null&&(vr(e,2),pn(e))}function Xe(e,t,n){if(e.tag===3)Kf(e,e,n);else for(;t!==null;){if(t.tag===3){Kf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Qn===null||!Qn.has(a))){e=Zt(n,e),n=Kd(2),a=Hn(t,n,2),a!==null&&(Jd(n,a,t,e),vr(a,2),pn(a));break}}t=t.return}}function Uo(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new vg;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Io=!0,r.add(n),e=Ag.bind(null,e,t,n),t.then(e,e))}function Ag(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Je===e&&(Fe&n)===n&&(st===4||st===3&&(Fe&62914560)===Fe&&300>xe()-cs?(Ge&2)===0&&ir(e,0):Do|=n,ar===Fe&&(ar=0)),pn(e)}function Jf(e,t){t===0&&(t=qc()),e=ha(e,t),e!==null&&(vr(e,t),pn(e))}function wg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jf(e,n)}function _g(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Jf(e,n)}function Rg(e,t){return he(e,t)}var gs=null,lr=null,Fo=!1,ys=!1,Bo=!1,Kn=0;function pn(e){e!==lr&&e.next===null&&(lr===null?gs=lr=e:lr=lr.next=e),ys=!0,Fo||(Fo=!0,Ng())}function Kr(e,t){if(!Bo&&ys){Bo=!0;do for(var n=!1,a=gs;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var h=a.suspendedLanes,N=a.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=r&~(h&~N),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,ah(a,i))}else i=Fe,i=Si(a,a===Je?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||yr(a,i)||(n=!0,ah(a,i));a=a.next}while(n);Bo=!1}}function Tg(){eh()}function eh(){ys=Fo=!1;var e=0;Kn!==0&&Ug()&&(e=Kn);for(var t=xe(),n=null,a=gs;a!==null;){var r=a.next,i=th(a,t);i===0?(a.next=null,n===null?gs=r:n.next=r,r===null&&(lr=n)):(n=a,(e!==0||(i&3)!==0)&&(ys=!0)),a=r}ht!==0&&ht!==5||Kr(e),Kn!==0&&(Kn=0)}function th(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var h=31-rt(i),N=1<<h,M=r[h];M===-1?((N&n)===0||(N&a)!==0)&&(r[h]=em(N,t)):M<=t&&(e.expiredLanes|=N),i&=~N}if(t=Je,n=Fe,n=Si(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&pe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&pe(a),el(n)){case 2:case 8:n=qe;break;case 32:n=Le;break;case 268435456:n=kn;break;default:n=Le}return a=nh.bind(null,e),n=he(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&pe(a),e.callbackPriority=2,e.callbackNode=null,2}function nh(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ms()&&e.callbackNode!==n)return null;var a=Fe;return a=Si(e,e===Je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Mf(e,a,t),th(e,xe()),e.callbackNode!=null&&e.callbackNode===n?nh.bind(null,e):null)}function ah(e,t){if(ms())return null;Mf(e,t,!0)}function Ng(){Bg(function(){(Ge&6)!==0?he(_e,Tg):eh()})}function Po(){if(Kn===0){var e=qa;e===0&&(e=Ta,Ta<<=1,(Ta&261888)===0&&(Ta=256)),Kn=e}return Kn}function rh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_i(""+e)}function ih(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Cg(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=rh((r[It]||null).action),h=a.submitter;h&&(t=(t=h[It]||null)?rh(t.formAction):h.getAttribute("formAction"),t!==null&&(i=t,h=null));var N=new Ci("action","action",null,a,r);e.push({event:N,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kn!==0){var M=h?ih(r,h):new FormData(r);so(n,{pending:!0,data:M,method:r.method,action:i},null,M)}}else typeof i=="function"&&(N.preventDefault(),M=h?ih(r,h):new FormData(r),so(n,{pending:!0,data:M,method:r.method,action:i},i,M))},currentTarget:r}]})}}for(var Vo=0;Vo<Al.length;Vo++){var Ho=Al[Vo],Ig=Ho.toLowerCase(),Dg=Ho[0].toUpperCase()+Ho.slice(1);rn(Ig,"on"+Dg)}rn(Lu,"onAnimationEnd"),rn(zu,"onAnimationIteration"),rn(Mu,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Ym,"onTransitionRun"),rn(Xm,"onTransitionStart"),rn(Qm,"onTransitionCancel"),rn(Uu,"onTransitionEnd"),Oa("onMouseEnter",["mouseout","mouseover"]),Oa("onMouseLeave",["mouseout","mouseover"]),Oa("onPointerEnter",["pointerout","pointerover"]),Oa("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jr));function sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var h=a.length-1;0<=h;h--){var N=a[h],M=N.instance,W=N.currentTarget;if(N=N.listener,M!==i&&r.isPropagationStopped())break e;i=N,r.currentTarget=W;try{i(r)}catch(le){Oi(le)}r.currentTarget=null,i=M}else for(h=0;h<a.length;h++){if(N=a[h],M=N.instance,W=N.currentTarget,N=N.listener,M!==i&&r.isPropagationStopped())break e;i=N,r.currentTarget=W;try{i(r)}catch(le){Oi(le)}r.currentTarget=null,i=M}}}}function Ue(e,t){var n=t[tl];n===void 0&&(n=t[tl]=new Set);var a=e+"__bubble";n.has(a)||(lh(t,e,2,!1),n.add(a))}function $o(e,t,n){var a=0;t&&(a|=4),lh(n,e,a,t)}var vs="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[vs]){e[vs]=!0,Jc.forEach(function(n){n!=="selectionchange"&&(Og.has(n)||$o(n,!1,e),$o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vs]||(t[vs]=!0,$o("selectionchange",!1,t))}}function lh(e,t,n,a){switch(zh(t)){case 2:var r=s0;break;case 8:r=l0;break;default:r=sc}n=r.bind(null,t,n,e),r=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function qo(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var N=a.stateNode.containerInfo;if(N===r)break;if(h===4)for(h=a.return;h!==null;){var M=h.tag;if((M===3||M===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;N!==null;){if(h=Ca(N),h===null)return;if(M=h.tag,M===5||M===6||M===26||M===27){a=i=h;continue e}N=N.parentNode}}a=a.return}du(function(){var W=i,le=ol(n),fe=[];e:{var J=Fu.get(e);if(J!==void 0){var ne=Ci,Ee=e;switch(e){case"keypress":if(Ti(n)===0)break e;case"keydown":case"keyup":ne=_m;break;case"focusin":Ee="focus",ne=pl;break;case"focusout":Ee="blur",ne=pl;break;case"beforeblur":case"afterblur":ne=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Nm;break;case Lu:case zu:case Mu:ne=gm;break;case Uu:ne=Im;break;case"scroll":case"scrollend":ne=dm;break;case"wheel":ne=Om;break;case"copy":case"cut":case"paste":ne=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=gu;break;case"toggle":case"beforetoggle":ne=km}var Ce=(t&4)!==0,We=!Ce&&(e==="scroll"||e==="scrollend"),Y=Ce?J!==null?J+"Capture":null:J;Ce=[];for(var P=W,Z;P!==null;){var ce=P;if(Z=ce.stateNode,ce=ce.tag,ce!==5&&ce!==26&&ce!==27||Z===null||Y===null||(ce=Sr(P,Y),ce!=null&&Ce.push(ei(P,ce,Z))),We)break;P=P.return}0<Ce.length&&(J=new ne(J,Ee,null,n,le),fe.push({event:J,listeners:Ce}))}}if((t&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",J&&n!==ll&&(Ee=n.relatedTarget||n.fromElement)&&(Ca(Ee)||Ee[Na]))break e;if((ne||J)&&(J=le.window===le?le:(J=le.ownerDocument)?J.defaultView||J.parentWindow:window,ne?(Ee=n.relatedTarget||n.toElement,ne=W,Ee=Ee?Ca(Ee):null,Ee!==null&&(We=f(Ee),Ce=Ee.tag,Ee!==We||Ce!==5&&Ce!==27&&Ce!==6)&&(Ee=null)):(ne=null,Ee=W),ne!==Ee)){if(Ce=pu,ce="onMouseLeave",Y="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=gu,ce="onPointerLeave",Y="onPointerEnter",P="pointer"),We=ne==null?J:xr(ne),Z=Ee==null?J:xr(Ee),J=new Ce(ce,P+"leave",ne,n,le),J.target=We,J.relatedTarget=Z,ce=null,Ca(le)===W&&(Ce=new Ce(Y,P+"enter",Ee,n,le),Ce.target=Z,Ce.relatedTarget=We,ce=Ce),We=ce,ne&&Ee)t:{for(Ce=jg,Y=ne,P=Ee,Z=0,ce=Y;ce;ce=Ce(ce))Z++;ce=0;for(var Re=P;Re;Re=Ce(Re))ce++;for(;0<Z-ce;)Y=Ce(Y),Z--;for(;0<ce-Z;)P=Ce(P),ce--;for(;Z--;){if(Y===P||P!==null&&Y===P.alternate){Ce=Y;break t}Y=Ce(Y),P=Ce(P)}Ce=null}else Ce=null;ne!==null&&oh(fe,J,ne,Ce,!1),Ee!==null&&We!==null&&oh(fe,We,Ee,Ce,!0)}}e:{if(J=W?xr(W):window,ne=J.nodeName&&J.nodeName.toLowerCase(),ne==="select"||ne==="input"&&J.type==="file")var He=wu;else if(Eu(J))if(_u)He=$m;else{He=Vm;var we=Pm}else ne=J.nodeName,!ne||ne.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?W&&sl(W.elementType)&&(He=wu):He=Hm;if(He&&(He=He(e,W))){Au(fe,He,n,le);break e}we&&we(e,J,W),e==="focusout"&&W&&J.type==="number"&&W.memoizedProps.value!=null&&il(J,"number",J.value)}switch(we=W?xr(W):window,e){case"focusin":(Eu(we)||we.contentEditable==="true")&&(Ua=we,xl=W,Cr=null);break;case"focusout":Cr=xl=Ua=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,ju(fe,n,le);break;case"selectionchange":if(qm)break;case"keydown":case"keyup":ju(fe,n,le)}var ke;if(gl)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else Ma?xu(e,n)&&(Be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Be="onCompositionStart");Be&&(yu&&n.locale!=="ko"&&(Ma||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&Ma&&(ke=fu()):(zn=le,dl="value"in zn?zn.value:zn.textContent,Ma=!0)),we=bs(W,Be),0<we.length&&(Be=new mu(Be,e,null,n,le),fe.push({event:Be,listeners:we}),ke?Be.data=ke:(ke=Su(n),ke!==null&&(Be.data=ke)))),(ke=zm?Mm(e,n):Um(e,n))&&(Be=bs(W,"onBeforeInput"),0<Be.length&&(we=new mu("onBeforeInput","beforeinput",null,n,le),fe.push({event:we,listeners:Be}),we.data=ke)),Cg(fe,e,W,n,le)}sh(fe,t)})}function ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bs(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Sr(e,n),r!=null&&a.unshift(ei(e,r,i)),r=Sr(e,t),r!=null&&a.push(ei(e,r,i))),e.tag===3)return a;e=e.return}return[]}function jg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function oh(e,t,n,a,r){for(var i=t._reactName,h=[];n!==null&&n!==a;){var N=n,M=N.alternate,W=N.stateNode;if(N=N.tag,M!==null&&M===a)break;N!==5&&N!==26&&N!==27||W===null||(M=W,r?(W=Sr(n,i),W!=null&&h.unshift(ei(n,W,M))):r||(W=Sr(n,i),W!=null&&h.push(ei(n,W,M)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var kg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function ch(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Lg,"")}function uh(e,t){return t=ch(t),ch(e)===t}function Ze(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ka(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ka(e,""+a);break;case"className":Ai(e,"class",a);break;case"tabIndex":Ai(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(e,n,a);break;case"style":cu(e,a,i);break;case"data":if(t!=="object"){Ai(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=_i(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",r.name,r,null),Ze(e,t,"formEncType",r.formEncType,r,null),Ze(e,t,"formMethod",r.formMethod,r,null),Ze(e,t,"formTarget",r.formTarget,r,null)):(Ze(e,t,"encType",r.encType,r,null),Ze(e,t,"method",r.method,r,null),Ze(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=_i(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=_i(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),Ei(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ei(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=cm.get(n)||n,Ei(e,n,a))}}function Yo(e,t,n,a,r,i){switch(n){case"style":cu(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ka(e,a):(typeof a=="number"||typeof a=="bigint")&&ka(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!eu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[It]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ei(e,n,a)}}}function Et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,i,h,n,null)}}r&&Ze(e,t,"srcSet",n.srcSet,n,null),a&&Ze(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var N=i=h=r=null,M=null,W=null;for(a in n)if(n.hasOwnProperty(a)){var le=n[a];if(le!=null)switch(a){case"name":r=le;break;case"type":h=le;break;case"checked":M=le;break;case"defaultChecked":W=le;break;case"value":i=le;break;case"defaultValue":N=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(c(137,t));break;default:Ze(e,t,a,le,n,null)}}iu(e,i,N,M,W,h,r,!1);return;case"select":Ue("invalid",e),a=h=i=null;for(r in n)if(n.hasOwnProperty(r)&&(N=n[r],N!=null))switch(r){case"value":i=N;break;case"defaultValue":h=N;break;case"multiple":a=N;default:Ze(e,t,r,N,n,null)}t=i,n=h,e.multiple=!!a,t!=null?ja(e,!!a,t,!1):n!=null&&ja(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=r=a=null;for(h in n)if(n.hasOwnProperty(h)&&(N=n[h],N!=null))switch(h){case"value":a=N;break;case"defaultValue":r=N;break;case"children":i=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(91));break;default:Ze(e,t,h,N,n,null)}lu(e,a,r,i);return;case"option":for(M in n)if(n.hasOwnProperty(M)&&(a=n[M],a!=null))switch(M){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ze(e,t,M,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Jr.length;a++)Ue(Jr[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in n)if(n.hasOwnProperty(W)&&(a=n[W],a!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,W,a,n,null)}return;default:if(sl(t)){for(le in n)n.hasOwnProperty(le)&&(a=n[le],a!==void 0&&Yo(e,t,le,a,n,void 0));return}}for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!=null&&Ze(e,t,N,a,n,null))}function zg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,h=null,N=null,M=null,W=null,le=null;for(ne in n){var fe=n[ne];if(n.hasOwnProperty(ne)&&fe!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":M=fe;default:a.hasOwnProperty(ne)||Ze(e,t,ne,null,a,fe)}}for(var J in a){var ne=a[J];if(fe=n[J],a.hasOwnProperty(J)&&(ne!=null||fe!=null))switch(J){case"type":i=ne;break;case"name":r=ne;break;case"checked":W=ne;break;case"defaultChecked":le=ne;break;case"value":h=ne;break;case"defaultValue":N=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(c(137,t));break;default:ne!==fe&&Ze(e,t,J,ne,a,fe)}}rl(e,h,N,M,W,le,i,r);return;case"select":ne=h=N=J=null;for(i in n)if(M=n[i],n.hasOwnProperty(i)&&M!=null)switch(i){case"value":break;case"multiple":ne=M;default:a.hasOwnProperty(i)||Ze(e,t,i,null,a,M)}for(r in a)if(i=a[r],M=n[r],a.hasOwnProperty(r)&&(i!=null||M!=null))switch(r){case"value":J=i;break;case"defaultValue":N=i;break;case"multiple":h=i;default:i!==M&&Ze(e,t,r,i,a,M)}t=N,n=h,a=ne,J!=null?ja(e,!!n,J,!1):!!a!=!!n&&(t!=null?ja(e,!!n,t,!0):ja(e,!!n,n?[]:"",!1));return;case"textarea":ne=J=null;for(N in n)if(r=n[N],n.hasOwnProperty(N)&&r!=null&&!a.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ze(e,t,N,null,a,r)}for(h in a)if(r=a[h],i=n[h],a.hasOwnProperty(h)&&(r!=null||i!=null))switch(h){case"value":J=r;break;case"defaultValue":ne=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&Ze(e,t,h,r,a,i)}su(e,J,ne);return;case"option":for(var Ee in n)if(J=n[Ee],n.hasOwnProperty(Ee)&&J!=null&&!a.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:Ze(e,t,Ee,null,a,J)}for(M in a)if(J=a[M],ne=n[M],a.hasOwnProperty(M)&&J!==ne&&(J!=null||ne!=null))switch(M){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Ze(e,t,M,J,a,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in n)J=n[Ce],n.hasOwnProperty(Ce)&&J!=null&&!a.hasOwnProperty(Ce)&&Ze(e,t,Ce,null,a,J);for(W in a)if(J=a[W],ne=n[W],a.hasOwnProperty(W)&&J!==ne&&(J!=null||ne!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(c(137,t));break;default:Ze(e,t,W,J,a,ne)}return;default:if(sl(t)){for(var We in n)J=n[We],n.hasOwnProperty(We)&&J!==void 0&&!a.hasOwnProperty(We)&&Yo(e,t,We,void 0,a,J);for(le in a)J=a[le],ne=n[le],!a.hasOwnProperty(le)||J===ne||J===void 0&&ne===void 0||Yo(e,t,le,J,a,ne);return}}for(var Y in n)J=n[Y],n.hasOwnProperty(Y)&&J!=null&&!a.hasOwnProperty(Y)&&Ze(e,t,Y,null,a,J);for(fe in a)J=a[fe],ne=n[fe],!a.hasOwnProperty(fe)||J===ne||J==null&&ne==null||Ze(e,t,fe,J,a,ne)}function dh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,h=r.initiatorType,N=r.duration;if(i&&N&&dh(h)){for(h=0,N=r.responseEnd,a+=1;a<n.length;a++){var M=n[a],W=M.startTime;if(W>N)break;var le=M.transferSize,fe=M.initiatorType;le&&dh(fe)&&(M=M.responseEnd,h+=le*(M<N?1:(N-W)/(M-W)))}if(--a,t+=8*(i+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xo=null,Qo=null;function xs(e){return e.nodeType===9?e:e.ownerDocument}function fh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wo=null;function Ug(){var e=window.event;return e&&e.type==="popstate"?e===Wo?!1:(Wo=e,!0):(Wo=null,!1)}var ph=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(e){return mh.resolve(null).then(e).catch(Pg)}:ph;function Pg(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function gh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),dr(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ti(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ti(n);for(var i=n.firstChild;i;){var h=i.nextSibling,N=i.nodeName;i[br]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=h}}else n==="body"&&ti(e.ownerDocument.body);n=r}while(n);dr(t)}function yh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ko(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ko(n),nl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vg(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[br])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function Hg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function vh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tn(e.nextSibling),e===null))return null;return e}function Jo(e){return e.data==="$?"||e.data==="$~"}function ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $g(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var tc=null;function bh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Sh(e,t,n){switch(t=xs(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ti(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nl(e)}var nn=new Map,Eh=new Set;function Ss(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=V.d;V.d={f:Gg,r:qg,D:Yg,C:Xg,L:Qg,m:Zg,X:Kg,S:Wg,M:Jg};function Gg(){var e=On.f(),t=fs();return e||t}function qg(e){var t=Ia(e);t!==null&&t.tag===5&&t.type==="form"?Ud(t):On.r(e)}var or=typeof document>"u"?null:document;function Ah(e,t,n){var a=or;if(a&&typeof t=="string"&&t){var r=Xt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Eh.has(r)||(Eh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function Yg(e){On.D(e),Ah("dns-prefetch",e,null)}function Xg(e,t){On.C(e,t),Ah("preconnect",e,t)}function Qg(e,t,n){On.L(e,t,n);var a=or;if(a&&e&&t){var r='link[rel="preload"][as="'+Xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Xt(n.imageSizes)+'"]')):r+='[href="'+Xt(e)+'"]';var i=r;switch(t){case"style":i=cr(e);break;case"script":i=ur(e)}nn.has(i)||(e=A({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nn.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(ni(i))||t==="script"&&a.querySelector(ai(i))||(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function Zg(e,t){On.m(e,t);var n=or;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Xt(a)+'"][href="'+Xt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ur(e)}if(!nn.has(i)&&(e=A({rel:"modulepreload",href:e},t),nn.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ai(i)))return}a=n.createElement("link"),Et(a,"link",e),gt(a),n.head.appendChild(a)}}}function Wg(e,t,n){On.S(e,t,n);var a=or;if(a&&e){var r=Da(a).hoistableStyles,i=cr(e);t=t||"default";var h=r.get(i);if(!h){var N={loading:0,preload:null};if(h=a.querySelector(ni(i)))N.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nn.get(i))&&nc(e,n);var M=h=a.createElement("link");gt(M),Et(M,"link",e),M._p=new Promise(function(W,le){M.onload=W,M.onerror=le}),M.addEventListener("load",function(){N.loading|=1}),M.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Es(h,t,a)}h={type:"stylesheet",instance:h,count:1,state:N},r.set(i,h)}}}function Kg(e,t){On.X(e,t);var n=or;if(n&&e){var a=Da(n).hoistableScripts,r=ur(e),i=a.get(r);i||(i=n.querySelector(ai(r)),i||(e=A({src:e,async:!0},t),(t=nn.get(r))&&ac(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function Jg(e,t){On.M(e,t);var n=or;if(n&&e){var a=Da(n).hoistableScripts,r=ur(e),i=a.get(r);i||(i=n.querySelector(ai(r)),i||(e=A({src:e,async:!0,type:"module"},t),(t=nn.get(r))&&ac(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function wh(e,t,n,a){var r=(r=Ae.current)?Ss(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=cr(n.href),n=Da(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=cr(n.href);var i=Da(r).hoistableStyles,h=i.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,h),(i=r.querySelector(ni(e)))&&!i._p&&(h.instance=i,h.state.loading=5),nn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(e,n),i||e0(r,e,n,h.state))),t&&a===null)throw Error(c(528,""));return h}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ur(n),n=Da(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function cr(e){return'href="'+Xt(e)+'"'}function ni(e){return'link[rel="stylesheet"]['+e+"]"}function _h(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function e0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Et(t,"link",n),gt(t),e.head.appendChild(t))}function ur(e){return'[src="'+Xt(e)+'"]'}function ai(e){return"script[async]"+e}function Rh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Xt(n.href)+'"]');if(a)return t.instance=a,gt(a),a;var r=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),gt(a),Et(a,"style",r),Es(a,n.precedence,e),t.instance=a;case"stylesheet":r=cr(n.href);var i=e.querySelector(ni(r));if(i)return t.state.loading|=4,t.instance=i,gt(i),i;a=_h(n),(r=nn.get(r))&&nc(a,r),i=(e.ownerDocument||e).createElement("link"),gt(i);var h=i;return h._p=new Promise(function(N,M){h.onload=N,h.onerror=M}),Et(i,"link",a),t.state.loading|=4,Es(i,n.precedence,e),t.instance=i;case"script":return i=ur(n.src),(r=e.querySelector(ai(i)))?(t.instance=r,gt(r),r):(a=n,(r=nn.get(i))&&(a=A({},n),ac(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),gt(r),Et(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Es(a,n.precedence,e));return t.instance}function Es(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,h=0;h<a.length;h++){var N=a[h];if(N.dataset.precedence===t)i=N;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var As=null;function Th(e,t,n){if(As===null){var a=new Map,r=As=new Map;r.set(n,a)}else r=As,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[br]||i[vt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var h=i.getAttribute(t)||"";h=e+h;var N=a.get(h);N?N.push(i):a.set(h,[i])}}return a}function Nh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function t0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ch(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function n0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=cr(a.href),i=t.querySelector(ni(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ws.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,gt(i);return}i=t.ownerDocument||t,a=_h(a),(r=nn.get(r))&&nc(a,r),i=i.createElement("link"),gt(i);var h=i;h._p=new Promise(function(N,M){h.onload=N,h.onerror=M}),Et(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ws.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var rc=0;function a0(e,t){return e.stylesheets&&e.count===0&&Rs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Rs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&rc===0&&(rc=62500*Mg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>rc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function ws(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _s=null;function Rs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_s=new Map,t.forEach(r0,e),_s=null,ws.call(e))}function r0(e,t){if(!(t.state.loading&4)){var n=_s.get(e);if(n)var a=n.get(null);else{n=new Map,_s.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var h=r[i];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}r=t.instance,h=r.getAttribute("data-precedence"),i=n.get(h)||a,i===a&&n.set(null,r),n.set(h,r),this.count++,a=ws.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ri={$$typeof:I,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function i0(e,t,n,a,r,i,h,N,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.hiddenUpdates=Ks(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Ih(e,t,n,a,r,i,h,N,M,W,le,fe){return e=new i0(e,t,n,h,M,W,le,fe,N),t=1,i===!0&&(t|=24),i=Ut(3,null,null,t),e.current=i,i.stateNode=e,t=zl(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Bl(i),e}function Dh(e){return e?(e=Pa,e):Pa}function Oh(e,t,n,a,r,i){r=Dh(r),a.context===null?a.context=r:a.pendingContext=r,a=Vn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Hn(e,a,t),n!==null&&(zt(n,e,t),zr(n,e,t))}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ic(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function kh(e){if(e.tag===13||e.tag===31){var t=ha(e,67108864);t!==null&&zt(t,e,67108864),ic(e,67108864)}}function Lh(e){if(e.tag===13||e.tag===31){var t=Ht();t=Js(t);var n=ha(e,t);n!==null&&zt(n,e,t),ic(e,t)}}var Ts=!0;function s0(e,t,n,a){var r=B.T;B.T=null;var i=V.p;try{V.p=2,sc(e,t,n,a)}finally{V.p=i,B.T=r}}function l0(e,t,n,a){var r=B.T;B.T=null;var i=V.p;try{V.p=8,sc(e,t,n,a)}finally{V.p=i,B.T=r}}function sc(e,t,n,a){if(Ts){var r=lc(a);if(r===null)qo(e,t,a,Ns,n),Mh(e,a);else if(c0(r,e,t,n,a))a.stopPropagation();else if(Mh(e,a),t&4&&-1<o0.indexOf(e)){for(;r!==null;){var i=Ia(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var h=qt(i.pendingLanes);if(h!==0){var N=i;for(N.pendingLanes|=2,N.entangledLanes|=2;h;){var M=1<<31-rt(h);N.entanglements[1]|=M,h&=~M}pn(i),(Ge&6)===0&&(us=xe()+500,Kr(0))}}break;case 31:case 13:N=ha(i,2),N!==null&&zt(N,i,2),fs(),ic(i,2)}if(i=lc(a),i===null&&qo(e,t,a,Ns,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else qo(e,t,a,null,n)}}function lc(e){return e=ol(e),oc(e)}var Ns=null;function oc(e){if(Ns=null,e=Ca(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ns=e,null}function zh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case _e:return 2;case qe:return 8;case Le:case Ct:return 32;case kn:return 268435456;default:return 32}default:return 32}}var cc=!1,ea=null,ta=null,na=null,ii=new Map,si=new Map,aa=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mh(e,t){switch(e){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function li(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ia(t),t!==null&&kh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function c0(e,t,n,a,r){switch(t){case"focusin":return ea=li(ea,e,t,n,a,r),!0;case"dragenter":return ta=li(ta,e,t,n,a,r),!0;case"mouseover":return na=li(na,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return ii.set(i,li(ii.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,si.set(i,li(si.get(i)||null,e,t,n,a,r)),!0}return!1}function Uh(e){var t=Ca(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Wc(e.priority,function(){Lh(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,Wc(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ll=a,n.target.dispatchEvent(a),ll=null}else return t=Ia(n),t!==null&&kh(t),e.blockedOn=n,!1;t.shift()}return!0}function Fh(e,t,n){Cs(e)&&n.delete(t)}function u0(){cc=!1,ea!==null&&Cs(ea)&&(ea=null),ta!==null&&Cs(ta)&&(ta=null),na!==null&&Cs(na)&&(na=null),ii.forEach(Fh),si.forEach(Fh)}function Is(e,t){e.blockedOn===t&&(e.blockedOn=null,cc||(cc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,u0)))}var Ds=null;function Bh(e){Ds!==e&&(Ds=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Ds===e&&(Ds=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(oc(a||n)===null)continue;break}var i=Ia(n);i!==null&&(e.splice(t,3),t-=3,so(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function dr(e){function t(M){return Is(M,e)}ea!==null&&Is(ea,e),ta!==null&&Is(ta,e),na!==null&&Is(na,e),ii.forEach(t),si.forEach(t);for(var n=0;n<aa.length;n++){var a=aa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<aa.length&&(n=aa[0],n.blockedOn===null);)Uh(n),n.blockedOn===null&&aa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],h=r[It]||null;if(typeof i=="function")h||Bh(n);else if(h){var N=null;if(i&&i.hasAttribute("formAction")){if(r=i,h=i[It]||null)N=h.formAction;else if(oc(r)!==null)continue}else N=h.action;typeof N=="function"?n[a+1]=N:(n.splice(a,3),a-=3),Bh(n)}}}function Ph(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function uc(e){this._internalRoot=e}Os.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Ht();Oh(n,a,e,t,null,null)},Os.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Oh(e.current,2,null,e,null,null),fs(),t[Na]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<aa.length&&t!==0&&t<aa[n].priority;n++);aa.splice(n,0,e),n===0&&Uh(e)}};var Vh=o.version;if(Vh!=="19.2.1")throw Error(c(527,Vh,"19.2.1"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var d0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{Ke=js.inject(d0),mt=js}catch{}}return ci.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",r=Xd,i=Qd,h=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Ih(e,1,!1,null,null,n,a,null,r,i,h,Ph),e[Na]=t.current,Go(e),new uc(t)},ci.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,r="",i=Xd,h=Qd,N=Zd,M=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(N=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),t=Ih(e,1,!0,t,n??null,a,r,M,i,h,N,Ph),t.context=Dh(null),n=t.current,a=Ht(),a=Js(a),r=Vn(a),r.callback=null,Hn(n,r,a),n=a,t.current.lanes=n,vr(t,n),pn(t),e[Na]=t.current,Go(e),new Os(t)},ci.version="19.2.1",ci}var Kh;function E0(){if(Kh)return hc.exports;Kh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),hc.exports=S0(),hc.exports}var A0=E0();const w0=zc(A0);var me=(u=>(u.SETUP="ICISsetup",u.BUILDER="ICISbuilder",u.REVIEWER="ICISreviewer",u.SUPERVISOR="ICISsupervisor",u.REVISER="ICISreviser",u.FINALIZE="ICISfinalize",u))(me||{}),Ie=(u=>(u.PENDING="pending",u.ACTIVE="active",u.COMPLETED="completed",u.ERROR="error",u.SKIPPED="skipped",u))(Ie||{}),fr=(u=>(u.SIMULATION="Simulation & Computational Modeling",u.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",u.SECONDARY_DATA="Secondary data analysis",u.EXPERIMENTAL="Laboratory & field experiments",u.SURVEY="Survey research",u))(fr||{}),ze=(u=>(u.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",u.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",u.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",u.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",u.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",u.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",u.STEP5_EXECUTION="Step 5: Experiment Execution",u.STEP6_VISUALIZATION="Step 6: Results Visualization",u.STEP7_ANALYSIS="Step 7: Results Analysis",u.STEP8_PAPER_WRITING="Step 8: Paper Writing",u.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",u))(ze||{});function _0(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const Jh={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:_0(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]},hp="/icis",R0={[me.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText"},[me.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer"},[me.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search"},[me.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck"},[me.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3"},[me.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send"}},pp={[ze.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[ze.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[ze.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[ze.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[ze.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[ze.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[ze.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[ze.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[ze.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[ze.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[ze.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};fr.SIMULATION+"",fr.ANALYTICAL+"",fr.SECONDARY_DATA+"",fr.EXPERIMENTAL+"",fr.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N0=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,l,c)=>c?c.toUpperCase():l.toLowerCase()),ep=u=>{const o=N0(u);return o.charAt(0).toUpperCase()+o.slice(1)},mp=(...u)=>u.filter((o,l,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===l).join(" ").trim(),C0=u=>{for(const o in u)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=be.forwardRef(({color:u="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:f,iconNode:g,...y},v)=>be.createElement("svg",{ref:v,...I0,width:o,height:o,stroke:u,strokeWidth:c?Number(l)*24/Number(o):l,className:mp("lucide",d),...!f&&!C0(y)&&{"aria-hidden":"true"},...y},[...g.map(([p,_])=>be.createElement(p,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(u,o)=>{const l=be.forwardRef(({className:c,...d},f)=>be.createElement(D0,{ref:f,iconNode:o,className:mp(`lucide-${T0(ep(u))}`,`lucide-${u}`,c),...d}));return l.displayName=ep(u),l};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],j0=Oe("activity",O0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],L0=Oe("archive",k0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],M0=Oe("arrow-left",z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ec=Oe("chart-column",U0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],on=Oe("check",F0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ac=Oe("chevron-down",B0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gp=Oe("chevron-right",P0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Bs=Oe("circle-alert",V0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],$0=Oe("circle-check-big",H0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wc=Oe("circle-check",G0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],tp=Oe("circle-play",q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],yp=Oe("circle-stop",Y0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],np=Oe("circle",X0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Z0=Oe("copy",Q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ps=Oe("download",W0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],vp=Oe("ellipsis-vertical",K0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ey=Oe("external-link",J0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_c=Oe("eye",ty);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],ay=Oe("fast-forward",ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hs=Oe("file-text",ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],sy=Oe("folder-plus",iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],oy=Oe("hammer",ly);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],uy=Oe("link",cy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ap=Oe("loader-circle",dy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],hy=Oe("loader",fy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],my=Oe("lock",py);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M5 12h14",key:"1ays0h"}]],yy=Oe("minus",gy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],by=Oe("pen-line",vy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rc=Oe("play",xy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],an=Oe("refresh-cw",Sy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ms=Oe("rotate-ccw",Ey);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],wy=Oe("save",Ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],bp=Oe("search",_y);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Uc=Oe("send",Ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],rp=Oe("skip-forward",Ty);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Cy=Oe("trash-2",Ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Dy=Oe("trending-down",Iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],xp=Oe("trending-up",Oy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Tc=Oe("triangle-alert",jy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Sp=Oe("upload",ky);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],zy=Oe("user-check",Ly);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Uy=Oe("user",My);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ep=Oe("users",Fy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Py=Oe("x",By),Vy=({currentStage:u,currentBuilderStep:o,stagesState:l,isPartialPaper:c=!1,currentRound:d=1,isProcessing:f=!1,onStageClick:g,onStageAction:y,onNewCase:v,onNewInterview:p,onPaperToInterview:_,onResearchAdmin:A,paperMode:R="draft",onPaperModeChange:S})=>{const[T,m]=be.useState(null),E=be.useRef(null);be.useEffect(()=>{const F=ae=>{E.current&&!E.current.contains(ae.target)&&m(null)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[]);const w=(F,ae)=>{const ee=[];switch(ae){case Ie.ACTIVE:ee.push({action:"abort",label:"Abort",icon:s.jsx(yp,{size:14})});break;case Ie.COMPLETED:ee.push({action:"restart",label:"Restart",icon:s.jsx(Ms,{size:14})});break;case Ie.ERROR:ee.push({action:"restart",label:"Retry",icon:s.jsx(Ms,{size:14})});break;case Ie.PENDING:const k=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],Q=k.indexOf(F),x=Q>0?k[Q-1]:null,G=!x||l[x]===Ie.COMPLETED;ee.push({action:"start",label:"Start",icon:s.jsx(Rc,{size:14}),disabled:!G||f}),F!==me.SETUP&&F!==me.FINALIZE&&ee.push({action:"skip",label:"Skip",icon:s.jsx(ay,{size:14}),disabled:f});break;case Ie.SKIPPED:ee.push({action:"restart",label:"Unskip & Run",icon:s.jsx(Ms,{size:14})});break}return ee},D=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],I={[me.SETUP]:s.jsx(Hs,{size:16}),[me.BUILDER]:s.jsx(oy,{size:16}),[me.REVIEWER]:s.jsx(bp,{size:16}),[me.SUPERVISOR]:s.jsx(zy,{size:16}),[me.REVISER]:s.jsx(by,{size:16}),[me.FINALIZE]:s.jsx(Uc,{size:16})},U=F=>{switch(F){case Ie.COMPLETED:return s.jsx(wc,{size:16,className:"text-emerald-500"});case Ie.ACTIVE:return s.jsx(tp,{size:16,className:"text-red-500 animate-pulse"});case Ie.ERROR:return s.jsx(Bs,{size:16,className:"text-red-500"});case Ie.SKIPPED:return s.jsx(rp,{size:16,className:"text-slate-400"});default:return s.jsx(np,{size:16,className:"text-slate-500"})}},O=[ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION],X=F=>c?[ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS].includes(F):!1,H=F=>{if(X(F))return"skipped";const ae=O.indexOf(F),ee=o?O.indexOf(o):-1;return F===o?"active":ee>ae?"completed":"pending"},$=u===me.BUILDER||l[me.BUILDER]===Ie.ACTIVE;return s.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[s.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[s.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"ICIScopilot",s.jsx("span",{className:"text-emerald-500",children:"1"})]}),s.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Automated Science Discovery"})]}),d>1&&s.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),s.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",d]})]})}),c&&s.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:s.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[s.jsx(Bs,{size:12}),s.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),s.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[s.jsx("button",{onClick:()=>S==null?void 0:S("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${R==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),s.jsx("button",{onClick:()=>S==null?void 0:S("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${R==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),p&&s.jsx("button",{onClick:p,className:"w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition-colors",children:"Voice Interview"}),_&&s.jsx("button",{onClick:_,className:"w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors",children:"Paper to Interview"}),v&&s.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&v()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),A&&s.jsxs("button",{onClick:A,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[s.jsx(Ep,{size:16}),"Research Admin"]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:D.map(F=>{const ae=l[F],ee=ae===Ie.ACTIVE,k=ae===Ie.COMPLETED,Q=ae===Ie.SKIPPED,x=u===F,G=R0[F],B=w(F,ae);return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${ee?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":k?"border-emerald-500/50 bg-slate-900/50":Q?"border-slate-700 bg-slate-900/30 opacity-60":x?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>g(F),children:[s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`${ee?"text-red-400":k?"text-emerald-400":"text-slate-400"}`,children:I[F]}),s.jsx("span",{className:`font-medium text-sm ${ee||x?"text-white":""}`,children:G.label})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[F===me.BUILDER&&($?s.jsx(Ac,{size:14}):s.jsx(gp,{size:14})),U(ae),y&&B.length>0&&s.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:V=>{V.stopPropagation(),m(T===F?null:F)},children:s.jsx(vp,{size:14,className:"text-slate-400"})})]})]}),s.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:G.description}),G.promptFile&&s.jsx("div",{className:"mt-2 pl-6",children:s.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:G.promptFile})})]}),T===F&&y&&s.jsx("div",{ref:E,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:B.map(({action:V,label:ue,icon:te,disabled:ge})=>s.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${ge?"text-slate-600 cursor-not-allowed":V==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:C=>{C.stopPropagation(),ge||(y(F,V),m(null))},disabled:ge,children:[te,ue]},V))}),F===me.BUILDER&&$&&s.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:O.map(V=>{const ue=pp[V],te=H(V);return s.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${te==="active"?"bg-red-900/30 text-red-300":te==="completed"?"text-emerald-400":te==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[te==="active"&&s.jsx(tp,{size:12,className:"animate-pulse"}),te==="completed"&&s.jsx(wc,{size:12}),te==="skipped"&&s.jsx(rp,{size:12}),te==="pending"&&s.jsx(np,{size:12}),s.jsxs("span",{children:[ue.label,": ",ue.description]})]},V)})})]},F)})}),s.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:s.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Directory:"}),s.jsx("span",{className:"text-slate-400",children:hp})]}),s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Paper Version:"}),s.jsxs("span",{className:"text-slate-400",children:["v",d]})]})]})})]})},hi="icis_files_";class Us extends Error{constructor(o,l,c){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.name="StorageError"}}function Ap(){try{const u="__storage_test__";return localStorage.setItem(u,u),localStorage.removeItem(u),!0}catch{return!1}}function mr(u,o){var c;if(!Ap())throw new Us("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const l=hi+u.replace(/\\/g,"/");try{localStorage.setItem(l,o),console.log(`File written: ${u}`)}catch(d){const f=d;throw f.name==="QuotaExceededError"||(c=f.message)!=null&&c.includes("quota")?new Us("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",f.message):new Us("WRITE_ERROR",`Failed to save file: ${u}`,f.message)}}function $s(u){if(!Ap())return console.warn("localStorage unavailable, returning null for read"),null;const o=hi+u.replace(/\\/g,"/");try{return localStorage.getItem(o)}catch(l){const c=l;throw console.error(`Error reading file ${u}:`,c),new Us("READ_ERROR",`Failed to read file: ${u}`,c.message)}}function Hy(u){const o=[],l=new RegExp(u.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let c=0;c<localStorage.length;c++){const d=localStorage.key(c);if(d&&d.startsWith(hi)){const f=d.substring(hi.length);l.test(f)&&o.push(f)}}return o.sort()}function wp(u){const o=`icis/Data/oversight_v${u.version}.txt`,l=$y(u);return mr(o,l),mr(o+".json",JSON.stringify(u,null,2)),o}function $y(u){const o=[];o.push(`ID=${u.paperId}`),o.push(`Version: ${u.version}`),o.push(`Timestamp: ${u.timestamp}`),o.push(""),o.push("================================================================================"),o.push("                     OVERSIGHT DASHBOARD"),o.push("================================================================================"),o.push(""),o.push("TABLE 1 - Review Scores Progression:"),o.push("------------------------------------------------------------------------"),o.push("| Criteria              | Score | Comment                              |"),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| Novelty               | ${u.reviewScores.novelty}     | ${u.reviewComments.novelty.substring(0,36).padEnd(36)} |`),o.push(`| Significance          | ${u.reviewScores.significance}     | ${u.reviewComments.significance.substring(0,36).padEnd(36)} |`),o.push(`| Methodological Rigor  | ${u.reviewScores.methodologicalRigor}     | ${u.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),o.push(`| Clarity               | ${u.reviewScores.clarity}     | ${u.reviewComments.clarity.substring(0,36).padEnd(36)} |`),o.push(`| Relevance             | ${u.reviewScores.relevance}     | ${u.reviewComments.relevance.substring(0,36).padEnd(36)} |`),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| AVERAGE               | ${u.averageScore.toFixed(1)}   |                                      |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 2 - Error Counts:"),o.push("------------------------------------------------------------------------"),o.push("| Category        | Count | Details                                  |"),o.push("|-----------------|-------|------------------------------------------|");const l=u.errorDetails.majorErrors.length>0?u.errorDetails.majorErrors[0].substring(0,40):"None",c=u.errorDetails.minorErrors.length>0?u.errorDetails.minorErrors[0].substring(0,40):"None";if(o.push(`| Major Errors    | ${String(u.errorCounts.majorErrors).padStart(5)} | ${l.padEnd(40)} |`),o.push(`| Minor Errors    | ${String(u.errorCounts.minorErrors).padStart(5)} | ${c.padEnd(40)} |`),o.push("|-----------------|-------|------------------------------------------|"),o.push(`| TOTAL           | ${String(u.errorCounts.majorErrors+u.errorCounts.minorErrors).padStart(5)} |                                          |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),o.push("------------------------------------------------------------------------"),o.push("| Dimension       | Score | Rationale                               |"),o.push("|-----------------|-------|-----------------------------------------|"),o.push(`| Reliability     | ${u.trustworthiness.reliability}     | ${u.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),o.push(`| Benevolence     | ${u.trustworthiness.benevolence}     | ${u.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),o.push(`| Goal Alignment  | ${u.trustworthiness.goalAlignment}     | ${u.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("CRITICAL ALERTS:"),o.push("------------------------------------------------------------------------"),u.criticalAlerts.length===0)o.push("None - paper is progressing well");else for(const d of u.criticalAlerts)o.push(`CRITICAL ALERT ${d.number}: ${d.title} (BLOCKING ISSUE)`),o.push(`  Status: ${d.status}`),o.push(`  Impact: ${d.impact}`),o.push(`  Details: ${d.details}`),o.push(`  Action Required: ${d.actionRequired}`),o.push(`  Consequence if Unfixed: ${d.consequence}`),o.push("");return o.push("------------------------------------------------------------------------"),o.push(""),o.push("================================================================================"),o.join(`
`)}function Fc(u){const o=`icis/Data/feedback_v${u.version}.txt`,l=[];if(l.push(`ID=${u.paperId}`),l.push(`Version: ${u.version}`),l.push(`Timestamp: ${u.timestamp}`),l.push(""),l.push("================================================================================"),l.push("                     CONSTRUCTIVE FEEDBACK"),l.push("================================================================================"),l.push(""),l.push("## Research Question and Contribution"),l.push(u.researchQuestion),l.push(""),l.push("## Method"),l.push(u.method),l.push(""),l.push("## Potential Impact"),l.push(u.potentialImpact),l.push(""),l.push("## Writing Quality"),l.push(u.writing),l.push(""),l.push("## Major Concerns"),u.majorConcerns.forEach((d,f)=>{l.push(`${f+1}. ${d}`)}),l.push(""),l.push("## Minor Corrections"),u.minorCorrections.forEach((d,f)=>{l.push(`${f+1}. ${d}`)}),l.push(""),l.push("## Overall Assessment"),l.push(u.overallAssessment),l.push(""),u.supervisorDirectives&&u.supervisorDirectives.length>0){l.push("================================================================================"),l.push("                     SUPERVISOR DIRECTIVES"),l.push("================================================================================");for(const d of u.supervisorDirectives)l.push(""),l.push(`Cycle ${d.cycle} - ${d.timestamp}`),l.push("------------------------------------------------------------------------"),l.push(d.directives)}l.push(""),l.push("================================================================================");const c=l.join(`
`);return mr(o,c),mr(o+".json",JSON.stringify(u,null,2)),o}function Fs(u){const o=`icis/Data/oversight_v${u}.txt.json`,l=$s(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse oversight JSON:",c)}return null}function fi(u){const o=`icis/Data/feedback_v${u}.txt.json`,l=$s(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse feedback JSON:",c)}return null}function Bc(){const u=Hy("icis/Data/oversight_v.*\\.txt\\.json"),o=[];for(const l of u){const c=$s(l);if(c)try{o.push(JSON.parse(c))}catch(d){console.error("Failed to parse oversight file:",l,d)}}return o.sort((l,c)=>l.version-c.version)}function ip(u,o,l){const c=fi(u);c&&(c.supervisorDirectives||(c.supervisorDirectives=[]),c.supervisorDirectives.push({cycle:o,directives:l,timestamp:new Date().toISOString()}),Fc(c))}function sp(u,o,l){const c="icis/Data/supervisor_decision.txt",d=[];return d.push(`Decision: ${u}`),d.push(`Cycle: ${o}`),d.push(`Timestamp: ${new Date().toISOString()}`),mr(c,d.join(`
`)),c}function Gy(){const u=[];for(let o=0;o<localStorage.length;o++){const l=localStorage.key(o);l&&l.startsWith(hi)&&u.push(l)}u.forEach(o=>localStorage.removeItem(o)),console.log(`Cleared ${u.length} files`)}function lp(u,o,l="icis_paper"){const c=`icis/Paper/${l}_v${u}.tex`;return mr(c,o),console.log(`Paper saved: ${c}`),c}function ia(u,o="icis_paper"){const l=`icis/Paper/${o}_v${u}.tex`;return $s(l)}function qy(u,o="icis_paper"){const l=ia(u,o);if(!l){console.error(`Paper version ${u} not found`);return}const c=`${o}_v${u}.tex`,d=new Blob([l],{type:"text/plain;charset=utf-8"}),f=URL.createObjectURL(d),g=document.createElement("a");g.href=f,g.download=c,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(f),console.log(`Downloaded: ${c}`)}const yi=({logs:u,height:o="h-64"})=>{const l=be.useRef(null);return be.useEffect(()=>{var c;(c=l.current)==null||c.scrollIntoView({behavior:"smooth"})},[u]),s.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${o} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[u.length===0?s.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):u.map((c,d)=>s.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:c},d)),s.jsx("div",{ref:l})]})},Yy=({currentStep:u})=>{if(!u)return null;const o=pp[u];return s.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:s.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[s.jsx(an,{size:16,className:"animate-spin"}),s.jsx("span",{className:"font-medium",children:o.label}),s.jsxs("span",{className:"text-indigo-500",children:["- ",o.description]})]})})},Pc=({stageName:u,isProcessing:o,canAbort:l,canRestart:c,onAbort:d,onRestart:f})=>{const[g,y]=be.useState(null),v=()=>{o&&y("abort")},p=()=>{y("restart")},_=()=>{g==="abort"?d():g==="restart"&&f(),y(null)};return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex gap-2",children:[l&&o&&s.jsxs("button",{onClick:v,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[s.jsx(yp,{size:14}),"Abort"]}),c&&!o&&s.jsxs("button",{onClick:p,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[s.jsx(Ms,{size:14}),"Restart"]})]}),g&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:s.jsx(Tc,{className:"text-amber-600",size:24})}),s.jsx("h3",{className:"text-lg font-bold text-slate-800",children:g==="abort"?"Abort Stage?":"Restart Stage?"})]}),s.jsx("p",{className:"text-slate-600 mb-6",children:g==="abort"?s.jsxs(s.Fragment,{children:["Are you sure you want to abort the ",s.jsx("strong",{children:u})," stage? Any progress will be lost and you may need to restart the stage."]}):s.jsxs(s.Fragment,{children:["Are you sure you want to restart the ",s.jsx("strong",{children:u})," stage? This will reset the stage and you'll need to run it again."]})}),s.jsxs("div",{className:"flex gap-3 justify-end",children:[s.jsx("button",{onClick:()=>y(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),s.jsx("button",{onClick:_,className:`px-4 py-2 text-white rounded-lg transition-colors ${g==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:g==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},yc=({label:u,accept:o=".txt",multiple:l=!1,required:c=!1,file:d,onFileSelect:f})=>{const g=be.useRef(null),y=()=>{var _;(_=g.current)==null||_.click()},v=_=>{var R;const A=((R=_.target.files)==null?void 0:R[0])||null;f(A)},p=_=>{_.stopPropagation(),f(null),g.current&&(g.current.value="")};return s.jsxs("div",{onClick:y,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${d?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Sp,{size:16,className:d?"text-emerald-600":"text-slate-400"}),s.jsxs("span",{className:"text-sm",children:[d?d.name:u,c&&!d&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),d?s.jsx("button",{onClick:p,className:"p-1 hover:bg-emerald-200 rounded",children:s.jsx(Py,{size:16,className:"text-emerald-600"})}):s.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),s.jsx("input",{ref:g,type:"file",accept:o,multiple:l,onChange:v,className:"hidden"})]})},Xy=({logs:u,stageStatus:o,isProcessing:l,uploadedFiles:c,onFileChange:d,onAction:f,detectionStatus:g,onRefreshDetection:y,hasExistingCase:v=!1})=>{const[p,_]=be.useState(!1),A=c.template&&c.interview,R=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(_(!0),f("NEW_CASE"),setTimeout(()=>_(!1),2e3))};return s.jsxs("div",{className:"space-y-6 max-w-2xl mx-auto mt-10",children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(Hs,{className:"text-indigo-600"}),"Setup & File Selection"]}),v&&s.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(L0,{className:"text-blue-600",size:24}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),s.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),s.jsx("button",{onClick:R,disabled:p,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:p?s.jsxs(s.Fragment,{children:[s.jsx(an,{className:"animate-spin",size:18}),"Backing up..."]}):s.jsxs(s.Fragment,{children:[s.jsx(sy,{size:18}),"New Project"]})})]})}),g&&s.jsxs("div",{className:`p-4 rounded-lg border ${g.loading?"bg-blue-50 border-blue-200":g.detected.interview?"bg-green-50 border-green-200":"bg-amber-50 border-amber-200"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[g.loading?s.jsxs(s.Fragment,{children:[s.jsx(hy,{className:"animate-spin text-blue-600",size:18}),s.jsx("span",{className:"text-blue-800 font-medium",children:"Detecting files in Data folder..."})]}):g.detected.interview?s.jsxs(s.Fragment,{children:[s.jsx($0,{className:"text-green-600",size:18}),s.jsx("span",{className:"text-green-800 font-medium",children:"Files auto-detected!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Bs,{className:"text-amber-600",size:18}),s.jsx("span",{className:"text-amber-800 font-medium",children:"No files detected - upload manually"})]}),y&&!g.loading&&s.jsxs("button",{onClick:y,className:"ml-auto text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1",children:[s.jsx(an,{size:14}),"Refresh"]})]}),!g.loading&&g.detected.interview&&s.jsxs("div",{className:"mt-3 space-y-1 text-sm",children:[s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Interview:"})," ",g.detected.interview.filename]}),g.detected.participantId&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Participant ID:"})," ",g.detected.participantId]}),g.detected.template&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Template:"})," ",g.detected.template.filename]}),g.detected.dataFile&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Data File:"})," ",g.detected.dataFile.filename]})]})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:g!=null&&g.detected.interview?"Detected Files":"Select Your Files"}),s.jsx("p",{className:"text-sm text-slate-500",children:g!=null&&g.detected.interview?"Files were automatically loaded from the Data folder. You can still upload different files if needed.":"Upload the required files to begin the paper generation process."}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(yc,{label:"icisTemplate.txt (Required)",accept:".txt",required:!0,file:c.template,onFileSelect:S=>d("template",S)}),s.jsx(yc,{label:"Interview transcript (Required)",accept:".txt",required:!0,file:c.interview,onFileSelect:S=>d("interview",S)}),s.jsx(yc,{label:"Data file (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:c.dataFile,onFileSelect:S=>d("dataFile",S)})]}),c.participantId&&s.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg",children:s.jsxs("p",{className:"text-sm text-indigo-800",children:[s.jsx("strong",{children:"Participant ID:"})," ",c.participantId]})}),s.jsx(yi,{logs:u,height:"h-32"}),s.jsx("div",{className:"pt-4 border-t border-slate-100 flex justify-end gap-3",children:s.jsxs("button",{onClick:()=>f("START_SETUP"),disabled:l||!A,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[l?s.jsx(an,{className:"animate-spin",size:18}):s.jsx(Rc,{size:18}),"Verify Files"]})}),!A&&!(g!=null&&g.loading)&&s.jsx("p",{className:"text-xs text-amber-600 text-center",children:"Please upload the required files (template and interview) to proceed."})]}),o===Ie.COMPLETED&&s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),s.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),s.jsxs("button",{onClick:()=>f("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(Rc,{size:18}),"Start Building Paper"]})]}),s.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3",children:[s.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),s.jsx("button",{onClick:()=>f("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})},Qy=({logs:u,isProcessing:o,isPartialPaper:l,currentBuilderStep:c,paperContent:d,onAbort:f,onRestart:g})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(an,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Building Research Paper",l&&s.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),s.jsx(Pc,{stageName:"Builder",isProcessing:o,canAbort:!0,canRestart:!o&&!!d,onAbort:f||(()=>{}),onRestart:g||(()=>{})})]}),s.jsx(Yy,{currentStep:c}),s.jsx(yi,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:d?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:d}):s.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),Zy=({allOversight:u,compact:o=!1})=>{if(u.length===0)return null;const l=(A,R)=>R>A?"up":R<A?"down":"same",c=({trend:A,size:R=14})=>A==="up"?s.jsx(xp,{size:R,className:"text-emerald-500"}):A==="down"?s.jsx(Dy,{size:R,className:"text-red-500"}):s.jsx(yy,{size:R,className:"text-slate-400"}),d=(A,R=4)=>A>=R?"text-emerald-600":A>=R-1?"text-amber-600":"text-red-600",f=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],g=u[0],y=u[u.length-1],v=u.length>1,p=v?((y.averageScore-g.averageScore)/g.averageScore*100).toFixed(1):"0",_=v?Math.round((1-(y.errorCounts.majorErrors+y.errorCounts.minorErrors)/Math.max(1,g.errorCounts.majorErrors+g.errorCounts.minorErrors))*100):0;return o?s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(Ec,{size:18,className:"text-indigo-600"}),s.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),v&&s.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(p)>0?"bg-emerald-100 text-emerald-700":parseFloat(p)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(p)>0?"+":"",p,"% overall"]})]}),s.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:f.map(({key:A,label:R})=>{const S=g.reviewScores[A]||0,T=y.reviewScores[A]||0,m=l(S,T);return s.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[s.jsx("div",{className:"text-slate-500 truncate mb-1",children:R}),s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx("span",{className:`font-bold ${d(T)}`,children:T}),v&&s.jsx(c,{trend:m,size:12})]}),v&&S!==T&&s.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",S]})]},A)})}),s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Average:"}),s.jsx("span",{className:`font-bold ${d(y.averageScore)}`,children:y.averageScore.toFixed(1)}),v&&s.jsxs(s.Fragment,{children:[s.jsx(c,{trend:l(g.averageScore,y.averageScore)}),s.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",g.averageScore.toFixed(1),")"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Errors:"}),s.jsx("span",{className:`font-bold ${y.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:y.errorCounts.majorErrors+y.errorCounts.minorErrors}),v&&_!==0&&s.jsxs("span",{className:`text-xs ${_>0?"text-emerald-600":"text-red-600"}`,children:["(",_>0?"-":"+",Math.abs(_),"%)"]})]})]}),v&&s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[s.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",u.length," rounds):"]}),s.jsx("div",{className:"flex gap-1",children:u.map((A,R)=>s.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${R===u.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",A.version,": ",A.averageScore.toFixed(1)]},R))})]})]}):s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Ec,{size:20,className:"text-indigo-600"}),s.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),v&&s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(p)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(p)>0?"+":"",p,"% score change"]}),s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${_>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[_>0?"-":"+",Math.abs(_),"% errors"]})]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-200",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),u.map((A,R)=>s.jsxs("th",{className:`text-center p-2 ${R===u.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",A.version]},R)),v&&s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),s.jsxs("tbody",{children:[f.map(({key:A,label:R})=>{const S=u.map(m=>m.reviewScores[A]||0),T=v?l(S[0],S[S.length-1]):"same";return s.jsxs("tr",{className:"border-b border-slate-100",children:[s.jsx("td",{className:"p-2 font-medium",children:R}),S.map((m,E)=>s.jsx("td",{className:`text-center p-2 ${E===S.length-1?"bg-indigo-50/50":""} ${d(m)}`,children:m},E)),v&&s.jsx("td",{className:"text-center p-2",children:s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx(c,{trend:T}),T==="up"&&s.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",S[S.length-1]-S[0]]}),T==="down"&&s.jsx("span",{className:"text-red-600 text-xs",children:S[S.length-1]-S[0]})]})})]},A)}),s.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"Average"}),u.map((A,R)=>s.jsx("td",{className:`text-center p-2 ${R===u.length-1?"bg-indigo-100":""} ${d(A.averageScore)}`,children:A.averageScore.toFixed(1)},R)),v&&s.jsx("td",{className:"text-center p-2",children:s.jsx("div",{className:"flex items-center justify-center gap-1",children:s.jsx(c,{trend:l(g.averageScore,y.averageScore)})})})]})]})]})}),s.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[s.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((A,R)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${R===u.length-1?A.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",A.version,": ",A.errorCounts.majorErrors]},R))})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((A,R)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${R===u.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",A.version,": ",A.errorCounts.minorErrors]},R))})]})]})]})]})},cn="http://localhost:3001/api",Wy=`OtjWTGJoUPpa+WdvSrFILls0jsgIHz/Bz/AtiUXZBgw=
`;function gr(){const u={"Content-Type":"application/json"};return u["X-Internal-Secret"]=Wy,u}let pt=null;async function jn(){try{const u=new AbortController,o=setTimeout(()=>u.abort(),1e3),l=await fetch(`${cn}/health`,{signal:u.signal});return clearTimeout(o),pt=(await l.json()).status==="ok",pt}catch{return pt=!1,!1}}async function _p(){var u,o;try{const l=await fetch(`${cn}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!l.ok)return{success:!1,error:`Server error: ${l.status}`};const c=await l.json();return c.success&&console.log("[FileApi] Manifest refreshed:",(o=(u=c.manifest)==null?void 0:u.files)==null?void 0:o.map(d=>d.filename)),c}catch(l){return console.error("[FileApi] Failed to refresh manifest:",l),{success:!1,error:l.message}}}function Vc(u,o,l="text/plain"){const c=new Blob([o],{type:l}),d=URL.createObjectURL(c),f=document.createElement("a");f.href=d,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d)}async function Nc(u,o){if(pt===null&&await jn(),pt)try{const c=await(await fetch(`${cn}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json();if(c.success)return c}catch{console.warn("Backend save failed, falling back to download")}try{return Vc(u,o,"application/x-tex"),{success:!0,path:`Downloads/${u}`}}catch(l){return{success:!1,error:l.message}}}async function Cc(u,o){const l=typeof o=="string"?o:JSON.stringify(o,null,2);if(pt===null&&await jn(),pt)try{const d=await(await fetch(`${cn}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:l})})).json();if(d.success)return d}catch{console.warn("Backend save failed, falling back to download")}try{return Vc(u,l,"application/json"),{success:!0,path:`Downloads/${u}`}}catch(c){return{success:!1,error:c.message}}}async function Rp(u){if(pt===null&&await jn(),pt)try{const l=await(await fetch(`${cn}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:u})})).json();if(l.success)return l}catch{console.warn("Backend save failed, falling back to downloads")}try{const o=[];for(const l of u){const c=typeof l.content=="string"?l.content:JSON.stringify(l.content,null,2),d=l.directory==="paper"?"application/x-tex":"application/json";await new Promise(f=>setTimeout(f,200)),Vc(l.filename,c,d),o.push(l.filename)}return{success:!0,files:o}}catch(o){return{success:!1,error:o.message}}}async function Tp(u,o,l,c,d,f){const g=d?`${d}_`:"",y=await Rp([{directory:"data",filename:`${g}oversight_v${u}.json`,content:o},{directory:"data",filename:`${g}feedback_v${u}.json`,content:l},{directory:"paper",filename:`${g}icis_paper_v${u}.tex`,content:c}]);if(f)try{const v="https://icis-deploy-12-10-2025.vercel.app";v&&(await fetch(`${v}/api/participants`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,oversight:o,feedback:l,round:u})}),console.log(`[FileApi] Saved oversight/feedback v${u} to blob for ${f}`))}catch(v){console.warn("[FileApi] Failed to save to blob:",v)}return y}const sa="https://icis-deploy-12-10-2025.vercel.app";let Ra=null;async function Np(u,o,l){const c=(o.match(/\\begin\{tikzpicture\}/g)||[]).length,d=(l==null?void 0:l.length)||0,f=Math.round(o.length/1024),g=Hp(),y=!!g;try{console.log(`[LaTeX] Compiling via Vercel cloud... (${f} KB, ${c} TikZ, ${d} PNG figures${y?", with .bib":""})`);const v=new AbortController,p=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),v.abort()},3e5),_={filename:u,content:o,figures:l};g&&(_.bibliography=g);let A;try{A=await fetch(`${sa}/api/compile-latex`,{method:"POST",headers:gr(),signal:v.signal,body:JSON.stringify(_)}),clearTimeout(p)}catch(S){if(clearTimeout(p),S.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${c} TikZ figures may be too complex.`};throw S}const R=await A.json();return R.success&&R.pdfBase64?(Ra={filename:R.pdfFilename,base64:R.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${R.pdfFilename}`)):R.success||console.warn(`[LaTeX] Cloud compilation failed: ${R.error}`),R}catch(v){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",v)}if(pt===null&&await jn(),!pt)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${cn}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json()}catch(v){return{success:!1,error:`Compilation request failed: ${v.message}`}}}function Hc(){if(!Ra)return null;const u=atob(Ra.base64),o=new Uint8Array(u.length);for(let c=0;c<u.length;c++)o[c]=u.charCodeAt(c);const l=new Blob([o],{type:"application/pdf"});return{filename:Ra.filename,blob:l}}function Cp(u){return`${cn}/get-pdf/${encodeURIComponent(u)}`}async function Ip(u){const o=Hc();if(o&&o.filename===u){const d=URL.createObjectURL(o.blob),f=document.createElement("a");f.href=d,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d);return}const l=Cp(u),c=document.createElement("a");c.href=l,c.download=u,document.body.appendChild(c),c.click(),document.body.removeChild(c)}async function Dp(u){if(!Ra)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const l=await(await fetch(`${sa}/api/create-viewer-link`,{method:"POST",headers:gr(),body:JSON.stringify({filename:Ra.filename,pdfBase64:Ra.base64})})).json();if(l.success)return console.log(`[Viewer] Link created: ${l.fullUrl}`),l;console.warn("[Viewer] Cloud API returned error:",l.error)}catch(o){console.warn("[Viewer] Cloud API failed:",o)}if(pt===null&&await jn(),!pt)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${cn}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:u})})).json()}catch(o){return{success:!1,error:`Failed to create viewer link: ${o.message}`}}}function Op(u){window.open(u,"_blank","noopener,noreferrer")}async function Gs(u,o="full"){var l;try{console.log(`[Cloud Python] Analyzing data (${u.length} chars, type: ${o})...`);const d=await(await fetch(`${sa}/api/analyze-data`,{method:"POST",headers:gr(),body:JSON.stringify({csvContent:u,analysisType:o})})).json();return d.success?console.log(`[Cloud Python] Analysis complete: ${((l=d.figures)==null?void 0:l.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${d.error}`),d}catch(c){return console.error("[Cloud Python] Error:",c),{success:!1,error:c.message}}}async function jp(u,o,l){const c=vi();if(c!=null&&c.content&&sa){console.log("[executePythonScript] Trying cloud Python analysis...");const d=await Gs(c.content,"full");if(d.success){const f=[];return d.chart_data&&d.chart_data.forEach((g,y)=>{f.push({filename:`${g.type}_${g.column||g.x_column||y}.json`,path:`cloud://chart_data/${y}`,size:JSON.stringify(g).length,base64:btoa(JSON.stringify(g))})}),{success:!0,stdout:d.text_summary||"",dataFileFound:!0,generatedFigures:f}}}if(pt===null&&await jn(),!pt)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${u}, dataFile=${l||"UNDEFINED"}`);const d={filename:u,code:o,dataFile:l};console.log("[executePythonScript] Request body dataFile:",d.dataFile);const g=await(await fetch(`${cn}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${g.dataFileFound}, dataFilePath=${g.dataFilePath||"NONE"}`),g}catch(d){return{success:!1,error:`Python execution request failed: ${d.message}`}}}async function kp(){if(pt===null&&await jn(),!pt)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${cn}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(u){return{success:!1,error:`Backup request failed: ${u.message}`}}}let At=null;async function Lp(u){try{const o=await u.arrayBuffer(),l=btoa(new Uint8Array(o).reduce((f,g)=>f+String.fromCharCode(g),""));console.log(`[Cloud Upload] Uploading ${u.name} (${u.size} bytes)...`);const d=await(await fetch(`${sa}/api/upload-data`,{method:"POST",headers:gr(),body:JSON.stringify({filename:u.name,content:l,contentType:u.type})})).json();return d.success&&(At={filename:u.name,blobUrl:d.blobUrl},console.log(`[Cloud Upload] Success: ${d.blobUrl}`)),d}catch(o){return console.error("[Cloud Upload] Error:",o),{success:!1,error:o.message}}}function vi(){return At}async function zp(){if(!At||!At.blobUrl)return console.log("[Cloud Delete] No data file to delete"),{success:!0};try{console.log(`[Cloud Delete] Deleting: ${At.blobUrl}`);const o=await(await fetch(`${sa}/api/delete-data`,{method:"POST",headers:gr(),body:JSON.stringify({blobUrl:At.blobUrl})})).json();return o.success&&(console.log("[Cloud Delete] Data file deleted successfully"),At=null),o}catch(u){return console.error("[Cloud Delete] Error:",u),{success:!1,error:u.message}}}function Mp(){At=null}async function Ic(u){try{console.log(`[Cloud Read] Reading from: ${u}`);const l=await(await fetch(`${sa}/api/read-data?url=${encodeURIComponent(u)}`)).json();return l.success&&At&&(At.content=l.content),l}catch(o){return console.error("[Cloud Read] Error:",o),{success:!1,error:o.message}}}async function Up(u){if(At&&At.filename===u&&At.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),Ic(At.blobUrl);if(pt===null&&await jn(),!pt)return At&&At.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),Ic(At.blobUrl)):{success:!1,error:"Backend server not available"};try{const l=await(await fetch(`${cn}/read-file/data/${encodeURIComponent(u)}`)).json();if(!l.success)return{success:!1,error:l.error||"Failed to read file"};const c=l.content,d=c.split(/\r?\n/),f=d[0]||"",g=d.filter(y=>y.trim()).length;return{success:!0,filename:u,firstLine:f,totalLines:g,content:c}}catch(o){return{success:!1,error:o.message}}}async function Ky(u){if(!u||u.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${u.length} figures via QuickChart.io...`);const l=await(await fetch(`${sa}/api/quickchart`,{method:"POST",headers:gr(),body:JSON.stringify({chartData:u})})).json();return l.success?console.log(`[QuickChart] Generated ${l.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${l.error}`),l}catch(o){return console.error("[QuickChart] Error:",o),{success:!1,error:o.message}}}let Vs=[];function Fp(){return Vs}async function Bp(){const u=[];for(const o of Vs)try{const l=await fetch(o.blobUrl);if(l.ok){const c=await l.blob();u.push({filename:o.filename,blob:c})}else console.warn(`[PNG Figures] Failed to download ${o.filename}: ${l.status}`)}catch(l){console.warn(`[PNG Figures] Error downloading ${o.filename}:`,l)}return console.log(`[PNG Figures] Downloaded ${u.length}/${Vs.length} figures`),u}let Dc=[];function Jy(u){Dc=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:o.base64})),Vs=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${o.base64}`,description:o.description||""})),console.log(`[PNG Storage] Stored ${Dc.length} PNG figures for LaTeX compilation and download`)}function Pp(){return Dc}let $c=null;function Vp(u,o){$c={filename:u,content:o},console.log(`[Bibliography] Stored ${u} (${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries)`)}function Hp(){return $c}function $p(){return $c}let hr=null;function ev(u,o){const l=['"""',"ICIScopilot - Visualization Code",`Generated: ${new Date().toISOString()}`,o?"Data Source: AI-synthesized illustrative data":"Data Source: User-provided data file","","This script reproduces the figures generated for your research paper.","Requirements: pip install matplotlib numpy",'"""',"","import matplotlib.pyplot as plt","import numpy as np","","# Set publication-quality defaults","plt.rcParams.update({",'    "font.size": 12,','    "axes.titlesize": 14,','    "axes.labelsize": 12,','    "figure.figsize": (10, 6),','    "figure.dpi": 150',"})",""];return u.forEach((c,d)=>{var f,g,y,v,p,_,A,R;if(l.push("# ============================================================================"),l.push(`# Figure ${d+1}: ${c.title||"Untitled"}`),l.push("# ============================================================================"),l.push(""),l.push(`fig${d+1}, ax${d+1} = plt.subplots()`),l.push(""),c.type==="bar")l.push("# Bar chart data"),l.push(`labels_${d+1} = ${JSON.stringify(c.labels||[])}`),c.datasets&&c.datasets.length>0&&(c.datasets.forEach((S,T)=>{l.push(`data_${d+1}_${T} = ${JSON.stringify(S.data||[])}`)}),c.datasets.length===1?l.push(`ax${d+1}.bar(labels_${d+1}, data_${d+1}_0, color='steelblue')`):(l.push(`x = np.arange(len(labels_${d+1}))`),l.push(`width = ${(.8/c.datasets.length).toFixed(2)}`),c.datasets.forEach((S,T)=>{const m=T-(c.datasets.length-1)/2;l.push(`ax${d+1}.bar(x + ${m.toFixed(2)}*width, data_${d+1}_${T}, width, label='${S.label||`Series ${T+1}`}')`)}),l.push(`ax${d+1}.set_xticks(x)`),l.push(`ax${d+1}.set_xticklabels(labels_${d+1})`),l.push(`ax${d+1}.legend()`)));else if(c.type==="line")l.push("# Line chart data"),l.push(`labels_${d+1} = ${JSON.stringify(c.labels||[])}`),c.datasets&&c.datasets.length>0&&(c.datasets.forEach((S,T)=>{l.push(`data_${d+1}_${T} = ${JSON.stringify(S.data||[])}`),l.push(`ax${d+1}.plot(labels_${d+1}, data_${d+1}_${T}, marker='o', label='${S.label||`Series ${T+1}`}')`)}),c.datasets.length>1&&l.push(`ax${d+1}.legend()`));else if(c.type==="pie"||c.type==="doughnut")l.push("# Pie chart data"),l.push(`labels_${d+1} = ${JSON.stringify(c.labels||[])}`),c.datasets&&c.datasets[0]&&(l.push(`data_${d+1} = ${JSON.stringify(c.datasets[0].data||[])}`),l.push(`ax${d+1}.pie(data_${d+1}, labels=labels_${d+1}, autopct='%1.1f%%')`));else if(c.type==="scatter"){if(l.push("# Scatter plot data"),c.datasets&&c.datasets[0]&&c.datasets[0].data){const S=c.datasets[0].data;l.push(`x_${d+1} = ${JSON.stringify(S.map(T=>T.x||T))}`),l.push(`y_${d+1} = ${JSON.stringify(S.map(T=>T.y||T))}`),l.push(`ax${d+1}.scatter(x_${d+1}, y_${d+1}, alpha=0.6)`)}}else l.push(`# ${c.type} chart - data structure:`),l.push(`chart_config_${d+1} = ${JSON.stringify(c,null,2).split(`
`).map((S,T)=>T===0?S:"# "+S).join(`
`)}`);l.push(""),l.push(`ax${d+1}.set_title('${(c.title||"").replace(/'/g,"\\'")}')`),(v=(y=(g=(f=c.options)==null?void 0:f.scales)==null?void 0:g.x)==null?void 0:y.title)!=null&&v.text&&l.push(`ax${d+1}.set_xlabel('${c.options.scales.x.title.text}')`),(R=(A=(_=(p=c.options)==null?void 0:p.scales)==null?void 0:_.y)==null?void 0:A.title)!=null&&R.text&&l.push(`ax${d+1}.set_ylabel('${c.options.scales.y.title.text}')`),l.push("plt.tight_layout()"),l.push(`fig${d+1}.savefig('figure_${d+1}.png', dpi=300, bbox_inches='tight')`),l.push(`print(f"Saved figure_${d+1}.png")`),l.push("")}),l.push("# Show all figures"),l.push("plt.show()"),l.push(""),l.push(`print("\\nGenerated ${u.length} figures successfully!")`),l.join(`
`)}function tv(u,o){const l=ev(u,o);hr={chartData:u,pythonCode:l,isSynthetic:o,generatedAt:new Date().toISOString()},console.log(`[Chart Data] Stored ${u.length} chart configs and Python code (${l.length} chars)`)}function Gp(){return hr?{chartDataJson:JSON.stringify(hr.chartData,null,2),pythonCode:hr.pythonCode,isSynthetic:hr.isSynthetic}:null}function qp(){hr=null}const vc=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:Gs,backupAndClearFiles:kp,checkBackendHealth:jn,clearChartData:qp,clearCloudDataFile:Mp,compileLaTeX:Np,createViewerLink:Dp,deleteCloudDataFile:zp,downloadAllFigures:Bp,downloadCompiledPdf:Ip,executePythonScript:jp,generateQuickChartFigures:Ky,getBibliographyContent:$p,getBibliographyForCompilation:Hp,getChartDataContent:Gp,getCloudDataFile:vi,getCurrentSessionFigures:Fp,getDataFilePreview:Up,getLastCompiledPdfBlob:Hc,getPdfDownloadUrl:Cp,getPngFiguresForCompilation:Pp,openPaperViewer:Op,readCloudDataFile:Ic,refreshManifest:_p,saveDataFile:Cc,saveFiles:Rp,savePaperFile:Nc,saveReviewOutputs:Tp,storeBibliography:Vp,storeChartData:tv,storePngFiguresForCompilation:Jy,uploadDataFileToCloud:Lp},Symbol.toStringTag,{value:"Module"})),nv=({logs:u,isProcessing:o,currentRound:l,isComplete:c=!1,onProceedToSupervisor:d,onAbort:f,onRestart:g,filePrefix:y,participantEmail:v})=>{const[p,_]=be.useState([]),[A,R]=be.useState(null),[S,T]=be.useState(!1),[m,E]=be.useState({}),w=async()=>{T(!0),R(null);const O=Fs(l),X=fi(l),H=ia(l,"icis_paper");if(!O||!X||!H){R("Missing files to save"),T(!1);return}const $=await Tp(l,O,X,H,y,v);$.success?_($.files||[]):R($.error||"Failed to save files"),T(!1)},D=async(O,X)=>{var F;const H=(F=O.target.files)==null?void 0:F[0];if(!H)return;const $=await H.text();try{const ae=JSON.parse($);E(ee=>({...ee,[X]:ae}))}catch(ae){console.error(`Failed to parse ${X} file:`,ae)}},I=()=>{const O=m.oversight||Fs(l),X=m.feedback||fi(l),H=ia(l,"icis_paper");O&&X&&H&&d&&d({oversight:O,feedback:X,paperContent:H,paperVersion:l})},U=c&&(m.oversight&&m.feedback||Fs(l)&&fi(l));return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(an,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Reviewing Paper (Round ",l,")"]}),s.jsx(Pc,{stageName:"Reviewer",isProcessing:o,canAbort:!0,canRestart:!o&&c,onAbort:f||(()=>{}),onRestart:g||(()=>{})})]}),s.jsx(yi,{logs:u,height:"h-48"}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${o?"bg-indigo-100 text-indigo-600":c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:o?s.jsx(an,{size:14,className:"animate-spin"}):c?s.jsx(on,{size:14}):"1"}),s.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"2"}),s.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"3"}),s.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),c&&s.jsx("div",{className:"mt-6",children:s.jsx(Zy,{allOversight:Bc(),compact:!0})}),c&&s.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[s.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[s.jsx(Ps,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),s.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),s.jsxs("button",{onClick:w,disabled:S,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[s.jsx(Ps,{size:16,className:S?"animate-pulse":""}),S?"Downloading...":"Download Review Outputs"]}),s.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",l,".json, feedback_v",l,".json, icis_paper_v",l,".tex"]}),p.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",p.join(", ")]}),A&&s.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",A]}),s.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[s.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[s.jsx(Sp,{size:16}),"Upload Modified Files (Optional)"]}),s.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",m.oversight&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:O=>D(O,"oversight"),className:"text-xs w-full"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",m.feedback&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:O=>D(O,"feedback"),className:"text-xs w-full"})]})]})]}),s.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:s.jsxs("button",{onClick:I,disabled:!U,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",s.jsx(gp,{size:18})]})})]})]})},av=({currentRound:u,currentPaperVersion:o,lastFeedback:l,isProcessing:c,oversightData:d,allOversight:f,onAction:g,reviewOutputFiles:y})=>{var k,Q;const[v,p]=be.useState(""),[_,A]=be.useState(!1),[R,S]=be.useState(!1),[T,m]=be.useState(!1),E=(y==null?void 0:y.oversight)||d,w=y==null?void 0:y.feedback,D=()=>{qy(o,"icis_paper")},I=(y==null?void 0:y.paperContent)||ia(o,"icis_paper"),U=y?"Uploaded/Downloaded files":"Internal storage",O=(E==null?void 0:E.averageScore)||0,X=(E==null?void 0:E.errorCounts.majorErrors)||0,H=E?E.reviewScores.novelty<4||E.reviewScores.significance<4||E.reviewScores.methodologicalRigor<4||E.reviewScores.clarity<4||E.reviewScores.relevance<4:!1,$=E?E.trustworthiness.reliability<5||E.trustworthiness.benevolence<5||E.trustworthiness.goalAlignment<5:!1,F=((E==null?void 0:E.criticalAlerts.length)||0)>0,ae=H||$||X>0||F,ee=!ae&&O>=4;return s.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[s.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),s.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",u]}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),s.jsx("div",{className:`p-4 font-mono text-sm ${ae?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:s.jsxs("div",{className:"font-bold",children:["STATUS: ",ae?"⚠️ ATTENTION NEEDED":ee?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),(E==null?void 0:E.improvementPotential)&&s.jsxs("div",{className:`p-4 font-mono text-sm border-x border-b ${E.improvementPotential==="exhausted"?"bg-blue-100 border-blue-300":E.improvementPotential==="low"?"bg-yellow-100 border-yellow-300":"bg-slate-100 border-slate-300"}`,children:[s.jsxs("div",{className:"font-bold mb-1",children:["IMPROVEMENT POTENTIAL: ",E.improvementPotential==="exhausted"?"🏁 EXHAUSTED - Paper has reached its potential":E.improvementPotential==="low"?"📉 LOW - Minor improvements only":E.improvementPotential==="medium"?"📊 MEDIUM - Moderate improvements possible":"📈 HIGH - Significant improvements possible"]}),E.convergenceReason&&s.jsxs("div",{className:"text-xs mt-2 text-slate-700",children:[s.jsx("span",{className:"font-semibold",children:"Reason: "}),E.convergenceReason]}),(E.improvementPotential==="exhausted"||E.canImprove===!1)&&s.jsx("div",{className:"text-xs mt-2 text-blue-700 font-medium",children:"ℹ️ The paper has reached its maximum quality given the available interview and data. You may finalize or provide additional source materials for further improvement."})]}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(Hs,{size:16,className:"text-slate-600"}),s.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),s.jsx("span",{className:"text-slate-600",children:U})]}),s.jsx("button",{onClick:()=>m(!T),className:"text-xs text-indigo-600 hover:underline",children:T?"Hide Details":"Show Details"})]}),T&&s.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),s.jsxs("p",{className:"text-slate-600",children:["oversight_v",(E==null?void 0:E.version)||u,".json",(y==null?void 0:y.oversight)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),s.jsxs("p",{className:"text-slate-600",children:["feedback_v",(w==null?void 0:w.version)||u,".json",(y==null?void 0:y.feedback)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),s.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(y==null?void 0:y.paperVersion)||o,".tex",(y==null?void 0:y.paperContent)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),s.jsx("p",{className:y?"text-emerald-600":"text-slate-600",children:y?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),f.map((x,G)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",x.version]},G)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),s.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(x=>{var B;const G=x==="Methodological Rigor"?"methodologicalRigor":x.toLowerCase();return s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:x}),f.map((V,ue)=>{const te=V.reviewScores[G]||0;return s.jsx("td",{className:`text-center p-2 ${te<4?"text-red-600 font-bold":""}`,children:te},ue)}),s.jsx("td",{className:"p-2 text-slate-600 text-xs",children:E!=null&&E.reviewComments?((B=E.reviewComments[G])==null?void 0:B.substring(0,30))+"...":"-"})]},x)}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"AVERAGE"}),f.map((x,G)=>s.jsx("td",{className:"text-center p-2",children:x.averageScore.toFixed(1)},G)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?f[f.length-1].averageScore>f[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),f.map((x,G)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",x.version]},G)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Remaining Issues"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),f.map((x,G)=>s.jsx("td",{className:`text-center p-2 ${x.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:x.errorCounts.majorErrors},G)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((k=E==null?void 0:E.errorDetails.majorErrors[0])==null?void 0:k.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),f.map((x,G)=>s.jsx("td",{className:"text-center p-2",children:x.errorCounts.minorErrors},G)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((Q=E==null?void 0:E.errorDetails.minorErrors[0])==null?void 0:Q.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"TOTAL"}),f.map((x,G)=>s.jsx("td",{className:"text-center p-2",children:x.errorCounts.majorErrors+x.errorCounts.minorErrors},G)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?`${Math.round((1-(f[f.length-1].errorCounts.majorErrors+f[f.length-1].errorCounts.minorErrors)/Math.max(1,f[0].errorCounts.majorErrors+f[0].errorCounts.minorErrors))*100)}% reduction`:"-"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),s.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.reliability)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.reliabilityRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),s.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.benevolence)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.benevolenceRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),s.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.goalAlignment)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${F?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),F?s.jsx("div",{className:"space-y-3",children:E==null?void 0:E.criticalAlerts.map((x,G)=>s.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[s.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",x.number,": ",x.title," (BLOCKING ISSUE)"]}),s.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Status:"})," ",x.status]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Impact:"})," ",x.impact]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Details:"})," ",x.details]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Action Required:"})," ",x.actionRequired]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Consequence:"})," ",x.consequence]})]})]},G))}):s.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),s.jsxs("button",{onClick:()=>A(!_),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[s.jsx(_c,{size:12}),_?"Hide Full":"Show Full"]})]}),_?s.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:w?s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Summary:"}),s.jsx("p",{children:w.summary||"No summary available."})]}),w.majorIssues&&w.majorIssues.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-red-600",children:"Major Issues:"}),s.jsx("ul",{className:"list-disc list-inside",children:w.majorIssues.map((x,G)=>s.jsx("li",{children:x},G))})]}),w.suggestions&&w.suggestions.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Suggestions:"}),s.jsx("ul",{className:"list-disc list-inside",children:w.suggestions.map((x,G)=>s.jsx("li",{children:x},G))})]})]}):s.jsx("p",{children:l||"No feedback generated."})}):s.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(w==null?void 0:w.summary)||l||"No feedback generated."})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${ae?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),ae?s.jsxs("div",{children:[s.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",u+1]}),s.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",H?"Review scores below threshold (< 4)":X>0?`${X} major error(s) remaining`:$?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),s.jsxs("div",{className:"mt-2 text-sm",children:[s.jsx("p",{className:"font-medium",children:"Priority actions:"}),s.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:E==null?void 0:E.errorDetails.majorErrors.slice(0,3).map((x,G)=>s.jsx("li",{children:x},G))})]})]}):s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),s.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),s.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[s.jsxs("li",{children:["Average review score: ",O.toFixed(1),"/5"]}),s.jsx("li",{children:"All trustworthiness scores ≥ 5"}),s.jsx("li",{children:"No major errors remaining"}),s.jsx("li",{children:"No critical alerts"})]})]})]}),s.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),s.jsx("li",{children:"• Current feedback will guide improvements"}),s.jsx("li",{children:"• Add your directives below"})]})]}),s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISfinalize"}),s.jsx("li",{children:"• Paper will be prepared for submission"}),s.jsx("li",{children:"• No further revisions will be made"})]})]})]})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),s.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:v,onChange:x=>p(x.target.value)})]}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("button",{onClick:()=>g("revise",v),disabled:c,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),s.jsx("button",{onClick:()=>g("finalize"),disabled:c,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]})]}),s.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[s.jsxs("button",{onClick:()=>S(!R),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(_c,{size:14})," ",R?"Hide":"View"," Paper Draft"]}),s.jsxs("button",{onClick:D,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(Ps,{size:14})," Download (.tex)"]})]}),R&&I&&s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",o,"):"]}),s.jsx("div",{className:"max-h-96 overflow-y-auto",children:s.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:I})})]})]})},rv=({logs:u,isProcessing:o,currentPaperVersion:l,paperContent:c,onAbort:d,onRestart:f})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(an,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Revising Paper (v",l," → v",(l||0)+1,")"]}),s.jsx(Pc,{stageName:"Reviser",isProcessing:o,canAbort:!0,canRestart:!o,onAbort:d||(()=>{}),onRestart:f||(()=>{})})]}),s.jsx(yi,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),s.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:c?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:c}):s.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function Ls(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var bc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var op;function iv(){return op||(op=1,(function(u,o){(function(l){u.exports=l()})(function(){return(function l(c,d,f){function g(p,_){if(!d[p]){if(!c[p]){var A=typeof Ls=="function"&&Ls;if(!_&&A)return A(p,!0);if(y)return y(p,!0);var R=new Error("Cannot find module '"+p+"'");throw R.code="MODULE_NOT_FOUND",R}var S=d[p]={exports:{}};c[p][0].call(S.exports,function(T){var m=c[p][1][T];return g(m||T)},S,S.exports,l,c,d,f)}return d[p].exports}for(var y=typeof Ls=="function"&&Ls,v=0;v<f.length;v++)g(f[v]);return g})({1:[function(l,c,d){var f=l("./utils"),g=l("./support"),y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";d.encode=function(v){for(var p,_,A,R,S,T,m,E=[],w=0,D=v.length,I=D,U=f.getTypeOf(v)!=="string";w<v.length;)I=D-w,A=U?(p=v[w++],_=w<D?v[w++]:0,w<D?v[w++]:0):(p=v.charCodeAt(w++),_=w<D?v.charCodeAt(w++):0,w<D?v.charCodeAt(w++):0),R=p>>2,S=(3&p)<<4|_>>4,T=1<I?(15&_)<<2|A>>6:64,m=2<I?63&A:64,E.push(y.charAt(R)+y.charAt(S)+y.charAt(T)+y.charAt(m));return E.join("")},d.decode=function(v){var p,_,A,R,S,T,m=0,E=0,w="data:";if(v.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var D,I=3*(v=v.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(v.charAt(v.length-1)===y.charAt(64)&&I--,v.charAt(v.length-2)===y.charAt(64)&&I--,I%1!=0)throw new Error("Invalid base64 input, bad content length.");for(D=g.uint8array?new Uint8Array(0|I):new Array(0|I);m<v.length;)p=y.indexOf(v.charAt(m++))<<2|(R=y.indexOf(v.charAt(m++)))>>4,_=(15&R)<<4|(S=y.indexOf(v.charAt(m++)))>>2,A=(3&S)<<6|(T=y.indexOf(v.charAt(m++))),D[E++]=p,S!==64&&(D[E++]=_),T!==64&&(D[E++]=A);return D}},{"./support":30,"./utils":32}],2:[function(l,c,d){var f=l("./external"),g=l("./stream/DataWorker"),y=l("./stream/Crc32Probe"),v=l("./stream/DataLengthProbe");function p(_,A,R,S,T){this.compressedSize=_,this.uncompressedSize=A,this.crc32=R,this.compression=S,this.compressedContent=T}p.prototype={getContentWorker:function(){var _=new g(f.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new v("data_length")),A=this;return _.on("end",function(){if(this.streamInfo.data_length!==A.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),_},getCompressedWorker:function(){return new g(f.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},p.createWorkerFrom=function(_,A,R){return _.pipe(new y).pipe(new v("uncompressedSize")).pipe(A.compressWorker(R)).pipe(new v("compressedSize")).withStreamInfo("compression",A)},c.exports=p},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,c,d){var f=l("./stream/GenericWorker");d.STORE={magic:"\0\0",compressWorker:function(){return new f("STORE compression")},uncompressWorker:function(){return new f("STORE decompression")}},d.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,c,d){var f=l("./utils"),g=(function(){for(var y,v=[],p=0;p<256;p++){y=p;for(var _=0;_<8;_++)y=1&y?3988292384^y>>>1:y>>>1;v[p]=y}return v})();c.exports=function(y,v){return y!==void 0&&y.length?f.getTypeOf(y)!=="string"?(function(p,_,A,R){var S=g,T=R+A;p^=-1;for(var m=R;m<T;m++)p=p>>>8^S[255&(p^_[m])];return-1^p})(0|v,y,y.length,0):(function(p,_,A,R){var S=g,T=R+A;p^=-1;for(var m=R;m<T;m++)p=p>>>8^S[255&(p^_.charCodeAt(m))];return-1^p})(0|v,y,y.length,0):0}},{"./utils":32}],5:[function(l,c,d){d.base64=!1,d.binary=!1,d.dir=!1,d.createFolders=!0,d.date=null,d.compression=null,d.compressionOptions=null,d.comment=null,d.unixPermissions=null,d.dosPermissions=null},{}],6:[function(l,c,d){var f=null;f=typeof Promise<"u"?Promise:l("lie"),c.exports={Promise:f}},{lie:37}],7:[function(l,c,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",g=l("pako"),y=l("./utils"),v=l("./stream/GenericWorker"),p=f?"uint8array":"array";function _(A,R){v.call(this,"FlateWorker/"+A),this._pako=null,this._pakoAction=A,this._pakoOptions=R,this.meta={}}d.magic="\b\0",y.inherits(_,v),_.prototype.processChunk=function(A){this.meta=A.meta,this._pako===null&&this._createPako(),this._pako.push(y.transformTo(p,A.data),!1)},_.prototype.flush=function(){v.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},_.prototype.cleanUp=function(){v.prototype.cleanUp.call(this),this._pako=null},_.prototype._createPako=function(){this._pako=new g[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var A=this;this._pako.onData=function(R){A.push({data:R,meta:A.meta})}},d.compressWorker=function(A){return new _("Deflate",A)},d.uncompressWorker=function(){return new _("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,c,d){function f(S,T){var m,E="";for(m=0;m<T;m++)E+=String.fromCharCode(255&S),S>>>=8;return E}function g(S,T,m,E,w,D){var I,U,O=S.file,X=S.compression,H=D!==p.utf8encode,$=y.transformTo("string",D(O.name)),F=y.transformTo("string",p.utf8encode(O.name)),ae=O.comment,ee=y.transformTo("string",D(ae)),k=y.transformTo("string",p.utf8encode(ae)),Q=F.length!==O.name.length,x=k.length!==ae.length,G="",B="",V="",ue=O.dir,te=O.date,ge={crc32:0,compressedSize:0,uncompressedSize:0};T&&!m||(ge.crc32=S.crc32,ge.compressedSize=S.compressedSize,ge.uncompressedSize=S.uncompressedSize);var C=0;T&&(C|=8),H||!Q&&!x||(C|=2048);var L=0,ie=0;ue&&(L|=16),w==="UNIX"?(ie=798,L|=(function(oe,Ae){var Te=oe;return oe||(Te=Ae?16893:33204),(65535&Te)<<16})(O.unixPermissions,ue)):(ie=20,L|=(function(oe){return 63&(oe||0)})(O.dosPermissions)),I=te.getUTCHours(),I<<=6,I|=te.getUTCMinutes(),I<<=5,I|=te.getUTCSeconds()/2,U=te.getUTCFullYear()-1980,U<<=4,U|=te.getUTCMonth()+1,U<<=5,U|=te.getUTCDate(),Q&&(B=f(1,1)+f(_($),4)+F,G+="up"+f(B.length,2)+B),x&&(V=f(1,1)+f(_(ee),4)+k,G+="uc"+f(V.length,2)+V);var se="";return se+=`
\0`,se+=f(C,2),se+=X.magic,se+=f(I,2),se+=f(U,2),se+=f(ge.crc32,4),se+=f(ge.compressedSize,4),se+=f(ge.uncompressedSize,4),se+=f($.length,2),se+=f(G.length,2),{fileRecord:A.LOCAL_FILE_HEADER+se+$+G,dirRecord:A.CENTRAL_FILE_HEADER+f(ie,2)+se+f(ee.length,2)+"\0\0\0\0"+f(L,4)+f(E,4)+$+G+ee}}var y=l("../utils"),v=l("../stream/GenericWorker"),p=l("../utf8"),_=l("../crc32"),A=l("../signature");function R(S,T,m,E){v.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=T,this.zipPlatform=m,this.encodeFileName=E,this.streamFiles=S,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}y.inherits(R,v),R.prototype.push=function(S){var T=S.meta.percent||0,m=this.entriesCount,E=this._sources.length;this.accumulate?this.contentBuffer.push(S):(this.bytesWritten+=S.data.length,v.prototype.push.call(this,{data:S.data,meta:{currentFile:this.currentFile,percent:m?(T+100*(m-E-1))/m:100}}))},R.prototype.openedSource=function(S){this.currentSourceOffset=this.bytesWritten,this.currentFile=S.file.name;var T=this.streamFiles&&!S.file.dir;if(T){var m=g(S,T,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},R.prototype.closedSource=function(S){this.accumulate=!1;var T=this.streamFiles&&!S.file.dir,m=g(S,T,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),T)this.push({data:(function(E){return A.DATA_DESCRIPTOR+f(E.crc32,4)+f(E.compressedSize,4)+f(E.uncompressedSize,4)})(S),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},R.prototype.flush=function(){for(var S=this.bytesWritten,T=0;T<this.dirRecords.length;T++)this.push({data:this.dirRecords[T],meta:{percent:100}});var m=this.bytesWritten-S,E=(function(w,D,I,U,O){var X=y.transformTo("string",O(U));return A.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(w,2)+f(w,2)+f(D,4)+f(I,4)+f(X.length,2)+X})(this.dirRecords.length,m,S,this.zipComment,this.encodeFileName);this.push({data:E,meta:{percent:100}})},R.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},R.prototype.registerPrevious=function(S){this._sources.push(S);var T=this;return S.on("data",function(m){T.processChunk(m)}),S.on("end",function(){T.closedSource(T.previous.streamInfo),T._sources.length?T.prepareNextSource():T.end()}),S.on("error",function(m){T.error(m)}),this},R.prototype.resume=function(){return!!v.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},R.prototype.error=function(S){var T=this._sources;if(!v.prototype.error.call(this,S))return!1;for(var m=0;m<T.length;m++)try{T[m].error(S)}catch{}return!0},R.prototype.lock=function(){v.prototype.lock.call(this);for(var S=this._sources,T=0;T<S.length;T++)S[T].lock()},c.exports=R},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,c,d){var f=l("../compressions"),g=l("./ZipFileWorker");d.generateWorker=function(y,v,p){var _=new g(v.streamFiles,p,v.platform,v.encodeFileName),A=0;try{y.forEach(function(R,S){A++;var T=(function(D,I){var U=D||I,O=f[U];if(!O)throw new Error(U+" is not a valid compression method !");return O})(S.options.compression,v.compression),m=S.options.compressionOptions||v.compressionOptions||{},E=S.dir,w=S.date;S._compressWorker(T,m).withStreamInfo("file",{name:R,dir:E,date:w,comment:S.comment||"",unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions}).pipe(_)}),_.entriesCount=A}catch(R){_.error(R)}return _}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,c,d){function f(){if(!(this instanceof f))return new f;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var g=new f;for(var y in this)typeof this[y]!="function"&&(g[y]=this[y]);return g}}(f.prototype=l("./object")).loadAsync=l("./load"),f.support=l("./support"),f.defaults=l("./defaults"),f.version="3.10.1",f.loadAsync=function(g,y){return new f().loadAsync(g,y)},f.external=l("./external"),c.exports=f},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,c,d){var f=l("./utils"),g=l("./external"),y=l("./utf8"),v=l("./zipEntries"),p=l("./stream/Crc32Probe"),_=l("./nodejsUtils");function A(R){return new g.Promise(function(S,T){var m=R.decompressed.getContentWorker().pipe(new p);m.on("error",function(E){T(E)}).on("end",function(){m.streamInfo.crc32!==R.decompressed.crc32?T(new Error("Corrupted zip : CRC32 mismatch")):S()}).resume()})}c.exports=function(R,S){var T=this;return S=f.extend(S||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:y.utf8decode}),_.isNode&&_.isStream(R)?g.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):f.prepareContent("the loaded zip file",R,!0,S.optimizedBinaryString,S.base64).then(function(m){var E=new v(S);return E.load(m),E}).then(function(m){var E=[g.Promise.resolve(m)],w=m.files;if(S.checkCRC32)for(var D=0;D<w.length;D++)E.push(A(w[D]));return g.Promise.all(E)}).then(function(m){for(var E=m.shift(),w=E.files,D=0;D<w.length;D++){var I=w[D],U=I.fileNameStr,O=f.resolve(I.fileNameStr);T.file(O,I.decompressed,{binary:!0,optimizedBinaryString:!0,date:I.date,dir:I.dir,comment:I.fileCommentStr.length?I.fileCommentStr:null,unixPermissions:I.unixPermissions,dosPermissions:I.dosPermissions,createFolders:S.createFolders}),I.dir||(T.file(O).unsafeOriginalName=U)}return E.zipComment.length&&(T.comment=E.zipComment),T})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,c,d){var f=l("../utils"),g=l("../stream/GenericWorker");function y(v,p){g.call(this,"Nodejs stream input adapter for "+v),this._upstreamEnded=!1,this._bindStream(p)}f.inherits(y,g),y.prototype._bindStream=function(v){var p=this;(this._stream=v).pause(),v.on("data",function(_){p.push({data:_,meta:{percent:0}})}).on("error",function(_){p.isPaused?this.generatedError=_:p.error(_)}).on("end",function(){p.isPaused?p._upstreamEnded=!0:p.end()})},y.prototype.pause=function(){return!!g.prototype.pause.call(this)&&(this._stream.pause(),!0)},y.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},c.exports=y},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,c,d){var f=l("readable-stream").Readable;function g(y,v,p){f.call(this,v),this._helper=y;var _=this;y.on("data",function(A,R){_.push(A)||_._helper.pause(),p&&p(R)}).on("error",function(A){_.emit("error",A)}).on("end",function(){_.push(null)})}l("../utils").inherits(g,f),g.prototype._read=function(){this._helper.resume()},c.exports=g},{"../utils":32,"readable-stream":16}],14:[function(l,c,d){c.exports={isNode:typeof Buffer<"u",newBufferFrom:function(f,g){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(f,g);if(typeof f=="number")throw new Error('The "data" argument must not be a number');return new Buffer(f,g)},allocBuffer:function(f){if(Buffer.alloc)return Buffer.alloc(f);var g=new Buffer(f);return g.fill(0),g},isBuffer:function(f){return Buffer.isBuffer(f)},isStream:function(f){return f&&typeof f.on=="function"&&typeof f.pause=="function"&&typeof f.resume=="function"}}},{}],15:[function(l,c,d){function f(O,X,H){var $,F=y.getTypeOf(X),ae=y.extend(H||{},_);ae.date=ae.date||new Date,ae.compression!==null&&(ae.compression=ae.compression.toUpperCase()),typeof ae.unixPermissions=="string"&&(ae.unixPermissions=parseInt(ae.unixPermissions,8)),ae.unixPermissions&&16384&ae.unixPermissions&&(ae.dir=!0),ae.dosPermissions&&16&ae.dosPermissions&&(ae.dir=!0),ae.dir&&(O=w(O)),ae.createFolders&&($=E(O))&&D.call(this,$,!0);var ee=F==="string"&&ae.binary===!1&&ae.base64===!1;H&&H.binary!==void 0||(ae.binary=!ee),(X instanceof A&&X.uncompressedSize===0||ae.dir||!X||X.length===0)&&(ae.base64=!1,ae.binary=!0,X="",ae.compression="STORE",F="string");var k=null;k=X instanceof A||X instanceof v?X:T.isNode&&T.isStream(X)?new m(O,X):y.prepareContent(O,X,ae.binary,ae.optimizedBinaryString,ae.base64);var Q=new R(O,k,ae);this.files[O]=Q}var g=l("./utf8"),y=l("./utils"),v=l("./stream/GenericWorker"),p=l("./stream/StreamHelper"),_=l("./defaults"),A=l("./compressedObject"),R=l("./zipObject"),S=l("./generate"),T=l("./nodejsUtils"),m=l("./nodejs/NodejsStreamInputAdapter"),E=function(O){O.slice(-1)==="/"&&(O=O.substring(0,O.length-1));var X=O.lastIndexOf("/");return 0<X?O.substring(0,X):""},w=function(O){return O.slice(-1)!=="/"&&(O+="/"),O},D=function(O,X){return X=X!==void 0?X:_.createFolders,O=w(O),this.files[O]||f.call(this,O,null,{dir:!0,createFolders:X}),this.files[O]};function I(O){return Object.prototype.toString.call(O)==="[object RegExp]"}var U={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(O){var X,H,$;for(X in this.files)$=this.files[X],(H=X.slice(this.root.length,X.length))&&X.slice(0,this.root.length)===this.root&&O(H,$)},filter:function(O){var X=[];return this.forEach(function(H,$){O(H,$)&&X.push($)}),X},file:function(O,X,H){if(arguments.length!==1)return O=this.root+O,f.call(this,O,X,H),this;if(I(O)){var $=O;return this.filter(function(ae,ee){return!ee.dir&&$.test(ae)})}var F=this.files[this.root+O];return F&&!F.dir?F:null},folder:function(O){if(!O)return this;if(I(O))return this.filter(function(F,ae){return ae.dir&&O.test(F)});var X=this.root+O,H=D.call(this,X),$=this.clone();return $.root=H.name,$},remove:function(O){O=this.root+O;var X=this.files[O];if(X||(O.slice(-1)!=="/"&&(O+="/"),X=this.files[O]),X&&!X.dir)delete this.files[O];else for(var H=this.filter(function(F,ae){return ae.name.slice(0,O.length)===O}),$=0;$<H.length;$++)delete this.files[H[$].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(O){var X,H={};try{if((H=y.extend(O||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:g.utf8encode})).type=H.type.toLowerCase(),H.compression=H.compression.toUpperCase(),H.type==="binarystring"&&(H.type="string"),!H.type)throw new Error("No output type specified.");y.checkSupport(H.type),H.platform!=="darwin"&&H.platform!=="freebsd"&&H.platform!=="linux"&&H.platform!=="sunos"||(H.platform="UNIX"),H.platform==="win32"&&(H.platform="DOS");var $=H.comment||this.comment||"";X=S.generateWorker(this,H,$)}catch(F){(X=new v("error")).error(F)}return new p(X,H.type||"string",H.mimeType)},generateAsync:function(O,X){return this.generateInternalStream(O).accumulate(X)},generateNodeStream:function(O,X){return(O=O||{}).type||(O.type="nodebuffer"),this.generateInternalStream(O).toNodejsStream(X)}};c.exports=U},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,c,d){c.exports=l("stream")},{stream:void 0}],17:[function(l,c,d){var f=l("./DataReader");function g(y){f.call(this,y);for(var v=0;v<this.data.length;v++)y[v]=255&y[v]}l("../utils").inherits(g,f),g.prototype.byteAt=function(y){return this.data[this.zero+y]},g.prototype.lastIndexOfSignature=function(y){for(var v=y.charCodeAt(0),p=y.charCodeAt(1),_=y.charCodeAt(2),A=y.charCodeAt(3),R=this.length-4;0<=R;--R)if(this.data[R]===v&&this.data[R+1]===p&&this.data[R+2]===_&&this.data[R+3]===A)return R-this.zero;return-1},g.prototype.readAndCheckSignature=function(y){var v=y.charCodeAt(0),p=y.charCodeAt(1),_=y.charCodeAt(2),A=y.charCodeAt(3),R=this.readData(4);return v===R[0]&&p===R[1]&&_===R[2]&&A===R[3]},g.prototype.readData=function(y){if(this.checkOffset(y),y===0)return[];var v=this.data.slice(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=g},{"../utils":32,"./DataReader":18}],18:[function(l,c,d){var f=l("../utils");function g(y){this.data=y,this.length=y.length,this.index=0,this.zero=0}g.prototype={checkOffset:function(y){this.checkIndex(this.index+y)},checkIndex:function(y){if(this.length<this.zero+y||y<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+y+"). Corrupted zip ?")},setIndex:function(y){this.checkIndex(y),this.index=y},skip:function(y){this.setIndex(this.index+y)},byteAt:function(){},readInt:function(y){var v,p=0;for(this.checkOffset(y),v=this.index+y-1;v>=this.index;v--)p=(p<<8)+this.byteAt(v);return this.index+=y,p},readString:function(y){return f.transformTo("string",this.readData(y))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var y=this.readInt(4);return new Date(Date.UTC(1980+(y>>25&127),(y>>21&15)-1,y>>16&31,y>>11&31,y>>5&63,(31&y)<<1))}},c.exports=g},{"../utils":32}],19:[function(l,c,d){var f=l("./Uint8ArrayReader");function g(y){f.call(this,y)}l("../utils").inherits(g,f),g.prototype.readData=function(y){this.checkOffset(y);var v=this.data.slice(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=g},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,c,d){var f=l("./DataReader");function g(y){f.call(this,y)}l("../utils").inherits(g,f),g.prototype.byteAt=function(y){return this.data.charCodeAt(this.zero+y)},g.prototype.lastIndexOfSignature=function(y){return this.data.lastIndexOf(y)-this.zero},g.prototype.readAndCheckSignature=function(y){return y===this.readData(4)},g.prototype.readData=function(y){this.checkOffset(y);var v=this.data.slice(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=g},{"../utils":32,"./DataReader":18}],21:[function(l,c,d){var f=l("./ArrayReader");function g(y){f.call(this,y)}l("../utils").inherits(g,f),g.prototype.readData=function(y){if(this.checkOffset(y),y===0)return new Uint8Array(0);var v=this.data.subarray(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=g},{"../utils":32,"./ArrayReader":17}],22:[function(l,c,d){var f=l("../utils"),g=l("../support"),y=l("./ArrayReader"),v=l("./StringReader"),p=l("./NodeBufferReader"),_=l("./Uint8ArrayReader");c.exports=function(A){var R=f.getTypeOf(A);return f.checkSupport(R),R!=="string"||g.uint8array?R==="nodebuffer"?new p(A):g.uint8array?new _(f.transformTo("uint8array",A)):new y(f.transformTo("array",A)):new v(A)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,c,d){d.LOCAL_FILE_HEADER="PK",d.CENTRAL_FILE_HEADER="PK",d.CENTRAL_DIRECTORY_END="PK",d.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",d.ZIP64_CENTRAL_DIRECTORY_END="PK",d.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,c,d){var f=l("./GenericWorker"),g=l("../utils");function y(v){f.call(this,"ConvertWorker to "+v),this.destType=v}g.inherits(y,f),y.prototype.processChunk=function(v){this.push({data:g.transformTo(this.destType,v.data),meta:v.meta})},c.exports=y},{"../utils":32,"./GenericWorker":28}],25:[function(l,c,d){var f=l("./GenericWorker"),g=l("../crc32");function y(){f.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(y,f),y.prototype.processChunk=function(v){this.streamInfo.crc32=g(v.data,this.streamInfo.crc32||0),this.push(v)},c.exports=y},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,c,d){var f=l("../utils"),g=l("./GenericWorker");function y(v){g.call(this,"DataLengthProbe for "+v),this.propName=v,this.withStreamInfo(v,0)}f.inherits(y,g),y.prototype.processChunk=function(v){if(v){var p=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=p+v.data.length}g.prototype.processChunk.call(this,v)},c.exports=y},{"../utils":32,"./GenericWorker":28}],27:[function(l,c,d){var f=l("../utils"),g=l("./GenericWorker");function y(v){g.call(this,"DataWorker");var p=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,v.then(function(_){p.dataIsReady=!0,p.data=_,p.max=_&&_.length||0,p.type=f.getTypeOf(_),p.isPaused||p._tickAndRepeat()},function(_){p.error(_)})}f.inherits(y,g),y.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this.data=null},y.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,f.delay(this._tickAndRepeat,[],this)),!0)},y.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(f.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},y.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var v=null,p=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":v=this.data.substring(this.index,p);break;case"uint8array":v=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":v=this.data.slice(this.index,p)}return this.index=p,this.push({data:v,meta:{percent:this.max?this.index/this.max*100:0}})},c.exports=y},{"../utils":32,"./GenericWorker":28}],28:[function(l,c,d){function f(g){this.name=g||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}f.prototype={push:function(g){this.emit("data",g)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(g){this.emit("error",g)}return!0},error:function(g){return!this.isFinished&&(this.isPaused?this.generatedError=g:(this.isFinished=!0,this.emit("error",g),this.previous&&this.previous.error(g),this.cleanUp()),!0)},on:function(g,y){return this._listeners[g].push(y),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(g,y){if(this._listeners[g])for(var v=0;v<this._listeners[g].length;v++)this._listeners[g][v].call(this,y)},pipe:function(g){return g.registerPrevious(this)},registerPrevious:function(g){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=g.streamInfo,this.mergeStreamInfo(),this.previous=g;var y=this;return g.on("data",function(v){y.processChunk(v)}),g.on("end",function(){y.end()}),g.on("error",function(v){y.error(v)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var g=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),g=!0),this.previous&&this.previous.resume(),!g},flush:function(){},processChunk:function(g){this.push(g)},withStreamInfo:function(g,y){return this.extraStreamInfo[g]=y,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var g in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,g)&&(this.streamInfo[g]=this.extraStreamInfo[g])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var g="Worker "+this.name;return this.previous?this.previous+" -> "+g:g}},c.exports=f},{}],29:[function(l,c,d){var f=l("../utils"),g=l("./ConvertWorker"),y=l("./GenericWorker"),v=l("../base64"),p=l("../support"),_=l("../external"),A=null;if(p.nodestream)try{A=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function R(T,m){return new _.Promise(function(E,w){var D=[],I=T._internalType,U=T._outputType,O=T._mimeType;T.on("data",function(X,H){D.push(X),m&&m(H)}).on("error",function(X){D=[],w(X)}).on("end",function(){try{var X=(function(H,$,F){switch(H){case"blob":return f.newBlob(f.transformTo("arraybuffer",$),F);case"base64":return v.encode($);default:return f.transformTo(H,$)}})(U,(function(H,$){var F,ae=0,ee=null,k=0;for(F=0;F<$.length;F++)k+=$[F].length;switch(H){case"string":return $.join("");case"array":return Array.prototype.concat.apply([],$);case"uint8array":for(ee=new Uint8Array(k),F=0;F<$.length;F++)ee.set($[F],ae),ae+=$[F].length;return ee;case"nodebuffer":return Buffer.concat($);default:throw new Error("concat : unsupported type '"+H+"'")}})(I,D),O);E(X)}catch(H){w(H)}D=[]}).resume()})}function S(T,m,E){var w=m;switch(m){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=m,this._mimeType=E,f.checkSupport(w),this._worker=T.pipe(new g(w)),T.lock()}catch(D){this._worker=new y("error"),this._worker.error(D)}}S.prototype={accumulate:function(T){return R(this,T)},on:function(T,m){var E=this;return T==="data"?this._worker.on(T,function(w){m.call(E,w.data,w.meta)}):this._worker.on(T,function(){f.delay(m,arguments,E)}),this},resume:function(){return f.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(T){if(f.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new A(this,{objectMode:this._outputType!=="nodebuffer"},T)}},c.exports=S},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,c,d){if(d.base64=!0,d.array=!0,d.string=!0,d.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",d.nodebuffer=typeof Buffer<"u",d.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")d.blob=!1;else{var f=new ArrayBuffer(0);try{d.blob=new Blob([f],{type:"application/zip"}).size===0}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);g.append(f),d.blob=g.getBlob("application/zip").size===0}catch{d.blob=!1}}}try{d.nodestream=!!l("readable-stream").Readable}catch{d.nodestream=!1}},{"readable-stream":16}],31:[function(l,c,d){for(var f=l("./utils"),g=l("./support"),y=l("./nodejsUtils"),v=l("./stream/GenericWorker"),p=new Array(256),_=0;_<256;_++)p[_]=252<=_?6:248<=_?5:240<=_?4:224<=_?3:192<=_?2:1;p[254]=p[254]=1;function A(){v.call(this,"utf-8 decode"),this.leftOver=null}function R(){v.call(this,"utf-8 encode")}d.utf8encode=function(S){return g.nodebuffer?y.newBufferFrom(S,"utf-8"):(function(T){var m,E,w,D,I,U=T.length,O=0;for(D=0;D<U;D++)(64512&(E=T.charCodeAt(D)))==55296&&D+1<U&&(64512&(w=T.charCodeAt(D+1)))==56320&&(E=65536+(E-55296<<10)+(w-56320),D++),O+=E<128?1:E<2048?2:E<65536?3:4;for(m=g.uint8array?new Uint8Array(O):new Array(O),D=I=0;I<O;D++)(64512&(E=T.charCodeAt(D)))==55296&&D+1<U&&(64512&(w=T.charCodeAt(D+1)))==56320&&(E=65536+(E-55296<<10)+(w-56320),D++),E<128?m[I++]=E:(E<2048?m[I++]=192|E>>>6:(E<65536?m[I++]=224|E>>>12:(m[I++]=240|E>>>18,m[I++]=128|E>>>12&63),m[I++]=128|E>>>6&63),m[I++]=128|63&E);return m})(S)},d.utf8decode=function(S){return g.nodebuffer?f.transformTo("nodebuffer",S).toString("utf-8"):(function(T){var m,E,w,D,I=T.length,U=new Array(2*I);for(m=E=0;m<I;)if((w=T[m++])<128)U[E++]=w;else if(4<(D=p[w]))U[E++]=65533,m+=D-1;else{for(w&=D===2?31:D===3?15:7;1<D&&m<I;)w=w<<6|63&T[m++],D--;1<D?U[E++]=65533:w<65536?U[E++]=w:(w-=65536,U[E++]=55296|w>>10&1023,U[E++]=56320|1023&w)}return U.length!==E&&(U.subarray?U=U.subarray(0,E):U.length=E),f.applyFromCharCode(U)})(S=f.transformTo(g.uint8array?"uint8array":"array",S))},f.inherits(A,v),A.prototype.processChunk=function(S){var T=f.transformTo(g.uint8array?"uint8array":"array",S.data);if(this.leftOver&&this.leftOver.length){if(g.uint8array){var m=T;(T=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),T.set(m,this.leftOver.length)}else T=this.leftOver.concat(T);this.leftOver=null}var E=(function(D,I){var U;for((I=I||D.length)>D.length&&(I=D.length),U=I-1;0<=U&&(192&D[U])==128;)U--;return U<0||U===0?I:U+p[D[U]]>I?U:I})(T),w=T;E!==T.length&&(g.uint8array?(w=T.subarray(0,E),this.leftOver=T.subarray(E,T.length)):(w=T.slice(0,E),this.leftOver=T.slice(E,T.length))),this.push({data:d.utf8decode(w),meta:S.meta})},A.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:d.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},d.Utf8DecodeWorker=A,f.inherits(R,v),R.prototype.processChunk=function(S){this.push({data:d.utf8encode(S.data),meta:S.meta})},d.Utf8EncodeWorker=R},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,c,d){var f=l("./support"),g=l("./base64"),y=l("./nodejsUtils"),v=l("./external");function p(m){return m}function _(m,E){for(var w=0;w<m.length;++w)E[w]=255&m.charCodeAt(w);return E}l("setimmediate"),d.newBlob=function(m,E){d.checkSupport("blob");try{return new Blob([m],{type:E})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(m),w.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var A={stringifyByChunk:function(m,E,w){var D=[],I=0,U=m.length;if(U<=w)return String.fromCharCode.apply(null,m);for(;I<U;)E==="array"||E==="nodebuffer"?D.push(String.fromCharCode.apply(null,m.slice(I,Math.min(I+w,U)))):D.push(String.fromCharCode.apply(null,m.subarray(I,Math.min(I+w,U)))),I+=w;return D.join("")},stringifyByChar:function(m){for(var E="",w=0;w<m.length;w++)E+=String.fromCharCode(m[w]);return E},applyCanBeUsed:{uint8array:(function(){try{return f.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return f.nodebuffer&&String.fromCharCode.apply(null,y.allocBuffer(1)).length===1}catch{return!1}})()}};function R(m){var E=65536,w=d.getTypeOf(m),D=!0;if(w==="uint8array"?D=A.applyCanBeUsed.uint8array:w==="nodebuffer"&&(D=A.applyCanBeUsed.nodebuffer),D)for(;1<E;)try{return A.stringifyByChunk(m,w,E)}catch{E=Math.floor(E/2)}return A.stringifyByChar(m)}function S(m,E){for(var w=0;w<m.length;w++)E[w]=m[w];return E}d.applyFromCharCode=R;var T={};T.string={string:p,array:function(m){return _(m,new Array(m.length))},arraybuffer:function(m){return T.string.uint8array(m).buffer},uint8array:function(m){return _(m,new Uint8Array(m.length))},nodebuffer:function(m){return _(m,y.allocBuffer(m.length))}},T.array={string:R,array:p,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return y.newBufferFrom(m)}},T.arraybuffer={string:function(m){return R(new Uint8Array(m))},array:function(m){return S(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:p,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return y.newBufferFrom(new Uint8Array(m))}},T.uint8array={string:R,array:function(m){return S(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:p,nodebuffer:function(m){return y.newBufferFrom(m)}},T.nodebuffer={string:R,array:function(m){return S(m,new Array(m.length))},arraybuffer:function(m){return T.nodebuffer.uint8array(m).buffer},uint8array:function(m){return S(m,new Uint8Array(m.length))},nodebuffer:p},d.transformTo=function(m,E){if(E=E||"",!m)return E;d.checkSupport(m);var w=d.getTypeOf(E);return T[w][m](E)},d.resolve=function(m){for(var E=m.split("/"),w=[],D=0;D<E.length;D++){var I=E[D];I==="."||I===""&&D!==0&&D!==E.length-1||(I===".."?w.pop():w.push(I))}return w.join("/")},d.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":f.nodebuffer&&y.isBuffer(m)?"nodebuffer":f.uint8array&&m instanceof Uint8Array?"uint8array":f.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},d.checkSupport=function(m){if(!f[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},d.MAX_VALUE_16BITS=65535,d.MAX_VALUE_32BITS=-1,d.pretty=function(m){var E,w,D="";for(w=0;w<(m||"").length;w++)D+="\\x"+((E=m.charCodeAt(w))<16?"0":"")+E.toString(16).toUpperCase();return D},d.delay=function(m,E,w){setImmediate(function(){m.apply(w||null,E||[])})},d.inherits=function(m,E){function w(){}w.prototype=E.prototype,m.prototype=new w},d.extend=function(){var m,E,w={};for(m=0;m<arguments.length;m++)for(E in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],E)&&w[E]===void 0&&(w[E]=arguments[m][E]);return w},d.prepareContent=function(m,E,w,D,I){return v.Promise.resolve(E).then(function(U){return f.blob&&(U instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(U))!==-1)&&typeof FileReader<"u"?new v.Promise(function(O,X){var H=new FileReader;H.onload=function($){O($.target.result)},H.onerror=function($){X($.target.error)},H.readAsArrayBuffer(U)}):U}).then(function(U){var O=d.getTypeOf(U);return O?(O==="arraybuffer"?U=d.transformTo("uint8array",U):O==="string"&&(I?U=g.decode(U):w&&D!==!0&&(U=(function(X){return _(X,f.uint8array?new Uint8Array(X.length):new Array(X.length))})(U))),U):v.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,c,d){var f=l("./reader/readerFor"),g=l("./utils"),y=l("./signature"),v=l("./zipEntry"),p=l("./support");function _(A){this.files=[],this.loadOptions=A}_.prototype={checkSignature:function(A){if(!this.reader.readAndCheckSignature(A)){this.reader.index-=4;var R=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+g.pretty(R)+", expected "+g.pretty(A)+")")}},isSignature:function(A,R){var S=this.reader.index;this.reader.setIndex(A);var T=this.reader.readString(4)===R;return this.reader.setIndex(S),T},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var A=this.reader.readData(this.zipCommentLength),R=p.uint8array?"uint8array":"array",S=g.transformTo(R,A);this.zipComment=this.loadOptions.decodeFileName(S)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var A,R,S,T=this.zip64EndOfCentralSize-44;0<T;)A=this.reader.readInt(2),R=this.reader.readInt(4),S=this.reader.readData(R),this.zip64ExtensibleData[A]={id:A,length:R,value:S}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var A,R;for(A=0;A<this.files.length;A++)R=this.files[A],this.reader.setIndex(R.localHeaderOffset),this.checkSignature(y.LOCAL_FILE_HEADER),R.readLocalPart(this.reader),R.handleUTF8(),R.processAttributes()},readCentralDir:function(){var A;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(y.CENTRAL_FILE_HEADER);)(A=new v({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(A);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var A=this.reader.lastIndexOfSignature(y.CENTRAL_DIRECTORY_END);if(A<0)throw this.isSignature(0,y.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(A);var R=A;if(this.checkSignature(y.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,(A=this.reader.lastIndexOfSignature(y.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(A),this.checkSignature(y.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,y.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(y.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(y.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var S=this.centralDirOffset+this.centralDirSize;this.zip64&&(S+=20,S+=12+this.zip64EndOfCentralSize);var T=R-S;if(0<T)this.isSignature(R,y.CENTRAL_FILE_HEADER)||(this.reader.zero=T);else if(T<0)throw new Error("Corrupted zip: missing "+Math.abs(T)+" bytes.")},prepareReader:function(A){this.reader=f(A)},load:function(A){this.prepareReader(A),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},c.exports=_},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,c,d){var f=l("./reader/readerFor"),g=l("./utils"),y=l("./compressedObject"),v=l("./crc32"),p=l("./utf8"),_=l("./compressions"),A=l("./support");function R(S,T){this.options=S,this.loadOptions=T}R.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(S){var T,m;if(S.skip(22),this.fileNameLength=S.readInt(2),m=S.readInt(2),this.fileName=S.readData(this.fileNameLength),S.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((T=(function(E){for(var w in _)if(Object.prototype.hasOwnProperty.call(_,w)&&_[w].magic===E)return _[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+g.pretty(this.compressionMethod)+" unknown (inner file : "+g.transformTo("string",this.fileName)+")");this.decompressed=new y(this.compressedSize,this.uncompressedSize,this.crc32,T,S.readData(this.compressedSize))},readCentralPart:function(S){this.versionMadeBy=S.readInt(2),S.skip(2),this.bitFlag=S.readInt(2),this.compressionMethod=S.readString(2),this.date=S.readDate(),this.crc32=S.readInt(4),this.compressedSize=S.readInt(4),this.uncompressedSize=S.readInt(4);var T=S.readInt(2);if(this.extraFieldsLength=S.readInt(2),this.fileCommentLength=S.readInt(2),this.diskNumberStart=S.readInt(2),this.internalFileAttributes=S.readInt(2),this.externalFileAttributes=S.readInt(4),this.localHeaderOffset=S.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");S.skip(T),this.readExtraFields(S),this.parseZIP64ExtraField(S),this.fileComment=S.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var S=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),S==0&&(this.dosPermissions=63&this.externalFileAttributes),S==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var S=f(this.extraFields[1].value);this.uncompressedSize===g.MAX_VALUE_32BITS&&(this.uncompressedSize=S.readInt(8)),this.compressedSize===g.MAX_VALUE_32BITS&&(this.compressedSize=S.readInt(8)),this.localHeaderOffset===g.MAX_VALUE_32BITS&&(this.localHeaderOffset=S.readInt(8)),this.diskNumberStart===g.MAX_VALUE_32BITS&&(this.diskNumberStart=S.readInt(4))}},readExtraFields:function(S){var T,m,E,w=S.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});S.index+4<w;)T=S.readInt(2),m=S.readInt(2),E=S.readData(m),this.extraFields[T]={id:T,length:m,value:E};S.setIndex(w)},handleUTF8:function(){var S=A.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=p.utf8decode(this.fileName),this.fileCommentStr=p.utf8decode(this.fileComment);else{var T=this.findExtraFieldUnicodePath();if(T!==null)this.fileNameStr=T;else{var m=g.transformTo(S,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var w=g.transformTo(S,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var S=this.extraFields[28789];if(S){var T=f(S.value);return T.readInt(1)!==1||v(this.fileName)!==T.readInt(4)?null:p.utf8decode(T.readData(S.length-5))}return null},findExtraFieldUnicodeComment:function(){var S=this.extraFields[25461];if(S){var T=f(S.value);return T.readInt(1)!==1||v(this.fileComment)!==T.readInt(4)?null:p.utf8decode(T.readData(S.length-5))}return null}},c.exports=R},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,c,d){function f(T,m,E){this.name=T,this.dir=E.dir,this.date=E.date,this.comment=E.comment,this.unixPermissions=E.unixPermissions,this.dosPermissions=E.dosPermissions,this._data=m,this._dataBinary=E.binary,this.options={compression:E.compression,compressionOptions:E.compressionOptions}}var g=l("./stream/StreamHelper"),y=l("./stream/DataWorker"),v=l("./utf8"),p=l("./compressedObject"),_=l("./stream/GenericWorker");f.prototype={internalStream:function(T){var m=null,E="string";try{if(!T)throw new Error("No output type specified.");var w=(E=T.toLowerCase())==="string"||E==="text";E!=="binarystring"&&E!=="text"||(E="string"),m=this._decompressWorker();var D=!this._dataBinary;D&&!w&&(m=m.pipe(new v.Utf8EncodeWorker)),!D&&w&&(m=m.pipe(new v.Utf8DecodeWorker))}catch(I){(m=new _("error")).error(I)}return new g(m,E,"")},async:function(T,m){return this.internalStream(T).accumulate(m)},nodeStream:function(T,m){return this.internalStream(T||"nodebuffer").toNodejsStream(m)},_compressWorker:function(T,m){if(this._data instanceof p&&this._data.compression.magic===T.magic)return this._data.getCompressedWorker();var E=this._decompressWorker();return this._dataBinary||(E=E.pipe(new v.Utf8EncodeWorker)),p.createWorkerFrom(E,T,m)},_decompressWorker:function(){return this._data instanceof p?this._data.getContentWorker():this._data instanceof _?this._data:new y(this._data)}};for(var A=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],R=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},S=0;S<A.length;S++)f.prototype[A[S]]=R;c.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,c,d){(function(f){var g,y,v=f.MutationObserver||f.WebKitMutationObserver;if(v){var p=0,_=new v(T),A=f.document.createTextNode("");_.observe(A,{characterData:!0}),g=function(){A.data=p=++p%2}}else if(f.setImmediate||f.MessageChannel===void 0)g="document"in f&&"onreadystatechange"in f.document.createElement("script")?function(){var m=f.document.createElement("script");m.onreadystatechange=function(){T(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},f.document.documentElement.appendChild(m)}:function(){setTimeout(T,0)};else{var R=new f.MessageChannel;R.port1.onmessage=T,g=function(){R.port2.postMessage(0)}}var S=[];function T(){var m,E;y=!0;for(var w=S.length;w;){for(E=S,S=[],m=-1;++m<w;)E[m]();w=S.length}y=!1}c.exports=function(m){S.push(m)!==1||y||g()}}).call(this,typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,c,d){var f=l("immediate");function g(){}var y={},v=["REJECTED"],p=["FULFILLED"],_=["PENDING"];function A(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=_,this.queue=[],this.outcome=void 0,w!==g&&m(this,w)}function R(w,D,I){this.promise=w,typeof D=="function"&&(this.onFulfilled=D,this.callFulfilled=this.otherCallFulfilled),typeof I=="function"&&(this.onRejected=I,this.callRejected=this.otherCallRejected)}function S(w,D,I){f(function(){var U;try{U=D(I)}catch(O){return y.reject(w,O)}U===w?y.reject(w,new TypeError("Cannot resolve promise with itself")):y.resolve(w,U)})}function T(w){var D=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof D=="function")return function(){D.apply(w,arguments)}}function m(w,D){var I=!1;function U(H){I||(I=!0,y.reject(w,H))}function O(H){I||(I=!0,y.resolve(w,H))}var X=E(function(){D(O,U)});X.status==="error"&&U(X.value)}function E(w,D){var I={};try{I.value=w(D),I.status="success"}catch(U){I.status="error",I.value=U}return I}(c.exports=A).prototype.finally=function(w){if(typeof w!="function")return this;var D=this.constructor;return this.then(function(I){return D.resolve(w()).then(function(){return I})},function(I){return D.resolve(w()).then(function(){throw I})})},A.prototype.catch=function(w){return this.then(null,w)},A.prototype.then=function(w,D){if(typeof w!="function"&&this.state===p||typeof D!="function"&&this.state===v)return this;var I=new this.constructor(g);return this.state!==_?S(I,this.state===p?w:D,this.outcome):this.queue.push(new R(I,w,D)),I},R.prototype.callFulfilled=function(w){y.resolve(this.promise,w)},R.prototype.otherCallFulfilled=function(w){S(this.promise,this.onFulfilled,w)},R.prototype.callRejected=function(w){y.reject(this.promise,w)},R.prototype.otherCallRejected=function(w){S(this.promise,this.onRejected,w)},y.resolve=function(w,D){var I=E(T,D);if(I.status==="error")return y.reject(w,I.value);var U=I.value;if(U)m(w,U);else{w.state=p,w.outcome=D;for(var O=-1,X=w.queue.length;++O<X;)w.queue[O].callFulfilled(D)}return w},y.reject=function(w,D){w.state=v,w.outcome=D;for(var I=-1,U=w.queue.length;++I<U;)w.queue[I].callRejected(D);return w},A.resolve=function(w){return w instanceof this?w:y.resolve(new this(g),w)},A.reject=function(w){var D=new this(g);return y.reject(D,w)},A.all=function(w){var D=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=w.length,U=!1;if(!I)return this.resolve([]);for(var O=new Array(I),X=0,H=-1,$=new this(g);++H<I;)F(w[H],H);return $;function F(ae,ee){D.resolve(ae).then(function(k){O[ee]=k,++X!==I||U||(U=!0,y.resolve($,O))},function(k){U||(U=!0,y.reject($,k))})}},A.race=function(w){var D=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=w.length,U=!1;if(!I)return this.resolve([]);for(var O=-1,X=new this(g);++O<I;)H=w[O],D.resolve(H).then(function($){U||(U=!0,y.resolve(X,$))},function($){U||(U=!0,y.reject(X,$))});var H;return X}},{immediate:36}],38:[function(l,c,d){var f={};(0,l("./lib/utils/common").assign)(f,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),c.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,c,d){var f=l("./zlib/deflate"),g=l("./utils/common"),y=l("./utils/strings"),v=l("./zlib/messages"),p=l("./zlib/zstream"),_=Object.prototype.toString,A=0,R=-1,S=0,T=8;function m(w){if(!(this instanceof m))return new m(w);this.options=g.assign({level:R,method:T,chunkSize:16384,windowBits:15,memLevel:8,strategy:S,to:""},w||{});var D=this.options;D.raw&&0<D.windowBits?D.windowBits=-D.windowBits:D.gzip&&0<D.windowBits&&D.windowBits<16&&(D.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var I=f.deflateInit2(this.strm,D.level,D.method,D.windowBits,D.memLevel,D.strategy);if(I!==A)throw new Error(v[I]);if(D.header&&f.deflateSetHeader(this.strm,D.header),D.dictionary){var U;if(U=typeof D.dictionary=="string"?y.string2buf(D.dictionary):_.call(D.dictionary)==="[object ArrayBuffer]"?new Uint8Array(D.dictionary):D.dictionary,(I=f.deflateSetDictionary(this.strm,U))!==A)throw new Error(v[I]);this._dict_set=!0}}function E(w,D){var I=new m(D);if(I.push(w,!0),I.err)throw I.msg||v[I.err];return I.result}m.prototype.push=function(w,D){var I,U,O=this.strm,X=this.options.chunkSize;if(this.ended)return!1;U=D===~~D?D:D===!0?4:0,typeof w=="string"?O.input=y.string2buf(w):_.call(w)==="[object ArrayBuffer]"?O.input=new Uint8Array(w):O.input=w,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new g.Buf8(X),O.next_out=0,O.avail_out=X),(I=f.deflate(O,U))!==1&&I!==A)return this.onEnd(I),!(this.ended=!0);O.avail_out!==0&&(O.avail_in!==0||U!==4&&U!==2)||(this.options.to==="string"?this.onData(y.buf2binstring(g.shrinkBuf(O.output,O.next_out))):this.onData(g.shrinkBuf(O.output,O.next_out)))}while((0<O.avail_in||O.avail_out===0)&&I!==1);return U===4?(I=f.deflateEnd(this.strm),this.onEnd(I),this.ended=!0,I===A):U!==2||(this.onEnd(A),!(O.avail_out=0))},m.prototype.onData=function(w){this.chunks.push(w)},m.prototype.onEnd=function(w){w===A&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},d.Deflate=m,d.deflate=E,d.deflateRaw=function(w,D){return(D=D||{}).raw=!0,E(w,D)},d.gzip=function(w,D){return(D=D||{}).gzip=!0,E(w,D)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,c,d){var f=l("./zlib/inflate"),g=l("./utils/common"),y=l("./utils/strings"),v=l("./zlib/constants"),p=l("./zlib/messages"),_=l("./zlib/zstream"),A=l("./zlib/gzheader"),R=Object.prototype.toString;function S(m){if(!(this instanceof S))return new S(m);this.options=g.assign({chunkSize:16384,windowBits:0,to:""},m||{});var E=this.options;E.raw&&0<=E.windowBits&&E.windowBits<16&&(E.windowBits=-E.windowBits,E.windowBits===0&&(E.windowBits=-15)),!(0<=E.windowBits&&E.windowBits<16)||m&&m.windowBits||(E.windowBits+=32),15<E.windowBits&&E.windowBits<48&&(15&E.windowBits)==0&&(E.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _,this.strm.avail_out=0;var w=f.inflateInit2(this.strm,E.windowBits);if(w!==v.Z_OK)throw new Error(p[w]);this.header=new A,f.inflateGetHeader(this.strm,this.header)}function T(m,E){var w=new S(E);if(w.push(m,!0),w.err)throw w.msg||p[w.err];return w.result}S.prototype.push=function(m,E){var w,D,I,U,O,X,H=this.strm,$=this.options.chunkSize,F=this.options.dictionary,ae=!1;if(this.ended)return!1;D=E===~~E?E:E===!0?v.Z_FINISH:v.Z_NO_FLUSH,typeof m=="string"?H.input=y.binstring2buf(m):R.call(m)==="[object ArrayBuffer]"?H.input=new Uint8Array(m):H.input=m,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new g.Buf8($),H.next_out=0,H.avail_out=$),(w=f.inflate(H,v.Z_NO_FLUSH))===v.Z_NEED_DICT&&F&&(X=typeof F=="string"?y.string2buf(F):R.call(F)==="[object ArrayBuffer]"?new Uint8Array(F):F,w=f.inflateSetDictionary(this.strm,X)),w===v.Z_BUF_ERROR&&ae===!0&&(w=v.Z_OK,ae=!1),w!==v.Z_STREAM_END&&w!==v.Z_OK)return this.onEnd(w),!(this.ended=!0);H.next_out&&(H.avail_out!==0&&w!==v.Z_STREAM_END&&(H.avail_in!==0||D!==v.Z_FINISH&&D!==v.Z_SYNC_FLUSH)||(this.options.to==="string"?(I=y.utf8border(H.output,H.next_out),U=H.next_out-I,O=y.buf2string(H.output,I),H.next_out=U,H.avail_out=$-U,U&&g.arraySet(H.output,H.output,I,U,0),this.onData(O)):this.onData(g.shrinkBuf(H.output,H.next_out)))),H.avail_in===0&&H.avail_out===0&&(ae=!0)}while((0<H.avail_in||H.avail_out===0)&&w!==v.Z_STREAM_END);return w===v.Z_STREAM_END&&(D=v.Z_FINISH),D===v.Z_FINISH?(w=f.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===v.Z_OK):D!==v.Z_SYNC_FLUSH||(this.onEnd(v.Z_OK),!(H.avail_out=0))},S.prototype.onData=function(m){this.chunks.push(m)},S.prototype.onEnd=function(m){m===v.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=g.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},d.Inflate=S,d.inflate=T,d.inflateRaw=function(m,E){return(E=E||{}).raw=!0,T(m,E)},d.ungzip=T},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,c,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";d.assign=function(v){for(var p=Array.prototype.slice.call(arguments,1);p.length;){var _=p.shift();if(_){if(typeof _!="object")throw new TypeError(_+"must be non-object");for(var A in _)_.hasOwnProperty(A)&&(v[A]=_[A])}}return v},d.shrinkBuf=function(v,p){return v.length===p?v:v.subarray?v.subarray(0,p):(v.length=p,v)};var g={arraySet:function(v,p,_,A,R){if(p.subarray&&v.subarray)v.set(p.subarray(_,_+A),R);else for(var S=0;S<A;S++)v[R+S]=p[_+S]},flattenChunks:function(v){var p,_,A,R,S,T;for(p=A=0,_=v.length;p<_;p++)A+=v[p].length;for(T=new Uint8Array(A),p=R=0,_=v.length;p<_;p++)S=v[p],T.set(S,R),R+=S.length;return T}},y={arraySet:function(v,p,_,A,R){for(var S=0;S<A;S++)v[R+S]=p[_+S]},flattenChunks:function(v){return[].concat.apply([],v)}};d.setTyped=function(v){v?(d.Buf8=Uint8Array,d.Buf16=Uint16Array,d.Buf32=Int32Array,d.assign(d,g)):(d.Buf8=Array,d.Buf16=Array,d.Buf32=Array,d.assign(d,y))},d.setTyped(f)},{}],42:[function(l,c,d){var f=l("./common"),g=!0,y=!0;try{String.fromCharCode.apply(null,[0])}catch{g=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{y=!1}for(var v=new f.Buf8(256),p=0;p<256;p++)v[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;function _(A,R){if(R<65537&&(A.subarray&&y||!A.subarray&&g))return String.fromCharCode.apply(null,f.shrinkBuf(A,R));for(var S="",T=0;T<R;T++)S+=String.fromCharCode(A[T]);return S}v[254]=v[254]=1,d.string2buf=function(A){var R,S,T,m,E,w=A.length,D=0;for(m=0;m<w;m++)(64512&(S=A.charCodeAt(m)))==55296&&m+1<w&&(64512&(T=A.charCodeAt(m+1)))==56320&&(S=65536+(S-55296<<10)+(T-56320),m++),D+=S<128?1:S<2048?2:S<65536?3:4;for(R=new f.Buf8(D),m=E=0;E<D;m++)(64512&(S=A.charCodeAt(m)))==55296&&m+1<w&&(64512&(T=A.charCodeAt(m+1)))==56320&&(S=65536+(S-55296<<10)+(T-56320),m++),S<128?R[E++]=S:(S<2048?R[E++]=192|S>>>6:(S<65536?R[E++]=224|S>>>12:(R[E++]=240|S>>>18,R[E++]=128|S>>>12&63),R[E++]=128|S>>>6&63),R[E++]=128|63&S);return R},d.buf2binstring=function(A){return _(A,A.length)},d.binstring2buf=function(A){for(var R=new f.Buf8(A.length),S=0,T=R.length;S<T;S++)R[S]=A.charCodeAt(S);return R},d.buf2string=function(A,R){var S,T,m,E,w=R||A.length,D=new Array(2*w);for(S=T=0;S<w;)if((m=A[S++])<128)D[T++]=m;else if(4<(E=v[m]))D[T++]=65533,S+=E-1;else{for(m&=E===2?31:E===3?15:7;1<E&&S<w;)m=m<<6|63&A[S++],E--;1<E?D[T++]=65533:m<65536?D[T++]=m:(m-=65536,D[T++]=55296|m>>10&1023,D[T++]=56320|1023&m)}return _(D,T)},d.utf8border=function(A,R){var S;for((R=R||A.length)>A.length&&(R=A.length),S=R-1;0<=S&&(192&A[S])==128;)S--;return S<0||S===0?R:S+v[A[S]]>R?S:R}},{"./common":41}],43:[function(l,c,d){c.exports=function(f,g,y,v){for(var p=65535&f|0,_=f>>>16&65535|0,A=0;y!==0;){for(y-=A=2e3<y?2e3:y;_=_+(p=p+g[v++]|0)|0,--A;);p%=65521,_%=65521}return p|_<<16|0}},{}],44:[function(l,c,d){c.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,c,d){var f=(function(){for(var g,y=[],v=0;v<256;v++){g=v;for(var p=0;p<8;p++)g=1&g?3988292384^g>>>1:g>>>1;y[v]=g}return y})();c.exports=function(g,y,v,p){var _=f,A=p+v;g^=-1;for(var R=p;R<A;R++)g=g>>>8^_[255&(g^y[R])];return-1^g}},{}],46:[function(l,c,d){var f,g=l("../utils/common"),y=l("./trees"),v=l("./adler32"),p=l("./crc32"),_=l("./messages"),A=0,R=4,S=0,T=-2,m=-1,E=4,w=2,D=8,I=9,U=286,O=30,X=19,H=2*U+1,$=15,F=3,ae=258,ee=ae+F+1,k=42,Q=113,x=1,G=2,B=3,V=4;function ue(b,de){return b.msg=_[de],de}function te(b){return(b<<1)-(4<b?9:0)}function ge(b){for(var de=b.length;0<=--de;)b[de]=0}function C(b){var de=b.state,re=de.pending;re>b.avail_out&&(re=b.avail_out),re!==0&&(g.arraySet(b.output,de.pending_buf,de.pending_out,re,b.next_out),b.next_out+=re,de.pending_out+=re,b.total_out+=re,b.avail_out-=re,de.pending-=re,de.pending===0&&(de.pending_out=0))}function L(b,de){y._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,de),b.block_start=b.strstart,C(b.strm)}function ie(b,de){b.pending_buf[b.pending++]=de}function se(b,de){b.pending_buf[b.pending++]=de>>>8&255,b.pending_buf[b.pending++]=255&de}function oe(b,de){var re,z,j=b.max_chain_length,q=b.strstart,he=b.prev_length,pe=b.nice_match,K=b.strstart>b.w_size-ee?b.strstart-(b.w_size-ee):0,ye=b.window,xe=b.w_mask,ve=b.prev,_e=b.strstart+ae,qe=ye[q+he-1],Le=ye[q+he];b.prev_length>=b.good_match&&(j>>=2),pe>b.lookahead&&(pe=b.lookahead);do if(ye[(re=de)+he]===Le&&ye[re+he-1]===qe&&ye[re]===ye[q]&&ye[++re]===ye[q+1]){q+=2,re++;do;while(ye[++q]===ye[++re]&&ye[++q]===ye[++re]&&ye[++q]===ye[++re]&&ye[++q]===ye[++re]&&ye[++q]===ye[++re]&&ye[++q]===ye[++re]&&ye[++q]===ye[++re]&&ye[++q]===ye[++re]&&q<_e);if(z=ae-(_e-q),q=_e-ae,he<z){if(b.match_start=de,pe<=(he=z))break;qe=ye[q+he-1],Le=ye[q+he]}}while((de=ve[de&xe])>K&&--j!=0);return he<=b.lookahead?he:b.lookahead}function Ae(b){var de,re,z,j,q,he,pe,K,ye,xe,ve=b.w_size;do{if(j=b.window_size-b.lookahead-b.strstart,b.strstart>=ve+(ve-ee)){for(g.arraySet(b.window,b.window,ve,ve,0),b.match_start-=ve,b.strstart-=ve,b.block_start-=ve,de=re=b.hash_size;z=b.head[--de],b.head[de]=ve<=z?z-ve:0,--re;);for(de=re=ve;z=b.prev[--de],b.prev[de]=ve<=z?z-ve:0,--re;);j+=ve}if(b.strm.avail_in===0)break;if(he=b.strm,pe=b.window,K=b.strstart+b.lookahead,ye=j,xe=void 0,xe=he.avail_in,ye<xe&&(xe=ye),re=xe===0?0:(he.avail_in-=xe,g.arraySet(pe,he.input,he.next_in,xe,K),he.state.wrap===1?he.adler=v(he.adler,pe,xe,K):he.state.wrap===2&&(he.adler=p(he.adler,pe,xe,K)),he.next_in+=xe,he.total_in+=xe,xe),b.lookahead+=re,b.lookahead+b.insert>=F)for(q=b.strstart-b.insert,b.ins_h=b.window[q],b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+F-1])&b.hash_mask,b.prev[q&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=q,q++,b.insert--,!(b.lookahead+b.insert<F)););}while(b.lookahead<ee&&b.strm.avail_in!==0)}function Te(b,de){for(var re,z;;){if(b.lookahead<ee){if(Ae(b),b.lookahead<ee&&de===A)return x;if(b.lookahead===0)break}if(re=0,b.lookahead>=F&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+F-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),re!==0&&b.strstart-re<=b.w_size-ee&&(b.match_length=oe(b,re)),b.match_length>=F)if(z=y._tr_tally(b,b.strstart-b.match_start,b.match_length-F),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=F){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+F-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else z=y._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(z&&(L(b,!1),b.strm.avail_out===0))return x}return b.insert=b.strstart<F-1?b.strstart:F-1,de===R?(L(b,!0),b.strm.avail_out===0?B:V):b.last_lit&&(L(b,!1),b.strm.avail_out===0)?x:G}function Ne(b,de){for(var re,z,j;;){if(b.lookahead<ee){if(Ae(b),b.lookahead<ee&&de===A)return x;if(b.lookahead===0)break}if(re=0,b.lookahead>=F&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+F-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=F-1,re!==0&&b.prev_length<b.max_lazy_match&&b.strstart-re<=b.w_size-ee&&(b.match_length=oe(b,re),b.match_length<=5&&(b.strategy===1||b.match_length===F&&4096<b.strstart-b.match_start)&&(b.match_length=F-1)),b.prev_length>=F&&b.match_length<=b.prev_length){for(j=b.strstart+b.lookahead-F,z=y._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-F),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=j&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+F-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=F-1,b.strstart++,z&&(L(b,!1),b.strm.avail_out===0))return x}else if(b.match_available){if((z=y._tr_tally(b,0,b.window[b.strstart-1]))&&L(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return x}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(z=y._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<F-1?b.strstart:F-1,de===R?(L(b,!0),b.strm.avail_out===0?B:V):b.last_lit&&(L(b,!1),b.strm.avail_out===0)?x:G}function Se(b,de,re,z,j){this.good_length=b,this.max_lazy=de,this.nice_length=re,this.max_chain=z,this.func=j}function Pe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=D,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new g.Buf16(2*H),this.dyn_dtree=new g.Buf16(2*(2*O+1)),this.bl_tree=new g.Buf16(2*(2*X+1)),ge(this.dyn_ltree),ge(this.dyn_dtree),ge(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new g.Buf16($+1),this.heap=new g.Buf16(2*U+1),ge(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new g.Buf16(2*U+1),ge(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function et(b){var de;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=w,(de=b.state).pending=0,de.pending_out=0,de.wrap<0&&(de.wrap=-de.wrap),de.status=de.wrap?k:Q,b.adler=de.wrap===2?0:1,de.last_flush=A,y._tr_init(de),S):ue(b,T)}function Tt(b){var de=et(b);return de===S&&(function(re){re.window_size=2*re.w_size,ge(re.head),re.max_lazy_match=f[re.level].max_lazy,re.good_match=f[re.level].good_length,re.nice_match=f[re.level].nice_length,re.max_chain_length=f[re.level].max_chain,re.strstart=0,re.block_start=0,re.lookahead=0,re.insert=0,re.match_length=re.prev_length=F-1,re.match_available=0,re.ins_h=0})(b.state),de}function Nt(b,de,re,z,j,q){if(!b)return T;var he=1;if(de===m&&(de=6),z<0?(he=0,z=-z):15<z&&(he=2,z-=16),j<1||I<j||re!==D||z<8||15<z||de<0||9<de||q<0||E<q)return ue(b,T);z===8&&(z=9);var pe=new Pe;return(b.state=pe).strm=b,pe.wrap=he,pe.gzhead=null,pe.w_bits=z,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=j+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+F-1)/F),pe.window=new g.Buf8(2*pe.w_size),pe.head=new g.Buf16(pe.hash_size),pe.prev=new g.Buf16(pe.w_size),pe.lit_bufsize=1<<j+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new g.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=de,pe.strategy=q,pe.method=re,Tt(b)}f=[new Se(0,0,0,0,function(b,de){var re=65535;for(re>b.pending_buf_size-5&&(re=b.pending_buf_size-5);;){if(b.lookahead<=1){if(Ae(b),b.lookahead===0&&de===A)return x;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var z=b.block_start+re;if((b.strstart===0||b.strstart>=z)&&(b.lookahead=b.strstart-z,b.strstart=z,L(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-ee&&(L(b,!1),b.strm.avail_out===0))return x}return b.insert=0,de===R?(L(b,!0),b.strm.avail_out===0?B:V):(b.strstart>b.block_start&&(L(b,!1),b.strm.avail_out),x)}),new Se(4,4,8,4,Te),new Se(4,5,16,8,Te),new Se(4,6,32,32,Te),new Se(4,4,16,16,Ne),new Se(8,16,32,32,Ne),new Se(8,16,128,128,Ne),new Se(8,32,128,256,Ne),new Se(32,128,258,1024,Ne),new Se(32,258,258,4096,Ne)],d.deflateInit=function(b,de){return Nt(b,de,D,15,8,0)},d.deflateInit2=Nt,d.deflateReset=Tt,d.deflateResetKeep=et,d.deflateSetHeader=function(b,de){return b&&b.state?b.state.wrap!==2?T:(b.state.gzhead=de,S):T},d.deflate=function(b,de){var re,z,j,q;if(!b||!b.state||5<de||de<0)return b?ue(b,T):T;if(z=b.state,!b.output||!b.input&&b.avail_in!==0||z.status===666&&de!==R)return ue(b,b.avail_out===0?-5:T);if(z.strm=b,re=z.last_flush,z.last_flush=de,z.status===k)if(z.wrap===2)b.adler=0,ie(z,31),ie(z,139),ie(z,8),z.gzhead?(ie(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),ie(z,255&z.gzhead.time),ie(z,z.gzhead.time>>8&255),ie(z,z.gzhead.time>>16&255),ie(z,z.gzhead.time>>24&255),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(ie(z,255&z.gzhead.extra.length),ie(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(b.adler=p(b.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,3),z.status=Q);else{var he=D+(z.w_bits-8<<4)<<8;he|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(he|=32),he+=31-he%31,z.status=Q,se(z,he),z.strstart!==0&&(se(z,b.adler>>>16),se(z,65535&b.adler)),b.adler=1}if(z.status===69)if(z.gzhead.extra){for(j=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>j&&(b.adler=p(b.adler,z.pending_buf,z.pending-j,j)),C(b),j=z.pending,z.pending!==z.pending_buf_size));)ie(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>j&&(b.adler=p(b.adler,z.pending_buf,z.pending-j,j)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){j=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>j&&(b.adler=p(b.adler,z.pending_buf,z.pending-j,j)),C(b),j=z.pending,z.pending===z.pending_buf_size)){q=1;break}q=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,ie(z,q)}while(q!==0);z.gzhead.hcrc&&z.pending>j&&(b.adler=p(b.adler,z.pending_buf,z.pending-j,j)),q===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){j=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>j&&(b.adler=p(b.adler,z.pending_buf,z.pending-j,j)),C(b),j=z.pending,z.pending===z.pending_buf_size)){q=1;break}q=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,ie(z,q)}while(q!==0);z.gzhead.hcrc&&z.pending>j&&(b.adler=p(b.adler,z.pending_buf,z.pending-j,j)),q===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&C(b),z.pending+2<=z.pending_buf_size&&(ie(z,255&b.adler),ie(z,b.adler>>8&255),b.adler=0,z.status=Q)):z.status=Q),z.pending!==0){if(C(b),b.avail_out===0)return z.last_flush=-1,S}else if(b.avail_in===0&&te(de)<=te(re)&&de!==R)return ue(b,-5);if(z.status===666&&b.avail_in!==0)return ue(b,-5);if(b.avail_in!==0||z.lookahead!==0||de!==A&&z.status!==666){var pe=z.strategy===2?(function(K,ye){for(var xe;;){if(K.lookahead===0&&(Ae(K),K.lookahead===0)){if(ye===A)return x;break}if(K.match_length=0,xe=y._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++,xe&&(L(K,!1),K.strm.avail_out===0))return x}return K.insert=0,ye===R?(L(K,!0),K.strm.avail_out===0?B:V):K.last_lit&&(L(K,!1),K.strm.avail_out===0)?x:G})(z,de):z.strategy===3?(function(K,ye){for(var xe,ve,_e,qe,Le=K.window;;){if(K.lookahead<=ae){if(Ae(K),K.lookahead<=ae&&ye===A)return x;if(K.lookahead===0)break}if(K.match_length=0,K.lookahead>=F&&0<K.strstart&&(ve=Le[_e=K.strstart-1])===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]){qe=K.strstart+ae;do;while(ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&_e<qe);K.match_length=ae-(qe-_e),K.match_length>K.lookahead&&(K.match_length=K.lookahead)}if(K.match_length>=F?(xe=y._tr_tally(K,1,K.match_length-F),K.lookahead-=K.match_length,K.strstart+=K.match_length,K.match_length=0):(xe=y._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++),xe&&(L(K,!1),K.strm.avail_out===0))return x}return K.insert=0,ye===R?(L(K,!0),K.strm.avail_out===0?B:V):K.last_lit&&(L(K,!1),K.strm.avail_out===0)?x:G})(z,de):f[z.level].func(z,de);if(pe!==B&&pe!==V||(z.status=666),pe===x||pe===B)return b.avail_out===0&&(z.last_flush=-1),S;if(pe===G&&(de===1?y._tr_align(z):de!==5&&(y._tr_stored_block(z,0,0,!1),de===3&&(ge(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),C(b),b.avail_out===0))return z.last_flush=-1,S}return de!==R?S:z.wrap<=0?1:(z.wrap===2?(ie(z,255&b.adler),ie(z,b.adler>>8&255),ie(z,b.adler>>16&255),ie(z,b.adler>>24&255),ie(z,255&b.total_in),ie(z,b.total_in>>8&255),ie(z,b.total_in>>16&255),ie(z,b.total_in>>24&255)):(se(z,b.adler>>>16),se(z,65535&b.adler)),C(b),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?S:1)},d.deflateEnd=function(b){var de;return b&&b.state?(de=b.state.status)!==k&&de!==69&&de!==73&&de!==91&&de!==103&&de!==Q&&de!==666?ue(b,T):(b.state=null,de===Q?ue(b,-3):S):T},d.deflateSetDictionary=function(b,de){var re,z,j,q,he,pe,K,ye,xe=de.length;if(!b||!b.state||(q=(re=b.state).wrap)===2||q===1&&re.status!==k||re.lookahead)return T;for(q===1&&(b.adler=v(b.adler,de,xe,0)),re.wrap=0,xe>=re.w_size&&(q===0&&(ge(re.head),re.strstart=0,re.block_start=0,re.insert=0),ye=new g.Buf8(re.w_size),g.arraySet(ye,de,xe-re.w_size,re.w_size,0),de=ye,xe=re.w_size),he=b.avail_in,pe=b.next_in,K=b.input,b.avail_in=xe,b.next_in=0,b.input=de,Ae(re);re.lookahead>=F;){for(z=re.strstart,j=re.lookahead-(F-1);re.ins_h=(re.ins_h<<re.hash_shift^re.window[z+F-1])&re.hash_mask,re.prev[z&re.w_mask]=re.head[re.ins_h],re.head[re.ins_h]=z,z++,--j;);re.strstart=z,re.lookahead=F-1,Ae(re)}return re.strstart+=re.lookahead,re.block_start=re.strstart,re.insert=re.lookahead,re.lookahead=0,re.match_length=re.prev_length=F-1,re.match_available=0,b.next_in=pe,b.input=K,b.avail_in=he,re.wrap=q,S},d.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,c,d){c.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,c,d){c.exports=function(f,g){var y,v,p,_,A,R,S,T,m,E,w,D,I,U,O,X,H,$,F,ae,ee,k,Q,x,G;y=f.state,v=f.next_in,x=f.input,p=v+(f.avail_in-5),_=f.next_out,G=f.output,A=_-(g-f.avail_out),R=_+(f.avail_out-257),S=y.dmax,T=y.wsize,m=y.whave,E=y.wnext,w=y.window,D=y.hold,I=y.bits,U=y.lencode,O=y.distcode,X=(1<<y.lenbits)-1,H=(1<<y.distbits)-1;e:do{I<15&&(D+=x[v++]<<I,I+=8,D+=x[v++]<<I,I+=8),$=U[D&X];t:for(;;){if(D>>>=F=$>>>24,I-=F,(F=$>>>16&255)===0)G[_++]=65535&$;else{if(!(16&F)){if((64&F)==0){$=U[(65535&$)+(D&(1<<F)-1)];continue t}if(32&F){y.mode=12;break e}f.msg="invalid literal/length code",y.mode=30;break e}ae=65535&$,(F&=15)&&(I<F&&(D+=x[v++]<<I,I+=8),ae+=D&(1<<F)-1,D>>>=F,I-=F),I<15&&(D+=x[v++]<<I,I+=8,D+=x[v++]<<I,I+=8),$=O[D&H];n:for(;;){if(D>>>=F=$>>>24,I-=F,!(16&(F=$>>>16&255))){if((64&F)==0){$=O[(65535&$)+(D&(1<<F)-1)];continue n}f.msg="invalid distance code",y.mode=30;break e}if(ee=65535&$,I<(F&=15)&&(D+=x[v++]<<I,(I+=8)<F&&(D+=x[v++]<<I,I+=8)),S<(ee+=D&(1<<F)-1)){f.msg="invalid distance too far back",y.mode=30;break e}if(D>>>=F,I-=F,(F=_-A)<ee){if(m<(F=ee-F)&&y.sane){f.msg="invalid distance too far back",y.mode=30;break e}if(Q=w,(k=0)===E){if(k+=T-F,F<ae){for(ae-=F;G[_++]=w[k++],--F;);k=_-ee,Q=G}}else if(E<F){if(k+=T+E-F,(F-=E)<ae){for(ae-=F;G[_++]=w[k++],--F;);if(k=0,E<ae){for(ae-=F=E;G[_++]=w[k++],--F;);k=_-ee,Q=G}}}else if(k+=E-F,F<ae){for(ae-=F;G[_++]=w[k++],--F;);k=_-ee,Q=G}for(;2<ae;)G[_++]=Q[k++],G[_++]=Q[k++],G[_++]=Q[k++],ae-=3;ae&&(G[_++]=Q[k++],1<ae&&(G[_++]=Q[k++]))}else{for(k=_-ee;G[_++]=G[k++],G[_++]=G[k++],G[_++]=G[k++],2<(ae-=3););ae&&(G[_++]=G[k++],1<ae&&(G[_++]=G[k++]))}break}}break}}while(v<p&&_<R);v-=ae=I>>3,D&=(1<<(I-=ae<<3))-1,f.next_in=v,f.next_out=_,f.avail_in=v<p?p-v+5:5-(v-p),f.avail_out=_<R?R-_+257:257-(_-R),y.hold=D,y.bits=I}},{}],49:[function(l,c,d){var f=l("../utils/common"),g=l("./adler32"),y=l("./crc32"),v=l("./inffast"),p=l("./inftrees"),_=1,A=2,R=0,S=-2,T=1,m=852,E=592;function w(k){return(k>>>24&255)+(k>>>8&65280)+((65280&k)<<8)+((255&k)<<24)}function D(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function I(k){var Q;return k&&k.state?(Q=k.state,k.total_in=k.total_out=Q.total=0,k.msg="",Q.wrap&&(k.adler=1&Q.wrap),Q.mode=T,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new f.Buf32(m),Q.distcode=Q.distdyn=new f.Buf32(E),Q.sane=1,Q.back=-1,R):S}function U(k){var Q;return k&&k.state?((Q=k.state).wsize=0,Q.whave=0,Q.wnext=0,I(k)):S}function O(k,Q){var x,G;return k&&k.state?(G=k.state,Q<0?(x=0,Q=-Q):(x=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?S:(G.window!==null&&G.wbits!==Q&&(G.window=null),G.wrap=x,G.wbits=Q,U(k))):S}function X(k,Q){var x,G;return k?(G=new D,(k.state=G).window=null,(x=O(k,Q))!==R&&(k.state=null),x):S}var H,$,F=!0;function ae(k){if(F){var Q;for(H=new f.Buf32(512),$=new f.Buf32(32),Q=0;Q<144;)k.lens[Q++]=8;for(;Q<256;)k.lens[Q++]=9;for(;Q<280;)k.lens[Q++]=7;for(;Q<288;)k.lens[Q++]=8;for(p(_,k.lens,0,288,H,0,k.work,{bits:9}),Q=0;Q<32;)k.lens[Q++]=5;p(A,k.lens,0,32,$,0,k.work,{bits:5}),F=!1}k.lencode=H,k.lenbits=9,k.distcode=$,k.distbits=5}function ee(k,Q,x,G){var B,V=k.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new f.Buf8(V.wsize)),G>=V.wsize?(f.arraySet(V.window,Q,x-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(G<(B=V.wsize-V.wnext)&&(B=G),f.arraySet(V.window,Q,x-G,B,V.wnext),(G-=B)?(f.arraySet(V.window,Q,x-G,G,0),V.wnext=G,V.whave=V.wsize):(V.wnext+=B,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=B))),0}d.inflateReset=U,d.inflateReset2=O,d.inflateResetKeep=I,d.inflateInit=function(k){return X(k,15)},d.inflateInit2=X,d.inflate=function(k,Q){var x,G,B,V,ue,te,ge,C,L,ie,se,oe,Ae,Te,Ne,Se,Pe,et,Tt,Nt,b,de,re,z,j=0,q=new f.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!k||!k.state||!k.output||!k.input&&k.avail_in!==0)return S;(x=k.state).mode===12&&(x.mode=13),ue=k.next_out,B=k.output,ge=k.avail_out,V=k.next_in,G=k.input,te=k.avail_in,C=x.hold,L=x.bits,ie=te,se=ge,de=R;e:for(;;)switch(x.mode){case T:if(x.wrap===0){x.mode=13;break}for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(2&x.wrap&&C===35615){q[x.check=0]=255&C,q[1]=C>>>8&255,x.check=y(x.check,q,2,0),L=C=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&C)<<8)+(C>>8))%31){k.msg="incorrect header check",x.mode=30;break}if((15&C)!=8){k.msg="unknown compression method",x.mode=30;break}if(L-=4,b=8+(15&(C>>>=4)),x.wbits===0)x.wbits=b;else if(b>x.wbits){k.msg="invalid window size",x.mode=30;break}x.dmax=1<<b,k.adler=x.check=1,x.mode=512&C?10:12,L=C=0;break;case 2:for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(x.flags=C,(255&x.flags)!=8){k.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){k.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=C>>8&1),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,x.check=y(x.check,q,2,0)),L=C=0,x.mode=3;case 3:for(;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.head&&(x.head.time=C),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,q[2]=C>>>16&255,q[3]=C>>>24&255,x.check=y(x.check,q,4,0)),L=C=0,x.mode=4;case 4:for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.head&&(x.head.xflags=255&C,x.head.os=C>>8),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,x.check=y(x.check,q,2,0)),L=C=0,x.mode=5;case 5:if(1024&x.flags){for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.length=C,x.head&&(x.head.extra_len=C),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,x.check=y(x.check,q,2,0)),L=C=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(te<(oe=x.length)&&(oe=te),oe&&(x.head&&(b=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),f.arraySet(x.head.extra,G,V,oe,b)),512&x.flags&&(x.check=y(x.check,G,oe,V)),te-=oe,V+=oe,x.length-=oe),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(te===0)break e;for(oe=0;b=G[V+oe++],x.head&&b&&x.length<65536&&(x.head.name+=String.fromCharCode(b)),b&&oe<te;);if(512&x.flags&&(x.check=y(x.check,G,oe,V)),te-=oe,V+=oe,b)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(te===0)break e;for(oe=0;b=G[V+oe++],x.head&&b&&x.length<65536&&(x.head.comment+=String.fromCharCode(b)),b&&oe<te;);if(512&x.flags&&(x.check=y(x.check,G,oe,V)),te-=oe,V+=oe,b)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(C!==(65535&x.check)){k.msg="header crc mismatch",x.mode=30;break}L=C=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),k.adler=x.check=0,x.mode=12;break;case 10:for(;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}k.adler=x.check=w(C),L=C=0,x.mode=11;case 11:if(x.havedict===0)return k.next_out=ue,k.avail_out=ge,k.next_in=V,k.avail_in=te,x.hold=C,x.bits=L,2;k.adler=x.check=1,x.mode=12;case 12:if(Q===5||Q===6)break e;case 13:if(x.last){C>>>=7&L,L-=7&L,x.mode=27;break}for(;L<3;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}switch(x.last=1&C,L-=1,3&(C>>>=1)){case 0:x.mode=14;break;case 1:if(ae(x),x.mode=20,Q!==6)break;C>>>=2,L-=2;break e;case 2:x.mode=17;break;case 3:k.msg="invalid block type",x.mode=30}C>>>=2,L-=2;break;case 14:for(C>>>=7&L,L-=7&L;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if((65535&C)!=(C>>>16^65535)){k.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&C,L=C=0,x.mode=15,Q===6)break e;case 15:x.mode=16;case 16:if(oe=x.length){if(te<oe&&(oe=te),ge<oe&&(oe=ge),oe===0)break e;f.arraySet(B,G,V,oe,ue),te-=oe,V+=oe,ge-=oe,ue+=oe,x.length-=oe;break}x.mode=12;break;case 17:for(;L<14;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(x.nlen=257+(31&C),C>>>=5,L-=5,x.ndist=1+(31&C),C>>>=5,L-=5,x.ncode=4+(15&C),C>>>=4,L-=4,286<x.nlen||30<x.ndist){k.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;L<3;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.lens[he[x.have++]]=7&C,C>>>=3,L-=3}for(;x.have<19;)x.lens[he[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,re={bits:x.lenbits},de=p(0,x.lens,0,19,x.lencode,0,x.work,re),x.lenbits=re.bits,de){k.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Se=(j=x.lencode[C&(1<<x.lenbits)-1])>>>16&255,Pe=65535&j,!((Ne=j>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(Pe<16)C>>>=Ne,L-=Ne,x.lens[x.have++]=Pe;else{if(Pe===16){for(z=Ne+2;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(C>>>=Ne,L-=Ne,x.have===0){k.msg="invalid bit length repeat",x.mode=30;break}b=x.lens[x.have-1],oe=3+(3&C),C>>>=2,L-=2}else if(Pe===17){for(z=Ne+3;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}L-=Ne,b=0,oe=3+(7&(C>>>=Ne)),C>>>=3,L-=3}else{for(z=Ne+7;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}L-=Ne,b=0,oe=11+(127&(C>>>=Ne)),C>>>=7,L-=7}if(x.have+oe>x.nlen+x.ndist){k.msg="invalid bit length repeat",x.mode=30;break}for(;oe--;)x.lens[x.have++]=b}}if(x.mode===30)break;if(x.lens[256]===0){k.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,re={bits:x.lenbits},de=p(_,x.lens,0,x.nlen,x.lencode,0,x.work,re),x.lenbits=re.bits,de){k.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,re={bits:x.distbits},de=p(A,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,re),x.distbits=re.bits,de){k.msg="invalid distances set",x.mode=30;break}if(x.mode=20,Q===6)break e;case 20:x.mode=21;case 21:if(6<=te&&258<=ge){k.next_out=ue,k.avail_out=ge,k.next_in=V,k.avail_in=te,x.hold=C,x.bits=L,v(k,se),ue=k.next_out,B=k.output,ge=k.avail_out,V=k.next_in,G=k.input,te=k.avail_in,C=x.hold,L=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Se=(j=x.lencode[C&(1<<x.lenbits)-1])>>>16&255,Pe=65535&j,!((Ne=j>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(Se&&(240&Se)==0){for(et=Ne,Tt=Se,Nt=Pe;Se=(j=x.lencode[Nt+((C&(1<<et+Tt)-1)>>et)])>>>16&255,Pe=65535&j,!(et+(Ne=j>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}C>>>=et,L-=et,x.back+=et}if(C>>>=Ne,L-=Ne,x.back+=Ne,x.length=Pe,Se===0){x.mode=26;break}if(32&Se){x.back=-1,x.mode=12;break}if(64&Se){k.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Se,x.mode=22;case 22:if(x.extra){for(z=x.extra;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.length+=C&(1<<x.extra)-1,C>>>=x.extra,L-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Se=(j=x.distcode[C&(1<<x.distbits)-1])>>>16&255,Pe=65535&j,!((Ne=j>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if((240&Se)==0){for(et=Ne,Tt=Se,Nt=Pe;Se=(j=x.distcode[Nt+((C&(1<<et+Tt)-1)>>et)])>>>16&255,Pe=65535&j,!(et+(Ne=j>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}C>>>=et,L-=et,x.back+=et}if(C>>>=Ne,L-=Ne,x.back+=Ne,64&Se){k.msg="invalid distance code",x.mode=30;break}x.offset=Pe,x.extra=15&Se,x.mode=24;case 24:if(x.extra){for(z=x.extra;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.offset+=C&(1<<x.extra)-1,C>>>=x.extra,L-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){k.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(ge===0)break e;if(oe=se-ge,x.offset>oe){if((oe=x.offset-oe)>x.whave&&x.sane){k.msg="invalid distance too far back",x.mode=30;break}Ae=oe>x.wnext?(oe-=x.wnext,x.wsize-oe):x.wnext-oe,oe>x.length&&(oe=x.length),Te=x.window}else Te=B,Ae=ue-x.offset,oe=x.length;for(ge<oe&&(oe=ge),ge-=oe,x.length-=oe;B[ue++]=Te[Ae++],--oe;);x.length===0&&(x.mode=21);break;case 26:if(ge===0)break e;B[ue++]=x.length,ge--,x.mode=21;break;case 27:if(x.wrap){for(;L<32;){if(te===0)break e;te--,C|=G[V++]<<L,L+=8}if(se-=ge,k.total_out+=se,x.total+=se,se&&(k.adler=x.check=x.flags?y(x.check,B,se,ue-se):g(x.check,B,se,ue-se)),se=ge,(x.flags?C:w(C))!==x.check){k.msg="incorrect data check",x.mode=30;break}L=C=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(C!==(4294967295&x.total)){k.msg="incorrect length check",x.mode=30;break}L=C=0}x.mode=29;case 29:de=1;break e;case 30:de=-3;break e;case 31:return-4;case 32:default:return S}return k.next_out=ue,k.avail_out=ge,k.next_in=V,k.avail_in=te,x.hold=C,x.bits=L,(x.wsize||se!==k.avail_out&&x.mode<30&&(x.mode<27||Q!==4))&&ee(k,k.output,k.next_out,se-k.avail_out)?(x.mode=31,-4):(ie-=k.avail_in,se-=k.avail_out,k.total_in+=ie,k.total_out+=se,x.total+=se,x.wrap&&se&&(k.adler=x.check=x.flags?y(x.check,B,se,k.next_out-se):g(x.check,B,se,k.next_out-se)),k.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(ie==0&&se===0||Q===4)&&de===R&&(de=-5),de)},d.inflateEnd=function(k){if(!k||!k.state)return S;var Q=k.state;return Q.window&&(Q.window=null),k.state=null,R},d.inflateGetHeader=function(k,Q){var x;return k&&k.state?(2&(x=k.state).wrap)==0?S:((x.head=Q).done=!1,R):S},d.inflateSetDictionary=function(k,Q){var x,G=Q.length;return k&&k.state?(x=k.state).wrap!==0&&x.mode!==11?S:x.mode===11&&g(1,Q,G,0)!==x.check?-3:ee(k,Q,G,G)?(x.mode=31,-4):(x.havedict=1,R):S},d.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,c,d){var f=l("../utils/common"),g=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],y=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],v=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];c.exports=function(_,A,R,S,T,m,E,w){var D,I,U,O,X,H,$,F,ae,ee=w.bits,k=0,Q=0,x=0,G=0,B=0,V=0,ue=0,te=0,ge=0,C=0,L=null,ie=0,se=new f.Buf16(16),oe=new f.Buf16(16),Ae=null,Te=0;for(k=0;k<=15;k++)se[k]=0;for(Q=0;Q<S;Q++)se[A[R+Q]]++;for(B=ee,G=15;1<=G&&se[G]===0;G--);if(G<B&&(B=G),G===0)return T[m++]=20971520,T[m++]=20971520,w.bits=1,0;for(x=1;x<G&&se[x]===0;x++);for(B<x&&(B=x),k=te=1;k<=15;k++)if(te<<=1,(te-=se[k])<0)return-1;if(0<te&&(_===0||G!==1))return-1;for(oe[1]=0,k=1;k<15;k++)oe[k+1]=oe[k]+se[k];for(Q=0;Q<S;Q++)A[R+Q]!==0&&(E[oe[A[R+Q]]++]=Q);if(H=_===0?(L=Ae=E,19):_===1?(L=g,ie-=257,Ae=y,Te-=257,256):(L=v,Ae=p,-1),k=x,X=m,ue=Q=C=0,U=-1,O=(ge=1<<(V=B))-1,_===1&&852<ge||_===2&&592<ge)return 1;for(;;){for($=k-ue,ae=E[Q]<H?(F=0,E[Q]):E[Q]>H?(F=Ae[Te+E[Q]],L[ie+E[Q]]):(F=96,0),D=1<<k-ue,x=I=1<<V;T[X+(C>>ue)+(I-=D)]=$<<24|F<<16|ae|0,I!==0;);for(D=1<<k-1;C&D;)D>>=1;if(D!==0?(C&=D-1,C+=D):C=0,Q++,--se[k]==0){if(k===G)break;k=A[R+E[Q]]}if(B<k&&(C&O)!==U){for(ue===0&&(ue=B),X+=x,te=1<<(V=k-ue);V+ue<G&&!((te-=se[V+ue])<=0);)V++,te<<=1;if(ge+=1<<V,_===1&&852<ge||_===2&&592<ge)return 1;T[U=C&O]=B<<24|V<<16|X-m|0}}return C!==0&&(T[X+C]=k-ue<<24|64<<16|0),w.bits=B,0}},{"../utils/common":41}],51:[function(l,c,d){c.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,c,d){var f=l("../utils/common"),g=0,y=1;function v(j){for(var q=j.length;0<=--q;)j[q]=0}var p=0,_=29,A=256,R=A+1+_,S=30,T=19,m=2*R+1,E=15,w=16,D=7,I=256,U=16,O=17,X=18,H=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],$=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=new Array(2*(R+2));v(ee);var k=new Array(2*S);v(k);var Q=new Array(512);v(Q);var x=new Array(256);v(x);var G=new Array(_);v(G);var B,V,ue,te=new Array(S);function ge(j,q,he,pe,K){this.static_tree=j,this.extra_bits=q,this.extra_base=he,this.elems=pe,this.max_length=K,this.has_stree=j&&j.length}function C(j,q){this.dyn_tree=j,this.max_code=0,this.stat_desc=q}function L(j){return j<256?Q[j]:Q[256+(j>>>7)]}function ie(j,q){j.pending_buf[j.pending++]=255&q,j.pending_buf[j.pending++]=q>>>8&255}function se(j,q,he){j.bi_valid>w-he?(j.bi_buf|=q<<j.bi_valid&65535,ie(j,j.bi_buf),j.bi_buf=q>>w-j.bi_valid,j.bi_valid+=he-w):(j.bi_buf|=q<<j.bi_valid&65535,j.bi_valid+=he)}function oe(j,q,he){se(j,he[2*q],he[2*q+1])}function Ae(j,q){for(var he=0;he|=1&j,j>>>=1,he<<=1,0<--q;);return he>>>1}function Te(j,q,he){var pe,K,ye=new Array(E+1),xe=0;for(pe=1;pe<=E;pe++)ye[pe]=xe=xe+he[pe-1]<<1;for(K=0;K<=q;K++){var ve=j[2*K+1];ve!==0&&(j[2*K]=Ae(ye[ve]++,ve))}}function Ne(j){var q;for(q=0;q<R;q++)j.dyn_ltree[2*q]=0;for(q=0;q<S;q++)j.dyn_dtree[2*q]=0;for(q=0;q<T;q++)j.bl_tree[2*q]=0;j.dyn_ltree[2*I]=1,j.opt_len=j.static_len=0,j.last_lit=j.matches=0}function Se(j){8<j.bi_valid?ie(j,j.bi_buf):0<j.bi_valid&&(j.pending_buf[j.pending++]=j.bi_buf),j.bi_buf=0,j.bi_valid=0}function Pe(j,q,he,pe){var K=2*q,ye=2*he;return j[K]<j[ye]||j[K]===j[ye]&&pe[q]<=pe[he]}function et(j,q,he){for(var pe=j.heap[he],K=he<<1;K<=j.heap_len&&(K<j.heap_len&&Pe(q,j.heap[K+1],j.heap[K],j.depth)&&K++,!Pe(q,pe,j.heap[K],j.depth));)j.heap[he]=j.heap[K],he=K,K<<=1;j.heap[he]=pe}function Tt(j,q,he){var pe,K,ye,xe,ve=0;if(j.last_lit!==0)for(;pe=j.pending_buf[j.d_buf+2*ve]<<8|j.pending_buf[j.d_buf+2*ve+1],K=j.pending_buf[j.l_buf+ve],ve++,pe===0?oe(j,K,q):(oe(j,(ye=x[K])+A+1,q),(xe=H[ye])!==0&&se(j,K-=G[ye],xe),oe(j,ye=L(--pe),he),(xe=$[ye])!==0&&se(j,pe-=te[ye],xe)),ve<j.last_lit;);oe(j,I,q)}function Nt(j,q){var he,pe,K,ye=q.dyn_tree,xe=q.stat_desc.static_tree,ve=q.stat_desc.has_stree,_e=q.stat_desc.elems,qe=-1;for(j.heap_len=0,j.heap_max=m,he=0;he<_e;he++)ye[2*he]!==0?(j.heap[++j.heap_len]=qe=he,j.depth[he]=0):ye[2*he+1]=0;for(;j.heap_len<2;)ye[2*(K=j.heap[++j.heap_len]=qe<2?++qe:0)]=1,j.depth[K]=0,j.opt_len--,ve&&(j.static_len-=xe[2*K+1]);for(q.max_code=qe,he=j.heap_len>>1;1<=he;he--)et(j,ye,he);for(K=_e;he=j.heap[1],j.heap[1]=j.heap[j.heap_len--],et(j,ye,1),pe=j.heap[1],j.heap[--j.heap_max]=he,j.heap[--j.heap_max]=pe,ye[2*K]=ye[2*he]+ye[2*pe],j.depth[K]=(j.depth[he]>=j.depth[pe]?j.depth[he]:j.depth[pe])+1,ye[2*he+1]=ye[2*pe+1]=K,j.heap[1]=K++,et(j,ye,1),2<=j.heap_len;);j.heap[--j.heap_max]=j.heap[1],(function(Le,Ct){var kn,$t,la,Ke,mt,Gt,rt=Ct.dyn_tree,xi=Ct.max_code,Zs=Ct.stat_desc.static_tree,Ws=Ct.stat_desc.has_stree,Ta=Ct.stat_desc.extra_bits,oa=Ct.stat_desc.extra_base,un=Ct.stat_desc.max_length,qt=0;for(Ke=0;Ke<=E;Ke++)Le.bl_count[Ke]=0;for(rt[2*Le.heap[Le.heap_max]+1]=0,kn=Le.heap_max+1;kn<m;kn++)un<(Ke=rt[2*rt[2*($t=Le.heap[kn])+1]+1]+1)&&(Ke=un,qt++),rt[2*$t+1]=Ke,xi<$t||(Le.bl_count[Ke]++,mt=0,oa<=$t&&(mt=Ta[$t-oa]),Gt=rt[2*$t],Le.opt_len+=Gt*(Ke+mt),Ws&&(Le.static_len+=Gt*(Zs[2*$t+1]+mt)));if(qt!==0){do{for(Ke=un-1;Le.bl_count[Ke]===0;)Ke--;Le.bl_count[Ke]--,Le.bl_count[Ke+1]+=2,Le.bl_count[un]--,qt-=2}while(0<qt);for(Ke=un;Ke!==0;Ke--)for($t=Le.bl_count[Ke];$t!==0;)xi<(la=Le.heap[--kn])||(rt[2*la+1]!==Ke&&(Le.opt_len+=(Ke-rt[2*la+1])*rt[2*la],rt[2*la+1]=Ke),$t--)}})(j,q),Te(ye,qe,j.bl_count)}function b(j,q,he){var pe,K,ye=-1,xe=q[1],ve=0,_e=7,qe=4;for(xe===0&&(_e=138,qe=3),q[2*(he+1)+1]=65535,pe=0;pe<=he;pe++)K=xe,xe=q[2*(pe+1)+1],++ve<_e&&K===xe||(ve<qe?j.bl_tree[2*K]+=ve:K!==0?(K!==ye&&j.bl_tree[2*K]++,j.bl_tree[2*U]++):ve<=10?j.bl_tree[2*O]++:j.bl_tree[2*X]++,ye=K,qe=(ve=0)===xe?(_e=138,3):K===xe?(_e=6,3):(_e=7,4))}function de(j,q,he){var pe,K,ye=-1,xe=q[1],ve=0,_e=7,qe=4;for(xe===0&&(_e=138,qe=3),pe=0;pe<=he;pe++)if(K=xe,xe=q[2*(pe+1)+1],!(++ve<_e&&K===xe)){if(ve<qe)for(;oe(j,K,j.bl_tree),--ve!=0;);else K!==0?(K!==ye&&(oe(j,K,j.bl_tree),ve--),oe(j,U,j.bl_tree),se(j,ve-3,2)):ve<=10?(oe(j,O,j.bl_tree),se(j,ve-3,3)):(oe(j,X,j.bl_tree),se(j,ve-11,7));ye=K,qe=(ve=0)===xe?(_e=138,3):K===xe?(_e=6,3):(_e=7,4)}}v(te);var re=!1;function z(j,q,he,pe){se(j,(p<<1)+(pe?1:0),3),(function(K,ye,xe,ve){Se(K),ie(K,xe),ie(K,~xe),f.arraySet(K.pending_buf,K.window,ye,xe,K.pending),K.pending+=xe})(j,q,he)}d._tr_init=function(j){re||((function(){var q,he,pe,K,ye,xe=new Array(E+1);for(K=pe=0;K<_-1;K++)for(G[K]=pe,q=0;q<1<<H[K];q++)x[pe++]=K;for(x[pe-1]=K,K=ye=0;K<16;K++)for(te[K]=ye,q=0;q<1<<$[K];q++)Q[ye++]=K;for(ye>>=7;K<S;K++)for(te[K]=ye<<7,q=0;q<1<<$[K]-7;q++)Q[256+ye++]=K;for(he=0;he<=E;he++)xe[he]=0;for(q=0;q<=143;)ee[2*q+1]=8,q++,xe[8]++;for(;q<=255;)ee[2*q+1]=9,q++,xe[9]++;for(;q<=279;)ee[2*q+1]=7,q++,xe[7]++;for(;q<=287;)ee[2*q+1]=8,q++,xe[8]++;for(Te(ee,R+1,xe),q=0;q<S;q++)k[2*q+1]=5,k[2*q]=Ae(q,5);B=new ge(ee,H,A+1,R,E),V=new ge(k,$,0,S,E),ue=new ge(new Array(0),F,0,T,D)})(),re=!0),j.l_desc=new C(j.dyn_ltree,B),j.d_desc=new C(j.dyn_dtree,V),j.bl_desc=new C(j.bl_tree,ue),j.bi_buf=0,j.bi_valid=0,Ne(j)},d._tr_stored_block=z,d._tr_flush_block=function(j,q,he,pe){var K,ye,xe=0;0<j.level?(j.strm.data_type===2&&(j.strm.data_type=(function(ve){var _e,qe=4093624447;for(_e=0;_e<=31;_e++,qe>>>=1)if(1&qe&&ve.dyn_ltree[2*_e]!==0)return g;if(ve.dyn_ltree[18]!==0||ve.dyn_ltree[20]!==0||ve.dyn_ltree[26]!==0)return y;for(_e=32;_e<A;_e++)if(ve.dyn_ltree[2*_e]!==0)return y;return g})(j)),Nt(j,j.l_desc),Nt(j,j.d_desc),xe=(function(ve){var _e;for(b(ve,ve.dyn_ltree,ve.l_desc.max_code),b(ve,ve.dyn_dtree,ve.d_desc.max_code),Nt(ve,ve.bl_desc),_e=T-1;3<=_e&&ve.bl_tree[2*ae[_e]+1]===0;_e--);return ve.opt_len+=3*(_e+1)+5+5+4,_e})(j),K=j.opt_len+3+7>>>3,(ye=j.static_len+3+7>>>3)<=K&&(K=ye)):K=ye=he+5,he+4<=K&&q!==-1?z(j,q,he,pe):j.strategy===4||ye===K?(se(j,2+(pe?1:0),3),Tt(j,ee,k)):(se(j,4+(pe?1:0),3),(function(ve,_e,qe,Le){var Ct;for(se(ve,_e-257,5),se(ve,qe-1,5),se(ve,Le-4,4),Ct=0;Ct<Le;Ct++)se(ve,ve.bl_tree[2*ae[Ct]+1],3);de(ve,ve.dyn_ltree,_e-1),de(ve,ve.dyn_dtree,qe-1)})(j,j.l_desc.max_code+1,j.d_desc.max_code+1,xe+1),Tt(j,j.dyn_ltree,j.dyn_dtree)),Ne(j),pe&&Se(j)},d._tr_tally=function(j,q,he){return j.pending_buf[j.d_buf+2*j.last_lit]=q>>>8&255,j.pending_buf[j.d_buf+2*j.last_lit+1]=255&q,j.pending_buf[j.l_buf+j.last_lit]=255&he,j.last_lit++,q===0?j.dyn_ltree[2*he]++:(j.matches++,q--,j.dyn_ltree[2*(x[he]+A+1)]++,j.dyn_dtree[2*L(q)]++),j.last_lit===j.lit_bufsize-1},d._tr_align=function(j){se(j,2,3),oe(j,I,ee),(function(q){q.bi_valid===16?(ie(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)})(j)}},{"../utils/common":41}],53:[function(l,c,d){c.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,c,d){(function(f){(function(g,y){if(!g.setImmediate){var v,p,_,A,R=1,S={},T=!1,m=g.document,E=Object.getPrototypeOf&&Object.getPrototypeOf(g);E=E&&E.setTimeout?E:g,v={}.toString.call(g.process)==="[object process]"?function(U){process.nextTick(function(){D(U)})}:(function(){if(g.postMessage&&!g.importScripts){var U=!0,O=g.onmessage;return g.onmessage=function(){U=!1},g.postMessage("","*"),g.onmessage=O,U}})()?(A="setImmediate$"+Math.random()+"$",g.addEventListener?g.addEventListener("message",I,!1):g.attachEvent("onmessage",I),function(U){g.postMessage(A+U,"*")}):g.MessageChannel?((_=new MessageChannel).port1.onmessage=function(U){D(U.data)},function(U){_.port2.postMessage(U)}):m&&"onreadystatechange"in m.createElement("script")?(p=m.documentElement,function(U){var O=m.createElement("script");O.onreadystatechange=function(){D(U),O.onreadystatechange=null,p.removeChild(O),O=null},p.appendChild(O)}):function(U){setTimeout(D,0,U)},E.setImmediate=function(U){typeof U!="function"&&(U=new Function(""+U));for(var O=new Array(arguments.length-1),X=0;X<O.length;X++)O[X]=arguments[X+1];var H={callback:U,args:O};return S[R]=H,v(R),R++},E.clearImmediate=w}function w(U){delete S[U]}function D(U){if(T)setTimeout(D,0,U);else{var O=S[U];if(O){T=!0;try{(function(X){var H=X.callback,$=X.args;switch($.length){case 0:H();break;case 1:H($[0]);break;case 2:H($[0],$[1]);break;case 3:H($[0],$[1],$[2]);break;default:H.apply(y,$)}})(O)}finally{w(U),T=!1}}}}function I(U){U.source===g&&typeof U.data=="string"&&U.data.indexOf(A)===0&&D(+U.data.slice(A.length))}})(typeof self>"u"?f===void 0?this:f:self)}).call(this,typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(bc)),bc.exports}var sv=iv();const lv=zc(sv),ov=({logs:u,currentRound:o,currentPaperVersion:l,filePrefix:c,dataAlert:d,dataFileName:f,dataFileContent:g})=>{const[y,v]=be.useState([]),[p,_]=be.useState(null),[A,R]=be.useState(!1),[S,T]=be.useState(!1),[m,E]=be.useState(null),[w,D]=be.useState(null),[I,U]=be.useState(!1),[O,X]=be.useState(!1),H=async()=>{R(!0),_(null);const Q=ia(l,"icis_paper"),x=fi(o),G=Bc();if(!Q){_("Missing paper file to save"),R(!1);return}try{const B=c?`${c}_`:"",V=new lv,ue=[],te=Hc();te&&(V.file(te.filename,te.blob),ue.push(te.filename),console.log(`[SaveAll] Added PDF: ${te.filename}`));const ge=`${B}icis_paper_v${l}_FINAL.tex`;V.file(ge,Q),ue.push(ge),console.log(`[SaveAll] Added TeX: ${ge}`);const C=$p();if(C){const Se=`${B}${C.filename}`;V.file(Se,C.content),ue.push(Se),console.log(`[SaveAll] Added BibTeX: ${Se}`)}const L=Fp();if(L.length>0){console.log(`[SaveAll] Adding ${L.length} PNG figures...`);const Se=await Bp();for(const Pe of Se)V.file(Pe.filename,Pe.blob),ue.push(Pe.filename);console.log(`[SaveAll] Added ${Se.length} PNG figures`)}if(f&&g&&(V.file(f,g),ue.push(f),console.log(`[SaveAll] Added data file: ${f}`)),x){const Se=`${B}feedback_v${o}.json`;V.file(Se,JSON.stringify(x,null,2)),ue.push(Se)}if(G&&G.length>0)for(const Se of G){const Pe=`${B}oversight_v${Se.version||1}.json`;V.file(Pe,JSON.stringify(Se,null,2)),ue.push(Pe)}const ie=Gp();if(ie){const Se=`${B}chart_data${ie.isSynthetic?"_synthetic":""}.json`;V.file(Se,ie.chartDataJson),ue.push(Se),console.log(`[SaveAll] Added chart data: ${Se}`);const Pe=`${B}visualization_code.py`;V.file(Pe,ie.pythonCode),ue.push(Pe),console.log(`[SaveAll] Added Python code: ${Pe}`)}const se=await V.generateAsync({type:"blob"}),oe=`${B}icis_submission_v${l}.zip`,Ae=URL.createObjectURL(se),Te=document.createElement("a");Te.href=Ae,Te.download=oe,document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),URL.revokeObjectURL(Ae),console.log(`[SaveAll] Downloaded ${oe} with ${ue.length} files`),v([oe,...ue]);const Ne=await zp();Ne.success?console.log("[SaveAll] Data file cleaned up from cloud storage"):console.warn("[SaveAll] Failed to clean up data file:",Ne.error)}catch(B){console.error("[SaveAll] Error:",B),_(B instanceof Error?B.message:"Failed to create zip file")}R(!1)},$=async()=>{T(!0),E(null),_(null);const Q=ia(l,"icis_paper");if(!Q){_("No paper content available to compile"),T(!1);return}const G=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,B=Pp();console.log(`[Compile] Compiling with ${B.length} PNG figures`);const V=await Np(G,Q,B.length>0?B:void 0);E(V),V.success||_(V.error||"PDF compilation failed"),T(!1)},F=()=>{m!=null&&m.pdfFilename&&Ip(m.pdfFilename)},ae=async()=>{U(!0),X(!1);const x=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,G=await Dp(x);D(G),U(!1)},ee=()=>{w!=null&&w.fullUrl&&(navigator.clipboard.writeText(w.fullUrl),X(!0),setTimeout(()=>X(!1),3e3))},k=()=>{w!=null&&w.fullUrl&&Op(w.fullUrl)};return s.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[s.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:s.jsx(Uc,{size:40})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),s.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",o," revision cycle(s)."]}),s.jsx(yi,{logs:u,height:"h-32"}),s.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Paper compiled (v",l,")"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," All sections verified"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Submission package generated"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),s.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[s.jsx("button",{onClick:$,disabled:S||A,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:S?s.jsxs(s.Fragment,{children:[s.jsx(ap,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Hs,{size:18}),"Compile LaTeX to PDF"]})}),(m==null?void 0:m.success)&&s.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),s.jsxs("p",{className:"text-xs text-emerald-600",children:[m.pdfFilename," (",Math.round((m.fileSize||0)/1024)," KB)",m.pageCount&&` • ${m.pageCount} pages`]})]}),s.jsxs("button",{onClick:F,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[s.jsx(Ps,{size:16}),"Download"]})]})}),(m==null?void 0:m.success)&&(m==null?void 0:m.exceedsLimit)&&s.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),s.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",m.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),d&&s.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),s.jsx("p",{className:"text-xs text-orange-700 mt-1",children:d})]}),(m==null?void 0:m.success)&&s.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(_c,{size:18,className:"text-blue-600"}),s.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),s.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),w!=null&&w.success?s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",readOnly:!0,value:w.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),s.jsxs("button",{onClick:ee,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[s.jsx(Z0,{size:14}),O?"Copied!":"Copy"]})]}),s.jsx("div",{className:"flex gap-2",children:s.jsxs("button",{onClick:k,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[s.jsx(ey,{size:14}),"Open Preview"]})}),s.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",w.expiresIn]})]}):s.jsx("button",{onClick:ae,disabled:I,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:I?s.jsxs(s.Fragment,{children:[s.jsx(ap,{size:16,className:"animate-spin"}),"Creating Link..."]}):s.jsxs(s.Fragment,{children:[s.jsx(uy,{size:16}),"Create Shareable Link"]})})]}),s.jsxs("button",{onClick:H,disabled:A||S,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(wy,{size:18,className:A?"animate-pulse":""}),A?"Creating ZIP...":"Download All Files (.zip)"]}),s.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads ZIP with PDF, .tex, .bib, PNG figures, chart data JSON, Python code, and data files"}),y.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[s.jsxs("p",{className:"font-medium mb-1",children:["Downloaded: ",y[0]]}),s.jsxs("p",{className:"text-xs",children:["Contains ",y.length-1," files: ",y.slice(1).map(Q=>Q.split(/[/\\]/).pop()).join(", ")]})]}),p&&s.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[s.jsx("p",{className:"font-medium",children:"Error:"}),s.jsx("p",{className:"text-xs",children:p}),(m==null?void 0:m.log)&&s.jsxs("details",{className:"mt-2 text-left",children:[s.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),s.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:m.log})]})]}),s.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},cv=({state:u,isProcessing:o,onAction:l,uploadedFiles:c,onFileChange:d,detectionStatus:f,onRefreshDetection:g,onStageAbort:y,onStageRestart:v,filePrefix:p,dataFileName:_,dataFileContent:A,participantEmail:R})=>{const[S,T]=be.useState(),m=w=>{T(w),l("PROCEED_TO_SUPERVISOR")},E=()=>{switch(u.currentStage){case me.SETUP:const w=u.rounds.length>0||u.currentPaperVersion>0||u.paperContent!=="";return s.jsx(Xy,{logs:u.logs,stageStatus:u.stages[me.SETUP],isProcessing:o,uploadedFiles:c,onFileChange:d,onAction:l,detectionStatus:f,onRefreshDetection:g,hasExistingCase:w});case me.BUILDER:return s.jsx(Qy,{logs:u.logs,isProcessing:o,isPartialPaper:u.isPartialPaper,currentBuilderStep:u.currentBuilderStep,paperContent:u.paperContent,onAbort:()=>y==null?void 0:y(me.BUILDER),onRestart:()=>v==null?void 0:v(me.BUILDER)});case me.REVIEWER:const D=u.stages[me.REVIEWER]===Ie.COMPLETED;return s.jsx(nv,{logs:u.logs,isProcessing:o,currentRound:u.currentRound,isComplete:D,onProceedToSupervisor:m,onAbort:()=>y==null?void 0:y(me.REVIEWER),onRestart:()=>v==null?void 0:v(me.REVIEWER),filePrefix:p,participantEmail:R});case me.SUPERVISOR:const I=Fs(u.currentRound),U=Bc();return s.jsx(av,{currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,lastFeedback:u.lastFeedback,isProcessing:o,oversightData:I,allOversight:U,onAction:l,reviewOutputFiles:S});case me.REVISER:return s.jsx(rv,{logs:u.logs,isProcessing:o,currentPaperVersion:u.currentPaperVersion,paperContent:u.paperContent,onAbort:()=>y==null?void 0:y(me.REVISER),onRestart:()=>v==null?void 0:v(me.REVISER)});case me.FINALIZE:return s.jsx(ov,{logs:u.logs,currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,filePrefix:p,dataAlert:u.dataAlert,dataFileName:_,dataFileContent:A});default:return s.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:s.jsxs("p",{children:["Unknown stage: ",u.currentStage]})})}};return s.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:E()})};function qs(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://icis-deploy-12-10-2025.vercel.app":""}const uv=`OtjWTGJoUPpa+WdvSrFILls0jsgIHz/Bz/AtiUXZBgw=
`;function Ys(){const u={"Content-Type":"application/json"};return u["X-Internal-Secret"]=uv,u}async function dv(u){const o=qs(),l=new URLSearchParams,c=`${o}/api/participants${l.toString()?`?${l}`:""}`,f=await(await fetch(c,{headers:Ys()})).json();if(!f.success)throw new Error(f.error||"Failed to fetch participants");return f.participants}async function cp(u){const o=qs(),c=await(await fetch(`${o}/api/participants`,{method:"PATCH",headers:Ys(),body:JSON.stringify(u)})).json();if(!c.success)throw new Error(c.error||"Failed to update participant");return c.participant}async function fv(u){const o=qs(),c=await(await fetch(`${o}/api/participants`,{method:"DELETE",headers:Ys(),body:JSON.stringify({email:u})})).json();if(!c.success)throw new Error(c.error||"Failed to delete participant")}async function hv(){const u=qs(),l=await(await fetch(`${u}/api/research-stats`,{headers:Ys()})).json();if(!l.success)throw new Error(l.error||"Failed to fetch research stats");return l.stats}const zs=({label:u,value:o,icon:l,color:c,subtext:d})=>s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-slate-500",children:u}),s.jsx("p",{className:`text-2xl font-bold ${c}`,children:o}),d&&s.jsx("p",{className:"text-xs text-slate-400 mt-1",children:d})]}),s.jsx("div",{className:`p-2 rounded-lg ${c.replace("text-","bg-").replace("-600","-100")}`,children:l})]})}),pv=({label:u,count:o,total:l,color:c})=>{const d=l>0?o/l*100:0;return s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[s.jsx("span",{className:"text-slate-600",children:u}),s.jsx("span",{className:"text-slate-800 font-medium",children:o})]}),s.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:s.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${c}`,style:{width:`${Math.max(d,2)}%`}})})]})},mv=({onViewParticipants:u})=>{const[o,l]=be.useState(null),[c,d]=be.useState(!0),[f,g]=be.useState(null),y=async()=>{d(!0),g(null);try{const p=await hv();l(p)}catch(p){g(p instanceof Error?p.message:"Failed to load stats")}finally{d(!1)}};if(be.useEffect(()=>{y()},[]),c)return s.jsx("div",{className:"flex items-center justify-center h-64",children:s.jsx(an,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(f)return s.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[s.jsx(Tc,{size:20}),s.jsxs("span",{children:["Error: ",f]})]}),s.jsx("button",{onClick:y,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!o)return null;const v=[{label:"1. Registered",count:o.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:o.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:o.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:o.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:o.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:o.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:o.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:o.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:o.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:o.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:o.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:o.funnel.dropped_out||0,color:"bg-red-500"}];return s.jsxs("div",{className:"p-6 space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),s.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),s.jsxs("button",{onClick:y,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(an,{size:16}),"Refresh"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[s.jsx(zs,{label:"Total Participants",value:o.total,icon:s.jsx(Ep,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${o.active} active`}),s.jsx(zs,{label:"Surveys Sent",value:o.surveysSent,icon:s.jsx(Uc,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),s.jsx(zs,{label:"Surveys Completed",value:o.surveysCompleted,icon:s.jsx(wc,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),s.jsx(zs,{label:"Completion Rate",value:`${o.completionRate}%`,icon:s.jsx(xp,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),o.alerts&&o.alerts.length>0&&s.jsx("div",{className:"space-y-2",children:o.alerts.map((p,_)=>s.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${p.type==="stuck"?"bg-amber-50 border-amber-200":p.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[s.jsx(Tc,{size:18,className:p.type==="stuck"?"text-amber-500":p.type==="pending_survey"?"text-blue-500":"text-slate-500"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-sm text-slate-800",children:p.message}),s.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[p.participants.slice(0,3).join(", "),p.participants.length>3&&` +${p.participants.length-3} more`]})]})]},_))}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(Ec,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),s.jsx("div",{className:"space-y-1",children:v.map(p=>s.jsx(pv,{label:p.label,count:p.count,total:o.total,color:p.color},p.label))})]}),s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(j0,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),s.jsx("span",{className:"text-lg font-bold text-emerald-600",children:o.groups.group1.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group1.dropRate,"%"]})]})]})]}),s.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),s.jsx("span",{className:"text-lg font-bold text-blue-600",children:o.groups.group2.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group2.dropRate,"%"]})]})]})]}),o.groups.unassigned>0&&s.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:s.jsxs("span",{className:"text-sm text-slate-600",children:[o.groups.unassigned," unassigned participant(s)"]})})]})]})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{onClick:u,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},Oc={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Yp={1:"With Oversight",2:"Control (No Oversight)"},gv=({status:u})=>{const o={registered:"bg-gray-100 text-gray-700",interview_completed:"bg-blue-100 text-blue-700",setup_completed:"bg-sky-100 text-sky-700",builder_completed:"bg-amber-100 text-amber-700",reviewer_completed:"bg-orange-100 text-orange-700",supervisor_completed:"bg-purple-100 text-purple-700",reviser_completed:"bg-indigo-100 text-indigo-700",finalize_completed:"bg-teal-100 text-teal-700",paper_sent:"bg-cyan-100 text-cyan-700",survey_sent:"bg-violet-100 text-violet-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o[u]}`,children:Oc[u]})},yv=({groupId:u})=>{if(u===null)return s.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const o=u===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o}`,children:Yp[u]})},vv=({onBack:u})=>{const[o,l]=be.useState([]),[c,d]=be.useState(!0),[f,g]=be.useState(null),[y,v]=be.useState(""),[p,_]=be.useState(""),[A,R]=be.useState("all"),[S,T]=be.useState(null),[m,E]=be.useState(null),w=async()=>{d(!0),g(null);try{const $=await dv();l($)}catch($){g($ instanceof Error?$.message:"Failed to load participants")}finally{d(!1)}};be.useEffect(()=>{w()},[]);const D=o.filter($=>{const F=!y||$.email.toLowerCase().includes(y.toLowerCase())||$.name.toLowerCase().includes(y.toLowerCase()),ae=!p||$.status===p,ee=A==="all"||$.group_id===A;return F&&ae&&ee}),I=async($,F)=>{try{await cp({email:$,status:F}),await w(),T(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update status")}},U=async($,F)=>{try{await cp({email:$,group_id:F}),await w(),T(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update group")}},O=async $=>{if(confirm(`Are you sure you want to delete participant ${$}?`))try{await fv($),await w(),T(null)}catch(F){alert(F instanceof Error?F.message:"Failed to delete participant")}},X=$=>new Date($).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),H=["registered","interview_completed","setup_completed","builder_completed","reviewer_completed","supervisor_completed","reviser_completed","finalize_completed","paper_sent","survey_sent","survey_completed","dropped_out"];return s.jsxs("div",{className:"p-6 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:u,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:s.jsx(M0,{size:20,className:"text-slate-600"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),s.jsxs("p",{className:"text-slate-500 text-sm",children:[D.length," of ",o.length," participants"]})]})]}),s.jsxs("button",{onClick:w,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(an,{size:16,className:c?"animate-spin":""}),"Refresh"]})]}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[s.jsx(bp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),s.jsx("input",{type:"text",placeholder:"Search by name or email...",value:y,onChange:$=>v($.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:p,onChange:$=>_($.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"",children:"All Statuses"}),H.map($=>s.jsx("option",{value:$,children:Oc[$]},$))]}),s.jsx(Ac,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:A===null?"null":A==="all"?"all":A,onChange:$=>{const F=$.target.value;R(F==="all"?"all":F==="null"?null:parseInt(F))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"all",children:"All Groups"}),s.jsx("option",{value:"1",children:"Group 1: With Oversight"}),s.jsx("option",{value:"2",children:"Group 2: Control"}),s.jsx("option",{value:"null",children:"Unassigned"})]}),s.jsx(Ac,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),f&&s.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:f}),s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:s.jsxs("tr",{children:[s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),s.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),s.jsx("tbody",{children:c?s.jsx("tr",{children:s.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[s.jsx(an,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):D.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):D.map($=>s.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[s.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:$.name||s.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),s.jsx("td",{className:"px-4 py-3 text-slate-600",children:$.email}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(gv,{status:$.status})}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(yv,{groupId:$.group_id})}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:X($.registered_at)}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:X($.updated_at)}),s.jsxs("td",{className:"px-4 py-3 text-right relative",children:[s.jsx("button",{onClick:()=>T(S===$.id?null:$.id),className:"p-1 rounded hover:bg-slate-100",children:s.jsx(vp,{size:16,className:"text-slate-400"})}),S===$.id&&s.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),H.map(F=>s.jsxs("button",{onClick:()=>I($.email,F),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${$.status===F?"text-blue-600 font-medium":"text-slate-700"}`,children:[$.status===F&&s.jsx(on,{size:12}),s.jsx("span",{className:$.status===F?"":"ml-4",children:Oc[F]})]},F)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map(F=>s.jsxs("button",{onClick:()=>U($.email,F),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${$.group_id===F?"text-blue-600 font-medium":"text-slate-700"}`,children:[$.group_id===F&&s.jsx(on,{size:12}),s.jsx("span",{className:$.group_id===F?"":"ml-4",children:Yp[F]})]},F)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsxs("button",{onClick:()=>O($.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[s.jsx(Cy,{size:14}),"Delete Participant"]})]})]})]},$.id))})]})})})]})},bv=({onClose:u})=>{const[o,l]=be.useState("dashboard");return s.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:o==="dashboard"?s.jsx(mv,{onViewParticipants:()=>l("participants")}):s.jsx(vv,{onBack:()=>l("dashboard")})})},xv="modulepreload",Sv=function(u){return"/asd/"+u},up={},xc=function(o,l,c){let d=Promise.resolve();if(l&&l.length>0){let g=function(p){return Promise.all(p.map(_=>Promise.resolve(_).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),v=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));d=g(l.map(p=>{if(p=Sv(p),p in up)return;up[p]=!0;const _=p.endsWith(".css"),A=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${A}`))return;const R=document.createElement("link");if(R.rel=_?"stylesheet":xv,_||(R.as="script"),R.crossOrigin="",R.href=p,v&&R.setAttribute("nonce",v),document.head.appendChild(R),_)return new Promise((S,T)=>{R.addEventListener("load",S),R.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function f(g){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=g,window.dispatchEvent(y),!y.defaultPrevented)throw g}return d.then(g=>{for(const y of g||[])y.status==="rejected"&&f(y.reason);return o().catch(f)})},Ev=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
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
- **Needs mathematical formulation:** Yes/No (indicate if novel algorithms, proofs, or computational models are needed - this determines whether Step 3 executes for experimental/survey research) \r
\r
---\r
\r
## STEP 1.5: DATA FILE ASSESSMENT\r
\r
**Execute this step to determine data availability and strategy.**\r
\r
### A) Check for Data_file\r
\r
Use Glob to check if data file exists (using participantId from STEP 0):\r
\`\`\`\r
Glob: Data_file_{participantId}*\r
Glob: Data/*\r
\`\`\`\r
\r
Document result:\r
- ✅ **Data_file found:** [location and format]\r
- ❌ **No Data_file:** Proceed based on research type\r
\r
### B) If Data_file exists, assess format and contents:\r
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
### C) Set Data Strategy Based on Research Type\r
\r
**ALL research types produce FULL PAPER (14-16 pages).**\r
\r
**For RESEARCH TYPE 2D (Laboratory & Field Experiments):**\r
- ✅ Data_file exists → Full paper with empirical results\r
- ❌ No Data_file + Interview indicates data collection PLANNED → Write full paper with methodology, note "Data collection in progress" in Results/Discussion\r
- ❌ No Data_file + No planned data collection → Generate synthetic experimental data for demonstration\r
\r
**For RESEARCH TYPE 2E (Survey Research):**\r
- ✅ Data_file exists → Full paper with empirical results\r
- ❌ No Data_file + Interview indicates data collection PLANNED → Write full paper with methodology, note "Data collection in progress" in Results/Discussion\r
- ❌ No Data_file + No planned data collection → Generate synthetic survey data for demonstration\r
\r
**For RESEARCH TYPE 2A (Simulation & Computational Modeling):**\r
- ✅ Data_file exists → Use for calibration/validation + generate synthetic data for simulation runs\r
- ❌ No Data_file → Generate synthetic data based on literature (simulations always need data)\r
\r
**For RESEARCH TYPE 2B (Analytical & Theoretical Modeling):**\r
- ✅ Data_file exists → Use for empirical validation of theoretical predictions\r
- ❌ No Data_file → Theoretical paper with propositions and numerical examples for illustration\r
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
- Data strategy documented\r
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
    // - Foundational theory papers (IS theories, behavioral theories, economic theories)\r
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
      "minFigures": 2,\r
      "minTables": 1,\r
      "description": "Findings with figures/tables, statistical results, hypothesis outcomes"\r
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
Generate publication-quality figures using matplotlib/seaborn.\r
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
Required figures (as applicable):\r
\r
**FOR ALL RESEARCH TYPES - Data Analysis Figures:**\r
- Descriptive statistics visualization (histograms, box plots, distribution plots)\r
- Correlation heatmaps or matrices\r
- Main results visualization (bar charts with error bars, line plots with confidence intervals)\r
- Comparison charts (treatment vs control, before vs after)\r
\r
**FOR EXPERIMENTAL/SURVEY RESEARCH (2D/2E):**\r
- Hypothesis test results visualization (group comparisons with significance markers)\r
- Interaction plots for factorial designs\r
- Structural equation model diagrams (if applicable)\r
- Measurement model results (factor loadings, reliability indicators)\r
\r
**FOR SIMULATION/COMPUTATIONAL RESEARCH (2A/2B):**\r
- Training/validation curves\r
- Performance comparison charts (proposed vs baselines)\r
- Ablation study visualizations\r
- Sensitivity analysis plots\r
- Convergence plots\r
\r
**FOR ALL TYPES:**\r
- Statistical significance indicators (*, **, *** annotations)\r
- Effect size visualizations where appropriate\r
\r
**File locations:**\r
- Visualization script → Code/ directory\r
- Generated figures → Results/ directory (save as .png and .pdf)\r
\r
Guidelines: 300 DPI, clear labels, consistent colors, PDF+PNG, proper font sizes\r
\r
DELIVERABLE: Visualization script in Code/, publication-ready figures in Results/\r
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
**DETERMINE PAPER TYPE:**\r
\r
**FULL PAPER (ALL Research Types):**\r
- All sections: Introduction, Literature Review, Theory, Method, Results, Discussion, Conclusion\r
- Target: 14-16 pages\r
- Include all figures and tables from analysis\r
- Follow steps 8.1-8.3 below for figure handling\r
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
**FOR FULL PAPER:**\r
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
**FORBIDDEN:**\r
- Bullet points in body (except: data characteristics, criteria, conditions)\r
- Paragraphs <100 words\r
- \\\\subsubsection{} commands\r
- Numbered lists in narrative\r
\r
**REQUIRED:**\r
- Paragraphs 150-250 words minimum\r
- Flowing narrative with transitions\r
- Integrate ideas within paragraphs\r
- ONLY \\\\section{} and \\\\subsection{} headings\r
- 14-16 pages total\r
- **RESULTS SECTION MUST INCLUDE:**\r
  - At least 2-3 data analysis figures from STEP 6\r
  - Figures showing main findings (hypothesis tests, model results, comparisons)\r
  - Each figure must be referenced and discussed in the text\r
  - Tables summarizing key statistical results\r
\r
**Academic Style:** See Appendix D for detailed guidelines\r
\r
Write complete paper in LaTeX following ICISTemplate.txt\r
\r
**After writing, verify:**\r
□ 14-16 pages total\r
□ Bullet points ≤ 3 locations\r
□ Average paragraph ≥ 150 words\r
□ All sections included (Intro, Lit Review, Theory, Method, Results, Discussion, Conclusion)\r
□ No \\\\subsubsection{}\r
□ Smooth narrative flow\r
□ Results section includes at least 2-3 data analysis figures\r
□ Each figure is referenced in text (e.g., "As shown in Figure 1...")\r
□ Figures compile (see compilation check below)\r
\r
**FIGURE COMPILATION CHECK:**\r
After first pdflatex run, verify:\r
- Look for: [page <../Results/fig1.png>] in output\r
- If "File not found" appears: Use Glob to find correct paths, update LaTeX, recompile\r
- Check PDF size: Should be >450KB with images\r
\r
---\r
\r
## STEP 8.4: SECTION CONTENT VALIDATION (MANDATORY)\r
\r
⚠️ **CRITICAL:** Before proceeding to Step 8.5, validate that ALL sections exist and contain substantive content.\r
\r
**STEP 8.4-A: Verify All Required Sections Exist**\r
\r
Search the LaTeX file for each required section header:\r
\`\`\`\r
grep "\\\\section{" Paper/icis_paper_{participantId}_v1.tex\r
\`\`\`\r
\r
**Required sections (ALL must be present):**\r
1. Introduction (or \\section{Introduction})\r
2. Literature Review (or \\section{Literature Review} or \\section{Related Work})\r
3. Theoretical Framework (or \\section{Theoretical Framework} or \\section{Theory})\r
4. Methodology (or \\section{Method} or \\section{Methodology} or \\section{Research Design})\r
5. Results (or \\section{Results} or \\section{Findings})\r
6. Discussion (or \\section{Discussion})\r
7. Conclusion (or \\section{Conclusion})\r
\r
**If ANY section is missing:** STOP and add the missing section before proceeding.\r
\r
**STEP 8.4-B: Validate Section Content**\r
\r
For EACH section, verify it contains substantive content (not just a header):\r
\r
| Section | Min Words | Min Paragraphs | Required Elements |\r
|---------|-----------|----------------|-------------------|\r
| Introduction | 500 | 3 | Problem statement, research gap, contributions |\r
| Literature Review | 800 | 5 | 15+ citations, organized themes |\r
| Theoretical Framework | 600 | 4 | Theory basis, hypotheses (H1, H2, etc.) |\r
| Methodology | 600 | 4 | Design, data, measures, analysis plan |\r
| **Results** | **500** | **3** | **2+ figures, 1+ table, statistical findings** |\r
| Discussion | 400 | 3 | Implications, limitations |\r
| Conclusion | 200 | 2 | Summary, future research |\r
\r
**STEP 8.4-C: Results Section Special Validation**\r
\r
The Results section MUST contain:\r
1. ✅ At least 2 figures (\\includegraphics commands)\r
2. ✅ At least 1 table (\\begin{table} environment)\r
3. ✅ Statistical results (effect sizes, p-values, confidence intervals)\r
4. ✅ Explicit reference to each figure ("As shown in Figure 1...")\r
5. ✅ Interpretation of findings connected to hypotheses\r
\r
**Count figures in Results section:**\r
\`\`\`\r
# Find Results section and count figures within it\r
sed -n '/\\\\section{Results}/,/\\\\section{/p' Paper/icis_paper_{participantId}_v1.tex | grep -c "includegraphics"\r
\`\`\`\r
\r
**If Results section has <2 figures or <1 table:** STOP and add required visual elements.\r
\r
**STEP 8.4-D: Section Validation Checklist**\r
\r
Before proceeding to STEP 8.5, confirm ALL checks pass:\r
\r
□ Introduction section exists with ≥500 words\r
□ Literature Review section exists with ≥800 words and ≥15 citations\r
□ Theoretical Framework section exists with ≥600 words and explicit hypotheses\r
□ Methodology section exists with ≥600 words\r
□ **Results section exists with ≥500 words, ≥2 figures, ≥1 table**\r
□ Discussion section exists with ≥400 words\r
□ Conclusion section exists with ≥200 words\r
\r
**If ANY check fails:** Edit the paper to add missing content before proceeding.\r
\r
**DELIVERABLE:**\r
- Complete LaTeX paper with all sections containing substantive content\r
\r
---\r
\r
## STEP 8.5: REFERENCE VALIDATION AND GENERATION (MANDATORY)\r
\r
⚠️ CRITICAL: ALL references MUST be validated via Semantic Scholar API before inclusion.\r
\r
**REFERENCE RULES:**\r
1. **NO fabricated references** - Every reference must exist in Semantic Scholar\r
2. **APA 7th Edition format** - Consistent formatting throughout\r
3. **If not found, find alternative** - Never include a reference that cannot be verified\r
\r
**STEP 8.5-A: Extract All Citations**\r
\r
1. Extract all \\cite{} keys from the paper:\r
   \`\`\`\r
   grep -o '\\\\cite{[^}]*}' Paper/icis_paper_{participantId}_v1.tex\r
   \`\`\`\r
\r
2. Create list of citation keys to validate\r
\r
**STEP 8.5-B: Validate Each Reference via Semantic Scholar**\r
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
**STEP 8.5-C: Generate References Section**\r
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
| Results | 2-3 | 700-1000 | Tables, figures, statistical findings |\r
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
**Foundational vs. Recent Citations:**\r
- Include seminal/foundational papers (pre-2010)\r
- Emphasize recent work (last 5 years)\r
- Balance: ~30% foundational, ~70% recent\r
`,Av=`================================================================================\r
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
| Metric                | Threshold for "On Track" | Scale |\r
|-----------------------|--------------------------|-------|\r
| Review Scores (all 5) | >= 4                     | 1-5   |\r
| Trustworthiness (all 3)| >= 5                    | 1-7   |\r
| Major Errors          | = 0                      | count |\r
| Critical Alerts       | none                     | count |\r
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
`,wv=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
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
   □ **Results** (or Findings) - MUST have ≥2 figures, ≥1 table\r
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
| Section | Min Words | Min Figs | Min Tables | Required Elements |\r
|---------|-----------|----------|------------|-------------------|\r
| Introduction | 500 | - | - | Problem, gap, contributions |\r
| Literature Review | 800 | - | - | 15+ citations, themes |\r
| Theoretical Framework | 600 | - | - | Theory, hypotheses (H1, H2...) |\r
| Methodology | 600 | - | - | Design, data, measures |\r
| **Results** | **500** | **2** | **1** | **Statistical findings, figures** |\r
| Discussion | 400 | - | - | Implications, limitations |\r
| Conclusion | 200 | - | - | Summary, future research |\r
\r
**5c. Results Section Special Validation:**\r
The Results section MUST contain:\r
□ At least 2 figures (\\\\includegraphics commands)\r
□ At least 1 table (\\\\begin{table} environment)\r
□ Statistical results (effect sizes, p-values, confidence intervals)\r
□ Reference to each figure ("As shown in Figure 1...")\r
□ Interpretation connected to hypotheses\r
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
□ **Results ≥500 words with ≥2 figures and ≥1 table**\r
□ Discussion ≥400 words\r
□ Conclusion ≥200 words\r
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
`,_v=`================================================================================
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
`,Rv=`================================================================================
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
- REVIEW_SCORE_MIN: 4      (All 5 review scores must be >= 4)
- TRUSTWORTHINESS_MIN: 5   (All 3 trustworthiness scores must be >= 5)
- MAJOR_ERRORS_MAX: 0      (Must have 0 major errors)
- MAX_RECOMMENDED_CYCLES: 5 (Warn if approaching)
\`\`\`

**Check each threshold and collect reasons:**

1. **Review Scores Check:**
   For each of (novelty, significance, methodologicalRigor, clarity, relevance):
   - If score < 4: Add to reasons: "{criterion} score ({score}) below threshold (4)"

2. **Trustworthiness Check:**
   For each of (reliability, benevolence, goalAlignment):
   - If score < 5: Add to reasons: "{dimension} score ({score}) below threshold (5)"

3. **Major Errors Check:**
   - If majorErrors > 0: Add to reasons: "{majorErrors} major error(s) remaining"

4. **Critical Alerts Check:**
   - If criticalAlerts.length > 0: Add to reasons: "{count} critical alert(s) present"

**Determine Status:**
- If reasons.length === 0: STATUS = "ON TRACK"
- If reasons.length > 0: STATUS = "ATTENTION NEEDED"

**Generate Recommendation:**

If STATUS === "ON TRACK":
\`\`\`
RECOMMENDATION: FINALIZE PAPER
------------------------------------------------------------------------
All quality thresholds have been met:
- All review scores >= 4 (Average: {averageScore}/5)
- All trustworthiness scores >= 5
- No major errors remaining
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

Current revision cycle: {currentVersion}
{If currentVersion >= 4: "Warning: Approaching maximum recommended cycles (5)"}
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

------------------------------------------------------------------------
YOUR DIRECTIVES (for Option A - be specific):
------------------------------------------------------------------------
Examples:
- "Strengthen theoretical contribution by adding discussion of X theory"
- "Add 3 more recent citations from 2023-2024 to literature review"
- "Clarify methodology in Section 4.2 - explain sampling procedure"
- "Address reviewer concern about generalizability in Discussion"
- "Fix the 2 remaining major errors identified in Table 2"

[Enter your directives here or type NONE if finalizing]

------------------------------------------------------------------------
YOUR DECISION: Type "REVISE" or "FINALIZE"
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
   Report: "Next prompt to execute: {ICISreviser/ICISfinalize}"

================================================================================
QUICK REFERENCE: THRESHOLDS
================================================================================

| Metric                | Threshold | Scale | Constant                    |
|-----------------------|-----------|-------|-----------------------------|
| Review Scores (all 5) | >= 4      | 1-5   | REVIEW_SCORE_MIN: 4         |
| Trustworthiness (all 3)| >= 5     | 1-7   | TRUSTWORTHINESS_MIN: 5      |
| Major Errors          | = 0       | count | MAJOR_ERRORS_MAX: 0         |
| Critical Alerts       | none      | count | (empty array)               |
| Max Cycles            | 5         | count | MAX_RECOMMENDED_CYCLES: 5   |

**Status Logic:**
- ON TRACK: ALL thresholds met
- ATTENTION NEEDED: ANY threshold not met

================================================================================
DELIVERABLES
================================================================================

This prompt produces:

1. **Dashboard Display** - Shows version progression with all metrics
2. **Status Determination** - ON TRACK or ATTENTION NEEDED with reasons
3. **Recommendation** - FINALIZE or CONTINUE_REVISION
4. **Decision Recording**:
   - If REVISE: Appends directives to feedback_{participantId}_v{N}.txt
   - If FINALIZE: Creates supervisor_decision_{participantId}.txt
5. **Next Step Indication** - ICISreviser or ICISfinalize

================================================================================
`,Tv=`================================================================================
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
`,Nv=`ICIS Paper Title\r
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
`,Cv=`# MISQ IS Journal Review Criteria
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
`,Iv={SETUP:_v,BUILDER:Ev,REVIEWER:Av,SUPERVISOR:Rv,REVISER:wv,FINALIZE:Tv,TEMPLATE:Nv,MISQ_CRITERIA:Cv};function Dv(u){return u.replace(/\{ICIS_PATH\}/g,hp)}const Ov=Object.fromEntries(Object.entries(Iv).map(([u,o])=>[u,Dv(o)]));async function jc(u){const o=Ov[u];return o||(console.error(`Prompt not found: ${u}`),`[Prompt not found: ${u}]`)}const pi="https://icis-deploy-12-10-2025.vercel.app",mi="http://localhost:3001",jv=`OtjWTGJoUPpa+WdvSrFILls0jsgIHz/Bz/AtiUXZBgw=
`;function Xs(){const u={"Content-Type":"application/json"};return u["X-Internal-Secret"]=jv,u}const Xp="";let bi="research";const Qp={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function gi(){return Qp[bi].gemini}function kc(){return Qp[bi].openai}function kv(u){bi=u,console.log(`[GeminiService] Paper mode set to: ${u}`),console.log(`[GeminiService] Using Gemini model: ${gi()}`),console.log(`[GeminiService] Using OpenAI model: ${kc()}`)}function Lv(){return`https://generativelanguage.googleapis.com/v1beta/models/${gi()}:generateContent?key=${Xp}`}const zv=Xp;console.log("[API] Using Vercel proxy:",pi);let ui=null,di=null;async function Mv(u=10){return ui&&ui.length>=u?(console.log(`[ExamplePapers] Using cached papers (${ui.length} available)`),ui.slice(0,u)):di?(console.log("[ExamplePapers] Load already in progress, waiting..."),(await di).slice(0,u)):(console.log(`[ExamplePapers] Loading ${u} example papers...`),di=(async()=>{try{const o=pi?`${pi}/api/example-papers?count=${u}`:`${mi}/api/example-papers?count=${u}`;console.log(`[ExamplePapers] Fetching from: ${o}`);const l=await fetch(o,{method:"GET",headers:Xs()});if(!l.ok)throw new Error(`Failed to load example papers: ${l.status} ${l.statusText}`);const c=await l.json();if(!c.success||!c.papers)throw new Error(c.error||"Invalid response from example papers API");return ui=c.papers,console.log(`[ExamplePapers] Loaded ${c.papers.length} papers (${Math.round(c.totalSize/1024/1024)}MB total)`),c.papers}catch(o){throw console.error("[ExamplePapers] Failed to load:",o),di=null,o}})(),di)}async function Uv(u,o,l){var p,_,A,R,S,T,m;const c=[];for(const E of l)c.push({inlineData:{mimeType:E.mimeType,data:E.base64}});const d=`
You have been provided with ${l.length} exemplar ICIS (International Conference on Information Systems) papers as PDFs above.
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

`;c.push({text:d+u});const f={contents:[{parts:c}],systemInstruction:{parts:[{text:o}]},generationConfig:{maxOutputTokens:8192,temperature:.7}};console.log(`[Gemini] Calling with ${l.length} example papers...`),console.log(`[Gemini] Using model: ${gi()}`),console.log(`[Gemini] Total parts: ${c.length} (${l.length} PDFs + 1 text)`);const g=await Gc(),y=new AbortController,v=setTimeout(()=>{console.log("[Gemini] Request timeout - aborting after 5 minutes"),y.abort()},3e5);try{let E;if(g.type==="vercel"){const I=`${g.baseUrl}/api/gemini`;console.log(`[Gemini] Using Vercel proxy for multimodal request: ${I}`),E=await fetch(I,{method:"POST",headers:Xs(),body:JSON.stringify({...f,model:gi()}),signal:y.signal})}else{if(!zv)throw new Rt("API_KEY_INVALID","Gemini API key is not configured and no proxy available","Missing VITE_GEMINI_API_KEY",!1);console.log("[Gemini] Using direct API for multimodal request"),E=await fetch(Lv(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f),signal:y.signal})}if(clearTimeout(v),!E.ok){const I=await E.text();throw Fv(E.status,I)}const w=await E.json(),D=(S=(R=(A=(_=(p=w.candidates)==null?void 0:p[0])==null?void 0:_.content)==null?void 0:A.parts)==null?void 0:R[0])==null?void 0:S.text;if(!D){const I=(m=(T=w.candidates)==null?void 0:T[0])==null?void 0:m.finishReason;throw I==="SAFETY"?new Rt("CONTENT_FILTERED","Response was filtered due to safety settings.",`Finish reason: ${I}`,!1):new Rt("INVALID_RESPONSE","Empty response from AI with examples.",JSON.stringify(w).substring(0,200),!0)}return console.log(`[Gemini] Response received with examples (${D.length} chars)`),D}catch(E){if(clearTimeout(v),E instanceof Rt)throw E;const w=E;throw w.name==="AbortError"?new Rt("NETWORK_ERROR","Request timed out (5 min). The request with example papers may be too large.","AbortError: Request timeout",!1):new Rt("UNKNOWN",`Error with example papers: ${w.message}`,w.stack||w.message,!1)}}class Rt extends Error{constructor(o,l,c,d=!1,f){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.retryable=d,this.statusCode=f,this.name="GeminiError"}}function Fv(u,o){var f,g;let l={};try{l=JSON.parse(o)}catch{}const c=((f=l.error)==null?void 0:f.message)||o,d=((g=l.error)==null?void 0:g.status)||"";switch(u){case 401:case 403:return new Rt("API_KEY_INVALID","API key is invalid or missing. Please check your configuration.",c,!1,u);case 429:return new Rt("RATE_LIMITED","Rate limit exceeded. Please wait a moment before trying again.",c,!0,u);case 503:return d==="UNAVAILABLE"||c.includes("overloaded")?new Rt("MODEL_OVERLOADED","The AI model is temporarily overloaded. Retrying automatically...",c,!0,u):new Rt("UNKNOWN","Service temporarily unavailable. Retrying...",c,!0,u);case 500:case 502:case 504:return new Rt("UNKNOWN","Server error. Retrying automatically...",c,!0,u);default:return new Rt("UNKNOWN",`API error (${u}): ${c.substring(0,100)}`,c,!1,u)}}const Zp=u=>new Promise(o=>setTimeout(o,u));async function Bv(u,o){var p,_,A,R,S;const l=o===mi?`${o}/api/gemini/chat`:`${o}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${l}`);const c={...u,model:gi()},d=new AbortController,f=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),d.abort()},18e4),g=await fetch(l,{method:"POST",headers:Xs(),body:JSON.stringify(c),signal:d.signal});if(clearTimeout(f),!g.ok){const T=await g.json().catch(()=>({error:"Unknown error"}));throw new Rt("UNKNOWN",`Gemini proxy error: ${T.error||T.details||"Unknown error"}`,JSON.stringify(T),g.status>=500)}const y=await g.json(),v=(S=(R=(A=(_=(p=y.candidates)==null?void 0:p[0])==null?void 0:_.content)==null?void 0:A.parts)==null?void 0:R[0])==null?void 0:S.text;if(!v)throw new Rt("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(y).substring(0,200),!0);return v}async function pr(u,o){const l={contents:[{parts:[{text:u}]}],generationConfig:{maxOutputTokens:8192,temperature:.7}};o&&(l.systemInstruction={parts:[{text:o}]});const c=await Gc();if(c.type==="vercel")return console.log("[Gemini] Using Vercel proxy..."),Bv(l,c.baseUrl);throw new Rt("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function Sc(u){let o=u;const l=o.match(/```latex\s*([\s\S]*?)\s*```/);l&&(o=l[1]);const c=o.indexOf("\\end{document}");return c!==-1&&(o=o.substring(0,c+14)),o=o.replace(/```javascript[\s\S]*?```/g,""),o=o.replace(/```js[\s\S]*?```/g,""),o=o.replace(/```python[\s\S]*?```/g,""),o=o.replace(/```[\s\S]*?```/g,""),o=o.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/Verification Report:[\s\S]*$/gi,""),o=o.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/console\.log\([\s\S]*?\);/g,""),o=o.replace(/const \w+ = \{[\s\S]*?\};/g,""),o=o.trim(),console.log(`[cleanLatexOutput] Cleaned content from ${u.length} to ${o.length} characters`),o}function Pv(u){const o=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
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
Include at least 15-20 citations. Use flowing paragraphs.`,minWords:1200},{name:"Theoretical Framework",key:"theory",prompt:`Write a Theory/Theoretical Framework section (1000-1200 words) that:
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
Be specific and detailed enough for replication.`,minWords:1e3}];return u?o.push({name:"Conclusion",key:"conclusion",prompt:`Write a brief Conclusion section (400-500 words) for a research-in-progress paper that:
1. Summarizes the theoretical contribution
2. Notes that data collection is pending
3. Discusses expected contributions once complete
4. Outlines next steps`,minWords:400},{name:"References",key:"references",prompt:`Generate a BibTeX bibliography with 15-20 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

FORMAT: BibTeX entries. Output ONLY valid BibTeX, no explanatory text.

@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  volume = {13},
  number = {3},
  pages = {319--340},
  year = {1989}
}

@article{delone2003delone,
  author = {DeLone, William H. and McLean, Ephraim R.},
  title = {The {DeLone} and {McLean} model of information systems success: A ten-year update},
  journal = {Journal of Management Information Systems},
  volume = {19},
  number = {4},
  pages = {9--30},
  year = {2003}
}

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

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods, Academy of Management Review
- Yin (2018) - Case study research design (book)

Requirements:
1. Output ONLY BibTeX entries, no other text
2. ONLY include papers you are confident exist
3. Citation keys must match the \\cite{} commands used in the paper
4. Sort entries alphabetically by citation key`,minWords:300}):o.push({name:"Results",key:"results",prompt:`Write a COMPLETE Results section (1200-1500 words) that:
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

FORMAT: BibTeX entries. Output ONLY valid BibTeX, no explanatory text.

@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  volume = {13},
  number = {3},
  pages = {319--340},
  year = {1989}
}

@article{delone2003delone,
  author = {DeLone, William H. and McLean, Ephraim R.},
  title = {The {DeLone} and {McLean} model of information systems success: A ten-year update},
  journal = {Journal of Management Information Systems},
  volume = {19},
  number = {4},
  pages = {9--30},
  year = {2003}
}

@inproceedings{smith2020icis,
  author = {Smith, John and Jones, Mary},
  title = {Example conference paper title},
  booktitle = {Proceedings of the International Conference on Information Systems (ICIS)},
  year = {2020},
  pages = {1--15}
}

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
1. Output ONLY BibTeX entries, no other text
2. ONLY include papers you are confident exist
3. Include mix of: @article, @inproceedings (ICIS, ECIS, AMCIS), @book
4. Citation keys must match the \\cite{} commands used in the paper
5. Sort entries alphabetically by citation key`,minWords:500}),o}async function Vv(u,o){const l=Object.entries(o.previousSections).map(([p,_])=>`[${p}]
${_.substring(0,500)}...`).join(`

`);let c="";if(u.key==="references"){const p=Object.values(o.previousSections).join(`
`),_=/\(([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?),?\s*(\d{4})\)/g,A=new Set;let R;for(;(R=_.exec(p))!==null;){const S=R[1].replace(/\s+&\s+/g," & ").replace(/\s+and\s+/g," & "),T=R[2];A.add(`${S} (${T})`)}if(A.size>0){const S=[...A].sort().join(`
- `);console.log(`[generateSection] Found ${A.size} inline citations in paper`),c=`
CITATIONS USED IN PAPER:
The following citations were used in the paper body. Ensure you include matching references:
- ${S}

Generate complete APA references for each of these citations.
`}}let d="";const f=["abstract","introduction","methodology","results","discussion","conclusion"];o.dataSummary&&f.includes(u.key)?(console.log(`[generateSection] Adding data summary to ${u.key} section (${o.dataSummary.length} chars)`),u.key==="methodology"||u.key==="results"?d=`
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

IMPORTANT FOR ${u.key.toUpperCase()}:
- This is an EMPIRICAL study with real data, NOT a purely theoretical paper
- Mention the empirical nature of the research appropriately for this section
- Reference the data-driven approach where relevant
`):o.dataSummary&&console.log(`[generateSection] Data summary available but not used for ${u.key} section`);const g=`You are writing an academic research paper for ICIS (International Conference on Information Systems).

RESEARCH CONTEXT (from interview):
${o.interviewTranscript.substring(0,3e3)}
${d}
${c}
${l?`PREVIOUSLY WRITTEN SECTIONS (for continuity and alignment):
${l}

IMPORTANT: If a TITLE has been generated above, ensure your content aligns with and supports that title.

`:""}

NOW WRITE THE ${u.name.toUpperCase()} SECTION:

${u.prompt}

IMPORTANT:
- Write in formal academic style
- Use flowing paragraphs (150-250 words each)
- Minimum ${u.minWords} words
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

CITATION FORMAT (CRITICAL - Inline APA 7th Edition Style):
- Write citations INLINE using plain text author-year format, NOT LaTeX \\cite{} commands
- Parenthetical citation: "prior research has shown this effect (Jensen \\& Meckling, 1976)"
- Narrative citation: "Jensen and Meckling (1976) demonstrated that..."
- Two authors: Always include both names: "(Davis \\& Bagozzi, 1989)"
- Three or more authors: Use "et al." after first author: "(Venkatesh et al., 2003)"
- Multiple citations: Separate with semicolons, alphabetical order: "(Davis, 1989; Venkatesh et al., 2003)"
- Use \\& for ampersand in parenthetical citations, "and" in narrative citations
- Do NOT use \\cite{} or \\citep{} commands - write the author names and year directly
- NEVER include a "References:" section, bibliography, or reference list at the end of your content
- NEVER list out the references you cited - just use inline citations
- Your output should contain ONLY the section content, ending with the last paragraph of prose
- References are generated separately and will appear at the end of the full paper`,y="You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.";let v;return o.examplePapers&&o.examplePapers.length>0&&bi==="research"?(console.log(`[generateSection] Using ${o.examplePapers.length} example papers for ${u.name} (research mode)`),v=await Uv(g,y,o.examplePapers)):v=await pr(g,y),v=v.replace(/^\s*\*\*([^*\n]+)\*\*\s*$/gm,"\\subsection{$1}").replace(/^\s*#{1,3}\s+.+\n/gm,"").trim(),v}const Hv=async(u="Mock transcript content...",o=!1,l,c,d)=>{var m,E,w,D;console.log(`[runBuilder] ENTRY - dataFileName="${c}" (type: ${typeof c})`);const f=Pv(o),g={};console.log(`[Builder] Starting section-by-section generation (${f.length} sections, ${o?"partial":"full"} paper)`);let y,v;if(c){console.log(`[Builder] Data file provided: ${c} - analyzing for ALL research types`),l==null||l("Data Analysis","starting");try{const I=await Wp(c,U=>console.log(`[Builder] ${U}`),d);console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((m=I.dataSummary)==null?void 0:m.length)||0,error:I.error}),I.success&&I.dataSummary?(y=I.dataSummary,console.log("[Builder] Data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",y.substring(0,500)),l==null||l("Data Analysis","completed")):(v=`*** DATA ALERT: Could not analyze data file "${c}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${v}`),l==null||l("Data Analysis","error"))}catch(I){v=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${v}`),l==null||l("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data analysis");let p=[];if(bi==="research")try{l==null||l("Loading Examples","starting"),console.log("[Builder] Research mode - loading ICIS 2024 example papers..."),p=await Mv(5),console.log(`[Builder] Loaded ${p.length} example papers for quality calibration`),l==null||l("Loading Examples","completed")}catch(I){console.warn("[Builder] Could not load example papers:",I.message),console.warn("[Builder] Proceeding without example papers - quality may be lower"),l==null||l("Loading Examples","error")}else console.log("[Builder] Draft mode - skipping example papers for faster generation");let _=[],A=!1,R="";if(!o)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations BEFORE Results section..."),console.log(`[Builder] Data summary available: ${!!y}, Data file: ${c||"none"}`);const I=`Research Interview: ${u.substring(0,2e3)}`,U=await Lc(u,I,c,O=>console.log(`[Builder] ${O}`),y);_=U.figures,A=U.usedSyntheticData,_.length>0&&(R=`

GENERATED FIGURES (reference these in your Results section):
`,_.forEach((O,X)=>{R+=`- Figure ${X+1} (\\ref{fig:fig${X+1}}): ${O.description}
`}),R+=`
IMPORTANT: Reference each figure in the text using Figure~\\ref{fig:fig1}, Figure~\\ref{fig:fig2}, etc.
`,R+=`Example: "As shown in Figure~\\ref{fig:fig1}, the distribution of..."
`),U.dataAlert&&(v=v?`${v}
${U.dataAlert}`:U.dataAlert),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${_.length} figures before Results section`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error");const U=`*** VISUALIZATION ERROR: ${I.message}`;v=v?`${v}
${U}`:U,A=!0}for(const I of f)try{l==null||l(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const U=I.key==="results"&&R?(y||"")+R:y,O=await Vv(I,{interviewTranscript:u,previousSections:g,dataSummary:U,examplePapers:p});g[I.key]=O,l==null||l(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${O.split(/\s+/).length} words)`),await Zp(500)}catch(U){throw l==null||l(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,U),new Error(`Failed to generate ${I.name}: ${U.message}`)}if(!o&&_.length===0)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations (post-sections fallback)...");const I=`
Abstract: ${((E=g.abstract)==null?void 0:E.substring(0,500))||""}
Research Focus: ${((w=g.introduction)==null?void 0:w.substring(0,500))||""}
Methodology: ${((D=g.methodology)==null?void 0:D.substring(0,500))||""}
`,U=await Lc(u,I,c,O=>console.log(`[Builder] ${O}`),y);_=U.figures,A=U.usedSyntheticData,U.dataAlert&&(v=v?`${v}
${U.dataAlert}`:U.dataAlert),!y&&U.dataSummary&&(y=U.dataSummary),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${_.length} figures (fallback)`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error"),A=!0}const S=Qv(g,o,_,A),T=S.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${T} words, ${_.length} figures`),{paperContent:S,dataAlert:v,usedSyntheticData:A,dataSummary:y}};function $v(u){let o=u;o=o.replace(/^```(?:bibtex|bib|latex|tex)?\s*\n?/i,""),o=o.replace(/\n?```\s*$/i,"");const l=o.search(/@\w+\s*\{/);l>0&&(o=o.substring(l));let c=0,d=o.length;for(let g=0;g<o.length;g++)o[g]==="{"&&c++,o[g]==="}"&&(c--,c===0&&(d=g+1));d<o.length&&(o=o.substring(0,d)),o=o.trim();const f=`% Bibliography generated by ICIScopilot
% ${new Date().toISOString()}

`;return console.log(`[BibTeX] Cleaned content: ${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries`),f+o}function Gv(u){let o=u;return o=o.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),o=o.replace(/([^\\])%/g,"$1\\%"),o=o.replace(/([^\\])& /g,"$1\\& "),o=o.replace(/([^\\])#/g,"$1\\#"),o=o.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),o=o.replace(/ \*([^*\s])/g," $\\ast$$1"),o=o.replace(/([^*\s])\* /g,"$1$\\ast$ "),o=o.replace(/__/g,"\\_\\_"),o=o.replace(/"/g,"''"),o=o.replace(/"/g,"``"),o=o.replace(/'/g,"'"),o=o.replace(/'/g,"`"),o}function qv(u){let o=u.replace(/\n*References:\s*\n([\s\S]*?)(?=\\section|$)/gi,"");return o=o.replace(/\\section\*?\{References\}[\s\S]*?(?=\\section|$)/gi,""),o=o.replace(/\n\nReferences\n\n((?:[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+)/gi,""),o=o.trim(),o}const Yv=`\\documentclass[12pt]{article}
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

`,Xv=`
\\end{document}
`;function Qv(u,o,l=[],c=!1){const d=o?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],f={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let g=Yv;c&&!o&&(g+=`% ============================================================================
% IMPORTANT NOTICE
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Data}\\\\[0.5em]
The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings. This paper is a draft produced by ICIScopilot and requires verification of all data before submission.
}}
\\end{center}
\\vspace{1em}

`);for(const y of d)if(u[y]){let v=Gv(u[y]);if(y!=="references"&&(v=qv(v)),y==="title")g+=`\\title{${v}}
\\maketitle

`;else if(y==="abstract")g+=`\\begin{abstract}
${v}
\\end{abstract}

`;else if(y==="references"){const p=$v(u[y]);Vp("references.bib",p),g+=`\\nocite{*}
\\bibliographystyle{apalike}
\\bibliography{references}
`}else y==="results"&&l.length>0?(g+=`\\section{${f[y]}}

`,c&&(g+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),g+=Kp(l),g+=`
${v}

`):g+=`\\section{${f[y]}}

${v}

`}return g+=Xv,g}async function Zv(u,o,l){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),l==null||l("Analyzing data with AI...");const c=u.split(`
`),d=c.slice(0,101).join(`
`),f=`You are a data analyst. Analyze this CSV data and provide a structured summary.

CSV FILE: ${o}
TOTAL ROWS (estimate): ${c.length-1}

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
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const g=await pr(f,"Analyze CSV data");if(g)return console.log("[DataAnalysis] Gemini analysis complete"),l==null||l("AI data analysis complete"),{success:!0,dataSummary:g,dataFileFound:!0}}catch(g){console.error("[DataAnalysis] Gemini analysis failed:",g)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function Wp(u,o,l){var f,g,y,v,p,_,A,R,S,T;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${u}" (type: ${typeof u})`),l){o==null||o("Loading data file preview for verification...");const m=await Up(u);if(!m.success)return console.error(`[DataAnalysis] Failed to get file preview: ${m.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${m.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${m.filename}, First line: ${(f=m.firstLine)==null?void 0:f.substring(0,100)}...`),o==null||o(`Data file found: ${u} (${m.totalLines} lines). Awaiting confirmation...`),!await l({filename:m.filename,firstLine:m.firstLine,totalLines:m.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),o==null||o("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),o==null||o("Data file confirmed. Starting analysis...")}o==null||o("Analyzing data file...");const c=vi();if(c!=null&&c.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const m=await Zv(c.content,u,o);if(m.success)return m}if(c!=null&&c.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),o==null||o("Using cloud data analysis...");try{const m=await Gs(c.content,"full");if(m.success&&m.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let E=`File: ${u}
`;if(E+=`Dataset shape: ${(g=m.summary)==null?void 0:g.shape.rows} rows x ${(y=m.summary)==null?void 0:y.shape.columns} columns

`,E+=`COLUMN NAMES AND TYPES:
`,(v=m.summary)==null||v.columns.forEach(w=>{var I;const D=(I=m.summary)==null?void 0:I.numeric_columns.includes(w);E+=`  - ${w}: ${D?"numeric":"categorical"}
`}),E+=`
`,(p=m.summary)!=null&&p.numeric_columns.length){E+=`NUMERIC COLUMNS STATISTICS:
`;for(const w of m.summary.numeric_columns.slice(0,10)){const D=(_=m.summary.descriptive_stats)==null?void 0:_[w];D&&(E+=`  ${w}:
`,E+=`    min=${D.min}, max=${D.max}, mean=${D.mean}, std=${D.std}
`)}E+=`
`}if((A=m.summary)!=null&&A.categorical_columns.length){E+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const w of m.summary.categorical_columns.slice(0,5)){const D=(R=m.summary.categorical_summary)==null?void 0:R[w];if(D){const I=Object.keys(D).length;E+=`  ${w}: ${I} unique values
`,I<=10&&(E+=`    Values: ${JSON.stringify(D)}
`)}}}return o==null||o("Cloud data analysis complete"),{success:!0,dataSummary:E,dataFileFound:!0}}}catch(m){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",m)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),o==null||o("Using local Python for analysis...");const d=`import os
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
`;try{const m=await jp("analyze_data.py",d,u);if(console.log("[DataAnalysis] Python execution result:",{success:m.success,dataFileFound:m.dataFileFound,stdoutLength:((S=m.stdout)==null?void 0:S.length)||0,stderrLength:((T=m.stderr)==null?void 0:T.length)||0}),m.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",m.stdout.substring(0,1e3)),m.stderr&&console.log("[DataAnalysis] Python stderr:",m.stderr),!m.success)return console.error("[DataAnalysis] Python execution failed:",m.error),{success:!1,dataFileFound:!1,error:m.error};let E;const w=m.dataFileFound??!1;if(m.stdout){const D=m.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(D)E=D[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",E.substring(0,500));else{if(m.stdout.includes("DATA FILE NOT FOUND")||m.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',m.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',m.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return o==null||o("Data analysis complete"),{success:!0,dataSummary:E,dataFileFound:w}}catch(m){return console.error("[DataAnalysis] Error:",m),{success:!1,dataFileFound:!1,error:m.message}}}async function Lc(u,o,l,c,d){const f=vi();if(f!=null&&f.content){console.log("[Visualizations] Using QuickChart.io for figure generation..."),c==null||c("Analyzing data for visualization...");try{const g=await Gs(f.content,"full");if(g.success&&g.chart_data&&g.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${g.chart_data.length} chart configs`),c==null||c(`Generating ${g.chart_data.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:y}=await xc(async()=>{const{generateQuickChartFigures:p}=await Promise.resolve().then(()=>vc);return{generateQuickChartFigures:p}},void 0),v=await y(g.chart_data);if(v.success&&v.figures&&v.figures.length>0){const p=v.figures.map(R=>({filename:R.filename,description:R.description,latexRef:R.filename,base64:R.base64})),{storePngFiguresForCompilation:_,storeChartData:A}=await xc(async()=>{const{storePngFiguresForCompilation:R,storeChartData:S}=await Promise.resolve().then(()=>vc);return{storePngFiguresForCompilation:R,storeChartData:S}},void 0);return _(v.figures.map(R=>({filename:R.filename,base64:R.base64}))),A(g.chart_data,!1),c==null||c(`Generated ${p.length} publication-quality figures`),console.log(`[Visualizations] QuickChart.io generated ${p.length} PNG figures`),{figures:p,usedSyntheticData:!1,dataFileFound:!0,dataSummary:g.text_summary||d}}else console.warn("[Visualizations] QuickChart.io generation failed:",v.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(g){console.warn("[Visualizations] QuickChart.io failed:",g)}}console.log("[Visualizations] No data available, generating AI-based PNG figures via QuickChart.io..."),c==null||c("Generating AI-based visualizations...");try{const g=await Wv(u,o,d);if(g&&g.length>0){console.log(`[Visualizations] AI generated ${g.length} chart configurations`),c==null||c(`Rendering ${g.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:y,storePngFiguresForCompilation:v,storeChartData:p}=await xc(async()=>{const{generateQuickChartFigures:A,storePngFiguresForCompilation:R,storeChartData:S}=await Promise.resolve().then(()=>vc);return{generateQuickChartFigures:A,storePngFiguresForCompilation:R,storeChartData:S}},void 0),_=await y(g);if(_.success&&_.figures&&_.figures.length>0){const A=_.figures.map(R=>({filename:R.filename,description:R.description,latexRef:R.filename,base64:R.base64}));return v(_.figures.map(R=>({filename:R.filename,base64:R.base64}))),p(g,!0),c==null||c(`Generated ${A.length} AI-based PNG figures`),console.log(`[Visualizations] QuickChart.io rendered ${A.length} AI-generated PNG figures`),{figures:A,usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** NOTE: Visualizations generated using AI-synthesized illustrative data. No data file was provided."}}}}catch(g){console.warn("[Visualizations] AI QuickChart generation failed:",g)}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function Wv(u,o,l){const c=`You are generating CONCEPTUAL chart data for a research paper visualization.

CRITICAL RULES - DO NOT VIOLATE:
1. DO NOT fabricate or hallucinate specific numbers, percentages, or statistics
2. DO NOT make up sample sizes, means, standard deviations, or correlations
3. ONLY use numbers/statistics that are EXPLICITLY stated in the research context below
4. If no specific data is mentioned, create CONCEPTUAL/QUALITATIVE visualizations:
   - Use relative comparisons (High/Medium/Low) instead of fake percentages
   - Use category labels without fabricated numeric values
   - Create framework/model diagrams conceptually represented as bar charts
5. All figure titles MUST include "(Conceptual)" or "(Based on Paper)" to indicate these are illustrative

RESEARCH CONTEXT:
${o.substring(0,2e3)}

INTERVIEW EXCERPT:
${u.substring(0,1500)}

Generate 1-2 CONCEPTUAL charts. Return ONLY a valid JSON array, no other text.

For CONCEPTUAL figures without specific data, use these patterns:

1. Relative comparison bar chart (NO fake numbers):
{
  "type": "bar",
  "column": "Key Factors (Conceptual)",
  "data": {"Factor A": 3, "Factor B": 2, "Factor C": 1}
}
(Use 1/2/3 to show relative importance, NOT fabricated percentages)

2. Framework visualization:
{
  "type": "bar",
  "column": "Research Model Components (Conceptual)",
  "data": {"Construct 1": 1, "Construct 2": 1, "Construct 3": 1, "Construct 4": 1}
}
(Equal values to show model components without implying measured data)

ONLY if the paper EXPLICITLY mentions specific numbers, you may use them:
- If paper says "72% of respondents...", you can use 72
- If paper says "mean score of 4.2", you can use 4.2
- Otherwise, use relative values (1, 2, 3) or equal values (1, 1, 1)

Return ONLY the JSON array with 1-2 conceptual figures.`;try{let f=(await pr(c,"Generate chart data")).trim();f.startsWith("```json")?f=f.slice(7):f.startsWith("```")&&(f=f.slice(3)),f.endsWith("```")&&(f=f.slice(0,-3)),f=f.trim();const g=JSON.parse(f);if(Array.isArray(g)&&g.length>0)return console.log(`[AI ChartData] Generated ${g.length} chart configurations`),g}catch(d){console.error("[AI ChartData] Failed to generate chart data:",d)}return[]}function Kp(u){if(u.length===0)return"";let o=`
% Generated Figures (PNG via QuickChart.io)
`;return u.forEach((l,c)=>{const d=l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),f=l.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");o+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{${d}}
\\caption{${f}}
\\label{fig:fig${c+1}}
\\end{figure}
`}),o}async function dp(u){try{return(await fetch(`${u}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function Gc(){return await dp(pi)?{type:"vercel",baseUrl:pi}:await dp(mi)?{type:"local",baseUrl:mi}:{type:"direct",baseUrl:""}}async function Kv(u,o){var g,y,v;const l=o===mi?`${o}/api/openai/chat`:`${o}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${l}`),console.log(`[OpenAI] Using model: ${kc()}`);const c=await fetch(l,{method:"POST",headers:Xs(),body:JSON.stringify({model:kc(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:u}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!c.ok){const p=await c.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",c.status,p),new Error(`OpenAI API error: ${c.status} - ${p.error||p.details||"Unknown error"}`)}const f=(v=(y=(g=(await c.json()).choices)==null?void 0:g[0])==null?void 0:y.message)==null?void 0:v.content;if(!f)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let p=f.trim();return p.startsWith("```")&&(p=p.replace(/^```(?:json)?\s*\n?/,""),p=p.replace(/\n?```\s*$/,"")),p=p.trim(),JSON.parse(p)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",f.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function Qs(u){const o=await Gc();if(o.type==="vercel"||o.type==="local")return console.log(`[OpenAI] Using ${o.type} proxy...`),Kv(u,o.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const Jv=async(u,o=1,l="icis_paper",c)=>{var S,T,m,E,w,D,I,U;const d=await jc("REVIEWER");let f="";try{console.log("[Reviewer] Loading MISQ review criteria..."),f=await jc("MISQ_CRITERIA"),console.log("[Reviewer] MISQ criteria loaded successfully")}catch(O){console.warn("[Reviewer] Could not load MISQ review criteria:",O)}const g=u.match(/\\title\{([^}]+)\}/),y=g?g[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const v=eb(u);console.log(`[Reviewer] Found ${v.length} sections: ${v.map(O=>O.name).join(", ")}`);let p;if(v.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const O=`${d}

${f?`IS JOURNAL REVIEW CRITERIA (from MISQ guidelines):
${f}
`:""}

Paper Content:
${u.substring(0,5e4)}

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
- Honest acknowledgment of limits is valued over forcing unnecessary changes`;p=await Qs(O)}else{console.log("[Reviewer] Starting section-by-section review...");const O=[];for(const X of v){console.log(`[Reviewer] Reviewing section: ${X.name}...`);const H=await tb(X,y);O.push(H),console.log(`[Reviewer] ${X.name} score: ${H.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),p=await nb(O,u,f),console.log("[Reviewer] Section-by-section review complete")}if(p.novelty===void 0||p.significance===void 0||p.methodologicalRigor===void 0||p.clarity===void 0||p.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const _={novelty:p.novelty,significance:p.significance,methodologicalRigor:p.methodologicalRigor,clarity:p.clarity,relevance:p.relevance,reviewScore:p.novelty,reliabilityScore:p.significance,alignmentScore:p.methodologicalRigor,errorsDetected:(((S=p.majorConcerns)==null?void 0:S.length)||0)+(((T=p.minorCorrections)==null?void 0:T.length)||0),feedback:p.overallAssessment,majorConcerns:p.majorConcerns||[],minorCorrections:p.minorCorrections||[],researchQuestionFeedback:p.researchQuestionFeedback,methodFeedback:p.methodFeedback,impactFeedback:p.impactFeedback,writingFeedback:p.writingFeedback,overallAssessment:p.overallAssessment,noveltyComment:p.noveltyComment,significanceComment:p.significanceComment,methodologicalRigorComment:p.methodologicalRigorComment,clarityComment:p.clarityComment,relevanceComment:p.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:p.criticalAlerts??[],canImprove:p.canImprove??!0,improvementPotential:p.improvementPotential??"medium",convergenceReason:p.convergenceReason};if(console.log(`[Reviewer] Convergence assessment: canImprove=${_.canImprove}, potential=${_.improvementPotential}`),_.convergenceReason&&console.log(`[Reviewer] Convergence reason: ${_.convergenceReason}`),c&&c.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const O=await ab(u,c);_.trustworthiness={reliability:O.reliability,reliabilityRationale:O.rationales.reliability,benevolence:O.benevolence,benevolenceRationale:O.rationales.benevolence,goalAlignment:O.goalAlignment,goalAlignmentRationale:O.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(O){console.warn("[Reviewer] Trustworthiness assessment failed:",O.message),_.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${O.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${O.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${O.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),_.trustworthiness={reliability:((m=p.trustworthiness)==null?void 0:m.reliability)??5,reliabilityRationale:((E=p.trustworthiness)==null?void 0:E.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((w=p.trustworthiness)==null?void 0:w.benevolence)??5,benevolenceRationale:((D=p.trustworthiness)==null?void 0:D.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((I=p.trustworthiness)==null?void 0:I.goalAlignment)??5,goalAlignmentRationale:((U=p.trustworthiness)==null?void 0:U.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const A={version:o,paperId:l,timestamp:new Date().toISOString(),reviewScores:{novelty:_.novelty,significance:_.significance,methodologicalRigor:_.methodologicalRigor,clarity:_.clarity,relevance:_.relevance},reviewComments:{novelty:_.noveltyComment,significance:_.significanceComment,methodologicalRigor:_.methodologicalRigorComment,clarity:_.clarityComment,relevance:_.relevanceComment},averageScore:(_.novelty+_.significance+_.methodologicalRigor+_.clarity+_.relevance)/5,errorCounts:{majorErrors:_.majorConcerns.length,minorErrors:_.minorCorrections.length},errorDetails:{majorErrors:_.majorConcerns,minorErrors:_.minorCorrections},trustworthiness:_.trustworthiness,criticalAlerts:_.criticalAlerts.map((O,X)=>({number:X+1,title:O.title,status:"Open",impact:O.impact,details:O.details,actionRequired:O.actionRequired,consequence:O.consequence})),canImprove:_.canImprove,improvementPotential:_.improvementPotential,convergenceReason:_.convergenceReason},R={version:o,paperId:l,timestamp:new Date().toISOString(),researchQuestion:_.researchQuestionFeedback,method:_.methodFeedback,potentialImpact:_.impactFeedback,writing:_.writingFeedback,majorConcerns:_.majorConcerns,minorCorrections:_.minorCorrections,overallAssessment:_.overallAssessment};_.oversightFilePath=wp(A),_.feedbackFilePath=Fc(R);try{await Cc(`oversight_v${o}.json`,A),await Cc(`feedback_v${o}.json`,R),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(O){console.warn("[Reviewer] Could not save files to disk:",O)}return _};function eb(u){const o=[],l=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],c=u.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let d="";c&&(d=c[1].trim());for(const{pattern:f,name:g,focus:y}of l){const v=new RegExp(f.source,f.flags);let p,_="";for(;(p=v.exec(u))!==null;)_+=p[2]||p[0];_.trim()&&(g==="Introduction"&&d&&(_=`ABSTRACT:
${d}

INTRODUCTION:
${_}`),o.push({name:g,content:_.trim(),reviewFocus:y}))}if(o.length===0){const f=u.split(/\\section\*?\{/);for(let g=1;g<f.length;g++){const y=f[g].indexOf("}");if(y>0){const v=f[g].substring(0,y),p=f[g].substring(y+1);o.push({name:v,content:p.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return o.map(f=>({...f,content:f.content.substring(0,15e3)}))}async function tb(u,o){const l=`You are reviewing the "${u.name}" section of an academic IS (Information Systems) paper titled: "${o}"

REVIEW FOCUS for this section: ${u.reviewFocus}

SECTION CONTENT:
${u.content}

Provide a detailed review of THIS SECTION ONLY. Return JSON:

{
  "sectionName": "${u.name}",
  "score": <1-5, where 1=poor, 3=acceptable, 5=excellent>,
  "strengths": ["strength 1", "strength 2"],
  "weaknesses": ["weakness 1", "weakness 2"],
  "suggestions": ["actionable suggestion 1", "actionable suggestion 2"],
  "majorConcerns": ["critical issue that must be addressed"],
  "minorCorrections": ["typo or minor fix"]
}`,c=await Qs(l);if(c.score===void 0)throw new Error(`[Reviewer] Section "${u.name}" response missing required score field`);return{sectionName:u.name,score:c.score,strengths:c.strengths||[],weaknesses:c.weaknesses||[],suggestions:c.suggestions||[],majorConcerns:c.majorConcerns||[],minorCorrections:c.minorCorrections||[]}}async function nb(u,o,l){const c=u.map(p=>`## ${p.sectionName} (Score: ${p.score}/5)
Strengths: ${p.strengths.join("; ")||"None identified"}
Weaknesses: ${p.weaknesses.join("; ")||"None identified"}
Major Concerns: ${p.majorConcerns.join("; ")||"None"}
Minor Corrections: ${p.minorCorrections.join("; ")||"None"}`).join(`

`),d=u.filter(p=>p.score>0).map(p=>p.score),f=d.length>0?d.reduce((p,_)=>p+_,0)/d.length:3,g=u.flatMap(p=>p.majorConcerns),y=u.flatMap(p=>p.minorCorrections);u.flatMap(p=>p.suggestions);const v=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${c}

AVERAGE SECTION SCORE: ${f.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${g.map((p,_)=>`${_+1}. ${p}`).join(`
`)||"None"}

ALL MINOR CORRECTIONS:
${y.map((p,_)=>`${_+1}. ${p}`).join(`
`)||"None"}

${l?`
IS JOURNAL REVIEW CRITERIA:
${l}`:""}

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

HONEST ASSESSMENT IS VALUED: It is better to acknowledge limits than to force unnecessary changes.`;return await Qs(v)}const ab=async(u,o)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const l=o.substring(0,15e3),c=u.substring(0,15e3),d=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

Your task: Evaluate how well the ASD system served you as the author.

=== YOUR ORIGINAL INTERVIEW ===
${l}

=== GENERATED PAPER ===
${c}

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
}`,f=await Qs(d);if(f.reliability===void 0||f.benevolence===void 0||f.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment}),{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment,rationales:{reliability:f.reliabilityRationale,benevolence:f.benevolenceRationale,goalAlignment:f.goalAlignmentRationale}}};function rb(u){const o=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let l=-1,c="";for(const d of o){const f=u.match(d);if(f&&f.index!==void 0){l=f.index,c=f[0];break}}if(l===-1){const d=Math.floor(u.length*.5),f=u.substring(d).match(/\\section\*?\{[^}]+\}/);f&&f.index!==void 0&&(l=d+f.index,c=f[0])}return l===-1?{part1:u,part2:"",splitPoint:""}:{part1:u.substring(0,l),part2:u.substring(l),splitPoint:c}}const ib=async(u,o,l,c,d)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${u.length} characters`),console.log(`[Reviser] Feedback length: ${o.length} characters`),console.log("[Reviser] Loading reviser prompt...");const f=await jc("REVISER");console.log(`[Reviser] Prompt loaded (${f.length} chars)`);const y=u.length>2e4;let v;if(y){console.log("[Reviser] Large paper detected - using two-part revision strategy"),d==null||d("Large paper - revising in two parts...");const{part1:m,part2:E,splitPoint:w}=rb(u);console.log(`[Reviser] Split at "${w}" - Part 1: ${m.length} chars, Part 2: ${E.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),d==null||d("Revising Part 1: Abstract through Results...");const D=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${m}

Reviewer Feedback:
${o}

Supervisor Directives:
${l}

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

Produce the revised PART 1:`;let I=await pr(D,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");I=Sc(I),I=I.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${I.length} chars`),await Zp(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),d==null||d("Revising Part 2: Discussion, Conclusion, References...");const U=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

You are revising PART 2 of a two-part paper (back matter: Discussion, Conclusions, References).
The front matter has already been revised separately.

Original Paper PART 2:
${E}

Reviewer Feedback:
${o}

Supervisor Directives:
${l}

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

Produce the revised PART 2:`;let O=await pr(U,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");O=Sc(O),console.log(`[Reviser] Part 2 complete: ${O.length} chars`),v=I+`

`+O,console.log(`[Reviser] Combined revised paper: ${v.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),d==null||d("Revising paper content...");const m=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information. Honest recognition of limits is valued over forced improvements.

Original Paper:
${u}

Reviewer Feedback:
${o}

Supervisor Directives:
${l}

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

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${m.length} characters`),console.log("[Reviser] Calling Gemini API..."),v=await pr(m,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),v=Sc(v)}console.log(`[Reviser] Text revision complete! Output length: ${v.length} characters`);let p,_=!1;const A=(o+" "+l).toLowerCase();if(A.includes("figure")||A.includes("graph")||A.includes("chart")||A.includes("visual")||A.includes("plot")||A.includes("diagram")||A.includes("simulation")||A.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),d==null||d("Updating visualizations based on feedback...");try{let m;if(c){console.log("[Reviser] Analyzing data file for visualization...");try{m=(await Wp(c,d)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(U){console.warn("[Reviser] Could not analyze data file:",U)}}const E=v.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),w=v.match(/\\section{Methodology}([\s\S]*?)\\section{/),D=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${o.substring(0,500)}
Supervisor: ${l.substring(0,300)}
Abstract: ${E?E[1].substring(0,400):""}
`,I=await Lc(D,o,c,d,m);if(_=I.usedSyntheticData,I.dataAlert&&(p=I.dataAlert,console.warn(`[Reviser] ${p}`)),I.figures.length>0){console.log(`[Reviser] Generated ${I.figures.length} updated figures`);const U=Kp(I.figures);let O=U;_&&(O=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${U}`),v.match(/(\\section{Results})/)&&(v=v.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${O}
`))}}catch(m){console.error("[Reviser] Visualization update failed:",m),d==null||d("Visualization update failed - continuing with text revisions"),p=`*** VISUALIZATION ERROR during revision: ${m.message}`,_=!0}}console.log(`[Reviser] Revision complete! Final output length: ${v.length} characters`);const S=Math.abs(v.length-u.length)/u.length,T=S<.02;return T&&console.log(`[Reviser] Minimal changes detected (${(S*100).toFixed(1)}% change) - paper may have reached its potential`),{paperContent:v,dataAlert:p,usedSyntheticData:_,limitedBySource:T,limitationExplanation:T?"The revision resulted in minimal changes, suggesting the paper has reached its improvement potential given the available source materials (interview and data).":void 0}},fp="http://localhost:3001/Data";function sb(){const[u,o]=be.useState(Jh),l=be.useCallback((S,T)=>{o(m=>({...m,stages:{...m.stages,[S]:T}}))},[]),c=be.useCallback(S=>{o(T=>({...T,currentBuilderStep:S}))},[]),d=be.useCallback(S=>{const T=new Date().toLocaleTimeString();o(m=>({...m,logs:[...m.logs,`[${T}] ${S}`]}))},[]),f=be.useCallback(S=>{o(T=>({...T,currentStage:S,stages:{...T.stages,[S]:Ie.ACTIVE}}))},[]),g=be.useCallback(S=>{o(T=>({...T,...S}))},[]),y=be.useCallback(S=>{o(T=>({...T,rounds:[...T.rounds,S],currentRound:S.roundId}))},[]),v=be.useCallback(S=>{o(T=>{if(T.rounds.length===0)return T;const m=[...T.rounds];return m[m.length-1]={...m[m.length-1],...S},{...T,rounds:m}})},[]),p=be.useCallback(S=>{o(T=>({...T,stages:{...T.stages,[S]:Ie.PENDING}}))},[]),_=be.useCallback(S=>{o(T=>({...T,participantId:S}))},[]),A=be.useCallback(()=>`${u.participantId}_${u.sessionTimestamp}`,[u.participantId,u.sessionTimestamp]),R=be.useCallback(async()=>{var T;try{const m=await kp();m.success?console.log(`Backed up ${((T=m.backedUpFiles)==null?void 0:T.length)||0} files to ${m.backupDir}`):console.warn("Backup failed:",m.error)}catch(m){console.warn("Backup not available:",m)}Gy(),qp(),Mp();const S=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);o({...Jh,sessionTimestamp:S,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:u,setStageStatus:l,setBuilderStep:c,addLog:d,moveToStage:f,updateState:g,addRound:y,updateLastRound:v,resetStageData:p,setParticipantId:_,getFilePrefix:A,resetAllState:R}}function lb(){const[u,o]=be.useState({}),[l,c]=be.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}});be.useEffect(()=>{d()},[]);const d=async()=>{c(R=>({...R,loading:!0,error:null}));try{const R=`?t=${Date.now()}`,S=await fetch(`${fp}/manifest.json${R}`,{cache:"no-store"});if(!S.ok)throw new Error("No manifest.json found in Data folder");const T=await S.json(),m={interview:null,template:null,dataFile:null,participantId:null};for(const E of T.files||[]){const w=`${fp}/${E.filename}`;E.type==="interview"?(m.interview={filename:E.filename,path:w},m.participantId=E.participantId||null):E.type==="template"?m.template={filename:E.filename,path:w}:E.type==="dataFile"&&(m.dataFile={filename:E.filename,path:w})}c({loading:!1,error:null,detected:m}),m.interview&&await f("interview",m.interview.path,m.interview.filename,m.participantId),m.template&&await f("template",m.template.path,m.template.filename),m.dataFile&&await f("dataFile",m.dataFile.path,m.dataFile.filename)}catch(R){console.log("Auto-detection not available, manual upload required:",R),c({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}})}},f=async(R,S,T,m)=>{try{const E=`?t=${Date.now()}`,w=await fetch(S+E,{cache:"no-store"});if(!w.ok){console.warn(`Failed to load ${T}`);return}const D=await w.text(),I=new Blob([D],{type:"text/plain"}),U=new File([I],T,{type:"text/plain"});o(R==="interview"?O=>({...O,interview:U,interviewContent:D,participantId:m||O.participantId}):R==="template"?O=>({...O,template:U,templateContent:D}):O=>({...O,dataFile:U,dataFileContent:D})),console.log(`Auto-loaded: ${T}`)}catch(E){console.warn(`Error loading ${T}:`,E)}},g=be.useCallback(async(R,S)=>{if(!S){o(T=>{const m={...T};return delete m[R],R==="interview"&&delete m.interviewContent,m});return}if(R==="interview"){const T=await S.text();let m=S.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,""),E=null;const w=T.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i)||T.match(/Email[:\s]+([^\s\n]+@[^\s\n]+)/i);w&&(E=w[1].trim(),m=E.replace(/@/g,"_").replace(/\./g,"_")),o(D=>({...D,interview:S,interviewContent:T,participantId:m,participantEmail:E}))}else if(R==="template"){const T=await S.text();o(m=>({...m,template:S,templateContent:T}))}else{const T=await S.text();o(E=>({...E,dataFile:S,dataFileContent:T})),console.log("[handleFileChange] Uploading data file to cloud storage...");const m=await Lp(S);m.success?console.log("[handleFileChange] Cloud upload success:",m.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",m.error)}},[]),y=be.useCallback(()=>u.interviewContent||"",[u.interviewContent]),v=be.useCallback(()=>u.dataFileContent||"",[u.dataFileContent]),p=be.useCallback(()=>{var R;return((R=u.dataFile)==null?void 0:R.name)||""},[u.dataFile]),_=be.useCallback(async()=>{await d()},[]),A=be.useCallback(()=>u.participantEmail||null,[u.participantEmail]);return{uploadedFiles:u,handleFileChange:g,getInterviewContent:y,getDataFileContent:v,getDataFileName:p,getParticipantEmail:A,detectionStatus:l,refreshDetection:_}}function ob(u){const{simulationState:o,setStageStatus:l,setBuilderStep:c,addLog:d,moveToStage:f,updateState:g,addRound:y,updateLastRound:v,resetStageData:p,resetAllState:_,uploadedFiles:A,getInterviewContent:R,refreshDetection:S,onDataFileConfirm:T}=u,[m,E]=be.useState(!1);ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION;const w=be.useCallback(async O=>{const X=O??o.currentRound;d(`Reviewer: Starting review process with Gemini (Round ${X})...`),l(me.REVIEWER,Ie.ACTIVE);try{let H=o.paperContent;if(!H){const x=o.currentPaperVersion||1;d(`Reviewer: Paper not in state, reading from localStorage (v${x})...`),H=ia(x)||"",H&&(g({paperContent:H}),d("Reviewer: Paper loaded from localStorage"))}if(!H){d("Reviewer: ERROR - No paper content available in state or localStorage"),l(me.REVIEWER,Ie.ERROR);return}const $=o.participantId||"icis_paper",F=X;d("Reviewer: Analyzing paper with Gemini...");const ae=R();ae&&d("Reviewer: Interview content available for trustworthiness assessment");const ee=await Jv(H,F,$,ae);d(`Reviewer: Analysis complete - Average score: ${((ee.novelty+ee.significance+ee.methodologicalRigor+ee.clarity+ee.relevance)/5).toFixed(1)}/5`);const k={version:F,paperId:$,timestamp:new Date().toISOString(),reviewScores:{novelty:ee.novelty,significance:ee.significance,methodologicalRigor:ee.methodologicalRigor,clarity:ee.clarity,relevance:ee.relevance},reviewComments:{novelty:ee.noveltyComment,significance:ee.significanceComment,methodologicalRigor:ee.methodologicalRigorComment,clarity:ee.clarityComment,relevance:ee.relevanceComment},averageScore:(ee.novelty+ee.significance+ee.methodologicalRigor+ee.clarity+ee.relevance)/5,errorCounts:{majorErrors:ee.majorConcerns.length,minorErrors:ee.minorCorrections.length},errorDetails:{majorErrors:ee.majorConcerns,minorErrors:ee.minorCorrections},trustworthiness:ee.trustworthiness,criticalAlerts:ee.criticalAlerts.map((x,G)=>({number:G+1,title:x.title,status:"Open",impact:x.impact,details:x.details,actionRequired:x.actionRequired,consequence:x.consequence}))},Q={version:F,paperId:$,timestamp:new Date().toISOString(),researchQuestion:ee.researchQuestionFeedback,method:ee.methodFeedback,potentialImpact:ee.impactFeedback,writing:ee.writingFeedback,majorConcerns:ee.majorConcerns,minorCorrections:ee.minorCorrections,overallAssessment:ee.overallAssessment};wp(k),Fc(Q),d("Reviewer: Saved oversight and feedback files"),y({roundId:F,reviewScore:k.averageScore,reliabilityScore:ee.trustworthiness.reliability,alignmentScore:ee.trustworthiness.goalAlignment,errorsDetected:ee.majorConcerns.length+ee.minorCorrections.length,reviewScores:k.reviewScores,trustworthinessScores:ee.trustworthiness,errorCounts:k.errorCounts,constructiveFeedback:ee.overallAssessment,feedback:ee.overallAssessment,criticalAlerts:ee.criticalAlerts.map(x=>x.title)}),d("Reviewer: Review complete! Proceed to Supervisor for decision."),l(me.REVIEWER,Ie.COMPLETED)}catch(H){d(`Reviewer: ERROR - ${H.message}`),l(me.REVIEWER,Ie.ERROR)}},[l,d,y,g,o.currentRound,o.participantId,o.paperContent]),D=be.useCallback(async(O,X)=>{var H,$,F,ae;switch(O){case me.SETUP:await new Promise(k=>setTimeout(k,500));const ee={interview:!!A.interview,template:!0,examples:!0,dataFile:!!A.dataFile,paperPdf:!1};g({files:ee}),d("Setup: Files verified successfully");break;case me.BUILDER:d("Builder: Starting paper generation with Gemini...");try{const k=R();if(!k){d("Builder: ERROR - No interview content available"),l(me.BUILDER,Ie.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${X}", uploadedFiles.dataFile?.name="${(H=A.dataFile)==null?void 0:H.name}"`);const Q=X||(($=A.dataFile)==null?void 0:$.name),x=!Q;d(`Builder: Mode - ${x?"Partial paper (no data)":"Full paper with data"}`),d(Q?`Builder: Data file - ${Q}`:"Builder: WARNING - No data file name available");const B=await Hv(k,x,(te,ge)=>{ge==="starting"?d(`Builder: Generating ${te}...`):ge==="completed"?d(`Builder: ${te} complete`):ge==="error"&&d(`Builder: ${te} - error (continuing)`)},Q,T);B.dataSummary&&(d("Builder: Data Analysis Summary:"),d(B.dataSummary.substring(0,500)+(B.dataSummary.length>500?"...":""))),B.dataAlert&&d(B.dataAlert),B.usedSyntheticData&&d("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),g({paperContent:B.paperContent,currentPaperVersion:1,currentRound:1,dataAlert:B.dataAlert,dataSummary:B.dataSummary}),lp(1,B.paperContent);const V=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",ue=V?`${V}_icis_paper_v1.tex`:"icis_paper_v1.tex";await Nc(ue,B.paperContent),d("Builder: Paper generation complete - saved to localStorage and filesystem"),l(me.BUILDER,Ie.COMPLETED),f(me.REVIEWER),setTimeout(()=>w(),500)}catch(k){d(`Builder: ERROR - ${k.message}`),l(me.BUILDER,Ie.ERROR)}break;case me.REVIEWER:await w();break;case me.SUPERVISOR:d("Supervisor: Awaiting human review and decision..."),l(me.SUPERVISOR,Ie.ACTIVE);return;case me.FINALIZE:d("Finalize: Preparing final submission..."),l(me.FINALIZE,Ie.ACTIVE);return;case me.REVISER:d("Reviser: Starting revision with Gemini..."),console.log("[Workflow] REVISER stage starting"),l(me.REVISER,Ie.ACTIVE);try{let k=o.paperContent;if(console.log(`[Workflow] Paper in state: ${k?k.length+" chars":"none"}`),!k){const ie=o.currentPaperVersion||1;d(`Reviser: Paper not in state, reading from localStorage (v${ie})...`),k=ia(ie)||"",k&&(g({paperContent:k}),d("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${k.length} chars`))}if(!k){d("Reviser: ERROR - No paper content available in state or localStorage"),l(me.REVISER,Ie.ERROR);return}const Q=o.rounds[o.rounds.length-1],x=(Q==null?void 0:Q.feedback)||"Improve clarity and strengthen methodology.",G=X||(Q==null?void 0:Q.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${x.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${X?"from override":"from state"}): ${G.substring(0,100)}...`),d("Reviser: Analyzing feedback and generating revisions..."),d(`Reviser: Paper size: ${k.length} chars, calling Gemini...`);const B=(F=A.dataFile)==null?void 0:F.name,V=ie=>{d(`Reviser: ${ie}`)};console.log("[Workflow] Calling runReviser...");const ue=await ib(k,x,G,B,V);console.log(`[Workflow] runReviser completed, result: ${((ae=ue.paperContent)==null?void 0:ae.length)||0} chars`),ue.dataAlert&&d(ue.dataAlert),ue.usedSyntheticData&&d("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const te=o.currentPaperVersion+1;g({paperContent:ue.paperContent,currentPaperVersion:te,dataAlert:ue.dataAlert||o.dataAlert}),lp(te,ue.paperContent);const ge=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",C=ge?`${ge}_icis_paper_v${te}.tex`:`icis_paper_v${te}.tex`;await Nc(C,ue.paperContent),d(`Reviser: Revision complete - Version ${te} saved`);const L=o.currentRound+1;l(me.REVISER,Ie.COMPLETED),f(me.REVIEWER),g({currentRound:L}),setTimeout(()=>w(L),500)}catch(k){d(`Reviser: ERROR - ${k.message}`),l(me.REVISER,Ie.ERROR)}break}},[A.interview,A.dataFile,g,d,c,l,f,w,o.currentPaperVersion,o.currentRound,o.dataAlert,T]),I=be.useCallback(async(O,X,H)=>{switch(d(`Stage ${O}: ${X}`),console.log(`[handleStageAction] Stage ${O} action=${X} overrideParam="${H}" (type: ${typeof H})`),X){case"start":l(O,Ie.ACTIVE),E(!0);try{await D(O,H),O!==me.BUILDER&&O!==me.REVIEWER&&O!==me.REVISER&&l(O,Ie.COMPLETED),d(`Stage ${O} completed`)}catch($){l(O,Ie.ERROR),d(`Stage ${O} error: ${$}`)}finally{E(!1)}break;case"abort":l(O,Ie.ERROR),E(!1),d(`Stage ${O} aborted`);break;case"restart":p(O),l(O,Ie.ACTIVE),E(!0),d(`Stage ${O} restarting...`);try{await D(O,H),O!==me.BUILDER&&O!==me.REVIEWER&&O!==me.REVISER&&l(O,Ie.COMPLETED),d(`Stage ${O} restart completed`)}catch($){l(O,Ie.ERROR),d(`Stage ${O} restart error: ${$}`)}finally{E(!1)}break;case"skip":l(O,Ie.SKIPPED),d(`Stage ${O} skipped`);break}},[d,l,p,D]),U=be.useCallback(async(O,X)=>{var H;switch(d(`Action: ${O}`),O){case"START_SETUP":(o.rounds.length>0||o.currentPaperVersion>0||o.paperContent!=="")&&_&&_().then(()=>{d("Setup: Backed up and cleared previous case data")}),I(me.SETUP,"start");break;case"START_BUILDER":d("Setup: Checking for data files...");let F;const ae=vi();if(ae)F=ae.filename,console.log(`[START_BUILDER] Using cloud data file: ${ae.filename}`),d(`Setup: Data file ready (cloud) - ${ae.filename}`);else if(A.dataFile)F=A.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${F}`),d(`Setup: Data file ready (uploaded) - ${F}`);else try{d("Setup: Refreshing file manifest...");const ee=await _p();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(ee,null,2)),ee.success&&ee.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(ee.manifest.files,null,2));const k=(H=ee.manifest.files)==null?void 0:H.find(Q=>Q.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",k),k&&(F=k.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${k.filename}"`),d(`Setup: Data file detected - ${k.filename}`),S&&(d("Setup: Loading data file into memory..."),await S(),d("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}F||d("Setup: No data file - will generate partial paper"),l(me.SETUP,Ie.COMPLETED),f(me.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${F}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${F}"`),I(me.BUILDER,"start",F)},500);break;case"PROCEED_TO_SUPERVISOR":l(me.REVIEWER,Ie.COMPLETED),f(me.SUPERVISOR);break;case"SKIP_TO_REVIEWER":l(me.SETUP,Ie.COMPLETED),l(me.BUILDER,Ie.COMPLETED),g({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(me.REVIEWER),setTimeout(()=>I(me.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":l(me.SETUP,Ie.COMPLETED),l(me.BUILDER,Ie.COMPLETED),l(me.REVIEWER,Ie.COMPLETED),g({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(me.SUPERVISOR);break;case"revise":if(X){v({supervisorComment:X});const ee=o.currentRound;ip(ee,ee,X),sp("CONTINUE",ee),d(`Supervisor: Saved directive to feedback file (round ${ee})`)}l(me.SUPERVISOR,Ie.COMPLETED),f(me.REVISER),d(`Supervisor: Passing directive to Reviser: "${(X==null?void 0:X.substring(0,50))||"none"}..."`),setTimeout(()=>I(me.REVISER,"start",X),100);break;case"finalize":if(X){v({supervisorComment:X});const ee=o.currentRound;ip(ee,ee,X),sp("FINALIZE",ee),d(`Supervisor: Saved finalize decision to feedback file (round ${ee})`)}l(me.SUPERVISOR,Ie.COMPLETED),f(me.FINALIZE);break;case"NEW_CASE":_?_().then(()=>{d("New case started - files backed up and cleared"),S==null||S(),f(me.SETUP)}):f(me.SETUP);break;default:d(`Unknown action: ${O}`)}},[d,f,l,v,I,_,o.rounds.length,o.currentPaperVersion,o.paperContent,g,S]);return{isProcessing:m,handleStageAction:I,handleWorkflowAction:U}}const cb=()=>{const[u,o]=be.useState("main"),[l,c]=be.useState("research"),d=be.useCallback(G=>{c(G),kv(G),console.log(`[App] Paper mode changed to: ${G}`)},[]),{simulationState:f,setStageStatus:g,setBuilderStep:y,addLog:v,moveToStage:p,updateState:_,addRound:A,updateLastRound:R,resetStageData:S,setParticipantId:T,getFilePrefix:m,resetAllState:E}=sb(),{uploadedFiles:w,handleFileChange:D,getInterviewContent:I,getDataFileContent:U,getDataFileName:O,getParticipantEmail:X,detectionStatus:H,refreshDetection:$}=lb(),F=be.useCallback(async G=>{const B=`Data File Verification

File: ${G.filename}
Total lines: ${G.totalLines}

First line (column headers):
${G.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(B)},[]),{isProcessing:ae,handleStageAction:ee,handleWorkflowAction:k}=ob({simulationState:f,setStageStatus:g,setBuilderStep:y,addLog:v,moveToStage:p,updateState:_,addRound:A,updateLastRound:R,resetStageData:S,resetAllState:E,uploadedFiles:w,getInterviewContent:I,refreshDetection:$,onDataFileConfirm:F});be.useEffect(()=>{w.participantId&&w.participantId!==f.participantId&&(T(w.participantId),v(`Participant ID set: ${w.participantId}`))},[w.participantId,f.participantId,T,v]);const Q=G=>{v(`Aborting ${G}...`),ee(G,"abort")},x=G=>{v(`Restarting ${G}...`),ee(G,"restart"),setTimeout(()=>ee(G,"start"),100)};return s.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[s.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:s.jsx(Vy,{currentStage:f.currentStage,currentBuilderStep:f.currentBuilderStep,stagesState:f.stages,isPartialPaper:f.isPartialPaper,currentRound:f.currentRound,isProcessing:ae,onStageClick:p,onStageAction:ee,onNewCase:()=>k("NEW_CASE"),onNewInterview:()=>{window.open(`/asd/interview.html?mode=${l}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/asd/paper-to-interview.html","_blank","noopener,noreferrer")},onResearchAdmin:l==="research"?()=>o(u==="admin"?"main":"admin"):void 0,paperMode:l,onPaperModeChange:d})}),s.jsx("div",{className:"flex-1 h-full",children:u==="admin"?s.jsx(bv,{onClose:()=>o("main")}):s.jsx(cv,{state:f,isProcessing:ae,onAction:k,uploadedFiles:w,onFileChange:D,detectionStatus:H,onRefreshDetection:$,onStageAbort:Q,onStageRestart:x,filePrefix:m(),dataFileName:O(),dataFileContent:U(),participantEmail:X()||void 0})})]})};function ub(){const u=Date.now(),o=new Uint8Array(16);crypto.getRandomValues(o);const l=Array.from(o).map(c=>c.toString(16).padStart(2,"0")).join("");return`${u}_${l}`}function db(){const u=sessionStorage.getItem("icis_session_token");if(!u)return!1;const o=u.split("_");if(o.length!==2)return!1;const l=parseInt(o[0],10);if(isNaN(l))return!1;const c=Date.now()-l,d=1440*60*1e3;return c<d}const fb=({onLogin:u})=>{const[o,l]=be.useState(""),[c,d]=be.useState(""),[f,g]=be.useState(""),[y,v]=be.useState(!1),p=_=>{_.preventDefault(),g(""),v(!0);const A=void 0,R=void 0;setTimeout(()=>{if(o===A&&c===R){const S=ub();sessionStorage.setItem("icis_session_token",S),sessionStorage.setItem("icis_authenticated","true"),u()}else g("Invalid username or password"),v(!1)},500)};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-md",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:s.jsx("span",{className:"text-2xl font-bold text-white",children:"IC"})}),s.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"ICIScopilot"}),s.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),s.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:s.jsxs("form",{onSubmit:p,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(Uy,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"text",id:"username",value:o,onChange:_=>l(_.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(my,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"password",id:"password",value:c,onChange:_=>d(_.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),f&&s.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[s.jsx(Bs,{className:"h-5 w-5 flex-shrink-0"}),s.jsx("span",{className:"text-sm",children:f})]}),s.jsx("button",{type:"submit",disabled:y,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:y?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),s.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"ICIS Conference Paper Authoring System"})]})})},hb=()=>{const[u,o]=be.useState(null);be.useEffect(()=>{const c=db(),d=sessionStorage.getItem("icis_authenticated");o(d==="true"&&c)},[]);const l=()=>{o(!0)};return u===null?s.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):u?s.jsx(cb,{}):s.jsx(fb,{onLogin:l})},Jp=document.getElementById("root");if(!Jp)throw new Error("Could not find root element to mount to");const pb=w0.createRoot(Jp);pb.render(s.jsx(g0.StrictMode,{children:s.jsx(hb,{})}));
