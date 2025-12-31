(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const y of f.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function l(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(d){if(d.ep)return;d.ep=!0;const f=l(d);fetch(d.href,f)}})();var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eu(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Ic={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function V0(){if(cp)return gi;cp=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(u,d,f){var y=null;if(f!==void 0&&(y=""+f),d.key!==void 0&&(y=""+d.key),"key"in d){f={};for(var p in d)p!=="key"&&(f[p]=d[p])}else f=d;return d=f.ref,{$$typeof:c,type:u,key:y,ref:d!==void 0?d:null,props:f}}return gi.Fragment=o,gi.jsx=l,gi.jsxs=l,gi}var up;function $0(){return up||(up=1,Ic.exports=V0()),Ic.exports}var i=$0(),Dc={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function H0(){if(dp)return ke;dp=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),y=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),_=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,E={};function w(C,k,se){this.props=C,this.context=k,this.refs=E,this.updater=se||T}w.prototype.isReactComponent={},w.prototype.setState=function(C,k){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,k,"setState")},w.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function D(){}D.prototype=w.prototype;function L(C,k,se){this.props=C,this.context=k,this.refs=E,this.updater=se||T}var P=L.prototype=new D;P.constructor=L,h(P,w.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function z(C,k,se){var le=se.ref;return{$$typeof:c,type:C,key:k,ref:le!==void 0?le:null,props:se}}function re(C,k){return z(C.type,k,C.props)}function Z(C){return typeof C=="object"&&C!==null&&C.$$typeof===c}function j(C){var k={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(se){return k[se]})}var Q=/\/+/g;function S(C,k){return typeof C=="object"&&C!==null&&C.key!=null?j(""+C.key):k.toString(36)}function Y(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(B,B):(C.status="pending",C.then(function(k){C.status==="pending"&&(C.status="fulfilled",C.value=k)},function(k){C.status==="pending"&&(C.status="rejected",C.reason=k)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function V(C,k,se,le,oe){var we=typeof C;(we==="undefined"||we==="boolean")&&(C=null);var Ie=!1;if(C===null)Ie=!0;else switch(we){case"bigint":case"string":case"number":Ie=!0;break;case"object":switch(C.$$typeof){case c:case o:Ie=!0;break;case A:return Ie=C._init,V(Ie(C._payload),k,se,le,oe)}}if(Ie)return oe=oe(C),Ie=le===""?"."+S(C,0):le,I(oe)?(se="",Ie!=null&&(se=Ie.replace(Q,"$&/")+"/"),V(oe,k,se,"",function(Oe){return Oe})):oe!=null&&(Z(oe)&&(oe=re(oe,se+(oe.key==null||C&&C.key===oe.key?"":(""+oe.key).replace(Q,"$&/")+"/")+Ie)),k.push(oe)),1;Ie=0;var Te=le===""?".":le+":";if(I(C))for(var Ee=0;Ee<C.length;Ee++)le=C[Ee],we=Te+S(le,Ee),Ie+=V(le,k,se,we,oe);else if(Ee=v(C),typeof Ee=="function")for(C=Ee.call(C),Ee=0;!(le=C.next()).done;)le=le.value,we=Te+S(le,Ee++),Ie+=V(le,k,se,we,oe);else if(we==="object"){if(typeof C.then=="function")return V(Y(C),k,se,le,oe);throw k=String(C),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return Ie}function $(C,k,se){if(C==null)return C;var le=[],oe=0;return V(C,le,"","",function(we){return k.call(se,we,oe++)}),le}function ue(C){if(C._status===-1){var k=C._result;k=k(),k.then(function(se){(C._status===0||C._status===-1)&&(C._status=1,C._result=se)},function(se){(C._status===0||C._status===-1)&&(C._status=2,C._result=se)}),C._status===-1&&(C._status=0,C._result=k)}if(C._status===1)return C._result.default;throw C._result}var te=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ve={map:$,forEach:function(C,k,se){$(C,function(){k.apply(this,arguments)},se)},count:function(C){var k=0;return $(C,function(){k++}),k},toArray:function(C){return $(C,function(k){return k})||[]},only:function(C){if(!Z(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ke.Activity=R,ke.Children=ve,ke.Component=w,ke.Fragment=l,ke.Profiler=d,ke.PureComponent=L,ke.StrictMode=u,ke.Suspense=x,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ke.__COMPILER_RUNTIME={__proto__:null,c:function(C){return F.H.useMemoCache(C)}},ke.cache=function(C){return function(){return C.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(C,k,se){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var le=h({},C.props),oe=C.key;if(k!=null)for(we in k.key!==void 0&&(oe=""+k.key),k)!G.call(k,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&k.ref===void 0||(le[we]=k[we]);var we=arguments.length-2;if(we===1)le.children=se;else if(1<we){for(var Ie=Array(we),Te=0;Te<we;Te++)Ie[Te]=arguments[Te+2];le.children=Ie}return z(C.type,oe,le)},ke.createContext=function(C){return C={$$typeof:y,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},ke.createElement=function(C,k,se){var le,oe={},we=null;if(k!=null)for(le in k.key!==void 0&&(we=""+k.key),k)G.call(k,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(oe[le]=k[le]);var Ie=arguments.length-2;if(Ie===1)oe.children=se;else if(1<Ie){for(var Te=Array(Ie),Ee=0;Ee<Ie;Ee++)Te[Ee]=arguments[Ee+2];oe.children=Te}if(C&&C.defaultProps)for(le in Ie=C.defaultProps,Ie)oe[le]===void 0&&(oe[le]=Ie[le]);return z(C,we,oe)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(C){return{$$typeof:p,render:C}},ke.isValidElement=Z,ke.lazy=function(C){return{$$typeof:A,_payload:{_status:-1,_result:C},_init:ue}},ke.memo=function(C,k){return{$$typeof:m,type:C,compare:k===void 0?null:k}},ke.startTransition=function(C){var k=F.T,se={};F.T=se;try{var le=C(),oe=F.S;oe!==null&&oe(se,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(B,te)}catch(we){te(we)}finally{k!==null&&se.types!==null&&(k.types=se.types),F.T=k}},ke.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ke.use=function(C){return F.H.use(C)},ke.useActionState=function(C,k,se){return F.H.useActionState(C,k,se)},ke.useCallback=function(C,k){return F.H.useCallback(C,k)},ke.useContext=function(C){return F.H.useContext(C)},ke.useDebugValue=function(){},ke.useDeferredValue=function(C,k){return F.H.useDeferredValue(C,k)},ke.useEffect=function(C,k){return F.H.useEffect(C,k)},ke.useEffectEvent=function(C){return F.H.useEffectEvent(C)},ke.useId=function(){return F.H.useId()},ke.useImperativeHandle=function(C,k,se){return F.H.useImperativeHandle(C,k,se)},ke.useInsertionEffect=function(C,k){return F.H.useInsertionEffect(C,k)},ke.useLayoutEffect=function(C,k){return F.H.useLayoutEffect(C,k)},ke.useMemo=function(C,k){return F.H.useMemo(C,k)},ke.useOptimistic=function(C,k){return F.H.useOptimistic(C,k)},ke.useReducer=function(C,k,se){return F.H.useReducer(C,k,se)},ke.useRef=function(C){return F.H.useRef(C)},ke.useState=function(C){return F.H.useState(C)},ke.useSyncExternalStore=function(C,k,se){return F.H.useSyncExternalStore(C,k,se)},ke.useTransition=function(){return F.H.useTransition()},ke.version="19.2.1",ke}var fp;function tu(){return fp||(fp=1,Dc.exports=H0()),Dc.exports}var he=tu();const G0=eu(he);var jc={exports:{}},yi={},Oc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Y0(){return hp||(hp=1,(function(c){function o(V,$){var ue=V.length;V.push($);e:for(;0<ue;){var te=ue-1>>>1,ve=V[te];if(0<d(ve,$))V[te]=$,V[ue]=ve,ue=te;else break e}}function l(V){return V.length===0?null:V[0]}function u(V){if(V.length===0)return null;var $=V[0],ue=V.pop();if(ue!==$){V[0]=ue;e:for(var te=0,ve=V.length,C=ve>>>1;te<C;){var k=2*(te+1)-1,se=V[k],le=k+1,oe=V[le];if(0>d(se,ue))le<ve&&0>d(oe,se)?(V[te]=oe,V[le]=ue,te=le):(V[te]=se,V[k]=ue,te=k);else if(le<ve&&0>d(oe,ue))V[te]=oe,V[le]=ue,te=le;else break e}}return $}function d(V,$){var ue=V.sortIndex-$.sortIndex;return ue!==0?ue:V.id-$.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;c.unstable_now=function(){return f.now()}}else{var y=Date,p=y.now();c.unstable_now=function(){return y.now()-p}}var x=[],m=[],A=1,R=null,_=3,v=!1,T=!1,h=!1,E=!1,w=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function P(V){for(var $=l(m);$!==null;){if($.callback===null)u(m);else if($.startTime<=V)u(m),$.sortIndex=$.expirationTime,o(x,$);else break;$=l(m)}}function I(V){if(h=!1,P(V),!T)if(l(x)!==null)T=!0,B||(B=!0,j());else{var $=l(m);$!==null&&Y(I,$.startTime-V)}}var B=!1,F=-1,G=5,z=-1;function re(){return E?!0:!(c.unstable_now()-z<G)}function Z(){if(E=!1,B){var V=c.unstable_now();z=V;var $=!0;try{e:{T=!1,h&&(h=!1,D(F),F=-1),v=!0;var ue=_;try{t:{for(P(V),R=l(x);R!==null&&!(R.expirationTime>V&&re());){var te=R.callback;if(typeof te=="function"){R.callback=null,_=R.priorityLevel;var ve=te(R.expirationTime<=V);if(V=c.unstable_now(),typeof ve=="function"){R.callback=ve,P(V),$=!0;break t}R===l(x)&&u(x),P(V)}else u(x);R=l(x)}if(R!==null)$=!0;else{var C=l(m);C!==null&&Y(I,C.startTime-V),$=!1}}break e}finally{R=null,_=ue,v=!1}$=void 0}}finally{$?j():B=!1}}}var j;if(typeof L=="function")j=function(){L(Z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,S=Q.port2;Q.port1.onmessage=Z,j=function(){S.postMessage(null)}}else j=function(){w(Z,0)};function Y(V,$){F=w(function(){V(c.unstable_now())},$)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(V){V.callback=null},c.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<V?Math.floor(1e3/V):5},c.unstable_getCurrentPriorityLevel=function(){return _},c.unstable_next=function(V){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var ue=_;_=$;try{return V()}finally{_=ue}},c.unstable_requestPaint=function(){E=!0},c.unstable_runWithPriority=function(V,$){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ue=_;_=V;try{return $()}finally{_=ue}},c.unstable_scheduleCallback=function(V,$,ue){var te=c.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?te+ue:te):ue=te,V){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ue+ve,V={id:A++,callback:$,priorityLevel:V,startTime:ue,expirationTime:ve,sortIndex:-1},ue>te?(V.sortIndex=ue,o(m,V),l(x)===null&&V===l(m)&&(h?(D(F),F=-1):h=!0,Y(I,ue-te))):(V.sortIndex=ve,o(x,V),T||v||(T=!0,B||(B=!0,j()))),V},c.unstable_shouldYield=re,c.unstable_wrapCallback=function(V){var $=_;return function(){var ue=_;_=$;try{return V.apply(this,arguments)}finally{_=ue}}}})(kc)),kc}var pp;function q0(){return pp||(pp=1,Oc.exports=Y0()),Oc.exports}var Lc={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function X0(){if(mp)return _t;mp=1;var c=tu();function o(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)m+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var u={d:{f:l,r:function(){throw Error(o(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(x,m,A){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:x,containerInfo:m,implementation:A}}var y=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,_t.createPortal=function(x,m){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return f(x,m,null,A)},_t.flushSync=function(x){var m=y.T,A=u.p;try{if(y.T=null,u.p=2,x)return x()}finally{y.T=m,u.p=A,u.d.f()}},_t.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(x,m))},_t.prefetchDNS=function(x){typeof x=="string"&&u.d.D(x)},_t.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var A=m.as,R=p(A,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;A==="style"?u.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:R,integrity:_,fetchPriority:v}):A==="script"&&u.d.X(x,{crossOrigin:R,integrity:_,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},_t.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var A=p(m.as,m.crossOrigin);u.d.M(x,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(x)},_t.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var A=m.as,R=p(A,m.crossOrigin);u.d.L(x,A,{crossOrigin:R,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},_t.preloadModule=function(x,m){if(typeof x=="string")if(m){var A=p(m.as,m.crossOrigin);u.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(x)},_t.requestFormReset=function(x){u.d.r(x)},_t.unstable_batchedUpdates=function(x,m){return x(m)},_t.useFormState=function(x,m,A){return y.H.useFormState(x,m,A)},_t.useFormStatus=function(){return y.H.useHostTransitionStatus()},_t.version="19.2.1",_t}var gp;function Q0(){if(gp)return Lc.exports;gp=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),Lc.exports=X0(),Lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function Z0(){if(yp)return yi;yp=1;var c=q0(),o=tu(),l=Q0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return x(r),e;if(s===a)return x(r),t;s=s.sibling}throw Error(u(188))}if(n.return!==a.return)n=r,a=s;else{for(var g=!1,N=r.child;N;){if(N===n){g=!0,n=r,a=s;break}if(N===a){g=!0,a=r,n=s;break}N=N.sibling}if(!g){for(N=s.child;N;){if(N===n){g=!0,n=s,a=r;break}if(N===a){g=!0,a=s,n=r;break}N=N.sibling}if(!g)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function S(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case w:return"Profiler";case E:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:S(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return S(e(t))}catch{}}return null}var Y=Array.isArray,V=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},te=[],ve=-1;function C(e){return{current:e}}function k(e){0>ve||(e.current=te[ve],te[ve]=null,ve--)}function se(e,t){ve++,te[ve]=e.current,e.current=t}var le=C(null),oe=C(null),we=C(null),Ie=C(null);function Te(e,t){switch(se(we,t),se(oe,e),se(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jh(t),e=Oh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(le),se(le,e)}function Ee(){k(le),k(oe),k(we)}function Oe(e){e.memoizedState!==null&&se(Ie,e);var t=le.current,n=Oh(t,e.type);t!==n&&(se(oe,e),se(le,n))}function ze(e){oe.current===e&&(k(le),k(oe)),Ie.current===e&&(k(Ie),fi._currentValue=ue)}var bt,pe;function b(e){if(bt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bt=t&&t[1]||"",pe=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+e+pe}var ae=!1;function ne(e,t){if(!e||ae)return"";ae=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var fe=function(){throw Error()};if(Object.defineProperty(fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(fe,[])}catch(ie){var ee=ie}Reflect.construct(e,[],fe)}else{try{fe.call()}catch(ie){ee=ie}e.call(fe.prototype)}}else{try{throw Error()}catch(ie){ee=ie}(fe=e())&&typeof fe.catch=="function"&&fe.catch(function(){})}}catch(ie){if(ie&&ee&&typeof ie.stack=="string")return[ie.stack,ee.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),g=s[0],N=s[1];if(g&&N){var U=g.split(`
`),K=N.split(`
`);for(r=a=0;a<U.length&&!U[a].includes("DetermineComponentFrameRoot");)a++;for(;r<K.length&&!K[r].includes("DetermineComponentFrameRoot");)r++;if(a===U.length||r===K.length)for(a=U.length-1,r=K.length-1;1<=a&&0<=r&&U[a]!==K[r];)r--;for(;1<=a&&0<=r;a--,r--)if(U[a]!==K[r]){if(a!==1||r!==1)do if(a--,r--,0>r||U[a]!==K[r]){var ce=`
`+U[a].replace(" at new "," at ");return e.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",e.displayName)),ce}while(1<=a&&0<=r);break}}}finally{ae=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?b(n):""}function M(e,t){switch(e.tag){case 26:case 27:case 5:return b(e.type);case 16:return b("Lazy");case 13:return e.child!==t&&t!==null?b("Suspense Fallback"):b("Suspense");case 19:return b("SuspenseList");case 0:case 15:return ne(e.type,!1);case 11:return ne(e.type.render,!1);case 1:return ne(e.type,!0);case 31:return b("Activity");default:return""}}function O(e){try{var t="",n=null;do t+=M(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var q=Object.prototype.hasOwnProperty,me=c.unstable_scheduleCallback,ge=c.unstable_cancelCallback,J=c.unstable_shouldYield,be=c.unstable_requestPaint,Se=c.unstable_now,xe=c.unstable_getCurrentPriorityLevel,Ne=c.unstable_ImmediatePriority,Xe=c.unstable_UserBlockingPriority,Ue=c.unstable_NormalPriority,Ct=c.unstable_LowPriority,Mn=c.unstable_IdlePriority,Gt=c.log,da=c.unstable_setDisableYieldValue,et=null,gt=null;function Yt(e){if(typeof Gt=="function"&&da(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(et,e)}catch{}}var it=Math.clz32?Math.clz32:gl,Li=Math.log,ml=Math.LN2;function gl(e){return e>>>=0,e===0?32:31-(Li(e)/ml|0)|0}var Oa=256,fa=262144,dn=4194304;function qt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,s=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var N=a&134217727;return N!==0?(a=N&~s,a!==0?r=qt(a):(g&=N,g!==0?r=qt(g):n||(n=N&~e,n!==0&&(r=qt(n))))):(N=a&~s,N!==0?r=qt(N):g!==0?r=qt(g):n||(n=a&~e,n!==0&&(r=qt(n)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Rr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fu(){var e=dn;return dn<<=1,(dn&62914560)===0&&(dn=4194304),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Im(e,t,n,a,r,s){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var N=e.entanglements,U=e.expirationTimes,K=e.hiddenUpdates;for(n=g&~n;0<n;){var ce=31-it(n),fe=1<<ce;N[ce]=0,U[ce]=-1;var ee=K[ce];if(ee!==null)for(K[ce]=null,ce=0;ce<ee.length;ce++){var ie=ee[ce];ie!==null&&(ie.lane&=-536870913)}n&=~fe}a!==0&&hu(e,a,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(g&~t))}function hu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-it(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function mu(e,t){var n=t&-t;return n=(n&42)!==0?1:vl(n),(n&(e.suspendedLanes|t))!==0?0:n}function vl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gu(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:np(e.type))}function yu(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var zn=Math.random().toString(36).slice(2),xt="__reactFiber$"+zn,It="__reactProps$"+zn,ka="__reactContainer$"+zn,xl="__reactEvents$"+zn,Dm="__reactListeners$"+zn,jm="__reactHandles$"+zn,vu="__reactResources$"+zn,_r="__reactMarker$"+zn;function Sl(e){delete e[xt],delete e[It],delete e[xl],delete e[Dm],delete e[jm]}function La(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ka]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bh(e);e!==null;){if(n=e[xt])return n;e=Bh(e)}return t}e=n,n=e.parentNode}return null}function Ma(e){if(e=e[xt]||e[ka]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Nr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function za(e){var t=e[vu];return t||(t=e[vu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yt(e){e[_r]=!0}var bu=new Set,xu={};function ha(e,t){Ua(e,t),Ua(e+"Capture",t)}function Ua(e,t){for(xu[e]=t,e=0;e<t.length;e++)bu.add(t[e])}var Om=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Su={},Eu={};function km(e){return q.call(Eu,e)?!0:q.call(Su,e)?!1:Om.test(e)?Eu[e]=!0:(Su[e]=!0,!1)}function zi(e,t,n){if(km(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ui(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(g){n=""+g,s.call(this,g)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function El(e){if(!e._valueTracker){var t=wu(e)?"checked":"value";e._valueTracker=Lm(e,t,""+e[t])}}function Au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=wu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mm=/[\n"\\]/g;function Qt(e){return e.replace(Mm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wl(e,t,n,a,r,s,g,N){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xt(t)):e.value!==""+Xt(t)&&(e.value=""+Xt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Al(e,g,Xt(t)):n!=null?Al(e,g,Xt(n)):a!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+Xt(N):e.removeAttribute("name")}function Ru(e,t,n,a,r,s,g,N){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){El(e);return}n=n!=null?""+Xt(n):"",t=t!=null?""+Xt(t):n,N||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=N?e.checked:!!a,e.defaultChecked=!!a,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),El(e)}function Al(e,t,n){t==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Fa(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Tu(e,t,n){if(t!=null&&(t=""+Xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xt(n):""}function _u(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Y(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Xt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),El(e)}function Ba(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||zm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cu(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Nu(e,r,a)}else for(var s in t)t.hasOwnProperty(s)&&Nu(e,s,t[s])}function Rl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Um=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bi(e){return Fm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function yn(){}var Tl=null;function _l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Va=null;function Iu(e){var t=Ma(e);if(t&&(e=t.stateNode)){var n=e[It]||null;e:switch(e=t.stateNode,t.type){case"input":if(wl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[It]||null;if(!r)throw Error(u(90));wl(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Au(a)}break e;case"textarea":Tu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fa(e,!!n.multiple,t,!1)}}}var Nl=!1;function Du(e,t,n){if(Nl)return e(t,n);Nl=!0;try{var a=e(t);return a}finally{if(Nl=!1,(Pa!==null||Va!==null)&&(_s(),Pa&&(t=Pa,e=Va,Va=Pa=null,Iu(t),e)))for(t=0;t<e.length;t++)Iu(e[t])}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[It]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=!1;if(vn)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Cl=!1}var Un=null,Il=null,Pi=null;function ju(){if(Pi)return Pi;var e,t=Il,n=t.length,a,r="value"in Un?Un.value:Un.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var g=n-e;for(a=1;a<=g&&t[n-a]===r[s-a];a++);return Pi=r.slice(e,1<a?1-a:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function Ou(){return!1}function Dt(e){function t(n,a,r,s,g){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=s,this.target=g,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(n=e[N],this[N]=n?n(s):s[N]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$i:Ou,this.isPropagationStopped=Ou,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Dt(pa),Dr=R({},pa,{view:0,detail:0}),Bm=Dt(Dr),Dl,jl,jr,Gi=R({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Dl=e.screenX-jr.screenX,jl=e.screenY-jr.screenY):jl=Dl=0,jr=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),ku=Dt(Gi),Pm=R({},Gi,{dataTransfer:0}),Vm=Dt(Pm),$m=R({},Dr,{relatedTarget:0}),Ol=Dt($m),Hm=R({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=Dt(Hm),Ym=R({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qm=Dt(Ym),Xm=R({},pa,{data:0}),Lu=Dt(Xm),Qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wm[e])?!!t[e]:!1}function kl(){return Km}var Jm=R({},Dr,{key:function(e){if(e.key){var t=Qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eg=Dt(Jm),tg=R({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Dt(tg),ng=R({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),ag=Dt(ng),rg=R({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ig=Dt(rg),sg=R({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lg=Dt(sg),og=R({},pa,{newState:0,oldState:0}),cg=Dt(og),ug=[9,13,27,32],Ll=vn&&"CompositionEvent"in window,Or=null;vn&&"documentMode"in document&&(Or=document.documentMode);var dg=vn&&"TextEvent"in window&&!Or,zu=vn&&(!Ll||Or&&8<Or&&11>=Or),Uu=" ",Fu=!1;function Bu(e,t){switch(e){case"keyup":return ug.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $a=!1;function fg(e,t){switch(e){case"compositionend":return Pu(t);case"keypress":return t.which!==32?null:(Fu=!0,Uu);case"textInput":return e=t.data,e===Uu&&Fu?null:e;default:return null}}function hg(e,t){if($a)return e==="compositionend"||!Ll&&Bu(e,t)?(e=ju(),Pi=Il=Un=null,$a=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zu&&t.locale!=="ko"?null:t.data;default:return null}}var pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pg[e.type]:t==="textarea"}function $u(e,t,n,a){Pa?Va?Va.push(a):Va=[a]:Pa=a,t=ks(t,"onChange"),0<t.length&&(n=new Hi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var kr=null,Lr=null;function mg(e){Th(e,0)}function Yi(e){var t=Nr(e);if(Au(t))return e}function Hu(e,t){if(e==="change")return t}var Gu=!1;if(vn){var Ml;if(vn){var zl="oninput"in document;if(!zl){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),zl=typeof Yu.oninput=="function"}Ml=zl}else Ml=!1;Gu=Ml&&(!document.documentMode||9<document.documentMode)}function qu(){kr&&(kr.detachEvent("onpropertychange",Xu),Lr=kr=null)}function Xu(e){if(e.propertyName==="value"&&Yi(Lr)){var t=[];$u(t,Lr,e,_l(e)),Du(mg,t)}}function gg(e,t,n){e==="focusin"?(qu(),kr=t,Lr=n,kr.attachEvent("onpropertychange",Xu)):e==="focusout"&&qu()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Lr)}function vg(e,t){if(e==="click")return Yi(t)}function bg(e,t){if(e==="input"||e==="change")return Yi(t)}function xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:xg;function Mr(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!q.call(t,r)||!Ut(e[r],t[r]))return!1}return!0}function Qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Qu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qu(n)}}function Wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sg=vn&&"documentMode"in document&&11>=document.documentMode,Ha=null,Fl=null,zr=null,Bl=!1;function Ju(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bl||Ha==null||Ha!==Fi(a)||(a=Ha,"selectionStart"in a&&Ul(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),zr&&Mr(zr,a)||(zr=a,a=ks(Fl,"onSelect"),0<a.length&&(t=new Hi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ha)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ga={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},Pl={},ed={};vn&&(ed=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ga(e){if(Pl[e])return Pl[e];if(!Ga[e])return e;var t=Ga[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ed)return Pl[e]=t[n];return e}var td=ga("animationend"),nd=ga("animationiteration"),ad=ga("animationstart"),Eg=ga("transitionrun"),wg=ga("transitionstart"),Ag=ga("transitioncancel"),rd=ga("transitionend"),id=new Map,Vl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vl.push("scrollEnd");function sn(e,t){id.set(e,t),ha(t,[e])}var qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zt=[],Ya=0,$l=0;function Xi(){for(var e=Ya,t=$l=Ya=0;t<e;){var n=Zt[t];Zt[t++]=null;var a=Zt[t];Zt[t++]=null;var r=Zt[t];Zt[t++]=null;var s=Zt[t];if(Zt[t++]=null,a!==null&&r!==null){var g=a.pending;g===null?r.next=r:(r.next=g.next,g.next=r),a.pending=r}s!==0&&sd(n,r,s)}}function Qi(e,t,n,a){Zt[Ya++]=e,Zt[Ya++]=t,Zt[Ya++]=n,Zt[Ya++]=a,$l|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Hl(e,t,n,a){return Qi(e,t,n,a),Zi(e)}function ya(e,t){return Qi(e,null,null,t),Zi(e)}function sd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-it(n),e=s.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),s):null}function Zi(e){if(50<ii)throw ii=0,ec=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qa={};function Rg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,a){return new Rg(e,t,n,a)}function Gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ld(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wi(e,t,n,a,r,s){var g=0;if(a=e,typeof e=="function")Gl(e)&&(g=1);else if(typeof e=="string")g=I0(e,n,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case z:return e=Ft(31,n,t,r),e.elementType=z,e.lanes=s,e;case h:return va(n.children,r,s,t);case E:g=8,r|=24;break;case w:return e=Ft(12,n,t,r|2),e.elementType=w,e.lanes=s,e;case I:return e=Ft(13,n,t,r),e.elementType=I,e.lanes=s,e;case B:return e=Ft(19,n,t,r),e.elementType=B,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:g=10;break e;case D:g=9;break e;case P:g=11;break e;case F:g=14;break e;case G:g=16,a=null;break e}g=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ft(g,n,t,r),t.elementType=e,t.type=a,t.lanes=s,t}function va(e,t,n,a){return e=Ft(7,e,a,t),e.lanes=n,e}function Yl(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function od(e){var t=Ft(18,null,null,0);return t.stateNode=e,t}function ql(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cd=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var n=cd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:O(t)},cd.set(e,t),t)}return{value:e,source:t,stack:O(t)}}var Xa=[],Qa=0,Ki=null,Ur=0,Kt=[],Jt=0,Fn=null,fn=1,hn="";function xn(e,t){Xa[Qa++]=Ur,Xa[Qa++]=Ki,Ki=e,Ur=t}function ud(e,t,n){Kt[Jt++]=fn,Kt[Jt++]=hn,Kt[Jt++]=Fn,Fn=e;var a=fn;e=hn;var r=32-it(a)-1;a&=~(1<<r),n+=1;var s=32-it(t)+r;if(30<s){var g=r-r%5;s=(a&(1<<g)-1).toString(32),a>>=g,r-=g,fn=1<<32-it(t)+r|n<<r|a,hn=s+e}else fn=1<<s|n<<r|a,hn=e}function Xl(e){e.return!==null&&(xn(e,1),ud(e,1,0))}function Ql(e){for(;e===Ki;)Ki=Xa[--Qa],Xa[Qa]=null,Ur=Xa[--Qa],Xa[Qa]=null;for(;e===Fn;)Fn=Kt[--Jt],Kt[Jt]=null,hn=Kt[--Jt],Kt[Jt]=null,fn=Kt[--Jt],Kt[Jt]=null}function dd(e,t){Kt[Jt++]=fn,Kt[Jt++]=hn,Kt[Jt++]=Fn,fn=t.id,hn=t.overflow,Fn=e}var St=null,nt=null,He=!1,Bn=null,en=!1,Zl=Error(u(519));function Pn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fr(Wt(t,e)),Zl}function fd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[xt]=e,t[It]=a,n){case"dialog":Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":case"embed":Pe("load",t);break;case"video":case"audio":for(n=0;n<li.length;n++)Pe(li[n],t);break;case"source":Pe("error",t);break;case"img":case"image":case"link":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"input":Pe("invalid",t),Ru(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Pe("invalid",t);break;case"textarea":Pe("invalid",t),_u(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ih(t.textContent,n)?(a.popover!=null&&(Pe("beforetoggle",t),Pe("toggle",t)),a.onScroll!=null&&Pe("scroll",t),a.onScrollEnd!=null&&Pe("scrollend",t),a.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||Pn(e,!0)}function hd(e){for(St=e.return;St;)switch(St.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:St=St.return}}function Za(e){if(e!==St)return!1;if(!He)return hd(e),He=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||mc(e.type,e.memoizedProps)),n=!n),n&&nt&&Pn(e),hd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Fh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));nt=Fh(e)}else t===27?(t=nt,ta(e.type)?(e=xc,xc=null,nt=e):nt=t):nt=St?nn(e.stateNode.nextSibling):null;return!0}function ba(){nt=St=null,He=!1}function Wl(){var e=Bn;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),Bn=null),e}function Fr(e){Bn===null?Bn=[e]:Bn.push(e)}var Kl=C(null),xa=null,Sn=null;function Vn(e,t,n){se(Kl,t._currentValue),t._currentValue=n}function En(e){e._currentValue=Kl.current,k(Kl)}function Jl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function eo(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var g=r.child;s=s.firstContext;e:for(;s!==null;){var N=s;s=r;for(var U=0;U<t.length;U++)if(N.context===t[U]){s.lanes|=n,N=s.alternate,N!==null&&(N.lanes|=n),Jl(s.return,n,e),a||(g=null);break e}s=N.next}}else if(r.tag===18){if(g=r.return,g===null)throw Error(u(341));g.lanes|=n,s=g.alternate,s!==null&&(s.lanes|=n),Jl(g,n,e),g=null}else g=r.child;if(g!==null)g.return=r;else for(g=r;g!==null;){if(g===e){g=null;break}if(r=g.sibling,r!==null){r.return=g.return,g=r;break}g=g.return}r=g}}function Wa(e,t,n,a){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var g=r.alternate;if(g===null)throw Error(u(387));if(g=g.memoizedProps,g!==null){var N=r.type;Ut(r.pendingProps.value,g.value)||(e!==null?e.push(N):e=[N])}}else if(r===Ie.current){if(g=r.alternate,g===null)throw Error(u(387));g.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}r=r.return}e!==null&&eo(t,e,n,a),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sa(e){xa=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Et(e){return pd(xa,e)}function es(e,t){return xa===null&&Sa(e),pd(e,t)}function pd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(u(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Tg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},_g=c.unstable_scheduleCallback,Ng=c.unstable_NormalPriority,ut={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new Tg,data:new Map,refCount:0}}function Br(e){e.refCount--,e.refCount===0&&_g(Ng,function(){e.controller.abort()})}var Pr=null,no=0,Ka=0,Ja=null;function Cg(e,t){if(Pr===null){var n=Pr=[];no=0,Ka=sc(),Ja={status:"pending",value:void 0,then:function(a){n.push(a)}}}return no++,t.then(md,md),t}function md(){if(--no===0&&Pr!==null){Ja!==null&&(Ja.status="fulfilled");var e=Pr;Pr=null,Ka=0,Ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ig(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var gd=V.S;V.S=function(e,t){eh=Se(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cg(e,t),gd!==null&&gd(e,t)};var Ea=C(null);function ao(){var e=Ea.current;return e!==null?e:tt.pooledCache}function ts(e,t){t===null?se(Ea,Ea.current):se(Ea,t.pool)}function yd(){var e=ao();return e===null?null:{parent:ut._currentValue,pool:e}}var er=Error(u(460)),ro=Error(u(474)),ns=Error(u(542)),as={then:function(){}};function vd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sd(e),e;default:if(typeof t.status=="string")t.then(yn,yn);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sd(e),e}throw Aa=t,er}}function wa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Aa=n,er):n}}var Aa=null;function xd(){if(Aa===null)throw Error(u(459));var e=Aa;return Aa=null,e}function Sd(e){if(e===er||e===ns)throw Error(u(483))}var tr=null,Vr=0;function rs(e){var t=Vr;return Vr+=1,tr===null&&(tr=[]),bd(tr,e,t)}function $r(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function is(e,t){throw t.$$typeof===_?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ed(e){function t(X,H){if(e){var W=X.deletions;W===null?(X.deletions=[H],X.flags|=16):W.push(H)}}function n(X,H){if(!e)return null;for(;H!==null;)t(X,H),H=H.sibling;return null}function a(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function r(X,H){return X=bn(X,H),X.index=0,X.sibling=null,X}function s(X,H,W){return X.index=W,e?(W=X.alternate,W!==null?(W=W.index,W<H?(X.flags|=67108866,H):W):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function g(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function N(X,H,W,de){return H===null||H.tag!==6?(H=Yl(W,X.mode,de),H.return=X,H):(H=r(H,W),H.return=X,H)}function U(X,H,W,de){var Ce=W.type;return Ce===h?ce(X,H,W.props.children,de,W.key):H!==null&&(H.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===G&&wa(Ce)===H.type)?(H=r(H,W.props),$r(H,W),H.return=X,H):(H=Wi(W.type,W.key,W.props,null,X.mode,de),$r(H,W),H.return=X,H)}function K(X,H,W,de){return H===null||H.tag!==4||H.stateNode.containerInfo!==W.containerInfo||H.stateNode.implementation!==W.implementation?(H=ql(W,X.mode,de),H.return=X,H):(H=r(H,W.children||[]),H.return=X,H)}function ce(X,H,W,de,Ce){return H===null||H.tag!==7?(H=va(W,X.mode,de,Ce),H.return=X,H):(H=r(H,W),H.return=X,H)}function fe(X,H,W){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Yl(""+H,X.mode,W),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case v:return W=Wi(H.type,H.key,H.props,null,X.mode,W),$r(W,H),W.return=X,W;case T:return H=ql(H,X.mode,W),H.return=X,H;case G:return H=wa(H),fe(X,H,W)}if(Y(H)||j(H))return H=va(H,X.mode,W,null),H.return=X,H;if(typeof H.then=="function")return fe(X,rs(H),W);if(H.$$typeof===L)return fe(X,es(X,H),W);is(X,H)}return null}function ee(X,H,W,de){var Ce=H!==null?H.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return Ce!==null?null:N(X,H,""+W,de);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return W.key===Ce?U(X,H,W,de):null;case T:return W.key===Ce?K(X,H,W,de):null;case G:return W=wa(W),ee(X,H,W,de)}if(Y(W)||j(W))return Ce!==null?null:ce(X,H,W,de,null);if(typeof W.then=="function")return ee(X,H,rs(W),de);if(W.$$typeof===L)return ee(X,H,es(X,W),de);is(X,W)}return null}function ie(X,H,W,de,Ce){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return X=X.get(W)||null,N(H,X,""+de,Ce);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case v:return X=X.get(de.key===null?W:de.key)||null,U(H,X,de,Ce);case T:return X=X.get(de.key===null?W:de.key)||null,K(H,X,de,Ce);case G:return de=wa(de),ie(X,H,W,de,Ce)}if(Y(de)||j(de))return X=X.get(W)||null,ce(H,X,de,Ce,null);if(typeof de.then=="function")return ie(X,H,W,rs(de),Ce);if(de.$$typeof===L)return ie(X,H,W,es(H,de),Ce);is(H,de)}return null}function Ae(X,H,W,de){for(var Ce=null,Ge=null,Re=H,Me=H=0,$e=null;Re!==null&&Me<W.length;Me++){Re.index>Me?($e=Re,Re=null):$e=Re.sibling;var Ye=ee(X,Re,W[Me],de);if(Ye===null){Re===null&&(Re=$e);break}e&&Re&&Ye.alternate===null&&t(X,Re),H=s(Ye,H,Me),Ge===null?Ce=Ye:Ge.sibling=Ye,Ge=Ye,Re=$e}if(Me===W.length)return n(X,Re),He&&xn(X,Me),Ce;if(Re===null){for(;Me<W.length;Me++)Re=fe(X,W[Me],de),Re!==null&&(H=s(Re,H,Me),Ge===null?Ce=Re:Ge.sibling=Re,Ge=Re);return He&&xn(X,Me),Ce}for(Re=a(Re);Me<W.length;Me++)$e=ie(Re,X,Me,W[Me],de),$e!==null&&(e&&$e.alternate!==null&&Re.delete($e.key===null?Me:$e.key),H=s($e,H,Me),Ge===null?Ce=$e:Ge.sibling=$e,Ge=$e);return e&&Re.forEach(function(sa){return t(X,sa)}),He&&xn(X,Me),Ce}function De(X,H,W,de){if(W==null)throw Error(u(151));for(var Ce=null,Ge=null,Re=H,Me=H=0,$e=null,Ye=W.next();Re!==null&&!Ye.done;Me++,Ye=W.next()){Re.index>Me?($e=Re,Re=null):$e=Re.sibling;var sa=ee(X,Re,Ye.value,de);if(sa===null){Re===null&&(Re=$e);break}e&&Re&&sa.alternate===null&&t(X,Re),H=s(sa,H,Me),Ge===null?Ce=sa:Ge.sibling=sa,Ge=sa,Re=$e}if(Ye.done)return n(X,Re),He&&xn(X,Me),Ce;if(Re===null){for(;!Ye.done;Me++,Ye=W.next())Ye=fe(X,Ye.value,de),Ye!==null&&(H=s(Ye,H,Me),Ge===null?Ce=Ye:Ge.sibling=Ye,Ge=Ye);return He&&xn(X,Me),Ce}for(Re=a(Re);!Ye.done;Me++,Ye=W.next())Ye=ie(Re,X,Me,Ye.value,de),Ye!==null&&(e&&Ye.alternate!==null&&Re.delete(Ye.key===null?Me:Ye.key),H=s(Ye,H,Me),Ge===null?Ce=Ye:Ge.sibling=Ye,Ge=Ye);return e&&Re.forEach(function(P0){return t(X,P0)}),He&&xn(X,Me),Ce}function Je(X,H,W,de){if(typeof W=="object"&&W!==null&&W.type===h&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case v:e:{for(var Ce=W.key;H!==null;){if(H.key===Ce){if(Ce=W.type,Ce===h){if(H.tag===7){n(X,H.sibling),de=r(H,W.props.children),de.return=X,X=de;break e}}else if(H.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===G&&wa(Ce)===H.type){n(X,H.sibling),de=r(H,W.props),$r(de,W),de.return=X,X=de;break e}n(X,H);break}else t(X,H);H=H.sibling}W.type===h?(de=va(W.props.children,X.mode,de,W.key),de.return=X,X=de):(de=Wi(W.type,W.key,W.props,null,X.mode,de),$r(de,W),de.return=X,X=de)}return g(X);case T:e:{for(Ce=W.key;H!==null;){if(H.key===Ce)if(H.tag===4&&H.stateNode.containerInfo===W.containerInfo&&H.stateNode.implementation===W.implementation){n(X,H.sibling),de=r(H,W.children||[]),de.return=X,X=de;break e}else{n(X,H);break}else t(X,H);H=H.sibling}de=ql(W,X.mode,de),de.return=X,X=de}return g(X);case G:return W=wa(W),Je(X,H,W,de)}if(Y(W))return Ae(X,H,W,de);if(j(W)){if(Ce=j(W),typeof Ce!="function")throw Error(u(150));return W=Ce.call(W),De(X,H,W,de)}if(typeof W.then=="function")return Je(X,H,rs(W),de);if(W.$$typeof===L)return Je(X,H,es(X,W),de);is(X,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,H!==null&&H.tag===6?(n(X,H.sibling),de=r(H,W),de.return=X,X=de):(n(X,H),de=Yl(W,X.mode,de),de.return=X,X=de),g(X)):n(X,H)}return function(X,H,W,de){try{Vr=0;var Ce=Je(X,H,W,de);return tr=null,Ce}catch(Re){if(Re===er||Re===ns)throw Re;var Ge=Ft(29,Re,null,X.mode);return Ge.lanes=de,Ge.return=X,Ge}finally{}}}var Ra=Ed(!0),wd=Ed(!1),$n=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function so(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(qe&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Zi(e),sd(e,null,n),t}return Qi(e,a,t,n),Zi(e)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,pu(e,n)}}function lo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=g:s=s.next=g,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var oo=!1;function Gr(){if(oo){var e=Ja;if(e!==null)throw e}}function Yr(e,t,n,a){oo=!1;var r=e.updateQueue;$n=!1;var s=r.firstBaseUpdate,g=r.lastBaseUpdate,N=r.shared.pending;if(N!==null){r.shared.pending=null;var U=N,K=U.next;U.next=null,g===null?s=K:g.next=K,g=U;var ce=e.alternate;ce!==null&&(ce=ce.updateQueue,N=ce.lastBaseUpdate,N!==g&&(N===null?ce.firstBaseUpdate=K:N.next=K,ce.lastBaseUpdate=U))}if(s!==null){var fe=r.baseState;g=0,ce=K=U=null,N=s;do{var ee=N.lane&-536870913,ie=ee!==N.lane;if(ie?(Ve&ee)===ee:(a&ee)===ee){ee!==0&&ee===Ka&&(oo=!0),ce!==null&&(ce=ce.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ae=e,De=N;ee=t;var Je=n;switch(De.tag){case 1:if(Ae=De.payload,typeof Ae=="function"){fe=Ae.call(Je,fe,ee);break e}fe=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=De.payload,ee=typeof Ae=="function"?Ae.call(Je,fe,ee):Ae,ee==null)break e;fe=R({},fe,ee);break e;case 2:$n=!0}}ee=N.callback,ee!==null&&(e.flags|=64,ie&&(e.flags|=8192),ie=r.callbacks,ie===null?r.callbacks=[ee]:ie.push(ee))}else ie={lane:ee,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ce===null?(K=ce=ie,U=fe):ce=ce.next=ie,g|=ee;if(N=N.next,N===null){if(N=r.shared.pending,N===null)break;ie=N,N=ie.next,ie.next=null,r.lastBaseUpdate=ie,r.shared.pending=null}}while(!0);ce===null&&(U=fe),r.baseState=U,r.firstBaseUpdate=K,r.lastBaseUpdate=ce,s===null&&(r.shared.lanes=0),Zn|=g,e.lanes=g,e.memoizedState=fe}}function Ad(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Rd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ad(n[e],t)}var nr=C(null),ss=C(0);function Td(e,t){e=Dn,se(ss,e),se(nr,t),Dn=e|t.baseLanes}function co(){se(ss,Dn),se(nr,nr.current)}function uo(){Dn=ss.current,k(nr),k(ss)}var Bt=C(null),tn=null;function Yn(e){var t=e.alternate;se(ot,ot.current&1),se(Bt,e),tn===null&&(t===null||nr.current!==null||t.memoizedState!==null)&&(tn=e)}function fo(e){se(ot,ot.current),se(Bt,e),tn===null&&(tn=e)}function _d(e){e.tag===22?(se(ot,ot.current),se(Bt,e),tn===null&&(tn=e)):qn()}function qn(){se(ot,ot.current),se(Bt,Bt.current)}function Pt(e){k(Bt),tn===e&&(tn=null),k(ot)}var ot=C(0);function ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||vc(n)||bc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wn=0,Le=null,We=null,dt=null,os=!1,ar=!1,Ta=!1,cs=0,qr=0,rr=null,Dg=0;function st(){throw Error(u(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function po(e,t,n,a,r,s){return wn=s,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?df:Co,Ta=!1,s=n(a,r),Ta=!1,ar&&(s=Cd(t,n,a,r)),Nd(e),s}function Nd(e){V.H=Zr;var t=We!==null&&We.next!==null;if(wn=0,dt=We=Le=null,os=!1,qr=0,rr=null,t)throw Error(u(300));e===null||ft||(e=e.dependencies,e!==null&&Ji(e)&&(ft=!0))}function Cd(e,t,n,a){Le=e;var r=0;do{if(ar&&(rr=null),qr=0,ar=!1,25<=r)throw Error(u(301));if(r+=1,dt=We=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}V.H=ff,s=t(n,a)}while(ar);return s}function jg(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?Xr(t):t,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(Le.flags|=1024),t}function mo(){var e=cs!==0;return cs=0,e}function go(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yo(e){if(os){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}os=!1}wn=0,dt=We=Le=null,ar=!1,qr=cs=0,rr=null}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Le.memoizedState=dt=e:dt=dt.next=e,dt}function ct(){if(We===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=dt===null?Le.memoizedState:dt.next;if(t!==null)dt=t,We=e;else{if(e===null)throw Le.alternate===null?Error(u(467)):Error(u(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},dt===null?Le.memoizedState=dt=e:dt=dt.next=e}return dt}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xr(e){var t=qr;return qr+=1,rr===null&&(rr=[]),e=bd(rr,e,t),t=Le,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?df:Co),e}function ds(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xr(e);if(e.$$typeof===L)return Et(e)}throw Error(u(438,String(e)))}function vo(e){var t=null,n=Le.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Le.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=us(),Le.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=re;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function fs(e){var t=ct();return bo(t,We,e)}function bo(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var r=e.baseQueue,s=a.pending;if(s!==null){if(r!==null){var g=r.next;r.next=s.next,s.next=g}t.baseQueue=r=s,a.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var N=g=null,U=null,K=t,ce=!1;do{var fe=K.lane&-536870913;if(fe!==K.lane?(Ve&fe)===fe:(wn&fe)===fe){var ee=K.revertLane;if(ee===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),fe===Ka&&(ce=!0);else if((wn&ee)===ee){K=K.next,ee===Ka&&(ce=!0);continue}else fe={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},U===null?(N=U=fe,g=s):U=U.next=fe,Le.lanes|=ee,Zn|=ee;fe=K.action,Ta&&n(s,fe),s=K.hasEagerState?K.eagerState:n(s,fe)}else ee={lane:fe,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},U===null?(N=U=ee,g=s):U=U.next=ee,Le.lanes|=fe,Zn|=fe;K=K.next}while(K!==null&&K!==t);if(U===null?g=s:U.next=N,!Ut(s,e.memoizedState)&&(ft=!0,ce&&(n=Ja,n!==null)))throw n;e.memoizedState=s,e.baseState=g,e.baseQueue=U,a.lastRenderedState=s}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function xo(e){var t=ct(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var g=r=r.next;do s=e(s,g.action),g=g.next;while(g!==r);Ut(s,t.memoizedState)||(ft=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Id(e,t,n){var a=Le,r=ct(),s=He;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var g=!Ut((We||r).memoizedState,n);if(g&&(r.memoizedState=n,ft=!0),r=r.queue,wo(Od.bind(null,a,r,e),[e]),r.getSnapshot!==t||g||dt!==null&&dt.memoizedState.tag&1){if(a.flags|=2048,ir(9,{destroy:void 0},jd.bind(null,a,r,n,t),null),tt===null)throw Error(u(349));s||(wn&127)!==0||Dd(a,t,n)}return n}function Dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t=us(),Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jd(e,t,n,a){t.value=n,t.getSnapshot=a,kd(t)&&Ld(e)}function Od(e,t,n){return n(function(){kd(t)&&Ld(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Ld(e){var t=ya(e,2);t!==null&&Mt(t,e,2)}function So(e){var t=Nt();if(typeof e=="function"){var n=e;if(e=n(),Ta){Yt(!0);try{n()}finally{Yt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function Md(e,t,n,a){return e.baseState=n,bo(e,We,typeof a=="function"?a:An)}function Og(e,t,n,a,r){if(ms(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){s.listeners.push(g)}};V.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,zd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function zd(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var s=V.T,g={};V.T=g;try{var N=n(r,a),U=V.S;U!==null&&U(g,N),Ud(e,t,N)}catch(K){Eo(e,t,K)}finally{s!==null&&g.types!==null&&(s.types=g.types),V.T=s}}else try{s=n(r,a),Ud(e,t,s)}catch(K){Eo(e,t,K)}}function Ud(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Fd(e,t,a)},function(a){return Eo(e,t,a)}):Fd(e,t,n)}function Fd(e,t,n){t.status="fulfilled",t.value=n,Bd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,zd(e,n)))}function Eo(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Bd(t),t=t.next;while(t!==a)}e.action=null}function Bd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pd(e,t){return t}function Vd(e,t){if(He){var n=tt.formState;if(n!==null){e:{var a=Le;if(He){if(nt){t:{for(var r=nt,s=en;r.nodeType!==8;){if(!s){r=null;break t}if(r=nn(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){nt=nn(r.nextSibling),a=r.data==="F!";break e}}Pn(a)}a=!1}a&&(t=n[0])}}return n=Nt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pd,lastRenderedState:t},n.queue=a,n=of.bind(null,Le,a),a.dispatch=n,a=So(!1),s=No.bind(null,Le,!1,a.queue),a=Nt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Og.bind(null,Le,r,s,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function $d(e){var t=ct();return Hd(t,We,e)}function Hd(e,t,n){if(t=bo(e,t,Pd)[0],e=fs(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Xr(t)}catch(g){throw g===er?ns:g}else a=t;t=ct();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(Le.flags|=2048,ir(9,{destroy:void 0},kg.bind(null,r,n),null)),[a,s,e]}function kg(e,t){e.action=t}function Gd(e){var t=ct(),n=We;if(n!==null)return Hd(t,n,e);ct(),t=t.memoizedState,n=ct();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ir(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Le.updateQueue,t===null&&(t=us(),Le.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Yd(){return ct().memoizedState}function hs(e,t,n,a){var r=Nt();Le.flags|=e,r.memoizedState=ir(1|t,{destroy:void 0},n,a===void 0?null:a)}function ps(e,t,n,a){var r=ct();a=a===void 0?null:a;var s=r.memoizedState.inst;We!==null&&a!==null&&ho(a,We.memoizedState.deps)?r.memoizedState=ir(t,s,n,a):(Le.flags|=e,r.memoizedState=ir(1|t,s,n,a))}function qd(e,t){hs(8390656,8,e,t)}function wo(e,t){ps(2048,8,e,t)}function Lg(e){Le.flags|=4;var t=Le.updateQueue;if(t===null)t=us(),Le.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Xd(e){var t=ct().memoizedState;return Lg({ref:t,nextImpl:e}),function(){if((qe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Qd(e,t){return ps(4,2,e,t)}function Zd(e,t){return ps(4,4,e,t)}function Wd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){n=n!=null?n.concat([e]):null,ps(4,4,Wd.bind(null,t,e),n)}function Ao(){}function Jd(e,t){var n=ct();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ho(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ef(e,t){var n=ct();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ho(t,a[1]))return a[0];if(a=e(),Ta){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a}function Ro(e,t,n){return n===void 0||(wn&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=nh(),Le.lanes|=e,Zn|=e,n)}function tf(e,t,n,a){return Ut(n,t)?n:nr.current!==null?(e=Ro(e,n,a),Ut(e,t)||(ft=!0),e):(wn&42)===0||(wn&1073741824)!==0&&(Ve&261930)===0?(ft=!0,e.memoizedState=n):(e=nh(),Le.lanes|=e,Zn|=e,t)}function nf(e,t,n,a,r){var s=$.p;$.p=s!==0&&8>s?s:8;var g=V.T,N={};V.T=N,No(e,!1,t,n);try{var U=r(),K=V.S;if(K!==null&&K(N,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var ce=Ig(U,a);Qr(e,t,ce,Ht(e))}else Qr(e,t,a,Ht(e))}catch(fe){Qr(e,t,{then:function(){},status:"rejected",reason:fe},Ht())}finally{$.p=s,g!==null&&N.types!==null&&(g.types=N.types),V.T=g}}function Mg(){}function To(e,t,n,a){if(e.tag!==5)throw Error(u(476));var r=af(e).queue;nf(e,r,t,ue,n===null?Mg:function(){return rf(e),n(a)})}function af(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rf(e){var t=af(e);t.next===null&&(t=e.alternate.memoizedState),Qr(e,t.next.queue,{},Ht())}function _o(){return Et(fi)}function sf(){return ct().memoizedState}function lf(){return ct().memoizedState}function zg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Hn(n);var a=Gn(t,e,n);a!==null&&(Mt(a,t,n),Hr(a,t,n)),t={cache:to()},e.payload=t;return}t=t.return}}function Ug(e,t,n){var a=Ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ms(e)?cf(t,n):(n=Hl(e,t,n,a),n!==null&&(Mt(n,e,a),uf(n,t,a)))}function of(e,t,n){var a=Ht();Qr(e,t,n,a)}function Qr(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ms(e))cf(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var g=t.lastRenderedState,N=s(g,n);if(r.hasEagerState=!0,r.eagerState=N,Ut(N,g))return Qi(e,t,r,0),tt===null&&Xi(),!1}catch{}finally{}if(n=Hl(e,t,r,a),n!==null)return Mt(n,e,a),uf(n,t,a),!0}return!1}function No(e,t,n,a){if(a={lane:2,revertLane:sc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ms(e)){if(t)throw Error(u(479))}else t=Hl(e,n,a,2),t!==null&&Mt(t,e,2)}function ms(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function cf(e,t){ar=os=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,pu(e,n)}}var Zr={readContext:Et,use:ds,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Zr.useEffectEvent=st;var df={readContext:Et,use:ds,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:qd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,hs(4194308,4,Wd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hs(4194308,4,e,t)},useInsertionEffect:function(e,t){hs(4,2,e,t)},useMemo:function(e,t){var n=Nt();t=t===void 0?null:t;var a=e();if(Ta){Yt(!0);try{e()}finally{Yt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Nt();if(n!==void 0){var r=n(t);if(Ta){Yt(!0);try{n(t)}finally{Yt(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Ug.bind(null,Le,e),[a.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:function(e){e=So(e);var t=e.queue,n=of.bind(null,Le,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ao,useDeferredValue:function(e,t){var n=Nt();return Ro(n,e,t)},useTransition:function(){var e=So(!1);return e=nf.bind(null,Le,e.queue,!0,!1),Nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Le,r=Nt();if(He){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),tt===null)throw Error(u(349));(Ve&127)!==0||Dd(a,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,qd(Od.bind(null,a,s,e),[e]),a.flags|=2048,ir(9,{destroy:void 0},jd.bind(null,a,s,n,t),null),n},useId:function(){var e=Nt(),t=tt.identifierPrefix;if(He){var n=hn,a=fn;n=(a&~(1<<32-it(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=cs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Dg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_o,useFormState:Vd,useActionState:Vd,useOptimistic:function(e){var t=Nt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=No.bind(null,Le,!0,n),n.dispatch=t,[e,t]},useMemoCache:vo,useCacheRefresh:function(){return Nt().memoizedState=zg.bind(null,Le)},useEffectEvent:function(e){var t=Nt(),n={impl:e};return t.memoizedState=n,function(){if((qe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},Co={readContext:Et,use:ds,useCallback:Jd,useContext:Et,useEffect:wo,useImperativeHandle:Kd,useInsertionEffect:Qd,useLayoutEffect:Zd,useMemo:ef,useReducer:fs,useRef:Yd,useState:function(){return fs(An)},useDebugValue:Ao,useDeferredValue:function(e,t){var n=ct();return tf(n,We.memoizedState,e,t)},useTransition:function(){var e=fs(An)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Xr(e),t]},useSyncExternalStore:Id,useId:sf,useHostTransitionStatus:_o,useFormState:$d,useActionState:$d,useOptimistic:function(e,t){var n=ct();return Md(n,We,e,t)},useMemoCache:vo,useCacheRefresh:lf};Co.useEffectEvent=Xd;var ff={readContext:Et,use:ds,useCallback:Jd,useContext:Et,useEffect:wo,useImperativeHandle:Kd,useInsertionEffect:Qd,useLayoutEffect:Zd,useMemo:ef,useReducer:xo,useRef:Yd,useState:function(){return xo(An)},useDebugValue:Ao,useDeferredValue:function(e,t){var n=ct();return We===null?Ro(n,e,t):tf(n,We.memoizedState,e,t)},useTransition:function(){var e=xo(An)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Xr(e),t]},useSyncExternalStore:Id,useId:sf,useHostTransitionStatus:_o,useFormState:Gd,useActionState:Gd,useOptimistic:function(e,t){var n=ct();return We!==null?Md(n,We,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vo,useCacheRefresh:lf};ff.useEffectEvent=Xd;function Io(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Do={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=Hn(a);r.payload=t,n!=null&&(r.callback=n),t=Gn(e,r,a),t!==null&&(Mt(t,e,a),Hr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),r=Hn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Gn(e,r,a),t!==null&&(Mt(t,e,a),Hr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Hn(n);a.tag=2,t!=null&&(a.callback=t),t=Gn(e,a,n),t!==null&&(Mt(t,e,n),Hr(t,e,n))}};function hf(e,t,n,a,r,s,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,g):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,a)||!Mr(r,s):!0}function pf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function _a(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function mf(e){qi(e)}function gf(e){console.error(e)}function yf(e){qi(e)}function gs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function vf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function jo(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){gs(e,t)},n}function bf(e){return e=Hn(e),e.tag=3,e}function xf(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=a.value;e.payload=function(){return r(s)},e.callback=function(){vf(t,n,a)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){vf(t,n,a),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var N=a.stack;this.componentDidCatch(a.value,{componentStack:N!==null?N:""})})}function Fg(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Wa(t,n,r,!0),n=Bt.current,n!==null){switch(n.tag){case 31:case 13:return tn===null?Ns():n.alternate===null&&lt===0&&(lt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===as?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ac(e,a,r)),!1;case 22:return n.flags|=65536,a===as?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ac(e,a,r)),!1}throw Error(u(435,n.tag))}return ac(e,a,r),Ns(),!1}if(He)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Zl&&(e=Error(u(422),{cause:a}),Fr(Wt(e,n)))):(a!==Zl&&(t=Error(u(423),{cause:a}),Fr(Wt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Wt(a,n),r=jo(e.stateNode,a,r),lo(e,r),lt!==4&&(lt=2)),!1;var s=Error(u(520),{cause:a});if(s=Wt(s,n),ri===null?ri=[s]:ri.push(s),lt!==4&&(lt=2),t===null)return!0;a=Wt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=jo(n.stateNode,a,e),lo(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Wn===null||!Wn.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=bf(r),xf(r,e,n,a),lo(n,r),!1}n=n.return}while(n!==null);return!1}var Oo=Error(u(461)),ft=!1;function wt(e,t,n,a){t.child=e===null?wd(t,null,n,a):Ra(t,e.child,n,a)}function Sf(e,t,n,a,r){n=n.render;var s=t.ref;if("ref"in a){var g={};for(var N in a)N!=="ref"&&(g[N]=a[N])}else g=a;return Sa(t),a=po(e,t,n,g,s,r),N=mo(),e!==null&&!ft?(go(e,t,r),Rn(e,t,r)):(He&&N&&Xl(t),t.flags|=1,wt(e,t,a,r),t.child)}function Ef(e,t,n,a,r){if(e===null){var s=n.type;return typeof s=="function"&&!Gl(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,wf(e,t,s,a,r)):(e=Wi(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Po(e,r)){var g=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(g,a)&&e.ref===t.ref)return Rn(e,t,r)}return t.flags|=1,e=bn(s,a),e.ref=t.ref,e.return=t,t.child=e}function wf(e,t,n,a,r){if(e!==null){var s=e.memoizedProps;if(Mr(s,a)&&e.ref===t.ref)if(ft=!1,t.pendingProps=a=s,Po(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Rn(e,t,r)}return ko(e,t,n,a,r)}function Af(e,t,n,a){var r=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~s}else a=0,t.child=null;return Rf(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ts(t,s!==null?s.cachePool:null),s!==null?Td(t,s):co(),_d(t);else return a=t.lanes=536870912,Rf(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(ts(t,s.cachePool),Td(t,s),qn(),t.memoizedState=null):(e!==null&&ts(t,null),co(),qn());return wt(e,t,r,n),t.child}function Wr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rf(e,t,n,a,r){var s=ao();return s=s===null?null:{parent:ut._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&ts(t,null),co(),_d(t),e!==null&&Wa(e,t,a,!0),t.childLanes=r,null}function ys(e,t){return t=bs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Tf(e,t,n){return Ra(t,e.child,null,n),e=ys(t,t.pendingProps),e.flags|=2,Pt(t),t.memoizedState=null,e}function Bg(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(a.mode==="hidden")return e=ys(t,a),t.lanes=536870912,Wr(null,e);if(fo(t),(e=nt)?(e=Uh(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:fn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},n=od(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw Pn(t);return t.lanes=536870912,null}return ys(t,a)}var s=e.memoizedState;if(s!==null){var g=s.dehydrated;if(fo(t),r)if(t.flags&256)t.flags&=-257,t=Tf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(ft||Wa(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(a=tt,a!==null&&(g=mu(a,n),g!==0&&g!==s.retryLane))throw s.retryLane=g,ya(e,g),Mt(a,e,g),Oo;Ns(),t=Tf(e,t,n)}else e=s.treeContext,nt=nn(g.nextSibling),St=t,He=!0,Bn=null,en=!1,e!==null&&dd(t,e),t=ys(t,a),t.flags|=4096;return t}return e=bn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ko(e,t,n,a,r){return Sa(t),n=po(e,t,n,a,void 0,r),a=mo(),e!==null&&!ft?(go(e,t,r),Rn(e,t,r)):(He&&a&&Xl(t),t.flags|=1,wt(e,t,n,r),t.child)}function _f(e,t,n,a,r,s){return Sa(t),t.updateQueue=null,n=Cd(t,a,n,r),Nd(e),a=mo(),e!==null&&!ft?(go(e,t,s),Rn(e,t,s)):(He&&a&&Xl(t),t.flags|=1,wt(e,t,n,s),t.child)}function Nf(e,t,n,a,r){if(Sa(t),t.stateNode===null){var s=qa,g=n.contextType;typeof g=="object"&&g!==null&&(s=Et(g)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Do,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},io(t),g=n.contextType,s.context=typeof g=="object"&&g!==null?Et(g):qa,s.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Io(t,n,g,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(g=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),g!==s.state&&Do.enqueueReplaceState(s,s.state,null),Yr(t,a,s,r),Gr(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var N=t.memoizedProps,U=_a(n,N);s.props=U;var K=s.context,ce=n.contextType;g=qa,typeof ce=="object"&&ce!==null&&(g=Et(ce));var fe=n.getDerivedStateFromProps;ce=typeof fe=="function"||typeof s.getSnapshotBeforeUpdate=="function",N=t.pendingProps!==N,ce||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(N||K!==g)&&pf(t,s,a,g),$n=!1;var ee=t.memoizedState;s.state=ee,Yr(t,a,s,r),Gr(),K=t.memoizedState,N||ee!==K||$n?(typeof fe=="function"&&(Io(t,n,fe,a),K=t.memoizedState),(U=$n||hf(t,n,U,a,ee,K,g))?(ce||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=K),s.props=a,s.state=K,s.context=g,a=U):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,so(e,t),g=t.memoizedProps,ce=_a(n,g),s.props=ce,fe=t.pendingProps,ee=s.context,K=n.contextType,U=qa,typeof K=="object"&&K!==null&&(U=Et(K)),N=n.getDerivedStateFromProps,(K=typeof N=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g!==fe||ee!==U)&&pf(t,s,a,U),$n=!1,ee=t.memoizedState,s.state=ee,Yr(t,a,s,r),Gr();var ie=t.memoizedState;g!==fe||ee!==ie||$n||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof N=="function"&&(Io(t,n,N,a),ie=t.memoizedState),(ce=$n||hf(t,n,ce,a,ee,ie,U)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(K||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,ie,U),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,ie,U)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ie),s.props=a,s.state=ie,s.context=U,a=ce):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,vs(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Ra(t,e.child,null,r),t.child=Ra(t,null,n,r)):wt(e,t,n,r),t.memoizedState=s.state,e=t.child):e=Rn(e,t,r),e}function Cf(e,t,n,a){return ba(),t.flags|=256,wt(e,t,n,a),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mo(e){return{baseLanes:e,cachePool:yd()}}function zo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=$t),e}function If(e,t,n){var a=t.pendingProps,r=!1,s=(t.flags&128)!==0,g;if((g=s)||(g=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),g&&(r=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(r?Yn(t):qn(),(e=nt)?(e=Uh(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:fn,overflow:hn}:null,retryLane:536870912,hydrationErrors:null},n=od(e),n.return=t,t.child=n,St=t,nt=null)):e=null,e===null)throw Pn(t);return bc(e)?t.lanes=32:t.lanes=536870912,null}var N=a.children;return a=a.fallback,r?(qn(),r=t.mode,N=bs({mode:"hidden",children:N},r),a=va(a,r,n,null),N.return=t,a.return=t,N.sibling=a,t.child=N,a=t.child,a.memoizedState=Mo(n),a.childLanes=zo(e,g,n),t.memoizedState=Lo,Wr(null,a)):(Yn(t),Uo(t,N))}var U=e.memoizedState;if(U!==null&&(N=U.dehydrated,N!==null)){if(s)t.flags&256?(Yn(t),t.flags&=-257,t=Fo(e,t,n)):t.memoizedState!==null?(qn(),t.child=e.child,t.flags|=128,t=null):(qn(),N=a.fallback,r=t.mode,a=bs({mode:"visible",children:a.children},r),N=va(N,r,n,null),N.flags|=2,a.return=t,N.return=t,a.sibling=N,t.child=a,Ra(t,e.child,null,n),a=t.child,a.memoizedState=Mo(n),a.childLanes=zo(e,g,n),t.memoizedState=Lo,t=Wr(null,a));else if(Yn(t),bc(N)){if(g=N.nextSibling&&N.nextSibling.dataset,g)var K=g.dgst;g=K,a=Error(u(419)),a.stack="",a.digest=g,Fr({value:a,source:null,stack:null}),t=Fo(e,t,n)}else if(ft||Wa(e,t,n,!1),g=(n&e.childLanes)!==0,ft||g){if(g=tt,g!==null&&(a=mu(g,n),a!==0&&a!==U.retryLane))throw U.retryLane=a,ya(e,a),Mt(g,e,a),Oo;vc(N)||Ns(),t=Fo(e,t,n)}else vc(N)?(t.flags|=192,t.child=e.child,t=null):(e=U.treeContext,nt=nn(N.nextSibling),St=t,He=!0,Bn=null,en=!1,e!==null&&dd(t,e),t=Uo(t,a.children),t.flags|=4096);return t}return r?(qn(),N=a.fallback,r=t.mode,U=e.child,K=U.sibling,a=bn(U,{mode:"hidden",children:a.children}),a.subtreeFlags=U.subtreeFlags&65011712,K!==null?N=bn(K,N):(N=va(N,r,n,null),N.flags|=2),N.return=t,a.return=t,a.sibling=N,t.child=a,Wr(null,a),a=t.child,N=e.child.memoizedState,N===null?N=Mo(n):(r=N.cachePool,r!==null?(U=ut._currentValue,r=r.parent!==U?{parent:U,pool:U}:r):r=yd(),N={baseLanes:N.baseLanes|n,cachePool:r}),a.memoizedState=N,a.childLanes=zo(e,g,n),t.memoizedState=Lo,Wr(e.child,a)):(Yn(t),n=e.child,e=n.sibling,n=bn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function Uo(e,t){return t=bs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bs(e,t){return e=Ft(22,e,null,t),e.lanes=0,e}function Fo(e,t,n){return Ra(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Df(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Jl(e.return,t,n)}function Bo(e,t,n,a,r,s){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:s}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=a,g.tail=n,g.tailMode=r,g.treeForkCount=s)}function jf(e,t,n){var a=t.pendingProps,r=a.revealOrder,s=a.tail;a=a.children;var g=ot.current,N=(g&2)!==0;if(N?(g=g&1|2,t.flags|=128):g&=1,se(ot,g),wt(e,t,a,n),a=He?Ur:0,!N&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Df(e,n,t);else if(e.tag===19)Df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ls(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Bo(t,!1,r,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ls(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Bo(t,!0,n,null,s,a);break;case"together":Bo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Wa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Po(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function Pg(e,t,n){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),Vn(t,ut,e.memoizedState.cache),ba();break;case 27:case 5:Oe(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Yn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?If(e,t,n):(Yn(t),e=Rn(e,t,n),e!==null?e.sibling:null);Yn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Wa(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return jf(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),se(ot,ot.current),a)break;return null;case 22:return t.lanes=0,Af(e,t,n,t.pendingProps);case 24:Vn(t,ut,e.memoizedState.cache)}return Rn(e,t,n)}function Of(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!Po(e,n)&&(t.flags&128)===0)return ft=!1,Pg(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,He&&(t.flags&1048576)!==0&&ud(t,Ur,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e=="function")Gl(e)?(a=_a(e,a),t.tag=1,t=Nf(null,t,e,a,n)):(t.tag=0,t=ko(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===P){t.tag=11,t=Sf(null,t,e,a,n);break e}else if(r===F){t.tag=14,t=Ef(null,t,e,a,n);break e}}throw t=S(e)||e,Error(u(306,t,""))}}return t;case 0:return ko(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=_a(a,t.pendingProps),Nf(e,t,a,r,n);case 3:e:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var s=t.memoizedState;r=s.element,so(e,t),Yr(t,a,null,n);var g=t.memoizedState;if(a=g.cache,Vn(t,ut,a),a!==s.cache&&eo(t,[ut],n,!0),Gr(),a=g.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Cf(e,t,a,n);break e}else if(a!==r){r=Wt(Error(u(424)),t),Fr(r),t=Cf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=nn(e.firstChild),St=t,He=!0,Bn=null,en=!0,n=wd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ba(),a===r){t=Rn(e,t,n);break e}wt(e,t,a,n)}t=t.child}return t;case 26:return vs(e,t),e===null?(n=Hh(t.type,null,t.pendingProps,null))?t.memoizedState=n:He||(n=t.type,e=t.pendingProps,a=Ls(we.current).createElement(n),a[xt]=t,a[It]=e,At(a,n,e),yt(a),t.stateNode=a):t.memoizedState=Hh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oe(t),e===null&&He&&(a=t.stateNode=Ph(t.type,t.pendingProps,we.current),St=t,en=!0,r=nt,ta(t.type)?(xc=r,nt=nn(a.firstChild)):nt=r),wt(e,t,t.pendingProps.children,n),vs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((r=a=nt)&&(a=y0(a,t.type,t.pendingProps,en),a!==null?(t.stateNode=a,St=t,nt=nn(a.firstChild),en=!1,r=!0):r=!1),r||Pn(t)),Oe(t),r=t.type,s=t.pendingProps,g=e!==null?e.memoizedProps:null,a=s.children,mc(r,s)?a=null:g!==null&&mc(r,g)&&(t.flags|=32),t.memoizedState!==null&&(r=po(e,t,jg,null,null,n),fi._currentValue=r),vs(e,t),wt(e,t,a,n),t.child;case 6:return e===null&&He&&((e=n=nt)&&(n=v0(n,t.pendingProps,en),n!==null?(t.stateNode=n,St=t,nt=null,e=!0):e=!1),e||Pn(t)),null;case 13:return If(e,t,n);case 4:return Te(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ra(t,null,a,n):wt(e,t,a,n),t.child;case 11:return Sf(e,t,t.type,t.pendingProps,n);case 7:return wt(e,t,t.pendingProps,n),t.child;case 8:return wt(e,t,t.pendingProps.children,n),t.child;case 12:return wt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Vn(t,t.type,a.value),wt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Sa(t),r=Et(r),a=a(r),t.flags|=1,wt(e,t,a,n),t.child;case 14:return Ef(e,t,t.type,t.pendingProps,n);case 15:return wf(e,t,t.type,t.pendingProps,n);case 19:return jf(e,t,n);case 31:return Bg(e,t,n);case 22:return Af(e,t,n,t.pendingProps);case 24:return Sa(t),a=Et(ut),e===null?(r=ao(),r===null&&(r=tt,s=to(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:a,cache:r},io(t),Vn(t,ut,r)):((e.lanes&n)!==0&&(so(e,t),Yr(t,null,null,n),Gr()),r=e.memoizedState,s=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,ut,a)):(a=s.cache,Vn(t,ut,a),a!==r.cache&&eo(t,[ut],n,!0))),wt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Tn(e){e.flags|=4}function Vo(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(sh())e.flags|=8192;else throw Aa=as,ro}else e.flags&=-16777217}function kf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qh(t))if(sh())e.flags|=8192;else throw Aa=as,ro}function xs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fu():536870912,e.lanes|=t,cr|=t)}function Kr(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Vg(e,t,n){var a=t.pendingProps;switch(Ql(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return at(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),En(ut),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Za(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wl())),at(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Tn(t),s!==null?(at(t),kf(t,s)):(at(t),Vo(t,r,null,a,n))):s?s!==e.memoizedState?(Tn(t),at(t),kf(t,s)):(at(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Tn(t),at(t),Vo(t,r,e,a,n)),null;case 27:if(ze(t),n=we.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return at(t),null}e=le.current,Za(t)?fd(t):(e=Ph(r,a,n),t.stateNode=e,Tn(t))}return at(t),null;case 5:if(ze(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return at(t),null}if(s=le.current,Za(t))fd(t);else{var g=Ls(we.current);switch(s){case 1:s=g.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=g.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=g.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=g.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=g.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?g.createElement("select",{is:a.is}):g.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?g.createElement(r,{is:a.is}):g.createElement(r)}}s[xt]=t,s[It]=a;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)s.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=s;e:switch(At(s,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Tn(t)}}return at(t),Vo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=we.current,Za(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=St,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ih(e.nodeValue,n)),e||Pn(t,!0)}else e=Ls(e).createTextNode(a),e[xt]=t,t.stateNode=e}return at(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Za(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[xt]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),e=!1}else n=Wl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Pt(t),t):(Pt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return at(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Za(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[xt]=t}else ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;at(t),r=!1}else r=Wl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Pt(t),t):(Pt(t),null)}return Pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xs(t,t.updateQueue),at(t),null);case 4:return Ee(),e===null&&uc(t.stateNode.containerInfo),at(t),null;case 10:return En(t.type),at(t),null;case 19:if(k(ot),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Kr(a,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ls(e),s!==null){for(t.flags|=128,Kr(a,!1),e=s.updateQueue,t.updateQueue=e,xs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ld(n,e),n=n.sibling;return se(ot,ot.current&1|2),He&&xn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Se()>Rs&&(t.flags|=128,r=!0,Kr(a,!1),t.lanes=4194304)}else{if(!r)if(e=ls(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,xs(t,e),Kr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!He)return at(t),null}else 2*Se()-a.renderingStartTime>Rs&&n!==536870912&&(t.flags|=128,r=!0,Kr(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Se(),e.sibling=null,n=ot.current,se(ot,r?n&1|2:n&1),He&&xn(t,a.treeForkCount),e):(at(t),null);case 22:case 23:return Pt(t),uo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),n=t.updateQueue,n!==null&&xs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&k(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),En(ut),at(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function $g(e,t){switch(Ql(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(ut),Ee(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ze(t),null;case 31:if(t.memoizedState!==null){if(Pt(t),t.alternate===null)throw Error(u(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(ot),null;case 4:return Ee(),null;case 10:return En(t.type),null;case 22:case 23:return Pt(t),uo(),e!==null&&k(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(ut),null;case 25:return null;default:return null}}function Lf(e,t){switch(Ql(t),t.tag){case 3:En(ut),Ee();break;case 26:case 27:case 5:ze(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Pt(t);break;case 13:Pt(t);break;case 19:k(ot);break;case 10:En(t.type);break;case 22:case 23:Pt(t),uo(),e!==null&&k(Ea);break;case 24:En(ut)}}function Jr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var s=n.create,g=n.inst;a=s(),g.destroy=a}n=n.next}while(n!==r)}}catch(N){Ze(t,t.return,N)}}function Xn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&e)===e){var g=a.inst,N=g.destroy;if(N!==void 0){g.destroy=void 0,r=t;var U=n,K=N;try{K()}catch(ce){Ze(r,U,ce)}}}a=a.next}while(a!==s)}}catch(ce){Ze(t,t.return,ce)}}function Mf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Rd(t,n)}catch(a){Ze(e,e.return,a)}}}function zf(e,t,n){n.props=_a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ze(e,t,a)}}function ei(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Ze(e,t,r)}}function pn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Ze(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ze(e,t,r)}else n.current=null}function Uf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Ze(e,e.return,r)}}function $o(e,t,n){try{var a=e.stateNode;d0(a,e.type,n,t),a[It]=t}catch(r){Ze(e,e.return,r)}}function Ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ta(e.type)||e.tag===4}function Ho(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn));else if(a!==4&&(a===27&&ta(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}function Ss(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ta(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function Bf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);At(t,a,n),t[xt]=e,t[It]=n}catch(s){Ze(e,e.return,s)}}var _n=!1,ht=!1,Yo=!1,Pf=typeof WeakSet=="function"?WeakSet:Set,vt=null;function Hg(e,t){if(e=e.containerInfo,hc=Vs,e=Ku(e),Ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var g=0,N=-1,U=-1,K=0,ce=0,fe=e,ee=null;t:for(;;){for(var ie;fe!==n||r!==0&&fe.nodeType!==3||(N=g+r),fe!==s||a!==0&&fe.nodeType!==3||(U=g+a),fe.nodeType===3&&(g+=fe.nodeValue.length),(ie=fe.firstChild)!==null;)ee=fe,fe=ie;for(;;){if(fe===e)break t;if(ee===n&&++K===r&&(N=g),ee===s&&++ce===a&&(U=g),(ie=fe.nextSibling)!==null)break;fe=ee,ee=fe.parentNode}fe=ie}n=N===-1||U===-1?null:{start:N,end:U}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:e,selectionRange:n},Vs=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var Ae=_a(n.type,r);e=a.getSnapshotBeforeUpdate(Ae,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(De){Ze(n,n.return,De)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Vf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n),a&4&&Jr(5,n);break;case 1:if(Cn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Ze(n,n.return,g)}else{var r=_a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ze(n,n.return,g)}}a&64&&Mf(n),a&512&&ei(n,n.return);break;case 3:if(Cn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Rd(e,t)}catch(g){Ze(n,n.return,g)}}break;case 27:t===null&&a&4&&Bf(n);case 26:case 5:Cn(e,n),t===null&&a&4&&Uf(n),a&512&&ei(n,n.return);break;case 12:Cn(e,n);break;case 31:Cn(e,n),a&4&&Gf(e,n);break;case 13:Cn(e,n),a&4&&Yf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Jg.bind(null,n),b0(e,n))));break;case 22:if(a=n.memoizedState!==null||_n,!a){t=t!==null&&t.memoizedState!==null||ht,r=_n;var s=ht;_n=a,(ht=t)&&!s?In(e,n,(n.subtreeFlags&8772)!==0):Cn(e,n),_n=r,ht=s}break;case 30:break;default:Cn(e,n)}}function $f(e){var t=e.alternate;t!==null&&(e.alternate=null,$f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Sl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,jt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)Hf(e,t,n),n=n.sibling}function Hf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(et,n)}catch{}switch(n.tag){case 26:ht||pn(n,t),Nn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ht||pn(n,t);var a=rt,r=jt;ta(n.type)&&(rt=n.stateNode,jt=!1),Nn(e,t,n),ci(n.stateNode),rt=a,jt=r;break;case 5:ht||pn(n,t);case 6:if(a=rt,r=jt,rt=null,Nn(e,t,n),rt=a,jt=r,rt!==null)if(jt)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(n.stateNode)}catch(s){Ze(n,t,s)}else try{rt.removeChild(n.stateNode)}catch(s){Ze(n,t,s)}break;case 18:rt!==null&&(jt?(e=rt,Mh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),yr(e)):Mh(rt,n.stateNode));break;case 4:a=rt,r=jt,rt=n.stateNode.containerInfo,jt=!0,Nn(e,t,n),rt=a,jt=r;break;case 0:case 11:case 14:case 15:Xn(2,n,t),ht||Xn(4,n,t),Nn(e,t,n);break;case 1:ht||(pn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&zf(n,t,a)),Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:ht=(a=ht)||n.memoizedState!==null,Nn(e,t,n),ht=a;break;default:Nn(e,t,n)}}function Gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(n){Ze(t,t.return,n)}}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(n){Ze(t,t.return,n)}}function Gg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pf),t;default:throw Error(u(435,e.tag))}}function Es(e,t){var n=Gg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=e0.bind(null,e,a);a.then(r,r)}})}function Ot(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],s=e,g=t,N=g;e:for(;N!==null;){switch(N.tag){case 27:if(ta(N.type)){rt=N.stateNode,jt=!1;break e}break;case 5:rt=N.stateNode,jt=!1;break e;case 3:case 4:rt=N.stateNode.containerInfo,jt=!0;break e}N=N.return}if(rt===null)throw Error(u(160));Hf(s,g,r),rt=null,jt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qf(t,e),t=t.sibling}var ln=null;function qf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(t,e),kt(e),a&4&&(Xn(3,e,e.return),Jr(3,e),Xn(5,e,e.return));break;case 1:Ot(t,e),kt(e),a&512&&(ht||n===null||pn(n,n.return)),a&64&&_n&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=ln;if(Ot(t,e),kt(e),a&512&&(ht||n===null||pn(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":s=r.getElementsByTagName("title")[0],(!s||s[_r]||s[xt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(a),r.head.insertBefore(s,r.querySelector("head > title"))),At(s,a,n),s[xt]=e,yt(s),a=s;break e;case"link":var g=qh("link","href",r).get(a+(n.href||""));if(g){for(var N=0;N<g.length;N++)if(s=g[N],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(N,1);break t}}s=r.createElement(a),At(s,a,n),r.head.appendChild(s);break;case"meta":if(g=qh("meta","content",r).get(a+(n.content||""))){for(N=0;N<g.length;N++)if(s=g[N],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(N,1);break t}}s=r.createElement(a),At(s,a,n),r.head.appendChild(s);break;default:throw Error(u(468,a))}s[xt]=e,yt(s),a=s}e.stateNode=a}else Xh(r,e.type,e.stateNode);else e.stateNode=Yh(r,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?Xh(r,e.type,e.stateNode):Yh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&$o(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ot(t,e),kt(e),a&512&&(ht||n===null||pn(n,n.return)),n!==null&&a&4&&$o(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ot(t,e),kt(e),a&512&&(ht||n===null||pn(n,n.return)),e.flags&32){r=e.stateNode;try{Ba(r,"")}catch(Ae){Ze(e,e.return,Ae)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,$o(e,r,n!==null?n.memoizedProps:r)),a&1024&&(Yo=!0);break;case 6:if(Ot(t,e),kt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Ae){Ze(e,e.return,Ae)}}break;case 3:if(Us=null,r=ln,ln=Ms(t.containerInfo),Ot(t,e),ln=r,kt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(Ae){Ze(e,e.return,Ae)}Yo&&(Yo=!1,Xf(e));break;case 4:a=ln,ln=Ms(e.stateNode.containerInfo),Ot(t,e),kt(e),ln=a;break;case 12:Ot(t,e),kt(e);break;case 31:Ot(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Es(e,a)));break;case 13:Ot(t,e),kt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(As=Se()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Es(e,a)));break;case 22:r=e.memoizedState!==null;var U=n!==null&&n.memoizedState!==null,K=_n,ce=ht;if(_n=K||r,ht=ce||U,Ot(t,e),ht=ce,_n=K,kt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||U||_n||ht||Na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){U=n=t;try{if(s=U.stateNode,r)g=s.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{N=U.stateNode;var fe=U.memoizedProps.style,ee=fe!=null&&fe.hasOwnProperty("display")?fe.display:null;N.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ae){Ze(U,U.return,Ae)}}}else if(t.tag===6){if(n===null){U=t;try{U.stateNode.nodeValue=r?"":U.memoizedProps}catch(Ae){Ze(U,U.return,Ae)}}}else if(t.tag===18){if(n===null){U=t;try{var ie=U.stateNode;r?zh(ie,!0):zh(U.stateNode,!1)}catch(Ae){Ze(U,U.return,Ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Es(e,n))));break;case 19:Ot(t,e),kt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Es(e,a)));break;case 30:break;case 21:break;default:Ot(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Ff(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,s=Ho(e);Ss(e,s,r);break;case 5:var g=n.stateNode;n.flags&32&&(Ba(g,""),n.flags&=-33);var N=Ho(e);Ss(e,N,g);break;case 3:case 4:var U=n.stateNode.containerInfo,K=Ho(e);Go(e,K,U);break;default:throw Error(u(161))}}catch(ce){Ze(e,e.return,ce)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vf(e,t.alternate,t),t=t.sibling}function Na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Na(t);break;case 1:pn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&zf(t,t.return,n),Na(t);break;case 27:ci(t.stateNode);case 26:case 5:pn(t,t.return),Na(t);break;case 22:t.memoizedState===null&&Na(t);break;case 30:Na(t);break;default:Na(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,s=t,g=s.flags;switch(s.tag){case 0:case 11:case 15:In(r,s,n),Jr(4,s);break;case 1:if(In(r,s,n),a=s,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(K){Ze(a,a.return,K)}if(a=s,r=a.updateQueue,r!==null){var N=a.stateNode;try{var U=r.shared.hiddenCallbacks;if(U!==null)for(r.shared.hiddenCallbacks=null,r=0;r<U.length;r++)Ad(U[r],N)}catch(K){Ze(a,a.return,K)}}n&&g&64&&Mf(s),ei(s,s.return);break;case 27:Bf(s);case 26:case 5:In(r,s,n),n&&a===null&&g&4&&Uf(s),ei(s,s.return);break;case 12:In(r,s,n);break;case 31:In(r,s,n),n&&g&4&&Gf(r,s);break;case 13:In(r,s,n),n&&g&4&&Yf(r,s);break;case 22:s.memoizedState===null&&In(r,s,n),ei(s,s.return);break;case 30:break;default:In(r,s,n)}t=t.sibling}}function qo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Br(n))}function Xo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Br(e))}function on(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qf(e,t,n,a),t=t.sibling}function Qf(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,a),r&2048&&Jr(9,t);break;case 1:on(e,t,n,a);break;case 3:on(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Br(e)));break;case 12:if(r&2048){on(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,g=s.id,N=s.onPostCommit;typeof N=="function"&&N(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(U){Ze(t,t.return,U)}}else on(e,t,n,a);break;case 31:on(e,t,n,a);break;case 13:on(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,g=t.alternate,t.memoizedState!==null?s._visibility&2?on(e,t,n,a):ti(e,t):s._visibility&2?on(e,t,n,a):(s._visibility|=2,sr(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&qo(g,t);break;case 24:on(e,t,n,a),r&2048&&Xo(t.alternate,t);break;default:on(e,t,n,a)}}function sr(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,g=t,N=n,U=a,K=g.flags;switch(g.tag){case 0:case 11:case 15:sr(s,g,N,U,r),Jr(8,g);break;case 23:break;case 22:var ce=g.stateNode;g.memoizedState!==null?ce._visibility&2?sr(s,g,N,U,r):ti(s,g):(ce._visibility|=2,sr(s,g,N,U,r)),r&&K&2048&&qo(g.alternate,g);break;case 24:sr(s,g,N,U,r),r&&K&2048&&Xo(g.alternate,g);break;default:sr(s,g,N,U,r)}t=t.sibling}}function ti(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:ti(n,a),r&2048&&qo(a.alternate,a);break;case 24:ti(n,a),r&2048&&Xo(a.alternate,a);break;default:ti(n,a)}t=t.sibling}}var ni=8192;function lr(e,t,n){if(e.subtreeFlags&ni)for(e=e.child;e!==null;)Zf(e,t,n),e=e.sibling}function Zf(e,t,n){switch(e.tag){case 26:lr(e,t,n),e.flags&ni&&e.memoizedState!==null&&D0(n,ln,e.memoizedState,e.memoizedProps);break;case 5:lr(e,t,n);break;case 3:case 4:var a=ln;ln=Ms(e.stateNode.containerInfo),lr(e,t,n),ln=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ni,ni=16777216,lr(e,t,n),ni=a):lr(e,t,n));break;default:lr(e,t,n)}}function Wf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,Jf(a,e)}Wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kf(e),e=e.sibling}function Kf(e){switch(e.tag){case 0:case 11:case 15:ai(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:ai(e);break;case 12:ai(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ws(e)):ai(e);break;default:ai(e)}}function ws(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,Jf(a,e)}Wf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),ws(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ws(t));break;default:ws(t)}e=e.sibling}}function Jf(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Br(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var r=a.sibling,s=a.return;if($f(a),a===n){vt=null;break e}if(r!==null){r.return=s,vt=r;break e}vt=s}}}var Yg={getCacheForType:function(e){var t=Et(ut),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Et(ut).controller.signal}},qg=typeof WeakMap=="function"?WeakMap:Map,qe=0,tt=null,Be=null,Ve=0,Qe=0,Vt=null,Qn=!1,or=!1,Qo=!1,Dn=0,lt=0,Zn=0,Ca=0,Zo=0,$t=0,cr=0,ri=null,Lt=null,Wo=!1,As=0,eh=0,Rs=1/0,Ts=null,Wn=null,pt=0,Kn=null,ur=null,jn=0,Ko=0,Jo=null,th=null,ii=0,ec=null;function Ht(){return(qe&2)!==0&&Ve!==0?Ve&-Ve:V.T!==null?sc():gu()}function nh(){if($t===0)if((Ve&536870912)===0||He){var e=fa;fa<<=1,(fa&3932160)===0&&(fa=262144),$t=e}else $t=536870912;return e=Bt.current,e!==null&&(e.flags|=32),$t}function Mt(e,t,n){(e===tt&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Jn(e,Ve,$t,!1)),Tr(e,n),((qe&2)===0||e!==tt)&&(e===tt&&((qe&2)===0&&(Ca|=n),lt===4&&Jn(e,Ve,$t,!1)),mn(e))}function ah(e,t,n){if((qe&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Rr(e,t),r=a?Zg(e,t):nc(e,t,!0),s=a;do{if(r===0){or&&!a&&Jn(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Xg(n)){r=nc(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var N=e;r=ri;var U=N.current.memoizedState.isDehydrated;if(U&&(dr(N,g).flags|=256),g=nc(N,g,!1),g!==2){if(Qo&&!U){N.errorRecoveryDisabledLanes|=s,Ca|=s,r=4;break e}s=Lt,Lt=r,s!==null&&(Lt===null?Lt=s:Lt.push.apply(Lt,s))}r=g}if(s=!1,r!==2)continue}}if(r===1){dr(e,0),Jn(e,t,0,!0);break}e:{switch(a=e,s=r,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Jn(a,t,$t,!Qn);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=As+300-Se(),10<r)){if(Jn(a,t,$t,!Qn),Mi(a,0,!0)!==0)break e;jn=t,a.timeoutHandle=kh(rh.bind(null,a,n,Lt,Ts,Wo,t,$t,Ca,cr,Qn,s,"Throttled",-0,0),r);break e}rh(a,n,Lt,Ts,Wo,t,$t,Ca,cr,Qn,s,null,-0,0)}}break}while(!0);mn(e)}function rh(e,t,n,a,r,s,g,N,U,K,ce,fe,ee,ie){if(e.timeoutHandle=-1,fe=t.subtreeFlags,fe&8192||(fe&16785408)===16785408){fe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},Zf(t,s,fe);var Ae=(s&62914560)===s?As-Se():(s&4194048)===s?eh-Se():0;if(Ae=j0(fe,Ae),Ae!==null){jn=s,e.cancelPendingCommit=Ae(fh.bind(null,e,t,s,n,a,r,g,N,U,ce,fe,null,ee,ie)),Jn(e,s,g,!K);return}}fh(e,t,s,n,a,r,g,N,U)}function Xg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],s=r.getSnapshot;r=r.value;try{if(!Ut(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,n,a){t&=~Zo,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var s=31-it(r),g=1<<s;a[s]=-1,r&=~g}n!==0&&hu(e,n,t)}function _s(){return(qe&6)===0?(si(0),!1):!0}function tc(){if(Be!==null){if(Qe===0)var e=Be.return;else e=Be,Sn=xa=null,yo(e),tr=null,Vr=0,e=Be;for(;e!==null;)Lf(e.alternate,e),e=e.return;Be=null}}function dr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,p0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,tc(),tt=e,Be=n=bn(e.current,null),Ve=t,Qe=0,Vt=null,Qn=!1,or=Rr(e,t),Qo=!1,cr=$t=Zo=Ca=Zn=lt=0,Lt=ri=null,Wo=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-it(a),s=1<<r;t|=e[r],a&=~s}return Dn=t,Xi(),n}function ih(e,t){Le=null,V.H=Zr,t===er||t===ns?(t=xd(),Qe=3):t===ro?(t=xd(),Qe=4):Qe=t===Oo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vt=t,Be===null&&(lt=1,gs(e,Wt(t,e.current)))}function sh(){var e=Bt.current;return e===null?!0:(Ve&4194048)===Ve?tn===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===tn:!1}function lh(){var e=V.H;return V.H=Zr,e===null?Zr:e}function oh(){var e=V.A;return V.A=Yg,e}function Ns(){lt=4,Qn||(Ve&4194048)!==Ve&&Bt.current!==null||(or=!0),(Zn&134217727)===0&&(Ca&134217727)===0||tt===null||Jn(tt,Ve,$t,!1)}function nc(e,t,n){var a=qe;qe|=2;var r=lh(),s=oh();(tt!==e||Ve!==t)&&(Ts=null,dr(e,t)),t=!1;var g=lt;e:do try{if(Qe!==0&&Be!==null){var N=Be,U=Vt;switch(Qe){case 8:tc(),g=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var K=Qe;if(Qe=0,Vt=null,fr(e,N,U,K),n&&or){g=0;break e}break;default:K=Qe,Qe=0,Vt=null,fr(e,N,U,K)}}Qg(),g=lt;break}catch(ce){ih(e,ce)}while(!0);return t&&e.shellSuspendCounter++,Sn=xa=null,qe=a,V.H=r,V.A=s,Be===null&&(tt=null,Ve=0,Xi()),g}function Qg(){for(;Be!==null;)ch(Be)}function Zg(e,t){var n=qe;qe|=2;var a=lh(),r=oh();tt!==e||Ve!==t?(Ts=null,Rs=Se()+500,dr(e,t)):or=Rr(e,t);e:do try{if(Qe!==0&&Be!==null){t=Be;var s=Vt;t:switch(Qe){case 1:Qe=0,Vt=null,fr(e,t,s,1);break;case 2:case 9:if(vd(s)){Qe=0,Vt=null,uh(t);break}t=function(){Qe!==2&&Qe!==9||tt!==e||(Qe=7),mn(e)},s.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:vd(s)?(Qe=0,Vt=null,uh(t)):(Qe=0,Vt=null,fr(e,t,s,7));break;case 5:var g=null;switch(Be.tag){case 26:g=Be.memoizedState;case 5:case 27:var N=Be;if(g?Qh(g):N.stateNode.complete){Qe=0,Vt=null;var U=N.sibling;if(U!==null)Be=U;else{var K=N.return;K!==null?(Be=K,Cs(K)):Be=null}break t}}Qe=0,Vt=null,fr(e,t,s,5);break;case 6:Qe=0,Vt=null,fr(e,t,s,6);break;case 8:tc(),lt=6;break e;default:throw Error(u(462))}}Wg();break}catch(ce){ih(e,ce)}while(!0);return Sn=xa=null,V.H=a,V.A=r,qe=n,Be!==null?0:(tt=null,Ve=0,Xi(),lt)}function Wg(){for(;Be!==null&&!J();)ch(Be)}function ch(e){var t=Of(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?Cs(e):Be=t}function uh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_f(n,t,t.pendingProps,t.type,void 0,Ve);break;case 11:t=_f(n,t,t.pendingProps,t.type.render,t.ref,Ve);break;case 5:yo(t);default:Lf(n,t),t=Be=ld(t,Dn),t=Of(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?Cs(e):Be=t}function fr(e,t,n,a){Sn=xa=null,yo(t),tr=null,Vr=0;var r=t.return;try{if(Fg(e,r,t,n,Ve)){lt=1,gs(e,Wt(n,e.current)),Be=null;return}}catch(s){if(r!==null)throw Be=r,s;lt=1,gs(e,Wt(n,e.current)),Be=null;return}t.flags&32768?(He||a===1?e=!0:or||(Ve&536870912)!==0?e=!1:(Qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),dh(t,e)):Cs(t)}function Cs(e){var t=e;do{if((t.flags&32768)!==0){dh(t,Qn);return}e=t.return;var n=Vg(t.alternate,t,Dn);if(n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);lt===0&&(lt=5)}function dh(e,t){do{var n=$g(e.alternate,e);if(n!==null){n.flags&=32767,Be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Be=e;return}Be=e=n}while(e!==null);lt=6,Be=null}function fh(e,t,n,a,r,s,g,N,U){e.cancelPendingCommit=null;do Is();while(pt!==0);if((qe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=$l,Im(e,n,s,g,N,U),e===tt&&(Be=tt=null,Ve=0),ur=t,Kn=e,jn=n,Ko=s,Jo=r,th=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,t0(Ue,function(){return yh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null,r=$.p,$.p=2,g=qe,qe|=4;try{Hg(e,t,n)}finally{qe=g,$.p=r,V.T=a}}pt=1,hh(),ph(),mh()}}function hh(){if(pt===1){pt=0;var e=Kn,t=ur,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var a=$.p;$.p=2;var r=qe;qe|=4;try{qf(t,e);var s=pc,g=Ku(e.containerInfo),N=s.focusedElem,U=s.selectionRange;if(g!==N&&N&&N.ownerDocument&&Wu(N.ownerDocument.documentElement,N)){if(U!==null&&Ul(N)){var K=U.start,ce=U.end;if(ce===void 0&&(ce=K),"selectionStart"in N)N.selectionStart=K,N.selectionEnd=Math.min(ce,N.value.length);else{var fe=N.ownerDocument||document,ee=fe&&fe.defaultView||window;if(ee.getSelection){var ie=ee.getSelection(),Ae=N.textContent.length,De=Math.min(U.start,Ae),Je=U.end===void 0?De:Math.min(U.end,Ae);!ie.extend&&De>Je&&(g=Je,Je=De,De=g);var X=Zu(N,De),H=Zu(N,Je);if(X&&H&&(ie.rangeCount!==1||ie.anchorNode!==X.node||ie.anchorOffset!==X.offset||ie.focusNode!==H.node||ie.focusOffset!==H.offset)){var W=fe.createRange();W.setStart(X.node,X.offset),ie.removeAllRanges(),De>Je?(ie.addRange(W),ie.extend(H.node,H.offset)):(W.setEnd(H.node,H.offset),ie.addRange(W))}}}}for(fe=[],ie=N;ie=ie.parentNode;)ie.nodeType===1&&fe.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<fe.length;N++){var de=fe[N];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Vs=!!hc,pc=hc=null}finally{qe=r,$.p=a,V.T=n}}e.current=t,pt=2}}function ph(){if(pt===2){pt=0;var e=Kn,t=ur,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var a=$.p;$.p=2;var r=qe;qe|=4;try{Vf(e,t.alternate,t)}finally{qe=r,$.p=a,V.T=n}}pt=3}}function mh(){if(pt===4||pt===3){pt=0,be();var e=Kn,t=ur,n=jn,a=th;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,ur=Kn=null,gh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Wn=null),bl(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(et,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=V.T,r=$.p,$.p=2,V.T=null;try{for(var s=e.onRecoverableError,g=0;g<a.length;g++){var N=a[g];s(N.value,{componentStack:N.stack})}}finally{V.T=t,$.p=r}}(jn&3)!==0&&Is(),mn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===ec?ii++:(ii=0,ec=e):ii=0,si(0)}}function gh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Br(t)))}function Is(){return hh(),ph(),mh(),yh()}function yh(){if(pt!==5)return!1;var e=Kn,t=Ko;Ko=0;var n=bl(jn),a=V.T,r=$.p;try{$.p=32>n?32:n,V.T=null,n=Jo,Jo=null;var s=Kn,g=jn;if(pt=0,ur=Kn=null,jn=0,(qe&6)!==0)throw Error(u(331));var N=qe;if(qe|=4,Kf(s.current),Qf(s,s.current,g,n),qe=N,si(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(et,s)}catch{}return!0}finally{$.p=r,V.T=a,gh(e,t)}}function vh(e,t,n){t=Wt(n,t),t=jo(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(Tr(e,2),mn(e))}function Ze(e,t,n){if(e.tag===3)vh(e,e,n);else for(;t!==null;){if(t.tag===3){vh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Wn===null||!Wn.has(a))){e=Wt(n,e),n=bf(2),a=Gn(t,n,2),a!==null&&(xf(n,a,t,e),Tr(a,2),mn(a));break}}t=t.return}}function ac(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new qg;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Qo=!0,r.add(n),e=Kg.bind(null,e,t,n),t.then(e,e))}function Kg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&(Ve&n)===n&&(lt===4||lt===3&&(Ve&62914560)===Ve&&300>Se()-As?(qe&2)===0&&dr(e,0):Zo|=n,cr===Ve&&(cr=0)),mn(e)}function bh(e,t){t===0&&(t=fu()),e=ya(e,t),e!==null&&(Tr(e,t),mn(e))}function Jg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bh(e,n)}function e0(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),bh(e,n)}function t0(e,t){return me(e,t)}var Ds=null,hr=null,rc=!1,js=!1,ic=!1,ea=0;function mn(e){e!==hr&&e.next===null&&(hr===null?Ds=hr=e:hr=hr.next=e),js=!0,rc||(rc=!0,a0())}function si(e,t){if(!ic&&js){ic=!0;do for(var n=!1,a=Ds;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var s=0;else{var g=a.suspendedLanes,N=a.pingedLanes;s=(1<<31-it(42|e)+1)-1,s&=r&~(g&~N),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,wh(a,s))}else s=Ve,s=Mi(a,a===tt?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Rr(a,s)||(n=!0,wh(a,s));a=a.next}while(n);ic=!1}}function n0(){xh()}function xh(){js=rc=!1;var e=0;ea!==0&&h0()&&(e=ea);for(var t=Se(),n=null,a=Ds;a!==null;){var r=a.next,s=Sh(a,t);s===0?(a.next=null,n===null?Ds=r:n.next=r,r===null&&(hr=n)):(n=a,(e!==0||(s&3)!==0)&&(js=!0)),a=r}pt!==0&&pt!==5||si(e),ea!==0&&(ea=0)}function Sh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var g=31-it(s),N=1<<g,U=r[g];U===-1?((N&n)===0||(N&a)!==0)&&(r[g]=Cm(N,t)):U<=t&&(e.expiredLanes|=N),s&=~N}if(t=tt,n=Ve,n=Mi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ge(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Rr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ge(a),bl(n)){case 2:case 8:n=Xe;break;case 32:n=Ue;break;case 268435456:n=Mn;break;default:n=Ue}return a=Eh.bind(null,e),n=me(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ge(a),e.callbackPriority=2,e.callbackNode=null,2}function Eh(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Is()&&e.callbackNode!==n)return null;var a=Ve;return a=Mi(e,e===tt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(ah(e,a,t),Sh(e,Se()),e.callbackNode!=null&&e.callbackNode===n?Eh.bind(null,e):null)}function wh(e,t){if(Is())return null;ah(e,t,!0)}function a0(){m0(function(){(qe&6)!==0?me(Ne,n0):xh()})}function sc(){if(ea===0){var e=Ka;e===0&&(e=Oa,Oa<<=1,(Oa&261888)===0&&(Oa=256)),ea=e}return ea}function Ah(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bi(""+e)}function Rh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function r0(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var s=Ah((r[It]||null).action),g=a.submitter;g&&(t=(t=g[It]||null)?Ah(t.formAction):g.getAttribute("formAction"),t!==null&&(s=t,g=null));var N=new Hi("action","action",null,a,r);e.push({event:N,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ea!==0){var U=g?Rh(r,g):new FormData(r);To(n,{pending:!0,data:U,method:r.method,action:s},null,U)}}else typeof s=="function"&&(N.preventDefault(),U=g?Rh(r,g):new FormData(r),To(n,{pending:!0,data:U,method:r.method,action:s},s,U))},currentTarget:r}]})}}for(var lc=0;lc<Vl.length;lc++){var oc=Vl[lc],i0=oc.toLowerCase(),s0=oc[0].toUpperCase()+oc.slice(1);sn(i0,"on"+s0)}sn(td,"onAnimationEnd"),sn(nd,"onAnimationIteration"),sn(ad,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(Eg,"onTransitionRun"),sn(wg,"onTransitionStart"),sn(Ag,"onTransitionCancel"),sn(rd,"onTransitionEnd"),Ua("onMouseEnter",["mouseout","mouseover"]),Ua("onMouseLeave",["mouseout","mouseover"]),Ua("onPointerEnter",["pointerout","pointerover"]),Ua("onPointerLeave",["pointerout","pointerover"]),ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(li));function Th(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var g=a.length-1;0<=g;g--){var N=a[g],U=N.instance,K=N.currentTarget;if(N=N.listener,U!==s&&r.isPropagationStopped())break e;s=N,r.currentTarget=K;try{s(r)}catch(ce){qi(ce)}r.currentTarget=null,s=U}else for(g=0;g<a.length;g++){if(N=a[g],U=N.instance,K=N.currentTarget,N=N.listener,U!==s&&r.isPropagationStopped())break e;s=N,r.currentTarget=K;try{s(r)}catch(ce){qi(ce)}r.currentTarget=null,s=U}}}}function Pe(e,t){var n=t[xl];n===void 0&&(n=t[xl]=new Set);var a=e+"__bubble";n.has(a)||(_h(t,e,2,!1),n.add(a))}function cc(e,t,n){var a=0;t&&(a|=4),_h(n,e,a,t)}var Os="_reactListening"+Math.random().toString(36).slice(2);function uc(e){if(!e[Os]){e[Os]=!0,bu.forEach(function(n){n!=="selectionchange"&&(l0.has(n)||cc(n,!1,e),cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Os]||(t[Os]=!0,cc("selectionchange",!1,t))}}function _h(e,t,n,a){switch(np(t)){case 2:var r=L0;break;case 8:r=M0;break;default:r=Rc}n=r.bind(null,t,n,e),r=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function dc(e,t,n,a,r){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var N=a.stateNode.containerInfo;if(N===r)break;if(g===4)for(g=a.return;g!==null;){var U=g.tag;if((U===3||U===4)&&g.stateNode.containerInfo===r)return;g=g.return}for(;N!==null;){if(g=La(N),g===null)return;if(U=g.tag,U===5||U===6||U===26||U===27){a=s=g;continue e}N=N.parentNode}}a=a.return}Du(function(){var K=s,ce=_l(n),fe=[];e:{var ee=id.get(e);if(ee!==void 0){var ie=Hi,Ae=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":ie=eg;break;case"focusin":Ae="focus",ie=Ol;break;case"focusout":Ae="blur",ie=Ol;break;case"beforeblur":case"afterblur":ie=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=ag;break;case td:case nd:case ad:ie=Gm;break;case rd:ie=ig;break;case"scroll":case"scrollend":ie=Bm;break;case"wheel":ie=lg;break;case"copy":case"cut":case"paste":ie=qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Mu;break;case"toggle":case"beforetoggle":ie=cg}var De=(t&4)!==0,Je=!De&&(e==="scroll"||e==="scrollend"),X=De?ee!==null?ee+"Capture":null:ee;De=[];for(var H=K,W;H!==null;){var de=H;if(W=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||W===null||X===null||(de=Cr(H,X),de!=null&&De.push(oi(H,de,W))),Je)break;H=H.return}0<De.length&&(ee=new ie(ee,Ae,null,n,ce),fe.push({event:ee,listeners:De}))}}if((t&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",ie=e==="mouseout"||e==="pointerout",ee&&n!==Tl&&(Ae=n.relatedTarget||n.fromElement)&&(La(Ae)||Ae[ka]))break e;if((ie||ee)&&(ee=ce.window===ce?ce:(ee=ce.ownerDocument)?ee.defaultView||ee.parentWindow:window,ie?(Ae=n.relatedTarget||n.toElement,ie=K,Ae=Ae?La(Ae):null,Ae!==null&&(Je=f(Ae),De=Ae.tag,Ae!==Je||De!==5&&De!==27&&De!==6)&&(Ae=null)):(ie=null,Ae=K),ie!==Ae)){if(De=ku,de="onMouseLeave",X="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(De=Mu,de="onPointerLeave",X="onPointerEnter",H="pointer"),Je=ie==null?ee:Nr(ie),W=Ae==null?ee:Nr(Ae),ee=new De(de,H+"leave",ie,n,ce),ee.target=Je,ee.relatedTarget=W,de=null,La(ce)===K&&(De=new De(X,H+"enter",Ae,n,ce),De.target=W,De.relatedTarget=Je,de=De),Je=de,ie&&Ae)t:{for(De=o0,X=ie,H=Ae,W=0,de=X;de;de=De(de))W++;de=0;for(var Ce=H;Ce;Ce=De(Ce))de++;for(;0<W-de;)X=De(X),W--;for(;0<de-W;)H=De(H),de--;for(;W--;){if(X===H||H!==null&&X===H.alternate){De=X;break t}X=De(X),H=De(H)}De=null}else De=null;ie!==null&&Nh(fe,ee,ie,De,!1),Ae!==null&&Je!==null&&Nh(fe,Je,Ae,De,!0)}}e:{if(ee=K?Nr(K):window,ie=ee.nodeName&&ee.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ee.type==="file")var Ge=Hu;else if(Vu(ee))if(Gu)Ge=bg;else{Ge=yg;var Re=gg}else ie=ee.nodeName,!ie||ie.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?K&&Rl(K.elementType)&&(Ge=Hu):Ge=vg;if(Ge&&(Ge=Ge(e,K))){$u(fe,Ge,n,ce);break e}Re&&Re(e,ee,K),e==="focusout"&&K&&ee.type==="number"&&K.memoizedProps.value!=null&&Al(ee,"number",ee.value)}switch(Re=K?Nr(K):window,e){case"focusin":(Vu(Re)||Re.contentEditable==="true")&&(Ha=Re,Fl=K,zr=null);break;case"focusout":zr=Fl=Ha=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,Ju(fe,n,ce);break;case"selectionchange":if(Sg)break;case"keydown":case"keyup":Ju(fe,n,ce)}var Me;if(Ll)e:{switch(e){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else $a?Bu(e,n)&&($e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($e="onCompositionStart");$e&&(zu&&n.locale!=="ko"&&($a||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&$a&&(Me=ju()):(Un=ce,Il="value"in Un?Un.value:Un.textContent,$a=!0)),Re=ks(K,$e),0<Re.length&&($e=new Lu($e,e,null,n,ce),fe.push({event:$e,listeners:Re}),Me?$e.data=Me:(Me=Pu(n),Me!==null&&($e.data=Me)))),(Me=dg?fg(e,n):hg(e,n))&&($e=ks(K,"onBeforeInput"),0<$e.length&&(Re=new Lu("onBeforeInput","beforeinput",null,n,ce),fe.push({event:Re,listeners:$e}),Re.data=Me)),r0(fe,e,K,n,ce)}Th(fe,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ks(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Cr(e,n),r!=null&&a.unshift(oi(e,r,s)),r=Cr(e,t),r!=null&&a.push(oi(e,r,s))),e.tag===3)return a;e=e.return}return[]}function o0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nh(e,t,n,a,r){for(var s=t._reactName,g=[];n!==null&&n!==a;){var N=n,U=N.alternate,K=N.stateNode;if(N=N.tag,U!==null&&U===a)break;N!==5&&N!==26&&N!==27||K===null||(U=K,r?(K=Cr(n,s),K!=null&&g.unshift(oi(n,K,U))):r||(K=Cr(n,s),K!=null&&g.push(oi(n,K,U)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var c0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function Ch(e){return(typeof e=="string"?e:""+e).replace(c0,`
`).replace(u0,"")}function Ih(e,t){return t=Ch(t),Ch(e)===t}function Ke(e,t,n,a,r,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ba(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ba(e,""+a);break;case"className":Ui(e,"class",a);break;case"tabIndex":Ui(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(e,n,a);break;case"style":Cu(e,a,s);break;case"data":if(t!=="object"){Ui(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Bi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ke(e,t,"name",r.name,r,null),Ke(e,t,"formEncType",r.formEncType,r,null),Ke(e,t,"formMethod",r.formMethod,r,null),Ke(e,t,"formTarget",r.formTarget,r,null)):(Ke(e,t,"encType",r.encType,r,null),Ke(e,t,"method",r.method,r,null),Ke(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Bi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=yn);break;case"onScroll":a!=null&&Pe("scroll",e);break;case"onScrollEnd":a!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Bi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),zi(e,"popover",a);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":zi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Um.get(n)||n,zi(e,n,a))}}function fc(e,t,n,a,r,s){switch(n){case"style":Cu(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ba(e,a):(typeof a=="number"||typeof a=="bigint")&&Ba(e,""+a);break;case"onScroll":a!=null&&Pe("scroll",e);break;case"onScrollEnd":a!=null&&Pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=yn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[It]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):zi(e,n,a)}}}function At(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var a=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var g=n[s];if(g!=null)switch(s){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,s,g,n,null)}}r&&Ke(e,t,"srcSet",n.srcSet,n,null),a&&Ke(e,t,"src",n.src,n,null);return;case"input":Pe("invalid",e);var N=s=g=r=null,U=null,K=null;for(a in n)if(n.hasOwnProperty(a)){var ce=n[a];if(ce!=null)switch(a){case"name":r=ce;break;case"type":g=ce;break;case"checked":U=ce;break;case"defaultChecked":K=ce;break;case"value":s=ce;break;case"defaultValue":N=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(u(137,t));break;default:Ke(e,t,a,ce,n,null)}}Ru(e,s,N,U,K,g,r,!1);return;case"select":Pe("invalid",e),a=g=s=null;for(r in n)if(n.hasOwnProperty(r)&&(N=n[r],N!=null))switch(r){case"value":s=N;break;case"defaultValue":g=N;break;case"multiple":a=N;default:Ke(e,t,r,N,n,null)}t=s,n=g,e.multiple=!!a,t!=null?Fa(e,!!a,t,!1):n!=null&&Fa(e,!!a,n,!0);return;case"textarea":Pe("invalid",e),s=r=a=null;for(g in n)if(n.hasOwnProperty(g)&&(N=n[g],N!=null))switch(g){case"value":a=N;break;case"defaultValue":r=N;break;case"children":s=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(91));break;default:Ke(e,t,g,N,n,null)}_u(e,a,r,s);return;case"option":for(U in n)if(n.hasOwnProperty(U)&&(a=n[U],a!=null))switch(U){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ke(e,t,U,a,n,null)}return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(a=0;a<li.length;a++)Pe(li[a],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in n)if(n.hasOwnProperty(K)&&(a=n[K],a!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ke(e,t,K,a,n,null)}return;default:if(Rl(t)){for(ce in n)n.hasOwnProperty(ce)&&(a=n[ce],a!==void 0&&fc(e,t,ce,a,n,void 0));return}}for(N in n)n.hasOwnProperty(N)&&(a=n[N],a!=null&&Ke(e,t,N,a,n,null))}function d0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,g=null,N=null,U=null,K=null,ce=null;for(ie in n){var fe=n[ie];if(n.hasOwnProperty(ie)&&fe!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":U=fe;default:a.hasOwnProperty(ie)||Ke(e,t,ie,null,a,fe)}}for(var ee in a){var ie=a[ee];if(fe=n[ee],a.hasOwnProperty(ee)&&(ie!=null||fe!=null))switch(ee){case"type":s=ie;break;case"name":r=ie;break;case"checked":K=ie;break;case"defaultChecked":ce=ie;break;case"value":g=ie;break;case"defaultValue":N=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(u(137,t));break;default:ie!==fe&&Ke(e,t,ee,ie,a,fe)}}wl(e,g,N,U,K,ce,s,r);return;case"select":ie=g=N=ee=null;for(s in n)if(U=n[s],n.hasOwnProperty(s)&&U!=null)switch(s){case"value":break;case"multiple":ie=U;default:a.hasOwnProperty(s)||Ke(e,t,s,null,a,U)}for(r in a)if(s=a[r],U=n[r],a.hasOwnProperty(r)&&(s!=null||U!=null))switch(r){case"value":ee=s;break;case"defaultValue":N=s;break;case"multiple":g=s;default:s!==U&&Ke(e,t,r,s,a,U)}t=N,n=g,a=ie,ee!=null?Fa(e,!!n,ee,!1):!!a!=!!n&&(t!=null?Fa(e,!!n,t,!0):Fa(e,!!n,n?[]:"",!1));return;case"textarea":ie=ee=null;for(N in n)if(r=n[N],n.hasOwnProperty(N)&&r!=null&&!a.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ke(e,t,N,null,a,r)}for(g in a)if(r=a[g],s=n[g],a.hasOwnProperty(g)&&(r!=null||s!=null))switch(g){case"value":ee=r;break;case"defaultValue":ie=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==s&&Ke(e,t,g,r,a,s)}Tu(e,ee,ie);return;case"option":for(var Ae in n)if(ee=n[Ae],n.hasOwnProperty(Ae)&&ee!=null&&!a.hasOwnProperty(Ae))switch(Ae){case"selected":e.selected=!1;break;default:Ke(e,t,Ae,null,a,ee)}for(U in a)if(ee=a[U],ie=n[U],a.hasOwnProperty(U)&&ee!==ie&&(ee!=null||ie!=null))switch(U){case"selected":e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Ke(e,t,U,ee,a,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in n)ee=n[De],n.hasOwnProperty(De)&&ee!=null&&!a.hasOwnProperty(De)&&Ke(e,t,De,null,a,ee);for(K in a)if(ee=a[K],ie=n[K],a.hasOwnProperty(K)&&ee!==ie&&(ee!=null||ie!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(u(137,t));break;default:Ke(e,t,K,ee,a,ie)}return;default:if(Rl(t)){for(var Je in n)ee=n[Je],n.hasOwnProperty(Je)&&ee!==void 0&&!a.hasOwnProperty(Je)&&fc(e,t,Je,void 0,a,ee);for(ce in a)ee=a[ce],ie=n[ce],!a.hasOwnProperty(ce)||ee===ie||ee===void 0&&ie===void 0||fc(e,t,ce,ee,a,ie);return}}for(var X in n)ee=n[X],n.hasOwnProperty(X)&&ee!=null&&!a.hasOwnProperty(X)&&Ke(e,t,X,null,a,ee);for(fe in a)ee=a[fe],ie=n[fe],!a.hasOwnProperty(fe)||ee===ie||ee==null&&ie==null||Ke(e,t,fe,ee,a,ie)}function Dh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function f0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],s=r.transferSize,g=r.initiatorType,N=r.duration;if(s&&N&&Dh(g)){for(g=0,N=r.responseEnd,a+=1;a<n.length;a++){var U=n[a],K=U.startTime;if(K>N)break;var ce=U.transferSize,fe=U.initiatorType;ce&&Dh(fe)&&(U=U.responseEnd,g+=ce*(U<N?1:(N-K)/(U-K)))}if(--a,t+=8*(s+g)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hc=null,pc=null;function Ls(e){return e.nodeType===9?e:e.ownerDocument}function jh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Oh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gc=null;function h0(){var e=window.event;return e&&e.type==="popstate"?e===gc?!1:(gc=e,!0):(gc=null,!1)}var kh=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(e){return Lh.resolve(null).then(e).catch(g0)}:kh;function g0(e){setTimeout(function(){throw e})}function ta(e){return e==="head"}function Mh(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),yr(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ci(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ci(n);for(var s=n.firstChild;s;){var g=s.nextSibling,N=s.nodeName;s[_r]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=g}}else n==="body"&&ci(e.ownerDocument.body);n=r}while(n);yr(t)}function zh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yc(n),Sl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function y0(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_r])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function v0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function Uh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=nn(e.nextSibling),e===null))return null;return e}function vc(e){return e.data==="$?"||e.data==="$~"}function bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function b0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xc=null;function Fh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return nn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ph(e,t,n){switch(t=Ls(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ci(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Sl(e)}var an=new Map,Vh=new Set;function Ms(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=$.d;$.d={f:x0,r:S0,D:E0,C:w0,L:A0,m:R0,X:_0,S:T0,M:N0};function x0(){var e=On.f(),t=_s();return e||t}function S0(e){var t=Ma(e);t!==null&&t.tag===5&&t.type==="form"?rf(t):On.r(e)}var pr=typeof document>"u"?null:document;function $h(e,t,n){var a=pr;if(a&&typeof t=="string"&&t){var r=Qt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Vh.has(r)||(Vh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),At(t,"link",e),yt(t),a.head.appendChild(t)))}}function E0(e){On.D(e),$h("dns-prefetch",e,null)}function w0(e,t){On.C(e,t),$h("preconnect",e,t)}function A0(e,t,n){On.L(e,t,n);var a=pr;if(a&&e&&t){var r='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Qt(n.imageSizes)+'"]')):r+='[href="'+Qt(e)+'"]';var s=r;switch(t){case"style":s=mr(e);break;case"script":s=gr(e)}an.has(s)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),an.set(s,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(ui(s))||t==="script"&&a.querySelector(di(s))||(t=a.createElement("link"),At(t,"link",e),yt(t),a.head.appendChild(t)))}}function R0(e,t){On.m(e,t);var n=pr;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Qt(a)+'"][href="'+Qt(e)+'"]',s=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=gr(e)}if(!an.has(s)&&(e=R({rel:"modulepreload",href:e},t),an.set(s,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(di(s)))return}a=n.createElement("link"),At(a,"link",e),yt(a),n.head.appendChild(a)}}}function T0(e,t,n){On.S(e,t,n);var a=pr;if(a&&e){var r=za(a).hoistableStyles,s=mr(e);t=t||"default";var g=r.get(s);if(!g){var N={loading:0,preload:null};if(g=a.querySelector(ui(s)))N.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=an.get(s))&&Sc(e,n);var U=g=a.createElement("link");yt(U),At(U,"link",e),U._p=new Promise(function(K,ce){U.onload=K,U.onerror=ce}),U.addEventListener("load",function(){N.loading|=1}),U.addEventListener("error",function(){N.loading|=2}),N.loading|=4,zs(g,t,a)}g={type:"stylesheet",instance:g,count:1,state:N},r.set(s,g)}}}function _0(e,t){On.X(e,t);var n=pr;if(n&&e){var a=za(n).hoistableScripts,r=gr(e),s=a.get(r);s||(s=n.querySelector(di(r)),s||(e=R({src:e,async:!0},t),(t=an.get(r))&&Ec(e,t),s=n.createElement("script"),yt(s),At(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(r,s))}}function N0(e,t){On.M(e,t);var n=pr;if(n&&e){var a=za(n).hoistableScripts,r=gr(e),s=a.get(r);s||(s=n.querySelector(di(r)),s||(e=R({src:e,async:!0,type:"module"},t),(t=an.get(r))&&Ec(e,t),s=n.createElement("script"),yt(s),At(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(r,s))}}function Hh(e,t,n,a){var r=(r=we.current)?Ms(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=mr(n.href),n=za(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=mr(n.href);var s=za(r).hoistableStyles,g=s.get(e);if(g||(r=r.ownerDocument||r,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,g),(s=r.querySelector(ui(e)))&&!s._p&&(g.instance=s,g.state.loading=5),an.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},an.set(e,n),s||C0(r,e,n,g.state))),t&&a===null)throw Error(u(528,""));return g}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=gr(n),n=za(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function mr(e){return'href="'+Qt(e)+'"'}function ui(e){return'link[rel="stylesheet"]['+e+"]"}function Gh(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function C0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),At(t,"link",n),yt(t),e.head.appendChild(t))}function gr(e){return'[src="'+Qt(e)+'"]'}function di(e){return"script[async]"+e}function Yh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Qt(n.href)+'"]');if(a)return t.instance=a,yt(a),a;var r=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),yt(a),At(a,"style",r),zs(a,n.precedence,e),t.instance=a;case"stylesheet":r=mr(n.href);var s=e.querySelector(ui(r));if(s)return t.state.loading|=4,t.instance=s,yt(s),s;a=Gh(n),(r=an.get(r))&&Sc(a,r),s=(e.ownerDocument||e).createElement("link"),yt(s);var g=s;return g._p=new Promise(function(N,U){g.onload=N,g.onerror=U}),At(s,"link",a),t.state.loading|=4,zs(s,n.precedence,e),t.instance=s;case"script":return s=gr(n.src),(r=e.querySelector(di(s)))?(t.instance=r,yt(r),r):(a=n,(r=an.get(s))&&(a=R({},n),Ec(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),yt(r),At(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,zs(a,n.precedence,e));return t.instance}function zs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,s=r,g=0;g<a.length;g++){var N=a[g];if(N.dataset.precedence===t)s=N;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Us=null;function qh(e,t,n){if(Us===null){var a=new Map,r=Us=new Map;r.set(n,a)}else r=Us,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[_r]||s[xt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var g=s.getAttribute(t)||"";g=e+g;var N=a.get(g);N?N.push(s):a.set(g,[s])}}return a}function Xh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function I0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function D0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=mr(a.href),s=t.querySelector(ui(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Fs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,yt(s);return}s=t.ownerDocument||t,a=Gh(a),(r=an.get(r))&&Sc(a,r),s=s.createElement("link"),yt(s);var g=s;g._p=new Promise(function(N,U){g.onload=N,g.onerror=U}),At(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Fs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var wc=0;function j0(e,t){return e.stylesheets&&e.count===0&&Ps(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ps(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&wc===0&&(wc=62500*f0());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ps(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>wc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Fs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ps(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bs=null;function Ps(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bs=new Map,t.forEach(O0,e),Bs=null,Fs.call(e))}function O0(e,t){if(!(t.state.loading&4)){var n=Bs.get(e);if(n)var a=n.get(null);else{n=new Map,Bs.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var g=r[s];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),a=g)}a&&n.set(null,a)}r=t.instance,g=r.getAttribute("data-precedence"),s=n.get(g)||a,s===a&&n.set(null,r),n.set(g,r),this.count++,a=Fs.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:L,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function k0(e,t,n,a,r,s,g,N,U){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.hiddenUpdates=yl(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function Zh(e,t,n,a,r,s,g,N,U,K,ce,fe){return e=new k0(e,t,n,g,U,K,ce,fe,N),t=1,s===!0&&(t|=24),s=Ft(3,null,null,t),e.current=s,s.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},io(s),e}function Wh(e){return e?(e=qa,e):qa}function Kh(e,t,n,a,r,s){r=Wh(r),a.context===null?a.context=r:a.pendingContext=r,a=Hn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=Gn(e,a,t),n!==null&&(Mt(n,e,t),Hr(n,e,t))}function Jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ac(e,t){Jh(e,t),(e=e.alternate)&&Jh(e,t)}function ep(e){if(e.tag===13||e.tag===31){var t=ya(e,67108864);t!==null&&Mt(t,e,67108864),Ac(e,67108864)}}function tp(e){if(e.tag===13||e.tag===31){var t=Ht();t=vl(t);var n=ya(e,t);n!==null&&Mt(n,e,t),Ac(e,t)}}var Vs=!0;function L0(e,t,n,a){var r=V.T;V.T=null;var s=$.p;try{$.p=2,Rc(e,t,n,a)}finally{$.p=s,V.T=r}}function M0(e,t,n,a){var r=V.T;V.T=null;var s=$.p;try{$.p=8,Rc(e,t,n,a)}finally{$.p=s,V.T=r}}function Rc(e,t,n,a){if(Vs){var r=Tc(a);if(r===null)dc(e,t,a,$s,n),ap(e,a);else if(U0(r,e,t,n,a))a.stopPropagation();else if(ap(e,a),t&4&&-1<z0.indexOf(e)){for(;r!==null;){var s=Ma(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var g=qt(s.pendingLanes);if(g!==0){var N=s;for(N.pendingLanes|=2,N.entangledLanes|=2;g;){var U=1<<31-it(g);N.entanglements[1]|=U,g&=~U}mn(s),(qe&6)===0&&(Rs=Se()+500,si(0))}}break;case 31:case 13:N=ya(s,2),N!==null&&Mt(N,s,2),_s(),Ac(s,2)}if(s=Tc(a),s===null&&dc(e,t,a,$s,n),s===r)break;r=s}r!==null&&a.stopPropagation()}else dc(e,t,a,null,n)}}function Tc(e){return e=_l(e),_c(e)}var $s=null;function _c(e){if($s=null,e=La(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $s=e,null}function np(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case Ne:return 2;case Xe:return 8;case Ue:case Ct:return 32;case Mn:return 268435456;default:return 32}default:return 32}}var Nc=!1,na=null,aa=null,ra=null,hi=new Map,pi=new Map,ia=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ap(e,t){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function mi(e,t,n,a,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ma(t),t!==null&&ep(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function U0(e,t,n,a,r){switch(t){case"focusin":return na=mi(na,e,t,n,a,r),!0;case"dragenter":return aa=mi(aa,e,t,n,a,r),!0;case"mouseover":return ra=mi(ra,e,t,n,a,r),!0;case"pointerover":var s=r.pointerId;return hi.set(s,mi(hi.get(s)||null,e,t,n,a,r)),!0;case"gotpointercapture":return s=r.pointerId,pi.set(s,mi(pi.get(s)||null,e,t,n,a,r)),!0}return!1}function rp(e){var t=La(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,yu(e.priority,function(){tp(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,yu(e.priority,function(){tp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Tl=a,n.target.dispatchEvent(a),Tl=null}else return t=Ma(n),t!==null&&ep(t),e.blockedOn=n,!1;t.shift()}return!0}function ip(e,t,n){Hs(e)&&n.delete(t)}function F0(){Nc=!1,na!==null&&Hs(na)&&(na=null),aa!==null&&Hs(aa)&&(aa=null),ra!==null&&Hs(ra)&&(ra=null),hi.forEach(ip),pi.forEach(ip)}function Gs(e,t){e.blockedOn===t&&(e.blockedOn=null,Nc||(Nc=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,F0)))}var Ys=null;function sp(e){Ys!==e&&(Ys=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ys===e&&(Ys=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(_c(a||n)===null)continue;break}var s=Ma(n);s!==null&&(e.splice(t,3),t-=3,To(s,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function yr(e){function t(U){return Gs(U,e)}na!==null&&Gs(na,e),aa!==null&&Gs(aa,e),ra!==null&&Gs(ra,e),hi.forEach(t),pi.forEach(t);for(var n=0;n<ia.length;n++){var a=ia[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ia.length&&(n=ia[0],n.blockedOn===null);)rp(n),n.blockedOn===null&&ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],s=n[a+1],g=r[It]||null;if(typeof s=="function")g||sp(n);else if(g){var N=null;if(s&&s.hasAttribute("formAction")){if(r=s,g=s[It]||null)N=g.formAction;else if(_c(r)!==null)continue}else N=g.action;typeof N=="function"?n[a+1]=N:(n.splice(a,3),a-=3),sp(n)}}}function lp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(g){return r=g})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Cc(e){this._internalRoot=e}qs.prototype.render=Cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Ht();Kh(n,a,e,t,null,null)},qs.prototype.unmount=Cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kh(e.current,2,null,e,null,null),_s(),t[ka]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ia.length&&t!==0&&t<ia[n].priority;n++);ia.splice(n,0,e),n===0&&rp(e)}};var op=o.version;if(op!=="19.2.1")throw Error(u(527,op,"19.2.1"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var B0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{et=Xs.inject(B0),gt=Xs}catch{}}return yi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",r=mf,s=gf,g=yf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Zh(e,1,!1,null,null,n,a,null,r,s,g,lp),e[ka]=t.current,uc(e),new Cc(t)},yi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,r="",s=mf,g=gf,N=yf,U=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(N=n.onRecoverableError),n.formState!==void 0&&(U=n.formState)),t=Zh(e,1,!0,t,n??null,a,r,U,s,g,N,lp),t.context=Wh(null),n=t.current,a=Ht(),a=vl(a),r=Hn(a),r.callback=null,Gn(n,r,a),n=a,t.current.lanes=n,Tr(t,n),mn(t),e[ka]=t.current,uc(e),new qs(t)},yi.version="19.2.1",yi}var vp;function W0(){if(vp)return jc.exports;vp=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),jc.exports=Z0(),jc.exports}var K0=W0();const J0=eu(K0);var ye=(c=>(c.SETUP="ICISsetup",c.BUILDER="ICISbuilder",c.REVIEWER="ICISreviewer",c.SUPERVISOR="ICISsupervisor",c.REVISER="ICISreviser",c.FINALIZE="ICISfinalize",c))(ye||{}),je=(c=>(c.PENDING="pending",c.ACTIVE="active",c.COMPLETED="completed",c.ERROR="error",c.SKIPPED="skipped",c))(je||{}),vr=(c=>(c.SIMULATION="Simulation & Computational Modeling",c.ANALYTICAL="Analytical & Theoretical Modeling (with or without data)",c.SECONDARY_DATA="Secondary data analysis",c.EXPERIMENTAL="Laboratory & field experiments",c.SURVEY="Survey research",c))(vr||{}),Fe=(c=>(c.STEP1_INTERVIEW_ANALYSIS="Step 1: Research Interview Analysis",c.STEP1_5_DATA_ASSESSMENT="Step 1.5: Data File Assessment",c.STEP2_RESEARCH_PLANNING="Step 2: Research Type Planning",c.STEP2_FINAL_METADATA="Step 2 Final: Generate Metadata Files",c.STEP3_MATH_FORMULATION="Step 3: Mathematical Formulation",c.STEP4_IMPLEMENTATION="Step 4: Experimental Implementation",c.STEP5_EXECUTION="Step 5: Experiment Execution",c.STEP6_VISUALIZATION="Step 6: Results Visualization",c.STEP7_ANALYSIS="Step 7: Results Analysis",c.STEP8_PAPER_WRITING="Step 8: Paper Writing",c.STEP9_FINAL_SUBMISSION="Step 9: Final Submission Preparation",c))(Fe||{});function ey(){return new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15)}const bp={currentStage:"ICISsetup",currentBuilderStep:void 0,stages:{ICISsetup:"active",ICISbuilder:"pending",ICISreviewer:"pending",ICISsupervisor:"pending",ICISreviser:"pending",ICISfinalize:"pending"},projectId:void 0,projectName:void 0,participantId:"unknown",sessionTimestamp:ey(),interviewData:void 0,researchType:void 0,researchMetadata:void 0,hasDataFile:!1,isPartialPaper:!1,paperVersions:[],currentPaperVersion:0,paperContent:"",rounds:[],currentRound:1,lastFeedback:"",files:{interview:!1,template:!1,examples:!1,dataFile:!1,paperPdf:!1},artifacts:[],logs:[]};var ty=(c=>(c.VERIFIED="VERIFIED",c.PARTIAL="PARTIAL",c.UNVERIFIED="UNVERIFIED",c.REJECTED="REJECTED",c.DISCOVERED="DISCOVERED",c))(ty||{});const Fp="/icis",ny={[ye.SETUP]:{label:"Setup",description:"Verify files and initialize project",icon:"FileText"},[ye.BUILDER]:{label:"Builder",description:"Build paper from research interview",icon:"Hammer"},[ye.REVIEWER]:{label:"Reviewer",description:"AI review and scoring",icon:"Search"},[ye.SUPERVISOR]:{label:"Supervisor",description:"Human oversight and decision",icon:"UserCheck"},[ye.REVISER]:{label:"Reviser",description:"Revise based on feedback",icon:"Edit3"},[ye.FINALIZE]:{label:"Finalize",description:"Final submission preparation",icon:"Send"}},Bp={[Fe.STEP1_INTERVIEW_ANALYSIS]:{label:"Interview Analysis",description:"Extract research vision from interview transcript",duration:"~2 min"},[Fe.STEP1_5_DATA_ASSESSMENT]:{label:"Data Assessment",description:"Check for available data files",duration:"~30 sec"},[Fe.STEP2_RESEARCH_PLANNING]:{label:"Research Planning",description:"Determine research type and methodology",duration:"~1 min"},[Fe.STEP2_FINAL_METADATA]:{label:"Generate Metadata",description:"Create research metadata files",duration:"~1 min"},[Fe.STEP3_MATH_FORMULATION]:{label:"Math Formulation",description:"Develop mathematical framework",duration:"~2 min"},[Fe.STEP4_IMPLEMENTATION]:{label:"Implementation",description:"Generate experimental code",duration:"~3 min"},[Fe.STEP5_EXECUTION]:{label:"Execution",description:"Run experiments and collect results",duration:"~2 min"},[Fe.STEP6_VISUALIZATION]:{label:"Visualization",description:"Create figures and charts",duration:"~2 min"},[Fe.STEP7_ANALYSIS]:{label:"Analysis",description:"Analyze and interpret results",duration:"~2 min"},[Fe.STEP8_PAPER_WRITING]:{label:"Paper Writing",description:"Generate full LaTeX paper",duration:"~5 min"},[Fe.STEP9_FINAL_SUBMISSION]:{label:"Final Prep",description:"Prepare submission package",duration:"~1 min"}};vr.SIMULATION+"",vr.ANALYTICAL+"",vr.SECONDARY_DATA+"",vr.EXPERIMENTAL+"",vr.SURVEY+"";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ry=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,l,u)=>u?u.toUpperCase():l.toLowerCase()),xp=c=>{const o=ry(c);return o.charAt(0).toUpperCase()+o.slice(1)},Pp=(...c)=>c.filter((o,l,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===l).join(" ").trim(),iy=c=>{for(const o in c)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=he.forwardRef(({color:c="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:d="",children:f,iconNode:y,...p},x)=>he.createElement("svg",{ref:x,...sy,width:o,height:o,stroke:c,strokeWidth:u?Number(l)*24/Number(o):l,className:Pp("lucide",d),...!f&&!iy(p)&&{"aria-hidden":"true"},...p},[...y.map(([m,A])=>he.createElement(m,A)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(c,o)=>{const l=he.forwardRef(({className:u,...d},f)=>he.createElement(ly,{ref:f,iconNode:o,className:Pp(`lucide-${ay(xp(c))}`,`lucide-${c}`,u),...d}));return l.displayName=xp(c),l};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],cy=_e("activity",oy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],dy=_e("archive",uy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hy=_e("arrow-left",fy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],my=_e("atom",py);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],yy=_e("book-marked",gy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],by=_e("book-open",vy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Sy=_e("briefcase",xy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Vc=_e("chart-column",Ey);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],zt=_e("check",wy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],il=_e("chevron-down",Ay);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Vp=_e("chevron-right",Ry);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],kn=_e("circle-alert",Ty);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Zs=_e("circle-check-big",_y);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$c=_e("circle-check",Ny);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sp=_e("circle-play",Cy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],$p=_e("circle-stop",Iy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ep=_e("circle",Dy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Oy=_e("clock",jy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ly=_e("copy",ky);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],zy=_e("cpu",My);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],sl=_e("download",Uy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Hp=_e("ellipsis-vertical",Fy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Si=_e("external-link",By);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Hc=_e("eye",Py);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],$y=_e("fast-forward",Vy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ni=_e("file-text",Hy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Yy=_e("flask-conical",Gy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Xy=_e("folder-plus",qy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Zy=_e("funnel",Qy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ky=_e("globe",Wy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],ev=_e("hammer",Jy);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],nv=_e("heart",tv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],rv=_e("leaf",av);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],sv=_e("link",iv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],wp=_e("loader-circle",lv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],cv=_e("loader",ov);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],dv=_e("lock",uv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],hv=_e("mic",fv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M5 12h14",key:"1ays0h"}]],mv=_e("minus",pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],yv=_e("newspaper",gv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Gp=_e("pen-line",vv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Gc=_e("play",bv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],cn=_e("refresh-cw",xv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],tl=_e("rotate-ccw",Sv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],wv=_e("save",Ev);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ll=_e("search",Av);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],nu=_e("send",Rv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Ap=_e("skip-forward",Tv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Rp=_e("star",_v);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Cv=_e("target",Nv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Dv=_e("trash-2",Iv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Ov=_e("trending-down",jv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Yp=_e("trending-up",kv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Yc=_e("triangle-alert",Lv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],au=_e("upload",Mv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Uv=_e("user-check",zv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Bv=_e("user",Fv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],cl=_e("users",Pv);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qp=_e("x",Vv),$v=({currentStage:c,currentBuilderStep:o,stagesState:l,isPartialPaper:u=!1,currentRound:d=1,isProcessing:f=!1,onStageClick:y,onStageAction:p,onNewCase:x,onNewInterview:m,onPaperToInterview:A,onResearchAdmin:R,paperMode:_="draft",onPaperModeChange:v})=>{const[T,h]=he.useState(null),E=he.useRef(null);he.useEffect(()=>{const z=re=>{E.current&&!E.current.contains(re.target)&&h(null)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]);const w=(z,re)=>{const Z=[];switch(re){case je.ACTIVE:Z.push({action:"abort",label:"Abort",icon:i.jsx($p,{size:14})});break;case je.COMPLETED:Z.push({action:"restart",label:"Restart",icon:i.jsx(tl,{size:14})});break;case je.ERROR:Z.push({action:"restart",label:"Retry",icon:i.jsx(tl,{size:14})});break;case je.PENDING:const j=[ye.SETUP,ye.BUILDER,ye.REVIEWER,ye.SUPERVISOR,ye.REVISER,ye.FINALIZE],Q=j.indexOf(z),S=Q>0?j[Q-1]:null,Y=!S||l[S]===je.COMPLETED;Z.push({action:"start",label:"Start",icon:i.jsx(Gc,{size:14}),disabled:!Y||f}),z!==ye.SETUP&&z!==ye.FINALIZE&&Z.push({action:"skip",label:"Skip",icon:i.jsx($y,{size:14}),disabled:f});break;case je.SKIPPED:Z.push({action:"restart",label:"Unskip & Run",icon:i.jsx(tl,{size:14})});break}return Z},D=[ye.SETUP,ye.BUILDER,ye.REVIEWER,ye.SUPERVISOR,ye.REVISER,ye.FINALIZE],L={[ye.SETUP]:i.jsx(Ni,{size:16}),[ye.BUILDER]:i.jsx(ev,{size:16}),[ye.REVIEWER]:i.jsx(ll,{size:16}),[ye.SUPERVISOR]:i.jsx(Uv,{size:16}),[ye.REVISER]:i.jsx(Gp,{size:16}),[ye.FINALIZE]:i.jsx(nu,{size:16})},P=z=>{switch(z){case je.COMPLETED:return i.jsx($c,{size:16,className:"text-emerald-500"});case je.ACTIVE:return i.jsx(Sp,{size:16,className:"text-red-500 animate-pulse"});case je.ERROR:return i.jsx(kn,{size:16,className:"text-red-500"});case je.SKIPPED:return i.jsx(Ap,{size:16,className:"text-slate-400"});default:return i.jsx(Ep,{size:16,className:"text-slate-500"})}},I=[Fe.STEP1_INTERVIEW_ANALYSIS,Fe.STEP1_5_DATA_ASSESSMENT,Fe.STEP2_RESEARCH_PLANNING,Fe.STEP2_FINAL_METADATA,Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS,Fe.STEP8_PAPER_WRITING,Fe.STEP9_FINAL_SUBMISSION],B=z=>u?[Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS].includes(z):!1,F=z=>{if(B(z))return"skipped";const re=I.indexOf(z),Z=o?I.indexOf(o):-1;return z===o?"active":Z>re?"completed":"pending"},G=c===ye.BUILDER||l[ye.BUILDER]===je.ACTIVE;return i.jsxs("div",{className:"h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl",children:[i.jsxs("div",{className:"p-6 border-b border-slate-800 bg-slate-950",children:[i.jsxs("h1",{className:"font-bold text-xl text-white tracking-tight flex items-center gap-2",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse"}),"ConferenceCopilot"]}),i.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"AI-Powered Research Paper Authoring"})]}),d>1&&i.jsx("div",{className:"px-4 py-2 bg-slate-800/50 border-b border-slate-800",children:i.jsxs("div",{className:"flex items-center justify-between text-xs",children:[i.jsx("span",{className:"text-slate-400",children:"Revision Cycle"}),i.jsxs("span",{className:"text-emerald-400 font-medium",children:["Round ",d]})]})}),u&&i.jsx("div",{className:"px-4 py-2 bg-amber-900/30 border-b border-amber-800/50",children:i.jsxs("div",{className:"flex items-center gap-2 text-xs text-amber-300",children:[i.jsx(kn,{size:12}),i.jsx("span",{children:"Partial Paper Mode (no data)"})]})}),i.jsxs("div",{className:"px-4 pt-4 pb-2 space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between bg-slate-700 rounded-lg p-1",children:[i.jsx("button",{onClick:()=>v==null?void 0:v("draft"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${_==="draft"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Draft"}),i.jsx("button",{onClick:()=>v==null?void 0:v("research"),className:`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${_==="research"?"bg-slate-500 text-white":"text-slate-300 hover:text-white"}`,children:"Research"})]}),x&&i.jsx("button",{onClick:()=>{window.confirm("Start a new project? This will clear all current progress and generated files.")&&x()},className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors",children:"New Project"}),R&&i.jsxs("button",{onClick:R,className:"w-full px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2",children:[i.jsx(cl,{size:16}),"Research Admin"]})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2",children:D.map(z=>{const re=l[z],Z=re===je.ACTIVE,j=re===je.COMPLETED,Q=re===je.SKIPPED,S=c===z,Y=ny[z],V=w(z,re);return i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${Z?"border-red-500 bg-slate-800 shadow-lg shadow-red-900/20":j?"border-emerald-500/50 bg-slate-900/50":Q?"border-slate-700 bg-slate-900/30 opacity-60":S?"border-indigo-500 bg-slate-800/50":"border-slate-800 bg-slate-900/30 hover:bg-slate-800/30"}
                `,onClick:()=>y(z),children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:`${Z?"text-red-400":j?"text-emerald-400":"text-slate-400"}`,children:L[z]}),i.jsx("span",{className:`font-medium text-sm ${Z||S?"text-white":""}`,children:Y.label})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[z===ye.BUILDER&&(G?i.jsx(il,{size:14}):i.jsx(Vp,{size:14})),P(re),p&&V.length>0&&i.jsx("button",{className:"p-1 rounded hover:bg-slate-700 transition-colors",onClick:$=>{$.stopPropagation(),h(T===z?null:z)},children:i.jsx(Hp,{size:14,className:"text-slate-400"})})]})]}),i.jsx("p",{className:"text-xs text-slate-500 leading-relaxed pl-6",children:Y.description}),Y.promptFile&&i.jsx("div",{className:"mt-2 pl-6",children:i.jsx("span",{className:"text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded",children:Y.promptFile})})]}),T===z&&p&&i.jsx("div",{ref:E,className:"absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]",children:V.map(({action:$,label:ue,icon:te,disabled:ve})=>i.jsxs("button",{className:`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${ve?"text-slate-600 cursor-not-allowed":$==="abort"?"text-red-400 hover:bg-red-900/30":"text-slate-300 hover:bg-slate-700"}
                      `,onClick:C=>{C.stopPropagation(),ve||(p(z,$),h(null))},disabled:ve,children:[te,ue]},$))}),z===ye.BUILDER&&G&&i.jsx("div",{className:"ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3",children:I.map($=>{const ue=Bp[$],te=F($);return i.jsxs("div",{className:`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${te==="active"?"bg-red-900/30 text-red-300":te==="completed"?"text-emerald-400":te==="skipped"?"text-slate-600 line-through":"text-slate-500"}
                        `,children:[te==="active"&&i.jsx(Sp,{size:12,className:"animate-pulse"}),te==="completed"&&i.jsx($c,{size:12}),te==="skipped"&&i.jsx(Ap,{size:12}),te==="pending"&&i.jsx(Ep,{size:12}),i.jsxs("span",{children:[ue.label,": ",ue.description]})]},$)})})]},z)})}),i.jsx("div",{className:"p-4 bg-slate-950 border-t border-slate-800",children:i.jsxs("div",{className:"text-xs text-slate-500 space-y-1",children:[i.jsxs("p",{className:"flex justify-between",children:[i.jsx("span",{children:"Directory:"}),i.jsx("span",{className:"text-slate-400",children:Fp})]}),i.jsxs("p",{className:"flex justify-between",children:[i.jsx("span",{children:"Paper Version:"}),i.jsxs("span",{className:"text-slate-400",children:["v",d]})]})]})})]})},Ai="icis_files_";class nl extends Error{constructor(o,l,u){super(l),this.type=o,this.userMessage=l,this.technicalDetails=u,this.name="StorageError"}}function Xp(){try{const c="__storage_test__";return localStorage.setItem(c,c),localStorage.removeItem(c),!0}catch{return!1}}function Sr(c,o){var u;if(!Xp())throw new nl("STORAGE_UNAVAILABLE","Local storage is not available. Your browser may be in private mode or storage is disabled.","localStorage unavailable");const l=Ai+c.replace(/\\/g,"/");try{localStorage.setItem(l,o),console.log(`File written: ${c}`)}catch(d){const f=d;throw f.name==="QuotaExceededError"||(u=f.message)!=null&&u.includes("quota")?new nl("QUOTA_EXCEEDED","Storage quota exceeded. Please clear some space by deleting old data.",f.message):new nl("WRITE_ERROR",`Failed to save file: ${c}`,f.message)}}function ul(c){if(!Xp())return console.warn("localStorage unavailable, returning null for read"),null;const o=Ai+c.replace(/\\/g,"/");try{return localStorage.getItem(o)}catch(l){const u=l;throw console.error(`Error reading file ${c}:`,u),new nl("READ_ERROR",`Failed to read file: ${c}`,u.message)}}function Hv(c){const o=[],l=new RegExp(c.replace(/\*/g,".*").replace(/\//g,"\\/"));for(let u=0;u<localStorage.length;u++){const d=localStorage.key(u);if(d&&d.startsWith(Ai)){const f=d.substring(Ai.length);l.test(f)&&o.push(f)}}return o.sort()}function Qp(c){const o=`icis/Data/oversight_v${c.version}.txt`,l=Gv(c);return Sr(o,l),Sr(o+".json",JSON.stringify(c,null,2)),o}function Gv(c){const o=[];o.push(`ID=${c.paperId}`),o.push(`Version: ${c.version}`),o.push(`Timestamp: ${c.timestamp}`),o.push(""),o.push("================================================================================"),o.push("                     OVERSIGHT DASHBOARD"),o.push("================================================================================"),o.push(""),o.push("TABLE 1 - Review Scores Progression:"),o.push("------------------------------------------------------------------------"),o.push("| Criteria              | Score | Comment                              |"),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| Novelty               | ${c.reviewScores.novelty}     | ${c.reviewComments.novelty.substring(0,36).padEnd(36)} |`),o.push(`| Significance          | ${c.reviewScores.significance}     | ${c.reviewComments.significance.substring(0,36).padEnd(36)} |`),o.push(`| Methodological Rigor  | ${c.reviewScores.methodologicalRigor}     | ${c.reviewComments.methodologicalRigor.substring(0,36).padEnd(36)} |`),o.push(`| Clarity               | ${c.reviewScores.clarity}     | ${c.reviewComments.clarity.substring(0,36).padEnd(36)} |`),o.push(`| Relevance             | ${c.reviewScores.relevance}     | ${c.reviewComments.relevance.substring(0,36).padEnd(36)} |`),o.push("|-----------------------|-------|--------------------------------------|"),o.push(`| AVERAGE               | ${c.averageScore.toFixed(1)}   |                                      |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 2 - Error Counts:"),o.push("------------------------------------------------------------------------"),o.push("| Category        | Count | Details                                  |"),o.push("|-----------------|-------|------------------------------------------|");const l=c.errorDetails.majorErrors.length>0?c.errorDetails.majorErrors[0].substring(0,40):"None",u=c.errorDetails.minorErrors.length>0?c.errorDetails.minorErrors[0].substring(0,40):"None";if(o.push(`| Major Errors    | ${String(c.errorCounts.majorErrors).padStart(5)} | ${l.padEnd(40)} |`),o.push(`| Minor Errors    | ${String(c.errorCounts.minorErrors).padStart(5)} | ${u.padEnd(40)} |`),o.push("|-----------------|-------|------------------------------------------|"),o.push(`| TOTAL           | ${String(c.errorCounts.majorErrors+c.errorCounts.minorErrors).padStart(5)} |                                          |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("TABLE 3 - Trustworthiness Assessment (1-7 scale):"),o.push("------------------------------------------------------------------------"),o.push("| Dimension       | Score | Rationale                               |"),o.push("|-----------------|-------|-----------------------------------------|"),o.push(`| Reliability     | ${c.trustworthiness.reliability}     | ${c.trustworthiness.reliabilityRationale.substring(0,39).padEnd(39)} |`),o.push(`| Benevolence     | ${c.trustworthiness.benevolence}     | ${c.trustworthiness.benevolenceRationale.substring(0,39).padEnd(39)} |`),o.push(`| Goal Alignment  | ${c.trustworthiness.goalAlignment}     | ${c.trustworthiness.goalAlignmentRationale.substring(0,39).padEnd(39)} |`),o.push("------------------------------------------------------------------------"),o.push(""),o.push("CRITICAL ALERTS:"),o.push("------------------------------------------------------------------------"),c.criticalAlerts.length===0)o.push("None - paper is progressing well");else for(const d of c.criticalAlerts)o.push(`CRITICAL ALERT ${d.number}: ${d.title} (BLOCKING ISSUE)`),o.push(`  Status: ${d.status}`),o.push(`  Impact: ${d.impact}`),o.push(`  Details: ${d.details}`),o.push(`  Action Required: ${d.actionRequired}`),o.push(`  Consequence if Unfixed: ${d.consequence}`),o.push("");return o.push("------------------------------------------------------------------------"),o.push(""),o.push("================================================================================"),o.join(`
`)}function ru(c){const o=`icis/Data/feedback_v${c.version}.txt`,l=[];if(l.push(`ID=${c.paperId}`),l.push(`Version: ${c.version}`),l.push(`Timestamp: ${c.timestamp}`),l.push(""),l.push("================================================================================"),l.push("                     CONSTRUCTIVE FEEDBACK"),l.push("================================================================================"),l.push(""),l.push("## Research Question and Contribution"),l.push(c.researchQuestion),l.push(""),l.push("## Method"),l.push(c.method),l.push(""),l.push("## Potential Impact"),l.push(c.potentialImpact),l.push(""),l.push("## Writing Quality"),l.push(c.writing),l.push(""),l.push("## Major Concerns"),c.majorConcerns.forEach((d,f)=>{l.push(`${f+1}. ${d}`)}),l.push(""),l.push("## Minor Corrections"),c.minorCorrections.forEach((d,f)=>{l.push(`${f+1}. ${d}`)}),l.push(""),l.push("## Overall Assessment"),l.push(c.overallAssessment),l.push(""),c.supervisorDirectives&&c.supervisorDirectives.length>0){l.push("================================================================================"),l.push("                     SUPERVISOR DIRECTIVES"),l.push("================================================================================");for(const d of c.supervisorDirectives)l.push(""),l.push(`Cycle ${d.cycle} - ${d.timestamp}`),l.push("------------------------------------------------------------------------"),l.push(d.directives)}l.push(""),l.push("================================================================================");const u=l.join(`
`);return Sr(o,u),Sr(o+".json",JSON.stringify(c,null,2)),o}function al(c){const o=`icis/Data/oversight_v${c}.txt.json`,l=ul(o);if(l)try{return JSON.parse(l)}catch(u){console.error("Failed to parse oversight JSON:",u)}return null}function wi(c){const o=`icis/Data/feedback_v${c}.txt.json`,l=ul(o);if(l)try{return JSON.parse(l)}catch(u){console.error("Failed to parse feedback JSON:",u)}return null}function iu(){const c=Hv("icis/Data/oversight_v.*\\.txt\\.json"),o=[];for(const l of c){const u=ul(l);if(u)try{o.push(JSON.parse(u))}catch(d){console.error("Failed to parse oversight file:",l,d)}}return o.sort((l,u)=>l.version-u.version)}function Tp(c,o,l){const u=wi(c);u&&(u.supervisorDirectives||(u.supervisorDirectives=[]),u.supervisorDirectives.push({cycle:o,directives:l,timestamp:new Date().toISOString()}),ru(u))}function _p(c,o,l){const u="icis/Data/supervisor_decision.txt",d=[];return d.push(`Decision: ${c}`),d.push(`Cycle: ${o}`),d.push(`Timestamp: ${new Date().toISOString()}`),Sr(u,d.join(`
`)),u}function Yv(){const c=[];for(let o=0;o<localStorage.length;o++){const l=localStorage.key(o);l&&l.startsWith(Ai)&&c.push(l)}c.forEach(o=>localStorage.removeItem(o)),console.log(`Cleared ${c.length} files`)}function Np(c,o,l="icis_paper"){const u=`icis/Paper/${l}_v${c}.tex`;return Sr(u,o),console.log(`Paper saved: ${u}`),u}function ca(c,o="icis_paper"){const l=`icis/Paper/${o}_v${c}.tex`;return ul(l)}function qv(c,o="icis_paper"){const l=ca(c,o);if(!l){console.error(`Paper version ${c} not found`);return}const u=`${o}_v${c}.tex`,d=new Blob([l],{type:"text/plain;charset=utf-8"}),f=URL.createObjectURL(d),y=document.createElement("a");y.href=f,y.download=u,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(f),console.log(`Downloaded: ${u}`)}const Ci=({logs:c,height:o="h-64"})=>{const l=he.useRef(null);return he.useEffect(()=>{var u;(u=l.current)==null||u.scrollIntoView({behavior:"smooth"})},[c]),i.jsxs("div",{className:`bg-slate-950 rounded-lg p-4 ${o} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`,children:[c.length===0?i.jsx("div",{className:"text-slate-500 italic",children:"No logs yet..."}):c.map((u,d)=>i.jsx("div",{className:"mb-1 border-b border-slate-900/50 pb-1",children:u},d)),i.jsx("div",{ref:l})]})},Xv=({currentStep:c})=>{if(!c)return null;const o=Bp[c];return i.jsx("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4",children:i.jsxs("div",{className:"flex items-center gap-2 text-indigo-700",children:[i.jsx(cn,{size:16,className:"animate-spin"}),i.jsx("span",{className:"font-medium",children:o.label}),i.jsxs("span",{className:"text-indigo-500",children:["- ",o.description]})]})})},su=({stageName:c,isProcessing:o,canAbort:l,canRestart:u,onAbort:d,onRestart:f})=>{const[y,p]=he.useState(null),x=()=>{o&&p("abort")},m=()=>{p("restart")},A=()=>{y==="abort"?d():y==="restart"&&f(),p(null)};return i.jsxs("div",{className:"relative",children:[i.jsxs("div",{className:"flex gap-2",children:[l&&o&&i.jsxs("button",{onClick:x,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors",children:[i.jsx($p,{size:14}),"Abort"]}),u&&!o&&i.jsxs("button",{onClick:m,className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors",children:[i.jsx(tl,{size:14}),"Restart"]})]}),y&&i.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:i.jsxs("div",{className:"bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"p-2 bg-amber-100 rounded-full",children:i.jsx(Yc,{className:"text-amber-600",size:24})}),i.jsx("h3",{className:"text-lg font-bold text-slate-800",children:y==="abort"?"Abort Stage?":"Restart Stage?"})]}),i.jsx("p",{className:"text-slate-600 mb-6",children:y==="abort"?i.jsxs(i.Fragment,{children:["Are you sure you want to abort the ",i.jsx("strong",{children:c})," stage? Any progress will be lost and you may need to restart the stage."]}):i.jsxs(i.Fragment,{children:["Are you sure you want to restart the ",i.jsx("strong",{children:c})," stage? This will reset the stage and you'll need to run it again."]})}),i.jsxs("div",{className:"flex gap-3 justify-end",children:[i.jsx("button",{onClick:()=>p(null),className:"px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",children:"Cancel"}),i.jsx("button",{onClick:A,className:`px-4 py-2 text-white rounded-lg transition-colors ${y==="abort"?"bg-red-600 hover:bg-red-700":"bg-amber-600 hover:bg-amber-700"}`,children:y==="abort"?"Yes, Abort":"Yes, Restart"})]})]})})]})},Cp=({label:c,accept:o=".txt",multiple:l=!1,required:u=!1,file:d,onFileSelect:f})=>{const y=he.useRef(null),p=()=>{var A;(A=y.current)==null||A.click()},x=A=>{var _;const R=((_=A.target.files)==null?void 0:_[0])||null;f(R)},m=A=>{A.stopPropagation(),f(null),y.current&&(y.current.value="")};return i.jsxs("div",{onClick:p,className:`flex items-center justify-between p-3 rounded border cursor-pointer transition-colors ${d?"bg-emerald-50 border-emerald-200 hover:bg-emerald-100":"bg-slate-50 border-slate-200 hover:bg-slate-100"}`,children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(au,{size:16,className:d?"text-emerald-600":"text-slate-400"}),i.jsxs("span",{className:"text-sm",children:[d?d.name:c,u&&!d&&i.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})]}),d?i.jsx("button",{onClick:m,className:"p-1 hover:bg-emerald-200 rounded",children:i.jsx(qp,{size:16,className:"text-emerald-600"})}):i.jsx("span",{className:"text-xs text-slate-400",children:"Click to select"}),i.jsx("input",{ref:y,type:"file",accept:o,multiple:l,onChange:x,className:"hidden"})]})};let Mc={},lu="icis",Ws=null;const Zp="venue_preferences";function Ii(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"/asd":""}async function ou(){if(Ws)return Ws;try{const c=Ii(),o=await fetch(`${c}/venues/registry.json`);if(!o.ok)throw new Error(`Failed to load venues registry: ${o.status}`);return Ws=await o.json(),Ws}catch(c){throw console.error("[VenueService] Failed to load registry:",c),c}}async function Qv(){try{const c=Ii(),o=await fetch(`${c}/venues/categories.json`);if(!o.ok)throw new Error(`Failed to load categories: ${o.status}`);const l=await o.json();return Object.values(l.categories).map(d=>({id:d.id,name:d.name,description:d.description,icon:d.icon,color:d.color,subcategoryCount:d.subcategories.length,venueCount:0}))}catch(c){throw console.error("[VenueService] Failed to load categories:",c),c}}async function Zv(c){try{const o=Ii(),l=await fetch(`${o}/venues/categories.json`);if(!l.ok)throw new Error(`Failed to load categories: ${l.status}`);const d=(await l.json()).categories[c];if(!d)return[];const f=await ou(),y={};for(const[p,x]of Object.entries(f.venues))x.category===c&&(y[x.subcategory]=(y[x.subcategory]||0)+1);return d.subcategories.map(p=>({id:p.id,name:p.name,category:c,venueCount:y[p.id]||0}))}catch(o){throw console.error("[VenueService] Failed to load subcategories:",o),o}}async function Di(){const c=await ou();return Object.entries(c.venues).map(([o,l])=>({id:o,name:l.name,acronym:l.acronym,category:l.category,subcategory:l.subcategory,venueType:l.type,description:"",verified:l.verified,h5Index:l.h5Index}))}async function Wv(c){return(await Di()).filter(l=>l.category===c)}async function Kv(c,o){return(await Di()).filter(u=>u.category===c&&u.subcategory===o)}async function Jv(c){const o=await Di(),l=c.toLowerCase(),u=[];for(const d of o){let f=0,y="name";d.acronym.toLowerCase()===l?(f=100,y="acronym"):d.acronym.toLowerCase().startsWith(l)?(f=80,y="acronym"):d.acronym.toLowerCase().includes(l)?(f=60,y="acronym"):d.name.toLowerCase().includes(l)?(f=40,y="name"):d.subcategory.toLowerCase().includes(l)&&(f=20,y="category"),f>0&&u.push({venue:d,matchType:y,score:f})}return u.sort((d,f)=>f.score-d.score)}async function Wp(c){if(Mc[c])return Mc[c];const l=(await ou()).venues[c];if(!l)throw new Error(`Venue not found: ${c}`);try{const u=Ii(),d=l.type==="journal"?"journals":"conferences",f=await fetch(`${u}/venues/${d}/${c}/config.json`);if(!f.ok)throw new Error(`Failed to load venue config: ${f.status}`);const y=await f.json();return Mc[c]=y,y}catch(u){throw console.error(`[VenueService] Failed to load config for ${c}:`,u),u}}async function eb(){return Wp(lu)}function Kp(c){lu=c,rb(c),console.log(`[VenueService] Switched to venue: ${c}`)}function tb(){return lu}function Er(){const c={favorites:[],recent:[],showJournals:!0,showConferences:!0};if(typeof window>"u")return c;try{const o=localStorage.getItem(Zp);if(o)return{...c,...JSON.parse(o)}}catch(o){console.error("[VenueService] Failed to load preferences:",o)}return c}function cu(c){if(!(typeof window>"u"))try{const l={...Er(),...c};localStorage.setItem(Zp,JSON.stringify(l))}catch(o){console.error("[VenueService] Failed to save preferences:",o)}}function nb(c){const o=Er();o.favorites.includes(c)||(o.favorites.unshift(c),o.favorites.length>10&&(o.favorites=o.favorites.slice(0,10)),cu(o))}function ab(c){const o=Er();o.favorites=o.favorites.filter(l=>l!==c),cu(o)}function rb(c){const o=Er();o.recent=o.recent.filter(l=>l!==c),o.recent.unshift(c),o.recent.length>5&&(o.recent=o.recent.slice(0,5)),cu(o)}async function Ip(){const c=Er(),o=await Di();return c.favorites.map(l=>o.find(u=>u.id===l)).filter(l=>l!==void 0)}async function Dp(){const c=Er(),o=await Di();return c.recent.map(l=>o.find(u=>u.id===l)).filter(l=>l!==void 0)}async function ib(c){const o=await eb(),l=o.prompts[c];if(!l)throw new Error(`Prompt type '${c}' not configured for ${o.acronym}`);try{const u=Ii(),d=o.venueType==="journal"?"journals":"conferences";let f=await fetch(`${u}/venues/${d}/${o.id}/${l}`);if(f.ok||(f=await fetch(`${u}/venues/shared/${l}`)),!f.ok)throw new Error(`Prompt file not found: ${l}`);return await f.text()}catch(u){throw console.error(`[VenueService] Failed to load prompt ${c}:`,u),u}}const sb={"business-economics-management":Sy,"chemical-material-sciences":Yy,"engineering-computer-science":zy,"health-medical-sciences":nv,"humanities-literature-arts":by,"life-sciences-earth-sciences":rv,"physics-mathematics":my,"social-sciences":cl},Ei={"business-economics-management":{bg:"bg-blue-600",text:"text-blue-600",border:"border-blue-600",light:"bg-blue-50"},"chemical-material-sciences":{bg:"bg-orange-600",text:"text-orange-600",border:"border-orange-600",light:"bg-orange-50"},"engineering-computer-science":{bg:"bg-purple-600",text:"text-purple-600",border:"border-purple-600",light:"bg-purple-50"},"health-medical-sciences":{bg:"bg-red-600",text:"text-red-600",border:"border-red-600",light:"bg-red-50"},"humanities-literature-arts":{bg:"bg-amber-600",text:"text-amber-600",border:"border-amber-600",light:"bg-amber-50"},"life-sciences-earth-sciences":{bg:"bg-green-600",text:"text-green-600",border:"border-green-600",light:"bg-green-50"},"physics-mathematics":{bg:"bg-cyan-600",text:"text-cyan-600",border:"border-cyan-600",light:"bg-cyan-50"},"social-sciences":{bg:"bg-indigo-600",text:"text-indigo-600",border:"border-indigo-600",light:"bg-indigo-50"}},lb={"business-economics-management":"Business","chemical-material-sciences":"Chemistry","engineering-computer-science":"CS & Eng","health-medical-sciences":"Medical","humanities-literature-arts":"Humanities","life-sciences-earth-sciences":"Life Sci","physics-mathematics":"Physics","social-sciences":"Social"},ob={journal:yy,conference:yv},cb={journal:{bg:"bg-emerald-100",text:"text-emerald-700"},conference:{bg:"bg-violet-100",text:"text-violet-700"}},ub=({category:c,size:o=20,className:l=""})=>{const u=sb[c],d=Ei[c];return u?i.jsx(u,{size:o,className:`${d.text} ${l}`}):null},Ks=({type:c,className:o=""})=>{const l=cb[c],u=ob[c];return i.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${l.bg} ${l.text} ${o}`,children:[i.jsx(u,{size:12}),c==="journal"?"Journal":"Conference"]})},zc=({h5Index:c,className:o=""})=>{if(!c)return null;let l="bg-gray-100 text-gray-700";return c>=100?l="bg-yellow-100 text-yellow-800":c>=50&&(l="bg-blue-100 text-blue-700"),i.jsxs("span",{className:`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${l} ${o}`,children:["h5: ",c]})},db=({onVenueChange:c,disabled:o=!1,compact:l=!1})=>{var Oe,ze,bt;const[u,d]=he.useState([]),[f,y]=he.useState(null),[p,x]=he.useState([]),[m,A]=he.useState(null),[R,_]=he.useState([]),[v,T]=he.useState("icis"),[h,E]=he.useState(null),[w,D]=he.useState(""),[L,P]=he.useState([]),[I,B]=he.useState(!1),[F,G]=he.useState(!0),[z,re]=he.useState(!0),[Z,j]=he.useState([]),[Q,S]=he.useState([]),[Y,V]=he.useState(!0),[$,ue]=he.useState(!1),te=he.useRef(null),ve=he.useRef(null);he.useEffect(()=>{C()},[]),he.useEffect(()=>{f&&k(f)},[f]),he.useEffect(()=>{f&&m?le(f,m):f&&se(f)},[f,m]),he.useEffect(()=>{v&&Wp(v).then(E).catch(()=>{E(null)})},[v]),he.useEffect(()=>{w.length>=2?(B(!0),Jv(w).then(pe=>{let b=pe.map(ae=>ae.venue);F||(b=b.filter(ae=>ae.venueType!=="journal")),z||(b=b.filter(ae=>ae.venueType!=="conference")),P(b),B(!1)})):(P([]),B(!1))},[w,F,z]),he.useEffect(()=>{const pe=b=>{te.current&&!te.current.contains(b.target)&&ue(!1)};return document.addEventListener("mousedown",pe),()=>document.removeEventListener("mousedown",pe)},[]);const C=async()=>{try{const[pe,b,ae]=await Promise.all([Qv(),Ip(),Dp()]);d(pe),j(b),S(ae),T(tb()),pe.length>0&&y(pe[0].id)}catch(pe){console.error("Failed to load initial data:",pe)}finally{V(!1)}},k=async pe=>{try{const b=await Zv(pe);x(b.filter(ae=>ae.venueCount>0)),A(null)}catch(b){console.error("Failed to load subcategories:",b)}},se=async pe=>{try{let b=await Wv(pe);F||(b=b.filter(ae=>ae.venueType!=="journal")),z||(b=b.filter(ae=>ae.venueType!=="conference")),_(b.sort((ae,ne)=>(ne.h5Index||0)-(ae.h5Index||0)))}catch(b){console.error("Failed to load venues:",b)}},le=async(pe,b)=>{try{let ae=await Kv(pe,b);F||(ae=ae.filter(ne=>ne.venueType!=="journal")),z||(ae=ae.filter(ne=>ne.venueType!=="conference")),_(ae.sort((ne,M)=>(M.h5Index||0)-(ne.h5Index||0)))}catch(ae){console.error("Failed to load venues:",ae)}},oe=pe=>{T(pe),Kp(pe),ue(!1),D(""),c==null||c(pe),Dp().then(S)},we=async(pe,b)=>{b.stopPropagation(),Z.some(M=>M.id===pe)?ab(pe):nb(pe);const ne=await Ip();j(ne)},Ie=()=>R.find(pe=>pe.id===v)||Z.find(pe=>pe.id===v)||Q.find(pe=>pe.id===v),Te=w.length>=2?L:R,Ee=Ie();return Y?i.jsx("div",{className:"animate-pulse bg-gray-200 rounded-lg h-12 w-full"}):l?i.jsxs("div",{className:"relative",ref:te,children:[i.jsxs("button",{type:"button",onClick:()=>!o&&ue(!$),disabled:o,className:`
            flex items-center gap-2 px-3 py-2 rounded-lg border
            ${o?"bg-gray-100 cursor-not-allowed":"bg-white hover:bg-gray-50 cursor-pointer"}
            ${$?"ring-2 ring-blue-500 border-blue-500":"border-gray-300"}
          `,children:[i.jsx("span",{className:"font-medium",children:(Ee==null?void 0:Ee.acronym)||"Select Venue"}),i.jsx(il,{className:`w-4 h-4 transition-transform ${$?"rotate-180":""}`})]}),$&&i.jsxs("div",{className:"absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden",children:[i.jsx("div",{className:"p-2 border-b border-gray-100",children:i.jsxs("div",{className:"relative",children:[i.jsx(ll,{className:"absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),i.jsx("input",{ref:ve,type:"text",placeholder:"Search venues...",value:w,onChange:pe=>D(pe.target.value),className:"w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})]})}),i.jsx("div",{className:"max-h-72 overflow-y-auto",children:Te.map(pe=>i.jsxs("button",{type:"button",onClick:()=>oe(pe.id),className:`
                    w-full px-3 py-2.5 text-left flex items-center gap-2 hover:bg-blue-50 transition-colors
                    ${pe.id===v?"bg-blue-50 border-l-2 border-blue-500":""}
                  `,children:[pe.id===v?i.jsx(zt,{className:"w-4 h-4 text-blue-600 flex-shrink-0"}):i.jsx("div",{className:"w-4 h-4 flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:`font-medium ${pe.id===v?"text-blue-700":"text-gray-900"}`,children:pe.acronym}),i.jsx(Ks,{type:pe.venueType})]}),i.jsx("span",{className:"block text-xs text-gray-500 truncate",children:pe.name})]}),!pe.verified&&i.jsx(kn,{className:"w-3.5 h-3.5 text-yellow-500 flex-shrink-0"})]},pe.id))})]})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Target Venue"}),Ee&&!Ee.verified&&i.jsxs("span",{className:"flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded",children:[i.jsx(kn,{className:"w-3 h-3"}),"Configuration needs verification"]})]}),i.jsxs("div",{className:"relative",children:[i.jsx(ll,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Search journals and conferences...",value:w,onChange:pe=>D(pe.target.value),className:"w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),w&&i.jsx("button",{type:"button",onClick:()=>D(""),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:i.jsx(qp,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Zy,{className:"w-4 h-4 text-gray-500"}),i.jsx("span",{className:"text-sm text-gray-600",children:"Show:"})]}),i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:z,onChange:pe=>re(pe.target.checked),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Conferences"})]}),i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:F,onChange:pe=>G(pe.target.checked),className:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Journals"})]})]}),Ee&&i.jsxs("div",{className:`p-4 rounded-lg border ${((Oe=Ei[Ee.category])==null?void 0:Oe.light)||"bg-blue-50"} border-${((ze=Ei[Ee.category])==null?void 0:ze.border)||"blue-200"}`,children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`flex-shrink-0 w-12 h-12 ${((bt=Ei[Ee.category])==null?void 0:bt.bg)||"bg-blue-600"} rounded-lg flex items-center justify-center`,children:i.jsx("span",{className:"text-white font-bold text-lg",children:Ee.acronym.slice(0,2)})}),i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("h4",{className:"font-semibold text-gray-900",children:Ee.acronym}),i.jsx(Ks,{type:Ee.venueType}),i.jsx(zc,{h5Index:Ee.h5Index})]}),i.jsx("p",{className:"text-sm text-gray-600",children:Ee.name})]}),i.jsx("button",{type:"button",onClick:pe=>we(Ee.id,pe),className:`p-2 rounded-full hover:bg-white/50 transition-colors ${Z.some(pe=>pe.id===Ee.id)?"text-yellow-500":"text-gray-400"}`,children:i.jsx(Rp,{className:"w-5 h-5",fill:Z.some(pe=>pe.id===Ee.id)?"currentColor":"none"})})]}),h&&h.officialLinks&&i.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-200/50",children:[i.jsx("h5",{className:"text-sm font-medium text-gray-700 mb-2",children:"Official Guidelines"}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.officialLinks.callForPapers&&i.jsxs("a",{href:h.officialLinks.callForPapers,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors",children:[i.jsx(Ni,{className:"w-3.5 h-3.5"}),"Call for Papers",i.jsx(Si,{className:"w-3 h-3"})]}),h.officialLinks.submissionInstructions&&i.jsxs("a",{href:h.officialLinks.submissionInstructions,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 rounded-full hover:bg-green-200 transition-colors",children:[i.jsx(Gp,{className:"w-3.5 h-3.5"}),"Submission Instructions",i.jsx(Si,{className:"w-3 h-3"})]}),h.officialLinks.reviewerGuidelines&&i.jsxs("a",{href:h.officialLinks.reviewerGuidelines,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors",children:[i.jsx(cl,{className:"w-3.5 h-3.5"}),"Reviewer Guidelines",i.jsx(Si,{className:"w-3 h-3"})]}),h.website&&i.jsxs("a",{href:h.website,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",children:[i.jsx(Ky,{className:"w-3.5 h-3.5"}),"Website",i.jsx(Si,{className:"w-3 h-3"})]})]})]}),!h&&!Ee.verified&&i.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200/50",children:i.jsxs("p",{className:"text-sm text-gray-500 flex items-center gap-2",children:[i.jsx(kn,{className:"w-4 h-4 text-yellow-500"}),"Full configuration not yet available for this venue. Using default settings."]})})]}),(Q.length>0||Z.length>0)&&!w&&i.jsxs("div",{className:"space-y-3",children:[Z.length>0&&i.jsxs("div",{children:[i.jsxs("h4",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[i.jsx(Rp,{className:"w-4 h-4 text-yellow-500"}),"Favorites"]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:Z.map(pe=>i.jsx("button",{type:"button",onClick:()=>oe(pe.id),className:`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${pe.id===v?"bg-blue-100 border-blue-300 text-blue-700":"bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:pe.acronym},pe.id))})]}),Q.length>0&&i.jsxs("div",{children:[i.jsxs("h4",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-2",children:[i.jsx(Oy,{className:"w-4 h-4 text-gray-500"}),"Recent"]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:Q.map(pe=>i.jsx("button",{type:"button",onClick:()=>oe(pe.id),className:`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${pe.id===v?"bg-blue-100 border-blue-300 text-blue-700":"bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`,children:pe.acronym},pe.id))})]})]}),!w&&i.jsx("div",{className:"border-b border-gray-200",children:i.jsx("nav",{className:"flex space-x-1 overflow-x-auto pb-1",children:u.map(pe=>{const b=Ei[pe.id],ae=f===pe.id;return i.jsxs("button",{type:"button",onClick:()=>y(pe.id),className:`
                    flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors
                    ${ae?`${b.light} ${b.text} border-b-2 ${b.border}`:"text-gray-600 hover:text-gray-900 hover:bg-gray-50"}
                  `,children:[i.jsx(ub,{category:pe.id,size:16}),lb[pe.id]]},pe.id)})})}),!w&&f&&i.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[p.length>0&&i.jsxs("div",{className:"col-span-4 space-y-1 max-h-80 overflow-y-auto",children:[i.jsxs("button",{type:"button",onClick:()=>A(null),className:`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${m===null?"bg-gray-100 font-medium text-gray-900":"text-gray-600 hover:bg-gray-50"}`,children:["All (",R.length,")"]}),p.map(pe=>i.jsxs("button",{type:"button",onClick:()=>A(pe.id),className:`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${m===pe.id?"bg-gray-100 font-medium text-gray-900":"text-gray-600 hover:bg-gray-50"}`,children:[pe.name," (",pe.venueCount,")"]},pe.id))]}),i.jsxs("div",{className:`${p.length>0?"col-span-8":"col-span-12"} grid grid-cols-2 gap-2 max-h-80 overflow-y-auto`,children:[Te.map(pe=>i.jsxs("button",{type:"button",onClick:()=>oe(pe.id),disabled:o,className:`
                  p-3 rounded-lg border text-left transition-all
                  ${pe.id===v?"border-blue-500 bg-blue-50 ring-2 ring-blue-200":"border-gray-200 hover:border-blue-300 hover:bg-blue-50"}
                  ${o?"opacity-50 cursor-not-allowed":"cursor-pointer"}
                `,children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("span",{className:"font-semibold text-gray-900",children:pe.acronym}),i.jsxs("div",{className:"flex items-center gap-1",children:[pe.id===v&&i.jsx(zt,{className:"w-4 h-4 text-blue-600"}),!pe.verified&&i.jsx(kn,{className:"w-3 h-3 text-yellow-500"})]})]}),i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx(Ks,{type:pe.venueType}),i.jsx(zc,{h5Index:pe.h5Index})]}),i.jsx("p",{className:"text-xs text-gray-500 line-clamp-2",children:pe.name})]},pe.id)),Te.length===0&&i.jsx("div",{className:"col-span-2 text-center py-8 text-gray-500",children:"No venues found"})]})]}),w&&i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 max-h-80 overflow-y-auto",children:I?i.jsx("div",{className:"col-span-full text-center py-8 text-gray-500",children:"Searching..."}):L.length>0?L.map(pe=>i.jsxs("button",{type:"button",onClick:()=>oe(pe.id),disabled:o,className:`
                  p-3 rounded-lg border text-left transition-all
                  ${pe.id===v?"border-blue-500 bg-blue-50 ring-2 ring-blue-200":"border-gray-200 hover:border-blue-300 hover:bg-blue-50"}
                `,children:[i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("span",{className:"font-semibold text-gray-900",children:pe.acronym}),pe.id===v&&i.jsx(zt,{className:"w-4 h-4 text-blue-600"})]}),i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx(Ks,{type:pe.venueType}),i.jsx(zc,{h5Index:pe.h5Index})]}),i.jsx("p",{className:"text-xs text-gray-500 line-clamp-2",children:pe.name})]},pe.id)):i.jsxs("div",{className:"col-span-full text-center py-8 text-gray-500",children:['No venues found for "',w,'"']})}),i.jsxs("p",{className:"text-xs text-gray-500 mt-4",children:[i.jsx(kn,{className:"w-3 h-3 inline mr-1"}),"Venues marked with a warning icon have not been fully verified. h5-index from Google Scholar."]})]})},fb=({logs:c,stageStatus:o,isProcessing:l,uploadedFiles:u,onFileChange:d,onAction:f,detectionStatus:y,onRefreshDetection:p,hasExistingCase:x=!1,onVenueChange:m,onNewInterview:A})=>{var Z;const[R,_]=he.useState(!1),[v,T]=he.useState(null),[h,E]=he.useState(null),[w,D]=he.useState(!1),[L,P]=he.useState(!1),[I,B]=he.useState(null);he.useEffect(()=>{h&&(P(!0),B(null),Kp(h),ib("template").then(async j=>{const Q=new Blob([j],{type:"text/plain"}),S=new File([Q],`${h}_template.txt`,{type:"text/plain"});d("template",S),D(!0),P(!1)}).catch(j=>{console.error("Failed to load template:",j),B("Template not available for this venue"),P(!1)}))},[h,d]);const F=j=>{E(j),D(!1),m==null||m(j)},G=j=>{T(j),A&&A()},z=u.template&&u.interview,re=async()=>{window.confirm("Start a new case? This will backup and clear all files from the previous case.")&&(_(!0),f("NEW_CASE"),setTimeout(()=>_(!1),2e3))};return i.jsxs("div",{className:"w-full px-6 mt-6",children:[x&&i.jsx("div",{className:"bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 max-w-4xl mx-auto",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(dy,{className:"text-blue-600",size:24}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-blue-800",children:"Previous project data detected"}),i.jsx("p",{className:"text-sm text-blue-600",children:"Start a new project to backup and clear previous files"})]})]}),i.jsx("button",{onClick:re,disabled:R,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50",children:R?i.jsxs(i.Fragment,{children:[i.jsx(cn,{className:"animate-spin",size:18}),"Backing up..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Xy,{size:18}),"New Project"]})})]})}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto",children:[i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2 mb-6",children:[i.jsx(au,{className:"text-emerald-600"}),"Source"]}),i.jsx("p",{className:"text-sm text-slate-500 mb-6",children:"Choose how to provide your research content"}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("button",{onClick:()=>G("voice-interview"),className:`w-full p-4 rounded-xl border-2 transition-all text-left ${v==="voice-interview"?"border-emerald-500 bg-emerald-50":"border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50"}`,children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`p-3 rounded-lg ${v==="voice-interview"?"bg-emerald-500 text-white":"bg-slate-100 text-slate-600"}`,children:i.jsx(hv,{size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-slate-800",children:"Voice Interview"}),i.jsx("p",{className:"text-sm text-slate-500",children:"Record a live interview session"})]}),v==="voice-interview"&&i.jsx(Zs,{className:"ml-auto text-emerald-500",size:24})]})}),i.jsx("button",{onClick:()=>T("transcript-upload"),className:`w-full p-4 rounded-xl border-2 transition-all text-left ${v==="transcript-upload"?"border-purple-500 bg-purple-50":"border-slate-200 hover:border-purple-300 hover:bg-purple-50/50"}`,children:i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:`p-3 rounded-lg ${v==="transcript-upload"?"bg-purple-500 text-white":"bg-slate-100 text-slate-600"}`,children:i.jsx(Ni,{size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-slate-800",children:"Interview Transcript"}),i.jsx("p",{className:"text-sm text-slate-500",children:"Upload an existing transcript file"})]}),v==="transcript-upload"&&i.jsx(Zs,{className:"ml-auto text-purple-500",size:24})]})})]}),v==="transcript-upload"&&i.jsxs("div",{className:"mt-6 space-y-4 border-t border-slate-100 pt-6",children:[i.jsx(Cp,{label:"Interview Transcript",accept:".txt",required:!0,file:u.interview,onFileSelect:j=>d("interview",j)}),i.jsx(Cp,{label:"Data File (Optional)",accept:".txt,.csv,.xlsx,.json",required:!1,file:u.dataFile,onFileSelect:j=>d("dataFile",j)})]}),y&&y.detected.interview&&i.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-green-50 border border-green-200",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Zs,{className:"text-green-600",size:18}),i.jsx("span",{className:"text-green-800 font-medium",children:"Files auto-detected!"})]}),i.jsxs("div",{className:"mt-2 text-sm text-green-700",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Interview:"})," ",y.detected.interview.filename]}),y.detected.participantId&&i.jsxs("p",{children:[i.jsx("strong",{children:"Participant ID:"})," ",y.detected.participantId]})]})]})]}),i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2 mb-6",children:[i.jsx(Cv,{className:"text-indigo-600"}),"Target"]}),i.jsx("p",{className:"text-sm text-slate-500 mb-6",children:"Select your target venue - template will load automatically"}),i.jsx(db,{onVenueChange:F,disabled:l||o===je.COMPLETED}),h&&i.jsxs("div",{className:"mt-6 p-4 rounded-lg border border-slate-200 bg-slate-50",children:[i.jsx("h4",{className:"font-medium text-slate-700 mb-2",children:"Template Status"}),L?i.jsxs("div",{className:"flex items-center gap-2 text-blue-600",children:[i.jsx(cv,{className:"animate-spin",size:18}),i.jsx("span",{children:"Loading template..."})]}):w?i.jsxs("div",{className:"flex items-center gap-2 text-green-600",children:[i.jsx(Zs,{size:18}),i.jsxs("span",{children:["Template loaded: ",(Z=u.template)==null?void 0:Z.name]})]}):I?i.jsxs("div",{className:"flex items-center gap-2 text-amber-600",children:[i.jsx(kn,{size:18}),i.jsx("span",{children:I})]}):null]})]})]}),i.jsxs("div",{className:"max-w-6xl mx-auto mt-8",children:[u.participantId&&i.jsx("div",{className:"p-3 bg-indigo-50 rounded-lg mb-4",children:i.jsxs("p",{className:"text-sm text-indigo-800",children:[i.jsx("strong",{children:"Participant ID:"})," ",u.participantId]})}),i.jsx(Ci,{logs:c,height:"h-32"}),i.jsx("div",{className:"mt-4 flex justify-end gap-3",children:i.jsxs("button",{onClick:()=>f("START_SETUP"),disabled:l||!z,className:"bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50",children:[l?i.jsx(cn,{className:"animate-spin",size:18}):i.jsx(Gc,{size:18}),"Verify Files"]})}),!z&&i.jsx("p",{className:"text-xs text-amber-600 text-center mt-4",children:"Please select a source and target venue to proceed."}),o===je.COMPLETED&&i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 mt-6",children:[i.jsx("h3",{className:"font-semibold text-slate-700",children:"Ready to Build"}),i.jsx("p",{className:"text-sm text-slate-600",children:"Setup verified. Click below to start building the research paper from the interview transcript."}),i.jsxs("button",{onClick:()=>f("START_BUILDER"),className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[i.jsx(Gc,{size:18}),"Start Building Paper"]})]}),i.jsxs("div",{className:"bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3 mt-6",children:[i.jsx("h3",{className:"font-semibold text-amber-800 text-sm",children:"Testing Shortcuts"}),i.jsxs("div",{className:"flex gap-3",children:[i.jsx("button",{onClick:()=>f("SKIP_TO_REVIEWER"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Reviewer"}),i.jsx("button",{onClick:()=>f("SKIP_TO_SUPERVISOR"),className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium",children:"Skip to Supervisor"})]})]})]})]})},hb=({logs:c,isProcessing:o,isPartialPaper:l,currentBuilderStep:u,paperContent:d,onAbort:f,onRestart:y})=>i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Building Research Paper",l&&i.jsx("span",{className:"text-sm font-normal text-amber-600 ml-2",children:"(Partial Paper Mode)"})]}),i.jsx(su,{stageName:"Builder",isProcessing:o,canAbort:!0,canRestart:!o&&!!d,onAbort:f||(()=>{}),onRestart:y||(()=>{})})]}),i.jsx(Xv,{currentStep:u}),i.jsx(Ci,{logs:c,height:"h-48"}),i.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Current Draft Preview"}),i.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:d?i.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:d}):i.jsx("p",{className:"text-slate-400 italic",children:"Generating content..."})})]})]}),pb=({allOversight:c,compact:o=!1})=>{if(c.length===0)return null;const l=(R,_)=>_>R?"up":_<R?"down":"same",u=({trend:R,size:_=14})=>R==="up"?i.jsx(Yp,{size:_,className:"text-emerald-500"}):R==="down"?i.jsx(Ov,{size:_,className:"text-red-500"}):i.jsx(mv,{size:_,className:"text-slate-400"}),d=(R,_=4)=>R>=_?"text-emerald-600":R>=_-1?"text-amber-600":"text-red-600",f=[{key:"novelty",label:"Novelty"},{key:"significance",label:"Significance"},{key:"methodologicalRigor",label:"Method. Rigor"},{key:"clarity",label:"Clarity"},{key:"relevance",label:"Relevance"}],y=c[0],p=c[c.length-1],x=c.length>1,m=x?((p.averageScore-y.averageScore)/y.averageScore*100).toFixed(1):"0",A=x?Math.round((1-(p.errorCounts.majorErrors+p.errorCounts.minorErrors)/Math.max(1,y.errorCounts.majorErrors+y.errorCounts.minorErrors))*100):0;return o?i.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(Vc,{size:18,className:"text-indigo-600"}),i.jsx("h4",{className:"font-semibold text-slate-800",children:"Score Progression"}),x&&i.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${parseFloat(m)>0?"bg-emerald-100 text-emerald-700":parseFloat(m)<0?"bg-red-100 text-red-700":"bg-slate-100 text-slate-700"}`,children:[parseFloat(m)>0?"+":"",m,"% overall"]})]}),i.jsx("div",{className:"grid grid-cols-5 gap-2 text-center text-xs",children:f.map(({key:R,label:_})=>{const v=y.reviewScores[R]||0,T=p.reviewScores[R]||0,h=l(v,T);return i.jsxs("div",{className:"bg-slate-50 rounded p-2",children:[i.jsx("div",{className:"text-slate-500 truncate mb-1",children:_}),i.jsxs("div",{className:"flex items-center justify-center gap-1",children:[i.jsx("span",{className:`font-bold ${d(T)}`,children:T}),x&&i.jsx(u,{trend:h,size:12})]}),x&&v!==T&&i.jsxs("div",{className:"text-slate-400 text-[10px]",children:["was ",v]})]},R)})}),i.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-slate-500",children:"Average:"}),i.jsx("span",{className:`font-bold ${d(p.averageScore)}`,children:p.averageScore.toFixed(1)}),x&&i.jsxs(i.Fragment,{children:[i.jsx(u,{trend:l(y.averageScore,p.averageScore)}),i.jsxs("span",{className:"text-slate-400 text-xs",children:["(was ",y.averageScore.toFixed(1),")"]})]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("span",{className:"text-slate-500",children:"Errors:"}),i.jsx("span",{className:`font-bold ${p.errorCounts.majorErrors>0?"text-red-600":"text-emerald-600"}`,children:p.errorCounts.majorErrors+p.errorCounts.minorErrors}),x&&A!==0&&i.jsxs("span",{className:`text-xs ${A>0?"text-emerald-600":"text-red-600"}`,children:["(",A>0?"-":"+",Math.abs(A),"%)"]})]})]}),x&&i.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100",children:[i.jsxs("div",{className:"text-xs text-slate-500 mb-2",children:["History (",c.length," rounds):"]}),i.jsx("div",{className:"flex gap-1",children:c.map((R,_)=>i.jsxs("div",{className:`flex-1 text-center py-1 rounded text-xs ${_===c.length-1?"bg-indigo-100 text-indigo-700 font-medium":"bg-slate-100 text-slate-600"}`,children:["R",R.version,": ",R.averageScore.toFixed(1)]},_))})]})]}):i.jsxs("div",{className:"bg-white border border-slate-200 rounded-lg p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx(Vc,{size:20,className:"text-indigo-600"}),i.jsx("h3",{className:"font-bold text-slate-800",children:"Review Score Progression"})]}),x&&i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${parseFloat(m)>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[parseFloat(m)>0?"+":"",m,"% score change"]}),i.jsxs("span",{className:`text-sm px-3 py-1 rounded-full ${A>0?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`,children:[A>0?"-":"+",Math.abs(A),"% errors"]})]})]}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-200",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),c.map((R,_)=>i.jsxs("th",{className:`text-center p-2 ${_===c.length-1?"bg-indigo-50":"bg-slate-50"}`,children:["Round ",R.version]},_)),x&&i.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Trend"})]})}),i.jsxs("tbody",{children:[f.map(({key:R,label:_})=>{const v=c.map(h=>h.reviewScores[R]||0),T=x?l(v[0],v[v.length-1]):"same";return i.jsxs("tr",{className:"border-b border-slate-100",children:[i.jsx("td",{className:"p-2 font-medium",children:_}),v.map((h,E)=>i.jsx("td",{className:`text-center p-2 ${E===v.length-1?"bg-indigo-50/50":""} ${d(h)}`,children:h},E)),x&&i.jsx("td",{className:"text-center p-2",children:i.jsxs("div",{className:"flex items-center justify-center gap-1",children:[i.jsx(u,{trend:T}),T==="up"&&i.jsxs("span",{className:"text-emerald-600 text-xs",children:["+",v[v.length-1]-v[0]]}),T==="down"&&i.jsx("span",{className:"text-red-600 text-xs",children:v[v.length-1]-v[0]})]})})]},R)}),i.jsxs("tr",{className:"border-t-2 border-slate-200 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"Average"}),c.map((R,_)=>i.jsx("td",{className:`text-center p-2 ${_===c.length-1?"bg-indigo-100":""} ${d(R.averageScore)}`,children:R.averageScore.toFixed(1)},_)),x&&i.jsx("td",{className:"text-center p-2",children:i.jsx("div",{className:"flex items-center justify-center gap-1",children:i.jsx(u,{trend:l(y.averageScore,p.averageScore)})})})]})]})]})}),i.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[i.jsx("h4",{className:"font-semibold text-slate-700 mb-2",children:"Error Counts"}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Major Errors"}),i.jsx("div",{className:"flex items-center gap-2",children:c.map((R,_)=>i.jsxs("span",{className:`px-2 py-1 rounded text-sm ${_===c.length-1?R.errorCounts.majorErrors>0?"bg-red-100 text-red-700 font-bold":"bg-emerald-100 text-emerald-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",R.version,": ",R.errorCounts.majorErrors]},_))})]}),i.jsxs("div",{children:[i.jsx("div",{className:"text-sm text-slate-500 mb-1",children:"Minor Errors"}),i.jsx("div",{className:"flex items-center gap-2",children:c.map((R,_)=>i.jsxs("span",{className:`px-2 py-1 rounded text-sm ${_===c.length-1?"bg-indigo-100 text-indigo-700 font-bold":"bg-slate-100 text-slate-600"}`,children:["R",R.version,": ",R.errorCounts.minorErrors]},_))})]})]})]})]})},un="http://localhost:3001/api";function wr(){return{"Content-Type":"application/json"}}let mt=null;async function Ln(){try{const c=new AbortController,o=setTimeout(()=>c.abort(),1e3),l=await fetch(`${un}/health`,{signal:c.signal});return clearTimeout(o),mt=(await l.json()).status==="ok",mt}catch{return mt=!1,!1}}async function Jp(){var c,o;try{const l=await fetch(`${un}/refresh-manifest`,{method:"POST",headers:{"Content-Type":"application/json"}});if(!l.ok)return{success:!1,error:`Server error: ${l.status}`};const u=await l.json();return u.success&&console.log("[FileApi] Manifest refreshed:",(o=(c=u.manifest)==null?void 0:c.files)==null?void 0:o.map(d=>d.filename)),u}catch(l){return console.error("[FileApi] Failed to refresh manifest:",l),{success:!1,error:l.message}}}function uu(c,o,l="text/plain"){const u=new Blob([o],{type:l}),d=URL.createObjectURL(u),f=document.createElement("a");f.href=d,f.download=c,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d)}async function qc(c,o){if(mt===null&&await Ln(),mt)try{const u=await(await fetch(`${un}/save-paper`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:o})})).json();if(u.success)return u}catch{console.warn("Backend save failed, falling back to download")}try{return uu(c,o,"application/x-tex"),{success:!0,path:`Downloads/${c}`}}catch(l){return{success:!1,error:l.message}}}async function Xc(c,o){const l=typeof o=="string"?o:JSON.stringify(o,null,2);if(mt===null&&await Ln(),mt)try{const d=await(await fetch(`${un}/save-data`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:l})})).json();if(d.success)return d}catch{console.warn("Backend save failed, falling back to download")}try{return uu(c,l,"application/json"),{success:!0,path:`Downloads/${c}`}}catch(u){return{success:!1,error:u.message}}}async function em(c){if(mt===null&&await Ln(),mt)try{const l=await(await fetch(`${un}/save-files`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:c})})).json();if(l.success)return l}catch{console.warn("Backend save failed, falling back to downloads")}try{const o=[];for(const l of c){const u=typeof l.content=="string"?l.content:JSON.stringify(l.content,null,2),d=l.directory==="paper"?"application/x-tex":"application/json";await new Promise(f=>setTimeout(f,200)),uu(l.filename,u,d),o.push(l.filename)}return{success:!0,files:o}}catch(o){return{success:!1,error:o.message}}}async function tm(c,o,l,u,d,f){const y=d?`${d}_`:"",p=await em([{directory:"data",filename:`${y}oversight_v${c}.json`,content:o},{directory:"data",filename:`${y}feedback_v${c}.json`,content:l},{directory:"paper",filename:`${y}icis_paper_v${c}.tex`,content:u}]);if(f)try{const x="https://icis-deploy-12-10-2025.vercel.app";x&&(await fetch(`${x}/api/participants`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,oversight:o,feedback:l,round:c})}),console.log(`[FileApi] Saved oversight/feedback v${c} to blob for ${f}`))}catch(x){console.warn("[FileApi] Failed to save to blob:",x)}return p}const ua="https://icis-deploy-12-10-2025.vercel.app";let Da=null;async function nm(c,o,l){const u=(o.match(/\\begin\{tikzpicture\}/g)||[]).length,d=(l==null?void 0:l.length)||0,f=Math.round(o.length/1024),y=ym(),p=!!y;try{console.log(`[LaTeX] Compiling via Vercel cloud... (${f} KB, ${u} TikZ, ${d} PNG figures${p?", with .bib":""})`);const x=new AbortController,m=setTimeout(()=>{console.error("[LaTeX] Client-side timeout after 5 minutes"),x.abort()},3e5),A={filename:c,content:o,figures:l};y&&(A.bibliography=y);let R;try{R=await fetch(`${ua}/api/compile-latex`,{method:"POST",headers:wr(),signal:x.signal,body:JSON.stringify(A)}),clearTimeout(m)}catch(v){if(clearTimeout(m),v.name==="AbortError")return console.error("[LaTeX] Request timed out"),{success:!1,error:`LaTeX compilation timed out after 5 minutes. The document with ${u} TikZ figures may be too complex.`};throw v}const _=await R.json();return _.success&&_.pdfBase64?(Da={filename:_.pdfFilename,base64:_.pdfBase64},console.log(`[LaTeX] Cloud compilation success: ${_.pdfFilename}`)):_.success||console.warn(`[LaTeX] Cloud compilation failed: ${_.error}`),_}catch(x){console.warn("[LaTeX] Cloud compilation failed, trying local backend...",x)}if(mt===null&&await Ln(),!mt)return{success:!1,error:"PDF compilation not available. Please ensure the Vercel deployment is configured correctly."};try{return await(await fetch(`${un}/compile-latex`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:c,content:o})})).json()}catch(x){return{success:!1,error:`Compilation request failed: ${x.message}`}}}function du(){if(!Da)return null;const c=atob(Da.base64),o=new Uint8Array(c.length);for(let u=0;u<c.length;u++)o[u]=c.charCodeAt(u);const l=new Blob([o],{type:"application/pdf"});return{filename:Da.filename,blob:l}}function am(c){return`${un}/get-pdf/${encodeURIComponent(c)}`}async function rm(c){const o=du();if(o&&o.filename===c){const d=URL.createObjectURL(o.blob),f=document.createElement("a");f.href=d,f.download=c,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d);return}const l=am(c),u=document.createElement("a");u.href=l,u.download=c,document.body.appendChild(u),u.click(),document.body.removeChild(u)}async function im(c){if(!Da)return{success:!1,error:"No compiled PDF available. Please compile the paper first."};try{console.log("[Viewer] Creating viewer link via Vercel cloud...");const l=await(await fetch(`${ua}/api/create-viewer-link`,{method:"POST",headers:wr(),body:JSON.stringify({filename:Da.filename,pdfBase64:Da.base64})})).json();if(l.success)return console.log(`[Viewer] Link created: ${l.fullUrl}`),l;console.warn("[Viewer] Cloud API returned error:",l.error)}catch(o){console.warn("[Viewer] Cloud API failed:",o)}if(mt===null&&await Ln(),!mt)return{success:!1,error:"Unable to create viewer link. Vercel KV storage may not be configured."};try{return await(await fetch(`${un}/create-viewer-link`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({texFilename:c})})).json()}catch(o){return{success:!1,error:`Failed to create viewer link: ${o.message}`}}}function sm(c){window.open(c,"_blank","noopener,noreferrer")}async function dl(c,o="full"){var l;try{console.log(`[Cloud Python] Analyzing data (${c.length} chars, type: ${o})...`);const d=await(await fetch(`${ua}/api/analyze-data`,{method:"POST",headers:wr(),body:JSON.stringify({csvContent:c,analysisType:o})})).json();return d.success?console.log(`[Cloud Python] Analysis complete: ${((l=d.figures)==null?void 0:l.length)||0} figures generated`):console.warn(`[Cloud Python] Analysis failed: ${d.error}`),d}catch(u){return console.error("[Cloud Python] Error:",u),{success:!1,error:u.message}}}async function lm(c,o,l){const u=ji();if(u!=null&&u.content&&ua){console.log("[executePythonScript] Trying cloud Python analysis...");const d=await dl(u.content,"full");if(d.success){const f=[];return d.chart_data&&d.chart_data.forEach((y,p)=>{f.push({filename:`${y.type}_${y.column||y.x_column||p}.json`,path:`cloud://chart_data/${p}`,size:JSON.stringify(y).length,base64:btoa(JSON.stringify(y))})}),{success:!0,stdout:d.text_summary||"",dataFileFound:!0,generatedFigures:f}}}if(mt===null&&await Ln(),!mt)return{success:!1,error:"Python execution not available. Cloud analysis failed and local backend not running."};try{console.log(`[executePythonScript] Using local backend, filename=${c}, dataFile=${l||"UNDEFINED"}`);const d={filename:c,code:o,dataFile:l};console.log("[executePythonScript] Request body dataFile:",d.dataFile);const y=await(await fetch(`${un}/execute-python`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json();return console.log(`[executePythonScript] Result: dataFileFound=${y.dataFileFound}, dataFilePath=${y.dataFilePath||"NONE"}`),y}catch(d){return{success:!1,error:`Python execution request failed: ${d.message}`}}}async function om(){if(mt===null&&await Ln(),!mt)return{success:!1,error:'Backend server not available. Run "node server.cjs" to enable file backup.'};try{return await(await fetch(`${un}/backup-and-clear`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}catch(c){return{success:!1,error:`Backup request failed: ${c.message}`}}}let Rt=null;async function cm(c){try{const o=await c.arrayBuffer(),l=btoa(new Uint8Array(o).reduce((f,y)=>f+String.fromCharCode(y),""));console.log(`[Cloud Upload] Uploading ${c.name} (${c.size} bytes)...`);const d=await(await fetch(`${ua}/api/upload-data`,{method:"POST",headers:wr(),body:JSON.stringify({filename:c.name,content:l,contentType:c.type})})).json();return d.success&&(Rt={filename:c.name,blobUrl:d.blobUrl},console.log(`[Cloud Upload] Success: ${d.blobUrl}`)),d}catch(o){return console.error("[Cloud Upload] Error:",o),{success:!1,error:o.message}}}function ji(){return Rt}async function um(){if(!Rt||!Rt.blobUrl)return console.log("[Cloud Delete] No data file to delete"),{success:!0};try{console.log(`[Cloud Delete] Deleting: ${Rt.blobUrl}`);const o=await(await fetch(`${ua}/api/delete-data`,{method:"POST",headers:wr(),body:JSON.stringify({blobUrl:Rt.blobUrl})})).json();return o.success&&(console.log("[Cloud Delete] Data file deleted successfully"),Rt=null),o}catch(c){return console.error("[Cloud Delete] Error:",c),{success:!1,error:c.message}}}function dm(){Rt=null}async function Qc(c){try{console.log(`[Cloud Read] Reading from: ${c}`);const l=await(await fetch(`${ua}/api/read-data?url=${encodeURIComponent(c)}`)).json();return l.success&&Rt&&(Rt.content=l.content),l}catch(o){return console.error("[Cloud Read] Error:",o),{success:!1,error:o.message}}}async function fm(c){if(Rt&&Rt.filename===c&&Rt.blobUrl)return console.log("[DataFilePreview] Using cloud data file"),Qc(Rt.blobUrl);if(mt===null&&await Ln(),!mt)return Rt&&Rt.blobUrl?(console.log("[DataFilePreview] Falling back to cloud data file"),Qc(Rt.blobUrl)):{success:!1,error:"Backend server not available"};try{const l=await(await fetch(`${un}/read-file/data/${encodeURIComponent(c)}`)).json();if(!l.success)return{success:!1,error:l.error||"Failed to read file"};const u=l.content,d=u.split(/\r?\n/),f=d[0]||"",y=d.filter(p=>p.trim()).length;return{success:!0,filename:c,firstLine:f,totalLines:y,content:u}}catch(o){return{success:!1,error:o.message}}}async function mb(c){if(!c||c.length===0)return{success:!1,error:"No chart data provided"};try{console.log(`[QuickChart] Generating ${c.length} figures via QuickChart.io...`);const l=await(await fetch(`${ua}/api/quickchart`,{method:"POST",headers:wr(),body:JSON.stringify({chartData:c})})).json();return l.success?console.log(`[QuickChart] Generated ${l.count} PNG figures`):console.warn(`[QuickChart] Generation failed: ${l.error}`),l}catch(o){return console.error("[QuickChart] Error:",o),{success:!1,error:o.message}}}let la=[];function hm(){if(la.length>0)return la;try{const c=localStorage.getItem("icis_png_figures");if(c){const o=JSON.parse(c);if(o&&o.length>0)return console.log(`[PNG Storage] Recovered ${o.length} session figures from localStorage`),la=o.map(l=>({filename:l.filename,blobUrl:`data:image/png;base64,${l.base64}`,description:""})),la}}catch(c){console.warn("[PNG Storage] Could not read session figures from localStorage:",c)}return la}async function pm(){const c=[];for(const o of la)try{const l=await fetch(o.blobUrl);if(l.ok){const u=await l.blob();c.push({filename:o.filename,blob:u})}else console.warn(`[PNG Figures] Failed to download ${o.filename}: ${l.status}`)}catch(l){console.warn(`[PNG Figures] Error downloading ${o.filename}:`,l)}return console.log(`[PNG Figures] Downloaded ${c.length}/${la.length} figures`),c}let oa=[];function gb(c){oa=c.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),base64:o.base64})),la=c.map(o=>({filename:o.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),blobUrl:`data:image/png;base64,${o.base64}`,description:o.description||""})),console.log(`[PNG Storage] Stored ${oa.length} PNG figures for LaTeX compilation and download`);try{localStorage.setItem("icis_png_figures",JSON.stringify(oa))}catch(o){console.warn("[PNG Storage] Could not persist to localStorage:",o)}}function mm(){if(oa.length>0)return oa;try{const c=localStorage.getItem("icis_png_figures");if(c){const o=JSON.parse(c);if(o&&o.length>0)return console.log(`[PNG Storage] Recovered ${o.length} figures from localStorage`),oa=o,oa}}catch(c){console.warn("[PNG Storage] Could not read from localStorage:",c)}return oa}let rn=null;function gm(c,o){rn={filename:c,content:o},console.log(`[Bibliography] Stored ${c} (${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries)`);try{localStorage.setItem("icis_bibliography",JSON.stringify(rn))}catch(l){console.warn("[Bibliography] Could not persist to localStorage:",l)}}function ym(){if(rn)return rn;try{const c=localStorage.getItem("icis_bibliography");if(c){const o=JSON.parse(c);if(o&&o.content)return console.log(`[Bibliography] Recovered from localStorage: ${o.filename}`),rn=o,rn}}catch(c){console.warn("[Bibliography] Could not read from localStorage:",c)}return rn}function vm(){if(rn)return rn;try{const c=localStorage.getItem("icis_bibliography");if(c){const o=JSON.parse(c);if(o&&o.content)return console.log(`[Bibliography] Recovered from localStorage for download: ${o.filename}`),rn=o,rn}}catch(c){console.warn("[Bibliography] Could not read from localStorage:",c)}return rn}let br=null;function yb(c,o){const l=['"""',"ICIScopilot - Visualization Code",`Generated: ${new Date().toISOString()}`,o?"Data Source: AI-synthesized illustrative data":"Data Source: User-provided data file","","This script reproduces the figures generated for your research paper.","Requirements: pip install matplotlib numpy",'"""',"","import matplotlib.pyplot as plt","import numpy as np","","# Set publication-quality defaults","plt.rcParams.update({",'    "font.size": 12,','    "axes.titlesize": 14,','    "axes.labelsize": 12,','    "figure.figsize": (10, 6),','    "figure.dpi": 150',"})",""];return c.forEach((u,d)=>{var f,y,p,x,m,A,R,_;if(l.push("# ============================================================================"),l.push(`# Figure ${d+1}: ${u.title||"Untitled"}`),l.push("# ============================================================================"),l.push(""),l.push(`fig${d+1}, ax${d+1} = plt.subplots()`),l.push(""),u.type==="bar")l.push("# Bar chart data"),l.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets.length>0&&(u.datasets.forEach((v,T)=>{l.push(`data_${d+1}_${T} = ${JSON.stringify(v.data||[])}`)}),u.datasets.length===1?l.push(`ax${d+1}.bar(labels_${d+1}, data_${d+1}_0, color='steelblue')`):(l.push(`x = np.arange(len(labels_${d+1}))`),l.push(`width = ${(.8/u.datasets.length).toFixed(2)}`),u.datasets.forEach((v,T)=>{const h=T-(u.datasets.length-1)/2;l.push(`ax${d+1}.bar(x + ${h.toFixed(2)}*width, data_${d+1}_${T}, width, label='${v.label||`Series ${T+1}`}')`)}),l.push(`ax${d+1}.set_xticks(x)`),l.push(`ax${d+1}.set_xticklabels(labels_${d+1})`),l.push(`ax${d+1}.legend()`)));else if(u.type==="line")l.push("# Line chart data"),l.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets.length>0&&(u.datasets.forEach((v,T)=>{l.push(`data_${d+1}_${T} = ${JSON.stringify(v.data||[])}`),l.push(`ax${d+1}.plot(labels_${d+1}, data_${d+1}_${T}, marker='o', label='${v.label||`Series ${T+1}`}')`)}),u.datasets.length>1&&l.push(`ax${d+1}.legend()`));else if(u.type==="pie"||u.type==="doughnut")l.push("# Pie chart data"),l.push(`labels_${d+1} = ${JSON.stringify(u.labels||[])}`),u.datasets&&u.datasets[0]&&(l.push(`data_${d+1} = ${JSON.stringify(u.datasets[0].data||[])}`),l.push(`ax${d+1}.pie(data_${d+1}, labels=labels_${d+1}, autopct='%1.1f%%')`));else if(u.type==="scatter"){if(l.push("# Scatter plot data"),u.datasets&&u.datasets[0]&&u.datasets[0].data){const v=u.datasets[0].data;l.push(`x_${d+1} = ${JSON.stringify(v.map(T=>T.x||T))}`),l.push(`y_${d+1} = ${JSON.stringify(v.map(T=>T.y||T))}`),l.push(`ax${d+1}.scatter(x_${d+1}, y_${d+1}, alpha=0.6)`)}}else l.push(`# ${u.type} chart - data structure:`),l.push(`chart_config_${d+1} = ${JSON.stringify(u,null,2).split(`
`).map((v,T)=>T===0?v:"# "+v).join(`
`)}`);l.push(""),l.push(`ax${d+1}.set_title('${(u.title||"").replace(/'/g,"\\'")}')`),(x=(p=(y=(f=u.options)==null?void 0:f.scales)==null?void 0:y.x)==null?void 0:p.title)!=null&&x.text&&l.push(`ax${d+1}.set_xlabel('${u.options.scales.x.title.text}')`),(_=(R=(A=(m=u.options)==null?void 0:m.scales)==null?void 0:A.y)==null?void 0:R.title)!=null&&_.text&&l.push(`ax${d+1}.set_ylabel('${u.options.scales.y.title.text}')`),l.push("plt.tight_layout()"),l.push(`fig${d+1}.savefig('figure_${d+1}.png', dpi=300, bbox_inches='tight')`),l.push(`print(f"Saved figure_${d+1}.png")`),l.push("")}),l.push("# Show all figures"),l.push("plt.show()"),l.push(""),l.push(`print("\\nGenerated ${c.length} figures successfully!")`),l.join(`
`)}function vb(c,o){const l=yb(c,o);br={chartData:c,pythonCode:l,isSynthetic:o,generatedAt:new Date().toISOString()},console.log(`[Chart Data] Stored ${c.length} chart configs and Python code (${l.length} chars)`)}function bm(){return br?{chartDataJson:JSON.stringify(br.chartData,null,2),pythonCode:br.pythonCode,isSynthetic:br.isSynthetic}:null}function xm(){br=null}let rl=null;function bb(c){rl=c,console.log("[FileApi] Stored data table CSV");try{localStorage.setItem("icis_datatable_csv",c)}catch{console.warn("[FileApi] Could not persist data table CSV to localStorage")}}function Sm(){if(rl)return rl;try{const c=localStorage.getItem("icis_datatable_csv");if(c)return rl=c,c}catch{console.warn("[FileApi] Could not read data table CSV from localStorage")}return null}function xb(c){console.log(`[FileApi] Stored validation report: ${c.verified} verified, ${c.discovered} discovered`);try{localStorage.setItem("icis_validation_report",JSON.stringify(c))}catch{console.warn("[FileApi] Could not persist validation report to localStorage")}}const xr=Object.freeze(Object.defineProperty({__proto__:null,analyzeDataWithPython:dl,backupAndClearFiles:om,checkBackendHealth:Ln,clearChartData:xm,clearCloudDataFile:dm,compileLaTeX:nm,createViewerLink:im,deleteCloudDataFile:um,downloadAllFigures:pm,downloadCompiledPdf:rm,executePythonScript:lm,generateQuickChartFigures:mb,getBibliographyContent:vm,getBibliographyForCompilation:ym,getChartDataContent:bm,getCloudDataFile:ji,getCurrentSessionFigures:hm,getDataFilePreview:fm,getDataTableCsv:Sm,getLastCompiledPdfBlob:du,getPdfDownloadUrl:am,getPngFiguresForCompilation:mm,openPaperViewer:sm,readCloudDataFile:Qc,refreshManifest:Jp,saveDataFile:Xc,saveFiles:em,savePaperFile:qc,saveReviewOutputs:tm,storeBibliography:gm,storeChartData:vb,storeDataTableCsv:bb,storePngFiguresForCompilation:gb,storeValidationReport:xb,uploadDataFileToCloud:cm},Symbol.toStringTag,{value:"Module"})),Sb=({logs:c,isProcessing:o,currentRound:l,isComplete:u=!1,onProceedToSupervisor:d,onAbort:f,onRestart:y,filePrefix:p,participantEmail:x})=>{const[m,A]=he.useState([]),[R,_]=he.useState(null),[v,T]=he.useState(!1),[h,E]=he.useState({}),w=async()=>{T(!0),_(null);const I=al(l),B=wi(l),F=ca(l,"icis_paper");if(!I||!B||!F){_("Missing files to save"),T(!1);return}const G=await tm(l,I,B,F,p,x);G.success?A(G.files||[]):_(G.error||"Failed to save files"),T(!1)},D=async(I,B)=>{var z;const F=(z=I.target.files)==null?void 0:z[0];if(!F)return;const G=await F.text();try{const re=JSON.parse(G);E(Z=>({...Z,[B]:re}))}catch(re){console.error(`Failed to parse ${B} file:`,re)}},L=()=>{const I=h.oversight||al(l),B=h.feedback||wi(l),F=ca(l,"icis_paper");I&&B&&F&&d&&d({oversight:I,feedback:B,paperContent:F,paperVersion:l})},P=u&&(h.oversight&&h.feedback||al(l)&&wi(l));return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Reviewing Paper (Round ",l,")"]}),i.jsx(su,{stageName:"Reviewer",isProcessing:o,canAbort:!0,canRestart:!o&&u,onAbort:f||(()=>{}),onRestart:y||(()=>{})})]}),i.jsx(Ci,{logs:c,height:"h-48"}),i.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4",children:"Review Process"}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${o?"bg-indigo-100 text-indigo-600":u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:o?i.jsx(cn,{size:14,className:"animate-spin"}):u?i.jsx(zt,{size:14}):"1"}),i.jsx("span",{children:"Step 1: Generating constructive feedback"})]}),i.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?i.jsx(zt,{size:14}):"2"}),i.jsx("span",{children:"Step 2: Producing oversight dashboard"})]}),i.jsxs("div",{className:`flex items-center gap-3 text-sm ${u?"":"text-slate-400"}`,children:[i.jsx("div",{className:`w-6 h-6 rounded-full flex items-center justify-center ${u?"bg-emerald-100 text-emerald-600":"bg-slate-100"}`,children:u?i.jsx(zt,{size:14}):"3"}),i.jsx("span",{children:"Step 3: Assessing trustworthiness"})]})]})]}),u&&i.jsx("div",{className:"mt-6",children:i.jsx(pb,{allOversight:iu(),compact:!0})}),u&&i.jsxs("div",{className:"mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6",children:[i.jsxs("h3",{className:"text-lg font-bold text-slate-800 mb-4 flex items-center gap-2",children:[i.jsx(sl,{className:"text-indigo-600",size:20}),"Review Complete - Download Outputs"]}),i.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"Download the review outputs below. These files will be used as input for the Supervisor stage. You can review and optionally modify them before proceeding."}),i.jsxs("button",{onClick:w,disabled:v,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all",children:[i.jsx(sl,{size:16,className:v?"animate-pulse":""}),v?"Downloading...":"Download Review Outputs"]}),i.jsxs("p",{className:"text-xs text-slate-500 text-center mt-2",children:["Downloads: oversight_v",l,".json, feedback_v",l,".json, icis_paper_v",l,".tex"]}),m.length>0&&i.jsxs("div",{className:"text-sm text-emerald-600 mt-3 text-center",children:["Downloaded: ",m.join(", ")]}),R&&i.jsxs("div",{className:"text-sm text-red-600 mt-3 text-center",children:["Error: ",R]}),i.jsxs("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:[i.jsxs("h4",{className:"text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2",children:[i.jsx(au,{size:16}),"Upload Modified Files (Optional)"]}),i.jsx("p",{className:"text-xs text-slate-500 mb-3",children:"If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage."}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Oversight File ",h.oversight&&i.jsx(zt,{size:12,className:"inline text-emerald-500"})]}),i.jsx("input",{type:"file",accept:".json",onChange:I=>D(I,"oversight"),className:"text-xs w-full"})]}),i.jsxs("div",{children:[i.jsxs("label",{className:"block text-xs font-medium text-slate-600 mb-1",children:["Feedback File ",h.feedback&&i.jsx(zt,{size:12,className:"inline text-emerald-500"})]}),i.jsx("input",{type:"file",accept:".json",onChange:I=>D(I,"feedback"),className:"text-xs w-full"})]})]})]}),i.jsx("div",{className:"border-t border-indigo-200 pt-4 mt-4",children:i.jsxs("button",{onClick:L,disabled:!P,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all",children:["Proceed to Supervisor Stage",i.jsx(Vp,{size:18})]})})]})]})},Eb=({currentRound:c,currentPaperVersion:o,lastFeedback:l,isProcessing:u,oversightData:d,allOversight:f,onAction:y,reviewOutputFiles:p})=>{var j,Q;const[x,m]=he.useState(""),[A,R]=he.useState(!1),[_,v]=he.useState(!1),[T,h]=he.useState(!1),E=(p==null?void 0:p.oversight)||d,w=p==null?void 0:p.feedback,D=()=>{qv(o,"icis_paper")},L=(p==null?void 0:p.paperContent)||ca(o,"icis_paper"),P=p?"Uploaded/Downloaded files":"Internal storage",I=(E==null?void 0:E.averageScore)||0,B=(E==null?void 0:E.errorCounts.majorErrors)||0,F=E?E.reviewScores.novelty<4||E.reviewScores.significance<4||E.reviewScores.methodologicalRigor<4||E.reviewScores.clarity<4||E.reviewScores.relevance<4:!1,G=E?E.trustworthiness.reliability<5||E.trustworthiness.benevolence<5||E.trustworthiness.goalAlignment<5:!1,z=((E==null?void 0:E.criticalAlerts.length)||0)>0,re=F||G||B>0||z,Z=!re&&I>=4;return i.jsxs("div",{className:"h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2",children:[i.jsx("div",{className:"bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),i.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DASHBOARD"}),i.jsxs("div",{className:"text-slate-300",children:["Revision Cycle: ",c]}),i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]})}),i.jsx("div",{className:`p-4 font-mono text-sm ${re?"bg-red-100 border-red-300":"bg-green-100 border-green-300"} border-x border-b`,children:i.jsxs("div",{className:"font-bold",children:["STATUS: ",re?"⚠️ ATTENTION NEEDED":Z?"✅ READY TO FINALIZE":"✓ ON TRACK"]})}),(E==null?void 0:E.improvementPotential)&&i.jsxs("div",{className:`p-4 font-mono text-sm border-x border-b ${E.improvementPotential==="exhausted"?"bg-blue-100 border-blue-300":E.improvementPotential==="low"?"bg-yellow-100 border-yellow-300":"bg-slate-100 border-slate-300"}`,children:[i.jsxs("div",{className:"font-bold mb-1",children:["IMPROVEMENT POTENTIAL: ",E.improvementPotential==="exhausted"?"🏁 EXHAUSTED - Paper has reached its potential":E.improvementPotential==="low"?"📉 LOW - Minor improvements only":E.improvementPotential==="medium"?"📊 MEDIUM - Moderate improvements possible":"📈 HIGH - Significant improvements possible"]}),E.convergenceReason&&i.jsxs("div",{className:"text-xs mt-2 text-slate-700",children:[i.jsx("span",{className:"font-semibold",children:"Reason: "}),E.convergenceReason]}),(E.improvementPotential==="exhausted"||E.canImprove===!1)&&i.jsx("div",{className:"text-xs mt-2 text-blue-700 font-medium",children:"ℹ️ The paper has reached its maximum quality given the available interview and data. You may finalize or provide additional source materials for further improvement."})]}),i.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[i.jsx(Ni,{size:16,className:"text-slate-600"}),i.jsx("span",{className:"font-medium text-slate-700",children:"Input Files:"}),i.jsx("span",{className:"text-slate-600",children:P})]}),i.jsx("button",{onClick:()=>h(!T),className:"text-xs text-indigo-600 hover:underline",children:T?"Hide Details":"Show Details"})]}),T&&i.jsx("div",{className:"mt-3 pt-3 border-t border-slate-200 text-xs font-mono",children:i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Oversight File:"}),i.jsxs("p",{className:"text-slate-600",children:["oversight_v",(E==null?void 0:E.version)||c,".json",(p==null?void 0:p.oversight)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Feedback File:"}),i.jsxs("p",{className:"text-slate-600",children:["feedback_v",(w==null?void 0:w.version)||c,".json",(p==null?void 0:p.feedback)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Paper File:"}),i.jsxs("p",{className:"text-slate-600",children:["icis_paper_v",(p==null?void 0:p.paperVersion)||o,".tex",(p==null?void 0:p.paperContent)&&i.jsx("span",{className:"text-emerald-600 ml-2",children:"(user-provided)"})]})]}),i.jsxs("div",{children:[i.jsx("p",{className:"font-semibold text-slate-700 mb-1",children:"Source:"}),i.jsx("p",{className:p?"text-emerald-600":"text-slate-600",children:p?"Explicit file handoff from Reviewer stage":"Internal localStorage"})]})]})})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 1: REVIEW SCORES PROGRESSION"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Criteria"}),f.map((S,Y)=>i.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",S.version]},Y)),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Latest Comment"})]})}),i.jsxs("tbody",{children:[["Novelty","Significance","Methodological Rigor","Clarity","Relevance"].map(S=>{var V;const Y=S==="Methodological Rigor"?"methodologicalRigor":S.toLowerCase();return i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:S}),f.map(($,ue)=>{const te=$.reviewScores[Y]||0;return i.jsx("td",{className:`text-center p-2 ${te<4?"text-red-600 font-bold":""}`,children:te},ue)}),i.jsx("td",{className:"p-2 text-slate-600 text-xs",children:E!=null&&E.reviewComments?((V=E.reviewComments[Y])==null?void 0:V.substring(0,30))+"...":"-"})]},S)}),i.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"AVERAGE"}),f.map((S,Y)=>i.jsx("td",{className:"text-center p-2",children:S.averageScore.toFixed(1)},Y)),i.jsx("td",{className:"p-2 text-xs",children:f.length>1?f[f.length-1].averageScore>f[0].averageScore?"📈 Improving":"📉 Declining":"Initial review"})]})]})]})})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 2: ERROR COUNTS PROGRESSION"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Category"}),f.map((S,Y)=>i.jsxs("th",{className:"text-center p-2 bg-slate-50",children:["v",S.version]},Y)),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Remaining Issues"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Major Errors"}),f.map((S,Y)=>i.jsx("td",{className:`text-center p-2 ${S.errorCounts.majorErrors>0?"text-red-600 font-bold":""}`,children:S.errorCounts.majorErrors},Y)),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:((j=E==null?void 0:E.errorDetails.majorErrors[0])==null?void 0:j.substring(0,30))||"None"})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Minor Errors"}),f.map((S,Y)=>i.jsx("td",{className:"text-center p-2",children:S.errorCounts.minorErrors},Y)),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:((Q=E==null?void 0:E.errorDetails.minorErrors[0])==null?void 0:Q.substring(0,30))||"None"})]}),i.jsxs("tr",{className:"border-t-2 border-slate-400 bg-slate-50 font-bold",children:[i.jsx("td",{className:"p-2",children:"TOTAL"}),f.map((S,Y)=>i.jsx("td",{className:"text-center p-2",children:S.errorCounts.majorErrors+S.errorCounts.minorErrors},Y)),i.jsx("td",{className:"p-2 text-xs",children:f.length>1?`${Math.round((1-(f[f.length-1].errorCounts.majorErrors+f[f.length-1].errorCounts.minorErrors)/Math.max(1,f[0].errorCounts.majorErrors+f[0].errorCounts.minorErrors))*100)}% reduction`:"-"})]})]})]})})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)"}),i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm font-mono border-collapse",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b-2 border-slate-300",children:[i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Dimension"}),i.jsx("th",{className:"text-center p-2 bg-slate-50",children:"Score"}),i.jsx("th",{className:"text-left p-2 bg-slate-50",children:"Rationale"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Reliability"}),i.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.reliability)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.reliability)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.reliabilityRationale)||"-"})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Benevolence"}),i.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.benevolence)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.benevolence)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.benevolenceRationale)||"-"})]}),i.jsxs("tr",{className:"border-b border-slate-200",children:[i.jsx("td",{className:"p-2 font-medium",children:"Goal Alignment"}),i.jsx("td",{className:`text-center p-2 ${((E==null?void 0:E.trustworthiness.goalAlignment)||0)<5?"text-red-600 font-bold":""}`,children:(E==null?void 0:E.trustworthiness.goalAlignment)||"-"}),i.jsx("td",{className:"p-2 text-xs text-slate-600",children:(E==null?void 0:E.trustworthiness.goalAlignmentRationale)||"-"})]})]})]})})]}),i.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${z?"bg-red-50 border-red-300":"bg-slate-50 border-slate-300"}`,children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:"CRITICAL ALERTS:"}),z?i.jsx("div",{className:"space-y-3",children:E==null?void 0:E.criticalAlerts.map((S,Y)=>i.jsxs("div",{className:"bg-white p-3 rounded border border-red-200",children:[i.jsxs("div",{className:"font-bold text-red-700",children:["CRITICAL ALERT ",S.number,": ",S.title," (BLOCKING ISSUE)"]}),i.jsxs("div",{className:"text-sm mt-2 space-y-1",children:[i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Status:"})," ",S.status]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Impact:"})," ",S.impact]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Details:"})," ",S.details]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Action Required:"})," ",S.actionRequired]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium",children:"Consequence:"})," ",S.consequence]})]})]},Y))}):i.jsx("p",{className:"text-green-700 font-mono",children:"None - paper is progressing well"})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("h3",{className:"font-bold text-slate-800 font-mono",children:"LATEST FEEDBACK SUMMARY:"}),i.jsxs("button",{onClick:()=>R(!A),className:"text-xs text-indigo-600 hover:underline flex items-center gap-1",children:[i.jsx(Hc,{size:12}),A?"Hide Full":"Show Full"]})]}),A?i.jsx("div",{className:"text-sm text-slate-700 space-y-3",children:w?i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Summary:"}),i.jsx("p",{children:w.summary||"No summary available."})]}),w.majorIssues&&w.majorIssues.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-red-600",children:"Major Issues:"}),i.jsx("ul",{className:"list-disc list-inside",children:w.majorIssues.map((S,Y)=>i.jsx("li",{children:S},Y))})]}),w.suggestions&&w.suggestions.length>0&&i.jsxs("div",{children:[i.jsx("p",{className:"font-medium",children:"Suggestions:"}),i.jsx("ul",{className:"list-disc list-inside",children:w.suggestions.map((S,Y)=>i.jsx("li",{children:S},Y))})]})]}):i.jsx("p",{children:l||"No feedback generated."})}):i.jsx("p",{className:"text-sm text-slate-700 line-clamp-3",children:(w==null?void 0:w.summary)||l||"No feedback generated."})]}),i.jsxs("div",{className:`border p-4 mt-4 rounded-lg ${re?"bg-amber-50 border-amber-300":"bg-green-50 border-green-300"}`,children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"RECOMMENDATION:"}),re?i.jsxs("div",{children:[i.jsxs("p",{className:"font-medium",children:["Continue to revision cycle ",c+1]}),i.jsxs("p",{className:"text-sm text-slate-600 mt-1",children:["Reason: ",F?"Review scores below threshold (< 4)":B>0?`${B} major error(s) remaining`:G?"Trustworthiness scores below threshold (< 5)":"Critical alerts require attention"]}),i.jsxs("div",{className:"mt-2 text-sm",children:[i.jsx("p",{className:"font-medium",children:"Priority actions:"}),i.jsx("ol",{className:"list-decimal list-inside text-slate-600",children:E==null?void 0:E.errorDetails.majorErrors.slice(0,3).map((S,Y)=>i.jsx("li",{children:S},Y))})]})]}):i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-green-700",children:"Paper is ready for finalization"}),i.jsx("p",{className:"text-sm text-slate-600 mt-1",children:"Reason: All quality thresholds met"}),i.jsxs("ul",{className:"text-sm text-slate-600 mt-2 list-disc list-inside",children:[i.jsxs("li",{children:["Average review score: ",I.toFixed(1),"/5"]}),i.jsx("li",{children:"All trustworthiness scores ≥ 5"}),i.jsx("li",{children:"No major errors remaining"}),i.jsx("li",{children:"No critical alerts"})]})]})]}),i.jsxs("div",{className:"bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm",children:[i.jsxs("div",{className:"text-center mb-4",children:[i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)}),i.jsx("div",{className:"text-lg font-bold my-2",children:"SUPERVISOR DECISION"}),i.jsx("div",{className:"text-slate-400",children:"=".repeat(70)})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[i.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[i.jsx("p",{className:"font-bold text-amber-400",children:"OPTION A: CONTINUE TO REVISION"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Sends paper to ICISreviser for another iteration"}),i.jsx("li",{children:"• Current feedback will guide improvements"}),i.jsx("li",{children:"• Add your directives below"})]})]}),i.jsxs("div",{className:"bg-slate-800 p-3 rounded",children:[i.jsx("p",{className:"font-bold text-green-400",children:"OPTION B: FINALIZE PAPER"}),i.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1",children:[i.jsx("li",{children:"• Sends paper to ICISfinalize"}),i.jsx("li",{children:"• Paper will be prepared for submission"}),i.jsx("li",{children:"• No further revisions will be made"})]})]})]})]}),i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("h3",{className:"font-bold text-slate-800 mb-2 font-mono",children:"YOUR DIRECTIVES (for Option A):"}),i.jsx("textarea",{className:"w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono",rows:4,placeholder:`Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations`,value:x,onChange:S=>m(S.target.value)})]}),i.jsxs("div",{className:"bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsx("p",{className:"font-mono text-sm text-center mb-4",children:"YOUR DECISION:"}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("button",{onClick:()=>y("revise",x),disabled:u,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] CONTINUE TO REVISION"}),i.jsx("button",{onClick:()=>y("finalize"),disabled:u,className:"flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono",children:"[ ] FINALIZE PAPER"})]})]}),i.jsxs("div",{className:"mt-6 flex justify-end gap-4",children:[i.jsxs("button",{onClick:()=>v(!_),className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[i.jsx(Hc,{size:14})," ",_?"Hide":"View"," Paper Draft"]}),i.jsxs("button",{onClick:D,className:"text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1",children:[i.jsx(sl,{size:14})," Download (.tex)"]})]}),_&&L&&i.jsxs("div",{className:"bg-white border border-slate-300 p-4 mt-4 rounded-lg",children:[i.jsxs("h3",{className:"font-bold text-slate-800 mb-3 font-mono",children:["PAPER PREVIEW (v",o,"):"]}),i.jsx("div",{className:"max-h-96 overflow-y-auto",children:i.jsx("pre",{className:"whitespace-pre-wrap font-mono text-xs text-slate-700",children:L})})]})]})},wb=({logs:c,isProcessing:o,currentPaperVersion:l,paperContent:u,onAbort:d,onRestart:f})=>i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[i.jsx(cn,{className:`text-indigo-600 ${o?"animate-spin":""}`}),"Revising Paper (v",l," → v",(l||0)+1,")"]}),i.jsx(su,{stageName:"Reviser",isProcessing:o,canAbort:!0,canRestart:!o,onAbort:d||(()=>{}),onRestart:f||(()=>{})})]}),i.jsx(Ci,{logs:c,height:"h-48"}),i.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("h3",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:"Revision Preview"}),i.jsx("span",{className:"text-xs text-slate-400",children:"Preserving all tables, figures, and results"})]}),i.jsx("div",{className:"prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2",children:u?i.jsx("pre",{className:"whitespace-pre-wrap font-sans text-slate-600 text-sm",children:u}):i.jsx("p",{className:"text-slate-400 italic",children:"Revising content..."})})]})]});function Js(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Uc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var jp;function Ab(){return jp||(jp=1,(function(c,o){(function(l){c.exports=l()})(function(){return(function l(u,d,f){function y(m,A){if(!d[m]){if(!u[m]){var R=typeof Js=="function"&&Js;if(!A&&R)return R(m,!0);if(p)return p(m,!0);var _=new Error("Cannot find module '"+m+"'");throw _.code="MODULE_NOT_FOUND",_}var v=d[m]={exports:{}};u[m][0].call(v.exports,function(T){var h=u[m][1][T];return y(h||T)},v,v.exports,l,u,d,f)}return d[m].exports}for(var p=typeof Js=="function"&&Js,x=0;x<f.length;x++)y(f[x]);return y})({1:[function(l,u,d){var f=l("./utils"),y=l("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";d.encode=function(x){for(var m,A,R,_,v,T,h,E=[],w=0,D=x.length,L=D,P=f.getTypeOf(x)!=="string";w<x.length;)L=D-w,R=P?(m=x[w++],A=w<D?x[w++]:0,w<D?x[w++]:0):(m=x.charCodeAt(w++),A=w<D?x.charCodeAt(w++):0,w<D?x.charCodeAt(w++):0),_=m>>2,v=(3&m)<<4|A>>4,T=1<L?(15&A)<<2|R>>6:64,h=2<L?63&R:64,E.push(p.charAt(_)+p.charAt(v)+p.charAt(T)+p.charAt(h));return E.join("")},d.decode=function(x){var m,A,R,_,v,T,h=0,E=0,w="data:";if(x.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var D,L=3*(x=x.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(x.charAt(x.length-1)===p.charAt(64)&&L--,x.charAt(x.length-2)===p.charAt(64)&&L--,L%1!=0)throw new Error("Invalid base64 input, bad content length.");for(D=y.uint8array?new Uint8Array(0|L):new Array(0|L);h<x.length;)m=p.indexOf(x.charAt(h++))<<2|(_=p.indexOf(x.charAt(h++)))>>4,A=(15&_)<<4|(v=p.indexOf(x.charAt(h++)))>>2,R=(3&v)<<6|(T=p.indexOf(x.charAt(h++))),D[E++]=m,v!==64&&(D[E++]=A),T!==64&&(D[E++]=R);return D}},{"./support":30,"./utils":32}],2:[function(l,u,d){var f=l("./external"),y=l("./stream/DataWorker"),p=l("./stream/Crc32Probe"),x=l("./stream/DataLengthProbe");function m(A,R,_,v,T){this.compressedSize=A,this.uncompressedSize=R,this.crc32=_,this.compression=v,this.compressedContent=T}m.prototype={getContentWorker:function(){var A=new y(f.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new x("data_length")),R=this;return A.on("end",function(){if(this.streamInfo.data_length!==R.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),A},getCompressedWorker:function(){return new y(f.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},m.createWorkerFrom=function(A,R,_){return A.pipe(new p).pipe(new x("uncompressedSize")).pipe(R.compressWorker(_)).pipe(new x("compressedSize")).withStreamInfo("compression",R)},u.exports=m},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,u,d){var f=l("./stream/GenericWorker");d.STORE={magic:"\0\0",compressWorker:function(){return new f("STORE compression")},uncompressWorker:function(){return new f("STORE decompression")}},d.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,u,d){var f=l("./utils"),y=(function(){for(var p,x=[],m=0;m<256;m++){p=m;for(var A=0;A<8;A++)p=1&p?3988292384^p>>>1:p>>>1;x[m]=p}return x})();u.exports=function(p,x){return p!==void 0&&p.length?f.getTypeOf(p)!=="string"?(function(m,A,R,_){var v=y,T=_+R;m^=-1;for(var h=_;h<T;h++)m=m>>>8^v[255&(m^A[h])];return-1^m})(0|x,p,p.length,0):(function(m,A,R,_){var v=y,T=_+R;m^=-1;for(var h=_;h<T;h++)m=m>>>8^v[255&(m^A.charCodeAt(h))];return-1^m})(0|x,p,p.length,0):0}},{"./utils":32}],5:[function(l,u,d){d.base64=!1,d.binary=!1,d.dir=!1,d.createFolders=!0,d.date=null,d.compression=null,d.compressionOptions=null,d.comment=null,d.unixPermissions=null,d.dosPermissions=null},{}],6:[function(l,u,d){var f=null;f=typeof Promise<"u"?Promise:l("lie"),u.exports={Promise:f}},{lie:37}],7:[function(l,u,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",y=l("pako"),p=l("./utils"),x=l("./stream/GenericWorker"),m=f?"uint8array":"array";function A(R,_){x.call(this,"FlateWorker/"+R),this._pako=null,this._pakoAction=R,this._pakoOptions=_,this.meta={}}d.magic="\b\0",p.inherits(A,x),A.prototype.processChunk=function(R){this.meta=R.meta,this._pako===null&&this._createPako(),this._pako.push(p.transformTo(m,R.data),!1)},A.prototype.flush=function(){x.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},A.prototype.cleanUp=function(){x.prototype.cleanUp.call(this),this._pako=null},A.prototype._createPako=function(){this._pako=new y[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var R=this;this._pako.onData=function(_){R.push({data:_,meta:R.meta})}},d.compressWorker=function(R){return new A("Deflate",R)},d.uncompressWorker=function(){return new A("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,u,d){function f(v,T){var h,E="";for(h=0;h<T;h++)E+=String.fromCharCode(255&v),v>>>=8;return E}function y(v,T,h,E,w,D){var L,P,I=v.file,B=v.compression,F=D!==m.utf8encode,G=p.transformTo("string",D(I.name)),z=p.transformTo("string",m.utf8encode(I.name)),re=I.comment,Z=p.transformTo("string",D(re)),j=p.transformTo("string",m.utf8encode(re)),Q=z.length!==I.name.length,S=j.length!==re.length,Y="",V="",$="",ue=I.dir,te=I.date,ve={crc32:0,compressedSize:0,uncompressedSize:0};T&&!h||(ve.crc32=v.crc32,ve.compressedSize=v.compressedSize,ve.uncompressedSize=v.uncompressedSize);var C=0;T&&(C|=8),F||!Q&&!S||(C|=2048);var k=0,se=0;ue&&(k|=16),w==="UNIX"?(se=798,k|=(function(oe,we){var Ie=oe;return oe||(Ie=we?16893:33204),(65535&Ie)<<16})(I.unixPermissions,ue)):(se=20,k|=(function(oe){return 63&(oe||0)})(I.dosPermissions)),L=te.getUTCHours(),L<<=6,L|=te.getUTCMinutes(),L<<=5,L|=te.getUTCSeconds()/2,P=te.getUTCFullYear()-1980,P<<=4,P|=te.getUTCMonth()+1,P<<=5,P|=te.getUTCDate(),Q&&(V=f(1,1)+f(A(G),4)+z,Y+="up"+f(V.length,2)+V),S&&($=f(1,1)+f(A(Z),4)+j,Y+="uc"+f($.length,2)+$);var le="";return le+=`
\0`,le+=f(C,2),le+=B.magic,le+=f(L,2),le+=f(P,2),le+=f(ve.crc32,4),le+=f(ve.compressedSize,4),le+=f(ve.uncompressedSize,4),le+=f(G.length,2),le+=f(Y.length,2),{fileRecord:R.LOCAL_FILE_HEADER+le+G+Y,dirRecord:R.CENTRAL_FILE_HEADER+f(se,2)+le+f(Z.length,2)+"\0\0\0\0"+f(k,4)+f(E,4)+G+Y+Z}}var p=l("../utils"),x=l("../stream/GenericWorker"),m=l("../utf8"),A=l("../crc32"),R=l("../signature");function _(v,T,h,E){x.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=T,this.zipPlatform=h,this.encodeFileName=E,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}p.inherits(_,x),_.prototype.push=function(v){var T=v.meta.percent||0,h=this.entriesCount,E=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,x.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:h?(T+100*(h-E-1))/h:100}}))},_.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var T=this.streamFiles&&!v.file.dir;if(T){var h=y(v,T,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},_.prototype.closedSource=function(v){this.accumulate=!1;var T=this.streamFiles&&!v.file.dir,h=y(v,T,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),T)this.push({data:(function(E){return R.DATA_DESCRIPTOR+f(E.crc32,4)+f(E.compressedSize,4)+f(E.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},_.prototype.flush=function(){for(var v=this.bytesWritten,T=0;T<this.dirRecords.length;T++)this.push({data:this.dirRecords[T],meta:{percent:100}});var h=this.bytesWritten-v,E=(function(w,D,L,P,I){var B=p.transformTo("string",I(P));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(w,2)+f(w,2)+f(D,4)+f(L,4)+f(B.length,2)+B})(this.dirRecords.length,h,v,this.zipComment,this.encodeFileName);this.push({data:E,meta:{percent:100}})},_.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},_.prototype.registerPrevious=function(v){this._sources.push(v);var T=this;return v.on("data",function(h){T.processChunk(h)}),v.on("end",function(){T.closedSource(T.previous.streamInfo),T._sources.length?T.prepareNextSource():T.end()}),v.on("error",function(h){T.error(h)}),this},_.prototype.resume=function(){return!!x.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},_.prototype.error=function(v){var T=this._sources;if(!x.prototype.error.call(this,v))return!1;for(var h=0;h<T.length;h++)try{T[h].error(v)}catch{}return!0},_.prototype.lock=function(){x.prototype.lock.call(this);for(var v=this._sources,T=0;T<v.length;T++)v[T].lock()},u.exports=_},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,u,d){var f=l("../compressions"),y=l("./ZipFileWorker");d.generateWorker=function(p,x,m){var A=new y(x.streamFiles,m,x.platform,x.encodeFileName),R=0;try{p.forEach(function(_,v){R++;var T=(function(D,L){var P=D||L,I=f[P];if(!I)throw new Error(P+" is not a valid compression method !");return I})(v.options.compression,x.compression),h=v.options.compressionOptions||x.compressionOptions||{},E=v.dir,w=v.date;v._compressWorker(T,h).withStreamInfo("file",{name:_,dir:E,date:w,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(A)}),A.entriesCount=R}catch(_){A.error(_)}return A}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,u,d){function f(){if(!(this instanceof f))return new f;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var y=new f;for(var p in this)typeof this[p]!="function"&&(y[p]=this[p]);return y}}(f.prototype=l("./object")).loadAsync=l("./load"),f.support=l("./support"),f.defaults=l("./defaults"),f.version="3.10.1",f.loadAsync=function(y,p){return new f().loadAsync(y,p)},f.external=l("./external"),u.exports=f},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,u,d){var f=l("./utils"),y=l("./external"),p=l("./utf8"),x=l("./zipEntries"),m=l("./stream/Crc32Probe"),A=l("./nodejsUtils");function R(_){return new y.Promise(function(v,T){var h=_.decompressed.getContentWorker().pipe(new m);h.on("error",function(E){T(E)}).on("end",function(){h.streamInfo.crc32!==_.decompressed.crc32?T(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}u.exports=function(_,v){var T=this;return v=f.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:p.utf8decode}),A.isNode&&A.isStream(_)?y.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):f.prepareContent("the loaded zip file",_,!0,v.optimizedBinaryString,v.base64).then(function(h){var E=new x(v);return E.load(h),E}).then(function(h){var E=[y.Promise.resolve(h)],w=h.files;if(v.checkCRC32)for(var D=0;D<w.length;D++)E.push(R(w[D]));return y.Promise.all(E)}).then(function(h){for(var E=h.shift(),w=E.files,D=0;D<w.length;D++){var L=w[D],P=L.fileNameStr,I=f.resolve(L.fileNameStr);T.file(I,L.decompressed,{binary:!0,optimizedBinaryString:!0,date:L.date,dir:L.dir,comment:L.fileCommentStr.length?L.fileCommentStr:null,unixPermissions:L.unixPermissions,dosPermissions:L.dosPermissions,createFolders:v.createFolders}),L.dir||(T.file(I).unsafeOriginalName=P)}return E.zipComment.length&&(T.comment=E.zipComment),T})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,u,d){var f=l("../utils"),y=l("../stream/GenericWorker");function p(x,m){y.call(this,"Nodejs stream input adapter for "+x),this._upstreamEnded=!1,this._bindStream(m)}f.inherits(p,y),p.prototype._bindStream=function(x){var m=this;(this._stream=x).pause(),x.on("data",function(A){m.push({data:A,meta:{percent:0}})}).on("error",function(A){m.isPaused?this.generatedError=A:m.error(A)}).on("end",function(){m.isPaused?m._upstreamEnded=!0:m.end()})},p.prototype.pause=function(){return!!y.prototype.pause.call(this)&&(this._stream.pause(),!0)},p.prototype.resume=function(){return!!y.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},u.exports=p},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,u,d){var f=l("readable-stream").Readable;function y(p,x,m){f.call(this,x),this._helper=p;var A=this;p.on("data",function(R,_){A.push(R)||A._helper.pause(),m&&m(_)}).on("error",function(R){A.emit("error",R)}).on("end",function(){A.push(null)})}l("../utils").inherits(y,f),y.prototype._read=function(){this._helper.resume()},u.exports=y},{"../utils":32,"readable-stream":16}],14:[function(l,u,d){u.exports={isNode:typeof Buffer<"u",newBufferFrom:function(f,y){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(f,y);if(typeof f=="number")throw new Error('The "data" argument must not be a number');return new Buffer(f,y)},allocBuffer:function(f){if(Buffer.alloc)return Buffer.alloc(f);var y=new Buffer(f);return y.fill(0),y},isBuffer:function(f){return Buffer.isBuffer(f)},isStream:function(f){return f&&typeof f.on=="function"&&typeof f.pause=="function"&&typeof f.resume=="function"}}},{}],15:[function(l,u,d){function f(I,B,F){var G,z=p.getTypeOf(B),re=p.extend(F||{},A);re.date=re.date||new Date,re.compression!==null&&(re.compression=re.compression.toUpperCase()),typeof re.unixPermissions=="string"&&(re.unixPermissions=parseInt(re.unixPermissions,8)),re.unixPermissions&&16384&re.unixPermissions&&(re.dir=!0),re.dosPermissions&&16&re.dosPermissions&&(re.dir=!0),re.dir&&(I=w(I)),re.createFolders&&(G=E(I))&&D.call(this,G,!0);var Z=z==="string"&&re.binary===!1&&re.base64===!1;F&&F.binary!==void 0||(re.binary=!Z),(B instanceof R&&B.uncompressedSize===0||re.dir||!B||B.length===0)&&(re.base64=!1,re.binary=!0,B="",re.compression="STORE",z="string");var j=null;j=B instanceof R||B instanceof x?B:T.isNode&&T.isStream(B)?new h(I,B):p.prepareContent(I,B,re.binary,re.optimizedBinaryString,re.base64);var Q=new _(I,j,re);this.files[I]=Q}var y=l("./utf8"),p=l("./utils"),x=l("./stream/GenericWorker"),m=l("./stream/StreamHelper"),A=l("./defaults"),R=l("./compressedObject"),_=l("./zipObject"),v=l("./generate"),T=l("./nodejsUtils"),h=l("./nodejs/NodejsStreamInputAdapter"),E=function(I){I.slice(-1)==="/"&&(I=I.substring(0,I.length-1));var B=I.lastIndexOf("/");return 0<B?I.substring(0,B):""},w=function(I){return I.slice(-1)!=="/"&&(I+="/"),I},D=function(I,B){return B=B!==void 0?B:A.createFolders,I=w(I),this.files[I]||f.call(this,I,null,{dir:!0,createFolders:B}),this.files[I]};function L(I){return Object.prototype.toString.call(I)==="[object RegExp]"}var P={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(I){var B,F,G;for(B in this.files)G=this.files[B],(F=B.slice(this.root.length,B.length))&&B.slice(0,this.root.length)===this.root&&I(F,G)},filter:function(I){var B=[];return this.forEach(function(F,G){I(F,G)&&B.push(G)}),B},file:function(I,B,F){if(arguments.length!==1)return I=this.root+I,f.call(this,I,B,F),this;if(L(I)){var G=I;return this.filter(function(re,Z){return!Z.dir&&G.test(re)})}var z=this.files[this.root+I];return z&&!z.dir?z:null},folder:function(I){if(!I)return this;if(L(I))return this.filter(function(z,re){return re.dir&&I.test(z)});var B=this.root+I,F=D.call(this,B),G=this.clone();return G.root=F.name,G},remove:function(I){I=this.root+I;var B=this.files[I];if(B||(I.slice(-1)!=="/"&&(I+="/"),B=this.files[I]),B&&!B.dir)delete this.files[I];else for(var F=this.filter(function(z,re){return re.name.slice(0,I.length)===I}),G=0;G<F.length;G++)delete this.files[F[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(I){var B,F={};try{if((F=p.extend(I||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:y.utf8encode})).type=F.type.toLowerCase(),F.compression=F.compression.toUpperCase(),F.type==="binarystring"&&(F.type="string"),!F.type)throw new Error("No output type specified.");p.checkSupport(F.type),F.platform!=="darwin"&&F.platform!=="freebsd"&&F.platform!=="linux"&&F.platform!=="sunos"||(F.platform="UNIX"),F.platform==="win32"&&(F.platform="DOS");var G=F.comment||this.comment||"";B=v.generateWorker(this,F,G)}catch(z){(B=new x("error")).error(z)}return new m(B,F.type||"string",F.mimeType)},generateAsync:function(I,B){return this.generateInternalStream(I).accumulate(B)},generateNodeStream:function(I,B){return(I=I||{}).type||(I.type="nodebuffer"),this.generateInternalStream(I).toNodejsStream(B)}};u.exports=P},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,u,d){u.exports=l("stream")},{stream:void 0}],17:[function(l,u,d){var f=l("./DataReader");function y(p){f.call(this,p);for(var x=0;x<this.data.length;x++)p[x]=255&p[x]}l("../utils").inherits(y,f),y.prototype.byteAt=function(p){return this.data[this.zero+p]},y.prototype.lastIndexOfSignature=function(p){for(var x=p.charCodeAt(0),m=p.charCodeAt(1),A=p.charCodeAt(2),R=p.charCodeAt(3),_=this.length-4;0<=_;--_)if(this.data[_]===x&&this.data[_+1]===m&&this.data[_+2]===A&&this.data[_+3]===R)return _-this.zero;return-1},y.prototype.readAndCheckSignature=function(p){var x=p.charCodeAt(0),m=p.charCodeAt(1),A=p.charCodeAt(2),R=p.charCodeAt(3),_=this.readData(4);return x===_[0]&&m===_[1]&&A===_[2]&&R===_[3]},y.prototype.readData=function(p){if(this.checkOffset(p),p===0)return[];var x=this.data.slice(this.zero+this.index,this.zero+this.index+p);return this.index+=p,x},u.exports=y},{"../utils":32,"./DataReader":18}],18:[function(l,u,d){var f=l("../utils");function y(p){this.data=p,this.length=p.length,this.index=0,this.zero=0}y.prototype={checkOffset:function(p){this.checkIndex(this.index+p)},checkIndex:function(p){if(this.length<this.zero+p||p<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+p+"). Corrupted zip ?")},setIndex:function(p){this.checkIndex(p),this.index=p},skip:function(p){this.setIndex(this.index+p)},byteAt:function(){},readInt:function(p){var x,m=0;for(this.checkOffset(p),x=this.index+p-1;x>=this.index;x--)m=(m<<8)+this.byteAt(x);return this.index+=p,m},readString:function(p){return f.transformTo("string",this.readData(p))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var p=this.readInt(4);return new Date(Date.UTC(1980+(p>>25&127),(p>>21&15)-1,p>>16&31,p>>11&31,p>>5&63,(31&p)<<1))}},u.exports=y},{"../utils":32}],19:[function(l,u,d){var f=l("./Uint8ArrayReader");function y(p){f.call(this,p)}l("../utils").inherits(y,f),y.prototype.readData=function(p){this.checkOffset(p);var x=this.data.slice(this.zero+this.index,this.zero+this.index+p);return this.index+=p,x},u.exports=y},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,u,d){var f=l("./DataReader");function y(p){f.call(this,p)}l("../utils").inherits(y,f),y.prototype.byteAt=function(p){return this.data.charCodeAt(this.zero+p)},y.prototype.lastIndexOfSignature=function(p){return this.data.lastIndexOf(p)-this.zero},y.prototype.readAndCheckSignature=function(p){return p===this.readData(4)},y.prototype.readData=function(p){this.checkOffset(p);var x=this.data.slice(this.zero+this.index,this.zero+this.index+p);return this.index+=p,x},u.exports=y},{"../utils":32,"./DataReader":18}],21:[function(l,u,d){var f=l("./ArrayReader");function y(p){f.call(this,p)}l("../utils").inherits(y,f),y.prototype.readData=function(p){if(this.checkOffset(p),p===0)return new Uint8Array(0);var x=this.data.subarray(this.zero+this.index,this.zero+this.index+p);return this.index+=p,x},u.exports=y},{"../utils":32,"./ArrayReader":17}],22:[function(l,u,d){var f=l("../utils"),y=l("../support"),p=l("./ArrayReader"),x=l("./StringReader"),m=l("./NodeBufferReader"),A=l("./Uint8ArrayReader");u.exports=function(R){var _=f.getTypeOf(R);return f.checkSupport(_),_!=="string"||y.uint8array?_==="nodebuffer"?new m(R):y.uint8array?new A(f.transformTo("uint8array",R)):new p(f.transformTo("array",R)):new x(R)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,u,d){d.LOCAL_FILE_HEADER="PK",d.CENTRAL_FILE_HEADER="PK",d.CENTRAL_DIRECTORY_END="PK",d.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",d.ZIP64_CENTRAL_DIRECTORY_END="PK",d.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,u,d){var f=l("./GenericWorker"),y=l("../utils");function p(x){f.call(this,"ConvertWorker to "+x),this.destType=x}y.inherits(p,f),p.prototype.processChunk=function(x){this.push({data:y.transformTo(this.destType,x.data),meta:x.meta})},u.exports=p},{"../utils":32,"./GenericWorker":28}],25:[function(l,u,d){var f=l("./GenericWorker"),y=l("../crc32");function p(){f.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(p,f),p.prototype.processChunk=function(x){this.streamInfo.crc32=y(x.data,this.streamInfo.crc32||0),this.push(x)},u.exports=p},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,u,d){var f=l("../utils"),y=l("./GenericWorker");function p(x){y.call(this,"DataLengthProbe for "+x),this.propName=x,this.withStreamInfo(x,0)}f.inherits(p,y),p.prototype.processChunk=function(x){if(x){var m=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=m+x.data.length}y.prototype.processChunk.call(this,x)},u.exports=p},{"../utils":32,"./GenericWorker":28}],27:[function(l,u,d){var f=l("../utils"),y=l("./GenericWorker");function p(x){y.call(this,"DataWorker");var m=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,x.then(function(A){m.dataIsReady=!0,m.data=A,m.max=A&&A.length||0,m.type=f.getTypeOf(A),m.isPaused||m._tickAndRepeat()},function(A){m.error(A)})}f.inherits(p,y),p.prototype.cleanUp=function(){y.prototype.cleanUp.call(this),this.data=null},p.prototype.resume=function(){return!!y.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,f.delay(this._tickAndRepeat,[],this)),!0)},p.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(f.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},p.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var x=null,m=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":x=this.data.substring(this.index,m);break;case"uint8array":x=this.data.subarray(this.index,m);break;case"array":case"nodebuffer":x=this.data.slice(this.index,m)}return this.index=m,this.push({data:x,meta:{percent:this.max?this.index/this.max*100:0}})},u.exports=p},{"../utils":32,"./GenericWorker":28}],28:[function(l,u,d){function f(y){this.name=y||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}f.prototype={push:function(y){this.emit("data",y)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(y){this.emit("error",y)}return!0},error:function(y){return!this.isFinished&&(this.isPaused?this.generatedError=y:(this.isFinished=!0,this.emit("error",y),this.previous&&this.previous.error(y),this.cleanUp()),!0)},on:function(y,p){return this._listeners[y].push(p),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(y,p){if(this._listeners[y])for(var x=0;x<this._listeners[y].length;x++)this._listeners[y][x].call(this,p)},pipe:function(y){return y.registerPrevious(this)},registerPrevious:function(y){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=y.streamInfo,this.mergeStreamInfo(),this.previous=y;var p=this;return y.on("data",function(x){p.processChunk(x)}),y.on("end",function(){p.end()}),y.on("error",function(x){p.error(x)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var y=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),y=!0),this.previous&&this.previous.resume(),!y},flush:function(){},processChunk:function(y){this.push(y)},withStreamInfo:function(y,p){return this.extraStreamInfo[y]=p,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var y in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,y)&&(this.streamInfo[y]=this.extraStreamInfo[y])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var y="Worker "+this.name;return this.previous?this.previous+" -> "+y:y}},u.exports=f},{}],29:[function(l,u,d){var f=l("../utils"),y=l("./ConvertWorker"),p=l("./GenericWorker"),x=l("../base64"),m=l("../support"),A=l("../external"),R=null;if(m.nodestream)try{R=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function _(T,h){return new A.Promise(function(E,w){var D=[],L=T._internalType,P=T._outputType,I=T._mimeType;T.on("data",function(B,F){D.push(B),h&&h(F)}).on("error",function(B){D=[],w(B)}).on("end",function(){try{var B=(function(F,G,z){switch(F){case"blob":return f.newBlob(f.transformTo("arraybuffer",G),z);case"base64":return x.encode(G);default:return f.transformTo(F,G)}})(P,(function(F,G){var z,re=0,Z=null,j=0;for(z=0;z<G.length;z++)j+=G[z].length;switch(F){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(Z=new Uint8Array(j),z=0;z<G.length;z++)Z.set(G[z],re),re+=G[z].length;return Z;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+F+"'")}})(L,D),I);E(B)}catch(F){w(F)}D=[]}).resume()})}function v(T,h,E){var w=h;switch(h){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=h,this._mimeType=E,f.checkSupport(w),this._worker=T.pipe(new y(w)),T.lock()}catch(D){this._worker=new p("error"),this._worker.error(D)}}v.prototype={accumulate:function(T){return _(this,T)},on:function(T,h){var E=this;return T==="data"?this._worker.on(T,function(w){h.call(E,w.data,w.meta)}):this._worker.on(T,function(){f.delay(h,arguments,E)}),this},resume:function(){return f.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(T){if(f.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new R(this,{objectMode:this._outputType!=="nodebuffer"},T)}},u.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,u,d){if(d.base64=!0,d.array=!0,d.string=!0,d.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",d.nodebuffer=typeof Buffer<"u",d.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")d.blob=!1;else{var f=new ArrayBuffer(0);try{d.blob=new Blob([f],{type:"application/zip"}).size===0}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);y.append(f),d.blob=y.getBlob("application/zip").size===0}catch{d.blob=!1}}}try{d.nodestream=!!l("readable-stream").Readable}catch{d.nodestream=!1}},{"readable-stream":16}],31:[function(l,u,d){for(var f=l("./utils"),y=l("./support"),p=l("./nodejsUtils"),x=l("./stream/GenericWorker"),m=new Array(256),A=0;A<256;A++)m[A]=252<=A?6:248<=A?5:240<=A?4:224<=A?3:192<=A?2:1;m[254]=m[254]=1;function R(){x.call(this,"utf-8 decode"),this.leftOver=null}function _(){x.call(this,"utf-8 encode")}d.utf8encode=function(v){return y.nodebuffer?p.newBufferFrom(v,"utf-8"):(function(T){var h,E,w,D,L,P=T.length,I=0;for(D=0;D<P;D++)(64512&(E=T.charCodeAt(D)))==55296&&D+1<P&&(64512&(w=T.charCodeAt(D+1)))==56320&&(E=65536+(E-55296<<10)+(w-56320),D++),I+=E<128?1:E<2048?2:E<65536?3:4;for(h=y.uint8array?new Uint8Array(I):new Array(I),D=L=0;L<I;D++)(64512&(E=T.charCodeAt(D)))==55296&&D+1<P&&(64512&(w=T.charCodeAt(D+1)))==56320&&(E=65536+(E-55296<<10)+(w-56320),D++),E<128?h[L++]=E:(E<2048?h[L++]=192|E>>>6:(E<65536?h[L++]=224|E>>>12:(h[L++]=240|E>>>18,h[L++]=128|E>>>12&63),h[L++]=128|E>>>6&63),h[L++]=128|63&E);return h})(v)},d.utf8decode=function(v){return y.nodebuffer?f.transformTo("nodebuffer",v).toString("utf-8"):(function(T){var h,E,w,D,L=T.length,P=new Array(2*L);for(h=E=0;h<L;)if((w=T[h++])<128)P[E++]=w;else if(4<(D=m[w]))P[E++]=65533,h+=D-1;else{for(w&=D===2?31:D===3?15:7;1<D&&h<L;)w=w<<6|63&T[h++],D--;1<D?P[E++]=65533:w<65536?P[E++]=w:(w-=65536,P[E++]=55296|w>>10&1023,P[E++]=56320|1023&w)}return P.length!==E&&(P.subarray?P=P.subarray(0,E):P.length=E),f.applyFromCharCode(P)})(v=f.transformTo(y.uint8array?"uint8array":"array",v))},f.inherits(R,x),R.prototype.processChunk=function(v){var T=f.transformTo(y.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(y.uint8array){var h=T;(T=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),T.set(h,this.leftOver.length)}else T=this.leftOver.concat(T);this.leftOver=null}var E=(function(D,L){var P;for((L=L||D.length)>D.length&&(L=D.length),P=L-1;0<=P&&(192&D[P])==128;)P--;return P<0||P===0?L:P+m[D[P]]>L?P:L})(T),w=T;E!==T.length&&(y.uint8array?(w=T.subarray(0,E),this.leftOver=T.subarray(E,T.length)):(w=T.slice(0,E),this.leftOver=T.slice(E,T.length))),this.push({data:d.utf8decode(w),meta:v.meta})},R.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:d.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},d.Utf8DecodeWorker=R,f.inherits(_,x),_.prototype.processChunk=function(v){this.push({data:d.utf8encode(v.data),meta:v.meta})},d.Utf8EncodeWorker=_},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,u,d){var f=l("./support"),y=l("./base64"),p=l("./nodejsUtils"),x=l("./external");function m(h){return h}function A(h,E){for(var w=0;w<h.length;++w)E[w]=255&h.charCodeAt(w);return E}l("setimmediate"),d.newBlob=function(h,E){d.checkSupport("blob");try{return new Blob([h],{type:E})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(h),w.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var R={stringifyByChunk:function(h,E,w){var D=[],L=0,P=h.length;if(P<=w)return String.fromCharCode.apply(null,h);for(;L<P;)E==="array"||E==="nodebuffer"?D.push(String.fromCharCode.apply(null,h.slice(L,Math.min(L+w,P)))):D.push(String.fromCharCode.apply(null,h.subarray(L,Math.min(L+w,P)))),L+=w;return D.join("")},stringifyByChar:function(h){for(var E="",w=0;w<h.length;w++)E+=String.fromCharCode(h[w]);return E},applyCanBeUsed:{uint8array:(function(){try{return f.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return f.nodebuffer&&String.fromCharCode.apply(null,p.allocBuffer(1)).length===1}catch{return!1}})()}};function _(h){var E=65536,w=d.getTypeOf(h),D=!0;if(w==="uint8array"?D=R.applyCanBeUsed.uint8array:w==="nodebuffer"&&(D=R.applyCanBeUsed.nodebuffer),D)for(;1<E;)try{return R.stringifyByChunk(h,w,E)}catch{E=Math.floor(E/2)}return R.stringifyByChar(h)}function v(h,E){for(var w=0;w<h.length;w++)E[w]=h[w];return E}d.applyFromCharCode=_;var T={};T.string={string:m,array:function(h){return A(h,new Array(h.length))},arraybuffer:function(h){return T.string.uint8array(h).buffer},uint8array:function(h){return A(h,new Uint8Array(h.length))},nodebuffer:function(h){return A(h,p.allocBuffer(h.length))}},T.array={string:_,array:m,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return p.newBufferFrom(h)}},T.arraybuffer={string:function(h){return _(new Uint8Array(h))},array:function(h){return v(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:m,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return p.newBufferFrom(new Uint8Array(h))}},T.uint8array={string:_,array:function(h){return v(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:m,nodebuffer:function(h){return p.newBufferFrom(h)}},T.nodebuffer={string:_,array:function(h){return v(h,new Array(h.length))},arraybuffer:function(h){return T.nodebuffer.uint8array(h).buffer},uint8array:function(h){return v(h,new Uint8Array(h.length))},nodebuffer:m},d.transformTo=function(h,E){if(E=E||"",!h)return E;d.checkSupport(h);var w=d.getTypeOf(E);return T[w][h](E)},d.resolve=function(h){for(var E=h.split("/"),w=[],D=0;D<E.length;D++){var L=E[D];L==="."||L===""&&D!==0&&D!==E.length-1||(L===".."?w.pop():w.push(L))}return w.join("/")},d.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":f.nodebuffer&&p.isBuffer(h)?"nodebuffer":f.uint8array&&h instanceof Uint8Array?"uint8array":f.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},d.checkSupport=function(h){if(!f[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},d.MAX_VALUE_16BITS=65535,d.MAX_VALUE_32BITS=-1,d.pretty=function(h){var E,w,D="";for(w=0;w<(h||"").length;w++)D+="\\x"+((E=h.charCodeAt(w))<16?"0":"")+E.toString(16).toUpperCase();return D},d.delay=function(h,E,w){setImmediate(function(){h.apply(w||null,E||[])})},d.inherits=function(h,E){function w(){}w.prototype=E.prototype,h.prototype=new w},d.extend=function(){var h,E,w={};for(h=0;h<arguments.length;h++)for(E in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],E)&&w[E]===void 0&&(w[E]=arguments[h][E]);return w},d.prepareContent=function(h,E,w,D,L){return x.Promise.resolve(E).then(function(P){return f.blob&&(P instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(P))!==-1)&&typeof FileReader<"u"?new x.Promise(function(I,B){var F=new FileReader;F.onload=function(G){I(G.target.result)},F.onerror=function(G){B(G.target.error)},F.readAsArrayBuffer(P)}):P}).then(function(P){var I=d.getTypeOf(P);return I?(I==="arraybuffer"?P=d.transformTo("uint8array",P):I==="string"&&(L?P=y.decode(P):w&&D!==!0&&(P=(function(B){return A(B,f.uint8array?new Uint8Array(B.length):new Array(B.length))})(P))),P):x.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,u,d){var f=l("./reader/readerFor"),y=l("./utils"),p=l("./signature"),x=l("./zipEntry"),m=l("./support");function A(R){this.files=[],this.loadOptions=R}A.prototype={checkSignature:function(R){if(!this.reader.readAndCheckSignature(R)){this.reader.index-=4;var _=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+y.pretty(_)+", expected "+y.pretty(R)+")")}},isSignature:function(R,_){var v=this.reader.index;this.reader.setIndex(R);var T=this.reader.readString(4)===_;return this.reader.setIndex(v),T},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var R=this.reader.readData(this.zipCommentLength),_=m.uint8array?"uint8array":"array",v=y.transformTo(_,R);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var R,_,v,T=this.zip64EndOfCentralSize-44;0<T;)R=this.reader.readInt(2),_=this.reader.readInt(4),v=this.reader.readData(_),this.zip64ExtensibleData[R]={id:R,length:_,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var R,_;for(R=0;R<this.files.length;R++)_=this.files[R],this.reader.setIndex(_.localHeaderOffset),this.checkSignature(p.LOCAL_FILE_HEADER),_.readLocalPart(this.reader),_.handleUTF8(),_.processAttributes()},readCentralDir:function(){var R;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(p.CENTRAL_FILE_HEADER);)(R=new x({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(R);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var R=this.reader.lastIndexOfSignature(p.CENTRAL_DIRECTORY_END);if(R<0)throw this.isSignature(0,p.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(R);var _=R;if(this.checkSignature(p.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===y.MAX_VALUE_16BITS||this.diskWithCentralDirStart===y.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===y.MAX_VALUE_16BITS||this.centralDirRecords===y.MAX_VALUE_16BITS||this.centralDirSize===y.MAX_VALUE_32BITS||this.centralDirOffset===y.MAX_VALUE_32BITS){if(this.zip64=!0,(R=this.reader.lastIndexOfSignature(p.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(R),this.checkSignature(p.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,p.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(p.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(p.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var T=_-v;if(0<T)this.isSignature(_,p.CENTRAL_FILE_HEADER)||(this.reader.zero=T);else if(T<0)throw new Error("Corrupted zip: missing "+Math.abs(T)+" bytes.")},prepareReader:function(R){this.reader=f(R)},load:function(R){this.prepareReader(R),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},u.exports=A},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,u,d){var f=l("./reader/readerFor"),y=l("./utils"),p=l("./compressedObject"),x=l("./crc32"),m=l("./utf8"),A=l("./compressions"),R=l("./support");function _(v,T){this.options=v,this.loadOptions=T}_.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var T,h;if(v.skip(22),this.fileNameLength=v.readInt(2),h=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((T=(function(E){for(var w in A)if(Object.prototype.hasOwnProperty.call(A,w)&&A[w].magic===E)return A[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+y.pretty(this.compressionMethod)+" unknown (inner file : "+y.transformTo("string",this.fileName)+")");this.decompressed=new p(this.compressedSize,this.uncompressedSize,this.crc32,T,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var T=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(T),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=f(this.extraFields[1].value);this.uncompressedSize===y.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===y.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===y.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===y.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var T,h,E,w=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<w;)T=v.readInt(2),h=v.readInt(2),E=v.readData(h),this.extraFields[T]={id:T,length:h,value:E};v.setIndex(w)},handleUTF8:function(){var v=R.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=m.utf8decode(this.fileName),this.fileCommentStr=m.utf8decode(this.fileComment);else{var T=this.findExtraFieldUnicodePath();if(T!==null)this.fileNameStr=T;else{var h=y.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var w=y.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var T=f(v.value);return T.readInt(1)!==1||x(this.fileName)!==T.readInt(4)?null:m.utf8decode(T.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var T=f(v.value);return T.readInt(1)!==1||x(this.fileComment)!==T.readInt(4)?null:m.utf8decode(T.readData(v.length-5))}return null}},u.exports=_},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,u,d){function f(T,h,E){this.name=T,this.dir=E.dir,this.date=E.date,this.comment=E.comment,this.unixPermissions=E.unixPermissions,this.dosPermissions=E.dosPermissions,this._data=h,this._dataBinary=E.binary,this.options={compression:E.compression,compressionOptions:E.compressionOptions}}var y=l("./stream/StreamHelper"),p=l("./stream/DataWorker"),x=l("./utf8"),m=l("./compressedObject"),A=l("./stream/GenericWorker");f.prototype={internalStream:function(T){var h=null,E="string";try{if(!T)throw new Error("No output type specified.");var w=(E=T.toLowerCase())==="string"||E==="text";E!=="binarystring"&&E!=="text"||(E="string"),h=this._decompressWorker();var D=!this._dataBinary;D&&!w&&(h=h.pipe(new x.Utf8EncodeWorker)),!D&&w&&(h=h.pipe(new x.Utf8DecodeWorker))}catch(L){(h=new A("error")).error(L)}return new y(h,E,"")},async:function(T,h){return this.internalStream(T).accumulate(h)},nodeStream:function(T,h){return this.internalStream(T||"nodebuffer").toNodejsStream(h)},_compressWorker:function(T,h){if(this._data instanceof m&&this._data.compression.magic===T.magic)return this._data.getCompressedWorker();var E=this._decompressWorker();return this._dataBinary||(E=E.pipe(new x.Utf8EncodeWorker)),m.createWorkerFrom(E,T,h)},_decompressWorker:function(){return this._data instanceof m?this._data.getContentWorker():this._data instanceof A?this._data:new p(this._data)}};for(var R=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],_=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<R.length;v++)f.prototype[R[v]]=_;u.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,u,d){(function(f){var y,p,x=f.MutationObserver||f.WebKitMutationObserver;if(x){var m=0,A=new x(T),R=f.document.createTextNode("");A.observe(R,{characterData:!0}),y=function(){R.data=m=++m%2}}else if(f.setImmediate||f.MessageChannel===void 0)y="document"in f&&"onreadystatechange"in f.document.createElement("script")?function(){var h=f.document.createElement("script");h.onreadystatechange=function(){T(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},f.document.documentElement.appendChild(h)}:function(){setTimeout(T,0)};else{var _=new f.MessageChannel;_.port1.onmessage=T,y=function(){_.port2.postMessage(0)}}var v=[];function T(){var h,E;p=!0;for(var w=v.length;w;){for(E=v,v=[],h=-1;++h<w;)E[h]();w=v.length}p=!1}u.exports=function(h){v.push(h)!==1||p||y()}}).call(this,typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,u,d){var f=l("immediate");function y(){}var p={},x=["REJECTED"],m=["FULFILLED"],A=["PENDING"];function R(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=A,this.queue=[],this.outcome=void 0,w!==y&&h(this,w)}function _(w,D,L){this.promise=w,typeof D=="function"&&(this.onFulfilled=D,this.callFulfilled=this.otherCallFulfilled),typeof L=="function"&&(this.onRejected=L,this.callRejected=this.otherCallRejected)}function v(w,D,L){f(function(){var P;try{P=D(L)}catch(I){return p.reject(w,I)}P===w?p.reject(w,new TypeError("Cannot resolve promise with itself")):p.resolve(w,P)})}function T(w){var D=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof D=="function")return function(){D.apply(w,arguments)}}function h(w,D){var L=!1;function P(F){L||(L=!0,p.reject(w,F))}function I(F){L||(L=!0,p.resolve(w,F))}var B=E(function(){D(I,P)});B.status==="error"&&P(B.value)}function E(w,D){var L={};try{L.value=w(D),L.status="success"}catch(P){L.status="error",L.value=P}return L}(u.exports=R).prototype.finally=function(w){if(typeof w!="function")return this;var D=this.constructor;return this.then(function(L){return D.resolve(w()).then(function(){return L})},function(L){return D.resolve(w()).then(function(){throw L})})},R.prototype.catch=function(w){return this.then(null,w)},R.prototype.then=function(w,D){if(typeof w!="function"&&this.state===m||typeof D!="function"&&this.state===x)return this;var L=new this.constructor(y);return this.state!==A?v(L,this.state===m?w:D,this.outcome):this.queue.push(new _(L,w,D)),L},_.prototype.callFulfilled=function(w){p.resolve(this.promise,w)},_.prototype.otherCallFulfilled=function(w){v(this.promise,this.onFulfilled,w)},_.prototype.callRejected=function(w){p.reject(this.promise,w)},_.prototype.otherCallRejected=function(w){v(this.promise,this.onRejected,w)},p.resolve=function(w,D){var L=E(T,D);if(L.status==="error")return p.reject(w,L.value);var P=L.value;if(P)h(w,P);else{w.state=m,w.outcome=D;for(var I=-1,B=w.queue.length;++I<B;)w.queue[I].callFulfilled(D)}return w},p.reject=function(w,D){w.state=x,w.outcome=D;for(var L=-1,P=w.queue.length;++L<P;)w.queue[L].callRejected(D);return w},R.resolve=function(w){return w instanceof this?w:p.resolve(new this(y),w)},R.reject=function(w){var D=new this(y);return p.reject(D,w)},R.all=function(w){var D=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,P=!1;if(!L)return this.resolve([]);for(var I=new Array(L),B=0,F=-1,G=new this(y);++F<L;)z(w[F],F);return G;function z(re,Z){D.resolve(re).then(function(j){I[Z]=j,++B!==L||P||(P=!0,p.resolve(G,I))},function(j){P||(P=!0,p.reject(G,j))})}},R.race=function(w){var D=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,P=!1;if(!L)return this.resolve([]);for(var I=-1,B=new this(y);++I<L;)F=w[I],D.resolve(F).then(function(G){P||(P=!0,p.resolve(B,G))},function(G){P||(P=!0,p.reject(B,G))});var F;return B}},{immediate:36}],38:[function(l,u,d){var f={};(0,l("./lib/utils/common").assign)(f,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),u.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,u,d){var f=l("./zlib/deflate"),y=l("./utils/common"),p=l("./utils/strings"),x=l("./zlib/messages"),m=l("./zlib/zstream"),A=Object.prototype.toString,R=0,_=-1,v=0,T=8;function h(w){if(!(this instanceof h))return new h(w);this.options=y.assign({level:_,method:T,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},w||{});var D=this.options;D.raw&&0<D.windowBits?D.windowBits=-D.windowBits:D.gzip&&0<D.windowBits&&D.windowBits<16&&(D.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var L=f.deflateInit2(this.strm,D.level,D.method,D.windowBits,D.memLevel,D.strategy);if(L!==R)throw new Error(x[L]);if(D.header&&f.deflateSetHeader(this.strm,D.header),D.dictionary){var P;if(P=typeof D.dictionary=="string"?p.string2buf(D.dictionary):A.call(D.dictionary)==="[object ArrayBuffer]"?new Uint8Array(D.dictionary):D.dictionary,(L=f.deflateSetDictionary(this.strm,P))!==R)throw new Error(x[L]);this._dict_set=!0}}function E(w,D){var L=new h(D);if(L.push(w,!0),L.err)throw L.msg||x[L.err];return L.result}h.prototype.push=function(w,D){var L,P,I=this.strm,B=this.options.chunkSize;if(this.ended)return!1;P=D===~~D?D:D===!0?4:0,typeof w=="string"?I.input=p.string2buf(w):A.call(w)==="[object ArrayBuffer]"?I.input=new Uint8Array(w):I.input=w,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new y.Buf8(B),I.next_out=0,I.avail_out=B),(L=f.deflate(I,P))!==1&&L!==R)return this.onEnd(L),!(this.ended=!0);I.avail_out!==0&&(I.avail_in!==0||P!==4&&P!==2)||(this.options.to==="string"?this.onData(p.buf2binstring(y.shrinkBuf(I.output,I.next_out))):this.onData(y.shrinkBuf(I.output,I.next_out)))}while((0<I.avail_in||I.avail_out===0)&&L!==1);return P===4?(L=f.deflateEnd(this.strm),this.onEnd(L),this.ended=!0,L===R):P!==2||(this.onEnd(R),!(I.avail_out=0))},h.prototype.onData=function(w){this.chunks.push(w)},h.prototype.onEnd=function(w){w===R&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=y.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},d.Deflate=h,d.deflate=E,d.deflateRaw=function(w,D){return(D=D||{}).raw=!0,E(w,D)},d.gzip=function(w,D){return(D=D||{}).gzip=!0,E(w,D)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,u,d){var f=l("./zlib/inflate"),y=l("./utils/common"),p=l("./utils/strings"),x=l("./zlib/constants"),m=l("./zlib/messages"),A=l("./zlib/zstream"),R=l("./zlib/gzheader"),_=Object.prototype.toString;function v(h){if(!(this instanceof v))return new v(h);this.options=y.assign({chunkSize:16384,windowBits:0,to:""},h||{});var E=this.options;E.raw&&0<=E.windowBits&&E.windowBits<16&&(E.windowBits=-E.windowBits,E.windowBits===0&&(E.windowBits=-15)),!(0<=E.windowBits&&E.windowBits<16)||h&&h.windowBits||(E.windowBits+=32),15<E.windowBits&&E.windowBits<48&&(15&E.windowBits)==0&&(E.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new A,this.strm.avail_out=0;var w=f.inflateInit2(this.strm,E.windowBits);if(w!==x.Z_OK)throw new Error(m[w]);this.header=new R,f.inflateGetHeader(this.strm,this.header)}function T(h,E){var w=new v(E);if(w.push(h,!0),w.err)throw w.msg||m[w.err];return w.result}v.prototype.push=function(h,E){var w,D,L,P,I,B,F=this.strm,G=this.options.chunkSize,z=this.options.dictionary,re=!1;if(this.ended)return!1;D=E===~~E?E:E===!0?x.Z_FINISH:x.Z_NO_FLUSH,typeof h=="string"?F.input=p.binstring2buf(h):_.call(h)==="[object ArrayBuffer]"?F.input=new Uint8Array(h):F.input=h,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new y.Buf8(G),F.next_out=0,F.avail_out=G),(w=f.inflate(F,x.Z_NO_FLUSH))===x.Z_NEED_DICT&&z&&(B=typeof z=="string"?p.string2buf(z):_.call(z)==="[object ArrayBuffer]"?new Uint8Array(z):z,w=f.inflateSetDictionary(this.strm,B)),w===x.Z_BUF_ERROR&&re===!0&&(w=x.Z_OK,re=!1),w!==x.Z_STREAM_END&&w!==x.Z_OK)return this.onEnd(w),!(this.ended=!0);F.next_out&&(F.avail_out!==0&&w!==x.Z_STREAM_END&&(F.avail_in!==0||D!==x.Z_FINISH&&D!==x.Z_SYNC_FLUSH)||(this.options.to==="string"?(L=p.utf8border(F.output,F.next_out),P=F.next_out-L,I=p.buf2string(F.output,L),F.next_out=P,F.avail_out=G-P,P&&y.arraySet(F.output,F.output,L,P,0),this.onData(I)):this.onData(y.shrinkBuf(F.output,F.next_out)))),F.avail_in===0&&F.avail_out===0&&(re=!0)}while((0<F.avail_in||F.avail_out===0)&&w!==x.Z_STREAM_END);return w===x.Z_STREAM_END&&(D=x.Z_FINISH),D===x.Z_FINISH?(w=f.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===x.Z_OK):D!==x.Z_SYNC_FLUSH||(this.onEnd(x.Z_OK),!(F.avail_out=0))},v.prototype.onData=function(h){this.chunks.push(h)},v.prototype.onEnd=function(h){h===x.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=y.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},d.Inflate=v,d.inflate=T,d.inflateRaw=function(h,E){return(E=E||{}).raw=!0,T(h,E)},d.ungzip=T},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,u,d){var f=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";d.assign=function(x){for(var m=Array.prototype.slice.call(arguments,1);m.length;){var A=m.shift();if(A){if(typeof A!="object")throw new TypeError(A+"must be non-object");for(var R in A)A.hasOwnProperty(R)&&(x[R]=A[R])}}return x},d.shrinkBuf=function(x,m){return x.length===m?x:x.subarray?x.subarray(0,m):(x.length=m,x)};var y={arraySet:function(x,m,A,R,_){if(m.subarray&&x.subarray)x.set(m.subarray(A,A+R),_);else for(var v=0;v<R;v++)x[_+v]=m[A+v]},flattenChunks:function(x){var m,A,R,_,v,T;for(m=R=0,A=x.length;m<A;m++)R+=x[m].length;for(T=new Uint8Array(R),m=_=0,A=x.length;m<A;m++)v=x[m],T.set(v,_),_+=v.length;return T}},p={arraySet:function(x,m,A,R,_){for(var v=0;v<R;v++)x[_+v]=m[A+v]},flattenChunks:function(x){return[].concat.apply([],x)}};d.setTyped=function(x){x?(d.Buf8=Uint8Array,d.Buf16=Uint16Array,d.Buf32=Int32Array,d.assign(d,y)):(d.Buf8=Array,d.Buf16=Array,d.Buf32=Array,d.assign(d,p))},d.setTyped(f)},{}],42:[function(l,u,d){var f=l("./common"),y=!0,p=!0;try{String.fromCharCode.apply(null,[0])}catch{y=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{p=!1}for(var x=new f.Buf8(256),m=0;m<256;m++)x[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;function A(R,_){if(_<65537&&(R.subarray&&p||!R.subarray&&y))return String.fromCharCode.apply(null,f.shrinkBuf(R,_));for(var v="",T=0;T<_;T++)v+=String.fromCharCode(R[T]);return v}x[254]=x[254]=1,d.string2buf=function(R){var _,v,T,h,E,w=R.length,D=0;for(h=0;h<w;h++)(64512&(v=R.charCodeAt(h)))==55296&&h+1<w&&(64512&(T=R.charCodeAt(h+1)))==56320&&(v=65536+(v-55296<<10)+(T-56320),h++),D+=v<128?1:v<2048?2:v<65536?3:4;for(_=new f.Buf8(D),h=E=0;E<D;h++)(64512&(v=R.charCodeAt(h)))==55296&&h+1<w&&(64512&(T=R.charCodeAt(h+1)))==56320&&(v=65536+(v-55296<<10)+(T-56320),h++),v<128?_[E++]=v:(v<2048?_[E++]=192|v>>>6:(v<65536?_[E++]=224|v>>>12:(_[E++]=240|v>>>18,_[E++]=128|v>>>12&63),_[E++]=128|v>>>6&63),_[E++]=128|63&v);return _},d.buf2binstring=function(R){return A(R,R.length)},d.binstring2buf=function(R){for(var _=new f.Buf8(R.length),v=0,T=_.length;v<T;v++)_[v]=R.charCodeAt(v);return _},d.buf2string=function(R,_){var v,T,h,E,w=_||R.length,D=new Array(2*w);for(v=T=0;v<w;)if((h=R[v++])<128)D[T++]=h;else if(4<(E=x[h]))D[T++]=65533,v+=E-1;else{for(h&=E===2?31:E===3?15:7;1<E&&v<w;)h=h<<6|63&R[v++],E--;1<E?D[T++]=65533:h<65536?D[T++]=h:(h-=65536,D[T++]=55296|h>>10&1023,D[T++]=56320|1023&h)}return A(D,T)},d.utf8border=function(R,_){var v;for((_=_||R.length)>R.length&&(_=R.length),v=_-1;0<=v&&(192&R[v])==128;)v--;return v<0||v===0?_:v+x[R[v]]>_?v:_}},{"./common":41}],43:[function(l,u,d){u.exports=function(f,y,p,x){for(var m=65535&f|0,A=f>>>16&65535|0,R=0;p!==0;){for(p-=R=2e3<p?2e3:p;A=A+(m=m+y[x++]|0)|0,--R;);m%=65521,A%=65521}return m|A<<16|0}},{}],44:[function(l,u,d){u.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,u,d){var f=(function(){for(var y,p=[],x=0;x<256;x++){y=x;for(var m=0;m<8;m++)y=1&y?3988292384^y>>>1:y>>>1;p[x]=y}return p})();u.exports=function(y,p,x,m){var A=f,R=m+x;y^=-1;for(var _=m;_<R;_++)y=y>>>8^A[255&(y^p[_])];return-1^y}},{}],46:[function(l,u,d){var f,y=l("../utils/common"),p=l("./trees"),x=l("./adler32"),m=l("./crc32"),A=l("./messages"),R=0,_=4,v=0,T=-2,h=-1,E=4,w=2,D=8,L=9,P=286,I=30,B=19,F=2*P+1,G=15,z=3,re=258,Z=re+z+1,j=42,Q=113,S=1,Y=2,V=3,$=4;function ue(b,ae){return b.msg=A[ae],ae}function te(b){return(b<<1)-(4<b?9:0)}function ve(b){for(var ae=b.length;0<=--ae;)b[ae]=0}function C(b){var ae=b.state,ne=ae.pending;ne>b.avail_out&&(ne=b.avail_out),ne!==0&&(y.arraySet(b.output,ae.pending_buf,ae.pending_out,ne,b.next_out),b.next_out+=ne,ae.pending_out+=ne,b.total_out+=ne,b.avail_out-=ne,ae.pending-=ne,ae.pending===0&&(ae.pending_out=0))}function k(b,ae){p._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,ae),b.block_start=b.strstart,C(b.strm)}function se(b,ae){b.pending_buf[b.pending++]=ae}function le(b,ae){b.pending_buf[b.pending++]=ae>>>8&255,b.pending_buf[b.pending++]=255&ae}function oe(b,ae){var ne,M,O=b.max_chain_length,q=b.strstart,me=b.prev_length,ge=b.nice_match,J=b.strstart>b.w_size-Z?b.strstart-(b.w_size-Z):0,be=b.window,Se=b.w_mask,xe=b.prev,Ne=b.strstart+re,Xe=be[q+me-1],Ue=be[q+me];b.prev_length>=b.good_match&&(O>>=2),ge>b.lookahead&&(ge=b.lookahead);do if(be[(ne=ae)+me]===Ue&&be[ne+me-1]===Xe&&be[ne]===be[q]&&be[++ne]===be[q+1]){q+=2,ne++;do;while(be[++q]===be[++ne]&&be[++q]===be[++ne]&&be[++q]===be[++ne]&&be[++q]===be[++ne]&&be[++q]===be[++ne]&&be[++q]===be[++ne]&&be[++q]===be[++ne]&&be[++q]===be[++ne]&&q<Ne);if(M=re-(Ne-q),q=Ne-re,me<M){if(b.match_start=ae,ge<=(me=M))break;Xe=be[q+me-1],Ue=be[q+me]}}while((ae=xe[ae&Se])>J&&--O!=0);return me<=b.lookahead?me:b.lookahead}function we(b){var ae,ne,M,O,q,me,ge,J,be,Se,xe=b.w_size;do{if(O=b.window_size-b.lookahead-b.strstart,b.strstart>=xe+(xe-Z)){for(y.arraySet(b.window,b.window,xe,xe,0),b.match_start-=xe,b.strstart-=xe,b.block_start-=xe,ae=ne=b.hash_size;M=b.head[--ae],b.head[ae]=xe<=M?M-xe:0,--ne;);for(ae=ne=xe;M=b.prev[--ae],b.prev[ae]=xe<=M?M-xe:0,--ne;);O+=xe}if(b.strm.avail_in===0)break;if(me=b.strm,ge=b.window,J=b.strstart+b.lookahead,be=O,Se=void 0,Se=me.avail_in,be<Se&&(Se=be),ne=Se===0?0:(me.avail_in-=Se,y.arraySet(ge,me.input,me.next_in,Se,J),me.state.wrap===1?me.adler=x(me.adler,ge,Se,J):me.state.wrap===2&&(me.adler=m(me.adler,ge,Se,J)),me.next_in+=Se,me.total_in+=Se,Se),b.lookahead+=ne,b.lookahead+b.insert>=z)for(q=b.strstart-b.insert,b.ins_h=b.window[q],b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+z-1])&b.hash_mask,b.prev[q&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=q,q++,b.insert--,!(b.lookahead+b.insert<z)););}while(b.lookahead<Z&&b.strm.avail_in!==0)}function Ie(b,ae){for(var ne,M;;){if(b.lookahead<Z){if(we(b),b.lookahead<Z&&ae===R)return S;if(b.lookahead===0)break}if(ne=0,b.lookahead>=z&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+z-1])&b.hash_mask,ne=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),ne!==0&&b.strstart-ne<=b.w_size-Z&&(b.match_length=oe(b,ne)),b.match_length>=z)if(M=p._tr_tally(b,b.strstart-b.match_start,b.match_length-z),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=z){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+z-1])&b.hash_mask,ne=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else M=p._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(M&&(k(b,!1),b.strm.avail_out===0))return S}return b.insert=b.strstart<z-1?b.strstart:z-1,ae===_?(k(b,!0),b.strm.avail_out===0?V:$):b.last_lit&&(k(b,!1),b.strm.avail_out===0)?S:Y}function Te(b,ae){for(var ne,M,O;;){if(b.lookahead<Z){if(we(b),b.lookahead<Z&&ae===R)return S;if(b.lookahead===0)break}if(ne=0,b.lookahead>=z&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+z-1])&b.hash_mask,ne=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=z-1,ne!==0&&b.prev_length<b.max_lazy_match&&b.strstart-ne<=b.w_size-Z&&(b.match_length=oe(b,ne),b.match_length<=5&&(b.strategy===1||b.match_length===z&&4096<b.strstart-b.match_start)&&(b.match_length=z-1)),b.prev_length>=z&&b.match_length<=b.prev_length){for(O=b.strstart+b.lookahead-z,M=p._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-z),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=O&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+z-1])&b.hash_mask,ne=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=z-1,b.strstart++,M&&(k(b,!1),b.strm.avail_out===0))return S}else if(b.match_available){if((M=p._tr_tally(b,0,b.window[b.strstart-1]))&&k(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return S}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(M=p._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<z-1?b.strstart:z-1,ae===_?(k(b,!0),b.strm.avail_out===0?V:$):b.last_lit&&(k(b,!1),b.strm.avail_out===0)?S:Y}function Ee(b,ae,ne,M,O){this.good_length=b,this.max_lazy=ae,this.nice_length=ne,this.max_chain=M,this.func=O}function Oe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=D,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new y.Buf16(2*F),this.dyn_dtree=new y.Buf16(2*(2*I+1)),this.bl_tree=new y.Buf16(2*(2*B+1)),ve(this.dyn_ltree),ve(this.dyn_dtree),ve(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new y.Buf16(G+1),this.heap=new y.Buf16(2*P+1),ve(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new y.Buf16(2*P+1),ve(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ze(b){var ae;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=w,(ae=b.state).pending=0,ae.pending_out=0,ae.wrap<0&&(ae.wrap=-ae.wrap),ae.status=ae.wrap?j:Q,b.adler=ae.wrap===2?0:1,ae.last_flush=R,p._tr_init(ae),v):ue(b,T)}function bt(b){var ae=ze(b);return ae===v&&(function(ne){ne.window_size=2*ne.w_size,ve(ne.head),ne.max_lazy_match=f[ne.level].max_lazy,ne.good_match=f[ne.level].good_length,ne.nice_match=f[ne.level].nice_length,ne.max_chain_length=f[ne.level].max_chain,ne.strstart=0,ne.block_start=0,ne.lookahead=0,ne.insert=0,ne.match_length=ne.prev_length=z-1,ne.match_available=0,ne.ins_h=0})(b.state),ae}function pe(b,ae,ne,M,O,q){if(!b)return T;var me=1;if(ae===h&&(ae=6),M<0?(me=0,M=-M):15<M&&(me=2,M-=16),O<1||L<O||ne!==D||M<8||15<M||ae<0||9<ae||q<0||E<q)return ue(b,T);M===8&&(M=9);var ge=new Oe;return(b.state=ge).strm=b,ge.wrap=me,ge.gzhead=null,ge.w_bits=M,ge.w_size=1<<ge.w_bits,ge.w_mask=ge.w_size-1,ge.hash_bits=O+7,ge.hash_size=1<<ge.hash_bits,ge.hash_mask=ge.hash_size-1,ge.hash_shift=~~((ge.hash_bits+z-1)/z),ge.window=new y.Buf8(2*ge.w_size),ge.head=new y.Buf16(ge.hash_size),ge.prev=new y.Buf16(ge.w_size),ge.lit_bufsize=1<<O+6,ge.pending_buf_size=4*ge.lit_bufsize,ge.pending_buf=new y.Buf8(ge.pending_buf_size),ge.d_buf=1*ge.lit_bufsize,ge.l_buf=3*ge.lit_bufsize,ge.level=ae,ge.strategy=q,ge.method=ne,bt(b)}f=[new Ee(0,0,0,0,function(b,ae){var ne=65535;for(ne>b.pending_buf_size-5&&(ne=b.pending_buf_size-5);;){if(b.lookahead<=1){if(we(b),b.lookahead===0&&ae===R)return S;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var M=b.block_start+ne;if((b.strstart===0||b.strstart>=M)&&(b.lookahead=b.strstart-M,b.strstart=M,k(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-Z&&(k(b,!1),b.strm.avail_out===0))return S}return b.insert=0,ae===_?(k(b,!0),b.strm.avail_out===0?V:$):(b.strstart>b.block_start&&(k(b,!1),b.strm.avail_out),S)}),new Ee(4,4,8,4,Ie),new Ee(4,5,16,8,Ie),new Ee(4,6,32,32,Ie),new Ee(4,4,16,16,Te),new Ee(8,16,32,32,Te),new Ee(8,16,128,128,Te),new Ee(8,32,128,256,Te),new Ee(32,128,258,1024,Te),new Ee(32,258,258,4096,Te)],d.deflateInit=function(b,ae){return pe(b,ae,D,15,8,0)},d.deflateInit2=pe,d.deflateReset=bt,d.deflateResetKeep=ze,d.deflateSetHeader=function(b,ae){return b&&b.state?b.state.wrap!==2?T:(b.state.gzhead=ae,v):T},d.deflate=function(b,ae){var ne,M,O,q;if(!b||!b.state||5<ae||ae<0)return b?ue(b,T):T;if(M=b.state,!b.output||!b.input&&b.avail_in!==0||M.status===666&&ae!==_)return ue(b,b.avail_out===0?-5:T);if(M.strm=b,ne=M.last_flush,M.last_flush=ae,M.status===j)if(M.wrap===2)b.adler=0,se(M,31),se(M,139),se(M,8),M.gzhead?(se(M,(M.gzhead.text?1:0)+(M.gzhead.hcrc?2:0)+(M.gzhead.extra?4:0)+(M.gzhead.name?8:0)+(M.gzhead.comment?16:0)),se(M,255&M.gzhead.time),se(M,M.gzhead.time>>8&255),se(M,M.gzhead.time>>16&255),se(M,M.gzhead.time>>24&255),se(M,M.level===9?2:2<=M.strategy||M.level<2?4:0),se(M,255&M.gzhead.os),M.gzhead.extra&&M.gzhead.extra.length&&(se(M,255&M.gzhead.extra.length),se(M,M.gzhead.extra.length>>8&255)),M.gzhead.hcrc&&(b.adler=m(b.adler,M.pending_buf,M.pending,0)),M.gzindex=0,M.status=69):(se(M,0),se(M,0),se(M,0),se(M,0),se(M,0),se(M,M.level===9?2:2<=M.strategy||M.level<2?4:0),se(M,3),M.status=Q);else{var me=D+(M.w_bits-8<<4)<<8;me|=(2<=M.strategy||M.level<2?0:M.level<6?1:M.level===6?2:3)<<6,M.strstart!==0&&(me|=32),me+=31-me%31,M.status=Q,le(M,me),M.strstart!==0&&(le(M,b.adler>>>16),le(M,65535&b.adler)),b.adler=1}if(M.status===69)if(M.gzhead.extra){for(O=M.pending;M.gzindex<(65535&M.gzhead.extra.length)&&(M.pending!==M.pending_buf_size||(M.gzhead.hcrc&&M.pending>O&&(b.adler=m(b.adler,M.pending_buf,M.pending-O,O)),C(b),O=M.pending,M.pending!==M.pending_buf_size));)se(M,255&M.gzhead.extra[M.gzindex]),M.gzindex++;M.gzhead.hcrc&&M.pending>O&&(b.adler=m(b.adler,M.pending_buf,M.pending-O,O)),M.gzindex===M.gzhead.extra.length&&(M.gzindex=0,M.status=73)}else M.status=73;if(M.status===73)if(M.gzhead.name){O=M.pending;do{if(M.pending===M.pending_buf_size&&(M.gzhead.hcrc&&M.pending>O&&(b.adler=m(b.adler,M.pending_buf,M.pending-O,O)),C(b),O=M.pending,M.pending===M.pending_buf_size)){q=1;break}q=M.gzindex<M.gzhead.name.length?255&M.gzhead.name.charCodeAt(M.gzindex++):0,se(M,q)}while(q!==0);M.gzhead.hcrc&&M.pending>O&&(b.adler=m(b.adler,M.pending_buf,M.pending-O,O)),q===0&&(M.gzindex=0,M.status=91)}else M.status=91;if(M.status===91)if(M.gzhead.comment){O=M.pending;do{if(M.pending===M.pending_buf_size&&(M.gzhead.hcrc&&M.pending>O&&(b.adler=m(b.adler,M.pending_buf,M.pending-O,O)),C(b),O=M.pending,M.pending===M.pending_buf_size)){q=1;break}q=M.gzindex<M.gzhead.comment.length?255&M.gzhead.comment.charCodeAt(M.gzindex++):0,se(M,q)}while(q!==0);M.gzhead.hcrc&&M.pending>O&&(b.adler=m(b.adler,M.pending_buf,M.pending-O,O)),q===0&&(M.status=103)}else M.status=103;if(M.status===103&&(M.gzhead.hcrc?(M.pending+2>M.pending_buf_size&&C(b),M.pending+2<=M.pending_buf_size&&(se(M,255&b.adler),se(M,b.adler>>8&255),b.adler=0,M.status=Q)):M.status=Q),M.pending!==0){if(C(b),b.avail_out===0)return M.last_flush=-1,v}else if(b.avail_in===0&&te(ae)<=te(ne)&&ae!==_)return ue(b,-5);if(M.status===666&&b.avail_in!==0)return ue(b,-5);if(b.avail_in!==0||M.lookahead!==0||ae!==R&&M.status!==666){var ge=M.strategy===2?(function(J,be){for(var Se;;){if(J.lookahead===0&&(we(J),J.lookahead===0)){if(be===R)return S;break}if(J.match_length=0,Se=p._tr_tally(J,0,J.window[J.strstart]),J.lookahead--,J.strstart++,Se&&(k(J,!1),J.strm.avail_out===0))return S}return J.insert=0,be===_?(k(J,!0),J.strm.avail_out===0?V:$):J.last_lit&&(k(J,!1),J.strm.avail_out===0)?S:Y})(M,ae):M.strategy===3?(function(J,be){for(var Se,xe,Ne,Xe,Ue=J.window;;){if(J.lookahead<=re){if(we(J),J.lookahead<=re&&be===R)return S;if(J.lookahead===0)break}if(J.match_length=0,J.lookahead>=z&&0<J.strstart&&(xe=Ue[Ne=J.strstart-1])===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]){Xe=J.strstart+re;do;while(xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&xe===Ue[++Ne]&&Ne<Xe);J.match_length=re-(Xe-Ne),J.match_length>J.lookahead&&(J.match_length=J.lookahead)}if(J.match_length>=z?(Se=p._tr_tally(J,1,J.match_length-z),J.lookahead-=J.match_length,J.strstart+=J.match_length,J.match_length=0):(Se=p._tr_tally(J,0,J.window[J.strstart]),J.lookahead--,J.strstart++),Se&&(k(J,!1),J.strm.avail_out===0))return S}return J.insert=0,be===_?(k(J,!0),J.strm.avail_out===0?V:$):J.last_lit&&(k(J,!1),J.strm.avail_out===0)?S:Y})(M,ae):f[M.level].func(M,ae);if(ge!==V&&ge!==$||(M.status=666),ge===S||ge===V)return b.avail_out===0&&(M.last_flush=-1),v;if(ge===Y&&(ae===1?p._tr_align(M):ae!==5&&(p._tr_stored_block(M,0,0,!1),ae===3&&(ve(M.head),M.lookahead===0&&(M.strstart=0,M.block_start=0,M.insert=0))),C(b),b.avail_out===0))return M.last_flush=-1,v}return ae!==_?v:M.wrap<=0?1:(M.wrap===2?(se(M,255&b.adler),se(M,b.adler>>8&255),se(M,b.adler>>16&255),se(M,b.adler>>24&255),se(M,255&b.total_in),se(M,b.total_in>>8&255),se(M,b.total_in>>16&255),se(M,b.total_in>>24&255)):(le(M,b.adler>>>16),le(M,65535&b.adler)),C(b),0<M.wrap&&(M.wrap=-M.wrap),M.pending!==0?v:1)},d.deflateEnd=function(b){var ae;return b&&b.state?(ae=b.state.status)!==j&&ae!==69&&ae!==73&&ae!==91&&ae!==103&&ae!==Q&&ae!==666?ue(b,T):(b.state=null,ae===Q?ue(b,-3):v):T},d.deflateSetDictionary=function(b,ae){var ne,M,O,q,me,ge,J,be,Se=ae.length;if(!b||!b.state||(q=(ne=b.state).wrap)===2||q===1&&ne.status!==j||ne.lookahead)return T;for(q===1&&(b.adler=x(b.adler,ae,Se,0)),ne.wrap=0,Se>=ne.w_size&&(q===0&&(ve(ne.head),ne.strstart=0,ne.block_start=0,ne.insert=0),be=new y.Buf8(ne.w_size),y.arraySet(be,ae,Se-ne.w_size,ne.w_size,0),ae=be,Se=ne.w_size),me=b.avail_in,ge=b.next_in,J=b.input,b.avail_in=Se,b.next_in=0,b.input=ae,we(ne);ne.lookahead>=z;){for(M=ne.strstart,O=ne.lookahead-(z-1);ne.ins_h=(ne.ins_h<<ne.hash_shift^ne.window[M+z-1])&ne.hash_mask,ne.prev[M&ne.w_mask]=ne.head[ne.ins_h],ne.head[ne.ins_h]=M,M++,--O;);ne.strstart=M,ne.lookahead=z-1,we(ne)}return ne.strstart+=ne.lookahead,ne.block_start=ne.strstart,ne.insert=ne.lookahead,ne.lookahead=0,ne.match_length=ne.prev_length=z-1,ne.match_available=0,b.next_in=ge,b.input=J,b.avail_in=me,ne.wrap=q,v},d.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,u,d){u.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,u,d){u.exports=function(f,y){var p,x,m,A,R,_,v,T,h,E,w,D,L,P,I,B,F,G,z,re,Z,j,Q,S,Y;p=f.state,x=f.next_in,S=f.input,m=x+(f.avail_in-5),A=f.next_out,Y=f.output,R=A-(y-f.avail_out),_=A+(f.avail_out-257),v=p.dmax,T=p.wsize,h=p.whave,E=p.wnext,w=p.window,D=p.hold,L=p.bits,P=p.lencode,I=p.distcode,B=(1<<p.lenbits)-1,F=(1<<p.distbits)-1;e:do{L<15&&(D+=S[x++]<<L,L+=8,D+=S[x++]<<L,L+=8),G=P[D&B];t:for(;;){if(D>>>=z=G>>>24,L-=z,(z=G>>>16&255)===0)Y[A++]=65535&G;else{if(!(16&z)){if((64&z)==0){G=P[(65535&G)+(D&(1<<z)-1)];continue t}if(32&z){p.mode=12;break e}f.msg="invalid literal/length code",p.mode=30;break e}re=65535&G,(z&=15)&&(L<z&&(D+=S[x++]<<L,L+=8),re+=D&(1<<z)-1,D>>>=z,L-=z),L<15&&(D+=S[x++]<<L,L+=8,D+=S[x++]<<L,L+=8),G=I[D&F];n:for(;;){if(D>>>=z=G>>>24,L-=z,!(16&(z=G>>>16&255))){if((64&z)==0){G=I[(65535&G)+(D&(1<<z)-1)];continue n}f.msg="invalid distance code",p.mode=30;break e}if(Z=65535&G,L<(z&=15)&&(D+=S[x++]<<L,(L+=8)<z&&(D+=S[x++]<<L,L+=8)),v<(Z+=D&(1<<z)-1)){f.msg="invalid distance too far back",p.mode=30;break e}if(D>>>=z,L-=z,(z=A-R)<Z){if(h<(z=Z-z)&&p.sane){f.msg="invalid distance too far back",p.mode=30;break e}if(Q=w,(j=0)===E){if(j+=T-z,z<re){for(re-=z;Y[A++]=w[j++],--z;);j=A-Z,Q=Y}}else if(E<z){if(j+=T+E-z,(z-=E)<re){for(re-=z;Y[A++]=w[j++],--z;);if(j=0,E<re){for(re-=z=E;Y[A++]=w[j++],--z;);j=A-Z,Q=Y}}}else if(j+=E-z,z<re){for(re-=z;Y[A++]=w[j++],--z;);j=A-Z,Q=Y}for(;2<re;)Y[A++]=Q[j++],Y[A++]=Q[j++],Y[A++]=Q[j++],re-=3;re&&(Y[A++]=Q[j++],1<re&&(Y[A++]=Q[j++]))}else{for(j=A-Z;Y[A++]=Y[j++],Y[A++]=Y[j++],Y[A++]=Y[j++],2<(re-=3););re&&(Y[A++]=Y[j++],1<re&&(Y[A++]=Y[j++]))}break}}break}}while(x<m&&A<_);x-=re=L>>3,D&=(1<<(L-=re<<3))-1,f.next_in=x,f.next_out=A,f.avail_in=x<m?m-x+5:5-(x-m),f.avail_out=A<_?_-A+257:257-(A-_),p.hold=D,p.bits=L}},{}],49:[function(l,u,d){var f=l("../utils/common"),y=l("./adler32"),p=l("./crc32"),x=l("./inffast"),m=l("./inftrees"),A=1,R=2,_=0,v=-2,T=1,h=852,E=592;function w(j){return(j>>>24&255)+(j>>>8&65280)+((65280&j)<<8)+((255&j)<<24)}function D(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new f.Buf16(320),this.work=new f.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function L(j){var Q;return j&&j.state?(Q=j.state,j.total_in=j.total_out=Q.total=0,j.msg="",Q.wrap&&(j.adler=1&Q.wrap),Q.mode=T,Q.last=0,Q.havedict=0,Q.dmax=32768,Q.head=null,Q.hold=0,Q.bits=0,Q.lencode=Q.lendyn=new f.Buf32(h),Q.distcode=Q.distdyn=new f.Buf32(E),Q.sane=1,Q.back=-1,_):v}function P(j){var Q;return j&&j.state?((Q=j.state).wsize=0,Q.whave=0,Q.wnext=0,L(j)):v}function I(j,Q){var S,Y;return j&&j.state?(Y=j.state,Q<0?(S=0,Q=-Q):(S=1+(Q>>4),Q<48&&(Q&=15)),Q&&(Q<8||15<Q)?v:(Y.window!==null&&Y.wbits!==Q&&(Y.window=null),Y.wrap=S,Y.wbits=Q,P(j))):v}function B(j,Q){var S,Y;return j?(Y=new D,(j.state=Y).window=null,(S=I(j,Q))!==_&&(j.state=null),S):v}var F,G,z=!0;function re(j){if(z){var Q;for(F=new f.Buf32(512),G=new f.Buf32(32),Q=0;Q<144;)j.lens[Q++]=8;for(;Q<256;)j.lens[Q++]=9;for(;Q<280;)j.lens[Q++]=7;for(;Q<288;)j.lens[Q++]=8;for(m(A,j.lens,0,288,F,0,j.work,{bits:9}),Q=0;Q<32;)j.lens[Q++]=5;m(R,j.lens,0,32,G,0,j.work,{bits:5}),z=!1}j.lencode=F,j.lenbits=9,j.distcode=G,j.distbits=5}function Z(j,Q,S,Y){var V,$=j.state;return $.window===null&&($.wsize=1<<$.wbits,$.wnext=0,$.whave=0,$.window=new f.Buf8($.wsize)),Y>=$.wsize?(f.arraySet($.window,Q,S-$.wsize,$.wsize,0),$.wnext=0,$.whave=$.wsize):(Y<(V=$.wsize-$.wnext)&&(V=Y),f.arraySet($.window,Q,S-Y,V,$.wnext),(Y-=V)?(f.arraySet($.window,Q,S-Y,Y,0),$.wnext=Y,$.whave=$.wsize):($.wnext+=V,$.wnext===$.wsize&&($.wnext=0),$.whave<$.wsize&&($.whave+=V))),0}d.inflateReset=P,d.inflateReset2=I,d.inflateResetKeep=L,d.inflateInit=function(j){return B(j,15)},d.inflateInit2=B,d.inflate=function(j,Q){var S,Y,V,$,ue,te,ve,C,k,se,le,oe,we,Ie,Te,Ee,Oe,ze,bt,pe,b,ae,ne,M,O=0,q=new f.Buf8(4),me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!j||!j.state||!j.output||!j.input&&j.avail_in!==0)return v;(S=j.state).mode===12&&(S.mode=13),ue=j.next_out,V=j.output,ve=j.avail_out,$=j.next_in,Y=j.input,te=j.avail_in,C=S.hold,k=S.bits,se=te,le=ve,ae=_;e:for(;;)switch(S.mode){case T:if(S.wrap===0){S.mode=13;break}for(;k<16;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(2&S.wrap&&C===35615){q[S.check=0]=255&C,q[1]=C>>>8&255,S.check=p(S.check,q,2,0),k=C=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&C)<<8)+(C>>8))%31){j.msg="incorrect header check",S.mode=30;break}if((15&C)!=8){j.msg="unknown compression method",S.mode=30;break}if(k-=4,b=8+(15&(C>>>=4)),S.wbits===0)S.wbits=b;else if(b>S.wbits){j.msg="invalid window size",S.mode=30;break}S.dmax=1<<b,j.adler=S.check=1,S.mode=512&C?10:12,k=C=0;break;case 2:for(;k<16;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(S.flags=C,(255&S.flags)!=8){j.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){j.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=C>>8&1),512&S.flags&&(q[0]=255&C,q[1]=C>>>8&255,S.check=p(S.check,q,2,0)),k=C=0,S.mode=3;case 3:for(;k<32;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}S.head&&(S.head.time=C),512&S.flags&&(q[0]=255&C,q[1]=C>>>8&255,q[2]=C>>>16&255,q[3]=C>>>24&255,S.check=p(S.check,q,4,0)),k=C=0,S.mode=4;case 4:for(;k<16;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}S.head&&(S.head.xflags=255&C,S.head.os=C>>8),512&S.flags&&(q[0]=255&C,q[1]=C>>>8&255,S.check=p(S.check,q,2,0)),k=C=0,S.mode=5;case 5:if(1024&S.flags){for(;k<16;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}S.length=C,S.head&&(S.head.extra_len=C),512&S.flags&&(q[0]=255&C,q[1]=C>>>8&255,S.check=p(S.check,q,2,0)),k=C=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(te<(oe=S.length)&&(oe=te),oe&&(S.head&&(b=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),f.arraySet(S.head.extra,Y,$,oe,b)),512&S.flags&&(S.check=p(S.check,Y,oe,$)),te-=oe,$+=oe,S.length-=oe),S.length))break e;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(te===0)break e;for(oe=0;b=Y[$+oe++],S.head&&b&&S.length<65536&&(S.head.name+=String.fromCharCode(b)),b&&oe<te;);if(512&S.flags&&(S.check=p(S.check,Y,oe,$)),te-=oe,$+=oe,b)break e}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(te===0)break e;for(oe=0;b=Y[$+oe++],S.head&&b&&S.length<65536&&(S.head.comment+=String.fromCharCode(b)),b&&oe<te;);if(512&S.flags&&(S.check=p(S.check,Y,oe,$)),te-=oe,$+=oe,b)break e}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;k<16;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(C!==(65535&S.check)){j.msg="header crc mismatch",S.mode=30;break}k=C=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),j.adler=S.check=0,S.mode=12;break;case 10:for(;k<32;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}j.adler=S.check=w(C),k=C=0,S.mode=11;case 11:if(S.havedict===0)return j.next_out=ue,j.avail_out=ve,j.next_in=$,j.avail_in=te,S.hold=C,S.bits=k,2;j.adler=S.check=1,S.mode=12;case 12:if(Q===5||Q===6)break e;case 13:if(S.last){C>>>=7&k,k-=7&k,S.mode=27;break}for(;k<3;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}switch(S.last=1&C,k-=1,3&(C>>>=1)){case 0:S.mode=14;break;case 1:if(re(S),S.mode=20,Q!==6)break;C>>>=2,k-=2;break e;case 2:S.mode=17;break;case 3:j.msg="invalid block type",S.mode=30}C>>>=2,k-=2;break;case 14:for(C>>>=7&k,k-=7&k;k<32;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if((65535&C)!=(C>>>16^65535)){j.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&C,k=C=0,S.mode=15,Q===6)break e;case 15:S.mode=16;case 16:if(oe=S.length){if(te<oe&&(oe=te),ve<oe&&(oe=ve),oe===0)break e;f.arraySet(V,Y,$,oe,ue),te-=oe,$+=oe,ve-=oe,ue+=oe,S.length-=oe;break}S.mode=12;break;case 17:for(;k<14;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(S.nlen=257+(31&C),C>>>=5,k-=5,S.ndist=1+(31&C),C>>>=5,k-=5,S.ncode=4+(15&C),C>>>=4,k-=4,286<S.nlen||30<S.ndist){j.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;k<3;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}S.lens[me[S.have++]]=7&C,C>>>=3,k-=3}for(;S.have<19;)S.lens[me[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,ne={bits:S.lenbits},ae=m(0,S.lens,0,19,S.lencode,0,S.work,ne),S.lenbits=ne.bits,ae){j.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;Ee=(O=S.lencode[C&(1<<S.lenbits)-1])>>>16&255,Oe=65535&O,!((Te=O>>>24)<=k);){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(Oe<16)C>>>=Te,k-=Te,S.lens[S.have++]=Oe;else{if(Oe===16){for(M=Te+2;k<M;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(C>>>=Te,k-=Te,S.have===0){j.msg="invalid bit length repeat",S.mode=30;break}b=S.lens[S.have-1],oe=3+(3&C),C>>>=2,k-=2}else if(Oe===17){for(M=Te+3;k<M;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}k-=Te,b=0,oe=3+(7&(C>>>=Te)),C>>>=3,k-=3}else{for(M=Te+7;k<M;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}k-=Te,b=0,oe=11+(127&(C>>>=Te)),C>>>=7,k-=7}if(S.have+oe>S.nlen+S.ndist){j.msg="invalid bit length repeat",S.mode=30;break}for(;oe--;)S.lens[S.have++]=b}}if(S.mode===30)break;if(S.lens[256]===0){j.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,ne={bits:S.lenbits},ae=m(A,S.lens,0,S.nlen,S.lencode,0,S.work,ne),S.lenbits=ne.bits,ae){j.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,ne={bits:S.distbits},ae=m(R,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,ne),S.distbits=ne.bits,ae){j.msg="invalid distances set",S.mode=30;break}if(S.mode=20,Q===6)break e;case 20:S.mode=21;case 21:if(6<=te&&258<=ve){j.next_out=ue,j.avail_out=ve,j.next_in=$,j.avail_in=te,S.hold=C,S.bits=k,x(j,le),ue=j.next_out,V=j.output,ve=j.avail_out,$=j.next_in,Y=j.input,te=j.avail_in,C=S.hold,k=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;Ee=(O=S.lencode[C&(1<<S.lenbits)-1])>>>16&255,Oe=65535&O,!((Te=O>>>24)<=k);){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(Ee&&(240&Ee)==0){for(ze=Te,bt=Ee,pe=Oe;Ee=(O=S.lencode[pe+((C&(1<<ze+bt)-1)>>ze)])>>>16&255,Oe=65535&O,!(ze+(Te=O>>>24)<=k);){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}C>>>=ze,k-=ze,S.back+=ze}if(C>>>=Te,k-=Te,S.back+=Te,S.length=Oe,Ee===0){S.mode=26;break}if(32&Ee){S.back=-1,S.mode=12;break}if(64&Ee){j.msg="invalid literal/length code",S.mode=30;break}S.extra=15&Ee,S.mode=22;case 22:if(S.extra){for(M=S.extra;k<M;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}S.length+=C&(1<<S.extra)-1,C>>>=S.extra,k-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;Ee=(O=S.distcode[C&(1<<S.distbits)-1])>>>16&255,Oe=65535&O,!((Te=O>>>24)<=k);){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if((240&Ee)==0){for(ze=Te,bt=Ee,pe=Oe;Ee=(O=S.distcode[pe+((C&(1<<ze+bt)-1)>>ze)])>>>16&255,Oe=65535&O,!(ze+(Te=O>>>24)<=k);){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}C>>>=ze,k-=ze,S.back+=ze}if(C>>>=Te,k-=Te,S.back+=Te,64&Ee){j.msg="invalid distance code",S.mode=30;break}S.offset=Oe,S.extra=15&Ee,S.mode=24;case 24:if(S.extra){for(M=S.extra;k<M;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}S.offset+=C&(1<<S.extra)-1,C>>>=S.extra,k-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){j.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if(ve===0)break e;if(oe=le-ve,S.offset>oe){if((oe=S.offset-oe)>S.whave&&S.sane){j.msg="invalid distance too far back",S.mode=30;break}we=oe>S.wnext?(oe-=S.wnext,S.wsize-oe):S.wnext-oe,oe>S.length&&(oe=S.length),Ie=S.window}else Ie=V,we=ue-S.offset,oe=S.length;for(ve<oe&&(oe=ve),ve-=oe,S.length-=oe;V[ue++]=Ie[we++],--oe;);S.length===0&&(S.mode=21);break;case 26:if(ve===0)break e;V[ue++]=S.length,ve--,S.mode=21;break;case 27:if(S.wrap){for(;k<32;){if(te===0)break e;te--,C|=Y[$++]<<k,k+=8}if(le-=ve,j.total_out+=le,S.total+=le,le&&(j.adler=S.check=S.flags?p(S.check,V,le,ue-le):y(S.check,V,le,ue-le)),le=ve,(S.flags?C:w(C))!==S.check){j.msg="incorrect data check",S.mode=30;break}k=C=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;k<32;){if(te===0)break e;te--,C+=Y[$++]<<k,k+=8}if(C!==(4294967295&S.total)){j.msg="incorrect length check",S.mode=30;break}k=C=0}S.mode=29;case 29:ae=1;break e;case 30:ae=-3;break e;case 31:return-4;case 32:default:return v}return j.next_out=ue,j.avail_out=ve,j.next_in=$,j.avail_in=te,S.hold=C,S.bits=k,(S.wsize||le!==j.avail_out&&S.mode<30&&(S.mode<27||Q!==4))&&Z(j,j.output,j.next_out,le-j.avail_out)?(S.mode=31,-4):(se-=j.avail_in,le-=j.avail_out,j.total_in+=se,j.total_out+=le,S.total+=le,S.wrap&&le&&(j.adler=S.check=S.flags?p(S.check,V,le,j.next_out-le):y(S.check,V,le,j.next_out-le)),j.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(se==0&&le===0||Q===4)&&ae===_&&(ae=-5),ae)},d.inflateEnd=function(j){if(!j||!j.state)return v;var Q=j.state;return Q.window&&(Q.window=null),j.state=null,_},d.inflateGetHeader=function(j,Q){var S;return j&&j.state?(2&(S=j.state).wrap)==0?v:((S.head=Q).done=!1,_):v},d.inflateSetDictionary=function(j,Q){var S,Y=Q.length;return j&&j.state?(S=j.state).wrap!==0&&S.mode!==11?v:S.mode===11&&y(1,Q,Y,0)!==S.check?-3:Z(j,Q,Y,Y)?(S.mode=31,-4):(S.havedict=1,_):v},d.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,u,d){var f=l("../utils/common"),y=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],x=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];u.exports=function(A,R,_,v,T,h,E,w){var D,L,P,I,B,F,G,z,re,Z=w.bits,j=0,Q=0,S=0,Y=0,V=0,$=0,ue=0,te=0,ve=0,C=0,k=null,se=0,le=new f.Buf16(16),oe=new f.Buf16(16),we=null,Ie=0;for(j=0;j<=15;j++)le[j]=0;for(Q=0;Q<v;Q++)le[R[_+Q]]++;for(V=Z,Y=15;1<=Y&&le[Y]===0;Y--);if(Y<V&&(V=Y),Y===0)return T[h++]=20971520,T[h++]=20971520,w.bits=1,0;for(S=1;S<Y&&le[S]===0;S++);for(V<S&&(V=S),j=te=1;j<=15;j++)if(te<<=1,(te-=le[j])<0)return-1;if(0<te&&(A===0||Y!==1))return-1;for(oe[1]=0,j=1;j<15;j++)oe[j+1]=oe[j]+le[j];for(Q=0;Q<v;Q++)R[_+Q]!==0&&(E[oe[R[_+Q]]++]=Q);if(F=A===0?(k=we=E,19):A===1?(k=y,se-=257,we=p,Ie-=257,256):(k=x,we=m,-1),j=S,B=h,ue=Q=C=0,P=-1,I=(ve=1<<($=V))-1,A===1&&852<ve||A===2&&592<ve)return 1;for(;;){for(G=j-ue,re=E[Q]<F?(z=0,E[Q]):E[Q]>F?(z=we[Ie+E[Q]],k[se+E[Q]]):(z=96,0),D=1<<j-ue,S=L=1<<$;T[B+(C>>ue)+(L-=D)]=G<<24|z<<16|re|0,L!==0;);for(D=1<<j-1;C&D;)D>>=1;if(D!==0?(C&=D-1,C+=D):C=0,Q++,--le[j]==0){if(j===Y)break;j=R[_+E[Q]]}if(V<j&&(C&I)!==P){for(ue===0&&(ue=V),B+=S,te=1<<($=j-ue);$+ue<Y&&!((te-=le[$+ue])<=0);)$++,te<<=1;if(ve+=1<<$,A===1&&852<ve||A===2&&592<ve)return 1;T[P=C&I]=V<<24|$<<16|B-h|0}}return C!==0&&(T[B+C]=j-ue<<24|64<<16|0),w.bits=V,0}},{"../utils/common":41}],51:[function(l,u,d){u.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,u,d){var f=l("../utils/common"),y=0,p=1;function x(O){for(var q=O.length;0<=--q;)O[q]=0}var m=0,A=29,R=256,_=R+1+A,v=30,T=19,h=2*_+1,E=15,w=16,D=7,L=256,P=16,I=17,B=18,F=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Z=new Array(2*(_+2));x(Z);var j=new Array(2*v);x(j);var Q=new Array(512);x(Q);var S=new Array(256);x(S);var Y=new Array(A);x(Y);var V,$,ue,te=new Array(v);function ve(O,q,me,ge,J){this.static_tree=O,this.extra_bits=q,this.extra_base=me,this.elems=ge,this.max_length=J,this.has_stree=O&&O.length}function C(O,q){this.dyn_tree=O,this.max_code=0,this.stat_desc=q}function k(O){return O<256?Q[O]:Q[256+(O>>>7)]}function se(O,q){O.pending_buf[O.pending++]=255&q,O.pending_buf[O.pending++]=q>>>8&255}function le(O,q,me){O.bi_valid>w-me?(O.bi_buf|=q<<O.bi_valid&65535,se(O,O.bi_buf),O.bi_buf=q>>w-O.bi_valid,O.bi_valid+=me-w):(O.bi_buf|=q<<O.bi_valid&65535,O.bi_valid+=me)}function oe(O,q,me){le(O,me[2*q],me[2*q+1])}function we(O,q){for(var me=0;me|=1&O,O>>>=1,me<<=1,0<--q;);return me>>>1}function Ie(O,q,me){var ge,J,be=new Array(E+1),Se=0;for(ge=1;ge<=E;ge++)be[ge]=Se=Se+me[ge-1]<<1;for(J=0;J<=q;J++){var xe=O[2*J+1];xe!==0&&(O[2*J]=we(be[xe]++,xe))}}function Te(O){var q;for(q=0;q<_;q++)O.dyn_ltree[2*q]=0;for(q=0;q<v;q++)O.dyn_dtree[2*q]=0;for(q=0;q<T;q++)O.bl_tree[2*q]=0;O.dyn_ltree[2*L]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Ee(O){8<O.bi_valid?se(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function Oe(O,q,me,ge){var J=2*q,be=2*me;return O[J]<O[be]||O[J]===O[be]&&ge[q]<=ge[me]}function ze(O,q,me){for(var ge=O.heap[me],J=me<<1;J<=O.heap_len&&(J<O.heap_len&&Oe(q,O.heap[J+1],O.heap[J],O.depth)&&J++,!Oe(q,ge,O.heap[J],O.depth));)O.heap[me]=O.heap[J],me=J,J<<=1;O.heap[me]=ge}function bt(O,q,me){var ge,J,be,Se,xe=0;if(O.last_lit!==0)for(;ge=O.pending_buf[O.d_buf+2*xe]<<8|O.pending_buf[O.d_buf+2*xe+1],J=O.pending_buf[O.l_buf+xe],xe++,ge===0?oe(O,J,q):(oe(O,(be=S[J])+R+1,q),(Se=F[be])!==0&&le(O,J-=Y[be],Se),oe(O,be=k(--ge),me),(Se=G[be])!==0&&le(O,ge-=te[be],Se)),xe<O.last_lit;);oe(O,L,q)}function pe(O,q){var me,ge,J,be=q.dyn_tree,Se=q.stat_desc.static_tree,xe=q.stat_desc.has_stree,Ne=q.stat_desc.elems,Xe=-1;for(O.heap_len=0,O.heap_max=h,me=0;me<Ne;me++)be[2*me]!==0?(O.heap[++O.heap_len]=Xe=me,O.depth[me]=0):be[2*me+1]=0;for(;O.heap_len<2;)be[2*(J=O.heap[++O.heap_len]=Xe<2?++Xe:0)]=1,O.depth[J]=0,O.opt_len--,xe&&(O.static_len-=Se[2*J+1]);for(q.max_code=Xe,me=O.heap_len>>1;1<=me;me--)ze(O,be,me);for(J=Ne;me=O.heap[1],O.heap[1]=O.heap[O.heap_len--],ze(O,be,1),ge=O.heap[1],O.heap[--O.heap_max]=me,O.heap[--O.heap_max]=ge,be[2*J]=be[2*me]+be[2*ge],O.depth[J]=(O.depth[me]>=O.depth[ge]?O.depth[me]:O.depth[ge])+1,be[2*me+1]=be[2*ge+1]=J,O.heap[1]=J++,ze(O,be,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],(function(Ue,Ct){var Mn,Gt,da,et,gt,Yt,it=Ct.dyn_tree,Li=Ct.max_code,ml=Ct.stat_desc.static_tree,gl=Ct.stat_desc.has_stree,Oa=Ct.stat_desc.extra_bits,fa=Ct.stat_desc.extra_base,dn=Ct.stat_desc.max_length,qt=0;for(et=0;et<=E;et++)Ue.bl_count[et]=0;for(it[2*Ue.heap[Ue.heap_max]+1]=0,Mn=Ue.heap_max+1;Mn<h;Mn++)dn<(et=it[2*it[2*(Gt=Ue.heap[Mn])+1]+1]+1)&&(et=dn,qt++),it[2*Gt+1]=et,Li<Gt||(Ue.bl_count[et]++,gt=0,fa<=Gt&&(gt=Oa[Gt-fa]),Yt=it[2*Gt],Ue.opt_len+=Yt*(et+gt),gl&&(Ue.static_len+=Yt*(ml[2*Gt+1]+gt)));if(qt!==0){do{for(et=dn-1;Ue.bl_count[et]===0;)et--;Ue.bl_count[et]--,Ue.bl_count[et+1]+=2,Ue.bl_count[dn]--,qt-=2}while(0<qt);for(et=dn;et!==0;et--)for(Gt=Ue.bl_count[et];Gt!==0;)Li<(da=Ue.heap[--Mn])||(it[2*da+1]!==et&&(Ue.opt_len+=(et-it[2*da+1])*it[2*da],it[2*da+1]=et),Gt--)}})(O,q),Ie(be,Xe,O.bl_count)}function b(O,q,me){var ge,J,be=-1,Se=q[1],xe=0,Ne=7,Xe=4;for(Se===0&&(Ne=138,Xe=3),q[2*(me+1)+1]=65535,ge=0;ge<=me;ge++)J=Se,Se=q[2*(ge+1)+1],++xe<Ne&&J===Se||(xe<Xe?O.bl_tree[2*J]+=xe:J!==0?(J!==be&&O.bl_tree[2*J]++,O.bl_tree[2*P]++):xe<=10?O.bl_tree[2*I]++:O.bl_tree[2*B]++,be=J,Xe=(xe=0)===Se?(Ne=138,3):J===Se?(Ne=6,3):(Ne=7,4))}function ae(O,q,me){var ge,J,be=-1,Se=q[1],xe=0,Ne=7,Xe=4;for(Se===0&&(Ne=138,Xe=3),ge=0;ge<=me;ge++)if(J=Se,Se=q[2*(ge+1)+1],!(++xe<Ne&&J===Se)){if(xe<Xe)for(;oe(O,J,O.bl_tree),--xe!=0;);else J!==0?(J!==be&&(oe(O,J,O.bl_tree),xe--),oe(O,P,O.bl_tree),le(O,xe-3,2)):xe<=10?(oe(O,I,O.bl_tree),le(O,xe-3,3)):(oe(O,B,O.bl_tree),le(O,xe-11,7));be=J,Xe=(xe=0)===Se?(Ne=138,3):J===Se?(Ne=6,3):(Ne=7,4)}}x(te);var ne=!1;function M(O,q,me,ge){le(O,(m<<1)+(ge?1:0),3),(function(J,be,Se,xe){Ee(J),se(J,Se),se(J,~Se),f.arraySet(J.pending_buf,J.window,be,Se,J.pending),J.pending+=Se})(O,q,me)}d._tr_init=function(O){ne||((function(){var q,me,ge,J,be,Se=new Array(E+1);for(J=ge=0;J<A-1;J++)for(Y[J]=ge,q=0;q<1<<F[J];q++)S[ge++]=J;for(S[ge-1]=J,J=be=0;J<16;J++)for(te[J]=be,q=0;q<1<<G[J];q++)Q[be++]=J;for(be>>=7;J<v;J++)for(te[J]=be<<7,q=0;q<1<<G[J]-7;q++)Q[256+be++]=J;for(me=0;me<=E;me++)Se[me]=0;for(q=0;q<=143;)Z[2*q+1]=8,q++,Se[8]++;for(;q<=255;)Z[2*q+1]=9,q++,Se[9]++;for(;q<=279;)Z[2*q+1]=7,q++,Se[7]++;for(;q<=287;)Z[2*q+1]=8,q++,Se[8]++;for(Ie(Z,_+1,Se),q=0;q<v;q++)j[2*q+1]=5,j[2*q]=we(q,5);V=new ve(Z,F,R+1,_,E),$=new ve(j,G,0,v,E),ue=new ve(new Array(0),z,0,T,D)})(),ne=!0),O.l_desc=new C(O.dyn_ltree,V),O.d_desc=new C(O.dyn_dtree,$),O.bl_desc=new C(O.bl_tree,ue),O.bi_buf=0,O.bi_valid=0,Te(O)},d._tr_stored_block=M,d._tr_flush_block=function(O,q,me,ge){var J,be,Se=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=(function(xe){var Ne,Xe=4093624447;for(Ne=0;Ne<=31;Ne++,Xe>>>=1)if(1&Xe&&xe.dyn_ltree[2*Ne]!==0)return y;if(xe.dyn_ltree[18]!==0||xe.dyn_ltree[20]!==0||xe.dyn_ltree[26]!==0)return p;for(Ne=32;Ne<R;Ne++)if(xe.dyn_ltree[2*Ne]!==0)return p;return y})(O)),pe(O,O.l_desc),pe(O,O.d_desc),Se=(function(xe){var Ne;for(b(xe,xe.dyn_ltree,xe.l_desc.max_code),b(xe,xe.dyn_dtree,xe.d_desc.max_code),pe(xe,xe.bl_desc),Ne=T-1;3<=Ne&&xe.bl_tree[2*re[Ne]+1]===0;Ne--);return xe.opt_len+=3*(Ne+1)+5+5+4,Ne})(O),J=O.opt_len+3+7>>>3,(be=O.static_len+3+7>>>3)<=J&&(J=be)):J=be=me+5,me+4<=J&&q!==-1?M(O,q,me,ge):O.strategy===4||be===J?(le(O,2+(ge?1:0),3),bt(O,Z,j)):(le(O,4+(ge?1:0),3),(function(xe,Ne,Xe,Ue){var Ct;for(le(xe,Ne-257,5),le(xe,Xe-1,5),le(xe,Ue-4,4),Ct=0;Ct<Ue;Ct++)le(xe,xe.bl_tree[2*re[Ct]+1],3);ae(xe,xe.dyn_ltree,Ne-1),ae(xe,xe.dyn_dtree,Xe-1)})(O,O.l_desc.max_code+1,O.d_desc.max_code+1,Se+1),bt(O,O.dyn_ltree,O.dyn_dtree)),Te(O),ge&&Ee(O)},d._tr_tally=function(O,q,me){return O.pending_buf[O.d_buf+2*O.last_lit]=q>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&q,O.pending_buf[O.l_buf+O.last_lit]=255&me,O.last_lit++,q===0?O.dyn_ltree[2*me]++:(O.matches++,q--,O.dyn_ltree[2*(S[me]+R+1)]++,O.dyn_dtree[2*k(q)]++),O.last_lit===O.lit_bufsize-1},d._tr_align=function(O){le(O,2,3),oe(O,L,Z),(function(q){q.bi_valid===16?(se(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)})(O)}},{"../utils/common":41}],53:[function(l,u,d){u.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,u,d){(function(f){(function(y,p){if(!y.setImmediate){var x,m,A,R,_=1,v={},T=!1,h=y.document,E=Object.getPrototypeOf&&Object.getPrototypeOf(y);E=E&&E.setTimeout?E:y,x={}.toString.call(y.process)==="[object process]"?function(P){process.nextTick(function(){D(P)})}:(function(){if(y.postMessage&&!y.importScripts){var P=!0,I=y.onmessage;return y.onmessage=function(){P=!1},y.postMessage("","*"),y.onmessage=I,P}})()?(R="setImmediate$"+Math.random()+"$",y.addEventListener?y.addEventListener("message",L,!1):y.attachEvent("onmessage",L),function(P){y.postMessage(R+P,"*")}):y.MessageChannel?((A=new MessageChannel).port1.onmessage=function(P){D(P.data)},function(P){A.port2.postMessage(P)}):h&&"onreadystatechange"in h.createElement("script")?(m=h.documentElement,function(P){var I=h.createElement("script");I.onreadystatechange=function(){D(P),I.onreadystatechange=null,m.removeChild(I),I=null},m.appendChild(I)}):function(P){setTimeout(D,0,P)},E.setImmediate=function(P){typeof P!="function"&&(P=new Function(""+P));for(var I=new Array(arguments.length-1),B=0;B<I.length;B++)I[B]=arguments[B+1];var F={callback:P,args:I};return v[_]=F,x(_),_++},E.clearImmediate=w}function w(P){delete v[P]}function D(P){if(T)setTimeout(D,0,P);else{var I=v[P];if(I){T=!0;try{(function(B){var F=B.callback,G=B.args;switch(G.length){case 0:F();break;case 1:F(G[0]);break;case 2:F(G[0],G[1]);break;case 3:F(G[0],G[1],G[2]);break;default:F.apply(p,G)}})(I)}finally{w(P),T=!1}}}}function L(P){P.source===y&&typeof P.data=="string"&&P.data.indexOf(R)===0&&D(+P.data.slice(R.length))}})(typeof self>"u"?f===void 0?this:f:self)}).call(this,typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Uc)),Uc.exports}var Rb=Ab();const Tb=eu(Rb),_b=({logs:c,currentRound:o,currentPaperVersion:l,filePrefix:u,dataAlert:d,dataFileName:f,dataFileContent:y})=>{const[p,x]=he.useState([]),[m,A]=he.useState(null),[R,_]=he.useState(!1),[v,T]=he.useState(!1),[h,E]=he.useState(null),[w,D]=he.useState(null),[L,P]=he.useState(!1),[I,B]=he.useState(!1),F=async()=>{_(!0),A(null);const Q=ca(l,"icis_paper"),S=wi(o),Y=iu();if(!Q){A("Missing paper file to save"),_(!1);return}try{const V=u?`${u}_`:"",$=new Tb,ue=[],te=du();te&&($.file(te.filename,te.blob),ue.push(te.filename),console.log(`[SaveAll] Added PDF: ${te.filename}`));const ve=`${V}icis_paper_v${l}_FINAL.tex`;$.file(ve,Q),ue.push(ve),console.log(`[SaveAll] Added TeX: ${ve}`);const C=vm();if(C){const Oe=`${V}${C.filename}`;$.file(Oe,C.content),ue.push(Oe),console.log(`[SaveAll] Added BibTeX: ${Oe}`)}const k=hm();if(k.length>0){console.log(`[SaveAll] Adding ${k.length} PNG figures...`);const Oe=await pm();for(const ze of Oe)$.file(ze.filename,ze.blob),ue.push(ze.filename);console.log(`[SaveAll] Added ${Oe.length} PNG figures`)}if(f&&y&&($.file(f,y),ue.push(f),console.log(`[SaveAll] Added data file: ${f}`)),S){const Oe=`${V}feedback_v${o}.json`;$.file(Oe,JSON.stringify(S,null,2)),ue.push(Oe)}if(Y&&Y.length>0)for(const Oe of Y){const ze=`${V}oversight_v${Oe.version||1}.json`;$.file(ze,JSON.stringify(Oe,null,2)),ue.push(ze)}const se=bm();if(se){const Oe=`${V}chart_data${se.isSynthetic?"_synthetic":""}.json`;$.file(Oe,se.chartDataJson),ue.push(Oe),console.log(`[SaveAll] Added chart data: ${Oe}`);const ze=`${V}visualization_code.py`;$.file(ze,se.pythonCode),ue.push(ze),console.log(`[SaveAll] Added Python code: ${ze}`)}const le=Sm();if(le){const Oe=`${V}datatable.csv`;$.file(Oe,le),ue.push(Oe),console.log(`[SaveAll] Added data table CSV: ${Oe}`)}const oe=await $.generateAsync({type:"blob"}),we=`${V}icis_submission_v${l}.zip`,Ie=URL.createObjectURL(oe),Te=document.createElement("a");Te.href=Ie,Te.download=we,document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),URL.revokeObjectURL(Ie),console.log(`[SaveAll] Downloaded ${we} with ${ue.length} files`),x([we,...ue]);const Ee=await um();Ee.success?console.log("[SaveAll] Data file cleaned up from cloud storage"):console.warn("[SaveAll] Failed to clean up data file:",Ee.error)}catch(V){console.error("[SaveAll] Error:",V),A(V instanceof Error?V.message:"Failed to create zip file")}_(!1)},G=async()=>{T(!0),E(null),A(null);const Q=ca(l,"icis_paper");if(!Q){A("No paper content available to compile"),T(!1);return}const Y=`${u?`${u}_`:""}icis_paper_v${l}_FINAL.tex`,V=mm();console.log(`[Compile] Compiling with ${V.length} PNG figures`);const $=await nm(Y,Q,V.length>0?V:void 0);E($),$.success||A($.error||"PDF compilation failed"),T(!1)},z=()=>{h!=null&&h.pdfFilename&&rm(h.pdfFilename)},re=async()=>{P(!0),B(!1);const S=`${u?`${u}_`:""}icis_paper_v${l}_FINAL.tex`,Y=await im(S);D(Y),P(!1)},Z=()=>{w!=null&&w.fullUrl&&(navigator.clipboard.writeText(w.fullUrl),B(!0),setTimeout(()=>B(!1),3e3))},j=()=>{w!=null&&w.fullUrl&&sm(w.fullUrl)};return i.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto",children:[i.jsx("div",{className:"w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100",children:i.jsx(nu,{size:40})}),i.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-2",children:"Process Completed!"}),i.jsxs("p",{className:"text-slate-600 mb-8",children:["The research paper has been finalized after ",o," revision cycle(s)."]}),i.jsx(Ci,{logs:c,height:"h-32"}),i.jsxs("ul",{className:"text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm",children:[i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Paper compiled (v",l,")"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," All sections verified"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Submission package generated"]}),i.jsxs("li",{className:"flex items-center gap-2 text-slate-700",children:[i.jsx(zt,{size:16,className:"text-emerald-500"})," Ready for download"]})]}),i.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[i.jsx("button",{onClick:G,disabled:v||R,className:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:v?i.jsxs(i.Fragment,{children:[i.jsx(wp,{size:18,className:"animate-spin"}),"Compiling PDF..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Ni,{size:18}),"Compile LaTeX to PDF"]})}),(h==null?void 0:h.success)&&i.jsx("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"text-left",children:[i.jsx("p",{className:"text-sm font-medium text-emerald-800",children:"PDF Generated Successfully!"}),i.jsxs("p",{className:"text-xs text-emerald-600",children:[h.pdfFilename," (",Math.round((h.fileSize||0)/1024)," KB)",h.pageCount&&` • ${h.pageCount} pages`]})]}),i.jsxs("button",{onClick:z,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",children:[i.jsx(sl,{size:16}),"Download"]})]})}),(h==null?void 0:h.success)&&(h==null?void 0:h.exceedsLimit)&&i.jsxs("div",{className:"bg-amber-50 border border-amber-300 rounded-lg p-4",children:[i.jsx("p",{className:"text-sm font-medium text-amber-800",children:"⚠️ Page Limit Warning"}),i.jsxs("p",{className:"text-xs text-amber-700 mt-1",children:["This paper is ",h.pageCount," pages, exceeding the ICIS 16-page limit. Please revise to reduce length before submission."]})]}),d&&i.jsxs("div",{className:"bg-orange-50 border border-orange-300 rounded-lg p-4",children:[i.jsx("p",{className:"text-sm font-medium text-orange-800",children:"⚠️ Data Alert"}),i.jsx("p",{className:"text-xs text-orange-700 mt-1",children:d})]}),(h==null?void 0:h.success)&&i.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(Hc,{size:18,className:"text-blue-600"}),i.jsx("p",{className:"text-sm font-medium text-blue-800",children:"Share Paper for Review"})]}),i.jsx("p",{className:"text-xs text-blue-600 mb-3",children:"Create a link to share the paper with researchers for feedback. They can view but not download the PDF."}),w!=null&&w.success?i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("input",{type:"text",readOnly:!0,value:w.fullUrl||"",className:"flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"}),i.jsxs("button",{onClick:Z,className:"bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1",title:"Copy link",children:[i.jsx(Ly,{size:14}),I?"Copied!":"Copy"]})]}),i.jsx("div",{className:"flex gap-2",children:i.jsxs("button",{onClick:j,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:[i.jsx(Si,{size:14}),"Open Preview"]})}),i.jsxs("p",{className:"text-xs text-blue-500 text-center",children:["Link expires in ",w.expiresIn]})]}):i.jsx("button",{onClick:re,disabled:L,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2",children:L?i.jsxs(i.Fragment,{children:[i.jsx(wp,{size:16,className:"animate-spin"}),"Creating Link..."]}):i.jsxs(i.Fragment,{children:[i.jsx(sv,{size:16}),"Create Shareable Link"]})})]}),i.jsxs("button",{onClick:F,disabled:R||v,className:"w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2",children:[i.jsx(wv,{size:18,className:R?"animate-pulse":""}),R?"Creating ZIP...":"Download All Files (.zip)"]}),i.jsx("p",{className:"text-xs text-slate-500 text-center",children:"Downloads ZIP with PDF, .tex, .bib, PNG figures, chart data JSON, Python code, and data files"}),p.length>0&&i.jsxs("div",{className:"text-sm text-emerald-600 text-center",children:[i.jsxs("p",{className:"font-medium mb-1",children:["Downloaded: ",p[0]]}),i.jsxs("p",{className:"text-xs",children:["Contains ",p.length-1," files: ",p.slice(1).map(Q=>Q.split(/[/\\]/).pop()).join(", ")]})]}),m&&i.jsxs("div",{className:"text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3",children:[i.jsx("p",{className:"font-medium",children:"Error:"}),i.jsx("p",{className:"text-xs",children:m}),(h==null?void 0:h.log)&&i.jsxs("details",{className:"mt-2 text-left",children:[i.jsx("summary",{className:"cursor-pointer text-xs text-red-500 hover:text-red-700",children:"Show compilation log"}),i.jsx("pre",{className:"mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap",children:h.log})]})]}),i.jsx("button",{onClick:()=>window.location.reload(),className:"text-indigo-600 font-medium hover:underline mt-4",children:"Start New Project"})]})]})},Nb=({state:c,isProcessing:o,onAction:l,uploadedFiles:u,onFileChange:d,detectionStatus:f,onRefreshDetection:y,onStageAbort:p,onStageRestart:x,filePrefix:m,dataFileName:A,dataFileContent:R,participantEmail:_,onNewInterview:v,onVenueChange:T})=>{const[h,E]=he.useState(),w=L=>{E(L),l("PROCEED_TO_SUPERVISOR")},D=()=>{switch(c.currentStage){case ye.SETUP:const L=c.rounds.length>0||c.currentPaperVersion>0||c.paperContent!=="";return i.jsx(fb,{logs:c.logs,stageStatus:c.stages[ye.SETUP],isProcessing:o,uploadedFiles:u,onFileChange:d,onAction:l,detectionStatus:f,onRefreshDetection:y,hasExistingCase:L,onNewInterview:v,onVenueChange:T});case ye.BUILDER:return i.jsx(hb,{logs:c.logs,isProcessing:o,isPartialPaper:c.isPartialPaper,currentBuilderStep:c.currentBuilderStep,paperContent:c.paperContent,onAbort:()=>p==null?void 0:p(ye.BUILDER),onRestart:()=>x==null?void 0:x(ye.BUILDER)});case ye.REVIEWER:const P=c.stages[ye.REVIEWER]===je.COMPLETED;return i.jsx(Sb,{logs:c.logs,isProcessing:o,currentRound:c.currentRound,isComplete:P,onProceedToSupervisor:w,onAbort:()=>p==null?void 0:p(ye.REVIEWER),onRestart:()=>x==null?void 0:x(ye.REVIEWER),filePrefix:m,participantEmail:_});case ye.SUPERVISOR:const I=al(c.currentRound),B=iu();return i.jsx(Eb,{currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,lastFeedback:c.lastFeedback,isProcessing:o,oversightData:I,allOversight:B,onAction:l,reviewOutputFiles:h});case ye.REVISER:return i.jsx(wb,{logs:c.logs,isProcessing:o,currentPaperVersion:c.currentPaperVersion,paperContent:c.paperContent,onAbort:()=>p==null?void 0:p(ye.REVISER),onRestart:()=>x==null?void 0:x(ye.REVISER)});case ye.FINALIZE:return i.jsx(_b,{logs:c.logs,currentRound:c.currentRound,currentPaperVersion:c.currentPaperVersion,filePrefix:m,dataAlert:c.dataAlert,dataFileName:A,dataFileContent:R});default:return i.jsx("div",{className:"flex items-center justify-center h-full text-slate-400",children:i.jsxs("p",{children:["Unknown stage: ",c.currentStage]})})}};return i.jsx("div",{className:"h-full p-6 lg:p-10 overflow-y-auto bg-slate-50",children:D()})};function fl(){return typeof window<"u"&&window.location.hostname.includes("github.io")?"https://icis-deploy-12-10-2025.vercel.app":""}function hl(){return{"Content-Type":"application/json"}}async function Cb(c){const o=fl(),l=new URLSearchParams,u=`${o}/api/participants${l.toString()?`?${l}`:""}`,f=await(await fetch(u,{headers:hl()})).json();if(!f.success)throw new Error(f.error||"Failed to fetch participants");return f.participants}async function Op(c){const o=fl(),u=await(await fetch(`${o}/api/participants`,{method:"PATCH",headers:hl(),body:JSON.stringify(c)})).json();if(!u.success)throw new Error(u.error||"Failed to update participant");return u.participant}async function Ib(c){const o=fl(),u=await(await fetch(`${o}/api/participants`,{method:"DELETE",headers:hl(),body:JSON.stringify({email:c})})).json();if(!u.success)throw new Error(u.error||"Failed to delete participant")}async function Db(){const c=fl(),l=await(await fetch(`${c}/api/research-stats`,{headers:hl()})).json();if(!l.success)throw new Error(l.error||"Failed to fetch research stats");return l.stats}const el=({label:c,value:o,icon:l,color:u,subtext:d})=>i.jsx("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm text-slate-500",children:c}),i.jsx("p",{className:`text-2xl font-bold ${u}`,children:o}),d&&i.jsx("p",{className:"text-xs text-slate-400 mt-1",children:d})]}),i.jsx("div",{className:`p-2 rounded-lg ${u.replace("text-","bg-").replace("-600","-100")}`,children:l})]})}),jb=({label:c,count:o,total:l,color:u})=>{const d=l>0?o/l*100:0;return i.jsxs("div",{className:"mb-3",children:[i.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[i.jsx("span",{className:"text-slate-600",children:c}),i.jsx("span",{className:"text-slate-800 font-medium",children:o})]}),i.jsx("div",{className:"w-full bg-slate-100 rounded-full h-2",children:i.jsx("div",{className:`h-2 rounded-full transition-all duration-500 ${u}`,style:{width:`${Math.max(d,2)}%`}})})]})},Ob=({onViewParticipants:c})=>{const[o,l]=he.useState(null),[u,d]=he.useState(!0),[f,y]=he.useState(null),p=async()=>{d(!0),y(null);try{const m=await Db();l(m)}catch(m){y(m instanceof Error?m.message:"Failed to load stats")}finally{d(!1)}};if(he.useEffect(()=>{p()},[]),u)return i.jsx("div",{className:"flex items-center justify-center h-64",children:i.jsx(cn,{className:"w-8 h-8 text-slate-400 animate-spin"})});if(f)return i.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-4",children:[i.jsxs("div",{className:"flex items-center gap-2 text-red-700",children:[i.jsx(Yc,{size:20}),i.jsxs("span",{children:["Error: ",f]})]}),i.jsx("button",{onClick:p,className:"mt-2 text-sm text-red-600 hover:text-red-800 underline",children:"Try again"})]});if(!o)return null;const x=[{label:"1. Registered",count:o.funnel.registered||0,color:"bg-gray-500"},{label:"2. Interview Done",count:o.funnel.interview_completed||0,color:"bg-blue-500"},{label:"3. Setup Done",count:o.funnel.setup_completed||0,color:"bg-sky-500"},{label:"4. Paper Built",count:o.funnel.builder_completed||0,color:"bg-amber-500"},{label:"5. Review Done",count:o.funnel.reviewer_completed||0,color:"bg-orange-500"},{label:"6. Oversight Done",count:o.funnel.supervisor_completed||0,color:"bg-purple-500",note:"Group 1 only"},{label:"7. Revisions Done",count:o.funnel.reviser_completed||0,color:"bg-indigo-500"},{label:"8. Finalized",count:o.funnel.finalize_completed||0,color:"bg-teal-500"},{label:"9. Paper Sent",count:o.funnel.paper_sent||0,color:"bg-cyan-500"},{label:"10. Survey Sent",count:o.funnel.survey_sent||0,color:"bg-violet-500"},{label:"11. Completed",count:o.funnel.survey_completed||0,color:"bg-green-500"},{label:"Dropped Out",count:o.funnel.dropped_out||0,color:"bg-red-500"}];return i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Research Dashboard"}),i.jsx("p",{className:"text-slate-500 text-sm",children:"ICIScopilot Study Participant Tracking"})]}),i.jsxs("button",{onClick:p,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[i.jsx(cn,{size:16}),"Refresh"]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[i.jsx(el,{label:"Total Participants",value:o.total,icon:i.jsx(cl,{size:24,className:"text-blue-600"}),color:"text-blue-600",subtext:`${o.active} active`}),i.jsx(el,{label:"Surveys Sent",value:o.surveysSent,icon:i.jsx(nu,{size:24,className:"text-purple-600"}),color:"text-purple-600"}),i.jsx(el,{label:"Surveys Completed",value:o.surveysCompleted,icon:i.jsx($c,{size:24,className:"text-emerald-600"}),color:"text-emerald-600"}),i.jsx(el,{label:"Completion Rate",value:`${o.completionRate}%`,icon:i.jsx(Yp,{size:24,className:"text-amber-600"}),color:"text-amber-600"})]}),o.alerts&&o.alerts.length>0&&i.jsx("div",{className:"space-y-2",children:o.alerts.map((m,A)=>i.jsxs("div",{className:`p-3 rounded-lg border flex items-start gap-3 ${m.type==="stuck"?"bg-amber-50 border-amber-200":m.type==="pending_survey"?"bg-blue-50 border-blue-200":"bg-slate-50 border-slate-200"}`,children:[i.jsx(Yc,{size:18,className:m.type==="stuck"?"text-amber-500":m.type==="pending_survey"?"text-blue-500":"text-slate-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-sm text-slate-800",children:m.message}),i.jsxs("p",{className:"text-xs text-slate-500 mt-1",children:[m.participants.slice(0,3).join(", "),m.participants.length>3&&` +${m.participants.length-3} more`]})]})]},A))}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx(Vc,{size:20,className:"text-slate-500"}),i.jsx("h3",{className:"font-semibold text-slate-800",children:"Participant Funnel"})]}),i.jsx("div",{className:"space-y-1",children:x.map(m=>i.jsx(jb,{label:m.label,count:m.count,total:o.total,color:m.color},m.label))})]}),i.jsxs("div",{className:"bg-white rounded-lg border border-slate-200 p-4 shadow-sm",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx(cy,{size:20,className:"text-slate-500"}),i.jsx("h3",{className:"font-semibold text-slate-800",children:"Group Comparison"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"p-3 bg-emerald-50 rounded-lg border border-emerald-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("span",{className:"font-medium text-emerald-800",children:"Group 1: With Oversight"}),i.jsx("span",{className:"text-lg font-bold text-emerald-600",children:o.groups.group1.total})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Interview"}),i.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.interviewRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Completion"}),i.jsxs("p",{className:"font-semibold text-emerald-700",children:[o.groups.group1.completionRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),i.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group1.dropRate,"%"]})]})]})]}),i.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg border border-blue-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("span",{className:"font-medium text-blue-800",children:"Group 2: Control (No Oversight)"}),i.jsx("span",{className:"text-lg font-bold text-blue-600",children:o.groups.group2.total})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Interview"}),i.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.interviewRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Completion"}),i.jsxs("p",{className:"font-semibold text-blue-700",children:[o.groups.group2.completionRate,"%"]})]}),i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-slate-500",children:"Drop Rate"}),i.jsxs("p",{className:"font-semibold text-red-600",children:[o.groups.group2.dropRate,"%"]})]})]})]}),o.groups.unassigned>0&&i.jsx("div",{className:"p-2 bg-slate-100 rounded-lg text-center",children:i.jsxs("span",{className:"text-sm text-slate-600",children:[o.groups.unassigned," unassigned participant(s)"]})})]})]})]}),i.jsx("div",{className:"text-center",children:i.jsx("button",{onClick:c,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"View All Participants"})})]})},Zc={registered:"Registered",interview_completed:"Interview Done",setup_completed:"Setup Done",builder_completed:"Paper Built",reviewer_completed:"Review Done",supervisor_completed:"Oversight Done",reviser_completed:"Revisions Done",finalize_completed:"Finalized",paper_sent:"Paper Sent",survey_sent:"Survey Sent",survey_completed:"Completed",dropped_out:"Dropped Out"},Em={1:"With Oversight",2:"Control (No Oversight)"},kb=({status:c})=>{const o={registered:"bg-gray-100 text-gray-700",interview_completed:"bg-blue-100 text-blue-700",setup_completed:"bg-sky-100 text-sky-700",builder_completed:"bg-amber-100 text-amber-700",reviewer_completed:"bg-orange-100 text-orange-700",supervisor_completed:"bg-purple-100 text-purple-700",reviser_completed:"bg-indigo-100 text-indigo-700",finalize_completed:"bg-teal-100 text-teal-700",paper_sent:"bg-cyan-100 text-cyan-700",survey_sent:"bg-violet-100 text-violet-700",survey_completed:"bg-green-100 text-green-700",dropped_out:"bg-red-100 text-red-700"};return i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o[c]}`,children:Zc[c]})},Lb=({groupId:c})=>{if(c===null)return i.jsx("span",{className:"text-xs text-slate-400",children:"Unassigned"});const o=c===1?"bg-emerald-100 text-emerald-700":"bg-blue-100 text-blue-700";return i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${o}`,children:Em[c]})},Mb=({onBack:c})=>{const[o,l]=he.useState([]),[u,d]=he.useState(!0),[f,y]=he.useState(null),[p,x]=he.useState(""),[m,A]=he.useState(""),[R,_]=he.useState("all"),[v,T]=he.useState(null),[h,E]=he.useState(null),w=async()=>{d(!0),y(null);try{const G=await Cb();l(G)}catch(G){y(G instanceof Error?G.message:"Failed to load participants")}finally{d(!1)}};he.useEffect(()=>{w()},[]);const D=o.filter(G=>{const z=!p||G.email.toLowerCase().includes(p.toLowerCase())||G.name.toLowerCase().includes(p.toLowerCase()),re=!m||G.status===m,Z=R==="all"||G.group_id===R;return z&&re&&Z}),L=async(G,z)=>{try{await Op({email:G,status:z}),await w(),T(null)}catch(re){alert(re instanceof Error?re.message:"Failed to update status")}},P=async(G,z)=>{try{await Op({email:G,group_id:z}),await w(),T(null)}catch(re){alert(re instanceof Error?re.message:"Failed to update group")}},I=async G=>{if(confirm(`Are you sure you want to delete participant ${G}?`))try{await Ib(G),await w(),T(null)}catch(z){alert(z instanceof Error?z.message:"Failed to delete participant")}},B=G=>new Date(G).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),F=["registered","interview_completed","setup_completed","builder_completed","reviewer_completed","supervisor_completed","reviser_completed","finalize_completed","paper_sent","survey_sent","survey_completed","dropped_out"];return i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("button",{onClick:c,className:"p-2 rounded-lg hover:bg-slate-100 transition-colors",children:i.jsx(hy,{size:20,className:"text-slate-600"})}),i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Participants"}),i.jsxs("p",{className:"text-slate-500 text-sm",children:[D.length," of ",o.length," participants"]})]})]}),i.jsxs("button",{onClick:w,className:"flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50",children:[i.jsx(cn,{size:16,className:u?"animate-spin":""}),"Refresh"]})]}),i.jsxs("div",{className:"flex flex-wrap gap-3",children:[i.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[i.jsx(ll,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),i.jsx("input",{type:"text",placeholder:"Search by name or email...",value:p,onChange:G=>x(G.target.value),className:"w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("select",{value:m,onChange:G=>A(G.target.value),className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[i.jsx("option",{value:"",children:"All Statuses"}),F.map(G=>i.jsx("option",{value:G,children:Zc[G]},G))]}),i.jsx(il,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]}),i.jsxs("div",{className:"relative",children:[i.jsxs("select",{value:R===null?"null":R==="all"?"all":R,onChange:G=>{const z=G.target.value;_(z==="all"?"all":z==="null"?null:parseInt(z))},className:"appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",children:[i.jsx("option",{value:"all",children:"All Groups"}),i.jsx("option",{value:"1",children:"Group 1: With Oversight"}),i.jsx("option",{value:"2",children:"Group 2: Control"}),i.jsx("option",{value:"null",children:"Unassigned"})]}),i.jsx(il,{size:14,className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"})]})]}),f&&i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm",children:f}),i.jsx("div",{className:"bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden",children:i.jsx("div",{className:"overflow-x-auto",children:i.jsxs("table",{className:"w-full text-sm",children:[i.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:i.jsxs("tr",{children:[i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Name"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Email"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Status"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Group"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Registered"}),i.jsx("th",{className:"text-left px-4 py-3 font-medium text-slate-600",children:"Updated"}),i.jsx("th",{className:"text-right px-4 py-3 font-medium text-slate-600",children:"Actions"})]})}),i.jsx("tbody",{children:u?i.jsx("tr",{children:i.jsxs("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:[i.jsx(cn,{className:"w-5 h-5 animate-spin mx-auto mb-2"}),"Loading..."]})}):D.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:7,className:"px-4 py-8 text-center text-slate-400",children:"No participants found"})}):D.map(G=>i.jsxs("tr",{className:"border-b border-slate-100 hover:bg-slate-50",children:[i.jsx("td",{className:"px-4 py-3 font-medium text-slate-800",children:G.name||i.jsx("span",{className:"text-slate-400 italic",children:"No name"})}),i.jsx("td",{className:"px-4 py-3 text-slate-600",children:G.email}),i.jsx("td",{className:"px-4 py-3",children:i.jsx(kb,{status:G.status})}),i.jsx("td",{className:"px-4 py-3",children:i.jsx(Lb,{groupId:G.group_id})}),i.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:B(G.registered_at)}),i.jsx("td",{className:"px-4 py-3 text-slate-500 text-xs",children:B(G.updated_at)}),i.jsxs("td",{className:"px-4 py-3 text-right relative",children:[i.jsx("button",{onClick:()=>T(v===G.id?null:G.id),className:"p-1 rounded hover:bg-slate-100",children:i.jsx(Hp,{size:16,className:"text-slate-400"})}),v===G.id&&i.jsxs("div",{className:"absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]",children:[i.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Status"}),F.map(z=>i.jsxs("button",{onClick:()=>L(G.email,z),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.status===z?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.status===z&&i.jsx(zt,{size:12}),i.jsx("span",{className:G.status===z?"":"ml-4",children:Zc[z]})]},z)),i.jsx("div",{className:"border-t border-slate-100 my-1"}),i.jsx("div",{className:"px-3 py-2 text-xs font-medium text-slate-400 uppercase",children:"Change Group"}),[1,2].map(z=>i.jsxs("button",{onClick:()=>P(G.email,z),className:`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${G.group_id===z?"text-blue-600 font-medium":"text-slate-700"}`,children:[G.group_id===z&&i.jsx(zt,{size:12}),i.jsx("span",{className:G.group_id===z?"":"ml-4",children:Em[z]})]},z)),i.jsx("div",{className:"border-t border-slate-100 my-1"}),i.jsxs("button",{onClick:()=>I(G.email),className:"w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2",children:[i.jsx(Dv,{size:14}),"Delete Participant"]})]})]})]},G.id))})]})})})]})},zb=({onClose:c})=>{const[o,l]=he.useState("dashboard");return i.jsx("div",{className:"h-full w-full bg-slate-50 overflow-y-auto",children:o==="dashboard"?i.jsx(Ob,{onViewParticipants:()=>l("participants")}):i.jsx(Mb,{onBack:()=>l("dashboard")})})},Ub="modulepreload",Fb=function(c){return"/"+c},kp={},Ia=function(o,l,u){let d=Promise.resolve();if(l&&l.length>0){let y=function(m){return Promise.all(m.map(A=>Promise.resolve(A).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),x=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));d=y(l.map(m=>{if(m=Fb(m),m in kp)return;kp[m]=!0;const A=m.endsWith(".css"),R=A?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${R}`))return;const _=document.createElement("link");if(_.rel=A?"stylesheet":Ub,A||(_.as="script"),_.crossOrigin="",_.href=m,x&&_.setAttribute("nonce",x),document.head.appendChild(_),A)return new Promise((v,T)=>{_.addEventListener("load",v),_.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${m}`)))})}))}function f(y){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=y,window.dispatchEvent(p),!p.defaultPrevented)throw y}return d.then(y=>{for(const p of y||[])p.status==="rejected"&&f(p.reason);return o().catch(f)})};let Bb="icis";function Pb(){return Bb}const Vb=`This set of prompts is designed to help you build a NEW research paper for ICIS (International Conference on Information Systems) from scratch. It will receive a research interview transcript and generate a complete paper in a single iteration.\r
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
**Citation Recency Distribution (CRITICAL):**\r
- Recent papers (2020-2025): 60% minimum - current state of the field\r
- Established papers (2015-2019): 20-25% - bridge literature\r
- Foundational/seminal papers (pre-2015): 15-20% - theoretical grounding only\r
\r
⚠️ PRIORITIZE RECENT LITERATURE: The majority of citations should reflect the current state of research (2020-2025).\r
`,$b=`================================================================================\r
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
`,Hb=`This set of prompts is designed to help you REVISE an existing ICIS (International Conference on Information Systems) research paper. It will receive constructive feedback and improve the previous version while preserving all existing content.\r
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
`,Gb=`================================================================================
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
`,Yb=`================================================================================
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
`,qb=`================================================================================
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
`,Xb=`ICIS Paper Title\r
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
`,Qb=`# MISQ IS Journal Review Criteria
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
`,Zb=`### The Prompt

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

**Goal:** Transform this academic paper into a standalone visual asset suitable for an executive summary of the paper.`,Wb=`You are a structured-data extraction engine.

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

`,Kb={SETUP:"setup.txt",BUILDER:"builder.txt",REVIEWER:"reviewer.txt",SUPERVISOR:"supervisor.txt",REVISER:"reviser.txt",FINALIZE:"finalize.txt",TEMPLATE:"template.txt",MISQ_CRITERIA:"review_criteria.txt",INFOGRAPHIC:"infographic.txt",TABLE:"datatable.txt"},Jb={SETUP:Gb,BUILDER:Vb,REVIEWER:$b,SUPERVISOR:Yb,REVISER:Hb,FINALIZE:qb,TEMPLATE:Xb,MISQ_CRITERIA:Qb,INFOGRAPHIC:Zb,TABLE:Wb},vi={};function Fc(c,o){let l=c;l=l.replace(/\{ICIS_PATH\}/g,Fp);const u=`/${o}`;return l=l.replace(/\{CONF_PATH\}/g,u),l}function ex(c,o){return`${c}:${o}`}async function tx(c,o){const l=ex(c,o);if(vi[l])return vi[l];const u=Kb[o];try{const f=await fetch(`/venues/conferences/${c}/${u}`);if(f.ok){const y=await f.text(),p=Fc(y,c);return vi[l]=p,p}}catch{console.warn(`[PromptService] Could not load conference prompt: ${c}/${u}`)}try{const f=await fetch(`/venues/shared/${u}`);if(f.ok){const y=await f.text(),p=Fc(y,c);return vi[l]=p,p}}catch{console.warn(`[PromptService] Could not load shared prompt: ${u}`)}console.log(`[PromptService] Falling back to legacy prompt for ${o}`);const d=Jb[o];if(d){const f=Fc(d,c);return vi[l]=f,f}return`[Prompt not found: ${o}]`}async function ol(c){const o=Pb();return tx(o,c)}const Ri="https://icis-deploy-12-10-2025.vercel.app",Ti="http://localhost:3001";function Ar(){return{"Content-Type":"application/json"}}const wm="";let Oi="research";const Am={draft:{gemini:"gemini-2.0-flash-exp",openai:"gpt-4o-mini"},research:{gemini:"gemini-3-pro-preview",openai:"gpt-5.2"}};function _i(){return Am[Oi].gemini}function Wc(){return Am[Oi].openai}function nx(c){Oi=c,console.log(`[GeminiService] Paper mode set to: ${c}`),console.log(`[GeminiService] Using Gemini model: ${_i()}`),console.log(`[GeminiService] Using OpenAI model: ${Wc()}`)}function ax(){return`https://generativelanguage.googleapis.com/v1beta/models/${_i()}:generateContent?key=${wm}`}const rx=wm;console.log("[API] Using Vercel proxy:",Ri);let bi=null,xi=null;async function ix(c=10){return bi&&bi.length>=c?(console.log(`[ExamplePapers] Using cached papers (${bi.length} available)`),bi.slice(0,c)):xi?(console.log("[ExamplePapers] Load already in progress, waiting..."),(await xi).slice(0,c)):(console.log(`[ExamplePapers] Loading ${c} example papers...`),xi=(async()=>{try{const o=Ri?`${Ri}/api/example-papers?count=${c}`:`${Ti}/api/example-papers?count=${c}`;console.log(`[ExamplePapers] Fetching from: ${o}`);const l=await fetch(o,{method:"GET",headers:Ar()});if(!l.ok)throw new Error(`Failed to load example papers: ${l.status} ${l.statusText}`);const u=await l.json();if(!u.success||!u.papers)throw new Error(u.error||"Invalid response from example papers API");return bi=u.papers,console.log(`[ExamplePapers] Loaded ${u.papers.length} papers (${Math.round(u.totalSize/1024/1024)}MB total)`),u.papers}catch(o){throw console.error("[ExamplePapers] Failed to load:",o),xi=null,o}})(),xi)}function Rm(c){var u,d,f;const o=(f=(d=(u=c.candidates)==null?void 0:u[0])==null?void 0:d.content)==null?void 0:f.parts;if(!o||!Array.isArray(o))return null;const l=o.filter(y=>y.text).map(y=>y.text);return l.length===0?null:(l.length>1&&console.log(`[Gemini] Concatenating ${l.length} text parts`),l.join(""))}async function sx(c,o,l){var m,A,R,_;const u=[];for(const v of l)u.push({inlineData:{mimeType:v.mimeType,data:v.base64}});const d=`
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

`;u.push({text:d+c});const f={contents:[{parts:u}],systemInstruction:{parts:[{text:o}]},generationConfig:{maxOutputTokens:8192,temperature:.7}};console.log(`[Gemini] Calling with ${l.length} example papers...`),console.log(`[Gemini] Using model: ${_i()}`),console.log(`[Gemini] Total parts: ${u.length} (${l.length} PDFs + 1 text)`);const y=await ki(),p=new AbortController,x=setTimeout(()=>{console.log("[Gemini] Request timeout - aborting after 5 minutes"),p.abort()},3e5);try{let v;if(y.type==="vercel"){const w=`${y.baseUrl}/api/gemini`;console.log(`[Gemini] Using Vercel proxy for multimodal request: ${w}`),v=await fetch(w,{method:"POST",headers:Ar(),body:JSON.stringify({...f,model:_i()}),signal:p.signal})}else{if(!rx)throw new Tt("API_KEY_INVALID","Gemini API key is not configured and no proxy available","Missing VITE_GEMINI_API_KEY",!1);console.log("[Gemini] Using direct API for multimodal request"),v=await fetch(ax(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f),signal:p.signal})}if(clearTimeout(x),!v.ok){const w=await v.text();throw lx(v.status,w)}const T=await v.json(),h=Rm(T),E=(A=(m=T.candidates)==null?void 0:m[0])==null?void 0:A.finishReason;if(E&&E!=="STOP"&&console.warn(`[Gemini] Response finished with reason: ${E} (content length: ${(h==null?void 0:h.length)||0})`),!h){if(E==="SAFETY")throw new Tt("CONTENT_FILTERED","Response was filtered due to safety settings.",`Finish reason: ${E}`,!1);if(E==="RECITATION"){const w=(R=T.candidates)==null?void 0:R[0],D=w==null?void 0:w.citationMetadata,L=w==null?void 0:w.safetyRatings;throw console.warn("[Gemini] RECITATION detected - output blocked due to similarity to training data"),console.warn("[Gemini] RECITATION details:",JSON.stringify({citationMetadata:D,safetyRatings:L,contentBlockReason:w==null?void 0:w.contentBlockReason,candidateCount:(_=T.candidates)==null?void 0:_.length},null,2)),new Tt("CONTENT_FILTERED","Response blocked due to similarity to training data (RECITATION). Retrying without example papers.",`Finish reason: ${E}`,!0)}throw new Tt("INVALID_RESPONSE","Empty response from AI with examples.",JSON.stringify(T).substring(0,200),!0)}return console.log(`[Gemini] Response received with examples (${h.length} chars)`),h}catch(v){if(clearTimeout(x),v instanceof Tt)throw v;const T=v;throw T.name==="AbortError"?new Tt("NETWORK_ERROR","Request timed out (5 min). The request with example papers may be too large.","AbortError: Request timeout",!1):new Tt("UNKNOWN",`Error with example papers: ${T.message}`,T.stack||T.message,!1)}}class Tt extends Error{constructor(o,l,u,d=!1,f){super(l),this.type=o,this.userMessage=l,this.technicalDetails=u,this.retryable=d,this.statusCode=f,this.name="GeminiError"}}function lx(c,o){var f,y;let l={};try{l=JSON.parse(o)}catch{}const u=((f=l.error)==null?void 0:f.message)||o,d=((y=l.error)==null?void 0:y.status)||"";switch(c){case 401:case 403:return new Tt("API_KEY_INVALID","API key is invalid or missing. Please check your configuration.",u,!1,c);case 429:return new Tt("RATE_LIMITED","Rate limit exceeded. Please wait a moment before trying again.",u,!0,c);case 503:return d==="UNAVAILABLE"||u.includes("overloaded")?new Tt("MODEL_OVERLOADED","The AI model is temporarily overloaded. Retrying automatically...",u,!0,c):new Tt("UNKNOWN","Service temporarily unavailable. Retrying...",u,!0,c);case 500:case 502:case 504:return new Tt("UNKNOWN","Server error. Retrying automatically...",u,!0,c);default:return new Tt("UNKNOWN",`API error (${c}): ${u.substring(0,100)}`,u,!1,c)}}const Tm=c=>new Promise(o=>setTimeout(o,c));async function ox(c,o){var A,R;const l=o===Ti?`${o}/api/gemini/chat`:`${o}/api/gemini`;console.log(`[Gemini] Calling via proxy: ${l}`);const u={...c,model:_i()},d=new AbortController,f=setTimeout(()=>{console.log("[Gemini] Proxy request timeout - aborting after 3 minutes"),d.abort()},18e4),y=await fetch(l,{method:"POST",headers:Ar(),body:JSON.stringify(u),signal:d.signal});if(clearTimeout(f),!y.ok){const _=await y.json().catch(()=>({error:"Unknown error"}));throw new Tt("UNKNOWN",`Gemini proxy error: ${_.error||_.details||"Unknown error"}`,JSON.stringify(_),y.status>=500)}const p=await y.json(),x=Rm(p),m=(R=(A=p.candidates)==null?void 0:A[0])==null?void 0:R.finishReason;if(m&&m!=="STOP"&&console.warn(`[Gemini Proxy] Response finished with reason: ${m} (content length: ${(x==null?void 0:x.length)||0})`),!x)throw new Tt("INVALID_RESPONSE","Received empty response from AI proxy.",JSON.stringify(p).substring(0,200),!0);return x}async function ja(c,o){const l={contents:[{parts:[{text:c}]}],generationConfig:{maxOutputTokens:8192,temperature:.7}};o&&(l.systemInstruction={parts:[{text:o}]});const u=await ki();if(u.type==="vercel")return console.log("[Gemini] Using Vercel proxy..."),ox(l,u.baseUrl);throw new Tt("API_KEY_INVALID","API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.","Missing API key and no proxy available",!1)}function Bc(c){let o=c;const l=o.match(/```latex\s*([\s\S]*?)\s*```/);l&&(o=l[1]);const u=o.indexOf("\\end{document}");return u!==-1&&(o=o.substring(0,u+14)),o=o.replace(/```javascript[\s\S]*?```/g,""),o=o.replace(/```js[\s\S]*?```/g,""),o=o.replace(/```python[\s\S]*?```/g,""),o=o.replace(/```[\s\S]*?```/g,""),o=o.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/Verification Report:[\s\S]*$/gi,""),o=o.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi,""),o=o.replace(/console\.log\([\s\S]*?\);/g,""),o=o.replace(/const \w+ = \{[\s\S]*?\};/g,""),o=o.trim(),console.log(`[cleanLatexOutput] Cleaned content from ${c.length} to ${o.length} characters`),o}function cx(c){const o=[{name:"Title",key:"title",prompt:`Generate a compelling academic title for this ICIS research paper that:
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
6. Prioritize recent papers (2020-2025) while including necessary foundational works`,minWords:500}),o}async function ux(c,o){var m;const l=Object.entries(o.previousSections).map(([A,R])=>`[${A}]
${R.substring(0,500)}...`).join(`

`);let u="";if(c.key==="references"){const A=Object.values(o.previousSections).join(`
`),R=/\(([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?),?\s*(\d{4})\)/g,_=new Set;let v;for(;(v=R.exec(A))!==null;){const T=v[1].replace(/\s+&\s+/g," & ").replace(/\s+and\s+/g," & "),h=v[2];_.add(`${T} (${h})`)}if(_.size>0){const T=[..._].sort().join(`
- `);console.log(`[generateSection] Found ${_.size} inline citations in paper`),u=`
CITATIONS USED IN PAPER:
The following citations were used in the paper body. Ensure you include matching references:
- ${T}

Generate complete APA references for each of these citations.
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
`):o.dataSummary&&console.log(`[generateSection] Data summary available but not used for ${c.key} section`);const y=`You are writing an academic research paper for ICIS (International Conference on Information Systems).

RESEARCH CONTEXT (from interview):
${o.interviewTranscript.substring(0,3e3)}
${d}
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
- References are generated separately and will appear at the end of the full paper`,p="You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.";let x;if(o.examplePapers&&o.examplePapers.length>0&&Oi==="research"){console.log(`[generateSection] Using ${o.examplePapers.length} example papers for ${c.name} (research mode)`);try{x=await sx(y,p,o.examplePapers)}catch(A){if(A instanceof Tt&&((m=A.details)!=null&&m.includes("RECITATION")))console.warn(`[generateSection] RECITATION error for ${c.name} - retrying without example papers`),x=await ja(y,p);else throw A}}else x=await ja(y,p);return x=x.replace(/^\s*\*\*([^*\n]+)\*\*\s*$/gm,"\\subsection{$1}").replace(/^\s*#{1,3}\s+.+\n/gm,"").trim(),x}const dx=async(c="Mock transcript content...",o=!1,l,u,d)=>{var w,D,L,P;console.log(`[runBuilder] ENTRY - dataFileName="${u}" (type: ${typeof u})`);const f=cx(o),y={};console.log(`[Builder] Starting section-by-section generation (${f.length} sections, ${o?"partial":"full"} paper)`);let p,x;if(u){console.log(`[Builder] Data file provided: ${u} - analyzing for ALL research types`),l==null||l("Data Analysis","starting");try{const I=await _m(u,B=>console.log(`[Builder] ${B}`),d);console.log("[Builder] Data analysis result:",{success:I.success,dataFileFound:I.dataFileFound,hasSummary:!!I.dataSummary,summaryLength:((w=I.dataSummary)==null?void 0:w.length)||0,error:I.error}),I.success&&I.dataSummary?(p=I.dataSummary,console.log("[Builder] Data analysis complete - summary available for paper generation"),console.log("[Builder] Data summary preview:",p.substring(0,500)),l==null||l("Data Analysis","completed")):(x=`*** DATA ALERT: Could not analyze data file "${u}". ${I.error||"File may be missing or unreadable."}`,console.warn(`[Builder] ${x}`),l==null||l("Data Analysis","error"))}catch(I){x=`*** DATA ALERT: Error analyzing data file: ${I.message}`,console.error(`[Builder] ${x}`),l==null||l("Data Analysis","error")}}else console.log("[Builder] No data file provided - proceeding without data analysis");let m=[];if(Oi==="research")try{l==null||l("Loading Examples","starting"),console.log("[Builder] Research mode - loading ICIS 2024 example papers..."),m=await ix(5),console.log(`[Builder] Loaded ${m.length} example papers for quality calibration`),l==null||l("Loading Examples","completed")}catch(I){console.warn("[Builder] Could not load example papers:",I.message),console.warn("[Builder] Proceeding without example papers - quality may be lower"),l==null||l("Loading Examples","error")}else console.log("[Builder] Draft mode - skipping example papers for faster generation");let A=[],R=!1,_="";if(!o)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations BEFORE Results section..."),console.log(`[Builder] Data summary available: ${!!p}, Data file: ${u||"none"}`);const I=`Research Interview: ${c.substring(0,2e3)}`,B=await Kc(c,I,u,F=>console.log(`[Builder] ${F}`),p);A=B.figures,R=B.usedSyntheticData,A.length>0&&(_=`

GENERATED FIGURES (reference these in your Results section):
`,A.forEach((F,G)=>{_+=`- Figure ${G+1} (\\ref{fig:fig${G+1}}): ${F.description}
`}),_+=`
IMPORTANT: Reference each figure in the text using Figure~\\ref{fig:fig1}, Figure~\\ref{fig:fig2}, etc.
`,_+=`Example: "As shown in Figure~\\ref{fig:fig1}, the distribution of..."
`),B.dataAlert&&(x=x?`${x}
${B.dataAlert}`:B.dataAlert),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${A.length} figures before Results section`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error");const B=`*** VISUALIZATION ERROR: ${I.message}`;x=x?`${x}
${B}`:B,R=!0}for(const I of f)try{l==null||l(I.name,"starting"),console.log(`[Builder] Generating: ${I.name}...`);const B=I.key==="results"&&_?(p||"")+_:p,F=await ux(I,{interviewTranscript:c,previousSections:y,dataSummary:B,examplePapers:m});y[I.key]=F,l==null||l(I.name,"completed"),console.log(`[Builder] Completed: ${I.name} (${F.split(/\s+/).length} words)`),await Tm(500)}catch(B){throw l==null||l(I.name,"error"),console.error(`[Builder] Error generating ${I.name}:`,B),new Error(`Failed to generate ${I.name}: ${B.message}`)}if(y.references)try{l==null||l("Reference Validation","starting"),console.log("[Builder] Validating references with Semantic Scholar...");const{validateAndEnrichReferences:I}=await Ia(async()=>{const{validateAndEnrichReferences:z}=await import("./referenceValidationService-DU688-x3.js");return{validateAndEnrichReferences:z}},[]),B=await I(y.references,c,{targetMin:o?15:25,targetMax:o?25:40});y.references=B.bibtex;const F=B.report;console.log(`[Builder] Reference validation complete:
  - Total: ${F.totalReferences}
  - Verified: ${F.verified} (${(F.verificationRate*100).toFixed(0)}%)
  - Discovered: ${F.discovered}
  - Recency (2020-2025): ${(F.recencyScore*100).toFixed(0)}%`);const{storeValidationReport:G}=await Ia(async()=>{const{storeValidationReport:z}=await Promise.resolve().then(()=>xr);return{storeValidationReport:z}},void 0);G(F),l==null||l("Reference Validation","completed")}catch(I){console.error("[Builder] Reference validation failed:",I),l==null||l("Reference Validation","error")}if(!o&&A.length===0)try{l==null||l("Visualizations","starting"),console.log("[Builder] Generating visualizations (post-sections fallback)...");const I=`
Abstract: ${((D=y.abstract)==null?void 0:D.substring(0,500))||""}
Research Focus: ${((L=y.introduction)==null?void 0:L.substring(0,500))||""}
Methodology: ${((P=y.methodology)==null?void 0:P.substring(0,500))||""}
`,B=await Kc(c,I,u,F=>console.log(`[Builder] ${F}`),p);A=B.figures,R=B.usedSyntheticData,B.dataAlert&&(x=x?`${x}
${B.dataAlert}`:B.dataAlert),!p&&B.dataSummary&&(p=B.dataSummary),l==null||l("Visualizations","completed"),console.log(`[Builder] Generated ${A.length} figures (fallback)`)}catch(I){console.error("[Builder] Visualization generation failed:",I),l==null||l("Visualizations","error"),R=!0}let v,T;if(!o)try{l==null||l("DataTable","starting"),console.log("[Builder] Generating structured data table with GPT-5.2...");const I=await Rx(y,B=>console.log(`[Builder] ${B}`));if(I.success&&I.latexTable){if(T=I.latexTable,v=I.csvContent,v){const{storeDataTableCsv:B}=await Ia(async()=>{const{storeDataTableCsv:F}=await Promise.resolve().then(()=>xr);return{storeDataTableCsv:F}},void 0);B(v)}console.log("[Builder] Data table generated successfully"),l==null||l("DataTable","completed")}else console.warn("[Builder] Data table generation failed:",I.error),l==null||l("DataTable","error")}catch(I){console.error("[Builder] Data table generation error:",I),l==null||l("DataTable","error")}const h=yx(y,o,A,R,T),E=h.split(/\s+/).length;return console.log(`[Builder] Paper complete: ${E} words, ${A.length} figures`),{paperContent:h,dataAlert:x,usedSyntheticData:R,dataSummary:p,dataTableCsv:v}};function fx(c){let o=c;o=o.replace(/^```(?:bibtex|bib|latex|tex)?\s*\n?/i,""),o=o.replace(/\n?```\s*$/i,"");const l=o.search(/@\w+\s*\{/);l>0&&(o=o.substring(l));let u=0,d=o.length;for(let y=0;y<o.length;y++)o[y]==="{"&&u++,o[y]==="}"&&(u--,u===0&&(d=y+1));d<o.length&&(o=o.substring(0,d)),o=o.trim();const f=`% Bibliography generated by ICIScopilot
% ${new Date().toISOString()}

`;return console.log(`[BibTeX] Cleaned content: ${o.length} chars, ${(o.match(/@\w+\{/g)||[]).length} entries`),f+o}function hx(c){let o=c;return o=o.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g,"$1\\_$2"),o=o.replace(/([^\\])%/g,"$1\\%"),o=o.replace(/([^\\])& /g,"$1\\& "),o=o.replace(/([^\\])#/g,"$1\\#"),o=o.replace(/^(\s*)\*\s/gm,"$1$\\bullet$ "),o=o.replace(/ \*([^*\s])/g," $\\ast$$1"),o=o.replace(/([^*\s])\* /g,"$1$\\ast$ "),o=o.replace(/__/g,"\\_\\_"),o=o.replace(/"/g,"''"),o=o.replace(/"/g,"``"),o=o.replace(/'/g,"'"),o=o.replace(/'/g,"`"),o}function px(c){let o=c.replace(/\n*References:\s*\n([\s\S]*?)(?=\\section|$)/gi,"");return o=o.replace(/\\section\*?\{References\}[\s\S]*?(?=\\section|$)/gi,""),o=o.replace(/\n\nReferences\n\n((?:[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+)/gi,""),o=o.trim(),o}const mx=`\\documentclass[12pt]{article}
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

`,gx=`
\\end{document}
`;function yx(c,o,l=[],u=!1,d){const f=o?["title","abstract","introduction","literature_review","theory","methodology","conclusion","references"]:["title","abstract","introduction","literature_review","theory","methodology","results","discussion","conclusion","references"],y={title:"Title",abstract:"Abstract",introduction:"Introduction",literature_review:"Literature Review",theory:"Theoretical Framework",methodology:"Methodology",results:"Results",discussion:"Discussion",conclusion:"Conclusion",references:"References"};let p=mx;u&&!o&&(p+=`% ============================================================================
% IMPORTANT NOTICE
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Data}\\\\[0.5em]
The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings. This paper is a draft produced by ICIScopilot and requires verification of all data before submission.
}}
\\end{center}
\\vspace{1em}

`);for(const x of f)if(c[x]){let m=hx(c[x]);if(x!=="references"&&(m=px(m)),x==="title")p+=`\\title{${m}}
\\maketitle

`;else if(x==="abstract")p+=`\\begin{abstract}
${m}
\\end{abstract}

`;else if(x==="references"){const A=fx(c[x]);gm("references.bib",A),p+=`\\nocite{*}
\\bibliographystyle{apalike}
\\bibliography{references}
`}else if(x==="results"){const A=l.filter(R=>R.filename!=="research_infographic.png");p+=`\\section{${y[x]}}

`,u&&A.length>0&&(p+=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

`),A.length>0&&(p+=Jc(A)),d&&(p+=`
\\subsection{Summary Data Table}

`,p+=`The following table presents key structured data extracted from this research. The complete dataset is available in the accompanying CSV file (datatable.csv). See Table~\\ref{tab:datatable} for details.

`,p+=d,p+=`

`),p+=`
${m}

`}else if(x==="discussion"){const A=l.find(R=>R.filename==="research_infographic.png");p+=`\\section{${y[x]}}

${m}

`,A&&(p+=`\\subsection*{Visual Summary}

`,p+=`The following infographic provides a visual summary of the key findings, frameworks, and practical implications presented in this research.

`,p+=Jc([A]))}else p+=`\\section{${y[x]}}

${m}

`}return p+=gx,p}async function vx(c,o,l){console.log("[DataAnalysis] Using Gemini to analyze CSV content..."),l==null||l("Analyzing data with AI...");const u=c.split(`
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
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;try{const y=await ja(f,"Analyze CSV data");if(y)return console.log("[DataAnalysis] Gemini analysis complete"),l==null||l("AI data analysis complete"),{success:!0,dataSummary:y,dataFileFound:!0}}catch(y){console.error("[DataAnalysis] Gemini analysis failed:",y)}return{success:!1,dataFileFound:!0,error:"AI analysis failed"}}async function _m(c,o,l){var f,y,p,x,m,A,R,_,v,T;if(console.log(`[DataAnalysis] analyzeDataFile called with: "${c}" (type: ${typeof c})`),l){o==null||o("Loading data file preview for verification...");const h=await fm(c);if(!h.success)return console.error(`[DataAnalysis] Failed to get file preview: ${h.error}`),{success:!1,dataFileFound:!1,error:`Could not read data file for verification: ${h.error}`};if(console.log(`[DataAnalysis] Showing preview for confirmation - File: ${h.filename}, First line: ${(f=h.firstLine)==null?void 0:f.substring(0,100)}...`),o==null||o(`Data file found: ${c} (${h.totalLines} lines). Awaiting confirmation...`),!await l({filename:h.filename,firstLine:h.firstLine,totalLines:h.totalLines}))return console.log("[DataAnalysis] User cancelled data file analysis"),o==null||o("Data file analysis cancelled by user"),{success:!1,dataFileFound:!0,error:"Data file analysis cancelled by user"};console.log("[DataAnalysis] User confirmed data file, proceeding with analysis"),o==null||o("Data file confirmed. Starting analysis...")}o==null||o("Analyzing data file...");const u=ji();if(u!=null&&u.content){console.log("[DataAnalysis] Trying Gemini analysis (no Python needed)...");const h=await vx(u.content,c,o);if(h.success)return h}if(u!=null&&u.content){console.log("[DataAnalysis] Trying cloud Python analysis (lightweight)..."),o==null||o("Using cloud data analysis...");try{const h=await dl(u.content,"full");if(h.success&&h.text_summary){console.log("[DataAnalysis] Cloud analysis successful!");let E=`File: ${c}
`;if(E+=`Dataset shape: ${(y=h.summary)==null?void 0:y.shape.rows} rows x ${(p=h.summary)==null?void 0:p.shape.columns} columns

`,E+=`COLUMN NAMES AND TYPES:
`,(x=h.summary)==null||x.columns.forEach(w=>{var L;const D=(L=h.summary)==null?void 0:L.numeric_columns.includes(w);E+=`  - ${w}: ${D?"numeric":"categorical"}
`}),E+=`
`,(m=h.summary)!=null&&m.numeric_columns.length){E+=`NUMERIC COLUMNS STATISTICS:
`;for(const w of h.summary.numeric_columns.slice(0,10)){const D=(A=h.summary.descriptive_stats)==null?void 0:A[w];D&&(E+=`  ${w}:
`,E+=`    min=${D.min}, max=${D.max}, mean=${D.mean}, std=${D.std}
`)}E+=`
`}if((R=h.summary)!=null&&R.categorical_columns.length){E+=`CATEGORICAL COLUMNS VALUE COUNTS:
`;for(const w of h.summary.categorical_columns.slice(0,5)){const D=(_=h.summary.categorical_summary)==null?void 0:_[w];if(D){const L=Object.keys(D).length;E+=`  ${w}: ${L} unique values
`,L<=10&&(E+=`    Values: ${JSON.stringify(D)}
`)}}}return o==null||o("Cloud data analysis complete"),{success:!0,dataSummary:E,dataFileFound:!0}}}catch(h){console.warn("[DataAnalysis] Cloud analysis failed, falling back to local Python:",h)}}console.log("[DataAnalysis] Falling back to local Python analysis..."),o==null||o("Using local Python for analysis...");const d=`import os
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
`;try{const h=await lm("analyze_data.py",d,c);if(console.log("[DataAnalysis] Python execution result:",{success:h.success,dataFileFound:h.dataFileFound,stdoutLength:((v=h.stdout)==null?void 0:v.length)||0,stderrLength:((T=h.stderr)==null?void 0:T.length)||0}),h.stdout&&console.log("[DataAnalysis] Python stdout (first 1000 chars):",h.stdout.substring(0,1e3)),h.stderr&&console.log("[DataAnalysis] Python stderr:",h.stderr),!h.success)return console.error("[DataAnalysis] Python execution failed:",h.error),{success:!1,dataFileFound:!1,error:h.error};let E;const w=h.dataFileFound??!1;if(h.stdout){const D=h.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);if(D)E=D[1].trim(),console.log("[DataAnalysis] Summary extracted successfully!"),console.log("[DataAnalysis] Summary preview (first 500 chars):",E.substring(0,500));else{if(h.stdout.includes("DATA FILE NOT FOUND")||h.stdout.includes("DATA FILE NOT READABLE"))return console.log("[DataAnalysis] Data file not found or not readable"),{success:!1,dataFileFound:!1,error:"Data file could not be read"};console.log("[DataAnalysis] Could not extract summary - regex did not match"),console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:',h.stdout.includes("DATA SUMMARY")),console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:',h.stdout.includes("DATA ANALYSIS COMPLETE"))}}else console.log("[DataAnalysis] No stdout from Python script");return o==null||o("Data analysis complete"),{success:!0,dataSummary:E,dataFileFound:w}}catch(h){return console.error("[DataAnalysis] Error:",h),{success:!1,dataFileFound:!1,error:h.message}}}async function Kc(c,o,l,u,d){const f=ji();let y=[],p=!1,x=!1,m,A=d;if(f!=null&&f.content){console.log("[Visualizations] Using QuickChart.io for data figure generation..."),u==null||u("Analyzing data for visualization...");try{const v=await dl(f.content,"full");if(v.success&&v.chart_data&&v.chart_data.length>0){console.log(`[Visualizations] Data analysis returned ${v.chart_data.length} chart configs`),u==null||u(`Generating ${v.chart_data.length} data figures via QuickChart.io...`);const{generateQuickChartFigures:T}=await Ia(async()=>{const{generateQuickChartFigures:E}=await Promise.resolve().then(()=>xr);return{generateQuickChartFigures:E}},void 0),h=await T(v.chart_data);if(h.success&&h.figures&&h.figures.length>0){y=h.figures.map(w=>({filename:w.filename,description:w.description,latexRef:w.filename,base64:w.base64}));const{storeChartData:E}=await Ia(async()=>{const{storeChartData:w}=await Promise.resolve().then(()=>xr);return{storeChartData:w}},void 0);E(v.chart_data,!1),x=!0,A=v.text_summary||d,u==null||u(`Generated ${y.length} data figures from uploaded data`),console.log(`[Visualizations] QuickChart.io generated ${y.length} data figures`)}else console.warn("[Visualizations] QuickChart.io generation failed:",h.error)}else console.warn("[Visualizations] Data analysis failed or returned no chart data")}catch(v){console.warn("[Visualizations] QuickChart.io failed:",v)}}if(y.length===0){console.log("[Visualizations] No data figures yet, generating AI-based data figures..."),u==null||u("Generating AI-based data visualizations...");try{const v=await bx(c,o,d);if(v&&v.length>0){console.log(`[Visualizations] AI generated ${v.length} chart configurations`),u==null||u(`Rendering ${v.length} AI data figures via QuickChart.io...`);const{generateQuickChartFigures:T,storeChartData:h}=await Ia(async()=>{const{generateQuickChartFigures:w,storeChartData:D}=await Promise.resolve().then(()=>xr);return{generateQuickChartFigures:w,storeChartData:D}},void 0),E=await T(v);E.success&&E.figures&&E.figures.length>0&&(y=E.figures.map(w=>({filename:w.filename,description:w.description,latexRef:w.filename,base64:w.base64})),h(v,!0),p=!0,m="*** NOTE: Data visualizations generated using AI-synthesized illustrative data. No data file was provided.",u==null||u(`Generated ${y.length} AI-based data figures`),console.log(`[Visualizations] QuickChart.io rendered ${y.length} AI data figures`))}}catch(v){console.warn("[Visualizations] AI QuickChart generation failed:",v)}}console.log("[Visualizations] Generating conceptual figures (research model, framework)..."),u==null||u("Generating conceptual research figures...");let R=[];try{const v=await xx(c,o,T=>{console.log(`[Visualizations] ${T}`),u==null||u(T)});v.success&&v.figures.length>0?(R=v.figures,console.log(`[Visualizations] Generated ${R.length} conceptual figures`),u==null||u(`Generated ${R.length} conceptual figures`)):console.warn("[Visualizations] Conceptual figure generation failed:",v.error)}catch(v){console.warn("[Visualizations] Conceptual figure generation error:",v)}const _=[...R,...y];if(_.length>0){const{storePngFiguresForCompilation:v}=await Ia(async()=>{const{storePngFiguresForCompilation:T}=await Promise.resolve().then(()=>xr);return{storePngFiguresForCompilation:T}},void 0);return v(_.map(T=>({filename:T.filename,base64:T.base64||""}))),console.log(`[Visualizations] Total figures: ${_.length} (${R.length} conceptual + ${y.length} data)`),u==null||u(`Generated ${_.length} total figures`),{figures:_,usedSyntheticData:p,dataFileFound:x,dataSummary:A,dataAlert:m}}return{figures:[],usedSyntheticData:!0,dataFileFound:!1,dataAlert:"*** VISUALIZATION ERROR: Could not generate any figures"}}async function bx(c,o,l){const u=`You are generating DATA-DRIVEN chart configurations for academic paper visualizations.

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

Return ONLY the JSON array with 1-2 data-driven figures.`;try{let f=(await ja(u,"Generate chart data")).trim();f.startsWith("```json")?f=f.slice(7):f.startsWith("```")&&(f=f.slice(3)),f.endsWith("```")&&(f=f.slice(0,-3)),f=f.trim();const y=JSON.parse(f);if(Array.isArray(y)&&y.length>0)return console.log(`[AI ChartData] Generated ${y.length} chart configurations`),y}catch(d){console.error("[AI ChartData] Failed to generate chart data:",d)}return[]}function Jc(c){if(c.length===0)return"";let o=`
% Generated Figures (PNG via QuickChart.io)
`;return c.forEach((l,u)=>{const d=l.filename.replace(/[^a-zA-Z0-9_.-]/g,"_"),f=l.description.replace(/_/g,"\\_").replace(/&/g,"\\&").replace(/%/g,"\\%");o+=`
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{${d}}
\\caption{${f}}
\\label{fig:fig${u+1}}
\\end{figure}
`}),o}async function xx(c,o,l){console.log("[ConceptualFigures] Starting conceptual figure generation..."),l==null||l("Generating conceptual research figures...");const u=[];try{const d=Sx(c,o);console.log("[ConceptualFigures] Generating research model diagram..."),l==null||l("Creating research model visualization...");const f=await Lp(d,l);f.success&&f.base64?(u.push({filename:"research_model.png",description:"Research model showing the theoretical framework, constructs, and hypothesized relationships",latexRef:"research_model.png",base64:f.base64}),console.log("[ConceptualFigures] Research model figure generated successfully")):console.warn("[ConceptualFigures] Research model generation failed:",f.error);const y=Ex(c,o);console.log("[ConceptualFigures] Generating framework overview..."),l==null||l("Creating framework overview visualization...");const p=await Lp(y,l);return p.success&&p.base64?(u.push({filename:"theoretical_framework.png",description:"Theoretical framework overview illustrating the key concepts and their relationships",latexRef:"theoretical_framework.png",base64:p.base64}),console.log("[ConceptualFigures] Framework overview figure generated successfully")):console.warn("[ConceptualFigures] Framework overview generation failed:",p.error),u.length>0?(console.log(`[ConceptualFigures] Successfully generated ${u.length} conceptual figures`),l==null||l(`Generated ${u.length} conceptual figures`),{success:!0,figures:u}):{success:!1,figures:[],error:"Failed to generate any conceptual figures"}}catch(d){const f=d.message;return console.error("[ConceptualFigures] Generation failed:",f),l==null||l(`Conceptual figure generation failed: ${f}`),{success:!1,figures:[],error:f}}}function Sx(c,o){return`**Role:** You are an expert academic visual designer specializing in research model diagrams for top-tier IS journals (MISQ, ISR, JMIS).

**Task:** Create a CONCEPTUAL RESEARCH MODEL DIAGRAM showing the theoretical framework and hypothesized relationships.

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
   - Captioning: Title can be added below (e.g., "Figure 1. Research Model")
   - Publication-ready quality at journal article size

**RESEARCH CONTEXT:**
${o.substring(0,2500)}

**INTERVIEW EXCERPT:**
${c.substring(0,1500)}

Generate a professional research model diagram. This figure should stand alone and be self-explanatory.`}function Ex(c,o){return`**Role:** You are an expert academic visual designer for Information Systems research publications.

**Task:** Create a THEORETICAL FRAMEWORK OVERVIEW diagram that summarizes the research approach, key constructs, and their relationships.

**FIGURE TYPE:** This is a CONCEPTUAL figure (explanatory), NOT a data-driven figure.
- Purpose: Illustrate the overall theoretical framework, time-based sequences, or system architecture
- Examples:
  - A flowchart illustrating stages of a process
  - A Venn diagram showing overlapping concepts
  - A system architecture showing relationships between components

**Design Requirements:**

1. **Layout & Structure:**
   - Clear title at top indicating the framework/model name
   - 3-4 distinct conceptual sections or stages
   - Visual flow showing logical progression (problem → mechanism → outcome)
   - Each component clearly separated and labeled

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

**RESEARCH CONTEXT:**
${o.substring(0,2500)}

**INTERVIEW EXCERPT:**
${c.substring(0,1500)}

Generate a professional theoretical framework diagram. This figure should stand alone, be distinct from the research model diagram, and clearly illustrate the conceptual approach of this research.`}async function Lp(c,o){const l=["gemini-3-pro-image-preview","gemini-2.5-flash-image"];for(const u of l){console.log(`[Infographic] Trying image generation with model: ${u}`),o==null||o(`Generating image with ${u}...`);try{const d=await wx(c,u);if(d.success&&d.base64)return console.log(`[Infographic] Successfully generated image with ${u}`),d;console.warn(`[Infographic] ${u} failed: ${d.error}`)}catch(d){console.warn(`[Infographic] ${u} threw error:`,d.message)}}return{success:!1,error:"All image generation models failed"}}async function wx(c,o){{const l=await ki();if(l.type==="vercel")return Ax(c,o,l.baseUrl);throw new Error("No API key and no proxy available for image generation")}}async function Ax(c,o,l){try{const u=await fetch(`${l}/api/gemini-image`,{method:"POST",headers:Ar(),body:JSON.stringify({prompt:c,model:o,aspectRatio:"16:9"})});if(!u.ok){const f=await u.text();return{success:!1,error:`Proxy error ${u.status}: ${f.substring(0,200)}`}}const d=await u.json();return d.success&&d.image?{success:!0,base64:d.image,mimeType:d.mimeType||"image/png"}:{success:!1,error:d.error||"Unknown proxy error"}}catch(u){return{success:!1,error:u.message}}}async function Rx(c,o){console.log("[DataTable] Starting data table generation with GPT-5.2..."),o==null||o("Generating structured data table...");try{const l=await ol("TABLE");if(!l||l.includes("[Prompt not found"))throw new Error("Failed to load TABLE prompt from prompts directory");const u=Tx(c),d=`${l}

---

**RESEARCH PAPER:**

${u}`;console.log(`[DataTable] Prompt constructed (${d.length} chars)`),o==null||o("Extracting structured data with GPT-5.2...");const f=await _x(d);if(!f||f.trim().length===0)return{success:!1,error:"GPT-5.2 returned empty response"};console.log(`[DataTable] CSV generated (${f.length} chars)`);const{latexTable:y,tableCaption:p}=Cx(f,c);return console.log("[DataTable] Successfully generated data table"),o==null||o("Data table generated successfully"),{success:!0,csvContent:f,latexTable:y,tableCaption:p}}catch(l){const u=l.message;return console.error("[DataTable] Generation failed:",u),o==null||o(`Data table generation failed: ${u}`),{success:!1,error:u}}}function Tx(c){const o=[];return c.title&&o.push(`# Title
${c.title.trim()}`),c.abstract&&o.push(`# Abstract
${c.abstract}`),c.introduction&&o.push(`# Introduction
${c.introduction}`),c.literature_review&&o.push(`# Literature Review
${c.literature_review}`),c.theory&&o.push(`# Theoretical Framework
${c.theory}`),c.methodology&&o.push(`# Methodology
${c.methodology}`),c.results&&o.push(`# Results
${c.results}`),c.discussion&&o.push(`# Discussion
${c.discussion}`),c.conclusion&&o.push(`# Conclusion
${c.conclusion}`),o.join(`

`)}async function _x(c){const o=await ki();if(o.type==="vercel"||o.type==="local")return console.log(`[DataTable] Using ${o.type} proxy for GPT-5.2...`),Nx(c,o.baseUrl);throw new Error("[DataTable] No API endpoint available for GPT-5.2")}async function Nx(c,o){var y,p,x;const l=await fetch(`${o}/api/openai`,{method:"POST",headers:Ar(),body:JSON.stringify({model:"gpt-5.2",messages:[{role:"system",content:"You are a structured-data extraction engine. Output ONLY valid CSV format with no markdown, no explanations, no backticks. Follow the exact schema rules provided."},{role:"user",content:c}],temperature:.3,max_tokens:8e3,rawResponse:!0})});if(!l.ok){const m=await l.text();throw new Error(`Proxy error: ${l.status} - ${m.substring(0,200)}`)}const u=await l.json();let d=((x=(p=(y=u.choices)==null?void 0:y[0])==null?void 0:p.message)==null?void 0:x.content)||u.content||u;typeof d!="string"&&(d=JSON.stringify(d));let f=d.trim();return f.startsWith("```")&&(f=f.replace(/^```(?:csv)?\s*\n?/,""),f=f.replace(/\n?```\s*$/,"")),f.trim()}function Cx(c,o){const l=c.split(`
`).filter(m=>m.trim().length>0);if(l.length<2)return{latexTable:"% Error: CSV has insufficient data for table generation",tableCaption:"Data extraction table"};const u=Mp(l[0]),d=u.length,f=Ix(u,o);let y=`\\begin{table}[htbp]
\\centering
\\caption{${Pc(f)}}
\\label{tab:datatable}
\\small
\\begin{tabular}{${"l".repeat(d)}}
\\toprule
`;const p=u.map(m=>`\\textbf{${Pc(m)}}`);y+=p.join(" & ")+` \\\\
\\midrule
`;const x=l.slice(1,16);for(const m of x){const A=Mp(m);for(;A.length<d;)A.push("");const R=A.slice(0,d).map(_=>Pc(_));y+=R.join(" & ")+` \\\\
`}return l.length>16&&(y+=`\\midrule
\\multicolumn{${d}}{l}{\\textit{... ${l.length-16} additional rows in full CSV}} \\\\
`),y+=`\\bottomrule
\\end{tabular}
\\end{table}`,{latexTable:y,tableCaption:f}}function Mp(c){const o=[];let l="",u=!1;for(let d=0;d<c.length;d++){const f=c[d];f==='"'?u&&c[d+1]==='"'?(l+='"',d++):u=!u:f===","&&!u?(o.push(l.trim()),l=""):l+=f}return o.push(l.trim()),o}function Ix(c,o){var d;const l=c.join(" ").toLowerCase();return l.includes("construct")||l.includes("measurement")||l.includes("hypothesis")?"Summary of Constructs, Measurement Items, and Hypothesis Results":l.includes("parameter")||l.includes("simulation")?"Model Parameters and Configuration":l.includes("challenge")||l.includes("strategic")?"Challenges and Strategic Actions":l.includes("study")||l.includes("comparison")?"Comparison of Related Work and Approaches":`Key Structured Data from ${((d=o.title)==null?void 0:d.substring(0,50))||"Research"}`}function Pc(c){return c?c.replace(/\\/g,"\\textbackslash{}").replace(/&/g,"\\&").replace(/%/g,"\\%").replace(/\$/g,"\\$").replace(/#/g,"\\#").replace(/_/g,"\\_").replace(/\{/g,"\\{").replace(/\}/g,"\\}").replace(/~/g,"\\textasciitilde{}").replace(/\^/g,"\\textasciicircum{}").replace(/</g,"\\textless{}").replace(/>/g,"\\textgreater{}"):""}async function zp(c){try{return(await fetch(`${c}/api/health`,{method:"GET",signal:AbortSignal.timeout(2e3)})).ok}catch{return!1}}async function ki(){return await zp(Ri)?{type:"vercel",baseUrl:Ri}:await zp(Ti)?{type:"local",baseUrl:Ti}:{type:"direct",baseUrl:""}}async function Dx(c,o){var y,p,x;const l=o===Ti?`${o}/api/openai/chat`:`${o}/api/openai`;console.log(`[OpenAI] Calling via proxy: ${l}`),console.log(`[OpenAI] Using model: ${Wc()}`);const u=await fetch(l,{method:"POST",headers:Ar(),body:JSON.stringify({model:Wc(),messages:[{role:"system",content:"You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks."},{role:"user",content:c}],temperature:.7,max_completion_tokens:16e3,response_format:{type:"json_object"}})});if(!u.ok){const m=await u.json().catch(()=>({error:"Unknown error"}));throw console.error("[OpenAI] Proxy Error:",u.status,m),new Error(`OpenAI API error: ${u.status} - ${m.error||m.details||"Unknown error"}`)}const f=(x=(p=(y=(await u.json()).choices)==null?void 0:y[0])==null?void 0:p.message)==null?void 0:x.content;if(!f)throw new Error("[OpenAI] No content in response");console.log("[OpenAI] Proxy response received, parsing JSON...");try{let m=f.trim();return m.startsWith("```")&&(m=m.replace(/^```(?:json)?\s*\n?/,""),m=m.replace(/\n?```\s*$/,"")),m=m.trim(),JSON.parse(m)}catch{throw console.error("[OpenAI] Failed to parse JSON response:",f.substring(0,500)),new Error("[OpenAI] Invalid JSON response")}}async function pl(c){const o=await ki();if(o.type==="vercel"||o.type==="local")return console.log(`[OpenAI] Using ${o.type} proxy...`),Dx(c,o.baseUrl);throw new Error("[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.")}const jx=async(c,o=1,l="icis_paper",u)=>{var v,T,h,E,w,D,L,P;const d=await ol("REVIEWER");let f="";try{console.log("[Reviewer] Loading MISQ review criteria..."),f=await ol("MISQ_CRITERIA"),console.log("[Reviewer] MISQ criteria loaded successfully")}catch(I){console.warn("[Reviewer] Could not load MISQ review criteria:",I)}const y=c.match(/\\title\{([^}]+)\}/),p=y?y[1]:"Untitled Paper";console.log("[Reviewer] Splitting paper into sections...");const x=Ox(c);console.log(`[Reviewer] Found ${x.length} sections: ${x.map(I=>I.name).join(", ")}`);let m;if(x.length===0){console.log("[Reviewer] No sections found, using full paper approach...");const I=`${d}

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
- Honest acknowledgment of limits is valued over forcing unnecessary changes`;m=await pl(I)}else{console.log("[Reviewer] Starting section-by-section review...");const I=[];for(const B of x){console.log(`[Reviewer] Reviewing section: ${B.name}...`);const F=await kx(B,p);I.push(F),console.log(`[Reviewer] ${B.name} score: ${F.score}/5`)}console.log("[Reviewer] Aggregating section reviews..."),m=await Lx(I,c,f),console.log("[Reviewer] Section-by-section review complete")}if(m.novelty===void 0||m.significance===void 0||m.methodologicalRigor===void 0||m.clarity===void 0||m.relevance===void 0)throw new Error("[Reviewer] API response missing required score fields");const A={novelty:m.novelty,significance:m.significance,methodologicalRigor:m.methodologicalRigor,clarity:m.clarity,relevance:m.relevance,reviewScore:m.novelty,reliabilityScore:m.significance,alignmentScore:m.methodologicalRigor,errorsDetected:(((v=m.majorConcerns)==null?void 0:v.length)||0)+(((T=m.minorCorrections)==null?void 0:T.length)||0),feedback:m.overallAssessment,majorConcerns:m.majorConcerns||[],minorCorrections:m.minorCorrections||[],researchQuestionFeedback:m.researchQuestionFeedback,methodFeedback:m.methodFeedback,impactFeedback:m.impactFeedback,writingFeedback:m.writingFeedback,overallAssessment:m.overallAssessment,noveltyComment:m.noveltyComment,significanceComment:m.significanceComment,methodologicalRigorComment:m.methodologicalRigorComment,clarityComment:m.clarityComment,relevanceComment:m.relevanceComment,trustworthiness:{reliability:5,reliabilityRationale:"Pending assessment",benevolence:5,benevolenceRationale:"Pending assessment",goalAlignment:5,goalAlignmentRationale:"Pending assessment"},criticalAlerts:m.criticalAlerts??[],canImprove:m.canImprove??!0,improvementPotential:m.improvementPotential??"medium",convergenceReason:m.convergenceReason};if(console.log(`[Reviewer] Convergence assessment: canImprove=${A.canImprove}, potential=${A.improvementPotential}`),A.convergenceReason&&console.log(`[Reviewer] Convergence reason: ${A.convergenceReason}`),u&&u.trim()){console.log("[Reviewer] Assessing trustworthiness from author perspective...");try{const I=await Mx(c,u);A.trustworthiness={reliability:I.reliability,reliabilityRationale:I.rationales.reliability,benevolence:I.benevolence,benevolenceRationale:I.rationales.benevolence,goalAlignment:I.goalAlignment,goalAlignmentRationale:I.rationales.goalAlignment},console.log("[Reviewer] Trustworthiness assessment complete")}catch(I){console.warn("[Reviewer] Trustworthiness assessment failed:",I.message),A.trustworthiness={reliability:0,reliabilityRationale:`⚠️ Assessment failed: ${I.message}`,benevolence:0,benevolenceRationale:`⚠️ Assessment failed: ${I.message}`,goalAlignment:0,goalAlignmentRationale:`⚠️ Assessment failed: ${I.message}`}}}else console.log("[Reviewer] No interview transcript provided - using default trustworthiness scores"),A.trustworthiness={reliability:((h=m.trustworthiness)==null?void 0:h.reliability)??5,reliabilityRationale:((E=m.trustworthiness)==null?void 0:E.reliabilityRationale)??"No interview provided for author perspective assessment",benevolence:((w=m.trustworthiness)==null?void 0:w.benevolence)??5,benevolenceRationale:((D=m.trustworthiness)==null?void 0:D.benevolenceRationale)??"No interview provided for author perspective assessment",goalAlignment:((L=m.trustworthiness)==null?void 0:L.goalAlignment)??5,goalAlignmentRationale:((P=m.trustworthiness)==null?void 0:P.goalAlignmentRationale)??"No interview provided for author perspective assessment"};const R={version:o,paperId:l,timestamp:new Date().toISOString(),reviewScores:{novelty:A.novelty,significance:A.significance,methodologicalRigor:A.methodologicalRigor,clarity:A.clarity,relevance:A.relevance},reviewComments:{novelty:A.noveltyComment,significance:A.significanceComment,methodologicalRigor:A.methodologicalRigorComment,clarity:A.clarityComment,relevance:A.relevanceComment},averageScore:(A.novelty+A.significance+A.methodologicalRigor+A.clarity+A.relevance)/5,errorCounts:{majorErrors:A.majorConcerns.length,minorErrors:A.minorCorrections.length},errorDetails:{majorErrors:A.majorConcerns,minorErrors:A.minorCorrections},trustworthiness:A.trustworthiness,criticalAlerts:A.criticalAlerts.map((I,B)=>({number:B+1,title:I.title,status:"Open",impact:I.impact,details:I.details,actionRequired:I.actionRequired,consequence:I.consequence})),canImprove:A.canImprove,improvementPotential:A.improvementPotential,convergenceReason:A.convergenceReason},_={version:o,paperId:l,timestamp:new Date().toISOString(),researchQuestion:A.researchQuestionFeedback,method:A.methodFeedback,potentialImpact:A.impactFeedback,writing:A.writingFeedback,majorConcerns:A.majorConcerns,minorCorrections:A.minorCorrections,overallAssessment:A.overallAssessment};A.oversightFilePath=Qp(R),A.feedbackFilePath=ru(_);try{await Xc(`oversight_v${o}.json`,R),await Xc(`feedback_v${o}.json`,_),console.log("[Reviewer] Saved oversight and feedback files to disk")}catch(I){console.warn("[Reviewer] Could not save files to disk:",I)}return A};function Ox(c){const o=[],l=[{pattern:/\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi,name:"Introduction",focus:"Research question clarity, contribution claim, motivation"},{pattern:/\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi,name:"Literature Review",focus:"Theoretical grounding, literature coverage, gaps identified"},{pattern:/\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi,name:"Methodology",focus:"Method justification, rigor, data description, validity"},{pattern:/\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi,name:"Results",focus:"Robustness, correct interpretation, statistical validity"},{pattern:/\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi,name:"Discussion",focus:"Implications, impact, limitations, future work"}],u=c.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);let d="";u&&(d=u[1].trim());for(const{pattern:f,name:y,focus:p}of l){const x=new RegExp(f.source,f.flags);let m,A="";for(;(m=x.exec(c))!==null;)A+=m[2]||m[0];A.trim()&&(y==="Introduction"&&d&&(A=`ABSTRACT:
${d}

INTRODUCTION:
${A}`),o.push({name:y,content:A.trim(),reviewFocus:p}))}if(o.length===0){const f=c.split(/\\section\*?\{/);for(let y=1;y<f.length;y++){const p=f[y].indexOf("}");if(p>0){const x=f[y].substring(0,p),m=f[y].substring(p+1);o.push({name:x,content:m.trim().substring(0,15e3),reviewFocus:"General academic quality and rigor"})}}}return o.map(f=>({...f,content:f.content.substring(0,15e3)}))}async function kx(c,o){const l=`You are reviewing the "${c.name}" section of an academic IS (Information Systems) paper titled: "${o}"

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
}`,u=await pl(l);if(u.score===void 0)throw new Error(`[Reviewer] Section "${c.name}" response missing required score field`);return{sectionName:c.name,score:u.score,strengths:u.strengths||[],weaknesses:u.weaknesses||[],suggestions:u.suggestions||[],majorConcerns:u.majorConcerns||[],minorCorrections:u.minorCorrections||[]}}async function Lx(c,o,l){const u=c.map(m=>`## ${m.sectionName} (Score: ${m.score}/5)
Strengths: ${m.strengths.join("; ")||"None identified"}
Weaknesses: ${m.weaknesses.join("; ")||"None identified"}
Major Concerns: ${m.majorConcerns.join("; ")||"None"}
Minor Corrections: ${m.minorCorrections.join("; ")||"None"}`).join(`

`),d=c.filter(m=>m.score>0).map(m=>m.score),f=d.length>0?d.reduce((m,A)=>m+A,0)/d.length:3,y=c.flatMap(m=>m.majorConcerns),p=c.flatMap(m=>m.minorCorrections);c.flatMap(m=>m.suggestions);const x=`You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${u}

AVERAGE SECTION SCORE: ${f.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${y.map((m,A)=>`${A+1}. ${m}`).join(`
`)||"None"}

ALL MINOR CORRECTIONS:
${p.map((m,A)=>`${A+1}. ${m}`).join(`
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

HONEST ASSESSMENT IS VALUED: It is better to acknowledge limits than to force unnecessary changes.`;return await pl(x)}const Mx=async(c,o)=>{console.log("[Trustworthiness] Starting assessment from author perspective...");const l=o.substring(0,15e3),u=c.substring(0,15e3),d=`You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

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
}`,f=await pl(d);if(f.reliability===void 0||f.benevolence===void 0||f.goalAlignment===void 0)throw new Error("[Trustworthiness] API response missing required fields");return console.log("[Trustworthiness] Assessment complete:",{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment}),{reliability:f.reliability,benevolence:f.benevolence,goalAlignment:f.goalAlignment,rationales:{reliability:f.reliabilityRationale,benevolence:f.benevolenceRationale,goalAlignment:f.goalAlignmentRationale}}};function zx(c){const o=[/\\section\{Discussion\}/i,/\\section\*\{Discussion\}/i,/\\section\{Conclusions?\}/i,/\\section\*\{Conclusions?\}/i,/\\section\{Implications\}/i];let l=-1,u="";for(const d of o){const f=c.match(d);if(f&&f.index!==void 0){l=f.index,u=f[0];break}}if(l===-1){const d=Math.floor(c.length*.5),f=c.substring(d).match(/\\section\*?\{[^}]+\}/);f&&f.index!==void 0&&(l=d+f.index,u=f[0])}return l===-1?{part1:c,part2:"",splitPoint:""}:{part1:c.substring(0,l),part2:c.substring(l),splitPoint:u}}const Ux=async(c,o,l,u,d)=>{console.log("[Reviser] Starting revision process..."),console.log(`[Reviser] Paper content length: ${c.length} characters`),console.log(`[Reviser] Feedback length: ${o.length} characters`),console.log("[Reviser] Loading reviser prompt...");const f=await ol("REVISER");console.log(`[Reviser] Prompt loaded (${f.length} chars)`);const p=c.length>2e4;let x;if(p){console.log("[Reviser] Large paper detected - using two-part revision strategy"),d==null||d("Large paper - revising in two parts...");const{part1:h,part2:E,splitPoint:w}=zx(c);console.log(`[Reviser] Split at "${w}" - Part 1: ${h.length} chars, Part 2: ${E.length} chars`),console.log("[Reviser] Revising Part 1 (front matter)..."),d==null||d("Revising Part 1: Abstract through Results...");const D=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${h}

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

Produce the revised PART 1:`;let L=await ja(D,"You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");L=Bc(L),L=L.replace(/\\end\{document\}\s*$/i,""),console.log(`[Reviser] Part 1 complete: ${L.length} chars`),await Tm(1e3),console.log("[Reviser] Revising Part 2 (back matter)..."),d==null||d("Revising Part 2: Discussion, Conclusion, References...");const P=`${f}

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

Produce the revised PART 2:`;let I=await ja(P,"You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");I=Bc(I),console.log(`[Reviser] Part 2 complete: ${I.length} chars`),x=L+`

`+I,console.log(`[Reviser] Combined revised paper: ${x.length} chars`)}else{console.log("[Reviser] Paper within size limits - using single-pass revision"),d==null||d("Revising paper content...");const h=`${f}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information. Honest recognition of limits is valued over forced improvements.

Original Paper:
${c}

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

Produce the revised paper content:`;console.log(`[Reviser] Total prompt length: ${h.length} characters`),console.log("[Reviser] Calling Gemini API..."),x=await ja(h,"You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps."),x=Bc(x)}console.log(`[Reviser] Text revision complete! Output length: ${x.length} characters`);let m,A=!1;const R=(o+" "+l).toLowerCase();if(R.includes("figure")||R.includes("graph")||R.includes("chart")||R.includes("visual")||R.includes("plot")||R.includes("diagram")||R.includes("simulation")||R.includes("model")){console.log("[Reviser] Feedback mentions visualizations - regenerating figures..."),d==null||d("Updating visualizations based on feedback...");try{let h;if(u){console.log("[Reviser] Analyzing data file for visualization...");try{h=(await _m(u,d)).dataSummary,console.log("[Reviser] Data summary obtained for visualization")}catch(P){console.warn("[Reviser] Could not analyze data file:",P)}}const E=x.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/),w=x.match(/\\section{Methodology}([\s\S]*?)\\section{/),D=`
Paper revision feedback indicates visualization improvements needed.
Feedback: ${o.substring(0,500)}
Supervisor: ${l.substring(0,300)}
Abstract: ${E?E[1].substring(0,400):""}
`,L=await Kc(D,o,u,d,h);if(A=L.usedSyntheticData,L.dataAlert&&(m=L.dataAlert,console.warn(`[Reviser] ${m}`)),L.figures.length>0){console.log(`[Reviser] Generated ${L.figures.length} updated figures`);const P=Jc(L.figures);let I=P;A&&(I=`\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]

${P}`),x.match(/(\\section{Results})/)&&(x=x.replace(/\\section{Results}\s*\n*/,`\\section{Results}

${I}
`))}}catch(h){console.error("[Reviser] Visualization update failed:",h),d==null||d("Visualization update failed - continuing with text revisions"),m=`*** VISUALIZATION ERROR during revision: ${h.message}`,A=!0}}console.log(`[Reviser] Revision complete! Final output length: ${x.length} characters`);const v=Math.abs(x.length-c.length)/c.length,T=v<.02;return T&&console.log(`[Reviser] Minimal changes detected (${(v*100).toFixed(1)}% change) - paper may have reached its potential`),{paperContent:x,dataAlert:m,usedSyntheticData:A,limitedBySource:T,limitationExplanation:T?"The revision resulted in minimal changes, suggesting the paper has reached its improvement potential given the available source materials (interview and data).":void 0}},Up="http://localhost:3001/Data";function Fx(){const[c,o]=he.useState(bp),l=he.useCallback((v,T)=>{o(h=>({...h,stages:{...h.stages,[v]:T}}))},[]),u=he.useCallback(v=>{o(T=>({...T,currentBuilderStep:v}))},[]),d=he.useCallback(v=>{const T=new Date().toLocaleTimeString();o(h=>({...h,logs:[...h.logs,`[${T}] ${v}`]}))},[]),f=he.useCallback(v=>{o(T=>({...T,currentStage:v,stages:{...T.stages,[v]:je.ACTIVE}}))},[]),y=he.useCallback(v=>{o(T=>({...T,...v}))},[]),p=he.useCallback(v=>{o(T=>({...T,rounds:[...T.rounds,v],currentRound:v.roundId}))},[]),x=he.useCallback(v=>{o(T=>{if(T.rounds.length===0)return T;const h=[...T.rounds];return h[h.length-1]={...h[h.length-1],...v},{...T,rounds:h}})},[]),m=he.useCallback(v=>{o(T=>({...T,stages:{...T.stages,[v]:je.PENDING}}))},[]),A=he.useCallback(v=>{o(T=>({...T,participantId:v}))},[]),R=he.useCallback(()=>`${c.participantId}_${c.sessionTimestamp}`,[c.participantId,c.sessionTimestamp]),_=he.useCallback(async()=>{var T;try{const h=await om();h.success?console.log(`Backed up ${((T=h.backedUpFiles)==null?void 0:T.length)||0} files to ${h.backupDir}`):console.warn("Backup failed:",h.error)}catch(h){console.warn("Backup not available:",h)}Yv(),xm(),dm();const v=new Date().toISOString().replace(/[-:]/g,"").replace("T","_").substring(0,15);o({...bp,sessionTimestamp:v,logs:[`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]})},[]);return{simulationState:c,setStageStatus:l,setBuilderStep:u,addLog:d,moveToStage:f,updateState:y,addRound:p,updateLastRound:x,resetStageData:m,setParticipantId:A,getFilePrefix:R,resetAllState:_}}function Bx(){const[c,o]=he.useState({}),[l,u]=he.useState({loading:!0,error:null,detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}});he.useEffect(()=>{d()},[]);const d=async()=>{u(_=>({..._,loading:!0,error:null}));try{const _=`?t=${Date.now()}`,v=await fetch(`${Up}/manifest.json${_}`,{cache:"no-store"});if(!v.ok)throw new Error("No manifest.json found in Data folder");const T=await v.json(),h={interview:null,template:null,dataFile:null,participantId:null};for(const E of T.files||[]){const w=`${Up}/${E.filename}`;E.type==="interview"?(h.interview={filename:E.filename,path:w},h.participantId=E.participantId||null):E.type==="template"?h.template={filename:E.filename,path:w}:E.type==="dataFile"&&(h.dataFile={filename:E.filename,path:w})}u({loading:!1,error:null,detected:h}),h.interview&&await f("interview",h.interview.path,h.interview.filename,h.participantId),h.template&&await f("template",h.template.path,h.template.filename),h.dataFile&&await f("dataFile",h.dataFile.path,h.dataFile.filename)}catch(_){console.log("Auto-detection not available, manual upload required:",_),u({loading:!1,error:"Auto-detection not available. Please upload files manually.",detected:{interview:null,template:null,dataFile:null,participantId:null,participantEmail:null}})}},f=async(_,v,T,h)=>{try{const E=`?t=${Date.now()}`,w=await fetch(v+E,{cache:"no-store"});if(!w.ok){console.warn(`Failed to load ${T}`);return}const D=await w.text(),L=new Blob([D],{type:"text/plain"}),P=new File([L],T,{type:"text/plain"});o(_==="interview"?I=>({...I,interview:P,interviewContent:D,participantId:h||I.participantId}):_==="template"?I=>({...I,template:P,templateContent:D}):I=>({...I,dataFile:P,dataFileContent:D})),console.log(`Auto-loaded: ${T}`)}catch(E){console.warn(`Error loading ${T}:`,E)}},y=he.useCallback(async(_,v)=>{if(!v){o(T=>{const h={...T};return delete h[_],_==="interview"&&delete h.interviewContent,h});return}if(_==="interview"){const T=await v.text();let h=v.name.replace(/\.txt$/i,"").replace(/^INTERVIEW_?/i,""),E=null;const w=T.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i)||T.match(/Email[:\s]+([^\s\n]+@[^\s\n]+)/i);w&&(E=w[1].trim(),h=E.replace(/@/g,"_").replace(/\./g,"_")),o(D=>({...D,interview:v,interviewContent:T,participantId:h,participantEmail:E}))}else if(_==="template"){const T=await v.text();o(h=>({...h,template:v,templateContent:T}))}else{const T=await v.text();o(E=>({...E,dataFile:v,dataFileContent:T})),console.log("[handleFileChange] Uploading data file to cloud storage...");const h=await cm(v);h.success?console.log("[handleFileChange] Cloud upload success:",h.blobUrl):console.warn("[handleFileChange] Cloud upload failed:",h.error)}},[]),p=he.useCallback(()=>c.interviewContent||"",[c.interviewContent]),x=he.useCallback(()=>c.dataFileContent||"",[c.dataFileContent]),m=he.useCallback(()=>{var _;return((_=c.dataFile)==null?void 0:_.name)||""},[c.dataFile]),A=he.useCallback(async()=>{await d()},[]),R=he.useCallback(()=>c.participantEmail||null,[c.participantEmail]);return{uploadedFiles:c,handleFileChange:y,getInterviewContent:p,getDataFileContent:x,getDataFileName:m,getParticipantEmail:R,detectionStatus:l,refreshDetection:A}}function Px(c){const{simulationState:o,setStageStatus:l,setBuilderStep:u,addLog:d,moveToStage:f,updateState:y,addRound:p,updateLastRound:x,resetStageData:m,resetAllState:A,uploadedFiles:R,getInterviewContent:_,refreshDetection:v,onDataFileConfirm:T}=c,[h,E]=he.useState(!1);Fe.STEP1_INTERVIEW_ANALYSIS,Fe.STEP1_5_DATA_ASSESSMENT,Fe.STEP2_RESEARCH_PLANNING,Fe.STEP2_FINAL_METADATA,Fe.STEP3_MATH_FORMULATION,Fe.STEP4_IMPLEMENTATION,Fe.STEP5_EXECUTION,Fe.STEP6_VISUALIZATION,Fe.STEP7_ANALYSIS,Fe.STEP8_PAPER_WRITING,Fe.STEP9_FINAL_SUBMISSION;const w=he.useCallback(async I=>{const B=I??o.currentRound;d(`Reviewer: Starting review process with Gemini (Round ${B})...`),l(ye.REVIEWER,je.ACTIVE);try{let F=o.paperContent;if(!F){const S=o.currentPaperVersion||1;d(`Reviewer: Paper not in state, reading from localStorage (v${S})...`),F=ca(S)||"",F&&(y({paperContent:F}),d("Reviewer: Paper loaded from localStorage"))}if(!F){d("Reviewer: ERROR - No paper content available in state or localStorage"),l(ye.REVIEWER,je.ERROR);return}const G=o.participantId||"icis_paper",z=B;d("Reviewer: Analyzing paper with Gemini...");const re=_();re&&d("Reviewer: Interview content available for trustworthiness assessment");const Z=await jx(F,z,G,re);d(`Reviewer: Analysis complete - Average score: ${((Z.novelty+Z.significance+Z.methodologicalRigor+Z.clarity+Z.relevance)/5).toFixed(1)}/5`);const j={version:z,paperId:G,timestamp:new Date().toISOString(),reviewScores:{novelty:Z.novelty,significance:Z.significance,methodologicalRigor:Z.methodologicalRigor,clarity:Z.clarity,relevance:Z.relevance},reviewComments:{novelty:Z.noveltyComment,significance:Z.significanceComment,methodologicalRigor:Z.methodologicalRigorComment,clarity:Z.clarityComment,relevance:Z.relevanceComment},averageScore:(Z.novelty+Z.significance+Z.methodologicalRigor+Z.clarity+Z.relevance)/5,errorCounts:{majorErrors:Z.majorConcerns.length,minorErrors:Z.minorCorrections.length},errorDetails:{majorErrors:Z.majorConcerns,minorErrors:Z.minorCorrections},trustworthiness:Z.trustworthiness,criticalAlerts:Z.criticalAlerts.map((S,Y)=>({number:Y+1,title:S.title,status:"Open",impact:S.impact,details:S.details,actionRequired:S.actionRequired,consequence:S.consequence}))},Q={version:z,paperId:G,timestamp:new Date().toISOString(),researchQuestion:Z.researchQuestionFeedback,method:Z.methodFeedback,potentialImpact:Z.impactFeedback,writing:Z.writingFeedback,majorConcerns:Z.majorConcerns,minorCorrections:Z.minorCorrections,overallAssessment:Z.overallAssessment};Qp(j),ru(Q),d("Reviewer: Saved oversight and feedback files"),p({roundId:z,reviewScore:j.averageScore,reliabilityScore:Z.trustworthiness.reliability,alignmentScore:Z.trustworthiness.goalAlignment,errorsDetected:Z.majorConcerns.length+Z.minorCorrections.length,reviewScores:j.reviewScores,trustworthinessScores:Z.trustworthiness,errorCounts:j.errorCounts,constructiveFeedback:Z.overallAssessment,feedback:Z.overallAssessment,criticalAlerts:Z.criticalAlerts.map(S=>S.title)}),d("Reviewer: Review complete! Proceed to Supervisor for decision."),l(ye.REVIEWER,je.COMPLETED)}catch(F){d(`Reviewer: ERROR - ${F.message}`),l(ye.REVIEWER,je.ERROR)}},[l,d,p,y,o.currentRound,o.participantId,o.paperContent]),D=he.useCallback(async(I,B)=>{var F,G,z,re;switch(I){case ye.SETUP:await new Promise(j=>setTimeout(j,500));const Z={interview:!!R.interview,template:!0,examples:!0,dataFile:!!R.dataFile,paperPdf:!1};y({files:Z}),d("Setup: Files verified successfully");break;case ye.BUILDER:d("Builder: Starting paper generation with Gemini...");try{const j=_();if(!j){d("Builder: ERROR - No interview content available"),l(ye.BUILDER,je.ERROR);return}console.log(`[processStage BUILDER] overrideParam="${B}", uploadedFiles.dataFile?.name="${(F=R.dataFile)==null?void 0:F.name}"`);const Q=B||((G=R.dataFile)==null?void 0:G.name),S=!Q;d(`Builder: Mode - ${S?"Partial paper (no data)":"Full paper with data"}`),d(Q?`Builder: Data file - ${Q}`:"Builder: WARNING - No data file name available");const V=await dx(j,S,(te,ve)=>{ve==="starting"?d(`Builder: Generating ${te}...`):ve==="completed"?d(`Builder: ${te} complete`):ve==="error"&&d(`Builder: ${te} - error (continuing)`)},Q,T);V.dataSummary&&(d("Builder: Data Analysis Summary:"),d(V.dataSummary.substring(0,500)+(V.dataSummary.length>500?"...":""))),V.dataAlert&&d(V.dataAlert),V.usedSyntheticData&&d("Builder: NOTE - Synthetic/AI-generated data was used for visualizations"),y({paperContent:V.paperContent,currentPaperVersion:1,currentRound:1,dataAlert:V.dataAlert,dataSummary:V.dataSummary}),Np(1,V.paperContent);const $=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",ue=$?`${$}_icis_paper_v1.tex`:"icis_paper_v1.tex";await qc(ue,V.paperContent),d("Builder: Paper generation complete - saved to localStorage and filesystem"),l(ye.BUILDER,je.COMPLETED),f(ye.REVIEWER),setTimeout(()=>w(),500)}catch(j){d(`Builder: ERROR - ${j.message}`),l(ye.BUILDER,je.ERROR)}break;case ye.REVIEWER:await w();break;case ye.SUPERVISOR:d("Supervisor: Awaiting human review and decision..."),l(ye.SUPERVISOR,je.ACTIVE);return;case ye.FINALIZE:d("Finalize: Preparing final submission..."),l(ye.FINALIZE,je.ACTIVE);return;case ye.REVISER:d("Reviser: Starting revision with Gemini..."),console.log("[Workflow] REVISER stage starting"),l(ye.REVISER,je.ACTIVE);try{let j=o.paperContent;if(console.log(`[Workflow] Paper in state: ${j?j.length+" chars":"none"}`),!j){const se=o.currentPaperVersion||1;d(`Reviser: Paper not in state, reading from localStorage (v${se})...`),j=ca(se)||"",j&&(y({paperContent:j}),d("Reviser: Paper loaded from localStorage"),console.log(`[Workflow] Paper loaded from localStorage: ${j.length} chars`))}if(!j){d("Reviser: ERROR - No paper content available in state or localStorage"),l(ye.REVISER,je.ERROR);return}const Q=o.rounds[o.rounds.length-1],S=(Q==null?void 0:Q.feedback)||"Improve clarity and strengthen methodology.",Y=B||(Q==null?void 0:Q.supervisorComment)||"Please address the reviewer concerns.";console.log(`[Workflow] Feedback: ${S.substring(0,100)}...`),console.log(`[Workflow] Supervisor comment (${B?"from override":"from state"}): ${Y.substring(0,100)}...`),d("Reviser: Analyzing feedback and generating revisions..."),d(`Reviser: Paper size: ${j.length} chars, calling Gemini...`);const V=(z=R.dataFile)==null?void 0:z.name,$=se=>{d(`Reviser: ${se}`)};console.log("[Workflow] Calling runReviser...");const ue=await Ux(j,S,Y,V,$);console.log(`[Workflow] runReviser completed, result: ${((re=ue.paperContent)==null?void 0:re.length)||0} chars`),ue.dataAlert&&d(ue.dataAlert),ue.usedSyntheticData&&d("Reviser: NOTE - Synthetic/AI-generated data was used for visualizations");const te=o.currentPaperVersion+1;y({paperContent:ue.paperContent,currentPaperVersion:te,dataAlert:ue.dataAlert||o.dataAlert}),Np(te,ue.paperContent);const ve=o.participantId?`${o.participantId}_${o.sessionTimestamp}`:"",C=ve?`${ve}_icis_paper_v${te}.tex`:`icis_paper_v${te}.tex`;await qc(C,ue.paperContent),d(`Reviser: Revision complete - Version ${te} saved`);const k=o.currentRound+1;l(ye.REVISER,je.COMPLETED),f(ye.REVIEWER),y({currentRound:k}),setTimeout(()=>w(k),500)}catch(j){d(`Reviser: ERROR - ${j.message}`),l(ye.REVISER,je.ERROR)}break}},[R.interview,R.dataFile,y,d,u,l,f,w,o.currentPaperVersion,o.currentRound,o.dataAlert,T]),L=he.useCallback(async(I,B,F)=>{switch(d(`Stage ${I}: ${B}`),console.log(`[handleStageAction] Stage ${I} action=${B} overrideParam="${F}" (type: ${typeof F})`),B){case"start":l(I,je.ACTIVE),E(!0);try{await D(I,F),I!==ye.BUILDER&&I!==ye.REVIEWER&&I!==ye.REVISER&&l(I,je.COMPLETED),d(`Stage ${I} completed`)}catch(G){l(I,je.ERROR),d(`Stage ${I} error: ${G}`)}finally{E(!1)}break;case"abort":l(I,je.ERROR),E(!1),d(`Stage ${I} aborted`);break;case"restart":m(I),l(I,je.ACTIVE),E(!0),d(`Stage ${I} restarting...`);try{await D(I,F),I!==ye.BUILDER&&I!==ye.REVIEWER&&I!==ye.REVISER&&l(I,je.COMPLETED),d(`Stage ${I} restart completed`)}catch(G){l(I,je.ERROR),d(`Stage ${I} restart error: ${G}`)}finally{E(!1)}break;case"skip":l(I,je.SKIPPED),d(`Stage ${I} skipped`);break}},[d,l,m,D]),P=he.useCallback(async(I,B)=>{var F;switch(d(`Action: ${I}`),I){case"START_SETUP":(o.rounds.length>0||o.currentPaperVersion>0||o.paperContent!=="")&&A&&A().then(()=>{d("Setup: Backed up and cleared previous case data")}),L(ye.SETUP,"start");break;case"START_BUILDER":d("Setup: Checking for data files...");let z;const re=ji();if(re)z=re.filename,console.log(`[START_BUILDER] Using cloud data file: ${re.filename}`),d(`Setup: Data file ready (cloud) - ${re.filename}`);else if(R.dataFile)z=R.dataFile.name,console.log(`[START_BUILDER] Using uploaded data file: ${z}`),d(`Setup: Data file ready (uploaded) - ${z}`);else try{d("Setup: Refreshing file manifest...");const Z=await Jp();if(console.log("[START_BUILDER] manifestResult:",JSON.stringify(Z,null,2)),Z.success&&Z.manifest){console.log("[START_BUILDER] manifest.files:",JSON.stringify(Z.manifest.files,null,2));const j=(F=Z.manifest.files)==null?void 0:F.find(Q=>Q.type==="dataFile");console.log("[START_BUILDER] Found dataFile entry:",j),j&&(z=j.filename,console.log(`[START_BUILDER] Manifest found dataFile: filename="${j.filename}"`),d(`Setup: Data file detected - ${j.filename}`),v&&(d("Setup: Loading data file into memory..."),await v(),d("Setup: Data file loaded successfully")))}}catch{console.log("[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)")}z||d("Setup: No data file - will generate partial paper"),l(ye.SETUP,je.COMPLETED),f(ye.BUILDER),console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${z}"`),setTimeout(()=>{console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${z}"`),L(ye.BUILDER,"start",z)},500);break;case"PROCEED_TO_SUPERVISOR":l(ye.REVIEWER,je.COMPLETED),f(ye.SUPERVISOR);break;case"SKIP_TO_REVIEWER":l(ye.SETUP,je.COMPLETED),l(ye.BUILDER,je.COMPLETED),y({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ye.REVIEWER),setTimeout(()=>L(ye.REVIEWER,"start"),100);break;case"SKIP_TO_SUPERVISOR":l(ye.SETUP,je.COMPLETED),l(ye.BUILDER,je.COMPLETED),l(ye.REVIEWER,je.COMPLETED),y({paperContent:"Sample paper for testing...",currentPaperVersion:1,currentRound:1}),f(ye.SUPERVISOR);break;case"revise":if(B){x({supervisorComment:B});const Z=o.currentRound;Tp(Z,Z,B),_p("CONTINUE",Z),d(`Supervisor: Saved directive to feedback file (round ${Z})`)}l(ye.SUPERVISOR,je.COMPLETED),f(ye.REVISER),d(`Supervisor: Passing directive to Reviser: "${(B==null?void 0:B.substring(0,50))||"none"}..."`),setTimeout(()=>L(ye.REVISER,"start",B),100);break;case"finalize":if(B){x({supervisorComment:B});const Z=o.currentRound;Tp(Z,Z,B),_p("FINALIZE",Z),d(`Supervisor: Saved finalize decision to feedback file (round ${Z})`)}l(ye.SUPERVISOR,je.COMPLETED),f(ye.FINALIZE);break;case"NEW_CASE":A?A().then(()=>{d("New case started - files backed up and cleared"),v==null||v(),f(ye.SETUP)}):f(ye.SETUP);break;default:d(`Unknown action: ${I}`)}},[d,f,l,x,L,A,o.rounds.length,o.currentPaperVersion,o.paperContent,y,v]);return{isProcessing:h,handleStageAction:L,handleWorkflowAction:P}}const Vx=()=>{const[c,o]=he.useState("main"),[l,u]=he.useState("research"),d=he.useCallback(Y=>{u(Y),nx(Y),console.log(`[App] Paper mode changed to: ${Y}`)},[]),{simulationState:f,setStageStatus:y,setBuilderStep:p,addLog:x,moveToStage:m,updateState:A,addRound:R,updateLastRound:_,resetStageData:v,setParticipantId:T,getFilePrefix:h,resetAllState:E}=Fx(),{uploadedFiles:w,handleFileChange:D,getInterviewContent:L,getDataFileContent:P,getDataFileName:I,getParticipantEmail:B,detectionStatus:F,refreshDetection:G}=Bx(),z=he.useCallback(async Y=>{const V=`Data File Verification

File: ${Y.filename}
Total lines: ${Y.totalLines}

First line (column headers):
${Y.firstLine}

Is this the correct data file for your analysis?`;return window.confirm(V)},[]),{isProcessing:re,handleStageAction:Z,handleWorkflowAction:j}=Px({simulationState:f,setStageStatus:y,setBuilderStep:p,addLog:x,moveToStage:m,updateState:A,addRound:R,updateLastRound:_,resetStageData:v,resetAllState:E,uploadedFiles:w,getInterviewContent:L,refreshDetection:G,onDataFileConfirm:z});he.useEffect(()=>{w.participantId&&w.participantId!==f.participantId&&(T(w.participantId),x(`Participant ID set: ${w.participantId}`))},[w.participantId,f.participantId,T,x]);const Q=Y=>{x(`Aborting ${Y}...`),Z(Y,"abort")},S=Y=>{x(`Restarting ${Y}...`),Z(Y,"restart"),setTimeout(()=>Z(Y,"start"),100)};return i.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden font-sans",children:[i.jsx("div",{className:"w-80 flex-shrink-0 h-full",children:i.jsx($v,{currentStage:f.currentStage,currentBuilderStep:f.currentBuilderStep,stagesState:f.stages,isPartialPaper:f.isPartialPaper,currentRound:f.currentRound,isProcessing:re,onStageClick:m,onStageAction:Z,onNewCase:()=>j("NEW_CASE"),onNewInterview:()=>{window.open(`/interview.html?mode=${l}`,"_blank","noopener,noreferrer")},onPaperToInterview:()=>{window.open("/paper-to-interview.html","_blank","noopener,noreferrer")},onResearchAdmin:l==="research"?()=>o(c==="admin"?"main":"admin"):void 0,paperMode:l,onPaperModeChange:d})}),i.jsx("div",{className:"flex-1 h-full",children:c==="admin"?i.jsx(zb,{onClose:()=>o("main")}):i.jsx(Nb,{state:f,isProcessing:re,onAction:j,uploadedFiles:w,onFileChange:D,detectionStatus:F,onRefreshDetection:G,onStageAbort:Q,onStageRestart:S,filePrefix:h(),dataFileName:I(),dataFileContent:P(),participantEmail:B()||void 0,onNewInterview:()=>{window.open(`/interview.html?mode=${l}`,"_blank","noopener,noreferrer")}})})]})};function $x(){const c=Date.now(),o=new Uint8Array(16);crypto.getRandomValues(o);const l=Array.from(o).map(u=>u.toString(16).padStart(2,"0")).join("");return`${c}_${l}`}function Hx(){const c=sessionStorage.getItem("icis_session_token");if(!c)return!1;const o=c.split("_");if(o.length!==2)return!1;const l=parseInt(o[0],10);if(isNaN(l))return!1;const u=Date.now()-l,d=1440*60*1e3;return u<d}const Gx=({onLogin:c})=>{const[o,l]=he.useState(""),[u,d]=he.useState(""),[f,y]=he.useState(""),[p,x]=he.useState(!1),m=A=>{A.preventDefault(),y(""),x(!0);const R=void 0,_=void 0;setTimeout(()=>{if(o===R&&u===_){const v=$x();sessionStorage.setItem("icis_session_token",v),sessionStorage.setItem("icis_authenticated","true"),c()}else y("Invalid username or password"),x(!1)},500)};return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:i.jsxs("div",{className:"w-full max-w-md",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30",children:i.jsx("span",{className:"text-2xl font-bold text-white",children:"CC"})}),i.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"ConferenceCopilot"}),i.jsx("p",{className:"text-slate-400",children:"AI-Powered Research Paper Authoring"})]}),i.jsx("div",{className:"bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10",children:i.jsxs("form",{onSubmit:m,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"username",className:"block text-sm font-medium text-slate-300 mb-2",children:"Username"}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(Bv,{className:"h-5 w-5 text-slate-400"})}),i.jsx("input",{type:"text",id:"username",value:o,onChange:A=>l(A.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter username",required:!0,autoComplete:"username"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-slate-300 mb-2",children:"Password"}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:i.jsx(dv,{className:"h-5 w-5 text-slate-400"})}),i.jsx("input",{type:"password",id:"password",value:u,onChange:A=>d(A.target.value),className:"block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Enter password",required:!0,autoComplete:"current-password"})]})]}),f&&i.jsxs("div",{className:"flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl",children:[i.jsx(kn,{className:"h-5 w-5 flex-shrink-0"}),i.jsx("span",{className:"text-sm",children:f})]}),i.jsx("button",{type:"submit",disabled:p,className:"w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40",children:p?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Signing in..."]}):"Sign In"})]})}),i.jsx("p",{className:"text-center text-slate-500 text-sm mt-6",children:"Conference Paper Authoring System"})]})})},Yx=()=>{const[c,o]=he.useState(null);he.useEffect(()=>{const u=Hx(),d=sessionStorage.getItem("icis_authenticated");o(d==="true"&&u)},[]);const l=()=>{o(!0)};return c===null?i.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center",children:i.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"})}):c?i.jsx(Vx,{}):i.jsx(Gx,{onLogin:l})},Nm=document.getElementById("root");if(!Nm)throw new Error("Could not find root element to mount to");const qx=J0.createRoot(Nm);qx.render(i.jsx(G0.StrictMode,{children:i.jsx(Yx,{})}));export{ty as R};
