var fy=Object.defineProperty;var hy=(r,t,i)=>t in r?fy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var e_=(r,t,i)=>hy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var _h={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function dy(){if(n_)return ko;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var i_;function py(){return i_||(i_=1,_h.exports=dy()),_h.exports}var Wt=py(),vh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function my(){if(a_)return oe;a_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(N,$,_t){this.props=N,this.context=$,this.refs=M,this.updater=_t||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=v.prototype;function w(N,$,_t){this.props=N,this.context=$,this.refs=M,this.updater=_t||b}var D=w.prototype=new L;D.constructor=w,T(D,v.prototype),D.isPureReactComponent=!0;var P=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function A(N,$,_t){var wt=_t.ref;return{$$typeof:r,type:N,key:$,ref:wt!==void 0?wt:null,props:_t}}function U(N,$){return A(N.type,$,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function J(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_t){return $[_t]})}var tt=/\/+/g;function ht(N,$){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):$.toString(36)}function ft(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function I(N,$,_t,wt,Ot){var at=typeof N;(at==="undefined"||at==="boolean")&&(N=null);var dt=!1;if(N===null)dt=!0;else switch(at){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(N.$$typeof){case r:case t:dt=!0;break;case g:return dt=N._init,I(dt(N._payload),$,_t,wt,Ot)}}if(dt)return Ot=Ot(N),dt=wt===""?"."+ht(N,0):wt,P(Ot)?(_t="",dt!=null&&(_t=dt.replace(tt,"$&/")+"/"),I(Ot,$,_t,"",function(Gt){return Gt})):Ot!=null&&(k(Ot)&&(Ot=U(Ot,_t+(Ot.key==null||N&&N.key===Ot.key?"":(""+Ot.key).replace(tt,"$&/")+"/")+dt)),$.push(Ot)),1;dt=0;var At=wt===""?".":wt+":";if(P(N))for(var Vt=0;Vt<N.length;Vt++)wt=N[Vt],at=At+ht(wt,Vt),dt+=I(wt,$,_t,at,Ot);else if(Vt=E(N),typeof Vt=="function")for(N=Vt.call(N),Vt=0;!(wt=N.next()).done;)wt=wt.value,at=At+ht(wt,Vt++),dt+=I(wt,$,_t,at,Ot);else if(at==="object"){if(typeof N.then=="function")return I(ft(N),$,_t,wt,Ot);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function G(N,$,_t){if(N==null)return N;var wt=[],Ot=0;return I(N,wt,"","",function(at){return $.call(_t,at,Ot++)}),wt}function lt(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(_t){(N._status===0||N._status===-1)&&(N._status=1,N._result=_t)},function(_t){(N._status===0||N._status===-1)&&(N._status=2,N._result=_t)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var bt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Mt={map:G,forEach:function(N,$,_t){G(N,function(){$.apply(this,arguments)},_t)},count:function(N){var $=0;return G(N,function(){$++}),$},toArray:function(N){return G(N,function($){return $})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return oe.Activity=_,oe.Children=Mt,oe.Component=v,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=w,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},oe.cache=function(N){return function(){return N.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(N,$,_t){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var wt=T({},N.props),Ot=N.key;if($!=null)for(at in $.key!==void 0&&(Ot=""+$.key),$)!Y.call($,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&$.ref===void 0||(wt[at]=$[at]);var at=arguments.length-2;if(at===1)wt.children=_t;else if(1<at){for(var dt=Array(at),At=0;At<at;At++)dt[At]=arguments[At+2];wt.children=dt}return A(N.type,Ot,wt)},oe.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},oe.createElement=function(N,$,_t){var wt,Ot={},at=null;if($!=null)for(wt in $.key!==void 0&&(at=""+$.key),$)Y.call($,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ot[wt]=$[wt]);var dt=arguments.length-2;if(dt===1)Ot.children=_t;else if(1<dt){for(var At=Array(dt),Vt=0;Vt<dt;Vt++)At[Vt]=arguments[Vt+2];Ot.children=At}if(N&&N.defaultProps)for(wt in dt=N.defaultProps,dt)Ot[wt]===void 0&&(Ot[wt]=dt[wt]);return A(N,at,Ot)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(N){return{$$typeof:d,render:N}},oe.isValidElement=k,oe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:lt}},oe.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},oe.startTransition=function(N){var $=F.T,_t={};F.T=_t;try{var wt=N(),Ot=F.S;Ot!==null&&Ot(_t,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(B,bt)}catch(at){bt(at)}finally{$!==null&&_t.types!==null&&($.types=_t.types),F.T=$}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(N){return F.H.use(N)},oe.useActionState=function(N,$,_t){return F.H.useActionState(N,$,_t)},oe.useCallback=function(N,$){return F.H.useCallback(N,$)},oe.useContext=function(N){return F.H.useContext(N)},oe.useDebugValue=function(){},oe.useDeferredValue=function(N,$){return F.H.useDeferredValue(N,$)},oe.useEffect=function(N,$){return F.H.useEffect(N,$)},oe.useEffectEvent=function(N){return F.H.useEffectEvent(N)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(N,$,_t){return F.H.useImperativeHandle(N,$,_t)},oe.useInsertionEffect=function(N,$){return F.H.useInsertionEffect(N,$)},oe.useLayoutEffect=function(N,$){return F.H.useLayoutEffect(N,$)},oe.useMemo=function(N,$){return F.H.useMemo(N,$)},oe.useOptimistic=function(N,$){return F.H.useOptimistic(N,$)},oe.useReducer=function(N,$,_t){return F.H.useReducer(N,$,_t)},oe.useRef=function(N){return F.H.useRef(N)},oe.useState=function(N){return F.H.useState(N)},oe.useSyncExternalStore=function(N,$,_t){return F.H.useSyncExternalStore(N,$,_t)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.2.3",oe}var s_;function ep(){return s_||(s_=1,vh.exports=my()),vh.exports}var ge=ep(),xh={exports:{}},Xo={},Sh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function gy(){return r_||(r_=1,(function(r){function t(I,G){var lt=I.length;I.push(G);t:for(;0<lt;){var bt=lt-1>>>1,Mt=I[bt];if(0<l(Mt,G))I[bt]=G,I[lt]=Mt,lt=bt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var G=I[0],lt=I.pop();if(lt!==G){I[0]=lt;t:for(var bt=0,Mt=I.length,N=Mt>>>1;bt<N;){var $=2*(bt+1)-1,_t=I[$],wt=$+1,Ot=I[wt];if(0>l(_t,lt))wt<Mt&&0>l(Ot,_t)?(I[bt]=Ot,I[wt]=lt,bt=wt):(I[bt]=_t,I[$]=lt,bt=$);else if(wt<Mt&&0>l(Ot,lt))I[bt]=Ot,I[wt]=lt,bt=wt;else break t}}return G}function l(I,G){var lt=I.sortIndex-G.sortIndex;return lt!==0?lt:I.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,E=!1,b=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=I)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function P(I){if(T=!1,D(I),!b)if(i(m)!==null)b=!0,B||(B=!0,J());else{var G=i(p);G!==null&&ft(P,G.startTime-I)}}var B=!1,F=-1,Y=5,A=-1;function U(){return M?!0:!(r.unstable_now()-A<Y)}function k(){if(M=!1,B){var I=r.unstable_now();A=I;var G=!0;try{t:{b=!1,T&&(T=!1,L(F),F=-1),E=!0;var lt=x;try{e:{for(D(I),_=i(m);_!==null&&!(_.expirationTime>I&&U());){var bt=_.callback;if(typeof bt=="function"){_.callback=null,x=_.priorityLevel;var Mt=bt(_.expirationTime<=I);if(I=r.unstable_now(),typeof Mt=="function"){_.callback=Mt,D(I),G=!0;break e}_===i(m)&&s(m),D(I)}else s(m);_=i(m)}if(_!==null)G=!0;else{var N=i(p);N!==null&&ft(P,N.startTime-I),G=!1}}break t}finally{_=null,x=lt,E=!1}G=void 0}}finally{G?J():B=!1}}}var J;if(typeof w=="function")J=function(){w(k)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ht=tt.port2;tt.port1.onmessage=k,J=function(){ht.postMessage(null)}}else J=function(){v(k,0)};function ft(I,G){F=v(function(){I(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var lt=x;x=G;try{return I()}finally{x=lt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var lt=x;x=I;try{return G()}finally{x=lt}},r.unstable_scheduleCallback=function(I,G,lt){var bt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?bt+lt:bt):lt=bt,I){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=lt+Mt,I={id:g++,callback:G,priorityLevel:I,startTime:lt,expirationTime:Mt,sortIndex:-1},lt>bt?(I.sortIndex=lt,t(p,I),i(m)===null&&I===i(p)&&(T?(L(F),F=-1):T=!0,ft(P,lt-bt))):(I.sortIndex=Mt,t(m,I),b||E||(b=!0,B||(B=!0,J()))),I},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(I){var G=x;return function(){var lt=x;x=G;try{return I.apply(this,arguments)}finally{x=lt}}}})(yh)),yh}var o_;function _y(){return o_||(o_=1,Sh.exports=gy()),Sh.exports}var Mh={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function vy(){if(l_)return In;l_=1;var r=ep();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},In.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},In.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},In.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},In.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:E}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},In.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},In.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},In.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},In.requestFormReset=function(m){s.d.r(m)},In.unstable_batchedUpdates=function(m,p){return m(p)},In.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},In.useFormStatus=function(){return h.H.useHostTransitionStatus()},In.version="19.2.3",In}var c_;function xy(){if(c_)return Mh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=vy(),Mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function Sy(){if(u_)return Xo;u_=1;var r=_y(),t=ep(),i=xy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case w:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var ft=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},bt=[],Mt=-1;function N(e){return{current:e}}function $(e){0>Mt||(e.current=bt[Mt],bt[Mt]=null,Mt--)}function _t(e,n){Mt++,bt[Mt]=e.current,e.current=n}var wt=N(null),Ot=N(null),at=N(null),dt=N(null);function At(e,n){switch(_t(at,n),_t(Ot,e),_t(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=bg(n),e=Tg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(wt),_t(wt,e)}function Vt(){$(wt),$(Ot),$(at)}function Gt(e){e.memoizedState!==null&&_t(dt,e);var n=wt.current,a=Tg(n,e.type);n!==a&&(_t(Ot,e),_t(wt,a))}function de(e){Ot.current===e&&($(wt),$(Ot)),dt.current===e&&($(dt),Bo._currentValue=lt)}var Qe,me;function pe(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+me}var Te=!1;function se(e,n){if(!e||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ut){ot=ut}e.call(vt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var H=y.split(`
`),nt=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===nt.length)for(o=H.length-1,u=nt.length-1;1<=o&&0<=u&&H[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==nt[u]){var pt=`
`+H[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function je(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return pe("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=je(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qe=Object.prototype.hasOwnProperty,_e=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,qt=r.unstable_shouldYield,O=r.unstable_requestPaint,S=r.unstable_now,z=r.unstable_getCurrentPriorityLevel,it=r.unstable_ImmediatePriority,st=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,Rt=r.unstable_LowPriority,yt=r.unstable_IdlePriority,Ft=r.log,Yt=r.unstable_setDisableYieldValue,mt=null,St=null;function Ut(e){if(typeof Ft=="function"&&Yt(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(mt,e)}catch{}}var Lt=Math.clz32?Math.clz32:X,Et=Math.log,Qt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Et(e)/Qt|0)|0}var Nt=256,Ct=262144,It=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Tt(o):(y&=R,y!==0?u=Tt(y):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~f,R!==0?u=Tt(R):y!==0?u=Tt(y):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=y&~a;0<a;){var pt=31-Lt(a),vt=1<<pt;R[pt]=0,H[pt]=-1;var ot=nt[pt];if(ot!==null)for(nt[pt]=null,pt=0;pt<ot.length;pt++){var ut=ot[pt];ut!==null&&(ut.lane&=-536870913)}a&=~vt}o!==0&&ul(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function ul(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Lt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Lt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Hs(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function Oi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ci=Math.random().toString(36).slice(2),on="__reactFiber$"+ci,bn="__reactProps$"+ci,Ei="__reactContainer$"+ci,Vs="__reactEvents$"+ci,ks="__reactListeners$"+ci,fl="__reactHandles$"+ci,$r="__reactResources$"+ci,cs="__reactMarker$"+ci;function to(e){delete e[on],delete e[bn],delete e[Vs],delete e[ks],delete e[fl]}function Aa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lg(e);e!==null;){if(a=e[on])return a;e=Lg(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[on]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[$r];return n||(n=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[cs]=!0}var q=new Set,ct={};function rt(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(ct[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},zt={};function kt(e){return qe.call(zt,e)?!0:qe.call(Ht,e)?!1:Pt.test(e)?zt[e]=!0:(Ht[e]=!0,!1)}function jt(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function te(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Le(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function re(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,u,f,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?An(e,y,ee(n)):a!=null?An(e,y,ee(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ee(R):e.removeAttribute("name")}function Qi(e,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ye(e)}function An(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ye(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&wn(e,f,n[f])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ox=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return lx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var du=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,qs=null;function Ep(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Pe(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ui(e,!!a.multiple,n,!1)}}}var mu=!1;function bp(e,n,a){if(mu)return e(n,a);mu=!0;try{var o=e(n);return o}finally{if(mu=!1,(Ws!==null||qs!==null)&&($l(),Ws&&(n=Ws,e=qs,qs=Ws=null,Ep(n),e)))for(n=0;n<e.length;n++)Ep(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if($i)try{var no={};Object.defineProperty(no,"passive",{get:function(){gu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{gu=!1}var wa=null,_u=null,dl=null;function Tp(){if(dl)return dl;var e,n=_u,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Ap(){return!1}function kn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:Ap,this.isPropagationStopped=Ap,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=kn(fs),io=_({},fs,{view:0,detail:0}),cx=kn(io),vu,xu,ao,_l=_({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(vu=e.screenX-ao.screenX,xu=e.screenY-ao.screenY):xu=vu=0,ao=e),vu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),Rp=kn(_l),ux=_({},_l,{dataTransfer:0}),fx=kn(ux),hx=_({},io,{relatedTarget:0}),Su=kn(hx),dx=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),px=kn(dx),mx=_({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=kn(mx),_x=_({},fs,{data:0}),Cp=kn(_x),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sx[e])?!!n[e]:!1}function yu(){return yx}var Mx=_({},io,{key:function(e){if(e.key){var n=vx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ex=kn(Mx),bx=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=kn(bx),Tx=_({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),Ax=kn(Tx),Rx=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=kn(Rx),wx=_({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=kn(wx),Ux=_({},fs,{newState:0,oldState:0}),Lx=kn(Ux),Nx=[9,13,27,32],Mu=$i&&"CompositionEvent"in window,so=null;$i&&"documentMode"in document&&(so=document.documentMode);var Ox=$i&&"TextEvent"in window&&!so,Dp=$i&&(!Mu||so&&8<so&&11>=so),Up=" ",Lp=!1;function Np(e,n){switch(e){case"keyup":return Nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Px(e,n){switch(e){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Lp=!0,Up);case"textInput":return e=n.data,e===Up&&Lp?null:e;default:return null}}function Ix(e,n){if(Ys)return e==="compositionend"||!Mu&&Np(e,n)?(e=Tp(),dl=_u=wa=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zx[e.type]:n==="textarea"}function Ip(e,n,a,o){Ws?qs?qs.push(o):qs=[o]:Ws=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function Fx(e){vg(e,0)}function vl(e){var n=us(e);if(Pe(n))return e}function zp(e,n){if(e==="change")return n}var Fp=!1;if($i){var Eu;if($i){var bu="oninput"in document;if(!bu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),bu=typeof Bp.oninput=="function"}Eu=bu}else Eu=!1;Fp=Eu&&(!document.documentMode||9<document.documentMode)}function Hp(){ro&&(ro.detachEvent("onpropertychange",Gp),oo=ro=null)}function Gp(e){if(e.propertyName==="value"&&vl(oo)){var n=[];Ip(n,oo,e,pu(e)),bp(Fx,n)}}function Bx(e,n,a){e==="focusin"?(Hp(),ro=n,oo=a,ro.attachEvent("onpropertychange",Gp)):e==="focusout"&&Hp()}function Hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(oo)}function Gx(e,n){if(e==="click")return vl(n)}function Vx(e,n){if(e==="input"||e==="change")return vl(n)}function kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:kx;function lo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kp(e,n){var a=Vp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vp(a)}}function Xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Xx=$i&&"documentMode"in document&&11>=document.documentMode,js=null,Au=null,co=null,Ru=!1;function qp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||js==null||js!==Jt(o)||(o=js,"selectionStart"in o&&Tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=rc(Au,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Cu={},Yp={};$i&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ds(e){if(Cu[e])return Cu[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yp)return Cu[e]=n[a];return e}var jp=ds("animationend"),Zp=ds("animationiteration"),Kp=ds("animationstart"),Wx=ds("transitionrun"),qx=ds("transitionstart"),Yx=ds("transitioncancel"),Qp=ds("transitionend"),Jp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function Ti(e,n){Jp.set(e,n),rt(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Ks=0,Du=0;function Sl(){for(var e=Ks,n=Du=Ks=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&$p(a,u,f)}}function yl(e,n,a,o){fi[Ks++]=e,fi[Ks++]=n,fi[Ks++]=a,fi[Ks++]=o,Du|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Uu(e,n,a,o){return yl(e,n,a,o),Ml(e)}function ps(e,n){return yl(e,null,null,n),Ml(e)}function $p(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Lt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ml(e){if(50<Lo)throw Lo=0,Gf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function jx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new jx(e,n,a,o)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Lu(e)&&(y=1);else if(typeof e=="string")y=$S(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ti(31,a,n,u),e.elementType=A,e.lanes=f,e;case T:return ms(a.children,u,f,n);case M:y=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case P:return e=ti(13,a,n,u),e.elementType=P,e.lanes=f,e;case B:return e=ti(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:y=10;break t;case L:y=9;break t;case D:y=11;break t;case F:y=14;break t;case Y:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Nu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function em(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Ou(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var nm=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},nm.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Js=[],$s=0,bl=null,uo=0,di=[],pi=0,Da=null,Pi=1,Ii="";function ea(e,n){Js[$s++]=uo,Js[$s++]=bl,bl=e,uo=n}function im(e,n,a){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=Da,Da=e;var o=Pi;e=Ii;var u=32-Lt(o)-1;o&=~(1<<u),a+=1;var f=32-Lt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Pi=1<<32-Lt(n)+u|a<<u|o,Ii=f+e}else Pi=1<<f|a<<u|o,Ii=e}function Pu(e){e.return!==null&&(ea(e,1),im(e,1,0))}function Iu(e){for(;e===bl;)bl=Js[--$s],Js[$s]=null,uo=Js[--$s],Js[$s]=null;for(;e===Da;)Da=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function am(e,n){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=Da,Pi=n.id,Ii=n.overflow,Da=e}var Dn=null,Ze=null,Ee=!1,Ua=null,mi=!1,zu=Error(s(519));function La(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(hi(n,e)),zu}function sm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[bn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)xe(Oo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Mg(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||La(e,!0)}function rm(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Dn=Dn.return}}function tr(e){if(e!==Dn)return!1;if(!Ee)return rm(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nh(e.type,e.memoizedProps)),a=!a),a&&Ze&&La(e),rm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Ug(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Ug(e)}else n===27?(n=Ze,qa(e.type)?(e=oh,oh=null,Ze=e):Ze=n):Ze=Dn?_i(e.stateNode.nextSibling):null;return!0}function gs(){Ze=Dn=null,Ee=!1}function Fu(){var e=Ua;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ua=null),e}function fo(e){Ua===null?Ua=[e]:Ua.push(e)}var Bu=N(null),_s=null,na=null;function Na(e,n,a){_t(Bu,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Bu.current,$(Bu)}function Hu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Gu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Hu(f.return,a,e),o||(y=null);break t}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Hu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function er(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;$n(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===dt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Gu(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return om(_s,e)}function Al(e,n){return _s===null&&vs(e),om(e,n)}function om(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var Zx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Kx=r.unstable_scheduleCallback,Qx=r.unstable_NormalPriority,ln={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new Zx,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&Kx(Qx,function(){e.controller.abort()})}var po=null,ku=0,nr=0,ir=null;function Jx(e,n){if(po===null){var a=po=[];ku=0,nr=Yf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,n.then(lm,lm),n}function lm(){if(--ku===0&&po!==null){ir!==null&&(ir.status="fulfilled");var e=po;po=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $x(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var cm=I.S;I.S=function(e,n){q0=S(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jx(e,n),cm!==null&&cm(e,n)};var xs=N(null);function Xu(){var e=xs.current;return e!==null?e:We.pooledCache}function Rl(e,n){n===null?_t(xs,xs.current):_t(xs,n.pool)}function um(){var e=Xu();return e===null?null:{parent:ln._currentValue,pool:e}}var ar=Error(s(460)),Wu=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function fm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e}throw ys=n,ar}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,ar):a}}var ys=null;function dm(){if(ys===null)throw Error(s(459));var e=ys;return ys=null,e}function pm(e){if(e===ar||e===Cl)throw Error(s(483))}var sr=null,mo=0;function Dl(e){var n=mo;return mo+=1,sr===null&&(sr=[]),hm(sr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function mm(e){function n(j,W){if(e){var et=j.deletions;et===null?(j.deletions=[W],j.flags|=16):et.push(W)}}function a(j,W){if(!e)return null;for(;W!==null;)n(j,W),W=W.sibling;return null}function o(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function u(j,W){return j=ta(j,W),j.index=0,j.sibling=null,j}function f(j,W,et){return j.index=et,e?(et=j.alternate,et!==null?(et=et.index,et<W?(j.flags|=67108866,W):et):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function R(j,W,et,gt){return W===null||W.tag!==6?(W=Nu(et,j.mode,gt),W.return=j,W):(W=u(W,et),W.return=j,W)}function H(j,W,et,gt){var $t=et.type;return $t===T?pt(j,W,et.props.children,gt,et.key):W!==null&&(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Y&&Ss($t)===W.type)?(W=u(W,et.props),go(W,et),W.return=j,W):(W=El(et.type,et.key,et.props,null,j.mode,gt),go(W,et),W.return=j,W)}function nt(j,W,et,gt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=Ou(et,j.mode,gt),W.return=j,W):(W=u(W,et.children||[]),W.return=j,W)}function pt(j,W,et,gt,$t){return W===null||W.tag!==7?(W=ms(et,j.mode,gt,$t),W.return=j,W):(W=u(W,et),W.return=j,W)}function vt(j,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Nu(""+W,j.mode,et),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case E:return et=El(W.type,W.key,W.props,null,j.mode,et),go(et,W),et.return=j,et;case b:return W=Ou(W,j.mode,et),W.return=j,W;case Y:return W=Ss(W),vt(j,W,et)}if(ft(W)||J(W))return W=ms(W,j.mode,et,null),W.return=j,W;if(typeof W.then=="function")return vt(j,Dl(W),et);if(W.$$typeof===w)return vt(j,Al(j,W),et);Ul(j,W)}return null}function ot(j,W,et,gt){var $t=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return $t!==null?null:R(j,W,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case E:return et.key===$t?H(j,W,et,gt):null;case b:return et.key===$t?nt(j,W,et,gt):null;case Y:return et=Ss(et),ot(j,W,et,gt)}if(ft(et)||J(et))return $t!==null?null:pt(j,W,et,gt,null);if(typeof et.then=="function")return ot(j,W,Dl(et),gt);if(et.$$typeof===w)return ot(j,W,Al(j,et),gt);Ul(j,et)}return null}function ut(j,W,et,gt,$t){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get(et)||null,R(W,j,""+gt,$t);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return j=j.get(gt.key===null?et:gt.key)||null,H(W,j,gt,$t);case b:return j=j.get(gt.key===null?et:gt.key)||null,nt(W,j,gt,$t);case Y:return gt=Ss(gt),ut(j,W,et,gt,$t)}if(ft(gt)||J(gt))return j=j.get(et)||null,pt(W,j,gt,$t,null);if(typeof gt.then=="function")return ut(j,W,et,Dl(gt),$t);if(gt.$$typeof===w)return ut(j,W,et,Al(W,gt),$t);Ul(W,gt)}return null}function Xt(j,W,et,gt){for(var $t=null,De=null,Kt=W,ue=W=0,Me=null;Kt!==null&&ue<et.length;ue++){Kt.index>ue?(Me=Kt,Kt=null):Me=Kt.sibling;var Ue=ot(j,Kt,et[ue],gt);if(Ue===null){Kt===null&&(Kt=Me);break}e&&Kt&&Ue.alternate===null&&n(j,Kt),W=f(Ue,W,ue),De===null?$t=Ue:De.sibling=Ue,De=Ue,Kt=Me}if(ue===et.length)return a(j,Kt),Ee&&ea(j,ue),$t;if(Kt===null){for(;ue<et.length;ue++)Kt=vt(j,et[ue],gt),Kt!==null&&(W=f(Kt,W,ue),De===null?$t=Kt:De.sibling=Kt,De=Kt);return Ee&&ea(j,ue),$t}for(Kt=o(Kt);ue<et.length;ue++)Me=ut(Kt,j,ue,et[ue],gt),Me!==null&&(e&&Me.alternate!==null&&Kt.delete(Me.key===null?ue:Me.key),W=f(Me,W,ue),De===null?$t=Me:De.sibling=Me,De=Me);return e&&Kt.forEach(function(Qa){return n(j,Qa)}),Ee&&ea(j,ue),$t}function ne(j,W,et,gt){if(et==null)throw Error(s(151));for(var $t=null,De=null,Kt=W,ue=W=0,Me=null,Ue=et.next();Kt!==null&&!Ue.done;ue++,Ue=et.next()){Kt.index>ue?(Me=Kt,Kt=null):Me=Kt.sibling;var Qa=ot(j,Kt,Ue.value,gt);if(Qa===null){Kt===null&&(Kt=Me);break}e&&Kt&&Qa.alternate===null&&n(j,Kt),W=f(Qa,W,ue),De===null?$t=Qa:De.sibling=Qa,De=Qa,Kt=Me}if(Ue.done)return a(j,Kt),Ee&&ea(j,ue),$t;if(Kt===null){for(;!Ue.done;ue++,Ue=et.next())Ue=vt(j,Ue.value,gt),Ue!==null&&(W=f(Ue,W,ue),De===null?$t=Ue:De.sibling=Ue,De=Ue);return Ee&&ea(j,ue),$t}for(Kt=o(Kt);!Ue.done;ue++,Ue=et.next())Ue=ut(Kt,j,ue,Ue.value,gt),Ue!==null&&(e&&Ue.alternate!==null&&Kt.delete(Ue.key===null?ue:Ue.key),W=f(Ue,W,ue),De===null?$t=Ue:De.sibling=Ue,De=Ue);return e&&Kt.forEach(function(uy){return n(j,uy)}),Ee&&ea(j,ue),$t}function ke(j,W,et,gt){if(typeof et=="object"&&et!==null&&et.type===T&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case E:t:{for(var $t=et.key;W!==null;){if(W.key===$t){if($t=et.type,$t===T){if(W.tag===7){a(j,W.sibling),gt=u(W,et.props.children),gt.return=j,j=gt;break t}}else if(W.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Y&&Ss($t)===W.type){a(j,W.sibling),gt=u(W,et.props),go(gt,et),gt.return=j,j=gt;break t}a(j,W);break}else n(j,W);W=W.sibling}et.type===T?(gt=ms(et.props.children,j.mode,gt,et.key),gt.return=j,j=gt):(gt=El(et.type,et.key,et.props,null,j.mode,gt),go(gt,et),gt.return=j,j=gt)}return y(j);case b:t:{for($t=et.key;W!==null;){if(W.key===$t)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(j,W.sibling),gt=u(W,et.children||[]),gt.return=j,j=gt;break t}else{a(j,W);break}else n(j,W);W=W.sibling}gt=Ou(et,j.mode,gt),gt.return=j,j=gt}return y(j);case Y:return et=Ss(et),ke(j,W,et,gt)}if(ft(et))return Xt(j,W,et,gt);if(J(et)){if($t=J(et),typeof $t!="function")throw Error(s(150));return et=$t.call(et),ne(j,W,et,gt)}if(typeof et.then=="function")return ke(j,W,Dl(et),gt);if(et.$$typeof===w)return ke(j,W,Al(j,et),gt);Ul(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(j,W.sibling),gt=u(W,et),gt.return=j,j=gt):(a(j,W),gt=Nu(et,j.mode,gt),gt.return=j,j=gt),y(j)):a(j,W)}return function(j,W,et,gt){try{mo=0;var $t=ke(j,W,et,gt);return sr=null,$t}catch(Kt){if(Kt===ar||Kt===Cl)throw Kt;var De=ti(29,Kt,null,j.mode);return De.lanes=gt,De.return=j,De}finally{}}}var Ms=mm(!0),gm=mm(!1),Oa=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(e),$p(e,null,a),n}return yl(e,o,n,a),Ml(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function ju(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Zu=!1;function vo(){if(Zu){var e=ir;if(e!==null)throw e}}function xo(e,n,a,o){Zu=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,nt=H.next;H.next=null,y===null?f=nt:y.next=nt,y=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==y&&(R===null?pt.firstBaseUpdate=nt:R.next=nt,pt.lastBaseUpdate=H))}if(f!==null){var vt=u.baseState;y=0,pt=nt=H=null,R=f;do{var ot=R.lane&-536870913,ut=ot!==R.lane;if(ut?(ye&ot)===ot:(o&ot)===ot){ot!==0&&ot===nr&&(Zu=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,ne=R;ot=n;var ke=a;switch(ne.tag){case 1:if(Xt=ne.payload,typeof Xt=="function"){vt=Xt.call(ke,vt,ot);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ne.payload,ot=typeof Xt=="function"?Xt.call(ke,vt,ot):Xt,ot==null)break t;vt=_({},vt,ot);break t;case 2:Oa=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(nt=pt=ut,H=vt):pt=pt.next=ut,y|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);pt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Ga|=y,e.lanes=y,e.memoizedState=vt}}function _m(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function vm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_m(a[e],n)}var rr=N(null),Ll=N(0);function xm(e,n){e=ha,_t(Ll,e),_t(rr,n),ha=e|n.baseLanes}function Ku(){_t(Ll,ha),_t(rr,rr.current)}function Qu(){ha=Ll.current,$(rr),$(Ll)}var ei=N(null),gi=null;function za(e){var n=e.alternate;_t(sn,sn.current&1),_t(ei,e),gi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(gi=e)}function Ju(e){_t(sn,sn.current),_t(ei,e),gi===null&&(gi=e)}function Sm(e){e.tag===22?(_t(sn,sn.current),_t(ei,e),gi===null&&(gi=e)):Fa()}function Fa(){_t(sn,sn.current),_t(ei,ei.current)}function ni(e){$(ei),gi===e&&(gi=null),$(sn)}var sn=N(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sh(a)||rh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ce=null,Ge=null,cn=null,Ol=!1,or=!1,Es=!1,Pl=0,So=0,lr=null,tS=0;function en(){throw Error(s(321))}function $u(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function tf(e,n,a,o,u,f){return aa=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?i0:gf,Es=!1,f=a(o,u),Es=!1,or&&(f=Mm(n,a,o,u)),ym(e),f}function ym(e){I.H=Eo;var n=Ge!==null&&Ge.next!==null;if(aa=0,cn=Ge=ce=null,Ol=!1,So=0,lr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Tl(e)&&(un=!0))}function Mm(e,n,a,o){ce=e;var u=0;do{if(or&&(lr=null),So=0,or=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=a0,f=n(a,o)}while(or);return f}function eS(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ce.flags|=1024),n}function ef(){var e=Pl!==0;return Pl=0,e}function nf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function af(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}aa=0,cn=Ge=ce=null,or=!1,So=Pl=0,lr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ce.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=cn===null?ce.memoizedState:cn.next;if(n!==null)cn=n,Ge=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?ce.memoizedState=cn=e:cn=cn.next=e}return cn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,lr===null&&(lr=[]),e=hm(lr,e,n),n=ce,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?i0:gf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===w)return Un(e)}throw Error(s(438,String(e)))}function sf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=rn();return rf(n,Ge,e)}function rf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=y=null,H=null,nt=n,pt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(ye&vt)===vt:(aa&vt)===vt){var ot=nt.revertLane;if(ot===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===nr&&(pt=!0);else if((aa&ot)===ot){nt=nt.next,ot===nr&&(pt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=vt,y=f):H=H.next=vt,ce.lanes|=ot,Ga|=ot;vt=nt.action,Es&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else ot={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=ot,y=f):H=H.next=ot,ce.lanes|=vt,Ga|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?y=f:H.next=R,!$n(f,e.memoizedState)&&(un=!0,pt&&(a=ir,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function of(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);$n(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Em(e,n,a){var o=ce,u=rn(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!$n((Ge||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,uf(Am.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},Tm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(aa&127)!==0||bm(o,n,a)}return a}function bm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Il(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Tm(e,n,a,o){n.value=a,n.getSnapshot=o,Rm(n)&&Cm(e)}function Am(e,n,a){return a(function(){Rm(n)&&Cm(e)})}function Rm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Cm(e){var n=ps(e,2);n!==null&&jn(n,e,2)}function lf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Es){Ut(!0);try{a()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function wm(e,n,a,o){return e.baseState=a,rf(e,Ge,typeof o=="function"?o:sa)}function nS(e,n,a,o,u){if(Gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var R=a(u,o),H=I.S;H!==null&&H(y,R),Um(e,n,R)}catch(nt){cf(e,n,nt)}finally{f!==null&&y.types!==null&&(f.types=y.types),I.T=f}}else try{f=a(u,o),Um(e,n,f)}catch(nt){cf(e,n,nt)}}function Um(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(e,n,o)},function(o){return cf(e,n,o)}):Lm(e,n,a)}function Lm(e,n,a){n.status="fulfilled",n.value=a,Nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dm(e,a)))}function cf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}e.action=null}function Nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Om(e,n){return n}function Pm(e,n){if(Ee){var a=We.formState;if(a!==null){t:{var o=ce;if(Ee){if(Ze){e:{for(var u=Ze,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}La(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=o,a=t0.bind(null,ce,o),o.dispatch=a,o=lf(!1),f=mf.bind(null,ce,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=nS.bind(null,ce,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Im(e){var n=rn();return zm(n,Ge,e)}function zm(e,n,a){if(n=rf(e,n,Om)[0],e=Fl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(y){throw y===ar?Cl:y}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,cr(9,{destroy:void 0},iS.bind(null,u,a),null)),[o,f,e]}function iS(e,n){e.action=n}function Fm(e){var n=rn(),a=Ge;if(a!==null)return zm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Il(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bm(){return rn().memoizedState}function Bl(e,n,a,o){var u=Hn();ce.flags|=e,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&$u(o,Ge.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(ce.flags|=e,u.memoizedState=cr(1|n,f,a,o))}function Hm(e,n){Bl(8390656,8,e,n)}function uf(e,n){Hl(2048,8,e,n)}function aS(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Il(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Gm(e){var n=rn().memoizedState;return aS({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Vm(e,n){return Hl(4,2,e,n)}function km(e,n){return Hl(4,4,e,n)}function Xm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,Xm.bind(null,n,e),a)}function ff(){}function qm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&$u(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Ym(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&$u(n,o[1]))return o[0];if(o=e(),Es){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o}function hf(e,n,a){return a===void 0||(aa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=j0(),ce.lanes|=e,Ga|=e,a)}function jm(e,n,a,o){return $n(a,n)?a:rr.current!==null?(e=hf(e,a,o),$n(e,n)||(un=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(ye&261930)===0?(un=!0,e.memoizedState=a):(e=j0(),ce.lanes|=e,Ga|=e,n)}function Zm(e,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var y=I.T,R={};I.T=R,mf(e,!1,n,a);try{var H=u(),nt=I.S;if(nt!==null&&nt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=$x(H,o);Mo(e,n,pt,si(e))}else Mo(e,n,o,si(e))}catch(vt){Mo(e,n,{then:function(){},status:"rejected",reason:vt},si())}finally{G.p=f,y!==null&&R.types!==null&&(y.types=R.types),I.T=y}}function sS(){}function df(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Km(e).queue;Zm(e,u,n,lt,a===null?sS:function(){return Qm(e),a(o)})}function Km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qm(e){var n=Km(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},si())}function pf(){return Un(Bo)}function Jm(){return rn().memoizedState}function $m(){return rn().memoizedState}function rS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Pa(a);var o=Ia(n,e,a);o!==null&&(jn(o,n,a),_o(o,n,a)),n={cache:Vu()},e.payload=n;return}n=n.return}}function oS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?e0(n,a):(a=Uu(e,n,a,o),a!==null&&(jn(a,e,o),n0(a,n,o)))}function t0(e,n,a){var o=si();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))e0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,y))return yl(e,n,u,0),We===null&&Sl(),!1}catch{}finally{}if(a=Uu(e,n,u,o),a!==null)return jn(a,e,o),n0(a,n,o),!0}return!1}function mf(e,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(s(479))}else n=Uu(e,a,o,2),n!==null&&jn(n,e,2)}function Gl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function e0(e,n){or=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function n0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Eo={readContext:Un,use:zl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Eo.useEffectEvent=en;var i0={readContext:Un,use:zl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,Xm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Es){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Es){Ut(!0);try{a(n)}finally{Ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=oS.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=lf(e);var n=e.queue,a=t0.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ff,useDeferredValue:function(e,n){var a=Hn();return hf(a,e,n)},useTransition:function(){var e=lf(!1);return e=Zm.bind(null,ce,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Hn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(ye&127)!==0||bm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Hm(Am.bind(null,o,f,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},Tm.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=We.identifierPrefix;if(Ee){var a=Ii,o=Pi;a=(o&~(1<<32-Lt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:pf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:sf,useCacheRefresh:function(){return Hn().memoizedState=rS.bind(null,ce)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},gf={readContext:Un,use:zl,useCallback:qm,useContext:Un,useEffect:uf,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:Fl,useRef:Bm,useState:function(){return Fl(sa)},useDebugValue:ff,useDeferredValue:function(e,n){var a=rn();return jm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Fl(sa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:pf,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=rn();return wm(a,Ge,e,n)},useMemoCache:sf,useCacheRefresh:$m};gf.useEffectEvent=Gm;var a0={readContext:Un,use:zl,useCallback:qm,useContext:Un,useEffect:uf,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:of,useRef:Bm,useState:function(){return of(sa)},useDebugValue:ff,useDeferredValue:function(e,n){var a=rn();return Ge===null?hf(a,e,n):jm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=of(sa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:pf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,n){var a=rn();return Ge!==null?wm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:$m};a0.useEffectEvent=Gm;function _f(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(jn(n,e,a),_o(n,e,a))}};function s0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,f):!0}function r0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&vf.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function o0(e){xl(e)}function l0(e){console.error(e)}function c0(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function u0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function f0(e){return e=Pa(e),e.tag=3,e}function h0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){u0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){u0(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function lS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?tc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(e,o,u)),!1}throw Error(s(435,a.tag))}return Xf(e,o,u),tc(),!1}if(Ee)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(e=Error(s(422),{cause:o}),fo(hi(e,a)))):(o!==zu&&(n=Error(s(423),{cause:o}),fo(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=xf(e.stateNode,o,u),ju(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=hi(f,a),Uo===null?Uo=[f]:Uo.push(f),nn!==4&&(nn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=xf(a.stateNode,o,e),ju(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=f0(u),h0(u,e,a,o),ju(a,u),!1}a=a.return}while(a!==null);return!1}var Sf=Error(s(461)),un=!1;function Ln(e,n,a,o){n.child=e===null?gm(n,null,a,o):Ms(n,e.child,a,o)}function d0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return vs(n),o=tf(e,n,a,y,f,u),R=ef(),e!==null&&!un?(nf(e,n,u),ra(e,n,u)):(Ee&&R&&Pu(n),n.flags|=1,Ln(e,n,o,u),n.child)}function p0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,m0(e,n,f,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Cf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(y,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ta(f,o),e.ref=n.ref,e.return=n,n.child=e}function m0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(lo(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Cf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ra(e,n,u)}return yf(e,n,a,o,u)}function g0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return _0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,f!==null?f.cachePool:null),f!==null?xm(n,f):Ku(),Sm(n);else return o=n.lanes=536870912,_0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rl(n,f.cachePool),xm(n,f),Fa(),n.memoizedState=null):(e!==null&&Rl(n,null),Ku(),Fa());return Ln(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _0(e,n,a,o,u){var f=Xu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rl(n,null),Ku(),Sm(n),e!==null&&er(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function v0(e,n,a){return Ms(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function cS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,bo(null,e);if(Ju(n),(e=Ze)?(e=Dg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=em(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return kl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Ju(n),u)if(n.flags&256)n.flags&=-257,n=v0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||er(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=We,o!==null&&(y=Hs(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,ps(e,y),jn(o,e,y),Sf;tc(),n=v0(e,n,a)}else e=f.treeContext,Ze=_i(y.nextSibling),Dn=n,Ee=!0,Ua=null,mi=!1,e!==null&&am(n,e),n=kl(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yf(e,n,a,o,u){return vs(n),a=tf(e,n,a,o,void 0,u),o=ef(),e!==null&&!un?(nf(e,n,u),ra(e,n,u)):(Ee&&o&&Pu(n),n.flags|=1,Ln(e,n,a,u),n.child)}function x0(e,n,a,o,u,f){return vs(n),n.updateQueue=null,a=Mm(n,o,a,u),ym(e),o=ef(),e!==null&&!un?(nf(e,n,f),ra(e,n,f)):(Ee&&o&&Pu(n),n.flags|=1,Ln(e,n,a,f),n.child)}function S0(e,n,a,o,u){if(vs(n),n.stateNode===null){var f=Qs,y=a.contextType;typeof y=="object"&&y!==null&&(f=Un(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=vf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},qu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Un(y):Qs,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(_f(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&vf.enqueueReplaceState(f,f.state,null),xo(n,o,f,u),vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=bs(a,R);f.props=H;var nt=f.context,pt=a.contextType;y=Qs,typeof pt=="object"&&pt!==null&&(y=Un(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==y)&&r0(n,f,o,y),Oa=!1;var ot=n.memoizedState;f.state=ot,xo(n,o,f,u),vo(),nt=n.memoizedState,R||ot!==nt||Oa?(typeof vt=="function"&&(_f(n,a,vt,o),nt=n.memoizedState),(H=Oa||s0(n,a,H,o,ot,nt,y))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=y,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Yu(e,n),y=n.memoizedProps,pt=bs(a,y),f.props=pt,vt=n.pendingProps,ot=f.context,nt=a.contextType,H=Qs,typeof nt=="object"&&nt!==null&&(H=Un(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==vt||ot!==H)&&r0(n,f,o,H),Oa=!1,ot=n.memoizedState,f.state=ot,xo(n,o,f,u),vo();var ut=n.memoizedState;y!==vt||ot!==ut||Oa||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof R=="function"&&(_f(n,a,R,o),ut=n.memoizedState),(pt=Oa||s0(n,a,pt,o,ot,ut,H)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=H,o=pt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):Ln(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ra(e,n,u),e}function y0(e,n,a,o){return gs(),n.flags|=256,Ln(e,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(e){return{baseLanes:e,cachePool:um()}}function bf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function M0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?za(n):Fa(),(e=Ze)?(e=Dg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=em(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw La(n);return rh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=Wl({mode:"hidden",children:R},u),o=ms(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Ef(a),o.childLanes=bf(e,y,a),n.memoizedState=Mf,bo(null,o)):(za(n),Tf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=Af(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),R=ms(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=Ef(a),o.childLanes=bf(e,y,a),n.memoizedState=Mf,n=bo(null,o));else if(za(n),rh(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var nt=y.dgst;y=nt,o=Error(s(419)),o.stack="",o.digest=y,fo({value:o,source:null,stack:null}),n=Af(e,n,a)}else if(un||er(e,n,a,!1),y=(a&e.childLanes)!==0,un||y){if(y=We,y!==null&&(o=Hs(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ps(e,o),jn(y,e,o),Sf;sh(R)||tc(),n=Af(e,n,a)}else sh(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ze=_i(R.nextSibling),Dn=n,Ee=!0,Ua=null,mi=!1,e!==null&&am(n,e),n=Tf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,H=e.child,nt=H.sibling,o=ta(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?R=ta(nt,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,bo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Ef(a):(u=R.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=um(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=bf(e,y,a),n.memoizedState=Mf,bo(e.child,o)):(za(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Tf(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Af(e,n,a){return Ms(n,e.child,null,a),e=Tf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function E0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Hu(e.return,n,a)}function Rf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function b0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=sn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,_t(sn,y),Ln(e,n,o,a),o=Ee?uo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&E0(e,a,n);else if(e.tag===19)E0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Rf(n,!0,a,null,f,o);break;case"together":Rf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function uS(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Na(n,ln,e.memoizedState.cache),gs();break;case 27:case 5:Gt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?M0(e,n,a):(za(n),e=ra(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return b0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(sn,sn.current),o)break;return null;case 22:return n.lanes=0,g0(e,n,a,n.pendingProps);case 24:Na(n,ln,e.memoizedState.cache)}return ra(e,n,a)}function T0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Cf(e,a)&&(n.flags&128)===0)return un=!1,uS(e,n,a);un=(e.flags&131072)!==0}else un=!1,Ee&&(n.flags&1048576)!==0&&im(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")Lu(e)?(o=bs(e,o),n.tag=1,n=S0(null,n,e,o,a)):(n.tag=0,n=yf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=d0(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=p0(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=bs(o,n.pendingProps),S0(e,n,o,u,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Yu(e,n),xo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Na(n,ln,o),o!==f.cache&&Gu(n,[ln],a,!0),vo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=y0(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),fo(u),n=y0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),Dn=n,Ee=!0,Ua=null,mi=!0,a=gm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gs(),o===u){n=ra(e,n,a);break t}Ln(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=Ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=oc(at.current).createElement(a),o[on]=n,o[bn]=e,Nn(o,a,e),C(o),n.stateNode=o):n.memoizedState=Ig(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&Ee&&(o=n.stateNode=Ng(n.type,n.pendingProps,at.current),Dn=n,mi=!0,u=Ze,qa(n.type)?(oh=u,Ze=_i(o.firstChild)):Ze=u),Ln(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=Ze)&&(o=HS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Dn=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||La(n)),Gt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,nh(u,f)?o=null:y!==null&&nh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(e,n,eS,null,null,a),Bo._currentValue=u),Xl(e,n),Ln(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Ze)&&(a=GS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||La(n)),null;case 13:return M0(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):Ln(e,n,o,a),n.child;case 11:return d0(e,n,n.type,n.pendingProps,a);case 7:return Ln(e,n,n.pendingProps,a),n.child;case 8:return Ln(e,n,n.pendingProps.children,a),n.child;case 12:return Ln(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Ln(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Un(u),o=o(u),n.flags|=1,Ln(e,n,o,a),n.child;case 14:return p0(e,n,n.type,n.pendingProps,a);case 15:return m0(e,n,n.type,n.pendingProps,a);case 19:return b0(e,n,a);case 31:return cS(e,n,a);case 22:return g0(e,n,a,n.pendingProps);case 24:return vs(n),o=Un(ln),e===null?(u=Xu(),u===null&&(u=We,f=Vu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},qu(n),Na(n,ln,u)):((e.lanes&a)!==0&&(Yu(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,ln,o)):(o=f.cache,Na(n,ln,o),o!==u.cache&&Gu(n,[ln],a,!0))),Ln(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function wf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(J0())e.flags|=8192;else throw ys=wl,Wu}else e.flags&=-16777217}function A0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gg(n))if(J0())e.flags|=8192;else throw ys=wl,Wu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,dr|=n)}function To(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function fS(e,n,a){var o=n.pendingProps;switch(Iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(ln),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(oa(n),f!==null?(Ke(n),A0(n,f)):(Ke(n),wf(n,u,null,o,a))):f?f!==e.memoizedState?(oa(n),Ke(n),A0(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),Ke(n),wf(n,u,e,o,a)),null;case 27:if(de(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=wt.current,tr(n)?sm(n):(e=Ng(u,o,a),n.stateNode=e,oa(n))}return Ke(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=wt.current,tr(n))sm(n);else{var y=oc(at.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[on]=n,f[bn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return Ke(n),wf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Mg(e.nodeValue,a)),e||La(n,!0)}else e=oc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=tr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Ke(n),null);case 4:return Vt(),e===null&&Qf(n.stateNode.containerInfo),Ke(n),null;case 10:return ia(n.type),Ke(n),null;case 19:if($(sn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)To(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Nl(e),f!==null){for(n.flags|=128,To(o,!1),e=f.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)tm(a,e),a=a.sibling;return _t(sn,sn.current&1|2),Ee&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&S()>Ql&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ee)return Ke(n),null}else 2*S()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=S(),e.sibling=null,a=sn.current,_t(sn,u?a&1|2:a&1),Ee&&ea(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),Qu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&$(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hS(e,n){switch(Iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(ln),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(sn),null;case 4:return Vt(),null;case 10:return ia(n.type),null;case 22:case 23:return ni(n),Qu(),e!==null&&$(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(ln),null;case 25:return null;default:return null}}function R0(e,n){switch(Iu(n),n.tag){case 3:ia(ln),Vt();break;case 26:case 27:case 5:de(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:$(sn);break;case 10:ia(n.type);break;case 22:case 23:ni(n),Qu(),e!==null&&$(xs);break;case 24:ia(ln)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Be(n,n.return,R)}}function Ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,nt=R;try{nt()}catch(pt){Be(u,H,pt)}}}o=o.next}while(o!==f)}}catch(pt){Be(n,n.return,pt)}}function C0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{vm(n,a)}catch(o){Be(e,e.return,o)}}}function w0(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function D0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Df(e,n,a){try{var o=e.stateNode;OS(o,e.type,a,n),o[bn]=n}catch(u){Be(e,e.return,u)}}function U0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||U0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Lf(e,n,a),e=e.sibling;e!==null;)Lf(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function L0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[on]=e,n[bn]=a}catch(f){Be(e,e.return,f)}}var la=!1,fn=!1,Nf=!1,N0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function dS(e,n){if(e=e.containerInfo,th=pc,e=Wp(e),Tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,R=-1,H=-1,nt=0,pt=0,vt=e,ot=null;e:for(;;){for(var ut;vt!==a||u!==0&&vt.nodeType!==3||(R=y+u),vt!==f||o!==0&&vt.nodeType!==3||(H=y+o),vt.nodeType===3&&(y+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)ot=vt,vt=ut;for(;;){if(vt===e)break e;if(ot===a&&++nt===u&&(R=y),ot===f&&++pt===o&&(H=y),(ut=vt.nextSibling)!==null)break;vt=ot,ot=vt.parentNode}vt=ut}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(eh={focusedElem:e,selectionRange:a},pc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xt=bs(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ah(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ah(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function O0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&Ao(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(a,a.return,y)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(a,a.return,y)}}o&64&&C0(a),o&512&&Ro(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vm(e,n)}catch(y){Be(a,a.return,y)}}break;case 27:n===null&&o&4&&L0(a);case 26:case 5:ua(e,a),n===null&&o&4&&D0(a),o&512&&Ro(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&z0(e,a);break;case 13:ua(e,a),o&4&&F0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=MS.bind(null,a),VS(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||fn,u=la;var f=fn;la=o,(fn=n)&&!f?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=u,fn=f}break;case 30:break;default:ua(e,a)}}function P0(e){var n=e.alternate;n!==null&&(e.alternate=null,P0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function ca(e,n,a){for(a=a.child;a!==null;)I0(e,n,a),a=a.sibling}function I0(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(mt,a)}catch{}switch(a.tag){case 26:fn||zi(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||zi(a,n);var o=$e,u=Xn;qa(a.type)&&($e=a.stateNode,Xn=!1),ca(e,n,a),Io(a.stateNode),$e=o,Xn=u;break;case 5:fn||zi(a,n);case 6:if(o=$e,u=Xn,$e=null,ca(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:$e!==null&&(Xn?(e=$e,Cg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):Cg($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,ca(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),fn||Ba(4,a,n),ca(e,n,a);break;case 1:fn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&w0(a,n,o)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ca(e,n,a),fn=o;break;default:ca(e,n,a)}}function z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Be(n,n.return,a)}}}function F0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Be(n,n.return,a)}}function pS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new N0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new N0),n;default:throw Error(s(435,e.tag))}}function jl(e,n){var a=pS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ES.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){$e=R.stateNode,Xn=!1;break t}break;case 5:$e=R.stateNode,Xn=!1;break t;case 3:case 4:$e=R.stateNode.containerInfo,Xn=!0;break t}R=R.return}if($e===null)throw Error(s(160));I0(f,y,u),$e=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)B0(n,e),n=n.sibling}var Ai=null;function B0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ba(3,e,e.return),Ao(3,e),Ba(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(fn||a===null||zi(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,e),qn(e),o&512&&(fn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[cs]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Nn(f,o,a),f[on]=e,C(f),o=f;break t;case"link":var y=Bg("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Bg("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,C(f),o=f}e.stateNode=o}else Hg(u,e.type,e.stateNode);else e.stateNode=Fg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Hg(u,e.type,e.stateNode):Fg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(fn||a===null||zi(a,a.return)),a!==null&&o&4&&Df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(fn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(Xt){Be(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Df(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Be(e,e.return,Xt)}}break;case 3:if(uc=null,u=Ai,Ai=lc(n.containerInfo),Wn(n,e),Ai=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Xt){Be(e,e.return,Xt)}Nf&&(Nf=!1,H0(e));break;case 4:o=Ai,Ai=lc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ai=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=S()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=la,pt=fn;if(la=nt||u,fn=pt||H,Wn(n,e),fn=pt,la=nt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||la||fn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var vt=H.memoizedProps.style,ot=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Be(H,H.return,Xt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Xt){Be(H,H.return,Xt)}}}else if(n.tag===18){if(a===null){H=n;try{var ut=H.stateNode;u?wg(ut,!0):wg(H.stateNode,!1)}catch(Xt){Be(H,H.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(U0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Uf(e);Yl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(mn(y,""),a.flags&=-33);var R=Uf(e);Yl(e,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=Uf(e);Lf(e,nt,H);break;default:throw Error(s(161))}}catch(pt){Be(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function H0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;H0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)O0(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w0(n,n.return,a),Ts(n);break;case 27:Io(n.stateNode);case 26:case 5:zi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Ao(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(o,o.return,nt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)_m(H[u],R)}catch(nt){Be(o,o.return,nt)}}a&&y&64&&C0(f),Ro(f,f.return);break;case 27:L0(f);case 26:case 5:fa(u,f,a),a&&o===null&&y&4&&D0(f),Ro(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&y&4&&z0(u,f);break;case 13:fa(u,f,a),a&&y&4&&F0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),Ro(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Of(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)G0(e,n,a,o),n=n.sibling}function G0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(e,n,a,o):Co(e,n):f._visibility&2?Ri(e,n,a,o):(f._visibility|=2,ur(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Of(y,n);break;case 24:Ri(e,n,a,o),u&2048&&Pf(n.alternate,n);break;default:Ri(e,n,a,o)}}function ur(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,R=a,H=o,nt=y.flags;switch(y.tag){case 0:case 11:case 15:ur(f,y,R,H,u),Ao(8,y);break;case 23:break;case 22:var pt=y.stateNode;y.memoizedState!==null?pt._visibility&2?ur(f,y,R,H,u):Co(f,y):(pt._visibility|=2,ur(f,y,R,H,u)),u&&nt&2048&&Of(y.alternate,y);break;case 24:ur(f,y,R,H,u),u&&nt&2048&&Pf(y.alternate,y);break;default:ur(f,y,R,H,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Of(o.alternate,o);break;case 24:Co(a,o),u&2048&&Pf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function fr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)V0(e,n,a),e=e.sibling}function V0(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&wo&&e.memoizedState!==null&&ty(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var o=Ai;Ai=lc(e.stateNode.containerInfo),fr(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,fr(e,n,a),wo=o):fr(e,n,a));break;default:fr(e,n,a)}}function k0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,W0(o,e)}k0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)X0(e),e=e.sibling}function X0(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Do(e);break;default:Do(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,W0(o,e)}k0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function W0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(P0(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var mS={getCacheForType:function(e){var n=Un(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(ln).controller.signal}},gS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,ve=null,ye=0,Fe=0,ii=null,Ha=!1,hr=!1,If=!1,ha=0,nn=0,Ga=0,As=0,zf=0,ai=0,dr=0,Uo=null,Yn=null,Ff=!1,Kl=0,q0=0,Ql=1/0,Jl=null,Va=null,gn=0,ka=null,pr=null,da=0,Bf=0,Hf=null,Y0=null,Lo=0,Gf=null;function si(){return(Oe&2)!==0&&ye!==0?ye&-ye:I.T!==null?Yf():Jr()}function j0(){if(ai===0)if((ye&536870912)===0||Ee){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function jn(e,n,a){(e===We&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Xa(e,ye,ai,!1)),Pn(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(As|=a),nn===4&&Xa(e,ye,ai,!1)),Fi(e))}function Z0(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?xS(e,n):kf(e,n,!0),f=o;do{if(u===0){hr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!_S(a)){u=kf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var R=e;u=Uo;var H=R.current.memoizedState.isDehydrated;if(H&&(mr(R,y).flags|=256),y=kf(R,y,!1),y!==2){if(If&&!H){R.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){mr(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ai,!Ha);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-S(),10<u)){if(Xa(o,n,ai,!Ha),xt(o,0,!0)!==0)break t;da=n,o.timeoutHandle=Ag(K0.bind(null,o,a,Yn,Jl,Ff,n,ai,As,dr,Ha,f,"Throttled",-0,0),u);break t}K0(o,a,Yn,Jl,Ff,n,ai,As,dr,Ha,f,null,-0,0)}}break}while(!0);Fi(e)}function K0(e,n,a,o,u,f,y,R,H,nt,pt,vt,ot,ut){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},V0(n,f,vt);var Xt=(f&62914560)===f?Kl-S():(f&4194048)===f?q0-S():0;if(Xt=ey(vt,Xt),Xt!==null){da=f,e.cancelPendingCommit=Xt(ag.bind(null,e,n,f,a,o,u,y,R,H,pt,vt,null,ot,ut)),Xa(e,f,y,!nt);return}}ag(e,n,f,a,o,u,y,R,H)}function _S(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~zf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Lt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&ul(e,a,n)}function $l(){return(Oe&6)===0?(No(0),!1):!0}function Vf(){if(ve!==null){if(Fe===0)var e=ve.return;else e=ve,na=_s=null,af(e),sr=null,mo=0,e=ve;for(;e!==null;)R0(e.alternate,e),e=e.return;ve=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Vf(),We=e,ve=a=ta(e.current,null),ye=n,Fe=0,ii=null,Ha=!1,hr=Dt(e,n),If=!1,dr=ai=zf=As=Ga=nn=0,Yn=Uo=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Lt(o),f=1<<u;n|=e[u],o&=~f}return ha=n,Sl(),a}function Q0(e,n){ce=null,I.H=Eo,n===ar||n===Cl?(n=dm(),Fe=3):n===Wu?(n=dm(),Fe=4):Fe=n===Sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ve===null&&(nn=1,Vl(e,hi(n,e.current)))}function J0(){var e=ei.current;return e===null?!0:(ye&4194048)===ye?gi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===gi:!1}function $0(){var e=I.H;return I.H=Eo,e===null?Eo:e}function tg(){var e=I.A;return I.A=mS,e}function tc(){nn=4,Ha||(ye&4194048)!==ye&&ei.current!==null||(hr=!0),(Ga&134217727)===0&&(As&134217727)===0||We===null||Xa(We,ye,ai,!1)}function kf(e,n,a){var o=Oe;Oe|=2;var u=$0(),f=tg();(We!==e||ye!==n)&&(Jl=null,mr(e,n)),n=!1;var y=nn;t:do try{if(Fe!==0&&ve!==null){var R=ve,H=ii;switch(Fe){case 8:Vf(),y=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Fe;if(Fe=0,ii=null,gr(e,R,H,nt),a&&hr){y=0;break t}break;default:nt=Fe,Fe=0,ii=null,gr(e,R,H,nt)}}vS(),y=nn;break}catch(pt){Q0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,na=_s=null,Oe=o,I.H=u,I.A=f,ve===null&&(We=null,ye=0,Sl()),y}function vS(){for(;ve!==null;)eg(ve)}function xS(e,n){var a=Oe;Oe|=2;var o=$0(),u=tg();We!==e||ye!==n?(Jl=null,Ql=S()+500,mr(e,n)):hr=Dt(e,n);t:do try{if(Fe!==0&&ve!==null){n=ve;var f=ii;e:switch(Fe){case 1:Fe=0,ii=null,gr(e,n,f,1);break;case 2:case 9:if(fm(f)){Fe=0,ii=null,ng(n);break}n=function(){Fe!==2&&Fe!==9||We!==e||(Fe=7),Fi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:fm(f)?(Fe=0,ii=null,ng(n)):(Fe=0,ii=null,gr(e,n,f,7));break;case 5:var y=null;switch(ve.tag){case 26:y=ve.memoizedState;case 5:case 27:var R=ve;if(y?Gg(y):R.stateNode.complete){Fe=0,ii=null;var H=R.sibling;if(H!==null)ve=H;else{var nt=R.return;nt!==null?(ve=nt,ec(nt)):ve=null}break e}}Fe=0,ii=null,gr(e,n,f,5);break;case 6:Fe=0,ii=null,gr(e,n,f,6);break;case 8:Vf(),nn=6;break t;default:throw Error(s(462))}}SS();break}catch(pt){Q0(e,pt)}while(!0);return na=_s=null,I.H=o,I.A=u,Oe=a,ve!==null?0:(We=null,ye=0,Sl(),nn)}function SS(){for(;ve!==null&&!qt();)eg(ve)}function eg(e){var n=T0(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?ec(e):ve=n}function ng(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=x0(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=x0(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:af(n);default:R0(a,n),n=ve=tm(n,ha),n=T0(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?ec(e):ve=n}function gr(e,n,a,o){na=_s=null,af(n),sr=null,mo=0;var u=n.return;try{if(lS(e,u,n,a,ye)){nn=1,Vl(e,hi(a,e.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;nn=1,Vl(e,hi(a,e.current)),ve=null;return}n.flags&32768?(Ee||o===1?e=!0:hr||(ye&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),ig(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){ig(n,Ha);return}e=n.return;var a=fS(n.alternate,n,ha);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);nn===0&&(nn=5)}function ig(e,n){do{var a=hS(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);nn=6,ve=null}function ag(e,n,a,o,u,f,y,R,H){e.cancelPendingCommit=null;do nc();while(gn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Du,Mi(e,a,f,y,R,H),e===We&&(ve=We=null,ye=0),pr=n,ka=e,da=a,Bf=f,Hf=u,Y0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bS(K,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=G.p,G.p=2,y=Oe,Oe|=4;try{dS(e,n,a)}finally{Oe=y,G.p=u,I.T=o}}gn=1,sg(),rg(),og()}}function sg(){if(gn===1){gn=0;var e=ka,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Oe;Oe|=4;try{B0(n,e);var f=eh,y=Wp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&Xp(R.ownerDocument.documentElement,R)){if(H!==null&&Tu(R)){var nt=H.start,pt=H.end;if(pt===void 0&&(pt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(pt,R.value.length);else{var vt=R.ownerDocument||document,ot=vt&&vt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Xt=R.textContent.length,ne=Math.min(H.start,Xt),ke=H.end===void 0?ne:Math.min(H.end,Xt);!ut.extend&&ne>ke&&(y=ke,ke=ne,ne=y);var j=kp(R,ne),W=kp(R,ke);if(j&&W&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var et=vt.createRange();et.setStart(j.node,j.offset),ut.removeAllRanges(),ne>ke?(ut.addRange(et),ut.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ut.addRange(et))}}}}for(vt=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&vt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var gt=vt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}pc=!!th,eh=th=null}finally{Oe=u,G.p=o,I.T=a}}e.current=n,gn=2}}function rg(){if(gn===2){gn=0;var e=ka,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Oe;Oe|=4;try{O0(e,n.alternate,n)}finally{Oe=u,G.p=o,I.T=a}}gn=3}}function og(){if(gn===4||gn===3){gn=0,O();var e=ka,n=pr,a=da,o=Y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,pr=ka=null,lg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Gs(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=G.p,G.p=2,I.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];f(R.value,{componentStack:R.stack})}}finally{I.T=n,G.p=u}}(da&3)!==0&&nc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Gf?Lo++:(Lo=0,Gf=e):Lo=0,No(0)}}function lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function nc(){return sg(),rg(),og(),cg()}function cg(){if(gn!==5)return!1;var e=ka,n=Bf;Bf=0;var a=Gs(da),o=I.T,u=G.p;try{G.p=32>a?32:a,I.T=null,a=Hf,Hf=null;var f=ka,y=da;if(gn=0,pr=ka=null,da=0,(Oe&6)!==0)throw Error(s(331));var R=Oe;if(Oe|=4,X0(f.current),G0(f,f.current,y,a),Oe=R,No(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(mt,f)}catch{}return!0}finally{G.p=u,I.T=o,lg(e,n)}}function ug(e,n,a){n=hi(a,n),n=xf(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(Pn(e,2),Fi(e))}function Be(e,n,a){if(e.tag===3)ug(e,e,a);else for(;n!==null;){if(n.tag===3){ug(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=hi(a,e),a=f0(2),o=Ia(n,a,2),o!==null&&(h0(a,o,n,e),Pn(o,2),Fi(o));break}}n=n.return}}function Xf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new gS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(If=!0,u.add(a),e=yS.bind(null,e,n,a),n.then(e,e))}function yS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(ye&a)===a&&(nn===4||nn===3&&(ye&62914560)===ye&&300>S()-Kl?(Oe&2)===0&&mr(e,0):zf|=a,dr===ye&&(dr=0)),Fi(e)}function fg(e,n){n===0&&(n=Ie()),e=ps(e,n),e!==null&&(Pn(e,n),Fi(e))}function MS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),fg(e,a)}function ES(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),fg(e,a)}function bS(e,n){return _e(e,n)}var ic=null,_r=null,Wf=!1,ac=!1,qf=!1,Wa=0;function Fi(e){e!==_r&&e.next===null&&(_r===null?ic=_r=e:_r=_r.next=e),ac=!0,Wf||(Wf=!0,AS())}function No(e,n){if(!qf&&ac){qf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,mg(o,f))}else f=ye,f=xt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,mg(o,f));o=o.next}while(a);qf=!1}}function TS(){hg()}function hg(){ac=Wf=!1;var e=0;Wa!==0&&IS()&&(e=Wa);for(var n=S(),a=null,o=ic;o!==null;){var u=o.next,f=dg(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(_r=a)):(a=o,(e!==0||(f&3)!==0)&&(ac=!0)),o=u}gn!==0&&gn!==5||No(e),Wa!==0&&(Wa=0)}function dg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Lt(f),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&o)!==0)&&(u[y]=ae(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=We,a=ye,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),Gs(a)){case 2:case 8:a=st;break;case 32:a=K;break;case 268435456:a=yt;break;default:a=K}return o=pg.bind(null,e),a=_e(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function pg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=ye;return o=xt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Z0(e,o,n),dg(e,S()),e.callbackNode!=null&&e.callbackNode===a?pg.bind(null,e):null)}function mg(e,n){if(nc())return null;Z0(e,n,!0)}function AS(){FS(function(){(Oe&6)!==0?_e(it,TS):hg()})}function Yf(){if(Wa===0){var e=nr;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Wa=e}return Wa}function gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function _g(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function RS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=gg((u[bn]||null).action),y=o.submitter;y&&(n=(n=y[bn]||null)?gg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new gl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=y?_g(u,y):new FormData(u);df(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=y?_g(u,y):new FormData(u),df(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var jf=0;jf<wu.length;jf++){var Zf=wu[jf],CS=Zf.toLowerCase(),wS=Zf[0].toUpperCase()+Zf.slice(1);Ti(CS,"on"+wS)}Ti(jp,"onAnimationEnd"),Ti(Zp,"onAnimationIteration"),Ti(Kp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Wx,"onTransitionRun"),Ti(qx,"onTransitionStart"),Ti(Yx,"onTransitionCancel"),Ti(Qp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],H=R.instance,nt=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(pt){xl(pt)}u.currentTarget=null,f=H}else for(y=0;y<o.length;y++){if(R=o[y],H=R.instance,nt=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(pt){xl(pt)}u.currentTarget=null,f=H}}}}function xe(e,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var o=e+"__bubble";a.has(o)||(xg(n,e,2,!1),a.add(o))}function Kf(e,n,a){var o=0;n&&(o|=4),xg(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Qf(e){if(!e[sc]){e[sc]=!0,q.forEach(function(a){a!=="selectionchange"&&(DS.has(a)||Kf(a,!1,e),Kf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,Kf("selectionchange",!1,n))}}function xg(e,n,a,o){switch(jg(n)){case 2:var u=ay;break;case 8:u=sy;break;default:u=hh}a=u.bind(null,n,a,e),u=void 0,!gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Jf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Aa(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=f=y;continue t}R=R.parentNode}}o=o.return}bp(function(){var nt=f,pt=pu(a),vt=[];t:{var ot=Jp.get(e);if(ot!==void 0){var ut=gl,Xt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":ut=Ex;break;case"focusin":Xt="focus",ut=Su;break;case"focusout":Xt="blur",ut=Su;break;case"beforeblur":case"afterblur":ut=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Ax;break;case jp:case Zp:case Kp:ut=px;break;case Qp:ut=Cx;break;case"scroll":case"scrollend":ut=cx;break;case"wheel":ut=Dx;break;case"copy":case"cut":case"paste":ut=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=wp;break;case"toggle":case"beforetoggle":ut=Lx}var ne=(n&4)!==0,ke=!ne&&(e==="scroll"||e==="scrollend"),j=ne?ot!==null?ot+"Capture":null:ot;ne=[];for(var W=nt,et;W!==null;){var gt=W;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||j===null||(gt=eo(W,j),gt!=null&&ne.push(Po(W,gt,et))),ke)break;W=W.return}0<ne.length&&(ot=new ut(ot,Xt,null,a,pt),vt.push({event:ot,listeners:ne}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&a!==du&&(Xt=a.relatedTarget||a.fromElement)&&(Aa(Xt)||Xt[Ei]))break t;if((ut||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Xt=a.relatedTarget||a.toElement,ut=nt,Xt=Xt?Aa(Xt):null,Xt!==null&&(ke=c(Xt),ne=Xt.tag,Xt!==ke||ne!==5&&ne!==27&&ne!==6)&&(Xt=null)):(ut=null,Xt=nt),ut!==Xt)){if(ne=Rp,gt="onMouseLeave",j="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ne=wp,gt="onPointerLeave",j="onPointerEnter",W="pointer"),ke=ut==null?ot:us(ut),et=Xt==null?ot:us(Xt),ot=new ne(gt,W+"leave",ut,a,pt),ot.target=ke,ot.relatedTarget=et,gt=null,Aa(pt)===nt&&(ne=new ne(j,W+"enter",Xt,a,pt),ne.target=et,ne.relatedTarget=ke,gt=ne),ke=gt,ut&&Xt)e:{for(ne=US,j=ut,W=Xt,et=0,gt=j;gt;gt=ne(gt))et++;gt=0;for(var $t=W;$t;$t=ne($t))gt++;for(;0<et-gt;)j=ne(j),et--;for(;0<gt-et;)W=ne(W),gt--;for(;et--;){if(j===W||W!==null&&j===W.alternate){ne=j;break e}j=ne(j),W=ne(W)}ne=null}else ne=null;ut!==null&&Sg(vt,ot,ut,ne,!1),Xt!==null&&ke!==null&&Sg(vt,ke,Xt,ne,!0)}}t:{if(ot=nt?us(nt):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var De=zp;else if(Pp(ot))if(Fp)De=Vx;else{De=Hx;var Kt=Bx}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&bi(nt.elementType)&&(De=zp):De=Gx;if(De&&(De=De(e,nt))){Ip(vt,De,a,pt);break t}Kt&&Kt(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&An(ot,"number",ot.value)}switch(Kt=nt?us(nt):window,e){case"focusin":(Pp(Kt)||Kt.contentEditable==="true")&&(js=Kt,Au=nt,co=null);break;case"focusout":co=Au=js=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,qp(vt,a,pt);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":qp(vt,a,pt)}var ue;if(Mu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ys?Np(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Dp&&a.locale!=="ko"&&(Ys||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ys&&(ue=Tp()):(wa=pt,_u="value"in wa?wa.value:wa.textContent,Ys=!0)),Kt=rc(nt,Me),0<Kt.length&&(Me=new Cp(Me,e,null,a,pt),vt.push({event:Me,listeners:Kt}),ue?Me.data=ue:(ue=Op(a),ue!==null&&(Me.data=ue)))),(ue=Ox?Px(e,a):Ix(e,a))&&(Me=rc(nt,"onBeforeInput"),0<Me.length&&(Kt=new Cp("onBeforeInput","beforeinput",null,a,pt),vt.push({event:Kt,listeners:Me}),Kt.data=ue)),RS(vt,e,nt,a,pt)}vg(vt,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,f)),u=eo(e,n),u!=null&&o.push(Po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function US(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sg(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,H=R.alternate,nt=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||nt===null||(H=nt,u?(nt=eo(a,f),nt!=null&&y.unshift(Po(a,nt,H))):u||(nt=eo(a,f),nt!=null&&y.push(Po(a,nt,H)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var LS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(LS,`
`).replace(NS,"")}function Mg(e,n){return n=yg(n),yg(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":te(e,"class",o);break;case"tabIndex":te(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":te(e,a,o);break;case"style":Xs(e,o,f);break;case"data":if(n!=="object"){te(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),jt(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ox.get(a)||a,jt(e,a,o))}}function $f(e,n,a,o,u,f){switch(a){case"style":Xs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jt(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,y,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var R=f=y=u=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":y=pt;break;case"checked":H=pt;break;case"defaultChecked":nt=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,pt,a,null)}}Qi(e,f,R,H,nt,y,u,!1);return;case"select":xe("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Ve(e,n,u,R,a,null)}n=f,a=y,e.multiple=!!o,n!=null?ui(e,!!o,n,!1):a!=null&&ui(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ve(e,n,y,R,a,null)}Rn(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,H,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)xe(Oo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,nt,o,a,null)}return;default:if(bi(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&$f(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ve(e,n,R,o,a,null))}function OS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,H=null,nt=null,pt=null;for(ut in a){var vt=a[ut];if(a.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=vt;default:o.hasOwnProperty(ut)||Ve(e,n,ut,null,o,vt)}}for(var ot in o){var ut=o[ot];if(vt=a[ot],o.hasOwnProperty(ot)&&(ut!=null||vt!=null))switch(ot){case"type":f=ut;break;case"name":u=ut;break;case"checked":nt=ut;break;case"defaultChecked":pt=ut;break;case"value":y=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==vt&&Ve(e,n,ot,ut,o,vt)}}Tn(e,y,R,H,nt,pt,f,u);return;case"select":ut=y=R=ot=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ut=H;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==H&&Ve(e,n,u,f,o,H)}n=R,a=y,o=ut,ot!=null?ui(e,!!a,ot,!1):!!o!=!!a&&(n!=null?ui(e,!!a,n,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ot=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,y,u,o,f)}ze(e,ot,ut);return;case"option":for(var Xt in a)if(ot=a[Xt],a.hasOwnProperty(Xt)&&ot!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Ve(e,n,Xt,null,o,ot)}for(H in o)if(ot=o[H],ut=a[H],o.hasOwnProperty(H)&&ot!==ut&&(ot!=null||ut!=null))switch(H){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ve(e,n,H,ot,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)ot=a[ne],a.hasOwnProperty(ne)&&ot!=null&&!o.hasOwnProperty(ne)&&Ve(e,n,ne,null,o,ot);for(nt in o)if(ot=o[nt],ut=a[nt],o.hasOwnProperty(nt)&&ot!==ut&&(ot!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ve(e,n,nt,ot,o,ut)}return;default:if(bi(n)){for(var ke in a)ot=a[ke],a.hasOwnProperty(ke)&&ot!==void 0&&!o.hasOwnProperty(ke)&&$f(e,n,ke,void 0,o,ot);for(pt in o)ot=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||ot===ut||ot===void 0&&ut===void 0||$f(e,n,pt,ot,o,ut);return}}for(var j in a)ot=a[j],a.hasOwnProperty(j)&&ot!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,ot);for(vt in o)ot=o[vt],ut=a[vt],!o.hasOwnProperty(vt)||ot===ut||ot==null&&ut==null||Ve(e,n,vt,ot,o,ut)}function Eg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&Eg(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>R)break;var pt=H.transferSize,vt=H.initiatorType;pt&&Eg(vt)&&(H=H.responseEnd,y+=pt*(H<R?1:(R-nt)/(H-nt)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var th=null,eh=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function nh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ih=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===ih?!1:(ih=e,!0):(ih=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(e){return Rg.resolve(null).then(e).catch(BS)}:Ag;function BS(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function Cg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[cs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Io(e.ownerDocument.body);a=u}while(a);yr(n)}function wg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ah(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ah(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function HS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function GS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Dg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function sh(e){return e.data==="$?"||e.data==="$~"}function rh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function VS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var oh=null;function Ug(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ng(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var vi=new Map,Og=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=G.d;G.d={f:kS,r:XS,D:WS,C:qS,L:YS,m:jS,X:KS,S:ZS,M:QS};function kS(){var e=pa.f(),n=$l();return e||n}function XS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Qm(n):pa.r(e)}var vr=typeof document>"u"?null:document;function Pg(e,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=re(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Og.has(u)||(Og.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function WS(e){pa.D(e),Pg("dns-prefetch",e,null)}function qS(e,n){pa.C(e,n),Pg("preconnect",e,n)}function YS(e,n,a){pa.L(e,n,a);var o=vr;if(o&&e&&n){var u='link[rel="preload"][as="'+re(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+re(a.imageSizes)+'"]')):u+='[href="'+re(e)+'"]';var f=u;switch(n){case"style":f=xr(e);break;case"script":f=Sr(e)}vi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function jS(e,n){pa.m(e,n);var a=vr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+re(o)+'"][href="'+re(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!vi.has(f)&&(e=_({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Nn(o,"link",e),C(o),a.head.appendChild(o)}}}function ZS(e,n,a){pa.S(e,n,a);var o=vr;if(o&&e){var u=Ca(o).hoistableStyles,f=xr(e);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(zo(f)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&lh(e,a);var H=y=o.createElement("link");C(H),Nn(H,"link",e),H._p=new Promise(function(nt,pt){H.onload=nt,H.onerror=pt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,cc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function KS(e,n){pa.X(e,n);var a=vr;if(a&&e){var o=Ca(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0},n),(n=vi.get(u))&&ch(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function QS(e,n){pa.M(e,n);var a=vr;if(a&&e){var o=Ca(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&ch(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ig(e,n,a,o){var u=(u=at.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var f=Ca(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(zo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||JS(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+re(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function JS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),C(n),e.head.appendChild(n))}function Sr(e){return'[src="'+re(e)+'"]'}function Fo(e){return"script[async]"+e}function Fg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+re(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Nn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=xr(a.href);var f=e.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=zg(a),(u=vi.get(u))&&lh(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var y=f;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Nn(f,"link",o),n.state.loading|=4,cc(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Fo(f)))?(n.instance=u,C(u),u):(o=a,(u=vi.get(f))&&(o=_({},a),ch(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function Bg(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[cs]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function Hg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function $S(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ty(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=zg(o),(u=vi.get(u))&&lh(o,u),f=f.createElement("link"),C(f);var y=f;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),Nn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var uh=0;function ey(e,n){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&uh===0&&(uh=62500*PS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>uh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function dc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(ny,e),hc=null,fc.call(e))}function ny(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:w,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function iy(e,n,a,o,u,f,y,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Vg(e,n,a,o,u,f,y,R,H,nt,pt,vt){return e=new iy(e,n,a,y,H,nt,pt,vt,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Vu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},qu(f),e}function kg(e){return e?(e=Qs,e):Qs}function Xg(e,n,a,o,u,f){u=kg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ia(e,o,n),a!==null&&(jn(a,e,n),_o(a,e,n))}function Wg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function fh(e,n){Wg(e,n),(e=e.alternate)&&Wg(e,n)}function qg(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&jn(n,e,67108864),fh(e,67108864)}}function Yg(e){if(e.tag===13||e.tag===31){var n=si();n=Qr(n);var a=ps(e,n);a!==null&&jn(a,e,n),fh(e,n)}}var pc=!0;function ay(e,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=2,hh(e,n,a,o)}finally{G.p=f,I.T=u}}function sy(e,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=8,hh(e,n,a,o)}finally{G.p=f,I.T=u}}function hh(e,n,a,o){if(pc){var u=dh(o);if(u===null)Jf(e,n,o,mc,a),Zg(e,o);else if(oy(u,e,n,a,o))o.stopPropagation();else if(Zg(e,o),n&4&&-1<ry.indexOf(e)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Tt(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Lt(y);R.entanglements[1]|=H,y&=~H}Fi(f),(Oe&6)===0&&(Ql=S()+500,No(0))}}break;case 31:case 13:R=ps(f,2),R!==null&&jn(R,f,2),$l(),fh(f,2)}if(f=dh(o),f===null&&Jf(e,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Jf(e,n,o,null,a)}}function dh(e){return e=pu(e),ph(e)}var mc=null;function ph(e){if(mc=null,e=Aa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case it:return 2;case st:return 8;case K:case Rt:return 32;case yt:return 268435456;default:return 32}default:return 32}}var mh=!1,Ya=null,ja=null,Za=null,Ho=new Map,Go=new Map,Ka=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&qg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oy(e,n,a,o,u){switch(n){case"focusin":return Ya=Vo(Ya,e,n,a,o,u),!0;case"dragenter":return ja=Vo(ja,e,n,a,o,u),!0;case"mouseover":return Za=Vo(Za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function Kg(e){var n=Aa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){Yg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){Yg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);du=o,a.target.dispatchEvent(o),du=null}else return n=Ra(a),n!==null&&qg(n),e.blockedOn=a,!1;n.shift()}return!0}function Qg(e,n,a){gc(e)&&a.delete(n)}function ly(){mh=!1,Ya!==null&&gc(Ya)&&(Ya=null),ja!==null&&gc(ja)&&(ja=null),Za!==null&&gc(Za)&&(Za=null),Ho.forEach(Qg),Go.forEach(Qg)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,mh||(mh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ly)))}var vc=null;function Jg(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ph(o||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,df(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(H){return _c(H,e)}Ya!==null&&_c(Ya,e),ja!==null&&_c(ja,e),Za!==null&&_c(Za,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Kg(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[bn]||null;if(typeof f=="function")y||Jg(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[bn]||null)R=y.formAction;else if(ph(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Jg(a)}}}function $g(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gh(e){this._internalRoot=e}xc.prototype.render=gh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();Xg(a,o,e,n,null,null)},xc.prototype.unmount=gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xg(e.current,2,null,e,null,null),$l(),n[Ei]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Kg(e)}};var t_=t.version;if(t_!=="19.2.3")throw Error(s(527,t_,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{mt=Sc.inject(cy),St=Sc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=o0,f=l0,y=c0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Vg(e,1,!1,null,null,a,o,null,u,f,y,$g),e[Ei]=n.current,Qf(e),new gh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=o0,y=l0,R=c0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Vg(e,1,!0,n,a??null,o,u,H,f,y,R,$g),n.context=kg(null),a=n.current,o=si(),o=Qr(o),u=Pa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Fi(n),e[Ei]=n.current,Qf(e),new xc(n)},Xo.version="19.2.3",Xo}var f_;function yy(){if(f_)return xh.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xh.exports=Sy(),xh.exports}var My=yy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="182",Br={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ey=0,h_=1,by=2,Yc=1,Ty=2,tl=3,os=0,Qn=1,Sa=2,Ma=0,Hr=1,d_=2,p_=3,m_=4,Ay=5,Ns=100,Ry=101,Cy=102,wy=103,Dy=104,Uy=200,Ly=201,Ny=202,Oy=203,ad=204,sd=205,Py=206,Iy=207,zy=208,Fy=209,By=210,Hy=211,Gy=212,Vy=213,ky=214,rd=0,od=1,ld=2,Vr=3,cd=4,ud=5,fd=6,hd=7,Av=0,Xy=1,Wy=2,Wi=0,Rv=1,Cv=2,wv=3,Dv=4,Uv=5,Lv=6,Nv=7,Ov=300,zs=301,kr=302,dd=303,pd=304,ou=306,md=1e3,ya=1001,gd=1002,On=1003,qy=1004,yc=1005,Bn=1006,Eh=1007,Ps=1008,li=1009,Pv=1010,Iv=1011,nl=1012,ip=1013,ji=1014,Vi=1015,ba=1016,ap=1017,sp=1018,il=1020,zv=35902,Fv=35899,Bv=1021,Hv=1022,Li=1023,Ta=1026,Is=1027,Gv=1028,rp=1029,Xr=1030,op=1031,lp=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,_d=35840,vd=35841,xd=35842,Sd=35843,yd=36196,Md=37492,Ed=37496,bd=37488,Td=37489,Ad=37490,Rd=37491,Cd=37808,wd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,Id=37816,zd=37817,Fd=37818,Bd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,Yd=36285,jd=36286,Yy=3200,Vv=0,jy=1,ss="",Si="srgb",Wr="srgb-linear",tu="linear",He="srgb",Mr=7680,g_=519,Zy=512,Ky=513,Qy=514,cp=515,Jy=516,$y=517,up=518,tM=519,__=35044,v_="300 es",ki=2e3,eu=2001;function kv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function eM(){const r=nu("canvas");return r.style.display="block",r}const x_={};function S_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ie(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ce(...r){const t="THREE."+r.shift();console.error(t,...r)}function al(...r){const t=r.join(" ");t in x_||(x_[t]=!0,ie(...r))}function nM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,Zd=180/Math.PI;function ol(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function iM(r,t){return(r%t+t)%t}function bh(r,t,i){return(1-i)*r+i*t}function Wo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const aM={DEG2RAD:Jc};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[h+0],E=c[h+1],b=c[h+2],T=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=x,t[i+1]=E,t[i+2]=b,t[i+3]=T;return}if(_!==T||m!==x||p!==E||g!==b){let M=m*x+p*E+g*b+_*T;M<0&&(x=-x,E=-E,b=-b,T=-T,M=-M);let v=1-d;if(M<.9995){const L=Math.acos(M),w=Math.sin(L);v=Math.sin(v*L)/w,d=Math.sin(d*L)/w,m=m*v+x*d,p=p*v+E*d,g=g*v+b*d,_=_*v+T*d}else{m=m*v+x*d,p=p*v+E*d,g=g*v+b*d,_=_*v+T*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],x=c[h+1],E=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*E-p*x,t[i+1]=m*b+g*x+p*_-d*E,t[i+2]=p*b+g*E+d*x-m*_,t[i+3]=g*b-d*_-m*x-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),E=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*E*b,this._y=p*E*_-x*g*b,this._z=p*g*b+x*E*_,this._w=p*g*_-x*E*b;break;case"YXZ":this._x=x*g*_+p*E*b,this._y=p*E*_-x*g*b,this._z=p*g*b-x*E*_,this._w=p*g*_+x*E*b;break;case"ZXY":this._x=x*g*_-p*E*b,this._y=p*E*_+x*g*b,this._z=p*g*b+x*E*_,this._w=p*g*_-x*E*b;break;case"ZYX":this._x=x*g*_-p*E*b,this._y=p*E*_+x*g*b,this._z=p*g*b-x*E*_,this._w=p*g*_+x*E*b;break;case"YZX":this._x=x*g*_+p*E*b,this._y=p*E*_+x*g*b,this._z=p*g*b-x*E*_,this._w=p*g*_-x*E*b;break;case"XZY":this._x=x*g*_-p*E*b,this._y=p*E*_-x*g*b,this._z=p*g*b+x*E*_,this._w=p*g*_+x*E*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>_){const E=2*Math.sqrt(1+s-d-_);this._w=(g-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-s-_);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+_-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Th.copy(this).projectOnVector(t),this.sub(Th)}reflect(t){return this.sub(Th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Th=new Z,y_=new Fs;class fe{constructor(t,i,s,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],E=s[5],b=s[8],T=l[0],M=l[3],v=l[6],L=l[1],w=l[4],D=l[7],P=l[2],B=l[5],F=l[8];return c[0]=h*T+d*L+m*P,c[3]=h*M+d*w+m*B,c[6]=h*v+d*D+m*F,c[1]=p*T+g*L+_*P,c[4]=p*M+g*w+_*B,c[7]=p*v+g*D+_*F,c[2]=x*T+E*L+b*P,c[5]=x*M+E*w+b*B,c[8]=x*v+E*D+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*c,E=p*c-h*m,b=i*_+s*x+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*h)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=E*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ah.makeScale(t,i)),this}rotate(t){return this.premultiply(Ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new fe,M_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sM(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:tu,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:He,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const we=sM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class rM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=nu("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oM=0;class fp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Rh(l[h].image)):c.push(Rh(l[h]))}else c=Rh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let lM=0;const Ch=new Z;class Vn extends Bs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=ya,l=ya,c=Bn,h=Ps,d=Li,m=li,p=Vn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=ol(),this.name="",this.source=new fp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Ov;Vn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],E=m[5],b=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,D=(E+1)/2,P=(v+1)/2,B=(g+x)/4,F=(_+T)/4,Y=(b+M)/4;return w>D&&w>P?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=B/s,c=F/s):D>P?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=Y/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=F/c,l=Y/c),this.set(s,l,c,i),this}let L=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(M-b)/L,this.y=(_-T)/L,this.z=(x-g)/L,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new fp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends cM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Xv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ci):Ci.fromBufferAttribute(c,h),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Ec.subVectors(this.max,qo),br.subVectors(t.a,qo),Tr.subVectors(t.b,qo),Ar.subVectors(t.c,qo),Ja.subVectors(Tr,br),$a.subVectors(Ar,Tr),Rs.subVectors(br,Ar);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Rs.z,Rs.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Rs.z,0,-Rs.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Rs.y,Rs.x,0];return!wh(i,br,Tr,Ar,Ec)||(i=[1,0,0,0,1,0,0,0,1],!wh(i,br,Tr,Ar,Ec))?!1:(bc.crossVectors(Ja,$a),i=[bc.x,bc.y,bc.z],wh(i,br,Tr,Ar,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ci=new Z,Mc=new ll,br=new Z,Tr=new Z,Ar=new Z,Ja=new Z,$a=new Z,Rs=new Z,qo=new Z,Ec=new Z,bc=new Z,Cs=new Z;function wh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Cs.fromArray(r,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const fM=new ll,Yo=new Z,Dh=new Z;class lu{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):fM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Dh)),this.expandByPoint(Yo.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new Z,Uh=new Z,Tc=new Z,ts=new Z,Lh=new Z,Ac=new Z,Nh=new Z;class cu{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Uh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Uh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=ts.dot(this.direction),m=-ts.dot(Tc),p=ts.lengthSq(),g=Math.abs(1-h*h);let _,x,E,b;if(g>0)if(_=h*m-d,x=h*d-m,b=c*g,_>=0)if(x>=-b)if(x<=b){const T=1/g;_*=T,x*=T,E=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),E=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),E=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),E=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),E=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Uh).addScaledVector(Tc,x),E}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){Lh.subVectors(i,t),Ac.subVectors(s,t),Nh.crossVectors(Lh,Ac);let h=this.direction.dot(Nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(ts,Ac));if(m<0)return null;const p=d*this.direction.dot(Lh.cross(ts));if(p<0||m+p>h)return null;const g=-d*ts.dot(Nh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,h,d,m,p,g,_,x,E,b,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,x,E,b,T,M)}set(t,i,s,l,c,h,d,m,p,g,_,x,E,b,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=E,v[7]=b,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,E=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=E+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+E*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,E=m*_,b=p*g,T=p*_;i[0]=x+T*d,i[4]=b*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=E*d-b,i[6]=T+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,E=m*_,b=p*g,T=p*_;i[0]=x-T*d,i[4]=-h*_,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*g,i[9]=T-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,E=h*_,b=d*g,T=d*_;i[0]=m*g,i[4]=b*p-E,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=E*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,E=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=T-x*_,i[8]=b*_+E,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*_+b,i[10]=x-T*_}else if(t.order==="XZY"){const x=h*m,E=h*p,b=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=h*g,i[9]=E*_-b,i[2]=b*_-E,i[6]=d*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hM,t,dM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Rc.crossVectors(ri,es),l[0]=es.x,l[4]=Rc.x,l[8]=ri.x,l[1]=es.y,l[5]=Rc.y,l[9]=ri.y,l[2]=es.z,l[6]=Rc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],E=s[13],b=s[2],T=s[6],M=s[10],v=s[14],L=s[3],w=s[7],D=s[11],P=s[15],B=l[0],F=l[4],Y=l[8],A=l[12],U=l[1],k=l[5],J=l[9],tt=l[13],ht=l[2],ft=l[6],I=l[10],G=l[14],lt=l[3],bt=l[7],Mt=l[11],N=l[15];return c[0]=h*B+d*U+m*ht+p*lt,c[4]=h*F+d*k+m*ft+p*bt,c[8]=h*Y+d*J+m*I+p*Mt,c[12]=h*A+d*tt+m*G+p*N,c[1]=g*B+_*U+x*ht+E*lt,c[5]=g*F+_*k+x*ft+E*bt,c[9]=g*Y+_*J+x*I+E*Mt,c[13]=g*A+_*tt+x*G+E*N,c[2]=b*B+T*U+M*ht+v*lt,c[6]=b*F+T*k+M*ft+v*bt,c[10]=b*Y+T*J+M*I+v*Mt,c[14]=b*A+T*tt+M*G+v*N,c[3]=L*B+w*U+D*ht+P*lt,c[7]=L*F+w*k+D*ft+P*bt,c[11]=L*Y+w*J+D*I+P*Mt,c[15]=L*A+w*tt+D*G+P*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],E=t[14],b=t[3],T=t[7],M=t[11],v=t[15],L=m*E-p*x,w=d*E-p*_,D=d*x-m*_,P=h*E-p*g,B=h*x-m*g,F=h*_-d*g;return i*(T*L-M*w+v*D)-s*(b*L-M*P+v*B)+l*(b*w-T*P+v*F)-c*(b*D-T*B+M*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],E=t[11],b=t[12],T=t[13],M=t[14],v=t[15],L=_*M*p-T*x*p+T*m*E-d*M*E-_*m*v+d*x*v,w=b*x*p-g*M*p-b*m*E+h*M*E+g*m*v-h*x*v,D=g*T*p-b*_*p+b*d*E-h*T*E-g*d*v+h*_*v,P=b*_*m-g*T*m-b*d*x+h*T*x+g*d*M-h*_*M,B=i*L+s*w+l*D+c*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return t[0]=L*F,t[1]=(T*x*c-_*M*c-T*l*E+s*M*E+_*l*v-s*x*v)*F,t[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*v+s*m*v)*F,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*E-s*m*E)*F,t[4]=w*F,t[5]=(g*M*c-b*x*c+b*l*E-i*M*E-g*l*v+i*x*v)*F,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*F,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*E+i*m*E)*F,t[8]=D*F,t[9]=(b*_*c-g*T*c-b*s*E+i*T*E+g*s*v-i*_*v)*F,t[10]=(h*T*c-b*d*c+b*s*p-i*T*p-h*s*v+i*d*v)*F,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*E-i*d*E)*F,t[12]=P*F,t[13]=(g*T*l-b*_*l+b*s*x-i*T*x-g*s*M+i*_*M)*F,t[14]=(b*d*l-h*T*l-b*s*m+i*T*m+h*s*M-i*d*M)*F,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*x+i*d*x)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,E=c*g,b=c*_,T=h*g,M=h*_,v=d*_,L=m*p,w=m*g,D=m*_,P=s.x,B=s.y,F=s.z;return l[0]=(1-(T+v))*P,l[1]=(E+D)*P,l[2]=(b-w)*P,l[3]=0,l[4]=(E-D)*B,l[5]=(1-(x+v))*B,l[6]=(M+L)*B,l[7]=0,l[8]=(b+w)*F,l[9]=(M-L)*F,l[10]=(1-(x+T))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/h,_=1/d;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),E=(s+l)/(s-l);let b,T;if(m)b=c/(h-c),T=h*c/(h-c);else if(d===ki)b=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===eu)b=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),E=-(s+l)/(s-l);let b,T;if(m)b=1/(h-c),T=h/(h-c);else if(d===ki)b=-2/(h-c),T=-(h+c)/(h-c);else if(d===eu)b=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new Z,wi=new tn,hM=new Z(0,0,0),dM=new Z(1,1,1),es=new Z,Rc=new Z,ri=new Z,b_=new tn,T_=new Fs;class Zi{constructor(t=0,i=0,s=0,l=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return b_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T_.setFromEuler(this),this.setFromQuaternion(T_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pM=0;const A_=new Z,Cr=new Fs,_a=new tn,Cc=new Z,jo=new Z,mM=new Z,gM=new Fs,R_=new Z(1,0,0),C_=new Z(0,1,0),w_=new Z(0,0,1),D_={type:"added"},_M={type:"removed"},wr={type:"childadded",child:null},Oh={type:"childremoved",child:null};class En extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new Z,i=new Zi,s=new Fs,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new fe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(R_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(w_,t)}translateOnAxis(t,i){return A_.copy(t).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(R_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(w_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cc.copy(t):Cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(jo,Cc,this.up):_a.lookAt(Cc,jo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(_a),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(D_),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_M),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(D_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,mM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,gM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),E=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new Z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Z,va=new Z,Ph=new Z,xa=new Z,Dr=new Z,Ur=new Z,U_=new Z,Ih=new Z,zh=new Z,Fh=new Z,Bh=new an,Hh=new an,Gh=new an;class Ui{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),va.subVectors(s,i),Ph.subVectors(t,i);const h=Di.dot(Di),d=Di.dot(va),m=Di.dot(Ph),p=va.dot(va),g=va.dot(Ph),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,E=(p*m-d*g)*x,b=(h*g-d*m)*x;return c.set(1-E-b,b,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(h,xa.y),m.addScaledVector(d,xa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Bh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Bh.fromBufferAttribute(t,i),Hh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Bh,c.x),h.addScaledVector(Hh,c.y),h.addScaledVector(Gh,c.z),h}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),va.subVectors(t,i),Di.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(c,s),Ih.subVectors(t,s);const m=Dr.dot(Ih),p=Ur.dot(Ih);if(m<=0&&p<=0)return i.copy(s);zh.subVectors(t,l);const g=Dr.dot(zh),_=Ur.dot(zh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Dr,h);Fh.subVectors(t,c);const E=Dr.dot(Fh),b=Ur.dot(Fh);if(b>=0&&E<=b)return i.copy(c);const T=E*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ur,d);const M=g*b-E*_;if(M<=0&&_-g>=0&&E-b>=0)return U_.subVectors(c,l),d=(_-g)/(_-g+(E-b)),i.copy(l).addScaledVector(U_,d);const v=1/(M+T+x);return h=T*v,d=x*v,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Vh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=iM(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Vh(h,c,t+1/3),this.g=Vh(h,c,t),this.b=Vh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=Wv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return we.workingToColorSpace(Fn.copy(this),t),Math.round(Se(Fn.r*255,0,255))*65536+Math.round(Se(Fn.g*255,0,255))*256+Math.round(Se(Fn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Si){we.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(wc);const s=bh(ns.h,wc.h,i),l=bh(ns.s,wc.s,i),c=bh(ns.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new be;be.NAMES=Wv;let vM=0;class jr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Hr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=sd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ad&&(s.blendSrc=this.blendSrc),this.blendDst!==sd&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dp extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new Z,Dc=new le;let xM=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=__,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==__&&(t.usage=this.usage),t}}class qv extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Yv extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pn extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let SM=0;const xi=new tn,kh=new En,Lr=new Z,oi=new ll,Zo=new ll,yn=new Z;class Jn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kv(t)?Yv:qv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(oi.min,Zo.min),oi.expandByPoint(yn),yn.addVectors(oi.max,Zo.max),oi.expandByPoint(yn)):(oi.expandByPoint(Zo.min),oi.expandByPoint(Zo.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),yn.add(Lr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new Z,m[Y]=new Z;const p=new Z,g=new Z,_=new Z,x=new le,E=new le,b=new le,T=new Z,M=new Z;function v(Y,A,U){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,U),x.fromBufferAttribute(c,Y),E.fromBufferAttribute(c,A),b.fromBufferAttribute(c,U),g.sub(p),_.sub(p),E.sub(x),b.sub(x);const k=1/(E.x*b.y-b.x*E.y);isFinite(k)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-E.y).multiplyScalar(k),M.copy(_).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(k),d[Y].add(T),d[A].add(T),d[U].add(T),m[Y].add(M),m[A].add(M),m[U].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let Y=0,A=L.length;Y<A;++Y){const U=L[Y],k=U.start,J=U.count;for(let tt=k,ht=k+J;tt<ht;tt+=3)v(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const w=new Z,D=new Z,P=new Z,B=new Z;function F(Y){P.fromBufferAttribute(l,Y),B.copy(P);const A=d[Y];w.copy(A),w.sub(P.multiplyScalar(P.dot(A))).normalize(),D.crossVectors(B,A);const k=D.dot(m[Y])<0?-1:1;h.setXYZW(Y,w.x,w.y,w.z,k)}for(let Y=0,A=L.length;Y<A;++Y){const U=L[Y],k=U.start,J=U.count;for(let tt=k,ht=k+J;tt<ht;tt+=3)F(t.getX(tt+0)),F(t.getX(tt+1)),F(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,E=s.count;x<E;x++)s.setXYZ(x,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,m=new Z,p=new Z,g=new Z,_=new Z;if(t)for(let x=0,E=t.count;x<E;x+=3){const b=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let E=0,b=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?E=m[T]*d.data.stride+d.offset:E=m[T]*g;for(let v=0;v<g;v++)x[b++]=p[E++]}return new Yi(x,g,_)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],E=t(x,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const E=p[_];g.push(E.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,E=_.length;x<E;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new tn,ws=new cu,Uc=new lu,N_=new Z,Lc=new Z,Nc=new Z,Oc=new Z,Xh=new Z,Pc=new Z,O_=new Z,Ic=new Z;class Ni extends En{constructor(t=new Jn,i=new dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Xh.fromBufferAttribute(_,t),h?Pc.addScaledVector(Xh,g):Pc.addScaledVector(Xh.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Uc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Uc,N_)===null||ws.origin.distanceToSquared(N_)>(t.far-t.near)**2))&&(L_.copy(c).invert(),ws.copy(t.ray).applyMatrix4(L_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=h[M.materialIndex],L=Math.max(M.start,E.start),w=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let D=L,P=w;D<P;D+=3){const B=d.getX(D),F=d.getX(D+1),Y=d.getX(D+2);l=zc(this,v,t,s,p,g,_,B,F,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),T=Math.min(d.count,E.start+E.count);for(let M=b,v=T;M<v;M+=3){const L=d.getX(M),w=d.getX(M+1),D=d.getX(M+2);l=zc(this,h,t,s,p,g,_,L,w,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=h[M.materialIndex],L=Math.max(M.start,E.start),w=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let D=L,P=w;D<P;D+=3){const B=D,F=D+1,Y=D+2;l=zc(this,v,t,s,p,g,_,B,F,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),T=Math.min(m.count,E.start+E.count);for(let M=b,v=T;M<v;M+=3){const L=M,w=M+1,D=M+2;l=zc(this,h,t,s,p,g,_,L,w,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function yM(r,t,i,s,l,c,h,d){let m;if(t.side===Qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===os,d),m===null)return null;Ic.copy(d),Ic.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Ic);return p<i.near||p>i.far?null:{distance:p,point:Ic.clone(),object:r}}function zc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const g=yM(r,t,i,s,Lc,Nc,Oc,O_);if(g){const _=new Z;Ui.getBarycoord(O_,Lc,Nc,Oc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,d,m,p,_,new le)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,d,m,p,_,new le)),h&&(g.normal=Ui.getInterpolatedAttribute(h,d,m,p,_,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Z,materialIndex:0};Ui.getNormal(Lc,Nc,Oc,x.normal),g.face=x,g.barycoord=_}return g}class cl extends Jn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,E=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(_,2));function b(T,M,v,L,w,D,P,B,F,Y,A){const U=D/F,k=P/Y,J=D/2,tt=P/2,ht=B/2,ft=F+1,I=Y+1;let G=0,lt=0;const bt=new Z;for(let Mt=0;Mt<I;Mt++){const N=Mt*k-tt;for(let $=0;$<ft;$++){const _t=$*U-J;bt[T]=_t*L,bt[M]=N*w,bt[v]=ht,p.push(bt.x,bt.y,bt.z),bt[T]=0,bt[M]=0,bt[v]=B>0?1:-1,g.push(bt.x,bt.y,bt.z),_.push($/F),_.push(1-Mt/Y),G+=1}}for(let Mt=0;Mt<Y;Mt++)for(let N=0;N<F;N++){const $=x+N+ft*Mt,_t=x+N+ft*(Mt+1),wt=x+(N+1)+ft*(Mt+1),Ot=x+(N+1)+ft*Mt;m.push($,_t,Ot),m.push(_t,wt,Ot),lt+=6}d.addGroup(E,lt,A),E+=lt,x+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)t[l]=s[l]}return t}function MM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function jv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const EM={clone:qr,merge:Gn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=MM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new Z,P_=new le,I_=new le;class yi extends Zv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,P_,I_),i.subVectors(I_,P_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Jc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Or=1;class AM extends En{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Nr,Or,t,i);l.layers=this.layers,this.add(l);const c=new yi(Nr,Or,t,i);c.layers=this.layers,this.add(c);const h=new yi(Nr,Or,t,i);h.layers=this.layers,this.add(h);const d=new yi(Nr,Or,t,i);d.layers=this.layers,this.add(d);const m=new yi(Nr,Or,t,i);m.layers=this.layers,this.add(m);const p=new yi(Nr,Or,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,E),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Kv extends Vn{constructor(t=[],i=zs,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qv extends qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Kv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new Ni(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Bn),new AM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Fc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),E=.02,b=.005;p.inputState.pinching&&x>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class CM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wM extends Vn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=On,g=On,_,x){super(null,h,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qh=new Z,DM=new Z,UM=new fe;class as{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=qh.subVectors(s,i).cross(DM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||UM.getNormalMatrix(t),l=this.coplanarPoint(qh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new lu,LM=new le(.5,.5),Bc=new Z;class pp{constructor(t=new as,i=new as,s=new as,l=new as,c=new as,h=new as){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],E=c[7],b=c[8],T=c[9],M=c[10],v=c[11],L=c[12],w=c[13],D=c[14],P=c[15];if(l[0].setComponents(p-h,E-g,v-b,P-L).normalize(),l[1].setComponents(p+h,E+g,v+b,P+L).normalize(),l[2].setComponents(p+d,E+_,v+T,P+w).normalize(),l[3].setComponents(p-d,E-_,v-T,P-w).normalize(),s)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,E-x,v-M,P-D).normalize();else if(l[4].setComponents(p-m,E-x,v-M,P-D).normalize(),i===ki)l[5].setComponents(p+m,E+x,v+M,P+D).normalize();else if(i===eu)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=LM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new Z,au=new Z,z_=new tn,Ko=new cu,Hc=new lu,Yh=new Z,F_=new Z;class Jv extends En{constructor(t=new Jn,i=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new pn(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;z_.copy(l).invert(),Ko.copy(t.ray).applyMatrix4(z_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const E=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let T=E,M=b-1;T<M;T+=p){const v=g.getX(T),L=g.getX(T+1),w=Gc(this,t,Ko,m,v,L,T);w&&i.push(w)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(E),v=Gc(this,t,Ko,m,T,M,b-1);v&&i.push(v)}}else{const E=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let T=E,M=b-1;T<M;T+=p){const v=Gc(this,t,Ko,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Gc(this,t,Ko,m,b-1,E,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(iu.fromBufferAttribute(d,l),au.fromBufferAttribute(d,c),i.distanceSqToSegment(iu,au,Yh,F_)>s)return;Yh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Yh);if(!(p<t.near||p>t.far))return{distance:p,point:F_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const B_=new Z,H_=new Z;class NM extends Jv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)B_.fromBufferAttribute(i,l),H_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+B_.distanceTo(H_);t.setAttribute("lineDistance",new pn(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sl extends Vn{constructor(t,i,s=ji,l,c,h,d=On,m=On,p,g=Ta,_=1){if(g!==Ta&&g!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class OM extends sl{constructor(t,i=ji,s=zs,l,c,h=On,d=On,m,p=Ta){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class $v extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gp extends Jn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],E=[];let b=0;const T=[],M=s/2;let v=0;L(),h===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(g),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(E,2));function L(){const D=new Z,P=new Z;let B=0;const F=(i-t)/s;for(let Y=0;Y<=c;Y++){const A=[],U=Y/c,k=U*(i-t)+t;for(let J=0;J<=l;J++){const tt=J/l,ht=tt*m+d,ft=Math.sin(ht),I=Math.cos(ht);P.x=k*ft,P.y=-U*s+M,P.z=k*I,_.push(P.x,P.y,P.z),D.set(ft,F,I).normalize(),x.push(D.x,D.y,D.z),E.push(tt,1-U),A.push(b++)}T.push(A)}for(let Y=0;Y<l;Y++)for(let A=0;A<c;A++){const U=T[A][Y],k=T[A+1][Y],J=T[A+1][Y+1],tt=T[A][Y+1];(t>0||A!==0)&&(g.push(U,k,tt),B+=3),(i>0||A!==c-1)&&(g.push(k,J,tt),B+=3)}p.addGroup(v,B,0),v+=B}function w(D){const P=b,B=new le,F=new Z;let Y=0;const A=D===!0?t:i,U=D===!0?1:-1;for(let J=1;J<=l;J++)_.push(0,M*U,0),x.push(0,U,0),E.push(.5,.5),b++;const k=b;for(let J=0;J<=l;J++){const ht=J/l*m+d,ft=Math.cos(ht),I=Math.sin(ht);F.x=A*I,F.y=M*U,F.z=A*ft,_.push(F.x,F.y,F.z),x.push(0,U,0),B.x=ft*.5+.5,B.y=I*.5*U+.5,E.push(B.x,B.y),b++}for(let J=0;J<l;J++){const tt=P+J,ht=k+J;D===!0?g.push(ht,ht+1,tt):g.push(ht+1,ht,tt),Y+=3}p.addGroup(v,Y,D===!0?1:2),v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _p extends gp{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new _p(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uu extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,E=[],b=[],T=[],M=[];for(let v=0;v<g;v++){const L=v*x-h;for(let w=0;w<p;w++){const D=w*_-c;b.push(D,-L,0),T.push(0,0,1),M.push(w/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const w=L+p*v,D=L+p*(v+1),P=L+1+p*(v+1),B=L+1+p*v;E.push(w,D,B),E.push(D,P,B)}this.setIndex(E),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class vp extends Jn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new Z,x=new Z,E=[],b=[],T=[],M=[];for(let v=0;v<=s;v++){const L=[],w=v/s;let D=0;v===0&&h===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let P=0;P<=i;P++){const B=P/i;_.x=-t*Math.cos(l+B*c)*Math.sin(h+w*d),_.y=t*Math.cos(h+w*d),_.z=t*Math.sin(l+B*c)*Math.sin(h+w*d),b.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),M.push(B+D,1-w),L.push(p++)}g.push(L)}for(let v=0;v<s;v++)for(let L=0;L<i;L++){const w=g[v][L+1],D=g[v][L],P=g[v+1][L],B=g[v+1][L+1];(v!==0||h>0)&&E.push(w,D,B),(v!==s-1||m<Math.PI)&&E.push(D,P,B)}this.setIndex(E),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class PM extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IM extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zM extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FM extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tx extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const jh=new tn,G_=new Z,V_=new Z;class BM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xp extends Zv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class HM extends BM{constructor(){super(new xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k_ extends tx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new HM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class GM extends tx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class VM extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const X_=new tn;class kM{constructor(t,i,s=0,l=1/0){this.ray=new cu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ce("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return X_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X_),this}intersectObject(t,i=!0,s=[]){return Kd(t,this,s,i),s.sort(W_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Kd(t[l],this,s,i);return s.sort(W_),s}}function W_(r,t){return r.distance-t.distance}function Kd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Kd(c[h],t,i,!0)}}class q_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class XM extends NM{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,E=0,b=-d;x<=i;x++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const T=x===c?s:l;T.toArray(p,E),E+=3,T.toArray(p,E),E+=3,T.toArray(p,E),E+=3,T.toArray(p,E),E+=3}const g=new Jn;g.setAttribute("position",new pn(m,3)),g.setAttribute("color",new pn(p,3));const _=new mp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Y_=new Z;let Vc,Zh;class Kh extends En{constructor(t=new Z(0,0,1),i=new Z(0,0,0),s=1,l=16776960,c=s*.2,h=c*.2){super(),this.type="ArrowHelper",Vc===void 0&&(Vc=new Jn,Vc.setAttribute("position",new pn([0,0,0,0,1,0],3)),Zh=new _p(.5,1,5,1),Zh.translate(0,-.5,0)),this.position.copy(i),this.line=new Jv(Vc,new mp({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ni(Zh,new dp({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,h)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Y_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Y_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class WM extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function j_(r,t,i,s){const l=qM(s);switch(i){case Bv:return r*t;case Gv:return r*t/l.components*l.byteLength;case rp:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case op:return r*t*2/l.components*l.byteLength;case Hv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case lp:return r*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:case Sd:return Math.max(r,16)*Math.max(t,8)/4;case _d:case xd:return Math.max(r,8)*Math.max(t,8)/2;case yd:case Md:case bd:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ed:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qM(r){switch(r){case li:case Pv:return{byteLength:1,components:1};case nl:case Iv:case ba:return{byteLength:2,components:1};case ap:case sp:return{byteLength:2,components:4};case ji:case ip:case Vi:return{byteLength:4,components:1};case zv:case Fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function YM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((E,b)=>E.start-b.start);let x=0;for(let E=1;E<_.length;E++){const b=_[x],T=_[E];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,_[x]=T)}_.length=x+1;for(let E=0,b=_.length;E<b;E++){const T=_[E];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var jM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZM=`#ifdef USE_ALPHAHASH
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
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
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
#endif`,eE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nE=`#ifdef USE_BATCHING
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
#endif`,iE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oE=`#ifdef USE_IRIDESCENCE
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
#endif`,lE=`#ifdef USE_BUMPMAP
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_E=`#define PI 3.141592653589793
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
} // validated`,vE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xE=`vec3 transformedNormal = objectNormal;
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
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bE="gl_FragColor = linearToOutputTexel( gl_FragColor );",TE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
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
#endif`,HE=`#ifdef USE_ENVMAP
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
#endif`,GE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WE=`PhysicalMaterial material;
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
#endif`,qE=`uniform sampler2D dfgLUT;
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
}`,YE=`
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ib=`#if defined( USE_POINTS_UV )
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
#endif`,ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`#ifdef USE_MORPHTARGETS
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
#endif`,ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gb=`#ifdef USE_NORMALMAP
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
#endif`,_b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lb=`float getShadowMask() {
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
}`,Nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ob=`#ifdef USE_SKINNING
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
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jb=`uniform sampler2D t2D;
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`#include <common>
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
}`,tT=`#if DEPTH_PACKING == 3200
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
}`,eT=`#define DISTANCE
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
}`,nT=`#define DISTANCE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
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
}`,rT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#define LAMBERT
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
}`,uT=`#define LAMBERT
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
}`,fT=`#define MATCAP
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
}`,hT=`#define MATCAP
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
}`,dT=`#define NORMAL
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
}`,pT=`#define NORMAL
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
}`,mT=`#define PHONG
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
}`,gT=`#define PHONG
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
}`,_T=`#define STANDARD
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
}`,vT=`#define STANDARD
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
}`,xT=`#define TOON
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
}`,ST=`#define TOON
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
}`,yT=`uniform float size;
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,bT=`uniform vec3 color;
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
}`,TT=`uniform float rotation;
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
}`,AT=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:jM,alphahash_pars_fragment:ZM,alphamap_fragment:KM,alphamap_pars_fragment:QM,alphatest_fragment:JM,alphatest_pars_fragment:$M,aomap_fragment:tE,aomap_pars_fragment:eE,batching_pars_vertex:nE,batching_vertex:iE,begin_vertex:aE,beginnormal_vertex:sE,bsdfs:rE,iridescence_fragment:oE,bumpmap_pars_fragment:lE,clipping_planes_fragment:cE,clipping_planes_pars_fragment:uE,clipping_planes_pars_vertex:fE,clipping_planes_vertex:hE,color_fragment:dE,color_pars_fragment:pE,color_pars_vertex:mE,color_vertex:gE,common:_E,cube_uv_reflection_fragment:vE,defaultnormal_vertex:xE,displacementmap_pars_vertex:SE,displacementmap_vertex:yE,emissivemap_fragment:ME,emissivemap_pars_fragment:EE,colorspace_fragment:bE,colorspace_pars_fragment:TE,envmap_fragment:AE,envmap_common_pars_fragment:RE,envmap_pars_fragment:CE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:HE,envmap_vertex:DE,fog_vertex:UE,fog_pars_vertex:LE,fog_fragment:NE,fog_pars_fragment:OE,gradientmap_pars_fragment:PE,lightmap_pars_fragment:IE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:FE,lights_pars_begin:BE,lights_toon_fragment:GE,lights_toon_pars_fragment:VE,lights_phong_fragment:kE,lights_phong_pars_fragment:XE,lights_physical_fragment:WE,lights_physical_pars_fragment:qE,lights_fragment_begin:YE,lights_fragment_maps:jE,lights_fragment_end:ZE,logdepthbuf_fragment:KE,logdepthbuf_pars_fragment:QE,logdepthbuf_pars_vertex:JE,logdepthbuf_vertex:$E,map_fragment:tb,map_pars_fragment:eb,map_particle_fragment:nb,map_particle_pars_fragment:ib,metalnessmap_fragment:ab,metalnessmap_pars_fragment:sb,morphinstance_vertex:rb,morphcolor_vertex:ob,morphnormal_vertex:lb,morphtarget_pars_vertex:cb,morphtarget_vertex:ub,normal_fragment_begin:fb,normal_fragment_maps:hb,normal_pars_fragment:db,normal_pars_vertex:pb,normal_vertex:mb,normalmap_pars_fragment:gb,clearcoat_normal_fragment_begin:_b,clearcoat_normal_fragment_maps:vb,clearcoat_pars_fragment:xb,iridescence_pars_fragment:Sb,opaque_fragment:yb,packing:Mb,premultiplied_alpha_fragment:Eb,project_vertex:bb,dithering_fragment:Tb,dithering_pars_fragment:Ab,roughnessmap_fragment:Rb,roughnessmap_pars_fragment:Cb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Db,shadowmap_vertex:Ub,shadowmask_pars_fragment:Lb,skinbase_vertex:Nb,skinning_pars_vertex:Ob,skinning_vertex:Pb,skinnormal_vertex:Ib,specularmap_fragment:zb,specularmap_pars_fragment:Fb,tonemapping_fragment:Bb,tonemapping_pars_fragment:Hb,transmission_fragment:Gb,transmission_pars_fragment:Vb,uv_pars_fragment:kb,uv_pars_vertex:Xb,uv_vertex:Wb,worldpos_vertex:qb,background_vert:Yb,background_frag:jb,backgroundCube_vert:Zb,backgroundCube_frag:Kb,cube_vert:Qb,cube_frag:Jb,depth_vert:$b,depth_frag:tT,distance_vert:eT,distance_frag:nT,equirect_vert:iT,equirect_frag:aT,linedashed_vert:sT,linedashed_frag:rT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:fT,meshmatcap_frag:hT,meshnormal_vert:dT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:_T,meshphysical_frag:vT,meshtoon_vert:xT,meshtoon_frag:ST,points_vert:yT,points_frag:MT,shadow_vert:ET,shadow_frag:bT,sprite_vert:TT,sprite_frag:AT},Bt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Gi={basic:{uniforms:Gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Gn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Gn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Gn([Bt.points,Bt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Gn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Gn([Bt.common,Bt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Gn([Bt.sprite,Bt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Gn([Bt.common,Bt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Gn([Bt.lights,Bt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Gi.physical={uniforms:Gn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const kc={r:0,b:0,g:0},Us=new Zi,RT=new tn;function CT(r,t,i,s,l,c,h){const d=new be(0);let m=c===!0?0:1,p,g,_=null,x=0,E=null;function b(w){let D=w.isScene===!0?w.background:null;return D&&D.isTexture&&(D=(w.backgroundBlurriness>0?i:t).get(D)),D}function T(w){let D=!1;const P=b(w);P===null?v(d,m):P&&P.isColor&&(v(P,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(w,D){const P=b(D);P&&(P.isCubeTexture||P.mapping===ou)?(g===void 0&&(g=new Ni(new cl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:qr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(D.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(Us)),g.material.toneMapped=we.getTransfer(P.colorSpace)!==He,(_!==P||x!==P.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,x=P.version,E=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ni(new uu(2,2),new Ki({name:"BackgroundMaterial",uniforms:qr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(P.colorSpace)!==He,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||E!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,E=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function v(w,D){w.getRGB(kc,jv(r)),s.buffers.color.setClear(kc.r,kc.g,kc.b,D,h)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,D=1){d.set(w),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,v(d,m)},render:T,addToRenderList:M,dispose:L}}function wT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(U,k,J,tt,ht){let ft=!1;const I=_(tt,J,k);c!==I&&(c=I,p(c.object)),ft=E(U,tt,J,ht),ft&&b(U,tt,J,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(U,k,J,tt),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function g(U){return r.deleteVertexArray(U)}function _(U,k,J){const tt=J.wireframe===!0;let ht=s[U.id];ht===void 0&&(ht={},s[U.id]=ht);let ft=ht[k.id];ft===void 0&&(ft={},ht[k.id]=ft);let I=ft[tt];return I===void 0&&(I=x(m()),ft[tt]=I),I}function x(U){const k=[],J=[],tt=[];for(let ht=0;ht<i;ht++)k[ht]=0,J[ht]=0,tt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:tt,object:U,attributes:{},index:null}}function E(U,k,J,tt){const ht=c.attributes,ft=k.attributes;let I=0;const G=J.getAttributes();for(const lt in G)if(G[lt].location>=0){const Mt=ht[lt];let N=ft[lt];if(N===void 0&&(lt==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),lt==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),Mt===void 0||Mt.attribute!==N||N&&Mt.data!==N.data)return!0;I++}return c.attributesNum!==I||c.index!==tt}function b(U,k,J,tt){const ht={},ft=k.attributes;let I=0;const G=J.getAttributes();for(const lt in G)if(G[lt].location>=0){let Mt=ft[lt];Mt===void 0&&(lt==="instanceMatrix"&&U.instanceMatrix&&(Mt=U.instanceMatrix),lt==="instanceColor"&&U.instanceColor&&(Mt=U.instanceColor));const N={};N.attribute=Mt,Mt&&Mt.data&&(N.data=Mt.data),ht[lt]=N,I++}c.attributes=ht,c.attributesNum=I,c.index=tt}function T(){const U=c.newAttributes;for(let k=0,J=U.length;k<J;k++)U[k]=0}function M(U){v(U,0)}function v(U,k){const J=c.newAttributes,tt=c.enabledAttributes,ht=c.attributeDivisors;J[U]=1,tt[U]===0&&(r.enableVertexAttribArray(U),tt[U]=1),ht[U]!==k&&(r.vertexAttribDivisor(U,k),ht[U]=k)}function L(){const U=c.newAttributes,k=c.enabledAttributes;for(let J=0,tt=k.length;J<tt;J++)k[J]!==U[J]&&(r.disableVertexAttribArray(J),k[J]=0)}function w(U,k,J,tt,ht,ft,I){I===!0?r.vertexAttribIPointer(U,k,J,ht,ft):r.vertexAttribPointer(U,k,J,tt,ht,ft)}function D(U,k,J,tt){T();const ht=tt.attributes,ft=J.getAttributes(),I=k.defaultAttributeValues;for(const G in ft){const lt=ft[G];if(lt.location>=0){let bt=ht[G];if(bt===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(bt=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(bt=U.instanceColor)),bt!==void 0){const Mt=bt.normalized,N=bt.itemSize,$=t.get(bt);if($===void 0)continue;const _t=$.buffer,wt=$.type,Ot=$.bytesPerElement,at=wt===r.INT||wt===r.UNSIGNED_INT||bt.gpuType===ip;if(bt.isInterleavedBufferAttribute){const dt=bt.data,At=dt.stride,Vt=bt.offset;if(dt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<lt.locationSize;Gt++)v(lt.location+Gt,dt.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Gt=0;Gt<lt.locationSize;Gt++)M(lt.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Gt=0;Gt<lt.locationSize;Gt++)w(lt.location+Gt,N/lt.locationSize,wt,Mt,At*Ot,(Vt+N/lt.locationSize*Gt)*Ot,at)}else{if(bt.isInstancedBufferAttribute){for(let dt=0;dt<lt.locationSize;dt++)v(lt.location+dt,bt.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let dt=0;dt<lt.locationSize;dt++)M(lt.location+dt);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let dt=0;dt<lt.locationSize;dt++)w(lt.location+dt,N/lt.locationSize,wt,Mt,N*Ot,N/lt.locationSize*dt*Ot,at)}}else if(I!==void 0){const Mt=I[G];if(Mt!==void 0)switch(Mt.length){case 2:r.vertexAttrib2fv(lt.location,Mt);break;case 3:r.vertexAttrib3fv(lt.location,Mt);break;case 4:r.vertexAttrib4fv(lt.location,Mt);break;default:r.vertexAttrib1fv(lt.location,Mt)}}}}L()}function P(){Y();for(const U in s){const k=s[U];for(const J in k){const tt=k[J];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete k[J]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const k=s[U.id];for(const J in k){const tt=k[J];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete k[J]}delete s[U.id]}function F(U){for(const k in s){const J=s[k];if(J[U.id]===void 0)continue;const tt=J[U.id];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete J[U.id]}}function Y(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:M,disableUnusedAttributes:L}}function DT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b];i.update(E,s,1)}function m(p,g,_,x){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function UT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Li&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Y=F===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==li&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!Y)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ie("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:D,maxSamples:P,samples:B}}function LT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new as,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||s!==0||l;return l=x,s=_.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,E){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const L=c?0:s,w=L*4;let D=v.clippingState||null;m.value=D,D=g(b,x,w,E);for(let P=0;P!==w;++P)D[P]=i[P];v.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,E,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const v=E+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<v)&&(M=new Float32Array(v));for(let w=0,D=E;w!==T;++w,D+=4)h.copy(_[w]).applyMatrix4(L,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function NT(r){let t=new WeakMap;function i(h,d){return d===dd?h.mapping=zs:d===pd&&(h.mapping=kr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===dd||d===pd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Qv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const rs=4,Z_=[.125,.215,.35,.446,.526,.582],Os=20,OT=256,Qo=new xp,K_=new be;let Qh=null,Jh=0,$h=0,td=!1;const PT=new Z;class Q_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=PT}=c;Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qh,Jh,$h),this._renderer.xr.enabled=td,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ba,format:Li,colorSpace:Wr,depthBuffer:!1},l=J_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IT(c)),this._blurMaterial=FT(c,t,i),this._ggxMaterial=zT(c,t,i)}return l}_compileMaterial(t){const i=new Ni(new Jn,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,E=_.toneMapping;_.getClearColor(K_),_.toneMapping=Wi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new cl,new dp({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,v=!0):(M.color.copy(K_),v=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[w],c.y,c.z)):D===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[w]));const P=this._cubeSize;Pr(l,D*P,w>2?P:0,P,P),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=E,_.autoClear=x,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===zs||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,E=_*x,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-rs?s-b+rs:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=b-i,Pr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Pr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(d,Qo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Os-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Os;M>Os&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const v=[];let L=0;for(let F=0;F<Os;++F){const Y=F/T,A=Math.exp(-Y*Y/2);v.push(A),F===0?L+=A:F<M&&(L+=2*A)}for(let F=0;F<v.length;F++)v[F]=v[F]/L;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:w}=this;x.dTheta.value=b,x.mipInt.value=w-s;const D=this._sizeLods[l],P=3*D*(l>w-rs?l-w+rs:0),B=4*(this._cubeSize-D);Pr(i,P,B,3*D,2*D),m.setRenderTarget(i),m.render(_,Qo)}}function IT(r){const t=[],i=[],s=[];let l=r;const c=r-rs+1+Z_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-rs?m=Z_[h-r+rs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,b=6,T=3,M=2,v=1,L=new Float32Array(T*b*E),w=new Float32Array(M*b*E),D=new Float32Array(v*b*E);for(let B=0;B<E;B++){const F=B%3*2/3-1,Y=B>2?0:-1,A=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];L.set(A,T*b*B),w.set(x,M*b*B);const U=[B,B,B,B,B,B];D.set(U,v*b*B)}const P=new Jn;P.setAttribute("position",new Yi(L,T)),P.setAttribute("uv",new Yi(w,M)),P.setAttribute("faceIndex",new Yi(D,v)),s.push(new Ni(P,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function J_(r,t,i){const s=new qi(r,t,i);return s.texture.mapping=ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function zT(r,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function FT(r,t,i){const s=new Float32Array(Os),l=new Z(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function $_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function tv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function BT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===dd||m===pd,g=m===zs||m===kr;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function HT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&al("WebGLRenderer: "+s+" extension not supported."),l}}}function GT(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const E=c.get(x);E&&(t.remove(E),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const E in x)t.update(x[E],r.ARRAY_BUFFER)}function p(_){const x=[],E=_.index,b=_.attributes.position;let T=0;if(E!==null){const L=E.array;T=E.version;for(let w=0,D=L.length;w<D;w+=3){const P=L[w+0],B=L[w+1],F=L[w+2];x.push(P,B,B,F,F,P)}}else if(b!==void 0){const L=b.array;T=b.version;for(let w=0,D=L.length/3-1;w<D;w+=3){const P=w+0,B=w+1,F=w+2;x.push(P,B,B,F,F,P)}}else return;const M=new(kv(x)?Yv:qv)(x,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function VT(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,E){r.drawElements(s,E,c,x*h),i.update(E,s,1)}function p(x,E,b){b!==0&&(r.drawElementsInstanced(s,E,c,x*h,b),i.update(E,s,b))}function g(x,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=E[v];i.update(M,s,1)}function _(x,E,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,E[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,c,x,0,T,0,b);let v=0;for(let L=0;L<b;L++)v+=E[L]*T[L];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function kT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function XT(r,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let U=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var E=U;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let P=d.attributes.position.count*D,B=1;P>t.maxTextureSize&&(B=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const F=new Float32Array(P*B*4*_),Y=new Xv(F,P,B,_);Y.type=Vi,Y.needsUpdate=!0;const A=D*4;for(let k=0;k<_;k++){const J=v[k],tt=L[k],ht=w[k],ft=P*B*4*k;for(let I=0;I<J.count;I++){const G=I*A;b===!0&&(l.fromBufferAttribute(J,I),F[ft+G+0]=l.x,F[ft+G+1]=l.y,F[ft+G+2]=l.z,F[ft+G+3]=0),T===!0&&(l.fromBufferAttribute(tt,I),F[ft+G+4]=l.x,F[ft+G+5]=l.y,F[ft+G+6]=l.z,F[ft+G+7]=0),M===!0&&(l.fromBufferAttribute(ht,I),F[ft+G+8]=l.x,F[ft+G+9]=l.y,F[ft+G+10]=l.z,F[ft+G+11]=ht.itemSize===4?l.w:1)}}x={count:_,texture:Y,size:new le(P,B)},s.set(d,x),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function WT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const qT={[Rv]:"LINEAR_TONE_MAPPING",[Cv]:"REINHARD_TONE_MAPPING",[wv]:"CINEON_TONE_MAPPING",[Dv]:"ACES_FILMIC_TONE_MAPPING",[Lv]:"AGX_TONE_MAPPING",[Nv]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function YT(r,t,i,s,l){const c=new qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new qi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Jn;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const m=new PM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(d,m),g=new xp(-1,1,1,-1,0,1);let _=null,x=null,E=!1,b,T=null,M=[],v=!1;this.setSize=function(L,w){c.setSize(L,w),h.setSize(L,w);for(let D=0;D<M.length;D++){const P=M[D];P.setSize&&P.setSize(L,w)}},this.setEffects=function(L){M=L,v=M.length>0&&M[0].isRenderPass===!0;const w=c.width,D=c.height;for(let P=0;P<M.length;P++){const B=M[P];B.setSize&&B.setSize(w,D)}},this.begin=function(L,w){if(E||L.toneMapping===Wi&&M.length===0)return!1;if(T=w,w!==null){const D=w.width,P=w.height;(c.width!==D||c.height!==P)&&this.setSize(D,P)}return v===!1&&L.setRenderTarget(c),b=L.toneMapping,L.toneMapping=Wi,!0},this.hasRenderPass=function(){return v},this.end=function(L,w){L.toneMapping=b,E=!0;let D=c,P=h;for(let B=0;B<M.length;B++){const F=M[B];if(F.enabled!==!1&&(F.render(L,P,D,w),F.needsSwap!==!1)){const Y=D;D=P,P=Y}}if(_!==L.outputColorSpace||x!==L.toneMapping){_=L.outputColorSpace,x=L.toneMapping,m.defines={},we.getTransfer(_)===He&&(m.defines.SRGB_TRANSFER="");const B=qT[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(T),L.render(p,g),T=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const nx=new Vn,Qd=new sl(1,1),ix=new Xv,ax=new uM,sx=new Kv,ev=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),sv=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=nv[t];i===void 0&&(i=new Int32Array(t),nv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function jT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function JT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;sv.set(s),r.uniformMatrix2fv(this.addr,!1,sv),xn(i,s)}}function $T(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;av.set(s),r.uniformMatrix3fv(this.addr,!1,av),xn(i,s)}}function t1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;iv.set(s),r.uniformMatrix4fv(this.addr,!1,iv),xn(i,s)}}function e1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function n1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function a1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function s1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function r1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function o1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function l1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function c1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Qd.compareFunction=i.isReversedDepthBuffer()?up:cp,c=Qd):c=nx,i.setTexture2D(t||c,l)}function u1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ax,l)}function f1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||sx,l)}function h1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ix,l)}function d1(r){switch(r){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return t1;case 5124:case 35670:return e1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return a1;case 5125:return s1;case 36294:return r1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}function p1(r,t){r.uniform1fv(this.addr,t)}function m1(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function g1(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function _1(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function v1(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function x1(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function S1(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function y1(r,t){r.uniform1iv(this.addr,t)}function M1(r,t){r.uniform2iv(this.addr,t)}function E1(r,t){r.uniform3iv(this.addr,t)}function b1(r,t){r.uniform4iv(this.addr,t)}function T1(r,t){r.uniform1uiv(this.addr,t)}function A1(r,t){r.uniform2uiv(this.addr,t)}function R1(r,t){r.uniform3uiv(this.addr,t)}function C1(r,t){r.uniform4uiv(this.addr,t)}function w1(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Qd:h=nx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function D1(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ax,c[h])}function U1(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||sx,c[h])}function L1(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||ix,c[h])}function N1(r){switch(r){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return _1;case 35674:return v1;case 35675:return x1;case 35676:return S1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return b1;case 5125:return T1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return L1}}class O1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=d1(i.type)}}class P1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=N1(i.type)}}class I1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function rv(r,t){r.seq.push(t),r.map[t.id]=t}function z1(r,t,i){const s=r.name,l=s.length;for(ed.lastIndex=0;;){const c=ed.exec(s),h=ed.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){rv(i,p===void 0?new O1(d,r,t):new P1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new I1(d),rv(i,_)),i=_}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);z1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function ov(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const F1=37297;let B1=0;function H1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const lv=new fe;function G1(r){we._getMatrix(lv,we.workingColorSpace,r);const t=`mat3( ${lv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case tu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function cv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+H1(r.getShaderSource(t),d)}else return c}function V1(r,t){const i=G1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const k1={[Rv]:"Linear",[Cv]:"Reinhard",[wv]:"Cineon",[Dv]:"ACESFilmic",[Lv]:"AgX",[Nv]:"Neutral",[Uv]:"Custom"};function X1(r,t){const i=k1[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new Z;function W1(){we.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function Y1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function j1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function el(r){return r!==""}function uv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(Z1,Q1)}const K1=new Map;function Q1(r,t){let i=he[t];if(i===void 0){const s=K1.get(t);if(s!==void 0)i=he[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(r){return r.replace(J1,$1)}function $1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function dv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const tA={[Yc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function eA(r){return tA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nA={[zs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function iA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":nA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const aA={[kr]:"ENVMAP_MODE_REFRACTION"};function sA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":aA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rA={[Av]:"ENVMAP_BLENDING_MULTIPLY",[Xy]:"ENVMAP_BLENDING_MIX",[Wy]:"ENVMAP_BLENDING_ADD"};function oA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":rA[r.combine]||"ENVMAP_BLENDING_NONE"}function lA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function cA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=eA(i),p=iA(i),g=sA(i),_=oA(i),x=lA(i),E=q1(i),b=Y1(c),T=l.createProgram();let M,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),v.length>0&&(v+=`
`)):(M=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),v=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?he.tonemapping_pars_fragment:"",i.toneMapping!==Wi?X1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,V1("linearToOutputTexel",i.outputColorSpace),W1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),h=Jd(h),h=uv(h,i),h=fv(h,i),d=Jd(d),d=uv(d,i),d=fv(d,i),h=hv(h),d=hv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=L+M+h,D=L+v+d,P=ov(l,l.VERTEX_SHADER,w),B=ov(l,l.FRAGMENT_SHADER,D);l.attachShader(T,P),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(k){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",tt=l.getShaderInfoLog(P)||"",ht=l.getShaderInfoLog(B)||"",ft=J.trim(),I=tt.trim(),G=ht.trim();let lt=!0,bt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,B);else{const Mt=cv(l,P,"vertex"),N=cv(l,B,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+Mt+`
`+N)}else ft!==""?ie("WebGLProgram: Program Info Log:",ft):(I===""||G==="")&&(bt=!1);bt&&(k.diagnostics={runnable:lt,programLog:ft,vertexShader:{log:I,prefix:M},fragmentShader:{log:G,prefix:v}})}l.deleteShader(P),l.deleteShader(B),Y=new $c(l,T),A=j1(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,F1)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=B1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=B,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new hA(t),i.set(t,s)),s}}class hA{constructor(t){this.id=uA++,this.code=t,this.usedTimes=0}}function dA(r,t,i,s,l,c,h){const d=new hp,m=new fA,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,U,k,J,tt){const ht=J.fog,ft=tt.geometry,I=A.isMeshStandardMaterial?J.environment:null,G=(A.isMeshStandardMaterial?i:t).get(A.envMap||I),lt=G&&G.mapping===ou?G.image.height:null,bt=b[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&ie("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const Mt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,N=Mt!==void 0?Mt.length:0;let $=0;ft.morphAttributes.position!==void 0&&($=1),ft.morphAttributes.normal!==void 0&&($=2),ft.morphAttributes.color!==void 0&&($=3);let _t,wt,Ot,at;if(bt){const Re=Gi[bt];_t=Re.vertexShader,wt=Re.fragmentShader}else _t=A.vertexShader,wt=A.fragmentShader,m.update(A),Ot=m.getVertexShaderID(A),at=m.getFragmentShaderID(A);const dt=r.getRenderTarget(),At=r.state.buffers.depth.getReversed(),Vt=tt.isInstancedMesh===!0,Gt=tt.isBatchedMesh===!0,de=!!A.map,Qe=!!A.matcap,me=!!G,pe=!!A.aoMap,Te=!!A.lightMap,se=!!A.bumpMap,je=!!A.normalMap,V=!!A.displacementMap,qe=!!A.emissiveMap,_e=!!A.metalnessMap,Ae=!!A.roughnessMap,qt=A.anisotropy>0,O=A.clearcoat>0,S=A.dispersion>0,z=A.iridescence>0,it=A.sheen>0,st=A.transmission>0,K=qt&&!!A.anisotropyMap,Rt=O&&!!A.clearcoatMap,yt=O&&!!A.clearcoatNormalMap,Ft=O&&!!A.clearcoatRoughnessMap,Yt=z&&!!A.iridescenceMap,mt=z&&!!A.iridescenceThicknessMap,St=it&&!!A.sheenColorMap,Ut=it&&!!A.sheenRoughnessMap,Lt=!!A.specularMap,Et=!!A.specularColorMap,Qt=!!A.specularIntensityMap,X=st&&!!A.transmissionMap,Nt=st&&!!A.thicknessMap,Ct=!!A.gradientMap,It=!!A.alphaMap,Tt=A.alphaTest>0,xt=!!A.alphaHash,Dt=!!A.extensions;let ae=Wi;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Ie={shaderID:bt,shaderType:A.type,shaderName:A.name,vertexShader:_t,fragmentShader:wt,defines:A.defines,customVertexShaderID:Ot,customFragmentShaderID:at,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:Gt,batchingColor:Gt&&tt._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&tt.instanceColor!==null,instancingMorph:Vt&&tt.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Wr,alphaToCoverage:!!A.alphaToCoverage,map:de,matcap:Qe,envMap:me,envMapMode:me&&G.mapping,envMapCubeUVHeight:lt,aoMap:pe,lightMap:Te,bumpMap:se,normalMap:je,displacementMap:V,emissiveMap:qe,normalMapObjectSpace:je&&A.normalMapType===jy,normalMapTangentSpace:je&&A.normalMapType===Vv,metalnessMap:_e,roughnessMap:Ae,anisotropy:qt,anisotropyMap:K,clearcoat:O,clearcoatMap:Rt,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ft,dispersion:S,iridescence:z,iridescenceMap:Yt,iridescenceThicknessMap:mt,sheen:it,sheenColorMap:St,sheenRoughnessMap:Ut,specularMap:Lt,specularColorMap:Et,specularIntensityMap:Qt,transmission:st,transmissionMap:X,thicknessMap:Nt,gradientMap:Ct,opaque:A.transparent===!1&&A.blending===Hr&&A.alphaToCoverage===!1,alphaMap:It,alphaTest:Tt,alphaHash:xt,combine:A.combine,mapUv:de&&T(A.map.channel),aoMapUv:pe&&T(A.aoMap.channel),lightMapUv:Te&&T(A.lightMap.channel),bumpMapUv:se&&T(A.bumpMap.channel),normalMapUv:je&&T(A.normalMap.channel),displacementMapUv:V&&T(A.displacementMap.channel),emissiveMapUv:qe&&T(A.emissiveMap.channel),metalnessMapUv:_e&&T(A.metalnessMap.channel),roughnessMapUv:Ae&&T(A.roughnessMap.channel),anisotropyMapUv:K&&T(A.anisotropyMap.channel),clearcoatMapUv:Rt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:yt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:St&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&T(A.sheenRoughnessMap.channel),specularMapUv:Lt&&T(A.specularMap.channel),specularColorMapUv:Et&&T(A.specularColorMap.channel),specularIntensityMapUv:Qt&&T(A.specularIntensityMap.channel),transmissionMapUv:X&&T(A.transmissionMap.channel),thicknessMapUv:Nt&&T(A.thicknessMap.channel),alphaMapUv:It&&T(A.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(je||qt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ft.attributes.uv&&(de||It),fog:!!ht,useFog:A.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:At,skinning:tt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:$,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:de&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:qe&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Sa,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Dt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&A.extensions.multiDraw===!0||Gt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function v(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)U.push(k),U.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(L(U,A),w(U,A),U.push(r.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function L(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function w(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),A.push(d.mask)}function D(A){const U=b[A.type];let k;if(U){const J=Gi[U];k=EM.clone(J.uniforms)}else k=A.uniforms;return k}function P(A,U){let k=_.get(U);return k!==void 0?++k.usedTimes:(k=new cA(r,U,A,c),g.push(k),_.set(U,k)),k}function B(A){if(--A.usedTimes===0){const U=g.indexOf(A);g[U]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function F(A){m.remove(A)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:P,releaseProgram:B,releaseShaderCache:F,programs:g,dispose:Y}}function pA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function mA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function mv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,E,b,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:E,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=E,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function d(_,x,E,b,T,M){const v=h(_,x,E,b,T,M);E.transmission>0?s.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(_,x,E,b,T,M){const v=h(_,x,E,b,T,M);E.transmission>0?s.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||mA),s.length>1&&s.sort(x||pv),l.length>1&&l.sort(x||pv)}function g(){for(let _=t,x=r.length;_<x;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function gA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new mv,r.set(s,[h])):l>=c.length?(h=new mv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function _A(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new be};break;case"SpotLight":i={position:new Z,direction:new Z,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function vA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let xA=0;function SA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function yA(r){const t=new _A,i=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new tn,h=new tn;function d(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let E=0,b=0,T=0,M=0,v=0,L=0,w=0,D=0,P=0,B=0,F=0;p.sort(SA);for(let A=0,U=p.length;A<U;A++){const k=p[A],J=k.color,tt=k.intensity,ht=k.distance;let ft=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Xr?ft=k.shadow.map.texture:ft=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=J.r*tt,_+=J.g*tt,x+=J.b*tt;else if(k.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(k.sh.coefficients[I],tt);F++}else if(k.isDirectionalLight){const I=t.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,lt=i.get(k);lt.shadowIntensity=G.intensity,lt.shadowBias=G.bias,lt.shadowNormalBias=G.normalBias,lt.shadowRadius=G.radius,lt.shadowMapSize=G.mapSize,s.directionalShadow[E]=lt,s.directionalShadowMap[E]=ft,s.directionalShadowMatrix[E]=k.shadow.matrix,L++}s.directional[E]=I,E++}else if(k.isSpotLight){const I=t.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(J).multiplyScalar(tt),I.distance=ht,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,s.spot[T]=I;const G=k.shadow;if(k.map&&(s.spotLightMap[P]=k.map,P++,G.updateMatrices(k),k.castShadow&&B++),s.spotLightMatrix[T]=G.matrix,k.castShadow){const lt=i.get(k);lt.shadowIntensity=G.intensity,lt.shadowBias=G.bias,lt.shadowNormalBias=G.normalBias,lt.shadowRadius=G.radius,lt.shadowMapSize=G.mapSize,s.spotShadow[T]=lt,s.spotShadowMap[T]=ft,D++}T++}else if(k.isRectAreaLight){const I=t.get(k);I.color.copy(J).multiplyScalar(tt),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=I,M++}else if(k.isPointLight){const I=t.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const G=k.shadow,lt=i.get(k);lt.shadowIntensity=G.intensity,lt.shadowBias=G.bias,lt.shadowNormalBias=G.normalBias,lt.shadowRadius=G.radius,lt.shadowMapSize=G.mapSize,lt.shadowCameraNear=G.camera.near,lt.shadowCameraFar=G.camera.far,s.pointShadow[b]=lt,s.pointShadowMap[b]=ft,s.pointShadowMatrix[b]=k.shadow.matrix,w++}s.point[b]=I,b++}else if(k.isHemisphereLight){const I=t.get(k);I.skyColor.copy(k.color).multiplyScalar(tt),I.groundColor.copy(k.groundColor).multiplyScalar(tt),s.hemi[v]=I,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==E||Y.pointLength!==b||Y.spotLength!==T||Y.rectAreaLength!==M||Y.hemiLength!==v||Y.numDirectionalShadows!==L||Y.numPointShadows!==w||Y.numSpotShadows!==D||Y.numSpotMaps!==P||Y.numLightProbes!==F)&&(s.directional.length=E,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=D+P-B,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,Y.directionalLength=E,Y.pointLength=b,Y.spotLength=T,Y.rectAreaLength=M,Y.hemiLength=v,Y.numDirectionalShadows=L,Y.numPointShadows=w,Y.numSpotShadows=D,Y.numSpotMaps=P,Y.numLightProbes=F,s.version=xA++)}function m(p,g){let _=0,x=0,E=0,b=0,T=0;const M=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const w=p[v];if(w.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(w.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),E++}else if(w.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(w.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(w.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(M),x++}else if(w.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function gv(r){const t=new yA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function MA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new gv(r),t.set(l,[d])):c>=h.length?(d=new gv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
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
}`,TA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],AA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],_v=new tn,Jo=new Z,nd=new Z;function RA(r,t,i){let s=new pp;const l=new le,c=new le,h=new an,d=new zM,m=new FM,p={},g=i.maxTextureSize,_={[os]:Qn,[Qn]:os,[Sa]:Sa},x=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:EA,fragmentShader:bA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const b=new Jn;b.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let v=this.type;this.render=function(B,F,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===Ty&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Yc);const A=r.getRenderTarget(),U=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const tt=v!==this.type;tt&&F.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(ft=>ft.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,ft=B.length;ht<ft;ht++){const I=B[ht],G=I.shadow;if(G===void 0){ie("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const lt=G.getFrameExtents();if(l.multiply(lt),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/lt.x),l.x=c.x*lt.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/lt.y),l.y=c.y*lt.y,G.mapSize.y=c.y)),G.map===null||tt===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===tl){if(I.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qi(l.x,l.y,{format:Xr,type:ba,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new sl(l.x,l.y,Vi),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Ta,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else{I.isPointLight?(G.map=new Qv(l.x),G.map.depthTexture=new OM(l.x,ji)):(G.map=new qi(l.x,l.y),G.map.depthTexture=new sl(l.x,l.y,ji)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Ta;const Mt=r.state.buffers.depth.getReversed();this.type===Yc?(G.map.depthTexture.compareFunction=Mt?up:cp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On)}G.camera.updateProjectionMatrix()}const bt=G.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<bt;Mt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget(G.map),r.clear());const N=G.getViewport(Mt);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),J.viewport(h)}if(I.isPointLight){const N=G.camera,$=G.matrix,_t=I.distance||N.far;_t!==N.far&&(N.far=_t,N.updateProjectionMatrix()),Jo.setFromMatrixPosition(I.matrixWorld),N.position.copy(Jo),nd.copy(N.position),nd.add(TA[Mt]),N.up.copy(AA[Mt]),N.lookAt(nd),N.updateMatrixWorld(),$.makeTranslation(-Jo.x,-Jo.y,-Jo.z),_v.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G._frustum.setFromProjectionMatrix(_v,N.coordinateSystem,N.reversedDepth)}else G.updateMatrices(I);s=G.getFrustum(),D(F,Y,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===tl&&L(G,Y),G.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,U,k)};function L(B,F){const Y=t.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new qi(l.x,l.y,{format:Xr,type:ba})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(F,null,Y,x,T,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(F,null,Y,E,T,null)}function w(B,F,Y,A){let U=null;const k=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)U=k;else if(U=Y.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=U.uuid,tt=F.uuid;let ht=p[J];ht===void 0&&(ht={},p[J]=ht);let ft=ht[tt];ft===void 0&&(ft=U.clone(),ht[tt]=ft,F.addEventListener("dispose",P)),U=ft}if(U.visible=F.visible,U.wireframe=F.wireframe,A===tl?U.side=F.shadowSide!==null?F.shadowSide:F.side:U.side=F.shadowSide!==null?F.shadowSide:_[F.side],U.alphaMap=F.alphaMap,U.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,U.map=F.map,U.clipShadows=F.clipShadows,U.clippingPlanes=F.clippingPlanes,U.clipIntersection=F.clipIntersection,U.displacementMap=F.displacementMap,U.displacementScale=F.displacementScale,U.displacementBias=F.displacementBias,U.wireframeLinewidth=F.wireframeLinewidth,U.linewidth=F.linewidth,Y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const J=r.properties.get(U);J.light=Y}return U}function D(B,F,Y,A,U){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===tl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),ht=B.material;if(Array.isArray(ht)){const ft=tt.groups;for(let I=0,G=ft.length;I<G;I++){const lt=ft[I],bt=ht[lt.materialIndex];if(bt&&bt.visible){const Mt=w(B,bt,A,U);B.onBeforeShadow(r,B,F,Y,tt,Mt,lt),r.renderBufferDirect(Y,null,tt,Mt,B,lt),B.onAfterShadow(r,B,F,Y,tt,Mt,lt)}}}else if(ht.visible){const ft=w(B,ht,A,U);B.onBeforeShadow(r,B,F,Y,tt,ft,null),r.renderBufferDirect(Y,null,tt,ft,B,null),B.onAfterShadow(r,B,F,Y,tt,ft,null)}}const J=B.children;for(let tt=0,ht=J.length;tt<ht;tt++)D(J[tt],F,Y,A,U)}function P(B){B.target.removeEventListener("dispose",P);for(const Y in p){const A=p[Y],U=B.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const CA={[rd]:od,[ld]:fd,[cd]:hd,[Vr]:ud,[od]:rd,[fd]:ld,[hd]:cd,[ud]:Vr};function wA(r,t){function i(){let X=!1;const Nt=new an;let Ct=null;const It=new an(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!X&&(r.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,xt,Dt,ae,Ie){Ie===!0&&(Tt*=ae,xt*=ae,Dt*=ae),Nt.set(Tt,xt,Dt,ae),It.equals(Nt)===!1&&(r.clearColor(Tt,xt,Dt,ae),It.copy(Nt))},reset:function(){X=!1,Ct=null,It.set(-1,0,0,0)}}}function s(){let X=!1,Nt=!1,Ct=null,It=null,Tt=null;return{setReversed:function(xt){if(Nt!==xt){const Dt=t.get("EXT_clip_control");xt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Nt=xt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return Nt},setTest:function(xt){xt?dt(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(xt){Ct!==xt&&!X&&(r.depthMask(xt),Ct=xt)},setFunc:function(xt){if(Nt&&(xt=CA[xt]),It!==xt){switch(xt){case rd:r.depthFunc(r.NEVER);break;case od:r.depthFunc(r.ALWAYS);break;case ld:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case cd:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case fd:r.depthFunc(r.GREATER);break;case hd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Tt!==xt&&(Nt&&(xt=1-xt),r.clearDepth(xt),Tt=xt)},reset:function(){X=!1,Ct=null,It=null,Tt=null,Nt=!1}}}function l(){let X=!1,Nt=null,Ct=null,It=null,Tt=null,xt=null,Dt=null,ae=null,Ie=null;return{setTest:function(Re){X||(Re?dt(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(Re){Nt!==Re&&!X&&(r.stencilMask(Re),Nt=Re)},setFunc:function(Re,Pn,Mi){(Ct!==Re||It!==Pn||Tt!==Mi)&&(r.stencilFunc(Re,Pn,Mi),Ct=Re,It=Pn,Tt=Mi)},setOp:function(Re,Pn,Mi){(xt!==Re||Dt!==Pn||ae!==Mi)&&(r.stencilOp(Re,Pn,Mi),xt=Re,Dt=Pn,ae=Mi)},setLocked:function(Re){X=Re},setClear:function(Re){Ie!==Re&&(r.clearStencil(Re),Ie=Re)},reset:function(){X=!1,Nt=null,Ct=null,It=null,Tt=null,xt=null,Dt=null,ae=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,E=[],b=null,T=!1,M=null,v=null,L=null,w=null,D=null,P=null,B=null,F=new be(0,0,0),Y=0,A=!1,U=null,k=null,J=null,tt=null,ht=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const lt=r.getParameter(r.VERSION);lt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(lt)[1]),I=G>=1):lt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),I=G>=2);let bt=null,Mt={};const N=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),_t=new an().fromArray(N),wt=new an().fromArray($);function Ot(X,Nt,Ct,It){const Tt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(X,xt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<Ct;Dt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Nt+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return xt}const at={};at[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(r.DEPTH_TEST),h.setFunc(Vr),se(!1),je(h_),dt(r.CULL_FACE),pe(Ma);function dt(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function At(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Vt(X,Nt){return _[X]!==Nt?(r.bindFramebuffer(X,Nt),_[X]=Nt,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Gt(X,Nt){let Ct=E,It=!1;if(X){Ct=x.get(Nt),Ct===void 0&&(Ct=[],x.set(Nt,Ct));const Tt=X.textures;if(Ct.length!==Tt.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Dt=Tt.length;xt<Dt;xt++)Ct[xt]=r.COLOR_ATTACHMENT0+xt;Ct.length=Tt.length,It=!0}}else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,It=!0);It&&r.drawBuffers(Ct)}function de(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Qe={[Ns]:r.FUNC_ADD,[Ry]:r.FUNC_SUBTRACT,[Cy]:r.FUNC_REVERSE_SUBTRACT};Qe[wy]=r.MIN,Qe[Dy]=r.MAX;const me={[Uy]:r.ZERO,[Ly]:r.ONE,[Ny]:r.SRC_COLOR,[ad]:r.SRC_ALPHA,[By]:r.SRC_ALPHA_SATURATE,[zy]:r.DST_COLOR,[Py]:r.DST_ALPHA,[Oy]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[Fy]:r.ONE_MINUS_DST_COLOR,[Iy]:r.ONE_MINUS_DST_ALPHA,[Hy]:r.CONSTANT_COLOR,[Gy]:r.ONE_MINUS_CONSTANT_COLOR,[Vy]:r.CONSTANT_ALPHA,[ky]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(X,Nt,Ct,It,Tt,xt,Dt,ae,Ie,Re){if(X===Ma){T===!0&&(At(r.BLEND),T=!1);return}if(T===!1&&(dt(r.BLEND),T=!0),X!==Ay){if(X!==M||Re!==A){if((v!==Ns||D!==Ns)&&(r.blendEquation(r.FUNC_ADD),v=Ns,D=Ns),Re)switch(X){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFunc(r.ONE,r.ONE);break;case p_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case m_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",X);break}else switch(X){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case p_:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",X);break}L=null,w=null,P=null,B=null,F.set(0,0,0),Y=0,M=X,A=Re}return}Tt=Tt||Nt,xt=xt||Ct,Dt=Dt||It,(Nt!==v||Tt!==D)&&(r.blendEquationSeparate(Qe[Nt],Qe[Tt]),v=Nt,D=Tt),(Ct!==L||It!==w||xt!==P||Dt!==B)&&(r.blendFuncSeparate(me[Ct],me[It],me[xt],me[Dt]),L=Ct,w=It,P=xt,B=Dt),(ae.equals(F)===!1||Ie!==Y)&&(r.blendColor(ae.r,ae.g,ae.b,Ie),F.copy(ae),Y=Ie),M=X,A=!1}function Te(X,Nt){X.side===Sa?At(r.CULL_FACE):dt(r.CULL_FACE);let Ct=X.side===Qn;Nt&&(Ct=!Ct),se(Ct),X.blending===Hr&&X.transparent===!1?pe(Ma):pe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const It=X.stencilWrite;d.setTest(It),It&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){U!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),U=X)}function je(X){X!==Ey?(dt(r.CULL_FACE),X!==k&&(X===h_?r.cullFace(r.BACK):X===by?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),k=X}function V(X){X!==J&&(I&&r.lineWidth(X),J=X)}function qe(X,Nt,Ct){X?(dt(r.POLYGON_OFFSET_FILL),(tt!==Nt||ht!==Ct)&&(r.polygonOffset(Nt,Ct),tt=Nt,ht=Ct)):At(r.POLYGON_OFFSET_FILL)}function _e(X){X?dt(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function Ae(X){X===void 0&&(X=r.TEXTURE0+ft-1),bt!==X&&(r.activeTexture(X),bt=X)}function qt(X,Nt,Ct){Ct===void 0&&(bt===null?Ct=r.TEXTURE0+ft-1:Ct=bt);let It=Mt[Ct];It===void 0&&(It={type:void 0,texture:void 0},Mt[Ct]=It),(It.type!==X||It.texture!==Nt)&&(bt!==Ct&&(r.activeTexture(Ct),bt=Ct),r.bindTexture(X,Nt||at[X]),It.type=X,It.texture=Nt)}function O(){const X=Mt[bt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function it(){try{r.texSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function st(){try{r.texSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Rt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function yt(){try{r.texStorage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Ft(){try{r.texStorage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Yt(){try{r.texImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function mt(){try{r.texImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function St(X){_t.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Ut(X){wt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function Lt(X,Nt){let Ct=p.get(Nt);Ct===void 0&&(Ct=new WeakMap,p.set(Nt,Ct));let It=Ct.get(X);It===void 0&&(It=r.getUniformBlockIndex(Nt,X.name),Ct.set(X,It))}function Et(X,Nt){const It=p.get(Nt).get(X);m.get(Nt)!==It&&(r.uniformBlockBinding(Nt,It,X.__bindingPointIndex),m.set(Nt,It))}function Qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},bt=null,Mt={},_={},x=new WeakMap,E=[],b=null,T=!1,M=null,v=null,L=null,w=null,D=null,P=null,B=null,F=new be(0,0,0),Y=0,A=!1,U=null,k=null,J=null,tt=null,ht=null,_t.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:dt,disable:At,bindFramebuffer:Vt,drawBuffers:Gt,useProgram:de,setBlending:pe,setMaterial:Te,setFlipSided:se,setCullFace:je,setLineWidth:V,setPolygonOffset:qe,setScissorTest:_e,activeTexture:Ae,bindTexture:qt,unbindTexture:O,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:Yt,texImage3D:mt,updateUBOMapping:Lt,uniformBlockBinding:Et,texStorage2D:yt,texStorage3D:Ft,texSubImage2D:it,texSubImage3D:st,compressedTexSubImage2D:K,compressedTexSubImage3D:Rt,scissor:St,viewport:Ut,reset:Qt}}function DA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,g=new WeakMap;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,S){return E?new OffscreenCanvas(O,S):nu("canvas")}function T(O,S,z){let it=1;const st=qt(O);if((st.width>z||st.height>z)&&(it=z/Math.max(st.width,st.height)),it<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const K=Math.floor(it*st.width),Rt=Math.floor(it*st.height);_===void 0&&(_=b(K,Rt));const yt=S?b(K,Rt):_;return yt.width=K,yt.height=Rt,yt.getContext("2d").drawImage(O,0,0,K,Rt),ie("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+K+"x"+Rt+")."),yt}else return"data"in O&&ie("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(O,S,z,it,st=!1){if(O!==null){if(r[O]!==void 0)return r[O];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let K=S;if(S===r.RED&&(z===r.FLOAT&&(K=r.R32F),z===r.HALF_FLOAT&&(K=r.R16F),z===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.R8UI),z===r.UNSIGNED_SHORT&&(K=r.R16UI),z===r.UNSIGNED_INT&&(K=r.R32UI),z===r.BYTE&&(K=r.R8I),z===r.SHORT&&(K=r.R16I),z===r.INT&&(K=r.R32I)),S===r.RG&&(z===r.FLOAT&&(K=r.RG32F),z===r.HALF_FLOAT&&(K=r.RG16F),z===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RG8UI),z===r.UNSIGNED_SHORT&&(K=r.RG16UI),z===r.UNSIGNED_INT&&(K=r.RG32UI),z===r.BYTE&&(K=r.RG8I),z===r.SHORT&&(K=r.RG16I),z===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGB8UI),z===r.UNSIGNED_SHORT&&(K=r.RGB16UI),z===r.UNSIGNED_INT&&(K=r.RGB32UI),z===r.BYTE&&(K=r.RGB8I),z===r.SHORT&&(K=r.RGB16I),z===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),z===r.UNSIGNED_INT&&(K=r.RGBA32UI),z===r.BYTE&&(K=r.RGBA8I),z===r.SHORT&&(K=r.RGBA16I),z===r.INT&&(K=r.RGBA32I)),S===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),S===r.RGBA){const Rt=st?tu:we.getTransfer(it);z===r.FLOAT&&(K=r.RGBA32F),z===r.HALF_FLOAT&&(K=r.RGBA16F),z===r.UNSIGNED_BYTE&&(K=Rt===He?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function D(O,S){let z;return O?S===null||S===ji||S===il?z=r.DEPTH24_STENCIL8:S===Vi?z=r.DEPTH32F_STENCIL8:S===nl&&(z=r.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ji||S===il?z=r.DEPTH_COMPONENT24:S===Vi?z=r.DEPTH_COMPONENT32F:S===nl&&(z=r.DEPTH_COMPONENT16),z}function P(O,S){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==On&&O.minFilter!==Bn?Math.log2(Math.max(S.width,S.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?S.mipmaps.length:1}function B(O){const S=O.target;S.removeEventListener("dispose",B),Y(S),S.isVideoTexture&&g.delete(S)}function F(O){const S=O.target;S.removeEventListener("dispose",F),U(S)}function Y(O){const S=s.get(O);if(S.__webglInit===void 0)return;const z=O.source,it=x.get(z);if(it){const st=it[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(O),Object.keys(it).length===0&&x.delete(z)}s.remove(O)}function A(O){const S=s.get(O);r.deleteTexture(S.__webglTexture);const z=O.source,it=x.get(z);delete it[S.__cacheKey],h.memory.textures--}function U(O){const S=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let st=0;st<S.__webglFramebuffer[it].length;st++)r.deleteFramebuffer(S.__webglFramebuffer[it][st]);else r.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)r.deleteFramebuffer(S.__webglFramebuffer[it]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=O.textures;for(let it=0,st=z.length;it<st;it++){const K=s.get(z[it]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),h.memory.textures--),s.remove(z[it])}s.remove(O)}let k=0;function J(){k=0}function tt(){const O=k;return O>=l.maxTextures&&ie("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function ht(O){const S=[];return S.push(O.wrapS),S.push(O.wrapT),S.push(O.wrapR||0),S.push(O.magFilter),S.push(O.minFilter),S.push(O.anisotropy),S.push(O.internalFormat),S.push(O.format),S.push(O.type),S.push(O.generateMipmaps),S.push(O.premultiplyAlpha),S.push(O.flipY),S.push(O.unpackAlignment),S.push(O.colorSpace),S.join()}function ft(O,S){const z=s.get(O);if(O.isVideoTexture&&_e(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&z.__version!==O.version){const it=O.image;if(it===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{at(z,O,S);return}}else O.isExternalTexture&&(z.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function I(O,S){const z=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&z.__version!==O.version){at(z,O,S);return}else O.isExternalTexture&&(z.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function G(O,S){const z=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&z.__version!==O.version){at(z,O,S);return}i.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function lt(O,S){const z=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&z.__version!==O.version){dt(z,O,S);return}i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}const bt={[md]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[gd]:r.MIRRORED_REPEAT},Mt={[On]:r.NEAREST,[qy]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Eh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},N={[Zy]:r.NEVER,[tM]:r.ALWAYS,[Ky]:r.LESS,[cp]:r.LEQUAL,[Qy]:r.EQUAL,[up]:r.GEQUAL,[Jy]:r.GREATER,[$y]:r.NOTEQUAL};function $(O,S){if(S.type===Vi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Bn||S.magFilter===Eh||S.magFilter===yc||S.magFilter===Ps||S.minFilter===Bn||S.minFilter===Eh||S.minFilter===yc||S.minFilter===Ps)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,bt[S.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,bt[S.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,bt[S.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Mt[S.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,N[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===On||S.minFilter!==yc&&S.minFilter!==Ps||S.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||s.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy}}}function _t(O,S){let z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,S.addEventListener("dispose",B));const it=S.source;let st=x.get(it);st===void 0&&(st={},x.set(it,st));const K=ht(S);if(K!==O.__cacheKey){st[K]===void 0&&(st[K]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,z=!0),st[K].usedTimes++;const Rt=st[O.__cacheKey];Rt!==void 0&&(st[O.__cacheKey].usedTimes--,Rt.usedTimes===0&&A(S)),O.__cacheKey=K,O.__webglTexture=st[K].texture}return z}function wt(O,S,z){return Math.floor(Math.floor(O/z)/S)}function Ot(O,S,z,it){const K=O.updateRanges;if(K.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,z,it,S.data);else{K.sort((mt,St)=>mt.start-St.start);let Rt=0;for(let mt=1;mt<K.length;mt++){const St=K[Rt],Ut=K[mt],Lt=St.start+St.count,Et=wt(Ut.start,S.width,4),Qt=wt(St.start,S.width,4);Ut.start<=Lt+1&&Et===Qt&&wt(Ut.start+Ut.count-1,S.width,4)===Et?St.count=Math.max(St.count,Ut.start+Ut.count-St.start):(++Rt,K[Rt]=Ut)}K.length=Rt+1;const yt=r.getParameter(r.UNPACK_ROW_LENGTH),Ft=r.getParameter(r.UNPACK_SKIP_PIXELS),Yt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let mt=0,St=K.length;mt<St;mt++){const Ut=K[mt],Lt=Math.floor(Ut.start/4),Et=Math.ceil(Ut.count/4),Qt=Lt%S.width,X=Math.floor(Lt/S.width),Nt=Et,Ct=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,Qt,X,Nt,Ct,z,it,S.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,yt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,Yt)}}function at(O,S,z){let it=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(it=r.TEXTURE_3D);const st=_t(O,S),K=S.source;i.bindTexture(it,O.__webglTexture,r.TEXTURE0+z);const Rt=s.get(K);if(K.version!==Rt.__version||st===!0){i.activeTexture(r.TEXTURE0+z);const yt=we.getPrimaries(we.workingColorSpace),Ft=S.colorSpace===ss?null:we.getPrimaries(S.colorSpace),Yt=S.colorSpace===ss||yt===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let mt=T(S.image,!1,l.maxTextureSize);mt=Ae(S,mt);const St=c.convert(S.format,S.colorSpace),Ut=c.convert(S.type);let Lt=w(S.internalFormat,St,Ut,S.colorSpace,S.isVideoTexture);$(it,S);let Et;const Qt=S.mipmaps,X=S.isVideoTexture!==!0,Nt=Rt.__version===void 0||st===!0,Ct=K.dataReady,It=P(S,mt);if(S.isDepthTexture)Lt=D(S.format===Is,S.type),Nt&&(X?i.texStorage2D(r.TEXTURE_2D,1,Lt,mt.width,mt.height):i.texImage2D(r.TEXTURE_2D,0,Lt,mt.width,mt.height,0,St,Ut,null));else if(S.isDataTexture)if(Qt.length>0){X&&Nt&&i.texStorage2D(r.TEXTURE_2D,It,Lt,Qt[0].width,Qt[0].height);for(let Tt=0,xt=Qt.length;Tt<xt;Tt++)Et=Qt[Tt],X?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Et.width,Et.height,St,Ut,Et.data):i.texImage2D(r.TEXTURE_2D,Tt,Lt,Et.width,Et.height,0,St,Ut,Et.data);S.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(r.TEXTURE_2D,It,Lt,mt.width,mt.height),Ct&&Ot(S,mt,St,Ut)):i.texImage2D(r.TEXTURE_2D,0,Lt,mt.width,mt.height,0,St,Ut,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,Lt,Qt[0].width,Qt[0].height,mt.depth);for(let Tt=0,xt=Qt.length;Tt<xt;Tt++)if(Et=Qt[Tt],S.format!==Li)if(St!==null)if(X){if(Ct)if(S.layerUpdates.size>0){const Dt=j_(Et.width,Et.height,S.format,S.type);for(const ae of S.layerUpdates){const Ie=Et.data.subarray(ae*Dt/Et.data.BYTES_PER_ELEMENT,(ae+1)*Dt/Et.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,ae,Et.width,Et.height,1,St,Ie)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Et.width,Et.height,mt.depth,St,Et.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Lt,Et.width,Et.height,mt.depth,0,Et.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Et.width,Et.height,mt.depth,St,Ut,Et.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Lt,Et.width,Et.height,mt.depth,0,St,Ut,Et.data)}else{X&&Nt&&i.texStorage2D(r.TEXTURE_2D,It,Lt,Qt[0].width,Qt[0].height);for(let Tt=0,xt=Qt.length;Tt<xt;Tt++)Et=Qt[Tt],S.format!==Li?St!==null?X?Ct&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Et.width,Et.height,St,Et.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,Lt,Et.width,Et.height,0,Et.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Et.width,Et.height,St,Ut,Et.data):i.texImage2D(r.TEXTURE_2D,Tt,Lt,Et.width,Et.height,0,St,Ut,Et.data)}else if(S.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,Lt,mt.width,mt.height,mt.depth),Ct)if(S.layerUpdates.size>0){const Tt=j_(mt.width,mt.height,S.format,S.type);for(const xt of S.layerUpdates){const Dt=mt.data.subarray(xt*Tt/mt.data.BYTES_PER_ELEMENT,(xt+1)*Tt/mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,mt.width,mt.height,1,St,Ut,Dt)}S.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,Ut,mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,mt.width,mt.height,mt.depth,0,St,Ut,mt.data);else if(S.isData3DTexture)X?(Nt&&i.texStorage3D(r.TEXTURE_3D,It,Lt,mt.width,mt.height,mt.depth),Ct&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,Ut,mt.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,mt.width,mt.height,mt.depth,0,St,Ut,mt.data);else if(S.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(r.TEXTURE_2D,It,Lt,mt.width,mt.height);else{let Tt=mt.width,xt=mt.height;for(let Dt=0;Dt<It;Dt++)i.texImage2D(r.TEXTURE_2D,Dt,Lt,Tt,xt,0,St,Ut,null),Tt>>=1,xt>>=1}}else if(Qt.length>0){if(X&&Nt){const Tt=qt(Qt[0]);i.texStorage2D(r.TEXTURE_2D,It,Lt,Tt.width,Tt.height)}for(let Tt=0,xt=Qt.length;Tt<xt;Tt++)Et=Qt[Tt],X?Ct&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,St,Ut,Et):i.texImage2D(r.TEXTURE_2D,Tt,Lt,St,Ut,Et);S.generateMipmaps=!1}else if(X){if(Nt){const Tt=qt(mt);i.texStorage2D(r.TEXTURE_2D,It,Lt,Tt.width,Tt.height)}Ct&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,St,Ut,mt)}else i.texImage2D(r.TEXTURE_2D,0,Lt,St,Ut,mt);M(S)&&v(it),Rt.__version=K.version,S.onUpdate&&S.onUpdate(S)}O.__version=S.version}function dt(O,S,z){if(S.image.length!==6)return;const it=_t(O,S),st=S.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+z);const K=s.get(st);if(st.version!==K.__version||it===!0){i.activeTexture(r.TEXTURE0+z);const Rt=we.getPrimaries(we.workingColorSpace),yt=S.colorSpace===ss?null:we.getPrimaries(S.colorSpace),Ft=S.colorSpace===ss||Rt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,St=[];for(let xt=0;xt<6;xt++)!Yt&&!mt?St[xt]=T(S.image[xt],!0,l.maxCubemapSize):St[xt]=mt?S.image[xt].image:S.image[xt],St[xt]=Ae(S,St[xt]);const Ut=St[0],Lt=c.convert(S.format,S.colorSpace),Et=c.convert(S.type),Qt=w(S.internalFormat,Lt,Et,S.colorSpace),X=S.isVideoTexture!==!0,Nt=K.__version===void 0||it===!0,Ct=st.dataReady;let It=P(S,Ut);$(r.TEXTURE_CUBE_MAP,S);let Tt;if(Yt){X&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,It,Qt,Ut.width,Ut.height);for(let xt=0;xt<6;xt++){Tt=St[xt].mipmaps;for(let Dt=0;Dt<Tt.length;Dt++){const ae=Tt[Dt];S.format!==Li?Lt!==null?X?Ct&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,ae.width,ae.height,Lt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,Qt,ae.width,ae.height,0,ae.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,ae.width,ae.height,Lt,Et,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,Qt,ae.width,ae.height,0,Lt,Et,ae.data)}}}else{if(Tt=S.mipmaps,X&&Nt){Tt.length>0&&It++;const xt=qt(St[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,It,Qt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(mt){X?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,St[xt].width,St[xt].height,Lt,Et,St[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Qt,St[xt].width,St[xt].height,0,Lt,Et,St[xt].data);for(let Dt=0;Dt<Tt.length;Dt++){const Ie=Tt[Dt].image[xt].image;X?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,Ie.width,Ie.height,Lt,Et,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,Qt,Ie.width,Ie.height,0,Lt,Et,Ie.data)}}else{X?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt,Et,St[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Qt,Lt,Et,St[xt]);for(let Dt=0;Dt<Tt.length;Dt++){const ae=Tt[Dt];X?Ct&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,Lt,Et,ae.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,Qt,Lt,Et,ae.image[xt])}}}M(S)&&v(r.TEXTURE_CUBE_MAP),K.__version=st.version,S.onUpdate&&S.onUpdate(S)}O.__version=S.version}function At(O,S,z,it,st,K){const Rt=c.convert(z.format,z.colorSpace),yt=c.convert(z.type),Ft=w(z.internalFormat,Rt,yt,z.colorSpace),Yt=s.get(S),mt=s.get(z);if(mt.__renderTarget=S,!Yt.__hasExternalTextures){const St=Math.max(1,S.width>>K),Ut=Math.max(1,S.height>>K);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?i.texImage3D(st,K,Ft,St,Ut,S.depth,0,Rt,yt,null):i.texImage2D(st,K,Ft,St,Ut,0,Rt,yt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),qe(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,st,mt.__webglTexture,0,V(S)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,st,mt.__webglTexture,K),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(O,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,O),S.depthBuffer){const it=S.depthTexture,st=it&&it.isDepthTexture?it.type:null,K=D(S.stencilBuffer,st),Rt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(S),K,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(S),K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,O)}else{const it=S.textures;for(let st=0;st<it.length;st++){const K=it[st],Rt=c.convert(K.format,K.colorSpace),yt=c.convert(K.type),Ft=w(K.internalFormat,Rt,yt,K.colorSpace);qe(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(S),Ft,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(S),Ft,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ft,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(O,S,z){const it=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=s.get(S.depthTexture);if(st.__renderTarget=S,(!st.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),it){if(st.__webglInit===void 0&&(st.__webglInit=!0,S.depthTexture.addEventListener("dispose",B)),st.__webglTexture===void 0){st.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),$(r.TEXTURE_CUBE_MAP,S.depthTexture);const Yt=c.convert(S.depthTexture.format),mt=c.convert(S.depthTexture.type);let St;S.depthTexture.format===Ta?St=r.DEPTH_COMPONENT24:S.depthTexture.format===Is&&(St=r.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,St,S.width,S.height,0,Yt,mt,null)}}else ft(S.depthTexture,0);const K=st.__webglTexture,Rt=V(S),yt=it?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,Ft=S.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ta)qe(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ft,yt,K,0,Rt):r.framebufferTexture2D(r.FRAMEBUFFER,Ft,yt,K,0);else if(S.depthTexture.format===Is)qe(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ft,yt,K,0,Rt):r.framebufferTexture2D(r.FRAMEBUFFER,Ft,yt,K,0);else throw new Error("Unknown depthTexture format")}function de(O){const S=s.get(O),z=O.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==O.depthTexture){const it=O.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),it){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,it.removeEventListener("dispose",st)};it.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=it}if(O.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let it=0;it<6;it++)Gt(S.__webglFramebuffer[it],O,it);else{const it=O.texture.mipmaps;it&&it.length>0?Gt(S.__webglFramebuffer[0],O,0):Gt(S.__webglFramebuffer,O,0)}else if(z){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]===void 0)S.__webglDepthbuffer[it]=r.createRenderbuffer(),Vt(S.__webglDepthbuffer[it],O,!1);else{const st=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,K)}}else{const it=O.texture.mipmaps;if(it&&it.length>0?i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Vt(S.__webglDepthbuffer,O,!1);else{const st=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,K)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(O,S,z){const it=s.get(O);S!==void 0&&At(it.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&de(O)}function me(O){const S=O.texture,z=s.get(O),it=s.get(S);O.addEventListener("dispose",F);const st=O.textures,K=O.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=S.version,h.memory.textures++),K){z.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[yt]=[];for(let Ft=0;Ft<S.mipmaps.length;Ft++)z.__webglFramebuffer[yt][Ft]=r.createFramebuffer()}else z.__webglFramebuffer[yt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let yt=0;yt<S.mipmaps.length;yt++)z.__webglFramebuffer[yt]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Rt)for(let yt=0,Ft=st.length;yt<Ft;yt++){const Yt=s.get(st[yt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&qe(O)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let yt=0;yt<st.length;yt++){const Ft=st[yt];z.__webglColorRenderbuffer[yt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[yt]);const Yt=c.convert(Ft.format,Ft.colorSpace),mt=c.convert(Ft.type),St=w(Ft.internalFormat,Yt,mt,Ft.colorSpace,O.isXRRenderTarget===!0),Ut=V(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,St,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,z.__webglColorRenderbuffer[yt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(z.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),$(r.TEXTURE_CUBE_MAP,S);for(let yt=0;yt<6;yt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)At(z.__webglFramebuffer[yt][Ft],O,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft);else At(z.__webglFramebuffer[yt],O,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);M(S)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Rt){for(let yt=0,Ft=st.length;yt<Ft;yt++){const Yt=st[yt],mt=s.get(Yt);let St=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(St=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(St,mt.__webglTexture),$(St,Yt),At(z.__webglFramebuffer,O,Yt,r.COLOR_ATTACHMENT0+yt,St,0),M(Yt)&&v(St)}i.unbindTexture()}else{let yt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(yt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(yt,it.__webglTexture),$(yt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ft=0;Ft<S.mipmaps.length;Ft++)At(z.__webglFramebuffer[Ft],O,S,r.COLOR_ATTACHMENT0,yt,Ft);else At(z.__webglFramebuffer,O,S,r.COLOR_ATTACHMENT0,yt,0);M(S)&&v(yt),i.unbindTexture()}O.depthBuffer&&de(O)}function pe(O){const S=O.textures;for(let z=0,it=S.length;z<it;z++){const st=S[z];if(M(st)){const K=L(O),Rt=s.get(st).__webglTexture;i.bindTexture(K,Rt),v(K),i.unbindTexture()}}}const Te=[],se=[];function je(O){if(O.samples>0){if(qe(O)===!1){const S=O.textures,z=O.width,it=O.height;let st=r.COLOR_BUFFER_BIT;const K=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=s.get(O),yt=S.length>1;if(yt)for(let Yt=0;Yt<S.length;Yt++)i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Ft=O.texture.mipmaps;Ft&&Ft.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Yt=0;Yt<S.length;Yt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),yt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[Yt]);const mt=s.get(S[Yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,mt,0)}r.blitFramebuffer(0,0,z,it,0,0,z,it,st,r.NEAREST),m===!0&&(Te.length=0,se.length=0,Te.push(r.COLOR_ATTACHMENT0+Yt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Te.push(K),se.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),yt)for(let Yt=0;Yt<S.length;Yt++){i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[Yt]);const mt=s.get(S[Yt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const S=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function qe(O){const S=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(O){const S=h.render.frame;g.get(O)!==S&&(g.set(O,S),O.update())}function Ae(O,S){const z=O.colorSpace,it=O.format,st=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||z!==Wr&&z!==ss&&(we.getTransfer(z)===He?(it!==Li||st!==li)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",z)),S}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=J,this.setTexture2D=ft,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=lt,this.rebindTextures=Qe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=At,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function UA(r,t){function i(s,l=ss){let c;const h=we.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===zv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Fv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Pv)return r.BYTE;if(s===Iv)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===ip)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===Bv)return r.ALPHA;if(s===Hv)return r.RGB;if(s===Li)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===Gv)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===op)return r.RG_INTEGER;if(s===lp)return r.RGBA_INTEGER;if(s===jc||s===Zc||s===Kc||s===Qc)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===vd||s===xd||s===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===yd||s===Md)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ed)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===bd)return c.COMPRESSED_R11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ad)return c.COMPRESSED_RG11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===Id||s===zd||s===Fd||s===Bd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wd||s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
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

}`;class OA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new $v(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:LA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,E=null,b=null;const T=typeof XRWebGLBinding<"u",M=new OA,v={},L=i.getContextAttributes();let w=null,D=null;const P=[],B=[],F=new le;let Y=null;const A=new yi;A.viewport=new an;const U=new yi;U.viewport=new an;const k=[A,U],J=new VM;let tt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=P[at];return dt===void 0&&(dt=new Wh,P[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=P[at];return dt===void 0&&(dt=new Wh,P[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=P[at];return dt===void 0&&(dt=new Wh,P[at]=dt),dt.getHandSpace()};function ft(at){const dt=B.indexOf(at.inputSource);if(dt===-1)return;const At=P[dt];At!==void 0&&(At.update(at.inputSource,at.frame,p||h),At.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let at=0;at<P.length;at++){const dt=B[at];dt!==null&&(B[at]=null,P[at].disconnect(dt))}tt=null,ht=null,M.reset();for(const at in v)delete v[at];t.setRenderTarget(w),E=null,x=null,_=null,l=null,D=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(Y),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await i.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Vt=null,Gt=null;L.depth&&(Gt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=L.stencil?Is:Ta,Vt=L.stencil?il:ji);const de={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(de),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new qi(x.textureWidth,x.textureHeight,{format:Li,type:li,depthTexture:new sl(x.textureWidth,x.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const At={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new qi(E.framebufferWidth,E.framebufferHeight,{format:Li,type:li,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(at){for(let dt=0;dt<at.removed.length;dt++){const At=at.removed[dt],Vt=B.indexOf(At);Vt>=0&&(B[Vt]=null,P[Vt].disconnect(At))}for(let dt=0;dt<at.added.length;dt++){const At=at.added[dt];let Vt=B.indexOf(At);if(Vt===-1){for(let de=0;de<P.length;de++)if(de>=B.length){B.push(At),Vt=de;break}else if(B[de]===null){B[de]=At,Vt=de;break}if(Vt===-1)break}const Gt=P[Vt];Gt&&Gt.connect(At)}}const lt=new Z,bt=new Z;function Mt(at,dt,At){lt.setFromMatrixPosition(dt.matrixWorld),bt.setFromMatrixPosition(At.matrixWorld);const Vt=lt.distanceTo(bt),Gt=dt.projectionMatrix.elements,de=At.projectionMatrix.elements,Qe=Gt[14]/(Gt[10]-1),me=Gt[14]/(Gt[10]+1),pe=(Gt[9]+1)/Gt[5],Te=(Gt[9]-1)/Gt[5],se=(Gt[8]-1)/Gt[0],je=(de[8]+1)/de[0],V=Qe*se,qe=Qe*je,_e=Vt/(-se+je),Ae=_e*-se;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ae),at.translateZ(_e),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Gt[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qt=Qe+_e,O=me+_e,S=V-Ae,z=qe+(Vt-Ae),it=pe*me/O*qt,st=Te*me/O*qt;at.projectionMatrix.makePerspective(S,z,it,st,qt,O),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function N(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let dt=at.near,At=at.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),J.near=U.near=A.near=dt,J.far=U.far=A.far=At,(tt!==J.near||ht!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),tt=J.near,ht=J.far),J.layers.mask=at.layers.mask|6,A.layers.mask=J.layers.mask&3,U.layers.mask=J.layers.mask&5;const Vt=at.parent,Gt=J.cameras;N(J,Vt);for(let de=0;de<Gt.length;de++)N(Gt[de],Vt);Gt.length===2?Mt(J,A,U):J.projectionMatrix.copy(A.projectionMatrix),$(at,J,Vt)};function $(at,dt,At){At===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(At.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Zd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(at){m=at,x!==null&&(x.fixedFoveation=at),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(at){return v[at]};let _t=null;function wt(at,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const At=g.views;E!==null&&(t.setRenderTargetFramebuffer(D,E.framebuffer),t.setRenderTarget(D));let Vt=!1;At.length!==J.cameras.length&&(J.cameras.length=0,Vt=!0);for(let me=0;me<At.length;me++){const pe=At[me];let Te=null;if(E!==null)Te=E.getViewport(pe);else{const je=_.getViewSubImage(x,pe);Te=je.viewport,me===0&&(t.setRenderTargetTextures(D,je.colorTexture,je.depthStencilTexture),t.setRenderTarget(D))}let se=k[me];se===void 0&&(se=new yi,se.layers.enable(me),se.viewport=new an,k[me]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Te.x,Te.y,Te.width,Te.height),me===0&&(J.matrix.copy(se.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Vt===!0&&J.cameras.push(se)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const me=_.getDepthInformation(At[0]);me&&me.isValid&&me.texture&&M.init(me,l.renderState)}if(Gt&&Gt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let me=0;me<At.length;me++){const pe=At[me].camera;if(pe){let Te=v[pe];Te||(Te=new $v,v[pe]=Te);const se=_.getCameraImage(pe);Te.sourceTexture=se}}}}for(let At=0;At<P.length;At++){const Vt=B[At],Gt=P[At];Vt!==null&&Gt!==void 0&&Gt.update(Vt,dt,p||h)}_t&&_t(at,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),b=null}const Ot=new ex;Ot.setAnimationLoop(wt),this.setAnimationLoop=function(at){_t=at},this.dispose=function(){}}}const Ls=new Zi,IA=new tn;function zA(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,jv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,L,w,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&E(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,L,w):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Qn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Qn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const L=t.get(v),w=L.envMap,D=L.envMapRotation;w&&(M.envMap.value=w,Ls.copy(D),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),M.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(Ls)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,L,w){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*L,M.scale.value=w*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function E(M,v,L){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const L=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function FA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,w){const D=w.program;s.uniformBlockBinding(L,D)}function p(L,w){let D=l[L.id];D===void 0&&(b(L),D=g(L),l[L.id]=D,L.addEventListener("dispose",M));const P=w.program;s.updateUBOMapping(L,P);const B=t.render.frame;c[L.id]!==B&&(x(L),c[L.id]=B)}function g(L){const w=_();L.__bindingPointIndex=w;const D=r.createBuffer(),P=L.__size,B=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,P,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,D),D}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const w=l[L.id],D=L.uniforms,P=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let B=0,F=D.length;B<F;B++){const Y=Array.isArray(D[B])?D[B]:[D[B]];for(let A=0,U=Y.length;A<U;A++){const k=Y[A];if(E(k,B,A,P)===!0){const J=k.__offset,tt=Array.isArray(k.value)?k.value:[k.value];let ht=0;for(let ft=0;ft<tt.length;ft++){const I=tt[ft],G=T(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,J+ht,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,ht),ht+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(L,w,D,P){const B=L.value,F=w+"_"+D;if(P[F]===void 0)return typeof B=="number"||typeof B=="boolean"?P[F]=B:P[F]=B.clone(),!0;{const Y=P[F];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return P[F]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function b(L){const w=L.uniforms;let D=0;const P=16;for(let F=0,Y=w.length;F<Y;F++){const A=Array.isArray(w[F])?w[F]:[w[F]];for(let U=0,k=A.length;U<k;U++){const J=A[U],tt=Array.isArray(J.value)?J.value:[J.value];for(let ht=0,ft=tt.length;ht<ft;ht++){const I=tt[ht],G=T(I),lt=D%P,bt=lt%G.boundary,Mt=lt+bt;D+=bt,Mt!==0&&P-Mt<G.storage&&(D+=P-Mt),J.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=G.storage}}}const B=D%P;return B>0&&(D+=P-B),L.__size=D,L.__cache={},this}function T(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",L),w}function M(L){const w=L.target;w.removeEventListener("dispose",M);const D=h.indexOf(w.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const L in l)r.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const BA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function HA(){return Bi===null&&(Bi=new wM(BA,16,16,Xr,ba),Bi.name="DFG_LUT",Bi.minFilter=Bn,Bi.magFilter=Bn,Bi.wrapS=ya,Bi.wrapT=ya,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class GA{constructor(t={}){const{canvas:i=eM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:E=li}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const T=E,M=new Set([lp,op,rp]),v=new Set([li,ji,nl,il,ap,sp]),L=new Uint32Array(4),w=new Int32Array(4);let D=null,P=null;const B=[],F=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let U=!1;this._outputColorSpace=Si;let k=0,J=0,tt=null,ht=-1,ft=null;const I=new an,G=new an;let lt=null;const bt=new be(0);let Mt=0,N=i.width,$=i.height,_t=1,wt=null,Ot=null;const at=new an(0,0,N,$),dt=new an(0,0,N,$);let At=!1;const Vt=new pp;let Gt=!1,de=!1;const Qe=new tn,me=new Z,pe=new an,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function je(){return tt===null?_t:1}let V=s;function qe(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Re,!1),V===null){const q="webgl2";if(V=qe(q,C),V===null)throw qe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ce("WebGLRenderer: "+C.message),C}let _e,Ae,qt,O,S,z,it,st,K,Rt,yt,Ft,Yt,mt,St,Ut,Lt,Et,Qt,X,Nt,Ct,It,Tt;function xt(){_e=new HT(V),_e.init(),Ct=new UA(V,_e),Ae=new UT(V,_e,t,Ct),qt=new wA(V,_e),Ae.reversedDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),O=new kT(V),S=new pA,z=new DA(V,_e,qt,S,Ae,Ct,O),it=new NT(A),st=new BT(A),K=new YM(V),It=new wT(V,K),Rt=new GT(V,K,O,It),yt=new WT(V,Rt,K,O),Qt=new XT(V,Ae,z),Ut=new LT(S),Ft=new dA(A,it,st,_e,Ae,It,Ut),Yt=new zA(A,S),mt=new gA,St=new MA(_e),Et=new CT(A,it,st,qt,yt,b,m),Lt=new RA(A,yt,Ae),Tt=new FA(V,O,Ae,qt),X=new DT(V,_e,O),Nt=new VT(V,_e,O),O.programs=Ft.programs,A.capabilities=Ae,A.extensions=_e,A.properties=S,A.renderLists=mt,A.shadowMap=Lt,A.state=qt,A.info=O}xt(),T!==li&&(Y=new YT(T,i.width,i.height,l,c));const Dt=new PA(A,V);this.xr=Dt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=_e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(C){C!==void 0&&(_t=C,this.setSize(N,$,!1))},this.getSize=function(C){return C.set(N,$)},this.setSize=function(C,q,ct=!0){if(Dt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,$=q,i.width=Math.floor(C*_t),i.height=Math.floor(q*_t),ct===!0&&(i.style.width=C+"px",i.style.height=q+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(N*_t,$*_t).floor()},this.setDrawingBufferSize=function(C,q,ct){N=C,$=q,_t=ct,i.width=Math.floor(C*ct),i.height=Math.floor(q*ct),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(T===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,q,ct,rt){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,q,ct,rt),qt.viewport(I.copy(at).multiplyScalar(_t).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,q,ct,rt){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,q,ct,rt),qt.scissor(G.copy(dt).multiplyScalar(_t).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){qt.setScissorTest(At=C)},this.setOpaqueSort=function(C){wt=C},this.setTransparentSort=function(C){Ot=C},this.getClearColor=function(C){return C.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ct=!0){let rt=0;if(C){let Q=!1;if(tt!==null){const Pt=tt.texture.format;Q=M.has(Pt)}if(Q){const Pt=tt.texture.type,Ht=v.has(Pt),zt=Et.getClearColor(),kt=Et.getClearAlpha(),jt=zt.r,te=zt.g,Zt=zt.b;Ht?(L[0]=jt,L[1]=te,L[2]=Zt,L[3]=kt,V.clearBufferuiv(V.COLOR,0,L)):(w[0]=jt,w[1]=te,w[2]=Zt,w[3]=kt,V.clearBufferiv(V.COLOR,0,w))}else rt|=V.COLOR_BUFFER_BIT}q&&(rt|=V.DEPTH_BUFFER_BIT),ct&&(rt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),Et.dispose(),mt.dispose(),St.dispose(),S.dispose(),it.dispose(),st.dispose(),yt.dispose(),It.dispose(),Tt.dispose(),Ft.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Gs),Dt.removeEventListener("sessionend",Jr),Oi.stop()};function ae(C){C.preventDefault(),S_("WebGLRenderer: Context Lost."),U=!0}function Ie(){S_("WebGLRenderer: Context Restored."),U=!1;const C=O.autoReset,q=Lt.enabled,ct=Lt.autoUpdate,rt=Lt.needsUpdate,Q=Lt.type;xt(),O.autoReset=C,Lt.enabled=q,Lt.autoUpdate=ct,Lt.needsUpdate=rt,Lt.type=Q}function Re(C){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pn(C){const q=C.target;q.removeEventListener("dispose",Pn),Mi(q)}function Mi(C){ul(C),S.remove(C)}function ul(C){const q=S.get(C).programs;q!==void 0&&(q.forEach(function(ct){Ft.releaseProgram(ct)}),C.isShaderMaterial&&Ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ct,rt,Q,Pt){q===null&&(q=Te);const Ht=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=cs(C,q,ct,rt,Q);qt.setMaterial(rt,Ht);let kt=ct.index,jt=1;if(rt.wireframe===!0){if(kt=Rt.getWireframeAttribute(ct),kt===void 0)return;jt=2}const te=ct.drawRange,Zt=ct.attributes.position;let ee=te.start*jt,Le=(te.start+te.count)*jt;Pt!==null&&(ee=Math.max(ee,Pt.start*jt),Le=Math.min(Le,(Pt.start+Pt.count)*jt)),kt!==null?(ee=Math.max(ee,0),Le=Math.min(Le,kt.count)):Zt!=null&&(ee=Math.max(ee,0),Le=Math.min(Le,Zt.count));const Je=Le-ee;if(Je<0||Je===1/0)return;It.setup(Q,rt,zt,ct,kt);let Ye,Pe=X;if(kt!==null&&(Ye=K.get(kt),Pe=Nt,Pe.setIndex(Ye)),Q.isMesh)rt.wireframe===!0?(qt.setLineWidth(rt.wireframeLinewidth*je()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if(Q.isLine){let Jt=rt.linewidth;Jt===void 0&&(Jt=1),qt.setLineWidth(Jt*je()),Q.isLineSegments?Pe.setMode(V.LINES):Q.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else Q.isPoints?Pe.setMode(V.POINTS):Q.isSprite&&Pe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Jt=Q._multiDrawStarts,Ne=Q._multiDrawCounts,re=Q._multiDrawCount,Tn=kt?K.get(kt).bytesPerElement:1,Qi=S.get(rt).currentProgram.getUniforms();for(let An=0;An<re;An++)Qi.setValue(V,"_gl_DrawID",An),Pe.render(Jt[An]/Tn,Ne[An])}else if(Q.isInstancedMesh)Pe.renderInstances(ee,Je,Q.count);else if(ct.isInstancedBufferGeometry){const Jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ne=Math.min(ct.instanceCount,Jt);Pe.renderInstances(ee,Je,Ne)}else Pe.render(ee,Je)};function Kr(C,q,ct){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,ks(C,q,ct),C.side=os,C.needsUpdate=!0,ks(C,q,ct),C.side=Sa):ks(C,q,ct)}this.compile=function(C,q,ct=null){ct===null&&(ct=C),P=St.get(ct),P.init(q),F.push(P),ct.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),C!==ct&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const rt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pt=Q.material;if(Pt)if(Array.isArray(Pt))for(let Ht=0;Ht<Pt.length;Ht++){const zt=Pt[Ht];Kr(zt,ct,Q),rt.add(zt)}else Kr(Pt,ct,Q),rt.add(Pt)}),P=F.pop(),rt},this.compileAsync=function(C,q,ct=null){const rt=this.compile(C,q,ct);return new Promise(Q=>{function Pt(){if(rt.forEach(function(Ht){S.get(Ht).currentProgram.isReady()&&rt.delete(Ht)}),rt.size===0){Q(C);return}setTimeout(Pt,10)}_e.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Hs=null;function Qr(C){Hs&&Hs(C)}function Gs(){Oi.stop()}function Jr(){Oi.start()}const Oi=new ex;Oi.setAnimationLoop(Qr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){Hs=C,Dt.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},Dt.addEventListener("sessionstart",Gs),Dt.addEventListener("sessionend",Jr),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const ct=Dt.enabled===!0&&Dt.isPresenting===!0,rt=Y!==null&&(tt===null||ct)&&Y.begin(A,tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,q,tt),P=St.get(C,F.length),P.init(q),F.push(P),Qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix(Qe,ki,q.reversedDepth),de=this.localClippingEnabled,Gt=Ut.init(this.clippingPlanes,de),D=mt.get(C,B.length),D.init(),B.push(D),Dt.enabled===!0&&Dt.isPresenting===!0){const Ht=A.xr.getDepthSensingMesh();Ht!==null&&ci(Ht,q,-1/0,A.sortObjects)}ci(C,q,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(wt,Ot),se=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,se&&Et.addToRenderList(D,C),this.info.render.frame++,Gt===!0&&Ut.beginShadows();const Q=P.state.shadowsArray;if(Lt.render(Q,C,q),Gt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&Y.hasRenderPass())===!1){const Ht=D.opaque,zt=D.transmissive;if(P.setupLights(),q.isArrayCamera){const kt=q.cameras;if(zt.length>0)for(let jt=0,te=kt.length;jt<te;jt++){const Zt=kt[jt];bn(Ht,zt,C,Zt)}se&&Et.render(C);for(let jt=0,te=kt.length;jt<te;jt++){const Zt=kt[jt];on(D,C,Zt,Zt.viewport)}}else zt.length>0&&bn(Ht,zt,C,q),se&&Et.render(C),on(D,C,q)}tt!==null&&J===0&&(z.updateMultisampleRenderTarget(tt),z.updateRenderTargetMipmap(tt)),rt&&Y.end(A),C.isScene===!0&&C.onAfterRender(A,C,q),It.resetDefaultState(),ht=-1,ft=null,F.pop(),F.length>0?(P=F[F.length-1],Gt===!0&&Ut.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function ci(C,q,ct,rt){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Vt.intersectsSprite(C)){rt&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qe);const Ht=yt.update(C),zt=C.material;zt.visible&&D.push(C,Ht,zt,ct,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Vt.intersectsObject(C))){const Ht=yt.update(C),zt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),pe.copy(Ht.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(Qe)),Array.isArray(zt)){const kt=Ht.groups;for(let jt=0,te=kt.length;jt<te;jt++){const Zt=kt[jt],ee=zt[Zt.materialIndex];ee&&ee.visible&&D.push(C,Ht,ee,ct,pe.z,Zt)}}else zt.visible&&D.push(C,Ht,zt,ct,pe.z,null)}}const Pt=C.children;for(let Ht=0,zt=Pt.length;Ht<zt;Ht++)ci(Pt[Ht],q,ct,rt)}function on(C,q,ct,rt){const{opaque:Q,transmissive:Pt,transparent:Ht}=C;P.setupLightsView(ct),Gt===!0&&Ut.setGlobalState(A.clippingPlanes,ct),rt&&qt.viewport(I.copy(rt)),Q.length>0&&Ei(Q,q,ct),Pt.length>0&&Ei(Pt,q,ct),Ht.length>0&&Ei(Ht,q,ct),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function bn(C,q,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[rt.id]===void 0){const ee=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[rt.id]=new qi(1,1,{generateMipmaps:!0,type:ee?ba:li,minFilter:Ps,samples:Ae.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Pt=P.state.transmissionRenderTarget[rt.id],Ht=rt.viewport||I;Pt.setSize(Ht.z*A.transmissionResolutionScale,Ht.w*A.transmissionResolutionScale);const zt=A.getRenderTarget(),kt=A.getActiveCubeFace(),jt=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(bt),Mt=A.getClearAlpha(),Mt<1&&A.setClearColor(16777215,.5),A.clear(),se&&Et.render(ct);const te=A.toneMapping;A.toneMapping=Wi;const Zt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),P.setupLightsView(rt),Gt===!0&&Ut.setGlobalState(A.clippingPlanes,rt),Ei(C,ct,rt),z.updateMultisampleRenderTarget(Pt),z.updateRenderTargetMipmap(Pt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Le=0,Je=q.length;Le<Je;Le++){const Ye=q[Le],{object:Pe,geometry:Jt,material:Ne,group:re}=Ye;if(Ne.side===Sa&&Pe.layers.test(rt.layers)){const Tn=Ne.side;Ne.side=Qn,Ne.needsUpdate=!0,Vs(Pe,ct,rt,Jt,Ne,re),Ne.side=Tn,Ne.needsUpdate=!0,ee=!0}}ee===!0&&(z.updateMultisampleRenderTarget(Pt),z.updateRenderTargetMipmap(Pt))}A.setRenderTarget(zt,kt,jt),A.setClearColor(bt,Mt),Zt!==void 0&&(rt.viewport=Zt),A.toneMapping=te}function Ei(C,q,ct){const rt=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Pt=C.length;Q<Pt;Q++){const Ht=C[Q],{object:zt,geometry:kt,group:jt}=Ht;let te=Ht.material;te.allowOverride===!0&&rt!==null&&(te=rt),zt.layers.test(ct.layers)&&Vs(zt,q,ct,kt,te,jt)}}function Vs(C,q,ct,rt,Q,Pt){C.onBeforeRender(A,q,ct,rt,Q,Pt),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(A,q,ct,rt,C,Pt),Q.transparent===!0&&Q.side===Sa&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,A.renderBufferDirect(ct,q,rt,Q,C,Pt),Q.side=os,Q.needsUpdate=!0,A.renderBufferDirect(ct,q,rt,Q,C,Pt),Q.side=Sa):A.renderBufferDirect(ct,q,rt,Q,C,Pt),C.onAfterRender(A,q,ct,rt,Q,Pt)}function ks(C,q,ct){q.isScene!==!0&&(q=Te);const rt=S.get(C),Q=P.state.lights,Pt=P.state.shadowsArray,Ht=Q.state.version,zt=Ft.getParameters(C,Q.state,Pt,q,ct),kt=Ft.getProgramCacheKey(zt);let jt=rt.programs;rt.environment=C.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(C.isMeshStandardMaterial?st:it).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",Pn),jt=new Map,rt.programs=jt);let te=jt.get(kt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ht)return $r(C,zt),te}else zt.uniforms=Ft.getUniforms(C),C.onBeforeCompile(zt,A),te=Ft.acquireProgram(zt,kt),jt.set(kt,te),rt.uniforms=zt.uniforms;const Zt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=Ut.uniform),$r(C,zt),rt.needsLights=Aa(C),rt.lightsStateVersion=Ht,rt.needsLights&&(Zt.ambientLightColor.value=Q.state.ambient,Zt.lightProbe.value=Q.state.probe,Zt.directionalLights.value=Q.state.directional,Zt.directionalLightShadows.value=Q.state.directionalShadow,Zt.spotLights.value=Q.state.spot,Zt.spotLightShadows.value=Q.state.spotShadow,Zt.rectAreaLights.value=Q.state.rectArea,Zt.ltc_1.value=Q.state.rectAreaLTC1,Zt.ltc_2.value=Q.state.rectAreaLTC2,Zt.pointLights.value=Q.state.point,Zt.pointLightShadows.value=Q.state.pointShadow,Zt.hemisphereLights.value=Q.state.hemi,Zt.directionalShadowMap.value=Q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Zt.spotShadowMap.value=Q.state.spotShadowMap,Zt.spotLightMatrix.value=Q.state.spotLightMatrix,Zt.spotLightMap.value=Q.state.spotLightMap,Zt.pointShadowMap.value=Q.state.pointShadowMap,Zt.pointShadowMatrix.value=Q.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function fl(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=$c.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function $r(C,q){const ct=S.get(C);ct.outputColorSpace=q.outputColorSpace,ct.batching=q.batching,ct.batchingColor=q.batchingColor,ct.instancing=q.instancing,ct.instancingColor=q.instancingColor,ct.instancingMorph=q.instancingMorph,ct.skinning=q.skinning,ct.morphTargets=q.morphTargets,ct.morphNormals=q.morphNormals,ct.morphColors=q.morphColors,ct.morphTargetsCount=q.morphTargetsCount,ct.numClippingPlanes=q.numClippingPlanes,ct.numIntersection=q.numClipIntersection,ct.vertexAlphas=q.vertexAlphas,ct.vertexTangents=q.vertexTangents,ct.toneMapping=q.toneMapping}function cs(C,q,ct,rt,Q){q.isScene!==!0&&(q=Te),z.resetTextureUnits();const Pt=q.fog,Ht=rt.isMeshStandardMaterial?q.environment:null,zt=tt===null?A.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Wr,kt=(rt.isMeshStandardMaterial?st:it).get(rt.envMap||Ht),jt=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,te=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Zt=!!ct.morphAttributes.position,ee=!!ct.morphAttributes.normal,Le=!!ct.morphAttributes.color;let Je=Wi;rt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Je=A.toneMapping);const Ye=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Pe=Ye!==void 0?Ye.length:0,Jt=S.get(rt),Ne=P.state.lights;if(Gt===!0&&(de===!0||C!==ft)){const Cn=C===ft&&rt.id===ht;Ut.setState(rt,C,Cn)}let re=!1;rt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ne.state.version||Jt.outputColorSpace!==zt||Q.isBatchedMesh&&Jt.batching===!1||!Q.isBatchedMesh&&Jt.batching===!0||Q.isBatchedMesh&&Jt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Jt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Jt.instancing===!1||!Q.isInstancedMesh&&Jt.instancing===!0||Q.isSkinnedMesh&&Jt.skinning===!1||!Q.isSkinnedMesh&&Jt.skinning===!0||Q.isInstancedMesh&&Jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Jt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Jt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Jt.instancingMorph===!1&&Q.morphTexture!==null||Jt.envMap!==kt||rt.fog===!0&&Jt.fog!==Pt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Ut.numPlanes||Jt.numIntersection!==Ut.numIntersection)||Jt.vertexAlphas!==jt||Jt.vertexTangents!==te||Jt.morphTargets!==Zt||Jt.morphNormals!==ee||Jt.morphColors!==Le||Jt.toneMapping!==Je||Jt.morphTargetsCount!==Pe)&&(re=!0):(re=!0,Jt.__version=rt.version);let Tn=Jt.currentProgram;re===!0&&(Tn=ks(rt,q,Q));let Qi=!1,An=!1,ui=!1;const ze=Tn.getUniforms(),Rn=Jt.uniforms;if(qt.useProgram(Tn.program)&&(Qi=!0,An=!0,ui=!0),rt.id!==ht&&(ht=rt.id,An=!0),Qi||ft!==C){qt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ze.setValue(V,"projectionMatrix",C.projectionMatrix),ze.setValue(V,"viewMatrix",C.matrixWorldInverse);const wn=ze.map.cameraPosition;wn!==void 0&&wn.setValue(V,me.setFromMatrixPosition(C.matrixWorld)),Ae.logarithmicDepthBuffer&&ze.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ze.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),ft!==C&&(ft=C,An=!0,ui=!0)}if(Jt.needsLights&&(Ne.state.directionalShadowMap.length>0&&ze.setValue(V,"directionalShadowMap",Ne.state.directionalShadowMap,z),Ne.state.spotShadowMap.length>0&&ze.setValue(V,"spotShadowMap",Ne.state.spotShadowMap,z),Ne.state.pointShadowMap.length>0&&ze.setValue(V,"pointShadowMap",Ne.state.pointShadowMap,z)),Q.isSkinnedMesh){ze.setOptional(V,Q,"bindMatrix"),ze.setOptional(V,Q,"bindMatrixInverse");const Cn=Q.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),ze.setValue(V,"boneTexture",Cn.boneTexture,z))}Q.isBatchedMesh&&(ze.setOptional(V,Q,"batchingTexture"),ze.setValue(V,"batchingTexture",Q._matricesTexture,z),ze.setOptional(V,Q,"batchingIdTexture"),ze.setValue(V,"batchingIdTexture",Q._indirectTexture,z),ze.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ze.setValue(V,"batchingColorTexture",Q._colorsTexture,z));const mn=ct.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Qt.update(Q,ct,Tn),(An||Jt.receiveShadow!==Q.receiveShadow)&&(Jt.receiveShadow=Q.receiveShadow,ze.setValue(V,"receiveShadow",Q.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Rn.envMap.value=kt,Rn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=HA()),An&&(ze.setValue(V,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&to(Rn,ui),Pt&&rt.fog===!0&&Yt.refreshFogUniforms(Rn,Pt),Yt.refreshMaterialUniforms(Rn,rt,_t,$,P.state.transmissionRenderTarget[C.id]),$c.upload(V,fl(Jt),Rn,z)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&($c.upload(V,fl(Jt),Rn,z),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ze.setValue(V,"center",Q.center),ze.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ze.setValue(V,"normalMatrix",Q.normalMatrix),ze.setValue(V,"modelMatrix",Q.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Cn=rt.uniformsGroups;for(let wn=0,Xs=Cn.length;wn<Xs;wn++){const bi=Cn[wn];Tt.update(bi,Tn),Tt.bind(bi,Tn)}}return Tn}function to(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Aa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(C,q,ct){const rt=S.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),S.get(C.texture).__webglTexture=q,S.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ct=S.get(C);ct.__webglFramebuffer=q,ct.__useDefaultFramebuffer=q===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(C,q=0,ct=0){tt=C,k=q,J=ct;let rt=null,Q=!1,Pt=!1;if(C){const zt=S.get(C);if(zt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,zt.__webglFramebuffer),I.copy(C.viewport),G.copy(C.scissor),lt=C.scissorTest,qt.viewport(I),qt.scissor(G),qt.setScissorTest(lt),ht=-1;return}else if(zt.__webglFramebuffer===void 0)z.setupRenderTarget(C);else if(zt.__hasExternalTextures)z.rebindTextures(C,S.get(C.texture).__webglTexture,S.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const te=C.depthTexture;if(zt.__boundDepthTexture!==te){if(te!==null&&S.has(te)&&(C.width!==te.image.width||C.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(C)}}const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Pt=!0);const jt=S.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?rt=jt[q][ct]:rt=jt[q],Q=!0):C.samples>0&&z.useMultisampledRTT(C)===!1?rt=S.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?rt=jt[ct]:rt=jt,I.copy(C.viewport),G.copy(C.scissor),lt=C.scissorTest}else I.copy(at).multiplyScalar(_t).floor(),G.copy(dt).multiplyScalar(_t).floor(),lt=At;if(ct!==0&&(rt=Ra),qt.bindFramebuffer(V.FRAMEBUFFER,rt)&&qt.drawBuffers(C,rt),qt.viewport(I),qt.scissor(G),qt.setScissorTest(lt),Q){const zt=S.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,ct)}else if(Pt){const zt=q;for(let kt=0;kt<C.textures.length;kt++){const jt=S.get(C.textures[kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+kt,jt.__webglTexture,ct,zt)}}else if(C!==null&&ct!==0){const zt=S.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zt.__webglTexture,ct)}ht=-1},this.readRenderTargetPixels=function(C,q,ct,rt,Q,Pt,Ht,zt=0){if(!(C&&C.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt){qt.bindFramebuffer(V.FRAMEBUFFER,kt);try{const jt=C.textures[zt],te=jt.format,Zt=jt.type;if(!Ae.textureFormatReadable(te)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Zt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-rt&&ct>=0&&ct<=C.height-Q&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+zt),V.readPixels(q,ct,rt,Q,Ct.convert(te),Ct.convert(Zt),Pt))}finally{const jt=tt!==null?S.get(tt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,q,ct,rt,Q,Pt,Ht,zt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt)if(q>=0&&q<=C.width-rt&&ct>=0&&ct<=C.height-Q){qt.bindFramebuffer(V.FRAMEBUFFER,kt);const jt=C.textures[zt],te=jt.format,Zt=jt.type;if(!Ae.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ee),V.bufferData(V.PIXEL_PACK_BUFFER,Pt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+zt),V.readPixels(q,ct,rt,Q,Ct.convert(te),Ct.convert(Zt),0);const Le=tt!==null?S.get(tt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Le);const Je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await nM(V,Je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ee),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pt),V.deleteBuffer(ee),V.deleteSync(Je),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ct=0){const rt=Math.pow(2,-ct),Q=Math.floor(C.image.width*rt),Pt=Math.floor(C.image.height*rt),Ht=q!==null?q.x:0,zt=q!==null?q.y:0;z.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Ht,zt,Q,Pt),qt.unbindTexture()};const us=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(C,q,ct=null,rt=null,Q=0,Pt=null){Pt===null&&(Q!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=Q,Q=0):Pt=0);let Ht,zt,kt,jt,te,Zt,ee,Le,Je;const Ye=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(ct!==null)Ht=ct.max.x-ct.min.x,zt=ct.max.y-ct.min.y,kt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,te=ct.min.y,Zt=ct.isBox3?ct.min.z:0;else{const mn=Math.pow(2,-Q);Ht=Math.floor(Ye.width*mn),zt=Math.floor(Ye.height*mn),C.isDataArrayTexture?kt=Ye.depth:C.isData3DTexture?kt=Math.floor(Ye.depth*mn):kt=1,jt=0,te=0,Zt=0}rt!==null?(ee=rt.x,Le=rt.y,Je=rt.z):(ee=0,Le=0,Je=0);const Pe=Ct.convert(q.format),Jt=Ct.convert(q.type);let Ne;q.isData3DTexture?(z.setTexture3D(q,0),Ne=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(z.setTexture2DArray(q,0),Ne=V.TEXTURE_2D_ARRAY):(z.setTexture2D(q,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const re=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Qi=V.getParameter(V.UNPACK_SKIP_PIXELS),An=V.getParameter(V.UNPACK_SKIP_ROWS),ui=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zt);const ze=C.isDataArrayTexture||C.isData3DTexture,Rn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const mn=S.get(C),Cn=S.get(q),wn=S.get(mn.__renderTarget),Xs=S.get(Cn.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,wn.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let bi=0;bi<kt;bi++)ze&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,S.get(C).__webglTexture,Q,Zt+bi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,S.get(q).__webglTexture,Pt,Je+bi)),V.blitFramebuffer(jt,te,Ht,zt,ee,Le,Ht,zt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||S.has(C)){const mn=S.get(C),Cn=S.get(q);qt.bindFramebuffer(V.READ_FRAMEBUFFER,us),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let wn=0;wn<kt;wn++)ze?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,Q,Zt+wn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,Q),Rn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Cn.__webglTexture,Pt,Je+wn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Cn.__webglTexture,Pt),Q!==0?V.blitFramebuffer(jt,te,Ht,zt,ee,Le,Ht,zt,V.COLOR_BUFFER_BIT,V.NEAREST):Rn?V.copyTexSubImage3D(Ne,Pt,ee,Le,Je+wn,jt,te,Ht,zt):V.copyTexSubImage2D(Ne,Pt,ee,Le,jt,te,Ht,zt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ne,Pt,ee,Le,Je,Ht,zt,kt,Pe,Jt,Ye.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,Pt,ee,Le,Je,Ht,zt,kt,Pe,Ye.data):V.texSubImage3D(Ne,Pt,ee,Le,Je,Ht,zt,kt,Pe,Jt,Ye):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pt,ee,Le,Ht,zt,Pe,Jt,Ye.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pt,ee,Le,Ye.width,Ye.height,Pe,Ye.data):V.texSubImage2D(V.TEXTURE_2D,Pt,ee,Le,Ht,zt,Pe,Jt,Ye);V.pixelStorei(V.UNPACK_ROW_LENGTH,re),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,An),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ui),Pt===0&&q.generateMipmaps&&V.generateMipmap(Ne),qt.unbindTexture()},this.initRenderTarget=function(C){S.get(C).__webglFramebuffer===void 0&&z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?z.setTextureCube(C,0):C.isData3DTexture?z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?z.setTexture2DArray(C,0):z.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){k=0,J=0,tt=null,qt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}function VA(r){return Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"&&isFinite(t))}function Yr(r){if(!VA(r))throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(r)}`);return r}function vv(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function zr(r,t){return r[0]+=t[0],r[1]+=t[1],r[2]+=t[2],r}function Xi(r,t){return[t[0]-r[0],t[1]-r[1],t[2]-r[2]]}function ls(r){return Math.sqrt(Mn(r,r))}function kA(r,t){return r.map(i=>i*t)}function dn(r,t){return r[0]*=t,r[1]*=t,r[2]*=t,r}function XA(r){const t=ls(r);return kA(r,1/t)}function rl(r){const t=ls(r);return dn(r,1/t)}function Mn(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function Fr(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function xv(r,t,i){return i[0]+=r[1]*t[2]-r[2]*t[1],i[1]+=r[2]*t[0]-r[0]*t[2],i[2]+=r[0]*t[1]-r[1]*t[0],i}function WA(r,t,i){const s=Math.cos(i),l=Math.sin(i),c=Mn(t,r),h=Fr(t,r);return r[0]=r[0]*s+h[0]*l+t[0]*c*(1-s),r[1]=r[1]*s+h[1]*l+t[1]*c*(1-s),r[2]=r[2]*s+h[2]*l+t[2]*c*(1-s),r}const Sv={type:"change"},Sp={type:"start"},rx={type:"end"},Wc=new cu,yv=new as,qA=Math.cos(70*aM.DEG2RAD),_n=new Z,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6;class YA extends WM{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Fs,this._lastTargetPosition=new Z,this._quat=new Fs().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q_,this._sphericalDelta=new q_,this._scale=1,this._panOffset=new Z,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new Z,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZA.bind(this),this._onPointerDown=jA.bind(this),this._onPointerUp=KA.bind(this),this._onContextMenu=iR.bind(this),this._onMouseWheel=$A.bind(this),this._onKeyDown=tR.bind(this),this._onTouchStart=eR.bind(this),this._onTouchMove=nR.bind(this),this._onMouseDown=QA.bind(this),this._onMouseMove=JA.bind(this),this._interceptControlDown=aR.bind(this),this._interceptControlUp=sR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sv),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<qA?this.object.lookAt(this.target):(yv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(yv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(Sv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function jA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ZA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function KA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rx),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function QA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Br.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Br.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Sp)}function JA(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function $A(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(Sp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(rx))}function tR(r){this.enabled!==!1&&this._handleKeyDown(r)}function eR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(Sp)}function nR(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function iR(r){this.enabled!==!1&&r.preventDefault()}function aR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let rR=0;function yp(r={}){return{id:r.id??rR++,pos:r.pos?[...r.pos]:[0,0,0],vel:r.vel?[...r.vel]:[0,0,0],m:r.m?[...r.m]:[1,0,0],omega:r.omega?[...r.omega]:[0,0,0],color:r.color??"#93b5c9",group:r.group??"",f:[0,0,0],tau:[0,0,0],fixed:r.fixed??!1}}function su(r,t){return{...r,...t}}function oR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(x=>x.id===t),l=r.find(x=>x.id===i);if(!s||!l)return;const c=rl([...s.m]),h=Xi(s.pos,l.pos),d=rl(zr(h,dn(c,-Mn(h,c))));if(Math.hypot(...d)<.5){alert("两球连线与磁轴平行，无法确定 y 方向");return}const m=Fr(c,d),p=[c,d,m],g=x=>Yr(p.map(E=>Mn(E,x))),_=s.pos;return r.map(x=>su(x,{pos:g(Xi(_,x.pos)),vel:g(x.vel??[0,0,0]),m:g(x.m),f:g(x.f??[0,0,0]),tau:g(x.tau??[0,0,0])}))}const Mp=4*Math.PI*1e-7,lR=Mp/(4*Math.PI),cR=.3;function uR(r){const t=[],i=Math.PI*(3-Math.sqrt(5));for(let s=0;s<r;s++){const l=1-s/(r-1)*2,c=Math.sqrt(1-l*l),h=i*s;t.push([c*Math.cos(h),l,c*Math.sin(h)])}return t}function fR(r){const t=r+1>>2,i=uR(t),s=[];for(const l of i)s.push(l),s.push([-l[0],l[1],-l[2]]),s.push([-l[0],-l[1],-l[2]]),s.push([l[0],-l[1],l[2]]);return s}class hR{constructor(t=.0025,i=1.2,s=5e-4,l=50){e_(this,"_rotateSphereSamplesTo",(t,i)=>{const s=t[1],l=1-s*s;if(l<1e-9){if(s>0)for(let p=0;p<this.n_samples;p++){const g=this.sphere_samples[p],_=i[p];_[0]=g[0],_[1]=g[1],_[2]=g[2]}else for(let p=0;p<this.n_samples;p++){const g=this.sphere_samples[p],_=i[p];_[0]=-g[0],_[1]=-g[1],_[2]=-g[2]}return}const c=Math.sqrt(l),h=t[2]/c,d=-t[0]/c,m=1-s;for(let p=0;p<this.n_samples;p++){const g=this.sphere_samples[p],_=i[p],x=g[0],E=g[1],b=g[2],T=h*x+d*b,M=-d*E,v=d*x-h*b,L=h*E;_[0]=x*s+M*c+h*T*m,_[1]=E*s+v*c,_[2]=b*s+L*c+d*T*m}});this.radius=t,this.br=i,this.mMag=i/Mp,this.mass=s,this.sphere_samples=fR(l),this.n_samples=this.sphere_samples.length,this.area_per_sample=4*Math.PI*t*t/this.n_samples;const c=this.mMag*this.area_per_sample;this.sample_q=this.sphere_samples.map(h=>h[1]*c),this.inertia=.4*this.mass*this.radius**2,this._rotBuf1=Array.from({length:this.n_samples},()=>[0,0,0]),this._rotBuf2=Array.from({length:this.n_samples},()=>[0,0,0]),this._r2dBuf=Array.from({length:this.n_samples},()=>[0,0,0])}calculateMagnet(t,i,s){return _R(this.radius,this.mMag,i,s,t)}calcForceAndTorque(t,i,s){const l=this.radius,c=l/this.n_samples;this._rotateSphereSamplesTo(i,this._rotBuf1),this._rotateSphereSamplesTo(s,this._rotBuf2);const h=this._rotBuf1,d=this._rotBuf2;for(let x=0;x<this.n_samples;x++)h[x][0]*=l,h[x][1]*=l,h[x][2]*=l,d[x][0]*=l,d[x][1]*=l,d[x][2]*=l,this._r2dBuf[x][0]=d[x][0]+t[0],this._r2dBuf[x][1]=d[x][1]+t[1],this._r2dBuf[x][2]=d[x][2]+t[2];const m=this._r2dBuf,p=[0,0,0],g=[0,0,0],_=[0,0,0];for(let x=0;x<this.n_samples;x++){const E=h[x],b=this.sample_q[x];for(let T=0;T<this.n_samples;T++){const M=m[T],v=Xi(E,M),L=Math.max(ls(v),c),w=this.sample_q[T],D=lR*b*w/L**2,P=dn(v,D/L);zr(p,P),xv(d[T],P,_),xv(E,dn(P,-1),g)}}return{force1:dn([...p],-1),force2:p,torque1:g,torque2:_}}applyTorque(t,i,s,l){const c=dn([...s],1/this.inertia),d=Mn(s,i)<0?cR:1,m=[i[0]*d+c[0]*l,i[1]*d+c[1]*l,i[2]*d+c[2]*l],p=ls(m);if(p<1e-20)return{moment:t,omega:m};const g=Math.min(p*l,.5),_=dn([...m],1/p),x=WA([...t],_,g);return{moment:rl(x),omega:m}}}function dR(r,t,i,s,l){const c=ls(l),h=XA(l),d=Mn(i,h),m=Mn(s,h),p=Mn(i,s),g=4*Math.PI*Mp*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:h,p:d,q:m,r:p,K:g,m1:i,m2:s,d:l}}function pR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function mR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:h,m1:d,m2:m}=r,p=t**4,g=3*h/p,_=5*s*l-c;return dn([i[0]*_-d[0]*l-m[0]*s,i[1]*_-d[1]*l-m[1]*s,i[2]*_-d[2]*l-m[2]*s],g)}function gR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:h,m2:d}=r,m=c/t**3,p=dn(vv(dn(Fr(h,i),-3*l),Fr(h,d)),-m),g=dn(vv(dn(Fr(d,i),-3*s),Fr(d,h)),-m);return{tor1:p,tor2:g}}function _R(r,t,i,s,l){const c=dR(r,t,i,s,l),h=pR(c),d=mR(c),m=dn([...d],-1),{tor1:p,tor2:g}=gR(c);return{U:h,force1:d,force2:m,torque1:p,torque2:g}}function $d(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function Mv(r,t,i,s){if(Math.abs(r)<1e-20)return $d(t,i,s);const l=t/r,c=i/r,h=s/r,d=l/3,m=c-l*l/3,p=h-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-p/2+_),E=Math.cbrt(-p/2-_);return[x+E-d]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,E=2*Math.cbrt(_);return[E*Math.cos(x)-d,E*Math.cos(x+2*Math.PI/3)-d,E*Math.cos(x+4*Math.PI/3)-d]}else{const _=Math.cbrt(-p/2);return[2*_-d,-_-d]}}function vR(r,t,i,s,l){if(Math.abs(r)<1e-20)return Mv(t,i,s,l);const c=t/r,h=i/r,d=s/r,m=l/r,p=c/4,g=h-3*c*c/8,_=d-c*h/2+c*c*c/8,x=m-c*d/4+c*c*h/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const L=[];for(const w of $d(1,g,x))if(w>=-1e-12){const D=Math.sqrt(Math.max(0,w));L.push(D-p,-D-p)}return L}const E=Mv(1,g/2,(g*g-4*x)/16,-_*_/64),b=Math.max(...E,1e-12),T=Math.sqrt(Math.max(b,0));if(T<1e-12)return[];const M=_/(4*T),v=[];for(const[L,w]of[[1,-M],[-1,M]])for(const D of $d(1,L*T,g/2+b+w))v.push(D-p);return v}const xR=1,SR=5e-4,yR=-9.81,ru=1e-7,qc={NONE:"none",SHELL:"shell",HARD:"hard"};function MR(r,t,i){return()=>(r.current=new ER(i),t(!0),()=>{})}class ER{constructor(t=.0025){this.contactStates=new Map,this.radius=t,this.shellThickness=this.radius*.01,this.ball=new hR(this.radius-this.shellThickness,xR,SR,200)}reset(){this.contactStates.clear()}_contactKey(t,i){return t<i?`${t},${i}`:`${i},${t}`}_getContactState(t){const i=this.radius*2;return t<=i-this.shellThickness?qc.HARD:t<=i+this.shellThickness?qc.SHELL:qc.NONE}_reportStateChange(t,i,s){const l=this._contactKey(t,i),c=this._getContactState(s),h=this.contactStates.get(l)||qc.NONE;if(c!==h){const d=this.radius*2-s;(s*1e3).toFixed(4),(d*1e6).toFixed(2),this.contactStates.set(l,c)}}getContacts(t){const i=[],s=t.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const h=t[l],d=t[c],m=Xi(h,d),p=ls(m);this._reportStateChange(l,c,p);const g=this.radius*2-p;g>=-this.shellThickness&&i.push({i:l,j:c,normal:dn(m,1/p),dist:p,penetration:g})}return i}calcMagneticForces(t){const i=t.length,s=t.map(()=>[0,0,0]),l=t.map(()=>[0,0,0]),c=t.map(()=>new Map);for(let h=0;h<i;h++)for(let d=h+1;d<i;d++){const m=this.ball.calculateMagnet(Xi(t[h].pos,t[d].pos),t[h].moment,t[d].moment);zr(s[h],m.force1),zr(s[d],m.force2),zr(l[h],m.torque1),zr(l[d],m.torque2),c[h].set(`M#${d}`,m.force1),c[d].set(`M#${h}`,m.force2)}return{coforces:s,torques:l,forces:c}}step(t,i,s=!1){const l=this.radius*2,c=t.map(w=>!!w.fixed),h=t.map(w=>w.pos),d=Ev(h,this.getContacts(h),l,this.shellThickness,c),{coforces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((w,D)=>({pos:d[D],moment:w.m})));s&&m.forEach((w,D)=>{if(!c[D]){const P=yR*this.ball.mass;w[1]+=P,g[D].set("Gravity",[0,P,0])}});const{constrainedForces:_,constrainedVel:x}=bR(d,t.map(w=>w.vel),m,this.getContacts(d),c),{newPos:E,newVel:b,safedt:T,reason:M}=this.safeStep(d,_,x,l,i,c),v=Ev(E,this.getContacts(E),l,this.shellThickness,c);this.getContacts(v).map(w=>{if(w.dist<this.radius)throw new Error(`球${w.i}-球${w.j}重叠过深: dist=${(w.dist*1e3).toFixed(4)}mm`)});const L=this.rotateMoments(p,t.map(w=>({moment:w.m,omega:w.omega})),T);return{newMagnets:t.map((w,D)=>su(w,{pos:v[D],vel:b[D],f:_[D],tau:p[D],m:L[D].moment,omega:L[D].omega})),safedt:T,forces:g,reason:M}}safeStep(t,i,s,l,c,h=null){if(c<1e-12)return{newPos:t.map(M=>[...M]),newVel:s.map(M=>[...M]),safedt:0};const d=h||t.map(()=>!1),m=this.ball.mass,p=t.length,g=i.map((M,v)=>dn(Yr([...M]),+!d[v]/m)),_=l-this.shellThickness;let x=c,E="max delta time";for(let M=0;M<p;M++)for(let v=M+1;v<p;v++){if(d[M]&&d[v])continue;const L=Xi(t[M],t[v]),w=Xi(s[M],s[v]),D=TR(L,w,g[M],g[v],_,x);D!==null&&D<x&&(x=Math.max(D-1e-12,0),E=`collision between ${M} and ${v}`)}for(let M=0;M<p;M++)if(!d[M]){const v=_/2,L=s[M],w=g[M],D=Math.hypot(L[0],L[1],L[2]),P=Math.hypot(w[0],w[1],w[2]);let B;if(P>1e-12)B=(-D+Math.sqrt(D*D+2*P*v))/P;else if(D>1e-12)B=v/D;else continue;B<x&&(x=B,E=`max movement of ${M}`)}const b=t.map((M,v)=>{if(d[v])return[...M];const L=x,w=.5*x*x,D=s[v],P=g[v];return[M[0]+D[0]*L+P[0]*w,M[1]+D[1]*L+P[1]*w,M[2]+D[2]*L+P[2]*w]}),T=s.map((M,v)=>{if(d[v])return[0,0,0];const L=x,w=g[v];return[M[0]+w[0]*L,M[1]+w[1]*L,M[2]+w[2]*L]});return{newPos:b,newVel:T,safedt:x,reason:E}}rotateMoments(t,i,s){return i.map((c,h)=>{const d=t[h],m=c.moment,p=c.omega,g=this.ball.applyTorque(m,p,d,s);return{moment:g.moment,omega:g.omega}})}}function Ev(r,t,i,s,l=null,c=20){const h=r.map(p=>[...p]),d=i-s,m=l||r.map(()=>!1);for(let p=0;p<c;p++){let g=0;for(const{i:_,j:x}of t){const E=Xi(h[_],h[x]),b=ls(E),T=dn(E,1/b);let M=0;if(b<d?(M=i-b,g=Math.max(g,i-b)):b<i&&(M=(i-b)*.5,g=Math.max(g,i-b)),M>ru){const v=h[_],L=h[x],w=+m[_]-+m[x],D=M*((1-w)*.5),P=M*((1+w)*.5);v[0]-=T[0]*D,v[1]-=T[1]*D,v[2]-=T[2]*D,L[0]+=T[0]*P,L[1]+=T[1]*P,L[2]+=T[2]*P}}if(g<ru)break}return h}function bR(r,t,i,s,l=null,c=8){const h=i.map(p=>[...p]),d=l||r.map(()=>!1),m=t.map((p,g)=>d[g]?[0,0,0]:[...p]);if(s.length===0)return{constrainedForces:h,constrainedVel:m};for(const p of s){const g=Xi(r[p.i],r[p.j]),_=ls(g);p.normal=dn(g,1/_)}for(let p=0;p<c;p++){let g=0;for(const{i:_,j:x,normal:E}of s){const b=Mn(h[_],E),T=Mn(h[x],E),M=b-T;if(M>0){g=Math.max(g,M);const v=h[_],L=h[x],w=+d[_]-+d[x],D=M*(1-w)*.5,P=M*(1+w)*.5;v[0]-=E[0]*D,v[1]-=E[1]*D,v[2]-=E[2]*D,L[0]+=E[0]*P,L[1]+=E[1]*P,L[2]+=E[2]*P}}if(g<ru)break}for(let p=0;p<c;p++){let g=0;for(const{i:_,j:x,normal:E}of s){const b=Mn(m[_],E),T=Mn(m[x],E),M=T-b;if(Math.abs(M)>1e-12){let v=0,L=0;if(d[_]||d[x])v=-b,L=-T;else{const P=(b+T)/2;v=P-b,L=P-T}g=Math.max(g,Math.abs(v)+Math.abs(L));const w=m[_],D=m[x];w[0]+=E[0]*v,w[1]+=E[1]*v,w[2]+=E[2]*v,D[0]+=E[0]*L,D[1]+=E[1]*L,D[2]+=E[2]*L}}if(g<ru)break}return{constrainedForces:h,constrainedVel:m}}function TR(r,t,i,s,l,c,h=1e-6){const d=Xi(i,s),m=dn(d,.5),p=Mn(r,r)-l*l;if(p<=0)return 0;const g=2*Mn(r,t),_=2*Mn(r,m)+Mn(t,t),x=2*Mn(t,m),E=Mn(m,m),b=vR(E,x,_,g,p),T=(l*(1+h))**2;let M=null;for(const v of b)if(v>1e-12&&v<=c+1e-12){if(E*v*v*v*v+x*v*v*v+_*v*v+g*v+p+l*l>T)continue;(M===null||v<M)&&(M=v)}return M}function AR(r,t){return r.map(i=>({...i,pos:dn(i.pos,t)})).map(yp)}function RR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const h={pos:c.pos.join(", "),moment:c.m.join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?h:{...h,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function CR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=h=>{if(typeof h=="string"){const d=h.split(",").map(m=>parseFloat(m.trim()));if(d.length===3&&d.every(m=>!isNaN(m)))return d}return h};for(const h of t.magnets){const d={};for(const[m,p]of Object.entries(h))d[m==="moment"?"m":m]=c(p);Yr(d.pos),Yr(rl(d.m)),l.push(d)}return{name:i,unit:s,magnets:l}}async function bv(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:h}=CR(s),d={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in d))throw new Error(`Unknown unit in preset: ${c}`);const m=d[c];return{name:l||r,magnets:AR(h,m)}}catch{if(r in tp){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=tp[r]();return l.map(c=>dn(c.pos,t)),{name:r,magnets:l.map(yp)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function wR(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys(tp).filter(l=>!t.includes(l)),s=[...t,...i];return"pair"in s?["pair",...s.filter(l=>l!=="pair")]:s}const tp={chain:()=>Array.from({length:5},(r,t)=>({pos:[(t-2)*2*1.1,0,0],m:[1,0,0],color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:[s*Math.cos(i),s*Math.sin(i),0],m:[Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0],color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:[(Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4],m:rl([Math.random()-.5,Math.random()-.5,Math.random()-.5]),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map((i,s)=>({pos:i.map(l=>l*2.4),m:[0,0,s<4?1:-1],color:s<4?16729156:4474111}))},Tv=100,DR=32,UR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},LR={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},NR=["X","Y","Z"];function $o({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:h}){return Wt.jsxs("div",{children:[Wt.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),Wt.jsx("div",{style:LR,children:NR.map((d,m)=>{var p;return Wt.jsx("input",{placeholder:d,disabled:!s,style:{...UR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const E={...x,[r]:[...x[r]]};return E[r][m]=_,E})},onKeyDown:g=>{s&&g.key==="Enter"&&(h(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>g.target.style.borderColor="#333"},d)})})]})}function OR(){var Ae,qt,O;const t=.0025*Tv,i=.1,s=ge.useRef(null),[l,c]=ge.useState(null),h=ge.useRef(null);h.current=l;const[d,m]=ge.useState(null),[p,g]=ge.useState(!1),[_,x]=ge.useState(2e-5),[E,b]=ge.useState(!0),[T,M]=ge.useState(!0),[v,L]=ge.useState(!0),w=ge.useRef(""),[D,P]=ge.useState(0),[B,F]=ge.useState(null),Y=ge.useRef([]),A=ge.useRef(-1),U=ge.useRef(null),k=ge.useRef(null),J=ge.useRef(null),tt=ge.useRef([]),ht=ge.useRef([]),ft=ge.useRef([]),I=ge.useRef([]),G=ge.useRef(null),lt=ge.useRef(null),[bt,Mt]=ge.useState([]),[N,$]=ge.useState([]);ge.useEffect(()=>{wR().then(S=>(Mt(S),bv(S[0],.0025))).then(S=>$(S.magnets)).catch(S=>console.error("Failed to load presets:",S))},[]);const[_t,wt]=ge.useState(!1),Ot=ge.useRef(!0),at=ge.useRef({magnets:N,isSimulating:p,simSpeed:_,rotateMoments:E,useGravity:T});at.current={magnets:N,isSimulating:p,simSpeed:_,rotateMoments:E,useGravity:T};const dt=ge.useRef(null);ge.useEffect(MR(dt,wt,.0025),[]);const At=S=>(S==null?void 0:S.toFixed(6))??"N/A";ge.useEffect(()=>{if(l===null){F(null);return}const S=N.find(z=>z.id===l);if(!S){F(null);return}F({m_pos:S.pos.map(z=>z*1e3).map(At),m_vel:S.vel.map(z=>z*1e3).map(At),m:S.m.map(At),f:S.f.map(At),tau:S.tau.map(At)})},[l]),ge.useEffect(()=>{const S=it=>{if(Ot.current=!0,$(it),l!==null){const st=it.find(K=>K.id===l);st&&F({m_pos:st.pos.map(K=>K*1e3).map(At),m_vel:st.vel.map(K=>K*1e3).map(At),m:st.m.map(At),f:(st.f??[0,0,0]).map(At),tau:(st.tau??[0,0,0]).map(At)})}},z=it=>{const st=Y.current;if(it.key==="ArrowUp"){if(it.preventDefault(),st.length===0)return;if(A.current===-1){const K=at.current.magnets;st.push(K.map(Rt=>({...Rt,pos:[...Rt.pos],vel:[...Rt.vel],m:[...Rt.m]}))),A.current=st.length-2}else if(A.current>0)A.current--;else return;S(st[A.current])}else if(it.key==="ArrowDown"){if(it.preventDefault(),A.current===-1)return;if(A.current++,A.current>=st.length-1){const K=st.pop();A.current=-1,S(K)}else S(st[A.current])}};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[l]);const Vt=ge.useCallback(()=>{const{magnets:S,isSimulating:z,simSpeed:it,rotateMoments:st,useGravity:K}=at.current,Rt=dt.current;if(!z||!Rt||S.length<2)return;const{newMagnets:yt,safedt:Ft,forces:Yt,reason:mt}=Rt.step(S,it,K);w.current=`${Ft*1e3}ms (${mt})`,P(Et=>Et+Ft);const St=new Map(S.map((Et,Qt)=>[Et.id,Qt])),Ut=yt.map((Et,Qt)=>su(S[St.get(Et.id)],{...Et,id:Qt,pos:Yr(Et.pos.map(X=>Math.max(-i,Math.min(i,X))))}));$(Ut);const Lt=h.current;if(Lt!==null){const Et=Ut.find(Qt=>Qt.id===Lt);Et&&F(Qt=>Qt&&{...Qt,m_pos:Et.pos.map(X=>X*1e3).map(At),m_vel:(Et.vel??[0,0,0]).map(X=>X*1e3).map(At),m:Et.m.map(At),f:(Et.f??[0,0,0]).map(At),tau:(Et.tau??[0,0,0]).map(At)})}},[]);ge.useEffect(()=>{const S=s.current;if(!S||!_t)return;let z=S.clientWidth||800,it=S.clientHeight||600;const st=new CM;st.background=new be(657941),U.current=st;const K=new yi(50,z/it,.1,1e3);K.position.set(0,0,12),K.lookAt(0,0,0),k.current=K;const Rt=new GA({antialias:!0});Rt.setSize(z,it),Rt.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.appendChild(Rt.domElement),J.current=Rt;const yt=new YA(K,Rt.domElement);yt.enableDamping=!0,yt.dampingFactor=.05,yt.rotateSpeed=.5,yt.zoomSpeed=.8,yt.panSpeed=.5,yt.minDistance=2,yt.maxDistance=50,lt.current=yt,st.add(new GM(16777215,.5));const Ft=new k_(16777215,.8);Ft.position.set(5,5,5),st.add(Ft);const Yt=new k_(4482815,.3);Yt.position.set(-5,-5,-5),st.add(Yt);const mt=new XM(16,16,3355477,2236979);mt.rotation.x=Math.PI/2,st.add(mt);let St=performance.now();const Ut=Et=>{G.current=requestAnimationFrame(Ut),Et-St>DR&&(Ot.current=!0,Vt(),St=Et),yt.update(),Rt.render(st,K)};Ut(performance.now());const Lt=()=>{const Et=S.clientWidth||800,Qt=S.clientHeight||600;K.aspect=Et/Qt,K.updateProjectionMatrix(),Rt.setSize(Et,Qt)};return window.addEventListener("resize",Lt),()=>{window.removeEventListener("resize",Lt),cancelAnimationFrame(G.current),yt.dispose(),Rt.dispose(),U.current=null,S.contains(Rt.domElement)&&S.removeChild(Rt.domElement)}},[Vt,_t]),ge.useEffect(()=>{const S=U.current;S&&(tt.current.forEach(z=>S.remove(z)),ht.current.forEach(z=>S.remove(z)),ft.current.forEach(z=>S.remove(z)),I.current.forEach(z=>S.remove(z)),tt.current=[],ht.current=[],ft.current=[],I.current=[],N.forEach(z=>{const it=new vp(t,32,32),st=new IM({color:z.color,metalness:.8,roughness:.2,emissive:z.color,emissiveIntensity:l===z.id?.4:.15}),K=new Ni(it,st),Rt=z.pos.map(yt=>yt*Tv);if(K.position.set(Rt[0],Rt[1],Rt[2]),K.userData.id=z.id,S.add(K),tt.current.push(K),v){const yt=t*3.6,Ft=t*.5,Yt=t*.3,mt=new Z(...z.m).normalize(),St=new Z(...Rt),Ut=new Kh(mt,St,yt,16768256,Ft,Yt);if(S.add(Ut),ht.current.push(Ut),z.f){const Lt=z.f,Et=new Z(...Lt).length();if(Et>1e-25){const Qt=new Z(...Lt).normalize(),X=t*Math.min(6,Math.max(.5,Math.log10(Et+1e-10)+10)),Nt=new Kh(Qt,St,X,65535,t*.4,t*.24);S.add(Nt),ft.current.push(Nt)}if(z.tau){const Qt=z.tau,X=new Z(...Qt).length();if(X>1e-25){const Nt=new Z(...Qt).normalize(),Ct=t*Math.min(5,Math.max(.4,Math.log10(X+1e-10)+8)),It=new Kh(Nt,St,Ct,16711935,t*.32,t*.2);S.add(It),I.current.push(It)}}}}}))},[N,l,v,_t]);const Gt=S=>{const z=s.current,it=k.current;if(!z||!it)return;const st=z.getBoundingClientRect(),K=new le((S.clientX-st.left)/st.width*2-1,-((S.clientY-st.top)/st.height)*2+1),Rt=new kM;Rt.setFromCamera(K,it);const yt=Rt.intersectObjects(tt.current);yt.length>0?c(yt[0].object.userData.id):c(null)},de=()=>{Ot.current=!0,$(S=>[...S,yp({pos:[(Math.random()-.5)*.02,(Math.random()-.5)*.02,0],color:Math.random()>.5?4474111:16729156})]),P(0)},Qe=()=>{l!==null&&(Ot.current=!0,$(S=>S.filter(z=>z.id!==l)),c(null),P(0))},me=()=>{Ot.current=!0,$(S=>S.map(z=>({...z,vel:[0,0,0],omega:[0,0,0]})))},pe=S=>{dt.current&&dt.current.reset(),Ot.current=!0,bv(S,.0025).then(z=>$(z.magnets)),c(null),g(!1),P(0)},Te=()=>{Ot.current=!0,$(S=>S.map(z=>su(z,{pos:Yr(z.pos.map(it=>it+(Math.random()-.5)*.3*.0025))})))},se=()=>{const S=oR(N,l,d);S&&(V(N),V(S),Ot.current=!0,$(S))},je=ge.useCallback(S=>{const z=RR(N.map(it=>({...it,pos:it.pos.map(st=>st/.0025)})),"exported","radius");if(S==="copy")navigator.clipboard.writeText(z).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败，请手动复制"));else{const it=new Blob([z],{type:"application/json"}),st=URL.createObjectURL(it),K=document.createElement("a");K.href=st,K.download=`magnets_${Date.now()}.json`,K.click(),URL.revokeObjectURL(st)}},[N]),V=S=>{for(const z of Y.current){if(z.length!==S.length)continue;let it=!0;for(let st=0;st<z.length;st++){const K=z[st],Rt=S[st],yt=new Set([...Object.keys(K),...Object.keys(Rt)]);for(const Ft of yt){const Yt=K[Ft],mt=Rt[Ft];if(Array.isArray(Yt)&&Array.isArray(mt)){if(Yt.length!==mt.length||Yt.some((St,Ut)=>Math.abs(St-mt[Ut])>1e-6)){it=!1;break}}else if(Yt!==mt){it=!1;break}}if(!it)break}if(it)return}Y.current.push(S.map(z=>({...z,pos:[...z.pos],vel:[...z.vel],m:[...z.m]}))),Y.current.length>100&&Y.current.shift()},qe=(S,z,it)=>{const st=parseFloat(it);if(isNaN(st))return;const Rt={m_pos:["pos",.001],m_vel:["vel",.001],m:["m",1]}[S]??null;if(!Rt)return;const[yt,Ft]=Rt;V(N);const Yt=N.map(mt=>{if(mt.id!==l)return mt;const St=[...mt[yt]||[0,0,0]];return St[z]=st*Ft,{...mt,[yt]:St}});V(Yt),A.current=-1,Ot.current=!0,$(Yt),F(mt=>{if(!mt)return mt;const St={...mt,[S]:[...mt[S]]};return St[S][z]=At(st),St})},_e=()=>{p||(Ot.current=!0),g(!p)};return _t?Wt.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[Wt.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[Wt.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[Wt.jsx("span",{style:{fontSize:"24px"},children:"🧲"}),"NdFeB 磁力球模拟",Wt.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"Rapier3D"})]}),Wt.jsxs("div",{style:{padding:"12px",background:p?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${p?"#2a4a2a":"#2a2a4a"}`},children:[Wt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),Wt.jsx("button",{onClick:_e,style:{width:"100%",padding:"12px",background:p?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px"},children:p?"⏸ 暂停模拟":"▶ 开始模拟"}),Wt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Wt.jsx("button",{onClick:me,style:Hi,children:"重置速度"}),Wt.jsx("button",{onClick:Te,style:Hi,children:"扰动位置"})]}),Wt.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:Wt.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[Wt.jsxs("select",{value:d??"",onChange:S=>{const z=S.target.value===""?null:parseInt(S.target.value);m(z)},style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[Wt.jsx("option",{value:"",children:"— y 方向参考球 —"}),N.map(S=>Wt.jsxs("option",{value:S.id,children:["球 #",S.id]},S.id))]}),Wt.jsx("button",{onClick:se,disabled:l===null||d===null||l===d,style:{...Hi,opacity:l!==null&&d!==null&&l!==d?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),Wt.jsxs("div",{style:{marginTop:"10px"},children:[Wt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",_,"×"]}),Wt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",w.current]}),Wt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",D,"s"]}),Wt.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(_),onChange:S=>{const z=parseFloat(S.target.value),it=Math.max(-6,Math.min(0,z));x(Math.pow(10,it))},style:{width:"100%",accentColor:"#4488ff"}})]}),Wt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[Wt.jsx("input",{type:"checkbox",checked:E,onChange:S=>b(S.target.checked),style:{accentColor:"#4488ff"}}),Wt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"允许磁矩旋转"})]}),Wt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[Wt.jsx("input",{type:"checkbox",checked:T,onChange:S=>M(S.target.checked),style:{accentColor:"#4488ff"}}),Wt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"重力 (y 方向)"})]})]}),Wt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Wt.jsx("button",{onClick:de,style:{...Hi,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),Wt.jsx("button",{onClick:()=>je("download"),style:{...Hi,flex:1},title:"下载 JSON",children:"⬇ 导出"}),Wt.jsx("button",{onClick:()=>je("copy"),style:{...Hi,flex:1},title:"复制到剪贴板",children:"📋 复制"})]}),Wt.jsxs("div",{children:[Wt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),Wt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:bt.map(S=>Wt.jsx("button",{onClick:()=>pe(S),style:PR,children:S},S))})]}),l!==null&&Wt.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[Wt.jsxs("div",{style:{fontSize:"12px",color:"#aaa",marginBottom:"10px"},children:[Wt.jsxs("button",{disabled:!0,style:{...Hi,flex:1,opacity:1},children:["选中磁球 #",l]}),Wt.jsx("button",{onClick:_e,disabled:l===null,style:{...Hi,flex:1,background:p?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)",opacity:1},children:p?"⏸ 暂停模拟":"▶ 开始模拟"}),Wt.jsx("button",{onClick:()=>{Ot.current=!0,$(S=>S.map(z=>z.id===l?{...z,fixed:!z.fixed}:z))},style:{...Hi,flex:1,background:(Ae=N.find(S=>S.id===l))!=null&&Ae.fixed?"#2a1a4a":"#1a1a2a",borderColor:(qt=N.find(S=>S.id===l))!=null&&qt.fixed?"#6a3aaa":"#333"},children:(O=N.find(S=>S.id===l))!=null&&O.fixed?"📌 已固定":"📌 固定"}),Wt.jsx("button",{onClick:Qe,disabled:l===null,style:{...Hi,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a",opacity:1},children:"− 移除"})]}),Wt.jsxs("div",{style:{fontSize:"11px",color:"#666",marginTop:"10px",marginBottom:"6px"},children:[p?"数据":"编辑数据",Wt.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:p?"":"(回车确认 · Ctrl+Z 撤销)"})]}),B&&(()=>{const S={draft:B,setDraft:F,onCommit:qe};return Wt.jsxs(Wt.Fragment,{children:[Wt.jsx($o,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!p,...S}),Wt.jsx($o,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!p,...S}),Wt.jsx($o,{field:"m",label:"磁矩 (方向)",color:"#ffdd00",editable:!p,...S}),Wt.jsx($o,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...S}),Wt.jsx($o,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...S})]})})()]}),Wt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[Wt.jsx("input",{type:"checkbox",checked:v,onChange:S=>L(S.target.checked),style:{accentColor:"#4488ff"}}),Wt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),Wt.jsx("div",{ref:s,onClick:Gt,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer"}})]}):Wt.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:Wt.jsxs("div",{children:[Wt.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),Wt.jsx("div",{children:"Loading physics engine..."})]})})}const Hi={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},PR={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"};My.createRoot(document.getElementById("root")).render(Wt.jsx(ge.StrictMode,{children:Wt.jsx(OR,{})}));
