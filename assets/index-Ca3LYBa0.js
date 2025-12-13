(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const d of p)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const d={};return p.integrity&&(d.integrity=p.integrity),p.referrerPolicy&&(d.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?d.credentials="include":p.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(p){if(p.ep)return;p.ep=!0;const d=l(p);fetch(p.href,d)}})();var Rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cc(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var rc={exports:{}},ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function s0(){if(zh)return ii;zh=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(u,p,d){var m=null;if(d!==void 0&&(m=""+d),p.key!==void 0&&(m=""+p.key),"key"in p){d={};for(var g in p)g!=="key"&&(d[g]=p[g])}else d=p;return p=d.ref,{$$typeof:c,type:u,key:m,ref:p!==void 0?p:null,props:d}}return ii.Fragment=o,ii.jsx=l,ii.jsxs=l,ii}var Mh;function l0(){return Mh||(Mh=1,rc.exports=s0()),rc.exports}var s=l0(),ic={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function o0(){if(Uh)return De;Uh=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),C=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=C&&N[C]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,A={};function _(N,L,se){this.props=N,this.context=L,this.refs=A,this.updater=se||R}_.prototype.isReactComponent={},_.prototype.setState=function(N,L){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,L,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function I(){}I.prototype=_.prototype;function D(N,L,se){this.props=N,this.context=L,this.refs=A,this.updater=se||R}var B=D.prototype=new I;B.constructor=D,y(B,_.prototype),B.isPureReactComponent=!0;var j=Array.isArray;function $(){}var H={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function U(N,L,se){var ie=se.ref;return{$$typeof:c,type:N,key:L,ref:ie!==void 0?ie:null,props:se}}function ae(N,L){return U(N.type,L,N.props)}function te(N){return typeof N=="object"&&N!==null&&N.$$typeof===c}function k(N){var L={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(se){return L[se]})}var Z=/\/+/g;function v(N,L){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):L.toString(36)}function X(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then($,$):(N.status="pending",N.then(function(L){N.status==="pending"&&(N.status="fulfilled",N.value=L)},function(L){N.status==="pending"&&(N.status="rejected",N.reason=L)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,L,se,ie,oe){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var _e=!1;if(N===null)_e=!0;else switch(Se){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(N.$$typeof){case c:case o:_e=!0;break;case w:return _e=N._init,P(_e(N._payload),L,se,ie,oe)}}if(_e)return oe=oe(N),_e=ie===""?"."+v(N,0):ie,j(oe)?(se="",_e!=null&&(se=_e.replace(Z,"$&/")+"/"),P(oe,L,se,"",function(nt){return nt})):oe!=null&&(te(oe)&&(oe=ae(oe,se+(oe.key==null||N&&N.key===oe.key?"":(""+oe.key).replace(Z,"$&/")+"/")+_e)),L.push(oe)),1;_e=0;var we=ie===""?".":ie+":";if(j(N))for(var Ne=0;Ne<N.length;Ne++)ie=N[Ne],Se=we+v(ie,Ne),_e+=P(ie,L,se,Se,oe);else if(Ne=S(N),typeof Ne=="function")for(N=Ne.call(N),Ne=0;!(ie=N.next()).done;)ie=ie.value,Se=we+v(ie,Ne++),_e+=P(ie,L,se,Se,oe);else if(Se==="object"){if(typeof N.then=="function")return P(X(N),L,se,ie,oe);throw L=String(N),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return _e}function V(N,L,se){if(N==null)return N;var ie=[],oe=0;return P(N,ie,"","",function(Se){return L.call(se,Se,oe++)}),ie}function de(N){if(N._status===-1){var L=N._result;L=L(),L.then(function(se){(N._status===0||N._status===-1)&&(N._status=1,N._result=se)},function(se){(N._status===0||N._status===-1)&&(N._status=2,N._result=se)}),N._status===-1&&(N._status=0,N._result=L)}if(N._status===1)return N._result.default;throw N._result}var ee=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ge={map:V,forEach:function(N,L,se){V(N,function(){L.apply(this,arguments)},se)},count:function(N){var L=0;return V(N,function(){L++}),L},toArray:function(N){return V(N,function(L){return L})||[]},only:function(N){if(!te(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return De.Activity=E,De.Children=ge,De.Component=_,De.Fragment=l,De.Profiler=p,De.PureComponent=D,De.StrictMode=u,De.Suspense=b,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,De.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},De.cache=function(N){return function(){return N.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(N,L,se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ie=y({},N.props),oe=N.key;if(L!=null)for(Se in L.key!==void 0&&(oe=""+L.key),L)!G.call(L,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&L.ref===void 0||(ie[Se]=L[Se]);var Se=arguments.length-2;if(Se===1)ie.children=se;else if(1<Se){for(var _e=Array(Se),we=0;we<Se;we++)_e[we]=arguments[we+2];ie.children=_e}return U(N.type,oe,ie)},De.createContext=function(N){return N={$$typeof:m,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:d,_context:N},N},De.createElement=function(N,L,se){var ie,oe={},Se=null;if(L!=null)for(ie in L.key!==void 0&&(Se=""+L.key),L)G.call(L,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(oe[ie]=L[ie]);var _e=arguments.length-2;if(_e===1)oe.children=se;else if(1<_e){for(var we=Array(_e),Ne=0;Ne<_e;Ne++)we[Ne]=arguments[Ne+2];oe.children=we}if(N&&N.defaultProps)for(ie in _e=N.defaultProps,_e)oe[ie]===void 0&&(oe[ie]=_e[ie]);return U(N,Se,oe)},De.createRef=function(){return{current:null}},De.forwardRef=function(N){return{$$typeof:g,render:N}},De.isValidElement=te,De.lazy=function(N){return{$$typeof:w,_payload:{_status:-1,_result:N},_init:de}},De.memo=function(N,L){return{$$typeof:h,type:N,compare:L===void 0?null:L}},De.startTransition=function(N){var L=H.T,se={};H.T=se;try{var ie=N(),oe=H.S;oe!==null&&oe(se,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then($,ee)}catch(Se){ee(Se)}finally{L!==null&&se.types!==null&&(L.types=se.types),H.T=L}},De.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},De.use=function(N){return H.H.use(N)},De.useActionState=function(N,L,se){return H.H.useActionState(N,L,se)},De.useCallback=function(N,L){return H.H.useCallback(N,L)},De.useContext=function(N){return H.H.useContext(N)},De.useDebugValue=function(){},De.useDeferredValue=function(N,L){return H.H.useDeferredValue(N,L)},De.useEffect=function(N,L){return H.H.useEffect(N,L)},De.useEffectEvent=function(N){return H.H.useEffectEvent(N)},De.useId=function(){return H.H.useId()},De.useImperativeHandle=function(N,L,se){return H.H.useImperativeHandle(N,L,se)},De.useInsertionEffect=function(N,L){return H.H.useInsertionEffect(N,L)},De.useLayoutEffect=function(N,L){return H.H.useLayoutEffect(N,L)},De.useMemo=function(N,L){return H.H.useMemo(N,L)},De.useOptimistic=function(N,L){return H.H.useOptimistic(N,L)},De.useReducer=function(N,L,se){return H.H.useReducer(N,L,se)},De.useRef=function(N){return H.H.useRef(N)},De.useState=function(N){return H.H.useState(N)},De.useSyncExternalStore=function(N,L,se){return H.H.useSyncExternalStore(N,L,se)},De.useTransition=function(){return H.H.useTransition()},De.version="19.2.1",De}var Bh;function Ic(){return Bh||(Bh=1,ic.exports=o0()),ic.exports}var be=Ic();const c0=Cc(be);var sc={exports:{}},si={},lc={exports:{}},oc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function u0(){return Fh||(Fh=1,(function(c){function o(P,V){var de=P.length;P.push(V);e:for(;0<de;){var ee=de-1>>>1,ge=P[ee];if(0<p(ge,V))P[ee]=V,P[de]=ge,de=ee;else break e}}function l(P){return P.length===0?null:P[0]}function u(P){if(P.length===0)return null;var V=P[0],de=P.pop();if(de!==V){P[0]=de;e:for(var ee=0,ge=P.length,N=ge>>>1;ee<N;){var L=2*(ee+1)-1,se=P[L],ie=L+1,oe=P[ie];if(0>p(se,de))ie<ge&&0>p(oe,se)?(P[ee]=oe,P[ie]=de,ee=ie):(P[ee]=se,P[L]=de,ee=L);else if(ie<ge&&0>p(oe,de))P[ee]=oe,P[ie]=de,ee=ie;else break e}}return V}function p(P,V){var de=P.sortIndex-V.sortIndex;return de!==0?de:P.id-V.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;c.unstable_now=function(){return d.now()}}else{var m=Date,g=m.now();c.unstable_now=function(){return m.now()-g}}var b=[],h=[],w=1,E=null,C=3,S=!1,R=!1,y=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function B(P){for(var V=l(h);V!==null;){if(V.callback===null)u(h);else if(V.startTime<=P)u(h),V.sortIndex=V.expirationTime,o(b,V);else break;V=l(h)}}function j(P){if(y=!1,B(P),!R)if(l(b)!==null)R=!0,$||($=!0,k());else{var V=l(h);V!==null&&X(j,V.startTime-P)}}var $=!1,H=-1,G=5,U=-1;function ae(){return A?!0:!(c.unstable_now()-U<G)}function te(){if(A=!1,$){var P=c.unstable_now();U=P;var V=!0;try{e:{R=!1,y&&(y=!1,I(H),H=-1),S=!0;var de=C;try{t:{for(B(P),E=l(b);E!==null&&!(E.expirationTime>P&&ae());){var ee=E.callback;if(typeof ee=="function"){E.callback=null,C=E.priorityLevel;var ge=ee(E.expirationTime<=P);if(P=c.unstable_now(),typeof ge=="function"){E.callback=ge,B(P),V=!0;break t}E===l(b)&&u(b),B(P)}else u(b);E=l(b)}if(E!==null)V=!0;else{var N=l(h);N!==null&&X(j,N.startTime-P),V=!1}}break e}finally{E=null,C=de,S=!1}V=void 0}}finally{V?k():$=!1}}}var k;if(typeof D=="function")k=function(){D(te)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,v=Z.port2;Z.port1.onmessage=te,k=function(){v.postMessage(null)}}else k=function(){_(te,0)};function X(P,V){H=_(function(){P(c.unstable_now())},V)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(P){P.callback=null},c.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<P?Math.floor(1e3/P):5},c.unstable_getCurrentPriorityLevel=function(){return C},c.unstable_next=function(P){switch(C){case 1:case 2:case 3:var V=3;break;default:V=C}var de=C;C=V;try{return P()}finally{C=de}},c.unstable_requestPaint=function(){A=!0},c.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var de=C;C=P;try{return V()}finally{C=de}},c.unstable_scheduleCallback=function(P,V,de){var ee=c.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?ee+de:ee):de=ee,P){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=de+ge,P={id:w++,callback:V,priorityLevel:P,startTime:de,expirationTime:ge,sortIndex:-1},de>ee?(P.sortIndex=de,o(h,P),l(b)===null&&P===l(h)&&(y?(I(H),H=-1):y=!0,X(j,de-ee))):(P.sortIndex=ge,o(b,P),R||S||(R=!0,$||($=!0,k()))),P},c.unstable_shouldYield=ae,c.unstable_wrapCallback=function(P){var V=C;return function(){var de=C;C=V;try{return P.apply(this,arguments)}finally{C=de}}}})(oc)),oc}var Ph;function d0(){return Ph||(Ph=1,lc.exports=u0()),lc.exports}var cc={exports:{}},At={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function f0(){if(Vh)return At;Vh=1;var c=Ic();function o(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var u={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},p=Symbol.for("react.portal");function d(b,h,w){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:E==null?null:""+E,children:b,containerInfo:h,implementation:w}}var m=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,At.createPortal=function(b,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return d(b,h,null,w)},At.flushSync=function(b){var h=m.T,w=u.p;try{if(m.T=null,u.p=2,b)return b()}finally{m.T=h,u.p=w,u.d.f()}},At.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(b,h))},At.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},At.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var w=h.as,E=g(w,h.crossOrigin),C=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?u.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:E,integrity:C,fetchPriority:S}):w==="script"&&u.d.X(b,{crossOrigin:E,integrity:C,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},At.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=g(h.as,h.crossOrigin);u.d.M(b,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(b)},At.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,E=g(w,h.crossOrigin);u.d.L(b,w,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},At.preloadModule=function(b,h){if(typeof b=="string")if(h){var w=g(h.as,h.crossOrigin);u.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(b)},At.requestFormReset=function(b){u.d.r(b)},At.unstable_batchedUpdates=function(b,h){return b(h)},At.useFormState=function(b,h,w){return m.H.useFormState(b,h,w)},At.useFormStatus=function(){return m.H.useHostTransitionStatus()},At.version="19.2.1",At}var Hh;function h0(){if(Hh)return cc.exports;Hh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),cc.exports=f0(),cc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function p0(){if(Gh)return si;Gh=1;var c=d0(),o=Ic(),l=h0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return b(r),e;if(i===a)return b(r),t;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=r,a=i;else{for(var f=!1,T=r.child;T;){if(T===n){f=!0,n=r,a=i;break}if(T===a){f=!0,a=r,n=i;break}T=T.sibling}if(!f){for(T=i.child;T;){if(T===n){f=!0,n=i,a=r;break}if(T===a){f=!0,a=i,n=r;break}T=T.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,C=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),D=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function v(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case _:return"Profiler";case A:return"StrictMode";case j:return"Suspense";case $:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case D:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:v(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return v(e(t))}catch{}}return null}var X=Array.isArray,P=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},ee=[],ge=-1;function N(e){return{current:e}}function L(e){0>ge||(e.current=ee[ge],ee[ge]=null,ge--)}function se(e,t){ge++,ee[ge]=e.current,e.current=t}var ie=N(null),oe=N(null),Se=N(null),_e=N(null);function we(e,t){switch(se(Se,t),se(oe,e),se(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ih(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ih(t),e=sh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(ie),se(ie,e)}function Ne(){L(ie),L(oe),L(Se)}function nt(e){e.memoizedState!==null&&se(_e,e);var t=ie.current,n=sh(t,e.type);t!==n&&(se(oe,e),se(ie,n))}function Je(e){oe.current===e&&(L(ie),L(oe)),_e.current===e&&(L(_e),ti._currentValue=de)}var wt,Rt;function x(e){if(wt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wt=t&&t[1]||"",Rt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wt+e+Rt}var ue=!1;function re(e,t){if(!e||ue)return"";ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(ne){var J=ne}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(ne){J=ne}e.call(fe.prototype)}}else{try{throw Error()}catch(ne){J=ne}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(ne){if(ne&&J&&typeof ne.stack=="string")return[ne.stack,J.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),f=i[0],T=i[1];if(f&&T){var M=f.split(`
`),K=T.split(`
`);for(r=a=0;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;for(;r<K.length&&!K[r].includes("DetermineComponentFrameRoot");)r++;if(a===M.length||r===K.length)for(a=M.length-1,r=K.length-1;1<=a&&0<=r&&M[a]!==K[r];)r--;for(;1<=a&&0<=r;a--,r--)if(M[a]!==K[r]){if(a!==1||r!==1)do if(a--,r--,0>r||M[a]!==K[r]){var le=`
`+M[a].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=a&&0<=r);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?x(n):""}function z(e,t){switch(e.tag){case 26:case 27:case 5:return x(e.type);case 16:return x("Lazy");case 13:return e.child!==t&&t!==null?x("Suspense Fallback"):x("Suspense");case 19:return x("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return x("Activity");default:return""}}function O(e){try{var t="",n=null;do t+=z(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Y=Object.prototype.hasOwnProperty,he=c.unstable_scheduleCallback,pe=c.unstable_cancelCallback,W=c.unstable_shouldYield,ye=c.unstable_requestPaint,xe=c.unstable_now,ve=c.unstable_getCurrentPriorityLevel,Re=c.unstable_ImmediatePriority,Ye=c.unstable_UserBlockingPriority,Le=c.unstable_NormalPriority,Tt=c.unstable_LowPriority,jn=c.unstable_IdlePriority,Vt=c.log,ia=c.unstable_setDisableYieldValue,Ke=null,mt=null;function Ht(e){if(typeof Vt=="function"&&ia(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Ke,e)}catch{}}var rt=Math.clz32?Math.clz32:Gs,fi=Math.log,Hs=Math.LN2;function Gs(e){return e>>>=0,e===0?32:31-(fi(e)/Hs|0)|0}var Ra=256,sa=262144,cn=4194304;function Gt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var T=a&134217727;return T!==0?(a=T&~i,a!==0?r=Gt(a):(f&=T,f!==0?r=Gt(f):n||(n=T&~e,n!==0&&(r=Gt(n))))):(T=a&~i,T!==0?r=Gt(T):f!==0?r=Gt(f):n||(n=a&~e,n!==0&&(r=Gt(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function pr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $p(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bc(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function Ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xp(e,t,n,a,r,i){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var T=e.entanglements,M=e.expirationTimes,K=e.hiddenUpdates;for(n=f&~n;0<n;){var le=31-rt(n),fe=1<<le;T[le]=0,M[le]=-1;var J=K[le];if(J!==null)for(K[le]=null,le=0;le<J.length;le++){var ne=J[le];ne!==null&&(ne.lane&=-536870913)}n&=~fe}a!==0&&Fc(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(f&~t))}function Fc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-rt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-rt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Vc(e,t){var n=t&-t;return n=(n&42)!==0?1:qs(n),(n&(e.suspendedLanes|t))!==0?0:n}function qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hc(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Ch(e.type))}function Gc(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var kn=Math.random().toString(36).slice(2),vt="__reactFiber$"+kn,Nt="__reactProps$"+kn,Ta="__reactContainer$"+kn,Xs="__reactEvents$"+kn,Zp="__reactListeners$"+kn,Qp="__reactHandles$"+kn,Yc="__reactResources$"+kn,gr="__reactMarker$"+kn;function Zs(e){delete e[vt],delete e[Nt],delete e[Xs],delete e[Zp],delete e[Qp]}function Na(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hh(e);e!==null;){if(n=e[vt])return n;e=hh(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){if(e=e[vt]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ia(e){var t=e[Yc];return t||(t=e[Yc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gt(e){e[gr]=!0}var qc=new Set,$c={};function la(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for($c[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var Kp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xc={},Zc={};function Wp(e){return Y.call(Zc,e)?!0:Y.call(Xc,e)?!1:Kp.test(e)?Zc[e]=!0:(Xc[e]=!0,!1)}function pi(e,t,n){if(Wp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function mi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(f){n=""+f,i.call(this,f)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qs(e){if(!e._valueTracker){var t=Qc(e)?"checked":"value";e._valueTracker=Jp(e,t,""+e[t])}}function Kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Qc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var em=/[\n"\\]/g;function qt(e){return e.replace(em,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ks(e,t,n,a,r,i,f,T){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Ws(e,f,Yt(t)):n!=null?Ws(e,f,Yt(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Yt(T):e.removeAttribute("name")}function Wc(e,t,n,a,r,i,f,T){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Qs(e);return}n=n!=null?""+Yt(n):"",t=t!=null?""+Yt(t):n,T||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=T?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Qs(e)}function Ws(e,t,n){t==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Oa(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Jc(e,t,n){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yt(n):""}function eu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(X(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Yt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Qs(e)}function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||tm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nu(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&tu(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&tu(e,i,t[i])}function Js(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var el=null;function tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,La=null;function au(e){var t=Ca(e);if(t&&(e=t.stateNode)){var n=e[Nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ks(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[Nt]||null;if(!r)throw Error(u(90));Ks(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Kc(a)}break e;case"textarea":Jc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Oa(e,!!n.multiple,t,!1)}}}var nl=!1;function ru(e,t,n){if(nl)return e(t,n);nl=!0;try{var a=e(t);return a}finally{if(nl=!1,(ka!==null||La!==null)&&(rs(),ka&&(t=ka,e=La,La=ka=null,au(t),e)))for(t=0;t<e.length;t++)au(e[t])}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Nt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=!1;if(yn)try{var br={};Object.defineProperty(br,"passive",{get:function(){al=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{al=!1}var Ln=null,rl=null,vi=null;function iu(){if(vi)return vi;var e,t=rl,n=t.length,a,r="value"in Ln?Ln.value:Ln.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===r[i-a];a++);return vi=r.slice(e,1<a?1-a:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function su(){return!1}function Ct(e){function t(n,a,r,i,f){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=f,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(n=e[T],this[T]=n?n(i):i[T]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xi:su,this.isPropagationStopped=su,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=Ct(oa),xr=E({},oa,{view:0,detail:0}),rm=Ct(xr),il,sl,Sr,Ei=E({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(il=e.screenX-Sr.screenX,sl=e.screenY-Sr.screenY):sl=il=0,Sr=e),il)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),lu=Ct(Ei),im=E({},Ei,{dataTransfer:0}),sm=Ct(im),lm=E({},xr,{relatedTarget:0}),ll=Ct(lm),om=E({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=Ct(om),um=E({},oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dm=Ct(um),fm=E({},oa,{data:0}),ou=Ct(fm),hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function ol(){return gm}var ym=E({},xr,{key:function(e){if(e.key){var t=hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=Ct(ym),bm=E({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=Ct(bm),xm=E({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),Sm=Ct(xm),Em=E({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=Ct(Em),_m=E({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=Ct(_m),Rm=E({},oa,{newState:0,oldState:0}),Tm=Ct(Rm),Nm=[9,13,27,32],cl=yn&&"CompositionEvent"in window,Er=null;yn&&"documentMode"in document&&(Er=document.documentMode);var Cm=yn&&"TextEvent"in window&&!Er,uu=yn&&(!cl||Er&&8<Er&&11>=Er),du=" ",fu=!1;function hu(e,t){switch(e){case"keyup":return Nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function Im(e,t){switch(e){case"compositionend":return pu(t);case"keypress":return t.which!==32?null:(fu=!0,du);case"textInput":return e=t.data,e===du&&fu?null:e;default:return null}}function Dm(e,t){if(za)return e==="compositionend"||!cl&&hu(e,t)?(e=iu(),vi=rl=Ln=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uu&&t.locale!=="ko"?null:t.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Om[e.type]:t==="textarea"}function gu(e,t,n,a){ka?La?La.push(a):La=[a]:ka=a,t=ds(t,"onChange"),0<t.length&&(n=new Si("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ar=null,_r=null;function jm(e){Jf(e,0)}function Ai(e){var t=yr(e);if(Kc(t))return e}function yu(e,t){if(e==="change")return t}var vu=!1;if(yn){var ul;if(yn){var dl="oninput"in document;if(!dl){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),dl=typeof bu.oninput=="function"}ul=dl}else ul=!1;vu=ul&&(!document.documentMode||9<document.documentMode)}function xu(){Ar&&(Ar.detachEvent("onpropertychange",Su),_r=Ar=null)}function Su(e){if(e.propertyName==="value"&&Ai(_r)){var t=[];gu(t,_r,e,tl(e)),ru(jm,t)}}function km(e,t,n){e==="focusin"?(xu(),Ar=t,_r=n,Ar.attachEvent("onpropertychange",Su)):e==="focusout"&&xu()}function Lm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(_r)}function zm(e,t){if(e==="click")return Ai(t)}function Mm(e,t){if(e==="input"||e==="change")return Ai(t)}function Um(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Um;function wr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Y.call(t,r)||!Lt(e[r],t[r]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var n=Eu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eu(n)}}function _u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gi(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bm=yn&&"documentMode"in document&&11>=document.documentMode,Ma=null,hl=null,Rr=null,pl=!1;function Ru(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pl||Ma==null||Ma!==gi(a)||(a=Ma,"selectionStart"in a&&fl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rr&&wr(Rr,a)||(Rr=a,a=ds(hl,"onSelect"),0<a.length&&(t=new Si("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ma)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},ml={},Tu={};yn&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function ua(e){if(ml[e])return ml[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tu)return ml[e]=t[n];return e}var Nu=ua("animationend"),Cu=ua("animationiteration"),Iu=ua("animationstart"),Fm=ua("transitionrun"),Pm=ua("transitionstart"),Vm=ua("transitioncancel"),Du=ua("transitionend"),Ou=new Map,gl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gl.push("scrollEnd");function an(e,t){Ou.set(e,t),la(t,[e])}var _i=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$t=[],Ba=0,yl=0;function wi(){for(var e=Ba,t=yl=Ba=0;t<e;){var n=$t[t];$t[t++]=null;var a=$t[t];$t[t++]=null;var r=$t[t];$t[t++]=null;var i=$t[t];if($t[t++]=null,a!==null&&r!==null){var f=a.pending;f===null?r.next=r:(r.next=f.next,f.next=r),a.pending=r}i!==0&&ju(n,r,i)}}function Ri(e,t,n,a){$t[Ba++]=e,$t[Ba++]=t,$t[Ba++]=n,$t[Ba++]=a,yl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function vl(e,t,n,a){return Ri(e,t,n,a),Ti(e)}function da(e,t){return Ri(e,null,null,t),Ti(e)}function ju(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-rt(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function Ti(e){if(50<Xr)throw Xr=0,No=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function Hm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new Hm(e,t,n,a)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ku(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ni(e,t,n,a,r,i){var f=0;if(a=e,typeof e=="function")bl(e)&&(f=1);else if(typeof e=="string")f=Xg(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=zt(31,n,t,r),e.elementType=U,e.lanes=i,e;case y:return fa(n.children,r,i,t);case A:f=8,r|=24;break;case _:return e=zt(12,n,t,r|2),e.elementType=_,e.lanes=i,e;case j:return e=zt(13,n,t,r),e.elementType=j,e.lanes=i,e;case $:return e=zt(19,n,t,r),e.elementType=$,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:f=10;break e;case I:f=9;break e;case B:f=11;break e;case H:f=14;break e;case G:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=zt(f,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function fa(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function xl(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Lu(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function Sl(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zu=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var n=zu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:O(t)},zu.set(e,t),t)}return{value:e,source:t,stack:O(t)}}var Pa=[],Va=0,Ci=null,Tr=0,Zt=[],Qt=0,zn=null,un=1,dn="";function bn(e,t){Pa[Va++]=Tr,Pa[Va++]=Ci,Ci=e,Tr=t}function Mu(e,t,n){Zt[Qt++]=un,Zt[Qt++]=dn,Zt[Qt++]=zn,zn=e;var a=un;e=dn;var r=32-rt(a)-1;a&=~(1<<r),n+=1;var i=32-rt(t)+r;if(30<i){var f=r-r%5;i=(a&(1<<f)-1).toString(32),a>>=f,r-=f,un=1<<32-rt(t)+r|n<<r|a,dn=i+e}else un=1<<i|n<<r|a,dn=e}function El(e){e.return!==null&&(bn(e,1),Mu(e,1,0))}function Al(e){for(;e===Ci;)Ci=Pa[--Va],Pa[Va]=null,Tr=Pa[--Va],Pa[Va]=null;for(;e===zn;)zn=Zt[--Qt],Zt[Qt]=null,dn=Zt[--Qt],Zt[Qt]=null,un=Zt[--Qt],Zt[Qt]=null}function Uu(e,t){Zt[Qt++]=un,Zt[Qt++]=dn,Zt[Qt++]=zn,un=t.id,dn=t.overflow,zn=e}var bt=null,et=null,Pe=!1,Mn=null,Kt=!1,_l=Error(u(519));function Un(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nr(Xt(t,e)),_l}function Bu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[vt]=e,t[Nt]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Qr.length;n++)Ue(Qr[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Wc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),eu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||ah(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Un(e,!0)}function Fu(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:bt=bt.return}}function Ha(e){if(e!==bt)return!1;if(!Pe)return Fu(e),Pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ho(e.type,e.memoizedProps)),n=!n),n&&et&&Un(e),Fu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));et=fh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));et=fh(e)}else t===27?(t=et,Wn(e.type)?(e=Xo,Xo=null,et=e):et=t):et=bt?Jt(e.stateNode.nextSibling):null;return!0}function ha(){et=bt=null,Pe=!1}function wl(){var e=Mn;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Mn=null),e}function Nr(e){Mn===null?Mn=[e]:Mn.push(e)}var Rl=N(null),pa=null,xn=null;function Bn(e,t,n){se(Rl,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=Rl.current,L(Rl)}function Tl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Nl(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var f=r.child;i=i.firstContext;e:for(;i!==null;){var T=i;i=r;for(var M=0;M<t.length;M++)if(T.context===t[M]){i.lanes|=n,T=i.alternate,T!==null&&(T.lanes|=n),Tl(i.return,n,e),a||(f=null);break e}i=T.next}}else if(r.tag===18){if(f=r.return,f===null)throw Error(u(341));f.lanes|=n,i=f.alternate,i!==null&&(i.lanes|=n),Tl(f,n,e),f=null}else f=r.child;if(f!==null)f.return=r;else for(f=r;f!==null;){if(f===e){f=null;break}if(r=f.sibling,r!==null){r.return=f.return,f=r;break}f=f.return}r=f}}function Ga(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var f=r.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var T=r.type;Lt(r.pendingProps.value,f.value)||(e!==null?e.push(T):e=[T])}}else if(r===_e.current){if(f=r.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ti):e=[ti])}r=r.return}e!==null&&Nl(t,e,n,a),t.flags|=262144}function Ii(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){pa=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return Pu(pa,e)}function Di(e,t){return pa===null&&ma(e),Pu(e,t)}function Pu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(u(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Gm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ym=c.unstable_scheduleCallback,qm=c.unstable_NormalPriority,ut={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cl(){return{controller:new Gm,data:new Map,refCount:0}}function Cr(e){e.refCount--,e.refCount===0&&Ym(qm,function(){e.controller.abort()})}var Ir=null,Il=0,Ya=0,qa=null;function $m(e,t){if(Ir===null){var n=Ir=[];Il=0,Ya=ko(),qa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Il++,t.then(Vu,Vu),t}function Vu(){if(--Il===0&&Ir!==null){qa!==null&&(qa.status="fulfilled");var e=Ir;Ir=null,Ya=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Hu=P.S;P.S=function(e,t){Tf=xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&$m(e,t),Hu!==null&&Hu(e,t)};var ga=N(null);function Dl(){var e=ga.current;return e!==null?e:We.pooledCache}function Oi(e,t){t===null?se(ga,ga.current):se(ga,t.pool)}function Gu(){var e=Dl();return e===null?null:{parent:ut._currentValue,pool:e}}var $a=Error(u(460)),Ol=Error(u(474)),ji=Error(u(542)),ki={then:function(){}};function Yu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xu(e),e}throw va=t,$a}}function ya(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(va=n,$a):n}}var va=null;function $u(){if(va===null)throw Error(u(459));var e=va;return va=null,e}function Xu(e){if(e===$a||e===ji)throw Error(u(483))}var Xa=null,Dr=0;function Li(e){var t=Dr;return Dr+=1,Xa===null&&(Xa=[]),qu(Xa,e,t)}function Or(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function zi(e,t){throw t.$$typeof===C?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zu(e){function t(q,F){if(e){var Q=q.deletions;Q===null?(q.deletions=[F],q.flags|=16):Q.push(F)}}function n(q,F){if(!e)return null;for(;F!==null;)t(q,F),F=F.sibling;return null}function a(q){for(var F=new Map;q!==null;)q.key!==null?F.set(q.key,q):F.set(q.index,q),q=q.sibling;return F}function r(q,F){return q=vn(q,F),q.index=0,q.sibling=null,q}function i(q,F,Q){return q.index=Q,e?(Q=q.alternate,Q!==null?(Q=Q.index,Q<F?(q.flags|=67108866,F):Q):(q.flags|=67108866,F)):(q.flags|=1048576,F)}function f(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,F,Q,ce){return F===null||F.tag!==6?(F=xl(Q,q.mode,ce),F.return=q,F):(F=r(F,Q),F.return=q,F)}function M(q,F,Q,ce){var Te=Q.type;return Te===y?le(q,F,Q.props.children,ce,Q.key):F!==null&&(F.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===G&&ya(Te)===F.type)?(F=r(F,Q.props),Or(F,Q),F.return=q,F):(F=Ni(Q.type,Q.key,Q.props,null,q.mode,ce),Or(F,Q),F.return=q,F)}function K(q,F,Q,ce){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=Sl(Q,q.mode,ce),F.return=q,F):(F=r(F,Q.children||[]),F.return=q,F)}function le(q,F,Q,ce,Te){return F===null||F.tag!==7?(F=fa(Q,q.mode,ce,Te),F.return=q,F):(F=r(F,Q),F.return=q,F)}function fe(q,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=xl(""+F,q.mode,Q),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return Q=Ni(F.type,F.key,F.props,null,q.mode,Q),Or(Q,F),Q.return=q,Q;case R:return F=Sl(F,q.mode,Q),F.return=q,F;case G:return F=ya(F),fe(q,F,Q)}if(X(F)||k(F))return F=fa(F,q.mode,Q,null),F.return=q,F;if(typeof F.then=="function")return fe(q,Li(F),Q);if(F.$$typeof===D)return fe(q,Di(q,F),Q);zi(q,F)}return null}function J(q,F,Q,ce){var Te=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Te!==null?null:T(q,F,""+Q,ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Te?M(q,F,Q,ce):null;case R:return Q.key===Te?K(q,F,Q,ce):null;case G:return Q=ya(Q),J(q,F,Q,ce)}if(X(Q)||k(Q))return Te!==null?null:le(q,F,Q,ce,null);if(typeof Q.then=="function")return J(q,F,Li(Q),ce);if(Q.$$typeof===D)return J(q,F,Di(q,Q),ce);zi(q,Q)}return null}function ne(q,F,Q,ce,Te){if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return q=q.get(Q)||null,T(F,q,""+ce,Te);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case S:return q=q.get(ce.key===null?Q:ce.key)||null,M(F,q,ce,Te);case R:return q=q.get(ce.key===null?Q:ce.key)||null,K(F,q,ce,Te);case G:return ce=ya(ce),ne(q,F,Q,ce,Te)}if(X(ce)||k(ce))return q=q.get(Q)||null,le(F,q,ce,Te,null);if(typeof ce.then=="function")return ne(q,F,Q,Li(ce),Te);if(ce.$$typeof===D)return ne(q,F,Q,Di(F,ce),Te);zi(F,ce)}return null}function Ee(q,F,Q,ce){for(var Te=null,Ve=null,Ae=F,ke=F=0,Fe=null;Ae!==null&&ke<Q.length;ke++){Ae.index>ke?(Fe=Ae,Ae=null):Fe=Ae.sibling;var He=J(q,Ae,Q[ke],ce);if(He===null){Ae===null&&(Ae=Fe);break}e&&Ae&&He.alternate===null&&t(q,Ae),F=i(He,F,ke),Ve===null?Te=He:Ve.sibling=He,Ve=He,Ae=Fe}if(ke===Q.length)return n(q,Ae),Pe&&bn(q,ke),Te;if(Ae===null){for(;ke<Q.length;ke++)Ae=fe(q,Q[ke],ce),Ae!==null&&(F=i(Ae,F,ke),Ve===null?Te=Ae:Ve.sibling=Ae,Ve=Ae);return Pe&&bn(q,ke),Te}for(Ae=a(Ae);ke<Q.length;ke++)Fe=ne(Ae,q,ke,Q[ke],ce),Fe!==null&&(e&&Fe.alternate!==null&&Ae.delete(Fe.key===null?ke:Fe.key),F=i(Fe,F,ke),Ve===null?Te=Fe:Ve.sibling=Fe,Ve=Fe);return e&&Ae.forEach(function(aa){return t(q,aa)}),Pe&&bn(q,ke),Te}function Ce(q,F,Q,ce){if(Q==null)throw Error(u(151));for(var Te=null,Ve=null,Ae=F,ke=F=0,Fe=null,He=Q.next();Ae!==null&&!He.done;ke++,He=Q.next()){Ae.index>ke?(Fe=Ae,Ae=null):Fe=Ae.sibling;var aa=J(q,Ae,He.value,ce);if(aa===null){Ae===null&&(Ae=Fe);break}e&&Ae&&aa.alternate===null&&t(q,Ae),F=i(aa,F,ke),Ve===null?Te=aa:Ve.sibling=aa,Ve=aa,Ae=Fe}if(He.done)return n(q,Ae),Pe&&bn(q,ke),Te;if(Ae===null){for(;!He.done;ke++,He=Q.next())He=fe(q,He.value,ce),He!==null&&(F=i(He,F,ke),Ve===null?Te=He:Ve.sibling=He,Ve=He);return Pe&&bn(q,ke),Te}for(Ae=a(Ae);!He.done;ke++,He=Q.next())He=ne(Ae,q,ke,He.value,ce),He!==null&&(e&&He.alternate!==null&&Ae.delete(He.key===null?ke:He.key),F=i(He,F,ke),Ve===null?Te=He:Ve.sibling=He,Ve=He);return e&&Ae.forEach(function(i0){return t(q,i0)}),Pe&&bn(q,ke),Te}function Qe(q,F,Q,ce){if(typeof Q=="object"&&Q!==null&&Q.type===y&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:e:{for(var Te=Q.key;F!==null;){if(F.key===Te){if(Te=Q.type,Te===y){if(F.tag===7){n(q,F.sibling),ce=r(F,Q.props.children),ce.return=q,q=ce;break e}}else if(F.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===G&&ya(Te)===F.type){n(q,F.sibling),ce=r(F,Q.props),Or(ce,Q),ce.return=q,q=ce;break e}n(q,F);break}else t(q,F);F=F.sibling}Q.type===y?(ce=fa(Q.props.children,q.mode,ce,Q.key),ce.return=q,q=ce):(ce=Ni(Q.type,Q.key,Q.props,null,q.mode,ce),Or(ce,Q),ce.return=q,q=ce)}return f(q);case R:e:{for(Te=Q.key;F!==null;){if(F.key===Te)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){n(q,F.sibling),ce=r(F,Q.children||[]),ce.return=q,q=ce;break e}else{n(q,F);break}else t(q,F);F=F.sibling}ce=Sl(Q,q.mode,ce),ce.return=q,q=ce}return f(q);case G:return Q=ya(Q),Qe(q,F,Q,ce)}if(X(Q))return Ee(q,F,Q,ce);if(k(Q)){if(Te=k(Q),typeof Te!="function")throw Error(u(150));return Q=Te.call(Q),Ce(q,F,Q,ce)}if(typeof Q.then=="function")return Qe(q,F,Li(Q),ce);if(Q.$$typeof===D)return Qe(q,F,Di(q,Q),ce);zi(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,F!==null&&F.tag===6?(n(q,F.sibling),ce=r(F,Q),ce.return=q,q=ce):(n(q,F),ce=xl(Q,q.mode,ce),ce.return=q,q=ce),f(q)):n(q,F)}return function(q,F,Q,ce){try{Dr=0;var Te=Qe(q,F,Q,ce);return Xa=null,Te}catch(Ae){if(Ae===$a||Ae===ji)throw Ae;var Ve=zt(29,Ae,null,q.mode);return Ve.lanes=ce,Ve.return=q,Ve}finally{}}}var ba=Zu(!0),Qu=Zu(!1),Fn=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ge&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ti(e),ju(e,null,n),t}return Ri(e,a,t,n),Ti(e)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Pc(e,n)}}function Ll(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=f:i=i.next=f,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var zl=!1;function kr(){if(zl){var e=qa;if(e!==null)throw e}}function Lr(e,t,n,a){zl=!1;var r=e.updateQueue;Fn=!1;var i=r.firstBaseUpdate,f=r.lastBaseUpdate,T=r.shared.pending;if(T!==null){r.shared.pending=null;var M=T,K=M.next;M.next=null,f===null?i=K:f.next=K,f=M;var le=e.alternate;le!==null&&(le=le.updateQueue,T=le.lastBaseUpdate,T!==f&&(T===null?le.firstBaseUpdate=K:T.next=K,le.lastBaseUpdate=M))}if(i!==null){var fe=r.baseState;f=0,le=K=M=null,T=i;do{var J=T.lane&-536870913,ne=J!==T.lane;if(ne?(Be&J)===J:(a&J)===J){J!==0&&J===Ya&&(zl=!0),le!==null&&(le=le.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ee=e,Ce=T;J=t;var Qe=n;switch(Ce.tag){case 1:if(Ee=Ce.payload,typeof Ee=="function"){fe=Ee.call(Qe,fe,J);break e}fe=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Ce.payload,J=typeof Ee=="function"?Ee.call(Qe,fe,J):Ee,J==null)break e;fe=E({},fe,J);break e;case 2:Fn=!0}}J=T.callback,J!==null&&(e.flags|=64,ne&&(e.flags|=8192),ne=r.callbacks,ne===null?r.callbacks=[J]:ne.push(J))}else ne={lane:J,tag:T.tag,payload:T.payload,callback:T.callback,next:null},le===null?(K=le=ne,M=fe):le=le.next=ne,f|=J;if(T=T.next,T===null){if(T=r.shared.pending,T===null)break;ne=T,T=ne.next,ne.next=null,r.lastBaseUpdate=ne,r.shared.pending=null}}while(!0);le===null&&(M=fe),r.baseState=M,r.firstBaseUpdate=K,r.lastBaseUpdate=le,i===null&&(r.shared.lanes=0),$n|=f,e.lanes=f,e.memoizedState=fe}}function Ku(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Wu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ku(n[e],t)}var Za=N(null),Mi=N(0);function Ju(e,t){e=In,se(Mi,e),se(Za,t),In=e|t.baseLanes}function Ml(){se(Mi,In),se(Za,Za.current)}function Ul(){In=Mi.current,L(Za),L(Mi)}var Mt=N(null),Wt=null;function Hn(e){var t=e.alternate;se(lt,lt.current&1),se(Mt,e),Wt===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Wt=e)}function Bl(e){se(lt,lt.current),se(Mt,e),Wt===null&&(Wt=e)}function ed(e){e.tag===22?(se(lt,lt.current),se(Mt,e),Wt===null&&(Wt=e)):Gn()}function Gn(){se(lt,lt.current),se(Mt,Mt.current)}function Ut(e){L(Mt),Wt===e&&(Wt=null),L(lt)}var lt=N(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qo(n)||$o(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,je=null,Xe=null,dt=null,Bi=!1,Qa=!1,xa=!1,Fi=0,zr=0,Ka=null,Zm=0;function it(){throw Error(u(321))}function Fl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function Pl(e,t,n,a,r,i){return En=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Md:no,xa=!1,i=n(a,r),xa=!1,Qa&&(i=nd(t,n,a,r)),td(e),i}function td(e){P.H=Br;var t=Xe!==null&&Xe.next!==null;if(En=0,dt=Xe=je=null,Bi=!1,zr=0,Ka=null,t)throw Error(u(300));e===null||ft||(e=e.dependencies,e!==null&&Ii(e)&&(ft=!0))}function nd(e,t,n,a){je=e;var r=0;do{if(Qa&&(Ka=null),zr=0,Qa=!1,25<=r)throw Error(u(301));if(r+=1,dt=Xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}P.H=Ud,i=t(n,a)}while(Qa);return i}function Qm(){var e=P.H,t=e.useState()[0];return t=typeof t.then=="function"?Mr(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(je.flags|=1024),t}function Vl(){var e=Fi!==0;return Fi=0,e}function Hl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Gl(e){if(Bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bi=!1}En=0,dt=Xe=je=null,Qa=!1,zr=Fi=0,Ka=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?je.memoizedState=dt=e:dt=dt.next=e,dt}function ot(){if(Xe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=dt===null?je.memoizedState:dt.next;if(t!==null)dt=t,Xe=e;else{if(e===null)throw je.alternate===null?Error(u(467)):Error(u(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dt===null?je.memoizedState=dt=e:dt=dt.next=e}return dt}function Pi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mr(e){var t=zr;return zr+=1,Ka===null&&(Ka=[]),e=qu(Ka,e,t),t=je,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Md:no),e}function Vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mr(e);if(e.$$typeof===D)return xt(e)}throw Error(u(438,String(e)))}function Yl(e){var t=null,n=je.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=je.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Pi(),je.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ae;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=ot();return ql(t,Xe,e)}function ql(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var f=r.next;r.next=i.next,i.next=f}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var T=f=null,M=null,K=t,le=!1;do{var fe=K.lane&-536870913;if(fe!==K.lane?(Be&fe)===fe:(En&fe)===fe){var J=K.revertLane;if(J===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),fe===Ya&&(le=!0);else if((En&J)===J){K=K.next,J===Ya&&(le=!0);continue}else fe={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},M===null?(T=M=fe,f=i):M=M.next=fe,je.lanes|=J,$n|=J;fe=K.action,xa&&n(i,fe),i=K.hasEagerState?K.eagerState:n(i,fe)}else J={lane:fe,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},M===null?(T=M=J,f=i):M=M.next=J,je.lanes|=fe,$n|=fe;K=K.next}while(K!==null&&K!==t);if(M===null?f=i:M.next=T,!Lt(i,e.memoizedState)&&(ft=!0,le&&(n=qa,n!==null)))throw n;e.memoizedState=i,e.baseState=f,e.baseQueue=M,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function $l(e){var t=ot(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var f=r=r.next;do i=e(i,f.action),f=f.next;while(f!==r);Lt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function ad(e,t,n){var a=je,r=ot(),i=Pe;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!Lt((Xe||r).memoizedState,n);if(f&&(r.memoizedState=n,ft=!0),r=r.queue,Ql(sd.bind(null,a,r,e),[e]),r.getSnapshot!==t||f||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,Wa(9,{destroy:void 0},id.bind(null,a,r,n,t),null),We===null)throw Error(u(349));i||(En&127)!==0||rd(a,t,n)}return n}function rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t=Pi(),je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function id(e,t,n,a){t.value=n,t.getSnapshot=a,ld(t)&&od(e)}function sd(e,t,n){return n(function(){ld(t)&&od(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function od(e){var t=da(e,2);t!==null&&kt(t,e,2)}function Xl(e){var t=_t();if(typeof e=="function"){var n=e;if(e=n(),xa){Ht(!0);try{n()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function cd(e,t,n,a){return e.baseState=n,ql(e,Xe,typeof a=="function"?a:An)}function Km(e,t,n,a,r){if(qi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){i.listeners.push(f)}};P.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,ud(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ud(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=P.T,f={};P.T=f;try{var T=n(r,a),M=P.S;M!==null&&M(f,T),dd(e,t,T)}catch(K){Zl(e,t,K)}finally{i!==null&&f.types!==null&&(i.types=f.types),P.T=i}}else try{i=n(r,a),dd(e,t,i)}catch(K){Zl(e,t,K)}}function dd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){fd(e,t,a)},function(a){return Zl(e,t,a)}):fd(e,t,n)}function fd(e,t,n){t.status="fulfilled",t.value=n,hd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ud(e,n)))}function Zl(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,hd(t),t=t.next;while(t!==a)}e.action=null}function hd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pd(e,t){return t}function md(e,t){if(Pe){var n=We.formState;if(n!==null){e:{var a=je;if(Pe){if(et){t:{for(var r=et,i=Kt;r.nodeType!==8;){if(!i){r=null;break t}if(r=Jt(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){et=Jt(r.nextSibling),a=r.data==="F!";break e}}Un(a)}a=!1}a&&(t=n[0])}}return n=_t(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pd,lastRenderedState:t},n.queue=a,n=kd.bind(null,je,a),a.dispatch=n,a=Xl(!1),i=to.bind(null,je,!1,a.queue),a=_t(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Km.bind(null,je,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function gd(e){var t=ot();return yd(t,Xe,e)}function yd(e,t,n){if(t=ql(e,t,pd)[0],e=Hi(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Mr(t)}catch(f){throw f===$a?ji:f}else a=t;t=ot();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(je.flags|=2048,Wa(9,{destroy:void 0},Wm.bind(null,r,n),null)),[a,i,e]}function Wm(e,t){e.action=t}function vd(e){var t=ot(),n=Xe;if(n!==null)return yd(t,n,e);ot(),t=t.memoizedState,n=ot();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Wa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=je.updateQueue,t===null&&(t=Pi(),je.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function bd(){return ot().memoizedState}function Gi(e,t,n,a){var r=_t();je.flags|=e,r.memoizedState=Wa(1|t,{destroy:void 0},n,a===void 0?null:a)}function Yi(e,t,n,a){var r=ot();a=a===void 0?null:a;var i=r.memoizedState.inst;Xe!==null&&a!==null&&Fl(a,Xe.memoizedState.deps)?r.memoizedState=Wa(t,i,n,a):(je.flags|=e,r.memoizedState=Wa(1|t,i,n,a))}function xd(e,t){Gi(8390656,8,e,t)}function Ql(e,t){Yi(2048,8,e,t)}function Jm(e){je.flags|=4;var t=je.updateQueue;if(t===null)t=Pi(),je.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Sd(e){var t=ot().memoizedState;return Jm({ref:t,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Ed(e,t){return Yi(4,2,e,t)}function Ad(e,t){return Yi(4,4,e,t)}function _d(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,n){n=n!=null?n.concat([e]):null,Yi(4,4,_d.bind(null,t,e),n)}function Kl(){}function Rd(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Fl(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Td(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Fl(t,a[1]))return a[0];if(a=e(),xa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a}function Wl(e,t,n){return n===void 0||(En&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Cf(),je.lanes|=e,$n|=e,n)}function Nd(e,t,n,a){return Lt(n,t)?n:Za.current!==null?(e=Wl(e,n,a),Lt(e,t)||(ft=!0),e):(En&42)===0||(En&1073741824)!==0&&(Be&261930)===0?(ft=!0,e.memoizedState=n):(e=Cf(),je.lanes|=e,$n|=e,t)}function Cd(e,t,n,a,r){var i=V.p;V.p=i!==0&&8>i?i:8;var f=P.T,T={};P.T=T,to(e,!1,t,n);try{var M=r(),K=P.S;if(K!==null&&K(T,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var le=Xm(M,a);Ur(e,t,le,Pt(e))}else Ur(e,t,a,Pt(e))}catch(fe){Ur(e,t,{then:function(){},status:"rejected",reason:fe},Pt())}finally{V.p=i,f!==null&&T.types!==null&&(f.types=T.types),P.T=f}}function eg(){}function Jl(e,t,n,a){if(e.tag!==5)throw Error(u(476));var r=Id(e).queue;Cd(e,r,t,de,n===null?eg:function(){return Dd(e),n(a)})}function Id(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dd(e){var t=Id(e);t.next===null&&(t=e.alternate.memoizedState),Ur(e,t.next.queue,{},Pt())}function eo(){return xt(ti)}function Od(){return ot().memoizedState}function jd(){return ot().memoizedState}function tg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Pt();e=Pn(n);var a=Vn(t,e,n);a!==null&&(kt(a,t,n),jr(a,t,n)),t={cache:Cl()},e.payload=t;return}t=t.return}}function ng(e,t,n){var a=Pt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e)?Ld(t,n):(n=vl(e,t,n,a),n!==null&&(kt(n,e,a),zd(n,t,a)))}function kd(e,t,n){var a=Pt();Ur(e,t,n,a)}function Ur(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Ld(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var f=t.lastRenderedState,T=i(f,n);if(r.hasEagerState=!0,r.eagerState=T,Lt(T,f))return Ri(e,t,r,0),We===null&&wi(),!1}catch{}finally{}if(n=vl(e,t,r,a),n!==null)return kt(n,e,a),zd(n,t,a),!0}return!1}function to(e,t,n,a){if(a={lane:2,revertLane:ko(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(u(479))}else t=vl(e,n,a,2),t!==null&&kt(t,e,2)}function qi(e){var t=e.alternate;return e===je||t!==null&&t===je}function Ld(e,t){Qa=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Pc(e,n)}}var Br={readContext:xt,use:Vi,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useInsertionEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useSyncExternalStore:it,useId:it,useHostTransitionStatus:it,useFormState:it,useActionState:it,useOptimistic:it,useMemoCache:it,useCacheRefresh:it};Br.useEffectEvent=it;var Md={readContext:xt,use:Vi,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:xd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Gi(4194308,4,_d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){Gi(4,2,e,t)},useMemo:function(e,t){var n=_t();t=t===void 0?null:t;var a=e();if(xa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=_t();if(n!==void 0){var r=n(t);if(xa){Ht(!0);try{n(t)}finally{Ht(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=ng.bind(null,je,e),[a.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:function(e){e=Xl(e);var t=e.queue,n=kd.bind(null,je,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Kl,useDeferredValue:function(e,t){var n=_t();return Wl(n,e,t)},useTransition:function(){var e=Xl(!1);return e=Cd.bind(null,je,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=je,r=_t();if(Pe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),We===null)throw Error(u(349));(Be&127)!==0||rd(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,xd(sd.bind(null,a,i,e),[e]),a.flags|=2048,Wa(9,{destroy:void 0},id.bind(null,a,i,n,t),null),n},useId:function(){var e=_t(),t=We.identifierPrefix;if(Pe){var n=dn,a=un;n=(a&~(1<<32-rt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Zm++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:md,useActionState:md,useOptimistic:function(e){var t=_t();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=to.bind(null,je,!0,n),n.dispatch=t,[e,t]},useMemoCache:Yl,useCacheRefresh:function(){return _t().memoizedState=tg.bind(null,je)},useEffectEvent:function(e){var t=_t(),n={impl:e};return t.memoizedState=n,function(){if((Ge&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},no={readContext:xt,use:Vi,useCallback:Rd,useContext:xt,useEffect:Ql,useImperativeHandle:wd,useInsertionEffect:Ed,useLayoutEffect:Ad,useMemo:Td,useReducer:Hi,useRef:bd,useState:function(){return Hi(An)},useDebugValue:Kl,useDeferredValue:function(e,t){var n=ot();return Nd(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Hi(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Mr(e),t]},useSyncExternalStore:ad,useId:Od,useHostTransitionStatus:eo,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var n=ot();return cd(n,Xe,e,t)},useMemoCache:Yl,useCacheRefresh:jd};no.useEffectEvent=Sd;var Ud={readContext:xt,use:Vi,useCallback:Rd,useContext:xt,useEffect:Ql,useImperativeHandle:wd,useInsertionEffect:Ed,useLayoutEffect:Ad,useMemo:Td,useReducer:$l,useRef:bd,useState:function(){return $l(An)},useDebugValue:Kl,useDeferredValue:function(e,t){var n=ot();return Xe===null?Wl(n,e,t):Nd(n,Xe.memoizedState,e,t)},useTransition:function(){var e=$l(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Mr(e),t]},useSyncExternalStore:ad,useId:Od,useHostTransitionStatus:eo,useFormState:vd,useActionState:vd,useOptimistic:function(e,t){var n=ot();return Xe!==null?cd(n,Xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Yl,useCacheRefresh:jd};Ud.useEffectEvent=Sd;function ao(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Pt(),r=Pn(a);r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(kt(t,e,a),jr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Pt(),r=Pn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(kt(t,e,a),jr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pt(),a=Pn(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(kt(t,e,n),jr(t,e,n))}};function Bd(e,t,n,a,r,i,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,f):t.prototype&&t.prototype.isPureReactComponent?!wr(n,a)||!wr(r,i):!0}function Fd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Sa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Pd(e){_i(e)}function Vd(e){console.error(e)}function Hd(e){_i(e)}function $i(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Gd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function io(e,t,n){return n=Pn(n),n.tag=3,n.payload={element:null},n.callback=function(){$i(e,t)},n}function Yd(e){return e=Pn(e),e.tag=3,e}function qd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){Gd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Gd(t,n,a),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var T=a.stack;this.componentDidCatch(a.value,{componentStack:T!==null?T:""})})}function ag(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,r,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Wt===null?is():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ki?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Do(e,a,r)),!1;case 22:return n.flags|=65536,a===ki?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Do(e,a,r)),!1}throw Error(u(435,n.tag))}return Do(e,a,r),is(),!1}if(Pe)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==_l&&(e=Error(u(422),{cause:a}),Nr(Xt(e,n)))):(a!==_l&&(t=Error(u(423),{cause:a}),Nr(Xt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Xt(a,n),r=io(e.stateNode,a,r),Ll(e,r),st!==4&&(st=2)),!1;var i=Error(u(520),{cause:a});if(i=Xt(i,n),$r===null?$r=[i]:$r.push(i),st!==4&&(st=2),t===null)return!0;a=Xt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=io(n.stateNode,a,e),Ll(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Yd(r),qd(r,e,n,a),Ll(n,r),!1}n=n.return}while(n!==null);return!1}var so=Error(u(461)),ft=!1;function St(e,t,n,a){t.child=e===null?Qu(t,null,n,a):ba(t,e.child,n,a)}function $d(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var f={};for(var T in a)T!=="ref"&&(f[T]=a[T])}else f=a;return ma(t),a=Pl(e,t,n,f,i,r),T=Vl(),e!==null&&!ft?(Hl(e,t,r),_n(e,t,r)):(Pe&&T&&El(t),t.flags|=1,St(e,t,a,r),t.child)}function Xd(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!bl(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Zd(e,t,i,a,r)):(e=Ni(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!mo(e,r)){var f=i.memoizedProps;if(n=n.compare,n=n!==null?n:wr,n(f,a)&&e.ref===t.ref)return _n(e,t,r)}return t.flags|=1,e=vn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Zd(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(wr(i,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=i,mo(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,_n(e,t,r)}return lo(e,t,n,a,r)}function Qd(e,t,n,a){var r=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return Kd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oi(t,i!==null?i.cachePool:null),i!==null?Ju(t,i):Ml(),ed(t);else return a=t.lanes=536870912,Kd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Oi(t,i.cachePool),Ju(t,i),Gn(),t.memoizedState=null):(e!==null&&Oi(t,null),Ml(),Gn());return St(e,t,r,n),t.child}function Fr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kd(e,t,n,a,r){var i=Dl();return i=i===null?null:{parent:ut._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Oi(t,null),Ml(),ed(t),e!==null&&Ga(e,t,a,!0),t.childLanes=r,null}function Xi(e,t){return t=Qi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wd(e,t,n){return ba(t,e.child,null,n),e=Xi(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function rg(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(a.mode==="hidden")return e=Xi(t,a),t.lanes=536870912,Fr(null,e);if(Bl(t),(e=et)?(e=dh(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Lu(e),n.return=t,t.child=n,bt=t,et=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return Xi(t,a)}var i=e.memoizedState;if(i!==null){var f=i.dehydrated;if(Bl(t),r)if(t.flags&256)t.flags&=-257,t=Wd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(ft||Ga(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(a=We,a!==null&&(f=Vc(a,n),f!==0&&f!==i.retryLane))throw i.retryLane=f,da(e,f),kt(a,e,f),so;is(),t=Wd(e,t,n)}else e=i.treeContext,et=Jt(f.nextSibling),bt=t,Pe=!0,Mn=null,Kt=!1,e!==null&&Uu(t,e),t=Xi(t,a),t.flags|=4096;return t}return e=vn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Zi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lo(e,t,n,a,r){return ma(t),n=Pl(e,t,n,a,void 0,r),a=Vl(),e!==null&&!ft?(Hl(e,t,r),_n(e,t,r)):(Pe&&a&&El(t),t.flags|=1,St(e,t,n,r),t.child)}function Jd(e,t,n,a,r,i){return ma(t),t.updateQueue=null,n=nd(t,a,n,r),td(e),a=Vl(),e!==null&&!ft?(Hl(e,t,i),_n(e,t,i)):(Pe&&a&&El(t),t.flags|=1,St(e,t,n,i),t.child)}function ef(e,t,n,a,r){if(ma(t),t.stateNode===null){var i=Fa,f=n.contextType;typeof f=="object"&&f!==null&&(i=xt(f)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ro,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},jl(t),f=n.contextType,i.context=typeof f=="object"&&f!==null?xt(f):Fa,i.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(ao(t,n,f,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(f=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),f!==i.state&&ro.enqueueReplaceState(i,i.state,null),Lr(t,a,i,r),kr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var T=t.memoizedProps,M=Sa(n,T);i.props=M;var K=i.context,le=n.contextType;f=Fa,typeof le=="object"&&le!==null&&(f=xt(le));var fe=n.getDerivedStateFromProps;le=typeof fe=="function"||typeof i.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,le||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(T||K!==f)&&Fd(t,i,a,f),Fn=!1;var J=t.memoizedState;i.state=J,Lr(t,a,i,r),kr(),K=t.memoizedState,T||J!==K||Fn?(typeof fe=="function"&&(ao(t,n,fe,a),K=t.memoizedState),(M=Fn||Bd(t,n,M,a,J,K,f))?(le||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=K),i.props=a,i.state=K,i.context=f,a=M):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,kl(e,t),f=t.memoizedProps,le=Sa(n,f),i.props=le,fe=t.pendingProps,J=i.context,K=n.contextType,M=Fa,typeof K=="object"&&K!==null&&(M=xt(K)),T=n.getDerivedStateFromProps,(K=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f!==fe||J!==M)&&Fd(t,i,a,M),Fn=!1,J=t.memoizedState,i.state=J,Lr(t,a,i,r),kr();var ne=t.memoizedState;f!==fe||J!==ne||Fn||e!==null&&e.dependencies!==null&&Ii(e.dependencies)?(typeof T=="function"&&(ao(t,n,T,a),ne=t.memoizedState),(le=Fn||Bd(t,n,le,a,J,ne,M)||e!==null&&e.dependencies!==null&&Ii(e.dependencies))?(K||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,ne,M),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,ne,M)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||f===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ne),i.props=a,i.state=ne,i.context=M,a=le):(typeof i.componentDidUpdate!="function"||f===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Zi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ba(t,e.child,null,r),t.child=ba(t,null,n,r)):St(e,t,n,r),t.memoizedState=i.state,e=t.child):e=_n(e,t,r),e}function tf(e,t,n,a){return ha(),t.flags|=256,St(e,t,n,a),t.child}var oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function co(e){return{baseLanes:e,cachePool:Gu()}}function uo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ft),e}function nf(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,f;if((f=i)||(f=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),f&&(r=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(r?Hn(t):Gn(),(e=et)?(e=dh(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Lu(e),n.return=t,t.child=n,bt=t,et=null)):e=null,e===null)throw Un(t);return $o(e)?t.lanes=32:t.lanes=536870912,null}var T=a.children;return a=a.fallback,r?(Gn(),r=t.mode,T=Qi({mode:"hidden",children:T},r),a=fa(a,r,n,null),T.return=t,a.return=t,T.sibling=a,t.child=T,a=t.child,a.memoizedState=co(n),a.childLanes=uo(e,f,n),t.memoizedState=oo,Fr(null,a)):(Hn(t),fo(t,T))}var M=e.memoizedState;if(M!==null&&(T=M.dehydrated,T!==null)){if(i)t.flags&256?(Hn(t),t.flags&=-257,t=ho(e,t,n)):t.memoizedState!==null?(Gn(),t.child=e.child,t.flags|=128,t=null):(Gn(),T=a.fallback,r=t.mode,a=Qi({mode:"visible",children:a.children},r),T=fa(T,r,n,null),T.flags|=2,a.return=t,T.return=t,a.sibling=T,t.child=a,ba(t,e.child,null,n),a=t.child,a.memoizedState=co(n),a.childLanes=uo(e,f,n),t.memoizedState=oo,t=Fr(null,a));else if(Hn(t),$o(T)){if(f=T.nextSibling&&T.nextSibling.dataset,f)var K=f.dgst;f=K,a=Error(u(419)),a.stack="",a.digest=f,Nr({value:a,source:null,stack:null}),t=ho(e,t,n)}else if(ft||Ga(e,t,n,!1),f=(n&e.childLanes)!==0,ft||f){if(f=We,f!==null&&(a=Vc(f,n),a!==0&&a!==M.retryLane))throw M.retryLane=a,da(e,a),kt(f,e,a),so;qo(T)||is(),t=ho(e,t,n)}else qo(T)?(t.flags|=192,t.child=e.child,t=null):(e=M.treeContext,et=Jt(T.nextSibling),bt=t,Pe=!0,Mn=null,Kt=!1,e!==null&&Uu(t,e),t=fo(t,a.children),t.flags|=4096);return t}return r?(Gn(),T=a.fallback,r=t.mode,M=e.child,K=M.sibling,a=vn(M,{mode:"hidden",children:a.children}),a.subtreeFlags=M.subtreeFlags&65011712,K!==null?T=vn(K,T):(T=fa(T,r,n,null),T.flags|=2),T.return=t,a.return=t,a.sibling=T,t.child=a,Fr(null,a),a=t.child,T=e.child.memoizedState,T===null?T=co(n):(r=T.cachePool,r!==null?(M=ut._currentValue,r=r.parent!==M?{parent:M,pool:M}:r):r=Gu(),T={baseLanes:T.baseLanes|n,cachePool:r}),a.memoizedState=T,a.childLanes=uo(e,f,n),t.memoizedState=oo,Fr(e.child,a)):(Hn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function fo(e,t){return t=Qi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qi(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function ho(e,t,n){return ba(t,e.child,null,n),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Tl(e.return,t,n)}function po(e,t,n,a,r,i){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=n,f.tailMode=r,f.treeForkCount=i)}function rf(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var f=lt.current,T=(f&2)!==0;if(T?(f=f&1|2,t.flags|=128):f&=1,se(lt,f),St(e,t,a,n),a=Pe?Tr:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&af(e,n,t);else if(e.tag===19)af(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ui(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),po(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ui(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}po(t,!0,n,null,i,a);break;case"together":po(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function _n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ii(e)))}function ig(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),Bn(t,ut,e.memoizedState.cache),ha();break;case 27:case 5:nt(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:Bn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bl(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?nf(e,t,n):(Hn(t),e=_n(e,t,n),e!==null?e.sibling:null);Hn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ga(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return rf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),se(lt,lt.current),a)break;return null;case 22:return t.lanes=0,Qd(e,t,n,t.pendingProps);case 24:Bn(t,ut,e.memoizedState.cache)}return _n(e,t,n)}function sf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!mo(e,n)&&(t.flags&128)===0)return ft=!1,ig(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Pe&&(t.flags&1048576)!==0&&Mu(t,Tr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e=="function")bl(e)?(a=Sa(e,a),t.tag=1,t=ef(null,t,e,a,n)):(t.tag=0,t=lo(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===B){t.tag=11,t=$d(null,t,e,a,n);break e}else if(r===H){t.tag=14,t=Xd(null,t,e,a,n);break e}}throw t=v(e)||e,Error(u(306,t,""))}}return t;case 0:return lo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Sa(a,t.pendingProps),ef(e,t,a,r,n);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,kl(e,t),Lr(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Bn(t,ut,a),a!==i.cache&&Nl(t,[ut],n,!0),kr(),a=f.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=tf(e,t,a,n);break e}else if(a!==r){r=Xt(Error(u(424)),t),Nr(r),t=tf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(et=Jt(e.firstChild),bt=t,Pe=!0,Mn=null,Kt=!0,n=Qu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ha(),a===r){t=_n(e,t,n);break e}St(e,t,a,n)}t=t.child}return t;case 26:return Zi(e,t),e===null?(n=yh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Pe||(n=t.type,e=t.pendingProps,a=fs(Se.current).createElement(n),a[vt]=t,a[Nt]=e,Et(a,n,e),gt(a),t.stateNode=a):t.memoizedState=yh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nt(t),e===null&&Pe&&(a=t.stateNode=ph(t.type,t.pendingProps,Se.current),bt=t,Kt=!0,r=et,Wn(t.type)?(Xo=r,et=Jt(a.firstChild)):et=r),St(e,t,t.pendingProps.children,n),Zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((r=a=et)&&(a=Lg(a,t.type,t.pendingProps,Kt),a!==null?(t.stateNode=a,bt=t,et=Jt(a.firstChild),Kt=!1,r=!0):r=!1),r||Un(t)),nt(t),r=t.type,i=t.pendingProps,f=e!==null?e.memoizedProps:null,a=i.children,Ho(r,i)?a=null:f!==null&&Ho(r,f)&&(t.flags|=32),t.memoizedState!==null&&(r=Pl(e,t,Qm,null,null,n),ti._currentValue=r),Zi(e,t),St(e,t,a,n),t.child;case 6:return e===null&&Pe&&((e=n=et)&&(n=zg(n,t.pendingProps,Kt),n!==null?(t.stateNode=n,bt=t,et=null,e=!0):e=!1),e||Un(t)),null;case 13:return nf(e,t,n);case 4:return we(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ba(t,null,a,n):St(e,t,a,n),t.child;case 11:return $d(e,t,t.type,t.pendingProps,n);case 7:return St(e,t,t.pendingProps,n),t.child;case 8:return St(e,t,t.pendingProps.children,n),t.child;case 12:return St(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Bn(t,t.type,a.value),St(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ma(t),r=xt(r),a=a(r),t.flags|=1,St(e,t,a,n),t.child;case 14:return Xd(e,t,t.type,t.pendingProps,n);case 15:return Zd(e,t,t.type,t.pendingProps,n);case 19:return rf(e,t,n);case 31:return rg(e,t,n);case 22:return Qd(e,t,n,t.pendingProps);case 24:return ma(t),a=xt(ut),e===null?(r=Dl(),r===null&&(r=We,i=Cl(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},jl(t),Bn(t,ut,r)):((e.lanes&n)!==0&&(kl(e,t),Lr(t,null,null,n),kr()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Bn(t,ut,a)):(a=i.cache,Bn(t,ut,a),a!==r.cache&&Nl(t,[ut],n,!0))),St(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function wn(e){e.flags|=4}function go(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(jf())e.flags|=8192;else throw va=ki,Ol}else e.flags&=-16777217}function lf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Eh(t))if(jf())e.flags|=8192;else throw va=ki,Ol}function Ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bc():536870912,e.lanes|=t,nr|=t)}function Pr(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function sg(e,t,n){var a=t.pendingProps;switch(Al(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(ut),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wl())),tt(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(wn(t),i!==null?(tt(t),lf(t,i)):(tt(t),go(t,r,null,a,n))):i?i!==e.memoizedState?(wn(t),tt(t),lf(t,i)):(tt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&wn(t),tt(t),go(t,r,e,a,n)),null;case 27:if(Je(t),n=Se.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return tt(t),null}e=ie.current,Ha(t)?Bu(t):(e=ph(r,a,n),t.stateNode=e,wn(t))}return tt(t),null;case 5:if(Je(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return tt(t),null}if(i=ie.current,Ha(t))Bu(t);else{var f=fs(Se.current);switch(i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?f.createElement(r,{is:a.is}):f.createElement(r)}}i[vt]=t,i[Nt]=a;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=i;e:switch(Et(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&wn(t)}}return tt(t),go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=Se.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=bt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||ah(e.nodeValue,n)),e||Un(t,!0)}else e=fs(e).createTextNode(a),e[vt]=t,t.stateNode=e}return tt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ha(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[vt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),e=!1}else n=wl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(u(558))}return tt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ha(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[vt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),r=!1}else r=wl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ki(t,t.updateQueue),tt(t),null);case 4:return Ne(),e===null&&Uo(t.stateNode.containerInfo),tt(t),null;case 10:return Sn(t.type),tt(t),null;case 19:if(L(lt),a=t.memoizedState,a===null)return tt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Pr(a,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ui(e),i!==null){for(t.flags|=128,Pr(a,!1),e=i.updateQueue,t.updateQueue=e,Ki(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ku(n,e),n=n.sibling;return se(lt,lt.current&1|2),Pe&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xe()>ns&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ui(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ki(t,e),Pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Pe)return tt(t),null}else 2*xe()-a.renderingStartTime>ns&&n!==536870912&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xe(),e.sibling=null,n=lt.current,se(lt,r?n&1|2:n&1),Pe&&bn(t,a.treeForkCount),e):(tt(t),null);case 22:case 23:return Ut(t),Ul(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),n=t.updateQueue,n!==null&&Ki(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&L(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(ut),tt(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function lg(e,t){switch(Al(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(ut),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Je(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(u(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(lt),null;case 4:return Ne(),null;case 10:return Sn(t.type),null;case 22:case 23:return Ut(t),Ul(),e!==null&&L(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(ut),null;case 25:return null;default:return null}}function of(e,t){switch(Al(t),t.tag){case 3:Sn(ut),Ne();break;case 26:case 27:case 5:Je(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:L(lt);break;case 10:Sn(t.type);break;case 22:case 23:Ut(t),Ul(),e!==null&&L(ga);break;case 24:Sn(ut)}}function Vr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,f=n.inst;a=i(),f.destroy=a}n=n.next}while(n!==r)}}catch(T){$e(t,t.return,T)}}function Yn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var f=a.inst,T=f.destroy;if(T!==void 0){f.destroy=void 0,r=t;var M=n,K=T;try{K()}catch(le){$e(r,M,le)}}}a=a.next}while(a!==i)}}catch(le){$e(t,t.return,le)}}function cf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wu(t,n)}catch(a){$e(e,e.return,a)}}}function uf(e,t,n){n.props=Sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){$e(e,t,a)}}function Hr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){$e(e,t,r)}}function fn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){$e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function df(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){$e(e,e.return,r)}}function yo(e,t,n){try{var a=e.stateNode;Cg(a,e.type,n,t),a[Nt]=t}catch(r){$e(e,e.return,r)}}function ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Wn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}function Wi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Wn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}function hf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Et(t,a,n),t[vt]=e,t[Nt]=n}catch(i){$e(e,e.return,i)}}var Rn=!1,ht=!1,xo=!1,pf=typeof WeakSet=="function"?WeakSet:Set,yt=null;function og(e,t){if(e=e.containerInfo,Po=bs,e=wu(e),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var f=0,T=-1,M=-1,K=0,le=0,fe=e,J=null;t:for(;;){for(var ne;fe!==n||r!==0&&fe.nodeType!==3||(T=f+r),fe!==i||a!==0&&fe.nodeType!==3||(M=f+a),fe.nodeType===3&&(f+=fe.nodeValue.length),(ne=fe.firstChild)!==null;)J=fe,fe=ne;for(;;){if(fe===e)break t;if(J===n&&++K===r&&(T=f),J===i&&++le===a&&(M=f),(ne=fe.nextSibling)!==null)break;fe=J,J=fe.parentNode}fe=ne}n=T===-1||M===-1?null:{start:T,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vo={focusedElem:e,selectionRange:n},bs=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var Ee=Sa(n.type,r);e=a.getSnapshotBeforeUpdate(Ee,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){$e(n,n.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function mf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),a&4&&Vr(5,n);break;case 1:if(Nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){$e(n,n.return,f)}else{var r=Sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){$e(n,n.return,f)}}a&64&&cf(n),a&512&&Hr(n,n.return);break;case 3:if(Nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wu(e,t)}catch(f){$e(n,n.return,f)}}break;case 27:t===null&&a&4&&hf(n);case 26:case 5:Nn(e,n),t===null&&a&4&&df(n),a&512&&Hr(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),a&4&&vf(e,n);break;case 13:Nn(e,n),a&4&&bf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=yg.bind(null,n),Mg(e,n))));break;case 22:if(a=n.memoizedState!==null||Rn,!a){t=t!==null&&t.memoizedState!==null||ht,r=Rn;var i=ht;Rn=a,(ht=t)&&!i?Cn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Rn=r,ht=i}break;case 30:break;default:Nn(e,n)}}function gf(e){var t=e.alternate;t!==null&&(e.alternate=null,gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,It=!1;function Tn(e,t,n){for(n=n.child;n!==null;)yf(e,t,n),n=n.sibling}function yf(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:ht||fn(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ht||fn(n,t);var a=at,r=It;Wn(n.type)&&(at=n.stateNode,It=!1),Tn(e,t,n),Wr(n.stateNode),at=a,It=r;break;case 5:ht||fn(n,t);case 6:if(a=at,r=It,at=null,Tn(e,t,n),at=a,It=r,at!==null)if(It)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(i){$e(n,t,i)}else try{at.removeChild(n.stateNode)}catch(i){$e(n,t,i)}break;case 18:at!==null&&(It?(e=at,ch(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ur(e)):ch(at,n.stateNode));break;case 4:a=at,r=It,at=n.stateNode.containerInfo,It=!0,Tn(e,t,n),at=a,It=r;break;case 0:case 11:case 14:case 15:Yn(2,n,t),ht||Yn(4,n,t),Tn(e,t,n);break;case 1:ht||(fn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&uf(n,t,a)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:ht=(a=ht)||n.memoizedState!==null,Tn(e,t,n),ht=a;break;default:Tn(e,t,n)}}function vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ur(e)}catch(n){$e(t,t.return,n)}}}function bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ur(e)}catch(n){$e(t,t.return,n)}}function cg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pf),t;default:throw Error(u(435,e.tag))}}function Ji(e,t){var n=cg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=vg.bind(null,e,a);a.then(r,r)}})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,f=t,T=f;e:for(;T!==null;){switch(T.tag){case 27:if(Wn(T.type)){at=T.stateNode,It=!1;break e}break;case 5:at=T.stateNode,It=!1;break e;case 3:case 4:at=T.stateNode.containerInfo,It=!0;break e}T=T.return}if(at===null)throw Error(u(160));yf(i,f,r),at=null,It=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xf(t,e),t=t.sibling}var rn=null;function xf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Ot(e),a&4&&(Yn(3,e,e.return),Vr(3,e),Yn(5,e,e.return));break;case 1:Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),a&64&&Rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=rn;if(Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[gr]||i[vt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),Et(i,a,n),i[vt]=e,gt(i),a=i;break e;case"link":var f=xh("link","href",r).get(a+(n.href||""));if(f){for(var T=0;T<f.length;T++)if(i=f[T],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(T,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;case"meta":if(f=xh("meta","content",r).get(a+(n.content||""))){for(T=0;T<f.length;T++)if(i=f[T],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(T,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;default:throw Error(u(468,a))}i[vt]=e,gt(i),a=i}e.stateNode=a}else Sh(r,e.type,e.stateNode);else e.stateNode=bh(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Sh(r,e.type,e.stateNode):bh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&yo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),n!==null&&a&4&&yo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),e.flags&32){r=e.stateNode;try{ja(r,"")}catch(Ee){$e(e,e.return,Ee)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,yo(e,r,n!==null?n.memoizedProps:r)),a&1024&&(xo=!0);break;case 6:if(Dt(t,e),Ot(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Ee){$e(e,e.return,Ee)}}break;case 3:if(ms=null,r=rn,rn=hs(t.containerInfo),Dt(t,e),rn=r,Ot(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(Ee){$e(e,e.return,Ee)}xo&&(xo=!1,Sf(e));break;case 4:a=rn,rn=hs(e.stateNode.containerInfo),Dt(t,e),Ot(e),rn=a;break;case 12:Dt(t,e),Ot(e);break;case 31:Dt(t,e),Ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 13:Dt(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ts=xe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 22:r=e.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,K=Rn,le=ht;if(Rn=K||r,ht=le||M,Dt(t,e),ht=le,Rn=K,Ot(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||M||Rn||ht||Ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){M=n=t;try{if(i=M.stateNode,r)f=i.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{T=M.stateNode;var fe=M.memoizedProps.style,J=fe!=null&&fe.hasOwnProperty("display")?fe.display:null;T.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ee){$e(M,M.return,Ee)}}}else if(t.tag===6){if(n===null){M=t;try{M.stateNode.nodeValue=r?"":M.memoizedProps}catch(Ee){$e(M,M.return,Ee)}}}else if(t.tag===18){if(n===null){M=t;try{var ne=M.stateNode;r?uh(ne,!0):uh(M.stateNode,!1)}catch(Ee){$e(M,M.return,Ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ji(e,n))));break;case 19:Dt(t,e),Ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 30:break;case 21:break;default:Dt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(ff(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,i=vo(e);Wi(e,i,r);break;case 5:var f=n.stateNode;n.flags&32&&(ja(f,""),n.flags&=-33);var T=vo(e);Wi(e,T,f);break;case 3:case 4:var M=n.stateNode.containerInfo,K=vo(e);bo(e,K,M);break;default:throw Error(u(161))}}catch(le){$e(e,e.return,le)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mf(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Yn(4,t,t.return),Ea(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&uf(t,t.return,n),Ea(t);break;case 27:Wr(t.stateNode);case 26:case 5:fn(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,f=i.flags;switch(i.tag){case 0:case 11:case 15:Cn(r,i,n),Vr(4,i);break;case 1:if(Cn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(K){$e(a,a.return,K)}if(a=i,r=a.updateQueue,r!==null){var T=a.stateNode;try{var M=r.shared.hiddenCallbacks;if(M!==null)for(r.shared.hiddenCallbacks=null,r=0;r<M.length;r++)Ku(M[r],T)}catch(K){$e(a,a.return,K)}}n&&f&64&&cf(i),Hr(i,i.return);break;case 27:hf(i);case 26:case 5:Cn(r,i,n),n&&a===null&&f&4&&df(i),Hr(i,i.return);break;case 12:Cn(r,i,n);break;case 31:Cn(r,i,n),n&&f&4&&vf(r,i);break;case 13:Cn(r,i,n),n&&f&4&&bf(r,i);break;case 22:i.memoizedState===null&&Cn(r,i,n),Hr(i,i.return);break;case 30:break;default:Cn(r,i,n)}t=t.sibling}}function So(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cr(n))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e))}function sn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ef(e,t,n,a),t=t.sibling}function Ef(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,n,a),r&2048&&Vr(9,t);break;case 1:sn(e,t,n,a);break;case 3:sn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e)));break;case 12:if(r&2048){sn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,f=i.id,T=i.onPostCommit;typeof T=="function"&&T(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){$e(t,t.return,M)}}else sn(e,t,n,a);break;case 31:sn(e,t,n,a);break;case 13:sn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,f=t.alternate,t.memoizedState!==null?i._visibility&2?sn(e,t,n,a):Gr(e,t):i._visibility&2?sn(e,t,n,a):(i._visibility|=2,Ja(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&So(f,t);break;case 24:sn(e,t,n,a),r&2048&&Eo(t.alternate,t);break;default:sn(e,t,n,a)}}function Ja(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,f=t,T=n,M=a,K=f.flags;switch(f.tag){case 0:case 11:case 15:Ja(i,f,T,M,r),Vr(8,f);break;case 23:break;case 22:var le=f.stateNode;f.memoizedState!==null?le._visibility&2?Ja(i,f,T,M,r):Gr(i,f):(le._visibility|=2,Ja(i,f,T,M,r)),r&&K&2048&&So(f.alternate,f);break;case 24:Ja(i,f,T,M,r),r&&K&2048&&Eo(f.alternate,f);break;default:Ja(i,f,T,M,r)}t=t.sibling}}function Gr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Gr(n,a),r&2048&&So(a.alternate,a);break;case 24:Gr(n,a),r&2048&&Eo(a.alternate,a);break;default:Gr(n,a)}t=t.sibling}}var Yr=8192;function er(e,t,n){if(e.subtreeFlags&Yr)for(e=e.child;e!==null;)Af(e,t,n),e=e.sibling}function Af(e,t,n){switch(e.tag){case 26:er(e,t,n),e.flags&Yr&&e.memoizedState!==null&&Zg(n,rn,e.memoizedState,e.memoizedProps);break;case 5:er(e,t,n);break;case 3:case 4:var a=rn;rn=hs(e.stateNode.containerInfo),er(e,t,n),rn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Yr,Yr=16777216,er(e,t,n),Yr=a):er(e,t,n));break;default:er(e,t,n)}}function _f(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,Rf(a,e)}_f(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wf(e),e=e.sibling}function wf(e){switch(e.tag){case 0:case 11:case 15:qr(e),e.flags&2048&&Yn(9,e,e.return);break;case 3:qr(e);break;case 12:qr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,es(e)):qr(e);break;default:qr(e)}}function es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,Rf(a,e)}_f(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Yn(8,t,t.return),es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,es(t));break;default:es(t)}e=e.sibling}}function Rf(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:Yn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Cr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,yt=a;else e:for(n=e;yt!==null;){a=yt;var r=a.sibling,i=a.return;if(gf(a),a===n){yt=null;break e}if(r!==null){r.return=i,yt=r;break e}yt=i}}}var ug={getCacheForType:function(e){var t=xt(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xt(ut).controller.signal}},dg=typeof WeakMap=="function"?WeakMap:Map,Ge=0,We=null,Me=null,Be=0,qe=0,Bt=null,qn=!1,tr=!1,Ao=!1,In=0,st=0,$n=0,Aa=0,_o=0,Ft=0,nr=0,$r=null,jt=null,wo=!1,ts=0,Tf=0,ns=1/0,as=null,Xn=null,pt=0,Zn=null,ar=null,Dn=0,Ro=0,To=null,Nf=null,Xr=0,No=null;function Pt(){return(Ge&2)!==0&&Be!==0?Be&-Be:P.T!==null?ko():Hc()}function Cf(){if(Ft===0)if((Be&536870912)===0||Pe){var e=sa;sa<<=1,(sa&3932160)===0&&(sa=262144),Ft=e}else Ft=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Ft}function kt(e,t,n){(e===We&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Qn(e,Be,Ft,!1)),mr(e,n),((Ge&2)===0||e!==We)&&(e===We&&((Ge&2)===0&&(Aa|=n),st===4&&Qn(e,Be,Ft,!1)),hn(e))}function If(e,t,n){if((Ge&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||pr(e,t),r=a?pg(e,t):Io(e,t,!0),i=a;do{if(r===0){tr&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!fg(n)){r=Io(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var T=e;r=$r;var M=T.current.memoizedState.isDehydrated;if(M&&(rr(T,f).flags|=256),f=Io(T,f,!1),f!==2){if(Ao&&!M){T.errorRecoveryDisabledLanes|=i,Aa|=i,r=4;break e}i=jt,jt=r,i!==null&&(jt===null?jt=i:jt.push.apply(jt,i))}r=f}if(i=!1,r!==2)continue}}if(r===1){rr(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Qn(a,t,Ft,!qn);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=ts+300-xe(),10<r)){if(Qn(a,t,Ft,!qn),hi(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=lh(Df.bind(null,a,n,jt,as,wo,t,Ft,Aa,nr,qn,i,"Throttled",-0,0),r);break e}Df(a,n,jt,as,wo,t,Ft,Aa,nr,qn,i,null,-0,0)}}break}while(!0);hn(e)}function Df(e,t,n,a,r,i,f,T,M,K,le,fe,J,ne){if(e.timeoutHandle=-1,fe=t.subtreeFlags,fe&8192||(fe&16785408)===16785408){fe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Af(t,i,fe);var Ee=(i&62914560)===i?ts-xe():(i&4194048)===i?Tf-xe():0;if(Ee=Qg(fe,Ee),Ee!==null){Dn=i,e.cancelPendingCommit=Ee(Bf.bind(null,e,t,i,n,a,r,f,T,M,le,fe,null,J,ne)),Qn(e,i,f,!K);return}}Bf(e,t,i,n,a,r,f,T,M)}function fg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!Lt(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t&=~_o,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-rt(r),f=1<<i;a[i]=-1,r&=~f}n!==0&&Fc(e,n,t)}function rs(){return(Ge&6)===0?(Zr(0),!1):!0}function Co(){if(Me!==null){if(qe===0)var e=Me.return;else e=Me,xn=pa=null,Gl(e),Xa=null,Dr=0,e=Me;for(;e!==null;)of(e.alternate,e),e=e.return;Me=null}}function rr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Og(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,Co(),We=e,Me=n=vn(e.current,null),Be=t,qe=0,Bt=null,qn=!1,tr=pr(e,t),Ao=!1,nr=Ft=_o=Aa=$n=st=0,jt=$r=null,wo=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-rt(a),i=1<<r;t|=e[r],a&=~i}return In=t,wi(),n}function Of(e,t){je=null,P.H=Br,t===$a||t===ji?(t=$u(),qe=3):t===Ol?(t=$u(),qe=4):qe=t===so?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Me===null&&(st=1,$i(e,Xt(t,e.current)))}function jf(){var e=Mt.current;return e===null?!0:(Be&4194048)===Be?Wt===null:(Be&62914560)===Be||(Be&536870912)!==0?e===Wt:!1}function kf(){var e=P.H;return P.H=Br,e===null?Br:e}function Lf(){var e=P.A;return P.A=ug,e}function is(){st=4,qn||(Be&4194048)!==Be&&Mt.current!==null||(tr=!0),($n&134217727)===0&&(Aa&134217727)===0||We===null||Qn(We,Be,Ft,!1)}function Io(e,t,n){var a=Ge;Ge|=2;var r=kf(),i=Lf();(We!==e||Be!==t)&&(as=null,rr(e,t)),t=!1;var f=st;e:do try{if(qe!==0&&Me!==null){var T=Me,M=Bt;switch(qe){case 8:Co(),f=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var K=qe;if(qe=0,Bt=null,ir(e,T,M,K),n&&tr){f=0;break e}break;default:K=qe,qe=0,Bt=null,ir(e,T,M,K)}}hg(),f=st;break}catch(le){Of(e,le)}while(!0);return t&&e.shellSuspendCounter++,xn=pa=null,Ge=a,P.H=r,P.A=i,Me===null&&(We=null,Be=0,wi()),f}function hg(){for(;Me!==null;)zf(Me)}function pg(e,t){var n=Ge;Ge|=2;var a=kf(),r=Lf();We!==e||Be!==t?(as=null,ns=xe()+500,rr(e,t)):tr=pr(e,t);e:do try{if(qe!==0&&Me!==null){t=Me;var i=Bt;t:switch(qe){case 1:qe=0,Bt=null,ir(e,t,i,1);break;case 2:case 9:if(Yu(i)){qe=0,Bt=null,Mf(t);break}t=function(){qe!==2&&qe!==9||We!==e||(qe=7),hn(e)},i.then(t,t);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:Yu(i)?(qe=0,Bt=null,Mf(t)):(qe=0,Bt=null,ir(e,t,i,7));break;case 5:var f=null;switch(Me.tag){case 26:f=Me.memoizedState;case 5:case 27:var T=Me;if(f?Eh(f):T.stateNode.complete){qe=0,Bt=null;var M=T.sibling;if(M!==null)Me=M;else{var K=T.return;K!==null?(Me=K,ss(K)):Me=null}break t}}qe=0,Bt=null,ir(e,t,i,5);break;case 6:qe=0,Bt=null,ir(e,t,i,6);break;case 8:Co(),st=6;break e;default:throw Error(u(462))}}mg();break}catch(le){Of(e,le)}while(!0);return xn=pa=null,P.H=a,P.A=r,Ge=n,Me!==null?0:(We=null,Be=0,wi(),st)}function mg(){for(;Me!==null&&!W();)zf(Me)}function zf(e){var t=sf(e.alternate,e,In);e.memoizedProps=e.pendingProps,t===null?ss(e):Me=t}function Mf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jd(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Jd(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:Gl(t);default:of(n,t),t=Me=ku(t,In),t=sf(n,t,In)}e.memoizedProps=e.pendingProps,t===null?ss(e):Me=t}function ir(e,t,n,a){xn=pa=null,Gl(t),Xa=null,Dr=0;var r=t.return;try{if(ag(e,r,t,n,Be)){st=1,$i(e,Xt(n,e.current)),Me=null;return}}catch(i){if(r!==null)throw Me=r,i;st=1,$i(e,Xt(n,e.current)),Me=null;return}t.flags&32768?(Pe||a===1?e=!0:tr||(Be&536870912)!==0?e=!1:(qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Uf(t,e)):ss(t)}function ss(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,qn);return}e=t.return;var n=sg(t.alternate,t,In);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);st===0&&(st=5)}function Uf(e,t){do{var n=lg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);st=6,Me=null}function Bf(e,t,n,a,r,i,f,T,M){e.cancelPendingCommit=null;do ls();while(pt!==0);if((Ge&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=yl,Xp(e,n,i,f,T,M),e===We&&(Me=We=null,Be=0),ar=t,Zn=e,Dn=n,Ro=i,To=r,Nf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bg(Le,function(){return Gf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=P.T,P.T=null,r=V.p,V.p=2,f=Ge,Ge|=4;try{og(e,t,n)}finally{Ge=f,V.p=r,P.T=a}}pt=1,Ff(),Pf(),Vf()}}function Ff(){if(pt===1){pt=0;var e=Zn,t=ar,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=P.T,P.T=null;var a=V.p;V.p=2;var r=Ge;Ge|=4;try{xf(t,e);var i=Vo,f=wu(e.containerInfo),T=i.focusedElem,M=i.selectionRange;if(f!==T&&T&&T.ownerDocument&&_u(T.ownerDocument.documentElement,T)){if(M!==null&&fl(T)){var K=M.start,le=M.end;if(le===void 0&&(le=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(le,T.value.length);else{var fe=T.ownerDocument||document,J=fe&&fe.defaultView||window;if(J.getSelection){var ne=J.getSelection(),Ee=T.textContent.length,Ce=Math.min(M.start,Ee),Qe=M.end===void 0?Ce:Math.min(M.end,Ee);!ne.extend&&Ce>Qe&&(f=Qe,Qe=Ce,Ce=f);var q=Au(T,Ce),F=Au(T,Qe);if(q&&F&&(ne.rangeCount!==1||ne.anchorNode!==q.node||ne.anchorOffset!==q.offset||ne.focusNode!==F.node||ne.focusOffset!==F.offset)){var Q=fe.createRange();Q.setStart(q.node,q.offset),ne.removeAllRanges(),Ce>Qe?(ne.addRange(Q),ne.extend(F.node,F.offset)):(Q.setEnd(F.node,F.offset),ne.addRange(Q))}}}}for(fe=[],ne=T;ne=ne.parentNode;)ne.nodeType===1&&fe.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<fe.length;T++){var ce=fe[T];ce.element.scrollLeft=ce.left,ce.element.scrollTop=ce.top}}bs=!!Po,Vo=Po=null}finally{Ge=r,V.p=a,P.T=n}}e.current=t,pt=2}}function Pf(){if(pt===2){pt=0;var e=Zn,t=ar,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=P.T,P.T=null;var a=V.p;V.p=2;var r=Ge;Ge|=4;try{mf(e,t.alternate,t)}finally{Ge=r,V.p=a,P.T=n}}pt=3}}function Vf(){if(pt===4||pt===3){pt=0,ye();var e=Zn,t=ar,n=Dn,a=Nf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,ar=Zn=null,Hf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Xn=null),$s(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=P.T,r=V.p,V.p=2,P.T=null;try{for(var i=e.onRecoverableError,f=0;f<a.length;f++){var T=a[f];i(T.value,{componentStack:T.stack})}}finally{P.T=t,V.p=r}}(Dn&3)!==0&&ls(),hn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===No?Xr++:(Xr=0,No=e):Xr=0,Zr(0)}}function Hf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cr(t)))}function ls(){return Ff(),Pf(),Vf(),Gf()}function Gf(){if(pt!==5)return!1;var e=Zn,t=Ro;Ro=0;var n=$s(Dn),a=P.T,r=V.p;try{V.p=32>n?32:n,P.T=null,n=To,To=null;var i=Zn,f=Dn;if(pt=0,ar=Zn=null,Dn=0,(Ge&6)!==0)throw Error(u(331));var T=Ge;if(Ge|=4,wf(i.current),Ef(i,i.current,f,n),Ge=T,Zr(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ke,i)}catch{}return!0}finally{V.p=r,P.T=a,Hf(e,t)}}function Yf(e,t,n){t=Xt(n,t),t=io(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(mr(e,2),hn(e))}function $e(e,t,n){if(e.tag===3)Yf(e,e,n);else for(;t!==null;){if(t.tag===3){Yf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Xt(n,e),n=Yd(2),a=Vn(t,n,2),a!==null&&(qd(n,a,t,e),mr(a,2),hn(a));break}}t=t.return}}function Do(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new dg;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Ao=!0,r.add(n),e=gg.bind(null,e,t,n),t.then(e,e))}function gg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,We===e&&(Be&n)===n&&(st===4||st===3&&(Be&62914560)===Be&&300>xe()-ts?(Ge&2)===0&&rr(e,0):_o|=n,nr===Be&&(nr=0)),hn(e)}function qf(e,t){t===0&&(t=Bc()),e=da(e,t),e!==null&&(mr(e,t),hn(e))}function yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function vg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),qf(e,n)}function bg(e,t){return he(e,t)}var os=null,sr=null,Oo=!1,cs=!1,jo=!1,Kn=0;function hn(e){e!==sr&&e.next===null&&(sr===null?os=sr=e:sr=sr.next=e),cs=!0,Oo||(Oo=!0,Sg())}function Zr(e,t){if(!jo&&cs){jo=!0;do for(var n=!1,a=os;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var f=a.suspendedLanes,T=a.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=r&~(f&~T),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Qf(a,i))}else i=Be,i=hi(a,a===We?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||pr(a,i)||(n=!0,Qf(a,i));a=a.next}while(n);jo=!1}}function xg(){$f()}function $f(){cs=Oo=!1;var e=0;Kn!==0&&Dg()&&(e=Kn);for(var t=xe(),n=null,a=os;a!==null;){var r=a.next,i=Xf(a,t);i===0?(a.next=null,n===null?os=r:n.next=r,r===null&&(sr=n)):(n=a,(e!==0||(i&3)!==0)&&(cs=!0)),a=r}pt!==0&&pt!==5||Zr(e),Kn!==0&&(Kn=0)}function Xf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var f=31-rt(i),T=1<<f,M=r[f];M===-1?((T&n)===0||(T&a)!==0)&&(r[f]=$p(T,t)):M<=t&&(e.expiredLanes|=T),i&=~T}if(t=We,n=Be,n=hi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&pe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&pe(a),$s(n)){case 2:case 8:n=Ye;break;case 32:n=Le;break;case 268435456:n=jn;break;default:n=Le}return a=Zf.bind(null,e),n=he(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&pe(a),e.callbackPriority=2,e.callbackNode=null,2}function Zf(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ls()&&e.callbackNode!==n)return null;var a=Be;return a=hi(e,e===We?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(If(e,a,t),Xf(e,xe()),e.callbackNode!=null&&e.callbackNode===n?Zf.bind(null,e):null)}function Qf(e,t){if(ls())return null;If(e,t,!0)}function Sg(){jg(function(){(Ge&6)!==0?he(Re,xg):$f()})}function ko(){if(Kn===0){var e=Ya;e===0&&(e=Ra,Ra<<=1,(Ra&261888)===0&&(Ra=256)),Kn=e}return Kn}function Kf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function Wf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Eg(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=Kf((r[Nt]||null).action),f=a.submitter;f&&(t=(t=f[Nt]||null)?Kf(t.formAction):f.getAttribute("formAction"),t!==null&&(i=t,f=null));var T=new Si("action","action",null,a,r);e.push({event:T,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kn!==0){var M=f?Wf(r,f):new FormData(r);Jl(n,{pending:!0,data:M,method:r.method,action:i},null,M)}}else typeof i=="function"&&(T.preventDefault(),M=f?Wf(r,f):new FormData(r),Jl(n,{pending:!0,data:M,method:r.method,action:i},i,M))},currentTarget:r}]})}}for(var Lo=0;Lo<gl.length;Lo++){var zo=gl[Lo],Ag=zo.toLowerCase(),_g=zo[0].toUpperCase()+zo.slice(1);an(Ag,"on"+_g)}an(Nu,"onAnimationEnd"),an(Cu,"onAnimationIteration"),an(Iu,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(Fm,"onTransitionRun"),an(Pm,"onTransitionStart"),an(Vm,"onTransitionCancel"),an(Du,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),la("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),la("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),la("onBeforeInput",["compositionend","keypress","textInput","paste"]),la("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function Jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var f=a.length-1;0<=f;f--){var T=a[f],M=T.instance,K=T.currentTarget;if(T=T.listener,M!==i&&r.isPropagationStopped())break e;i=T,r.currentTarget=K;try{i(r)}catch(le){_i(le)}r.currentTarget=null,i=M}else for(f=0;f<a.length;f++){if(T=a[f],M=T.instance,K=T.currentTarget,T=T.listener,M!==i&&r.isPropagationStopped())break e;i=T,r.currentTarget=K;try{i(r)}catch(le){_i(le)}r.currentTarget=null,i=M}}}}function Ue(e,t){var n=t[Xs];n===void 0&&(n=t[Xs]=new Set);var a=e+"__bubble";n.has(a)||(eh(t,e,2,!1),n.add(a))}function Mo(e,t,n){var a=0;t&&(a|=4),eh(n,e,a,t)}var us="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[us]){e[us]=!0,qc.forEach(function(n){n!=="selectionchange"&&(wg.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[us]||(t[us]=!0,Mo("selectionchange",!1,t))}}function eh(e,t,n,a){switch(Ch(t)){case 2:var r=Jg;break;case 8:r=e0;break;default:r=Jo}n=r.bind(null,t,n,e),r=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Bo(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var T=a.stateNode.containerInfo;if(T===r)break;if(f===4)for(f=a.return;f!==null;){var M=f.tag;if((M===3||M===4)&&f.stateNode.containerInfo===r)return;f=f.return}for(;T!==null;){if(f=Na(T),f===null)return;if(M=f.tag,M===5||M===6||M===26||M===27){a=i=f;continue e}T=T.parentNode}}a=a.return}ru(function(){var K=i,le=tl(n),fe=[];e:{var J=Ou.get(e);if(J!==void 0){var ne=Si,Ee=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":ne=vm;break;case"focusin":Ee="focus",ne=ll;break;case"focusout":Ee="blur",ne=ll;break;case"beforeblur":case"afterblur":ne=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Sm;break;case Nu:case Cu:case Iu:ne=cm;break;case Du:ne=Am;break;case"scroll":case"scrollend":ne=rm;break;case"wheel":ne=wm;break;case"copy":case"cut":case"paste":ne=dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=cu;break;case"toggle":case"beforetoggle":ne=Tm}var Ce=(t&4)!==0,Qe=!Ce&&(e==="scroll"||e==="scrollend"),q=Ce?J!==null?J+"Capture":null:J;Ce=[];for(var F=K,Q;F!==null;){var ce=F;if(Q=ce.stateNode,ce=ce.tag,ce!==5&&ce!==26&&ce!==27||Q===null||q===null||(ce=vr(F,q),ce!=null&&Ce.push(Kr(F,ce,Q))),Qe)break;F=F.return}0<Ce.length&&(J=new ne(J,Ee,null,n,le),fe.push({event:J,listeners:Ce}))}}if((t&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",J&&n!==el&&(Ee=n.relatedTarget||n.fromElement)&&(Na(Ee)||Ee[Ta]))break e;if((ne||J)&&(J=le.window===le?le:(J=le.ownerDocument)?J.defaultView||J.parentWindow:window,ne?(Ee=n.relatedTarget||n.toElement,ne=K,Ee=Ee?Na(Ee):null,Ee!==null&&(Qe=d(Ee),Ce=Ee.tag,Ee!==Qe||Ce!==5&&Ce!==27&&Ce!==6)&&(Ee=null)):(ne=null,Ee=K),ne!==Ee)){if(Ce=lu,ce="onMouseLeave",q="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=cu,ce="onPointerLeave",q="onPointerEnter",F="pointer"),Qe=ne==null?J:yr(ne),Q=Ee==null?J:yr(Ee),J=new Ce(ce,F+"leave",ne,n,le),J.target=Qe,J.relatedTarget=Q,ce=null,Na(le)===K&&(Ce=new Ce(q,F+"enter",Ee,n,le),Ce.target=Q,Ce.relatedTarget=Qe,ce=Ce),Qe=ce,ne&&Ee)t:{for(Ce=Rg,q=ne,F=Ee,Q=0,ce=q;ce;ce=Ce(ce))Q++;ce=0;for(var Te=F;Te;Te=Ce(Te))ce++;for(;0<Q-ce;)q=Ce(q),Q--;for(;0<ce-Q;)F=Ce(F),ce--;for(;Q--;){if(q===F||F!==null&&q===F.alternate){Ce=q;break t}q=Ce(q),F=Ce(F)}Ce=null}else Ce=null;ne!==null&&th(fe,J,ne,Ce,!1),Ee!==null&&Qe!==null&&th(fe,Qe,Ee,Ce,!0)}}e:{if(J=K?yr(K):window,ne=J.nodeName&&J.nodeName.toLowerCase(),ne==="select"||ne==="input"&&J.type==="file")var Ve=yu;else if(mu(J))if(vu)Ve=Mm;else{Ve=Lm;var Ae=km}else ne=J.nodeName,!ne||ne.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?K&&Js(K.elementType)&&(Ve=yu):Ve=zm;if(Ve&&(Ve=Ve(e,K))){gu(fe,Ve,n,le);break e}Ae&&Ae(e,J,K),e==="focusout"&&K&&J.type==="number"&&K.memoizedProps.value!=null&&Ws(J,"number",J.value)}switch(Ae=K?yr(K):window,e){case"focusin":(mu(Ae)||Ae.contentEditable==="true")&&(Ma=Ae,hl=K,Rr=null);break;case"focusout":Rr=hl=Ma=null;break;case"mousedown":pl=!0;break;case"contextmenu":case"mouseup":case"dragend":pl=!1,Ru(fe,n,le);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":Ru(fe,n,le)}var ke;if(cl)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else za?hu(e,n)&&(Fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Fe="onCompositionStart");Fe&&(uu&&n.locale!=="ko"&&(za||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&za&&(ke=iu()):(Ln=le,rl="value"in Ln?Ln.value:Ln.textContent,za=!0)),Ae=ds(K,Fe),0<Ae.length&&(Fe=new ou(Fe,e,null,n,le),fe.push({event:Fe,listeners:Ae}),ke?Fe.data=ke:(ke=pu(n),ke!==null&&(Fe.data=ke)))),(ke=Cm?Im(e,n):Dm(e,n))&&(Fe=ds(K,"onBeforeInput"),0<Fe.length&&(Ae=new ou("onBeforeInput","beforeinput",null,n,le),fe.push({event:Ae,listeners:Fe}),Ae.data=ke)),Eg(fe,e,K,n,le)}Jf(fe,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ds(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=vr(e,n),r!=null&&a.unshift(Kr(e,r,i)),r=vr(e,t),r!=null&&a.push(Kr(e,r,i))),e.tag===3)return a;e=e.return}return[]}function Rg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function th(e,t,n,a,r){for(var i=t._reactName,f=[];n!==null&&n!==a;){var T=n,M=T.alternate,K=T.stateNode;if(T=T.tag,M!==null&&M===a)break;T!==5&&T!==26&&T!==27||K===null||(M=K,r?(K=vr(n,i),K!=null&&f.unshift(Kr(n,K,M))):r||(K=vr(n,i),K!=null&&f.push(Kr(n,K,M)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Tg=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function nh(e){return(typeof e=="string"?e:""+e).replace(Tg,`
`).replace(Ng,"")}function ah(e,t){return t=nh(t),nh(e)===t}function Ze(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ja(e,""+a);break;case"className":mi(e,"class",a);break;case"tabIndex":mi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(e,n,a);break;case"style":nu(e,a,i);break;case"data":if(t!=="object"){mi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=yi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",r.name,r,null),Ze(e,t,"formEncType",r.formEncType,r,null),Ze(e,t,"formMethod",r.formMethod,r,null),Ze(e,t,"formTarget",r.formTarget,r,null)):(Ze(e,t,"encType",r.encType,r,null),Ze(e,t,"method",r.method,r,null),Ze(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=yi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=yi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),pi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":pi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=nm.get(n)||n,pi(e,n,a))}}function Fo(e,t,n,a,r,i){switch(n){case"style":nu(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ja(e,a):(typeof a=="number"||typeof a=="bigint")&&ja(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$c.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[Nt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):pi(e,n,a)}}}function Et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ze(e,t,i,f,n,null)}}r&&Ze(e,t,"srcSet",n.srcSet,n,null),a&&Ze(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var T=i=f=r=null,M=null,K=null;for(a in n)if(n.hasOwnProperty(a)){var le=n[a];if(le!=null)switch(a){case"name":r=le;break;case"type":f=le;break;case"checked":M=le;break;case"defaultChecked":K=le;break;case"value":i=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(u(137,t));break;default:Ze(e,t,a,le,n,null)}}Wc(e,i,T,M,K,f,r,!1);return;case"select":Ue("invalid",e),a=f=i=null;for(r in n)if(n.hasOwnProperty(r)&&(T=n[r],T!=null))switch(r){case"value":i=T;break;case"defaultValue":f=T;break;case"multiple":a=T;default:Ze(e,t,r,T,n,null)}t=i,n=f,e.multiple=!!a,t!=null?Oa(e,!!a,t,!1):n!=null&&Oa(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=r=a=null;for(f in n)if(n.hasOwnProperty(f)&&(T=n[f],T!=null))switch(f){case"value":a=T;break;case"defaultValue":r=T;break;case"children":i=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(91));break;default:Ze(e,t,f,T,n,null)}eu(e,a,r,i);return;case"option":for(M in n)if(n.hasOwnProperty(M)&&(a=n[M],a!=null))switch(M){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ze(e,t,M,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Qr.length;a++)Ue(Qr[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in n)if(n.hasOwnProperty(K)&&(a=n[K],a!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ze(e,t,K,a,n,null)}return;default:if(Js(t)){for(le in n)n.hasOwnProperty(le)&&(a=n[le],a!==void 0&&Fo(e,t,le,a,n,void 0));return}}for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!=null&&Ze(e,t,T,a,n,null))}function Cg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,f=null,T=null,M=null,K=null,le=null;for(ne in n){var fe=n[ne];if(n.hasOwnProperty(ne)&&fe!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":M=fe;default:a.hasOwnProperty(ne)||Ze(e,t,ne,null,a,fe)}}for(var J in a){var ne=a[J];if(fe=n[J],a.hasOwnProperty(J)&&(ne!=null||fe!=null))switch(J){case"type":i=ne;break;case"name":r=ne;break;case"checked":K=ne;break;case"defaultChecked":le=ne;break;case"value":f=ne;break;case"defaultValue":T=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(u(137,t));break;default:ne!==fe&&Ze(e,t,J,ne,a,fe)}}Ks(e,f,T,M,K,le,i,r);return;case"select":ne=f=T=J=null;for(i in n)if(M=n[i],n.hasOwnProperty(i)&&M!=null)switch(i){case"value":break;case"multiple":ne=M;default:a.hasOwnProperty(i)||Ze(e,t,i,null,a,M)}for(r in a)if(i=a[r],M=n[r],a.hasOwnProperty(r)&&(i!=null||M!=null))switch(r){case"value":J=i;break;case"defaultValue":T=i;break;case"multiple":f=i;default:i!==M&&Ze(e,t,r,i,a,M)}t=T,n=f,a=ne,J!=null?Oa(e,!!n,J,!1):!!a!=!!n&&(t!=null?Oa(e,!!n,t,!0):Oa(e,!!n,n?[]:"",!1));return;case"textarea":ne=J=null;for(T in n)if(r=n[T],n.hasOwnProperty(T)&&r!=null&&!a.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ze(e,t,T,null,a,r)}for(f in a)if(r=a[f],i=n[f],a.hasOwnProperty(f)&&(r!=null||i!=null))switch(f){case"value":J=r;break;case"defaultValue":ne=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==i&&Ze(e,t,f,r,a,i)}Jc(e,J,ne);return;case"option":for(var Ee in n)if(J=n[Ee],n.hasOwnProperty(Ee)&&J!=null&&!a.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:Ze(e,t,Ee,null,a,J)}for(M in a)if(J=a[M],ne=n[M],a.hasOwnProperty(M)&&J!==ne&&(J!=null||ne!=null))switch(M){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Ze(e,t,M,J,a,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in n)J=n[Ce],n.hasOwnProperty(Ce)&&J!=null&&!a.hasOwnProperty(Ce)&&Ze(e,t,Ce,null,a,J);for(K in a)if(J=a[K],ne=n[K],a.hasOwnProperty(K)&&J!==ne&&(J!=null||ne!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(u(137,t));break;default:Ze(e,t,K,J,a,ne)}return;default:if(Js(t)){for(var Qe in n)J=n[Qe],n.hasOwnProperty(Qe)&&J!==void 0&&!a.hasOwnProperty(Qe)&&Fo(e,t,Qe,void 0,a,J);for(le in a)J=a[le],ne=n[le],!a.hasOwnProperty(le)||J===ne||J===void 0&&ne===void 0||Fo(e,t,le,J,a,ne);return}}for(var q in n)J=n[q],n.hasOwnProperty(q)&&J!=null&&!a.hasOwnProperty(q)&&Ze(e,t,q,null,a,J);for(fe in a)J=a[fe],ne=n[fe],!a.hasOwnProperty(fe)||J===ne||J==null&&ne==null||Ze(e,t,fe,J,a,ne)}function rh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ig(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,f=r.initiatorType,T=r.duration;if(i&&T&&rh(f)){for(f=0,T=r.responseEnd,a+=1;a<n.length;a++){var M=n[a],K=M.startTime;if(K>T)break;var le=M.transferSize,fe=M.initiatorType;le&&rh(fe)&&(M=M.responseEnd,f+=le*(M<T?1:(T-K)/(M-K)))}if(--a,t+=8*(i+f)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Po=null,Vo=null;function fs(e){return e.nodeType===9?e:e.ownerDocument}function ih(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Go=null;function Dg(){var e=window.event;return e&&e.type==="popstate"?e===Go?!1:(Go=e,!0):(Go=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,Og=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(e){return oh.resolve(null).then(e).catch(kg)}:lh;function kg(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function ch(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),ur(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Wr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Wr(n);for(var i=n.firstChild;i;){var f=i.nextSibling,T=i.nodeName;i[gr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=f}}else n==="body"&&Wr(e.ownerDocument.body);n=r}while(n);ur(t)}function uh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Yo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yo(n),Zs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Lg(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[gr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Jt(e.nextSibling),e===null)break}return null}function zg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jt(e.nextSibling),e===null))return null;return e}function dh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jt(e.nextSibling),e===null))return null;return e}function qo(e){return e.data==="$?"||e.data==="$~"}function $o(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xo=null;function fh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Jt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ph(e,t,n){switch(t=fs(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Wr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zs(e)}var en=new Map,mh=new Set;function hs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=V.d;V.d={f:Ug,r:Bg,D:Fg,C:Pg,L:Vg,m:Hg,X:Yg,S:Gg,M:qg};function Ug(){var e=On.f(),t=rs();return e||t}function Bg(e){var t=Ca(e);t!==null&&t.tag===5&&t.type==="form"?Dd(t):On.r(e)}var lr=typeof document>"u"?null:document;function gh(e,t,n){var a=lr;if(a&&typeof t=="string"&&t){var r=qt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),mh.has(r)||(mh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function Fg(e){On.D(e),gh("dns-prefetch",e,null)}function Pg(e,t){On.C(e,t),gh("preconnect",e,t)}function Vg(e,t,n){On.L(e,t,n);var a=lr;if(a&&e&&t){var r='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+qt(n.imageSizes)+'"]')):r+='[href="'+qt(e)+'"]';var i=r;switch(t){case"style":i=or(e);break;case"script":i=cr(e)}en.has(i)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Jr(i))||t==="script"&&a.querySelector(ei(i))||(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function Hg(e,t){On.m(e,t);var n=lr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+qt(a)+'"][href="'+qt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=cr(e)}if(!en.has(i)&&(e=E({rel:"modulepreload",href:e},t),en.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ei(i)))return}a=n.createElement("link"),Et(a,"link",e),gt(a),n.head.appendChild(a)}}}function Gg(e,t,n){On.S(e,t,n);var a=lr;if(a&&e){var r=Ia(a).hoistableStyles,i=or(e);t=t||"default";var f=r.get(i);if(!f){var T={loading:0,preload:null};if(f=a.querySelector(Jr(i)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(i))&&Zo(e,n);var M=f=a.createElement("link");gt(M),Et(M,"link",e),M._p=new Promise(function(K,le){M.onload=K,M.onerror=le}),M.addEventListener("load",function(){T.loading|=1}),M.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ps(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:T},r.set(i,f)}}}function Yg(e,t){On.X(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ei(r)),i||(e=E({src:e,async:!0},t),(t=en.get(r))&&Qo(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function qg(e,t){On.M(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ei(r)),i||(e=E({src:e,async:!0,type:"module"},t),(t=en.get(r))&&Qo(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function yh(e,t,n,a){var r=(r=Se.current)?hs(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=or(n.href),n=Ia(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=or(n.href);var i=Ia(r).hoistableStyles,f=i.get(e);if(f||(r=r.ownerDocument||r,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,f),(i=r.querySelector(Jr(e)))&&!i._p&&(f.instance=i,f.state.loading=5),en.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,n),i||$g(r,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cr(n),n=Ia(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function or(e){return'href="'+qt(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function vh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function $g(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Et(t,"link",n),gt(t),e.head.appendChild(t))}function cr(e){return'[src="'+qt(e)+'"]'}function ei(e){return"script[async]"+e}function bh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+qt(n.href)+'"]');if(a)return t.instance=a,gt(a),a;var r=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),gt(a),Et(a,"style",r),ps(a,n.precedence,e),t.instance=a;case"stylesheet":r=or(n.href);var i=e.querySelector(Jr(r));if(i)return t.state.loading|=4,t.instance=i,gt(i),i;a=vh(n),(r=en.get(r))&&Zo(a,r),i=(e.ownerDocument||e).createElement("link"),gt(i);var f=i;return f._p=new Promise(function(T,M){f.onload=T,f.onerror=M}),Et(i,"link",a),t.state.loading|=4,ps(i,n.precedence,e),t.instance=i;case"script":return i=cr(n.src),(r=e.querySelector(ei(i)))?(t.instance=r,gt(r),r):(a=n,(r=en.get(i))&&(a=E({},n),Qo(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),gt(r),Et(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ps(a,n.precedence,e));return t.instance}function ps(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,f=0;f<a.length;f++){var T=a[f];if(T.dataset.precedence===t)i=T;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Zo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Qo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ms=null;function xh(e,t,n){if(ms===null){var a=new Map,r=ms=new Map;r.set(n,a)}else r=ms,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[gr]||i[vt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var f=i.getAttribute(t)||"";f=e+f;var T=a.get(f);T?T.push(i):a.set(f,[i])}}return a}function Sh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Eh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=or(a.href),i=t.querySelector(Jr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=gs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,gt(i);return}i=t.ownerDocument||t,a=vh(a),(r=en.get(r))&&Zo(a,r),i=i.createElement("link"),gt(i);var f=i;f._p=new Promise(function(T,M){f.onload=T,f.onerror=M}),Et(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=gs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ko=0;function Qg(e,t){return e.stylesheets&&e.count===0&&vs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&vs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ko===0&&(Ko=62500*Ig());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ko?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function gs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ys=null;function vs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ys=new Map,t.forEach(Kg,e),ys=null,gs.call(e))}function Kg(e,t){if(!(t.state.loading&4)){var n=ys.get(e);if(n)var a=n.get(null);else{n=new Map,ys.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var f=r[i];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}r=t.instance,f=r.getAttribute("data-precedence"),i=n.get(f)||a,i===a&&n.set(null,r),n.set(f,r),this.count++,a=gs.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ti={$$typeof:D,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function Wg(e,t,n,a,r,i,f,T,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.hiddenUpdates=Ys(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Ah(e,t,n,a,r,i,f,T,M,K,le,fe){return e=new Wg(e,t,n,f,M,K,le,fe,T),t=1,i===!0&&(t|=24),i=zt(3,null,null,t),e.current=i,i.stateNode=e,t=Cl(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},jl(i),e}function _h(e){return e?(e=Fa,e):Fa}function wh(e,t,n,a,r,i){r=_h(r),a.context===null?a.context=r:a.pendingContext=r,a=Pn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Vn(e,a,t),n!==null&&(kt(n,e,t),jr(n,e,t))}function Rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wo(e,t){Rh(e,t),(e=e.alternate)&&Rh(e,t)}function Th(e){if(e.tag===13||e.tag===31){var t=da(e,67108864);t!==null&&kt(t,e,67108864),Wo(e,67108864)}}function Nh(e){if(e.tag===13||e.tag===31){var t=Pt();t=qs(t);var n=da(e,t);n!==null&&kt(n,e,t),Wo(e,t)}}var bs=!0;function Jg(e,t,n,a){var r=P.T;P.T=null;var i=V.p;try{V.p=2,Jo(e,t,n,a)}finally{V.p=i,P.T=r}}function e0(e,t,n,a){var r=P.T;P.T=null;var i=V.p;try{V.p=8,Jo(e,t,n,a)}finally{V.p=i,P.T=r}}function Jo(e,t,n,a){if(bs){var r=ec(a);if(r===null)Bo(e,t,a,xs,n),Ih(e,a);else if(n0(r,e,t,n,a))a.stopPropagation();else if(Ih(e,a),t&4&&-1<t0.indexOf(e)){for(;r!==null;){var i=Ca(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var f=Gt(i.pendingLanes);if(f!==0){var T=i;for(T.pendingLanes|=2,T.entangledLanes|=2;f;){var M=1<<31-rt(f);T.entanglements[1]|=M,f&=~M}hn(i),(Ge&6)===0&&(ns=xe()+500,Zr(0))}}break;case 31:case 13:T=da(i,2),T!==null&&kt(T,i,2),rs(),Wo(i,2)}if(i=ec(a),i===null&&Bo(e,t,a,xs,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else Bo(e,t,a,null,n)}}function ec(e){return e=tl(e),tc(e)}var xs=null;function tc(e){if(xs=null,e=Na(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xs=e,null}function Ch(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case Re:return 2;case Ye:return 8;case Le:case Tt:return 32;case jn:return 268435456;default:return 32}default:return 32}}var nc=!1,Jn=null,ea=null,ta=null,ni=new Map,ai=new Map,na=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ih(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function ri(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ca(t),t!==null&&Th(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function n0(e,t,n,a,r){switch(t){case"focusin":return Jn=ri(Jn,e,t,n,a,r),!0;case"dragenter":return ea=ri(ea,e,t,n,a,r),!0;case"mouseover":return ta=ri(ta,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return ni.set(i,ri(ni.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,ai.set(i,ri(ai.get(i)||null,e,t,n,a,r)),!0}return!1}function Dh(e){var t=Na(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Gc(e.priority,function(){Nh(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Gc(e.priority,function(){Nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ec(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);el=a,n.target.dispatchEvent(a),el=null}else return t=Ca(n),t!==null&&Th(t),e.blockedOn=n,!1;t.shift()}return!0}function Oh(e,t,n){Ss(e)&&n.delete(t)}function a0(){nc=!1,Jn!==null&&Ss(Jn)&&(Jn=null),ea!==null&&Ss(ea)&&(ea=null),ta!==null&&Ss(ta)&&(ta=null),ni.forEach(Oh),ai.forEach(Oh)}function Es(e,t){e.blockedOn===t&&(e.blockedOn=null,nc||(nc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,a0)))}var As=null;function jh(e){As!==e&&(As=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){As===e&&(As=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(tc(a||n)===null)continue;break}var i=Ca(n);i!==null&&(e.splice(t,3),t-=3,Jl(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function ur(e){function t(M){return Es(M,e)}Jn!==null&&Es(Jn,e),ea!==null&&Es(ea,e),ta!==null&&Es(ta,e),ni.forEach(t),ai.forEach(t);for(var n=0;n<na.length;n++){var a=na[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)Dh(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],f=r[Nt]||null;if(typeof i=="function")f||jh(n);else if(f){var T=null;if(i&&i.hasAttribute("formAction")){if(r=i,f=i[Nt]||null)T=f.formAction;else if(tc(r)!==null)continue}else T=f.action;typeof T=="function"?n[a+1]=T:(n.splice(a,3),a-=3),jh(n)}}}function kh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(f){return r=f})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function ac(e){this._internalRoot=e}_s.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Pt();wh(n,a,e,t,null,null)},_s.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wh(e.current,2,null,e,null,null),rs(),t[Ta]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&Dh(e)}};var Lh=o.version;if(Lh!=="19.2.1")throw Error(u(527,Lh,"19.2.1"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var r0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Ke=ws.inject(r0),mt=ws}catch{}}return si.createRoot=function(e,t){if(!p(e))throw Error(u(299));var n=!1,a="",r=Pd,i=Vd,f=Hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=Ah(e,1,!1,null,null,n,a,null,r,i,f,kh),e[Ta]=t.current,Uo(e),new ac(t)},si.hydrateRoot=function(e,t,n){if(!p(e))throw Error(u(299));var a=!1,r="",i=Pd,f=Vd,T=Hd,M=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),t=Ah(e,1,!0,t,n??null,a,r,M,i,f,T,kh),t.context=_h(null),n=t.current,a=Pt(),a=qs(a),r=Pn(a),r.callback=null,Vn(n,r,a),n=a,t.current.lanes=n,mr(t,n),hn(t),e[Ta]=t.current,Uo(e),new _s(t)},si.version="19.2.1",si}var Yh;function m0(){if(Yh)return sc.exports;Yh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),sc.exports=p0(),sc.exports}var g0=m0();const y0=Cc(g0);var me=(c=>(c.SETUP="ICISsetup",c.BUILDER="ICISbuilder",c.REVIEWER="ICISreviewer",c.SUPERVISOR="ICISsupervisor",c.REVISER="ICISreviser",c.FINALIZE="ICISfinalize",c))(me||{}),Ie=(c=>(c.PENDING="pending",c.ACTIVE="active",c.COMPLETED="completed",c.ERROR="error",c.SKIPPED="skipped",c))(Ie||{}),dr=(c=>(c.SIMULATION="Simulation & Computational Modeling",c.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",c.SECONDARY_DATA="Secondary data analysis",c.EXPERIMENTAL="Laboratory & field experiments",c.SURVEY="Survey research",c))(dr||{}),ze=(c=>(c.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",c.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",c.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",c.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",c.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",c.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",c.STEP5_EXECUTION="Step 5: Experiment Execution",c.STEP6_VISUALIZATION="Step 6: Results Visualization",c.STEP7_ANALYSIS="Step 7: Results Analysis",c.STEP8_PAPER_WRITING="Step 8: Paper Writing",c.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",c))(ze||{});function v0(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const qh={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:v0(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]},sp="/icis",b0={[me.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText"},[me.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer"},[me.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search"},[me.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck"},[me.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3"},[me.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send"}},lp={[ze.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[ze.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[ze.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[ze.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[ze.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[ze.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[ze.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[ze.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[ze.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[ze.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[ze.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};dr.SIMULATION+"",dr.ANALYTICAL+"",dr.SECONDARY_DATA+"",dr.EXPERIMENTAL+"",dr.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S0=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,l,u)=>u?u.toUpperCase():l.toLowerCase()),$h=c=>{const o=S0(c);return o.charAt(0).toUpperCase()+o.slice(1)},op=(...c)=>c.filter((o,l,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===l).join(" ").trim(),E0=c=>{for(const o in c)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=be.forwardRef(({color:c="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:p="",children:d,iconNode:m,...g},b)=>be.createElement("svg",{ref:b,...A0,width:o,height:o,stroke:c,strokeWidth:u?Number(l)*24/Number(o):l,className:op("lucide",p),...!d&&!E0(g)&&{"aria-hidden":"true"},...g},[...m.map(([h,w])=>be.createElement(h,w)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(c,o)=>{const l=be.forwardRef(({className:u,...p},d)=>be.createElement(_0,{ref:d,iconNode:o,className:op(`lucide-${x0($h(c))}`,`lucide-${c}`,u),...p}));return l.displayName=$h(c),l};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],R0=Oe("activity",w0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],N0=Oe("archive",T0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],I0=Oe("arrow-left",C0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],mc=Oe("chart-column",D0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],on=Oe("check",O0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gc=Oe("chevron-down",j0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cp=Oe("chevron-right",k0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Os=Oe("circle-alert",L0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],M0=Oe("circle-check-big",z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],yc=Oe("circle-check",U0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Xh=Oe("circle-play",B0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],up=Oe("circle-stop",F0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Zh=Oe("circle",P0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],H0=Oe("copy",V0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],js=Oe("download",G0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],dp=Oe("ellipsis-vertical",Y0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],$0=Oe("external-link",q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vc=Oe("eye",X0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],Q0=Oe("fast-forward",Z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ms=Oe("file-text",K0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],J0=Oe("folder-plus",W0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],ty=Oe("hammer",ey);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],ay=Oe("link",ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Qh=Oe("loader-circle",ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],sy=Oe("loader",iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],oy=Oe("lock",ly);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M5 12h14",key:"1ays0h"}]],uy=Oe("minus",cy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],fy=Oe("pen-line",dy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bc=Oe("play",hy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],tn=Oe("refresh-cw",py);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Cs=Oe("rotate-ccw",my);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],yy=Oe("save",gy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fp=Oe("search",vy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Dc=Oe("send",by);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Kh=Oe("skip-forward",xy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ey=Oe("trash-2",Sy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],_y=Oe("trending-down",Ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],hp=Oe("trending-up",wy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],xc=Oe("triangle-alert",Ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],pp=Oe("upload",Ty);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Cy=Oe("user-check",Ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Dy=Oe("user",Iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],mp=Oe("users",Oy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ky=Oe("x",jy),Ly=({currentStage:c,currentBuilderStep:o,stagesState:l,isPartialPaper:u=!1,currentRound:p=1,isProcessing:d=!1,onStageClick:m,onStageAction:g,onNewCase:b,onNewInterview:h,onPaperToInterview:w,onResearchAdmin:E,paperMode:C="draft",onPaperModeChange:S})=>{const[R,y]=be.useState(null),A=be.useRef(null);be.useEffect(()=>{const U=ae=>{A.current&&!A.current.contains(ae.target)&&y(null)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const _=(U,ae)=>{const te=[];switch(ae){case Ie.ACTIVE:te.push({action:"abort",label:"Abort",icon:s.jsx(up,{size:14})});break;case Ie.COMPLETED:te.push({action:"restart",label:"Restart",icon:s.jsx(Cs,{size:14})});break;case Ie.ERROR:te.push({action:"restart",label:"Retry",icon:s.jsx(Cs,{size:14})});break;case Ie.PENDING:const k=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],Z=k.indexOf(U),v=Z>0?k[Z-1]:null,X=!v||l[v]===Ie.COMPLETED;te.push({action:"start",label:"Start",icon:s.jsx(bc,{size:14}),disabled:!X||d}),U!==me.SETUP&&U!==me.FINALIZE&&te.push({action:"skip",label:"Skip",icon:s.jsx(Q0,{size:14}),disabled:d});break;case Ie.SKIPPED:te.push({action:"restart",label:"Unskip & Run",icon:s.jsx(Cs,{size:14})});break}return te},I=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],D={[me.SETUP]:s.jsx(Ms,{size:16}),[me.BUILDER]:s.jsx(ty,{size:16}),[me.REVIEWER]:s.jsx(fp,{size:16}),[me.SUPERVISOR]:s.jsx(Cy,{size:16}),[me.REVISER]:s.jsx(fy,{size:16}),[me.FINALIZE]:s.jsx(Dc,{size:16})},B=U=>{switch(U){case Ie.COMPLETED:return s.jsx(yc,{size:16,className:"text-emerald-500"});case Ie.ACTIVE:return s.jsx(Xh,{size:16,className:"text-red-500 animate-pulse"});case Ie.ERROR:return s.jsx(Os,{size:16,className:"text-red-500"});case Ie.SKIPPED:return s.jsx(Kh,{size:16,className:"text-slate-400"});default:return s.jsx(Zh,{size:16,className:"text-slate-500"})}},j=[ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION],$=U=>u?[ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS].includes(U):!1,H=U=>{if($(U))return"skipped";const ae=j.indexOf(U),te=o?j.indexOf(o):-1;return U===o?"active":te>ae?"completed":"pending"},G=c===me.BUILDER||l[me.BUILDER]===Ie.ACTIVE;return s.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[s.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[s.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"ICIScopilot",s.jsx("span",{className:"text-emerald-500",children:"1"})]}),s.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Automated Science Discovery"})]}),p>1&&s.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),s.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",p]})]})}),u&&s.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:s.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[s.jsx(Os,{size:12}),s.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),s.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[s.jsx("button",{onClick:()=>S==null?void 0:S("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${C==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),s.jsx("button",{onClick:()=>S==null?void 0:S("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${C==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),h&&s.jsx("button",{onClick:h,className:"w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition-colors",children:"Voice Interview"}),w&&s.jsx("button",{onClick:w,className:"w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors",children:"Paper to Interview"}),b&&s.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&b()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),E&&s.jsxs("button",{onClick:E,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[s.jsx(mp,{size:16}),"Research Admin"]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:I.map(U=>{const ae=l[U],te=ae===Ie.ACTIVE,k=ae===Ie.COMPLETED,Z=ae===Ie.SKIPPED,v=c===U,X=b0[U],P=_(U,ae);return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${te?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":k?"border-emerald-500/50 bg-slate-900/50":Z?"border-slate-700 bg-slate-900/30 opacity-60":v?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>m(U),children:[s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`${te?"text-red-400":k?"text-emerald-400":"text-slate-400"}`,children:D[U]}),s.jsx("span",{className:`font-medium text-sm ${te||v?"text-white":""}`,children:X.label})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[U===me.BUILDER&&(G?s.jsx(gc,{size:14}):s.jsx(cp,{size:14})),B(ae),g&&P.length>0&&s.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:V=>{V.stopPropagation(),y(R===U?null:U)},children:s.jsx(dp,{size:14,className:"text-slate-400"})})]})]}),s.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:X.description}),X.promptFile&&s.jsx("div",{className:"mt-2 pl-6",children:s.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:X.promptFile})})]}),R===U&&g&&s.jsx("div",{ref:A,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:P.map(({action:V,label:de,icon:ee,disabled:ge})=>s.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${ge?"text-slate-600 cursor-not-allowed":V==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:N=>{N.stopPropagation(),ge||(g(U,V),y(null))},disabled:ge,children:[ee,de]},V))}),U===me.BUILDER&&G&&s.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:j.map(V=>{const de=lp[V],ee=H(V);return s.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${ee==="active"?"bg-red-900/30 text-red-300":ee==="completed"?"text-emerald-400":ee==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[ee==="active"&&s.jsx(Xh,{size:12,className:"animate-pulse"}),ee==="completed"&&s.jsx(yc,{size:12}),ee==="skipped"&&s.jsx(Kh,{size:12}),ee==="pending"&&s.jsx(Zh,{size:12}),s.jsxs("span",{children:[de.label,": ",de.description]})]},V)})})]},U)})}),s.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:s.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Directory:"}),s.jsx("span",{className:"text-slate-400",children:sp})]}),s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Paper Version:"}),s.jsxs("span",{className:"text-slate-400",children:["v",p]})]})]})})]})},oi="icis_files_";class Is extends Error{constructor(o,l,u){super(l),this.type=o,this.userMessage=l,this.technicalDetails=u,this.name="StorageError"}}function gp(){try{const c="__storage_test__";return localStorage.setItem(c,c),localStorage.removeItem(c),!0}catch{return!1}}function hr(c,o){var u;if(!gp())throw new Is("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const l=oi+c.replace(/\\/g,"/");try{localStorage.setItem(l,o),console.log(`File written: ${c}`)}catch(p){const d=p;throw d.name==="QuotaExceededError"||(u=d.message)!=null&&u.includes("quota")?new Is("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",d.message):new Is("WRITE_ERROR",`Failed to save file: ${c}`,d.message)}}function Us(c){if(!gp())return console.warn("localStorage unavailable, returning null for read"),null;const o=oi+c.replace(/\\/g,"/");try{return localStorage.getItem(o)}catch(l){const u=l;throw console.error(`Error reading file ${c}:`,u),new Is("READ_ERROR",`Failed to read file: ${c}`,u.message)}}function zy(c){const o=[],l=new RegExp(c.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let u=0;u<localStorage.length;u++){const p=localStorage.key(u);if(p&&p.startsWith(oi)){const d=p.substring(oi.length);l.test(d)&&o.push(d)}}return o.sort()}function yp(c){const o=`icis/Data/oversight_v${c.version}.txt`,l=My(c);return hr(o,l),hr(o+".json",JSON.stringify(c,null,2)),o}function My(c){const o=[];o.push(`ID=${c.paperId}`),o.push(`Version: ${c.version}`),o.push(`Timestamp: ${c.timestamp}`),o.push(""),o.push("================================================================================"),o.push("                     OVERSIGHT DASHBOARD"),o.push("================================================================================"),o.push(""),o.push("TABLE 1 - Review Scores Progression:"),o.push("------------------------------------------------------------------------"),o.push("| Criteria              | Score | Comment                              |"),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| Novelty               | ${c.reviewScores.novelty}     | ${c.reviewComments.novelty.substring(0,36).padEnd(36)} |`),o.push(`| Significance          | ${c.reviewScores.significance}     | ${c.reviewComments.significance.substring(0,36).padEnd(36)} |`),o.push(`| Methodological Rigor  | ${c.reviewScores.methodologicalRigor}     | ${c.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),o.push(`| Clarity               | ${c.reviewScores.clarity}     | ${c.reviewComments.clarity.substring(0,36).padEnd(36)} |`),o.push(`| Relevance             | ${c.reviewScores.relevance}     | ${c.reviewComments.relevance.substring(0,36).padEnd(36)} |`),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| AVERAGE               | ${c.averageScore.toFixed(1)}   |                                      |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 2 - Error Counts:"),o.push("------------------------------------------------------------------------"),o.push("| Category        | Count | Details                                  |"),o.push("|-----------------|-------|------------------------------------------|");const l=c.errorDetails.majorErrors.length>0?c.errorDetails.majorErrors[0].substring(0,40):"None",u=c.errorDetails.minorErrors.length>0?c.errorDetails.minorErrors[0].substring(0,40):"None";if(o.push(`| Major Errors    | ${String(c.errorCounts.majorErrors).padStart(5)} | ${l.padEnd(40)} |`),o.push(`| Minor Errors    | ${String(c.errorCounts.minorErrors).padStart(5)} | ${u.padEnd(40)} |`),o.push("|-----------------|-------|------------------------------------------|"),o.push(`| TOTAL           | ${String(c.errorCounts.majorErrors+c.errorCounts.minorErrors).padStart(5)} |                                          |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),o.push("------------------------------------------------------------------------"),o.push("| Dimension       | Score | Rationale                               |"),o.push("|-----------------|-------|-----------------------------------------|"),o.push(`| Reliability     | ${c.trustworthiness.reliability}     | ${c.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),o.push(`| Benevolence     | ${c.trustworthiness.benevolence}     | ${c.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),o.push(`| Goal Alignment  | ${c.trustworthiness.goalAlignment}     | ${c.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("CRITICAL ALERTS:"),o.push("------------------------------------------------------------------------"),c.criticalAlerts.length===0)o.push("None - paper is progressing well");else for(const p of c.criticalAlerts)o.push(`CRITICAL ALERT ${p.number}: ${p.title} (BLOCKING ISSUE)`),o.push(`  Status: ${p.status}`),o.push(`  Impact: ${p.impact}`),o.push(`  Details: ${p.details}`),o.push(`  Action Required: ${p.actionRequired}`),o.push(`  Consequence if Unfixed: ${p.consequence}`),o.push("");return o.push("------------------------------------------------------------------------"),o.push(""),o.push("================================================================================"),o.join(`
`)}function Oc(c){const o=`icis/Data/feedback_v${c.version}.txt`,l=[];if(l.push(`ID=${c.paperId}`),l.push(`Version: ${c.version}`),l.push(`Timestamp: ${c.timestamp}`),l.push(""),l.push("================================================================================"),l.push("                     CONSTRUCTIVE FEEDBACK"),l.push("================================================================================"),l.push(""),l.push("## Research Question and Contribution"),l.push(c.researchQuestion),l.push(""),l.push("## Method"),l.push(c.method),l.push(""),l.push("## Potential Impact"),l.push(c.potentialImpact),l.push(""),l.push("## Writing Quality"),l.push(c.writing),l.push(""),l.push("## Major Concerns"),c.majorConcerns.forEach((p,d)=>{l.push(`${d+1}. ${p}`)}),l.push(""),l.push("## Minor Corrections"),c.minorCorrections.forEach((p,d)=>{l.push(`${d+1}. ${p}`)}),l.push(""),l.push("## Overall Assessment"),l.push(c.overallAssessment),l.push(""),c.supervisorDirectives&&c.supervisorDirectives.length>0){l.push("================================================================================"),l.push("                     SUPERVISOR DIRECTIVES"),l.push("================================================================================");for(const p of c.supervisorDirectives)l.push(""),l.push(`Cycle ${p.cycle} - ${p.timestamp}`),l.push("------------------------------------------------------------------------"),l.push(p.directives)}l.push(""),l.push("================================================================================");const u=l.join(`
`);return hr(o,u),hr(o+".json",JSON.stringify(c,null,2)),o}function Ds(c){const o=`icis/Data/oversight_v${c}.txt.json`,l=Us(o);if(l)try{return JSON.parse(l)}catch(u){console.error("Failed to parse oversight JSON:",u)}return null}function li(c){const o=`icis/Data/feedback_v${c}.txt.json`,l=Us(o);if(l)try{return JSON.parse(l)}catch(u){console.error("Failed to parse feedback JSON:",u)}return null}function jc(){const c=zy("icis/Data/oversight_v.*\\.txt\\.json"),o=[];for(const l of c){const u=Us(l);if(u)try{o.push(JSON.parse(u))}catch(p){console.error("Failed to parse oversight file:",l,p)}}return o.sort((l,u)=>l.version-u.version)}function Wh(c,o,l){const u=li(c);u&&(u.supervisorDirectives||(u.supervisorDirectives=[]),u.supervisorDirectives.push({cycle:o,directives:l,timestamp:new Date().toISOString()}),Oc(u))}function Jh(c,o,l){const u="icis/Data/supervisor_decision.txt",p=[];return p.push(`Decision: ${c}`),p.push(`Cycle: ${o}`),p.push(`Timestamp: ${new Date().toISOString()}`),hr(u,p.join(`
`)),u}function Uy(){const c=[];for(let o=0;o<localStorage.length;o++){const l=localStorage.key(o);l&&l.startsWith(oi)&&c.push(l)}c.forEach(o=>localStorage.removeItem(o)),console.log(`Cleared ${c.length} files`)}function ep(c,o,l="icis_paper"){const u=`icis/Paper/${l}_v${c}.tex`;return hr(u,o),console.log(`Paper saved: ${u}`),u}function ra(c,o="icis_paper"){const l=`icis/Paper/${o}_v${c}.tex`;return Us(l)}function By(c,o="icis_paper"){const l=ra(c,o);if(!l){console.error(`Paper version ${c} not found`);return}const u=`${o}_v${c}.tex`,p=new Blob([l],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(p),m=document.createElement("a");m.href=d,m.download=u,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(d),console.log(`Downloaded: ${u}`)}const ci=({logs:c,height:o="h-64"})=>{const l=be.useRef(null);return be.useEffect(()=>{var u;(u=l.current)==null||u.scrollIntoView({behavior:"smooth"})},[c]),s.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${o} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[c.length===0?s.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):c.map((u,p)=>s.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:u},p)),s.jsx("div",{ref:l})]})},Fy=({currentStep:c})=>{if(!c)return null;const o=lp[c];return s.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:s.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[s.jsx(tn,{size:16,className:"animate-spin"}),s.jsx("span",{className:"font-medium",children:o.label}),s.jsxs("span",{className:"text-indigo-500",children:["- ",o.description]})]})})},kc=({stageName:c,isProcessing:o,canAbort:l,canRestart:u,onAbort:p,onRestart:d})=>{const[m,g]=be.useState(null),b=()=>{o&&g("abort")},h=()=>{g("restart")},w=()=>{m==="abort"?p():m==="restart"&&d(),g(null)};return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex gap-2",children:[l&&o&&s.jsxs("button",{onClick:b,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[s.jsx(up,{size:14}),"Abort"]}),u&&!o&&s.jsxs("button",{onClick:h,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[s.jsx(Cs,{size:14}),"Restart"]})]}),m&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:s.jsx(xc,{className:"text-amber-600",size:24})}),s.jsx("h3",{className:"text-lg font-bold text-slate-800",children:m==="abort"?"Abort Stage?":"Restart Stage?"})]}),s.jsx("p",{className:"text-slate-600 mb-6",children:m==="abort"?s.jsxs(s.Fragment,{children:["Are you sure you want to abort the ",s.jsx("strong",{children:c})," stage? Any progress will be lost and you may need to restart the stage."]}):s.jsxs(s.Fragment,{children:["Are you sure you want to restart the ",s.jsx("strong",{children:c})," stage? This will reset the stage and you'll need to run it again."]})}),s.jsxs("div",{className:"flex gap-3 justify-end",children:[s.jsx("button",{onClick:()=>g(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),s.jsx("button",{onClick:w,className:`px-4 py-2 text-white rounded-lg transition-colors ${m==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:m==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},uc=({label:c,accept:o=".txt",multiple:l=!1,required:u=!1,file:p,onFileSelect:d})=>{const m=be.useRef(null),g=()=>{var w;(w=m.current)==null||w.click()},b=w=>{var C;const E=((C=w.target.files)==null?void 0:C[0])||null;d(E)},h=w=>{w.stopPropagation(),d(null),m.current&&(m.current.value="")};return s.jsxs("div",{onClick:g,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${p?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(pp,{size:16,className:p?"text-emerald-600":"text-slate-400"}),s.jsxs("span",{className:"text-sm",children:[p?p.name:c,u&&!p&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),p?s.jsx("button",{onClick:h,className:"p-1 hover:bg-emerald-200 rounded",children:s.jsx(ky,{size:16,className:"text-emerald-600"})}):s.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),s.jsx("input",{ref:m,type:"file",accept:o,multiple:l,onChange:b,className:"hidden"})]})},Py=({logs:c,stageStatus:o,isProcessing:l,uploadedFiles:u,onFileChange:p,onAction:d,detectionStatus:m,onRefreshDetection:g,hasExistingCase:b=!1})=>{const[h,w]=be.useState(!1),E=u.template&&u.interview,C=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(w(!0),d("NEW_CASE"),setTimeout(()=>w(!1),2e3))};return s.jsxs("div",{className:"space-y-6 max-w-2xl mx-auto mt-10",children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(Ms,{className:"text-indigo-600"}),"Setup & File Selection"]}),b&&s.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(N0,{className:"text-blue-600",size:24}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),s.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),s.jsx("button",{onClick:C,disabled:h,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:h?s.jsxs(s.Fragment,{children:[s.jsx(tn,{className:"animate-spin",size:18}),"Backing up..."]}):s.jsxs(s.Fragment,{children:[s.jsx(J0,{size:18}),"New Project"]})})]})}),m&&s.jsxs("div",{className:`p-4 rounded-lg border ${m.loading?"bg-blue-50 border-blue-200":m.detected.interview?"bg-green-50 border-green-200":"bg-amber-50 border-amber-200"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[m.loading?s.jsxs(s.Fragment,{children:[s.jsx(sy,{className:"animate-spin text-blue-600",size:18}),s.jsx("span",{className:"text-blue-800 font-medium",children:"Detecting files in Data folder..."})]}):m.detected.interview?s.jsxs(s.Fragment,{children:[s.jsx(M0,{className:"text-green-600",size:18}),s.jsx("span",{className:"text-green-800 font-medium",children:"Files auto-detected!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Os,{className:"text-amber-600",size:18}),s.jsx("span",{className:"text-amber-800 font-medium",children:"No files detected - upload manually"})]}),g&&!m.loading&&s.jsxs("button",{onClick:g,className:"ml-auto text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1",children:[s.jsx(tn,{size:14}),"Refresh"]})]}),!m.loading&&m.detected.interview&&s.jsxs("div",{className:"mt-3 space-y-1 text-sm",children:[s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Interview:"})," ",m.detected.interview.filename]}),m.detected.participantId&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Participant ID:"})," ",m.detected.participantId]}),m.detected.template&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Template:"})," ",m.detected.template.filename]}),m.detected.dataFile&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Data File:"})," ",m.detected.dataFile.filename]})]})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:m!=null&&m.detected.interview?"Detected Files":"Select Your Files"}),s.jsx("p",{className:"text-sm text-slate-500",children:m!=null&&m.detected.interview?"Files were automatically loaded from the Data folder. You can still upload different files if needed.":"Upload the required files to begin the paper generation process."}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(uc,{label:"icisTemplate.txt (Required)",accept:".txt",required:!0,file:u.template,onFileSelect:S=>p("template",S)}),s.jsx(uc,{label:"Interview transcript (Required)",accept:".txt",required:!0,file:u.interview,onFileSelect:S=>p("interview",S)}),s.jsx(uc,{label:"Data file (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:u.dataFile,onFileSelect:S=>p("dataFile",S)})]}),u.participantId&&s.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg",children:s.jsxs("p",{className:"text-sm text-indigo-800",children:[s.jsx("strong",{children:"Participant ID:"})," ",u.participantId]})}),s.jsx(ci,{logs:c,height:"h-32"}),s.jsx("div",{className:"pt-4 border-t border-slate-100 flex justify-end gap-3",children:s.jsxs("button",{onClick:()=>d("START_SETUP"),disabled:l||!E,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[l?s.jsx(tn,{className:"animate-spin",size:18}):s.jsx(bc,{size:18}),"Verify Files"]})}),!E&&!(m!=null&&m.loading)&&s.jsx("p",{className:"text-xs text-amber-600 text-center",children:"Please upload the required files (template and interview) to proceed."})]}),o===Ie.COMPLETED&&s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),s.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),s.jsxs("button",{onClick:()=>d("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(bc,{size:18}),"Start Building Paper"]})]}),s.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3",children:[s.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>d("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),s.jsx("button",{onClick:()=>d("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})},Vy=({logs:c,isProcessing:o,isPartialPaper:l,currentBuilderStep:u,paperContent:p,onAbort:d,onRestart:m})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Building Research Paper",l&&s.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),s.jsx(kc,{stageName:"Builder",isProcessing:o,canAbort:!0,canRestart:!o&&!!p,onAbort:d||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(Fy,{currentStep:u}),s.jsx(ci,{logs:c,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:p?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:p}):s.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),Hy=({allOversight:c,compact:o=!1})=>{if(c.length===0)return null;const l=(E,C)=>C>E?"up":C<E?"down":"same",u=({trend:E,size:C=14})=>E==="up"?s.jsx(hp,{size:C,className:"text-emerald-500"}):E==="down"?s.jsx(_y,{size:C,className:"text-red-500"}):s.jsx(uy,{size:C,className:"text-slate-400"}),p=(E,C=4)=>E>=C?"text-emerald-600":E>=C-1?"text-amber-600":"text-red-600",d=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],m=c[0],g=c[c.length-1],b=c.length>1,h=b?((g.averageScore-m.averageScore)/m.averageScore*100).toFixed(1):"0",w=b?Math.round((1-(g.errorCounts.majorErrors+g.errorCounts.minorErrors)/Math.max(1,m.errorCounts.majorErrors+m.errorCounts.minorErrors))*100):0;return o?s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(mc,{size:18,className:"text-indigo-600"}),s.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),b&&s.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(h)>0?"bg-emerald-100 text-emerald-700":parseFloat(h)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(h)>0?"+":"",h,"% overall"]})]}),s.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:d.map(({key:E,label:C})=>{const S=m.reviewScores[E]||0,R=g.reviewScores[E]||0,y=l(S,R);return s.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[s.jsx("div",{className:"text-slate-500 truncate mb-1",children:C}),s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx("span",{className:`font-bold ${p(R)}`,children:R}),b&&s.jsx(u,{trend:y,size:12})]}),b&&S!==R&&s.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",S]})]},E)})}),s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Average:"}),s.jsx("span",{className:`font-bold ${p(g.averageScore)}`,children:g.averageScore.toFixed(1)}),b&&s.jsxs(s.Fragment,{children:[s.jsx(u,{trend:l(m.averageScore,g.averageScore)}),s.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",m.averageScore.toFixed(1),")"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Errors:"}),s.jsx("span",{className:`font-bold ${g.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:g.errorCounts.majorErrors+g.errorCounts.minorErrors}),b&&w!==0&&s.jsxs("span",{className:`text-xs ${w>0?"text-emerald-600":"text-red-600"}`,children:["(",w>0?"-":"+",Math.abs(w),"%)"]})]})]}),b&&s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[s.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",c.length," rounds):"]}),s.jsx("div",{className:"flex gap-1",children:c.map((E,C)=>s.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${C===c.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.averageScore.toFixed(1)]},C))})]})]}):s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(mc,{size:20,className:"text-indigo-600"}),s.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),b&&s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(h)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(h)>0?"+":"",h,"% score change"]}),s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${w>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[w>0?"-":"+",Math.abs(w),"% errors"]})]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-200",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),c.map((E,C)=>s.jsxs("th",{className:`text-center p-2 ${C===c.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",E.version]},C)),b&&s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),s.jsxs("tbody",{children:[d.map(({key:E,label:C})=>{const S=c.map(y=>y.reviewScores[E]||0),R=b?l(S[0],S[S.length-1]):"same";return s.jsxs("tr",{className:"border-b border-slate-100",children:[s.jsx("td",{className:"p-2 font-medium",children:C}),S.map((y,A)=>s.jsx("td",{className:`text-center p-2 ${A===S.length-1?"bg-indigo-50/50":""} ${p(y)}`,children:y},A)),b&&s.jsx("td",{className:"text-center p-2",children:s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx(u,{trend:R}),R==="up"&&s.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",S[S.length-1]-S[0]]}),R==="down"&&s.jsx("span",{className:"text-red-600 text-xs",children:S[S.length-1]-S[0]})]})})]},E)}),s.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"Average"}),c.map((E,C)=>s.jsx("td",{className:`text-center p-2 ${C===c.length-1?"bg-indigo-100":""} ${p(E.averageScore)}`,children:E.averageScore.toFixed(1)},C)),b&&s.jsx("td",{className:"text-center p-2",children:s.jsx("div",{className:"flex items-center justify-center gap-1",children:s.jsx(u,{trend:l(m.averageScore,g.averageScore)})})})]})]})]})}),s.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[s.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:c.map((E,C)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${C===c.length-1?E.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.errorCounts.majorErrors]},C))})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:c.map((E,C)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${C===c.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.errorCounts.minorErrors]},C))})]})]})]})]})},nn="http://localhost:3001/api";function ui(){return{"Content-Type":"application/json"}}let ct=null;async function pn(){try{const c=new AbortController,o=setTimeout(()=>c.abort(),1e3),l=await fetch(`${nn}/health`,{signal:c.signal});return clearTimeout(o),ct=(await l.json()).status==="ok",ct}catch{return ct=!1,!1}}async function vp(){var c,o;try{const l=await fetch(`${nn}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!l.ok)return{success:!1,error:`Server error: ${l.status}`};const u=await l.json();return u.success&&console.log("[FileApi] Manifest refreshed:",(o=(c=u.manifest)==null?void 0:c.files)==null?void 0:o.map(p=>p.filename)),u}catch(l){return console.error("[FileApi] Failed to refresh manifest:",l),{success:!1,error:l.message}}}function Lc(c,o,l="text/plain"){const u=new Blob([o],{type:l}),p=URL.createObjectURL(u),d=document.createElement("a");d.href=p,d.download=c,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(p)}async function Sc(c,o){if(ct===null&&await pn(),ct)try{const u=await(await fetch(`${nn}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:o})})).json();if(u.success)return u}catch{console.warn("Backend save failed, falling back to download")}try{return Lc(c,o,"application/x-tex"),{success:!0,path:`Downloads/${c}`}}catch(l){return{success:!1,error:l.message}}}async function Ec(c,o){const l=typeof o=="string"?o:JSON.stringify(o,null,2);if(ct===null&&await pn(),ct)try{const p=await(await fetch(`${nn}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:l})})).json();if(p.success)return p}catch{console.warn("Backend save failed, falling back to download")}try{return Lc(c,l,"application/json"),{success:!0,path:`Downloads/${c}`}}catch(u){return{success:!1,error:u.message}}}async function bp(c){if(ct===null&&await pn(),ct)try{const l=await(await fetch(`${nn}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:c})})).json();if(l.success)return l}catch{console.warn("Backend save failed, falling back to downloads")}try{const o=[];for(const l of c){const u=typeof l.content=="string"?l.content:JSON.stringify(l.content,null,2),p=l.directory==="paper"?"application/x-tex":"application/json";await new Promise(d=>setTimeout(d,200)),Lc(l.filename,u,p),o.push(l.filename)}return{success:!0,files:o}}catch(o){return{success:!1,error:o.message}}}async function xp(c,o,l,u,p){const d=p?`${p}_`:"";return bp([{directory:"data",filename:`${d}oversight_v${c}.json`,content:o},{directory:"data",filename:`${d}feedback_v${c}.json`,content:l},{directory:"paper",filename:`${d}icis_paper_v${c}.tex`,content:u}])}const wa="https://icis-deploy-12-10-2025.vercel.app";let _a=null;async function Sp(c,o,l){const u=(o.match(/\\begin\{tikzpicture\}/g)||[]).length,p=(l==null?void 0:l.length)||0,d=Math.round(o.length/1024),m=Lp(),g=!!m;try{console.log(`[LaTeX] Compiling via Vercel cloud... (${d} KB, ${u} TikZ, ${p} PNG figures${g?", with .bib":""})`);const b=new AbortController,h=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),b.abort()},3e5),w={filename:c,content:o,figures:l};m&&(w.bibliography=m);let E;try{E=await fetch(`${wa}/api/compile-latex`,{method:"POST",headers:ui(),signal:b.signal,body:JSON.stringify(w)}),clearTimeout(h)}catch(S){if(clearTimeout(h),S.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${u} TikZ figures may be too complex.`};throw S}const C=await E.json();return C.success&&C.pdfBase64?(_a={filename:C.pdfFilename,base64:C.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${C.pdfFilename}`)):C.success||console.warn(`[LaTeX] Cloud compilation failed: ${C.error}`),C}catch(b){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",b)}if(ct===null&&await pn(),!ct)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${nn}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:o})})).json()}catch(b){return{success:!1,error:`Compilation request failed: ${b.message}`}}}function zc(){if(!_a)return null;const c=atob(_a.base64),o=new Uint8Array(c.length);for(let u=0;u<c.length;u++)o[u]=c.charCodeAt(u);const l=new Blob([o],{type:"application/pdf"});return{filename:_a.filename,blob:l}}function Ep(c){return`${nn}/get-pdf/${encodeURIComponent(c)}`}async function Ap(c){const o=zc();if(o&&o.filename===c){const p=URL.createObjectURL(o.blob),d=document.createElement("a");d.href=p,d.download=c,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(p);return}const l=Ep(c),u=document.createElement("a");u.href=l,u.download=c,document.body.appendChild(u),u.click(),document.body.removeChild(u)}async function _p(c){if(!_a)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const l=await(await fetch(`${wa}/api/create-viewer-link`,{method:"POST",headers:ui(),body:JSON.stringify({filename:_a.filename,pdfBase64:_a.base64})})).json();if(l.success)return console.log(`[Viewer] Link created: ${l.fullUrl}`),l;console.warn("[Viewer] Cloud API returned error:",l.error)}catch(o){console.warn("[Viewer] Cloud API failed:",o)}if(ct===null&&await pn(),!ct)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${nn}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:c})})).json()}catch(o){return{success:!1,error:`Failed to create viewer link: ${o.message}`}}}function wp(c){window.open(c,"_blank","noopener,noreferrer")}async function Rp(c){if(ct===null&&await pn(),!ct)return{success:!1,error:"Backend server not available"};try{return await(await fetch(`${nn}/read-pdf/${encodeURIComponent(c)}`)).json()}catch(o){return{success:!1,error:o.message}}}async function Bs(c,o="full"){var l;try{console.log(`[Cloud Python] Analyzing data (${c.length} chars, type: ${o})...`);const p=await(await fetch(`${wa}/api/analyze-data`,{method:"POST",headers:ui(),body:JSON.stringify({csvContent:c,analysisType:o})})).json();return p.success?console.log(`[Cloud Python] Analysis complete: ${((l=p.figures)==null?void 0:l.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${p.error}`),p}catch(u){return console.error("[Cloud Python] Error:",u),{success:!1,error:u.message}}}async function Tp(c,o,l){const u=di();if(u!=null&&u.content&&wa){console.log("[executePythonScript] Trying cloud Python analysis...");const p=await Bs(u.content,"full");if(p.success){const d=[];return p.chart_data&&p.chart_data.forEach((m,g)=>{d.push({filename:`${m.type}_${m.column||m.x_column||g}.json`,path:`cloud://chart_data/${g}`,size:JSON.stringify(m).length,base64:btoa(JSON.stringify(m))})}),{success:!0,stdout:p.text_summary||"",dataFileFound:!0,generatedFigures:d}}}if(ct===null&&await pn(),!ct)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${c}, dataFile=${l||"UNDEFINED"}`);const p={filename:c,code:o,dataFile:l};console.log("[executePythonScript] Request body dataFile:",p.dataFile);const m=await(await fetch(`${nn}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${m.dataFileFound}, dataFilePath=${m.dataFilePath||"NONE"}`),m}catch(p){return{success:!1,error:`Python execution request failed: ${p.message}`}}}async function Np(){if(ct===null&&await pn(),!ct)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${nn}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(c){return{success:!1,error:`Backup request failed: ${c.message}`}}}let ln=null;async function Cp(c){try{const o=await c.arrayBuffer(),l=btoa(new Uint8Array(o).reduce((d,m)=>d+String.fromCharCode(m),""));console.log(`[Cloud Upload] Uploading ${c.name} (${c.size} bytes)...`);const p=await(await fetch(`${wa}/api/upload-data`,{method:"POST",headers:ui(),body:JSON.stringify({filename:c.name,content:l,contentType:c.type})})).json();return p.success&&(ln={filename:c.name,blobUrl:p.blobUrl},console.log(`[Cloud Upload] Success: ${p.blobUrl}`)),p}catch(o){return console.error("[Cloud Upload] Error:",o),{success:!1,error:o.message}}}function di(){return ln}async function Ac(c){try{console.log(`[Cloud Read] Reading from: ${c}`);const l=await(await fetch(`${wa}/api/read-data?url=${encodeURIComponent(c)}`)).json();return l.success&&ln&&(ln.content=l.content),l}catch(o){return console.error("[Cloud Read] Error:",o),{success:!1,error:o.message}}}async function Ip(c){if(ln&&ln.filename===c&&ln.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),Ac(ln.blobUrl);if(ct===null&&await pn(),!ct)return ln&&ln.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),Ac(ln.blobUrl)):{success:!1,error:"Backend server not available"};try{const l=await(await fetch(`${nn}/read-file/data/${encodeURIComponent(c)}`)).json();if(!l.success)return{success:!1,error:l.error||"Failed to read file"};const u=l.content,p=u.split(/\r?\n/),d=p[0]||"",m=p.filter(g=>g.trim()).length;return{success:!0,filename:c,firstLine:d,totalLines:m,content:u}}catch(o){return{success:!1,error:o.message}}}async function Gy(c){if(!c||c.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${c.length} figures via QuickChart.io...`);const l=await(await fetch(`${wa}/api/quickchart`,{method:"POST",headers:ui(),body:JSON.stringify({chartData:c})})).json();return l.success?console.log(`[QuickChart] Generated ${l.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${l.error}`),l}catch(o){return console.error("[QuickChart] Error:",o),{success:!1,error:o.message}}}let ks=[];function Dp(){return ks}async function Op(){const c=[];for(const o of ks)try{const l=await fetch(o.blobUrl);if(l.ok){const u=await l.blob();c.push({filename:o.filename,blob:u})}else console.warn(`[PNG Figures] Failed to download ${o.filename}: ${l.status}`)}catch(l){console.warn(`[PNG Figures] Error downloading ${o.filename}:`,l)}return console.log(`[PNG Figures] Downloaded ${c.length}/${ks.length} figures`),c}let _c=[];function Yy(c){_c=c.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:o.base64})),ks=c.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${o.base64}`,description:o.description||""})),console.log(`[PNG Storage] Stored ${_c.length} PNG figures for LaTeX compilation and download`)}function jp(){return _c}let Mc=null;function kp(c,o){Mc={filename:c,content:o},console.log(`[Bibliography] Stored ${c} (${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries)`)}function Lp(){return Mc}function zp(){return Mc}const dc=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:Bs,backupAndClearFiles:Np,checkBackendHealth:pn,compileLaTeX:Sp,createViewerLink:_p,downloadAllFigures:Op,downloadCompiledPdf:Ap,executePythonScript:Tp,generateQuickChartFigures:Gy,getBibliographyContent:zp,getBibliographyForCompilation:Lp,getCloudDataFile:di,getCurrentSessionFigures:Dp,getDataFilePreview:Ip,getLastCompiledPdfBlob:zc,getPdfDownloadUrl:Ep,getPngFiguresForCompilation:jp,openPaperViewer:wp,readCloudDataFile:Ac,readPdfFile:Rp,refreshManifest:vp,saveDataFile:Ec,saveFiles:bp,savePaperFile:Sc,saveReviewOutputs:xp,storeBibliography:kp,storePngFiguresForCompilation:Yy,uploadDataFileToCloud:Cp},Symbol.toStringTag,{value:"Module"})),qy=({logs:c,isProcessing:o,currentRound:l,isComplete:u=!1,onProceedToSupervisor:p,onAbort:d,onRestart:m,filePrefix:g})=>{const[b,h]=be.useState([]),[w,E]=be.useState(null),[C,S]=be.useState(!1),[R,y]=be.useState({}),A=async()=>{S(!0),E(null);const B=Ds(l),j=li(l),$=ra(l,"icis_paper");if(!B||!j||!$){E("Missing files to save"),S(!1);return}const H=await xp(l,B,j,$,g);H.success?h(H.files||[]):E(H.error||"Failed to save files"),S(!1)},_=async(B,j)=>{var G;const $=(G=B.target.files)==null?void 0:G[0];if(!$)return;const H=await $.text();try{const U=JSON.parse(H);y(ae=>({...ae,[j]:U}))}catch(U){console.error(`Failed to parse ${j} file:`,U)}},I=()=>{const B=R.oversight||Ds(l),j=R.feedback||li(l),$=ra(l,"icis_paper");B&&j&&$&&p&&p({oversight:B,feedback:j,paperContent:$,paperVersion:l})},D=u&&(R.oversight&&R.feedback||Ds(l)&&li(l));return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Reviewing Paper (Round ",l,")"]}),s.jsx(kc,{stageName:"Reviewer",isProcessing:o,canAbort:!0,canRestart:!o&&u,onAbort:d||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(ci,{logs:c,height:"h-48"}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${o?"bg-indigo-100 text-indigo-600":u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:o?s.jsx(tn,{size:14,className:"animate-spin"}):u?s.jsx(on,{size:14}):"1"}),s.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?s.jsx(on,{size:14}):"2"}),s.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?s.jsx(on,{size:14}):"3"}),s.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),u&&s.jsx("div",{className:"mt-6",children:s.jsx(Hy,{allOversight:jc(),compact:!0})}),u&&s.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[s.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[s.jsx(js,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),s.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),s.jsxs("button",{onClick:A,disabled:C,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[s.jsx(js,{size:16,className:C?"animate-pulse":""}),C?"Downloading...":"Download Review Outputs"]}),s.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",l,".json, feedback_v",l,".json, icis_paper_v",l,".tex"]}),b.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",b.join(", ")]}),w&&s.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",w]}),s.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[s.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[s.jsx(pp,{size:16}),"Upload Modified Files (Optional)"]}),s.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",R.oversight&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:B=>_(B,"oversight"),className:"text-xs w-full"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",R.feedback&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:B=>_(B,"feedback"),className:"text-xs w-full"})]})]})]}),s.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:s.jsxs("button",{onClick:I,disabled:!D,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",s.jsx(cp,{size:18})]})})]})]})},$y=({currentRound:c,currentPaperVersion:o,lastFeedback:l,isProcessing:u,oversightData:p,allOversight:d,onAction:m,reviewOutputFiles:g})=>{var k,Z;const[b,h]=be.useState(""),[w,E]=be.useState(!1),[C,S]=be.useState(!1),[R,y]=be.useState(!1),A=(g==null?void 0:g.oversight)||p,_=g==null?void 0:g.feedback,I=()=>{By(o,"icis_paper")},D=(g==null?void 0:g.paperContent)||ra(o,"icis_paper"),B=g?"Uploaded/Downloaded files":"Internal storage",j=(A==null?void 0:A.averageScore)||0,$=(A==null?void 0:A.errorCounts.majorErrors)||0,H=A?A.reviewScores.novelty<4||A.reviewScores.significance<4||A.reviewScores.methodologicalRigor<4||A.reviewScores.clarity<4||A.reviewScores.relevance<4:!1,G=A?A.trustworthiness.reliability<5||A.trustworthiness.benevolence<5||A.trustworthiness.goalAlignment<5:!1,U=((A==null?void 0:A.criticalAlerts.length)||0)>0,ae=H||G||$>0||U,te=!ae&&j>=4;return s.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[s.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),s.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",c]}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),s.jsx("div",{className:`p-4 font-mono text-sm ${ae?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:s.jsxs("div",{className:"font-bold",children:["STATUS: ",ae?"⚠️ ATTENTION NEEDED":te?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(Ms,{size:16,className:"text-slate-600"}),s.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),s.jsx("span",{className:"text-slate-600",children:B})]}),s.jsx("button",{onClick:()=>y(!R),className:"text-xs text-indigo-600 hover:underline",children:R?"Hide Details":"Show Details"})]}),R&&s.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),s.jsxs("p",{className:"text-slate-600",children:["oversight_v",(A==null?void 0:A.version)||c,".json",(g==null?void 0:g.oversight)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),s.jsxs("p",{className:"text-slate-600",children:["feedback_v",(_==null?void 0:_.version)||c,".json",(g==null?void 0:g.feedback)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),s.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(g==null?void 0:g.paperVersion)||o,".tex",(g==null?void 0:g.paperContent)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),s.jsx("p",{className:g?"text-emerald-600":"text-slate-600",children:g?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),d.map((v,X)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",v.version]},X)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),s.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(v=>{var P;const X=v==="Methodological Rigor"?"methodologicalRigor":v.toLowerCase();return s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:v}),d.map((V,de)=>{const ee=V.reviewScores[X]||0;return s.jsx("td",{className:`text-center p-2 ${ee<4?"text-red-600 font-bold":""}`,children:ee},de)}),s.jsx("td",{className:"p-2 text-slate-600 text-xs",children:A!=null&&A.reviewComments?((P=A.reviewComments[X])==null?void 0:P.substring(0,30))+"...":"-"})]},v)}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"AVERAGE"}),d.map((v,X)=>s.jsx("td",{className:"text-center p-2",children:v.averageScore.toFixed(1)},X)),s.jsx("td",{className:"p-2 text-xs",children:d.length>1?d[d.length-1].averageScore>d[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),d.map((v,X)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",v.version]},X)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Remaining Issues"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),d.map((v,X)=>s.jsx("td",{className:`text-center p-2 ${v.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:v.errorCounts.majorErrors},X)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((k=A==null?void 0:A.errorDetails.majorErrors[0])==null?void 0:k.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),d.map((v,X)=>s.jsx("td",{className:"text-center p-2",children:v.errorCounts.minorErrors},X)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((Z=A==null?void 0:A.errorDetails.minorErrors[0])==null?void 0:Z.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"TOTAL"}),d.map((v,X)=>s.jsx("td",{className:"text-center p-2",children:v.errorCounts.majorErrors+v.errorCounts.minorErrors},X)),s.jsx("td",{className:"p-2 text-xs",children:d.length>1?`${Math.round((1-(d[d.length-1].errorCounts.majorErrors+d[d.length-1].errorCounts.minorErrors)/Math.max(1,d[0].errorCounts.majorErrors+d[0].errorCounts.minorErrors))*100)}% reduction`:"-"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.reliability)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.reliabilityRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.benevolence)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.benevolenceRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.goalAlignment)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${U?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),U?s.jsx("div",{className:"space-y-3",children:A==null?void 0:A.criticalAlerts.map((v,X)=>s.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[s.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",v.number,": ",v.title," (BLOCKING ISSUE)"]}),s.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Status:"})," ",v.status]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Impact:"})," ",v.impact]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Details:"})," ",v.details]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Action Required:"})," ",v.actionRequired]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Consequence:"})," ",v.consequence]})]})]},X))}):s.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),s.jsxs("button",{onClick:()=>E(!w),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[s.jsx(vc,{size:12}),w?"Hide Full":"Show Full"]})]}),w?s.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:_?s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Summary:"}),s.jsx("p",{children:_.summary||"No summary available."})]}),_.majorIssues&&_.majorIssues.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-red-600",children:"Major Issues:"}),s.jsx("ul",{className:"list-disc list-inside",children:_.majorIssues.map((v,X)=>s.jsx("li",{children:v},X))})]}),_.suggestions&&_.suggestions.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Suggestions:"}),s.jsx("ul",{className:"list-disc list-inside",children:_.suggestions.map((v,X)=>s.jsx("li",{children:v},X))})]})]}):s.jsx("p",{children:l||"No feedback generated."})}):s.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(_==null?void 0:_.summary)||l||"No feedback generated."})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${ae?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),ae?s.jsxs("div",{children:[s.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",c+1]}),s.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",H?"Review scores below threshold (< 4)":$>0?`${$} major error(s) remaining`:G?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),s.jsxs("div",{className:"mt-2 text-sm",children:[s.jsx("p",{className:"font-medium",children:"Priority actions:"}),s.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:A==null?void 0:A.errorDetails.majorErrors.slice(0,3).map((v,X)=>s.jsx("li",{children:v},X))})]})]}):s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),s.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),s.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[s.jsxs("li",{children:["Average review score: ",j.toFixed(1),"/5"]}),s.jsx("li",{children:"All trustworthiness scores ≥ 5"}),s.jsx("li",{children:"No major errors remaining"}),s.jsx("li",{children:"No critical alerts"})]})]})]}),s.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),s.jsx("li",{children:"• Current feedback will guide improvements"}),s.jsx("li",{children:"• Add your directives below"})]})]}),s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISfinalize"}),s.jsx("li",{children:"• Paper will be prepared for submission"}),s.jsx("li",{children:"• No further revisions will be made"})]})]})]})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),s.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:b,onChange:v=>h(v.target.value)})]}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("button",{onClick:()=>m("revise",b),disabled:u,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),s.jsx("button",{onClick:()=>m("finalize"),disabled:u,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]})]}),s.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[s.jsxs("button",{onClick:()=>S(!C),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(vc,{size:14})," ",C?"Hide":"View"," Paper Draft"]}),s.jsxs("button",{onClick:I,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(js,{size:14})," Download (.tex)"]})]}),C&&D&&s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",o,"):"]}),s.jsx("div",{className:"max-h-96 overflow-y-auto",children:s.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:D})})]})]})},Xy=({logs:c,isProcessing:o,currentPaperVersion:l,paperContent:u,onAbort:p,onRestart:d})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Revising Paper (v",l," → v",(l||0)+1,")"]}),s.jsx(kc,{stageName:"Reviser",isProcessing:o,canAbort:!0,canRestart:!o,onAbort:p||(()=>{}),onRestart:d||(()=>{})})]}),s.jsx(ci,{logs:c,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),s.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:u?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:u}):s.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function Ts(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var fc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var tp;function Zy(){return tp||(tp=1,(function(c,o){(function(l){c.exports=l()})(function(){return(function l(u,p,d){function m(h,w){if(!p[h]){if(!u[h]){var E=typeof Ts=="function"&&Ts;if(!w&&E)return E(h,!0);if(g)return g(h,!0);var C=new Error("Cannot find module '"+h+"'");throw C.code="MODULE_NOT_FOUND",C}var S=p[h]={exports:{}};u[h][0].call(S.exports,function(R){var y=u[h][1][R];return m(y||R)},S,S.exports,l,u,p,d)}return p[h].exports}for(var g=typeof Ts=="function"&&Ts,b=0;b<d.length;b++)m(d[b]);return m})({1:[function(l,u,p){var d=l("./utils"),m=l("./support"),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";p.encode=function(b){for(var h,w,E,C,S,R,y,A=[],_=0,I=b.length,D=I,B=d.getTypeOf(b)!=="string";_<b.length;)D=I-_,E=B?(h=b[_++],w=_<I?b[_++]:0,_<I?b[_++]:0):(h=b.charCodeAt(_++),w=_<I?b.charCodeAt(_++):0,_<I?b.charCodeAt(_++):0),C=h>>2,S=(3&h)<<4|w>>4,R=1<D?(15&w)<<2|E>>6:64,y=2<D?63&E:64,A.push(g.charAt(C)+g.charAt(S)+g.charAt(R)+g.charAt(y));return A.join("")},p.decode=function(b){var h,w,E,C,S,R,y=0,A=0,_="data:";if(b.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var I,D=3*(b=b.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(b.charAt(b.length-1)===g.charAt(64)&&D--,b.charAt(b.length-2)===g.charAt(64)&&D--,D%1!=0)throw new Error("Invalid base64 input, bad content length.");for(I=m.uint8array?new Uint8Array(0|D):new Array(0|D);y<b.length;)h=g.indexOf(b.charAt(y++))<<2|(C=g.indexOf(b.charAt(y++)))>>4,w=(15&C)<<4|(S=g.indexOf(b.charAt(y++)))>>2,E=(3&S)<<6|(R=g.indexOf(b.charAt(y++))),I[A++]=h,S!==64&&(I[A++]=w),R!==64&&(I[A++]=E);return I}},{"./support":30,"./utils":32}],2:[function(l,u,p){var d=l("./external"),m=l("./stream/DataWorker"),g=l("./stream/Crc32Probe"),b=l("./stream/DataLengthProbe");function h(w,E,C,S,R){this.compressedSize=w,this.uncompressedSize=E,this.crc32=C,this.compression=S,this.compressedContent=R}h.prototype={getContentWorker:function(){var w=new m(d.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new b("data_length")),E=this;return w.on("end",function(){if(this.streamInfo.data_length!==E.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new m(d.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(w,E,C){return w.pipe(new g).pipe(new b("uncompressedSize")).pipe(E.compressWorker(C)).pipe(new b("compressedSize")).withStreamInfo("compression",E)},u.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,u,p){var d=l("./stream/GenericWorker");p.STORE={magic:"\0\0",compressWorker:function(){return new d("STORE compression")},uncompressWorker:function(){return new d("STORE decompression")}},p.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,u,p){var d=l("./utils"),m=(function(){for(var g,b=[],h=0;h<256;h++){g=h;for(var w=0;w<8;w++)g=1&g?3988292384^g>>>1:g>>>1;b[h]=g}return b})();u.exports=function(g,b){return g!==void 0&&g.length?d.getTypeOf(g)!=="string"?(function(h,w,E,C){var S=m,R=C+E;h^=-1;for(var y=C;y<R;y++)h=h>>>8^S[255&(h^w[y])];return-1^h})(0|b,g,g.length,0):(function(h,w,E,C){var S=m,R=C+E;h^=-1;for(var y=C;y<R;y++)h=h>>>8^S[255&(h^w.charCodeAt(y))];return-1^h})(0|b,g,g.length,0):0}},{"./utils":32}],5:[function(l,u,p){p.base64=!1,p.binary=!1,p.dir=!1,p.createFolders=!0,p.date=null,p.compression=null,p.compressionOptions=null,p.comment=null,p.unixPermissions=null,p.dosPermissions=null},{}],6:[function(l,u,p){var d=null;d=typeof Promise<"u"?Promise:l("lie"),u.exports={Promise:d}},{lie:37}],7:[function(l,u,p){var d=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",m=l("pako"),g=l("./utils"),b=l("./stream/GenericWorker"),h=d?"uint8array":"array";function w(E,C){b.call(this,"FlateWorker/"+E),this._pako=null,this._pakoAction=E,this._pakoOptions=C,this.meta={}}p.magic="\b\0",g.inherits(w,b),w.prototype.processChunk=function(E){this.meta=E.meta,this._pako===null&&this._createPako(),this._pako.push(g.transformTo(h,E.data),!1)},w.prototype.flush=function(){b.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){b.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new m[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var E=this;this._pako.onData=function(C){E.push({data:C,meta:E.meta})}},p.compressWorker=function(E){return new w("Deflate",E)},p.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,u,p){function d(S,R){var y,A="";for(y=0;y<R;y++)A+=String.fromCharCode(255&S),S>>>=8;return A}function m(S,R,y,A,_,I){var D,B,j=S.file,$=S.compression,H=I!==h.utf8encode,G=g.transformTo("string",I(j.name)),U=g.transformTo("string",h.utf8encode(j.name)),ae=j.comment,te=g.transformTo("string",I(ae)),k=g.transformTo("string",h.utf8encode(ae)),Z=U.length!==j.name.length,v=k.length!==ae.length,X="",P="",V="",de=j.dir,ee=j.date,ge={crc32:0,compressedSize:0,uncompressedSize:0};R&&!y||(ge.crc32=S.crc32,ge.compressedSize=S.compressedSize,ge.uncompressedSize=S.uncompressedSize);var N=0;R&&(N|=8),H||!Z&&!v||(N|=2048);var L=0,se=0;de&&(L|=16),_==="UNIX"?(se=798,L|=(function(oe,Se){var _e=oe;return oe||(_e=Se?16893:33204),(65535&_e)<<16})(j.unixPermissions,de)):(se=20,L|=(function(oe){return 63&(oe||0)})(j.dosPermissions)),D=ee.getUTCHours(),D<<=6,D|=ee.getUTCMinutes(),D<<=5,D|=ee.getUTCSeconds()/2,B=ee.getUTCFullYear()-1980,B<<=4,B|=ee.getUTCMonth()+1,B<<=5,B|=ee.getUTCDate(),Z&&(P=d(1,1)+d(w(G),4)+U,X+="up"+d(P.length,2)+P),v&&(V=d(1,1)+d(w(te),4)+k,X+="uc"+d(V.length,2)+V);var ie="";return ie+=`
\0`,ie+=d(N,2),ie+=$.magic,ie+=d(D,2),ie+=d(B,2),ie+=d(ge.crc32,4),ie+=d(ge.compressedSize,4),ie+=d(ge.uncompressedSize,4),ie+=d(G.length,2),ie+=d(X.length,2),{fileRecord:E.LOCAL_FILE_HEADER+ie+G+X,dirRecord:E.CENTRAL_FILE_HEADER+d(se,2)+ie+d(te.length,2)+"\0\0\0\0"+d(L,4)+d(A,4)+G+X+te}}var g=l("../utils"),b=l("../stream/GenericWorker"),h=l("../utf8"),w=l("../crc32"),E=l("../signature");function C(S,R,y,A){b.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=R,this.zipPlatform=y,this.encodeFileName=A,this.streamFiles=S,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}g.inherits(C,b),C.prototype.push=function(S){var R=S.meta.percent||0,y=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(S):(this.bytesWritten+=S.data.length,b.prototype.push.call(this,{data:S.data,meta:{currentFile:this.currentFile,percent:y?(R+100*(y-A-1))/y:100}}))},C.prototype.openedSource=function(S){this.currentSourceOffset=this.bytesWritten,this.currentFile=S.file.name;var R=this.streamFiles&&!S.file.dir;if(R){var y=m(S,R,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},C.prototype.closedSource=function(S){this.accumulate=!1;var R=this.streamFiles&&!S.file.dir,y=m(S,R,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),R)this.push({data:(function(A){return E.DATA_DESCRIPTOR+d(A.crc32,4)+d(A.compressedSize,4)+d(A.uncompressedSize,4)})(S),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},C.prototype.flush=function(){for(var S=this.bytesWritten,R=0;R<this.dirRecords.length;R++)this.push({data:this.dirRecords[R],meta:{percent:100}});var y=this.bytesWritten-S,A=(function(_,I,D,B,j){var $=g.transformTo("string",j(B));return E.CENTRAL_DIRECTORY_END+"\0\0\0\0"+d(_,2)+d(_,2)+d(I,4)+d(D,4)+d($.length,2)+$})(this.dirRecords.length,y,S,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},C.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},C.prototype.registerPrevious=function(S){this._sources.push(S);var R=this;return S.on("data",function(y){R.processChunk(y)}),S.on("end",function(){R.closedSource(R.previous.streamInfo),R._sources.length?R.prepareNextSource():R.end()}),S.on("error",function(y){R.error(y)}),this},C.prototype.resume=function(){return!!b.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},C.prototype.error=function(S){var R=this._sources;if(!b.prototype.error.call(this,S))return!1;for(var y=0;y<R.length;y++)try{R[y].error(S)}catch{}return!0},C.prototype.lock=function(){b.prototype.lock.call(this);for(var S=this._sources,R=0;R<S.length;R++)S[R].lock()},u.exports=C},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,u,p){var d=l("../compressions"),m=l("./ZipFileWorker");p.generateWorker=function(g,b,h){var w=new m(b.streamFiles,h,b.platform,b.encodeFileName),E=0;try{g.forEach(function(C,S){E++;var R=(function(I,D){var B=I||D,j=d[B];if(!j)throw new Error(B+" is not a valid compression method !");return j})(S.options.compression,b.compression),y=S.options.compressionOptions||b.compressionOptions||{},A=S.dir,_=S.date;S._compressWorker(R,y).withStreamInfo("file",{name:C,dir:A,date:_,comment:S.comment||"",unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions}).pipe(w)}),w.entriesCount=E}catch(C){w.error(C)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,u,p){function d(){if(!(this instanceof d))return new d;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var m=new d;for(var g in this)typeof this[g]!="function"&&(m[g]=this[g]);return m}}(d.prototype=l("./object")).loadAsync=l("./load"),d.support=l("./support"),d.defaults=l("./defaults"),d.version="3.10.1",d.loadAsync=function(m,g){return new d().loadAsync(m,g)},d.external=l("./external"),u.exports=d},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,u,p){var d=l("./utils"),m=l("./external"),g=l("./utf8"),b=l("./zipEntries"),h=l("./stream/Crc32Probe"),w=l("./nodejsUtils");function E(C){return new m.Promise(function(S,R){var y=C.decompressed.getContentWorker().pipe(new h);y.on("error",function(A){R(A)}).on("end",function(){y.streamInfo.crc32!==C.decompressed.crc32?R(new Error("Corrupted zip : CRC32 mismatch")):S()}).resume()})}u.exports=function(C,S){var R=this;return S=d.extend(S||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:g.utf8decode}),w.isNode&&w.isStream(C)?m.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):d.prepareContent("the loaded zip file",C,!0,S.optimizedBinaryString,S.base64).then(function(y){var A=new b(S);return A.load(y),A}).then(function(y){var A=[m.Promise.resolve(y)],_=y.files;if(S.checkCRC32)for(var I=0;I<_.length;I++)A.push(E(_[I]));return m.Promise.all(A)}).then(function(y){for(var A=y.shift(),_=A.files,I=0;I<_.length;I++){var D=_[I],B=D.fileNameStr,j=d.resolve(D.fileNameStr);R.file(j,D.decompressed,{binary:!0,optimizedBinaryString:!0,date:D.date,dir:D.dir,comment:D.fileCommentStr.length?D.fileCommentStr:null,unixPermissions:D.unixPermissions,dosPermissions:D.dosPermissions,createFolders:S.createFolders}),D.dir||(R.file(j).unsafeOriginalName=B)}return A.zipComment.length&&(R.comment=A.zipComment),R})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,u,p){var d=l("../utils"),m=l("../stream/GenericWorker");function g(b,h){m.call(this,"Nodejs stream input adapter for "+b),this._upstreamEnded=!1,this._bindStream(h)}d.inherits(g,m),g.prototype._bindStream=function(b){var h=this;(this._stream=b).pause(),b.on("data",function(w){h.push({data:w,meta:{percent:0}})}).on("error",function(w){h.isPaused?this.generatedError=w:h.error(w)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},g.prototype.pause=function(){return!!m.prototype.pause.call(this)&&(this._stream.pause(),!0)},g.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},u.exports=g},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,u,p){var d=l("readable-stream").Readable;function m(g,b,h){d.call(this,b),this._helper=g;var w=this;g.on("data",function(E,C){w.push(E)||w._helper.pause(),h&&h(C)}).on("error",function(E){w.emit("error",E)}).on("end",function(){w.push(null)})}l("../utils").inherits(m,d),m.prototype._read=function(){this._helper.resume()},u.exports=m},{"../utils":32,"readable-stream":16}],14:[function(l,u,p){u.exports={isNode:typeof Buffer<"u",newBufferFrom:function(d,m){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(d,m);if(typeof d=="number")throw new Error('The "data" argument must not be a number');return new Buffer(d,m)},allocBuffer:function(d){if(Buffer.alloc)return Buffer.alloc(d);var m=new Buffer(d);return m.fill(0),m},isBuffer:function(d){return Buffer.isBuffer(d)},isStream:function(d){return d&&typeof d.on=="function"&&typeof d.pause=="function"&&typeof d.resume=="function"}}},{}],15:[function(l,u,p){function d(j,$,H){var G,U=g.getTypeOf($),ae=g.extend(H||{},w);ae.date=ae.date||new Date,ae.compression!==null&&(ae.compression=ae.compression.toUpperCase()),typeof ae.unixPermissions=="string"&&(ae.unixPermissions=parseInt(ae.unixPermissions,8)),ae.unixPermissions&&16384&ae.unixPermissions&&(ae.dir=!0),ae.dosPermissions&&16&ae.dosPermissions&&(ae.dir=!0),ae.dir&&(j=_(j)),ae.createFolders&&(G=A(j))&&I.call(this,G,!0);var te=U==="string"&&ae.binary===!1&&ae.base64===!1;H&&H.binary!==void 0||(ae.binary=!te),($ instanceof E&&$.uncompressedSize===0||ae.dir||!$||$.length===0)&&(ae.base64=!1,ae.binary=!0,$="",ae.compression="STORE",U="string");var k=null;k=$ instanceof E||$ instanceof b?$:R.isNode&&R.isStream($)?new y(j,$):g.prepareContent(j,$,ae.binary,ae.optimizedBinaryString,ae.base64);var Z=new C(j,k,ae);this.files[j]=Z}var m=l("./utf8"),g=l("./utils"),b=l("./stream/GenericWorker"),h=l("./stream/StreamHelper"),w=l("./defaults"),E=l("./compressedObject"),C=l("./zipObject"),S=l("./generate"),R=l("./nodejsUtils"),y=l("./nodejs/NodejsStreamInputAdapter"),A=function(j){j.slice(-1)==="/"&&(j=j.substring(0,j.length-1));var $=j.lastIndexOf("/");return 0<$?j.substring(0,$):""},_=function(j){return j.slice(-1)!=="/"&&(j+="/"),j},I=function(j,$){return $=$!==void 0?$:w.createFolders,j=_(j),this.files[j]||d.call(this,j,null,{dir:!0,createFolders:$}),this.files[j]};function D(j){return Object.prototype.toString.call(j)==="[object RegExp]"}var B={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(j){var $,H,G;for($ in this.files)G=this.files[$],(H=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&j(H,G)},filter:function(j){var $=[];return this.forEach(function(H,G){j(H,G)&&$.push(G)}),$},file:function(j,$,H){if(arguments.length!==1)return j=this.root+j,d.call(this,j,$,H),this;if(D(j)){var G=j;return this.filter(function(ae,te){return!te.dir&&G.test(ae)})}var U=this.files[this.root+j];return U&&!U.dir?U:null},folder:function(j){if(!j)return this;if(D(j))return this.filter(function(U,ae){return ae.dir&&j.test(U)});var $=this.root+j,H=I.call(this,$),G=this.clone();return G.root=H.name,G},remove:function(j){j=this.root+j;var $=this.files[j];if($||(j.slice(-1)!=="/"&&(j+="/"),$=this.files[j]),$&&!$.dir)delete this.files[j];else for(var H=this.filter(function(U,ae){return ae.name.slice(0,j.length)===j}),G=0;G<H.length;G++)delete this.files[H[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(j){var $,H={};try{if((H=g.extend(j||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m.utf8encode})).type=H.type.toLowerCase(),H.compression=H.compression.toUpperCase(),H.type==="binarystring"&&(H.type="string"),!H.type)throw new Error("No output type specified.");g.checkSupport(H.type),H.platform!=="darwin"&&H.platform!=="freebsd"&&H.platform!=="linux"&&H.platform!=="sunos"||(H.platform="UNIX"),H.platform==="win32"&&(H.platform="DOS");var G=H.comment||this.comment||"";$=S.generateWorker(this,H,G)}catch(U){($=new b("error")).error(U)}return new h($,H.type||"string",H.mimeType)},generateAsync:function(j,$){return this.generateInternalStream(j).accumulate($)},generateNodeStream:function(j,$){return(j=j||{}).type||(j.type="nodebuffer"),this.generateInternalStream(j).toNodejsStream($)}};u.exports=B},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,u,p){u.exports=l("stream")},{stream:void 0}],17:[function(l,u,p){var d=l("./DataReader");function m(g){d.call(this,g);for(var b=0;b<this.data.length;b++)g[b]=255&g[b]}l("../utils").inherits(m,d),m.prototype.byteAt=function(g){return this.data[this.zero+g]},m.prototype.lastIndexOfSignature=function(g){for(var b=g.charCodeAt(0),h=g.charCodeAt(1),w=g.charCodeAt(2),E=g.charCodeAt(3),C=this.length-4;0<=C;--C)if(this.data[C]===b&&this.data[C+1]===h&&this.data[C+2]===w&&this.data[C+3]===E)return C-this.zero;return-1},m.prototype.readAndCheckSignature=function(g){var b=g.charCodeAt(0),h=g.charCodeAt(1),w=g.charCodeAt(2),E=g.charCodeAt(3),C=this.readData(4);return b===C[0]&&h===C[1]&&w===C[2]&&E===C[3]},m.prototype.readData=function(g){if(this.checkOffset(g),g===0)return[];var b=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,b},u.exports=m},{"../utils":32,"./DataReader":18}],18:[function(l,u,p){var d=l("../utils");function m(g){this.data=g,this.length=g.length,this.index=0,this.zero=0}m.prototype={checkOffset:function(g){this.checkIndex(this.index+g)},checkIndex:function(g){if(this.length<this.zero+g||g<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+g+"). Corrupted zip ?")},setIndex:function(g){this.checkIndex(g),this.index=g},skip:function(g){this.setIndex(this.index+g)},byteAt:function(){},readInt:function(g){var b,h=0;for(this.checkOffset(g),b=this.index+g-1;b>=this.index;b--)h=(h<<8)+this.byteAt(b);return this.index+=g,h},readString:function(g){return d.transformTo("string",this.readData(g))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var g=this.readInt(4);return new Date(Date.UTC(1980+(g>>25&127),(g>>21&15)-1,g>>16&31,g>>11&31,g>>5&63,(31&g)<<1))}},u.exports=m},{"../utils":32}],19:[function(l,u,p){var d=l("./Uint8ArrayReader");function m(g){d.call(this,g)}l("../utils").inherits(m,d),m.prototype.readData=function(g){this.checkOffset(g);var b=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,b},u.exports=m},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,u,p){var d=l("./DataReader");function m(g){d.call(this,g)}l("../utils").inherits(m,d),m.prototype.byteAt=function(g){return this.data.charCodeAt(this.zero+g)},m.prototype.lastIndexOfSignature=function(g){return this.data.lastIndexOf(g)-this.zero},m.prototype.readAndCheckSignature=function(g){return g===this.readData(4)},m.prototype.readData=function(g){this.checkOffset(g);var b=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,b},u.exports=m},{"../utils":32,"./DataReader":18}],21:[function(l,u,p){var d=l("./ArrayReader");function m(g){d.call(this,g)}l("../utils").inherits(m,d),m.prototype.readData=function(g){if(this.checkOffset(g),g===0)return new Uint8Array(0);var b=this.data.subarray(this.zero+this.index,this.zero+this.index+g);return this.index+=g,b},u.exports=m},{"../utils":32,"./ArrayReader":17}],22:[function(l,u,p){var d=l("../utils"),m=l("../support"),g=l("./ArrayReader"),b=l("./StringReader"),h=l("./NodeBufferReader"),w=l("./Uint8ArrayReader");u.exports=function(E){var C=d.getTypeOf(E);return d.checkSupport(C),C!=="string"||m.uint8array?C==="nodebuffer"?new h(E):m.uint8array?new w(d.transformTo("uint8array",E)):new g(d.transformTo("array",E)):new b(E)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,u,p){p.LOCAL_FILE_HEADER="PK",p.CENTRAL_FILE_HEADER="PK",p.CENTRAL_DIRECTORY_END="PK",p.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",p.ZIP64_CENTRAL_DIRECTORY_END="PK",p.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,u,p){var d=l("./GenericWorker"),m=l("../utils");function g(b){d.call(this,"ConvertWorker to "+b),this.destType=b}m.inherits(g,d),g.prototype.processChunk=function(b){this.push({data:m.transformTo(this.destType,b.data),meta:b.meta})},u.exports=g},{"../utils":32,"./GenericWorker":28}],25:[function(l,u,p){var d=l("./GenericWorker"),m=l("../crc32");function g(){d.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(g,d),g.prototype.processChunk=function(b){this.streamInfo.crc32=m(b.data,this.streamInfo.crc32||0),this.push(b)},u.exports=g},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,u,p){var d=l("../utils"),m=l("./GenericWorker");function g(b){m.call(this,"DataLengthProbe for "+b),this.propName=b,this.withStreamInfo(b,0)}d.inherits(g,m),g.prototype.processChunk=function(b){if(b){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+b.data.length}m.prototype.processChunk.call(this,b)},u.exports=g},{"../utils":32,"./GenericWorker":28}],27:[function(l,u,p){var d=l("../utils"),m=l("./GenericWorker");function g(b){m.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,b.then(function(w){h.dataIsReady=!0,h.data=w,h.max=w&&w.length||0,h.type=d.getTypeOf(w),h.isPaused||h._tickAndRepeat()},function(w){h.error(w)})}d.inherits(g,m),g.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this.data=null},g.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,d.delay(this._tickAndRepeat,[],this)),!0)},g.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(d.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},g.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var b=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":b=this.data.substring(this.index,h);break;case"uint8array":b=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":b=this.data.slice(this.index,h)}return this.index=h,this.push({data:b,meta:{percent:this.max?this.index/this.max*100:0}})},u.exports=g},{"../utils":32,"./GenericWorker":28}],28:[function(l,u,p){function d(m){this.name=m||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}d.prototype={push:function(m){this.emit("data",m)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(m){this.emit("error",m)}return!0},error:function(m){return!this.isFinished&&(this.isPaused?this.generatedError=m:(this.isFinished=!0,this.emit("error",m),this.previous&&this.previous.error(m),this.cleanUp()),!0)},on:function(m,g){return this._listeners[m].push(g),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(m,g){if(this._listeners[m])for(var b=0;b<this._listeners[m].length;b++)this._listeners[m][b].call(this,g)},pipe:function(m){return m.registerPrevious(this)},registerPrevious:function(m){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=m.streamInfo,this.mergeStreamInfo(),this.previous=m;var g=this;return m.on("data",function(b){g.processChunk(b)}),m.on("end",function(){g.end()}),m.on("error",function(b){g.error(b)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var m=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),m=!0),this.previous&&this.previous.resume(),!m},flush:function(){},processChunk:function(m){this.push(m)},withStreamInfo:function(m,g){return this.extraStreamInfo[m]=g,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var m in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,m)&&(this.streamInfo[m]=this.extraStreamInfo[m])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var m="Worker "+this.name;return this.previous?this.previous+" -> "+m:m}},u.exports=d},{}],29:[function(l,u,p){var d=l("../utils"),m=l("./ConvertWorker"),g=l("./GenericWorker"),b=l("../base64"),h=l("../support"),w=l("../external"),E=null;if(h.nodestream)try{E=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function C(R,y){return new w.Promise(function(A,_){var I=[],D=R._internalType,B=R._outputType,j=R._mimeType;R.on("data",function($,H){I.push($),y&&y(H)}).on("error",function($){I=[],_($)}).on("end",function(){try{var $=(function(H,G,U){switch(H){case"blob":return d.newBlob(d.transformTo("arraybuffer",G),U);case"base64":return b.encode(G);default:return d.transformTo(H,G)}})(B,(function(H,G){var U,ae=0,te=null,k=0;for(U=0;U<G.length;U++)k+=G[U].length;switch(H){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(te=new Uint8Array(k),U=0;U<G.length;U++)te.set(G[U],ae),ae+=G[U].length;return te;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+H+"'")}})(D,I),j);A($)}catch(H){_(H)}I=[]}).resume()})}function S(R,y,A){var _=y;switch(y){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=y,this._mimeType=A,d.checkSupport(_),this._worker=R.pipe(new m(_)),R.lock()}catch(I){this._worker=new g("error"),this._worker.error(I)}}S.prototype={accumulate:function(R){return C(this,R)},on:function(R,y){var A=this;return R==="data"?this._worker.on(R,function(_){y.call(A,_.data,_.meta)}):this._worker.on(R,function(){d.delay(y,arguments,A)}),this},resume:function(){return d.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(R){if(d.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new E(this,{objectMode:this._outputType!=="nodebuffer"},R)}},u.exports=S},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,u,p){if(p.base64=!0,p.array=!0,p.string=!0,p.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",p.nodebuffer=typeof Buffer<"u",p.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")p.blob=!1;else{var d=new ArrayBuffer(0);try{p.blob=new Blob([d],{type:"application/zip"}).size===0}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);m.append(d),p.blob=m.getBlob("application/zip").size===0}catch{p.blob=!1}}}try{p.nodestream=!!l("readable-stream").Readable}catch{p.nodestream=!1}},{"readable-stream":16}],31:[function(l,u,p){for(var d=l("./utils"),m=l("./support"),g=l("./nodejsUtils"),b=l("./stream/GenericWorker"),h=new Array(256),w=0;w<256;w++)h[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;h[254]=h[254]=1;function E(){b.call(this,"utf-8 decode"),this.leftOver=null}function C(){b.call(this,"utf-8 encode")}p.utf8encode=function(S){return m.nodebuffer?g.newBufferFrom(S,"utf-8"):(function(R){var y,A,_,I,D,B=R.length,j=0;for(I=0;I<B;I++)(64512&(A=R.charCodeAt(I)))==55296&&I+1<B&&(64512&(_=R.charCodeAt(I+1)))==56320&&(A=65536+(A-55296<<10)+(_-56320),I++),j+=A<128?1:A<2048?2:A<65536?3:4;for(y=m.uint8array?new Uint8Array(j):new Array(j),I=D=0;D<j;I++)(64512&(A=R.charCodeAt(I)))==55296&&I+1<B&&(64512&(_=R.charCodeAt(I+1)))==56320&&(A=65536+(A-55296<<10)+(_-56320),I++),A<128?y[D++]=A:(A<2048?y[D++]=192|A>>>6:(A<65536?y[D++]=224|A>>>12:(y[D++]=240|A>>>18,y[D++]=128|A>>>12&63),y[D++]=128|A>>>6&63),y[D++]=128|63&A);return y})(S)},p.utf8decode=function(S){return m.nodebuffer?d.transformTo("nodebuffer",S).toString("utf-8"):(function(R){var y,A,_,I,D=R.length,B=new Array(2*D);for(y=A=0;y<D;)if((_=R[y++])<128)B[A++]=_;else if(4<(I=h[_]))B[A++]=65533,y+=I-1;else{for(_&=I===2?31:I===3?15:7;1<I&&y<D;)_=_<<6|63&R[y++],I--;1<I?B[A++]=65533:_<65536?B[A++]=_:(_-=65536,B[A++]=55296|_>>10&1023,B[A++]=56320|1023&_)}return B.length!==A&&(B.subarray?B=B.subarray(0,A):B.length=A),d.applyFromCharCode(B)})(S=d.transformTo(m.uint8array?"uint8array":"array",S))},d.inherits(E,b),E.prototype.processChunk=function(S){var R=d.transformTo(m.uint8array?"uint8array":"array",S.data);if(this.leftOver&&this.leftOver.length){if(m.uint8array){var y=R;(R=new Uint8Array(y.length+this.leftOver.length)).set(this.leftOver,0),R.set(y,this.leftOver.length)}else R=this.leftOver.concat(R);this.leftOver=null}var A=(function(I,D){var B;for((D=D||I.length)>I.length&&(D=I.length),B=D-1;0<=B&&(192&I[B])==128;)B--;return B<0||B===0?D:B+h[I[B]]>D?B:D})(R),_=R;A!==R.length&&(m.uint8array?(_=R.subarray(0,A),this.leftOver=R.subarray(A,R.length)):(_=R.slice(0,A),this.leftOver=R.slice(A,R.length))),this.push({data:p.utf8decode(_),meta:S.meta})},E.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:p.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},p.Utf8DecodeWorker=E,d.inherits(C,b),C.prototype.processChunk=function(S){this.push({data:p.utf8encode(S.data),meta:S.meta})},p.Utf8EncodeWorker=C},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,u,p){var d=l("./support"),m=l("./base64"),g=l("./nodejsUtils"),b=l("./external");function h(y){return y}function w(y,A){for(var _=0;_<y.length;++_)A[_]=255&y.charCodeAt(_);return A}l("setimmediate"),p.newBlob=function(y,A){p.checkSupport("blob");try{return new Blob([y],{type:A})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(y),_.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var E={stringifyByChunk:function(y,A,_){var I=[],D=0,B=y.length;if(B<=_)return String.fromCharCode.apply(null,y);for(;D<B;)A==="array"||A==="nodebuffer"?I.push(String.fromCharCode.apply(null,y.slice(D,Math.min(D+_,B)))):I.push(String.fromCharCode.apply(null,y.subarray(D,Math.min(D+_,B)))),D+=_;return I.join("")},stringifyByChar:function(y){for(var A="",_=0;_<y.length;_++)A+=String.fromCharCode(y[_]);return A},applyCanBeUsed:{uint8array:(function(){try{return d.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return d.nodebuffer&&String.fromCharCode.apply(null,g.allocBuffer(1)).length===1}catch{return!1}})()}};function C(y){var A=65536,_=p.getTypeOf(y),I=!0;if(_==="uint8array"?I=E.applyCanBeUsed.uint8array:_==="nodebuffer"&&(I=E.applyCanBeUsed.nodebuffer),I)for(;1<A;)try{return E.stringifyByChunk(y,_,A)}catch{A=Math.floor(A/2)}return E.stringifyByChar(y)}function S(y,A){for(var _=0;_<y.length;_++)A[_]=y[_];return A}p.applyFromCharCode=C;var R={};R.string={string:h,array:function(y){return w(y,new Array(y.length))},arraybuffer:function(y){return R.string.uint8array(y).buffer},uint8array:function(y){return w(y,new Uint8Array(y.length))},nodebuffer:function(y){return w(y,g.allocBuffer(y.length))}},R.array={string:C,array:h,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return g.newBufferFrom(y)}},R.arraybuffer={string:function(y){return C(new Uint8Array(y))},array:function(y){return S(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:h,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return g.newBufferFrom(new Uint8Array(y))}},R.uint8array={string:C,array:function(y){return S(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:h,nodebuffer:function(y){return g.newBufferFrom(y)}},R.nodebuffer={string:C,array:function(y){return S(y,new Array(y.length))},arraybuffer:function(y){return R.nodebuffer.uint8array(y).buffer},uint8array:function(y){return S(y,new Uint8Array(y.length))},nodebuffer:h},p.transformTo=function(y,A){if(A=A||"",!y)return A;p.checkSupport(y);var _=p.getTypeOf(A);return R[_][y](A)},p.resolve=function(y){for(var A=y.split("/"),_=[],I=0;I<A.length;I++){var D=A[I];D==="."||D===""&&I!==0&&I!==A.length-1||(D===".."?_.pop():_.push(D))}return _.join("/")},p.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":d.nodebuffer&&g.isBuffer(y)?"nodebuffer":d.uint8array&&y instanceof Uint8Array?"uint8array":d.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},p.checkSupport=function(y){if(!d[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},p.MAX_VALUE_16BITS=65535,p.MAX_VALUE_32BITS=-1,p.pretty=function(y){var A,_,I="";for(_=0;_<(y||"").length;_++)I+="\\x"+((A=y.charCodeAt(_))<16?"0":"")+A.toString(16).toUpperCase();return I},p.delay=function(y,A,_){setImmediate(function(){y.apply(_||null,A||[])})},p.inherits=function(y,A){function _(){}_.prototype=A.prototype,y.prototype=new _},p.extend=function(){var y,A,_={};for(y=0;y<arguments.length;y++)for(A in arguments[y])Object.prototype.hasOwnProperty.call(arguments[y],A)&&_[A]===void 0&&(_[A]=arguments[y][A]);return _},p.prepareContent=function(y,A,_,I,D){return b.Promise.resolve(A).then(function(B){return d.blob&&(B instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(B))!==-1)&&typeof FileReader<"u"?new b.Promise(function(j,$){var H=new FileReader;H.onload=function(G){j(G.target.result)},H.onerror=function(G){$(G.target.error)},H.readAsArrayBuffer(B)}):B}).then(function(B){var j=p.getTypeOf(B);return j?(j==="arraybuffer"?B=p.transformTo("uint8array",B):j==="string"&&(D?B=m.decode(B):_&&I!==!0&&(B=(function($){return w($,d.uint8array?new Uint8Array($.length):new Array($.length))})(B))),B):b.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,u,p){var d=l("./reader/readerFor"),m=l("./utils"),g=l("./signature"),b=l("./zipEntry"),h=l("./support");function w(E){this.files=[],this.loadOptions=E}w.prototype={checkSignature:function(E){if(!this.reader.readAndCheckSignature(E)){this.reader.index-=4;var C=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+m.pretty(C)+", expected "+m.pretty(E)+")")}},isSignature:function(E,C){var S=this.reader.index;this.reader.setIndex(E);var R=this.reader.readString(4)===C;return this.reader.setIndex(S),R},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var E=this.reader.readData(this.zipCommentLength),C=h.uint8array?"uint8array":"array",S=m.transformTo(C,E);this.zipComment=this.loadOptions.decodeFileName(S)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var E,C,S,R=this.zip64EndOfCentralSize-44;0<R;)E=this.reader.readInt(2),C=this.reader.readInt(4),S=this.reader.readData(C),this.zip64ExtensibleData[E]={id:E,length:C,value:S}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var E,C;for(E=0;E<this.files.length;E++)C=this.files[E],this.reader.setIndex(C.localHeaderOffset),this.checkSignature(g.LOCAL_FILE_HEADER),C.readLocalPart(this.reader),C.handleUTF8(),C.processAttributes()},readCentralDir:function(){var E;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);)(E=new b({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(E);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var E=this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END);if(E<0)throw this.isSignature(0,g.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(E);var C=E;if(this.checkSignature(g.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===m.MAX_VALUE_16BITS||this.diskWithCentralDirStart===m.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===m.MAX_VALUE_16BITS||this.centralDirRecords===m.MAX_VALUE_16BITS||this.centralDirSize===m.MAX_VALUE_32BITS||this.centralDirOffset===m.MAX_VALUE_32BITS){if(this.zip64=!0,(E=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(E),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,g.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var S=this.centralDirOffset+this.centralDirSize;this.zip64&&(S+=20,S+=12+this.zip64EndOfCentralSize);var R=C-S;if(0<R)this.isSignature(C,g.CENTRAL_FILE_HEADER)||(this.reader.zero=R);else if(R<0)throw new Error("Corrupted zip: missing "+Math.abs(R)+" bytes.")},prepareReader:function(E){this.reader=d(E)},load:function(E){this.prepareReader(E),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},u.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,u,p){var d=l("./reader/readerFor"),m=l("./utils"),g=l("./compressedObject"),b=l("./crc32"),h=l("./utf8"),w=l("./compressions"),E=l("./support");function C(S,R){this.options=S,this.loadOptions=R}C.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(S){var R,y;if(S.skip(22),this.fileNameLength=S.readInt(2),y=S.readInt(2),this.fileName=S.readData(this.fileNameLength),S.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((R=(function(A){for(var _ in w)if(Object.prototype.hasOwnProperty.call(w,_)&&w[_].magic===A)return w[_];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+m.pretty(this.compressionMethod)+" unknown (inner file : "+m.transformTo("string",this.fileName)+")");this.decompressed=new g(this.compressedSize,this.uncompressedSize,this.crc32,R,S.readData(this.compressedSize))},readCentralPart:function(S){this.versionMadeBy=S.readInt(2),S.skip(2),this.bitFlag=S.readInt(2),this.compressionMethod=S.readString(2),this.date=S.readDate(),this.crc32=S.readInt(4),this.compressedSize=S.readInt(4),this.uncompressedSize=S.readInt(4);var R=S.readInt(2);if(this.extraFieldsLength=S.readInt(2),this.fileCommentLength=S.readInt(2),this.diskNumberStart=S.readInt(2),this.internalFileAttributes=S.readInt(2),this.externalFileAttributes=S.readInt(4),this.localHeaderOffset=S.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");S.skip(R),this.readExtraFields(S),this.parseZIP64ExtraField(S),this.fileComment=S.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var S=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),S==0&&(this.dosPermissions=63&this.externalFileAttributes),S==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var S=d(this.extraFields[1].value);this.uncompressedSize===m.MAX_VALUE_32BITS&&(this.uncompressedSize=S.readInt(8)),this.compressedSize===m.MAX_VALUE_32BITS&&(this.compressedSize=S.readInt(8)),this.localHeaderOffset===m.MAX_VALUE_32BITS&&(this.localHeaderOffset=S.readInt(8)),this.diskNumberStart===m.MAX_VALUE_32BITS&&(this.diskNumberStart=S.readInt(4))}},readExtraFields:function(S){var R,y,A,_=S.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});S.index+4<_;)R=S.readInt(2),y=S.readInt(2),A=S.readData(y),this.extraFields[R]={id:R,length:y,value:A};S.setIndex(_)},handleUTF8:function(){var S=E.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var R=this.findExtraFieldUnicodePath();if(R!==null)this.fileNameStr=R;else{var y=m.transformTo(S,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var _=m.transformTo(S,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var S=this.extraFields[28789];if(S){var R=d(S.value);return R.readInt(1)!==1||b(this.fileName)!==R.readInt(4)?null:h.utf8decode(R.readData(S.length-5))}return null},findExtraFieldUnicodeComment:function(){var S=this.extraFields[25461];if(S){var R=d(S.value);return R.readInt(1)!==1||b(this.fileComment)!==R.readInt(4)?null:h.utf8decode(R.readData(S.length-5))}return null}},u.exports=C},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,u,p){function d(R,y,A){this.name=R,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=y,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var m=l("./stream/StreamHelper"),g=l("./stream/DataWorker"),b=l("./utf8"),h=l("./compressedObject"),w=l("./stream/GenericWorker");d.prototype={internalStream:function(R){var y=null,A="string";try{if(!R)throw new Error("No output type specified.");var _=(A=R.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),y=this._decompressWorker();var I=!this._dataBinary;I&&!_&&(y=y.pipe(new b.Utf8EncodeWorker)),!I&&_&&(y=y.pipe(new b.Utf8DecodeWorker))}catch(D){(y=new w("error")).error(D)}return new m(y,A,"")},async:function(R,y){return this.internalStream(R).accumulate(y)},nodeStream:function(R,y){return this.internalStream(R||"nodebuffer").toNodejsStream(y)},_compressWorker:function(R,y){if(this._data instanceof h&&this._data.compression.magic===R.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new b.Utf8EncodeWorker)),h.createWorkerFrom(A,R,y)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof w?this._data:new g(this._data)}};for(var E=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],C=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},S=0;S<E.length;S++)d.prototype[E[S]]=C;u.exports=d},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,u,p){(function(d){var m,g,b=d.MutationObserver||d.WebKitMutationObserver;if(b){var h=0,w=new b(R),E=d.document.createTextNode("");w.observe(E,{characterData:!0}),m=function(){E.data=h=++h%2}}else if(d.setImmediate||d.MessageChannel===void 0)m="document"in d&&"onreadystatechange"in d.document.createElement("script")?function(){var y=d.document.createElement("script");y.onreadystatechange=function(){R(),y.onreadystatechange=null,y.parentNode.removeChild(y),y=null},d.document.documentElement.appendChild(y)}:function(){setTimeout(R,0)};else{var C=new d.MessageChannel;C.port1.onmessage=R,m=function(){C.port2.postMessage(0)}}var S=[];function R(){var y,A;g=!0;for(var _=S.length;_;){for(A=S,S=[],y=-1;++y<_;)A[y]();_=S.length}g=!1}u.exports=function(y){S.push(y)!==1||g||m()}}).call(this,typeof Rs<"u"?Rs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,u,p){var d=l("immediate");function m(){}var g={},b=["REJECTED"],h=["FULFILLED"],w=["PENDING"];function E(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,_!==m&&y(this,_)}function C(_,I,D){this.promise=_,typeof I=="function"&&(this.onFulfilled=I,this.callFulfilled=this.otherCallFulfilled),typeof D=="function"&&(this.onRejected=D,this.callRejected=this.otherCallRejected)}function S(_,I,D){d(function(){var B;try{B=I(D)}catch(j){return g.reject(_,j)}B===_?g.reject(_,new TypeError("Cannot resolve promise with itself")):g.resolve(_,B)})}function R(_){var I=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof I=="function")return function(){I.apply(_,arguments)}}function y(_,I){var D=!1;function B(H){D||(D=!0,g.reject(_,H))}function j(H){D||(D=!0,g.resolve(_,H))}var $=A(function(){I(j,B)});$.status==="error"&&B($.value)}function A(_,I){var D={};try{D.value=_(I),D.status="success"}catch(B){D.status="error",D.value=B}return D}(u.exports=E).prototype.finally=function(_){if(typeof _!="function")return this;var I=this.constructor;return this.then(function(D){return I.resolve(_()).then(function(){return D})},function(D){return I.resolve(_()).then(function(){throw D})})},E.prototype.catch=function(_){return this.then(null,_)},E.prototype.then=function(_,I){if(typeof _!="function"&&this.state===h||typeof I!="function"&&this.state===b)return this;var D=new this.constructor(m);return this.state!==w?S(D,this.state===h?_:I,this.outcome):this.queue.push(new C(D,_,I)),D},C.prototype.callFulfilled=function(_){g.resolve(this.promise,_)},C.prototype.otherCallFulfilled=function(_){S(this.promise,this.onFulfilled,_)},C.prototype.callRejected=function(_){g.reject(this.promise,_)},C.prototype.otherCallRejected=function(_){S(this.promise,this.onRejected,_)},g.resolve=function(_,I){var D=A(R,I);if(D.status==="error")return g.reject(_,D.value);var B=D.value;if(B)y(_,B);else{_.state=h,_.outcome=I;for(var j=-1,$=_.queue.length;++j<$;)_.queue[j].callFulfilled(I)}return _},g.reject=function(_,I){_.state=b,_.outcome=I;for(var D=-1,B=_.queue.length;++D<B;)_.queue[D].callRejected(I);return _},E.resolve=function(_){return _ instanceof this?_:g.resolve(new this(m),_)},E.reject=function(_){var I=new this(m);return g.reject(I,_)},E.all=function(_){var I=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=_.length,B=!1;if(!D)return this.resolve([]);for(var j=new Array(D),$=0,H=-1,G=new this(m);++H<D;)U(_[H],H);return G;function U(ae,te){I.resolve(ae).then(function(k){j[te]=k,++$!==D||B||(B=!0,g.resolve(G,j))},function(k){B||(B=!0,g.reject(G,k))})}},E.race=function(_){var I=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=_.length,B=!1;if(!D)return this.resolve([]);for(var j=-1,$=new this(m);++j<D;)H=_[j],I.resolve(H).then(function(G){B||(B=!0,g.resolve($,G))},function(G){B||(B=!0,g.reject($,G))});var H;return $}},{immediate:36}],38:[function(l,u,p){var d={};(0,l("./lib/utils/common").assign)(d,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),u.exports=d},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,u,p){var d=l("./zlib/deflate"),m=l("./utils/common"),g=l("./utils/strings"),b=l("./zlib/messages"),h=l("./zlib/zstream"),w=Object.prototype.toString,E=0,C=-1,S=0,R=8;function y(_){if(!(this instanceof y))return new y(_);this.options=m.assign({level:C,method:R,chunkSize:16384,windowBits:15,memLevel:8,strategy:S,to:""},_||{});var I=this.options;I.raw&&0<I.windowBits?I.windowBits=-I.windowBits:I.gzip&&0<I.windowBits&&I.windowBits<16&&(I.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var D=d.deflateInit2(this.strm,I.level,I.method,I.windowBits,I.memLevel,I.strategy);if(D!==E)throw new Error(b[D]);if(I.header&&d.deflateSetHeader(this.strm,I.header),I.dictionary){var B;if(B=typeof I.dictionary=="string"?g.string2buf(I.dictionary):w.call(I.dictionary)==="[object ArrayBuffer]"?new Uint8Array(I.dictionary):I.dictionary,(D=d.deflateSetDictionary(this.strm,B))!==E)throw new Error(b[D]);this._dict_set=!0}}function A(_,I){var D=new y(I);if(D.push(_,!0),D.err)throw D.msg||b[D.err];return D.result}y.prototype.push=function(_,I){var D,B,j=this.strm,$=this.options.chunkSize;if(this.ended)return!1;B=I===~~I?I:I===!0?4:0,typeof _=="string"?j.input=g.string2buf(_):w.call(_)==="[object ArrayBuffer]"?j.input=new Uint8Array(_):j.input=_,j.next_in=0,j.avail_in=j.input.length;do{if(j.avail_out===0&&(j.output=new m.Buf8($),j.next_out=0,j.avail_out=$),(D=d.deflate(j,B))!==1&&D!==E)return this.onEnd(D),!(this.ended=!0);j.avail_out!==0&&(j.avail_in!==0||B!==4&&B!==2)||(this.options.to==="string"?this.onData(g.buf2binstring(m.shrinkBuf(j.output,j.next_out))):this.onData(m.shrinkBuf(j.output,j.next_out)))}while((0<j.avail_in||j.avail_out===0)&&D!==1);return B===4?(D=d.deflateEnd(this.strm),this.onEnd(D),this.ended=!0,D===E):B!==2||(this.onEnd(E),!(j.avail_out=0))},y.prototype.onData=function(_){this.chunks.push(_)},y.prototype.onEnd=function(_){_===E&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},p.Deflate=y,p.deflate=A,p.deflateRaw=function(_,I){return(I=I||{}).raw=!0,A(_,I)},p.gzip=function(_,I){return(I=I||{}).gzip=!0,A(_,I)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,u,p){var d=l("./zlib/inflate"),m=l("./utils/common"),g=l("./utils/strings"),b=l("./zlib/constants"),h=l("./zlib/messages"),w=l("./zlib/zstream"),E=l("./zlib/gzheader"),C=Object.prototype.toString;function S(y){if(!(this instanceof S))return new S(y);this.options=m.assign({chunkSize:16384,windowBits:0,to:""},y||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||y&&y.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var _=d.inflateInit2(this.strm,A.windowBits);if(_!==b.Z_OK)throw new Error(h[_]);this.header=new E,d.inflateGetHeader(this.strm,this.header)}function R(y,A){var _=new S(A);if(_.push(y,!0),_.err)throw _.msg||h[_.err];return _.result}S.prototype.push=function(y,A){var _,I,D,B,j,$,H=this.strm,G=this.options.chunkSize,U=this.options.dictionary,ae=!1;if(this.ended)return!1;I=A===~~A?A:A===!0?b.Z_FINISH:b.Z_NO_FLUSH,typeof y=="string"?H.input=g.binstring2buf(y):C.call(y)==="[object ArrayBuffer]"?H.input=new Uint8Array(y):H.input=y,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new m.Buf8(G),H.next_out=0,H.avail_out=G),(_=d.inflate(H,b.Z_NO_FLUSH))===b.Z_NEED_DICT&&U&&($=typeof U=="string"?g.string2buf(U):C.call(U)==="[object ArrayBuffer]"?new Uint8Array(U):U,_=d.inflateSetDictionary(this.strm,$)),_===b.Z_BUF_ERROR&&ae===!0&&(_=b.Z_OK,ae=!1),_!==b.Z_STREAM_END&&_!==b.Z_OK)return this.onEnd(_),!(this.ended=!0);H.next_out&&(H.avail_out!==0&&_!==b.Z_STREAM_END&&(H.avail_in!==0||I!==b.Z_FINISH&&I!==b.Z_SYNC_FLUSH)||(this.options.to==="string"?(D=g.utf8border(H.output,H.next_out),B=H.next_out-D,j=g.buf2string(H.output,D),H.next_out=B,H.avail_out=G-B,B&&m.arraySet(H.output,H.output,D,B,0),this.onData(j)):this.onData(m.shrinkBuf(H.output,H.next_out)))),H.avail_in===0&&H.avail_out===0&&(ae=!0)}while((0<H.avail_in||H.avail_out===0)&&_!==b.Z_STREAM_END);return _===b.Z_STREAM_END&&(I=b.Z_FINISH),I===b.Z_FINISH?(_=d.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===b.Z_OK):I!==b.Z_SYNC_FLUSH||(this.onEnd(b.Z_OK),!(H.avail_out=0))},S.prototype.onData=function(y){this.chunks.push(y)},S.prototype.onEnd=function(y){y===b.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=y,this.msg=this.strm.msg},p.Inflate=S,p.inflate=R,p.inflateRaw=function(y,A){return(A=A||{}).raw=!0,R(y,A)},p.ungzip=R},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,u,p){var d=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";p.assign=function(b){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var w=h.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var E in w)w.hasOwnProperty(E)&&(b[E]=w[E])}}return b},p.shrinkBuf=function(b,h){return b.length===h?b:b.subarray?b.subarray(0,h):(b.length=h,b)};var m={arraySet:function(b,h,w,E,C){if(h.subarray&&b.subarray)b.set(h.subarray(w,w+E),C);else for(var S=0;S<E;S++)b[C+S]=h[w+S]},flattenChunks:function(b){var h,w,E,C,S,R;for(h=E=0,w=b.length;h<w;h++)E+=b[h].length;for(R=new Uint8Array(E),h=C=0,w=b.length;h<w;h++)S=b[h],R.set(S,C),C+=S.length;return R}},g={arraySet:function(b,h,w,E,C){for(var S=0;S<E;S++)b[C+S]=h[w+S]},flattenChunks:function(b){return[].concat.apply([],b)}};p.setTyped=function(b){b?(p.Buf8=Uint8Array,p.Buf16=Uint16Array,p.Buf32=Int32Array,p.assign(p,m)):(p.Buf8=Array,p.Buf16=Array,p.Buf32=Array,p.assign(p,g))},p.setTyped(d)},{}],42:[function(l,u,p){var d=l("./common"),m=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch{m=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{g=!1}for(var b=new d.Buf8(256),h=0;h<256;h++)b[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function w(E,C){if(C<65537&&(E.subarray&&g||!E.subarray&&m))return String.fromCharCode.apply(null,d.shrinkBuf(E,C));for(var S="",R=0;R<C;R++)S+=String.fromCharCode(E[R]);return S}b[254]=b[254]=1,p.string2buf=function(E){var C,S,R,y,A,_=E.length,I=0;for(y=0;y<_;y++)(64512&(S=E.charCodeAt(y)))==55296&&y+1<_&&(64512&(R=E.charCodeAt(y+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),y++),I+=S<128?1:S<2048?2:S<65536?3:4;for(C=new d.Buf8(I),y=A=0;A<I;y++)(64512&(S=E.charCodeAt(y)))==55296&&y+1<_&&(64512&(R=E.charCodeAt(y+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),y++),S<128?C[A++]=S:(S<2048?C[A++]=192|S>>>6:(S<65536?C[A++]=224|S>>>12:(C[A++]=240|S>>>18,C[A++]=128|S>>>12&63),C[A++]=128|S>>>6&63),C[A++]=128|63&S);return C},p.buf2binstring=function(E){return w(E,E.length)},p.binstring2buf=function(E){for(var C=new d.Buf8(E.length),S=0,R=C.length;S<R;S++)C[S]=E.charCodeAt(S);return C},p.buf2string=function(E,C){var S,R,y,A,_=C||E.length,I=new Array(2*_);for(S=R=0;S<_;)if((y=E[S++])<128)I[R++]=y;else if(4<(A=b[y]))I[R++]=65533,S+=A-1;else{for(y&=A===2?31:A===3?15:7;1<A&&S<_;)y=y<<6|63&E[S++],A--;1<A?I[R++]=65533:y<65536?I[R++]=y:(y-=65536,I[R++]=55296|y>>10&1023,I[R++]=56320|1023&y)}return w(I,R)},p.utf8border=function(E,C){var S;for((C=C||E.length)>E.length&&(C=E.length),S=C-1;0<=S&&(192&E[S])==128;)S--;return S<0||S===0?C:S+b[E[S]]>C?S:C}},{"./common":41}],43:[function(l,u,p){u.exports=function(d,m,g,b){for(var h=65535&d|0,w=d>>>16&65535|0,E=0;g!==0;){for(g-=E=2e3<g?2e3:g;w=w+(h=h+m[b++]|0)|0,--E;);h%=65521,w%=65521}return h|w<<16|0}},{}],44:[function(l,u,p){u.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,u,p){var d=(function(){for(var m,g=[],b=0;b<256;b++){m=b;for(var h=0;h<8;h++)m=1&m?3988292384^m>>>1:m>>>1;g[b]=m}return g})();u.exports=function(m,g,b,h){var w=d,E=h+b;m^=-1;for(var C=h;C<E;C++)m=m>>>8^w[255&(m^g[C])];return-1^m}},{}],46:[function(l,u,p){var d,m=l("../utils/common"),g=l("./trees"),b=l("./adler32"),h=l("./crc32"),w=l("./messages"),E=0,C=4,S=0,R=-2,y=-1,A=4,_=2,I=8,D=9,B=286,j=30,$=19,H=2*B+1,G=15,U=3,ae=258,te=ae+U+1,k=42,Z=113,v=1,X=2,P=3,V=4;function de(x,ue){return x.msg=w[ue],ue}function ee(x){return(x<<1)-(4<x?9:0)}function ge(x){for(var ue=x.length;0<=--ue;)x[ue]=0}function N(x){var ue=x.state,re=ue.pending;re>x.avail_out&&(re=x.avail_out),re!==0&&(m.arraySet(x.output,ue.pending_buf,ue.pending_out,re,x.next_out),x.next_out+=re,ue.pending_out+=re,x.total_out+=re,x.avail_out-=re,ue.pending-=re,ue.pending===0&&(ue.pending_out=0))}function L(x,ue){g._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,ue),x.block_start=x.strstart,N(x.strm)}function se(x,ue){x.pending_buf[x.pending++]=ue}function ie(x,ue){x.pending_buf[x.pending++]=ue>>>8&255,x.pending_buf[x.pending++]=255&ue}function oe(x,ue){var re,z,O=x.max_chain_length,Y=x.strstart,he=x.prev_length,pe=x.nice_match,W=x.strstart>x.w_size-te?x.strstart-(x.w_size-te):0,ye=x.window,xe=x.w_mask,ve=x.prev,Re=x.strstart+ae,Ye=ye[Y+he-1],Le=ye[Y+he];x.prev_length>=x.good_match&&(O>>=2),pe>x.lookahead&&(pe=x.lookahead);do if(ye[(re=ue)+he]===Le&&ye[re+he-1]===Ye&&ye[re]===ye[Y]&&ye[++re]===ye[Y+1]){Y+=2,re++;do;while(ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&ye[++Y]===ye[++re]&&Y<Re);if(z=ae-(Re-Y),Y=Re-ae,he<z){if(x.match_start=ue,pe<=(he=z))break;Ye=ye[Y+he-1],Le=ye[Y+he]}}while((ue=ve[ue&xe])>W&&--O!=0);return he<=x.lookahead?he:x.lookahead}function Se(x){var ue,re,z,O,Y,he,pe,W,ye,xe,ve=x.w_size;do{if(O=x.window_size-x.lookahead-x.strstart,x.strstart>=ve+(ve-te)){for(m.arraySet(x.window,x.window,ve,ve,0),x.match_start-=ve,x.strstart-=ve,x.block_start-=ve,ue=re=x.hash_size;z=x.head[--ue],x.head[ue]=ve<=z?z-ve:0,--re;);for(ue=re=ve;z=x.prev[--ue],x.prev[ue]=ve<=z?z-ve:0,--re;);O+=ve}if(x.strm.avail_in===0)break;if(he=x.strm,pe=x.window,W=x.strstart+x.lookahead,ye=O,xe=void 0,xe=he.avail_in,ye<xe&&(xe=ye),re=xe===0?0:(he.avail_in-=xe,m.arraySet(pe,he.input,he.next_in,xe,W),he.state.wrap===1?he.adler=b(he.adler,pe,xe,W):he.state.wrap===2&&(he.adler=h(he.adler,pe,xe,W)),he.next_in+=xe,he.total_in+=xe,xe),x.lookahead+=re,x.lookahead+x.insert>=U)for(Y=x.strstart-x.insert,x.ins_h=x.window[Y],x.ins_h=(x.ins_h<<x.hash_shift^x.window[Y+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[Y+U-1])&x.hash_mask,x.prev[Y&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=Y,Y++,x.insert--,!(x.lookahead+x.insert<U)););}while(x.lookahead<te&&x.strm.avail_in!==0)}function _e(x,ue){for(var re,z;;){if(x.lookahead<te){if(Se(x),x.lookahead<te&&ue===E)return v;if(x.lookahead===0)break}if(re=0,x.lookahead>=U&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+U-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),re!==0&&x.strstart-re<=x.w_size-te&&(x.match_length=oe(x,re)),x.match_length>=U)if(z=g._tr_tally(x,x.strstart-x.match_start,x.match_length-U),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=U){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+U-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else z=g._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(z&&(L(x,!1),x.strm.avail_out===0))return v}return x.insert=x.strstart<U-1?x.strstart:U-1,ue===C?(L(x,!0),x.strm.avail_out===0?P:V):x.last_lit&&(L(x,!1),x.strm.avail_out===0)?v:X}function we(x,ue){for(var re,z,O;;){if(x.lookahead<te){if(Se(x),x.lookahead<te&&ue===E)return v;if(x.lookahead===0)break}if(re=0,x.lookahead>=U&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+U-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=U-1,re!==0&&x.prev_length<x.max_lazy_match&&x.strstart-re<=x.w_size-te&&(x.match_length=oe(x,re),x.match_length<=5&&(x.strategy===1||x.match_length===U&&4096<x.strstart-x.match_start)&&(x.match_length=U-1)),x.prev_length>=U&&x.match_length<=x.prev_length){for(O=x.strstart+x.lookahead-U,z=g._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-U),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=O&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+U-1])&x.hash_mask,re=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=U-1,x.strstart++,z&&(L(x,!1),x.strm.avail_out===0))return v}else if(x.match_available){if((z=g._tr_tally(x,0,x.window[x.strstart-1]))&&L(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return v}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(z=g._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<U-1?x.strstart:U-1,ue===C?(L(x,!0),x.strm.avail_out===0?P:V):x.last_lit&&(L(x,!1),x.strm.avail_out===0)?v:X}function Ne(x,ue,re,z,O){this.good_length=x,this.max_lazy=ue,this.nice_length=re,this.max_chain=z,this.func=O}function nt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=I,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new m.Buf16(2*H),this.dyn_dtree=new m.Buf16(2*(2*j+1)),this.bl_tree=new m.Buf16(2*(2*$+1)),ge(this.dyn_ltree),ge(this.dyn_dtree),ge(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new m.Buf16(G+1),this.heap=new m.Buf16(2*B+1),ge(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new m.Buf16(2*B+1),ge(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Je(x){var ue;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=_,(ue=x.state).pending=0,ue.pending_out=0,ue.wrap<0&&(ue.wrap=-ue.wrap),ue.status=ue.wrap?k:Z,x.adler=ue.wrap===2?0:1,ue.last_flush=E,g._tr_init(ue),S):de(x,R)}function wt(x){var ue=Je(x);return ue===S&&(function(re){re.window_size=2*re.w_size,ge(re.head),re.max_lazy_match=d[re.level].max_lazy,re.good_match=d[re.level].good_length,re.nice_match=d[re.level].nice_length,re.max_chain_length=d[re.level].max_chain,re.strstart=0,re.block_start=0,re.lookahead=0,re.insert=0,re.match_length=re.prev_length=U-1,re.match_available=0,re.ins_h=0})(x.state),ue}function Rt(x,ue,re,z,O,Y){if(!x)return R;var he=1;if(ue===y&&(ue=6),z<0?(he=0,z=-z):15<z&&(he=2,z-=16),O<1||D<O||re!==I||z<8||15<z||ue<0||9<ue||Y<0||A<Y)return de(x,R);z===8&&(z=9);var pe=new nt;return(x.state=pe).strm=x,pe.wrap=he,pe.gzhead=null,pe.w_bits=z,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=O+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+U-1)/U),pe.window=new m.Buf8(2*pe.w_size),pe.head=new m.Buf16(pe.hash_size),pe.prev=new m.Buf16(pe.w_size),pe.lit_bufsize=1<<O+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new m.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=ue,pe.strategy=Y,pe.method=re,wt(x)}d=[new Ne(0,0,0,0,function(x,ue){var re=65535;for(re>x.pending_buf_size-5&&(re=x.pending_buf_size-5);;){if(x.lookahead<=1){if(Se(x),x.lookahead===0&&ue===E)return v;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var z=x.block_start+re;if((x.strstart===0||x.strstart>=z)&&(x.lookahead=x.strstart-z,x.strstart=z,L(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-te&&(L(x,!1),x.strm.avail_out===0))return v}return x.insert=0,ue===C?(L(x,!0),x.strm.avail_out===0?P:V):(x.strstart>x.block_start&&(L(x,!1),x.strm.avail_out),v)}),new Ne(4,4,8,4,_e),new Ne(4,5,16,8,_e),new Ne(4,6,32,32,_e),new Ne(4,4,16,16,we),new Ne(8,16,32,32,we),new Ne(8,16,128,128,we),new Ne(8,32,128,256,we),new Ne(32,128,258,1024,we),new Ne(32,258,258,4096,we)],p.deflateInit=function(x,ue){return Rt(x,ue,I,15,8,0)},p.deflateInit2=Rt,p.deflateReset=wt,p.deflateResetKeep=Je,p.deflateSetHeader=function(x,ue){return x&&x.state?x.state.wrap!==2?R:(x.state.gzhead=ue,S):R},p.deflate=function(x,ue){var re,z,O,Y;if(!x||!x.state||5<ue||ue<0)return x?de(x,R):R;if(z=x.state,!x.output||!x.input&&x.avail_in!==0||z.status===666&&ue!==C)return de(x,x.avail_out===0?-5:R);if(z.strm=x,re=z.last_flush,z.last_flush=ue,z.status===k)if(z.wrap===2)x.adler=0,se(z,31),se(z,139),se(z,8),z.gzhead?(se(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),se(z,255&z.gzhead.time),se(z,z.gzhead.time>>8&255),se(z,z.gzhead.time>>16&255),se(z,z.gzhead.time>>24&255),se(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),se(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(se(z,255&z.gzhead.extra.length),se(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(x.adler=h(x.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(se(z,0),se(z,0),se(z,0),se(z,0),se(z,0),se(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),se(z,3),z.status=Z);else{var he=I+(z.w_bits-8<<4)<<8;he|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(he|=32),he+=31-he%31,z.status=Z,ie(z,he),z.strstart!==0&&(ie(z,x.adler>>>16),ie(z,65535&x.adler)),x.adler=1}if(z.status===69)if(z.gzhead.extra){for(O=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>O&&(x.adler=h(x.adler,z.pending_buf,z.pending-O,O)),N(x),O=z.pending,z.pending!==z.pending_buf_size));)se(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>O&&(x.adler=h(x.adler,z.pending_buf,z.pending-O,O)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(x.adler=h(x.adler,z.pending_buf,z.pending-O,O)),N(x),O=z.pending,z.pending===z.pending_buf_size)){Y=1;break}Y=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,se(z,Y)}while(Y!==0);z.gzhead.hcrc&&z.pending>O&&(x.adler=h(x.adler,z.pending_buf,z.pending-O,O)),Y===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(x.adler=h(x.adler,z.pending_buf,z.pending-O,O)),N(x),O=z.pending,z.pending===z.pending_buf_size)){Y=1;break}Y=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,se(z,Y)}while(Y!==0);z.gzhead.hcrc&&z.pending>O&&(x.adler=h(x.adler,z.pending_buf,z.pending-O,O)),Y===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&N(x),z.pending+2<=z.pending_buf_size&&(se(z,255&x.adler),se(z,x.adler>>8&255),x.adler=0,z.status=Z)):z.status=Z),z.pending!==0){if(N(x),x.avail_out===0)return z.last_flush=-1,S}else if(x.avail_in===0&&ee(ue)<=ee(re)&&ue!==C)return de(x,-5);if(z.status===666&&x.avail_in!==0)return de(x,-5);if(x.avail_in!==0||z.lookahead!==0||ue!==E&&z.status!==666){var pe=z.strategy===2?(function(W,ye){for(var xe;;){if(W.lookahead===0&&(Se(W),W.lookahead===0)){if(ye===E)return v;break}if(W.match_length=0,xe=g._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,xe&&(L(W,!1),W.strm.avail_out===0))return v}return W.insert=0,ye===C?(L(W,!0),W.strm.avail_out===0?P:V):W.last_lit&&(L(W,!1),W.strm.avail_out===0)?v:X})(z,ue):z.strategy===3?(function(W,ye){for(var xe,ve,Re,Ye,Le=W.window;;){if(W.lookahead<=ae){if(Se(W),W.lookahead<=ae&&ye===E)return v;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=U&&0<W.strstart&&(ve=Le[Re=W.strstart-1])===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]){Ye=W.strstart+ae;do;while(ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&Re<Ye);W.match_length=ae-(Ye-Re),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=U?(xe=g._tr_tally(W,1,W.match_length-U),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(xe=g._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),xe&&(L(W,!1),W.strm.avail_out===0))return v}return W.insert=0,ye===C?(L(W,!0),W.strm.avail_out===0?P:V):W.last_lit&&(L(W,!1),W.strm.avail_out===0)?v:X})(z,ue):d[z.level].func(z,ue);if(pe!==P&&pe!==V||(z.status=666),pe===v||pe===P)return x.avail_out===0&&(z.last_flush=-1),S;if(pe===X&&(ue===1?g._tr_align(z):ue!==5&&(g._tr_stored_block(z,0,0,!1),ue===3&&(ge(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),N(x),x.avail_out===0))return z.last_flush=-1,S}return ue!==C?S:z.wrap<=0?1:(z.wrap===2?(se(z,255&x.adler),se(z,x.adler>>8&255),se(z,x.adler>>16&255),se(z,x.adler>>24&255),se(z,255&x.total_in),se(z,x.total_in>>8&255),se(z,x.total_in>>16&255),se(z,x.total_in>>24&255)):(ie(z,x.adler>>>16),ie(z,65535&x.adler)),N(x),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?S:1)},p.deflateEnd=function(x){var ue;return x&&x.state?(ue=x.state.status)!==k&&ue!==69&&ue!==73&&ue!==91&&ue!==103&&ue!==Z&&ue!==666?de(x,R):(x.state=null,ue===Z?de(x,-3):S):R},p.deflateSetDictionary=function(x,ue){var re,z,O,Y,he,pe,W,ye,xe=ue.length;if(!x||!x.state||(Y=(re=x.state).wrap)===2||Y===1&&re.status!==k||re.lookahead)return R;for(Y===1&&(x.adler=b(x.adler,ue,xe,0)),re.wrap=0,xe>=re.w_size&&(Y===0&&(ge(re.head),re.strstart=0,re.block_start=0,re.insert=0),ye=new m.Buf8(re.w_size),m.arraySet(ye,ue,xe-re.w_size,re.w_size,0),ue=ye,xe=re.w_size),he=x.avail_in,pe=x.next_in,W=x.input,x.avail_in=xe,x.next_in=0,x.input=ue,Se(re);re.lookahead>=U;){for(z=re.strstart,O=re.lookahead-(U-1);re.ins_h=(re.ins_h<<re.hash_shift^re.window[z+U-1])&re.hash_mask,re.prev[z&re.w_mask]=re.head[re.ins_h],re.head[re.ins_h]=z,z++,--O;);re.strstart=z,re.lookahead=U-1,Se(re)}return re.strstart+=re.lookahead,re.block_start=re.strstart,re.insert=re.lookahead,re.lookahead=0,re.match_length=re.prev_length=U-1,re.match_available=0,x.next_in=pe,x.input=W,x.avail_in=he,re.wrap=Y,S},p.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,u,p){u.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,u,p){u.exports=function(d,m){var g,b,h,w,E,C,S,R,y,A,_,I,D,B,j,$,H,G,U,ae,te,k,Z,v,X;g=d.state,b=d.next_in,v=d.input,h=b+(d.avail_in-5),w=d.next_out,X=d.output,E=w-(m-d.avail_out),C=w+(d.avail_out-257),S=g.dmax,R=g.wsize,y=g.whave,A=g.wnext,_=g.window,I=g.hold,D=g.bits,B=g.lencode,j=g.distcode,$=(1<<g.lenbits)-1,H=(1<<g.distbits)-1;e:do{D<15&&(I+=v[b++]<<D,D+=8,I+=v[b++]<<D,D+=8),G=B[I&$];t:for(;;){if(I>>>=U=G>>>24,D-=U,(U=G>>>16&255)===0)X[w++]=65535&G;else{if(!(16&U)){if((64&U)==0){G=B[(65535&G)+(I&(1<<U)-1)];continue t}if(32&U){g.mode=12;break e}d.msg="invalid literal/length code",g.mode=30;break e}ae=65535&G,(U&=15)&&(D<U&&(I+=v[b++]<<D,D+=8),ae+=I&(1<<U)-1,I>>>=U,D-=U),D<15&&(I+=v[b++]<<D,D+=8,I+=v[b++]<<D,D+=8),G=j[I&H];n:for(;;){if(I>>>=U=G>>>24,D-=U,!(16&(U=G>>>16&255))){if((64&U)==0){G=j[(65535&G)+(I&(1<<U)-1)];continue n}d.msg="invalid distance code",g.mode=30;break e}if(te=65535&G,D<(U&=15)&&(I+=v[b++]<<D,(D+=8)<U&&(I+=v[b++]<<D,D+=8)),S<(te+=I&(1<<U)-1)){d.msg="invalid distance too far back",g.mode=30;break e}if(I>>>=U,D-=U,(U=w-E)<te){if(y<(U=te-U)&&g.sane){d.msg="invalid distance too far back",g.mode=30;break e}if(Z=_,(k=0)===A){if(k+=R-U,U<ae){for(ae-=U;X[w++]=_[k++],--U;);k=w-te,Z=X}}else if(A<U){if(k+=R+A-U,(U-=A)<ae){for(ae-=U;X[w++]=_[k++],--U;);if(k=0,A<ae){for(ae-=U=A;X[w++]=_[k++],--U;);k=w-te,Z=X}}}else if(k+=A-U,U<ae){for(ae-=U;X[w++]=_[k++],--U;);k=w-te,Z=X}for(;2<ae;)X[w++]=Z[k++],X[w++]=Z[k++],X[w++]=Z[k++],ae-=3;ae&&(X[w++]=Z[k++],1<ae&&(X[w++]=Z[k++]))}else{for(k=w-te;X[w++]=X[k++],X[w++]=X[k++],X[w++]=X[k++],2<(ae-=3););ae&&(X[w++]=X[k++],1<ae&&(X[w++]=X[k++]))}break}}break}}while(b<h&&w<C);b-=ae=D>>3,I&=(1<<(D-=ae<<3))-1,d.next_in=b,d.next_out=w,d.avail_in=b<h?h-b+5:5-(b-h),d.avail_out=w<C?C-w+257:257-(w-C),g.hold=I,g.bits=D}},{}],49:[function(l,u,p){var d=l("../utils/common"),m=l("./adler32"),g=l("./crc32"),b=l("./inffast"),h=l("./inftrees"),w=1,E=2,C=0,S=-2,R=1,y=852,A=592;function _(k){return(k>>>24&255)+(k>>>8&65280)+((65280&k)<<8)+((255&k)<<24)}function I(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new d.Buf16(320),this.work=new d.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function D(k){var Z;return k&&k.state?(Z=k.state,k.total_in=k.total_out=Z.total=0,k.msg="",Z.wrap&&(k.adler=1&Z.wrap),Z.mode=R,Z.last=0,Z.havedict=0,Z.dmax=32768,Z.head=null,Z.hold=0,Z.bits=0,Z.lencode=Z.lendyn=new d.Buf32(y),Z.distcode=Z.distdyn=new d.Buf32(A),Z.sane=1,Z.back=-1,C):S}function B(k){var Z;return k&&k.state?((Z=k.state).wsize=0,Z.whave=0,Z.wnext=0,D(k)):S}function j(k,Z){var v,X;return k&&k.state?(X=k.state,Z<0?(v=0,Z=-Z):(v=1+(Z>>4),Z<48&&(Z&=15)),Z&&(Z<8||15<Z)?S:(X.window!==null&&X.wbits!==Z&&(X.window=null),X.wrap=v,X.wbits=Z,B(k))):S}function $(k,Z){var v,X;return k?(X=new I,(k.state=X).window=null,(v=j(k,Z))!==C&&(k.state=null),v):S}var H,G,U=!0;function ae(k){if(U){var Z;for(H=new d.Buf32(512),G=new d.Buf32(32),Z=0;Z<144;)k.lens[Z++]=8;for(;Z<256;)k.lens[Z++]=9;for(;Z<280;)k.lens[Z++]=7;for(;Z<288;)k.lens[Z++]=8;for(h(w,k.lens,0,288,H,0,k.work,{bits:9}),Z=0;Z<32;)k.lens[Z++]=5;h(E,k.lens,0,32,G,0,k.work,{bits:5}),U=!1}k.lencode=H,k.lenbits=9,k.distcode=G,k.distbits=5}function te(k,Z,v,X){var P,V=k.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new d.Buf8(V.wsize)),X>=V.wsize?(d.arraySet(V.window,Z,v-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(X<(P=V.wsize-V.wnext)&&(P=X),d.arraySet(V.window,Z,v-X,P,V.wnext),(X-=P)?(d.arraySet(V.window,Z,v-X,X,0),V.wnext=X,V.whave=V.wsize):(V.wnext+=P,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=P))),0}p.inflateReset=B,p.inflateReset2=j,p.inflateResetKeep=D,p.inflateInit=function(k){return $(k,15)},p.inflateInit2=$,p.inflate=function(k,Z){var v,X,P,V,de,ee,ge,N,L,se,ie,oe,Se,_e,we,Ne,nt,Je,wt,Rt,x,ue,re,z,O=0,Y=new d.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!k||!k.state||!k.output||!k.input&&k.avail_in!==0)return S;(v=k.state).mode===12&&(v.mode=13),de=k.next_out,P=k.output,ge=k.avail_out,V=k.next_in,X=k.input,ee=k.avail_in,N=v.hold,L=v.bits,se=ee,ie=ge,ue=C;e:for(;;)switch(v.mode){case R:if(v.wrap===0){v.mode=13;break}for(;L<16;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(2&v.wrap&&N===35615){Y[v.check=0]=255&N,Y[1]=N>>>8&255,v.check=g(v.check,Y,2,0),L=N=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&N)<<8)+(N>>8))%31){k.msg="incorrect header check",v.mode=30;break}if((15&N)!=8){k.msg="unknown compression method",v.mode=30;break}if(L-=4,x=8+(15&(N>>>=4)),v.wbits===0)v.wbits=x;else if(x>v.wbits){k.msg="invalid window size",v.mode=30;break}v.dmax=1<<x,k.adler=v.check=1,v.mode=512&N?10:12,L=N=0;break;case 2:for(;L<16;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(v.flags=N,(255&v.flags)!=8){k.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){k.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=N>>8&1),512&v.flags&&(Y[0]=255&N,Y[1]=N>>>8&255,v.check=g(v.check,Y,2,0)),L=N=0,v.mode=3;case 3:for(;L<32;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}v.head&&(v.head.time=N),512&v.flags&&(Y[0]=255&N,Y[1]=N>>>8&255,Y[2]=N>>>16&255,Y[3]=N>>>24&255,v.check=g(v.check,Y,4,0)),L=N=0,v.mode=4;case 4:for(;L<16;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}v.head&&(v.head.xflags=255&N,v.head.os=N>>8),512&v.flags&&(Y[0]=255&N,Y[1]=N>>>8&255,v.check=g(v.check,Y,2,0)),L=N=0,v.mode=5;case 5:if(1024&v.flags){for(;L<16;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}v.length=N,v.head&&(v.head.extra_len=N),512&v.flags&&(Y[0]=255&N,Y[1]=N>>>8&255,v.check=g(v.check,Y,2,0)),L=N=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(ee<(oe=v.length)&&(oe=ee),oe&&(v.head&&(x=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),d.arraySet(v.head.extra,X,V,oe,x)),512&v.flags&&(v.check=g(v.check,X,oe,V)),ee-=oe,V+=oe,v.length-=oe),v.length))break e;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(ee===0)break e;for(oe=0;x=X[V+oe++],v.head&&x&&v.length<65536&&(v.head.name+=String.fromCharCode(x)),x&&oe<ee;);if(512&v.flags&&(v.check=g(v.check,X,oe,V)),ee-=oe,V+=oe,x)break e}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(ee===0)break e;for(oe=0;x=X[V+oe++],v.head&&x&&v.length<65536&&(v.head.comment+=String.fromCharCode(x)),x&&oe<ee;);if(512&v.flags&&(v.check=g(v.check,X,oe,V)),ee-=oe,V+=oe,x)break e}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;L<16;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(N!==(65535&v.check)){k.msg="header crc mismatch",v.mode=30;break}L=N=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),k.adler=v.check=0,v.mode=12;break;case 10:for(;L<32;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}k.adler=v.check=_(N),L=N=0,v.mode=11;case 11:if(v.havedict===0)return k.next_out=de,k.avail_out=ge,k.next_in=V,k.avail_in=ee,v.hold=N,v.bits=L,2;k.adler=v.check=1,v.mode=12;case 12:if(Z===5||Z===6)break e;case 13:if(v.last){N>>>=7&L,L-=7&L,v.mode=27;break}for(;L<3;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}switch(v.last=1&N,L-=1,3&(N>>>=1)){case 0:v.mode=14;break;case 1:if(ae(v),v.mode=20,Z!==6)break;N>>>=2,L-=2;break e;case 2:v.mode=17;break;case 3:k.msg="invalid block type",v.mode=30}N>>>=2,L-=2;break;case 14:for(N>>>=7&L,L-=7&L;L<32;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if((65535&N)!=(N>>>16^65535)){k.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&N,L=N=0,v.mode=15,Z===6)break e;case 15:v.mode=16;case 16:if(oe=v.length){if(ee<oe&&(oe=ee),ge<oe&&(oe=ge),oe===0)break e;d.arraySet(P,X,V,oe,de),ee-=oe,V+=oe,ge-=oe,de+=oe,v.length-=oe;break}v.mode=12;break;case 17:for(;L<14;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(v.nlen=257+(31&N),N>>>=5,L-=5,v.ndist=1+(31&N),N>>>=5,L-=5,v.ncode=4+(15&N),N>>>=4,L-=4,286<v.nlen||30<v.ndist){k.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;L<3;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}v.lens[he[v.have++]]=7&N,N>>>=3,L-=3}for(;v.have<19;)v.lens[he[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,re={bits:v.lenbits},ue=h(0,v.lens,0,19,v.lencode,0,v.work,re),v.lenbits=re.bits,ue){k.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;Ne=(O=v.lencode[N&(1<<v.lenbits)-1])>>>16&255,nt=65535&O,!((we=O>>>24)<=L);){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(nt<16)N>>>=we,L-=we,v.lens[v.have++]=nt;else{if(nt===16){for(z=we+2;L<z;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(N>>>=we,L-=we,v.have===0){k.msg="invalid bit length repeat",v.mode=30;break}x=v.lens[v.have-1],oe=3+(3&N),N>>>=2,L-=2}else if(nt===17){for(z=we+3;L<z;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}L-=we,x=0,oe=3+(7&(N>>>=we)),N>>>=3,L-=3}else{for(z=we+7;L<z;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}L-=we,x=0,oe=11+(127&(N>>>=we)),N>>>=7,L-=7}if(v.have+oe>v.nlen+v.ndist){k.msg="invalid bit length repeat",v.mode=30;break}for(;oe--;)v.lens[v.have++]=x}}if(v.mode===30)break;if(v.lens[256]===0){k.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,re={bits:v.lenbits},ue=h(w,v.lens,0,v.nlen,v.lencode,0,v.work,re),v.lenbits=re.bits,ue){k.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,re={bits:v.distbits},ue=h(E,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,re),v.distbits=re.bits,ue){k.msg="invalid distances set",v.mode=30;break}if(v.mode=20,Z===6)break e;case 20:v.mode=21;case 21:if(6<=ee&&258<=ge){k.next_out=de,k.avail_out=ge,k.next_in=V,k.avail_in=ee,v.hold=N,v.bits=L,b(k,ie),de=k.next_out,P=k.output,ge=k.avail_out,V=k.next_in,X=k.input,ee=k.avail_in,N=v.hold,L=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;Ne=(O=v.lencode[N&(1<<v.lenbits)-1])>>>16&255,nt=65535&O,!((we=O>>>24)<=L);){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(Ne&&(240&Ne)==0){for(Je=we,wt=Ne,Rt=nt;Ne=(O=v.lencode[Rt+((N&(1<<Je+wt)-1)>>Je)])>>>16&255,nt=65535&O,!(Je+(we=O>>>24)<=L);){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}N>>>=Je,L-=Je,v.back+=Je}if(N>>>=we,L-=we,v.back+=we,v.length=nt,Ne===0){v.mode=26;break}if(32&Ne){v.back=-1,v.mode=12;break}if(64&Ne){k.msg="invalid literal/length code",v.mode=30;break}v.extra=15&Ne,v.mode=22;case 22:if(v.extra){for(z=v.extra;L<z;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}v.length+=N&(1<<v.extra)-1,N>>>=v.extra,L-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;Ne=(O=v.distcode[N&(1<<v.distbits)-1])>>>16&255,nt=65535&O,!((we=O>>>24)<=L);){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if((240&Ne)==0){for(Je=we,wt=Ne,Rt=nt;Ne=(O=v.distcode[Rt+((N&(1<<Je+wt)-1)>>Je)])>>>16&255,nt=65535&O,!(Je+(we=O>>>24)<=L);){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}N>>>=Je,L-=Je,v.back+=Je}if(N>>>=we,L-=we,v.back+=we,64&Ne){k.msg="invalid distance code",v.mode=30;break}v.offset=nt,v.extra=15&Ne,v.mode=24;case 24:if(v.extra){for(z=v.extra;L<z;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}v.offset+=N&(1<<v.extra)-1,N>>>=v.extra,L-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){k.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(ge===0)break e;if(oe=ie-ge,v.offset>oe){if((oe=v.offset-oe)>v.whave&&v.sane){k.msg="invalid distance too far back",v.mode=30;break}Se=oe>v.wnext?(oe-=v.wnext,v.wsize-oe):v.wnext-oe,oe>v.length&&(oe=v.length),_e=v.window}else _e=P,Se=de-v.offset,oe=v.length;for(ge<oe&&(oe=ge),ge-=oe,v.length-=oe;P[de++]=_e[Se++],--oe;);v.length===0&&(v.mode=21);break;case 26:if(ge===0)break e;P[de++]=v.length,ge--,v.mode=21;break;case 27:if(v.wrap){for(;L<32;){if(ee===0)break e;ee--,N|=X[V++]<<L,L+=8}if(ie-=ge,k.total_out+=ie,v.total+=ie,ie&&(k.adler=v.check=v.flags?g(v.check,P,ie,de-ie):m(v.check,P,ie,de-ie)),ie=ge,(v.flags?N:_(N))!==v.check){k.msg="incorrect data check",v.mode=30;break}L=N=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;L<32;){if(ee===0)break e;ee--,N+=X[V++]<<L,L+=8}if(N!==(4294967295&v.total)){k.msg="incorrect length check",v.mode=30;break}L=N=0}v.mode=29;case 29:ue=1;break e;case 30:ue=-3;break e;case 31:return-4;case 32:default:return S}return k.next_out=de,k.avail_out=ge,k.next_in=V,k.avail_in=ee,v.hold=N,v.bits=L,(v.wsize||ie!==k.avail_out&&v.mode<30&&(v.mode<27||Z!==4))&&te(k,k.output,k.next_out,ie-k.avail_out)?(v.mode=31,-4):(se-=k.avail_in,ie-=k.avail_out,k.total_in+=se,k.total_out+=ie,v.total+=ie,v.wrap&&ie&&(k.adler=v.check=v.flags?g(v.check,P,ie,k.next_out-ie):m(v.check,P,ie,k.next_out-ie)),k.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(se==0&&ie===0||Z===4)&&ue===C&&(ue=-5),ue)},p.inflateEnd=function(k){if(!k||!k.state)return S;var Z=k.state;return Z.window&&(Z.window=null),k.state=null,C},p.inflateGetHeader=function(k,Z){var v;return k&&k.state?(2&(v=k.state).wrap)==0?S:((v.head=Z).done=!1,C):S},p.inflateSetDictionary=function(k,Z){var v,X=Z.length;return k&&k.state?(v=k.state).wrap!==0&&v.mode!==11?S:v.mode===11&&m(1,Z,X,0)!==v.check?-3:te(k,Z,X,X)?(v.mode=31,-4):(v.havedict=1,C):S},p.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,u,p){var d=l("../utils/common"),m=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],g=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],b=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];u.exports=function(w,E,C,S,R,y,A,_){var I,D,B,j,$,H,G,U,ae,te=_.bits,k=0,Z=0,v=0,X=0,P=0,V=0,de=0,ee=0,ge=0,N=0,L=null,se=0,ie=new d.Buf16(16),oe=new d.Buf16(16),Se=null,_e=0;for(k=0;k<=15;k++)ie[k]=0;for(Z=0;Z<S;Z++)ie[E[C+Z]]++;for(P=te,X=15;1<=X&&ie[X]===0;X--);if(X<P&&(P=X),X===0)return R[y++]=20971520,R[y++]=20971520,_.bits=1,0;for(v=1;v<X&&ie[v]===0;v++);for(P<v&&(P=v),k=ee=1;k<=15;k++)if(ee<<=1,(ee-=ie[k])<0)return-1;if(0<ee&&(w===0||X!==1))return-1;for(oe[1]=0,k=1;k<15;k++)oe[k+1]=oe[k]+ie[k];for(Z=0;Z<S;Z++)E[C+Z]!==0&&(A[oe[E[C+Z]]++]=Z);if(H=w===0?(L=Se=A,19):w===1?(L=m,se-=257,Se=g,_e-=257,256):(L=b,Se=h,-1),k=v,$=y,de=Z=N=0,B=-1,j=(ge=1<<(V=P))-1,w===1&&852<ge||w===2&&592<ge)return 1;for(;;){for(G=k-de,ae=A[Z]<H?(U=0,A[Z]):A[Z]>H?(U=Se[_e+A[Z]],L[se+A[Z]]):(U=96,0),I=1<<k-de,v=D=1<<V;R[$+(N>>de)+(D-=I)]=G<<24|U<<16|ae|0,D!==0;);for(I=1<<k-1;N&I;)I>>=1;if(I!==0?(N&=I-1,N+=I):N=0,Z++,--ie[k]==0){if(k===X)break;k=E[C+A[Z]]}if(P<k&&(N&j)!==B){for(de===0&&(de=P),$+=v,ee=1<<(V=k-de);V+de<X&&!((ee-=ie[V+de])<=0);)V++,ee<<=1;if(ge+=1<<V,w===1&&852<ge||w===2&&592<ge)return 1;R[B=N&j]=P<<24|V<<16|$-y|0}}return N!==0&&(R[$+N]=k-de<<24|64<<16|0),_.bits=P,0}},{"../utils/common":41}],51:[function(l,u,p){u.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,u,p){var d=l("../utils/common"),m=0,g=1;function b(O){for(var Y=O.length;0<=--Y;)O[Y]=0}var h=0,w=29,E=256,C=E+1+w,S=30,R=19,y=2*C+1,A=15,_=16,I=7,D=256,B=16,j=17,$=18,H=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],U=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],te=new Array(2*(C+2));b(te);var k=new Array(2*S);b(k);var Z=new Array(512);b(Z);var v=new Array(256);b(v);var X=new Array(w);b(X);var P,V,de,ee=new Array(S);function ge(O,Y,he,pe,W){this.static_tree=O,this.extra_bits=Y,this.extra_base=he,this.elems=pe,this.max_length=W,this.has_stree=O&&O.length}function N(O,Y){this.dyn_tree=O,this.max_code=0,this.stat_desc=Y}function L(O){return O<256?Z[O]:Z[256+(O>>>7)]}function se(O,Y){O.pending_buf[O.pending++]=255&Y,O.pending_buf[O.pending++]=Y>>>8&255}function ie(O,Y,he){O.bi_valid>_-he?(O.bi_buf|=Y<<O.bi_valid&65535,se(O,O.bi_buf),O.bi_buf=Y>>_-O.bi_valid,O.bi_valid+=he-_):(O.bi_buf|=Y<<O.bi_valid&65535,O.bi_valid+=he)}function oe(O,Y,he){ie(O,he[2*Y],he[2*Y+1])}function Se(O,Y){for(var he=0;he|=1&O,O>>>=1,he<<=1,0<--Y;);return he>>>1}function _e(O,Y,he){var pe,W,ye=new Array(A+1),xe=0;for(pe=1;pe<=A;pe++)ye[pe]=xe=xe+he[pe-1]<<1;for(W=0;W<=Y;W++){var ve=O[2*W+1];ve!==0&&(O[2*W]=Se(ye[ve]++,ve))}}function we(O){var Y;for(Y=0;Y<C;Y++)O.dyn_ltree[2*Y]=0;for(Y=0;Y<S;Y++)O.dyn_dtree[2*Y]=0;for(Y=0;Y<R;Y++)O.bl_tree[2*Y]=0;O.dyn_ltree[2*D]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Ne(O){8<O.bi_valid?se(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function nt(O,Y,he,pe){var W=2*Y,ye=2*he;return O[W]<O[ye]||O[W]===O[ye]&&pe[Y]<=pe[he]}function Je(O,Y,he){for(var pe=O.heap[he],W=he<<1;W<=O.heap_len&&(W<O.heap_len&&nt(Y,O.heap[W+1],O.heap[W],O.depth)&&W++,!nt(Y,pe,O.heap[W],O.depth));)O.heap[he]=O.heap[W],he=W,W<<=1;O.heap[he]=pe}function wt(O,Y,he){var pe,W,ye,xe,ve=0;if(O.last_lit!==0)for(;pe=O.pending_buf[O.d_buf+2*ve]<<8|O.pending_buf[O.d_buf+2*ve+1],W=O.pending_buf[O.l_buf+ve],ve++,pe===0?oe(O,W,Y):(oe(O,(ye=v[W])+E+1,Y),(xe=H[ye])!==0&&ie(O,W-=X[ye],xe),oe(O,ye=L(--pe),he),(xe=G[ye])!==0&&ie(O,pe-=ee[ye],xe)),ve<O.last_lit;);oe(O,D,Y)}function Rt(O,Y){var he,pe,W,ye=Y.dyn_tree,xe=Y.stat_desc.static_tree,ve=Y.stat_desc.has_stree,Re=Y.stat_desc.elems,Ye=-1;for(O.heap_len=0,O.heap_max=y,he=0;he<Re;he++)ye[2*he]!==0?(O.heap[++O.heap_len]=Ye=he,O.depth[he]=0):ye[2*he+1]=0;for(;O.heap_len<2;)ye[2*(W=O.heap[++O.heap_len]=Ye<2?++Ye:0)]=1,O.depth[W]=0,O.opt_len--,ve&&(O.static_len-=xe[2*W+1]);for(Y.max_code=Ye,he=O.heap_len>>1;1<=he;he--)Je(O,ye,he);for(W=Re;he=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Je(O,ye,1),pe=O.heap[1],O.heap[--O.heap_max]=he,O.heap[--O.heap_max]=pe,ye[2*W]=ye[2*he]+ye[2*pe],O.depth[W]=(O.depth[he]>=O.depth[pe]?O.depth[he]:O.depth[pe])+1,ye[2*he+1]=ye[2*pe+1]=W,O.heap[1]=W++,Je(O,ye,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],(function(Le,Tt){var jn,Vt,ia,Ke,mt,Ht,rt=Tt.dyn_tree,fi=Tt.max_code,Hs=Tt.stat_desc.static_tree,Gs=Tt.stat_desc.has_stree,Ra=Tt.stat_desc.extra_bits,sa=Tt.stat_desc.extra_base,cn=Tt.stat_desc.max_length,Gt=0;for(Ke=0;Ke<=A;Ke++)Le.bl_count[Ke]=0;for(rt[2*Le.heap[Le.heap_max]+1]=0,jn=Le.heap_max+1;jn<y;jn++)cn<(Ke=rt[2*rt[2*(Vt=Le.heap[jn])+1]+1]+1)&&(Ke=cn,Gt++),rt[2*Vt+1]=Ke,fi<Vt||(Le.bl_count[Ke]++,mt=0,sa<=Vt&&(mt=Ra[Vt-sa]),Ht=rt[2*Vt],Le.opt_len+=Ht*(Ke+mt),Gs&&(Le.static_len+=Ht*(Hs[2*Vt+1]+mt)));if(Gt!==0){do{for(Ke=cn-1;Le.bl_count[Ke]===0;)Ke--;Le.bl_count[Ke]--,Le.bl_count[Ke+1]+=2,Le.bl_count[cn]--,Gt-=2}while(0<Gt);for(Ke=cn;Ke!==0;Ke--)for(Vt=Le.bl_count[Ke];Vt!==0;)fi<(ia=Le.heap[--jn])||(rt[2*ia+1]!==Ke&&(Le.opt_len+=(Ke-rt[2*ia+1])*rt[2*ia],rt[2*ia+1]=Ke),Vt--)}})(O,Y),_e(ye,Ye,O.bl_count)}function x(O,Y,he){var pe,W,ye=-1,xe=Y[1],ve=0,Re=7,Ye=4;for(xe===0&&(Re=138,Ye=3),Y[2*(he+1)+1]=65535,pe=0;pe<=he;pe++)W=xe,xe=Y[2*(pe+1)+1],++ve<Re&&W===xe||(ve<Ye?O.bl_tree[2*W]+=ve:W!==0?(W!==ye&&O.bl_tree[2*W]++,O.bl_tree[2*B]++):ve<=10?O.bl_tree[2*j]++:O.bl_tree[2*$]++,ye=W,Ye=(ve=0)===xe?(Re=138,3):W===xe?(Re=6,3):(Re=7,4))}function ue(O,Y,he){var pe,W,ye=-1,xe=Y[1],ve=0,Re=7,Ye=4;for(xe===0&&(Re=138,Ye=3),pe=0;pe<=he;pe++)if(W=xe,xe=Y[2*(pe+1)+1],!(++ve<Re&&W===xe)){if(ve<Ye)for(;oe(O,W,O.bl_tree),--ve!=0;);else W!==0?(W!==ye&&(oe(O,W,O.bl_tree),ve--),oe(O,B,O.bl_tree),ie(O,ve-3,2)):ve<=10?(oe(O,j,O.bl_tree),ie(O,ve-3,3)):(oe(O,$,O.bl_tree),ie(O,ve-11,7));ye=W,Ye=(ve=0)===xe?(Re=138,3):W===xe?(Re=6,3):(Re=7,4)}}b(ee);var re=!1;function z(O,Y,he,pe){ie(O,(h<<1)+(pe?1:0),3),(function(W,ye,xe,ve){Ne(W),se(W,xe),se(W,~xe),d.arraySet(W.pending_buf,W.window,ye,xe,W.pending),W.pending+=xe})(O,Y,he)}p._tr_init=function(O){re||((function(){var Y,he,pe,W,ye,xe=new Array(A+1);for(W=pe=0;W<w-1;W++)for(X[W]=pe,Y=0;Y<1<<H[W];Y++)v[pe++]=W;for(v[pe-1]=W,W=ye=0;W<16;W++)for(ee[W]=ye,Y=0;Y<1<<G[W];Y++)Z[ye++]=W;for(ye>>=7;W<S;W++)for(ee[W]=ye<<7,Y=0;Y<1<<G[W]-7;Y++)Z[256+ye++]=W;for(he=0;he<=A;he++)xe[he]=0;for(Y=0;Y<=143;)te[2*Y+1]=8,Y++,xe[8]++;for(;Y<=255;)te[2*Y+1]=9,Y++,xe[9]++;for(;Y<=279;)te[2*Y+1]=7,Y++,xe[7]++;for(;Y<=287;)te[2*Y+1]=8,Y++,xe[8]++;for(_e(te,C+1,xe),Y=0;Y<S;Y++)k[2*Y+1]=5,k[2*Y]=Se(Y,5);P=new ge(te,H,E+1,C,A),V=new ge(k,G,0,S,A),de=new ge(new Array(0),U,0,R,I)})(),re=!0),O.l_desc=new N(O.dyn_ltree,P),O.d_desc=new N(O.dyn_dtree,V),O.bl_desc=new N(O.bl_tree,de),O.bi_buf=0,O.bi_valid=0,we(O)},p._tr_stored_block=z,p._tr_flush_block=function(O,Y,he,pe){var W,ye,xe=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=(function(ve){var Re,Ye=4093624447;for(Re=0;Re<=31;Re++,Ye>>>=1)if(1&Ye&&ve.dyn_ltree[2*Re]!==0)return m;if(ve.dyn_ltree[18]!==0||ve.dyn_ltree[20]!==0||ve.dyn_ltree[26]!==0)return g;for(Re=32;Re<E;Re++)if(ve.dyn_ltree[2*Re]!==0)return g;return m})(O)),Rt(O,O.l_desc),Rt(O,O.d_desc),xe=(function(ve){var Re;for(x(ve,ve.dyn_ltree,ve.l_desc.max_code),x(ve,ve.dyn_dtree,ve.d_desc.max_code),Rt(ve,ve.bl_desc),Re=R-1;3<=Re&&ve.bl_tree[2*ae[Re]+1]===0;Re--);return ve.opt_len+=3*(Re+1)+5+5+4,Re})(O),W=O.opt_len+3+7>>>3,(ye=O.static_len+3+7>>>3)<=W&&(W=ye)):W=ye=he+5,he+4<=W&&Y!==-1?z(O,Y,he,pe):O.strategy===4||ye===W?(ie(O,2+(pe?1:0),3),wt(O,te,k)):(ie(O,4+(pe?1:0),3),(function(ve,Re,Ye,Le){var Tt;for(ie(ve,Re-257,5),ie(ve,Ye-1,5),ie(ve,Le-4,4),Tt=0;Tt<Le;Tt++)ie(ve,ve.bl_tree[2*ae[Tt]+1],3);ue(ve,ve.dyn_ltree,Re-1),ue(ve,ve.dyn_dtree,Ye-1)})(O,O.l_desc.max_code+1,O.d_desc.max_code+1,xe+1),wt(O,O.dyn_ltree,O.dyn_dtree)),we(O),pe&&Ne(O)},p._tr_tally=function(O,Y,he){return O.pending_buf[O.d_buf+2*O.last_lit]=Y>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&Y,O.pending_buf[O.l_buf+O.last_lit]=255&he,O.last_lit++,Y===0?O.dyn_ltree[2*he]++:(O.matches++,Y--,O.dyn_ltree[2*(v[he]+E+1)]++,O.dyn_dtree[2*L(Y)]++),O.last_lit===O.lit_bufsize-1},p._tr_align=function(O){ie(O,2,3),oe(O,D,te),(function(Y){Y.bi_valid===16?(se(Y,Y.bi_buf),Y.bi_buf=0,Y.bi_valid=0):8<=Y.bi_valid&&(Y.pending_buf[Y.pending++]=255&Y.bi_buf,Y.bi_buf>>=8,Y.bi_valid-=8)})(O)}},{"../utils/common":41}],53:[function(l,u,p){u.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,u,p){(function(d){(function(m,g){if(!m.setImmediate){var b,h,w,E,C=1,S={},R=!1,y=m.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(m);A=A&&A.setTimeout?A:m,b={}.toString.call(m.process)==="[object process]"?function(B){process.nextTick(function(){I(B)})}:(function(){if(m.postMessage&&!m.importScripts){var B=!0,j=m.onmessage;return m.onmessage=function(){B=!1},m.postMessage("","*"),m.onmessage=j,B}})()?(E="setImmediate$"+Math.random()+"$",m.addEventListener?m.addEventListener("message",D,!1):m.attachEvent("onmessage",D),function(B){m.postMessage(E+B,"*")}):m.MessageChannel?((w=new MessageChannel).port1.onmessage=function(B){I(B.data)},function(B){w.port2.postMessage(B)}):y&&"onreadystatechange"in y.createElement("script")?(h=y.documentElement,function(B){var j=y.createElement("script");j.onreadystatechange=function(){I(B),j.onreadystatechange=null,h.removeChild(j),j=null},h.appendChild(j)}):function(B){setTimeout(I,0,B)},A.setImmediate=function(B){typeof B!="function"&&(B=new Function(""+B));for(var j=new Array(arguments.length-1),$=0;$<j.length;$++)j[$]=arguments[$+1];var H={callback:B,args:j};return S[C]=H,b(C),C++},A.clearImmediate=_}function _(B){delete S[B]}function I(B){if(R)setTimeout(I,0,B);else{var j=S[B];if(j){R=!0;try{(function($){var H=$.callback,G=$.args;switch(G.length){case 0:H();break;case 1:H(G[0]);break;case 2:H(G[0],G[1]);break;case 3:H(G[0],G[1],G[2]);break;default:H.apply(g,G)}})(j)}finally{_(B),R=!1}}}}function D(B){B.source===m&&typeof B.data=="string"&&B.data.indexOf(E)===0&&I(+B.data.slice(E.length))}})(typeof self>"u"?d===void 0?this:d:self)}).call(this,typeof Rs<"u"?Rs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(fc)),fc.exports}var Qy=Zy();const Ky=Cc(Qy),Wy=({logs:c,currentRound:o,currentPaperVersion:l,filePrefix:u,dataAlert:p,dataFileName:d,dataFileContent:m})=>{const[g,b]=be.useState([]),[h,w]=be.useState(null),[E,C]=be.useState(!1),[S,R]=be.useState(!1),[y,A]=be.useState(null),[_,I]=be.useState(null),[D,B]=be.useState(!1),[j,$]=be.useState(!1),H=async()=>{C(!0),w(null);const Z=ra(l,"icis_paper"),v=li(o),X=jc();if(!Z){w("Missing paper file to save"),C(!1);return}try{const P=u?`${u}_`:"",V=new Ky,de=[],ee=zc();ee&&(V.file(ee.filename,ee.blob),de.push(ee.filename),console.log(`[SaveAll] Added PDF: ${ee.filename}`));const ge=`${P}icis_paper_v${l}_FINAL.tex`;V.file(ge,Z),de.push(ge),console.log(`[SaveAll] Added TeX: ${ge}`);const N=zp();if(N){const _e=`${P}${N.filename}`;V.file(_e,N.content),de.push(_e),console.log(`[SaveAll] Added BibTeX: ${_e}`)}const L=Dp();if(L.length>0){console.log(`[SaveAll] Adding ${L.length} PNG figures...`);const _e=await Op();for(const we of _e)V.file(we.filename,we.blob),de.push(we.filename);console.log(`[SaveAll] Added ${_e.length} PNG figures`)}if(d&&m&&(V.file(d,m),de.push(d),console.log(`[SaveAll] Added data file: ${d}`)),v){const _e=`${P}feedback_v${o}.json`;V.file(_e,JSON.stringify(v,null,2)),de.push(_e)}if(X&&X.length>0)for(const _e of X){const we=`${P}oversight_v${_e.version||1}.json`;V.file(we,JSON.stringify(_e,null,2)),de.push(we)}const se=await V.generateAsync({type:"blob"}),ie=`${P}icis_submission_v${l}.zip`,oe=URL.createObjectURL(se),Se=document.createElement("a");Se.href=oe,Se.download=ie,document.body.appendChild(Se),Se.click(),document.body.removeChild(Se),URL.revokeObjectURL(oe),console.log(`[SaveAll] Downloaded ${ie} with ${de.length} files`),b([ie,...de])}catch(P){console.error("[SaveAll] Error:",P),w(P instanceof Error?P.message:"Failed to create zip file")}C(!1)},G=async()=>{R(!0),A(null),w(null);const Z=ra(l,"icis_paper");if(!Z){w("No paper content available to compile"),R(!1);return}const X=`${u?`${u}_`:""}icis_paper_v${l}_FINAL.tex`,P=jp();console.log(`[Compile] Compiling with ${P.length} PNG figures`);const V=await Sp(X,Z,P.length>0?P:void 0);A(V),V.success||w(V.error||"PDF compilation failed"),R(!1)},U=()=>{y!=null&&y.pdfFilename&&Ap(y.pdfFilename)},ae=async()=>{B(!0),$(!1);const v=`${u?`${u}_`:""}icis_paper_v${l}_FINAL.tex`,X=await _p(v);I(X),B(!1)},te=()=>{_!=null&&_.fullUrl&&(navigator.clipboard.writeText(_.fullUrl),$(!0),setTimeout(()=>$(!1),3e3))},k=()=>{_!=null&&_.fullUrl&&wp(_.fullUrl)};return s.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[s.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:s.jsx(Dc,{size:40})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),s.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",o," revision cycle(s)."]}),s.jsx(ci,{logs:c,height:"h-32"}),s.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Paper compiled (v",l,")"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," All sections verified"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Submission package generated"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),s.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[s.jsx("button",{onClick:G,disabled:S||E,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:S?s.jsxs(s.Fragment,{children:[s.jsx(Qh,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Ms,{size:18}),"Compile LaTeX to PDF"]})}),(y==null?void 0:y.success)&&s.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),s.jsxs("p",{className:"text-xs text-emerald-600",children:[y.pdfFilename," (",Math.round((y.fileSize||0)/1024)," KB)",y.pageCount&&` • ${y.pageCount} pages`]})]}),s.jsxs("button",{onClick:U,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[s.jsx(js,{size:16}),"Download"]})]})}),(y==null?void 0:y.success)&&(y==null?void 0:y.exceedsLimit)&&s.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),s.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",y.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),p&&s.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),s.jsx("p",{className:"text-xs text-orange-700 mt-1",children:p})]}),(y==null?void 0:y.success)&&s.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(vc,{size:18,className:"text-blue-600"}),s.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),s.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),_!=null&&_.success?s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",readOnly:!0,value:_.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),s.jsxs("button",{onClick:te,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[s.jsx(H0,{size:14}),j?"Copied!":"Copy"]})]}),s.jsx("div",{className:"flex gap-2",children:s.jsxs("button",{onClick:k,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[s.jsx($0,{size:14}),"Open Preview"]})}),s.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",_.expiresIn]})]}):s.jsx("button",{onClick:ae,disabled:D,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:D?s.jsxs(s.Fragment,{children:[s.jsx(Qh,{size:16,className:"animate-spin"}),"Creating Link..."]}):s.jsxs(s.Fragment,{children:[s.jsx(ay,{size:16}),"Create Shareable Link"]})})]}),s.jsxs("button",{onClick:H,disabled:E||S,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(yy,{size:18,className:E?"animate-pulse":""}),E?"Creating ZIP...":"Download All Files (.zip)"]}),s.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads ZIP with PDF, .tex, .bib, PNG figures, and data files"}),g.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[s.jsxs("p",{className:"font-medium mb-1",children:["Downloaded: ",g[0]]}),s.jsxs("p",{className:"text-xs",children:["Contains ",g.length-1," files: ",g.slice(1).map(Z=>Z.split(/[/\\]/).pop()).join(", ")]})]}),h&&s.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[s.jsx("p",{className:"font-medium",children:"Error:"}),s.jsx("p",{className:"text-xs",children:h}),(y==null?void 0:y.log)&&s.jsxs("details",{className:"mt-2 text-left",children:[s.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),s.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:y.log})]})]}),s.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},Jy=({state:c,isProcessing:o,onAction:l,uploadedFiles:u,onFileChange:p,detectionStatus:d,onRefreshDetection:m,onStageAbort:g,onStageRestart:b,filePrefix:h,dataFileName:w,dataFileContent:E})=>{const[C,S]=be.useState(),R=A=>{S(A),l("PROCEED_TO_SUPERVISOR")},y=()=>{switch(c.currentStage){case me.SETUP:const A=c.rounds.length>0||c.currentPaperVersion>0||c.paperContent!=="";return s.jsx(Py,{logs:c.logs,stageStatus:c.stages[me.SETUP],isProcessing:o,uploadedFiles:u,onFileChange:p,onAction:l,detectionStatus:d,onRefreshDetection:m,hasExistingCase:A});case me.BUILDER:return s.jsx(Vy,{logs:c.logs,isProcessing:o,isPartialPaper:c.isPartialPaper,currentBuilderStep:c.currentBuilderStep,paperContent:c.paperContent,onAbort:()=>g==null?void 0:g(me.BUILDER),onRestart:()=>b==null?void 0:b(me.BUILDER)});case me.REVIEWER:const _=c.stages[me.REVIEWER]===Ie.COMPLETED;return s.jsx(qy,{logs:c.logs,isProcessing:o,currentRound:c.currentRound,isComplete:_,onProceedToSupervisor:R,onAbort:()=>g==null?void 0:g(me.REVIEWER),onRestart:()=>b==null?void 0:b(me.REVIEWER),filePrefix:h});case me.SUPERVISOR:const I=Ds(c.currentRound),D=jc();return s.jsx($y,{currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,lastFeedback:c.lastFeedback,isProcessing:o,oversightData:I,allOversight:D,onAction:l,reviewOutputFiles:C});case me.REVISER:return s.jsx(Xy,{logs:c.logs,isProcessing:o,currentPaperVersion:c.currentPaperVersion,paperContent:c.paperContent,onAbort:()=>g==null?void 0:g(me.REVISER),onRestart:()=>b==null?void 0:b(me.REVISER)});case me.FINALIZE:return s.jsx(Wy,{logs:c.logs,currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,filePrefix:h,dataAlert:c.dataAlert,dataFileName:w,dataFileContent:E});default:return s.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:s.jsxs("p",{children:["Unknown stage: ",c.currentStage]})})}};return s.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:y()})};function Fs(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://icis-deploy-12-10-2025.vercel.app":""}function Ps(){return{"Content-Type":"application/json"}}async function ev(c){const o=Fs(),l=new URLSearchParams,u=`${o}/api/participants${l.toString()?`?${l}`:""}`,d=await(await fetch(u,{headers:Ps()})).json();if(!d.success)throw new Error(d.error||"Failed to fetch participants");return d.participants}async function np(c){const o=Fs(),u=await(await fetch(`${o}/api/participants`,{method:"PATCH",headers:Ps(),body:JSON.stringify(c)})).json();if(!u.success)throw new Error(u.error||"Failed to update participant");return u.participant}async function tv(c){const o=Fs(),u=await(await fetch(`${o}/api/participants`,{method:"DELETE",headers:Ps(),body:JSON.stringify({email:c})})).json();if(!u.success)throw new Error(u.error||"Failed to delete participant")}async function nv(){const c=Fs(),l=await(await fetch(`${c}/api/research-stats`,{headers:Ps()})).json();if(!l.success)throw new Error(l.error||"Failed to fetch research stats");return l.stats}const Ns=({label:c,value:o,icon:l,color:u,subtext:p})=>s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-slate-500",children:c}),s.jsx("p",{className:`text-2xl font-bold ${u}`,children:o}),p&&s.jsx("p",{className:"text-xs text-slate-400 mt-1",children:p})]}),s.jsx("div",{className:`p-2 rounded-lg ${u.replace("text-","bg-").replace("-600","-100")}`,children:l})]})}),av=({label:c,count:o,total:l,color:u})=>{const p=l>0?o/l*100:0;return s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[s.jsx("span",{className:"text-slate-600",children:c}),s.jsx("span",{className:"text-slate-800 font-medium",children:o})]}),s.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:s.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${u}`,style:{width:`${Math.max(p,2)}%`}})})]})},rv=({onViewParticipants:c})=>{const[o,l]=be.useState(null),[u,p]=be.useState(!0),[d,m]=be.useState(null),g=async()=>{p(!0),m(null);try{const h=await nv();l(h)}catch(h){m(h instanceof Error?h.message:"Failed to load stats")}finally{p(!1)}};if(be.useEffect(()=>{g()},[]),u)return s.jsx("div",{className:"flex items-center justify-center h-64",children:s.jsx(tn,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(d)return s.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[s.jsx(xc,{size:20}),s.jsxs("span",{children:["Error: ",d]})]}),s.jsx("button",{onClick:g,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!o)return null;const b=[{label:"1. Registered",count:o.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:o.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:o.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:o.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:o.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:o.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:o.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:o.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:o.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:o.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:o.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:o.funnel.dropped_out||0,color:"bg-red-500"}];return s.jsxs("div",{className:"p-6 space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),s.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),s.jsxs("button",{onClick:g,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(tn,{size:16}),"Refresh"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[s.jsx(Ns,{label:"Total Participants",value:o.total,icon:s.jsx(mp,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${o.active} active`}),s.jsx(Ns,{label:"Surveys Sent",value:o.surveysSent,icon:s.jsx(Dc,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),s.jsx(Ns,{label:"Surveys Completed",value:o.surveysCompleted,icon:s.jsx(yc,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),s.jsx(Ns,{label:"Completion Rate",value:`${o.completionRate}%`,icon:s.jsx(hp,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),o.alerts&&o.alerts.length>0&&s.jsx("div",{className:"space-y-2",children:o.alerts.map((h,w)=>s.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${h.type==="stuck"?"bg-amber-50 border-amber-200":h.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[s.jsx(xc,{size:18,className:h.type==="stuck"?"text-amber-500":h.type==="pending_survey"?"text-blue-500":"text-slate-500"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-sm text-slate-800",children:h.message}),s.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[h.participants.slice(0,3).join(", "),h.participants.length>3&&` +${h.participants.length-3} more`]})]})]},w))}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(mc,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),s.jsx("div",{className:"space-y-1",children:b.map(h=>s.jsx(av,{label:h.label,count:h.count,total:o.total,color:h.color},h.label))})]}),s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(R0,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),s.jsx("span",{className:"text-lg font-bold text-emerald-600",children:o.groups.group1.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group1.dropRate,"%"]})]})]})]}),s.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),s.jsx("span",{className:"text-lg font-bold text-blue-600",children:o.groups.group2.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group2.dropRate,"%"]})]})]})]}),o.groups.unassigned>0&&s.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:s.jsxs("span",{className:"text-sm text-slate-600",children:[o.groups.unassigned," unassigned participant(s)"]})})]})]})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{onClick:c,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},wc={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Mp={1:"With Oversight",2:"Control (No Oversight)"},iv=({status:c})=>{const o={registered:"bg-gray-100 text-gray-700",interview_completed:"bg-blue-100 text-blue-700",setup_completed:"bg-sky-100 text-sky-700",builder_completed:"bg-amber-100 text-amber-700",reviewer_completed:"bg-orange-100 text-orange-700",supervisor_completed:"bg-purple-100 text-purple-700",reviser_completed:"bg-indigo-100 text-indigo-700",finalize_completed:"bg-teal-100 text-teal-700",paper_sent:"bg-cyan-100 text-cyan-700",survey_sent:"bg-violet-100 text-violet-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o[c]}`,children:wc[c]})},sv=({groupId:c})=>{if(c===null)return s.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const o=c===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o}`,children:Mp[c]})},lv=({onBack:c})=>{const[o,l]=be.useState([]),[u,p]=be.useState(!0),[d,m]=be.useState(null),[g,b]=be.useState(""),[h,w]=be.useState(""),[E,C]=be.useState("all"),[S,R]=be.useState(null),[y,A]=be.useState(null),_=async()=>{p(!0),m(null);try{const G=await ev();l(G)}catch(G){m(G instanceof Error?G.message:"Failed to load participants")}finally{p(!1)}};be.useEffect(()=>{_()},[]);const I=o.filter(G=>{const U=!g||G.email.toLowerCase().includes(g.toLowerCase())||G.name.toLowerCase().includes(g.toLowerCase()),ae=!h||G.status===h,te=E==="all"||G.group_id===E;return U&&ae&&te}),D=async(G,U)=>{try{await np({email:G,status:U}),await _(),R(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update status")}},B=async(G,U)=>{try{await np({email:G,group_id:U}),await _(),R(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update group")}},j=async G=>{if(confirm(`Are you sure you want to delete participant ${G}?`))try{await tv(G),await _(),R(null)}catch(U){alert(U instanceof Error?U.message:"Failed to delete participant")}},$=G=>new Date(G).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),H=["registered","interview_completed","setup_completed","builder_completed","reviewer_completed","supervisor_completed","reviser_completed","finalize_completed","paper_sent","survey_sent","survey_completed","dropped_out"];return s.jsxs("div",{className:"p-6 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:c,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:s.jsx(I0,{size:20,className:"text-slate-600"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),s.jsxs("p",{className:"text-slate-500 text-sm",children:[I.length," of ",o.length," participants"]})]})]}),s.jsxs("button",{onClick:_,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(tn,{size:16,className:u?"animate-spin":""}),"Refresh"]})]}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[s.jsx(fp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),s.jsx("input",{type:"text",placeholder:"Search by name or email...",value:g,onChange:G=>b(G.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:h,onChange:G=>w(G.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"",children:"All Statuses"}),H.map(G=>s.jsx("option",{value:G,children:wc[G]},G))]}),s.jsx(gc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:E===null?"null":E==="all"?"all":E,onChange:G=>{const U=G.target.value;C(U==="all"?"all":U==="null"?null:parseInt(U))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"all",children:"All Groups"}),s.jsx("option",{value:"1",children:"Group 1: With Oversight"}),s.jsx("option",{value:"2",children:"Group 2: Control"}),s.jsx("option",{value:"null",children:"Unassigned"})]}),s.jsx(gc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),d&&s.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:d}),s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:s.jsxs("tr",{children:[s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),s.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),s.jsx("tbody",{children:u?s.jsx("tr",{children:s.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[s.jsx(tn,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):I.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):I.map(G=>s.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[s.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:G.name||s.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),s.jsx("td",{className:"px-4 py-3 text-slate-600",children:G.email}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(iv,{status:G.status})}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(sv,{groupId:G.group_id})}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:$(G.registered_at)}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:$(G.updated_at)}),s.jsxs("td",{className:"px-4 py-3 text-right relative",children:[s.jsx("button",{onClick:()=>R(S===G.id?null:G.id),className:"p-1 rounded hover:bg-slate-100",children:s.jsx(dp,{size:16,className:"text-slate-400"})}),S===G.id&&s.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),H.map(U=>s.jsxs("button",{onClick:()=>D(G.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.status===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.status===U&&s.jsx(on,{size:12}),s.jsx("span",{className:G.status===U?"":"ml-4",children:wc[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map(U=>s.jsxs("button",{onClick:()=>B(G.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.group_id===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.group_id===U&&s.jsx(on,{size:12}),s.jsx("span",{className:G.group_id===U?"":"ml-4",children:Mp[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsxs("button",{onClick:()=>j(G.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[s.jsx(Ey,{size:14}),"Delete Participant"]})]})]})]},G.id))})]})})})]})},ov=({onClose:c})=>{const[o,l]=be.useState("dashboard");return s.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:o==="dashboard"?s.jsx(rv,{onViewParticipants:()=>l("participants")}):s.jsx(lv,{onBack:()=>l("dashboard")})})},cv="modulepreload",uv=function(c){return"/asd/"+c},ap={},hc=function(o,l,u){let p=Promise.resolve();if(l&&l.length>0){let m=function(h){return Promise.all(h.map(w=>Promise.resolve(w).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),b=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));p=m(l.map(h=>{if(h=uv(h),h in ap)return;ap[h]=!0;const w=h.endsWith(".css"),E=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${E}`))return;const C=document.createElement("link");if(C.rel=w?"stylesheet":cv,w||(C.as="script"),C.crossOrigin="",C.href=h,b&&C.setAttribute("nonce",b),document.head.appendChild(C),w)return new Promise((S,R)=>{C.addEventListener("load",S),C.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function d(m){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=m,window.dispatchEvent(g),!g.defaultPrevented)throw m}return p.then(m=>{for(const g of m||[])g.status==="rejected"&&d(g.reason);return o().catch(d)})},dv=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
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
`,fv=`================================================================================\r
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
`,hv=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
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
c) Preserve ALL empirical content (tables, figures, results)\r
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
`,pv=`================================================================================
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
`,mv=`================================================================================
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
`,gv=`================================================================================
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
`,yv=`ICIS Paper Title\r
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
`,vv={SETUP:pv,BUILDER:dv,REVIEWER:fv,SUPERVISOR:mv,REVISER:hv,FINALIZE:gv,TEMPLATE:yv};function bv(c){return c.replace(/\{ICIS_PATH\}/g,sp)}const xv=Object.fromEntries(Object.entries(vv).map(([c,o])=>[c,bv(o)]));async function Up(c){const o=xv[c];return o||(console.error(`Prompt not found: ${c}`),`[Prompt not found: ${c}]`)}const Rc="https://icis-deploy-12-10-2025.vercel.app",Ls="http://localhost:3001";function Bp(){return{"Content-Type":"application/json"}}let Uc="research";const Fp={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function Pp(){return Fp[Uc].gemini}function Tc(){return Fp[Uc].openai}function Sv(c){Uc=c,console.log(`[GeminiService] Paper mode set to: ${c}`),console.log(`[GeminiService] Using Gemini model: ${Pp()}`),console.log(`[GeminiService] Using OpenAI model: ${Tc()}`)}console.log("[API] Using Vercel proxy:",Rc);class zs extends Error{constructor(o,l,u,p=!1,d){super(l),this.type=o,this.userMessage=l,this.technicalDetails=u,this.retryable=p,this.statusCode=d,this.name="GeminiError"}}const Vp=c=>new Promise(o=>setTimeout(o,c));async function Ev(c,o){var h,w,E,C,S;const l=o===Ls?`${o}/api/gemini/chat`:`${o}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${l}`);const u={...c,model:Pp()},p=new AbortController,d=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),p.abort()},18e4),m=await fetch(l,{method:"POST",headers:Bp(),body:JSON.stringify(u),signal:p.signal});if(clearTimeout(d),!m.ok){const R=await m.json().catch(()=>({error:"Unknown error"}));throw new zs("UNKNOWN",`Gemini proxy error: ${R.error||R.details||"Unknown error"}`,JSON.stringify(R),m.status>=500)}const g=await m.json(),b=(S=(C=(E=(w=(h=g.candidates)==null?void 0:h[0])==null?void 0:w.content)==null?void 0:E.parts)==null?void 0:C[0])==null?void 0:S.text;if(!b)throw new zs("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(g).substring(0,200),!0);return b}async function fr(c,o){const l={contents:[{parts:[{text:c}]}],generationConfig:{maxOutputTokens:8192,temperature:.7}};o&&(l.systemInstruction={parts:[{text:o}]});const u=await Yp();if(u.type==="vercel")return console.log("[Gemini] Using Vercel proxy..."),Ev(l,u.baseUrl);throw new zs("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function pc(c){let o=c;const l=o.match(/```latex\s*([\s\S]*?)\s*```/);l&&(o=l[1]);const u=o.indexOf("\\end{document}");return u!==-1&&(o=o.substring(0,u+14)),o=o.replace(/```javascript[\s\S]*?```/g,""),o=o.replace(/```js[\s\S]*?```/g,""),o=o.replace(/```python[\s\S]*?```/g,""),o=o.replace(/```[\s\S]*?```/g,""),o=o.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/Verification Report:[\s\S]*$/gi,""),o=o.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/console\.log\([\s\S]*?\);/g,""),o=o.replace(/const \w+ = \{[\s\S]*?\};/g,""),o=o.trim(),console.log(`[cleanLatexOutput] Cleaned content from ${c.length} to ${o.length} characters`),o}async function Av(c,o,l="application/pdf"){throw new zs("API_KEY_INVALID","Gemini API key is not configured","Missing VITE_GEMINI_API_KEY",!1)}function _v(c){const o=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
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
Be specific and detailed enough for replication.`,minWords:1e3}];return c?o.push({name:"Conclusion",key:"conclusion",prompt:`Write a brief Conclusion section (400-500 words) for a research-in-progress paper that:
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
5. Sort entries alphabetically by citation key`,minWords:500}),o}async function wv(c,o){const l=Object.entries(o.previousSections).map(([b,h])=>`[${b}]
${h.substring(0,500)}...`).join(`

`);let u="";if(c.key==="references"){const b=Object.values(o.previousSections).join(`
`),h=/\(([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?),?\s*(\d{4})\)/g,w=new Set;let E;for(;(E=h.exec(b))!==null;){const C=E[1].replace(/\s+&\s+/g," & ").replace(/\s+and\s+/g," & "),S=E[2];w.add(`${C} (${S})`)}if(w.size>0){const C=[...w].sort().join(`
- `);console.log(`[generateSection] Found ${w.size} inline citations in paper`),u=`
CITATIONS USED IN PAPER:
The following citations were used in the paper body. Ensure you include matching references:
- ${C}

Generate complete APA references for each of these citations.
`}}let p="";const d=["abstract","introduction","methodology","results","discussion","conclusion"];o.dataSummary&&d.includes(c.key)?(console.log(`[generateSection] Adding data summary to ${c.key} section (${o.dataSummary.length} chars)`),c.key==="methodology"||c.key==="results"?p=`
ACTUAL DATA FILE ANALYSIS:
The following is a summary of the actual data file that will be used in this research.
You MUST incorporate these specific details into your writing:

${o.dataSummary}

IMPORTANT: Use the ACTUAL column names, sample sizes, and statistics from the data summary above.
Do NOT use generic placeholders or made-up values - use the real data characteristics.
`:p=`
EMPIRICAL STUDY CONTEXT:
This research includes EMPIRICAL DATA analysis. A real dataset has been provided with the following characteristics:
${o.dataSummary.substring(0,1e3)}

IMPORTANT FOR ${c.key.toUpperCase()}:
- This is an EMPIRICAL study with real data, NOT a purely theoretical paper
- Mention the empirical nature of the research appropriately for this section
- Reference the data-driven approach where relevant
`):o.dataSummary&&console.log(`[generateSection] Data summary available but not used for ${c.key} section`);const m=`You are writing an academic research paper for ICIS (International Conference on Information Systems).

RESEARCH CONTEXT (from interview):
${o.interviewTranscript.substring(0,3e3)}
${p}
${u}
${l?`PREVIOUSLY WRITTEN SECTIONS (for continuity and alignment):
${l}

IMPORTANT: If a TITLE has been generated above, ensure your content aligns with and supports that title.

`:""}

NOW WRITE THE ${c.name.toUpperCase()} SECTION:

${c.prompt}

IMPORTANT:
- Write in formal academic style
- Use flowing paragraphs (150-250 words each)
- Minimum ${c.minWords} words
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
- References are generated separately and will appear at the end of the full paper`;return await fr(m,"You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.")}const Rv=async(c="Mock transcript content...",o=!1,l,u,p)=>{var R,y,A,_;console.log(`[runBuilder] ENTRY - dataFileName="${u}" (type: ${typeof u})`);const d=_v(o),m={};console.log(`[Builder] Starting section-by-section generation (${d.length} sections, ${o?"partial":"full"} paper)`);let g,b;if(u){console.log(`[Builder] Data file provided: ${u} - analyzing for ALL research types`),l==null||l("Data Analysis","starting");try{const I=await Hp(u,D=>console.log(`[Builder] ${D}`),p);console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((R=I.dataSummary)==null?void 0:R.length)||0,error:I.error}),I.success&&I.dataSummary?(g=I.dataSummary,console.log("[Builder] Data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",g.substring(0,500)),l==null||l("Data Analysis","completed")):(b=`*** DATA ALERT: Could not analyze data file "${u}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${b}`),l==null||l("Data Analysis","error"))}catch(I){b=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${b}`),l==null||l("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data analysis");let h=[],w=!1,E="";if(!o)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations BEFORE Results section..."),console.log(`[Builder] Data summary available: ${!!g}, Data file: ${u||"none"}`);const I=`Research Interview: ${c.substring(0,2e3)}`,D=await Nc(c,I,u,B=>console.log(`[Builder] ${B}`),g);h=D.figures,w=D.usedSyntheticData,h.length>0&&(E=`

GENERATED FIGURES (reference these in your Results section):
`,h.forEach((B,j)=>{E+=`- Figure ${j+1} (\\ref{fig:fig${j+1}}): ${B.description}
`}),E+=`
IMPORTANT: Reference each figure in the text using Figure~\\ref{fig:fig1}, Figure~\\ref{fig:fig2}, etc.
`,E+=`Example: "As shown in Figure~\\ref{fig:fig1}, the distribution of..."
`),D.dataAlert&&(b=b?`${b}
${D.dataAlert}`:D.dataAlert),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${h.length} figures before Results section`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error");const D=`*** VISUALIZATION ERROR: ${I.message}`;b=b?`${b}
${D}`:D,w=!0}for(const I of d)try{l==null||l(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const D=I.key==="results"&&E?(g||"")+E:g,B=await wv(I,{interviewTranscript:c,previousSections:m,dataSummary:D});m[I.key]=B,l==null||l(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${B.split(/\s+/).length} words)`),await Vp(500)}catch(D){throw l==null||l(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,D),new Error(`Failed to generate ${I.name}: ${D.message}`)}if(!o&&h.length===0)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations (post-sections fallback)...");const I=`
Abstract: ${((y=m.abstract)==null?void 0:y.substring(0,500))||""}
Research Focus: ${((A=m.introduction)==null?void 0:A.substring(0,500))||""}
Methodology: ${((_=m.methodology)==null?void 0:_.substring(0,500))||""}
`,D=await Nc(c,I,u,B=>console.log(`[Builder] ${B}`),g);h=D.figures,w=D.usedSyntheticData,D.dataAlert&&(b=b?`${b}
${D.dataAlert}`:D.dataAlert),!g&&D.dataSummary&&(g=D.dataSummary),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${h.length} figures (fallback)`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error"),w=!0}const C=Ov(m,o,h,w),S=C.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${S} words, ${h.length} figures`),{paperContent:C,dataAlert:b,usedSyntheticData:w,dataSummary:g}};function Tv(c){let o=c;o=o.replace(/^```(?:bibtex|bib|latex|tex)?\s*\n?/i,""),o=o.replace(/\n?```\s*$/i,"");const l=o.search(/@\w+\s*\{/);l>0&&(o=o.substring(l));let u=0,p=o.length;for(let m=0;m<o.length;m++)o[m]==="{"&&u++,o[m]==="}"&&(u--,u===0&&(p=m+1));p<o.length&&(o=o.substring(0,p)),o=o.trim();const d=`% Bibliography generated by ICIScopilot
% ${new Date().toISOString()}

`;return console.log(`[BibTeX] Cleaned content: ${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries`),d+o}function Nv(c){let o=c;return o=o.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),o=o.replace(/([^\\])%/g,"$1\\%"),o=o.replace(/([^\\])& /g,"$1\\& "),o=o.replace(/([^\\])#/g,"$1\\#"),o=o.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),o=o.replace(/ \*([^*\s])/g," $\\ast$$1"),o=o.replace(/([^*\s])\* /g,"$1$\\ast$ "),o=o.replace(/__/g,"\\_\\_"),o=o.replace(/"/g,"''"),o=o.replace(/"/g,"``"),o=o.replace(/'/g,"'"),o=o.replace(/'/g,"`"),o}function Cv(c){let o=c.replace(/\n*References:\s*\n([\s\S]*?)(?=\\section|$)/gi,"");return o=o.replace(/\\section\*?\{References\}[\s\S]*?(?=\\section|$)/gi,""),o=o.replace(/\n\nReferences\n\n((?:[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+)/gi,""),o=o.trim(),o}const Iv=`\\documentclass[12pt]{article}
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

`,Dv=`
\\end{document}
`;function Ov(c,o,l=[],u=!1){const p=o?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],d={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let m=Iv;u&&!o&&(m+=`% ============================================================================
% IMPORTANT NOTICE
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Data}\\\\[0.5em]
The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings. This paper is a draft produced by ICIScopilot and requires verification of all data before submission.
}}
\\end{center}
\\vspace{1em}

`);for(const g of p)if(c[g]){let b=Nv(c[g]);if(g!=="references"&&(b=Cv(b)),g==="title")m+=`\\title{${b}}
\\maketitle

`;else if(g==="abstract")m+=`\\begin{abstract}
${b}
\\end{abstract}

`;else if(g==="references"){const h=Tv(c[g]);kp("references.bib",h),m+=`\\section*{References}
\\nocite{*}
\\bibliographystyle{apalike}
\\bibliography{references}
`}else g==="results"&&l.length>0?(m+=`\\section{${d[g]}}

`,u&&(m+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),m+=Gp(l),m+=`
${b}

`):m+=`\\section{${d[g]}}

${b}

`}return m+=Dv,m}async function jv(c,o,l){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),l==null||l("Analyzing data with AI...");const u=c.split(`
`),p=u.slice(0,101).join(`
`),d=`You are a data analyst. Analyze this CSV data and provide a structured summary.

CSV FILE: ${o}
TOTAL ROWS (estimate): ${u.length-1}

DATA SAMPLE (first 100 rows):
\`\`\`
${p}
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
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const m=await fr(d,"Analyze CSV data");if(m)return console.log("[DataAnalysis] Gemini analysis complete"),l==null||l("AI data analysis complete"),{success:!0,dataSummary:m,dataFileFound:!0}}catch(m){console.error("[DataAnalysis] Gemini analysis failed:",m)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function Hp(c,o,l){var d,m,g,b,h,w,E,C,S,R;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${c}" (type: ${typeof c})`),l){o==null||o("Loading data file preview for verification...");const y=await Ip(c);if(!y.success)return console.error(`[DataAnalysis] Failed to get file preview: ${y.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${y.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${y.filename}, First line: ${(d=y.firstLine)==null?void 0:d.substring(0,100)}...`),o==null||o(`Data file found: ${c} (${y.totalLines} lines). Awaiting confirmation...`),!await l({filename:y.filename,firstLine:y.firstLine,totalLines:y.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),o==null||o("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),o==null||o("Data file confirmed. Starting analysis...")}o==null||o("Analyzing data file...");const u=di();if(u!=null&&u.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const y=await jv(u.content,c,o);if(y.success)return y}if(u!=null&&u.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),o==null||o("Using cloud data analysis...");try{const y=await Bs(u.content,"full");if(y.success&&y.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let A=`File: ${c}
`;if(A+=`Dataset shape: ${(m=y.summary)==null?void 0:m.shape.rows} rows x ${(g=y.summary)==null?void 0:g.shape.columns} columns

`,A+=`COLUMN NAMES AND TYPES:
`,(b=y.summary)==null||b.columns.forEach(_=>{var D;const I=(D=y.summary)==null?void 0:D.numeric_columns.includes(_);A+=`  - ${_}: ${I?"numeric":"categorical"}
`}),A+=`
`,(h=y.summary)!=null&&h.numeric_columns.length){A+=`NUMERIC COLUMNS STATISTICS:
`;for(const _ of y.summary.numeric_columns.slice(0,10)){const I=(w=y.summary.descriptive_stats)==null?void 0:w[_];I&&(A+=`  ${_}:
`,A+=`    min=${I.min}, max=${I.max}, mean=${I.mean}, std=${I.std}
`)}A+=`
`}if((E=y.summary)!=null&&E.categorical_columns.length){A+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const _ of y.summary.categorical_columns.slice(0,5)){const I=(C=y.summary.categorical_summary)==null?void 0:C[_];if(I){const D=Object.keys(I).length;A+=`  ${_}: ${D} unique values
`,D<=10&&(A+=`    Values: ${JSON.stringify(I)}
`)}}}return o==null||o("Cloud data analysis complete"),{success:!0,dataSummary:A,dataFileFound:!0}}}catch(y){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",y)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),o==null||o("Using local Python for analysis...");const p=`import os
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
`;try{const y=await Tp("analyze_data.py",p,c);if(console.log("[DataAnalysis] Python execution result:",{success:y.success,dataFileFound:y.dataFileFound,stdoutLength:((S=y.stdout)==null?void 0:S.length)||0,stderrLength:((R=y.stderr)==null?void 0:R.length)||0}),y.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",y.stdout.substring(0,1e3)),y.stderr&&console.log("[DataAnalysis] Python stderr:",y.stderr),!y.success)return console.error("[DataAnalysis] Python execution failed:",y.error),{success:!1,dataFileFound:!1,error:y.error};let A;const _=y.dataFileFound??!1;if(y.stdout){const I=y.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(I)A=I[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",A.substring(0,500));else{if(y.stdout.includes("DATA FILE NOT FOUND")||y.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',y.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',y.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return o==null||o("Data analysis complete"),{success:!0,dataSummary:A,dataFileFound:_}}catch(y){return console.error("[DataAnalysis] Error:",y),{success:!1,dataFileFound:!1,error:y.message}}}async function Nc(c,o,l,u,p){const d=di();if(d!=null&&d.content){console.log("[Visualizations] Using QuickChart.io for figure generation..."),u==null||u("Analyzing data for visualization...");try{const m=await Bs(d.content,"full");if(m.success&&m.chart_data&&m.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${m.chart_data.length} chart configs`),u==null||u(`Generating ${m.chart_data.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:g}=await hc(async()=>{const{generateQuickChartFigures:h}=await Promise.resolve().then(()=>dc);return{generateQuickChartFigures:h}},void 0),b=await g(m.chart_data);if(b.success&&b.figures&&b.figures.length>0){const h=b.figures.map(E=>({filename:E.filename,description:E.description,latexRef:E.filename,base64:E.base64})),{storePngFiguresForCompilation:w}=await hc(async()=>{const{storePngFiguresForCompilation:E}=await Promise.resolve().then(()=>dc);return{storePngFiguresForCompilation:E}},void 0);return w(b.figures.map(E=>({filename:E.filename,base64:E.base64}))),u==null||u(`Generated ${h.length} publication-quality figures`),console.log(`[Visualizations] QuickChart.io generated ${h.length} PNG figures`),{figures:h,usedSyntheticData:!1,dataFileFound:!0,dataSummary:m.text_summary||p}}else console.warn("[Visualizations] QuickChart.io generation failed:",b.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(m){console.warn("[Visualizations] QuickChart.io failed:",m)}}console.log("[Visualizations] No data available, generating AI-based PNG figures via QuickChart.io..."),u==null||u("Generating AI-based visualizations...");try{const m=await kv(c,o,p);if(m&&m.length>0){console.log(`[Visualizations] AI generated ${m.length} chart configurations`),u==null||u(`Rendering ${m.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:g,storePngFiguresForCompilation:b}=await hc(async()=>{const{generateQuickChartFigures:w,storePngFiguresForCompilation:E}=await Promise.resolve().then(()=>dc);return{generateQuickChartFigures:w,storePngFiguresForCompilation:E}},void 0),h=await g(m);if(h.success&&h.figures&&h.figures.length>0){const w=h.figures.map(E=>({filename:E.filename,description:E.description,latexRef:E.filename,base64:E.base64}));return b(h.figures.map(E=>({filename:E.filename,base64:E.base64}))),u==null||u(`Generated ${w.length} AI-based PNG figures`),console.log(`[Visualizations] QuickChart.io rendered ${w.length} AI-generated PNG figures`),{figures:w,usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** NOTE: Visualizations generated using AI-synthesized illustrative data. No data file was provided."}}}}catch(m){console.warn("[Visualizations] AI QuickChart generation failed:",m)}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function kv(c,o,l){const u=`You are generating CONCEPTUAL chart data for a research paper visualization.

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
${c.substring(0,1500)}

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

Return ONLY the JSON array with 1-2 conceptual figures.`;try{let d=(await fr(u,"Generate chart data")).trim();d.startsWith("```json")?d=d.slice(7):d.startsWith("```")&&(d=d.slice(3)),d.endsWith("```")&&(d=d.slice(0,-3)),d=d.trim();const m=JSON.parse(d);if(Array.isArray(m)&&m.length>0)return console.log(`[AI ChartData] Generated ${m.length} chart configurations`),m}catch(p){console.error("[AI ChartData] Failed to generate chart data:",p)}return[]}function Gp(c){if(c.length===0)return"";let o=`
% Generated Figures (PNG via QuickChart.io)
`;return c.forEach((l,u)=>{const p=l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),d=l.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");o+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{${p}}
\\caption{${d}}
\\label{fig:fig${u+1}}
\\end{figure}
`}),o}async function rp(c){try{return(await fetch(`${c}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function Yp(){return await rp(Rc)?{type:"vercel",baseUrl:Rc}:await rp(Ls)?{type:"local",baseUrl:Ls}:{type:"direct",baseUrl:""}}async function Lv(c,o){var m,g,b;const l=o===Ls?`${o}/api/openai/chat`:`${o}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${l}`),console.log(`[OpenAI] Using model: ${Tc()}`);const u=await fetch(l,{method:"POST",headers:Bp(),body:JSON.stringify({model:Tc(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:c}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!u.ok){const h=await u.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",u.status,h),new Error(`OpenAI API error: ${u.status} - ${h.error||h.details||"Unknown error"}`)}const d=(b=(g=(m=(await u.json()).choices)==null?void 0:m[0])==null?void 0:g.message)==null?void 0:b.content;if(!d)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let h=d.trim();return h.startsWith("```")&&(h=h.replace(/^```(?:json)?\s*\n?/,""),h=h.replace(/\n?```\s*$/,"")),h=h.trim(),JSON.parse(h)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",d.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function Vs(c){const o=await Yp();if(o.type==="vercel"||o.type==="local")return console.log(`[OpenAI] Using ${o.type} proxy...`),Lv(c,o.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const zv=async(c,o=1,l="icis_paper",u)=>{var S,R,y,A,_,I,D,B;const p=await Up("REVIEWER");let d="";try{console.log("[Reviewer] Loading MISQ review criteria PDF...");const j=await Rp("reviewingMISQ.pdf");j.success&&j.base64&&(console.log("[Reviewer] Extracting review criteria from PDF..."),d=await Av(`Extract and summarize the key IS journal review criteria from this document.
         Focus on: evaluation dimensions, quality standards, common issues to look for,
         and what makes a strong contribution.
         Keep the summary under 500 words, in bullet point format.`,j.base64,j.mimeType),console.log("[Reviewer] MISQ criteria loaded successfully"))}catch(j){console.warn("[Reviewer] Could not load MISQ review criteria:",j)}const m=c.match(/\\title\{([^}]+)\}/),g=m?m[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const b=Mv(c);console.log(`[Reviewer] Found ${b.length} sections: ${b.map(j=>j.name).join(", ")}`);let h;if(b.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const j=`${p}

${d?`IS JOURNAL REVIEW CRITERIA (from MISQ guidelines):
${d}
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
  "criticalAlerts": []
}`;h=await Vs(j)}else{console.log("[Reviewer] Starting section-by-section review...");const j=[];for(const $ of b){console.log(`[Reviewer] Reviewing section: ${$.name}...`);const H=await Uv($,g);j.push(H),console.log(`[Reviewer] ${$.name} score: ${H.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),h=await Bv(j,c,d),console.log("[Reviewer] Section-by-section review complete")}if(h.novelty===void 0||h.significance===void 0||h.methodologicalRigor===void 0||h.clarity===void 0||h.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const w={novelty:h.novelty,significance:h.significance,methodologicalRigor:h.methodologicalRigor,clarity:h.clarity,relevance:h.relevance,reviewScore:h.novelty,reliabilityScore:h.significance,alignmentScore:h.methodologicalRigor,errorsDetected:(((S=h.majorConcerns)==null?void 0:S.length)||0)+(((R=h.minorCorrections)==null?void 0:R.length)||0),feedback:h.overallAssessment,majorConcerns:h.majorConcerns||[],minorCorrections:h.minorCorrections||[],researchQuestionFeedback:h.researchQuestionFeedback,methodFeedback:h.methodFeedback,impactFeedback:h.impactFeedback,writingFeedback:h.writingFeedback,overallAssessment:h.overallAssessment,noveltyComment:h.noveltyComment,significanceComment:h.significanceComment,methodologicalRigorComment:h.methodologicalRigorComment,clarityComment:h.clarityComment,relevanceComment:h.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:h.criticalAlerts??[]};if(u&&u.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const j=await Fv(c,u);w.trustworthiness={reliability:j.reliability,reliabilityRationale:j.rationales.reliability,benevolence:j.benevolence,benevolenceRationale:j.rationales.benevolence,goalAlignment:j.goalAlignment,goalAlignmentRationale:j.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(j){console.warn("[Reviewer] Trustworthiness assessment failed:",j.message),w.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${j.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${j.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${j.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),w.trustworthiness={reliability:((y=h.trustworthiness)==null?void 0:y.reliability)??5,reliabilityRationale:((A=h.trustworthiness)==null?void 0:A.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((_=h.trustworthiness)==null?void 0:_.benevolence)??5,benevolenceRationale:((I=h.trustworthiness)==null?void 0:I.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((D=h.trustworthiness)==null?void 0:D.goalAlignment)??5,goalAlignmentRationale:((B=h.trustworthiness)==null?void 0:B.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const E={version:o,paperId:l,timestamp:new Date().toISOString(),reviewScores:{novelty:w.novelty,significance:w.significance,methodologicalRigor:w.methodologicalRigor,clarity:w.clarity,relevance:w.relevance},reviewComments:{novelty:w.noveltyComment,significance:w.significanceComment,methodologicalRigor:w.methodologicalRigorComment,clarity:w.clarityComment,relevance:w.relevanceComment},averageScore:(w.novelty+w.significance+w.methodologicalRigor+w.clarity+w.relevance)/5,errorCounts:{majorErrors:w.majorConcerns.length,minorErrors:w.minorCorrections.length},errorDetails:{majorErrors:w.majorConcerns,minorErrors:w.minorCorrections},trustworthiness:w.trustworthiness,criticalAlerts:w.criticalAlerts.map((j,$)=>({number:$+1,title:j.title,status:"Open",impact:j.impact,details:j.details,actionRequired:j.actionRequired,consequence:j.consequence}))},C={version:o,paperId:l,timestamp:new Date().toISOString(),researchQuestion:w.researchQuestionFeedback,method:w.methodFeedback,potentialImpact:w.impactFeedback,writing:w.writingFeedback,majorConcerns:w.majorConcerns,minorCorrections:w.minorCorrections,overallAssessment:w.overallAssessment};w.oversightFilePath=yp(E),w.feedbackFilePath=Oc(C);try{await Ec(`oversight_v${o}.json`,E),await Ec(`feedback_v${o}.json`,C),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(j){console.warn("[Reviewer] Could not save files to disk:",j)}return w};function Mv(c){const o=[],l=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],u=c.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let p="";u&&(p=u[1].trim());for(const{pattern:d,name:m,focus:g}of l){const b=new RegExp(d.source,d.flags);let h,w="";for(;(h=b.exec(c))!==null;)w+=h[2]||h[0];w.trim()&&(m==="Introduction"&&p&&(w=`ABSTRACT:
${p}

INTRODUCTION:
${w}`),o.push({name:m,content:w.trim(),reviewFocus:g}))}if(o.length===0){const d=c.split(/\\section\*?\{/);for(let m=1;m<d.length;m++){const g=d[m].indexOf("}");if(g>0){const b=d[m].substring(0,g),h=d[m].substring(g+1);o.push({name:b,content:h.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return o.map(d=>({...d,content:d.content.substring(0,15e3)}))}async function Uv(c,o){const l=`You are reviewing the "${c.name}" section of an academic IS (Information Systems) paper titled: "${o}"

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
}`,u=await Vs(l);if(u.score===void 0)throw new Error(`[Reviewer] Section "${c.name}" response missing required score field`);return{sectionName:c.name,score:u.score,strengths:u.strengths||[],weaknesses:u.weaknesses||[],suggestions:u.suggestions||[],majorConcerns:u.majorConcerns||[],minorCorrections:u.minorCorrections||[]}}async function Bv(c,o,l){const u=c.map(h=>`## ${h.sectionName} (Score: ${h.score}/5)
Strengths: ${h.strengths.join("; ")||"None identified"}
Weaknesses: ${h.weaknesses.join("; ")||"None identified"}
Major Concerns: ${h.majorConcerns.join("; ")||"None"}
Minor Corrections: ${h.minorCorrections.join("; ")||"None"}`).join(`

`),p=c.filter(h=>h.score>0).map(h=>h.score),d=p.length>0?p.reduce((h,w)=>h+w,0)/p.length:3,m=c.flatMap(h=>h.majorConcerns),g=c.flatMap(h=>h.minorCorrections);c.flatMap(h=>h.suggestions);const b=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${u}

AVERAGE SECTION SCORE: ${d.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${m.map((h,w)=>`${w+1}. ${h}`).join(`
`)||"None"}

ALL MINOR CORRECTIONS:
${g.map((h,w)=>`${w+1}. ${h}`).join(`
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
}`;return await Vs(b)}const Fv=async(c,o)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const l=o.substring(0,15e3),u=c.substring(0,15e3),p=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

Your task: Evaluate how well the ASD system served you as the author.

=== YOUR ORIGINAL INTERVIEW ===
${l}

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
}`,d=await Vs(p);if(d.reliability===void 0||d.benevolence===void 0||d.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:d.reliability,benevolence:d.benevolence,goalAlignment:d.goalAlignment}),{reliability:d.reliability,benevolence:d.benevolence,goalAlignment:d.goalAlignment,rationales:{reliability:d.reliabilityRationale,benevolence:d.benevolenceRationale,goalAlignment:d.goalAlignmentRationale}}};function Pv(c){const o=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let l=-1,u="";for(const p of o){const d=c.match(p);if(d&&d.index!==void 0){l=d.index,u=d[0];break}}if(l===-1){const p=Math.floor(c.length*.5),d=c.substring(p).match(/\\section\*?\{[^}]+\}/);d&&d.index!==void 0&&(l=p+d.index,u=d[0])}return l===-1?{part1:c,part2:"",splitPoint:""}:{part1:c.substring(0,l),part2:c.substring(l),splitPoint:u}}const Vv=async(c,o,l,u,p)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${c.length} characters`),console.log(`[Reviser] Feedback length: ${o.length} characters`),console.log("[Reviser] Loading reviser prompt...");const d=await Up("REVISER");console.log(`[Reviser] Prompt loaded (${d.length} chars)`);const g=c.length>2e4;let b;if(g){console.log("[Reviser] Large paper detected - using two-part revision strategy"),p==null||p("Large paper - revising in two parts...");const{part1:S,part2:R,splitPoint:y}=Pv(c);console.log(`[Reviser] Split at "${y}" - Part 1: ${S.length} chars, Part 2: ${R.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),p==null||p("Revising Part 1: Abstract through Results...");const A=`${d}

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
2. CRITICAL: You MUST preserve the COMPLETE Results section with ALL figures and text
3. Preserve ALL existing tables, figures, and empirical results - do NOT remove any
4. Add new content to strengthen weak areas
5. Maintain academic writing style
6. NEVER use placeholder text

SECTION PRESERVATION CHECK - Your output MUST contain these sections IN ORDER:
- \\section{Introduction}
- \\section{Literature Review} (or Theoretical Framework)
- \\section{Methodology}
- \\section{Results} (CRITICAL - preserve ALL figures AND text from Results)

CRITICAL OUTPUT FORMAT:
- Output ONLY the revised LaTeX content for PART 1
- Start with the documentclass/preamble (or \\begin{abstract} if no preamble)
- END with the complete Results section (do NOT add \\end{document} yet)
- The Results section MUST include both figures AND explanatory text
- Do NOT include any code blocks, markdown, or explanations
- Do NOT include a "References:" section or bibliography list - references are in Part 2
- Output raw LaTeX content only

Produce the revised PART 1:`;let _=await fr(A,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");_=pc(_),_=_.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${_.length} chars`),await Vp(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),p==null||p("Revising Part 2: Discussion, Conclusion, References...");const I=`${d}

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

Produce the revised PART 2:`;let D=await fr(I,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");D=pc(D),console.log(`[Reviser] Part 2 complete: ${D.length} chars`),b=_+`

`+D,console.log(`[Reviser] Combined revised paper: ${b.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),p==null||p("Revising paper content...");const S=`${d}

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

Original Paper:
${c}

Reviewer Feedback:
${o}

Supervisor Directives:
${l}

Instructions:
1. Address all major concerns from the feedback
2. Fix minor corrections where possible
3. Incorporate supervisor directives
4. Preserve ALL existing tables, figures, and empirical results
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

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${S.length} characters`),console.log("[Reviser] Calling Gemini API..."),b=await fr(S,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),b=pc(b)}console.log(`[Reviser] Text revision complete! Output length: ${b.length} characters`);let h,w=!1;const E=(o+" "+l).toLowerCase();if(E.includes("figure")||E.includes("graph")||E.includes("chart")||E.includes("visual")||E.includes("plot")||E.includes("diagram")||E.includes("simulation")||E.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),p==null||p("Updating visualizations based on feedback...");try{let S;if(u){console.log("[Reviser] Analyzing data file for visualization...");try{S=(await Hp(u,p)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(I){console.warn("[Reviser] Could not analyze data file:",I)}}const R=b.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),y=b.match(/\\section{Methodology}([\s\S]*?)\\section{/),A=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${o.substring(0,500)}
Supervisor: ${l.substring(0,300)}
Abstract: ${R?R[1].substring(0,400):""}
`,_=await Nc(A,o,u,p,S);if(w=_.usedSyntheticData,_.dataAlert&&(h=_.dataAlert,console.warn(`[Reviser] ${h}`)),_.figures.length>0){console.log(`[Reviser] Generated ${_.figures.length} updated figures`);const I=Gp(_.figures);let D=I;w&&(D=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${I}`),b.match(/(\\section{Results})/)&&(b=b.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${D}
`))}}catch(S){console.error("[Reviser] Visualization update failed:",S),p==null||p("Visualization update failed - continuing with text revisions"),h=`*** VISUALIZATION ERROR during revision: ${S.message}`,w=!0}}return console.log(`[Reviser] Revision complete! Final output length: ${b.length} characters`),{paperContent:b,dataAlert:h,usedSyntheticData:w}},ip="http://localhost:3001/Data";function Hv(){const[c,o]=be.useState(qh),l=be.useCallback((S,R)=>{o(y=>({...y,stages:{...y.stages,[S]:R}}))},[]),u=be.useCallback(S=>{o(R=>({...R,currentBuilderStep:S}))},[]),p=be.useCallback(S=>{const R=new Date().toLocaleTimeString();o(y=>({...y,logs:[...y.logs,`[${R}] ${S}`]}))},[]),d=be.useCallback(S=>{o(R=>({...R,currentStage:S,stages:{...R.stages,[S]:Ie.ACTIVE}}))},[]),m=be.useCallback(S=>{o(R=>({...R,...S}))},[]),g=be.useCallback(S=>{o(R=>({...R,rounds:[...R.rounds,S],currentRound:S.roundId}))},[]),b=be.useCallback(S=>{o(R=>{if(R.rounds.length===0)return R;const y=[...R.rounds];return y[y.length-1]={...y[y.length-1],...S},{...R,rounds:y}})},[]),h=be.useCallback(S=>{o(R=>({...R,stages:{...R.stages,[S]:Ie.PENDING}}))},[]),w=be.useCallback(S=>{o(R=>({...R,participantId:S}))},[]),E=be.useCallback(()=>`${c.participantId}_${c.sessionTimestamp}`,[c.participantId,c.sessionTimestamp]),C=be.useCallback(async()=>{var R;try{const y=await Np();y.success?console.log(`Backed up ${((R=y.backedUpFiles)==null?void 0:R.length)||0} files to ${y.backupDir}`):console.warn("Backup failed:",y.error)}catch(y){console.warn("Backup not available:",y)}Uy();const S=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);o({...qh,sessionTimestamp:S,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:c,setStageStatus:l,setBuilderStep:u,addLog:p,moveToStage:d,updateState:m,addRound:g,updateLastRound:b,resetStageData:h,setParticipantId:w,getFilePrefix:E,resetAllState:C}}function Gv(){const[c,o]=be.useState({}),[l,u]=be.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null}});be.useEffect(()=>{p()},[]);const p=async()=>{u(E=>({...E,loading:!0,error:null}));try{const E=`?t=${Date.now()}`,C=await fetch(`${ip}/manifest.json${E}`,{cache:"no-store"});if(!C.ok)throw new Error("No manifest.json found in Data folder");const S=await C.json(),R={interview:null,template:null,dataFile:null,participantId:null};for(const y of S.files||[]){const A=`${ip}/${y.filename}`;y.type==="interview"?(R.interview={filename:y.filename,path:A},R.participantId=y.participantId||null):y.type==="template"?R.template={filename:y.filename,path:A}:y.type==="dataFile"&&(R.dataFile={filename:y.filename,path:A})}u({loading:!1,error:null,detected:R}),R.interview&&await d("interview",R.interview.path,R.interview.filename,R.participantId),R.template&&await d("template",R.template.path,R.template.filename),R.dataFile&&await d("dataFile",R.dataFile.path,R.dataFile.filename)}catch(E){console.log("Auto-detection not available, manual upload required:",E),u({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null}})}},d=async(E,C,S,R)=>{try{const y=`?t=${Date.now()}`,A=await fetch(C+y,{cache:"no-store"});if(!A.ok){console.warn(`Failed to load ${S}`);return}const _=await A.text(),I=new Blob([_],{type:"text/plain"}),D=new File([I],S,{type:"text/plain"});o(E==="interview"?B=>({...B,interview:D,interviewContent:_,participantId:R||B.participantId}):E==="template"?B=>({...B,template:D,templateContent:_}):B=>({...B,dataFile:D,dataFileContent:_})),console.log(`Auto-loaded: ${S}`)}catch(y){console.warn(`Error loading ${S}:`,y)}},m=be.useCallback(async(E,C)=>{if(!C){o(S=>{const R={...S};return delete R[E],E==="interview"&&delete R.interviewContent,R});return}if(E==="interview"){const S=await C.text();let R=C.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,"");const y=S.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i);y&&(R=y[1].replace(/@/g,"_").replace(/\./g,"_")),o(A=>({...A,interview:C,interviewContent:S,participantId:R}))}else if(E==="template"){const S=await C.text();o(R=>({...R,template:C,templateContent:S}))}else{const S=await C.text();o(y=>({...y,dataFile:C,dataFileContent:S})),console.log("[handleFileChange] Uploading data file to cloud storage...");const R=await Cp(C);R.success?console.log("[handleFileChange] Cloud upload success:",R.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",R.error)}},[]),g=be.useCallback(()=>c.interviewContent||"",[c.interviewContent]),b=be.useCallback(()=>c.dataFileContent||"",[c.dataFileContent]),h=be.useCallback(()=>{var E;return((E=c.dataFile)==null?void 0:E.name)||""},[c.dataFile]),w=be.useCallback(async()=>{await p()},[]);return{uploadedFiles:c,handleFileChange:m,getInterviewContent:g,getDataFileContent:b,getDataFileName:h,detectionStatus:l,refreshDetection:w}}function Yv(c){const{simulationState:o,setStageStatus:l,setBuilderStep:u,addLog:p,moveToStage:d,updateState:m,addRound:g,updateLastRound:b,resetStageData:h,resetAllState:w,uploadedFiles:E,getInterviewContent:C,refreshDetection:S,onDataFileConfirm:R}=c,[y,A]=be.useState(!1);ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION;const _=be.useCallback(async j=>{const $=j??o.currentRound;p(`Reviewer: Starting review process with Gemini (Round ${$})...`),l(me.REVIEWER,Ie.ACTIVE);try{let H=o.paperContent;if(!H){const v=o.currentPaperVersion||1;p(`Reviewer: Paper not in state, reading from localStorage (v${v})...`),H=ra(v)||"",H&&(m({paperContent:H}),p("Reviewer: Paper loaded from localStorage"))}if(!H){p("Reviewer: ERROR - No paper content available in state or localStorage"),l(me.REVIEWER,Ie.ERROR);return}const G=o.participantId||"icis_paper",U=$;p("Reviewer: Analyzing paper with Gemini...");const ae=C();ae&&p("Reviewer: Interview content available for trustworthiness assessment");const te=await zv(H,U,G,ae);p(`Reviewer: Analysis complete - Average score: ${((te.novelty+te.significance+te.methodologicalRigor+te.clarity+te.relevance)/5).toFixed(1)}/5`);const k={version:U,paperId:G,timestamp:new Date().toISOString(),reviewScores:{novelty:te.novelty,significance:te.significance,methodologicalRigor:te.methodologicalRigor,clarity:te.clarity,relevance:te.relevance},reviewComments:{novelty:te.noveltyComment,significance:te.significanceComment,methodologicalRigor:te.methodologicalRigorComment,clarity:te.clarityComment,relevance:te.relevanceComment},averageScore:(te.novelty+te.significance+te.methodologicalRigor+te.clarity+te.relevance)/5,errorCounts:{majorErrors:te.majorConcerns.length,minorErrors:te.minorCorrections.length},errorDetails:{majorErrors:te.majorConcerns,minorErrors:te.minorCorrections},trustworthiness:te.trustworthiness,criticalAlerts:te.criticalAlerts.map((v,X)=>({number:X+1,title:v.title,status:"Open",impact:v.impact,details:v.details,actionRequired:v.actionRequired,consequence:v.consequence}))},Z={version:U,paperId:G,timestamp:new Date().toISOString(),researchQuestion:te.researchQuestionFeedback,method:te.methodFeedback,potentialImpact:te.impactFeedback,writing:te.writingFeedback,majorConcerns:te.majorConcerns,minorCorrections:te.minorCorrections,overallAssessment:te.overallAssessment};yp(k),Oc(Z),p("Reviewer: Saved oversight and feedback files"),g({roundId:U,reviewScore:k.averageScore,reliabilityScore:te.trustworthiness.reliability,alignmentScore:te.trustworthiness.goalAlignment,errorsDetected:te.majorConcerns.length+te.minorCorrections.length,reviewScores:k.reviewScores,trustworthinessScores:te.trustworthiness,errorCounts:k.errorCounts,constructiveFeedback:te.overallAssessment,feedback:te.overallAssessment,criticalAlerts:te.criticalAlerts.map(v=>v.title)}),p("Reviewer: Review complete! Proceed to Supervisor for decision."),l(me.REVIEWER,Ie.COMPLETED)}catch(H){p(`Reviewer: ERROR - ${H.message}`),l(me.REVIEWER,Ie.ERROR)}},[l,p,g,m,o.currentRound,o.participantId,o.paperContent]),I=be.useCallback(async(j,$)=>{var H,G,U,ae;switch(j){case me.SETUP:await new Promise(k=>setTimeout(k,500));const te={interview:!!E.interview,template:!0,examples:!0,dataFile:!!E.dataFile,paperPdf:!1};m({files:te}),p("Setup: Files verified successfully");break;case me.BUILDER:p("Builder: Starting paper generation with Gemini...");try{const k=C();if(!k){p("Builder: ERROR - No interview content available"),l(me.BUILDER,Ie.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${$}", uploadedFiles.dataFile?.name="${(H=E.dataFile)==null?void 0:H.name}"`);const Z=$||((G=E.dataFile)==null?void 0:G.name),v=!Z;p(`Builder: Mode - ${v?"Partial paper (no data)":"Full paper with data"}`),p(Z?`Builder: Data file - ${Z}`:"Builder: WARNING - No data file name available");const P=await Rv(k,v,(ee,ge)=>{ge==="starting"?p(`Builder: Generating ${ee}...`):ge==="completed"?p(`Builder: ${ee} complete`):ge==="error"&&p(`Builder: ${ee} - error (continuing)`)},Z,R);P.dataSummary&&(p("Builder: Data Analysis Summary:"),p(P.dataSummary.substring(0,500)+(P.dataSummary.length>500?"...":""))),P.dataAlert&&p(P.dataAlert),P.usedSyntheticData&&p("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),m({paperContent:P.paperContent,currentPaperVersion:1,dataAlert:P.dataAlert,dataSummary:P.dataSummary}),ep(1,P.paperContent);const V=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",de=V?`${V}_icis_paper_v1.tex`:"icis_paper_v1.tex";await Sc(de,P.paperContent),p("Builder: Paper generation complete - saved to localStorage and filesystem"),l(me.BUILDER,Ie.COMPLETED),d(me.REVIEWER),setTimeout(()=>_(),500)}catch(k){p(`Builder: ERROR - ${k.message}`),l(me.BUILDER,Ie.ERROR)}break;case me.REVIEWER:await _();break;case me.SUPERVISOR:p("Supervisor: Awaiting human review and decision..."),l(me.SUPERVISOR,Ie.ACTIVE);return;case me.FINALIZE:p("Finalize: Preparing final submission..."),l(me.FINALIZE,Ie.ACTIVE);return;case me.REVISER:p("Reviser: Starting revision with Gemini..."),console.log("[Workflow] REVISER stage starting"),l(me.REVISER,Ie.ACTIVE);try{let k=o.paperContent;if(console.log(`[Workflow] Paper in state: ${k?k.length+" chars":"none"}`),!k){const se=o.currentPaperVersion||1;p(`Reviser: Paper not in state, reading from localStorage (v${se})...`),k=ra(se)||"",k&&(m({paperContent:k}),p("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${k.length} chars`))}if(!k){p("Reviser: ERROR - No paper content available in state or localStorage"),l(me.REVISER,Ie.ERROR);return}const Z=o.rounds[o.rounds.length-1],v=(Z==null?void 0:Z.feedback)||"Improve clarity and strengthen methodology.",X=$||(Z==null?void 0:Z.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${v.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${$?"from override":"from state"}): ${X.substring(0,100)}...`),p("Reviser: Analyzing feedback and generating revisions..."),p(`Reviser: Paper size: ${k.length} chars, calling Gemini...`);const P=(U=E.dataFile)==null?void 0:U.name,V=se=>{p(`Reviser: ${se}`)};console.log("[Workflow] Calling runReviser...");const de=await Vv(k,v,X,P,V);console.log(`[Workflow] runReviser completed, result: ${((ae=de.paperContent)==null?void 0:ae.length)||0} chars`),de.dataAlert&&p(de.dataAlert),de.usedSyntheticData&&p("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const ee=o.currentPaperVersion+1;m({paperContent:de.paperContent,currentPaperVersion:ee,dataAlert:de.dataAlert||o.dataAlert}),ep(ee,de.paperContent);const ge=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",N=ge?`${ge}_icis_paper_v${ee}.tex`:`icis_paper_v${ee}.tex`;await Sc(N,de.paperContent),p(`Reviser: Revision complete - Version ${ee} saved`);const L=o.currentRound+1;l(me.REVISER,Ie.COMPLETED),d(me.REVIEWER),m({currentRound:L}),setTimeout(()=>_(L),500)}catch(k){p(`Reviser: ERROR - ${k.message}`),l(me.REVISER,Ie.ERROR)}break}},[E.interview,E.dataFile,m,p,u,l,d,_,o.currentPaperVersion,o.currentRound,o.dataAlert,R]),D=be.useCallback(async(j,$,H)=>{switch(p(`Stage ${j}: ${$}`),console.log(`[handleStageAction] Stage ${j} action=${$} overrideParam="${H}" (type: ${typeof H})`),$){case"start":l(j,Ie.ACTIVE),A(!0);try{await I(j,H),j!==me.BUILDER&&j!==me.REVIEWER&&j!==me.REVISER&&l(j,Ie.COMPLETED),p(`Stage ${j} completed`)}catch(G){l(j,Ie.ERROR),p(`Stage ${j} error: ${G}`)}finally{A(!1)}break;case"abort":l(j,Ie.ERROR),A(!1),p(`Stage ${j} aborted`);break;case"restart":h(j),l(j,Ie.ACTIVE),A(!0),p(`Stage ${j} restarting...`);try{await I(j,H),j!==me.BUILDER&&j!==me.REVIEWER&&j!==me.REVISER&&l(j,Ie.COMPLETED),p(`Stage ${j} restart completed`)}catch(G){l(j,Ie.ERROR),p(`Stage ${j} restart error: ${G}`)}finally{A(!1)}break;case"skip":l(j,Ie.SKIPPED),p(`Stage ${j} skipped`);break}},[p,l,h,I]),B=be.useCallback(async(j,$)=>{var H;switch(p(`Action: ${j}`),j){case"START_SETUP":(o.rounds.length>0||o.currentPaperVersion>0||o.paperContent!=="")&&w&&w().then(()=>{p("Setup: Backed up and cleared previous case data")}),D(me.SETUP,"start");break;case"START_BUILDER":p("Setup: Checking for data files...");let U;const ae=di();if(ae)U=ae.filename,console.log(`[START_BUILDER] Using cloud data file: ${ae.filename}`),p(`Setup: Data file ready (cloud) - ${ae.filename}`);else if(E.dataFile)U=E.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${U}`),p(`Setup: Data file ready (uploaded) - ${U}`);else try{p("Setup: Refreshing file manifest...");const te=await vp();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(te,null,2)),te.success&&te.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(te.manifest.files,null,2));const k=(H=te.manifest.files)==null?void 0:H.find(Z=>Z.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",k),k&&(U=k.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${k.filename}"`),p(`Setup: Data file detected - ${k.filename}`),S&&(p("Setup: Loading data file into memory..."),await S(),p("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}U||p("Setup: No data file - will generate partial paper"),l(me.SETUP,Ie.COMPLETED),d(me.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${U}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${U}"`),D(me.BUILDER,"start",U)},500);break;case"PROCEED_TO_SUPERVISOR":l(me.REVIEWER,Ie.COMPLETED),d(me.SUPERVISOR);break;case"SKIP_TO_REVIEWER":l(me.SETUP,Ie.COMPLETED),l(me.BUILDER,Ie.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),d(me.REVIEWER),setTimeout(()=>D(me.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":l(me.SETUP,Ie.COMPLETED),l(me.BUILDER,Ie.COMPLETED),l(me.REVIEWER,Ie.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),d(me.SUPERVISOR);break;case"revise":if($){b({supervisorComment:$});const te=o.currentRound;Wh(te,te,$),Jh("CONTINUE",te),p(`Supervisor: Saved directive to feedback file (round ${te})`)}l(me.SUPERVISOR,Ie.COMPLETED),d(me.REVISER),p(`Supervisor: Passing directive to Reviser: "${($==null?void 0:$.substring(0,50))||"none"}..."`),setTimeout(()=>D(me.REVISER,"start",$),100);break;case"finalize":if($){b({supervisorComment:$});const te=o.currentRound;Wh(te,te,$),Jh("FINALIZE",te),p(`Supervisor: Saved finalize decision to feedback file (round ${te})`)}l(me.SUPERVISOR,Ie.COMPLETED),d(me.FINALIZE);break;case"NEW_CASE":w?w().then(()=>{p("New case started - files backed up and cleared"),S==null||S(),d(me.SETUP)}):d(me.SETUP);break;default:p(`Unknown action: ${j}`)}},[p,d,l,b,D,w,o.rounds.length,o.currentPaperVersion,o.paperContent,m,S]);return{isProcessing:y,handleStageAction:D,handleWorkflowAction:B}}const qv=()=>{const[c,o]=be.useState("main"),[l,u]=be.useState("research"),p=be.useCallback(v=>{u(v),Sv(v),console.log(`[App] Paper mode changed to: ${v}`)},[]),{simulationState:d,setStageStatus:m,setBuilderStep:g,addLog:b,moveToStage:h,updateState:w,addRound:E,updateLastRound:C,resetStageData:S,setParticipantId:R,getFilePrefix:y,resetAllState:A}=Hv(),{uploadedFiles:_,handleFileChange:I,getInterviewContent:D,getDataFileContent:B,getDataFileName:j,detectionStatus:$,refreshDetection:H}=Gv(),G=be.useCallback(async v=>{const X=`Data File Verification

File: ${v.filename}
Total lines: ${v.totalLines}

First line (column headers):
${v.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(X)},[]),{isProcessing:U,handleStageAction:ae,handleWorkflowAction:te}=Yv({simulationState:d,setStageStatus:m,setBuilderStep:g,addLog:b,moveToStage:h,updateState:w,addRound:E,updateLastRound:C,resetStageData:S,resetAllState:A,uploadedFiles:_,getInterviewContent:D,refreshDetection:H,onDataFileConfirm:G});be.useEffect(()=>{_.participantId&&_.participantId!==d.participantId&&(R(_.participantId),b(`Participant ID set: ${_.participantId}`))},[_.participantId,d.participantId,R,b]);const k=v=>{b(`Aborting ${v}...`),ae(v,"abort")},Z=v=>{b(`Restarting ${v}...`),ae(v,"restart"),setTimeout(()=>ae(v,"start"),100)};return s.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[s.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:s.jsx(Ly,{currentStage:d.currentStage,currentBuilderStep:d.currentBuilderStep,stagesState:d.stages,isPartialPaper:d.isPartialPaper,currentRound:d.currentRound,isProcessing:U,onStageClick:h,onStageAction:ae,onNewCase:()=>te("NEW_CASE"),onNewInterview:()=>{window.open(`/asd/interview.html?mode=${l}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/asd/paper-to-interview.html","_blank","noopener,noreferrer")},onResearchAdmin:l==="research"?()=>o(c==="admin"?"main":"admin"):void 0,paperMode:l,onPaperModeChange:p})}),s.jsx("div",{className:"flex-1 h-full",children:c==="admin"?s.jsx(ov,{onClose:()=>o("main")}):s.jsx(Jy,{state:d,isProcessing:U,onAction:te,uploadedFiles:_,onFileChange:I,detectionStatus:$,onRefreshDetection:H,onStageAbort:k,onStageRestart:Z,filePrefix:y(),dataFileName:j(),dataFileContent:B()})})]})};function $v(){const c=Date.now(),o=new Uint8Array(16);crypto.getRandomValues(o);const l=Array.from(o).map(u=>u.toString(16).padStart(2,"0")).join("");return`${c}_${l}`}function Xv(){const c=sessionStorage.getItem("icis_session_token");if(!c)return!1;const o=c.split("_");if(o.length!==2)return!1;const l=parseInt(o[0],10);if(isNaN(l))return!1;const u=Date.now()-l,p=1440*60*1e3;return u<p}const Zv=({onLogin:c})=>{const[o,l]=be.useState(""),[u,p]=be.useState(""),[d,m]=be.useState(""),[g,b]=be.useState(!1),h=w=>{w.preventDefault(),m(""),b(!0);const E="asd",C="tennessee";setTimeout(()=>{if(o===E&&u===C){const S=$v();sessionStorage.setItem("icis_session_token",S),sessionStorage.setItem("icis_authenticated","true"),c()}else m("Invalid username or password"),b(!1)},500)};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-md",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:s.jsx("span",{className:"text-2xl font-bold text-white",children:"IC"})}),s.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"ICIScopilot"}),s.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),s.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:s.jsxs("form",{onSubmit:h,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(Dy,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"text",id:"username",value:o,onChange:w=>l(w.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(oy,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"password",id:"password",value:u,onChange:w=>p(w.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),d&&s.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[s.jsx(Os,{className:"h-5 w-5 flex-shrink-0"}),s.jsx("span",{className:"text-sm",children:d})]}),s.jsx("button",{type:"submit",disabled:g,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:g?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),s.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"ICIS Conference Paper Authoring System"})]})})},Qv=()=>{const[c,o]=be.useState(null);be.useEffect(()=>{const u=Xv(),p=sessionStorage.getItem("icis_authenticated");o(p==="true"&&u)},[]);const l=()=>{o(!0)};return c===null?s.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):c?s.jsx(qv,{}):s.jsx(Zv,{onLogin:l})},qp=document.getElementById("root");if(!qp)throw new Error("Could not find root element to mount to");const Kv=y0.createRoot(qp);Kv.render(s.jsx(c0.StrictMode,{children:s.jsx(Qv,{})}));
