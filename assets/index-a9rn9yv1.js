(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gh={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function xy(){if(n_)return ko;n_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var i_;function Sy(){return i_||(i_=1,gh.exports=xy()),gh.exports}var Xt=Sy(),_h={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function yy(){if(a_)return ue;a_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(z,et,mt){this.props=z,this.context=et,this.refs=M,this.updater=mt||b}v.prototype.isReactComponent={},v.prototype.setState=function(z,et){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,et,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function L(){}L.prototype=v.prototype;function w(z,et,mt){this.props=z,this.context=et,this.refs=M,this.updater=mt||b}var U=w.prototype=new L;U.constructor=w,T(U,v.prototype),U.isPureReactComponent=!0;var P=Array.isArray;function I(){}var O={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function A(z,et,mt){var At=mt.ref;return{$$typeof:r,type:z,key:et,ref:At!==void 0?At:null,props:mt}}function D(z,et){return A(z.type,et,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function Y(z){var et={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(mt){return et[mt]})}var Q=/\/+/g;function ct(z,et){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):et.toString(36)}function rt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(I,I):(z.status="pending",z.then(function(et){z.status==="pending"&&(z.status="fulfilled",z.value=et)},function(et){z.status==="pending"&&(z.status="rejected",z.reason=et)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function F(z,et,mt,At,It){var it=typeof z;(it==="undefined"||it==="boolean")&&(z=null);var ht=!1;if(z===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(z.$$typeof){case r:case t:ht=!0;break;case g:return ht=z._init,F(ht(z._payload),et,mt,At,It)}}if(ht)return It=It(z),ht=At===""?"."+ct(z,0):At,P(It)?(mt="",ht!=null&&(mt=ht.replace(Q,"$&/")+"/"),F(It,et,mt,"",function(Vt){return Vt})):It!=null&&(k(It)&&(It=D(It,mt+(It.key==null||z&&z.key===It.key?"":(""+It.key).replace(Q,"$&/")+"/")+ht)),et.push(It)),1;ht=0;var Dt=At===""?".":At+":";if(P(z))for(var Wt=0;Wt<z.length;Wt++)At=z[Wt],it=Dt+ct(At,Wt),ht+=F(At,et,mt,it,It);else if(Wt=y(z),typeof Wt=="function")for(z=Wt.call(z),Wt=0;!(At=z.next()).done;)At=At.value,it=Dt+ct(At,Wt++),ht+=F(At,et,mt,it,It);else if(it==="object"){if(typeof z.then=="function")return F(rt(z),et,mt,At,It);throw et=String(z),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ht}function G(z,et,mt){if(z==null)return z;var At=[],It=0;return F(z,At,"","",function(it){return et.call(mt,it,It++)}),At}function nt(z){if(z._status===-1){var et=z._result;et=et(),et.then(function(mt){(z._status===0||z._status===-1)&&(z._status=1,z._result=mt)},function(mt){(z._status===0||z._status===-1)&&(z._status=2,z._result=mt)}),z._status===-1&&(z._status=0,z._result=et)}if(z._status===1)return z._result.default;throw z._result}var xt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},St={map:G,forEach:function(z,et,mt){G(z,function(){et.apply(this,arguments)},mt)},count:function(z){var et=0;return G(z,function(){et++}),et},toArray:function(z){return G(z,function(et){return et})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ue.Activity=_,ue.Children=St,ue.Component=v,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=w,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ue.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},ue.cache=function(z){return function(){return z.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(z,et,mt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var At=T({},z.props),It=z.key;if(et!=null)for(it in et.key!==void 0&&(It=""+et.key),et)!V.call(et,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&et.ref===void 0||(At[it]=et[it]);var it=arguments.length-2;if(it===1)At.children=mt;else if(1<it){for(var ht=Array(it),Dt=0;Dt<it;Dt++)ht[Dt]=arguments[Dt+2];At.children=ht}return A(z.type,It,At)},ue.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ue.createElement=function(z,et,mt){var At,It={},it=null;if(et!=null)for(At in et.key!==void 0&&(it=""+et.key),et)V.call(et,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(It[At]=et[At]);var ht=arguments.length-2;if(ht===1)It.children=mt;else if(1<ht){for(var Dt=Array(ht),Wt=0;Wt<ht;Wt++)Dt[Wt]=arguments[Wt+2];It.children=Dt}if(z&&z.defaultProps)for(At in ht=z.defaultProps,ht)It[At]===void 0&&(It[At]=ht[At]);return A(z,it,It)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(z){return{$$typeof:d,render:z}},ue.isValidElement=k,ue.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:nt}},ue.memo=function(z,et){return{$$typeof:p,type:z,compare:et===void 0?null:et}},ue.startTransition=function(z){var et=O.T,mt={};O.T=mt;try{var At=z(),It=O.S;It!==null&&It(mt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,xt)}catch(it){xt(it)}finally{et!==null&&mt.types!==null&&(et.types=mt.types),O.T=et}},ue.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ue.use=function(z){return O.H.use(z)},ue.useActionState=function(z,et,mt){return O.H.useActionState(z,et,mt)},ue.useCallback=function(z,et){return O.H.useCallback(z,et)},ue.useContext=function(z){return O.H.useContext(z)},ue.useDebugValue=function(){},ue.useDeferredValue=function(z,et){return O.H.useDeferredValue(z,et)},ue.useEffect=function(z,et){return O.H.useEffect(z,et)},ue.useEffectEvent=function(z){return O.H.useEffectEvent(z)},ue.useId=function(){return O.H.useId()},ue.useImperativeHandle=function(z,et,mt){return O.H.useImperativeHandle(z,et,mt)},ue.useInsertionEffect=function(z,et){return O.H.useInsertionEffect(z,et)},ue.useLayoutEffect=function(z,et){return O.H.useLayoutEffect(z,et)},ue.useMemo=function(z,et){return O.H.useMemo(z,et)},ue.useOptimistic=function(z,et){return O.H.useOptimistic(z,et)},ue.useReducer=function(z,et,mt){return O.H.useReducer(z,et,mt)},ue.useRef=function(z){return O.H.useRef(z)},ue.useState=function(z){return O.H.useState(z)},ue.useSyncExternalStore=function(z,et,mt){return O.H.useSyncExternalStore(z,et,mt)},ue.useTransition=function(){return O.H.useTransition()},ue.version="19.2.3",ue}var s_;function ip(){return s_||(s_=1,_h.exports=yy()),_h.exports}var de=ip(),vh={exports:{}},Xo={},xh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function My(){return r_||(r_=1,(function(r){function t(F,G){var nt=F.length;F.push(G);t:for(;0<nt;){var xt=nt-1>>>1,St=F[xt];if(0<l(St,G))F[xt]=G,F[nt]=St,nt=xt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var G=F[0],nt=F.pop();if(nt!==G){F[0]=nt;t:for(var xt=0,St=F.length,z=St>>>1;xt<z;){var et=2*(xt+1)-1,mt=F[et],At=et+1,It=F[At];if(0>l(mt,nt))At<St&&0>l(It,mt)?(F[xt]=It,F[At]=nt,xt=At):(F[xt]=mt,F[et]=nt,xt=et);else if(At<St&&0>l(It,nt))F[xt]=It,F[At]=nt,xt=At;else break t}}return G}function l(F,G){var nt=F.sortIndex-G.sortIndex;return nt!==0?nt:F.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,b=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=F)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function P(F){if(T=!1,U(F),!b)if(i(m)!==null)b=!0,I||(I=!0,Y());else{var G=i(p);G!==null&&rt(P,G.startTime-F)}}var I=!1,O=-1,V=5,A=-1;function D(){return M?!0:!(r.unstable_now()-A<V)}function k(){if(M=!1,I){var F=r.unstable_now();A=F;var G=!0;try{t:{b=!1,T&&(T=!1,L(O),O=-1),y=!0;var nt=x;try{e:{for(U(F),_=i(m);_!==null&&!(_.expirationTime>F&&D());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,x=_.priorityLevel;var St=xt(_.expirationTime<=F);if(F=r.unstable_now(),typeof St=="function"){_.callback=St,U(F),G=!0;break e}_===i(m)&&s(m),U(F)}else s(m);_=i(m)}if(_!==null)G=!0;else{var z=i(p);z!==null&&rt(P,z.startTime-F),G=!1}}break t}finally{_=null,x=nt,y=!1}G=void 0}}finally{G?Y():I=!1}}}var Y;if(typeof w=="function")Y=function(){w(k)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ct=Q.port2;Q.port1.onmessage=k,Y=function(){ct.postMessage(null)}}else Y=function(){v(k,0)};function rt(F,G){O=v(function(){F(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var nt=x;x=G;try{return F()}finally{x=nt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var nt=x;x=F;try{return G()}finally{x=nt}},r.unstable_scheduleCallback=function(F,G,nt){var xt=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?xt+nt:xt):nt=xt,F){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=nt+St,F={id:g++,callback:G,priorityLevel:F,startTime:nt,expirationTime:St,sortIndex:-1},nt>xt?(F.sortIndex=nt,t(p,F),i(m)===null&&F===i(p)&&(T?(L(O),O=-1):T=!0,rt(P,nt-xt))):(F.sortIndex=St,t(m,F),b||y||(b=!0,I||(I=!0,Y()))),F},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(F){var G=x;return function(){var nt=x;x=G;try{return F.apply(this,arguments)}finally{x=nt}}}})(Sh)),Sh}var o_;function Ey(){return o_||(o_=1,xh.exports=My()),xh.exports}var yh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function by(){if(l_)return zn;l_=1;var r=ip();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},zn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var c_;function Ty(){if(c_)return yh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=by(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function Ay(){if(u_)return Xo;u_=1;var r=Ey(),t=ip(),i=Ty();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=h;break}if(R===o){S=!0,o=u,a=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===a){S=!0,a=h,o=u;break}if(R===o){S=!0,o=h,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case w:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var rt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},xt=[],St=-1;function z(e){return{current:e}}function et(e){0>St||(e.current=xt[St],xt[St]=null,St--)}function mt(e,n){St++,xt[St]=e.current,e.current=n}var At=z(null),It=z(null),it=z(null),ht=z(null);function Dt(e,n){switch(mt(it,n),mt(It,e),mt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Tg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Tg(n),e=Ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(At),mt(At,e)}function Wt(){et(At),et(It),et(it)}function Vt(e){e.memoizedState!==null&&mt(ht,e);var n=At.current,a=Ag(n,e.type);n!==a&&(mt(It,e),mt(At,a))}function xe(e){It.current===e&&(et(At),et(It)),ht.current===e&&(et(ht),Bo._currentValue=nt)}var Qe,Se;function _e(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",Se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+Se}var Ce=!1;function oe(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ft){var st=ft}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ft){st=ft}e.call(_t.prototype)}}else{try{throw Error()}catch(ft){st=ft}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ft){if(ft&&st&&typeof ft.stack=="string")return[ft.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var H=S.split(`
`),tt=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===tt.length)for(o=H.length-1,u=tt.length-1;1<=o&&0<=u&&H[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==tt[u]){var pt=`
`+H[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_e(a):""}function Et(e,n){switch(e.tag){case 26:case 27:case 5:return _e(e.type);case 16:return _e("Lazy");case 13:return e.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return _e("Activity");default:return""}}function B(e){try{var n="",a=null;do n+=Et(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ae=Object.prototype.hasOwnProperty,Qt=r.unstable_scheduleCallback,te=r.unstable_cancelCallback,Ct=r.unstable_shouldYield,N=r.unstable_requestPaint,E=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ut=r.unstable_ImmediatePriority,dt=r.unstable_UserBlockingPriority,ot=r.unstable_NormalPriority,Nt=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,kt=r.log,se=r.unstable_setDisableYieldValue,Mt=null,bt=null;function Ht(e){if(typeof kt=="function"&&se(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Mt,e)}catch{}}var Ft=Math.clz32?Math.clz32:q,Ut=Math.log,pe=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ut(e)/pe|0)|0}var Ot=256,Tt=262144,Bt=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=yt(o):(S&=R,S!==0?u=yt(S):a||(a=R&~e,a!==0&&(u=yt(a))))):(R=o&~h,R!==0?u=yt(R):S!==0?u=yt(S):a||(a=o&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Ft(a),_t=1<<pt;R[pt]=0,H[pt]=-1;var st=tt[pt];if(st!==null)for(tt[pt]=null,pt=0;pt<st.length;pt++){var ft=st[pt];ft!==null&&(ft.lane&=-536870913)}a&=~_t}o!==0&&ul(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function ul(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Gs(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Zg(e.type))}function Oi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ci=Math.random().toString(36).slice(2),ln="__reactFiber$"+ci,bn="__reactProps$"+ci,Ei="__reactContainer$"+ci,ks="__reactEvents$"+ci,Xs="__reactListeners$"+ci,fl="__reactHandles$"+ci,$r="__reactResources$"+ci,cs="__reactMarker$"+ci;function to(e){delete e[ln],delete e[bn],delete e[ks],delete e[Xs],delete e[fl]}function Aa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ei]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ng(e);e!==null;){if(a=e[ln])return a;e=Ng(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[ln]||e[Ei]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[$r];return n||(n=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[cs]=!0}var j=new Set,lt={};function at(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(lt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Pt={};function qt(e){return ae.call(Pt,e)?!0:ae.call(Gt,e)?!1:Lt.test(e)?Pt[e]=!0:(Gt[e]=!0,!1)}function jt(e,n,a){if(qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){if(!e._valueTracker){var n=Oe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Ie(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function ce(e){return e.replace(Pe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,u,h,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,ne(n)):a!=null?An(e,S,ne(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ne(R):e.removeAttribute("name")}function Ki(e,n,a,o,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){je(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),je(e)}function An(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),je(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ws(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&wn(e,h,n[h])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return gx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var hu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function bp(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ie(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ui(e,!!a.multiple,n,!1)}}}var pu=!1;function Tp(e,n,a){if(pu)return e(n,a);pu=!0;try{var o=e(n);return o}finally{if(pu=!1,(qs!==null||Ys!==null)&&($l(),qs&&(n=qs,e=Ys,Ys=qs=null,bp(n),e)))for(n=0;n<e.length;n++)bp(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Ji)try{var no={};Object.defineProperty(no,"passive",{get:function(){mu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{mu=!1}var wa=null,gu=null,dl=null;function Ap(){if(dl)return dl;var e,n=gu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Rp(){return!1}function kn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ml:Rp,this.isPropagationStopped=Rp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=kn(fs),io=_({},fs,{view:0,detail:0}),_x=kn(io),_u,vu,ao,_l=_({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(_u=e.screenX-ao.screenX,vu=e.screenY-ao.screenY):vu=_u=0,ao=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Cp=kn(_l),vx=_({},_l,{dataTransfer:0}),xx=kn(vx),Sx=_({},io,{relatedTarget:0}),xu=kn(Sx),yx=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=kn(yx),Ex=_({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bx=kn(Ex),Tx=_({},fs,{data:0}),wp=kn(Tx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cx[e])?!!n[e]:!1}function Su(){return wx}var Dx=_({},io,{key:function(e){if(e.key){var n=Ax[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ux=kn(Dx),Lx=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=kn(Lx),Nx=_({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Ox=kn(Nx),Px=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=kn(Px),Ix=_({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=kn(Ix),Bx=_({},fs,{newState:0,oldState:0}),Hx=kn(Bx),Gx=[9,13,27,32],yu=Ji&&"CompositionEvent"in window,so=null;Ji&&"documentMode"in document&&(so=document.documentMode);var Vx=Ji&&"TextEvent"in window&&!so,Up=Ji&&(!yu||so&&8<so&&11>=so),Lp=" ",Np=!1;function Op(e,n){switch(e){case"keyup":return Gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function kx(e,n){switch(e){case"compositionend":return Pp(n);case"keypress":return n.which!==32?null:(Np=!0,Lp);case"textInput":return e=n.data,e===Lp&&Np?null:e;default:return null}}function Xx(e,n){if(js)return e==="compositionend"||!yu&&Op(e,n)?(e=Ap(),dl=gu=wa=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wx[e.type]:n==="textarea"}function Ip(e,n,a,o){qs?Ys?Ys.push(o):Ys=[o]:qs=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function qx(e){xg(e,0)}function vl(e){var n=us(e);if(Ie(n))return e}function Fp(e,n){if(e==="change")return n}var Bp=!1;if(Ji){var Mu;if(Ji){var Eu="oninput"in document;if(!Eu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Eu=typeof Hp.oninput=="function"}Mu=Eu}else Mu=!1;Bp=Mu&&(!document.documentMode||9<document.documentMode)}function Gp(){ro&&(ro.detachEvent("onpropertychange",Vp),oo=ro=null)}function Vp(e){if(e.propertyName==="value"&&vl(oo)){var n=[];Ip(n,oo,e,du(e)),Tp(qx,n)}}function Yx(e,n,a){e==="focusin"?(Gp(),ro=n,oo=a,ro.attachEvent("onpropertychange",Vp)):e==="focusout"&&Gp()}function jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(oo)}function Zx(e,n){if(e==="click")return vl(n)}function Kx(e,n){if(e==="input"||e==="change")return vl(n)}function Qx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Qx;function lo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ae.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xp(e,n){var a=kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kp(a)}}function Wp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Jx=Ji&&"documentMode"in document&&11>=document.documentMode,Zs=null,Tu=null,co=null,Au=!1;function Yp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Zs==null||Zs!==Jt(o)||(o=Zs,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=rc(Tu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zs)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ks={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ru={},jp={};Ji&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function ds(e){if(Ru[e])return Ru[e];if(!Ks[e])return e;var n=Ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jp)return Ru[e]=n[a];return e}var Zp=ds("animationend"),Kp=ds("animationiteration"),Qp=ds("animationstart"),$x=ds("transitionrun"),tS=ds("transitionstart"),eS=ds("transitioncancel"),Jp=ds("transitionend"),$p=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function Ti(e,n){$p.set(e,n),at(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Qs=0,wu=0;function Sl(){for(var e=Qs,n=wu=Qs=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var h=fi[n];if(fi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&tm(a,u,h)}}function yl(e,n,a,o){fi[Qs++]=e,fi[Qs++]=n,fi[Qs++]=a,fi[Qs++]=o,wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,n,a,o){return yl(e,n,a,o),Ml(e)}function ps(e,n){return yl(e,null,null,n),Ml(e)}function tm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ml(e){if(50<Lo)throw Lo=0,Hf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Js={};function nS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new nS(e,n,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function em(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Uu(e)&&(S=1);else if(typeof e=="string")S=oy(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ti(31,a,n,u),e.elementType=A,e.lanes=h,e;case T:return ms(a.children,u,h,n);case M:S=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case P:return e=ti(13,a,n,u),e.elementType=P,e.lanes=h,e;case I:return e=ti(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:S=10;break t;case L:S=9;break t;case U:S=11;break t;case O:S=14;break t;case V:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ms(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Lu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function nm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Nu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var im=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=im.get(e);return a!==void 0?a:(n={value:e,source:n,stack:B(n)},im.set(e,n),n)}return{value:e,source:n,stack:B(n)}}var $s=[],tr=0,bl=null,uo=0,di=[],pi=0,Da=null,Pi=1,zi="";function ta(e,n){$s[tr++]=uo,$s[tr++]=bl,bl=e,uo=n}function am(e,n,a){di[pi++]=Pi,di[pi++]=zi,di[pi++]=Da,Da=e;var o=Pi;e=zi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var h=32-Ft(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Pi=1<<32-Ft(n)+u|a<<u|o,zi=h+e}else Pi=1<<h|a<<u|o,zi=e}function Ou(e){e.return!==null&&(ta(e,1),am(e,1,0))}function Pu(e){for(;e===bl;)bl=$s[--tr],$s[tr]=null,uo=$s[--tr],$s[tr]=null;for(;e===Da;)Da=di[--pi],di[pi]=null,zi=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function sm(e,n){di[pi++]=Pi,di[pi++]=zi,di[pi++]=Da,Pi=n.id,zi=n.overflow,Da=e}var Dn=null,Ze=null,Ae=!1,Ua=null,mi=!1,zu=Error(s(519));function La(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(hi(n,e)),zu}function rm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[bn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)Me(Oo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Ki(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Eg(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||La(e,!0)}function om(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Dn=Dn.return}}function er(e){if(e!==Dn)return!1;if(!Ae)return om(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||eh(e.type,e.memoizedProps)),a=!a),a&&Ze&&La(e),om(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Lg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Lg(e)}else n===27?(n=Ze,qa(e.type)?(e=rh,rh=null,Ze=e):Ze=n):Ze=Dn?_i(e.stateNode.nextSibling):null;return!0}function gs(){Ze=Dn=null,Ae=!1}function Iu(){var e=Ua;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ua=null),e}function fo(e){Ua===null?Ua=[e]:Ua.push(e)}var Fu=z(null),_s=null,ea=null;function Na(e,n,a){mt(Fu,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Fu.current,et(Fu)}function Bu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Hu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Bu(h.return,a,e),o||(S=null);break t}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Bu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function nr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;$n(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===ht.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Hu(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return lm(_s,e)}function Al(e,n){return _s===null&&vs(e),lm(e,n)}function lm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var iS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},aS=r.unstable_scheduleCallback,sS=r.unstable_NormalPriority,cn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new iS,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&aS(sS,function(){e.controller.abort()})}var po=null,Vu=0,ir=0,ar=null;function rS(e,n){if(po===null){var a=po=[];Vu=0,ir=qf(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(cm,cm),n}function cm(){if(--Vu===0&&po!==null){ar!==null&&(ar.status="fulfilled");var e=po;po=null,ir=0,ar=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function oS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var um=F.S;F.S=function(e,n){Y0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rS(e,n),um!==null&&um(e,n)};var xs=z(null);function ku(){var e=xs.current;return e!==null?e:Ye.pooledCache}function Rl(e,n){n===null?mt(xs,xs.current):mt(xs,n.pool)}function fm(){var e=ku();return e===null?null:{parent:cn._currentValue,pool:e}}var sr=Error(s(460)),Xu=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function hm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mm(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mm(e),e}throw ys=n,sr}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,sr):a}}var ys=null;function pm(){if(ys===null)throw Error(s(459));var e=ys;return ys=null,e}function mm(e){if(e===sr||e===Cl)throw Error(s(483))}var rr=null,mo=0;function Dl(e){var n=mo;return mo+=1,rr===null&&(rr=[]),dm(rr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function gm(e){function n(K,X){if(e){var $=K.deletions;$===null?(K.deletions=[X],K.flags|=16):$.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=$i(K,X),K.index=0,K.sibling=null,K}function h(K,X,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<X?(K.flags|=67108866,X):$):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,X,$,gt){return X===null||X.tag!==6?(X=Lu($,K.mode,gt),X.return=K,X):(X=u(X,$),X.return=K,X)}function H(K,X,$,gt){var $t=$.type;return $t===T?pt(K,X,$.props.children,gt,$.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&Ss($t)===X.type)?(X=u(X,$.props),go(X,$),X.return=K,X):(X=El($.type,$.key,$.props,null,K.mode,gt),go(X,$),X.return=K,X)}function tt(K,X,$,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Nu($,K.mode,gt),X.return=K,X):(X=u(X,$.children||[]),X.return=K,X)}function pt(K,X,$,gt,$t){return X===null||X.tag!==7?(X=ms($,K.mode,gt,$t),X.return=K,X):(X=u(X,$),X.return=K,X)}function _t(K,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Lu(""+X,K.mode,$),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return $=El(X.type,X.key,X.props,null,K.mode,$),go($,X),$.return=K,$;case b:return X=Nu(X,K.mode,$),X.return=K,X;case V:return X=Ss(X),_t(K,X,$)}if(rt(X)||Y(X))return X=ms(X,K.mode,$,null),X.return=K,X;if(typeof X.then=="function")return _t(K,Dl(X),$);if(X.$$typeof===w)return _t(K,Al(K,X),$);Ul(K,X)}return null}function st(K,X,$,gt){var $t=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $t!==null?null:R(K,X,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===$t?H(K,X,$,gt):null;case b:return $.key===$t?tt(K,X,$,gt):null;case V:return $=Ss($),st(K,X,$,gt)}if(rt($)||Y($))return $t!==null?null:pt(K,X,$,gt,null);if(typeof $.then=="function")return st(K,X,Dl($),gt);if($.$$typeof===w)return st(K,X,Al(K,$),gt);Ul(K,$)}return null}function ft(K,X,$,gt,$t){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get($)||null,R(X,K,""+gt,$t);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return K=K.get(gt.key===null?$:gt.key)||null,H(X,K,gt,$t);case b:return K=K.get(gt.key===null?$:gt.key)||null,tt(X,K,gt,$t);case V:return gt=Ss(gt),ft(K,X,$,gt,$t)}if(rt(gt)||Y(gt))return K=K.get($)||null,pt(X,K,gt,$t,null);if(typeof gt.then=="function")return ft(K,X,$,Dl(gt),$t);if(gt.$$typeof===w)return ft(K,X,$,Al(X,gt),$t);Ul(X,gt)}return null}function Yt(K,X,$,gt){for(var $t=null,Le=null,Kt=X,me=X=0,Te=null;Kt!==null&&me<$.length;me++){Kt.index>me?(Te=Kt,Kt=null):Te=Kt.sibling;var Ne=st(K,Kt,$[me],gt);if(Ne===null){Kt===null&&(Kt=Te);break}e&&Kt&&Ne.alternate===null&&n(K,Kt),X=h(Ne,X,me),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne,Kt=Te}if(me===$.length)return a(K,Kt),Ae&&ta(K,me),$t;if(Kt===null){for(;me<$.length;me++)Kt=_t(K,$[me],gt),Kt!==null&&(X=h(Kt,X,me),Le===null?$t=Kt:Le.sibling=Kt,Le=Kt);return Ae&&ta(K,me),$t}for(Kt=o(Kt);me<$.length;me++)Te=ft(Kt,K,me,$[me],gt),Te!==null&&(e&&Te.alternate!==null&&Kt.delete(Te.key===null?me:Te.key),X=h(Te,X,me),Le===null?$t=Te:Le.sibling=Te,Le=Te);return e&&Kt.forEach(function(Qa){return n(K,Qa)}),Ae&&ta(K,me),$t}function ie(K,X,$,gt){if($==null)throw Error(s(151));for(var $t=null,Le=null,Kt=X,me=X=0,Te=null,Ne=$.next();Kt!==null&&!Ne.done;me++,Ne=$.next()){Kt.index>me?(Te=Kt,Kt=null):Te=Kt.sibling;var Qa=st(K,Kt,Ne.value,gt);if(Qa===null){Kt===null&&(Kt=Te);break}e&&Kt&&Qa.alternate===null&&n(K,Kt),X=h(Qa,X,me),Le===null?$t=Qa:Le.sibling=Qa,Le=Qa,Kt=Te}if(Ne.done)return a(K,Kt),Ae&&ta(K,me),$t;if(Kt===null){for(;!Ne.done;me++,Ne=$.next())Ne=_t(K,Ne.value,gt),Ne!==null&&(X=h(Ne,X,me),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return Ae&&ta(K,me),$t}for(Kt=o(Kt);!Ne.done;me++,Ne=$.next())Ne=ft(Kt,K,me,Ne.value,gt),Ne!==null&&(e&&Ne.alternate!==null&&Kt.delete(Ne.key===null?me:Ne.key),X=h(Ne,X,me),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return e&&Kt.forEach(function(vy){return n(K,vy)}),Ae&&ta(K,me),$t}function We(K,X,$,gt){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var $t=$.key;X!==null;){if(X.key===$t){if($t=$.type,$t===T){if(X.tag===7){a(K,X.sibling),gt=u(X,$.props.children),gt.return=K,K=gt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&Ss($t)===X.type){a(K,X.sibling),gt=u(X,$.props),go(gt,$),gt.return=K,K=gt;break t}a(K,X);break}else n(K,X);X=X.sibling}$.type===T?(gt=ms($.props.children,K.mode,gt,$.key),gt.return=K,K=gt):(gt=El($.type,$.key,$.props,null,K.mode,gt),go(gt,$),gt.return=K,K=gt)}return S(K);case b:t:{for($t=$.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(K,X.sibling),gt=u(X,$.children||[]),gt.return=K,K=gt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}gt=Nu($,K.mode,gt),gt.return=K,K=gt}return S(K);case V:return $=Ss($),We(K,X,$,gt)}if(rt($))return Yt(K,X,$,gt);if(Y($)){if($t=Y($),typeof $t!="function")throw Error(s(150));return $=$t.call($),ie(K,X,$,gt)}if(typeof $.then=="function")return We(K,X,Dl($),gt);if($.$$typeof===w)return We(K,X,Al(K,$),gt);Ul(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(K,X.sibling),gt=u(X,$),gt.return=K,K=gt):(a(K,X),gt=Lu($,K.mode,gt),gt.return=K,K=gt),S(K)):a(K,X)}return function(K,X,$,gt){try{mo=0;var $t=We(K,X,$,gt);return rr=null,$t}catch(Kt){if(Kt===sr||Kt===Cl)throw Kt;var Le=ti(29,Kt,null,K.mode);return Le.lanes=gt,Le.return=K,Le}finally{}}}var Ms=gm(!0),_m=gm(!1),Oa=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(e),tm(e,null,a),n}return yl(e,o,n,a),Ml(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ju=!1;function vo(){if(ju){var e=ar;if(e!==null)throw e}}function xo(e,n,a,o){ju=!1;var u=e.updateQueue;Oa=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,tt=H.next;H.next=null,S===null?h=tt:S.next=tt,S=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==S&&(R===null?pt.firstBaseUpdate=tt:R.next=tt,pt.lastBaseUpdate=H))}if(h!==null){var _t=u.baseState;S=0,pt=tt=H=null,R=h;do{var st=R.lane&-536870913,ft=st!==R.lane;if(ft?(be&st)===st:(o&st)===st){st!==0&&st===ir&&(ju=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Yt=e,ie=R;st=n;var We=a;switch(ie.tag){case 1:if(Yt=ie.payload,typeof Yt=="function"){_t=Yt.call(We,_t,st);break t}_t=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ie.payload,st=typeof Yt=="function"?Yt.call(We,_t,st):Yt,st==null)break t;_t=_({},_t,st);break t;case 2:Oa=!0}}st=R.callback,st!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[st]:ft.push(st))}else ft={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(tt=pt=ft,H=_t):pt=pt.next=ft,S|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(H=_t),u.baseState=H,u.firstBaseUpdate=tt,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),Ga|=S,e.lanes=S,e.memoizedState=_t}}function vm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function xm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vm(a[e],n)}var or=z(null),Ll=z(0);function Sm(e,n){e=fa,mt(Ll,e),mt(or,n),fa=e|n.baseLanes}function Zu(){mt(Ll,fa),mt(or,or.current)}function Ku(){fa=Ll.current,et(or),et(Ll)}var ei=z(null),gi=null;function Ia(e){var n=e.alternate;mt(sn,sn.current&1),mt(ei,e),gi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(gi=e)}function Qu(e){mt(sn,sn.current),mt(ei,e),gi===null&&(gi=e)}function ym(e){e.tag===22?(mt(sn,sn.current),mt(ei,e),gi===null&&(gi=e)):Fa()}function Fa(){mt(sn,sn.current),mt(ei,ei.current)}function ni(e){et(ei),gi===e&&(gi=null),et(sn)}var sn=z(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ah(a)||sh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,he=null,ke=null,un=null,Ol=!1,lr=!1,Es=!1,Pl=0,So=0,cr=null,lS=0;function en(){throw Error(s(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function $u(e,n,a,o,u,h){return ia=h,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?a0:mf,Es=!1,h=a(o,u),Es=!1,lr&&(h=Em(n,a,o,u)),Mm(e),h}function Mm(e){F.H=Eo;var n=ke!==null&&ke.next!==null;if(ia=0,un=ke=he=null,Ol=!1,So=0,cr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Tl(e)&&(fn=!0))}function Em(e,n,a,o){he=e;var u=0;do{if(lr&&(cr=null),So=0,lr=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=s0,h=n(a,o)}while(lr);return h}function cS(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),n}function tf(){var e=Pl!==0;return Pl=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}ia=0,un=ke=he=null,lr=!1,So=Pl=0,cr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=e:un=un.next=e,un}function rn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?he.memoizedState=un=e:un=un.next=e}return un}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,cr===null&&(cr=[]),e=dm(cr,e,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?a0:mf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===w)return Un(e)}throw Error(s(438,String(e)))}function af(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=rn();return sf(n,ke,e)}function sf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=S=null,H=null,tt=n,pt=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(be&_t)===_t:(ia&_t)===_t){var st=tt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===ir&&(pt=!0);else if((ia&st)===st){tt=tt.next,st===ir&&(pt=!0);continue}else _t={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(R=H=_t,S=h):H=H.next=_t,he.lanes|=st,Ga|=st;_t=tt.action,Es&&a(h,_t),h=tt.hasEagerState?tt.eagerState:a(h,_t)}else st={lane:_t,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(R=H=st,S=h):H=H.next=st,he.lanes|=_t,Ga|=_t;tt=tt.next}while(tt!==null&&tt!==n);if(H===null?S=h:H.next=R,!$n(h,e.memoizedState)&&(fn=!0,pt&&(a=ar,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);$n(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function bm(e,n,a){var o=he,u=rn(),h=Ae;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!$n((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,cf(Rm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},Am.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));h||(ia&127)!==0||Tm(o,n,a)}return a}function Tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=zl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Am(e,n,a,o){n.value=a,n.getSnapshot=o,Cm(n)&&wm(e)}function Rm(e,n,a){return a(function(){Cm(n)&&wm(e)})}function Cm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function wm(e){var n=ps(e,2);n!==null&&jn(n,e,2)}function of(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Es){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function Dm(e,n,a,o){return e.baseState=a,sf(e,ke,typeof o=="function"?o:aa)}function uS(e,n,a,o,u){if(Gl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Um(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Um(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var R=a(u,o),H=F.S;H!==null&&H(S,R),Lm(e,n,R)}catch(tt){lf(e,n,tt)}finally{h!==null&&S.types!==null&&(h.types=S.types),F.T=h}}else try{h=a(u,o),Lm(e,n,h)}catch(tt){lf(e,n,tt)}}function Lm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Nm(e,n,o)},function(o){return lf(e,n,o)}):Nm(e,n,a)}function Nm(e,n,a){n.status="fulfilled",n.value=a,Om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Um(e,a)))}function lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Om(n),n=n.next;while(n!==o)}e.action=null}function Om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pm(e,n){return n}function zm(e,n){if(Ae){var a=Ye.formState;if(a!==null){t:{var o=he;if(Ae){if(Ze){e:{for(var u=Ze,h=mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}La(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pm,lastRenderedState:n},a.queue=o,a=e0.bind(null,he,o),o.dispatch=a,o=of(!1),h=pf.bind(null,he,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=uS.bind(null,he,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Im(e){var n=rn();return Fm(n,ke,e)}function Fm(e,n,a){if(n=sf(e,n,Pm)[0],e=Fl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(S){throw S===sr?Cl:S}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,ur(9,{destroy:void 0},fS.bind(null,u,a),null)),[o,h,e]}function fS(e,n){e.action=n}function Bm(e){var n=rn(),a=ke;if(a!==null)return Fm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ur(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=zl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Hm(){return rn().memoizedState}function Bl(e,n,a,o){var u=Hn();he.flags|=e,u.memoizedState=ur(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;ke!==null&&o!==null&&Ju(o,ke.memoizedState.deps)?u.memoizedState=ur(n,h,a,o):(he.flags|=e,u.memoizedState=ur(1|n,h,a,o))}function Gm(e,n){Bl(8390656,8,e,n)}function cf(e,n){Hl(2048,8,e,n)}function hS(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=zl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Vm(e){var n=rn().memoizedState;return hS({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function km(e,n){return Hl(4,2,e,n)}function Xm(e,n){return Hl(4,4,e,n)}function Wm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,Wm.bind(null,n,e),a)}function uf(){}function Ym(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function jm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=e(),Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function ff(e,n,a){return a===void 0||(ia&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Z0(),he.lanes|=e,Ga|=e,a)}function Zm(e,n,a,o){return $n(a,n)?a:or.current!==null?(e=ff(e,a,o),$n(e,n)||(fn=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(be&261930)===0?(fn=!0,e.memoizedState=a):(e=Z0(),he.lanes|=e,Ga|=e,n)}function Km(e,n,a,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var S=F.T,R={};F.T=R,pf(e,!1,n,a);try{var H=u(),tt=F.S;if(tt!==null&&tt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=oS(H,o);Mo(e,n,pt,si(e))}else Mo(e,n,o,si(e))}catch(_t){Mo(e,n,{then:function(){},status:"rejected",reason:_t},si())}finally{G.p=h,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function dS(){}function hf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Qm(e).queue;Km(e,u,n,nt,a===null?dS:function(){return Jm(e),a(o)})}function Qm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jm(e){var n=Qm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},si())}function df(){return Un(Bo)}function $m(){return rn().memoizedState}function t0(){return rn().memoizedState}function pS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Pa(a);var o=za(n,e,a);o!==null&&(jn(o,n,a),_o(o,n,a)),n={cache:Gu()},e.payload=n;return}n=n.return}}function mS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?n0(n,a):(a=Du(e,n,a,o),a!==null&&(jn(a,e,o),i0(a,n,o)))}function e0(e,n,a){var o=si();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))n0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,R=h(S,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,S))return yl(e,n,u,0),Ye===null&&Sl(),!1}catch{}finally{}if(a=Du(e,n,u,o),a!==null)return jn(a,e,o),i0(a,n,o),!0}return!1}function pf(e,n,a,o){if(o={lane:2,revertLane:qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(s(479))}else n=Du(e,a,o,2),n!==null&&jn(n,e,2)}function Gl(e){var n=e.alternate;return e===he||n!==null&&n===he}function n0(e,n){lr=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function i0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Eo={readContext:Un,use:Il,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Eo.useEffectEvent=en;var a0={readContext:Un,use:Il,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,Wm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Es){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=mS.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=of(e);var n=e.queue,a=e0.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=Hn();return ff(a,e,n)},useTransition:function(){var e=of(!1);return e=Km.bind(null,he,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Hn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(be&127)!==0||Tm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Gm(Rm.bind(null,o,h,e),[e]),o.flags|=2048,ur(9,{destroy:void 0},Am.bind(null,o,h,a,n),null),a},useId:function(){var e=Hn(),n=Ye.identifierPrefix;if(Ae){var a=zi,o=Pi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:df,useFormState:zm,useActionState:zm,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:af,useCacheRefresh:function(){return Hn().memoizedState=pS.bind(null,he)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:Un,use:Il,useCallback:Ym,useContext:Un,useEffect:cf,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:jm,useReducer:Fl,useRef:Hm,useState:function(){return Fl(aa)},useDebugValue:uf,useDeferredValue:function(e,n){var a=rn();return Zm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Fl(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:bm,useId:$m,useHostTransitionStatus:df,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=rn();return Dm(a,ke,e,n)},useMemoCache:af,useCacheRefresh:t0};mf.useEffectEvent=Vm;var s0={readContext:Un,use:Il,useCallback:Ym,useContext:Un,useEffect:cf,useImperativeHandle:qm,useInsertionEffect:km,useLayoutEffect:Xm,useMemo:jm,useReducer:rf,useRef:Hm,useState:function(){return rf(aa)},useDebugValue:uf,useDeferredValue:function(e,n){var a=rn();return ke===null?ff(a,e,n):Zm(a,ke.memoizedState,e,n)},useTransition:function(){var e=rf(aa)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:bm,useId:$m,useHostTransitionStatus:df,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,n){var a=rn();return ke!==null?Dm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:t0};s0.useEffectEvent=Vm;function gf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _f={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(jn(n,e,a),_o(n,e,a))}};function r0(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,h):!0}function o0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&_f.enqueueReplaceState(n,n.state,null)}function bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function l0(e){xl(e)}function c0(e){console.error(e)}function u0(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function f0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function h0(e){return e=Pa(e),e.tag=3,e}function d0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){f0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){f0(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function gS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?tc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(e,o,u)),!1}throw Error(s(435,a.tag))}return kf(e,o,u),tc(),!1}if(Ae)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(e=Error(s(422),{cause:o}),fo(hi(e,a)))):(o!==zu&&(n=Error(s(423),{cause:o}),fo(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=vf(e.stateNode,o,u),Yu(e,u),nn!==4&&(nn=2)),!1;var h=Error(s(520),{cause:o});if(h=hi(h,a),Uo===null?Uo=[h]:Uo.push(h),nn!==4&&(nn=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=vf(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Va===null||!Va.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=h0(u),d0(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(s(461)),fn=!1;function Ln(e,n,a,o){n.child=e===null?_m(n,null,a,o):Ms(n,e.child,a,o)}function p0(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return vs(n),o=$u(e,n,a,S,h,u),R=tf(),e!==null&&!fn?(ef(e,n,u),sa(e,n,u)):(Ae&&R&&Ou(n),n.flags|=1,Ln(e,n,o,u),n.child)}function m0(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Uu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,g0(e,n,h,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Rf(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(S,o)&&e.ref===n.ref)return sa(e,n,u)}return n.flags|=1,e=$i(h,o),e.ref=n.ref,e.return=n,n.child=e}function g0(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(lo(h,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=h,Rf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,sa(e,n,u)}return Sf(e,n,a,o,u)}function _0(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return v0(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,h!==null?h.cachePool:null),h!==null?Sm(n,h):Zu(),ym(n);else return o=n.lanes=536870912,v0(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Rl(n,h.cachePool),Sm(n,h),Fa(),n.memoizedState=null):(e!==null&&Rl(n,null),Zu(),Fa());return Ln(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function v0(e,n,a,o,u){var h=ku();return h=h===null?null:{parent:cn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Rl(n,null),Zu(),ym(n),e!==null&&nr(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function x0(e,n,a){return Ms(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function _S(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,bo(null,e);if(Qu(n),(e=Ze)?(e=Ug(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=nm(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return kl(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=x0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||nr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=Ye,o!==null&&(S=Gs(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,ps(e,S),jn(o,e,S),xf;tc(),n=x0(e,n,a)}else e=h.treeContext,Ze=_i(S.nextSibling),Dn=n,Ae=!0,Ua=null,mi=!1,e!==null&&sm(n,e),n=kl(n,o),n.flags|=4096;return n}return e=$i(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Sf(e,n,a,o,u){return vs(n),a=$u(e,n,a,o,void 0,u),o=tf(),e!==null&&!fn?(ef(e,n,u),sa(e,n,u)):(Ae&&o&&Ou(n),n.flags|=1,Ln(e,n,a,u),n.child)}function S0(e,n,a,o,u,h){return vs(n),n.updateQueue=null,a=Em(n,o,a,u),Mm(e),o=tf(),e!==null&&!fn?(ef(e,n,h),sa(e,n,h)):(Ae&&o&&Ou(n),n.flags|=1,Ln(e,n,a,h),n.child)}function y0(e,n,a,o,u){if(vs(n),n.stateNode===null){var h=Js,S=a.contextType;typeof S=="object"&&S!==null&&(h=Un(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=_f,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Wu(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Un(S):Js,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(gf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&_f.enqueueReplaceState(h,h.state,null),xo(n,o,h,u),vo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,H=bs(a,R);h.props=H;var tt=h.context,pt=a.contextType;S=Js,typeof pt=="object"&&pt!==null&&(S=Un(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||tt!==S)&&o0(n,h,o,S),Oa=!1;var st=n.memoizedState;h.state=st,xo(n,o,h,u),vo(),tt=n.memoizedState,R||st!==tt||Oa?(typeof _t=="function"&&(gf(n,a,_t,o),tt=n.memoizedState),(H=Oa||r0(n,a,H,o,st,tt,S))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=S,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,qu(e,n),S=n.memoizedProps,pt=bs(a,S),h.props=pt,_t=n.pendingProps,st=h.context,tt=a.contextType,H=Js,typeof tt=="object"&&tt!==null&&(H=Un(tt)),R=a.getDerivedStateFromProps,(tt=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==_t||st!==H)&&o0(n,h,o,H),Oa=!1,st=n.memoizedState,h.state=st,xo(n,o,h,u),vo();var ft=n.memoizedState;S!==_t||st!==ft||Oa||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof R=="function"&&(gf(n,a,R,o),ft=n.memoizedState),(pt=Oa||r0(n,a,pt,o,st,ft,H)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=H,o=pt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Xl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):Ln(e,n,a,u),n.memoizedState=h.state,e=n.child):e=sa(e,n,u),e}function M0(e,n,a,o){return gs(),n.flags|=256,Ln(e,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:fm()}}function Ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function E0(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Ia(n):Fa(),(e=Ze)?(e=Ug(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=nm(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw La(n);return sh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=Wl({mode:"hidden",children:R},u),o=ms(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(e,S,a),n.memoizedState=yf,bo(null,o)):(Ia(n),bf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(h)n.flags&256?(Ia(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),R=ms(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(e,S,a),n.memoizedState=yf,n=bo(null,o));else if(Ia(n),sh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(s(419)),o.stack="",o.digest=S,fo({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(fn||nr(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=Ye,S!==null&&(o=Gs(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ps(e,o),jn(S,e,o),xf;ah(R)||tc(),n=Tf(e,n,a)}else ah(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ze=_i(R.nextSibling),Dn=n,Ae=!0,Ua=null,mi=!1,e!==null&&sm(n,e),n=bf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,H=e.child,tt=H.sibling,o=$i(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,tt!==null?R=$i(tt,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,bo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Mf(a):(u=R.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=fm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Ef(e,S,a),n.memoizedState=yf,bo(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function bf(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Tf(e,n,a){return Ms(n,e.child,null,a),e=bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function b0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Bu(e.return,n,a)}function Af(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function T0(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=sn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,mt(sn,S),Ln(e,n,o,a),o=Ae?uo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b0(e,a,n);else if(e.tag===19)b0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,h,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function vS(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Na(n,cn,e.memoizedState.cache),gs();break;case 27:case 5:Vt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?E0(e,n,a):(Ia(n),e=sa(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return T0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,_0(e,n,a,n.pendingProps);case 24:Na(n,cn,e.memoizedState.cache)}return sa(e,n,a)}function A0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Rf(e,a)&&(n.flags&128)===0)return fn=!1,vS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ae&&(n.flags&1048576)!==0&&am(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")Uu(e)?(o=bs(e,o),n.tag=1,n=y0(null,n,e,o,a)):(n.tag=0,n=Sf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=p0(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=m0(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return Sf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=bs(o,n.pendingProps),y0(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,qu(e,n),xo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Na(n,cn,o),o!==h.cache&&Hu(n,[cn],a,!0),vo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=M0(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),fo(u),n=M0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),Dn=n,Ae=!0,Ua=null,mi=!0,a=_m(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gs(),o===u){n=sa(e,n,a);break t}Ln(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=Ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=oc(it.current).createElement(a),o[ln]=n,o[bn]=e,Nn(o,a,e),C(o),n.stateNode=o):n.memoizedState=Ig(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Ae&&(o=n.stateNode=Og(n.type,n.pendingProps,it.current),Dn=n,mi=!0,u=Ze,qa(n.type)?(rh=u,Ze=_i(o.firstChild)):Ze=u),Ln(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=Ze)&&(o=jS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Dn=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||La(n)),Vt(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,eh(u,h)?o=null:S!==null&&eh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,cS,null,null,a),Bo._currentValue=u),Xl(e,n),Ln(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=ZS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||La(n)),null;case 13:return E0(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):Ln(e,n,o,a),n.child;case 11:return p0(e,n,n.type,n.pendingProps,a);case 7:return Ln(e,n,n.pendingProps,a),n.child;case 8:return Ln(e,n,n.pendingProps.children,a),n.child;case 12:return Ln(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Ln(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Un(u),o=o(u),n.flags|=1,Ln(e,n,o,a),n.child;case 14:return m0(e,n,n.type,n.pendingProps,a);case 15:return g0(e,n,n.type,n.pendingProps,a);case 19:return T0(e,n,a);case 31:return _S(e,n,a);case 22:return _0(e,n,a,n.pendingProps);case 24:return vs(n),o=Un(cn),e===null?(u=ku(),u===null&&(u=Ye,h=Gu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Wu(n),Na(n,cn,u)):((e.lanes&a)!==0&&(qu(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,cn,o)):(o=h.cache,Na(n,cn,o),o!==u.cache&&Hu(n,[cn],a,!0))),Ln(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function Cf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if($0())e.flags|=8192;else throw ys=wl,Xu}else e.flags&=-16777217}function R0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vg(n))if($0())e.flags|=8192;else throw ys=wl,Xu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,pr|=n)}function To(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function xS(e,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(cn),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(er(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Iu())),Ke(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ra(n),h!==null?(Ke(n),R0(n,h)):(Ke(n),Cf(n,u,null,o,a))):h?h!==e.memoizedState?(ra(n),Ke(n),R0(n,h)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),Ke(n),Cf(n,u,e,o,a)),null;case 27:if(xe(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=At.current,er(n)?rm(n):(e=Og(u,o,a),n.stateNode=e,ra(n))}return Ke(n),null;case 5:if(xe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(h=At.current,er(n))rm(n);else{var S=oc(it.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[ln]=n,h[bn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(Nn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(n)}}return Ke(n),Cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,er(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Eg(e.nodeValue,a)),e||La(n,!0)}else e=oc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=er(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Ke(n),null);case 4:return Wt(),e===null&&Kf(n.stateNode.containerInfo),Ke(n),null;case 10:return na(n.type),Ke(n),null;case 19:if(et(sn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)To(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Nl(e),h!==null){for(n.flags|=128,To(o,!1),e=h.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)em(a,e),a=a.sibling;return mt(sn,sn.current&1|2),Ae&&ta(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Ql&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ae)return Ke(n),null}else 2*E()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=sn.current,mt(sn,u?a&1|2:a&1),Ae&&ta(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),Ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(cn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function SS(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(cn),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xe(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(sn),null;case 4:return Wt(),null;case 10:return na(n.type),null;case 22:case 23:return ni(n),Ku(),e!==null&&et(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(cn),null;case 25:return null;default:return null}}function C0(e,n){switch(Pu(n),n.tag){case 3:na(cn),Wt();break;case 26:case 27:case 5:xe(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:et(sn);break;case 10:na(n.type);break;case 22:case 23:ni(n),Ku(),e!==null&&et(xs);break;case 24:na(cn)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Ge(n,n.return,R)}}function Ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var H=a,tt=R;try{tt()}catch(pt){Ge(u,H,pt)}}}o=o.next}while(o!==h)}}catch(pt){Ge(n,n.return,pt)}}function w0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xm(n,a)}catch(o){Ge(e,e.return,o)}}}function D0(e,n,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function U0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function wf(e,n,a){try{var o=e.stateNode;VS(o,e.type,a,n),o[bn]=n}catch(u){Ge(e,e.return,u)}}function L0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||L0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Uf(e,n,a),e=e.sibling;e!==null;)Uf(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function N0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[ln]=e,n[bn]=a}catch(h){Ge(e,e.return,h)}}var oa=!1,hn=!1,Lf=!1,O0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function yS(e,n){if(e=e.containerInfo,$f=pc,e=qp(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,R=-1,H=-1,tt=0,pt=0,_t=e,st=null;e:for(;;){for(var ft;_t!==a||u!==0&&_t.nodeType!==3||(R=S+u),_t!==h||o!==0&&_t.nodeType!==3||(H=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(ft=_t.firstChild)!==null;)st=_t,_t=ft;for(;;){if(_t===e)break e;if(st===a&&++tt===u&&(R=S),st===h&&++pt===o&&(H=S),(ft=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=ft}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:e,selectionRange:a},pc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Yt=bs(a.type,u);e=o.getSnapshotBeforeUpdate(Yt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ge(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function P0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),o&4&&Ao(5,a);break;case 1:if(ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&w0(a),o&512&&Ro(a,a.return);break;case 3:if(ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xm(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&N0(a);case 26:case 5:ca(e,a),n===null&&o&4&&U0(a),o&512&&Ro(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),o&4&&F0(e,a);break;case 13:ca(e,a),o&4&&B0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=DS.bind(null,a),KS(e,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||hn,u=oa;var h=hn;oa=o,(hn=n)&&!h?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,hn=h}break;case 30:break;default:ca(e,a)}}function z0(e){var n=e.alternate;n!==null&&(e.alternate=null,z0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Xn=!1;function la(e,n,a){for(a=a.child;a!==null;)I0(e,n,a),a=a.sibling}function I0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:hn||Ii(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ii(a,n);var o=$e,u=Xn;qa(a.type)&&($e=a.stateNode,Xn=!1),la(e,n,a),zo(a.stateNode),$e=o,Xn=u;break;case 5:hn||Ii(a,n);case 6:if(o=$e,u=Xn,$e=null,la(e,n,a),$e=o,Xn=u,$e!==null)if(Xn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{$e.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:$e!==null&&(Xn?(e=$e,wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mr(e)):wg($e,a.stateNode));break;case 4:o=$e,u=Xn,$e=a.stateNode.containerInfo,Xn=!0,la(e,n,a),$e=o,Xn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),hn||Ba(4,a,n),la(e,n,a);break;case 1:hn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&D0(a,n,o)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,la(e,n,a),hn=o;break;default:la(e,n,a)}}function F0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(a){Ge(n,n.return,a)}}}function B0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(a){Ge(n,n.return,a)}}function MS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new O0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new O0),n;default:throw Error(s(435,e.tag))}}function jl(e,n){var a=MS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=US.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){$e=R.stateNode,Xn=!1;break t}break;case 5:$e=R.stateNode,Xn=!1;break t;case 3:case 4:$e=R.stateNode.containerInfo,Xn=!0;break t}R=R.return}if($e===null)throw Error(s(160));I0(h,S,u),$e=null,Xn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)H0(n,e),n=n.sibling}var Ai=null;function H0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ba(3,e,e.return),Ao(3,e),Ba(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&64&&oa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(Wn(n,e),qn(e),o&512&&(hn||a===null||Ii(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[cs]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Nn(h,o,a),h[ln]=e,C(h),o=h;break t;case"link":var S=Hg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}h=u.createElement(o),Nn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Hg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}h=u.createElement(o),Nn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[ln]=e,C(h),o=h}e.stateNode=o}else Gg(u,e.type,e.stateNode);else e.stateNode=Bg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Gg(u,e.type,e.stateNode):Bg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(hn||a===null||Ii(a,a.return)),a!==null&&o&4&&wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(hn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(Yt){Ge(e,e.return,Yt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Lf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Yt){Ge(e,e.return,Yt)}}break;case 3:if(uc=null,u=Ai,Ai=lc(n.containerInfo),Wn(n,e),Ai=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(Yt){Ge(e,e.return,Yt)}Lf&&(Lf=!1,G0(e));break;case 4:o=Ai,Ai=lc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ai=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,tt=oa,pt=hn;if(oa=tt||u,hn=pt||H,Wn(n,e),hn=pt,oa=tt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||oa||hn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=H.stateNode;var _t=H.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Yt){Ge(H,H.return,Yt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Yt){Ge(H,H.return,Yt)}}}else if(n.tag===18){if(a===null){H=n;try{var ft=H.stateNode;u?Dg(ft,!0):Dg(H.stateNode,!1)}catch(Yt){Ge(H,H.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,jl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(L0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Df(e);Yl(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var R=Df(e);Yl(e,R,S);break;case 3:case 4:var H=a.stateNode.containerInfo,tt=Df(e);Uf(e,tt,H);break;default:throw Error(s(161))}}catch(pt){Ge(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function G0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;G0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)P0(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&D0(n,n.return,a),Ts(n);break;case 27:zo(n.stateNode);case 26:case 5:Ii(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:ua(u,h,a),Ao(4,h);break;case 1:if(ua(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)vm(H[u],R)}catch(tt){Ge(o,o.return,tt)}}a&&S&64&&w0(h),Ro(h,h.return);break;case 27:N0(h);case 26:case 5:ua(u,h,a),a&&o===null&&S&4&&U0(h),Ro(h,h.return);break;case 12:ua(u,h,a);break;case 31:ua(u,h,a),a&&S&4&&F0(u,h);break;case 13:ua(u,h,a),a&&S&4&&B0(u,h);break;case 22:h.memoizedState===null&&ua(u,h,a),Ro(h,h.return);break;case 30:break;default:ua(u,h,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)V0(e,n,a,o),n=n.sibling}function V0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ge(n,n.return,H)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Ri(e,n,a,o):Co(e,n):h._visibility&2?Ri(e,n,a,o):(h._visibility|=2,fr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(S,n);break;case 24:Ri(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ri(e,n,a,o)}}function fr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,R=a,H=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:fr(h,S,R,H,u),Ao(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?fr(h,S,R,H,u):Co(h,S):(pt._visibility|=2,fr(h,S,R,H,u)),u&&tt&2048&&Nf(S.alternate,S);break;case 24:fr(h,S,R,H,u),u&&tt&2048&&Of(S.alternate,S);break;default:fr(h,S,R,H,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Nf(o.alternate,o);break;case 24:Co(a,o),u&2048&&Of(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function hr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)k0(e,n,a),e=e.sibling}function k0(e,n,a){switch(e.tag){case 26:hr(e,n,a),e.flags&wo&&e.memoizedState!==null&&ly(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:hr(e,n,a);break;case 3:case 4:var o=Ai;Ai=lc(e.stateNode.containerInfo),hr(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,hr(e,n,a),wo=o):hr(e,n,a));break;default:hr(e,n,a)}}function X0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,q0(o,e)}X0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)W0(e),e=e.sibling}function W0(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Do(e);break;default:Do(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,q0(o,e)}X0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function q0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(z0(o),o===a){Sn=null;break t}if(u!==null){u.return=h,Sn=u;break t}Sn=h}}}var ES={getCacheForType:function(e){var n=Un(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(cn).controller.signal}},bS=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,ye=null,be=0,He=0,ii=null,Ha=!1,dr=!1,Pf=!1,fa=0,nn=0,Ga=0,As=0,zf=0,ai=0,pr=0,Uo=null,Yn=null,If=!1,Kl=0,Y0=0,Ql=1/0,Jl=null,Va=null,gn=0,ka=null,mr=null,ha=0,Ff=0,Bf=null,j0=null,Lo=0,Hf=null;function si(){return(ze&2)!==0&&be!==0?be&-be:F.T!==null?qf():Jr()}function Z0(){if(ai===0)if((be&536870912)===0||Ae){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function jn(e,n,a){(e===Ye&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(gr(e,0),Xa(e,be,ai,!1)),Pn(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(As|=a),nn===4&&Xa(e,be,ai,!1)),Fi(e))}function K0(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||wt(e,n),u=o?RS(e,n):Vf(e,n,!0),h=o;do{if(u===0){dr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!TS(a)){u=Vf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=Uo;var H=R.current.memoizedState.isDehydrated;if(H&&(gr(R,S).flags|=256),S=Vf(R,S,!1),S!==2){if(Pf&&!H){R.errorRecoveryDisabledLanes|=h,As|=h,u=4;break t}h=Yn,Yn=u,h!==null&&(Yn===null?Yn=h:Yn.push.apply(Yn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){gr(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ai,!Ha);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-E(),10<u)){if(Xa(o,n,ai,!Ha),vt(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=Rg(Q0.bind(null,o,a,Yn,Jl,If,n,ai,As,pr,Ha,h,"Throttled",-0,0),u);break t}Q0(o,a,Yn,Jl,If,n,ai,As,pr,Ha,h,null,-0,0)}}break}while(!0);Fi(e)}function Q0(e,n,a,o,u,h,S,R,H,tt,pt,_t,st,ft){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},k0(n,h,_t);var Yt=(h&62914560)===h?Kl-E():(h&4194048)===h?Y0-E():0;if(Yt=cy(_t,Yt),Yt!==null){ha=h,e.cancelPendingCommit=Yt(sg.bind(null,e,n,h,a,o,u,S,R,H,pt,_t,null,st,ft)),Xa(e,h,S,!tt);return}}sg(e,n,h,a,o,u,S,R,H)}function TS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~zf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ft(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&ul(e,a,n)}function $l(){return(ze&6)===0?(No(0),!1):!0}function Gf(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,ea=_s=null,nf(e),rr=null,mo=0,e=ye;for(;e!==null;)C0(e.alternate,e),e=e.return;ye=null}}function gr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,WS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Gf(),Ye=e,ye=a=$i(e.current,null),be=n,He=0,ii=null,Ha=!1,dr=wt(e,n),Pf=!1,pr=ai=zf=As=Ga=nn=0,Yn=Uo=null,If=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),h=1<<u;n|=e[u],o&=~h}return fa=n,Sl(),a}function J0(e,n){he=null,F.H=Eo,n===sr||n===Cl?(n=pm(),He=3):n===Xu?(n=pm(),He=4):He=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ye===null&&(nn=1,Vl(e,hi(n,e.current)))}function $0(){var e=ei.current;return e===null?!0:(be&4194048)===be?gi===null:(be&62914560)===be||(be&536870912)!==0?e===gi:!1}function tg(){var e=F.H;return F.H=Eo,e===null?Eo:e}function eg(){var e=F.A;return F.A=ES,e}function tc(){nn=4,Ha||(be&4194048)!==be&&ei.current!==null||(dr=!0),(Ga&134217727)===0&&(As&134217727)===0||Ye===null||Xa(Ye,be,ai,!1)}function Vf(e,n,a){var o=ze;ze|=2;var u=tg(),h=eg();(Ye!==e||be!==n)&&(Jl=null,gr(e,n)),n=!1;var S=nn;t:do try{if(He!==0&&ye!==null){var R=ye,H=ii;switch(He){case 8:Gf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var tt=He;if(He=0,ii=null,_r(e,R,H,tt),a&&dr){S=0;break t}break;default:tt=He,He=0,ii=null,_r(e,R,H,tt)}}AS(),S=nn;break}catch(pt){J0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ea=_s=null,ze=o,F.H=u,F.A=h,ye===null&&(Ye=null,be=0,Sl()),S}function AS(){for(;ye!==null;)ng(ye)}function RS(e,n){var a=ze;ze|=2;var o=tg(),u=eg();Ye!==e||be!==n?(Jl=null,Ql=E()+500,gr(e,n)):dr=wt(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var h=ii;e:switch(He){case 1:He=0,ii=null,_r(e,n,h,1);break;case 2:case 9:if(hm(h)){He=0,ii=null,ig(n);break}n=function(){He!==2&&He!==9||Ye!==e||(He=7),Fi(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:hm(h)?(He=0,ii=null,ig(n)):(He=0,ii=null,_r(e,n,h,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var R=ye;if(S?Vg(S):R.stateNode.complete){He=0,ii=null;var H=R.sibling;if(H!==null)ye=H;else{var tt=R.return;tt!==null?(ye=tt,ec(tt)):ye=null}break e}}He=0,ii=null,_r(e,n,h,5);break;case 6:He=0,ii=null,_r(e,n,h,6);break;case 8:Gf(),nn=6;break t;default:throw Error(s(462))}}CS();break}catch(pt){J0(e,pt)}while(!0);return ea=_s=null,F.H=o,F.A=u,ze=a,ye!==null?0:(Ye=null,be=0,Sl(),nn)}function CS(){for(;ye!==null&&!Ct();)ng(ye)}function ng(e){var n=A0(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?ec(e):ye=n}function ig(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=S0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=S0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:nf(n);default:C0(a,n),n=ye=em(n,fa),n=A0(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?ec(e):ye=n}function _r(e,n,a,o){ea=_s=null,nf(n),rr=null,mo=0;var u=n.return;try{if(gS(e,u,n,a,be)){nn=1,Vl(e,hi(a,e.current)),ye=null;return}}catch(h){if(u!==null)throw ye=u,h;nn=1,Vl(e,hi(a,e.current)),ye=null;return}n.flags&32768?(Ae||o===1?e=!0:dr||(be&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),ag(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){ag(n,Ha);return}e=n.return;var a=xS(n.alternate,n,fa);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);nn===0&&(nn=5)}function ag(e,n){do{var a=SS(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);nn=6,ye=null}function sg(e,n,a,o,u,h,S,R,H){e.cancelPendingCommit=null;do nc();while(gn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=wu,Mi(e,a,h,S,R,H),e===Ye&&(ye=Ye=null,be=0),mr=n,ka=e,ha=a,Ff=h,Bf=u,j0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LS(ot,function(){return ug(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=G.p,G.p=2,S=ze,ze|=4;try{yS(e,n,a)}finally{ze=S,G.p=u,F.T=o}}gn=1,rg(),og(),lg()}}function rg(){if(gn===1){gn=0;var e=ka,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{H0(n,e);var h=th,S=qp(e.containerInfo),R=h.focusedElem,H=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&Wp(R.ownerDocument.documentElement,R)){if(H!==null&&bu(R)){var tt=H.start,pt=H.end;if(pt===void 0&&(pt=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(pt,R.value.length);else{var _t=R.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var ft=st.getSelection(),Yt=R.textContent.length,ie=Math.min(H.start,Yt),We=H.end===void 0?ie:Math.min(H.end,Yt);!ft.extend&&ie>We&&(S=We,We=ie,ie=S);var K=Xp(R,ie),X=Xp(R,We);if(K&&X&&(ft.rangeCount!==1||ft.anchorNode!==K.node||ft.anchorOffset!==K.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var $=_t.createRange();$.setStart(K.node,K.offset),ft.removeAllRanges(),ie>We?(ft.addRange($),ft.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ft.addRange($))}}}}for(_t=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&_t.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_t.length;R++){var gt=_t[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}pc=!!$f,th=$f=null}finally{ze=u,G.p=o,F.T=a}}e.current=n,gn=2}}function og(){if(gn===2){gn=0;var e=ka,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=G.p;G.p=2;var u=ze;ze|=4;try{P0(e,n.alternate,n)}finally{ze=u,G.p=o,F.T=a}}gn=3}}function lg(){if(gn===4||gn===3){gn=0,N();var e=ka,n=mr,a=ha,o=j0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,mr=ka=null,cg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Vs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=G.p,G.p=2,F.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];h(R.value,{componentStack:R.stack})}}finally{F.T=n,G.p=u}}(ha&3)!==0&&nc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Hf?Lo++:(Lo=0,Hf=e):Lo=0,No(0)}}function cg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function nc(){return rg(),og(),lg(),ug()}function ug(){if(gn!==5)return!1;var e=ka,n=Ff;Ff=0;var a=Vs(ha),o=F.T,u=G.p;try{G.p=32>a?32:a,F.T=null,a=Bf,Bf=null;var h=ka,S=ha;if(gn=0,mr=ka=null,ha=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,W0(h.current),V0(h,h.current,S,a),ze=R,No(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Mt,h)}catch{}return!0}finally{G.p=u,F.T=o,cg(e,n)}}function fg(e,n,a){n=hi(a,n),n=vf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Pn(e,2),Fi(e))}function Ge(e,n,a){if(e.tag===3)fg(e,e,a);else for(;n!==null;){if(n.tag===3){fg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=hi(a,e),a=h0(2),o=za(n,a,2),o!==null&&(d0(a,o,n,e),Pn(o,2),Fi(o));break}}n=n.return}}function kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new bS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),e=wS.bind(null,e,n,a),n.then(e,e))}function wS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>E()-Kl?(ze&2)===0&&gr(e,0):zf|=a,pr===be&&(pr=0)),Fi(e)}function hg(e,n){n===0&&(n=Fe()),e=ps(e,n),e!==null&&(Pn(e,n),Fi(e))}function DS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),hg(e,a)}function US(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),hg(e,a)}function LS(e,n){return Qt(e,n)}var ic=null,vr=null,Xf=!1,ac=!1,Wf=!1,Wa=0;function Fi(e){e!==vr&&e.next===null&&(vr===null?ic=vr=e:vr=vr.next=e),ac=!0,Xf||(Xf=!0,OS())}function No(e,n){if(!Wf&&ac){Wf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ft(42|e)+1)-1,h&=u&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,gg(o,h))}else h=be,h=vt(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||wt(o,h)||(a=!0,gg(o,h));o=o.next}while(a);Wf=!1}}function NS(){dg()}function dg(){ac=Xf=!1;var e=0;Wa!==0&&XS()&&(e=Wa);for(var n=E(),a=null,o=ic;o!==null;){var u=o.next,h=pg(o,n);h===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(vr=a)):(a=o,(e!==0||(h&3)!==0)&&(ac=!0)),o=u}gn!==0&&gn!==5||No(e),Wa!==0&&(Wa=0)}function pg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Ft(h),R=1<<S,H=u[S];H===-1?((R&a)===0||(R&o)!==0)&&(u[S]=le(R,n)):H<=n&&(e.expiredLanes|=R),h&=~R}if(n=Ye,a=be,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&te(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&te(o),Vs(a)){case 2:case 8:a=dt;break;case 32:a=ot;break;case 268435456:a=Rt;break;default:a=ot}return o=mg.bind(null,e),a=Qt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&te(o),e.callbackPriority=2,e.callbackNode=null,2}function mg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=be;return o=vt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(K0(e,o,n),pg(e,E()),e.callbackNode!=null&&e.callbackNode===a?mg.bind(null,e):null)}function gg(e,n){if(nc())return null;K0(e,n,!0)}function OS(){qS(function(){(ze&6)!==0?Qt(ut,NS):dg()})}function qf(){if(Wa===0){var e=ir;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Wa=e}return Wa}function _g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function PS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=_g((u[bn]||null).action),S=o.submitter;S&&(n=(n=S[bn]||null)?_g(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var R=new gl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=S?vg(u,S):new FormData(u);hf(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(R.preventDefault(),H=S?vg(u,S):new FormData(u),hf(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var Yf=0;Yf<Cu.length;Yf++){var jf=Cu[Yf],zS=jf.toLowerCase(),IS=jf[0].toUpperCase()+jf.slice(1);Ti(zS,"on"+IS)}Ti(Zp,"onAnimationEnd"),Ti(Kp,"onAnimationIteration"),Ti(Qp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti($x,"onTransitionRun"),Ti(tS,"onTransitionStart"),Ti(eS,"onTransitionCancel"),Ti(Jp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function xg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],H=R.instance,tt=R.currentTarget;if(R=R.listener,H!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=tt;try{h(u)}catch(pt){xl(pt)}u.currentTarget=null,h=H}else for(S=0;S<o.length;S++){if(R=o[S],H=R.instance,tt=R.currentTarget,R=R.listener,H!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=tt;try{h(u)}catch(pt){xl(pt)}u.currentTarget=null,h=H}}}}function Me(e,n){var a=n[ks];a===void 0&&(a=n[ks]=new Set);var o=e+"__bubble";a.has(o)||(Sg(n,e,2,!1),a.add(o))}function Zf(e,n,a){var o=0;n&&(o|=4),Sg(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[sc]){e[sc]=!0,j.forEach(function(a){a!=="selectionchange"&&(FS.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,Zf("selectionchange",!1,n))}}function Sg(e,n,a,o){switch(Zg(n)){case 2:var u=hy;break;case 8:u=dy;break;default:u=fh}a=u.bind(null,n,a,e),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Aa(R),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=h=S;continue t}R=R.parentNode}}o=o.return}Tp(function(){var tt=h,pt=du(a),_t=[];t:{var st=$p.get(e);if(st!==void 0){var ft=gl,Yt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":ft=Ux;break;case"focusin":Yt="focus",ft=xu;break;case"focusout":Yt="blur",ft=xu;break;case"beforeblur":case"afterblur":ft=xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Ox;break;case Zp:case Kp:case Qp:ft=Mx;break;case Jp:ft=zx;break;case"scroll":case"scrollend":ft=_x;break;case"wheel":ft=Fx;break;case"copy":case"cut":case"paste":ft=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Dp;break;case"toggle":case"beforetoggle":ft=Hx}var ie=(n&4)!==0,We=!ie&&(e==="scroll"||e==="scrollend"),K=ie?st!==null?st+"Capture":null:st;ie=[];for(var X=tt,$;X!==null;){var gt=X;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||K===null||(gt=eo(X,K),gt!=null&&ie.push(Po(X,gt,$))),We)break;X=X.return}0<ie.length&&(st=new ft(st,Yt,null,a,pt),_t.push({event:st,listeners:ie}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",st&&a!==hu&&(Yt=a.relatedTarget||a.fromElement)&&(Aa(Yt)||Yt[Ei]))break t;if((ft||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ft?(Yt=a.relatedTarget||a.toElement,ft=tt,Yt=Yt?Aa(Yt):null,Yt!==null&&(We=c(Yt),ie=Yt.tag,Yt!==We||ie!==5&&ie!==27&&ie!==6)&&(Yt=null)):(ft=null,Yt=tt),ft!==Yt)){if(ie=Cp,gt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Dp,gt="onPointerLeave",K="onPointerEnter",X="pointer"),We=ft==null?st:us(ft),$=Yt==null?st:us(Yt),st=new ie(gt,X+"leave",ft,a,pt),st.target=We,st.relatedTarget=$,gt=null,Aa(pt)===tt&&(ie=new ie(K,X+"enter",Yt,a,pt),ie.target=$,ie.relatedTarget=We,gt=ie),We=gt,ft&&Yt)e:{for(ie=BS,K=ft,X=Yt,$=0,gt=K;gt;gt=ie(gt))$++;gt=0;for(var $t=X;$t;$t=ie($t))gt++;for(;0<$-gt;)K=ie(K),$--;for(;0<gt-$;)X=ie(X),gt--;for(;$--;){if(K===X||X!==null&&K===X.alternate){ie=K;break e}K=ie(K),X=ie(X)}ie=null}else ie=null;ft!==null&&yg(_t,st,ft,ie,!1),Yt!==null&&We!==null&&yg(_t,We,Yt,ie,!0)}}t:{if(st=tt?us(tt):window,ft=st.nodeName&&st.nodeName.toLowerCase(),ft==="select"||ft==="input"&&st.type==="file")var Le=Fp;else if(zp(st))if(Bp)Le=Kx;else{Le=jx;var Kt=Yx}else ft=st.nodeName,!ft||ft.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&bi(tt.elementType)&&(Le=Fp):Le=Zx;if(Le&&(Le=Le(e,tt))){Ip(_t,Le,a,pt);break t}Kt&&Kt(e,st,tt),e==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&An(st,"number",st.value)}switch(Kt=tt?us(tt):window,e){case"focusin":(zp(Kt)||Kt.contentEditable==="true")&&(Zs=Kt,Tu=tt,co=null);break;case"focusout":co=Tu=Zs=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Yp(_t,a,pt);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":Yp(_t,a,pt)}var me;if(yu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else js?Op(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(Up&&a.locale!=="ko"&&(js||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&js&&(me=Ap()):(wa=pt,gu="value"in wa?wa.value:wa.textContent,js=!0)),Kt=rc(tt,Te),0<Kt.length&&(Te=new wp(Te,e,null,a,pt),_t.push({event:Te,listeners:Kt}),me?Te.data=me:(me=Pp(a),me!==null&&(Te.data=me)))),(me=Vx?kx(e,a):Xx(e,a))&&(Te=rc(tt,"onBeforeInput"),0<Te.length&&(Kt=new wp("onBeforeInput","beforeinput",null,a,pt),_t.push({event:Kt,listeners:Te}),Kt.data=me)),PS(_t,e,tt,a,pt)}xg(_t,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,h)),u=eo(e,n),u!=null&&o.push(Po(e,u,h))),e.tag===3)return o;e=e.return}return[]}function BS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yg(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var R=a,H=R.alternate,tt=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||tt===null||(H=tt,u?(tt=eo(a,h),tt!=null&&S.unshift(Po(a,tt,H))):u||(tt=eo(a,h),tt!=null&&S.push(Po(a,tt,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function Mg(e){return(typeof e=="string"?e:""+e).replace(HS,`
`).replace(GS,"")}function Eg(e,n){return n=Mg(n),Mg(e)===n}function Xe(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":Ws(e,o,h);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),jt(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mx.get(a)||a,jt(e,a,o))}}function Jf(e,n,a,o,u,h){switch(a){case"style":Ws(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[bn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jt(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,h,S,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var R=h=S=u=null,H=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":S=pt;break;case"checked":H=pt;break;case"defaultChecked":tt=pt;break;case"value":h=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,pt,a,null)}}Ki(e,h,R,H,tt,S,u,!1);return;case"select":Me("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Xe(e,n,u,R,a,null)}n=h,a=S,e.multiple=!!o,n!=null?ui(e,!!o,n,!1):a!=null&&ui(e,!!o,a,!0);return;case"textarea":Me("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,n,S,R,a,null)}Rn(e,o,u,h);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,H,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)Me(Oo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,tt,o,a,null)}return;default:if(bi(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Jf(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,n,R,o,a,null))}function VS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,H=null,tt=null,pt=null;for(ft in a){var _t=a[ft];if(a.hasOwnProperty(ft)&&_t!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":H=_t;default:o.hasOwnProperty(ft)||Xe(e,n,ft,null,o,_t)}}for(var st in o){var ft=o[st];if(_t=a[st],o.hasOwnProperty(st)&&(ft!=null||_t!=null))switch(st){case"type":h=ft;break;case"name":u=ft;break;case"checked":tt=ft;break;case"defaultChecked":pt=ft;break;case"value":S=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==_t&&Xe(e,n,st,ft,o,_t)}}Tn(e,S,R,H,tt,pt,h,u);return;case"select":ft=S=R=st=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ft=H;default:o.hasOwnProperty(h)||Xe(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":st=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==H&&Xe(e,n,u,h,o,H)}n=R,a=S,o=ft,st!=null?ui(e,!!a,st,!1):!!o!=!!a&&(n!=null?ui(e,!!a,n,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":ft=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,n,R,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":st=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Xe(e,n,S,u,o,h)}Be(e,st,ft);return;case"option":for(var Yt in a)if(st=a[Yt],a.hasOwnProperty(Yt)&&st!=null&&!o.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Xe(e,n,Yt,null,o,st)}for(H in o)if(st=o[H],ft=a[H],o.hasOwnProperty(H)&&st!==ft&&(st!=null||ft!=null))switch(H){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Xe(e,n,H,st,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)st=a[ie],a.hasOwnProperty(ie)&&st!=null&&!o.hasOwnProperty(ie)&&Xe(e,n,ie,null,o,st);for(tt in o)if(st=o[tt],ft=a[tt],o.hasOwnProperty(tt)&&st!==ft&&(st!=null||ft!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Xe(e,n,tt,st,o,ft)}return;default:if(bi(n)){for(var We in a)st=a[We],a.hasOwnProperty(We)&&st!==void 0&&!o.hasOwnProperty(We)&&Jf(e,n,We,void 0,o,st);for(pt in o)st=o[pt],ft=a[pt],!o.hasOwnProperty(pt)||st===ft||st===void 0&&ft===void 0||Jf(e,n,pt,st,o,ft);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&Xe(e,n,K,null,o,st);for(_t in o)st=o[_t],ft=a[_t],!o.hasOwnProperty(_t)||st===ft||st==null&&ft==null||Xe(e,n,_t,st,o,ft)}function bg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,R=u.duration;if(h&&R&&bg(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],tt=H.startTime;if(tt>R)break;var pt=H.transferSize,_t=H.initiatorType;pt&&bg(_t)&&(H=H.responseEnd,S+=pt*(H<R?1:(R-tt)/(H-tt)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $f=null,th=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function Tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function XS(){var e=window.event;return e&&e.type==="popstate"?e===nh?!1:(nh=e,!0):(nh=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,WS=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,qS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(e){return Cg.resolve(null).then(e).catch(YS)}:Rg;function YS(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function wg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var h=a.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[cs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);Mr(n)}function Dg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ih(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function ZS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Ug(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function ah(e){return e.data==="$?"||e.data==="$~"}function sh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rh=null;function Lg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ng(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Og(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var vi=new Map,Pg=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=G.d;G.d={f:QS,r:JS,D:$S,C:ty,L:ey,m:ny,X:ay,S:iy,M:sy};function QS(){var e=da.f(),n=$l();return e||n}function JS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Jm(n):da.r(e)}var xr=typeof document>"u"?null:document;function zg(e,n,a){var o=xr;if(o&&typeof n=="string"&&n){var u=ce(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Pg.has(u)||(Pg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function $S(e){da.D(e),zg("dns-prefetch",e,null)}function ty(e,n){da.C(e,n),zg("preconnect",e,n)}function ey(e,n,a){da.L(e,n,a);var o=xr;if(o&&e&&n){var u='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ce(a.imageSizes)+'"]')):u+='[href="'+ce(e)+'"]';var h=u;switch(n){case"style":h=Sr(e);break;case"script":h=yr(e)}vi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(h))||n==="script"&&o.querySelector(Fo(h))||(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function ny(e,n){da.m(e,n);var a=xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ce(o)+'"][href="'+ce(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=yr(e)}if(!vi.has(h)&&(e=_({rel:"modulepreload",href:e},n),vi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(h)))return}o=a.createElement("link"),Nn(o,"link",e),C(o),a.head.appendChild(o)}}}function iy(e,n,a){da.S(e,n,a);var o=xr;if(o&&e){var u=Ca(o).hoistableStyles,h=Sr(e);n=n||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Io(h)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(h))&&oh(e,a);var H=S=o.createElement("link");C(H),Nn(H,"link",e),H._p=new Promise(function(tt,pt){H.onload=tt,H.onerror=pt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,cc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function ay(e,n){da.X(e,n);var a=xr;if(a&&e){var o=Ca(a).hoistableScripts,u=yr(e),h=o.get(u);h||(h=a.querySelector(Fo(u)),h||(e=_({src:e,async:!0},n),(n=vi.get(u))&&lh(e,n),h=a.createElement("script"),C(h),Nn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function sy(e,n){da.M(e,n);var a=xr;if(a&&e){var o=Ca(a).hoistableScripts,u=yr(e),h=o.get(u);h||(h=a.querySelector(Fo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&lh(e,n),h=a.createElement("script"),C(h),Nn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ig(e,n,a,o){var u=(u=it.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var h=Ca(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Io(e)))&&!h._p&&(S.instance=h,S.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),h||ry(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+ce(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function Fg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ry(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),C(n),e.head.appendChild(n))}function yr(e){return'[src="'+ce(e)+'"]'}function Fo(e){return"script[async]"+e}function Bg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ce(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Nn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Sr(a.href);var h=e.querySelector(Io(u));if(h)return n.state.loading|=4,n.instance=h,C(h),h;o=Fg(a),(u=vi.get(u))&&oh(o,u),h=(e.ownerDocument||e).createElement("link"),C(h);var S=h;return S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),Nn(h,"link",o),n.state.loading|=4,cc(h,a.precedence,e),n.instance=h;case"script":return h=yr(a.src),(u=e.querySelector(Fo(h)))?(n.instance=u,C(u),u):(o=a,(u=vi.get(h))&&(o=_({},a),lh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function Hg(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[cs]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(h):o.set(S,[h])}}return o}function Gg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function oy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ly(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),h=n.querySelector(Io(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,C(h);return}h=n.ownerDocument||n,o=Fg(o),(u=vi.get(u))&&oh(o,u),h=h.createElement("link"),C(h);var S=h;S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),Nn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ch=0;function cy(e,n){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&ch===0&&(ch=62500*kS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>ch?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function dc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(uy,e),hc=null,fc.call(e))}function uy(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:w,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function fy(e,n,a,o,u,h,S,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function kg(e,n,a,o,u,h,S,R,H,tt,pt,_t){return e=new fy(e,n,a,S,H,tt,pt,_t,R),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=Gu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Wu(h),e}function Xg(e){return e?(e=Js,e):Js}function Wg(e,n,a,o,u,h){u=Xg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=za(e,o,n),a!==null&&(jn(a,e,n),_o(a,e,n))}function qg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function uh(e,n){qg(e,n),(e=e.alternate)&&qg(e,n)}function Yg(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&jn(n,e,67108864),uh(e,67108864)}}function jg(e){if(e.tag===13||e.tag===31){var n=si();n=Qr(n);var a=ps(e,n);a!==null&&jn(a,e,n),uh(e,n)}}var pc=!0;function hy(e,n,a,o){var u=F.T;F.T=null;var h=G.p;try{G.p=2,fh(e,n,a,o)}finally{G.p=h,F.T=u}}function dy(e,n,a,o){var u=F.T;F.T=null;var h=G.p;try{G.p=8,fh(e,n,a,o)}finally{G.p=h,F.T=u}}function fh(e,n,a,o){if(pc){var u=hh(o);if(u===null)Qf(e,n,o,mc,a),Kg(e,o);else if(my(u,e,n,a,o))o.stopPropagation();else if(Kg(e,o),n&4&&-1<py.indexOf(e)){for(;u!==null;){var h=Ra(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=yt(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var H=1<<31-Ft(S);R.entanglements[1]|=H,S&=~H}Fi(h),(ze&6)===0&&(Ql=E()+500,No(0))}}break;case 31:case 13:R=ps(h,2),R!==null&&jn(R,h,2),$l(),uh(h,2)}if(h=hh(o),h===null&&Qf(e,n,o,mc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Qf(e,n,o,null,a)}}function hh(e){return e=du(e),dh(e)}var mc=null;function dh(e){if(mc=null,e=Aa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function Zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ut:return 2;case dt:return 8;case ot:case Nt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var ph=!1,Ya=null,ja=null,Za=null,Ho=new Map,Go=new Map,Ka=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&Yg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function my(e,n,a,o,u){switch(n){case"focusin":return Ya=Vo(Ya,e,n,a,o,u),!0;case"dragenter":return ja=Vo(ja,e,n,a,o,u),!0;case"mouseover":return Za=Vo(Za,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Ho.set(h,Vo(Ho.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Go.set(h,Vo(Go.get(h)||null,e,n,a,o,u)),!0}return!1}function Qg(e){var n=Aa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){jg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=hh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return n=Ra(a),n!==null&&Yg(n),e.blockedOn=a,!1;n.shift()}return!0}function Jg(e,n,a){gc(e)&&a.delete(n)}function gy(){ph=!1,Ya!==null&&gc(Ya)&&(Ya=null),ja!==null&&gc(ja)&&(ja=null),Za!==null&&gc(Za)&&(Za=null),Ho.forEach(Jg),Go.forEach(Jg)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,ph||(ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gy)))}var vc=null;function $g(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(dh(o||a)===null)continue;break}var h=Ra(a);h!==null&&(e.splice(n,3),n-=3,hf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mr(e){function n(H){return _c(H,e)}Ya!==null&&_c(Ya,e),ja!==null&&_c(ja,e),Za!==null&&_c(Za,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Qg(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[bn]||null;if(typeof h=="function")S||$g(a);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[bn]||null)R=S.formAction;else if(dh(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),$g(a)}}}function t_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function mh(e){this._internalRoot=e}xc.prototype.render=mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();Wg(a,o,e,n,null,null)},xc.prototype.unmount=mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wg(e.current,2,null,e,null,null),$l(),n[Ei]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Qg(e)}};var e_=t.version;if(e_!=="19.2.3")throw Error(s(527,e_,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var _y={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Mt=Sc.inject(_y),bt=Sc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=l0,h=c0,S=u0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=kg(e,1,!1,null,null,a,o,null,u,h,S,t_),e[Ei]=n.current,Kf(e),new mh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=l0,S=c0,R=u0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=kg(e,1,!0,n,a??null,o,u,H,h,S,R,t_),n.context=Xg(null),a=n.current,o=si(),o=Qr(o),u=Pa(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Fi(n),e[Ei]=n.current,Kf(e),new xc(n)},Xo.version="19.2.3",Xo}var f_;function Ry(){if(f_)return vh.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vh.exports=Ay(),vh.exports}var Cy=Ry();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="182",Br={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wy=0,h_=1,Dy=2,qc=1,Uy=2,tl=3,ls=0,Qn=1,xa=2,ya=0,Hr=1,d_=2,p_=3,m_=4,Ly=5,Ns=100,Ny=101,Oy=102,Py=103,zy=104,Iy=200,Fy=201,By=202,Hy=203,ad=204,sd=205,Gy=206,Vy=207,ky=208,Xy=209,Wy=210,qy=211,Yy=212,jy=213,Zy=214,rd=0,od=1,ld=2,Vr=3,cd=4,ud=5,fd=6,hd=7,wv=0,Ky=1,Qy=2,Xi=0,Dv=1,Uv=2,Lv=3,Nv=4,Ov=5,Pv=6,zv=7,Iv=300,Is=301,kr=302,dd=303,pd=304,su=306,md=1e3,Sa=1001,gd=1002,On=1003,Jy=1004,yc=1005,Bn=1006,Mh=1007,Ps=1008,li=1009,Fv=1010,Bv=1011,nl=1012,sp=1013,Yi=1014,Gi=1015,Ea=1016,rp=1017,op=1018,il=1020,Hv=35902,Gv=35899,Vv=1021,kv=1022,Li=1023,ba=1026,zs=1027,Xv=1028,lp=1029,Xr=1030,cp=1031,up=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,_d=35840,vd=35841,xd=35842,Sd=35843,yd=36196,Md=37492,Ed=37496,bd=37488,Td=37489,Ad=37490,Rd=37491,Cd=37808,wd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,zd=37816,Id=37817,Fd=37818,Bd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,Yd=36285,jd=36286,$y=3200,Wv=0,tM=1,ss="",Si="srgb",Wr="srgb-linear",tu="linear",Ve="srgb",Er=7680,g_=519,eM=512,nM=513,iM=514,fp=515,aM=516,sM=517,hp=518,rM=519,__=35044,v_="300 es",Vi=2e3,eu=2001;function qv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oM(){const r=nu("canvas");return r.style.display="block",r}const x_={};function S_(...r){const t="THREE."+r.shift();console.log(t,...r)}function re(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function al(...r){const t=r.join(" ");t in x_||(x_[t]=!0,re(...r))}function lM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Zd=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function cM(r,t){return(r%t+t)%t}function Eh(r,t,i){return(1-i)*r+i*t}function Wo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uM={DEG2RAD:Qc};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],y=c[f+1],b=c[f+2],T=c[f+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(_!==T||m!==x||p!==y||g!==b){let M=m*x+p*y+g*b+_*T;M<0&&(x=-x,y=-y,b=-b,T=-T,M=-M);let v=1-d;if(M<.9995){const L=Math.acos(M),w=Math.sin(L);v=Math.sin(v*L)/w,d=Math.sin(d*L)/w,m=m*v+x*d,p=p*v+y*d,g=g*v+b*d,_=_*v+T*d}else{m=m*v+x*d,p=p*v+y*d,g=g*v+b*d,_=_*v+T*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],y=c[f+2],b=c[f+3];return t[i]=d*b+g*_+m*y-p*x,t[i+1]=m*b+g*x+p*_-d*y,t[i+2]=p*b+g*y+d*x-m*_,t[i+3]=g*b-d*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*y*b,this._y=p*y*_-x*g*b,this._z=p*g*b+x*y*_,this._w=p*g*_-x*y*b;break;case"YXZ":this._x=x*g*_+p*y*b,this._y=p*y*_-x*g*b,this._z=p*g*b-x*y*_,this._w=p*g*_+x*y*b;break;case"ZXY":this._x=x*g*_-p*y*b,this._y=p*y*_+x*g*b,this._z=p*g*b+x*y*_,this._w=p*g*_-x*y*b;break;case"ZYX":this._x=x*g*_-p*y*b,this._y=p*y*_+x*g*b,this._z=p*g*b-x*y*_,this._w=p*g*_+x*y*b;break;case"YZX":this._x=x*g*_+p*y*b,this._y=p*y*_+x*g*b,this._z=p*g*b-x*y*_,this._w=p*g*_-x*y*b;break;case"XZY":this._x=x*g*_-p*y*b,this._y=p*y*_-x*g*b,this._z=p*g*b+x*y*_,this._w=p*g*_+x*y*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new Z,y_=new Fs;class ge{constructor(t,i,s,l,c,f,d,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],b=s[8],T=l[0],M=l[3],v=l[6],L=l[1],w=l[4],U=l[7],P=l[2],I=l[5],O=l[8];return c[0]=f*T+d*L+m*P,c[3]=f*M+d*w+m*I,c[6]=f*v+d*U+m*O,c[1]=p*T+g*L+_*P,c[4]=p*M+g*w+_*I,c[7]=p*v+g*U+_*O,c[2]=x*T+y*L+b*P,c[5]=x*M+y*w+b*I,c[8]=x*v+y*U+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,x=d*m-g*c,y=p*c-f*m,b=i*_+s*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*f)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Th.makeScale(t,i)),this}rotate(t){return this.premultiply(Th.makeRotation(-t)),this}translate(t,i){return this.premultiply(Th.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new ge,M_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?tu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:tu,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ue=fM();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class hM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{br===void 0&&(br=nu("canvas")),br.width=t.width,br.height=t.height;const l=br.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=br}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ma(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dM=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Ah(l[f].image)):c.push(Ah(l[f]))}else c=Ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let pM=0;const Rh=new Z;class Vn extends Bs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Sa,l=Sa,c=Bn,f=Ps,d=Li,m=li,p=Vn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=rl(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Iv;Vn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],b=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,U=(y+1)/2,P=(v+1)/2,I=(g+x)/4,O=(_+T)/4,V=(b+M)/4;return w>U&&w>P?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=I/s,c=O/s):U>P?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=I/l,c=V/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=O/c,l=V/c),this.set(s,l,c,i),this}let L=Math.sqrt((M-b)*(M-b)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(M-b)/L,this.y=(_-T)/L,this.z=(x-g)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends mM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Yv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Ec.subVectors(this.max,qo),Tr.subVectors(t.a,qo),Ar.subVectors(t.b,qo),Rr.subVectors(t.c,qo),Ja.subVectors(Ar,Tr),$a.subVectors(Rr,Ar),Rs.subVectors(Tr,Rr);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Rs.z,Rs.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Rs.z,0,-Rs.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Rs.y,Rs.x,0];return!Ch(i,Tr,Ar,Rr,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Ch(i,Tr,Ar,Rr,Ec))?!1:(bc.crossVectors(Ja,$a),i=[bc.x,bc.y,bc.z],Ch(i,Tr,Ar,Rr,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ci=new Z,Mc=new ol,Tr=new Z,Ar=new Z,Rr=new Z,Ja=new Z,$a=new Z,Rs=new Z,qo=new Z,Ec=new Z,bc=new Z,Cs=new Z;function Ch(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Cs.fromArray(r,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const _M=new ol,Yo=new Z,wh=new Z;class ru{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):_M.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(wh)),this.expandByPoint(Yo.copy(t.center).sub(wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new Z,Dh=new Z,Tc=new Z,ts=new Z,Uh=new Z,Ac=new Z,Lh=new Z;class ou{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Dh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Dh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Tc),d=ts.dot(this.direction),m=-ts.dot(Tc),p=ts.lengthSq(),g=Math.abs(1-f*f);let _,x,y,b;if(g>0)if(_=f*m-d,x=f*d-m,b=c*g,_>=0)if(x>=-b)if(x<=b){const T=1/g;_*=T,x*=T,y=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Dh).addScaledVector(Tc,x),y}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,s,l,c){Uh.subVectors(i,t),Ac.subVectors(s,t),Lh.crossVectors(Uh,Ac);let f=this.direction.dot(Lh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(ts,Ac));if(m<0)return null;const p=d*this.direction.dot(Uh.cross(ts));if(p<0||m+p>f)return null;const g=-d*ts.dot(Lh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,c,f,d,m,p,g,_,x,y,b,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,_,x,y,b,T,M)}set(t,i,s,l,c,f,d,m,p,g,_,x,y,b,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=b,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),c=1/Cr.setFromMatrixColumn(t,1).length(),f=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*_,b=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*_,b=p*g,T=p*_;i[0]=x+T*d,i[4]=b*d-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=y*d-b,i[6]=T+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*_,b=p*g,T=p*_;i[0]=x-T*d,i[4]=-f*_,i[8]=b+y*d,i[1]=y+b*d,i[5]=f*g,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*_,b=d*g,T=d*_;i[0]=m*g,i[4]=b*p-y,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=d*m,T=d*p;i[0]=m*g,i[4]=T-x*_,i[8]=b*_+y,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+b,i[10]=x-T*_}else if(t.order==="XZY"){const x=f*m,y=f*p,b=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=f*g,i[9]=y*_-b,i[2]=b*_-y,i[6]=d*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vM,t,xM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Rc.crossVectors(ri,es),l[0]=es.x,l[4]=Rc.x,l[8]=ri.x,l[1]=es.y,l[5]=Rc.y,l[9]=ri.y,l[2]=es.z,l[6]=Rc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],b=s[2],T=s[6],M=s[10],v=s[14],L=s[3],w=s[7],U=s[11],P=s[15],I=l[0],O=l[4],V=l[8],A=l[12],D=l[1],k=l[5],Y=l[9],Q=l[13],ct=l[2],rt=l[6],F=l[10],G=l[14],nt=l[3],xt=l[7],St=l[11],z=l[15];return c[0]=f*I+d*D+m*ct+p*nt,c[4]=f*O+d*k+m*rt+p*xt,c[8]=f*V+d*Y+m*F+p*St,c[12]=f*A+d*Q+m*G+p*z,c[1]=g*I+_*D+x*ct+y*nt,c[5]=g*O+_*k+x*rt+y*xt,c[9]=g*V+_*Y+x*F+y*St,c[13]=g*A+_*Q+x*G+y*z,c[2]=b*I+T*D+M*ct+v*nt,c[6]=b*O+T*k+M*rt+v*xt,c[10]=b*V+T*Y+M*F+v*St,c[14]=b*A+T*Q+M*G+v*z,c[3]=L*I+w*D+U*ct+P*nt,c[7]=L*O+w*k+U*rt+P*xt,c[11]=L*V+w*Y+U*F+P*St,c[15]=L*A+w*Q+U*G+P*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],y=t[14],b=t[3],T=t[7],M=t[11],v=t[15],L=m*y-p*x,w=d*y-p*_,U=d*x-m*_,P=f*y-p*g,I=f*x-m*g,O=f*_-d*g;return i*(T*L-M*w+v*U)-s*(b*L-M*P+v*I)+l*(b*w-T*P+v*O)-c*(b*U-T*I+M*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],y=t[11],b=t[12],T=t[13],M=t[14],v=t[15],L=_*M*p-T*x*p+T*m*y-d*M*y-_*m*v+d*x*v,w=b*x*p-g*M*p-b*m*y+f*M*y+g*m*v-f*x*v,U=g*T*p-b*_*p+b*d*y-f*T*y-g*d*v+f*_*v,P=b*_*m-g*T*m-b*d*x+f*T*x+g*d*M-f*_*M,I=i*L+s*w+l*U+c*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return t[0]=L*O,t[1]=(T*x*c-_*M*c-T*l*y+s*M*y+_*l*v-s*x*v)*O,t[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*v+s*m*v)*O,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*y-s*m*y)*O,t[4]=w*O,t[5]=(g*M*c-b*x*c+b*l*y-i*M*y-g*l*v+i*x*v)*O,t[6]=(b*m*c-f*M*c-b*l*p+i*M*p+f*l*v-i*m*v)*O,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*y+i*m*y)*O,t[8]=U*O,t[9]=(b*_*c-g*T*c-b*s*y+i*T*y+g*s*v-i*_*v)*O,t[10]=(f*T*c-b*d*c+b*s*p-i*T*p-f*s*v+i*d*v)*O,t[11]=(g*d*c-f*_*c-g*s*p+i*_*p+f*s*y-i*d*y)*O,t[12]=P*O,t[13]=(g*T*l-b*_*l+b*s*x-i*T*x-g*s*M+i*_*M)*O,t[14]=(b*d*l-f*T*l-b*s*m+i*T*m+f*s*M-i*d*M)*O,t[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*x+i*d*x)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,x=c*p,y=c*g,b=c*_,T=f*g,M=f*_,v=d*_,L=m*p,w=m*g,U=m*_,P=s.x,I=s.y,O=s.z;return l[0]=(1-(T+v))*P,l[1]=(y+U)*P,l[2]=(b-w)*P,l[3]=0,l[4]=(y-U)*I,l[5]=(1-(x+v))*I,l[6]=(M+L)*I,l[7]=0,l[8]=(b+w)*O,l[9]=(M-L)*O,l[10]=(1-(x+T))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Cr.set(l[0],l[1],l[2]).length();const f=Cr.set(l[4],l[5],l[6]).length(),d=Cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),wi.copy(this);const p=1/c,g=1/f,_=1/d;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=Vi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(d===Vi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===eu)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=Vi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(d===Vi)b=-2/(f-c),T=-(f+c)/(f-c);else if(d===eu)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Cr=new Z,wi=new tn,vM=new Z(0,0,0),xM=new Z(1,1,1),es=new Z,Rc=new Z,ri=new Z,b_=new tn,T_=new Fs;class ji{constructor(t=0,i=0,s=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return b_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T_.setFromEuler(this),this.setFromQuaternion(T_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SM=0;const A_=new Z,wr=new Fs,ga=new tn,Cc=new Z,jo=new Z,yM=new Z,MM=new Fs,R_=new Z(1,0,0),C_=new Z(0,1,0),w_=new Z(0,0,1),D_={type:"added"},EM={type:"removed"},Dr={type:"childadded",child:null},Nh={type:"childremoved",child:null};class En extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new Z,i=new ji,s=new Fs,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ge}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(R_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(w_,t)}translateOnAxis(t,i){return A_.copy(t).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(R_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(w_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cc.copy(t):Cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,Cc,this.up):ga.lookAt(Cc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(ga),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(D_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(EM),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(D_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,yM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,MM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new Z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Z,_a=new Z,Oh=new Z,va=new Z,Ur=new Z,Lr=new Z,U_=new Z,Ph=new Z,zh=new Z,Ih=new Z,Fh=new an,Bh=new an,Hh=new an;class Ui{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),_a.subVectors(s,i),Oh.subVectors(t,i);const f=Di.dot(Di),d=Di.dot(_a),m=Di.dot(Oh),p=_a.dot(_a),g=_a.dot(Oh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,b=(f*g-d*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(f,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Fh.setScalar(0),Bh.setScalar(0),Hh.setScalar(0),Fh.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,s),Hh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Fh,c.x),f.addScaledVector(Bh,c.y),f.addScaledVector(Hh,c.z),f}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),_a.subVectors(t,i),Di.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Di.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Ur.subVectors(l,s),Lr.subVectors(c,s),Ph.subVectors(t,s);const m=Ur.dot(Ph),p=Lr.dot(Ph);if(m<=0&&p<=0)return i.copy(s);zh.subVectors(t,l);const g=Ur.dot(zh),_=Lr.dot(zh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ur,f);Ih.subVectors(t,c);const y=Ur.dot(Ih),b=Lr.dot(Ih);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Lr,d);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return U_.subVectors(c,l),d=(_-g)/(_-g+(y-b)),i.copy(l).addScaledVector(U_,d);const v=1/(M+T+x);return f=T*v,d=x*v,i.copy(s).addScaledVector(Ur,f).addScaledVector(Lr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Gh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=cM(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Gh(f,c,t+1/3),this.g=Gh(f,c,t),this.b=Gh(f,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=jv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ue.workingToColorSpace(Fn.copy(this),t),Math.round(Ee(Fn.r*255,0,255))*65536+Math.round(Ee(Fn.g*255,0,255))*256+Math.round(Ee(Fn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Si){Ue.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(wc);const s=Eh(ns.h,wc.h,i),l=Eh(ns.s,wc.s,i),c=Eh(ns.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Re;Re.NAMES=jv;let bM=0;class jr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Hr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=sd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ad&&(s.blendSrc=this.blendSrc),this.blendDst!==sd&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mp extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new Z,Dc=new fe;let TM=0;class qi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=__,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==__&&(t.usage=this.usage),t}}class Zv extends qi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Kv extends qi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pn extends qi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let AM=0;const xi=new tn,Vh=new En,Nr=new Z,oi=new ol,Zo=new ol,yn=new Z;class Jn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qv(t)?Kv:Zv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new pn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(oi.min,Zo.min),oi.expandByPoint(yn),yn.addVectors(oi.max,Zo.max),oi.expandByPoint(yn)):(oi.expandByPoint(Zo.min),oi.expandByPoint(Zo.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Nr.fromBufferAttribute(t,p),yn.add(Nr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new Z,m[V]=new Z;const p=new Z,g=new Z,_=new Z,x=new fe,y=new fe,b=new fe,T=new Z,M=new Z;function v(V,A,D){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,D),x.fromBufferAttribute(c,V),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,D),g.sub(p),_.sub(p),y.sub(x),b.sub(x);const k=1/(y.x*b.y-b.x*y.y);isFinite(k)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(k),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(k),d[V].add(T),d[A].add(T),d[D].add(T),m[V].add(M),m[A].add(M),m[D].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let V=0,A=L.length;V<A;++V){const D=L[V],k=D.start,Y=D.count;for(let Q=k,ct=k+Y;Q<ct;Q+=3)v(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const w=new Z,U=new Z,P=new Z,I=new Z;function O(V){P.fromBufferAttribute(l,V),I.copy(P);const A=d[V];w.copy(A),w.sub(P.multiplyScalar(P.dot(A))).normalize(),U.crossVectors(I,A);const k=U.dot(m[V])<0?-1:1;f.setXYZW(V,w.x,w.y,w.z,k)}for(let V=0,A=L.length;V<A;++V){const D=L[V],k=D.start,Y=D.count;for(let Q=k,ct=k+Y;Q<ct;Q+=3)O(t.getX(Q+0)),O(t.getX(Q+1)),O(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new Z,c=new Z,f=new Z,d=new Z,m=new Z,p=new Z,g=new Z,_=new Z;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let v=0;v<g;v++)x[b++]=p[y++]}return new qi(x,g,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=t(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new tn,ws=new ou,Uc=new ru,N_=new Z,Lc=new Z,Nc=new Z,Oc=new Z,kh=new Z,Pc=new Z,O_=new Z,zc=new Z;class Ni extends En{constructor(t=new Jn,i=new mp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(kh.fromBufferAttribute(_,t),f?Pc.addScaledVector(kh,g):Pc.addScaledVector(kh.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Uc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Uc,N_)===null||ws.origin.distanceToSquared(N_)>(t.far-t.near)**2))&&(L_.copy(c).invert(),ws.copy(t.ray).applyMatrix4(L_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=f[M.materialIndex],L=Math.max(M.start,y.start),w=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=L,P=w;U<P;U+=3){const I=d.getX(U),O=d.getX(U+1),V=d.getX(U+2);l=Ic(this,v,t,s,p,g,_,I,O,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=b,v=T;M<v;M+=3){const L=d.getX(M),w=d.getX(M+1),U=d.getX(M+2);l=Ic(this,f,t,s,p,g,_,L,w,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=f[M.materialIndex],L=Math.max(M.start,y.start),w=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=L,P=w;U<P;U+=3){const I=U,O=U+1,V=U+2;l=Ic(this,v,t,s,p,g,_,I,O,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,v=T;M<v;M+=3){const L=M,w=M+1,U=M+2;l=Ic(this,f,t,s,p,g,_,L,w,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function RM(r,t,i,s,l,c,f,d){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===ls,d),m===null)return null;zc.copy(d),zc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:r}}function Ic(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const g=RM(r,t,i,s,Lc,Nc,Oc,O_);if(g){const _=new Z;Ui.getBarycoord(O_,Lc,Nc,Oc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,d,m,p,_,new fe)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,d,m,p,_,new fe)),f&&(g.normal=Ui.getInterpolatedAttribute(f,d,m,p,_,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Z,materialIndex:0};Ui.getNormal(Lc,Nc,Oc,x.normal),g.face=x,g.barycoord=_}return g}class ll extends Jn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(_,2));function b(T,M,v,L,w,U,P,I,O,V,A){const D=U/O,k=P/V,Y=U/2,Q=P/2,ct=I/2,rt=O+1,F=V+1;let G=0,nt=0;const xt=new Z;for(let St=0;St<F;St++){const z=St*k-Q;for(let et=0;et<rt;et++){const mt=et*D-Y;xt[T]=mt*L,xt[M]=z*w,xt[v]=ct,p.push(xt.x,xt.y,xt.z),xt[T]=0,xt[M]=0,xt[v]=I>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(et/O),_.push(1-St/V),G+=1}}for(let St=0;St<V;St++)for(let z=0;z<O;z++){const et=x+z+rt*St,mt=x+z+rt*(St+1),At=x+(z+1)+rt*(St+1),It=x+(z+1)+rt*St;m.push(et,mt,It),m.push(mt,At,It),nt+=6}d.addGroup(y,nt,A),y+=nt,x+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)t[l]=s[l]}return t}function CM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Qv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const wM={clone:qr,merge:Gn};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=CM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Jv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new Z,P_=new fe,z_=new fe;class yi extends Jv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,P_,z_),i.subVectors(z_,P_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Or=-90,Pr=1;class LM extends En{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Or,Pr,t,i);l.layers=this.layers,this.add(l);const c=new yi(Or,Pr,t,i);c.layers=this.layers,this.add(c);const f=new yi(Or,Pr,t,i);f.layers=this.layers,this.add(f);const d=new yi(Or,Pr,t,i);d.layers=this.layers,this.add(d);const m=new yi(Or,Pr,t,i);m.layers=this.layers,this.add(m);const p=new yi(Or,Pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===eu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class $v extends Vn{constructor(t=[],i=Is,s,l,c,f,d,m,p,g){super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tx extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new $v(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:ya});c.uniforms.tEquirect.value=i;const f=new Ni(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Bn),new LM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Fc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class OM extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class PM extends Vn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=On,g=On,_,x){super(null,f,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new Z,zM=new Z,IM=new ge;class as{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wh.subVectors(s,i).cross(zM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||IM.getNormalMatrix(t),l=this.coplanarPoint(Wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new ru,FM=new fe(.5,.5),Bc=new Z;class gp{constructor(t=new as,i=new as,s=new as,l=new as,c=new as,f=new as){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],b=c[8],T=c[9],M=c[10],v=c[11],L=c[12],w=c[13],U=c[14],P=c[15];if(l[0].setComponents(p-f,y-g,v-b,P-L).normalize(),l[1].setComponents(p+f,y+g,v+b,P+L).normalize(),l[2].setComponents(p+d,y+_,v+T,P+w).normalize(),l[3].setComponents(p-d,y-_,v-T,P-w).normalize(),s)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,v-M,P-U).normalize();else if(l[4].setComponents(p-m,y-x,v-M,P-U).normalize(),i===Vi)l[5].setComponents(p+m,y+x,v+M,P+U).normalize();else if(i===eu)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=FM.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _p extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new Z,au=new Z,I_=new tn,Ko=new ou,Hc=new ru,qh=new Z,F_=new Z;class ex extends En{constructor(t=new Jn,i=new _p){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new pn(s,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;I_.copy(l).invert(),Ko.copy(t.ray).applyMatrix4(I_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let T=y,M=b-1;T<M;T+=p){const v=g.getX(T),L=g.getX(T+1),w=Gc(this,t,Ko,m,v,L,T);w&&i.push(w)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(y),v=Gc(this,t,Ko,m,T,M,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let T=y,M=b-1;T<M;T+=p){const v=Gc(this,t,Ko,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Gc(this,t,Ko,m,b-1,y,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(iu.fromBufferAttribute(d,l),au.fromBufferAttribute(d,c),i.distanceSqToSegment(iu,au,qh,F_)>s)return;qh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(qh);if(!(p<t.near||p>t.far))return{distance:p,point:F_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const B_=new Z,H_=new Z;class BM extends ex{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)B_.fromBufferAttribute(i,l),H_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+B_.distanceTo(H_);t.setAttribute("lineDistance",new pn(s,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sl extends Vn{constructor(t,i,s=Yi,l,c,f,d=On,m=On,p,g=ba,_=1){if(g!==ba&&g!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class HM extends sl{constructor(t,i=Yi,s=Is,l,c,f=On,d=On,m,p=ba){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class nx extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vp extends Jn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],y=[];let b=0;const T=[],M=s/2;let v=0;L(),f===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(g),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(y,2));function L(){const U=new Z,P=new Z;let I=0;const O=(i-t)/s;for(let V=0;V<=c;V++){const A=[],D=V/c,k=D*(i-t)+t;for(let Y=0;Y<=l;Y++){const Q=Y/l,ct=Q*m+d,rt=Math.sin(ct),F=Math.cos(ct);P.x=k*rt,P.y=-D*s+M,P.z=k*F,_.push(P.x,P.y,P.z),U.set(rt,O,F).normalize(),x.push(U.x,U.y,U.z),y.push(Q,1-D),A.push(b++)}T.push(A)}for(let V=0;V<l;V++)for(let A=0;A<c;A++){const D=T[A][V],k=T[A+1][V],Y=T[A+1][V+1],Q=T[A][V+1];(t>0||A!==0)&&(g.push(D,k,Q),I+=3),(i>0||A!==c-1)&&(g.push(k,Y,Q),I+=3)}p.addGroup(v,I,0),v+=I}function w(U){const P=b,I=new fe,O=new Z;let V=0;const A=U===!0?t:i,D=U===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,M*D,0),x.push(0,D,0),y.push(.5,.5),b++;const k=b;for(let Y=0;Y<=l;Y++){const ct=Y/l*m+d,rt=Math.cos(ct),F=Math.sin(ct);O.x=A*F,O.y=M*D,O.z=A*rt,_.push(O.x,O.y,O.z),x.push(0,D,0),I.x=rt*.5+.5,I.y=F*.5*D+.5,y.push(I.x,I.y),b++}for(let Y=0;Y<l;Y++){const Q=P+Y,ct=k+Y;U===!0?g.push(ct,ct+1,Q):g.push(ct+1,ct,Q),V+=3}p.addGroup(v,V,U===!0?1:2),v+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xp extends vp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,s,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new xp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lu extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,y=[],b=[],T=[],M=[];for(let v=0;v<g;v++){const L=v*x-f;for(let w=0;w<p;w++){const U=w*_-c;b.push(U,-L,0),T.push(0,0,1),M.push(w/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const w=L+p*v,U=L+p*(v+1),P=L+1+p*(v+1),I=L+1+p*v;y.push(w,U,I),y.push(U,P,I)}this.setIndex(y),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sp extends Jn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const g=[],_=new Z,x=new Z,y=[],b=[],T=[],M=[];for(let v=0;v<=s;v++){const L=[],w=v/s;let U=0;v===0&&f===0?U=.5/i:v===s&&m===Math.PI&&(U=-.5/i);for(let P=0;P<=i;P++){const I=P/i;_.x=-t*Math.cos(l+I*c)*Math.sin(f+w*d),_.y=t*Math.cos(f+w*d),_.z=t*Math.sin(l+I*c)*Math.sin(f+w*d),b.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),M.push(I+U,1-w),L.push(p++)}g.push(L)}for(let v=0;v<s;v++)for(let L=0;L<i;L++){const w=g[v][L+1],U=g[v][L],P=g[v+1][L],I=g[v+1][L+1];(v!==0||f>0)&&y.push(w,U,I),(v!==s-1||m<Math.PI)&&y.push(U,P,I)}this.setIndex(y),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class GM extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class VM extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wv,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kM extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ix extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Yh=new tn,G_=new Z,V_=new Z;class WM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),Yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class yp extends Jv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qM extends WM{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k_ extends ix{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new qM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class YM extends ix{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class jM extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const X_=new tn;class ZM{constructor(t,i,s=0,l=1/0){this.ray=new ou(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):De("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return X_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X_),this}intersectObject(t,i=!0,s=[]){return Kd(t,this,s,i),s.sort(W_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Kd(t[l],this,s,i);return s.sort(W_),s}}function W_(r,t){return r.distance-t.distance}function Kd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Kd(c[f],t,i,!0)}}class q_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class KM extends BM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Re(s),l=new Re(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let x=0,y=0,b=-d;x<=i;x++,b+=f){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const T=x===c?s:l;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const g=new Jn;g.setAttribute("position",new pn(m,3)),g.setAttribute("color",new pn(p,3));const _=new _p({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Y_=new Z;let Vc,jh;class Zh extends En{constructor(t=new Z(0,0,1),i=new Z(0,0,0),s=1,l=16776960,c=s*.2,f=c*.2){super(),this.type="ArrowHelper",Vc===void 0&&(Vc=new Jn,Vc.setAttribute("position",new pn([0,0,0,0,1,0],3)),jh=new xp(.5,1,5,1),jh.translate(0,-.5,0)),this.position.copy(i),this.line=new ex(Vc,new _p({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ni(jh,new mp({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,f)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Y_.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Y_,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class QM extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function j_(r,t,i,s){const l=JM(s);switch(i){case Vv:return r*t;case Xv:return r*t/l.components*l.byteLength;case lp:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case cp:return r*t*2/l.components*l.byteLength;case kv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case up:return r*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:case Sd:return Math.max(r,16)*Math.max(t,8)/4;case _d:case xd:return Math.max(r,8)*Math.max(t,8)/2;case yd:case Md:case bd:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ed:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JM(r){switch(r){case li:case Fv:return{byteLength:1,components:1};case nl:case Bv:case Ea:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Yi:case sp:case Gi:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ax(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function $M(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<_.length;y++){const b=_[x],T=_[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,b=_.length;y<b;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
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
#endif`,nE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
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
#endif`,cE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dE=`#ifdef USE_IRIDESCENCE
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
#endif`,pE=`#ifdef USE_BUMPMAP
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
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
#endif`,EE=`#define PI 3.141592653589793
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TE=`vec3 transformedNormal = objectNormal;
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
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
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
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
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
#endif`,JE=`uniform sampler2D dfgLUT;
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
}`,$E=`
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cb=`#if defined( USE_POINTS_UV )
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
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
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
#endif`,gb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mb=`#ifdef USE_NORMALMAP
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
#endif`,Eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fb=`float getShadowMask() {
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
}`,Bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hb=`#ifdef USE_SKINNING
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
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vb=`#ifdef USE_SKINNING
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
#endif`,kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t1=`uniform sampler2D t2D;
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
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
}`,r1=`#if DEPTH_PACKING == 3200
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
}`,o1=`#define DISTANCE
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
}`,l1=`#define DISTANCE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
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
}`,h1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#define LAMBERT
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
}`,g1=`#define LAMBERT
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
}`,_1=`#define MATCAP
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
}`,v1=`#define MATCAP
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
}`,x1=`#define NORMAL
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
}`,S1=`#define NORMAL
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
}`,y1=`#define PHONG
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
}`,M1=`#define PHONG
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
}`,E1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,T1=`#define TOON
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
}`,A1=`#define TOON
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
}`,R1=`uniform float size;
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
}`,C1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,D1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,L1=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:tE,alphahash_pars_fragment:eE,alphamap_fragment:nE,alphamap_pars_fragment:iE,alphatest_fragment:aE,alphatest_pars_fragment:sE,aomap_fragment:rE,aomap_pars_fragment:oE,batching_pars_vertex:lE,batching_vertex:cE,begin_vertex:uE,beginnormal_vertex:fE,bsdfs:hE,iridescence_fragment:dE,bumpmap_pars_fragment:pE,clipping_planes_fragment:mE,clipping_planes_pars_fragment:gE,clipping_planes_pars_vertex:_E,clipping_planes_vertex:vE,color_fragment:xE,color_pars_fragment:SE,color_pars_vertex:yE,color_vertex:ME,common:EE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:TE,displacementmap_pars_vertex:AE,displacementmap_vertex:RE,emissivemap_fragment:CE,emissivemap_pars_fragment:wE,colorspace_fragment:DE,colorspace_pars_fragment:UE,envmap_fragment:LE,envmap_common_pars_fragment:NE,envmap_pars_fragment:OE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:qE,envmap_vertex:zE,fog_vertex:IE,fog_pars_vertex:FE,fog_fragment:BE,fog_pars_fragment:HE,gradientmap_pars_fragment:GE,lightmap_pars_fragment:VE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:XE,lights_pars_begin:WE,lights_toon_fragment:YE,lights_toon_pars_fragment:jE,lights_phong_fragment:ZE,lights_phong_pars_fragment:KE,lights_physical_fragment:QE,lights_physical_pars_fragment:JE,lights_fragment_begin:$E,lights_fragment_maps:tb,lights_fragment_end:eb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:ab,logdepthbuf_vertex:sb,map_fragment:rb,map_pars_fragment:ob,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:fb,morphinstance_vertex:hb,morphcolor_vertex:db,morphnormal_vertex:pb,morphtarget_pars_vertex:mb,morphtarget_vertex:gb,normal_fragment_begin:_b,normal_fragment_maps:vb,normal_pars_fragment:xb,normal_pars_vertex:Sb,normal_vertex:yb,normalmap_pars_fragment:Mb,clearcoat_normal_fragment_begin:Eb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Tb,iridescence_pars_fragment:Ab,opaque_fragment:Rb,packing:Cb,premultiplied_alpha_fragment:wb,project_vertex:Db,dithering_fragment:Ub,dithering_pars_fragment:Lb,roughnessmap_fragment:Nb,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:zb,shadowmap_vertex:Ib,shadowmask_pars_fragment:Fb,skinbase_vertex:Bb,skinning_pars_vertex:Hb,skinning_vertex:Gb,skinnormal_vertex:Vb,specularmap_fragment:kb,specularmap_pars_fragment:Xb,tonemapping_fragment:Wb,tonemapping_pars_fragment:qb,transmission_fragment:Yb,transmission_pars_fragment:jb,uv_pars_fragment:Zb,uv_pars_vertex:Kb,uv_vertex:Qb,worldpos_vertex:Jb,background_vert:$b,background_frag:t1,backgroundCube_vert:e1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:a1,depth_vert:s1,depth_frag:r1,distance_vert:o1,distance_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:h1,meshbasic_vert:d1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:S1,meshphong_vert:y1,meshphong_frag:M1,meshphysical_vert:E1,meshphysical_frag:b1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:R1,points_frag:C1,shadow_vert:w1,shadow_frag:D1,sprite_vert:U1,sprite_frag:L1},zt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Gn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Gn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Gn([zt.points,zt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Gn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Gn([zt.common,zt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Gn([zt.sprite,zt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Gn([zt.common,zt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Gn([zt.lights,zt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const kc={r:0,b:0,g:0},Us=new ji,N1=new tn;function O1(r,t,i,s,l,c,f){const d=new Re(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function b(w){let U=w.isScene===!0?w.background:null;return U&&U.isTexture&&(U=(w.backgroundBlurriness>0?i:t).get(U)),U}function T(w){let U=!1;const P=b(w);P===null?v(d,m):P&&P.isColor&&(v(P,1),U=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(w,U){const P=b(U);P&&(P.isCubeTexture||P.mapping===su)?(g===void 0&&(g=new Ni(new ll(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:qr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(U.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(N1.makeRotationFromEuler(Us)),g.material.toneMapped=Ue.getTransfer(P.colorSpace)!==Ve,(_!==P||x!==P.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,x=P.version,y=r.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ni(new lu(2,2),new Zi({name:"BackgroundMaterial",uniforms:qr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(P.colorSpace)!==Ve,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,y=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function v(w,U){w.getRGB(kc,Qv(r)),s.buffers.color.setClear(kc.r,kc.g,kc.b,U,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,U=1){d.set(w),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,v(d,m)},render:T,addToRenderList:M,dispose:L}}function P1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(D,k,Y,Q,ct){let rt=!1;const F=_(Q,Y,k);c!==F&&(c=F,p(c.object)),rt=y(D,Q,Y,ct),rt&&b(D,Q,Y,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(rt||f)&&(f=!1,U(D,k,Y,Q),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function _(D,k,Y){const Q=Y.wireframe===!0;let ct=s[D.id];ct===void 0&&(ct={},s[D.id]=ct);let rt=ct[k.id];rt===void 0&&(rt={},ct[k.id]=rt);let F=rt[Q];return F===void 0&&(F=x(m()),rt[Q]=F),F}function x(D){const k=[],Y=[],Q=[];for(let ct=0;ct<i;ct++)k[ct]=0,Y[ct]=0,Q[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:Q,object:D,attributes:{},index:null}}function y(D,k,Y,Q){const ct=c.attributes,rt=k.attributes;let F=0;const G=Y.getAttributes();for(const nt in G)if(G[nt].location>=0){const St=ct[nt];let z=rt[nt];if(z===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),St===void 0||St.attribute!==z||z&&St.data!==z.data)return!0;F++}return c.attributesNum!==F||c.index!==Q}function b(D,k,Y,Q){const ct={},rt=k.attributes;let F=0;const G=Y.getAttributes();for(const nt in G)if(G[nt].location>=0){let St=rt[nt];St===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(St=D.instanceColor));const z={};z.attribute=St,St&&St.data&&(z.data=St.data),ct[nt]=z,F++}c.attributes=ct,c.attributesNum=F,c.index=Q}function T(){const D=c.newAttributes;for(let k=0,Y=D.length;k<Y;k++)D[k]=0}function M(D){v(D,0)}function v(D,k){const Y=c.newAttributes,Q=c.enabledAttributes,ct=c.attributeDivisors;Y[D]=1,Q[D]===0&&(r.enableVertexAttribArray(D),Q[D]=1),ct[D]!==k&&(r.vertexAttribDivisor(D,k),ct[D]=k)}function L(){const D=c.newAttributes,k=c.enabledAttributes;for(let Y=0,Q=k.length;Y<Q;Y++)k[Y]!==D[Y]&&(r.disableVertexAttribArray(Y),k[Y]=0)}function w(D,k,Y,Q,ct,rt,F){F===!0?r.vertexAttribIPointer(D,k,Y,ct,rt):r.vertexAttribPointer(D,k,Y,Q,ct,rt)}function U(D,k,Y,Q){T();const ct=Q.attributes,rt=Y.getAttributes(),F=k.defaultAttributeValues;for(const G in rt){const nt=rt[G];if(nt.location>=0){let xt=ct[G];if(xt===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const St=xt.normalized,z=xt.itemSize,et=t.get(xt);if(et===void 0)continue;const mt=et.buffer,At=et.type,It=et.bytesPerElement,it=At===r.INT||At===r.UNSIGNED_INT||xt.gpuType===sp;if(xt.isInterleavedBufferAttribute){const ht=xt.data,Dt=ht.stride,Wt=xt.offset;if(ht.isInstancedInterleavedBuffer){for(let Vt=0;Vt<nt.locationSize;Vt++)v(nt.location+Vt,ht.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Vt=0;Vt<nt.locationSize;Vt++)M(nt.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Vt=0;Vt<nt.locationSize;Vt++)w(nt.location+Vt,z/nt.locationSize,At,St,Dt*It,(Wt+z/nt.locationSize*Vt)*It,it)}else{if(xt.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)v(nt.location+ht,xt.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ht=0;ht<nt.locationSize;ht++)M(nt.location+ht);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ht=0;ht<nt.locationSize;ht++)w(nt.location+ht,z/nt.locationSize,At,St,z*It,z/nt.locationSize*ht*It,it)}}else if(F!==void 0){const St=F[G];if(St!==void 0)switch(St.length){case 2:r.vertexAttrib2fv(nt.location,St);break;case 3:r.vertexAttrib3fv(nt.location,St);break;case 4:r.vertexAttrib4fv(nt.location,St);break;default:r.vertexAttrib1fv(nt.location,St)}}}}L()}function P(){V();for(const D in s){const k=s[D];for(const Y in k){const Q=k[Y];for(const ct in Q)g(Q[ct].object),delete Q[ct];delete k[Y]}delete s[D]}}function I(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const Y in k){const Q=k[Y];for(const ct in Q)g(Q[ct].object),delete Q[ct];delete k[Y]}delete s[D.id]}function O(D){for(const k in s){const Y=s[k];if(Y[D.id]===void 0)continue;const Q=Y[D.id];for(const ct in Q)g(Q[ct].object),delete Q[ct];delete Y[D.id]}}function V(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:M,disableUnusedAttributes:L}}function z1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],g[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let b=0;for(let T=0;T<_;T++)b+=g[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function I1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Li&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const V=O===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==li&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!V)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(re("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:U,maxSamples:P,samples:I}}function F1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new as,d=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const b=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const L=c?0:s,w=L*4;let U=v.clippingState||null;m.value=U,U=g(b,x,w,y);for(let P=0;P!==w;++P)U[P]=i[P];v.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,y,b){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const v=y+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<v)&&(M=new Float32Array(v));for(let w=0,U=y;w!==T;++w,U+=4)f.copy(_[w]).applyMatrix4(L,d),f.normal.toArray(M,U),M[U+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function B1(r){let t=new WeakMap;function i(f,d){return d===dd?f.mapping=Is:d===pd&&(f.mapping=kr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===dd||d===pd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new tx(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const rs=4,Z_=[.125,.215,.35,.446,.526,.582],Os=20,H1=256,Qo=new yp,K_=new Re;let Kh=null,Qh=0,Jh=0,$h=!1;const G1=new Z;class Q_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=G1}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,Jh),this._renderer.xr.enabled=$h,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ea,format:Li,colorSpace:Wr,depthBuffer:!1},l=J_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V1(c)),this._blurMaterial=X1(c,t,i),this._ggxMaterial=k1(c,t,i)}return l}_compileMaterial(t){const i=new Ni(new Jn,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(K_),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new ll,new mp({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,v=!0):(M.color.copy(K_),v=!0);for(let w=0;w<6;w++){const U=w%3;U===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[w],c.y,c.z)):U===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[w]));const P=this._cubeSize;zr(l,U*P,w>2?P:0,P,P),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=y,_.autoClear=x,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Is||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,y=_*x,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-rs?s-b+rs:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,zr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,zr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(d,Qo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Os-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Os;M>Os&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const v=[];let L=0;for(let O=0;O<Os;++O){const V=O/T,A=Math.exp(-V*V/2);v.push(A),O===0?L+=A:O<M&&(L+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/L;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:w}=this;x.dTheta.value=b,x.mipInt.value=w-s;const U=this._sizeLods[l],P=3*U*(l>w-rs?l-w+rs:0),I=4*(this._cubeSize-U);zr(i,P,I,3*U,2*U),m.setRenderTarget(i),m.render(_,Qo)}}function V1(r){const t=[],i=[],s=[];let l=r;const c=r-rs+1+Z_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-rs?m=Z_[f-r+rs-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,T=3,M=2,v=1,L=new Float32Array(T*b*y),w=new Float32Array(M*b*y),U=new Float32Array(v*b*y);for(let I=0;I<y;I++){const O=I%3*2/3-1,V=I>2?0:-1,A=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];L.set(A,T*b*I),w.set(x,M*b*I);const D=[I,I,I,I,I,I];U.set(D,v*b*I)}const P=new Jn;P.setAttribute("position",new qi(L,T)),P.setAttribute("uv",new qi(w,M)),P.setAttribute("faceIndex",new qi(U,v)),s.push(new Ni(P,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function J_(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function k1(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function X1(r,t,i){const s=new Float32Array(Os),l=new Z(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function $_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function tv(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function W1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===dd||m===pd,g=m===Is||m===kr;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function q1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&al("WebGLRenderer: "+s+" extension not supported."),l}}}function Y1(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,b=_.attributes.position;let T=0;if(y!==null){const L=y.array;T=y.version;for(let w=0,U=L.length;w<U;w+=3){const P=L[w+0],I=L[w+1],O=L[w+2];x.push(P,I,I,O,O,P)}}else if(b!==void 0){const L=b.array;T=b.version;for(let w=0,U=L.length/3-1;w<U;w+=3){const P=w+0,I=w+1,O=w+2;x.push(P,I,I,O,O,P)}}else return;const M=new(qv(x)?Kv:Zv)(x,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function j1(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,x*f,b),i.update(y,s,b))}function g(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,s,1)}function _(x,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,T,0,b);let v=0;for(let L=0;L<b;L++)v+=y[L]*T[L];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Z1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:De("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function K1(r,t,i){const s=new WeakMap,l=new an;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let D=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var y=D;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),T===!0&&(U=2),M===!0&&(U=3);let P=d.attributes.position.count*U,I=1;P>t.maxTextureSize&&(I=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*I*4*_),V=new Yv(O,P,I,_);V.type=Gi,V.needsUpdate=!0;const A=U*4;for(let k=0;k<_;k++){const Y=v[k],Q=L[k],ct=w[k],rt=P*I*4*k;for(let F=0;F<Y.count;F++){const G=F*A;b===!0&&(l.fromBufferAttribute(Y,F),O[rt+G+0]=l.x,O[rt+G+1]=l.y,O[rt+G+2]=l.z,O[rt+G+3]=0),T===!0&&(l.fromBufferAttribute(Q,F),O[rt+G+4]=l.x,O[rt+G+5]=l.y,O[rt+G+6]=l.z,O[rt+G+7]=0),M===!0&&(l.fromBufferAttribute(ct,F),O[rt+G+8]=l.x,O[rt+G+9]=l.y,O[rt+G+10]=l.z,O[rt+G+11]=ct.itemSize===4?l.w:1)}}x={count:_,texture:V,size:new fe(P,I)},s.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Q1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const J1={[Dv]:"LINEAR_TONE_MAPPING",[Uv]:"REINHARD_TONE_MAPPING",[Lv]:"CINEON_TONE_MAPPING",[Nv]:"ACES_FILMIC_TONE_MAPPING",[Pv]:"AGX_TONE_MAPPING",[zv]:"NEUTRAL_TONE_MAPPING",[Ov]:"CUSTOM_TONE_MAPPING"};function $1(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Wi(t,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),d=new Jn;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const m=new GM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ni(d,m),g=new yp(-1,1,1,-1,0,1);let _=null,x=null,y=!1,b,T=null,M=[],v=!1;this.setSize=function(L,w){c.setSize(L,w),f.setSize(L,w);for(let U=0;U<M.length;U++){const P=M[U];P.setSize&&P.setSize(L,w)}},this.setEffects=function(L){M=L,v=M.length>0&&M[0].isRenderPass===!0;const w=c.width,U=c.height;for(let P=0;P<M.length;P++){const I=M[P];I.setSize&&I.setSize(w,U)}},this.begin=function(L,w){if(y||L.toneMapping===Xi&&M.length===0)return!1;if(T=w,w!==null){const U=w.width,P=w.height;(c.width!==U||c.height!==P)&&this.setSize(U,P)}return v===!1&&L.setRenderTarget(c),b=L.toneMapping,L.toneMapping=Xi,!0},this.hasRenderPass=function(){return v},this.end=function(L,w){L.toneMapping=b,y=!0;let U=c,P=f;for(let I=0;I<M.length;I++){const O=M[I];if(O.enabled!==!1&&(O.render(L,P,U,w),O.needsSwap!==!1)){const V=U;U=P,P=V}}if(_!==L.outputColorSpace||x!==L.toneMapping){_=L.outputColorSpace,x=L.toneMapping,m.defines={},Ue.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const I=J1[x];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,L.setRenderTarget(T),L.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const sx=new Vn,Qd=new sl(1,1),rx=new Yv,ox=new gM,lx=new $v,ev=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),sv=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function uu(r,t){let i=nv[t];i===void 0&&(i=new Int32Array(t),nv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function tT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function nT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function iT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function aT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;sv.set(s),r.uniformMatrix2fv(this.addr,!1,sv),xn(i,s)}}function sT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;av.set(s),r.uniformMatrix3fv(this.addr,!1,av),xn(i,s)}}function rT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;iv.set(s),r.uniformMatrix4fv(this.addr,!1,iv),xn(i,s)}}function oT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function fT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function mT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Qd.compareFunction=i.isReversedDepthBuffer()?hp:fp,c=Qd):c=sx,i.setTexture2D(t||c,l)}function gT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ox,l)}function _T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||lx,l)}function vT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||rx,l)}function xT(r){switch(r){case 5126:return tT;case 35664:return eT;case 35665:return nT;case 35666:return iT;case 35674:return aT;case 35675:return sT;case 35676:return rT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return fT;case 36294:return hT;case 36295:return dT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return vT}}function ST(r,t){r.uniform1fv(this.addr,t)}function yT(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function MT(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function ET(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function bT(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function TT(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function AT(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function RT(r,t){r.uniform1iv(this.addr,t)}function CT(r,t){r.uniform2iv(this.addr,t)}function wT(r,t){r.uniform3iv(this.addr,t)}function DT(r,t){r.uniform4iv(this.addr,t)}function UT(r,t){r.uniform1uiv(this.addr,t)}function LT(r,t){r.uniform2uiv(this.addr,t)}function NT(r,t){r.uniform3uiv(this.addr,t)}function OT(r,t){r.uniform4uiv(this.addr,t)}function PT(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Qd:f=sx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function zT(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ox,c[f])}function IT(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||lx,c[f])}function FT(r,t,i){const s=this.cache,l=t.length,c=uu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||rx,c[f])}function BT(r){switch(r){case 5126:return ST;case 35664:return yT;case 35665:return MT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return LT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return FT}}class HT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xT(i.type)}}class GT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BT(i.type)}}class VT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const td=/(\w+)(\])?(\[|\.)?/g;function rv(r,t){r.seq.push(t),r.map[t.id]=t}function kT(r,t,i){const s=r.name,l=s.length;for(td.lastIndex=0;;){const c=td.exec(s),f=td.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){rv(i,p===void 0?new HT(d,r,t):new GT(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new VT(d),rv(i,_)),i=_}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);kT(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function ov(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const XT=37297;let WT=0;function qT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const lv=new ge;function YT(r){Ue._getMatrix(lv,Ue.workingColorSpace,r);const t=`mat3( ${lv.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(r)){case tu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function cv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+qT(r.getShaderSource(t),d)}else return c}function jT(r,t){const i=YT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ZT={[Dv]:"Linear",[Uv]:"Reinhard",[Lv]:"Cineon",[Nv]:"ACESFilmic",[Pv]:"AgX",[zv]:"Neutral",[Ov]:"Custom"};function KT(r,t){const i=ZT[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new Z;function QT(){Ue.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function $T(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function tA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function el(r){return r!==""}function uv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(eA,iA)}const nA=new Map;function iA(r,t){let i=ve[t];if(i===void 0){const s=nA.get(t);if(s!==void 0)i=ve[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(r){return r.replace(aA,sA)}function sA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function dv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const rA={[qc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function oA(r){return rA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lA={[Is]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function cA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":lA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const uA={[kr]:"ENVMAP_MODE_REFRACTION"};function fA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":uA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hA={[wv]:"ENVMAP_BLENDING_MULTIPLY",[Ky]:"ENVMAP_BLENDING_MIX",[Qy]:"ENVMAP_BLENDING_ADD"};function dA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":hA[r.combine]||"ENVMAP_BLENDING_NONE"}function pA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=oA(i),p=cA(i),g=fA(i),_=dA(i),x=pA(i),y=JT(i),b=$T(c),T=l.createProgram();let M,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),v.length>0&&(v+=`
`)):(M=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),v=[dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?ve.tonemapping_pars_fragment:"",i.toneMapping!==Xi?KT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,jT("linearToOutputTexel",i.outputColorSpace),QT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),f=Jd(f),f=uv(f,i),f=fv(f,i),d=Jd(d),d=uv(d,i),d=fv(d,i),f=hv(f),d=hv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=L+M+f,U=L+v+d,P=ov(l,l.VERTEX_SHADER,w),I=ov(l,l.FRAGMENT_SHADER,U);l.attachShader(T,P),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function O(k){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(T)||"",Q=l.getShaderInfoLog(P)||"",ct=l.getShaderInfoLog(I)||"",rt=Y.trim(),F=Q.trim(),G=ct.trim();let nt=!0,xt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,I);else{const St=cv(l,P,"vertex"),z=cv(l,I,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+rt+`
`+St+`
`+z)}else rt!==""?re("WebGLProgram: Program Info Log:",rt):(F===""||G==="")&&(xt=!1);xt&&(k.diagnostics={runnable:nt,programLog:rt,vertexShader:{log:F,prefix:M},fragmentShader:{log:G,prefix:v}})}l.deleteShader(P),l.deleteShader(I),V=new Jc(l,T),A=tA(l,T)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,XT)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let gA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new vA(t),i.set(t,s)),s}}class vA{constructor(t){this.id=gA++,this.code=t,this.usedTimes=0}}function xA(r,t,i,s,l,c,f){const d=new pp,m=new _A,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,D,k,Y,Q){const ct=Y.fog,rt=Q.geometry,F=A.isMeshStandardMaterial?Y.environment:null,G=(A.isMeshStandardMaterial?i:t).get(A.envMap||F),nt=G&&G.mapping===su?G.image.height:null,xt=b[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&re("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const St=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,z=St!==void 0?St.length:0;let et=0;rt.morphAttributes.position!==void 0&&(et=1),rt.morphAttributes.normal!==void 0&&(et=2),rt.morphAttributes.color!==void 0&&(et=3);let mt,At,It,it;if(xt){const we=Hi[xt];mt=we.vertexShader,At=we.fragmentShader}else mt=A.vertexShader,At=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),it=m.getFragmentShaderID(A);const ht=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Wt=Q.isInstancedMesh===!0,Vt=Q.isBatchedMesh===!0,xe=!!A.map,Qe=!!A.matcap,Se=!!G,_e=!!A.aoMap,Ce=!!A.lightMap,oe=!!A.bumpMap,Et=!!A.normalMap,B=!!A.displacementMap,ae=!!A.emissiveMap,Qt=!!A.metalnessMap,te=!!A.roughnessMap,Ct=A.anisotropy>0,N=A.clearcoat>0,E=A.dispersion>0,W=A.iridescence>0,ut=A.sheen>0,dt=A.transmission>0,ot=Ct&&!!A.anisotropyMap,Nt=N&&!!A.clearcoatMap,Rt=N&&!!A.clearcoatNormalMap,kt=N&&!!A.clearcoatRoughnessMap,se=W&&!!A.iridescenceMap,Mt=W&&!!A.iridescenceThicknessMap,bt=ut&&!!A.sheenColorMap,Ht=ut&&!!A.sheenRoughnessMap,Ft=!!A.specularMap,Ut=!!A.specularColorMap,pe=!!A.specularIntensityMap,q=dt&&!!A.transmissionMap,Ot=dt&&!!A.thicknessMap,Tt=!!A.gradientMap,Bt=!!A.alphaMap,yt=A.alphaTest>0,vt=!!A.alphaHash,wt=!!A.extensions;let le=Xi;A.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(le=r.toneMapping);const Fe={shaderID:xt,shaderType:A.type,shaderName:A.name,vertexShader:mt,fragmentShader:At,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&Q._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&Q.instanceColor!==null,instancingMorph:Wt&&Q.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Wr,alphaToCoverage:!!A.alphaToCoverage,map:xe,matcap:Qe,envMap:Se,envMapMode:Se&&G.mapping,envMapCubeUVHeight:nt,aoMap:_e,lightMap:Ce,bumpMap:oe,normalMap:Et,displacementMap:B,emissiveMap:ae,normalMapObjectSpace:Et&&A.normalMapType===tM,normalMapTangentSpace:Et&&A.normalMapType===Wv,metalnessMap:Qt,roughnessMap:te,anisotropy:Ct,anisotropyMap:ot,clearcoat:N,clearcoatMap:Nt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:W,iridescenceMap:se,iridescenceThicknessMap:Mt,sheen:ut,sheenColorMap:bt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Ut,specularIntensityMap:pe,transmission:dt,transmissionMap:q,thicknessMap:Ot,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===Hr&&A.alphaToCoverage===!1,alphaMap:Bt,alphaTest:yt,alphaHash:vt,combine:A.combine,mapUv:xe&&T(A.map.channel),aoMapUv:_e&&T(A.aoMap.channel),lightMapUv:Ce&&T(A.lightMap.channel),bumpMapUv:oe&&T(A.bumpMap.channel),normalMapUv:Et&&T(A.normalMap.channel),displacementMapUv:B&&T(A.displacementMap.channel),emissiveMapUv:ae&&T(A.emissiveMap.channel),metalnessMapUv:Qt&&T(A.metalnessMap.channel),roughnessMapUv:te&&T(A.roughnessMap.channel),anisotropyMapUv:ot&&T(A.anisotropyMap.channel),clearcoatMapUv:Nt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&T(A.sheenRoughnessMap.channel),specularMapUv:Ft&&T(A.specularMap.channel),specularColorMapUv:Ut&&T(A.specularColorMap.channel),specularIntensityMapUv:pe&&T(A.specularIntensityMap.channel),transmissionMapUv:q&&T(A.transmissionMap.channel),thicknessMapUv:Ot&&T(A.thicknessMap.channel),alphaMapUv:Bt&&T(A.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Et||Ct),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!rt.attributes.uv&&(xe||Bt),fog:!!ct,useFog:A.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Dt,skinning:Q.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:et,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:xe&&A.map.isVideoTexture===!0&&Ue.getTransfer(A.map.colorSpace)===Ve,decodeVideoTextureEmissive:ae&&A.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(A.emissiveMap.colorSpace)===Ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xa,flipSided:A.side===Qn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:wt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&A.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function v(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)D.push(k),D.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(L(D,A),w(D,A),D.push(r.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function L(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function w(A,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),A.push(d.mask)}function U(A){const D=b[A.type];let k;if(D){const Y=Hi[D];k=wM.clone(Y.uniforms)}else k=A.uniforms;return k}function P(A,D){let k=_.get(D);return k!==void 0?++k.usedTimes:(k=new mA(r,D,A,c),g.push(k),_.set(D,k)),k}function I(A){if(--A.usedTimes===0){const D=g.indexOf(A);g[D]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function O(A){m.remove(A)}function V(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:U,acquireProgram:P,releaseProgram:I,releaseShaderCache:O,programs:g,dispose:V}}function SA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function yA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function mv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,y,b,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:b,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function d(_,x,y,b,T,M){const v=f(_,x,y,b,T,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,b,T,M){const v=f(_,x,y,b,T,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||yA),s.length>1&&s.sort(x||pv),l.length>1&&l.sort(x||pv)}function g(){for(let _=t,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function MA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new mv,r.set(s,[f])):l>=c.length?(f=new mv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function EA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Re};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function bA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let TA=0;function AA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function RA(r){const t=new EA,i=bA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new tn,f=new tn;function d(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,b=0,T=0,M=0,v=0,L=0,w=0,U=0,P=0,I=0,O=0;p.sort(AA);for(let A=0,D=p.length;A<D;A++){const k=p[A],Y=k.color,Q=k.intensity,ct=k.distance;let rt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Xr?rt=k.shadow.map.texture:rt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=Y.r*Q,_+=Y.g*Q,x+=Y.b*Q;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],Q);O++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,nt=i.get(k);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,s.directionalShadow[y]=nt,s.directionalShadowMap[y]=rt,s.directionalShadowMatrix[y]=k.shadow.matrix,L++}s.directional[y]=F,y++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(Y).multiplyScalar(Q),F.distance=ct,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[T]=F;const G=k.shadow;if(k.map&&(s.spotLightMap[P]=k.map,P++,G.updateMatrices(k),k.castShadow&&I++),s.spotLightMatrix[T]=G.matrix,k.castShadow){const nt=i.get(k);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,s.spotShadow[T]=nt,s.spotShadowMap[T]=rt,U++}T++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(Y).multiplyScalar(Q),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=F,M++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const G=k.shadow,nt=i.get(k);nt.shadowIntensity=G.intensity,nt.shadowBias=G.bias,nt.shadowNormalBias=G.normalBias,nt.shadowRadius=G.radius,nt.shadowMapSize=G.mapSize,nt.shadowCameraNear=G.camera.near,nt.shadowCameraFar=G.camera.far,s.pointShadow[b]=nt,s.pointShadowMap[b]=rt,s.pointShadowMatrix[b]=k.shadow.matrix,w++}s.point[b]=F,b++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(Q),F.groundColor.copy(k.groundColor).multiplyScalar(Q),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==y||V.pointLength!==b||V.spotLength!==T||V.rectAreaLength!==M||V.hemiLength!==v||V.numDirectionalShadows!==L||V.numPointShadows!==w||V.numSpotShadows!==U||V.numSpotMaps!==P||V.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=U+P-I,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=O,V.directionalLength=y,V.pointLength=b,V.spotLength=T,V.rectAreaLength=M,V.hemiLength=v,V.numDirectionalShadows=L,V.numPointShadows=w,V.numSpotShadows=U,V.numSpotMaps=P,V.numLightProbes=O,s.version=TA++)}function m(p,g){let _=0,x=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const w=p[v];if(w.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),_++}else if(w.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(w.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(M),f.identity(),c.copy(w.matrixWorld),c.premultiply(M),f.extractRotation(c),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(w.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(M),x++}else if(w.isHemisphereLight){const U=s.hemi[T];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function gv(r){const t=new RA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function CA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new gv(r),t.set(l,[d])):c>=f.length?(d=new gv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
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
}`,UA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],LA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],_v=new tn,Jo=new Z,ed=new Z;function NA(r,t,i){let s=new gp;const l=new fe,c=new fe,f=new an,d=new kM,m=new XM,p={},g=i.maxTextureSize,_={[ls]:Qn,[Qn]:ls,[xa]:xa},x=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:wA,fragmentShader:DA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Jn;b.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let v=this.type;this.render=function(I,O,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===Uy&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=qc);const A=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(ya),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=v!==this.type;Q&&O.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(rt=>rt.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,rt=I.length;ct<rt;ct++){const F=I[ct],G=F.shadow;if(G===void 0){re("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const nt=G.getFrameExtents();if(l.multiply(nt),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/nt.x),l.x=c.x*nt.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/nt.y),l.y=c.y*nt.y,G.mapSize.y=c.y)),G.map===null||Q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===tl){if(F.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wi(l.x,l.y,{format:Xr,type:Ea,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new sl(l.x,l.y,Gi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=ba,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else{F.isPointLight?(G.map=new tx(l.x),G.map.depthTexture=new HM(l.x,Yi)):(G.map=new Wi(l.x,l.y),G.map.depthTexture=new sl(l.x,l.y,Yi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=ba;const St=r.state.buffers.depth.getReversed();this.type===qc?(G.map.depthTexture.compareFunction=St?hp:fp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On)}G.camera.updateProjectionMatrix()}const xt=G.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<xt;St++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,St),r.clear();else{St===0&&(r.setRenderTarget(G.map),r.clear());const z=G.getViewport(St);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),Y.viewport(f)}if(F.isPointLight){const z=G.camera,et=G.matrix,mt=F.distance||z.far;mt!==z.far&&(z.far=mt,z.updateProjectionMatrix()),Jo.setFromMatrixPosition(F.matrixWorld),z.position.copy(Jo),ed.copy(z.position),ed.add(UA[St]),z.up.copy(LA[St]),z.lookAt(ed),z.updateMatrixWorld(),et.makeTranslation(-Jo.x,-Jo.y,-Jo.z),_v.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(_v,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),U(O,V,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===tl&&L(G,V),G.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,D,k)};function L(I,O){const V=t.update(T);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wi(l.x,l.y,{format:Xr,type:Ea})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(O,null,V,x,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(O,null,V,y,T,null)}function w(I,O,V,A){let D=null;const k=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)D=k;else if(D=V.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=D.uuid,Q=O.uuid;let ct=p[Y];ct===void 0&&(ct={},p[Y]=ct);let rt=ct[Q];rt===void 0&&(rt=D.clone(),ct[Q]=rt,O.addEventListener("dispose",P)),D=rt}if(D.visible=O.visible,D.wireframe=O.wireframe,A===tl?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:_[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Y=r.properties.get(D);Y.light=V}return D}function U(I,O,V,A,D){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===tl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);const Q=t.update(I),ct=I.material;if(Array.isArray(ct)){const rt=Q.groups;for(let F=0,G=rt.length;F<G;F++){const nt=rt[F],xt=ct[nt.materialIndex];if(xt&&xt.visible){const St=w(I,xt,A,D);I.onBeforeShadow(r,I,O,V,Q,St,nt),r.renderBufferDirect(V,null,Q,St,I,nt),I.onAfterShadow(r,I,O,V,Q,St,nt)}}}else if(ct.visible){const rt=w(I,ct,A,D);I.onBeforeShadow(r,I,O,V,Q,rt,null),r.renderBufferDirect(V,null,Q,rt,I,null),I.onAfterShadow(r,I,O,V,Q,rt,null)}}const Y=I.children;for(let Q=0,ct=Y.length;Q<ct;Q++)U(Y[Q],O,V,A,D)}function P(I){I.target.removeEventListener("dispose",P);for(const V in p){const A=p[V],D=I.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const OA={[rd]:od,[ld]:fd,[cd]:hd,[Vr]:ud,[od]:rd,[fd]:ld,[hd]:cd,[ud]:Vr};function PA(r,t){function i(){let q=!1;const Ot=new an;let Tt=null;const Bt=new an(0,0,0,0);return{setMask:function(yt){Tt!==yt&&!q&&(r.colorMask(yt,yt,yt,yt),Tt=yt)},setLocked:function(yt){q=yt},setClear:function(yt,vt,wt,le,Fe){Fe===!0&&(yt*=le,vt*=le,wt*=le),Ot.set(yt,vt,wt,le),Bt.equals(Ot)===!1&&(r.clearColor(yt,vt,wt,le),Bt.copy(Ot))},reset:function(){q=!1,Tt=null,Bt.set(-1,0,0,0)}}}function s(){let q=!1,Ot=!1,Tt=null,Bt=null,yt=null;return{setReversed:function(vt){if(Ot!==vt){const wt=t.get("EXT_clip_control");vt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Ot=vt;const le=yt;yt=null,this.setClear(le)}},getReversed:function(){return Ot},setTest:function(vt){vt?ht(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!q&&(r.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Ot&&(vt=OA[vt]),Bt!==vt){switch(vt){case rd:r.depthFunc(r.NEVER);break;case od:r.depthFunc(r.ALWAYS);break;case ld:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case cd:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case fd:r.depthFunc(r.GREATER);break;case hd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=vt}},setLocked:function(vt){q=vt},setClear:function(vt){yt!==vt&&(Ot&&(vt=1-vt),r.clearDepth(vt),yt=vt)},reset:function(){q=!1,Tt=null,Bt=null,yt=null,Ot=!1}}}function l(){let q=!1,Ot=null,Tt=null,Bt=null,yt=null,vt=null,wt=null,le=null,Fe=null;return{setTest:function(we){q||(we?ht(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(we){Ot!==we&&!q&&(r.stencilMask(we),Ot=we)},setFunc:function(we,Pn,Mi){(Tt!==we||Bt!==Pn||yt!==Mi)&&(r.stencilFunc(we,Pn,Mi),Tt=we,Bt=Pn,yt=Mi)},setOp:function(we,Pn,Mi){(vt!==we||wt!==Pn||le!==Mi)&&(r.stencilOp(we,Pn,Mi),vt=we,wt=Pn,le=Mi)},setLocked:function(we){q=we},setClear:function(we){Fe!==we&&(r.clearStencil(we),Fe=we)},reset:function(){q=!1,Ot=null,Tt=null,Bt=null,yt=null,vt=null,wt=null,le=null,Fe=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],b=null,T=!1,M=null,v=null,L=null,w=null,U=null,P=null,I=null,O=new Re(0,0,0),V=0,A=!1,D=null,k=null,Y=null,Q=null,ct=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(nt)[1]),F=G>=1):nt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),F=G>=2);let xt=null,St={};const z=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),mt=new an().fromArray(z),At=new an().fromArray(et);function It(q,Ot,Tt,Bt){const yt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(q,vt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<Tt;wt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(Ot+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return vt}const it={};it[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Vr),oe(!1),Et(h_),ht(r.CULL_FACE),_e(ya);function ht(q){g[q]!==!0&&(r.enable(q),g[q]=!0)}function Dt(q){g[q]!==!1&&(r.disable(q),g[q]=!1)}function Wt(q,Ot){return _[q]!==Ot?(r.bindFramebuffer(q,Ot),_[q]=Ot,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Vt(q,Ot){let Tt=y,Bt=!1;if(q){Tt=x.get(Ot),Tt===void 0&&(Tt=[],x.set(Ot,Tt));const yt=q.textures;if(Tt.length!==yt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,wt=yt.length;vt<wt;vt++)Tt[vt]=r.COLOR_ATTACHMENT0+vt;Tt.length=yt.length,Bt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Tt)}function xe(q){return b!==q?(r.useProgram(q),b=q,!0):!1}const Qe={[Ns]:r.FUNC_ADD,[Ny]:r.FUNC_SUBTRACT,[Oy]:r.FUNC_REVERSE_SUBTRACT};Qe[Py]=r.MIN,Qe[zy]=r.MAX;const Se={[Iy]:r.ZERO,[Fy]:r.ONE,[By]:r.SRC_COLOR,[ad]:r.SRC_ALPHA,[Wy]:r.SRC_ALPHA_SATURATE,[ky]:r.DST_COLOR,[Gy]:r.DST_ALPHA,[Hy]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[Xy]:r.ONE_MINUS_DST_COLOR,[Vy]:r.ONE_MINUS_DST_ALPHA,[qy]:r.CONSTANT_COLOR,[Yy]:r.ONE_MINUS_CONSTANT_COLOR,[jy]:r.CONSTANT_ALPHA,[Zy]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(q,Ot,Tt,Bt,yt,vt,wt,le,Fe,we){if(q===ya){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),q!==Ly){if(q!==M||we!==A){if((v!==Ns||U!==Ns)&&(r.blendEquation(r.FUNC_ADD),v=Ns,U=Ns),we)switch(q){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFunc(r.ONE,r.ONE);break;case p_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case m_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",q);break}else switch(q){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case p_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",q);break}L=null,w=null,P=null,I=null,O.set(0,0,0),V=0,M=q,A=we}return}yt=yt||Ot,vt=vt||Tt,wt=wt||Bt,(Ot!==v||yt!==U)&&(r.blendEquationSeparate(Qe[Ot],Qe[yt]),v=Ot,U=yt),(Tt!==L||Bt!==w||vt!==P||wt!==I)&&(r.blendFuncSeparate(Se[Tt],Se[Bt],Se[vt],Se[wt]),L=Tt,w=Bt,P=vt,I=wt),(le.equals(O)===!1||Fe!==V)&&(r.blendColor(le.r,le.g,le.b,Fe),O.copy(le),V=Fe),M=q,A=!1}function Ce(q,Ot){q.side===xa?Dt(r.CULL_FACE):ht(r.CULL_FACE);let Tt=q.side===Qn;Ot&&(Tt=!Tt),oe(Tt),q.blending===Hr&&q.transparent===!1?_e(ya):_e(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Bt=q.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ae(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(q){D!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),D=q)}function Et(q){q!==wy?(ht(r.CULL_FACE),q!==k&&(q===h_?r.cullFace(r.BACK):q===Dy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),k=q}function B(q){q!==Y&&(F&&r.lineWidth(q),Y=q)}function ae(q,Ot,Tt){q?(ht(r.POLYGON_OFFSET_FILL),(Q!==Ot||ct!==Tt)&&(r.polygonOffset(Ot,Tt),Q=Ot,ct=Tt)):Dt(r.POLYGON_OFFSET_FILL)}function Qt(q){q?ht(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function te(q){q===void 0&&(q=r.TEXTURE0+rt-1),xt!==q&&(r.activeTexture(q),xt=q)}function Ct(q,Ot,Tt){Tt===void 0&&(xt===null?Tt=r.TEXTURE0+rt-1:Tt=xt);let Bt=St[Tt];Bt===void 0&&(Bt={type:void 0,texture:void 0},St[Tt]=Bt),(Bt.type!==q||Bt.texture!==Ot)&&(xt!==Tt&&(r.activeTexture(Tt),xt=Tt),r.bindTexture(q,Ot||it[q]),Bt.type=q,Bt.texture=Ot)}function N(){const q=St[xt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function ut(){try{r.texSubImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function dt(){try{r.texSubImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function ot(){try{r.compressedTexSubImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function Nt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function Rt(){try{r.texStorage2D(...arguments)}catch(q){De("WebGLState:",q)}}function kt(){try{r.texStorage3D(...arguments)}catch(q){De("WebGLState:",q)}}function se(){try{r.texImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function Mt(){try{r.texImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function bt(q){mt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),mt.copy(q))}function Ht(q){At.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),At.copy(q))}function Ft(q,Ot){let Tt=p.get(Ot);Tt===void 0&&(Tt=new WeakMap,p.set(Ot,Tt));let Bt=Tt.get(q);Bt===void 0&&(Bt=r.getUniformBlockIndex(Ot,q.name),Tt.set(q,Bt))}function Ut(q,Ot){const Bt=p.get(Ot).get(q);m.get(Ot)!==Bt&&(r.uniformBlockBinding(Ot,Bt,q.__bindingPointIndex),m.set(Ot,Bt))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},xt=null,St={},_={},x=new WeakMap,y=[],b=null,T=!1,M=null,v=null,L=null,w=null,U=null,P=null,I=null,O=new Re(0,0,0),V=0,A=!1,D=null,k=null,Y=null,Q=null,ct=null,mt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ht,disable:Dt,bindFramebuffer:Wt,drawBuffers:Vt,useProgram:xe,setBlending:_e,setMaterial:Ce,setFlipSided:oe,setCullFace:Et,setLineWidth:B,setPolygonOffset:ae,setScissorTest:Qt,activeTexture:te,bindTexture:Ct,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:se,texImage3D:Mt,updateUBOMapping:Ft,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:kt,texSubImage2D:ut,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Nt,scissor:bt,viewport:Ht,reset:pe}}function zA(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return y?new OffscreenCanvas(N,E):nu("canvas")}function T(N,E,W){let ut=1;const dt=Ct(N);if((dt.width>W||dt.height>W)&&(ut=W/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ot=Math.floor(ut*dt.width),Nt=Math.floor(ut*dt.height);_===void 0&&(_=b(ot,Nt));const Rt=E?b(ot,Nt):_;return Rt.width=ot,Rt.height=Nt,Rt.getContext("2d").drawImage(N,0,0,ot,Nt),re("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Nt+")."),Rt}else return"data"in N&&re("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function M(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(N,E,W,ut,dt=!1){if(N!==null){if(r[N]!==void 0)return r[N];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ot=E;if(E===r.RED&&(W===r.FLOAT&&(ot=r.R32F),W===r.HALF_FLOAT&&(ot=r.R16F),W===r.UNSIGNED_BYTE&&(ot=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ot=r.R8UI),W===r.UNSIGNED_SHORT&&(ot=r.R16UI),W===r.UNSIGNED_INT&&(ot=r.R32UI),W===r.BYTE&&(ot=r.R8I),W===r.SHORT&&(ot=r.R16I),W===r.INT&&(ot=r.R32I)),E===r.RG&&(W===r.FLOAT&&(ot=r.RG32F),W===r.HALF_FLOAT&&(ot=r.RG16F),W===r.UNSIGNED_BYTE&&(ot=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ot=r.RG8UI),W===r.UNSIGNED_SHORT&&(ot=r.RG16UI),W===r.UNSIGNED_INT&&(ot=r.RG32UI),W===r.BYTE&&(ot=r.RG8I),W===r.SHORT&&(ot=r.RG16I),W===r.INT&&(ot=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),W===r.UNSIGNED_INT&&(ot=r.RGB32UI),W===r.BYTE&&(ot=r.RGB8I),W===r.SHORT&&(ot=r.RGB16I),W===r.INT&&(ot=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),W===r.UNSIGNED_INT&&(ot=r.RGBA32UI),W===r.BYTE&&(ot=r.RGBA8I),W===r.SHORT&&(ot=r.RGBA16I),W===r.INT&&(ot=r.RGBA32I)),E===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ot=r.R11F_G11F_B10F)),E===r.RGBA){const Nt=dt?tu:Ue.getTransfer(ut);W===r.FLOAT&&(ot=r.RGBA32F),W===r.HALF_FLOAT&&(ot=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ot=Nt===Ve?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function U(N,E){let W;return N?E===null||E===Yi||E===il?W=r.DEPTH24_STENCIL8:E===Gi?W=r.DEPTH32F_STENCIL8:E===nl&&(W=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===il?W=r.DEPTH_COMPONENT24:E===Gi?W=r.DEPTH_COMPONENT32F:E===nl&&(W=r.DEPTH_COMPONENT16),W}function P(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),V(E),E.isVideoTexture&&g.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),D(E)}function V(N){const E=s.get(N);if(E.__webglInit===void 0)return;const W=N.source,ut=x.get(W);if(ut){const dt=ut[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&A(N),Object.keys(ut).length===0&&x.delete(W)}s.remove(N)}function A(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const W=N.source,ut=x.get(W);delete ut[E.__cacheKey],f.memory.textures--}function D(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let dt=0;dt<E.__webglFramebuffer[ut].length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[ut][dt]);else r.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)r.deleteFramebuffer(E.__webglFramebuffer[ut]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=N.textures;for(let ut=0,dt=W.length;ut<dt;ut++){const ot=s.get(W[ut]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),f.memory.textures--),s.remove(W[ut])}s.remove(N)}let k=0;function Y(){k=0}function Q(){const N=k;return N>=l.maxTextures&&re("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function ct(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function rt(N,E){const W=s.get(N);if(N.isVideoTexture&&Qt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const ut=N.image;if(ut===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,N,E);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function F(N,E){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,E);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function G(N,E){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,E);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function nt(N,E){const W=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ht(W,N,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const xt={[md]:r.REPEAT,[Sa]:r.CLAMP_TO_EDGE,[gd]:r.MIRRORED_REPEAT},St={[On]:r.NEAREST,[Jy]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Mh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},z={[eM]:r.NEVER,[rM]:r.ALWAYS,[nM]:r.LESS,[fp]:r.LEQUAL,[iM]:r.EQUAL,[hp]:r.GEQUAL,[aM]:r.GREATER,[sM]:r.NOTEQUAL};function et(N,E){if(E.type===Gi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Mh||E.magFilter===yc||E.magFilter===Ps||E.minFilter===Bn||E.minFilter===Mh||E.minFilter===yc||E.minFilter===Ps)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,xt[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,xt[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,xt[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==yc&&E.minFilter!==Ps||E.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function mt(N,E){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const ut=E.source;let dt=x.get(ut);dt===void 0&&(dt={},x.set(ut,dt));const ot=ct(E);if(ot!==N.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),dt[ot].usedTimes++;const Nt=dt[N.__cacheKey];Nt!==void 0&&(dt[N.__cacheKey].usedTimes--,Nt.usedTimes===0&&A(E)),N.__cacheKey=ot,N.__webglTexture=dt[ot].texture}return W}function At(N,E,W){return Math.floor(Math.floor(N/W)/E)}function It(N,E,W,ut){const ot=N.updateRanges;if(ot.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,ut,E.data);else{ot.sort((Mt,bt)=>Mt.start-bt.start);let Nt=0;for(let Mt=1;Mt<ot.length;Mt++){const bt=ot[Nt],Ht=ot[Mt],Ft=bt.start+bt.count,Ut=At(Ht.start,E.width,4),pe=At(bt.start,E.width,4);Ht.start<=Ft+1&&Ut===pe&&At(Ht.start+Ht.count-1,E.width,4)===Ut?bt.count=Math.max(bt.count,Ht.start+Ht.count-bt.start):(++Nt,ot[Nt]=Ht)}ot.length=Nt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,bt=ot.length;Mt<bt;Mt++){const Ht=ot[Mt],Ft=Math.floor(Ht.start/4),Ut=Math.ceil(Ht.count/4),pe=Ft%E.width,q=Math.floor(Ft/E.width),Ot=Ut,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,pe,q,Ot,Tt,W,ut,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,se)}}function it(N,E,W){let ut=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=r.TEXTURE_3D);const dt=mt(N,E),ot=E.source;i.bindTexture(ut,N.__webglTexture,r.TEXTURE0+W);const Nt=s.get(ot);if(ot.version!==Nt.__version||dt===!0){i.activeTexture(r.TEXTURE0+W);const Rt=Ue.getPrimaries(Ue.workingColorSpace),kt=E.colorSpace===ss?null:Ue.getPrimaries(E.colorSpace),se=E.colorSpace===ss||Rt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Mt=T(E.image,!1,l.maxTextureSize);Mt=te(E,Mt);const bt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let Ft=w(E.internalFormat,bt,Ht,E.colorSpace,E.isVideoTexture);et(ut,E);let Ut;const pe=E.mipmaps,q=E.isVideoTexture!==!0,Ot=Nt.__version===void 0||dt===!0,Tt=ot.dataReady,Bt=P(E,Mt);if(E.isDepthTexture)Ft=U(E.format===zs,E.type),Ot&&(q?i.texStorage2D(r.TEXTURE_2D,1,Ft,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Ft,Mt.width,Mt.height,0,bt,Ht,null));else if(E.isDataTexture)if(pe.length>0){q&&Ot&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,pe[0].width,pe[0].height);for(let yt=0,vt=pe.length;yt<vt;yt++)Ut=pe[yt],q?Tt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,bt,Ht,Ut.data):i.texImage2D(r.TEXTURE_2D,yt,Ft,Ut.width,Ut.height,0,bt,Ht,Ut.data);E.generateMipmaps=!1}else q?(Ot&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,Mt.width,Mt.height),Tt&&It(E,Mt,bt,Ht)):i.texImage2D(r.TEXTURE_2D,0,Ft,Mt.width,Mt.height,0,bt,Ht,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Ft,pe[0].width,pe[0].height,Mt.depth);for(let yt=0,vt=pe.length;yt<vt;yt++)if(Ut=pe[yt],E.format!==Li)if(bt!==null)if(q){if(Tt)if(E.layerUpdates.size>0){const wt=j_(Ut.width,Ut.height,E.format,E.type);for(const le of E.layerUpdates){const Fe=Ut.data.subarray(le*wt/Ut.data.BYTES_PER_ELEMENT,(le+1)*wt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,le,Ut.width,Ut.height,1,bt,Fe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Mt.depth,bt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,yt,Ft,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Mt.depth,bt,Ht,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,yt,Ft,Ut.width,Ut.height,Mt.depth,0,bt,Ht,Ut.data)}else{q&&Ot&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,pe[0].width,pe[0].height);for(let yt=0,vt=pe.length;yt<vt;yt++)Ut=pe[yt],E.format!==Li?bt!==null?q?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,bt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,yt,Ft,Ut.width,Ut.height,0,Ut.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Tt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,bt,Ht,Ut.data):i.texImage2D(r.TEXTURE_2D,yt,Ft,Ut.width,Ut.height,0,bt,Ht,Ut.data)}else if(E.isDataArrayTexture)if(q){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Ft,Mt.width,Mt.height,Mt.depth),Tt)if(E.layerUpdates.size>0){const yt=j_(Mt.width,Mt.height,E.format,E.type);for(const vt of E.layerUpdates){const wt=Mt.data.subarray(vt*yt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,bt,Ht,wt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,Ht,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,Mt.width,Mt.height,Mt.depth,0,bt,Ht,Mt.data);else if(E.isData3DTexture)q?(Ot&&i.texStorage3D(r.TEXTURE_3D,Bt,Ft,Mt.width,Mt.height,Mt.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,Ht,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Ft,Mt.width,Mt.height,Mt.depth,0,bt,Ht,Mt.data);else if(E.isFramebufferTexture){if(Ot)if(q)i.texStorage2D(r.TEXTURE_2D,Bt,Ft,Mt.width,Mt.height);else{let yt=Mt.width,vt=Mt.height;for(let wt=0;wt<Bt;wt++)i.texImage2D(r.TEXTURE_2D,wt,Ft,yt,vt,0,bt,Ht,null),yt>>=1,vt>>=1}}else if(pe.length>0){if(q&&Ot){const yt=Ct(pe[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Ft,yt.width,yt.height)}for(let yt=0,vt=pe.length;yt<vt;yt++)Ut=pe[yt],q?Tt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,bt,Ht,Ut):i.texImage2D(r.TEXTURE_2D,yt,Ft,bt,Ht,Ut);E.generateMipmaps=!1}else if(q){if(Ot){const yt=Ct(Mt);i.texStorage2D(r.TEXTURE_2D,Bt,Ft,yt.width,yt.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Ht,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Ft,bt,Ht,Mt);M(E)&&v(ut),Nt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ht(N,E,W){if(E.image.length!==6)return;const ut=mt(N,E),dt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const ot=s.get(dt);if(dt.version!==ot.__version||ut===!0){i.activeTexture(r.TEXTURE0+W);const Nt=Ue.getPrimaries(Ue.workingColorSpace),Rt=E.colorSpace===ss?null:Ue.getPrimaries(E.colorSpace),kt=E.colorSpace===ss||Nt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const se=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!se&&!Mt?bt[vt]=T(E.image[vt],!0,l.maxCubemapSize):bt[vt]=Mt?E.image[vt].image:E.image[vt],bt[vt]=te(E,bt[vt]);const Ht=bt[0],Ft=c.convert(E.format,E.colorSpace),Ut=c.convert(E.type),pe=w(E.internalFormat,Ft,Ut,E.colorSpace),q=E.isVideoTexture!==!0,Ot=ot.__version===void 0||ut===!0,Tt=dt.dataReady;let Bt=P(E,Ht);et(r.TEXTURE_CUBE_MAP,E);let yt;if(se){q&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,pe,Ht.width,Ht.height);for(let vt=0;vt<6;vt++){yt=bt[vt].mipmaps;for(let wt=0;wt<yt.length;wt++){const le=yt[wt];E.format!==Li?Ft!==null?q?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,0,0,le.width,le.height,Ft,le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,pe,le.width,le.height,0,le.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,0,0,le.width,le.height,Ft,Ut,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,pe,le.width,le.height,0,Ft,Ut,le.data)}}}else{if(yt=E.mipmaps,q&&Ot){yt.length>0&&Bt++;const vt=Ct(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,pe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){q?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,Ft,Ut,bt[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,bt[vt].width,bt[vt].height,0,Ft,Ut,bt[vt].data);for(let wt=0;wt<yt.length;wt++){const Fe=yt[wt].image[vt].image;q?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,0,0,Fe.width,Fe.height,Ft,Ut,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,pe,Fe.width,Fe.height,0,Ft,Ut,Fe.data)}}else{q?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ft,Ut,bt[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pe,Ft,Ut,bt[vt]);for(let wt=0;wt<yt.length;wt++){const le=yt[wt];q?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,0,0,Ft,Ut,le.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,pe,Ft,Ut,le.image[vt])}}}M(E)&&v(r.TEXTURE_CUBE_MAP),ot.__version=dt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Dt(N,E,W,ut,dt,ot){const Nt=c.convert(W.format,W.colorSpace),Rt=c.convert(W.type),kt=w(W.internalFormat,Nt,Rt,W.colorSpace),se=s.get(E),Mt=s.get(W);if(Mt.__renderTarget=E,!se.__hasExternalTextures){const bt=Math.max(1,E.width>>ot),Ht=Math.max(1,E.height>>ot);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?i.texImage3D(dt,ot,kt,bt,Ht,E.depth,0,Nt,Rt,null):i.texImage2D(dt,ot,kt,bt,Ht,0,Nt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),ae(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,dt,Mt.__webglTexture,0,B(E)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,dt,Mt.__webglTexture,ot),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(N,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const ut=E.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,ot=U(E.stencilBuffer,dt),Nt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ae(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(E),ot,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(E),ot,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ot,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,N)}else{const ut=E.textures;for(let dt=0;dt<ut.length;dt++){const ot=ut[dt],Nt=c.convert(ot.format,ot.colorSpace),Rt=c.convert(ot.type),kt=w(ot.internalFormat,Nt,Rt,ot.colorSpace);ae(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(E),kt,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(E),kt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,kt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(N,E,W){const ut=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);if(dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),dt.__webglTexture===void 0){dt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),et(r.TEXTURE_CUBE_MAP,E.depthTexture);const se=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let bt;E.depthTexture.format===ba?bt=r.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(bt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,bt,E.width,E.height,0,se,Mt,null)}}else rt(E.depthTexture,0);const ot=dt.__webglTexture,Nt=B(E),Rt=ut?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,kt=E.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)ae(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Rt,ot,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Rt,ot,0);else if(E.depthTexture.format===zs)ae(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Rt,ot,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Rt,ot,0);else throw new Error("Unknown depthTexture format")}function xe(N){const E=s.get(N),W=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ut}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ut=0;ut<6;ut++)Vt(E.__webglFramebuffer[ut],N,ut);else{const ut=N.texture.mipmaps;ut&&ut.length>0?Vt(E.__webglFramebuffer[0],N,0):Vt(E.__webglFramebuffer,N,0)}else if(W){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=r.createRenderbuffer(),Wt(E.__webglDepthbuffer[ut],N,!1);else{const dt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,ot)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Wt(E.__webglDepthbuffer,N,!1);else{const dt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,ot)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(N,E,W){const ut=s.get(N);E!==void 0&&Dt(ut.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&xe(N)}function Se(N){const E=N.texture,W=s.get(N),ut=s.get(E);N.addEventListener("dispose",O);const dt=N.textures,ot=N.isWebGLCubeRenderTarget===!0,Nt=dt.length>1;if(Nt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=E.version,f.memory.textures++),ot){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)W.__webglFramebuffer[Rt][kt]=r.createFramebuffer()}else W.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let Rt=0,kt=dt.length;Rt<kt;Rt++){const se=s.get(dt[Rt]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&ae(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<dt.length;Rt++){const kt=dt[Rt];W.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const se=c.convert(kt.format,kt.colorSpace),Mt=c.convert(kt.type),bt=w(kt.internalFormat,se,Mt,kt.colorSpace,N.isXRRenderTarget===!0),Ht=B(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,bt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(W.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),et(r.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Dt(W.__webglFramebuffer[Rt][kt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,kt);else Dt(W.__webglFramebuffer[Rt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let Rt=0,kt=dt.length;Rt<kt;Rt++){const se=dt[Rt],Mt=s.get(se);let bt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,Mt.__webglTexture),et(bt,se),Dt(W.__webglFramebuffer,N,se,r.COLOR_ATTACHMENT0+Rt,bt,0),M(se)&&v(bt)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ut.__webglTexture),et(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Dt(W.__webglFramebuffer[kt],N,E,r.COLOR_ATTACHMENT0,Rt,kt);else Dt(W.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Rt,0);M(E)&&v(Rt),i.unbindTexture()}N.depthBuffer&&xe(N)}function _e(N){const E=N.textures;for(let W=0,ut=E.length;W<ut;W++){const dt=E[W];if(M(dt)){const ot=L(N),Nt=s.get(dt).__webglTexture;i.bindTexture(ot,Nt),v(ot),i.unbindTexture()}}}const Ce=[],oe=[];function Et(N){if(N.samples>0){if(ae(N)===!1){const E=N.textures,W=N.width,ut=N.height;let dt=r.COLOR_BUFFER_BIT;const ot=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(N),Rt=E.length>1;if(Rt)for(let se=0;se<E.length;se++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const kt=N.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let se=0;se<E.length;se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[se]);const Mt=s.get(E[se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,W,ut,0,0,W,ut,dt,r.NEAREST),m===!0&&(Ce.length=0,oe.length=0,Ce.push(r.COLOR_ATTACHMENT0+se),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ce.push(ot),oe.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let se=0;se<E.length;se++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[se]);const Mt=s.get(E[se]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function B(N){return Math.min(l.maxSamples,N.samples)}function ae(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qt(N){const E=f.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function te(N,E){const W=N.colorSpace,ut=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Wr&&W!==ss&&(Ue.getTransfer(W)===Ve?(ut!==Li||dt!==li)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",W)),E}function Ct(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=rt,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=nt,this.rebindTextures=Qe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function IA(r,t){function i(s,l=ss){let c;const f=Ue.getTransfer(l);if(s===li)return r.UNSIGNED_BYTE;if(s===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Gv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fv)return r.BYTE;if(s===Bv)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===sp)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===Ea)return r.HALF_FLOAT;if(s===Vv)return r.ALPHA;if(s===kv)return r.RGB;if(s===Li)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===Xv)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===cp)return r.RG_INTEGER;if(s===up)return r.RGBA_INTEGER;if(s===Yc||s===jc||s===Zc||s===Kc)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_d||s===vd||s===xd||s===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===yd||s===Md)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ed)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===bd)return c.COMPRESSED_R11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ad)return c.COMPRESSED_RG11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Id)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wd||s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
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

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new nx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:FA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new lu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new HA,v={},L=i.getContextAttributes();let w=null,U=null;const P=[],I=[],O=new fe;let V=null;const A=new yi;A.viewport=new an;const D=new yi;D.viewport=new an;const k=[A,D],Y=new jM;let Q=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=P[it];return ht===void 0&&(ht=new Xh,P[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=P[it];return ht===void 0&&(ht=new Xh,P[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=P[it];return ht===void 0&&(ht=new Xh,P[it]=ht),ht.getHandSpace()};function rt(it){const ht=I.indexOf(it.inputSource);if(ht===-1)return;const Dt=P[ht];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,p||f),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",G);for(let it=0;it<P.length;it++){const ht=I[it];ht!==null&&(I[it]=null,P[it].disconnect(ht))}Q=null,ct=null,M.reset();for(const it in v)delete v[it];t.setRenderTarget(w),y=null,x=null,_=null,l=null,U=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",F),l.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Wt=null,Vt=null;L.depth&&(Vt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=L.stencil?zs:ba,Wt=L.stencil?il:Yi);const xe={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(xe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Wi(x.textureWidth,x.textureHeight,{format:Li,type:li,depthTexture:new sl(x.textureWidth,x.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Wi(y.framebufferWidth,y.framebufferHeight,{format:Li,type:li,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(it){for(let ht=0;ht<it.removed.length;ht++){const Dt=it.removed[ht],Wt=I.indexOf(Dt);Wt>=0&&(I[Wt]=null,P[Wt].disconnect(Dt))}for(let ht=0;ht<it.added.length;ht++){const Dt=it.added[ht];let Wt=I.indexOf(Dt);if(Wt===-1){for(let xe=0;xe<P.length;xe++)if(xe>=I.length){I.push(Dt),Wt=xe;break}else if(I[xe]===null){I[xe]=Dt,Wt=xe;break}if(Wt===-1)break}const Vt=P[Wt];Vt&&Vt.connect(Dt)}}const nt=new Z,xt=new Z;function St(it,ht,Dt){nt.setFromMatrixPosition(ht.matrixWorld),xt.setFromMatrixPosition(Dt.matrixWorld);const Wt=nt.distanceTo(xt),Vt=ht.projectionMatrix.elements,xe=Dt.projectionMatrix.elements,Qe=Vt[14]/(Vt[10]-1),Se=Vt[14]/(Vt[10]+1),_e=(Vt[9]+1)/Vt[5],Ce=(Vt[9]-1)/Vt[5],oe=(Vt[8]-1)/Vt[0],Et=(xe[8]+1)/xe[0],B=Qe*oe,ae=Qe*Et,Qt=Wt/(-oe+Et),te=Qt*-oe;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(te),it.translateZ(Qt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Vt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Ct=Qe+Qt,N=Se+Qt,E=B-te,W=ae+(Wt-te),ut=_e*Se/N*Ct,dt=Ce*Se/N*Ct;it.projectionMatrix.makePerspective(E,W,ut,dt,Ct,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function z(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ht=it.near,Dt=it.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),Y.near=D.near=A.near=ht,Y.far=D.far=A.far=Dt,(Q!==Y.near||ct!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,ct=Y.far),Y.layers.mask=it.layers.mask|6,A.layers.mask=Y.layers.mask&3,D.layers.mask=Y.layers.mask&5;const Wt=it.parent,Vt=Y.cameras;z(Y,Wt);for(let xe=0;xe<Vt.length;xe++)z(Vt[xe],Wt);Vt.length===2?St(Y,A,D):Y.projectionMatrix.copy(A.projectionMatrix),et(it,Y,Wt)};function et(it,ht,Dt){Dt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(it){return v[it]};let mt=null;function At(it,ht){if(g=ht.getViewerPose(p||f),b=ht,g!==null){const Dt=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Wt=!1;Dt.length!==Y.cameras.length&&(Y.cameras.length=0,Wt=!0);for(let Se=0;Se<Dt.length;Se++){const _e=Dt[Se];let Ce=null;if(y!==null)Ce=y.getViewport(_e);else{const Et=_.getViewSubImage(x,_e);Ce=Et.viewport,Se===0&&(t.setRenderTargetTextures(U,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(U))}let oe=k[Se];oe===void 0&&(oe=new yi,oe.layers.enable(Se),oe.viewport=new an,k[Se]=oe),oe.matrix.fromArray(_e.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(_e.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Se===0&&(Y.matrix.copy(oe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Wt===!0&&Y.cameras.push(oe)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const Se=_.getDepthInformation(Dt[0]);Se&&Se.isValid&&Se.texture&&M.init(Se,l.renderState)}if(Vt&&Vt.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let Se=0;Se<Dt.length;Se++){const _e=Dt[Se].camera;if(_e){let Ce=v[_e];Ce||(Ce=new nx,v[_e]=Ce);const oe=_.getCameraImage(_e);Ce.sourceTexture=oe}}}}for(let Dt=0;Dt<P.length;Dt++){const Wt=I[Dt],Vt=P[Dt];Wt!==null&&Vt!==void 0&&Vt.update(Wt,ht,p||f)}mt&&mt(it,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),b=null}const It=new ax;It.setAnimationLoop(At),this.setAnimationLoop=function(it){mt=it},this.dispose=function(){}}}const Ls=new ji,VA=new tn;function kA(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Qv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,L,w,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,U)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,L,w):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Qn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Qn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const L=t.get(v),w=L.envMap,U=L.envMapRotation;w&&(M.envMap.value=w,Ls.copy(U),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),M.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(Ls)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,L,w){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*L,M.scale.value=w*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,L){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const L=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XA(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,w){const U=w.program;s.uniformBlockBinding(L,U)}function p(L,w){let U=l[L.id];U===void 0&&(b(L),U=g(L),l[L.id]=U,L.addEventListener("dispose",M));const P=w.program;s.updateUBOMapping(L,P);const I=t.render.frame;c[L.id]!==I&&(x(L),c[L.id]=I)}function g(L){const w=_();L.__bindingPointIndex=w;const U=r.createBuffer(),P=L.__size,I=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,P,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,U),U}function _(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const w=l[L.id],U=L.uniforms,P=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let I=0,O=U.length;I<O;I++){const V=Array.isArray(U[I])?U[I]:[U[I]];for(let A=0,D=V.length;A<D;A++){const k=V[A];if(y(k,I,A,P)===!0){const Y=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let ct=0;for(let rt=0;rt<Q.length;rt++){const F=Q[rt],G=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,Y+ct,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,ct),ct+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(L,w,U,P){const I=L.value,O=w+"_"+U;if(P[O]===void 0)return typeof I=="number"||typeof I=="boolean"?P[O]=I:P[O]=I.clone(),!0;{const V=P[O];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return P[O]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function b(L){const w=L.uniforms;let U=0;const P=16;for(let O=0,V=w.length;O<V;O++){const A=Array.isArray(w[O])?w[O]:[w[O]];for(let D=0,k=A.length;D<k;D++){const Y=A[D],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let ct=0,rt=Q.length;ct<rt;ct++){const F=Q[ct],G=T(F),nt=U%P,xt=nt%G.boundary,St=nt+xt;U+=xt,St!==0&&P-St<G.storage&&(U+=P-St),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=G.storage}}}const I=U%P;return I>0&&(U+=P-I),L.__size=U,L.__cache={},this}function T(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",L),w}function M(L){const w=L.target;w.removeEventListener("dispose",M);const U=f.indexOf(w.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const WA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function qA(){return Bi===null&&(Bi=new PM(WA,16,16,Xr,Ea),Bi.name="DFG_LUT",Bi.minFilter=Bn,Bi.magFilter=Bn,Bi.wrapS=Sa,Bi.wrapT=Sa,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class YA{constructor(t={}){const{canvas:i=oM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=li}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const T=y,M=new Set([up,cp,lp]),v=new Set([li,Yi,nl,il,rp,op]),L=new Uint32Array(4),w=new Int32Array(4);let U=null,P=null;const I=[],O=[];let V=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=Si;let k=0,Y=0,Q=null,ct=-1,rt=null;const F=new an,G=new an;let nt=null;const xt=new Re(0);let St=0,z=i.width,et=i.height,mt=1,At=null,It=null;const it=new an(0,0,z,et),ht=new an(0,0,z,et);let Dt=!1;const Wt=new gp;let Vt=!1,xe=!1;const Qe=new tn,Se=new Z,_e=new an,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Et(){return Q===null?mt:1}let B=s;function ae(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",le,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",we,!1),B===null){const j="webgl2";if(B=ae(j,C),B===null)throw ae(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw De("WebGLRenderer: "+C.message),C}let Qt,te,Ct,N,E,W,ut,dt,ot,Nt,Rt,kt,se,Mt,bt,Ht,Ft,Ut,pe,q,Ot,Tt,Bt,yt;function vt(){Qt=new q1(B),Qt.init(),Tt=new IA(B,Qt),te=new I1(B,Qt,t,Tt),Ct=new PA(B,Qt),te.reversedDepthBuffer&&x&&Ct.buffers.depth.setReversed(!0),N=new Z1(B),E=new SA,W=new zA(B,Qt,Ct,E,te,Tt,N),ut=new B1(A),dt=new W1(A),ot=new $M(B),Bt=new P1(B,ot),Nt=new Y1(B,ot,N,Bt),Rt=new Q1(B,Nt,ot,N),pe=new K1(B,te,W),Ht=new F1(E),kt=new xA(A,ut,dt,Qt,te,Bt,Ht),se=new kA(A,E),Mt=new MA,bt=new CA(Qt),Ut=new O1(A,ut,dt,Ct,Rt,b,m),Ft=new NA(A,Rt,te),yt=new XA(B,N,te,Ct),q=new z1(B,Qt,N),Ot=new j1(B,Qt,N),N.programs=kt.programs,A.capabilities=te,A.extensions=Qt,A.properties=E,A.renderLists=Mt,A.shadowMap=Ft,A.state=Ct,A.info=N}vt(),T!==li&&(V=new $1(T,i.width,i.height,l,c));const wt=new GA(A,B);this.xr=wt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Qt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Qt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(C){C!==void 0&&(mt=C,this.setSize(z,et,!1))},this.getSize=function(C){return C.set(z,et)},this.setSize=function(C,j,lt=!0){if(wt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,et=j,i.width=Math.floor(C*mt),i.height=Math.floor(j*mt),lt===!0&&(i.style.width=C+"px",i.style.height=j+"px"),V!==null&&V.setSize(i.width,i.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(z*mt,et*mt).floor()},this.setDrawingBufferSize=function(C,j,lt){z=C,et=j,mt=lt,i.width=Math.floor(C*lt),i.height=Math.floor(j*lt),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(T===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,j,lt,at){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,j,lt,at),Ct.viewport(F.copy(it).multiplyScalar(mt).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,j,lt,at){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,j,lt,at),Ct.scissor(G.copy(ht).multiplyScalar(mt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(C){Ct.setScissorTest(Dt=C)},this.setOpaqueSort=function(C){At=C},this.setTransparentSort=function(C){It=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,lt=!0){let at=0;if(C){let J=!1;if(Q!==null){const Lt=Q.texture.format;J=M.has(Lt)}if(J){const Lt=Q.texture.type,Gt=v.has(Lt),Pt=Ut.getClearColor(),qt=Ut.getClearAlpha(),jt=Pt.r,ee=Pt.g,Zt=Pt.b;Gt?(L[0]=jt,L[1]=ee,L[2]=Zt,L[3]=qt,B.clearBufferuiv(B.COLOR,0,L)):(w[0]=jt,w[1]=ee,w[2]=Zt,w[3]=qt,B.clearBufferiv(B.COLOR,0,w))}else at|=B.COLOR_BUFFER_BIT}j&&(at|=B.DEPTH_BUFFER_BIT),lt&&(at|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",le,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",we,!1),Ut.dispose(),Mt.dispose(),bt.dispose(),E.dispose(),ut.dispose(),dt.dispose(),Rt.dispose(),Bt.dispose(),yt.dispose(),kt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Vs),wt.removeEventListener("sessionend",Jr),Oi.stop()};function le(C){C.preventDefault(),S_("WebGLRenderer: Context Lost."),D=!0}function Fe(){S_("WebGLRenderer: Context Restored."),D=!1;const C=N.autoReset,j=Ft.enabled,lt=Ft.autoUpdate,at=Ft.needsUpdate,J=Ft.type;vt(),N.autoReset=C,Ft.enabled=j,Ft.autoUpdate=lt,Ft.needsUpdate=at,Ft.type=J}function we(C){De("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pn(C){const j=C.target;j.removeEventListener("dispose",Pn),Mi(j)}function Mi(C){ul(C),E.remove(C)}function ul(C){const j=E.get(C).programs;j!==void 0&&(j.forEach(function(lt){kt.releaseProgram(lt)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,lt,at,J,Lt){j===null&&(j=Ce);const Gt=J.isMesh&&J.matrixWorld.determinant()<0,Pt=cs(C,j,lt,at,J);Ct.setMaterial(at,Gt);let qt=lt.index,jt=1;if(at.wireframe===!0){if(qt=Nt.getWireframeAttribute(lt),qt===void 0)return;jt=2}const ee=lt.drawRange,Zt=lt.attributes.position;let ne=ee.start*jt,Oe=(ee.start+ee.count)*jt;Lt!==null&&(ne=Math.max(ne,Lt.start*jt),Oe=Math.min(Oe,(Lt.start+Lt.count)*jt)),qt!==null?(ne=Math.max(ne,0),Oe=Math.min(Oe,qt.count)):Zt!=null&&(ne=Math.max(ne,0),Oe=Math.min(Oe,Zt.count));const Je=Oe-ne;if(Je<0||Je===1/0)return;Bt.setup(J,at,Pt,lt,qt);let je,Ie=q;if(qt!==null&&(je=ot.get(qt),Ie=Ot,Ie.setIndex(je)),J.isMesh)at.wireframe===!0?(Ct.setLineWidth(at.wireframeLinewidth*Et()),Ie.setMode(B.LINES)):Ie.setMode(B.TRIANGLES);else if(J.isLine){let Jt=at.linewidth;Jt===void 0&&(Jt=1),Ct.setLineWidth(Jt*Et()),J.isLineSegments?Ie.setMode(B.LINES):J.isLineLoop?Ie.setMode(B.LINE_LOOP):Ie.setMode(B.LINE_STRIP)}else J.isPoints?Ie.setMode(B.POINTS):J.isSprite&&Ie.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Jt=J._multiDrawStarts,Pe=J._multiDrawCounts,ce=J._multiDrawCount,Tn=qt?ot.get(qt).bytesPerElement:1,Ki=E.get(at).currentProgram.getUniforms();for(let An=0;An<ce;An++)Ki.setValue(B,"_gl_DrawID",An),Ie.render(Jt[An]/Tn,Pe[An])}else if(J.isInstancedMesh)Ie.renderInstances(ne,Je,J.count);else if(lt.isInstancedBufferGeometry){const Jt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Pe=Math.min(lt.instanceCount,Jt);Ie.renderInstances(ne,Je,Pe)}else Ie.render(ne,Je)};function Kr(C,j,lt){C.transparent===!0&&C.side===xa&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,Xs(C,j,lt),C.side=ls,C.needsUpdate=!0,Xs(C,j,lt),C.side=xa):Xs(C,j,lt)}this.compile=function(C,j,lt=null){lt===null&&(lt=C),P=bt.get(lt),P.init(j),O.push(P),lt.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),C!==lt&&C.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();const at=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Lt=J.material;if(Lt)if(Array.isArray(Lt))for(let Gt=0;Gt<Lt.length;Gt++){const Pt=Lt[Gt];Kr(Pt,lt,J),at.add(Pt)}else Kr(Lt,lt,J),at.add(Lt)}),P=O.pop(),at},this.compileAsync=function(C,j,lt=null){const at=this.compile(C,j,lt);return new Promise(J=>{function Lt(){if(at.forEach(function(Gt){E.get(Gt).currentProgram.isReady()&&at.delete(Gt)}),at.size===0){J(C);return}setTimeout(Lt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Gs=null;function Qr(C){Gs&&Gs(C)}function Vs(){Oi.stop()}function Jr(){Oi.start()}const Oi=new ax;Oi.setAnimationLoop(Qr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){Gs=C,wt.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},wt.addEventListener("sessionstart",Vs),wt.addEventListener("sessionend",Jr),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const lt=wt.enabled===!0&&wt.isPresenting===!0,at=V!==null&&(Q===null||lt)&&V.begin(A,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(j),j=wt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,j,Q),P=bt.get(C,O.length),P.init(j),O.push(P),Qe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Wt.setFromProjectionMatrix(Qe,Vi,j.reversedDepth),xe=this.localClippingEnabled,Vt=Ht.init(this.clippingPlanes,xe),U=Mt.get(C,I.length),U.init(),I.push(U),wt.enabled===!0&&wt.isPresenting===!0){const Gt=A.xr.getDepthSensingMesh();Gt!==null&&ci(Gt,j,-1/0,A.sortObjects)}ci(C,j,0,A.sortObjects),U.finish(),A.sortObjects===!0&&U.sort(At,It),oe=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,oe&&Ut.addToRenderList(U,C),this.info.render.frame++,Vt===!0&&Ht.beginShadows();const J=P.state.shadowsArray;if(Ft.render(J,C,j),Vt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&V.hasRenderPass())===!1){const Gt=U.opaque,Pt=U.transmissive;if(P.setupLights(),j.isArrayCamera){const qt=j.cameras;if(Pt.length>0)for(let jt=0,ee=qt.length;jt<ee;jt++){const Zt=qt[jt];bn(Gt,Pt,C,Zt)}oe&&Ut.render(C);for(let jt=0,ee=qt.length;jt<ee;jt++){const Zt=qt[jt];ln(U,C,Zt,Zt.viewport)}}else Pt.length>0&&bn(Gt,Pt,C,j),oe&&Ut.render(C),ln(U,C,j)}Q!==null&&Y===0&&(W.updateMultisampleRenderTarget(Q),W.updateRenderTargetMipmap(Q)),at&&V.end(A),C.isScene===!0&&C.onAfterRender(A,C,j),Bt.resetDefaultState(),ct=-1,rt=null,O.pop(),O.length>0?(P=O[O.length-1],Vt===!0&&Ht.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function ci(C,j,lt,at){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Wt.intersectsSprite(C)){at&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qe);const Gt=Rt.update(C),Pt=C.material;Pt.visible&&U.push(C,Gt,Pt,lt,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Wt.intersectsObject(C))){const Gt=Rt.update(C),Pt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),_e.copy(Gt.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(Qe)),Array.isArray(Pt)){const qt=Gt.groups;for(let jt=0,ee=qt.length;jt<ee;jt++){const Zt=qt[jt],ne=Pt[Zt.materialIndex];ne&&ne.visible&&U.push(C,Gt,ne,lt,_e.z,Zt)}}else Pt.visible&&U.push(C,Gt,Pt,lt,_e.z,null)}}const Lt=C.children;for(let Gt=0,Pt=Lt.length;Gt<Pt;Gt++)ci(Lt[Gt],j,lt,at)}function ln(C,j,lt,at){const{opaque:J,transmissive:Lt,transparent:Gt}=C;P.setupLightsView(lt),Vt===!0&&Ht.setGlobalState(A.clippingPlanes,lt),at&&Ct.viewport(F.copy(at)),J.length>0&&Ei(J,j,lt),Lt.length>0&&Ei(Lt,j,lt),Gt.length>0&&Ei(Gt,j,lt),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function bn(C,j,lt,at){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[at.id]===void 0){const ne=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[at.id]=new Wi(1,1,{generateMipmaps:!0,type:ne?Ea:li,minFilter:Ps,samples:te.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Lt=P.state.transmissionRenderTarget[at.id],Gt=at.viewport||F;Lt.setSize(Gt.z*A.transmissionResolutionScale,Gt.w*A.transmissionResolutionScale);const Pt=A.getRenderTarget(),qt=A.getActiveCubeFace(),jt=A.getActiveMipmapLevel();A.setRenderTarget(Lt),A.getClearColor(xt),St=A.getClearAlpha(),St<1&&A.setClearColor(16777215,.5),A.clear(),oe&&Ut.render(lt);const ee=A.toneMapping;A.toneMapping=Xi;const Zt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),P.setupLightsView(at),Vt===!0&&Ht.setGlobalState(A.clippingPlanes,at),Ei(C,lt,at),W.updateMultisampleRenderTarget(Lt),W.updateRenderTargetMipmap(Lt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Oe=0,Je=j.length;Oe<Je;Oe++){const je=j[Oe],{object:Ie,geometry:Jt,material:Pe,group:ce}=je;if(Pe.side===xa&&Ie.layers.test(at.layers)){const Tn=Pe.side;Pe.side=Qn,Pe.needsUpdate=!0,ks(Ie,lt,at,Jt,Pe,ce),Pe.side=Tn,Pe.needsUpdate=!0,ne=!0}}ne===!0&&(W.updateMultisampleRenderTarget(Lt),W.updateRenderTargetMipmap(Lt))}A.setRenderTarget(Pt,qt,jt),A.setClearColor(xt,St),Zt!==void 0&&(at.viewport=Zt),A.toneMapping=ee}function Ei(C,j,lt){const at=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Lt=C.length;J<Lt;J++){const Gt=C[J],{object:Pt,geometry:qt,group:jt}=Gt;let ee=Gt.material;ee.allowOverride===!0&&at!==null&&(ee=at),Pt.layers.test(lt.layers)&&ks(Pt,j,lt,qt,ee,jt)}}function ks(C,j,lt,at,J,Lt){C.onBeforeRender(A,j,lt,at,J,Lt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(A,j,lt,at,C,Lt),J.transparent===!0&&J.side===xa&&J.forceSinglePass===!1?(J.side=Qn,J.needsUpdate=!0,A.renderBufferDirect(lt,j,at,J,C,Lt),J.side=ls,J.needsUpdate=!0,A.renderBufferDirect(lt,j,at,J,C,Lt),J.side=xa):A.renderBufferDirect(lt,j,at,J,C,Lt),C.onAfterRender(A,j,lt,at,J,Lt)}function Xs(C,j,lt){j.isScene!==!0&&(j=Ce);const at=E.get(C),J=P.state.lights,Lt=P.state.shadowsArray,Gt=J.state.version,Pt=kt.getParameters(C,J.state,Lt,j,lt),qt=kt.getProgramCacheKey(Pt);let jt=at.programs;at.environment=C.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(C.isMeshStandardMaterial?dt:ut).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",Pn),jt=new Map,at.programs=jt);let ee=jt.get(qt);if(ee!==void 0){if(at.currentProgram===ee&&at.lightsStateVersion===Gt)return $r(C,Pt),ee}else Pt.uniforms=kt.getUniforms(C),C.onBeforeCompile(Pt,A),ee=kt.acquireProgram(Pt,qt),jt.set(qt,ee),at.uniforms=Pt.uniforms;const Zt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=Ht.uniform),$r(C,Pt),at.needsLights=Aa(C),at.lightsStateVersion=Gt,at.needsLights&&(Zt.ambientLightColor.value=J.state.ambient,Zt.lightProbe.value=J.state.probe,Zt.directionalLights.value=J.state.directional,Zt.directionalLightShadows.value=J.state.directionalShadow,Zt.spotLights.value=J.state.spot,Zt.spotLightShadows.value=J.state.spotShadow,Zt.rectAreaLights.value=J.state.rectArea,Zt.ltc_1.value=J.state.rectAreaLTC1,Zt.ltc_2.value=J.state.rectAreaLTC2,Zt.pointLights.value=J.state.point,Zt.pointLightShadows.value=J.state.pointShadow,Zt.hemisphereLights.value=J.state.hemi,Zt.directionalShadowMap.value=J.state.directionalShadowMap,Zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Zt.spotShadowMap.value=J.state.spotShadowMap,Zt.spotLightMatrix.value=J.state.spotLightMatrix,Zt.spotLightMap.value=J.state.spotLightMap,Zt.pointShadowMap.value=J.state.pointShadowMap,Zt.pointShadowMatrix.value=J.state.pointShadowMatrix),at.currentProgram=ee,at.uniformsList=null,ee}function fl(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Jc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function $r(C,j){const lt=E.get(C);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function cs(C,j,lt,at,J){j.isScene!==!0&&(j=Ce),W.resetTextureUnits();const Lt=j.fog,Gt=at.isMeshStandardMaterial?j.environment:null,Pt=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wr,qt=(at.isMeshStandardMaterial?dt:ut).get(at.envMap||Gt),jt=at.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Zt=!!lt.morphAttributes.position,ne=!!lt.morphAttributes.normal,Oe=!!lt.morphAttributes.color;let Je=Xi;at.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Je=A.toneMapping);const je=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ie=je!==void 0?je.length:0,Jt=E.get(at),Pe=P.state.lights;if(Vt===!0&&(xe===!0||C!==rt)){const Cn=C===rt&&at.id===ct;Ht.setState(at,C,Cn)}let ce=!1;at.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Pe.state.version||Jt.outputColorSpace!==Pt||J.isBatchedMesh&&Jt.batching===!1||!J.isBatchedMesh&&Jt.batching===!0||J.isBatchedMesh&&Jt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Jt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Jt.instancing===!1||!J.isInstancedMesh&&Jt.instancing===!0||J.isSkinnedMesh&&Jt.skinning===!1||!J.isSkinnedMesh&&Jt.skinning===!0||J.isInstancedMesh&&Jt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Jt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Jt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Jt.instancingMorph===!1&&J.morphTexture!==null||Jt.envMap!==qt||at.fog===!0&&Jt.fog!==Lt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Ht.numPlanes||Jt.numIntersection!==Ht.numIntersection)||Jt.vertexAlphas!==jt||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ne||Jt.morphColors!==Oe||Jt.toneMapping!==Je||Jt.morphTargetsCount!==Ie)&&(ce=!0):(ce=!0,Jt.__version=at.version);let Tn=Jt.currentProgram;ce===!0&&(Tn=Xs(at,j,J));let Ki=!1,An=!1,ui=!1;const Be=Tn.getUniforms(),Rn=Jt.uniforms;if(Ct.useProgram(Tn.program)&&(Ki=!0,An=!0,ui=!0),at.id!==ct&&(ct=at.id,An=!0),Ki||rt!==C){Ct.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(B,"projectionMatrix",C.projectionMatrix),Be.setValue(B,"viewMatrix",C.matrixWorldInverse);const wn=Be.map.cameraPosition;wn!==void 0&&wn.setValue(B,Se.setFromMatrixPosition(C.matrixWorld)),te.logarithmicDepthBuffer&&Be.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),rt!==C&&(rt=C,An=!0,ui=!0)}if(Jt.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(B,"directionalShadowMap",Pe.state.directionalShadowMap,W),Pe.state.spotShadowMap.length>0&&Be.setValue(B,"spotShadowMap",Pe.state.spotShadowMap,W),Pe.state.pointShadowMap.length>0&&Be.setValue(B,"pointShadowMap",Pe.state.pointShadowMap,W)),J.isSkinnedMesh){Be.setOptional(B,J,"bindMatrix"),Be.setOptional(B,J,"bindMatrixInverse");const Cn=J.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Be.setValue(B,"boneTexture",Cn.boneTexture,W))}J.isBatchedMesh&&(Be.setOptional(B,J,"batchingTexture"),Be.setValue(B,"batchingTexture",J._matricesTexture,W),Be.setOptional(B,J,"batchingIdTexture"),Be.setValue(B,"batchingIdTexture",J._indirectTexture,W),Be.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Be.setValue(B,"batchingColorTexture",J._colorsTexture,W));const mn=lt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&pe.update(J,lt,Tn),(An||Jt.receiveShadow!==J.receiveShadow)&&(Jt.receiveShadow=J.receiveShadow,Be.setValue(B,"receiveShadow",J.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Rn.envMap.value=qt,Rn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=qA()),An&&(Be.setValue(B,"toneMappingExposure",A.toneMappingExposure),Jt.needsLights&&to(Rn,ui),Lt&&at.fog===!0&&se.refreshFogUniforms(Rn,Lt),se.refreshMaterialUniforms(Rn,at,mt,et,P.state.transmissionRenderTarget[C.id]),Jc.upload(B,fl(Jt),Rn,W)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Jc.upload(B,fl(Jt),Rn,W),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(B,"center",J.center),Be.setValue(B,"modelViewMatrix",J.modelViewMatrix),Be.setValue(B,"normalMatrix",J.normalMatrix),Be.setValue(B,"modelMatrix",J.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Cn=at.uniformsGroups;for(let wn=0,Ws=Cn.length;wn<Ws;wn++){const bi=Cn[wn];yt.update(bi,Tn),yt.bind(bi,Tn)}}return Tn}function to(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Aa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,j,lt){const at=E.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=j,E.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:lt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const lt=E.get(C);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const Ra=B.createFramebuffer();this.setRenderTarget=function(C,j=0,lt=0){Q=C,k=j,Y=lt;let at=null,J=!1,Lt=!1;if(C){const Pt=E.get(C);if(Pt.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(B.FRAMEBUFFER,Pt.__webglFramebuffer),F.copy(C.viewport),G.copy(C.scissor),nt=C.scissorTest,Ct.viewport(F),Ct.scissor(G),Ct.setScissorTest(nt),ct=-1;return}else if(Pt.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Pt.__hasExternalTextures)W.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(Pt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Lt=!0);const jt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[j])?at=jt[j][lt]:at=jt[j],J=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?at=E.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[lt]:at=jt,F.copy(C.viewport),G.copy(C.scissor),nt=C.scissorTest}else F.copy(it).multiplyScalar(mt).floor(),G.copy(ht).multiplyScalar(mt).floor(),nt=Dt;if(lt!==0&&(at=Ra),Ct.bindFramebuffer(B.FRAMEBUFFER,at)&&Ct.drawBuffers(C,at),Ct.viewport(F),Ct.scissor(G),Ct.setScissorTest(nt),J){const Pt=E.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pt.__webglTexture,lt)}else if(Lt){const Pt=j;for(let qt=0;qt<C.textures.length;qt++){const jt=E.get(C.textures[qt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qt,jt.__webglTexture,lt,Pt)}}else if(C!==null&&lt!==0){const Pt=E.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,lt)}ct=-1},this.readRenderTargetPixels=function(C,j,lt,at,J,Lt,Gt,Pt=0){if(!(C&&C.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt){Ct.bindFramebuffer(B.FRAMEBUFFER,qt);try{const jt=C.textures[Pt],ee=jt.format,Zt=jt.type;if(!te.textureFormatReadable(ee)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Zt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-at&&lt>=0&&lt<=C.height-J&&(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt),B.readPixels(j,lt,at,J,Tt.convert(ee),Tt.convert(Zt),Lt))}finally{const jt=Q!==null?E.get(Q).__webglFramebuffer:null;Ct.bindFramebuffer(B.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,j,lt,at,J,Lt,Gt,Pt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(qt=qt[Gt]),qt)if(j>=0&&j<=C.width-at&&lt>=0&&lt<=C.height-J){Ct.bindFramebuffer(B.FRAMEBUFFER,qt);const jt=C.textures[Pt],ee=jt.format,Zt=jt.type;if(!te.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.bufferData(B.PIXEL_PACK_BUFFER,Lt.byteLength,B.STREAM_READ),C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt),B.readPixels(j,lt,at,J,Tt.convert(ee),Tt.convert(Zt),0);const Oe=Q!==null?E.get(Q).__webglFramebuffer:null;Ct.bindFramebuffer(B.FRAMEBUFFER,Oe);const Je=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await lM(B,Je,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Lt),B.deleteBuffer(ne),B.deleteSync(Je),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,lt=0){const at=Math.pow(2,-lt),J=Math.floor(C.image.width*at),Lt=Math.floor(C.image.height*at),Gt=j!==null?j.x:0,Pt=j!==null?j.y:0;W.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,lt,0,0,Gt,Pt,J,Lt),Ct.unbindTexture()};const us=B.createFramebuffer(),Ca=B.createFramebuffer();this.copyTextureToTexture=function(C,j,lt=null,at=null,J=0,Lt=null){Lt===null&&(J!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=J,J=0):Lt=0);let Gt,Pt,qt,jt,ee,Zt,ne,Oe,Je;const je=C.isCompressedTexture?C.mipmaps[Lt]:C.image;if(lt!==null)Gt=lt.max.x-lt.min.x,Pt=lt.max.y-lt.min.y,qt=lt.isBox3?lt.max.z-lt.min.z:1,jt=lt.min.x,ee=lt.min.y,Zt=lt.isBox3?lt.min.z:0;else{const mn=Math.pow(2,-J);Gt=Math.floor(je.width*mn),Pt=Math.floor(je.height*mn),C.isDataArrayTexture?qt=je.depth:C.isData3DTexture?qt=Math.floor(je.depth*mn):qt=1,jt=0,ee=0,Zt=0}at!==null?(ne=at.x,Oe=at.y,Je=at.z):(ne=0,Oe=0,Je=0);const Ie=Tt.convert(j.format),Jt=Tt.convert(j.type);let Pe;j.isData3DTexture?(W.setTexture3D(j,0),Pe=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),Pe=B.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const ce=B.getParameter(B.UNPACK_ROW_LENGTH),Tn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ki=B.getParameter(B.UNPACK_SKIP_PIXELS),An=B.getParameter(B.UNPACK_SKIP_ROWS),ui=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,je.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Zt);const Be=C.isDataArrayTexture||C.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const mn=E.get(C),Cn=E.get(j),wn=E.get(mn.__renderTarget),Ws=E.get(Cn.__renderTarget);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let bi=0;bi<qt;bi++)Be&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,E.get(C).__webglTexture,J,Zt+bi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Lt,Je+bi)),B.blitFramebuffer(jt,ee,Gt,Pt,ne,Oe,Gt,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||E.has(C)){const mn=E.get(C),Cn=E.get(j);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,us),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ca);for(let wn=0;wn<qt;wn++)Be?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,J,Zt+wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,J),Rn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Cn.__webglTexture,Lt,Je+wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Cn.__webglTexture,Lt),J!==0?B.blitFramebuffer(jt,ee,Gt,Pt,ne,Oe,Gt,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):Rn?B.copyTexSubImage3D(Pe,Lt,ne,Oe,Je+wn,jt,ee,Gt,Pt):B.copyTexSubImage2D(Pe,Lt,ne,Oe,jt,ee,Gt,Pt);Ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Pe,Lt,ne,Oe,Je,Gt,Pt,qt,Ie,Jt,je.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,Lt,ne,Oe,Je,Gt,Pt,qt,Ie,je.data):B.texSubImage3D(Pe,Lt,ne,Oe,Je,Gt,Pt,qt,Ie,Jt,je):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Lt,ne,Oe,Gt,Pt,Ie,Jt,je.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Lt,ne,Oe,je.width,je.height,Ie,je.data):B.texSubImage2D(B.TEXTURE_2D,Lt,ne,Oe,Gt,Pt,Ie,Jt,je);B.pixelStorei(B.UNPACK_ROW_LENGTH,ce),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ki),B.pixelStorei(B.UNPACK_SKIP_ROWS,An),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ui),Lt===0&&j.generateMipmaps&&B.generateMipmap(Pe),Ct.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),Ct.unbindTexture()},this.resetState=function(){k=0,Y=0,Q=null,Ct.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const vv={type:"change"},Mp={type:"start"},cx={type:"end"},Wc=new ou,xv=new as,jA=Math.cos(70*uM.DEG2RAD),_n=new Z,Kn=2*Math.PI,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nd=1e-6;class ZA extends QM{constructor(t,i=null){super(t,i),this.state=qe.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Fs,this._lastTargetPosition=new Z,this._quat=new Fs().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q_,this._sphericalDelta=new q_,this._scale=1,this._panOffset=new Z,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new Z,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QA.bind(this),this._onPointerDown=KA.bind(this),this._onPointerUp=JA.bind(this),this._onContextMenu=sR.bind(this),this._onMouseWheel=eR.bind(this),this._onKeyDown=nR.bind(this),this._onTouchStart=iR.bind(this),this._onTouchMove=aR.bind(this),this._onMouseDown=$A.bind(this),this._onMouseMove=tR.bind(this),this._interceptControlDown=rR.bind(this),this._interceptControlUp=oR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vv),this.update(),this.state=qe.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=_n.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<jA?this.object.lookAt(this.target):(xv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(xv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nd||this._lastTargetPosition.distanceToSquared(this.target)>nd?(this.dispatchEvent(vv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function KA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function QA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function JA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cx),this.state=qe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function $A(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=qe.DOLLY;break;case Br.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}break;case Br.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=qe.PAN}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Mp)}function tR(r){switch(this.state){case qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function eR(r){this.enabled===!1||this.enableZoom===!1||this.state!==qe.NONE||(r.preventDefault(),this.dispatchEvent(Mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(cx))}function nR(r){this.enabled!==!1&&this._handleKeyDown(r)}function iR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=qe.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=qe.TOUCH_PAN;break;default:this.state=qe.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=qe.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=qe.TOUCH_DOLLY_ROTATE;break;default:this.state=qe.NONE}break;default:this.state=qe.NONE}this.state!==qe.NONE&&this.dispatchEvent(Mp)}function aR(r){switch(this._trackPointer(r),this.state){case qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=qe.NONE}}function sR(r){this.enabled!==!1&&r.preventDefault()}function rR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lR(r){return Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"&&isFinite(t))}function Yr(r){if(!lR(r))throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(r)}`);return r}function Sv(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Fr(r,t){return r[0]+=t[0],r[1]+=t[1],r[2]+=t[2],r}function Ta(r,t){return[t[0]-r[0],t[1]-r[1],t[2]-r[2]]}function Hs(r){return Math.sqrt(on(r,r))}function cR(r,t){return r.map(i=>i*t)}function Mn(r,t){return r[0]*=t,r[1]*=t,r[2]*=t,r}function ux(r){const t=Hs(r);return cR(r,1/t)}function cl(r){const t=Hs(r);return Mn(r,1/t)}function on(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function os(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}function uR(r,t,i){const s=Math.cos(i),l=Math.sin(i),c=on(t,r),f=os(t,r);return r[0]=r[0]*s+f[0]*l+t[0]*c*(1-s),r[1]=r[1]*s+f[1]*l+t[1]*c*(1-s),r[2]=r[2]*s+f[2]*l+t[2]*c*(1-s),r}function fR(r,t){const i=cl(Fr([...t],Mn([...r],-on(t,r))));if(Math.hypot(...i)<.5){alert("无法确定 y 方向");return}const s=os(r,i),l=[r,i,s];return f=>Yr(l.map(d=>on(d,f)))}let fx=0;function hR(){fx=0}function Ep(r={}){return{id:r.id??fx++,pos:r.pos?[...r.pos]:[0,0,0],vel:r.vel?[...r.vel]:[0,0,0],moment:r.moment?[...r.moment]:[1,0,0],omega:r.omega?[...r.omega]:[0,0,0],color:r.color??"#93b5c9",group:r.group??"",f:[0,0,0],tau:[0,0,0],fixed:r.fixed??!1}}function fu(r,t){return{...r,...t}}function dR(r,t,i){if(t===null||i===null||t===i)return;const s=r.find(d=>d.id===t),l=r.find(d=>d.id===i);if(!s||!l)return;const c=fR(cl([...s.moment]),Ta(s.pos,l.pos));if(!c)return;const f=s.pos;return r.map(d=>fu(d,{pos:c(Ta(f,d.pos)),vel:c(d.vel??[0,0,0]),moment:c(d.moment),f:c(d.f??[0,0,0]),tau:c(d.tau??[0,0,0])}))}function pR(r,t){return r.map(i=>({...i,pos:Mn(i.pos,t)})).map(Ep)}function mR(r,t="preset",i="m"){const s={name:t,unit:i,magnets:r.map(c=>{const f={pos:c.pos.join(", "),moment:c.moment.join(", "),...c.group?{group:c.group}:{}};return c.color===void 0?f:{...f,color:typeof c.color=="number"?`#${c.color.toString(16).padStart(6,"0")}`:c.color}})};return JSON.stringify(s,null,2)}function gR(r){const t=JSON.parse(r),i=t.name||"",s=t.unit||"m",l=[],c=f=>{if(typeof f=="string"){const d=f.split(",").map(m=>parseFloat(m.trim()));if(d.length===3&&d.every(m=>!isNaN(m)))return d}return f};for(const f of t.magnets){const d={};for(const[m,p]of Object.entries(f))d[m]=c(p);Yr(d.pos),Yr(cl(d.moment)),l.push(d)}return{name:i,unit:s,magnets:l}}async function yv(r,t=.0025){const i=await fetch(`/magnetForce/presets/${r}.json`);try{const s=await i.text(),{name:l,unit:c,magnets:f}=gR(s),d={m:1,mm:.001,cm:.01,radius:t,diameter:t*2};if(!(c in d))throw new Error(`Unknown unit in preset: ${c}`);const m=d[c];return{name:l||r,magnets:pR(f,m)}}catch{if(r in $d){console.warn(`Preset "${r}" not found as file, falling back to built-in.`);const l=$d[r]();return l.map(c=>Mn(c.pos,t)),{name:r,magnets:l.map(Ep)}}throw new Error(`Preset "${r}" is not valid JSON`)}}async function _R(){const r=await fetch("/magnetForce/presets.json");if(!r.ok)throw new Error("presets.json missing");const t=await r.json(),i=Object.keys($d).filter(l=>!t.includes(l)),s=[...t,...i];return s.includes("pair")?["pair",...s.filter(l=>l!=="pair")]:s}const $d={chain:()=>Array.from({length:5},(r,t)=>({pos:[(t-2)*2*1.1,0,0],m:[1,0,0],color:t%2?4474111:16729156})),ring:()=>Array.from({length:6},(r,t)=>{const i=2*Math.PI*t/6,s=4;return{pos:[s*Math.cos(i),s*Math.sin(i),0],m:[Math.cos(i+Math.PI/2),Math.sin(i+Math.PI/2),0],color:t%2?4474111:16729156}}),random:()=>Array.from({length:8},(r,t)=>({pos:[(Math.random()-.5)*2*10,(Math.random()-.5)*2*10,(Math.random()-.5)*2*4],m:cl([Math.random()-.5,Math.random()-.5,Math.random()-.5]),color:t%2?4474111:16729156})),cube:()=>[[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1]].map((i,s)=>({pos:i.map(l=>l*2.4),m:[0,0,s<4?1:-1],color:s<4?16729156:4474111}))},hx=4*Math.PI*1e-7;function vR(r,t,i,s,l){const c=Hs(l),f=ux(l),d=on(i,f),m=on(s,f),p=on(i,s),g=4*Math.PI*hx*t*t*Math.pow(r,6)/9;return{d_len:c,d_hat:f,p:d,q:m,r:p,K:g,m1:i,m2:s,d:l}}function xR(r){const{d_len:t,p:i,q:s,r:l,K:c}=r;return c/t**3*(l-3*i*s)}function SR(r){const{d_len:t,d_hat:i,p:s,q:l,r:c,K:f,m1:d,m2:m}=r,p=t**4,g=3*f/p,_=5*s*l-c;return Mn([i[0]*_-d[0]*l-m[0]*s,i[1]*_-d[1]*l-m[1]*s,i[2]*_-d[2]*l-m[2]*s],g)}function yR(r){const{d_len:t,d_hat:i,p:s,q:l,K:c,m1:f,m2:d}=r,m=c/t**3,p=Mn(Sv(Mn(os(f,i),-3*l),os(f,d)),-m),g=Mn(Sv(Mn(os(d,i),-3*s),os(d,f)),-m);return{tor1:p,tor2:g}}function MR(r,t,i,s,l){const c=vR(r,t,i,s,l),f=xR(c),d=SR(c),m=Mn([...d],-1),{tor1:p,tor2:g}=yR(c);return{U:f,force1:d,force2:m,torque1:p,torque2:g}}const ER={radius:.0025,br:1.2,mass:5e-4,shellThickness:.01,gravity:-9.81,damping:.3,friction:.3};class bR{constructor(t={}){const i={...ER,...t};this.radius=i.radius,this.br=i.br,this.mass=i.mass,this.shellThickness=i.shellThickness*i.radius,this.gravity=i.gravity,this.damping=i.damping,this.friction=i.friction,this.mMag=i.br/hx,this.inertia=.4*i.mass*i.radius**2,this.DIST=i.radius*2}}function tp(r,t,i){if(Math.abs(r)<1e-20)return Math.abs(t)<1e-20?[]:[-i/t];const s=t*t-4*r*i;if(s<0)return[];if(s<1e-20)return[-t/(2*r)];const l=Math.sqrt(s);return[(-t-l)/(2*r),(-t+l)/(2*r)]}function Mv(r,t,i,s){if(Math.abs(r)<1e-20)return tp(t,i,s);const l=t/r,c=i/r,f=s/r,d=l/3,m=c-l*l/3,p=f-l*c/3+2*l*l*l/27,g=p*p/4+m*m*m/27;if(g>1e-12){const _=Math.sqrt(g),x=Math.cbrt(-p/2+_),y=Math.cbrt(-p/2-_);return[x+y-d]}else if(g<-1e-12){const _=Math.sqrt(-m*m*m/27),x=Math.acos(Math.max(-1,Math.min(1,-p/(2*_))))/3,y=2*Math.cbrt(_);return[y*Math.cos(x)-d,y*Math.cos(x+2*Math.PI/3)-d,y*Math.cos(x+4*Math.PI/3)-d]}else{const _=Math.cbrt(-p/2);return[2*_-d,-_-d]}}function TR(r,t,i,s,l){if(Math.abs(r)<1e-20)return Mv(t,i,s,l);const c=t/r,f=i/r,d=s/r,m=l/r,p=c/4,g=f-3*c*c/8,_=d-c*f/2+c*c*c/8,x=m-c*d/4+c*c*f/16-3*c*c*c*c/256;if(Math.abs(_)<1e-20){const L=[];for(const w of tp(1,g,x))if(w>=-1e-12){const U=Math.sqrt(Math.max(0,w));L.push(U-p,-U-p)}return L}const y=Mv(1,g/2,(g*g-4*x)/16,-_*_/64),b=Math.max(...y,1e-12),T=Math.sqrt(Math.max(b,0));if(T<1e-12)return[];const M=_/(4*T),v=[];for(const[L,w]of[[1,-M],[-1,M]])for(const U of tp(1,L*T,g/2+b+w))v.push(U-p);return v}function ep(r,t){const i=[],s=r.length;for(let l=0;l<s;l++)for(let c=l+1;c<s;c++){const f=r[l],d=r[c],m=Ta(f,d),p=Hs(m);p<=t&&i.push({i:l,j:c,normal:Mn(m,1/p),dist:p})}return i}function Ev(r,t,i,s=null,l=20,c=1e-7){const f=r.map(_=>[..._]),d=ep(f,t+i),m=t-i,p=t-i/2,g=s||r.map(()=>!1);for(let _=0;_<l;_++){let x=0;for(const{i:y,j:b}of d){const T=Ta(f[y],f[b]),M=Hs(T),v=Mn(T,1/M);let L=0;if(M<m?(L=p-M,x=Math.max(x,t-M)):M<t&&(L=(t-M)*.5,x=Math.max(x,t-M)),L>c){const w=f[y],U=f[b],P=+g[y]-+g[b],I=L*((1-P)*.5),O=L*((1+P)*.5);w[0]-=v[0]*I,w[1]-=v[1]*I,w[2]-=v[2]*I,U[0]+=v[0]*O,U[1]+=v[1]*O,U[2]+=v[2]*O}}if(x<c)break}return f}function AR(r,t,i,s,l=null,c=.3,f=1e-7){const d=l||r.map(()=>!1),m=t.map((x,y)=>d[y]?[0,0,0]:[...x]),p=i.map((x,y)=>d[y]?[0,0,0]:[...x]),g=dx(s,d),_=new Float64Array(s.length);if(g.length>0){const x=g.map(b=>s[b]);NR(p,x,d,f);const y=RR(m,p,x,d,c,5,f);g.forEach((b,T)=>{_[b]=y[T]})}return{constrainedForces:m,constrainedVel:p,forceLambda:_}}function dx(r,t){const i=[];for(let s=0;s<r.length;s++){const{i:l,j:c}=r[s];t[l]&&t[c]||i.push(s)}return i}function RR(r,t,i,s,l=.3,c=5,f=1e-7){const d=i.length,m=new Float64Array(d);if(d===0)return m;const p=i.map(L=>{const w=L.normal,[U,P]=DR(w);return[w,U,P]}),g=new Array(d).fill(!0),_=i.map((L,w)=>{const{i:U,j:P,normal:I}=L,O=Ta(t[P],t[U]),V=on(O,I),A=[O[0]-I[0]*V,O[1]-I[1]*V,O[2]-I[2]*V],D=Hs(A);return D>f?(g[w]=!1,Mn(A,-1/D)):[0,0,0]}),x=r.map(L=>[...L]),y=i.map(()=>[0,0,0]);for(let L=0;L<c;L++){const{A:w,b:U,eqMap:P}=Av(i,s,x,p,g),I=np(w,U);if(!I)break;const O=bv(I,P,g);if(CR(O,g,l,f)){for(let V=0;V<d;V++){m[V]=O[V].fn;const A=Tv(p[V],O[V],g[V],y[V]);$c(r,i[V],A,s)}return m}r.forEach((V,A)=>{const D=x[A];D[0]=V[0],D[1]=V[1],D[2]=V[2]});for(let V=0;V<d;V++)g[V]||(wR(p[V],O[V],y[V],_[V],l,f),$c(x,i[V],y[V],s))}const{A:b,b:T,eqMap:M}=Av(i,s,x,p,g),v=np(b,T);if(v){const L=bv(v,M,g);for(let w=0;w<d;w++){m[w]=L[w].fn;const U=Tv(p[w],L[w],g[w],y[w]);$c(r,i[w],U,s)}}return m}function $c(r,t,i,s){const{i:l,j:c}=t;if(!s[l]){const f=r[l];f[0]+=i[0],f[1]+=i[1],f[2]+=i[2]}if(!s[c]){const f=r[c];f[0]-=i[0],f[1]-=i[1],f[2]-=i[2]}}function bv(r,t,i){return t.map((s,l)=>{const c=r[s],f=i[l]?r[s+1]:0,d=i[l]?r[s+2]:0;return{fn:c,ft1:f,ft2:d}})}function CR(r,t,i,s){let l=!0;for(let c=0;c<r.length;c++){const{fn:f,ft1:d,ft2:m}=r[c],p=Math.sqrt(d*d+m*m),g=i*Math.abs(f);t[c]&&p>g+s?(t[c]=!1,l=!1):!t[c]&&p<=g-s}return l}function Tv(r,t,i,s){const{fn:l,ft1:c,ft2:f}=t,[d,m,p]=r,g=[l*d[0]+c*m[0]+f*p[0],l*d[1]+c*m[1]+f*p[1],l*d[2]+c*m[2]+f*p[2]];return i||Fr(g,s),g}function wR(r,t,i,s,l,c){const[f,d,m]=r,{fn:p,ft1:g,ft2:_}=t,x=l*Math.abs(p);if(s[0]!==0||s[1]!==0||s[2]!==0)i[0]=s[0]*x,i[1]=s[1]*x,i[2]=s[2]*x;else{const y=Math.sqrt(g*g+_*_);if(y>c){const b=x/y;i[0]=(g*d[0]+_*m[0])*b,i[1]=(g*d[1]+_*m[1])*b,i[2]=(g*d[2]+_*m[2])*b}else i[0]=0,i[1]=0,i[2]=0}}function DR(r){const t=Math.abs(r[0])<.9?[1,0,0]:[0,1,0],i=ux(os(r,t)),s=os(r,i);return[i,s]}function Av(r,t,i,s,l){const c=r.length,f=new Int32Array(c);let d=0;for(let y=0;y<c;y++)f[y]=d,d+=l[y]?3:1;const m=[],p=[],g=[],_=new Float64Array(d);for(let y=0;y<c;y++){const b=r[y],T=b.i,M=b.j,v=t[T]?0:1,L=t[M]?0:1,w=l[y]?3:1;for(let U=0;U<w;U++){const P=s[y][U],I=f[y]+U;_[I]=v*on(i[T],P)-L*on(i[M],P);for(let O=0;O<c;O++){const V=r[O],A=V.i,D=V.j,k=l[O]?3:1;for(let Y=0;Y<k;Y++){const Q=s[O][Y],ct=f[O]+Y,rt=on(P,Q);let F=0;T===A&&(F-=v*rt),T===D&&(F+=v*rt),M===A&&(F+=L*rt),M===D&&(F-=L*rt),Math.abs(F)>1e-15&&(m.push(I),p.push(ct),g.push(F))}}}}return{A:px(d,m,p,g),b:_,neq:d,eqMap:f}}function px(r,t,i,s){const l=new Int32Array(r);for(let g=0;g<t.length;g++)l[t[g]]++;const c=new Int32Array(r+1);for(let g=0;g<r;g++)c[g+1]=c[g]+l[g];const f=c[r],d=new Int32Array(f),m=new Float64Array(f),p=new Int32Array(r);for(let g=0;g<t.length;g++){const _=t[g],x=c[_]+p[_];let y=!1;for(let b=c[_];b<x;b++)if(d[b]===i[g]){m[b]+=s[g],y=!0;break}y||(d[x]=i[g],m[x]=s[g],p[_]++)}return{n:r,rowPtr:c,colIdx:d,values:m}}function UR(r,t,i,s){const l=t.length,c=new Float64Array(l),f=[],d=[],m=[];for(let g=0;g<l;g++){const _=r[t[g]],x=_.i,y=_.j,b=_.normal,T=i[x]?0:1,M=i[y]?0:1;c[g]=T*on(s[x],b)-M*on(s[y],b);for(let v=0;v<l;v++){const L=r[t[v]],w=L.i,U=L.j,P=L.normal,I=on(b,P);let O=0;x===w&&(O-=T*I),x===U&&(O+=T*I),y===w&&(O+=M*I),y===U&&(O-=M*I),Math.abs(O)>1e-15&&(f.push(g),d.push(v),m.push(O))}}return{A:px(l,f,d,m),b:c}}function np(r,t){const i=r.n,s=Array.from({length:i},()=>new Float64Array(i));for(let f=0;f<i;f++)for(let d=r.rowPtr[f];d<r.rowPtr[f+1];d++)s[f][r.colIdx[d]]=r.values[d];const l=new Float64Array(t);for(let f=0;f<i;f++){let d=Math.abs(s[f][f]),m=f;for(let g=f+1;g<i;g++){const _=Math.abs(s[g][f]);_>d&&(d=_,m=g)}if(d<1e-12)return null;if(m!==f){const g=s[f];s[f]=s[m],s[m]=g;const _=l[f];l[f]=l[m],l[m]=_}const p=s[f][f];for(let g=f+1;g<i;g++){const _=s[g][f]/p;s[g][f]=0;for(let x=f+1;x<i;x++)s[g][x]-=_*s[f][x];l[g]-=_*l[f]}}const c=new Float64Array(i);for(let f=i-1;f>=0;f--){let d=l[f];for(let m=f+1;m<i;m++)d-=s[f][m]*c[m];c[f]=d/s[f][f]}return c}function LR(r,t,i,s,l,c,f){for(let d=0;d<i.length;d++){const m=l[d],p=i[d];Math.abs(m)<f||$c(r,t[p],Mn(t[p].normal,m),s)}}function NR(r,t,i,s=1e-7){if(t.length===0)return r;const l=dx(t,i);if(l.length===0)return r;const{A:c,b:f}=UR(t,l,i,r),d=np(c,f);return d&&LR(r,t,l,i,d,null,s),r}function OR(r,t,i,s,l,c,f=1e-7){const d=Ta(i,s),m=Mn(d,.5),p=on(r,r)-l*l;if(p<=0)return 0;const g=2*on(r,t),_=2*on(r,m)+on(t,t),x=2*on(t,m),y=on(m,m),b=TR(y,x,_,g,p),T=(l*(1+f))**2;let M=null;for(const v of b)if(v>1e-12&&v<=c+1e-12){if(y*v*v*v*v+x*v*v*v+_*v*v+g*v+p+l*l>T)continue;(M===null||v<M)&&(M=v)}return M}function PR(r,t,i,s,l,c,f=null){if(c<1e-12)return{newPos:r.map(b=>[...b]),newVel:i.map(b=>[...b]),safedt:0,reason:"zero delta time"};const d=f||r.map(()=>!1),m=r.length,p=t.map((b,T)=>Mn(Yr([...b]),+!d[T]/s));let g=c,_="max delta time";for(let b=0;b<m;b++)for(let T=b+1;T<m;T++){if(d[b]&&d[T])continue;const M=Ta(r[b],r[T]),v=Ta(i[b],i[T]),L=OR(M,v,p[b],p[T],l,g);L!==null&&L<g&&(g=Math.max(L-1e-12,0),_=`collision between ${b} and ${T}`)}for(let b=0;b<m;b++)if(!d[b]){const T=l/2,M=i[b],v=p[b],L=Math.hypot(M[0],M[1],M[2]),w=Math.hypot(v[0],v[1],v[2]);let U;if(w>1e-12)U=(-L+Math.sqrt(L*L+2*w*T))/w;else if(L>1e-12)U=T/L;else continue;U<g&&(g=U,_=`max movement of ${b}`)}const x=r.map((b,T)=>{if(d[T])return[...b];const M=g,v=.5*g*g,L=i[T],w=p[T];return[b[0]+L[0]*M+w[0]*v,b[1]+L[1]*M+w[1]*v,b[2]+L[2]*M+w[2]*v]}),y=i.map((b,T)=>{if(d[T])return[0,0,0];const M=g,v=p[T];return[b[0]+v[0]*M,b[1]+v[1]*M,b[2]+v[2]*M]});return{newPos:x,newVel:y,safedt:g,reason:_}}function zR(r,t,i,s,l){return t.map((f,d)=>{const m=r[d],p=f.moment,g=f.omega,_=IR(p,g,m,i,s,l);return{moment:_.moment,omega:_.omega}})}function IR(r,t,i,s,l,c=.3){const f=Mn([...i],1/l),m=on(i,t)<0?c:1,p=[t[0]*m+f[0]*s,t[1]*m+f[1]*s,t[2]*m+f[2]*s],g=Hs(p);if(g<1e-20)return{moment:r,omega:p};const _=Math.min(g*s,.5),x=Mn([...p],1/g),y=uR([...r],x,_);return{moment:cl(y),omega:p}}function FR(r,t,i){return()=>(r.current=new BR(i),t(!0),()=>{})}class BR{constructor(t=.0025){this.params=new bR({radius:t})}reset(){}calcMagneticForces(t,i,s){const l=t.length,c=t.map(()=>[0,0,0]),f=t.map(()=>[0,0,0]),d=t.map(()=>new Map);for(let m=0;m<l;m++)for(let p=m+1;p<l;p++){const g=MR(i,s,t[m].moment,t[p].moment,Ta(t[m].pos,t[p].pos));Fr(c[m],g.force1),Fr(c[p],g.force2),Fr(f[m],g.torque1),Fr(f[p],g.torque2),d[m].set(`M#${p}`,g.force1),d[p].set(`M#${m}`,g.force2)}return{coforces:c,torques:f,forces:d}}step(t,i,s=!1){const l=this.params.radius*2,c=t.map(w=>!!w.fixed),f=t.map(w=>w.pos),d=Ev(f,l,this.params.shellThickness,c),{coforces:m,torques:p,forces:g}=this.calcMagneticForces(t.map((w,U)=>({pos:d[U],moment:w.moment})),this.params.radius,this.params.mMag);if(s){const w=this.params.gravity;m.forEach((U,P)=>{if(!c[P]){const I=w*this.params.mass;U[1]+=I,g[P].set("Gravity",[0,I,0])}})}const{constrainedForces:_,constrainedVel:x}=AR(d,m,t.map(w=>w.vel),ep(d,l+this.params.shellThickness),c,this.params.friction),{newPos:y,newVel:b,safedt:T,reason:M}=PR(d,_,x,this.params.mass,l-this.params.shellThickness,i,c),v=Ev(y,l,this.params.shellThickness,c);ep(v,l+this.params.shellThickness).map(w=>{if(w.dist<this.params.radius)throw new Error(`球${w.i}-球${w.j}重叠过深: dist=${(w.dist*1e3).toFixed(4)}mm`)});const L=zR(p,t.map(w=>({moment:w.moment,omega:w.omega})),T,this.params.inertia,.3);return{newMagnets:t.map((w,U)=>fu(w,{pos:v[U],vel:b[U],f:_[U],tau:p[U],moment:L[U].moment,omega:L[U].omega})),safedt:T,forces:g,reason:M}}}function HR({getMagnets:r,setMagnets:t,selectedId:i,onApplySnap:s}){const l=de.useRef([]),c=de.useRef(-1),f=p=>p.map(g=>({...g,pos:[...g.pos],vel:[...g.vel],moment:[...g.moment]})),d=de.useCallback(p=>{const g=l.current;if(g.length>0){const _=g[g.length-1];if(GR(_,p))return}g.push(f(p)),g.length>100&&g.shift(),c.current=-1},[]),m=de.useCallback(()=>{l.current=[],c.current=-1},[]);return de.useEffect(()=>{const p=g=>{if(g.key!=="ArrowUp"&&g.key!=="ArrowDown")return;g.preventDefault();const _=l.current;if(_.length!==0)if(g.key==="ArrowUp"){if(c.current===-1)_.push(f(r())),c.current=_.length-2;else if(c.current>0)c.current--;else return;s(_[c.current])}else{if(c.current===-1)return;if(c.current++,c.current>=_.length-1){const x=_.pop();c.current=-1,s(x)}else s(_[c.current])}};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r,s,i]),{push:d,reset:m,histIdxRef:c}}function GR(r,t){if(r.length!==t.length)return!1;for(let i=0;i<r.length;i++){const s=r[i],l=t[i],c=new Set([...Object.keys(s),...Object.keys(l)]);for(const f of c){const d=s[f],m=l[f];if(Array.isArray(d)&&Array.isArray(m)){if(d.length!==m.length||d.some((p,g)=>Math.abs(p-m[g])>1e-6))return!1}else if(d!==m)return!1}}return!0}const VR=32,id=.1;function kR(r,t,i,s,l,c,f,d,m,p,g,_,x,y){const b=de.useRef(null),T=de.useRef(""),M=de.useCallback(()=>{const{magnets:v,isSimulating:L,simSpeed:w,useGravity:U}=t.current,P=r.current;if(!L||!P||v.length<2)return;const{newMagnets:I,safedt:O,reason:V}=P.step(v,w,U);T.current=`${O*1e3}ms (${V})`,x(Y=>Y+O);const A=new Map(v.map((Y,Q)=>[Y.id,Q])),D=I.map((Y,Q)=>fu(v[A.get(Y.id)],{...Y,pos:Yr(Y.pos.map(ct=>{if(Math.abs(ct)>id)throw new Error(`球${Q}超出边界: ${Y.pos.map(rt=>(rt*1e3).toFixed(1)).join(",")}mm`);return Math.max(Math.min(ct,id),-id)}))}));g(D),m.current=!0;const k=p.current;if(k!==null){const Y=D.find(Q=>Q.id===k);Y&&_(Q=>Q&&{...Q,m_pos:Y.pos.map(ct=>ct*1e3).map(y),m_vel:(Y.vel??[0,0,0]).map(ct=>ct*1e3).map(y),moment:Y.moment.map(y),f:(Y.f??[0,0,0]).map(y),tau:(Y.tau??[0,0,0]).map(y)})}},[t,r,m,p,g,_,x,y]);return de.useEffect(()=>{const v=s.current,L=l.current,w=c.current,U=f.current,P=d.current;if(!v||!L||!w||!U||!i)return;let I=performance.now();const O=V=>{b.current=requestAnimationFrame(O),V-I>VR&&(M(),I=V),P==null||P.update(),U.render(L,w)};return b.current=requestAnimationFrame(O),()=>{cancelAnimationFrame(b.current)}},[i,M,s,l,c,f,d]),{stepDeltaTimeRef:T}}const ki={padding:"8px 12px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#aaa",fontSize:"11px",cursor:"pointer"},XR={padding:"6px 14px",background:"#1a1a2a",border:"1px solid #333",borderRadius:"4px",color:"#ccc",fontSize:"12px",cursor:"pointer"},WR={width:"100%",boxSizing:"border-box",background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"10px",padding:"3px 5px",outline:"none",fontFamily:"monospace"},qR={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3px",marginBottom:"5px"},YR=["X","Y","Z"];function $o({field:r,label:t,color:i,editable:s,draft:l,setDraft:c,onCommit:f}){return Xt.jsxs("div",{children:[Xt.jsx("div",{style:{fontSize:"10px",color:i,marginBottom:"3px"},children:t}),Xt.jsx("div",{style:qR,children:YR.map((d,m)=>{var p;return Xt.jsx("input",{placeholder:d,disabled:!s,style:{...WR,opacity:s?1:.4,cursor:s?"text":"not-allowed"},value:((p=l[r])==null?void 0:p[m])??"",onChange:g=>{if(!s)return;const _=g.target.value;c(x=>{const y={...x,[r]:[...x[r]]};return y[r][m]=_,y})},onKeyDown:g=>{!s||g.key!=="Enter"||(f(r,m,l[r][m]),g.target.blur())},onFocus:g=>{s&&(g.target.style.borderColor="#4488ff")},onBlur:g=>{g.target.style.borderColor="#333"}},d)})})]})}function jR({isSimulating:r,simSpeed:t,stepDeltaTimeRef:i,totalSimTime:s,rotateMoments:l,useGravity:c,magnets:f,selectedId:d,refYId:m,setRefYId:p,onToggle:g,onResetVel:_,onPerturb:x,onReframe:y,onSimSpeedChange:b,onRotateMomentsChange:T,onGravityChange:M}){return Xt.jsxs("div",{style:{padding:"12px",background:r?"linear-gradient(135deg, #1a2a1a, #0a150a)":"#1a1a2a",borderRadius:"8px",border:`1px solid ${r?"#2a4a2a":"#2a2a4a"}`},children:[Xt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"10px"},children:"动力学模拟"}),Xt.jsx("button",{onClick:g,style:{width:"100%",padding:"12px",border:"none",borderRadius:"6px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",marginBottom:"10px",background:r?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:r?"⏸ 暂停模拟":"▶ 开始模拟"}),Xt.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[Xt.jsx("button",{onClick:_,style:ki,children:"重置速度"}),Xt.jsx("button",{onClick:x,style:ki,children:"扰动位置"})]}),Xt.jsx("div",{style:{padding:"10px",background:"#111122",borderRadius:"6px",border:"1px solid #2a2a44"},children:Xt.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[Xt.jsxs("select",{value:m??"",onChange:v=>p(v.target.value===""?null:parseInt(v.target.value)),style:{flex:1,background:"#0c0c1a",border:"1px solid #333",borderRadius:"3px",color:"#e0e0e0",fontSize:"11px",padding:"4px",outline:"none"},children:[Xt.jsx("option",{value:"",children:"— y 方向参考球 —"}),f.map(v=>Xt.jsxs("option",{value:v.id,children:["球 #",v.id]},v.id))]}),Xt.jsx("button",{onClick:y,disabled:d===null||m===null||d===m,style:{...ki,opacity:d!==null&&m!==null&&d!==m?1:.4,whiteSpace:"nowrap"},children:"坐标变换"})]})}),Xt.jsxs("div",{style:{marginTop:"10px"},children:[Xt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["最大模拟速度: ",t,"×"]}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["当前每帧时间步长: ",i.current]}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#888",marginBottom:"4px"},children:["模拟总时间: ",s,"s"]}),Xt.jsx("input",{type:"range",min:"-6",max:"0",step:"0.1",value:Math.log10(t),onChange:v=>b(Math.pow(10,Math.max(-6,Math.min(0,parseFloat(v.target.value))))),style:{width:"100%",accentColor:"#4488ff"}})]}),Xt.jsx(Rv,{label:"允许磁矩旋转",checked:l,onChange:T}),Xt.jsx(Rv,{label:"重力 (y 方向)",checked:c,onChange:M})]})}function ZR({selectedId:r,selectedMag:t,isSimulating:i,editDraft:s,setEditDraft:l,onToggle:c,onToggleFixed:f,onRemove:d,onCommit:m}){const p={draft:s,setDraft:l,onCommit:m};return Xt.jsxs("div",{style:{padding:"12px",background:"#15152a",borderRadius:"8px",border:"1px solid #2a2a4a"},children:[Xt.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"},children:[Xt.jsxs("button",{disabled:!0,style:{...ki,flex:1,opacity:1},children:["选中磁球 #",r]}),Xt.jsx("button",{onClick:c,style:{...ki,flex:1,opacity:1,background:i?"linear-gradient(135deg, #aa3333, #882222)":"linear-gradient(135deg, #33aa33, #228822)"},children:i?"⏸ 暂停模拟":"▶ 开始模拟"}),Xt.jsx("button",{onClick:f,style:{...ki,flex:1,background:t!=null&&t.fixed?"#2a1a4a":"#1a1a2a",borderColor:t!=null&&t.fixed?"#6a3aaa":"#333"},children:t!=null&&t.fixed?"📌 已固定":"📌 固定"}),Xt.jsx("button",{onClick:d,style:{...ki,flex:1,background:"#3a1a1a",borderColor:"#5a2a2a"},children:"− 移除"})]}),Xt.jsxs("div",{style:{fontSize:"11px",color:"#666",marginBottom:"6px"},children:[i?"数据":"编辑数据",Xt.jsx("span",{style:{color:"#444",fontStyle:"italic"},children:i?"":"(回车确认 · ↑↓ 撤销)"})]}),s&&Xt.jsxs(Xt.Fragment,{children:[Xt.jsx($o,{field:"m_pos",label:"位置 (mm)",color:"#88ccff",editable:!i,...p}),Xt.jsx($o,{field:"m_vel",label:"速度 (mm/s)",color:"#88ffcc",editable:!i,...p}),Xt.jsx($o,{field:"moment",label:"磁矩 (方向)",color:"#ffdd00",editable:!i,...p}),Xt.jsx($o,{field:"f",label:"受力 (N)",color:"#00ffff",editable:!1,...p}),Xt.jsx($o,{field:"tau",label:"力矩 (N·m)",color:"#ff00ff",editable:!1,...p})]})]})}function Rv({label:r,checked:t,onChange:i}){return Xt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",cursor:"pointer"},children:[Xt.jsx("input",{type:"checkbox",checked:t,onChange:s=>i(s.target.checked),style:{accentColor:"#4488ff"}}),Xt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:r})]})}const Cv=100;function KR(){const t=.0025*Cv,[i,s]=de.useState([]),[l,c]=de.useState(null),[f,d]=de.useState(null),[m,p]=de.useState(!1),[g,_]=de.useState(4e-5),[x,y]=de.useState(!0),[b,T]=de.useState(!0),[M,v]=de.useState(!0),[L,w]=de.useState(0),[U,P]=de.useState(null),[I,O]=de.useState([]),[V,A]=de.useState(!1),D=de.useRef(null),k=de.useRef(null),Y=de.useRef(null),Q=de.useRef(null),ct=de.useRef(null),rt=de.useRef([]),F=de.useRef([]),G=de.useRef([]),nt=de.useRef([]),xt=de.useRef(!0),St=de.useRef(null);St.current=l;const z=de.useRef({magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:b});z.current={magnets:i,isSimulating:m,simSpeed:g,rotateMoments:x,useGravity:b};const et=de.useRef(null);de.useEffect(FR(et,A,.0025),[]);const mt=Et=>(Et==null?void 0:Et.toFixed(6))??"N/A",At=Et=>({m_pos:Et.pos.map(B=>B*1e3).map(mt),m_vel:Et.vel.map(B=>B*1e3).map(mt),moment:Et.moment.map(mt),f:(Et.f??[0,0,0]).map(mt),tau:(Et.tau??[0,0,0]).map(mt)});de.useEffect(()=>{_R().then(Et=>(O(Et),yv(Et[0],.0025))).then(Et=>s(Et.magnets)).catch(console.error)},[]);const{push:It,reset:it,histIdxRef:ht}=HR({getMagnets:()=>z.current.magnets,setMagnets:s,selectedId:l,onApplySnap:Et=>{xt.current=!0,s(Et);const B=Et.find(ae=>ae.id===l);B&&P(At(B))}}),{stepDeltaTimeRef:Dt}=kR(et,z,V,D,k,Y,Q,ct,xt,St,s,P,w,mt);de.useEffect(()=>{const Et=D.current;if(!Et||!V)return;let B=Et.clientWidth||800,ae=Et.clientHeight||600;const Qt=new OM;Qt.background=new Re(657941),k.current=Qt;const te=new yi(50,B/ae,.1,1e3);te.position.set(0,0,12),Y.current=te;const Ct=new YA({antialias:!0});Ct.setSize(B,ae),Ct.setPixelRatio(Math.min(window.devicePixelRatio,2)),Et.appendChild(Ct.domElement),Q.current=Ct;const N=new ZA(te,Ct.domElement);N.enableDamping=!0,N.dampingFactor=.05,N.rotateSpeed=.5,N.zoomSpeed=.8,N.panSpeed=.5,N.minDistance=2,N.maxDistance=50,ct.current=N,Qt.add(new YM(16777215,.5));const E=new k_(16777215,.8);E.position.set(5,5,5),Qt.add(E);const W=new k_(4482815,.3);W.position.set(-5,-5,-5),Qt.add(W);const ut=new KM(16,16,3355477,2236979);ut.rotation.x=Math.PI/2,Qt.add(ut);const dt=()=>{const ot=Et.clientWidth||800,Nt=Et.clientHeight||600;te.aspect=ot/Nt,te.updateProjectionMatrix(),Ct.setSize(ot,Nt)};return window.addEventListener("resize",dt),()=>{window.removeEventListener("resize",dt),N.dispose(),Ct.dispose(),k.current=null,Et.contains(Ct.domElement)&&Et.removeChild(Ct.domElement)}},[V]),de.useEffect(()=>{const Et=k.current;if(!Et)return;const B=E=>{Et.remove(E),E.geometry&&E.geometry.dispose(),E.material&&(Array.isArray(E.material)?E.material.forEach(W=>W.dispose()):E.material.dispose()),E.children&&E.children.forEach(B)};[...rt.current,...F.current,...G.current,...nt.current].forEach(B);const ae=new Z(0,1,0),Qt=[],te=[],Ct=[],N=[];i.forEach(E=>{const W=new Sp(t,32,32),ut=new VM({color:E.color,metalness:.8,roughness:.2,emissive:E.color,emissiveIntensity:.15}),dt=new Ni(W,ut);if(dt.userData.id=E.id,Et.add(dt),Qt.push(dt),!M){te.push(null),Ct.push(null),N.push(null);return}const ot=new Zh(ae,new Z,t*3.6,16768256,t*.5,t*.3);Et.add(ot),te.push(ot);const Nt=new Zh(ae,new Z,t,65535,t*.4,t*.24);Nt.visible=!1,Et.add(Nt),Ct.push(Nt);const Rt=new Zh(ae,new Z,t,16711935,t*.32,t*.2);Rt.visible=!1,Et.add(Rt),N.push(Rt)}),rt.current=Qt,F.current=te,G.current=Ct,nt.current=N},[i.length,M,V]),de.useEffect(()=>{if(!k.current)return;const Et=rt.current,B=F.current,ae=G.current,Qt=nt.current;i.forEach((te,Ct)=>{const N=te.pos.map(Nt=>Nt*Cv),E=new Z(N[0],N[1],N[2]),W=Et[Ct];if(W&&(W.position.copy(E),W.material.emissiveIntensity=l===te.id?.4:.15),!M)return;const ut=B[Ct];if(ut){const Nt=new Z(...te.moment).normalize();ut.position.copy(E),ut.setDirection(Nt),ut.setLength(t*3.6,t*.5,t*.3)}const dt=ae[Ct];if(dt){const Nt=te.f?new Z(...te.f).length():0;if(Nt>1e-25){dt.visible=!0;const Rt=new Z(...te.f).normalize(),kt=t*Math.min(6,Math.max(.5,Math.log10(Nt+1e-10)+10));dt.position.copy(E),dt.setDirection(Rt),dt.setLength(kt,t*.4,t*.24)}else dt.visible=!1}const ot=Qt[Ct];if(ot){const Nt=te.tau?new Z(...te.tau).length():0;if(Nt>1e-25){ot.visible=!0;const Rt=new Z(...te.tau).normalize(),kt=t*Math.min(5,Math.max(.4,Math.log10(Nt+1e-10)+8));ot.position.copy(E),ot.setDirection(Rt),ot.setLength(kt,t*.32,t*.2)}else ot.visible=!1}})},[i,l,M,V]),de.useEffect(()=>{if(l===null){P(null);return}const Et=i.find(B=>B.id===l);P(Et?At(Et):null)},[l]);const Wt=Et=>{const B=D.current,ae=Y.current;if(!B||!ae)return;const Qt=B.getBoundingClientRect(),te=new fe((Et.clientX-Qt.left)/Qt.width*2-1,-((Et.clientY-Qt.top)/Qt.height)*2+1),Ct=new ZM;Ct.setFromCamera(te,ae);const N=Ct.intersectObjects(rt.current);c(N.length>0?N[0].object.userData.id:null)},Vt=()=>{xt.current=!0,s(Et=>[...Et,Ep({pos:[(Math.random()-.5)*.02,(Math.random()-.5)*.02,0],color:Math.random()>.5?4474111:16729156})]),w(0)},xe=()=>{l!==null&&(xt.current=!0,s(Et=>Et.filter(B=>B.id!==l)),c(null),w(0))},Qe=Et=>{var B;(B=et.current)==null||B.reset(),it(),xt.current=!0,hR(),yv(Et,.0025).then(ae=>s(ae.magnets)),c(null),p(!1),w(0)},Se=(Et,B,ae)=>{const Qt=parseFloat(ae);if(isNaN(Qt))return;const Ct={m_pos:["pos",.001],m_vel:["vel",.001],moment:["moment",1]}[Et];if(!Ct)return;const[N,E]=Ct;It(i);const W=i.map(ut=>{if(ut.id!==l)return ut;const dt=[...ut[N]??[0,0,0]];return dt[B]=Qt*E,{...ut,[N]:dt}});It(W),ht.current=-1,xt.current=!0,s(W),P(ut=>{if(!ut)return ut;const dt={...ut,[Et]:[...ut[Et]]};return dt[Et][B]=mt(Qt),dt})},_e=de.useCallback(Et=>{const B=mR(i.map(ae=>({...ae,pos:ae.pos.map(Qt=>Qt/.0025)})),"exported","radius");if(Et==="copy")navigator.clipboard.writeText(B).then(()=>alert("已复制到剪贴板")).catch(()=>alert("复制失败"));else{const ae=Object.assign(document.createElement("a"),{href:URL.createObjectURL(new Blob([B],{type:"application/json"})),download:`magnets_${Date.now()}.json`});ae.click(),URL.revokeObjectURL(ae.href)}},[i]),Ce=()=>{const Et=dR(i,l,f);Et&&(It(i),It(Et),xt.current=!0,s(Et))},oe=()=>{m||(xt.current=!0),p(Et=>!Et)};return V?Xt.jsxs("div",{style:{display:"flex",width:"100%",height:"100vh",background:"#08080f",fontFamily:"system-ui, -apple-system, sans-serif",color:"#e0e0e0"},children:[Xt.jsxs("div",{style:{width:"300px",padding:"16px",background:"linear-gradient(180deg, #12121f 0%, #0a0a15 100%)",borderRight:"1px solid #2a2a3a",overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px"},children:[Xt.jsxs("h1",{style:{fontSize:"18px",margin:0,color:"#fff",borderBottom:"1px solid #333",paddingBottom:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[Xt.jsx("span",{style:{fontSize:"24px"},children:"🧲"})," NdFeB 磁力球模拟",Xt.jsx("span",{style:{fontSize:"10px",color:"#666",marginLeft:"auto"},children:"PGS"})]}),Xt.jsx(jR,{isSimulating:m,simSpeed:g,stepDeltaTimeRef:Dt,totalSimTime:L,rotateMoments:x,useGravity:b,magnets:i,selectedId:l,refYId:f,setRefYId:d,onToggle:oe,onResetVel:()=>{xt.current=!0,s(Et=>Et.map(B=>({...B,vel:[0,0,0],omega:[0,0,0]})))},onPerturb:()=>{xt.current=!0,s(Et=>Et.map(B=>fu(B,{pos:Yr(B.pos.map(ae=>ae+(Math.random()-.5)*.3*.0025))})))},onReframe:Ce,onSimSpeedChange:_,onRotateMomentsChange:y,onGravityChange:T}),Xt.jsxs("div",{style:{display:"flex",gap:"8px"},children:[Xt.jsx("button",{onClick:Vt,style:{...ki,flex:1,background:"#1a3a1a",borderColor:"#2a5a2a"},children:"+ 添加磁球"}),Xt.jsx("button",{onClick:()=>_e("download"),style:{...ki,flex:1},children:"⬇ 导出"}),Xt.jsx("button",{onClick:()=>_e("copy"),style:{...ki,flex:1},children:"📋 复制"})]}),Xt.jsxs("div",{children:[Xt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"8px"},children:"预设结构"}),Xt.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:I.map(Et=>Xt.jsx("button",{onClick:()=>Qe(Et),style:XR,children:Et},Et))})]}),l!==null&&Xt.jsx(ZR,{selectedId:l,selectedMag:i.find(Et=>Et.id===l),isSimulating:m,editDraft:U,setEditDraft:P,onToggle:oe,onToggleFixed:()=>{xt.current=!0,s(Et=>Et.map(B=>B.id===l?{...B,fixed:!B.fixed}:B))},onRemove:xe,onCommit:Se}),Xt.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[Xt.jsx("input",{type:"checkbox",checked:M,onChange:Et=>v(Et.target.checked),style:{accentColor:"#4488ff"}}),Xt.jsx("span",{style:{fontSize:"12px",color:"#aaa"},children:"显示矢量箭头"})]})]}),Xt.jsx("div",{ref:D,onClick:Wt,style:{flex:1,minWidth:"400px",minHeight:"400px",cursor:"pointer"}})]}):Xt.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#08080f",color:"#e0e0e0",fontFamily:"system-ui"},children:Xt.jsxs("div",{children:[Xt.jsx("div",{style:{fontSize:"24px",marginBottom:"10px"},children:"🧲"}),Xt.jsx("div",{children:"Loading physics engine..."})]})})}Cy.createRoot(document.getElementById("root")).render(Xt.jsx(de.StrictMode,{children:Xt.jsx(KR,{})}));
