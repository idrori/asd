(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(p){if(p.ep)return;p.ep=!0;const f=l(p);fetch(p.href,f)}})();var ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tc(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var nc={exports:{}},ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function e0(){if(kh)return ii;kh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(c,p,f){var m=null;if(f!==void 0&&(m=""+f),p.key!==void 0&&(m=""+p.key),"key"in p){f={};for(var g in p)g!=="key"&&(f[g]=p[g])}else f=p;return p=f.ref,{$$typeof:u,type:c,key:m,ref:p!==void 0?p:null,props:f}}return ii.Fragment=o,ii.jsx=l,ii.jsxs=l,ii}var Lh;function t0(){return Lh||(Lh=1,nc.exports=e0()),nc.exports}var s=t0(),ac={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function n0(){if(zh)return De;zh=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),T=Symbol.iterator;function b(C){return C===null||typeof C!="object"?null:(C=T&&C[T]||C["@@iterator"],typeof C=="function"?C:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,A={};function w(C,k,ie){this.props=C,this.context=k,this.refs=A,this.updater=ie||N}w.prototype.isReactComponent={},w.prototype.setState=function(C,k){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,k,"setState")},w.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function I(){}I.prototype=w.prototype;function L(C,k,ie){this.props=C,this.context=k,this.refs=A,this.updater=ie||N}var F=L.prototype=new I;F.constructor=L,S(F,w.prototype),F.isPureReactComponent=!0;var j=Array.isArray;function $(){}var P={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function U(C,k,ie){var se=ie.ref;return{$$typeof:u,type:C,key:k,ref:se!==void 0?se:null,props:ie}}function re(C,k){return U(C.type,k,C.props)}function ee(C){return typeof C=="object"&&C!==null&&C.$$typeof===u}function D(C){var k={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return k[ie]})}var W=/\/+/g;function x(C,k){return typeof C=="object"&&C!==null&&C.key!=null?D(""+C.key):k.toString(36)}function X(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then($,$):(C.status="pending",C.then(function(k){C.status==="pending"&&(C.status="fulfilled",C.value=k)},function(k){C.status==="pending"&&(C.status="rejected",C.reason=k)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function V(C,k,ie,se,oe){var Ae=typeof C;(Ae==="undefined"||Ae==="boolean")&&(C=null);var Ie=!1;if(C===null)Ie=!0;else switch(Ae){case"bigint":case"string":case"number":Ie=!0;break;case"object":switch(C.$$typeof){case u:case o:Ie=!0;break;case _:return Ie=C._init,V(Ie(C._payload),k,ie,se,oe)}}if(Ie)return oe=oe(C),Ie=se===""?"."+x(C,0):se,j(oe)?(ie="",Ie!=null&&(ie=Ie.replace(W,"$&/")+"/"),V(oe,k,ie,"",function(nt){return nt})):oe!=null&&(ee(oe)&&(oe=re(oe,ie+(oe.key==null||C&&C.key===oe.key?"":(""+oe.key).replace(W,"$&/")+"/")+Ie)),k.push(oe)),1;Ie=0;var Ne=se===""?".":se+":";if(j(C))for(var Re=0;Re<C.length;Re++)se=C[Re],Ae=Ne+x(se,Re),Ie+=V(se,k,ie,Ae,oe);else if(Re=b(C),typeof Re=="function")for(C=Re.call(C),Re=0;!(se=C.next()).done;)se=se.value,Ae=Ne+x(se,Re++),Ie+=V(se,k,ie,Ae,oe);else if(Ae==="object"){if(typeof C.then=="function")return V(X(C),k,ie,se,oe);throw k=String(C),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return Ie}function H(C,k,ie){if(C==null)return C;var se=[],oe=0;return V(C,se,"","",function(Ae){return k.call(ie,Ae,oe++)}),se}function fe(C){if(C._status===-1){var k=C._result;k=k(),k.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=k)}if(C._status===1)return C._result.default;throw C._result}var te=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ye={map:H,forEach:function(C,k,ie){H(C,function(){k.apply(this,arguments)},ie)},count:function(C){var k=0;return H(C,function(){k++}),k},toArray:function(C){return H(C,function(k){return k})||[]},only:function(C){if(!ee(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return De.Activity=E,De.Children=ye,De.Component=w,De.Fragment=l,De.Profiler=p,De.PureComponent=L,De.StrictMode=c,De.Suspense=y,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return P.H.useMemoCache(C)}},De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(C,k,ie){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var se=S({},C.props),oe=C.key;if(k!=null)for(Ae in k.key!==void 0&&(oe=""+k.key),k)!G.call(k,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&k.ref===void 0||(se[Ae]=k[Ae]);var Ae=arguments.length-2;if(Ae===1)se.children=ie;else if(1<Ae){for(var Ie=Array(Ae),Ne=0;Ne<Ae;Ne++)Ie[Ne]=arguments[Ne+2];se.children=Ie}return U(C.type,oe,se)},De.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},De.createElement=function(C,k,ie){var se,oe={},Ae=null;if(k!=null)for(se in k.key!==void 0&&(Ae=""+k.key),k)G.call(k,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(oe[se]=k[se]);var Ie=arguments.length-2;if(Ie===1)oe.children=ie;else if(1<Ie){for(var Ne=Array(Ie),Re=0;Re<Ie;Re++)Ne[Re]=arguments[Re+2];oe.children=Ne}if(C&&C.defaultProps)for(se in Ie=C.defaultProps,Ie)oe[se]===void 0&&(oe[se]=Ie[se]);return U(C,Ae,oe)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:g,render:C}},De.isValidElement=ee,De.lazy=function(C){return{$$typeof:_,_payload:{_status:-1,_result:C},_init:fe}},De.memo=function(C,k){return{$$typeof:d,type:C,compare:k===void 0?null:k}},De.startTransition=function(C){var k=P.T,ie={};P.T=ie;try{var se=C(),oe=P.S;oe!==null&&oe(ie,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then($,te)}catch(Ae){te(Ae)}finally{k!==null&&ie.types!==null&&(k.types=ie.types),P.T=k}},De.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},De.use=function(C){return P.H.use(C)},De.useActionState=function(C,k,ie){return P.H.useActionState(C,k,ie)},De.useCallback=function(C,k){return P.H.useCallback(C,k)},De.useContext=function(C){return P.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,k){return P.H.useDeferredValue(C,k)},De.useEffect=function(C,k){return P.H.useEffect(C,k)},De.useEffectEvent=function(C){return P.H.useEffectEvent(C)},De.useId=function(){return P.H.useId()},De.useImperativeHandle=function(C,k,ie){return P.H.useImperativeHandle(C,k,ie)},De.useInsertionEffect=function(C,k){return P.H.useInsertionEffect(C,k)},De.useLayoutEffect=function(C,k){return P.H.useLayoutEffect(C,k)},De.useMemo=function(C,k){return P.H.useMemo(C,k)},De.useOptimistic=function(C,k){return P.H.useOptimistic(C,k)},De.useReducer=function(C,k,ie){return P.H.useReducer(C,k,ie)},De.useRef=function(C){return P.H.useRef(C)},De.useState=function(C){return P.H.useState(C)},De.useSyncExternalStore=function(C,k,ie){return P.H.useSyncExternalStore(C,k,ie)},De.useTransition=function(){return P.H.useTransition()},De.version="19.2.1",De}var Mh;function Nc(){return Mh||(Mh=1,ac.exports=n0()),ac.exports}var xe=Nc();const a0=Tc(xe);var rc={exports:{}},si={},ic={exports:{}},sc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function r0(){return Uh||(Uh=1,(function(u){function o(V,H){var fe=V.length;V.push(H);e:for(;0<fe;){var te=fe-1>>>1,ye=V[te];if(0<p(ye,H))V[te]=H,V[fe]=ye,fe=te;else break e}}function l(V){return V.length===0?null:V[0]}function c(V){if(V.length===0)return null;var H=V[0],fe=V.pop();if(fe!==H){V[0]=fe;e:for(var te=0,ye=V.length,C=ye>>>1;te<C;){var k=2*(te+1)-1,ie=V[k],se=k+1,oe=V[se];if(0>p(ie,fe))se<ye&&0>p(oe,ie)?(V[te]=oe,V[se]=fe,te=se):(V[te]=ie,V[k]=fe,te=k);else if(se<ye&&0>p(oe,fe))V[te]=oe,V[se]=fe,te=se;else break e}}return H}function p(V,H){var fe=V.sortIndex-H.sortIndex;return fe!==0?fe:V.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;u.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();u.unstable_now=function(){return m.now()-g}}var y=[],d=[],_=1,E=null,T=3,b=!1,N=!1,S=!1,A=!1,w=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function F(V){for(var H=l(d);H!==null;){if(H.callback===null)c(d);else if(H.startTime<=V)c(d),H.sortIndex=H.expirationTime,o(y,H);else break;H=l(d)}}function j(V){if(S=!1,F(V),!N)if(l(y)!==null)N=!0,$||($=!0,D());else{var H=l(d);H!==null&&X(j,H.startTime-V)}}var $=!1,P=-1,G=5,U=-1;function re(){return A?!0:!(u.unstable_now()-U<G)}function ee(){if(A=!1,$){var V=u.unstable_now();U=V;var H=!0;try{e:{N=!1,S&&(S=!1,I(P),P=-1),b=!0;var fe=T;try{t:{for(F(V),E=l(y);E!==null&&!(E.expirationTime>V&&re());){var te=E.callback;if(typeof te=="function"){E.callback=null,T=E.priorityLevel;var ye=te(E.expirationTime<=V);if(V=u.unstable_now(),typeof ye=="function"){E.callback=ye,F(V),H=!0;break t}E===l(y)&&c(y),F(V)}else c(y);E=l(y)}if(E!==null)H=!0;else{var C=l(d);C!==null&&X(j,C.startTime-V),H=!1}}break e}finally{E=null,T=fe,b=!1}H=void 0}}finally{H?D():$=!1}}}var D;if(typeof L=="function")D=function(){L(ee)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,x=W.port2;W.port1.onmessage=ee,D=function(){x.postMessage(null)}}else D=function(){w(ee,0)};function X(V,H){P=w(function(){V(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(V){V.callback=null},u.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<V?Math.floor(1e3/V):5},u.unstable_getCurrentPriorityLevel=function(){return T},u.unstable_next=function(V){switch(T){case 1:case 2:case 3:var H=3;break;default:H=T}var fe=T;T=H;try{return V()}finally{T=fe}},u.unstable_requestPaint=function(){A=!0},u.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var fe=T;T=V;try{return H()}finally{T=fe}},u.unstable_scheduleCallback=function(V,H,fe){var te=u.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?te+fe:te):fe=te,V){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=fe+ye,V={id:_++,callback:H,priorityLevel:V,startTime:fe,expirationTime:ye,sortIndex:-1},fe>te?(V.sortIndex=fe,o(d,V),l(y)===null&&V===l(d)&&(S?(I(P),P=-1):S=!0,X(j,fe-te))):(V.sortIndex=ye,o(y,V),N||b||(N=!0,$||($=!0,D()))),V},u.unstable_shouldYield=re,u.unstable_wrapCallback=function(V){var H=T;return function(){var fe=T;T=H;try{return V.apply(this,arguments)}finally{T=fe}}}})(sc)),sc}var Fh;function i0(){return Fh||(Fh=1,ic.exports=r0()),ic.exports}var lc={exports:{}},At={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function s0(){if(Bh)return At;Bh=1;var u=Nc();function o(y){var d="https://react.dev/errors/"+y;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+y+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var c={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},p=Symbol.for("react.portal");function f(y,d,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:E==null?null:""+E,children:y,containerInfo:d,implementation:_}}var m=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,d){if(y==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,At.createPortal=function(y,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(o(299));return f(y,d,null,_)},At.flushSync=function(y){var d=m.T,_=c.p;try{if(m.T=null,c.p=2,y)return y()}finally{m.T=d,c.p=_,c.d.f()}},At.preconnect=function(y,d){typeof y=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,c.d.C(y,d))},At.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},At.preinit=function(y,d){if(typeof y=="string"&&d&&typeof d.as=="string"){var _=d.as,E=g(_,d.crossOrigin),T=typeof d.integrity=="string"?d.integrity:void 0,b=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?c.d.S(y,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:b}):_==="script"&&c.d.X(y,{crossOrigin:E,integrity:T,fetchPriority:b,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},At.preinitModule=function(y,d){if(typeof y=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=g(d.as,d.crossOrigin);c.d.M(y,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&c.d.M(y)},At.preload=function(y,d){if(typeof y=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,E=g(_,d.crossOrigin);c.d.L(y,_,{crossOrigin:E,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},At.preloadModule=function(y,d){if(typeof y=="string")if(d){var _=g(d.as,d.crossOrigin);c.d.m(y,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else c.d.m(y)},At.requestFormReset=function(y){c.d.r(y)},At.unstable_batchedUpdates=function(y,d){return y(d)},At.useFormState=function(y,d,_){return m.H.useFormState(y,d,_)},At.useFormStatus=function(){return m.H.useHostTransitionStatus()},At.version="19.2.1",At}var Ph;function l0(){if(Ph)return lc.exports;Ph=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),lc.exports=s0(),lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function o0(){if(Vh)return si;Vh=1;var u=i0(),o=Nc(),l=l0();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(c(188))}function d(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return y(r),e;if(i===a)return y(r),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=i;else{for(var h=!1,R=r.child;R;){if(R===n){h=!0,n=r,a=i;break}if(R===a){h=!0,a=r,n=i;break}R=R.sibling}if(!h){for(R=i.child;R;){if(R===n){h=!0,n=i,a=r;break}if(R===a){h=!0,a=i,n=r;break}R=R.sibling}if(!h)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var W=Symbol.for("react.client.reference");function x(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===W?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case w:return"Profiler";case A:return"StrictMode";case j:return"Suspense";case $:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case L:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:x(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return x(e(t))}catch{}}return null}var X=Array.isArray,V=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},te=[],ye=-1;function C(e){return{current:e}}function k(e){0>ye||(e.current=te[ye],te[ye]=null,ye--)}function ie(e,t){ye++,te[ye]=e.current,e.current=t}var se=C(null),oe=C(null),Ae=C(null),Ie=C(null);function Ne(e,t){switch(ie(Ae,t),ie(oe,e),ie(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ah(t),e=rh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(se),ie(se,e)}function Re(){k(se),k(oe),k(Ae)}function nt(e){e.memoizedState!==null&&ie(Ie,e);var t=se.current,n=rh(t,e.type);t!==n&&(ie(oe,e),ie(se,n))}function Je(e){oe.current===e&&(k(se),k(oe)),Ie.current===e&&(k(Ie),ti._currentValue=fe)}var wt,Rt;function v(e){if(wt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wt=t&&t[1]||"",Rt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wt+e+Rt}var ue=!1;function ae(e,t){if(!e||ue)return"";ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(ne){var J=ne}Reflect.construct(e,[],de)}else{try{de.call()}catch(ne){J=ne}e.call(de.prototype)}}else{try{throw Error()}catch(ne){J=ne}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(ne){if(ne&&J&&typeof ne.stack=="string")return[ne.stack,J.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),h=i[0],R=i[1];if(h&&R){var M=h.split(`
`),Q=R.split(`
`);for(r=a=0;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;for(;r<Q.length&&!Q[r].includes("DetermineComponentFrameRoot");)r++;if(a===M.length||r===Q.length)for(a=M.length-1,r=Q.length-1;1<=a&&0<=r&&M[a]!==Q[r];)r--;for(;1<=a&&0<=r;a--,r--)if(M[a]!==Q[r]){if(a!==1||r!==1)do if(a--,r--,0>r||M[a]!==Q[r]){var le=`
`+M[a].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=a&&0<=r);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?v(n):""}function z(e,t){switch(e.tag){case 26:case 27:case 5:return v(e.type);case 16:return v("Lazy");case 13:return e.child!==t&&t!==null?v("Suspense Fallback"):v("Suspense");case 19:return v("SuspenseList");case 0:case 15:return ae(e.type,!1);case 11:return ae(e.type.render,!1);case 1:return ae(e.type,!0);case 31:return v("Activity");default:return""}}function O(e){try{var t="",n=null;do t+=z(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var q=Object.prototype.hasOwnProperty,he=u.unstable_scheduleCallback,pe=u.unstable_cancelCallback,K=u.unstable_shouldYield,ge=u.unstable_requestPaint,be=u.unstable_now,ve=u.unstable_getCurrentPriorityLevel,_e=u.unstable_ImmediatePriority,qe=u.unstable_UserBlockingPriority,Le=u.unstable_NormalPriority,Tt=u.unstable_LowPriority,jn=u.unstable_IdlePriority,Vt=u.log,ia=u.unstable_setDisableYieldValue,We=null,mt=null;function Ht(e){if(typeof Vt=="function"&&ia(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(We,e)}catch{}}var rt=Math.clz32?Math.clz32:Vs,di=Math.log,Ps=Math.LN2;function Vs(e){return e>>>=0,e===0?32:31-(di(e)/Ps|0)|0}var Ra=256,sa=262144,cn=4194304;function Gt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var R=a&134217727;return R!==0?(a=R&~i,a!==0?r=Gt(a):(h&=R,h!==0?r=Gt(h):n||(n=R&~e,n!==0&&(r=Gt(n))))):(R=a&~i,R!==0?r=Gt(R):h!==0?r=Gt(h):n||(n=a&~e,n!==0&&(r=Gt(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function pr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mc(){var e=cn;return cn<<=1,(cn&62914560)===0&&(cn=4194304),e}function Hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vp(e,t,n,a,r,i){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var R=e.entanglements,M=e.expirationTimes,Q=e.hiddenUpdates;for(n=h&~n;0<n;){var le=31-rt(n),de=1<<le;R[le]=0,M[le]=-1;var J=Q[le];if(J!==null)for(Q[le]=null,le=0;le<J.length;le++){var ne=J[le];ne!==null&&(ne.lane&=-536870913)}n&=~de}a!==0&&Uc(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(h&~t))}function Uc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-rt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Fc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-rt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Bc(e,t){var n=t&-t;return n=(n&42)!==0?1:Gs(n),(n&(e.suspendedLanes|t))!==0?0:n}function Gs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Th(e.type))}function Vc(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var kn=Math.random().toString(36).slice(2),vt="__reactFiber$"+kn,Nt="__reactProps$"+kn,Ta="__reactContainer$"+kn,Ys="__reactEvents$"+kn,Hp="__reactListeners$"+kn,Gp="__reactHandles$"+kn,Hc="__reactResources$"+kn,gr="__reactMarker$"+kn;function $s(e){delete e[vt],delete e[Nt],delete e[Ys],delete e[Hp],delete e[Gp]}function Na(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ta]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dh(e);e!==null;){if(n=e[vt])return n;e=dh(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){if(e=e[vt]||e[Ta]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ia(e){var t=e[Hc];return t||(t=e[Hc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function gt(e){e[gr]=!0}var Gc=new Set,qc={};function la(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(qc[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var qp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yc={},$c={};function Yp(e){return q.call($c,e)?!0:q.call(Yc,e)?!1:qp.test(e)?$c[e]=!0:(Yc[e]=!0,!1)}function hi(e,t,n){if(Yp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function pi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $p(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(h){n=""+h,i.call(this,h)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){if(!e._valueTracker){var t=Xc(e)?"checked":"value";e._valueTracker=$p(e,t,""+e[t])}}function Zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Xc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xp=/[\n"\\]/g;function Yt(e){return e.replace(Xp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zs(e,t,n,a,r,i,h,R){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Qs(e,h,qt(t)):n!=null?Qs(e,h,qt(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+qt(R):e.removeAttribute("name")}function Qc(e,t,n,a,r,i,h,R){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Xs(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,R||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=R?e.checked:!!a,e.defaultChecked=!!a,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Xs(e)}function Qs(e,t,n){t==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Oa(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Wc(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function Kc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(X(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Xs(e)}function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Zp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function eu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Jc(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&Jc(e,i,t[i])}function Ws(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(e){return Wp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var Ks=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,La=null;function tu(e){var t=Ca(e);if(t&&(e=t.stateNode)){var n=e[Nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[Nt]||null;if(!r)throw Error(c(90));Zs(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Zc(a)}break e;case"textarea":Wc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Oa(e,!!n.multiple,t,!1)}}}var el=!1;function nu(e,t,n){if(el)return e(t,n);el=!0;try{var a=e(t);return a}finally{if(el=!1,(ka!==null||La!==null)&&(as(),ka&&(t=ka,e=La,La=ka=null,tu(t),e)))for(t=0;t<e.length;t++)tu(e[t])}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Nt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=!1;if(yn)try{var br={};Object.defineProperty(br,"passive",{get:function(){tl=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{tl=!1}var Ln=null,nl=null,yi=null;function au(){if(yi)return yi;var e,t=nl,n=t.length,a,r="value"in Ln?Ln.value:Ln.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var h=n-e;for(a=1;a<=h&&t[n-a]===r[i-a];a++);return yi=r.slice(e,1<a?1-a:void 0)}function vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function ru(){return!1}function Ct(e){function t(n,a,r,i,h){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=h,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(n=e[R],this[R]=n?n(i):i[R]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:ru,this.isPropagationStopped=ru,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=Ct(oa),xr=E({},oa,{view:0,detail:0}),Kp=Ct(xr),al,rl,Sr,Si=E({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(al=e.screenX-Sr.screenX,rl=e.screenY-Sr.screenY):rl=al=0,Sr=e),al)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),iu=Ct(Si),Jp=E({},Si,{dataTransfer:0}),em=Ct(Jp),tm=E({},xr,{relatedTarget:0}),il=Ct(tm),nm=E({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),am=Ct(nm),rm=E({},oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Ct(rm),sm=E({},oa,{data:0}),su=Ct(sm),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cm[e])?!!t[e]:!1}function sl(){return um}var dm=E({},xr,{key:function(e){if(e.key){var t=lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fm=Ct(dm),hm=E({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lu=Ct(hm),pm=E({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),mm=Ct(pm),gm=E({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Ct(gm),vm=E({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bm=Ct(vm),xm=E({},oa,{newState:0,oldState:0}),Sm=Ct(xm),Em=[9,13,27,32],ll=yn&&"CompositionEvent"in window,Er=null;yn&&"documentMode"in document&&(Er=document.documentMode);var Am=yn&&"TextEvent"in window&&!Er,ou=yn&&(!ll||Er&&8<Er&&11>=Er),cu=" ",uu=!1;function du(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function _m(e,t){switch(e){case"compositionend":return fu(t);case"keypress":return t.which!==32?null:(uu=!0,cu);case"textInput":return e=t.data,e===cu&&uu?null:e;default:return null}}function wm(e,t){if(za)return e==="compositionend"||!ll&&du(e,t)?(e=au(),yi=nl=Ln=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ou&&t.locale!=="ko"?null:t.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rm[e.type]:t==="textarea"}function pu(e,t,n,a){ka?La?La.push(a):La=[a]:ka=a,t=us(t,"onChange"),0<t.length&&(n=new xi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ar=null,_r=null;function Tm(e){Wf(e,0)}function Ei(e){var t=yr(e);if(Zc(t))return e}function mu(e,t){if(e==="change")return t}var gu=!1;if(yn){var ol;if(yn){var cl="oninput"in document;if(!cl){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),cl=typeof yu.oninput=="function"}ol=cl}else ol=!1;gu=ol&&(!document.documentMode||9<document.documentMode)}function vu(){Ar&&(Ar.detachEvent("onpropertychange",bu),_r=Ar=null)}function bu(e){if(e.propertyName==="value"&&Ei(_r)){var t=[];pu(t,_r,e,Js(e)),nu(Tm,t)}}function Nm(e,t,n){e==="focusin"?(vu(),Ar=t,_r=n,Ar.attachEvent("onpropertychange",bu)):e==="focusout"&&vu()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(_r)}function Im(e,t){if(e==="click")return Ei(t)}function Dm(e,t){if(e==="input"||e==="change")return Ei(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Om;function wr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!q.call(t,r)||!Lt(e[r],t[r]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=xu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xu(n)}}function Eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Au(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mi(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jm=yn&&"documentMode"in document&&11>=document.documentMode,Ma=null,dl=null,Rr=null,fl=!1;function _u(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||Ma==null||Ma!==mi(a)||(a=Ma,"selectionStart"in a&&ul(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rr&&wr(Rr,a)||(Rr=a,a=us(dl,"onSelect"),0<a.length&&(t=new xi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ma)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},hl={},wu={};yn&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function ua(e){if(hl[e])return hl[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return hl[e]=t[n];return e}var Ru=ua("animationend"),Tu=ua("animationiteration"),Nu=ua("animationstart"),km=ua("transitionrun"),Lm=ua("transitionstart"),zm=ua("transitioncancel"),Cu=ua("transitionend"),Iu=new Map,pl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pl.push("scrollEnd");function an(e,t){Iu.set(e,t),la(t,[e])}var Ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$t=[],Fa=0,ml=0;function _i(){for(var e=Fa,t=ml=Fa=0;t<e;){var n=$t[t];$t[t++]=null;var a=$t[t];$t[t++]=null;var r=$t[t];$t[t++]=null;var i=$t[t];if($t[t++]=null,a!==null&&r!==null){var h=a.pending;h===null?r.next=r:(r.next=h.next,h.next=r),a.pending=r}i!==0&&Du(n,r,i)}}function wi(e,t,n,a){$t[Fa++]=e,$t[Fa++]=t,$t[Fa++]=n,$t[Fa++]=a,ml|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function gl(e,t,n,a){return wi(e,t,n,a),Ri(e)}function da(e,t){return wi(e,null,null,t),Ri(e)}function Du(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-rt(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function Ri(e){if(50<Xr)throw Xr=0,Ro=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function Mm(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new Mm(e,t,n,a)}function yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ou(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ti(e,t,n,a,r,i){var h=0;if(a=e,typeof e=="function")yl(e)&&(h=1);else if(typeof e=="string")h=Vg(e,n,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=zt(31,n,t,r),e.elementType=U,e.lanes=i,e;case S:return fa(n.children,r,i,t);case A:h=8,r|=24;break;case w:return e=zt(12,n,t,r|2),e.elementType=w,e.lanes=i,e;case j:return e=zt(13,n,t,r),e.elementType=j,e.lanes=i,e;case $:return e=zt(19,n,t,r),e.elementType=$,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:h=10;break e;case I:h=9;break e;case F:h=11;break e;case P:h=14;break e;case G:h=16,a=null;break e}h=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=zt(h,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function fa(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function vl(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function ju(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function bl(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ku=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var n=ku.get(e);return n!==void 0?n:(t={value:e,source:t,stack:O(t)},ku.set(e,t),t)}return{value:e,source:t,stack:O(t)}}var Pa=[],Va=0,Ni=null,Tr=0,Zt=[],Qt=0,zn=null,un=1,dn="";function bn(e,t){Pa[Va++]=Tr,Pa[Va++]=Ni,Ni=e,Tr=t}function Lu(e,t,n){Zt[Qt++]=un,Zt[Qt++]=dn,Zt[Qt++]=zn,zn=e;var a=un;e=dn;var r=32-rt(a)-1;a&=~(1<<r),n+=1;var i=32-rt(t)+r;if(30<i){var h=r-r%5;i=(a&(1<<h)-1).toString(32),a>>=h,r-=h,un=1<<32-rt(t)+r|n<<r|a,dn=i+e}else un=1<<i|n<<r|a,dn=e}function xl(e){e.return!==null&&(bn(e,1),Lu(e,1,0))}function Sl(e){for(;e===Ni;)Ni=Pa[--Va],Pa[Va]=null,Tr=Pa[--Va],Pa[Va]=null;for(;e===zn;)zn=Zt[--Qt],Zt[Qt]=null,dn=Zt[--Qt],Zt[Qt]=null,un=Zt[--Qt],Zt[Qt]=null}function zu(e,t){Zt[Qt++]=un,Zt[Qt++]=dn,Zt[Qt++]=zn,un=t.id,dn=t.overflow,zn=e}var bt=null,et=null,Pe=!1,Mn=null,Wt=!1,El=Error(c(519));function Un(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nr(Xt(t,e)),El}function Mu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[vt]=e,t[Nt]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Qr.length;n++)Ue(Qr[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Qc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),Kc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||th(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||Un(e,!0)}function Uu(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:bt=bt.return}}function Ha(e){if(e!==bt)return!1;if(!Pe)return Uu(e),Pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Po(e.type,e.memoizedProps)),n=!n),n&&et&&Un(e),Uu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));et=uh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));et=uh(e)}else t===27?(t=et,Kn(e.type)?(e=Yo,Yo=null,et=e):et=t):et=bt?Jt(e.stateNode.nextSibling):null;return!0}function ha(){et=bt=null,Pe=!1}function Al(){var e=Mn;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),Mn=null),e}function Nr(e){Mn===null?Mn=[e]:Mn.push(e)}var _l=C(null),pa=null,xn=null;function Fn(e,t,n){ie(_l,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=_l.current,k(_l)}function wl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Rl(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var h=r.child;i=i.firstContext;e:for(;i!==null;){var R=i;i=r;for(var M=0;M<t.length;M++)if(R.context===t[M]){i.lanes|=n,R=i.alternate,R!==null&&(R.lanes|=n),wl(i.return,n,e),a||(h=null);break e}i=R.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(c(341));h.lanes|=n,i=h.alternate,i!==null&&(i.lanes|=n),wl(h,n,e),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===e){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function Ga(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(c(387));if(h=h.memoizedProps,h!==null){var R=r.type;Lt(r.pendingProps.value,h.value)||(e!==null?e.push(R):e=[R])}}else if(r===Ie.current){if(h=r.alternate,h===null)throw Error(c(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ti):e=[ti])}r=r.return}e!==null&&Rl(t,e,n,a),t.flags|=262144}function Ci(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){pa=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return Fu(pa,e)}function Ii(e,t){return pa===null&&ma(e),Fu(e,t)}function Fu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(c(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Um=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Fm=u.unstable_scheduleCallback,Bm=u.unstable_NormalPriority,ut={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tl(){return{controller:new Um,data:new Map,refCount:0}}function Cr(e){e.refCount--,e.refCount===0&&Fm(Bm,function(){e.controller.abort()})}var Ir=null,Nl=0,qa=0,Ya=null;function Pm(e,t){if(Ir===null){var n=Ir=[];Nl=0,qa=Oo(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Nl++,t.then(Bu,Bu),t}function Bu(){if(--Nl===0&&Ir!==null){Ya!==null&&(Ya.status="fulfilled");var e=Ir;Ir=null,qa=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Pu=V.S;V.S=function(e,t){wf=be(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Pm(e,t),Pu!==null&&Pu(e,t)};var ga=C(null);function Cl(){var e=ga.current;return e!==null?e:Ke.pooledCache}function Di(e,t){t===null?ie(ga,ga.current):ie(ga,t.pool)}function Vu(){var e=Cl();return e===null?null:{parent:ut._currentValue,pool:e}}var $a=Error(c(460)),Il=Error(c(474)),Oi=Error(c(542)),ji={then:function(){}};function Hu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yu(e),e;default:if(typeof t.status=="string")t.then(gn,gn);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yu(e),e}throw va=t,$a}}function ya(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(va=n,$a):n}}var va=null;function qu(){if(va===null)throw Error(c(459));var e=va;return va=null,e}function Yu(e){if(e===$a||e===Oi)throw Error(c(483))}var Xa=null,Dr=0;function ki(e){var t=Dr;return Dr+=1,Xa===null&&(Xa=[]),Gu(Xa,e,t)}function Or(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===T?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $u(e){function t(Y,B){if(e){var Z=Y.deletions;Z===null?(Y.deletions=[B],Y.flags|=16):Z.push(B)}}function n(Y,B){if(!e)return null;for(;B!==null;)t(Y,B),B=B.sibling;return null}function a(Y){for(var B=new Map;Y!==null;)Y.key!==null?B.set(Y.key,Y):B.set(Y.index,Y),Y=Y.sibling;return B}function r(Y,B){return Y=vn(Y,B),Y.index=0,Y.sibling=null,Y}function i(Y,B,Z){return Y.index=Z,e?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<B?(Y.flags|=67108866,B):Z):(Y.flags|=67108866,B)):(Y.flags|=1048576,B)}function h(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,B,Z,ce){return B===null||B.tag!==6?(B=vl(Z,Y.mode,ce),B.return=Y,B):(B=r(B,Z),B.return=Y,B)}function M(Y,B,Z,ce){var we=Z.type;return we===S?le(Y,B,Z.props.children,ce,Z.key):B!==null&&(B.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===G&&ya(we)===B.type)?(B=r(B,Z.props),Or(B,Z),B.return=Y,B):(B=Ti(Z.type,Z.key,Z.props,null,Y.mode,ce),Or(B,Z),B.return=Y,B)}function Q(Y,B,Z,ce){return B===null||B.tag!==4||B.stateNode.containerInfo!==Z.containerInfo||B.stateNode.implementation!==Z.implementation?(B=bl(Z,Y.mode,ce),B.return=Y,B):(B=r(B,Z.children||[]),B.return=Y,B)}function le(Y,B,Z,ce,we){return B===null||B.tag!==7?(B=fa(Z,Y.mode,ce,we),B.return=Y,B):(B=r(B,Z),B.return=Y,B)}function de(Y,B,Z){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=vl(""+B,Y.mode,Z),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case b:return Z=Ti(B.type,B.key,B.props,null,Y.mode,Z),Or(Z,B),Z.return=Y,Z;case N:return B=bl(B,Y.mode,Z),B.return=Y,B;case G:return B=ya(B),de(Y,B,Z)}if(X(B)||D(B))return B=fa(B,Y.mode,Z,null),B.return=Y,B;if(typeof B.then=="function")return de(Y,ki(B),Z);if(B.$$typeof===L)return de(Y,Ii(Y,B),Z);Li(Y,B)}return null}function J(Y,B,Z,ce){var we=B!==null?B.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return we!==null?null:R(Y,B,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return Z.key===we?M(Y,B,Z,ce):null;case N:return Z.key===we?Q(Y,B,Z,ce):null;case G:return Z=ya(Z),J(Y,B,Z,ce)}if(X(Z)||D(Z))return we!==null?null:le(Y,B,Z,ce,null);if(typeof Z.then=="function")return J(Y,B,ki(Z),ce);if(Z.$$typeof===L)return J(Y,B,Ii(Y,Z),ce);Li(Y,Z)}return null}function ne(Y,B,Z,ce,we){if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return Y=Y.get(Z)||null,R(B,Y,""+ce,we);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case b:return Y=Y.get(ce.key===null?Z:ce.key)||null,M(B,Y,ce,we);case N:return Y=Y.get(ce.key===null?Z:ce.key)||null,Q(B,Y,ce,we);case G:return ce=ya(ce),ne(Y,B,Z,ce,we)}if(X(ce)||D(ce))return Y=Y.get(Z)||null,le(B,Y,ce,we,null);if(typeof ce.then=="function")return ne(Y,B,Z,ki(ce),we);if(ce.$$typeof===L)return ne(Y,B,Z,Ii(B,ce),we);Li(B,ce)}return null}function Se(Y,B,Z,ce){for(var we=null,Ve=null,Ee=B,ke=B=0,Be=null;Ee!==null&&ke<Z.length;ke++){Ee.index>ke?(Be=Ee,Ee=null):Be=Ee.sibling;var He=J(Y,Ee,Z[ke],ce);if(He===null){Ee===null&&(Ee=Be);break}e&&Ee&&He.alternate===null&&t(Y,Ee),B=i(He,B,ke),Ve===null?we=He:Ve.sibling=He,Ve=He,Ee=Be}if(ke===Z.length)return n(Y,Ee),Pe&&bn(Y,ke),we;if(Ee===null){for(;ke<Z.length;ke++)Ee=de(Y,Z[ke],ce),Ee!==null&&(B=i(Ee,B,ke),Ve===null?we=Ee:Ve.sibling=Ee,Ve=Ee);return Pe&&bn(Y,ke),we}for(Ee=a(Ee);ke<Z.length;ke++)Be=ne(Ee,Y,ke,Z[ke],ce),Be!==null&&(e&&Be.alternate!==null&&Ee.delete(Be.key===null?ke:Be.key),B=i(Be,B,ke),Ve===null?we=Be:Ve.sibling=Be,Ve=Be);return e&&Ee.forEach(function(aa){return t(Y,aa)}),Pe&&bn(Y,ke),we}function Te(Y,B,Z,ce){if(Z==null)throw Error(c(151));for(var we=null,Ve=null,Ee=B,ke=B=0,Be=null,He=Z.next();Ee!==null&&!He.done;ke++,He=Z.next()){Ee.index>ke?(Be=Ee,Ee=null):Be=Ee.sibling;var aa=J(Y,Ee,He.value,ce);if(aa===null){Ee===null&&(Ee=Be);break}e&&Ee&&aa.alternate===null&&t(Y,Ee),B=i(aa,B,ke),Ve===null?we=aa:Ve.sibling=aa,Ve=aa,Ee=Be}if(He.done)return n(Y,Ee),Pe&&bn(Y,ke),we;if(Ee===null){for(;!He.done;ke++,He=Z.next())He=de(Y,He.value,ce),He!==null&&(B=i(He,B,ke),Ve===null?we=He:Ve.sibling=He,Ve=He);return Pe&&bn(Y,ke),we}for(Ee=a(Ee);!He.done;ke++,He=Z.next())He=ne(Ee,Y,ke,He.value,ce),He!==null&&(e&&He.alternate!==null&&Ee.delete(He.key===null?ke:He.key),B=i(He,B,ke),Ve===null?we=He:Ve.sibling=He,Ve=He);return e&&Ee.forEach(function(Jg){return t(Y,Jg)}),Pe&&bn(Y,ke),we}function Qe(Y,B,Z,ce){if(typeof Z=="object"&&Z!==null&&Z.type===S&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:e:{for(var we=Z.key;B!==null;){if(B.key===we){if(we=Z.type,we===S){if(B.tag===7){n(Y,B.sibling),ce=r(B,Z.props.children),ce.return=Y,Y=ce;break e}}else if(B.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===G&&ya(we)===B.type){n(Y,B.sibling),ce=r(B,Z.props),Or(ce,Z),ce.return=Y,Y=ce;break e}n(Y,B);break}else t(Y,B);B=B.sibling}Z.type===S?(ce=fa(Z.props.children,Y.mode,ce,Z.key),ce.return=Y,Y=ce):(ce=Ti(Z.type,Z.key,Z.props,null,Y.mode,ce),Or(ce,Z),ce.return=Y,Y=ce)}return h(Y);case N:e:{for(we=Z.key;B!==null;){if(B.key===we)if(B.tag===4&&B.stateNode.containerInfo===Z.containerInfo&&B.stateNode.implementation===Z.implementation){n(Y,B.sibling),ce=r(B,Z.children||[]),ce.return=Y,Y=ce;break e}else{n(Y,B);break}else t(Y,B);B=B.sibling}ce=bl(Z,Y.mode,ce),ce.return=Y,Y=ce}return h(Y);case G:return Z=ya(Z),Qe(Y,B,Z,ce)}if(X(Z))return Se(Y,B,Z,ce);if(D(Z)){if(we=D(Z),typeof we!="function")throw Error(c(150));return Z=we.call(Z),Te(Y,B,Z,ce)}if(typeof Z.then=="function")return Qe(Y,B,ki(Z),ce);if(Z.$$typeof===L)return Qe(Y,B,Ii(Y,Z),ce);Li(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,B!==null&&B.tag===6?(n(Y,B.sibling),ce=r(B,Z),ce.return=Y,Y=ce):(n(Y,B),ce=vl(Z,Y.mode,ce),ce.return=Y,Y=ce),h(Y)):n(Y,B)}return function(Y,B,Z,ce){try{Dr=0;var we=Qe(Y,B,Z,ce);return Xa=null,we}catch(Ee){if(Ee===$a||Ee===Oi)throw Ee;var Ve=zt(29,Ee,null,Y.mode);return Ve.lanes=ce,Ve.return=Y,Ve}finally{}}}var ba=$u(!0),Xu=$u(!1),Bn=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ol(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ge&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ri(e),Du(e,null,n),t}return wi(e,a,t,n),Ri(e)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Fc(e,n)}}function jl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=h:i=i.next=h,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var kl=!1;function kr(){if(kl){var e=Ya;if(e!==null)throw e}}function Lr(e,t,n,a){kl=!1;var r=e.updateQueue;Bn=!1;var i=r.firstBaseUpdate,h=r.lastBaseUpdate,R=r.shared.pending;if(R!==null){r.shared.pending=null;var M=R,Q=M.next;M.next=null,h===null?i=Q:h.next=Q,h=M;var le=e.alternate;le!==null&&(le=le.updateQueue,R=le.lastBaseUpdate,R!==h&&(R===null?le.firstBaseUpdate=Q:R.next=Q,le.lastBaseUpdate=M))}if(i!==null){var de=r.baseState;h=0,le=Q=M=null,R=i;do{var J=R.lane&-536870913,ne=J!==R.lane;if(ne?(Fe&J)===J:(a&J)===J){J!==0&&J===qa&&(kl=!0),le!==null&&(le=le.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Se=e,Te=R;J=t;var Qe=n;switch(Te.tag){case 1:if(Se=Te.payload,typeof Se=="function"){de=Se.call(Qe,de,J);break e}de=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Te.payload,J=typeof Se=="function"?Se.call(Qe,de,J):Se,J==null)break e;de=E({},de,J);break e;case 2:Bn=!0}}J=R.callback,J!==null&&(e.flags|=64,ne&&(e.flags|=8192),ne=r.callbacks,ne===null?r.callbacks=[J]:ne.push(J))}else ne={lane:J,tag:R.tag,payload:R.payload,callback:R.callback,next:null},le===null?(Q=le=ne,M=de):le=le.next=ne,h|=J;if(R=R.next,R===null){if(R=r.shared.pending,R===null)break;ne=R,R=ne.next,ne.next=null,r.lastBaseUpdate=ne,r.shared.pending=null}}while(!0);le===null&&(M=de),r.baseState=M,r.firstBaseUpdate=Q,r.lastBaseUpdate=le,i===null&&(r.shared.lanes=0),$n|=h,e.lanes=h,e.memoizedState=de}}function Zu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Qu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Zu(n[e],t)}var Za=C(null),zi=C(0);function Wu(e,t){e=In,ie(zi,e),ie(Za,t),In=e|t.baseLanes}function Ll(){ie(zi,In),ie(Za,Za.current)}function zl(){In=zi.current,k(Za),k(zi)}var Mt=C(null),Kt=null;function Hn(e){var t=e.alternate;ie(lt,lt.current&1),ie(Mt,e),Kt===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Kt=e)}function Ml(e){ie(lt,lt.current),ie(Mt,e),Kt===null&&(Kt=e)}function Ku(e){e.tag===22?(ie(lt,lt.current),ie(Mt,e),Kt===null&&(Kt=e)):Gn()}function Gn(){ie(lt,lt.current),ie(Mt,Mt.current)}function Ut(e){k(Mt),Kt===e&&(Kt=null),k(lt)}var lt=C(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Go(n)||qo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,je=null,Xe=null,dt=null,Ui=!1,Qa=!1,xa=!1,Fi=0,zr=0,Wa=null,Hm=0;function it(){throw Error(c(321))}function Ul(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,a,r,i){return En=i,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?Ld:eo,xa=!1,i=n(a,r),xa=!1,Qa&&(i=ed(t,n,a,r)),Ju(e),i}function Ju(e){V.H=Fr;var t=Xe!==null&&Xe.next!==null;if(En=0,dt=Xe=je=null,Ui=!1,zr=0,Wa=null,t)throw Error(c(300));e===null||ft||(e=e.dependencies,e!==null&&Ci(e)&&(ft=!0))}function ed(e,t,n,a){je=e;var r=0;do{if(Qa&&(Wa=null),zr=0,Qa=!1,25<=r)throw Error(c(301));if(r+=1,dt=Xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}V.H=zd,i=t(n,a)}while(Qa);return i}function Gm(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?Mr(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(je.flags|=1024),t}function Bl(){var e=Fi!==0;return Fi=0,e}function Pl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vl(e){if(Ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ui=!1}En=0,dt=Xe=je=null,Qa=!1,zr=Fi=0,Wa=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?je.memoizedState=dt=e:dt=dt.next=e,dt}function ot(){if(Xe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=dt===null?je.memoizedState:dt.next;if(t!==null)dt=t,Xe=e;else{if(e===null)throw je.alternate===null?Error(c(467)):Error(c(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dt===null?je.memoizedState=dt=e:dt=dt.next=e}return dt}function Bi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mr(e){var t=zr;return zr+=1,Wa===null&&(Wa=[]),e=Gu(Wa,e,t),t=je,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?Ld:eo),e}function Pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mr(e);if(e.$$typeof===L)return xt(e)}throw Error(c(438,String(e)))}function Hl(e){var t=null,n=je.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=je.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Bi(),je.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=re;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=ot();return Gl(t,Xe,e)}function Gl(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var h=r.next;r.next=i.next,i.next=h}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var R=h=null,M=null,Q=t,le=!1;do{var de=Q.lane&-536870913;if(de!==Q.lane?(Fe&de)===de:(En&de)===de){var J=Q.revertLane;if(J===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),de===qa&&(le=!0);else if((En&J)===J){Q=Q.next,J===qa&&(le=!0);continue}else de={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},M===null?(R=M=de,h=i):M=M.next=de,je.lanes|=J,$n|=J;de=Q.action,xa&&n(i,de),i=Q.hasEagerState?Q.eagerState:n(i,de)}else J={lane:de,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},M===null?(R=M=J,h=i):M=M.next=J,je.lanes|=de,$n|=de;Q=Q.next}while(Q!==null&&Q!==t);if(M===null?h=i:M.next=R,!Lt(i,e.memoizedState)&&(ft=!0,le&&(n=Ya,n!==null)))throw n;e.memoizedState=i,e.baseState=h,e.baseQueue=M,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ql(e){var t=ot(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do i=e(i,h.action),h=h.next;while(h!==r);Lt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function td(e,t,n){var a=je,r=ot(),i=Pe;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var h=!Lt((Xe||r).memoizedState,n);if(h&&(r.memoizedState=n,ft=!0),r=r.queue,Xl(rd.bind(null,a,r,e),[e]),r.getSnapshot!==t||h||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,Ka(9,{destroy:void 0},ad.bind(null,a,r,n,t),null),Ke===null)throw Error(c(349));i||(En&127)!==0||nd(a,t,n)}return n}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t=Bi(),je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,a){t.value=n,t.getSnapshot=a,id(t)&&sd(e)}function rd(e,t,n){return n(function(){id(t)&&sd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function sd(e){var t=da(e,2);t!==null&&kt(t,e,2)}function Yl(e){var t=_t();if(typeof e=="function"){var n=e;if(e=n(),xa){Ht(!0);try{n()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function ld(e,t,n,a){return e.baseState=n,Gl(e,Xe,typeof a=="function"?a:An)}function qm(e,t,n,a,r){if(qi(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){i.listeners.push(h)}};V.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,od(t,i)):(i.next=n.next,t.pending=n.next=i)}}function od(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=V.T,h={};V.T=h;try{var R=n(r,a),M=V.S;M!==null&&M(h,R),cd(e,t,R)}catch(Q){$l(e,t,Q)}finally{i!==null&&h.types!==null&&(i.types=h.types),V.T=i}}else try{i=n(r,a),cd(e,t,i)}catch(Q){$l(e,t,Q)}}function cd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ud(e,t,a)},function(a){return $l(e,t,a)}):ud(e,t,n)}function ud(e,t,n){t.status="fulfilled",t.value=n,dd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,od(e,n)))}function $l(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,dd(t),t=t.next;while(t!==a)}e.action=null}function dd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fd(e,t){return t}function hd(e,t){if(Pe){var n=Ke.formState;if(n!==null){e:{var a=je;if(Pe){if(et){t:{for(var r=et,i=Wt;r.nodeType!==8;){if(!i){r=null;break t}if(r=Jt(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){et=Jt(r.nextSibling),a=r.data==="F!";break e}}Un(a)}a=!1}a&&(t=n[0])}}return n=_t(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fd,lastRenderedState:t},n.queue=a,n=Od.bind(null,je,a),a.dispatch=n,a=Yl(!1),i=Jl.bind(null,je,!1,a.queue),a=_t(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=qm.bind(null,je,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function pd(e){var t=ot();return md(t,Xe,e)}function md(e,t,n){if(t=Gl(e,t,fd)[0],e=Vi(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Mr(t)}catch(h){throw h===$a?Oi:h}else a=t;t=ot();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(je.flags|=2048,Ka(9,{destroy:void 0},Ym.bind(null,r,n),null)),[a,i,e]}function Ym(e,t){e.action=t}function gd(e){var t=ot(),n=Xe;if(n!==null)return md(t,n,e);ot(),t=t.memoizedState,n=ot();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=je.updateQueue,t===null&&(t=Bi(),je.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function yd(){return ot().memoizedState}function Hi(e,t,n,a){var r=_t();je.flags|=e,r.memoizedState=Ka(1|t,{destroy:void 0},n,a===void 0?null:a)}function Gi(e,t,n,a){var r=ot();a=a===void 0?null:a;var i=r.memoizedState.inst;Xe!==null&&a!==null&&Ul(a,Xe.memoizedState.deps)?r.memoizedState=Ka(t,i,n,a):(je.flags|=e,r.memoizedState=Ka(1|t,i,n,a))}function vd(e,t){Hi(8390656,8,e,t)}function Xl(e,t){Gi(2048,8,e,t)}function $m(e){je.flags|=4;var t=je.updateQueue;if(t===null)t=Bi(),je.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function bd(e){var t=ot().memoizedState;return $m({ref:t,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function xd(e,t){return Gi(4,2,e,t)}function Sd(e,t){return Gi(4,4,e,t)}function Ed(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,n){n=n!=null?n.concat([e]):null,Gi(4,4,Ed.bind(null,t,e),n)}function Zl(){}function _d(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ul(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function wd(e,t){var n=ot();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ul(t,a[1]))return a[0];if(a=e(),xa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a}function Ql(e,t,n){return n===void 0||(En&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Tf(),je.lanes|=e,$n|=e,n)}function Rd(e,t,n,a){return Lt(n,t)?n:Za.current!==null?(e=Ql(e,n,a),Lt(e,t)||(ft=!0),e):(En&42)===0||(En&1073741824)!==0&&(Fe&261930)===0?(ft=!0,e.memoizedState=n):(e=Tf(),je.lanes|=e,$n|=e,t)}function Td(e,t,n,a,r){var i=H.p;H.p=i!==0&&8>i?i:8;var h=V.T,R={};V.T=R,Jl(e,!1,t,n);try{var M=r(),Q=V.S;if(Q!==null&&Q(R,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var le=Vm(M,a);Ur(e,t,le,Pt(e))}else Ur(e,t,a,Pt(e))}catch(de){Ur(e,t,{then:function(){},status:"rejected",reason:de},Pt())}finally{H.p=i,h!==null&&R.types!==null&&(h.types=R.types),V.T=h}}function Xm(){}function Wl(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=Nd(e).queue;Td(e,r,t,fe,n===null?Xm:function(){return Cd(e),n(a)})}function Nd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cd(e){var t=Nd(e);t.next===null&&(t=e.alternate.memoizedState),Ur(e,t.next.queue,{},Pt())}function Kl(){return xt(ti)}function Id(){return ot().memoizedState}function Dd(){return ot().memoizedState}function Zm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Pt();e=Pn(n);var a=Vn(t,e,n);a!==null&&(kt(a,t,n),jr(a,t,n)),t={cache:Tl()},e.payload=t;return}t=t.return}}function Qm(e,t,n){var a=Pt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e)?jd(t,n):(n=gl(e,t,n,a),n!==null&&(kt(n,e,a),kd(n,t,a)))}function Od(e,t,n){var a=Pt();Ur(e,t,n,a)}function Ur(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))jd(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var h=t.lastRenderedState,R=i(h,n);if(r.hasEagerState=!0,r.eagerState=R,Lt(R,h))return wi(e,t,r,0),Ke===null&&_i(),!1}catch{}finally{}if(n=gl(e,t,r,a),n!==null)return kt(n,e,a),kd(n,t,a),!0}return!1}function Jl(e,t,n,a){if(a={lane:2,revertLane:Oo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(c(479))}else t=gl(e,n,a,2),t!==null&&kt(t,e,2)}function qi(e){var t=e.alternate;return e===je||t!==null&&t===je}function jd(e,t){Qa=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Fc(e,n)}}var Fr={readContext:xt,use:Pi,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useInsertionEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useSyncExternalStore:it,useId:it,useHostTransitionStatus:it,useFormState:it,useActionState:it,useOptimistic:it,useMemoCache:it,useCacheRefresh:it};Fr.useEffectEvent=it;var Ld={readContext:xt,use:Pi,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:vd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hi(4194308,4,Ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){Hi(4,2,e,t)},useMemo:function(e,t){var n=_t();t=t===void 0?null:t;var a=e();if(xa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=_t();if(n!==void 0){var r=n(t);if(xa){Ht(!0);try{n(t)}finally{Ht(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Qm.bind(null,je,e),[a.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:function(e){e=Yl(e);var t=e.queue,n=Od.bind(null,je,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zl,useDeferredValue:function(e,t){var n=_t();return Ql(n,e,t)},useTransition:function(){var e=Yl(!1);return e=Td.bind(null,je,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=je,r=_t();if(Pe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ke===null)throw Error(c(349));(Fe&127)!==0||nd(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,vd(rd.bind(null,a,i,e),[e]),a.flags|=2048,Ka(9,{destroy:void 0},ad.bind(null,a,i,n,t),null),n},useId:function(){var e=_t(),t=Ke.identifierPrefix;if(Pe){var n=dn,a=un;n=(a&~(1<<32-rt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Hm++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Kl,useFormState:hd,useActionState:hd,useOptimistic:function(e){var t=_t();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Jl.bind(null,je,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hl,useCacheRefresh:function(){return _t().memoizedState=Zm.bind(null,je)},useEffectEvent:function(e){var t=_t(),n={impl:e};return t.memoizedState=n,function(){if((Ge&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},eo={readContext:xt,use:Pi,useCallback:_d,useContext:xt,useEffect:Xl,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:wd,useReducer:Vi,useRef:yd,useState:function(){return Vi(An)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=ot();return Rd(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Vi(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Mr(e),t]},useSyncExternalStore:td,useId:Id,useHostTransitionStatus:Kl,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=ot();return ld(n,Xe,e,t)},useMemoCache:Hl,useCacheRefresh:Dd};eo.useEffectEvent=bd;var zd={readContext:xt,use:Pi,useCallback:_d,useContext:xt,useEffect:Xl,useImperativeHandle:Ad,useInsertionEffect:xd,useLayoutEffect:Sd,useMemo:wd,useReducer:ql,useRef:yd,useState:function(){return ql(An)},useDebugValue:Zl,useDeferredValue:function(e,t){var n=ot();return Xe===null?Ql(n,e,t):Rd(n,Xe.memoizedState,e,t)},useTransition:function(){var e=ql(An)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:Mr(e),t]},useSyncExternalStore:td,useId:Id,useHostTransitionStatus:Kl,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var n=ot();return Xe!==null?ld(n,Xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hl,useCacheRefresh:Dd};zd.useEffectEvent=bd;function to(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var no={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Pt(),r=Pn(a);r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(kt(t,e,a),jr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Pt(),r=Pn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Vn(e,r,a),t!==null&&(kt(t,e,a),jr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pt(),a=Pn(n);a.tag=2,t!=null&&(a.callback=t),t=Vn(e,a,n),t!==null&&(kt(t,e,n),jr(t,e,n))}};function Md(e,t,n,a,r,i,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,h):t.prototype&&t.prototype.isPureReactComponent?!wr(n,a)||!wr(r,i):!0}function Ud(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&no.enqueueReplaceState(t,t.state,null)}function Sa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Fd(e){Ai(e)}function Bd(e){console.error(e)}function Pd(e){Ai(e)}function Yi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Vd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ao(e,t,n){return n=Pn(n),n.tag=3,n.payload={element:null},n.callback=function(){Yi(e,t)},n}function Hd(e){return e=Pn(e),e.tag=3,e}function Gd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){Vd(t,n,a)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){Vd(t,n,a),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var R=a.stack;this.componentDidCatch(a.value,{componentStack:R!==null?R:""})})}function Wm(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,r,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Kt===null?rs():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ji?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Co(e,a,r)),!1;case 22:return n.flags|=65536,a===ji?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Co(e,a,r)),!1}throw Error(c(435,n.tag))}return Co(e,a,r),rs(),!1}if(Pe)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==El&&(e=Error(c(422),{cause:a}),Nr(Xt(e,n)))):(a!==El&&(t=Error(c(423),{cause:a}),Nr(Xt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Xt(a,n),r=ao(e.stateNode,a,r),jl(e,r),st!==4&&(st=2)),!1;var i=Error(c(520),{cause:a});if(i=Xt(i,n),$r===null?$r=[i]:$r.push(i),st!==4&&(st=2),t===null)return!0;a=Xt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ao(n.stateNode,a,e),jl(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Hd(r),Gd(r,e,n,a),jl(n,r),!1}n=n.return}while(n!==null);return!1}var ro=Error(c(461)),ft=!1;function St(e,t,n,a){t.child=e===null?Xu(t,null,n,a):ba(t,e.child,n,a)}function qd(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var h={};for(var R in a)R!=="ref"&&(h[R]=a[R])}else h=a;return ma(t),a=Fl(e,t,n,h,i,r),R=Bl(),e!==null&&!ft?(Pl(e,t,r),_n(e,t,r)):(Pe&&R&&xl(t),t.flags|=1,St(e,t,a,r),t.child)}function Yd(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!yl(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,$d(e,t,i,a,r)):(e=Ti(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ho(e,r)){var h=i.memoizedProps;if(n=n.compare,n=n!==null?n:wr,n(h,a)&&e.ref===t.ref)return _n(e,t,r)}return t.flags|=1,e=vn(i,a),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(wr(i,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=i,ho(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,_n(e,t,r)}return io(e,t,n,a,r)}function Xd(e,t,n,a){var r=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~i}else a=0,t.child=null;return Zd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,i!==null?i.cachePool:null),i!==null?Wu(t,i):Ll(),Ku(t);else return a=t.lanes=536870912,Zd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Di(t,i.cachePool),Wu(t,i),Gn(),t.memoizedState=null):(e!==null&&Di(t,null),Ll(),Gn());return St(e,t,r,n),t.child}function Br(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Zd(e,t,n,a,r){var i=Cl();return i=i===null?null:{parent:ut._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Di(t,null),Ll(),Ku(t),e!==null&&Ga(e,t,a,!0),t.childLanes=r,null}function $i(e,t){return t=Zi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Qd(e,t,n){return ba(t,e.child,null,n),e=$i(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function Km(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Pe){if(a.mode==="hidden")return e=$i(t,a),t.lanes=536870912,Br(null,e);if(Ml(t),(e=et)?(e=ch(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=ju(e),n.return=t,t.child=n,bt=t,et=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return $i(t,a)}var i=e.memoizedState;if(i!==null){var h=i.dehydrated;if(Ml(t),r)if(t.flags&256)t.flags&=-257,t=Qd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(ft||Ga(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(a=Ke,a!==null&&(h=Bc(a,n),h!==0&&h!==i.retryLane))throw i.retryLane=h,da(e,h),kt(a,e,h),ro;rs(),t=Qd(e,t,n)}else e=i.treeContext,et=Jt(h.nextSibling),bt=t,Pe=!0,Mn=null,Wt=!1,e!==null&&zu(t,e),t=$i(t,a),t.flags|=4096;return t}return e=vn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function io(e,t,n,a,r){return ma(t),n=Fl(e,t,n,a,void 0,r),a=Bl(),e!==null&&!ft?(Pl(e,t,r),_n(e,t,r)):(Pe&&a&&xl(t),t.flags|=1,St(e,t,n,r),t.child)}function Wd(e,t,n,a,r,i){return ma(t),t.updateQueue=null,n=ed(t,a,n,r),Ju(e),a=Bl(),e!==null&&!ft?(Pl(e,t,i),_n(e,t,i)):(Pe&&a&&xl(t),t.flags|=1,St(e,t,n,i),t.child)}function Kd(e,t,n,a,r){if(ma(t),t.stateNode===null){var i=Ba,h=n.contextType;typeof h=="object"&&h!==null&&(i=xt(h)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=no,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Dl(t),h=n.contextType,i.context=typeof h=="object"&&h!==null?xt(h):Ba,i.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(to(t,n,h,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(h=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),h!==i.state&&no.enqueueReplaceState(i,i.state,null),Lr(t,a,i,r),kr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var R=t.memoizedProps,M=Sa(n,R);i.props=M;var Q=i.context,le=n.contextType;h=Ba,typeof le=="object"&&le!==null&&(h=xt(le));var de=n.getDerivedStateFromProps;le=typeof de=="function"||typeof i.getSnapshotBeforeUpdate=="function",R=t.pendingProps!==R,le||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(R||Q!==h)&&Ud(t,i,a,h),Bn=!1;var J=t.memoizedState;i.state=J,Lr(t,a,i,r),kr(),Q=t.memoizedState,R||J!==Q||Bn?(typeof de=="function"&&(to(t,n,de,a),Q=t.memoizedState),(M=Bn||Md(t,n,M,a,J,Q,h))?(le||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=Q),i.props=a,i.state=Q,i.context=h,a=M):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Ol(e,t),h=t.memoizedProps,le=Sa(n,h),i.props=le,de=t.pendingProps,J=i.context,Q=n.contextType,M=Ba,typeof Q=="object"&&Q!==null&&(M=xt(Q)),R=n.getDerivedStateFromProps,(Q=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h!==de||J!==M)&&Ud(t,i,a,M),Bn=!1,J=t.memoizedState,i.state=J,Lr(t,a,i,r),kr();var ne=t.memoizedState;h!==de||J!==ne||Bn||e!==null&&e.dependencies!==null&&Ci(e.dependencies)?(typeof R=="function"&&(to(t,n,R,a),ne=t.memoizedState),(le=Bn||Md(t,n,le,a,J,ne,M)||e!==null&&e.dependencies!==null&&Ci(e.dependencies))?(Q||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,ne,M),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,ne,M)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ne),i.props=a,i.state=ne,i.context=M,a=le):(typeof i.componentDidUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&J===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Xi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=ba(t,e.child,null,r),t.child=ba(t,null,n,r)):St(e,t,n,r),t.memoizedState=i.state,e=t.child):e=_n(e,t,r),e}function Jd(e,t,n,a){return ha(),t.flags|=256,St(e,t,n,a),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lo(e){return{baseLanes:e,cachePool:Vu()}}function oo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bt),e}function ef(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,h;if((h=i)||(h=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),h&&(r=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Pe){if(r?Hn(t):Gn(),(e=et)?(e=ch(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zn!==null?{id:un,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},n=ju(e),n.return=t,t.child=n,bt=t,et=null)):e=null,e===null)throw Un(t);return qo(e)?t.lanes=32:t.lanes=536870912,null}var R=a.children;return a=a.fallback,r?(Gn(),r=t.mode,R=Zi({mode:"hidden",children:R},r),a=fa(a,r,n,null),R.return=t,a.return=t,R.sibling=a,t.child=R,a=t.child,a.memoizedState=lo(n),a.childLanes=oo(e,h,n),t.memoizedState=so,Br(null,a)):(Hn(t),co(t,R))}var M=e.memoizedState;if(M!==null&&(R=M.dehydrated,R!==null)){if(i)t.flags&256?(Hn(t),t.flags&=-257,t=uo(e,t,n)):t.memoizedState!==null?(Gn(),t.child=e.child,t.flags|=128,t=null):(Gn(),R=a.fallback,r=t.mode,a=Zi({mode:"visible",children:a.children},r),R=fa(R,r,n,null),R.flags|=2,a.return=t,R.return=t,a.sibling=R,t.child=a,ba(t,e.child,null,n),a=t.child,a.memoizedState=lo(n),a.childLanes=oo(e,h,n),t.memoizedState=so,t=Br(null,a));else if(Hn(t),qo(R)){if(h=R.nextSibling&&R.nextSibling.dataset,h)var Q=h.dgst;h=Q,a=Error(c(419)),a.stack="",a.digest=h,Nr({value:a,source:null,stack:null}),t=uo(e,t,n)}else if(ft||Ga(e,t,n,!1),h=(n&e.childLanes)!==0,ft||h){if(h=Ke,h!==null&&(a=Bc(h,n),a!==0&&a!==M.retryLane))throw M.retryLane=a,da(e,a),kt(h,e,a),ro;Go(R)||rs(),t=uo(e,t,n)}else Go(R)?(t.flags|=192,t.child=e.child,t=null):(e=M.treeContext,et=Jt(R.nextSibling),bt=t,Pe=!0,Mn=null,Wt=!1,e!==null&&zu(t,e),t=co(t,a.children),t.flags|=4096);return t}return r?(Gn(),R=a.fallback,r=t.mode,M=e.child,Q=M.sibling,a=vn(M,{mode:"hidden",children:a.children}),a.subtreeFlags=M.subtreeFlags&65011712,Q!==null?R=vn(Q,R):(R=fa(R,r,n,null),R.flags|=2),R.return=t,a.return=t,a.sibling=R,t.child=a,Br(null,a),a=t.child,R=e.child.memoizedState,R===null?R=lo(n):(r=R.cachePool,r!==null?(M=ut._currentValue,r=r.parent!==M?{parent:M,pool:M}:r):r=Vu(),R={baseLanes:R.baseLanes|n,cachePool:r}),a.memoizedState=R,a.childLanes=oo(e,h,n),t.memoizedState=so,Br(e.child,a)):(Hn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function co(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function uo(e,t,n){return ba(t,e.child,null,n),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),wl(e.return,t,n)}function fo(e,t,n,a,r,i){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:i}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=n,h.tailMode=r,h.treeForkCount=i)}function nf(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;a=a.children;var h=lt.current,R=(h&2)!==0;if(R?(h=h&1|2,t.flags|=128):h&=1,ie(lt,h),St(e,t,a,n),a=Pe?Tr:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tf(e,n,t);else if(e.tag===19)tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),fo(t,!1,r,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Mi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}fo(t,!0,n,null,i,a);break;case"together":fo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function _n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ho(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ci(e)))}function Jm(e,t,n){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),Fn(t,ut,e.memoizedState.cache),ha();break;case 27:case 5:nt(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:Fn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ml(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ef(e,t,n):(Hn(t),e=_n(e,t,n),e!==null?e.sibling:null);Hn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ga(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return nf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(lt,lt.current),a)break;return null;case 22:return t.lanes=0,Xd(e,t,n,t.pendingProps);case 24:Fn(t,ut,e.memoizedState.cache)}return _n(e,t,n)}function af(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!ho(e,n)&&(t.flags&128)===0)return ft=!1,Jm(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Pe&&(t.flags&1048576)!==0&&Lu(t,Tr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e=="function")yl(e)?(a=Sa(e,a),t.tag=1,t=Kd(null,t,e,a,n)):(t.tag=0,t=io(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===F){t.tag=11,t=qd(null,t,e,a,n);break e}else if(r===P){t.tag=14,t=Yd(null,t,e,a,n);break e}}throw t=x(e)||e,Error(c(306,t,""))}}return t;case 0:return io(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Sa(a,t.pendingProps),Kd(e,t,a,r,n);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,Ol(e,t),Lr(t,a,null,n);var h=t.memoizedState;if(a=h.cache,Fn(t,ut,a),a!==i.cache&&Rl(t,[ut],n,!0),kr(),a=h.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Jd(e,t,a,n);break e}else if(a!==r){r=Xt(Error(c(424)),t),Nr(r),t=Jd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(et=Jt(e.firstChild),bt=t,Pe=!0,Mn=null,Wt=!0,n=Xu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ha(),a===r){t=_n(e,t,n);break e}St(e,t,a,n)}t=t.child}return t;case 26:return Xi(e,t),e===null?(n=mh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Pe||(n=t.type,e=t.pendingProps,a=ds(Ae.current).createElement(n),a[vt]=t,a[Nt]=e,Et(a,n,e),gt(a),t.stateNode=a):t.memoizedState=mh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nt(t),e===null&&Pe&&(a=t.stateNode=fh(t.type,t.pendingProps,Ae.current),bt=t,Wt=!0,r=et,Kn(t.type)?(Yo=r,et=Jt(a.firstChild)):et=r),St(e,t,t.pendingProps.children,n),Xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Pe&&((r=a=et)&&(a=Cg(a,t.type,t.pendingProps,Wt),a!==null?(t.stateNode=a,bt=t,et=Jt(a.firstChild),Wt=!1,r=!0):r=!1),r||Un(t)),nt(t),r=t.type,i=t.pendingProps,h=e!==null?e.memoizedProps:null,a=i.children,Po(r,i)?a=null:h!==null&&Po(r,h)&&(t.flags|=32),t.memoizedState!==null&&(r=Fl(e,t,Gm,null,null,n),ti._currentValue=r),Xi(e,t),St(e,t,a,n),t.child;case 6:return e===null&&Pe&&((e=n=et)&&(n=Ig(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,bt=t,et=null,e=!0):e=!1),e||Un(t)),null;case 13:return ef(e,t,n);case 4:return Ne(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ba(t,null,a,n):St(e,t,a,n),t.child;case 11:return qd(e,t,t.type,t.pendingProps,n);case 7:return St(e,t,t.pendingProps,n),t.child;case 8:return St(e,t,t.pendingProps.children,n),t.child;case 12:return St(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Fn(t,t.type,a.value),St(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,ma(t),r=xt(r),a=a(r),t.flags|=1,St(e,t,a,n),t.child;case 14:return Yd(e,t,t.type,t.pendingProps,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 19:return nf(e,t,n);case 31:return Km(e,t,n);case 22:return Xd(e,t,n,t.pendingProps);case 24:return ma(t),a=xt(ut),e===null?(r=Cl(),r===null&&(r=Ke,i=Tl(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},Dl(t),Fn(t,ut,r)):((e.lanes&n)!==0&&(Ol(e,t),Lr(t,null,null,n),kr()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Fn(t,ut,a)):(a=i.cache,Fn(t,ut,a),a!==r.cache&&Rl(t,[ut],n,!0))),St(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function wn(e){e.flags|=4}function po(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Df())e.flags|=8192;else throw va=ji,Il}else e.flags&=-16777217}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xh(t))if(Df())e.flags|=8192;else throw va=ji,Il}function Qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mc():536870912,e.lanes|=t,nr|=t)}function Pr(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function eg(e,t,n){var a=t.pendingProps;switch(Sl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return tt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Sn(ut),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?wn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Al())),tt(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(wn(t),i!==null?(tt(t),rf(t,i)):(tt(t),po(t,r,null,a,n))):i?i!==e.memoizedState?(wn(t),tt(t),rf(t,i)):(tt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&wn(t),tt(t),po(t,r,e,a,n)),null;case 27:if(Je(t),n=Ae.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return tt(t),null}e=se.current,Ha(t)?Mu(t):(e=fh(r,a,n),t.stateNode=e,wn(t))}return tt(t),null;case 5:if(Je(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return tt(t),null}if(i=se.current,Ha(t))Mu(t);else{var h=ds(Ae.current);switch(i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?h.createElement("select",{is:a.is}):h.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?h.createElement(r,{is:a.is}):h.createElement(r)}}i[vt]=t,i[Nt]=a;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=i;e:switch(Et(i,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&wn(t)}}return tt(t),po(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&wn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=Ae.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=bt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||th(e.nodeValue,n)),e||Un(t,!0)}else e=ds(e).createTextNode(a),e[vt]=t,t.stateNode=e}return tt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ha(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[vt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),e=!1}else n=Al(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(c(558))}return tt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ha(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[vt]=t}else ha(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),r=!1}else r=Al(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qi(t,t.updateQueue),tt(t),null);case 4:return Re(),e===null&&zo(t.stateNode.containerInfo),tt(t),null;case 10:return Sn(t.type),tt(t),null;case 19:if(k(lt),a=t.memoizedState,a===null)return tt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Pr(a,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,Pr(a,!1),e=i.updateQueue,t.updateQueue=e,Qi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ou(n,e),n=n.sibling;return ie(lt,lt.current&1|2),Pe&&bn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&be()>ts&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Mi(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Qi(t,e),Pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Pe)return tt(t),null}else 2*be()-a.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=be(),e.sibling=null,n=lt.current,ie(lt,r?n&1|2:n&1),Pe&&bn(t,a.treeForkCount),e):(tt(t),null);case 22:case 23:return Ut(t),zl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),n=t.updateQueue,n!==null&&Qi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&k(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(ut),tt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function tg(e,t){switch(Sl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(ut),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Je(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(c(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(lt),null;case 4:return Re(),null;case 10:return Sn(t.type),null;case 22:case 23:return Ut(t),zl(),e!==null&&k(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(ut),null;case 25:return null;default:return null}}function sf(e,t){switch(Sl(t),t.tag){case 3:Sn(ut),Re();break;case 26:case 27:case 5:Je(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:k(lt);break;case 10:Sn(t.type);break;case 22:case 23:Ut(t),zl(),e!==null&&k(ga);break;case 24:Sn(ut)}}function Vr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,h=n.inst;a=i(),h.destroy=a}n=n.next}while(n!==r)}}catch(R){$e(t,t.return,R)}}function qn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var h=a.inst,R=h.destroy;if(R!==void 0){h.destroy=void 0,r=t;var M=n,Q=R;try{Q()}catch(le){$e(r,M,le)}}}a=a.next}while(a!==i)}}catch(le){$e(t,t.return,le)}}function lf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qu(t,n)}catch(a){$e(e,e.return,a)}}}function of(e,t,n){n.props=Sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){$e(e,t,a)}}function Hr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){$e(e,t,r)}}function fn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){$e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function cf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){$e(e,e.return,r)}}function mo(e,t,n){try{var a=e.stateNode;Ag(a,e.type,n,t),a[Nt]=t}catch(r){$e(e,e.return,r)}}function uf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn));else if(a!==4&&(a===27&&Kn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(yo(e,t,n),e=e.sibling;e!==null;)yo(e,t,n),e=e.sibling}function Wi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Kn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}function df(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Et(t,a,n),t[vt]=e,t[Nt]=n}catch(i){$e(e,e.return,i)}}var Rn=!1,ht=!1,vo=!1,ff=typeof WeakSet=="function"?WeakSet:Set,yt=null;function ng(e,t){if(e=e.containerInfo,Fo=vs,e=Au(e),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var h=0,R=-1,M=-1,Q=0,le=0,de=e,J=null;t:for(;;){for(var ne;de!==n||r!==0&&de.nodeType!==3||(R=h+r),de!==i||a!==0&&de.nodeType!==3||(M=h+a),de.nodeType===3&&(h+=de.nodeValue.length),(ne=de.firstChild)!==null;)J=de,de=ne;for(;;){if(de===e)break t;if(J===n&&++Q===r&&(R=h),J===i&&++le===a&&(M=h),(ne=de.nextSibling)!==null)break;de=J,J=de.parentNode}de=ne}n=R===-1||M===-1?null:{start:R,end:M}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bo={focusedElem:e,selectionRange:n},vs=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var Se=Sa(n.type,r);e=a.getSnapshotBeforeUpdate(Se,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(Te){$e(n,n.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ho(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ho(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function hf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),a&4&&Vr(5,n);break;case 1:if(Nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){$e(n,n.return,h)}else{var r=Sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){$e(n,n.return,h)}}a&64&&lf(n),a&512&&Hr(n,n.return);break;case 3:if(Nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qu(e,t)}catch(h){$e(n,n.return,h)}}break;case 27:t===null&&a&4&&df(n);case 26:case 5:Nn(e,n),t===null&&a&4&&cf(n),a&512&&Hr(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),a&4&&gf(e,n);break;case 13:Nn(e,n),a&4&&yf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=dg.bind(null,n),Dg(e,n))));break;case 22:if(a=n.memoizedState!==null||Rn,!a){t=t!==null&&t.memoizedState!==null||ht,r=Rn;var i=ht;Rn=a,(ht=t)&&!i?Cn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Rn=r,ht=i}break;case 30:break;default:Nn(e,n)}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var at=null,It=!1;function Tn(e,t,n){for(n=n.child;n!==null;)mf(e,t,n),n=n.sibling}function mf(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:ht||fn(n,t),Tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ht||fn(n,t);var a=at,r=It;Kn(n.type)&&(at=n.stateNode,It=!1),Tn(e,t,n),Kr(n.stateNode),at=a,It=r;break;case 5:ht||fn(n,t);case 6:if(a=at,r=It,at=null,Tn(e,t,n),at=a,It=r,at!==null)if(It)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(n.stateNode)}catch(i){$e(n,t,i)}else try{at.removeChild(n.stateNode)}catch(i){$e(n,t,i)}break;case 18:at!==null&&(It?(e=at,lh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ur(e)):lh(at,n.stateNode));break;case 4:a=at,r=It,at=n.stateNode.containerInfo,It=!0,Tn(e,t,n),at=a,It=r;break;case 0:case 11:case 14:case 15:qn(2,n,t),ht||qn(4,n,t),Tn(e,t,n);break;case 1:ht||(fn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&of(n,t,a)),Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:ht=(a=ht)||n.memoizedState!==null,Tn(e,t,n),ht=a;break;default:Tn(e,t,n)}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ur(e)}catch(n){$e(t,t.return,n)}}}function yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ur(e)}catch(n){$e(t,t.return,n)}}function ag(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ff),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ff),t;default:throw Error(c(435,e.tag))}}function Ki(e,t){var n=ag(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=fg.bind(null,e,a);a.then(r,r)}})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,h=t,R=h;e:for(;R!==null;){switch(R.tag){case 27:if(Kn(R.type)){at=R.stateNode,It=!1;break e}break;case 5:at=R.stateNode,It=!1;break e;case 3:case 4:at=R.stateNode.containerInfo,It=!0;break e}R=R.return}if(at===null)throw Error(c(160));mf(i,h,r),at=null,It=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}var rn=null;function vf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Ot(e),a&4&&(qn(3,e,e.return),Vr(3,e),qn(5,e,e.return));break;case 1:Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),a&64&&Rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=rn;if(Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[gr]||i[vt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),Et(i,a,n),i[vt]=e,gt(i),a=i;break e;case"link":var h=vh("link","href",r).get(a+(n.href||""));if(h){for(var R=0;R<h.length;R++)if(i=h[R],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(R,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;case"meta":if(h=vh("meta","content",r).get(a+(n.content||""))){for(R=0;R<h.length;R++)if(i=h[R],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(R,1);break t}}i=r.createElement(a),Et(i,a,n),r.head.appendChild(i);break;default:throw Error(c(468,a))}i[vt]=e,gt(i),a=i}e.stateNode=a}else bh(r,e.type,e.stateNode);else e.stateNode=yh(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?bh(r,e.type,e.stateNode):yh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&mo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),n!==null&&a&4&&mo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),Ot(e),a&512&&(ht||n===null||fn(n,n.return)),e.flags&32){r=e.stateNode;try{ja(r,"")}catch(Se){$e(e,e.return,Se)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,mo(e,r,n!==null?n.memoizedProps:r)),a&1024&&(vo=!0);break;case 6:if(Dt(t,e),Ot(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Se){$e(e,e.return,Se)}}break;case 3:if(ps=null,r=rn,rn=fs(t.containerInfo),Dt(t,e),rn=r,Ot(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(Se){$e(e,e.return,Se)}vo&&(vo=!1,bf(e));break;case 4:a=rn,rn=fs(e.stateNode.containerInfo),Dt(t,e),Ot(e),rn=a;break;case 12:Dt(t,e),Ot(e);break;case 31:Dt(t,e),Ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 13:Dt(t,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(es=be()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 22:r=e.memoizedState!==null;var M=n!==null&&n.memoizedState!==null,Q=Rn,le=ht;if(Rn=Q||r,ht=le||M,Dt(t,e),ht=le,Rn=Q,Ot(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||M||Rn||ht||Ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){M=n=t;try{if(i=M.stateNode,r)h=i.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{R=M.stateNode;var de=M.memoizedProps.style,J=de!=null&&de.hasOwnProperty("display")?de.display:null;R.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Se){$e(M,M.return,Se)}}}else if(t.tag===6){if(n===null){M=t;try{M.stateNode.nodeValue=r?"":M.memoizedProps}catch(Se){$e(M,M.return,Se)}}}else if(t.tag===18){if(n===null){M=t;try{var ne=M.stateNode;r?oh(ne,!0):oh(M.stateNode,!1)}catch(Se){$e(M,M.return,Se)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ki(e,n))));break;case 19:Dt(t,e),Ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ki(e,a)));break;case 30:break;case 21:break;default:Dt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(uf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,i=go(e);Wi(e,i,r);break;case 5:var h=n.stateNode;n.flags&32&&(ja(h,""),n.flags&=-33);var R=go(e);Wi(e,R,h);break;case 3:case 4:var M=n.stateNode.containerInfo,Q=go(e);yo(e,Q,M);break;default:throw Error(c(161))}}catch(le){$e(e,e.return,le)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hf(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qn(4,t,t.return),Ea(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&of(t,t.return,n),Ea(t);break;case 27:Kr(t.stateNode);case 26:case 5:fn(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,h=i.flags;switch(i.tag){case 0:case 11:case 15:Cn(r,i,n),Vr(4,i);break;case 1:if(Cn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Q){$e(a,a.return,Q)}if(a=i,r=a.updateQueue,r!==null){var R=a.stateNode;try{var M=r.shared.hiddenCallbacks;if(M!==null)for(r.shared.hiddenCallbacks=null,r=0;r<M.length;r++)Zu(M[r],R)}catch(Q){$e(a,a.return,Q)}}n&&h&64&&lf(i),Hr(i,i.return);break;case 27:df(i);case 26:case 5:Cn(r,i,n),n&&a===null&&h&4&&cf(i),Hr(i,i.return);break;case 12:Cn(r,i,n);break;case 31:Cn(r,i,n),n&&h&4&&gf(r,i);break;case 13:Cn(r,i,n),n&&h&4&&yf(r,i);break;case 22:i.memoizedState===null&&Cn(r,i,n),Hr(i,i.return);break;case 30:break;default:Cn(r,i,n)}t=t.sibling}}function bo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Cr(n))}function xo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e))}function sn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xf(e,t,n,a),t=t.sibling}function xf(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:sn(e,t,n,a),r&2048&&Vr(9,t);break;case 1:sn(e,t,n,a);break;case 3:sn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cr(e)));break;case 12:if(r&2048){sn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,h=i.id,R=i.onPostCommit;typeof R=="function"&&R(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(M){$e(t,t.return,M)}}else sn(e,t,n,a);break;case 31:sn(e,t,n,a);break;case 13:sn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,h=t.alternate,t.memoizedState!==null?i._visibility&2?sn(e,t,n,a):Gr(e,t):i._visibility&2?sn(e,t,n,a):(i._visibility|=2,Ja(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&bo(h,t);break;case 24:sn(e,t,n,a),r&2048&&xo(t.alternate,t);break;default:sn(e,t,n,a)}}function Ja(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,h=t,R=n,M=a,Q=h.flags;switch(h.tag){case 0:case 11:case 15:Ja(i,h,R,M,r),Vr(8,h);break;case 23:break;case 22:var le=h.stateNode;h.memoizedState!==null?le._visibility&2?Ja(i,h,R,M,r):Gr(i,h):(le._visibility|=2,Ja(i,h,R,M,r)),r&&Q&2048&&bo(h.alternate,h);break;case 24:Ja(i,h,R,M,r),r&&Q&2048&&xo(h.alternate,h);break;default:Ja(i,h,R,M,r)}t=t.sibling}}function Gr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Gr(n,a),r&2048&&bo(a.alternate,a);break;case 24:Gr(n,a),r&2048&&xo(a.alternate,a);break;default:Gr(n,a)}t=t.sibling}}var qr=8192;function er(e,t,n){if(e.subtreeFlags&qr)for(e=e.child;e!==null;)Sf(e,t,n),e=e.sibling}function Sf(e,t,n){switch(e.tag){case 26:er(e,t,n),e.flags&qr&&e.memoizedState!==null&&Hg(n,rn,e.memoizedState,e.memoizedProps);break;case 5:er(e,t,n);break;case 3:case 4:var a=rn;rn=fs(e.stateNode.containerInfo),er(e,t,n),rn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=qr,qr=16777216,er(e,t,n),qr=a):er(e,t,n));break;default:er(e,t,n)}}function Ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,_f(a,e)}Ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 0:case 11:case 15:Yr(e),e.flags&2048&&qn(9,e,e.return);break;case 3:Yr(e);break;case 12:Yr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ji(e)):Yr(e);break;default:Yr(e)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];yt=a,_f(a,e)}Ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),Ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ji(t));break;default:Ji(t)}e=e.sibling}}function _f(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Cr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,yt=a;else e:for(n=e;yt!==null;){a=yt;var r=a.sibling,i=a.return;if(pf(a),a===n){yt=null;break e}if(r!==null){r.return=i,yt=r;break e}yt=i}}}var rg={getCacheForType:function(e){var t=xt(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return xt(ut).controller.signal}},ig=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Ke=null,Me=null,Fe=0,Ye=0,Ft=null,Yn=!1,tr=!1,So=!1,In=0,st=0,$n=0,Aa=0,Eo=0,Bt=0,nr=0,$r=null,jt=null,Ao=!1,es=0,wf=0,ts=1/0,ns=null,Xn=null,pt=0,Zn=null,ar=null,Dn=0,_o=0,wo=null,Rf=null,Xr=0,Ro=null;function Pt(){return(Ge&2)!==0&&Fe!==0?Fe&-Fe:V.T!==null?Oo():Pc()}function Tf(){if(Bt===0)if((Fe&536870912)===0||Pe){var e=sa;sa<<=1,(sa&3932160)===0&&(sa=262144),Bt=e}else Bt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Bt}function kt(e,t,n){(e===Ke&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Qn(e,Fe,Bt,!1)),mr(e,n),((Ge&2)===0||e!==Ke)&&(e===Ke&&((Ge&2)===0&&(Aa|=n),st===4&&Qn(e,Fe,Bt,!1)),hn(e))}function Nf(e,t,n){if((Ge&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||pr(e,t),r=a?og(e,t):No(e,t,!0),i=a;do{if(r===0){tr&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!sg(n)){r=No(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var R=e;r=$r;var M=R.current.memoizedState.isDehydrated;if(M&&(rr(R,h).flags|=256),h=No(R,h,!1),h!==2){if(So&&!M){R.errorRecoveryDisabledLanes|=i,Aa|=i,r=4;break e}i=jt,jt=r,i!==null&&(jt===null?jt=i:jt.push.apply(jt,i))}r=h}if(i=!1,r!==2)continue}}if(r===1){rr(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Qn(a,t,Bt,!Yn);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=es+300-be(),10<r)){if(Qn(a,t,Bt,!Yn),fi(a,0,!0)!==0)break e;Dn=t,a.timeoutHandle=ih(Cf.bind(null,a,n,jt,ns,Ao,t,Bt,Aa,nr,Yn,i,"Throttled",-0,0),r);break e}Cf(a,n,jt,ns,Ao,t,Bt,Aa,nr,Yn,i,null,-0,0)}}break}while(!0);hn(e)}function Cf(e,t,n,a,r,i,h,R,M,Q,le,de,J,ne){if(e.timeoutHandle=-1,de=t.subtreeFlags,de&8192||(de&16785408)===16785408){de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Sf(t,i,de);var Se=(i&62914560)===i?es-be():(i&4194048)===i?wf-be():0;if(Se=Gg(de,Se),Se!==null){Dn=i,e.cancelPendingCommit=Se(Mf.bind(null,e,t,i,n,a,r,h,R,M,le,de,null,J,ne)),Qn(e,i,h,!Q);return}}Mf(e,t,i,n,a,r,h,R,M)}function sg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!Lt(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t&=~Eo,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-rt(r),h=1<<i;a[i]=-1,r&=~h}n!==0&&Uc(e,n,t)}function as(){return(Ge&6)===0?(Zr(0),!1):!0}function To(){if(Me!==null){if(Ye===0)var e=Me.return;else e=Me,xn=pa=null,Vl(e),Xa=null,Dr=0,e=Me;for(;e!==null;)sf(e.alternate,e),e=e.return;Me=null}}function rr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Rg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,To(),Ke=e,Me=n=vn(e.current,null),Fe=t,Ye=0,Ft=null,Yn=!1,tr=pr(e,t),So=!1,nr=Bt=Eo=Aa=$n=st=0,jt=$r=null,Ao=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-rt(a),i=1<<r;t|=e[r],a&=~i}return In=t,_i(),n}function If(e,t){je=null,V.H=Fr,t===$a||t===Oi?(t=qu(),Ye=3):t===Il?(t=qu(),Ye=4):Ye=t===ro?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ft=t,Me===null&&(st=1,Yi(e,Xt(t,e.current)))}function Df(){var e=Mt.current;return e===null?!0:(Fe&4194048)===Fe?Kt===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===Kt:!1}function Of(){var e=V.H;return V.H=Fr,e===null?Fr:e}function jf(){var e=V.A;return V.A=rg,e}function rs(){st=4,Yn||(Fe&4194048)!==Fe&&Mt.current!==null||(tr=!0),($n&134217727)===0&&(Aa&134217727)===0||Ke===null||Qn(Ke,Fe,Bt,!1)}function No(e,t,n){var a=Ge;Ge|=2;var r=Of(),i=jf();(Ke!==e||Fe!==t)&&(ns=null,rr(e,t)),t=!1;var h=st;e:do try{if(Ye!==0&&Me!==null){var R=Me,M=Ft;switch(Ye){case 8:To(),h=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var Q=Ye;if(Ye=0,Ft=null,ir(e,R,M,Q),n&&tr){h=0;break e}break;default:Q=Ye,Ye=0,Ft=null,ir(e,R,M,Q)}}lg(),h=st;break}catch(le){If(e,le)}while(!0);return t&&e.shellSuspendCounter++,xn=pa=null,Ge=a,V.H=r,V.A=i,Me===null&&(Ke=null,Fe=0,_i()),h}function lg(){for(;Me!==null;)kf(Me)}function og(e,t){var n=Ge;Ge|=2;var a=Of(),r=jf();Ke!==e||Fe!==t?(ns=null,ts=be()+500,rr(e,t)):tr=pr(e,t);e:do try{if(Ye!==0&&Me!==null){t=Me;var i=Ft;t:switch(Ye){case 1:Ye=0,Ft=null,ir(e,t,i,1);break;case 2:case 9:if(Hu(i)){Ye=0,Ft=null,Lf(t);break}t=function(){Ye!==2&&Ye!==9||Ke!==e||(Ye=7),hn(e)},i.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Hu(i)?(Ye=0,Ft=null,Lf(t)):(Ye=0,Ft=null,ir(e,t,i,7));break;case 5:var h=null;switch(Me.tag){case 26:h=Me.memoizedState;case 5:case 27:var R=Me;if(h?xh(h):R.stateNode.complete){Ye=0,Ft=null;var M=R.sibling;if(M!==null)Me=M;else{var Q=R.return;Q!==null?(Me=Q,is(Q)):Me=null}break t}}Ye=0,Ft=null,ir(e,t,i,5);break;case 6:Ye=0,Ft=null,ir(e,t,i,6);break;case 8:To(),st=6;break e;default:throw Error(c(462))}}cg();break}catch(le){If(e,le)}while(!0);return xn=pa=null,V.H=a,V.A=r,Ge=n,Me!==null?0:(Ke=null,Fe=0,_i(),st)}function cg(){for(;Me!==null&&!K();)kf(Me)}function kf(e){var t=af(e.alternate,e,In);e.memoizedProps=e.pendingProps,t===null?is(e):Me=t}function Lf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Wd(n,t,t.pendingProps,t.type,void 0,Fe);break;case 11:t=Wd(n,t,t.pendingProps,t.type.render,t.ref,Fe);break;case 5:Vl(t);default:sf(n,t),t=Me=Ou(t,In),t=af(n,t,In)}e.memoizedProps=e.pendingProps,t===null?is(e):Me=t}function ir(e,t,n,a){xn=pa=null,Vl(t),Xa=null,Dr=0;var r=t.return;try{if(Wm(e,r,t,n,Fe)){st=1,Yi(e,Xt(n,e.current)),Me=null;return}}catch(i){if(r!==null)throw Me=r,i;st=1,Yi(e,Xt(n,e.current)),Me=null;return}t.flags&32768?(Pe||a===1?e=!0:tr||(Fe&536870912)!==0?e=!1:(Yn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),zf(t,e)):is(t)}function is(e){var t=e;do{if((t.flags&32768)!==0){zf(t,Yn);return}e=t.return;var n=eg(t.alternate,t,In);if(n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);st===0&&(st=5)}function zf(e,t){do{var n=tg(e.alternate,e);if(n!==null){n.flags&=32767,Me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Me=e;return}Me=e=n}while(e!==null);st=6,Me=null}function Mf(e,t,n,a,r,i,h,R,M){e.cancelPendingCommit=null;do ss();while(pt!==0);if((Ge&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=ml,Vp(e,n,i,h,R,M),e===Ke&&(Me=Ke=null,Fe=0),ar=t,Zn=e,Dn=n,_o=i,wo=r,Rf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hg(Le,function(){return Vf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null,r=H.p,H.p=2,h=Ge,Ge|=4;try{ng(e,t,n)}finally{Ge=h,H.p=r,V.T=a}}pt=1,Uf(),Ff(),Bf()}}function Uf(){if(pt===1){pt=0;var e=Zn,t=ar,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var a=H.p;H.p=2;var r=Ge;Ge|=4;try{vf(t,e);var i=Bo,h=Au(e.containerInfo),R=i.focusedElem,M=i.selectionRange;if(h!==R&&R&&R.ownerDocument&&Eu(R.ownerDocument.documentElement,R)){if(M!==null&&ul(R)){var Q=M.start,le=M.end;if(le===void 0&&(le=Q),"selectionStart"in R)R.selectionStart=Q,R.selectionEnd=Math.min(le,R.value.length);else{var de=R.ownerDocument||document,J=de&&de.defaultView||window;if(J.getSelection){var ne=J.getSelection(),Se=R.textContent.length,Te=Math.min(M.start,Se),Qe=M.end===void 0?Te:Math.min(M.end,Se);!ne.extend&&Te>Qe&&(h=Qe,Qe=Te,Te=h);var Y=Su(R,Te),B=Su(R,Qe);if(Y&&B&&(ne.rangeCount!==1||ne.anchorNode!==Y.node||ne.anchorOffset!==Y.offset||ne.focusNode!==B.node||ne.focusOffset!==B.offset)){var Z=de.createRange();Z.setStart(Y.node,Y.offset),ne.removeAllRanges(),Te>Qe?(ne.addRange(Z),ne.extend(B.node,B.offset)):(Z.setEnd(B.node,B.offset),ne.addRange(Z))}}}}for(de=[],ne=R;ne=ne.parentNode;)ne.nodeType===1&&de.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<de.length;R++){var ce=de[R];ce.element.scrollLeft=ce.left,ce.element.scrollTop=ce.top}}vs=!!Fo,Bo=Fo=null}finally{Ge=r,H.p=a,V.T=n}}e.current=t,pt=2}}function Ff(){if(pt===2){pt=0;var e=Zn,t=ar,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var a=H.p;H.p=2;var r=Ge;Ge|=4;try{hf(e,t.alternate,t)}finally{Ge=r,H.p=a,V.T=n}}pt=3}}function Bf(){if(pt===4||pt===3){pt=0,ge();var e=Zn,t=ar,n=Dn,a=Rf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,ar=Zn=null,Pf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Xn=null),qs(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=V.T,r=H.p,H.p=2,V.T=null;try{for(var i=e.onRecoverableError,h=0;h<a.length;h++){var R=a[h];i(R.value,{componentStack:R.stack})}}finally{V.T=t,H.p=r}}(Dn&3)!==0&&ss(),hn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ro?Xr++:(Xr=0,Ro=e):Xr=0,Zr(0)}}function Pf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cr(t)))}function ss(){return Uf(),Ff(),Bf(),Vf()}function Vf(){if(pt!==5)return!1;var e=Zn,t=_o;_o=0;var n=qs(Dn),a=V.T,r=H.p;try{H.p=32>n?32:n,V.T=null,n=wo,wo=null;var i=Zn,h=Dn;if(pt=0,ar=Zn=null,Dn=0,(Ge&6)!==0)throw Error(c(331));var R=Ge;if(Ge|=4,Af(i.current),xf(i,i.current,h,n),Ge=R,Zr(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(We,i)}catch{}return!0}finally{H.p=r,V.T=a,Pf(e,t)}}function Hf(e,t,n){t=Xt(n,t),t=ao(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(mr(e,2),hn(e))}function $e(e,t,n){if(e.tag===3)Hf(e,e,n);else for(;t!==null;){if(t.tag===3){Hf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Xt(n,e),n=Hd(2),a=Vn(t,n,2),a!==null&&(Gd(n,a,t,e),mr(a,2),hn(a));break}}t=t.return}}function Co(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ig;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(So=!0,r.add(n),e=ug.bind(null,e,t,n),t.then(e,e))}function ug(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(Fe&n)===n&&(st===4||st===3&&(Fe&62914560)===Fe&&300>be()-es?(Ge&2)===0&&rr(e,0):Eo|=n,nr===Fe&&(nr=0)),hn(e)}function Gf(e,t){t===0&&(t=Mc()),e=da(e,t),e!==null&&(mr(e,t),hn(e))}function dg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gf(e,n)}function fg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Gf(e,n)}function hg(e,t){return he(e,t)}var ls=null,sr=null,Io=!1,os=!1,Do=!1,Wn=0;function hn(e){e!==sr&&e.next===null&&(sr===null?ls=sr=e:sr=sr.next=e),os=!0,Io||(Io=!0,mg())}function Zr(e,t){if(!Do&&os){Do=!0;do for(var n=!1,a=ls;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var h=a.suspendedLanes,R=a.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=r&~(h&~R),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Xf(a,i))}else i=Fe,i=fi(a,a===Ke?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||pr(a,i)||(n=!0,Xf(a,i));a=a.next}while(n);Do=!1}}function pg(){qf()}function qf(){os=Io=!1;var e=0;Wn!==0&&wg()&&(e=Wn);for(var t=be(),n=null,a=ls;a!==null;){var r=a.next,i=Yf(a,t);i===0?(a.next=null,n===null?ls=r:n.next=r,r===null&&(sr=n)):(n=a,(e!==0||(i&3)!==0)&&(os=!0)),a=r}pt!==0&&pt!==5||Zr(e),Wn!==0&&(Wn=0)}function Yf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var h=31-rt(i),R=1<<h,M=r[h];M===-1?((R&n)===0||(R&a)!==0)&&(r[h]=Pp(R,t)):M<=t&&(e.expiredLanes|=R),i&=~R}if(t=Ke,n=Fe,n=fi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&pe(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&pe(a),qs(n)){case 2:case 8:n=qe;break;case 32:n=Le;break;case 268435456:n=jn;break;default:n=Le}return a=$f.bind(null,e),n=he(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&pe(a),e.callbackPriority=2,e.callbackNode=null,2}function $f(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ss()&&e.callbackNode!==n)return null;var a=Fe;return a=fi(e,e===Ke?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Nf(e,a,t),Yf(e,be()),e.callbackNode!=null&&e.callbackNode===n?$f.bind(null,e):null)}function Xf(e,t){if(ss())return null;Nf(e,t,!0)}function mg(){Tg(function(){(Ge&6)!==0?he(_e,pg):qf()})}function Oo(){if(Wn===0){var e=qa;e===0&&(e=Ra,Ra<<=1,(Ra&261888)===0&&(Ra=256)),Wn=e}return Wn}function Zf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gi(""+e)}function Qf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function gg(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=Zf((r[Nt]||null).action),h=a.submitter;h&&(t=(t=h[Nt]||null)?Zf(t.formAction):h.getAttribute("formAction"),t!==null&&(i=t,h=null));var R=new xi("action","action",null,a,r);e.push({event:R,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wn!==0){var M=h?Qf(r,h):new FormData(r);Wl(n,{pending:!0,data:M,method:r.method,action:i},null,M)}}else typeof i=="function"&&(R.preventDefault(),M=h?Qf(r,h):new FormData(r),Wl(n,{pending:!0,data:M,method:r.method,action:i},i,M))},currentTarget:r}]})}}for(var jo=0;jo<pl.length;jo++){var ko=pl[jo],yg=ko.toLowerCase(),vg=ko[0].toUpperCase()+ko.slice(1);an(yg,"on"+vg)}an(Ru,"onAnimationEnd"),an(Tu,"onAnimationIteration"),an(Nu,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(km,"onTransitionRun"),an(Lm,"onTransitionStart"),an(zm,"onTransitionCancel"),an(Cu,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),la("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),la("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),la("onBeforeInput",["compositionend","keypress","textInput","paste"]),la("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),la("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function Wf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var h=a.length-1;0<=h;h--){var R=a[h],M=R.instance,Q=R.currentTarget;if(R=R.listener,M!==i&&r.isPropagationStopped())break e;i=R,r.currentTarget=Q;try{i(r)}catch(le){Ai(le)}r.currentTarget=null,i=M}else for(h=0;h<a.length;h++){if(R=a[h],M=R.instance,Q=R.currentTarget,R=R.listener,M!==i&&r.isPropagationStopped())break e;i=R,r.currentTarget=Q;try{i(r)}catch(le){Ai(le)}r.currentTarget=null,i=M}}}}function Ue(e,t){var n=t[Ys];n===void 0&&(n=t[Ys]=new Set);var a=e+"__bubble";n.has(a)||(Kf(t,e,2,!1),n.add(a))}function Lo(e,t,n){var a=0;t&&(a|=4),Kf(n,e,a,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[cs]){e[cs]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(bg.has(n)||Lo(n,!1,e),Lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Lo("selectionchange",!1,t))}}function Kf(e,t,n,a){switch(Th(t)){case 2:var r=$g;break;case 8:r=Xg;break;default:r=Wo}n=r.bind(null,t,n,e),r=void 0,!tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Mo(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var R=a.stateNode.containerInfo;if(R===r)break;if(h===4)for(h=a.return;h!==null;){var M=h.tag;if((M===3||M===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;R!==null;){if(h=Na(R),h===null)return;if(M=h.tag,M===5||M===6||M===26||M===27){a=i=h;continue e}R=R.parentNode}}a=a.return}nu(function(){var Q=i,le=Js(n),de=[];e:{var J=Iu.get(e);if(J!==void 0){var ne=xi,Se=e;switch(e){case"keypress":if(vi(n)===0)break e;case"keydown":case"keyup":ne=fm;break;case"focusin":Se="focus",ne=il;break;case"focusout":Se="blur",ne=il;break;case"beforeblur":case"afterblur":ne=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=mm;break;case Ru:case Tu:case Nu:ne=am;break;case Cu:ne=ym;break;case"scroll":case"scrollend":ne=Kp;break;case"wheel":ne=bm;break;case"copy":case"cut":case"paste":ne=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=lu;break;case"toggle":case"beforetoggle":ne=Sm}var Te=(t&4)!==0,Qe=!Te&&(e==="scroll"||e==="scrollend"),Y=Te?J!==null?J+"Capture":null:J;Te=[];for(var B=Q,Z;B!==null;){var ce=B;if(Z=ce.stateNode,ce=ce.tag,ce!==5&&ce!==26&&ce!==27||Z===null||Y===null||(ce=vr(B,Y),ce!=null&&Te.push(Wr(B,ce,Z))),Qe)break;B=B.return}0<Te.length&&(J=new ne(J,Se,null,n,le),de.push({event:J,listeners:Te}))}}if((t&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",J&&n!==Ks&&(Se=n.relatedTarget||n.fromElement)&&(Na(Se)||Se[Ta]))break e;if((ne||J)&&(J=le.window===le?le:(J=le.ownerDocument)?J.defaultView||J.parentWindow:window,ne?(Se=n.relatedTarget||n.toElement,ne=Q,Se=Se?Na(Se):null,Se!==null&&(Qe=f(Se),Te=Se.tag,Se!==Qe||Te!==5&&Te!==27&&Te!==6)&&(Se=null)):(ne=null,Se=Q),ne!==Se)){if(Te=iu,ce="onMouseLeave",Y="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(Te=lu,ce="onPointerLeave",Y="onPointerEnter",B="pointer"),Qe=ne==null?J:yr(ne),Z=Se==null?J:yr(Se),J=new Te(ce,B+"leave",ne,n,le),J.target=Qe,J.relatedTarget=Z,ce=null,Na(le)===Q&&(Te=new Te(Y,B+"enter",Se,n,le),Te.target=Z,Te.relatedTarget=Qe,ce=Te),Qe=ce,ne&&Se)t:{for(Te=xg,Y=ne,B=Se,Z=0,ce=Y;ce;ce=Te(ce))Z++;ce=0;for(var we=B;we;we=Te(we))ce++;for(;0<Z-ce;)Y=Te(Y),Z--;for(;0<ce-Z;)B=Te(B),ce--;for(;Z--;){if(Y===B||B!==null&&Y===B.alternate){Te=Y;break t}Y=Te(Y),B=Te(B)}Te=null}else Te=null;ne!==null&&Jf(de,J,ne,Te,!1),Se!==null&&Qe!==null&&Jf(de,Qe,Se,Te,!0)}}e:{if(J=Q?yr(Q):window,ne=J.nodeName&&J.nodeName.toLowerCase(),ne==="select"||ne==="input"&&J.type==="file")var Ve=mu;else if(hu(J))if(gu)Ve=Dm;else{Ve=Cm;var Ee=Nm}else ne=J.nodeName,!ne||ne.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Q&&Ws(Q.elementType)&&(Ve=mu):Ve=Im;if(Ve&&(Ve=Ve(e,Q))){pu(de,Ve,n,le);break e}Ee&&Ee(e,J,Q),e==="focusout"&&Q&&J.type==="number"&&Q.memoizedProps.value!=null&&Qs(J,"number",J.value)}switch(Ee=Q?yr(Q):window,e){case"focusin":(hu(Ee)||Ee.contentEditable==="true")&&(Ma=Ee,dl=Q,Rr=null);break;case"focusout":Rr=dl=Ma=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,_u(de,n,le);break;case"selectionchange":if(jm)break;case"keydown":case"keyup":_u(de,n,le)}var ke;if(ll)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else za?du(e,n)&&(Be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Be="onCompositionStart");Be&&(ou&&n.locale!=="ko"&&(za||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&za&&(ke=au()):(Ln=le,nl="value"in Ln?Ln.value:Ln.textContent,za=!0)),Ee=us(Q,Be),0<Ee.length&&(Be=new su(Be,e,null,n,le),de.push({event:Be,listeners:Ee}),ke?Be.data=ke:(ke=fu(n),ke!==null&&(Be.data=ke)))),(ke=Am?_m(e,n):wm(e,n))&&(Be=us(Q,"onBeforeInput"),0<Be.length&&(Ee=new su("onBeforeInput","beforeinput",null,n,le),de.push({event:Ee,listeners:Be}),Ee.data=ke)),gg(de,e,Q,n,le)}Wf(de,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=vr(e,n),r!=null&&a.unshift(Wr(e,r,i)),r=vr(e,t),r!=null&&a.push(Wr(e,r,i))),e.tag===3)return a;e=e.return}return[]}function xg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,n,a,r){for(var i=t._reactName,h=[];n!==null&&n!==a;){var R=n,M=R.alternate,Q=R.stateNode;if(R=R.tag,M!==null&&M===a)break;R!==5&&R!==26&&R!==27||Q===null||(M=Q,r?(Q=vr(n,i),Q!=null&&h.unshift(Wr(n,Q,M))):r||(Q=vr(n,i),Q!=null&&h.push(Wr(n,Q,M)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Sg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function eh(e){return(typeof e=="string"?e:""+e).replace(Sg,`
`).replace(Eg,"")}function th(e,t){return t=eh(t),eh(e)===t}function Ze(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ja(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ja(e,""+a);break;case"className":pi(e,"class",a);break;case"tabIndex":pi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(e,n,a);break;case"style":eu(e,a,i);break;case"data":if(t!=="object"){pi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=gi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",r.name,r,null),Ze(e,t,"formEncType",r.formEncType,r,null),Ze(e,t,"formMethod",r.formMethod,r,null),Ze(e,t,"formTarget",r.formTarget,r,null)):(Ze(e,t,"encType",r.encType,r,null),Ze(e,t,"method",r.method,r,null),Ze(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=gi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=gn);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=gi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),hi(e,"popover",a);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":hi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qp.get(n)||n,hi(e,n,a))}}function Uo(e,t,n,a,r,i){switch(n){case"style":eu(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ja(e,a):(typeof a=="number"||typeof a=="bigint")&&ja(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[Nt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):hi(e,n,a)}}}function Et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,i,h,n,null)}}r&&Ze(e,t,"srcSet",n.srcSet,n,null),a&&Ze(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var R=i=h=r=null,M=null,Q=null;for(a in n)if(n.hasOwnProperty(a)){var le=n[a];if(le!=null)switch(a){case"name":r=le;break;case"type":h=le;break;case"checked":M=le;break;case"defaultChecked":Q=le;break;case"value":i=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(c(137,t));break;default:Ze(e,t,a,le,n,null)}}Qc(e,i,R,M,Q,h,r,!1);return;case"select":Ue("invalid",e),a=h=i=null;for(r in n)if(n.hasOwnProperty(r)&&(R=n[r],R!=null))switch(r){case"value":i=R;break;case"defaultValue":h=R;break;case"multiple":a=R;default:Ze(e,t,r,R,n,null)}t=i,n=h,e.multiple=!!a,t!=null?Oa(e,!!a,t,!1):n!=null&&Oa(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=r=a=null;for(h in n)if(n.hasOwnProperty(h)&&(R=n[h],R!=null))switch(h){case"value":a=R;break;case"defaultValue":r=R;break;case"children":i=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(91));break;default:Ze(e,t,h,R,n,null)}Kc(e,a,r,i);return;case"option":for(M in n)if(n.hasOwnProperty(M)&&(a=n[M],a!=null))switch(M){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ze(e,t,M,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Qr.length;a++)Ue(Qr[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in n)if(n.hasOwnProperty(Q)&&(a=n[Q],a!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,Q,a,n,null)}return;default:if(Ws(t)){for(le in n)n.hasOwnProperty(le)&&(a=n[le],a!==void 0&&Uo(e,t,le,a,n,void 0));return}}for(R in n)n.hasOwnProperty(R)&&(a=n[R],a!=null&&Ze(e,t,R,a,n,null))}function Ag(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,h=null,R=null,M=null,Q=null,le=null;for(ne in n){var de=n[ne];if(n.hasOwnProperty(ne)&&de!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":M=de;default:a.hasOwnProperty(ne)||Ze(e,t,ne,null,a,de)}}for(var J in a){var ne=a[J];if(de=n[J],a.hasOwnProperty(J)&&(ne!=null||de!=null))switch(J){case"type":i=ne;break;case"name":r=ne;break;case"checked":Q=ne;break;case"defaultChecked":le=ne;break;case"value":h=ne;break;case"defaultValue":R=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(c(137,t));break;default:ne!==de&&Ze(e,t,J,ne,a,de)}}Zs(e,h,R,M,Q,le,i,r);return;case"select":ne=h=R=J=null;for(i in n)if(M=n[i],n.hasOwnProperty(i)&&M!=null)switch(i){case"value":break;case"multiple":ne=M;default:a.hasOwnProperty(i)||Ze(e,t,i,null,a,M)}for(r in a)if(i=a[r],M=n[r],a.hasOwnProperty(r)&&(i!=null||M!=null))switch(r){case"value":J=i;break;case"defaultValue":R=i;break;case"multiple":h=i;default:i!==M&&Ze(e,t,r,i,a,M)}t=R,n=h,a=ne,J!=null?Oa(e,!!n,J,!1):!!a!=!!n&&(t!=null?Oa(e,!!n,t,!0):Oa(e,!!n,n?[]:"",!1));return;case"textarea":ne=J=null;for(R in n)if(r=n[R],n.hasOwnProperty(R)&&r!=null&&!a.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ze(e,t,R,null,a,r)}for(h in a)if(r=a[h],i=n[h],a.hasOwnProperty(h)&&(r!=null||i!=null))switch(h){case"value":J=r;break;case"defaultValue":ne=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&Ze(e,t,h,r,a,i)}Wc(e,J,ne);return;case"option":for(var Se in n)if(J=n[Se],n.hasOwnProperty(Se)&&J!=null&&!a.hasOwnProperty(Se))switch(Se){case"selected":e.selected=!1;break;default:Ze(e,t,Se,null,a,J)}for(M in a)if(J=a[M],ne=n[M],a.hasOwnProperty(M)&&J!==ne&&(J!=null||ne!=null))switch(M){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Ze(e,t,M,J,a,ne)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in n)J=n[Te],n.hasOwnProperty(Te)&&J!=null&&!a.hasOwnProperty(Te)&&Ze(e,t,Te,null,a,J);for(Q in a)if(J=a[Q],ne=n[Q],a.hasOwnProperty(Q)&&J!==ne&&(J!=null||ne!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(c(137,t));break;default:Ze(e,t,Q,J,a,ne)}return;default:if(Ws(t)){for(var Qe in n)J=n[Qe],n.hasOwnProperty(Qe)&&J!==void 0&&!a.hasOwnProperty(Qe)&&Uo(e,t,Qe,void 0,a,J);for(le in a)J=a[le],ne=n[le],!a.hasOwnProperty(le)||J===ne||J===void 0&&ne===void 0||Uo(e,t,le,J,a,ne);return}}for(var Y in n)J=n[Y],n.hasOwnProperty(Y)&&J!=null&&!a.hasOwnProperty(Y)&&Ze(e,t,Y,null,a,J);for(de in a)J=a[de],ne=n[de],!a.hasOwnProperty(de)||J===ne||J==null&&ne==null||Ze(e,t,de,J,a,ne)}function nh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _g(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],i=r.transferSize,h=r.initiatorType,R=r.duration;if(i&&R&&nh(h)){for(h=0,R=r.responseEnd,a+=1;a<n.length;a++){var M=n[a],Q=M.startTime;if(Q>R)break;var le=M.transferSize,de=M.initiatorType;le&&nh(de)&&(M=M.responseEnd,h+=le*(M<R?1:(R-Q)/(M-Q)))}if(--a,t+=8*(i+h)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fo=null,Bo=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vo=null;function wg(){var e=window.event;return e&&e.type==="popstate"?e===Vo?!1:(Vo=e,!0):(Vo=null,!1)}var ih=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(e){return sh.resolve(null).then(e).catch(Ng)}:ih;function Ng(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function lh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),ur(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Kr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kr(n);for(var i=n.firstChild;i;){var h=i.nextSibling,R=i.nodeName;i[gr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=h}}else n==="body"&&Kr(e.ownerDocument.body);n=r}while(n);ur(t)}function oh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ho(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ho(n),$s(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Cg(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[gr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Jt(e.nextSibling),e===null)break}return null}function Ig(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jt(e.nextSibling),e===null))return null;return e}function ch(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jt(e.nextSibling),e===null))return null;return e}function Go(e){return e.data==="$?"||e.data==="$~"}function qo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yo=null;function uh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Jt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function dh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function fh(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$s(e)}var en=new Map,hh=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=H.d;H.d={f:Og,r:jg,D:kg,C:Lg,L:zg,m:Mg,X:Fg,S:Ug,M:Bg};function Og(){var e=On.f(),t=as();return e||t}function jg(e){var t=Ca(e);t!==null&&t.tag===5&&t.type==="form"?Cd(t):On.r(e)}var lr=typeof document>"u"?null:document;function ph(e,t,n){var a=lr;if(a&&typeof t=="string"&&t){var r=Yt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),hh.has(r)||(hh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function kg(e){On.D(e),ph("dns-prefetch",e,null)}function Lg(e,t){On.C(e,t),ph("preconnect",e,t)}function zg(e,t,n){On.L(e,t,n);var a=lr;if(a&&e&&t){var r='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Yt(n.imageSizes)+'"]')):r+='[href="'+Yt(e)+'"]';var i=r;switch(t){case"style":i=or(e);break;case"script":i=cr(e)}en.has(i)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),en.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Jr(i))||t==="script"&&a.querySelector(ei(i))||(t=a.createElement("link"),Et(t,"link",e),gt(t),a.head.appendChild(t)))}}function Mg(e,t){On.m(e,t);var n=lr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Yt(a)+'"][href="'+Yt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=cr(e)}if(!en.has(i)&&(e=E({rel:"modulepreload",href:e},t),en.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ei(i)))return}a=n.createElement("link"),Et(a,"link",e),gt(a),n.head.appendChild(a)}}}function Ug(e,t,n){On.S(e,t,n);var a=lr;if(a&&e){var r=Ia(a).hoistableStyles,i=or(e);t=t||"default";var h=r.get(i);if(!h){var R={loading:0,preload:null};if(h=a.querySelector(Jr(i)))R.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=en.get(i))&&$o(e,n);var M=h=a.createElement("link");gt(M),Et(M,"link",e),M._p=new Promise(function(Q,le){M.onload=Q,M.onerror=le}),M.addEventListener("load",function(){R.loading|=1}),M.addEventListener("error",function(){R.loading|=2}),R.loading|=4,hs(h,t,a)}h={type:"stylesheet",instance:h,count:1,state:R},r.set(i,h)}}}function Fg(e,t){On.X(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ei(r)),i||(e=E({src:e,async:!0},t),(t=en.get(r))&&Xo(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function Bg(e,t){On.M(e,t);var n=lr;if(n&&e){var a=Ia(n).hoistableScripts,r=cr(e),i=a.get(r);i||(i=n.querySelector(ei(r)),i||(e=E({src:e,async:!0,type:"module"},t),(t=en.get(r))&&Xo(e,t),i=n.createElement("script"),gt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function mh(e,t,n,a){var r=(r=Ae.current)?fs(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=or(n.href),n=Ia(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=or(n.href);var i=Ia(r).hoistableStyles,h=i.get(e);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,h),(i=r.querySelector(Jr(e)))&&!i._p&&(h.instance=i,h.state.loading=5),en.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},en.set(e,n),i||Pg(r,e,n,h.state))),t&&a===null)throw Error(c(528,""));return h}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=cr(n),n=Ia(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function or(e){return'href="'+Yt(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function gh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Pg(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Et(t,"link",n),gt(t),e.head.appendChild(t))}function cr(e){return'[src="'+Yt(e)+'"]'}function ei(e){return"script[async]"+e}function yh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(a)return t.instance=a,gt(a),a;var r=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),gt(a),Et(a,"style",r),hs(a,n.precedence,e),t.instance=a;case"stylesheet":r=or(n.href);var i=e.querySelector(Jr(r));if(i)return t.state.loading|=4,t.instance=i,gt(i),i;a=gh(n),(r=en.get(r))&&$o(a,r),i=(e.ownerDocument||e).createElement("link"),gt(i);var h=i;return h._p=new Promise(function(R,M){h.onload=R,h.onerror=M}),Et(i,"link",a),t.state.loading|=4,hs(i,n.precedence,e),t.instance=i;case"script":return i=cr(n.src),(r=e.querySelector(ei(i)))?(t.instance=r,gt(r),r):(a=n,(r=en.get(i))&&(a=E({},n),Xo(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),gt(r),Et(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,hs(a,n.precedence,e));return t.instance}function hs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,h=0;h<a.length;h++){var R=a[h];if(R.dataset.precedence===t)i=R;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $o(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ps=null;function vh(e,t,n){if(ps===null){var a=new Map,r=ps=new Map;r.set(n,a)}else r=ps,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[gr]||i[vt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var h=i.getAttribute(t)||"";h=e+h;var R=a.get(h);R?R.push(i):a.set(h,[i])}}return a}function bh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Vg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function xh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hg(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=or(a.href),i=t.querySelector(Jr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ms.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,gt(i);return}i=t.ownerDocument||t,a=gh(a),(r=en.get(r))&&$o(a,r),i=i.createElement("link"),gt(i);var h=i;h._p=new Promise(function(R,M){h.onload=R,h.onerror=M}),Et(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ms.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Zo=0;function Gg(e,t){return e.stylesheets&&e.count===0&&ys(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&ys(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Zo===0&&(Zo=62500*_g());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ys(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Zo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function ms(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ys(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gs=null;function ys(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gs=new Map,t.forEach(qg,e),gs=null,ms.call(e))}function qg(e,t){if(!(t.state.loading&4)){var n=gs.get(e);if(n)var a=n.get(null);else{n=new Map,gs.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var h=r[i];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),a=h)}a&&n.set(null,a)}r=t.instance,h=r.getAttribute("data-precedence"),i=n.get(h)||a,i===a&&n.set(null,r),n.set(h,r),this.count++,a=ms.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ti={$$typeof:L,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function Yg(e,t,n,a,r,i,h,R,M){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.hiddenUpdates=Hs(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Sh(e,t,n,a,r,i,h,R,M,Q,le,de){return e=new Yg(e,t,n,h,M,Q,le,de,R),t=1,i===!0&&(t|=24),i=zt(3,null,null,t),e.current=i,i.stateNode=e,t=Tl(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Dl(i),e}function Eh(e){return e?(e=Ba,e):Ba}function Ah(e,t,n,a,r,i){r=Eh(r),a.context===null?a.context=r:a.pendingContext=r,a=Pn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Vn(e,a,t),n!==null&&(kt(n,e,t),jr(n,e,t))}function _h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qo(e,t){_h(e,t),(e=e.alternate)&&_h(e,t)}function wh(e){if(e.tag===13||e.tag===31){var t=da(e,67108864);t!==null&&kt(t,e,67108864),Qo(e,67108864)}}function Rh(e){if(e.tag===13||e.tag===31){var t=Pt();t=Gs(t);var n=da(e,t);n!==null&&kt(n,e,t),Qo(e,t)}}var vs=!0;function $g(e,t,n,a){var r=V.T;V.T=null;var i=H.p;try{H.p=2,Wo(e,t,n,a)}finally{H.p=i,V.T=r}}function Xg(e,t,n,a){var r=V.T;V.T=null;var i=H.p;try{H.p=8,Wo(e,t,n,a)}finally{H.p=i,V.T=r}}function Wo(e,t,n,a){if(vs){var r=Ko(a);if(r===null)Mo(e,t,a,bs,n),Nh(e,a);else if(Qg(r,e,t,n,a))a.stopPropagation();else if(Nh(e,a),t&4&&-1<Zg.indexOf(e)){for(;r!==null;){var i=Ca(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var h=Gt(i.pendingLanes);if(h!==0){var R=i;for(R.pendingLanes|=2,R.entangledLanes|=2;h;){var M=1<<31-rt(h);R.entanglements[1]|=M,h&=~M}hn(i),(Ge&6)===0&&(ts=be()+500,Zr(0))}}break;case 31:case 13:R=da(i,2),R!==null&&kt(R,i,2),as(),Qo(i,2)}if(i=Ko(a),i===null&&Mo(e,t,a,bs,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else Mo(e,t,a,null,n)}}function Ko(e){return e=Js(e),Jo(e)}var bs=null;function Jo(e){if(bs=null,e=Na(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bs=e,null}function Th(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case _e:return 2;case qe:return 8;case Le:case Tt:return 32;case jn:return 268435456;default:return 32}default:return 32}}var ec=!1,Jn=null,ea=null,ta=null,ni=new Map,ai=new Map,na=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nh(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":ea=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function ri(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ca(t),t!==null&&wh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Qg(e,t,n,a,r){switch(t){case"focusin":return Jn=ri(Jn,e,t,n,a,r),!0;case"dragenter":return ea=ri(ea,e,t,n,a,r),!0;case"mouseover":return ta=ri(ta,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return ni.set(i,ri(ni.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,ai.set(i,ri(ai.get(i)||null,e,t,n,a,r)),!0}return!1}function Ch(e){var t=Na(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Vc(e.priority,function(){Rh(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Vc(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ko(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ks=a,n.target.dispatchEvent(a),Ks=null}else return t=Ca(n),t!==null&&wh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ih(e,t,n){xs(e)&&n.delete(t)}function Wg(){ec=!1,Jn!==null&&xs(Jn)&&(Jn=null),ea!==null&&xs(ea)&&(ea=null),ta!==null&&xs(ta)&&(ta=null),ni.forEach(Ih),ai.forEach(Ih)}function Ss(e,t){e.blockedOn===t&&(e.blockedOn=null,ec||(ec=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Wg)))}var Es=null;function Dh(e){Es!==e&&(Es=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Es===e&&(Es=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Jo(a||n)===null)continue;break}var i=Ca(n);i!==null&&(e.splice(t,3),t-=3,Wl(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function ur(e){function t(M){return Ss(M,e)}Jn!==null&&Ss(Jn,e),ea!==null&&Ss(ea,e),ta!==null&&Ss(ta,e),ni.forEach(t),ai.forEach(t);for(var n=0;n<na.length;n++){var a=na[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)Ch(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],h=r[Nt]||null;if(typeof i=="function")h||Dh(n);else if(h){var R=null;if(i&&i.hasAttribute("formAction")){if(r=i,h=i[Nt]||null)R=h.formAction;else if(Jo(r)!==null)continue}else R=h.action;typeof R=="function"?n[a+1]=R:(n.splice(a,3),a-=3),Dh(n)}}}function Oh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(h){return r=h})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function tc(e){this._internalRoot=e}As.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Pt();Ah(n,a,e,t,null,null)},As.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ah(e.current,2,null,e,null,null),as(),t[Ta]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&Ch(e)}};var jh=o.version;if(jh!=="19.2.1")throw Error(c(527,jh,"19.2.1"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=d(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Kg={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_s.isDisabled&&_s.supportsFiber)try{We=_s.inject(Kg),mt=_s}catch{}}return si.createRoot=function(e,t){if(!p(e))throw Error(c(299));var n=!1,a="",r=Fd,i=Bd,h=Pd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=Sh(e,1,!1,null,null,n,a,null,r,i,h,Oh),e[Ta]=t.current,zo(e),new tc(t)},si.hydrateRoot=function(e,t,n){if(!p(e))throw Error(c(299));var a=!1,r="",i=Fd,h=Bd,R=Pd,M=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(R=n.onRecoverableError),n.formState!==void 0&&(M=n.formState)),t=Sh(e,1,!0,t,n??null,a,r,M,i,h,R,Oh),t.context=Eh(null),n=t.current,a=Pt(),a=Gs(a),r=Pn(a),r.callback=null,Vn(n,r,a),n=a,t.current.lanes=n,mr(t,n),hn(t),e[Ta]=t.current,zo(e),new As(t)},si.version="19.2.1",si}var Hh;function c0(){if(Hh)return rc.exports;Hh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),rc.exports=o0(),rc.exports}var u0=c0();const d0=Tc(u0);var me=(u=>(u.SETUP="ICISsetup",u.BUILDER="ICISbuilder",u.REVIEWER="ICISreviewer",u.SUPERVISOR="ICISsupervisor",u.REVISER="ICISreviser",u.FINALIZE="ICISfinalize",u))(me||{}),Ce=(u=>(u.PENDING="pending",u.ACTIVE="active",u.COMPLETED="completed",u.ERROR="error",u.SKIPPED="skipped",u))(Ce||{}),dr=(u=>(u.SIMULATION="Simulation & Computational Modeling",u.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",u.SECONDARY_DATA="Secondary data analysis",u.EXPERIMENTAL="Laboratory & field experiments",u.SURVEY="Survey research",u))(dr||{}),ze=(u=>(u.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",u.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",u.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",u.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",u.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",u.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",u.STEP5_EXECUTION="Step 5: Experiment Execution",u.STEP6_VISUALIZATION="Step 6: Results Visualization",u.STEP7_ANALYSIS="Step 7: Results Analysis",u.STEP8_PAPER_WRITING="Step 8: Paper Writing",u.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",u))(ze||{});function f0(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const Gh={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:f0(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]},rp="/icis",h0={[me.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText"},[me.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer"},[me.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search"},[me.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck"},[me.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3"},[me.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send"}},ip={[ze.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[ze.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[ze.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[ze.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[ze.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[ze.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[ze.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[ze.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[ze.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[ze.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[ze.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};dr.SIMULATION+"",dr.ANALYTICAL+"",dr.SECONDARY_DATA+"",dr.EXPERIMENTAL+"",dr.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m0=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,l,c)=>c?c.toUpperCase():l.toLowerCase()),qh=u=>{const o=m0(u);return o.charAt(0).toUpperCase()+o.slice(1)},sp=(...u)=>u.filter((o,l,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===l).join(" ").trim(),g0=u=>{for(const o in u)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=xe.forwardRef(({color:u="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:p="",children:f,iconNode:m,...g},y)=>xe.createElement("svg",{ref:y,...y0,width:o,height:o,stroke:u,strokeWidth:c?Number(l)*24/Number(o):l,className:sp("lucide",p),...!f&&!g0(g)&&{"aria-hidden":"true"},...g},[...m.map(([d,_])=>xe.createElement(d,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(u,o)=>{const l=xe.forwardRef(({className:c,...p},f)=>xe.createElement(v0,{ref:f,iconNode:o,className:sp(`lucide-${p0(qh(u))}`,`lucide-${u}`,c),...p}));return l.displayName=qh(u),l};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],x0=Oe("activity",b0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],E0=Oe("archive",S0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],_0=Oe("arrow-left",A0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],hc=Oe("chart-column",w0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],on=Oe("check",R0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],pc=Oe("chevron-down",T0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],lp=Oe("chevron-right",N0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ds=Oe("circle-alert",C0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],D0=Oe("circle-check-big",I0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mc=Oe("circle-check",O0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Yh=Oe("circle-play",j0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],op=Oe("circle-stop",k0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$h=Oe("circle",L0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],M0=Oe("copy",z0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Os=Oe("download",U0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],cp=Oe("ellipsis-vertical",F0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],P0=Oe("external-link",B0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gc=Oe("eye",V0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],G0=Oe("fast-forward",H0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],zs=Oe("file-text",q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],$0=Oe("folder-plus",Y0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],Z0=Oe("hammer",X0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],W0=Oe("link",Q0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Xh=Oe("loader-circle",K0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],ey=Oe("loader",J0);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ny=Oe("lock",ty);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M5 12h14",key:"1ays0h"}]],ry=Oe("minus",ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],sy=Oe("pen-line",iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yc=Oe("play",ly);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],tn=Oe("refresh-cw",oy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ns=Oe("rotate-ccw",cy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],dy=Oe("save",uy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],up=Oe("search",fy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Cc=Oe("send",hy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Zh=Oe("skip-forward",py);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],gy=Oe("trash-2",my);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],vy=Oe("trending-down",yy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],dp=Oe("trending-up",by);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],vc=Oe("triangle-alert",xy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],fp=Oe("upload",Sy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ay=Oe("user-check",Ey);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],wy=Oe("user",_y);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],hp=Oe("users",Ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ny=Oe("x",Ty),Cy=({currentStage:u,currentBuilderStep:o,stagesState:l,isPartialPaper:c=!1,currentRound:p=1,isProcessing:f=!1,onStageClick:m,onStageAction:g,onNewCase:y,onNewInterview:d,onPaperToInterview:_,onResearchAdmin:E,paperMode:T="draft",onPaperModeChange:b})=>{const[N,S]=xe.useState(null),A=xe.useRef(null);xe.useEffect(()=>{const U=re=>{A.current&&!A.current.contains(re.target)&&S(null)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const w=(U,re)=>{const ee=[];switch(re){case Ce.ACTIVE:ee.push({action:"abort",label:"Abort",icon:s.jsx(op,{size:14})});break;case Ce.COMPLETED:ee.push({action:"restart",label:"Restart",icon:s.jsx(Ns,{size:14})});break;case Ce.ERROR:ee.push({action:"restart",label:"Retry",icon:s.jsx(Ns,{size:14})});break;case Ce.PENDING:const D=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],W=D.indexOf(U),x=W>0?D[W-1]:null,X=!x||l[x]===Ce.COMPLETED;ee.push({action:"start",label:"Start",icon:s.jsx(yc,{size:14}),disabled:!X||f}),U!==me.SETUP&&U!==me.FINALIZE&&ee.push({action:"skip",label:"Skip",icon:s.jsx(G0,{size:14}),disabled:f});break;case Ce.SKIPPED:ee.push({action:"restart",label:"Unskip & Run",icon:s.jsx(Ns,{size:14})});break}return ee},I=[me.SETUP,me.BUILDER,me.REVIEWER,me.SUPERVISOR,me.REVISER,me.FINALIZE],L={[me.SETUP]:s.jsx(zs,{size:16}),[me.BUILDER]:s.jsx(Z0,{size:16}),[me.REVIEWER]:s.jsx(up,{size:16}),[me.SUPERVISOR]:s.jsx(Ay,{size:16}),[me.REVISER]:s.jsx(sy,{size:16}),[me.FINALIZE]:s.jsx(Cc,{size:16})},F=U=>{switch(U){case Ce.COMPLETED:return s.jsx(mc,{size:16,className:"text-emerald-500"});case Ce.ACTIVE:return s.jsx(Yh,{size:16,className:"text-red-500 animate-pulse"});case Ce.ERROR:return s.jsx(Ds,{size:16,className:"text-red-500"});case Ce.SKIPPED:return s.jsx(Zh,{size:16,className:"text-slate-400"});default:return s.jsx($h,{size:16,className:"text-slate-500"})}},j=[ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION],$=U=>c?[ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS].includes(U):!1,P=U=>{if($(U))return"skipped";const re=j.indexOf(U),ee=o?j.indexOf(o):-1;return U===o?"active":ee>re?"completed":"pending"},G=u===me.BUILDER||l[me.BUILDER]===Ce.ACTIVE;return s.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[s.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[s.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"ICIScopilot",s.jsx("span",{className:"text-emerald-500",children:"1"})]}),s.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Automated Science Discovery"})]}),p>1&&s.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),s.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",p]})]})}),c&&s.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:s.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[s.jsx(Ds,{size:12}),s.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),s.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[s.jsx("button",{onClick:()=>b==null?void 0:b("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${T==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),s.jsx("button",{onClick:()=>b==null?void 0:b("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${T==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),d&&s.jsx("button",{onClick:d,className:"w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded transition-colors",children:"Voice Interview"}),_&&s.jsx("button",{onClick:_,className:"w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded transition-colors",children:"Paper to Interview"}),y&&s.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&y()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),E&&s.jsxs("button",{onClick:E,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[s.jsx(hp,{size:16}),"Research Admin"]})]}),s.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:I.map(U=>{const re=l[U],ee=re===Ce.ACTIVE,D=re===Ce.COMPLETED,W=re===Ce.SKIPPED,x=u===U,X=h0[U],V=w(U,re);return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${ee?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":D?"border-emerald-500/50 bg-slate-900/50":W?"border-slate-700 bg-slate-900/30 opacity-60":x?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>m(U),children:[s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`${ee?"text-red-400":D?"text-emerald-400":"text-slate-400"}`,children:L[U]}),s.jsx("span",{className:`font-medium text-sm ${ee||x?"text-white":""}`,children:X.label})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[U===me.BUILDER&&(G?s.jsx(pc,{size:14}):s.jsx(lp,{size:14})),F(re),g&&V.length>0&&s.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:H=>{H.stopPropagation(),S(N===U?null:U)},children:s.jsx(cp,{size:14,className:"text-slate-400"})})]})]}),s.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:X.description}),X.promptFile&&s.jsx("div",{className:"mt-2 pl-6",children:s.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:X.promptFile})})]}),N===U&&g&&s.jsx("div",{ref:A,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:V.map(({action:H,label:fe,icon:te,disabled:ye})=>s.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${ye?"text-slate-600 cursor-not-allowed":H==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:C=>{C.stopPropagation(),ye||(g(U,H),S(null))},disabled:ye,children:[te,fe]},H))}),U===me.BUILDER&&G&&s.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:j.map(H=>{const fe=ip[H],te=P(H);return s.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${te==="active"?"bg-red-900/30 text-red-300":te==="completed"?"text-emerald-400":te==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[te==="active"&&s.jsx(Yh,{size:12,className:"animate-pulse"}),te==="completed"&&s.jsx(mc,{size:12}),te==="skipped"&&s.jsx(Zh,{size:12}),te==="pending"&&s.jsx($h,{size:12}),s.jsxs("span",{children:[fe.label,": ",fe.description]})]},H)})})]},U)})}),s.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:s.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Directory:"}),s.jsx("span",{className:"text-slate-400",children:rp})]}),s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{children:"Paper Version:"}),s.jsxs("span",{className:"text-slate-400",children:["v",p]})]})]})})]})},oi="icis_files_";class Cs extends Error{constructor(o,l,c){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.name="StorageError"}}function pp(){try{const u="__storage_test__";return localStorage.setItem(u,u),localStorage.removeItem(u),!0}catch{return!1}}function hr(u,o){var c;if(!pp())throw new Cs("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const l=oi+u.replace(/\\/g,"/");try{localStorage.setItem(l,o),console.log(`File written: ${u}`)}catch(p){const f=p;throw f.name==="QuotaExceededError"||(c=f.message)!=null&&c.includes("quota")?new Cs("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",f.message):new Cs("WRITE_ERROR",`Failed to save file: ${u}`,f.message)}}function Ms(u){if(!pp())return console.warn("localStorage unavailable, returning null for read"),null;const o=oi+u.replace(/\\/g,"/");try{return localStorage.getItem(o)}catch(l){const c=l;throw console.error(`Error reading file ${u}:`,c),new Cs("READ_ERROR",`Failed to read file: ${u}`,c.message)}}function Iy(u){const o=[],l=new RegExp(u.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let c=0;c<localStorage.length;c++){const p=localStorage.key(c);if(p&&p.startsWith(oi)){const f=p.substring(oi.length);l.test(f)&&o.push(f)}}return o.sort()}function mp(u){const o=`icis/Data/oversight_v${u.version}.txt`,l=Dy(u);return hr(o,l),hr(o+".json",JSON.stringify(u,null,2)),o}function Dy(u){const o=[];o.push(`ID=${u.paperId}`),o.push(`Version: ${u.version}`),o.push(`Timestamp: ${u.timestamp}`),o.push(""),o.push("================================================================================"),o.push("                     OVERSIGHT DASHBOARD"),o.push("================================================================================"),o.push(""),o.push("TABLE 1 - Review Scores Progression:"),o.push("------------------------------------------------------------------------"),o.push("| Criteria              | Score | Comment                              |"),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| Novelty               | ${u.reviewScores.novelty}     | ${u.reviewComments.novelty.substring(0,36).padEnd(36)} |`),o.push(`| Significance          | ${u.reviewScores.significance}     | ${u.reviewComments.significance.substring(0,36).padEnd(36)} |`),o.push(`| Methodological Rigor  | ${u.reviewScores.methodologicalRigor}     | ${u.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),o.push(`| Clarity               | ${u.reviewScores.clarity}     | ${u.reviewComments.clarity.substring(0,36).padEnd(36)} |`),o.push(`| Relevance             | ${u.reviewScores.relevance}     | ${u.reviewComments.relevance.substring(0,36).padEnd(36)} |`),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| AVERAGE               | ${u.averageScore.toFixed(1)}   |                                      |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 2 - Error Counts:"),o.push("------------------------------------------------------------------------"),o.push("| Category        | Count | Details                                  |"),o.push("|-----------------|-------|------------------------------------------|");const l=u.errorDetails.majorErrors.length>0?u.errorDetails.majorErrors[0].substring(0,40):"None",c=u.errorDetails.minorErrors.length>0?u.errorDetails.minorErrors[0].substring(0,40):"None";if(o.push(`| Major Errors    | ${String(u.errorCounts.majorErrors).padStart(5)} | ${l.padEnd(40)} |`),o.push(`| Minor Errors    | ${String(u.errorCounts.minorErrors).padStart(5)} | ${c.padEnd(40)} |`),o.push("|-----------------|-------|------------------------------------------|"),o.push(`| TOTAL           | ${String(u.errorCounts.majorErrors+u.errorCounts.minorErrors).padStart(5)} |                                          |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),o.push("------------------------------------------------------------------------"),o.push("| Dimension       | Score | Rationale                               |"),o.push("|-----------------|-------|-----------------------------------------|"),o.push(`| Reliability     | ${u.trustworthiness.reliability}     | ${u.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),o.push(`| Benevolence     | ${u.trustworthiness.benevolence}     | ${u.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),o.push(`| Goal Alignment  | ${u.trustworthiness.goalAlignment}     | ${u.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("CRITICAL ALERTS:"),o.push("------------------------------------------------------------------------"),u.criticalAlerts.length===0)o.push("None - paper is progressing well");else for(const p of u.criticalAlerts)o.push(`CRITICAL ALERT ${p.number}: ${p.title} (BLOCKING ISSUE)`),o.push(`  Status: ${p.status}`),o.push(`  Impact: ${p.impact}`),o.push(`  Details: ${p.details}`),o.push(`  Action Required: ${p.actionRequired}`),o.push(`  Consequence if Unfixed: ${p.consequence}`),o.push("");return o.push("------------------------------------------------------------------------"),o.push(""),o.push("================================================================================"),o.join(`
`)}function Ic(u){const o=`icis/Data/feedback_v${u.version}.txt`,l=[];if(l.push(`ID=${u.paperId}`),l.push(`Version: ${u.version}`),l.push(`Timestamp: ${u.timestamp}`),l.push(""),l.push("================================================================================"),l.push("                     CONSTRUCTIVE FEEDBACK"),l.push("================================================================================"),l.push(""),l.push("## Research Question and Contribution"),l.push(u.researchQuestion),l.push(""),l.push("## Method"),l.push(u.method),l.push(""),l.push("## Potential Impact"),l.push(u.potentialImpact),l.push(""),l.push("## Writing Quality"),l.push(u.writing),l.push(""),l.push("## Major Concerns"),u.majorConcerns.forEach((p,f)=>{l.push(`${f+1}. ${p}`)}),l.push(""),l.push("## Minor Corrections"),u.minorCorrections.forEach((p,f)=>{l.push(`${f+1}. ${p}`)}),l.push(""),l.push("## Overall Assessment"),l.push(u.overallAssessment),l.push(""),u.supervisorDirectives&&u.supervisorDirectives.length>0){l.push("================================================================================"),l.push("                     SUPERVISOR DIRECTIVES"),l.push("================================================================================");for(const p of u.supervisorDirectives)l.push(""),l.push(`Cycle ${p.cycle} - ${p.timestamp}`),l.push("------------------------------------------------------------------------"),l.push(p.directives)}l.push(""),l.push("================================================================================");const c=l.join(`
`);return hr(o,c),hr(o+".json",JSON.stringify(u,null,2)),o}function Is(u){const o=`icis/Data/oversight_v${u}.txt.json`,l=Ms(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse oversight JSON:",c)}return null}function li(u){const o=`icis/Data/feedback_v${u}.txt.json`,l=Ms(o);if(l)try{return JSON.parse(l)}catch(c){console.error("Failed to parse feedback JSON:",c)}return null}function Dc(){const u=Iy("icis/Data/oversight_v.*\\.txt\\.json"),o=[];for(const l of u){const c=Ms(l);if(c)try{o.push(JSON.parse(c))}catch(p){console.error("Failed to parse oversight file:",l,p)}}return o.sort((l,c)=>l.version-c.version)}function Qh(u,o,l){const c=li(u);c&&(c.supervisorDirectives||(c.supervisorDirectives=[]),c.supervisorDirectives.push({cycle:o,directives:l,timestamp:new Date().toISOString()}),Ic(c))}function Wh(u,o,l){const c="icis/Data/supervisor_decision.txt",p=[];return p.push(`Decision: ${u}`),p.push(`Cycle: ${o}`),p.push(`Timestamp: ${new Date().toISOString()}`),hr(c,p.join(`
`)),c}function Oy(){const u=[];for(let o=0;o<localStorage.length;o++){const l=localStorage.key(o);l&&l.startsWith(oi)&&u.push(l)}u.forEach(o=>localStorage.removeItem(o)),console.log(`Cleared ${u.length} files`)}function Kh(u,o,l="icis_paper"){const c=`icis/Paper/${l}_v${u}.tex`;return hr(c,o),console.log(`Paper saved: ${c}`),c}function ra(u,o="icis_paper"){const l=`icis/Paper/${o}_v${u}.tex`;return Ms(l)}function jy(u,o="icis_paper"){const l=ra(u,o);if(!l){console.error(`Paper version ${u} not found`);return}const c=`${o}_v${u}.tex`,p=new Blob([l],{type:"text/plain;charset=utf-8"}),f=URL.createObjectURL(p),m=document.createElement("a");m.href=f,m.download=c,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(f),console.log(`Downloaded: ${c}`)}const ci=({logs:u,height:o="h-64"})=>{const l=xe.useRef(null);return xe.useEffect(()=>{var c;(c=l.current)==null||c.scrollIntoView({behavior:"smooth"})},[u]),s.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${o} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[u.length===0?s.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):u.map((c,p)=>s.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:c},p)),s.jsx("div",{ref:l})]})},ky=({currentStep:u})=>{if(!u)return null;const o=ip[u];return s.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:s.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[s.jsx(tn,{size:16,className:"animate-spin"}),s.jsx("span",{className:"font-medium",children:o.label}),s.jsxs("span",{className:"text-indigo-500",children:["- ",o.description]})]})})},Oc=({stageName:u,isProcessing:o,canAbort:l,canRestart:c,onAbort:p,onRestart:f})=>{const[m,g]=xe.useState(null),y=()=>{o&&g("abort")},d=()=>{g("restart")},_=()=>{m==="abort"?p():m==="restart"&&f(),g(null)};return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex gap-2",children:[l&&o&&s.jsxs("button",{onClick:y,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[s.jsx(op,{size:14}),"Abort"]}),c&&!o&&s.jsxs("button",{onClick:d,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[s.jsx(Ns,{size:14}),"Restart"]})]}),m&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:s.jsx(vc,{className:"text-amber-600",size:24})}),s.jsx("h3",{className:"text-lg font-bold text-slate-800",children:m==="abort"?"Abort Stage?":"Restart Stage?"})]}),s.jsx("p",{className:"text-slate-600 mb-6",children:m==="abort"?s.jsxs(s.Fragment,{children:["Are you sure you want to abort the ",s.jsx("strong",{children:u})," stage? Any progress will be lost and you may need to restart the stage."]}):s.jsxs(s.Fragment,{children:["Are you sure you want to restart the ",s.jsx("strong",{children:u})," stage? This will reset the stage and you'll need to run it again."]})}),s.jsxs("div",{className:"flex gap-3 justify-end",children:[s.jsx("button",{onClick:()=>g(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),s.jsx("button",{onClick:_,className:`px-4 py-2 text-white rounded-lg transition-colors ${m==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:m==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},oc=({label:u,accept:o=".txt",multiple:l=!1,required:c=!1,file:p,onFileSelect:f})=>{const m=xe.useRef(null),g=()=>{var _;(_=m.current)==null||_.click()},y=_=>{var T;const E=((T=_.target.files)==null?void 0:T[0])||null;f(E)},d=_=>{_.stopPropagation(),f(null),m.current&&(m.current.value="")};return s.jsxs("div",{onClick:g,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${p?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(fp,{size:16,className:p?"text-emerald-600":"text-slate-400"}),s.jsxs("span",{className:"text-sm",children:[p?p.name:u,c&&!p&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),p?s.jsx("button",{onClick:d,className:"p-1 hover:bg-emerald-200 rounded",children:s.jsx(Ny,{size:16,className:"text-emerald-600"})}):s.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),s.jsx("input",{ref:m,type:"file",accept:o,multiple:l,onChange:y,className:"hidden"})]})},Ly=({logs:u,stageStatus:o,isProcessing:l,uploadedFiles:c,onFileChange:p,onAction:f,detectionStatus:m,onRefreshDetection:g,hasExistingCase:y=!1})=>{const[d,_]=xe.useState(!1),E=c.template&&c.interview,T=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(_(!0),f("NEW_CASE"),setTimeout(()=>_(!1),2e3))};return s.jsxs("div",{className:"space-y-6 max-w-2xl mx-auto mt-10",children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(zs,{className:"text-indigo-600"}),"Setup & File Selection"]}),y&&s.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(E0,{className:"text-blue-600",size:24}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),s.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),s.jsx("button",{onClick:T,disabled:d,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:d?s.jsxs(s.Fragment,{children:[s.jsx(tn,{className:"animate-spin",size:18}),"Backing up..."]}):s.jsxs(s.Fragment,{children:[s.jsx($0,{size:18}),"New Project"]})})]})}),m&&s.jsxs("div",{className:`p-4 rounded-lg border ${m.loading?"bg-blue-50 border-blue-200":m.detected.interview?"bg-green-50 border-green-200":"bg-amber-50 border-amber-200"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[m.loading?s.jsxs(s.Fragment,{children:[s.jsx(ey,{className:"animate-spin text-blue-600",size:18}),s.jsx("span",{className:"text-blue-800 font-medium",children:"Detecting files in Data folder..."})]}):m.detected.interview?s.jsxs(s.Fragment,{children:[s.jsx(D0,{className:"text-green-600",size:18}),s.jsx("span",{className:"text-green-800 font-medium",children:"Files auto-detected!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ds,{className:"text-amber-600",size:18}),s.jsx("span",{className:"text-amber-800 font-medium",children:"No files detected - upload manually"})]}),g&&!m.loading&&s.jsxs("button",{onClick:g,className:"ml-auto text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1",children:[s.jsx(tn,{size:14}),"Refresh"]})]}),!m.loading&&m.detected.interview&&s.jsxs("div",{className:"mt-3 space-y-1 text-sm",children:[s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Interview:"})," ",m.detected.interview.filename]}),m.detected.participantId&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Participant ID:"})," ",m.detected.participantId]}),m.detected.template&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Template:"})," ",m.detected.template.filename]}),m.detected.dataFile&&s.jsxs("p",{className:"text-green-700",children:[s.jsx("strong",{children:"Data File:"})," ",m.detected.dataFile.filename]})]})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:m!=null&&m.detected.interview?"Detected Files":"Select Your Files"}),s.jsx("p",{className:"text-sm text-slate-500",children:m!=null&&m.detected.interview?"Files were automatically loaded from the Data folder. You can still upload different files if needed.":"Upload the required files to begin the paper generation process."}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(oc,{label:"icisTemplate.txt (Required)",accept:".txt",required:!0,file:c.template,onFileSelect:b=>p("template",b)}),s.jsx(oc,{label:"Interview transcript (Required)",accept:".txt",required:!0,file:c.interview,onFileSelect:b=>p("interview",b)}),s.jsx(oc,{label:"Data file (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:c.dataFile,onFileSelect:b=>p("dataFile",b)})]}),c.participantId&&s.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg",children:s.jsxs("p",{className:"text-sm text-indigo-800",children:[s.jsx("strong",{children:"Participant ID:"})," ",c.participantId]})}),s.jsx(ci,{logs:u,height:"h-32"}),s.jsx("div",{className:"pt-4 border-t border-slate-100 flex justify-end gap-3",children:s.jsxs("button",{onClick:()=>f("START_SETUP"),disabled:l||!E,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[l?s.jsx(tn,{className:"animate-spin",size:18}):s.jsx(yc,{size:18}),"Verify Files"]})}),!E&&!(m!=null&&m.loading)&&s.jsx("p",{className:"text-xs text-amber-600 text-center",children:"Please upload the required files (template and interview) to proceed."})]}),o===Ce.COMPLETED&&s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4",children:[s.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),s.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),s.jsxs("button",{onClick:()=>f("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(yc,{size:18}),"Start Building Paper"]})]}),s.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3",children:[s.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>f("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),s.jsx("button",{onClick:()=>f("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})},zy=({logs:u,isProcessing:o,isPartialPaper:l,currentBuilderStep:c,paperContent:p,onAbort:f,onRestart:m})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Building Research Paper",l&&s.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),s.jsx(Oc,{stageName:"Builder",isProcessing:o,canAbort:!0,canRestart:!o&&!!p,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(ky,{currentStep:c}),s.jsx(ci,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:p?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:p}):s.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),My=({allOversight:u,compact:o=!1})=>{if(u.length===0)return null;const l=(E,T)=>T>E?"up":T<E?"down":"same",c=({trend:E,size:T=14})=>E==="up"?s.jsx(dp,{size:T,className:"text-emerald-500"}):E==="down"?s.jsx(vy,{size:T,className:"text-red-500"}):s.jsx(ry,{size:T,className:"text-slate-400"}),p=(E,T=4)=>E>=T?"text-emerald-600":E>=T-1?"text-amber-600":"text-red-600",f=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],m=u[0],g=u[u.length-1],y=u.length>1,d=y?((g.averageScore-m.averageScore)/m.averageScore*100).toFixed(1):"0",_=y?Math.round((1-(g.errorCounts.majorErrors+g.errorCounts.minorErrors)/Math.max(1,m.errorCounts.majorErrors+m.errorCounts.minorErrors))*100):0;return o?s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(hc,{size:18,className:"text-indigo-600"}),s.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),y&&s.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(d)>0?"bg-emerald-100 text-emerald-700":parseFloat(d)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(d)>0?"+":"",d,"% overall"]})]}),s.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:f.map(({key:E,label:T})=>{const b=m.reviewScores[E]||0,N=g.reviewScores[E]||0,S=l(b,N);return s.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[s.jsx("div",{className:"text-slate-500 truncate mb-1",children:T}),s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx("span",{className:`font-bold ${p(N)}`,children:N}),y&&s.jsx(c,{trend:S,size:12})]}),y&&b!==N&&s.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",b]})]},E)})}),s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Average:"}),s.jsx("span",{className:`font-bold ${p(g.averageScore)}`,children:g.averageScore.toFixed(1)}),y&&s.jsxs(s.Fragment,{children:[s.jsx(c,{trend:l(m.averageScore,g.averageScore)}),s.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",m.averageScore.toFixed(1),")"]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-slate-500",children:"Errors:"}),s.jsx("span",{className:`font-bold ${g.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:g.errorCounts.majorErrors+g.errorCounts.minorErrors}),y&&_!==0&&s.jsxs("span",{className:`text-xs ${_>0?"text-emerald-600":"text-red-600"}`,children:["(",_>0?"-":"+",Math.abs(_),"%)"]})]})]}),y&&s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[s.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",u.length," rounds):"]}),s.jsx("div",{className:"flex gap-1",children:u.map((E,T)=>s.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${T===u.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.averageScore.toFixed(1)]},T))})]})]}):s.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(hc,{size:20,className:"text-indigo-600"}),s.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),y&&s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(d)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(d)>0?"+":"",d,"% score change"]}),s.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${_>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[_>0?"-":"+",Math.abs(_),"% errors"]})]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-200",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),u.map((E,T)=>s.jsxs("th",{className:`text-center p-2 ${T===u.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",E.version]},T)),y&&s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),s.jsxs("tbody",{children:[f.map(({key:E,label:T})=>{const b=u.map(S=>S.reviewScores[E]||0),N=y?l(b[0],b[b.length-1]):"same";return s.jsxs("tr",{className:"border-b border-slate-100",children:[s.jsx("td",{className:"p-2 font-medium",children:T}),b.map((S,A)=>s.jsx("td",{className:`text-center p-2 ${A===b.length-1?"bg-indigo-50/50":""} ${p(S)}`,children:S},A)),y&&s.jsx("td",{className:"text-center p-2",children:s.jsxs("div",{className:"flex items-center justify-center gap-1",children:[s.jsx(c,{trend:N}),N==="up"&&s.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",b[b.length-1]-b[0]]}),N==="down"&&s.jsx("span",{className:"text-red-600 text-xs",children:b[b.length-1]-b[0]})]})})]},E)}),s.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"Average"}),u.map((E,T)=>s.jsx("td",{className:`text-center p-2 ${T===u.length-1?"bg-indigo-100":""} ${p(E.averageScore)}`,children:E.averageScore.toFixed(1)},T)),y&&s.jsx("td",{className:"text-center p-2",children:s.jsx("div",{className:"flex items-center justify-center gap-1",children:s.jsx(c,{trend:l(m.averageScore,g.averageScore)})})})]})]})]})}),s.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[s.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((E,T)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${T===u.length-1?E.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.errorCounts.majorErrors]},T))})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),s.jsx("div",{className:"flex items-center gap-2",children:u.map((E,T)=>s.jsxs("span",{className:`px-2 py-1 rounded text-sm ${T===u.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",E.version,": ",E.errorCounts.minorErrors]},T))})]})]})]})]})},nn="http://localhost:3001/api";let ct=null;async function pn(){try{const u=new AbortController,o=setTimeout(()=>u.abort(),1e3),l=await fetch(`${nn}/health`,{signal:u.signal});return clearTimeout(o),ct=(await l.json()).status==="ok",ct}catch{return ct=!1,!1}}async function gp(){var u,o;try{const l=await fetch(`${nn}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!l.ok)return{success:!1,error:`Server error: ${l.status}`};const c=await l.json();return c.success&&console.log("[FileApi] Manifest refreshed:",(o=(u=c.manifest)==null?void 0:u.files)==null?void 0:o.map(p=>p.filename)),c}catch(l){return console.error("[FileApi] Failed to refresh manifest:",l),{success:!1,error:l.message}}}function jc(u,o,l="text/plain"){const c=new Blob([o],{type:l}),p=URL.createObjectURL(c),f=document.createElement("a");f.href=p,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(p)}async function bc(u,o){if(ct===null&&await pn(),ct)try{const c=await(await fetch(`${nn}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json();if(c.success)return c}catch{console.warn("Backend save failed, falling back to download")}try{return jc(u,o,"application/x-tex"),{success:!0,path:`Downloads/${u}`}}catch(l){return{success:!1,error:l.message}}}async function xc(u,o){const l=typeof o=="string"?o:JSON.stringify(o,null,2);if(ct===null&&await pn(),ct)try{const p=await(await fetch(`${nn}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:l})})).json();if(p.success)return p}catch{console.warn("Backend save failed, falling back to download")}try{return jc(u,l,"application/json"),{success:!0,path:`Downloads/${u}`}}catch(c){return{success:!1,error:c.message}}}async function kc(u){if(ct===null&&await pn(),ct)try{const l=await(await fetch(`${nn}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:u})})).json();if(l.success)return l}catch{console.warn("Backend save failed, falling back to downloads")}try{const o=[];for(const l of u){const c=typeof l.content=="string"?l.content:JSON.stringify(l.content,null,2),p=l.directory==="paper"?"application/x-tex":"application/json";await new Promise(f=>setTimeout(f,200)),jc(l.filename,c,p),o.push(l.filename)}return{success:!0,files:o}}catch(o){return{success:!1,error:o.message}}}async function yp(u,o,l,c,p){const f=p?`${p}_`:"";return kc([{directory:"data",filename:`${f}oversight_v${u}.json`,content:o},{directory:"data",filename:`${f}feedback_v${u}.json`,content:l},{directory:"paper",filename:`${f}icis_paper_v${u}.tex`,content:c}])}async function vp(u,o,l,c,p,f){const m=f?`${f}_`:"",g=[{directory:"paper",filename:`${m}icis_paper_v${u}_FINAL.tex`,content:l},{directory:"data",filename:`${m}feedback_v${o}.json`,content:p}];return c.forEach(y=>{g.push({directory:"data",filename:`${m}oversight_v${y.version}.json`,content:y})}),kc(g)}const wa="https://icis-deploy-12-10-2025.vercel.app";let _a=null;async function bp(u,o,l){const c=(o.match(/\\begin\{tikzpicture\}/g)||[]).length,p=(l==null?void 0:l.length)||0,f=Math.round(o.length/1024);try{console.log(`[LaTeX] Compiling via Vercel cloud... (${f} KB, ${c} TikZ, ${p} PNG figures)`);const m=new AbortController,g=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),m.abort()},3e5);let y;try{y=await fetch(`${wa}/api/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},signal:m.signal,body:JSON.stringify({filename:u,content:o,figures:l})}),clearTimeout(g)}catch(_){if(clearTimeout(g),_.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${c} TikZ figures may be too complex.`};throw _}const d=await y.json();return d.success&&d.pdfBase64?(_a={filename:d.pdfFilename,base64:d.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${d.pdfFilename}`)):d.success||console.warn(`[LaTeX] Cloud compilation failed: ${d.error}`),d}catch(m){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",m)}if(ct===null&&await pn(),!ct)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${nn}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u,content:o})})).json()}catch(m){return{success:!1,error:`Compilation request failed: ${m.message}`}}}function Lc(){if(!_a)return null;const u=atob(_a.base64),o=new Uint8Array(u.length);for(let c=0;c<u.length;c++)o[c]=u.charCodeAt(c);const l=new Blob([o],{type:"application/pdf"});return{filename:_a.filename,blob:l}}function xp(u){return`${nn}/get-pdf/${encodeURIComponent(u)}`}async function Sp(u){const o=Lc();if(o&&o.filename===u){const p=URL.createObjectURL(o.blob),f=document.createElement("a");f.href=p,f.download=u,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(p);return}const l=xp(u),c=document.createElement("a");c.href=l,c.download=u,document.body.appendChild(c),c.click(),document.body.removeChild(c)}async function Ep(u){if(!_a)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const l=await(await fetch(`${wa}/api/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:_a.filename,pdfBase64:_a.base64})})).json();if(l.success)return console.log(`[Viewer] Link created: ${l.fullUrl}`),l;console.warn("[Viewer] Cloud API returned error:",l.error)}catch(o){console.warn("[Viewer] Cloud API failed:",o)}if(ct===null&&await pn(),!ct)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${nn}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:u})})).json()}catch(o){return{success:!1,error:`Failed to create viewer link: ${o.message}`}}}function Ap(u){window.open(u,"_blank","noopener,noreferrer")}async function _p(u){if(ct===null&&await pn(),!ct)return{success:!1,error:"Backend server not available"};try{return await(await fetch(`${nn}/read-pdf/${encodeURIComponent(u)}`)).json()}catch(o){return{success:!1,error:o.message}}}async function Us(u,o="full"){var l;try{console.log(`[Cloud Python] Analyzing data (${u.length} chars, type: ${o})...`);const p=await(await fetch(`${wa}/api/analyze-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({csvContent:u,analysisType:o})})).json();return p.success?console.log(`[Cloud Python] Analysis complete: ${((l=p.figures)==null?void 0:l.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${p.error}`),p}catch(c){return console.error("[Cloud Python] Error:",c),{success:!1,error:c.message}}}async function wp(u,o,l){const c=ui();if(c!=null&&c.content&&wa){console.log("[executePythonScript] Trying cloud Python analysis...");const p=await Us(c.content,"full");if(p.success){const f=[];return p.chart_data&&p.chart_data.forEach((m,g)=>{f.push({filename:`${m.type}_${m.column||m.x_column||g}.json`,path:`cloud://chart_data/${g}`,size:JSON.stringify(m).length,base64:btoa(JSON.stringify(m))})}),{success:!0,stdout:p.text_summary||"",dataFileFound:!0,generatedFigures:f}}}if(ct===null&&await pn(),!ct)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${u}, dataFile=${l||"UNDEFINED"}`);const p={filename:u,code:o,dataFile:l};console.log("[executePythonScript] Request body dataFile:",p.dataFile);const m=await(await fetch(`${nn}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${m.dataFileFound}, dataFilePath=${m.dataFilePath||"NONE"}`),m}catch(p){return{success:!1,error:`Python execution request failed: ${p.message}`}}}async function Rp(){if(ct===null&&await pn(),!ct)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${nn}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(u){return{success:!1,error:`Backup request failed: ${u.message}`}}}let ln=null;async function Tp(u){try{const o=await u.arrayBuffer(),l=btoa(new Uint8Array(o).reduce((f,m)=>f+String.fromCharCode(m),""));console.log(`[Cloud Upload] Uploading ${u.name} (${u.size} bytes)...`);const p=await(await fetch(`${wa}/api/upload-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:u.name,content:l,contentType:u.type})})).json();return p.success&&(ln={filename:u.name,blobUrl:p.blobUrl},console.log(`[Cloud Upload] Success: ${p.blobUrl}`)),p}catch(o){return console.error("[Cloud Upload] Error:",o),{success:!1,error:o.message}}}function ui(){return ln}async function Sc(u){try{console.log(`[Cloud Read] Reading from: ${u}`);const l=await(await fetch(`${wa}/api/read-data?url=${encodeURIComponent(u)}`)).json();return l.success&&ln&&(ln.content=l.content),l}catch(o){return console.error("[Cloud Read] Error:",o),{success:!1,error:o.message}}}async function Np(u){if(ln&&ln.filename===u&&ln.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),Sc(ln.blobUrl);if(ct===null&&await pn(),!ct)return ln&&ln.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),Sc(ln.blobUrl)):{success:!1,error:"Backend server not available"};try{const l=await(await fetch(`${nn}/read-file/data/${encodeURIComponent(u)}`)).json();if(!l.success)return{success:!1,error:l.error||"Failed to read file"};const c=l.content,p=c.split(/\r?\n/),f=p[0]||"",m=p.filter(g=>g.trim()).length;return{success:!0,filename:u,firstLine:f,totalLines:m,content:c}}catch(o){return{success:!1,error:o.message}}}async function Uy(u){if(!u||u.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${u.length} figures via QuickChart.io...`);const l=await(await fetch(`${wa}/api/quickchart`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chartData:u})})).json();return l.success?console.log(`[QuickChart] Generated ${l.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${l.error}`),l}catch(o){return console.error("[QuickChart] Error:",o),{success:!1,error:o.message}}}let js=[];function Cp(){return js}async function Ip(){const u=[];for(const o of js)try{const l=await fetch(o.blobUrl);if(l.ok){const c=await l.blob();u.push({filename:o.filename,blob:c})}else console.warn(`[PNG Figures] Failed to download ${o.filename}: ${l.status}`)}catch(l){console.warn(`[PNG Figures] Error downloading ${o.filename}:`,l)}return console.log(`[PNG Figures] Downloaded ${u.length}/${js.length} figures`),u}let Ec=[];function Fy(u){Ec=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:o.base64})),js=u.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${o.base64}`,description:o.description||""})),console.log(`[PNG Storage] Stored ${Ec.length} PNG figures for LaTeX compilation and download`)}function Dp(){return Ec}const cc=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:Us,backupAndClearFiles:Rp,checkBackendHealth:pn,compileLaTeX:bp,createViewerLink:Ep,downloadAllFigures:Ip,downloadCompiledPdf:Sp,executePythonScript:wp,generateQuickChartFigures:Uy,getCloudDataFile:ui,getCurrentSessionFigures:Cp,getDataFilePreview:Np,getLastCompiledPdfBlob:Lc,getPdfDownloadUrl:xp,getPngFiguresForCompilation:Dp,openPaperViewer:Ap,readCloudDataFile:Sc,readPdfFile:_p,refreshManifest:gp,saveDataFile:xc,saveFiles:kc,saveFinalSubmission:vp,savePaperFile:bc,saveReviewOutputs:yp,storePngFiguresForCompilation:Fy,uploadDataFileToCloud:Tp},Symbol.toStringTag,{value:"Module"})),By=({logs:u,isProcessing:o,currentRound:l,isComplete:c=!1,onProceedToSupervisor:p,onAbort:f,onRestart:m,filePrefix:g})=>{const[y,d]=xe.useState([]),[_,E]=xe.useState(null),[T,b]=xe.useState(!1),[N,S]=xe.useState({}),A=async()=>{b(!0),E(null);const F=Is(l),j=li(l),$=ra(l,"icis_paper");if(!F||!j||!$){E("Missing files to save"),b(!1);return}const P=await yp(l,F,j,$,g);P.success?d(P.files||[]):E(P.error||"Failed to save files"),b(!1)},w=async(F,j)=>{var G;const $=(G=F.target.files)==null?void 0:G[0];if(!$)return;const P=await $.text();try{const U=JSON.parse(P);S(re=>({...re,[j]:U}))}catch(U){console.error(`Failed to parse ${j} file:`,U)}},I=()=>{const F=N.oversight||Is(l),j=N.feedback||li(l),$=ra(l,"icis_paper");F&&j&&$&&p&&p({oversight:F,feedback:j,paperContent:$,paperVersion:l})},L=c&&(N.oversight&&N.feedback||Is(l)&&li(l));return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Reviewing Paper (Round ",l,")"]}),s.jsx(Oc,{stageName:"Reviewer",isProcessing:o,canAbort:!0,canRestart:!o&&c,onAbort:f||(()=>{}),onRestart:m||(()=>{})})]}),s.jsx(ci,{logs:u,height:"h-48"}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${o?"bg-indigo-100 text-indigo-600":c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:o?s.jsx(tn,{size:14,className:"animate-spin"}):c?s.jsx(on,{size:14}):"1"}),s.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"2"}),s.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),s.jsxs("div",{className:`flex items-center gap-3 text-sm ${c?"":"text-slate-400"}`,children:[s.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${c?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:c?s.jsx(on,{size:14}):"3"}),s.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),c&&s.jsx("div",{className:"mt-6",children:s.jsx(My,{allOversight:Dc(),compact:!0})}),c&&s.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[s.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[s.jsx(Os,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),s.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),s.jsxs("button",{onClick:A,disabled:T,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[s.jsx(Os,{size:16,className:T?"animate-pulse":""}),T?"Downloading...":"Download Review Outputs"]}),s.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",l,".json, feedback_v",l,".json, icis_paper_v",l,".tex"]}),y.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",y.join(", ")]}),_&&s.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",_]}),s.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[s.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[s.jsx(fp,{size:16}),"Upload Modified Files (Optional)"]}),s.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",N.oversight&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:F=>w(F,"oversight"),className:"text-xs w-full"})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",N.feedback&&s.jsx(on,{size:12,className:"inline text-emerald-500"})]}),s.jsx("input",{type:"file",accept:".json",onChange:F=>w(F,"feedback"),className:"text-xs w-full"})]})]})]}),s.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:s.jsxs("button",{onClick:I,disabled:!L,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",s.jsx(lp,{size:18})]})})]})]})},Py=({currentRound:u,currentPaperVersion:o,lastFeedback:l,isProcessing:c,oversightData:p,allOversight:f,onAction:m,reviewOutputFiles:g})=>{var D,W;const[y,d]=xe.useState(""),[_,E]=xe.useState(!1),[T,b]=xe.useState(!1),[N,S]=xe.useState(!1),A=(g==null?void 0:g.oversight)||p,w=g==null?void 0:g.feedback,I=()=>{jy(o,"icis_paper")},L=(g==null?void 0:g.paperContent)||ra(o,"icis_paper"),F=g?"Uploaded/Downloaded files":"Internal storage",j=(A==null?void 0:A.averageScore)||0,$=(A==null?void 0:A.errorCounts.majorErrors)||0,P=A?A.reviewScores.novelty<4||A.reviewScores.significance<4||A.reviewScores.methodologicalRigor<4||A.reviewScores.clarity<4||A.reviewScores.relevance<4:!1,G=A?A.trustworthiness.reliability<5||A.trustworthiness.benevolence<5||A.trustworthiness.goalAlignment<5:!1,U=((A==null?void 0:A.criticalAlerts.length)||0)>0,re=P||G||$>0||U,ee=!re&&j>=4;return s.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[s.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),s.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",u]}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),s.jsx("div",{className:`p-4 font-mono text-sm ${re?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:s.jsxs("div",{className:"font-bold",children:["STATUS: ",re?"⚠️ ATTENTION NEEDED":ee?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[s.jsx(zs,{size:16,className:"text-slate-600"}),s.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),s.jsx("span",{className:"text-slate-600",children:F})]}),s.jsx("button",{onClick:()=>S(!N),className:"text-xs text-indigo-600 hover:underline",children:N?"Hide Details":"Show Details"})]}),N&&s.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),s.jsxs("p",{className:"text-slate-600",children:["oversight_v",(A==null?void 0:A.version)||u,".json",(g==null?void 0:g.oversight)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),s.jsxs("p",{className:"text-slate-600",children:["feedback_v",(w==null?void 0:w.version)||u,".json",(g==null?void 0:g.feedback)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),s.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(g==null?void 0:g.paperVersion)||o,".tex",(g==null?void 0:g.paperContent)&&s.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),s.jsxs("div",{children:[s.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),s.jsx("p",{className:g?"text-emerald-600":"text-slate-600",children:g?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),f.map((x,X)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",x.version]},X)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),s.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(x=>{var V;const X=x==="Methodological Rigor"?"methodologicalRigor":x.toLowerCase();return s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:x}),f.map((H,fe)=>{const te=H.reviewScores[X]||0;return s.jsx("td",{className:`text-center p-2 ${te<4?"text-red-600 font-bold":""}`,children:te},fe)}),s.jsx("td",{className:"p-2 text-slate-600 text-xs",children:A!=null&&A.reviewComments?((V=A.reviewComments[X])==null?void 0:V.substring(0,30))+"...":"-"})]},x)}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"AVERAGE"}),f.map((x,X)=>s.jsx("td",{className:"text-center p-2",children:x.averageScore.toFixed(1)},X)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?f[f.length-1].averageScore>f[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),f.map((x,X)=>s.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",x.version]},X)),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Remaining Issues"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),f.map((x,X)=>s.jsx("td",{className:`text-center p-2 ${x.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:x.errorCounts.majorErrors},X)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((D=A==null?void 0:A.errorDetails.majorErrors[0])==null?void 0:D.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),f.map((x,X)=>s.jsx("td",{className:"text-center p-2",children:x.errorCounts.minorErrors},X)),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:((W=A==null?void 0:A.errorDetails.minorErrors[0])==null?void 0:W.substring(0,30))||"None"})]}),s.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[s.jsx("td",{className:"p-2",children:"TOTAL"}),f.map((x,X)=>s.jsx("td",{className:"text-center p-2",children:x.errorCounts.majorErrors+x.errorCounts.minorErrors},X)),s.jsx("td",{className:"p-2 text-xs",children:f.length>1?`${Math.round((1-(f[f.length-1].errorCounts.majorErrors+f[f.length-1].errorCounts.minorErrors)/Math.max(1,f[0].errorCounts.majorErrors+f[0].errorCounts.minorErrors))*100)}% reduction`:"-"})]})]})]})})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b-2 border-slate-300",children:[s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),s.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),s.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.reliability)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.reliabilityRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.benevolence)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.benevolenceRationale)||"-"})]}),s.jsxs("tr",{className:"border-b border-slate-200",children:[s.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),s.jsx("td",{className:`text-center p-2 ${((A==null?void 0:A.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(A==null?void 0:A.trustworthiness.goalAlignment)||"-"}),s.jsx("td",{className:"p-2 text-xs text-slate-600",children:(A==null?void 0:A.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${U?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),U?s.jsx("div",{className:"space-y-3",children:A==null?void 0:A.criticalAlerts.map((x,X)=>s.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[s.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",x.number,": ",x.title," (BLOCKING ISSUE)"]}),s.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Status:"})," ",x.status]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Impact:"})," ",x.impact]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Details:"})," ",x.details]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Action Required:"})," ",x.actionRequired]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-medium",children:"Consequence:"})," ",x.consequence]})]})]},X))}):s.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),s.jsxs("button",{onClick:()=>E(!_),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[s.jsx(gc,{size:12}),_?"Hide Full":"Show Full"]})]}),_?s.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:w?s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Summary:"}),s.jsx("p",{children:w.summary||"No summary available."})]}),w.majorIssues&&w.majorIssues.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-red-600",children:"Major Issues:"}),s.jsx("ul",{className:"list-disc list-inside",children:w.majorIssues.map((x,X)=>s.jsx("li",{children:x},X))})]}),w.suggestions&&w.suggestions.length>0&&s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:"Suggestions:"}),s.jsx("ul",{className:"list-disc list-inside",children:w.suggestions.map((x,X)=>s.jsx("li",{children:x},X))})]})]}):s.jsx("p",{children:l||"No feedback generated."})}):s.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(w==null?void 0:w.summary)||l||"No feedback generated."})]}),s.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${re?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),re?s.jsxs("div",{children:[s.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",u+1]}),s.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",P?"Review scores below threshold (< 4)":$>0?`${$} major error(s) remaining`:G?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),s.jsxs("div",{className:"mt-2 text-sm",children:[s.jsx("p",{className:"font-medium",children:"Priority actions:"}),s.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:A==null?void 0:A.errorDetails.majorErrors.slice(0,3).map((x,X)=>s.jsx("li",{children:x},X))})]})]}):s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),s.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),s.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[s.jsxs("li",{children:["Average review score: ",j.toFixed(1),"/5"]}),s.jsx("li",{children:"All trustworthiness scores ≥ 5"}),s.jsx("li",{children:"No major errors remaining"}),s.jsx("li",{children:"No critical alerts"})]})]})]}),s.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[s.jsxs("div",{className:"text-center mb-4",children:[s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),s.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),s.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),s.jsx("li",{children:"• Current feedback will guide improvements"}),s.jsx("li",{children:"• Add your directives below"})]})]}),s.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[s.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),s.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[s.jsx("li",{children:"• Sends paper to ICISfinalize"}),s.jsx("li",{children:"• Paper will be prepared for submission"}),s.jsx("li",{children:"• No further revisions will be made"})]})]})]})]}),s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),s.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:y,onChange:x=>d(x.target.value)})]}),s.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("button",{onClick:()=>m("revise",y),disabled:c,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),s.jsx("button",{onClick:()=>m("finalize"),disabled:c,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]})]}),s.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[s.jsxs("button",{onClick:()=>b(!T),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(gc,{size:14})," ",T?"Hide":"View"," Paper Draft"]}),s.jsxs("button",{onClick:I,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[s.jsx(Os,{size:14})," Download (.tex)"]})]}),T&&L&&s.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[s.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",o,"):"]}),s.jsx("div",{className:"max-h-96 overflow-y-auto",children:s.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:L})})]})]})},Vy=({logs:u,isProcessing:o,currentPaperVersion:l,paperContent:c,onAbort:p,onRestart:f})=>s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[s.jsx(tn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Revising Paper (v",l," → v",(l||0)+1,")"]}),s.jsx(Oc,{stageName:"Reviser",isProcessing:o,canAbort:!0,canRestart:!o,onAbort:p||(()=>{}),onRestart:f||(()=>{})})]}),s.jsx(ci,{logs:u,height:"h-48"}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),s.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),s.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:c?s.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:c}):s.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function Rs(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var uc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Jh;function Hy(){return Jh||(Jh=1,(function(u,o){(function(l){u.exports=l()})(function(){return(function l(c,p,f){function m(d,_){if(!p[d]){if(!c[d]){var E=typeof Rs=="function"&&Rs;if(!_&&E)return E(d,!0);if(g)return g(d,!0);var T=new Error("Cannot find module '"+d+"'");throw T.code="MODULE_NOT_FOUND",T}var b=p[d]={exports:{}};c[d][0].call(b.exports,function(N){var S=c[d][1][N];return m(S||N)},b,b.exports,l,c,p,f)}return p[d].exports}for(var g=typeof Rs=="function"&&Rs,y=0;y<f.length;y++)m(f[y]);return m})({1:[function(l,c,p){var f=l("./utils"),m=l("./support"),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";p.encode=function(y){for(var d,_,E,T,b,N,S,A=[],w=0,I=y.length,L=I,F=f.getTypeOf(y)!=="string";w<y.length;)L=I-w,E=F?(d=y[w++],_=w<I?y[w++]:0,w<I?y[w++]:0):(d=y.charCodeAt(w++),_=w<I?y.charCodeAt(w++):0,w<I?y.charCodeAt(w++):0),T=d>>2,b=(3&d)<<4|_>>4,N=1<L?(15&_)<<2|E>>6:64,S=2<L?63&E:64,A.push(g.charAt(T)+g.charAt(b)+g.charAt(N)+g.charAt(S));return A.join("")},p.decode=function(y){var d,_,E,T,b,N,S=0,A=0,w="data:";if(y.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var I,L=3*(y=y.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(y.charAt(y.length-1)===g.charAt(64)&&L--,y.charAt(y.length-2)===g.charAt(64)&&L--,L%1!=0)throw new Error("Invalid base64 input, bad content length.");for(I=m.uint8array?new Uint8Array(0|L):new Array(0|L);S<y.length;)d=g.indexOf(y.charAt(S++))<<2|(T=g.indexOf(y.charAt(S++)))>>4,_=(15&T)<<4|(b=g.indexOf(y.charAt(S++)))>>2,E=(3&b)<<6|(N=g.indexOf(y.charAt(S++))),I[A++]=d,b!==64&&(I[A++]=_),N!==64&&(I[A++]=E);return I}},{"./support":30,"./utils":32}],2:[function(l,c,p){var f=l("./external"),m=l("./stream/DataWorker"),g=l("./stream/Crc32Probe"),y=l("./stream/DataLengthProbe");function d(_,E,T,b,N){this.compressedSize=_,this.uncompressedSize=E,this.crc32=T,this.compression=b,this.compressedContent=N}d.prototype={getContentWorker:function(){var _=new m(f.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new y("data_length")),E=this;return _.on("end",function(){if(this.streamInfo.data_length!==E.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),_},getCompressedWorker:function(){return new m(f.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(_,E,T){return _.pipe(new g).pipe(new y("uncompressedSize")).pipe(E.compressWorker(T)).pipe(new y("compressedSize")).withStreamInfo("compression",E)},c.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,c,p){var f=l("./stream/GenericWorker");p.STORE={magic:"\0\0",compressWorker:function(){return new f("STORE compression")},uncompressWorker:function(){return new f("STORE decompression")}},p.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,c,p){var f=l("./utils"),m=(function(){for(var g,y=[],d=0;d<256;d++){g=d;for(var _=0;_<8;_++)g=1&g?3988292384^g>>>1:g>>>1;y[d]=g}return y})();c.exports=function(g,y){return g!==void 0&&g.length?f.getTypeOf(g)!=="string"?(function(d,_,E,T){var b=m,N=T+E;d^=-1;for(var S=T;S<N;S++)d=d>>>8^b[255&(d^_[S])];return-1^d})(0|y,g,g.length,0):(function(d,_,E,T){var b=m,N=T+E;d^=-1;for(var S=T;S<N;S++)d=d>>>8^b[255&(d^_.charCodeAt(S))];return-1^d})(0|y,g,g.length,0):0}},{"./utils":32}],5:[function(l,c,p){p.base64=!1,p.binary=!1,p.dir=!1,p.createFolders=!0,p.date=null,p.compression=null,p.compressionOptions=null,p.comment=null,p.unixPermissions=null,p.dosPermissions=null},{}],6:[function(l,c,p){var f=null;f=typeof Promise<"u"?Promise:l("lie"),c.exports={Promise:f}},{lie:37}],7:[function(l,c,p){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",m=l("pako"),g=l("./utils"),y=l("./stream/GenericWorker"),d=f?"uint8array":"array";function _(E,T){y.call(this,"FlateWorker/"+E),this._pako=null,this._pakoAction=E,this._pakoOptions=T,this.meta={}}p.magic="\b\0",g.inherits(_,y),_.prototype.processChunk=function(E){this.meta=E.meta,this._pako===null&&this._createPako(),this._pako.push(g.transformTo(d,E.data),!1)},_.prototype.flush=function(){y.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},_.prototype.cleanUp=function(){y.prototype.cleanUp.call(this),this._pako=null},_.prototype._createPako=function(){this._pako=new m[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var E=this;this._pako.onData=function(T){E.push({data:T,meta:E.meta})}},p.compressWorker=function(E){return new _("Deflate",E)},p.uncompressWorker=function(){return new _("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,c,p){function f(b,N){var S,A="";for(S=0;S<N;S++)A+=String.fromCharCode(255&b),b>>>=8;return A}function m(b,N,S,A,w,I){var L,F,j=b.file,$=b.compression,P=I!==d.utf8encode,G=g.transformTo("string",I(j.name)),U=g.transformTo("string",d.utf8encode(j.name)),re=j.comment,ee=g.transformTo("string",I(re)),D=g.transformTo("string",d.utf8encode(re)),W=U.length!==j.name.length,x=D.length!==re.length,X="",V="",H="",fe=j.dir,te=j.date,ye={crc32:0,compressedSize:0,uncompressedSize:0};N&&!S||(ye.crc32=b.crc32,ye.compressedSize=b.compressedSize,ye.uncompressedSize=b.uncompressedSize);var C=0;N&&(C|=8),P||!W&&!x||(C|=2048);var k=0,ie=0;fe&&(k|=16),w==="UNIX"?(ie=798,k|=(function(oe,Ae){var Ie=oe;return oe||(Ie=Ae?16893:33204),(65535&Ie)<<16})(j.unixPermissions,fe)):(ie=20,k|=(function(oe){return 63&(oe||0)})(j.dosPermissions)),L=te.getUTCHours(),L<<=6,L|=te.getUTCMinutes(),L<<=5,L|=te.getUTCSeconds()/2,F=te.getUTCFullYear()-1980,F<<=4,F|=te.getUTCMonth()+1,F<<=5,F|=te.getUTCDate(),W&&(V=f(1,1)+f(_(G),4)+U,X+="up"+f(V.length,2)+V),x&&(H=f(1,1)+f(_(ee),4)+D,X+="uc"+f(H.length,2)+H);var se="";return se+=`
\0`,se+=f(C,2),se+=$.magic,se+=f(L,2),se+=f(F,2),se+=f(ye.crc32,4),se+=f(ye.compressedSize,4),se+=f(ye.uncompressedSize,4),se+=f(G.length,2),se+=f(X.length,2),{fileRecord:E.LOCAL_FILE_HEADER+se+G+X,dirRecord:E.CENTRAL_FILE_HEADER+f(ie,2)+se+f(ee.length,2)+"\0\0\0\0"+f(k,4)+f(A,4)+G+X+ee}}var g=l("../utils"),y=l("../stream/GenericWorker"),d=l("../utf8"),_=l("../crc32"),E=l("../signature");function T(b,N,S,A){y.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=N,this.zipPlatform=S,this.encodeFileName=A,this.streamFiles=b,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}g.inherits(T,y),T.prototype.push=function(b){var N=b.meta.percent||0,S=this.entriesCount,A=this._sources.length;this.accumulate?this.contentBuffer.push(b):(this.bytesWritten+=b.data.length,y.prototype.push.call(this,{data:b.data,meta:{currentFile:this.currentFile,percent:S?(N+100*(S-A-1))/S:100}}))},T.prototype.openedSource=function(b){this.currentSourceOffset=this.bytesWritten,this.currentFile=b.file.name;var N=this.streamFiles&&!b.file.dir;if(N){var S=m(b,N,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:S.fileRecord,meta:{percent:0}})}else this.accumulate=!0},T.prototype.closedSource=function(b){this.accumulate=!1;var N=this.streamFiles&&!b.file.dir,S=m(b,N,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(S.dirRecord),N)this.push({data:(function(A){return E.DATA_DESCRIPTOR+f(A.crc32,4)+f(A.compressedSize,4)+f(A.uncompressedSize,4)})(b),meta:{percent:100}});else for(this.push({data:S.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},T.prototype.flush=function(){for(var b=this.bytesWritten,N=0;N<this.dirRecords.length;N++)this.push({data:this.dirRecords[N],meta:{percent:100}});var S=this.bytesWritten-b,A=(function(w,I,L,F,j){var $=g.transformTo("string",j(F));return E.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(w,2)+f(w,2)+f(I,4)+f(L,4)+f($.length,2)+$})(this.dirRecords.length,S,b,this.zipComment,this.encodeFileName);this.push({data:A,meta:{percent:100}})},T.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},T.prototype.registerPrevious=function(b){this._sources.push(b);var N=this;return b.on("data",function(S){N.processChunk(S)}),b.on("end",function(){N.closedSource(N.previous.streamInfo),N._sources.length?N.prepareNextSource():N.end()}),b.on("error",function(S){N.error(S)}),this},T.prototype.resume=function(){return!!y.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},T.prototype.error=function(b){var N=this._sources;if(!y.prototype.error.call(this,b))return!1;for(var S=0;S<N.length;S++)try{N[S].error(b)}catch{}return!0},T.prototype.lock=function(){y.prototype.lock.call(this);for(var b=this._sources,N=0;N<b.length;N++)b[N].lock()},c.exports=T},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,c,p){var f=l("../compressions"),m=l("./ZipFileWorker");p.generateWorker=function(g,y,d){var _=new m(y.streamFiles,d,y.platform,y.encodeFileName),E=0;try{g.forEach(function(T,b){E++;var N=(function(I,L){var F=I||L,j=f[F];if(!j)throw new Error(F+" is not a valid compression method !");return j})(b.options.compression,y.compression),S=b.options.compressionOptions||y.compressionOptions||{},A=b.dir,w=b.date;b._compressWorker(N,S).withStreamInfo("file",{name:T,dir:A,date:w,comment:b.comment||"",unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions}).pipe(_)}),_.entriesCount=E}catch(T){_.error(T)}return _}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,c,p){function f(){if(!(this instanceof f))return new f;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var m=new f;for(var g in this)typeof this[g]!="function"&&(m[g]=this[g]);return m}}(f.prototype=l("./object")).loadAsync=l("./load"),f.support=l("./support"),f.defaults=l("./defaults"),f.version="3.10.1",f.loadAsync=function(m,g){return new f().loadAsync(m,g)},f.external=l("./external"),c.exports=f},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,c,p){var f=l("./utils"),m=l("./external"),g=l("./utf8"),y=l("./zipEntries"),d=l("./stream/Crc32Probe"),_=l("./nodejsUtils");function E(T){return new m.Promise(function(b,N){var S=T.decompressed.getContentWorker().pipe(new d);S.on("error",function(A){N(A)}).on("end",function(){S.streamInfo.crc32!==T.decompressed.crc32?N(new Error("Corrupted zip : CRC32 mismatch")):b()}).resume()})}c.exports=function(T,b){var N=this;return b=f.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:g.utf8decode}),_.isNode&&_.isStream(T)?m.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):f.prepareContent("the loaded zip file",T,!0,b.optimizedBinaryString,b.base64).then(function(S){var A=new y(b);return A.load(S),A}).then(function(S){var A=[m.Promise.resolve(S)],w=S.files;if(b.checkCRC32)for(var I=0;I<w.length;I++)A.push(E(w[I]));return m.Promise.all(A)}).then(function(S){for(var A=S.shift(),w=A.files,I=0;I<w.length;I++){var L=w[I],F=L.fileNameStr,j=f.resolve(L.fileNameStr);N.file(j,L.decompressed,{binary:!0,optimizedBinaryString:!0,date:L.date,dir:L.dir,comment:L.fileCommentStr.length?L.fileCommentStr:null,unixPermissions:L.unixPermissions,dosPermissions:L.dosPermissions,createFolders:b.createFolders}),L.dir||(N.file(j).unsafeOriginalName=F)}return A.zipComment.length&&(N.comment=A.zipComment),N})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,c,p){var f=l("../utils"),m=l("../stream/GenericWorker");function g(y,d){m.call(this,"Nodejs stream input adapter for "+y),this._upstreamEnded=!1,this._bindStream(d)}f.inherits(g,m),g.prototype._bindStream=function(y){var d=this;(this._stream=y).pause(),y.on("data",function(_){d.push({data:_,meta:{percent:0}})}).on("error",function(_){d.isPaused?this.generatedError=_:d.error(_)}).on("end",function(){d.isPaused?d._upstreamEnded=!0:d.end()})},g.prototype.pause=function(){return!!m.prototype.pause.call(this)&&(this._stream.pause(),!0)},g.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},c.exports=g},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,c,p){var f=l("readable-stream").Readable;function m(g,y,d){f.call(this,y),this._helper=g;var _=this;g.on("data",function(E,T){_.push(E)||_._helper.pause(),d&&d(T)}).on("error",function(E){_.emit("error",E)}).on("end",function(){_.push(null)})}l("../utils").inherits(m,f),m.prototype._read=function(){this._helper.resume()},c.exports=m},{"../utils":32,"readable-stream":16}],14:[function(l,c,p){c.exports={isNode:typeof Buffer<"u",newBufferFrom:function(f,m){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(f,m);if(typeof f=="number")throw new Error('The "data" argument must not be a number');return new Buffer(f,m)},allocBuffer:function(f){if(Buffer.alloc)return Buffer.alloc(f);var m=new Buffer(f);return m.fill(0),m},isBuffer:function(f){return Buffer.isBuffer(f)},isStream:function(f){return f&&typeof f.on=="function"&&typeof f.pause=="function"&&typeof f.resume=="function"}}},{}],15:[function(l,c,p){function f(j,$,P){var G,U=g.getTypeOf($),re=g.extend(P||{},_);re.date=re.date||new Date,re.compression!==null&&(re.compression=re.compression.toUpperCase()),typeof re.unixPermissions=="string"&&(re.unixPermissions=parseInt(re.unixPermissions,8)),re.unixPermissions&&16384&re.unixPermissions&&(re.dir=!0),re.dosPermissions&&16&re.dosPermissions&&(re.dir=!0),re.dir&&(j=w(j)),re.createFolders&&(G=A(j))&&I.call(this,G,!0);var ee=U==="string"&&re.binary===!1&&re.base64===!1;P&&P.binary!==void 0||(re.binary=!ee),($ instanceof E&&$.uncompressedSize===0||re.dir||!$||$.length===0)&&(re.base64=!1,re.binary=!0,$="",re.compression="STORE",U="string");var D=null;D=$ instanceof E||$ instanceof y?$:N.isNode&&N.isStream($)?new S(j,$):g.prepareContent(j,$,re.binary,re.optimizedBinaryString,re.base64);var W=new T(j,D,re);this.files[j]=W}var m=l("./utf8"),g=l("./utils"),y=l("./stream/GenericWorker"),d=l("./stream/StreamHelper"),_=l("./defaults"),E=l("./compressedObject"),T=l("./zipObject"),b=l("./generate"),N=l("./nodejsUtils"),S=l("./nodejs/NodejsStreamInputAdapter"),A=function(j){j.slice(-1)==="/"&&(j=j.substring(0,j.length-1));var $=j.lastIndexOf("/");return 0<$?j.substring(0,$):""},w=function(j){return j.slice(-1)!=="/"&&(j+="/"),j},I=function(j,$){return $=$!==void 0?$:_.createFolders,j=w(j),this.files[j]||f.call(this,j,null,{dir:!0,createFolders:$}),this.files[j]};function L(j){return Object.prototype.toString.call(j)==="[object RegExp]"}var F={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(j){var $,P,G;for($ in this.files)G=this.files[$],(P=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&j(P,G)},filter:function(j){var $=[];return this.forEach(function(P,G){j(P,G)&&$.push(G)}),$},file:function(j,$,P){if(arguments.length!==1)return j=this.root+j,f.call(this,j,$,P),this;if(L(j)){var G=j;return this.filter(function(re,ee){return!ee.dir&&G.test(re)})}var U=this.files[this.root+j];return U&&!U.dir?U:null},folder:function(j){if(!j)return this;if(L(j))return this.filter(function(U,re){return re.dir&&j.test(U)});var $=this.root+j,P=I.call(this,$),G=this.clone();return G.root=P.name,G},remove:function(j){j=this.root+j;var $=this.files[j];if($||(j.slice(-1)!=="/"&&(j+="/"),$=this.files[j]),$&&!$.dir)delete this.files[j];else for(var P=this.filter(function(U,re){return re.name.slice(0,j.length)===j}),G=0;G<P.length;G++)delete this.files[P[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(j){var $,P={};try{if((P=g.extend(j||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");g.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var G=P.comment||this.comment||"";$=b.generateWorker(this,P,G)}catch(U){($=new y("error")).error(U)}return new d($,P.type||"string",P.mimeType)},generateAsync:function(j,$){return this.generateInternalStream(j).accumulate($)},generateNodeStream:function(j,$){return(j=j||{}).type||(j.type="nodebuffer"),this.generateInternalStream(j).toNodejsStream($)}};c.exports=F},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,c,p){c.exports=l("stream")},{stream:void 0}],17:[function(l,c,p){var f=l("./DataReader");function m(g){f.call(this,g);for(var y=0;y<this.data.length;y++)g[y]=255&g[y]}l("../utils").inherits(m,f),m.prototype.byteAt=function(g){return this.data[this.zero+g]},m.prototype.lastIndexOfSignature=function(g){for(var y=g.charCodeAt(0),d=g.charCodeAt(1),_=g.charCodeAt(2),E=g.charCodeAt(3),T=this.length-4;0<=T;--T)if(this.data[T]===y&&this.data[T+1]===d&&this.data[T+2]===_&&this.data[T+3]===E)return T-this.zero;return-1},m.prototype.readAndCheckSignature=function(g){var y=g.charCodeAt(0),d=g.charCodeAt(1),_=g.charCodeAt(2),E=g.charCodeAt(3),T=this.readData(4);return y===T[0]&&d===T[1]&&_===T[2]&&E===T[3]},m.prototype.readData=function(g){if(this.checkOffset(g),g===0)return[];var y=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,y},c.exports=m},{"../utils":32,"./DataReader":18}],18:[function(l,c,p){var f=l("../utils");function m(g){this.data=g,this.length=g.length,this.index=0,this.zero=0}m.prototype={checkOffset:function(g){this.checkIndex(this.index+g)},checkIndex:function(g){if(this.length<this.zero+g||g<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+g+"). Corrupted zip ?")},setIndex:function(g){this.checkIndex(g),this.index=g},skip:function(g){this.setIndex(this.index+g)},byteAt:function(){},readInt:function(g){var y,d=0;for(this.checkOffset(g),y=this.index+g-1;y>=this.index;y--)d=(d<<8)+this.byteAt(y);return this.index+=g,d},readString:function(g){return f.transformTo("string",this.readData(g))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var g=this.readInt(4);return new Date(Date.UTC(1980+(g>>25&127),(g>>21&15)-1,g>>16&31,g>>11&31,g>>5&63,(31&g)<<1))}},c.exports=m},{"../utils":32}],19:[function(l,c,p){var f=l("./Uint8ArrayReader");function m(g){f.call(this,g)}l("../utils").inherits(m,f),m.prototype.readData=function(g){this.checkOffset(g);var y=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,y},c.exports=m},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,c,p){var f=l("./DataReader");function m(g){f.call(this,g)}l("../utils").inherits(m,f),m.prototype.byteAt=function(g){return this.data.charCodeAt(this.zero+g)},m.prototype.lastIndexOfSignature=function(g){return this.data.lastIndexOf(g)-this.zero},m.prototype.readAndCheckSignature=function(g){return g===this.readData(4)},m.prototype.readData=function(g){this.checkOffset(g);var y=this.data.slice(this.zero+this.index,this.zero+this.index+g);return this.index+=g,y},c.exports=m},{"../utils":32,"./DataReader":18}],21:[function(l,c,p){var f=l("./ArrayReader");function m(g){f.call(this,g)}l("../utils").inherits(m,f),m.prototype.readData=function(g){if(this.checkOffset(g),g===0)return new Uint8Array(0);var y=this.data.subarray(this.zero+this.index,this.zero+this.index+g);return this.index+=g,y},c.exports=m},{"../utils":32,"./ArrayReader":17}],22:[function(l,c,p){var f=l("../utils"),m=l("../support"),g=l("./ArrayReader"),y=l("./StringReader"),d=l("./NodeBufferReader"),_=l("./Uint8ArrayReader");c.exports=function(E){var T=f.getTypeOf(E);return f.checkSupport(T),T!=="string"||m.uint8array?T==="nodebuffer"?new d(E):m.uint8array?new _(f.transformTo("uint8array",E)):new g(f.transformTo("array",E)):new y(E)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,c,p){p.LOCAL_FILE_HEADER="PK",p.CENTRAL_FILE_HEADER="PK",p.CENTRAL_DIRECTORY_END="PK",p.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",p.ZIP64_CENTRAL_DIRECTORY_END="PK",p.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,c,p){var f=l("./GenericWorker"),m=l("../utils");function g(y){f.call(this,"ConvertWorker to "+y),this.destType=y}m.inherits(g,f),g.prototype.processChunk=function(y){this.push({data:m.transformTo(this.destType,y.data),meta:y.meta})},c.exports=g},{"../utils":32,"./GenericWorker":28}],25:[function(l,c,p){var f=l("./GenericWorker"),m=l("../crc32");function g(){f.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(g,f),g.prototype.processChunk=function(y){this.streamInfo.crc32=m(y.data,this.streamInfo.crc32||0),this.push(y)},c.exports=g},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,c,p){var f=l("../utils"),m=l("./GenericWorker");function g(y){m.call(this,"DataLengthProbe for "+y),this.propName=y,this.withStreamInfo(y,0)}f.inherits(g,m),g.prototype.processChunk=function(y){if(y){var d=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=d+y.data.length}m.prototype.processChunk.call(this,y)},c.exports=g},{"../utils":32,"./GenericWorker":28}],27:[function(l,c,p){var f=l("../utils"),m=l("./GenericWorker");function g(y){m.call(this,"DataWorker");var d=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,y.then(function(_){d.dataIsReady=!0,d.data=_,d.max=_&&_.length||0,d.type=f.getTypeOf(_),d.isPaused||d._tickAndRepeat()},function(_){d.error(_)})}f.inherits(g,m),g.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this.data=null},g.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,f.delay(this._tickAndRepeat,[],this)),!0)},g.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(f.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},g.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var y=null,d=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":y=this.data.substring(this.index,d);break;case"uint8array":y=this.data.subarray(this.index,d);break;case"array":case"nodebuffer":y=this.data.slice(this.index,d)}return this.index=d,this.push({data:y,meta:{percent:this.max?this.index/this.max*100:0}})},c.exports=g},{"../utils":32,"./GenericWorker":28}],28:[function(l,c,p){function f(m){this.name=m||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}f.prototype={push:function(m){this.emit("data",m)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(m){this.emit("error",m)}return!0},error:function(m){return!this.isFinished&&(this.isPaused?this.generatedError=m:(this.isFinished=!0,this.emit("error",m),this.previous&&this.previous.error(m),this.cleanUp()),!0)},on:function(m,g){return this._listeners[m].push(g),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(m,g){if(this._listeners[m])for(var y=0;y<this._listeners[m].length;y++)this._listeners[m][y].call(this,g)},pipe:function(m){return m.registerPrevious(this)},registerPrevious:function(m){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=m.streamInfo,this.mergeStreamInfo(),this.previous=m;var g=this;return m.on("data",function(y){g.processChunk(y)}),m.on("end",function(){g.end()}),m.on("error",function(y){g.error(y)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var m=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),m=!0),this.previous&&this.previous.resume(),!m},flush:function(){},processChunk:function(m){this.push(m)},withStreamInfo:function(m,g){return this.extraStreamInfo[m]=g,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var m in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,m)&&(this.streamInfo[m]=this.extraStreamInfo[m])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var m="Worker "+this.name;return this.previous?this.previous+" -> "+m:m}},c.exports=f},{}],29:[function(l,c,p){var f=l("../utils"),m=l("./ConvertWorker"),g=l("./GenericWorker"),y=l("../base64"),d=l("../support"),_=l("../external"),E=null;if(d.nodestream)try{E=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function T(N,S){return new _.Promise(function(A,w){var I=[],L=N._internalType,F=N._outputType,j=N._mimeType;N.on("data",function($,P){I.push($),S&&S(P)}).on("error",function($){I=[],w($)}).on("end",function(){try{var $=(function(P,G,U){switch(P){case"blob":return f.newBlob(f.transformTo("arraybuffer",G),U);case"base64":return y.encode(G);default:return f.transformTo(P,G)}})(F,(function(P,G){var U,re=0,ee=null,D=0;for(U=0;U<G.length;U++)D+=G[U].length;switch(P){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(ee=new Uint8Array(D),U=0;U<G.length;U++)ee.set(G[U],re),re+=G[U].length;return ee;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+P+"'")}})(L,I),j);A($)}catch(P){w(P)}I=[]}).resume()})}function b(N,S,A){var w=S;switch(S){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=S,this._mimeType=A,f.checkSupport(w),this._worker=N.pipe(new m(w)),N.lock()}catch(I){this._worker=new g("error"),this._worker.error(I)}}b.prototype={accumulate:function(N){return T(this,N)},on:function(N,S){var A=this;return N==="data"?this._worker.on(N,function(w){S.call(A,w.data,w.meta)}):this._worker.on(N,function(){f.delay(S,arguments,A)}),this},resume:function(){return f.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(N){if(f.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new E(this,{objectMode:this._outputType!=="nodebuffer"},N)}},c.exports=b},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,c,p){if(p.base64=!0,p.array=!0,p.string=!0,p.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",p.nodebuffer=typeof Buffer<"u",p.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")p.blob=!1;else{var f=new ArrayBuffer(0);try{p.blob=new Blob([f],{type:"application/zip"}).size===0}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);m.append(f),p.blob=m.getBlob("application/zip").size===0}catch{p.blob=!1}}}try{p.nodestream=!!l("readable-stream").Readable}catch{p.nodestream=!1}},{"readable-stream":16}],31:[function(l,c,p){for(var f=l("./utils"),m=l("./support"),g=l("./nodejsUtils"),y=l("./stream/GenericWorker"),d=new Array(256),_=0;_<256;_++)d[_]=252<=_?6:248<=_?5:240<=_?4:224<=_?3:192<=_?2:1;d[254]=d[254]=1;function E(){y.call(this,"utf-8 decode"),this.leftOver=null}function T(){y.call(this,"utf-8 encode")}p.utf8encode=function(b){return m.nodebuffer?g.newBufferFrom(b,"utf-8"):(function(N){var S,A,w,I,L,F=N.length,j=0;for(I=0;I<F;I++)(64512&(A=N.charCodeAt(I)))==55296&&I+1<F&&(64512&(w=N.charCodeAt(I+1)))==56320&&(A=65536+(A-55296<<10)+(w-56320),I++),j+=A<128?1:A<2048?2:A<65536?3:4;for(S=m.uint8array?new Uint8Array(j):new Array(j),I=L=0;L<j;I++)(64512&(A=N.charCodeAt(I)))==55296&&I+1<F&&(64512&(w=N.charCodeAt(I+1)))==56320&&(A=65536+(A-55296<<10)+(w-56320),I++),A<128?S[L++]=A:(A<2048?S[L++]=192|A>>>6:(A<65536?S[L++]=224|A>>>12:(S[L++]=240|A>>>18,S[L++]=128|A>>>12&63),S[L++]=128|A>>>6&63),S[L++]=128|63&A);return S})(b)},p.utf8decode=function(b){return m.nodebuffer?f.transformTo("nodebuffer",b).toString("utf-8"):(function(N){var S,A,w,I,L=N.length,F=new Array(2*L);for(S=A=0;S<L;)if((w=N[S++])<128)F[A++]=w;else if(4<(I=d[w]))F[A++]=65533,S+=I-1;else{for(w&=I===2?31:I===3?15:7;1<I&&S<L;)w=w<<6|63&N[S++],I--;1<I?F[A++]=65533:w<65536?F[A++]=w:(w-=65536,F[A++]=55296|w>>10&1023,F[A++]=56320|1023&w)}return F.length!==A&&(F.subarray?F=F.subarray(0,A):F.length=A),f.applyFromCharCode(F)})(b=f.transformTo(m.uint8array?"uint8array":"array",b))},f.inherits(E,y),E.prototype.processChunk=function(b){var N=f.transformTo(m.uint8array?"uint8array":"array",b.data);if(this.leftOver&&this.leftOver.length){if(m.uint8array){var S=N;(N=new Uint8Array(S.length+this.leftOver.length)).set(this.leftOver,0),N.set(S,this.leftOver.length)}else N=this.leftOver.concat(N);this.leftOver=null}var A=(function(I,L){var F;for((L=L||I.length)>I.length&&(L=I.length),F=L-1;0<=F&&(192&I[F])==128;)F--;return F<0||F===0?L:F+d[I[F]]>L?F:L})(N),w=N;A!==N.length&&(m.uint8array?(w=N.subarray(0,A),this.leftOver=N.subarray(A,N.length)):(w=N.slice(0,A),this.leftOver=N.slice(A,N.length))),this.push({data:p.utf8decode(w),meta:b.meta})},E.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:p.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},p.Utf8DecodeWorker=E,f.inherits(T,y),T.prototype.processChunk=function(b){this.push({data:p.utf8encode(b.data),meta:b.meta})},p.Utf8EncodeWorker=T},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,c,p){var f=l("./support"),m=l("./base64"),g=l("./nodejsUtils"),y=l("./external");function d(S){return S}function _(S,A){for(var w=0;w<S.length;++w)A[w]=255&S.charCodeAt(w);return A}l("setimmediate"),p.newBlob=function(S,A){p.checkSupport("blob");try{return new Blob([S],{type:A})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(S),w.getBlob(A)}catch{throw new Error("Bug : can't construct the Blob.")}}};var E={stringifyByChunk:function(S,A,w){var I=[],L=0,F=S.length;if(F<=w)return String.fromCharCode.apply(null,S);for(;L<F;)A==="array"||A==="nodebuffer"?I.push(String.fromCharCode.apply(null,S.slice(L,Math.min(L+w,F)))):I.push(String.fromCharCode.apply(null,S.subarray(L,Math.min(L+w,F)))),L+=w;return I.join("")},stringifyByChar:function(S){for(var A="",w=0;w<S.length;w++)A+=String.fromCharCode(S[w]);return A},applyCanBeUsed:{uint8array:(function(){try{return f.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return f.nodebuffer&&String.fromCharCode.apply(null,g.allocBuffer(1)).length===1}catch{return!1}})()}};function T(S){var A=65536,w=p.getTypeOf(S),I=!0;if(w==="uint8array"?I=E.applyCanBeUsed.uint8array:w==="nodebuffer"&&(I=E.applyCanBeUsed.nodebuffer),I)for(;1<A;)try{return E.stringifyByChunk(S,w,A)}catch{A=Math.floor(A/2)}return E.stringifyByChar(S)}function b(S,A){for(var w=0;w<S.length;w++)A[w]=S[w];return A}p.applyFromCharCode=T;var N={};N.string={string:d,array:function(S){return _(S,new Array(S.length))},arraybuffer:function(S){return N.string.uint8array(S).buffer},uint8array:function(S){return _(S,new Uint8Array(S.length))},nodebuffer:function(S){return _(S,g.allocBuffer(S.length))}},N.array={string:T,array:d,arraybuffer:function(S){return new Uint8Array(S).buffer},uint8array:function(S){return new Uint8Array(S)},nodebuffer:function(S){return g.newBufferFrom(S)}},N.arraybuffer={string:function(S){return T(new Uint8Array(S))},array:function(S){return b(new Uint8Array(S),new Array(S.byteLength))},arraybuffer:d,uint8array:function(S){return new Uint8Array(S)},nodebuffer:function(S){return g.newBufferFrom(new Uint8Array(S))}},N.uint8array={string:T,array:function(S){return b(S,new Array(S.length))},arraybuffer:function(S){return S.buffer},uint8array:d,nodebuffer:function(S){return g.newBufferFrom(S)}},N.nodebuffer={string:T,array:function(S){return b(S,new Array(S.length))},arraybuffer:function(S){return N.nodebuffer.uint8array(S).buffer},uint8array:function(S){return b(S,new Uint8Array(S.length))},nodebuffer:d},p.transformTo=function(S,A){if(A=A||"",!S)return A;p.checkSupport(S);var w=p.getTypeOf(A);return N[w][S](A)},p.resolve=function(S){for(var A=S.split("/"),w=[],I=0;I<A.length;I++){var L=A[I];L==="."||L===""&&I!==0&&I!==A.length-1||(L===".."?w.pop():w.push(L))}return w.join("/")},p.getTypeOf=function(S){return typeof S=="string"?"string":Object.prototype.toString.call(S)==="[object Array]"?"array":f.nodebuffer&&g.isBuffer(S)?"nodebuffer":f.uint8array&&S instanceof Uint8Array?"uint8array":f.arraybuffer&&S instanceof ArrayBuffer?"arraybuffer":void 0},p.checkSupport=function(S){if(!f[S.toLowerCase()])throw new Error(S+" is not supported by this platform")},p.MAX_VALUE_16BITS=65535,p.MAX_VALUE_32BITS=-1,p.pretty=function(S){var A,w,I="";for(w=0;w<(S||"").length;w++)I+="\\x"+((A=S.charCodeAt(w))<16?"0":"")+A.toString(16).toUpperCase();return I},p.delay=function(S,A,w){setImmediate(function(){S.apply(w||null,A||[])})},p.inherits=function(S,A){function w(){}w.prototype=A.prototype,S.prototype=new w},p.extend=function(){var S,A,w={};for(S=0;S<arguments.length;S++)for(A in arguments[S])Object.prototype.hasOwnProperty.call(arguments[S],A)&&w[A]===void 0&&(w[A]=arguments[S][A]);return w},p.prepareContent=function(S,A,w,I,L){return y.Promise.resolve(A).then(function(F){return f.blob&&(F instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(F))!==-1)&&typeof FileReader<"u"?new y.Promise(function(j,$){var P=new FileReader;P.onload=function(G){j(G.target.result)},P.onerror=function(G){$(G.target.error)},P.readAsArrayBuffer(F)}):F}).then(function(F){var j=p.getTypeOf(F);return j?(j==="arraybuffer"?F=p.transformTo("uint8array",F):j==="string"&&(L?F=m.decode(F):w&&I!==!0&&(F=(function($){return _($,f.uint8array?new Uint8Array($.length):new Array($.length))})(F))),F):y.Promise.reject(new Error("Can't read the data of '"+S+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,c,p){var f=l("./reader/readerFor"),m=l("./utils"),g=l("./signature"),y=l("./zipEntry"),d=l("./support");function _(E){this.files=[],this.loadOptions=E}_.prototype={checkSignature:function(E){if(!this.reader.readAndCheckSignature(E)){this.reader.index-=4;var T=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+m.pretty(T)+", expected "+m.pretty(E)+")")}},isSignature:function(E,T){var b=this.reader.index;this.reader.setIndex(E);var N=this.reader.readString(4)===T;return this.reader.setIndex(b),N},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var E=this.reader.readData(this.zipCommentLength),T=d.uint8array?"uint8array":"array",b=m.transformTo(T,E);this.zipComment=this.loadOptions.decodeFileName(b)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var E,T,b,N=this.zip64EndOfCentralSize-44;0<N;)E=this.reader.readInt(2),T=this.reader.readInt(4),b=this.reader.readData(T),this.zip64ExtensibleData[E]={id:E,length:T,value:b}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var E,T;for(E=0;E<this.files.length;E++)T=this.files[E],this.reader.setIndex(T.localHeaderOffset),this.checkSignature(g.LOCAL_FILE_HEADER),T.readLocalPart(this.reader),T.handleUTF8(),T.processAttributes()},readCentralDir:function(){var E;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);)(E=new y({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(E);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var E=this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END);if(E<0)throw this.isSignature(0,g.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(E);var T=E;if(this.checkSignature(g.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===m.MAX_VALUE_16BITS||this.diskWithCentralDirStart===m.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===m.MAX_VALUE_16BITS||this.centralDirRecords===m.MAX_VALUE_16BITS||this.centralDirSize===m.MAX_VALUE_32BITS||this.centralDirOffset===m.MAX_VALUE_32BITS){if(this.zip64=!0,(E=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(E),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,g.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var b=this.centralDirOffset+this.centralDirSize;this.zip64&&(b+=20,b+=12+this.zip64EndOfCentralSize);var N=T-b;if(0<N)this.isSignature(T,g.CENTRAL_FILE_HEADER)||(this.reader.zero=N);else if(N<0)throw new Error("Corrupted zip: missing "+Math.abs(N)+" bytes.")},prepareReader:function(E){this.reader=f(E)},load:function(E){this.prepareReader(E),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},c.exports=_},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,c,p){var f=l("./reader/readerFor"),m=l("./utils"),g=l("./compressedObject"),y=l("./crc32"),d=l("./utf8"),_=l("./compressions"),E=l("./support");function T(b,N){this.options=b,this.loadOptions=N}T.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(b){var N,S;if(b.skip(22),this.fileNameLength=b.readInt(2),S=b.readInt(2),this.fileName=b.readData(this.fileNameLength),b.skip(S),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((N=(function(A){for(var w in _)if(Object.prototype.hasOwnProperty.call(_,w)&&_[w].magic===A)return _[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+m.pretty(this.compressionMethod)+" unknown (inner file : "+m.transformTo("string",this.fileName)+")");this.decompressed=new g(this.compressedSize,this.uncompressedSize,this.crc32,N,b.readData(this.compressedSize))},readCentralPart:function(b){this.versionMadeBy=b.readInt(2),b.skip(2),this.bitFlag=b.readInt(2),this.compressionMethod=b.readString(2),this.date=b.readDate(),this.crc32=b.readInt(4),this.compressedSize=b.readInt(4),this.uncompressedSize=b.readInt(4);var N=b.readInt(2);if(this.extraFieldsLength=b.readInt(2),this.fileCommentLength=b.readInt(2),this.diskNumberStart=b.readInt(2),this.internalFileAttributes=b.readInt(2),this.externalFileAttributes=b.readInt(4),this.localHeaderOffset=b.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");b.skip(N),this.readExtraFields(b),this.parseZIP64ExtraField(b),this.fileComment=b.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var b=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),b==0&&(this.dosPermissions=63&this.externalFileAttributes),b==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var b=f(this.extraFields[1].value);this.uncompressedSize===m.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===m.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===m.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===m.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(b){var N,S,A,w=b.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});b.index+4<w;)N=b.readInt(2),S=b.readInt(2),A=b.readData(S),this.extraFields[N]={id:N,length:S,value:A};b.setIndex(w)},handleUTF8:function(){var b=E.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=d.utf8decode(this.fileName),this.fileCommentStr=d.utf8decode(this.fileComment);else{var N=this.findExtraFieldUnicodePath();if(N!==null)this.fileNameStr=N;else{var S=m.transformTo(b,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(S)}var A=this.findExtraFieldUnicodeComment();if(A!==null)this.fileCommentStr=A;else{var w=m.transformTo(b,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var b=this.extraFields[28789];if(b){var N=f(b.value);return N.readInt(1)!==1||y(this.fileName)!==N.readInt(4)?null:d.utf8decode(N.readData(b.length-5))}return null},findExtraFieldUnicodeComment:function(){var b=this.extraFields[25461];if(b){var N=f(b.value);return N.readInt(1)!==1||y(this.fileComment)!==N.readInt(4)?null:d.utf8decode(N.readData(b.length-5))}return null}},c.exports=T},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,c,p){function f(N,S,A){this.name=N,this.dir=A.dir,this.date=A.date,this.comment=A.comment,this.unixPermissions=A.unixPermissions,this.dosPermissions=A.dosPermissions,this._data=S,this._dataBinary=A.binary,this.options={compression:A.compression,compressionOptions:A.compressionOptions}}var m=l("./stream/StreamHelper"),g=l("./stream/DataWorker"),y=l("./utf8"),d=l("./compressedObject"),_=l("./stream/GenericWorker");f.prototype={internalStream:function(N){var S=null,A="string";try{if(!N)throw new Error("No output type specified.");var w=(A=N.toLowerCase())==="string"||A==="text";A!=="binarystring"&&A!=="text"||(A="string"),S=this._decompressWorker();var I=!this._dataBinary;I&&!w&&(S=S.pipe(new y.Utf8EncodeWorker)),!I&&w&&(S=S.pipe(new y.Utf8DecodeWorker))}catch(L){(S=new _("error")).error(L)}return new m(S,A,"")},async:function(N,S){return this.internalStream(N).accumulate(S)},nodeStream:function(N,S){return this.internalStream(N||"nodebuffer").toNodejsStream(S)},_compressWorker:function(N,S){if(this._data instanceof d&&this._data.compression.magic===N.magic)return this._data.getCompressedWorker();var A=this._decompressWorker();return this._dataBinary||(A=A.pipe(new y.Utf8EncodeWorker)),d.createWorkerFrom(A,N,S)},_decompressWorker:function(){return this._data instanceof d?this._data.getContentWorker():this._data instanceof _?this._data:new g(this._data)}};for(var E=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],T=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},b=0;b<E.length;b++)f.prototype[E[b]]=T;c.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,c,p){(function(f){var m,g,y=f.MutationObserver||f.WebKitMutationObserver;if(y){var d=0,_=new y(N),E=f.document.createTextNode("");_.observe(E,{characterData:!0}),m=function(){E.data=d=++d%2}}else if(f.setImmediate||f.MessageChannel===void 0)m="document"in f&&"onreadystatechange"in f.document.createElement("script")?function(){var S=f.document.createElement("script");S.onreadystatechange=function(){N(),S.onreadystatechange=null,S.parentNode.removeChild(S),S=null},f.document.documentElement.appendChild(S)}:function(){setTimeout(N,0)};else{var T=new f.MessageChannel;T.port1.onmessage=N,m=function(){T.port2.postMessage(0)}}var b=[];function N(){var S,A;g=!0;for(var w=b.length;w;){for(A=b,b=[],S=-1;++S<w;)A[S]();w=b.length}g=!1}c.exports=function(S){b.push(S)!==1||g||m()}}).call(this,typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,c,p){var f=l("immediate");function m(){}var g={},y=["REJECTED"],d=["FULFILLED"],_=["PENDING"];function E(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=_,this.queue=[],this.outcome=void 0,w!==m&&S(this,w)}function T(w,I,L){this.promise=w,typeof I=="function"&&(this.onFulfilled=I,this.callFulfilled=this.otherCallFulfilled),typeof L=="function"&&(this.onRejected=L,this.callRejected=this.otherCallRejected)}function b(w,I,L){f(function(){var F;try{F=I(L)}catch(j){return g.reject(w,j)}F===w?g.reject(w,new TypeError("Cannot resolve promise with itself")):g.resolve(w,F)})}function N(w){var I=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof I=="function")return function(){I.apply(w,arguments)}}function S(w,I){var L=!1;function F(P){L||(L=!0,g.reject(w,P))}function j(P){L||(L=!0,g.resolve(w,P))}var $=A(function(){I(j,F)});$.status==="error"&&F($.value)}function A(w,I){var L={};try{L.value=w(I),L.status="success"}catch(F){L.status="error",L.value=F}return L}(c.exports=E).prototype.finally=function(w){if(typeof w!="function")return this;var I=this.constructor;return this.then(function(L){return I.resolve(w()).then(function(){return L})},function(L){return I.resolve(w()).then(function(){throw L})})},E.prototype.catch=function(w){return this.then(null,w)},E.prototype.then=function(w,I){if(typeof w!="function"&&this.state===d||typeof I!="function"&&this.state===y)return this;var L=new this.constructor(m);return this.state!==_?b(L,this.state===d?w:I,this.outcome):this.queue.push(new T(L,w,I)),L},T.prototype.callFulfilled=function(w){g.resolve(this.promise,w)},T.prototype.otherCallFulfilled=function(w){b(this.promise,this.onFulfilled,w)},T.prototype.callRejected=function(w){g.reject(this.promise,w)},T.prototype.otherCallRejected=function(w){b(this.promise,this.onRejected,w)},g.resolve=function(w,I){var L=A(N,I);if(L.status==="error")return g.reject(w,L.value);var F=L.value;if(F)S(w,F);else{w.state=d,w.outcome=I;for(var j=-1,$=w.queue.length;++j<$;)w.queue[j].callFulfilled(I)}return w},g.reject=function(w,I){w.state=y,w.outcome=I;for(var L=-1,F=w.queue.length;++L<F;)w.queue[L].callRejected(I);return w},E.resolve=function(w){return w instanceof this?w:g.resolve(new this(m),w)},E.reject=function(w){var I=new this(m);return g.reject(I,w)},E.all=function(w){var I=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,F=!1;if(!L)return this.resolve([]);for(var j=new Array(L),$=0,P=-1,G=new this(m);++P<L;)U(w[P],P);return G;function U(re,ee){I.resolve(re).then(function(D){j[ee]=D,++$!==L||F||(F=!0,g.resolve(G,j))},function(D){F||(F=!0,g.reject(G,D))})}},E.race=function(w){var I=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,F=!1;if(!L)return this.resolve([]);for(var j=-1,$=new this(m);++j<L;)P=w[j],I.resolve(P).then(function(G){F||(F=!0,g.resolve($,G))},function(G){F||(F=!0,g.reject($,G))});var P;return $}},{immediate:36}],38:[function(l,c,p){var f={};(0,l("./lib/utils/common").assign)(f,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),c.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,c,p){var f=l("./zlib/deflate"),m=l("./utils/common"),g=l("./utils/strings"),y=l("./zlib/messages"),d=l("./zlib/zstream"),_=Object.prototype.toString,E=0,T=-1,b=0,N=8;function S(w){if(!(this instanceof S))return new S(w);this.options=m.assign({level:T,method:N,chunkSize:16384,windowBits:15,memLevel:8,strategy:b,to:""},w||{});var I=this.options;I.raw&&0<I.windowBits?I.windowBits=-I.windowBits:I.gzip&&0<I.windowBits&&I.windowBits<16&&(I.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var L=f.deflateInit2(this.strm,I.level,I.method,I.windowBits,I.memLevel,I.strategy);if(L!==E)throw new Error(y[L]);if(I.header&&f.deflateSetHeader(this.strm,I.header),I.dictionary){var F;if(F=typeof I.dictionary=="string"?g.string2buf(I.dictionary):_.call(I.dictionary)==="[object ArrayBuffer]"?new Uint8Array(I.dictionary):I.dictionary,(L=f.deflateSetDictionary(this.strm,F))!==E)throw new Error(y[L]);this._dict_set=!0}}function A(w,I){var L=new S(I);if(L.push(w,!0),L.err)throw L.msg||y[L.err];return L.result}S.prototype.push=function(w,I){var L,F,j=this.strm,$=this.options.chunkSize;if(this.ended)return!1;F=I===~~I?I:I===!0?4:0,typeof w=="string"?j.input=g.string2buf(w):_.call(w)==="[object ArrayBuffer]"?j.input=new Uint8Array(w):j.input=w,j.next_in=0,j.avail_in=j.input.length;do{if(j.avail_out===0&&(j.output=new m.Buf8($),j.next_out=0,j.avail_out=$),(L=f.deflate(j,F))!==1&&L!==E)return this.onEnd(L),!(this.ended=!0);j.avail_out!==0&&(j.avail_in!==0||F!==4&&F!==2)||(this.options.to==="string"?this.onData(g.buf2binstring(m.shrinkBuf(j.output,j.next_out))):this.onData(m.shrinkBuf(j.output,j.next_out)))}while((0<j.avail_in||j.avail_out===0)&&L!==1);return F===4?(L=f.deflateEnd(this.strm),this.onEnd(L),this.ended=!0,L===E):F!==2||(this.onEnd(E),!(j.avail_out=0))},S.prototype.onData=function(w){this.chunks.push(w)},S.prototype.onEnd=function(w){w===E&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},p.Deflate=S,p.deflate=A,p.deflateRaw=function(w,I){return(I=I||{}).raw=!0,A(w,I)},p.gzip=function(w,I){return(I=I||{}).gzip=!0,A(w,I)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,c,p){var f=l("./zlib/inflate"),m=l("./utils/common"),g=l("./utils/strings"),y=l("./zlib/constants"),d=l("./zlib/messages"),_=l("./zlib/zstream"),E=l("./zlib/gzheader"),T=Object.prototype.toString;function b(S){if(!(this instanceof b))return new b(S);this.options=m.assign({chunkSize:16384,windowBits:0,to:""},S||{});var A=this.options;A.raw&&0<=A.windowBits&&A.windowBits<16&&(A.windowBits=-A.windowBits,A.windowBits===0&&(A.windowBits=-15)),!(0<=A.windowBits&&A.windowBits<16)||S&&S.windowBits||(A.windowBits+=32),15<A.windowBits&&A.windowBits<48&&(15&A.windowBits)==0&&(A.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _,this.strm.avail_out=0;var w=f.inflateInit2(this.strm,A.windowBits);if(w!==y.Z_OK)throw new Error(d[w]);this.header=new E,f.inflateGetHeader(this.strm,this.header)}function N(S,A){var w=new b(A);if(w.push(S,!0),w.err)throw w.msg||d[w.err];return w.result}b.prototype.push=function(S,A){var w,I,L,F,j,$,P=this.strm,G=this.options.chunkSize,U=this.options.dictionary,re=!1;if(this.ended)return!1;I=A===~~A?A:A===!0?y.Z_FINISH:y.Z_NO_FLUSH,typeof S=="string"?P.input=g.binstring2buf(S):T.call(S)==="[object ArrayBuffer]"?P.input=new Uint8Array(S):P.input=S,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new m.Buf8(G),P.next_out=0,P.avail_out=G),(w=f.inflate(P,y.Z_NO_FLUSH))===y.Z_NEED_DICT&&U&&($=typeof U=="string"?g.string2buf(U):T.call(U)==="[object ArrayBuffer]"?new Uint8Array(U):U,w=f.inflateSetDictionary(this.strm,$)),w===y.Z_BUF_ERROR&&re===!0&&(w=y.Z_OK,re=!1),w!==y.Z_STREAM_END&&w!==y.Z_OK)return this.onEnd(w),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&w!==y.Z_STREAM_END&&(P.avail_in!==0||I!==y.Z_FINISH&&I!==y.Z_SYNC_FLUSH)||(this.options.to==="string"?(L=g.utf8border(P.output,P.next_out),F=P.next_out-L,j=g.buf2string(P.output,L),P.next_out=F,P.avail_out=G-F,F&&m.arraySet(P.output,P.output,L,F,0),this.onData(j)):this.onData(m.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(re=!0)}while((0<P.avail_in||P.avail_out===0)&&w!==y.Z_STREAM_END);return w===y.Z_STREAM_END&&(I=y.Z_FINISH),I===y.Z_FINISH?(w=f.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===y.Z_OK):I!==y.Z_SYNC_FLUSH||(this.onEnd(y.Z_OK),!(P.avail_out=0))},b.prototype.onData=function(S){this.chunks.push(S)},b.prototype.onEnd=function(S){S===y.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},p.Inflate=b,p.inflate=N,p.inflateRaw=function(S,A){return(A=A||{}).raw=!0,N(S,A)},p.ungzip=N},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,c,p){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";p.assign=function(y){for(var d=Array.prototype.slice.call(arguments,1);d.length;){var _=d.shift();if(_){if(typeof _!="object")throw new TypeError(_+"must be non-object");for(var E in _)_.hasOwnProperty(E)&&(y[E]=_[E])}}return y},p.shrinkBuf=function(y,d){return y.length===d?y:y.subarray?y.subarray(0,d):(y.length=d,y)};var m={arraySet:function(y,d,_,E,T){if(d.subarray&&y.subarray)y.set(d.subarray(_,_+E),T);else for(var b=0;b<E;b++)y[T+b]=d[_+b]},flattenChunks:function(y){var d,_,E,T,b,N;for(d=E=0,_=y.length;d<_;d++)E+=y[d].length;for(N=new Uint8Array(E),d=T=0,_=y.length;d<_;d++)b=y[d],N.set(b,T),T+=b.length;return N}},g={arraySet:function(y,d,_,E,T){for(var b=0;b<E;b++)y[T+b]=d[_+b]},flattenChunks:function(y){return[].concat.apply([],y)}};p.setTyped=function(y){y?(p.Buf8=Uint8Array,p.Buf16=Uint16Array,p.Buf32=Int32Array,p.assign(p,m)):(p.Buf8=Array,p.Buf16=Array,p.Buf32=Array,p.assign(p,g))},p.setTyped(f)},{}],42:[function(l,c,p){var f=l("./common"),m=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch{m=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{g=!1}for(var y=new f.Buf8(256),d=0;d<256;d++)y[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;function _(E,T){if(T<65537&&(E.subarray&&g||!E.subarray&&m))return String.fromCharCode.apply(null,f.shrinkBuf(E,T));for(var b="",N=0;N<T;N++)b+=String.fromCharCode(E[N]);return b}y[254]=y[254]=1,p.string2buf=function(E){var T,b,N,S,A,w=E.length,I=0;for(S=0;S<w;S++)(64512&(b=E.charCodeAt(S)))==55296&&S+1<w&&(64512&(N=E.charCodeAt(S+1)))==56320&&(b=65536+(b-55296<<10)+(N-56320),S++),I+=b<128?1:b<2048?2:b<65536?3:4;for(T=new f.Buf8(I),S=A=0;A<I;S++)(64512&(b=E.charCodeAt(S)))==55296&&S+1<w&&(64512&(N=E.charCodeAt(S+1)))==56320&&(b=65536+(b-55296<<10)+(N-56320),S++),b<128?T[A++]=b:(b<2048?T[A++]=192|b>>>6:(b<65536?T[A++]=224|b>>>12:(T[A++]=240|b>>>18,T[A++]=128|b>>>12&63),T[A++]=128|b>>>6&63),T[A++]=128|63&b);return T},p.buf2binstring=function(E){return _(E,E.length)},p.binstring2buf=function(E){for(var T=new f.Buf8(E.length),b=0,N=T.length;b<N;b++)T[b]=E.charCodeAt(b);return T},p.buf2string=function(E,T){var b,N,S,A,w=T||E.length,I=new Array(2*w);for(b=N=0;b<w;)if((S=E[b++])<128)I[N++]=S;else if(4<(A=y[S]))I[N++]=65533,b+=A-1;else{for(S&=A===2?31:A===3?15:7;1<A&&b<w;)S=S<<6|63&E[b++],A--;1<A?I[N++]=65533:S<65536?I[N++]=S:(S-=65536,I[N++]=55296|S>>10&1023,I[N++]=56320|1023&S)}return _(I,N)},p.utf8border=function(E,T){var b;for((T=T||E.length)>E.length&&(T=E.length),b=T-1;0<=b&&(192&E[b])==128;)b--;return b<0||b===0?T:b+y[E[b]]>T?b:T}},{"./common":41}],43:[function(l,c,p){c.exports=function(f,m,g,y){for(var d=65535&f|0,_=f>>>16&65535|0,E=0;g!==0;){for(g-=E=2e3<g?2e3:g;_=_+(d=d+m[y++]|0)|0,--E;);d%=65521,_%=65521}return d|_<<16|0}},{}],44:[function(l,c,p){c.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,c,p){var f=(function(){for(var m,g=[],y=0;y<256;y++){m=y;for(var d=0;d<8;d++)m=1&m?3988292384^m>>>1:m>>>1;g[y]=m}return g})();c.exports=function(m,g,y,d){var _=f,E=d+y;m^=-1;for(var T=d;T<E;T++)m=m>>>8^_[255&(m^g[T])];return-1^m}},{}],46:[function(l,c,p){var f,m=l("../utils/common"),g=l("./trees"),y=l("./adler32"),d=l("./crc32"),_=l("./messages"),E=0,T=4,b=0,N=-2,S=-1,A=4,w=2,I=8,L=9,F=286,j=30,$=19,P=2*F+1,G=15,U=3,re=258,ee=re+U+1,D=42,W=113,x=1,X=2,V=3,H=4;function fe(v,ue){return v.msg=_[ue],ue}function te(v){return(v<<1)-(4<v?9:0)}function ye(v){for(var ue=v.length;0<=--ue;)v[ue]=0}function C(v){var ue=v.state,ae=ue.pending;ae>v.avail_out&&(ae=v.avail_out),ae!==0&&(m.arraySet(v.output,ue.pending_buf,ue.pending_out,ae,v.next_out),v.next_out+=ae,ue.pending_out+=ae,v.total_out+=ae,v.avail_out-=ae,ue.pending-=ae,ue.pending===0&&(ue.pending_out=0))}function k(v,ue){g._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,ue),v.block_start=v.strstart,C(v.strm)}function ie(v,ue){v.pending_buf[v.pending++]=ue}function se(v,ue){v.pending_buf[v.pending++]=ue>>>8&255,v.pending_buf[v.pending++]=255&ue}function oe(v,ue){var ae,z,O=v.max_chain_length,q=v.strstart,he=v.prev_length,pe=v.nice_match,K=v.strstart>v.w_size-ee?v.strstart-(v.w_size-ee):0,ge=v.window,be=v.w_mask,ve=v.prev,_e=v.strstart+re,qe=ge[q+he-1],Le=ge[q+he];v.prev_length>=v.good_match&&(O>>=2),pe>v.lookahead&&(pe=v.lookahead);do if(ge[(ae=ue)+he]===Le&&ge[ae+he-1]===qe&&ge[ae]===ge[q]&&ge[++ae]===ge[q+1]){q+=2,ae++;do;while(ge[++q]===ge[++ae]&&ge[++q]===ge[++ae]&&ge[++q]===ge[++ae]&&ge[++q]===ge[++ae]&&ge[++q]===ge[++ae]&&ge[++q]===ge[++ae]&&ge[++q]===ge[++ae]&&ge[++q]===ge[++ae]&&q<_e);if(z=re-(_e-q),q=_e-re,he<z){if(v.match_start=ue,pe<=(he=z))break;qe=ge[q+he-1],Le=ge[q+he]}}while((ue=ve[ue&be])>K&&--O!=0);return he<=v.lookahead?he:v.lookahead}function Ae(v){var ue,ae,z,O,q,he,pe,K,ge,be,ve=v.w_size;do{if(O=v.window_size-v.lookahead-v.strstart,v.strstart>=ve+(ve-ee)){for(m.arraySet(v.window,v.window,ve,ve,0),v.match_start-=ve,v.strstart-=ve,v.block_start-=ve,ue=ae=v.hash_size;z=v.head[--ue],v.head[ue]=ve<=z?z-ve:0,--ae;);for(ue=ae=ve;z=v.prev[--ue],v.prev[ue]=ve<=z?z-ve:0,--ae;);O+=ve}if(v.strm.avail_in===0)break;if(he=v.strm,pe=v.window,K=v.strstart+v.lookahead,ge=O,be=void 0,be=he.avail_in,ge<be&&(be=ge),ae=be===0?0:(he.avail_in-=be,m.arraySet(pe,he.input,he.next_in,be,K),he.state.wrap===1?he.adler=y(he.adler,pe,be,K):he.state.wrap===2&&(he.adler=d(he.adler,pe,be,K)),he.next_in+=be,he.total_in+=be,be),v.lookahead+=ae,v.lookahead+v.insert>=U)for(q=v.strstart-v.insert,v.ins_h=v.window[q],v.ins_h=(v.ins_h<<v.hash_shift^v.window[q+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[q+U-1])&v.hash_mask,v.prev[q&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=q,q++,v.insert--,!(v.lookahead+v.insert<U)););}while(v.lookahead<ee&&v.strm.avail_in!==0)}function Ie(v,ue){for(var ae,z;;){if(v.lookahead<ee){if(Ae(v),v.lookahead<ee&&ue===E)return x;if(v.lookahead===0)break}if(ae=0,v.lookahead>=U&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+U-1])&v.hash_mask,ae=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),ae!==0&&v.strstart-ae<=v.w_size-ee&&(v.match_length=oe(v,ae)),v.match_length>=U)if(z=g._tr_tally(v,v.strstart-v.match_start,v.match_length-U),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=U){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+U-1])&v.hash_mask,ae=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else z=g._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(z&&(k(v,!1),v.strm.avail_out===0))return x}return v.insert=v.strstart<U-1?v.strstart:U-1,ue===T?(k(v,!0),v.strm.avail_out===0?V:H):v.last_lit&&(k(v,!1),v.strm.avail_out===0)?x:X}function Ne(v,ue){for(var ae,z,O;;){if(v.lookahead<ee){if(Ae(v),v.lookahead<ee&&ue===E)return x;if(v.lookahead===0)break}if(ae=0,v.lookahead>=U&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+U-1])&v.hash_mask,ae=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=U-1,ae!==0&&v.prev_length<v.max_lazy_match&&v.strstart-ae<=v.w_size-ee&&(v.match_length=oe(v,ae),v.match_length<=5&&(v.strategy===1||v.match_length===U&&4096<v.strstart-v.match_start)&&(v.match_length=U-1)),v.prev_length>=U&&v.match_length<=v.prev_length){for(O=v.strstart+v.lookahead-U,z=g._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-U),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=O&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+U-1])&v.hash_mask,ae=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=U-1,v.strstart++,z&&(k(v,!1),v.strm.avail_out===0))return x}else if(v.match_available){if((z=g._tr_tally(v,0,v.window[v.strstart-1]))&&k(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return x}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(z=g._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<U-1?v.strstart:U-1,ue===T?(k(v,!0),v.strm.avail_out===0?V:H):v.last_lit&&(k(v,!1),v.strm.avail_out===0)?x:X}function Re(v,ue,ae,z,O){this.good_length=v,this.max_lazy=ue,this.nice_length=ae,this.max_chain=z,this.func=O}function nt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=I,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new m.Buf16(2*P),this.dyn_dtree=new m.Buf16(2*(2*j+1)),this.bl_tree=new m.Buf16(2*(2*$+1)),ye(this.dyn_ltree),ye(this.dyn_dtree),ye(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new m.Buf16(G+1),this.heap=new m.Buf16(2*F+1),ye(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new m.Buf16(2*F+1),ye(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Je(v){var ue;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=w,(ue=v.state).pending=0,ue.pending_out=0,ue.wrap<0&&(ue.wrap=-ue.wrap),ue.status=ue.wrap?D:W,v.adler=ue.wrap===2?0:1,ue.last_flush=E,g._tr_init(ue),b):fe(v,N)}function wt(v){var ue=Je(v);return ue===b&&(function(ae){ae.window_size=2*ae.w_size,ye(ae.head),ae.max_lazy_match=f[ae.level].max_lazy,ae.good_match=f[ae.level].good_length,ae.nice_match=f[ae.level].nice_length,ae.max_chain_length=f[ae.level].max_chain,ae.strstart=0,ae.block_start=0,ae.lookahead=0,ae.insert=0,ae.match_length=ae.prev_length=U-1,ae.match_available=0,ae.ins_h=0})(v.state),ue}function Rt(v,ue,ae,z,O,q){if(!v)return N;var he=1;if(ue===S&&(ue=6),z<0?(he=0,z=-z):15<z&&(he=2,z-=16),O<1||L<O||ae!==I||z<8||15<z||ue<0||9<ue||q<0||A<q)return fe(v,N);z===8&&(z=9);var pe=new nt;return(v.state=pe).strm=v,pe.wrap=he,pe.gzhead=null,pe.w_bits=z,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=O+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+U-1)/U),pe.window=new m.Buf8(2*pe.w_size),pe.head=new m.Buf16(pe.hash_size),pe.prev=new m.Buf16(pe.w_size),pe.lit_bufsize=1<<O+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new m.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=ue,pe.strategy=q,pe.method=ae,wt(v)}f=[new Re(0,0,0,0,function(v,ue){var ae=65535;for(ae>v.pending_buf_size-5&&(ae=v.pending_buf_size-5);;){if(v.lookahead<=1){if(Ae(v),v.lookahead===0&&ue===E)return x;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var z=v.block_start+ae;if((v.strstart===0||v.strstart>=z)&&(v.lookahead=v.strstart-z,v.strstart=z,k(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-ee&&(k(v,!1),v.strm.avail_out===0))return x}return v.insert=0,ue===T?(k(v,!0),v.strm.avail_out===0?V:H):(v.strstart>v.block_start&&(k(v,!1),v.strm.avail_out),x)}),new Re(4,4,8,4,Ie),new Re(4,5,16,8,Ie),new Re(4,6,32,32,Ie),new Re(4,4,16,16,Ne),new Re(8,16,32,32,Ne),new Re(8,16,128,128,Ne),new Re(8,32,128,256,Ne),new Re(32,128,258,1024,Ne),new Re(32,258,258,4096,Ne)],p.deflateInit=function(v,ue){return Rt(v,ue,I,15,8,0)},p.deflateInit2=Rt,p.deflateReset=wt,p.deflateResetKeep=Je,p.deflateSetHeader=function(v,ue){return v&&v.state?v.state.wrap!==2?N:(v.state.gzhead=ue,b):N},p.deflate=function(v,ue){var ae,z,O,q;if(!v||!v.state||5<ue||ue<0)return v?fe(v,N):N;if(z=v.state,!v.output||!v.input&&v.avail_in!==0||z.status===666&&ue!==T)return fe(v,v.avail_out===0?-5:N);if(z.strm=v,ae=z.last_flush,z.last_flush=ue,z.status===D)if(z.wrap===2)v.adler=0,ie(z,31),ie(z,139),ie(z,8),z.gzhead?(ie(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),ie(z,255&z.gzhead.time),ie(z,z.gzhead.time>>8&255),ie(z,z.gzhead.time>>16&255),ie(z,z.gzhead.time>>24&255),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(ie(z,255&z.gzhead.extra.length),ie(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(v.adler=d(v.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,0),ie(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),ie(z,3),z.status=W);else{var he=I+(z.w_bits-8<<4)<<8;he|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(he|=32),he+=31-he%31,z.status=W,se(z,he),z.strstart!==0&&(se(z,v.adler>>>16),se(z,65535&v.adler)),v.adler=1}if(z.status===69)if(z.gzhead.extra){for(O=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>O&&(v.adler=d(v.adler,z.pending_buf,z.pending-O,O)),C(v),O=z.pending,z.pending!==z.pending_buf_size));)ie(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>O&&(v.adler=d(v.adler,z.pending_buf,z.pending-O,O)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(v.adler=d(v.adler,z.pending_buf,z.pending-O,O)),C(v),O=z.pending,z.pending===z.pending_buf_size)){q=1;break}q=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,ie(z,q)}while(q!==0);z.gzhead.hcrc&&z.pending>O&&(v.adler=d(v.adler,z.pending_buf,z.pending-O,O)),q===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){O=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>O&&(v.adler=d(v.adler,z.pending_buf,z.pending-O,O)),C(v),O=z.pending,z.pending===z.pending_buf_size)){q=1;break}q=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,ie(z,q)}while(q!==0);z.gzhead.hcrc&&z.pending>O&&(v.adler=d(v.adler,z.pending_buf,z.pending-O,O)),q===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&C(v),z.pending+2<=z.pending_buf_size&&(ie(z,255&v.adler),ie(z,v.adler>>8&255),v.adler=0,z.status=W)):z.status=W),z.pending!==0){if(C(v),v.avail_out===0)return z.last_flush=-1,b}else if(v.avail_in===0&&te(ue)<=te(ae)&&ue!==T)return fe(v,-5);if(z.status===666&&v.avail_in!==0)return fe(v,-5);if(v.avail_in!==0||z.lookahead!==0||ue!==E&&z.status!==666){var pe=z.strategy===2?(function(K,ge){for(var be;;){if(K.lookahead===0&&(Ae(K),K.lookahead===0)){if(ge===E)return x;break}if(K.match_length=0,be=g._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++,be&&(k(K,!1),K.strm.avail_out===0))return x}return K.insert=0,ge===T?(k(K,!0),K.strm.avail_out===0?V:H):K.last_lit&&(k(K,!1),K.strm.avail_out===0)?x:X})(z,ue):z.strategy===3?(function(K,ge){for(var be,ve,_e,qe,Le=K.window;;){if(K.lookahead<=re){if(Ae(K),K.lookahead<=re&&ge===E)return x;if(K.lookahead===0)break}if(K.match_length=0,K.lookahead>=U&&0<K.strstart&&(ve=Le[_e=K.strstart-1])===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]){qe=K.strstart+re;do;while(ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&ve===Le[++_e]&&_e<qe);K.match_length=re-(qe-_e),K.match_length>K.lookahead&&(K.match_length=K.lookahead)}if(K.match_length>=U?(be=g._tr_tally(K,1,K.match_length-U),K.lookahead-=K.match_length,K.strstart+=K.match_length,K.match_length=0):(be=g._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++),be&&(k(K,!1),K.strm.avail_out===0))return x}return K.insert=0,ge===T?(k(K,!0),K.strm.avail_out===0?V:H):K.last_lit&&(k(K,!1),K.strm.avail_out===0)?x:X})(z,ue):f[z.level].func(z,ue);if(pe!==V&&pe!==H||(z.status=666),pe===x||pe===V)return v.avail_out===0&&(z.last_flush=-1),b;if(pe===X&&(ue===1?g._tr_align(z):ue!==5&&(g._tr_stored_block(z,0,0,!1),ue===3&&(ye(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),C(v),v.avail_out===0))return z.last_flush=-1,b}return ue!==T?b:z.wrap<=0?1:(z.wrap===2?(ie(z,255&v.adler),ie(z,v.adler>>8&255),ie(z,v.adler>>16&255),ie(z,v.adler>>24&255),ie(z,255&v.total_in),ie(z,v.total_in>>8&255),ie(z,v.total_in>>16&255),ie(z,v.total_in>>24&255)):(se(z,v.adler>>>16),se(z,65535&v.adler)),C(v),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?b:1)},p.deflateEnd=function(v){var ue;return v&&v.state?(ue=v.state.status)!==D&&ue!==69&&ue!==73&&ue!==91&&ue!==103&&ue!==W&&ue!==666?fe(v,N):(v.state=null,ue===W?fe(v,-3):b):N},p.deflateSetDictionary=function(v,ue){var ae,z,O,q,he,pe,K,ge,be=ue.length;if(!v||!v.state||(q=(ae=v.state).wrap)===2||q===1&&ae.status!==D||ae.lookahead)return N;for(q===1&&(v.adler=y(v.adler,ue,be,0)),ae.wrap=0,be>=ae.w_size&&(q===0&&(ye(ae.head),ae.strstart=0,ae.block_start=0,ae.insert=0),ge=new m.Buf8(ae.w_size),m.arraySet(ge,ue,be-ae.w_size,ae.w_size,0),ue=ge,be=ae.w_size),he=v.avail_in,pe=v.next_in,K=v.input,v.avail_in=be,v.next_in=0,v.input=ue,Ae(ae);ae.lookahead>=U;){for(z=ae.strstart,O=ae.lookahead-(U-1);ae.ins_h=(ae.ins_h<<ae.hash_shift^ae.window[z+U-1])&ae.hash_mask,ae.prev[z&ae.w_mask]=ae.head[ae.ins_h],ae.head[ae.ins_h]=z,z++,--O;);ae.strstart=z,ae.lookahead=U-1,Ae(ae)}return ae.strstart+=ae.lookahead,ae.block_start=ae.strstart,ae.insert=ae.lookahead,ae.lookahead=0,ae.match_length=ae.prev_length=U-1,ae.match_available=0,v.next_in=pe,v.input=K,v.avail_in=he,ae.wrap=q,b},p.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,c,p){c.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,c,p){c.exports=function(f,m){var g,y,d,_,E,T,b,N,S,A,w,I,L,F,j,$,P,G,U,re,ee,D,W,x,X;g=f.state,y=f.next_in,x=f.input,d=y+(f.avail_in-5),_=f.next_out,X=f.output,E=_-(m-f.avail_out),T=_+(f.avail_out-257),b=g.dmax,N=g.wsize,S=g.whave,A=g.wnext,w=g.window,I=g.hold,L=g.bits,F=g.lencode,j=g.distcode,$=(1<<g.lenbits)-1,P=(1<<g.distbits)-1;e:do{L<15&&(I+=x[y++]<<L,L+=8,I+=x[y++]<<L,L+=8),G=F[I&$];t:for(;;){if(I>>>=U=G>>>24,L-=U,(U=G>>>16&255)===0)X[_++]=65535&G;else{if(!(16&U)){if((64&U)==0){G=F[(65535&G)+(I&(1<<U)-1)];continue t}if(32&U){g.mode=12;break e}f.msg="invalid literal/length code",g.mode=30;break e}re=65535&G,(U&=15)&&(L<U&&(I+=x[y++]<<L,L+=8),re+=I&(1<<U)-1,I>>>=U,L-=U),L<15&&(I+=x[y++]<<L,L+=8,I+=x[y++]<<L,L+=8),G=j[I&P];n:for(;;){if(I>>>=U=G>>>24,L-=U,!(16&(U=G>>>16&255))){if((64&U)==0){G=j[(65535&G)+(I&(1<<U)-1)];continue n}f.msg="invalid distance code",g.mode=30;break e}if(ee=65535&G,L<(U&=15)&&(I+=x[y++]<<L,(L+=8)<U&&(I+=x[y++]<<L,L+=8)),b<(ee+=I&(1<<U)-1)){f.msg="invalid distance too far back",g.mode=30;break e}if(I>>>=U,L-=U,(U=_-E)<ee){if(S<(U=ee-U)&&g.sane){f.msg="invalid distance too far back",g.mode=30;break e}if(W=w,(D=0)===A){if(D+=N-U,U<re){for(re-=U;X[_++]=w[D++],--U;);D=_-ee,W=X}}else if(A<U){if(D+=N+A-U,(U-=A)<re){for(re-=U;X[_++]=w[D++],--U;);if(D=0,A<re){for(re-=U=A;X[_++]=w[D++],--U;);D=_-ee,W=X}}}else if(D+=A-U,U<re){for(re-=U;X[_++]=w[D++],--U;);D=_-ee,W=X}for(;2<re;)X[_++]=W[D++],X[_++]=W[D++],X[_++]=W[D++],re-=3;re&&(X[_++]=W[D++],1<re&&(X[_++]=W[D++]))}else{for(D=_-ee;X[_++]=X[D++],X[_++]=X[D++],X[_++]=X[D++],2<(re-=3););re&&(X[_++]=X[D++],1<re&&(X[_++]=X[D++]))}break}}break}}while(y<d&&_<T);y-=re=L>>3,I&=(1<<(L-=re<<3))-1,f.next_in=y,f.next_out=_,f.avail_in=y<d?d-y+5:5-(y-d),f.avail_out=_<T?T-_+257:257-(_-T),g.hold=I,g.bits=L}},{}],49:[function(l,c,p){var f=l("../utils/common"),m=l("./adler32"),g=l("./crc32"),y=l("./inffast"),d=l("./inftrees"),_=1,E=2,T=0,b=-2,N=1,S=852,A=592;function w(D){return(D>>>24&255)+(D>>>8&65280)+((65280&D)<<8)+((255&D)<<24)}function I(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function L(D){var W;return D&&D.state?(W=D.state,D.total_in=D.total_out=W.total=0,D.msg="",W.wrap&&(D.adler=1&W.wrap),W.mode=N,W.last=0,W.havedict=0,W.dmax=32768,W.head=null,W.hold=0,W.bits=0,W.lencode=W.lendyn=new f.Buf32(S),W.distcode=W.distdyn=new f.Buf32(A),W.sane=1,W.back=-1,T):b}function F(D){var W;return D&&D.state?((W=D.state).wsize=0,W.whave=0,W.wnext=0,L(D)):b}function j(D,W){var x,X;return D&&D.state?(X=D.state,W<0?(x=0,W=-W):(x=1+(W>>4),W<48&&(W&=15)),W&&(W<8||15<W)?b:(X.window!==null&&X.wbits!==W&&(X.window=null),X.wrap=x,X.wbits=W,F(D))):b}function $(D,W){var x,X;return D?(X=new I,(D.state=X).window=null,(x=j(D,W))!==T&&(D.state=null),x):b}var P,G,U=!0;function re(D){if(U){var W;for(P=new f.Buf32(512),G=new f.Buf32(32),W=0;W<144;)D.lens[W++]=8;for(;W<256;)D.lens[W++]=9;for(;W<280;)D.lens[W++]=7;for(;W<288;)D.lens[W++]=8;for(d(_,D.lens,0,288,P,0,D.work,{bits:9}),W=0;W<32;)D.lens[W++]=5;d(E,D.lens,0,32,G,0,D.work,{bits:5}),U=!1}D.lencode=P,D.lenbits=9,D.distcode=G,D.distbits=5}function ee(D,W,x,X){var V,H=D.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new f.Buf8(H.wsize)),X>=H.wsize?(f.arraySet(H.window,W,x-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(X<(V=H.wsize-H.wnext)&&(V=X),f.arraySet(H.window,W,x-X,V,H.wnext),(X-=V)?(f.arraySet(H.window,W,x-X,X,0),H.wnext=X,H.whave=H.wsize):(H.wnext+=V,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=V))),0}p.inflateReset=F,p.inflateReset2=j,p.inflateResetKeep=L,p.inflateInit=function(D){return $(D,15)},p.inflateInit2=$,p.inflate=function(D,W){var x,X,V,H,fe,te,ye,C,k,ie,se,oe,Ae,Ie,Ne,Re,nt,Je,wt,Rt,v,ue,ae,z,O=0,q=new f.Buf8(4),he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!D||!D.state||!D.output||!D.input&&D.avail_in!==0)return b;(x=D.state).mode===12&&(x.mode=13),fe=D.next_out,V=D.output,ye=D.avail_out,H=D.next_in,X=D.input,te=D.avail_in,C=x.hold,k=x.bits,ie=te,se=ye,ue=T;e:for(;;)switch(x.mode){case N:if(x.wrap===0){x.mode=13;break}for(;k<16;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(2&x.wrap&&C===35615){q[x.check=0]=255&C,q[1]=C>>>8&255,x.check=g(x.check,q,2,0),k=C=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&C)<<8)+(C>>8))%31){D.msg="incorrect header check",x.mode=30;break}if((15&C)!=8){D.msg="unknown compression method",x.mode=30;break}if(k-=4,v=8+(15&(C>>>=4)),x.wbits===0)x.wbits=v;else if(v>x.wbits){D.msg="invalid window size",x.mode=30;break}x.dmax=1<<v,D.adler=x.check=1,x.mode=512&C?10:12,k=C=0;break;case 2:for(;k<16;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(x.flags=C,(255&x.flags)!=8){D.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){D.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=C>>8&1),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,x.check=g(x.check,q,2,0)),k=C=0,x.mode=3;case 3:for(;k<32;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}x.head&&(x.head.time=C),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,q[2]=C>>>16&255,q[3]=C>>>24&255,x.check=g(x.check,q,4,0)),k=C=0,x.mode=4;case 4:for(;k<16;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}x.head&&(x.head.xflags=255&C,x.head.os=C>>8),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,x.check=g(x.check,q,2,0)),k=C=0,x.mode=5;case 5:if(1024&x.flags){for(;k<16;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}x.length=C,x.head&&(x.head.extra_len=C),512&x.flags&&(q[0]=255&C,q[1]=C>>>8&255,x.check=g(x.check,q,2,0)),k=C=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(te<(oe=x.length)&&(oe=te),oe&&(x.head&&(v=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),f.arraySet(x.head.extra,X,H,oe,v)),512&x.flags&&(x.check=g(x.check,X,oe,H)),te-=oe,H+=oe,x.length-=oe),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(te===0)break e;for(oe=0;v=X[H+oe++],x.head&&v&&x.length<65536&&(x.head.name+=String.fromCharCode(v)),v&&oe<te;);if(512&x.flags&&(x.check=g(x.check,X,oe,H)),te-=oe,H+=oe,v)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(te===0)break e;for(oe=0;v=X[H+oe++],x.head&&v&&x.length<65536&&(x.head.comment+=String.fromCharCode(v)),v&&oe<te;);if(512&x.flags&&(x.check=g(x.check,X,oe,H)),te-=oe,H+=oe,v)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;k<16;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(C!==(65535&x.check)){D.msg="header crc mismatch",x.mode=30;break}k=C=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),D.adler=x.check=0,x.mode=12;break;case 10:for(;k<32;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}D.adler=x.check=w(C),k=C=0,x.mode=11;case 11:if(x.havedict===0)return D.next_out=fe,D.avail_out=ye,D.next_in=H,D.avail_in=te,x.hold=C,x.bits=k,2;D.adler=x.check=1,x.mode=12;case 12:if(W===5||W===6)break e;case 13:if(x.last){C>>>=7&k,k-=7&k,x.mode=27;break}for(;k<3;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}switch(x.last=1&C,k-=1,3&(C>>>=1)){case 0:x.mode=14;break;case 1:if(re(x),x.mode=20,W!==6)break;C>>>=2,k-=2;break e;case 2:x.mode=17;break;case 3:D.msg="invalid block type",x.mode=30}C>>>=2,k-=2;break;case 14:for(C>>>=7&k,k-=7&k;k<32;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if((65535&C)!=(C>>>16^65535)){D.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&C,k=C=0,x.mode=15,W===6)break e;case 15:x.mode=16;case 16:if(oe=x.length){if(te<oe&&(oe=te),ye<oe&&(oe=ye),oe===0)break e;f.arraySet(V,X,H,oe,fe),te-=oe,H+=oe,ye-=oe,fe+=oe,x.length-=oe;break}x.mode=12;break;case 17:for(;k<14;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(x.nlen=257+(31&C),C>>>=5,k-=5,x.ndist=1+(31&C),C>>>=5,k-=5,x.ncode=4+(15&C),C>>>=4,k-=4,286<x.nlen||30<x.ndist){D.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;k<3;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}x.lens[he[x.have++]]=7&C,C>>>=3,k-=3}for(;x.have<19;)x.lens[he[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,ae={bits:x.lenbits},ue=d(0,x.lens,0,19,x.lencode,0,x.work,ae),x.lenbits=ae.bits,ue){D.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Re=(O=x.lencode[C&(1<<x.lenbits)-1])>>>16&255,nt=65535&O,!((Ne=O>>>24)<=k);){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(nt<16)C>>>=Ne,k-=Ne,x.lens[x.have++]=nt;else{if(nt===16){for(z=Ne+2;k<z;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(C>>>=Ne,k-=Ne,x.have===0){D.msg="invalid bit length repeat",x.mode=30;break}v=x.lens[x.have-1],oe=3+(3&C),C>>>=2,k-=2}else if(nt===17){for(z=Ne+3;k<z;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}k-=Ne,v=0,oe=3+(7&(C>>>=Ne)),C>>>=3,k-=3}else{for(z=Ne+7;k<z;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}k-=Ne,v=0,oe=11+(127&(C>>>=Ne)),C>>>=7,k-=7}if(x.have+oe>x.nlen+x.ndist){D.msg="invalid bit length repeat",x.mode=30;break}for(;oe--;)x.lens[x.have++]=v}}if(x.mode===30)break;if(x.lens[256]===0){D.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,ae={bits:x.lenbits},ue=d(_,x.lens,0,x.nlen,x.lencode,0,x.work,ae),x.lenbits=ae.bits,ue){D.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,ae={bits:x.distbits},ue=d(E,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,ae),x.distbits=ae.bits,ue){D.msg="invalid distances set",x.mode=30;break}if(x.mode=20,W===6)break e;case 20:x.mode=21;case 21:if(6<=te&&258<=ye){D.next_out=fe,D.avail_out=ye,D.next_in=H,D.avail_in=te,x.hold=C,x.bits=k,y(D,se),fe=D.next_out,V=D.output,ye=D.avail_out,H=D.next_in,X=D.input,te=D.avail_in,C=x.hold,k=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Re=(O=x.lencode[C&(1<<x.lenbits)-1])>>>16&255,nt=65535&O,!((Ne=O>>>24)<=k);){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(Re&&(240&Re)==0){for(Je=Ne,wt=Re,Rt=nt;Re=(O=x.lencode[Rt+((C&(1<<Je+wt)-1)>>Je)])>>>16&255,nt=65535&O,!(Je+(Ne=O>>>24)<=k);){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}C>>>=Je,k-=Je,x.back+=Je}if(C>>>=Ne,k-=Ne,x.back+=Ne,x.length=nt,Re===0){x.mode=26;break}if(32&Re){x.back=-1,x.mode=12;break}if(64&Re){D.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Re,x.mode=22;case 22:if(x.extra){for(z=x.extra;k<z;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}x.length+=C&(1<<x.extra)-1,C>>>=x.extra,k-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Re=(O=x.distcode[C&(1<<x.distbits)-1])>>>16&255,nt=65535&O,!((Ne=O>>>24)<=k);){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if((240&Re)==0){for(Je=Ne,wt=Re,Rt=nt;Re=(O=x.distcode[Rt+((C&(1<<Je+wt)-1)>>Je)])>>>16&255,nt=65535&O,!(Je+(Ne=O>>>24)<=k);){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}C>>>=Je,k-=Je,x.back+=Je}if(C>>>=Ne,k-=Ne,x.back+=Ne,64&Re){D.msg="invalid distance code",x.mode=30;break}x.offset=nt,x.extra=15&Re,x.mode=24;case 24:if(x.extra){for(z=x.extra;k<z;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}x.offset+=C&(1<<x.extra)-1,C>>>=x.extra,k-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){D.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(ye===0)break e;if(oe=se-ye,x.offset>oe){if((oe=x.offset-oe)>x.whave&&x.sane){D.msg="invalid distance too far back",x.mode=30;break}Ae=oe>x.wnext?(oe-=x.wnext,x.wsize-oe):x.wnext-oe,oe>x.length&&(oe=x.length),Ie=x.window}else Ie=V,Ae=fe-x.offset,oe=x.length;for(ye<oe&&(oe=ye),ye-=oe,x.length-=oe;V[fe++]=Ie[Ae++],--oe;);x.length===0&&(x.mode=21);break;case 26:if(ye===0)break e;V[fe++]=x.length,ye--,x.mode=21;break;case 27:if(x.wrap){for(;k<32;){if(te===0)break e;te--,C|=X[H++]<<k,k+=8}if(se-=ye,D.total_out+=se,x.total+=se,se&&(D.adler=x.check=x.flags?g(x.check,V,se,fe-se):m(x.check,V,se,fe-se)),se=ye,(x.flags?C:w(C))!==x.check){D.msg="incorrect data check",x.mode=30;break}k=C=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;k<32;){if(te===0)break e;te--,C+=X[H++]<<k,k+=8}if(C!==(4294967295&x.total)){D.msg="incorrect length check",x.mode=30;break}k=C=0}x.mode=29;case 29:ue=1;break e;case 30:ue=-3;break e;case 31:return-4;case 32:default:return b}return D.next_out=fe,D.avail_out=ye,D.next_in=H,D.avail_in=te,x.hold=C,x.bits=k,(x.wsize||se!==D.avail_out&&x.mode<30&&(x.mode<27||W!==4))&&ee(D,D.output,D.next_out,se-D.avail_out)?(x.mode=31,-4):(ie-=D.avail_in,se-=D.avail_out,D.total_in+=ie,D.total_out+=se,x.total+=se,x.wrap&&se&&(D.adler=x.check=x.flags?g(x.check,V,se,D.next_out-se):m(x.check,V,se,D.next_out-se)),D.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(ie==0&&se===0||W===4)&&ue===T&&(ue=-5),ue)},p.inflateEnd=function(D){if(!D||!D.state)return b;var W=D.state;return W.window&&(W.window=null),D.state=null,T},p.inflateGetHeader=function(D,W){var x;return D&&D.state?(2&(x=D.state).wrap)==0?b:((x.head=W).done=!1,T):b},p.inflateSetDictionary=function(D,W){var x,X=W.length;return D&&D.state?(x=D.state).wrap!==0&&x.mode!==11?b:x.mode===11&&m(1,W,X,0)!==x.check?-3:ee(D,W,X,X)?(x.mode=31,-4):(x.havedict=1,T):b},p.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,c,p){var f=l("../utils/common"),m=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],g=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],y=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];c.exports=function(_,E,T,b,N,S,A,w){var I,L,F,j,$,P,G,U,re,ee=w.bits,D=0,W=0,x=0,X=0,V=0,H=0,fe=0,te=0,ye=0,C=0,k=null,ie=0,se=new f.Buf16(16),oe=new f.Buf16(16),Ae=null,Ie=0;for(D=0;D<=15;D++)se[D]=0;for(W=0;W<b;W++)se[E[T+W]]++;for(V=ee,X=15;1<=X&&se[X]===0;X--);if(X<V&&(V=X),X===0)return N[S++]=20971520,N[S++]=20971520,w.bits=1,0;for(x=1;x<X&&se[x]===0;x++);for(V<x&&(V=x),D=te=1;D<=15;D++)if(te<<=1,(te-=se[D])<0)return-1;if(0<te&&(_===0||X!==1))return-1;for(oe[1]=0,D=1;D<15;D++)oe[D+1]=oe[D]+se[D];for(W=0;W<b;W++)E[T+W]!==0&&(A[oe[E[T+W]]++]=W);if(P=_===0?(k=Ae=A,19):_===1?(k=m,ie-=257,Ae=g,Ie-=257,256):(k=y,Ae=d,-1),D=x,$=S,fe=W=C=0,F=-1,j=(ye=1<<(H=V))-1,_===1&&852<ye||_===2&&592<ye)return 1;for(;;){for(G=D-fe,re=A[W]<P?(U=0,A[W]):A[W]>P?(U=Ae[Ie+A[W]],k[ie+A[W]]):(U=96,0),I=1<<D-fe,x=L=1<<H;N[$+(C>>fe)+(L-=I)]=G<<24|U<<16|re|0,L!==0;);for(I=1<<D-1;C&I;)I>>=1;if(I!==0?(C&=I-1,C+=I):C=0,W++,--se[D]==0){if(D===X)break;D=E[T+A[W]]}if(V<D&&(C&j)!==F){for(fe===0&&(fe=V),$+=x,te=1<<(H=D-fe);H+fe<X&&!((te-=se[H+fe])<=0);)H++,te<<=1;if(ye+=1<<H,_===1&&852<ye||_===2&&592<ye)return 1;N[F=C&j]=V<<24|H<<16|$-S|0}}return C!==0&&(N[$+C]=D-fe<<24|64<<16|0),w.bits=V,0}},{"../utils/common":41}],51:[function(l,c,p){c.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,c,p){var f=l("../utils/common"),m=0,g=1;function y(O){for(var q=O.length;0<=--q;)O[q]=0}var d=0,_=29,E=256,T=E+1+_,b=30,N=19,S=2*T+1,A=15,w=16,I=7,L=256,F=16,j=17,$=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],U=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=new Array(2*(T+2));y(ee);var D=new Array(2*b);y(D);var W=new Array(512);y(W);var x=new Array(256);y(x);var X=new Array(_);y(X);var V,H,fe,te=new Array(b);function ye(O,q,he,pe,K){this.static_tree=O,this.extra_bits=q,this.extra_base=he,this.elems=pe,this.max_length=K,this.has_stree=O&&O.length}function C(O,q){this.dyn_tree=O,this.max_code=0,this.stat_desc=q}function k(O){return O<256?W[O]:W[256+(O>>>7)]}function ie(O,q){O.pending_buf[O.pending++]=255&q,O.pending_buf[O.pending++]=q>>>8&255}function se(O,q,he){O.bi_valid>w-he?(O.bi_buf|=q<<O.bi_valid&65535,ie(O,O.bi_buf),O.bi_buf=q>>w-O.bi_valid,O.bi_valid+=he-w):(O.bi_buf|=q<<O.bi_valid&65535,O.bi_valid+=he)}function oe(O,q,he){se(O,he[2*q],he[2*q+1])}function Ae(O,q){for(var he=0;he|=1&O,O>>>=1,he<<=1,0<--q;);return he>>>1}function Ie(O,q,he){var pe,K,ge=new Array(A+1),be=0;for(pe=1;pe<=A;pe++)ge[pe]=be=be+he[pe-1]<<1;for(K=0;K<=q;K++){var ve=O[2*K+1];ve!==0&&(O[2*K]=Ae(ge[ve]++,ve))}}function Ne(O){var q;for(q=0;q<T;q++)O.dyn_ltree[2*q]=0;for(q=0;q<b;q++)O.dyn_dtree[2*q]=0;for(q=0;q<N;q++)O.bl_tree[2*q]=0;O.dyn_ltree[2*L]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Re(O){8<O.bi_valid?ie(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function nt(O,q,he,pe){var K=2*q,ge=2*he;return O[K]<O[ge]||O[K]===O[ge]&&pe[q]<=pe[he]}function Je(O,q,he){for(var pe=O.heap[he],K=he<<1;K<=O.heap_len&&(K<O.heap_len&&nt(q,O.heap[K+1],O.heap[K],O.depth)&&K++,!nt(q,pe,O.heap[K],O.depth));)O.heap[he]=O.heap[K],he=K,K<<=1;O.heap[he]=pe}function wt(O,q,he){var pe,K,ge,be,ve=0;if(O.last_lit!==0)for(;pe=O.pending_buf[O.d_buf+2*ve]<<8|O.pending_buf[O.d_buf+2*ve+1],K=O.pending_buf[O.l_buf+ve],ve++,pe===0?oe(O,K,q):(oe(O,(ge=x[K])+E+1,q),(be=P[ge])!==0&&se(O,K-=X[ge],be),oe(O,ge=k(--pe),he),(be=G[ge])!==0&&se(O,pe-=te[ge],be)),ve<O.last_lit;);oe(O,L,q)}function Rt(O,q){var he,pe,K,ge=q.dyn_tree,be=q.stat_desc.static_tree,ve=q.stat_desc.has_stree,_e=q.stat_desc.elems,qe=-1;for(O.heap_len=0,O.heap_max=S,he=0;he<_e;he++)ge[2*he]!==0?(O.heap[++O.heap_len]=qe=he,O.depth[he]=0):ge[2*he+1]=0;for(;O.heap_len<2;)ge[2*(K=O.heap[++O.heap_len]=qe<2?++qe:0)]=1,O.depth[K]=0,O.opt_len--,ve&&(O.static_len-=be[2*K+1]);for(q.max_code=qe,he=O.heap_len>>1;1<=he;he--)Je(O,ge,he);for(K=_e;he=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Je(O,ge,1),pe=O.heap[1],O.heap[--O.heap_max]=he,O.heap[--O.heap_max]=pe,ge[2*K]=ge[2*he]+ge[2*pe],O.depth[K]=(O.depth[he]>=O.depth[pe]?O.depth[he]:O.depth[pe])+1,ge[2*he+1]=ge[2*pe+1]=K,O.heap[1]=K++,Je(O,ge,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],(function(Le,Tt){var jn,Vt,ia,We,mt,Ht,rt=Tt.dyn_tree,di=Tt.max_code,Ps=Tt.stat_desc.static_tree,Vs=Tt.stat_desc.has_stree,Ra=Tt.stat_desc.extra_bits,sa=Tt.stat_desc.extra_base,cn=Tt.stat_desc.max_length,Gt=0;for(We=0;We<=A;We++)Le.bl_count[We]=0;for(rt[2*Le.heap[Le.heap_max]+1]=0,jn=Le.heap_max+1;jn<S;jn++)cn<(We=rt[2*rt[2*(Vt=Le.heap[jn])+1]+1]+1)&&(We=cn,Gt++),rt[2*Vt+1]=We,di<Vt||(Le.bl_count[We]++,mt=0,sa<=Vt&&(mt=Ra[Vt-sa]),Ht=rt[2*Vt],Le.opt_len+=Ht*(We+mt),Vs&&(Le.static_len+=Ht*(Ps[2*Vt+1]+mt)));if(Gt!==0){do{for(We=cn-1;Le.bl_count[We]===0;)We--;Le.bl_count[We]--,Le.bl_count[We+1]+=2,Le.bl_count[cn]--,Gt-=2}while(0<Gt);for(We=cn;We!==0;We--)for(Vt=Le.bl_count[We];Vt!==0;)di<(ia=Le.heap[--jn])||(rt[2*ia+1]!==We&&(Le.opt_len+=(We-rt[2*ia+1])*rt[2*ia],rt[2*ia+1]=We),Vt--)}})(O,q),Ie(ge,qe,O.bl_count)}function v(O,q,he){var pe,K,ge=-1,be=q[1],ve=0,_e=7,qe=4;for(be===0&&(_e=138,qe=3),q[2*(he+1)+1]=65535,pe=0;pe<=he;pe++)K=be,be=q[2*(pe+1)+1],++ve<_e&&K===be||(ve<qe?O.bl_tree[2*K]+=ve:K!==0?(K!==ge&&O.bl_tree[2*K]++,O.bl_tree[2*F]++):ve<=10?O.bl_tree[2*j]++:O.bl_tree[2*$]++,ge=K,qe=(ve=0)===be?(_e=138,3):K===be?(_e=6,3):(_e=7,4))}function ue(O,q,he){var pe,K,ge=-1,be=q[1],ve=0,_e=7,qe=4;for(be===0&&(_e=138,qe=3),pe=0;pe<=he;pe++)if(K=be,be=q[2*(pe+1)+1],!(++ve<_e&&K===be)){if(ve<qe)for(;oe(O,K,O.bl_tree),--ve!=0;);else K!==0?(K!==ge&&(oe(O,K,O.bl_tree),ve--),oe(O,F,O.bl_tree),se(O,ve-3,2)):ve<=10?(oe(O,j,O.bl_tree),se(O,ve-3,3)):(oe(O,$,O.bl_tree),se(O,ve-11,7));ge=K,qe=(ve=0)===be?(_e=138,3):K===be?(_e=6,3):(_e=7,4)}}y(te);var ae=!1;function z(O,q,he,pe){se(O,(d<<1)+(pe?1:0),3),(function(K,ge,be,ve){Re(K),ie(K,be),ie(K,~be),f.arraySet(K.pending_buf,K.window,ge,be,K.pending),K.pending+=be})(O,q,he)}p._tr_init=function(O){ae||((function(){var q,he,pe,K,ge,be=new Array(A+1);for(K=pe=0;K<_-1;K++)for(X[K]=pe,q=0;q<1<<P[K];q++)x[pe++]=K;for(x[pe-1]=K,K=ge=0;K<16;K++)for(te[K]=ge,q=0;q<1<<G[K];q++)W[ge++]=K;for(ge>>=7;K<b;K++)for(te[K]=ge<<7,q=0;q<1<<G[K]-7;q++)W[256+ge++]=K;for(he=0;he<=A;he++)be[he]=0;for(q=0;q<=143;)ee[2*q+1]=8,q++,be[8]++;for(;q<=255;)ee[2*q+1]=9,q++,be[9]++;for(;q<=279;)ee[2*q+1]=7,q++,be[7]++;for(;q<=287;)ee[2*q+1]=8,q++,be[8]++;for(Ie(ee,T+1,be),q=0;q<b;q++)D[2*q+1]=5,D[2*q]=Ae(q,5);V=new ye(ee,P,E+1,T,A),H=new ye(D,G,0,b,A),fe=new ye(new Array(0),U,0,N,I)})(),ae=!0),O.l_desc=new C(O.dyn_ltree,V),O.d_desc=new C(O.dyn_dtree,H),O.bl_desc=new C(O.bl_tree,fe),O.bi_buf=0,O.bi_valid=0,Ne(O)},p._tr_stored_block=z,p._tr_flush_block=function(O,q,he,pe){var K,ge,be=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=(function(ve){var _e,qe=4093624447;for(_e=0;_e<=31;_e++,qe>>>=1)if(1&qe&&ve.dyn_ltree[2*_e]!==0)return m;if(ve.dyn_ltree[18]!==0||ve.dyn_ltree[20]!==0||ve.dyn_ltree[26]!==0)return g;for(_e=32;_e<E;_e++)if(ve.dyn_ltree[2*_e]!==0)return g;return m})(O)),Rt(O,O.l_desc),Rt(O,O.d_desc),be=(function(ve){var _e;for(v(ve,ve.dyn_ltree,ve.l_desc.max_code),v(ve,ve.dyn_dtree,ve.d_desc.max_code),Rt(ve,ve.bl_desc),_e=N-1;3<=_e&&ve.bl_tree[2*re[_e]+1]===0;_e--);return ve.opt_len+=3*(_e+1)+5+5+4,_e})(O),K=O.opt_len+3+7>>>3,(ge=O.static_len+3+7>>>3)<=K&&(K=ge)):K=ge=he+5,he+4<=K&&q!==-1?z(O,q,he,pe):O.strategy===4||ge===K?(se(O,2+(pe?1:0),3),wt(O,ee,D)):(se(O,4+(pe?1:0),3),(function(ve,_e,qe,Le){var Tt;for(se(ve,_e-257,5),se(ve,qe-1,5),se(ve,Le-4,4),Tt=0;Tt<Le;Tt++)se(ve,ve.bl_tree[2*re[Tt]+1],3);ue(ve,ve.dyn_ltree,_e-1),ue(ve,ve.dyn_dtree,qe-1)})(O,O.l_desc.max_code+1,O.d_desc.max_code+1,be+1),wt(O,O.dyn_ltree,O.dyn_dtree)),Ne(O),pe&&Re(O)},p._tr_tally=function(O,q,he){return O.pending_buf[O.d_buf+2*O.last_lit]=q>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&q,O.pending_buf[O.l_buf+O.last_lit]=255&he,O.last_lit++,q===0?O.dyn_ltree[2*he]++:(O.matches++,q--,O.dyn_ltree[2*(x[he]+E+1)]++,O.dyn_dtree[2*k(q)]++),O.last_lit===O.lit_bufsize-1},p._tr_align=function(O){se(O,2,3),oe(O,L,ee),(function(q){q.bi_valid===16?(ie(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)})(O)}},{"../utils/common":41}],53:[function(l,c,p){c.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,c,p){(function(f){(function(m,g){if(!m.setImmediate){var y,d,_,E,T=1,b={},N=!1,S=m.document,A=Object.getPrototypeOf&&Object.getPrototypeOf(m);A=A&&A.setTimeout?A:m,y={}.toString.call(m.process)==="[object process]"?function(F){process.nextTick(function(){I(F)})}:(function(){if(m.postMessage&&!m.importScripts){var F=!0,j=m.onmessage;return m.onmessage=function(){F=!1},m.postMessage("","*"),m.onmessage=j,F}})()?(E="setImmediate$"+Math.random()+"$",m.addEventListener?m.addEventListener("message",L,!1):m.attachEvent("onmessage",L),function(F){m.postMessage(E+F,"*")}):m.MessageChannel?((_=new MessageChannel).port1.onmessage=function(F){I(F.data)},function(F){_.port2.postMessage(F)}):S&&"onreadystatechange"in S.createElement("script")?(d=S.documentElement,function(F){var j=S.createElement("script");j.onreadystatechange=function(){I(F),j.onreadystatechange=null,d.removeChild(j),j=null},d.appendChild(j)}):function(F){setTimeout(I,0,F)},A.setImmediate=function(F){typeof F!="function"&&(F=new Function(""+F));for(var j=new Array(arguments.length-1),$=0;$<j.length;$++)j[$]=arguments[$+1];var P={callback:F,args:j};return b[T]=P,y(T),T++},A.clearImmediate=w}function w(F){delete b[F]}function I(F){if(N)setTimeout(I,0,F);else{var j=b[F];if(j){N=!0;try{(function($){var P=$.callback,G=$.args;switch(G.length){case 0:P();break;case 1:P(G[0]);break;case 2:P(G[0],G[1]);break;case 3:P(G[0],G[1],G[2]);break;default:P.apply(g,G)}})(j)}finally{w(F),N=!1}}}}function L(F){F.source===m&&typeof F.data=="string"&&F.data.indexOf(E)===0&&I(+F.data.slice(E.length))}})(typeof self>"u"?f===void 0?this:f:self)}).call(this,typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(uc)),uc.exports}var Gy=Hy();const qy=Tc(Gy),Yy=({logs:u,currentRound:o,currentPaperVersion:l,filePrefix:c,dataAlert:p})=>{const[f,m]=xe.useState([]),[g,y]=xe.useState(null),[d,_]=xe.useState(!1),[E,T]=xe.useState(!1),[b,N]=xe.useState(null),[S,A]=xe.useState(null),[w,I]=xe.useState(!1),[L,F]=xe.useState(!1),j=async()=>{_(!0),y(null);const ee=ra(l,"icis_paper"),D=li(o),W=Dc();if(!ee||!D){y("Missing files to save"),_(!1);return}const x=await vp(l,o,ee,W,D,c);if(x.success){const X=x.files||[],V=Lc();if(V){const fe=URL.createObjectURL(V.blob),te=document.createElement("a");te.href=fe,te.download=V.filename,document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(fe),X.push(V.filename)}const H=Cp();if(H.length>0){console.log(`[Save] Packing ${H.length} PNG figures into figures.zip...`);const fe=await Ip();if(fe.length>0){const te=new qy;for(const ie of fe)te.file(ie.filename,ie.blob);const ye=await te.generateAsync({type:"blob"}),C=URL.createObjectURL(ye),k=document.createElement("a");k.href=C,k.download="figures.zip",document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(C),X.push(`figures.zip (${fe.length} PNG files)`),console.log(`[Save] Downloaded figures.zip with ${fe.length} PNG figures`)}}m(X)}else y(x.error||"Failed to save files");_(!1)},$=async()=>{T(!0),N(null),y(null);const ee=ra(l,"icis_paper");if(!ee){y("No paper content available to compile"),T(!1);return}const W=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,x=Dp();console.log(`[Compile] Compiling with ${x.length} PNG figures`);const X=await bp(W,ee,x.length>0?x:void 0);N(X),X.success||y(X.error||"PDF compilation failed"),T(!1)},P=()=>{b!=null&&b.pdfFilename&&Sp(b.pdfFilename)},G=async()=>{I(!0),F(!1);const D=`${c?`${c}_`:""}icis_paper_v${l}_FINAL.tex`,W=await Ep(D);A(W),I(!1)},U=()=>{S!=null&&S.fullUrl&&(navigator.clipboard.writeText(S.fullUrl),F(!0),setTimeout(()=>F(!1),3e3))},re=()=>{S!=null&&S.fullUrl&&Ap(S.fullUrl)};return s.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[s.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:s.jsx(Cc,{size:40})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),s.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",o," revision cycle(s)."]}),s.jsx(ci,{logs:u,height:"h-32"}),s.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Paper compiled (v",l,")"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," All sections verified"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Submission package generated"]}),s.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[s.jsx(on,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),s.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[s.jsx("button",{onClick:$,disabled:E||d,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:E?s.jsxs(s.Fragment,{children:[s.jsx(Xh,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):s.jsxs(s.Fragment,{children:[s.jsx(zs,{size:18}),"Compile LaTeX to PDF"]})}),(b==null?void 0:b.success)&&s.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),s.jsxs("p",{className:"text-xs text-emerald-600",children:[b.pdfFilename," (",Math.round((b.fileSize||0)/1024)," KB)",b.pageCount&&` • ${b.pageCount} pages`]})]}),s.jsxs("button",{onClick:P,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[s.jsx(Os,{size:16}),"Download"]})]})}),(b==null?void 0:b.success)&&(b==null?void 0:b.exceedsLimit)&&s.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),s.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",b.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),p&&s.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[s.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),s.jsx("p",{className:"text-xs text-orange-700 mt-1",children:p})]}),(b==null?void 0:b.success)&&s.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(gc,{size:18,className:"text-blue-600"}),s.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),s.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),S!=null&&S.success?s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",readOnly:!0,value:S.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),s.jsxs("button",{onClick:U,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[s.jsx(M0,{size:14}),L?"Copied!":"Copy"]})]}),s.jsx("div",{className:"flex gap-2",children:s.jsxs("button",{onClick:re,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[s.jsx(P0,{size:14}),"Open Preview"]})}),s.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",S.expiresIn]})]}):s.jsx("button",{onClick:G,disabled:w,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:w?s.jsxs(s.Fragment,{children:[s.jsx(Xh,{size:16,className:"animate-spin"}),"Creating Link..."]}):s.jsxs(s.Fragment,{children:[s.jsx(W0,{size:16}),"Create Shareable Link"]})})]}),s.jsxs("button",{onClick:j,disabled:d||E,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[s.jsx(dy,{size:18,className:d?"animate-pulse":""}),d?"Saving...":"Save All Files (pdf + .tex + .png + data)"]}),s.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads PDF, .tex, PNG figures, and data files"}),f.length>0&&s.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[s.jsxs("p",{className:"font-medium mb-1",children:["Saved ",f.length," files:"]}),s.jsx("p",{className:"text-xs",children:f.map(ee=>ee.split(/[/\\]/).pop()).join(", ")})]}),g&&s.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[s.jsx("p",{className:"font-medium",children:"Error:"}),s.jsx("p",{className:"text-xs",children:g}),(b==null?void 0:b.log)&&s.jsxs("details",{className:"mt-2 text-left",children:[s.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),s.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:b.log})]})]}),s.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},$y=({state:u,isProcessing:o,onAction:l,uploadedFiles:c,onFileChange:p,detectionStatus:f,onRefreshDetection:m,onStageAbort:g,onStageRestart:y,filePrefix:d})=>{const[_,E]=xe.useState(),T=N=>{E(N),l("PROCEED_TO_SUPERVISOR")},b=()=>{switch(u.currentStage){case me.SETUP:const N=u.rounds.length>0||u.currentPaperVersion>0||u.paperContent!=="";return s.jsx(Ly,{logs:u.logs,stageStatus:u.stages[me.SETUP],isProcessing:o,uploadedFiles:c,onFileChange:p,onAction:l,detectionStatus:f,onRefreshDetection:m,hasExistingCase:N});case me.BUILDER:return s.jsx(zy,{logs:u.logs,isProcessing:o,isPartialPaper:u.isPartialPaper,currentBuilderStep:u.currentBuilderStep,paperContent:u.paperContent,onAbort:()=>g==null?void 0:g(me.BUILDER),onRestart:()=>y==null?void 0:y(me.BUILDER)});case me.REVIEWER:const S=u.stages[me.REVIEWER]===Ce.COMPLETED;return s.jsx(By,{logs:u.logs,isProcessing:o,currentRound:u.currentRound,isComplete:S,onProceedToSupervisor:T,onAbort:()=>g==null?void 0:g(me.REVIEWER),onRestart:()=>y==null?void 0:y(me.REVIEWER),filePrefix:d});case me.SUPERVISOR:const A=Is(u.currentRound),w=Dc();return s.jsx(Py,{currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,lastFeedback:u.lastFeedback,isProcessing:o,oversightData:A,allOversight:w,onAction:l,reviewOutputFiles:_});case me.REVISER:return s.jsx(Vy,{logs:u.logs,isProcessing:o,currentPaperVersion:u.currentPaperVersion,paperContent:u.paperContent,onAbort:()=>g==null?void 0:g(me.REVISER),onRestart:()=>y==null?void 0:y(me.REVISER)});case me.FINALIZE:return s.jsx(Yy,{logs:u.logs,currentRound:u.currentRound,currentPaperVersion:u.currentPaperVersion,filePrefix:d,dataAlert:u.dataAlert});default:return s.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:s.jsxs("p",{children:["Unknown stage: ",u.currentStage]})})}};return s.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:b()})};function Fs(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://icis-deploy-12-10-2025.vercel.app":""}async function Xy(u){const o=Fs(),l=new URLSearchParams,c=`${o}/api/participants${l.toString()?`?${l}`:""}`,f=await(await fetch(c)).json();if(!f.success)throw new Error(f.error||"Failed to fetch participants");return f.participants}async function ep(u){const o=Fs(),c=await(await fetch(`${o}/api/participants`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).json();if(!c.success)throw new Error(c.error||"Failed to update participant");return c.participant}async function Zy(u){const o=Fs(),c=await(await fetch(`${o}/api/participants`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u})})).json();if(!c.success)throw new Error(c.error||"Failed to delete participant")}async function Qy(){const u=Fs(),l=await(await fetch(`${u}/api/research-stats`)).json();if(!l.success)throw new Error(l.error||"Failed to fetch research stats");return l.stats}const Ts=({label:u,value:o,icon:l,color:c,subtext:p})=>s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-slate-500",children:u}),s.jsx("p",{className:`text-2xl font-bold ${c}`,children:o}),p&&s.jsx("p",{className:"text-xs text-slate-400 mt-1",children:p})]}),s.jsx("div",{className:`p-2 rounded-lg ${c.replace("text-","bg-").replace("-600","-100")}`,children:l})]})}),Wy=({label:u,count:o,total:l,color:c})=>{const p=l>0?o/l*100:0;return s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[s.jsx("span",{className:"text-slate-600",children:u}),s.jsx("span",{className:"text-slate-800 font-medium",children:o})]}),s.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:s.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${c}`,style:{width:`${Math.max(p,2)}%`}})})]})},Ky=({onViewParticipants:u})=>{const[o,l]=xe.useState(null),[c,p]=xe.useState(!0),[f,m]=xe.useState(null),g=async()=>{p(!0),m(null);try{const d=await Qy();l(d)}catch(d){m(d instanceof Error?d.message:"Failed to load stats")}finally{p(!1)}};if(xe.useEffect(()=>{g()},[]),c)return s.jsx("div",{className:"flex items-center justify-center h-64",children:s.jsx(tn,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(f)return s.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[s.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[s.jsx(vc,{size:20}),s.jsxs("span",{children:["Error: ",f]})]}),s.jsx("button",{onClick:g,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!o)return null;const y=[{label:"1. Registered",count:o.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:o.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:o.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:o.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:o.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:o.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:o.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:o.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:o.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:o.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:o.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:o.funnel.dropped_out||0,color:"bg-red-500"}];return s.jsxs("div",{className:"p-6 space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),s.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),s.jsxs("button",{onClick:g,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(tn,{size:16}),"Refresh"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[s.jsx(Ts,{label:"Total Participants",value:o.total,icon:s.jsx(hp,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${o.active} active`}),s.jsx(Ts,{label:"Surveys Sent",value:o.surveysSent,icon:s.jsx(Cc,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),s.jsx(Ts,{label:"Surveys Completed",value:o.surveysCompleted,icon:s.jsx(mc,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),s.jsx(Ts,{label:"Completion Rate",value:`${o.completionRate}%`,icon:s.jsx(dp,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),o.alerts&&o.alerts.length>0&&s.jsx("div",{className:"space-y-2",children:o.alerts.map((d,_)=>s.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${d.type==="stuck"?"bg-amber-50 border-amber-200":d.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[s.jsx(vc,{size:18,className:d.type==="stuck"?"text-amber-500":d.type==="pending_survey"?"text-blue-500":"text-slate-500"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium text-sm text-slate-800",children:d.message}),s.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[d.participants.slice(0,3).join(", "),d.participants.length>3&&` +${d.participants.length-3} more`]})]})]},_))}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(hc,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),s.jsx("div",{className:"space-y-1",children:y.map(d=>s.jsx(Wy,{label:d.label,count:d.count,total:o.total,color:d.color},d.label))})]}),s.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(x0,{size:20,className:"text-slate-500"}),s.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),s.jsx("span",{className:"text-lg font-bold text-emerald-600",children:o.groups.group1.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group1.dropRate,"%"]})]})]})]}),s.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),s.jsx("span",{className:"text-lg font-bold text-blue-600",children:o.groups.group2.total})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Interview"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.interviewRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Completion"}),s.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.completionRate,"%"]})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),s.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group2.dropRate,"%"]})]})]})]}),o.groups.unassigned>0&&s.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:s.jsxs("span",{className:"text-sm text-slate-600",children:[o.groups.unassigned," unassigned participant(s)"]})})]})]})]}),s.jsx("div",{className:"text-center",children:s.jsx("button",{onClick:u,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},Ac={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Op={1:"With Oversight",2:"Control (No Oversight)"},Jy=({status:u})=>{const o={registered:"bg-gray-100 text-gray-700",confirmed_via_email:"bg-blue-100 text-blue-700",interview_completed:"bg-emerald-100 text-emerald-700",processing:"bg-yellow-100 text-yellow-700",paper_link_sent:"bg-purple-100 text-purple-700",survey_sent:"bg-cyan-100 text-cyan-700",review_email_sent:"bg-indigo-100 text-indigo-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o[u]}`,children:Ac[u]})},ev=({groupId:u})=>{if(u===null)return s.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const o=u===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o}`,children:Op[u]})},tv=({onBack:u})=>{const[o,l]=xe.useState([]),[c,p]=xe.useState(!0),[f,m]=xe.useState(null),[g,y]=xe.useState(""),[d,_]=xe.useState(""),[E,T]=xe.useState("all"),[b,N]=xe.useState(null),[S,A]=xe.useState(null),w=async()=>{p(!0),m(null);try{const G=await Xy();l(G)}catch(G){m(G instanceof Error?G.message:"Failed to load participants")}finally{p(!1)}};xe.useEffect(()=>{w()},[]);const I=o.filter(G=>{const U=!g||G.email.toLowerCase().includes(g.toLowerCase())||G.name.toLowerCase().includes(g.toLowerCase()),re=!d||G.status===d,ee=E==="all"||G.group_id===E;return U&&re&&ee}),L=async(G,U)=>{try{await ep({email:G,status:U}),await w(),N(null)}catch(re){alert(re instanceof Error?re.message:"Failed to update status")}},F=async(G,U)=>{try{await ep({email:G,group_id:U}),await w(),N(null)}catch(re){alert(re instanceof Error?re.message:"Failed to update group")}},j=async G=>{if(confirm(`Are you sure you want to delete participant ${G}?`))try{await Zy(G),await w(),N(null)}catch(U){alert(U instanceof Error?U.message:"Failed to delete participant")}},$=G=>new Date(G).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),P=["registered","confirmed_via_email","interview_completed","processing","paper_link_sent","survey_sent","review_email_sent","survey_completed","dropped_out"];return s.jsxs("div",{className:"p-6 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{onClick:u,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:s.jsx(_0,{size:20,className:"text-slate-600"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),s.jsxs("p",{className:"text-slate-500 text-sm",children:[I.length," of ",o.length," participants"]})]})]}),s.jsxs("button",{onClick:w,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[s.jsx(tn,{size:16,className:c?"animate-spin":""}),"Refresh"]})]}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[s.jsx(up,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),s.jsx("input",{type:"text",placeholder:"Search by name or email...",value:g,onChange:G=>y(G.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:d,onChange:G=>_(G.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"",children:"All Statuses"}),P.map(G=>s.jsx("option",{value:G,children:Ac[G]},G))]}),s.jsx(pc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),s.jsxs("div",{className:"relative",children:[s.jsxs("select",{value:E===null?"null":E==="all"?"all":E,onChange:G=>{const U=G.target.value;T(U==="all"?"all":U==="null"?null:parseInt(U))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[s.jsx("option",{value:"all",children:"All Groups"}),s.jsx("option",{value:"1",children:"Group 1: With Oversight"}),s.jsx("option",{value:"2",children:"Group 2: Control"}),s.jsx("option",{value:"null",children:"Unassigned"})]}),s.jsx(pc,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),f&&s.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:f}),s.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full text-sm",children:[s.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:s.jsxs("tr",{children:[s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),s.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),s.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),s.jsx("tbody",{children:c?s.jsx("tr",{children:s.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[s.jsx(tn,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):I.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):I.map(G=>s.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[s.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:G.name||s.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),s.jsx("td",{className:"px-4 py-3 text-slate-600",children:G.email}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(Jy,{status:G.status})}),s.jsx("td",{className:"px-4 py-3",children:s.jsx(ev,{groupId:G.group_id})}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:$(G.registered_at)}),s.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:$(G.updated_at)}),s.jsxs("td",{className:"px-4 py-3 text-right relative",children:[s.jsx("button",{onClick:()=>N(b===G.id?null:G.id),className:"p-1 rounded hover:bg-slate-100",children:s.jsx(cp,{size:16,className:"text-slate-400"})}),b===G.id&&s.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),P.map(U=>s.jsxs("button",{onClick:()=>L(G.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.status===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.status===U&&s.jsx(on,{size:12}),s.jsx("span",{className:G.status===U?"":"ml-4",children:Ac[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map(U=>s.jsxs("button",{onClick:()=>F(G.email,U),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.group_id===U?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.group_id===U&&s.jsx(on,{size:12}),s.jsx("span",{className:G.group_id===U?"":"ml-4",children:Op[U]})]},U)),s.jsx("div",{className:"border-t border-slate-100 my-1"}),s.jsxs("button",{onClick:()=>j(G.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[s.jsx(gy,{size:14}),"Delete Participant"]})]})]})]},G.id))})]})})})]})},nv=({onClose:u})=>{const[o,l]=xe.useState("dashboard");return s.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:o==="dashboard"?s.jsx(Ky,{onViewParticipants:()=>l("participants")}):s.jsx(tv,{onBack:()=>l("dashboard")})})},av="modulepreload",rv=function(u){return"/asd/"+u},tp={},dc=function(o,l,c){let p=Promise.resolve();if(l&&l.length>0){let m=function(d){return Promise.all(d.map(_=>Promise.resolve(_).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),y=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));p=m(l.map(d=>{if(d=rv(d),d in tp)return;tp[d]=!0;const _=d.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${E}`))return;const T=document.createElement("link");if(T.rel=_?"stylesheet":av,_||(T.as="script"),T.crossOrigin="",T.href=d,y&&T.setAttribute("nonce",y),document.head.appendChild(T),_)return new Promise((b,N)=>{T.addEventListener("load",b),T.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${d}`)))})}))}function f(m){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=m,window.dispatchEvent(g),!g.defaultPrevented)throw m}return p.then(m=>{for(const g of m||[])g.status==="rejected"&&f(g.reason);return o().catch(f)})},iv=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
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
`,sv=`================================================================================\r
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
`,lv=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
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
`,ov=`================================================================================
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
`,cv=`================================================================================
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
`,uv=`================================================================================
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
`,dv=`ICIS Paper Title\r
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
`,fv={SETUP:ov,BUILDER:iv,REVIEWER:sv,SUPERVISOR:cv,REVISER:lv,FINALIZE:uv,TEMPLATE:dv};function hv(u){return u.replace(/\{ICIS_PATH\}/g,rp)}const pv=Object.fromEntries(Object.entries(fv).map(([u,o])=>[u,hv(o)]));async function jp(u){const o=pv[u];return o||(console.error(`Prompt not found: ${u}`),`[Prompt not found: ${u}]`)}const _c="https://icis-deploy-12-10-2025.vercel.app",ks="http://localhost:3001";let zc="research";const kp={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function Lp(){return kp[zc].gemini}function wc(){return kp[zc].openai}function mv(u){zc=u,console.log(`[GeminiService] Paper mode set to: ${u}`),console.log(`[GeminiService] Using Gemini model: ${Lp()}`),console.log(`[GeminiService] Using OpenAI model: ${wc()}`)}console.log("[API] Using Vercel proxy:",_c);class Ls extends Error{constructor(o,l,c,p=!1,f){super(l),this.type=o,this.userMessage=l,this.technicalDetails=c,this.retryable=p,this.statusCode=f,this.name="GeminiError"}}const zp=u=>new Promise(o=>setTimeout(o,u));async function gv(u,o){var d,_,E,T,b;const l=o===ks?`${o}/api/gemini/chat`:`${o}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${l}`);const c={...u,model:Lp()},p=new AbortController,f=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),p.abort()},18e4),m=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),signal:p.signal});if(clearTimeout(f),!m.ok){const N=await m.json().catch(()=>({error:"Unknown error"}));throw new Ls("UNKNOWN",`Gemini proxy error: ${N.error||N.details||"Unknown error"}`,JSON.stringify(N),m.status>=500)}const g=await m.json(),y=(b=(T=(E=(_=(d=g.candidates)==null?void 0:d[0])==null?void 0:_.content)==null?void 0:E.parts)==null?void 0:T[0])==null?void 0:b.text;if(!y)throw new Ls("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(g).substring(0,200),!0);return y}async function fr(u,o){const l={contents:[{parts:[{text:u}]}],generationConfig:{maxOutputTokens:8192,temperature:.7}};o&&(l.systemInstruction={parts:[{text:o}]});const c=await Fp();if(c.type==="vercel")return console.log("[Gemini] Using Vercel proxy..."),gv(l,c.baseUrl);throw new Ls("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function fc(u){let o=u;const l=o.match(/```latex\s*([\s\S]*?)\s*```/);l&&(o=l[1]);const c=o.indexOf("\\end{document}");return c!==-1&&(o=o.substring(0,c+14)),o=o.replace(/```javascript[\s\S]*?```/g,""),o=o.replace(/```js[\s\S]*?```/g,""),o=o.replace(/```python[\s\S]*?```/g,""),o=o.replace(/```[\s\S]*?```/g,""),o=o.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/Verification Report:[\s\S]*$/gi,""),o=o.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/console\.log\([\s\S]*?\);/g,""),o=o.replace(/const \w+ = \{[\s\S]*?\};/g,""),o=o.trim(),console.log(`[cleanLatexOutput] Cleaned content from ${u.length} to ${o.length} characters`),o}async function yv(u,o,l="application/pdf"){throw new Ls("API_KEY_INVALID","Gemini API key is not configured","Missing VITE_GEMINI_API_KEY",!1)}function vv(u){const o=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
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
7. Sort references alphabetically by first author's last name`,minWords:500}),o}async function bv(u,o){const l=Object.entries(o.previousSections).map(([y,d])=>`[${y}]
${d.substring(0,500)}...`).join(`

`);let c="";if(u.key==="references"){const y=Object.values(o.previousSections).join(`
`),d=/\(([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?),?\s*(\d{4})\)/g,_=new Set;let E;for(;(E=d.exec(y))!==null;){const T=E[1].replace(/\s+&\s+/g," & ").replace(/\s+and\s+/g," & "),b=E[2];_.add(`${T} (${b})`)}if(_.size>0){const T=[..._].sort().join(`
- `);console.log(`[generateSection] Found ${_.size} inline citations in paper`),c=`
CITATIONS USED IN PAPER:
The following citations were used in the paper body. Ensure you include matching references:
- ${T}

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
- References will be collected at the end of the paper`;return await fr(m,"You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.")}const xv=async(u="Mock transcript content...",o=!1,l,c,p)=>{var N,S,A,w;console.log(`[runBuilder] ENTRY - dataFileName="${c}" (type: ${typeof c})`);const f=vv(o),m={};console.log(`[Builder] Starting section-by-section generation (${f.length} sections, ${o?"partial":"full"} paper)`);let g,y;if(c){console.log(`[Builder] Data file provided: ${c} - analyzing for ALL research types`),l==null||l("Data Analysis","starting");try{const I=await Mp(c,L=>console.log(`[Builder] ${L}`),p);console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((N=I.dataSummary)==null?void 0:N.length)||0,error:I.error}),I.success&&I.dataSummary?(g=I.dataSummary,console.log("[Builder] Data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",g.substring(0,500)),l==null||l("Data Analysis","completed")):(y=`*** DATA ALERT: Could not analyze data file "${c}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${y}`),l==null||l("Data Analysis","error"))}catch(I){y=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${y}`),l==null||l("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data analysis");let d=[],_=!1,E="";if(!o)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations BEFORE Results section..."),console.log(`[Builder] Data summary available: ${!!g}, Data file: ${c||"none"}`);const I=`Research Interview: ${u.substring(0,2e3)}`,L=await Rc(u,I,c,F=>console.log(`[Builder] ${F}`),g);d=L.figures,_=L.usedSyntheticData,d.length>0&&(E=`

GENERATED FIGURES (reference these in your Results section):
`,d.forEach((F,j)=>{E+=`- Figure ${j+1} (\\ref{fig:fig${j+1}}): ${F.description}
`}),E+=`
IMPORTANT: Reference each figure in the text using Figure~\\ref{fig:fig1}, Figure~\\ref{fig:fig2}, etc.
`,E+=`Example: "As shown in Figure~\\ref{fig:fig1}, the distribution of..."
`),L.dataAlert&&(y=y?`${y}
${L.dataAlert}`:L.dataAlert),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${d.length} figures before Results section`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error");const L=`*** VISUALIZATION ERROR: ${I.message}`;y=y?`${y}
${L}`:L,_=!0}for(const I of f)try{l==null||l(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const L=I.key==="results"&&E?(g||"")+E:g,F=await bv(I,{interviewTranscript:u,previousSections:m,dataSummary:L});m[I.key]=F,l==null||l(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${F.split(/\s+/).length} words)`),await zp(500)}catch(L){throw l==null||l(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,L),new Error(`Failed to generate ${I.name}: ${L.message}`)}if(!o&&d.length===0)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations (post-sections fallback)...");const I=`
Abstract: ${((S=m.abstract)==null?void 0:S.substring(0,500))||""}
Research Focus: ${((A=m.introduction)==null?void 0:A.substring(0,500))||""}
Methodology: ${((w=m.methodology)==null?void 0:w.substring(0,500))||""}
`,L=await Rc(u,I,c,F=>console.log(`[Builder] ${F}`),g);d=L.figures,_=L.usedSyntheticData,L.dataAlert&&(y=y?`${y}
${L.dataAlert}`:L.dataAlert),!g&&L.dataSummary&&(g=L.dataSummary),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${d.length} figures (fallback)`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error"),_=!0}const T=wv(m,o,d,_),b=T.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${b} words, ${d.length} figures`),{paperContent:T,dataAlert:y,usedSyntheticData:_,dataSummary:g}};function Sv(u){let o=u;if(o=o.replace(/^```(?:latex|tex)?\s*\n?/i,""),o=o.replace(/\n?```\s*$/i,""),o.includes("\\documentclass")){console.log("[assemblePaper] Cleaning up References: removing nested LaTeX document structure");const l=o.match(/\\begin\{thebibliography\}[\s\S]*?\\end\{thebibliography\}/);if(l)o=l[0];else{const c=o.match(/\\begin\{document\}([\s\S]*?)\\end\{document\}/);c&&(o=c[1].trim(),o=o.replace(/\\maketitle\s*/g,""),o=o.replace(/\\section\*?\{References\}\s*/g,""))}}return o=o.replace(/^\\section\*?\{References\}\s*/im,""),o.includes("\\bibitem{")&&(o.includes("\\begin{thebibliography}")||(console.log("[assemblePaper] Adding missing thebibliography wrapper"),o=`\\begin{thebibliography}{99}
${o}
\\end{thebibliography}`)),o.trim()}function Ev(u){let o=u;return o=o.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),o=o.replace(/([^\\])%/g,"$1\\%"),o=o.replace(/([^\\])& /g,"$1\\& "),o=o.replace(/([^\\])#/g,"$1\\#"),o=o.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),o=o.replace(/ \*([^*\s])/g," $\\ast$$1"),o=o.replace(/([^*\s])\* /g,"$1$\\ast$ "),o=o.replace(/__/g,"\\_\\_"),o=o.replace(/"/g,"''"),o=o.replace(/"/g,"``"),o=o.replace(/'/g,"'"),o=o.replace(/'/g,"`"),o}const Av=`\\documentclass[12pt]{article}
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

`,_v=`
\\end{document}
`;function wv(u,o,l=[],c=!1){const p=o?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],f={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let m=Av;c&&!o&&(m+=`% ============================================================================
% IMPORTANT NOTICE
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Data}\\\\[0.5em]
The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings. This paper is a draft produced by ICIScopilot and requires verification of all data before submission.
}}
\\end{center}
\\vspace{1em}

`);for(const g of p)if(u[g]){const y=Ev(u[g]);if(g==="title")m+=`\\title{${y}}
\\maketitle

`;else if(g==="abstract")m+=`\\begin{abstract}
${y}
\\end{abstract}

`;else if(g==="references"){const d=Sv(u[g]);d.includes("\\begin{thebibliography}")?m+=`
${d}
`:m+=`\\section*{References}

${d}
`}else g==="results"&&l.length>0?(m+=`\\section{${f[g]}}

`,c&&(m+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),m+=Up(l),m+=`
${y}

`):m+=`\\section{${f[g]}}

${y}

`}return m+=_v,m}async function Rv(u,o,l){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),l==null||l("Analyzing data with AI...");const c=u.split(`
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
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const m=await fr(f,"Analyze CSV data");if(m)return console.log("[DataAnalysis] Gemini analysis complete"),l==null||l("AI data analysis complete"),{success:!0,dataSummary:m,dataFileFound:!0}}catch(m){console.error("[DataAnalysis] Gemini analysis failed:",m)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function Mp(u,o,l){var f,m,g,y,d,_,E,T,b,N;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${u}" (type: ${typeof u})`),l){o==null||o("Loading data file preview for verification...");const S=await Np(u);if(!S.success)return console.error(`[DataAnalysis] Failed to get file preview: ${S.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${S.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${S.filename}, First line: ${(f=S.firstLine)==null?void 0:f.substring(0,100)}...`),o==null||o(`Data file found: ${u} (${S.totalLines} lines). Awaiting confirmation...`),!await l({filename:S.filename,firstLine:S.firstLine,totalLines:S.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),o==null||o("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),o==null||o("Data file confirmed. Starting analysis...")}o==null||o("Analyzing data file...");const c=ui();if(c!=null&&c.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const S=await Rv(c.content,u,o);if(S.success)return S}if(c!=null&&c.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),o==null||o("Using cloud data analysis...");try{const S=await Us(c.content,"full");if(S.success&&S.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let A=`File: ${u}
`;if(A+=`Dataset shape: ${(m=S.summary)==null?void 0:m.shape.rows} rows x ${(g=S.summary)==null?void 0:g.shape.columns} columns

`,A+=`COLUMN NAMES AND TYPES:
`,(y=S.summary)==null||y.columns.forEach(w=>{var L;const I=(L=S.summary)==null?void 0:L.numeric_columns.includes(w);A+=`  - ${w}: ${I?"numeric":"categorical"}
`}),A+=`
`,(d=S.summary)!=null&&d.numeric_columns.length){A+=`NUMERIC COLUMNS STATISTICS:
`;for(const w of S.summary.numeric_columns.slice(0,10)){const I=(_=S.summary.descriptive_stats)==null?void 0:_[w];I&&(A+=`  ${w}:
`,A+=`    min=${I.min}, max=${I.max}, mean=${I.mean}, std=${I.std}
`)}A+=`
`}if((E=S.summary)!=null&&E.categorical_columns.length){A+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const w of S.summary.categorical_columns.slice(0,5)){const I=(T=S.summary.categorical_summary)==null?void 0:T[w];if(I){const L=Object.keys(I).length;A+=`  ${w}: ${L} unique values
`,L<=10&&(A+=`    Values: ${JSON.stringify(I)}
`)}}}return o==null||o("Cloud data analysis complete"),{success:!0,dataSummary:A,dataFileFound:!0}}}catch(S){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",S)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),o==null||o("Using local Python for analysis...");const p=`import os
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
`;try{const S=await wp("analyze_data.py",p,u);if(console.log("[DataAnalysis] Python execution result:",{success:S.success,dataFileFound:S.dataFileFound,stdoutLength:((b=S.stdout)==null?void 0:b.length)||0,stderrLength:((N=S.stderr)==null?void 0:N.length)||0}),S.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",S.stdout.substring(0,1e3)),S.stderr&&console.log("[DataAnalysis] Python stderr:",S.stderr),!S.success)return console.error("[DataAnalysis] Python execution failed:",S.error),{success:!1,dataFileFound:!1,error:S.error};let A;const w=S.dataFileFound??!1;if(S.stdout){const I=S.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(I)A=I[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",A.substring(0,500));else{if(S.stdout.includes("DATA FILE NOT FOUND")||S.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',S.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',S.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return o==null||o("Data analysis complete"),{success:!0,dataSummary:A,dataFileFound:w}}catch(S){return console.error("[DataAnalysis] Error:",S),{success:!1,dataFileFound:!1,error:S.message}}}async function Rc(u,o,l,c,p){const f=ui();if(f!=null&&f.content){console.log("[Visualizations] Using QuickChart.io for figure generation..."),c==null||c("Analyzing data for visualization...");try{const m=await Us(f.content,"full");if(m.success&&m.chart_data&&m.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${m.chart_data.length} chart configs`),c==null||c(`Generating ${m.chart_data.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:g}=await dc(async()=>{const{generateQuickChartFigures:d}=await Promise.resolve().then(()=>cc);return{generateQuickChartFigures:d}},void 0),y=await g(m.chart_data);if(y.success&&y.figures&&y.figures.length>0){const d=y.figures.map(E=>({filename:E.filename,description:E.description,latexRef:E.filename,base64:E.base64})),{storePngFiguresForCompilation:_}=await dc(async()=>{const{storePngFiguresForCompilation:E}=await Promise.resolve().then(()=>cc);return{storePngFiguresForCompilation:E}},void 0);return _(y.figures.map(E=>({filename:E.filename,base64:E.base64}))),c==null||c(`Generated ${d.length} publication-quality figures`),console.log(`[Visualizations] QuickChart.io generated ${d.length} PNG figures`),{figures:d,usedSyntheticData:!1,dataFileFound:!0,dataSummary:m.text_summary||p}}else console.warn("[Visualizations] QuickChart.io generation failed:",y.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(m){console.warn("[Visualizations] QuickChart.io failed:",m)}}console.log("[Visualizations] No data available, generating AI-based PNG figures via QuickChart.io..."),c==null||c("Generating AI-based visualizations...");try{const m=await Tv(u,o,p);if(m&&m.length>0){console.log(`[Visualizations] AI generated ${m.length} chart configurations`),c==null||c(`Rendering ${m.length} PNG figures via QuickChart.io...`);const{generateQuickChartFigures:g,storePngFiguresForCompilation:y}=await dc(async()=>{const{generateQuickChartFigures:_,storePngFiguresForCompilation:E}=await Promise.resolve().then(()=>cc);return{generateQuickChartFigures:_,storePngFiguresForCompilation:E}},void 0),d=await g(m);if(d.success&&d.figures&&d.figures.length>0){const _=d.figures.map(E=>({filename:E.filename,description:E.description,latexRef:E.filename,base64:E.base64}));return y(d.figures.map(E=>({filename:E.filename,base64:E.base64}))),c==null||c(`Generated ${_.length} AI-based PNG figures`),console.log(`[Visualizations] QuickChart.io rendered ${_.length} AI-generated PNG figures`),{figures:_,usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** NOTE: Visualizations generated using AI-synthesized illustrative data. No data file was provided."}}}}catch(m){console.warn("[Visualizations] AI QuickChart generation failed:",m)}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function Tv(u,o,l){const c=`You are generating CONCEPTUAL chart data for a research paper visualization.

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

Return ONLY the JSON array with 1-2 conceptual figures.`;try{let f=(await fr(c,"Generate chart data")).trim();f.startsWith("```json")?f=f.slice(7):f.startsWith("```")&&(f=f.slice(3)),f.endsWith("```")&&(f=f.slice(0,-3)),f=f.trim();const m=JSON.parse(f);if(Array.isArray(m)&&m.length>0)return console.log(`[AI ChartData] Generated ${m.length} chart configurations`),m}catch(p){console.error("[AI ChartData] Failed to generate chart data:",p)}return[]}function Up(u){if(u.length===0)return"";let o=`
% Generated Figures (PNG via QuickChart.io)
`;return u.forEach((l,c)=>{const p=l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),f=l.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");o+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{${p}}
\\caption{${f}}
\\label{fig:fig${c+1}}
\\end{figure}
`}),o}async function np(u){try{return(await fetch(`${u}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function Fp(){return await np(_c)?{type:"vercel",baseUrl:_c}:await np(ks)?{type:"local",baseUrl:ks}:{type:"direct",baseUrl:""}}async function Nv(u,o){var m,g,y;const l=o===ks?`${o}/api/openai/chat`:`${o}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${l}`),console.log(`[OpenAI] Using model: ${wc()}`);const c=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:wc(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:u}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!c.ok){const d=await c.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",c.status,d),new Error(`OpenAI API error: ${c.status} - ${d.error||d.details||"Unknown error"}`)}const f=(y=(g=(m=(await c.json()).choices)==null?void 0:m[0])==null?void 0:g.message)==null?void 0:y.content;if(!f)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let d=f.trim();return d.startsWith("```")&&(d=d.replace(/^```(?:json)?\s*\n?/,""),d=d.replace(/\n?```\s*$/,"")),d=d.trim(),JSON.parse(d)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",f.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function Bs(u){const o=await Fp();if(o.type==="vercel"||o.type==="local")return console.log(`[OpenAI] Using ${o.type} proxy...`),Nv(u,o.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const Cv=async(u,o=1,l="icis_paper",c)=>{var b,N,S,A,w,I,L,F;const p=await jp("REVIEWER");let f="";try{console.log("[Reviewer] Loading MISQ review criteria PDF...");const j=await _p("reviewingMISQ.pdf");j.success&&j.base64&&(console.log("[Reviewer] Extracting review criteria from PDF..."),f=await yv(`Extract and summarize the key IS journal review criteria from this document.
         Focus on: evaluation dimensions, quality standards, common issues to look for,
         and what makes a strong contribution.
         Keep the summary under 500 words, in bullet point format.`,j.base64,j.mimeType),console.log("[Reviewer] MISQ criteria loaded successfully"))}catch(j){console.warn("[Reviewer] Could not load MISQ review criteria:",j)}const m=u.match(/\\title\{([^}]+)\}/),g=m?m[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const y=Iv(u);console.log(`[Reviewer] Found ${y.length} sections: ${y.map(j=>j.name).join(", ")}`);let d;if(y.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const j=`${p}

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
}`;d=await Bs(j)}else{console.log("[Reviewer] Starting section-by-section review...");const j=[];for(const $ of y){console.log(`[Reviewer] Reviewing section: ${$.name}...`);const P=await Dv($,g);j.push(P),console.log(`[Reviewer] ${$.name} score: ${P.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),d=await Ov(j,u,f),console.log("[Reviewer] Section-by-section review complete")}if(d.novelty===void 0||d.significance===void 0||d.methodologicalRigor===void 0||d.clarity===void 0||d.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const _={novelty:d.novelty,significance:d.significance,methodologicalRigor:d.methodologicalRigor,clarity:d.clarity,relevance:d.relevance,reviewScore:d.novelty,reliabilityScore:d.significance,alignmentScore:d.methodologicalRigor,errorsDetected:(((b=d.majorConcerns)==null?void 0:b.length)||0)+(((N=d.minorCorrections)==null?void 0:N.length)||0),feedback:d.overallAssessment,majorConcerns:d.majorConcerns||[],minorCorrections:d.minorCorrections||[],researchQuestionFeedback:d.researchQuestionFeedback,methodFeedback:d.methodFeedback,impactFeedback:d.impactFeedback,writingFeedback:d.writingFeedback,overallAssessment:d.overallAssessment,noveltyComment:d.noveltyComment,significanceComment:d.significanceComment,methodologicalRigorComment:d.methodologicalRigorComment,clarityComment:d.clarityComment,relevanceComment:d.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:d.criticalAlerts??[]};if(c&&c.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const j=await jv(u,c);_.trustworthiness={reliability:j.reliability,reliabilityRationale:j.rationales.reliability,benevolence:j.benevolence,benevolenceRationale:j.rationales.benevolence,goalAlignment:j.goalAlignment,goalAlignmentRationale:j.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(j){console.warn("[Reviewer] Trustworthiness assessment failed:",j.message),_.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${j.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${j.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${j.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),_.trustworthiness={reliability:((S=d.trustworthiness)==null?void 0:S.reliability)??5,reliabilityRationale:((A=d.trustworthiness)==null?void 0:A.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((w=d.trustworthiness)==null?void 0:w.benevolence)??5,benevolenceRationale:((I=d.trustworthiness)==null?void 0:I.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((L=d.trustworthiness)==null?void 0:L.goalAlignment)??5,goalAlignmentRationale:((F=d.trustworthiness)==null?void 0:F.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const E={version:o,paperId:l,timestamp:new Date().toISOString(),reviewScores:{novelty:_.novelty,significance:_.significance,methodologicalRigor:_.methodologicalRigor,clarity:_.clarity,relevance:_.relevance},reviewComments:{novelty:_.noveltyComment,significance:_.significanceComment,methodologicalRigor:_.methodologicalRigorComment,clarity:_.clarityComment,relevance:_.relevanceComment},averageScore:(_.novelty+_.significance+_.methodologicalRigor+_.clarity+_.relevance)/5,errorCounts:{majorErrors:_.majorConcerns.length,minorErrors:_.minorCorrections.length},errorDetails:{majorErrors:_.majorConcerns,minorErrors:_.minorCorrections},trustworthiness:_.trustworthiness,criticalAlerts:_.criticalAlerts.map((j,$)=>({number:$+1,title:j.title,status:"Open",impact:j.impact,details:j.details,actionRequired:j.actionRequired,consequence:j.consequence}))},T={version:o,paperId:l,timestamp:new Date().toISOString(),researchQuestion:_.researchQuestionFeedback,method:_.methodFeedback,potentialImpact:_.impactFeedback,writing:_.writingFeedback,majorConcerns:_.majorConcerns,minorCorrections:_.minorCorrections,overallAssessment:_.overallAssessment};_.oversightFilePath=mp(E),_.feedbackFilePath=Ic(T);try{await xc(`oversight_v${o}.json`,E),await xc(`feedback_v${o}.json`,T),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(j){console.warn("[Reviewer] Could not save files to disk:",j)}return _};function Iv(u){const o=[],l=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],c=u.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let p="";c&&(p=c[1].trim());for(const{pattern:f,name:m,focus:g}of l){const y=new RegExp(f.source,f.flags);let d,_="";for(;(d=y.exec(u))!==null;)_+=d[2]||d[0];_.trim()&&(m==="Introduction"&&p&&(_=`ABSTRACT:
${p}

INTRODUCTION:
${_}`),o.push({name:m,content:_.trim(),reviewFocus:g}))}if(o.length===0){const f=u.split(/\\section\*?\{/);for(let m=1;m<f.length;m++){const g=f[m].indexOf("}");if(g>0){const y=f[m].substring(0,g),d=f[m].substring(g+1);o.push({name:y,content:d.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return o.map(f=>({...f,content:f.content.substring(0,15e3)}))}async function Dv(u,o){const l=`You are reviewing the "${u.name}" section of an academic IS (Information Systems) paper titled: "${o}"

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
}`,c=await Bs(l);if(c.score===void 0)throw new Error(`[Reviewer] Section "${u.name}" response missing required score field`);return{sectionName:u.name,score:c.score,strengths:c.strengths||[],weaknesses:c.weaknesses||[],suggestions:c.suggestions||[],majorConcerns:c.majorConcerns||[],minorCorrections:c.minorCorrections||[]}}async function Ov(u,o,l){const c=u.map(d=>`## ${d.sectionName} (Score: ${d.score}/5)
Strengths: ${d.strengths.join("; ")||"None identified"}
Weaknesses: ${d.weaknesses.join("; ")||"None identified"}
Major Concerns: ${d.majorConcerns.join("; ")||"None"}
Minor Corrections: ${d.minorCorrections.join("; ")||"None"}`).join(`

`),p=u.filter(d=>d.score>0).map(d=>d.score),f=p.length>0?p.reduce((d,_)=>d+_,0)/p.length:3,m=u.flatMap(d=>d.majorConcerns),g=u.flatMap(d=>d.minorCorrections);u.flatMap(d=>d.suggestions);const y=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${c}

AVERAGE SECTION SCORE: ${f.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${m.map((d,_)=>`${_+1}. ${d}`).join(`
`)||"None"}

ALL MINOR CORRECTIONS:
${g.map((d,_)=>`${_+1}. ${d}`).join(`
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
}`;return await Bs(y)}const jv=async(u,o)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const l=o.substring(0,15e3),c=u.substring(0,15e3),p=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

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
}`,f=await Bs(p);if(f.reliability===void 0||f.benevolence===void 0||f.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment}),{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment,rationales:{reliability:f.reliabilityRationale,benevolence:f.benevolenceRationale,goalAlignment:f.goalAlignmentRationale}}};function kv(u){const o=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let l=-1,c="";for(const p of o){const f=u.match(p);if(f&&f.index!==void 0){l=f.index,c=f[0];break}}if(l===-1){const p=Math.floor(u.length*.5),f=u.substring(p).match(/\\section\*?\{[^}]+\}/);f&&f.index!==void 0&&(l=p+f.index,c=f[0])}return l===-1?{part1:u,part2:"",splitPoint:""}:{part1:u.substring(0,l),part2:u.substring(l),splitPoint:c}}const Lv=async(u,o,l,c,p)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${u.length} characters`),console.log(`[Reviser] Feedback length: ${o.length} characters`),console.log("[Reviser] Loading reviser prompt...");const f=await jp("REVISER");console.log(`[Reviser] Prompt loaded (${f.length} chars)`);const g=u.length>2e4;let y;if(g){console.log("[Reviser] Large paper detected - using two-part revision strategy"),p==null||p("Large paper - revising in two parts...");const{part1:b,part2:N,splitPoint:S}=kv(u);console.log(`[Reviser] Split at "${S}" - Part 1: ${b.length} chars, Part 2: ${N.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),p==null||p("Revising Part 1: Abstract through Results...");const A=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${b}

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

Produce the revised PART 1:`;let w=await fr(A,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");w=fc(w),w=w.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${w.length} chars`),await zp(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),p==null||p("Revising Part 2: Discussion, Conclusion, References...");const I=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

You are revising PART 2 of a two-part paper (back matter: Discussion, Conclusions, References).
The front matter has already been revised separately.

Original Paper PART 2:
${N}

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

Produce the revised PART 2:`;let L=await fr(I,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");L=fc(L),console.log(`[Reviser] Part 2 complete: ${L.length} chars`),y=w+`

`+L,console.log(`[Reviser] Combined revised paper: ${y.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),p==null||p("Revising paper content...");const b=`${f}

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

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${b.length} characters`),console.log("[Reviser] Calling Gemini API..."),y=await fr(b,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),y=fc(y)}console.log(`[Reviser] Text revision complete! Output length: ${y.length} characters`);let d,_=!1;const E=(o+" "+l).toLowerCase();if(E.includes("figure")||E.includes("graph")||E.includes("chart")||E.includes("visual")||E.includes("plot")||E.includes("diagram")||E.includes("simulation")||E.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),p==null||p("Updating visualizations based on feedback...");try{let b;if(c){console.log("[Reviser] Analyzing data file for visualization...");try{b=(await Mp(c,p)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(I){console.warn("[Reviser] Could not analyze data file:",I)}}const N=y.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),S=y.match(/\\section{Methodology}([\s\S]*?)\\section{/),A=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${o.substring(0,500)}
Supervisor: ${l.substring(0,300)}
Abstract: ${N?N[1].substring(0,400):""}
`,w=await Rc(A,o,c,p,b);if(_=w.usedSyntheticData,w.dataAlert&&(d=w.dataAlert,console.warn(`[Reviser] ${d}`)),w.figures.length>0){console.log(`[Reviser] Generated ${w.figures.length} updated figures`);const I=Up(w.figures);let L=I;_&&(L=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${I}`),y.match(/(\\section{Results})/)&&(y=y.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${L}
`))}}catch(b){console.error("[Reviser] Visualization update failed:",b),p==null||p("Visualization update failed - continuing with text revisions"),d=`*** VISUALIZATION ERROR during revision: ${b.message}`,_=!0}}return console.log(`[Reviser] Revision complete! Final output length: ${y.length} characters`),{paperContent:y,dataAlert:d,usedSyntheticData:_}},ap="http://localhost:3001/Data";function zv(){const[u,o]=xe.useState(Gh),l=xe.useCallback((b,N)=>{o(S=>({...S,stages:{...S.stages,[b]:N}}))},[]),c=xe.useCallback(b=>{o(N=>({...N,currentBuilderStep:b}))},[]),p=xe.useCallback(b=>{const N=new Date().toLocaleTimeString();o(S=>({...S,logs:[...S.logs,`[${N}] ${b}`]}))},[]),f=xe.useCallback(b=>{o(N=>({...N,currentStage:b,stages:{...N.stages,[b]:Ce.ACTIVE}}))},[]),m=xe.useCallback(b=>{o(N=>({...N,...b}))},[]),g=xe.useCallback(b=>{o(N=>({...N,rounds:[...N.rounds,b],currentRound:b.roundId}))},[]),y=xe.useCallback(b=>{o(N=>{if(N.rounds.length===0)return N;const S=[...N.rounds];return S[S.length-1]={...S[S.length-1],...b},{...N,rounds:S}})},[]),d=xe.useCallback(b=>{o(N=>({...N,stages:{...N.stages,[b]:Ce.PENDING}}))},[]),_=xe.useCallback(b=>{o(N=>({...N,participantId:b}))},[]),E=xe.useCallback(()=>`${u.participantId}_${u.sessionTimestamp}`,[u.participantId,u.sessionTimestamp]),T=xe.useCallback(async()=>{var N;try{const S=await Rp();S.success?console.log(`Backed up ${((N=S.backedUpFiles)==null?void 0:N.length)||0} files to ${S.backupDir}`):console.warn("Backup failed:",S.error)}catch(S){console.warn("Backup not available:",S)}Oy();const b=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);o({...Gh,sessionTimestamp:b,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:u,setStageStatus:l,setBuilderStep:c,addLog:p,moveToStage:f,updateState:m,addRound:g,updateLastRound:y,resetStageData:d,setParticipantId:_,getFilePrefix:E,resetAllState:T}}function Mv(){const[u,o]=xe.useState({}),[l,c]=xe.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null}});xe.useEffect(()=>{p()},[]);const p=async()=>{c(d=>({...d,loading:!0,error:null}));try{const d=`?t=${Date.now()}`,_=await fetch(`${ap}/manifest.json${d}`,{cache:"no-store"});if(!_.ok)throw new Error("No manifest.json found in Data folder");const E=await _.json(),T={interview:null,template:null,dataFile:null,participantId:null};for(const b of E.files||[]){const N=`${ap}/${b.filename}`;b.type==="interview"?(T.interview={filename:b.filename,path:N},T.participantId=b.participantId||null):b.type==="template"?T.template={filename:b.filename,path:N}:b.type==="dataFile"&&(T.dataFile={filename:b.filename,path:N})}c({loading:!1,error:null,detected:T}),T.interview&&await f("interview",T.interview.path,T.interview.filename,T.participantId),T.template&&await f("template",T.template.path,T.template.filename),T.dataFile&&await f("dataFile",T.dataFile.path,T.dataFile.filename)}catch(d){console.log("Auto-detection not available, manual upload required:",d),c({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null}})}},f=async(d,_,E,T)=>{try{const b=`?t=${Date.now()}`,N=await fetch(_+b,{cache:"no-store"});if(!N.ok){console.warn(`Failed to load ${E}`);return}const S=await N.text(),A=new Blob([S],{type:"text/plain"}),w=new File([A],E,{type:"text/plain"});o(d==="interview"?I=>({...I,interview:w,interviewContent:S,participantId:T||I.participantId}):d==="template"?I=>({...I,template:w,templateContent:S}):I=>({...I,dataFile:w,dataFileContent:S})),console.log(`Auto-loaded: ${E}`)}catch(b){console.warn(`Error loading ${E}:`,b)}},m=xe.useCallback(async(d,_)=>{if(!_){o(E=>{const T={...E};return delete T[d],d==="interview"&&delete T.interviewContent,T});return}if(d==="interview"){const E=await _.text();let T=_.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,"");const b=E.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i);b&&(T=b[1].replace(/@/g,"_").replace(/\./g,"_")),o(N=>({...N,interview:_,interviewContent:E,participantId:T}))}else if(d==="template"){const E=await _.text();o(T=>({...T,template:_,templateContent:E}))}else{const E=await _.text();o(b=>({...b,dataFile:_,dataFileContent:E})),console.log("[handleFileChange] Uploading data file to cloud storage...");const T=await Tp(_);T.success?console.log("[handleFileChange] Cloud upload success:",T.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",T.error)}},[]),g=xe.useCallback(()=>u.interviewContent||"",[u.interviewContent]),y=xe.useCallback(async()=>{await p()},[]);return{uploadedFiles:u,handleFileChange:m,getInterviewContent:g,detectionStatus:l,refreshDetection:y}}function Uv(u){const{simulationState:o,setStageStatus:l,setBuilderStep:c,addLog:p,moveToStage:f,updateState:m,addRound:g,updateLastRound:y,resetStageData:d,resetAllState:_,uploadedFiles:E,getInterviewContent:T,refreshDetection:b,onDataFileConfirm:N}=u,[S,A]=xe.useState(!1);ze.STEP1_INTERVIEW_ANALYSIS,ze.STEP1_5_DATA_ASSESSMENT,ze.STEP2_RESEARCH_PLANNING,ze.STEP2_FINAL_METADATA,ze.STEP3_MATH_FORMULATION,ze.STEP4_IMPLEMENTATION,ze.STEP5_EXECUTION,ze.STEP6_VISUALIZATION,ze.STEP7_ANALYSIS,ze.STEP8_PAPER_WRITING,ze.STEP9_FINAL_SUBMISSION;const w=xe.useCallback(async j=>{const $=j??o.currentRound;p(`Reviewer: Starting review process with Gemini (Round ${$})...`),l(me.REVIEWER,Ce.ACTIVE);try{let P=o.paperContent;if(!P){const x=o.currentPaperVersion||1;p(`Reviewer: Paper not in state, reading from localStorage (v${x})...`),P=ra(x)||"",P&&(m({paperContent:P}),p("Reviewer: Paper loaded from localStorage"))}if(!P){p("Reviewer: ERROR - No paper content available in state or localStorage"),l(me.REVIEWER,Ce.ERROR);return}const G=o.participantId||"icis_paper",U=$;p("Reviewer: Analyzing paper with Gemini...");const re=T();re&&p("Reviewer: Interview content available for trustworthiness assessment");const ee=await Cv(P,U,G,re);p(`Reviewer: Analysis complete - Average score: ${((ee.novelty+ee.significance+ee.methodologicalRigor+ee.clarity+ee.relevance)/5).toFixed(1)}/5`);const D={version:U,paperId:G,timestamp:new Date().toISOString(),reviewScores:{novelty:ee.novelty,significance:ee.significance,methodologicalRigor:ee.methodologicalRigor,clarity:ee.clarity,relevance:ee.relevance},reviewComments:{novelty:ee.noveltyComment,significance:ee.significanceComment,methodologicalRigor:ee.methodologicalRigorComment,clarity:ee.clarityComment,relevance:ee.relevanceComment},averageScore:(ee.novelty+ee.significance+ee.methodologicalRigor+ee.clarity+ee.relevance)/5,errorCounts:{majorErrors:ee.majorConcerns.length,minorErrors:ee.minorCorrections.length},errorDetails:{majorErrors:ee.majorConcerns,minorErrors:ee.minorCorrections},trustworthiness:ee.trustworthiness,criticalAlerts:ee.criticalAlerts.map((x,X)=>({number:X+1,title:x.title,status:"Open",impact:x.impact,details:x.details,actionRequired:x.actionRequired,consequence:x.consequence}))},W={version:U,paperId:G,timestamp:new Date().toISOString(),researchQuestion:ee.researchQuestionFeedback,method:ee.methodFeedback,potentialImpact:ee.impactFeedback,writing:ee.writingFeedback,majorConcerns:ee.majorConcerns,minorCorrections:ee.minorCorrections,overallAssessment:ee.overallAssessment};mp(D),Ic(W),p("Reviewer: Saved oversight and feedback files"),g({roundId:U,reviewScore:D.averageScore,reliabilityScore:ee.trustworthiness.reliability,alignmentScore:ee.trustworthiness.goalAlignment,errorsDetected:ee.majorConcerns.length+ee.minorCorrections.length,reviewScores:D.reviewScores,trustworthinessScores:ee.trustworthiness,errorCounts:D.errorCounts,constructiveFeedback:ee.overallAssessment,feedback:ee.overallAssessment,criticalAlerts:ee.criticalAlerts.map(x=>x.title)}),p("Reviewer: Review complete! Proceed to Supervisor for decision."),l(me.REVIEWER,Ce.COMPLETED)}catch(P){p(`Reviewer: ERROR - ${P.message}`),l(me.REVIEWER,Ce.ERROR)}},[l,p,g,m,o.currentRound,o.participantId,o.paperContent]),I=xe.useCallback(async(j,$)=>{var P,G,U,re;switch(j){case me.SETUP:await new Promise(D=>setTimeout(D,500));const ee={interview:!!E.interview,template:!0,examples:!0,dataFile:!!E.dataFile,paperPdf:!1};m({files:ee}),p("Setup: Files verified successfully");break;case me.BUILDER:p("Builder: Starting paper generation with Gemini...");try{const D=T();if(!D){p("Builder: ERROR - No interview content available"),l(me.BUILDER,Ce.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${$}", uploadedFiles.dataFile?.name="${(P=E.dataFile)==null?void 0:P.name}"`);const W=$||((G=E.dataFile)==null?void 0:G.name),x=!W;p(`Builder: Mode - ${x?"Partial paper (no data)":"Full paper with data"}`),p(W?`Builder: Data file - ${W}`:"Builder: WARNING - No data file name available");const V=await xv(D,x,(te,ye)=>{ye==="starting"?p(`Builder: Generating ${te}...`):ye==="completed"?p(`Builder: ${te} complete`):ye==="error"&&p(`Builder: ${te} - error (continuing)`)},W,N);V.dataSummary&&(p("Builder: Data Analysis Summary:"),p(V.dataSummary.substring(0,500)+(V.dataSummary.length>500?"...":""))),V.dataAlert&&p(V.dataAlert),V.usedSyntheticData&&p("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),m({paperContent:V.paperContent,currentPaperVersion:1,dataAlert:V.dataAlert,dataSummary:V.dataSummary}),Kh(1,V.paperContent);const H=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",fe=H?`${H}_icis_paper_v1.tex`:"icis_paper_v1.tex";await bc(fe,V.paperContent),p("Builder: Paper generation complete - saved to localStorage and filesystem"),l(me.BUILDER,Ce.COMPLETED),f(me.REVIEWER),setTimeout(()=>w(),500)}catch(D){p(`Builder: ERROR - ${D.message}`),l(me.BUILDER,Ce.ERROR)}break;case me.REVIEWER:await w();break;case me.SUPERVISOR:p("Supervisor: Awaiting human review and decision..."),l(me.SUPERVISOR,Ce.ACTIVE);return;case me.FINALIZE:p("Finalize: Preparing final submission..."),l(me.FINALIZE,Ce.ACTIVE);return;case me.REVISER:p("Reviser: Starting revision with Gemini..."),console.log("[Workflow] REVISER stage starting"),l(me.REVISER,Ce.ACTIVE);try{let D=o.paperContent;if(console.log(`[Workflow] Paper in state: ${D?D.length+" chars":"none"}`),!D){const ie=o.currentPaperVersion||1;p(`Reviser: Paper not in state, reading from localStorage (v${ie})...`),D=ra(ie)||"",D&&(m({paperContent:D}),p("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${D.length} chars`))}if(!D){p("Reviser: ERROR - No paper content available in state or localStorage"),l(me.REVISER,Ce.ERROR);return}const W=o.rounds[o.rounds.length-1],x=(W==null?void 0:W.feedback)||"Improve clarity and strengthen methodology.",X=$||(W==null?void 0:W.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${x.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${$?"from override":"from state"}): ${X.substring(0,100)}...`),p("Reviser: Analyzing feedback and generating revisions..."),p(`Reviser: Paper size: ${D.length} chars, calling Gemini...`);const V=(U=E.dataFile)==null?void 0:U.name,H=ie=>{p(`Reviser: ${ie}`)};console.log("[Workflow] Calling runReviser...");const fe=await Lv(D,x,X,V,H);console.log(`[Workflow] runReviser completed, result: ${((re=fe.paperContent)==null?void 0:re.length)||0} chars`),fe.dataAlert&&p(fe.dataAlert),fe.usedSyntheticData&&p("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const te=o.currentPaperVersion+1;m({paperContent:fe.paperContent,currentPaperVersion:te,dataAlert:fe.dataAlert||o.dataAlert}),Kh(te,fe.paperContent);const ye=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",C=ye?`${ye}_icis_paper_v${te}.tex`:`icis_paper_v${te}.tex`;await bc(C,fe.paperContent),p(`Reviser: Revision complete - Version ${te} saved`);const k=o.currentRound+1;l(me.REVISER,Ce.COMPLETED),f(me.REVIEWER),m({currentRound:k}),setTimeout(()=>w(k),500)}catch(D){p(`Reviser: ERROR - ${D.message}`),l(me.REVISER,Ce.ERROR)}break}},[E.interview,E.dataFile,m,p,c,l,f,w,o.currentPaperVersion,o.currentRound,o.dataAlert,N]),L=xe.useCallback(async(j,$,P)=>{switch(p(`Stage ${j}: ${$}`),console.log(`[handleStageAction] Stage ${j} action=${$} overrideParam="${P}" (type: ${typeof P})`),$){case"start":l(j,Ce.ACTIVE),A(!0);try{await I(j,P),j!==me.BUILDER&&j!==me.REVIEWER&&j!==me.REVISER&&l(j,Ce.COMPLETED),p(`Stage ${j} completed`)}catch(G){l(j,Ce.ERROR),p(`Stage ${j} error: ${G}`)}finally{A(!1)}break;case"abort":l(j,Ce.ERROR),A(!1),p(`Stage ${j} aborted`);break;case"restart":d(j),l(j,Ce.ACTIVE),A(!0),p(`Stage ${j} restarting...`);try{await I(j,P),j!==me.BUILDER&&j!==me.REVIEWER&&j!==me.REVISER&&l(j,Ce.COMPLETED),p(`Stage ${j} restart completed`)}catch(G){l(j,Ce.ERROR),p(`Stage ${j} restart error: ${G}`)}finally{A(!1)}break;case"skip":l(j,Ce.SKIPPED),p(`Stage ${j} skipped`);break}},[p,l,d,I]),F=xe.useCallback(async(j,$)=>{var P;switch(p(`Action: ${j}`),j){case"START_SETUP":(o.rounds.length>0||o.currentPaperVersion>0||o.paperContent!=="")&&_&&_().then(()=>{p("Setup: Backed up and cleared previous case data")}),L(me.SETUP,"start");break;case"START_BUILDER":p("Setup: Checking for data files...");let U;const re=ui();if(re)U=re.filename,console.log(`[START_BUILDER] Using cloud data file: ${re.filename}`),p(`Setup: Data file ready (cloud) - ${re.filename}`);else if(E.dataFile)U=E.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${U}`),p(`Setup: Data file ready (uploaded) - ${U}`);else try{p("Setup: Refreshing file manifest...");const ee=await gp();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(ee,null,2)),ee.success&&ee.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(ee.manifest.files,null,2));const D=(P=ee.manifest.files)==null?void 0:P.find(W=>W.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",D),D&&(U=D.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${D.filename}"`),p(`Setup: Data file detected - ${D.filename}`),b&&(p("Setup: Loading data file into memory..."),await b(),p("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}U||p("Setup: No data file - will generate partial paper"),l(me.SETUP,Ce.COMPLETED),f(me.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${U}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${U}"`),L(me.BUILDER,"start",U)},500);break;case"PROCEED_TO_SUPERVISOR":l(me.REVIEWER,Ce.COMPLETED),f(me.SUPERVISOR);break;case"SKIP_TO_REVIEWER":l(me.SETUP,Ce.COMPLETED),l(me.BUILDER,Ce.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(me.REVIEWER),setTimeout(()=>L(me.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":l(me.SETUP,Ce.COMPLETED),l(me.BUILDER,Ce.COMPLETED),l(me.REVIEWER,Ce.COMPLETED),m({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(me.SUPERVISOR);break;case"revise":if($){y({supervisorComment:$});const ee=o.currentRound;Qh(ee,ee,$),Wh("CONTINUE",ee),p(`Supervisor: Saved directive to feedback file (round ${ee})`)}l(me.SUPERVISOR,Ce.COMPLETED),f(me.REVISER),p(`Supervisor: Passing directive to Reviser: "${($==null?void 0:$.substring(0,50))||"none"}..."`),setTimeout(()=>L(me.REVISER,"start",$),100);break;case"finalize":if($){y({supervisorComment:$});const ee=o.currentRound;Qh(ee,ee,$),Wh("FINALIZE",ee),p(`Supervisor: Saved finalize decision to feedback file (round ${ee})`)}l(me.SUPERVISOR,Ce.COMPLETED),f(me.FINALIZE);break;case"NEW_CASE":_?_().then(()=>{p("New case started - files backed up and cleared"),b==null||b(),f(me.SETUP)}):f(me.SETUP);break;default:p(`Unknown action: ${j}`)}},[p,f,l,y,L,_,o.rounds.length,o.currentPaperVersion,o.paperContent,m,b]);return{isProcessing:S,handleStageAction:L,handleWorkflowAction:F}}const Fv=()=>{const[u,o]=xe.useState("main"),[l,c]=xe.useState("research"),p=xe.useCallback(D=>{c(D),mv(D),console.log(`[App] Paper mode changed to: ${D}`)},[]),{simulationState:f,setStageStatus:m,setBuilderStep:g,addLog:y,moveToStage:d,updateState:_,addRound:E,updateLastRound:T,resetStageData:b,setParticipantId:N,getFilePrefix:S,resetAllState:A}=zv(),{uploadedFiles:w,handleFileChange:I,getInterviewContent:L,detectionStatus:F,refreshDetection:j}=Mv(),$=xe.useCallback(async D=>{const W=`Data File Verification

File: ${D.filename}
Total lines: ${D.totalLines}

First line (column headers):
${D.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(W)},[]),{isProcessing:P,handleStageAction:G,handleWorkflowAction:U}=Uv({simulationState:f,setStageStatus:m,setBuilderStep:g,addLog:y,moveToStage:d,updateState:_,addRound:E,updateLastRound:T,resetStageData:b,resetAllState:A,uploadedFiles:w,getInterviewContent:L,refreshDetection:j,onDataFileConfirm:$});xe.useEffect(()=>{w.participantId&&w.participantId!==f.participantId&&(N(w.participantId),y(`Participant ID set: ${w.participantId}`))},[w.participantId,f.participantId,N,y]);const re=D=>{y(`Aborting ${D}...`),G(D,"abort")},ee=D=>{y(`Restarting ${D}...`),G(D,"restart"),setTimeout(()=>G(D,"start"),100)};return s.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[s.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:s.jsx(Cy,{currentStage:f.currentStage,currentBuilderStep:f.currentBuilderStep,stagesState:f.stages,isPartialPaper:f.isPartialPaper,currentRound:f.currentRound,isProcessing:P,onStageClick:d,onStageAction:G,onNewCase:()=>U("NEW_CASE"),onNewInterview:()=>{window.open(`/asd/interview.html?mode=${l}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/asd/paper-to-interview.html","_blank","noopener,noreferrer")},onResearchAdmin:l==="research"?()=>o(u==="admin"?"main":"admin"):void 0,paperMode:l,onPaperModeChange:p})}),s.jsx("div",{className:"flex-1 h-full",children:u==="admin"?s.jsx(nv,{onClose:()=>o("main")}):s.jsx($y,{state:f,isProcessing:P,onAction:U,uploadedFiles:w,onFileChange:I,detectionStatus:F,onRefreshDetection:j,onStageAbort:re,onStageRestart:ee,filePrefix:S()})})]})},Bv=({onLogin:u})=>{const[o,l]=xe.useState(""),[c,p]=xe.useState(""),[f,m]=xe.useState(""),[g,y]=xe.useState(!1),d=_=>{_.preventDefault(),m(""),y(!0),setTimeout(()=>{o==="asd"&&c==="tennessee"?(sessionStorage.setItem("icis_authenticated","true"),u()):(m("Invalid username or password"),y(!1))},500)};return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-md",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:s.jsx("span",{className:"text-2xl font-bold text-white",children:"IC"})}),s.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"ICIScopilot"}),s.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),s.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:s.jsxs("form",{onSubmit:d,className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(wy,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"text",id:"username",value:o,onChange:_=>l(_.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:s.jsx(ny,{className:"h-5 w-5 text-slate-400"})}),s.jsx("input",{type:"password",id:"password",value:c,onChange:_=>p(_.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),f&&s.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[s.jsx(Ds,{className:"h-5 w-5 flex-shrink-0"}),s.jsx("span",{className:"text-sm",children:f})]}),s.jsx("button",{type:"submit",disabled:g,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:g?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),s.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"ICIS Conference Paper Authoring System"})]})})},Pv=()=>{const[u,o]=xe.useState(null);xe.useEffect(()=>{const c=sessionStorage.getItem("icis_authenticated");o(c==="true")},[]);const l=()=>{o(!0)};return u===null?s.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:s.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):u?s.jsx(Fv,{}):s.jsx(Bv,{onLogin:l})},Bp=document.getElementById("root");if(!Bp)throw new Error("Could not find root element to mount to");const Vv=d0.createRoot(Bp);Vv.render(s.jsx(a0.StrictMode,{children:s.jsx(Pv,{})}));
