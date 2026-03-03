(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var mh={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function MS(){if(i_)return Fo;i_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=t,Fo.jsx=i,Fo.jsxs=i,Fo}var a_;function ES(){return a_||(a_=1,mh.exports=MS()),mh.exports}var St=ES(),gh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function bS(){if(s_)return ce;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(F,J,dt){this.props=F,this.context=J,this.refs=y,this.updater=dt||E}v.prototype.isReactComponent={},v.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function C(){}C.prototype=v.prototype;function U(F,J,dt){this.props=F,this.context=J,this.refs=y,this.updater=dt||E}var R=U.prototype=new C;R.constructor=U,T(R,v.prototype),R.isPureReactComponent=!0;var N=Array.isArray;function z(){}var P={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function A(F,J,dt){var Dt=dt.ref;return{$$typeof:r,type:F,key:J,ref:Dt!==void 0?Dt:null,props:dt}}function L(F,J){return A(F.type,J,F.props)}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function Y(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(dt){return J[dt]})}var Z=/\/+/g;function at(F,J){return typeof F=="object"&&F!==null&&F.key!=null?Y(""+F.key):J.toString(36)}function tt(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(z,z):(F.status="pending",F.then(function(J){F.status==="pending"&&(F.status="fulfilled",F.value=J)},function(J){F.status==="pending"&&(F.status="rejected",F.reason=J)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function O(F,J,dt,Dt,Pt){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var ut=!1;if(F===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(F.$$typeof){case r:case t:ut=!0;break;case g:return ut=F._init,O(ut(F._payload),J,dt,Dt,Pt)}}if(ut)return Pt=Pt(F),ut=Dt===""?"."+at(F,0):Dt,N(Pt)?(dt="",ut!=null&&(dt=ut.replace(Z,"$&/")+"/"),O(Pt,J,dt,"",function(Gt){return Gt})):Pt!=null&&(V(Pt)&&(Pt=L(Pt,dt+(Pt.key==null||F&&F.key===Pt.key?"":(""+Pt.key).replace(Z,"$&/")+"/")+ut)),J.push(Pt)),1;ut=0;var Ot=Dt===""?".":Dt+":";if(N(F))for(var Ht=0;Ht<F.length;Ht++)Dt=F[Ht],it=Ot+at(Dt,Ht),ut+=O(Dt,J,dt,it,Pt);else if(Ht=S(F),typeof Ht=="function")for(F=Ht.call(F),Ht=0;!(Dt=F.next()).done;)Dt=Dt.value,it=Ot+at(Dt,Ht++),ut+=O(Dt,J,dt,it,Pt);else if(it==="object"){if(typeof F.then=="function")return O(tt(F),J,dt,Dt,Pt);throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(F,J,dt){if(F==null)return F;var Dt=[],Pt=0;return O(F,Dt,"","",function(it){return J.call(dt,it,Pt++)}),Dt}function et(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(dt){(F._status===0||F._status===-1)&&(F._status=1,F._result=dt)},function(dt){(F._status===0||F._status===-1)&&(F._status=2,F._result=dt)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var yt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},xt={map:H,forEach:function(F,J,dt){H(F,function(){J.apply(this,arguments)},dt)},count:function(F){var J=0;return H(F,function(){J++}),J},toArray:function(F){return H(F,function(J){return J})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ce.Activity=_,ce.Children=xt,ce.Component=v,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=U,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},ce.cache=function(F){return function(){return F.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(F,J,dt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Dt=T({},F.props),Pt=F.key;if(J!=null)for(it in J.key!==void 0&&(Pt=""+J.key),J)!X.call(J,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&J.ref===void 0||(Dt[it]=J[it]);var it=arguments.length-2;if(it===1)Dt.children=dt;else if(1<it){for(var ut=Array(it),Ot=0;Ot<it;Ot++)ut[Ot]=arguments[Ot+2];Dt.children=ut}return A(F.type,Pt,Dt)},ce.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},ce.createElement=function(F,J,dt){var Dt,Pt={},it=null;if(J!=null)for(Dt in J.key!==void 0&&(it=""+J.key),J)X.call(J,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(Pt[Dt]=J[Dt]);var ut=arguments.length-2;if(ut===1)Pt.children=dt;else if(1<ut){for(var Ot=Array(ut),Ht=0;Ht<ut;Ht++)Ot[Ht]=arguments[Ht+2];Pt.children=Ot}if(F&&F.defaultProps)for(Dt in ut=F.defaultProps,ut)Pt[Dt]===void 0&&(Pt[Dt]=ut[Dt]);return A(F,it,Pt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(F){return{$$typeof:h,render:F}},ce.isValidElement=V,ce.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:et}},ce.memo=function(F,J){return{$$typeof:d,type:F,compare:J===void 0?null:J}},ce.startTransition=function(F){var J=P.T,dt={};P.T=dt;try{var Dt=F(),Pt=P.S;Pt!==null&&Pt(dt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(z,yt)}catch(it){yt(it)}finally{J!==null&&dt.types!==null&&(J.types=dt.types),P.T=J}},ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(F){return P.H.use(F)},ce.useActionState=function(F,J,dt){return P.H.useActionState(F,J,dt)},ce.useCallback=function(F,J){return P.H.useCallback(F,J)},ce.useContext=function(F){return P.H.useContext(F)},ce.useDebugValue=function(){},ce.useDeferredValue=function(F,J){return P.H.useDeferredValue(F,J)},ce.useEffect=function(F,J){return P.H.useEffect(F,J)},ce.useEffectEvent=function(F){return P.H.useEffectEvent(F)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(F,J,dt){return P.H.useImperativeHandle(F,J,dt)},ce.useInsertionEffect=function(F,J){return P.H.useInsertionEffect(F,J)},ce.useLayoutEffect=function(F,J){return P.H.useLayoutEffect(F,J)},ce.useMemo=function(F,J){return P.H.useMemo(F,J)},ce.useOptimistic=function(F,J){return P.H.useOptimistic(F,J)},ce.useReducer=function(F,J,dt){return P.H.useReducer(F,J,dt)},ce.useRef=function(F){return P.H.useRef(F)},ce.useState=function(F){return P.H.useState(F)},ce.useSyncExternalStore=function(F,J,dt){return P.H.useSyncExternalStore(F,J,dt)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.2.3",ce}var r_;function sp(){return r_||(r_=1,gh.exports=bS()),gh.exports}var jt=sp(),_h={exports:{}},Io={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function TS(){return o_||(o_=1,(function(r){function t(O,H){var et=O.length;O.push(H);t:for(;0<et;){var yt=et-1>>>1,xt=O[yt];if(0<l(xt,H))O[yt]=H,O[et]=xt,et=yt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],et=O.pop();if(et!==H){O[0]=et;t:for(var yt=0,xt=O.length,F=xt>>>1;yt<F;){var J=2*(yt+1)-1,dt=O[J],Dt=J+1,Pt=O[Dt];if(0>l(dt,et))Dt<xt&&0>l(Pt,dt)?(O[yt]=Pt,O[Dt]=et,yt=Dt):(O[yt]=dt,O[J]=et,yt=J);else if(Dt<xt&&0>l(Pt,et))O[yt]=Pt,O[Dt]=et,yt=Dt;else break t}}return H}function l(O,H){var et=O.sortIndex-H.sortIndex;return et!==0?et:O.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],d=[],g=1,_=null,x=3,S=!1,E=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(O){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=O)s(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(d)}}function N(O){if(T=!1,R(O),!E)if(i(m)!==null)E=!0,z||(z=!0,Y());else{var H=i(d);H!==null&&tt(N,H.startTime-O)}}var z=!1,P=-1,X=5,A=-1;function L(){return y?!0:!(r.unstable_now()-A<X)}function V(){if(y=!1,z){var O=r.unstable_now();A=O;var H=!0;try{t:{E=!1,T&&(T=!1,C(P),P=-1),S=!0;var et=x;try{e:{for(R(O),_=i(m);_!==null&&!(_.expirationTime>O&&L());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,x=_.priorityLevel;var xt=yt(_.expirationTime<=O);if(O=r.unstable_now(),typeof xt=="function"){_.callback=xt,R(O),H=!0;break e}_===i(m)&&s(m),R(O)}else s(m);_=i(m)}if(_!==null)H=!0;else{var F=i(d);F!==null&&tt(N,F.startTime-O),H=!1}}break t}finally{_=null,x=et,S=!1}H=void 0}}finally{H?Y():z=!1}}}var Y;if(typeof U=="function")Y=function(){U(V)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,at=Z.port2;Z.port1.onmessage=V,Y=function(){at.postMessage(null)}}else Y=function(){v(V,0)};function tt(O,H){P=v(function(){O(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var et=x;x=H;try{return O()}finally{x=et}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var et=x;x=O;try{return H()}finally{x=et}},r.unstable_scheduleCallback=function(O,H,et){var yt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?yt+et:yt):et=yt,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=et+xt,O={id:g++,callback:H,priorityLevel:O,startTime:et,expirationTime:xt,sortIndex:-1},et>yt?(O.sortIndex=et,t(d,O),i(m)===null&&O===i(d)&&(T?(C(P),P=-1):T=!0,tt(N,et-yt))):(O.sortIndex=xt,t(m,O),E||S||(E=!0,z||(z=!0,Y()))),O},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(O){var H=x;return function(){var et=x;x=H;try{return O.apply(this,arguments)}finally{x=et}}}})(xh)),xh}var l_;function AS(){return l_||(l_=1,vh.exports=TS()),vh.exports}var yh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function RS(){if(c_)return Pn;c_=1;var r=sp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Pn.flushSync=function(m){var d=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=g,s.d.f()}},Pn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),x=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Pn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,d){return m(d)},Pn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var u_;function CS(){if(u_)return yh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=RS(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function wS(){if(f_)return Io;f_=1;var r=AS(),t=sp(),i=CS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return m(u),e;if(p===o)return m(u),n;p=p.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=p;else{for(var M=!1,w=u.child;w;){if(w===a){M=!0,a=u,o=p;break}if(w===o){M=!0,o=u,a=p;break}w=w.sibling}if(!M){for(w=p.child;w;){if(w===a){M=!0,a=p,o=u;break}if(w===o){M=!0,o=p,a=u;break}w=w.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var tt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function F(e){return{current:e}}function J(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function dt(e,n){xt++,yt[xt]=e.current,e.current=n}var Dt=F(null),Pt=F(null),it=F(null),ut=F(null);function Ot(e,n){switch(dt(it,n),dt(Pt,e),dt(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=A0(n),e=R0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Dt),dt(Dt,e)}function Ht(){J(Dt),J(Pt),J(it)}function Gt(e){e.memoizedState!==null&&dt(ut,e);var n=Dt.current,a=R0(n,e.type);n!==a&&(dt(Pt,e),dt(Dt,a))}function pe(e){Pt.current===e&&(J(Dt),J(Pt)),ut.current===e&&(J(ut),No._currentValue=et)}var Je,ge;function me(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+ge}var Te=!1;function re(e,n){if(!e||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ft){var lt=ft}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ft){lt=ft}e.call(Mt.prototype)}}else{try{throw Error()}catch(ft){lt=ft}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ft){if(ft&&lt&&typeof ft.stack=="string")return[ft.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),M=p[0],w=p[1];if(M&&w){var G=M.split(`
`),rt=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===rt.length)for(o=G.length-1,u=rt.length-1;1<=o&&0<=u&&G[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==rt[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function je(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return me("Activity");default:return""}}function W(e){try{var n="",a=null;do n+=je(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qe=Object.prototype.hasOwnProperty,ye=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,qt=r.unstable_shouldYield,I=r.unstable_requestPaint,b=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,Tt=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Nt=r.unstable_IdlePriority,Wt=r.log,te=r.unstable_setDisableYieldValue,Ct=null,$=null;function Et(e){if(typeof Wt=="function"&&te(e),$&&typeof $.setStrictMode=="function")try{$.setStrictMode(Ct,e)}catch{}}var bt=Math.clz32?Math.clz32:k,At=Math.log,Vt=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(At(e)/Vt|0)|0}var Rt=256,wt=262144,Ut=4194304;function _t(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,p=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~p,o!==0?u=_t(o):(M&=w,M!==0?u=_t(M):a||(a=w&~e,a!==0&&(u=_t(a))))):(w=o&~p,w!==0?u=_t(w):M!==0?u=_t(M):a||(a=o&~e,a!==0&&(u=_t(a)))),u===0?0:n!==0&&n!==u&&(n&p)===0&&(p=u&-u,a=n&-n,p>=a||p===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,p){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,rt=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-bt(a),Mt=1<<mt;w[mt]=0,G[mt]=-1;var lt=rt[mt];if(lt!==null)for(rt[mt]=null,mt=0;mt<lt.length;mt++){var ft=lt[mt];ft!==null&&(ft.lane&=-536870913)}a&=~Mt}o!==0&&sl(e,o,0),p!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=p&~(M&~n))}function sl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function zs(e,n){var a=n&-n;return a=(a&42)!==0?1:Wr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:K0(e.type))}function Ni(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var li=Math.random().toString(36).slice(2),ln="__reactFiber$"+li,En="__reactProps$"+li,Ei="__reactContainer$"+li,Is="__reactEvents$"+li,Bs="__reactListeners$"+li,rl="__reactHandles$"+li,Yr="__reactResources$"+li,rs="__reactMarker$"+li;function jr(e){delete e[ln],delete e[En],delete e[Is],delete e[Bs],delete e[rl]}function Ta(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=O0(e);e!==null;){if(a=e[ln])return a;e=O0(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[ln]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function os(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ra(e){var n=e[Yr];return n||(n=e[Yr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function D(e){e[rs]=!0}var K=new Set,ct={};function ot(e,n){nt(e,n),nt(e+"Capture",n)}function nt(e,n){for(ct[e]=n,e=0;e<n.length;e++)K.add(n[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Ft={};function kt(e){return qe.call(Ft,e)?!0:qe.call(Bt,e)?!1:zt.test(e)?Ft[e]=!0:(Bt[e]=!0,!1)}function Zt(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,p.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Le(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function Pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function oe(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(e,n,a,o,u,p,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,M,ne(n)):a!=null?Tn(e,M,ne(a)):o!=null&&e.removeAttribute("value"),u==null&&p!=null&&(e.defaultChecked=!!p),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ne(w):e.removeAttribute("name")}function ji(e,n,a,o,u,p,M,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||a!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ye(e)}function Tn(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ci(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function An(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ye(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Rn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Cn(e,u,o)}else for(var p in n)n.hasOwnProperty(p)&&Cn(e,p,n[p])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return xx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function Tp(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(s(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Pe(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ci(e,!!a.multiple,n,!1)}}}var du=!1;function Ap(e,n,a){if(du)return e(n,a);du=!0;try{var o=e(n);return o}finally{if(du=!1,(Gs!==null||Vs!==null)&&(jl(),Gs&&(n=Gs,e=Vs,Vs=Gs=null,Tp(n),e)))for(n=0;n<e.length;n++)Tp(e[n])}}function Zr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Ki)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{pu=!1}var Ca=null,mu=null,ll=null;function Rp(){if(ll)return ll;var e,n=mu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,p=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[p-o];o++);return ll=u.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function Cp(){return!1}function kn(e){function n(a,o,u,p,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ul:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=kn(ls),Qr=_({},ls,{view:0,detail:0}),yx=kn(Qr),gu,_u,Jr,hl=_({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(gu=e.screenX-Jr.screenX,_u=e.screenY-Jr.screenY):_u=gu=0,Jr=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),wp=kn(hl),Sx=_({},hl,{dataTransfer:0}),Mx=kn(Sx),Ex=_({},Qr,{relatedTarget:0}),vu=kn(Ex),bx=_({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=kn(bx),Ax=_({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rx=kn(Ax),Cx=_({},ls,{data:0}),Dp=kn(Cx),wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ux[e])?!!n[e]:!1}function xu(){return Lx}var Nx=_({},Qr,{key:function(e){if(e.key){var n=wx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ox=kn(Nx),Px=_({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=kn(Px),zx=_({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),Fx=kn(zx),Ix=_({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=kn(Ix),Hx=_({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=kn(Hx),Vx=_({},ls,{newState:0,oldState:0}),kx=kn(Vx),Xx=[9,13,27,32],yu=Ki&&"CompositionEvent"in window,$r=null;Ki&&"documentMode"in document&&($r=document.documentMode);var Wx=Ki&&"TextEvent"in window&&!$r,Lp=Ki&&(!yu||$r&&8<$r&&11>=$r),Np=" ",Op=!1;function Pp(e,n){switch(e){case"keyup":return Xx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function qx(e,n){switch(e){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Op=!0,Np);case"textInput":return e=n.data,e===Np&&Op?null:e;default:return null}}function Yx(e,n){if(ks)return e==="compositionend"||!yu&&Pp(e,n)?(e=Rp(),ll=mu=Ca=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jx[e.type]:n==="textarea"}function Ip(e,n,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var to=null,eo=null;function Zx(e){y0(e,0)}function dl(e){var n=os(e);if(Pe(n))return e}function Bp(e,n){if(e==="change")return n}var Hp=!1;if(Ki){var Su;if(Ki){var Mu="oninput"in document;if(!Mu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Mu=typeof Gp.oninput=="function"}Su=Mu}else Su=!1;Hp=Su&&(!document.documentMode||9<document.documentMode)}function Vp(){to&&(to.detachEvent("onpropertychange",kp),eo=to=null)}function kp(e){if(e.propertyName==="value"&&dl(eo)){var n=[];Ip(n,eo,e,hu(e)),Ap(Zx,n)}}function Kx(e,n,a){e==="focusin"?(Vp(),to=n,eo=a,to.attachEvent("onpropertychange",kp)):e==="focusout"&&Vp()}function Qx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(eo)}function Jx(e,n){if(e==="click")return dl(n)}function $x(e,n){if(e==="input"||e==="change")return dl(n)}function ty(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:ty;function no(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,n){var a=Xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xp(a)}}function qp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ey=Ki&&"documentMode"in document&&11>=document.documentMode,Xs=null,bu=null,io=null,Tu=!1;function jp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||Xs==null||Xs!==Jt(o)||(o=Xs,"selectionStart"in o&&Eu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=ec(bu,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xs)))}function cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ws={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Au={},Zp={};Ki&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function us(e){if(Au[e])return Au[e];if(!Ws[e])return e;var n=Ws[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return Au[e]=n[a];return e}var Kp=us("animationend"),Qp=us("animationiteration"),Jp=us("animationstart"),ny=us("transitionrun"),iy=us("transitionstart"),ay=us("transitioncancel"),$p=us("transitionend"),tm=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Ti(e,n){tm.set(e,n),ot(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],qs=0,Cu=0;function ml(){for(var e=qs,n=Cu=qs=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var p=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}p!==0&&em(a,u,p)}}function gl(e,n,a,o){ui[qs++]=e,ui[qs++]=n,ui[qs++]=a,ui[qs++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wu(e,n,a,o){return gl(e,n,a,o),_l(e)}function fs(e,n){return gl(e,null,null,n),_l(e)}function em(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,p=e.return;p!==null;)p.childLanes|=a,o=p.alternate,o!==null&&(o.childLanes|=a),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(u=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,u&&n!==null&&(u=31-bt(a),e=p.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),p):null}function _l(e){if(50<Ao)throw Ao=0,Bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ys={};function sy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new sy(e,n,a,o)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function nm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,p){var M=0;if(o=e,typeof e=="function")Du(e)&&(M=1);else if(typeof e=="string")M=uS(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=$n(31,a,n,u),e.elementType=A,e.lanes=p,e;case T:return hs(a.children,u,p,n);case y:M=8,u|=24;break;case v:return e=$n(12,a,n,u|2),e.elementType=v,e.lanes=p,e;case N:return e=$n(13,a,n,u),e.elementType=N,e.lanes=p,e;case z:return e=$n(19,a,n,u),e.elementType=z,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:M=10;break t;case C:M=9;break t;case R:M=11;break t;case P:M=14;break t;case X:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=p,n}function hs(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Uu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function im(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var am=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=am.get(e);return a!==void 0?a:(n={value:e,source:n,stack:W(n)},am.set(e,n),n)}return{value:e,source:n,stack:W(n)}}var js=[],Zs=0,xl=null,ao=0,hi=[],di=0,wa=null,Oi=1,Pi="";function Ji(e,n){js[Zs++]=ao,js[Zs++]=xl,xl=e,ao=n}function sm(e,n,a){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=wa,wa=e;var o=Oi;e=Pi;var u=32-bt(o)-1;o&=~(1<<u),a+=1;var p=32-bt(n)+u;if(30<p){var M=u-u%5;p=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Oi=1<<32-bt(n)+u|a<<u|o,Pi=p+e}else Oi=1<<p|a<<u|o,Pi=e}function Nu(e){e.return!==null&&(Ji(e,1),sm(e,1,0))}function Ou(e){for(;e===xl;)xl=js[--Zs],js[Zs]=null,ao=js[--Zs],js[Zs]=null;for(;e===wa;)wa=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,Oi=hi[--di],hi[di]=null}function rm(e,n){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=wa,Oi=n.id,Pi=n.overflow,wa=e}var wn=null,Ze=null,Ee=!1,Da=null,pi=!1,Pu=Error(s(519));function Ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(fi(n,e)),Pu}function om(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[En]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)ve(Co[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),An(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||b0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Ua(e,!0)}function lm(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:wn=wn.return}}function Ks(e){if(e!==wn)return!1;if(!Ee)return lm(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ua(e),lm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=N0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=N0(e)}else n===27?(n=Ze,Wa(e.type)?(e=sh,sh=null,Ze=e):Ze=n):Ze=wn?gi(e.stateNode.nextSibling):null;return!0}function ds(){Ze=wn=null,Ee=!1}function zu(){var e=Da;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Da=null),e}function so(e){Da===null?Da=[e]:Da.push(e)}var Fu=F(null),ps=null,$i=null;function La(e,n,a){dt(Fu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Fu.current,J(Fu)}function Iu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var p=u.dependencies;if(p!==null){var M=u.child;p=p.firstContext;t:for(;p!==null;){var w=p;p=u;for(var G=0;G<n.length;G++)if(w.context===n[G]){p.lanes|=a,w=p.alternate,w!==null&&(w.lanes|=a),Iu(p.return,a,e),o||(M=null);break t}p=w.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,p=M.alternate,p!==null&&(p.lanes|=a),Iu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Qs(e,n,a,o){e=null;for(var u=n,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var w=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(u===ut.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}u=u.return}e!==null&&Bu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return cm(ps,e)}function Sl(e,n){return ps===null&&ms(e),cm(e,n)}function cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var ry=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},oy=r.unstable_scheduleCallback,ly=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new ry,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&oy(ly,function(){e.controller.abort()})}var oo=null,Gu=0,Js=0,$s=null;function cy(e,n){if(oo===null){var a=oo=[];Gu=0,Js=Wf(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(um,um),n}function um(){if(--Gu===0&&oo!==null){$s!==null&&($s.status="fulfilled");var e=oo;oo=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=O.S;O.S=function(e,n){jg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cy(e,n),fm!==null&&fm(e,n)};var gs=F(null);function Vu(){var e=gs.current;return e!==null?e:We.pooledCache}function Ml(e,n){n===null?dt(gs,gs.current):dt(gs,n.pool)}function hm(){var e=Vu();return e===null?null:{parent:cn._currentValue,pool:e}}var tr=Error(s(460)),ku=Error(s(474)),El=Error(s(542)),bl={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e}throw vs=n,tr}}function _s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vs=a,tr):a}}var vs=null;function mm(){if(vs===null)throw Error(s(459));var e=vs;return vs=null,e}function gm(e){if(e===tr||e===El)throw Error(s(483))}var er=null,lo=0;function Tl(e){var n=lo;return lo+=1,er===null&&(er=[]),pm(er,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _m(e){function n(Q,q){if(e){var st=Q.deletions;st===null?(Q.deletions=[q],Q.flags|=16):st.push(q)}}function a(Q,q){if(!e)return null;for(;q!==null;)n(Q,q),q=q.sibling;return null}function o(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function u(Q,q){return Q=Qi(Q,q),Q.index=0,Q.sibling=null,Q}function p(Q,q,st){return Q.index=st,e?(st=Q.alternate,st!==null?(st=st.index,st<q?(Q.flags|=67108866,q):st):(Q.flags|=67108866,q)):(Q.flags|=1048576,q)}function M(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,q,st,vt){return q===null||q.tag!==6?(q=Uu(st,Q.mode,vt),q.return=Q,q):(q=u(q,st),q.return=Q,q)}function G(Q,q,st,vt){var $t=st.type;return $t===T?mt(Q,q,st.props.children,vt,st.key):q!==null&&(q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===X&&_s($t)===q.type)?(q=u(q,st.props),co(q,st),q.return=Q,q):(q=vl(st.type,st.key,st.props,null,Q.mode,vt),co(q,st),q.return=Q,q)}function rt(Q,q,st,vt){return q===null||q.tag!==4||q.stateNode.containerInfo!==st.containerInfo||q.stateNode.implementation!==st.implementation?(q=Lu(st,Q.mode,vt),q.return=Q,q):(q=u(q,st.children||[]),q.return=Q,q)}function mt(Q,q,st,vt,$t){return q===null||q.tag!==7?(q=hs(st,Q.mode,vt,$t),q.return=Q,q):(q=u(q,st),q.return=Q,q)}function Mt(Q,q,st){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Uu(""+q,Q.mode,st),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return st=vl(q.type,q.key,q.props,null,Q.mode,st),co(st,q),st.return=Q,st;case E:return q=Lu(q,Q.mode,st),q.return=Q,q;case X:return q=_s(q),Mt(Q,q,st)}if(tt(q)||Y(q))return q=hs(q,Q.mode,st,null),q.return=Q,q;if(typeof q.then=="function")return Mt(Q,Tl(q),st);if(q.$$typeof===U)return Mt(Q,Sl(Q,q),st);Al(Q,q)}return null}function lt(Q,q,st,vt){var $t=q!==null?q.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return $t!==null?null:w(Q,q,""+st,vt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case S:return st.key===$t?G(Q,q,st,vt):null;case E:return st.key===$t?rt(Q,q,st,vt):null;case X:return st=_s(st),lt(Q,q,st,vt)}if(tt(st)||Y(st))return $t!==null?null:mt(Q,q,st,vt,null);if(typeof st.then=="function")return lt(Q,q,Tl(st),vt);if(st.$$typeof===U)return lt(Q,q,Sl(Q,st),vt);Al(Q,st)}return null}function ft(Q,q,st,vt,$t){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(st)||null,w(q,Q,""+vt,$t);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return Q=Q.get(vt.key===null?st:vt.key)||null,G(q,Q,vt,$t);case E:return Q=Q.get(vt.key===null?st:vt.key)||null,rt(q,Q,vt,$t);case X:return vt=_s(vt),ft(Q,q,st,vt,$t)}if(tt(vt)||Y(vt))return Q=Q.get(st)||null,mt(q,Q,vt,$t,null);if(typeof vt.then=="function")return ft(Q,q,st,Tl(vt),$t);if(vt.$$typeof===U)return ft(Q,q,st,Sl(q,vt),$t);Al(q,vt)}return null}function Xt(Q,q,st,vt){for(var $t=null,De=null,Qt=q,fe=q=0,Me=null;Qt!==null&&fe<st.length;fe++){Qt.index>fe?(Me=Qt,Qt=null):Me=Qt.sibling;var Ue=lt(Q,Qt,st[fe],vt);if(Ue===null){Qt===null&&(Qt=Me);break}e&&Qt&&Ue.alternate===null&&n(Q,Qt),q=p(Ue,q,fe),De===null?$t=Ue:De.sibling=Ue,De=Ue,Qt=Me}if(fe===st.length)return a(Q,Qt),Ee&&Ji(Q,fe),$t;if(Qt===null){for(;fe<st.length;fe++)Qt=Mt(Q,st[fe],vt),Qt!==null&&(q=p(Qt,q,fe),De===null?$t=Qt:De.sibling=Qt,De=Qt);return Ee&&Ji(Q,fe),$t}for(Qt=o(Qt);fe<st.length;fe++)Me=ft(Qt,Q,fe,st[fe],vt),Me!==null&&(e&&Me.alternate!==null&&Qt.delete(Me.key===null?fe:Me.key),q=p(Me,q,fe),De===null?$t=Me:De.sibling=Me,De=Me);return e&&Qt.forEach(function(Ka){return n(Q,Ka)}),Ee&&Ji(Q,fe),$t}function ie(Q,q,st,vt){if(st==null)throw Error(s(151));for(var $t=null,De=null,Qt=q,fe=q=0,Me=null,Ue=st.next();Qt!==null&&!Ue.done;fe++,Ue=st.next()){Qt.index>fe?(Me=Qt,Qt=null):Me=Qt.sibling;var Ka=lt(Q,Qt,Ue.value,vt);if(Ka===null){Qt===null&&(Qt=Me);break}e&&Qt&&Ka.alternate===null&&n(Q,Qt),q=p(Ka,q,fe),De===null?$t=Ka:De.sibling=Ka,De=Ka,Qt=Me}if(Ue.done)return a(Q,Qt),Ee&&Ji(Q,fe),$t;if(Qt===null){for(;!Ue.done;fe++,Ue=st.next())Ue=Mt(Q,Ue.value,vt),Ue!==null&&(q=p(Ue,q,fe),De===null?$t=Ue:De.sibling=Ue,De=Ue);return Ee&&Ji(Q,fe),$t}for(Qt=o(Qt);!Ue.done;fe++,Ue=st.next())Ue=ft(Qt,Q,fe,Ue.value,vt),Ue!==null&&(e&&Ue.alternate!==null&&Qt.delete(Ue.key===null?fe:Ue.key),q=p(Ue,q,fe),De===null?$t=Ue:De.sibling=Ue,De=Ue);return e&&Qt.forEach(function(SS){return n(Q,SS)}),Ee&&Ji(Q,fe),$t}function ke(Q,q,st,vt){if(typeof st=="object"&&st!==null&&st.type===T&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case S:t:{for(var $t=st.key;q!==null;){if(q.key===$t){if($t=st.type,$t===T){if(q.tag===7){a(Q,q.sibling),vt=u(q,st.props.children),vt.return=Q,Q=vt;break t}}else if(q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===X&&_s($t)===q.type){a(Q,q.sibling),vt=u(q,st.props),co(vt,st),vt.return=Q,Q=vt;break t}a(Q,q);break}else n(Q,q);q=q.sibling}st.type===T?(vt=hs(st.props.children,Q.mode,vt,st.key),vt.return=Q,Q=vt):(vt=vl(st.type,st.key,st.props,null,Q.mode,vt),co(vt,st),vt.return=Q,Q=vt)}return M(Q);case E:t:{for($t=st.key;q!==null;){if(q.key===$t)if(q.tag===4&&q.stateNode.containerInfo===st.containerInfo&&q.stateNode.implementation===st.implementation){a(Q,q.sibling),vt=u(q,st.children||[]),vt.return=Q,Q=vt;break t}else{a(Q,q);break}else n(Q,q);q=q.sibling}vt=Lu(st,Q.mode,vt),vt.return=Q,Q=vt}return M(Q);case X:return st=_s(st),ke(Q,q,st,vt)}if(tt(st))return Xt(Q,q,st,vt);if(Y(st)){if($t=Y(st),typeof $t!="function")throw Error(s(150));return st=$t.call(st),ie(Q,q,st,vt)}if(typeof st.then=="function")return ke(Q,q,Tl(st),vt);if(st.$$typeof===U)return ke(Q,q,Sl(Q,st),vt);Al(Q,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,q!==null&&q.tag===6?(a(Q,q.sibling),vt=u(q,st),vt.return=Q,Q=vt):(a(Q,q),vt=Uu(st,Q.mode,vt),vt.return=Q,Q=vt),M(Q)):a(Q,q)}return function(Q,q,st,vt){try{lo=0;var $t=ke(Q,q,st,vt);return er=null,$t}catch(Qt){if(Qt===tr||Qt===El)throw Qt;var De=$n(29,Qt,null,Q.mode);return De.lanes=vt,De.return=Q,De}finally{}}}var xs=_m(!0),vm=_m(!1),Na=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),em(e,null,a),n}return gl(e,o,n,a),_l(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xr(e,a)}}function qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?u=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?u=p=n:p=p.next=n}else u=p=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yu=!1;function fo(){if(Yu){var e=$s;if(e!==null)throw e}}function ho(e,n,a,o){Yu=!1;var u=e.updateQueue;Na=!1;var p=u.firstBaseUpdate,M=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,rt=G.next;G.next=null,M===null?p=rt:M.next=rt,M=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==M&&(w===null?mt.firstBaseUpdate=rt:w.next=rt,mt.lastBaseUpdate=G))}if(p!==null){var Mt=u.baseState;M=0,mt=rt=G=null,w=p;do{var lt=w.lane&-536870913,ft=lt!==w.lane;if(ft?(Se&lt)===lt:(o&lt)===lt){lt!==0&&lt===Js&&(Yu=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Xt=e,ie=w;lt=n;var ke=a;switch(ie.tag){case 1:if(Xt=ie.payload,typeof Xt=="function"){Mt=Xt.call(ke,Mt,lt);break t}Mt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ie.payload,lt=typeof Xt=="function"?Xt.call(ke,Mt,lt):Xt,lt==null)break t;Mt=_({},Mt,lt);break t;case 2:Na=!0}}lt=w.callback,lt!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[lt]:ft.push(lt))}else ft={lane:lt,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(rt=mt=ft,G=Mt):mt=mt.next=ft,M|=lt;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ft=w,w=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);mt===null&&(G=Mt),u.baseState=G,u.firstBaseUpdate=rt,u.lastBaseUpdate=mt,p===null&&(u.shared.lanes=0),Ha|=M,e.lanes=M,e.memoizedState=Mt}}function xm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ym(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xm(a[e],n)}var nr=F(null),Rl=F(0);function Sm(e,n){e=ca,dt(Rl,e),dt(nr,n),ca=e|n.baseLanes}function ju(){dt(Rl,ca),dt(nr,nr.current)}function Zu(){ca=Rl.current,J(nr),J(Rl)}var ti=F(null),mi=null;function za(e){var n=e.alternate;dt(rn,rn.current&1),dt(ti,e),mi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(mi=e)}function Ku(e){dt(rn,rn.current),dt(ti,e),mi===null&&(mi=e)}function Mm(e){e.tag===22?(dt(rn,rn.current),dt(ti,e),mi===null&&(mi=e)):Fa()}function Fa(){dt(rn,rn.current),dt(ti,ti.current)}function ei(e){J(ti),mi===e&&(mi=null),J(rn)}var rn=F(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ue=null,Ge=null,un=null,wl=!1,ir=!1,ys=!1,Dl=0,po=0,ar=null,fy=0;function nn(){throw Error(s(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Ju(e,n,a,o,u,p){return ea=p,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?sg:pf,ys=!1,p=a(o,u),ys=!1,ir&&(p=bm(n,a,o,u)),Em(e),p}function Em(e){O.H=_o;var n=Ge!==null&&Ge.next!==null;if(ea=0,un=Ge=ue=null,wl=!1,po=0,ar=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&yl(e)&&(fn=!0))}function bm(e,n,a,o){ue=e;var u=0;do{if(ir&&(ar=null),po=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}O.H=rg,p=n(a,o)}while(ir);return p}function hy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),n}function $u(){var e=Dl!==0;return Dl=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}ea=0,un=Ge=ue=null,ir=!1,po=Dl=0,ar=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ue.memoizedState=un=e:un=un.next=e,un}function on(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?ue.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?ue.memoizedState=un=e:un=un.next=e}return un}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,ar===null&&(ar=[]),e=pm(ar,e,n),n=ue,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?sg:pf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===U)return Dn(e)}throw Error(s(438,String(e)))}function nf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=L;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=on();return af(n,Ge,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,p=o.pending;if(p!==null){if(u!==null){var M=u.next;u.next=p.next,p.next=M}n.baseQueue=u=p,o.pending=null}if(p=e.baseState,u===null)e.memoizedState=p;else{n=u.next;var w=M=null,G=null,rt=n,mt=!1;do{var Mt=rt.lane&-536870913;if(Mt!==rt.lane?(Se&Mt)===Mt:(ea&Mt)===Mt){var lt=rt.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),Mt===Js&&(mt=!0);else if((ea&lt)===lt){rt=rt.next,lt===Js&&(mt=!0);continue}else Mt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(w=G=Mt,M=p):G=G.next=Mt,ue.lanes|=lt,Ha|=lt;Mt=rt.action,ys&&a(p,Mt),p=rt.hasEagerState?rt.eagerState:a(p,Mt)}else lt={lane:Mt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(w=G=lt,M=p):G=G.next=lt,ue.lanes|=Mt,Ha|=Mt;rt=rt.next}while(rt!==null&&rt!==n);if(G===null?M=p:G.next=w,!Jn(p,e.memoizedState)&&(fn=!0,mt&&(a=$s,a!==null)))throw a;e.memoizedState=p,e.baseState=M,e.baseQueue=G,o.lastRenderedState=p}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function sf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,p=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do p=e(p,M.action),M=M.next;while(M!==u);Jn(p,n.memoizedState)||(fn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),a.lastRenderedState=p}return[p,o]}function Tm(e,n,a){var o=ue,u=on(),p=Ee;if(p){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Jn((Ge||u).memoizedState,a);if(M&&(u.memoizedState=a,fn=!0),u=u.queue,lf(Cm.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));p||(ea&127)!==0||Am(o,n,a)}return a}function Am(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Ul(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rm(e,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(e)}function Cm(e,n,a){return a(function(){wm(n)&&Dm(e)})}function wm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Dm(e){var n=fs(e,2);n!==null&&jn(n,e,2)}function rf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),ys){Et(!0);try{a()}finally{Et(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Um(e,n,a,o){return e.baseState=a,af(e,Ge,typeof o=="function"?o:na)}function dy(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var p={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};O.T!==null?a(!0):p.isTransition=!1,o(p),a=n.pending,a===null?(p.next=n.pending=p,Lm(n,p)):(p.next=a.next,n.pending=a.next=p)}}function Lm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var p=O.T,M={};O.T=M;try{var w=a(u,o),G=O.S;G!==null&&G(M,w),Nm(e,n,w)}catch(rt){of(e,n,rt)}finally{p!==null&&M.types!==null&&(p.types=M.types),O.T=p}}else try{p=a(u,o),Nm(e,n,p)}catch(rt){of(e,n,rt)}}function Nm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(e,n,o)},function(o){return of(e,n,o)}):Om(e,n,a)}function Om(e,n,a){n.status="fulfilled",n.value=a,Pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lm(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}e.action=null}function Pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zm(e,n){return n}function Fm(e,n){if(Ee){var a=We.formState;if(a!==null){t:{var o=ue;if(Ee){if(Ze){e:{for(var u=Ze,p=pi;u.nodeType!==8;){if(!p){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){Ze=gi(u.nextSibling),o=u.data==="F!";break t}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=o,a=ng.bind(null,ue,o),o.dispatch=a,o=rf(!1),p=df.bind(null,ue,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=dy.bind(null,ue,u,p,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Im(e){var n=on();return Bm(n,Ge,e)}function Bm(e,n,a){if(n=af(e,n,zm)[0],e=Nl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(M){throw M===tr?El:M}else o=n;n=on();var u=n.queue,p=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,sr(9,{destroy:void 0},py.bind(null,u,a),null)),[o,p,e]}function py(e,n){e.action=n}function Hm(e){var n=on(),a=Ge;if(a!==null)return Bm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function sr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Ul(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Gm(){return on().memoizedState}function Ol(e,n,a,o){var u=Bn();ue.flags|=e,u.memoizedState=sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(e,n,a,o){var u=on();o=o===void 0?null:o;var p=u.memoizedState.inst;Ge!==null&&o!==null&&Qu(o,Ge.memoizedState.deps)?u.memoizedState=sr(n,p,a,o):(ue.flags|=e,u.memoizedState=sr(1|n,p,a,o))}function Vm(e,n){Ol(8390656,8,e,n)}function lf(e,n){Pl(2048,8,e,n)}function my(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Ul(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function km(e){var n=on().memoizedState;return my({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xm(e,n){return Pl(4,2,e,n)}function Wm(e,n){return Pl(4,4,e,n)}function qm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ym(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,qm.bind(null,n,e),a)}function cf(){}function jm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Zm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qu(n,o[1]))return o[0];if(o=e(),ys){Et(!0);try{e()}finally{Et(!1)}}return a.memoizedState=[o,n],o}function uf(e,n,a){return a===void 0||(ea&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Kg(),ue.lanes|=e,Ha|=e,a)}function Km(e,n,a,o){return Jn(a,n)?a:nr.current!==null?(e=uf(e,a,o),Jn(e,n)||(fn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Se&261930)===0?(fn=!0,e.memoizedState=a):(e=Kg(),ue.lanes|=e,Ha|=e,n)}function Qm(e,n,a,o,u){var p=H.p;H.p=p!==0&&8>p?p:8;var M=O.T,w={};O.T=w,df(e,!1,n,a);try{var G=u(),rt=O.S;if(rt!==null&&rt(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=uy(G,o);go(e,n,mt,ai(e))}else go(e,n,o,ai(e))}catch(Mt){go(e,n,{then:function(){},status:"rejected",reason:Mt},ai())}finally{H.p=p,M!==null&&w.types!==null&&(M.types=w.types),O.T=M}}function gy(){}function ff(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Jm(e).queue;Qm(e,u,n,et,a===null?gy:function(){return $m(e),a(o)})}function Jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $m(e){var n=Jm(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},ai())}function hf(){return Dn(No)}function tg(){return on().memoizedState}function eg(){return on().memoizedState}function _y(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Oa(a);var o=Pa(n,e,a);o!==null&&(jn(o,n,a),uo(o,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function vy(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?ig(n,a):(a=wu(e,n,a,o),a!==null&&(jn(a,e,o),ag(a,n,o)))}function ng(e,n,a){var o=ai();go(e,n,a,o)}function go(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))ig(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,w=p(M,a);if(u.hasEagerState=!0,u.eagerState=w,Jn(w,M))return gl(e,n,u,0),We===null&&ml(),!1}catch{}finally{}if(a=wu(e,n,u,o),a!==null)return jn(a,e,o),ag(a,n,o),!0}return!1}function df(e,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=wu(e,a,o,2),n!==null&&jn(n,e,2)}function zl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function ig(e,n){ir=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ag(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xr(e,a)}}var _o={readContext:Dn,use:Ll,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};_o.useEffectEvent=nn;var sg={readContext:Dn,use:Ll,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:Vm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,qm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(ys){Et(!0);try{e()}finally{Et(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(ys){Et(!0);try{a(n)}finally{Et(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=vy.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=rf(e);var n=e.queue,a=ng.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,n){var a=Bn();return uf(a,e,n)},useTransition:function(){var e=rf(!1);return e=Qm.bind(null,ue,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Bn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Se&127)!==0||Am(o,n,a)}u.memoizedState=a;var p={value:a,getSnapshot:n};return u.queue=p,Vm(Cm.bind(null,o,p,e),[e]),o.flags|=2048,sr(9,{destroy:void 0},Rm.bind(null,o,p,a,n),null),a},useId:function(){var e=Bn(),n=We.identifierPrefix;if(Ee){var a=Pi,o=Oi;a=(o&~(1<<32-bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return Bn().memoizedState=_y.bind(null,ue)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Dn,use:Ll,useCallback:jm,useContext:Dn,useEffect:lf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:Nl,useRef:Gm,useState:function(){return Nl(na)},useDebugValue:cf,useDeferredValue:function(e,n){var a=on();return Km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Nl(na)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:hf,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=on();return Um(a,Ge,e,n)},useMemoCache:nf,useCacheRefresh:eg};pf.useEffectEvent=km;var rg={readContext:Dn,use:Ll,useCallback:jm,useContext:Dn,useEffect:lf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:sf,useRef:Gm,useState:function(){return sf(na)},useDebugValue:cf,useDeferredValue:function(e,n){var a=on();return Ge===null?uf(a,e,n):Km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=sf(na)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:hf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=on();return Ge!==null?Um(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:eg};rg.useEffectEvent=km;function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(jn(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(jn(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(e,o,a),n!==null&&(jn(n,e,a),uo(n,e,a))}};function og(e,n,a,o,u,p,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,p,M):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,p):!0}function lg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function cg(e){pl(e)}function ug(e){console.error(e)}function fg(e){pl(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function dg(e){return e=Oa(e),e.tag=3,e}function pg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var p=o.value;e.payload=function(){return u(p)},e.callback=function(){hg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){hg(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function xy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Zl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(e,o,u)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(e,o,u)),!1}throw Error(s(435,a.tag))}return Vf(e,o,u),Zl(),!1}if(Ee)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(e=Error(s(422),{cause:o}),so(fi(e,a)))):(o!==Pu&&(n=Error(s(423),{cause:o}),so(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=_f(e.stateNode,o,u),qu(e,u),an!==4&&(an=2)),!1;var p=Error(s(520),{cause:o});if(p=fi(p,a),To===null?To=[p]:To.push(p),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),qu(a,e),!1;case 1:if(n=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ga===null||!Ga.has(p))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dg(u),pg(u,e,a,o),qu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(s(461)),fn=!1;function Un(e,n,a,o){n.child=e===null?vm(n,null,a,o):xs(n,e.child,a,o)}function mg(e,n,a,o,u){a=a.render;var p=n.ref;if("ref"in o){var M={};for(var w in o)w!=="ref"&&(M[w]=o[w])}else M=o;return ms(n),o=Ju(e,n,a,M,p,u),w=$u(),e!==null&&!fn?(tf(e,n,u),ia(e,n,u)):(Ee&&w&&Nu(n),n.flags|=1,Un(e,n,o,u),n.child)}function gg(e,n,a,o,u){if(e===null){var p=a.type;return typeof p=="function"&&!Du(p)&&p.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=p,_g(e,n,p,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!Af(e,u)){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(M,o)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(p,o),e.ref=n.ref,e.return=n,n.child=e}function _g(e,n,a,o,u){if(e!==null){var p=e.memoizedProps;if(no(p,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=p,Af(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return xf(e,n,a,o,u)}function vg(e,n,a,o){var u=o.children,p=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~p}else o=0,n.child=null;return xg(e,n,p,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,p!==null?p.cachePool:null),p!==null?Sm(n,p):ju(),Mm(n);else return o=n.lanes=536870912,xg(e,n,p!==null?p.baseLanes|a:a,a,o)}else p!==null?(Ml(n,p.cachePool),Sm(n,p),Fa(),n.memoizedState=null):(e!==null&&Ml(n,null),ju(),Fa());return Un(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(e,n,a,o,u){var p=Vu();return p=p===null?null:{parent:cn._currentValue,pool:p},n.memoizedState={baseLanes:a,cachePool:p},e!==null&&Ml(n,null),ju(),Mm(n),e!==null&&Qs(e,n,o,!0),n.childLanes=u,null}function Il(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function yg(e,n,a){return xs(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function yy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,vo(null,e);if(Ku(n),(e=Ze)?(e=L0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,wn=n,Ze=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Il(n,o)}var p=e.memoizedState;if(p!==null){var M=p.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=yg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Qs(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=We,o!==null&&(M=zs(o,a),M!==0&&M!==p.retryLane))throw p.retryLane=M,fs(e,M),jn(o,e,M),vf;Zl(),n=yg(e,n,a)}else e=p.treeContext,Ze=gi(M.nextSibling),wn=n,Ee=!0,Da=null,pi=!1,e!==null&&rm(n,e),n=Il(n,o),n.flags|=4096;return n}return e=Qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,o,u){return ms(n),a=Ju(e,n,a,o,void 0,u),o=$u(),e!==null&&!fn?(tf(e,n,u),ia(e,n,u)):(Ee&&o&&Nu(n),n.flags|=1,Un(e,n,a,u),n.child)}function Sg(e,n,a,o,u,p){return ms(n),n.updateQueue=null,a=bm(n,o,a,u),Em(e),o=$u(),e!==null&&!fn?(tf(e,n,p),ia(e,n,p)):(Ee&&o&&Nu(n),n.flags|=1,Un(e,n,a,p),n.child)}function Mg(e,n,a,o,u){if(ms(n),n.stateNode===null){var p=Ys,M=a.contextType;typeof M=="object"&&M!==null&&(p=Dn(M)),p=new a(o,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=gf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=o,p.state=n.memoizedState,p.refs={},Xu(n),M=a.contextType,p.context=typeof M=="object"&&M!==null?Dn(M):Ys,p.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(mf(n,a,M,o),p.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&gf.enqueueReplaceState(p,p.state,null),ho(n,o,p,u),fo(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){p=n.stateNode;var w=n.memoizedProps,G=Ss(a,w);p.props=G;var rt=p.context,mt=a.contextType;M=Ys,typeof mt=="object"&&mt!==null&&(M=Dn(mt));var Mt=a.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,mt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||rt!==M)&&lg(n,p,o,M),Na=!1;var lt=n.memoizedState;p.state=lt,ho(n,o,p,u),fo(),rt=n.memoizedState,w||lt!==rt||Na?(typeof Mt=="function"&&(mf(n,a,Mt,o),rt=n.memoizedState),(G=Na||og(n,a,G,o,lt,rt,M))?(mt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),p.props=o,p.state=rt,p.context=M,o=G):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{p=n.stateNode,Wu(e,n),M=n.memoizedProps,mt=Ss(a,M),p.props=mt,Mt=n.pendingProps,lt=p.context,rt=a.contextType,G=Ys,typeof rt=="object"&&rt!==null&&(G=Dn(rt)),w=a.getDerivedStateFromProps,(rt=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==Mt||lt!==G)&&lg(n,p,o,G),Na=!1,lt=n.memoizedState,p.state=lt,ho(n,o,p,u),fo();var ft=n.memoizedState;M!==Mt||lt!==ft||Na||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof w=="function"&&(mf(n,a,w,o),ft=n.memoizedState),(mt=Na||og(n,a,mt,o,lt,ft,G)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(rt||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,ft,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,ft,G)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),p.props=o,p.state=ft,p.context=G,o=mt):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return p=o,Bl(e,n),o=(n.flags&128)!==0,p||o?(p=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&o?(n.child=xs(n,e.child,null,u),n.child=xs(n,null,a,u)):Un(e,n,a,u),n.memoizedState=p.state,e=n.child):e=ia(e,n,u),e}function Eg(e,n,a,o){return ds(),n.flags|=256,Un(e,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:hm()}}function Mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function bg(e,n,a){var o=n.pendingProps,u=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?za(n):Fa(),(e=Ze)?(e=L0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,wn=n,Ze=null)):e=null,e===null)throw Ua(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Fa(),u=n.mode,w=Hl({mode:"hidden",children:w},u),o=hs(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(e,M,a),n.memoizedState=yf,vo(null,o)):(za(n),Ef(n,w))}var G=e.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(p)n.flags&256?(za(n),n.flags&=-257,n=bf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),w=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),w=hs(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,xs(n,e.child,null,a),o=n.child,o.memoizedState=Sf(a),o.childLanes=Mf(e,M,a),n.memoizedState=yf,n=vo(null,o));else if(za(n),ah(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var rt=M.dgst;M=rt,o=Error(s(419)),o.stack="",o.digest=M,so({value:o,source:null,stack:null}),n=bf(e,n,a)}else if(fn||Qs(e,n,a,!1),M=(a&e.childLanes)!==0,fn||M){if(M=We,M!==null&&(o=zs(M,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,fs(e,o),jn(M,e,o),vf;ih(w)||Zl(),n=bf(e,n,a)}else ih(w)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ze=gi(w.nextSibling),wn=n,Ee=!0,Da=null,pi=!1,e!==null&&rm(n,e),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Fa(),w=o.fallback,u=n.mode,G=e.child,rt=G.sibling,o=Qi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,rt!==null?w=Qi(rt,w):(w=hs(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,vo(null,o),o=n.child,w=e.child.memoizedState,w===null?w=Sf(a):(u=w.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=hm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Mf(e,M,a),n.memoizedState=yf,vo(e.child,o)):(za(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function bf(e,n,a){return xs(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Iu(e.return,n,a)}function Tf(e,n,a,o,u,p){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:p}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=p)}function Ag(e,n,a){var o=n.pendingProps,u=o.revealOrder,p=o.tail;o=o.children;var M=rn.current,w=(M&2)!==0;if(w?(M=M&1|2,n.flags|=128):M&=1,dt(rn,M),Un(e,n,o,a),o=Ee?ao:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tg(e,a,n);else if(e.tag===19)Tg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,p,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,p,o);break;case"together":Tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Sy(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),La(n,cn,e.memoizedState.cache),ds();break;case 27:case 5:Gt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?bg(e,n,a):(za(n),e=ia(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),dt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,vg(e,n,a,n.pendingProps);case 24:La(n,cn,e.memoizedState.cache)}return ia(e,n,a)}function Rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return fn=!1,Sy(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ee&&(n.flags&1048576)!==0&&sm(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=_s(n.elementType),n.type=e,typeof e=="function")Du(e)?(o=Ss(e,o),n.tag=1,n=Mg(null,n,e,o,a)):(n.tag=0,n=xf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===R){n.tag=11,n=mg(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=gg(null,n,e,o,a);break t}}throw n=at(e)||e,Error(s(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),Mg(e,n,o,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var p=n.memoizedState;u=p.element,Wu(e,n),ho(n,o,null,a);var M=n.memoizedState;if(o=M.cache,La(n,cn,o),o!==p.cache&&Bu(n,[cn],a,!0),fo(),o=M.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=Eg(e,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),so(u),n=Eg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=gi(e.firstChild),wn=n,Ee=!0,Da=null,pi=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ds(),o===u){n=ia(e,n,a);break t}Un(e,n,o,a)}n=n.child}return n;case 26:return Bl(e,n),e===null?(a=I0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=nc(it.current).createElement(a),o[ln]=n,o[En]=e,Ln(o,a,e),D(o),n.stateNode=o):n.memoizedState=I0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&Ee&&(o=n.stateNode=P0(n.type,n.pendingProps,it.current),wn=n,pi=!0,u=Ze,Wa(n.type)?(sh=u,Ze=gi(o.firstChild)):Ze=u),Un(e,n,n.pendingProps.children,a),Bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=Ze)&&(o=Qy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,wn=n,Ze=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Ua(n)),Gt(n),u=n.type,p=n.pendingProps,M=e!==null?e.memoizedProps:null,o=p.children,th(u,p)?o=null:M!==null&&th(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,hy,null,null,a),No._currentValue=u),Bl(e,n),Un(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Ze)&&(a=Jy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,wn=n,Ze=null,e=!0):e=!1),e||Ua(n)),null;case 13:return bg(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=xs(n,null,o,a):Un(e,n,o,a),n.child;case 11:return mg(e,n,n.type,n.pendingProps,a);case 7:return Un(e,n,n.pendingProps,a),n.child;case 8:return Un(e,n,n.pendingProps.children,a),n.child;case 12:return Un(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Un(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ms(n),u=Dn(u),o=o(u),n.flags|=1,Un(e,n,o,a),n.child;case 14:return gg(e,n,n.type,n.pendingProps,a);case 15:return _g(e,n,n.type,n.pendingProps,a);case 19:return Ag(e,n,a);case 31:return yy(e,n,a);case 22:return vg(e,n,a,n.pendingProps);case 24:return ms(n),o=Dn(cn),e===null?(u=Vu(),u===null&&(u=We,p=Hu(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=a),u=p),n.memoizedState={parent:o,cache:u},Xu(n),La(n,cn,u)):((e.lanes&a)!==0&&(Wu(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,p=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,o)):(o=p.cache,La(n,cn,o),o!==u.cache&&Bu(n,[cn],a,!0))),Un(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Rf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(t0())e.flags|=8192;else throw vs=bl,ku}else e.flags&=-16777217}function Cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k0(n))if(t0())e.flags|=8192;else throw vs=bl,ku}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,cr|=n)}function xo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function My(e,n,a){var o=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(cn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),Ke(n),null;case 26:var u=n.type,p=n.memoizedState;return e===null?(aa(n),p!==null?(Ke(n),Cg(n,p)):(Ke(n),Rf(n,u,null,o,a))):p?p!==e.memoizedState?(aa(n),Ke(n),Cg(n,p)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&aa(n),Ke(n),Rf(n,u,e,o,a)),null;case 27:if(pe(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Dt.current,Ks(n)?om(n):(e=P0(u,o,a),n.stateNode=e,aa(n))}return Ke(n),null;case 5:if(pe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(p=Dt.current,Ks(n))om(n);else{var M=nc(it.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?p.multiple=!0:o.size&&(p.size=o.size);break;default:p=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}p[ln]=n,p[En]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=p;t:switch(Ln(p,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&aa(n)}}return Ke(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||b0(e.nodeValue,a)),e||Ua(n,!0)}else e=nc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),p=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Ke(n),null);case 4:return Ht(),e===null&&Zf(n.stateNode.containerInfo),Ke(n),null;case 10:return ta(n.type),Ke(n),null;case 19:if(J(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,p=o.rendering,p===null)if(u)xo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=Cl(e),p!==null){for(n.flags|=128,xo(o,!1),e=p.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)nm(a,e),a=a.sibling;return dt(rn,rn.current&1|2),Ee&&Ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>ql&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(p),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!p.alternate&&!Ee)return Ke(n),null}else 2*b()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(p.sibling=n.child,n.child=p):(e=o.last,e!==null?e.sibling=p:n.child=p,o.last=p)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,dt(rn,u?a&1|2:a&1),Ee&&Ji(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ei(n),Zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(gs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(cn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ey(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(cn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(rn),null;case 4:return Ht(),null;case 10:return ta(n.type),null;case 22:case 23:return ei(n),Zu(),e!==null&&J(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(cn),null;case 25:return null;default:return null}}function wg(e,n){switch(Ou(n),n.tag){case 3:ta(cn),Ht();break;case 26:case 27:case 5:pe(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:J(rn);break;case 10:ta(n.type);break;case 22:case 23:ei(n),Zu(),e!==null&&J(gs);break;case 24:ta(cn)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var p=a.create,M=a.inst;o=p(),M.destroy=o}a=a.next}while(a!==u)}}catch(w){Be(n,n.return,w)}}function Ia(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&e)===e){var M=o.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,u=n;var G=a,rt=w;try{rt()}catch(mt){Be(u,G,mt)}}}o=o.next}while(o!==p)}}catch(mt){Be(n,n.return,mt)}}function Dg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ym(n,a)}catch(o){Be(e,e.return,o)}}}function Ug(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Cf(e,n,a){try{var o=e.stateNode;Wy(o,e.type,a,n),o[En]=n}catch(u){Be(e,e.return,u)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function Og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[ln]=e,n[En]=a}catch(p){Be(e,e.return,p)}}var sa=!1,hn=!1,Uf=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function by(e,n){if(e=e.containerInfo,Jf=cc,e=Yp(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break t}var M=0,w=-1,G=-1,rt=0,mt=0,Mt=e,lt=null;e:for(;;){for(var ft;Mt!==a||u!==0&&Mt.nodeType!==3||(w=M+u),Mt!==p||o!==0&&Mt.nodeType!==3||(G=M+o),Mt.nodeType===3&&(M+=Mt.nodeValue.length),(ft=Mt.firstChild)!==null;)lt=Mt,Mt=ft;for(;;){if(Mt===e)break e;if(lt===a&&++rt===u&&(w=M),lt===p&&++mt===o&&(G=M),(ft=Mt.nextSibling)!==null)break;Mt=lt,lt=Mt.parentNode}Mt=ft}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},cc=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,p=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,a=n,u=p.memoizedProps,p=p.memoizedState,o=a.stateNode;try{var Xt=Ss(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,p),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Be(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function zg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&yo(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Be(a,a.return,M)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Be(a,a.return,M)}}o&64&&Dg(a),o&512&&So(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(e,n)}catch(M){Be(a,a.return,M)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:oa(e,a),n===null&&o&4&&Lg(a),o&512&&So(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),o&4&&Bg(e,a);break;case 13:oa(e,a),o&4&&Hg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ny.bind(null,a),$y(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||hn,u=sa;var p=hn;sa=o,(hn=n)&&!p?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,hn=p}break;case 30:break;default:oa(e,a)}}function Fg(e){var n=e.alternate;n!==null&&(e.alternate=null,Fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&jr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Xn=!1;function ra(e,n,a){for(a=a.child;a!==null;)Ig(e,n,a),a=a.sibling}function Ig(e,n,a){if($&&typeof $.onCommitFiberUnmount=="function")try{$.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var o=tn,u=Xn;Wa(a.type)&&(tn=a.stateNode,Xn=!1),ra(e,n,a),Do(a.stateNode),tn=o,Xn=u;break;case 5:hn||zi(a,n);case 6:if(o=tn,u=Xn,tn=null,ra(e,n,a),tn=o,Xn=u,tn!==null)if(Xn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(p){Be(a,n,p)}else try{tn.removeChild(a.stateNode)}catch(p){Be(a,n,p)}break;case 18:tn!==null&&(Xn?(e=tn,D0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):D0(tn,a.stateNode));break;case 4:o=tn,u=Xn,tn=a.stateNode.containerInfo,Xn=!0,ra(e,n,a),tn=o,Xn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),hn||Ia(4,a,n),ra(e,n,a);break;case 1:hn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,n,o)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ra(e,n,a),hn=o;break;default:ra(e,n,a)}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Be(n,n.return,a)}}}function Hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Be(n,n.return,a)}}function Ty(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pg),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=Ty(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Oy.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],p=e,M=n,w=M;t:for(;w!==null;){switch(w.tag){case 27:if(Wa(w.type)){tn=w.stateNode,Xn=!1;break t}break;case 5:tn=w.stateNode,Xn=!1;break t;case 3:case 4:tn=w.stateNode.containerInfo,Xn=!0;break t}w=w.return}if(tn===null)throw Error(s(160));Ig(p,M,u),tn=null,Xn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,e),n=n.sibling}var Ai=null;function Gg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ia(3,e,e.return),yo(3,e),Ia(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),o&4){var p=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":p=u.getElementsByTagName("title")[0],(!p||p[rs]||p[ln]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(o),u.head.insertBefore(p,u.querySelector("head > title"))),Ln(p,o,a),p[ln]=e,D(p),o=p;break t;case"link":var M=G0("link","href",u).get(o+(a.href||""));if(M){for(var w=0;w<M.length;w++)if(p=M[w],p.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&p.getAttribute("rel")===(a.rel==null?null:a.rel)&&p.getAttribute("title")===(a.title==null?null:a.title)&&p.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(w,1);break e}}p=u.createElement(o),Ln(p,o,a),u.head.appendChild(p);break;case"meta":if(M=G0("meta","content",u).get(o+(a.content||""))){for(w=0;w<M.length;w++)if(p=M[w],p.getAttribute("content")===(a.content==null?null:""+a.content)&&p.getAttribute("name")===(a.name==null?null:a.name)&&p.getAttribute("property")===(a.property==null?null:a.property)&&p.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&p.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(w,1);break e}}p=u.createElement(o),Ln(p,o,a),u.head.appendChild(p);break;default:throw Error(s(468,o))}p[ln]=e,D(p),o=p}e.stateNode=o}else V0(u,e.type,e.stateNode);else e.stateNode=H0(u,o,e.memoizedProps);else p!==o?(p===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):p.count--,o===null?V0(u,e.type,e.stateNode):H0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),a!==null&&o&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(hn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(Xt){Be(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Be(e,e.return,Xt)}}break;case 3:if(sc=null,u=Ai,Ai=ic(n.containerInfo),Wn(n,e),Ai=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Xt){Be(e,e.return,Xt)}Uf&&(Uf=!1,Vg(e));break;case 4:o=Ai,Ai=ic(e.stateNode.containerInfo),Wn(n,e),qn(e),Ai=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,rt=sa,mt=hn;if(sa=rt||u,hn=mt||G,Wn(n,e),hn=mt,sa=rt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||sa||hn||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(p=G.stateNode,u)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=G.stateNode;var Mt=G.memoizedProps.style,lt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;w.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Xt){Be(G,G.return,Xt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Xt){Be(G,G.return,Xt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?U0(ft,!0):U0(G.stateNode,!1)}catch(Xt){Be(G,G.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,p=wf(e);Vl(e,p,u);break;case 5:var M=a.stateNode;a.flags&32&&(mn(M,""),a.flags&=-33);var w=wf(e);Vl(e,w,M);break;case 3:case 4:var G=a.stateNode.containerInfo,rt=wf(e);Df(e,rt,G);break;default:throw Error(s(161))}}catch(mt){Be(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zg(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Ms(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ug(n,n.return,a),Ms(n);break;case 27:Do(n.stateNode);case 26:case 5:zi(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:la(u,p,a),yo(4,p);break;case 1:if(la(u,p,a),o=p,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){Be(o,o.return,rt)}if(o=p,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)xm(G[u],w)}catch(rt){Be(o,o.return,rt)}}a&&M&64&&Dg(p),So(p,p.return);break;case 27:Og(p);case 26:case 5:la(u,p,a),a&&o===null&&M&4&&Lg(p),So(p,p.return);break;case 12:la(u,p,a);break;case 31:la(u,p,a),a&&M&4&&Bg(u,p);break;case 13:la(u,p,a),a&&M&4&&Hg(u,p);break;case 22:p.memoizedState===null&&la(u,p,a),So(p,p.return);break;case 30:break;default:la(u,p,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(e,n,a,o),n=n.sibling}function kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&yo(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var p=n.memoizedProps,M=p.id,w=p.onPostCommit;typeof w=="function"&&w(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Be(n,n.return,G)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?Ri(e,n,a,o):Mo(e,n):p._visibility&2?Ri(e,n,a,o):(p._visibility|=2,rr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(M,n);break;case 24:Ri(e,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Ri(e,n,a,o)}}function rr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=e,M=n,w=a,G=o,rt=M.flags;switch(M.tag){case 0:case 11:case 15:rr(p,M,w,G,u),yo(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?rr(p,M,w,G,u):Mo(p,M):(mt._visibility|=2,rr(p,M,w,G,u)),u&&rt&2048&&Lf(M.alternate,M);break;case 24:rr(p,M,w,G,u),u&&rt&2048&&Nf(M.alternate,M);break;default:rr(p,M,w,G,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Lf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Nf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function or(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)Xg(e,n,a),e=e.sibling}function Xg(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&Eo&&e.memoizedState!==null&&fS(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var o=Ai;Ai=ic(e.stateNode.containerInfo),or(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,or(e,n,a),Eo=o):or(e,n,a));break;default:or(e,n,a)}}function Wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Yg(o,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qg(e),e=e.sibling}function qg(e){switch(e.tag){case 0:case 11:case 15:bo(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:bo(e);break;case 12:bo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):bo(e);break;default:bo(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Yg(o,e)}Wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function Yg(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,p=o.return;if(Fg(o),o===a){yn=null;break t}if(u!==null){u.return=p,yn=u;break t}yn=p}}}var Ay={getCacheForType:function(e){var n=Dn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Dn(cn).controller.signal}},Ry=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,_e=null,Se=0,Ie=0,ni=null,Ba=!1,lr=!1,Of=!1,ca=0,an=0,Ha=0,Es=0,Pf=0,ii=0,cr=0,To=null,Yn=null,zf=!1,Wl=0,jg=0,ql=1/0,Yl=null,Ga=null,gn=0,Va=null,ur=null,ua=0,Ff=0,If=null,Zg=null,Ao=0,Bf=null;function ai(){return(Oe&2)!==0&&Se!==0?Se&-Se:O.T!==null?Wf():qr()}function Kg(){if(ii===0)if((Se&536870912)===0||Ee){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function jn(e,n,a){(e===We&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(fr(e,0),ka(e,Se,ii,!1)),On(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(Es|=a),an===4&&ka(e,Se,ii,!1)),Fi(e))}function Qg(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?Dy(e,n):Gf(e,n,!0),p=o;do{if(u===0){lr&&!o&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,p&&!Cy(a)){u=Gf(e,n,!1),p=!1;continue}if(u===2){if(p=n,e.errorRecoveryDisabledLanes&p)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var w=e;u=To;var G=w.current.memoizedState.isDehydrated;if(G&&(fr(w,M).flags|=256),M=Gf(w,M,!1),M!==2){if(Of&&!G){w.errorRecoveryDisabledLanes|=p,Es|=p,u=4;break t}p=Yn,Yn=u,p!==null&&(Yn===null?Yn=p:Yn.push.apply(Yn,p))}u=M}if(p=!1,u!==2)continue}}if(u===1){fr(e,0),ka(e,n,0,!0);break}t:{switch(o=e,p=u,p){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ii,!Ba);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Wl+300-b(),10<u)){if(ka(o,n,ii,!Ba),pt(o,0,!0)!==0)break t;ua=n,o.timeoutHandle=C0(Jg.bind(null,o,a,Yn,Yl,zf,n,ii,Es,cr,Ba,p,"Throttled",-0,0),u);break t}Jg(o,a,Yn,Yl,zf,n,ii,Es,cr,Ba,p,null,-0,0)}}break}while(!0);Fi(e)}function Jg(e,n,a,o,u,p,M,w,G,rt,mt,Mt,lt,ft){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Xg(n,p,Mt);var Xt=(p&62914560)===p?Wl-b():(p&4194048)===p?jg-b():0;if(Xt=hS(Mt,Xt),Xt!==null){ua=p,e.cancelPendingCommit=Xt(r0.bind(null,e,n,p,a,o,u,M,w,G,mt,Mt,null,lt,ft)),ka(e,p,M,!rt);return}}r0(e,n,p,a,o,u,M,w,G)}function Cy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],p=u.getSnapshot;u=u.value;try{if(!Jn(p(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,o){n&=~Pf,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var p=31-bt(u),M=1<<p;o[p]=-1,u&=~M}a!==0&&sl(e,a,n)}function jl(){return(Oe&6)===0?(Ro(0),!1):!0}function Hf(){if(_e!==null){if(Ie===0)var e=_e.return;else e=_e,$i=ps=null,ef(e),er=null,lo=0,e=_e;for(;e!==null;)wg(e.alternate,e),e=e.return;_e=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Hf(),We=e,_e=a=Qi(e.current,null),Se=n,Ie=0,ni=null,Ba=!1,lr=Lt(e,n),Of=!1,cr=ii=Pf=Es=Ha=an=0,Yn=To=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-bt(o),p=1<<u;n|=e[u],o&=~p}return ca=n,ml(),a}function $g(e,n){ue=null,O.H=_o,n===tr||n===El?(n=mm(),Ie=3):n===ku?(n=mm(),Ie=4):Ie=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,_e===null&&(an=1,Fl(e,fi(n,e.current)))}function t0(){var e=ti.current;return e===null?!0:(Se&4194048)===Se?mi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===mi:!1}function e0(){var e=O.H;return O.H=_o,e===null?_o:e}function n0(){var e=O.A;return O.A=Ay,e}function Zl(){an=4,Ba||(Se&4194048)!==Se&&ti.current!==null||(lr=!0),(Ha&134217727)===0&&(Es&134217727)===0||We===null||ka(We,Se,ii,!1)}function Gf(e,n,a){var o=Oe;Oe|=2;var u=e0(),p=n0();(We!==e||Se!==n)&&(Yl=null,fr(e,n)),n=!1;var M=an;t:do try{if(Ie!==0&&_e!==null){var w=_e,G=ni;switch(Ie){case 8:Hf(),M=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var rt=Ie;if(Ie=0,ni=null,hr(e,w,G,rt),a&&lr){M=0;break t}break;default:rt=Ie,Ie=0,ni=null,hr(e,w,G,rt)}}wy(),M=an;break}catch(mt){$g(e,mt)}while(!0);return n&&e.shellSuspendCounter++,$i=ps=null,Oe=o,O.H=u,O.A=p,_e===null&&(We=null,Se=0,ml()),M}function wy(){for(;_e!==null;)i0(_e)}function Dy(e,n){var a=Oe;Oe|=2;var o=e0(),u=n0();We!==e||Se!==n?(Yl=null,ql=b()+500,fr(e,n)):lr=Lt(e,n);t:do try{if(Ie!==0&&_e!==null){n=_e;var p=ni;e:switch(Ie){case 1:Ie=0,ni=null,hr(e,n,p,1);break;case 2:case 9:if(dm(p)){Ie=0,ni=null,a0(n);break}n=function(){Ie!==2&&Ie!==9||We!==e||(Ie=7),Fi(e)},p.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:dm(p)?(Ie=0,ni=null,a0(n)):(Ie=0,ni=null,hr(e,n,p,7));break;case 5:var M=null;switch(_e.tag){case 26:M=_e.memoizedState;case 5:case 27:var w=_e;if(M?k0(M):w.stateNode.complete){Ie=0,ni=null;var G=w.sibling;if(G!==null)_e=G;else{var rt=w.return;rt!==null?(_e=rt,Kl(rt)):_e=null}break e}}Ie=0,ni=null,hr(e,n,p,5);break;case 6:Ie=0,ni=null,hr(e,n,p,6);break;case 8:Hf(),an=6;break t;default:throw Error(s(462))}}Uy();break}catch(mt){$g(e,mt)}while(!0);return $i=ps=null,O.H=o,O.A=u,Oe=a,_e!==null?0:(We=null,Se=0,ml(),an)}function Uy(){for(;_e!==null&&!qt();)i0(_e)}function i0(e){var n=Rg(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?Kl(e):_e=n}function a0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Sg(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Sg(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:ef(n);default:wg(a,n),n=_e=nm(n,ca),n=Rg(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?Kl(e):_e=n}function hr(e,n,a,o){$i=ps=null,ef(n),er=null,lo=0;var u=n.return;try{if(xy(e,u,n,a,Se)){an=1,Fl(e,fi(a,e.current)),_e=null;return}}catch(p){if(u!==null)throw _e=u,p;an=1,Fl(e,fi(a,e.current)),_e=null;return}n.flags&32768?(Ee||o===1?e=!0:lr||(Se&536870912)!==0?e=!1:(Ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),s0(n,e)):Kl(n)}function Kl(e){var n=e;do{if((n.flags&32768)!==0){s0(n,Ba);return}e=n.return;var a=My(n.alternate,n,ca);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);an===0&&(an=5)}function s0(e,n){do{var a=Ey(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);an=6,_e=null}function r0(e,n,a,o,u,p,M,w,G){e.cancelPendingCommit=null;do Ql();while(gn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(p=n.lanes|n.childLanes,p|=Cu,Mi(e,a,p,M,w,G),e===We&&(_e=We=null,Se=0),ur=n,Va=e,ua=a,Ff=p,If=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Py(ht,function(){return f0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=H.p,H.p=2,M=Oe,Oe|=4;try{by(e,n,a)}finally{Oe=M,H.p=u,O.T=o}}gn=1,o0(),l0(),c0()}}function o0(){if(gn===1){gn=0;var e=Va,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Oe;Oe|=4;try{Gg(n,e);var p=$f,M=Yp(e.containerInfo),w=p.focusedElem,G=p.selectionRange;if(M!==w&&w&&w.ownerDocument&&qp(w.ownerDocument.documentElement,w)){if(G!==null&&Eu(w)){var rt=G.start,mt=G.end;if(mt===void 0&&(mt=rt),"selectionStart"in w)w.selectionStart=rt,w.selectionEnd=Math.min(mt,w.value.length);else{var Mt=w.ownerDocument||document,lt=Mt&&Mt.defaultView||window;if(lt.getSelection){var ft=lt.getSelection(),Xt=w.textContent.length,ie=Math.min(G.start,Xt),ke=G.end===void 0?ie:Math.min(G.end,Xt);!ft.extend&&ie>ke&&(M=ke,ke=ie,ie=M);var Q=Wp(w,ie),q=Wp(w,ke);if(Q&&q&&(ft.rangeCount!==1||ft.anchorNode!==Q.node||ft.anchorOffset!==Q.offset||ft.focusNode!==q.node||ft.focusOffset!==q.offset)){var st=Mt.createRange();st.setStart(Q.node,Q.offset),ft.removeAllRanges(),ie>ke?(ft.addRange(st),ft.extend(q.node,q.offset)):(st.setEnd(q.node,q.offset),ft.addRange(st))}}}}for(Mt=[],ft=w;ft=ft.parentNode;)ft.nodeType===1&&Mt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Mt.length;w++){var vt=Mt[w];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}cc=!!Jf,$f=Jf=null}finally{Oe=u,H.p=o,O.T=a}}e.current=n,gn=2}}function l0(){if(gn===2){gn=0;var e=Va,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Oe;Oe|=4;try{zg(e,n.alternate,n)}finally{Oe=u,H.p=o,O.T=a}}gn=3}}function c0(){if(gn===4||gn===3){gn=0,I();var e=Va,n=ur,a=ua,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,ur=Va=null,u0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Fs(a),n=n.stateNode,$&&typeof $.onCommitFiberRoot=="function")try{$.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var p=e.onRecoverableError,M=0;M<o.length;M++){var w=o[M];p(w.value,{componentStack:w.stack})}}finally{O.T=n,H.p=u}}(ua&3)!==0&&Ql(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Bf?Ao++:(Ao=0,Bf=e):Ao=0,Ro(0)}}function u0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Ql(){return o0(),l0(),c0(),f0()}function f0(){if(gn!==5)return!1;var e=Va,n=Ff;Ff=0;var a=Fs(ua),o=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=If,If=null;var p=Va,M=ua;if(gn=0,ur=Va=null,ua=0,(Oe&6)!==0)throw Error(s(331));var w=Oe;if(Oe|=4,qg(p.current),kg(p,p.current,M,a),Oe=w,Ro(0,!1),$&&typeof $.onPostCommitFiberRoot=="function")try{$.onPostCommitFiberRoot(Ct,p)}catch{}return!0}finally{H.p=u,O.T=o,u0(e,n)}}function h0(e,n,a){n=fi(a,n),n=_f(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(On(e,2),Fi(e))}function Be(e,n,a){if(e.tag===3)h0(e,e,a);else for(;n!==null;){if(n.tag===3){h0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=fi(a,e),a=dg(2),o=Pa(n,a,2),o!==null&&(pg(a,o,n,e),On(o,2),Fi(o));break}}n=n.return}}function Vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ry;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Of=!0,u.add(a),e=Ly.bind(null,e,n,a),n.then(e,e))}function Ly(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Se&a)===a&&(an===4||an===3&&(Se&62914560)===Se&&300>b()-Wl?(Oe&2)===0&&fr(e,0):Pf|=a,cr===Se&&(cr=0)),Fi(e)}function d0(e,n){n===0&&(n=ze()),e=fs(e,n),e!==null&&(On(e,n),Fi(e))}function Ny(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),d0(e,a)}function Oy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),d0(e,a)}function Py(e,n){return ye(e,n)}var Jl=null,dr=null,kf=!1,$l=!1,Xf=!1,Xa=0;function Fi(e){e!==dr&&e.next===null&&(dr===null?Jl=dr=e:dr=dr.next=e),$l=!0,kf||(kf=!0,Fy())}function Ro(e,n){if(!Xf&&$l){Xf=!0;do for(var a=!1,o=Jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var p=0;else{var M=o.suspendedLanes,w=o.pingedLanes;p=(1<<31-bt(42|e)+1)-1,p&=u&~(M&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(a=!0,_0(o,p))}else p=Se,p=pt(o,o===We?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||Lt(o,p)||(a=!0,_0(o,p));o=o.next}while(a);Xf=!1}}function zy(){p0()}function p0(){$l=kf=!1;var e=0;Xa!==0&&Yy()&&(e=Xa);for(var n=b(),a=null,o=Jl;o!==null;){var u=o.next,p=m0(o,n);p===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(dr=a)):(a=o,(e!==0||(p&3)!==0)&&($l=!0)),o=u}gn!==0&&gn!==5||Ro(e),Xa!==0&&(Xa=0)}function m0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var M=31-bt(p),w=1<<M,G=u[M];G===-1?((w&a)===0||(w&o)!==0)&&(u[M]=se(w,n)):G<=n&&(e.expiredLanes|=w),p&=~w}if(n=We,a=Se,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),Fs(a)){case 2:case 8:a=Tt;break;case 32:a=ht;break;case 268435456:a=Nt;break;default:a=ht}return o=g0.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ql()&&e.callbackNode!==a)return null;var o=Se;return o=pt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qg(e,o,n),m0(e,b()),e.callbackNode!=null&&e.callbackNode===a?g0.bind(null,e):null)}function _0(e,n){if(Ql())return null;Qg(e,n,!0)}function Fy(){Zy(function(){(Oe&6)!==0?ye(gt,zy):p0()})}function Wf(){if(Xa===0){var e=Js;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Xa=e}return Xa}function v0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function x0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Iy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var p=v0((u[En]||null).action),M=o.submitter;M&&(n=(n=M[En]||null)?v0(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var w=new fl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var G=M?x0(u,M):new FormData(u);ff(a,{pending:!0,data:G,method:u.method,action:p},null,G)}}else typeof p=="function"&&(w.preventDefault(),G=M?x0(u,M):new FormData(u),ff(a,{pending:!0,data:G,method:u.method,action:p},p,G))},currentTarget:u}]})}}for(var qf=0;qf<Ru.length;qf++){var Yf=Ru[qf],By=Yf.toLowerCase(),Hy=Yf[0].toUpperCase()+Yf.slice(1);Ti(By,"on"+Hy)}Ti(Kp,"onAnimationEnd"),Ti(Qp,"onAnimationIteration"),Ti(Jp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(ny,"onTransitionRun"),Ti(iy,"onTransitionStart"),Ti(ay,"onTransitionCancel"),Ti($p,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function y0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var p=void 0;if(n)for(var M=o.length-1;0<=M;M--){var w=o[M],G=w.instance,rt=w.currentTarget;if(w=w.listener,G!==p&&u.isPropagationStopped())break t;p=w,u.currentTarget=rt;try{p(u)}catch(mt){pl(mt)}u.currentTarget=null,p=G}else for(M=0;M<o.length;M++){if(w=o[M],G=w.instance,rt=w.currentTarget,w=w.listener,G!==p&&u.isPropagationStopped())break t;p=w,u.currentTarget=rt;try{p(u)}catch(mt){pl(mt)}u.currentTarget=null,p=G}}}}function ve(e,n){var a=n[Is];a===void 0&&(a=n[Is]=new Set);var o=e+"__bubble";a.has(o)||(S0(n,e,2,!1),a.add(o))}function jf(e,n,a){var o=0;n&&(o|=4),S0(a,e,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[tc]){e[tc]=!0,K.forEach(function(a){a!=="selectionchange"&&(Gy.has(a)||jf(a,!1,e),jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,jf("selectionchange",!1,n))}}function S0(e,n,a,o){switch(K0(n)){case 2:var u=mS;break;case 8:u=gS;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Kf(e,n,a,o,u){var p=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var w=o.stateNode.containerInfo;if(w===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;w!==null;){if(M=Ta(w),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=p=M;continue t}w=w.parentNode}}o=o.return}Ap(function(){var rt=p,mt=hu(a),Mt=[];t:{var lt=tm.get(e);if(lt!==void 0){var ft=fl,Xt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ft=Ox;break;case"focusin":Xt="focus",ft=vu;break;case"focusout":Xt="blur",ft=vu;break;case"beforeblur":case"afterblur":ft=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Fx;break;case Kp:case Qp:case Jp:ft=Tx;break;case $p:ft=Bx;break;case"scroll":case"scrollend":ft=yx;break;case"wheel":ft=Gx;break;case"copy":case"cut":case"paste":ft=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Up;break;case"toggle":case"beforetoggle":ft=kx}var ie=(n&4)!==0,ke=!ie&&(e==="scroll"||e==="scrollend"),Q=ie?lt!==null?lt+"Capture":null:lt;ie=[];for(var q=rt,st;q!==null;){var vt=q;if(st=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||st===null||Q===null||(vt=Zr(q,Q),vt!=null&&ie.push(wo(q,vt,st))),ke)break;q=q.return}0<ie.length&&(lt=new ft(lt,Xt,null,a,mt),Mt.push({event:lt,listeners:ie}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",lt&&a!==fu&&(Xt=a.relatedTarget||a.fromElement)&&(Ta(Xt)||Xt[Ei]))break t;if((ft||lt)&&(lt=mt.window===mt?mt:(lt=mt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ft?(Xt=a.relatedTarget||a.toElement,ft=rt,Xt=Xt?Ta(Xt):null,Xt!==null&&(ke=c(Xt),ie=Xt.tag,Xt!==ke||ie!==5&&ie!==27&&ie!==6)&&(Xt=null)):(ft=null,Xt=rt),ft!==Xt)){if(ie=wp,vt="onMouseLeave",Q="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Up,vt="onPointerLeave",Q="onPointerEnter",q="pointer"),ke=ft==null?lt:os(ft),st=Xt==null?lt:os(Xt),lt=new ie(vt,q+"leave",ft,a,mt),lt.target=ke,lt.relatedTarget=st,vt=null,Ta(mt)===rt&&(ie=new ie(Q,q+"enter",Xt,a,mt),ie.target=st,ie.relatedTarget=ke,vt=ie),ke=vt,ft&&Xt)e:{for(ie=Vy,Q=ft,q=Xt,st=0,vt=Q;vt;vt=ie(vt))st++;vt=0;for(var $t=q;$t;$t=ie($t))vt++;for(;0<st-vt;)Q=ie(Q),st--;for(;0<vt-st;)q=ie(q),vt--;for(;st--;){if(Q===q||q!==null&&Q===q.alternate){ie=Q;break e}Q=ie(Q),q=ie(q)}ie=null}else ie=null;ft!==null&&M0(Mt,lt,ft,ie,!1),Xt!==null&&ke!==null&&M0(Mt,ke,Xt,ie,!0)}}t:{if(lt=rt?os(rt):window,ft=lt.nodeName&&lt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&lt.type==="file")var De=Bp;else if(Fp(lt))if(Hp)De=$x;else{De=Qx;var Qt=Kx}else ft=lt.nodeName,!ft||ft.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?rt&&bi(rt.elementType)&&(De=Bp):De=Jx;if(De&&(De=De(e,rt))){Ip(Mt,De,a,mt);break t}Qt&&Qt(e,lt,rt),e==="focusout"&&rt&&lt.type==="number"&&rt.memoizedProps.value!=null&&Tn(lt,"number",lt.value)}switch(Qt=rt?os(rt):window,e){case"focusin":(Fp(Qt)||Qt.contentEditable==="true")&&(Xs=Qt,bu=rt,io=null);break;case"focusout":io=bu=Xs=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,jp(Mt,a,mt);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":jp(Mt,a,mt)}var fe;if(yu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else ks?Pp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Lp&&a.locale!=="ko"&&(ks||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&ks&&(fe=Rp()):(Ca=mt,mu="value"in Ca?Ca.value:Ca.textContent,ks=!0)),Qt=ec(rt,Me),0<Qt.length&&(Me=new Dp(Me,e,null,a,mt),Mt.push({event:Me,listeners:Qt}),fe?Me.data=fe:(fe=zp(a),fe!==null&&(Me.data=fe)))),(fe=Wx?qx(e,a):Yx(e,a))&&(Me=ec(rt,"onBeforeInput"),0<Me.length&&(Qt=new Dp("onBeforeInput","beforeinput",null,a,mt),Mt.push({event:Qt,listeners:Me}),Qt.data=fe)),Iy(Mt,e,rt,a,mt)}y0(Mt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=Zr(e,a),u!=null&&o.unshift(wo(e,u,p)),u=Zr(e,n),u!=null&&o.push(wo(e,u,p))),e.tag===3)return o;e=e.return}return[]}function Vy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M0(e,n,a,o,u){for(var p=n._reactName,M=[];a!==null&&a!==o;){var w=a,G=w.alternate,rt=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||rt===null||(G=rt,u?(rt=Zr(a,p),rt!=null&&M.unshift(wo(a,rt,G))):u||(rt=Zr(a,p),rt!=null&&M.push(wo(a,rt,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function E0(e){return(typeof e=="string"?e:""+e).replace(ky,`
`).replace(Xy,"")}function b0(e,n){return n=E0(n),E0(e)===n}function Ve(e,n,a,o,u,p){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":Hs(e,o,p);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Zt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vx.get(a)||a,Zt(e,a,o))}}function Qf(e,n,a,o,u,p){switch(a){case"style":Hs(e,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),p=e[En]||null,p=p!=null?p[a]:null,typeof p=="function"&&e.removeEventListener(n,p,u),typeof o=="function")){typeof p!="function"&&p!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Zt(e,a,o)}}}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,p;for(p in a)if(a.hasOwnProperty(p)){var M=a[p];if(M!=null)switch(p){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,p,M,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var w=p=M=u=null,G=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":G=mt;break;case"defaultChecked":rt=mt;break;case"value":p=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,mt,a,null)}}ji(e,p,w,G,rt,M,u,!1);return;case"select":ve("invalid",e),o=M=p=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":p=w;break;case"defaultValue":M=w;break;case"multiple":o=w;default:Ve(e,n,u,w,a,null)}n=p,a=M,e.multiple=!!o,n!=null?ci(e,!!o,n,!1):a!=null&&ci(e,!!o,a,!0);return;case"textarea":ve("invalid",e),p=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(w=a[M],w!=null))switch(M){case"value":o=w;break;case"defaultValue":u=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ve(e,n,M,w,a,null)}An(e,o,u,p);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,G,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)ve(Co[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,rt,o,a,null)}return;default:if(bi(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Qf(e,n,mt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ve(e,n,w,o,a,null))}function Wy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,M=null,w=null,G=null,rt=null,mt=null;for(ft in a){var Mt=a[ft];if(a.hasOwnProperty(ft)&&Mt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=Mt;default:o.hasOwnProperty(ft)||Ve(e,n,ft,null,o,Mt)}}for(var lt in o){var ft=o[lt];if(Mt=a[lt],o.hasOwnProperty(lt)&&(ft!=null||Mt!=null))switch(lt){case"type":p=ft;break;case"name":u=ft;break;case"checked":rt=ft;break;case"defaultChecked":mt=ft;break;case"value":M=ft;break;case"defaultValue":w=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==Mt&&Ve(e,n,lt,ft,o,Mt)}}bn(e,M,w,G,rt,mt,p,u);return;case"select":ft=M=w=lt=null;for(p in a)if(G=a[p],a.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(p)||Ve(e,n,p,null,o,G)}for(u in o)if(p=o[u],G=a[u],o.hasOwnProperty(u)&&(p!=null||G!=null))switch(u){case"value":lt=p;break;case"defaultValue":w=p;break;case"multiple":M=p;default:p!==G&&Ve(e,n,u,p,o,G)}n=w,a=M,o=ft,lt!=null?ci(e,!!a,lt,!1):!!o!=!!a&&(n!=null?ci(e,!!a,n,!0):ci(e,!!a,a?[]:"",!1));return;case"textarea":ft=lt=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ve(e,n,w,null,o,u)}for(M in o)if(u=o[M],p=a[M],o.hasOwnProperty(M)&&(u!=null||p!=null))switch(M){case"value":lt=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==p&&Ve(e,n,M,u,o,p)}Fe(e,lt,ft);return;case"option":for(var Xt in a)if(lt=a[Xt],a.hasOwnProperty(Xt)&&lt!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Ve(e,n,Xt,null,o,lt)}for(G in o)if(lt=o[G],ft=a[G],o.hasOwnProperty(G)&&lt!==ft&&(lt!=null||ft!=null))switch(G){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Ve(e,n,G,lt,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)lt=a[ie],a.hasOwnProperty(ie)&&lt!=null&&!o.hasOwnProperty(ie)&&Ve(e,n,ie,null,o,lt);for(rt in o)if(lt=o[rt],ft=a[rt],o.hasOwnProperty(rt)&&lt!==ft&&(lt!=null||ft!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Ve(e,n,rt,lt,o,ft)}return;default:if(bi(n)){for(var ke in a)lt=a[ke],a.hasOwnProperty(ke)&&lt!==void 0&&!o.hasOwnProperty(ke)&&Qf(e,n,ke,void 0,o,lt);for(mt in o)lt=o[mt],ft=a[mt],!o.hasOwnProperty(mt)||lt===ft||lt===void 0&&ft===void 0||Qf(e,n,mt,lt,o,ft);return}}for(var Q in a)lt=a[Q],a.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&Ve(e,n,Q,null,o,lt);for(Mt in o)lt=o[Mt],ft=a[Mt],!o.hasOwnProperty(Mt)||lt===ft||lt==null&&ft==null||Ve(e,n,Mt,lt,o,ft)}function T0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],p=u.transferSize,M=u.initiatorType,w=u.duration;if(p&&w&&T0(M)){for(M=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],rt=G.startTime;if(rt>w)break;var mt=G.transferSize,Mt=G.initiatorType;mt&&T0(Mt)&&(G=G.responseEnd,M+=mt*(G<w?1:(w-rt)/(G-rt)))}if(--o,n+=8*(p+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function Yy(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(Ky)}:C0;function Ky(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function D0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),_r(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var p=a.firstChild;p;){var M=p.nextSibling,w=p.nodeName;p[rs]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=M}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);_r(n)}function U0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),jr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Jy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function L0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $y(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var sh=null;function N0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function O0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function P0(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);jr(e)}var _i=new Map,z0=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=H.d;H.d={f:tS,r:eS,D:nS,C:iS,L:aS,m:sS,X:oS,S:rS,M:lS};function tS(){var e=fa.f(),n=jl();return e||n}function eS(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?$m(n):fa.r(e)}var pr=typeof document>"u"?null:document;function F0(e,n,a){var o=pr;if(o&&typeof n=="string"&&n){var u=oe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),z0.has(u)||(z0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",e),D(n),o.head.appendChild(n)))}}function nS(e){fa.D(e),F0("dns-prefetch",e,null)}function iS(e,n){fa.C(e,n),F0("preconnect",e,n)}function aS(e,n,a){fa.L(e,n,a);var o=pr;if(o&&e&&n){var u='link[rel="preload"][as="'+oe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+oe(a.imageSizes)+'"]')):u+='[href="'+oe(e)+'"]';var p=u;switch(n){case"style":p=mr(e);break;case"script":p=gr(e)}_i.has(p)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(p,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(p))||n==="script"&&o.querySelector(Lo(p))||(n=o.createElement("link"),Ln(n,"link",e),D(n),o.head.appendChild(n)))}}function sS(e,n){fa.m(e,n);var a=pr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+oe(o)+'"][href="'+oe(e)+'"]',p=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=gr(e)}if(!_i.has(p)&&(e=_({rel:"modulepreload",href:e},n),_i.set(p,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(p)))return}o=a.createElement("link"),Ln(o,"link",e),D(o),a.head.appendChild(o)}}}function rS(e,n,a){fa.S(e,n,a);var o=pr;if(o&&e){var u=Ra(o).hoistableStyles,p=mr(e);n=n||"default";var M=u.get(p);if(!M){var w={loading:0,preload:null};if(M=o.querySelector(Uo(p)))w.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(p))&&rh(e,a);var G=M=o.createElement("link");D(G),Ln(G,"link",e),G._p=new Promise(function(rt,mt){G.onload=rt,G.onerror=mt}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ac(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:w},u.set(p,M)}}}function oS(e,n){fa.X(e,n);var a=pr;if(a&&e){var o=Ra(a).hoistableScripts,u=gr(e),p=o.get(u);p||(p=a.querySelector(Lo(u)),p||(e=_({src:e,async:!0},n),(n=_i.get(u))&&oh(e,n),p=a.createElement("script"),D(p),Ln(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function lS(e,n){fa.M(e,n);var a=pr;if(a&&e){var o=Ra(a).hoistableScripts,u=gr(e),p=o.get(u);p||(p=a.querySelector(Lo(u)),p||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&oh(e,n),p=a.createElement("script"),D(p),Ln(p,"link",e),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function I0(e,n,a,o){var u=(u=it.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var p=Ra(u).hoistableStyles,M=p.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,M),(p=u.querySelector(Uo(e)))&&!p._p&&(M.instance=p,M.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),p||cS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+oe(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function B0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function cS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),D(n),e.head.appendChild(n))}function gr(e){return'[src="'+oe(e)+'"]'}function Lo(e){return"script[async]"+e}function H0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+oe(a.href)+'"]');if(o)return n.instance=o,D(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),D(o),Ln(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=mr(a.href);var p=e.querySelector(Uo(u));if(p)return n.state.loading|=4,n.instance=p,D(p),p;o=B0(a),(u=_i.get(u))&&rh(o,u),p=(e.ownerDocument||e).createElement("link"),D(p);var M=p;return M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),Ln(p,"link",o),n.state.loading|=4,ac(p,a.precedence,e),n.instance=p;case"script":return p=gr(a.src),(u=e.querySelector(Lo(p)))?(n.instance=u,D(u),u):(o=a,(u=_i.get(p))&&(o=_({},a),oh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),D(u),Ln(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,p=u,M=0;M<o.length;M++){var w=o[M];if(w.dataset.precedence===n)p=w;else if(p!==u)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function G0(e,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var p=a[u];if(!(p[rs]||p[ln]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=e+M;var w=o.get(M);w?w.push(p):o.set(M,[p])}}return o}function V0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(o.href),p=n.querySelector(Uo(u));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=rc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=p,D(p);return}p=n.ownerDocument||n,o=B0(o),(u=_i.get(u))&&rh(o,u),p=p.createElement("link"),D(p);var M=p;M._p=new Promise(function(w,G){M.onload=w,M.onerror=G}),Ln(p,"link",o),a.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=rc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lh=0;function hS(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+n);0<e.imgBytes&&lh===0&&(lh=62500*qy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(dS,e),oc=null,rc.call(e))}function dS(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var M=u[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),p=a.get(M)||o,p===o&&a.set(null,u),a.set(M,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),p?p.parentNode.insertBefore(u,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var No={$$typeof:U,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function pS(e,n,a,o,u,p,M,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function X0(e,n,a,o,u,p,M,w,G,rt,mt,Mt){return e=new pS(e,n,a,M,G,rt,mt,Mt,w),n=1,p===!0&&(n|=24),p=$n(3,null,null,n),e.current=p,p.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:o,isDehydrated:a,cache:n},Xu(p),e}function W0(e){return e?(e=Ys,e):Ys}function q0(e,n,a,o,u,p){u=W0(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},p=p===void 0?null:p,p!==null&&(o.callback=p),a=Pa(e,o,n),a!==null&&(jn(a,e,n),uo(a,e,n))}function Y0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){Y0(e,n),(e=e.alternate)&&Y0(e,n)}function j0(e){if(e.tag===13||e.tag===31){var n=fs(e,67108864);n!==null&&jn(n,e,67108864),ch(e,67108864)}}function Z0(e){if(e.tag===13||e.tag===31){var n=ai();n=Wr(n);var a=fs(e,n);a!==null&&jn(a,e,n),ch(e,n)}}var cc=!0;function mS(e,n,a,o){var u=O.T;O.T=null;var p=H.p;try{H.p=2,uh(e,n,a,o)}finally{H.p=p,O.T=u}}function gS(e,n,a,o){var u=O.T;O.T=null;var p=H.p;try{H.p=8,uh(e,n,a,o)}finally{H.p=p,O.T=u}}function uh(e,n,a,o){if(cc){var u=fh(o);if(u===null)Kf(e,n,o,uc,a),Q0(e,o);else if(vS(u,e,n,a,o))o.stopPropagation();else if(Q0(e,o),n&4&&-1<_S.indexOf(e)){for(;u!==null;){var p=Aa(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=_t(p.pendingLanes);if(M!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var G=1<<31-bt(M);w.entanglements[1]|=G,M&=~G}Fi(p),(Oe&6)===0&&(ql=b()+500,Ro(0))}}break;case 31:case 13:w=fs(p,2),w!==null&&jn(w,p,2),jl(),ch(p,2)}if(p=fh(o),p===null&&Kf(e,n,o,uc,a),p===u)break;u=p}u!==null&&o.stopPropagation()}else Kf(e,n,o,null,a)}}function fh(e){return e=hu(e),hh(e)}var uc=null;function hh(e){if(uc=null,e=Ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function K0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case gt:return 2;case Tt:return 8;case ht:case Yt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var dh=!1,qa=null,Ya=null,ja=null,Oo=new Map,Po=new Map,Za=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(e,n,a,o,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&j0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function vS(e,n,a,o,u){switch(n){case"focusin":return qa=zo(qa,e,n,a,o,u),!0;case"dragenter":return Ya=zo(Ya,e,n,a,o,u),!0;case"mouseover":return ja=zo(ja,e,n,a,o,u),!0;case"pointerover":var p=u.pointerId;return Oo.set(p,zo(Oo.get(p)||null,e,n,a,o,u)),!0;case"gotpointercapture":return p=u.pointerId,Po.set(p,zo(Po.get(p)||null,e,n,a,o,u)),!0}return!1}function J0(e){var n=Ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){Z0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){Z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fu=o,a.target.dispatchEvent(o),fu=null}else return n=Aa(a),n!==null&&j0(n),e.blockedOn=a,!1;n.shift()}return!0}function $0(e,n,a){fc(e)&&a.delete(n)}function xS(){dh=!1,qa!==null&&fc(qa)&&(qa=null),Ya!==null&&fc(Ya)&&(Ya=null),ja!==null&&fc(ja)&&(ja=null),Oo.forEach($0),Po.forEach($0)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xS)))}var dc=null;function t_(e){dc!==e&&(dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hh(o||a)===null)continue;break}var p=Aa(a);p!==null&&(e.splice(n,3),n-=3,ff(p,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _r(e){function n(G){return hc(G,e)}qa!==null&&hc(qa,e),Ya!==null&&hc(Ya,e),ja!==null&&hc(ja,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)J0(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],p=a[o+1],M=u[En]||null;if(typeof p=="function")M||t_(a);else if(M){var w=null;if(p&&p.hasAttribute("formAction")){if(u=p,M=p[En]||null)w=M.formAction;else if(hh(u)!==null)continue}else w=M.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),t_(a)}}}function e_(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}pc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();q0(a,o,e,n,null,null)},pc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;q0(e.current,2,null,e,null,null),jl(),n[Ei]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=qr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&J0(e)}};var n_=t.version;if(n_!=="19.2.3")throw Error(s(527,n_,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var yS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Ct=mc.inject(yS),$=mc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=cg,p=ug,M=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=X0(e,1,!1,null,null,a,o,null,u,p,M,e_),e[Ei]=n.current,Zf(e),new ph(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",p=cg,M=ug,w=fg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=X0(e,1,!0,n,a??null,o,u,G,p,M,w,e_),n.context=W0(null),a=n.current,o=ai(),o=Wr(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,On(n,a),Fi(n),e[Ei]=n.current,Zf(e),new pc(n)},Io.version="19.2.3",Io}var h_;function DS(){if(h_)return _h.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=wS(),_h.exports}var US=DS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="182",Or={ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},LS=0,d_=1,NS=2,Vc=1,OS=2,Zo=3,ss=0,Qn=1,va=2,ya=0,Pr=1,p_=2,m_=3,g_=4,PS=5,Ds=100,zS=101,FS=102,IS=103,BS=104,HS=200,GS=201,VS=202,kS=203,ad=204,sd=205,XS=206,WS=207,qS=208,YS=209,jS=210,ZS=211,KS=212,QS=213,JS=214,rd=0,od=1,ld=2,Fr=3,cd=4,ud=5,fd=6,hd=7,Cv=0,$S=1,tM=2,Vi=0,wv=1,Dv=2,Uv=3,Lv=4,Nv=5,Ov=6,Pv=7,zv=300,Os=301,Ir=302,dd=303,pd=304,iu=306,md=1e3,xa=1001,gd=1002,Nn=1003,eM=1004,gc=1005,In=1006,Sh=1007,Ls=1008,oi=1009,Fv=1010,Iv=1011,Jo=1012,op=1013,Wi=1014,Hi=1015,Ma=1016,lp=1017,cp=1018,$o=1020,Bv=35902,Hv=35899,Gv=1021,Vv=1022,Li=1023,Ea=1026,Ns=1027,kv=1028,up=1029,Br=1030,fp=1031,hp=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,_d=35840,vd=35841,xd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,bd=37488,Td=37489,Ad=37490,Rd=37491,Cd=37808,wd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,zd=37816,Fd=37817,Id=37818,Bd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,Yd=36285,jd=36286,nM=3200,Xv=0,iM=1,is="",xi="srgb",Hr="srgb-linear",Kc="linear",He="srgb",vr=7680,__=519,aM=512,sM=513,rM=514,dp=515,oM=516,lM=517,pp=518,cM=519,v_=35044,x_="300 es",Gi=2e3,Qc=2001;function Wv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Jc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uM(){const r=Jc("canvas");return r.style.display="block",r}const y_={};function S_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ae(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ce(...r){const t="THREE."+r.shift();console.error(t,...r)}function tl(...r){const t=r.join(" ");t in y_||(y_[t]=!0,ae(...r))}function fM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Zd=180/Math.PI;function nl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function hM(r,t){return(r%t+t)%t}function Mh(r,t,i){return(1-i)*r+i*t}function Bo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const dM={DEG2RAD:Yc};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ba{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],d=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){t[i+0]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_;return}if(h>=1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==x||d!==S||g!==E){let y=m*x+d*S+g*E+_*T;y<0&&(x=-x,S=-S,E=-E,T=-T,y=-y);let v=1-h;if(y<.9995){const C=Math.acos(y),U=Math.sin(C);v=Math.sin(v*C)/U,h=Math.sin(h*C)/U,m=m*v+x*h,d=d*v+S*h,g=g*v+E*h,_=_*v+T*h}else{m=m*v+x*h,d=d*v+S*h,g=g*v+E*h,_=_*v+T*h;const C=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=C,d*=C,g*=C,_*=C}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],d=s[l+2],g=s[l+3],_=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*_+m*S-d*x,t[i+1]=m*E+g*x+d*_-h*S,t[i+2]=d*E+g*S+h*x-m*_,t[i+3]=g*E-h*_-m*x-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,d=h(s/2),g=h(l/2),_=h(c/2),x=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+d*S*E,this._y=d*S*_-x*g*E,this._z=d*g*E+x*S*_,this._w=d*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+d*S*E,this._y=d*S*_-x*g*E,this._z=d*g*E-x*S*_,this._w=d*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-d*S*E,this._y=d*S*_+x*g*E,this._z=d*g*E+x*S*_,this._w=d*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-d*S*E,this._y=d*S*_+x*g*E,this._z=d*g*E-x*S*_,this._w=d*g*_+x*S*E;break;case"YZX":this._x=x*g*_+d*S*E,this._y=d*S*_+x*g*E,this._z=d*g*E-x*S*_,this._w=d*g*_-x*S*E;break;case"XZY":this._x=x*g*_-d*S*E,this._y=d*S*_-x*g*E,this._z=d*g*E+x*S*_,this._w=d*g*_+x*S*E;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],d=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-d)*S,this._z=(f-l)*S}else if(s>h&&s>_){const S=2*Math.sqrt(1+s-h-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+d)/S}else if(h>_){const S=2*Math.sqrt(1+h-s-_);this._w=(c-d)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-h);this._w=(f-l)/S,this._x=(c+d)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,d=i._z,g=i._w;return this._x=s*g+f*h+l*d-c*m,this._y=l*g+f*m+c*h-s*d,this._z=c*g+f*d+s*m-l*h,this._w=f*g-s*h-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,i=Math.sin(i*d)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,i=0,s=0){B.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(M_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(M_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,d=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*d+f*_-h*g,this.y=s+m*g+h*d-c*_,this.z=l+m*_+c*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Eh.copy(this).projectOnVector(t),this.sub(Eh)}reflect(t){return this.sub(Eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new B,M_=new ba;class he{constructor(t,i,s,l,c,f,h,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,d)}set(t,i,s,l,c,f,h,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],d=s[1],g=s[4],_=s[7],x=s[2],S=s[5],E=s[8],T=l[0],y=l[3],v=l[6],C=l[1],U=l[4],R=l[7],N=l[2],z=l[5],P=l[8];return c[0]=f*T+h*C+m*N,c[3]=f*y+h*U+m*z,c[6]=f*v+h*R+m*P,c[1]=d*T+g*C+_*N,c[4]=d*y+g*U+_*z,c[7]=d*v+g*R+_*P,c[2]=x*T+S*C+E*N,c[5]=x*y+S*U+E*z,c[8]=x*v+S*R+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return i*f*g-i*h*d-s*c*g+s*h*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=g*f-h*d,x=h*m-g*c,S=d*c-f*m,E=i*_+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*d-g*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=S*T,t[7]=(s*m-d*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*h)+f+t,-l*d,l*m,-l*(-d*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(bh.makeScale(t,i)),this}rotate(t){return this.premultiply(bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new he,E_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pM(){const r={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=zr(l.r),l.g=zr(l.g),l.b=zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Hr]:{primaries:t,whitePoint:s,transfer:Kc,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const we=pM();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class mM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=Jc("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Jc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gM=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Th(l[f].image)):c.push(Th(l[f]))}else c=Th(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Th(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let _M=0;const Ah=new B;class Gn extends Ps{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=xa,l=xa,c=In,f=Ls,h=Li,m=oi,d=Gn.DEFAULT_ANISOTROPY,g=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=nl(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=zv;Gn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],g=m[4],_=m[8],x=m[1],S=m[5],E=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(d+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(d+1)/2,R=(S+1)/2,N=(v+1)/2,z=(g+x)/4,P=(_+T)/4,X=(E+y)/4;return U>R&&U>N?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=z/s,c=P/s):R>N?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=z/l,c=X/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=P/c,l=X/c),this.set(s,l,c,i),this}let C=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(C)<.001&&(C=1),this.x=(y-E)/C,this.y=(_-T)/C,this.z=(x-g)/C,this.w=Math.acos((d+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vM extends Ps{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new mp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends vM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class qv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new B(1/0,1/0,1/0),i=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),vc.subVectors(this.max,Ho),yr.subVectors(t.a,Ho),Sr.subVectors(t.b,Ho),Mr.subVectors(t.c,Ho),Qa.subVectors(Sr,yr),Ja.subVectors(Mr,Sr),bs.subVectors(yr,Mr);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-bs.z,bs.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,bs.z,0,-bs.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-bs.y,bs.x,0];return!Rh(i,yr,Sr,Mr,vc)||(i=[1,0,0,0,1,0,0,0,1],!Rh(i,yr,Sr,Mr,vc))?!1:(xc.crossVectors(Qa,Ja),i=[xc.x,xc.y,xc.z],Rh(i,yr,Sr,Mr,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new B,new B,new B,new B,new B,new B,new B,new B],Ci=new B,_c=new il,yr=new B,Sr=new B,Mr=new B,Qa=new B,Ja=new B,bs=new B,Ho=new B,vc=new B,xc=new B,Ts=new B;function Rh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ts.fromArray(r,c);const h=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=t.dot(Ts),d=i.dot(Ts),g=s.dot(Ts);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const yM=new il,Go=new B,Ch=new B;class au{constructor(t=new B,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):yM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(Ch)),this.expandByPoint(Go.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const da=new B,wh=new B,yc=new B,$a=new B,Dh=new B,Sc=new B,Uh=new B;class su{constructor(t=new B,i=new B(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=da.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wh.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(wh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(yc),h=$a.dot(this.direction),m=-$a.dot(yc),d=$a.lengthSq(),g=Math.abs(1-f*f);let _,x,S,E;if(g>0)if(_=f*m-h,x=f*h-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,S=_*(_+f*x+2*h)+x*(f*_+x+2*m)+d}else x=c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+d;else x=-c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+d;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+d):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+d):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+d);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),S=-_*_+x*(x+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(wh).addScaledVector(yc,x),S}intersectSphere(t,i){da.subVectors(t.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(s=(t.min.x-x.x)*d,l=(t.max.x-x.x)*d):(s=(t.max.x-x.x)*d,l=(t.min.x-x.x)*d),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,i,s,l,c){Dh.subVectors(i,t),Sc.subVectors(s,t),Uh.crossVectors(Dh,Sc);let f=this.direction.dot(Uh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,t);const m=h*this.direction.dot(Sc.crossVectors($a,Sc));if(m<0)return null;const d=h*this.direction.dot(Dh.cross($a));if(d<0||m+d>f)return null;const g=-h*$a.dot(Uh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,s,l,c,f,h,m,d,g,_,x,S,E,T,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,d,g,_,x,S,E,T,y)}set(t,i,s,l,c,f,h,m,d,g,_,x,S,E,T,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=d,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),f=1/Er.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,S=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=S+E*d,i[5]=x-T*d,i[9]=-h*m,i[2]=T-x*d,i[6]=E+S*d,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,S=m*_,E=d*g,T=d*_;i[0]=x+T*h,i[4]=E*h-S,i[8]=f*d,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,S=m*_,E=d*g,T=d*_;i[0]=x-T*h,i[4]=-f*_,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-x*h,i[2]=-f*d,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,S=f*_,E=h*g,T=h*_;i[0]=m*g,i[4]=E*d-S,i[8]=x*d+T,i[1]=m*_,i[5]=T*d+x,i[9]=S*d-E,i[2]=-d,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*d,E=h*m,T=h*d;i[0]=m*g,i[4]=T-x*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-d*g,i[6]=S*_+E,i[10]=x-T*_}else if(t.order==="XZY"){const x=f*m,S=f*d,E=h*m,T=h*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=x*_+T,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=h*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SM,t,MM)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ts.crossVectors(s,si),ts.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ts.crossVectors(s,si)),ts.normalize(),Mc.crossVectors(si,ts),l[0]=ts.x,l[4]=Mc.x,l[8]=si.x,l[1]=ts.y,l[5]=Mc.y,l[9]=si.y,l[2]=ts.z,l[6]=Mc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],d=s[12],g=s[1],_=s[5],x=s[9],S=s[13],E=s[2],T=s[6],y=s[10],v=s[14],C=s[3],U=s[7],R=s[11],N=s[15],z=l[0],P=l[4],X=l[8],A=l[12],L=l[1],V=l[5],Y=l[9],Z=l[13],at=l[2],tt=l[6],O=l[10],H=l[14],et=l[3],yt=l[7],xt=l[11],F=l[15];return c[0]=f*z+h*L+m*at+d*et,c[4]=f*P+h*V+m*tt+d*yt,c[8]=f*X+h*Y+m*O+d*xt,c[12]=f*A+h*Z+m*H+d*F,c[1]=g*z+_*L+x*at+S*et,c[5]=g*P+_*V+x*tt+S*yt,c[9]=g*X+_*Y+x*O+S*xt,c[13]=g*A+_*Z+x*H+S*F,c[2]=E*z+T*L+y*at+v*et,c[6]=E*P+T*V+y*tt+v*yt,c[10]=E*X+T*Y+y*O+v*xt,c[14]=E*A+T*Z+y*H+v*F,c[3]=C*z+U*L+R*at+N*et,c[7]=C*P+U*V+R*tt+N*yt,c[11]=C*X+U*Y+R*O+N*xt,c[15]=C*A+U*Z+R*H+N*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],d=t[13],g=t[2],_=t[6],x=t[10],S=t[14],E=t[3],T=t[7],y=t[11],v=t[15],C=m*S-d*x,U=h*S-d*_,R=h*x-m*_,N=f*S-d*g,z=f*x-m*g,P=f*_-h*g;return i*(T*C-y*U+v*R)-s*(E*C-y*N+v*z)+l*(E*U-T*N+v*P)-c*(E*R-T*z+y*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=t[9],x=t[10],S=t[11],E=t[12],T=t[13],y=t[14],v=t[15],C=_*y*d-T*x*d+T*m*S-h*y*S-_*m*v+h*x*v,U=E*x*d-g*y*d-E*m*S+f*y*S+g*m*v-f*x*v,R=g*T*d-E*_*d+E*h*S-f*T*S-g*h*v+f*_*v,N=E*_*m-g*T*m-E*h*x+f*T*x+g*h*y-f*_*y,z=i*C+s*U+l*R+c*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=C*P,t[1]=(T*x*c-_*y*c-T*l*S+s*y*S+_*l*v-s*x*v)*P,t[2]=(h*y*c-T*m*c+T*l*d-s*y*d-h*l*v+s*m*v)*P,t[3]=(_*m*c-h*x*c-_*l*d+s*x*d+h*l*S-s*m*S)*P,t[4]=U*P,t[5]=(g*y*c-E*x*c+E*l*S-i*y*S-g*l*v+i*x*v)*P,t[6]=(E*m*c-f*y*c-E*l*d+i*y*d+f*l*v-i*m*v)*P,t[7]=(f*x*c-g*m*c+g*l*d-i*x*d-f*l*S+i*m*S)*P,t[8]=R*P,t[9]=(E*_*c-g*T*c-E*s*S+i*T*S+g*s*v-i*_*v)*P,t[10]=(f*T*c-E*h*c+E*s*d-i*T*d-f*s*v+i*h*v)*P,t[11]=(g*h*c-f*_*c-g*s*d+i*_*d+f*s*S-i*h*S)*P,t[12]=N*P,t[13]=(g*T*l-E*_*l+E*s*x-i*T*x-g*s*y+i*_*y)*P,t[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*y-i*h*y)*P,t[15]=(f*_*l-g*h*l+g*s*m-i*_*m-f*s*x+i*h*x)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,d=c*f,g=c*h;return this.set(d*f+s,d*h-l*m,d*m+l*h,0,d*h+l*m,g*h+s,g*m-l*f,0,d*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,d=c+c,g=f+f,_=h+h,x=c*d,S=c*g,E=c*_,T=f*g,y=f*_,v=h*_,C=m*d,U=m*g,R=m*_,N=s.x,z=s.y,P=s.z;return l[0]=(1-(T+v))*N,l[1]=(S+R)*N,l[2]=(E-U)*N,l[3]=0,l[4]=(S-R)*z,l[5]=(1-(x+v))*z,l[6]=(y+C)*z,l[7]=0,l[8]=(E+U)*P,l[9]=(y-C)*P,l[10]=(1-(x+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Er.set(l[0],l[1],l[2]).length();const f=Er.set(l[4],l[5],l[6]).length(),h=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const d=1/c,g=1/f,_=1/h;return wi.elements[0]*=d,wi.elements[1]*=d,wi.elements[2]*=d,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Gi,m=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===Qc)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Gi,m=!1){const d=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Gi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===Qc)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=_,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Er=new B,wi=new Qe,SM=new B(0,0,0),MM=new B(1,1,1),ts=new B,Mc=new B,si=new B,T_=new Qe,A_=new ba;class qi{constructor(t=0,i=0,s=0,l=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],d=l[5],g=l[9],_=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return T_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(T_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let EM=0;const R_=new B,br=new ba,pa=new Qe,Ec=new B,Vo=new B,bM=new B,TM=new ba,C_=new B(1,0,0),w_=new B(0,1,0),D_=new B(0,0,1),U_={type:"added"},AM={type:"removed"},Tr={type:"childadded",child:null},Lh={type:"childremoved",child:null};class Mn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new B,i=new qi,s=new ba,l=new B(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new he}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(C_,t)}rotateY(t){return this.rotateOnAxis(w_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(C_,t)}translateY(t){return this.translateOnAxis(w_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ec.copy(t):Ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Vo,Ec,this.up):pa.lookAt(Ec,Vo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),br.setFromRotationMatrix(pa),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(AM),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,bM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,TM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new B(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new B,ma=new B,Nh=new B,ga=new B,Ar=new B,Rr=new B,L_=new B,Oh=new B,Ph=new B,zh=new B,Fh=new sn,Ih=new sn,Bh=new sn;class Ui{constructor(t=new B,i=new B,s=new B){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),ma.subVectors(s,i),Nh.subVectors(t,i);const f=Di.dot(Di),h=Di.dot(ma),m=Di.dot(Nh),d=ma.dot(ma),g=ma.dot(Nh),_=f*d-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(d*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(f,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Fh.setScalar(0),Ih.setScalar(0),Bh.setScalar(0),Fh.fromBufferAttribute(t,i),Ih.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Fh,c.x),f.addScaledVector(Ih,c.y),f.addScaledVector(Bh,c.z),f}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),ma.subVectors(t,i),Di.cross(ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Di.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Ar.subVectors(l,s),Rr.subVectors(c,s),Oh.subVectors(t,s);const m=Ar.dot(Oh),d=Rr.dot(Oh);if(m<=0&&d<=0)return i.copy(s);Ph.subVectors(t,l);const g=Ar.dot(Ph),_=Rr.dot(Ph);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*d;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ar,f);zh.subVectors(t,c);const S=Ar.dot(zh),E=Rr.dot(zh);if(E>=0&&S<=E)return i.copy(c);const T=S*d-m*E;if(T<=0&&d>=0&&E<=0)return h=d/(d-E),i.copy(s).addScaledVector(Rr,h);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return L_.subVectors(c,l),h=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(L_,h);const v=1/(y+T+x);return f=T*v,h=x*v,i.copy(s).addScaledVector(Ar,f).addScaledVector(Rr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Hh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=hM(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Hh(f,c,t+1/3),this.g=Hh(f,c,t),this.b=Hh(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=Yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return we.workingToColorSpace(Fn.copy(this),t),Math.round(xe(Fn.r*255,0,255))*65536+Math.round(xe(Fn.g*255,0,255))*256+Math.round(xe(Fn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,d;const g=(h+f)/2;if(h===f)m=0,d=0;else{const _=f-h;switch(d=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=xi){we.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+i,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(es),t.getHSL(bc);const s=Mh(es.h,bc.h,i),l=Mh(es.s,bc.s,i),c=Mh(es.l,bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new be;be.NAMES=Yv;let RM=0;class Vr extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Pr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=sd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=__,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ad&&(s.blendSrc=this.blendSrc),this.blendDst!==sd&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==__&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ru extends Vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new B,Tc=new le;let CM=0;class Xi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=v_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==v_&&(t.usage=this.usage),t}}class jv extends Xi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Zv extends Xi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class en extends Xi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let wM=0;const vi=new Qe,Gh=new Mn,Cr=new B,ri=new il,ko=new il,Sn=new B;class Vn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wv(t)?Zv:jv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return Gh.lookAt(t),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new en(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ri.min,ko.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,ko.max),ri.expandByPoint(Sn)):(ri.expandByPoint(ko.min),ri.expandByPoint(ko.max))}ri.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Sn.fromBufferAttribute(h,d),m&&(Cr.fromBufferAttribute(t,d),Sn.add(Cr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<s.count;X++)h[X]=new B,m[X]=new B;const d=new B,g=new B,_=new B,x=new le,S=new le,E=new le,T=new B,y=new B;function v(X,A,L){d.fromBufferAttribute(s,X),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,L),x.fromBufferAttribute(c,X),S.fromBufferAttribute(c,A),E.fromBufferAttribute(c,L),g.sub(d),_.sub(d),S.sub(x),E.sub(x);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(V),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),h[X].add(T),h[A].add(T),h[L].add(T),m[X].add(y),m[A].add(y),m[L].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let X=0,A=C.length;X<A;++X){const L=C[X],V=L.start,Y=L.count;for(let Z=V,at=V+Y;Z<at;Z+=3)v(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const U=new B,R=new B,N=new B,z=new B;function P(X){N.fromBufferAttribute(l,X),z.copy(N);const A=h[X];U.copy(A),U.sub(N.multiplyScalar(N.dot(A))).normalize(),R.crossVectors(z,A);const V=R.dot(m[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,V)}for(let X=0,A=C.length;X<A;++X){const L=C[X],V=L.start,Y=L.count;for(let Z=V,at=V+Y;Z<at;Z+=3)P(t.getX(Z+0)),P(t.getX(Z+1)),P(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new B,c=new B,f=new B,h=new B,m=new B,d=new B,g=new B,_=new B;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),T=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),d.fromBufferAttribute(s,y),h.add(g),m.add(g),d.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,_=h.normalized,x=new d.constructor(m.length*g);let S=0,E=0;for(let T=0,y=m.length;T<y;T++){h.isInterleavedBufferAttribute?S=m[T]*h.data.stride+h.offset:S=m[T]*g;for(let v=0;v<g;v++)x[E++]=d[S++]}return new Xi(x,g,_)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Vn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],d=t(m,s);i.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const x=d[g],S=t(x,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const d=f[h];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,x=d.length;_<x;_++){const S=d[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new Qe,As=new su,Ac=new au,O_=new B,Rc=new B,Cc=new B,wc=new B,Vh=new B,Dc=new B,P_=new B,Uc=new B;class Si extends Mn{constructor(t=new Vn,i=new ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(Vh.fromBufferAttribute(_,t),f?Dc.addScaledVector(Vh,g):Dc.addScaledVector(Vh.sub(i),g))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(c),As.copy(t.ray).recast(t.near),!(Ac.containsPoint(As.origin)===!1&&(As.intersectSphere(Ac,O_)===null||As.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(N_.copy(c).invert(),As.copy(t.ray).applyMatrix4(N_),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,As)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=f[y.materialIndex],C=Math.max(y.start,S.start),U=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=C,N=U;R<N;R+=3){const z=h.getX(R),P=h.getX(R+1),X=h.getX(R+2);l=Lc(this,v,t,s,d,g,_,z,P,X),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const C=h.getX(y),U=h.getX(y+1),R=h.getX(y+2);l=Lc(this,f,t,s,d,g,_,C,U,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=f[y.materialIndex],C=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let R=C,N=U;R<N;R+=3){const z=R,P=R+1,X=R+2;l=Lc(this,v,t,s,d,g,_,z,P,X),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const C=y,U=y+1,R=y+2;l=Lc(this,f,t,s,d,g,_,C,U,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function DM(r,t,i,s,l,c,f,h){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===ss,h),m===null)return null;Uc.copy(h),Uc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Uc);return d<i.near||d>i.far?null:{distance:d,point:Uc.clone(),object:r}}function Lc(r,t,i,s,l,c,f,h,m,d){r.getVertexPosition(h,Rc),r.getVertexPosition(m,Cc),r.getVertexPosition(d,wc);const g=DM(r,t,i,s,Rc,Cc,wc,P_);if(g){const _=new B;Ui.getBarycoord(P_,Rc,Cc,wc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,m,d,_,new le)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,h,m,d,_,new le)),f&&(g.normal=Ui.getInterpolatedAttribute(f,h,m,d,_,new B),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:d,normal:new B,materialIndex:0};Ui.getNormal(Rc,Cc,wc,x.normal),g.face=x,g.barycoord=_}return g}class al extends Vn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new en(d,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(_,2));function E(T,y,v,C,U,R,N,z,P,X,A){const L=R/P,V=N/X,Y=R/2,Z=N/2,at=z/2,tt=P+1,O=X+1;let H=0,et=0;const yt=new B;for(let xt=0;xt<O;xt++){const F=xt*V-Z;for(let J=0;J<tt;J++){const dt=J*L-Y;yt[T]=dt*C,yt[y]=F*U,yt[v]=at,d.push(yt.x,yt.y,yt.z),yt[T]=0,yt[y]=0,yt[v]=z>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(J/P),_.push(1-xt/X),H+=1}}for(let xt=0;xt<X;xt++)for(let F=0;F<P;F++){const J=x+F+tt*xt,dt=x+F+tt*(xt+1),Dt=x+(F+1)+tt*(xt+1),Pt=x+(F+1)+tt*xt;m.push(J,dt,Pt),m.push(dt,Dt,Pt),et+=6}h.addGroup(S,et,A),S+=et,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Gr(r[i]);for(const l in s)t[l]=s[l]}return t}function UM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Kv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const LM={clone:Gr,merge:Hn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=UM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Qv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new B,z_=new le,F_=new le;class yi extends Qv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,z_,F_),i.subVectors(F_,z_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const wr=-90,Dr=1;class PM extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(wr,Dr,t,i);l.layers=this.layers,this.add(l);const c=new yi(wr,Dr,t,i);c.layers=this.layers,this.add(c);const f=new yi(wr,Dr,t,i);f.layers=this.layers,this.add(f);const h=new yi(wr,Dr,t,i);h.layers=this.layers,this.add(h);const m=new yi(wr,Dr,t,i);m.layers=this.layers,this.add(m);const d=new yi(wr,Dr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const d of i)this.remove(d);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,d,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,d),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Jv extends Gn{constructor(t=[],i=Os,s,l,c,f,h,m,d,g){super(t,i,s,l,c,f,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $v extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Jv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Gr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:ya});c.uniforms.tEquirect.value=i;const f=new Si(l,c),h=i.minFilter;return i.minFilter===Ls&&(i.minFilter=In),new PM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Nc extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zM={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),v=this._getHandJoint(d,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;d.inputState.pinching&&x>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&x<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Nc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class FM extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class IM extends Gn{constructor(t=null,i=1,s=1,l,c,f,h,m,d=Nn,g=Nn,_,x){super(null,f,h,m,d,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new B,BM=new B,HM=new he;class _a{constructor(t=new B(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Xh.subVectors(s,i).cross(BM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Xh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||HM.getNormalMatrix(t),l=this.coplanarPoint(Xh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new au,GM=new le(.5,.5),Oc=new B;class _p{constructor(t=new _a,i=new _a,s=new _a,l=new _a,c=new _a,f=new _a){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],x=c[6],S=c[7],E=c[8],T=c[9],y=c[10],v=c[11],C=c[12],U=c[13],R=c[14],N=c[15];if(l[0].setComponents(d-f,S-g,v-E,N-C).normalize(),l[1].setComponents(d+f,S+g,v+E,N+C).normalize(),l[2].setComponents(d+h,S+_,v+T,N+U).normalize(),l[3].setComponents(d-h,S-_,v-T,N-U).normalize(),s)l[4].setComponents(m,x,y,R).normalize(),l[5].setComponents(d-m,S-x,v-y,N-R).normalize();else if(l[4].setComponents(d-m,S-x,v-y,N-R).normalize(),i===Gi)l[5].setComponents(d+m,S+x,v+y,N+R).normalize();else if(i===Qc)l[5].setComponents(m,x,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const i=GM.distanceTo(t.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vp extends Vr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $c=new B,tu=new B,I_=new Qe,Xo=new su,Pc=new au,Wh=new B,B_=new B;class tx extends Mn{constructor(t=new Vn,i=new vp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)$c.fromBufferAttribute(i,l-1),tu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=$c.distanceTo(tu);t.setAttribute("lineDistance",new en(s,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;I_.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(I_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=S,y=E-1;T<y;T+=d){const v=g.getX(T),C=g.getX(T+1),U=zc(this,t,Xo,m,v,C,T);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(E-1),y=g.getX(S),v=zc(this,t,Xo,m,T,y,E-1);v&&i.push(v)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=S,y=E-1;T<y;T+=d){const v=zc(this,t,Xo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=zc(this,t,Xo,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if($c.fromBufferAttribute(h,l),tu.fromBufferAttribute(h,c),i.distanceSqToSegment($c,tu,Wh,B_)>s)return;Wh.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Wh);if(!(d<t.near||d>t.far))return{distance:d,point:B_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const H_=new B,G_=new B;class VM extends tx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)H_.fromBufferAttribute(i,l),G_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+H_.distanceTo(G_);t.setAttribute("lineDistance",new en(s,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class el extends Gn{constructor(t,i,s=Wi,l,c,f,h=Nn,m=Nn,d,g=Ea,_=1){if(g!==Ea&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,h,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kM extends el{constructor(t,i=Wi,s=Os,l,c,f=Nn,h=Nn,m,d=Ea){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ex extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xp extends Vn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],S=[];let E=0;const T=[],y=s/2;let v=0;C(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(S,2));function C(){const R=new B,N=new B;let z=0;const P=(i-t)/s;for(let X=0;X<=c;X++){const A=[],L=X/c,V=L*(i-t)+t;for(let Y=0;Y<=l;Y++){const Z=Y/l,at=Z*m+h,tt=Math.sin(at),O=Math.cos(at);N.x=V*tt,N.y=-L*s+y,N.z=V*O,_.push(N.x,N.y,N.z),R.set(tt,P,O).normalize(),x.push(R.x,R.y,R.z),S.push(Z,1-L),A.push(E++)}T.push(A)}for(let X=0;X<l;X++)for(let A=0;A<c;A++){const L=T[A][X],V=T[A+1][X],Y=T[A+1][X+1],Z=T[A][X+1];(t>0||A!==0)&&(g.push(L,V,Z),z+=3),(i>0||A!==c-1)&&(g.push(V,Y,Z),z+=3)}d.addGroup(v,z,0),v+=z}function U(R){const N=E,z=new le,P=new B;let X=0;const A=R===!0?t:i,L=R===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,y*L,0),x.push(0,L,0),S.push(.5,.5),E++;const V=E;for(let Y=0;Y<=l;Y++){const at=Y/l*m+h,tt=Math.cos(at),O=Math.sin(at);P.x=A*O,P.y=y*L,P.z=A*tt,_.push(P.x,P.y,P.z),x.push(0,L,0),z.x=tt*.5+.5,z.y=O*.5*L+.5,S.push(z.x,z.y),E++}for(let Y=0;Y<l;Y++){const Z=N+Y,at=V+Y;R===!0?g.push(at,at+1,Z):g.push(at+1,at,Z),X+=3}d.addGroup(v,X,R===!0?1:2),v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yp extends xp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new yp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends Vn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),d=h+1,g=m+1,_=t/h,x=i/m,S=[],E=[],T=[],y=[];for(let v=0;v<g;v++){const C=v*x-f;for(let U=0;U<d;U++){const R=U*_-c;E.push(R,-C,0),T.push(0,0,1),y.push(U/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<h;C++){const U=C+d*v,R=C+d*(v+1),N=C+1+d*(v+1),z=C+1+d*v;S.push(U,R,z),S.push(R,N,z)}this.setIndex(S),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sp extends Vn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let d=0;const g=[],_=new B,x=new B,S=[],E=[],T=[],y=[];for(let v=0;v<=s;v++){const C=[],U=v/s;let R=0;v===0&&f===0?R=.5/i:v===s&&m===Math.PI&&(R=-.5/i);for(let N=0;N<=i;N++){const z=N/i;_.x=-t*Math.cos(l+z*c)*Math.sin(f+U*h),_.y=t*Math.cos(f+U*h),_.z=t*Math.sin(l+z*c)*Math.sin(f+U*h),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),y.push(z+R,1-U),C.push(d++)}g.push(C)}for(let v=0;v<s;v++)for(let C=0;C<i;C++){const U=g[v][C+1],R=g[v][C],N=g[v+1][C],z=g[v+1][C+1];(v!==0||f>0)&&S.push(U,R,z),(v!==s-1||m<Math.PI)&&S.push(R,N,z)}this.setIndex(S),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eu extends Vn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],d=[],g=new B,_=new B,x=new B;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const T=E/l*c,y=S/s*Math.PI*2;_.x=(t+i*Math.cos(y))*Math.cos(T),_.y=(t+i*Math.cos(y))*Math.sin(T),_.z=i*Math.sin(y),h.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),x.subVectors(_,g).normalize(),m.push(x.x,x.y,x.z),d.push(E/l),d.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const T=(l+1)*S+E-1,y=(l+1)*(S-1)+E-1,v=(l+1)*(S-1)+E,C=(l+1)*S+E;f.push(T,y,C),f.push(y,v,C)}this.setIndex(f),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(m,3)),this.setAttribute("uv",new en(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class XM extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WM extends Vr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xv,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qM extends Vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YM extends Vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nx extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new Qe,V_=new B,k_=new B;class jM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;V_.setFromMatrixPosition(t.matrixWorld),i.position.copy(V_),k_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(k_),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mp extends Qv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZM extends jM{constructor(){super(new Mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X_ extends nx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new ZM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class KM extends nx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class QM extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const W_=new Qe;class ix{constructor(t,i,s=0,l=1/0){this.ray=new su(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new gp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ce("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return W_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(W_),this}intersectObject(t,i=!0,s=[]){return Kd(t,this,s,i),s.sort(q_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Kd(t[l],this,s,i);return s.sort(q_),s}}function q_(r,t){return r.distance-t.distance}function Kd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Kd(c[f],t,i,!0)}}class Y_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class JM extends VM{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,f=t/i,h=t/2,m=[],d=[];for(let x=0,S=0,E=-h;x<=i;x++,E+=f){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const T=x===c?s:l;T.toArray(d,S),S+=3,T.toArray(d,S),S+=3,T.toArray(d,S),S+=3,T.toArray(d,S),S+=3}const g=new Vn;g.setAttribute("position",new en(m,3)),g.setAttribute("color",new en(d,3));const _=new vp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const j_=new B;let Fc,Yh;class jh extends Mn{constructor(t=new B(0,0,1),i=new B(0,0,0),s=1,l=16776960,c=s*.2,f=c*.2){super(),this.type="ArrowHelper",Fc===void 0&&(Fc=new Vn,Fc.setAttribute("position",new en([0,0,0,0,1,0],3)),Yh=new yp(.5,1,5,1),Yh.translate(0,-.5,0)),this.position.copy(i),this.line=new tx(Fc,new vp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Si(Yh,new ru({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,f)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{j_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(j_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $M extends Ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Z_(r,t,i,s){const l=tE(s);switch(i){case Gv:return r*t;case kv:return r*t/l.components*l.byteLength;case up:return r*t/l.components*l.byteLength;case Br:return r*t*2/l.components*l.byteLength;case fp:return r*t*2/l.components*l.byteLength;case Vv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case hp:return r*t*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:case yd:return Math.max(r,16)*Math.max(t,8)/4;case _d:case xd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case Md:case bd:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ed:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tE(r){switch(r){case oi:case Fv:return{byteLength:1,components:1};case Jo:case Iv:case Ma:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Wi:case op:case Hi:return{byteLength:4,components:1};case Bv:case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ax(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function eE(r){const t=new WeakMap;function i(h,m){const d=h.array,g=h.usage,_=d.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,d,g),h.onUploadCallback();let S;if(d instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=r.SHORT;else if(d instanceof Uint32Array)S=r.UNSIGNED_INT;else if(d instanceof Int32Array)S=r.INT;else if(d instanceof Int8Array)S=r.BYTE;else if(d instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,d){const g=m.array,_=m.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];r.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,i(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,m),d.version=h.version}}return{get:l,remove:c,update:f}}var nE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Db=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:nE,alphahash_pars_fragment:iE,alphamap_fragment:aE,alphamap_pars_fragment:sE,alphatest_fragment:rE,alphatest_pars_fragment:oE,aomap_fragment:lE,aomap_pars_fragment:cE,batching_pars_vertex:uE,batching_vertex:fE,begin_vertex:hE,beginnormal_vertex:dE,bsdfs:pE,iridescence_fragment:mE,bumpmap_pars_fragment:gE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:vE,clipping_planes_pars_vertex:xE,clipping_planes_vertex:yE,color_fragment:SE,color_pars_fragment:ME,color_pars_vertex:EE,color_vertex:bE,common:TE,cube_uv_reflection_fragment:AE,defaultnormal_vertex:RE,displacementmap_pars_vertex:CE,displacementmap_vertex:wE,emissivemap_fragment:DE,emissivemap_pars_fragment:UE,colorspace_fragment:LE,colorspace_pars_fragment:NE,envmap_fragment:OE,envmap_common_pars_fragment:PE,envmap_pars_fragment:zE,envmap_pars_vertex:FE,envmap_physical_pars_fragment:jE,envmap_vertex:IE,fog_vertex:BE,fog_pars_vertex:HE,fog_fragment:GE,fog_pars_fragment:VE,gradientmap_pars_fragment:kE,lightmap_pars_fragment:XE,lights_lambert_fragment:WE,lights_lambert_pars_fragment:qE,lights_pars_begin:YE,lights_toon_fragment:ZE,lights_toon_pars_fragment:KE,lights_phong_fragment:QE,lights_phong_pars_fragment:JE,lights_physical_fragment:$E,lights_physical_pars_fragment:tb,lights_fragment_begin:eb,lights_fragment_maps:nb,lights_fragment_end:ib,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:sb,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:ob,map_fragment:lb,map_pars_fragment:cb,map_particle_fragment:ub,map_particle_pars_fragment:fb,metalnessmap_fragment:hb,metalnessmap_pars_fragment:db,morphinstance_vertex:pb,morphcolor_vertex:mb,morphnormal_vertex:gb,morphtarget_pars_vertex:_b,morphtarget_vertex:vb,normal_fragment_begin:xb,normal_fragment_maps:yb,normal_pars_fragment:Sb,normal_pars_vertex:Mb,normal_vertex:Eb,normalmap_pars_fragment:bb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:Ab,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Cb,opaque_fragment:wb,packing:Db,premultiplied_alpha_fragment:Ub,project_vertex:Lb,dithering_fragment:Nb,dithering_pars_fragment:Ob,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Fb,shadowmap_pars_vertex:Ib,shadowmap_vertex:Bb,shadowmask_pars_fragment:Hb,skinbase_vertex:Gb,skinning_pars_vertex:Vb,skinning_vertex:kb,skinnormal_vertex:Xb,specularmap_fragment:Wb,specularmap_pars_fragment:qb,tonemapping_fragment:Yb,tonemapping_pars_fragment:jb,transmission_fragment:Zb,transmission_pars_fragment:Kb,uv_pars_fragment:Qb,uv_pars_vertex:Jb,uv_vertex:$b,worldpos_vertex:t1,background_vert:e1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:a1,cube_vert:s1,cube_frag:r1,depth_vert:o1,depth_frag:l1,distance_vert:c1,distance_frag:u1,equirect_vert:f1,equirect_frag:h1,linedashed_vert:d1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:_1,meshlambert_frag:v1,meshmatcap_vert:x1,meshmatcap_frag:y1,meshnormal_vert:S1,meshnormal_frag:M1,meshphong_vert:E1,meshphong_frag:b1,meshphysical_vert:T1,meshphysical_frag:A1,meshtoon_vert:R1,meshtoon_frag:C1,points_vert:w1,points_frag:D1,shadow_vert:U1,shadow_frag:L1,sprite_vert:N1,sprite_frag:O1},It={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new be(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new be(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ic={r:0,b:0,g:0},Cs=new qi,P1=new Qe;function z1(r,t,i,s,l,c,f){const h=new be(0);let m=c===!0?0:1,d,g,_=null,x=0,S=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?i:t).get(R)),R}function T(U){let R=!1;const N=E(U);N===null?v(h,m):N&&N.isColor&&(v(N,1),R=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===iu)?(g===void 0&&(g=new Si(new al(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Gr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,P,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cs.copy(R.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(Cs)),g.material.toneMapped=we.getTransfer(N.colorSpace)!==He,(_!==N||x!==N.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=N,x=N.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Si(new ou(2,2),new Yi({name:"BackgroundMaterial",uniforms:Gr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=we.getTransfer(N.colorSpace)!==He,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||x!==N.version||S!==r.toneMapping)&&(d.material.needsUpdate=!0,_=N,x=N.version,S=r.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function v(U,R){U.getRGB(Ic,Kv(r)),s.buffers.color.setClear(Ic.r,Ic.g,Ic.b,R,f)}function C(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,R=1){h.set(U),m=R,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:T,addToRenderList:y,dispose:C}}function F1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(L,V,Y,Z,at){let tt=!1;const O=_(Z,Y,V);c!==O&&(c=O,d(c.object)),tt=S(L,Z,Y,at),tt&&E(L,Z,Y,at),at!==null&&t.update(at,r.ELEMENT_ARRAY_BUFFER),(tt||f)&&(f=!1,R(L,V,Y,Z),at!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function m(){return r.createVertexArray()}function d(L){return r.bindVertexArray(L)}function g(L){return r.deleteVertexArray(L)}function _(L,V,Y){const Z=Y.wireframe===!0;let at=s[L.id];at===void 0&&(at={},s[L.id]=at);let tt=at[V.id];tt===void 0&&(tt={},at[V.id]=tt);let O=tt[Z];return O===void 0&&(O=x(m()),tt[Z]=O),O}function x(L){const V=[],Y=[],Z=[];for(let at=0;at<i;at++)V[at]=0,Y[at]=0,Z[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:Z,object:L,attributes:{},index:null}}function S(L,V,Y,Z){const at=c.attributes,tt=V.attributes;let O=0;const H=Y.getAttributes();for(const et in H)if(H[et].location>=0){const xt=at[et];let F=tt[et];if(F===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),xt===void 0||xt.attribute!==F||F&&xt.data!==F.data)return!0;O++}return c.attributesNum!==O||c.index!==Z}function E(L,V,Y,Z){const at={},tt=V.attributes;let O=0;const H=Y.getAttributes();for(const et in H)if(H[et].location>=0){let xt=tt[et];xt===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor));const F={};F.attribute=xt,xt&&xt.data&&(F.data=xt.data),at[et]=F,O++}c.attributes=at,c.attributesNum=O,c.index=Z}function T(){const L=c.newAttributes;for(let V=0,Y=L.length;V<Y;V++)L[V]=0}function y(L){v(L,0)}function v(L,V){const Y=c.newAttributes,Z=c.enabledAttributes,at=c.attributeDivisors;Y[L]=1,Z[L]===0&&(r.enableVertexAttribArray(L),Z[L]=1),at[L]!==V&&(r.vertexAttribDivisor(L,V),at[L]=V)}function C(){const L=c.newAttributes,V=c.enabledAttributes;for(let Y=0,Z=V.length;Y<Z;Y++)V[Y]!==L[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function U(L,V,Y,Z,at,tt,O){O===!0?r.vertexAttribIPointer(L,V,Y,at,tt):r.vertexAttribPointer(L,V,Y,Z,at,tt)}function R(L,V,Y,Z){T();const at=Z.attributes,tt=Y.getAttributes(),O=V.defaultAttributeValues;for(const H in tt){const et=tt[H];if(et.location>=0){let yt=at[H];if(yt===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(yt=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(yt=L.instanceColor)),yt!==void 0){const xt=yt.normalized,F=yt.itemSize,J=t.get(yt);if(J===void 0)continue;const dt=J.buffer,Dt=J.type,Pt=J.bytesPerElement,it=Dt===r.INT||Dt===r.UNSIGNED_INT||yt.gpuType===op;if(yt.isInterleavedBufferAttribute){const ut=yt.data,Ot=ut.stride,Ht=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let Gt=0;Gt<et.locationSize;Gt++)v(et.location+Gt,ut.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Gt=0;Gt<et.locationSize;Gt++)y(et.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let Gt=0;Gt<et.locationSize;Gt++)U(et.location+Gt,F/et.locationSize,Dt,xt,Ot*Pt,(Ht+F/et.locationSize*Gt)*Pt,it)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<et.locationSize;ut++)v(et.location+ut,yt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<et.locationSize;ut++)y(et.location+ut);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let ut=0;ut<et.locationSize;ut++)U(et.location+ut,F/et.locationSize,Dt,xt,F*Pt,F/et.locationSize*ut*Pt,it)}}else if(O!==void 0){const xt=O[H];if(xt!==void 0)switch(xt.length){case 2:r.vertexAttrib2fv(et.location,xt);break;case 3:r.vertexAttrib3fv(et.location,xt);break;case 4:r.vertexAttrib4fv(et.location,xt);break;default:r.vertexAttrib1fv(et.location,xt)}}}}C()}function N(){X();for(const L in s){const V=s[L];for(const Y in V){const Z=V[Y];for(const at in Z)g(Z[at].object),delete Z[at];delete V[Y]}delete s[L]}}function z(L){if(s[L.id]===void 0)return;const V=s[L.id];for(const Y in V){const Z=V[Y];for(const at in Z)g(Z[at].object),delete Z[at];delete V[Y]}delete s[L.id]}function P(L){for(const V in s){const Y=s[V];if(Y[L.id]===void 0)continue;const Z=Y[L.id];for(const at in Z)g(Z[at].object),delete Z[at];delete Y[L.id]}}function X(){A(),f=!0,c!==l&&(c=l,d(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:y,disableUnusedAttributes:C}}function I1(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(s,d,g,_),i.update(g,s,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,s,1)}function m(d,g,_,x){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<d.length;E++)f(d[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,d,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function B1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Li&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const X=P===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==oi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Hi&&!X)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(ae("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:R,maxSamples:N,samples:z}}function H1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new _a,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||l;return l=x,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):d();else{const C=c?0:s,U=C*4;let R=v.clippingState||null;m.value=R,R=g(E,x,U,S);for(let N=0;N!==U;++N)R[N]=i[N];v.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,S,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=m.value,E!==!0||y===null){const v=S+T*4,C=x.matrixWorldInverse;h.getNormalMatrix(C),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,R=S;U!==T;++U,R+=4)f.copy(_[U]).applyMatrix4(C,h),f.normal.toArray(y,R),y[R+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function G1(r){let t=new WeakMap;function i(f,h){return h===dd?f.mapping=Os:h===pd&&(f.mapping=Ir),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===dd||h===pd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const d=new $v(m.height);return d.fromEquirectangularTexture(r,f),t.set(f,d),f.addEventListener("dispose",l),i(d.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const as=4,K_=[.125,.215,.35,.446,.526,.582],Us=20,V1=256,Wo=new Mp,Q_=new be;let Zh=null,Kh=0,Qh=0,Jh=!1;const k1=new B;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=k1}=c;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ma,format:Li,colorSpace:Hr,depthBuffer:!1},l=$_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=X1(c)),this._blurMaterial=q1(c,t,i),this._ggxMaterial=W1(c,t,i)}return l}_compileMaterial(t){const i=new Si(new Vn,t);this._renderer.compile(i,Wo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(Q_),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new al,new ru({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const C=t.background;C?C.isColor&&(y.color.copy(C),t.background=null,v=!0):(y.color.copy(Q_),v=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):R===1?(m.up.set(0,0,d[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const N=this._cubeSize;Ur(l,R*N,U>2?N:0,N,N),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=S,_.autoClear=x,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Os||t.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Wo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),x=0+d*1.25,S=_*x,{_lodMax:E}=this,T=this._sizeLods[s],y=3*T*(s>E-as?s-E+as:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Ur(c,y,v,3*T,2*T),l.setRenderTarget(c),l.render(h,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ur(t,y,v,3*T,2*T),l.setRenderTarget(t),l.render(h,Wo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=d;const x=d.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Us-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):Us;y>Us&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const v=[];let C=0;for(let P=0;P<Us;++P){const X=P/T,A=Math.exp(-X*X/2);v.push(A),P===0?C+=A:P<y&&(C+=2*A)}for(let P=0;P<v.length;P++)v[P]=v[P]/C;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const R=this._sizeLods[l],N=3*R*(l>U-as?l-U+as:0),z=4*(this._cubeSize-R);Ur(i,N,z,3*R,2*R),m.setRenderTarget(i),m.render(_,Wo)}}function X1(r){const t=[],i=[],s=[];let l=r;const c=r-as+1+K_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-as?m=K_[f-r+as-1]:f===0&&(m=0),i.push(m);const d=1/(h-2),g=-d,_=1+d,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,T=3,y=2,v=1,C=new Float32Array(T*E*S),U=new Float32Array(y*E*S),R=new Float32Array(v*E*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,X=z>2?0:-1,A=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];C.set(A,T*E*z),U.set(x,y*E*z);const L=[z,z,z,z,z,z];R.set(L,v*E*z)}const N=new Vn;N.setAttribute("position",new Xi(C,T)),N.setAttribute("uv",new Xi(U,y)),N.setAttribute("faceIndex",new Xi(R,v)),s.push(new Si(N,null)),l>as&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function $_(r,t,i){const s=new ki(r,t,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function W1(r,t,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function q1(r,t,i){const s=new Float32Array(Us),l=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function tv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function ev(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y1(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,d=m===dd||m===pd,g=m===Os||m===Ir;if(d||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new J_(r)),_=d?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return d&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new J_(r)),_=d?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&m++;return m===d}function c(h){const m=h.target;m.removeEventListener("dispose",c);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function j1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&tl("WebGLRenderer: "+s+" extension not supported."),l}}}function Z1(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function d(_){const x=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const C=S.array;T=S.version;for(let U=0,R=C.length;U<R;U+=3){const N=C[U+0],z=C[U+1],P=C[U+2];x.push(N,z,z,P,P,N)}}else if(E!==void 0){const C=E.array;T=E.version;for(let U=0,R=C.length/3-1;U<R;U+=3){const N=U+0,z=U+1,P=U+2;x.push(N,z,z,P,P,N)}}else return;const y=new(Wv(x)?Zv:jv)(x,1);y.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function K1(r,t,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,S){r.drawElements(s,S,c,x*f),i.update(S,s,1)}function d(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*f,E),i.update(S,s,E))}function g(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];i.update(y,s,1)}function _(x,S,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)d(x[v]/f,S[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,T,0,E);let v=0;for(let C=0;C<E;C++)v+=S[C]*T[C];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Q1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ce("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function J1(r,t,i){const s=new WeakMap,l=new sn;function c(f,h,m){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let L=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",L)};var S=L;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let N=h.attributes.position.count*R,z=1;N>t.maxTextureSize&&(z=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const P=new Float32Array(N*z*4*_),X=new qv(P,N,z,_);X.type=Hi,X.needsUpdate=!0;const A=R*4;for(let V=0;V<_;V++){const Y=v[V],Z=C[V],at=U[V],tt=N*z*4*V;for(let O=0;O<Y.count;O++){const H=O*A;E===!0&&(l.fromBufferAttribute(Y,O),P[tt+H+0]=l.x,P[tt+H+1]=l.y,P[tt+H+2]=l.z,P[tt+H+3]=0),T===!0&&(l.fromBufferAttribute(Z,O),P[tt+H+4]=l.x,P[tt+H+5]=l.y,P[tt+H+6]=l.z,P[tt+H+7]=0),y===!0&&(l.fromBufferAttribute(at,O),P[tt+H+8]=l.x,P[tt+H+9]=l.y,P[tt+H+10]=l.z,P[tt+H+11]=at.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new le(N,z)},s.set(h,x),h.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function $1(r,t,i,s){let l=new WeakMap;function c(m){const d=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==d&&(t.update(_),l.set(_,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==d&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,d))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==d&&(x.update(),l.set(x,d))}return _}function f(){l=new WeakMap}function h(m){const d=m.target;d.removeEventListener("dispose",h),i.remove(d.instanceMatrix),d.instanceColor!==null&&i.remove(d.instanceColor)}return{update:c,dispose:f}}const tT={[wv]:"LINEAR_TONE_MAPPING",[Dv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Lv]:"ACES_FILMIC_TONE_MAPPING",[Ov]:"AGX_TONE_MAPPING",[Pv]:"NEUTRAL_TONE_MAPPING",[Nv]:"CUSTOM_TONE_MAPPING"};function eT(r,t,i,s,l){const c=new ki(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ki(t,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),h=new Vn;h.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new en([0,2,0,0,2,0],2));const m=new XM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Si(h,m),g=new Mp(-1,1,1,-1,0,1);let _=null,x=null,S=!1,E,T=null,y=[],v=!1;this.setSize=function(C,U){c.setSize(C,U),f.setSize(C,U);for(let R=0;R<y.length;R++){const N=y[R];N.setSize&&N.setSize(C,U)}},this.setEffects=function(C){y=C,v=y.length>0&&y[0].isRenderPass===!0;const U=c.width,R=c.height;for(let N=0;N<y.length;N++){const z=y[N];z.setSize&&z.setSize(U,R)}},this.begin=function(C,U){if(S||C.toneMapping===Vi&&y.length===0)return!1;if(T=U,U!==null){const R=U.width,N=U.height;(c.width!==R||c.height!==N)&&this.setSize(R,N)}return v===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=Vi,!0},this.hasRenderPass=function(){return v},this.end=function(C,U){C.toneMapping=E,S=!0;let R=c,N=f;for(let z=0;z<y.length;z++){const P=y[z];if(P.enabled!==!1&&(P.render(C,N,R,U),P.needsSwap!==!1)){const X=R;R=N,N=X}}if(_!==C.outputColorSpace||x!==C.toneMapping){_=C.outputColorSpace,x=C.toneMapping,m.defines={},we.getTransfer(_)===He&&(m.defines.SRGB_TRANSFER="");const z=tT[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(T),C.render(d,g),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const sx=new Gn,Qd=new el(1,1),rx=new qv,ox=new xM,lx=new Jv,nv=[],iv=[],av=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);function kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function cu(r,t){let i=iv[t];i===void 0&&(i=new Int32Array(t),iv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function nT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function iT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function rT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;rv.set(s),r.uniformMatrix2fv(this.addr,!1,rv),xn(i,s)}}function oT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),xn(i,s)}}function lT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;av.set(s),r.uniformMatrix4fv(this.addr,!1,av),xn(i,s)}}function cT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function dT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function _T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Qd.compareFunction=i.isReversedDepthBuffer()?pp:dp,c=Qd):c=sx,i.setTexture2D(t||c,l)}function vT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ox,l)}function xT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||lx,l)}function yT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||rx,l)}function ST(r){switch(r){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return dT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}function MT(r,t){r.uniform1fv(this.addr,t)}function ET(r,t){const i=kr(t,this.size,2);r.uniform2fv(this.addr,i)}function bT(r,t){const i=kr(t,this.size,3);r.uniform3fv(this.addr,i)}function TT(r,t){const i=kr(t,this.size,4);r.uniform4fv(this.addr,i)}function AT(r,t){const i=kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function RT(r,t){const i=kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function CT(r,t){const i=kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function wT(r,t){r.uniform1iv(this.addr,t)}function DT(r,t){r.uniform2iv(this.addr,t)}function UT(r,t){r.uniform3iv(this.addr,t)}function LT(r,t){r.uniform4iv(this.addr,t)}function NT(r,t){r.uniform1uiv(this.addr,t)}function OT(r,t){r.uniform2uiv(this.addr,t)}function PT(r,t){r.uniform3uiv(this.addr,t)}function zT(r,t){r.uniform4uiv(this.addr,t)}function FT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Qd:f=sx;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function IT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ox,c[f])}function BT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||lx,c[f])}function HT(r,t,i){const s=this.cache,l=t.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||rx,c[f])}function GT(r){switch(r){case 5126:return MT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ST(i.type)}}class kT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GT(i.type)}}class XT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function ov(r,t){r.seq.push(t),r.map[t.id]=t}function WT(r,t,i){const s=r.name,l=s.length;for($h.lastIndex=0;;){const c=$h.exec(s),f=$h.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&f+2===l){ov(i,d===void 0?new VT(h,r,t):new kT(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new XT(h),ov(i,_)),i=_}}}class jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);WT(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function lv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const qT=37297;let YT=0;function jT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const cv=new he;function ZT(r){we._getMatrix(cv,we.workingColorSpace,r);const t=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case Kc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function uv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+jT(r.getShaderSource(t),h)}else return c}function KT(r,t){const i=ZT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QT={[wv]:"Linear",[Dv]:"Reinhard",[Uv]:"Cineon",[Lv]:"ACESFilmic",[Ov]:"AgX",[Pv]:"Neutral",[Nv]:"Custom"};function JT(r,t){const i=QT[t];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new B;function $T(){we.getLuminanceCoefficients(Bc);const r=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function eA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function nA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Ko(r){return r!==""}function fv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(iA,sA)}const aA=new Map;function sA(r,t){let i=de[t];if(i===void 0){const s=aA.get(t);if(s!==void 0)i=de[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(rA,oA)}function oA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const lA={[Vc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function cA(r){return lA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uA={[Os]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function fA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":uA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const hA={[Ir]:"ENVMAP_MODE_REFRACTION"};function dA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":hA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pA={[Cv]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[tM]:"ENVMAP_BLENDING_ADD"};function mA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":pA[r.combine]||"ENVMAP_BLENDING_NONE"}function gA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _A(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=cA(i),d=fA(i),g=dA(i),_=mA(i),x=gA(i),S=tA(i),E=eA(c),T=l.createProgram();let y,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ko).join(`
`),v.length>0&&(v+=`
`)):(y=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),v=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?de.tonemapping_pars_fragment:"",i.toneMapping!==Vi?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,KT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),f=Jd(f),f=fv(f,i),f=hv(f,i),h=Jd(h),h=fv(h,i),h=hv(h,i),f=dv(f),h=dv(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=C+y+f,R=C+v+h,N=lv(l,l.VERTEX_SHADER,U),z=lv(l,l.FRAGMENT_SHADER,R);l.attachShader(T,N),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(V){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(T)||"",Z=l.getShaderInfoLog(N)||"",at=l.getShaderInfoLog(z)||"",tt=Y.trim(),O=Z.trim(),H=at.trim();let et=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,N,z);else{const xt=uv(l,N,"vertex"),F=uv(l,z,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+tt+`
`+xt+`
`+F)}else tt!==""?ae("WebGLProgram: Program Info Log:",tt):(O===""||H==="")&&(yt=!1);yt&&(V.diagnostics={runnable:et,programLog:tt,vertexShader:{log:O,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(N),l.deleteShader(z),X=new jc(l,T),A=nA(l,T)}let X;this.getUniforms=function(){return X===void 0&&P(this),X};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(T,qT)),L},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=z,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new yA(t),i.set(t,s)),s}}class yA{constructor(t){this.id=vA++,this.code=t,this.usedTimes=0}}function SA(r,t,i,s,l,c,f){const h=new gp,m=new xA,d=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return d.add(A),A===0?"uv":`uv${A}`}function y(A,L,V,Y,Z){const at=Y.fog,tt=Z.geometry,O=A.isMeshStandardMaterial?Y.environment:null,H=(A.isMeshStandardMaterial?i:t).get(A.envMap||O),et=H&&H.mapping===iu?H.image.height:null,yt=E[A.type];A.precision!==null&&(S=l.getMaxPrecision(A.precision),S!==A.precision&&ae("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const xt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,F=xt!==void 0?xt.length:0;let J=0;tt.morphAttributes.position!==void 0&&(J=1),tt.morphAttributes.normal!==void 0&&(J=2),tt.morphAttributes.color!==void 0&&(J=3);let dt,Dt,Pt,it;if(yt){const Re=Bi[yt];dt=Re.vertexShader,Dt=Re.fragmentShader}else dt=A.vertexShader,Dt=A.fragmentShader,m.update(A),Pt=m.getVertexShaderID(A),it=m.getFragmentShaderID(A);const ut=r.getRenderTarget(),Ot=r.state.buffers.depth.getReversed(),Ht=Z.isInstancedMesh===!0,Gt=Z.isBatchedMesh===!0,pe=!!A.map,Je=!!A.matcap,ge=!!H,me=!!A.aoMap,Te=!!A.lightMap,re=!!A.bumpMap,je=!!A.normalMap,W=!!A.displacementMap,qe=!!A.emissiveMap,ye=!!A.metalnessMap,Ae=!!A.roughnessMap,qt=A.anisotropy>0,I=A.clearcoat>0,b=A.dispersion>0,j=A.iridescence>0,gt=A.sheen>0,Tt=A.transmission>0,ht=qt&&!!A.anisotropyMap,Yt=I&&!!A.clearcoatMap,Nt=I&&!!A.clearcoatNormalMap,Wt=I&&!!A.clearcoatRoughnessMap,te=j&&!!A.iridescenceMap,Ct=j&&!!A.iridescenceThicknessMap,$=gt&&!!A.sheenColorMap,Et=gt&&!!A.sheenRoughnessMap,bt=!!A.specularMap,At=!!A.specularColorMap,Vt=!!A.specularIntensityMap,k=Tt&&!!A.transmissionMap,Rt=Tt&&!!A.thicknessMap,wt=!!A.gradientMap,Ut=!!A.alphaMap,_t=A.alphaTest>0,pt=!!A.alphaHash,Lt=!!A.extensions;let se=Vi;A.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(se=r.toneMapping);const ze={shaderID:yt,shaderType:A.type,shaderName:A.name,vertexShader:dt,fragmentShader:Dt,defines:A.defines,customVertexShaderID:Pt,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Gt,batchingColor:Gt&&Z._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&Z.instanceColor!==null,instancingMorph:Ht&&Z.morphTexture!==null,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Hr,alphaToCoverage:!!A.alphaToCoverage,map:pe,matcap:Je,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:et,aoMap:me,lightMap:Te,bumpMap:re,normalMap:je,displacementMap:W,emissiveMap:qe,normalMapObjectSpace:je&&A.normalMapType===iM,normalMapTangentSpace:je&&A.normalMapType===Xv,metalnessMap:ye,roughnessMap:Ae,anisotropy:qt,anisotropyMap:ht,clearcoat:I,clearcoatMap:Yt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:j,iridescenceMap:te,iridescenceThicknessMap:Ct,sheen:gt,sheenColorMap:$,sheenRoughnessMap:Et,specularMap:bt,specularColorMap:At,specularIntensityMap:Vt,transmission:Tt,transmissionMap:k,thicknessMap:Rt,gradientMap:wt,opaque:A.transparent===!1&&A.blending===Pr&&A.alphaToCoverage===!1,alphaMap:Ut,alphaTest:_t,alphaHash:pt,combine:A.combine,mapUv:pe&&T(A.map.channel),aoMapUv:me&&T(A.aoMap.channel),lightMapUv:Te&&T(A.lightMap.channel),bumpMapUv:re&&T(A.bumpMap.channel),normalMapUv:je&&T(A.normalMap.channel),displacementMapUv:W&&T(A.displacementMap.channel),emissiveMapUv:qe&&T(A.emissiveMap.channel),metalnessMapUv:ye&&T(A.metalnessMap.channel),roughnessMapUv:Ae&&T(A.roughnessMap.channel),anisotropyMapUv:ht&&T(A.anisotropyMap.channel),clearcoatMapUv:Yt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:$&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Et&&T(A.sheenRoughnessMap.channel),specularMapUv:bt&&T(A.specularMap.channel),specularColorMapUv:At&&T(A.specularColorMap.channel),specularIntensityMapUv:Vt&&T(A.specularIntensityMap.channel),transmissionMapUv:k&&T(A.transmissionMap.channel),thicknessMapUv:Rt&&T(A.thicknessMap.channel),alphaMapUv:Ut&&T(A.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(je||qt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!tt.attributes.uv&&(pe||Ut),fog:!!at,useFog:A.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ot,skinning:Z.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:pe&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:qe&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===va,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Lt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&A.extensions.multiDraw===!0||Gt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ze.vertexUv1s=d.has(1),ze.vertexUv2s=d.has(2),ze.vertexUv3s=d.has(3),d.clear(),ze}function v(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)L.push(V),L.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(C(L,A),U(L,A),L.push(r.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function C(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function U(A,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),A.push(h.mask)}function R(A){const L=E[A.type];let V;if(L){const Y=Bi[L];V=LM.clone(Y.uniforms)}else V=A.uniforms;return V}function N(A,L){let V=_.get(L);return V!==void 0?++V.usedTimes:(V=new _A(r,L,A,c),g.push(V),_.set(L,V)),V}function z(A){if(--A.usedTimes===0){const L=g.indexOf(A);g[L]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:N,releaseProgram:z,releaseShaderCache:P,programs:g,dispose:X}}function MA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function EA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,S,E,T,y){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=y),t++,v}function h(_,x,S,E,T,y){const v=f(_,x,S,E,T,y);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,x,S,E,T,y){const v=f(_,x,S,E,T,y);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function d(_,x){i.length>1&&i.sort(_||EA),s.length>1&&s.sort(x||mv),l.length>1&&l.sort(x||mv)}function g(){for(let _=t,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:d}}function bA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new gv,r.set(s,[f])):l>=c.length?(f=new gv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function TA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new B,color:new be};break;case"SpotLight":i={position:new B,direction:new B,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new B,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new B,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=i,i}}}function AA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let RA=0;function CA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function wA(r){const t=new TA,i=AA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new B);const l=new B,c=new Qe,f=new Qe;function h(d){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let S=0,E=0,T=0,y=0,v=0,C=0,U=0,R=0,N=0,z=0,P=0;d.sort(CA);for(let A=0,L=d.length;A<L;A++){const V=d[A],Y=V.color,Z=V.intensity,at=V.distance;let tt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Br?tt=V.shadow.map.texture:tt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Y.r*Z,_+=Y.g*Z,x+=Y.b*Z;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],Z);P++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,et=i.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.directionalShadow[S]=et,s.directionalShadowMap[S]=tt,s.directionalShadowMatrix[S]=V.shadow.matrix,C++}s.directional[S]=O,S++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(Y).multiplyScalar(Z),O.distance=at,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[T]=O;const H=V.shadow;if(V.map&&(s.spotLightMap[N]=V.map,N++,H.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[T]=H.matrix,V.castShadow){const et=i.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.spotShadow[T]=et,s.spotShadowMap[T]=tt,R++}T++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(Y).multiplyScalar(Z),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=O,y++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const H=V.shadow,et=i.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,et.shadowCameraNear=H.camera.near,et.shadowCameraFar=H.camera.far,s.pointShadow[E]=et,s.pointShadowMap[E]=tt,s.pointShadowMatrix[E]=V.shadow.matrix,U++}s.point[E]=O,E++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar(Z),O.groundColor.copy(V.groundColor).multiplyScalar(Z),s.hemi[v]=O,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==C||X.numPointShadows!==U||X.numSpotShadows!==R||X.numSpotMaps!==N||X.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=R+N-z,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=C,X.numPointShadows=U,X.numSpotShadows=R,X.numSpotMaps=N,X.numLightProbes=P,s.version=RA++)}function m(d,g){let _=0,x=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let v=0,C=d.length;v<C;v++){const U=d[v];if(U.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),_++}else if(U.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const R=s.point[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:h,setupView:m,state:s}}function _v(r){const t=new wA(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function DA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new _v(r),t.set(l,[h])):c>=f.length?(h=new _v(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NA=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],OA=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],vv=new Qe,qo=new B,td=new B;function PA(r,t,i){let s=new _p;const l=new le,c=new le,f=new sn,h=new qM,m=new YM,d={},g=i.maxTextureSize,_={[ss]:Qn,[Qn]:ss,[va]:va},x=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:UA,fragmentShader:LA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Vn;E.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Si(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let v=this.type;this.render=function(z,P,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;z.type===OS&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=Vc);const A=r.getRenderTarget(),L=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(ya),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=v!==this.type;Z&&P.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach(tt=>tt.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,tt=z.length;at<tt;at++){const O=z[at],H=O.shadow;if(H===void 0){ae("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const et=H.getFrameExtents();if(l.multiply(et),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/et.x),l.x=c.x*et.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/et.y),l.y=c.y*et.y,H.mapSize.y=c.y)),H.map===null||Z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Zo){if(O.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ki(l.x,l.y,{format:Br,type:Ma,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new el(l.x,l.y,Hi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Ea,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else{O.isPointLight?(H.map=new $v(l.x),H.map.depthTexture=new kM(l.x,Wi)):(H.map=new ki(l.x,l.y),H.map.depthTexture=new el(l.x,l.y,Wi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Ea;const xt=r.state.buffers.depth.getReversed();this.type===Vc?(H.map.depthTexture.compareFunction=xt?pp:dp,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(H.map),r.clear());const F=H.getViewport(xt);f.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),Y.viewport(f)}if(O.isPointLight){const F=H.camera,J=H.matrix,dt=O.distance||F.far;dt!==F.far&&(F.far=dt,F.updateProjectionMatrix()),qo.setFromMatrixPosition(O.matrixWorld),F.position.copy(qo),td.copy(F.position),td.add(NA[xt]),F.up.copy(OA[xt]),F.lookAt(td),F.updateMatrixWorld(),J.makeTranslation(-qo.x,-qo.y,-qo.z),vv.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H._frustum.setFromProjectionMatrix(vv,F.coordinateSystem,F.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),R(P,X,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Zo&&C(H,X),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(A,L,V)};function C(z,P){const X=t.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ki(l.x,l.y,{format:Br,type:Ma})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(P,null,X,x,T,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(P,null,X,S,T,null)}function U(z,P,X,A){let L=null;const V=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)L=V;else if(L=X.isPointLight===!0?m:h,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=L.uuid,Z=P.uuid;let at=d[Y];at===void 0&&(at={},d[Y]=at);let tt=at[Z];tt===void 0&&(tt=L.clone(),at[Z]=tt,P.addEventListener("dispose",N)),L=tt}if(L.visible=P.visible,L.wireframe=P.wireframe,A===Zo?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:_[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,X.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Y=r.properties.get(L);Y.light=X}return L}function R(z,P,X,A,L){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===Zo)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const Z=t.update(z),at=z.material;if(Array.isArray(at)){const tt=Z.groups;for(let O=0,H=tt.length;O<H;O++){const et=tt[O],yt=at[et.materialIndex];if(yt&&yt.visible){const xt=U(z,yt,A,L);z.onBeforeShadow(r,z,P,X,Z,xt,et),r.renderBufferDirect(X,null,Z,xt,z,et),z.onAfterShadow(r,z,P,X,Z,xt,et)}}}else if(at.visible){const tt=U(z,at,A,L);z.onBeforeShadow(r,z,P,X,Z,tt,null),r.renderBufferDirect(X,null,Z,tt,z,null),z.onAfterShadow(r,z,P,X,Z,tt,null)}}const Y=z.children;for(let Z=0,at=Y.length;Z<at;Z++)R(Y[Z],P,X,A,L)}function N(z){z.target.removeEventListener("dispose",N);for(const X in d){const A=d[X],L=z.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}const zA={[rd]:od,[ld]:fd,[cd]:hd,[Fr]:ud,[od]:rd,[fd]:ld,[hd]:cd,[ud]:Fr};function FA(r,t){function i(){let k=!1;const Rt=new sn;let wt=null;const Ut=new sn(0,0,0,0);return{setMask:function(_t){wt!==_t&&!k&&(r.colorMask(_t,_t,_t,_t),wt=_t)},setLocked:function(_t){k=_t},setClear:function(_t,pt,Lt,se,ze){ze===!0&&(_t*=se,pt*=se,Lt*=se),Rt.set(_t,pt,Lt,se),Ut.equals(Rt)===!1&&(r.clearColor(_t,pt,Lt,se),Ut.copy(Rt))},reset:function(){k=!1,wt=null,Ut.set(-1,0,0,0)}}}function s(){let k=!1,Rt=!1,wt=null,Ut=null,_t=null;return{setReversed:function(pt){if(Rt!==pt){const Lt=t.get("EXT_clip_control");pt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Rt=pt;const se=_t;_t=null,this.setClear(se)}},getReversed:function(){return Rt},setTest:function(pt){pt?ut(r.DEPTH_TEST):Ot(r.DEPTH_TEST)},setMask:function(pt){wt!==pt&&!k&&(r.depthMask(pt),wt=pt)},setFunc:function(pt){if(Rt&&(pt=zA[pt]),Ut!==pt){switch(pt){case rd:r.depthFunc(r.NEVER);break;case od:r.depthFunc(r.ALWAYS);break;case ld:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case cd:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case fd:r.depthFunc(r.GREATER);break;case hd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ut=pt}},setLocked:function(pt){k=pt},setClear:function(pt){_t!==pt&&(Rt&&(pt=1-pt),r.clearDepth(pt),_t=pt)},reset:function(){k=!1,wt=null,Ut=null,_t=null,Rt=!1}}}function l(){let k=!1,Rt=null,wt=null,Ut=null,_t=null,pt=null,Lt=null,se=null,ze=null;return{setTest:function(Re){k||(Re?ut(r.STENCIL_TEST):Ot(r.STENCIL_TEST))},setMask:function(Re){Rt!==Re&&!k&&(r.stencilMask(Re),Rt=Re)},setFunc:function(Re,On,Mi){(wt!==Re||Ut!==On||_t!==Mi)&&(r.stencilFunc(Re,On,Mi),wt=Re,Ut=On,_t=Mi)},setOp:function(Re,On,Mi){(pt!==Re||Lt!==On||se!==Mi)&&(r.stencilOp(Re,On,Mi),pt=Re,Lt=On,se=Mi)},setLocked:function(Re){k=Re},setClear:function(Re){ze!==Re&&(r.clearStencil(Re),ze=Re)},reset:function(){k=!1,Rt=null,wt=null,Ut=null,_t=null,pt=null,Lt=null,se=null,ze=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,d=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,T=!1,y=null,v=null,C=null,U=null,R=null,N=null,z=null,P=new be(0,0,0),X=0,A=!1,L=null,V=null,Y=null,Z=null,at=null;const tt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const et=r.getParameter(r.VERSION);et.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(et)[1]),O=H>=1):et.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),O=H>=2);let yt=null,xt={};const F=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),dt=new sn().fromArray(F),Dt=new sn().fromArray(J);function Pt(k,Rt,wt,Ut){const _t=new Uint8Array(4),pt=r.createTexture();r.bindTexture(k,pt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<wt;Lt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,_t):r.texImage2D(Rt+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_t);return pt}const it={};it[r.TEXTURE_2D]=Pt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ut(r.DEPTH_TEST),f.setFunc(Fr),re(!1),je(d_),ut(r.CULL_FACE),me(ya);function ut(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Ot(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function Ht(k,Rt){return _[k]!==Rt?(r.bindFramebuffer(k,Rt),_[k]=Rt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Rt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Gt(k,Rt){let wt=S,Ut=!1;if(k){wt=x.get(Rt),wt===void 0&&(wt=[],x.set(Rt,wt));const _t=k.textures;if(wt.length!==_t.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Lt=_t.length;pt<Lt;pt++)wt[pt]=r.COLOR_ATTACHMENT0+pt;wt.length=_t.length,Ut=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Ut=!0);Ut&&r.drawBuffers(wt)}function pe(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const Je={[Ds]:r.FUNC_ADD,[zS]:r.FUNC_SUBTRACT,[FS]:r.FUNC_REVERSE_SUBTRACT};Je[IS]=r.MIN,Je[BS]=r.MAX;const ge={[HS]:r.ZERO,[GS]:r.ONE,[VS]:r.SRC_COLOR,[ad]:r.SRC_ALPHA,[jS]:r.SRC_ALPHA_SATURATE,[qS]:r.DST_COLOR,[XS]:r.DST_ALPHA,[kS]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[YS]:r.ONE_MINUS_DST_COLOR,[WS]:r.ONE_MINUS_DST_ALPHA,[ZS]:r.CONSTANT_COLOR,[KS]:r.ONE_MINUS_CONSTANT_COLOR,[QS]:r.CONSTANT_ALPHA,[JS]:r.ONE_MINUS_CONSTANT_ALPHA};function me(k,Rt,wt,Ut,_t,pt,Lt,se,ze,Re){if(k===ya){T===!0&&(Ot(r.BLEND),T=!1);return}if(T===!1&&(ut(r.BLEND),T=!0),k!==PS){if(k!==y||Re!==A){if((v!==Ds||R!==Ds)&&(r.blendEquation(r.FUNC_ADD),v=Ds,R=Ds),Re)switch(k){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFunc(r.ONE,r.ONE);break;case m_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case g_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",k);break}else switch(k){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case m_:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",k);break}C=null,U=null,N=null,z=null,P.set(0,0,0),X=0,y=k,A=Re}return}_t=_t||Rt,pt=pt||wt,Lt=Lt||Ut,(Rt!==v||_t!==R)&&(r.blendEquationSeparate(Je[Rt],Je[_t]),v=Rt,R=_t),(wt!==C||Ut!==U||pt!==N||Lt!==z)&&(r.blendFuncSeparate(ge[wt],ge[Ut],ge[pt],ge[Lt]),C=wt,U=Ut,N=pt,z=Lt),(se.equals(P)===!1||ze!==X)&&(r.blendColor(se.r,se.g,se.b,ze),P.copy(se),X=ze),y=k,A=!1}function Te(k,Rt){k.side===va?Ot(r.CULL_FACE):ut(r.CULL_FACE);let wt=k.side===Qn;Rt&&(wt=!wt),re(wt),k.blending===Pr&&k.transparent===!1?me(ya):me(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ut=k.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(k){L!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),L=k)}function je(k){k!==LS?(ut(r.CULL_FACE),k!==V&&(k===d_?r.cullFace(r.BACK):k===NS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ot(r.CULL_FACE),V=k}function W(k){k!==Y&&(O&&r.lineWidth(k),Y=k)}function qe(k,Rt,wt){k?(ut(r.POLYGON_OFFSET_FILL),(Z!==Rt||at!==wt)&&(r.polygonOffset(Rt,wt),Z=Rt,at=wt)):Ot(r.POLYGON_OFFSET_FILL)}function ye(k){k?ut(r.SCISSOR_TEST):Ot(r.SCISSOR_TEST)}function Ae(k){k===void 0&&(k=r.TEXTURE0+tt-1),yt!==k&&(r.activeTexture(k),yt=k)}function qt(k,Rt,wt){wt===void 0&&(yt===null?wt=r.TEXTURE0+tt-1:wt=yt);let Ut=xt[wt];Ut===void 0&&(Ut={type:void 0,texture:void 0},xt[wt]=Ut),(Ut.type!==k||Ut.texture!==Rt)&&(yt!==wt&&(r.activeTexture(wt),yt=wt),r.bindTexture(k,Rt||it[k]),Ut.type=k,Ut.texture=Rt)}function I(){const k=xt[yt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function gt(){try{r.texSubImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Tt(){try{r.texSubImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Nt(){try{r.texStorage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Wt(){try{r.texStorage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function te(){try{r.texImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Ct(){try{r.texImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function $(k){dt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),dt.copy(k))}function Et(k){Dt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function bt(k,Rt){let wt=d.get(Rt);wt===void 0&&(wt=new WeakMap,d.set(Rt,wt));let Ut=wt.get(k);Ut===void 0&&(Ut=r.getUniformBlockIndex(Rt,k.name),wt.set(k,Ut))}function At(k,Rt){const Ut=d.get(Rt).get(k);m.get(Rt)!==Ut&&(r.uniformBlockBinding(Rt,Ut,k.__bindingPointIndex),m.set(Rt,Ut))}function Vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,xt={},_={},x=new WeakMap,S=[],E=null,T=!1,y=null,v=null,C=null,U=null,R=null,N=null,z=null,P=new be(0,0,0),X=0,A=!1,L=null,V=null,Y=null,Z=null,at=null,dt.set(0,0,r.canvas.width,r.canvas.height),Dt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ut,disable:Ot,bindFramebuffer:Ht,drawBuffers:Gt,useProgram:pe,setBlending:me,setMaterial:Te,setFlipSided:re,setCullFace:je,setLineWidth:W,setPolygonOffset:qe,setScissorTest:ye,activeTexture:Ae,bindTexture:qt,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:te,texImage3D:Ct,updateUBOMapping:bt,uniformBlockBinding:At,texStorage2D:Nt,texStorage3D:Wt,texSubImage2D:gt,texSubImage3D:Tt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Yt,scissor:$,viewport:Et,reset:Vt}}function IA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,b){return S?new OffscreenCanvas(I,b):Jc("canvas")}function T(I,b,j){let gt=1;const Tt=qt(I);if((Tt.width>j||Tt.height>j)&&(gt=j/Math.max(Tt.width,Tt.height)),gt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ht=Math.floor(gt*Tt.width),Yt=Math.floor(gt*Tt.height);_===void 0&&(_=E(ht,Yt));const Nt=b?E(ht,Yt):_;return Nt.width=ht,Nt.height=Yt,Nt.getContext("2d").drawImage(I,0,0,ht,Yt),ae("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ht+"x"+Yt+")."),Nt}else return"data"in I&&ae("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),I;return I}function y(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(I,b,j,gt,Tt=!1){if(I!==null){if(r[I]!==void 0)return r[I];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ht=b;if(b===r.RED&&(j===r.FLOAT&&(ht=r.R32F),j===r.HALF_FLOAT&&(ht=r.R16F),j===r.UNSIGNED_BYTE&&(ht=r.R8)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.R8UI),j===r.UNSIGNED_SHORT&&(ht=r.R16UI),j===r.UNSIGNED_INT&&(ht=r.R32UI),j===r.BYTE&&(ht=r.R8I),j===r.SHORT&&(ht=r.R16I),j===r.INT&&(ht=r.R32I)),b===r.RG&&(j===r.FLOAT&&(ht=r.RG32F),j===r.HALF_FLOAT&&(ht=r.RG16F),j===r.UNSIGNED_BYTE&&(ht=r.RG8)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RG8UI),j===r.UNSIGNED_SHORT&&(ht=r.RG16UI),j===r.UNSIGNED_INT&&(ht=r.RG32UI),j===r.BYTE&&(ht=r.RG8I),j===r.SHORT&&(ht=r.RG16I),j===r.INT&&(ht=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),j===r.UNSIGNED_INT&&(ht=r.RGB32UI),j===r.BYTE&&(ht=r.RGB8I),j===r.SHORT&&(ht=r.RGB16I),j===r.INT&&(ht=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),j===r.UNSIGNED_INT&&(ht=r.RGBA32UI),j===r.BYTE&&(ht=r.RGBA8I),j===r.SHORT&&(ht=r.RGBA16I),j===r.INT&&(ht=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),b===r.RGBA){const Yt=Tt?Kc:we.getTransfer(gt);j===r.FLOAT&&(ht=r.RGBA32F),j===r.HALF_FLOAT&&(ht=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ht=Yt===He?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function R(I,b){let j;return I?b===null||b===Wi||b===$o?j=r.DEPTH24_STENCIL8:b===Hi?j=r.DEPTH32F_STENCIL8:b===Jo&&(j=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===$o?j=r.DEPTH_COMPONENT24:b===Hi?j=r.DEPTH_COMPONENT32F:b===Jo&&(j=r.DEPTH_COMPONENT16),j}function N(I,b){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function z(I){const b=I.target;b.removeEventListener("dispose",z),X(b),b.isVideoTexture&&g.delete(b)}function P(I){const b=I.target;b.removeEventListener("dispose",P),L(b)}function X(I){const b=s.get(I);if(b.__webglInit===void 0)return;const j=I.source,gt=x.get(j);if(gt){const Tt=gt[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&A(I),Object.keys(gt).length===0&&x.delete(j)}s.remove(I)}function A(I){const b=s.get(I);r.deleteTexture(b.__webglTexture);const j=I.source,gt=x.get(j);delete gt[b.__cacheKey],f.memory.textures--}function L(I){const b=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let Tt=0;Tt<b.__webglFramebuffer[gt].length;Tt++)r.deleteFramebuffer(b.__webglFramebuffer[gt][Tt]);else r.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)r.deleteFramebuffer(b.__webglFramebuffer[gt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=I.textures;for(let gt=0,Tt=j.length;gt<Tt;gt++){const ht=s.get(j[gt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove(j[gt])}s.remove(I)}let V=0;function Y(){V=0}function Z(){const I=V;return I>=l.maxTextures&&ae("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),V+=1,I}function at(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function tt(I,b){const j=s.get(I);if(I.isVideoTexture&&ye(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const gt=I.image;if(gt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{it(j,I,b);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function O(I,b){const j=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){it(j,I,b);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function H(I,b){const j=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){it(j,I,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function et(I,b){const j=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){ut(j,I,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const yt={[md]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[gd]:r.MIRRORED_REPEAT},xt={[Nn]:r.NEAREST,[eM]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Sh]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},F={[aM]:r.NEVER,[cM]:r.ALWAYS,[sM]:r.LESS,[dp]:r.LEQUAL,[rM]:r.EQUAL,[pp]:r.GEQUAL,[oM]:r.GREATER,[lM]:r.NOTEQUAL};function J(I,b){if(b.type===Hi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Sh||b.magFilter===gc||b.magFilter===Ls||b.minFilter===In||b.minFilter===Sh||b.minFilter===gc||b.minFilter===Ls)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,yt[b.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,xt[b.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,xt[b.minFilter]),b.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==gc&&b.minFilter!==Ls||b.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function dt(I,b){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",z));const gt=b.source;let Tt=x.get(gt);Tt===void 0&&(Tt={},x.set(gt,Tt));const ht=at(b);if(ht!==I.__cacheKey){Tt[ht]===void 0&&(Tt[ht]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),Tt[ht].usedTimes++;const Yt=Tt[I.__cacheKey];Yt!==void 0&&(Tt[I.__cacheKey].usedTimes--,Yt.usedTimes===0&&A(b)),I.__cacheKey=ht,I.__webglTexture=Tt[ht].texture}return j}function Dt(I,b,j){return Math.floor(Math.floor(I/j)/b)}function Pt(I,b,j,gt){const ht=I.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,gt,b.data);else{ht.sort((Ct,$)=>Ct.start-$.start);let Yt=0;for(let Ct=1;Ct<ht.length;Ct++){const $=ht[Yt],Et=ht[Ct],bt=$.start+$.count,At=Dt(Et.start,b.width,4),Vt=Dt($.start,b.width,4);Et.start<=bt+1&&At===Vt&&Dt(Et.start+Et.count-1,b.width,4)===At?$.count=Math.max($.count,Et.start+Et.count-$.start):(++Yt,ht[Yt]=Et)}ht.length=Yt+1;const Nt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ct=0,$=ht.length;Ct<$;Ct++){const Et=ht[Ct],bt=Math.floor(Et.start/4),At=Math.ceil(Et.count/4),Vt=bt%b.width,k=Math.floor(bt/b.width),Rt=At,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,Vt,k,Rt,wt,j,gt,b.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Nt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function it(I,b,j){let gt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=r.TEXTURE_3D);const Tt=dt(I,b),ht=b.source;i.bindTexture(gt,I.__webglTexture,r.TEXTURE0+j);const Yt=s.get(ht);if(ht.version!==Yt.__version||Tt===!0){i.activeTexture(r.TEXTURE0+j);const Nt=we.getPrimaries(we.workingColorSpace),Wt=b.colorSpace===is?null:we.getPrimaries(b.colorSpace),te=b.colorSpace===is||Nt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Ct=T(b.image,!1,l.maxTextureSize);Ct=Ae(b,Ct);const $=c.convert(b.format,b.colorSpace),Et=c.convert(b.type);let bt=U(b.internalFormat,$,Et,b.colorSpace,b.isVideoTexture);J(gt,b);let At;const Vt=b.mipmaps,k=b.isVideoTexture!==!0,Rt=Yt.__version===void 0||Tt===!0,wt=ht.dataReady,Ut=N(b,Ct);if(b.isDepthTexture)bt=R(b.format===Ns,b.type),Rt&&(k?i.texStorage2D(r.TEXTURE_2D,1,bt,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,bt,Ct.width,Ct.height,0,$,Et,null));else if(b.isDataTexture)if(Vt.length>0){k&&Rt&&i.texStorage2D(r.TEXTURE_2D,Ut,bt,Vt[0].width,Vt[0].height);for(let _t=0,pt=Vt.length;_t<pt;_t++)At=Vt[_t],k?wt&&i.texSubImage2D(r.TEXTURE_2D,_t,0,0,At.width,At.height,$,Et,At.data):i.texImage2D(r.TEXTURE_2D,_t,bt,At.width,At.height,0,$,Et,At.data);b.generateMipmaps=!1}else k?(Rt&&i.texStorage2D(r.TEXTURE_2D,Ut,bt,Ct.width,Ct.height),wt&&Pt(b,Ct,$,Et)):i.texImage2D(r.TEXTURE_2D,0,bt,Ct.width,Ct.height,0,$,Et,Ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,bt,Vt[0].width,Vt[0].height,Ct.depth);for(let _t=0,pt=Vt.length;_t<pt;_t++)if(At=Vt[_t],b.format!==Li)if($!==null)if(k){if(wt)if(b.layerUpdates.size>0){const Lt=Z_(At.width,At.height,b.format,b.type);for(const se of b.layerUpdates){const ze=At.data.subarray(se*Lt/At.data.BYTES_PER_ELEMENT,(se+1)*Lt/At.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_t,0,0,se,At.width,At.height,1,$,ze)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_t,0,0,0,At.width,At.height,Ct.depth,$,At.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_t,bt,At.width,At.height,Ct.depth,0,At.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,_t,0,0,0,At.width,At.height,Ct.depth,$,Et,At.data):i.texImage3D(r.TEXTURE_2D_ARRAY,_t,bt,At.width,At.height,Ct.depth,0,$,Et,At.data)}else{k&&Rt&&i.texStorage2D(r.TEXTURE_2D,Ut,bt,Vt[0].width,Vt[0].height);for(let _t=0,pt=Vt.length;_t<pt;_t++)At=Vt[_t],b.format!==Li?$!==null?k?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,_t,0,0,At.width,At.height,$,At.data):i.compressedTexImage2D(r.TEXTURE_2D,_t,bt,At.width,At.height,0,At.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&i.texSubImage2D(r.TEXTURE_2D,_t,0,0,At.width,At.height,$,Et,At.data):i.texImage2D(r.TEXTURE_2D,_t,bt,At.width,At.height,0,$,Et,At.data)}else if(b.isDataArrayTexture)if(k){if(Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,bt,Ct.width,Ct.height,Ct.depth),wt)if(b.layerUpdates.size>0){const _t=Z_(Ct.width,Ct.height,b.format,b.type);for(const pt of b.layerUpdates){const Lt=Ct.data.subarray(pt*_t/Ct.data.BYTES_PER_ELEMENT,(pt+1)*_t/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,Ct.width,Ct.height,1,$,Et,Lt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,$,Et,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,Ct.width,Ct.height,Ct.depth,0,$,Et,Ct.data);else if(b.isData3DTexture)k?(Rt&&i.texStorage3D(r.TEXTURE_3D,Ut,bt,Ct.width,Ct.height,Ct.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,$,Et,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,bt,Ct.width,Ct.height,Ct.depth,0,$,Et,Ct.data);else if(b.isFramebufferTexture){if(Rt)if(k)i.texStorage2D(r.TEXTURE_2D,Ut,bt,Ct.width,Ct.height);else{let _t=Ct.width,pt=Ct.height;for(let Lt=0;Lt<Ut;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,bt,_t,pt,0,$,Et,null),_t>>=1,pt>>=1}}else if(Vt.length>0){if(k&&Rt){const _t=qt(Vt[0]);i.texStorage2D(r.TEXTURE_2D,Ut,bt,_t.width,_t.height)}for(let _t=0,pt=Vt.length;_t<pt;_t++)At=Vt[_t],k?wt&&i.texSubImage2D(r.TEXTURE_2D,_t,0,0,$,Et,At):i.texImage2D(r.TEXTURE_2D,_t,bt,$,Et,At);b.generateMipmaps=!1}else if(k){if(Rt){const _t=qt(Ct);i.texStorage2D(r.TEXTURE_2D,Ut,bt,_t.width,_t.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,$,Et,Ct)}else i.texImage2D(r.TEXTURE_2D,0,bt,$,Et,Ct);y(b)&&v(gt),Yt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ut(I,b,j){if(b.image.length!==6)return;const gt=dt(I,b),Tt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+j);const ht=s.get(Tt);if(Tt.version!==ht.__version||gt===!0){i.activeTexture(r.TEXTURE0+j);const Yt=we.getPrimaries(we.workingColorSpace),Nt=b.colorSpace===is?null:we.getPrimaries(b.colorSpace),Wt=b.colorSpace===is||Yt===Nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const te=b.isCompressedTexture||b.image[0].isCompressedTexture,Ct=b.image[0]&&b.image[0].isDataTexture,$=[];for(let pt=0;pt<6;pt++)!te&&!Ct?$[pt]=T(b.image[pt],!0,l.maxCubemapSize):$[pt]=Ct?b.image[pt].image:b.image[pt],$[pt]=Ae(b,$[pt]);const Et=$[0],bt=c.convert(b.format,b.colorSpace),At=c.convert(b.type),Vt=U(b.internalFormat,bt,At,b.colorSpace),k=b.isVideoTexture!==!0,Rt=ht.__version===void 0||gt===!0,wt=Tt.dataReady;let Ut=N(b,Et);J(r.TEXTURE_CUBE_MAP,b);let _t;if(te){k&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,Vt,Et.width,Et.height);for(let pt=0;pt<6;pt++){_t=$[pt].mipmaps;for(let Lt=0;Lt<_t.length;Lt++){const se=_t[Lt];b.format!==Li?bt!==null?k?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,0,0,se.width,se.height,bt,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,Vt,se.width,se.height,0,se.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,0,0,se.width,se.height,bt,At,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,Vt,se.width,se.height,0,bt,At,se.data)}}}else{if(_t=b.mipmaps,k&&Rt){_t.length>0&&Ut++;const pt=qt($[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,Vt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Ct){k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$[pt].width,$[pt].height,bt,At,$[pt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Vt,$[pt].width,$[pt].height,0,bt,At,$[pt].data);for(let Lt=0;Lt<_t.length;Lt++){const ze=_t[Lt].image[pt].image;k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,0,0,ze.width,ze.height,bt,At,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,Vt,ze.width,ze.height,0,bt,At,ze.data)}}else{k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,bt,At,$[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Vt,bt,At,$[pt]);for(let Lt=0;Lt<_t.length;Lt++){const se=_t[Lt];k?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,0,0,bt,At,se.image[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,Vt,bt,At,se.image[pt])}}}y(b)&&v(r.TEXTURE_CUBE_MAP),ht.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ot(I,b,j,gt,Tt,ht){const Yt=c.convert(j.format,j.colorSpace),Nt=c.convert(j.type),Wt=U(j.internalFormat,Yt,Nt,j.colorSpace),te=s.get(b),Ct=s.get(j);if(Ct.__renderTarget=b,!te.__hasExternalTextures){const $=Math.max(1,b.width>>ht),Et=Math.max(1,b.height>>ht);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?i.texImage3D(Tt,ht,Wt,$,Et,b.depth,0,Yt,Nt,null):i.texImage2D(Tt,ht,Wt,$,Et,0,Yt,Nt,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),qe(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,Tt,Ct.__webglTexture,0,W(b)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,Tt,Ct.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(I,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,I),b.depthBuffer){const gt=b.depthTexture,Tt=gt&&gt.isDepthTexture?gt.type:null,ht=R(b.stencilBuffer,Tt),Yt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(b),ht,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,I)}else{const gt=b.textures;for(let Tt=0;Tt<gt.length;Tt++){const ht=gt[Tt],Yt=c.convert(ht.format,ht.colorSpace),Nt=c.convert(ht.type),Wt=U(ht.internalFormat,Yt,Nt,ht.colorSpace);qe(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(b),Wt,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(b),Wt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(I,b,j){const gt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=s.get(b.depthTexture);if(Tt.__renderTarget=b,(!Tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),gt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),Tt.__webglTexture===void 0){Tt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),J(r.TEXTURE_CUBE_MAP,b.depthTexture);const te=c.convert(b.depthTexture.format),Ct=c.convert(b.depthTexture.type);let $;b.depthTexture.format===Ea?$=r.DEPTH_COMPONENT24:b.depthTexture.format===Ns&&($=r.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,$,b.width,b.height,0,te,Ct,null)}}else tt(b.depthTexture,0);const ht=Tt.__webglTexture,Yt=W(b),Nt=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Wt=b.depthTexture.format===Ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ea)qe(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Nt,ht,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Nt,ht,0);else if(b.depthTexture.format===Ns)qe(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Nt,ht,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Nt,ht,0);else throw new Error("Unknown depthTexture format")}function pe(I){const b=s.get(I),j=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const gt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",Tt)};gt.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=gt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let gt=0;gt<6;gt++)Gt(b.__webglFramebuffer[gt],I,gt);else{const gt=I.texture.mipmaps;gt&&gt.length>0?Gt(b.__webglFramebuffer[0],I,0):Gt(b.__webglFramebuffer,I,0)}else if(j){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=r.createRenderbuffer(),Ht(b.__webglDepthbuffer[gt],I,!1);else{const Tt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,ht)}}else{const gt=I.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ht(b.__webglDepthbuffer,I,!1);else{const Tt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(I,b,j){const gt=s.get(I);b!==void 0&&Ot(gt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&pe(I)}function ge(I){const b=I.texture,j=s.get(I),gt=s.get(b);I.addEventListener("dispose",P);const Tt=I.textures,ht=I.isWebGLCubeRenderTarget===!0,Yt=Tt.length>1;if(Yt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=b.version,f.memory.textures++),ht){j.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Nt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)j.__webglFramebuffer[Nt][Wt]=r.createFramebuffer()}else j.__webglFramebuffer[Nt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)j.__webglFramebuffer[Nt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Nt=0,Wt=Tt.length;Nt<Wt;Nt++){const te=s.get(Tt[Nt]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&qe(I)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Tt.length;Nt++){const Wt=Tt[Nt];j.__webglColorRenderbuffer[Nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Nt]);const te=c.convert(Wt.format,Wt.colorSpace),Ct=c.convert(Wt.type),$=U(Wt.internalFormat,te,Ct,Wt.colorSpace,I.isXRRenderTarget===!0),Et=W(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,$,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,j.__webglColorRenderbuffer[Nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(j.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),J(r.TEXTURE_CUBE_MAP,b);for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Ot(j.__webglFramebuffer[Nt][Wt],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Wt);else Ot(j.__webglFramebuffer[Nt],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);y(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Nt=0,Wt=Tt.length;Nt<Wt;Nt++){const te=Tt[Nt],Ct=s.get(te);let $=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture($,Ct.__webglTexture),J($,te),Ot(j.__webglFramebuffer,I,te,r.COLOR_ATTACHMENT0+Nt,$,0),y(te)&&v($)}i.unbindTexture()}else{let Nt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Nt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,gt.__webglTexture),J(Nt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Ot(j.__webglFramebuffer[Wt],I,b,r.COLOR_ATTACHMENT0,Nt,Wt);else Ot(j.__webglFramebuffer,I,b,r.COLOR_ATTACHMENT0,Nt,0);y(b)&&v(Nt),i.unbindTexture()}I.depthBuffer&&pe(I)}function me(I){const b=I.textures;for(let j=0,gt=b.length;j<gt;j++){const Tt=b[j];if(y(Tt)){const ht=C(I),Yt=s.get(Tt).__webglTexture;i.bindTexture(ht,Yt),v(ht),i.unbindTexture()}}}const Te=[],re=[];function je(I){if(I.samples>0){if(qe(I)===!1){const b=I.textures,j=I.width,gt=I.height;let Tt=r.COLOR_BUFFER_BIT;const ht=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(I),Nt=b.length>1;if(Nt)for(let te=0;te<b.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Wt=I.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let te=0;te<b.length;te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),Nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[te]);const Ct=s.get(b[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,j,gt,0,0,j,gt,Tt,r.NEAREST),m===!0&&(Te.length=0,re.length=0,Te.push(r.COLOR_ATTACHMENT0+te),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Te.push(ht),re.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Nt)for(let te=0;te<b.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[te]);const Ct=s.get(b[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function W(I){return Math.min(l.maxSamples,I.samples)}function qe(I){const b=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(I){const b=f.render.frame;g.get(I)!==b&&(g.set(I,b),I.update())}function Ae(I,b){const j=I.colorSpace,gt=I.format,Tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Hr&&j!==is&&(we.getTransfer(j)===He?(gt!==Li||Tt!==oi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",j)),b}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=et,this.rebindTextures=Je,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BA(r,t){function i(s,l=is){let c;const f=we.getTransfer(l);if(s===oi)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Bv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Hv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fv)return r.BYTE;if(s===Iv)return r.SHORT;if(s===Jo)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===Gv)return r.ALPHA;if(s===Vv)return r.RGB;if(s===Li)return r.RGBA;if(s===Ea)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===kv)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Br)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===kc||s===Xc||s===Wc||s===qc)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===vd||s===xd||s===yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===Md)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ed)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===bd)return c.COMPRESSED_R11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ad)return c.COMPRESSED_RG11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Cd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ld)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wd||s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$o?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ex(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Yi({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new ou(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends Ps{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,d=null,g=null,_=null,x=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",y=new VA,v={},C=i.getContextAttributes();let U=null,R=null;const N=[],z=[],P=new le;let X=null;const A=new yi;A.viewport=new sn;const L=new yi;L.viewport=new sn;const V=[A,L],Y=new QM;let Z=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=N[it];return ut===void 0&&(ut=new kh,N[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=N[it];return ut===void 0&&(ut=new kh,N[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=N[it];return ut===void 0&&(ut=new kh,N[it]=ut),ut.getHandSpace()};function tt(it){const ut=z.indexOf(it.inputSource);if(ut===-1)return;const Ot=N[ut];Ot!==void 0&&(Ot.update(it.inputSource,it.frame,d||f),Ot.dispatchEvent({type:it.type,data:it.inputSource}))}function O(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let it=0;it<N.length;it++){const ut=z[it];ut!==null&&(z[it]=null,N[it].disconnect(ut))}Z=null,at=null,y.reset();for(const it in v)delete v[it];t.setRenderTarget(U),S=null,x=null,_=null,l=null,R=null,Pt.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Ht=null,Gt=null;C.depth&&(Gt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ot=C.stencil?Ns:Ea,Ht=C.stencil?$o:Wi);const pe={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(pe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),R=new ki(x.textureWidth,x.textureHeight,{format:Li,type:oi,depthTexture:new el(x.textureWidth,x.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ot={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ot),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new ki(S.framebufferWidth,S.framebufferHeight,{format:Li,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(h),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(it){for(let ut=0;ut<it.removed.length;ut++){const Ot=it.removed[ut],Ht=z.indexOf(Ot);Ht>=0&&(z[Ht]=null,N[Ht].disconnect(Ot))}for(let ut=0;ut<it.added.length;ut++){const Ot=it.added[ut];let Ht=z.indexOf(Ot);if(Ht===-1){for(let pe=0;pe<N.length;pe++)if(pe>=z.length){z.push(Ot),Ht=pe;break}else if(z[pe]===null){z[pe]=Ot,Ht=pe;break}if(Ht===-1)break}const Gt=N[Ht];Gt&&Gt.connect(Ot)}}const et=new B,yt=new B;function xt(it,ut,Ot){et.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(Ot.matrixWorld);const Ht=et.distanceTo(yt),Gt=ut.projectionMatrix.elements,pe=Ot.projectionMatrix.elements,Je=Gt[14]/(Gt[10]-1),ge=Gt[14]/(Gt[10]+1),me=(Gt[9]+1)/Gt[5],Te=(Gt[9]-1)/Gt[5],re=(Gt[8]-1)/Gt[0],je=(pe[8]+1)/pe[0],W=Je*re,qe=Je*je,ye=Ht/(-re+je),Ae=ye*-re;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ae),it.translateZ(ye),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Gt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=Je+ye,I=ge+ye,b=W-Ae,j=qe+(Ht-Ae),gt=me*ge/I*qt,Tt=Te*ge/I*qt;it.projectionMatrix.makePerspective(b,j,gt,Tt,qt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ut=it.near,Ot=it.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Ot=y.depthFar)),Y.near=L.near=A.near=ut,Y.far=L.far=A.far=Ot,(Z!==Y.near||at!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Z=Y.near,at=Y.far),Y.layers.mask=it.layers.mask|6,A.layers.mask=Y.layers.mask&3,L.layers.mask=Y.layers.mask&5;const Ht=it.parent,Gt=Y.cameras;F(Y,Ht);for(let pe=0;pe<Gt.length;pe++)F(Gt[pe],Ht);Gt.length===2?xt(Y,A,L):Y.projectionMatrix.copy(A.projectionMatrix),J(it,Y,Ht)};function J(it,ut,Ot){Ot===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Ot.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(it){return v[it]};let dt=null;function Dt(it,ut){if(g=ut.getViewerPose(d||f),E=ut,g!==null){const Ot=g.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let Ht=!1;Ot.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let ge=0;ge<Ot.length;ge++){const me=Ot[ge];let Te=null;if(S!==null)Te=S.getViewport(me);else{const je=_.getViewSubImage(x,me);Te=je.viewport,ge===0&&(t.setRenderTargetTextures(R,je.colorTexture,je.depthStencilTexture),t.setRenderTarget(R))}let re=V[ge];re===void 0&&(re=new yi,re.layers.enable(ge),re.viewport=new sn,V[ge]=re),re.matrix.fromArray(me.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(me.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Te.x,Te.y,Te.width,Te.height),ge===0&&(Y.matrix.copy(re.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(re)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const ge=_.getDepthInformation(Ot[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(Gt&&Gt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let ge=0;ge<Ot.length;ge++){const me=Ot[ge].camera;if(me){let Te=v[me];Te||(Te=new ex,v[me]=Te);const re=_.getCameraImage(me);Te.sourceTexture=re}}}}for(let Ot=0;Ot<N.length;Ot++){const Ht=z[Ot],Gt=N[Ot];Ht!==null&&Gt!==void 0&&Gt.update(Ht,ut,d||f)}dt&&dt(it,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Pt=new ax;Pt.setAnimationLoop(Dt),this.setAnimationLoop=function(it){dt=it},this.dispose=function(){}}}const ws=new qi,XA=new Qe;function WA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Kv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,C,U,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,C,U):v.isSpriteMaterial?d(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Qn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Qn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const C=t.get(v),U=C.envMap,R=C.envMapRotation;U&&(y.envMap.value=U,ws.copy(R),ws.x*=-1,ws.y*=-1,ws.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),y.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(ws)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,C,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*C,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,C){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const C=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const R=U.program;s.uniformBlockBinding(C,R)}function d(C,U){let R=l[C.id];R===void 0&&(E(C),R=g(C),l[C.id]=R,C.addEventListener("dispose",y));const N=U.program;s.updateUBOMapping(C,N);const z=t.render.frame;c[C.id]!==z&&(x(C),c[C.id]=z)}function g(C){const U=_();C.__bindingPointIndex=U;const R=r.createBuffer(),N=C.__size,z=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,N,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,R),R}function _(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const U=l[C.id],R=C.uniforms,N=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let z=0,P=R.length;z<P;z++){const X=Array.isArray(R[z])?R[z]:[R[z]];for(let A=0,L=X.length;A<L;A++){const V=X[A];if(S(V,z,A,N)===!0){const Y=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let at=0;for(let tt=0;tt<Z.length;tt++){const O=Z[tt],H=T(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,Y+at,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,at),at+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,U,R,N){const z=C.value,P=U+"_"+R;if(N[P]===void 0)return typeof z=="number"||typeof z=="boolean"?N[P]=z:N[P]=z.clone(),!0;{const X=N[P];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return N[P]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function E(C){const U=C.uniforms;let R=0;const N=16;for(let P=0,X=U.length;P<X;P++){const A=Array.isArray(U[P])?U[P]:[U[P]];for(let L=0,V=A.length;L<V;L++){const Y=A[L],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let at=0,tt=Z.length;at<tt;at++){const O=Z[at],H=T(O),et=R%N,yt=et%H.boundary,xt=et+yt;R+=yt,xt!==0&&N-xt<H.storage&&(R+=N-xt),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=R,R+=H.storage}}}const z=R%N;return z>0&&(R+=N-z),C.__size=R,C.__cache={},this}function T(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",C),U}function y(C){const U=C.target;U.removeEventListener("dispose",y);const R=f.indexOf(U.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:d,dispose:v}}const YA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function jA(){return Ii===null&&(Ii=new IM(YA,16,16,Br,Ma),Ii.name="DFG_LUT",Ii.minFilter=In,Ii.magFilter=In,Ii.wrapS=xa,Ii.wrapT=xa,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class ZA{constructor(t={}){const{canvas:i=uM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:S=oi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const T=S,y=new Set([hp,fp,up]),v=new Set([oi,Wi,Jo,$o,lp,cp]),C=new Uint32Array(4),U=new Int32Array(4);let R=null,N=null;const z=[],P=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=xi;let V=0,Y=0,Z=null,at=-1,tt=null;const O=new sn,H=new sn;let et=null;const yt=new be(0);let xt=0,F=i.width,J=i.height,dt=1,Dt=null,Pt=null;const it=new sn(0,0,F,J),ut=new sn(0,0,F,J);let Ot=!1;const Ht=new _p;let Gt=!1,pe=!1;const Je=new Qe,ge=new B,me=new sn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function je(){return Z===null?dt:1}let W=s;function qe(D,K){return i.getContext(D,K)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",se,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Re,!1),W===null){const K="webgl2";if(W=qe(K,D),W===null)throw qe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Ce("WebGLRenderer: "+D.message),D}let ye,Ae,qt,I,b,j,gt,Tt,ht,Yt,Nt,Wt,te,Ct,$,Et,bt,At,Vt,k,Rt,wt,Ut,_t;function pt(){ye=new j1(W),ye.init(),wt=new BA(W,ye),Ae=new B1(W,ye,t,wt),qt=new FA(W,ye),Ae.reversedDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),I=new Q1(W),b=new MA,j=new IA(W,ye,qt,b,Ae,wt,I),gt=new G1(A),Tt=new Y1(A),ht=new eE(W),Ut=new F1(W,ht),Yt=new Z1(W,ht,I,Ut),Nt=new $1(W,Yt,ht,I),Vt=new J1(W,Ae,j),Et=new H1(b),Wt=new SA(A,gt,Tt,ye,Ae,Ut,Et),te=new WA(A,b),Ct=new bA,$=new DA(ye),At=new z1(A,gt,Tt,qt,Nt,E,m),bt=new PA(A,Nt,Ae),_t=new qA(W,I,Ae,qt),k=new I1(W,ye,I),Rt=new K1(W,ye,I),I.programs=Wt.programs,A.capabilities=Ae,A.extensions=ye,A.properties=b,A.renderLists=Ct,A.shadowMap=bt,A.state=qt,A.info=I}pt(),T!==oi&&(X=new eT(T,i.width,i.height,l,c));const Lt=new kA(A,W);this.xr=Lt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(D){D!==void 0&&(dt=D,this.setSize(F,J,!1))},this.getSize=function(D){return D.set(F,J)},this.setSize=function(D,K,ct=!0){if(Lt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,J=K,i.width=Math.floor(D*dt),i.height=Math.floor(K*dt),ct===!0&&(i.style.width=D+"px",i.style.height=K+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(F*dt,J*dt).floor()},this.setDrawingBufferSize=function(D,K,ct){F=D,J=K,dt=ct,i.width=Math.floor(D*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,D,K)},this.setEffects=function(D){if(T===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let K=0;K<D.length;K++)if(D[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(O)},this.getViewport=function(D){return D.copy(it)},this.setViewport=function(D,K,ct,ot){D.isVector4?it.set(D.x,D.y,D.z,D.w):it.set(D,K,ct,ot),qt.viewport(O.copy(it).multiplyScalar(dt).round())},this.getScissor=function(D){return D.copy(ut)},this.setScissor=function(D,K,ct,ot){D.isVector4?ut.set(D.x,D.y,D.z,D.w):ut.set(D,K,ct,ot),qt.scissor(H.copy(ut).multiplyScalar(dt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(D){qt.setScissorTest(Ot=D)},this.setOpaqueSort=function(D){Dt=D},this.setTransparentSort=function(D){Pt=D},this.getClearColor=function(D){return D.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ct=!0){let ot=0;if(D){let nt=!1;if(Z!==null){const zt=Z.texture.format;nt=y.has(zt)}if(nt){const zt=Z.texture.type,Bt=v.has(zt),Ft=At.getClearColor(),kt=At.getClearAlpha(),Zt=Ft.r,ee=Ft.g,Kt=Ft.b;Bt?(C[0]=Zt,C[1]=ee,C[2]=Kt,C[3]=kt,W.clearBufferuiv(W.COLOR,0,C)):(U[0]=Zt,U[1]=ee,U[2]=Kt,U[3]=kt,W.clearBufferiv(W.COLOR,0,U))}else ot|=W.COLOR_BUFFER_BIT}K&&(ot|=W.DEPTH_BUFFER_BIT),ct&&(ot|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",se,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),At.dispose(),Ct.dispose(),$.dispose(),b.dispose(),gt.dispose(),Tt.dispose(),Nt.dispose(),Ut.dispose(),_t.dispose(),Wt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Fs),Lt.removeEventListener("sessionend",qr),Ni.stop()};function se(D){D.preventDefault(),S_("WebGLRenderer: Context Lost."),L=!0}function ze(){S_("WebGLRenderer: Context Restored."),L=!1;const D=I.autoReset,K=bt.enabled,ct=bt.autoUpdate,ot=bt.needsUpdate,nt=bt.type;pt(),I.autoReset=D,bt.enabled=K,bt.autoUpdate=ct,bt.needsUpdate=ot,bt.type=nt}function Re(D){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function On(D){const K=D.target;K.removeEventListener("dispose",On),Mi(K)}function Mi(D){sl(D),b.remove(D)}function sl(D){const K=b.get(D).programs;K!==void 0&&(K.forEach(function(ct){Wt.releaseProgram(ct)}),D.isShaderMaterial&&Wt.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ct,ot,nt,zt){K===null&&(K=Te);const Bt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ft=rs(D,K,ct,ot,nt);qt.setMaterial(ot,Bt);let kt=ct.index,Zt=1;if(ot.wireframe===!0){if(kt=Yt.getWireframeAttribute(ct),kt===void 0)return;Zt=2}const ee=ct.drawRange,Kt=ct.attributes.position;let ne=ee.start*Zt,Le=(ee.start+ee.count)*Zt;zt!==null&&(ne=Math.max(ne,zt.start*Zt),Le=Math.min(Le,(zt.start+zt.count)*Zt)),kt!==null?(ne=Math.max(ne,0),Le=Math.min(Le,kt.count)):Kt!=null&&(ne=Math.max(ne,0),Le=Math.min(Le,Kt.count));const $e=Le-ne;if($e<0||$e===1/0)return;Ut.setup(nt,ot,Ft,ct,kt);let Ye,Pe=k;if(kt!==null&&(Ye=ht.get(kt),Pe=Rt,Pe.setIndex(Ye)),nt.isMesh)ot.wireframe===!0?(qt.setLineWidth(ot.wireframeLinewidth*je()),Pe.setMode(W.LINES)):Pe.setMode(W.TRIANGLES);else if(nt.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),qt.setLineWidth(Jt*je()),nt.isLineSegments?Pe.setMode(W.LINES):nt.isLineLoop?Pe.setMode(W.LINE_LOOP):Pe.setMode(W.LINE_STRIP)}else nt.isPoints?Pe.setMode(W.POINTS):nt.isSprite&&Pe.setMode(W.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Pe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Jt=nt._multiDrawStarts,Ne=nt._multiDrawCounts,oe=nt._multiDrawCount,bn=kt?ht.get(kt).bytesPerElement:1,ji=b.get(ot).currentProgram.getUniforms();for(let Tn=0;Tn<oe;Tn++)ji.setValue(W,"_gl_DrawID",Tn),Pe.render(Jt[Tn]/bn,Ne[Tn])}else if(nt.isInstancedMesh)Pe.renderInstances(ne,$e,nt.count);else if(ct.isInstancedBufferGeometry){const Jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ne=Math.min(ct.instanceCount,Jt);Pe.renderInstances(ne,$e,Ne)}else Pe.render(ne,$e)};function Xr(D,K,ct){D.transparent===!0&&D.side===va&&D.forceSinglePass===!1?(D.side=Qn,D.needsUpdate=!0,Bs(D,K,ct),D.side=ss,D.needsUpdate=!0,Bs(D,K,ct),D.side=va):Bs(D,K,ct)}this.compile=function(D,K,ct=null){ct===null&&(ct=D),N=$.get(ct),N.init(K),P.push(N),ct.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),D!==ct&&D.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(N.pushLight(nt),nt.castShadow&&N.pushShadow(nt))}),N.setupLights();const ot=new Set;return D.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const zt=nt.material;if(zt)if(Array.isArray(zt))for(let Bt=0;Bt<zt.length;Bt++){const Ft=zt[Bt];Xr(Ft,ct,nt),ot.add(Ft)}else Xr(zt,ct,nt),ot.add(zt)}),N=P.pop(),ot},this.compileAsync=function(D,K,ct=null){const ot=this.compile(D,K,ct);return new Promise(nt=>{function zt(){if(ot.forEach(function(Bt){b.get(Bt).currentProgram.isReady()&&ot.delete(Bt)}),ot.size===0){nt(D);return}setTimeout(zt,10)}ye.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let zs=null;function Wr(D){zs&&zs(D)}function Fs(){Ni.stop()}function qr(){Ni.start()}const Ni=new ax;Ni.setAnimationLoop(Wr),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(D){zs=D,Lt.setAnimationLoop(D),D===null?Ni.stop():Ni.start()},Lt.addEventListener("sessionstart",Fs),Lt.addEventListener("sessionend",qr),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ct=Lt.enabled===!0&&Lt.isPresenting===!0,ot=X!==null&&(Z===null||ct)&&X.begin(A,Z);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(K),K=Lt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,K,Z),N=$.get(D,P.length),N.init(K),P.push(N),Je.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ht.setFromProjectionMatrix(Je,Gi,K.reversedDepth),pe=this.localClippingEnabled,Gt=Et.init(this.clippingPlanes,pe),R=Ct.get(D,z.length),R.init(),z.push(R),Lt.enabled===!0&&Lt.isPresenting===!0){const Bt=A.xr.getDepthSensingMesh();Bt!==null&&li(Bt,K,-1/0,A.sortObjects)}li(D,K,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(Dt,Pt),re=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,re&&At.addToRenderList(R,D),this.info.render.frame++,Gt===!0&&Et.beginShadows();const nt=N.state.shadowsArray;if(bt.render(nt,D,K),Gt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&X.hasRenderPass())===!1){const Bt=R.opaque,Ft=R.transmissive;if(N.setupLights(),K.isArrayCamera){const kt=K.cameras;if(Ft.length>0)for(let Zt=0,ee=kt.length;Zt<ee;Zt++){const Kt=kt[Zt];En(Bt,Ft,D,Kt)}re&&At.render(D);for(let Zt=0,ee=kt.length;Zt<ee;Zt++){const Kt=kt[Zt];ln(R,D,Kt,Kt.viewport)}}else Ft.length>0&&En(Bt,Ft,D,K),re&&At.render(D),ln(R,D,K)}Z!==null&&Y===0&&(j.updateMultisampleRenderTarget(Z),j.updateRenderTargetMipmap(Z)),ot&&X.end(A),D.isScene===!0&&D.onAfterRender(A,D,K),Ut.resetDefaultState(),at=-1,tt=null,P.pop(),P.length>0?(N=P[P.length-1],Gt===!0&&Et.setGlobalState(A.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?R=z[z.length-1]:R=null};function li(D,K,ct,ot){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)N.pushLight(D),D.castShadow&&N.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Ht.intersectsSprite(D)){ot&&me.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Je);const Bt=Nt.update(D),Ft=D.material;Ft.visible&&R.push(D,Bt,Ft,ct,me.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Ht.intersectsObject(D))){const Bt=Nt.update(D),Ft=D.material;if(ot&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),me.copy(D.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),me.copy(Bt.boundingSphere.center)),me.applyMatrix4(D.matrixWorld).applyMatrix4(Je)),Array.isArray(Ft)){const kt=Bt.groups;for(let Zt=0,ee=kt.length;Zt<ee;Zt++){const Kt=kt[Zt],ne=Ft[Kt.materialIndex];ne&&ne.visible&&R.push(D,Bt,ne,ct,me.z,Kt)}}else Ft.visible&&R.push(D,Bt,Ft,ct,me.z,null)}}const zt=D.children;for(let Bt=0,Ft=zt.length;Bt<Ft;Bt++)li(zt[Bt],K,ct,ot)}function ln(D,K,ct,ot){const{opaque:nt,transmissive:zt,transparent:Bt}=D;N.setupLightsView(ct),Gt===!0&&Et.setGlobalState(A.clippingPlanes,ct),ot&&qt.viewport(O.copy(ot)),nt.length>0&&Ei(nt,K,ct),zt.length>0&&Ei(zt,K,ct),Bt.length>0&&Ei(Bt,K,ct),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function En(D,K,ct,ot){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ot.id]===void 0){const ne=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ot.id]=new ki(1,1,{generateMipmaps:!0,type:ne?Ma:oi,minFilter:Ls,samples:Ae.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const zt=N.state.transmissionRenderTarget[ot.id],Bt=ot.viewport||O;zt.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),kt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(zt),A.getClearColor(yt),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),re&&At.render(ct);const ee=A.toneMapping;A.toneMapping=Vi;const Kt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),N.setupLightsView(ot),Gt===!0&&Et.setGlobalState(A.clippingPlanes,ot),Ei(D,ct,ot),j.updateMultisampleRenderTarget(zt),j.updateRenderTargetMipmap(zt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Le=0,$e=K.length;Le<$e;Le++){const Ye=K[Le],{object:Pe,geometry:Jt,material:Ne,group:oe}=Ye;if(Ne.side===va&&Pe.layers.test(ot.layers)){const bn=Ne.side;Ne.side=Qn,Ne.needsUpdate=!0,Is(Pe,ct,ot,Jt,Ne,oe),Ne.side=bn,Ne.needsUpdate=!0,ne=!0}}ne===!0&&(j.updateMultisampleRenderTarget(zt),j.updateRenderTargetMipmap(zt))}A.setRenderTarget(Ft,kt,Zt),A.setClearColor(yt,xt),Kt!==void 0&&(ot.viewport=Kt),A.toneMapping=ee}function Ei(D,K,ct){const ot=K.isScene===!0?K.overrideMaterial:null;for(let nt=0,zt=D.length;nt<zt;nt++){const Bt=D[nt],{object:Ft,geometry:kt,group:Zt}=Bt;let ee=Bt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Ft.layers.test(ct.layers)&&Is(Ft,K,ct,kt,ee,Zt)}}function Is(D,K,ct,ot,nt,zt){D.onBeforeRender(A,K,ct,ot,nt,zt),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),nt.onBeforeRender(A,K,ct,ot,D,zt),nt.transparent===!0&&nt.side===va&&nt.forceSinglePass===!1?(nt.side=Qn,nt.needsUpdate=!0,A.renderBufferDirect(ct,K,ot,nt,D,zt),nt.side=ss,nt.needsUpdate=!0,A.renderBufferDirect(ct,K,ot,nt,D,zt),nt.side=va):A.renderBufferDirect(ct,K,ot,nt,D,zt),D.onAfterRender(A,K,ct,ot,nt,zt)}function Bs(D,K,ct){K.isScene!==!0&&(K=Te);const ot=b.get(D),nt=N.state.lights,zt=N.state.shadowsArray,Bt=nt.state.version,Ft=Wt.getParameters(D,nt.state,zt,K,ct),kt=Wt.getProgramCacheKey(Ft);let Zt=ot.programs;ot.environment=D.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(D.isMeshStandardMaterial?Tt:gt).get(D.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,Zt===void 0&&(D.addEventListener("dispose",On),Zt=new Map,ot.programs=Zt);let ee=Zt.get(kt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Bt)return Yr(D,Ft),ee}else Ft.uniforms=Wt.getUniforms(D),D.onBeforeCompile(Ft,A),ee=Wt.acquireProgram(Ft,kt),Zt.set(kt,ee),ot.uniforms=Ft.uniforms;const Kt=ot.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Kt.clippingPlanes=Et.uniform),Yr(D,Ft),ot.needsLights=Ta(D),ot.lightsStateVersion=Bt,ot.needsLights&&(Kt.ambientLightColor.value=nt.state.ambient,Kt.lightProbe.value=nt.state.probe,Kt.directionalLights.value=nt.state.directional,Kt.directionalLightShadows.value=nt.state.directionalShadow,Kt.spotLights.value=nt.state.spot,Kt.spotLightShadows.value=nt.state.spotShadow,Kt.rectAreaLights.value=nt.state.rectArea,Kt.ltc_1.value=nt.state.rectAreaLTC1,Kt.ltc_2.value=nt.state.rectAreaLTC2,Kt.pointLights.value=nt.state.point,Kt.pointLightShadows.value=nt.state.pointShadow,Kt.hemisphereLights.value=nt.state.hemi,Kt.directionalShadowMap.value=nt.state.directionalShadowMap,Kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Kt.spotShadowMap.value=nt.state.spotShadowMap,Kt.spotLightMatrix.value=nt.state.spotLightMatrix,Kt.spotLightMap.value=nt.state.spotLightMap,Kt.pointShadowMap.value=nt.state.pointShadowMap,Kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function rl(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=jc.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Yr(D,K){const ct=b.get(D);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function rs(D,K,ct,ot,nt){K.isScene!==!0&&(K=Te),j.resetTextureUnits();const zt=K.fog,Bt=ot.isMeshStandardMaterial?K.environment:null,Ft=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Hr,kt=(ot.isMeshStandardMaterial?Tt:gt).get(ot.envMap||Bt),Zt=ot.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ee=!!ct.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Kt=!!ct.morphAttributes.position,ne=!!ct.morphAttributes.normal,Le=!!ct.morphAttributes.color;let $e=Vi;ot.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&($e=A.toneMapping);const Ye=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Pe=Ye!==void 0?Ye.length:0,Jt=b.get(ot),Ne=N.state.lights;if(Gt===!0&&(pe===!0||D!==tt)){const Rn=D===tt&&ot.id===at;Et.setState(ot,D,Rn)}let oe=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ne.state.version||Jt.outputColorSpace!==Ft||nt.isBatchedMesh&&Jt.batching===!1||!nt.isBatchedMesh&&Jt.batching===!0||nt.isBatchedMesh&&Jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Jt.instancing===!1||!nt.isInstancedMesh&&Jt.instancing===!0||nt.isSkinnedMesh&&Jt.skinning===!1||!nt.isSkinnedMesh&&Jt.skinning===!0||nt.isInstancedMesh&&Jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Jt.instancingMorph===!1&&nt.morphTexture!==null||Jt.envMap!==kt||ot.fog===!0&&Jt.fog!==zt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Et.numPlanes||Jt.numIntersection!==Et.numIntersection)||Jt.vertexAlphas!==Zt||Jt.vertexTangents!==ee||Jt.morphTargets!==Kt||Jt.morphNormals!==ne||Jt.morphColors!==Le||Jt.toneMapping!==$e||Jt.morphTargetsCount!==Pe)&&(oe=!0):(oe=!0,Jt.__version=ot.version);let bn=Jt.currentProgram;oe===!0&&(bn=Bs(ot,K,nt));let ji=!1,Tn=!1,ci=!1;const Fe=bn.getUniforms(),An=Jt.uniforms;if(qt.useProgram(bn.program)&&(ji=!0,Tn=!0,ci=!0),ot.id!==at&&(at=ot.id,Tn=!0),ji||tt!==D){qt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Fe.setValue(W,"projectionMatrix",D.projectionMatrix),Fe.setValue(W,"viewMatrix",D.matrixWorldInverse);const Cn=Fe.map.cameraPosition;Cn!==void 0&&Cn.setValue(W,ge.setFromMatrixPosition(D.matrixWorld)),Ae.logarithmicDepthBuffer&&Fe.setValue(W,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Fe.setValue(W,"isOrthographic",D.isOrthographicCamera===!0),tt!==D&&(tt=D,Tn=!0,ci=!0)}if(Jt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Fe.setValue(W,"directionalShadowMap",Ne.state.directionalShadowMap,j),Ne.state.spotShadowMap.length>0&&Fe.setValue(W,"spotShadowMap",Ne.state.spotShadowMap,j),Ne.state.pointShadowMap.length>0&&Fe.setValue(W,"pointShadowMap",Ne.state.pointShadowMap,j)),nt.isSkinnedMesh){Fe.setOptional(W,nt,"bindMatrix"),Fe.setOptional(W,nt,"bindMatrixInverse");const Rn=nt.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Fe.setValue(W,"boneTexture",Rn.boneTexture,j))}nt.isBatchedMesh&&(Fe.setOptional(W,nt,"batchingTexture"),Fe.setValue(W,"batchingTexture",nt._matricesTexture,j),Fe.setOptional(W,nt,"batchingIdTexture"),Fe.setValue(W,"batchingIdTexture",nt._indirectTexture,j),Fe.setOptional(W,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Fe.setValue(W,"batchingColorTexture",nt._colorsTexture,j));const mn=ct.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Vt.update(nt,ct,bn),(Tn||Jt.receiveShadow!==nt.receiveShadow)&&(Jt.receiveShadow=nt.receiveShadow,Fe.setValue(W,"receiveShadow",nt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=kt,An.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(An.envMapIntensity.value=K.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=jA()),Tn&&(Fe.setValue(W,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&jr(An,ci),zt&&ot.fog===!0&&te.refreshFogUniforms(An,zt),te.refreshMaterialUniforms(An,ot,dt,J,N.state.transmissionRenderTarget[D.id]),jc.upload(W,rl(Jt),An,j)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(jc.upload(W,rl(Jt),An,j),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Fe.setValue(W,"center",nt.center),Fe.setValue(W,"modelViewMatrix",nt.modelViewMatrix),Fe.setValue(W,"normalMatrix",nt.normalMatrix),Fe.setValue(W,"modelMatrix",nt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Rn=ot.uniformsGroups;for(let Cn=0,Hs=Rn.length;Cn<Hs;Cn++){const bi=Rn[Cn];_t.update(bi,bn),_t.bind(bi,bn)}}return bn}function jr(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function Ta(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(D,K,ct){const ot=b.get(D);ot.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),b.get(D.texture).__webglTexture=K,b.get(D.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ct,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const ct=b.get(D);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const Aa=W.createFramebuffer();this.setRenderTarget=function(D,K=0,ct=0){Z=D,V=K,Y=ct;let ot=null,nt=!1,zt=!1;if(D){const Ft=b.get(D);if(Ft.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(W.FRAMEBUFFER,Ft.__webglFramebuffer),O.copy(D.viewport),H.copy(D.scissor),et=D.scissorTest,qt.viewport(O),qt.scissor(H),qt.setScissorTest(et),at=-1;return}else if(Ft.__webglFramebuffer===void 0)j.setupRenderTarget(D);else if(Ft.__hasExternalTextures)j.rebindTextures(D,b.get(D.texture).__webglTexture,b.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ee=D.depthTexture;if(Ft.__boundDepthTexture!==ee){if(ee!==null&&b.has(ee)&&(D.width!==ee.image.width||D.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(D)}}const kt=D.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(zt=!0);const Zt=b.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Zt[K])?ot=Zt[K][ct]:ot=Zt[K],nt=!0):D.samples>0&&j.useMultisampledRTT(D)===!1?ot=b.get(D).__webglMultisampledFramebuffer:Array.isArray(Zt)?ot=Zt[ct]:ot=Zt,O.copy(D.viewport),H.copy(D.scissor),et=D.scissorTest}else O.copy(it).multiplyScalar(dt).floor(),H.copy(ut).multiplyScalar(dt).floor(),et=Ot;if(ct!==0&&(ot=Aa),qt.bindFramebuffer(W.FRAMEBUFFER,ot)&&qt.drawBuffers(D,ot),qt.viewport(O),qt.scissor(H),qt.setScissorTest(et),nt){const Ft=b.get(D.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,ct)}else if(zt){const Ft=K;for(let kt=0;kt<D.textures.length;kt++){const Zt=b.get(D.textures[kt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+kt,Zt.__webglTexture,ct,Ft)}}else if(D!==null&&ct!==0){const Ft=b.get(D.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ft.__webglTexture,ct)}at=-1},this.readRenderTargetPixels=function(D,K,ct,ot,nt,zt,Bt,Ft=0){if(!(D&&D.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=b.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt){qt.bindFramebuffer(W.FRAMEBUFFER,kt);try{const Zt=D.textures[Ft],ee=Zt.format,Kt=Zt.type;if(!Ae.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Kt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-ot&&ct>=0&&ct<=D.height-nt&&(D.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ft),W.readPixels(K,ct,ot,nt,wt.convert(ee),wt.convert(Kt),zt))}finally{const Zt=Z!==null?b.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(W.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(D,K,ct,ot,nt,zt,Bt,Ft=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=b.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt)if(K>=0&&K<=D.width-ot&&ct>=0&&ct<=D.height-nt){qt.bindFramebuffer(W.FRAMEBUFFER,kt);const Zt=D.textures[Ft],ee=Zt.format,Kt=Zt.type;if(!Ae.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ne),W.bufferData(W.PIXEL_PACK_BUFFER,zt.byteLength,W.STREAM_READ),D.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ft),W.readPixels(K,ct,ot,nt,wt.convert(ee),wt.convert(Kt),0);const Le=Z!==null?b.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(W.FRAMEBUFFER,Le);const $e=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await fM(W,$e,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ne),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,zt),W.deleteBuffer(ne),W.deleteSync($e),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ct=0){const ot=Math.pow(2,-ct),nt=Math.floor(D.image.width*ot),zt=Math.floor(D.image.height*ot),Bt=K!==null?K.x:0,Ft=K!==null?K.y:0;j.setTexture2D(D,0),W.copyTexSubImage2D(W.TEXTURE_2D,ct,0,0,Bt,Ft,nt,zt),qt.unbindTexture()};const os=W.createFramebuffer(),Ra=W.createFramebuffer();this.copyTextureToTexture=function(D,K,ct=null,ot=null,nt=0,zt=null){zt===null&&(nt!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),zt=nt,nt=0):zt=0);let Bt,Ft,kt,Zt,ee,Kt,ne,Le,$e;const Ye=D.isCompressedTexture?D.mipmaps[zt]:D.image;if(ct!==null)Bt=ct.max.x-ct.min.x,Ft=ct.max.y-ct.min.y,kt=ct.isBox3?ct.max.z-ct.min.z:1,Zt=ct.min.x,ee=ct.min.y,Kt=ct.isBox3?ct.min.z:0;else{const mn=Math.pow(2,-nt);Bt=Math.floor(Ye.width*mn),Ft=Math.floor(Ye.height*mn),D.isDataArrayTexture?kt=Ye.depth:D.isData3DTexture?kt=Math.floor(Ye.depth*mn):kt=1,Zt=0,ee=0,Kt=0}ot!==null?(ne=ot.x,Le=ot.y,$e=ot.z):(ne=0,Le=0,$e=0);const Pe=wt.convert(K.format),Jt=wt.convert(K.type);let Ne;K.isData3DTexture?(j.setTexture3D(K,0),Ne=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(j.setTexture2DArray(K,0),Ne=W.TEXTURE_2D_ARRAY):(j.setTexture2D(K,0),Ne=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const oe=W.getParameter(W.UNPACK_ROW_LENGTH),bn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ji=W.getParameter(W.UNPACK_SKIP_PIXELS),Tn=W.getParameter(W.UNPACK_SKIP_ROWS),ci=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Ye.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ye.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Zt),W.pixelStorei(W.UNPACK_SKIP_ROWS,ee),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Kt);const Fe=D.isDataArrayTexture||D.isData3DTexture,An=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const mn=b.get(D),Rn=b.get(K),Cn=b.get(mn.__renderTarget),Hs=b.get(Rn.__renderTarget);qt.bindFramebuffer(W.READ_FRAMEBUFFER,Cn.__webglFramebuffer),qt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let bi=0;bi<kt;bi++)Fe&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,b.get(D).__webglTexture,nt,Kt+bi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,b.get(K).__webglTexture,zt,$e+bi)),W.blitFramebuffer(Zt,ee,Bt,Ft,ne,Le,Bt,Ft,W.DEPTH_BUFFER_BIT,W.NEAREST);qt.bindFramebuffer(W.READ_FRAMEBUFFER,null),qt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(nt!==0||D.isRenderTargetTexture||b.has(D)){const mn=b.get(D),Rn=b.get(K);qt.bindFramebuffer(W.READ_FRAMEBUFFER,os),qt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ra);for(let Cn=0;Cn<kt;Cn++)Fe?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,mn.__webglTexture,nt,Kt+Cn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,mn.__webglTexture,nt),An?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Rn.__webglTexture,zt,$e+Cn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Rn.__webglTexture,zt),nt!==0?W.blitFramebuffer(Zt,ee,Bt,Ft,ne,Le,Bt,Ft,W.COLOR_BUFFER_BIT,W.NEAREST):An?W.copyTexSubImage3D(Ne,zt,ne,Le,$e+Cn,Zt,ee,Bt,Ft):W.copyTexSubImage2D(Ne,zt,ne,Le,Zt,ee,Bt,Ft);qt.bindFramebuffer(W.READ_FRAMEBUFFER,null),qt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else An?D.isDataTexture||D.isData3DTexture?W.texSubImage3D(Ne,zt,ne,Le,$e,Bt,Ft,kt,Pe,Jt,Ye.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(Ne,zt,ne,Le,$e,Bt,Ft,kt,Pe,Ye.data):W.texSubImage3D(Ne,zt,ne,Le,$e,Bt,Ft,kt,Pe,Jt,Ye):D.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,zt,ne,Le,Bt,Ft,Pe,Jt,Ye.data):D.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,zt,ne,Le,Ye.width,Ye.height,Pe,Ye.data):W.texSubImage2D(W.TEXTURE_2D,zt,ne,Le,Bt,Ft,Pe,Jt,Ye);W.pixelStorei(W.UNPACK_ROW_LENGTH,oe),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,bn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ji),W.pixelStorei(W.UNPACK_SKIP_ROWS,Tn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ci),zt===0&&K.generateMipmaps&&W.generateMipmap(Ne),qt.unbindTexture()},this.initRenderTarget=function(D){b.get(D).__webglFramebuffer===void 0&&j.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?j.setTextureCube(D,0):D.isData3DTexture?j.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?j.setTexture2DArray(D,0):j.setTexture2D(D,0),qt.unbindTexture()},this.resetState=function(){V=0,Y=0,Z=null,qt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const pn={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},xv={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},Ep={padding:"10px",background:"rgba(255,255,255,0.03)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.06)"},Qo={fontSize:"11px",color:"#888",marginBottom:"6px"},cx={...pn,padding:"2px",fontSize:"8px",lineHeight:"1"};function ux(r,t,i,s=!0){const[l,c]=jt.useState(s);return St.jsxs("div",{style:r||{},children:[St.jsx("div",{onClick:()=>c(f=>!f),style:{cursor:"pointer"},children:t}),l&&i]})}function KA({grouping:r,selectedIds:t,onDeselect:i,onRemoveMagnet:s,adsorbToAxis:l,saveGroupAsPreset:c,presetPanel:f}){const{groups:h,activeGroup:m,newGroupName:d,setNewGroupName:g,createGroup:_,selectGroup:x,deleteGroup:S,confirmRename:E}=r,T=d.trim()&&d.trim()!==m;return ux(Ep,St.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"分组"}),St.jsxs("div",{children:[St.jsxs("div",{style:{gap:"6px",display:"flex",flexWrap:"wrap",...Qo},children:[t.size>1&&St.jsx("button",{onClick:_,style:{...pn,color:"#6bd5ff"},children:"创建分组 (Ctrl+G)"}),m&&St.jsx("button",{onClick:()=>T?E():i(),style:{...pn,color:T?"#8ab4f8":"#aaa"},children:T?"重命名":"取消选择"}),m&&St.jsx("button",{onClick:()=>S(m),style:{...pn,color:"#ff6b6b"},children:"取消分组 (Ctrl+Shift+G)"}),m&&St.jsx("button",{onClick:()=>c(m),style:{...pn,color:"#817f0d"},children:"💾 存为预设"}),m&&t.size>0&&St.jsx("button",{onClick:()=>l(),style:{...pn,color:"#972cbe"},children:"吸附轴线"})]}),St.jsx("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginBottom:"4px",flexWrap:"wrap"},children:Object.entries(h).map(([y,v])=>m===y?St.jsx("input",{autoFocus:!0,value:d,placeholder:y,onChange:C=>g(C.target.value),onKeyDown:C=>{C.key==="Enter"&&(d.trim()!==y?E():i()),C.key==="Escape"&&i()},style:{padding:"2px 6px",borderRadius:"10px",fontSize:"11px",background:"rgba(68,136,255,0.15)",border:"1px solid #4488ff",color:"#e0e0e0",outline:"none",width:"80px"}},y):St.jsxs("span",{onClick:()=>x(y),style:{padding:"2px 8px",borderRadius:"10px",fontSize:"11px",cursor:"pointer",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",color:"#aaa"},children:[y," ",St.jsxs("span",{style:{opacity:.5},children:["(",v.size,")"]}),St.jsx("button",{onClick:C=>{C.stopPropagation(),S(y)},style:{...cx,color:"#ff6b6b"},title:"删除组",children:"✕"})]},y))}),m&&St.jsx("div",{style:{fontSize:"10px",color:"#555",marginTop:"6px"},children:"↑↓←→ 移动 · PgUp/Home PgDn/End Tab/Shift+Tab 旋转"}),St.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",...Qo,marginTop:"8px"},children:[St.jsxs("span",{children:[t.size>0?"Shift+单击多选":"单击选择","(",t.size,")",m&&` · 「${m}」`]}),t.size>0&&St.jsx("span",{onClick:s,style:{fontSize:"10px",color:"#ff6b6b",cursor:"pointer",marginLeft:"auto"},children:"删除"})]}),t.size>0&&St.jsx("div",{style:{display:"flex",gap:"3px",flexWrap:"wrap",marginBottom:"6px"},children:[...t].map(y=>St.jsxs("span",{style:{padding:"0 5px",borderRadius:"3px",fontSize:"10px",background:"rgba(68,136,255,0.15)",border:"1px solid rgba(68,136,255,0.3)",color:"#8ab4f8"},children:["#",y]},y))}),f&&St.jsxs("div",{style:{alignItems:"center",gap:"6px",...Qo,marginTop:"8px"},children:[St.jsx("div",{style:Qo,children:"预设结构"}),St.jsx("div",{className:"group-panel-footer",children:f})]})]}),!0)}const QA={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},JA={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},$A=["X","Y","Z"];function Yo({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:f}){return St.jsxs("div",{children:[St.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),St.jsx("div",{style:JA,children:$A.map((h,m)=>{var d;return St.jsx("input",{placeholder:h,disabled:!s,style:{...QA,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((d=l[r])==null?void 0:d[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const S={...x,[r]:[...x[r]]};return S[r][m]=_,S})},onKeyDown:g=>{!s||g.key!=="Enter"||(f(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},h)})})]})}function tR({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,useGravity:l,magnets:c,selectedId:f,refYId:h,setRefYId:m,onToggle:d,onResetVel:g,onPerturb:_,onReframe:x,onSimSpeedChange:S,onGravityChange:E,showMoments:T,showForceTorques:y,setShowMoments:v,setShowForceTorques:C,children:U}){return ux(Ep,St.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),St.jsxs("div",{children:[St.jsx("button",{onClick:d,style:{width:"100%",padding:"8px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),St.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[St.jsx("button",{onClick:g,style:pn,children:"重置速度"}),St.jsx("button",{onClick:_,style:pn,children:"扰动位置"})]}),St.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:St.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[St.jsxs("select",{value:h??"",onChange:R=>m(R.target.value===""?null:parseInt(R.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[St.jsx("option",{value:"",children:"— y 方向参考球 —"}),c.map(R=>St.jsxs("option",{value:R.id,children:["球 #",R.id]},R.id))]}),St.jsx("button",{onClick:x,disabled:f===null||h===null||f===h,style:{...pn,opacity:f!==null&&h!==null&&f!==h?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),St.jsxs("div",{style:{marginTop:"10px"},children:[St.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),St.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),St.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),St.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:R=>S(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(R.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]}),St.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"10px",flexWrap:"wrap"},children:[St.jsx(ed,{label:"重力 (y 方向)",checked:l,onChange:E}),St.jsx(ed,{label:"显示磁矩",checked:T,onChange:v}),St.jsx(ed,{label:"显示力矩",checked:y,onChange:C})]}),U&&St.jsx(St.Fragment,{children:U})]}),!0)}function eR({selectedId:r,selectedMag:t,isSimulating:i,editDraft:s,setEditDraft:l,onToggle:c,onToggleFixed:f,onRemove:h,onCommit:m}){const d={draft:s,setDraft:l,onCommit:m};return St.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[St.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[St.jsxs("button",{disabled:!0,style:{...pn,flex:1,opacity:1},children:["选中磁球 #",r]}),St.jsx("button",{onClick:c,style:{...pn,flex:1,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),St.jsx("button",{onClick:f,style:{...pn,flex:1,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),St.jsx("button",{onClick:h,style:{...pn,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),St.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[i?"数据":"编辑数据",St.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:i?"":"(回车确认 · ↑↓ 撤销)"})]}),s&&St.jsxs(St.Fragment,{children:[St.jsx(Yo,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!i,...d}),St.jsx(Yo,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!i,...d}),St.jsx(Yo,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!i,...d}),St.jsx(Yo,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...d}),St.jsx(Yo,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...d})]})]})}function ed({label:r,checked:t,onChange:i}){return St.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[St.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),St.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}function nR({presets:r,customPresets:t,setCustomPresets:i,applyPreset:s}){const l=(h,m)=>{h.dataTransfer.setData("text/x-preset-name",m.toString().trim()),h.dataTransfer.effectAllowed="copy"},c={fontSize:"10px",color:"#666",marginTop:"8px",marginBottom:"4px"},f={display:"flex",gap:"4px"};return St.jsxs("div",{children:[Object.keys(t).length>0&&St.jsxs(St.Fragment,{children:[St.jsx("div",{style:c,children:"自定义预设"}),St.jsx("div",{style:{...f,flexWrap:"wrap"},children:Object.entries(t).map(([h,m])=>St.jsxs("button",{draggable:!0,onDragStart:d=>l(d,h),style:xv,children:[h,St.jsxs("span",{style:{opacity:.5},children:["(",m.magnets.length,")"]}),St.jsx("button",{onClick:d=>{d.stopPropagation(),i(g=>{const _={...g};return delete _[h],_})},style:{...cx,color:"#ff6b6b",cursor:"pointer"},title:"删除预设",children:"✕"})]},h))})]}),St.jsxs(St.Fragment,{children:[Object.keys(t).length>0&&St.jsx("div",{style:c,children:"默认预设"}),St.jsx("div",{style:{...f,flexWrap:"wrap"},children:r.map(h=>St.jsx("button",{draggable:!0,onDragStart:m=>l(m,h),onClick:()=>s(h),style:xv,children:h},h))})]})]})}function iR(r,t){const i=t.clone().sub(r.clone().multiplyScalar(t.dot(r)));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=r.clone().cross(i);return c=>new B(c.dot(r),c.dot(i),c.dot(s))}function $d(r){const t=new B;for(const i of r)t.add(i);return t.multiplyScalar(1/r.length)}function aR(r,t,i){const s=r.filter(T=>t.has(T.id));if(s.length<2)return null;const l=s.map(T=>T.pos.clone().sub(i)),c=l.length,f=[[0,0,0],[0,0,0],[0,0,0]];for(const T of l){const y=[T.x,T.y,T.z];for(let v=0;v<3;v++)for(let C=0;C<3;C++)f[v][C]+=y[v]*y[C]}for(let T=0;T<3;T++)for(let y=0;y<3;y++)f[T][y]/=c;const{eigenvalues:h,eigenvectors:m}=sR(f),d=[0,1,2];d.sort((T,y)=>h[y]-h[T]);let g=new B(...m[d[0]]),_=new B(...m[d[1]]),x;g.x<0&&(g.negate(),_.negate()),_.y<0&&_.negate(),x=g.clone().cross(_).normalize(),_.copy(x).cross(g).normalize();const E=new Qe().makeBasis(g,_,x).clone().invert();return new ba().setFromRotationMatrix(E)}function sR(r){const t=r.map(s=>[...s]),i=[[1,0,0],[0,1,0],[0,0,1]];for(let s=0;s<100;s++){let l=0,c=0,f=1;for(let _=0;_<3;_++)for(let x=_+1;x<3;x++)Math.abs(t[_][x])>l&&(l=Math.abs(t[_][x]),c=_,f=x);if(l<1e-12)break;const h=.5*Math.atan2(2*t[c][f],t[c][c]-t[f][f]),m=Math.cos(h),d=Math.sin(h),g=t.map(_=>[..._]);for(let _=0;_<3;_++)_===c||_===f||(g[_][c]=g[c][_]=m*t[_][c]+d*t[_][f],g[_][f]=g[f][_]=-d*t[_][c]+m*t[_][f]);g[c][c]=m*m*t[c][c]+2*d*m*t[c][f]+d*d*t[f][f],g[f][f]=d*d*t[c][c]-2*d*m*t[c][f]+m*m*t[f][f],g[c][f]=g[f][c]=0;for(let _=0;_<3;_++)for(let x=0;x<3;x++)t[_][x]=g[_][x];for(let _=0;_<3;_++){const x=i[_][c],S=i[_][f];i[_][c]=m*x+d*S,i[_][f]=-d*x+m*S}}return{eigenvalues:[t[0][0],t[1][1],t[2][2]],eigenvectors:[[i[0][0],i[1][0],i[2][0]],[i[0][1],i[1][1],i[2][1]],[i[0][2],i[1][2],i[2][2]]]}}let fx=0;function rR(){fx=0}function nu(r={}){return{id:r.id??fx++,pos:r.pos?r.pos.clone():new B,vel:r.vel?r.vel.clone():new B,moment:r.moment?r.moment.clone():new B(1,0,0),omega:r.omega?r.omega.clone():new B,color:r.color??"#93b5c9",group:r.group??"",f:new B,tau:new B,fixed:r.fixed??!1}}function oR(r,t=.3){const i=new B((Math.random()-.5)*t,(Math.random()-.5)*t,(Math.random()-.5)*t);return uu(r,{pos:r.pos.clone().add(i)})}function uu(r,t){return{...r,...t}}function jo(r,t=6,i=1){return r?r.toArray().map(s=>(s*i).toFixed(t)):"(undefined)"}function tp(r){const t=new B;return{m_pos:jo(r.pos,6,1e3),m_vel:jo(r.vel??t,6,1e3),moment:jo(r.moment),f:jo(r.f??t),tau:jo(r.tau??t)}}function lR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(h=>h.id===t),l=r.find(h=>h.id===i);if(!s||!l)return;const c=iR(s.moment,l.pos.clone().sub(s.pos));if(!c)return;const f=s.pos;return r.map(h=>uu(h,{pos:c(h.pos.clone().sub(f)),vel:c(h.vel??new B),moment:c(h.moment),f:c(h.f??new B),tau:c(h.tau??new B)}))}function hx(r,t,i,s){const l=s*2*.999,c=new Map,f=r.length;for(let h=0;h<f;h++){if(!t.has(r[h].id))continue;const m=new B(...r[h].pos).add(i);c.set(r[h].id,m);for(const{id:d,pos:g}of r){if(t.has(d))continue;if(m.distanceTo(g)<l)return}}return c}function dx(r,t,i,s,l){const c=l*2*.999,f=new Map,h=r.length;for(let m=0;m<h;m++){if(!t.has(r[m].id))continue;const d=i.clone().add(r[m].pos.clone().sub(i).applyQuaternion(s));f.set(r[m].id,{pos:d});for(const{id:g,pos:_}of r){if(t.has(g))continue;if(d.distanceTo(_)<c)return}}return f.forEach((m,d)=>{const g=r.find(_=>_.id===d);f.get(d).moment=g.moment.clone().applyQuaternion(s)}),f}function cR(r,t){return r.map(i=>({...i,pos:i.pos.multiplyScalar(t)})).map(nu)}function uR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const f={pos:c.pos.toArray().join(", "),moment:c.moment.toArray().join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?f:{...f,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function fR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=f=>{if(typeof f=="string"){const h=f.split(",").map(m=>parseFloat(m.trim()));if(h.length===3&&h.every(m=>!isNaN(m)))return new B(...h)}return f};for(const f of t.magnets){const h={};for(const[m,d]of Object.entries(f))h[m]=c(d);h.pos,h.moment.normalize(),l.push(h)}return{name:i,unit:s,magnets:l}}async function nd(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:f}=fR(s),h={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in h))throw new Error(`Unknown unit in preset: ${c}`);const m=h[c];return{name:l||r,magnets:cR(f,m)}}catch{if(r in ep){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=ep[r]();return l.map(c=>c.pos.multiplyScalar(t)),{name:r,magnets:l.map(nu)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function hR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(ep).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const ep={chain:()=>Array.from({length:5},(r,t)=>({pos:new B((t-2)*2*1.1,0,0),m:new B(1,0,0),color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:new B(s*Math.cos(i),s*Math.sin(i),0),m:new B(Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0),color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:new B((Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4),m:new B(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map(i=>new B(...i)).map((i,s)=>({pos:i.multiplyScalar(2.4),m:new B(0,0,s<4?1:-1),color:s<4?16729156:4474111}))};function dR(r,t=""){let i=t.trim(),s=`${t.trim()}-`,l=1;for(t===""&&(s="#",i=`#${l}`);r[i];l++)i=`${s}${l}`;return i}function pR({selectedIds:r,setSelectedIds:t,keyTrapRef:i,stateRef:s}){const[l,c]=jt.useState({}),[f,h]=jt.useState(null),[m,d]=jt.useState(""),g=jt.useCallback(()=>{const v=new Set;if(f&&l[f])for(const C of l[f])v.add(C);return v},[f,l]),_=jt.useCallback(()=>{if(r.size===0)return;const v=dR(l,m.trim()||"");c(C=>({...C,[v]:new Set(r)})),d(v),h(v),setTimeout(()=>{i.current&&i.current.focus()},0)},[r,l,m]),x=jt.useCallback(v=>{c(C=>{const U={...C};return delete U[v],U}),f===v&&h(null)},[f]),S=jt.useCallback(v=>{if(f===v){h(null),d("");return}t(new Set(l[v]||[])),h(v),d(""),setTimeout(()=>{i.current&&i.current.focus()},0)},[f,l,t]),E=jt.useCallback(()=>{if(!f||!m.trim())return;const v=m.trim();if(v===f){d("");return}l[v]||(c(C=>{const U={};for(const[R,N]of Object.entries(C))U[R===f?v:R]=N;return U}),h(v),d(""))},[f,m,l]),T=jt.useCallback(v=>{c(C=>{const U={};for(const[R,N]of Object.entries(C)){const z=new Set([...N].filter(P=>!v.has(P)));z.size>0&&(U[R]=z)}return U})},[]),y=jt.useCallback(()=>{c({}),h(null),d("")},[]);return jt.useEffect(()=>{const v=C=>{C.target.tagName==="INPUT"&&C.target!==i.current||((C.key==="g"||C.key==="G")&&(C.ctrlKey||C.metaKey)?(C.preventDefault(),C.stopPropagation(),C.stopImmediatePropagation(),C.shiftKey?f&&x(f):_()):(C.key==="a"||C.key==="A")&&(C.ctrlKey||C.metaKey)&&(C.preventDefault(),C.stopPropagation(),C.stopImmediatePropagation(),t(U=>{const R=f?[...l[f]||[]]:s.current.magnets.map(z=>z.id),N=C.shiftKey?R.filter(z=>!U.has(z)):R;return new Set(N)})))};return window.addEventListener("keydown",v,!0),()=>window.removeEventListener("keydown",v,!0)},[_,x,f,l,t]),{groups:l,setGroups:c,activeGroup:f,setActiveGroup:h,newGroupName:m,setNewGroupName:d,getIdsInAffectedGroup:g,createGroup:_,deleteGroup:x,selectGroup:S,confirmRename:E,cleanupIds:T,resetGroups:y}}function mR(r,t,i){if(!t||!i)return 0;const s=r??new B(0,0,0),l=t.position.distanceTo(s),c=t.fov*Math.PI/180;return i.domElement.height/(2*l*Math.tan(c/2))}function gR(r){const t=new B;r.getWorldDirection(t);const i=new B;i.crossVectors(t,r.up).normalize();const s=new B;return s.crossVectors(i,t).normalize(),{forward:t,right:i,up:s}}function _R({stateRef:r,cameraRef:t,rendererRef:i,setMagnets:s,needsSyncRef:l,getIdsInAffectedGroup:c},f,h,m){return{handleKeyDown:jt.useCallback(g=>{if(r.current.isSimulating)return;const _=c();if(_.size===0)return;const x=t.current;if(!x)return;const{forward:S,right:E,up:T}=gR(x),y=$d(r.current.magnets.filter(R=>_.has(R.id)).map(R=>R.pos)),v=f/h/mR(y,x,i.current);let C=null,U=null;switch(g.key){case"ArrowRight":C=E.multiplyScalar(v);break;case"ArrowLeft":C=E.multiplyScalar(-v);break;case"ArrowUp":C=T.multiplyScalar(v);break;case"ArrowDown":C=T.multiplyScalar(-v);break;case"PageUp":U=E.negate();break;case"PageDown":U=E;break;case"Home":U=T.negate();break;case"End":U=T;break;case"Tab":U=g.shiftKey?S.negate():S;break}if(C)g.preventDefault(),s(R=>{const N=hx(R,_,C,m);return N?(l.current=!0,R.map(z=>_.has(z.id)?{...z,pos:N.get(z.id)}:z)):R});else if(U){g.preventDefault();const R=Math.atan2(v,m),N=U,z=new ba().setFromAxisAngle(N,R);s(P=>{const X=dx(P,_,y,z,m);return X?(l.current=!0,P.map(A=>{if(!_.has(A.id))return A;const L=X.get(A.id);return{...A,pos:L.pos,moment:L.moment}})):P})}},[c,m])}}const vR=32,Lr=.1;function xR(r,t,i,s,l,c,f,h,m,d,g,_,x,S){const E=jt.useRef(null),T=jt.useRef(""),y=jt.useCallback(()=>{const{magnets:v,isSimulating:C,simSpeed:U,useGravity:R}=t.current,N=r.current;if(!C||!N||v.length<2)return;const{newMagnets:z,safedt:P,reason:X}=N.step(v,U,R);T.current=`${P*1e3}ms (${X})`,x(Y=>Y+P);const A=new Map(v.map((Y,Z)=>[Y.id,Z])),L=z.map((Y,Z)=>{const at=new B(Math.max(Math.min(Y.pos.x,Lr),-Lr),Math.max(Math.min(Y.pos.y,Lr),-Lr),Math.max(Math.min(Y.pos.z,Lr),-Lr));if(at.x!==Y.pos.x||at.y!==Y.pos.y||at.z!==Y.pos.z)throw`磁铁${Y.id}位置超出边界: ${Y.pos.toArray().map(tt=>(tt*1e3).toFixed(1)).join(",")}mm`;return uu(v[A.get(Y.id)],{...Y,pos:at})});g(L),m.current=!0;const V=d.current;if(V.size===1){const Y=L.find(Z=>V.has(Z.id));Y&&_(Z=>Z&&{...Z,...tp(Y)})}},[t,r,m,d,g,_,x]);return jt.useEffect(()=>{const v=s.current,C=l.current,U=c.current,R=f.current,N=h.current;if(!v||!C||!U||!R||!i)return;let z=performance.now();const P=X=>{E.current=requestAnimationFrame(P),X-z>vR&&(y(),z=X),N==null||N.update(),R.render(C,U)};return E.current=requestAnimationFrame(P),()=>{cancelAnimationFrame(E.current)}},[i,y,s,l,c,f,h]),{stepDeltaTimeRef:T}}const yv={type:"change"},bp={type:"start"},px={type:"end"},Hc=new su,Sv=new _a,yR=Math.cos(70*dM.DEG2RAD),_n=new B,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6;class SR extends $M{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ba,this._lastTargetPosition=new B,this._quat=new ba().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Y_,this._sphericalDelta=new Y_,this._scale=1,this._panOffset=new B,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new B,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ER.bind(this),this._onPointerDown=MR.bind(this),this._onPointerUp=bR.bind(this),this._onContextMenu=UR.bind(this),this._onMouseWheel=RR.bind(this),this._onKeyDown=CR.bind(this),this._onTouchStart=wR.bind(this),this._onTouchMove=DR.bind(this),this._onMouseDown=TR.bind(this),this._onMouseMove=AR.bind(this),this._interceptControlDown=LR.bind(this),this._interceptControlUp=NR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yv),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=_n.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new B(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new B(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<yR?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(yv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function MR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ER(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function bR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(px),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function TR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Or.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Or.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(bp)}function AR(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function RR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(bp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(px))}function CR(r){this.enabled!==!1&&this._handleKeyDown(r)}function wR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(bp)}function DR(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function UR(r){this.enabled!==!1&&r.preventDefault()}function LR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OR(r,t,i,s,l){if(!r||!t)return[0,0,0];const c=r.getBoundingClientRect(),f=new le((i-c.left)/c.width*2-1,-((s-c.top)/c.height)*2+1),h=new ix;h.setFromCamera(f,t);const m=new _a(new B(0,0,1),0),d=new B;return h.ray.intersectPlane(m,d)||h.ray.at(10,d),d.multiplyScalar(1/l)}function PR({containerRef:r,sceneRef:t,cameraRef:i,rendererRef:s,controlsRef:l},{magnets:c,selectedIds:f,activeGroup:h,groups:m,ready:d,getIdsInAffectedGroup:g,keyTrapRef:_},x,S,E){const T=jt.useRef([]),y=jt.useRef([]),v=jt.useRef([]),C=jt.useRef([]),U=jt.useRef([]),[R,N]=jt.useState(!0),[z,P]=jt.useState(!0);return jt.useEffect(()=>{const X=r.current;if(!X||!d)return;let A=X.clientWidth||800,L=X.clientHeight||600;const V=new FM;V.background=new be(657941),t.current=V;const Y=new yi(50,A/L,.1,1e3);Y.position.set(0,0,12),i.current=Y;const Z=new ZA({antialias:!0});Z.setSize(A,L),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.appendChild(Z.domElement),s.current=Z;const at=new SR(Y,Z.domElement);at.enableDamping=!0,at.dampingFactor=.05,at.rotateSpeed=.5,at.zoomSpeed=.8,at.panSpeed=.5,at.minDistance=2,at.maxDistance=50,l.current=at;const tt=()=>{_.current&&document.activeElement!==_.current&&_.current.focus()};at.addEventListener("end",tt),V.add(new KM(16777215,.5));const O=new X_(16777215,.8);O.position.set(5,5,5),V.add(O);const H=new X_(4482815,.3);H.position.set(-5,-5,-5),V.add(H);const et=new JM(16,16,3355477,2236979);et.rotation.x=Math.PI/2,V.add(et);const yt=()=>{const xt=X.clientWidth||800,F=X.clientHeight||600;Y.aspect=xt/F,Y.updateProjectionMatrix(),Z.setSize(xt,F)};return window.addEventListener("resize",yt),()=>{window.removeEventListener("resize",yt),at.removeEventListener("end",tt),at.dispose(),Z.dispose(),t.current=null,X.contains(Z.domElement)&&X.removeChild(Z.domElement)}},[d]),jt.useEffect(()=>{const X=t.current;if(!X)return;const A=O=>{O&&(X.remove(O),O.geometry&&O.geometry.dispose(),O.material&&(Array.isArray(O.material)?O.material.forEach(H=>H.dispose()):O.material.dispose()),O.children&&O.children.forEach(A))};[...T.current,...y.current,...v.current,...C.current,...U.current].forEach(A);const L=new B(0,1,0),V=[],Y=[],Z=[],at=[],tt=[];c.forEach(O=>{const H=new Sp(x,32,32),et=new WM({color:O.color,metalness:.8,roughness:.2,emissive:O.color,emissiveIntensity:.15}),yt=new Si(H,et);yt.userData.id=O.id,X.add(yt),V.push(yt);const xt=new eu(x*1.12,.02,16,64),F=new ru({color:16777215,transparent:!0,opacity:.85,depthTest:!1}),J=new Si(xt,F);if(J.visible=!1,J.renderOrder=999,X.add(J),tt.push(J),R){const dt=new jh(L,new B,x*3.6,16768256,x*.5,x*.3);X.add(dt),Y.push(dt)}else Y.push(null);if(z){const dt=new jh(L,new B,x,65535,x*.4,x*.24);dt.visible=!1,X.add(dt),Z.push(dt);const Dt=new jh(L,new B,x,16711935,x*.32,x*.2);Dt.visible=!1,X.add(Dt),at.push(Dt)}else Z.push(null),at.push(null)}),T.current=V,y.current=Y,v.current=Z,C.current=at,U.current=tt},[c.length,R,z,d]),jt.useEffect(()=>{const X=i.current,A=s.current;if(!t.current||!X||!A)return;const L=T.current,V=y.current,Y=v.current,Z=C.current,at=U.current,tt=g();c.forEach((O,H)=>{const et=O.pos.clone().multiplyScalar(S),yt=L[H];yt&&(yt.position.copy(et),yt.material.emissiveIntensity=f.has(O.id)?.4:.15);const xt=at[H];if(xt){const F=tt.has(O.id);if(xt.visible=F,xt.visible){xt.position.copy(et),xt.lookAt(X.position);const J=X.position.distanceTo(et),dt=X.fov*Math.PI/180,Dt=A.domElement.height/(2*J*Math.tan(dt/2)),Pt=E/Dt,it=x+Pt*1.5,ut=Pt*.5;xt.geometry.dispose(),xt.geometry=new eu(it,ut,8,64)}}if(R){const F=V[H];if(F){const J=O.moment.clone().normalize();F.position.copy(et),F.setDirection(J),F.setLength(x*3.6,x*.5,x*.3)}}if(z){const F=Y[H];if(F){const dt=O.f?O.f.length():0;if(dt>1e-25){F.visible=!0;const Dt=O.f.clone().normalize(),Pt=x*Math.min(6,Math.max(.5,Math.log10(dt+1e-10)+10));F.position.copy(et),F.setDirection(Dt),F.setLength(Pt,x*.4,x*.24)}else F.visible=!1}const J=Z[H];if(J){const dt=O.tau?O.tau.length():0;if(dt>1e-25){J.visible=!0;const Dt=O.tau.clone().normalize(),Pt=x*Math.min(5,Math.max(.4,Math.log10(dt+1e-10)+8));J.position.copy(et),J.setDirection(Dt),J.setLength(Pt,x*.32,x*.2)}else J.visible=!1}}})},[c,f,h,m,R,z,d]),{meshesRef:T,showMoments:R,showForceTorques:z,setShowMoments:N,setShowForceTorques:P}}function zR({getMagnets:r,selectedId:t,onApplySnap:i}){const s=jt.useRef([]),l=jt.useRef(-1),c=m=>m.map(d=>({...d,pos:d.pos.clone(),vel:d.vel.clone(),moment:d.moment.clone()})),f=jt.useCallback(m=>{const d=s.current;if(d.length>0){const g=d[d.length-1];if(FR(g,m))return}d.push(c(m)),d.length>100&&d.shift(),l.current=-1},[]),h=jt.useCallback(()=>{s.current=[],l.current=-1},[]);return jt.useEffect(()=>{const m=d=>{if(!(d.ctrlKey&&["z","Z"].includes(d.key)))return;d.preventDefault();const g=s.current;if(g.length!==0)if(d.shiftKey){if(l.current===-1)return;if(l.current++,l.current>=g.length-1){const _=g.pop();l.current=-1,i(_)}else i(g[l.current])}else{if(l.current===-1)g.push(c(r())),l.current=g.length-2;else if(l.current>0)l.current--;else return;i(g[l.current])}};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[r,i,t]),{push:f,reset:h,histIdxRef:l}}function FR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const f of c){const h=s[f],m=l[f];if(Array.isArray(h)&&Array.isArray(m)){if(h.length!==m.length||h.some((d,g)=>Math.abs(d-m[g])>1e-6))return!1}else if(h instanceof B&&m instanceof B){if(h.distanceTo(m)>1e-12)return!1}else if(h!==m)return!1}}return!0}const mx=4*Math.PI*1e-7;function IR(r,t,i,s,l){const c=l.length(),f=l.clone().multiplyScalar(1/c),h=i.dot(f),m=s.dot(f),d=i.dot(s),g=4*Math.PI*mx*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:f,p:h,q:m,r:d,K:g,m1:i,m2:s,d:l}}function BR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function HR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:f,m1:h,m2:m}=r,d=t**4,g=3*f/d,_=c-5*s*l;return i.clone().multiplyScalar(_).add(h.clone().multiplyScalar(l)).add(m.clone().multiplyScalar(s)).multiplyScalar(g)}function GR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:f,m2:h}=r,m=c/t**3,d=f.clone().cross(h),g=f.clone().cross(i).multiplyScalar(-3*l).add(d).multiplyScalar(-m),_=h.clone().cross(i).multiplyScalar(-3*s).add(d.negate()).multiplyScalar(-m);return{tor1:g,tor2:_}}function VR(r,t,i,s,l){const c=IR(r,t,i,s,l),f=BR(c),h=HR(c),{tor1:m,tor2:d}=GR(c);return{U:f,force1:h.clone().negate(),force2:h,torque1:m,torque2:d}}const kR={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3,rollingFriction:.005};class XR{constructor(t={}){const i={...kR,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.rollingFriction=i.rollingFriction,this.mMag=i.br/mx,this.inertia=.4*i.mass*i.radius**2,this.DIST=i.radius*2}}function np(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function Mv(r,t,i,s){if(Math.abs(r)<1e-20)return np(t,i,s);const l=t/r,c=i/r,f=s/r,h=l/3,m=c-l*l/3,d=f-l*c/3+2*l*l*l/27,g=d*d/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-d/2+_),S=Math.cbrt(-d/2-_);return[x+S-h]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-d/(2*_))))/3,S=2*Math.cbrt(_);return[S*Math.cos(x)-h,S*Math.cos(x+2*Math.PI/3)-h,S*Math.cos(x+4*Math.PI/3)-h]}else{const _=Math.cbrt(-d/2);return[2*_-h,-_-h]}}function WR(r,t,i,s,l){if(Math.abs(r)<1e-20)return Mv(t,i,s,l);const c=t/r,f=i/r,h=s/r,m=l/r,d=c/4,g=f-3*c*c/8,_=h-c*f/2+c*c*c/8,x=m-c*h/4+c*c*f/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const C=[];for(const U of np(1,g,x))if(U>=-1e-12){const R=Math.sqrt(Math.max(0,U));C.push(R-d,-R-d)}return C}const S=Mv(1,g/2,(g*g-4*x)/16,-_*_/64),E=Math.max(...S,1e-12),T=Math.sqrt(Math.max(E,0));if(T<1e-12)return[];const y=_/(4*T),v=[];for(const[C,U]of[[1,-y],[-1,y]])for(const R of np(1,C*T,g/2+E+U))v.push(R-d);return v}function ip(r,t){const i=[],s=r.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const f=r[l],m=r[c].clone().sub(f),d=m.length();d<=t&&i.push({i:l,j:c,normal:m.multiplyScalar(1/d),dist:d})}return i}function Ev(r,t,i,s=null,l=20,c=1e-7){const f=r.map(x=>x.clone()),h=ip(f,t+i),m=t-i,d=t-i/2,g=s||r.map(()=>!1),_=new B;for(let x=0;x<l;x++){let S=0;for(const{i:E,j:T}of h){_.copy(f[T]).sub(f[E]);const y=_.length(),v=_.multiplyScalar(1/y);let C=0;if(y<m?(C=d-y,S=Math.max(S,t-y)):y<t&&(C=(t-y)*.5,S=Math.max(S,t-y)),C>c){const U=f[E],R=f[T],N=+g[E]-+g[T],z=C*((1-N)*.5),P=C*((1+N)*.5);U.x-=v.x*z,U.y-=v.y*z,U.z-=v.z*z,R.x+=v.x*P,R.y+=v.y*P,R.z+=v.z*P}}if(S<c)break}return f}function qR(r,t,i,s,l=null,c=.3,f=1e-7){const h=l||r.map(()=>!1),m=t.map((x,S)=>h[S]?new B(0,0,0):x.clone()),d=i.map((x,S)=>h[S]?new B(0,0,0):x.clone()),g=gx(s,h),_=new Float64Array(s.length);if(g.length>0){const x=g.map(E=>s[E]);$R(d,x,h,f);const S=YR(m,d,x,h,c,5,f);g.forEach((E,T)=>{_[E]=S[T]})}return{constrainedForces:m,constrainedVel:d,forceLambda:_}}function gx(r,t){const i=[];for(let s=0;s<r.length;s++){const{i:l,j:c}=r[s];t[l]&&t[c]||i.push(s)}return i}function YR(r,t,i,s,l=.3,c=5,f=1e-7){const h=i.length,m=new Float64Array(h);if(h===0)return m;const d=i.map(U=>KR(U.normal)),g=new Array(h).fill(!0),_=new B,x=i.map((U,R)=>{const{i:N,j:z,normal:P}=U;_.copy(t[z]).sub(t[N]);const X=_.dot(P),A=P.clone().multiplyScalar(X).sub(_).negate(),L=A.length();return L>f?(g[R]=!1,A.multiplyScalar(-1/L)):new B}),S=r.map(U=>U.clone()),E=i.map(()=>new B);for(let U=0;U<c;U++){const{A:R,b:N,eqMap:z}=Av(i,s,S,d,g),P=ap(R,N);if(!P)break;const X=bv(P,z,g);if(jR(X,g,l,f)){for(let A=0;A<h;A++){m[A]=X[A].fn;const L=Tv(d[A],X[A],g[A],E[A]);Zc(r,i[A],L,s)}return m}r.forEach((A,L)=>S[L].copy(A));for(let A=0;A<h;A++)g[A]||(ZR(d[A],X[A],E[A],x[A],l,f),Zc(S,i[A],E[A],s))}const{A:T,b:y,eqMap:v}=Av(i,s,S,d,g),C=ap(T,y);if(C){const U=bv(C,v,g);for(let R=0;R<h;R++){m[R]=U[R].fn;const N=Tv(d[R],U[R],g[R],E[R]);Zc(r,i[R],N,s)}}return m}function Zc(r,t,i,s){const{i:l,j:c}=t;s[l]||r[l].add(i),s[c]||r[c].sub(i)}function bv(r,t,i){return Array.from(t,(s,l)=>{const c=r[s],f=i[l]?r[s+1]:0,h=i[l]?r[s+2]:0;return{fn:c,ft1:f,ft2:h}})}function jR(r,t,i,s){let l=!0;for(let c=0;c<r.length;c++){const{fn:f,ft1:h,ft2:m}=r[c],d=Math.sqrt(h*h+m*m),g=i*Math.abs(f);t[c]&&d>g+s?(t[c]=!1,l=!1):!t[c]&&d<=g-s}return l}function Tv(r,t,i,s){const{fn:l,ft1:c,ft2:f}=t,[h,m,d]=r,g=new B(l*h.x+c*m.x+f*d.x,l*h.y+c*m.y+f*d.y,l*h.z+c*m.z+f*d.z);return i||g.add(s),g}function ZR(r,t,i,s,l,c){const[f,h,m]=r,{fn:d,ft1:g,ft2:_}=t,x=l*Math.abs(d);if(s.x!==0||s.y!==0||s.z!==0)i.copy(s).multiplyScalar(x);else{const S=Math.sqrt(g*g+_*_);if(S>c){const E=x/S;i.x=(g*h.x+_*m.x)*E,i.y=(g*h.y+_*m.y)*E,i.z=(g*h.z+_*m.z)*E}else i.set(0,0,0)}}function KR(r){const i=(Math.abs(r.x)<.9?new B(1,0,0):new B(0,1,0)).cross(r).normalize().negate(),s=r.clone().cross(i);return[r,i,s]}function Av(r,t,i,s,l){const c=r.length,f=new Int32Array(c);let h=0;for(let S=0;S<c;S++)f[S]=h,h+=l[S]?3:1;const m=[],d=[],g=[],_=new Float64Array(h);for(let S=0;S<c;S++){const E=r[S],T=E.i,y=E.j,v=t[T]?0:1,C=t[y]?0:1,U=l[S]?3:1;for(let R=0;R<U;R++){const N=s[S][R],z=f[S]+R;_[z]=v*i[T].dot(N)-C*i[y].dot(N);for(let P=0;P<c;P++){const X=r[P],A=X.i,L=X.j,V=l[P]?3:1;for(let Y=0;Y<V;Y++){const Z=s[P][Y],at=f[P]+Y,tt=N.dot(Z);let O=0;T===A&&(O-=v*tt),T===L&&(O+=v*tt),y===A&&(O+=C*tt),y===L&&(O-=C*tt),Math.abs(O)>1e-15&&(m.push(z),d.push(at),g.push(O))}}}}return{A:_x(h,m,d,g),b:_,neq:h,eqMap:f}}function _x(r,t,i,s){const l=new Int32Array(r);for(let g=0;g<t.length;g++)l[t[g]]++;const c=new Int32Array(r+1);for(let g=0;g<r;g++)c[g+1]=c[g]+l[g];const f=c[r],h=new Int32Array(f),m=new Float64Array(f),d=new Int32Array(r);for(let g=0;g<t.length;g++){const _=t[g],x=c[_]+d[_];let S=!1;for(let E=c[_];E<x;E++)if(h[E]===i[g]){m[E]+=s[g],S=!0;break}S||(h[x]=i[g],m[x]=s[g],d[_]++)}return{n:r,rowPtr:c,colIdx:h,values:m}}function QR(r,t,i,s){const l=t.length,c=new Float64Array(l),f=[],h=[],m=[];for(let g=0;g<l;g++){const _=r[t[g]],x=_.i,S=_.j,E=_.normal,T=i[x]?0:1,y=i[S]?0:1;c[g]=T*s[x].dot(E)-y*s[S].dot(E);for(let v=0;v<l;v++){const C=r[t[v]],U=C.i,R=C.j,N=C.normal,z=E.dot(N);let P=0;x===U&&(P-=T*z),x===R&&(P+=T*z),S===U&&(P+=y*z),S===R&&(P-=y*z),Math.abs(P)>1e-15&&(f.push(g),h.push(v),m.push(P))}}return{A:_x(l,f,h,m),b:c}}function ap(r,t){const i=r.n;if(i===0)return new Float64Array(0);const s=Array.from({length:i},()=>new Float64Array(i));let l=0;for(let d=0;d<i;d++)for(let g=r.rowPtr[d];g<r.rowPtr[d+1];g++){s[d][r.colIdx[g]]=r.values[g];const _=Math.abs(r.values[g]);_>l&&(l=_)}const c=new Float64Array(t),f=Math.max(l*i*22e-17,1e-20),h=new Uint8Array(i);for(let d=0;d<i;d++){let g=Math.abs(s[d][d]),_=d;for(let S=d+1;S<i;S++){const E=Math.abs(s[S][d]);E>g&&(g=E,_=S)}if(g<f){h[d]=0;continue}if(h[d]=1,_!==d){const S=s[d];s[d]=s[_],s[_]=S;const E=c[d];c[d]=c[_],c[_]=E}const x=s[d][d];for(let S=d+1;S<i;S++){const E=s[S][d]/x;s[S][d]=0;for(let T=d+1;T<i;T++)s[S][T]-=E*s[d][T];c[S]-=E*c[d]}}const m=new Float64Array(i);for(let d=i-1;d>=0;d--){if(!h[d])continue;let g=c[d];for(let _=d+1;_<i;_++)g-=s[d][_]*m[_];m[d]=g/s[d][d]}return m}function JR(r,t,i,s,l,c,f){for(let h=0;h<i.length;h++){const m=l[h],d=i[h];Math.abs(m)<f||Zc(r,t[d],t[d].normal.clone().multiplyScalar(m),s)}}function $R(r,t,i,s=1e-7){if(t.length===0)return r;const l=gx(t,i);if(l.length===0)return r;const{A:c,b:f}=QR(t,l,i,r),h=ap(c,f);return h&&JR(r,t,l,i,h,null,s),r}function t2(r,t,i,s,l,c,f=1e-7){const h=s.clone().sub(i).multiplyScalar(.5),m=r.dot(r)-l*l;if(m<=0)return 0;const d=2*r.dot(t),g=2*r.dot(h)+t.dot(t),_=2*t.dot(h),x=h.dot(h),S=WR(x,_,g,d,m),E=(l*(1+f))**2;let T=null;for(const y of S)if(y>1e-12&&y<=c+1e-12){if(x*y*y*y*y+_*y*y*y+g*y*y+d*y+m+l*l>E)continue;(T===null||y<T)&&(T=y)}return T}function e2(r,t,i,s,l,c,f=null){if(c<1e-12)return{newPos:r.map(y=>y.clone()),newVel:i.map(y=>y.clone()),safedt:0,reason:"zero delta time"};const h=f||r.map(()=>!1),m=r.length,d=t.map((y,v)=>y.clone().multiplyScalar(+!h[v]/s));let g=c,_="max delta time";const x=new B,S=new B;for(let y=0;y<m;y++)for(let v=y+1;v<m;v++){if(h[y]&&h[v])continue;x.copy(r[v]).sub(r[y]),S.copy(i[v]).sub(i[y]);const C=t2(x,S,d[y],d[v],l,g);C!==null&&C<g&&(g=Math.max(C-1e-12,0),_=`collision between ${y} and ${v}`)}for(let y=0;y<m;y++)if(!h[y]){const v=l/2,C=i[y],U=d[y],R=C.length(),N=U.length();let z;if(N>1e-12)z=(-R+Math.sqrt(R*R+2*N*v))/N;else if(R>1e-12)z=v/R;else continue;z<g&&(g=z,_=`max movement of ${y}`)}const E=r.map((y,v)=>{if(h[v])return y.clone();const C=g,U=.5*g*g,R=i[v],N=d[v];return new B(y.x+R.x*C+N.x*U,y.y+R.y*C+N.y*U,y.z+R.z*C+N.z*U)}),T=i.map((y,v)=>{if(h[v])return new B(0,0,0);const C=g,U=d[v];return new B(y.x+U.x*C,y.y+U.y*C,y.z+U.z*C)});return{newPos:E,newVel:T,safedt:g,reason:_}}function n2(r,t,i,s,l){return t.map((f,h)=>{const m=r[h],d=f.moment,g=f.omega,_=i2(d,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function i2(r,t,i,s,l,c=.3){const f=i.clone().multiplyScalar(1/l),m=i.dot(t)<0?c:1,d=new B(t.x*m+f.x*s,t.y*m+f.y*s,t.z*m+f.z*s),g=d.length();if(g<1e-20)return{moment:r,omega:d};const _=Math.min(g*s,.5),x=d.clone().multiplyScalar(1/g);return{moment:r.clone().applyAxisAngle(x,_).normalize(),omega:d}}function a2(r,t,i){return()=>(r.current=new s2(i),t(!0),()=>{})}class s2{constructor(t=.0025){this.params=new XR({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>new B(0,0,0)),f=t.map(()=>new B(0,0,0)),h=t.map(()=>new Map),m=new B;for(let d=0;d<l;d++)for(let g=d+1;g<l;g++){const _=VR(i,s,t[d].moment,t[g].moment,m.copy(t[g].pos).sub(t[d].pos));c[d].add(_.force1),c[g].add(_.force2),f[d].add(_.torque1),f[g].add(_.torque2),h[d].set(`M#${g}`,_.force1),h[g].set(`M#${d}`,_.force2)}return{coforces:c,torques:f,forces:h}}step(t,i,s=!1){const l=this.params.radius*2,c=t.map(R=>!!R.fixed),f=t.map(R=>R.pos),h=Ev(f,l,this.params.shellThickness,c),{coforces:m,torques:d,forces:g}=this.calcMagneticForces(t.map((R,N)=>({pos:h[N],moment:R.moment})),this.params.radius,this.params.mMag);if(s){const R=this.params.gravity;m.forEach((N,z)=>{if(!c[z]){const P=R*this.params.mass;N.y+=P,g[z].set("Gravity",new B(0,P,0))}})}const _=ip(h,l+this.params.shellThickness),{constrainedForces:x,constrainedVel:S}=qR(h,m,t.map(R=>R.vel),_,c,this.params.rollingFriction),{newPos:E,newVel:T,safedt:y,reason:v}=e2(h,x,S,this.params.mass,l-this.params.shellThickness,i,c),C=Ev(E,l,this.params.shellThickness,c);ip(C,l+this.params.shellThickness).map(R=>{if(R.dist<this.params.radius)throw new Error(`球${R.i}-球${R.j}重叠过深: dist=${(R.dist*1e3).toFixed(4)}mm`)});const U=n2(d,t.map(R=>({moment:R.moment,omega:R.omega})),y,this.params.inertia,.3);return{newMagnets:t.map((R,N)=>uu(R,{pos:C[N],vel:T[N],f:x[N],tau:d[N],moment:U[N].moment,omega:U[N].omega})),safedt:y,forces:g,reason:v}}}const Gc=100,Rv=3;function r2(){const t=.0025*Gc,[i,s]=jt.useState([]),[l,c]=jt.useState(new Set),[f,h]=jt.useState(null),[m,d]=jt.useState(!1),[g,_]=jt.useState(4e-5),[x,S]=jt.useState(!1),[E,T]=jt.useState(0),[y,v]=jt.useState(null),[C,U]=jt.useState([]),[R,N]=jt.useState(!1),[z,P]=jt.useState({}),X=jt.useRef(null),A=jt.useRef(null),L=jt.useRef(null),V=jt.useRef(null),Y=jt.useRef(null),Z=jt.useRef(new Set);Z.current=l;const at=jt.useRef(null),tt=jt.useRef(!0),O=jt.useRef({magnets:i,isSimulating:m,simSpeed:g,useGravity:x});O.current={magnets:i,isSimulating:m,simSpeed:g,useGravity:x};const H=pR({selectedIds:l,setSelectedIds:c,keyTrapRef:at,stateRef:O}),{activeGroup:et,groups:yt,setNewGroupName:xt,createGroup:F,getIdsInAffectedGroup:J,cleanupIds:dt,resetGroups:Dt}=H,Pt=jt.useRef(null);jt.useEffect(a2(Pt,N,.0025),[]),jt.useEffect(()=>{hR().then($=>(U($),nd($[0],.0025))).then($=>s($.magnets)).catch(console.error)},[]);const it=l.size===1?[...l][0]:null,{push:ut,reset:Ot,histIdxRef:Ht}=zR({getMagnets:()=>O.current.magnets,selectedId:it,onApplySnap:$=>{tt.current=!0,s($);const Et=$.find(bt=>bt.id===it);Et&&v(tp(Et))}}),{meshesRef:Gt,showMoments:pe,showForceTorques:Je,setShowMoments:ge,setShowForceTorques:me}=PR({containerRef:X,sceneRef:A,cameraRef:L,rendererRef:V,controlsRef:Y},{magnets:i,selectedIds:l,activeGroup:et,groups:yt,ready:R,getIdsInAffectedGroup:J,keyTrapRef:at},t,Gc,Rv),{stepDeltaTimeRef:Te}=xR(Pt,O,R,X,A,L,V,Y,tt,Z,s,v,T);jt.useEffect(()=>{if(it===null){v(null);return}const $=i.find(Et=>Et.id===it);v($?tp($):null)},[it]);const{handleKeyDown:re}=_R({stateRef:O,cameraRef:L,rendererRef:V,setMagnets:s,needsSyncRef:tt,getIdsInAffectedGroup:J},Rv,Gc,.0025),je=jt.useRef(null),W=$=>{je.current={x:$.clientX,y:$.clientY}},qe=$=>{const Et=X.current,bt=L.current;if(!Et||!bt)return;const At=je.current;if(At){const _t=$.clientX-At.x,pt=$.clientY-At.y;if(_t*_t+pt*pt>25)return}const Vt=Et.getBoundingClientRect(),k=new le(($.clientX-Vt.left)/Vt.width*2-1,-(($.clientY-Vt.top)/Vt.height)*2+1),Rt=new ix;Rt.setFromCamera(k,bt);const wt=Rt.intersectObjects(Gt.current),Ut=wt.length>0?wt[0].object.userData.id:null;Ut===null?$.shiftKey||c(new Set):$.shiftKey?c(_t=>{const pt=new Set(_t);return pt.has(Ut)?pt.delete(Ut):pt.add(Ut),pt}):c(new Set([Ut]))},ye=()=>{tt.current=!0,s($=>[...$,nu({pos:new B((Math.random()-.5)*.02,(Math.random()-.5)*.02,0),color:Math.random()>.5?4474111:16729156})]),T(0)},Ae=()=>{const $=J();$.size!==0&&(tt.current=!0,s(Et=>Et.filter(bt=>!$.has(bt.id))),dt($),c(new Set),T(0))},qt=()=>{if(!et||!yt[et])return;const $=yt[et];if(i.filter(Rt=>$.has(Rt.id)).length===0)return;const bt=J(),At=i.filter(Rt=>bt.has(Rt.id)),Vt=$d(At.map(Rt=>Rt.pos)),k=aR(At,l,Vt);k&&s(Rt=>{const wt=dx(Rt,$,Vt,k,.0025);return wt?(tt.current=!0,Rt.map(Ut=>{if(!$.has(Ut.id))return Ut;const _t=wt.get(Ut.id);return{...Ut,pos:_t.pos,moment:_t.moment}})):Rt})},I=$=>{var Et;(Et=Pt.current)==null||Et.reset(),Ot(),tt.current=!0,rR(),nd($,.0025).then(bt=>s(bt.magnets)),c(new Set),Dt(),d(!1),T(0)},b=($,Et,bt)=>{const At=parseFloat(bt);if(isNaN(At))return;const k={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[$];if(!k)return;const[Rt,wt]=k;ut(i);const Ut=i.map(_t=>{if(_t.id!==it)return _t;const pt=_t[Rt].toArray?_t[Rt].toArray():[0,0,0];return pt[Et]=At*wt,{..._t,[Rt]:new B(...pt)}});ut(Ut),Ht.current=-1,tt.current=!0,s(Ut),v(_t=>{if(!_t)return _t;const pt={..._t,[$]:[..._t[$]]};return pt[$][Et]=(At==null?void 0:At.toFixed(6))??"N/A",pt})},j=jt.useCallback($=>{const Et=uR(i.map(bt=>({...bt,pos:bt.pos.clone().multiplyScalar(400)})),"exported","radius");if($==="copy")navigator.clipboard.writeText(Et).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const bt=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([Et],{type:"application/json"})),download:`magnets_${Date.now()}.json`});bt.click(),URL.revokeObjectURL(bt.href)}},[i]),gt=()=>{const $=lR(i,it,f);$&&(ut(i),ut($),tt.current=!0,s($))},Tt=()=>{m||(tt.current=!0),d($=>!$)},ht=jt.useCallback($=>{const Et=yt[$],bt=i.filter(k=>Et.has(k.id));if(bt.length===0)return;const At=$d(bt.map(k=>k.pos)),Vt=bt.map(k=>({pos:k.pos.clone().sub(At),moment:k.moment.clone(),color:k.color}));P(k=>({...k,[$]:{magnets:Vt}}))},[et,yt,i]),Yt=jt.useCallback(async($,Et)=>{const bt=new Set,At=[],Vt=z[$];if(Vt)for(const k of Vt.magnets){const Rt=nu({pos:k.pos.clone().add(Et),moment:k.moment.clone(),color:k.color,fixed:k.fixed});bt.add(Rt.id),At.push(Rt)}if(C.includes($)){const k=await nd($,.0025);for(const Rt of k.magnets)Rt.pos.add(Et),bt.add(Rt.id),At.push(Rt)}bt.size>0&&s(k=>{const Rt=[...k,...At];return hx(Rt,bt,new B,.0025)===null?k:(tt.current=!0,ut(k),ut(Rt),Ht.current=-1,c(bt),xt($),F(),T(0),Rt)})},[z,C]),Nt=jt.useCallback($=>{$.preventDefault(),$.dataTransfer.dropEffect="copy"},[]),Wt=jt.useCallback($=>{$.preventDefault();const Et=$.dataTransfer.getData("text/x-preset-name"),bt=OR(X.current,L.current,$.clientX,$.clientY,Gc);Et&&Yt(Et,bt)},[z,Yt]),te=($,Et)=>{const bt=J();if(bt.size===0)return;ut(i),tt.current=!0;const At=i.map(Vt=>bt.has(Vt.id)?{...Vt,[$]:Et}:Vt);ut(At),Ht.current=-1,s(At)};if(!R)return St.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:St.jsxs("div",{children:[St.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),St.jsx("div",{children:"Loading physics engine..."})]})});const Ct=J();return St.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[St.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[St.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[St.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟",St.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"PGS"})]}),St.jsx(tR,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:Te,totalSimTime:E,useGravity:x,magnets:i,selectedId:it,refYId:f,setRefYId:h,onToggle:Tt,onResetVel:()=>{tt.current=!0,s($=>$.map(Et=>({...Et,vel:new B,omega:new B})))},onPerturb:()=>{tt.current=!0,s($=>$.map(Et=>oR(Et,.2*.0025)))},onReframe:gt,onSimSpeedChange:_,onGravityChange:S,showMoments:pe,setShowMoments:ge,showForceTorques:Je,setShowForceTorques:me,children:St.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"10px"},children:[St.jsx("button",{onClick:ye,style:{...pn,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),St.jsx("button",{onClick:()=>j("download"),style:{...pn,flex:1},children:"⬇ 导出"}),St.jsx("button",{onClick:()=>j("copy"),style:{...pn,flex:1},children:"📋 复制"})]})}),St.jsx(KA,{grouping:H,selectedIds:l,onDeselect:()=>{H.setActiveGroup(null),H.setNewGroupName("")},onRemoveMagnet:Ae,adsorbToAxis:qt,saveGroupAsPreset:ht,presetPanel:St.jsx(nR,{presets:C,customPresets:z,setCustomPresets:P,applyPreset:I})}),Ct.size>1&&St.jsxs("div",{style:Ep,children:[St.jsxs("div",{style:Qo,children:["批量修改 (",Ct.size,")"]}),St.jsx("div",{style:{fontSize:"10px",color:"#666",marginBottom:"4px"},children:"颜色"}),St.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"8px"},children:[[16729156,4474111,4521796,16768256,16729343,4521983,16746496,8930559].map($=>St.jsx("button",{onClick:()=>te("color",$),style:{width:"22px",height:"22px",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",background:`#${$.toString(16).padStart(6,"0")}`}},$)),St.jsx("input",{type:"color",onChange:$=>te("color",parseInt($.target.value.slice(1),16)),style:{width:"22px",height:"22px",padding:0,border:"none",borderRadius:"4px",cursor:"pointer"}})]}),St.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[St.jsx("button",{onClick:()=>te("vel",new B),style:pn,children:"清零速度"}),St.jsx("button",{onClick:()=>te("omega",new B),style:pn,children:"清零角速度"}),St.jsx("button",{onClick:()=>{const $=J();tt.current=!0,s(Et=>Et.map(bt=>$.has(bt.id)?{...bt,fixed:!bt.fixed}:bt))},style:pn,children:"切换固定"})]}),St.jsx("div",{style:{fontSize:"10px",color:"#666",marginTop:"6px",marginBottom:"4px"},children:"磁矩方向"}),St.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:[["+X",[1,0,0]],["−X",[-1,0,0]],["+Y",[0,1,0]],["−Y",[0,-1,0]],["+Z",[0,0,1]],["−Z",[0,0,-1]]].map(([$,Et])=>St.jsx("button",{onClick:()=>{const bt=J();ut(i),tt.current=!0;const At=i.map(Vt=>{if(!bt.has(Vt.id))return Vt;const k=Math.sqrt(Vt.moment[0]**2+Vt.moment[1]**2+Vt.moment[2]**2);return{...Vt,moment:new B(...Et).multiplyScalar(k)}});ut(At),Ht.current=-1,s(At)},style:pn,children:$},$))})]}),it!==null&&St.jsx(eR,{selectedId:it,selectedMag:i.find($=>$.id===it),isSimulating:m,editDraft:y,setEditDraft:v,onToggle:Tt,onToggleFixed:()=>{tt.current=!0,s($=>$.map(Et=>Et.id===it?{...Et,fixed:!Et.fixed}:Et))},onRemove:Ae,onCommit:b})]}),St.jsx("div",{ref:X,onClick:qe,onMouseDown:W,onDragOver:Nt,onDrop:Wt,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer",position:"relative"},children:St.jsx("textarea",{ref:at,onKeyDown:re,style:{position:"absolute",left:0,top:0,width:"1px",height:"1px",opacity:0,padding:0,border:"none",outline:"none",resize:"none",overflow:"hidden",pointerEvents:"none"},tabIndex:-1})})]})}US.createRoot(document.getElementById("root")).render(St.jsx(jt.StrictMode,{children:St.jsx(r2,{})}));
