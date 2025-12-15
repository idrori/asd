(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=l(d);fetch(d.href,f)}})();var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ic(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var ic={exports:{}},li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function d0(){if(Mh)return li;Mh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(c,d,f){var m=null;if(f!==void 0&&(m=""+f),d.key!==void 0&&(m=""+d.key),"key"in d){f={};for(var y in d)y!=="key"&&(f[y]=d[y])}else f=d;return d=f.ref,{$$typeof:u,type:c,key:m,ref:d!==void 0?d:null,props:f}}return li.Fragment=o,li.jsx=l,li.jsxs=l,li}var Uh;function f0(){return Uh||(Uh=1,ic.exports=d0()),ic.exports}var s=f0(),sc={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function h0(){if(Fh)return De;Fh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),T=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=T&&C[T]||C["@@iterator"],typeof C=="function"?C:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,E={};function A(C,L,ie){this.props=C,this.context=L,this.refs=E,this.updater=ie||R}A.prototype.isReactComponent={},A.prototype.setState=function(C,L){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,L,"setState")},A.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function I(){}I.prototype=A.prototype;function j(C,L,ie){this.props=C,this.context=L,this.refs=E,this.updater=ie||R}var P=j.prototype=new I;P.constructor=j,g(P,A.prototype),P.isPureReactComponent=!0;var D=Array.isArray;function X(){}var H={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function U(C,L,ie){var se=ie.ref;return{$$typeof:u,type:C,key:L,ref:se!==void 0?se:null,props:ie}}function ae(C,L){return U(C.type,L,C.props)}function ee(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function k(C){var L={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return L[ie]})}var Z=/\/+/g;function x(C,L){return typeof C=="object"&&C!==null&&C.key!=null?k(""+C.key):L.toString(36)}function G(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(X,X):(C.status="pending",C.then(function(L){C.status==="pending"&&(C.status="fulfilled",C.value=L)},function(L){C.status==="pending"&&(C.status="rejected",C.reason=L)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function F(C,L,ie,se,oe){var Ae=typeof C;(Ae==="undefined"||Ae==="boolean")&&(C=null);var Te=!1;if(C===null)Te=!0;else switch(Ae){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(C.$$typeof){case u:case o:Te=!0;break;case w:return Te=C._init,F(Te(C._payload),L,ie,se,oe)}}if(Te)return oe=oe(C),Te=se===""?"."+x(C,0):se,D(oe)?(ie="",Te!=null&&(ie=Te.replace(Z,"$&/")+"/"),F(oe,L,ie,"",function(Pe){return Pe})):oe!=null&&(ee(oe)&&(oe=ae(oe,ie+(oe.key==null||C&&C.key===oe.key?"":(""+oe.key).replace(Z,"$&/")+"/")+Te)),L.push(oe)),1;Te=0;var Ne=se===""?".":se+":";if(D(C))for(var Se=0;Se<C.length;Se++)se=C[Se],Ae=Ne+x(se,Se),Te+=F(se,L,ie,Ae,oe);else if(Se=S(C),typeof Se=="function")for(C=Se.call(C),Se=0;!(se=C.next()).done;)se=se.value,Ae=Ne+x(se,Se++),Te+=F(se,L,ie,Ae,oe);else if(Ae==="object"){if(typeof C.then=="function")return F(G(C),L,ie,se,oe);throw L=String(C),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Te}function V(C,L,ie){if(C==null)return C;var se=[],oe=0;return F(C,se,"","",function(Ae){return L.call(ie,Ae,oe++)}),se}function ue(C){if(C._status===-1){var L=C._result;L=L(),L.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=L)}if(C._status===1)return C._result.default;throw C._result}var te=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ge={map:V,forEach:function(C,L,ie){V(C,function(){L.apply(this,arguments)},ie)},count:function(C){var L=0;return V(C,function(){L++}),L},toArray:function(C){return V(C,function(L){return L})||[]},only:function(C){if(!ee(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return De.Activity=_,De.Children=ge,De.Component=A,De.Fragment=l,De.Profiler=d,De.PureComponent=j,De.StrictMode=c,De.Suspense=v,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return H.H.useMemoCache(C)}},De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(C,L,ie){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var se=g({},C.props),oe=C.key;if(L!=null)for(Ae in L.key!==void 0&&(oe=""+L.key),L)!$.call(L,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&L.ref===void 0||(se[Ae]=L[Ae]);var Ae=arguments.length-2;if(Ae===1)se.children=ie;else if(1<Ae){for(var Te=Array(Ae),Ne=0;Ne<Ae;Ne++)Te[Ne]=arguments[Ne+2];se.children=Te}return U(C.type,oe,se)},De.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},De.createElement=function(C,L,ie){var se,oe={},Ae=null;if(L!=null)for(se in L.key!==void 0&&(Ae=""+L.key),L)$.call(L,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(oe[se]=L[se]);var Te=arguments.length-2;if(Te===1)oe.children=ie;else if(1<Te){for(var Ne=Array(Te),Se=0;Se<Te;Se++)Ne[Se]=arguments[Se+2];oe.children=Ne}if(C&&C.defaultProps)for(se in Te=C.defaultProps,Te)oe[se]===void 0&&(oe[se]=Te[se]);return U(C,Ae,oe)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:y,render:C}},De.isValidElement=ee,De.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:ue}},De.memo=function(C,L){return{$$typeof:p,type:C,compare:L===void 0?null:L}},De.startTransition=function(C){var L=H.T,ie={};H.T=ie;try{var se=C(),oe=H.S;oe!==null&&oe(ie,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(X,te)}catch(Ae){te(Ae)}finally{L!==null&&ie.types!==null&&(L.types=ie.types),H.T=L}},De.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},De.use=function(C){return H.H.use(C)},De.useActionState=function(C,L,ie){return H.H.useActionState(C,L,ie)},De.useCallback=function(C,L){return H.H.useCallback(C,L)},De.useContext=function(C){return H.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,L){return H.H.useDeferredValue(C,L)},De.useEffect=function(C,L){return H.H.useEffect(C,L)},De.useEffectEvent=function(C){return H.H.useEffectEvent(C)},De.useId=function(){return H.H.useId()},De.useImperativeHandle=function(C,L,ie){return H.H.useImperativeHandle(C,L,ie)},De.useInsertionEffect=function(C,L){return H.H.useInsertionEffect(C,L)},De.useLayoutEffect=function(C,L){return H.H.useLayoutEffect(C,L)},De.useMemo=function(C,L){return H.H.useMemo(C,L)},De.useOptimistic=function(C,L){return H.H.useOptimistic(C,L)},De.useReducer=function(C,L,ie){return H.H.useReducer(C,L,ie)},De.useRef=function(C){return H.H.useRef(C)},De.useState=function(C){return H.H.useState(C)},De.useSyncExternalStore=function(C,L,ie){return H.H.useSyncExternalStore(C,L,ie)},De.useTransition=function(){return H.H.useTransition()},De.version="19.2.1",De}var Bh;function Dc(){return Bh||(Bh=1,sc.exports=h0()),sc.exports}var be=Dc();const p0=Ic(be);var lc={exports:{}},oi={},oc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function m0(){return Ph||(Ph=1,(function(u){function o(F,V){var ue=F.length;F.push(V);e:for(;0<ue;){var te=ue-1>>>1,ge=F[te];if(0<d(ge,V))F[te]=V,F[ue]=ge,ue=te;else break e}}function l(F){return F.length===0?null:F[0]}function c(F){if(F.length===0)return null;var V=F[0],ue=F.pop();if(ue!==V){F[0]=ue;e:for(var te=0,ge=F.length,C=ge>>>1;te<C;){var L=2*(te+1)-1,ie=F[L],se=L+1,oe=F[se];if(0>d(ie,ue))se<ge&&0>d(oe,ie)?(F[te]=oe,F[se]=ue,te=se):(F[te]=ie,F[L]=ue,te=L);else if(se<ge&&0>d(oe,ue))F[te]=oe,F[se]=ue,te=se;else break e}}return V}function d(F,V){var ue=F.sortIndex-V.sortIndex;return ue!==0?ue:F.id-V.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;u.unstable_now=function(){return f.now()}}else{var m=Date,y=m.now();u.unstable_now=function(){return m.now()-y}}var v=[],p=[],w=1,_=null,T=3,S=!1,R=!1,g=!1,E=!1,A=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var V=l(p);V!==null;){if(V.callback===null)c(p);else if(V.startTime<=F)c(p),V.sortIndex=V.expirationTime,o(v,V);else break;V=l(p)}}function D(F){if(g=!1,P(F),!R)if(l(v)!==null)R=!0,X||(X=!0,k());else{var V=l(p);V!==null&&G(D,V.startTime-F)}}var X=!1,H=-1,$=5,U=-1;function ae(){return E?!0:!(u.unstable_now()-U<$)}function ee(){if(E=!1,X){var F=u.unstable_now();U=F;var V=!0;try{e:{R=!1,g&&(g=!1,I(H),H=-1),S=!0;var ue=T;try{t:{for(P(F),_=l(v);_!==null&&!(_.expirationTime>F&&ae());){var te=_.callback;if(typeof te=="function"){_.callback=null,T=_.priorityLevel;var ge=te(_.expirationTime<=F);if(F=u.unstable_now(),typeof ge=="function"){_.callback=ge,P(F),V=!0;break t}_===l(v)&&c(v),P(F)}else c(v);_=l(v)}if(_!==null)V=!0;else{var C=l(p);C!==null&&G(D,C.startTime-F),V=!1}}break e}finally{_=null,T=ue,S=!1}V=void 0}}finally{V?k():X=!1}}}var k;if(typeof j=="function")k=function(){j(ee)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,x=Z.port2;Z.port1.onmessage=ee,k=function(){x.postMessage(null)}}else k=function(){A(ee,0)};function G(F,V){H=A(function(){F(u.unstable_now())},V)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(F){F.callback=null},u.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<F?Math.floor(1e3/F):5},u.unstable_getCurrentPriorityLevel=function(){return T},u.unstable_next=function(F){switch(T){case 1:case 2:case 3:var V=3;break;default:V=T}var ue=T;T=V;try{return F()}finally{T=ue}},u.unstable_requestPaint=function(){E=!0},u.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ue=T;T=F;try{return V()}finally{T=ue}},u.unstable_scheduleCallback=function(F,V,ue){var te=u.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?te+ue:te):ue=te,F){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ue+ge,F={id:w++,callback:V,priorityLevel:F,startTime:ue,expirationTime:ge,sortIndex:-1},ue>te?(F.sortIndex=ue,o(p,F),l(v)===null&&F===l(p)&&(g?(I(H),H=-1):g=!0,G(D,ue-te))):(F.sortIndex=ge,o(v,F),R||S||(R=!0,X||(X=!0,k()))),F},u.unstable_shouldYield=ae,u.unstable_wrapCallback=function(F){var V=T;return function(){var ue=T;T=V;try{return F.apply(this,arguments)}finally{T=ue}}}})(cc)),cc}var Vh;function g0(){return Vh||(Vh=1,oc.exports=m0()),oc.exports}var uc={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function y0(){if(Hh)return _t;Hh=1;var u=Dc();function o(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)p+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var c={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(v,p,w){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:v,containerInfo:p,implementation:w}}var m=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,_t.createPortal=function(v,p){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return f(v,p,null,w)},_t.flushSync=function(v){var p=m.T,w=c.p;try{if(m.T=null,c.p=2,v)return v()}finally{m.T=p,c.p=w,c.d.f()}},_t.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(v,p))},_t.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},_t.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var w=p.as,_=y(w,p.crossOrigin),T=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;w==="style"?c.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:T,fetchPriority:S}):w==="script"&&c.d.X(v,{crossOrigin:_,integrity:T,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},_t.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var w=y(p.as,p.crossOrigin);c.d.M(v,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(v)},_t.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var w=p.as,_=y(w,p.crossOrigin);c.d.L(v,w,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},_t.preloadModule=function(v,p){if(typeof v=="string")if(p){var w=y(p.as,p.crossOrigin);c.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(v)},_t.requestFormReset=function(v){c.d.r(v)},_t.unstable_batchedUpdates=function(v,p){return v(p)},_t.useFormState=function(v,p,w){return m.H.useFormState(v,p,w)},_t.useFormStatus=function(){return m.H.useHostTransitionStatus()},_t.version="19.2.1",_t}var $h;function v0(){if($h)return uc.exports;$h=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),uc.exports=y0(),uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function b0(){if(Gh)return oi;Gh=1;var u=g0(),o=Dc(),l=v0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return v(r),e;if(i===a)return v(r),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=i;else{for(var h=!1,N=r.child;N;){if(N===n){h=!0,n=r,a=i;break}if(N===a){h=!0,a=r,n=i;break}N=N.sibling}if(!h){for(N=i.child;N;){if(N===n){h=!0,n=i,a=r;break}if(N===a){h=!0,a=i,n=r;break}N=N.sibling}if(!h)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),j=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function x(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case A:return"Profiler";case E:return"StrictMode";case D:return"Suspense";case X:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case j:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:x(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return x(e(t))}catch{}}return null}var G=Array.isArray,F=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},te=[],ge=-1;function C(e){return{current:e}}function L(e){0>ge||(e.current=te[ge],te[ge]=null,ge--)}function ie(e,t){ge++,te[ge]=e.current,e.current=t}var se=C(null),oe=C(null),Ae=C(null),Te=C(null);function Ne(e,t){switch(ie(Ae,t),ie(oe,e),ie(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sh(t),e=lh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(se),ie(se,e)}function Se(){L(se),L(oe),L(Ae)}function Pe(e){e.memoizedState!==null&&ie(Te,e);var t=se.current,n=lh(t,e.type);t!==n&&(ie(oe,e),ie(se,n))}function et(e){oe.current===e&&(L(se),L(oe)),Te.current===e&&(L(Te),ai._currentValue=ue)}var Rt,Tt;function b(e){if(Rt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rt=t&&t[1]||"",Tt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+e+Tt}var de=!1;function re(e,t){if(!e||de)return"";de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(ne){var J=ne}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(ne){J=ne}e.call(fe.prototype)}}else{try{throw Error()}catch(ne){J=ne}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(ne){if(ne&&J&&typeof ne.stack=="string")return[ne.stack,J.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),h=i[0],N=i[1];if(h&&N){var M=h.split(`
`),K=N.split(`
`);for(r=a=0;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;for(;r<K.length&&!K[r].includes("DetermineComponentFrameRoot");)r++;if(a===M.length||r===K.length)for(a=M.length-1,r=K.length-1;1<=a&&0<=r&&M[a]!==K[r];)r--;for(;1<=a&&0<=r;a--,r--)if(M[a]!==K[r]){if(a!==1||r!==1)do if(a--,r--,0>r||M[a]!==K[r]){var le=`
`+M[a].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=a&&0<=r);break}}}finally{de=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?b(n):""}function z(e,t){switch(e.tag){case 26:case 27:case 5:return b(e.type);case 16:return b("Lazy");case 13:return e.child!==t&&t!==null?b("Suspense Fallback"):b("Suspense");case 19:return b("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return b("Activity");default:return""}}function O(e){try{var t="",n=null;do t+=z(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Y=Object.prototype.hasOwnProperty,he=u.unstable_scheduleCallback,pe=u.unstable_cancelCallback,W=u.unstable_shouldYield,ye=u.unstable_requestPaint,xe=u.unstable_now,ve=u.unstable_getCurrentPriorityLevel,we=u.unstable_ImmediatePriority,Ye=u.unstable_UserBlockingPriority,Le=u.unstable_NormalPriority,Nt=u.unstable_LowPriority,jn=u.unstable_IdlePriority,Ht=u.log,sa=u.unstable_setDisableYieldValue,We=null,mt=null;function $t(e){if(typeof Ht=="function"&&sa(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(We,e)}catch{}}var rt=Math.clz32?Math.clz32:Gs,hi=Math.log,$s=Math.LN2;function Gs(e){return e>>>=0,e===0?32:31-(hi(e)/$s|0)|0}var Ra=256,la=262144,cn=4194304;function Gt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var N=a&134217727;return N!==0?(a=N&~i,a!==0?r=Gt(a):(h&=N,h!==0?r=Gt(h):n||(n=N&~e,n!==0&&(r=Gt(n))))):(N=a&~i,N!==0?r=Gt(N):h!==0?r=Gt(h):n||(n=a&~e,n!==0&&(r=Gt(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function gr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function Ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jp(e,t,n,a,r,i){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var N=e.entanglements,M=e.expirationTimes,K=e.hiddenUpdates;for(n=h&~n;0<n;){var le=31-rt(n),fe=1<<le;N[le]=0,M[le]=-1;var J=K[le];if(J!==null)for(K[le]=null,le=0;le<J.length;le++){var ne=J[le];ne!==null&&(ne.lane&=-536870913)}n&=~fe}a!==0&&Pc(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(h&~t))}function Pc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-rt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Vc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-rt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Hc(e,t){var n=t&-t;return n=(n&42)!==0?1:qs(n),(n&(e.suspendedLanes|t))!==0?0:n}function qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $c(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Ih(e.type))}function Gc(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var kn=Math.random().toString(36).slice(2),vt="__reactFiber$"+kn,Ct="__reactProps$"+kn,Ta="__reactContainer$"+kn,Zs="__reactEvents$"+kn,em="__reactListeners$"+kn,tm="__reactHandles$"+kn,Yc="__reactResources$"+kn,vr="__reactMarker$"+kn;function Qs(e){delete e[vt],delete e[Ct],delete e[Zs],delete e[em],delete e[tm]}function Na(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ph(e);e!==null;){if(n=e[vt])return n;e=ph(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){if(e=e[vt]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function br(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ia(e){var t=e[Yc];return t||(t=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gt(e){e[vr]=!0}var qc=new Set,Xc={};function oa(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(Xc[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var nm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zc={},Qc={};function am(e){return Y.call(Qc,e)?!0:Y.call(Zc,e)?!1:nm.test(e)?Qc[e]=!0:(Zc[e]=!0,!1)}function mi(e,t,n){if(am(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){n=""+h,i.call(this,h)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){if(!e._valueTracker){var t=Kc(e)?"checked":"value";e._valueTracker=rm(e,t,""+e[t])}}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Kc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var im=/[\n"\\]/g;function qt(e){return e.replace(im,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ws(e,t,n,a,r,i,h,N){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Js(e,h,Yt(t)):n!=null?Js(e,h,Yt(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+Yt(N):e.removeAttribute("name")}function Jc(e,t,n,a,r,i,h,N){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ks(e);return}n=n!=null?""+Yt(n):"",t=t!=null?""+Yt(t):n,N||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=N?e.checked:!!a,e.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Ks(e)}function Js(e,t,n){t==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Oa(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function eu(e,t,n){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yt(n):""}function tu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(G(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Yt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ks(e)}function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||sm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function au(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&nu(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&nu(e,i,t[i])}function el(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),om=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return om.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var tl=null;function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,La=null;function ru(e){var t=Ca(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ws(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[Ct]||null;if(!r)throw Error(c(90));Ws(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Wc(a)}break e;case"textarea":eu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Oa(e,!!n.multiple,t,!1)}}}var al=!1;function iu(e,t,n){if(al)return e(t,n);al=!0;try{var a=e(t);return a}finally{if(al=!1,(ka!==null||La!==null)&&(is(),ka&&(t=ka,e=La,La=ka=null,ru(t),e)))for(t=0;t<e.length;t++)ru(e[t])}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ct]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=!1;if(yn)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){rl=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{rl=!1}var Ln=null,il=null,bi=null;function su(){if(bi)return bi;var e,t=il,n=t.length,a,r="value"in Ln?Ln.value:Ln.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(a=1;a<=h&&t[n-a]===r[i-a];a++);return bi=r.slice(e,1<a?1-a:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function lu(){return!1}function It(e){function t(n,a,r,i,h){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=h,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(n=e[N],this[N]=n?n(i):i[N]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:lu,this.isPropagationStopped=lu,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=It(ca),Er=_({},ca,{view:0,detail:0}),cm=It(Er),sl,ll,Ar,Ai=_({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(sl=e.screenX-Ar.screenX,ll=e.screenY-Ar.screenY):ll=sl=0,Ar=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),ou=It(Ai),um=_({},Ai,{dataTransfer:0}),dm=It(um),fm=_({},Er,{relatedTarget:0}),ol=It(fm),hm=_({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),pm=It(hm),mm=_({},ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=It(mm),ym=_({},ca,{data:0}),cu=It(ym),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xm[e])?!!t[e]:!1}function cl(){return Sm}var Em=_({},Er,{key:function(e){if(e.key){var t=vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Am=It(Em),_m=_({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=It(_m),wm=_({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),Rm=It(wm),Tm=_({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nm=It(Tm),Cm=_({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=It(Cm),Dm=_({},ca,{newState:0,oldState:0}),Om=It(Dm),jm=[9,13,27,32],ul=yn&&"CompositionEvent"in window,_r=null;yn&&"documentMode"in document&&(_r=document.documentMode);var km=yn&&"TextEvent"in window&&!_r,du=yn&&(!ul||_r&&8<_r&&11>=_r),fu=" ",hu=!1;function pu(e,t){switch(e){case"keyup":return jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function Lm(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(hu=!0,fu);case"textInput":return e=t.data,e===fu&&hu?null:e;default:return null}}function zm(e,t){if(za)return e==="compositionend"||!ul&&pu(e,t)?(e=su(),bi=il=Ln=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mm[e.type]:t==="textarea"}function yu(e,t,n,a){ka?La?La.push(a):La=[a]:ka=a,t=fs(t,"onChange"),0<t.length&&(n=new Ei("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var wr=null,Rr=null;function Um(e){eh(e,0)}function _i(e){var t=br(e);if(Wc(t))return e}function vu(e,t){if(e==="change")return t}var bu=!1;if(yn){var dl;if(yn){var fl="oninput"in document;if(!fl){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),fl=typeof xu.oninput=="function"}dl=fl}else dl=!1;bu=dl&&(!document.documentMode||9<document.documentMode)}function Su(){wr&&(wr.detachEvent("onpropertychange",Eu),Rr=wr=null)}function Eu(e){if(e.propertyName==="value"&&_i(Rr)){var t=[];yu(t,Rr,e,nl(e)),iu(Um,t)}}function Fm(e,t,n){e==="focusin"?(Su(),wr=t,Rr=n,wr.attachEvent("onpropertychange",Eu)):e==="focusout"&&Su()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Rr)}function Pm(e,t){if(e==="click")return _i(t)}function Vm(e,t){if(e==="input"||e==="change")return _i(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Hm;function Tr(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Y.call(t,r)||!zt(e[r],t[r]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=Au(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Au(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ru(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yi(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $m=yn&&"documentMode"in document&&11>=document.documentMode,Ma=null,pl=null,Nr=null,ml=!1;function Tu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||Ma==null||Ma!==yi(a)||(a=Ma,"selectionStart"in a&&hl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Nr&&Tr(Nr,a)||(Nr=a,a=fs(pl,"onSelect"),0<a.length&&(t=new Ei("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ma)))}function ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},gl={},Nu={};yn&&(Nu=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function da(e){if(gl[e])return gl[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nu)return gl[e]=t[n];return e}var Cu=da("animationend"),Iu=da("animationiteration"),Du=da("animationstart"),Gm=da("transitionrun"),Ym=da("transitionstart"),qm=da("transitioncancel"),Ou=da("transitionend"),ju=new Map,yl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yl.push("scrollEnd");function rn(e,t){ju.set(e,t),oa(t,[e])}var wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xt=[],Fa=0,vl=0;function Ri(){for(var e=Fa,t=vl=Fa=0;t<e;){var n=Xt[t];Xt[t++]=null;var a=Xt[t];Xt[t++]=null;var r=Xt[t];Xt[t++]=null;var i=Xt[t];if(Xt[t++]=null,a!==null&&r!==null){var h=a.pending;h===null?r.next=r:(r.next=h.next,h.next=r),a.pending=r}i!==0&&ku(n,r,i)}}function Ti(e,t,n,a){Xt[Fa++]=e,Xt[Fa++]=t,Xt[Fa++]=n,Xt[Fa++]=a,vl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function bl(e,t,n,a){return Ti(e,t,n,a),Ni(e)}function fa(e,t){return Ti(e,null,null,t),Ni(e)}function ku(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-rt(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function Ni(e){if(50<Qr)throw Qr=0,Co=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function Xm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,a){return new Xm(e,t,n,a)}function xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Lu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,n,a,r,i){var h=0;if(a=e,typeof e=="function")xl(e)&&(h=1);else if(typeof e=="string")h=Jg(e,n,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=Mt(31,n,t,r),e.elementType=U,e.lanes=i,e;case g:return ha(n.children,r,i,t);case E:h=8,r|=24;break;case A:return e=Mt(12,n,t,r|2),e.elementType=A,e.lanes=i,e;case D:return e=Mt(13,n,t,r),e.elementType=D,e.lanes=i,e;case X:return e=Mt(19,n,t,r),e.elementType=X,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:h=10;break e;case I:h=9;break e;case P:h=11;break e;case H:h=14;break e;case $:h=16,a=null;break e}h=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Mt(h,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function ha(e,t,n,a){return e=Mt(7,e,a,t),e.lanes=n,e}function Sl(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function zu(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function El(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mu=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=Mu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:O(t)},Mu.set(e,t),t)}return{value:e,source:t,stack:O(t)}}var Pa=[],Va=0,Ii=null,Cr=0,Qt=[],Kt=0,zn=null,un=1,dn="";function bn(e,t){Pa[Va++]=Cr,Pa[Va++]=Ii,Ii=e,Cr=t}function Uu(e,t,n){Qt[Kt++]=un,Qt[Kt++]=dn,Qt[Kt++]=zn,zn=e;var a=un;e=dn;var r=32-rt(a)-1;a&=~(1<<r),n+=1;var i=32-rt(t)+r;if(30<i){var h=r-r%5;i=(a&(1<<h)-1).toString(32),a>>=h,r-=h,un=1<<32-rt(t)+r|n<<r|a,dn=i+e}else un=1<<i|n<<r|a,dn=e}function Al(e){e.return!==null&&(bn(e,1),Uu(e,1,0))}function _l(e){for(;e===Ii;)Ii=Pa[--Va],Pa[Va]=null,Cr=Pa[--Va],Pa[Va]=null;for(;e===zn;)zn=Qt[--Kt],Qt[Kt]=null,dn=Qt[--Kt],Qt[Kt]=null,un=Qt[--Kt],Qt[Kt]=null}function Fu(e,t){Qt[Kt++]=un,Qt[Kt++]=dn,Qt[Kt++]=zn,un=t.id,dn=t.overflow,zn=e}var bt=null,tt=null,Ve=!1,Mn=null,Wt=!1,wl=Error(c(519));function Un(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ir(Zt(t,e)),wl}function Bu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[vt]=e,t[Ct]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Wr.length;n++)Ue(Wr[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Jc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),tu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||rh(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Un(e,!0)}function Pu(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:bt=bt.return}}function Ha(e){if(e!==bt)return!1;if(!Ve)return Pu(e),Ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$o(e.type,e.memoizedProps)),n=!n),n&&tt&&Un(e),Pu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));tt=hh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));tt=hh(e)}else t===27?(t=tt,Wn(e.type)?(e=Zo,Zo=null,tt=e):tt=t):tt=bt?en(e.stateNode.nextSibling):null;return!0}function pa(){tt=bt=null,Ve=!1}function Rl(){var e=Mn;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),Mn=null),e}function Ir(e){Mn===null?Mn=[e]:Mn.push(e)}var Tl=C(null),ma=null,xn=null;function Fn(e,t,n){ie(Tl,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=Tl.current,L(Tl)}function Nl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Cl(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var h=r.child;i=i.firstContext;e:for(;i!==null;){var N=i;i=r;for(var M=0;M<t.length;M++)if(N.context===t[M]){i.lanes|=n,N=i.alternate,N!==null&&(N.lanes|=n),Nl(i.return,n,e),a||(h=null);break e}i=N.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(c(341));h.lanes|=n,i=h.alternate,i!==null&&(i.lanes|=n),Nl(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function $a(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(c(387));if(h=h.memoizedProps,h!==null){var N=r.type;zt(r.pendingProps.value,h.value)||(e!==null?e.push(N):e=[N])}}else if(r===Te.current){if(h=r.alternate,h===null)throw Error(c(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ai):e=[ai])}r=r.return}e!==null&&Cl(t,e,n,a),t.flags|=262144}function Di(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){ma=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return Vu(ma,e)}function Oi(e,t){return ma===null&&ga(e),Vu(e,t)}function Vu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(c(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Zm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Qm=u.unstable_scheduleCallback,Km=u.unstable_NormalPriority,ut={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Il(){return{controller:new Zm,data:new Map,refCount:0}}function Dr(e){e.refCount--,e.refCount===0&&Qm(Km,function(){e.controller.abort()})}var Or=null,Dl=0,Ga=0,Ya=null;function Wm(e,t){if(Or===null){var n=Or=[];Dl=0,Ga=Lo(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Dl++,t.then(Hu,Hu),t}function Hu(){if(--Dl===0&&Or!==null){Ya!==null&&(Ya.status="fulfilled");var e=Or;Or=null,Ga=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var $u=F.S;F.S=function(e,t){Nf=xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wm(e,t),$u!==null&&$u(e,t)};var ya=C(null);function Ol(){var e=ya.current;return e!==null?e:Je.pooledCache}function ji(e,t){t===null?ie(ya,ya.current):ie(ya,t.pool)}function Gu(){var e=Ol();return e===null?null:{parent:ut._currentValue,pool:e}}var qa=Error(c(460)),jl=Error(c(474)),ki=Error(c(542)),Li={then:function(){}};function Yu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zu(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zu(e),e}throw ba=t,qa}}function va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ba=n,qa):n}}var ba=null;function Xu(){if(ba===null)throw Error(c(459));var e=ba;return ba=null,e}function Zu(e){if(e===qa||e===ki)throw Error(c(483))}var Xa=null,jr=0;function zi(e){var t=jr;return jr+=1,Xa===null&&(Xa=[]),qu(Xa,e,t)}function kr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mi(e,t){throw t.$$typeof===T?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qu(e){function t(q,B){if(e){var Q=q.deletions;Q===null?(q.deletions=[B],q.flags|=16):Q.push(B)}}function n(q,B){if(!e)return null;for(;B!==null;)t(q,B),B=B.sibling;return null}function a(q){for(var B=new Map;q!==null;)q.key!==null?B.set(q.key,q):B.set(q.index,q),q=q.sibling;return B}function r(q,B){return q=vn(q,B),q.index=0,q.sibling=null,q}function i(q,B,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<B?(q.flags|=67108866,B):Q):(q.flags|=67108866,B)):(q.flags|=1048576,B)}function h(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function N(q,B,Q,ce){return B===null||B.tag!==6?(B=Sl(Q,q.mode,ce),B.return=q,B):(B=r(B,Q),B.return=q,B)}function M(q,B,Q,ce){var Re=Q.type;return Re===g?le(q,B,Q.props.children,ce,Q.key):B!==null&&(B.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===$&&va(Re)===B.type)?(B=r(B,Q.props),kr(B,Q),B.return=q,B):(B=Ci(Q.type,Q.key,Q.props,null,q.mode,ce),kr(B,Q),B.return=q,B)}function K(q,B,Q,ce){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=El(Q,q.mode,ce),B.return=q,B):(B=r(B,Q.children||[]),B.return=q,B)}function le(q,B,Q,ce,Re){return B===null||B.tag!==7?(B=ha(Q,q.mode,ce,Re),B.return=q,B):(B=r(B,Q),B.return=q,B)}function fe(q,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Sl(""+B,q.mode,Q),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return Q=Ci(B.type,B.key,B.props,null,q.mode,Q),kr(Q,B),Q.return=q,Q;case R:return B=El(B,q.mode,Q),B.return=q,B;case $:return B=va(B),fe(q,B,Q)}if(G(B)||k(B))return B=ha(B,q.mode,Q,null),B.return=q,B;if(typeof B.then=="function")return fe(q,zi(B),Q);if(B.$$typeof===j)return fe(q,Oi(q,B),Q);Mi(q,B)}return null}function J(q,B,Q,ce){var Re=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Re!==null?null:N(q,B,""+Q,ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Re?M(q,B,Q,ce):null;case R:return Q.key===Re?K(q,B,Q,ce):null;case $:return Q=va(Q),J(q,B,Q,ce)}if(G(Q)||k(Q))return Re!==null?null:le(q,B,Q,ce,null);if(typeof Q.then=="function")return J(q,B,zi(Q),ce);if(Q.$$typeof===j)return J(q,B,Oi(q,Q),ce);Mi(q,Q)}return null}function ne(q,B,Q,ce,Re){if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return q=q.get(Q)||null,N(B,q,""+ce,Re);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case S:return q=q.get(ce.key===null?Q:ce.key)||null,M(B,q,ce,Re);case R:return q=q.get(ce.key===null?Q:ce.key)||null,K(B,q,ce,Re);case $:return ce=va(ce),ne(q,B,Q,ce,Re)}if(G(ce)||k(ce))return q=q.get(Q)||null,le(B,q,ce,Re,null);if(typeof ce.then=="function")return ne(q,B,Q,zi(ce),Re);if(ce.$$typeof===j)return ne(q,B,Q,Oi(B,ce),Re);Mi(B,ce)}return null}function Ee(q,B,Q,ce){for(var Re=null,He=null,_e=B,ke=B=0,Be=null;_e!==null&&ke<Q.length;ke++){_e.index>ke?(Be=_e,_e=null):Be=_e.sibling;var $e=J(q,_e,Q[ke],ce);if($e===null){_e===null&&(_e=Be);break}e&&_e&&$e.alternate===null&&t(q,_e),B=i($e,B,ke),He===null?Re=$e:He.sibling=$e,He=$e,_e=Be}if(ke===Q.length)return n(q,_e),Ve&&bn(q,ke),Re;if(_e===null){for(;ke<Q.length;ke++)_e=fe(q,Q[ke],ce),_e!==null&&(B=i(_e,B,ke),He===null?Re=_e:He.sibling=_e,He=_e);return Ve&&bn(q,ke),Re}for(_e=a(_e);ke<Q.length;ke++)Be=ne(_e,q,ke,Q[ke],ce),Be!==null&&(e&&Be.alternate!==null&&_e.delete(Be.key===null?ke:Be.key),B=i(Be,B,ke),He===null?Re=Be:He.sibling=Be,He=Be);return e&&_e.forEach(function(aa){return t(q,aa)}),Ve&&bn(q,ke),Re}function Ce(q,B,Q,ce){if(Q==null)throw Error(c(151));for(var Re=null,He=null,_e=B,ke=B=0,Be=null,$e=Q.next();_e!==null&&!$e.done;ke++,$e=Q.next()){_e.index>ke?(Be=_e,_e=null):Be=_e.sibling;var aa=J(q,_e,$e.value,ce);if(aa===null){_e===null&&(_e=Be);break}e&&_e&&aa.alternate===null&&t(q,_e),B=i(aa,B,ke),He===null?Re=aa:He.sibling=aa,He=aa,_e=Be}if($e.done)return n(q,_e),Ve&&bn(q,ke),Re;if(_e===null){for(;!$e.done;ke++,$e=Q.next())$e=fe(q,$e.value,ce),$e!==null&&(B=i($e,B,ke),He===null?Re=$e:He.sibling=$e,He=$e);return Ve&&bn(q,ke),Re}for(_e=a(_e);!$e.done;ke++,$e=Q.next())$e=ne(_e,q,ke,$e.value,ce),$e!==null&&(e&&$e.alternate!==null&&_e.delete($e.key===null?ke:$e.key),B=i($e,B,ke),He===null?Re=$e:He.sibling=$e,He=$e);return e&&_e.forEach(function(u0){return t(q,u0)}),Ve&&bn(q,ke),Re}function Ke(q,B,Q,ce){if(typeof Q=="object"&&Q!==null&&Q.type===g&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:e:{for(var Re=Q.key;B!==null;){if(B.key===Re){if(Re=Q.type,Re===g){if(B.tag===7){n(q,B.sibling),ce=r(B,Q.props.children),ce.return=q,q=ce;break e}}else if(B.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===$&&va(Re)===B.type){n(q,B.sibling),ce=r(B,Q.props),kr(ce,Q),ce.return=q,q=ce;break e}n(q,B);break}else t(q,B);B=B.sibling}Q.type===g?(ce=ha(Q.props.children,q.mode,ce,Q.key),ce.return=q,q=ce):(ce=Ci(Q.type,Q.key,Q.props,null,q.mode,ce),kr(ce,Q),ce.return=q,q=ce)}return h(q);case R:e:{for(Re=Q.key;B!==null;){if(B.key===Re)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){n(q,B.sibling),ce=r(B,Q.children||[]),ce.return=q,q=ce;break e}else{n(q,B);break}else t(q,B);B=B.sibling}ce=El(Q,q.mode,ce),ce.return=q,q=ce}return h(q);case $:return Q=va(Q),Ke(q,B,Q,ce)}if(G(Q))return Ee(q,B,Q,ce);if(k(Q)){if(Re=k(Q),typeof Re!="function")throw Error(c(150));return Q=Re.call(Q),Ce(q,B,Q,ce)}if(typeof Q.then=="function")return Ke(q,B,zi(Q),ce);if(Q.$$typeof===j)return Ke(q,B,Oi(q,Q),ce);Mi(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,B!==null&&B.tag===6?(n(q,B.sibling),ce=r(B,Q),ce.return=q,q=ce):(n(q,B),ce=Sl(Q,q.mode,ce),ce.return=q,q=ce),h(q)):n(q,B)}return function(q,B,Q,ce){try{jr=0;var Re=Ke(q,B,Q,ce);return Xa=null,Re}catch(_e){if(_e===qa||_e===ki)throw _e;var He=Mt(29,_e,null,q.mode);return He.lanes=ce,He.return=q,He}finally{}}}var xa=Qu(!0),Ku=Qu(!1),Bn=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ll(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ge&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ni(e),ku(e,null,n),t}return Ti(e,a,t,n),Ni(e)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vc(e,n)}}function zl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=h:i=i.next=h,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ml=!1;function zr(){if(Ml){var e=Ya;if(e!==null)throw e}}function Mr(e,t,n,a){Ml=!1;var r=e.updateQueue;Bn=!1;var i=r.firstBaseUpdate,h=r.lastBaseUpdate,N=r.shared.pending;if(N!==null){r.shared.pending=null;var M=N,K=M.next;M.next=null,h===null?i=K:h.next=K,h=M;var le=e.alternate;le!==null&&(le=le.updateQueue,N=le.lastBaseUpdate,N!==h&&(N===null?le.firstBaseUpdate=K:N.next=K,le.lastBaseUpdate=M))}if(i!==null){var fe=r.baseState;h=0,le=K=M=null,N=i;do{var J=N.lane&-536870913,ne=J!==N.lane;if(ne?(Fe&J)===J:(a&J)===J){J!==0&&J===Ga&&(Ml=!0),le!==null&&(le=le.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ee=e,Ce=N;J=t;var Ke=n;switch(Ce.tag){case 1:if(Ee=Ce.payload,typeof Ee=="function"){fe=Ee.call(Ke,fe,J);break e}fe=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Ce.payload,J=typeof Ee=="function"?Ee.call(Ke,fe,J):Ee,J==null)break e;fe=_({},fe,J);break e;case 2:Bn=!0}}J=N.callback,J!==null&&(e.flags|=64,ne&&(e.flags|=8192),ne=r.callbacks,ne===null?r.callbacks=[J]:ne.push(J))}else ne={lane:J,tag:N.tag,payload:N.payload,callback:N.callback,next:null},le===null?(K=le=ne,M=fe):le=le.next=ne,h|=J;if(N=N.next,N===null){if(N=r.shared.pending,N===null)break;ne=N,N=ne.next,ne.next=null,r.lastBaseUpdate=ne,r.shared.pending=null}}while(!0);le===null&&(M=fe),r.baseState=M,r.firstBaseUpdate=K,r.lastBaseUpdate=le,i===null&&(r.shared.lanes=0),qn|=h,e.lanes=h,e.memoizedState=fe}}function Wu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ju(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wu(n[e],t)}var Za=C(null),Ui=C(0);function ed(e,t){e=In,ie(Ui,e),ie(Za,t),In=e|t.baseLanes}function Ul(){ie(Ui,In),ie(Za,Za.current)}function Fl(){In=Ui.current,L(Za),L(Ui)}var Ut=C(null),Jt=null;function Hn(e){var t=e.alternate;ie(lt,lt.current&1),ie(Ut,e),Jt===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Jt=e)}function Bl(e){ie(lt,lt.current),ie(Ut,e),Jt===null&&(Jt=e)}function td(e){e.tag===22?(ie(lt,lt.current),ie(Ut,e),Jt===null&&(Jt=e)):$n()}function $n(){ie(lt,lt.current),ie(Ut,Ut.current)}function Ft(e){L(Ut),Jt===e&&(Jt=null),L(lt)}var lt=C(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qo(n)||Xo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,je=null,Ze=null,dt=null,Bi=!1,Qa=!1,Sa=!1,Pi=0,Ur=0,Ka=null,eg=0;function it(){throw Error(c(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Vl(e,t,n,a,r,i){return En=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?Ud:ao,Sa=!1,i=n(a,r),Sa=!1,Qa&&(i=ad(t,n,a,r)),nd(e),i}function nd(e){F.H=Pr;var t=Ze!==null&&Ze.next!==null;if(En=0,dt=Ze=je=null,Bi=!1,Ur=0,Ka=null,t)throw Error(c(300));e===null||ft||(e=e.dependencies,e!==null&&Di(e)&&(ft=!0))}function ad(e,t,n,a){je=e;var r=0;do{if(Qa&&(Ka=null),Ur=0,Qa=!1,25<=r)throw Error(c(301));if(r+=1,dt=Ze=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}F.H=Fd,i=t(n,a)}while(Qa);return i}function tg(){var e=F.H,t=e.useState()[0];return t=typeof t.then=="function"?Fr(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(je.flags|=1024),t}function Hl(){var e=Pi!==0;return Pi=0,e}function $l(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Gl(e){if(Bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bi=!1}En=0,dt=Ze=je=null,Qa=!1,Ur=Pi=0,Ka=null}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?je.memoizedState=dt=e:dt=dt.next=e,dt}function ot(){if(Ze===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=dt===null?je.memoizedState:dt.next;if(t!==null)dt=t,Ze=e;else{if(e===null)throw je.alternate===null?Error(c(467)):Error(c(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},dt===null?je.memoizedState=dt=e:dt=dt.next=e}return dt}function Vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fr(e){var t=Ur;return Ur+=1,Ka===null&&(Ka=[]),e=qu(Ka,e,t),t=je,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?Ud:ao),e}function Hi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fr(e);if(e.$$typeof===j)return xt(e)}throw Error(c(438,String(e)))}function Yl(e){var t=null,n=je.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=je.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Vi(),je.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ae;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function $i(e){var t=ot();return ql(t,Ze,e)}function ql(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var h=r.next;r.next=i.next,i.next=h}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var N=h=null,M=null,K=t,le=!1;do{var fe=K.lane&-536870913;if(fe!==K.lane?(Fe&fe)===fe:(En&fe)===fe){var J=K.revertLane;if(J===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),fe===Ga&&(le=!0);else if((En&J)===J){K=K.next,J===Ga&&(le=!0);continue}else fe={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},M===null?(N=M=fe,h=i):M=M.next=fe,je.lanes|=J,qn|=J;fe=K.action,Sa&&n(i,fe),i=K.hasEagerState?K.eagerState:n(i,fe)}else J={lane:fe,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},M===null?(N=M=J,h=i):M=M.next=J,je.lanes|=fe,qn|=fe;K=K.next}while(K!==null&&K!==t);if(M===null?h=i:M.next=N,!zt(i,e.memoizedState)&&(ft=!0,le&&(n=Ya,n!==null)))throw n;e.memoizedState=i,e.baseState=h,e.baseQueue=M,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Xl(e){var t=ot(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do i=e(i,h.action),h=h.next;while(h!==r);zt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function rd(e,t,n){var a=je,r=ot(),i=Ve;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var h=!zt((Ze||r).memoizedState,n);if(h&&(r.memoizedState=n,ft=!0),r=r.queue,Kl(ld.bind(null,a,r,e),[e]),r.getSnapshot!==t||h||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,Wa(9,{destroy:void 0},sd.bind(null,a,r,n,t),null),Je===null)throw Error(c(349));i||(En&127)!==0||id(a,t,n)}return n}function id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t=Vi(),je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,a){t.value=n,t.getSnapshot=a,od(t)&&cd(e)}function ld(e,t,n){return n(function(){od(t)&&cd(e)})}function od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function cd(e){var t=fa(e,2);t!==null&&Lt(t,e,2)}function Zl(e){var t=wt();if(typeof e=="function"){var n=e;if(e=n(),Sa){$t(!0);try{n()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function ud(e,t,n,a){return e.baseState=n,ql(e,Ze,typeof a=="function"?a:An)}function ng(e,t,n,a,r){if(qi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){i.listeners.push(h)}};F.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,dd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function dd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=F.T,h={};F.T=h;try{var N=n(r,a),M=F.S;M!==null&&M(h,N),fd(e,t,N)}catch(K){Ql(e,t,K)}finally{i!==null&&h.types!==null&&(i.types=h.types),F.T=i}}else try{i=n(r,a),fd(e,t,i)}catch(K){Ql(e,t,K)}}function fd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){hd(e,t,a)},function(a){return Ql(e,t,a)}):hd(e,t,n)}function hd(e,t,n){t.status="fulfilled",t.value=n,pd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,dd(e,n)))}function Ql(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,pd(t),t=t.next;while(t!==a)}e.action=null}function pd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function md(e,t){return t}function gd(e,t){if(Ve){var n=Je.formState;if(n!==null){e:{var a=je;if(Ve){if(tt){t:{for(var r=tt,i=Wt;r.nodeType!==8;){if(!i){r=null;break t}if(r=en(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){tt=en(r.nextSibling),a=r.data==="F!";break e}}Un(a)}a=!1}a&&(t=n[0])}}return n=wt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:md,lastRenderedState:t},n.queue=a,n=Ld.bind(null,je,a),a.dispatch=n,a=Zl(!1),i=no.bind(null,je,!1,a.queue),a=wt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=ng.bind(null,je,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function yd(e){var t=ot();return vd(t,Ze,e)}function vd(e,t,n){if(t=ql(e,t,md)[0],e=$i(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fr(t)}catch(h){throw h===qa?ki:h}else a=t;t=ot();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(je.flags|=2048,Wa(9,{destroy:void 0},ag.bind(null,r,n),null)),[a,i,e]}function ag(e,t){e.action=t}function bd(e){var t=ot(),n=Ze;if(n!==null)return vd(t,n,e);ot(),t=t.memoizedState,n=ot();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Wa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=je.updateQueue,t===null&&(t=Vi(),je.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function xd(){return ot().memoizedState}function Gi(e,t,n,a){var r=wt();je.flags|=e,r.memoizedState=Wa(1|t,{destroy:void 0},n,a===void 0?null:a)}function Yi(e,t,n,a){var r=ot();a=a===void 0?null:a;var i=r.memoizedState.inst;Ze!==null&&a!==null&&Pl(a,Ze.memoizedState.deps)?r.memoizedState=Wa(t,i,n,a):(je.flags|=e,r.memoizedState=Wa(1|t,i,n,a))}function Sd(e,t){Gi(8390656,8,e,t)}function Kl(e,t){Yi(2048,8,e,t)}function rg(e){je.flags|=4;var t=je.updateQueue;if(t===null)t=Vi(),je.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ed(e){var t=ot().memoizedState;return rg({ref:t,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Ad(e,t){return Yi(4,2,e,t)}function _d(e,t){return Yi(4,4,e,t)}function wd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){n=n!=null?n.concat([e]):null,Yi(4,4,wd.bind(null,t,e),n)}function Wl(){}function Td(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Pl(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Nd(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Pl(t,a[1]))return a[0];if(a=e(),Sa){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[a,t],a}function Jl(e,t,n){return n===void 0||(En&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=If(),je.lanes|=e,qn|=e,n)}function Cd(e,t,n,a){return zt(n,t)?n:Za.current!==null?(e=Jl(e,n,a),zt(e,t)||(ft=!0),e):(En&42)===0||(En&1073741824)!==0&&(Fe&261930)===0?(ft=!0,e.memoizedState=n):(e=If(),je.lanes|=e,qn|=e,t)}function Id(e,t,n,a,r){var i=V.p;V.p=i!==0&&8>i?i:8;var h=F.T,N={};F.T=N,no(e,!1,t,n);try{var M=r(),K=F.S;if(K!==null&&K(N,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var le=Jm(M,a);Br(e,t,le,Vt(e))}else Br(e,t,a,Vt(e))}catch(fe){Br(e,t,{then:function(){},status:"rejected",reason:fe},Vt())}finally{V.p=i,h!==null&&N.types!==null&&(h.types=N.types),F.T=h}}function ig(){}function eo(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=Dd(e).queue;Id(e,r,t,ue,n===null?ig:function(){return Od(e),n(a)})}function Dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Od(e){var t=Dd(e);t.next===null&&(t=e.alternate.memoizedState),Br(e,t.next.queue,{},Vt())}function to(){return xt(ai)}function jd(){return ot().memoizedState}function kd(){return ot().memoizedState}function sg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vt();e=Pn(n);var a=Vn(t,e,n);a!==null&&(Lt(a,t,n),Lr(a,t,n)),t={cache:Il()},e.payload=t;return}t=t.return}}function lg(e,t,n){var a=Vt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e)?zd(t,n):(n=bl(e,t,n,a),n!==null&&(Lt(n,e,a),Md(n,t,a)))}function Ld(e,t,n){var a=Vt();Br(e,t,n,a)}function Br(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))zd(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var h=t.lastRenderedState,N=i(h,n);if(r.hasEagerState=!0,r.eagerState=N,zt(N,h))return Ti(e,t,r,0),Je===null&&Ri(),!1}catch{}finally{}if(n=bl(e,t,r,a),n!==null)return Lt(n,e,a),Md(n,t,a),!0}return!1}function no(e,t,n,a){if(a={lane:2,revertLane:Lo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(c(479))}else t=bl(e,n,a,2),t!==null&&Lt(t,e,2)}function qi(e){var t=e.alternate;return e===je||t!==null&&t===je}function zd(e,t){Qa=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Md(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vc(e,n)}}var Pr={readContext:xt,use:Hi,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useInsertionEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useSyncExternalStore:it,useId:it,useHostTransitionStatus:it,useFormState:it,useActionState:it,useOptimistic:it,useMemoCache:it,useCacheRefresh:it};Pr.useEffectEvent=it;var Ud={readContext:xt,use:Hi,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Sd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Gi(4194308,4,wd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){Gi(4,2,e,t)},useMemo:function(e,t){var n=wt();t=t===void 0?null:t;var a=e();if(Sa){$t(!0);try{e()}finally{$t(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=wt();if(n!==void 0){var r=n(t);if(Sa){$t(!0);try{n(t)}finally{$t(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=lg.bind(null,je,e),[a.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:function(e){e=Zl(e);var t=e.queue,n=Ld.bind(null,je,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wl,useDeferredValue:function(e,t){var n=wt();return Jl(n,e,t)},useTransition:function(){var e=Zl(!1);return e=Id.bind(null,je,e.queue,!0,!1),wt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=je,r=wt();if(Ve){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Je===null)throw Error(c(349));(Fe&127)!==0||id(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,Sd(ld.bind(null,a,i,e),[e]),a.flags|=2048,Wa(9,{destroy:void 0},sd.bind(null,a,i,n,t),null),n},useId:function(){var e=wt(),t=Je.identifierPrefix;if(Ve){var n=dn,a=un;n=(a&~(1<<32-rt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=eg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:to,useFormState:gd,useActionState:gd,useOptimistic:function(e){var t=wt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=no.bind(null,je,!0,n),n.dispatch=t,[e,t]},useMemoCache:Yl,useCacheRefresh:function(){return wt().memoizedState=sg.bind(null,je)},useEffectEvent:function(e){var t=wt(),n={impl:e};return t.memoizedState=n,function(){if((Ge&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},ao={readContext:xt,use:Hi,useCallback:Td,useContext:xt,useEffect:Kl,useImperativeHandle:Rd,useInsertionEffect:Ad,useLayoutEffect:_d,useMemo:Nd,useReducer:$i,useRef:xd,useState:function(){return $i(An)},useDebugValue:Wl,useDeferredValue:function(e,t){var n=ot();return Cd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=$i(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Fr(e),t]},useSyncExternalStore:rd,useId:jd,useHostTransitionStatus:to,useFormState:yd,useActionState:yd,useOptimistic:function(e,t){var n=ot();return ud(n,Ze,e,t)},useMemoCache:Yl,useCacheRefresh:kd};ao.useEffectEvent=Ed;var Fd={readContext:xt,use:Hi,useCallback:Td,useContext:xt,useEffect:Kl,useImperativeHandle:Rd,useInsertionEffect:Ad,useLayoutEffect:_d,useMemo:Nd,useReducer:Xl,useRef:xd,useState:function(){return Xl(An)},useDebugValue:Wl,useDeferredValue:function(e,t){var n=ot();return Ze===null?Jl(n,e,t):Cd(n,Ze.memoizedState,e,t)},useTransition:function(){var e=Xl(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Fr(e),t]},useSyncExternalStore:rd,useId:jd,useHostTransitionStatus:to,useFormState:bd,useActionState:bd,useOptimistic:function(e,t){var n=ot();return Ze!==null?ud(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Yl,useCacheRefresh:kd};Fd.useEffectEvent=Ed;function ro(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var io={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Vt(),r=Pn(a);r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(Lt(t,e,a),Lr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Vt(),r=Pn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(Lt(t,e,a),Lr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vt(),a=Pn(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(Lt(t,e,n),Lr(t,e,n))}};function Bd(e,t,n,a,r,i,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,h):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,a)||!Tr(r,i):!0}function Pd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=_({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Vd(e){wi(e)}function Hd(e){console.error(e)}function $d(e){wi(e)}function Xi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Gd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function so(e,t,n){return n=Pn(n),n.tag=3,n.payload={element:null},n.callback=function(){Xi(e,t)},n}function Yd(e){return e=Pn(e),e.tag=3,e}function qd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){Gd(t,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Gd(t,n,a),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var N=a.stack;this.componentDidCatch(a.value,{componentStack:N!==null?N:""})})}function og(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&$a(t,n,r,!0),n=Ut.current,n!==null){switch(n.tag){case 31:case 13:return Jt===null?ss():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Li?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Oo(e,a,r)),!1;case 22:return n.flags|=65536,a===Li?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Oo(e,a,r)),!1}throw Error(c(435,n.tag))}return Oo(e,a,r),ss(),!1}if(Ve)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==wl&&(e=Error(c(422),{cause:a}),Ir(Zt(e,n)))):(a!==wl&&(t=Error(c(423),{cause:a}),Ir(Zt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Zt(a,n),r=so(e.stateNode,a,r),zl(e,r),st!==4&&(st=2)),!1;var i=Error(c(520),{cause:a});if(i=Zt(i,n),Zr===null?Zr=[i]:Zr.push(i),st!==4&&(st=2),t===null)return!0;a=Zt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=so(n.stateNode,a,e),zl(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Yd(r),qd(r,e,n,a),zl(n,r),!1}n=n.return}while(n!==null);return!1}var lo=Error(c(461)),ft=!1;function St(e,t,n,a){t.child=e===null?Ku(t,null,n,a):xa(t,e.child,n,a)}function Xd(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var h={};for(var N in a)N!=="ref"&&(h[N]=a[N])}else h=a;return ga(t),a=Vl(e,t,n,h,i,r),N=Hl(),e!==null&&!ft?($l(e,t,r),_n(e,t,r)):(Ve&&N&&Al(t),t.flags|=1,St(e,t,a,r),t.child)}function Zd(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!xl(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Qd(e,t,i,a,r)):(e=Ci(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!go(e,r)){var h=i.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(h,a)&&e.ref===t.ref)return _n(e,t,r)}return t.flags|=1,e=vn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Qd(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(Tr(i,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=i,go(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,_n(e,t,r)}return oo(e,t,n,a,r)}function Kd(e,t,n,a){var r=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return Wd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ji(t,i!==null?i.cachePool:null),i!==null?ed(t,i):Ul(),td(t);else return a=t.lanes=536870912,Wd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(ji(t,i.cachePool),ed(t,i),$n(),t.memoizedState=null):(e!==null&&ji(t,null),Ul(),$n());return St(e,t,r,n),t.child}function Vr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wd(e,t,n,a,r){var i=Ol();return i=i===null?null:{parent:ut._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&ji(t,null),Ul(),td(t),e!==null&&$a(e,t,a,!0),t.childLanes=r,null}function Zi(e,t){return t=Ki({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jd(e,t,n){return xa(t,e.child,null,n),e=Zi(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function cg(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ve){if(a.mode==="hidden")return e=Zi(t,a),t.lanes=536870912,Vr(null,e);if(Bl(t),(e=tt)?(e=fh(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=zu(e),n.return=t,t.child=n,bt=t,tt=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return Zi(t,a)}var i=e.memoizedState;if(i!==null){var h=i.dehydrated;if(Bl(t),r)if(t.flags&256)t.flags&=-257,t=Jd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ft||$a(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(a=Je,a!==null&&(h=Hc(a,n),h!==0&&h!==i.retryLane))throw i.retryLane=h,fa(e,h),Lt(a,e,h),lo;ss(),t=Jd(e,t,n)}else e=i.treeContext,tt=en(h.nextSibling),bt=t,Ve=!0,Mn=null,Wt=!1,e!==null&&Fu(t,e),t=Zi(t,a),t.flags|=4096;return t}return e=vn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function oo(e,t,n,a,r){return ga(t),n=Vl(e,t,n,a,void 0,r),a=Hl(),e!==null&&!ft?($l(e,t,r),_n(e,t,r)):(Ve&&a&&Al(t),t.flags|=1,St(e,t,n,r),t.child)}function ef(e,t,n,a,r,i){return ga(t),t.updateQueue=null,n=ad(t,a,n,r),nd(e),a=Hl(),e!==null&&!ft?($l(e,t,i),_n(e,t,i)):(Ve&&a&&Al(t),t.flags|=1,St(e,t,n,i),t.child)}function tf(e,t,n,a,r){if(ga(t),t.stateNode===null){var i=Ba,h=n.contextType;typeof h=="object"&&h!==null&&(i=xt(h)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=io,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},kl(t),h=n.contextType,i.context=typeof h=="object"&&h!==null?xt(h):Ba,i.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(ro(t,n,h,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(h=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),h!==i.state&&io.enqueueReplaceState(i,i.state,null),Mr(t,a,i,r),zr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var N=t.memoizedProps,M=Ea(n,N);i.props=M;var K=i.context,le=n.contextType;h=Ba,typeof le=="object"&&le!==null&&(h=xt(le));var fe=n.getDerivedStateFromProps;le=typeof fe=="function"||typeof i.getSnapshotBeforeUpdate=="function",N=t.pendingProps!==N,le||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(N||K!==h)&&Pd(t,i,a,h),Bn=!1;var J=t.memoizedState;i.state=J,Mr(t,a,i,r),zr(),K=t.memoizedState,N||J!==K||Bn?(typeof fe=="function"&&(ro(t,n,fe,a),K=t.memoizedState),(M=Bn||Bd(t,n,M,a,J,K,h))?(le||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=K),i.props=a,i.state=K,i.context=h,a=M):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Ll(e,t),h=t.memoizedProps,le=Ea(n,h),i.props=le,fe=t.pendingProps,J=i.context,K=n.contextType,M=Ba,typeof K=="object"&&K!==null&&(M=xt(K)),N=n.getDerivedStateFromProps,(K=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h!==fe||J!==M)&&Pd(t,i,a,M),Bn=!1,J=t.memoizedState,i.state=J,Mr(t,a,i,r),zr();var ne=t.memoizedState;h!==fe||J!==ne||Bn||e!==null&&e.dependencies!==null&&Di(e.dependencies)?(typeof N=="function"&&(ro(t,n,N,a),ne=t.memoizedState),(le=Bn||Bd(t,n,le,a,J,ne,M)||e!==null&&e.dependencies!==null&&Di(e.dependencies))?(K||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,ne,M),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,ne,M)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ne),i.props=a,i.state=ne,i.context=M,a=le):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Qi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=xa(t,e.child,null,r),t.child=xa(t,null,n,r)):St(e,t,n,r),t.memoizedState=i.state,e=t.child):e=_n(e,t,r),e}function nf(e,t,n,a){return pa(),t.flags|=256,St(e,t,n,a),t.child}var co={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uo(e){return{baseLanes:e,cachePool:Gu()}}function fo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pt),e}function af(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,h;if((h=i)||(h=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ve){if(r?Hn(t):$n(),(e=tt)?(e=fh(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=zu(e),n.return=t,t.child=n,bt=t,tt=null)):e=null,e===null)throw Un(t);return Xo(e)?t.lanes=32:t.lanes=536870912,null}var N=a.children;return a=a.fallback,r?($n(),r=t.mode,N=Ki({mode:"hidden",children:N},r),a=ha(a,r,n,null),N.return=t,a.return=t,N.sibling=a,t.child=N,a=t.child,a.memoizedState=uo(n),a.childLanes=fo(e,h,n),t.memoizedState=co,Vr(null,a)):(Hn(t),ho(t,N))}var M=e.memoizedState;if(M!==null&&(N=M.dehydrated,N!==null)){if(i)t.flags&256?(Hn(t),t.flags&=-257,t=po(e,t,n)):t.memoizedState!==null?($n(),t.child=e.child,t.flags|=128,t=null):($n(),N=a.fallback,r=t.mode,a=Ki({mode:"visible",children:a.children},r),N=ha(N,r,n,null),N.flags|=2,a.return=t,N.return=t,a.sibling=N,t.child=a,xa(t,e.child,null,n),a=t.child,a.memoizedState=uo(n),a.childLanes=fo(e,h,n),t.memoizedState=co,t=Vr(null,a));else if(Hn(t),Xo(N)){if(h=N.nextSibling&&N.nextSibling.dataset,h)var K=h.dgst;h=K,a=Error(c(419)),a.stack="",a.digest=h,Ir({value:a,source:null,stack:null}),t=po(e,t,n)}else if(ft||$a(e,t,n,!1),h=(n&e.childLanes)!==0,ft||h){if(h=Je,h!==null&&(a=Hc(h,n),a!==0&&a!==M.retryLane))throw M.retryLane=a,fa(e,a),Lt(h,e,a),lo;qo(N)||ss(),t=po(e,t,n)}else qo(N)?(t.flags|=192,t.child=e.child,t=null):(e=M.treeContext,tt=en(N.nextSibling),bt=t,Ve=!0,Mn=null,Wt=!1,e!==null&&Fu(t,e),t=ho(t,a.children),t.flags|=4096);return t}return r?($n(),N=a.fallback,r=t.mode,M=e.child,K=M.sibling,a=vn(M,{mode:"hidden",children:a.children}),a.subtreeFlags=M.subtreeFlags&65011712,K!==null?N=vn(K,N):(N=ha(N,r,n,null),N.flags|=2),N.return=t,a.return=t,a.sibling=N,t.child=a,Vr(null,a),a=t.child,N=e.child.memoizedState,N===null?N=uo(n):(r=N.cachePool,r!==null?(M=ut._currentValue,r=r.parent!==M?{parent:M,pool:M}:r):r=Gu(),N={baseLanes:N.baseLanes|n,cachePool:r}),a.memoizedState=N,a.childLanes=fo(e,h,n),t.memoizedState=co,Vr(e.child,a)):(Hn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function ho(e,t){return t=Ki({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ki(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function po(e,t,n){return xa(t,e.child,null,n),e=ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Nl(e.return,t,n)}function mo(e,t,n,a,r,i){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=n,h.tailMode=r,h.treeForkCount=i)}function sf(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var h=lt.current,N=(h&2)!==0;if(N?(h=h&1|2,t.flags|=128):h&=1,ie(lt,h),St(e,t,a,n),a=Ve?Cr:0,!N&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,n,t);else if(e.tag===19)rf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),mo(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Fi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}mo(t,!0,n,null,i,a);break;case"together":mo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function _n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function go(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Di(e)))}function ug(e,t,n){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),Fn(t,ut,e.memoizedState.cache),pa();break;case 27:case 5:Pe(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bl(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?af(e,t,n):(Hn(t),e=_n(e,t,n),e!==null?e.sibling:null);Hn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||($a(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return sf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(lt,lt.current),a)break;return null;case 22:return t.lanes=0,Kd(e,t,n,t.pendingProps);case 24:Fn(t,ut,e.memoizedState.cache)}return _n(e,t,n)}function lf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!go(e,n)&&(t.flags&128)===0)return ft=!1,ug(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Ve&&(t.flags&1048576)!==0&&Uu(t,Cr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e=="function")xl(e)?(a=Ea(e,a),t.tag=1,t=tf(null,t,e,a,n)):(t.tag=0,t=oo(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===P){t.tag=11,t=Xd(null,t,e,a,n);break e}else if(r===H){t.tag=14,t=Zd(null,t,e,a,n);break e}}throw t=x(e)||e,Error(c(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Ea(a,t.pendingProps),tf(e,t,a,r,n);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,Ll(e,t),Mr(t,a,null,n);var h=t.memoizedState;if(a=h.cache,Fn(t,ut,a),a!==i.cache&&Cl(t,[ut],n,!0),zr(),a=h.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=nf(e,t,a,n);break e}else if(a!==r){r=Zt(Error(c(424)),t),Ir(r),t=nf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tt=en(e.firstChild),bt=t,Ve=!0,Mn=null,Wt=!0,n=Ku(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(pa(),a===r){t=_n(e,t,n);break e}St(e,t,a,n)}t=t.child}return t;case 26:return Qi(e,t),e===null?(n=vh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ve||(n=t.type,e=t.pendingProps,a=hs(Ae.current).createElement(n),a[vt]=t,a[Ct]=e,Et(a,n,e),gt(a),t.stateNode=a):t.memoizedState=vh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pe(t),e===null&&Ve&&(a=t.stateNode=mh(t.type,t.pendingProps,Ae.current),bt=t,Wt=!0,r=tt,Wn(t.type)?(Zo=r,tt=en(a.firstChild)):tt=r),St(e,t,t.pendingProps.children,n),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ve&&((r=a=tt)&&(a=Bg(a,t.type,t.pendingProps,Wt),a!==null?(t.stateNode=a,bt=t,tt=en(a.firstChild),Wt=!1,r=!0):r=!1),r||Un(t)),Pe(t),r=t.type,i=t.pendingProps,h=e!==null?e.memoizedProps:null,a=i.children,$o(r,i)?a=null:h!==null&&$o(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=Vl(e,t,tg,null,null,n),ai._currentValue=r),Qi(e,t),St(e,t,a,n),t.child;case 6:return e===null&&Ve&&((e=n=tt)&&(n=Pg(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,bt=t,tt=null,e=!0):e=!1),e||Un(t)),null;case 13:return af(e,t,n);case 4:return Ne(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=xa(t,null,a,n):St(e,t,a,n),t.child;case 11:return Xd(e,t,t.type,t.pendingProps,n);case 7:return St(e,t,t.pendingProps,n),t.child;case 8:return St(e,t,t.pendingProps.children,n),t.child;case 12:return St(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Fn(t,t.type,a.value),St(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ga(t),r=xt(r),a=a(r),t.flags|=1,St(e,t,a,n),t.child;case 14:return Zd(e,t,t.type,t.pendingProps,n);case 15:return Qd(e,t,t.type,t.pendingProps,n);case 19:return sf(e,t,n);case 31:return cg(e,t,n);case 22:return Kd(e,t,n,t.pendingProps);case 24:return ga(t),a=xt(ut),e===null?(r=Ol(),r===null&&(r=Je,i=Il(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},kl(t),Fn(t,ut,r)):((e.lanes&n)!==0&&(Ll(e,t),Mr(t,null,null,n),zr()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Fn(t,ut,a)):(a=i.cache,Fn(t,ut,a),a!==r.cache&&Cl(t,[ut],n,!0))),St(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function wn(e){e.flags|=4}function yo(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(kf())e.flags|=8192;else throw ba=Li,jl}else e.flags&=-16777217}function of(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ah(t))if(kf())e.flags|=8192;else throw ba=Li,jl}function Wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bc():536870912,e.lanes|=t,nr|=t)}function Hr(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function dg(e,t,n){var a=t.pendingProps;switch(_l(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(ut),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rl())),nt(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(wn(t),i!==null?(nt(t),of(t,i)):(nt(t),yo(t,r,null,a,n))):i?i!==e.memoizedState?(wn(t),nt(t),of(t,i)):(nt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&wn(t),nt(t),yo(t,r,e,a,n)),null;case 27:if(et(t),n=Ae.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return nt(t),null}e=se.current,Ha(t)?Bu(t):(e=mh(r,a,n),t.stateNode=e,wn(t))}return nt(t),null;case 5:if(et(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return nt(t),null}if(i=se.current,Ha(t))Bu(t);else{var h=hs(Ae.current);switch(i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?h.createElement("select",{is:a.is}):h.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?h.createElement(r,{is:a.is}):h.createElement(r)}}i[vt]=t,i[Ct]=a;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=i;e:switch(Et(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&wn(t)}}return nt(t),yo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=Ae.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=bt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||rh(e.nodeValue,n)),e||Un(t,!0)}else e=hs(e).createTextNode(a),e[vt]=t,t.stateNode=e}return nt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ha(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[vt]=t}else pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),e=!1}else n=Rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return nt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ha(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[vt]=t}else pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),r=!1}else r=Rl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wi(t,t.updateQueue),nt(t),null);case 4:return Se(),e===null&&Fo(t.stateNode.containerInfo),nt(t),null;case 10:return Sn(t.type),nt(t),null;case 19:if(L(lt),a=t.memoizedState,a===null)return nt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Hr(a,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Fi(e),i!==null){for(t.flags|=128,Hr(a,!1),e=i.updateQueue,t.updateQueue=e,Wi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Lu(n,e),n=n.sibling;return ie(lt,lt.current&1|2),Ve&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xe()>as&&(t.flags|=128,r=!0,Hr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Fi(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Wi(t,e),Hr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ve)return nt(t),null}else 2*xe()-a.renderingStartTime>as&&n!==536870912&&(t.flags|=128,r=!0,Hr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xe(),e.sibling=null,n=lt.current,ie(lt,r?n&1|2:n&1),Ve&&bn(t,a.treeForkCount),e):(nt(t),null);case 22:case 23:return Ft(t),Fl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&Wi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(ut),nt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function fg(e,t){switch(_l(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(ut),Se(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return et(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(c(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(lt),null;case 4:return Se(),null;case 10:return Sn(t.type),null;case 22:case 23:return Ft(t),Fl(),e!==null&&L(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(ut),null;case 25:return null;default:return null}}function cf(e,t){switch(_l(t),t.tag){case 3:Sn(ut),Se();break;case 26:case 27:case 5:et(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:L(lt);break;case 10:Sn(t.type);break;case 22:case 23:Ft(t),Fl(),e!==null&&L(ya);break;case 24:Sn(ut)}}function $r(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,h=n.inst;a=i(),h.destroy=a}n=n.next}while(n!==r)}}catch(N){Xe(t,t.return,N)}}function Gn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var h=a.inst,N=h.destroy;if(N!==void 0){h.destroy=void 0,r=t;var M=n,K=N;try{K()}catch(le){Xe(r,M,le)}}}a=a.next}while(a!==i)}}catch(le){Xe(t,t.return,le)}}function uf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ju(t,n)}catch(a){Xe(e,e.return,a)}}}function df(e,t,n){n.props=Ea(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Xe(e,t,a)}}function Gr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Xe(e,t,r)}}function fn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Xe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Xe(e,t,r)}else n.current=null}function ff(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Xe(e,e.return,r)}}function vo(e,t,n){try{var a=e.stateNode;kg(a,e.type,n,t),a[Ct]=t}catch(r){Xe(e,e.return,r)}}function hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function bo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Wn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(xo(e,t,n),e=e.sibling;e!==null;)xo(e,t,n),e=e.sibling}function Ji(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Wn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ji(e,t,n),e=e.sibling;e!==null;)Ji(e,t,n),e=e.sibling}function pf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Et(t,a,n),t[vt]=e,t[Ct]=n}catch(i){Xe(e,e.return,i)}}var Rn=!1,ht=!1,So=!1,mf=typeof WeakSet=="function"?WeakSet:Set,yt=null;function hg(e,t){if(e=e.containerInfo,Vo=xs,e=Ru(e),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var h=0,N=-1,M=-1,K=0,le=0,fe=e,J=null;t:for(;;){for(var ne;fe!==n||r!==0&&fe.nodeType!==3||(N=h+r),fe!==i||a!==0&&fe.nodeType!==3||(M=h+a),fe.nodeType===3&&(h+=fe.nodeValue.length),(ne=fe.firstChild)!==null;)J=fe,fe=ne;for(;;){if(fe===e)break t;if(J===n&&++K===r&&(N=h),J===i&&++le===a&&(M=h),(ne=fe.nextSibling)!==null)break;fe=J,J=fe.parentNode}fe=ne}n=N===-1||M===-1?null:{start:N,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ho={focusedElem:e,selectionRange:n},xs=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var Ee=Ea(n.type,r);e=a.getSnapshotBeforeUpdate(Ee,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){Xe(n,n.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function gf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),a&4&&$r(5,n);break;case 1:if(Nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){Xe(n,n.return,h)}else{var r=Ea(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){Xe(n,n.return,h)}}a&64&&uf(n),a&512&&Gr(n,n.return);break;case 3:if(Nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ju(e,t)}catch(h){Xe(n,n.return,h)}}break;case 27:t===null&&a&4&&pf(n);case 26:case 5:Nn(e,n),t===null&&a&4&&ff(n),a&512&&Gr(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),a&4&&bf(e,n);break;case 13:Nn(e,n),a&4&&xf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Eg.bind(null,n),Vg(e,n))));break;case 22:if(a=n.memoizedState!==null||Rn,!a){t=t!==null&&t.memoizedState!==null||ht,r=Rn;var i=ht;Rn=a,(ht=t)&&!i?Cn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Rn=r,ht=i}break;case 30:break;default:Nn(e,n)}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,Dt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)vf(e,t,n),n=n.sibling}function vf(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:ht||fn(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ht||fn(n,t);var a=at,r=Dt;Wn(n.type)&&(at=n.stateNode,Dt=!1),Tn(e,t,n),ei(n.stateNode),at=a,Dt=r;break;case 5:ht||fn(n,t);case 6:if(a=at,r=Dt,at=null,Tn(e,t,n),at=a,Dt=r,at!==null)if(Dt)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(i){Xe(n,t,i)}else try{at.removeChild(n.stateNode)}catch(i){Xe(n,t,i)}break;case 18:at!==null&&(Dt?(e=at,uh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ur(e)):uh(at,n.stateNode));break;case 4:a=at,r=Dt,at=n.stateNode.containerInfo,Dt=!0,Tn(e,t,n),at=a,Dt=r;break;case 0:case 11:case 14:case 15:Gn(2,n,t),ht||Gn(4,n,t),Tn(e,t,n);break;case 1:ht||(fn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&df(n,t,a)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:ht=(a=ht)||n.memoizedState!==null,Tn(e,t,n),ht=a;break;default:Tn(e,t,n)}}function bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ur(e)}catch(n){Xe(t,t.return,n)}}}function xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ur(e)}catch(n){Xe(t,t.return,n)}}function pg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mf),t;default:throw Error(c(435,e.tag))}}function es(e,t){var n=pg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=Ag.bind(null,e,a);a.then(r,r)}})}function Ot(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,h=t,N=h;e:for(;N!==null;){switch(N.tag){case 27:if(Wn(N.type)){at=N.stateNode,Dt=!1;break e}break;case 5:at=N.stateNode,Dt=!1;break e;case 3:case 4:at=N.stateNode.containerInfo,Dt=!0;break e}N=N.return}if(at===null)throw Error(c(160));vf(i,h,r),at=null,Dt=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}var sn=null;function Sf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(t,e),jt(e),a&4&&(Gn(3,e,e.return),$r(3,e),Gn(5,e,e.return));break;case 1:Ot(t,e),jt(e),a&512&&(ht||n===null||fn(n,n.return)),a&64&&Rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=sn;if(Ot(t,e),jt(e),a&512&&(ht||n===null||fn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[vr]||i[vt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),Et(i,a,n),i[vt]=e,gt(i),a=i;break e;case"link":var h=Sh("link","href",r).get(a+(n.href||""));if(h){for(var N=0;N<h.length;N++)if(i=h[N],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(N,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;case"meta":if(h=Sh("meta","content",r).get(a+(n.content||""))){for(N=0;N<h.length;N++)if(i=h[N],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(N,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;default:throw Error(c(468,a))}i[vt]=e,gt(i),a=i}e.stateNode=a}else Eh(r,e.type,e.stateNode);else e.stateNode=xh(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Eh(r,e.type,e.stateNode):xh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&vo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ot(t,e),jt(e),a&512&&(ht||n===null||fn(n,n.return)),n!==null&&a&4&&vo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ot(t,e),jt(e),a&512&&(ht||n===null||fn(n,n.return)),e.flags&32){r=e.stateNode;try{ja(r,"")}catch(Ee){Xe(e,e.return,Ee)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,vo(e,r,n!==null?n.memoizedProps:r)),a&1024&&(So=!0);break;case 6:if(Ot(t,e),jt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Ee){Xe(e,e.return,Ee)}}break;case 3:if(gs=null,r=sn,sn=ps(t.containerInfo),Ot(t,e),sn=r,jt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(Ee){Xe(e,e.return,Ee)}So&&(So=!1,Ef(e));break;case 4:a=sn,sn=ps(e.stateNode.containerInfo),Ot(t,e),jt(e),sn=a;break;case 12:Ot(t,e),jt(e);break;case 31:Ot(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 13:Ot(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ns=xe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 22:r=e.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,K=Rn,le=ht;if(Rn=K||r,ht=le||M,Ot(t,e),ht=le,Rn=K,jt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||M||Rn||ht||Aa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){M=n=t;try{if(i=M.stateNode,r)h=i.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{N=M.stateNode;var fe=M.memoizedProps.style,J=fe!=null&&fe.hasOwnProperty("display")?fe.display:null;N.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ee){Xe(M,M.return,Ee)}}}else if(t.tag===6){if(n===null){M=t;try{M.stateNode.nodeValue=r?"":M.memoizedProps}catch(Ee){Xe(M,M.return,Ee)}}}else if(t.tag===18){if(n===null){M=t;try{var ne=M.stateNode;r?dh(ne,!0):dh(M.stateNode,!1)}catch(Ee){Xe(M,M.return,Ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,es(e,n))));break;case 19:Ot(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 30:break;case 21:break;default:Ot(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(hf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,i=bo(e);Ji(e,i,r);break;case 5:var h=n.stateNode;n.flags&32&&(ja(h,""),n.flags&=-33);var N=bo(e);Ji(e,N,h);break;case 3:case 4:var M=n.stateNode.containerInfo,K=bo(e);xo(e,K,M);break;default:throw Error(c(161))}}catch(le){Xe(e,e.return,le)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gf(e,t.alternate,t),t=t.sibling}function Aa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gn(4,t,t.return),Aa(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&df(t,t.return,n),Aa(t);break;case 27:ei(t.stateNode);case 26:case 5:fn(t,t.return),Aa(t);break;case 22:t.memoizedState===null&&Aa(t);break;case 30:Aa(t);break;default:Aa(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,h=i.flags;switch(i.tag){case 0:case 11:case 15:Cn(r,i,n),$r(4,i);break;case 1:if(Cn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(K){Xe(a,a.return,K)}if(a=i,r=a.updateQueue,r!==null){var N=a.stateNode;try{var M=r.shared.hiddenCallbacks;if(M!==null)for(r.shared.hiddenCallbacks=null,r=0;r<M.length;r++)Wu(M[r],N)}catch(K){Xe(a,a.return,K)}}n&&h&64&&uf(i),Gr(i,i.return);break;case 27:pf(i);case 26:case 5:Cn(r,i,n),n&&a===null&&h&4&&ff(i),Gr(i,i.return);break;case 12:Cn(r,i,n);break;case 31:Cn(r,i,n),n&&h&4&&bf(r,i);break;case 13:Cn(r,i,n),n&&h&4&&xf(r,i);break;case 22:i.memoizedState===null&&Cn(r,i,n),Gr(i,i.return);break;case 30:break;default:Cn(r,i,n)}t=t.sibling}}function Eo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Dr(n))}function Ao(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dr(e))}function ln(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Af(e,t,n,a),t=t.sibling}function Af(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,n,a),r&2048&&$r(9,t);break;case 1:ln(e,t,n,a);break;case 3:ln(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dr(e)));break;case 12:if(r&2048){ln(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,h=i.id,N=i.onPostCommit;typeof N=="function"&&N(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){Xe(t,t.return,M)}}else ln(e,t,n,a);break;case 31:ln(e,t,n,a);break;case 13:ln(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,h=t.alternate,t.memoizedState!==null?i._visibility&2?ln(e,t,n,a):Yr(e,t):i._visibility&2?ln(e,t,n,a):(i._visibility|=2,Ja(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Eo(h,t);break;case 24:ln(e,t,n,a),r&2048&&Ao(t.alternate,t);break;default:ln(e,t,n,a)}}function Ja(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,h=t,N=n,M=a,K=h.flags;switch(h.tag){case 0:case 11:case 15:Ja(i,h,N,M,r),$r(8,h);break;case 23:break;case 22:var le=h.stateNode;h.memoizedState!==null?le._visibility&2?Ja(i,h,N,M,r):Yr(i,h):(le._visibility|=2,Ja(i,h,N,M,r)),r&&K&2048&&Eo(h.alternate,h);break;case 24:Ja(i,h,N,M,r),r&&K&2048&&Ao(h.alternate,h);break;default:Ja(i,h,N,M,r)}t=t.sibling}}function Yr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Yr(n,a),r&2048&&Eo(a.alternate,a);break;case 24:Yr(n,a),r&2048&&Ao(a.alternate,a);break;default:Yr(n,a)}t=t.sibling}}var qr=8192;function er(e,t,n){if(e.subtreeFlags&qr)for(e=e.child;e!==null;)_f(e,t,n),e=e.sibling}function _f(e,t,n){switch(e.tag){case 26:er(e,t,n),e.flags&qr&&e.memoizedState!==null&&e0(n,sn,e.memoizedState,e.memoizedProps);break;case 5:er(e,t,n);break;case 3:case 4:var a=sn;sn=ps(e.stateNode.containerInfo),er(e,t,n),sn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=qr,qr=16777216,er(e,t,n),qr=a):er(e,t,n));break;default:er(e,t,n)}}function wf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,Tf(a,e)}wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rf(e),e=e.sibling}function Rf(e){switch(e.tag){case 0:case 11:case 15:Xr(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:Xr(e);break;case 12:Xr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ts(e)):Xr(e);break;default:Xr(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,Tf(a,e)}wf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gn(8,t,t.return),ts(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ts(t));break;default:ts(t)}e=e.sibling}}function Tf(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:Gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Dr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,yt=a;else e:for(n=e;yt!==null;){a=yt;var r=a.sibling,i=a.return;if(yf(a),a===n){yt=null;break e}if(r!==null){r.return=i,yt=r;break e}yt=i}}}var mg={getCacheForType:function(e){var t=xt(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xt(ut).controller.signal}},gg=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Je=null,Me=null,Fe=0,qe=0,Bt=null,Yn=!1,tr=!1,_o=!1,In=0,st=0,qn=0,_a=0,wo=0,Pt=0,nr=0,Zr=null,kt=null,Ro=!1,ns=0,Nf=0,as=1/0,rs=null,Xn=null,pt=0,Zn=null,ar=null,Dn=0,To=0,No=null,Cf=null,Qr=0,Co=null;function Vt(){return(Ge&2)!==0&&Fe!==0?Fe&-Fe:F.T!==null?Lo():$c()}function If(){if(Pt===0)if((Fe&536870912)===0||Ve){var e=la;la<<=1,(la&3932160)===0&&(la=262144),Pt=e}else Pt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),Pt}function Lt(e,t,n){(e===Je&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Qn(e,Fe,Pt,!1)),yr(e,n),((Ge&2)===0||e!==Je)&&(e===Je&&((Ge&2)===0&&(_a|=n),st===4&&Qn(e,Fe,Pt,!1)),hn(e))}function Df(e,t,n){if((Ge&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||gr(e,t),r=a?bg(e,t):Do(e,t,!0),i=a;do{if(r===0){tr&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!yg(n)){r=Do(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var N=e;r=Zr;var M=N.current.memoizedState.isDehydrated;if(M&&(rr(N,h).flags|=256),h=Do(N,h,!1),h!==2){if(_o&&!M){N.errorRecoveryDisabledLanes|=i,_a|=i,r=4;break e}i=kt,kt=r,i!==null&&(kt===null?kt=i:kt.push.apply(kt,i))}r=h}if(i=!1,r!==2)continue}}if(r===1){rr(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Qn(a,t,Pt,!Yn);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=ns+300-xe(),10<r)){if(Qn(a,t,Pt,!Yn),pi(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=oh(Of.bind(null,a,n,kt,rs,Ro,t,Pt,_a,nr,Yn,i,"Throttled",-0,0),r);break e}Of(a,n,kt,rs,Ro,t,Pt,_a,nr,Yn,i,null,-0,0)}}break}while(!0);hn(e)}function Of(e,t,n,a,r,i,h,N,M,K,le,fe,J,ne){if(e.timeoutHandle=-1,fe=t.subtreeFlags,fe&8192||(fe&16785408)===16785408){fe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},_f(t,i,fe);var Ee=(i&62914560)===i?ns-xe():(i&4194048)===i?Nf-xe():0;if(Ee=t0(fe,Ee),Ee!==null){Dn=i,e.cancelPendingCommit=Ee(Bf.bind(null,e,t,i,n,a,r,h,N,M,le,fe,null,J,ne)),Qn(e,i,h,!K);return}}Bf(e,t,i,n,a,r,h,N,M)}function yg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!zt(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t&=~wo,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-rt(r),h=1<<i;a[i]=-1,r&=~h}n!==0&&Pc(e,n,t)}function is(){return(Ge&6)===0?(Kr(0),!1):!0}function Io(){if(Me!==null){if(qe===0)var e=Me.return;else e=Me,xn=ma=null,Gl(e),Xa=null,jr=0,e=Me;for(;e!==null;)cf(e.alternate,e),e=e.return;Me=null}}function rr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Mg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,Io(),Je=e,Me=n=vn(e.current,null),Fe=t,qe=0,Bt=null,Yn=!1,tr=gr(e,t),_o=!1,nr=Pt=wo=_a=qn=st=0,kt=Zr=null,Ro=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-rt(a),i=1<<r;t|=e[r],a&=~i}return In=t,Ri(),n}function jf(e,t){je=null,F.H=Pr,t===qa||t===ki?(t=Xu(),qe=3):t===jl?(t=Xu(),qe=4):qe=t===lo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Me===null&&(st=1,Xi(e,Zt(t,e.current)))}function kf(){var e=Ut.current;return e===null?!0:(Fe&4194048)===Fe?Jt===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===Jt:!1}function Lf(){var e=F.H;return F.H=Pr,e===null?Pr:e}function zf(){var e=F.A;return F.A=mg,e}function ss(){st=4,Yn||(Fe&4194048)!==Fe&&Ut.current!==null||(tr=!0),(qn&134217727)===0&&(_a&134217727)===0||Je===null||Qn(Je,Fe,Pt,!1)}function Do(e,t,n){var a=Ge;Ge|=2;var r=Lf(),i=zf();(Je!==e||Fe!==t)&&(rs=null,rr(e,t)),t=!1;var h=st;e:do try{if(qe!==0&&Me!==null){var N=Me,M=Bt;switch(qe){case 8:Io(),h=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var K=qe;if(qe=0,Bt=null,ir(e,N,M,K),n&&tr){h=0;break e}break;default:K=qe,qe=0,Bt=null,ir(e,N,M,K)}}vg(),h=st;break}catch(le){jf(e,le)}while(!0);return t&&e.shellSuspendCounter++,xn=ma=null,Ge=a,F.H=r,F.A=i,Me===null&&(Je=null,Fe=0,Ri()),h}function vg(){for(;Me!==null;)Mf(Me)}function bg(e,t){var n=Ge;Ge|=2;var a=Lf(),r=zf();Je!==e||Fe!==t?(rs=null,as=xe()+500,rr(e,t)):tr=gr(e,t);e:do try{if(qe!==0&&Me!==null){t=Me;var i=Bt;t:switch(qe){case 1:qe=0,Bt=null,ir(e,t,i,1);break;case 2:case 9:if(Yu(i)){qe=0,Bt=null,Uf(t);break}t=function(){qe!==2&&qe!==9||Je!==e||(qe=7),hn(e)},i.then(t,t);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:Yu(i)?(qe=0,Bt=null,Uf(t)):(qe=0,Bt=null,ir(e,t,i,7));break;case 5:var h=null;switch(Me.tag){case 26:h=Me.memoizedState;case 5:case 27:var N=Me;if(h?Ah(h):N.stateNode.complete){qe=0,Bt=null;var M=N.sibling;if(M!==null)Me=M;else{var K=N.return;K!==null?(Me=K,ls(K)):Me=null}break t}}qe=0,Bt=null,ir(e,t,i,5);break;case 6:qe=0,Bt=null,ir(e,t,i,6);break;case 8:Io(),st=6;break e;default:throw Error(c(462))}}xg();break}catch(le){jf(e,le)}while(!0);return xn=ma=null,F.H=a,F.A=r,Ge=n,Me!==null?0:(Je=null,Fe=0,Ri(),st)}function xg(){for(;Me!==null&&!W();)Mf(Me)}function Mf(e){var t=lf(e.alternate,e,In);e.memoizedProps=e.pendingProps,t===null?ls(e):Me=t}function Uf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ef(n,t,t.pendingProps,t.type,void 0,Fe);break;case 11:t=ef(n,t,t.pendingProps,t.type.render,t.ref,Fe);break;case 5:Gl(t);default:cf(n,t),t=Me=Lu(t,In),t=lf(n,t,In)}e.memoizedProps=e.pendingProps,t===null?ls(e):Me=t}function ir(e,t,n,a){xn=ma=null,Gl(t),Xa=null,jr=0;var r=t.return;try{if(og(e,r,t,n,Fe)){st=1,Xi(e,Zt(n,e.current)),Me=null;return}}catch(i){if(r!==null)throw Me=r,i;st=1,Xi(e,Zt(n,e.current)),Me=null;return}t.flags&32768?(Ve||a===1?e=!0:tr||(Fe&536870912)!==0?e=!1:(Yn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ut.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ff(t,e)):ls(t)}function ls(e){var t=e;do{if((t.flags&32768)!==0){Ff(t,Yn);return}e=t.return;var n=dg(t.alternate,t,In);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);st===0&&(st=5)}function Ff(e,t){do{var n=fg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);st=6,Me=null}function Bf(e,t,n,a,r,i,h,N,M){e.cancelPendingCommit=null;do os();while(pt!==0);if((Ge&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=vl,Jp(e,n,i,h,N,M),e===Je&&(Me=Je=null,Fe=0),ar=t,Zn=e,Dn=n,To=i,No=r,Cf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_g(Le,function(){return Gf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=F.T,F.T=null,r=V.p,V.p=2,h=Ge,Ge|=4;try{hg(e,t,n)}finally{Ge=h,V.p=r,F.T=a}}pt=1,Pf(),Vf(),Hf()}}function Pf(){if(pt===1){pt=0;var e=Zn,t=ar,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=F.T,F.T=null;var a=V.p;V.p=2;var r=Ge;Ge|=4;try{Sf(t,e);var i=Ho,h=Ru(e.containerInfo),N=i.focusedElem,M=i.selectionRange;if(h!==N&&N&&N.ownerDocument&&wu(N.ownerDocument.documentElement,N)){if(M!==null&&hl(N)){var K=M.start,le=M.end;if(le===void 0&&(le=K),"selectionStart"in N)N.selectionStart=K,N.selectionEnd=Math.min(le,N.value.length);else{var fe=N.ownerDocument||document,J=fe&&fe.defaultView||window;if(J.getSelection){var ne=J.getSelection(),Ee=N.textContent.length,Ce=Math.min(M.start,Ee),Ke=M.end===void 0?Ce:Math.min(M.end,Ee);!ne.extend&&Ce>Ke&&(h=Ke,Ke=Ce,Ce=h);var q=_u(N,Ce),B=_u(N,Ke);if(q&&B&&(ne.rangeCount!==1||ne.anchorNode!==q.node||ne.anchorOffset!==q.offset||ne.focusNode!==B.node||ne.focusOffset!==B.offset)){var Q=fe.createRange();Q.setStart(q.node,q.offset),ne.removeAllRanges(),Ce>Ke?(ne.addRange(Q),ne.extend(B.node,B.offset)):(Q.setEnd(B.node,B.offset),ne.addRange(Q))}}}}for(fe=[],ne=N;ne=ne.parentNode;)ne.nodeType===1&&fe.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<fe.length;N++){var ce=fe[N];ce.element.scrollLeft=ce.left,ce.element.scrollTop=ce.top}}xs=!!Vo,Ho=Vo=null}finally{Ge=r,V.p=a,F.T=n}}e.current=t,pt=2}}function Vf(){if(pt===2){pt=0;var e=Zn,t=ar,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=F.T,F.T=null;var a=V.p;V.p=2;var r=Ge;Ge|=4;try{gf(e,t.alternate,t)}finally{Ge=r,V.p=a,F.T=n}}pt=3}}function Hf(){if(pt===4||pt===3){pt=0,ye();var e=Zn,t=ar,n=Dn,a=Cf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,ar=Zn=null,$f(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Xn=null),Xs(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=F.T,r=V.p,V.p=2,F.T=null;try{for(var i=e.onRecoverableError,h=0;h<a.length;h++){var N=a[h];i(N.value,{componentStack:N.stack})}}finally{F.T=t,V.p=r}}(Dn&3)!==0&&os(),hn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Co?Qr++:(Qr=0,Co=e):Qr=0,Kr(0)}}function $f(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Dr(t)))}function os(){return Pf(),Vf(),Hf(),Gf()}function Gf(){if(pt!==5)return!1;var e=Zn,t=To;To=0;var n=Xs(Dn),a=F.T,r=V.p;try{V.p=32>n?32:n,F.T=null,n=No,No=null;var i=Zn,h=Dn;if(pt=0,ar=Zn=null,Dn=0,(Ge&6)!==0)throw Error(c(331));var N=Ge;if(Ge|=4,Rf(i.current),Af(i,i.current,h,n),Ge=N,Kr(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(We,i)}catch{}return!0}finally{V.p=r,F.T=a,$f(e,t)}}function Yf(e,t,n){t=Zt(n,t),t=so(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(yr(e,2),hn(e))}function Xe(e,t,n){if(e.tag===3)Yf(e,e,n);else for(;t!==null;){if(t.tag===3){Yf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Zt(n,e),n=Yd(2),a=Vn(t,n,2),a!==null&&(qd(n,a,t,e),yr(a,2),hn(a));break}}t=t.return}}function Oo(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new gg;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(_o=!0,r.add(n),e=Sg.bind(null,e,t,n),t.then(e,e))}function Sg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Je===e&&(Fe&n)===n&&(st===4||st===3&&(Fe&62914560)===Fe&&300>xe()-ns?(Ge&2)===0&&rr(e,0):wo|=n,nr===Fe&&(nr=0)),hn(e)}function qf(e,t){t===0&&(t=Bc()),e=fa(e,t),e!==null&&(yr(e,t),hn(e))}function Eg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function Ag(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),qf(e,n)}function _g(e,t){return he(e,t)}var cs=null,sr=null,jo=!1,us=!1,ko=!1,Kn=0;function hn(e){e!==sr&&e.next===null&&(sr===null?cs=sr=e:sr=sr.next=e),us=!0,jo||(jo=!0,Rg())}function Kr(e,t){if(!ko&&us){ko=!0;do for(var n=!1,a=cs;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var h=a.suspendedLanes,N=a.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=r&~(h&~N),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Kf(a,i))}else i=Fe,i=pi(a,a===Je?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||gr(a,i)||(n=!0,Kf(a,i));a=a.next}while(n);ko=!1}}function wg(){Xf()}function Xf(){us=jo=!1;var e=0;Kn!==0&&zg()&&(e=Kn);for(var t=xe(),n=null,a=cs;a!==null;){var r=a.next,i=Zf(a,t);i===0?(a.next=null,n===null?cs=r:n.next=r,r===null&&(sr=n)):(n=a,(e!==0||(i&3)!==0)&&(us=!0)),a=r}pt!==0&&pt!==5||Kr(e),Kn!==0&&(Kn=0)}function Zf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var h=31-rt(i),N=1<<h,M=r[h];M===-1?((N&n)===0||(N&a)!==0)&&(r[h]=Wp(N,t)):M<=t&&(e.expiredLanes|=N),i&=~N}if(t=Je,n=Fe,n=pi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&pe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||gr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&pe(a),Xs(n)){case 2:case 8:n=Ye;break;case 32:n=Le;break;case 268435456:n=jn;break;default:n=Le}return a=Qf.bind(null,e),n=he(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&pe(a),e.callbackPriority=2,e.callbackNode=null,2}function Qf(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(os()&&e.callbackNode!==n)return null;var a=Fe;return a=pi(e,e===Je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Df(e,a,t),Zf(e,xe()),e.callbackNode!=null&&e.callbackNode===n?Qf.bind(null,e):null)}function Kf(e,t){if(os())return null;Df(e,t,!0)}function Rg(){Ug(function(){(Ge&6)!==0?he(we,wg):Xf()})}function Lo(){if(Kn===0){var e=Ga;e===0&&(e=Ra,Ra<<=1,(Ra&261888)===0&&(Ra=256)),Kn=e}return Kn}function Wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function Jf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Tg(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=Wf((r[Ct]||null).action),h=a.submitter;h&&(t=(t=h[Ct]||null)?Wf(t.formAction):h.getAttribute("formAction"),t!==null&&(i=t,h=null));var N=new Ei("action","action",null,a,r);e.push({event:N,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kn!==0){var M=h?Jf(r,h):new FormData(r);eo(n,{pending:!0,data:M,method:r.method,action:i},null,M)}}else typeof i=="function"&&(N.preventDefault(),M=h?Jf(r,h):new FormData(r),eo(n,{pending:!0,data:M,method:r.method,action:i},i,M))},currentTarget:r}]})}}for(var zo=0;zo<yl.length;zo++){var Mo=yl[zo],Ng=Mo.toLowerCase(),Cg=Mo[0].toUpperCase()+Mo.slice(1);rn(Ng,"on"+Cg)}rn(Cu,"onAnimationEnd"),rn(Iu,"onAnimationIteration"),rn(Du,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Gm,"onTransitionRun"),rn(Ym,"onTransitionStart"),rn(qm,"onTransitionCancel"),rn(Ou,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wr));function eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var h=a.length-1;0<=h;h--){var N=a[h],M=N.instance,K=N.currentTarget;if(N=N.listener,M!==i&&r.isPropagationStopped())break e;i=N,r.currentTarget=K;try{i(r)}catch(le){wi(le)}r.currentTarget=null,i=M}else for(h=0;h<a.length;h++){if(N=a[h],M=N.instance,K=N.currentTarget,N=N.listener,M!==i&&r.isPropagationStopped())break e;i=N,r.currentTarget=K;try{i(r)}catch(le){wi(le)}r.currentTarget=null,i=M}}}}function Ue(e,t){var n=t[Zs];n===void 0&&(n=t[Zs]=new Set);var a=e+"__bubble";n.has(a)||(th(t,e,2,!1),n.add(a))}function Uo(e,t,n){var a=0;t&&(a|=4),th(n,e,a,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[ds]){e[ds]=!0,qc.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||Uo(n,!1,e),Uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,Uo("selectionchange",!1,t))}}function th(e,t,n,a){switch(Ih(t)){case 2:var r=r0;break;case 8:r=i0;break;default:r=ec}n=r.bind(null,t,n,e),r=void 0,!rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Bo(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var N=a.stateNode.containerInfo;if(N===r)break;if(h===4)for(h=a.return;h!==null;){var M=h.tag;if((M===3||M===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;N!==null;){if(h=Na(N),h===null)return;if(M=h.tag,M===5||M===6||M===26||M===27){a=i=h;continue e}N=N.parentNode}}a=a.return}iu(function(){var K=i,le=nl(n),fe=[];e:{var J=ju.get(e);if(J!==void 0){var ne=Ei,Ee=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":ne=Am;break;case"focusin":Ee="focus",ne=ol;break;case"focusout":Ee="blur",ne=ol;break;case"beforeblur":case"afterblur":ne=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Rm;break;case Cu:case Iu:case Du:ne=pm;break;case Ou:ne=Nm;break;case"scroll":case"scrollend":ne=cm;break;case"wheel":ne=Im;break;case"copy":case"cut":case"paste":ne=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=uu;break;case"toggle":case"beforetoggle":ne=Om}var Ce=(t&4)!==0,Ke=!Ce&&(e==="scroll"||e==="scrollend"),q=Ce?J!==null?J+"Capture":null:J;Ce=[];for(var B=K,Q;B!==null;){var ce=B;if(Q=ce.stateNode,ce=ce.tag,ce!==5&&ce!==26&&ce!==27||Q===null||q===null||(ce=xr(B,q),ce!=null&&Ce.push(Jr(B,ce,Q))),Ke)break;B=B.return}0<Ce.length&&(J=new ne(J,Ee,null,n,le),fe.push({event:J,listeners:Ce}))}}if((t&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",J&&n!==tl&&(Ee=n.relatedTarget||n.fromElement)&&(Na(Ee)||Ee[Ta]))break e;if((ne||J)&&(J=le.window===le?le:(J=le.ownerDocument)?J.defaultView||J.parentWindow:window,ne?(Ee=n.relatedTarget||n.toElement,ne=K,Ee=Ee?Na(Ee):null,Ee!==null&&(Ke=f(Ee),Ce=Ee.tag,Ee!==Ke||Ce!==5&&Ce!==27&&Ce!==6)&&(Ee=null)):(ne=null,Ee=K),ne!==Ee)){if(Ce=ou,ce="onMouseLeave",q="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=uu,ce="onPointerLeave",q="onPointerEnter",B="pointer"),Ke=ne==null?J:br(ne),Q=Ee==null?J:br(Ee),J=new Ce(ce,B+"leave",ne,n,le),J.target=Ke,J.relatedTarget=Q,ce=null,Na(le)===K&&(Ce=new Ce(q,B+"enter",Ee,n,le),Ce.target=Q,Ce.relatedTarget=Ke,ce=Ce),Ke=ce,ne&&Ee)t:{for(Ce=Dg,q=ne,B=Ee,Q=0,ce=q;ce;ce=Ce(ce))Q++;ce=0;for(var Re=B;Re;Re=Ce(Re))ce++;for(;0<Q-ce;)q=Ce(q),Q--;for(;0<ce-Q;)B=Ce(B),ce--;for(;Q--;){if(q===B||B!==null&&q===B.alternate){Ce=q;break t}q=Ce(q),B=Ce(B)}Ce=null}else Ce=null;ne!==null&&nh(fe,J,ne,Ce,!1),Ee!==null&&Ke!==null&&nh(fe,Ke,Ee,Ce,!0)}}e:{if(J=K?br(K):window,ne=J.nodeName&&J.nodeName.toLowerCase(),ne==="select"||ne==="input"&&J.type==="file")var He=vu;else if(gu(J))if(bu)He=Vm;else{He=Bm;var _e=Fm}else ne=J.nodeName,!ne||ne.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?K&&el(K.elementType)&&(He=vu):He=Pm;if(He&&(He=He(e,K))){yu(fe,He,n,le);break e}_e&&_e(e,J,K),e==="focusout"&&K&&J.type==="number"&&K.memoizedProps.value!=null&&Js(J,"number",J.value)}switch(_e=K?br(K):window,e){case"focusin":(gu(_e)||_e.contentEditable==="true")&&(Ma=_e,pl=K,Nr=null);break;case"focusout":Nr=pl=Ma=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Tu(fe,n,le);break;case"selectionchange":if($m)break;case"keydown":case"keyup":Tu(fe,n,le)}var ke;if(ul)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else za?pu(e,n)&&(Be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Be="onCompositionStart");Be&&(du&&n.locale!=="ko"&&(za||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&za&&(ke=su()):(Ln=le,il="value"in Ln?Ln.value:Ln.textContent,za=!0)),_e=fs(K,Be),0<_e.length&&(Be=new cu(Be,e,null,n,le),fe.push({event:Be,listeners:_e}),ke?Be.data=ke:(ke=mu(n),ke!==null&&(Be.data=ke)))),(ke=km?Lm(e,n):zm(e,n))&&(Be=fs(K,"onBeforeInput"),0<Be.length&&(_e=new cu("onBeforeInput","beforeinput",null,n,le),fe.push({event:_e,listeners:Be}),_e.data=ke)),Tg(fe,e,K,n,le)}eh(fe,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fs(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=xr(e,n),r!=null&&a.unshift(Jr(e,r,i)),r=xr(e,t),r!=null&&a.push(Jr(e,r,i))),e.tag===3)return a;e=e.return}return[]}function Dg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nh(e,t,n,a,r){for(var i=t._reactName,h=[];n!==null&&n!==a;){var N=n,M=N.alternate,K=N.stateNode;if(N=N.tag,M!==null&&M===a)break;N!==5&&N!==26&&N!==27||K===null||(M=K,r?(K=xr(n,i),K!=null&&h.unshift(Jr(n,K,M))):r||(K=xr(n,i),K!=null&&h.push(Jr(n,K,M)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Og=/\r\n?/g,jg=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(jg,"")}function rh(e,t){return t=ah(t),ah(e)===t}function Qe(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ja(e,""+a);break;case"className":gi(e,"class",a);break;case"tabIndex":gi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(e,n,a);break;case"style":au(e,a,i);break;case"data":if(t!=="object"){gi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=vi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Qe(e,t,"name",r.name,r,null),Qe(e,t,"formEncType",r.formEncType,r,null),Qe(e,t,"formMethod",r.formMethod,r,null),Qe(e,t,"formTarget",r.formTarget,r,null)):(Qe(e,t,"encType",r.encType,r,null),Qe(e,t,"method",r.method,r,null),Qe(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=vi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),mi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":mi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=lm.get(n)||n,mi(e,n,a))}}function Po(e,t,n,a,r,i){switch(n){case"style":au(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ja(e,a):(typeof a=="number"||typeof a=="bigint")&&ja(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[Ct]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):mi(e,n,a)}}}function Et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Qe(e,t,i,h,n,null)}}r&&Qe(e,t,"srcSet",n.srcSet,n,null),a&&Qe(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var N=i=h=r=null,M=null,K=null;for(a in n)if(n.hasOwnProperty(a)){var le=n[a];if(le!=null)switch(a){case"name":r=le;break;case"type":h=le;break;case"checked":M=le;break;case"defaultChecked":K=le;break;case"value":i=le;break;case"defaultValue":N=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(c(137,t));break;default:Qe(e,t,a,le,n,null)}}Jc(e,i,N,M,K,h,r,!1);return;case"select":Ue("invalid",e),a=h=i=null;for(r in n)if(n.hasOwnProperty(r)&&(N=n[r],N!=null))switch(r){case"value":i=N;break;case"defaultValue":h=N;break;case"multiple":a=N;default:Qe(e,t,r,N,n,null)}t=i,n=h,e.multiple=!!a,t!=null?Oa(e,!!a,t,!1):n!=null&&Oa(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=r=a=null;for(h in n)if(n.hasOwnProperty(h)&&(N=n[h],N!=null))switch(h){case"value":a=N;break;case"defaultValue":r=N;break;case"children":i=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(91));break;default:Qe(e,t,h,N,n,null)}tu(e,a,r,i);return;case"option":for(M in n)if(n.hasOwnProperty(M)&&(a=n[M],a!=null))switch(M){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Qe(e,t,M,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Wr.length;a++)Ue(Wr[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in n)if(n.hasOwnProperty(K)&&(a=n[K],a!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Qe(e,t,K,a,n,null)}return;default:if(el(t)){for(le in n)n.hasOwnProperty(le)&&(a=n[le],a!==void 0&&Po(e,t,le,a,n,void 0));return}}for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!=null&&Qe(e,t,N,a,n,null))}function kg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,h=null,N=null,M=null,K=null,le=null;for(ne in n){var fe=n[ne];if(n.hasOwnProperty(ne)&&fe!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":M=fe;default:a.hasOwnProperty(ne)||Qe(e,t,ne,null,a,fe)}}for(var J in a){var ne=a[J];if(fe=n[J],a.hasOwnProperty(J)&&(ne!=null||fe!=null))switch(J){case"type":i=ne;break;case"name":r=ne;break;case"checked":K=ne;break;case"defaultChecked":le=ne;break;case"value":h=ne;break;case"defaultValue":N=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(c(137,t));break;default:ne!==fe&&Qe(e,t,J,ne,a,fe)}}Ws(e,h,N,M,K,le,i,r);return;case"select":ne=h=N=J=null;for(i in n)if(M=n[i],n.hasOwnProperty(i)&&M!=null)switch(i){case"value":break;case"multiple":ne=M;default:a.hasOwnProperty(i)||Qe(e,t,i,null,a,M)}for(r in a)if(i=a[r],M=n[r],a.hasOwnProperty(r)&&(i!=null||M!=null))switch(r){case"value":J=i;break;case"defaultValue":N=i;break;case"multiple":h=i;default:i!==M&&Qe(e,t,r,i,a,M)}t=N,n=h,a=ne,J!=null?Oa(e,!!n,J,!1):!!a!=!!n&&(t!=null?Oa(e,!!n,t,!0):Oa(e,!!n,n?[]:"",!1));return;case"textarea":ne=J=null;for(N in n)if(r=n[N],n.hasOwnProperty(N)&&r!=null&&!a.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Qe(e,t,N,null,a,r)}for(h in a)if(r=a[h],i=n[h],a.hasOwnProperty(h)&&(r!=null||i!=null))switch(h){case"value":J=r;break;case"defaultValue":ne=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&Qe(e,t,h,r,a,i)}eu(e,J,ne);return;case"option":for(var Ee in n)if(J=n[Ee],n.hasOwnProperty(Ee)&&J!=null&&!a.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:Qe(e,t,Ee,null,a,J)}for(M in a)if(J=a[M],ne=n[M],a.hasOwnProperty(M)&&J!==ne&&(J!=null||ne!=null))switch(M){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Qe(e,t,M,J,a,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in n)J=n[Ce],n.hasOwnProperty(Ce)&&J!=null&&!a.hasOwnProperty(Ce)&&Qe(e,t,Ce,null,a,J);for(K in a)if(J=a[K],ne=n[K],a.hasOwnProperty(K)&&J!==ne&&(J!=null||ne!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(c(137,t));break;default:Qe(e,t,K,J,a,ne)}return;default:if(el(t)){for(var Ke in n)J=n[Ke],n.hasOwnProperty(Ke)&&J!==void 0&&!a.hasOwnProperty(Ke)&&Po(e,t,Ke,void 0,a,J);for(le in a)J=a[le],ne=n[le],!a.hasOwnProperty(le)||J===ne||J===void 0&&ne===void 0||Po(e,t,le,J,a,ne);return}}for(var q in n)J=n[q],n.hasOwnProperty(q)&&J!=null&&!a.hasOwnProperty(q)&&Qe(e,t,q,null,a,J);for(fe in a)J=a[fe],ne=n[fe],!a.hasOwnProperty(fe)||J===ne||J==null&&ne==null||Qe(e,t,fe,J,a,ne)}function ih(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,h=r.initiatorType,N=r.duration;if(i&&N&&ih(h)){for(h=0,N=r.responseEnd,a+=1;a<n.length;a++){var M=n[a],K=M.startTime;if(K>N)break;var le=M.transferSize,fe=M.initiatorType;le&&ih(fe)&&(M=M.responseEnd,h+=le*(M<N?1:(N-K)/(M-K)))}if(--a,t+=8*(i+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vo=null,Ho=null;function hs(e){return e.nodeType===9?e:e.ownerDocument}function sh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Go=null;function zg(){var e=window.event;return e&&e.type==="popstate"?e===Go?!1:(Go=e,!0):(Go=null,!1)}var oh=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(e){return ch.resolve(null).then(e).catch(Fg)}:oh;function Fg(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function uh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),ur(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ei(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ei(n);for(var i=n.firstChild;i;){var h=i.nextSibling,N=i.nodeName;i[vr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=h}}else n==="body"&&ei(e.ownerDocument.body);n=r}while(n);ur(t)}function dh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Yo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yo(n),Qs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Bg(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=en(e.nextSibling),e===null)break}return null}function Pg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=en(e.nextSibling),e===null))return null;return e}function fh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=en(e.nextSibling),e===null))return null;return e}function qo(e){return e.data==="$?"||e.data==="$~"}function Xo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zo=null;function hh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return en(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ph(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function mh(e,t,n){switch(t=hs(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ei(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qs(e)}var tn=new Map,gh=new Set;function ps(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=V.d;V.d={f:Hg,r:$g,D:Gg,C:Yg,L:qg,m:Xg,X:Qg,S:Zg,M:Kg};function Hg(){var e=On.f(),t=is();return e||t}function $g(e){var t=Ca(e);t!==null&&t.tag===5&&t.type==="form"?Od(t):On.r(e)}var lr=typeof document>"u"?null:document;function yh(e,t,n){var a=lr;if(a&&typeof t=="string"&&t){var r=qt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),gh.has(r)||(gh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function Gg(e){On.D(e),yh("dns-prefetch",e,null)}function Yg(e,t){On.C(e,t),yh("preconnect",e,t)}function qg(e,t,n){On.L(e,t,n);var a=lr;if(a&&e&&t){var r='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+qt(n.imageSizes)+'"]')):r+='[href="'+qt(e)+'"]';var i=r;switch(t){case"style":i=or(e);break;case"script":i=cr(e)}tn.has(i)||(e=_({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),tn.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(ti(i))||t==="script"&&a.querySelector(ni(i))||(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function Xg(e,t){On.m(e,t);var n=lr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+qt(a)+'"][href="'+qt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=cr(e)}if(!tn.has(i)&&(e=_({rel:"modulepreload",href:e},t),tn.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ni(i)))return}a=n.createElement("link"),Et(a,"link",e),gt(a),n.head.appendChild(a)}}}function Zg(e,t,n){On.S(e,t,n);var a=lr;if(a&&e){var r=Ia(a).hoistableStyles,i=or(e);t=t||"default";var h=r.get(i);if(!h){var N={loading:0,preload:null};if(h=a.querySelector(ti(i)))N.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},n),(n=tn.get(i))&&Qo(e,n);var M=h=a.createElement("link");gt(M),Et(M,"link",e),M._p=new Promise(function(K,le){M.onload=K,M.onerror=le}),M.addEventListener("load",function(){N.loading|=1}),M.addEventListener("error",function(){N.loading|=2}),N.loading|=4,ms(h,t,a)}h={type:"stylesheet",instance:h,count:1,state:N},r.set(i,h)}}}function Qg(e,t){On.X(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ni(r)),i||(e=_({src:e,async:!0},t),(t=tn.get(r))&&Ko(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function Kg(e,t){On.M(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ni(r)),i||(e=_({src:e,async:!0,type:"module"},t),(t=tn.get(r))&&Ko(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function vh(e,t,n,a){var r=(r=Ae.current)?ps(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=or(n.href),n=Ia(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=or(n.href);var i=Ia(r).hoistableStyles,h=i.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,h),(i=r.querySelector(ti(e)))&&!i._p&&(h.instance=i,h.state.loading=5),tn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},tn.set(e,n),i||Wg(r,e,n,h.state))),t&&a===null)throw Error(c(528,""));return h}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cr(n),n=Ia(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function or(e){return'href="'+qt(e)+'"'}function ti(e){return'link[rel="stylesheet"]['+e+"]"}function bh(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Wg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Et(t,"link",n),gt(t),e.head.appendChild(t))}function cr(e){return'[src="'+qt(e)+'"]'}function ni(e){return"script[async]"+e}function xh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+qt(n.href)+'"]');if(a)return t.instance=a,gt(a),a;var r=_({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),gt(a),Et(a,"style",r),ms(a,n.precedence,e),t.instance=a;case"stylesheet":r=or(n.href);var i=e.querySelector(ti(r));if(i)return t.state.loading|=4,t.instance=i,gt(i),i;a=bh(n),(r=tn.get(r))&&Qo(a,r),i=(e.ownerDocument||e).createElement("link"),gt(i);var h=i;return h._p=new Promise(function(N,M){h.onload=N,h.onerror=M}),Et(i,"link",a),t.state.loading|=4,ms(i,n.precedence,e),t.instance=i;case"script":return i=cr(n.src),(r=e.querySelector(ni(i)))?(t.instance=r,gt(r),r):(a=n,(r=tn.get(i))&&(a=_({},n),Ko(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),gt(r),Et(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ms(a,n.precedence,e));return t.instance}function ms(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,h=0;h<a.length;h++){var N=a[h];if(N.dataset.precedence===t)i=N;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ko(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gs=null;function Sh(e,t,n){if(gs===null){var a=new Map,r=gs=new Map;r.set(n,a)}else r=gs,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[vr]||i[vt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var h=i.getAttribute(t)||"";h=e+h;var N=a.get(h);N?N.push(i):a.set(h,[i])}}return a}function Eh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Jg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ah(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function e0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=or(a.href),i=t.querySelector(ti(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ys.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,gt(i);return}i=t.ownerDocument||t,a=bh(a),(r=tn.get(r))&&Qo(a,r),i=i.createElement("link"),gt(i);var h=i;h._p=new Promise(function(N,M){h.onload=N,h.onerror=M}),Et(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ys.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Wo=0;function t0(e,t){return e.stylesheets&&e.count===0&&bs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Wo===0&&(Wo=62500*Lg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Wo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function ys(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vs=null;function bs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vs=new Map,t.forEach(n0,e),vs=null,ys.call(e))}function n0(e,t){if(!(t.state.loading&4)){var n=vs.get(e);if(n)var a=n.get(null);else{n=new Map,vs.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var h=r[i];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}r=t.instance,h=r.getAttribute("data-precedence"),i=n.get(h)||a,i===a&&n.set(null,r),n.set(h,r),this.count++,a=ys.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ai={$$typeof:j,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function a0(e,t,n,a,r,i,h,N,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.hiddenUpdates=Ys(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function _h(e,t,n,a,r,i,h,N,M,K,le,fe){return e=new a0(e,t,n,h,M,K,le,fe,N),t=1,i===!0&&(t|=24),i=Mt(3,null,null,t),e.current=i,i.stateNode=e,t=Il(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},kl(i),e}function wh(e){return e?(e=Ba,e):Ba}function Rh(e,t,n,a,r,i){r=wh(r),a.context===null?a.context=r:a.pendingContext=r,a=Pn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Vn(e,a,t),n!==null&&(Lt(n,e,t),Lr(n,e,t))}function Th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jo(e,t){Th(e,t),(e=e.alternate)&&Th(e,t)}function Nh(e){if(e.tag===13||e.tag===31){var t=fa(e,67108864);t!==null&&Lt(t,e,67108864),Jo(e,67108864)}}function Ch(e){if(e.tag===13||e.tag===31){var t=Vt();t=qs(t);var n=fa(e,t);n!==null&&Lt(n,e,t),Jo(e,t)}}var xs=!0;function r0(e,t,n,a){var r=F.T;F.T=null;var i=V.p;try{V.p=2,ec(e,t,n,a)}finally{V.p=i,F.T=r}}function i0(e,t,n,a){var r=F.T;F.T=null;var i=V.p;try{V.p=8,ec(e,t,n,a)}finally{V.p=i,F.T=r}}function ec(e,t,n,a){if(xs){var r=tc(a);if(r===null)Bo(e,t,a,Ss,n),Dh(e,a);else if(l0(r,e,t,n,a))a.stopPropagation();else if(Dh(e,a),t&4&&-1<s0.indexOf(e)){for(;r!==null;){var i=Ca(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var h=Gt(i.pendingLanes);if(h!==0){var N=i;for(N.pendingLanes|=2,N.entangledLanes|=2;h;){var M=1<<31-rt(h);N.entanglements[1]|=M,h&=~M}hn(i),(Ge&6)===0&&(as=xe()+500,Kr(0))}}break;case 31:case 13:N=fa(i,2),N!==null&&Lt(N,i,2),is(),Jo(i,2)}if(i=tc(a),i===null&&Bo(e,t,a,Ss,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else Bo(e,t,a,null,n)}}function tc(e){return e=nl(e),nc(e)}var Ss=null;function nc(e){if(Ss=null,e=Na(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ss=e,null}function Ih(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case we:return 2;case Ye:return 8;case Le:case Nt:return 32;case jn:return 268435456;default:return 32}default:return 32}}var ac=!1,Jn=null,ea=null,ta=null,ri=new Map,ii=new Map,na=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dh(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function si(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ca(t),t!==null&&Nh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function l0(e,t,n,a,r){switch(t){case"focusin":return Jn=si(Jn,e,t,n,a,r),!0;case"dragenter":return ea=si(ea,e,t,n,a,r),!0;case"mouseover":return ta=si(ta,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return ri.set(i,si(ri.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,ii.set(i,si(ii.get(i)||null,e,t,n,a,r)),!0}return!1}function Oh(e){var t=Na(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Gc(e.priority,function(){Ch(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,Gc(e.priority,function(){Ch(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);tl=a,n.target.dispatchEvent(a),tl=null}else return t=Ca(n),t!==null&&Nh(t),e.blockedOn=n,!1;t.shift()}return!0}function jh(e,t,n){Es(e)&&n.delete(t)}function o0(){ac=!1,Jn!==null&&Es(Jn)&&(Jn=null),ea!==null&&Es(ea)&&(ea=null),ta!==null&&Es(ta)&&(ta=null),ri.forEach(jh),ii.forEach(jh)}function As(e,t){e.blockedOn===t&&(e.blockedOn=null,ac||(ac=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,o0)))}var _s=null;function kh(e){_s!==e&&(_s=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){_s===e&&(_s=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(nc(a||n)===null)continue;break}var i=Ca(n);i!==null&&(e.splice(t,3),t-=3,eo(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function ur(e){function t(M){return As(M,e)}Jn!==null&&As(Jn,e),ea!==null&&As(ea,e),ta!==null&&As(ta,e),ri.forEach(t),ii.forEach(t);for(var n=0;n<na.length;n++){var a=na[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)Oh(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],h=r[Ct]||null;if(typeof i=="function")h||kh(n);else if(h){var N=null;if(i&&i.hasAttribute("formAction")){if(r=i,h=i[Ct]||null)N=h.formAction;else if(nc(r)!==null)continue}else N=h.action;typeof N=="function"?n[a+1]=N:(n.splice(a,3),a-=3),kh(n)}}}function Lh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function rc(e){this._internalRoot=e}ws.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Vt();Rh(n,a,e,t,null,null)},ws.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rh(e.current,2,null,e,null,null),is(),t[Ta]=null}};function ws(e){this._internalRoot=e}ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=$c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&Oh(e)}};var zh=o.version;if(zh!=="19.2.1")throw Error(c(527,zh,"19.2.1"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var c0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{We=Rs.inject(c0),mt=Rs}catch{}}return oi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",r=Vd,i=Hd,h=$d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=_h(e,1,!1,null,null,n,a,null,r,i,h,Lh),e[Ta]=t.current,Fo(e),new rc(t)},oi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,r="",i=Vd,h=Hd,N=$d,M=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(N=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),t=_h(e,1,!0,t,n??null,a,r,M,i,h,N,Lh),t.context=wh(null),n=t.current,a=Vt(),a=qs(a),r=Pn(a),r.callback=null,Vn(n,r,a),n=a,t.current.lanes=n,yr(t,n),hn(t),e[Ta]=t.current,Fo(e),new ws(t)},oi.version="19.2.1",oi}var Yh;function x0(){if(Yh)return lc.exports;Yh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),lc.exports=b0(),lc.exports}var S0=x0();const E0=Ic(S0);var me=(u=>(u.SETUP="ICISsetup",u.BUILDER="ICISbuilder",u.REVIEWER="ICISreviewer",u.SUPERVISOR="ICISsupervisor",u.REVISER="ICISreviser",u.FINALIZE="ICISfinalize",u))(me||{}),Ie=(u=>(u.PENDING="pending",u.ACTIVE="active",u.COMPLETED="completed",u.ERROR="error",u.SKIPPED="skipped",u))(Ie||{}),dr=(u=>(u.SIMULATION="Simulation & Computational Modeling",u.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",u.SECONDARY_DATA="Secondary data analysis",u.EXPERIMENTAL="Laboratory & field experiments",u.SURVEY="Survey research",u))(dr||{}),ze=(u=>(u.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",u.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",u.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",u.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",u.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",u.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",u.STEP5_EXECUTION="Step 5: Experiment Execution",u.STEP6_VISUALIZATION="Step 6: Results Visualization",u.STEP7_ANALYSIS="Step 7: Results Analysis",u.STEP8_PAPER_WRITING="Step 8: Paper Writing",u.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",u))(ze||{});function A0(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const qh={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:A0(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]},lp="/icis",_0={[me.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText"},[me.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer"},[me.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search"},[me.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck"},[me.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3"},[me.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send"}},op={[ze.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[ze.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[ze.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[ze.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[ze.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[ze.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[ze.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[ze.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[ze.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[ze.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[ze.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};dr.SIMULATION+"",dr.ANALYTICAL+"",dr.SECONDARY_DATA+"",dr.EXPERIMENTAL+"",dr.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R0=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,l,c)=>c?c.toUpperCase():l.toLowerCase()),Xh=u=>{const o=R0(u);return o.charAt(0).toUpperCase()+o.slice(1)},cp=(...u)=>u.filter((o,l,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===l).join(" ").trim(),T0=u=>{for(const o in u)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=be.forwardRef(({color:u="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:f,iconNode:m,...y},v)=>be.createElement("svg",{ref:v,...N0,width:o,height:o,stroke:u,strokeWidth:c?Number(l)*24/Number(o):l,className:cp("lucide",d),...!f&&!T0(y)&&{"aria-hidden":"true"},...y},[...m.map(([p,w])=>be.createElement(p,w)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(u,o)=>{const l=be.forwardRef(({className:c,...d},f)=>be.createElement(C0,{ref:f,iconNode:o,className:cp(`lucide-${w0(Xh(u))}`,`lucide-${u}`,c),...d}));return l.displayName=Xh(u),l};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],D0=Oe("activity",I0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],j0=Oe("archive",O0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],L0=Oe("arrow-left",k0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],gc=Oe("chart-column",z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],on=Oe("check",M0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],yc=Oe("chevron-down",U0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],up=Oe("chevron-right",F0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],js=Oe("circle-alert",B0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],V0=Oe("circle-check-big",P0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],vc=Oe("circle-check",H0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Zh=Oe("circle-play",$0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],dp=Oe("circle-stop",G0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Qh=Oe("circle",Y0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],X0=Oe("copy",q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ks=Oe("download",Z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],fp=Oe("ellipsis-vertical",Q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],W0=Oe("external-link",K0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],bc=Oe("eye",J0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],ty=Oe("fast-forward",ey);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Us=Oe("file-text",ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ry=Oe("folder-plus",ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],sy=Oe("hammer",iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],oy=Oe("link",ly);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Kh=Oe("loader-circle",cy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],dy=Oe("loader",uy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],hy=Oe("lock",fy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M5 12h14",key:"1ays0h"}]],my=Oe("minus",py);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],yy=Oe("pen-line",gy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],xc=Oe("play",vy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],nn=Oe("refresh-cw",by);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Is=Oe("rotate-ccw",xy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ey=Oe("save",Sy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hp=Oe("search",Ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Oc=Oe("send",_y);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Wh=Oe("skip-forward",wy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ty=Oe("trash-2",Ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Cy=Oe("trending-down",Ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],pp=Oe("trending-up",Iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Sc=Oe("triangle-alert",Dy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],mp=Oe("upload",Oy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ky=Oe("user-check",jy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],zy=Oe("user",Ly);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],gp=Oe("users",My);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fy=Oe("x",Uy),By=({currentStage:u,currentBuilderStep:o,stagesState:l,isPartialPaper:c=!1,currentRound:d=1,isProcessing:f=!1,onStageClick:m,onStageAction:y,onNewCase:v,onNewInterview:p,onPaperToInterview:w,onResearchAdmin:_,paperMode:T="draft",onPaperModeChange:S})=>{const[R,g]=be.useState(null),E=be.useRef(null);be.useEffect(()=>{const U=ae=>{E.current&&!E.current.contains(ae.target)&&g(null)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const A=(U,ae)=>{const ee=[];switch(ae){case Ie.ACTIVE:ee.push({action:"abort",label:"Abort",icon:s.jsx(dp,{size:14})});break;case Ie.COMPLETED:ee.push({action:"restart",label:"Restart",icon:s.jsx(Is,{size:14})});break;case Ie.ERROR:ee.push({action:"restart",label:"Retry",icon:s.jsx(Is,{size:14})});break;case Ie.PENDING:const k=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],Z=k.indexOf(U),x=Z>0?k[Z-1]:null,G=!x||l[x]===Ie.COMPLETED;ee.push({action:"start",label:"Start",icon:s.jsx(xc,{size:14}),disabled:!G||f}),U!==me.SETUP&&U!==me.FINALIZE&&ee.push({action:"skip",label:"Skip",icon:s.jsx(ty,{size:14}),disabled:f});break;case Ie.SKIPPED:ee.push({action:"restart",label:"Unskip & Run",icon:s.jsx(Is,{size:14})});break}return ee},I=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],j={[me.SETUP]:s.jsx(Us,{size:16}),[me.BUILDER]:s.jsx(sy,{size:16}),[me.REVIEWER]:s.jsx(hp,{size:16}),[me.SUPERVISOR]:s.jsx(ky,{size:16}),[me.REVISER]:s.jsx(yy,{size:16}),[me.FINALIZE]:s.jsx(Oc,{size:16})},P=U=>{switch(U){case Ie.COMPLETED:return s.jsx(vc,{size:16,className:"text-emerald-500"});case Ie.ACTIVE:return s.jsx(Zh,{size:16,className:"text-red-500 animate-pulse"});case Ie.ERROR:return s.jsx(js,{size:16,className:"text-red-500"});case Ie.SKIPPED:return s.jsx(Wh,{size:16,className:"text-slate-400"});default:return s.jsx(Qh,{size:16,className:"text-slate-500"})}},D=[ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION],X=U=>c?[ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS].includes(U):!1,H=U=>{if(X(U))return"skipped";const ae=D.indexOf(U),ee=o?D.indexOf(o):-1;return U===o?"active":ee>ae?"completed":"pending"},$=u===me.BUILDER||l[me.BUILDER]===Ie.ACTIVE;return s.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[s.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[s.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"ICIScopilot",s.jsx("span",{className:"text-emerald-500",children:"1"})]}),s.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Automated Science Discovery"})]}),d>1&&s.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),s.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",d]})]})}),c&&s.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:s.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[s.jsx(js,{size:12}),s.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),s.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[s.jsx("button",{onClick:()=>S==null?void 0:S("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${T==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),s.jsx("button",{onClick:()=>S==null?void 0:S("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${T==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),p&&s.jsx("button",{onClick:p,className:"w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition-colors",children:"Voice Interview"}),w&&s.jsx("button",{onClick:w,className:"w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors",children:"Paper to Interview"}),v&&s.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&v()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),_&&s.jsxs("button",{onClick:_,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[s.jsx(gp,{size:16}),"Research Admin"]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:I.map(U=>{const ae=l[U],ee=ae===Ie.ACTIVE,k=ae===Ie.COMPLETED,Z=ae===Ie.SKIPPED,x=u===U,G=_0[U],F=A(U,ae);return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${ee?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":k?"border-emerald-500/50 bg-slate-900/50":Z?"border-slate-700 bg-slate-900/30 opacity-60":x?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>m(U),children:[s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`${ee?"text-red-400":k?"text-emerald-400":"text-slate-400"}`,children:j[U]}),s.jsx("span",{className:`font-medium text-sm ${ee||x?"text-white":""}`,children:G.label})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[U===me.BUILDER&&($?s.jsx(yc,{size:14}):s.jsx(up,{size:14})),P(ae),y&&F.length>0&&s.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:V=>{V.stopPropagation(),g(R===U?null:U)},children:s.jsx(fp,{size:14,className:"text-slate-400"})})]})]}),s.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:G.description}),G.promptFile&&s.jsx("div",{className:"mt-2 pl-6",children:s.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:G.promptFile})})]}),R===U&&y&&s.jsx("div",{ref:E,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:F.map(({action:V,label:ue,icon:te,disabled:ge})=>s.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${ge?"text-slate-600 cursor-not-allowed":V==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:C=>{C.stopPropagation(),ge||(y(U,V),g(null))},disabled:ge,children:[te,ue]},V))}),U===me.BUILDER&&$&&s.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:D.map(V=>{const ue=op[V],te=H(V);return s.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${te==="active"?"bg-red-900/30 text-red-300":te==="completed"?"text-emerald-400":te==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[te==="active"&&s.jsx(Zh,{size:12,className:"animate-pulse"}),te==="completed"&&s.jsx(vc,{size:12}),te==="skipped"&&s.jsx(Wh,{size:12}),te==="pending"&&s.jsx(Qh,{size:12}),s.jsxs("span",{children:[ue.label,": ",ue.description]})]},V)})})]},U)})}),s.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:s.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Directory:"}),s.jsx("span",{className:"text-slate-400",children:lp})]}),s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Paper Version:"}),s.jsxs("span",{className:"text-slate-400",children:["v",d]})]})]})})]})},ui="icis_files_";class Ds extends Error{constructor(o,l,c){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.name="StorageError"}}function yp(){try{const u="__storage_test__";return localStorage.setItem(u,u),localStorage.removeItem(u),!0}catch{return!1}}function pr(u,o){var c;if(!yp())throw new Ds("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const l=ui+u.replace(/\\/g,"/");try{localStorage.setItem(l,o),console.log(`File written: ${u}`)}catch(d){const f=d;throw f.name==="QuotaExceededError"||(c=f.message)!=null&&c.includes("quota")?new Ds("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",f.message):new Ds("WRITE_ERROR",`Failed to save file: ${u}`,f.message)}}function Fs(u){if(!yp())return console.warn("localStorage unavailable, returning null for read"),null;const o=ui+u.replace(/\\/g,"/");try{return localStorage.getItem(o)}catch(l){const c=l;throw console.error(`Error reading file ${u}:`,c),new Ds("READ_ERROR",`Failed to read file: ${u}`,c.message)}}function Py(u){const o=[],l=new RegExp(u.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let c=0;c<localStorage.length;c++){const d=localStorage.key(c);if(d&&d.startsWith(ui)){const f=d.substring(ui.length);l.test(f)&&o.push(f)}}return o.sort()}function vp(u){const o=`icis/Data/oversight_v${u.version}.txt`,l=Vy(u);return pr(o,l),pr(o+".json",JSON.stringify(u,null,2)),o}function Vy(u){const o=[];o.push(`ID=${u.paperId}`),o.push(`Version: ${u.version}`),o.push(`Timestamp: ${u.timestamp}`),o.push(""),o.push("================================================================================"),o.push("                     OVERSIGHT DASHBOARD"),o.push("================================================================================"),o.push(""),o.push("TABLE 1 - Review Scores Progression:"),o.push("------------------------------------------------------------------------"),o.push("| Criteria              | Score | Comment                              |"),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| Novelty               | ${u.reviewScores.novelty}     | ${u.reviewComments.novelty.substring(0,36).padEnd(36)} |`),o.push(`| Significance          | ${u.reviewScores.significance}     | ${u.reviewComments.significance.substring(0,36).padEnd(36)} |`),o.push(`| Methodological Rigor  | ${u.reviewScores.methodologicalRigor}     | ${u.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),o.push(`| Clarity               | ${u.reviewScores.clarity}     | ${u.reviewComments.clarity.substring(0,36).padEnd(36)} |`),o.push(`| Relevance             | ${u.reviewScores.relevance}     | ${u.reviewComments.relevance.substring(0,36).padEnd(36)} |`),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| AVERAGE               | ${u.averageScore.toFixed(1)}   |                                      |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 2 - Error Counts:"),o.push("------------------------------------------------------------------------"),o.push("| Category        | Count | Details                                  |"),o.push("|-----------------|-------|------------------------------------------|");const l=u.errorDetails.majorErrors.length>0?u.errorDetails.majorErrors[0].substring(0,40):"None",c=u.errorDetails.minorErrors.length>0?u.errorDetails.minorErrors[0].substring(0,40):"None";if(o.push(`| Major Errors    | ${String(u.errorCounts.majorErrors).padStart(5)} | ${l.padEnd(40)} |`),o.push(`| Minor Errors    | ${String(u.errorCounts.minorErrors).padStart(5)} | ${c.padEnd(40)} |`),o.push("|-----------------|-------|------------------------------------------|"),o.push(`| TOTAL           | ${String(u.errorCounts.majorErrors+u.errorCounts.minorErrors).padStart(5)} |                                          |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),o.push("------------------------------------------------------------------------"),o.push("| Dimension       | Score | Rationale                               |"),o.push("|-----------------|-------|-----------------------------------------|"),o.push(`| Reliability     | ${u.trustworthiness.reliability}     | ${u.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),o.push(`| Benevolence     | ${u.trustworthiness.benevolence}     | ${u.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),o.push(`| Goal Alignment  | ${u.trustworthiness.goalAlignment}     | ${u.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("CRITICAL ALERTS:"),o.push("------------------------------------------------------------------------"),u.criticalAlerts.length===0)o.push("None - paper is progressing well");else for(const d of u.criticalAlerts)o.push(`CRITICAL ALERT ${d.number}: ${d.title} (BLOCKING ISSUE)`),o.push(`  Status: ${d.status}`),o.push(`  Impact: ${d.impact}`),o.push(`  Details: ${d.details}`),o.push(`  Action Required: ${d.actionRequired}`),o.push(`  Consequence if Unfixed: ${d.consequence}`),o.push("");return o.push("------------------------------------------------------------------------"),o.push(""),o.push("================================================================================"),o.join(`
`)}function jc(u){const o=`icis/Data/feedback_v${u.version}.txt`,l=[];if(l.push(`ID=${u.paperId}`),l.push(`Version: ${u.version}`),l.push(`Timestamp: ${u.timestamp}`),l.push(""),l.push("================================================================================"),l.push("                     CONSTRUCTIVE FEEDBACK"),l.push("================================================================================"),l.push(""),l.push("## Research Question and Contribution"),l.push(u.researchQuestion),l.push(""),l.push("## Method"),l.push(u.method),l.push(""),l.push("## Potential Impact"),l.push(u.potentialImpact),l.push(""),l.push("## Writing Quality"),l.push(u.writing),l.push(""),l.push("## Major Concerns"),u.majorConcerns.forEach((d,f)=>{l.push(`${f+1}. ${d}`)}),l.push(""),l.push("## Minor Corrections"),u.minorCorrections.forEach((d,f)=>{l.push(`${f+1}. ${d}`)}),l.push(""),l.push("## Overall Assessment"),l.push(u.overallAssessment),l.push(""),u.supervisorDirectives&&u.supervisorDirectives.length>0){l.push("================================================================================"),l.push("                     SUPERVISOR DIRECTIVES"),l.push("================================================================================");for(const d of u.supervisorDirectives)l.push(""),l.push(`Cycle ${d.cycle} - ${d.timestamp}`),l.push("------------------------------------------------------------------------"),l.push(d.directives)}l.push(""),l.push("================================================================================");const c=l.join(`
`);return pr(o,c),pr(o+".json",JSON.stringify(u,null,2)),o}function Os(u){const o=`icis/Data/oversight_v${u}.txt.json`,l=Fs(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse oversight JSON:",c)}return null}function ci(u){const o=`icis/Data/feedback_v${u}.txt.json`,l=Fs(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse feedback JSON:",c)}return null}function kc(){const u=Py("icis/Data/oversight_v.*\\.txt\\.json"),o=[];for(const l of u){const c=Fs(l);if(c)try{o.push(JSON.parse(c))}catch(d){console.error("Failed to parse oversight file:",l,d)}}return o.sort((l,c)=>l.version-c.version)}function Jh(u,o,l){const c=ci(u);c&&(c.supervisorDirectives||(c.supervisorDirectives=[]),c.supervisorDirectives.push({cycle:o,directives:l,timestamp:new Date().toISOString()}),jc(c))}function ep(u,o,l){const c="icis/Data/supervisor_decision.txt",d=[];return d.push(`Decision: ${u}`),d.push(`Cycle: ${o}`),d.push(`Timestamp: ${new Date().toISOString()}`),pr(c,d.join(`
`)),c}function Hy(){const u=[];for(let o=0;o<localStorage.length;o++){const l=localStorage.key(o);l&&l.startsWith(ui)&&u.push(l)}u.forEach(o=>localStorage.removeItem(o)),console.log(`Cleared ${u.length} files`)}function tp(u,o,l="icis_paper"){const c=`icis/Paper/${l}_v${u}.tex`;return pr(c,o),console.log(`Paper saved: ${c}`),c}function ra(u,o="icis_paper"){const l=`icis/Paper/${o}_v${u}.tex`;return Fs(l)}function $y(u,o="icis_paper"){const l=ra(u,o);if(!l){console.error(`Paper version ${u} not found`);return}const c=`${o}_v${u}.tex`,d=new Blob([l],{type:"text/plain;charset=utf-8"}),f=URL.createObjectURL(d),m=document.createElement("a");m.href=f,m.download=c,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(f),console.log(`Downloaded: ${c}`)}const di=({logs:u,height:o="h-64"})=>{const l=be.useRef(null);return be.useEffect(()=>{var c;(c=l.current)==null||c.scrollIntoView({behavior:"smooth"})},[u]),s.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${o} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[u.length===0?s.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):u.map((c,d)=>s.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:c},d)),s.jsx("div",{ref:l})]})},Gy=({currentStep:u})=>{if(!u)return null;const o=op[u];return s.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:s.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[s.jsx(nn,{size:16,className:"animate-spin"}),s.jsx("span",{className:"font-medium",children:o.label}),s.jsxs("span",{className:"text-indigo-500",children:["- ",o.description]})]})})},Lc=({stageName:u,isProcessing:o,canAbort:l,canRestart:c,onAbort:d,onRestart:f})=>{const[m,y]=be.useState(null),v=()=>{o&&y("abort")},p=()=>{y("restart")},w=()=>{m==="abort"?d():m==="restart"&&f(),y(null)};return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex gap-2",children:[l&&o&&s.jsxs("button",{onClick:v,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[s.jsx(dp,{size:14}),"Abort"]}),c&&!o&&s.jsxs("button",{onClick:p,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[s.jsx(Is,{size:14}),"Restart"]})]}),m&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:s.jsx(Sc,{className:"text-amber-600",size:24})}),s.jsx("h3",{className:"text-lg font-bold text-slate-800",children:m==="abort"?"Abort Stage?":"Restart Stage?"})]}),s.jsx("p",{className:"text-slate-600 mb-6",children:m==="abort"?s.jsxs(s.Fragment,{children:["Are you sure you want to abort the ",s.jsx("strong",{children:u})," stage? Any progress will be lost and you may need to restart the stage."]}):s.jsxs(s.Fragment,{children:["Are you sure you want to restart the ",s.jsx("strong",{children:u})," stage? This will reset the stage and you'll need to run it again."]})}),s.jsxs("div",{className:"flex gap-3 justify-end",children:[s.jsx("button",{onClick:()=>y(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),s.jsx("button",{onClick:w,className:`px-4 py-2 text-white rounded-lg transition-colors ${m==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:m==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},dc=({label:u,accept:o=".txt",multiple:l=!1,required:c=!1,file:d,onFileSelect:f})=>{const m=be.useRef(null),y=()=>{var w;(w=m.current)==null||w.click()},v=w=>{var T;const _=((T=w.target.files)==null?void 0:T[0])||null;f(_)},p=w=>{w.stopPropagation(),f(null),m.current&&(m.current.value="")};return s.jsxs("div",{onClick:y,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${d?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(mp,{size:16,className:d?"text-emerald-600":"text-slate-400"}),s.jsxs("span",{className:"text-sm",children:[d?d.name:u,c&&!d&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),d?s.jsx("button",{onClick:p,className:"p-1 hover:bg-emerald-200 rounded",children:s.jsx(Fy,{size:16,className:"text-emerald-600"})}):s.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),s.jsx("input",{ref:m,type:"file",accept:o,multiple:l,onChange:v,className:"hidden"})]})},Yy=({logs:u,stageStatus:o,isProcessing:l,uploadedFiles:c,onFileChange:d,onAction:f,detectionStatus:m,onRefreshDetection:y,hasExistingCase:v=!1})=>{const[p,w]=be.useState(!1),_=c.template&&c.interview,T=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(w(!0),f("NEW_CASE"),setTimeout(()=>w(!1),2e3))};return s.jsxs("div",{className:"space-y-6 max-w-2xl mx-auto mt-10",children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(Us,{className:"text-indigo-600"}),"Setup & File Selection"]}),v&&s.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(j0,{className:"text-blue-600",size:24}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),s.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),s.jsx("button",{onClick:T,disabled:p,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:p?s.jsxs(s.Fragment,{children:[s.jsx(nn,{className:"animate-spin",size:18}),"Backing up..."]}):s.jsxs(s.Fragment,{children:[s.jsx(ry,{size:18}),"New Project"]})})]})}),m&&s.jsxs("div",{className:`p-4 rounded-lg border ${m.loading?"bg-blue-50 border-blue-200":m.detected.interview?"bg-green-50 border-green-200":"bg-amber-50 border-amber-200"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[m.loading?s.jsxs(s.Fragment,{children:[s.jsx(dy,{className:"animate-spin text-blue-600",size:18}),s.jsx("span",{className:"text-blue-800 font-medium",children:"Detecting files in Data folder..."})]}):m.detected.interview?s.jsxs(s.Fragment,{children:[s.jsx(V0,{className:"text-green-600",size:18}),s.jsx("span",{className:"text-green-800 font-medium",children:"Files auto-detected!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(js,{className:"text-amber-600",size:18}),s.jsx("span",{className:"text-amber-800 font-medium",children:"No files detected - upload manually"})]}),y&&!m.loading&&s.jsxs("button",{onClick:y,className:"ml-auto text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1",children:[s.jsx(nn,{size:14}),"Refresh"]})]}),!m.loading&&m.detected.interview&&s.jsxs("div",{className:"mt-3 space-y-1 text-sm",children:[s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Interview:"})," ",m.detected.interview.filename]}),m.detected.participantId&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Participant ID:"})," ",m.detected.participantId]}),m.detected.template&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Template:"})," ",m.detected.template.filename]}),m.detected.dataFile&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Data File:"})," ",m.detected.dataFile.filename]})]})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:m!=null&&m.detected.interview?"Detected Files":"Select Your Files"}),s.jsx("p",{className:"text-sm text-slate-500",children:m!=null&&m.detected.interview?"Files were automatically loaded from the Data folder. You can still upload different files if needed.":"Upload the required files to begin the paper generation process."}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(dc,{label:"icisTemplate.txt (Required)",accept:".txt",required:!0,file:c.template,onFileSelect:S=>d("template",S)}),s.jsx(dc,{label:"Interview transcript (Required)",accept:".txt",required:!0,file:c.interview,onFileSelect:S=>d("interview",S)}),s.jsx(dc,{label:"Data file (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:c.dataFile,onFileSelect:S=>d("dataFile",S)})]}),c.participantId&&s.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg",children:s.jsxs("p",{className:"text-sm text-indigo-800",children:[s.jsx("strong",{children:"Participant ID:"})," ",c.participantId]})}),s.jsx(di,{logs:u,height:"h-32"}),s.jsx("div",{className:"pt-4 border-t border-slate-100 flex justify-end gap-3",children:s.jsxs("button",{onClick:()=>f("START_SETUP"),disabled:l||!_,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[l?s.jsx(nn,{className:"animate-spin",size:18}):s.jsx(xc,{size:18}),"Verify Files"]})}),!_&&!(m!=null&&m.loading)&&s.jsx("p",{className:"text-xs text-amber-600 text-center",children:"Please upload the required files (template and interview) to proceed."})]}),o===Ie.COMPLETED&&s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),s.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),s.jsxs("button",{onClick:()=>f("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(xc,{size:18}),"Start Building Paper"]})]}),s.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3",children:[s.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),s.jsx("button",{onClick:()=>f("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})},qy=({logs:u,isProcessing:o,isPartialPaper:l,currentBuilderStep:c,paperContent:d,onAbort:f,onRestart:m})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(nn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Building Research Paper",l&&s.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),s.jsx(Lc,{stageName:"Builder",isProcessing:o,canAbort:!0,canRestart:!o&&!!d,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(Gy,{currentStep:c}),s.jsx(di,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:d?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:d}):s.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),Xy=({allOversight:u,compact:o=!1})=>{if(u.length===0)return null;const l=(_,T)=>T>_?"up":T<_?"down":"same",c=({trend:_,size:T=14})=>_==="up"?s.jsx(pp,{size:T,className:"text-emerald-500"}):_==="down"?s.jsx(Cy,{size:T,className:"text-red-500"}):s.jsx(my,{size:T,className:"text-slate-400"}),d=(_,T=4)=>_>=T?"text-emerald-600":_>=T-1?"text-amber-600":"text-red-600",f=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],m=u[0],y=u[u.length-1],v=u.length>1,p=v?((y.averageScore-m.averageScore)/m.averageScore*100).toFixed(1):"0",w=v?Math.round((1-(y.errorCounts.majorErrors+y.errorCounts.minorErrors)/Math.max(1,m.errorCounts.majorErrors+m.errorCounts.minorErrors))*100):0;return o?s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(gc,{size:18,className:"text-indigo-600"}),s.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),v&&s.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(p)>0?"bg-emerald-100 text-emerald-700":parseFloat(p)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(p)>0?"+":"",p,"% overall"]})]}),s.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:f.map(({key:_,label:T})=>{const S=m.reviewScores[_]||0,R=y.reviewScores[_]||0,g=l(S,R);return s.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[s.jsx("div",{className:"text-slate-500 truncate mb-1",children:T}),s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx("span",{className:`font-bold ${d(R)}`,children:R}),v&&s.jsx(c,{trend:g,size:12})]}),v&&S!==R&&s.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",S]})]},_)})}),s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Average:"}),s.jsx("span",{className:`font-bold ${d(y.averageScore)}`,children:y.averageScore.toFixed(1)}),v&&s.jsxs(s.Fragment,{children:[s.jsx(c,{trend:l(m.averageScore,y.averageScore)}),s.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",m.averageScore.toFixed(1),")"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Errors:"}),s.jsx("span",{className:`font-bold ${y.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:y.errorCounts.majorErrors+y.errorCounts.minorErrors}),v&&w!==0&&s.jsxs("span",{className:`text-xs ${w>0?"text-emerald-600":"text-red-600"}`,children:["(",w>0?"-":"+",Math.abs(w),"%)"]})]})]}),v&&s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[s.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",u.length," rounds):"]}),s.jsx("div",{className:"flex gap-1",children:u.map((_,T)=>s.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${T===u.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",_.version,": ",_.averageScore.toFixed(1)]},T))})]})]}):s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(gc,{size:20,className:"text-indigo-600"}),s.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),v&&s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(p)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(p)>0?"+":"",p,"% score change"]}),s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${w>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[w>0?"-":"+",Math.abs(w),"% errors"]})]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-200",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),u.map((_,T)=>s.jsxs("th",{className:`text-center p-2 ${T===u.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",_.version]},T)),v&&s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),s.jsxs("tbody",{children:[f.map(({key:_,label:T})=>{const S=u.map(g=>g.reviewScores[_]||0),R=v?l(S[0],S[S.length-1]):"same";return s.jsxs("tr",{className:"border-b border-slate-100",children:[s.jsx("td",{className:"p-2 font-medium",children:T}),S.map((g,E)=>s.jsx("td",{className:`text-center p-2 ${E===S.length-1?"bg-indigo-50/50":""} ${d(g)}`,children:g},E)),v&&s.jsx("td",{className:"text-center p-2",children:s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx(c,{trend:R}),R==="up"&&s.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",S[S.length-1]-S[0]]}),R==="down"&&s.jsx("span",{className:"text-red-600 text-xs",children:S[S.length-1]-S[0]})]})})]},_)}),s.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"Average"}),u.map((_,T)=>s.jsx("td",{className:`text-center p-2 ${T===u.length-1?"bg-indigo-100":""} ${d(_.averageScore)}`,children:_.averageScore.toFixed(1)},T)),v&&s.jsx("td",{className:"text-center p-2",children:s.jsx("div",{className:"flex items-center justify-center gap-1",children:s.jsx(c,{trend:l(m.averageScore,y.averageScore)})})})]})]})]})}),s.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[s.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((_,T)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${T===u.length-1?_.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",_.version,": ",_.errorCounts.majorErrors]},T))})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((_,T)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${T===u.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",_.version,": ",_.errorCounts.minorErrors]},T))})]})]})]})]})},an="http://localhost:3001/api";function mr(){return{"Content-Type":"application/json"}}let ct=null;async function pn(){try{const u=new AbortController,o=setTimeout(()=>u.abort(),1e3),l=await fetch(`${an}/health`,{signal:u.signal});return clearTimeout(o),ct=(await l.json()).status==="ok",ct}catch{return ct=!1,!1}}async function bp(){var u,o;try{const l=await fetch(`${an}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!l.ok)return{success:!1,error:`Server error: ${l.status}`};const c=await l.json();return c.success&&console.log("[FileApi] Manifest refreshed:",(o=(u=c.manifest)==null?void 0:u.files)==null?void 0:o.map(d=>d.filename)),c}catch(l){return console.error("[FileApi] Failed to refresh manifest:",l),{success:!1,error:l.message}}}function zc(u,o,l="text/plain"){const c=new Blob([o],{type:l}),d=URL.createObjectURL(c),f=document.createElement("a");f.href=d,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d)}async function Ec(u,o){if(ct===null&&await pn(),ct)try{const c=await(await fetch(`${an}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json();if(c.success)return c}catch{console.warn("Backend save failed, falling back to download")}try{return zc(u,o,"application/x-tex"),{success:!0,path:`Downloads/${u}`}}catch(l){return{success:!1,error:l.message}}}async function Ac(u,o){const l=typeof o=="string"?o:JSON.stringify(o,null,2);if(ct===null&&await pn(),ct)try{const d=await(await fetch(`${an}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:l})})).json();if(d.success)return d}catch{console.warn("Backend save failed, falling back to download")}try{return zc(u,l,"application/json"),{success:!0,path:`Downloads/${u}`}}catch(c){return{success:!1,error:c.message}}}async function xp(u){if(ct===null&&await pn(),ct)try{const l=await(await fetch(`${an}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:u})})).json();if(l.success)return l}catch{console.warn("Backend save failed, falling back to downloads")}try{const o=[];for(const l of u){const c=typeof l.content=="string"?l.content:JSON.stringify(l.content,null,2),d=l.directory==="paper"?"application/x-tex":"application/json";await new Promise(f=>setTimeout(f,200)),zc(l.filename,c,d),o.push(l.filename)}return{success:!0,files:o}}catch(o){return{success:!1,error:o.message}}}async function Sp(u,o,l,c,d,f){const m=d?`${d}_`:"",y=await xp([{directory:"data",filename:`${m}oversight_v${u}.json`,content:o},{directory:"data",filename:`${m}feedback_v${u}.json`,content:l},{directory:"paper",filename:`${m}icis_paper_v${u}.tex`,content:c}]);if(f)try{const v="https://icis-deploy-12-10-2025.vercel.app";v&&(await fetch(`${v}/api/participants`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,oversight:o,feedback:l,round:u})}),console.log(`[FileApi] Saved oversight/feedback v${u} to blob for ${f}`))}catch(v){console.warn("[FileApi] Failed to save to blob:",v)}return y}const ia="https://icis-deploy-12-10-2025.vercel.app";let wa=null;async function Ep(u,o,l){const c=(o.match(/\\begin\{tikzpicture\}/g)||[]).length,d=(l==null?void 0:l.length)||0,f=Math.round(o.length/1024),m=Up(),y=!!m;try{console.log(`[LaTeX] Compiling via Vercel cloud... (${f} KB, ${c} TikZ, ${d} PNG figures${y?", with .bib":""})`);const v=new AbortController,p=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),v.abort()},3e5),w={filename:u,content:o,figures:l};m&&(w.bibliography=m);let _;try{_=await fetch(`${ia}/api/compile-latex`,{method:"POST",headers:mr(),signal:v.signal,body:JSON.stringify(w)}),clearTimeout(p)}catch(S){if(clearTimeout(p),S.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${c} TikZ figures may be too complex.`};throw S}const T=await _.json();return T.success&&T.pdfBase64?(wa={filename:T.pdfFilename,base64:T.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${T.pdfFilename}`)):T.success||console.warn(`[LaTeX] Cloud compilation failed: ${T.error}`),T}catch(v){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",v)}if(ct===null&&await pn(),!ct)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${an}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json()}catch(v){return{success:!1,error:`Compilation request failed: ${v.message}`}}}function Mc(){if(!wa)return null;const u=atob(wa.base64),o=new Uint8Array(u.length);for(let c=0;c<u.length;c++)o[c]=u.charCodeAt(c);const l=new Blob([o],{type:"application/pdf"});return{filename:wa.filename,blob:l}}function Ap(u){return`${an}/get-pdf/${encodeURIComponent(u)}`}async function _p(u){const o=Mc();if(o&&o.filename===u){const d=URL.createObjectURL(o.blob),f=document.createElement("a");f.href=d,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d);return}const l=Ap(u),c=document.createElement("a");c.href=l,c.download=u,document.body.appendChild(c),c.click(),document.body.removeChild(c)}async function wp(u){if(!wa)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const l=await(await fetch(`${ia}/api/create-viewer-link`,{method:"POST",headers:mr(),body:JSON.stringify({filename:wa.filename,pdfBase64:wa.base64})})).json();if(l.success)return console.log(`[Viewer] Link created: ${l.fullUrl}`),l;console.warn("[Viewer] Cloud API returned error:",l.error)}catch(o){console.warn("[Viewer] Cloud API failed:",o)}if(ct===null&&await pn(),!ct)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${an}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:u})})).json()}catch(o){return{success:!1,error:`Failed to create viewer link: ${o.message}`}}}function Rp(u){window.open(u,"_blank","noopener,noreferrer")}async function Tp(u){if(ct===null&&await pn(),!ct)return{success:!1,error:"Backend server not available"};try{return await(await fetch(`${an}/read-pdf/${encodeURIComponent(u)}`)).json()}catch(o){return{success:!1,error:o.message}}}async function Bs(u,o="full"){var l;try{console.log(`[Cloud Python] Analyzing data (${u.length} chars, type: ${o})...`);const d=await(await fetch(`${ia}/api/analyze-data`,{method:"POST",headers:mr(),body:JSON.stringify({csvContent:u,analysisType:o})})).json();return d.success?console.log(`[Cloud Python] Analysis complete: ${((l=d.figures)==null?void 0:l.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${d.error}`),d}catch(c){return console.error("[Cloud Python] Error:",c),{success:!1,error:c.message}}}async function Np(u,o,l){const c=fi();if(c!=null&&c.content&&ia){console.log("[executePythonScript] Trying cloud Python analysis...");const d=await Bs(c.content,"full");if(d.success){const f=[];return d.chart_data&&d.chart_data.forEach((m,y)=>{f.push({filename:`${m.type}_${m.column||m.x_column||y}.json`,path:`cloud://chart_data/${y}`,size:JSON.stringify(m).length,base64:btoa(JSON.stringify(m))})}),{success:!0,stdout:d.text_summary||"",dataFileFound:!0,generatedFigures:f}}}if(ct===null&&await pn(),!ct)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${u}, dataFile=${l||"UNDEFINED"}`);const d={filename:u,code:o,dataFile:l};console.log("[executePythonScript] Request body dataFile:",d.dataFile);const m=await(await fetch(`${an}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${m.dataFileFound}, dataFilePath=${m.dataFilePath||"NONE"}`),m}catch(d){return{success:!1,error:`Python execution request failed: ${d.message}`}}}async function Cp(){if(ct===null&&await pn(),!ct)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${an}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(u){return{success:!1,error:`Backup request failed: ${u.message}`}}}let At=null;async function Ip(u){try{const o=await u.arrayBuffer(),l=btoa(new Uint8Array(o).reduce((f,m)=>f+String.fromCharCode(m),""));console.log(`[Cloud Upload] Uploading ${u.name} (${u.size} bytes)...`);const d=await(await fetch(`${ia}/api/upload-data`,{method:"POST",headers:mr(),body:JSON.stringify({filename:u.name,content:l,contentType:u.type})})).json();return d.success&&(At={filename:u.name,blobUrl:d.blobUrl},console.log(`[Cloud Upload] Success: ${d.blobUrl}`)),d}catch(o){return console.error("[Cloud Upload] Error:",o),{success:!1,error:o.message}}}function fi(){return At}async function Dp(){if(!At||!At.blobUrl)return console.log("[Cloud Delete] No data file to delete"),{success:!0};try{console.log(`[Cloud Delete] Deleting: ${At.blobUrl}`);const o=await(await fetch(`${ia}/api/delete-data`,{method:"POST",headers:mr(),body:JSON.stringify({blobUrl:At.blobUrl})})).json();return o.success&&(console.log("[Cloud Delete] Data file deleted successfully"),At=null),o}catch(u){return console.error("[Cloud Delete] Error:",u),{success:!1,error:u.message}}}function Op(){At=null}async function _c(u){try{console.log(`[Cloud Read] Reading from: ${u}`);const l=await(await fetch(`${ia}/api/read-data?url=${encodeURIComponent(u)}`)).json();return l.success&&At&&(At.content=l.content),l}catch(o){return console.error("[Cloud Read] Error:",o),{success:!1,error:o.message}}}async function jp(u){if(At&&At.filename===u&&At.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),_c(At.blobUrl);if(ct===null&&await pn(),!ct)return At&&At.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),_c(At.blobUrl)):{success:!1,error:"Backend server not available"};try{const l=await(await fetch(`${an}/read-file/data/${encodeURIComponent(u)}`)).json();if(!l.success)return{success:!1,error:l.error||"Failed to read file"};const c=l.content,d=c.split(/\r?\n/),f=d[0]||"",m=d.filter(y=>y.trim()).length;return{success:!0,filename:u,firstLine:f,totalLines:m,content:c}}catch(o){return{success:!1,error:o.message}}}async function Zy(u){if(!u||u.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${u.length} figures via QuickChart.io...`);const l=await(await fetch(`${ia}/api/quickchart`,{method:"POST",headers:mr(),body:JSON.stringify({chartData:u})})).json();return l.success?console.log(`[QuickChart] Generated ${l.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${l.error}`),l}catch(o){return console.error("[QuickChart] Error:",o),{success:!1,error:o.message}}}let Ls=[];function kp(){return Ls}async function Lp(){const u=[];for(const o of Ls)try{const l=await fetch(o.blobUrl);if(l.ok){const c=await l.blob();u.push({filename:o.filename,blob:c})}else console.warn(`[PNG Figures] Failed to download ${o.filename}: ${l.status}`)}catch(l){console.warn(`[PNG Figures] Error downloading ${o.filename}:`,l)}return console.log(`[PNG Figures] Downloaded ${u.length}/${Ls.length} figures`),u}let wc=[];function Qy(u){wc=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:o.base64})),Ls=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${o.base64}`,description:o.description||""})),console.log(`[PNG Storage] Stored ${wc.length} PNG figures for LaTeX compilation and download`)}function zp(){return wc}let Uc=null;function Mp(u,o){Uc={filename:u,content:o},console.log(`[Bibliography] Stored ${u} (${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries)`)}function Up(){return Uc}function Fp(){return Uc}let fr=null;function Ky(u,o){const l=['"""',"ICIScopilot - Visualization Code",`Generated: ${new Date().toISOString()}`,o?"Data Source: AI-synthesized illustrative data":"Data Source: User-provided data file","","This script reproduces the figures generated for your research paper.","Requirements: pip install matplotlib numpy",'"""',"","import matplotlib.pyplot as plt","import numpy as np","","# Set publication-quality defaults","plt.rcParams.update({",'    "font.size": 12,','    "axes.titlesize": 14,','    "axes.labelsize": 12,','    "figure.figsize": (10, 6),','    "figure.dpi": 150',"})",""];return u.forEach((c,d)=>{var f,m,y,v,p,w,_,T;if(l.push("# ============================================================================"),l.push(`# Figure ${d+1}: ${c.title||"Untitled"}`),l.push("# ============================================================================"),l.push(""),l.push(`fig${d+1}, ax${d+1} = plt.subplots()`),l.push(""),c.type==="bar")l.push("# Bar chart data"),l.push(`labels_${d+1} = ${JSON.stringify(c.labels||[])}`),c.datasets&&c.datasets.length>0&&(c.datasets.forEach((S,R)=>{l.push(`data_${d+1}_${R} = ${JSON.stringify(S.data||[])}`)}),c.datasets.length===1?l.push(`ax${d+1}.bar(labels_${d+1}, data_${d+1}_0, color='steelblue')`):(l.push(`x = np.arange(len(labels_${d+1}))`),l.push(`width = ${(.8/c.datasets.length).toFixed(2)}`),c.datasets.forEach((S,R)=>{const g=R-(c.datasets.length-1)/2;l.push(`ax${d+1}.bar(x + ${g.toFixed(2)}*width, data_${d+1}_${R}, width, label='${S.label||`Series ${R+1}`}')`)}),l.push(`ax${d+1}.set_xticks(x)`),l.push(`ax${d+1}.set_xticklabels(labels_${d+1})`),l.push(`ax${d+1}.legend()`)));else if(c.type==="line")l.push("# Line chart data"),l.push(`labels_${d+1} = ${JSON.stringify(c.labels||[])}`),c.datasets&&c.datasets.length>0&&(c.datasets.forEach((S,R)=>{l.push(`data_${d+1}_${R} = ${JSON.stringify(S.data||[])}`),l.push(`ax${d+1}.plot(labels_${d+1}, data_${d+1}_${R}, marker='o', label='${S.label||`Series ${R+1}`}')`)}),c.datasets.length>1&&l.push(`ax${d+1}.legend()`));else if(c.type==="pie"||c.type==="doughnut")l.push("# Pie chart data"),l.push(`labels_${d+1} = ${JSON.stringify(c.labels||[])}`),c.datasets&&c.datasets[0]&&(l.push(`data_${d+1} = ${JSON.stringify(c.datasets[0].data||[])}`),l.push(`ax${d+1}.pie(data_${d+1}, labels=labels_${d+1}, autopct='%1.1f%%')`));else if(c.type==="scatter"){if(l.push("# Scatter plot data"),c.datasets&&c.datasets[0]&&c.datasets[0].data){const S=c.datasets[0].data;l.push(`x_${d+1} = ${JSON.stringify(S.map(R=>R.x||R))}`),l.push(`y_${d+1} = ${JSON.stringify(S.map(R=>R.y||R))}`),l.push(`ax${d+1}.scatter(x_${d+1}, y_${d+1}, alpha=0.6)`)}}else l.push(`# ${c.type} chart - data structure:`),l.push(`chart_config_${d+1} = ${JSON.stringify(c,null,2).split(`
`).map((S,R)=>R===0?S:"# "+S).join(`
`)}`);l.push(""),l.push(`ax${d+1}.set_title('${(c.title||"").replace(/'/g,"\\'")}')`),(v=(y=(m=(f=c.options)==null?void 0:f.scales)==null?void 0:m.x)==null?void 0:y.title)!=null&&v.text&&l.push(`ax${d+1}.set_xlabel('${c.options.scales.x.title.text}')`),(T=(_=(w=(p=c.options)==null?void 0:p.scales)==null?void 0:w.y)==null?void 0:_.title)!=null&&T.text&&l.push(`ax${d+1}.set_ylabel('${c.options.scales.y.title.text}')`),l.push("plt.tight_layout()"),l.push(`fig${d+1}.savefig('figure_${d+1}.png', dpi=300, bbox_inches='tight')`),l.push(`print(f"Saved figure_${d+1}.png")`),l.push("")}),l.push("# Show all figures"),l.push("plt.show()"),l.push(""),l.push(`print("\\nGenerated ${u.length} figures successfully!")`),l.join(`
`)}function Wy(u,o){const l=Ky(u,o);fr={chartData:u,pythonCode:l,isSynthetic:o,generatedAt:new Date().toISOString()},console.log(`[Chart Data] Stored ${u.length} chart configs and Python code (${l.length} chars)`)}function Bp(){return fr?{chartDataJson:JSON.stringify(fr.chartData,null,2),pythonCode:fr.pythonCode,isSynthetic:fr.isSynthetic}:null}function Pp(){fr=null}const fc=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:Bs,backupAndClearFiles:Cp,checkBackendHealth:pn,clearChartData:Pp,clearCloudDataFile:Op,compileLaTeX:Ep,createViewerLink:wp,deleteCloudDataFile:Dp,downloadAllFigures:Lp,downloadCompiledPdf:_p,executePythonScript:Np,generateQuickChartFigures:Zy,getBibliographyContent:Fp,getBibliographyForCompilation:Up,getChartDataContent:Bp,getCloudDataFile:fi,getCurrentSessionFigures:kp,getDataFilePreview:jp,getLastCompiledPdfBlob:Mc,getPdfDownloadUrl:Ap,getPngFiguresForCompilation:zp,openPaperViewer:Rp,readCloudDataFile:_c,readPdfFile:Tp,refreshManifest:bp,saveDataFile:Ac,saveFiles:xp,savePaperFile:Ec,saveReviewOutputs:Sp,storeBibliography:Mp,storeChartData:Wy,storePngFiguresForCompilation:Qy,uploadDataFileToCloud:Ip},Symbol.toStringTag,{value:"Module"})),Jy=({logs:u,isProcessing:o,currentRound:l,isComplete:c=!1,onProceedToSupervisor:d,onAbort:f,onRestart:m,filePrefix:y,participantEmail:v})=>{const[p,w]=be.useState([]),[_,T]=be.useState(null),[S,R]=be.useState(!1),[g,E]=be.useState({}),A=async()=>{R(!0),T(null);const D=Os(l),X=ci(l),H=ra(l,"icis_paper");if(!D||!X||!H){T("Missing files to save"),R(!1);return}const $=await Sp(l,D,X,H,y,v);$.success?w($.files||[]):T($.error||"Failed to save files"),R(!1)},I=async(D,X)=>{var U;const H=(U=D.target.files)==null?void 0:U[0];if(!H)return;const $=await H.text();try{const ae=JSON.parse($);E(ee=>({...ee,[X]:ae}))}catch(ae){console.error(`Failed to parse ${X} file:`,ae)}},j=()=>{const D=g.oversight||Os(l),X=g.feedback||ci(l),H=ra(l,"icis_paper");D&&X&&H&&d&&d({oversight:D,feedback:X,paperContent:H,paperVersion:l})},P=c&&(g.oversight&&g.feedback||Os(l)&&ci(l));return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(nn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Reviewing Paper (Round ",l,")"]}),s.jsx(Lc,{stageName:"Reviewer",isProcessing:o,canAbort:!0,canRestart:!o&&c,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(di,{logs:u,height:"h-48"}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${o?"bg-indigo-100 text-indigo-600":c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:o?s.jsx(nn,{size:14,className:"animate-spin"}):c?s.jsx(on,{size:14}):"1"}),s.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"2"}),s.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"3"}),s.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),c&&s.jsx("div",{className:"mt-6",children:s.jsx(Xy,{allOversight:kc(),compact:!0})}),c&&s.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[s.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[s.jsx(ks,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),s.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),s.jsxs("button",{onClick:A,disabled:S,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[s.jsx(ks,{size:16,className:S?"animate-pulse":""}),S?"Downloading...":"Download Review Outputs"]}),s.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",l,".json, feedback_v",l,".json, icis_paper_v",l,".tex"]}),p.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",p.join(", ")]}),_&&s.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",_]}),s.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[s.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[s.jsx(mp,{size:16}),"Upload Modified Files (Optional)"]}),s.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",g.oversight&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:D=>I(D,"oversight"),className:"text-xs w-full"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",g.feedback&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:D=>I(D,"feedback"),className:"text-xs w-full"})]})]})]}),s.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:s.jsxs("button",{onClick:j,disabled:!P,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",s.jsx(up,{size:18})]})})]})]})},ev=({currentRound:u,currentPaperVersion:o,lastFeedback:l,isProcessing:c,oversightData:d,allOversight:f,onAction:m,reviewOutputFiles:y})=>{var k,Z;const[v,p]=be.useState(""),[w,_]=be.useState(!1),[T,S]=be.useState(!1),[R,g]=be.useState(!1),E=(y==null?void 0:y.oversight)||d,A=y==null?void 0:y.feedback,I=()=>{$y(o,"icis_paper")},j=(y==null?void 0:y.paperContent)||ra(o,"icis_paper"),P=y?"Uploaded/Downloaded files":"Internal storage",D=(E==null?void 0:E.averageScore)||0,X=(E==null?void 0:E.errorCounts.majorErrors)||0,H=E?E.reviewScores.novelty<4||E.reviewScores.significance<4||E.reviewScores.methodologicalRigor<4||E.reviewScores.clarity<4||E.reviewScores.relevance<4:!1,$=E?E.trustworthiness.reliability<5||E.trustworthiness.benevolence<5||E.trustworthiness.goalAlignment<5:!1,U=((E==null?void 0:E.criticalAlerts.length)||0)>0,ae=H||$||X>0||U,ee=!ae&&D>=4;return s.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[s.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),s.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",u]}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),s.jsx("div",{className:`p-4 font-mono text-sm ${ae?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:s.jsxs("div",{className:"font-bold",children:["STATUS: ",ae?"⚠️ ATTENTION NEEDED":ee?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(Us,{size:16,className:"text-slate-600"}),s.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),s.jsx("span",{className:"text-slate-600",children:P})]}),s.jsx("button",{onClick:()=>g(!R),className:"text-xs text-indigo-600 hover:underline",children:R?"Hide Details":"Show Details"})]}),R&&s.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),s.jsxs("p",{className:"text-slate-600",children:["oversight_v",(E==null?void 0:E.version)||u,".json",(y==null?void 0:y.oversight)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),s.jsxs("p",{className:"text-slate-600",children:["feedback_v",(A==null?void 0:A.version)||u,".json",(y==null?void 0:y.feedback)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),s.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(y==null?void 0:y.paperVersion)||o,".tex",(y==null?void 0:y.paperContent)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),s.jsx("p",{className:y?"text-emerald-600":"text-slate-600",children:y?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),f.map((x,G)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",x.version]},G)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),s.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(x=>{var F;const G=x==="Methodological Rigor"?"methodologicalRigor":x.toLowerCase();return s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:x}),f.map((V,ue)=>{const te=V.reviewScores[G]||0;return s.jsx("td",{className:`text-center p-2 ${te<4?"text-red-600 font-bold":""}`,children:te},ue)}),s.jsx("td",{className:"p-2 text-slate-600 text-xs",children:E!=null&&E.reviewComments?((F=E.reviewComments[G])==null?void 0:F.substring(0,30))+"...":"-"})]},x)}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"AVERAGE"}),f.map((x,G)=>s.jsx("td",{className:"text-center p-2",children:x.averageScore.toFixed(1)},G)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?f[f.length-1].averageScore>f[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),f.map((x,G)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",x.version]},G)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Remaining Issues"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),f.map((x,G)=>s.jsx("td",{className:`text-center p-2 ${x.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:x.errorCounts.majorErrors},G)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((k=E==null?void 0:E.errorDetails.majorErrors[0])==null?void 0:k.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),f.map((x,G)=>s.jsx("td",{className:"text-center p-2",children:x.errorCounts.minorErrors},G)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((Z=E==null?void 0:E.errorDetails.minorErrors[0])==null?void 0:Z.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"TOTAL"}),f.map((x,G)=>s.jsx("td",{className:"text-center p-2",children:x.errorCounts.majorErrors+x.errorCounts.minorErrors},G)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?`${Math.round((1-(f[f.length-1].errorCounts.majorErrors+f[f.length-1].errorCounts.minorErrors)/Math.max(1,f[0].errorCounts.majorErrors+f[0].errorCounts.minorErrors))*100)}% reduction`:"-"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),s.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.reliability)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.reliabilityRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),s.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.benevolence)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.benevolenceRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),s.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.goalAlignment)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${U?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),U?s.jsx("div",{className:"space-y-3",children:E==null?void 0:E.criticalAlerts.map((x,G)=>s.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[s.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",x.number,": ",x.title," (BLOCKING ISSUE)"]}),s.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Status:"})," ",x.status]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Impact:"})," ",x.impact]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Details:"})," ",x.details]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Action Required:"})," ",x.actionRequired]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Consequence:"})," ",x.consequence]})]})]},G))}):s.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),s.jsxs("button",{onClick:()=>_(!w),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[s.jsx(bc,{size:12}),w?"Hide Full":"Show Full"]})]}),w?s.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:A?s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Summary:"}),s.jsx("p",{children:A.summary||"No summary available."})]}),A.majorIssues&&A.majorIssues.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-red-600",children:"Major Issues:"}),s.jsx("ul",{className:"list-disc list-inside",children:A.majorIssues.map((x,G)=>s.jsx("li",{children:x},G))})]}),A.suggestions&&A.suggestions.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Suggestions:"}),s.jsx("ul",{className:"list-disc list-inside",children:A.suggestions.map((x,G)=>s.jsx("li",{children:x},G))})]})]}):s.jsx("p",{children:l||"No feedback generated."})}):s.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(A==null?void 0:A.summary)||l||"No feedback generated."})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${ae?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),ae?s.jsxs("div",{children:[s.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",u+1]}),s.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",H?"Review scores below threshold (< 4)":X>0?`${X} major error(s) remaining`:$?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),s.jsxs("div",{className:"mt-2 text-sm",children:[s.jsx("p",{className:"font-medium",children:"Priority actions:"}),s.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:E==null?void 0:E.errorDetails.majorErrors.slice(0,3).map((x,G)=>s.jsx("li",{children:x},G))})]})]}):s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),s.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),s.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[s.jsxs("li",{children:["Average review score: ",D.toFixed(1),"/5"]}),s.jsx("li",{children:"All trustworthiness scores ≥ 5"}),s.jsx("li",{children:"No major errors remaining"}),s.jsx("li",{children:"No critical alerts"})]})]})]}),s.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),s.jsx("li",{children:"• Current feedback will guide improvements"}),s.jsx("li",{children:"• Add your directives below"})]})]}),s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISfinalize"}),s.jsx("li",{children:"• Paper will be prepared for submission"}),s.jsx("li",{children:"• No further revisions will be made"})]})]})]})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),s.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:v,onChange:x=>p(x.target.value)})]}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("button",{onClick:()=>m("revise",v),disabled:c,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),s.jsx("button",{onClick:()=>m("finalize"),disabled:c,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]})]}),s.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[s.jsxs("button",{onClick:()=>S(!T),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(bc,{size:14})," ",T?"Hide":"View"," Paper Draft"]}),s.jsxs("button",{onClick:I,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(ks,{size:14})," Download (.tex)"]})]}),T&&j&&s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",o,"):"]}),s.jsx("div",{className:"max-h-96 overflow-y-auto",children:s.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:j})})]})]})},tv=({logs:u,isProcessing:o,currentPaperVersion:l,paperContent:c,onAbort:d,onRestart:f})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(nn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Revising Paper (v",l," → v",(l||0)+1,")"]}),s.jsx(Lc,{stageName:"Reviser",isProcessing:o,canAbort:!0,canRestart:!o,onAbort:d||(()=>{}),onRestart:f||(()=>{})})]}),s.jsx(di,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),s.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:c?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:c}):s.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function Ns(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var hc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var np;function nv(){return np||(np=1,(function(u,o){(function(l){u.exports=l()})(function(){return(function l(c,d,f){function m(p,w){if(!d[p]){if(!c[p]){var _=typeof Ns=="function"&&Ns;if(!w&&_)return _(p,!0);if(y)return y(p,!0);var T=new Error("Cannot find module '"+p+"'");throw T.code="MODULE_NOT_FOUND",T}var S=d[p]={exports:{}};c[p][0].call(S.exports,function(R){var g=c[p][1][R];return m(g||R)},S,S.exports,l,c,d,f)}return d[p].exports}for(var y=typeof Ns=="function"&&Ns,v=0;v<f.length;v++)m(f[v]);return m})({1:[function(l,c,d){var f=l("./utils"),m=l("./support"),y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";d.encode=function(v){for(var p,w,_,T,S,R,g,E=[],A=0,I=v.length,j=I,P=f.getTypeOf(v)!=="string";A<v.length;)j=I-A,_=P?(p=v[A++],w=A<I?v[A++]:0,A<I?v[A++]:0):(p=v.charCodeAt(A++),w=A<I?v.charCodeAt(A++):0,A<I?v.charCodeAt(A++):0),T=p>>2,S=(3&p)<<4|w>>4,R=1<j?(15&w)<<2|_>>6:64,g=2<j?63&_:64,E.push(y.charAt(T)+y.charAt(S)+y.charAt(R)+y.charAt(g));return E.join("")},d.decode=function(v){var p,w,_,T,S,R,g=0,E=0,A="data:";if(v.substr(0,A.length)===A)throw new Error("Invalid base64 input, it looks like a data url.");var I,j=3*(v=v.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(v.charAt(v.length-1)===y.charAt(64)&&j--,v.charAt(v.length-2)===y.charAt(64)&&j--,j%1!=0)throw new Error("Invalid base64 input, bad content length.");for(I=m.uint8array?new Uint8Array(0|j):new Array(0|j);g<v.length;)p=y.indexOf(v.charAt(g++))<<2|(T=y.indexOf(v.charAt(g++)))>>4,w=(15&T)<<4|(S=y.indexOf(v.charAt(g++)))>>2,_=(3&S)<<6|(R=y.indexOf(v.charAt(g++))),I[E++]=p,S!==64&&(I[E++]=w),R!==64&&(I[E++]=_);return I}},{"./support":30,"./utils":32}],2:[function(l,c,d){var f=l("./external"),m=l("./stream/DataWorker"),y=l("./stream/Crc32Probe"),v=l("./stream/DataLengthProbe");function p(w,_,T,S,R){this.compressedSize=w,this.uncompressedSize=_,this.crc32=T,this.compression=S,this.compressedContent=R}p.prototype={getContentWorker:function(){var w=new m(f.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new v("data_length")),_=this;return w.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new m(f.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},p.createWorkerFrom=function(w,_,T){return w.pipe(new y).pipe(new v("uncompressedSize")).pipe(_.compressWorker(T)).pipe(new v("compressedSize")).withStreamInfo("compression",_)},c.exports=p},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,c,d){var f=l("./stream/GenericWorker");d.STORE={magic:"\0\0",compressWorker:function(){return new f("STORE compression")},uncompressWorker:function(){return new f("STORE decompression")}},d.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,c,d){var f=l("./utils"),m=(function(){for(var y,v=[],p=0;p<256;p++){y=p;for(var w=0;w<8;w++)y=1&y?3988292384^y>>>1:y>>>1;v[p]=y}return v})();c.exports=function(y,v){return y!==void 0&&y.length?f.getTypeOf(y)!=="string"?(function(p,w,_,T){var S=m,R=T+_;p^=-1;for(var g=T;g<R;g++)p=p>>>8^S[255&(p^w[g])];return-1^p})(0|v,y,y.length,0):(function(p,w,_,T){var S=m,R=T+_;p^=-1;for(var g=T;g<R;g++)p=p>>>8^S[255&(p^w.charCodeAt(g))];return-1^p})(0|v,y,y.length,0):0}},{"./utils":32}],5:[function(l,c,d){d.base64=!1,d.binary=!1,d.dir=!1,d.createFolders=!0,d.date=null,d.compression=null,d.compressionOptions=null,d.comment=null,d.unixPermissions=null,d.dosPermissions=null},{}],6:[function(l,c,d){var f=null;f=typeof Promise<"u"?Promise:l("lie"),c.exports={Promise:f}},{lie:37}],7:[function(l,c,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",m=l("pako"),y=l("./utils"),v=l("./stream/GenericWorker"),p=f?"uint8array":"array";function w(_,T){v.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=T,this.meta={}}d.magic="\b\0",y.inherits(w,v),w.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(y.transformTo(p,_.data),!1)},w.prototype.flush=function(){v.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){v.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new m[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(T){_.push({data:T,meta:_.meta})}},d.compressWorker=function(_){return new w("Deflate",_)},d.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,c,d){function f(S,R){var g,E="";for(g=0;g<R;g++)E+=String.fromCharCode(255&S),S>>>=8;return E}function m(S,R,g,E,A,I){var j,P,D=S.file,X=S.compression,H=I!==p.utf8encode,$=y.transformTo("string",I(D.name)),U=y.transformTo("string",p.utf8encode(D.name)),ae=D.comment,ee=y.transformTo("string",I(ae)),k=y.transformTo("string",p.utf8encode(ae)),Z=U.length!==D.name.length,x=k.length!==ae.length,G="",F="",V="",ue=D.dir,te=D.date,ge={crc32:0,compressedSize:0,uncompressedSize:0};R&&!g||(ge.crc32=S.crc32,ge.compressedSize=S.compressedSize,ge.uncompressedSize=S.uncompressedSize);var C=0;R&&(C|=8),H||!Z&&!x||(C|=2048);var L=0,ie=0;ue&&(L|=16),A==="UNIX"?(ie=798,L|=(function(oe,Ae){var Te=oe;return oe||(Te=Ae?16893:33204),(65535&Te)<<16})(D.unixPermissions,ue)):(ie=20,L|=(function(oe){return 63&(oe||0)})(D.dosPermissions)),j=te.getUTCHours(),j<<=6,j|=te.getUTCMinutes(),j<<=5,j|=te.getUTCSeconds()/2,P=te.getUTCFullYear()-1980,P<<=4,P|=te.getUTCMonth()+1,P<<=5,P|=te.getUTCDate(),Z&&(F=f(1,1)+f(w($),4)+U,G+="up"+f(F.length,2)+F),x&&(V=f(1,1)+f(w(ee),4)+k,G+="uc"+f(V.length,2)+V);var se="";return se+=`
\0`,se+=f(C,2),se+=X.magic,se+=f(j,2),se+=f(P,2),se+=f(ge.crc32,4),se+=f(ge.compressedSize,4),se+=f(ge.uncompressedSize,4),se+=f($.length,2),se+=f(G.length,2),{fileRecord:_.LOCAL_FILE_HEADER+se+$+G,dirRecord:_.CENTRAL_FILE_HEADER+f(ie,2)+se+f(ee.length,2)+"\0\0\0\0"+f(L,4)+f(E,4)+$+G+ee}}var y=l("../utils"),v=l("../stream/GenericWorker"),p=l("../utf8"),w=l("../crc32"),_=l("../signature");function T(S,R,g,E){v.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=R,this.zipPlatform=g,this.encodeFileName=E,this.streamFiles=S,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}y.inherits(T,v),T.prototype.push=function(S){var R=S.meta.percent||0,g=this.entriesCount,E=this._sources.length;this.accumulate?this.contentBuffer.push(S):(this.bytesWritten+=S.data.length,v.prototype.push.call(this,{data:S.data,meta:{currentFile:this.currentFile,percent:g?(R+100*(g-E-1))/g:100}}))},T.prototype.openedSource=function(S){this.currentSourceOffset=this.bytesWritten,this.currentFile=S.file.name;var R=this.streamFiles&&!S.file.dir;if(R){var g=m(S,R,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},T.prototype.closedSource=function(S){this.accumulate=!1;var R=this.streamFiles&&!S.file.dir,g=m(S,R,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),R)this.push({data:(function(E){return _.DATA_DESCRIPTOR+f(E.crc32,4)+f(E.compressedSize,4)+f(E.uncompressedSize,4)})(S),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},T.prototype.flush=function(){for(var S=this.bytesWritten,R=0;R<this.dirRecords.length;R++)this.push({data:this.dirRecords[R],meta:{percent:100}});var g=this.bytesWritten-S,E=(function(A,I,j,P,D){var X=y.transformTo("string",D(P));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(A,2)+f(A,2)+f(I,4)+f(j,4)+f(X.length,2)+X})(this.dirRecords.length,g,S,this.zipComment,this.encodeFileName);this.push({data:E,meta:{percent:100}})},T.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},T.prototype.registerPrevious=function(S){this._sources.push(S);var R=this;return S.on("data",function(g){R.processChunk(g)}),S.on("end",function(){R.closedSource(R.previous.streamInfo),R._sources.length?R.prepareNextSource():R.end()}),S.on("error",function(g){R.error(g)}),this},T.prototype.resume=function(){return!!v.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},T.prototype.error=function(S){var R=this._sources;if(!v.prototype.error.call(this,S))return!1;for(var g=0;g<R.length;g++)try{R[g].error(S)}catch{}return!0},T.prototype.lock=function(){v.prototype.lock.call(this);for(var S=this._sources,R=0;R<S.length;R++)S[R].lock()},c.exports=T},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,c,d){var f=l("../compressions"),m=l("./ZipFileWorker");d.generateWorker=function(y,v,p){var w=new m(v.streamFiles,p,v.platform,v.encodeFileName),_=0;try{y.forEach(function(T,S){_++;var R=(function(I,j){var P=I||j,D=f[P];if(!D)throw new Error(P+" is not a valid compression method !");return D})(S.options.compression,v.compression),g=S.options.compressionOptions||v.compressionOptions||{},E=S.dir,A=S.date;S._compressWorker(R,g).withStreamInfo("file",{name:T,dir:E,date:A,comment:S.comment||"",unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions}).pipe(w)}),w.entriesCount=_}catch(T){w.error(T)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,c,d){function f(){if(!(this instanceof f))return new f;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var m=new f;for(var y in this)typeof this[y]!="function"&&(m[y]=this[y]);return m}}(f.prototype=l("./object")).loadAsync=l("./load"),f.support=l("./support"),f.defaults=l("./defaults"),f.version="3.10.1",f.loadAsync=function(m,y){return new f().loadAsync(m,y)},f.external=l("./external"),c.exports=f},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,c,d){var f=l("./utils"),m=l("./external"),y=l("./utf8"),v=l("./zipEntries"),p=l("./stream/Crc32Probe"),w=l("./nodejsUtils");function _(T){return new m.Promise(function(S,R){var g=T.decompressed.getContentWorker().pipe(new p);g.on("error",function(E){R(E)}).on("end",function(){g.streamInfo.crc32!==T.decompressed.crc32?R(new Error("Corrupted zip : CRC32 mismatch")):S()}).resume()})}c.exports=function(T,S){var R=this;return S=f.extend(S||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:y.utf8decode}),w.isNode&&w.isStream(T)?m.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):f.prepareContent("the loaded zip file",T,!0,S.optimizedBinaryString,S.base64).then(function(g){var E=new v(S);return E.load(g),E}).then(function(g){var E=[m.Promise.resolve(g)],A=g.files;if(S.checkCRC32)for(var I=0;I<A.length;I++)E.push(_(A[I]));return m.Promise.all(E)}).then(function(g){for(var E=g.shift(),A=E.files,I=0;I<A.length;I++){var j=A[I],P=j.fileNameStr,D=f.resolve(j.fileNameStr);R.file(D,j.decompressed,{binary:!0,optimizedBinaryString:!0,date:j.date,dir:j.dir,comment:j.fileCommentStr.length?j.fileCommentStr:null,unixPermissions:j.unixPermissions,dosPermissions:j.dosPermissions,createFolders:S.createFolders}),j.dir||(R.file(D).unsafeOriginalName=P)}return E.zipComment.length&&(R.comment=E.zipComment),R})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,c,d){var f=l("../utils"),m=l("../stream/GenericWorker");function y(v,p){m.call(this,"Nodejs stream input adapter for "+v),this._upstreamEnded=!1,this._bindStream(p)}f.inherits(y,m),y.prototype._bindStream=function(v){var p=this;(this._stream=v).pause(),v.on("data",function(w){p.push({data:w,meta:{percent:0}})}).on("error",function(w){p.isPaused?this.generatedError=w:p.error(w)}).on("end",function(){p.isPaused?p._upstreamEnded=!0:p.end()})},y.prototype.pause=function(){return!!m.prototype.pause.call(this)&&(this._stream.pause(),!0)},y.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},c.exports=y},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,c,d){var f=l("readable-stream").Readable;function m(y,v,p){f.call(this,v),this._helper=y;var w=this;y.on("data",function(_,T){w.push(_)||w._helper.pause(),p&&p(T)}).on("error",function(_){w.emit("error",_)}).on("end",function(){w.push(null)})}l("../utils").inherits(m,f),m.prototype._read=function(){this._helper.resume()},c.exports=m},{"../utils":32,"readable-stream":16}],14:[function(l,c,d){c.exports={isNode:typeof Buffer<"u",newBufferFrom:function(f,m){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(f,m);if(typeof f=="number")throw new Error('The "data" argument must not be a number');return new Buffer(f,m)},allocBuffer:function(f){if(Buffer.alloc)return Buffer.alloc(f);var m=new Buffer(f);return m.fill(0),m},isBuffer:function(f){return Buffer.isBuffer(f)},isStream:function(f){return f&&typeof f.on=="function"&&typeof f.pause=="function"&&typeof f.resume=="function"}}},{}],15:[function(l,c,d){function f(D,X,H){var $,U=y.getTypeOf(X),ae=y.extend(H||{},w);ae.date=ae.date||new Date,ae.compression!==null&&(ae.compression=ae.compression.toUpperCase()),typeof ae.unixPermissions=="string"&&(ae.unixPermissions=parseInt(ae.unixPermissions,8)),ae.unixPermissions&&16384&ae.unixPermissions&&(ae.dir=!0),ae.dosPermissions&&16&ae.dosPermissions&&(ae.dir=!0),ae.dir&&(D=A(D)),ae.createFolders&&($=E(D))&&I.call(this,$,!0);var ee=U==="string"&&ae.binary===!1&&ae.base64===!1;H&&H.binary!==void 0||(ae.binary=!ee),(X instanceof _&&X.uncompressedSize===0||ae.dir||!X||X.length===0)&&(ae.base64=!1,ae.binary=!0,X="",ae.compression="STORE",U="string");var k=null;k=X instanceof _||X instanceof v?X:R.isNode&&R.isStream(X)?new g(D,X):y.prepareContent(D,X,ae.binary,ae.optimizedBinaryString,ae.base64);var Z=new T(D,k,ae);this.files[D]=Z}var m=l("./utf8"),y=l("./utils"),v=l("./stream/GenericWorker"),p=l("./stream/StreamHelper"),w=l("./defaults"),_=l("./compressedObject"),T=l("./zipObject"),S=l("./generate"),R=l("./nodejsUtils"),g=l("./nodejs/NodejsStreamInputAdapter"),E=function(D){D.slice(-1)==="/"&&(D=D.substring(0,D.length-1));var X=D.lastIndexOf("/");return 0<X?D.substring(0,X):""},A=function(D){return D.slice(-1)!=="/"&&(D+="/"),D},I=function(D,X){return X=X!==void 0?X:w.createFolders,D=A(D),this.files[D]||f.call(this,D,null,{dir:!0,createFolders:X}),this.files[D]};function j(D){return Object.prototype.toString.call(D)==="[object RegExp]"}var P={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(D){var X,H,$;for(X in this.files)$=this.files[X],(H=X.slice(this.root.length,X.length))&&X.slice(0,this.root.length)===this.root&&D(H,$)},filter:function(D){var X=[];return this.forEach(function(H,$){D(H,$)&&X.push($)}),X},file:function(D,X,H){if(arguments.length!==1)return D=this.root+D,f.call(this,D,X,H),this;if(j(D)){var $=D;return this.filter(function(ae,ee){return!ee.dir&&$.test(ae)})}var U=this.files[this.root+D];return U&&!U.dir?U:null},folder:function(D){if(!D)return this;if(j(D))return this.filter(function(U,ae){return ae.dir&&D.test(U)});var X=this.root+D,H=I.call(this,X),$=this.clone();return $.root=H.name,$},remove:function(D){D=this.root+D;var X=this.files[D];if(X||(D.slice(-1)!=="/"&&(D+="/"),X=this.files[D]),X&&!X.dir)delete this.files[D];else for(var H=this.filter(function(U,ae){return ae.name.slice(0,D.length)===D}),$=0;$<H.length;$++)delete this.files[H[$].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(D){var X,H={};try{if((H=y.extend(D||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m.utf8encode})).type=H.type.toLowerCase(),H.compression=H.compression.toUpperCase(),H.type==="binarystring"&&(H.type="string"),!H.type)throw new Error("No output type specified.");y.checkSupport(H.type),H.platform!=="darwin"&&H.platform!=="freebsd"&&H.platform!=="linux"&&H.platform!=="sunos"||(H.platform="UNIX"),H.platform==="win32"&&(H.platform="DOS");var $=H.comment||this.comment||"";X=S.generateWorker(this,H,$)}catch(U){(X=new v("error")).error(U)}return new p(X,H.type||"string",H.mimeType)},generateAsync:function(D,X){return this.generateInternalStream(D).accumulate(X)},generateNodeStream:function(D,X){return(D=D||{}).type||(D.type="nodebuffer"),this.generateInternalStream(D).toNodejsStream(X)}};c.exports=P},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,c,d){c.exports=l("stream")},{stream:void 0}],17:[function(l,c,d){var f=l("./DataReader");function m(y){f.call(this,y);for(var v=0;v<this.data.length;v++)y[v]=255&y[v]}l("../utils").inherits(m,f),m.prototype.byteAt=function(y){return this.data[this.zero+y]},m.prototype.lastIndexOfSignature=function(y){for(var v=y.charCodeAt(0),p=y.charCodeAt(1),w=y.charCodeAt(2),_=y.charCodeAt(3),T=this.length-4;0<=T;--T)if(this.data[T]===v&&this.data[T+1]===p&&this.data[T+2]===w&&this.data[T+3]===_)return T-this.zero;return-1},m.prototype.readAndCheckSignature=function(y){var v=y.charCodeAt(0),p=y.charCodeAt(1),w=y.charCodeAt(2),_=y.charCodeAt(3),T=this.readData(4);return v===T[0]&&p===T[1]&&w===T[2]&&_===T[3]},m.prototype.readData=function(y){if(this.checkOffset(y),y===0)return[];var v=this.data.slice(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=m},{"../utils":32,"./DataReader":18}],18:[function(l,c,d){var f=l("../utils");function m(y){this.data=y,this.length=y.length,this.index=0,this.zero=0}m.prototype={checkOffset:function(y){this.checkIndex(this.index+y)},checkIndex:function(y){if(this.length<this.zero+y||y<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+y+"). Corrupted zip ?")},setIndex:function(y){this.checkIndex(y),this.index=y},skip:function(y){this.setIndex(this.index+y)},byteAt:function(){},readInt:function(y){var v,p=0;for(this.checkOffset(y),v=this.index+y-1;v>=this.index;v--)p=(p<<8)+this.byteAt(v);return this.index+=y,p},readString:function(y){return f.transformTo("string",this.readData(y))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var y=this.readInt(4);return new Date(Date.UTC(1980+(y>>25&127),(y>>21&15)-1,y>>16&31,y>>11&31,y>>5&63,(31&y)<<1))}},c.exports=m},{"../utils":32}],19:[function(l,c,d){var f=l("./Uint8ArrayReader");function m(y){f.call(this,y)}l("../utils").inherits(m,f),m.prototype.readData=function(y){this.checkOffset(y);var v=this.data.slice(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=m},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,c,d){var f=l("./DataReader");function m(y){f.call(this,y)}l("../utils").inherits(m,f),m.prototype.byteAt=function(y){return this.data.charCodeAt(this.zero+y)},m.prototype.lastIndexOfSignature=function(y){return this.data.lastIndexOf(y)-this.zero},m.prototype.readAndCheckSignature=function(y){return y===this.readData(4)},m.prototype.readData=function(y){this.checkOffset(y);var v=this.data.slice(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=m},{"../utils":32,"./DataReader":18}],21:[function(l,c,d){var f=l("./ArrayReader");function m(y){f.call(this,y)}l("../utils").inherits(m,f),m.prototype.readData=function(y){if(this.checkOffset(y),y===0)return new Uint8Array(0);var v=this.data.subarray(this.zero+this.index,this.zero+this.index+y);return this.index+=y,v},c.exports=m},{"../utils":32,"./ArrayReader":17}],22:[function(l,c,d){var f=l("../utils"),m=l("../support"),y=l("./ArrayReader"),v=l("./StringReader"),p=l("./NodeBufferReader"),w=l("./Uint8ArrayReader");c.exports=function(_){var T=f.getTypeOf(_);return f.checkSupport(T),T!=="string"||m.uint8array?T==="nodebuffer"?new p(_):m.uint8array?new w(f.transformTo("uint8array",_)):new y(f.transformTo("array",_)):new v(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,c,d){d.LOCAL_FILE_HEADER="PK",d.CENTRAL_FILE_HEADER="PK",d.CENTRAL_DIRECTORY_END="PK",d.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",d.ZIP64_CENTRAL_DIRECTORY_END="PK",d.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,c,d){var f=l("./GenericWorker"),m=l("../utils");function y(v){f.call(this,"ConvertWorker to "+v),this.destType=v}m.inherits(y,f),y.prototype.processChunk=function(v){this.push({data:m.transformTo(this.destType,v.data),meta:v.meta})},c.exports=y},{"../utils":32,"./GenericWorker":28}],25:[function(l,c,d){var f=l("./GenericWorker"),m=l("../crc32");function y(){f.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(y,f),y.prototype.processChunk=function(v){this.streamInfo.crc32=m(v.data,this.streamInfo.crc32||0),this.push(v)},c.exports=y},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,c,d){var f=l("../utils"),m=l("./GenericWorker");function y(v){m.call(this,"DataLengthProbe for "+v),this.propName=v,this.withStreamInfo(v,0)}f.inherits(y,m),y.prototype.processChunk=function(v){if(v){var p=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=p+v.data.length}m.prototype.processChunk.call(this,v)},c.exports=y},{"../utils":32,"./GenericWorker":28}],27:[function(l,c,d){var f=l("../utils"),m=l("./GenericWorker");function y(v){m.call(this,"DataWorker");var p=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,v.then(function(w){p.dataIsReady=!0,p.data=w,p.max=w&&w.length||0,p.type=f.getTypeOf(w),p.isPaused||p._tickAndRepeat()},function(w){p.error(w)})}f.inherits(y,m),y.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this.data=null},y.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,f.delay(this._tickAndRepeat,[],this)),!0)},y.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(f.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},y.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var v=null,p=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":v=this.data.substring(this.index,p);break;case"uint8array":v=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":v=this.data.slice(this.index,p)}return this.index=p,this.push({data:v,meta:{percent:this.max?this.index/this.max*100:0}})},c.exports=y},{"../utils":32,"./GenericWorker":28}],28:[function(l,c,d){function f(m){this.name=m||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}f.prototype={push:function(m){this.emit("data",m)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(m){this.emit("error",m)}return!0},error:function(m){return!this.isFinished&&(this.isPaused?this.generatedError=m:(this.isFinished=!0,this.emit("error",m),this.previous&&this.previous.error(m),this.cleanUp()),!0)},on:function(m,y){return this._listeners[m].push(y),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(m,y){if(this._listeners[m])for(var v=0;v<this._listeners[m].length;v++)this._listeners[m][v].call(this,y)},pipe:function(m){return m.registerPrevious(this)},registerPrevious:function(m){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=m.streamInfo,this.mergeStreamInfo(),this.previous=m;var y=this;return m.on("data",function(v){y.processChunk(v)}),m.on("end",function(){y.end()}),m.on("error",function(v){y.error(v)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var m=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),m=!0),this.previous&&this.previous.resume(),!m},flush:function(){},processChunk:function(m){this.push(m)},withStreamInfo:function(m,y){return this.extraStreamInfo[m]=y,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var m in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,m)&&(this.streamInfo[m]=this.extraStreamInfo[m])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var m="Worker "+this.name;return this.previous?this.previous+" -> "+m:m}},c.exports=f},{}],29:[function(l,c,d){var f=l("../utils"),m=l("./ConvertWorker"),y=l("./GenericWorker"),v=l("../base64"),p=l("../support"),w=l("../external"),_=null;if(p.nodestream)try{_=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function T(R,g){return new w.Promise(function(E,A){var I=[],j=R._internalType,P=R._outputType,D=R._mimeType;R.on("data",function(X,H){I.push(X),g&&g(H)}).on("error",function(X){I=[],A(X)}).on("end",function(){try{var X=(function(H,$,U){switch(H){case"blob":return f.newBlob(f.transformTo("arraybuffer",$),U);case"base64":return v.encode($);default:return f.transformTo(H,$)}})(P,(function(H,$){var U,ae=0,ee=null,k=0;for(U=0;U<$.length;U++)k+=$[U].length;switch(H){case"string":return $.join("");case"array":return Array.prototype.concat.apply([],$);case"uint8array":for(ee=new Uint8Array(k),U=0;U<$.length;U++)ee.set($[U],ae),ae+=$[U].length;return ee;case"nodebuffer":return Buffer.concat($);default:throw new Error("concat : unsupported type '"+H+"'")}})(j,I),D);E(X)}catch(H){A(H)}I=[]}).resume()})}function S(R,g,E){var A=g;switch(g){case"blob":case"arraybuffer":A="uint8array";break;case"base64":A="string"}try{this._internalType=A,this._outputType=g,this._mimeType=E,f.checkSupport(A),this._worker=R.pipe(new m(A)),R.lock()}catch(I){this._worker=new y("error"),this._worker.error(I)}}S.prototype={accumulate:function(R){return T(this,R)},on:function(R,g){var E=this;return R==="data"?this._worker.on(R,function(A){g.call(E,A.data,A.meta)}):this._worker.on(R,function(){f.delay(g,arguments,E)}),this},resume:function(){return f.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(R){if(f.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},R)}},c.exports=S},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,c,d){if(d.base64=!0,d.array=!0,d.string=!0,d.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",d.nodebuffer=typeof Buffer<"u",d.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")d.blob=!1;else{var f=new ArrayBuffer(0);try{d.blob=new Blob([f],{type:"application/zip"}).size===0}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);m.append(f),d.blob=m.getBlob("application/zip").size===0}catch{d.blob=!1}}}try{d.nodestream=!!l("readable-stream").Readable}catch{d.nodestream=!1}},{"readable-stream":16}],31:[function(l,c,d){for(var f=l("./utils"),m=l("./support"),y=l("./nodejsUtils"),v=l("./stream/GenericWorker"),p=new Array(256),w=0;w<256;w++)p[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;p[254]=p[254]=1;function _(){v.call(this,"utf-8 decode"),this.leftOver=null}function T(){v.call(this,"utf-8 encode")}d.utf8encode=function(S){return m.nodebuffer?y.newBufferFrom(S,"utf-8"):(function(R){var g,E,A,I,j,P=R.length,D=0;for(I=0;I<P;I++)(64512&(E=R.charCodeAt(I)))==55296&&I+1<P&&(64512&(A=R.charCodeAt(I+1)))==56320&&(E=65536+(E-55296<<10)+(A-56320),I++),D+=E<128?1:E<2048?2:E<65536?3:4;for(g=m.uint8array?new Uint8Array(D):new Array(D),I=j=0;j<D;I++)(64512&(E=R.charCodeAt(I)))==55296&&I+1<P&&(64512&(A=R.charCodeAt(I+1)))==56320&&(E=65536+(E-55296<<10)+(A-56320),I++),E<128?g[j++]=E:(E<2048?g[j++]=192|E>>>6:(E<65536?g[j++]=224|E>>>12:(g[j++]=240|E>>>18,g[j++]=128|E>>>12&63),g[j++]=128|E>>>6&63),g[j++]=128|63&E);return g})(S)},d.utf8decode=function(S){return m.nodebuffer?f.transformTo("nodebuffer",S).toString("utf-8"):(function(R){var g,E,A,I,j=R.length,P=new Array(2*j);for(g=E=0;g<j;)if((A=R[g++])<128)P[E++]=A;else if(4<(I=p[A]))P[E++]=65533,g+=I-1;else{for(A&=I===2?31:I===3?15:7;1<I&&g<j;)A=A<<6|63&R[g++],I--;1<I?P[E++]=65533:A<65536?P[E++]=A:(A-=65536,P[E++]=55296|A>>10&1023,P[E++]=56320|1023&A)}return P.length!==E&&(P.subarray?P=P.subarray(0,E):P.length=E),f.applyFromCharCode(P)})(S=f.transformTo(m.uint8array?"uint8array":"array",S))},f.inherits(_,v),_.prototype.processChunk=function(S){var R=f.transformTo(m.uint8array?"uint8array":"array",S.data);if(this.leftOver&&this.leftOver.length){if(m.uint8array){var g=R;(R=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),R.set(g,this.leftOver.length)}else R=this.leftOver.concat(R);this.leftOver=null}var E=(function(I,j){var P;for((j=j||I.length)>I.length&&(j=I.length),P=j-1;0<=P&&(192&I[P])==128;)P--;return P<0||P===0?j:P+p[I[P]]>j?P:j})(R),A=R;E!==R.length&&(m.uint8array?(A=R.subarray(0,E),this.leftOver=R.subarray(E,R.length)):(A=R.slice(0,E),this.leftOver=R.slice(E,R.length))),this.push({data:d.utf8decode(A),meta:S.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:d.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},d.Utf8DecodeWorker=_,f.inherits(T,v),T.prototype.processChunk=function(S){this.push({data:d.utf8encode(S.data),meta:S.meta})},d.Utf8EncodeWorker=T},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,c,d){var f=l("./support"),m=l("./base64"),y=l("./nodejsUtils"),v=l("./external");function p(g){return g}function w(g,E){for(var A=0;A<g.length;++A)E[A]=255&g.charCodeAt(A);return E}l("setimmediate"),d.newBlob=function(g,E){d.checkSupport("blob");try{return new Blob([g],{type:E})}catch{try{var A=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return A.append(g),A.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(g,E,A){var I=[],j=0,P=g.length;if(P<=A)return String.fromCharCode.apply(null,g);for(;j<P;)E==="array"||E==="nodebuffer"?I.push(String.fromCharCode.apply(null,g.slice(j,Math.min(j+A,P)))):I.push(String.fromCharCode.apply(null,g.subarray(j,Math.min(j+A,P)))),j+=A;return I.join("")},stringifyByChar:function(g){for(var E="",A=0;A<g.length;A++)E+=String.fromCharCode(g[A]);return E},applyCanBeUsed:{uint8array:(function(){try{return f.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return f.nodebuffer&&String.fromCharCode.apply(null,y.allocBuffer(1)).length===1}catch{return!1}})()}};function T(g){var E=65536,A=d.getTypeOf(g),I=!0;if(A==="uint8array"?I=_.applyCanBeUsed.uint8array:A==="nodebuffer"&&(I=_.applyCanBeUsed.nodebuffer),I)for(;1<E;)try{return _.stringifyByChunk(g,A,E)}catch{E=Math.floor(E/2)}return _.stringifyByChar(g)}function S(g,E){for(var A=0;A<g.length;A++)E[A]=g[A];return E}d.applyFromCharCode=T;var R={};R.string={string:p,array:function(g){return w(g,new Array(g.length))},arraybuffer:function(g){return R.string.uint8array(g).buffer},uint8array:function(g){return w(g,new Uint8Array(g.length))},nodebuffer:function(g){return w(g,y.allocBuffer(g.length))}},R.array={string:T,array:p,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return y.newBufferFrom(g)}},R.arraybuffer={string:function(g){return T(new Uint8Array(g))},array:function(g){return S(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:p,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return y.newBufferFrom(new Uint8Array(g))}},R.uint8array={string:T,array:function(g){return S(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:p,nodebuffer:function(g){return y.newBufferFrom(g)}},R.nodebuffer={string:T,array:function(g){return S(g,new Array(g.length))},arraybuffer:function(g){return R.nodebuffer.uint8array(g).buffer},uint8array:function(g){return S(g,new Uint8Array(g.length))},nodebuffer:p},d.transformTo=function(g,E){if(E=E||"",!g)return E;d.checkSupport(g);var A=d.getTypeOf(E);return R[A][g](E)},d.resolve=function(g){for(var E=g.split("/"),A=[],I=0;I<E.length;I++){var j=E[I];j==="."||j===""&&I!==0&&I!==E.length-1||(j===".."?A.pop():A.push(j))}return A.join("/")},d.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":f.nodebuffer&&y.isBuffer(g)?"nodebuffer":f.uint8array&&g instanceof Uint8Array?"uint8array":f.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},d.checkSupport=function(g){if(!f[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},d.MAX_VALUE_16BITS=65535,d.MAX_VALUE_32BITS=-1,d.pretty=function(g){var E,A,I="";for(A=0;A<(g||"").length;A++)I+="\\x"+((E=g.charCodeAt(A))<16?"0":"")+E.toString(16).toUpperCase();return I},d.delay=function(g,E,A){setImmediate(function(){g.apply(A||null,E||[])})},d.inherits=function(g,E){function A(){}A.prototype=E.prototype,g.prototype=new A},d.extend=function(){var g,E,A={};for(g=0;g<arguments.length;g++)for(E in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],E)&&A[E]===void 0&&(A[E]=arguments[g][E]);return A},d.prepareContent=function(g,E,A,I,j){return v.Promise.resolve(E).then(function(P){return f.blob&&(P instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(P))!==-1)&&typeof FileReader<"u"?new v.Promise(function(D,X){var H=new FileReader;H.onload=function($){D($.target.result)},H.onerror=function($){X($.target.error)},H.readAsArrayBuffer(P)}):P}).then(function(P){var D=d.getTypeOf(P);return D?(D==="arraybuffer"?P=d.transformTo("uint8array",P):D==="string"&&(j?P=m.decode(P):A&&I!==!0&&(P=(function(X){return w(X,f.uint8array?new Uint8Array(X.length):new Array(X.length))})(P))),P):v.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,c,d){var f=l("./reader/readerFor"),m=l("./utils"),y=l("./signature"),v=l("./zipEntry"),p=l("./support");function w(_){this.files=[],this.loadOptions=_}w.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var T=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+m.pretty(T)+", expected "+m.pretty(_)+")")}},isSignature:function(_,T){var S=this.reader.index;this.reader.setIndex(_);var R=this.reader.readString(4)===T;return this.reader.setIndex(S),R},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),T=p.uint8array?"uint8array":"array",S=m.transformTo(T,_);this.zipComment=this.loadOptions.decodeFileName(S)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,T,S,R=this.zip64EndOfCentralSize-44;0<R;)_=this.reader.readInt(2),T=this.reader.readInt(4),S=this.reader.readData(T),this.zip64ExtensibleData[_]={id:_,length:T,value:S}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,T;for(_=0;_<this.files.length;_++)T=this.files[_],this.reader.setIndex(T.localHeaderOffset),this.checkSignature(y.LOCAL_FILE_HEADER),T.readLocalPart(this.reader),T.handleUTF8(),T.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(y.CENTRAL_FILE_HEADER);)(_=new v({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(y.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,y.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var T=_;if(this.checkSignature(y.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===m.MAX_VALUE_16BITS||this.diskWithCentralDirStart===m.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===m.MAX_VALUE_16BITS||this.centralDirRecords===m.MAX_VALUE_16BITS||this.centralDirSize===m.MAX_VALUE_32BITS||this.centralDirOffset===m.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(y.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(y.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,y.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(y.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(y.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var S=this.centralDirOffset+this.centralDirSize;this.zip64&&(S+=20,S+=12+this.zip64EndOfCentralSize);var R=T-S;if(0<R)this.isSignature(T,y.CENTRAL_FILE_HEADER)||(this.reader.zero=R);else if(R<0)throw new Error("Corrupted zip: missing "+Math.abs(R)+" bytes.")},prepareReader:function(_){this.reader=f(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},c.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,c,d){var f=l("./reader/readerFor"),m=l("./utils"),y=l("./compressedObject"),v=l("./crc32"),p=l("./utf8"),w=l("./compressions"),_=l("./support");function T(S,R){this.options=S,this.loadOptions=R}T.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(S){var R,g;if(S.skip(22),this.fileNameLength=S.readInt(2),g=S.readInt(2),this.fileName=S.readData(this.fileNameLength),S.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((R=(function(E){for(var A in w)if(Object.prototype.hasOwnProperty.call(w,A)&&w[A].magic===E)return w[A];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+m.pretty(this.compressionMethod)+" unknown (inner file : "+m.transformTo("string",this.fileName)+")");this.decompressed=new y(this.compressedSize,this.uncompressedSize,this.crc32,R,S.readData(this.compressedSize))},readCentralPart:function(S){this.versionMadeBy=S.readInt(2),S.skip(2),this.bitFlag=S.readInt(2),this.compressionMethod=S.readString(2),this.date=S.readDate(),this.crc32=S.readInt(4),this.compressedSize=S.readInt(4),this.uncompressedSize=S.readInt(4);var R=S.readInt(2);if(this.extraFieldsLength=S.readInt(2),this.fileCommentLength=S.readInt(2),this.diskNumberStart=S.readInt(2),this.internalFileAttributes=S.readInt(2),this.externalFileAttributes=S.readInt(4),this.localHeaderOffset=S.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");S.skip(R),this.readExtraFields(S),this.parseZIP64ExtraField(S),this.fileComment=S.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var S=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),S==0&&(this.dosPermissions=63&this.externalFileAttributes),S==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var S=f(this.extraFields[1].value);this.uncompressedSize===m.MAX_VALUE_32BITS&&(this.uncompressedSize=S.readInt(8)),this.compressedSize===m.MAX_VALUE_32BITS&&(this.compressedSize=S.readInt(8)),this.localHeaderOffset===m.MAX_VALUE_32BITS&&(this.localHeaderOffset=S.readInt(8)),this.diskNumberStart===m.MAX_VALUE_32BITS&&(this.diskNumberStart=S.readInt(4))}},readExtraFields:function(S){var R,g,E,A=S.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});S.index+4<A;)R=S.readInt(2),g=S.readInt(2),E=S.readData(g),this.extraFields[R]={id:R,length:g,value:E};S.setIndex(A)},handleUTF8:function(){var S=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=p.utf8decode(this.fileName),this.fileCommentStr=p.utf8decode(this.fileComment);else{var R=this.findExtraFieldUnicodePath();if(R!==null)this.fileNameStr=R;else{var g=m.transformTo(S,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var A=m.transformTo(S,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(A)}}},findExtraFieldUnicodePath:function(){var S=this.extraFields[28789];if(S){var R=f(S.value);return R.readInt(1)!==1||v(this.fileName)!==R.readInt(4)?null:p.utf8decode(R.readData(S.length-5))}return null},findExtraFieldUnicodeComment:function(){var S=this.extraFields[25461];if(S){var R=f(S.value);return R.readInt(1)!==1||v(this.fileComment)!==R.readInt(4)?null:p.utf8decode(R.readData(S.length-5))}return null}},c.exports=T},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,c,d){function f(R,g,E){this.name=R,this.dir=E.dir,this.date=E.date,this.comment=E.comment,this.unixPermissions=E.unixPermissions,this.dosPermissions=E.dosPermissions,this._data=g,this._dataBinary=E.binary,this.options={compression:E.compression,compressionOptions:E.compressionOptions}}var m=l("./stream/StreamHelper"),y=l("./stream/DataWorker"),v=l("./utf8"),p=l("./compressedObject"),w=l("./stream/GenericWorker");f.prototype={internalStream:function(R){var g=null,E="string";try{if(!R)throw new Error("No output type specified.");var A=(E=R.toLowerCase())==="string"||E==="text";E!=="binarystring"&&E!=="text"||(E="string"),g=this._decompressWorker();var I=!this._dataBinary;I&&!A&&(g=g.pipe(new v.Utf8EncodeWorker)),!I&&A&&(g=g.pipe(new v.Utf8DecodeWorker))}catch(j){(g=new w("error")).error(j)}return new m(g,E,"")},async:function(R,g){return this.internalStream(R).accumulate(g)},nodeStream:function(R,g){return this.internalStream(R||"nodebuffer").toNodejsStream(g)},_compressWorker:function(R,g){if(this._data instanceof p&&this._data.compression.magic===R.magic)return this._data.getCompressedWorker();var E=this._decompressWorker();return this._dataBinary||(E=E.pipe(new v.Utf8EncodeWorker)),p.createWorkerFrom(E,R,g)},_decompressWorker:function(){return this._data instanceof p?this._data.getContentWorker():this._data instanceof w?this._data:new y(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],T=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},S=0;S<_.length;S++)f.prototype[_[S]]=T;c.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,c,d){(function(f){var m,y,v=f.MutationObserver||f.WebKitMutationObserver;if(v){var p=0,w=new v(R),_=f.document.createTextNode("");w.observe(_,{characterData:!0}),m=function(){_.data=p=++p%2}}else if(f.setImmediate||f.MessageChannel===void 0)m="document"in f&&"onreadystatechange"in f.document.createElement("script")?function(){var g=f.document.createElement("script");g.onreadystatechange=function(){R(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},f.document.documentElement.appendChild(g)}:function(){setTimeout(R,0)};else{var T=new f.MessageChannel;T.port1.onmessage=R,m=function(){T.port2.postMessage(0)}}var S=[];function R(){var g,E;y=!0;for(var A=S.length;A;){for(E=S,S=[],g=-1;++g<A;)E[g]();A=S.length}y=!1}c.exports=function(g){S.push(g)!==1||y||m()}}).call(this,typeof Ts<"u"?Ts:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,c,d){var f=l("immediate");function m(){}var y={},v=["REJECTED"],p=["FULFILLED"],w=["PENDING"];function _(A){if(typeof A!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,A!==m&&g(this,A)}function T(A,I,j){this.promise=A,typeof I=="function"&&(this.onFulfilled=I,this.callFulfilled=this.otherCallFulfilled),typeof j=="function"&&(this.onRejected=j,this.callRejected=this.otherCallRejected)}function S(A,I,j){f(function(){var P;try{P=I(j)}catch(D){return y.reject(A,D)}P===A?y.reject(A,new TypeError("Cannot resolve promise with itself")):y.resolve(A,P)})}function R(A){var I=A&&A.then;if(A&&(typeof A=="object"||typeof A=="function")&&typeof I=="function")return function(){I.apply(A,arguments)}}function g(A,I){var j=!1;function P(H){j||(j=!0,y.reject(A,H))}function D(H){j||(j=!0,y.resolve(A,H))}var X=E(function(){I(D,P)});X.status==="error"&&P(X.value)}function E(A,I){var j={};try{j.value=A(I),j.status="success"}catch(P){j.status="error",j.value=P}return j}(c.exports=_).prototype.finally=function(A){if(typeof A!="function")return this;var I=this.constructor;return this.then(function(j){return I.resolve(A()).then(function(){return j})},function(j){return I.resolve(A()).then(function(){throw j})})},_.prototype.catch=function(A){return this.then(null,A)},_.prototype.then=function(A,I){if(typeof A!="function"&&this.state===p||typeof I!="function"&&this.state===v)return this;var j=new this.constructor(m);return this.state!==w?S(j,this.state===p?A:I,this.outcome):this.queue.push(new T(j,A,I)),j},T.prototype.callFulfilled=function(A){y.resolve(this.promise,A)},T.prototype.otherCallFulfilled=function(A){S(this.promise,this.onFulfilled,A)},T.prototype.callRejected=function(A){y.reject(this.promise,A)},T.prototype.otherCallRejected=function(A){S(this.promise,this.onRejected,A)},y.resolve=function(A,I){var j=E(R,I);if(j.status==="error")return y.reject(A,j.value);var P=j.value;if(P)g(A,P);else{A.state=p,A.outcome=I;for(var D=-1,X=A.queue.length;++D<X;)A.queue[D].callFulfilled(I)}return A},y.reject=function(A,I){A.state=v,A.outcome=I;for(var j=-1,P=A.queue.length;++j<P;)A.queue[j].callRejected(I);return A},_.resolve=function(A){return A instanceof this?A:y.resolve(new this(m),A)},_.reject=function(A){var I=new this(m);return y.reject(I,A)},_.all=function(A){var I=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var j=A.length,P=!1;if(!j)return this.resolve([]);for(var D=new Array(j),X=0,H=-1,$=new this(m);++H<j;)U(A[H],H);return $;function U(ae,ee){I.resolve(ae).then(function(k){D[ee]=k,++X!==j||P||(P=!0,y.resolve($,D))},function(k){P||(P=!0,y.reject($,k))})}},_.race=function(A){var I=this;if(Object.prototype.toString.call(A)!=="[object Array]")return this.reject(new TypeError("must be an array"));var j=A.length,P=!1;if(!j)return this.resolve([]);for(var D=-1,X=new this(m);++D<j;)H=A[D],I.resolve(H).then(function($){P||(P=!0,y.resolve(X,$))},function($){P||(P=!0,y.reject(X,$))});var H;return X}},{immediate:36}],38:[function(l,c,d){var f={};(0,l("./lib/utils/common").assign)(f,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),c.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,c,d){var f=l("./zlib/deflate"),m=l("./utils/common"),y=l("./utils/strings"),v=l("./zlib/messages"),p=l("./zlib/zstream"),w=Object.prototype.toString,_=0,T=-1,S=0,R=8;function g(A){if(!(this instanceof g))return new g(A);this.options=m.assign({level:T,method:R,chunkSize:16384,windowBits:15,memLevel:8,strategy:S,to:""},A||{});var I=this.options;I.raw&&0<I.windowBits?I.windowBits=-I.windowBits:I.gzip&&0<I.windowBits&&I.windowBits<16&&(I.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var j=f.deflateInit2(this.strm,I.level,I.method,I.windowBits,I.memLevel,I.strategy);if(j!==_)throw new Error(v[j]);if(I.header&&f.deflateSetHeader(this.strm,I.header),I.dictionary){var P;if(P=typeof I.dictionary=="string"?y.string2buf(I.dictionary):w.call(I.dictionary)==="[object ArrayBuffer]"?new Uint8Array(I.dictionary):I.dictionary,(j=f.deflateSetDictionary(this.strm,P))!==_)throw new Error(v[j]);this._dict_set=!0}}function E(A,I){var j=new g(I);if(j.push(A,!0),j.err)throw j.msg||v[j.err];return j.result}g.prototype.push=function(A,I){var j,P,D=this.strm,X=this.options.chunkSize;if(this.ended)return!1;P=I===~~I?I:I===!0?4:0,typeof A=="string"?D.input=y.string2buf(A):w.call(A)==="[object ArrayBuffer]"?D.input=new Uint8Array(A):D.input=A,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new m.Buf8(X),D.next_out=0,D.avail_out=X),(j=f.deflate(D,P))!==1&&j!==_)return this.onEnd(j),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||P!==4&&P!==2)||(this.options.to==="string"?this.onData(y.buf2binstring(m.shrinkBuf(D.output,D.next_out))):this.onData(m.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&j!==1);return P===4?(j=f.deflateEnd(this.strm),this.onEnd(j),this.ended=!0,j===_):P!==2||(this.onEnd(_),!(D.avail_out=0))},g.prototype.onData=function(A){this.chunks.push(A)},g.prototype.onEnd=function(A){A===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg},d.Deflate=g,d.deflate=E,d.deflateRaw=function(A,I){return(I=I||{}).raw=!0,E(A,I)},d.gzip=function(A,I){return(I=I||{}).gzip=!0,E(A,I)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,c,d){var f=l("./zlib/inflate"),m=l("./utils/common"),y=l("./utils/strings"),v=l("./zlib/constants"),p=l("./zlib/messages"),w=l("./zlib/zstream"),_=l("./zlib/gzheader"),T=Object.prototype.toString;function S(g){if(!(this instanceof S))return new S(g);this.options=m.assign({chunkSize:16384,windowBits:0,to:""},g||{});var E=this.options;E.raw&&0<=E.windowBits&&E.windowBits<16&&(E.windowBits=-E.windowBits,E.windowBits===0&&(E.windowBits=-15)),!(0<=E.windowBits&&E.windowBits<16)||g&&g.windowBits||(E.windowBits+=32),15<E.windowBits&&E.windowBits<48&&(15&E.windowBits)==0&&(E.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var A=f.inflateInit2(this.strm,E.windowBits);if(A!==v.Z_OK)throw new Error(p[A]);this.header=new _,f.inflateGetHeader(this.strm,this.header)}function R(g,E){var A=new S(E);if(A.push(g,!0),A.err)throw A.msg||p[A.err];return A.result}S.prototype.push=function(g,E){var A,I,j,P,D,X,H=this.strm,$=this.options.chunkSize,U=this.options.dictionary,ae=!1;if(this.ended)return!1;I=E===~~E?E:E===!0?v.Z_FINISH:v.Z_NO_FLUSH,typeof g=="string"?H.input=y.binstring2buf(g):T.call(g)==="[object ArrayBuffer]"?H.input=new Uint8Array(g):H.input=g,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new m.Buf8($),H.next_out=0,H.avail_out=$),(A=f.inflate(H,v.Z_NO_FLUSH))===v.Z_NEED_DICT&&U&&(X=typeof U=="string"?y.string2buf(U):T.call(U)==="[object ArrayBuffer]"?new Uint8Array(U):U,A=f.inflateSetDictionary(this.strm,X)),A===v.Z_BUF_ERROR&&ae===!0&&(A=v.Z_OK,ae=!1),A!==v.Z_STREAM_END&&A!==v.Z_OK)return this.onEnd(A),!(this.ended=!0);H.next_out&&(H.avail_out!==0&&A!==v.Z_STREAM_END&&(H.avail_in!==0||I!==v.Z_FINISH&&I!==v.Z_SYNC_FLUSH)||(this.options.to==="string"?(j=y.utf8border(H.output,H.next_out),P=H.next_out-j,D=y.buf2string(H.output,j),H.next_out=P,H.avail_out=$-P,P&&m.arraySet(H.output,H.output,j,P,0),this.onData(D)):this.onData(m.shrinkBuf(H.output,H.next_out)))),H.avail_in===0&&H.avail_out===0&&(ae=!0)}while((0<H.avail_in||H.avail_out===0)&&A!==v.Z_STREAM_END);return A===v.Z_STREAM_END&&(I=v.Z_FINISH),I===v.Z_FINISH?(A=f.inflateEnd(this.strm),this.onEnd(A),this.ended=!0,A===v.Z_OK):I!==v.Z_SYNC_FLUSH||(this.onEnd(v.Z_OK),!(H.avail_out=0))},S.prototype.onData=function(g){this.chunks.push(g)},S.prototype.onEnd=function(g){g===v.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},d.Inflate=S,d.inflate=R,d.inflateRaw=function(g,E){return(E=E||{}).raw=!0,R(g,E)},d.ungzip=R},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,c,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";d.assign=function(v){for(var p=Array.prototype.slice.call(arguments,1);p.length;){var w=p.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var _ in w)w.hasOwnProperty(_)&&(v[_]=w[_])}}return v},d.shrinkBuf=function(v,p){return v.length===p?v:v.subarray?v.subarray(0,p):(v.length=p,v)};var m={arraySet:function(v,p,w,_,T){if(p.subarray&&v.subarray)v.set(p.subarray(w,w+_),T);else for(var S=0;S<_;S++)v[T+S]=p[w+S]},flattenChunks:function(v){var p,w,_,T,S,R;for(p=_=0,w=v.length;p<w;p++)_+=v[p].length;for(R=new Uint8Array(_),p=T=0,w=v.length;p<w;p++)S=v[p],R.set(S,T),T+=S.length;return R}},y={arraySet:function(v,p,w,_,T){for(var S=0;S<_;S++)v[T+S]=p[w+S]},flattenChunks:function(v){return[].concat.apply([],v)}};d.setTyped=function(v){v?(d.Buf8=Uint8Array,d.Buf16=Uint16Array,d.Buf32=Int32Array,d.assign(d,m)):(d.Buf8=Array,d.Buf16=Array,d.Buf32=Array,d.assign(d,y))},d.setTyped(f)},{}],42:[function(l,c,d){var f=l("./common"),m=!0,y=!0;try{String.fromCharCode.apply(null,[0])}catch{m=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{y=!1}for(var v=new f.Buf8(256),p=0;p<256;p++)v[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;function w(_,T){if(T<65537&&(_.subarray&&y||!_.subarray&&m))return String.fromCharCode.apply(null,f.shrinkBuf(_,T));for(var S="",R=0;R<T;R++)S+=String.fromCharCode(_[R]);return S}v[254]=v[254]=1,d.string2buf=function(_){var T,S,R,g,E,A=_.length,I=0;for(g=0;g<A;g++)(64512&(S=_.charCodeAt(g)))==55296&&g+1<A&&(64512&(R=_.charCodeAt(g+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),g++),I+=S<128?1:S<2048?2:S<65536?3:4;for(T=new f.Buf8(I),g=E=0;E<I;g++)(64512&(S=_.charCodeAt(g)))==55296&&g+1<A&&(64512&(R=_.charCodeAt(g+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),g++),S<128?T[E++]=S:(S<2048?T[E++]=192|S>>>6:(S<65536?T[E++]=224|S>>>12:(T[E++]=240|S>>>18,T[E++]=128|S>>>12&63),T[E++]=128|S>>>6&63),T[E++]=128|63&S);return T},d.buf2binstring=function(_){return w(_,_.length)},d.binstring2buf=function(_){for(var T=new f.Buf8(_.length),S=0,R=T.length;S<R;S++)T[S]=_.charCodeAt(S);return T},d.buf2string=function(_,T){var S,R,g,E,A=T||_.length,I=new Array(2*A);for(S=R=0;S<A;)if((g=_[S++])<128)I[R++]=g;else if(4<(E=v[g]))I[R++]=65533,S+=E-1;else{for(g&=E===2?31:E===3?15:7;1<E&&S<A;)g=g<<6|63&_[S++],E--;1<E?I[R++]=65533:g<65536?I[R++]=g:(g-=65536,I[R++]=55296|g>>10&1023,I[R++]=56320|1023&g)}return w(I,R)},d.utf8border=function(_,T){var S;for((T=T||_.length)>_.length&&(T=_.length),S=T-1;0<=S&&(192&_[S])==128;)S--;return S<0||S===0?T:S+v[_[S]]>T?S:T}},{"./common":41}],43:[function(l,c,d){c.exports=function(f,m,y,v){for(var p=65535&f|0,w=f>>>16&65535|0,_=0;y!==0;){for(y-=_=2e3<y?2e3:y;w=w+(p=p+m[v++]|0)|0,--_;);p%=65521,w%=65521}return p|w<<16|0}},{}],44:[function(l,c,d){c.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,c,d){var f=(function(){for(var m,y=[],v=0;v<256;v++){m=v;for(var p=0;p<8;p++)m=1&m?3988292384^m>>>1:m>>>1;y[v]=m}return y})();c.exports=function(m,y,v,p){var w=f,_=p+v;m^=-1;for(var T=p;T<_;T++)m=m>>>8^w[255&(m^y[T])];return-1^m}},{}],46:[function(l,c,d){var f,m=l("../utils/common"),y=l("./trees"),v=l("./adler32"),p=l("./crc32"),w=l("./messages"),_=0,T=4,S=0,R=-2,g=-1,E=4,A=2,I=8,j=9,P=286,D=30,X=19,H=2*P+1,$=15,U=3,ae=258,ee=ae+U+1,k=42,Z=113,x=1,G=2,F=3,V=4;function ue(b,de){return b.msg=w[de],de}function te(b){return(b<<1)-(4<b?9:0)}function ge(b){for(var de=b.length;0<=--de;)b[de]=0}function C(b){var de=b.state,re=de.pending;re>b.avail_out&&(re=b.avail_out),re!==0&&(m.arraySet(b.output,de.pending_buf,de.pending_out,re,b.next_out),b.next_out+=re,de.pending_out+=re,b.total_out+=re,b.avail_out-=re,de.pending-=re,de.pending===0&&(de.pending_out=0))}function L(b,de){y._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,de),b.block_start=b.strstart,C(b.strm)}function ie(b,de){b.pending_buf[b.pending++]=de}function se(b,de){b.pending_buf[b.pending++]=de>>>8&255,b.pending_buf[b.pending++]=255&de}function oe(b,de){var re,z,O=b.max_chain_length,Y=b.strstart,he=b.prev_length,pe=b.nice_match,W=b.strstart>b.w_size-ee?b.strstart-(b.w_size-ee):0,ye=b.window,xe=b.w_mask,ve=b.prev,we=b.strstart+ae,Ye=ye[Y+he-1],Le=ye[Y+he];b.prev_length>=b.good_match&&(O>>=2),pe>b.lookahead&&(pe=b.lookahead);do if(ye[(re=de)+he]===Le&&ye[re+he-1]===Ye&&ye[re]===ye[Y]&&ye[++re]===ye[Y+1]){Y+=2,re++;do;while(ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&Y<we);if(z=ae-(we-Y),Y=we-ae,he<z){if(b.match_start=de,pe<=(he=z))break;Ye=ye[Y+he-1],Le=ye[Y+he]}}while((de=ve[de&xe])>W&&--O!=0);return he<=b.lookahead?he:b.lookahead}function Ae(b){var de,re,z,O,Y,he,pe,W,ye,xe,ve=b.w_size;do{if(O=b.window_size-b.lookahead-b.strstart,b.strstart>=ve+(ve-ee)){for(m.arraySet(b.window,b.window,ve,ve,0),b.match_start-=ve,b.strstart-=ve,b.block_start-=ve,de=re=b.hash_size;z=b.head[--de],b.head[de]=ve<=z?z-ve:0,--re;);for(de=re=ve;z=b.prev[--de],b.prev[de]=ve<=z?z-ve:0,--re;);O+=ve}if(b.strm.avail_in===0)break;if(he=b.strm,pe=b.window,W=b.strstart+b.lookahead,ye=O,xe=void 0,xe=he.avail_in,ye<xe&&(xe=ye),re=xe===0?0:(he.avail_in-=xe,m.arraySet(pe,he.input,he.next_in,xe,W),he.state.wrap===1?he.adler=v(he.adler,pe,xe,W):he.state.wrap===2&&(he.adler=p(he.adler,pe,xe,W)),he.next_in+=xe,he.total_in+=xe,xe),b.lookahead+=re,b.lookahead+b.insert>=U)for(Y=b.strstart-b.insert,b.ins_h=b.window[Y],b.ins_h=(b.ins_h<<b.hash_shift^b.window[Y+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[Y+U-1])&b.hash_mask,b.prev[Y&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=Y,Y++,b.insert--,!(b.lookahead+b.insert<U)););}while(b.lookahead<ee&&b.strm.avail_in!==0)}function Te(b,de){for(var re,z;;){if(b.lookahead<ee){if(Ae(b),b.lookahead<ee&&de===_)return x;if(b.lookahead===0)break}if(re=0,b.lookahead>=U&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),re!==0&&b.strstart-re<=b.w_size-ee&&(b.match_length=oe(b,re)),b.match_length>=U)if(z=y._tr_tally(b,b.strstart-b.match_start,b.match_length-U),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=U){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else z=y._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(z&&(L(b,!1),b.strm.avail_out===0))return x}return b.insert=b.strstart<U-1?b.strstart:U-1,de===T?(L(b,!0),b.strm.avail_out===0?F:V):b.last_lit&&(L(b,!1),b.strm.avail_out===0)?x:G}function Ne(b,de){for(var re,z,O;;){if(b.lookahead<ee){if(Ae(b),b.lookahead<ee&&de===_)return x;if(b.lookahead===0)break}if(re=0,b.lookahead>=U&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=U-1,re!==0&&b.prev_length<b.max_lazy_match&&b.strstart-re<=b.w_size-ee&&(b.match_length=oe(b,re),b.match_length<=5&&(b.strategy===1||b.match_length===U&&4096<b.strstart-b.match_start)&&(b.match_length=U-1)),b.prev_length>=U&&b.match_length<=b.prev_length){for(O=b.strstart+b.lookahead-U,z=y._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-U),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=O&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,re=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=U-1,b.strstart++,z&&(L(b,!1),b.strm.avail_out===0))return x}else if(b.match_available){if((z=y._tr_tally(b,0,b.window[b.strstart-1]))&&L(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return x}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(z=y._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<U-1?b.strstart:U-1,de===T?(L(b,!0),b.strm.avail_out===0?F:V):b.last_lit&&(L(b,!1),b.strm.avail_out===0)?x:G}function Se(b,de,re,z,O){this.good_length=b,this.max_lazy=de,this.nice_length=re,this.max_chain=z,this.func=O}function Pe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=I,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new m.Buf16(2*H),this.dyn_dtree=new m.Buf16(2*(2*D+1)),this.bl_tree=new m.Buf16(2*(2*X+1)),ge(this.dyn_ltree),ge(this.dyn_dtree),ge(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new m.Buf16($+1),this.heap=new m.Buf16(2*P+1),ge(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new m.Buf16(2*P+1),ge(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function et(b){var de;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=A,(de=b.state).pending=0,de.pending_out=0,de.wrap<0&&(de.wrap=-de.wrap),de.status=de.wrap?k:Z,b.adler=de.wrap===2?0:1,de.last_flush=_,y._tr_init(de),S):ue(b,R)}function Rt(b){var de=et(b);return de===S&&(function(re){re.window_size=2*re.w_size,ge(re.head),re.max_lazy_match=f[re.level].max_lazy,re.good_match=f[re.level].good_length,re.nice_match=f[re.level].nice_length,re.max_chain_length=f[re.level].max_chain,re.strstart=0,re.block_start=0,re.lookahead=0,re.insert=0,re.match_length=re.prev_length=U-1,re.match_available=0,re.ins_h=0})(b.state),de}function Tt(b,de,re,z,O,Y){if(!b)return R;var he=1;if(de===g&&(de=6),z<0?(he=0,z=-z):15<z&&(he=2,z-=16),O<1||j<O||re!==I||z<8||15<z||de<0||9<de||Y<0||E<Y)return ue(b,R);z===8&&(z=9);var pe=new Pe;return(b.state=pe).strm=b,pe.wrap=he,pe.gzhead=null,pe.w_bits=z,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=O+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+U-1)/U),pe.window=new m.Buf8(2*pe.w_size),pe.head=new m.Buf16(pe.hash_size),pe.prev=new m.Buf16(pe.w_size),pe.lit_bufsize=1<<O+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new m.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=de,pe.strategy=Y,pe.method=re,Rt(b)}f=[new Se(0,0,0,0,function(b,de){var re=65535;for(re>b.pending_buf_size-5&&(re=b.pending_buf_size-5);;){if(b.lookahead<=1){if(Ae(b),b.lookahead===0&&de===_)return x;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var z=b.block_start+re;if((b.strstart===0||b.strstart>=z)&&(b.lookahead=b.strstart-z,b.strstart=z,L(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-ee&&(L(b,!1),b.strm.avail_out===0))return x}return b.insert=0,de===T?(L(b,!0),b.strm.avail_out===0?F:V):(b.strstart>b.block_start&&(L(b,!1),b.strm.avail_out),x)}),new Se(4,4,8,4,Te),new Se(4,5,16,8,Te),new Se(4,6,32,32,Te),new Se(4,4,16,16,Ne),new Se(8,16,32,32,Ne),new Se(8,16,128,128,Ne),new Se(8,32,128,256,Ne),new Se(32,128,258,1024,Ne),new Se(32,258,258,4096,Ne)],d.deflateInit=function(b,de){return Tt(b,de,I,15,8,0)},d.deflateInit2=Tt,d.deflateReset=Rt,d.deflateResetKeep=et,d.deflateSetHeader=function(b,de){return b&&b.state?b.state.wrap!==2?R:(b.state.gzhead=de,S):R},d.deflate=function(b,de){var re,z,O,Y;if(!b||!b.state||5<de||de<0)return b?ue(b,R):R;if(z=b.state,!b.output||!b.input&&b.avail_in!==0||z.status===666&&de!==T)return ue(b,b.avail_out===0?-5:R);if(z.strm=b,re=z.last_flush,z.last_flush=de,z.status===k)if(z.wrap===2)b.adler=0,ie(z,31),ie(z,139),ie(z,8),z.gzhead?(ie(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),ie(z,255&z.gzhead.time),ie(z,z.gzhead.time>>8&255),ie(z,z.gzhead.time>>16&255),ie(z,z.gzhead.time>>24&255),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(ie(z,255&z.gzhead.extra.length),ie(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(b.adler=p(b.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,3),z.status=Z);else{var he=I+(z.w_bits-8<<4)<<8;he|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(he|=32),he+=31-he%31,z.status=Z,se(z,he),z.strstart!==0&&(se(z,b.adler>>>16),se(z,65535&b.adler)),b.adler=1}if(z.status===69)if(z.gzhead.extra){for(O=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>O&&(b.adler=p(b.adler,z.pending_buf,z.pending-O,O)),C(b),O=z.pending,z.pending!==z.pending_buf_size));)ie(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>O&&(b.adler=p(b.adler,z.pending_buf,z.pending-O,O)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(b.adler=p(b.adler,z.pending_buf,z.pending-O,O)),C(b),O=z.pending,z.pending===z.pending_buf_size)){Y=1;break}Y=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,ie(z,Y)}while(Y!==0);z.gzhead.hcrc&&z.pending>O&&(b.adler=p(b.adler,z.pending_buf,z.pending-O,O)),Y===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(b.adler=p(b.adler,z.pending_buf,z.pending-O,O)),C(b),O=z.pending,z.pending===z.pending_buf_size)){Y=1;break}Y=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,ie(z,Y)}while(Y!==0);z.gzhead.hcrc&&z.pending>O&&(b.adler=p(b.adler,z.pending_buf,z.pending-O,O)),Y===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&C(b),z.pending+2<=z.pending_buf_size&&(ie(z,255&b.adler),ie(z,b.adler>>8&255),b.adler=0,z.status=Z)):z.status=Z),z.pending!==0){if(C(b),b.avail_out===0)return z.last_flush=-1,S}else if(b.avail_in===0&&te(de)<=te(re)&&de!==T)return ue(b,-5);if(z.status===666&&b.avail_in!==0)return ue(b,-5);if(b.avail_in!==0||z.lookahead!==0||de!==_&&z.status!==666){var pe=z.strategy===2?(function(W,ye){for(var xe;;){if(W.lookahead===0&&(Ae(W),W.lookahead===0)){if(ye===_)return x;break}if(W.match_length=0,xe=y._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,xe&&(L(W,!1),W.strm.avail_out===0))return x}return W.insert=0,ye===T?(L(W,!0),W.strm.avail_out===0?F:V):W.last_lit&&(L(W,!1),W.strm.avail_out===0)?x:G})(z,de):z.strategy===3?(function(W,ye){for(var xe,ve,we,Ye,Le=W.window;;){if(W.lookahead<=ae){if(Ae(W),W.lookahead<=ae&&ye===_)return x;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=U&&0<W.strstart&&(ve=Le[we=W.strstart-1])===Le[++we]&&ve===Le[++we]&&ve===Le[++we]){Ye=W.strstart+ae;do;while(ve===Le[++we]&&ve===Le[++we]&&ve===Le[++we]&&ve===Le[++we]&&ve===Le[++we]&&ve===Le[++we]&&ve===Le[++we]&&ve===Le[++we]&&we<Ye);W.match_length=ae-(Ye-we),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=U?(xe=y._tr_tally(W,1,W.match_length-U),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(xe=y._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),xe&&(L(W,!1),W.strm.avail_out===0))return x}return W.insert=0,ye===T?(L(W,!0),W.strm.avail_out===0?F:V):W.last_lit&&(L(W,!1),W.strm.avail_out===0)?x:G})(z,de):f[z.level].func(z,de);if(pe!==F&&pe!==V||(z.status=666),pe===x||pe===F)return b.avail_out===0&&(z.last_flush=-1),S;if(pe===G&&(de===1?y._tr_align(z):de!==5&&(y._tr_stored_block(z,0,0,!1),de===3&&(ge(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),C(b),b.avail_out===0))return z.last_flush=-1,S}return de!==T?S:z.wrap<=0?1:(z.wrap===2?(ie(z,255&b.adler),ie(z,b.adler>>8&255),ie(z,b.adler>>16&255),ie(z,b.adler>>24&255),ie(z,255&b.total_in),ie(z,b.total_in>>8&255),ie(z,b.total_in>>16&255),ie(z,b.total_in>>24&255)):(se(z,b.adler>>>16),se(z,65535&b.adler)),C(b),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?S:1)},d.deflateEnd=function(b){var de;return b&&b.state?(de=b.state.status)!==k&&de!==69&&de!==73&&de!==91&&de!==103&&de!==Z&&de!==666?ue(b,R):(b.state=null,de===Z?ue(b,-3):S):R},d.deflateSetDictionary=function(b,de){var re,z,O,Y,he,pe,W,ye,xe=de.length;if(!b||!b.state||(Y=(re=b.state).wrap)===2||Y===1&&re.status!==k||re.lookahead)return R;for(Y===1&&(b.adler=v(b.adler,de,xe,0)),re.wrap=0,xe>=re.w_size&&(Y===0&&(ge(re.head),re.strstart=0,re.block_start=0,re.insert=0),ye=new m.Buf8(re.w_size),m.arraySet(ye,de,xe-re.w_size,re.w_size,0),de=ye,xe=re.w_size),he=b.avail_in,pe=b.next_in,W=b.input,b.avail_in=xe,b.next_in=0,b.input=de,Ae(re);re.lookahead>=U;){for(z=re.strstart,O=re.lookahead-(U-1);re.ins_h=(re.ins_h<<re.hash_shift^re.window[z+U-1])&re.hash_mask,re.prev[z&re.w_mask]=re.head[re.ins_h],re.head[re.ins_h]=z,z++,--O;);re.strstart=z,re.lookahead=U-1,Ae(re)}return re.strstart+=re.lookahead,re.block_start=re.strstart,re.insert=re.lookahead,re.lookahead=0,re.match_length=re.prev_length=U-1,re.match_available=0,b.next_in=pe,b.input=W,b.avail_in=he,re.wrap=Y,S},d.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,c,d){c.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,c,d){c.exports=function(f,m){var y,v,p,w,_,T,S,R,g,E,A,I,j,P,D,X,H,$,U,ae,ee,k,Z,x,G;y=f.state,v=f.next_in,x=f.input,p=v+(f.avail_in-5),w=f.next_out,G=f.output,_=w-(m-f.avail_out),T=w+(f.avail_out-257),S=y.dmax,R=y.wsize,g=y.whave,E=y.wnext,A=y.window,I=y.hold,j=y.bits,P=y.lencode,D=y.distcode,X=(1<<y.lenbits)-1,H=(1<<y.distbits)-1;e:do{j<15&&(I+=x[v++]<<j,j+=8,I+=x[v++]<<j,j+=8),$=P[I&X];t:for(;;){if(I>>>=U=$>>>24,j-=U,(U=$>>>16&255)===0)G[w++]=65535&$;else{if(!(16&U)){if((64&U)==0){$=P[(65535&$)+(I&(1<<U)-1)];continue t}if(32&U){y.mode=12;break e}f.msg="invalid literal/length code",y.mode=30;break e}ae=65535&$,(U&=15)&&(j<U&&(I+=x[v++]<<j,j+=8),ae+=I&(1<<U)-1,I>>>=U,j-=U),j<15&&(I+=x[v++]<<j,j+=8,I+=x[v++]<<j,j+=8),$=D[I&H];n:for(;;){if(I>>>=U=$>>>24,j-=U,!(16&(U=$>>>16&255))){if((64&U)==0){$=D[(65535&$)+(I&(1<<U)-1)];continue n}f.msg="invalid distance code",y.mode=30;break e}if(ee=65535&$,j<(U&=15)&&(I+=x[v++]<<j,(j+=8)<U&&(I+=x[v++]<<j,j+=8)),S<(ee+=I&(1<<U)-1)){f.msg="invalid distance too far back",y.mode=30;break e}if(I>>>=U,j-=U,(U=w-_)<ee){if(g<(U=ee-U)&&y.sane){f.msg="invalid distance too far back",y.mode=30;break e}if(Z=A,(k=0)===E){if(k+=R-U,U<ae){for(ae-=U;G[w++]=A[k++],--U;);k=w-ee,Z=G}}else if(E<U){if(k+=R+E-U,(U-=E)<ae){for(ae-=U;G[w++]=A[k++],--U;);if(k=0,E<ae){for(ae-=U=E;G[w++]=A[k++],--U;);k=w-ee,Z=G}}}else if(k+=E-U,U<ae){for(ae-=U;G[w++]=A[k++],--U;);k=w-ee,Z=G}for(;2<ae;)G[w++]=Z[k++],G[w++]=Z[k++],G[w++]=Z[k++],ae-=3;ae&&(G[w++]=Z[k++],1<ae&&(G[w++]=Z[k++]))}else{for(k=w-ee;G[w++]=G[k++],G[w++]=G[k++],G[w++]=G[k++],2<(ae-=3););ae&&(G[w++]=G[k++],1<ae&&(G[w++]=G[k++]))}break}}break}}while(v<p&&w<T);v-=ae=j>>3,I&=(1<<(j-=ae<<3))-1,f.next_in=v,f.next_out=w,f.avail_in=v<p?p-v+5:5-(v-p),f.avail_out=w<T?T-w+257:257-(w-T),y.hold=I,y.bits=j}},{}],49:[function(l,c,d){var f=l("../utils/common"),m=l("./adler32"),y=l("./crc32"),v=l("./inffast"),p=l("./inftrees"),w=1,_=2,T=0,S=-2,R=1,g=852,E=592;function A(k){return(k>>>24&255)+(k>>>8&65280)+((65280&k)<<8)+((255&k)<<24)}function I(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function j(k){var Z;return k&&k.state?(Z=k.state,k.total_in=k.total_out=Z.total=0,k.msg="",Z.wrap&&(k.adler=1&Z.wrap),Z.mode=R,Z.last=0,Z.havedict=0,Z.dmax=32768,Z.head=null,Z.hold=0,Z.bits=0,Z.lencode=Z.lendyn=new f.Buf32(g),Z.distcode=Z.distdyn=new f.Buf32(E),Z.sane=1,Z.back=-1,T):S}function P(k){var Z;return k&&k.state?((Z=k.state).wsize=0,Z.whave=0,Z.wnext=0,j(k)):S}function D(k,Z){var x,G;return k&&k.state?(G=k.state,Z<0?(x=0,Z=-Z):(x=1+(Z>>4),Z<48&&(Z&=15)),Z&&(Z<8||15<Z)?S:(G.window!==null&&G.wbits!==Z&&(G.window=null),G.wrap=x,G.wbits=Z,P(k))):S}function X(k,Z){var x,G;return k?(G=new I,(k.state=G).window=null,(x=D(k,Z))!==T&&(k.state=null),x):S}var H,$,U=!0;function ae(k){if(U){var Z;for(H=new f.Buf32(512),$=new f.Buf32(32),Z=0;Z<144;)k.lens[Z++]=8;for(;Z<256;)k.lens[Z++]=9;for(;Z<280;)k.lens[Z++]=7;for(;Z<288;)k.lens[Z++]=8;for(p(w,k.lens,0,288,H,0,k.work,{bits:9}),Z=0;Z<32;)k.lens[Z++]=5;p(_,k.lens,0,32,$,0,k.work,{bits:5}),U=!1}k.lencode=H,k.lenbits=9,k.distcode=$,k.distbits=5}function ee(k,Z,x,G){var F,V=k.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new f.Buf8(V.wsize)),G>=V.wsize?(f.arraySet(V.window,Z,x-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(G<(F=V.wsize-V.wnext)&&(F=G),f.arraySet(V.window,Z,x-G,F,V.wnext),(G-=F)?(f.arraySet(V.window,Z,x-G,G,0),V.wnext=G,V.whave=V.wsize):(V.wnext+=F,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=F))),0}d.inflateReset=P,d.inflateReset2=D,d.inflateResetKeep=j,d.inflateInit=function(k){return X(k,15)},d.inflateInit2=X,d.inflate=function(k,Z){var x,G,F,V,ue,te,ge,C,L,ie,se,oe,Ae,Te,Ne,Se,Pe,et,Rt,Tt,b,de,re,z,O=0,Y=new f.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!k||!k.state||!k.output||!k.input&&k.avail_in!==0)return S;(x=k.state).mode===12&&(x.mode=13),ue=k.next_out,F=k.output,ge=k.avail_out,V=k.next_in,G=k.input,te=k.avail_in,C=x.hold,L=x.bits,ie=te,se=ge,de=T;e:for(;;)switch(x.mode){case R:if(x.wrap===0){x.mode=13;break}for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(2&x.wrap&&C===35615){Y[x.check=0]=255&C,Y[1]=C>>>8&255,x.check=y(x.check,Y,2,0),L=C=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&C)<<8)+(C>>8))%31){k.msg="incorrect header check",x.mode=30;break}if((15&C)!=8){k.msg="unknown compression method",x.mode=30;break}if(L-=4,b=8+(15&(C>>>=4)),x.wbits===0)x.wbits=b;else if(b>x.wbits){k.msg="invalid window size",x.mode=30;break}x.dmax=1<<b,k.adler=x.check=1,x.mode=512&C?10:12,L=C=0;break;case 2:for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(x.flags=C,(255&x.flags)!=8){k.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){k.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=C>>8&1),512&x.flags&&(Y[0]=255&C,Y[1]=C>>>8&255,x.check=y(x.check,Y,2,0)),L=C=0,x.mode=3;case 3:for(;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.head&&(x.head.time=C),512&x.flags&&(Y[0]=255&C,Y[1]=C>>>8&255,Y[2]=C>>>16&255,Y[3]=C>>>24&255,x.check=y(x.check,Y,4,0)),L=C=0,x.mode=4;case 4:for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.head&&(x.head.xflags=255&C,x.head.os=C>>8),512&x.flags&&(Y[0]=255&C,Y[1]=C>>>8&255,x.check=y(x.check,Y,2,0)),L=C=0,x.mode=5;case 5:if(1024&x.flags){for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.length=C,x.head&&(x.head.extra_len=C),512&x.flags&&(Y[0]=255&C,Y[1]=C>>>8&255,x.check=y(x.check,Y,2,0)),L=C=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(te<(oe=x.length)&&(oe=te),oe&&(x.head&&(b=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),f.arraySet(x.head.extra,G,V,oe,b)),512&x.flags&&(x.check=y(x.check,G,oe,V)),te-=oe,V+=oe,x.length-=oe),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(te===0)break e;for(oe=0;b=G[V+oe++],x.head&&b&&x.length<65536&&(x.head.name+=String.fromCharCode(b)),b&&oe<te;);if(512&x.flags&&(x.check=y(x.check,G,oe,V)),te-=oe,V+=oe,b)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(te===0)break e;for(oe=0;b=G[V+oe++],x.head&&b&&x.length<65536&&(x.head.comment+=String.fromCharCode(b)),b&&oe<te;);if(512&x.flags&&(x.check=y(x.check,G,oe,V)),te-=oe,V+=oe,b)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;L<16;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(C!==(65535&x.check)){k.msg="header crc mismatch",x.mode=30;break}L=C=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),k.adler=x.check=0,x.mode=12;break;case 10:for(;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}k.adler=x.check=A(C),L=C=0,x.mode=11;case 11:if(x.havedict===0)return k.next_out=ue,k.avail_out=ge,k.next_in=V,k.avail_in=te,x.hold=C,x.bits=L,2;k.adler=x.check=1,x.mode=12;case 12:if(Z===5||Z===6)break e;case 13:if(x.last){C>>>=7&L,L-=7&L,x.mode=27;break}for(;L<3;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}switch(x.last=1&C,L-=1,3&(C>>>=1)){case 0:x.mode=14;break;case 1:if(ae(x),x.mode=20,Z!==6)break;C>>>=2,L-=2;break e;case 2:x.mode=17;break;case 3:k.msg="invalid block type",x.mode=30}C>>>=2,L-=2;break;case 14:for(C>>>=7&L,L-=7&L;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if((65535&C)!=(C>>>16^65535)){k.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&C,L=C=0,x.mode=15,Z===6)break e;case 15:x.mode=16;case 16:if(oe=x.length){if(te<oe&&(oe=te),ge<oe&&(oe=ge),oe===0)break e;f.arraySet(F,G,V,oe,ue),te-=oe,V+=oe,ge-=oe,ue+=oe,x.length-=oe;break}x.mode=12;break;case 17:for(;L<14;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(x.nlen=257+(31&C),C>>>=5,L-=5,x.ndist=1+(31&C),C>>>=5,L-=5,x.ncode=4+(15&C),C>>>=4,L-=4,286<x.nlen||30<x.ndist){k.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;L<3;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.lens[he[x.have++]]=7&C,C>>>=3,L-=3}for(;x.have<19;)x.lens[he[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,re={bits:x.lenbits},de=p(0,x.lens,0,19,x.lencode,0,x.work,re),x.lenbits=re.bits,de){k.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Se=(O=x.lencode[C&(1<<x.lenbits)-1])>>>16&255,Pe=65535&O,!((Ne=O>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(Pe<16)C>>>=Ne,L-=Ne,x.lens[x.have++]=Pe;else{if(Pe===16){for(z=Ne+2;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(C>>>=Ne,L-=Ne,x.have===0){k.msg="invalid bit length repeat",x.mode=30;break}b=x.lens[x.have-1],oe=3+(3&C),C>>>=2,L-=2}else if(Pe===17){for(z=Ne+3;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}L-=Ne,b=0,oe=3+(7&(C>>>=Ne)),C>>>=3,L-=3}else{for(z=Ne+7;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}L-=Ne,b=0,oe=11+(127&(C>>>=Ne)),C>>>=7,L-=7}if(x.have+oe>x.nlen+x.ndist){k.msg="invalid bit length repeat",x.mode=30;break}for(;oe--;)x.lens[x.have++]=b}}if(x.mode===30)break;if(x.lens[256]===0){k.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,re={bits:x.lenbits},de=p(w,x.lens,0,x.nlen,x.lencode,0,x.work,re),x.lenbits=re.bits,de){k.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,re={bits:x.distbits},de=p(_,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,re),x.distbits=re.bits,de){k.msg="invalid distances set",x.mode=30;break}if(x.mode=20,Z===6)break e;case 20:x.mode=21;case 21:if(6<=te&&258<=ge){k.next_out=ue,k.avail_out=ge,k.next_in=V,k.avail_in=te,x.hold=C,x.bits=L,v(k,se),ue=k.next_out,F=k.output,ge=k.avail_out,V=k.next_in,G=k.input,te=k.avail_in,C=x.hold,L=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Se=(O=x.lencode[C&(1<<x.lenbits)-1])>>>16&255,Pe=65535&O,!((Ne=O>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(Se&&(240&Se)==0){for(et=Ne,Rt=Se,Tt=Pe;Se=(O=x.lencode[Tt+((C&(1<<et+Rt)-1)>>et)])>>>16&255,Pe=65535&O,!(et+(Ne=O>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}C>>>=et,L-=et,x.back+=et}if(C>>>=Ne,L-=Ne,x.back+=Ne,x.length=Pe,Se===0){x.mode=26;break}if(32&Se){x.back=-1,x.mode=12;break}if(64&Se){k.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Se,x.mode=22;case 22:if(x.extra){for(z=x.extra;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.length+=C&(1<<x.extra)-1,C>>>=x.extra,L-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Se=(O=x.distcode[C&(1<<x.distbits)-1])>>>16&255,Pe=65535&O,!((Ne=O>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if((240&Se)==0){for(et=Ne,Rt=Se,Tt=Pe;Se=(O=x.distcode[Tt+((C&(1<<et+Rt)-1)>>et)])>>>16&255,Pe=65535&O,!(et+(Ne=O>>>24)<=L);){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}C>>>=et,L-=et,x.back+=et}if(C>>>=Ne,L-=Ne,x.back+=Ne,64&Se){k.msg="invalid distance code",x.mode=30;break}x.offset=Pe,x.extra=15&Se,x.mode=24;case 24:if(x.extra){for(z=x.extra;L<z;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}x.offset+=C&(1<<x.extra)-1,C>>>=x.extra,L-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){k.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(ge===0)break e;if(oe=se-ge,x.offset>oe){if((oe=x.offset-oe)>x.whave&&x.sane){k.msg="invalid distance too far back",x.mode=30;break}Ae=oe>x.wnext?(oe-=x.wnext,x.wsize-oe):x.wnext-oe,oe>x.length&&(oe=x.length),Te=x.window}else Te=F,Ae=ue-x.offset,oe=x.length;for(ge<oe&&(oe=ge),ge-=oe,x.length-=oe;F[ue++]=Te[Ae++],--oe;);x.length===0&&(x.mode=21);break;case 26:if(ge===0)break e;F[ue++]=x.length,ge--,x.mode=21;break;case 27:if(x.wrap){for(;L<32;){if(te===0)break e;te--,C|=G[V++]<<L,L+=8}if(se-=ge,k.total_out+=se,x.total+=se,se&&(k.adler=x.check=x.flags?y(x.check,F,se,ue-se):m(x.check,F,se,ue-se)),se=ge,(x.flags?C:A(C))!==x.check){k.msg="incorrect data check",x.mode=30;break}L=C=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;L<32;){if(te===0)break e;te--,C+=G[V++]<<L,L+=8}if(C!==(4294967295&x.total)){k.msg="incorrect length check",x.mode=30;break}L=C=0}x.mode=29;case 29:de=1;break e;case 30:de=-3;break e;case 31:return-4;case 32:default:return S}return k.next_out=ue,k.avail_out=ge,k.next_in=V,k.avail_in=te,x.hold=C,x.bits=L,(x.wsize||se!==k.avail_out&&x.mode<30&&(x.mode<27||Z!==4))&&ee(k,k.output,k.next_out,se-k.avail_out)?(x.mode=31,-4):(ie-=k.avail_in,se-=k.avail_out,k.total_in+=ie,k.total_out+=se,x.total+=se,x.wrap&&se&&(k.adler=x.check=x.flags?y(x.check,F,se,k.next_out-se):m(x.check,F,se,k.next_out-se)),k.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(ie==0&&se===0||Z===4)&&de===T&&(de=-5),de)},d.inflateEnd=function(k){if(!k||!k.state)return S;var Z=k.state;return Z.window&&(Z.window=null),k.state=null,T},d.inflateGetHeader=function(k,Z){var x;return k&&k.state?(2&(x=k.state).wrap)==0?S:((x.head=Z).done=!1,T):S},d.inflateSetDictionary=function(k,Z){var x,G=Z.length;return k&&k.state?(x=k.state).wrap!==0&&x.mode!==11?S:x.mode===11&&m(1,Z,G,0)!==x.check?-3:ee(k,Z,G,G)?(x.mode=31,-4):(x.havedict=1,T):S},d.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,c,d){var f=l("../utils/common"),m=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],y=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],v=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];c.exports=function(w,_,T,S,R,g,E,A){var I,j,P,D,X,H,$,U,ae,ee=A.bits,k=0,Z=0,x=0,G=0,F=0,V=0,ue=0,te=0,ge=0,C=0,L=null,ie=0,se=new f.Buf16(16),oe=new f.Buf16(16),Ae=null,Te=0;for(k=0;k<=15;k++)se[k]=0;for(Z=0;Z<S;Z++)se[_[T+Z]]++;for(F=ee,G=15;1<=G&&se[G]===0;G--);if(G<F&&(F=G),G===0)return R[g++]=20971520,R[g++]=20971520,A.bits=1,0;for(x=1;x<G&&se[x]===0;x++);for(F<x&&(F=x),k=te=1;k<=15;k++)if(te<<=1,(te-=se[k])<0)return-1;if(0<te&&(w===0||G!==1))return-1;for(oe[1]=0,k=1;k<15;k++)oe[k+1]=oe[k]+se[k];for(Z=0;Z<S;Z++)_[T+Z]!==0&&(E[oe[_[T+Z]]++]=Z);if(H=w===0?(L=Ae=E,19):w===1?(L=m,ie-=257,Ae=y,Te-=257,256):(L=v,Ae=p,-1),k=x,X=g,ue=Z=C=0,P=-1,D=(ge=1<<(V=F))-1,w===1&&852<ge||w===2&&592<ge)return 1;for(;;){for($=k-ue,ae=E[Z]<H?(U=0,E[Z]):E[Z]>H?(U=Ae[Te+E[Z]],L[ie+E[Z]]):(U=96,0),I=1<<k-ue,x=j=1<<V;R[X+(C>>ue)+(j-=I)]=$<<24|U<<16|ae|0,j!==0;);for(I=1<<k-1;C&I;)I>>=1;if(I!==0?(C&=I-1,C+=I):C=0,Z++,--se[k]==0){if(k===G)break;k=_[T+E[Z]]}if(F<k&&(C&D)!==P){for(ue===0&&(ue=F),X+=x,te=1<<(V=k-ue);V+ue<G&&!((te-=se[V+ue])<=0);)V++,te<<=1;if(ge+=1<<V,w===1&&852<ge||w===2&&592<ge)return 1;R[P=C&D]=F<<24|V<<16|X-g|0}}return C!==0&&(R[X+C]=k-ue<<24|64<<16|0),A.bits=F,0}},{"../utils/common":41}],51:[function(l,c,d){c.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,c,d){var f=l("../utils/common"),m=0,y=1;function v(O){for(var Y=O.length;0<=--Y;)O[Y]=0}var p=0,w=29,_=256,T=_+1+w,S=30,R=19,g=2*T+1,E=15,A=16,I=7,j=256,P=16,D=17,X=18,H=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],$=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],U=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=new Array(2*(T+2));v(ee);var k=new Array(2*S);v(k);var Z=new Array(512);v(Z);var x=new Array(256);v(x);var G=new Array(w);v(G);var F,V,ue,te=new Array(S);function ge(O,Y,he,pe,W){this.static_tree=O,this.extra_bits=Y,this.extra_base=he,this.elems=pe,this.max_length=W,this.has_stree=O&&O.length}function C(O,Y){this.dyn_tree=O,this.max_code=0,this.stat_desc=Y}function L(O){return O<256?Z[O]:Z[256+(O>>>7)]}function ie(O,Y){O.pending_buf[O.pending++]=255&Y,O.pending_buf[O.pending++]=Y>>>8&255}function se(O,Y,he){O.bi_valid>A-he?(O.bi_buf|=Y<<O.bi_valid&65535,ie(O,O.bi_buf),O.bi_buf=Y>>A-O.bi_valid,O.bi_valid+=he-A):(O.bi_buf|=Y<<O.bi_valid&65535,O.bi_valid+=he)}function oe(O,Y,he){se(O,he[2*Y],he[2*Y+1])}function Ae(O,Y){for(var he=0;he|=1&O,O>>>=1,he<<=1,0<--Y;);return he>>>1}function Te(O,Y,he){var pe,W,ye=new Array(E+1),xe=0;for(pe=1;pe<=E;pe++)ye[pe]=xe=xe+he[pe-1]<<1;for(W=0;W<=Y;W++){var ve=O[2*W+1];ve!==0&&(O[2*W]=Ae(ye[ve]++,ve))}}function Ne(O){var Y;for(Y=0;Y<T;Y++)O.dyn_ltree[2*Y]=0;for(Y=0;Y<S;Y++)O.dyn_dtree[2*Y]=0;for(Y=0;Y<R;Y++)O.bl_tree[2*Y]=0;O.dyn_ltree[2*j]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Se(O){8<O.bi_valid?ie(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function Pe(O,Y,he,pe){var W=2*Y,ye=2*he;return O[W]<O[ye]||O[W]===O[ye]&&pe[Y]<=pe[he]}function et(O,Y,he){for(var pe=O.heap[he],W=he<<1;W<=O.heap_len&&(W<O.heap_len&&Pe(Y,O.heap[W+1],O.heap[W],O.depth)&&W++,!Pe(Y,pe,O.heap[W],O.depth));)O.heap[he]=O.heap[W],he=W,W<<=1;O.heap[he]=pe}function Rt(O,Y,he){var pe,W,ye,xe,ve=0;if(O.last_lit!==0)for(;pe=O.pending_buf[O.d_buf+2*ve]<<8|O.pending_buf[O.d_buf+2*ve+1],W=O.pending_buf[O.l_buf+ve],ve++,pe===0?oe(O,W,Y):(oe(O,(ye=x[W])+_+1,Y),(xe=H[ye])!==0&&se(O,W-=G[ye],xe),oe(O,ye=L(--pe),he),(xe=$[ye])!==0&&se(O,pe-=te[ye],xe)),ve<O.last_lit;);oe(O,j,Y)}function Tt(O,Y){var he,pe,W,ye=Y.dyn_tree,xe=Y.stat_desc.static_tree,ve=Y.stat_desc.has_stree,we=Y.stat_desc.elems,Ye=-1;for(O.heap_len=0,O.heap_max=g,he=0;he<we;he++)ye[2*he]!==0?(O.heap[++O.heap_len]=Ye=he,O.depth[he]=0):ye[2*he+1]=0;for(;O.heap_len<2;)ye[2*(W=O.heap[++O.heap_len]=Ye<2?++Ye:0)]=1,O.depth[W]=0,O.opt_len--,ve&&(O.static_len-=xe[2*W+1]);for(Y.max_code=Ye,he=O.heap_len>>1;1<=he;he--)et(O,ye,he);for(W=we;he=O.heap[1],O.heap[1]=O.heap[O.heap_len--],et(O,ye,1),pe=O.heap[1],O.heap[--O.heap_max]=he,O.heap[--O.heap_max]=pe,ye[2*W]=ye[2*he]+ye[2*pe],O.depth[W]=(O.depth[he]>=O.depth[pe]?O.depth[he]:O.depth[pe])+1,ye[2*he+1]=ye[2*pe+1]=W,O.heap[1]=W++,et(O,ye,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],(function(Le,Nt){var jn,Ht,sa,We,mt,$t,rt=Nt.dyn_tree,hi=Nt.max_code,$s=Nt.stat_desc.static_tree,Gs=Nt.stat_desc.has_stree,Ra=Nt.stat_desc.extra_bits,la=Nt.stat_desc.extra_base,cn=Nt.stat_desc.max_length,Gt=0;for(We=0;We<=E;We++)Le.bl_count[We]=0;for(rt[2*Le.heap[Le.heap_max]+1]=0,jn=Le.heap_max+1;jn<g;jn++)cn<(We=rt[2*rt[2*(Ht=Le.heap[jn])+1]+1]+1)&&(We=cn,Gt++),rt[2*Ht+1]=We,hi<Ht||(Le.bl_count[We]++,mt=0,la<=Ht&&(mt=Ra[Ht-la]),$t=rt[2*Ht],Le.opt_len+=$t*(We+mt),Gs&&(Le.static_len+=$t*($s[2*Ht+1]+mt)));if(Gt!==0){do{for(We=cn-1;Le.bl_count[We]===0;)We--;Le.bl_count[We]--,Le.bl_count[We+1]+=2,Le.bl_count[cn]--,Gt-=2}while(0<Gt);for(We=cn;We!==0;We--)for(Ht=Le.bl_count[We];Ht!==0;)hi<(sa=Le.heap[--jn])||(rt[2*sa+1]!==We&&(Le.opt_len+=(We-rt[2*sa+1])*rt[2*sa],rt[2*sa+1]=We),Ht--)}})(O,Y),Te(ye,Ye,O.bl_count)}function b(O,Y,he){var pe,W,ye=-1,xe=Y[1],ve=0,we=7,Ye=4;for(xe===0&&(we=138,Ye=3),Y[2*(he+1)+1]=65535,pe=0;pe<=he;pe++)W=xe,xe=Y[2*(pe+1)+1],++ve<we&&W===xe||(ve<Ye?O.bl_tree[2*W]+=ve:W!==0?(W!==ye&&O.bl_tree[2*W]++,O.bl_tree[2*P]++):ve<=10?O.bl_tree[2*D]++:O.bl_tree[2*X]++,ye=W,Ye=(ve=0)===xe?(we=138,3):W===xe?(we=6,3):(we=7,4))}function de(O,Y,he){var pe,W,ye=-1,xe=Y[1],ve=0,we=7,Ye=4;for(xe===0&&(we=138,Ye=3),pe=0;pe<=he;pe++)if(W=xe,xe=Y[2*(pe+1)+1],!(++ve<we&&W===xe)){if(ve<Ye)for(;oe(O,W,O.bl_tree),--ve!=0;);else W!==0?(W!==ye&&(oe(O,W,O.bl_tree),ve--),oe(O,P,O.bl_tree),se(O,ve-3,2)):ve<=10?(oe(O,D,O.bl_tree),se(O,ve-3,3)):(oe(O,X,O.bl_tree),se(O,ve-11,7));ye=W,Ye=(ve=0)===xe?(we=138,3):W===xe?(we=6,3):(we=7,4)}}v(te);var re=!1;function z(O,Y,he,pe){se(O,(p<<1)+(pe?1:0),3),(function(W,ye,xe,ve){Se(W),ie(W,xe),ie(W,~xe),f.arraySet(W.pending_buf,W.window,ye,xe,W.pending),W.pending+=xe})(O,Y,he)}d._tr_init=function(O){re||((function(){var Y,he,pe,W,ye,xe=new Array(E+1);for(W=pe=0;W<w-1;W++)for(G[W]=pe,Y=0;Y<1<<H[W];Y++)x[pe++]=W;for(x[pe-1]=W,W=ye=0;W<16;W++)for(te[W]=ye,Y=0;Y<1<<$[W];Y++)Z[ye++]=W;for(ye>>=7;W<S;W++)for(te[W]=ye<<7,Y=0;Y<1<<$[W]-7;Y++)Z[256+ye++]=W;for(he=0;he<=E;he++)xe[he]=0;for(Y=0;Y<=143;)ee[2*Y+1]=8,Y++,xe[8]++;for(;Y<=255;)ee[2*Y+1]=9,Y++,xe[9]++;for(;Y<=279;)ee[2*Y+1]=7,Y++,xe[7]++;for(;Y<=287;)ee[2*Y+1]=8,Y++,xe[8]++;for(Te(ee,T+1,xe),Y=0;Y<S;Y++)k[2*Y+1]=5,k[2*Y]=Ae(Y,5);F=new ge(ee,H,_+1,T,E),V=new ge(k,$,0,S,E),ue=new ge(new Array(0),U,0,R,I)})(),re=!0),O.l_desc=new C(O.dyn_ltree,F),O.d_desc=new C(O.dyn_dtree,V),O.bl_desc=new C(O.bl_tree,ue),O.bi_buf=0,O.bi_valid=0,Ne(O)},d._tr_stored_block=z,d._tr_flush_block=function(O,Y,he,pe){var W,ye,xe=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=(function(ve){var we,Ye=4093624447;for(we=0;we<=31;we++,Ye>>>=1)if(1&Ye&&ve.dyn_ltree[2*we]!==0)return m;if(ve.dyn_ltree[18]!==0||ve.dyn_ltree[20]!==0||ve.dyn_ltree[26]!==0)return y;for(we=32;we<_;we++)if(ve.dyn_ltree[2*we]!==0)return y;return m})(O)),Tt(O,O.l_desc),Tt(O,O.d_desc),xe=(function(ve){var we;for(b(ve,ve.dyn_ltree,ve.l_desc.max_code),b(ve,ve.dyn_dtree,ve.d_desc.max_code),Tt(ve,ve.bl_desc),we=R-1;3<=we&&ve.bl_tree[2*ae[we]+1]===0;we--);return ve.opt_len+=3*(we+1)+5+5+4,we})(O),W=O.opt_len+3+7>>>3,(ye=O.static_len+3+7>>>3)<=W&&(W=ye)):W=ye=he+5,he+4<=W&&Y!==-1?z(O,Y,he,pe):O.strategy===4||ye===W?(se(O,2+(pe?1:0),3),Rt(O,ee,k)):(se(O,4+(pe?1:0),3),(function(ve,we,Ye,Le){var Nt;for(se(ve,we-257,5),se(ve,Ye-1,5),se(ve,Le-4,4),Nt=0;Nt<Le;Nt++)se(ve,ve.bl_tree[2*ae[Nt]+1],3);de(ve,ve.dyn_ltree,we-1),de(ve,ve.dyn_dtree,Ye-1)})(O,O.l_desc.max_code+1,O.d_desc.max_code+1,xe+1),Rt(O,O.dyn_ltree,O.dyn_dtree)),Ne(O),pe&&Se(O)},d._tr_tally=function(O,Y,he){return O.pending_buf[O.d_buf+2*O.last_lit]=Y>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&Y,O.pending_buf[O.l_buf+O.last_lit]=255&he,O.last_lit++,Y===0?O.dyn_ltree[2*he]++:(O.matches++,Y--,O.dyn_ltree[2*(x[he]+_+1)]++,O.dyn_dtree[2*L(Y)]++),O.last_lit===O.lit_bufsize-1},d._tr_align=function(O){se(O,2,3),oe(O,j,ee),(function(Y){Y.bi_valid===16?(ie(Y,Y.bi_buf),Y.bi_buf=0,Y.bi_valid=0):8<=Y.bi_valid&&(Y.pending_buf[Y.pending++]=255&Y.bi_buf,Y.bi_buf>>=8,Y.bi_valid-=8)})(O)}},{"../utils/common":41}],53:[function(l,c,d){c.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,c,d){(function(f){(function(m,y){if(!m.setImmediate){var v,p,w,_,T=1,S={},R=!1,g=m.document,E=Object.getPrototypeOf&&Object.getPrototypeOf(m);E=E&&E.setTimeout?E:m,v={}.toString.call(m.process)==="[object process]"?function(P){process.nextTick(function(){I(P)})}:(function(){if(m.postMessage&&!m.importScripts){var P=!0,D=m.onmessage;return m.onmessage=function(){P=!1},m.postMessage("","*"),m.onmessage=D,P}})()?(_="setImmediate$"+Math.random()+"$",m.addEventListener?m.addEventListener("message",j,!1):m.attachEvent("onmessage",j),function(P){m.postMessage(_+P,"*")}):m.MessageChannel?((w=new MessageChannel).port1.onmessage=function(P){I(P.data)},function(P){w.port2.postMessage(P)}):g&&"onreadystatechange"in g.createElement("script")?(p=g.documentElement,function(P){var D=g.createElement("script");D.onreadystatechange=function(){I(P),D.onreadystatechange=null,p.removeChild(D),D=null},p.appendChild(D)}):function(P){setTimeout(I,0,P)},E.setImmediate=function(P){typeof P!="function"&&(P=new Function(""+P));for(var D=new Array(arguments.length-1),X=0;X<D.length;X++)D[X]=arguments[X+1];var H={callback:P,args:D};return S[T]=H,v(T),T++},E.clearImmediate=A}function A(P){delete S[P]}function I(P){if(R)setTimeout(I,0,P);else{var D=S[P];if(D){R=!0;try{(function(X){var H=X.callback,$=X.args;switch($.length){case 0:H();break;case 1:H($[0]);break;case 2:H($[0],$[1]);break;case 3:H($[0],$[1],$[2]);break;default:H.apply(y,$)}})(D)}finally{A(P),R=!1}}}}function j(P){P.source===m&&typeof P.data=="string"&&P.data.indexOf(_)===0&&I(+P.data.slice(_.length))}})(typeof self>"u"?f===void 0?this:f:self)}).call(this,typeof Ts<"u"?Ts:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(hc)),hc.exports}var av=nv();const rv=Ic(av),iv=({logs:u,currentRound:o,currentPaperVersion:l,filePrefix:c,dataAlert:d,dataFileName:f,dataFileContent:m})=>{const[y,v]=be.useState([]),[p,w]=be.useState(null),[_,T]=be.useState(!1),[S,R]=be.useState(!1),[g,E]=be.useState(null),[A,I]=be.useState(null),[j,P]=be.useState(!1),[D,X]=be.useState(!1),H=async()=>{T(!0),w(null);const Z=ra(l,"icis_paper"),x=ci(o),G=kc();if(!Z){w("Missing paper file to save"),T(!1);return}try{const F=c?`${c}_`:"",V=new rv,ue=[],te=Mc();te&&(V.file(te.filename,te.blob),ue.push(te.filename),console.log(`[SaveAll] Added PDF: ${te.filename}`));const ge=`${F}icis_paper_v${l}_FINAL.tex`;V.file(ge,Z),ue.push(ge),console.log(`[SaveAll] Added TeX: ${ge}`);const C=Fp();if(C){const Se=`${F}${C.filename}`;V.file(Se,C.content),ue.push(Se),console.log(`[SaveAll] Added BibTeX: ${Se}`)}const L=kp();if(L.length>0){console.log(`[SaveAll] Adding ${L.length} PNG figures...`);const Se=await Lp();for(const Pe of Se)V.file(Pe.filename,Pe.blob),ue.push(Pe.filename);console.log(`[SaveAll] Added ${Se.length} PNG figures`)}if(f&&m&&(V.file(f,m),ue.push(f),console.log(`[SaveAll] Added data file: ${f}`)),x){const Se=`${F}feedback_v${o}.json`;V.file(Se,JSON.stringify(x,null,2)),ue.push(Se)}if(G&&G.length>0)for(const Se of G){const Pe=`${F}oversight_v${Se.version||1}.json`;V.file(Pe,JSON.stringify(Se,null,2)),ue.push(Pe)}const ie=Bp();if(ie){const Se=`${F}chart_data${ie.isSynthetic?"_synthetic":""}.json`;V.file(Se,ie.chartDataJson),ue.push(Se),console.log(`[SaveAll] Added chart data: ${Se}`);const Pe=`${F}visualization_code.py`;V.file(Pe,ie.pythonCode),ue.push(Pe),console.log(`[SaveAll] Added Python code: ${Pe}`)}const se=await V.generateAsync({type:"blob"}),oe=`${F}icis_submission_v${l}.zip`,Ae=URL.createObjectURL(se),Te=document.createElement("a");Te.href=Ae,Te.download=oe,document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),URL.revokeObjectURL(Ae),console.log(`[SaveAll] Downloaded ${oe} with ${ue.length} files`),v([oe,...ue]);const Ne=await Dp();Ne.success?console.log("[SaveAll] Data file cleaned up from cloud storage"):console.warn("[SaveAll] Failed to clean up data file:",Ne.error)}catch(F){console.error("[SaveAll] Error:",F),w(F instanceof Error?F.message:"Failed to create zip file")}T(!1)},$=async()=>{R(!0),E(null),w(null);const Z=ra(l,"icis_paper");if(!Z){w("No paper content available to compile"),R(!1);return}const G=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,F=zp();console.log(`[Compile] Compiling with ${F.length} PNG figures`);const V=await Ep(G,Z,F.length>0?F:void 0);E(V),V.success||w(V.error||"PDF compilation failed"),R(!1)},U=()=>{g!=null&&g.pdfFilename&&_p(g.pdfFilename)},ae=async()=>{P(!0),X(!1);const x=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,G=await wp(x);I(G),P(!1)},ee=()=>{A!=null&&A.fullUrl&&(navigator.clipboard.writeText(A.fullUrl),X(!0),setTimeout(()=>X(!1),3e3))},k=()=>{A!=null&&A.fullUrl&&Rp(A.fullUrl)};return s.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[s.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:s.jsx(Oc,{size:40})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),s.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",o," revision cycle(s)."]}),s.jsx(di,{logs:u,height:"h-32"}),s.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Paper compiled (v",l,")"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," All sections verified"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Submission package generated"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),s.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[s.jsx("button",{onClick:$,disabled:S||_,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:S?s.jsxs(s.Fragment,{children:[s.jsx(Kh,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Us,{size:18}),"Compile LaTeX to PDF"]})}),(g==null?void 0:g.success)&&s.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),s.jsxs("p",{className:"text-xs text-emerald-600",children:[g.pdfFilename," (",Math.round((g.fileSize||0)/1024)," KB)",g.pageCount&&` • ${g.pageCount} pages`]})]}),s.jsxs("button",{onClick:U,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[s.jsx(ks,{size:16}),"Download"]})]})}),(g==null?void 0:g.success)&&(g==null?void 0:g.exceedsLimit)&&s.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),s.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",g.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),d&&s.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),s.jsx("p",{className:"text-xs text-orange-700 mt-1",children:d})]}),(g==null?void 0:g.success)&&s.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(bc,{size:18,className:"text-blue-600"}),s.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),s.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),A!=null&&A.success?s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",readOnly:!0,value:A.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),s.jsxs("button",{onClick:ee,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[s.jsx(X0,{size:14}),D?"Copied!":"Copy"]})]}),s.jsx("div",{className:"flex gap-2",children:s.jsxs("button",{onClick:k,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[s.jsx(W0,{size:14}),"Open Preview"]})}),s.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",A.expiresIn]})]}):s.jsx("button",{onClick:ae,disabled:j,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:j?s.jsxs(s.Fragment,{children:[s.jsx(Kh,{size:16,className:"animate-spin"}),"Creating Link..."]}):s.jsxs(s.Fragment,{children:[s.jsx(oy,{size:16}),"Create Shareable Link"]})})]}),s.jsxs("button",{onClick:H,disabled:_||S,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(Ey,{size:18,className:_?"animate-pulse":""}),_?"Creating ZIP...":"Download All Files (.zip)"]}),s.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads ZIP with PDF, .tex, .bib, PNG figures, chart data JSON, Python code, and data files"}),y.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[s.jsxs("p",{className:"font-medium mb-1",children:["Downloaded: ",y[0]]}),s.jsxs("p",{className:"text-xs",children:["Contains ",y.length-1," files: ",y.slice(1).map(Z=>Z.split(/[/\\]/).pop()).join(", ")]})]}),p&&s.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[s.jsx("p",{className:"font-medium",children:"Error:"}),s.jsx("p",{className:"text-xs",children:p}),(g==null?void 0:g.log)&&s.jsxs("details",{className:"mt-2 text-left",children:[s.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),s.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:g.log})]})]}),s.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},sv=({state:u,isProcessing:o,onAction:l,uploadedFiles:c,onFileChange:d,detectionStatus:f,onRefreshDetection:m,onStageAbort:y,onStageRestart:v,filePrefix:p,dataFileName:w,dataFileContent:_,participantEmail:T})=>{const[S,R]=be.useState(),g=A=>{R(A),l("PROCEED_TO_SUPERVISOR")},E=()=>{switch(u.currentStage){case me.SETUP:const A=u.rounds.length>0||u.currentPaperVersion>0||u.paperContent!=="";return s.jsx(Yy,{logs:u.logs,stageStatus:u.stages[me.SETUP],isProcessing:o,uploadedFiles:c,onFileChange:d,onAction:l,detectionStatus:f,onRefreshDetection:m,hasExistingCase:A});case me.BUILDER:return s.jsx(qy,{logs:u.logs,isProcessing:o,isPartialPaper:u.isPartialPaper,currentBuilderStep:u.currentBuilderStep,paperContent:u.paperContent,onAbort:()=>y==null?void 0:y(me.BUILDER),onRestart:()=>v==null?void 0:v(me.BUILDER)});case me.REVIEWER:const I=u.stages[me.REVIEWER]===Ie.COMPLETED;return s.jsx(Jy,{logs:u.logs,isProcessing:o,currentRound:u.currentRound,isComplete:I,onProceedToSupervisor:g,onAbort:()=>y==null?void 0:y(me.REVIEWER),onRestart:()=>v==null?void 0:v(me.REVIEWER),filePrefix:p,participantEmail:T});case me.SUPERVISOR:const j=Os(u.currentRound),P=kc();return s.jsx(ev,{currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,lastFeedback:u.lastFeedback,isProcessing:o,oversightData:j,allOversight:P,onAction:l,reviewOutputFiles:S});case me.REVISER:return s.jsx(tv,{logs:u.logs,isProcessing:o,currentPaperVersion:u.currentPaperVersion,paperContent:u.paperContent,onAbort:()=>y==null?void 0:y(me.REVISER),onRestart:()=>v==null?void 0:v(me.REVISER)});case me.FINALIZE:return s.jsx(iv,{logs:u.logs,currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,filePrefix:p,dataAlert:u.dataAlert,dataFileName:w,dataFileContent:_});default:return s.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:s.jsxs("p",{children:["Unknown stage: ",u.currentStage]})})}};return s.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:E()})};function Ps(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://icis-deploy-12-10-2025.vercel.app":""}function Vs(){return{"Content-Type":"application/json"}}async function lv(u){const o=Ps(),l=new URLSearchParams,c=`${o}/api/participants${l.toString()?`?${l}`:""}`,f=await(await fetch(c,{headers:Vs()})).json();if(!f.success)throw new Error(f.error||"Failed to fetch participants");return f.participants}async function ap(u){const o=Ps(),c=await(await fetch(`${o}/api/participants`,{method:"PATCH",headers:Vs(),body:JSON.stringify(u)})).json();if(!c.success)throw new Error(c.error||"Failed to update participant");return c.participant}async function ov(u){const o=Ps(),c=await(await fetch(`${o}/api/participants`,{method:"DELETE",headers:Vs(),body:JSON.stringify({email:u})})).json();if(!c.success)throw new Error(c.error||"Failed to delete participant")}async function cv(){const u=Ps(),l=await(await fetch(`${u}/api/research-stats`,{headers:Vs()})).json();if(!l.success)throw new Error(l.error||"Failed to fetch research stats");return l.stats}const Cs=({label:u,value:o,icon:l,color:c,subtext:d})=>s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-slate-500",children:u}),s.jsx("p",{className:`text-2xl font-bold ${c}`,children:o}),d&&s.jsx("p",{className:"text-xs text-slate-400 mt-1",children:d})]}),s.jsx("div",{className:`p-2 rounded-lg ${c.replace("text-","bg-").replace("-600","-100")}`,children:l})]})}),uv=({label:u,count:o,total:l,color:c})=>{const d=l>0?o/l*100:0;return s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[s.jsx("span",{className:"text-slate-600",children:u}),s.jsx("span",{className:"text-slate-800 font-medium",children:o})]}),s.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:s.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${c}`,style:{width:`${Math.max(d,2)}%`}})})]})},dv=({onViewParticipants:u})=>{const[o,l]=be.useState(null),[c,d]=be.useState(!0),[f,m]=be.useState(null),y=async()=>{d(!0),m(null);try{const p=await cv();l(p)}catch(p){m(p instanceof Error?p.message:"Failed to load stats")}finally{d(!1)}};if(be.useEffect(()=>{y()},[]),c)return s.jsx("div",{className:"flex items-center justify-center h-64",children:s.jsx(nn,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(f)return s.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[s.jsx(Sc,{size:20}),s.jsxs("span",{children:["Error: ",f]})]}),s.jsx("button",{onClick:y,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!o)return null;const v=[{label:"1. Registered",count:o.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:o.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:o.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:o.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:o.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:o.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:o.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:o.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:o.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:o.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:o.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:o.funnel.dropped_out||0,color:"bg-red-500"}];return s.jsxs("div",{className:"p-6 space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),s.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),s.jsxs("button",{onClick:y,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(nn,{size:16}),"Refresh"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[s.jsx(Cs,{label:"Total Participants",value:o.total,icon:s.jsx(gp,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${o.active} active`}),s.jsx(Cs,{label:"Surveys Sent",value:o.surveysSent,icon:s.jsx(Oc,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),s.jsx(Cs,{label:"Surveys Completed",value:o.surveysCompleted,icon:s.jsx(vc,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),s.jsx(Cs,{label:"Completion Rate",value:`${o.completionRate}%`,icon:s.jsx(pp,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),o.alerts&&o.alerts.length>0&&s.jsx("div",{className:"space-y-2",children:o.alerts.map((p,w)=>s.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${p.type==="stuck"?"bg-amber-50 border-amber-200":p.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[s.jsx(Sc,{size:18,className:p.type==="stuck"?"text-amber-500":p.type==="pending_survey"?"text-blue-500":"text-slate-500"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-sm text-slate-800",children:p.message}),s.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[p.participants.slice(0,3).join(", "),p.participants.length>3&&` +${p.participants.length-3} more`]})]})]},w))}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(gc,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),s.jsx("div",{className:"space-y-1",children:v.map(p=>s.jsx(uv,{label:p.label,count:p.count,total:o.total,color:p.color},p.label))})]}),s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(D0,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),s.jsx("span",{className:"text-lg font-bold text-emerald-600",children:o.groups.group1.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group1.dropRate,"%"]})]})]})]}),s.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),s.jsx("span",{className:"text-lg font-bold text-blue-600",children:o.groups.group2.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group2.dropRate,"%"]})]})]})]}),o.groups.unassigned>0&&s.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:s.jsxs("span",{className:"text-sm text-slate-600",children:[o.groups.unassigned," unassigned participant(s)"]})})]})]})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{onClick:u,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},Rc={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Vp={1:"With Oversight",2:"Control (No Oversight)"},fv=({status:u})=>{const o={registered:"bg-gray-100 text-gray-700",interview_completed:"bg-blue-100 text-blue-700",setup_completed:"bg-sky-100 text-sky-700",builder_completed:"bg-amber-100 text-amber-700",reviewer_completed:"bg-orange-100 text-orange-700",supervisor_completed:"bg-purple-100 text-purple-700",reviser_completed:"bg-indigo-100 text-indigo-700",finalize_completed:"bg-teal-100 text-teal-700",paper_sent:"bg-cyan-100 text-cyan-700",survey_sent:"bg-violet-100 text-violet-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o[u]}`,children:Rc[u]})},hv=({groupId:u})=>{if(u===null)return s.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const o=u===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o}`,children:Vp[u]})},pv=({onBack:u})=>{const[o,l]=be.useState([]),[c,d]=be.useState(!0),[f,m]=be.useState(null),[y,v]=be.useState(""),[p,w]=be.useState(""),[_,T]=be.useState("all"),[S,R]=be.useState(null),[g,E]=be.useState(null),A=async()=>{d(!0),m(null);try{const $=await lv();l($)}catch($){m($ instanceof Error?$.message:"Failed to load participants")}finally{d(!1)}};be.useEffect(()=>{A()},[]);const I=o.filter($=>{const U=!y||$.email.toLowerCase().includes(y.toLowerCase())||$.name.toLowerCase().includes(y.toLowerCase()),ae=!p||$.status===p,ee=_==="all"||$.group_id===_;return U&&ae&&ee}),j=async($,U)=>{try{await ap({email:$,status:U}),await A(),R(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update status")}},P=async($,U)=>{try{await ap({email:$,group_id:U}),await A(),R(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update group")}},D=async $=>{if(confirm(`Are you sure you want to delete participant ${$}?`))try{await ov($),await A(),R(null)}catch(U){alert(U instanceof Error?U.message:"Failed to delete participant")}},X=$=>new Date($).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),H=["registered","interview_completed","setup_completed","builder_completed","reviewer_completed","supervisor_completed","reviser_completed","finalize_completed","paper_sent","survey_sent","survey_completed","dropped_out"];return s.jsxs("div",{className:"p-6 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:u,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:s.jsx(L0,{size:20,className:"text-slate-600"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),s.jsxs("p",{className:"text-slate-500 text-sm",children:[I.length," of ",o.length," participants"]})]})]}),s.jsxs("button",{onClick:A,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(nn,{size:16,className:c?"animate-spin":""}),"Refresh"]})]}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[s.jsx(hp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),s.jsx("input",{type:"text",placeholder:"Search by name or email...",value:y,onChange:$=>v($.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:p,onChange:$=>w($.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"",children:"All Statuses"}),H.map($=>s.jsx("option",{value:$,children:Rc[$]},$))]}),s.jsx(yc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:_===null?"null":_==="all"?"all":_,onChange:$=>{const U=$.target.value;T(U==="all"?"all":U==="null"?null:parseInt(U))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"all",children:"All Groups"}),s.jsx("option",{value:"1",children:"Group 1: With Oversight"}),s.jsx("option",{value:"2",children:"Group 2: Control"}),s.jsx("option",{value:"null",children:"Unassigned"})]}),s.jsx(yc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),f&&s.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:f}),s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:s.jsxs("tr",{children:[s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),s.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),s.jsx("tbody",{children:c?s.jsx("tr",{children:s.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[s.jsx(nn,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):I.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):I.map($=>s.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[s.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:$.name||s.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),s.jsx("td",{className:"px-4 py-3 text-slate-600",children:$.email}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(fv,{status:$.status})}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(hv,{groupId:$.group_id})}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:X($.registered_at)}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:X($.updated_at)}),s.jsxs("td",{className:"px-4 py-3 text-right relative",children:[s.jsx("button",{onClick:()=>R(S===$.id?null:$.id),className:"p-1 rounded hover:bg-slate-100",children:s.jsx(fp,{size:16,className:"text-slate-400"})}),S===$.id&&s.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),H.map(U=>s.jsxs("button",{onClick:()=>j($.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${$.status===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[$.status===U&&s.jsx(on,{size:12}),s.jsx("span",{className:$.status===U?"":"ml-4",children:Rc[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map(U=>s.jsxs("button",{onClick:()=>P($.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${$.group_id===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[$.group_id===U&&s.jsx(on,{size:12}),s.jsx("span",{className:$.group_id===U?"":"ml-4",children:Vp[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsxs("button",{onClick:()=>D($.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[s.jsx(Ty,{size:14}),"Delete Participant"]})]})]})]},$.id))})]})})})]})},mv=({onClose:u})=>{const[o,l]=be.useState("dashboard");return s.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:o==="dashboard"?s.jsx(dv,{onViewParticipants:()=>l("participants")}):s.jsx(pv,{onBack:()=>l("dashboard")})})},gv="modulepreload",yv=function(u){return"/asd/"+u},rp={},pc=function(o,l,c){let d=Promise.resolve();if(l&&l.length>0){let m=function(p){return Promise.all(p.map(w=>Promise.resolve(w).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),v=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));d=m(l.map(p=>{if(p=yv(p),p in rp)return;rp[p]=!0;const w=p.endsWith(".css"),_=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const T=document.createElement("link");if(T.rel=w?"stylesheet":gv,w||(T.as="script"),T.crossOrigin="",T.href=p,v&&T.setAttribute("nonce",v),document.head.appendChild(T),w)return new Promise((S,R)=>{T.addEventListener("load",S),T.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${p}`)))})}))}function f(m){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=m,window.dispatchEvent(y),!y.defaultPrevented)throw m}return d.then(m=>{for(const y of m||[])y.status==="rejected"&&f(y.reason);return o().catch(f)})},vv=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
\r
Verify that the following files exist in directory "icis" or its subdirectories {ICIS_PATH}\\Data, {ICIS_PATH}\\Code, {ICIS_PATH}\\Templates:\r
- 'icisTemplate.txt' - template for writing a 16-page paper\r
- 'INTERVIEW_{participantId}_{timestamp}.txt' - interview transcript\r
- 'icis2024Examples/' - 11 representative ICIS papers for calibration\r
- 'Data_file_{participantId}.*' - [Optional] data supplied by participant\r
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
Read 11 papers in ICIS2024Examples/ to familiarize with ICIS standards and similar research.\r
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
`,bv=`================================================================================\r
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
`,xv=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
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
- 'icis2024Examples/' - 11 representative ICIS papers for calibration\r
- 'feedback_{participantId}_v*.txt' - feedback file for revision\r
- Previous paper version: icis_paper_{participantId}_v{N}.tex\r
- Existing figures in Results/ directory\r
- Existing code in Code/ directory\r
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
**GOLDEN RULE:** Revisions ADD and IMPROVE—they NEVER SUBTRACT (unless explicitly told)\r
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
`,Sv=`================================================================================
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

3. EXAMPLE PAPERS (Bundled)
   - Location: icis2024Examples/
   - Contains: 11 reference papers (pre-loaded)

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
`,Ev=`================================================================================
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
`,Av=`================================================================================
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
`,_v=`ICIS Paper Title\r
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
`,wv={SETUP:Sv,BUILDER:vv,REVIEWER:bv,SUPERVISOR:Ev,REVISER:xv,FINALIZE:Av,TEMPLATE:_v};function Rv(u){return u.replace(/\{ICIS_PATH\}/g,lp)}const Tv=Object.fromEntries(Object.entries(wv).map(([u,o])=>[u,Rv(o)]));async function Hp(u){const o=Tv[u];return o||(console.error(`Prompt not found: ${u}`),`[Prompt not found: ${u}]`)}const Tc="https://icis-deploy-12-10-2025.vercel.app",zs="http://localhost:3001";function $p(){return{"Content-Type":"application/json"}}let Fc="research";const Gp={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function Yp(){return Gp[Fc].gemini}function Nc(){return Gp[Fc].openai}function Nv(u){Fc=u,console.log(`[GeminiService] Paper mode set to: ${u}`),console.log(`[GeminiService] Using Gemini model: ${Yp()}`),console.log(`[GeminiService] Using OpenAI model: ${Nc()}`)}console.log("[API] Using Vercel proxy:",Tc);class Ms extends Error{constructor(o,l,c,d=!1,f){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.retryable=d,this.statusCode=f,this.name="GeminiError"}}const qp=u=>new Promise(o=>setTimeout(o,u));async function Cv(u,o){var p,w,_,T,S;const l=o===zs?`${o}/api/gemini/chat`:`${o}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${l}`);const c={...u,model:Yp()},d=new AbortController,f=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),d.abort()},18e4),m=await fetch(l,{method:"POST",headers:$p(),body:JSON.stringify(c),signal:d.signal});if(clearTimeout(f),!m.ok){const R=await m.json().catch(()=>({error:"Unknown error"}));throw new Ms("UNKNOWN",`Gemini proxy error: ${R.error||R.details||"Unknown error"}`,JSON.stringify(R),m.status>=500)}const y=await m.json(),v=(S=(T=(_=(w=(p=y.candidates)==null?void 0:p[0])==null?void 0:w.content)==null?void 0:_.parts)==null?void 0:T[0])==null?void 0:S.text;if(!v)throw new Ms("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(y).substring(0,200),!0);return v}async function hr(u,o){const l={contents:[{parts:[{text:u}]}],generationConfig:{maxOutputTokens:8192,temperature:.7}};o&&(l.systemInstruction={parts:[{text:o}]});const c=await Qp();if(c.type==="vercel")return console.log("[Gemini] Using Vercel proxy..."),Cv(l,c.baseUrl);throw new Ms("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function mc(u){let o=u;const l=o.match(/```latex\s*([\s\S]*?)\s*```/);l&&(o=l[1]);const c=o.indexOf("\\end{document}");return c!==-1&&(o=o.substring(0,c+14)),o=o.replace(/```javascript[\s\S]*?```/g,""),o=o.replace(/```js[\s\S]*?```/g,""),o=o.replace(/```python[\s\S]*?```/g,""),o=o.replace(/```[\s\S]*?```/g,""),o=o.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/Verification Report:[\s\S]*$/gi,""),o=o.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/console\.log\([\s\S]*?\);/g,""),o=o.replace(/const \w+ = \{[\s\S]*?\};/g,""),o=o.trim(),console.log(`[cleanLatexOutput] Cleaned content from ${u.length} to ${o.length} characters`),o}async function Iv(u,o,l="application/pdf"){throw new Ms("API_KEY_INVALID","Gemini API key is not configured","Missing VITE_GEMINI_API_KEY",!1)}function Dv(u){const o=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
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
5. Sort entries alphabetically by citation key`,minWords:500}),o}async function Ov(u,o){const l=Object.entries(o.previousSections).map(([v,p])=>`[${v}]
${p.substring(0,500)}...`).join(`

`);let c="";if(u.key==="references"){const v=Object.values(o.previousSections).join(`
`),p=/\(([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?),?\s*(\d{4})\)/g,w=new Set;let _;for(;(_=p.exec(v))!==null;){const T=_[1].replace(/\s+&\s+/g," & ").replace(/\s+and\s+/g," & "),S=_[2];w.add(`${T} (${S})`)}if(w.size>0){const T=[...w].sort().join(`
- `);console.log(`[generateSection] Found ${w.size} inline citations in paper`),c=`
CITATIONS USED IN PAPER:
The following citations were used in the paper body. Ensure you include matching references:
- ${T}

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
`):o.dataSummary&&console.log(`[generateSection] Data summary available but not used for ${u.key} section`);const m=`You are writing an academic research paper for ICIS (International Conference on Information Systems).

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
- Do NOT include section headers in your response - just the content
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
- References are generated separately and will appear at the end of the full paper`;return await hr(m,"You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.")}const jv=async(u="Mock transcript content...",o=!1,l,c,d)=>{var R,g,E,A;console.log(`[runBuilder] ENTRY - dataFileName="${c}" (type: ${typeof c})`);const f=Dv(o),m={};console.log(`[Builder] Starting section-by-section generation (${f.length} sections, ${o?"partial":"full"} paper)`);let y,v;if(c){console.log(`[Builder] Data file provided: ${c} - analyzing for ALL research types`),l==null||l("Data Analysis","starting");try{const I=await Xp(c,j=>console.log(`[Builder] ${j}`),d);console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((R=I.dataSummary)==null?void 0:R.length)||0,error:I.error}),I.success&&I.dataSummary?(y=I.dataSummary,console.log("[Builder] Data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",y.substring(0,500)),l==null||l("Data Analysis","completed")):(v=`*** DATA ALERT: Could not analyze data file "${c}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${v}`),l==null||l("Data Analysis","error"))}catch(I){v=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${v}`),l==null||l("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data analysis");let p=[],w=!1,_="";if(!o)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations BEFORE Results section..."),console.log(`[Builder] Data summary available: ${!!y}, Data file: ${c||"none"}`);const I=`Research Interview: ${u.substring(0,2e3)}`,j=await Cc(u,I,c,P=>console.log(`[Builder] ${P}`),y);p=j.figures,w=j.usedSyntheticData,p.length>0&&(_=`

GENERATED FIGURES (reference these in your Results section):
`,p.forEach((P,D)=>{_+=`- Figure ${D+1} (\\ref{fig:fig${D+1}}): ${P.description}
`}),_+=`
IMPORTANT: Reference each figure in the text using Figure~\\ref{fig:fig1}, Figure~\\ref{fig:fig2}, etc.
`,_+=`Example: "As shown in Figure~\\ref{fig:fig1}, the distribution of..."
`),j.dataAlert&&(v=v?`${v}
${j.dataAlert}`:j.dataAlert),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${p.length} figures before Results section`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error");const j=`*** VISUALIZATION ERROR: ${I.message}`;v=v?`${v}
${j}`:j,w=!0}for(const I of f)try{l==null||l(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const j=I.key==="results"&&_?(y||"")+_:y,P=await Ov(I,{interviewTranscript:u,previousSections:m,dataSummary:j});m[I.key]=P,l==null||l(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${P.split(/\s+/).length} words)`),await qp(500)}catch(j){throw l==null||l(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,j),new Error(`Failed to generate ${I.name}: ${j.message}`)}if(!o&&p.length===0)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations (post-sections fallback)...");const I=`
Abstract: ${((g=m.abstract)==null?void 0:g.substring(0,500))||""}
Research Focus: ${((E=m.introduction)==null?void 0:E.substring(0,500))||""}
Methodology: ${((A=m.methodology)==null?void 0:A.substring(0,500))||""}
`,j=await Cc(u,I,c,P=>console.log(`[Builder] ${P}`),y);p=j.figures,w=j.usedSyntheticData,j.dataAlert&&(v=v?`${v}
${j.dataAlert}`:j.dataAlert),!y&&j.dataSummary&&(y=j.dataSummary),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${p.length} figures (fallback)`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error"),w=!0}const T=Fv(m,o,p,w),S=T.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${S} words, ${p.length} figures`),{paperContent:T,dataAlert:v,usedSyntheticData:w,dataSummary:y}};function kv(u){let o=u;o=o.replace(/^```(?:bibtex|bib|latex|tex)?\s*\n?/i,""),o=o.replace(/\n?```\s*$/i,"");const l=o.search(/@\w+\s*\{/);l>0&&(o=o.substring(l));let c=0,d=o.length;for(let m=0;m<o.length;m++)o[m]==="{"&&c++,o[m]==="}"&&(c--,c===0&&(d=m+1));d<o.length&&(o=o.substring(0,d)),o=o.trim();const f=`% Bibliography generated by ICIScopilot
% ${new Date().toISOString()}

`;return console.log(`[BibTeX] Cleaned content: ${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries`),f+o}function Lv(u){let o=u;return o=o.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),o=o.replace(/([^\\])%/g,"$1\\%"),o=o.replace(/([^\\])& /g,"$1\\& "),o=o.replace(/([^\\])#/g,"$1\\#"),o=o.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),o=o.replace(/ \*([^*\s])/g," $\\ast$$1"),o=o.replace(/([^*\s])\* /g,"$1$\\ast$ "),o=o.replace(/__/g,"\\_\\_"),o=o.replace(/"/g,"''"),o=o.replace(/"/g,"``"),o=o.replace(/'/g,"'"),o=o.replace(/'/g,"`"),o}function zv(u){let o=u.replace(/\n*References:\s*\n([\s\S]*?)(?=\\section|$)/gi,"");return o=o.replace(/\\section\*?\{References\}[\s\S]*?(?=\\section|$)/gi,""),o=o.replace(/\n\nReferences\n\n((?:[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+)/gi,""),o=o.trim(),o}const Mv=`\\documentclass[12pt]{article}
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

`,Uv=`
\\end{document}
`;function Fv(u,o,l=[],c=!1){const d=o?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],f={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let m=Mv;c&&!o&&(m+=`% ============================================================================
% IMPORTANT NOTICE
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Data}\\\\[0.5em]
The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings. This paper is a draft produced by ICIScopilot and requires verification of all data before submission.
}}
\\end{center}
\\vspace{1em}

`);for(const y of d)if(u[y]){let v=Lv(u[y]);if(y!=="references"&&(v=zv(v)),y==="title")m+=`\\title{${v}}
\\maketitle

`;else if(y==="abstract")m+=`\\begin{abstract}
${v}
\\end{abstract}

`;else if(y==="references"){const p=kv(u[y]);Mp("references.bib",p),m+=`\\nocite{*}
\\bibliographystyle{apalike}
\\bibliography{references}
`}else y==="results"&&l.length>0?(m+=`\\section{${f[y]}}

`,c&&(m+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),m+=Zp(l),m+=`
${v}

`):m+=`\\section{${f[y]}}

${v}

`}return m+=Uv,m}async function Bv(u,o,l){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),l==null||l("Analyzing data with AI...");const c=u.split(`
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
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const m=await hr(f,"Analyze CSV data");if(m)return console.log("[DataAnalysis] Gemini analysis complete"),l==null||l("AI data analysis complete"),{success:!0,dataSummary:m,dataFileFound:!0}}catch(m){console.error("[DataAnalysis] Gemini analysis failed:",m)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function Xp(u,o,l){var f,m,y,v,p,w,_,T,S,R;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${u}" (type: ${typeof u})`),l){o==null||o("Loading data file preview for verification...");const g=await jp(u);if(!g.success)return console.error(`[DataAnalysis] Failed to get file preview: ${g.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${g.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${g.filename}, First line: ${(f=g.firstLine)==null?void 0:f.substring(0,100)}...`),o==null||o(`Data file found: ${u} (${g.totalLines} lines). Awaiting confirmation...`),!await l({filename:g.filename,firstLine:g.firstLine,totalLines:g.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),o==null||o("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),o==null||o("Data file confirmed. Starting analysis...")}o==null||o("Analyzing data file...");const c=fi();if(c!=null&&c.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const g=await Bv(c.content,u,o);if(g.success)return g}if(c!=null&&c.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),o==null||o("Using cloud data analysis...");try{const g=await Bs(c.content,"full");if(g.success&&g.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let E=`File: ${u}
`;if(E+=`Dataset shape: ${(m=g.summary)==null?void 0:m.shape.rows} rows x ${(y=g.summary)==null?void 0:y.shape.columns} columns

`,E+=`COLUMN NAMES AND TYPES:
`,(v=g.summary)==null||v.columns.forEach(A=>{var j;const I=(j=g.summary)==null?void 0:j.numeric_columns.includes(A);E+=`  - ${A}: ${I?"numeric":"categorical"}
`}),E+=`
`,(p=g.summary)!=null&&p.numeric_columns.length){E+=`NUMERIC COLUMNS STATISTICS:
`;for(const A of g.summary.numeric_columns.slice(0,10)){const I=(w=g.summary.descriptive_stats)==null?void 0:w[A];I&&(E+=`  ${A}:
`,E+=`    min=${I.min}, max=${I.max}, mean=${I.mean}, std=${I.std}
`)}E+=`
`}if((_=g.summary)!=null&&_.categorical_columns.length){E+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const A of g.summary.categorical_columns.slice(0,5)){const I=(T=g.summary.categorical_summary)==null?void 0:T[A];if(I){const j=Object.keys(I).length;E+=`  ${A}: ${j} unique values
`,j<=10&&(E+=`    Values: ${JSON.stringify(I)}
`)}}}return o==null||o("Cloud data analysis complete"),{success:!0,dataSummary:E,dataFileFound:!0}}}catch(g){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",g)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),o==null||o("Using local Python for analysis...");const d=`import os
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
`;try{const g=await Np("analyze_data.py",d,u);if(console.log("[DataAnalysis] Python execution result:",{success:g.success,dataFileFound:g.dataFileFound,stdoutLength:((S=g.stdout)==null?void 0:S.length)||0,stderrLength:((R=g.stderr)==null?void 0:R.length)||0}),g.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",g.stdout.substring(0,1e3)),g.stderr&&console.log("[DataAnalysis] Python stderr:",g.stderr),!g.success)return console.error("[DataAnalysis] Python execution failed:",g.error),{success:!1,dataFileFound:!1,error:g.error};let E;const A=g.dataFileFound??!1;if(g.stdout){const I=g.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(I)E=I[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",E.substring(0,500));else{if(g.stdout.includes("DATA FILE NOT FOUND")||g.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',g.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',g.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return o==null||o("Data analysis complete"),{success:!0,dataSummary:E,dataFileFound:A}}catch(g){return console.error("[DataAnalysis] Error:",g),{success:!1,dataFileFound:!1,error:g.message}}}async function Cc(u,o,l,c,d){const f=fi();if(f!=null&&f.content){console.log("[Visualizations] Using QuickChart.io for figure generation..."),c==null||c("Analyzing data for visualization...");try{const m=await Bs(f.content,"full");if(m.success&&m.chart_data&&m.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${m.chart_data.length} chart configs`),c==null||c(`Generating ${m.chart_data.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:y}=await pc(async()=>{const{generateQuickChartFigures:p}=await Promise.resolve().then(()=>fc);return{generateQuickChartFigures:p}},void 0),v=await y(m.chart_data);if(v.success&&v.figures&&v.figures.length>0){const p=v.figures.map(T=>({filename:T.filename,description:T.description,latexRef:T.filename,base64:T.base64})),{storePngFiguresForCompilation:w,storeChartData:_}=await pc(async()=>{const{storePngFiguresForCompilation:T,storeChartData:S}=await Promise.resolve().then(()=>fc);return{storePngFiguresForCompilation:T,storeChartData:S}},void 0);return w(v.figures.map(T=>({filename:T.filename,base64:T.base64}))),_(m.chart_data,!1),c==null||c(`Generated ${p.length} publication-quality figures`),console.log(`[Visualizations] QuickChart.io generated ${p.length} PNG figures`),{figures:p,usedSyntheticData:!1,dataFileFound:!0,dataSummary:m.text_summary||d}}else console.warn("[Visualizations] QuickChart.io generation failed:",v.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(m){console.warn("[Visualizations] QuickChart.io failed:",m)}}console.log("[Visualizations] No data available, generating AI-based PNG figures via QuickChart.io..."),c==null||c("Generating AI-based visualizations...");try{const m=await Pv(u,o,d);if(m&&m.length>0){console.log(`[Visualizations] AI generated ${m.length} chart configurations`),c==null||c(`Rendering ${m.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:y,storePngFiguresForCompilation:v,storeChartData:p}=await pc(async()=>{const{generateQuickChartFigures:_,storePngFiguresForCompilation:T,storeChartData:S}=await Promise.resolve().then(()=>fc);return{generateQuickChartFigures:_,storePngFiguresForCompilation:T,storeChartData:S}},void 0),w=await y(m);if(w.success&&w.figures&&w.figures.length>0){const _=w.figures.map(T=>({filename:T.filename,description:T.description,latexRef:T.filename,base64:T.base64}));return v(w.figures.map(T=>({filename:T.filename,base64:T.base64}))),p(m,!0),c==null||c(`Generated ${_.length} AI-based PNG figures`),console.log(`[Visualizations] QuickChart.io rendered ${_.length} AI-generated PNG figures`),{figures:_,usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** NOTE: Visualizations generated using AI-synthesized illustrative data. No data file was provided."}}}}catch(m){console.warn("[Visualizations] AI QuickChart generation failed:",m)}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function Pv(u,o,l){const c=`You are generating CONCEPTUAL chart data for a research paper visualization.

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

Return ONLY the JSON array with 1-2 conceptual figures.`;try{let f=(await hr(c,"Generate chart data")).trim();f.startsWith("```json")?f=f.slice(7):f.startsWith("```")&&(f=f.slice(3)),f.endsWith("```")&&(f=f.slice(0,-3)),f=f.trim();const m=JSON.parse(f);if(Array.isArray(m)&&m.length>0)return console.log(`[AI ChartData] Generated ${m.length} chart configurations`),m}catch(d){console.error("[AI ChartData] Failed to generate chart data:",d)}return[]}function Zp(u){if(u.length===0)return"";let o=`
% Generated Figures (PNG via QuickChart.io)
`;return u.forEach((l,c)=>{const d=l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),f=l.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");o+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{${d}}
\\caption{${f}}
\\label{fig:fig${c+1}}
\\end{figure}
`}),o}async function ip(u){try{return(await fetch(`${u}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function Qp(){return await ip(Tc)?{type:"vercel",baseUrl:Tc}:await ip(zs)?{type:"local",baseUrl:zs}:{type:"direct",baseUrl:""}}async function Vv(u,o){var m,y,v;const l=o===zs?`${o}/api/openai/chat`:`${o}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${l}`),console.log(`[OpenAI] Using model: ${Nc()}`);const c=await fetch(l,{method:"POST",headers:$p(),body:JSON.stringify({model:Nc(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:u}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!c.ok){const p=await c.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",c.status,p),new Error(`OpenAI API error: ${c.status} - ${p.error||p.details||"Unknown error"}`)}const f=(v=(y=(m=(await c.json()).choices)==null?void 0:m[0])==null?void 0:y.message)==null?void 0:v.content;if(!f)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let p=f.trim();return p.startsWith("```")&&(p=p.replace(/^```(?:json)?\s*\n?/,""),p=p.replace(/\n?```\s*$/,"")),p=p.trim(),JSON.parse(p)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",f.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function Hs(u){const o=await Qp();if(o.type==="vercel"||o.type==="local")return console.log(`[OpenAI] Using ${o.type} proxy...`),Vv(u,o.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const Hv=async(u,o=1,l="icis_paper",c)=>{var S,R,g,E,A,I,j,P;const d=await Hp("REVIEWER");let f="";try{console.log("[Reviewer] Loading MISQ review criteria PDF...");const D=await Tp("reviewingMISQ.pdf");D.success&&D.base64&&(console.log("[Reviewer] Extracting review criteria from PDF..."),f=await Iv(`Extract and summarize the key IS journal review criteria from this document.
         Focus on: evaluation dimensions, quality standards, common issues to look for,
         and what makes a strong contribution.
         Keep the summary under 500 words, in bullet point format.`,D.base64,D.mimeType),console.log("[Reviewer] MISQ criteria loaded successfully"))}catch(D){console.warn("[Reviewer] Could not load MISQ review criteria:",D)}const m=u.match(/\\title\{([^}]+)\}/),y=m?m[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const v=$v(u);console.log(`[Reviewer] Found ${v.length} sections: ${v.map(D=>D.name).join(", ")}`);let p;if(v.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const D=`${d}

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
  "criticalAlerts": []
}`;p=await Hs(D)}else{console.log("[Reviewer] Starting section-by-section review...");const D=[];for(const X of v){console.log(`[Reviewer] Reviewing section: ${X.name}...`);const H=await Gv(X,y);D.push(H),console.log(`[Reviewer] ${X.name} score: ${H.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),p=await Yv(D,u,f),console.log("[Reviewer] Section-by-section review complete")}if(p.novelty===void 0||p.significance===void 0||p.methodologicalRigor===void 0||p.clarity===void 0||p.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const w={novelty:p.novelty,significance:p.significance,methodologicalRigor:p.methodologicalRigor,clarity:p.clarity,relevance:p.relevance,reviewScore:p.novelty,reliabilityScore:p.significance,alignmentScore:p.methodologicalRigor,errorsDetected:(((S=p.majorConcerns)==null?void 0:S.length)||0)+(((R=p.minorCorrections)==null?void 0:R.length)||0),feedback:p.overallAssessment,majorConcerns:p.majorConcerns||[],minorCorrections:p.minorCorrections||[],researchQuestionFeedback:p.researchQuestionFeedback,methodFeedback:p.methodFeedback,impactFeedback:p.impactFeedback,writingFeedback:p.writingFeedback,overallAssessment:p.overallAssessment,noveltyComment:p.noveltyComment,significanceComment:p.significanceComment,methodologicalRigorComment:p.methodologicalRigorComment,clarityComment:p.clarityComment,relevanceComment:p.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:p.criticalAlerts??[]};if(c&&c.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const D=await qv(u,c);w.trustworthiness={reliability:D.reliability,reliabilityRationale:D.rationales.reliability,benevolence:D.benevolence,benevolenceRationale:D.rationales.benevolence,goalAlignment:D.goalAlignment,goalAlignmentRationale:D.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(D){console.warn("[Reviewer] Trustworthiness assessment failed:",D.message),w.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${D.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${D.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${D.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),w.trustworthiness={reliability:((g=p.trustworthiness)==null?void 0:g.reliability)??5,reliabilityRationale:((E=p.trustworthiness)==null?void 0:E.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((A=p.trustworthiness)==null?void 0:A.benevolence)??5,benevolenceRationale:((I=p.trustworthiness)==null?void 0:I.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((j=p.trustworthiness)==null?void 0:j.goalAlignment)??5,goalAlignmentRationale:((P=p.trustworthiness)==null?void 0:P.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const _={version:o,paperId:l,timestamp:new Date().toISOString(),reviewScores:{novelty:w.novelty,significance:w.significance,methodologicalRigor:w.methodologicalRigor,clarity:w.clarity,relevance:w.relevance},reviewComments:{novelty:w.noveltyComment,significance:w.significanceComment,methodologicalRigor:w.methodologicalRigorComment,clarity:w.clarityComment,relevance:w.relevanceComment},averageScore:(w.novelty+w.significance+w.methodologicalRigor+w.clarity+w.relevance)/5,errorCounts:{majorErrors:w.majorConcerns.length,minorErrors:w.minorCorrections.length},errorDetails:{majorErrors:w.majorConcerns,minorErrors:w.minorCorrections},trustworthiness:w.trustworthiness,criticalAlerts:w.criticalAlerts.map((D,X)=>({number:X+1,title:D.title,status:"Open",impact:D.impact,details:D.details,actionRequired:D.actionRequired,consequence:D.consequence}))},T={version:o,paperId:l,timestamp:new Date().toISOString(),researchQuestion:w.researchQuestionFeedback,method:w.methodFeedback,potentialImpact:w.impactFeedback,writing:w.writingFeedback,majorConcerns:w.majorConcerns,minorCorrections:w.minorCorrections,overallAssessment:w.overallAssessment};w.oversightFilePath=vp(_),w.feedbackFilePath=jc(T);try{await Ac(`oversight_v${o}.json`,_),await Ac(`feedback_v${o}.json`,T),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(D){console.warn("[Reviewer] Could not save files to disk:",D)}return w};function $v(u){const o=[],l=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],c=u.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let d="";c&&(d=c[1].trim());for(const{pattern:f,name:m,focus:y}of l){const v=new RegExp(f.source,f.flags);let p,w="";for(;(p=v.exec(u))!==null;)w+=p[2]||p[0];w.trim()&&(m==="Introduction"&&d&&(w=`ABSTRACT:
${d}

INTRODUCTION:
${w}`),o.push({name:m,content:w.trim(),reviewFocus:y}))}if(o.length===0){const f=u.split(/\\section\*?\{/);for(let m=1;m<f.length;m++){const y=f[m].indexOf("}");if(y>0){const v=f[m].substring(0,y),p=f[m].substring(y+1);o.push({name:v,content:p.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return o.map(f=>({...f,content:f.content.substring(0,15e3)}))}async function Gv(u,o){const l=`You are reviewing the "${u.name}" section of an academic IS (Information Systems) paper titled: "${o}"

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
}`,c=await Hs(l);if(c.score===void 0)throw new Error(`[Reviewer] Section "${u.name}" response missing required score field`);return{sectionName:u.name,score:c.score,strengths:c.strengths||[],weaknesses:c.weaknesses||[],suggestions:c.suggestions||[],majorConcerns:c.majorConcerns||[],minorCorrections:c.minorCorrections||[]}}async function Yv(u,o,l){const c=u.map(p=>`## ${p.sectionName} (Score: ${p.score}/5)
Strengths: ${p.strengths.join("; ")||"None identified"}
Weaknesses: ${p.weaknesses.join("; ")||"None identified"}
Major Concerns: ${p.majorConcerns.join("; ")||"None"}
Minor Corrections: ${p.minorCorrections.join("; ")||"None"}`).join(`

`),d=u.filter(p=>p.score>0).map(p=>p.score),f=d.length>0?d.reduce((p,w)=>p+w,0)/d.length:3,m=u.flatMap(p=>p.majorConcerns),y=u.flatMap(p=>p.minorCorrections);u.flatMap(p=>p.suggestions);const v=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${c}

AVERAGE SECTION SCORE: ${f.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${m.map((p,w)=>`${w+1}. ${p}`).join(`
`)||"None"}

ALL MINOR CORRECTIONS:
${y.map((p,w)=>`${w+1}. ${p}`).join(`
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
  ]
}`;return await Hs(v)}const qv=async(u,o)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const l=o.substring(0,15e3),c=u.substring(0,15e3),d=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

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
}`,f=await Hs(d);if(f.reliability===void 0||f.benevolence===void 0||f.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment}),{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment,rationales:{reliability:f.reliabilityRationale,benevolence:f.benevolenceRationale,goalAlignment:f.goalAlignmentRationale}}};function Xv(u){const o=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let l=-1,c="";for(const d of o){const f=u.match(d);if(f&&f.index!==void 0){l=f.index,c=f[0];break}}if(l===-1){const d=Math.floor(u.length*.5),f=u.substring(d).match(/\\section\*?\{[^}]+\}/);f&&f.index!==void 0&&(l=d+f.index,c=f[0])}return l===-1?{part1:u,part2:"",splitPoint:""}:{part1:u.substring(0,l),part2:u.substring(l),splitPoint:c}}const Zv=async(u,o,l,c,d)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${u.length} characters`),console.log(`[Reviser] Feedback length: ${o.length} characters`),console.log("[Reviser] Loading reviser prompt...");const f=await Hp("REVISER");console.log(`[Reviser] Prompt loaded (${f.length} chars)`);const y=u.length>2e4;let v;if(y){console.log("[Reviser] Large paper detected - using two-part revision strategy"),d==null||d("Large paper - revising in two parts...");const{part1:S,part2:R,splitPoint:g}=Xv(u);console.log(`[Reviser] Split at "${g}" - Part 1: ${S.length} chars, Part 2: ${R.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),d==null||d("Revising Part 1: Abstract through Results...");const E=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${S}

Reviewer Feedback:
${o}

Supervisor Directives:
${l}

Instructions:
1. Address feedback relevant to the front sections (Abstract, Introduction, Literature Review, Methodology, Results)
2. Preserve ALL empirical content (data). You may only change or improve tables, figures, and results based on feedback (review) if you preserve the original data and don't make up results. You may improve the analysis of the data based on feedback (review).
3. Add new content to strengthen weak areas
4. Maintain academic writing style
5. NEVER use placeholder text

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

Produce the revised PART 1:`;let A=await hr(E,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");A=mc(A),A=A.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${A.length} chars`),await qp(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),d==null||d("Revising Part 2: Discussion, Conclusion, References...");const I=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

You are revising PART 2 of a two-part paper (back matter: Discussion, Conclusions, References).
The front matter has already been revised separately.

Original Paper PART 2:
${R}

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

Produce the revised PART 2:`;let j=await hr(I,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");j=mc(j),console.log(`[Reviser] Part 2 complete: ${j.length} chars`),v=A+`

`+j,console.log(`[Reviser] Combined revised paper: ${v.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),d==null||d("Revising paper content...");const S=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

Original Paper:
${u}

Reviewer Feedback:
${o}

Supervisor Directives:
${l}

Instructions:
1. Address all major concerns from the feedback
2. Fix minor corrections where possible
3. Incorporate supervisor directives
4. Preserve ALL empirical content (data). You may only change or improve tables, figures, and results based on feedback (review) if you preserve the original data and don't make up results. You may improve the analysis of the data based on feedback (review).
5. Add new content to strengthen weak areas
6. Maintain academic writing style
7. NEVER use placeholder text like "[To be completed]", "[TBD]", or "[Results pending]"
8. If any section has placeholder text, replace it with realistic, complete content

CRITICAL OUTPUT FORMAT:
- Output ONLY the complete revised LaTeX document
- Start with \\documentclass or \\begin{abstract} (whatever the original starts with)
- End with \\end{document}
- Do NOT include any code blocks, markdown formatting, explanations, or verification steps
- Do NOT include any JavaScript, Python, or other programming code
- Do NOT include "STEP X:" headers or verification checklists
- Output raw LaTeX content only

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${S.length} characters`),console.log("[Reviser] Calling Gemini API..."),v=await hr(S,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),v=mc(v)}console.log(`[Reviser] Text revision complete! Output length: ${v.length} characters`);let p,w=!1;const _=(o+" "+l).toLowerCase();if(_.includes("figure")||_.includes("graph")||_.includes("chart")||_.includes("visual")||_.includes("plot")||_.includes("diagram")||_.includes("simulation")||_.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),d==null||d("Updating visualizations based on feedback...");try{let S;if(c){console.log("[Reviser] Analyzing data file for visualization...");try{S=(await Xp(c,d)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(I){console.warn("[Reviser] Could not analyze data file:",I)}}const R=v.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),g=v.match(/\\section{Methodology}([\s\S]*?)\\section{/),E=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${o.substring(0,500)}
Supervisor: ${l.substring(0,300)}
Abstract: ${R?R[1].substring(0,400):""}
`,A=await Cc(E,o,c,d,S);if(w=A.usedSyntheticData,A.dataAlert&&(p=A.dataAlert,console.warn(`[Reviser] ${p}`)),A.figures.length>0){console.log(`[Reviser] Generated ${A.figures.length} updated figures`);const I=Zp(A.figures);let j=I;w&&(j=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${I}`),v.match(/(\\section{Results})/)&&(v=v.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${j}
`))}}catch(S){console.error("[Reviser] Visualization update failed:",S),d==null||d("Visualization update failed - continuing with text revisions"),p=`*** VISUALIZATION ERROR during revision: ${S.message}`,w=!0}}return console.log(`[Reviser] Revision complete! Final output length: ${v.length} characters`),{paperContent:v,dataAlert:p,usedSyntheticData:w}},sp="http://localhost:3001/Data";function Qv(){const[u,o]=be.useState(qh),l=be.useCallback((S,R)=>{o(g=>({...g,stages:{...g.stages,[S]:R}}))},[]),c=be.useCallback(S=>{o(R=>({...R,currentBuilderStep:S}))},[]),d=be.useCallback(S=>{const R=new Date().toLocaleTimeString();o(g=>({...g,logs:[...g.logs,`[${R}] ${S}`]}))},[]),f=be.useCallback(S=>{o(R=>({...R,currentStage:S,stages:{...R.stages,[S]:Ie.ACTIVE}}))},[]),m=be.useCallback(S=>{o(R=>({...R,...S}))},[]),y=be.useCallback(S=>{o(R=>({...R,rounds:[...R.rounds,S],currentRound:S.roundId}))},[]),v=be.useCallback(S=>{o(R=>{if(R.rounds.length===0)return R;const g=[...R.rounds];return g[g.length-1]={...g[g.length-1],...S},{...R,rounds:g}})},[]),p=be.useCallback(S=>{o(R=>({...R,stages:{...R.stages,[S]:Ie.PENDING}}))},[]),w=be.useCallback(S=>{o(R=>({...R,participantId:S}))},[]),_=be.useCallback(()=>`${u.participantId}_${u.sessionTimestamp}`,[u.participantId,u.sessionTimestamp]),T=be.useCallback(async()=>{var R;try{const g=await Cp();g.success?console.log(`Backed up ${((R=g.backedUpFiles)==null?void 0:R.length)||0} files to ${g.backupDir}`):console.warn("Backup failed:",g.error)}catch(g){console.warn("Backup not available:",g)}Hy(),Pp(),Op();const S=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);o({...qh,sessionTimestamp:S,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:u,setStageStatus:l,setBuilderStep:c,addLog:d,moveToStage:f,updateState:m,addRound:y,updateLastRound:v,resetStageData:p,setParticipantId:w,getFilePrefix:_,resetAllState:T}}function Kv(){const[u,o]=be.useState({}),[l,c]=be.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}});be.useEffect(()=>{d()},[]);const d=async()=>{c(T=>({...T,loading:!0,error:null}));try{const T=`?t=${Date.now()}`,S=await fetch(`${sp}/manifest.json${T}`,{cache:"no-store"});if(!S.ok)throw new Error("No manifest.json found in Data folder");const R=await S.json(),g={interview:null,template:null,dataFile:null,participantId:null};for(const E of R.files||[]){const A=`${sp}/${E.filename}`;E.type==="interview"?(g.interview={filename:E.filename,path:A},g.participantId=E.participantId||null):E.type==="template"?g.template={filename:E.filename,path:A}:E.type==="dataFile"&&(g.dataFile={filename:E.filename,path:A})}c({loading:!1,error:null,detected:g}),g.interview&&await f("interview",g.interview.path,g.interview.filename,g.participantId),g.template&&await f("template",g.template.path,g.template.filename),g.dataFile&&await f("dataFile",g.dataFile.path,g.dataFile.filename)}catch(T){console.log("Auto-detection not available, manual upload required:",T),c({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}})}},f=async(T,S,R,g)=>{try{const E=`?t=${Date.now()}`,A=await fetch(S+E,{cache:"no-store"});if(!A.ok){console.warn(`Failed to load ${R}`);return}const I=await A.text(),j=new Blob([I],{type:"text/plain"}),P=new File([j],R,{type:"text/plain"});o(T==="interview"?D=>({...D,interview:P,interviewContent:I,participantId:g||D.participantId}):T==="template"?D=>({...D,template:P,templateContent:I}):D=>({...D,dataFile:P,dataFileContent:I})),console.log(`Auto-loaded: ${R}`)}catch(E){console.warn(`Error loading ${R}:`,E)}},m=be.useCallback(async(T,S)=>{if(!S){o(R=>{const g={...R};return delete g[T],T==="interview"&&delete g.interviewContent,g});return}if(T==="interview"){const R=await S.text();let g=S.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,""),E=null;const A=R.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i)||R.match(/Email[:\s]+([^\s\n]+@[^\s\n]+)/i);A&&(E=A[1].trim(),g=E.replace(/@/g,"_").replace(/\./g,"_")),o(I=>({...I,interview:S,interviewContent:R,participantId:g,participantEmail:E}))}else if(T==="template"){const R=await S.text();o(g=>({...g,template:S,templateContent:R}))}else{const R=await S.text();o(E=>({...E,dataFile:S,dataFileContent:R})),console.log("[handleFileChange] Uploading data file to cloud storage...");const g=await Ip(S);g.success?console.log("[handleFileChange] Cloud upload success:",g.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",g.error)}},[]),y=be.useCallback(()=>u.interviewContent||"",[u.interviewContent]),v=be.useCallback(()=>u.dataFileContent||"",[u.dataFileContent]),p=be.useCallback(()=>{var T;return((T=u.dataFile)==null?void 0:T.name)||""},[u.dataFile]),w=be.useCallback(async()=>{await d()},[]),_=be.useCallback(()=>u.participantEmail||null,[u.participantEmail]);return{uploadedFiles:u,handleFileChange:m,getInterviewContent:y,getDataFileContent:v,getDataFileName:p,getParticipantEmail:_,detectionStatus:l,refreshDetection:w}}function Wv(u){const{simulationState:o,setStageStatus:l,setBuilderStep:c,addLog:d,moveToStage:f,updateState:m,addRound:y,updateLastRound:v,resetStageData:p,resetAllState:w,uploadedFiles:_,getInterviewContent:T,refreshDetection:S,onDataFileConfirm:R}=u,[g,E]=be.useState(!1);ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION;const A=be.useCallback(async D=>{const X=D??o.currentRound;d(`Reviewer: Starting review process with Gemini (Round ${X})...`),l(me.REVIEWER,Ie.ACTIVE);try{let H=o.paperContent;if(!H){const x=o.currentPaperVersion||1;d(`Reviewer: Paper not in state, reading from localStorage (v${x})...`),H=ra(x)||"",H&&(m({paperContent:H}),d("Reviewer: Paper loaded from localStorage"))}if(!H){d("Reviewer: ERROR - No paper content available in state or localStorage"),l(me.REVIEWER,Ie.ERROR);return}const $=o.participantId||"icis_paper",U=X;d("Reviewer: Analyzing paper with Gemini...");const ae=T();ae&&d("Reviewer: Interview content available for trustworthiness assessment");const ee=await Hv(H,U,$,ae);d(`Reviewer: Analysis complete - Average score: ${((ee.novelty+ee.significance+ee.methodologicalRigor+ee.clarity+ee.relevance)/5).toFixed(1)}/5`);const k={version:U,paperId:$,timestamp:new Date().toISOString(),reviewScores:{novelty:ee.novelty,significance:ee.significance,methodologicalRigor:ee.methodologicalRigor,clarity:ee.clarity,relevance:ee.relevance},reviewComments:{novelty:ee.noveltyComment,significance:ee.significanceComment,methodologicalRigor:ee.methodologicalRigorComment,clarity:ee.clarityComment,relevance:ee.relevanceComment},averageScore:(ee.novelty+ee.significance+ee.methodologicalRigor+ee.clarity+ee.relevance)/5,errorCounts:{majorErrors:ee.majorConcerns.length,minorErrors:ee.minorCorrections.length},errorDetails:{majorErrors:ee.majorConcerns,minorErrors:ee.minorCorrections},trustworthiness:ee.trustworthiness,criticalAlerts:ee.criticalAlerts.map((x,G)=>({number:G+1,title:x.title,status:"Open",impact:x.impact,details:x.details,actionRequired:x.actionRequired,consequence:x.consequence}))},Z={version:U,paperId:$,timestamp:new Date().toISOString(),researchQuestion:ee.researchQuestionFeedback,method:ee.methodFeedback,potentialImpact:ee.impactFeedback,writing:ee.writingFeedback,majorConcerns:ee.majorConcerns,minorCorrections:ee.minorCorrections,overallAssessment:ee.overallAssessment};vp(k),jc(Z),d("Reviewer: Saved oversight and feedback files"),y({roundId:U,reviewScore:k.averageScore,reliabilityScore:ee.trustworthiness.reliability,alignmentScore:ee.trustworthiness.goalAlignment,errorsDetected:ee.majorConcerns.length+ee.minorCorrections.length,reviewScores:k.reviewScores,trustworthinessScores:ee.trustworthiness,errorCounts:k.errorCounts,constructiveFeedback:ee.overallAssessment,feedback:ee.overallAssessment,criticalAlerts:ee.criticalAlerts.map(x=>x.title)}),d("Reviewer: Review complete! Proceed to Supervisor for decision."),l(me.REVIEWER,Ie.COMPLETED)}catch(H){d(`Reviewer: ERROR - ${H.message}`),l(me.REVIEWER,Ie.ERROR)}},[l,d,y,m,o.currentRound,o.participantId,o.paperContent]),I=be.useCallback(async(D,X)=>{var H,$,U,ae;switch(D){case me.SETUP:await new Promise(k=>setTimeout(k,500));const ee={interview:!!_.interview,template:!0,examples:!0,dataFile:!!_.dataFile,paperPdf:!1};m({files:ee}),d("Setup: Files verified successfully");break;case me.BUILDER:d("Builder: Starting paper generation with Gemini...");try{const k=T();if(!k){d("Builder: ERROR - No interview content available"),l(me.BUILDER,Ie.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${X}", uploadedFiles.dataFile?.name="${(H=_.dataFile)==null?void 0:H.name}"`);const Z=X||(($=_.dataFile)==null?void 0:$.name),x=!Z;d(`Builder: Mode - ${x?"Partial paper (no data)":"Full paper with data"}`),d(Z?`Builder: Data file - ${Z}`:"Builder: WARNING - No data file name available");const F=await jv(k,x,(te,ge)=>{ge==="starting"?d(`Builder: Generating ${te}...`):ge==="completed"?d(`Builder: ${te} complete`):ge==="error"&&d(`Builder: ${te} - error (continuing)`)},Z,R);F.dataSummary&&(d("Builder: Data Analysis Summary:"),d(F.dataSummary.substring(0,500)+(F.dataSummary.length>500?"...":""))),F.dataAlert&&d(F.dataAlert),F.usedSyntheticData&&d("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),m({paperContent:F.paperContent,currentPaperVersion:1,dataAlert:F.dataAlert,dataSummary:F.dataSummary}),tp(1,F.paperContent);const V=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",ue=V?`${V}_icis_paper_v1.tex`:"icis_paper_v1.tex";await Ec(ue,F.paperContent),d("Builder: Paper generation complete - saved to localStorage and filesystem"),l(me.BUILDER,Ie.COMPLETED),f(me.REVIEWER),setTimeout(()=>A(),500)}catch(k){d(`Builder: ERROR - ${k.message}`),l(me.BUILDER,Ie.ERROR)}break;case me.REVIEWER:await A();break;case me.SUPERVISOR:d("Supervisor: Awaiting human review and decision..."),l(me.SUPERVISOR,Ie.ACTIVE);return;case me.FINALIZE:d("Finalize: Preparing final submission..."),l(me.FINALIZE,Ie.ACTIVE);return;case me.REVISER:d("Reviser: Starting revision with Gemini..."),console.log("[Workflow] REVISER stage starting"),l(me.REVISER,Ie.ACTIVE);try{let k=o.paperContent;if(console.log(`[Workflow] Paper in state: ${k?k.length+" chars":"none"}`),!k){const ie=o.currentPaperVersion||1;d(`Reviser: Paper not in state, reading from localStorage (v${ie})...`),k=ra(ie)||"",k&&(m({paperContent:k}),d("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${k.length} chars`))}if(!k){d("Reviser: ERROR - No paper content available in state or localStorage"),l(me.REVISER,Ie.ERROR);return}const Z=o.rounds[o.rounds.length-1],x=(Z==null?void 0:Z.feedback)||"Improve clarity and strengthen methodology.",G=X||(Z==null?void 0:Z.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${x.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${X?"from override":"from state"}): ${G.substring(0,100)}...`),d("Reviser: Analyzing feedback and generating revisions..."),d(`Reviser: Paper size: ${k.length} chars, calling Gemini...`);const F=(U=_.dataFile)==null?void 0:U.name,V=ie=>{d(`Reviser: ${ie}`)};console.log("[Workflow] Calling runReviser...");const ue=await Zv(k,x,G,F,V);console.log(`[Workflow] runReviser completed, result: ${((ae=ue.paperContent)==null?void 0:ae.length)||0} chars`),ue.dataAlert&&d(ue.dataAlert),ue.usedSyntheticData&&d("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const te=o.currentPaperVersion+1;m({paperContent:ue.paperContent,currentPaperVersion:te,dataAlert:ue.dataAlert||o.dataAlert}),tp(te,ue.paperContent);const ge=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",C=ge?`${ge}_icis_paper_v${te}.tex`:`icis_paper_v${te}.tex`;await Ec(C,ue.paperContent),d(`Reviser: Revision complete - Version ${te} saved`);const L=o.currentRound+1;l(me.REVISER,Ie.COMPLETED),f(me.REVIEWER),m({currentRound:L}),setTimeout(()=>A(L),500)}catch(k){d(`Reviser: ERROR - ${k.message}`),l(me.REVISER,Ie.ERROR)}break}},[_.interview,_.dataFile,m,d,c,l,f,A,o.currentPaperVersion,o.currentRound,o.dataAlert,R]),j=be.useCallback(async(D,X,H)=>{switch(d(`Stage ${D}: ${X}`),console.log(`[handleStageAction] Stage ${D} action=${X} overrideParam="${H}" (type: ${typeof H})`),X){case"start":l(D,Ie.ACTIVE),E(!0);try{await I(D,H),D!==me.BUILDER&&D!==me.REVIEWER&&D!==me.REVISER&&l(D,Ie.COMPLETED),d(`Stage ${D} completed`)}catch($){l(D,Ie.ERROR),d(`Stage ${D} error: ${$}`)}finally{E(!1)}break;case"abort":l(D,Ie.ERROR),E(!1),d(`Stage ${D} aborted`);break;case"restart":p(D),l(D,Ie.ACTIVE),E(!0),d(`Stage ${D} restarting...`);try{await I(D,H),D!==me.BUILDER&&D!==me.REVIEWER&&D!==me.REVISER&&l(D,Ie.COMPLETED),d(`Stage ${D} restart completed`)}catch($){l(D,Ie.ERROR),d(`Stage ${D} restart error: ${$}`)}finally{E(!1)}break;case"skip":l(D,Ie.SKIPPED),d(`Stage ${D} skipped`);break}},[d,l,p,I]),P=be.useCallback(async(D,X)=>{var H;switch(d(`Action: ${D}`),D){case"START_SETUP":(o.rounds.length>0||o.currentPaperVersion>0||o.paperContent!=="")&&w&&w().then(()=>{d("Setup: Backed up and cleared previous case data")}),j(me.SETUP,"start");break;case"START_BUILDER":d("Setup: Checking for data files...");let U;const ae=fi();if(ae)U=ae.filename,console.log(`[START_BUILDER] Using cloud data file: ${ae.filename}`),d(`Setup: Data file ready (cloud) - ${ae.filename}`);else if(_.dataFile)U=_.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${U}`),d(`Setup: Data file ready (uploaded) - ${U}`);else try{d("Setup: Refreshing file manifest...");const ee=await bp();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(ee,null,2)),ee.success&&ee.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(ee.manifest.files,null,2));const k=(H=ee.manifest.files)==null?void 0:H.find(Z=>Z.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",k),k&&(U=k.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${k.filename}"`),d(`Setup: Data file detected - ${k.filename}`),S&&(d("Setup: Loading data file into memory..."),await S(),d("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}U||d("Setup: No data file - will generate partial paper"),l(me.SETUP,Ie.COMPLETED),f(me.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${U}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${U}"`),j(me.BUILDER,"start",U)},500);break;case"PROCEED_TO_SUPERVISOR":l(me.REVIEWER,Ie.COMPLETED),f(me.SUPERVISOR);break;case"SKIP_TO_REVIEWER":l(me.SETUP,Ie.COMPLETED),l(me.BUILDER,Ie.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(me.REVIEWER),setTimeout(()=>j(me.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":l(me.SETUP,Ie.COMPLETED),l(me.BUILDER,Ie.COMPLETED),l(me.REVIEWER,Ie.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(me.SUPERVISOR);break;case"revise":if(X){v({supervisorComment:X});const ee=o.currentRound;Jh(ee,ee,X),ep("CONTINUE",ee),d(`Supervisor: Saved directive to feedback file (round ${ee})`)}l(me.SUPERVISOR,Ie.COMPLETED),f(me.REVISER),d(`Supervisor: Passing directive to Reviser: "${(X==null?void 0:X.substring(0,50))||"none"}..."`),setTimeout(()=>j(me.REVISER,"start",X),100);break;case"finalize":if(X){v({supervisorComment:X});const ee=o.currentRound;Jh(ee,ee,X),ep("FINALIZE",ee),d(`Supervisor: Saved finalize decision to feedback file (round ${ee})`)}l(me.SUPERVISOR,Ie.COMPLETED),f(me.FINALIZE);break;case"NEW_CASE":w?w().then(()=>{d("New case started - files backed up and cleared"),S==null||S(),f(me.SETUP)}):f(me.SETUP);break;default:d(`Unknown action: ${D}`)}},[d,f,l,v,j,w,o.rounds.length,o.currentPaperVersion,o.paperContent,m,S]);return{isProcessing:g,handleStageAction:j,handleWorkflowAction:P}}const Jv=()=>{const[u,o]=be.useState("main"),[l,c]=be.useState("research"),d=be.useCallback(G=>{c(G),Nv(G),console.log(`[App] Paper mode changed to: ${G}`)},[]),{simulationState:f,setStageStatus:m,setBuilderStep:y,addLog:v,moveToStage:p,updateState:w,addRound:_,updateLastRound:T,resetStageData:S,setParticipantId:R,getFilePrefix:g,resetAllState:E}=Qv(),{uploadedFiles:A,handleFileChange:I,getInterviewContent:j,getDataFileContent:P,getDataFileName:D,getParticipantEmail:X,detectionStatus:H,refreshDetection:$}=Kv(),U=be.useCallback(async G=>{const F=`Data File Verification

File: ${G.filename}
Total lines: ${G.totalLines}

First line (column headers):
${G.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(F)},[]),{isProcessing:ae,handleStageAction:ee,handleWorkflowAction:k}=Wv({simulationState:f,setStageStatus:m,setBuilderStep:y,addLog:v,moveToStage:p,updateState:w,addRound:_,updateLastRound:T,resetStageData:S,resetAllState:E,uploadedFiles:A,getInterviewContent:j,refreshDetection:$,onDataFileConfirm:U});be.useEffect(()=>{A.participantId&&A.participantId!==f.participantId&&(R(A.participantId),v(`Participant ID set: ${A.participantId}`))},[A.participantId,f.participantId,R,v]);const Z=G=>{v(`Aborting ${G}...`),ee(G,"abort")},x=G=>{v(`Restarting ${G}...`),ee(G,"restart"),setTimeout(()=>ee(G,"start"),100)};return s.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[s.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:s.jsx(By,{currentStage:f.currentStage,currentBuilderStep:f.currentBuilderStep,stagesState:f.stages,isPartialPaper:f.isPartialPaper,currentRound:f.currentRound,isProcessing:ae,onStageClick:p,onStageAction:ee,onNewCase:()=>k("NEW_CASE"),onNewInterview:()=>{window.open(`/asd/interview.html?mode=${l}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/asd/paper-to-interview.html","_blank","noopener,noreferrer")},onResearchAdmin:l==="research"?()=>o(u==="admin"?"main":"admin"):void 0,paperMode:l,onPaperModeChange:d})}),s.jsx("div",{className:"flex-1 h-full",children:u==="admin"?s.jsx(mv,{onClose:()=>o("main")}):s.jsx(sv,{state:f,isProcessing:ae,onAction:k,uploadedFiles:A,onFileChange:I,detectionStatus:H,onRefreshDetection:$,onStageAbort:Z,onStageRestart:x,filePrefix:g(),dataFileName:D(),dataFileContent:P(),participantEmail:X()||void 0})})]})};function eb(){const u=Date.now(),o=new Uint8Array(16);crypto.getRandomValues(o);const l=Array.from(o).map(c=>c.toString(16).padStart(2,"0")).join("");return`${u}_${l}`}function tb(){const u=sessionStorage.getItem("icis_session_token");if(!u)return!1;const o=u.split("_");if(o.length!==2)return!1;const l=parseInt(o[0],10);if(isNaN(l))return!1;const c=Date.now()-l,d=1440*60*1e3;return c<d}const nb=({onLogin:u})=>{const[o,l]=be.useState(""),[c,d]=be.useState(""),[f,m]=be.useState(""),[y,v]=be.useState(!1),p=w=>{w.preventDefault(),m(""),v(!0);const _="asd",T="tennessee";setTimeout(()=>{if(o===_&&c===T){const S=eb();sessionStorage.setItem("icis_session_token",S),sessionStorage.setItem("icis_authenticated","true"),u()}else m("Invalid username or password"),v(!1)},500)};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-md",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:s.jsx("span",{className:"text-2xl font-bold text-white",children:"IC"})}),s.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"ICIScopilot"}),s.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),s.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:s.jsxs("form",{onSubmit:p,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(zy,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"text",id:"username",value:o,onChange:w=>l(w.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(hy,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"password",id:"password",value:c,onChange:w=>d(w.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),f&&s.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[s.jsx(js,{className:"h-5 w-5 flex-shrink-0"}),s.jsx("span",{className:"text-sm",children:f})]}),s.jsx("button",{type:"submit",disabled:y,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:y?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),s.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"ICIS Conference Paper Authoring System"})]})})},ab=()=>{const[u,o]=be.useState(null);be.useEffect(()=>{const c=tb(),d=sessionStorage.getItem("icis_authenticated");o(d==="true"&&c)},[]);const l=()=>{o(!0)};return u===null?s.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):u?s.jsx(Jv,{}):s.jsx(nb,{onLogin:l})},Kp=document.getElementById("root");if(!Kp)throw new Error("Could not find root element to mount to");const rb=E0.createRoot(Kp);rb.render(s.jsx(p0.StrictMode,{children:s.jsx(ab,{})}));
