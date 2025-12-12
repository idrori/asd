(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(p){if(p.ep)return;p.ep=!0;const f=l(p);fetch(p.href,f)}})();var ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tc(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var nc={exports:{}},ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function Jg(){if(jh)return ii;jh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(c,p,f){var m=null;if(f!==void 0&&(m=""+f),p.key!==void 0&&(m=""+p.key),"key"in p){f={};for(var g in p)g!=="key"&&(f[g]=p[g])}else f=p;return p=f.ref,{$$typeof:u,type:c,key:m,ref:p!==void 0?p:null,props:f}}return ii.Fragment=o,ii.jsx=l,ii.jsxs=l,ii}var kh;function e0(){return kh||(kh=1,nc.exports=Jg()),nc.exports}var s=e0(),ac={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function t0(){if(Lh)return De;Lh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),C=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=C&&N[C]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,A={};function _(N,j,se){this.props=N,this.context=j,this.refs=A,this.updater=se||R}_.prototype.isReactComponent={},_.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function I(){}I.prototype=_.prototype;function D(N,j,se){this.props=N,this.context=j,this.refs=A,this.updater=se||R}var F=D.prototype=new I;F.constructor=D,v(F,_.prototype),F.isPureReactComponent=!0;var k=Array.isArray;function $(){}var H={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function U(N,j,se){var re=se.ref;return{$$typeof:u,type:N,key:j,ref:re!==void 0?re:null,props:se}}function ae(N,j){return U(N.type,j,N.props)}function te(N){return typeof N=="object"&&N!==null&&N.$$typeof===u}function L(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(se){return j[se]})}var W=/\/+/g;function y(N,j){return typeof N=="object"&&N!==null&&N.key!=null?L(""+N.key):j.toString(36)}function X(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then($,$):(N.status="pending",N.then(function(j){N.status==="pending"&&(N.status="fulfilled",N.value=j)},function(j){N.status==="pending"&&(N.status="rejected",N.reason=j)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function V(N,j,se,re,le){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var Ne=!1;if(N===null)Ne=!0;else switch(Ee){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(N.$$typeof){case u:case o:Ne=!0;break;case w:return Ne=N._init,V(Ne(N._payload),j,se,re,le)}}if(Ne)return le=le(N),Ne=re===""?"."+y(N,0):re,k(le)?(se="",Ne!=null&&(se=Ne.replace(W,"$&/")+"/"),V(le,j,se,"",function(Fe){return Fe})):le!=null&&(te(le)&&(le=ae(le,se+(le.key==null||N&&N.key===le.key?"":(""+le.key).replace(W,"$&/")+"/")+Ne)),j.push(le)),1;Ne=0;var we=re===""?".":re+":";if(k(N))for(var _e=0;_e<N.length;_e++)re=N[_e],Ee=we+y(re,_e),Ne+=V(re,j,se,Ee,le);else if(_e=S(N),typeof _e=="function")for(N=_e.call(N),_e=0;!(re=N.next()).done;)re=re.value,Ee=we+y(re,_e++),Ne+=V(re,j,se,Ee,le);else if(Ee==="object"){if(typeof N.then=="function")return V(X(N),j,se,re,le);throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function P(N,j,se){if(N==null)return N;var re=[],le=0;return V(N,re,"","",function(Ee){return j.call(se,Ee,le++)}),re}function ce(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(se){(N._status===0||N._status===-1)&&(N._status=1,N._result=se)},function(se){(N._status===0||N._status===-1)&&(N._status=2,N._result=se)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var J=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},me={map:P,forEach:function(N,j,se){P(N,function(){j.apply(this,arguments)},se)},count:function(N){var j=0;return P(N,function(){j++}),j},toArray:function(N){return P(N,function(j){return j})||[]},only:function(N){if(!te(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return De.Activity=E,De.Children=me,De.Component=_,De.Fragment=l,De.Profiler=p,De.PureComponent=D,De.StrictMode=c,De.Suspense=x,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,De.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},De.cache=function(N){return function(){return N.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(N,j,se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var re=v({},N.props),le=N.key;if(j!=null)for(Ee in j.key!==void 0&&(le=""+j.key),j)!G.call(j,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&j.ref===void 0||(re[Ee]=j[Ee]);var Ee=arguments.length-2;if(Ee===1)re.children=se;else if(1<Ee){for(var Ne=Array(Ee),we=0;we<Ee;we++)Ne[we]=arguments[we+2];re.children=Ne}return U(N.type,le,re)},De.createContext=function(N){return N={$$typeof:m,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:f,_context:N},N},De.createElement=function(N,j,se){var re,le={},Ee=null;if(j!=null)for(re in j.key!==void 0&&(Ee=""+j.key),j)G.call(j,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(le[re]=j[re]);var Ne=arguments.length-2;if(Ne===1)le.children=se;else if(1<Ne){for(var we=Array(Ne),_e=0;_e<Ne;_e++)we[_e]=arguments[_e+2];le.children=we}if(N&&N.defaultProps)for(re in Ne=N.defaultProps,Ne)le[re]===void 0&&(le[re]=Ne[re]);return U(N,Ee,le)},De.createRef=function(){return{current:null}},De.forwardRef=function(N){return{$$typeof:g,render:N}},De.isValidElement=te,De.lazy=function(N){return{$$typeof:w,_payload:{_status:-1,_result:N},_init:ce}},De.memo=function(N,j){return{$$typeof:h,type:N,compare:j===void 0?null:j}},De.startTransition=function(N){var j=H.T,se={};H.T=se;try{var re=N(),le=H.S;le!==null&&le(se,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then($,J)}catch(Ee){J(Ee)}finally{j!==null&&se.types!==null&&(j.types=se.types),H.T=j}},De.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},De.use=function(N){return H.H.use(N)},De.useActionState=function(N,j,se){return H.H.useActionState(N,j,se)},De.useCallback=function(N,j){return H.H.useCallback(N,j)},De.useContext=function(N){return H.H.useContext(N)},De.useDebugValue=function(){},De.useDeferredValue=function(N,j){return H.H.useDeferredValue(N,j)},De.useEffect=function(N,j){return H.H.useEffect(N,j)},De.useEffectEvent=function(N){return H.H.useEffectEvent(N)},De.useId=function(){return H.H.useId()},De.useImperativeHandle=function(N,j,se){return H.H.useImperativeHandle(N,j,se)},De.useInsertionEffect=function(N,j){return H.H.useInsertionEffect(N,j)},De.useLayoutEffect=function(N,j){return H.H.useLayoutEffect(N,j)},De.useMemo=function(N,j){return H.H.useMemo(N,j)},De.useOptimistic=function(N,j){return H.H.useOptimistic(N,j)},De.useReducer=function(N,j,se){return H.H.useReducer(N,j,se)},De.useRef=function(N){return H.H.useRef(N)},De.useState=function(N){return H.H.useState(N)},De.useSyncExternalStore=function(N,j,se){return H.H.useSyncExternalStore(N,j,se)},De.useTransition=function(){return H.H.useTransition()},De.version="19.2.1",De}var zh;function Nc(){return zh||(zh=1,ac.exports=t0()),ac.exports}var be=Nc();const n0=Tc(be);var rc={exports:{}},si={},ic={exports:{}},sc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function a0(){return Mh||(Mh=1,(function(u){function o(V,P){var ce=V.length;V.push(P);e:for(;0<ce;){var J=ce-1>>>1,me=V[J];if(0<p(me,P))V[J]=P,V[ce]=me,ce=J;else break e}}function l(V){return V.length===0?null:V[0]}function c(V){if(V.length===0)return null;var P=V[0],ce=V.pop();if(ce!==P){V[0]=ce;e:for(var J=0,me=V.length,N=me>>>1;J<N;){var j=2*(J+1)-1,se=V[j],re=j+1,le=V[re];if(0>p(se,ce))re<me&&0>p(le,se)?(V[J]=le,V[re]=ce,J=re):(V[J]=se,V[j]=ce,J=j);else if(re<me&&0>p(le,ce))V[J]=le,V[re]=ce,J=re;else break e}}return P}function p(V,P){var ce=V.sortIndex-P.sortIndex;return ce!==0?ce:V.id-P.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;u.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();u.unstable_now=function(){return m.now()-g}}var x=[],h=[],w=1,E=null,C=3,S=!1,R=!1,v=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function F(V){for(var P=l(h);P!==null;){if(P.callback===null)c(h);else if(P.startTime<=V)c(h),P.sortIndex=P.expirationTime,o(x,P);else break;P=l(h)}}function k(V){if(v=!1,F(V),!R)if(l(x)!==null)R=!0,$||($=!0,L());else{var P=l(h);P!==null&&X(k,P.startTime-V)}}var $=!1,H=-1,G=5,U=-1;function ae(){return A?!0:!(u.unstable_now()-U<G)}function te(){if(A=!1,$){var V=u.unstable_now();U=V;var P=!0;try{e:{R=!1,v&&(v=!1,I(H),H=-1),S=!0;var ce=C;try{t:{for(F(V),E=l(x);E!==null&&!(E.expirationTime>V&&ae());){var J=E.callback;if(typeof J=="function"){E.callback=null,C=E.priorityLevel;var me=J(E.expirationTime<=V);if(V=u.unstable_now(),typeof me=="function"){E.callback=me,F(V),P=!0;break t}E===l(x)&&c(x),F(V)}else c(x);E=l(x)}if(E!==null)P=!0;else{var N=l(h);N!==null&&X(k,N.startTime-V),P=!1}}break e}finally{E=null,C=ce,S=!1}P=void 0}}finally{P?L():$=!1}}}var L;if(typeof D=="function")L=function(){D(te)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,y=W.port2;W.port1.onmessage=te,L=function(){y.postMessage(null)}}else L=function(){_(te,0)};function X(V,P){H=_(function(){V(u.unstable_now())},P)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(V){V.callback=null},u.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<V?Math.floor(1e3/V):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_next=function(V){switch(C){case 1:case 2:case 3:var P=3;break;default:P=C}var ce=C;C=P;try{return V()}finally{C=ce}},u.unstable_requestPaint=function(){A=!0},u.unstable_runWithPriority=function(V,P){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ce=C;C=V;try{return P()}finally{C=ce}},u.unstable_scheduleCallback=function(V,P,ce){var J=u.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?J+ce:J):ce=J,V){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ce+me,V={id:w++,callback:P,priorityLevel:V,startTime:ce,expirationTime:me,sortIndex:-1},ce>J?(V.sortIndex=ce,o(h,V),l(x)===null&&V===l(h)&&(v?(I(H),H=-1):v=!0,X(k,ce-J))):(V.sortIndex=me,o(x,V),R||S||(R=!0,$||($=!0,L()))),V},u.unstable_shouldYield=ae,u.unstable_wrapCallback=function(V){var P=C;return function(){var ce=C;C=P;try{return V.apply(this,arguments)}finally{C=ce}}}})(sc)),sc}var Uh;function r0(){return Uh||(Uh=1,ic.exports=a0()),ic.exports}var lc={exports:{}},wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function i0(){if(Fh)return wt;Fh=1;var u=Nc();function o(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var c={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},p=Symbol.for("react.portal");function f(x,h,w){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:E==null?null:""+E,children:x,containerInfo:h,implementation:w}}var m=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,wt.createPortal=function(x,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return f(x,h,null,w)},wt.flushSync=function(x){var h=m.T,w=c.p;try{if(m.T=null,c.p=2,x)return x()}finally{m.T=h,c.p=w,c.d.f()}},wt.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(x,h))},wt.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},wt.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var w=h.as,E=g(w,h.crossOrigin),C=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?c.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:E,integrity:C,fetchPriority:S}):w==="script"&&c.d.X(x,{crossOrigin:E,integrity:C,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wt.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=g(h.as,h.crossOrigin);c.d.M(x,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(x)},wt.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,E=g(w,h.crossOrigin);c.d.L(x,w,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wt.preloadModule=function(x,h){if(typeof x=="string")if(h){var w=g(h.as,h.crossOrigin);c.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(x)},wt.requestFormReset=function(x){c.d.r(x)},wt.unstable_batchedUpdates=function(x,h){return x(h)},wt.useFormState=function(x,h,w){return m.H.useFormState(x,h,w)},wt.useFormStatus=function(){return m.H.useHostTransitionStatus()},wt.version="19.2.1",wt}var Bh;function s0(){if(Bh)return lc.exports;Bh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),lc.exports=i0(),lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function l0(){if(Ph)return si;Ph=1;var u=r0(),o=Nc(),l=s0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return x(r),e;if(i===a)return x(r),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=i;else{for(var d=!1,T=r.child;T;){if(T===n){d=!0,n=r,a=i;break}if(T===a){d=!0,a=r,n=i;break}T=T.sibling}if(!d){for(T=i.child;T;){if(T===n){d=!0,n=i,a=r;break}if(T===a){d=!0,a=i,n=r;break}T=T.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,C=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),D=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case v:return"Fragment";case _:return"Profiler";case A:return"StrictMode";case k:return"Suspense";case $:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case D:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:y(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return y(e(t))}catch{}}return null}var X=Array.isArray,V=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},J=[],me=-1;function N(e){return{current:e}}function j(e){0>me||(e.current=J[me],J[me]=null,me--)}function se(e,t){me++,J[me]=e.current,e.current=t}var re=N(null),le=N(null),Ee=N(null),Ne=N(null);function we(e,t){switch(se(Ee,t),se(le,e),se(re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nh(t),e=ah(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(re),se(re,e)}function _e(){j(re),j(le),j(Ee)}function Fe(e){e.memoizedState!==null&&se(Ne,e);var t=re.current,n=ah(t,e.type);t!==n&&(se(le,e),se(re,n))}function Ve(e){le.current===e&&(j(re),j(le)),Ne.current===e&&(j(Ne),ti._currentValue=ce)}var mt,bt;function b(e){if(mt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",bt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+bt}var ue=!1;function ie(e,t){if(!e||ue)return"";ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(ne){var ee=ne}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(ne){ee=ne}e.call(fe.prototype)}}else{try{throw Error()}catch(ne){ee=ne}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(ne){if(ne&&ee&&typeof ne.stack=="string")return[ne.stack,ee.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),d=i[0],T=i[1];if(d&&T){var M=d.split(`
`),Q=T.split(`
`);for(r=a=0;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;for(;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;if(a===M.length||r===Q.length)for(a=M.length-1,r=Q.length-1;1<=a&&0<=r&&M[a]!==Q[r];)r--;for(;1<=a&&0<=r;a--,r--)if(M[a]!==Q[r]){if(a!==1||r!==1)do if(a--,r--,0>r||M[a]!==Q[r]){var oe=`
`+M[a].replace(" at new "," at ");return e.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",e.displayName)),oe}while(1<=a&&0<=r);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?b(n):""}function z(e,t){switch(e.tag){case 26:case 27:case 5:return b(e.type);case 16:return b("Lazy");case 13:return e.child!==t&&t!==null?b("Suspense Fallback"):b("Suspense");case 19:return b("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return b("Activity");default:return""}}function O(e){try{var t="",n=null;do t+=z(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var q=Object.prototype.hasOwnProperty,he=u.unstable_scheduleCallback,pe=u.unstable_cancelCallback,K=u.unstable_shouldYield,ye=u.unstable_requestPaint,xe=u.unstable_now,ve=u.unstable_getCurrentPriorityLevel,Re=u.unstable_ImmediatePriority,$e=u.unstable_UserBlockingPriority,Le=u.unstable_NormalPriority,Tt=u.unstable_LowPriority,jn=u.unstable_IdlePriority,Vt=u.log,ia=u.unstable_setDisableYieldValue,Je=null,gt=null;function Ht(e){if(typeof Vt=="function"&&ia(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Je,e)}catch{}}var rt=Math.clz32?Math.clz32:Vs,di=Math.log,Ps=Math.LN2;function Vs(e){return e>>>=0,e===0?32:31-(di(e)/Ps|0)|0}var Ra=256,sa=262144,cn=4194304;function Gt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var T=a&134217727;return T!==0?(a=T&~i,a!==0?r=Gt(a):(d&=T,d!==0?r=Gt(d):n||(n=T&~e,n!==0&&(r=Gt(n))))):(T=a&~i,T!==0?r=Gt(T):d!==0?r=Gt(d):n||(n=a&~e,n!==0&&(r=Gt(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function pr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function Hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pp(e,t,n,a,r,i){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var T=e.entanglements,M=e.expirationTimes,Q=e.hiddenUpdates;for(n=d&~n;0<n;){var oe=31-rt(n),fe=1<<oe;T[oe]=0,M[oe]=-1;var ee=Q[oe];if(ee!==null)for(Q[oe]=null,oe=0;oe<ee.length;oe++){var ne=ee[oe];ne!==null&&(ne.lane&=-536870913)}n&=~fe}a!==0&&Mc(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Mc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-rt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-rt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Fc(e,t){var n=t&-t;return n=(n&42)!==0?1:Gs(n),(n&(e.suspendedLanes|t))!==0?0:n}function Gs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bc(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Rh(e.type))}function Pc(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var kn=Math.random().toString(36).slice(2),xt="__reactFiber$"+kn,Nt="__reactProps$"+kn,Ta="__reactContainer$"+kn,Ys="__reactEvents$"+kn,Vp="__reactListeners$"+kn,Hp="__reactHandles$"+kn,Vc="__reactResources$"+kn,gr="__reactMarker$"+kn;function $s(e){delete e[xt],delete e[Nt],delete e[Ys],delete e[Vp],delete e[Hp]}function Na(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uh(e);e!==null;){if(n=e[xt])return n;e=uh(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){if(e=e[xt]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ia(e){var t=e[Vc];return t||(t=e[Vc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yt(e){e[gr]=!0}var Hc=new Set,Gc={};function la(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(Gc[e]=t,e=0;e<t.length;e++)Hc.add(t[e])}var Gp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Yc={};function qp(e){return q.call(Yc,e)?!0:q.call(qc,e)?!1:Gp.test(e)?Yc[e]=!0:(qc[e]=!0,!1)}function hi(e,t,n){if(qp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function pi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){if(!e._valueTracker){var t=$c(e)?"checked":"value";e._valueTracker=Yp(e,t,""+e[t])}}function Xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=$c(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $p=/[\n"\\]/g;function Yt(e){return e.replace($p,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zs(e,t,n,a,r,i,d,T){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Qs(e,d,qt(t)):n!=null?Qs(e,d,qt(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+qt(T):e.removeAttribute("name")}function Zc(e,t,n,a,r,i,d,T){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Xs(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,T||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=T?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Xs(e)}function Qs(e,t,n){t==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Oa(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Qc(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function Wc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(X(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Xs(e)}function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Xp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Jc(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Kc(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&Kc(e,i,t[i])}function Ws(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(e){return Qp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var Ks=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,La=null;function eu(e){var t=Ca(e);if(t&&(e=t.stateNode)){var n=e[Nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[Nt]||null;if(!r)throw Error(c(90));Zs(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Xc(a)}break e;case"textarea":Qc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Oa(e,!!n.multiple,t,!1)}}}var el=!1;function tu(e,t,n){if(el)return e(t,n);el=!0;try{var a=e(t);return a}finally{if(el=!1,(ka!==null||La!==null)&&(as(),ka&&(t=ka,e=La,La=ka=null,eu(t),e)))for(t=0;t<e.length;t++)eu(e[t])}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Nt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=!1;if(yn)try{var br={};Object.defineProperty(br,"passive",{get:function(){tl=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{tl=!1}var Ln=null,nl=null,yi=null;function nu(){if(yi)return yi;var e,t=nl,n=t.length,a,r="value"in Ln?Ln.value:Ln.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===r[i-a];a++);return yi=r.slice(e,1<a?1-a:void 0)}function vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function au(){return!1}function Ct(e){function t(n,a,r,i,d){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(n=e[T],this[T]=n?n(i):i[T]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:au,this.isPropagationStopped=au,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=Ct(oa),xr=E({},oa,{view:0,detail:0}),Wp=Ct(xr),al,rl,Sr,Si=E({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(al=e.screenX-Sr.screenX,rl=e.screenY-Sr.screenY):rl=al=0,Sr=e),al)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),ru=Ct(Si),Kp=E({},Si,{dataTransfer:0}),Jp=Ct(Kp),em=E({},xr,{relatedTarget:0}),il=Ct(em),tm=E({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),nm=Ct(tm),am=E({},oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rm=Ct(am),im=E({},oa,{data:0}),iu=Ct(im),sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function sl(){return cm}var um=E({},xr,{key:function(e){if(e.key){var t=sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Ct(um),fm=E({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Ct(fm),hm=E({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),pm=Ct(hm),mm=E({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=Ct(mm),ym=E({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Ct(ym),bm=E({},oa,{newState:0,oldState:0}),xm=Ct(bm),Sm=[9,13,27,32],ll=yn&&"CompositionEvent"in window,Er=null;yn&&"documentMode"in document&&(Er=document.documentMode);var Em=yn&&"TextEvent"in window&&!Er,lu=yn&&(!ll||Er&&8<Er&&11>=Er),ou=" ",cu=!1;function uu(e,t){switch(e){case"keyup":return Sm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function Am(e,t){switch(e){case"compositionend":return du(t);case"keypress":return t.which!==32?null:(cu=!0,ou);case"textInput":return e=t.data,e===ou&&cu?null:e;default:return null}}function _m(e,t){if(za)return e==="compositionend"||!ll&&uu(e,t)?(e=nu(),yi=nl=Ln=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lu&&t.locale!=="ko"?null:t.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wm[e.type]:t==="textarea"}function hu(e,t,n,a){ka?La?La.push(a):La=[a]:ka=a,t=us(t,"onChange"),0<t.length&&(n=new xi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ar=null,_r=null;function Rm(e){Qf(e,0)}function Ei(e){var t=yr(e);if(Xc(t))return e}function pu(e,t){if(e==="change")return t}var mu=!1;if(yn){var ol;if(yn){var cl="oninput"in document;if(!cl){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),cl=typeof gu.oninput=="function"}ol=cl}else ol=!1;mu=ol&&(!document.documentMode||9<document.documentMode)}function yu(){Ar&&(Ar.detachEvent("onpropertychange",vu),_r=Ar=null)}function vu(e){if(e.propertyName==="value"&&Ei(_r)){var t=[];hu(t,_r,e,Js(e)),tu(Rm,t)}}function Tm(e,t,n){e==="focusin"?(yu(),Ar=t,_r=n,Ar.attachEvent("onpropertychange",vu)):e==="focusout"&&yu()}function Nm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(_r)}function Cm(e,t){if(e==="click")return Ei(t)}function Im(e,t){if(e==="input"||e==="change")return Ei(t)}function Dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Dm;function wr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!q.call(t,r)||!Lt(e[r],t[r]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xu(e,t){var n=bu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mi(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Om=yn&&"documentMode"in document&&11>=document.documentMode,Ma=null,dl=null,Rr=null,fl=!1;function Au(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||Ma==null||Ma!==mi(a)||(a=Ma,"selectionStart"in a&&ul(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rr&&wr(Rr,a)||(Rr=a,a=us(dl,"onSelect"),0<a.length&&(t=new xi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ma)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},hl={},_u={};yn&&(_u=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function ua(e){if(hl[e])return hl[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _u)return hl[e]=t[n];return e}var wu=ua("animationend"),Ru=ua("animationiteration"),Tu=ua("animationstart"),jm=ua("transitionrun"),km=ua("transitionstart"),Lm=ua("transitioncancel"),Nu=ua("transitionend"),Cu=new Map,pl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pl.push("scrollEnd");function an(e,t){Cu.set(e,t),la(t,[e])}var Ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$t=[],Fa=0,ml=0;function _i(){for(var e=Fa,t=ml=Fa=0;t<e;){var n=$t[t];$t[t++]=null;var a=$t[t];$t[t++]=null;var r=$t[t];$t[t++]=null;var i=$t[t];if($t[t++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}i!==0&&Iu(n,r,i)}}function wi(e,t,n,a){$t[Fa++]=e,$t[Fa++]=t,$t[Fa++]=n,$t[Fa++]=a,ml|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function gl(e,t,n,a){return wi(e,t,n,a),Ri(e)}function da(e,t){return wi(e,null,null,t),Ri(e)}function Iu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-rt(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function Ri(e){if(50<Xr)throw Xr=0,Ro=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function zm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new zm(e,t,n,a)}function yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Du(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ti(e,t,n,a,r,i){var d=0;if(a=e,typeof e=="function")yl(e)&&(d=1);else if(typeof e=="string")d=Pg(e,n,re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=zt(31,n,t,r),e.elementType=U,e.lanes=i,e;case v:return fa(n.children,r,i,t);case A:d=8,r|=24;break;case _:return e=zt(12,n,t,r|2),e.elementType=_,e.lanes=i,e;case k:return e=zt(13,n,t,r),e.elementType=k,e.lanes=i,e;case $:return e=zt(19,n,t,r),e.elementType=$,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:d=10;break e;case I:d=9;break e;case F:d=11;break e;case H:d=14;break e;case G:d=16,a=null;break e}d=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=zt(d,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function fa(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function vl(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Ou(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function bl(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ju=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var n=ju.get(e);return n!==void 0?n:(t={value:e,source:t,stack:O(t)},ju.set(e,t),t)}return{value:e,source:t,stack:O(t)}}var Pa=[],Va=0,Ni=null,Tr=0,Zt=[],Qt=0,zn=null,un=1,dn="";function bn(e,t){Pa[Va++]=Tr,Pa[Va++]=Ni,Ni=e,Tr=t}function ku(e,t,n){Zt[Qt++]=un,Zt[Qt++]=dn,Zt[Qt++]=zn,zn=e;var a=un;e=dn;var r=32-rt(a)-1;a&=~(1<<r),n+=1;var i=32-rt(t)+r;if(30<i){var d=r-r%5;i=(a&(1<<d)-1).toString(32),a>>=d,r-=d,un=1<<32-rt(t)+r|n<<r|a,dn=i+e}else un=1<<i|n<<r|a,dn=e}function xl(e){e.return!==null&&(bn(e,1),ku(e,1,0))}function Sl(e){for(;e===Ni;)Ni=Pa[--Va],Pa[Va]=null,Tr=Pa[--Va],Pa[Va]=null;for(;e===zn;)zn=Zt[--Qt],Zt[Qt]=null,dn=Zt[--Qt],Zt[Qt]=null,un=Zt[--Qt],Zt[Qt]=null}function Lu(e,t){Zt[Qt++]=un,Zt[Qt++]=dn,Zt[Qt++]=zn,un=t.id,dn=t.overflow,zn=e}var St=null,tt=null,He=!1,Mn=null,Wt=!1,El=Error(c(519));function Un(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nr(Xt(t,e)),El}function zu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[xt]=e,t[Nt]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Qr.length;n++)Ue(Qr[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Zc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),Wc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||eh(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Un(e,!0)}function Mu(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:St=St.return}}function Ha(e){if(e!==St)return!1;if(!He)return Mu(e),He=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Po(e.type,e.memoizedProps)),n=!n),n&&tt&&Un(e),Mu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));tt=ch(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));tt=ch(e)}else t===27?(t=tt,Kn(e.type)?(e=Yo,Yo=null,tt=e):tt=t):tt=St?Jt(e.stateNode.nextSibling):null;return!0}function ha(){tt=St=null,He=!1}function Al(){var e=Mn;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Mn=null),e}function Nr(e){Mn===null?Mn=[e]:Mn.push(e)}var _l=N(null),pa=null,xn=null;function Fn(e,t,n){se(_l,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=_l.current,j(_l)}function wl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Rl(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var d=r.child;i=i.firstContext;e:for(;i!==null;){var T=i;i=r;for(var M=0;M<t.length;M++)if(T.context===t[M]){i.lanes|=n,T=i.alternate,T!==null&&(T.lanes|=n),wl(i.return,n,e),a||(d=null);break e}i=T.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(c(341));d.lanes|=n,i=d.alternate,i!==null&&(i.lanes|=n),wl(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function Ga(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var T=r.type;Lt(r.pendingProps.value,d.value)||(e!==null?e.push(T):e=[T])}}else if(r===Ne.current){if(d=r.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ti):e=[ti])}r=r.return}e!==null&&Rl(t,e,n,a),t.flags|=262144}function Ci(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){pa=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Et(e){return Uu(pa,e)}function Ii(e,t){return pa===null&&ma(e),Uu(e,t)}function Uu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(c(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Mm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Um=u.unstable_scheduleCallback,Fm=u.unstable_NormalPriority,ut={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tl(){return{controller:new Mm,data:new Map,refCount:0}}function Cr(e){e.refCount--,e.refCount===0&&Um(Fm,function(){e.controller.abort()})}var Ir=null,Nl=0,qa=0,Ya=null;function Bm(e,t){if(Ir===null){var n=Ir=[];Nl=0,qa=Oo(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Nl++,t.then(Fu,Fu),t}function Fu(){if(--Nl===0&&Ir!==null){Ya!==null&&(Ya.status="fulfilled");var e=Ir;Ir=null,qa=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Bu=V.S;V.S=function(e,t){_f=xe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bm(e,t),Bu!==null&&Bu(e,t)};var ga=N(null);function Cl(){var e=ga.current;return e!==null?e:et.pooledCache}function Di(e,t){t===null?se(ga,ga.current):se(ga,t.pool)}function Pu(){var e=Cl();return e===null?null:{parent:ut._currentValue,pool:e}}var $a=Error(c(460)),Il=Error(c(474)),Oi=Error(c(542)),ji={then:function(){}};function Vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qu(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=et,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qu(e),e}throw va=t,$a}}function ya(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(va=n,$a):n}}var va=null;function Gu(){if(va===null)throw Error(c(459));var e=va;return va=null,e}function qu(e){if(e===$a||e===Oi)throw Error(c(483))}var Xa=null,Dr=0;function ki(e){var t=Dr;return Dr+=1,Xa===null&&(Xa=[]),Hu(Xa,e,t)}function Or(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yu(e){function t(Y,B){if(e){var Z=Y.deletions;Z===null?(Y.deletions=[B],Y.flags|=16):Z.push(B)}}function n(Y,B){if(!e)return null;for(;B!==null;)t(Y,B),B=B.sibling;return null}function a(Y){for(var B=new Map;Y!==null;)Y.key!==null?B.set(Y.key,Y):B.set(Y.index,Y),Y=Y.sibling;return B}function r(Y,B){return Y=vn(Y,B),Y.index=0,Y.sibling=null,Y}function i(Y,B,Z){return Y.index=Z,e?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<B?(Y.flags|=67108866,B):Z):(Y.flags|=67108866,B)):(Y.flags|=1048576,B)}function d(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,B,Z,de){return B===null||B.tag!==6?(B=vl(Z,Y.mode,de),B.return=Y,B):(B=r(B,Z),B.return=Y,B)}function M(Y,B,Z,de){var Te=Z.type;return Te===v?oe(Y,B,Z.props.children,de,Z.key):B!==null&&(B.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===G&&ya(Te)===B.type)?(B=r(B,Z.props),Or(B,Z),B.return=Y,B):(B=Ti(Z.type,Z.key,Z.props,null,Y.mode,de),Or(B,Z),B.return=Y,B)}function Q(Y,B,Z,de){return B===null||B.tag!==4||B.stateNode.containerInfo!==Z.containerInfo||B.stateNode.implementation!==Z.implementation?(B=bl(Z,Y.mode,de),B.return=Y,B):(B=r(B,Z.children||[]),B.return=Y,B)}function oe(Y,B,Z,de,Te){return B===null||B.tag!==7?(B=fa(Z,Y.mode,de,Te),B.return=Y,B):(B=r(B,Z),B.return=Y,B)}function fe(Y,B,Z){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=vl(""+B,Y.mode,Z),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return Z=Ti(B.type,B.key,B.props,null,Y.mode,Z),Or(Z,B),Z.return=Y,Z;case R:return B=bl(B,Y.mode,Z),B.return=Y,B;case G:return B=ya(B),fe(Y,B,Z)}if(X(B)||L(B))return B=fa(B,Y.mode,Z,null),B.return=Y,B;if(typeof B.then=="function")return fe(Y,ki(B),Z);if(B.$$typeof===D)return fe(Y,Ii(Y,B),Z);Li(Y,B)}return null}function ee(Y,B,Z,de){var Te=B!==null?B.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Te!==null?null:T(Y,B,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return Z.key===Te?M(Y,B,Z,de):null;case R:return Z.key===Te?Q(Y,B,Z,de):null;case G:return Z=ya(Z),ee(Y,B,Z,de)}if(X(Z)||L(Z))return Te!==null?null:oe(Y,B,Z,de,null);if(typeof Z.then=="function")return ee(Y,B,ki(Z),de);if(Z.$$typeof===D)return ee(Y,B,Ii(Y,Z),de);Li(Y,Z)}return null}function ne(Y,B,Z,de,Te){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return Y=Y.get(Z)||null,T(B,Y,""+de,Te);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case S:return Y=Y.get(de.key===null?Z:de.key)||null,M(B,Y,de,Te);case R:return Y=Y.get(de.key===null?Z:de.key)||null,Q(B,Y,de,Te);case G:return de=ya(de),ne(Y,B,Z,de,Te)}if(X(de)||L(de))return Y=Y.get(Z)||null,oe(B,Y,de,Te,null);if(typeof de.then=="function")return ne(Y,B,Z,ki(de),Te);if(de.$$typeof===D)return ne(Y,B,Z,Ii(B,de),Te);Li(B,de)}return null}function Se(Y,B,Z,de){for(var Te=null,Ge=null,Ae=B,ke=B=0,Pe=null;Ae!==null&&ke<Z.length;ke++){Ae.index>ke?(Pe=Ae,Ae=null):Pe=Ae.sibling;var qe=ee(Y,Ae,Z[ke],de);if(qe===null){Ae===null&&(Ae=Pe);break}e&&Ae&&qe.alternate===null&&t(Y,Ae),B=i(qe,B,ke),Ge===null?Te=qe:Ge.sibling=qe,Ge=qe,Ae=Pe}if(ke===Z.length)return n(Y,Ae),He&&bn(Y,ke),Te;if(Ae===null){for(;ke<Z.length;ke++)Ae=fe(Y,Z[ke],de),Ae!==null&&(B=i(Ae,B,ke),Ge===null?Te=Ae:Ge.sibling=Ae,Ge=Ae);return He&&bn(Y,ke),Te}for(Ae=a(Ae);ke<Z.length;ke++)Pe=ne(Ae,Y,ke,Z[ke],de),Pe!==null&&(e&&Pe.alternate!==null&&Ae.delete(Pe.key===null?ke:Pe.key),B=i(Pe,B,ke),Ge===null?Te=Pe:Ge.sibling=Pe,Ge=Pe);return e&&Ae.forEach(function(aa){return t(Y,aa)}),He&&bn(Y,ke),Te}function Ce(Y,B,Z,de){if(Z==null)throw Error(c(151));for(var Te=null,Ge=null,Ae=B,ke=B=0,Pe=null,qe=Z.next();Ae!==null&&!qe.done;ke++,qe=Z.next()){Ae.index>ke?(Pe=Ae,Ae=null):Pe=Ae.sibling;var aa=ee(Y,Ae,qe.value,de);if(aa===null){Ae===null&&(Ae=Pe);break}e&&Ae&&aa.alternate===null&&t(Y,Ae),B=i(aa,B,ke),Ge===null?Te=aa:Ge.sibling=aa,Ge=aa,Ae=Pe}if(qe.done)return n(Y,Ae),He&&bn(Y,ke),Te;if(Ae===null){for(;!qe.done;ke++,qe=Z.next())qe=fe(Y,qe.value,de),qe!==null&&(B=i(qe,B,ke),Ge===null?Te=qe:Ge.sibling=qe,Ge=qe);return He&&bn(Y,ke),Te}for(Ae=a(Ae);!qe.done;ke++,qe=Z.next())qe=ne(Ae,Y,ke,qe.value,de),qe!==null&&(e&&qe.alternate!==null&&Ae.delete(qe.key===null?ke:qe.key),B=i(qe,B,ke),Ge===null?Te=qe:Ge.sibling=qe,Ge=qe);return e&&Ae.forEach(function(Kg){return t(Y,Kg)}),He&&bn(Y,ke),Te}function Ke(Y,B,Z,de){if(typeof Z=="object"&&Z!==null&&Z.type===v&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:e:{for(var Te=Z.key;B!==null;){if(B.key===Te){if(Te=Z.type,Te===v){if(B.tag===7){n(Y,B.sibling),de=r(B,Z.props.children),de.return=Y,Y=de;break e}}else if(B.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===G&&ya(Te)===B.type){n(Y,B.sibling),de=r(B,Z.props),Or(de,Z),de.return=Y,Y=de;break e}n(Y,B);break}else t(Y,B);B=B.sibling}Z.type===v?(de=fa(Z.props.children,Y.mode,de,Z.key),de.return=Y,Y=de):(de=Ti(Z.type,Z.key,Z.props,null,Y.mode,de),Or(de,Z),de.return=Y,Y=de)}return d(Y);case R:e:{for(Te=Z.key;B!==null;){if(B.key===Te)if(B.tag===4&&B.stateNode.containerInfo===Z.containerInfo&&B.stateNode.implementation===Z.implementation){n(Y,B.sibling),de=r(B,Z.children||[]),de.return=Y,Y=de;break e}else{n(Y,B);break}else t(Y,B);B=B.sibling}de=bl(Z,Y.mode,de),de.return=Y,Y=de}return d(Y);case G:return Z=ya(Z),Ke(Y,B,Z,de)}if(X(Z))return Se(Y,B,Z,de);if(L(Z)){if(Te=L(Z),typeof Te!="function")throw Error(c(150));return Z=Te.call(Z),Ce(Y,B,Z,de)}if(typeof Z.then=="function")return Ke(Y,B,ki(Z),de);if(Z.$$typeof===D)return Ke(Y,B,Ii(Y,Z),de);Li(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,B!==null&&B.tag===6?(n(Y,B.sibling),de=r(B,Z),de.return=Y,Y=de):(n(Y,B),de=vl(Z,Y.mode,de),de.return=Y,Y=de),d(Y)):n(Y,B)}return function(Y,B,Z,de){try{Dr=0;var Te=Ke(Y,B,Z,de);return Xa=null,Te}catch(Ae){if(Ae===$a||Ae===Oi)throw Ae;var Ge=zt(29,Ae,null,Y.mode);return Ge.lanes=de,Ge.return=Y,Ge}finally{}}}var ba=Yu(!0),$u=Yu(!1),Bn=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ol(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ye&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ri(e),Iu(e,null,n),t}return wi(e,a,t,n),Ri(e)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Uc(e,n)}}function jl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var kl=!1;function kr(){if(kl){var e=Ya;if(e!==null)throw e}}function Lr(e,t,n,a){kl=!1;var r=e.updateQueue;Bn=!1;var i=r.firstBaseUpdate,d=r.lastBaseUpdate,T=r.shared.pending;if(T!==null){r.shared.pending=null;var M=T,Q=M.next;M.next=null,d===null?i=Q:d.next=Q,d=M;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,T=oe.lastBaseUpdate,T!==d&&(T===null?oe.firstBaseUpdate=Q:T.next=Q,oe.lastBaseUpdate=M))}if(i!==null){var fe=r.baseState;d=0,oe=Q=M=null,T=i;do{var ee=T.lane&-536870913,ne=ee!==T.lane;if(ne?(Be&ee)===ee:(a&ee)===ee){ee!==0&&ee===qa&&(kl=!0),oe!==null&&(oe=oe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Se=e,Ce=T;ee=t;var Ke=n;switch(Ce.tag){case 1:if(Se=Ce.payload,typeof Se=="function"){fe=Se.call(Ke,fe,ee);break e}fe=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ce.payload,ee=typeof Se=="function"?Se.call(Ke,fe,ee):Se,ee==null)break e;fe=E({},fe,ee);break e;case 2:Bn=!0}}ee=T.callback,ee!==null&&(e.flags|=64,ne&&(e.flags|=8192),ne=r.callbacks,ne===null?r.callbacks=[ee]:ne.push(ee))}else ne={lane:ee,tag:T.tag,payload:T.payload,callback:T.callback,next:null},oe===null?(Q=oe=ne,M=fe):oe=oe.next=ne,d|=ee;if(T=T.next,T===null){if(T=r.shared.pending,T===null)break;ne=T,T=ne.next,ne.next=null,r.lastBaseUpdate=ne,r.shared.pending=null}}while(!0);oe===null&&(M=fe),r.baseState=M,r.firstBaseUpdate=Q,r.lastBaseUpdate=oe,i===null&&(r.shared.lanes=0),$n|=d,e.lanes=d,e.memoizedState=fe}}function Xu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Zu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xu(n[e],t)}var Za=N(null),zi=N(0);function Qu(e,t){e=In,se(zi,e),se(Za,t),In=e|t.baseLanes}function Ll(){se(zi,In),se(Za,Za.current)}function zl(){In=zi.current,j(Za),j(zi)}var Mt=N(null),Kt=null;function Hn(e){var t=e.alternate;se(lt,lt.current&1),se(Mt,e),Kt===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Kt=e)}function Ml(e){se(lt,lt.current),se(Mt,e),Kt===null&&(Kt=e)}function Wu(e){e.tag===22?(se(lt,lt.current),se(Mt,e),Kt===null&&(Kt=e)):Gn()}function Gn(){se(lt,lt.current),se(Mt,Mt.current)}function Ut(e){j(Mt),Kt===e&&(Kt=null),j(lt)}var lt=N(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Go(n)||qo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,je=null,Qe=null,dt=null,Ui=!1,Qa=!1,xa=!1,Fi=0,zr=0,Wa=null,Vm=0;function it(){throw Error(c(321))}function Ul(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,a,r,i){return En=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?kd:eo,xa=!1,i=n(a,r),xa=!1,Qa&&(i=Ju(t,n,a,r)),Ku(e),i}function Ku(e){V.H=Fr;var t=Qe!==null&&Qe.next!==null;if(En=0,dt=Qe=je=null,Ui=!1,zr=0,Wa=null,t)throw Error(c(300));e===null||ft||(e=e.dependencies,e!==null&&Ci(e)&&(ft=!0))}function Ju(e,t,n,a){je=e;var r=0;do{if(Qa&&(Wa=null),zr=0,Qa=!1,25<=r)throw Error(c(301));if(r+=1,dt=Qe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}V.H=Ld,i=t(n,a)}while(Qa);return i}function Hm(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?Mr(t):t,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(je.flags|=1024),t}function Bl(){var e=Fi!==0;return Fi=0,e}function Pl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vl(e){if(Ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ui=!1}En=0,dt=Qe=je=null,Qa=!1,zr=Fi=0,Wa=null}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?je.memoizedState=dt=e:dt=dt.next=e,dt}function ot(){if(Qe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=dt===null?je.memoizedState:dt.next;if(t!==null)dt=t,Qe=e;else{if(e===null)throw je.alternate===null?Error(c(467)):Error(c(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},dt===null?je.memoizedState=dt=e:dt=dt.next=e}return dt}function Bi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mr(e){var t=zr;return zr+=1,Wa===null&&(Wa=[]),e=Hu(Wa,e,t),t=je,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?kd:eo),e}function Pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mr(e);if(e.$$typeof===D)return Et(e)}throw Error(c(438,String(e)))}function Hl(e){var t=null,n=je.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=je.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Bi(),je.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ae;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=ot();return Gl(t,Qe,e)}function Gl(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var d=r.next;r.next=i.next,i.next=d}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var T=d=null,M=null,Q=t,oe=!1;do{var fe=Q.lane&-536870913;if(fe!==Q.lane?(Be&fe)===fe:(En&fe)===fe){var ee=Q.revertLane;if(ee===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),fe===qa&&(oe=!0);else if((En&ee)===ee){Q=Q.next,ee===qa&&(oe=!0);continue}else fe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},M===null?(T=M=fe,d=i):M=M.next=fe,je.lanes|=ee,$n|=ee;fe=Q.action,xa&&n(i,fe),i=Q.hasEagerState?Q.eagerState:n(i,fe)}else ee={lane:fe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},M===null?(T=M=ee,d=i):M=M.next=ee,je.lanes|=fe,$n|=fe;Q=Q.next}while(Q!==null&&Q!==t);if(M===null?d=i:M.next=T,!Lt(i,e.memoizedState)&&(ft=!0,oe&&(n=Ya,n!==null)))throw n;e.memoizedState=i,e.baseState=d,e.baseQueue=M,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ql(e){var t=ot(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do i=e(i,d.action),d=d.next;while(d!==r);Lt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function ed(e,t,n){var a=je,r=ot(),i=He;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var d=!Lt((Qe||r).memoizedState,n);if(d&&(r.memoizedState=n,ft=!0),r=r.queue,Xl(ad.bind(null,a,r,e),[e]),r.getSnapshot!==t||d||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,Ka(9,{destroy:void 0},nd.bind(null,a,r,n,t),null),et===null)throw Error(c(349));i||(En&127)!==0||td(a,t,n)}return n}function td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t=Bi(),je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nd(e,t,n,a){t.value=n,t.getSnapshot=a,rd(t)&&id(e)}function ad(e,t,n){return n(function(){rd(t)&&id(e)})}function rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function id(e){var t=da(e,2);t!==null&&kt(t,e,2)}function Yl(e){var t=Rt();if(typeof e=="function"){var n=e;if(e=n(),xa){Ht(!0);try{n()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function sd(e,t,n,a){return e.baseState=n,Gl(e,Qe,typeof a=="function"?a:An)}function Gm(e,t,n,a,r){if(qi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};V.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,ld(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ld(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=V.T,d={};V.T=d;try{var T=n(r,a),M=V.S;M!==null&&M(d,T),od(e,t,T)}catch(Q){$l(e,t,Q)}finally{i!==null&&d.types!==null&&(i.types=d.types),V.T=i}}else try{i=n(r,a),od(e,t,i)}catch(Q){$l(e,t,Q)}}function od(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){cd(e,t,a)},function(a){return $l(e,t,a)}):cd(e,t,n)}function cd(e,t,n){t.status="fulfilled",t.value=n,ud(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ld(e,n)))}function $l(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,ud(t),t=t.next;while(t!==a)}e.action=null}function ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function fd(e,t){if(He){var n=et.formState;if(n!==null){e:{var a=je;if(He){if(tt){t:{for(var r=tt,i=Wt;r.nodeType!==8;){if(!i){r=null;break t}if(r=Jt(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){tt=Jt(r.nextSibling),a=r.data==="F!";break e}}Un(a)}a=!1}a&&(t=n[0])}}return n=Rt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},n.queue=a,n=Dd.bind(null,je,a),a.dispatch=n,a=Yl(!1),i=Jl.bind(null,je,!1,a.queue),a=Rt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Gm.bind(null,je,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function hd(e){var t=ot();return pd(t,Qe,e)}function pd(e,t,n){if(t=Gl(e,t,dd)[0],e=Vi(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Mr(t)}catch(d){throw d===$a?Oi:d}else a=t;t=ot();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(je.flags|=2048,Ka(9,{destroy:void 0},qm.bind(null,r,n),null)),[a,i,e]}function qm(e,t){e.action=t}function md(e){var t=ot(),n=Qe;if(n!==null)return pd(t,n,e);ot(),t=t.memoizedState,n=ot();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=je.updateQueue,t===null&&(t=Bi(),je.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function gd(){return ot().memoizedState}function Hi(e,t,n,a){var r=Rt();je.flags|=e,r.memoizedState=Ka(1|t,{destroy:void 0},n,a===void 0?null:a)}function Gi(e,t,n,a){var r=ot();a=a===void 0?null:a;var i=r.memoizedState.inst;Qe!==null&&a!==null&&Ul(a,Qe.memoizedState.deps)?r.memoizedState=Ka(t,i,n,a):(je.flags|=e,r.memoizedState=Ka(1|t,i,n,a))}function yd(e,t){Hi(8390656,8,e,t)}function Xl(e,t){Gi(2048,8,e,t)}function Ym(e){je.flags|=4;var t=je.updateQueue;if(t===null)t=Bi(),je.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function vd(e){var t=ot().memoizedState;return Ym({ref:t,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function bd(e,t){return Gi(4,2,e,t)}function xd(e,t){return Gi(4,4,e,t)}function Sd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ed(e,t,n){n=n!=null?n.concat([e]):null,Gi(4,4,Sd.bind(null,t,e),n)}function Zl(){}function Ad(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ul(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function _d(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ul(t,a[1]))return a[0];if(a=e(),xa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a}function Ql(e,t,n){return n===void 0||(En&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Rf(),je.lanes|=e,$n|=e,n)}function wd(e,t,n,a){return Lt(n,t)?n:Za.current!==null?(e=Ql(e,n,a),Lt(e,t)||(ft=!0),e):(En&42)===0||(En&1073741824)!==0&&(Be&261930)===0?(ft=!0,e.memoizedState=n):(e=Rf(),je.lanes|=e,$n|=e,t)}function Rd(e,t,n,a,r){var i=P.p;P.p=i!==0&&8>i?i:8;var d=V.T,T={};V.T=T,Jl(e,!1,t,n);try{var M=r(),Q=V.S;if(Q!==null&&Q(T,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var oe=Pm(M,a);Ur(e,t,oe,Pt(e))}else Ur(e,t,a,Pt(e))}catch(fe){Ur(e,t,{then:function(){},status:"rejected",reason:fe},Pt())}finally{P.p=i,d!==null&&T.types!==null&&(d.types=T.types),V.T=d}}function $m(){}function Wl(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=Td(e).queue;Rd(e,r,t,ce,n===null?$m:function(){return Nd(e),n(a)})}function Td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nd(e){var t=Td(e);t.next===null&&(t=e.alternate.memoizedState),Ur(e,t.next.queue,{},Pt())}function Kl(){return Et(ti)}function Cd(){return ot().memoizedState}function Id(){return ot().memoizedState}function Xm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Pt();e=Pn(n);var a=Vn(t,e,n);a!==null&&(kt(a,t,n),jr(a,t,n)),t={cache:Tl()},e.payload=t;return}t=t.return}}function Zm(e,t,n){var a=Pt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e)?Od(t,n):(n=gl(e,t,n,a),n!==null&&(kt(n,e,a),jd(n,t,a)))}function Dd(e,t,n){var a=Pt();Ur(e,t,n,a)}function Ur(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Od(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,T=i(d,n);if(r.hasEagerState=!0,r.eagerState=T,Lt(T,d))return wi(e,t,r,0),et===null&&_i(),!1}catch{}finally{}if(n=gl(e,t,r,a),n!==null)return kt(n,e,a),jd(n,t,a),!0}return!1}function Jl(e,t,n,a){if(a={lane:2,revertLane:Oo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(c(479))}else t=gl(e,n,a,2),t!==null&&kt(t,e,2)}function qi(e){var t=e.alternate;return e===je||t!==null&&t===je}function Od(e,t){Qa=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Uc(e,n)}}var Fr={readContext:Et,use:Pi,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useInsertionEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useSyncExternalStore:it,useId:it,useHostTransitionStatus:it,useFormState:it,useActionState:it,useOptimistic:it,useMemoCache:it,useCacheRefresh:it};Fr.useEffectEvent=it;var kd={readContext:Et,use:Pi,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:yd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hi(4194308,4,Sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){Hi(4,2,e,t)},useMemo:function(e,t){var n=Rt();t=t===void 0?null:t;var a=e();if(xa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Rt();if(n!==void 0){var r=n(t);if(xa){Ht(!0);try{n(t)}finally{Ht(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Zm.bind(null,je,e),[a.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Yl(e);var t=e.queue,n=Dd.bind(null,je,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zl,useDeferredValue:function(e,t){var n=Rt();return Ql(n,e,t)},useTransition:function(){var e=Yl(!1);return e=Rd.bind(null,je,e.queue,!0,!1),Rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=je,r=Rt();if(He){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),et===null)throw Error(c(349));(Be&127)!==0||td(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,yd(ad.bind(null,a,i,e),[e]),a.flags|=2048,Ka(9,{destroy:void 0},nd.bind(null,a,i,n,t),null),n},useId:function(){var e=Rt(),t=et.identifierPrefix;if(He){var n=dn,a=un;n=(a&~(1<<32-rt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Vm++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Kl,useFormState:fd,useActionState:fd,useOptimistic:function(e){var t=Rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Jl.bind(null,je,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hl,useCacheRefresh:function(){return Rt().memoizedState=Xm.bind(null,je)},useEffectEvent:function(e){var t=Rt(),n={impl:e};return t.memoizedState=n,function(){if((Ye&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},eo={readContext:Et,use:Pi,useCallback:Ad,useContext:Et,useEffect:Xl,useImperativeHandle:Ed,useInsertionEffect:bd,useLayoutEffect:xd,useMemo:_d,useReducer:Vi,useRef:gd,useState:function(){return Vi(An)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=ot();return wd(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Vi(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Mr(e),t]},useSyncExternalStore:ed,useId:Cd,useHostTransitionStatus:Kl,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var n=ot();return sd(n,Qe,e,t)},useMemoCache:Hl,useCacheRefresh:Id};eo.useEffectEvent=vd;var Ld={readContext:Et,use:Pi,useCallback:Ad,useContext:Et,useEffect:Xl,useImperativeHandle:Ed,useInsertionEffect:bd,useLayoutEffect:xd,useMemo:_d,useReducer:ql,useRef:gd,useState:function(){return ql(An)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=ot();return Qe===null?Ql(n,e,t):wd(n,Qe.memoizedState,e,t)},useTransition:function(){var e=ql(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Mr(e),t]},useSyncExternalStore:ed,useId:Cd,useHostTransitionStatus:Kl,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=ot();return Qe!==null?sd(n,Qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hl,useCacheRefresh:Id};Ld.useEffectEvent=vd;function to(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var no={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Pt(),r=Pn(a);r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(kt(t,e,a),jr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Pt(),r=Pn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(kt(t,e,a),jr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pt(),a=Pn(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(kt(t,e,n),jr(t,e,n))}};function zd(e,t,n,a,r,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,d):t.prototype&&t.prototype.isPureReactComponent?!wr(n,a)||!wr(r,i):!0}function Md(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&no.enqueueReplaceState(t,t.state,null)}function Sa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Ud(e){Ai(e)}function Fd(e){console.error(e)}function Bd(e){Ai(e)}function Yi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Pd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ao(e,t,n){return n=Pn(n),n.tag=3,n.payload={element:null},n.callback=function(){Yi(e,t)},n}function Vd(e){return e=Pn(e),e.tag=3,e}function Hd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){Pd(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Pd(t,n,a),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var T=a.stack;this.componentDidCatch(a.value,{componentStack:T!==null?T:""})})}function Qm(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,r,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Kt===null?rs():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ji?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Co(e,a,r)),!1;case 22:return n.flags|=65536,a===ji?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Co(e,a,r)),!1}throw Error(c(435,n.tag))}return Co(e,a,r),rs(),!1}if(He)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==El&&(e=Error(c(422),{cause:a}),Nr(Xt(e,n)))):(a!==El&&(t=Error(c(423),{cause:a}),Nr(Xt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Xt(a,n),r=ao(e.stateNode,a,r),jl(e,r),st!==4&&(st=2)),!1;var i=Error(c(520),{cause:a});if(i=Xt(i,n),$r===null?$r=[i]:$r.push(i),st!==4&&(st=2),t===null)return!0;a=Xt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ao(n.stateNode,a,e),jl(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Vd(r),Hd(r,e,n,a),jl(n,r),!1}n=n.return}while(n!==null);return!1}var ro=Error(c(461)),ft=!1;function At(e,t,n,a){t.child=e===null?$u(t,null,n,a):ba(t,e.child,n,a)}function Gd(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var d={};for(var T in a)T!=="ref"&&(d[T]=a[T])}else d=a;return ma(t),a=Fl(e,t,n,d,i,r),T=Bl(),e!==null&&!ft?(Pl(e,t,r),_n(e,t,r)):(He&&T&&xl(t),t.flags|=1,At(e,t,a,r),t.child)}function qd(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!yl(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Yd(e,t,i,a,r)):(e=Ti(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ho(e,r)){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:wr,n(d,a)&&e.ref===t.ref)return _n(e,t,r)}return t.flags|=1,e=vn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Yd(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(wr(i,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=i,ho(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,_n(e,t,r)}return io(e,t,n,a,r)}function $d(e,t,n,a){var r=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return Xd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,i!==null?i.cachePool:null),i!==null?Qu(t,i):Ll(),Wu(t);else return a=t.lanes=536870912,Xd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Di(t,i.cachePool),Qu(t,i),Gn(),t.memoizedState=null):(e!==null&&Di(t,null),Ll(),Gn());return At(e,t,r,n),t.child}function Br(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xd(e,t,n,a,r){var i=Cl();return i=i===null?null:{parent:ut._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Di(t,null),Ll(),Wu(t),e!==null&&Ga(e,t,a,!0),t.childLanes=r,null}function $i(e,t){return t=Zi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zd(e,t,n){return ba(t,e.child,null,n),e=$i(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function Wm(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(a.mode==="hidden")return e=$i(t,a),t.lanes=536870912,Br(null,e);if(Ml(t),(e=tt)?(e=oh(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Ou(e),n.return=t,t.child=n,St=t,tt=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return $i(t,a)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Ml(t),r)if(t.flags&256)t.flags&=-257,t=Zd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ft||Ga(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(a=et,a!==null&&(d=Fc(a,n),d!==0&&d!==i.retryLane))throw i.retryLane=d,da(e,d),kt(a,e,d),ro;rs(),t=Zd(e,t,n)}else e=i.treeContext,tt=Jt(d.nextSibling),St=t,He=!0,Mn=null,Wt=!1,e!==null&&Lu(t,e),t=$i(t,a),t.flags|=4096;return t}return e=vn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function io(e,t,n,a,r){return ma(t),n=Fl(e,t,n,a,void 0,r),a=Bl(),e!==null&&!ft?(Pl(e,t,r),_n(e,t,r)):(He&&a&&xl(t),t.flags|=1,At(e,t,n,r),t.child)}function Qd(e,t,n,a,r,i){return ma(t),t.updateQueue=null,n=Ju(t,a,n,r),Ku(e),a=Bl(),e!==null&&!ft?(Pl(e,t,i),_n(e,t,i)):(He&&a&&xl(t),t.flags|=1,At(e,t,n,i),t.child)}function Wd(e,t,n,a,r){if(ma(t),t.stateNode===null){var i=Ba,d=n.contextType;typeof d=="object"&&d!==null&&(i=Et(d)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=no,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Dl(t),d=n.contextType,i.context=typeof d=="object"&&d!==null?Et(d):Ba,i.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(to(t,n,d,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&no.enqueueReplaceState(i,i.state,null),Lr(t,a,i,r),kr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var T=t.memoizedProps,M=Sa(n,T);i.props=M;var Q=i.context,oe=n.contextType;d=Ba,typeof oe=="object"&&oe!==null&&(d=Et(oe));var fe=n.getDerivedStateFromProps;oe=typeof fe=="function"||typeof i.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,oe||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(T||Q!==d)&&Md(t,i,a,d),Bn=!1;var ee=t.memoizedState;i.state=ee,Lr(t,a,i,r),kr(),Q=t.memoizedState,T||ee!==Q||Bn?(typeof fe=="function"&&(to(t,n,fe,a),Q=t.memoizedState),(M=Bn||zd(t,n,M,a,ee,Q,d))?(oe||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=Q),i.props=a,i.state=Q,i.context=d,a=M):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Ol(e,t),d=t.memoizedProps,oe=Sa(n,d),i.props=oe,fe=t.pendingProps,ee=i.context,Q=n.contextType,M=Ba,typeof Q=="object"&&Q!==null&&(M=Et(Q)),T=n.getDerivedStateFromProps,(Q=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==fe||ee!==M)&&Md(t,i,a,M),Bn=!1,ee=t.memoizedState,i.state=ee,Lr(t,a,i,r),kr();var ne=t.memoizedState;d!==fe||ee!==ne||Bn||e!==null&&e.dependencies!==null&&Ci(e.dependencies)?(typeof T=="function"&&(to(t,n,T,a),ne=t.memoizedState),(oe=Bn||zd(t,n,oe,a,ee,ne,M)||e!==null&&e.dependencies!==null&&Ci(e.dependencies))?(Q||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,ne,M),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,ne,M)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ne),i.props=a,i.state=ne,i.context=M,a=oe):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Xi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ba(t,e.child,null,r),t.child=ba(t,null,n,r)):At(e,t,n,r),t.memoizedState=i.state,e=t.child):e=_n(e,t,r),e}function Kd(e,t,n,a){return ha(),t.flags|=256,At(e,t,n,a),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lo(e){return{baseLanes:e,cachePool:Pu()}}function oo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bt),e}function Jd(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(r?Hn(t):Gn(),(e=tt)?(e=oh(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=Ou(e),n.return=t,t.child=n,St=t,tt=null)):e=null,e===null)throw Un(t);return qo(e)?t.lanes=32:t.lanes=536870912,null}var T=a.children;return a=a.fallback,r?(Gn(),r=t.mode,T=Zi({mode:"hidden",children:T},r),a=fa(a,r,n,null),T.return=t,a.return=t,T.sibling=a,t.child=T,a=t.child,a.memoizedState=lo(n),a.childLanes=oo(e,d,n),t.memoizedState=so,Br(null,a)):(Hn(t),co(t,T))}var M=e.memoizedState;if(M!==null&&(T=M.dehydrated,T!==null)){if(i)t.flags&256?(Hn(t),t.flags&=-257,t=uo(e,t,n)):t.memoizedState!==null?(Gn(),t.child=e.child,t.flags|=128,t=null):(Gn(),T=a.fallback,r=t.mode,a=Zi({mode:"visible",children:a.children},r),T=fa(T,r,n,null),T.flags|=2,a.return=t,T.return=t,a.sibling=T,t.child=a,ba(t,e.child,null,n),a=t.child,a.memoizedState=lo(n),a.childLanes=oo(e,d,n),t.memoizedState=so,t=Br(null,a));else if(Hn(t),qo(T)){if(d=T.nextSibling&&T.nextSibling.dataset,d)var Q=d.dgst;d=Q,a=Error(c(419)),a.stack="",a.digest=d,Nr({value:a,source:null,stack:null}),t=uo(e,t,n)}else if(ft||Ga(e,t,n,!1),d=(n&e.childLanes)!==0,ft||d){if(d=et,d!==null&&(a=Fc(d,n),a!==0&&a!==M.retryLane))throw M.retryLane=a,da(e,a),kt(d,e,a),ro;Go(T)||rs(),t=uo(e,t,n)}else Go(T)?(t.flags|=192,t.child=e.child,t=null):(e=M.treeContext,tt=Jt(T.nextSibling),St=t,He=!0,Mn=null,Wt=!1,e!==null&&Lu(t,e),t=co(t,a.children),t.flags|=4096);return t}return r?(Gn(),T=a.fallback,r=t.mode,M=e.child,Q=M.sibling,a=vn(M,{mode:"hidden",children:a.children}),a.subtreeFlags=M.subtreeFlags&65011712,Q!==null?T=vn(Q,T):(T=fa(T,r,n,null),T.flags|=2),T.return=t,a.return=t,a.sibling=T,t.child=a,Br(null,a),a=t.child,T=e.child.memoizedState,T===null?T=lo(n):(r=T.cachePool,r!==null?(M=ut._currentValue,r=r.parent!==M?{parent:M,pool:M}:r):r=Pu(),T={baseLanes:T.baseLanes|n,cachePool:r}),a.memoizedState=T,a.childLanes=oo(e,d,n),t.memoizedState=so,Br(e.child,a)):(Hn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function co(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function uo(e,t,n){return ba(t,e.child,null,n),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ef(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),wl(e.return,t,n)}function fo(e,t,n,a,r,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=r,d.treeForkCount=i)}function tf(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var d=lt.current,T=(d&2)!==0;if(T?(d=d&1|2,t.flags|=128):d&=1,se(lt,d),At(e,t,a,n),a=He?Tr:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,n,t);else if(e.tag===19)ef(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),fo(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Mi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}fo(t,!0,n,null,i,a);break;case"together":fo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function _n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ho(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ci(e)))}function Km(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),Fn(t,ut,e.memoizedState.cache),ha();break;case 27:case 5:Fe(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ml(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Jd(e,t,n):(Hn(t),e=_n(e,t,n),e!==null?e.sibling:null);Hn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ga(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return tf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),se(lt,lt.current),a)break;return null;case 22:return t.lanes=0,$d(e,t,n,t.pendingProps);case 24:Fn(t,ut,e.memoizedState.cache)}return _n(e,t,n)}function nf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!ho(e,n)&&(t.flags&128)===0)return ft=!1,Km(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,He&&(t.flags&1048576)!==0&&ku(t,Tr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e=="function")yl(e)?(a=Sa(e,a),t.tag=1,t=Wd(null,t,e,a,n)):(t.tag=0,t=io(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===F){t.tag=11,t=Gd(null,t,e,a,n);break e}else if(r===H){t.tag=14,t=qd(null,t,e,a,n);break e}}throw t=y(e)||e,Error(c(306,t,""))}}return t;case 0:return io(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Sa(a,t.pendingProps),Wd(e,t,a,r,n);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,Ol(e,t),Lr(t,a,null,n);var d=t.memoizedState;if(a=d.cache,Fn(t,ut,a),a!==i.cache&&Rl(t,[ut],n,!0),kr(),a=d.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Kd(e,t,a,n);break e}else if(a!==r){r=Xt(Error(c(424)),t),Nr(r),t=Kd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tt=Jt(e.firstChild),St=t,He=!0,Mn=null,Wt=!0,n=$u(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ha(),a===r){t=_n(e,t,n);break e}At(e,t,a,n)}t=t.child}return t;case 26:return Xi(e,t),e===null?(n=ph(t.type,null,t.pendingProps,null))?t.memoizedState=n:He||(n=t.type,e=t.pendingProps,a=ds(Ee.current).createElement(n),a[xt]=t,a[Nt]=e,_t(a,n,e),yt(a),t.stateNode=a):t.memoizedState=ph(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fe(t),e===null&&He&&(a=t.stateNode=dh(t.type,t.pendingProps,Ee.current),St=t,Wt=!0,r=tt,Kn(t.type)?(Yo=r,tt=Jt(a.firstChild)):tt=r),At(e,t,t.pendingProps.children,n),Xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((r=a=tt)&&(a=Ng(a,t.type,t.pendingProps,Wt),a!==null?(t.stateNode=a,St=t,tt=Jt(a.firstChild),Wt=!1,r=!0):r=!1),r||Un(t)),Fe(t),r=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,a=i.children,Po(r,i)?a=null:d!==null&&Po(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=Fl(e,t,Hm,null,null,n),ti._currentValue=r),Xi(e,t),At(e,t,a,n),t.child;case 6:return e===null&&He&&((e=n=tt)&&(n=Cg(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,St=t,tt=null,e=!0):e=!1),e||Un(t)),null;case 13:return Jd(e,t,n);case 4:return we(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ba(t,null,a,n):At(e,t,a,n),t.child;case 11:return Gd(e,t,t.type,t.pendingProps,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Fn(t,t.type,a.value),At(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ma(t),r=Et(r),a=a(r),t.flags|=1,At(e,t,a,n),t.child;case 14:return qd(e,t,t.type,t.pendingProps,n);case 15:return Yd(e,t,t.type,t.pendingProps,n);case 19:return tf(e,t,n);case 31:return Wm(e,t,n);case 22:return $d(e,t,n,t.pendingProps);case 24:return ma(t),a=Et(ut),e===null?(r=Cl(),r===null&&(r=et,i=Tl(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},Dl(t),Fn(t,ut,r)):((e.lanes&n)!==0&&(Ol(e,t),Lr(t,null,null,n),kr()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Fn(t,ut,a)):(a=i.cache,Fn(t,ut,a),a!==r.cache&&Rl(t,[ut],n,!0))),At(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function wn(e){e.flags|=4}function po(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(If())e.flags|=8192;else throw va=ji,Il}else e.flags&=-16777217}function af(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(t))if(If())e.flags|=8192;else throw va=ji,Il}function Qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zc():536870912,e.lanes|=t,nr|=t)}function Pr(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Jm(e,t,n){var a=t.pendingProps;switch(Sl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(ut),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Al())),nt(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(wn(t),i!==null?(nt(t),af(t,i)):(nt(t),po(t,r,null,a,n))):i?i!==e.memoizedState?(wn(t),nt(t),af(t,i)):(nt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&wn(t),nt(t),po(t,r,e,a,n)),null;case 27:if(Ve(t),n=Ee.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return nt(t),null}e=re.current,Ha(t)?zu(t):(e=dh(r,a,n),t.stateNode=e,wn(t))}return nt(t),null;case 5:if(Ve(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return nt(t),null}if(i=re.current,Ha(t))zu(t);else{var d=ds(Ee.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?d.createElement(r,{is:a.is}):d.createElement(r)}}i[xt]=t,i[Nt]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(_t(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&wn(t)}}return nt(t),po(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=Ee.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=St,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||eh(e.nodeValue,n)),e||Un(t,!0)}else e=ds(e).createTextNode(a),e[xt]=t,t.stateNode=e}return nt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ha(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[xt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),e=!1}else n=Al(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(c(558))}return nt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ha(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[xt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),r=!1}else r=Al(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qi(t,t.updateQueue),nt(t),null);case 4:return _e(),e===null&&zo(t.stateNode.containerInfo),nt(t),null;case 10:return Sn(t.type),nt(t),null;case 19:if(j(lt),a=t.memoizedState,a===null)return nt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Pr(a,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,Pr(a,!1),e=i.updateQueue,t.updateQueue=e,Qi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Du(n,e),n=n.sibling;return se(lt,lt.current&1|2),He&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xe()>ts&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Mi(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Qi(t,e),Pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!He)return nt(t),null}else 2*xe()-a.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xe(),e.sibling=null,n=lt.current,se(lt,r?n&1|2:n&1),He&&bn(t,a.treeForkCount),e):(nt(t),null);case 22:case 23:return Ut(t),zl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&Qi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&j(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(ut),nt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function eg(e,t){switch(Sl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(ut),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ve(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(c(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(lt),null;case 4:return _e(),null;case 10:return Sn(t.type),null;case 22:case 23:return Ut(t),zl(),e!==null&&j(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(ut),null;case 25:return null;default:return null}}function rf(e,t){switch(Sl(t),t.tag){case 3:Sn(ut),_e();break;case 26:case 27:case 5:Ve(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:j(lt);break;case 10:Sn(t.type);break;case 22:case 23:Ut(t),zl(),e!==null&&j(ga);break;case 24:Sn(ut)}}function Vr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,d=n.inst;a=i(),d.destroy=a}n=n.next}while(n!==r)}}catch(T){Ze(t,t.return,T)}}function qn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var d=a.inst,T=d.destroy;if(T!==void 0){d.destroy=void 0,r=t;var M=n,Q=T;try{Q()}catch(oe){Ze(r,M,oe)}}}a=a.next}while(a!==i)}}catch(oe){Ze(t,t.return,oe)}}function sf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Zu(t,n)}catch(a){Ze(e,e.return,a)}}}function lf(e,t,n){n.props=Sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ze(e,t,a)}}function Hr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Ze(e,t,r)}}function fn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Ze(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ze(e,t,r)}else n.current=null}function of(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Ze(e,e.return,r)}}function mo(e,t,n){try{var a=e.stateNode;Eg(a,e.type,n,t),a[Nt]=t}catch(r){Ze(e,e.return,r)}}function cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}function Wi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}function uf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);_t(t,a,n),t[xt]=e,t[Nt]=n}catch(i){Ze(e,e.return,i)}}var Rn=!1,ht=!1,vo=!1,df=typeof WeakSet=="function"?WeakSet:Set,vt=null;function tg(e,t){if(e=e.containerInfo,Fo=vs,e=Eu(e),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var d=0,T=-1,M=-1,Q=0,oe=0,fe=e,ee=null;t:for(;;){for(var ne;fe!==n||r!==0&&fe.nodeType!==3||(T=d+r),fe!==i||a!==0&&fe.nodeType!==3||(M=d+a),fe.nodeType===3&&(d+=fe.nodeValue.length),(ne=fe.firstChild)!==null;)ee=fe,fe=ne;for(;;){if(fe===e)break t;if(ee===n&&++Q===r&&(T=d),ee===i&&++oe===a&&(M=d),(ne=fe.nextSibling)!==null)break;fe=ee,ee=fe.parentNode}fe=ne}n=T===-1||M===-1?null:{start:T,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bo={focusedElem:e,selectionRange:n},vs=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var Se=Sa(n.type,r);e=a.getSnapshotBeforeUpdate(Se,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){Ze(n,n.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ho(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ho(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function ff(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),a&4&&Vr(5,n);break;case 1:if(Nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ze(n,n.return,d)}else{var r=Sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ze(n,n.return,d)}}a&64&&sf(n),a&512&&Hr(n,n.return);break;case 3:if(Nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Zu(e,t)}catch(d){Ze(n,n.return,d)}}break;case 27:t===null&&a&4&&uf(n);case 26:case 5:Nn(e,n),t===null&&a&4&&of(n),a&512&&Hr(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),a&4&&mf(e,n);break;case 13:Nn(e,n),a&4&&gf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ug.bind(null,n),Ig(e,n))));break;case 22:if(a=n.memoizedState!==null||Rn,!a){t=t!==null&&t.memoizedState!==null||ht,r=Rn;var i=ht;Rn=a,(ht=t)&&!i?Cn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Rn=r,ht=i}break;case 30:break;default:Nn(e,n)}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,It=!1;function Tn(e,t,n){for(n=n.child;n!==null;)pf(e,t,n),n=n.sibling}function pf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Je,n)}catch{}switch(n.tag){case 26:ht||fn(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ht||fn(n,t);var a=at,r=It;Kn(n.type)&&(at=n.stateNode,It=!1),Tn(e,t,n),Kr(n.stateNode),at=a,It=r;break;case 5:ht||fn(n,t);case 6:if(a=at,r=It,at=null,Tn(e,t,n),at=a,It=r,at!==null)if(It)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(i){Ze(n,t,i)}else try{at.removeChild(n.stateNode)}catch(i){Ze(n,t,i)}break;case 18:at!==null&&(It?(e=at,sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ur(e)):sh(at,n.stateNode));break;case 4:a=at,r=It,at=n.stateNode.containerInfo,It=!0,Tn(e,t,n),at=a,It=r;break;case 0:case 11:case 14:case 15:qn(2,n,t),ht||qn(4,n,t),Tn(e,t,n);break;case 1:ht||(fn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&lf(n,t,a)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:ht=(a=ht)||n.memoizedState!==null,Tn(e,t,n),ht=a;break;default:Tn(e,t,n)}}function mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ur(e)}catch(n){Ze(t,t.return,n)}}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ur(e)}catch(n){Ze(t,t.return,n)}}function ng(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new df),t;default:throw Error(c(435,e.tag))}}function Ki(e,t){var n=ng(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=dg.bind(null,e,a);a.then(r,r)}})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,d=t,T=d;e:for(;T!==null;){switch(T.tag){case 27:if(Kn(T.type)){at=T.stateNode,It=!1;break e}break;case 5:at=T.stateNode,It=!1;break e;case 3:case 4:at=T.stateNode.containerInfo,It=!0;break e}T=T.return}if(at===null)throw Error(c(160));pf(i,d,r),at=null,It=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}var rn=null;function yf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Ot(e),a&4&&(qn(3,e,e.return),Vr(3,e),qn(5,e,e.return));break;case 1:Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),a&64&&Rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=rn;if(Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[gr]||i[xt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),_t(i,a,n),i[xt]=e,yt(i),a=i;break e;case"link":var d=yh("link","href",r).get(a+(n.href||""));if(d){for(var T=0;T<d.length;T++)if(i=d[T],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(T,1);break t}}i=r.createElement(a),_t(i,a,n),r.head.appendChild(i);break;case"meta":if(d=yh("meta","content",r).get(a+(n.content||""))){for(T=0;T<d.length;T++)if(i=d[T],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(T,1);break t}}i=r.createElement(a),_t(i,a,n),r.head.appendChild(i);break;default:throw Error(c(468,a))}i[xt]=e,yt(i),a=i}e.stateNode=a}else vh(r,e.type,e.stateNode);else e.stateNode=gh(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?vh(r,e.type,e.stateNode):gh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&mo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),n!==null&&a&4&&mo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),e.flags&32){r=e.stateNode;try{ja(r,"")}catch(Se){Ze(e,e.return,Se)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,mo(e,r,n!==null?n.memoizedProps:r)),a&1024&&(vo=!0);break;case 6:if(Dt(t,e),Ot(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Se){Ze(e,e.return,Se)}}break;case 3:if(ps=null,r=rn,rn=fs(t.containerInfo),Dt(t,e),rn=r,Ot(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(Se){Ze(e,e.return,Se)}vo&&(vo=!1,vf(e));break;case 4:a=rn,rn=fs(e.stateNode.containerInfo),Dt(t,e),Ot(e),rn=a;break;case 12:Dt(t,e),Ot(e);break;case 31:Dt(t,e),Ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 13:Dt(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(es=xe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 22:r=e.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,Q=Rn,oe=ht;if(Rn=Q||r,ht=oe||M,Dt(t,e),ht=oe,Rn=Q,Ot(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||M||Rn||ht||Ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){M=n=t;try{if(i=M.stateNode,r)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{T=M.stateNode;var fe=M.memoizedProps.style,ee=fe!=null&&fe.hasOwnProperty("display")?fe.display:null;T.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Se){Ze(M,M.return,Se)}}}else if(t.tag===6){if(n===null){M=t;try{M.stateNode.nodeValue=r?"":M.memoizedProps}catch(Se){Ze(M,M.return,Se)}}}else if(t.tag===18){if(n===null){M=t;try{var ne=M.stateNode;r?lh(ne,!0):lh(M.stateNode,!1)}catch(Se){Ze(M,M.return,Se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ki(e,n))));break;case 19:Dt(t,e),Ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 30:break;case 21:break;default:Dt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(cf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,i=go(e);Wi(e,i,r);break;case 5:var d=n.stateNode;n.flags&32&&(ja(d,""),n.flags&=-33);var T=go(e);Wi(e,T,d);break;case 3:case 4:var M=n.stateNode.containerInfo,Q=go(e);yo(e,Q,M);break;default:throw Error(c(161))}}catch(oe){Ze(e,e.return,oe)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ff(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qn(4,t,t.return),Ea(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lf(t,t.return,n),Ea(t);break;case 27:Kr(t.stateNode);case 26:case 5:fn(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:Cn(r,i,n),Vr(4,i);break;case 1:if(Cn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Q){Ze(a,a.return,Q)}if(a=i,r=a.updateQueue,r!==null){var T=a.stateNode;try{var M=r.shared.hiddenCallbacks;if(M!==null)for(r.shared.hiddenCallbacks=null,r=0;r<M.length;r++)Xu(M[r],T)}catch(Q){Ze(a,a.return,Q)}}n&&d&64&&sf(i),Hr(i,i.return);break;case 27:uf(i);case 26:case 5:Cn(r,i,n),n&&a===null&&d&4&&of(i),Hr(i,i.return);break;case 12:Cn(r,i,n);break;case 31:Cn(r,i,n),n&&d&4&&mf(r,i);break;case 13:Cn(r,i,n),n&&d&4&&gf(r,i);break;case 22:i.memoizedState===null&&Cn(r,i,n),Hr(i,i.return);break;case 30:break;default:Cn(r,i,n)}t=t.sibling}}function bo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cr(n))}function xo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e))}function sn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bf(e,t,n,a),t=t.sibling}function bf(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,n,a),r&2048&&Vr(9,t);break;case 1:sn(e,t,n,a);break;case 3:sn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e)));break;case 12:if(r&2048){sn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,T=i.onPostCommit;typeof T=="function"&&T(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){Ze(t,t.return,M)}}else sn(e,t,n,a);break;case 31:sn(e,t,n,a);break;case 13:sn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?sn(e,t,n,a):Gr(e,t):i._visibility&2?sn(e,t,n,a):(i._visibility|=2,Ja(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&bo(d,t);break;case 24:sn(e,t,n,a),r&2048&&xo(t.alternate,t);break;default:sn(e,t,n,a)}}function Ja(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,T=n,M=a,Q=d.flags;switch(d.tag){case 0:case 11:case 15:Ja(i,d,T,M,r),Vr(8,d);break;case 23:break;case 22:var oe=d.stateNode;d.memoizedState!==null?oe._visibility&2?Ja(i,d,T,M,r):Gr(i,d):(oe._visibility|=2,Ja(i,d,T,M,r)),r&&Q&2048&&bo(d.alternate,d);break;case 24:Ja(i,d,T,M,r),r&&Q&2048&&xo(d.alternate,d);break;default:Ja(i,d,T,M,r)}t=t.sibling}}function Gr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Gr(n,a),r&2048&&bo(a.alternate,a);break;case 24:Gr(n,a),r&2048&&xo(a.alternate,a);break;default:Gr(n,a)}t=t.sibling}}var qr=8192;function er(e,t,n){if(e.subtreeFlags&qr)for(e=e.child;e!==null;)xf(e,t,n),e=e.sibling}function xf(e,t,n){switch(e.tag){case 26:er(e,t,n),e.flags&qr&&e.memoizedState!==null&&Vg(n,rn,e.memoizedState,e.memoizedProps);break;case 5:er(e,t,n);break;case 3:case 4:var a=rn;rn=fs(e.stateNode.containerInfo),er(e,t,n),rn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=qr,qr=16777216,er(e,t,n),qr=a):er(e,t,n));break;default:er(e,t,n)}}function Sf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,Af(a,e)}Sf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 0:case 11:case 15:Yr(e),e.flags&2048&&qn(9,e,e.return);break;case 3:Yr(e);break;case 12:Yr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Yr(e);break;default:Yr(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,Af(a,e)}Sf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),Ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function Af(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Cr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var r=a.sibling,i=a.return;if(hf(a),a===n){vt=null;break e}if(r!==null){r.return=i,vt=r;break e}vt=i}}}var ag={getCacheForType:function(e){var t=Et(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Et(ut).controller.signal}},rg=typeof WeakMap=="function"?WeakMap:Map,Ye=0,et=null,Me=null,Be=0,Xe=0,Ft=null,Yn=!1,tr=!1,So=!1,In=0,st=0,$n=0,Aa=0,Eo=0,Bt=0,nr=0,$r=null,jt=null,Ao=!1,es=0,_f=0,ts=1/0,ns=null,Xn=null,pt=0,Zn=null,ar=null,Dn=0,_o=0,wo=null,wf=null,Xr=0,Ro=null;function Pt(){return(Ye&2)!==0&&Be!==0?Be&-Be:V.T!==null?Oo():Bc()}function Rf(){if(Bt===0)if((Be&536870912)===0||He){var e=sa;sa<<=1,(sa&3932160)===0&&(sa=262144),Bt=e}else Bt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Bt}function kt(e,t,n){(e===et&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Qn(e,Be,Bt,!1)),mr(e,n),((Ye&2)===0||e!==et)&&(e===et&&((Ye&2)===0&&(Aa|=n),st===4&&Qn(e,Be,Bt,!1)),hn(e))}function Tf(e,t,n){if((Ye&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||pr(e,t),r=a?lg(e,t):No(e,t,!0),i=a;do{if(r===0){tr&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!ig(n)){r=No(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var T=e;r=$r;var M=T.current.memoizedState.isDehydrated;if(M&&(rr(T,d).flags|=256),d=No(T,d,!1),d!==2){if(So&&!M){T.errorRecoveryDisabledLanes|=i,Aa|=i,r=4;break e}i=jt,jt=r,i!==null&&(jt===null?jt=i:jt.push.apply(jt,i))}r=d}if(i=!1,r!==2)continue}}if(r===1){rr(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Qn(a,t,Bt,!Yn);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=es+300-xe(),10<r)){if(Qn(a,t,Bt,!Yn),fi(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=rh(Nf.bind(null,a,n,jt,ns,Ao,t,Bt,Aa,nr,Yn,i,"Throttled",-0,0),r);break e}Nf(a,n,jt,ns,Ao,t,Bt,Aa,nr,Yn,i,null,-0,0)}}break}while(!0);hn(e)}function Nf(e,t,n,a,r,i,d,T,M,Q,oe,fe,ee,ne){if(e.timeoutHandle=-1,fe=t.subtreeFlags,fe&8192||(fe&16785408)===16785408){fe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},xf(t,i,fe);var Se=(i&62914560)===i?es-xe():(i&4194048)===i?_f-xe():0;if(Se=Hg(fe,Se),Se!==null){Dn=i,e.cancelPendingCommit=Se(zf.bind(null,e,t,i,n,a,r,d,T,M,oe,fe,null,ee,ne)),Qn(e,i,d,!Q);return}}zf(e,t,i,n,a,r,d,T,M)}function ig(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!Lt(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t&=~Eo,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-rt(r),d=1<<i;a[i]=-1,r&=~d}n!==0&&Mc(e,n,t)}function as(){return(Ye&6)===0?(Zr(0),!1):!0}function To(){if(Me!==null){if(Xe===0)var e=Me.return;else e=Me,xn=pa=null,Vl(e),Xa=null,Dr=0,e=Me;for(;e!==null;)rf(e.alternate,e),e=e.return;Me=null}}function rr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,wg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,To(),et=e,Me=n=vn(e.current,null),Be=t,Xe=0,Ft=null,Yn=!1,tr=pr(e,t),So=!1,nr=Bt=Eo=Aa=$n=st=0,jt=$r=null,Ao=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-rt(a),i=1<<r;t|=e[r],a&=~i}return In=t,_i(),n}function Cf(e,t){je=null,V.H=Fr,t===$a||t===Oi?(t=Gu(),Xe=3):t===Il?(t=Gu(),Xe=4):Xe=t===ro?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ft=t,Me===null&&(st=1,Yi(e,Xt(t,e.current)))}function If(){var e=Mt.current;return e===null?!0:(Be&4194048)===Be?Kt===null:(Be&62914560)===Be||(Be&536870912)!==0?e===Kt:!1}function Df(){var e=V.H;return V.H=Fr,e===null?Fr:e}function Of(){var e=V.A;return V.A=ag,e}function rs(){st=4,Yn||(Be&4194048)!==Be&&Mt.current!==null||(tr=!0),($n&134217727)===0&&(Aa&134217727)===0||et===null||Qn(et,Be,Bt,!1)}function No(e,t,n){var a=Ye;Ye|=2;var r=Df(),i=Of();(et!==e||Be!==t)&&(ns=null,rr(e,t)),t=!1;var d=st;e:do try{if(Xe!==0&&Me!==null){var T=Me,M=Ft;switch(Xe){case 8:To(),d=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var Q=Xe;if(Xe=0,Ft=null,ir(e,T,M,Q),n&&tr){d=0;break e}break;default:Q=Xe,Xe=0,Ft=null,ir(e,T,M,Q)}}sg(),d=st;break}catch(oe){Cf(e,oe)}while(!0);return t&&e.shellSuspendCounter++,xn=pa=null,Ye=a,V.H=r,V.A=i,Me===null&&(et=null,Be=0,_i()),d}function sg(){for(;Me!==null;)jf(Me)}function lg(e,t){var n=Ye;Ye|=2;var a=Df(),r=Of();et!==e||Be!==t?(ns=null,ts=xe()+500,rr(e,t)):tr=pr(e,t);e:do try{if(Xe!==0&&Me!==null){t=Me;var i=Ft;t:switch(Xe){case 1:Xe=0,Ft=null,ir(e,t,i,1);break;case 2:case 9:if(Vu(i)){Xe=0,Ft=null,kf(t);break}t=function(){Xe!==2&&Xe!==9||et!==e||(Xe=7),hn(e)},i.then(t,t);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:Vu(i)?(Xe=0,Ft=null,kf(t)):(Xe=0,Ft=null,ir(e,t,i,7));break;case 5:var d=null;switch(Me.tag){case 26:d=Me.memoizedState;case 5:case 27:var T=Me;if(d?bh(d):T.stateNode.complete){Xe=0,Ft=null;var M=T.sibling;if(M!==null)Me=M;else{var Q=T.return;Q!==null?(Me=Q,is(Q)):Me=null}break t}}Xe=0,Ft=null,ir(e,t,i,5);break;case 6:Xe=0,Ft=null,ir(e,t,i,6);break;case 8:To(),st=6;break e;default:throw Error(c(462))}}og();break}catch(oe){Cf(e,oe)}while(!0);return xn=pa=null,V.H=a,V.A=r,Ye=n,Me!==null?0:(et=null,Be=0,_i(),st)}function og(){for(;Me!==null&&!K();)jf(Me)}function jf(e){var t=nf(e.alternate,e,In);e.memoizedProps=e.pendingProps,t===null?is(e):Me=t}function kf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qd(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Qd(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:Vl(t);default:rf(n,t),t=Me=Du(t,In),t=nf(n,t,In)}e.memoizedProps=e.pendingProps,t===null?is(e):Me=t}function ir(e,t,n,a){xn=pa=null,Vl(t),Xa=null,Dr=0;var r=t.return;try{if(Qm(e,r,t,n,Be)){st=1,Yi(e,Xt(n,e.current)),Me=null;return}}catch(i){if(r!==null)throw Me=r,i;st=1,Yi(e,Xt(n,e.current)),Me=null;return}t.flags&32768?(He||a===1?e=!0:tr||(Be&536870912)!==0?e=!1:(Yn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Lf(t,e)):is(t)}function is(e){var t=e;do{if((t.flags&32768)!==0){Lf(t,Yn);return}e=t.return;var n=Jm(t.alternate,t,In);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);st===0&&(st=5)}function Lf(e,t){do{var n=eg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);st=6,Me=null}function zf(e,t,n,a,r,i,d,T,M){e.cancelPendingCommit=null;do ss();while(pt!==0);if((Ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=ml,Pp(e,n,i,d,T,M),e===et&&(Me=et=null,Be=0),ar=t,Zn=e,Dn=n,_o=i,wo=r,wf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fg(Le,function(){return Pf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null,r=P.p,P.p=2,d=Ye,Ye|=4;try{tg(e,t,n)}finally{Ye=d,P.p=r,V.T=a}}pt=1,Mf(),Uf(),Ff()}}function Mf(){if(pt===1){pt=0;var e=Zn,t=ar,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var a=P.p;P.p=2;var r=Ye;Ye|=4;try{yf(t,e);var i=Bo,d=Eu(e.containerInfo),T=i.focusedElem,M=i.selectionRange;if(d!==T&&T&&T.ownerDocument&&Su(T.ownerDocument.documentElement,T)){if(M!==null&&ul(T)){var Q=M.start,oe=M.end;if(oe===void 0&&(oe=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(oe,T.value.length);else{var fe=T.ownerDocument||document,ee=fe&&fe.defaultView||window;if(ee.getSelection){var ne=ee.getSelection(),Se=T.textContent.length,Ce=Math.min(M.start,Se),Ke=M.end===void 0?Ce:Math.min(M.end,Se);!ne.extend&&Ce>Ke&&(d=Ke,Ke=Ce,Ce=d);var Y=xu(T,Ce),B=xu(T,Ke);if(Y&&B&&(ne.rangeCount!==1||ne.anchorNode!==Y.node||ne.anchorOffset!==Y.offset||ne.focusNode!==B.node||ne.focusOffset!==B.offset)){var Z=fe.createRange();Z.setStart(Y.node,Y.offset),ne.removeAllRanges(),Ce>Ke?(ne.addRange(Z),ne.extend(B.node,B.offset)):(Z.setEnd(B.node,B.offset),ne.addRange(Z))}}}}for(fe=[],ne=T;ne=ne.parentNode;)ne.nodeType===1&&fe.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<fe.length;T++){var de=fe[T];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}vs=!!Fo,Bo=Fo=null}finally{Ye=r,P.p=a,V.T=n}}e.current=t,pt=2}}function Uf(){if(pt===2){pt=0;var e=Zn,t=ar,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var a=P.p;P.p=2;var r=Ye;Ye|=4;try{ff(e,t.alternate,t)}finally{Ye=r,P.p=a,V.T=n}}pt=3}}function Ff(){if(pt===4||pt===3){pt=0,ye();var e=Zn,t=ar,n=Dn,a=wf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,ar=Zn=null,Bf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Xn=null),qs(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=V.T,r=P.p,P.p=2,V.T=null;try{for(var i=e.onRecoverableError,d=0;d<a.length;d++){var T=a[d];i(T.value,{componentStack:T.stack})}}finally{V.T=t,P.p=r}}(Dn&3)!==0&&ss(),hn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ro?Xr++:(Xr=0,Ro=e):Xr=0,Zr(0)}}function Bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cr(t)))}function ss(){return Mf(),Uf(),Ff(),Pf()}function Pf(){if(pt!==5)return!1;var e=Zn,t=_o;_o=0;var n=qs(Dn),a=V.T,r=P.p;try{P.p=32>n?32:n,V.T=null,n=wo,wo=null;var i=Zn,d=Dn;if(pt=0,ar=Zn=null,Dn=0,(Ye&6)!==0)throw Error(c(331));var T=Ye;if(Ye|=4,Ef(i.current),bf(i,i.current,d,n),Ye=T,Zr(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Je,i)}catch{}return!0}finally{P.p=r,V.T=a,Bf(e,t)}}function Vf(e,t,n){t=Xt(n,t),t=ao(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(mr(e,2),hn(e))}function Ze(e,t,n){if(e.tag===3)Vf(e,e,n);else for(;t!==null;){if(t.tag===3){Vf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Xt(n,e),n=Vd(2),a=Vn(t,n,2),a!==null&&(Hd(n,a,t,e),mr(a,2),hn(a));break}}t=t.return}}function Co(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new rg;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(So=!0,r.add(n),e=cg.bind(null,e,t,n),t.then(e,e))}function cg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,et===e&&(Be&n)===n&&(st===4||st===3&&(Be&62914560)===Be&&300>xe()-es?(Ye&2)===0&&rr(e,0):Eo|=n,nr===Be&&(nr=0)),hn(e)}function Hf(e,t){t===0&&(t=zc()),e=da(e,t),e!==null&&(mr(e,t),hn(e))}function ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hf(e,n)}function dg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Hf(e,n)}function fg(e,t){return he(e,t)}var ls=null,sr=null,Io=!1,os=!1,Do=!1,Wn=0;function hn(e){e!==sr&&e.next===null&&(sr===null?ls=sr=e:sr=sr.next=e),os=!0,Io||(Io=!0,pg())}function Zr(e,t){if(!Do&&os){Do=!0;do for(var n=!1,a=ls;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var d=a.suspendedLanes,T=a.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=r&~(d&~T),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,$f(a,i))}else i=Be,i=fi(a,a===et?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||pr(a,i)||(n=!0,$f(a,i));a=a.next}while(n);Do=!1}}function hg(){Gf()}function Gf(){os=Io=!1;var e=0;Wn!==0&&_g()&&(e=Wn);for(var t=xe(),n=null,a=ls;a!==null;){var r=a.next,i=qf(a,t);i===0?(a.next=null,n===null?ls=r:n.next=r,r===null&&(sr=n)):(n=a,(e!==0||(i&3)!==0)&&(os=!0)),a=r}pt!==0&&pt!==5||Zr(e),Wn!==0&&(Wn=0)}function qf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-rt(i),T=1<<d,M=r[d];M===-1?((T&n)===0||(T&a)!==0)&&(r[d]=Bp(T,t)):M<=t&&(e.expiredLanes|=T),i&=~T}if(t=et,n=Be,n=fi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&pe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&pe(a),qs(n)){case 2:case 8:n=$e;break;case 32:n=Le;break;case 268435456:n=jn;break;default:n=Le}return a=Yf.bind(null,e),n=he(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&pe(a),e.callbackPriority=2,e.callbackNode=null,2}function Yf(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ss()&&e.callbackNode!==n)return null;var a=Be;return a=fi(e,e===et?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Tf(e,a,t),qf(e,xe()),e.callbackNode!=null&&e.callbackNode===n?Yf.bind(null,e):null)}function $f(e,t){if(ss())return null;Tf(e,t,!0)}function pg(){Rg(function(){(Ye&6)!==0?he(Re,hg):Gf()})}function Oo(){if(Wn===0){var e=qa;e===0&&(e=Ra,Ra<<=1,(Ra&261888)===0&&(Ra=256)),Wn=e}return Wn}function Xf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gi(""+e)}function Zf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mg(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=Xf((r[Nt]||null).action),d=a.submitter;d&&(t=(t=d[Nt]||null)?Xf(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var T=new xi("action","action",null,a,r);e.push({event:T,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var M=d?Zf(r,d):new FormData(r);Wl(n,{pending:!0,data:M,method:r.method,action:i},null,M)}}else typeof i=="function"&&(T.preventDefault(),M=d?Zf(r,d):new FormData(r),Wl(n,{pending:!0,data:M,method:r.method,action:i},i,M))},currentTarget:r}]})}}for(var jo=0;jo<pl.length;jo++){var ko=pl[jo],gg=ko.toLowerCase(),yg=ko[0].toUpperCase()+ko.slice(1);an(gg,"on"+yg)}an(wu,"onAnimationEnd"),an(Ru,"onAnimationIteration"),an(Tu,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(jm,"onTransitionRun"),an(km,"onTransitionStart"),an(Lm,"onTransitionCancel"),an(Nu,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),la("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),la("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),la("onBeforeInput",["compositionend","keypress","textInput","paste"]),la("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function Qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var d=a.length-1;0<=d;d--){var T=a[d],M=T.instance,Q=T.currentTarget;if(T=T.listener,M!==i&&r.isPropagationStopped())break e;i=T,r.currentTarget=Q;try{i(r)}catch(oe){Ai(oe)}r.currentTarget=null,i=M}else for(d=0;d<a.length;d++){if(T=a[d],M=T.instance,Q=T.currentTarget,T=T.listener,M!==i&&r.isPropagationStopped())break e;i=T,r.currentTarget=Q;try{i(r)}catch(oe){Ai(oe)}r.currentTarget=null,i=M}}}}function Ue(e,t){var n=t[Ys];n===void 0&&(n=t[Ys]=new Set);var a=e+"__bubble";n.has(a)||(Wf(t,e,2,!1),n.add(a))}function Lo(e,t,n){var a=0;t&&(a|=4),Wf(n,e,a,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[cs]){e[cs]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(vg.has(n)||Lo(n,!1,e),Lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Lo("selectionchange",!1,t))}}function Wf(e,t,n,a){switch(Rh(t)){case 2:var r=Yg;break;case 8:r=$g;break;default:r=Wo}n=r.bind(null,t,n,e),r=void 0,!tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Mo(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var T=a.stateNode.containerInfo;if(T===r)break;if(d===4)for(d=a.return;d!==null;){var M=d.tag;if((M===3||M===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;T!==null;){if(d=Na(T),d===null)return;if(M=d.tag,M===5||M===6||M===26||M===27){a=i=d;continue e}T=T.parentNode}}a=a.return}tu(function(){var Q=i,oe=Js(n),fe=[];e:{var ee=Cu.get(e);if(ee!==void 0){var ne=xi,Se=e;switch(e){case"keypress":if(vi(n)===0)break e;case"keydown":case"keyup":ne=dm;break;case"focusin":Se="focus",ne=il;break;case"focusout":Se="blur",ne=il;break;case"beforeblur":case"afterblur":ne=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=pm;break;case wu:case Ru:case Tu:ne=nm;break;case Nu:ne=gm;break;case"scroll":case"scrollend":ne=Wp;break;case"wheel":ne=vm;break;case"copy":case"cut":case"paste":ne=rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=su;break;case"toggle":case"beforetoggle":ne=xm}var Ce=(t&4)!==0,Ke=!Ce&&(e==="scroll"||e==="scrollend"),Y=Ce?ee!==null?ee+"Capture":null:ee;Ce=[];for(var B=Q,Z;B!==null;){var de=B;if(Z=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Z===null||Y===null||(de=vr(B,Y),de!=null&&Ce.push(Wr(B,de,Z))),Ke)break;B=B.return}0<Ce.length&&(ee=new ne(ee,Se,null,n,oe),fe.push({event:ee,listeners:Ce}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",ee&&n!==Ks&&(Se=n.relatedTarget||n.fromElement)&&(Na(Se)||Se[Ta]))break e;if((ne||ee)&&(ee=oe.window===oe?oe:(ee=oe.ownerDocument)?ee.defaultView||ee.parentWindow:window,ne?(Se=n.relatedTarget||n.toElement,ne=Q,Se=Se?Na(Se):null,Se!==null&&(Ke=f(Se),Ce=Se.tag,Se!==Ke||Ce!==5&&Ce!==27&&Ce!==6)&&(Se=null)):(ne=null,Se=Q),ne!==Se)){if(Ce=ru,de="onMouseLeave",Y="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=su,de="onPointerLeave",Y="onPointerEnter",B="pointer"),Ke=ne==null?ee:yr(ne),Z=Se==null?ee:yr(Se),ee=new Ce(de,B+"leave",ne,n,oe),ee.target=Ke,ee.relatedTarget=Z,de=null,Na(oe)===Q&&(Ce=new Ce(Y,B+"enter",Se,n,oe),Ce.target=Z,Ce.relatedTarget=Ke,de=Ce),Ke=de,ne&&Se)t:{for(Ce=bg,Y=ne,B=Se,Z=0,de=Y;de;de=Ce(de))Z++;de=0;for(var Te=B;Te;Te=Ce(Te))de++;for(;0<Z-de;)Y=Ce(Y),Z--;for(;0<de-Z;)B=Ce(B),de--;for(;Z--;){if(Y===B||B!==null&&Y===B.alternate){Ce=Y;break t}Y=Ce(Y),B=Ce(B)}Ce=null}else Ce=null;ne!==null&&Kf(fe,ee,ne,Ce,!1),Se!==null&&Ke!==null&&Kf(fe,Ke,Se,Ce,!0)}}e:{if(ee=Q?yr(Q):window,ne=ee.nodeName&&ee.nodeName.toLowerCase(),ne==="select"||ne==="input"&&ee.type==="file")var Ge=pu;else if(fu(ee))if(mu)Ge=Im;else{Ge=Nm;var Ae=Tm}else ne=ee.nodeName,!ne||ne.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?Q&&Ws(Q.elementType)&&(Ge=pu):Ge=Cm;if(Ge&&(Ge=Ge(e,Q))){hu(fe,Ge,n,oe);break e}Ae&&Ae(e,ee,Q),e==="focusout"&&Q&&ee.type==="number"&&Q.memoizedProps.value!=null&&Qs(ee,"number",ee.value)}switch(Ae=Q?yr(Q):window,e){case"focusin":(fu(Ae)||Ae.contentEditable==="true")&&(Ma=Ae,dl=Q,Rr=null);break;case"focusout":Rr=dl=Ma=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Au(fe,n,oe);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":Au(fe,n,oe)}var ke;if(ll)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else za?uu(e,n)&&(Pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Pe="onCompositionStart");Pe&&(lu&&n.locale!=="ko"&&(za||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&za&&(ke=nu()):(Ln=oe,nl="value"in Ln?Ln.value:Ln.textContent,za=!0)),Ae=us(Q,Pe),0<Ae.length&&(Pe=new iu(Pe,e,null,n,oe),fe.push({event:Pe,listeners:Ae}),ke?Pe.data=ke:(ke=du(n),ke!==null&&(Pe.data=ke)))),(ke=Em?Am(e,n):_m(e,n))&&(Pe=us(Q,"onBeforeInput"),0<Pe.length&&(Ae=new iu("onBeforeInput","beforeinput",null,n,oe),fe.push({event:Ae,listeners:Pe}),Ae.data=ke)),mg(fe,e,Q,n,oe)}Qf(fe,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=vr(e,n),r!=null&&a.unshift(Wr(e,r,i)),r=vr(e,t),r!=null&&a.push(Wr(e,r,i))),e.tag===3)return a;e=e.return}return[]}function bg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kf(e,t,n,a,r){for(var i=t._reactName,d=[];n!==null&&n!==a;){var T=n,M=T.alternate,Q=T.stateNode;if(T=T.tag,M!==null&&M===a)break;T!==5&&T!==26&&T!==27||Q===null||(M=Q,r?(Q=vr(n,i),Q!=null&&d.unshift(Wr(n,Q,M))):r||(Q=vr(n,i),Q!=null&&d.push(Wr(n,Q,M)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var xg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function Jf(e){return(typeof e=="string"?e:""+e).replace(xg,`
`).replace(Sg,"")}function eh(e,t){return t=Jf(t),Jf(e)===t}function We(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ja(e,""+a);break;case"className":pi(e,"class",a);break;case"tabIndex":pi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(e,n,a);break;case"style":Jc(e,a,i);break;case"data":if(t!=="object"){pi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=gi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&We(e,t,"name",r.name,r,null),We(e,t,"formEncType",r.formEncType,r,null),We(e,t,"formMethod",r.formMethod,r,null),We(e,t,"formTarget",r.formTarget,r,null)):(We(e,t,"encType",r.encType,r,null),We(e,t,"method",r.method,r,null),We(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=gi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=gi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),hi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":hi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Zp.get(n)||n,hi(e,n,a))}}function Uo(e,t,n,a,r,i){switch(n){case"style":Jc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ja(e,a):(typeof a=="number"||typeof a=="bigint")&&ja(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[Nt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):hi(e,n,a)}}}function _t(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:We(e,t,i,d,n,null)}}r&&We(e,t,"srcSet",n.srcSet,n,null),a&&We(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var T=i=d=r=null,M=null,Q=null;for(a in n)if(n.hasOwnProperty(a)){var oe=n[a];if(oe!=null)switch(a){case"name":r=oe;break;case"type":d=oe;break;case"checked":M=oe;break;case"defaultChecked":Q=oe;break;case"value":i=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(c(137,t));break;default:We(e,t,a,oe,n,null)}}Zc(e,i,T,M,Q,d,r,!1);return;case"select":Ue("invalid",e),a=d=i=null;for(r in n)if(n.hasOwnProperty(r)&&(T=n[r],T!=null))switch(r){case"value":i=T;break;case"defaultValue":d=T;break;case"multiple":a=T;default:We(e,t,r,T,n,null)}t=i,n=d,e.multiple=!!a,t!=null?Oa(e,!!a,t,!1):n!=null&&Oa(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=r=a=null;for(d in n)if(n.hasOwnProperty(d)&&(T=n[d],T!=null))switch(d){case"value":a=T;break;case"defaultValue":r=T;break;case"children":i=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(91));break;default:We(e,t,d,T,n,null)}Wc(e,a,r,i);return;case"option":for(M in n)if(n.hasOwnProperty(M)&&(a=n[M],a!=null))switch(M){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:We(e,t,M,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Qr.length;a++)Ue(Qr[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in n)if(n.hasOwnProperty(Q)&&(a=n[Q],a!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:We(e,t,Q,a,n,null)}return;default:if(Ws(t)){for(oe in n)n.hasOwnProperty(oe)&&(a=n[oe],a!==void 0&&Uo(e,t,oe,a,n,void 0));return}}for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!=null&&We(e,t,T,a,n,null))}function Eg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,d=null,T=null,M=null,Q=null,oe=null;for(ne in n){var fe=n[ne];if(n.hasOwnProperty(ne)&&fe!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":M=fe;default:a.hasOwnProperty(ne)||We(e,t,ne,null,a,fe)}}for(var ee in a){var ne=a[ee];if(fe=n[ee],a.hasOwnProperty(ee)&&(ne!=null||fe!=null))switch(ee){case"type":i=ne;break;case"name":r=ne;break;case"checked":Q=ne;break;case"defaultChecked":oe=ne;break;case"value":d=ne;break;case"defaultValue":T=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(c(137,t));break;default:ne!==fe&&We(e,t,ee,ne,a,fe)}}Zs(e,d,T,M,Q,oe,i,r);return;case"select":ne=d=T=ee=null;for(i in n)if(M=n[i],n.hasOwnProperty(i)&&M!=null)switch(i){case"value":break;case"multiple":ne=M;default:a.hasOwnProperty(i)||We(e,t,i,null,a,M)}for(r in a)if(i=a[r],M=n[r],a.hasOwnProperty(r)&&(i!=null||M!=null))switch(r){case"value":ee=i;break;case"defaultValue":T=i;break;case"multiple":d=i;default:i!==M&&We(e,t,r,i,a,M)}t=T,n=d,a=ne,ee!=null?Oa(e,!!n,ee,!1):!!a!=!!n&&(t!=null?Oa(e,!!n,t,!0):Oa(e,!!n,n?[]:"",!1));return;case"textarea":ne=ee=null;for(T in n)if(r=n[T],n.hasOwnProperty(T)&&r!=null&&!a.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:We(e,t,T,null,a,r)}for(d in a)if(r=a[d],i=n[d],a.hasOwnProperty(d)&&(r!=null||i!=null))switch(d){case"value":ee=r;break;case"defaultValue":ne=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&We(e,t,d,r,a,i)}Qc(e,ee,ne);return;case"option":for(var Se in n)if(ee=n[Se],n.hasOwnProperty(Se)&&ee!=null&&!a.hasOwnProperty(Se))switch(Se){case"selected":e.selected=!1;break;default:We(e,t,Se,null,a,ee)}for(M in a)if(ee=a[M],ne=n[M],a.hasOwnProperty(M)&&ee!==ne&&(ee!=null||ne!=null))switch(M){case"selected":e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:We(e,t,M,ee,a,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in n)ee=n[Ce],n.hasOwnProperty(Ce)&&ee!=null&&!a.hasOwnProperty(Ce)&&We(e,t,Ce,null,a,ee);for(Q in a)if(ee=a[Q],ne=n[Q],a.hasOwnProperty(Q)&&ee!==ne&&(ee!=null||ne!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(c(137,t));break;default:We(e,t,Q,ee,a,ne)}return;default:if(Ws(t)){for(var Ke in n)ee=n[Ke],n.hasOwnProperty(Ke)&&ee!==void 0&&!a.hasOwnProperty(Ke)&&Uo(e,t,Ke,void 0,a,ee);for(oe in a)ee=a[oe],ne=n[oe],!a.hasOwnProperty(oe)||ee===ne||ee===void 0&&ne===void 0||Uo(e,t,oe,ee,a,ne);return}}for(var Y in n)ee=n[Y],n.hasOwnProperty(Y)&&ee!=null&&!a.hasOwnProperty(Y)&&We(e,t,Y,null,a,ee);for(fe in a)ee=a[fe],ne=n[fe],!a.hasOwnProperty(fe)||ee===ne||ee==null&&ne==null||We(e,t,fe,ee,a,ne)}function th(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ag(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,d=r.initiatorType,T=r.duration;if(i&&T&&th(d)){for(d=0,T=r.responseEnd,a+=1;a<n.length;a++){var M=n[a],Q=M.startTime;if(Q>T)break;var oe=M.transferSize,fe=M.initiatorType;oe&&th(fe)&&(M=M.responseEnd,d+=oe*(M<T?1:(T-Q)/(M-Q)))}if(--a,t+=8*(i+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fo=null,Bo=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function nh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ah(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vo=null;function _g(){var e=window.event;return e&&e.type==="popstate"?e===Vo?!1:(Vo=e,!0):(Vo=null,!1)}var rh=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(Tg)}:rh;function Tg(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function sh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),ur(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Kr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kr(n);for(var i=n.firstChild;i;){var d=i.nextSibling,T=i.nodeName;i[gr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=d}}else n==="body"&&Kr(e.ownerDocument.body);n=r}while(n);ur(t)}function lh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ho(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ho(n),$s(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ng(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[gr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Jt(e.nextSibling),e===null)break}return null}function Cg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jt(e.nextSibling),e===null))return null;return e}function oh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jt(e.nextSibling),e===null))return null;return e}function Go(e){return e.data==="$?"||e.data==="$~"}function qo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ig(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yo=null;function ch(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Jt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function uh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function dh(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$s(e)}var en=new Map,fh=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=P.d;P.d={f:Dg,r:Og,D:jg,C:kg,L:Lg,m:zg,X:Ug,S:Mg,M:Fg};function Dg(){var e=On.f(),t=as();return e||t}function Og(e){var t=Ca(e);t!==null&&t.tag===5&&t.type==="form"?Nd(t):On.r(e)}var lr=typeof document>"u"?null:document;function hh(e,t,n){var a=lr;if(a&&typeof t=="string"&&t){var r=Yt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),fh.has(r)||(fh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),_t(t,"link",e),yt(t),a.head.appendChild(t)))}}function jg(e){On.D(e),hh("dns-prefetch",e,null)}function kg(e,t){On.C(e,t),hh("preconnect",e,t)}function Lg(e,t,n){On.L(e,t,n);var a=lr;if(a&&e&&t){var r='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Yt(n.imageSizes)+'"]')):r+='[href="'+Yt(e)+'"]';var i=r;switch(t){case"style":i=or(e);break;case"script":i=cr(e)}en.has(i)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Jr(i))||t==="script"&&a.querySelector(ei(i))||(t=a.createElement("link"),_t(t,"link",e),yt(t),a.head.appendChild(t)))}}function zg(e,t){On.m(e,t);var n=lr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Yt(a)+'"][href="'+Yt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=cr(e)}if(!en.has(i)&&(e=E({rel:"modulepreload",href:e},t),en.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ei(i)))return}a=n.createElement("link"),_t(a,"link",e),yt(a),n.head.appendChild(a)}}}function Mg(e,t,n){On.S(e,t,n);var a=lr;if(a&&e){var r=Ia(a).hoistableStyles,i=or(e);t=t||"default";var d=r.get(i);if(!d){var T={loading:0,preload:null};if(d=a.querySelector(Jr(i)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(i))&&$o(e,n);var M=d=a.createElement("link");yt(M),_t(M,"link",e),M._p=new Promise(function(Q,oe){M.onload=Q,M.onerror=oe}),M.addEventListener("load",function(){T.loading|=1}),M.addEventListener("error",function(){T.loading|=2}),T.loading|=4,hs(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:T},r.set(i,d)}}}function Ug(e,t){On.X(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ei(r)),i||(e=E({src:e,async:!0},t),(t=en.get(r))&&Xo(e,t),i=n.createElement("script"),yt(i),_t(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function Fg(e,t){On.M(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ei(r)),i||(e=E({src:e,async:!0,type:"module"},t),(t=en.get(r))&&Xo(e,t),i=n.createElement("script"),yt(i),_t(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function ph(e,t,n,a){var r=(r=Ee.current)?fs(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=or(n.href),n=Ia(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=or(n.href);var i=Ia(r).hoistableStyles,d=i.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=r.querySelector(Jr(e)))&&!i._p&&(d.instance=i,d.state.loading=5),en.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,n),i||Bg(r,e,n,d.state))),t&&a===null)throw Error(c(528,""));return d}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cr(n),n=Ia(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function or(e){return'href="'+Yt(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function mh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Bg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),_t(t,"link",n),yt(t),e.head.appendChild(t))}function cr(e){return'[src="'+Yt(e)+'"]'}function ei(e){return"script[async]"+e}function gh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(a)return t.instance=a,yt(a),a;var r=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),yt(a),_t(a,"style",r),hs(a,n.precedence,e),t.instance=a;case"stylesheet":r=or(n.href);var i=e.querySelector(Jr(r));if(i)return t.state.loading|=4,t.instance=i,yt(i),i;a=mh(n),(r=en.get(r))&&$o(a,r),i=(e.ownerDocument||e).createElement("link"),yt(i);var d=i;return d._p=new Promise(function(T,M){d.onload=T,d.onerror=M}),_t(i,"link",a),t.state.loading|=4,hs(i,n.precedence,e),t.instance=i;case"script":return i=cr(n.src),(r=e.querySelector(ei(i)))?(t.instance=r,yt(r),r):(a=n,(r=en.get(i))&&(a=E({},n),Xo(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),yt(r),_t(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,hs(a,n.precedence,e));return t.instance}function hs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,d=0;d<a.length;d++){var T=a[d];if(T.dataset.precedence===t)i=T;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $o(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ps=null;function yh(e,t,n){if(ps===null){var a=new Map,r=ps=new Map;r.set(n,a)}else r=ps,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[gr]||i[xt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var T=a.get(d);T?T.push(i):a.set(d,[i])}}return a}function vh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Pg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=or(a.href),i=t.querySelector(Jr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ms.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,yt(i);return}i=t.ownerDocument||t,a=mh(a),(r=en.get(r))&&$o(a,r),i=i.createElement("link"),yt(i);var d=i;d._p=new Promise(function(T,M){d.onload=T,d.onerror=M}),_t(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ms.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Zo=0;function Hg(e,t){return e.stylesheets&&e.count===0&&ys(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&ys(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Zo===0&&(Zo=62500*Ag());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ys(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Zo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function ms(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ys(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gs=null;function ys(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gs=new Map,t.forEach(Gg,e),gs=null,ms.call(e))}function Gg(e,t){if(!(t.state.loading&4)){var n=gs.get(e);if(n)var a=n.get(null);else{n=new Map,gs.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var d=r[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}r=t.instance,d=r.getAttribute("data-precedence"),i=n.get(d)||a,i===a&&n.set(null,r),n.set(d,r),this.count++,a=ms.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ti={$$typeof:D,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function qg(e,t,n,a,r,i,d,T,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.hiddenUpdates=Hs(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function xh(e,t,n,a,r,i,d,T,M,Q,oe,fe){return e=new qg(e,t,n,d,M,Q,oe,fe,T),t=1,i===!0&&(t|=24),i=zt(3,null,null,t),e.current=i,i.stateNode=e,t=Tl(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Dl(i),e}function Sh(e){return e?(e=Ba,e):Ba}function Eh(e,t,n,a,r,i){r=Sh(r),a.context===null?a.context=r:a.pendingContext=r,a=Pn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Vn(e,a,t),n!==null&&(kt(n,e,t),jr(n,e,t))}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qo(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function _h(e){if(e.tag===13||e.tag===31){var t=da(e,67108864);t!==null&&kt(t,e,67108864),Qo(e,67108864)}}function wh(e){if(e.tag===13||e.tag===31){var t=Pt();t=Gs(t);var n=da(e,t);n!==null&&kt(n,e,t),Qo(e,t)}}var vs=!0;function Yg(e,t,n,a){var r=V.T;V.T=null;var i=P.p;try{P.p=2,Wo(e,t,n,a)}finally{P.p=i,V.T=r}}function $g(e,t,n,a){var r=V.T;V.T=null;var i=P.p;try{P.p=8,Wo(e,t,n,a)}finally{P.p=i,V.T=r}}function Wo(e,t,n,a){if(vs){var r=Ko(a);if(r===null)Mo(e,t,a,bs,n),Th(e,a);else if(Zg(r,e,t,n,a))a.stopPropagation();else if(Th(e,a),t&4&&-1<Xg.indexOf(e)){for(;r!==null;){var i=Ca(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Gt(i.pendingLanes);if(d!==0){var T=i;for(T.pendingLanes|=2,T.entangledLanes|=2;d;){var M=1<<31-rt(d);T.entanglements[1]|=M,d&=~M}hn(i),(Ye&6)===0&&(ts=xe()+500,Zr(0))}}break;case 31:case 13:T=da(i,2),T!==null&&kt(T,i,2),as(),Qo(i,2)}if(i=Ko(a),i===null&&Mo(e,t,a,bs,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else Mo(e,t,a,null,n)}}function Ko(e){return e=Js(e),Jo(e)}var bs=null;function Jo(e){if(bs=null,e=Na(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bs=e,null}function Rh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case Re:return 2;case $e:return 8;case Le:case Tt:return 32;case jn:return 268435456;default:return 32}default:return 32}}var ec=!1,Jn=null,ea=null,ta=null,ni=new Map,ai=new Map,na=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Th(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function ri(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ca(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Zg(e,t,n,a,r){switch(t){case"focusin":return Jn=ri(Jn,e,t,n,a,r),!0;case"dragenter":return ea=ri(ea,e,t,n,a,r),!0;case"mouseover":return ta=ri(ta,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return ni.set(i,ri(ni.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,ai.set(i,ri(ai.get(i)||null,e,t,n,a,r)),!0}return!1}function Nh(e){var t=Na(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Pc(e.priority,function(){wh(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Pc(e.priority,function(){wh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ko(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ks=a,n.target.dispatchEvent(a),Ks=null}else return t=Ca(n),t!==null&&_h(t),e.blockedOn=n,!1;t.shift()}return!0}function Ch(e,t,n){xs(e)&&n.delete(t)}function Qg(){ec=!1,Jn!==null&&xs(Jn)&&(Jn=null),ea!==null&&xs(ea)&&(ea=null),ta!==null&&xs(ta)&&(ta=null),ni.forEach(Ch),ai.forEach(Ch)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,ec||(ec=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Qg)))}var Es=null;function Ih(e){Es!==e&&(Es=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Es===e&&(Es=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Jo(a||n)===null)continue;break}var i=Ca(n);i!==null&&(e.splice(t,3),t-=3,Wl(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function ur(e){function t(M){return Ss(M,e)}Jn!==null&&Ss(Jn,e),ea!==null&&Ss(ea,e),ta!==null&&Ss(ta,e),ni.forEach(t),ai.forEach(t);for(var n=0;n<na.length;n++){var a=na[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)Nh(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],d=r[Nt]||null;if(typeof i=="function")d||Ih(n);else if(d){var T=null;if(i&&i.hasAttribute("formAction")){if(r=i,d=i[Nt]||null)T=d.formAction;else if(Jo(r)!==null)continue}else T=d.action;typeof T=="function"?n[a+1]=T:(n.splice(a,3),a-=3),Ih(n)}}}function Dh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function tc(e){this._internalRoot=e}As.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Pt();Eh(n,a,e,t,null,null)},As.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Eh(e.current,2,null,e,null,null),as(),t[Ta]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&Nh(e)}};var Oh=o.version;if(Oh!=="19.2.1")throw Error(c(527,Oh,"19.2.1"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Wg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{Je=_s.inject(Wg),gt=_s}catch{}}return si.createRoot=function(e,t){if(!p(e))throw Error(c(299));var n=!1,a="",r=Ud,i=Fd,d=Bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=xh(e,1,!1,null,null,n,a,null,r,i,d,Dh),e[Ta]=t.current,zo(e),new tc(t)},si.hydrateRoot=function(e,t,n){if(!p(e))throw Error(c(299));var a=!1,r="",i=Ud,d=Fd,T=Bd,M=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),t=xh(e,1,!0,t,n??null,a,r,M,i,d,T,Dh),t.context=Sh(null),n=t.current,a=Pt(),a=Gs(a),r=Pn(a),r.callback=null,Vn(n,r,a),n=a,t.current.lanes=n,mr(t,n),hn(t),e[Ta]=t.current,zo(e),new As(t)},si.version="19.2.1",si}var Vh;function o0(){if(Vh)return rc.exports;Vh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),rc.exports=l0(),rc.exports}var c0=o0();const u0=Tc(c0);var ge=(u=>(u.SETUP="ICISsetup",u.BUILDER="ICISbuilder",u.REVIEWER="ICISreviewer",u.SUPERVISOR="ICISsupervisor",u.REVISER="ICISreviser",u.FINALIZE="ICISfinalize",u))(ge||{}),Ie=(u=>(u.PENDING="pending",u.ACTIVE="active",u.COMPLETED="completed",u.ERROR="error",u.SKIPPED="skipped",u))(Ie||{}),dr=(u=>(u.SIMULATION="Simulation & Computational Modeling",u.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",u.SECONDARY_DATA="Secondary data analysis",u.EXPERIMENTAL="Laboratory & field experiments",u.SURVEY="Survey research",u))(dr||{}),ze=(u=>(u.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",u.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",u.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",u.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",u.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",u.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",u.STEP5_EXECUTION="Step 5: Experiment Execution",u.STEP6_VISUALIZATION="Step 6: Results Visualization",u.STEP7_ANALYSIS="Step 7: Results Analysis",u.STEP8_PAPER_WRITING="Step 8: Paper Writing",u.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",u))(ze||{});function d0(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const Hh={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:d0(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]},ap="/icis",f0={[ge.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText"},[ge.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer"},[ge.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search"},[ge.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck"},[ge.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3"},[ge.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send"}},rp={[ze.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[ze.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[ze.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[ze.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[ze.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[ze.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[ze.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[ze.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[ze.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[ze.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[ze.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};dr.SIMULATION+"",dr.ANALYTICAL+"",dr.SECONDARY_DATA+"",dr.EXPERIMENTAL+"",dr.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p0=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,l,c)=>c?c.toUpperCase():l.toLowerCase()),Gh=u=>{const o=p0(u);return o.charAt(0).toUpperCase()+o.slice(1)},ip=(...u)=>u.filter((o,l,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===l).join(" ").trim(),m0=u=>{for(const o in u)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=be.forwardRef(({color:u="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:p="",children:f,iconNode:m,...g},x)=>be.createElement("svg",{ref:x,...g0,width:o,height:o,stroke:u,strokeWidth:c?Number(l)*24/Number(o):l,className:ip("lucide",p),...!f&&!m0(g)&&{"aria-hidden":"true"},...g},[...m.map(([h,w])=>be.createElement(h,w)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(u,o)=>{const l=be.forwardRef(({className:c,...p},f)=>be.createElement(y0,{ref:f,iconNode:o,className:ip(`lucide-${h0(Gh(u))}`,`lucide-${u}`,c),...p}));return l.displayName=Gh(u),l};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],b0=Oe("activity",v0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],S0=Oe("archive",x0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],A0=Oe("arrow-left",E0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],hc=Oe("chart-column",_0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],on=Oe("check",w0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],pc=Oe("chevron-down",R0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],sp=Oe("chevron-right",T0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ds=Oe("circle-alert",N0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],I0=Oe("circle-check-big",C0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mc=Oe("circle-check",D0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],qh=Oe("circle-play",O0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],lp=Oe("circle-stop",j0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Yh=Oe("circle",k0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],z0=Oe("copy",L0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Os=Oe("download",M0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],op=Oe("ellipsis-vertical",U0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],B0=Oe("external-link",F0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gc=Oe("eye",P0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],H0=Oe("fast-forward",V0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],zs=Oe("file-text",G0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Y0=Oe("folder-plus",q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],X0=Oe("hammer",$0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Q0=Oe("link",Z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],$h=Oe("loader-circle",W0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],J0=Oe("loader",K0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ty=Oe("lock",ey);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M5 12h14",key:"1ays0h"}]],ay=Oe("minus",ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],iy=Oe("pen-line",ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yc=Oe("play",sy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],tn=Oe("refresh-cw",ly);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ns=Oe("rotate-ccw",oy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],uy=Oe("save",cy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],cp=Oe("search",dy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Cc=Oe("send",fy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Xh=Oe("skip-forward",hy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],my=Oe("trash-2",py);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],yy=Oe("trending-down",gy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],up=Oe("trending-up",vy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],vc=Oe("triangle-alert",by);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],dp=Oe("upload",xy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ey=Oe("user-check",Sy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_y=Oe("user",Ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],fp=Oe("users",wy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ty=Oe("x",Ry),Ny=({currentStage:u,currentBuilderStep:o,stagesState:l,isPartialPaper:c=!1,currentRound:p=1,isProcessing:f=!1,onStageClick:m,onStageAction:g,onNewCase:x,onNewInterview:h,onPaperToInterview:w,onResearchAdmin:E,paperMode:C="draft",onPaperModeChange:S})=>{const[R,v]=be.useState(null),A=be.useRef(null);be.useEffect(()=>{const U=ae=>{A.current&&!A.current.contains(ae.target)&&v(null)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const _=(U,ae)=>{const te=[];switch(ae){case Ie.ACTIVE:te.push({action:"abort",label:"Abort",icon:s.jsx(lp,{size:14})});break;case Ie.COMPLETED:te.push({action:"restart",label:"Restart",icon:s.jsx(Ns,{size:14})});break;case Ie.ERROR:te.push({action:"restart",label:"Retry",icon:s.jsx(Ns,{size:14})});break;case Ie.PENDING:const L=[ge.SETUP,ge.BUILDER,ge.REVIEWER,ge.SUPERVISOR,ge.REVISER,ge.FINALIZE],W=L.indexOf(U),y=W>0?L[W-1]:null,X=!y||l[y]===Ie.COMPLETED;te.push({action:"start",label:"Start",icon:s.jsx(yc,{size:14}),disabled:!X||f}),U!==ge.SETUP&&U!==ge.FINALIZE&&te.push({action:"skip",label:"Skip",icon:s.jsx(H0,{size:14}),disabled:f});break;case Ie.SKIPPED:te.push({action:"restart",label:"Unskip & Run",icon:s.jsx(Ns,{size:14})});break}return te},I=[ge.SETUP,ge.BUILDER,ge.REVIEWER,ge.SUPERVISOR,ge.REVISER,ge.FINALIZE],D={[ge.SETUP]:s.jsx(zs,{size:16}),[ge.BUILDER]:s.jsx(X0,{size:16}),[ge.REVIEWER]:s.jsx(cp,{size:16}),[ge.SUPERVISOR]:s.jsx(Ey,{size:16}),[ge.REVISER]:s.jsx(iy,{size:16}),[ge.FINALIZE]:s.jsx(Cc,{size:16})},F=U=>{switch(U){case Ie.COMPLETED:return s.jsx(mc,{size:16,className:"text-emerald-500"});case Ie.ACTIVE:return s.jsx(qh,{size:16,className:"text-red-500 animate-pulse"});case Ie.ERROR:return s.jsx(Ds,{size:16,className:"text-red-500"});case Ie.SKIPPED:return s.jsx(Xh,{size:16,className:"text-slate-400"});default:return s.jsx(Yh,{size:16,className:"text-slate-500"})}},k=[ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION],$=U=>c?[ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS].includes(U):!1,H=U=>{if($(U))return"skipped";const ae=k.indexOf(U),te=o?k.indexOf(o):-1;return U===o?"active":te>ae?"completed":"pending"},G=u===ge.BUILDER||l[ge.BUILDER]===Ie.ACTIVE;return s.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[s.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[s.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"ICIScopilot",s.jsx("span",{className:"text-emerald-500",children:"1"})]}),s.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Automated Science Discovery"})]}),p>1&&s.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),s.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",p]})]})}),c&&s.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:s.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[s.jsx(Ds,{size:12}),s.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),s.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[s.jsx("button",{onClick:()=>S==null?void 0:S("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${C==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),s.jsx("button",{onClick:()=>S==null?void 0:S("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${C==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),h&&s.jsx("button",{onClick:h,className:"w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition-colors",children:"Voice Interview"}),w&&s.jsx("button",{onClick:w,className:"w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors",children:"Paper to Interview"}),x&&s.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&x()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),E&&s.jsxs("button",{onClick:E,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[s.jsx(fp,{size:16}),"Research Admin"]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:I.map(U=>{const ae=l[U],te=ae===Ie.ACTIVE,L=ae===Ie.COMPLETED,W=ae===Ie.SKIPPED,y=u===U,X=f0[U],V=_(U,ae);return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${te?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":L?"border-emerald-500/50 bg-slate-900/50":W?"border-slate-700 bg-slate-900/30 opacity-60":y?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>m(U),children:[s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`${te?"text-red-400":L?"text-emerald-400":"text-slate-400"}`,children:D[U]}),s.jsx("span",{className:`font-medium text-sm ${te||y?"text-white":""}`,children:X.label})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[U===ge.BUILDER&&(G?s.jsx(pc,{size:14}):s.jsx(sp,{size:14})),F(ae),g&&V.length>0&&s.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:P=>{P.stopPropagation(),v(R===U?null:U)},children:s.jsx(op,{size:14,className:"text-slate-400"})})]})]}),s.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:X.description}),X.promptFile&&s.jsx("div",{className:"mt-2 pl-6",children:s.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:X.promptFile})})]}),R===U&&g&&s.jsx("div",{ref:A,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:V.map(({action:P,label:ce,icon:J,disabled:me})=>s.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${me?"text-slate-600 cursor-not-allowed":P==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:N=>{N.stopPropagation(),me||(g(U,P),v(null))},disabled:me,children:[J,ce]},P))}),U===ge.BUILDER&&G&&s.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:k.map(P=>{const ce=rp[P],J=H(P);return s.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${J==="active"?"bg-red-900/30 text-red-300":J==="completed"?"text-emerald-400":J==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[J==="active"&&s.jsx(qh,{size:12,className:"animate-pulse"}),J==="completed"&&s.jsx(mc,{size:12}),J==="skipped"&&s.jsx(Xh,{size:12}),J==="pending"&&s.jsx(Yh,{size:12}),s.jsxs("span",{children:[ce.label,": ",ce.description]})]},P)})})]},U)})}),s.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:s.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Directory:"}),s.jsx("span",{className:"text-slate-400",children:ap})]}),s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Paper Version:"}),s.jsxs("span",{className:"text-slate-400",children:["v",p]})]})]})})]})},oi="icis_files_";class Cs extends Error{constructor(o,l,c){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.name="StorageError"}}function hp(){try{const u="__storage_test__";return localStorage.setItem(u,u),localStorage.removeItem(u),!0}catch{return!1}}function hr(u,o){var c;if(!hp())throw new Cs("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const l=oi+u.replace(/\\/g,"/");try{localStorage.setItem(l,o),console.log(`File written: ${u}`)}catch(p){const f=p;throw f.name==="QuotaExceededError"||(c=f.message)!=null&&c.includes("quota")?new Cs("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",f.message):new Cs("WRITE_ERROR",`Failed to save file: ${u}`,f.message)}}function Ms(u){if(!hp())return console.warn("localStorage unavailable, returning null for read"),null;const o=oi+u.replace(/\\/g,"/");try{return localStorage.getItem(o)}catch(l){const c=l;throw console.error(`Error reading file ${u}:`,c),new Cs("READ_ERROR",`Failed to read file: ${u}`,c.message)}}function Cy(u){const o=[],l=new RegExp(u.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let c=0;c<localStorage.length;c++){const p=localStorage.key(c);if(p&&p.startsWith(oi)){const f=p.substring(oi.length);l.test(f)&&o.push(f)}}return o.sort()}function pp(u){const o=`icis/Data/oversight_v${u.version}.txt`,l=Iy(u);return hr(o,l),hr(o+".json",JSON.stringify(u,null,2)),o}function Iy(u){const o=[];o.push(`ID=${u.paperId}`),o.push(`Version: ${u.version}`),o.push(`Timestamp: ${u.timestamp}`),o.push(""),o.push("================================================================================"),o.push("                     OVERSIGHT DASHBOARD"),o.push("================================================================================"),o.push(""),o.push("TABLE 1 - Review Scores Progression:"),o.push("------------------------------------------------------------------------"),o.push("| Criteria              | Score | Comment                              |"),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| Novelty               | ${u.reviewScores.novelty}     | ${u.reviewComments.novelty.substring(0,36).padEnd(36)} |`),o.push(`| Significance          | ${u.reviewScores.significance}     | ${u.reviewComments.significance.substring(0,36).padEnd(36)} |`),o.push(`| Methodological Rigor  | ${u.reviewScores.methodologicalRigor}     | ${u.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),o.push(`| Clarity               | ${u.reviewScores.clarity}     | ${u.reviewComments.clarity.substring(0,36).padEnd(36)} |`),o.push(`| Relevance             | ${u.reviewScores.relevance}     | ${u.reviewComments.relevance.substring(0,36).padEnd(36)} |`),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| AVERAGE               | ${u.averageScore.toFixed(1)}   |                                      |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 2 - Error Counts:"),o.push("------------------------------------------------------------------------"),o.push("| Category        | Count | Details                                  |"),o.push("|-----------------|-------|------------------------------------------|");const l=u.errorDetails.majorErrors.length>0?u.errorDetails.majorErrors[0].substring(0,40):"None",c=u.errorDetails.minorErrors.length>0?u.errorDetails.minorErrors[0].substring(0,40):"None";if(o.push(`| Major Errors    | ${String(u.errorCounts.majorErrors).padStart(5)} | ${l.padEnd(40)} |`),o.push(`| Minor Errors    | ${String(u.errorCounts.minorErrors).padStart(5)} | ${c.padEnd(40)} |`),o.push("|-----------------|-------|------------------------------------------|"),o.push(`| TOTAL           | ${String(u.errorCounts.majorErrors+u.errorCounts.minorErrors).padStart(5)} |                                          |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),o.push("------------------------------------------------------------------------"),o.push("| Dimension       | Score | Rationale                               |"),o.push("|-----------------|-------|-----------------------------------------|"),o.push(`| Reliability     | ${u.trustworthiness.reliability}     | ${u.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),o.push(`| Benevolence     | ${u.trustworthiness.benevolence}     | ${u.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),o.push(`| Goal Alignment  | ${u.trustworthiness.goalAlignment}     | ${u.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("CRITICAL ALERTS:"),o.push("------------------------------------------------------------------------"),u.criticalAlerts.length===0)o.push("None - paper is progressing well");else for(const p of u.criticalAlerts)o.push(`CRITICAL ALERT ${p.number}: ${p.title} (BLOCKING ISSUE)`),o.push(`  Status: ${p.status}`),o.push(`  Impact: ${p.impact}`),o.push(`  Details: ${p.details}`),o.push(`  Action Required: ${p.actionRequired}`),o.push(`  Consequence if Unfixed: ${p.consequence}`),o.push("");return o.push("------------------------------------------------------------------------"),o.push(""),o.push("================================================================================"),o.join(`
`)}function Ic(u){const o=`icis/Data/feedback_v${u.version}.txt`,l=[];if(l.push(`ID=${u.paperId}`),l.push(`Version: ${u.version}`),l.push(`Timestamp: ${u.timestamp}`),l.push(""),l.push("================================================================================"),l.push("                     CONSTRUCTIVE FEEDBACK"),l.push("================================================================================"),l.push(""),l.push("## Research Question and Contribution"),l.push(u.researchQuestion),l.push(""),l.push("## Method"),l.push(u.method),l.push(""),l.push("## Potential Impact"),l.push(u.potentialImpact),l.push(""),l.push("## Writing Quality"),l.push(u.writing),l.push(""),l.push("## Major Concerns"),u.majorConcerns.forEach((p,f)=>{l.push(`${f+1}. ${p}`)}),l.push(""),l.push("## Minor Corrections"),u.minorCorrections.forEach((p,f)=>{l.push(`${f+1}. ${p}`)}),l.push(""),l.push("## Overall Assessment"),l.push(u.overallAssessment),l.push(""),u.supervisorDirectives&&u.supervisorDirectives.length>0){l.push("================================================================================"),l.push("                     SUPERVISOR DIRECTIVES"),l.push("================================================================================");for(const p of u.supervisorDirectives)l.push(""),l.push(`Cycle ${p.cycle} - ${p.timestamp}`),l.push("------------------------------------------------------------------------"),l.push(p.directives)}l.push(""),l.push("================================================================================");const c=l.join(`
`);return hr(o,c),hr(o+".json",JSON.stringify(u,null,2)),o}function Is(u){const o=`icis/Data/oversight_v${u}.txt.json`,l=Ms(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse oversight JSON:",c)}return null}function li(u){const o=`icis/Data/feedback_v${u}.txt.json`,l=Ms(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse feedback JSON:",c)}return null}function Dc(){const u=Cy("icis/Data/oversight_v.*\\.txt\\.json"),o=[];for(const l of u){const c=Ms(l);if(c)try{o.push(JSON.parse(c))}catch(p){console.error("Failed to parse oversight file:",l,p)}}return o.sort((l,c)=>l.version-c.version)}function Zh(u,o,l){const c=li(u);c&&(c.supervisorDirectives||(c.supervisorDirectives=[]),c.supervisorDirectives.push({cycle:o,directives:l,timestamp:new Date().toISOString()}),Ic(c))}function Qh(u,o,l){const c="icis/Data/supervisor_decision.txt",p=[];return p.push(`Decision: ${u}`),p.push(`Cycle: ${o}`),p.push(`Timestamp: ${new Date().toISOString()}`),hr(c,p.join(`
`)),c}function Dy(){const u=[];for(let o=0;o<localStorage.length;o++){const l=localStorage.key(o);l&&l.startsWith(oi)&&u.push(l)}u.forEach(o=>localStorage.removeItem(o)),console.log(`Cleared ${u.length} files`)}function Wh(u,o,l="icis_paper"){const c=`icis/Paper/${l}_v${u}.tex`;return hr(c,o),console.log(`Paper saved: ${c}`),c}function ra(u,o="icis_paper"){const l=`icis/Paper/${o}_v${u}.tex`;return Ms(l)}function Oy(u,o="icis_paper"){const l=ra(u,o);if(!l){console.error(`Paper version ${u} not found`);return}const c=`${o}_v${u}.tex`,p=new Blob([l],{type:"text/plain;charset=utf-8"}),f=URL.createObjectURL(p),m=document.createElement("a");m.href=f,m.download=c,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(f),console.log(`Downloaded: ${c}`)}const ci=({logs:u,height:o="h-64"})=>{const l=be.useRef(null);return be.useEffect(()=>{var c;(c=l.current)==null||c.scrollIntoView({behavior:"smooth"})},[u]),s.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${o} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[u.length===0?s.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):u.map((c,p)=>s.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:c},p)),s.jsx("div",{ref:l})]})},jy=({currentStep:u})=>{if(!u)return null;const o=rp[u];return s.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:s.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[s.jsx(tn,{size:16,className:"animate-spin"}),s.jsx("span",{className:"font-medium",children:o.label}),s.jsxs("span",{className:"text-indigo-500",children:["- ",o.description]})]})})},Oc=({stageName:u,isProcessing:o,canAbort:l,canRestart:c,onAbort:p,onRestart:f})=>{const[m,g]=be.useState(null),x=()=>{o&&g("abort")},h=()=>{g("restart")},w=()=>{m==="abort"?p():m==="restart"&&f(),g(null)};return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex gap-2",children:[l&&o&&s.jsxs("button",{onClick:x,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[s.jsx(lp,{size:14}),"Abort"]}),c&&!o&&s.jsxs("button",{onClick:h,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[s.jsx(Ns,{size:14}),"Restart"]})]}),m&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:s.jsx(vc,{className:"text-amber-600",size:24})}),s.jsx("h3",{className:"text-lg font-bold text-slate-800",children:m==="abort"?"Abort Stage?":"Restart Stage?"})]}),s.jsx("p",{className:"text-slate-600 mb-6",children:m==="abort"?s.jsxs(s.Fragment,{children:["Are you sure you want to abort the ",s.jsx("strong",{children:u})," stage? Any progress will be lost and you may need to restart the stage."]}):s.jsxs(s.Fragment,{children:["Are you sure you want to restart the ",s.jsx("strong",{children:u})," stage? This will reset the stage and you'll need to run it again."]})}),s.jsxs("div",{className:"flex gap-3 justify-end",children:[s.jsx("button",{onClick:()=>g(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),s.jsx("button",{onClick:w,className:`px-4 py-2 text-white rounded-lg transition-colors ${m==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:m==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},oc=({label:u,accept:o=".txt",multiple:l=!1,required:c=!1,file:p,onFileSelect:f})=>{const m=be.useRef(null),g=()=>{var w;(w=m.current)==null||w.click()},x=w=>{var C;const E=((C=w.target.files)==null?void 0:C[0])||null;f(E)},h=w=>{w.stopPropagation(),f(null),m.current&&(m.current.value="")};return s.jsxs("div",{onClick:g,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${p?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(dp,{size:16,className:p?"text-emerald-600":"text-slate-400"}),s.jsxs("span",{className:"text-sm",children:[p?p.name:u,c&&!p&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),p?s.jsx("button",{onClick:h,className:"p-1 hover:bg-emerald-200 rounded",children:s.jsx(Ty,{size:16,className:"text-emerald-600"})}):s.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),s.jsx("input",{ref:m,type:"file",accept:o,multiple:l,onChange:x,className:"hidden"})]})},ky=({logs:u,stageStatus:o,isProcessing:l,uploadedFiles:c,onFileChange:p,onAction:f,detectionStatus:m,onRefreshDetection:g,hasExistingCase:x=!1})=>{const[h,w]=be.useState(!1),E=c.template&&c.interview,C=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(w(!0),f("NEW_CASE"),setTimeout(()=>w(!1),2e3))};return s.jsxs("div",{className:"space-y-6 max-w-2xl mx-auto mt-10",children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(zs,{className:"text-indigo-600"}),"Setup & File Selection"]}),x&&s.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(S0,{className:"text-blue-600",size:24}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),s.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),s.jsx("button",{onClick:C,disabled:h,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:h?s.jsxs(s.Fragment,{children:[s.jsx(tn,{className:"animate-spin",size:18}),"Backing up..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Y0,{size:18}),"New Project"]})})]})}),m&&s.jsxs("div",{className:`p-4 rounded-lg border ${m.loading?"bg-blue-50 border-blue-200":m.detected.interview?"bg-green-50 border-green-200":"bg-amber-50 border-amber-200"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[m.loading?s.jsxs(s.Fragment,{children:[s.jsx(J0,{className:"animate-spin text-blue-600",size:18}),s.jsx("span",{className:"text-blue-800 font-medium",children:"Detecting files in Data folder..."})]}):m.detected.interview?s.jsxs(s.Fragment,{children:[s.jsx(I0,{className:"text-green-600",size:18}),s.jsx("span",{className:"text-green-800 font-medium",children:"Files auto-detected!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ds,{className:"text-amber-600",size:18}),s.jsx("span",{className:"text-amber-800 font-medium",children:"No files detected - upload manually"})]}),g&&!m.loading&&s.jsxs("button",{onClick:g,className:"ml-auto text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1",children:[s.jsx(tn,{size:14}),"Refresh"]})]}),!m.loading&&m.detected.interview&&s.jsxs("div",{className:"mt-3 space-y-1 text-sm",children:[s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Interview:"})," ",m.detected.interview.filename]}),m.detected.participantId&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Participant ID:"})," ",m.detected.participantId]}),m.detected.template&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Template:"})," ",m.detected.template.filename]}),m.detected.dataFile&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Data File:"})," ",m.detected.dataFile.filename]})]})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:m!=null&&m.detected.interview?"Detected Files":"Select Your Files"}),s.jsx("p",{className:"text-sm text-slate-500",children:m!=null&&m.detected.interview?"Files were automatically loaded from the Data folder. You can still upload different files if needed.":"Upload the required files to begin the paper generation process."}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(oc,{label:"icisTemplate.txt (Required)",accept:".txt",required:!0,file:c.template,onFileSelect:S=>p("template",S)}),s.jsx(oc,{label:"Interview transcript (Required)",accept:".txt",required:!0,file:c.interview,onFileSelect:S=>p("interview",S)}),s.jsx(oc,{label:"Data file (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:c.dataFile,onFileSelect:S=>p("dataFile",S)})]}),c.participantId&&s.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg",children:s.jsxs("p",{className:"text-sm text-indigo-800",children:[s.jsx("strong",{children:"Participant ID:"})," ",c.participantId]})}),s.jsx(ci,{logs:u,height:"h-32"}),s.jsx("div",{className:"pt-4 border-t border-slate-100 flex justify-end gap-3",children:s.jsxs("button",{onClick:()=>f("START_SETUP"),disabled:l||!E,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[l?s.jsx(tn,{className:"animate-spin",size:18}):s.jsx(yc,{size:18}),"Verify Files"]})}),!E&&!(m!=null&&m.loading)&&s.jsx("p",{className:"text-xs text-amber-600 text-center",children:"Please upload the required files (template and interview) to proceed."})]}),o===Ie.COMPLETED&&s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),s.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),s.jsxs("button",{onClick:()=>f("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(yc,{size:18}),"Start Building Paper"]})]}),s.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3",children:[s.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),s.jsx("button",{onClick:()=>f("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})},Ly=({logs:u,isProcessing:o,isPartialPaper:l,currentBuilderStep:c,paperContent:p,onAbort:f,onRestart:m})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Building Research Paper",l&&s.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),s.jsx(Oc,{stageName:"Builder",isProcessing:o,canAbort:!0,canRestart:!o&&!!p,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(jy,{currentStep:c}),s.jsx(ci,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:p?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:p}):s.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),zy=({allOversight:u,compact:o=!1})=>{if(u.length===0)return null;const l=(E,C)=>C>E?"up":C<E?"down":"same",c=({trend:E,size:C=14})=>E==="up"?s.jsx(up,{size:C,className:"text-emerald-500"}):E==="down"?s.jsx(yy,{size:C,className:"text-red-500"}):s.jsx(ay,{size:C,className:"text-slate-400"}),p=(E,C=4)=>E>=C?"text-emerald-600":E>=C-1?"text-amber-600":"text-red-600",f=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],m=u[0],g=u[u.length-1],x=u.length>1,h=x?((g.averageScore-m.averageScore)/m.averageScore*100).toFixed(1):"0",w=x?Math.round((1-(g.errorCounts.majorErrors+g.errorCounts.minorErrors)/Math.max(1,m.errorCounts.majorErrors+m.errorCounts.minorErrors))*100):0;return o?s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(hc,{size:18,className:"text-indigo-600"}),s.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),x&&s.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(h)>0?"bg-emerald-100 text-emerald-700":parseFloat(h)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(h)>0?"+":"",h,"% overall"]})]}),s.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:f.map(({key:E,label:C})=>{const S=m.reviewScores[E]||0,R=g.reviewScores[E]||0,v=l(S,R);return s.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[s.jsx("div",{className:"text-slate-500 truncate mb-1",children:C}),s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx("span",{className:`font-bold ${p(R)}`,children:R}),x&&s.jsx(c,{trend:v,size:12})]}),x&&S!==R&&s.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",S]})]},E)})}),s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Average:"}),s.jsx("span",{className:`font-bold ${p(g.averageScore)}`,children:g.averageScore.toFixed(1)}),x&&s.jsxs(s.Fragment,{children:[s.jsx(c,{trend:l(m.averageScore,g.averageScore)}),s.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",m.averageScore.toFixed(1),")"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Errors:"}),s.jsx("span",{className:`font-bold ${g.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:g.errorCounts.majorErrors+g.errorCounts.minorErrors}),x&&w!==0&&s.jsxs("span",{className:`text-xs ${w>0?"text-emerald-600":"text-red-600"}`,children:["(",w>0?"-":"+",Math.abs(w),"%)"]})]})]}),x&&s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[s.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",u.length," rounds):"]}),s.jsx("div",{className:"flex gap-1",children:u.map((E,C)=>s.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${C===u.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.averageScore.toFixed(1)]},C))})]})]}):s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(hc,{size:20,className:"text-indigo-600"}),s.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),x&&s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(h)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(h)>0?"+":"",h,"% score change"]}),s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${w>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[w>0?"-":"+",Math.abs(w),"% errors"]})]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-200",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),u.map((E,C)=>s.jsxs("th",{className:`text-center p-2 ${C===u.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",E.version]},C)),x&&s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),s.jsxs("tbody",{children:[f.map(({key:E,label:C})=>{const S=u.map(v=>v.reviewScores[E]||0),R=x?l(S[0],S[S.length-1]):"same";return s.jsxs("tr",{className:"border-b border-slate-100",children:[s.jsx("td",{className:"p-2 font-medium",children:C}),S.map((v,A)=>s.jsx("td",{className:`text-center p-2 ${A===S.length-1?"bg-indigo-50/50":""} ${p(v)}`,children:v},A)),x&&s.jsx("td",{className:"text-center p-2",children:s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx(c,{trend:R}),R==="up"&&s.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",S[S.length-1]-S[0]]}),R==="down"&&s.jsx("span",{className:"text-red-600 text-xs",children:S[S.length-1]-S[0]})]})})]},E)}),s.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"Average"}),u.map((E,C)=>s.jsx("td",{className:`text-center p-2 ${C===u.length-1?"bg-indigo-100":""} ${p(E.averageScore)}`,children:E.averageScore.toFixed(1)},C)),x&&s.jsx("td",{className:"text-center p-2",children:s.jsx("div",{className:"flex items-center justify-center gap-1",children:s.jsx(c,{trend:l(m.averageScore,g.averageScore)})})})]})]})]})}),s.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[s.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((E,C)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${C===u.length-1?E.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.errorCounts.majorErrors]},C))})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((E,C)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${C===u.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.errorCounts.minorErrors]},C))})]})]})]})]})},nn="http://localhost:3001/api";let ct=null;async function pn(){try{const u=new AbortController,o=setTimeout(()=>u.abort(),1e3),l=await fetch(`${nn}/health`,{signal:u.signal});return clearTimeout(o),ct=(await l.json()).status==="ok",ct}catch{return ct=!1,!1}}async function mp(){var u,o;try{const l=await fetch(`${nn}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!l.ok)return{success:!1,error:`Server error: ${l.status}`};const c=await l.json();return c.success&&console.log("[FileApi] Manifest refreshed:",(o=(u=c.manifest)==null?void 0:u.files)==null?void 0:o.map(p=>p.filename)),c}catch(l){return console.error("[FileApi] Failed to refresh manifest:",l),{success:!1,error:l.message}}}function jc(u,o,l="text/plain"){const c=new Blob([o],{type:l}),p=URL.createObjectURL(c),f=document.createElement("a");f.href=p,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(p)}async function bc(u,o){if(ct===null&&await pn(),ct)try{const c=await(await fetch(`${nn}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json();if(c.success)return c}catch{console.warn("Backend save failed, falling back to download")}try{return jc(u,o,"application/x-tex"),{success:!0,path:`Downloads/${u}`}}catch(l){return{success:!1,error:l.message}}}async function xc(u,o){const l=typeof o=="string"?o:JSON.stringify(o,null,2);if(ct===null&&await pn(),ct)try{const p=await(await fetch(`${nn}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:l})})).json();if(p.success)return p}catch{console.warn("Backend save failed, falling back to download")}try{return jc(u,l,"application/json"),{success:!0,path:`Downloads/${u}`}}catch(c){return{success:!1,error:c.message}}}async function gp(u){if(ct===null&&await pn(),ct)try{const l=await(await fetch(`${nn}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:u})})).json();if(l.success)return l}catch{console.warn("Backend save failed, falling back to downloads")}try{const o=[];for(const l of u){const c=typeof l.content=="string"?l.content:JSON.stringify(l.content,null,2),p=l.directory==="paper"?"application/x-tex":"application/json";await new Promise(f=>setTimeout(f,200)),jc(l.filename,c,p),o.push(l.filename)}return{success:!0,files:o}}catch(o){return{success:!1,error:o.message}}}async function yp(u,o,l,c,p){const f=p?`${p}_`:"";return gp([{directory:"data",filename:`${f}oversight_v${u}.json`,content:o},{directory:"data",filename:`${f}feedback_v${u}.json`,content:l},{directory:"paper",filename:`${f}icis_paper_v${u}.tex`,content:c}])}const wa="https://icis-deploy-12-10-2025.vercel.app";let _a=null;async function vp(u,o,l){const c=(o.match(/\\begin\{tikzpicture\}/g)||[]).length,p=(l==null?void 0:l.length)||0,f=Math.round(o.length/1024);try{console.log(`[LaTeX] Compiling via Vercel cloud... (${f} KB, ${c} TikZ, ${p} PNG figures)`);const m=new AbortController,g=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),m.abort()},3e5);let x;try{x=await fetch(`${wa}/api/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},signal:m.signal,body:JSON.stringify({filename:u,content:o,figures:l})}),clearTimeout(g)}catch(w){if(clearTimeout(g),w.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${c} TikZ figures may be too complex.`};throw w}const h=await x.json();return h.success&&h.pdfBase64?(_a={filename:h.pdfFilename,base64:h.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${h.pdfFilename}`)):h.success||console.warn(`[LaTeX] Cloud compilation failed: ${h.error}`),h}catch(m){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",m)}if(ct===null&&await pn(),!ct)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${nn}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json()}catch(m){return{success:!1,error:`Compilation request failed: ${m.message}`}}}function kc(){if(!_a)return null;const u=atob(_a.base64),o=new Uint8Array(u.length);for(let c=0;c<u.length;c++)o[c]=u.charCodeAt(c);const l=new Blob([o],{type:"application/pdf"});return{filename:_a.filename,blob:l}}function bp(u){return`${nn}/get-pdf/${encodeURIComponent(u)}`}async function xp(u){const o=kc();if(o&&o.filename===u){const p=URL.createObjectURL(o.blob),f=document.createElement("a");f.href=p,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(p);return}const l=bp(u),c=document.createElement("a");c.href=l,c.download=u,document.body.appendChild(c),c.click(),document.body.removeChild(c)}async function Sp(u){if(!_a)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const l=await(await fetch(`${wa}/api/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:_a.filename,pdfBase64:_a.base64})})).json();if(l.success)return console.log(`[Viewer] Link created: ${l.fullUrl}`),l;console.warn("[Viewer] Cloud API returned error:",l.error)}catch(o){console.warn("[Viewer] Cloud API failed:",o)}if(ct===null&&await pn(),!ct)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${nn}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:u})})).json()}catch(o){return{success:!1,error:`Failed to create viewer link: ${o.message}`}}}function Ep(u){window.open(u,"_blank","noopener,noreferrer")}async function Ap(u){if(ct===null&&await pn(),!ct)return{success:!1,error:"Backend server not available"};try{return await(await fetch(`${nn}/read-pdf/${encodeURIComponent(u)}`)).json()}catch(o){return{success:!1,error:o.message}}}async function Us(u,o="full"){var l;try{console.log(`[Cloud Python] Analyzing data (${u.length} chars, type: ${o})...`);const p=await(await fetch(`${wa}/api/analyze-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({csvContent:u,analysisType:o})})).json();return p.success?console.log(`[Cloud Python] Analysis complete: ${((l=p.figures)==null?void 0:l.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${p.error}`),p}catch(c){return console.error("[Cloud Python] Error:",c),{success:!1,error:c.message}}}async function _p(u,o,l){const c=ui();if(c!=null&&c.content&&wa){console.log("[executePythonScript] Trying cloud Python analysis...");const p=await Us(c.content,"full");if(p.success){const f=[];return p.chart_data&&p.chart_data.forEach((m,g)=>{f.push({filename:`${m.type}_${m.column||m.x_column||g}.json`,path:`cloud://chart_data/${g}`,size:JSON.stringify(m).length,base64:btoa(JSON.stringify(m))})}),{success:!0,stdout:p.text_summary||"",dataFileFound:!0,generatedFigures:f}}}if(ct===null&&await pn(),!ct)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${u}, dataFile=${l||"UNDEFINED"}`);const p={filename:u,code:o,dataFile:l};console.log("[executePythonScript] Request body dataFile:",p.dataFile);const m=await(await fetch(`${nn}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${m.dataFileFound}, dataFilePath=${m.dataFilePath||"NONE"}`),m}catch(p){return{success:!1,error:`Python execution request failed: ${p.message}`}}}async function wp(){if(ct===null&&await pn(),!ct)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${nn}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(u){return{success:!1,error:`Backup request failed: ${u.message}`}}}let ln=null;async function Rp(u){try{const o=await u.arrayBuffer(),l=btoa(new Uint8Array(o).reduce((f,m)=>f+String.fromCharCode(m),""));console.log(`[Cloud Upload] Uploading ${u.name} (${u.size} bytes)...`);const p=await(await fetch(`${wa}/api/upload-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u.name,content:l,contentType:u.type})})).json();return p.success&&(ln={filename:u.name,blobUrl:p.blobUrl},console.log(`[Cloud Upload] Success: ${p.blobUrl}`)),p}catch(o){return console.error("[Cloud Upload] Error:",o),{success:!1,error:o.message}}}function ui(){return ln}async function Sc(u){try{console.log(`[Cloud Read] Reading from: ${u}`);const l=await(await fetch(`${wa}/api/read-data?url=${encodeURIComponent(u)}`)).json();return l.success&&ln&&(ln.content=l.content),l}catch(o){return console.error("[Cloud Read] Error:",o),{success:!1,error:o.message}}}async function Tp(u){if(ln&&ln.filename===u&&ln.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),Sc(ln.blobUrl);if(ct===null&&await pn(),!ct)return ln&&ln.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),Sc(ln.blobUrl)):{success:!1,error:"Backend server not available"};try{const l=await(await fetch(`${nn}/read-file/data/${encodeURIComponent(u)}`)).json();if(!l.success)return{success:!1,error:l.error||"Failed to read file"};const c=l.content,p=c.split(/\r?\n/),f=p[0]||"",m=p.filter(g=>g.trim()).length;return{success:!0,filename:u,firstLine:f,totalLines:m,content:c}}catch(o){return{success:!1,error:o.message}}}async function My(u){if(!u||u.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${u.length} figures via QuickChart.io...`);const l=await(await fetch(`${wa}/api/quickchart`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chartData:u})})).json();return l.success?console.log(`[QuickChart] Generated ${l.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${l.error}`),l}catch(o){return console.error("[QuickChart] Error:",o),{success:!1,error:o.message}}}let js=[];function Np(){return js}async function Cp(){const u=[];for(const o of js)try{const l=await fetch(o.blobUrl);if(l.ok){const c=await l.blob();u.push({filename:o.filename,blob:c})}else console.warn(`[PNG Figures] Failed to download ${o.filename}: ${l.status}`)}catch(l){console.warn(`[PNG Figures] Error downloading ${o.filename}:`,l)}return console.log(`[PNG Figures] Downloaded ${u.length}/${js.length} figures`),u}let Ec=[];function Uy(u){Ec=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:o.base64})),js=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${o.base64}`,description:o.description||""})),console.log(`[PNG Storage] Stored ${Ec.length} PNG figures for LaTeX compilation and download`)}function Ip(){return Ec}const cc=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:Us,backupAndClearFiles:wp,checkBackendHealth:pn,compileLaTeX:vp,createViewerLink:Sp,downloadAllFigures:Cp,downloadCompiledPdf:xp,executePythonScript:_p,generateQuickChartFigures:My,getCloudDataFile:ui,getCurrentSessionFigures:Np,getDataFilePreview:Tp,getLastCompiledPdfBlob:kc,getPdfDownloadUrl:bp,getPngFiguresForCompilation:Ip,openPaperViewer:Ep,readCloudDataFile:Sc,readPdfFile:Ap,refreshManifest:mp,saveDataFile:xc,saveFiles:gp,savePaperFile:bc,saveReviewOutputs:yp,storePngFiguresForCompilation:Uy,uploadDataFileToCloud:Rp},Symbol.toStringTag,{value:"Module"})),Fy=({logs:u,isProcessing:o,currentRound:l,isComplete:c=!1,onProceedToSupervisor:p,onAbort:f,onRestart:m,filePrefix:g})=>{const[x,h]=be.useState([]),[w,E]=be.useState(null),[C,S]=be.useState(!1),[R,v]=be.useState({}),A=async()=>{S(!0),E(null);const F=Is(l),k=li(l),$=ra(l,"icis_paper");if(!F||!k||!$){E("Missing files to save"),S(!1);return}const H=await yp(l,F,k,$,g);H.success?h(H.files||[]):E(H.error||"Failed to save files"),S(!1)},_=async(F,k)=>{var G;const $=(G=F.target.files)==null?void 0:G[0];if(!$)return;const H=await $.text();try{const U=JSON.parse(H);v(ae=>({...ae,[k]:U}))}catch(U){console.error(`Failed to parse ${k} file:`,U)}},I=()=>{const F=R.oversight||Is(l),k=R.feedback||li(l),$=ra(l,"icis_paper");F&&k&&$&&p&&p({oversight:F,feedback:k,paperContent:$,paperVersion:l})},D=c&&(R.oversight&&R.feedback||Is(l)&&li(l));return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Reviewing Paper (Round ",l,")"]}),s.jsx(Oc,{stageName:"Reviewer",isProcessing:o,canAbort:!0,canRestart:!o&&c,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(ci,{logs:u,height:"h-48"}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${o?"bg-indigo-100 text-indigo-600":c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:o?s.jsx(tn,{size:14,className:"animate-spin"}):c?s.jsx(on,{size:14}):"1"}),s.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"2"}),s.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"3"}),s.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),c&&s.jsx("div",{className:"mt-6",children:s.jsx(zy,{allOversight:Dc(),compact:!0})}),c&&s.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[s.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[s.jsx(Os,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),s.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),s.jsxs("button",{onClick:A,disabled:C,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[s.jsx(Os,{size:16,className:C?"animate-pulse":""}),C?"Downloading...":"Download Review Outputs"]}),s.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",l,".json, feedback_v",l,".json, icis_paper_v",l,".tex"]}),x.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",x.join(", ")]}),w&&s.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",w]}),s.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[s.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[s.jsx(dp,{size:16}),"Upload Modified Files (Optional)"]}),s.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",R.oversight&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:F=>_(F,"oversight"),className:"text-xs w-full"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",R.feedback&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:F=>_(F,"feedback"),className:"text-xs w-full"})]})]})]}),s.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:s.jsxs("button",{onClick:I,disabled:!D,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",s.jsx(sp,{size:18})]})})]})]})},By=({currentRound:u,currentPaperVersion:o,lastFeedback:l,isProcessing:c,oversightData:p,allOversight:f,onAction:m,reviewOutputFiles:g})=>{var L,W;const[x,h]=be.useState(""),[w,E]=be.useState(!1),[C,S]=be.useState(!1),[R,v]=be.useState(!1),A=(g==null?void 0:g.oversight)||p,_=g==null?void 0:g.feedback,I=()=>{Oy(o,"icis_paper")},D=(g==null?void 0:g.paperContent)||ra(o,"icis_paper"),F=g?"Uploaded/Downloaded files":"Internal storage",k=(A==null?void 0:A.averageScore)||0,$=(A==null?void 0:A.errorCounts.majorErrors)||0,H=A?A.reviewScores.novelty<4||A.reviewScores.significance<4||A.reviewScores.methodologicalRigor<4||A.reviewScores.clarity<4||A.reviewScores.relevance<4:!1,G=A?A.trustworthiness.reliability<5||A.trustworthiness.benevolence<5||A.trustworthiness.goalAlignment<5:!1,U=((A==null?void 0:A.criticalAlerts.length)||0)>0,ae=H||G||$>0||U,te=!ae&&k>=4;return s.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[s.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),s.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",u]}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),s.jsx("div",{className:`p-4 font-mono text-sm ${ae?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:s.jsxs("div",{className:"font-bold",children:["STATUS: ",ae?"⚠️ ATTENTION NEEDED":te?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(zs,{size:16,className:"text-slate-600"}),s.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),s.jsx("span",{className:"text-slate-600",children:F})]}),s.jsx("button",{onClick:()=>v(!R),className:"text-xs text-indigo-600 hover:underline",children:R?"Hide Details":"Show Details"})]}),R&&s.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),s.jsxs("p",{className:"text-slate-600",children:["oversight_v",(A==null?void 0:A.version)||u,".json",(g==null?void 0:g.oversight)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),s.jsxs("p",{className:"text-slate-600",children:["feedback_v",(_==null?void 0:_.version)||u,".json",(g==null?void 0:g.feedback)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),s.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(g==null?void 0:g.paperVersion)||o,".tex",(g==null?void 0:g.paperContent)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),s.jsx("p",{className:g?"text-emerald-600":"text-slate-600",children:g?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),f.map((y,X)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",y.version]},X)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),s.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(y=>{var V;const X=y==="Methodological Rigor"?"methodologicalRigor":y.toLowerCase();return s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:y}),f.map((P,ce)=>{const J=P.reviewScores[X]||0;return s.jsx("td",{className:`text-center p-2 ${J<4?"text-red-600 font-bold":""}`,children:J},ce)}),s.jsx("td",{className:"p-2 text-slate-600 text-xs",children:A!=null&&A.reviewComments?((V=A.reviewComments[X])==null?void 0:V.substring(0,30))+"...":"-"})]},y)}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"AVERAGE"}),f.map((y,X)=>s.jsx("td",{className:"text-center p-2",children:y.averageScore.toFixed(1)},X)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?f[f.length-1].averageScore>f[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),f.map((y,X)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",y.version]},X)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Remaining Issues"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),f.map((y,X)=>s.jsx("td",{className:`text-center p-2 ${y.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:y.errorCounts.majorErrors},X)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((L=A==null?void 0:A.errorDetails.majorErrors[0])==null?void 0:L.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),f.map((y,X)=>s.jsx("td",{className:"text-center p-2",children:y.errorCounts.minorErrors},X)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((W=A==null?void 0:A.errorDetails.minorErrors[0])==null?void 0:W.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"TOTAL"}),f.map((y,X)=>s.jsx("td",{className:"text-center p-2",children:y.errorCounts.majorErrors+y.errorCounts.minorErrors},X)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?`${Math.round((1-(f[f.length-1].errorCounts.majorErrors+f[f.length-1].errorCounts.minorErrors)/Math.max(1,f[0].errorCounts.majorErrors+f[0].errorCounts.minorErrors))*100)}% reduction`:"-"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.reliability)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.reliabilityRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.benevolence)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.benevolenceRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.goalAlignment)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${U?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),U?s.jsx("div",{className:"space-y-3",children:A==null?void 0:A.criticalAlerts.map((y,X)=>s.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[s.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",y.number,": ",y.title," (BLOCKING ISSUE)"]}),s.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Status:"})," ",y.status]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Impact:"})," ",y.impact]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Details:"})," ",y.details]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Action Required:"})," ",y.actionRequired]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Consequence:"})," ",y.consequence]})]})]},X))}):s.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),s.jsxs("button",{onClick:()=>E(!w),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[s.jsx(gc,{size:12}),w?"Hide Full":"Show Full"]})]}),w?s.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:_?s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Summary:"}),s.jsx("p",{children:_.summary||"No summary available."})]}),_.majorIssues&&_.majorIssues.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-red-600",children:"Major Issues:"}),s.jsx("ul",{className:"list-disc list-inside",children:_.majorIssues.map((y,X)=>s.jsx("li",{children:y},X))})]}),_.suggestions&&_.suggestions.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Suggestions:"}),s.jsx("ul",{className:"list-disc list-inside",children:_.suggestions.map((y,X)=>s.jsx("li",{children:y},X))})]})]}):s.jsx("p",{children:l||"No feedback generated."})}):s.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(_==null?void 0:_.summary)||l||"No feedback generated."})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${ae?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),ae?s.jsxs("div",{children:[s.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",u+1]}),s.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",H?"Review scores below threshold (< 4)":$>0?`${$} major error(s) remaining`:G?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),s.jsxs("div",{className:"mt-2 text-sm",children:[s.jsx("p",{className:"font-medium",children:"Priority actions:"}),s.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:A==null?void 0:A.errorDetails.majorErrors.slice(0,3).map((y,X)=>s.jsx("li",{children:y},X))})]})]}):s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),s.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),s.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[s.jsxs("li",{children:["Average review score: ",k.toFixed(1),"/5"]}),s.jsx("li",{children:"All trustworthiness scores ≥ 5"}),s.jsx("li",{children:"No major errors remaining"}),s.jsx("li",{children:"No critical alerts"})]})]})]}),s.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),s.jsx("li",{children:"• Current feedback will guide improvements"}),s.jsx("li",{children:"• Add your directives below"})]})]}),s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISfinalize"}),s.jsx("li",{children:"• Paper will be prepared for submission"}),s.jsx("li",{children:"• No further revisions will be made"})]})]})]})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),s.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:x,onChange:y=>h(y.target.value)})]}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("button",{onClick:()=>m("revise",x),disabled:c,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),s.jsx("button",{onClick:()=>m("finalize"),disabled:c,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]})]}),s.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[s.jsxs("button",{onClick:()=>S(!C),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(gc,{size:14})," ",C?"Hide":"View"," Paper Draft"]}),s.jsxs("button",{onClick:I,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(Os,{size:14})," Download (.tex)"]})]}),C&&D&&s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",o,"):"]}),s.jsx("div",{className:"max-h-96 overflow-y-auto",children:s.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:D})})]})]})},Py=({logs:u,isProcessing:o,currentPaperVersion:l,paperContent:c,onAbort:p,onRestart:f})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Revising Paper (v",l," → v",(l||0)+1,")"]}),s.jsx(Oc,{stageName:"Reviser",isProcessing:o,canAbort:!0,canRestart:!o,onAbort:p||(()=>{}),onRestart:f||(()=>{})})]}),s.jsx(ci,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),s.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:c?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:c}):s.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function Rs(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var uc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Kh;function Vy(){return Kh||(Kh=1,(function(u,o){(function(l){u.exports=l()})(function(){return(function l(c,p,f){function m(h,w){if(!p[h]){if(!c[h]){var E=typeof Rs=="function"&&Rs;if(!w&&E)return E(h,!0);if(g)return g(h,!0);var C=new Error("Cannot find module '"+h+"'");throw C.code="MODULE_NOT_FOUND",C}var S=p[h]={exports:{}};c[h][0].call(S.exports,function(R){var v=c[h][1][R];return m(v||R)},S,S.exports,l,c,p,f)}return p[h].exports}for(var g=typeof Rs=="function"&&Rs,x=0;x<f.length;x++)m(f[x]);return m})({1:[function(l,c,p){var f=l("./utils"),m=l("./support"),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";p.encode=function(x){for(var h,w,E,C,S,R,v,A=[],_=0,I=x.length,D=I,F=f.getTypeOf(x)!=="string";_<x.length;)D=I-_,E=F?(h=x[_++],w=_<I?x[_++]:0,_<I?x[_++]:0):(h=x.charCodeAt(_++),w=_<I?x.charCodeAt(_++):0,_<I?x.charCodeAt(_++):0),C=h>>2,S=(3&h)<<4|w>>4,R=1<D?(15&w)<<2|E>>6:64,v=2<D?63&E:64,A.push(g.charAt(C)+g.charAt(S)+g.charAt(R)+g.charAt(v));return A.join("")},p.decode=function(x){var h,w,E,C,S,R,v=0,A=0,_="data:";if(x.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var I,D=3*(x=x.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(x.charAt(x.length-1)===g.charAt(64)&&D--,x.charAt(x.length-2)===g.charAt(64)&&D--,D%1!=0)throw new Error("Invalid base64 input, bad content length.");for(I=m.uint8array?new Uint8Array(0|D):new Array(0|D);v<x.length;)h=g.indexOf(x.charAt(v++))<<2|(C=g.indexOf(x.charAt(v++)))>>4,w=(15&C)<<4|(S=g.indexOf(x.charAt(v++)))>>2,E=(3&S)<<6|(R=g.indexOf(x.charAt(v++))),I[A++]=h,S!==64&&(I[A++]=w),R!==64&&(I[A++]=E);return I}},{"./support":30,"./utils":32}],2:[function(l,c,p){var f=l("./external"),m=l("./stream/DataWorker"),g=l("./stream/Crc32Probe"),x=l("./stream/DataLengthProbe");function h(w,E,C,S,R){this.compressedSize=w,this.uncompressedSize=E,this.crc32=C,this.compression=S,this.compressedContent=R}h.prototype={getContentWorker:function(){var w=new m(f.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new x("data_length")),E=this;return w.on("end",function(){if(this.streamInfo.data_length!==E.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new m(f.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(w,E,C){return w.pipe(new g).pipe(new x("uncompressedSize")).pipe(E.compressWorker(C)).pipe(new x("compressedSize")).withStreamInfo("compression",E)},c.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,c,p){var f=l("./stream/GenericWorker");p.STORE={magic:"\0\0",compressWorker:function(){return new f("STORE compression")},uncompressWorker:function(){return new f("STORE decompression")}},p.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,c,p){var f=l("./utils"),m=(function(){for(var g,x=[],h=0;h<256;h++){g=h;for(var w=0;w<8;w++)g=1&g?3988292384^g>>>1:g>>>1;x[h]=g}return x})();c.exports=function(g,x){return g!==void 0&&g.length?f.getTypeOf(g)!=="string"?(function(h,w,E,C){var S=m,R=C+E;h^=-1;for(var v=C;v<R;v++)h=h>>>8^S[255&(h^w[v])];return-1^h})(0|x,g,g.length,0):(function(h,w,E,C){var S=m,R=C+E;h^=-1;for(var v=C;v<R;v++)h=h>>>8^S[255&(h^w.charCodeAt(v))];return-1^h})(0|x,g,g.length,0):0}},{"./utils":32}],5:[function(l,c,p){p.base64=!1,p.binary=!1,p.dir=!1,p.createFolders=!0,p.date=null,p.compression=null,p.compressionOptions=null,p.comment=null,p.unixPermissions=null,p.dosPermissions=null},{}],6:[function(l,c,p){var f=null;f=typeof Promise<"u"?Promise:l("lie"),c.exports={Promise:f}},{lie:37}],7:[function(l,c,p){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",m=l("pako"),g=l("./utils"),x=l("./stream/GenericWorker"),h=f?"uint8array":"array";function w(E,C){x.call(this,"FlateWorker/"+E),this._pako=null,this._pakoAction=E,this._pakoOptions=C,this.meta={}}p.magic="\b\0",g.inherits(w,x),w.prototype.processChunk=function(E){this.meta=E.meta,this._pako===null&&this._createPako(),this._pako.push(g.transformTo(h,E.data),!1)},w.prototype.flush=function(){x.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){x.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new m[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var E=this;this._pako.onData=function(C){E.push({data:C,meta:E.meta})}},p.compressWorker=function(E){return new w("Deflate",E)},p.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,c,p){function f(S,R){var v,A="";for(v=0;v<R;v++)A+=String.fromCharCode(255&S),S>>>=8;return A}function m(S,R,v,A,_,I){var D,F,k=S.file,$=S.compression,H=I!==h.utf8encode,G=g.transformTo("string",I(k.name)),U=g.transformTo("string",h.utf8encode(k.name)),ae=k.comment,te=g.transformTo("string",I(ae)),L=g.transformTo("string",h.utf8encode(ae)),W=U.length!==k.name.length,y=L.length!==ae.length,X="",V="",P="",ce=k.dir,J=k.date,me={crc32:0,compressedSize:0,uncompressedSize:0};R&&!v||(me.crc32=S.crc32,me.compressedSize=S.compressedSize,me.uncompressedSize=S.uncompressedSize);var N=0;R&&(N|=8),H||!W&&!y||(N|=2048);var j=0,se=0;ce&&(j|=16),_==="UNIX"?(se=798,j|=(function(le,Ee){var Ne=le;return le||(Ne=Ee?16893:33204),(65535&Ne)<<16})(k.unixPermissions,ce)):(se=20,j|=(function(le){return 63&(le||0)})(k.dosPermissions)),D=J.getUTCHours(),D<<=6,D|=J.getUTCMinutes(),D<<=5,D|=J.getUTCSeconds()/2,F=J.getUTCFullYear()-1980,F<<=4,F|=J.getUTCMonth()+1,F<<=5,F|=J.getUTCDate(),W&&(V=f(1,1)+f(w(G),4)+U,X+="up"+f(V.length,2)+V),y&&(P=f(1,1)+f(w(te),4)+L,X+="uc"+f(P.length,2)+P);var re="";return re+=`
\0`,re+=f(N,2),re+=$.magic,re+=f(D,2),re+=f(F,2),re+=f(me.crc32,4),re+=f(me.compressedSize,4),re+=f(me.uncompressedSize,4),re+=f(G.length,2),re+=f(X.length,2),{fileRecord:E.LOCAL_FILE_HEADER+re+G+X,dirRecord:E.CENTRAL_FILE_HEADER+f(se,2)+re+f(te.length,2)+"\0\0\0\0"+f(j,4)+f(A,4)+G+X+te}}var g=l("../utils"),x=l("../stream/GenericWorker"),h=l("../utf8"),w=l("../crc32"),E=l("../signature");function C(S,R,v,A){x.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=R,this.zipPlatform=v,this.encodeFileName=A,this.streamFiles=S,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}g.inherits(C,x),C.prototype.push=function(S){var R=S.meta.percent||0,v=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(S):(this.bytesWritten+=S.data.length,x.prototype.push.call(this,{data:S.data,meta:{currentFile:this.currentFile,percent:v?(R+100*(v-A-1))/v:100}}))},C.prototype.openedSource=function(S){this.currentSourceOffset=this.bytesWritten,this.currentFile=S.file.name;var R=this.streamFiles&&!S.file.dir;if(R){var v=m(S,R,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:v.fileRecord,meta:{percent:0}})}else this.accumulate=!0},C.prototype.closedSource=function(S){this.accumulate=!1;var R=this.streamFiles&&!S.file.dir,v=m(S,R,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(v.dirRecord),R)this.push({data:(function(A){return E.DATA_DESCRIPTOR+f(A.crc32,4)+f(A.compressedSize,4)+f(A.uncompressedSize,4)})(S),meta:{percent:100}});else for(this.push({data:v.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},C.prototype.flush=function(){for(var S=this.bytesWritten,R=0;R<this.dirRecords.length;R++)this.push({data:this.dirRecords[R],meta:{percent:100}});var v=this.bytesWritten-S,A=(function(_,I,D,F,k){var $=g.transformTo("string",k(F));return E.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(_,2)+f(_,2)+f(I,4)+f(D,4)+f($.length,2)+$})(this.dirRecords.length,v,S,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},C.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},C.prototype.registerPrevious=function(S){this._sources.push(S);var R=this;return S.on("data",function(v){R.processChunk(v)}),S.on("end",function(){R.closedSource(R.previous.streamInfo),R._sources.length?R.prepareNextSource():R.end()}),S.on("error",function(v){R.error(v)}),this},C.prototype.resume=function(){return!!x.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},C.prototype.error=function(S){var R=this._sources;if(!x.prototype.error.call(this,S))return!1;for(var v=0;v<R.length;v++)try{R[v].error(S)}catch{}return!0},C.prototype.lock=function(){x.prototype.lock.call(this);for(var S=this._sources,R=0;R<S.length;R++)S[R].lock()},c.exports=C},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,c,p){var f=l("../compressions"),m=l("./ZipFileWorker");p.generateWorker=function(g,x,h){var w=new m(x.streamFiles,h,x.platform,x.encodeFileName),E=0;try{g.forEach(function(C,S){E++;var R=(function(I,D){var F=I||D,k=f[F];if(!k)throw new Error(F+" is not a valid compression method !");return k})(S.options.compression,x.compression),v=S.options.compressionOptions||x.compressionOptions||{},A=S.dir,_=S.date;S._compressWorker(R,v).withStreamInfo("file",{name:C,dir:A,date:_,comment:S.comment||"",unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions}).pipe(w)}),w.entriesCount=E}catch(C){w.error(C)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,c,p){function f(){if(!(this instanceof f))return new f;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var m=new f;for(var g in this)typeof this[g]!="function"&&(m[g]=this[g]);return m}}(f.prototype=l("./object")).loadAsync=l("./load"),f.support=l("./support"),f.defaults=l("./defaults"),f.version="3.10.1",f.loadAsync=function(m,g){return new f().loadAsync(m,g)},f.external=l("./external"),c.exports=f},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,c,p){var f=l("./utils"),m=l("./external"),g=l("./utf8"),x=l("./zipEntries"),h=l("./stream/Crc32Probe"),w=l("./nodejsUtils");function E(C){return new m.Promise(function(S,R){var v=C.decompressed.getContentWorker().pipe(new h);v.on("error",function(A){R(A)}).on("end",function(){v.streamInfo.crc32!==C.decompressed.crc32?R(new Error("Corrupted zip : CRC32 mismatch")):S()}).resume()})}c.exports=function(C,S){var R=this;return S=f.extend(S||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:g.utf8decode}),w.isNode&&w.isStream(C)?m.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):f.prepareContent("the loaded zip file",C,!0,S.optimizedBinaryString,S.base64).then(function(v){var A=new x(S);return A.load(v),A}).then(function(v){var A=[m.Promise.resolve(v)],_=v.files;if(S.checkCRC32)for(var I=0;I<_.length;I++)A.push(E(_[I]));return m.Promise.all(A)}).then(function(v){for(var A=v.shift(),_=A.files,I=0;I<_.length;I++){var D=_[I],F=D.fileNameStr,k=f.resolve(D.fileNameStr);R.file(k,D.decompressed,{binary:!0,optimizedBinaryString:!0,date:D.date,dir:D.dir,comment:D.fileCommentStr.length?D.fileCommentStr:null,unixPermissions:D.unixPermissions,dosPermissions:D.dosPermissions,createFolders:S.createFolders}),D.dir||(R.file(k).unsafeOriginalName=F)}return A.zipComment.length&&(R.comment=A.zipComment),R})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,c,p){var f=l("../utils"),m=l("../stream/GenericWorker");function g(x,h){m.call(this,"Nodejs stream input adapter for "+x),this._upstreamEnded=!1,this._bindStream(h)}f.inherits(g,m),g.prototype._bindStream=function(x){var h=this;(this._stream=x).pause(),x.on("data",function(w){h.push({data:w,meta:{percent:0}})}).on("error",function(w){h.isPaused?this.generatedError=w:h.error(w)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},g.prototype.pause=function(){return!!m.prototype.pause.call(this)&&(this._stream.pause(),!0)},g.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},c.exports=g},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,c,p){var f=l("readable-stream").Readable;function m(g,x,h){f.call(this,x),this._helper=g;var w=this;g.on("data",function(E,C){w.push(E)||w._helper.pause(),h&&h(C)}).on("error",function(E){w.emit("error",E)}).on("end",function(){w.push(null)})}l("../utils").inherits(m,f),m.prototype._read=function(){this._helper.resume()},c.exports=m},{"../utils":32,"readable-stream":16}],14:[function(l,c,p){c.exports={isNode:typeof Buffer<"u",newBufferFrom:function(f,m){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(f,m);if(typeof f=="number")throw new Error('The "data" argument must not be a number');return new Buffer(f,m)},allocBuffer:function(f){if(Buffer.alloc)return Buffer.alloc(f);var m=new Buffer(f);return m.fill(0),m},isBuffer:function(f){return Buffer.isBuffer(f)},isStream:function(f){return f&&typeof f.on=="function"&&typeof f.pause=="function"&&typeof f.resume=="function"}}},{}],15:[function(l,c,p){function f(k,$,H){var G,U=g.getTypeOf($),ae=g.extend(H||{},w);ae.date=ae.date||new Date,ae.compression!==null&&(ae.compression=ae.compression.toUpperCase()),typeof ae.unixPermissions=="string"&&(ae.unixPermissions=parseInt(ae.unixPermissions,8)),ae.unixPermissions&&16384&ae.unixPermissions&&(ae.dir=!0),ae.dosPermissions&&16&ae.dosPermissions&&(ae.dir=!0),ae.dir&&(k=_(k)),ae.createFolders&&(G=A(k))&&I.call(this,G,!0);var te=U==="string"&&ae.binary===!1&&ae.base64===!1;H&&H.binary!==void 0||(ae.binary=!te),($ instanceof E&&$.uncompressedSize===0||ae.dir||!$||$.length===0)&&(ae.base64=!1,ae.binary=!0,$="",ae.compression="STORE",U="string");var L=null;L=$ instanceof E||$ instanceof x?$:R.isNode&&R.isStream($)?new v(k,$):g.prepareContent(k,$,ae.binary,ae.optimizedBinaryString,ae.base64);var W=new C(k,L,ae);this.files[k]=W}var m=l("./utf8"),g=l("./utils"),x=l("./stream/GenericWorker"),h=l("./stream/StreamHelper"),w=l("./defaults"),E=l("./compressedObject"),C=l("./zipObject"),S=l("./generate"),R=l("./nodejsUtils"),v=l("./nodejs/NodejsStreamInputAdapter"),A=function(k){k.slice(-1)==="/"&&(k=k.substring(0,k.length-1));var $=k.lastIndexOf("/");return 0<$?k.substring(0,$):""},_=function(k){return k.slice(-1)!=="/"&&(k+="/"),k},I=function(k,$){return $=$!==void 0?$:w.createFolders,k=_(k),this.files[k]||f.call(this,k,null,{dir:!0,createFolders:$}),this.files[k]};function D(k){return Object.prototype.toString.call(k)==="[object RegExp]"}var F={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(k){var $,H,G;for($ in this.files)G=this.files[$],(H=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&k(H,G)},filter:function(k){var $=[];return this.forEach(function(H,G){k(H,G)&&$.push(G)}),$},file:function(k,$,H){if(arguments.length!==1)return k=this.root+k,f.call(this,k,$,H),this;if(D(k)){var G=k;return this.filter(function(ae,te){return!te.dir&&G.test(ae)})}var U=this.files[this.root+k];return U&&!U.dir?U:null},folder:function(k){if(!k)return this;if(D(k))return this.filter(function(U,ae){return ae.dir&&k.test(U)});var $=this.root+k,H=I.call(this,$),G=this.clone();return G.root=H.name,G},remove:function(k){k=this.root+k;var $=this.files[k];if($||(k.slice(-1)!=="/"&&(k+="/"),$=this.files[k]),$&&!$.dir)delete this.files[k];else for(var H=this.filter(function(U,ae){return ae.name.slice(0,k.length)===k}),G=0;G<H.length;G++)delete this.files[H[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(k){var $,H={};try{if((H=g.extend(k||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m.utf8encode})).type=H.type.toLowerCase(),H.compression=H.compression.toUpperCase(),H.type==="binarystring"&&(H.type="string"),!H.type)throw new Error("No output type specified.");g.checkSupport(H.type),H.platform!=="darwin"&&H.platform!=="freebsd"&&H.platform!=="linux"&&H.platform!=="sunos"||(H.platform="UNIX"),H.platform==="win32"&&(H.platform="DOS");var G=H.comment||this.comment||"";$=S.generateWorker(this,H,G)}catch(U){($=new x("error")).error(U)}return new h($,H.type||"string",H.mimeType)},generateAsync:function(k,$){return this.generateInternalStream(k).accumulate($)},generateNodeStream:function(k,$){return(k=k||{}).type||(k.type="nodebuffer"),this.generateInternalStream(k).toNodejsStream($)}};c.exports=F},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,c,p){c.exports=l("stream")},{stream:void 0}],17:[function(l,c,p){var f=l("./DataReader");function m(g){f.call(this,g);for(var x=0;x<this.data.length;x++)g[x]=255&g[x]}l("../utils").inherits(m,f),m.prototype.byteAt=function(g){return this.data[this.zero+g]},m.prototype.lastIndexOfSignature=function(g){for(var x=g.charCodeAt(0),h=g.charCodeAt(1),w=g.charCodeAt(2),E=g.charCodeAt(3),C=this.length-4;0<=C;--C)if(this.data[C]===x&&this.data[C+1]===h&&this.data[C+2]===w&&this.data[C+3]===E)return C-this.zero;return-1},m.prototype.readAndCheckSignature=function(g){var x=g.charCodeAt(0),h=g.charCodeAt(1),w=g.charCodeAt(2),E=g.charCodeAt(3),C=this.readData(4);return x===C[0]&&h===C[1]&&w===C[2]&&E===C[3]},m.prototype.readData=function(g){if(this.checkOffset(g),g===0)return[];var x=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,x},c.exports=m},{"../utils":32,"./DataReader":18}],18:[function(l,c,p){var f=l("../utils");function m(g){this.data=g,this.length=g.length,this.index=0,this.zero=0}m.prototype={checkOffset:function(g){this.checkIndex(this.index+g)},checkIndex:function(g){if(this.length<this.zero+g||g<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+g+"). Corrupted zip ?")},setIndex:function(g){this.checkIndex(g),this.index=g},skip:function(g){this.setIndex(this.index+g)},byteAt:function(){},readInt:function(g){var x,h=0;for(this.checkOffset(g),x=this.index+g-1;x>=this.index;x--)h=(h<<8)+this.byteAt(x);return this.index+=g,h},readString:function(g){return f.transformTo("string",this.readData(g))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var g=this.readInt(4);return new Date(Date.UTC(1980+(g>>25&127),(g>>21&15)-1,g>>16&31,g>>11&31,g>>5&63,(31&g)<<1))}},c.exports=m},{"../utils":32}],19:[function(l,c,p){var f=l("./Uint8ArrayReader");function m(g){f.call(this,g)}l("../utils").inherits(m,f),m.prototype.readData=function(g){this.checkOffset(g);var x=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,x},c.exports=m},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,c,p){var f=l("./DataReader");function m(g){f.call(this,g)}l("../utils").inherits(m,f),m.prototype.byteAt=function(g){return this.data.charCodeAt(this.zero+g)},m.prototype.lastIndexOfSignature=function(g){return this.data.lastIndexOf(g)-this.zero},m.prototype.readAndCheckSignature=function(g){return g===this.readData(4)},m.prototype.readData=function(g){this.checkOffset(g);var x=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,x},c.exports=m},{"../utils":32,"./DataReader":18}],21:[function(l,c,p){var f=l("./ArrayReader");function m(g){f.call(this,g)}l("../utils").inherits(m,f),m.prototype.readData=function(g){if(this.checkOffset(g),g===0)return new Uint8Array(0);var x=this.data.subarray(this.zero+this.index,this.zero+this.index+g);return this.index+=g,x},c.exports=m},{"../utils":32,"./ArrayReader":17}],22:[function(l,c,p){var f=l("../utils"),m=l("../support"),g=l("./ArrayReader"),x=l("./StringReader"),h=l("./NodeBufferReader"),w=l("./Uint8ArrayReader");c.exports=function(E){var C=f.getTypeOf(E);return f.checkSupport(C),C!=="string"||m.uint8array?C==="nodebuffer"?new h(E):m.uint8array?new w(f.transformTo("uint8array",E)):new g(f.transformTo("array",E)):new x(E)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,c,p){p.LOCAL_FILE_HEADER="PK",p.CENTRAL_FILE_HEADER="PK",p.CENTRAL_DIRECTORY_END="PK",p.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",p.ZIP64_CENTRAL_DIRECTORY_END="PK",p.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,c,p){var f=l("./GenericWorker"),m=l("../utils");function g(x){f.call(this,"ConvertWorker to "+x),this.destType=x}m.inherits(g,f),g.prototype.processChunk=function(x){this.push({data:m.transformTo(this.destType,x.data),meta:x.meta})},c.exports=g},{"../utils":32,"./GenericWorker":28}],25:[function(l,c,p){var f=l("./GenericWorker"),m=l("../crc32");function g(){f.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(g,f),g.prototype.processChunk=function(x){this.streamInfo.crc32=m(x.data,this.streamInfo.crc32||0),this.push(x)},c.exports=g},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,c,p){var f=l("../utils"),m=l("./GenericWorker");function g(x){m.call(this,"DataLengthProbe for "+x),this.propName=x,this.withStreamInfo(x,0)}f.inherits(g,m),g.prototype.processChunk=function(x){if(x){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+x.data.length}m.prototype.processChunk.call(this,x)},c.exports=g},{"../utils":32,"./GenericWorker":28}],27:[function(l,c,p){var f=l("../utils"),m=l("./GenericWorker");function g(x){m.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,x.then(function(w){h.dataIsReady=!0,h.data=w,h.max=w&&w.length||0,h.type=f.getTypeOf(w),h.isPaused||h._tickAndRepeat()},function(w){h.error(w)})}f.inherits(g,m),g.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this.data=null},g.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,f.delay(this._tickAndRepeat,[],this)),!0)},g.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(f.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},g.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var x=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":x=this.data.substring(this.index,h);break;case"uint8array":x=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":x=this.data.slice(this.index,h)}return this.index=h,this.push({data:x,meta:{percent:this.max?this.index/this.max*100:0}})},c.exports=g},{"../utils":32,"./GenericWorker":28}],28:[function(l,c,p){function f(m){this.name=m||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}f.prototype={push:function(m){this.emit("data",m)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(m){this.emit("error",m)}return!0},error:function(m){return!this.isFinished&&(this.isPaused?this.generatedError=m:(this.isFinished=!0,this.emit("error",m),this.previous&&this.previous.error(m),this.cleanUp()),!0)},on:function(m,g){return this._listeners[m].push(g),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(m,g){if(this._listeners[m])for(var x=0;x<this._listeners[m].length;x++)this._listeners[m][x].call(this,g)},pipe:function(m){return m.registerPrevious(this)},registerPrevious:function(m){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=m.streamInfo,this.mergeStreamInfo(),this.previous=m;var g=this;return m.on("data",function(x){g.processChunk(x)}),m.on("end",function(){g.end()}),m.on("error",function(x){g.error(x)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var m=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),m=!0),this.previous&&this.previous.resume(),!m},flush:function(){},processChunk:function(m){this.push(m)},withStreamInfo:function(m,g){return this.extraStreamInfo[m]=g,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var m in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,m)&&(this.streamInfo[m]=this.extraStreamInfo[m])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var m="Worker "+this.name;return this.previous?this.previous+" -> "+m:m}},c.exports=f},{}],29:[function(l,c,p){var f=l("../utils"),m=l("./ConvertWorker"),g=l("./GenericWorker"),x=l("../base64"),h=l("../support"),w=l("../external"),E=null;if(h.nodestream)try{E=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function C(R,v){return new w.Promise(function(A,_){var I=[],D=R._internalType,F=R._outputType,k=R._mimeType;R.on("data",function($,H){I.push($),v&&v(H)}).on("error",function($){I=[],_($)}).on("end",function(){try{var $=(function(H,G,U){switch(H){case"blob":return f.newBlob(f.transformTo("arraybuffer",G),U);case"base64":return x.encode(G);default:return f.transformTo(H,G)}})(F,(function(H,G){var U,ae=0,te=null,L=0;for(U=0;U<G.length;U++)L+=G[U].length;switch(H){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(te=new Uint8Array(L),U=0;U<G.length;U++)te.set(G[U],ae),ae+=G[U].length;return te;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+H+"'")}})(D,I),k);A($)}catch(H){_(H)}I=[]}).resume()})}function S(R,v,A){var _=v;switch(v){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=v,this._mimeType=A,f.checkSupport(_),this._worker=R.pipe(new m(_)),R.lock()}catch(I){this._worker=new g("error"),this._worker.error(I)}}S.prototype={accumulate:function(R){return C(this,R)},on:function(R,v){var A=this;return R==="data"?this._worker.on(R,function(_){v.call(A,_.data,_.meta)}):this._worker.on(R,function(){f.delay(v,arguments,A)}),this},resume:function(){return f.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(R){if(f.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new E(this,{objectMode:this._outputType!=="nodebuffer"},R)}},c.exports=S},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,c,p){if(p.base64=!0,p.array=!0,p.string=!0,p.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",p.nodebuffer=typeof Buffer<"u",p.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")p.blob=!1;else{var f=new ArrayBuffer(0);try{p.blob=new Blob([f],{type:"application/zip"}).size===0}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);m.append(f),p.blob=m.getBlob("application/zip").size===0}catch{p.blob=!1}}}try{p.nodestream=!!l("readable-stream").Readable}catch{p.nodestream=!1}},{"readable-stream":16}],31:[function(l,c,p){for(var f=l("./utils"),m=l("./support"),g=l("./nodejsUtils"),x=l("./stream/GenericWorker"),h=new Array(256),w=0;w<256;w++)h[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;h[254]=h[254]=1;function E(){x.call(this,"utf-8 decode"),this.leftOver=null}function C(){x.call(this,"utf-8 encode")}p.utf8encode=function(S){return m.nodebuffer?g.newBufferFrom(S,"utf-8"):(function(R){var v,A,_,I,D,F=R.length,k=0;for(I=0;I<F;I++)(64512&(A=R.charCodeAt(I)))==55296&&I+1<F&&(64512&(_=R.charCodeAt(I+1)))==56320&&(A=65536+(A-55296<<10)+(_-56320),I++),k+=A<128?1:A<2048?2:A<65536?3:4;for(v=m.uint8array?new Uint8Array(k):new Array(k),I=D=0;D<k;I++)(64512&(A=R.charCodeAt(I)))==55296&&I+1<F&&(64512&(_=R.charCodeAt(I+1)))==56320&&(A=65536+(A-55296<<10)+(_-56320),I++),A<128?v[D++]=A:(A<2048?v[D++]=192|A>>>6:(A<65536?v[D++]=224|A>>>12:(v[D++]=240|A>>>18,v[D++]=128|A>>>12&63),v[D++]=128|A>>>6&63),v[D++]=128|63&A);return v})(S)},p.utf8decode=function(S){return m.nodebuffer?f.transformTo("nodebuffer",S).toString("utf-8"):(function(R){var v,A,_,I,D=R.length,F=new Array(2*D);for(v=A=0;v<D;)if((_=R[v++])<128)F[A++]=_;else if(4<(I=h[_]))F[A++]=65533,v+=I-1;else{for(_&=I===2?31:I===3?15:7;1<I&&v<D;)_=_<<6|63&R[v++],I--;1<I?F[A++]=65533:_<65536?F[A++]=_:(_-=65536,F[A++]=55296|_>>10&1023,F[A++]=56320|1023&_)}return F.length!==A&&(F.subarray?F=F.subarray(0,A):F.length=A),f.applyFromCharCode(F)})(S=f.transformTo(m.uint8array?"uint8array":"array",S))},f.inherits(E,x),E.prototype.processChunk=function(S){var R=f.transformTo(m.uint8array?"uint8array":"array",S.data);if(this.leftOver&&this.leftOver.length){if(m.uint8array){var v=R;(R=new Uint8Array(v.length+this.leftOver.length)).set(this.leftOver,0),R.set(v,this.leftOver.length)}else R=this.leftOver.concat(R);this.leftOver=null}var A=(function(I,D){var F;for((D=D||I.length)>I.length&&(D=I.length),F=D-1;0<=F&&(192&I[F])==128;)F--;return F<0||F===0?D:F+h[I[F]]>D?F:D})(R),_=R;A!==R.length&&(m.uint8array?(_=R.subarray(0,A),this.leftOver=R.subarray(A,R.length)):(_=R.slice(0,A),this.leftOver=R.slice(A,R.length))),this.push({data:p.utf8decode(_),meta:S.meta})},E.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:p.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},p.Utf8DecodeWorker=E,f.inherits(C,x),C.prototype.processChunk=function(S){this.push({data:p.utf8encode(S.data),meta:S.meta})},p.Utf8EncodeWorker=C},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,c,p){var f=l("./support"),m=l("./base64"),g=l("./nodejsUtils"),x=l("./external");function h(v){return v}function w(v,A){for(var _=0;_<v.length;++_)A[_]=255&v.charCodeAt(_);return A}l("setimmediate"),p.newBlob=function(v,A){p.checkSupport("blob");try{return new Blob([v],{type:A})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(v),_.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var E={stringifyByChunk:function(v,A,_){var I=[],D=0,F=v.length;if(F<=_)return String.fromCharCode.apply(null,v);for(;D<F;)A==="array"||A==="nodebuffer"?I.push(String.fromCharCode.apply(null,v.slice(D,Math.min(D+_,F)))):I.push(String.fromCharCode.apply(null,v.subarray(D,Math.min(D+_,F)))),D+=_;return I.join("")},stringifyByChar:function(v){for(var A="",_=0;_<v.length;_++)A+=String.fromCharCode(v[_]);return A},applyCanBeUsed:{uint8array:(function(){try{return f.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return f.nodebuffer&&String.fromCharCode.apply(null,g.allocBuffer(1)).length===1}catch{return!1}})()}};function C(v){var A=65536,_=p.getTypeOf(v),I=!0;if(_==="uint8array"?I=E.applyCanBeUsed.uint8array:_==="nodebuffer"&&(I=E.applyCanBeUsed.nodebuffer),I)for(;1<A;)try{return E.stringifyByChunk(v,_,A)}catch{A=Math.floor(A/2)}return E.stringifyByChar(v)}function S(v,A){for(var _=0;_<v.length;_++)A[_]=v[_];return A}p.applyFromCharCode=C;var R={};R.string={string:h,array:function(v){return w(v,new Array(v.length))},arraybuffer:function(v){return R.string.uint8array(v).buffer},uint8array:function(v){return w(v,new Uint8Array(v.length))},nodebuffer:function(v){return w(v,g.allocBuffer(v.length))}},R.array={string:C,array:h,arraybuffer:function(v){return new Uint8Array(v).buffer},uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return g.newBufferFrom(v)}},R.arraybuffer={string:function(v){return C(new Uint8Array(v))},array:function(v){return S(new Uint8Array(v),new Array(v.byteLength))},arraybuffer:h,uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return g.newBufferFrom(new Uint8Array(v))}},R.uint8array={string:C,array:function(v){return S(v,new Array(v.length))},arraybuffer:function(v){return v.buffer},uint8array:h,nodebuffer:function(v){return g.newBufferFrom(v)}},R.nodebuffer={string:C,array:function(v){return S(v,new Array(v.length))},arraybuffer:function(v){return R.nodebuffer.uint8array(v).buffer},uint8array:function(v){return S(v,new Uint8Array(v.length))},nodebuffer:h},p.transformTo=function(v,A){if(A=A||"",!v)return A;p.checkSupport(v);var _=p.getTypeOf(A);return R[_][v](A)},p.resolve=function(v){for(var A=v.split("/"),_=[],I=0;I<A.length;I++){var D=A[I];D==="."||D===""&&I!==0&&I!==A.length-1||(D===".."?_.pop():_.push(D))}return _.join("/")},p.getTypeOf=function(v){return typeof v=="string"?"string":Object.prototype.toString.call(v)==="[object Array]"?"array":f.nodebuffer&&g.isBuffer(v)?"nodebuffer":f.uint8array&&v instanceof Uint8Array?"uint8array":f.arraybuffer&&v instanceof ArrayBuffer?"arraybuffer":void 0},p.checkSupport=function(v){if(!f[v.toLowerCase()])throw new Error(v+" is not supported by this platform")},p.MAX_VALUE_16BITS=65535,p.MAX_VALUE_32BITS=-1,p.pretty=function(v){var A,_,I="";for(_=0;_<(v||"").length;_++)I+="\\x"+((A=v.charCodeAt(_))<16?"0":"")+A.toString(16).toUpperCase();return I},p.delay=function(v,A,_){setImmediate(function(){v.apply(_||null,A||[])})},p.inherits=function(v,A){function _(){}_.prototype=A.prototype,v.prototype=new _},p.extend=function(){var v,A,_={};for(v=0;v<arguments.length;v++)for(A in arguments[v])Object.prototype.hasOwnProperty.call(arguments[v],A)&&_[A]===void 0&&(_[A]=arguments[v][A]);return _},p.prepareContent=function(v,A,_,I,D){return x.Promise.resolve(A).then(function(F){return f.blob&&(F instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(F))!==-1)&&typeof FileReader<"u"?new x.Promise(function(k,$){var H=new FileReader;H.onload=function(G){k(G.target.result)},H.onerror=function(G){$(G.target.error)},H.readAsArrayBuffer(F)}):F}).then(function(F){var k=p.getTypeOf(F);return k?(k==="arraybuffer"?F=p.transformTo("uint8array",F):k==="string"&&(D?F=m.decode(F):_&&I!==!0&&(F=(function($){return w($,f.uint8array?new Uint8Array($.length):new Array($.length))})(F))),F):x.Promise.reject(new Error("Can't read the data of '"+v+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,c,p){var f=l("./reader/readerFor"),m=l("./utils"),g=l("./signature"),x=l("./zipEntry"),h=l("./support");function w(E){this.files=[],this.loadOptions=E}w.prototype={checkSignature:function(E){if(!this.reader.readAndCheckSignature(E)){this.reader.index-=4;var C=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+m.pretty(C)+", expected "+m.pretty(E)+")")}},isSignature:function(E,C){var S=this.reader.index;this.reader.setIndex(E);var R=this.reader.readString(4)===C;return this.reader.setIndex(S),R},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var E=this.reader.readData(this.zipCommentLength),C=h.uint8array?"uint8array":"array",S=m.transformTo(C,E);this.zipComment=this.loadOptions.decodeFileName(S)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var E,C,S,R=this.zip64EndOfCentralSize-44;0<R;)E=this.reader.readInt(2),C=this.reader.readInt(4),S=this.reader.readData(C),this.zip64ExtensibleData[E]={id:E,length:C,value:S}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var E,C;for(E=0;E<this.files.length;E++)C=this.files[E],this.reader.setIndex(C.localHeaderOffset),this.checkSignature(g.LOCAL_FILE_HEADER),C.readLocalPart(this.reader),C.handleUTF8(),C.processAttributes()},readCentralDir:function(){var E;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);)(E=new x({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(E);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var E=this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END);if(E<0)throw this.isSignature(0,g.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(E);var C=E;if(this.checkSignature(g.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===m.MAX_VALUE_16BITS||this.diskWithCentralDirStart===m.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===m.MAX_VALUE_16BITS||this.centralDirRecords===m.MAX_VALUE_16BITS||this.centralDirSize===m.MAX_VALUE_32BITS||this.centralDirOffset===m.MAX_VALUE_32BITS){if(this.zip64=!0,(E=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(E),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,g.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var S=this.centralDirOffset+this.centralDirSize;this.zip64&&(S+=20,S+=12+this.zip64EndOfCentralSize);var R=C-S;if(0<R)this.isSignature(C,g.CENTRAL_FILE_HEADER)||(this.reader.zero=R);else if(R<0)throw new Error("Corrupted zip: missing "+Math.abs(R)+" bytes.")},prepareReader:function(E){this.reader=f(E)},load:function(E){this.prepareReader(E),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},c.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,c,p){var f=l("./reader/readerFor"),m=l("./utils"),g=l("./compressedObject"),x=l("./crc32"),h=l("./utf8"),w=l("./compressions"),E=l("./support");function C(S,R){this.options=S,this.loadOptions=R}C.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(S){var R,v;if(S.skip(22),this.fileNameLength=S.readInt(2),v=S.readInt(2),this.fileName=S.readData(this.fileNameLength),S.skip(v),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((R=(function(A){for(var _ in w)if(Object.prototype.hasOwnProperty.call(w,_)&&w[_].magic===A)return w[_];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+m.pretty(this.compressionMethod)+" unknown (inner file : "+m.transformTo("string",this.fileName)+")");this.decompressed=new g(this.compressedSize,this.uncompressedSize,this.crc32,R,S.readData(this.compressedSize))},readCentralPart:function(S){this.versionMadeBy=S.readInt(2),S.skip(2),this.bitFlag=S.readInt(2),this.compressionMethod=S.readString(2),this.date=S.readDate(),this.crc32=S.readInt(4),this.compressedSize=S.readInt(4),this.uncompressedSize=S.readInt(4);var R=S.readInt(2);if(this.extraFieldsLength=S.readInt(2),this.fileCommentLength=S.readInt(2),this.diskNumberStart=S.readInt(2),this.internalFileAttributes=S.readInt(2),this.externalFileAttributes=S.readInt(4),this.localHeaderOffset=S.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");S.skip(R),this.readExtraFields(S),this.parseZIP64ExtraField(S),this.fileComment=S.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var S=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),S==0&&(this.dosPermissions=63&this.externalFileAttributes),S==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var S=f(this.extraFields[1].value);this.uncompressedSize===m.MAX_VALUE_32BITS&&(this.uncompressedSize=S.readInt(8)),this.compressedSize===m.MAX_VALUE_32BITS&&(this.compressedSize=S.readInt(8)),this.localHeaderOffset===m.MAX_VALUE_32BITS&&(this.localHeaderOffset=S.readInt(8)),this.diskNumberStart===m.MAX_VALUE_32BITS&&(this.diskNumberStart=S.readInt(4))}},readExtraFields:function(S){var R,v,A,_=S.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});S.index+4<_;)R=S.readInt(2),v=S.readInt(2),A=S.readData(v),this.extraFields[R]={id:R,length:v,value:A};S.setIndex(_)},handleUTF8:function(){var S=E.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var R=this.findExtraFieldUnicodePath();if(R!==null)this.fileNameStr=R;else{var v=m.transformTo(S,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(v)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var _=m.transformTo(S,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var S=this.extraFields[28789];if(S){var R=f(S.value);return R.readInt(1)!==1||x(this.fileName)!==R.readInt(4)?null:h.utf8decode(R.readData(S.length-5))}return null},findExtraFieldUnicodeComment:function(){var S=this.extraFields[25461];if(S){var R=f(S.value);return R.readInt(1)!==1||x(this.fileComment)!==R.readInt(4)?null:h.utf8decode(R.readData(S.length-5))}return null}},c.exports=C},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,c,p){function f(R,v,A){this.name=R,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=v,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var m=l("./stream/StreamHelper"),g=l("./stream/DataWorker"),x=l("./utf8"),h=l("./compressedObject"),w=l("./stream/GenericWorker");f.prototype={internalStream:function(R){var v=null,A="string";try{if(!R)throw new Error("No output type specified.");var _=(A=R.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),v=this._decompressWorker();var I=!this._dataBinary;I&&!_&&(v=v.pipe(new x.Utf8EncodeWorker)),!I&&_&&(v=v.pipe(new x.Utf8DecodeWorker))}catch(D){(v=new w("error")).error(D)}return new m(v,A,"")},async:function(R,v){return this.internalStream(R).accumulate(v)},nodeStream:function(R,v){return this.internalStream(R||"nodebuffer").toNodejsStream(v)},_compressWorker:function(R,v){if(this._data instanceof h&&this._data.compression.magic===R.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new x.Utf8EncodeWorker)),h.createWorkerFrom(A,R,v)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof w?this._data:new g(this._data)}};for(var E=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],C=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},S=0;S<E.length;S++)f.prototype[E[S]]=C;c.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,c,p){(function(f){var m,g,x=f.MutationObserver||f.WebKitMutationObserver;if(x){var h=0,w=new x(R),E=f.document.createTextNode("");w.observe(E,{characterData:!0}),m=function(){E.data=h=++h%2}}else if(f.setImmediate||f.MessageChannel===void 0)m="document"in f&&"onreadystatechange"in f.document.createElement("script")?function(){var v=f.document.createElement("script");v.onreadystatechange=function(){R(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},f.document.documentElement.appendChild(v)}:function(){setTimeout(R,0)};else{var C=new f.MessageChannel;C.port1.onmessage=R,m=function(){C.port2.postMessage(0)}}var S=[];function R(){var v,A;g=!0;for(var _=S.length;_;){for(A=S,S=[],v=-1;++v<_;)A[v]();_=S.length}g=!1}c.exports=function(v){S.push(v)!==1||g||m()}}).call(this,typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,c,p){var f=l("immediate");function m(){}var g={},x=["REJECTED"],h=["FULFILLED"],w=["PENDING"];function E(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,_!==m&&v(this,_)}function C(_,I,D){this.promise=_,typeof I=="function"&&(this.onFulfilled=I,this.callFulfilled=this.otherCallFulfilled),typeof D=="function"&&(this.onRejected=D,this.callRejected=this.otherCallRejected)}function S(_,I,D){f(function(){var F;try{F=I(D)}catch(k){return g.reject(_,k)}F===_?g.reject(_,new TypeError("Cannot resolve promise with itself")):g.resolve(_,F)})}function R(_){var I=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof I=="function")return function(){I.apply(_,arguments)}}function v(_,I){var D=!1;function F(H){D||(D=!0,g.reject(_,H))}function k(H){D||(D=!0,g.resolve(_,H))}var $=A(function(){I(k,F)});$.status==="error"&&F($.value)}function A(_,I){var D={};try{D.value=_(I),D.status="success"}catch(F){D.status="error",D.value=F}return D}(c.exports=E).prototype.finally=function(_){if(typeof _!="function")return this;var I=this.constructor;return this.then(function(D){return I.resolve(_()).then(function(){return D})},function(D){return I.resolve(_()).then(function(){throw D})})},E.prototype.catch=function(_){return this.then(null,_)},E.prototype.then=function(_,I){if(typeof _!="function"&&this.state===h||typeof I!="function"&&this.state===x)return this;var D=new this.constructor(m);return this.state!==w?S(D,this.state===h?_:I,this.outcome):this.queue.push(new C(D,_,I)),D},C.prototype.callFulfilled=function(_){g.resolve(this.promise,_)},C.prototype.otherCallFulfilled=function(_){S(this.promise,this.onFulfilled,_)},C.prototype.callRejected=function(_){g.reject(this.promise,_)},C.prototype.otherCallRejected=function(_){S(this.promise,this.onRejected,_)},g.resolve=function(_,I){var D=A(R,I);if(D.status==="error")return g.reject(_,D.value);var F=D.value;if(F)v(_,F);else{_.state=h,_.outcome=I;for(var k=-1,$=_.queue.length;++k<$;)_.queue[k].callFulfilled(I)}return _},g.reject=function(_,I){_.state=x,_.outcome=I;for(var D=-1,F=_.queue.length;++D<F;)_.queue[D].callRejected(I);return _},E.resolve=function(_){return _ instanceof this?_:g.resolve(new this(m),_)},E.reject=function(_){var I=new this(m);return g.reject(I,_)},E.all=function(_){var I=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=_.length,F=!1;if(!D)return this.resolve([]);for(var k=new Array(D),$=0,H=-1,G=new this(m);++H<D;)U(_[H],H);return G;function U(ae,te){I.resolve(ae).then(function(L){k[te]=L,++$!==D||F||(F=!0,g.resolve(G,k))},function(L){F||(F=!0,g.reject(G,L))})}},E.race=function(_){var I=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var D=_.length,F=!1;if(!D)return this.resolve([]);for(var k=-1,$=new this(m);++k<D;)H=_[k],I.resolve(H).then(function(G){F||(F=!0,g.resolve($,G))},function(G){F||(F=!0,g.reject($,G))});var H;return $}},{immediate:36}],38:[function(l,c,p){var f={};(0,l("./lib/utils/common").assign)(f,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),c.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,c,p){var f=l("./zlib/deflate"),m=l("./utils/common"),g=l("./utils/strings"),x=l("./zlib/messages"),h=l("./zlib/zstream"),w=Object.prototype.toString,E=0,C=-1,S=0,R=8;function v(_){if(!(this instanceof v))return new v(_);this.options=m.assign({level:C,method:R,chunkSize:16384,windowBits:15,memLevel:8,strategy:S,to:""},_||{});var I=this.options;I.raw&&0<I.windowBits?I.windowBits=-I.windowBits:I.gzip&&0<I.windowBits&&I.windowBits<16&&(I.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var D=f.deflateInit2(this.strm,I.level,I.method,I.windowBits,I.memLevel,I.strategy);if(D!==E)throw new Error(x[D]);if(I.header&&f.deflateSetHeader(this.strm,I.header),I.dictionary){var F;if(F=typeof I.dictionary=="string"?g.string2buf(I.dictionary):w.call(I.dictionary)==="[object ArrayBuffer]"?new Uint8Array(I.dictionary):I.dictionary,(D=f.deflateSetDictionary(this.strm,F))!==E)throw new Error(x[D]);this._dict_set=!0}}function A(_,I){var D=new v(I);if(D.push(_,!0),D.err)throw D.msg||x[D.err];return D.result}v.prototype.push=function(_,I){var D,F,k=this.strm,$=this.options.chunkSize;if(this.ended)return!1;F=I===~~I?I:I===!0?4:0,typeof _=="string"?k.input=g.string2buf(_):w.call(_)==="[object ArrayBuffer]"?k.input=new Uint8Array(_):k.input=_,k.next_in=0,k.avail_in=k.input.length;do{if(k.avail_out===0&&(k.output=new m.Buf8($),k.next_out=0,k.avail_out=$),(D=f.deflate(k,F))!==1&&D!==E)return this.onEnd(D),!(this.ended=!0);k.avail_out!==0&&(k.avail_in!==0||F!==4&&F!==2)||(this.options.to==="string"?this.onData(g.buf2binstring(m.shrinkBuf(k.output,k.next_out))):this.onData(m.shrinkBuf(k.output,k.next_out)))}while((0<k.avail_in||k.avail_out===0)&&D!==1);return F===4?(D=f.deflateEnd(this.strm),this.onEnd(D),this.ended=!0,D===E):F!==2||(this.onEnd(E),!(k.avail_out=0))},v.prototype.onData=function(_){this.chunks.push(_)},v.prototype.onEnd=function(_){_===E&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},p.Deflate=v,p.deflate=A,p.deflateRaw=function(_,I){return(I=I||{}).raw=!0,A(_,I)},p.gzip=function(_,I){return(I=I||{}).gzip=!0,A(_,I)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,c,p){var f=l("./zlib/inflate"),m=l("./utils/common"),g=l("./utils/strings"),x=l("./zlib/constants"),h=l("./zlib/messages"),w=l("./zlib/zstream"),E=l("./zlib/gzheader"),C=Object.prototype.toString;function S(v){if(!(this instanceof S))return new S(v);this.options=m.assign({chunkSize:16384,windowBits:0,to:""},v||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||v&&v.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var _=f.inflateInit2(this.strm,A.windowBits);if(_!==x.Z_OK)throw new Error(h[_]);this.header=new E,f.inflateGetHeader(this.strm,this.header)}function R(v,A){var _=new S(A);if(_.push(v,!0),_.err)throw _.msg||h[_.err];return _.result}S.prototype.push=function(v,A){var _,I,D,F,k,$,H=this.strm,G=this.options.chunkSize,U=this.options.dictionary,ae=!1;if(this.ended)return!1;I=A===~~A?A:A===!0?x.Z_FINISH:x.Z_NO_FLUSH,typeof v=="string"?H.input=g.binstring2buf(v):C.call(v)==="[object ArrayBuffer]"?H.input=new Uint8Array(v):H.input=v,H.next_in=0,H.avail_in=H.input.length;do{if(H.avail_out===0&&(H.output=new m.Buf8(G),H.next_out=0,H.avail_out=G),(_=f.inflate(H,x.Z_NO_FLUSH))===x.Z_NEED_DICT&&U&&($=typeof U=="string"?g.string2buf(U):C.call(U)==="[object ArrayBuffer]"?new Uint8Array(U):U,_=f.inflateSetDictionary(this.strm,$)),_===x.Z_BUF_ERROR&&ae===!0&&(_=x.Z_OK,ae=!1),_!==x.Z_STREAM_END&&_!==x.Z_OK)return this.onEnd(_),!(this.ended=!0);H.next_out&&(H.avail_out!==0&&_!==x.Z_STREAM_END&&(H.avail_in!==0||I!==x.Z_FINISH&&I!==x.Z_SYNC_FLUSH)||(this.options.to==="string"?(D=g.utf8border(H.output,H.next_out),F=H.next_out-D,k=g.buf2string(H.output,D),H.next_out=F,H.avail_out=G-F,F&&m.arraySet(H.output,H.output,D,F,0),this.onData(k)):this.onData(m.shrinkBuf(H.output,H.next_out)))),H.avail_in===0&&H.avail_out===0&&(ae=!0)}while((0<H.avail_in||H.avail_out===0)&&_!==x.Z_STREAM_END);return _===x.Z_STREAM_END&&(I=x.Z_FINISH),I===x.Z_FINISH?(_=f.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===x.Z_OK):I!==x.Z_SYNC_FLUSH||(this.onEnd(x.Z_OK),!(H.avail_out=0))},S.prototype.onData=function(v){this.chunks.push(v)},S.prototype.onEnd=function(v){v===x.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},p.Inflate=S,p.inflate=R,p.inflateRaw=function(v,A){return(A=A||{}).raw=!0,R(v,A)},p.ungzip=R},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,c,p){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";p.assign=function(x){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var w=h.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var E in w)w.hasOwnProperty(E)&&(x[E]=w[E])}}return x},p.shrinkBuf=function(x,h){return x.length===h?x:x.subarray?x.subarray(0,h):(x.length=h,x)};var m={arraySet:function(x,h,w,E,C){if(h.subarray&&x.subarray)x.set(h.subarray(w,w+E),C);else for(var S=0;S<E;S++)x[C+S]=h[w+S]},flattenChunks:function(x){var h,w,E,C,S,R;for(h=E=0,w=x.length;h<w;h++)E+=x[h].length;for(R=new Uint8Array(E),h=C=0,w=x.length;h<w;h++)S=x[h],R.set(S,C),C+=S.length;return R}},g={arraySet:function(x,h,w,E,C){for(var S=0;S<E;S++)x[C+S]=h[w+S]},flattenChunks:function(x){return[].concat.apply([],x)}};p.setTyped=function(x){x?(p.Buf8=Uint8Array,p.Buf16=Uint16Array,p.Buf32=Int32Array,p.assign(p,m)):(p.Buf8=Array,p.Buf16=Array,p.Buf32=Array,p.assign(p,g))},p.setTyped(f)},{}],42:[function(l,c,p){var f=l("./common"),m=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch{m=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{g=!1}for(var x=new f.Buf8(256),h=0;h<256;h++)x[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function w(E,C){if(C<65537&&(E.subarray&&g||!E.subarray&&m))return String.fromCharCode.apply(null,f.shrinkBuf(E,C));for(var S="",R=0;R<C;R++)S+=String.fromCharCode(E[R]);return S}x[254]=x[254]=1,p.string2buf=function(E){var C,S,R,v,A,_=E.length,I=0;for(v=0;v<_;v++)(64512&(S=E.charCodeAt(v)))==55296&&v+1<_&&(64512&(R=E.charCodeAt(v+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),v++),I+=S<128?1:S<2048?2:S<65536?3:4;for(C=new f.Buf8(I),v=A=0;A<I;v++)(64512&(S=E.charCodeAt(v)))==55296&&v+1<_&&(64512&(R=E.charCodeAt(v+1)))==56320&&(S=65536+(S-55296<<10)+(R-56320),v++),S<128?C[A++]=S:(S<2048?C[A++]=192|S>>>6:(S<65536?C[A++]=224|S>>>12:(C[A++]=240|S>>>18,C[A++]=128|S>>>12&63),C[A++]=128|S>>>6&63),C[A++]=128|63&S);return C},p.buf2binstring=function(E){return w(E,E.length)},p.binstring2buf=function(E){for(var C=new f.Buf8(E.length),S=0,R=C.length;S<R;S++)C[S]=E.charCodeAt(S);return C},p.buf2string=function(E,C){var S,R,v,A,_=C||E.length,I=new Array(2*_);for(S=R=0;S<_;)if((v=E[S++])<128)I[R++]=v;else if(4<(A=x[v]))I[R++]=65533,S+=A-1;else{for(v&=A===2?31:A===3?15:7;1<A&&S<_;)v=v<<6|63&E[S++],A--;1<A?I[R++]=65533:v<65536?I[R++]=v:(v-=65536,I[R++]=55296|v>>10&1023,I[R++]=56320|1023&v)}return w(I,R)},p.utf8border=function(E,C){var S;for((C=C||E.length)>E.length&&(C=E.length),S=C-1;0<=S&&(192&E[S])==128;)S--;return S<0||S===0?C:S+x[E[S]]>C?S:C}},{"./common":41}],43:[function(l,c,p){c.exports=function(f,m,g,x){for(var h=65535&f|0,w=f>>>16&65535|0,E=0;g!==0;){for(g-=E=2e3<g?2e3:g;w=w+(h=h+m[x++]|0)|0,--E;);h%=65521,w%=65521}return h|w<<16|0}},{}],44:[function(l,c,p){c.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,c,p){var f=(function(){for(var m,g=[],x=0;x<256;x++){m=x;for(var h=0;h<8;h++)m=1&m?3988292384^m>>>1:m>>>1;g[x]=m}return g})();c.exports=function(m,g,x,h){var w=f,E=h+x;m^=-1;for(var C=h;C<E;C++)m=m>>>8^w[255&(m^g[C])];return-1^m}},{}],46:[function(l,c,p){var f,m=l("../utils/common"),g=l("./trees"),x=l("./adler32"),h=l("./crc32"),w=l("./messages"),E=0,C=4,S=0,R=-2,v=-1,A=4,_=2,I=8,D=9,F=286,k=30,$=19,H=2*F+1,G=15,U=3,ae=258,te=ae+U+1,L=42,W=113,y=1,X=2,V=3,P=4;function ce(b,ue){return b.msg=w[ue],ue}function J(b){return(b<<1)-(4<b?9:0)}function me(b){for(var ue=b.length;0<=--ue;)b[ue]=0}function N(b){var ue=b.state,ie=ue.pending;ie>b.avail_out&&(ie=b.avail_out),ie!==0&&(m.arraySet(b.output,ue.pending_buf,ue.pending_out,ie,b.next_out),b.next_out+=ie,ue.pending_out+=ie,b.total_out+=ie,b.avail_out-=ie,ue.pending-=ie,ue.pending===0&&(ue.pending_out=0))}function j(b,ue){g._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,ue),b.block_start=b.strstart,N(b.strm)}function se(b,ue){b.pending_buf[b.pending++]=ue}function re(b,ue){b.pending_buf[b.pending++]=ue>>>8&255,b.pending_buf[b.pending++]=255&ue}function le(b,ue){var ie,z,O=b.max_chain_length,q=b.strstart,he=b.prev_length,pe=b.nice_match,K=b.strstart>b.w_size-te?b.strstart-(b.w_size-te):0,ye=b.window,xe=b.w_mask,ve=b.prev,Re=b.strstart+ae,$e=ye[q+he-1],Le=ye[q+he];b.prev_length>=b.good_match&&(O>>=2),pe>b.lookahead&&(pe=b.lookahead);do if(ye[(ie=ue)+he]===Le&&ye[ie+he-1]===$e&&ye[ie]===ye[q]&&ye[++ie]===ye[q+1]){q+=2,ie++;do;while(ye[++q]===ye[++ie]&&ye[++q]===ye[++ie]&&ye[++q]===ye[++ie]&&ye[++q]===ye[++ie]&&ye[++q]===ye[++ie]&&ye[++q]===ye[++ie]&&ye[++q]===ye[++ie]&&ye[++q]===ye[++ie]&&q<Re);if(z=ae-(Re-q),q=Re-ae,he<z){if(b.match_start=ue,pe<=(he=z))break;$e=ye[q+he-1],Le=ye[q+he]}}while((ue=ve[ue&xe])>K&&--O!=0);return he<=b.lookahead?he:b.lookahead}function Ee(b){var ue,ie,z,O,q,he,pe,K,ye,xe,ve=b.w_size;do{if(O=b.window_size-b.lookahead-b.strstart,b.strstart>=ve+(ve-te)){for(m.arraySet(b.window,b.window,ve,ve,0),b.match_start-=ve,b.strstart-=ve,b.block_start-=ve,ue=ie=b.hash_size;z=b.head[--ue],b.head[ue]=ve<=z?z-ve:0,--ie;);for(ue=ie=ve;z=b.prev[--ue],b.prev[ue]=ve<=z?z-ve:0,--ie;);O+=ve}if(b.strm.avail_in===0)break;if(he=b.strm,pe=b.window,K=b.strstart+b.lookahead,ye=O,xe=void 0,xe=he.avail_in,ye<xe&&(xe=ye),ie=xe===0?0:(he.avail_in-=xe,m.arraySet(pe,he.input,he.next_in,xe,K),he.state.wrap===1?he.adler=x(he.adler,pe,xe,K):he.state.wrap===2&&(he.adler=h(he.adler,pe,xe,K)),he.next_in+=xe,he.total_in+=xe,xe),b.lookahead+=ie,b.lookahead+b.insert>=U)for(q=b.strstart-b.insert,b.ins_h=b.window[q],b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+U-1])&b.hash_mask,b.prev[q&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=q,q++,b.insert--,!(b.lookahead+b.insert<U)););}while(b.lookahead<te&&b.strm.avail_in!==0)}function Ne(b,ue){for(var ie,z;;){if(b.lookahead<te){if(Ee(b),b.lookahead<te&&ue===E)return y;if(b.lookahead===0)break}if(ie=0,b.lookahead>=U&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,ie=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),ie!==0&&b.strstart-ie<=b.w_size-te&&(b.match_length=le(b,ie)),b.match_length>=U)if(z=g._tr_tally(b,b.strstart-b.match_start,b.match_length-U),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=U){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,ie=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else z=g._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(z&&(j(b,!1),b.strm.avail_out===0))return y}return b.insert=b.strstart<U-1?b.strstart:U-1,ue===C?(j(b,!0),b.strm.avail_out===0?V:P):b.last_lit&&(j(b,!1),b.strm.avail_out===0)?y:X}function we(b,ue){for(var ie,z,O;;){if(b.lookahead<te){if(Ee(b),b.lookahead<te&&ue===E)return y;if(b.lookahead===0)break}if(ie=0,b.lookahead>=U&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,ie=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=U-1,ie!==0&&b.prev_length<b.max_lazy_match&&b.strstart-ie<=b.w_size-te&&(b.match_length=le(b,ie),b.match_length<=5&&(b.strategy===1||b.match_length===U&&4096<b.strstart-b.match_start)&&(b.match_length=U-1)),b.prev_length>=U&&b.match_length<=b.prev_length){for(O=b.strstart+b.lookahead-U,z=g._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-U),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=O&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+U-1])&b.hash_mask,ie=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=U-1,b.strstart++,z&&(j(b,!1),b.strm.avail_out===0))return y}else if(b.match_available){if((z=g._tr_tally(b,0,b.window[b.strstart-1]))&&j(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return y}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(z=g._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<U-1?b.strstart:U-1,ue===C?(j(b,!0),b.strm.avail_out===0?V:P):b.last_lit&&(j(b,!1),b.strm.avail_out===0)?y:X}function _e(b,ue,ie,z,O){this.good_length=b,this.max_lazy=ue,this.nice_length=ie,this.max_chain=z,this.func=O}function Fe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=I,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new m.Buf16(2*H),this.dyn_dtree=new m.Buf16(2*(2*k+1)),this.bl_tree=new m.Buf16(2*(2*$+1)),me(this.dyn_ltree),me(this.dyn_dtree),me(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new m.Buf16(G+1),this.heap=new m.Buf16(2*F+1),me(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new m.Buf16(2*F+1),me(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ve(b){var ue;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=_,(ue=b.state).pending=0,ue.pending_out=0,ue.wrap<0&&(ue.wrap=-ue.wrap),ue.status=ue.wrap?L:W,b.adler=ue.wrap===2?0:1,ue.last_flush=E,g._tr_init(ue),S):ce(b,R)}function mt(b){var ue=Ve(b);return ue===S&&(function(ie){ie.window_size=2*ie.w_size,me(ie.head),ie.max_lazy_match=f[ie.level].max_lazy,ie.good_match=f[ie.level].good_length,ie.nice_match=f[ie.level].nice_length,ie.max_chain_length=f[ie.level].max_chain,ie.strstart=0,ie.block_start=0,ie.lookahead=0,ie.insert=0,ie.match_length=ie.prev_length=U-1,ie.match_available=0,ie.ins_h=0})(b.state),ue}function bt(b,ue,ie,z,O,q){if(!b)return R;var he=1;if(ue===v&&(ue=6),z<0?(he=0,z=-z):15<z&&(he=2,z-=16),O<1||D<O||ie!==I||z<8||15<z||ue<0||9<ue||q<0||A<q)return ce(b,R);z===8&&(z=9);var pe=new Fe;return(b.state=pe).strm=b,pe.wrap=he,pe.gzhead=null,pe.w_bits=z,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=O+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+U-1)/U),pe.window=new m.Buf8(2*pe.w_size),pe.head=new m.Buf16(pe.hash_size),pe.prev=new m.Buf16(pe.w_size),pe.lit_bufsize=1<<O+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new m.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=ue,pe.strategy=q,pe.method=ie,mt(b)}f=[new _e(0,0,0,0,function(b,ue){var ie=65535;for(ie>b.pending_buf_size-5&&(ie=b.pending_buf_size-5);;){if(b.lookahead<=1){if(Ee(b),b.lookahead===0&&ue===E)return y;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var z=b.block_start+ie;if((b.strstart===0||b.strstart>=z)&&(b.lookahead=b.strstart-z,b.strstart=z,j(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-te&&(j(b,!1),b.strm.avail_out===0))return y}return b.insert=0,ue===C?(j(b,!0),b.strm.avail_out===0?V:P):(b.strstart>b.block_start&&(j(b,!1),b.strm.avail_out),y)}),new _e(4,4,8,4,Ne),new _e(4,5,16,8,Ne),new _e(4,6,32,32,Ne),new _e(4,4,16,16,we),new _e(8,16,32,32,we),new _e(8,16,128,128,we),new _e(8,32,128,256,we),new _e(32,128,258,1024,we),new _e(32,258,258,4096,we)],p.deflateInit=function(b,ue){return bt(b,ue,I,15,8,0)},p.deflateInit2=bt,p.deflateReset=mt,p.deflateResetKeep=Ve,p.deflateSetHeader=function(b,ue){return b&&b.state?b.state.wrap!==2?R:(b.state.gzhead=ue,S):R},p.deflate=function(b,ue){var ie,z,O,q;if(!b||!b.state||5<ue||ue<0)return b?ce(b,R):R;if(z=b.state,!b.output||!b.input&&b.avail_in!==0||z.status===666&&ue!==C)return ce(b,b.avail_out===0?-5:R);if(z.strm=b,ie=z.last_flush,z.last_flush=ue,z.status===L)if(z.wrap===2)b.adler=0,se(z,31),se(z,139),se(z,8),z.gzhead?(se(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),se(z,255&z.gzhead.time),se(z,z.gzhead.time>>8&255),se(z,z.gzhead.time>>16&255),se(z,z.gzhead.time>>24&255),se(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),se(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(se(z,255&z.gzhead.extra.length),se(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(b.adler=h(b.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(se(z,0),se(z,0),se(z,0),se(z,0),se(z,0),se(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),se(z,3),z.status=W);else{var he=I+(z.w_bits-8<<4)<<8;he|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(he|=32),he+=31-he%31,z.status=W,re(z,he),z.strstart!==0&&(re(z,b.adler>>>16),re(z,65535&b.adler)),b.adler=1}if(z.status===69)if(z.gzhead.extra){for(O=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>O&&(b.adler=h(b.adler,z.pending_buf,z.pending-O,O)),N(b),O=z.pending,z.pending!==z.pending_buf_size));)se(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>O&&(b.adler=h(b.adler,z.pending_buf,z.pending-O,O)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(b.adler=h(b.adler,z.pending_buf,z.pending-O,O)),N(b),O=z.pending,z.pending===z.pending_buf_size)){q=1;break}q=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,se(z,q)}while(q!==0);z.gzhead.hcrc&&z.pending>O&&(b.adler=h(b.adler,z.pending_buf,z.pending-O,O)),q===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(b.adler=h(b.adler,z.pending_buf,z.pending-O,O)),N(b),O=z.pending,z.pending===z.pending_buf_size)){q=1;break}q=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,se(z,q)}while(q!==0);z.gzhead.hcrc&&z.pending>O&&(b.adler=h(b.adler,z.pending_buf,z.pending-O,O)),q===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&N(b),z.pending+2<=z.pending_buf_size&&(se(z,255&b.adler),se(z,b.adler>>8&255),b.adler=0,z.status=W)):z.status=W),z.pending!==0){if(N(b),b.avail_out===0)return z.last_flush=-1,S}else if(b.avail_in===0&&J(ue)<=J(ie)&&ue!==C)return ce(b,-5);if(z.status===666&&b.avail_in!==0)return ce(b,-5);if(b.avail_in!==0||z.lookahead!==0||ue!==E&&z.status!==666){var pe=z.strategy===2?(function(K,ye){for(var xe;;){if(K.lookahead===0&&(Ee(K),K.lookahead===0)){if(ye===E)return y;break}if(K.match_length=0,xe=g._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++,xe&&(j(K,!1),K.strm.avail_out===0))return y}return K.insert=0,ye===C?(j(K,!0),K.strm.avail_out===0?V:P):K.last_lit&&(j(K,!1),K.strm.avail_out===0)?y:X})(z,ue):z.strategy===3?(function(K,ye){for(var xe,ve,Re,$e,Le=K.window;;){if(K.lookahead<=ae){if(Ee(K),K.lookahead<=ae&&ye===E)return y;if(K.lookahead===0)break}if(K.match_length=0,K.lookahead>=U&&0<K.strstart&&(ve=Le[Re=K.strstart-1])===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]){$e=K.strstart+ae;do;while(ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&ve===Le[++Re]&&Re<$e);K.match_length=ae-($e-Re),K.match_length>K.lookahead&&(K.match_length=K.lookahead)}if(K.match_length>=U?(xe=g._tr_tally(K,1,K.match_length-U),K.lookahead-=K.match_length,K.strstart+=K.match_length,K.match_length=0):(xe=g._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++),xe&&(j(K,!1),K.strm.avail_out===0))return y}return K.insert=0,ye===C?(j(K,!0),K.strm.avail_out===0?V:P):K.last_lit&&(j(K,!1),K.strm.avail_out===0)?y:X})(z,ue):f[z.level].func(z,ue);if(pe!==V&&pe!==P||(z.status=666),pe===y||pe===V)return b.avail_out===0&&(z.last_flush=-1),S;if(pe===X&&(ue===1?g._tr_align(z):ue!==5&&(g._tr_stored_block(z,0,0,!1),ue===3&&(me(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),N(b),b.avail_out===0))return z.last_flush=-1,S}return ue!==C?S:z.wrap<=0?1:(z.wrap===2?(se(z,255&b.adler),se(z,b.adler>>8&255),se(z,b.adler>>16&255),se(z,b.adler>>24&255),se(z,255&b.total_in),se(z,b.total_in>>8&255),se(z,b.total_in>>16&255),se(z,b.total_in>>24&255)):(re(z,b.adler>>>16),re(z,65535&b.adler)),N(b),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?S:1)},p.deflateEnd=function(b){var ue;return b&&b.state?(ue=b.state.status)!==L&&ue!==69&&ue!==73&&ue!==91&&ue!==103&&ue!==W&&ue!==666?ce(b,R):(b.state=null,ue===W?ce(b,-3):S):R},p.deflateSetDictionary=function(b,ue){var ie,z,O,q,he,pe,K,ye,xe=ue.length;if(!b||!b.state||(q=(ie=b.state).wrap)===2||q===1&&ie.status!==L||ie.lookahead)return R;for(q===1&&(b.adler=x(b.adler,ue,xe,0)),ie.wrap=0,xe>=ie.w_size&&(q===0&&(me(ie.head),ie.strstart=0,ie.block_start=0,ie.insert=0),ye=new m.Buf8(ie.w_size),m.arraySet(ye,ue,xe-ie.w_size,ie.w_size,0),ue=ye,xe=ie.w_size),he=b.avail_in,pe=b.next_in,K=b.input,b.avail_in=xe,b.next_in=0,b.input=ue,Ee(ie);ie.lookahead>=U;){for(z=ie.strstart,O=ie.lookahead-(U-1);ie.ins_h=(ie.ins_h<<ie.hash_shift^ie.window[z+U-1])&ie.hash_mask,ie.prev[z&ie.w_mask]=ie.head[ie.ins_h],ie.head[ie.ins_h]=z,z++,--O;);ie.strstart=z,ie.lookahead=U-1,Ee(ie)}return ie.strstart+=ie.lookahead,ie.block_start=ie.strstart,ie.insert=ie.lookahead,ie.lookahead=0,ie.match_length=ie.prev_length=U-1,ie.match_available=0,b.next_in=pe,b.input=K,b.avail_in=he,ie.wrap=q,S},p.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,c,p){c.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,c,p){c.exports=function(f,m){var g,x,h,w,E,C,S,R,v,A,_,I,D,F,k,$,H,G,U,ae,te,L,W,y,X;g=f.state,x=f.next_in,y=f.input,h=x+(f.avail_in-5),w=f.next_out,X=f.output,E=w-(m-f.avail_out),C=w+(f.avail_out-257),S=g.dmax,R=g.wsize,v=g.whave,A=g.wnext,_=g.window,I=g.hold,D=g.bits,F=g.lencode,k=g.distcode,$=(1<<g.lenbits)-1,H=(1<<g.distbits)-1;e:do{D<15&&(I+=y[x++]<<D,D+=8,I+=y[x++]<<D,D+=8),G=F[I&$];t:for(;;){if(I>>>=U=G>>>24,D-=U,(U=G>>>16&255)===0)X[w++]=65535&G;else{if(!(16&U)){if((64&U)==0){G=F[(65535&G)+(I&(1<<U)-1)];continue t}if(32&U){g.mode=12;break e}f.msg="invalid literal/length code",g.mode=30;break e}ae=65535&G,(U&=15)&&(D<U&&(I+=y[x++]<<D,D+=8),ae+=I&(1<<U)-1,I>>>=U,D-=U),D<15&&(I+=y[x++]<<D,D+=8,I+=y[x++]<<D,D+=8),G=k[I&H];n:for(;;){if(I>>>=U=G>>>24,D-=U,!(16&(U=G>>>16&255))){if((64&U)==0){G=k[(65535&G)+(I&(1<<U)-1)];continue n}f.msg="invalid distance code",g.mode=30;break e}if(te=65535&G,D<(U&=15)&&(I+=y[x++]<<D,(D+=8)<U&&(I+=y[x++]<<D,D+=8)),S<(te+=I&(1<<U)-1)){f.msg="invalid distance too far back",g.mode=30;break e}if(I>>>=U,D-=U,(U=w-E)<te){if(v<(U=te-U)&&g.sane){f.msg="invalid distance too far back",g.mode=30;break e}if(W=_,(L=0)===A){if(L+=R-U,U<ae){for(ae-=U;X[w++]=_[L++],--U;);L=w-te,W=X}}else if(A<U){if(L+=R+A-U,(U-=A)<ae){for(ae-=U;X[w++]=_[L++],--U;);if(L=0,A<ae){for(ae-=U=A;X[w++]=_[L++],--U;);L=w-te,W=X}}}else if(L+=A-U,U<ae){for(ae-=U;X[w++]=_[L++],--U;);L=w-te,W=X}for(;2<ae;)X[w++]=W[L++],X[w++]=W[L++],X[w++]=W[L++],ae-=3;ae&&(X[w++]=W[L++],1<ae&&(X[w++]=W[L++]))}else{for(L=w-te;X[w++]=X[L++],X[w++]=X[L++],X[w++]=X[L++],2<(ae-=3););ae&&(X[w++]=X[L++],1<ae&&(X[w++]=X[L++]))}break}}break}}while(x<h&&w<C);x-=ae=D>>3,I&=(1<<(D-=ae<<3))-1,f.next_in=x,f.next_out=w,f.avail_in=x<h?h-x+5:5-(x-h),f.avail_out=w<C?C-w+257:257-(w-C),g.hold=I,g.bits=D}},{}],49:[function(l,c,p){var f=l("../utils/common"),m=l("./adler32"),g=l("./crc32"),x=l("./inffast"),h=l("./inftrees"),w=1,E=2,C=0,S=-2,R=1,v=852,A=592;function _(L){return(L>>>24&255)+(L>>>8&65280)+((65280&L)<<8)+((255&L)<<24)}function I(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function D(L){var W;return L&&L.state?(W=L.state,L.total_in=L.total_out=W.total=0,L.msg="",W.wrap&&(L.adler=1&W.wrap),W.mode=R,W.last=0,W.havedict=0,W.dmax=32768,W.head=null,W.hold=0,W.bits=0,W.lencode=W.lendyn=new f.Buf32(v),W.distcode=W.distdyn=new f.Buf32(A),W.sane=1,W.back=-1,C):S}function F(L){var W;return L&&L.state?((W=L.state).wsize=0,W.whave=0,W.wnext=0,D(L)):S}function k(L,W){var y,X;return L&&L.state?(X=L.state,W<0?(y=0,W=-W):(y=1+(W>>4),W<48&&(W&=15)),W&&(W<8||15<W)?S:(X.window!==null&&X.wbits!==W&&(X.window=null),X.wrap=y,X.wbits=W,F(L))):S}function $(L,W){var y,X;return L?(X=new I,(L.state=X).window=null,(y=k(L,W))!==C&&(L.state=null),y):S}var H,G,U=!0;function ae(L){if(U){var W;for(H=new f.Buf32(512),G=new f.Buf32(32),W=0;W<144;)L.lens[W++]=8;for(;W<256;)L.lens[W++]=9;for(;W<280;)L.lens[W++]=7;for(;W<288;)L.lens[W++]=8;for(h(w,L.lens,0,288,H,0,L.work,{bits:9}),W=0;W<32;)L.lens[W++]=5;h(E,L.lens,0,32,G,0,L.work,{bits:5}),U=!1}L.lencode=H,L.lenbits=9,L.distcode=G,L.distbits=5}function te(L,W,y,X){var V,P=L.state;return P.window===null&&(P.wsize=1<<P.wbits,P.wnext=0,P.whave=0,P.window=new f.Buf8(P.wsize)),X>=P.wsize?(f.arraySet(P.window,W,y-P.wsize,P.wsize,0),P.wnext=0,P.whave=P.wsize):(X<(V=P.wsize-P.wnext)&&(V=X),f.arraySet(P.window,W,y-X,V,P.wnext),(X-=V)?(f.arraySet(P.window,W,y-X,X,0),P.wnext=X,P.whave=P.wsize):(P.wnext+=V,P.wnext===P.wsize&&(P.wnext=0),P.whave<P.wsize&&(P.whave+=V))),0}p.inflateReset=F,p.inflateReset2=k,p.inflateResetKeep=D,p.inflateInit=function(L){return $(L,15)},p.inflateInit2=$,p.inflate=function(L,W){var y,X,V,P,ce,J,me,N,j,se,re,le,Ee,Ne,we,_e,Fe,Ve,mt,bt,b,ue,ie,z,O=0,q=new f.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!L||!L.state||!L.output||!L.input&&L.avail_in!==0)return S;(y=L.state).mode===12&&(y.mode=13),ce=L.next_out,V=L.output,me=L.avail_out,P=L.next_in,X=L.input,J=L.avail_in,N=y.hold,j=y.bits,se=J,re=me,ue=C;e:for(;;)switch(y.mode){case R:if(y.wrap===0){y.mode=13;break}for(;j<16;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(2&y.wrap&&N===35615){q[y.check=0]=255&N,q[1]=N>>>8&255,y.check=g(y.check,q,2,0),j=N=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&N)<<8)+(N>>8))%31){L.msg="incorrect header check",y.mode=30;break}if((15&N)!=8){L.msg="unknown compression method",y.mode=30;break}if(j-=4,b=8+(15&(N>>>=4)),y.wbits===0)y.wbits=b;else if(b>y.wbits){L.msg="invalid window size",y.mode=30;break}y.dmax=1<<b,L.adler=y.check=1,y.mode=512&N?10:12,j=N=0;break;case 2:for(;j<16;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(y.flags=N,(255&y.flags)!=8){L.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){L.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=N>>8&1),512&y.flags&&(q[0]=255&N,q[1]=N>>>8&255,y.check=g(y.check,q,2,0)),j=N=0,y.mode=3;case 3:for(;j<32;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}y.head&&(y.head.time=N),512&y.flags&&(q[0]=255&N,q[1]=N>>>8&255,q[2]=N>>>16&255,q[3]=N>>>24&255,y.check=g(y.check,q,4,0)),j=N=0,y.mode=4;case 4:for(;j<16;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}y.head&&(y.head.xflags=255&N,y.head.os=N>>8),512&y.flags&&(q[0]=255&N,q[1]=N>>>8&255,y.check=g(y.check,q,2,0)),j=N=0,y.mode=5;case 5:if(1024&y.flags){for(;j<16;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}y.length=N,y.head&&(y.head.extra_len=N),512&y.flags&&(q[0]=255&N,q[1]=N>>>8&255,y.check=g(y.check,q,2,0)),j=N=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(J<(le=y.length)&&(le=J),le&&(y.head&&(b=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),f.arraySet(y.head.extra,X,P,le,b)),512&y.flags&&(y.check=g(y.check,X,le,P)),J-=le,P+=le,y.length-=le),y.length))break e;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(J===0)break e;for(le=0;b=X[P+le++],y.head&&b&&y.length<65536&&(y.head.name+=String.fromCharCode(b)),b&&le<J;);if(512&y.flags&&(y.check=g(y.check,X,le,P)),J-=le,P+=le,b)break e}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(J===0)break e;for(le=0;b=X[P+le++],y.head&&b&&y.length<65536&&(y.head.comment+=String.fromCharCode(b)),b&&le<J;);if(512&y.flags&&(y.check=g(y.check,X,le,P)),J-=le,P+=le,b)break e}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;j<16;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(N!==(65535&y.check)){L.msg="header crc mismatch",y.mode=30;break}j=N=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),L.adler=y.check=0,y.mode=12;break;case 10:for(;j<32;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}L.adler=y.check=_(N),j=N=0,y.mode=11;case 11:if(y.havedict===0)return L.next_out=ce,L.avail_out=me,L.next_in=P,L.avail_in=J,y.hold=N,y.bits=j,2;L.adler=y.check=1,y.mode=12;case 12:if(W===5||W===6)break e;case 13:if(y.last){N>>>=7&j,j-=7&j,y.mode=27;break}for(;j<3;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}switch(y.last=1&N,j-=1,3&(N>>>=1)){case 0:y.mode=14;break;case 1:if(ae(y),y.mode=20,W!==6)break;N>>>=2,j-=2;break e;case 2:y.mode=17;break;case 3:L.msg="invalid block type",y.mode=30}N>>>=2,j-=2;break;case 14:for(N>>>=7&j,j-=7&j;j<32;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if((65535&N)!=(N>>>16^65535)){L.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&N,j=N=0,y.mode=15,W===6)break e;case 15:y.mode=16;case 16:if(le=y.length){if(J<le&&(le=J),me<le&&(le=me),le===0)break e;f.arraySet(V,X,P,le,ce),J-=le,P+=le,me-=le,ce+=le,y.length-=le;break}y.mode=12;break;case 17:for(;j<14;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(y.nlen=257+(31&N),N>>>=5,j-=5,y.ndist=1+(31&N),N>>>=5,j-=5,y.ncode=4+(15&N),N>>>=4,j-=4,286<y.nlen||30<y.ndist){L.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;j<3;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}y.lens[he[y.have++]]=7&N,N>>>=3,j-=3}for(;y.have<19;)y.lens[he[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,ie={bits:y.lenbits},ue=h(0,y.lens,0,19,y.lencode,0,y.work,ie),y.lenbits=ie.bits,ue){L.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;_e=(O=y.lencode[N&(1<<y.lenbits)-1])>>>16&255,Fe=65535&O,!((we=O>>>24)<=j);){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(Fe<16)N>>>=we,j-=we,y.lens[y.have++]=Fe;else{if(Fe===16){for(z=we+2;j<z;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(N>>>=we,j-=we,y.have===0){L.msg="invalid bit length repeat",y.mode=30;break}b=y.lens[y.have-1],le=3+(3&N),N>>>=2,j-=2}else if(Fe===17){for(z=we+3;j<z;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}j-=we,b=0,le=3+(7&(N>>>=we)),N>>>=3,j-=3}else{for(z=we+7;j<z;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}j-=we,b=0,le=11+(127&(N>>>=we)),N>>>=7,j-=7}if(y.have+le>y.nlen+y.ndist){L.msg="invalid bit length repeat",y.mode=30;break}for(;le--;)y.lens[y.have++]=b}}if(y.mode===30)break;if(y.lens[256]===0){L.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,ie={bits:y.lenbits},ue=h(w,y.lens,0,y.nlen,y.lencode,0,y.work,ie),y.lenbits=ie.bits,ue){L.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,ie={bits:y.distbits},ue=h(E,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,ie),y.distbits=ie.bits,ue){L.msg="invalid distances set",y.mode=30;break}if(y.mode=20,W===6)break e;case 20:y.mode=21;case 21:if(6<=J&&258<=me){L.next_out=ce,L.avail_out=me,L.next_in=P,L.avail_in=J,y.hold=N,y.bits=j,x(L,re),ce=L.next_out,V=L.output,me=L.avail_out,P=L.next_in,X=L.input,J=L.avail_in,N=y.hold,j=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;_e=(O=y.lencode[N&(1<<y.lenbits)-1])>>>16&255,Fe=65535&O,!((we=O>>>24)<=j);){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(_e&&(240&_e)==0){for(Ve=we,mt=_e,bt=Fe;_e=(O=y.lencode[bt+((N&(1<<Ve+mt)-1)>>Ve)])>>>16&255,Fe=65535&O,!(Ve+(we=O>>>24)<=j);){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}N>>>=Ve,j-=Ve,y.back+=Ve}if(N>>>=we,j-=we,y.back+=we,y.length=Fe,_e===0){y.mode=26;break}if(32&_e){y.back=-1,y.mode=12;break}if(64&_e){L.msg="invalid literal/length code",y.mode=30;break}y.extra=15&_e,y.mode=22;case 22:if(y.extra){for(z=y.extra;j<z;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}y.length+=N&(1<<y.extra)-1,N>>>=y.extra,j-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;_e=(O=y.distcode[N&(1<<y.distbits)-1])>>>16&255,Fe=65535&O,!((we=O>>>24)<=j);){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if((240&_e)==0){for(Ve=we,mt=_e,bt=Fe;_e=(O=y.distcode[bt+((N&(1<<Ve+mt)-1)>>Ve)])>>>16&255,Fe=65535&O,!(Ve+(we=O>>>24)<=j);){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}N>>>=Ve,j-=Ve,y.back+=Ve}if(N>>>=we,j-=we,y.back+=we,64&_e){L.msg="invalid distance code",y.mode=30;break}y.offset=Fe,y.extra=15&_e,y.mode=24;case 24:if(y.extra){for(z=y.extra;j<z;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}y.offset+=N&(1<<y.extra)-1,N>>>=y.extra,j-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){L.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(me===0)break e;if(le=re-me,y.offset>le){if((le=y.offset-le)>y.whave&&y.sane){L.msg="invalid distance too far back",y.mode=30;break}Ee=le>y.wnext?(le-=y.wnext,y.wsize-le):y.wnext-le,le>y.length&&(le=y.length),Ne=y.window}else Ne=V,Ee=ce-y.offset,le=y.length;for(me<le&&(le=me),me-=le,y.length-=le;V[ce++]=Ne[Ee++],--le;);y.length===0&&(y.mode=21);break;case 26:if(me===0)break e;V[ce++]=y.length,me--,y.mode=21;break;case 27:if(y.wrap){for(;j<32;){if(J===0)break e;J--,N|=X[P++]<<j,j+=8}if(re-=me,L.total_out+=re,y.total+=re,re&&(L.adler=y.check=y.flags?g(y.check,V,re,ce-re):m(y.check,V,re,ce-re)),re=me,(y.flags?N:_(N))!==y.check){L.msg="incorrect data check",y.mode=30;break}j=N=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;j<32;){if(J===0)break e;J--,N+=X[P++]<<j,j+=8}if(N!==(4294967295&y.total)){L.msg="incorrect length check",y.mode=30;break}j=N=0}y.mode=29;case 29:ue=1;break e;case 30:ue=-3;break e;case 31:return-4;case 32:default:return S}return L.next_out=ce,L.avail_out=me,L.next_in=P,L.avail_in=J,y.hold=N,y.bits=j,(y.wsize||re!==L.avail_out&&y.mode<30&&(y.mode<27||W!==4))&&te(L,L.output,L.next_out,re-L.avail_out)?(y.mode=31,-4):(se-=L.avail_in,re-=L.avail_out,L.total_in+=se,L.total_out+=re,y.total+=re,y.wrap&&re&&(L.adler=y.check=y.flags?g(y.check,V,re,L.next_out-re):m(y.check,V,re,L.next_out-re)),L.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(se==0&&re===0||W===4)&&ue===C&&(ue=-5),ue)},p.inflateEnd=function(L){if(!L||!L.state)return S;var W=L.state;return W.window&&(W.window=null),L.state=null,C},p.inflateGetHeader=function(L,W){var y;return L&&L.state?(2&(y=L.state).wrap)==0?S:((y.head=W).done=!1,C):S},p.inflateSetDictionary=function(L,W){var y,X=W.length;return L&&L.state?(y=L.state).wrap!==0&&y.mode!==11?S:y.mode===11&&m(1,W,X,0)!==y.check?-3:te(L,W,X,X)?(y.mode=31,-4):(y.havedict=1,C):S},p.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,c,p){var f=l("../utils/common"),m=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],g=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],x=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];c.exports=function(w,E,C,S,R,v,A,_){var I,D,F,k,$,H,G,U,ae,te=_.bits,L=0,W=0,y=0,X=0,V=0,P=0,ce=0,J=0,me=0,N=0,j=null,se=0,re=new f.Buf16(16),le=new f.Buf16(16),Ee=null,Ne=0;for(L=0;L<=15;L++)re[L]=0;for(W=0;W<S;W++)re[E[C+W]]++;for(V=te,X=15;1<=X&&re[X]===0;X--);if(X<V&&(V=X),X===0)return R[v++]=20971520,R[v++]=20971520,_.bits=1,0;for(y=1;y<X&&re[y]===0;y++);for(V<y&&(V=y),L=J=1;L<=15;L++)if(J<<=1,(J-=re[L])<0)return-1;if(0<J&&(w===0||X!==1))return-1;for(le[1]=0,L=1;L<15;L++)le[L+1]=le[L]+re[L];for(W=0;W<S;W++)E[C+W]!==0&&(A[le[E[C+W]]++]=W);if(H=w===0?(j=Ee=A,19):w===1?(j=m,se-=257,Ee=g,Ne-=257,256):(j=x,Ee=h,-1),L=y,$=v,ce=W=N=0,F=-1,k=(me=1<<(P=V))-1,w===1&&852<me||w===2&&592<me)return 1;for(;;){for(G=L-ce,ae=A[W]<H?(U=0,A[W]):A[W]>H?(U=Ee[Ne+A[W]],j[se+A[W]]):(U=96,0),I=1<<L-ce,y=D=1<<P;R[$+(N>>ce)+(D-=I)]=G<<24|U<<16|ae|0,D!==0;);for(I=1<<L-1;N&I;)I>>=1;if(I!==0?(N&=I-1,N+=I):N=0,W++,--re[L]==0){if(L===X)break;L=E[C+A[W]]}if(V<L&&(N&k)!==F){for(ce===0&&(ce=V),$+=y,J=1<<(P=L-ce);P+ce<X&&!((J-=re[P+ce])<=0);)P++,J<<=1;if(me+=1<<P,w===1&&852<me||w===2&&592<me)return 1;R[F=N&k]=V<<24|P<<16|$-v|0}}return N!==0&&(R[$+N]=L-ce<<24|64<<16|0),_.bits=V,0}},{"../utils/common":41}],51:[function(l,c,p){c.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,c,p){var f=l("../utils/common"),m=0,g=1;function x(O){for(var q=O.length;0<=--q;)O[q]=0}var h=0,w=29,E=256,C=E+1+w,S=30,R=19,v=2*C+1,A=15,_=16,I=7,D=256,F=16,k=17,$=18,H=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],U=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],te=new Array(2*(C+2));x(te);var L=new Array(2*S);x(L);var W=new Array(512);x(W);var y=new Array(256);x(y);var X=new Array(w);x(X);var V,P,ce,J=new Array(S);function me(O,q,he,pe,K){this.static_tree=O,this.extra_bits=q,this.extra_base=he,this.elems=pe,this.max_length=K,this.has_stree=O&&O.length}function N(O,q){this.dyn_tree=O,this.max_code=0,this.stat_desc=q}function j(O){return O<256?W[O]:W[256+(O>>>7)]}function se(O,q){O.pending_buf[O.pending++]=255&q,O.pending_buf[O.pending++]=q>>>8&255}function re(O,q,he){O.bi_valid>_-he?(O.bi_buf|=q<<O.bi_valid&65535,se(O,O.bi_buf),O.bi_buf=q>>_-O.bi_valid,O.bi_valid+=he-_):(O.bi_buf|=q<<O.bi_valid&65535,O.bi_valid+=he)}function le(O,q,he){re(O,he[2*q],he[2*q+1])}function Ee(O,q){for(var he=0;he|=1&O,O>>>=1,he<<=1,0<--q;);return he>>>1}function Ne(O,q,he){var pe,K,ye=new Array(A+1),xe=0;for(pe=1;pe<=A;pe++)ye[pe]=xe=xe+he[pe-1]<<1;for(K=0;K<=q;K++){var ve=O[2*K+1];ve!==0&&(O[2*K]=Ee(ye[ve]++,ve))}}function we(O){var q;for(q=0;q<C;q++)O.dyn_ltree[2*q]=0;for(q=0;q<S;q++)O.dyn_dtree[2*q]=0;for(q=0;q<R;q++)O.bl_tree[2*q]=0;O.dyn_ltree[2*D]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function _e(O){8<O.bi_valid?se(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function Fe(O,q,he,pe){var K=2*q,ye=2*he;return O[K]<O[ye]||O[K]===O[ye]&&pe[q]<=pe[he]}function Ve(O,q,he){for(var pe=O.heap[he],K=he<<1;K<=O.heap_len&&(K<O.heap_len&&Fe(q,O.heap[K+1],O.heap[K],O.depth)&&K++,!Fe(q,pe,O.heap[K],O.depth));)O.heap[he]=O.heap[K],he=K,K<<=1;O.heap[he]=pe}function mt(O,q,he){var pe,K,ye,xe,ve=0;if(O.last_lit!==0)for(;pe=O.pending_buf[O.d_buf+2*ve]<<8|O.pending_buf[O.d_buf+2*ve+1],K=O.pending_buf[O.l_buf+ve],ve++,pe===0?le(O,K,q):(le(O,(ye=y[K])+E+1,q),(xe=H[ye])!==0&&re(O,K-=X[ye],xe),le(O,ye=j(--pe),he),(xe=G[ye])!==0&&re(O,pe-=J[ye],xe)),ve<O.last_lit;);le(O,D,q)}function bt(O,q){var he,pe,K,ye=q.dyn_tree,xe=q.stat_desc.static_tree,ve=q.stat_desc.has_stree,Re=q.stat_desc.elems,$e=-1;for(O.heap_len=0,O.heap_max=v,he=0;he<Re;he++)ye[2*he]!==0?(O.heap[++O.heap_len]=$e=he,O.depth[he]=0):ye[2*he+1]=0;for(;O.heap_len<2;)ye[2*(K=O.heap[++O.heap_len]=$e<2?++$e:0)]=1,O.depth[K]=0,O.opt_len--,ve&&(O.static_len-=xe[2*K+1]);for(q.max_code=$e,he=O.heap_len>>1;1<=he;he--)Ve(O,ye,he);for(K=Re;he=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Ve(O,ye,1),pe=O.heap[1],O.heap[--O.heap_max]=he,O.heap[--O.heap_max]=pe,ye[2*K]=ye[2*he]+ye[2*pe],O.depth[K]=(O.depth[he]>=O.depth[pe]?O.depth[he]:O.depth[pe])+1,ye[2*he+1]=ye[2*pe+1]=K,O.heap[1]=K++,Ve(O,ye,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],(function(Le,Tt){var jn,Vt,ia,Je,gt,Ht,rt=Tt.dyn_tree,di=Tt.max_code,Ps=Tt.stat_desc.static_tree,Vs=Tt.stat_desc.has_stree,Ra=Tt.stat_desc.extra_bits,sa=Tt.stat_desc.extra_base,cn=Tt.stat_desc.max_length,Gt=0;for(Je=0;Je<=A;Je++)Le.bl_count[Je]=0;for(rt[2*Le.heap[Le.heap_max]+1]=0,jn=Le.heap_max+1;jn<v;jn++)cn<(Je=rt[2*rt[2*(Vt=Le.heap[jn])+1]+1]+1)&&(Je=cn,Gt++),rt[2*Vt+1]=Je,di<Vt||(Le.bl_count[Je]++,gt=0,sa<=Vt&&(gt=Ra[Vt-sa]),Ht=rt[2*Vt],Le.opt_len+=Ht*(Je+gt),Vs&&(Le.static_len+=Ht*(Ps[2*Vt+1]+gt)));if(Gt!==0){do{for(Je=cn-1;Le.bl_count[Je]===0;)Je--;Le.bl_count[Je]--,Le.bl_count[Je+1]+=2,Le.bl_count[cn]--,Gt-=2}while(0<Gt);for(Je=cn;Je!==0;Je--)for(Vt=Le.bl_count[Je];Vt!==0;)di<(ia=Le.heap[--jn])||(rt[2*ia+1]!==Je&&(Le.opt_len+=(Je-rt[2*ia+1])*rt[2*ia],rt[2*ia+1]=Je),Vt--)}})(O,q),Ne(ye,$e,O.bl_count)}function b(O,q,he){var pe,K,ye=-1,xe=q[1],ve=0,Re=7,$e=4;for(xe===0&&(Re=138,$e=3),q[2*(he+1)+1]=65535,pe=0;pe<=he;pe++)K=xe,xe=q[2*(pe+1)+1],++ve<Re&&K===xe||(ve<$e?O.bl_tree[2*K]+=ve:K!==0?(K!==ye&&O.bl_tree[2*K]++,O.bl_tree[2*F]++):ve<=10?O.bl_tree[2*k]++:O.bl_tree[2*$]++,ye=K,$e=(ve=0)===xe?(Re=138,3):K===xe?(Re=6,3):(Re=7,4))}function ue(O,q,he){var pe,K,ye=-1,xe=q[1],ve=0,Re=7,$e=4;for(xe===0&&(Re=138,$e=3),pe=0;pe<=he;pe++)if(K=xe,xe=q[2*(pe+1)+1],!(++ve<Re&&K===xe)){if(ve<$e)for(;le(O,K,O.bl_tree),--ve!=0;);else K!==0?(K!==ye&&(le(O,K,O.bl_tree),ve--),le(O,F,O.bl_tree),re(O,ve-3,2)):ve<=10?(le(O,k,O.bl_tree),re(O,ve-3,3)):(le(O,$,O.bl_tree),re(O,ve-11,7));ye=K,$e=(ve=0)===xe?(Re=138,3):K===xe?(Re=6,3):(Re=7,4)}}x(J);var ie=!1;function z(O,q,he,pe){re(O,(h<<1)+(pe?1:0),3),(function(K,ye,xe,ve){_e(K),se(K,xe),se(K,~xe),f.arraySet(K.pending_buf,K.window,ye,xe,K.pending),K.pending+=xe})(O,q,he)}p._tr_init=function(O){ie||((function(){var q,he,pe,K,ye,xe=new Array(A+1);for(K=pe=0;K<w-1;K++)for(X[K]=pe,q=0;q<1<<H[K];q++)y[pe++]=K;for(y[pe-1]=K,K=ye=0;K<16;K++)for(J[K]=ye,q=0;q<1<<G[K];q++)W[ye++]=K;for(ye>>=7;K<S;K++)for(J[K]=ye<<7,q=0;q<1<<G[K]-7;q++)W[256+ye++]=K;for(he=0;he<=A;he++)xe[he]=0;for(q=0;q<=143;)te[2*q+1]=8,q++,xe[8]++;for(;q<=255;)te[2*q+1]=9,q++,xe[9]++;for(;q<=279;)te[2*q+1]=7,q++,xe[7]++;for(;q<=287;)te[2*q+1]=8,q++,xe[8]++;for(Ne(te,C+1,xe),q=0;q<S;q++)L[2*q+1]=5,L[2*q]=Ee(q,5);V=new me(te,H,E+1,C,A),P=new me(L,G,0,S,A),ce=new me(new Array(0),U,0,R,I)})(),ie=!0),O.l_desc=new N(O.dyn_ltree,V),O.d_desc=new N(O.dyn_dtree,P),O.bl_desc=new N(O.bl_tree,ce),O.bi_buf=0,O.bi_valid=0,we(O)},p._tr_stored_block=z,p._tr_flush_block=function(O,q,he,pe){var K,ye,xe=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=(function(ve){var Re,$e=4093624447;for(Re=0;Re<=31;Re++,$e>>>=1)if(1&$e&&ve.dyn_ltree[2*Re]!==0)return m;if(ve.dyn_ltree[18]!==0||ve.dyn_ltree[20]!==0||ve.dyn_ltree[26]!==0)return g;for(Re=32;Re<E;Re++)if(ve.dyn_ltree[2*Re]!==0)return g;return m})(O)),bt(O,O.l_desc),bt(O,O.d_desc),xe=(function(ve){var Re;for(b(ve,ve.dyn_ltree,ve.l_desc.max_code),b(ve,ve.dyn_dtree,ve.d_desc.max_code),bt(ve,ve.bl_desc),Re=R-1;3<=Re&&ve.bl_tree[2*ae[Re]+1]===0;Re--);return ve.opt_len+=3*(Re+1)+5+5+4,Re})(O),K=O.opt_len+3+7>>>3,(ye=O.static_len+3+7>>>3)<=K&&(K=ye)):K=ye=he+5,he+4<=K&&q!==-1?z(O,q,he,pe):O.strategy===4||ye===K?(re(O,2+(pe?1:0),3),mt(O,te,L)):(re(O,4+(pe?1:0),3),(function(ve,Re,$e,Le){var Tt;for(re(ve,Re-257,5),re(ve,$e-1,5),re(ve,Le-4,4),Tt=0;Tt<Le;Tt++)re(ve,ve.bl_tree[2*ae[Tt]+1],3);ue(ve,ve.dyn_ltree,Re-1),ue(ve,ve.dyn_dtree,$e-1)})(O,O.l_desc.max_code+1,O.d_desc.max_code+1,xe+1),mt(O,O.dyn_ltree,O.dyn_dtree)),we(O),pe&&_e(O)},p._tr_tally=function(O,q,he){return O.pending_buf[O.d_buf+2*O.last_lit]=q>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&q,O.pending_buf[O.l_buf+O.last_lit]=255&he,O.last_lit++,q===0?O.dyn_ltree[2*he]++:(O.matches++,q--,O.dyn_ltree[2*(y[he]+E+1)]++,O.dyn_dtree[2*j(q)]++),O.last_lit===O.lit_bufsize-1},p._tr_align=function(O){re(O,2,3),le(O,D,te),(function(q){q.bi_valid===16?(se(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)})(O)}},{"../utils/common":41}],53:[function(l,c,p){c.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,c,p){(function(f){(function(m,g){if(!m.setImmediate){var x,h,w,E,C=1,S={},R=!1,v=m.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(m);A=A&&A.setTimeout?A:m,x={}.toString.call(m.process)==="[object process]"?function(F){process.nextTick(function(){I(F)})}:(function(){if(m.postMessage&&!m.importScripts){var F=!0,k=m.onmessage;return m.onmessage=function(){F=!1},m.postMessage("","*"),m.onmessage=k,F}})()?(E="setImmediate$"+Math.random()+"$",m.addEventListener?m.addEventListener("message",D,!1):m.attachEvent("onmessage",D),function(F){m.postMessage(E+F,"*")}):m.MessageChannel?((w=new MessageChannel).port1.onmessage=function(F){I(F.data)},function(F){w.port2.postMessage(F)}):v&&"onreadystatechange"in v.createElement("script")?(h=v.documentElement,function(F){var k=v.createElement("script");k.onreadystatechange=function(){I(F),k.onreadystatechange=null,h.removeChild(k),k=null},h.appendChild(k)}):function(F){setTimeout(I,0,F)},A.setImmediate=function(F){typeof F!="function"&&(F=new Function(""+F));for(var k=new Array(arguments.length-1),$=0;$<k.length;$++)k[$]=arguments[$+1];var H={callback:F,args:k};return S[C]=H,x(C),C++},A.clearImmediate=_}function _(F){delete S[F]}function I(F){if(R)setTimeout(I,0,F);else{var k=S[F];if(k){R=!0;try{(function($){var H=$.callback,G=$.args;switch(G.length){case 0:H();break;case 1:H(G[0]);break;case 2:H(G[0],G[1]);break;case 3:H(G[0],G[1],G[2]);break;default:H.apply(g,G)}})(k)}finally{_(F),R=!1}}}}function D(F){F.source===m&&typeof F.data=="string"&&F.data.indexOf(E)===0&&I(+F.data.slice(E.length))}})(typeof self>"u"?f===void 0?this:f:self)}).call(this,typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(uc)),uc.exports}var Hy=Vy();const Gy=Tc(Hy),qy=({logs:u,currentRound:o,currentPaperVersion:l,filePrefix:c,dataAlert:p,dataFileName:f,dataFileContent:m})=>{const[g,x]=be.useState([]),[h,w]=be.useState(null),[E,C]=be.useState(!1),[S,R]=be.useState(!1),[v,A]=be.useState(null),[_,I]=be.useState(null),[D,F]=be.useState(!1),[k,$]=be.useState(!1),H=y=>{var re,le;const V=`${c?`${c}_`:""}references.bib`,P=y.match(/\\begin\{thebibliography\}\{[^}]*\}([\s\S]*?)\\end\{thebibliography\}/);if(!P)return{texWithoutBib:y,bibContent:"",bibFilename:V};const ce=P[1],J=/\\bibitem\{([^}]+)\}\s*([\s\S]*?)(?=\\bibitem|$)/g;let me=`% Bibliography generated by ICIScopilot

`,N,j=0;for(;(N=J.exec(ce))!==null;){const Ee=N[1].trim(),Ne=N[2].trim(),we=Ne.match(/\((\d{4})\)/),_e=we?we[1]:"2024",Fe=Ne.split(/\(\d{4}\)\.?\s*/),Ve=((re=Fe[0])==null?void 0:re.trim().replace(/\.$/,""))||"Unknown Author",mt=Fe[1]||"",bt=mt.match(/^([^.]+)\./),b=bt?bt[1].trim():((le=mt.split(".")[0])==null?void 0:le.trim())||"Unknown Title",ue=mt.substring(b.length+1).trim().replace(/^\.\s*/,"");me+=`@article{${Ee},
`,me+=`  author = {${Ve}},
`,me+=`  title = {${b}},
`,me+=`  year = {${_e}},
`,ue&&(me+=`  journal = {${ue.replace(/\.$/,"")}},
`),me+=`}

`,j++}return j===0&&(me+=`% Original bibliography content:
% `+ce.replace(/\n/g,`
% `)),{texWithoutBib:y.replace(/\\begin\{thebibliography\}\{[^}]*\}[\s\S]*?\\end\{thebibliography\}/,`\\bibliographystyle{plain}
\\bibliography{${V.replace(".bib","")}}`),bibContent:me,bibFilename:V}},G=async()=>{C(!0),w(null);const y=ra(l,"icis_paper"),X=li(o),V=Dc();if(!y){w("Missing paper file to save"),C(!1);return}try{const P=c?`${c}_`:"",ce=new Gy,J=[],me=kc();me&&(ce.file(me.filename,me.blob),J.push(me.filename),console.log(`[SaveAll] Added PDF: ${me.filename}`));const{texWithoutBib:N,bibContent:j,bibFilename:se}=H(y),re=`${P}icis_paper_v${l}_FINAL.tex`;ce.file(re,j?N:y),J.push(re),console.log(`[SaveAll] Added TeX: ${re}`),j&&(ce.file(se,j),J.push(se),console.log(`[SaveAll] Added BibTeX: ${se}`));const le=Np();if(le.length>0){console.log(`[SaveAll] Adding ${le.length} PNG figures...`);const Fe=await Cp();for(const Ve of Fe)ce.file(Ve.filename,Ve.blob),J.push(Ve.filename);console.log(`[SaveAll] Added ${Fe.length} PNG figures`)}if(f&&m&&(ce.file(f,m),J.push(f),console.log(`[SaveAll] Added data file: ${f}`)),X){const Fe=`${P}feedback_v${o}.json`;ce.file(Fe,JSON.stringify(X,null,2)),J.push(Fe)}if(V&&V.length>0)for(const Fe of V){const Ve=`${P}oversight_v${Fe.version||1}.json`;ce.file(Ve,JSON.stringify(Fe,null,2)),J.push(Ve)}const Ee=await ce.generateAsync({type:"blob"}),Ne=`${P}icis_submission_v${l}.zip`,we=URL.createObjectURL(Ee),_e=document.createElement("a");_e.href=we,_e.download=Ne,document.body.appendChild(_e),_e.click(),document.body.removeChild(_e),URL.revokeObjectURL(we),console.log(`[SaveAll] Downloaded ${Ne} with ${J.length} files`),x([Ne,...J])}catch(P){console.error("[SaveAll] Error:",P),w(P instanceof Error?P.message:"Failed to create zip file")}C(!1)},U=async()=>{R(!0),A(null),w(null);const y=ra(l,"icis_paper");if(!y){w("No paper content available to compile"),R(!1);return}const V=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,P=Ip();console.log(`[Compile] Compiling with ${P.length} PNG figures`);const ce=await vp(V,y,P.length>0?P:void 0);A(ce),ce.success||w(ce.error||"PDF compilation failed"),R(!1)},ae=()=>{v!=null&&v.pdfFilename&&xp(v.pdfFilename)},te=async()=>{F(!0),$(!1);const X=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,V=await Sp(X);I(V),F(!1)},L=()=>{_!=null&&_.fullUrl&&(navigator.clipboard.writeText(_.fullUrl),$(!0),setTimeout(()=>$(!1),3e3))},W=()=>{_!=null&&_.fullUrl&&Ep(_.fullUrl)};return s.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[s.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:s.jsx(Cc,{size:40})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),s.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",o," revision cycle(s)."]}),s.jsx(ci,{logs:u,height:"h-32"}),s.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Paper compiled (v",l,")"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," All sections verified"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Submission package generated"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),s.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[s.jsx("button",{onClick:U,disabled:S||E,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:S?s.jsxs(s.Fragment,{children:[s.jsx($h,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):s.jsxs(s.Fragment,{children:[s.jsx(zs,{size:18}),"Compile LaTeX to PDF"]})}),(v==null?void 0:v.success)&&s.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),s.jsxs("p",{className:"text-xs text-emerald-600",children:[v.pdfFilename," (",Math.round((v.fileSize||0)/1024)," KB)",v.pageCount&&` • ${v.pageCount} pages`]})]}),s.jsxs("button",{onClick:ae,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[s.jsx(Os,{size:16}),"Download"]})]})}),(v==null?void 0:v.success)&&(v==null?void 0:v.exceedsLimit)&&s.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),s.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",v.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),p&&s.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),s.jsx("p",{className:"text-xs text-orange-700 mt-1",children:p})]}),(v==null?void 0:v.success)&&s.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(gc,{size:18,className:"text-blue-600"}),s.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),s.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),_!=null&&_.success?s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",readOnly:!0,value:_.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),s.jsxs("button",{onClick:L,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[s.jsx(z0,{size:14}),k?"Copied!":"Copy"]})]}),s.jsx("div",{className:"flex gap-2",children:s.jsxs("button",{onClick:W,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[s.jsx(B0,{size:14}),"Open Preview"]})}),s.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",_.expiresIn]})]}):s.jsx("button",{onClick:te,disabled:D,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:D?s.jsxs(s.Fragment,{children:[s.jsx($h,{size:16,className:"animate-spin"}),"Creating Link..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Q0,{size:16}),"Create Shareable Link"]})})]}),s.jsxs("button",{onClick:G,disabled:E||S,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(uy,{size:18,className:E?"animate-pulse":""}),E?"Creating ZIP...":"Download All Files (.zip)"]}),s.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads ZIP with PDF, .tex, .bib, PNG figures, and data files"}),g.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[s.jsxs("p",{className:"font-medium mb-1",children:["Downloaded: ",g[0]]}),s.jsxs("p",{className:"text-xs",children:["Contains ",g.length-1," files: ",g.slice(1).map(y=>y.split(/[/\\]/).pop()).join(", ")]})]}),h&&s.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[s.jsx("p",{className:"font-medium",children:"Error:"}),s.jsx("p",{className:"text-xs",children:h}),(v==null?void 0:v.log)&&s.jsxs("details",{className:"mt-2 text-left",children:[s.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),s.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:v.log})]})]}),s.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},Yy=({state:u,isProcessing:o,onAction:l,uploadedFiles:c,onFileChange:p,detectionStatus:f,onRefreshDetection:m,onStageAbort:g,onStageRestart:x,filePrefix:h,dataFileName:w,dataFileContent:E})=>{const[C,S]=be.useState(),R=A=>{S(A),l("PROCEED_TO_SUPERVISOR")},v=()=>{switch(u.currentStage){case ge.SETUP:const A=u.rounds.length>0||u.currentPaperVersion>0||u.paperContent!=="";return s.jsx(ky,{logs:u.logs,stageStatus:u.stages[ge.SETUP],isProcessing:o,uploadedFiles:c,onFileChange:p,onAction:l,detectionStatus:f,onRefreshDetection:m,hasExistingCase:A});case ge.BUILDER:return s.jsx(Ly,{logs:u.logs,isProcessing:o,isPartialPaper:u.isPartialPaper,currentBuilderStep:u.currentBuilderStep,paperContent:u.paperContent,onAbort:()=>g==null?void 0:g(ge.BUILDER),onRestart:()=>x==null?void 0:x(ge.BUILDER)});case ge.REVIEWER:const _=u.stages[ge.REVIEWER]===Ie.COMPLETED;return s.jsx(Fy,{logs:u.logs,isProcessing:o,currentRound:u.currentRound,isComplete:_,onProceedToSupervisor:R,onAbort:()=>g==null?void 0:g(ge.REVIEWER),onRestart:()=>x==null?void 0:x(ge.REVIEWER),filePrefix:h});case ge.SUPERVISOR:const I=Is(u.currentRound),D=Dc();return s.jsx(By,{currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,lastFeedback:u.lastFeedback,isProcessing:o,oversightData:I,allOversight:D,onAction:l,reviewOutputFiles:C});case ge.REVISER:return s.jsx(Py,{logs:u.logs,isProcessing:o,currentPaperVersion:u.currentPaperVersion,paperContent:u.paperContent,onAbort:()=>g==null?void 0:g(ge.REVISER),onRestart:()=>x==null?void 0:x(ge.REVISER)});case ge.FINALIZE:return s.jsx(qy,{logs:u.logs,currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,filePrefix:h,dataAlert:u.dataAlert,dataFileName:w,dataFileContent:E});default:return s.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:s.jsxs("p",{children:["Unknown stage: ",u.currentStage]})})}};return s.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:v()})};function Fs(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://icis-deploy-12-10-2025.vercel.app":""}async function $y(u){const o=Fs(),l=new URLSearchParams,c=`${o}/api/participants${l.toString()?`?${l}`:""}`,f=await(await fetch(c)).json();if(!f.success)throw new Error(f.error||"Failed to fetch participants");return f.participants}async function Jh(u){const o=Fs(),c=await(await fetch(`${o}/api/participants`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).json();if(!c.success)throw new Error(c.error||"Failed to update participant");return c.participant}async function Xy(u){const o=Fs(),c=await(await fetch(`${o}/api/participants`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u})})).json();if(!c.success)throw new Error(c.error||"Failed to delete participant")}async function Zy(){const u=Fs(),l=await(await fetch(`${u}/api/research-stats`)).json();if(!l.success)throw new Error(l.error||"Failed to fetch research stats");return l.stats}const Ts=({label:u,value:o,icon:l,color:c,subtext:p})=>s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-slate-500",children:u}),s.jsx("p",{className:`text-2xl font-bold ${c}`,children:o}),p&&s.jsx("p",{className:"text-xs text-slate-400 mt-1",children:p})]}),s.jsx("div",{className:`p-2 rounded-lg ${c.replace("text-","bg-").replace("-600","-100")}`,children:l})]})}),Qy=({label:u,count:o,total:l,color:c})=>{const p=l>0?o/l*100:0;return s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[s.jsx("span",{className:"text-slate-600",children:u}),s.jsx("span",{className:"text-slate-800 font-medium",children:o})]}),s.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:s.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${c}`,style:{width:`${Math.max(p,2)}%`}})})]})},Wy=({onViewParticipants:u})=>{const[o,l]=be.useState(null),[c,p]=be.useState(!0),[f,m]=be.useState(null),g=async()=>{p(!0),m(null);try{const h=await Zy();l(h)}catch(h){m(h instanceof Error?h.message:"Failed to load stats")}finally{p(!1)}};if(be.useEffect(()=>{g()},[]),c)return s.jsx("div",{className:"flex items-center justify-center h-64",children:s.jsx(tn,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(f)return s.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[s.jsx(vc,{size:20}),s.jsxs("span",{children:["Error: ",f]})]}),s.jsx("button",{onClick:g,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!o)return null;const x=[{label:"1. Registered",count:o.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:o.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:o.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:o.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:o.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:o.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:o.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:o.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:o.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:o.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:o.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:o.funnel.dropped_out||0,color:"bg-red-500"}];return s.jsxs("div",{className:"p-6 space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),s.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),s.jsxs("button",{onClick:g,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(tn,{size:16}),"Refresh"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[s.jsx(Ts,{label:"Total Participants",value:o.total,icon:s.jsx(fp,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${o.active} active`}),s.jsx(Ts,{label:"Surveys Sent",value:o.surveysSent,icon:s.jsx(Cc,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),s.jsx(Ts,{label:"Surveys Completed",value:o.surveysCompleted,icon:s.jsx(mc,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),s.jsx(Ts,{label:"Completion Rate",value:`${o.completionRate}%`,icon:s.jsx(up,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),o.alerts&&o.alerts.length>0&&s.jsx("div",{className:"space-y-2",children:o.alerts.map((h,w)=>s.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${h.type==="stuck"?"bg-amber-50 border-amber-200":h.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[s.jsx(vc,{size:18,className:h.type==="stuck"?"text-amber-500":h.type==="pending_survey"?"text-blue-500":"text-slate-500"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-sm text-slate-800",children:h.message}),s.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[h.participants.slice(0,3).join(", "),h.participants.length>3&&` +${h.participants.length-3} more`]})]})]},w))}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(hc,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),s.jsx("div",{className:"space-y-1",children:x.map(h=>s.jsx(Qy,{label:h.label,count:h.count,total:o.total,color:h.color},h.label))})]}),s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(b0,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),s.jsx("span",{className:"text-lg font-bold text-emerald-600",children:o.groups.group1.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group1.dropRate,"%"]})]})]})]}),s.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),s.jsx("span",{className:"text-lg font-bold text-blue-600",children:o.groups.group2.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group2.dropRate,"%"]})]})]})]}),o.groups.unassigned>0&&s.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:s.jsxs("span",{className:"text-sm text-slate-600",children:[o.groups.unassigned," unassigned participant(s)"]})})]})]})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{onClick:u,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},Ac={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Dp={1:"With Oversight",2:"Control (No Oversight)"},Ky=({status:u})=>{const o={registered:"bg-gray-100 text-gray-700",confirmed_via_email:"bg-blue-100 text-blue-700",interview_completed:"bg-emerald-100 text-emerald-700",processing:"bg-yellow-100 text-yellow-700",paper_link_sent:"bg-purple-100 text-purple-700",survey_sent:"bg-cyan-100 text-cyan-700",review_email_sent:"bg-indigo-100 text-indigo-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o[u]}`,children:Ac[u]})},Jy=({groupId:u})=>{if(u===null)return s.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const o=u===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o}`,children:Dp[u]})},ev=({onBack:u})=>{const[o,l]=be.useState([]),[c,p]=be.useState(!0),[f,m]=be.useState(null),[g,x]=be.useState(""),[h,w]=be.useState(""),[E,C]=be.useState("all"),[S,R]=be.useState(null),[v,A]=be.useState(null),_=async()=>{p(!0),m(null);try{const G=await $y();l(G)}catch(G){m(G instanceof Error?G.message:"Failed to load participants")}finally{p(!1)}};be.useEffect(()=>{_()},[]);const I=o.filter(G=>{const U=!g||G.email.toLowerCase().includes(g.toLowerCase())||G.name.toLowerCase().includes(g.toLowerCase()),ae=!h||G.status===h,te=E==="all"||G.group_id===E;return U&&ae&&te}),D=async(G,U)=>{try{await Jh({email:G,status:U}),await _(),R(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update status")}},F=async(G,U)=>{try{await Jh({email:G,group_id:U}),await _(),R(null)}catch(ae){alert(ae instanceof Error?ae.message:"Failed to update group")}},k=async G=>{if(confirm(`Are you sure you want to delete participant ${G}?`))try{await Xy(G),await _(),R(null)}catch(U){alert(U instanceof Error?U.message:"Failed to delete participant")}},$=G=>new Date(G).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),H=["registered","confirmed_via_email","interview_completed","processing","paper_link_sent","survey_sent","review_email_sent","survey_completed","dropped_out"];return s.jsxs("div",{className:"p-6 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:u,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:s.jsx(A0,{size:20,className:"text-slate-600"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),s.jsxs("p",{className:"text-slate-500 text-sm",children:[I.length," of ",o.length," participants"]})]})]}),s.jsxs("button",{onClick:_,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(tn,{size:16,className:c?"animate-spin":""}),"Refresh"]})]}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[s.jsx(cp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),s.jsx("input",{type:"text",placeholder:"Search by name or email...",value:g,onChange:G=>x(G.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:h,onChange:G=>w(G.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"",children:"All Statuses"}),H.map(G=>s.jsx("option",{value:G,children:Ac[G]},G))]}),s.jsx(pc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:E===null?"null":E==="all"?"all":E,onChange:G=>{const U=G.target.value;C(U==="all"?"all":U==="null"?null:parseInt(U))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"all",children:"All Groups"}),s.jsx("option",{value:"1",children:"Group 1: With Oversight"}),s.jsx("option",{value:"2",children:"Group 2: Control"}),s.jsx("option",{value:"null",children:"Unassigned"})]}),s.jsx(pc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),f&&s.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:f}),s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:s.jsxs("tr",{children:[s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),s.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),s.jsx("tbody",{children:c?s.jsx("tr",{children:s.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[s.jsx(tn,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):I.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):I.map(G=>s.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[s.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:G.name||s.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),s.jsx("td",{className:"px-4 py-3 text-slate-600",children:G.email}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(Ky,{status:G.status})}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(Jy,{groupId:G.group_id})}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:$(G.registered_at)}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:$(G.updated_at)}),s.jsxs("td",{className:"px-4 py-3 text-right relative",children:[s.jsx("button",{onClick:()=>R(S===G.id?null:G.id),className:"p-1 rounded hover:bg-slate-100",children:s.jsx(op,{size:16,className:"text-slate-400"})}),S===G.id&&s.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),H.map(U=>s.jsxs("button",{onClick:()=>D(G.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.status===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.status===U&&s.jsx(on,{size:12}),s.jsx("span",{className:G.status===U?"":"ml-4",children:Ac[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map(U=>s.jsxs("button",{onClick:()=>F(G.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.group_id===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.group_id===U&&s.jsx(on,{size:12}),s.jsx("span",{className:G.group_id===U?"":"ml-4",children:Dp[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsxs("button",{onClick:()=>k(G.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[s.jsx(my,{size:14}),"Delete Participant"]})]})]})]},G.id))})]})})})]})},tv=({onClose:u})=>{const[o,l]=be.useState("dashboard");return s.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:o==="dashboard"?s.jsx(Wy,{onViewParticipants:()=>l("participants")}):s.jsx(ev,{onBack:()=>l("dashboard")})})},nv="modulepreload",av=function(u){return"/asd/"+u},ep={},dc=function(o,l,c){let p=Promise.resolve();if(l&&l.length>0){let m=function(h){return Promise.all(h.map(w=>Promise.resolve(w).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),x=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));p=m(l.map(h=>{if(h=av(h),h in ep)return;ep[h]=!0;const w=h.endsWith(".css"),E=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${E}`))return;const C=document.createElement("link");if(C.rel=w?"stylesheet":nv,w||(C.as="script"),C.crossOrigin="",C.href=h,x&&C.setAttribute("nonce",x),document.head.appendChild(C),w)return new Promise((S,R)=>{C.addEventListener("load",S),C.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function f(m){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=m,window.dispatchEvent(g),!g.defaultPrevented)throw m}return p.then(m=>{for(const g of m||[])g.status==="rejected"&&f(g.reason);return o().catch(f)})},rv=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
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
`,iv=`================================================================================\r
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
`,sv=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
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
`,lv=`================================================================================
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
`,ov=`================================================================================
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
`,cv=`================================================================================
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
`,uv=`ICIS Paper Title\r
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
`,dv={SETUP:lv,BUILDER:rv,REVIEWER:iv,SUPERVISOR:ov,REVISER:sv,FINALIZE:cv,TEMPLATE:uv};function fv(u){return u.replace(/\{ICIS_PATH\}/g,ap)}const hv=Object.fromEntries(Object.entries(dv).map(([u,o])=>[u,fv(o)]));async function Op(u){const o=hv[u];return o||(console.error(`Prompt not found: ${u}`),`[Prompt not found: ${u}]`)}const _c="https://icis-deploy-12-10-2025.vercel.app",ks="http://localhost:3001";let Lc="research";const jp={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function kp(){return jp[Lc].gemini}function wc(){return jp[Lc].openai}function pv(u){Lc=u,console.log(`[GeminiService] Paper mode set to: ${u}`),console.log(`[GeminiService] Using Gemini model: ${kp()}`),console.log(`[GeminiService] Using OpenAI model: ${wc()}`)}console.log("[API] Using Vercel proxy:",_c);class Ls extends Error{constructor(o,l,c,p=!1,f){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.retryable=p,this.statusCode=f,this.name="GeminiError"}}const Lp=u=>new Promise(o=>setTimeout(o,u));async function mv(u,o){var h,w,E,C,S;const l=o===ks?`${o}/api/gemini/chat`:`${o}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${l}`);const c={...u,model:kp()},p=new AbortController,f=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),p.abort()},18e4),m=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),signal:p.signal});if(clearTimeout(f),!m.ok){const R=await m.json().catch(()=>({error:"Unknown error"}));throw new Ls("UNKNOWN",`Gemini proxy error: ${R.error||R.details||"Unknown error"}`,JSON.stringify(R),m.status>=500)}const g=await m.json(),x=(S=(C=(E=(w=(h=g.candidates)==null?void 0:h[0])==null?void 0:w.content)==null?void 0:E.parts)==null?void 0:C[0])==null?void 0:S.text;if(!x)throw new Ls("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(g).substring(0,200),!0);return x}async function fr(u,o){const l={contents:[{parts:[{text:u}]}],generationConfig:{maxOutputTokens:8192,temperature:.7}};o&&(l.systemInstruction={parts:[{text:o}]});const c=await Up();if(c.type==="vercel")return console.log("[Gemini] Using Vercel proxy..."),mv(l,c.baseUrl);throw new Ls("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function fc(u){let o=u;const l=o.match(/```latex\s*([\s\S]*?)\s*```/);l&&(o=l[1]);const c=o.indexOf("\\end{document}");return c!==-1&&(o=o.substring(0,c+14)),o=o.replace(/```javascript[\s\S]*?```/g,""),o=o.replace(/```js[\s\S]*?```/g,""),o=o.replace(/```python[\s\S]*?```/g,""),o=o.replace(/```[\s\S]*?```/g,""),o=o.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/Verification Report:[\s\S]*$/gi,""),o=o.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/console\.log\([\s\S]*?\);/g,""),o=o.replace(/const \w+ = \{[\s\S]*?\};/g,""),o=o.trim(),console.log(`[cleanLatexOutput] Cleaned content from ${u.length} to ${o.length} characters`),o}async function gv(u,o,l="application/pdf"){throw new Ls("API_KEY_INVALID","Gemini API key is not configured","Missing VITE_GEMINI_API_KEY",!1)}function yv(u){const o=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
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
4. Outlines next steps`,minWords:400},{name:"References",key:"references",prompt:`Generate a References section with 15-20 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text like "[Reference to be completed]"
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

FORMAT: Simple list in APA 7th edition style (NO \\bibitem commands needed):

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. \\textit{MIS Quarterly}, \\textit{13}(3), 319-340.

DeLone, W. H., \\& McLean, E. R. (2003). The DeLone and McLean model of information systems success: A ten-year update. \\textit{Journal of Management Information Systems}, \\textit{19}(4), 9-30.

Venkatesh, V., Morris, M. G., Davis, G. B., \\& Davis, F. D. (2003). User acceptance of information technology: Toward a unified view. \\textit{MIS Quarterly}, \\textit{27}(3), 425-478.

APA 7TH EDITION FORMAT RULES (MUST FOLLOW EXACTLY):
1. Author format: LastName, F. M., \\& LastName, F. M. (use ampersand before last author)
2. For 3+ authors: List all authors up to 20
3. Year in parentheses after authors: (2020).
4. Article title in sentence case (only first word and proper nouns capitalized)
5. Journal name in italics: \\textit{MIS Quarterly}
6. Volume number in italics, issue in parentheses: \\textit{44}(2), 523-548.
7. Sort alphabetically by first author's last name

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods
- Yin (2018) - Case study research design

Requirements:
1. Use STRICT APA 7th edition format throughout
2. ONLY include papers you are confident exist in academic databases
3. References should match the inline citations used in the paper (Author, Year)
4. All journal/conference names in \\textit{}
5. Use \\& for multiple authors, not "and"
6. Sort references alphabetically by first author's last name`,minWords:300}):o.push({name:"Results",key:"results",prompt:`Write a COMPLETE Results section (1200-1500 words) that:
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
4. Ends with a strong closing statement`,minWords:400},{name:"References",key:"references",prompt:`Generate a References section with 20-30 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text like "[Reference to be completed]"
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

FORMAT: Simple list in APA 7th edition style (NO \\bibitem commands needed):

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. \\textit{MIS Quarterly}, \\textit{13}(3), 319-340.

DeLone, W. H., \\& McLean, E. R. (2003). The DeLone and McLean model of information systems success: A ten-year update. \\textit{Journal of Management Information Systems}, \\textit{19}(4), 9-30.

Venkatesh, V., Morris, M. G., Davis, G. B., \\& Davis, F. D. (2003). User acceptance of information technology: Toward a unified view. \\textit{MIS Quarterly}, \\textit{27}(3), 425-478.

APA 7TH EDITION FORMAT RULES (MUST FOLLOW EXACTLY):
1. Author format: LastName, F. M., \\& LastName, F. M. (use ampersand before last author)
2. For 3+ authors: List all authors up to 20
3. Year in parentheses after authors: (2020).
4. Article title in sentence case (only first word and proper nouns capitalized)
5. Journal name in italics: \\textit{MIS Quarterly}
6. Volume number in italics, issue in parentheses: \\textit{44}(2), 523-548.
7. Sort alphabetically by first author's last name
8. Conference papers: Author, A. A. (Year). Title. In \\textit{Proceedings of Conference Name} (pp. xx-xx).

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods
- Yin (2018) - Case study research design
- Rogers (2003) - Diffusion of Innovations
- Straub et al. (2004) - Validation guidelines, MIS Quarterly

Requirements:
1. Use STRICT APA 7th edition format throughout
2. ONLY include papers you are confident exist in academic databases
3. Include mix of: journal articles, conference papers (ICIS, ECIS, AMCIS), books
4. References should match the inline citations used in the paper (Author, Year)
5. All journal/conference names in \\textit{}
6. Use \\& for multiple authors, not "and"
7. Sort references alphabetically by first author's last name`,minWords:500}),o}async function vv(u,o){const l=Object.entries(o.previousSections).map(([x,h])=>`[${x}]
${h.substring(0,500)}...`).join(`

`);let c="";if(u.key==="references"){const x=Object.values(o.previousSections).join(`
`),h=/\(([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?),?\s*(\d{4})\)/g,w=new Set;let E;for(;(E=h.exec(x))!==null;){const C=E[1].replace(/\s+&\s+/g," & ").replace(/\s+and\s+/g," & "),S=E[2];w.add(`${C} (${S})`)}if(w.size>0){const C=[...w].sort().join(`
- `);console.log(`[generateSection] Found ${w.size} inline citations in paper`),c=`
CITATIONS USED IN PAPER:
The following citations were used in the paper body. Ensure you include matching references:
- ${C}

Generate complete APA references for each of these citations.
`}}let p="";const f=["abstract","introduction","methodology","results","discussion","conclusion"];o.dataSummary&&f.includes(u.key)?(console.log(`[generateSection] Adding data summary to ${u.key} section (${o.dataSummary.length} chars)`),u.key==="methodology"||u.key==="results"?p=`
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

IMPORTANT FOR ${u.key.toUpperCase()}:
- This is an EMPIRICAL study with real data, NOT a purely theoretical paper
- Mention the empirical nature of the research appropriately for this section
- Reference the data-driven approach where relevant
`):o.dataSummary&&console.log(`[generateSection] Data summary available but not used for ${u.key} section`);const m=`You are writing an academic research paper for ICIS (International Conference on Information Systems).

RESEARCH CONTEXT (from interview):
${o.interviewTranscript.substring(0,3e3)}
${p}
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
- Do NOT include a bibliography or reference list at the end of this section
- References will be collected at the end of the paper`;return await fr(m,"You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.")}const bv=async(u="Mock transcript content...",o=!1,l,c,p)=>{var R,v,A,_;console.log(`[runBuilder] ENTRY - dataFileName="${c}" (type: ${typeof c})`);const f=yv(o),m={};console.log(`[Builder] Starting section-by-section generation (${f.length} sections, ${o?"partial":"full"} paper)`);let g,x;if(c){console.log(`[Builder] Data file provided: ${c} - analyzing for ALL research types`),l==null||l("Data Analysis","starting");try{const I=await zp(c,D=>console.log(`[Builder] ${D}`),p);console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((R=I.dataSummary)==null?void 0:R.length)||0,error:I.error}),I.success&&I.dataSummary?(g=I.dataSummary,console.log("[Builder] Data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",g.substring(0,500)),l==null||l("Data Analysis","completed")):(x=`*** DATA ALERT: Could not analyze data file "${c}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${x}`),l==null||l("Data Analysis","error"))}catch(I){x=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${x}`),l==null||l("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data analysis");let h=[],w=!1,E="";if(!o)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations BEFORE Results section..."),console.log(`[Builder] Data summary available: ${!!g}, Data file: ${c||"none"}`);const I=`Research Interview: ${u.substring(0,2e3)}`,D=await Rc(u,I,c,F=>console.log(`[Builder] ${F}`),g);h=D.figures,w=D.usedSyntheticData,h.length>0&&(E=`

GENERATED FIGURES (reference these in your Results section):
`,h.forEach((F,k)=>{E+=`- Figure ${k+1} (\\ref{fig:fig${k+1}}): ${F.description}
`}),E+=`
IMPORTANT: Reference each figure in the text using Figure~\\ref{fig:fig1}, Figure~\\ref{fig:fig2}, etc.
`,E+=`Example: "As shown in Figure~\\ref{fig:fig1}, the distribution of..."
`),D.dataAlert&&(x=x?`${x}
${D.dataAlert}`:D.dataAlert),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${h.length} figures before Results section`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error");const D=`*** VISUALIZATION ERROR: ${I.message}`;x=x?`${x}
${D}`:D,w=!0}for(const I of f)try{l==null||l(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const D=I.key==="results"&&E?(g||"")+E:g,F=await vv(I,{interviewTranscript:u,previousSections:m,dataSummary:D});m[I.key]=F,l==null||l(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${F.split(/\s+/).length} words)`),await Lp(500)}catch(D){throw l==null||l(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,D),new Error(`Failed to generate ${I.name}: ${D.message}`)}if(!o&&h.length===0)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations (post-sections fallback)...");const I=`
Abstract: ${((v=m.abstract)==null?void 0:v.substring(0,500))||""}
Research Focus: ${((A=m.introduction)==null?void 0:A.substring(0,500))||""}
Methodology: ${((_=m.methodology)==null?void 0:_.substring(0,500))||""}
`,D=await Rc(u,I,c,F=>console.log(`[Builder] ${F}`),g);h=D.figures,w=D.usedSyntheticData,D.dataAlert&&(x=x?`${x}
${D.dataAlert}`:D.dataAlert),!g&&D.dataSummary&&(g=D.dataSummary),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${h.length} figures (fallback)`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error"),w=!0}const C=_v(m,o,h,w),S=C.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${S} words, ${h.length} figures`),{paperContent:C,dataAlert:x,usedSyntheticData:w,dataSummary:g}};function xv(u){let o=u;if(o=o.replace(/^```(?:latex|tex)?\s*\n?/i,""),o=o.replace(/\n?```\s*$/i,""),o.includes("\\documentclass")){console.log("[assemblePaper] Cleaning up References: removing nested LaTeX document structure");const l=o.match(/\\begin\{thebibliography\}[\s\S]*?\\end\{thebibliography\}/);if(l)o=l[0];else{const c=o.match(/\\begin\{document\}([\s\S]*?)\\end\{document\}/);c&&(o=c[1].trim(),o=o.replace(/\\maketitle\s*/g,""),o=o.replace(/\\section\*?\{References\}\s*/g,""))}}return o=o.replace(/^\\section\*?\{References\}\s*/im,""),o.includes("\\bibitem{")&&(o.includes("\\begin{thebibliography}")||(console.log("[assemblePaper] Adding missing thebibliography wrapper"),o=`\\begin{thebibliography}{99}
${o}
\\end{thebibliography}`)),o.trim()}function Sv(u){let o=u;return o=o.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),o=o.replace(/([^\\])%/g,"$1\\%"),o=o.replace(/([^\\])& /g,"$1\\& "),o=o.replace(/([^\\])#/g,"$1\\#"),o=o.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),o=o.replace(/ \*([^*\s])/g," $\\ast$$1"),o=o.replace(/([^*\s])\* /g,"$1$\\ast$ "),o=o.replace(/__/g,"\\_\\_"),o=o.replace(/"/g,"''"),o=o.replace(/"/g,"``"),o=o.replace(/'/g,"'"),o=o.replace(/'/g,"`"),o}const Ev=`\\documentclass[12pt]{article}
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

`,Av=`
\\end{document}
`;function _v(u,o,l=[],c=!1){const p=o?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],f={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let m=Ev;c&&!o&&(m+=`% ============================================================================
% IMPORTANT NOTICE
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Data}\\\\[0.5em]
The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings. This paper is a draft produced by ICIScopilot and requires verification of all data before submission.
}}
\\end{center}
\\vspace{1em}

`);for(const g of p)if(u[g]){const x=Sv(u[g]);if(g==="title")m+=`\\title{${x}}
\\maketitle

`;else if(g==="abstract")m+=`\\begin{abstract}
${x}
\\end{abstract}

`;else if(g==="references"){const h=xv(u[g]);h.includes("\\begin{thebibliography}")?m+=`
${h}
`:m+=`\\section*{References}

${h}
`}else g==="results"&&l.length>0?(m+=`\\section{${f[g]}}

`,c&&(m+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),m+=Mp(l),m+=`
${x}

`):m+=`\\section{${f[g]}}

${x}

`}return m+=Av,m}async function wv(u,o,l){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),l==null||l("Analyzing data with AI...");const c=u.split(`
`),p=c.slice(0,101).join(`
`),f=`You are a data analyst. Analyze this CSV data and provide a structured summary.

CSV FILE: ${o}
TOTAL ROWS (estimate): ${c.length-1}

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
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const m=await fr(f,"Analyze CSV data");if(m)return console.log("[DataAnalysis] Gemini analysis complete"),l==null||l("AI data analysis complete"),{success:!0,dataSummary:m,dataFileFound:!0}}catch(m){console.error("[DataAnalysis] Gemini analysis failed:",m)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function zp(u,o,l){var f,m,g,x,h,w,E,C,S,R;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${u}" (type: ${typeof u})`),l){o==null||o("Loading data file preview for verification...");const v=await Tp(u);if(!v.success)return console.error(`[DataAnalysis] Failed to get file preview: ${v.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${v.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${v.filename}, First line: ${(f=v.firstLine)==null?void 0:f.substring(0,100)}...`),o==null||o(`Data file found: ${u} (${v.totalLines} lines). Awaiting confirmation...`),!await l({filename:v.filename,firstLine:v.firstLine,totalLines:v.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),o==null||o("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),o==null||o("Data file confirmed. Starting analysis...")}o==null||o("Analyzing data file...");const c=ui();if(c!=null&&c.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const v=await wv(c.content,u,o);if(v.success)return v}if(c!=null&&c.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),o==null||o("Using cloud data analysis...");try{const v=await Us(c.content,"full");if(v.success&&v.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let A=`File: ${u}
`;if(A+=`Dataset shape: ${(m=v.summary)==null?void 0:m.shape.rows} rows x ${(g=v.summary)==null?void 0:g.shape.columns} columns

`,A+=`COLUMN NAMES AND TYPES:
`,(x=v.summary)==null||x.columns.forEach(_=>{var D;const I=(D=v.summary)==null?void 0:D.numeric_columns.includes(_);A+=`  - ${_}: ${I?"numeric":"categorical"}
`}),A+=`
`,(h=v.summary)!=null&&h.numeric_columns.length){A+=`NUMERIC COLUMNS STATISTICS:
`;for(const _ of v.summary.numeric_columns.slice(0,10)){const I=(w=v.summary.descriptive_stats)==null?void 0:w[_];I&&(A+=`  ${_}:
`,A+=`    min=${I.min}, max=${I.max}, mean=${I.mean}, std=${I.std}
`)}A+=`
`}if((E=v.summary)!=null&&E.categorical_columns.length){A+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const _ of v.summary.categorical_columns.slice(0,5)){const I=(C=v.summary.categorical_summary)==null?void 0:C[_];if(I){const D=Object.keys(I).length;A+=`  ${_}: ${D} unique values
`,D<=10&&(A+=`    Values: ${JSON.stringify(I)}
`)}}}return o==null||o("Cloud data analysis complete"),{success:!0,dataSummary:A,dataFileFound:!0}}}catch(v){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",v)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),o==null||o("Using local Python for analysis...");const p=`import os
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
`;try{const v=await _p("analyze_data.py",p,u);if(console.log("[DataAnalysis] Python execution result:",{success:v.success,dataFileFound:v.dataFileFound,stdoutLength:((S=v.stdout)==null?void 0:S.length)||0,stderrLength:((R=v.stderr)==null?void 0:R.length)||0}),v.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",v.stdout.substring(0,1e3)),v.stderr&&console.log("[DataAnalysis] Python stderr:",v.stderr),!v.success)return console.error("[DataAnalysis] Python execution failed:",v.error),{success:!1,dataFileFound:!1,error:v.error};let A;const _=v.dataFileFound??!1;if(v.stdout){const I=v.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(I)A=I[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",A.substring(0,500));else{if(v.stdout.includes("DATA FILE NOT FOUND")||v.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',v.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',v.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return o==null||o("Data analysis complete"),{success:!0,dataSummary:A,dataFileFound:_}}catch(v){return console.error("[DataAnalysis] Error:",v),{success:!1,dataFileFound:!1,error:v.message}}}async function Rc(u,o,l,c,p){const f=ui();if(f!=null&&f.content){console.log("[Visualizations] Using QuickChart.io for figure generation..."),c==null||c("Analyzing data for visualization...");try{const m=await Us(f.content,"full");if(m.success&&m.chart_data&&m.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${m.chart_data.length} chart configs`),c==null||c(`Generating ${m.chart_data.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:g}=await dc(async()=>{const{generateQuickChartFigures:h}=await Promise.resolve().then(()=>cc);return{generateQuickChartFigures:h}},void 0),x=await g(m.chart_data);if(x.success&&x.figures&&x.figures.length>0){const h=x.figures.map(E=>({filename:E.filename,description:E.description,latexRef:E.filename,base64:E.base64})),{storePngFiguresForCompilation:w}=await dc(async()=>{const{storePngFiguresForCompilation:E}=await Promise.resolve().then(()=>cc);return{storePngFiguresForCompilation:E}},void 0);return w(x.figures.map(E=>({filename:E.filename,base64:E.base64}))),c==null||c(`Generated ${h.length} publication-quality figures`),console.log(`[Visualizations] QuickChart.io generated ${h.length} PNG figures`),{figures:h,usedSyntheticData:!1,dataFileFound:!0,dataSummary:m.text_summary||p}}else console.warn("[Visualizations] QuickChart.io generation failed:",x.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(m){console.warn("[Visualizations] QuickChart.io failed:",m)}}console.log("[Visualizations] No data available, generating AI-based PNG figures via QuickChart.io..."),c==null||c("Generating AI-based visualizations...");try{const m=await Rv(u,o,p);if(m&&m.length>0){console.log(`[Visualizations] AI generated ${m.length} chart configurations`),c==null||c(`Rendering ${m.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:g,storePngFiguresForCompilation:x}=await dc(async()=>{const{generateQuickChartFigures:w,storePngFiguresForCompilation:E}=await Promise.resolve().then(()=>cc);return{generateQuickChartFigures:w,storePngFiguresForCompilation:E}},void 0),h=await g(m);if(h.success&&h.figures&&h.figures.length>0){const w=h.figures.map(E=>({filename:E.filename,description:E.description,latexRef:E.filename,base64:E.base64}));return x(h.figures.map(E=>({filename:E.filename,base64:E.base64}))),c==null||c(`Generated ${w.length} AI-based PNG figures`),console.log(`[Visualizations] QuickChart.io rendered ${w.length} AI-generated PNG figures`),{figures:w,usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** NOTE: Visualizations generated using AI-synthesized illustrative data. No data file was provided."}}}}catch(m){console.warn("[Visualizations] AI QuickChart generation failed:",m)}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function Rv(u,o,l){const c=`You are generating CONCEPTUAL chart data for a research paper visualization.

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

Return ONLY the JSON array with 1-2 conceptual figures.`;try{let f=(await fr(c,"Generate chart data")).trim();f.startsWith("```json")?f=f.slice(7):f.startsWith("```")&&(f=f.slice(3)),f.endsWith("```")&&(f=f.slice(0,-3)),f=f.trim();const m=JSON.parse(f);if(Array.isArray(m)&&m.length>0)return console.log(`[AI ChartData] Generated ${m.length} chart configurations`),m}catch(p){console.error("[AI ChartData] Failed to generate chart data:",p)}return[]}function Mp(u){if(u.length===0)return"";let o=`
% Generated Figures (PNG via QuickChart.io)
`;return u.forEach((l,c)=>{const p=l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),f=l.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");o+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{${p}}
\\caption{${f}}
\\label{fig:fig${c+1}}
\\end{figure}
`}),o}async function tp(u){try{return(await fetch(`${u}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function Up(){return await tp(_c)?{type:"vercel",baseUrl:_c}:await tp(ks)?{type:"local",baseUrl:ks}:{type:"direct",baseUrl:""}}async function Tv(u,o){var m,g,x;const l=o===ks?`${o}/api/openai/chat`:`${o}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${l}`),console.log(`[OpenAI] Using model: ${wc()}`);const c=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:wc(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:u}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!c.ok){const h=await c.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",c.status,h),new Error(`OpenAI API error: ${c.status} - ${h.error||h.details||"Unknown error"}`)}const f=(x=(g=(m=(await c.json()).choices)==null?void 0:m[0])==null?void 0:g.message)==null?void 0:x.content;if(!f)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let h=f.trim();return h.startsWith("```")&&(h=h.replace(/^```(?:json)?\s*\n?/,""),h=h.replace(/\n?```\s*$/,"")),h=h.trim(),JSON.parse(h)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",f.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function Bs(u){const o=await Up();if(o.type==="vercel"||o.type==="local")return console.log(`[OpenAI] Using ${o.type} proxy...`),Tv(u,o.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const Nv=async(u,o=1,l="icis_paper",c)=>{var S,R,v,A,_,I,D,F;const p=await Op("REVIEWER");let f="";try{console.log("[Reviewer] Loading MISQ review criteria PDF...");const k=await Ap("reviewingMISQ.pdf");k.success&&k.base64&&(console.log("[Reviewer] Extracting review criteria from PDF..."),f=await gv(`Extract and summarize the key IS journal review criteria from this document.
         Focus on: evaluation dimensions, quality standards, common issues to look for,
         and what makes a strong contribution.
         Keep the summary under 500 words, in bullet point format.`,k.base64,k.mimeType),console.log("[Reviewer] MISQ criteria loaded successfully"))}catch(k){console.warn("[Reviewer] Could not load MISQ review criteria:",k)}const m=u.match(/\\title\{([^}]+)\}/),g=m?m[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const x=Cv(u);console.log(`[Reviewer] Found ${x.length} sections: ${x.map(k=>k.name).join(", ")}`);let h;if(x.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const k=`${p}

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
}`;h=await Bs(k)}else{console.log("[Reviewer] Starting section-by-section review...");const k=[];for(const $ of x){console.log(`[Reviewer] Reviewing section: ${$.name}...`);const H=await Iv($,g);k.push(H),console.log(`[Reviewer] ${$.name} score: ${H.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),h=await Dv(k,u,f),console.log("[Reviewer] Section-by-section review complete")}if(h.novelty===void 0||h.significance===void 0||h.methodologicalRigor===void 0||h.clarity===void 0||h.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const w={novelty:h.novelty,significance:h.significance,methodologicalRigor:h.methodologicalRigor,clarity:h.clarity,relevance:h.relevance,reviewScore:h.novelty,reliabilityScore:h.significance,alignmentScore:h.methodologicalRigor,errorsDetected:(((S=h.majorConcerns)==null?void 0:S.length)||0)+(((R=h.minorCorrections)==null?void 0:R.length)||0),feedback:h.overallAssessment,majorConcerns:h.majorConcerns||[],minorCorrections:h.minorCorrections||[],researchQuestionFeedback:h.researchQuestionFeedback,methodFeedback:h.methodFeedback,impactFeedback:h.impactFeedback,writingFeedback:h.writingFeedback,overallAssessment:h.overallAssessment,noveltyComment:h.noveltyComment,significanceComment:h.significanceComment,methodologicalRigorComment:h.methodologicalRigorComment,clarityComment:h.clarityComment,relevanceComment:h.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:h.criticalAlerts??[]};if(c&&c.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const k=await Ov(u,c);w.trustworthiness={reliability:k.reliability,reliabilityRationale:k.rationales.reliability,benevolence:k.benevolence,benevolenceRationale:k.rationales.benevolence,goalAlignment:k.goalAlignment,goalAlignmentRationale:k.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(k){console.warn("[Reviewer] Trustworthiness assessment failed:",k.message),w.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${k.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${k.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${k.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),w.trustworthiness={reliability:((v=h.trustworthiness)==null?void 0:v.reliability)??5,reliabilityRationale:((A=h.trustworthiness)==null?void 0:A.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((_=h.trustworthiness)==null?void 0:_.benevolence)??5,benevolenceRationale:((I=h.trustworthiness)==null?void 0:I.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((D=h.trustworthiness)==null?void 0:D.goalAlignment)??5,goalAlignmentRationale:((F=h.trustworthiness)==null?void 0:F.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const E={version:o,paperId:l,timestamp:new Date().toISOString(),reviewScores:{novelty:w.novelty,significance:w.significance,methodologicalRigor:w.methodologicalRigor,clarity:w.clarity,relevance:w.relevance},reviewComments:{novelty:w.noveltyComment,significance:w.significanceComment,methodologicalRigor:w.methodologicalRigorComment,clarity:w.clarityComment,relevance:w.relevanceComment},averageScore:(w.novelty+w.significance+w.methodologicalRigor+w.clarity+w.relevance)/5,errorCounts:{majorErrors:w.majorConcerns.length,minorErrors:w.minorCorrections.length},errorDetails:{majorErrors:w.majorConcerns,minorErrors:w.minorCorrections},trustworthiness:w.trustworthiness,criticalAlerts:w.criticalAlerts.map((k,$)=>({number:$+1,title:k.title,status:"Open",impact:k.impact,details:k.details,actionRequired:k.actionRequired,consequence:k.consequence}))},C={version:o,paperId:l,timestamp:new Date().toISOString(),researchQuestion:w.researchQuestionFeedback,method:w.methodFeedback,potentialImpact:w.impactFeedback,writing:w.writingFeedback,majorConcerns:w.majorConcerns,minorCorrections:w.minorCorrections,overallAssessment:w.overallAssessment};w.oversightFilePath=pp(E),w.feedbackFilePath=Ic(C);try{await xc(`oversight_v${o}.json`,E),await xc(`feedback_v${o}.json`,C),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(k){console.warn("[Reviewer] Could not save files to disk:",k)}return w};function Cv(u){const o=[],l=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],c=u.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let p="";c&&(p=c[1].trim());for(const{pattern:f,name:m,focus:g}of l){const x=new RegExp(f.source,f.flags);let h,w="";for(;(h=x.exec(u))!==null;)w+=h[2]||h[0];w.trim()&&(m==="Introduction"&&p&&(w=`ABSTRACT:
${p}

INTRODUCTION:
${w}`),o.push({name:m,content:w.trim(),reviewFocus:g}))}if(o.length===0){const f=u.split(/\\section\*?\{/);for(let m=1;m<f.length;m++){const g=f[m].indexOf("}");if(g>0){const x=f[m].substring(0,g),h=f[m].substring(g+1);o.push({name:x,content:h.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return o.map(f=>({...f,content:f.content.substring(0,15e3)}))}async function Iv(u,o){const l=`You are reviewing the "${u.name}" section of an academic IS (Information Systems) paper titled: "${o}"

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
}`,c=await Bs(l);if(c.score===void 0)throw new Error(`[Reviewer] Section "${u.name}" response missing required score field`);return{sectionName:u.name,score:c.score,strengths:c.strengths||[],weaknesses:c.weaknesses||[],suggestions:c.suggestions||[],majorConcerns:c.majorConcerns||[],minorCorrections:c.minorCorrections||[]}}async function Dv(u,o,l){const c=u.map(h=>`## ${h.sectionName} (Score: ${h.score}/5)
Strengths: ${h.strengths.join("; ")||"None identified"}
Weaknesses: ${h.weaknesses.join("; ")||"None identified"}
Major Concerns: ${h.majorConcerns.join("; ")||"None"}
Minor Corrections: ${h.minorCorrections.join("; ")||"None"}`).join(`

`),p=u.filter(h=>h.score>0).map(h=>h.score),f=p.length>0?p.reduce((h,w)=>h+w,0)/p.length:3,m=u.flatMap(h=>h.majorConcerns),g=u.flatMap(h=>h.minorCorrections);u.flatMap(h=>h.suggestions);const x=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${c}

AVERAGE SECTION SCORE: ${f.toFixed(1)}/5

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
}`;return await Bs(x)}const Ov=async(u,o)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const l=o.substring(0,15e3),c=u.substring(0,15e3),p=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

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
}`,f=await Bs(p);if(f.reliability===void 0||f.benevolence===void 0||f.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment}),{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment,rationales:{reliability:f.reliabilityRationale,benevolence:f.benevolenceRationale,goalAlignment:f.goalAlignmentRationale}}};function jv(u){const o=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let l=-1,c="";for(const p of o){const f=u.match(p);if(f&&f.index!==void 0){l=f.index,c=f[0];break}}if(l===-1){const p=Math.floor(u.length*.5),f=u.substring(p).match(/\\section\*?\{[^}]+\}/);f&&f.index!==void 0&&(l=p+f.index,c=f[0])}return l===-1?{part1:u,part2:"",splitPoint:""}:{part1:u.substring(0,l),part2:u.substring(l),splitPoint:c}}const kv=async(u,o,l,c,p)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${u.length} characters`),console.log(`[Reviser] Feedback length: ${o.length} characters`),console.log("[Reviser] Loading reviser prompt...");const f=await Op("REVISER");console.log(`[Reviser] Prompt loaded (${f.length} chars)`);const g=u.length>2e4;let x;if(g){console.log("[Reviser] Large paper detected - using two-part revision strategy"),p==null||p("Large paper - revising in two parts...");const{part1:S,part2:R,splitPoint:v}=jv(u);console.log(`[Reviser] Split at "${v}" - Part 1: ${S.length} chars, Part 2: ${R.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),p==null||p("Revising Part 1: Abstract through Results...");const A=`${f}

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
- Output raw LaTeX content only

Produce the revised PART 1:`;let _=await fr(A,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");_=fc(_),_=_.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${_.length} chars`),await Lp(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),p==null||p("Revising Part 2: Discussion, Conclusion, References...");const I=`${f}

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

Produce the revised PART 2:`;let D=await fr(I,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");D=fc(D),console.log(`[Reviser] Part 2 complete: ${D.length} chars`),x=_+`

`+D,console.log(`[Reviser] Combined revised paper: ${x.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),p==null||p("Revising paper content...");const S=`${f}

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

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${S.length} characters`),console.log("[Reviser] Calling Gemini API..."),x=await fr(S,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),x=fc(x)}console.log(`[Reviser] Text revision complete! Output length: ${x.length} characters`);let h,w=!1;const E=(o+" "+l).toLowerCase();if(E.includes("figure")||E.includes("graph")||E.includes("chart")||E.includes("visual")||E.includes("plot")||E.includes("diagram")||E.includes("simulation")||E.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),p==null||p("Updating visualizations based on feedback...");try{let S;if(c){console.log("[Reviser] Analyzing data file for visualization...");try{S=(await zp(c,p)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(I){console.warn("[Reviser] Could not analyze data file:",I)}}const R=x.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),v=x.match(/\\section{Methodology}([\s\S]*?)\\section{/),A=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${o.substring(0,500)}
Supervisor: ${l.substring(0,300)}
Abstract: ${R?R[1].substring(0,400):""}
`,_=await Rc(A,o,c,p,S);if(w=_.usedSyntheticData,_.dataAlert&&(h=_.dataAlert,console.warn(`[Reviser] ${h}`)),_.figures.length>0){console.log(`[Reviser] Generated ${_.figures.length} updated figures`);const I=Mp(_.figures);let D=I;w&&(D=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${I}`),x.match(/(\\section{Results})/)&&(x=x.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${D}
`))}}catch(S){console.error("[Reviser] Visualization update failed:",S),p==null||p("Visualization update failed - continuing with text revisions"),h=`*** VISUALIZATION ERROR during revision: ${S.message}`,w=!0}}return console.log(`[Reviser] Revision complete! Final output length: ${x.length} characters`),{paperContent:x,dataAlert:h,usedSyntheticData:w}},np="http://localhost:3001/Data";function Lv(){const[u,o]=be.useState(Hh),l=be.useCallback((S,R)=>{o(v=>({...v,stages:{...v.stages,[S]:R}}))},[]),c=be.useCallback(S=>{o(R=>({...R,currentBuilderStep:S}))},[]),p=be.useCallback(S=>{const R=new Date().toLocaleTimeString();o(v=>({...v,logs:[...v.logs,`[${R}] ${S}`]}))},[]),f=be.useCallback(S=>{o(R=>({...R,currentStage:S,stages:{...R.stages,[S]:Ie.ACTIVE}}))},[]),m=be.useCallback(S=>{o(R=>({...R,...S}))},[]),g=be.useCallback(S=>{o(R=>({...R,rounds:[...R.rounds,S],currentRound:S.roundId}))},[]),x=be.useCallback(S=>{o(R=>{if(R.rounds.length===0)return R;const v=[...R.rounds];return v[v.length-1]={...v[v.length-1],...S},{...R,rounds:v}})},[]),h=be.useCallback(S=>{o(R=>({...R,stages:{...R.stages,[S]:Ie.PENDING}}))},[]),w=be.useCallback(S=>{o(R=>({...R,participantId:S}))},[]),E=be.useCallback(()=>`${u.participantId}_${u.sessionTimestamp}`,[u.participantId,u.sessionTimestamp]),C=be.useCallback(async()=>{var R;try{const v=await wp();v.success?console.log(`Backed up ${((R=v.backedUpFiles)==null?void 0:R.length)||0} files to ${v.backupDir}`):console.warn("Backup failed:",v.error)}catch(v){console.warn("Backup not available:",v)}Dy();const S=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);o({...Hh,sessionTimestamp:S,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:u,setStageStatus:l,setBuilderStep:c,addLog:p,moveToStage:f,updateState:m,addRound:g,updateLastRound:x,resetStageData:h,setParticipantId:w,getFilePrefix:E,resetAllState:C}}function zv(){const[u,o]=be.useState({}),[l,c]=be.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null}});be.useEffect(()=>{p()},[]);const p=async()=>{c(E=>({...E,loading:!0,error:null}));try{const E=`?t=${Date.now()}`,C=await fetch(`${np}/manifest.json${E}`,{cache:"no-store"});if(!C.ok)throw new Error("No manifest.json found in Data folder");const S=await C.json(),R={interview:null,template:null,dataFile:null,participantId:null};for(const v of S.files||[]){const A=`${np}/${v.filename}`;v.type==="interview"?(R.interview={filename:v.filename,path:A},R.participantId=v.participantId||null):v.type==="template"?R.template={filename:v.filename,path:A}:v.type==="dataFile"&&(R.dataFile={filename:v.filename,path:A})}c({loading:!1,error:null,detected:R}),R.interview&&await f("interview",R.interview.path,R.interview.filename,R.participantId),R.template&&await f("template",R.template.path,R.template.filename),R.dataFile&&await f("dataFile",R.dataFile.path,R.dataFile.filename)}catch(E){console.log("Auto-detection not available, manual upload required:",E),c({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null}})}},f=async(E,C,S,R)=>{try{const v=`?t=${Date.now()}`,A=await fetch(C+v,{cache:"no-store"});if(!A.ok){console.warn(`Failed to load ${S}`);return}const _=await A.text(),I=new Blob([_],{type:"text/plain"}),D=new File([I],S,{type:"text/plain"});o(E==="interview"?F=>({...F,interview:D,interviewContent:_,participantId:R||F.participantId}):E==="template"?F=>({...F,template:D,templateContent:_}):F=>({...F,dataFile:D,dataFileContent:_})),console.log(`Auto-loaded: ${S}`)}catch(v){console.warn(`Error loading ${S}:`,v)}},m=be.useCallback(async(E,C)=>{if(!C){o(S=>{const R={...S};return delete R[E],E==="interview"&&delete R.interviewContent,R});return}if(E==="interview"){const S=await C.text();let R=C.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,"");const v=S.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i);v&&(R=v[1].replace(/@/g,"_").replace(/\./g,"_")),o(A=>({...A,interview:C,interviewContent:S,participantId:R}))}else if(E==="template"){const S=await C.text();o(R=>({...R,template:C,templateContent:S}))}else{const S=await C.text();o(v=>({...v,dataFile:C,dataFileContent:S})),console.log("[handleFileChange] Uploading data file to cloud storage...");const R=await Rp(C);R.success?console.log("[handleFileChange] Cloud upload success:",R.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",R.error)}},[]),g=be.useCallback(()=>u.interviewContent||"",[u.interviewContent]),x=be.useCallback(()=>u.dataFileContent||"",[u.dataFileContent]),h=be.useCallback(()=>{var E;return((E=u.dataFile)==null?void 0:E.name)||""},[u.dataFile]),w=be.useCallback(async()=>{await p()},[]);return{uploadedFiles:u,handleFileChange:m,getInterviewContent:g,getDataFileContent:x,getDataFileName:h,detectionStatus:l,refreshDetection:w}}function Mv(u){const{simulationState:o,setStageStatus:l,setBuilderStep:c,addLog:p,moveToStage:f,updateState:m,addRound:g,updateLastRound:x,resetStageData:h,resetAllState:w,uploadedFiles:E,getInterviewContent:C,refreshDetection:S,onDataFileConfirm:R}=u,[v,A]=be.useState(!1);ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION;const _=be.useCallback(async k=>{const $=k??o.currentRound;p(`Reviewer: Starting review process with Gemini (Round ${$})...`),l(ge.REVIEWER,Ie.ACTIVE);try{let H=o.paperContent;if(!H){const y=o.currentPaperVersion||1;p(`Reviewer: Paper not in state, reading from localStorage (v${y})...`),H=ra(y)||"",H&&(m({paperContent:H}),p("Reviewer: Paper loaded from localStorage"))}if(!H){p("Reviewer: ERROR - No paper content available in state or localStorage"),l(ge.REVIEWER,Ie.ERROR);return}const G=o.participantId||"icis_paper",U=$;p("Reviewer: Analyzing paper with Gemini...");const ae=C();ae&&p("Reviewer: Interview content available for trustworthiness assessment");const te=await Nv(H,U,G,ae);p(`Reviewer: Analysis complete - Average score: ${((te.novelty+te.significance+te.methodologicalRigor+te.clarity+te.relevance)/5).toFixed(1)}/5`);const L={version:U,paperId:G,timestamp:new Date().toISOString(),reviewScores:{novelty:te.novelty,significance:te.significance,methodologicalRigor:te.methodologicalRigor,clarity:te.clarity,relevance:te.relevance},reviewComments:{novelty:te.noveltyComment,significance:te.significanceComment,methodologicalRigor:te.methodologicalRigorComment,clarity:te.clarityComment,relevance:te.relevanceComment},averageScore:(te.novelty+te.significance+te.methodologicalRigor+te.clarity+te.relevance)/5,errorCounts:{majorErrors:te.majorConcerns.length,minorErrors:te.minorCorrections.length},errorDetails:{majorErrors:te.majorConcerns,minorErrors:te.minorCorrections},trustworthiness:te.trustworthiness,criticalAlerts:te.criticalAlerts.map((y,X)=>({number:X+1,title:y.title,status:"Open",impact:y.impact,details:y.details,actionRequired:y.actionRequired,consequence:y.consequence}))},W={version:U,paperId:G,timestamp:new Date().toISOString(),researchQuestion:te.researchQuestionFeedback,method:te.methodFeedback,potentialImpact:te.impactFeedback,writing:te.writingFeedback,majorConcerns:te.majorConcerns,minorCorrections:te.minorCorrections,overallAssessment:te.overallAssessment};pp(L),Ic(W),p("Reviewer: Saved oversight and feedback files"),g({roundId:U,reviewScore:L.averageScore,reliabilityScore:te.trustworthiness.reliability,alignmentScore:te.trustworthiness.goalAlignment,errorsDetected:te.majorConcerns.length+te.minorCorrections.length,reviewScores:L.reviewScores,trustworthinessScores:te.trustworthiness,errorCounts:L.errorCounts,constructiveFeedback:te.overallAssessment,feedback:te.overallAssessment,criticalAlerts:te.criticalAlerts.map(y=>y.title)}),p("Reviewer: Review complete! Proceed to Supervisor for decision."),l(ge.REVIEWER,Ie.COMPLETED)}catch(H){p(`Reviewer: ERROR - ${H.message}`),l(ge.REVIEWER,Ie.ERROR)}},[l,p,g,m,o.currentRound,o.participantId,o.paperContent]),I=be.useCallback(async(k,$)=>{var H,G,U,ae;switch(k){case ge.SETUP:await new Promise(L=>setTimeout(L,500));const te={interview:!!E.interview,template:!0,examples:!0,dataFile:!!E.dataFile,paperPdf:!1};m({files:te}),p("Setup: Files verified successfully");break;case ge.BUILDER:p("Builder: Starting paper generation with Gemini...");try{const L=C();if(!L){p("Builder: ERROR - No interview content available"),l(ge.BUILDER,Ie.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${$}", uploadedFiles.dataFile?.name="${(H=E.dataFile)==null?void 0:H.name}"`);const W=$||((G=E.dataFile)==null?void 0:G.name),y=!W;p(`Builder: Mode - ${y?"Partial paper (no data)":"Full paper with data"}`),p(W?`Builder: Data file - ${W}`:"Builder: WARNING - No data file name available");const V=await bv(L,y,(J,me)=>{me==="starting"?p(`Builder: Generating ${J}...`):me==="completed"?p(`Builder: ${J} complete`):me==="error"&&p(`Builder: ${J} - error (continuing)`)},W,R);V.dataSummary&&(p("Builder: Data Analysis Summary:"),p(V.dataSummary.substring(0,500)+(V.dataSummary.length>500?"...":""))),V.dataAlert&&p(V.dataAlert),V.usedSyntheticData&&p("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),m({paperContent:V.paperContent,currentPaperVersion:1,dataAlert:V.dataAlert,dataSummary:V.dataSummary}),Wh(1,V.paperContent);const P=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",ce=P?`${P}_icis_paper_v1.tex`:"icis_paper_v1.tex";await bc(ce,V.paperContent),p("Builder: Paper generation complete - saved to localStorage and filesystem"),l(ge.BUILDER,Ie.COMPLETED),f(ge.REVIEWER),setTimeout(()=>_(),500)}catch(L){p(`Builder: ERROR - ${L.message}`),l(ge.BUILDER,Ie.ERROR)}break;case ge.REVIEWER:await _();break;case ge.SUPERVISOR:p("Supervisor: Awaiting human review and decision..."),l(ge.SUPERVISOR,Ie.ACTIVE);return;case ge.FINALIZE:p("Finalize: Preparing final submission..."),l(ge.FINALIZE,Ie.ACTIVE);return;case ge.REVISER:p("Reviser: Starting revision with Gemini..."),console.log("[Workflow] REVISER stage starting"),l(ge.REVISER,Ie.ACTIVE);try{let L=o.paperContent;if(console.log(`[Workflow] Paper in state: ${L?L.length+" chars":"none"}`),!L){const se=o.currentPaperVersion||1;p(`Reviser: Paper not in state, reading from localStorage (v${se})...`),L=ra(se)||"",L&&(m({paperContent:L}),p("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${L.length} chars`))}if(!L){p("Reviser: ERROR - No paper content available in state or localStorage"),l(ge.REVISER,Ie.ERROR);return}const W=o.rounds[o.rounds.length-1],y=(W==null?void 0:W.feedback)||"Improve clarity and strengthen methodology.",X=$||(W==null?void 0:W.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${y.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${$?"from override":"from state"}): ${X.substring(0,100)}...`),p("Reviser: Analyzing feedback and generating revisions..."),p(`Reviser: Paper size: ${L.length} chars, calling Gemini...`);const V=(U=E.dataFile)==null?void 0:U.name,P=se=>{p(`Reviser: ${se}`)};console.log("[Workflow] Calling runReviser...");const ce=await kv(L,y,X,V,P);console.log(`[Workflow] runReviser completed, result: ${((ae=ce.paperContent)==null?void 0:ae.length)||0} chars`),ce.dataAlert&&p(ce.dataAlert),ce.usedSyntheticData&&p("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const J=o.currentPaperVersion+1;m({paperContent:ce.paperContent,currentPaperVersion:J,dataAlert:ce.dataAlert||o.dataAlert}),Wh(J,ce.paperContent);const me=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",N=me?`${me}_icis_paper_v${J}.tex`:`icis_paper_v${J}.tex`;await bc(N,ce.paperContent),p(`Reviser: Revision complete - Version ${J} saved`);const j=o.currentRound+1;l(ge.REVISER,Ie.COMPLETED),f(ge.REVIEWER),m({currentRound:j}),setTimeout(()=>_(j),500)}catch(L){p(`Reviser: ERROR - ${L.message}`),l(ge.REVISER,Ie.ERROR)}break}},[E.interview,E.dataFile,m,p,c,l,f,_,o.currentPaperVersion,o.currentRound,o.dataAlert,R]),D=be.useCallback(async(k,$,H)=>{switch(p(`Stage ${k}: ${$}`),console.log(`[handleStageAction] Stage ${k} action=${$} overrideParam="${H}" (type: ${typeof H})`),$){case"start":l(k,Ie.ACTIVE),A(!0);try{await I(k,H),k!==ge.BUILDER&&k!==ge.REVIEWER&&k!==ge.REVISER&&l(k,Ie.COMPLETED),p(`Stage ${k} completed`)}catch(G){l(k,Ie.ERROR),p(`Stage ${k} error: ${G}`)}finally{A(!1)}break;case"abort":l(k,Ie.ERROR),A(!1),p(`Stage ${k} aborted`);break;case"restart":h(k),l(k,Ie.ACTIVE),A(!0),p(`Stage ${k} restarting...`);try{await I(k,H),k!==ge.BUILDER&&k!==ge.REVIEWER&&k!==ge.REVISER&&l(k,Ie.COMPLETED),p(`Stage ${k} restart completed`)}catch(G){l(k,Ie.ERROR),p(`Stage ${k} restart error: ${G}`)}finally{A(!1)}break;case"skip":l(k,Ie.SKIPPED),p(`Stage ${k} skipped`);break}},[p,l,h,I]),F=be.useCallback(async(k,$)=>{var H;switch(p(`Action: ${k}`),k){case"START_SETUP":(o.rounds.length>0||o.currentPaperVersion>0||o.paperContent!=="")&&w&&w().then(()=>{p("Setup: Backed up and cleared previous case data")}),D(ge.SETUP,"start");break;case"START_BUILDER":p("Setup: Checking for data files...");let U;const ae=ui();if(ae)U=ae.filename,console.log(`[START_BUILDER] Using cloud data file: ${ae.filename}`),p(`Setup: Data file ready (cloud) - ${ae.filename}`);else if(E.dataFile)U=E.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${U}`),p(`Setup: Data file ready (uploaded) - ${U}`);else try{p("Setup: Refreshing file manifest...");const te=await mp();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(te,null,2)),te.success&&te.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(te.manifest.files,null,2));const L=(H=te.manifest.files)==null?void 0:H.find(W=>W.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",L),L&&(U=L.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${L.filename}"`),p(`Setup: Data file detected - ${L.filename}`),S&&(p("Setup: Loading data file into memory..."),await S(),p("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}U||p("Setup: No data file - will generate partial paper"),l(ge.SETUP,Ie.COMPLETED),f(ge.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${U}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${U}"`),D(ge.BUILDER,"start",U)},500);break;case"PROCEED_TO_SUPERVISOR":l(ge.REVIEWER,Ie.COMPLETED),f(ge.SUPERVISOR);break;case"SKIP_TO_REVIEWER":l(ge.SETUP,Ie.COMPLETED),l(ge.BUILDER,Ie.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ge.REVIEWER),setTimeout(()=>D(ge.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":l(ge.SETUP,Ie.COMPLETED),l(ge.BUILDER,Ie.COMPLETED),l(ge.REVIEWER,Ie.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ge.SUPERVISOR);break;case"revise":if($){x({supervisorComment:$});const te=o.currentRound;Zh(te,te,$),Qh("CONTINUE",te),p(`Supervisor: Saved directive to feedback file (round ${te})`)}l(ge.SUPERVISOR,Ie.COMPLETED),f(ge.REVISER),p(`Supervisor: Passing directive to Reviser: "${($==null?void 0:$.substring(0,50))||"none"}..."`),setTimeout(()=>D(ge.REVISER,"start",$),100);break;case"finalize":if($){x({supervisorComment:$});const te=o.currentRound;Zh(te,te,$),Qh("FINALIZE",te),p(`Supervisor: Saved finalize decision to feedback file (round ${te})`)}l(ge.SUPERVISOR,Ie.COMPLETED),f(ge.FINALIZE);break;case"NEW_CASE":w?w().then(()=>{p("New case started - files backed up and cleared"),S==null||S(),f(ge.SETUP)}):f(ge.SETUP);break;default:p(`Unknown action: ${k}`)}},[p,f,l,x,D,w,o.rounds.length,o.currentPaperVersion,o.paperContent,m,S]);return{isProcessing:v,handleStageAction:D,handleWorkflowAction:F}}const Uv=()=>{const[u,o]=be.useState("main"),[l,c]=be.useState("research"),p=be.useCallback(y=>{c(y),pv(y),console.log(`[App] Paper mode changed to: ${y}`)},[]),{simulationState:f,setStageStatus:m,setBuilderStep:g,addLog:x,moveToStage:h,updateState:w,addRound:E,updateLastRound:C,resetStageData:S,setParticipantId:R,getFilePrefix:v,resetAllState:A}=Lv(),{uploadedFiles:_,handleFileChange:I,getInterviewContent:D,getDataFileContent:F,getDataFileName:k,detectionStatus:$,refreshDetection:H}=zv(),G=be.useCallback(async y=>{const X=`Data File Verification

File: ${y.filename}
Total lines: ${y.totalLines}

First line (column headers):
${y.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(X)},[]),{isProcessing:U,handleStageAction:ae,handleWorkflowAction:te}=Mv({simulationState:f,setStageStatus:m,setBuilderStep:g,addLog:x,moveToStage:h,updateState:w,addRound:E,updateLastRound:C,resetStageData:S,resetAllState:A,uploadedFiles:_,getInterviewContent:D,refreshDetection:H,onDataFileConfirm:G});be.useEffect(()=>{_.participantId&&_.participantId!==f.participantId&&(R(_.participantId),x(`Participant ID set: ${_.participantId}`))},[_.participantId,f.participantId,R,x]);const L=y=>{x(`Aborting ${y}...`),ae(y,"abort")},W=y=>{x(`Restarting ${y}...`),ae(y,"restart"),setTimeout(()=>ae(y,"start"),100)};return s.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[s.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:s.jsx(Ny,{currentStage:f.currentStage,currentBuilderStep:f.currentBuilderStep,stagesState:f.stages,isPartialPaper:f.isPartialPaper,currentRound:f.currentRound,isProcessing:U,onStageClick:h,onStageAction:ae,onNewCase:()=>te("NEW_CASE"),onNewInterview:()=>{window.open(`/asd/interview.html?mode=${l}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/asd/paper-to-interview.html","_blank","noopener,noreferrer")},onResearchAdmin:l==="research"?()=>o(u==="admin"?"main":"admin"):void 0,paperMode:l,onPaperModeChange:p})}),s.jsx("div",{className:"flex-1 h-full",children:u==="admin"?s.jsx(tv,{onClose:()=>o("main")}):s.jsx(Yy,{state:f,isProcessing:U,onAction:te,uploadedFiles:_,onFileChange:I,detectionStatus:$,onRefreshDetection:H,onStageAbort:L,onStageRestart:W,filePrefix:v(),dataFileName:k(),dataFileContent:F()})})]})},Fv=({onLogin:u})=>{const[o,l]=be.useState(""),[c,p]=be.useState(""),[f,m]=be.useState(""),[g,x]=be.useState(!1),h=w=>{w.preventDefault(),m(""),x(!0),setTimeout(()=>{o==="asd"&&c==="tennessee"?(sessionStorage.setItem("icis_authenticated","true"),u()):(m("Invalid username or password"),x(!1))},500)};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-md",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:s.jsx("span",{className:"text-2xl font-bold text-white",children:"IC"})}),s.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"ICIScopilot"}),s.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),s.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:s.jsxs("form",{onSubmit:h,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(_y,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"text",id:"username",value:o,onChange:w=>l(w.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(ty,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"password",id:"password",value:c,onChange:w=>p(w.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),f&&s.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[s.jsx(Ds,{className:"h-5 w-5 flex-shrink-0"}),s.jsx("span",{className:"text-sm",children:f})]}),s.jsx("button",{type:"submit",disabled:g,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:g?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),s.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"ICIS Conference Paper Authoring System"})]})})},Bv=()=>{const[u,o]=be.useState(null);be.useEffect(()=>{const c=sessionStorage.getItem("icis_authenticated");o(c==="true")},[]);const l=()=>{o(!0)};return u===null?s.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):u?s.jsx(Uv,{}):s.jsx(Fv,{onLogin:l})},Fp=document.getElementById("root");if(!Fp)throw new Error("Could not find root element to mount to");const Pv=u0.createRoot(Fp);Pv.render(s.jsx(n0.StrictMode,{children:s.jsx(Bv,{})}));
